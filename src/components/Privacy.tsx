import { useT } from '../i18n'

const commitmentKeys = [
  { icon: '🏗', titleKey: 'priv.c1.title', textKey: 'priv.c1.text' },
  { icon: '🔐', titleKey: 'priv.c2.title', textKey: 'priv.c2.text' },
  { icon: '👤', titleKey: 'priv.c3.title', textKey: 'priv.c3.text' },
  { icon: '✋', titleKey: 'priv.c4.title', textKey: 'priv.c4.text' },
]


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

      </div>
    </section>
  )
}
