import { useT } from '../i18n'

type Doc = {
  file: string
  download: string
  label: { en: string; tr: string }
  desc: { en: string; tr: string }
}

const documents: Doc[] = [
  {
    file: 'Photify_Privacy_Policy_EN_v2.3.pdf',
    download: 'Photify-Privacy-Policy.pdf',
    label: { en: 'Privacy Policy (KVKK & GDPR)', tr: 'Gizlilik Politikası (KVKK & GDPR)' },
    desc: { en: 'KVKK & GDPR privacy notice', tr: 'KVKK & GDPR aydınlatma metni' },
  },
  {
    file: 'Photify_Terms_of_Service_EN_v1.3.pdf',
    download: 'Photify-Terms-of-Service.pdf',
    label: { en: 'Membership Agreement & Terms of Service', tr: 'Üyelik Sözleşmesi ve Kullanım Koşulları' },
    desc: { en: 'Membership agreement and service terms', tr: 'Üyelik sözleşmesi ve hizmet şartları' },
  },
]

const DocIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 2v6h6M9 13h6M9 17h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function PrivacyPage() {
  const { lang } = useT()
  const isTr = lang === 'tr'

  return (
    <section className="privacy" id="privacy" style={{ paddingTop: '140px', minHeight: '70vh' }}>
      <div className="container">
        <div className="privacy-docs-header" style={{ marginBottom: '32px' }}>
          <div className="section-label">{isTr ? 'Yasal Belgeler' : 'Legal Documents'}</div>
          <h1 className="section-heading">
            {isTr ? 'Gizlilik ve Yasal Belgeler' : 'Privacy & Legal Documents'}
          </h1>
          <p className="section-subtext" style={{ maxWidth: '100%' }}>
            {isTr
              ? 'Aşağıdaki belgeleri görüntüleyebilir veya indirebilirsiniz.'
              : 'You can view or download the documents below.'}
          </p>
        </div>

        <div className="privacy-docs">
          <ul className="privacy-docs-list">
            {documents.map((d) => (
              <li key={d.file}>
                <a
                  className="privacy-doc"
                  href={`/legal/${d.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${isTr ? d.label.tr : d.label.en} (PDF)`}
                >
                  <span className="privacy-doc-icon"><DocIcon /></span>
                  <span className="privacy-doc-body">
                    <span className="privacy-doc-label">{isTr ? d.label.tr : d.label.en}</span>
                    <span className="privacy-doc-desc">{isTr ? d.desc.tr : d.desc.en}</span>
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
