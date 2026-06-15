import { useEffect, useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import HowItWorks from './components/HowItWorks'
import EventTypes from './components/EventTypes'
import ForOrganizers from './components/ForOrganizers'
import Privacy from './components/Privacy'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
// TODO: Enable the start/contact form again when lead capture is ready.
// import StartForm from './components/StartForm'
import PrivacyPage from './components/PrivacyPage'

const getRoute = () => {
  const path = window.location.pathname.replace(/\/+$/, '')
  if (path === '/privacy') return '/privacy'
  return window.location.hash.replace(/^#/, '') || '/'
}

function App() {
  const [route, setRoute] = useState<string>(getRoute())

  useEffect(() => {
    const onHashChange = () => {
      setRoute(getRoute())
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
    window.addEventListener('hashchange', onHashChange)
    window.addEventListener('popstate', onHashChange)
    return () => {
      window.removeEventListener('hashchange', onHashChange)
      window.removeEventListener('popstate', onHashChange)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    const els = document.querySelectorAll('[data-reveal]')
    els.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [route])

  // TODO: Enable the start/contact form route again when lead capture is ready.
  // const isStart = route === 'start' || route === '/start'
  const isPrivacyPage = route === '/privacy'

  return (
    <>
      <Navbar />
      {isPrivacyPage ? (
        <PrivacyPage />
      // TODO: Enable the start/contact form again when lead capture is ready.
      // ) : isStart ? (
      //   <StartForm />
      ) : (
        <>
          <Hero />
          <Problem />
          <Solution />
          <HowItWorks />
          <EventTypes />
          <ForOrganizers />
          <Privacy />
          <FAQ />
          <CTA />
        </>
      )}
      <Footer />
    </>
  )
}

export default App
