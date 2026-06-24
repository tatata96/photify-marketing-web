import { useState, useEffect } from 'react'
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
            <li><a href="#organizers" onClick={e => { e.preventDefault(); scrollTo('organizers') }}>{t('nav.organizers')}</a></li>
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
              <svg width="14" height="14" viewBox="0 0 814 1000" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
                <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105.3-44-155.5-103.2C114.7 798.2 91 726.8 91 657.1c0-199.8 144.3-309.5 281-309.5 72.6 0 133.2 47.4 178.3 47.4 43.2 0 111.3-50.2 190.7-50.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
              </svg>
              {t('appstore.cta')}
            </a>
            <a href="#cta" className="btn btn-primary" onClick={e => { e.preventDefault(); scrollTo('cta') }}>{t('nav.getDemo')}</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
