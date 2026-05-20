import { useT } from '../i18n'

const solutionKeys = [
  {
    num: '01',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="7" y="7" width="4" height="4" fill="currentColor"/>
        <rect x="13" y="7" width="4" height="4" fill="currentColor"/>
        <rect x="7" y="13" width="4" height="4" fill="currentColor"/>
        <rect x="13" y="13" width="1.5" height="1.5" fill="currentColor"/>
        <rect x="15.5" y="13" width="1.5" height="1.5" fill="currentColor"/>
        <rect x="13" y="15.5" width="1.5" height="1.5" fill="currentColor"/>
        <rect x="15.5" y="15.5" width="1.5" height="1.5" fill="currentColor"/>
      </svg>
    ),
    titleKey: 'solution.c1.title',
    textKey: 'solution.c1.text',
  },
  {
    num: '02',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M17 3l2 2-2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    titleKey: 'solution.c2.title',
    textKey: 'solution.c2.text',
  },
  {
    num: '03',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L4.09 12.26a1 1 0 00.9 1.74H11l-1 8 8.91-10.26a1 1 0 00-.9-1.74H13l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    titleKey: 'solution.c3.title',
    textKey: 'solution.c3.text',
  },
  {
    num: '04',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 6v6c0 5.523 3.477 10.327 8 11.5C16.523 22.327 20 17.523 20 12V6L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    titleKey: 'solution.c4.title',
    textKey: 'solution.c4.text',
  },
]

export default function Solution() {
  const { t } = useT()
  return (
    <section className="solution" id="solutions">
      <div className="container">
        <div className="solution-header" data-reveal>
          <div className="section-label">{t('solution.label')}</div>
          <h2 className="section-heading">{t('solution.heading.l1')}<br />{t('solution.heading.l2')}</h2>
          <p className="section-subtext">
            {t('solution.subtext')}
          </p>
        </div>

        <div className="solution-grid">
          {solutionKeys.map((s, i) => (
            <div className="solution-card" key={i} data-reveal data-delay={String(i + 1)}>
              <div className="solution-card-num">{s.num}</div>
              <div className="solution-card-icon">{s.icon}</div>
              <div className="solution-card-title">{t(s.titleKey)}</div>
              <p className="solution-card-text">{t(s.textKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
