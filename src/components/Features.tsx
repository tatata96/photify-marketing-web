import { useState } from 'react'
import { useT } from '../i18n'

const stepKeys = [
  { num: '1', labelKey: 'features.s1.label', textKey: 'features.s1.text', image: '/images/features/photify_screen_1.jpeg' },
  { num: '2', labelKey: 'features.s2.label', textKey: 'features.s2.text', image: '/images/features/photify_screen_2.jpeg' },
  { num: '3', labelKey: 'features.s3.label', textKey: 'features.s3.text', image: '/images/features/photify_screen_3.jpeg' },
  { num: '4', labelKey: 'features.s4.label', textKey: 'features.s4.text', image: '/images/features/photify_screen_4.jpeg' },
  { num: '5', labelKey: 'features.s5.label', textKey: 'features.s5.text', image: '/images/features/photify_screen_5.jpeg' },
]

export default function Features() {
  const { t } = useT()
  const [activeStep, setActiveStep] = useState(0)
  const currentStep = stepKeys[activeStep]

  return (
    <section className="features" id="how-it-works">
      <div className="container">
        <div className="features-header" data-reveal>
          <div className="section-label">{t('features.label')}</div>
          <h2 className="section-heading">{t('features.heading')}</h2>
          <p className="section-subtext">
            {t('features.subtext')}
          </p>
        </div>

        <div className="features-walkthrough" data-reveal data-delay="2">
          <p className="features-walkthrough-hint">{t('features.hint')}</p>

          <div className="features-steps" aria-label="Photify feature steps">
            {stepKeys.map((step, i) => (
              <button
                type="button"
                key={step.num}
                className={`feature-step${i === activeStep ? ' feature-step-active' : ''}`}
                onClick={() => setActiveStep(i)}
              >
                <span className="feature-step-number">{step.num}</span>
                <div>
                  <div className="feature-step-title">{t(step.labelKey)}</div>
                  <p className="feature-step-text">{t(step.textKey)}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="features-phone" aria-live="polite">
            <div className="features-phone-device">
              <div className="features-phone-screen">
                <div className="features-phone-island" />
                <img src={currentStep.image} alt={t(currentStep.labelKey)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
