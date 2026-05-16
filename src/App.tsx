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
import CTA from './components/CTA'
import Footer from './components/Footer'
import StartForm from './components/StartForm'

const getRoute = () => (window.location.hash.replace(/^#/, '') || '/')

function App() {
  const [route, setRoute] = useState<string>(getRoute())

  useEffect(() => {
    const onHashChange = () => {
      setRoute(getRoute())
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
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

  const isStart = route === 'start' || route === '/start'

  return (
    <>
      <Navbar />
      {isStart ? (
        <StartForm />
      ) : (
        <>
          <Hero />
          <Problem />
          <Solution />
          <HowItWorks />
          <EventTypes />
          <ForOrganizers />
          <Privacy />
          <CTA />
        </>
      )}
      <Footer />
    </>
  )
}

export default App
