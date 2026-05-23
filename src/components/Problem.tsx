import { useT } from '../i18n'

const problemKeys = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16 9v7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    titleKey: 'problem.c1.title',
    textKey: 'problem.c1.text',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="8" width="24" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 14h12M10 18h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    titleKey: 'problem.c2.title',
    textKey: 'problem.c2.text',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 16c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 22l4-4 4 4 4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="16" cy="26" r="2" fill="currentColor"/>
      </svg>
    ),
    titleKey: 'problem.c3.title',
    textKey: 'problem.c3.text',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="22" cy="20" r="6" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16 16l-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    titleKey: 'problem.c4.title',
    textKey: 'problem.c4.text',
  },
]

export default function Problem() {
  const { t } = useT()
  return (
    <section className="problem" id="problem">
      <div className="container">
        <div className="problem-header" data-reveal>
          <div className="section-label">{t('problem.label')}</div>
          <h2 className="section-heading">{t('problem.heading')}</h2>
          <p className="section-subtext">
            {t('problem.subtext')}
          </p>
        </div>

        <div className="problem-grid">
          {problemKeys.map((p, i) => (
            <div className="problem-card" key={i} data-reveal data-delay={String(i + 1)}>
              <div className="problem-card-icon">{p.icon}</div>
              <div className="problem-card-title">{t(p.titleKey)}</div>
              <p className="problem-card-text">{t(p.textKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
