import RotatingHeroImages from './RotatingHeroImages'
import { useT } from '../i18n'

export default function Hero() {
  const { t } = useT()
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
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
              <a
                className="btn-appstore"
                href="https://apps.apple.com/tr/app/photify/id6779256503"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('appstore.cta')}
              >
                <svg width="18" height="18" viewBox="0 0 814 1000" fill="currentColor" aria-hidden="true">
                  <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105.3-44-155.5-103.2C114.7 798.2 91 726.8 91 657.1c0-199.8 144.3-309.5 281-309.5 72.6 0 133.2 47.4 178.3 47.4 43.2 0 111.3-50.2 190.7-50.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
                </svg>
                {t('appstore.cta')}
              </a>
              <span className="badge-android-soon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.6 9.48l1.84-3.18a.42.42 0 00-.15-.57.42.42 0 00-.57.15l-1.86 3.22a10.8 10.8 0 00-8.72 0L6.28 5.88a.42.42 0 00-.57-.15.42.42 0 00-.15.57L7.4 9.48C4.48 11.1 2.5 14.02 2.24 17.4h19.52c-.26-3.38-2.24-6.3-5.16-7.92zM7 15.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm10 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"/>
                </svg>
                {t('android.comingSoon')}
              </span>
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
          </div>
        </div>
      </div>
    </section>
  )
}
