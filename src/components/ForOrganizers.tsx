import { useT } from '../i18n'

const benefitKeys = [
  { icon: '⏱', titleKey: 'org.b1.title', textKey: 'org.b1.text' },
  { icon: '📈', titleKey: 'org.b2.title', textKey: 'org.b2.text' },
  { icon: '✨', titleKey: 'org.b3.title', textKey: 'org.b3.text' },
  { icon: '🔧', titleKey: 'org.b4.title', textKey: 'org.b4.text' },
  { icon: '📊', titleKey: 'org.b5.title', textKey: 'org.b5.text' },
  { icon: '🎯', titleKey: 'org.b6.title', textKey: 'org.b6.text' },
]

export default function ForOrganizers() {
  const { t } = useT()
  return (
    <section className="organizers" id="organizers">
      <div className="organizers-bg-glow" />
      <div className="container">
        <div className="organizers-inner">
          <div className="organizers-left" data-reveal>
            <div className="section-label">{t('org.label')}</div>
            <h2 className="section-heading">
              {t('org.heading.l1')}<br />{t('org.heading.l2')}<br />{t('org.heading.l3')}
            </h2>
            <p className="section-subtext">
              {t('org.subtext')}
            </p>
            <div className="organizers-stat-row">
              <div>
                <div className="organizers-stat-value">10+</div>
                <div className="organizers-stat-label">{t('org.stat.hours')}</div>
              </div>
              <div>
                <div className="organizers-stat-value">40%</div>
                <div className="organizers-stat-label">{t('org.stat.engagement')}</div>
              </div>
              <div>
                <div className="organizers-stat-value">5min</div>
                <div className="organizers-stat-label">{t('org.stat.setup')}</div>
              </div>
            </div>
          </div>

          <div className="organizers-benefits" data-reveal data-delay="2">
            {benefitKeys.map((b, i) => (
              <div className="organizers-benefit" key={i}>
                <div className="organizers-benefit-icon">{b.icon}</div>
                <div className="organizers-benefit-title">{t(b.titleKey)}</div>
                <p className="organizers-benefit-text">{t(b.textKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
