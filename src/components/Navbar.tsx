import { useState, useEffect } from 'react'

const LogoMark = () => (
  <img src="/logo/logo.jpeg" alt="Photify" width="34" height="34" style={{ borderRadius: '8px', objectFit: 'cover' }} />
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-inner">
          <a className="navbar-logo" href="#">
            <LogoMark />
            <span className="navbar-logo-text">Photify</span>
          </a>

          <ul className="navbar-nav">
            <li><a href="#how-it-works" onClick={e => { e.preventDefault(); scrollTo('how-it-works') }}>How It Works</a></li>
            <li><a href="#solutions" onClick={e => { e.preventDefault(); scrollTo('solutions') }}>Solutions</a></li>
            <li><a href="#organizers" onClick={e => { e.preventDefault(); scrollTo('organizers') }}>For Organizers</a></li>
            <li><a href="#privacy" onClick={e => { e.preventDefault(); scrollTo('privacy') }}>Privacy</a></li>
          </ul>

          <div className="navbar-actions">
            <a href="#cta" className="btn btn-primary" onClick={e => { e.preventDefault(); scrollTo('cta') }}>Get a Demo</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
