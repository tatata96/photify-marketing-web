const events = [
  {
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=700&auto=format&fit=crop&q=80',
    emoji: '💍',
    title: 'Weddings & Private Events',
    sub: 'Intimate moments, perfectly organized',
    features: [
      'Instant access for 200+ guests',
      'Face-tagged albums for couples',
      'No WhatsApp group chaos',
      'Branded QR displays',
    ],
  },
  {
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&auto=format&fit=crop&q=80',
    emoji: '🏢',
    title: 'Corporate & Brand Events',
    sub: 'Boost engagement, capture leads',
    features: [
      '40% engagement boost',
      'Attendee data capture with consent',
      'Custom branding & white-label',
      'Analytics dashboard',
    ],
  },
  {
    img: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=700&auto=format&fit=crop&q=80',
    emoji: '🎪',
    title: 'Festivals & Concerts',
    sub: 'Scale to any audience size',
    features: [
      'Scales to 10,000+ attendees',
      'Multi-photographer support',
      'Real-time processing',
      'Social sharing integration',
    ],
  },
  {
    img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=700&auto=format&fit=crop&q=80',
    emoji: '🏆',
    title: 'Sports & Competitions',
    sub: 'Find every athlete automatically',
    features: [
      'Automatic athlete detection',
      'Bib number recognition',
      'Finish line photo matching',
      'Sponsor visibility tracking',
    ],
  },
]

export default function EventTypes() {
  return (
    <section className="eventtypes" id="event-types">
      <div className="container">
        <div className="eventtypes-header" data-reveal>
          <div className="section-label">Solutions</div>
          <h2 className="section-heading">Built for every type of event</h2>
          <p className="section-subtext">
            Whether it's an intimate wedding or a 10,000-person festival, Photify scales effortlessly to any size and format.
          </p>
        </div>

        <div className="eventtypes-grid">
          {events.map((ev, i) => (
            <div className="eventtype-card" key={i} data-reveal data-delay={String(i + 1)}>
              <img
                className="eventtype-card-img"
                src={ev.img}
                alt={ev.title}
                loading="lazy"
              />
              <div className="eventtype-card-body">
                <span className="eventtype-card-emoji">{ev.emoji}</span>
                <div className="eventtype-card-title">{ev.title}</div>
                <p className="eventtype-card-sub">{ev.sub}</p>
                <ul className="eventtype-features">
                  {ev.features.map((f, j) => (
                    <li key={j}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
