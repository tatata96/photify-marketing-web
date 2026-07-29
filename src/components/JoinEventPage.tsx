import { useEffect, useMemo } from 'react'

const APP_STORE_URL = 'https://apps.apple.com/tr/app/photify/id6779256503'

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
  const canonicalJoinUrl = eventCode
    ? `https://photify.studio/join/${encodeURIComponent(eventCode)}`
    : 'https://photify.studio/join'

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
                This link belongs to a Photify event. If Photify is installed, iOS can open the app from this Universal Link. If it stays in Safari, install Photify and keep this event code.
              </p>

              <div className="join-code" aria-label="Event code">
                <span>Event code</span>
                <strong>{displayEventCode}</strong>
              </div>

              <div className="join-actions">
                <a className="btn btn-primary join-primary" href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 814 1000" fill="currentColor" aria-hidden="true">
                    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105.3-44-155.5-103.2C114.7 798.2 91 726.8 91 657.1c0-199.8 144.3-309.5 281-309.5 72.6 0 133.2 47.4 178.3 47.4 43.2 0 111.3-50.2 190.7-50.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
                  </svg>
                  Download on the App Store
                </a>
                <a className="btn btn-ghost" href={canonicalJoinUrl}>
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
