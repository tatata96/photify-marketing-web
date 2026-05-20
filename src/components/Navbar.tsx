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

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      return
    }
    // Section isn't mounted — we're on a non-home route (e.g. /start).
    // Navigate home, then jump to the section once it renders.
    window.location.hash = ''
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'auto' })
    }, 60)
  }

  const toggleLang = () => setLang(lang === 'en' ? 'tr' : 'en')
  const otherLangLabel = lang === 'en' ? 'TR' : 'EN'

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-inner">
          <a className="navbar-logo" href="#">
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
            <a href="#cta" className="btn btn-primary" onClick={e => { e.preventDefault(); scrollTo('cta') }}>{t('nav.getDemo')}</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
