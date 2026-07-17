import { useT } from '../i18n'

const LogoMark = () => (
  <img src="/logo/logo.jpeg" alt="Photify" width="28" height="28" style={{ borderRadius: '6px', objectFit: 'cover' }} />
)

const socials = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/photify-studio-14372a399/',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.22 0z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61564553221249',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
        <path d="M24 12a12 12 0 1 0-13.87 11.85v-8.38H7.08V12h3.05V9.36c0-3 1.79-4.67 4.53-4.67 1.31 0 2.68.23 2.68.23v2.95h-1.51c-1.49 0-1.95.92-1.95 1.87V12h3.32l-.53 3.47h-2.79v8.38A12 12 0 0 0 24 12z"/>
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@photify.studio',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .58.05.86.14V9.4a6.34 6.34 0 0 0-1-.07 6.33 6.33 0 0 0-5.69 9.1A6.32 6.32 0 0 0 14 17.93V10.8a8.16 8.16 0 0 0 5.59 1.61V8.83a4.85 4.85 0 0 1-.04-2.14z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/photify.studio/',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.88 5.88 0 0 0-2.13 1.38A5.88 5.88 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.73 1.46 1.38 2.13.67.65 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 0 0 2.13-1.38 5.88 5.88 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 0 0-1.38-2.13A5.88 5.88 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
      </svg>
    ),
  },
]

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
    return
  }
  // Section isn't mounted — we're on a non-home route (e.g. /start).
  // Navigate home, then jump to the section once it renders.
  window.location.hash = ''
  setTimeout(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'auto' })
  }, 60)
}

export default function Footer() {
  const { t } = useT()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <LogoMark />
              <span style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--black)' }}>
                Photify
              </span>
            </div>
            <p>{t('footer.tagline')}</p>
            <div className="footer-contact">
              <a href="mailto:info@photify.com">✉ info@photify.com</a>
              <a href="#">{t('footer.location')}</a>
            </div>
            <a
              href="https://apps.apple.com/tr/app/photify/id6779256503"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-appstore-badge"
              aria-label={t('appstore.cta')}
            >
              <svg width="16" height="16" viewBox="0 0 814 1000" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
                <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105.3-44-155.5-103.2C114.7 798.2 91 726.8 91 657.1c0-199.8 144.3-309.5 281-309.5 72.6 0 133.2 47.4 178.3 47.4 43.2 0 111.3-50.2 190.7-50.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
              </svg>
              {t('appstore.cta')}
            </a>
          </div>

          <div>
            <div className="footer-col-title">{t('footer.col.product')}</div>
            <ul className="footer-links">
              <li><a href="#how-it-works" onClick={e => { e.preventDefault(); scrollTo('how-it-works') }}>{t('nav.howItWorks')}</a></li>
              <li><a href="#solutions" onClick={e => { e.preventDefault(); scrollTo('solutions') }}>{t('nav.solutions')}</a></li>
              <li><a href="#event-types" onClick={e => { e.preventDefault(); scrollTo('event-types') }}>{t('footer.link.eventTypes')}</a></li>
              <li><a href="#organizers" onClick={e => { e.preventDefault(); scrollTo('organizers') }}>{t('nav.organizers')}</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">{t('footer.col.company')}</div>
            <ul className="footer-links">
              <li><a href="#privacy" onClick={e => { e.preventDefault(); scrollTo('privacy') }}>{t('nav.privacy')}</a></li>
              <li><a href="/support">{t('footer.link.contact')}</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">{t('footer.col.legal')}</div>
            <ul className="footer-links">
              <li><a href="/legal/Photify_KVKK_GDPR_Aydinlatma_Metni_v2.2.pdf" download="Photify-Gizlilik-Politikasi.pdf" target="_blank" rel="noopener noreferrer">Gizlilik Politikası</a></li>
              <li><a href="/legal/Photify_Uyelik_Sozlesmesi_Kullanim_Kosullari_v1.2.pdf" download="Photify-Kullanim-Kosullari.pdf" target="_blank" rel="noopener noreferrer">Kullanım Koşulları</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">{t('footer.copy')}</div>
          <ul className="footer-social" aria-label="Social media">
            {socials.map(s => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Photify on ${s.name}`}
                >
                  {s.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
