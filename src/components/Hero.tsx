import RotatingHeroImages from './RotatingHeroImages'
import { useT } from '../i18n'

export default function Hero() {
  const { t } = useT()
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
              {t('hero.tag')}
            </div>

            <h1 className="hero-headline">
              {t('hero.headline.l1')}<br />
              {t('hero.headline.l2')}<br />
              <span className="highlight">{t('hero.headline.l3')}</span>
            </h1>

            <p className="hero-subtext">
              {t('hero.subtext')}
            </p>

            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => scrollTo('organizers')}>
                {t('hero.cta.organizers')}
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button className="btn btn-ghost" onClick={() => scrollTo('how-it-works')}>
                {t('hero.cta.join')}
              </button>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-value">210+</div>
                <div className="hero-stat-label">{t('hero.stat.events')}</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">27.6K+</div>
                <div className="hero-stat-label">{t('hero.stat.photos')}</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">GDPR</div>
                <div className="hero-stat-label">{t('hero.stat.gdpr')}</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <RotatingHeroImages />
            <div className="hero-img-badge">
              <div className="hero-img-badge-icon">📸</div>
              <div className="hero-img-badge-text">
                <strong>{t('hero.badge1.title')}</strong>
                <span>{t('hero.badge1.sub')}</span>
              </div>
            </div>
            <div className="hero-img-badge-2">
              <strong>{t('hero.badge2.title')}</strong>
              <span>{t('hero.badge2.sub')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
