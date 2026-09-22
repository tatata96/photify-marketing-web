import { useState, type FormEvent, type ChangeEvent } from 'react'
import { useT } from '../i18n'

type FormState = {
  email: string
  eventType: string
  attendeeCount: string
  eventName: string
  addOns: string[]
  consent: boolean
}

type Errors = Partial<Record<keyof FormState, string>>

const initial: FormState = {
  email: '',
  eventType: '',
  attendeeCount: '',
  eventName: '',
  addOns: [],
  consent: false,
}

const eventTypes = [
  { value: 'weddings-private', icon: '💍', titleKey: 'events.e1.title', subKey: 'events.e1.sub' },
  { value: 'corporate-brand', icon: '🏢', titleKey: 'events.e2.title', subKey: 'events.e2.sub' },
  { value: 'festivals-concerts', icon: '🎪', titleKey: 'events.e3.title', subKey: 'events.e3.sub' },
  { value: 'sports-competitions', icon: '🏆', titleKey: 'events.e4.title', subKey: 'events.e4.sub' },
]

const attendeeRanges = [
  { value: 'under-50', label: '<50' },
  { value: '50-200', label: '50-200' },
  { value: '200-500', label: '200-500' },
  { value: '500-plus', label: '500+' },
]

const addOns = [
  {
    value: 'onsite-support',
    title: 'Yerinde kurulum ve canlı destek',
    price: '+₺4.500',
    description: 'Ekibimiz etkinlik günü alanda olur, QR noktalarını kurar, fotoğrafçıdan yüklemeyi devralır.',
  },
  {
    value: 'branded-welcome',
    title: 'Markalı karşılama ekranı ve özel QR',
    price: '+₺750',
    description: 'Katılımcı sizin logonuzla karşılanır, QR masa kartı tasarımı dahil.',
  },
  {
    value: 'photo-sales-watermark',
    title: 'Fotoğraf satışı ve filigran',
    price: '+₺1.000',
    description: 'Katılımcı yüksek çözünürlüklü kareyi satın alana kadar filigranlı görür.',
  },
  {
    value: 'extra-storage',
    title: 'Ek 100 GB depolama',
    price: '+₺600',
    description: 'Uzun süren ya da çok kameralı etkinlikler için.',
  },
  {
    value: 'video-face-matching',
    title: 'Video içinde yüz eşleştirme',
    price: 'yakında',
    description: 'Geliştirme aşamasında, 2026 sonunda açılıyor.',
    disabled: true,
  },
]

const Check = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const validate = (s: FormState, t: (key: string) => string): Errors => {
  const e: Errors = {}
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.email)) e.email = t('create.error.email')
  if (!s.eventType) e.eventType = t('create.error.eventType')
  if (!s.attendeeCount) e.attendeeCount = t('create.error.attendeeCount')
  if (!s.eventName.trim()) e.eventName = t('create.error.eventName')
  if (!s.consent) e.consent = t('create.error.consent')
  return e
}

export default function StartForm() {
  const { t } = useT()
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const updateText = (key: keyof FormState) => (ev: ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [key]: ev.target.value }))
    if (errors[key]) setErrors(prev => ({ ...prev, [key]: undefined }))
    if (submitError) setSubmitError('')
  }

  const select = (key: keyof FormState, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors(prev => ({ ...prev, [key]: undefined }))
    if (submitError) setSubmitError('')
  }

  const toggleAddOn = (value: string) => {
    setForm(prev => ({
      ...prev,
      addOns: prev.addOns.includes(value)
        ? prev.addOns.filter(addOn => addOn !== value)
        : [...prev.addOns, value],
    }))
    if (submitError) setSubmitError('')
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const next = validate(form, t)
    if (Object.keys(next).length) {
      setErrors(next)
      return
    }

    setSubmitting(true)
    setSubmitError('')

    try {
      const selectedAddOns = addOns
        .filter(addOn => form.addOns.includes(addOn.value))
        .map(addOn => `${addOn.title} (${addOn.price})`)

      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: form.email,
          eventType: form.eventType,
          guestCount: form.attendeeCount,
          consent: form.consent,
          notes: [
            `Event name: ${form.eventName}`,
            selectedAddOns.length ? `Selected add-ons: ${selectedAddOns.join(', ')}` : '',
          ].filter(Boolean).join('\n'),
          startedAt: Date.now() - 3000,
        }),
      })

      if (!response.ok) throw new Error('Lead submission failed')

      setSubmitted(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch {
      setSubmitError(t('start.submitError'))
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="start">
      <div className="start-bg-pattern" />
      <div className="start-bg-glow" />

      <div className="container">
        <div className="start-inner create-inner">
          <div className="start-card create-card">
            {submitted ? (
              <div className="start-success" role="status" aria-live="polite">
                <div className="start-success-icon"><Check /></div>
                <h2 className="start-success-title">{t('create.success.title')}</h2>
                <p className="start-success-text">{t('create.success.text')}</p>
                <button type="button" className="btn btn-outline" onClick={() => setSubmitted(false)}>
                  {t('create.editAnswers')}
                </button>
              </div>
            ) : (
              <form className="start-form create-form" onSubmit={onSubmit} noValidate>
                <div className="start-form-header">
                  <h2 className="start-form-title">{t('create.form.title')}</h2>
                  <p className="start-form-sub">{t('create.form.sub')}</p>
                </div>

                <div className="start-grid">
                  <div className="start-field start-field-full">
                    <label htmlFor="email">{t('start.email')} <span className="req">*</span></label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={updateText('email')}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-err' : undefined}
                    />
                    {errors.email && <span className="start-error" id="email-err">{errors.email}</span>}
                  </div>
                </div>

                <fieldset className="create-question">
                  <legend><span>1</span>{t('create.eventType')}</legend>
                  <div className="create-event-grid" role="radiogroup" aria-describedby={errors.eventType ? 'eventType-err' : undefined}>
                    {eventTypes.map((type) => {
                      const selected = form.eventType === type.value
                      return (
                        <button
                          key={type.value}
                          type="button"
                          className={`create-option create-event-option${selected ? ' is-selected' : ''}`}
                          onClick={() => select('eventType', type.value)}
                          role="radio"
                          aria-checked={selected}
                        >
                          <span className="create-option-icon" aria-hidden="true">{type.icon}</span>
                          <span className="create-option-copy">
                            <strong>{t(type.titleKey)}</strong>
                            <small>{t(type.subKey)}</small>
                          </span>
                        </button>
                      )
                    })}
                  </div>
                  {errors.eventType && <span className="start-error" id="eventType-err">{errors.eventType}</span>}
                </fieldset>

                <fieldset className="create-question">
                  <legend><span>2</span>{t('create.attendeeCount')}</legend>
                  <div className="create-count-grid" role="radiogroup" aria-describedby={errors.attendeeCount ? 'attendeeCount-err' : undefined}>
                    {attendeeRanges.map((range) => {
                      const selected = form.attendeeCount === range.value
                      return (
                        <button
                          key={range.value}
                          type="button"
                          className={`create-option create-count-option${selected ? ' is-selected' : ''}`}
                          onClick={() => select('attendeeCount', range.value)}
                          role="radio"
                          aria-checked={selected}
                        >
                          {range.label}
                        </button>
                      )
                    })}
                  </div>
                  {errors.attendeeCount && <span className="start-error" id="attendeeCount-err">{errors.attendeeCount}</span>}
                </fieldset>

                <div className="create-question">
                  <label className="create-label" htmlFor="eventName">
                    <span>3</span>{t('create.eventName')}
                  </label>
                  <input
                    id="eventName"
                    className="create-event-name"
                    type="text"
                    value={form.eventName}
                    onChange={updateText('eventName')}
                    placeholder={t('create.eventName.placeholder')}
                    aria-invalid={!!errors.eventName}
                    aria-describedby={errors.eventName ? 'eventName-err' : undefined}
                  />
                  {errors.eventName && <span className="start-error" id="eventName-err">{errors.eventName}</span>}
                </div>

                <section className="create-addons" aria-labelledby="addons-title">
                  <h3 id="addons-title">Eklemek istedikleriniz</h3>
                  <div className="create-addons-list">
                    {addOns.map((addOn) => {
                      const selected = form.addOns.includes(addOn.value)
                      return (
                        <button
                          key={addOn.value}
                          type="button"
                          className={`create-addon${selected ? ' is-selected' : ''}${addOn.disabled ? ' is-disabled' : ''}`}
                          onClick={() => !addOn.disabled && toggleAddOn(addOn.value)}
                          role="checkbox"
                          aria-checked={selected}
                          aria-disabled={addOn.disabled || undefined}
                        >
                          <span className="create-addon-check">
                            {!addOn.disabled && selected && <Check />}
                          </span>
                          <span className="create-addon-copy">
                            <span className="create-addon-top">
                              <strong>{addOn.title}</strong>
                              <span>{addOn.price}</span>
                            </span>
                            <small>{addOn.description}</small>
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </section>

                <label className="start-consent">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(ev) => {
                      setForm(prev => ({ ...prev, consent: ev.target.checked }))
                      if (errors.consent) setErrors(prev => ({ ...prev, consent: undefined }))
                      if (submitError) setSubmitError('')
                    }}
                    aria-invalid={!!errors.consent}
                  />
                  <span>{t('create.consent')}</span>
                </label>
                {errors.consent && <span className="start-error">{errors.consent}</span>}

                <button type="submit" className="btn btn-primary start-submit" disabled={submitting}>
                  {submitting ? t('start.submitting') : t('create.continue')}
                  <ArrowRight />
                </button>
                {submitError && <div className="start-submit-error" role="alert">{submitError}</div>}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
