import { useState, useEffect } from 'react'
import { FaApple, FaGooglePlay } from 'react-icons/fa'
import { useT } from '../i18n'

const LogoMark = () => (
  <img src="/logo/logo.jpeg" alt="Photify" width="34" height="34" style={{ borderRadius: '8px', objectFit: 'cover' }} />
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { t, lang, setLang } = useT()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goHome = () => {
    // Switch back to the home route. Covers both pathname routes (e.g.
    // /privacy) and hash routes (e.g. #start) by resetting both.
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/')
      window.dispatchEvent(new PopStateEvent('popstate'))
    } else {
      window.location.hash = ''
      window.dispatchEvent(new HashChangeEvent('hashchange'))
    }
  }

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      return
    }
    // Section isn't mounted — we're on a non-home route (e.g. /start, /privacy).
    // Navigate home, then jump to the section once it renders.
    goHome()
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'auto' })
    }, 80)
  }

  const toggleLang = () => setLang(lang === 'en' ? 'tr' : 'en')
  const otherLangLabel = lang === 'en' ? 'TR' : 'EN'

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-inner">
          <a className="navbar-logo" href="/" onClick={e => { e.preventDefault(); goHome() }}>
            <LogoMark />
            <span className="navbar-logo-text">Photify</span>
          </a>

          <ul className="navbar-nav">
            <li><a href="#how-it-works" onClick={e => { e.preventDefault(); scrollTo('how-it-works') }}>{t('nav.howItWorks')}</a></li>
            <li><a href="#solutions" onClick={e => { e.preventDefault(); scrollTo('solutions') }}>{t('nav.solutions')}</a></li>
            <li><a href="#privacy" onClick={e => { e.preventDefault(); scrollTo('privacy') }}>{t('nav.privacy')}</a></li>
          </ul>

          <div className="navbar-actions">
            <button
              type="button"
              className="navbar-lang"
              onClick={toggleLang}
              aria-label={`Switch language to ${otherLangLabel}`}
            >
              {otherLangLabel}
            </button>
            <a
              href="https://apps.apple.com/tr/app/photify/id6779256503"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost navbar-appstore"
              aria-label={t('appstore.cta')}
            >
              <FaApple size={14} aria-hidden="true" style={{ flexShrink: 0 }} />
              {t('appstore.cta')}
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.tamarakozok.photoapp"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost navbar-appstore"
              aria-label={t('googleplay.cta')}
            >
              <FaGooglePlay size={14} aria-hidden="true" style={{ flexShrink: 0 }} />
              {t('googleplay.cta')}
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
