import { useState, useEffect, useRef } from 'react'

const sections = [
  { id: 'information-we-collect', number: '01', title: 'Information We Collect' },
  { id: 'face-data', number: '02', title: 'Face Data and Biometric Information' },
  { id: 'how-we-use', number: '03', title: 'How We Use Information' },
  { id: 'storage-security', number: '04', title: 'Storage and Security' },
  { id: 'data-sharing', number: '05', title: 'Data Sharing and Third Parties' },
  { id: 'data-retention', number: '06', title: 'Data Retention' },
  { id: 'account-deletion', number: '07', title: 'Account Deletion' },
  { id: 'gdpr-rights', number: '08', title: 'GDPR Rights (EU Users)' },
  { id: 'kvkk-rights', number: '09', title: 'KVKK Rights (Turkey)' },
  { id: 'contact', number: '10', title: 'Contact Us' },
]

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState('information-we-collect')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = 100
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <div className="pp-root">
      <div className="pp-hero">
        <div className="container">
          <div className="pp-hero-inner">
            <div className="section-label">Legal</div>
            <h1 className="pp-title">Privacy Policy</h1>
            <p className="pp-subtitle">
              Last updated: June 2025 &nbsp;·&nbsp; Effective for all Photify users
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="pp-layout">

          {/* Sticky TOC */}
          <aside className="pp-toc">
            <div className="pp-toc-inner">
              <div className="pp-toc-label">Contents</div>
              <nav>
                {sections.map(({ id, number, title }) => (
                  <button
                    key={id}
                    className={`pp-toc-item${activeSection === id ? ' pp-toc-item--active' : ''}`}
                    onClick={() => scrollTo(id)}
                  >
                    <span className="pp-toc-num">{number}</span>
                    <span className="pp-toc-text">{title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <main className="pp-content">

            <section id="information-we-collect" className="pp-section">
              <div className="pp-section-header">
                <span className="pp-section-num">01</span>
                <h2 className="pp-section-title">Information We Collect</h2>
              </div>
              <div className="pp-section-body">
                <p>When you use Photify, we collect information you provide directly, including your name, email address, and — optionally — a selfie photograph used for biometric face matching. We also collect information about how you use our services, such as the events you join, photos you access, and device information.</p>
                <p>Event organizers who use Photify provide us with event photographs, participant lists, and basic account information necessary to operate the platform.</p>
              </div>
            </section>

            <section id="face-data" className="pp-section pp-section--featured">
              <div className="pp-section-header">
                <span className="pp-section-num">02</span>
                <h2 className="pp-section-title">Face Data and Biometric Information</h2>
              </div>
              <div className="pp-section-body">
                <p>Users voluntarily provide a selfie photograph during account registration. This selfie may be removed at any time by deleting the account or withdrawing biometric consent.</p>
                <p>To provide automatic photo matching, Photify generates a biometric face template — a mathematical representation of facial features — from the user's selfie and from event photographs uploaded by event organizers. This template cannot be used to reconstruct the original image.</p>

                <div className="pp-subsection">
                  <h3 className="pp-subsection-title">Purpose of Processing</h3>
                  <p>Face data is processed solely for the purpose of identifying and delivering event photographs that contain the user. Face data is not used for advertising, marketing, profiling, analytics, identity verification, law enforcement purposes, or training artificial intelligence or machine learning models.</p>
                </div>

                <div className="pp-subsection">
                  <h3 className="pp-subsection-title">Sharing of Face Data</h3>
                  <p>Photify does not sell, rent, license, or share face data with third parties. Photify does not use third-party facial recognition, biometric processing, or AI matching services. All face matching is performed exclusively within Photify-controlled systems.</p>
                </div>

                <div className="pp-subsection">
                  <h3 className="pp-subsection-title">Storage of Face Data</h3>
                  <p>User photos may be stored using secure cloud storage providers acting as data processors on behalf of Photify. Biometric templates and matching records are stored in secure databases controlled by Photify.</p>
                </div>

                <div className="pp-subsection">
                  <h3 className="pp-subsection-title">Retention of Face Data</h3>
                  <p>Face data is retained while the user's account remains active and biometric consent remains valid. Upon account deletion or withdrawal of biometric consent, selfie images and biometric face templates are deleted within seven (7) days.</p>
                </div>

                <div className="pp-subsection">
                  <h3 className="pp-subsection-title">User Rights</h3>
                  <p>Users may withdraw consent for biometric processing at any time and request deletion of their biometric data through the application settings or by contacting us at <a href="mailto:info@photify.studio" className="pp-link">info@photify.studio</a>.</p>
                </div>
              </div>
            </section>

            <section id="how-we-use" className="pp-section">
              <div className="pp-section-header">
                <span className="pp-section-num">03</span>
                <h2 className="pp-section-title">How We Use Information</h2>
              </div>
              <div className="pp-section-body">
                <p>We use the information we collect to provide, maintain, and improve our services — including matching your face to event photos and delivering your personal album. We also use it to communicate with you about your account and events, comply with legal obligations, and ensure the security of our platform.</p>
                <p>We do not use your personal information or face data for advertising, behavioral profiling, or any purpose beyond delivering the core service.</p>
              </div>
            </section>

            <section id="storage-security" className="pp-section">
              <div className="pp-section-header">
                <span className="pp-section-num">04</span>
                <h2 className="pp-section-title">Storage and Security</h2>
              </div>
              <div className="pp-section-body">
                <p>All data is stored using industry-standard encryption at rest and in transit. We use reputable cloud infrastructure providers with certified security practices. Access to personal data and biometric templates is strictly limited to authorized Photify systems and personnel with a legitimate operational need.</p>
                <p>We regularly review our security practices and promptly address any vulnerabilities or incidents.</p>
              </div>
            </section>

            <section id="data-sharing" className="pp-section">
              <div className="pp-section-header">
                <span className="pp-section-num">05</span>
                <h2 className="pp-section-title">Data Sharing and Third Parties</h2>
              </div>
              <div className="pp-section-body">
                <p>Photify does not sell your personal data to third parties. We may share data with trusted service providers acting as data processors (such as cloud storage and infrastructure providers) under strict contractual terms that prohibit them from using your data for their own purposes.</p>
                <p>We may disclose information if required by law, court order, or to protect the rights and safety of our users and the public.</p>
              </div>
            </section>

            <section id="data-retention" className="pp-section">
              <div className="pp-section-header">
                <span className="pp-section-num">06</span>
                <h2 className="pp-section-title">Data Retention</h2>
              </div>
              <div className="pp-section-body">
                <p>We retain your account information for as long as your account is active or as needed to provide services. Event photographs and associated data are retained for the period specified by the event organizer or as required by applicable law.</p>
                <p>Biometric face templates are deleted within seven (7) days of account deletion or consent withdrawal. Anonymized aggregate statistics may be retained indefinitely for service improvement.</p>
              </div>
            </section>

            <section id="account-deletion" className="pp-section">
              <div className="pp-section-header">
                <span className="pp-section-num">07</span>
                <h2 className="pp-section-title">Account Deletion</h2>
              </div>
              <div className="pp-section-body">
                <p>You may delete your account at any time through the application settings. Upon deletion, your personal profile, selfie photo, and biometric face templates are permanently removed within seven (7) days. Event photographs remain under the control of the event organizer; however, once biometric data is deleted, Photify can no longer automatically identify or match the user within those photographs.</p>
                <p>To request complete data erasure, contact us at <a href="mailto:info@photify.studio" className="pp-link">info@photify.studio</a>.</p>
              </div>
            </section>

            <section id="gdpr-rights" className="pp-section">
              <div className="pp-section-header">
                <span className="pp-section-num">08</span>
                <h2 className="pp-section-title">GDPR Rights (EU Users)</h2>
              </div>
              <div className="pp-section-body">
                <p>If you are located in the European Union or European Economic Area, you have the following rights under the General Data Protection Regulation (GDPR):</p>
                <ul className="pp-list">
                  <li><strong>Right of access</strong> — request a copy of the personal data we hold about you.</li>
                  <li><strong>Right to rectification</strong> — request correction of inaccurate or incomplete data.</li>
                  <li><strong>Right to erasure</strong> — request deletion of your personal data ("right to be forgotten").</li>
                  <li><strong>Right to restriction</strong> — request that we limit how we process your data.</li>
                  <li><strong>Right to data portability</strong> — receive your data in a structured, machine-readable format.</li>
                  <li><strong>Right to object</strong> — object to processing based on legitimate interests.</li>
                  <li><strong>Right to withdraw consent</strong> — withdraw consent for biometric processing at any time without affecting the lawfulness of prior processing.</li>
                </ul>
                <p>To exercise these rights, contact us at <a href="mailto:info@photify.studio" className="pp-link">info@photify.studio</a>. We will respond within 1–2 business days.</p>
              </div>
            </section>

            <section id="kvkk-rights" className="pp-section">
              <div className="pp-section-header">
                <span className="pp-section-num">09</span>
                <h2 className="pp-section-title">KVKK Rights (Turkey)</h2>
              </div>
              <div className="pp-section-body">
                <p>If you are located in Turkey, you have the following rights under the Kişisel Verilerin Korunması Kanunu (KVKK — Law No. 6698):</p>
                <ul className="pp-list">
                  <li>Learn whether your personal data is being processed.</li>
                  <li>Request information about the processing if it has been processed.</li>
                  <li>Learn the purpose of the processing and whether data is used in accordance with its purpose.</li>
                  <li>Know the third parties to whom personal data is transferred, domestically or abroad.</li>
                  <li>Request rectification if personal data is incomplete or inaccurately processed.</li>
                  <li>Request deletion or destruction of personal data within the scope of KVKK.</li>
                  <li>Request notification of the operations carried out under the above rights to third parties to whom personal data has been transferred.</li>
                  <li>Object to a result that is to your detriment arising from analysis performed exclusively through automated systems.</li>
                  <li>Claim compensation for damages arising from the unlawful processing of personal data.</li>
                </ul>
                <p>To exercise your KVKK rights, contact us at <a href="mailto:info@photify.studio" className="pp-link">info@photify.studio</a>.</p>
              </div>
            </section>

            <section id="contact" className="pp-section">
              <div className="pp-section-header">
                <span className="pp-section-num">10</span>
                <h2 className="pp-section-title">Contact Us</h2>
              </div>
              <div className="pp-section-body">
                <p>For any questions, requests, or concerns about this Privacy Policy or how we handle your data, please contact us:</p>
                <div className="pp-contact-card">
                  <div className="pp-contact-row">
                    <span className="pp-contact-label">Email</span>
                    <a href="mailto:info@photify.studio" className="pp-link">info@photify.studio</a>
                  </div>
                  <div className="pp-contact-row">
                    <span className="pp-contact-label">Subject line</span>
                    <span>Privacy Request / Data Rights</span>
                  </div>
                  <div className="pp-contact-row">
                    <span className="pp-contact-label">Response time</span>
                    <span>1–2 business days</span>
                  </div>
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  )
}
