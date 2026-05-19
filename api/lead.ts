import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

type Payload = {
  fullName?: string
  email?: string
  phone?: string
  company?: string
  eventType?: string
  eventDate?: string
  guestCount?: string
  city?: string
  notes?: string
  consent?: boolean
  // anti-spam
  website?: string
  startedAt?: number
}

const EVENT_TYPE_LABELS: Record<string, string> = {
  wedding: 'Wedding / Private Event',
  corporate: 'Corporate / Brand Event',
  festival: 'Festival / Concert',
  sports: 'Sports / Competition',
  other: 'Other',
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const digitCount = (s: string) => s.replace(/\D/g, '').length
const ok = (s: unknown): s is string => typeof s === 'string' && s.trim().length > 0
const isValidEmail = (s: string) => EMAIL_RE.test(s)
const isValidPhone = (s: string) => {
  const n = digitCount(s)
  return n >= 7 && n <= 15
}

// Trim, cap length, strip control chars. Defends against header injection in subject/body.
// eslint-disable-next-line no-control-regex
const CONTROL_CHARS = /[\u0000-\u001f\u007f]/g
const clean = (s: string, max = 500) =>
  s.replace(CONTROL_CHARS, ' ').trim().slice(0, max)

// Naive in-memory rate limiter, per warm function instance.
// Not authoritative across cold starts or multiple regions, but blocks the easy attacks.
// For stricter limits, plug in Upstash / Vercel KV.
const RATE_WINDOW_MS = 60_000
const RATE_MAX = 5
const ipHits = new Map<string, number[]>()
const rateLimited = (ip: string) => {
  const now = Date.now()
  const hits = (ipHits.get(ip) || []).filter(t => now - t < RATE_WINDOW_MS)
  hits.push(now)
  ipHits.set(ip, hits)
  return hits.length > RATE_MAX
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string))

const row = (label: string, value: string) => `
  <tr>
    <td style="padding:8px 16px 8px 0;color:#666;font-size:13px;vertical-align:top;white-space:nowrap;">${escapeHtml(label)}</td>
    <td style="padding:8px 0;color:#111;font-size:14px;vertical-align:top;">${escapeHtml(value).replace(/\n/g, '<br/>')}</td>
  </tr>`

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.EMAIL_FROM
  const to = process.env.EMAIL_TO
  if (!apiKey || !from || !to) {
    console.error('Missing env vars: RESEND_API_KEY / EMAIL_FROM / EMAIL_TO')
    return res.status(500).json({ error: 'Server is not configured.' })
  }

  // Vercel may deliver the body parsed (object) or as a string depending on runtime.
  let body: Payload
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {})
  } catch {
    return res.status(400).json({ error: 'Invalid JSON' })
  }

  // Honeypot — silently succeed so bots don't learn the trap exists.
  if (body.website && String(body.website).length > 0) {
    return res.status(200).json({ ok: true })
  }

  // Reject submissions faster than a real human (<2s).
  if (typeof body.startedAt === 'number' && Date.now() - body.startedAt < 2000) {
    return res.status(400).json({ error: 'Submission too fast.' })
  }

  // Rate limit by IP.
  const ip =
    (req.headers['x-forwarded-for'] as string | undefined)?.split(',')[0]?.trim() ||
    (req.socket && req.socket.remoteAddress) ||
    'unknown'
  if (rateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests. Try again in a minute.' })
  }

  // Server-side validation (mirrors client).
  const fieldErrors: string[] = []
  if (!ok(body.fullName)) fieldErrors.push('fullName')
  if (!ok(body.email) || !isValidEmail(body.email!)) fieldErrors.push('email')
  if (!ok(body.phone) || !isValidPhone(body.phone!)) fieldErrors.push('phone')
  if (!ok(body.eventType)) fieldErrors.push('eventType')
  if (body.consent !== true) fieldErrors.push('consent')
  if (fieldErrors.length) {
    return res.status(400).json({ error: 'Validation failed', fields: fieldErrors })
  }

  const fullName = clean(body.fullName!)
  const email = clean(body.email!, 200)
  const phone = clean(body.phone!, 60)
  const company = body.company ? clean(body.company) : ''
  const eventTypeRaw = clean(body.eventType!, 60)
  const eventType = EVENT_TYPE_LABELS[eventTypeRaw] || eventTypeRaw
  const eventDate = body.eventDate ? clean(body.eventDate, 40) : ''
  const guestCount = body.guestCount ? clean(body.guestCount, 40) : ''
  const city = body.city ? clean(body.city, 120) : ''
  const notes = body.notes ? clean(body.notes, 2000) : ''
  const submittedAt = new Date().toISOString()

  const textLines = [
    'New Start for Free Request — Photify',
    '',
    `Full name: ${fullName}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    company ? `Company / Organization: ${company}` : null,
    `Event type: ${eventType}`,
    eventDate ? `Event date: ${eventDate}` : null,
    guestCount ? `Number of guests: ${guestCount}` : null,
    city ? `City / Location: ${city}` : null,
    notes ? `\nNotes:\n${notes}` : null,
    '',
    `Submitted at: ${submittedAt}`,
  ].filter(Boolean) as string[]
  const text = textLines.join('\n')

  const html = `<!doctype html>
<html><body style="margin:0;padding:24px;background:#f8f7f4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e8e7e4;border-radius:14px;overflow:hidden;">
    <div style="padding:20px 24px;border-bottom:1px solid #f0efec;background:#fffdf3;">
      <div style="font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#8a6a00;">New Lead</div>
      <div style="font-size:18px;font-weight:700;color:#111;margin-top:4px;">Start for Free Request</div>
    </div>
    <div style="padding:8px 24px 16px;">
      <table style="width:100%;border-collapse:collapse;">
        ${row('Full name', fullName)}
        ${row('Email', email)}
        ${row('Phone', phone)}
        ${company ? row('Company', company) : ''}
        ${row('Event type', eventType)}
        ${eventDate ? row('Event date', eventDate) : ''}
        ${guestCount ? row('Guests', guestCount) : ''}
        ${city ? row('City / Location', city) : ''}
        ${notes ? row('Notes', notes) : ''}
        ${row('Submitted at', submittedAt)}
      </table>
    </div>
  </div>
</body></html>`

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: 'New Start for Free Request - Photify',
      text,
      html,
    })
    if (error) {
      console.error('Resend error:', error)
      return res.status(502).json({ error: 'Email send failed' })
    }
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Unexpected error:', err)
    return res.status(500).json({ error: 'Email send failed' })
  }
}
