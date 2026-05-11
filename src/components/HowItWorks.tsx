const steps = [
  {
    num: '1',
    title: 'QR Codes at the Event',
    text: 'Organizer sets up QR codes at key venues and entry points.',
  },
  {
    num: '2',
    title: 'Guests Scan & Join',
    text: 'Guests scan to instantly join the event photo platform.',
  },
  {
    num: '3',
    title: 'Photos Are Uploaded',
    text: 'Photographers upload directly to the secure event gallery.',
  },
  {
    num: '4',
    title: 'AI Creates Albums',
    text: "Our AI scans every photo and builds each guest's personal album.",
  },
  {
    num: '5',
    title: 'Access Your Photos',
    text: 'Each guest views, downloads, and shares only their photos.',
  },
]

export default function HowItWorks() {
  return (
    <section className="howitworks" id="how-it-works">
      <div className="container">
        <div className="howitworks-header" data-reveal>
          <div className="section-label">Process</div>
          <h2 className="section-heading">5 Simple Steps</h2>
          <p className="section-subtext">
            From venue setup to personal album delivery — the entire journey takes minutes, not days.
          </p>
        </div>

        <div className="steps" data-reveal data-delay="2">
          <div className="steps-line" />
          {steps.map((step, i) => (
            <div className="step" key={i}>
              <div className="step-number">{step.num}</div>
              <div>
                <div className="step-title">{step.title}</div>
                <p className="step-text">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
