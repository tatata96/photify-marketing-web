const LogoMark = () => (
  <img src="/logo/logo.jpeg" alt="Photify" width="28" height="28" style={{ borderRadius: '6px', objectFit: 'cover' }} />
)

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <LogoMark />
              <span style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--white)' }}>
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
              <li><a href="#">How It Works</a></li>
              <li><a href="#">Solutions</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">For Organizers</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Company</div>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Legal</div>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">GDPR</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">© 2026 Photify. All rights reserved.</div>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
