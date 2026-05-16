const benefits = [
  { icon: '⏱', title: 'Save 10+ Hours', text: 'Per event, zero manual photo sorting required.' },
  { icon: '📈', title: '40% More Engagement', text: 'Guests interact more when they get personalized content.' },
  { icon: '✨', title: 'Premium Experience', text: 'Elevate your events with a luxury photo delivery system.' },
  { icon: '🔧', title: 'Zero Technical Setup', text: 'Ready in 5 minutes. No hardware, no app installs.' },
  { icon: '📊', title: 'Analytics & Insights', text: 'Track engagement, downloads, and attendee behavior.' },
  { icon: '🎯', title: 'Event-Day Support', text: 'Dedicated team on-call throughout your event.' },
]

export default function ForOrganizers() {
  return (
    <section className="organizers" id="organizers">
      <div className="organizers-bg-glow" />
      <div className="container">
        <div className="organizers-inner">
          <div className="organizers-left" data-reveal>
            <div className="section-label">For Organizers</div>
            <h2 className="section-heading">
              Run Events,<br />Not Photo<br />Logistics.
            </h2>
            <p className="section-subtext">
              Skip the sorting and the download-link chasing — Photify automates the whole workflow.
            </p>
            <div className="organizers-stat-row">
              <div>
                <div className="organizers-stat-value">10+</div>
                <div className="organizers-stat-label">Hours saved per event</div>
              </div>
              <div>
                <div className="organizers-stat-value">40%</div>
                <div className="organizers-stat-label">Engagement boost</div>
              </div>
              <div>
                <div className="organizers-stat-value">5min</div>
                <div className="organizers-stat-label">Setup time</div>
              </div>
            </div>
          </div>

          <div className="organizers-benefits" data-reveal data-delay="2">
            {benefits.map((b, i) => (
              <div className="organizers-benefit" key={i}>
                <div className="organizers-benefit-icon">{b.icon}</div>
                <div className="organizers-benefit-title">{b.title}</div>
                <p className="organizers-benefit-text">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
