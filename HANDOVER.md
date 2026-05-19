# Photify Marketing Web — Handover

Paste this into a new chat to continue. Work happened on branch `furkan-changes` and is **uncommitted**.

## Project at a glance

- Photify marketing site (B2B2C AI event photography platform)
- Stack: **Vite + React 19 + TypeScript**, plain CSS with custom CSS variables in `src/index.css` (no Tailwind)
- Single-page app with **hash-based routing** (`/#start` shows the lead form, otherwise home)
- Currently deploys via `gh-pages` (script in `package.json`) — see deployment caveat below
- Custom domain: `photify.studio`
- Brand tokens: `--yellow #FFD23F`, `--black #111`, fonts: Inter (body), Plus Jakarta Sans (heading), Bebas Neue (hero display only)
- No router, no icon library — all icons are inline SVGs

## What was completed in the last session

### 1. Typography swap
- Loaded Inter + Plus Jakarta Sans via `<link>` in `index.html` (kept Bebas Neue only for the giant hero numerals)
- Updated `--font-body`, `--font-head` in `src/index.css`

### 2. Home page compression
- Reduced `--section-pad` (120→88px desktop, 80→64px mobile)
- Tightened verbose copy in `Problem.tsx`, `Solution.tsx`, `EventTypes.tsx`, `ForOrganizers.tsx`
- Trimmed `eventtype-card-img` height 220→160px

### 3. Privacy section — 4 legal PDFs
- New "Yasal Belgeler" card group inside `src/components/Privacy.tsx`
- PDFs live at `public/legal/` with the user's original filenames (versioned `_v1.2.pdf` etc.)
- Anchors use the `download` attribute + clean Turkish filenames as suggested save names
- Footer "Legal" column points to the same 4 PDFs
- Files present in `public/legal/`:
  - `Photify_Uyelik_Sozlesmesi_Kullanim_Kosullari_v1.2.pdf`
  - `Photify_KVKK_GDPR_Aydinlatma_Metni_v2.2.pdf`
  - `Photify_Cerez_Politikasi_v1.2.pdf`
  - `Photify_Iptal_ve_Iade_Politikasi_v1.2.pdf`

### 4. Site-wide social footer
- Added LinkedIn / Facebook / TikTok / Instagram icons (inline SVGs, no react-icons dep) to `src/components/Footer.tsx`
- Right-aligned on desktop, centered on mobile, brand-yellow hover, `aria-label` on each

### 5. "Start for Free" lead capture page
- New `src/components/StartForm.tsx` — two-column layout (marketing left, form card right)
- Hash route: `App.tsx` swaps `<StartForm />` in when `window.location.hash === '#start'`; Navbar + Footer stay
- "Start for Free" button in `CTA.tsx` now `<a href="#start">`
- Form fields: Full Name *, Email *, Phone *, Company, Event Type *, Event Date, Guest Count, **City / Location**, Notes, consent checkbox *
- Client validation: required fields, email regex, 7–15 phone digits (international-friendly), consent
- Hidden honeypot field `website` + captured `startedAt` timestamp sent to server
- Success copy (exact): "Thank you! Your request has been received. Our team will contact you soon."
- Error copy (exact): "Something went wrong. Please try again or contact us at info@photify.studio."
- Submit button disabled while submitting; double-submit guarded

### 6. Backend email function (Resend)
- Created `api/lead.ts` (Vercel serverless function convention)
- Uses **Resend** SDK (`resend` npm dep installed)
- Server-side validation mirrors client, plus: honeypot check, sub-2s submit rejection, naive per-IP rate limit (5/min per warm instance), control-char stripping for header-injection defense
- Sends both text + clean HTML body, subject `"New Start for Free Request - Photify"`, `replyTo` set to lead's email
- Required env vars (in `.env.example`): `RESEND_API_KEY`, `EMAIL_FROM`, `EMAIL_TO`
- `vercel.json` configures SPA fallback + `/api/*` routing
- `tsconfig.api.json` isolates Node types from frontend
- `.gitignore` updated to exclude `.env*` and `.vercel`

## ⚠️ Where we paused — open decision

The user asked **"is there any way to use without Resend"** and I gave them alternatives:

**Option A — Backend, different provider (still needs Vercel/Netlify):**
- Nodemailer + SMTP (Gmail, Zoho, their own host — whatever powers `info@photify.studio`)
- SendGrid (100/day free), Brevo (300/day free), Mailgun, AWS SES

**Option B — No backend, form-to-email service (can stay on gh-pages):**
- Formspree (50/month free), Web3Forms (250/month free), Getform
- Trade-off: a public form ID/access key sits in frontend JS, submissions route through their servers

**Option C — `mailto:` link** — zero infra, terrible UX

User then said "Please implement the email-related setup" without picking. I committed to **Nodemailer + SMTP** (most flexible, uses their existing mail host, no third-party SaaS to onboard) and started to run:

```
npm uninstall resend
npm install nodemailer
npm install --save-dev @types/nodemailer
```

**User interrupted before that ran** and asked for this handover. So as of right now:

- `resend` is **still installed** in `package.json`
- `nodemailer` is **NOT installed**
- `api/lead.ts` is **still the Resend version**
- `.env.example` still references `RESEND_API_KEY`

## ⚠️ Deployment caveat (still unresolved)

The project currently ships via `gh-pages` (`npm run deploy`), which is static-only. The new `/api/lead` endpoint **will 404 in production until hosting moves**. Recommended path: **Vercel** (zero-config for Vite, auto-detects `api/`). User has not started this migration yet.

If they want to stay on gh-pages, they need to swap to **Option B** (Formspree / Web3Forms) — which means deleting `api/lead.ts` and having the form POST directly to the third-party endpoint.

## To pick up in the new chat

Ask the user which of these they want, then execute:

1. **Keep Resend** (current code) — just guide them through Resend signup + domain verification + Vercel setup + env vars. Code is ready.
2. **Switch to Nodemailer + SMTP** — uninstall resend, install nodemailer + @types/nodemailer, rewrite `api/lead.ts` (~30 lines change). Env vars become: `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `EMAIL_FROM`, `EMAIL_TO`. Still needs Vercel.
3. **Switch to Web3Forms / Formspree** — delete `api/`, `vercel.json`, `tsconfig.api.json`, the resend dep; rewrite `StartForm.tsx` submit to POST to the third-party endpoint. Stays on gh-pages.

## Key files (where to look)

| What | Path |
|---|---|
| Lead form (client) | `src/components/StartForm.tsx` |
| Email function (server) | `api/lead.ts` |
| Hash router | `src/App.tsx` |
| Privacy section + PDF links | `src/components/Privacy.tsx` |
| Footer + social icons | `src/components/Footer.tsx` |
| Design tokens + all styles | `src/index.css` |
| Env var documentation | `.env.example` |
| Vercel config | `vercel.json` |
| API tsconfig | `tsconfig.api.json` |

## Verification commands

```
npm run build      # Vite build (passes cleanly as of pause)
npm run lint       # ESLint (clean)
npx tsc --noEmit -p tsconfig.api.json   # type-check the function (clean)
```

## Other judgment calls worth knowing

- **Hash routing** (`#start`) was chosen over `react-router-dom` to avoid a new dep and to keep gh-pages compatible. If migrating to Vercel the user may want clean URLs (`/start`) — would mean adding react-router-dom and a SPA fallback.
- **Phone validation is lenient** (7–15 digits, post-strip). Stricter E.164 needs `libphonenumber-js`.
- **Rate limiting is best-effort** in-memory per warm function instance — not authoritative. Real protection needs Upstash / Vercel KV.
- **No real browser testing was performed** at 375/768/1280 widths — CSS uses existing breakpoints and build is clean, but eyeball it before shipping.
- **`@vercel/node` has npm-audit warnings** in deeply nested transitive deps (ajv/minimatch/path-to-regexp) — dev-only, types-only, doesn't ship to prod.
- **No commits made** — everything is in the working tree on branch `furkan-changes`. User has not asked to commit.

## Brand / design system quick ref

```
--bg #ffffff      --black #111
--yellow #FFD23F  --yellow-dark #E8B800
--text #222       --secondary #666   --muted #999
--border #E8E7E4

Fonts:
--font-body: Inter (400/500/600/700)
--font-head: Plus Jakarta Sans (500/600/700/800)
--font-display: Bebas Neue (hero only)

Container: max-width 1200px, padding 0 40px
Radius: 12 / 8 / 20
Section padding: 88px desktop, 64px mobile (recently reduced from 120/80)
```
