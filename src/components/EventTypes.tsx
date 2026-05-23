import { useT } from '../i18n'

const eventKeys = [
  {
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=700&auto=format&fit=crop&q=80',
    emoji: '💍',
    titleKey: 'events.e1.title',
    subKey: 'events.e1.sub',
    featureKeys: ['events.e1.f1', 'events.e1.f2', 'events.e1.f3', 'events.e1.f4'],
  },
  {
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&auto=format&fit=crop&q=80',
    emoji: '🏢',
    titleKey: 'events.e2.title',
    subKey: 'events.e2.sub',
    featureKeys: ['events.e2.f1', 'events.e2.f2', 'events.e2.f3', 'events.e2.f4'],
  },
  {
    img: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=700&auto=format&fit=crop&q=80',
    emoji: '🎪',
    titleKey: 'events.e3.title',
    subKey: 'events.e3.sub',
    featureKeys: ['events.e3.f1', 'events.e3.f2', 'events.e3.f3', 'events.e3.f4'],
  },
  {
    img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=700&auto=format&fit=crop&q=80',
    emoji: '🏆',
    titleKey: 'events.e4.title',
    subKey: 'events.e4.sub',
    featureKeys: ['events.e4.f1', 'events.e4.f2', 'events.e4.f3', 'events.e4.f4'],
  },
]

export default function EventTypes() {
  const { t } = useT()
  return (
    <section className="eventtypes" id="event-types">
      <div className="container">
        <div className="eventtypes-header" data-reveal>
          <div className="section-label">{t('events.label')}</div>
          <h2 className="section-heading">{t('events.heading')}</h2>
          <p className="section-subtext">
            {t('events.subtext')}
          </p>
        </div>

        <div className="eventtypes-grid">
          {eventKeys.map((ev, i) => (
            <div className="eventtype-card" key={i} data-reveal data-delay={String(i + 1)}>
              <img
                className="eventtype-card-img"
                src={ev.img}
                alt={t(ev.titleKey)}
                loading="lazy"
              />
              <div className="eventtype-card-body">
                <span className="eventtype-card-emoji">{ev.emoji}</span>
                <div className="eventtype-card-title">{t(ev.titleKey)}</div>
                <p className="eventtype-card-sub">{t(ev.subKey)}</p>
                <ul className="eventtype-features">
                  {ev.featureKeys.map((fk) => (
                    <li key={fk}>{t(fk)}</li>
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
