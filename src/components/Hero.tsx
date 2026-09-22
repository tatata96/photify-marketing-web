import { FaApple, FaGooglePlay } from 'react-icons/fa'
import RotatingHeroImages from './RotatingHeroImages'
import { useT } from '../i18n'

export default function Hero() {
  const { t } = useT()

  const goCreateEvent = () => {
    window.history.pushState({}, '', '/create-event')
    window.dispatchEvent(new PopStateEvent('popstate'))
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
              <button
                type="button"
                className="btn btn-primary hero-create-event"
                onClick={goCreateEvent}
              >
                {t('hero.cta.createEvent')}
              </button>
              <a
                className="btn-appstore"
                href="https://apps.apple.com/tr/app/photify/id6779256503"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('appstore.cta')}
              >
                <FaApple size={18} aria-hidden="true" />
                {t('appstore.cta')}
              </a>
              <a
                className="btn-googleplay"
                href="https://play.google.com/store/apps/details?id=com.tamarakozok.photoapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('googleplay.cta')}
              >
                <FaGooglePlay size={18} aria-hidden="true" />
                {t('googleplay.cta')}
              </a>
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
