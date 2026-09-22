import { useEffect, useMemo } from 'react'
import { FaApple, FaGooglePlay } from 'react-icons/fa'

const APP_STORE_URL = 'https://apps.apple.com/tr/app/photify/id6779256503'
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.tamarakozok.photoapp'

interface JoinEventPageProps {
  eventCodeParam?: string
}

const safeDecodeEventCode = (value?: string) => {
  if (!value) return null

  try {
    const decoded = decodeURIComponent(value)
    return decoded.trim().length > 0 ? decoded : null
  } catch {
    return null
  }
}

export default function JoinEventPage({ eventCodeParam }: JoinEventPageProps) {
  const eventCode = useMemo(() => safeDecodeEventCode(eventCodeParam), [eventCodeParam])
  const displayEventCode = eventCode?.toLocaleUpperCase('en-US')
  const openPhotifyUrl = eventCode ? `photify://join/${encodeURIComponent(eventCode)}` : undefined

  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Join event | Photify'

    return () => {
      document.title = previousTitle
    }
  }, [])

  return (
    <main className="join-page" aria-labelledby="join-title">
      <div className="container join-page-container">
        <section className="join-panel" data-reveal>
          <div className="join-logo" aria-hidden="true">
            <img src="/logo/logo.jpeg" alt="" width="56" height="56" />
          </div>

          <h1 id="join-title" className="join-title">
            {eventCode ? 'Open this event in Photify' : 'Event link is missing a code'}
          </h1>

          {eventCode ? (
            <>
              <p className="join-copy">
                This link belongs to a Photify event. If Photify is installed, your phone can open the app from this link. If it stays in the browser, install Photify and keep this event code.
              </p>

              <div className="join-code" aria-label="Event code">
                <span>Event code</span>
                <strong>{displayEventCode}</strong>
              </div>

              <div className="join-actions">
                <a className="btn btn-primary join-primary" href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
                  <FaApple size={18} aria-hidden="true" />
                  Download on the App Store
                </a>
                <a className="btn btn-primary join-primary" href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer">
                  <FaGooglePlay size={18} aria-hidden="true" />
                  Get it on Google Play
                </a>
                <a className="btn btn-ghost" href={openPhotifyUrl}>
                  Open Photify
                </a>
              </div>
            </>
          ) : (
            <>
              <p className="join-copy join-error">
                This Photify event link is invalid because it does not include an event code. Please scan the QR code again or ask the event organizer for a new link.
              </p>

              <div className="join-actions">
                <a className="btn btn-primary join-primary" href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
                  Download on the App Store
                </a>
                <a className="btn btn-primary join-primary" href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer">
                  Get it on Google Play
                </a>
                <a className="btn btn-ghost" href="/">
                  Go to Photify
                </a>
              </div>
            </>
          )}
        </section>
      </div>
    </main>
  )
}
