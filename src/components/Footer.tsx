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
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <LogoMark />
              <span style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '1.1rem', color: '#fff' }}>
                Photify
              </span>
            </div>
            <p>AI-powered event photography that delivers every photo to the right person, instantly.</p>
            <div className="footer-contact">
              <a href="mailto:hello@photify.app">✉ hello@photify.app</a>
              <a href="tel:+902121234567">☎ +90 (212) 123 4567</a>
              <a href="#">📍 Istanbul, Turkey</a>
            </div>
          </div>

          <div>
            <div className="footer-col-title">Product</div>
            <ul className="footer-links">
              <li><a href="#how-it-works" onClick={e => { e.preventDefault(); scrollTo('how-it-works') }}>How It Works</a></li>
              <li><a href="#solutions" onClick={e => { e.preventDefault(); scrollTo('solutions') }}>Solutions</a></li>
              <li><a href="#event-types" onClick={e => { e.preventDefault(); scrollTo('event-types') }}>Event Types</a></li>
              <li><a href="#organizers" onClick={e => { e.preventDefault(); scrollTo('organizers') }}>For Organizers</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Company</div>
            <ul className="footer-links">
              <li><a href="#privacy" onClick={e => { e.preventDefault(); scrollTo('privacy') }}>Privacy</a></li>
              <li><a href="#cta" onClick={e => { e.preventDefault(); scrollTo('cta') }}>Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Legal</div>
            <ul className="footer-links">
              <li><a href="/legal/Photify_KVKK_GDPR_Aydinlatma_Metni_v2.2.pdf" download="Photify-Gizlilik-Politikasi.pdf" target="_blank" rel="noopener noreferrer">Gizlilik Politikası</a></li>
              <li><a href="/legal/Photify_Uyelik_Sozlesmesi_Kullanim_Kosullari_v1.2.pdf" download="Photify-Kullanim-Kosullari.pdf" target="_blank" rel="noopener noreferrer">Kullanım Koşulları</a></li>
              <li><a href="/legal/Photify_Cerez_Politikasi_v1.2.pdf" download="Photify-Cerez-Politikasi.pdf" target="_blank" rel="noopener noreferrer">Çerez Politikası</a></li>
              <li><a href="/legal/Photify_Iptal_ve_Iade_Politikasi_v1.2.pdf" download="Photify-Iptal-ve-Iade-Politikasi.pdf" target="_blank" rel="noopener noreferrer">İptal ve İade Politikası</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">© 2026 Photify. All rights reserved.</div>
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
