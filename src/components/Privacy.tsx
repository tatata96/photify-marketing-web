const commitments = [
  { icon: '🏗', title: 'Privacy by Design', text: 'Built into our architecture from day one.' },
  { icon: '🔐', title: 'End-to-End Encryption', text: 'AES-256 in transit and at rest.' },
  { icon: '👤', title: 'User-Controlled Access', text: 'Delete your data anytime with one tap.' },
  { icon: '✋', title: 'Consent-First', text: 'No face data processed without explicit opt-in.' },
  { icon: '🇪🇺', title: 'EU Data Residency', text: 'GDPR and Turkish KVKK compliant.' },
  { icon: '🔍', title: 'Regular Audits', text: 'Independent third-party security reviews.' },
]

const documents = [
  {
    file: 'Photify_Uyelik_Sozlesmesi_Kullanim_Kosullari_v1.2.pdf',
    download: 'Photify-Kullanim-Kosullari.pdf',
    label: 'Kullanım Koşulları',
    desc: 'Üyelik sözleşmesi ve hizmet şartları',
  },
  {
    file: 'Photify_KVKK_GDPR_Aydinlatma_Metni_v2.2.pdf',
    download: 'Photify-Gizlilik-Politikasi.pdf',
    label: 'Gizlilik Politikası',
    desc: 'KVKK & GDPR aydınlatma metni',
  },
  {
    file: 'Photify_Cerez_Politikasi_v1.2.pdf',
    download: 'Photify-Cerez-Politikasi.pdf',
    label: 'Çerez Politikası',
    desc: 'Çerezler ve izleme teknolojileri',
  },
  {
    file: 'Photify_Iptal_ve_Iade_Politikasi_v1.2.pdf',
    download: 'Photify-Iptal-ve-Iade-Politikasi.pdf',
    label: 'İptal ve İade Politikası',
    desc: 'Cayma hakkı ve iade prosedürü',
  },
]

const DocIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 2v6h6M9 13h6M9 17h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

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
              We process biometric data — faces. That means we hold ourselves to the highest standard, and face recognition data is processed ephemerally, never stored permanently.
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

        <div className="privacy-docs" data-reveal>
          <div className="privacy-docs-header">
            <div className="section-label">Yasal Belgeler</div>
            <h3 className="privacy-docs-title">Sözleşmeler ve Politikalar</h3>
          </div>
          <ul className="privacy-docs-list">
            {documents.map((d) => (
              <li key={d.file}>
                <a
                  className="privacy-doc"
                  href={`/legal/${d.file}`}
                  download={d.download}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${d.label} (PDF, indir)`}
                >
                  <span className="privacy-doc-icon"><DocIcon /></span>
                  <span className="privacy-doc-body">
                    <span className="privacy-doc-label">{d.label}</span>
                    <span className="privacy-doc-desc">{d.desc}</span>
                  </span>
                  <span className="privacy-doc-badge">PDF</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
