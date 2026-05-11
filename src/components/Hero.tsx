export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-bg-pattern" />
      <div className="hero-bg-glow" />

      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-tag">
              <span className="hero-tag-dot" />
              AI-Powered Event Photography
            </div>

            <h1 className="hero-headline">
              Every<br />
              Photo.<br />
              <span className="highlight">Only Yours.</span>
            </h1>

            <p className="hero-subtext">
              Scan a QR code, join instantly. AI finds your face and creates your personal photo album. No chaos, no manual sorting — just your memories, delivered.
            </p>

            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => scrollTo('organizers')}>
                For Organizers
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="btn btn-ghost" onClick={() => scrollTo('how-it-works')}>
                Join an Event
              </button>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-value">280+</div>
                <div className="hero-stat-label">Events Powered</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">27.6K+</div>
                <div className="hero-stat-label">Photos Delivered</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">GDPR</div>
                <div className="hero-stat-label">Compliant</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <img
              className="hero-img-main"
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=700&auto=format&fit=crop&q=80"
              alt="Event photography"
            />
            <div className="hero-img-badge">
              <div className="hero-img-badge-icon">📸</div>
              <div className="hero-img-badge-text">
                <strong>AI album ready</strong>
                <span>Just 12 seconds after upload</span>
              </div>
            </div>
            <div className="hero-img-badge-2">
              <strong>27,600+ photos</strong>
              <span>delivered this month</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
