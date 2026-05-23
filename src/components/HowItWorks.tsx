import { useT } from '../i18n'

const stepKeys = [
  { num: '1', titleKey: 'how.s1.title', textKey: 'how.s1.text' },
  { num: '2', titleKey: 'how.s2.title', textKey: 'how.s2.text' },
  { num: '3', titleKey: 'how.s3.title', textKey: 'how.s3.text' },
  { num: '4', titleKey: 'how.s4.title', textKey: 'how.s4.text' },
  { num: '5', titleKey: 'how.s5.title', textKey: 'how.s5.text' },
]

export default function HowItWorks() {
  const { t } = useT()
  return (
    <section className="howitworks" id="how-it-works">
      <div className="container">
        <div className="howitworks-header" data-reveal>
          <div className="section-label">{t('how.label')}</div>
          <h2 className="section-heading">{t('how.heading')}</h2>
          <p className="section-subtext">
            {t('how.subtext')}
          </p>
        </div>

        <div className="steps" data-reveal data-delay="2">
          <div className="steps-line" />
          {stepKeys.map((step, i) => (
            <div className="step" key={i}>
              <div className="step-number">{step.num}</div>
              <div>
                <div className="step-title">{t(step.titleKey)}</div>
                <p className="step-text">{t(step.textKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
