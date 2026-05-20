import { useEffect, useState } from 'react'

const homepageImages = [
  {
    src: '/images/homepage/image-1.jpg',
    alt: 'Guests scanning a Photify QR code to join an event instantly',
  },
  {
    src: '/images/homepage/image-2.jpg',
    alt: 'Marathon runners — Photify delivers every finisher their own photos',
  },
  {
    src: '/images/homepage/image-3.jpg',
    alt: 'Live concert moment shared instantly through Photify',
  },
  {
    src: '/images/homepage/image-4.jpg',
    alt: 'Conference audience receiving their event photos automatically',
  },
  {
    src: '/images/homepage/image-5.jpg',
    alt: 'Wedding ceremony captured and shared with Photify',
  },
  {
    src: '/images/homepage/image-6.jpg',
    alt: 'Newlyweds celebrating under sparklers — every guest gets their photos',
  },
  {
    src: '/images/homepage/image-7.jpg',
    alt: 'Festival crowd lit by stage lights and confetti',
  },
]

const ROTATION_MS = 5000

export default function RotatingHeroImages() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % homepageImages.length)
    }, ROTATION_MS)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="hero-img-main hero-img-slider" aria-live="polite">
      {homepageImages.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className={`hero-img-slide${i === index ? ' is-active' : ''}`}
          loading={i === 0 ? 'eager' : 'lazy'}
          decoding="async"
          aria-hidden={i === index ? undefined : true}
        />
      ))}
    </div>
  )
}
