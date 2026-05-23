import { useState, type FormEvent, type ChangeEvent } from 'react'
import { useT } from '../i18n'

type FormState = {
  fullName: string
  email: string
  phone: string
  company: string
  eventType: string
  eventDate: string
  guestCount: string
  city: string
  notes: string
  consent: boolean
}

type Errors = Partial<Record<keyof FormState, string>>

const initial: FormState = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  eventType: '',
  eventDate: '',
  guestCount: '',
  city: '',
  notes: '',
  consent: false,
}

const eventTypes = [
  { value: 'wedding', label: 'Düğün / Özel Etkinlik' },
  { value: 'corporate', label: 'Kurumsal / Marka Etkinliği' },
  { value: 'festival', label: 'Festival / Konser' },
  { value: 'sports', label: 'Spor / Yarışma' },
  { value: 'other', label: 'Diğer' },
]

const guestRanges = [
  { value: '1-50', label: '1 – 50' },
  { value: '51-200', label: '51 – 200' },
  { value: '201-500', label: '201 – 500' },
  { value: '501-1000', label: '501 – 1,000' },
  { value: '1000+', label: '1,000+' },
]

const benefitKeys = [
  'start.benefit1',
  'start.benefit2',
  'start.benefit3',
  'start.benefit4',
]

const Check = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Email: simple but covers the realistic cases.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// Phone: lenient international check — must contain 7–15 digits after stripping non-digits.
const phoneDigitCount = (s: string) => s.replace(/\D/g, '').length
const isValidPhone = (s: string) => {
  const n = phoneDigitCount(s)
  return n >= 7 && n <= 15
}

const validate = (s: FormState): Errors => {
  const e: Errors = {}
  if (!s.fullName.trim()) e.fullName = 'Adınızı girin.'
  if (!s.email.trim()) e.email = 'E-posta adresinizi girin.'
  else if (!EMAIL_RE.test(s.email)) e.email = 'Geçerli bir e-posta adresi girin.'
  if (!s.phone.trim()) e.phone = 'Telefon numaranızı girin.'
  else if (!isValidPhone(s.phone)) e.phone = 'Geçerli bir telefon numarası girin.'
  if (!s.eventType) e.eventType = 'Etkinlik türünü seçin.'
  if (!s.consent) e.consent = 'Devam etmek için onay vermeniz gerekir.'
  return e
}

export default function StartForm() {
  const { t } = useT()
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  // Captured once on first render — used to reject sub-2s bot submits server-side.
  const [startedAt] = useState<number>(() => Date.now())
  // Honeypot — bots fill hidden fields; real users don't.
  const [honeypot, setHoneypot] = useState('')

  const update = (key: keyof FormState) => (ev: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const value = ev.target.type === 'checkbox'
      ? (ev.target as HTMLInputElement).checked
      : ev.target.value
    setForm(prev => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors(prev => ({ ...prev, [key]: undefined }))
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (submitting) return
    const next = validate(form)
    if (Object.keys(next).length) {
      setErrors(next)
      return
    }
    setSubmitError(null)
    setSubmitting(true)

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          website: honeypot,
          startedAt,
        }),
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      setSubmitted(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (err) {
      console.error(err)
      setSubmitError(t('start.submitError'))
    } finally {
      setSubmitting(false)
    }
  }

  const goHome = () => {
    window.location.hash = ''
  }

  return (
    <section className="start">
      <div className="start-bg-pattern" />
      <div className="start-bg-glow" />

      <div className="container">
        <a className="start-back" href="#" onClick={(e) => { e.preventDefault(); goHome() }}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M13 8H3M7 4L3 8L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {t('start.back')}
        </a>

        <div className="start-inner">
          <aside className="start-left">
            <div className="section-label">{t('start.label')}</div>
            <h1 className="start-heading">{t('start.heading.l1')}<br />{t('start.heading.l2')}</h1>
            <p className="start-sub">
              {t('start.sub')}
            </p>

            <ul className="start-benefits">
              {benefitKeys.map((bk) => (
                <li key={bk}>
                  <span className="start-benefit-icon"><Check /></span>
                  <span>{t(bk)}</span>
                </li>
              ))}
            </ul>

            <div className="start-trust">
              <div className="privacy-badge">{t('priv.badge')}</div>
              <p className="start-trust-note">
                {t('start.trustNote')}
              </p>
            </div>
          </aside>

          <div className="start-card">
            {submitted ? (
              <div className="start-success" role="status" aria-live="polite">
                <div className="start-success-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h2 className="start-success-title">{t('start.success.title')}</h2>
                <p className="start-success-text">
                  {t('start.success.text')}
                </p>
                <button type="button" className="btn btn-outline" onClick={goHome}>
                  {t('start.backToHome')}
                </button>
              </div>
            ) : (
              <form className="start-form" onSubmit={onSubmit} noValidate>
                <div className="start-form-header">
                  <h2 className="start-form-title">{t('start.form.title')}</h2>
                  <p className="start-form-sub">{t('start.form.sub')}</p>
                </div>

                {/* Honeypot: hidden from users, off the tab order, ignored by screen readers. */}
                <div className="start-honeypot" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                <div className="start-grid">
                  <div className="start-field start-field-full">
                    <label htmlFor="fullName">{t('start.fullName')} <span className="req">*</span></label>
                    <input
                      id="fullName"
                      type="text"
                      autoComplete="name"
                      value={form.fullName}
                      onChange={update('fullName')}
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? 'fullName-err' : undefined}
                    />
                    {errors.fullName && <span className="start-error" id="fullName-err">{errors.fullName}</span>}
                  </div>

                  <div className="start-field">
                    <label htmlFor="email">{t('start.email')} <span className="req">*</span></label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={update('email')}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-err' : undefined}
                    />
                    {errors.email && <span className="start-error" id="email-err">{errors.email}</span>}
                  </div>

                  <div className="start-field">
                    <label htmlFor="phone">{t('start.phone')} <span className="req">*</span></label>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+90 ..."
                      value={form.phone}
                      onChange={update('phone')}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'phone-err' : undefined}
                    />
                    {errors.phone && <span className="start-error" id="phone-err">{errors.phone}</span>}
                  </div>

                  <div className="start-field start-field-full">
                    <label htmlFor="company">{t('start.company')}</label>
                    <input
                      id="company"
                      type="text"
                      autoComplete="organization"
                      value={form.company}
                      onChange={update('company')}
                    />
                  </div>

                  <div className="start-field">
                    <label htmlFor="eventType">{t('start.eventType')} <span className="req">*</span></label>
                    <select
                      id="eventType"
                      value={form.eventType}
                      onChange={update('eventType')}
                      aria-invalid={!!errors.eventType}
                      aria-describedby={errors.eventType ? 'eventType-err' : undefined}
                    >
                      <option value="">{t('start.selectPlaceholder')}</option>
                      {eventTypes.map(t => (
                        <option key={t.value} value={t.value}>{t.label}</option>
                      ))}
                    </select>
                    {errors.eventType && <span className="start-error" id="eventType-err">{errors.eventType}</span>}
                  </div>

                  <div className="start-field">
                    <label htmlFor="eventDate">{t('start.eventDate')}</label>
                    <input
                      id="eventDate"
                      type="date"
                      value={form.eventDate}
                      onChange={update('eventDate')}
                    />
                  </div>

                  <div className="start-field">
                    <label htmlFor="guestCount">{t('start.guestCount')}</label>
                    <select
                      id="guestCount"
                      value={form.guestCount}
                      onChange={update('guestCount')}
                    >
                      <option value="">{t('start.selectPlaceholder')}</option>
                      {guestRanges.map(g => (
                        <option key={g.value} value={g.value}>{g.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="start-field">
                    <label htmlFor="city">{t('start.city')}</label>
                    <input
                      id="city"
                      type="text"
                      autoComplete="address-level2"
                      value={form.city}
                      onChange={update('city')}
                      placeholder={t('start.city.placeholder')}
                    />
                  </div>

                  <div className="start-field start-field-full">
                    <label htmlFor="notes">{t('start.notes')}</label>
                    <textarea
                      id="notes"
                      rows={4}
                      value={form.notes}
                      onChange={update('notes')}
                      placeholder={t('start.notes.placeholder')}
                    />
                  </div>

                  <div className="start-field start-field-full">
                    <label className="start-consent">
                      <input
                        type="checkbox"
                        checked={form.consent}
                        onChange={update('consent')}
                        aria-invalid={!!errors.consent}
                        aria-describedby={errors.consent ? 'consent-err' : undefined}
                      />
                      <span>
                        <a href="/legal/Photify_KVKK_GDPR_Aydinlatma_Metni_v2.2.pdf" target="_blank" rel="noopener noreferrer">Gizlilik Politikası</a>
                        {' '}ve{' '}
                        <a href="/legal/Photify_Uyelik_Sozlesmesi_Kullanim_Kosullari_v1.2.pdf" target="_blank" rel="noopener noreferrer">Kullanım Koşulları</a>
                        'nı okudum ve kabul ediyorum. <span className="req">*</span>
                      </span>
                    </label>
                    {errors.consent && <span className="start-error" id="consent-err">{errors.consent}</span>}
                  </div>
                </div>

                {submitError && (
                  <div className="start-submit-error" role="alert">{submitError}</div>
                )}

                <button type="submit" className="btn btn-primary start-submit" disabled={submitting}>
                  {submitting ? t('start.submitting') : t('start.continue')}
                  {!submitting && (
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
