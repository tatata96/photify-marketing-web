const commitments = [
  { icon: '🏗', title: 'Privacy by Design', text: 'Privacy protections are built into the core architecture, not bolted on as an afterthought.' },
  { icon: '🔐', title: 'End-to-End Encryption', text: 'All photos and personal data are protected with AES-256 encryption in transit and at rest.' },
  { icon: '👤', title: 'User-Controlled Access', text: 'You decide who sees your photos. Delete your data at any time with a single tap.' },
  { icon: '✋', title: 'Consent-First Approach', text: 'No face data is processed without explicit opt-in consent from each participant.' },
  { icon: '🇪🇺', title: 'EU Data Residency', text: 'All data is stored on EU servers. Fully compliant with GDPR and Turkish KVKK regulations.' },
  { icon: '🔍', title: 'Regular Security Audits', text: 'Independent third-party security audits ensure our standards remain industry-leading.' },
]

export default function Privacy() {
  return (
    <section className="privacy" id="privacy">
      <div className="container">
        <div className="privacy-header">
          <div data-reveal>
            <div className="section-label">Privacy & Security</div>
            <h2 className="section-heading">
              Your Privacy is<br />Non-Negotiable.
            </h2>
            <div className="privacy-badge">
              🛡 GDPR & KVKK Compliant
            </div>
          </div>
          <div data-reveal data-delay="2">
            <p className="section-subtext" style={{ maxWidth: '100%' }}>
              We handle biometric data — faces — which means we hold ourselves to the highest possible standard. Every decision in our architecture starts with "how do we protect the user?"
            </p>
            <p className="section-subtext" style={{ marginTop: '16px', maxWidth: '100%' }}>
              Face recognition data is processed ephemerally and never stored permanently. You own your data. We are the custodians.
            </p>
          </div>
        </div>

        <div className="privacy-grid">
          {commitments.map((c, i) => (
            <div className="privacy-card" key={i} data-reveal data-delay={String(i + 1)}>
              <div className="privacy-card-icon">{c.icon}</div>
              <div className="privacy-card-title">{c.title}</div>
              <p className="privacy-card-text">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
