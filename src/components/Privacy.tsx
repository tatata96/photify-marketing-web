import { useT } from '../i18n'

const commitmentKeys = [
  { icon: '🏗', titleKey: 'priv.c1.title', textKey: 'priv.c1.text' },
  { icon: '🔐', titleKey: 'priv.c2.title', textKey: 'priv.c2.text' },
  { icon: '👤', titleKey: 'priv.c3.title', textKey: 'priv.c3.text' },
  { icon: '✋', titleKey: 'priv.c4.title', textKey: 'priv.c4.text' },
  { icon: '🇪🇺', titleKey: 'priv.c5.title', textKey: 'priv.c5.text' },
  { icon: '🔍', titleKey: 'priv.c6.title', textKey: 'priv.c6.text' },
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
]

const DocIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 2v6h6M9 13h6M9 17h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Privacy() {
  const { t } = useT()
  return (
    <section className="privacy" id="privacy">
      <div className="container">
        <div className="privacy-header">
          <div data-reveal>
            <div className="section-label">{t('priv.label')}</div>
            <h2 className="section-heading">
              {t('priv.heading.l1')}<br />{t('priv.heading.l2')}
            </h2>
            <div className="privacy-badge">
              {t('priv.badge')}
            </div>
          </div>
          <div data-reveal data-delay="2">
            <p className="section-subtext" style={{ maxWidth: '100%' }}>
              {t('priv.subtext')}
            </p>
          </div>
        </div>

        <div className="privacy-grid">
          {commitmentKeys.map((c, i) => (
            <div className="privacy-card" key={i} data-reveal data-delay={String(i + 1)}>
              <div className="privacy-card-icon">{c.icon}</div>
              <div className="privacy-card-title">{t(c.titleKey)}</div>
              <p className="privacy-card-text">{t(c.textKey)}</p>
            </div>
          ))}
        </div>

        <div className="privacy-docs" data-reveal>
          <div className="privacy-docs-header">
            <div className="section-label">{t('priv.docs.label')}</div>
            <h3 className="privacy-docs-title">{t('priv.docs.title')}</h3>
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
