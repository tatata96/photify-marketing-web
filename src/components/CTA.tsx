export default function CTA() {
  return (
    <section className="cta" id="cta">
      <div className="container">
        <div className="cta-inner">
          <div data-reveal>
            <h2 className="cta-headline">
              Start Free.<br />
              Deliver Magic.
            </h2>
            <p className="cta-sub">
              Join 500+ successful events. Up to 50 photos free. No credit card required.
            </p>
            <div className="cta-perks">
              <span className="cta-perk">No credit card</span>
              <span className="cta-perk">Up to 50 photos free</span>
              <span className="cta-perk">5-min setup</span>
            </div>
          </div>

          <div className="cta-right" data-reveal data-delay="2">
            <button className="btn-cta-primary">Start for Free</button>
            <button className="btn-cta-ghost">Schedule a Demo</button>
          </div>
        </div>
      </div>
    </section>
  )
}
