import { useT } from '../i18n'

export default function CTA() {
  const { t } = useT()
  return (
    <section className="cta" id="cta">
      <div className="container">
        <div className="cta-inner">
          <div data-reveal>
            <h2 className="cta-headline">
              {t('cta.headline.l1')}<br />
              {t('cta.headline.l2')}
            </h2>
            <p className="cta-sub">
              {t('cta.sub')}
            </p>
            <div className="cta-perks">
              <span className="cta-perk">{t('cta.perk1')}</span>
              <span className="cta-perk">{t('cta.perk2')}</span>
              <span className="cta-perk">{t('cta.perk3')}</span>
            </div>
          </div>

          <div className="cta-right" data-reveal data-delay="2">
            <a className="btn-cta-primary" href="#start">{t('cta.startFree')}</a>
            <button type="button" className="btn-cta-ghost">{t('cta.scheduleDemo')}</button>
          </div>
        </div>
      </div>
    </section>
  )
}
