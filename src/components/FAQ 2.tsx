import { useT } from '../i18n'

const faqKeys = [
  { q: 'faq.q1', a: 'faq.a1' },
  { q: 'faq.q2', a: 'faq.a2' },
  { q: 'faq.q3', a: 'faq.a3' },
  { q: 'faq.q4', a: 'faq.a4' },
]

const Chevron = () => (
  <svg className="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function FAQ() {
  const { t } = useT()
  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq-header" data-reveal>
          <div className="section-label">{t('faq.label')}</div>
          <h2 className="section-heading">{t('faq.heading')}</h2>
          <p className="section-subtext">{t('faq.subtext')}</p>
        </div>

        <div className="faq-list">
          {faqKeys.map((item, i) => (
            <details className="faq-item" key={item.q} data-reveal data-delay={String(i + 1)}>
              <summary className="faq-question">
                <span>{t(item.q)}</span>
                <Chevron />
              </summary>
              <p className="faq-answer">{t(item.a)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
