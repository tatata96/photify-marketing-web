import { useState, useEffect, useRef } from 'react'
import { useT } from '../i18n'

const sections = {
  en: [
    { id: 'information-we-collect', number: '01', title: 'Information We Collect' },
    { id: 'face-data', number: '02', title: 'Face Data and Biometric Information' },
    { id: 'how-we-use', number: '03', title: 'How We Use Information' },
    { id: 'storage-security', number: '04', title: 'Storage and Security' },
    { id: 'data-sharing', number: '05', title: 'Data Sharing and Third Parties' },
    { id: 'data-retention', number: '06', title: 'Data Retention' },
    { id: 'account-deletion', number: '07', title: 'Account Deletion' },
    { id: 'user-privacy-rights', number: '08', title: 'User Privacy Rights' },
    { id: 'contact', number: '09', title: 'Contact Us' },
  ],
  tr: [
    { id: 'information-we-collect', number: '01', title: 'Topladığımız Bilgiler' },
    { id: 'face-data', number: '02', title: 'Yüz Verisi ve Biyometrik Bilgi' },
    { id: 'how-we-use', number: '03', title: 'Bilgileri Nasıl Kullanıyoruz' },
    { id: 'storage-security', number: '04', title: 'Depolama ve Güvenlik' },
    { id: 'data-sharing', number: '05', title: 'Veri Paylaşımı ve Üçüncü Taraflar' },
    { id: 'data-retention', number: '06', title: 'Veri Saklama' },
    { id: 'account-deletion', number: '07', title: 'Hesap Silme' },
    { id: 'user-privacy-rights', number: '08', title: 'Kullanıcı Gizlilik Hakları' },
    { id: 'contact', number: '09', title: 'Bize Ulaşın' },
  ],
}

export default function PrivacyPage() {
  const { lang } = useT()
  const isTr = lang === 'tr'
  const [activeSection, setActiveSection] = useState('information-we-collect')
  const observerRef = useRef<IntersectionObserver | null>(null)
  const currentSections = isTr ? sections.tr : sections.en

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

    currentSections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [lang])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <div className="pp-root">
      <div className="pp-hero">
        <div className="container">
          <div className="pp-hero-inner">
            <div className="section-label">{isTr ? 'Yasal' : 'Legal'}</div>
            <h1 className="pp-title">{isTr ? 'Gizlilik Politikası' : 'Privacy Policy'}</h1>
            <p className="pp-subtitle">
              {isTr
                ? 'Son güncelleme: Haziran 2025 · Tüm Photify kullanıcıları için geçerlidir'
                : 'Last updated: June 2025 · Effective for all Photify users'}
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="pp-layout">

          <aside className="pp-toc">
            <div className="pp-toc-inner">
              <div className="pp-toc-label">{isTr ? 'İçindekiler' : 'Contents'}</div>
              <nav>
                {currentSections.map(({ id, number, title }) => (
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

          <main className="pp-content">

            {/* 01 */}
            <section id="information-we-collect" className="pp-section">
              <div className="pp-section-header">
                <span className="pp-section-num">01</span>
                <h2 className="pp-section-title">{isTr ? 'Topladığımız Bilgiler' : 'Information We Collect'}</h2>
              </div>
              <div className="pp-section-body">
                {isTr ? (
                  <>
                    <p>Photify'yi kullandığınızda, adınız, e-posta adresiniz ve — isteğe bağlı olarak — biyometrik yüz eşleştirme amacıyla kullanılan bir özçekim fotoğrafı dahil olmak üzere doğrudan sağladığınız bilgileri topluyoruz. Hizmetlerimizi nasıl kullandığınıza ilişkin bilgileri de topluyoruz; katıldığınız etkinlikler, eriştiğiniz fotoğraflar ve cihaz bilgileri bunlar arasında yer alır.</p>
                    <p>Photify'yi kullanan etkinlik organizatörleri, platformu işletmek için gerekli etkinlik fotoğraflarını, katılımcı listelerini ve temel hesap bilgilerini bize sağlar.</p>
                  </>
                ) : (
                  <>
                    <p>When you use Photify, we collect information you provide directly, including your name, email address, and — optionally — a selfie photograph used for biometric face matching. We also collect information about how you use our services, such as the events you join, photos you access, and device information.</p>
                    <p>Event organizers who use Photify provide us with event photographs, participant lists, and basic account information necessary to operate the platform.</p>
                  </>
                )}
              </div>
            </section>

            {/* 02 */}
            <section id="face-data" className="pp-section pp-section--featured">
              <div className="pp-section-header">
                <span className="pp-section-num">02</span>
                <h2 className="pp-section-title">{isTr ? 'Yüz Verisi ve Biyometrik Bilgi' : 'Face Data and Biometric Information'}</h2>
              </div>
              <div className="pp-section-body">
                {isTr ? (
                  <>
                    <p>Kullanıcılar, hesap kaydı sırasında gönüllü olarak bir özçekim fotoğrafı sağlar. Bu özçekim, hesap silinerek veya biyometrik onay geri çekilerek istediğiniz zaman kaldırılabilir.</p>
                    <p>Otomatik fotoğraf eşleştirmesi sağlamak amacıyla Photify, kullanıcının özçekiminden ve etkinlik organizatörlerinin yüklediği etkinlik fotoğraflarından bir biyometrik yüz şablonu — yüz özelliklerinin matematiksel bir temsili — oluşturur. Bu şablon, orijinal görüntüyü yeniden oluşturmak için kullanılamaz.</p>

                    <div className="pp-subsection">
                      <h3 className="pp-subsection-title">İşlemin Amacı</h3>
                      <p>Yüz verisi, yalnızca kullanıcıyı içeren etkinlik fotoğraflarını tespit etmek ve iletmek amacıyla işlenir. Yüz verisi; reklam, pazarlama, profilleme, analitik, kimlik doğrulama, kolluk kuvvetleri amaçları veya yapay zeka ya da makine öğrenmesi modellerinin eğitilmesi için kullanılmaz.</p>
                    </div>

                    <div className="pp-subsection">
                      <h3 className="pp-subsection-title">Yüz Verisinin Paylaşımı</h3>
                      <p>Photify, yüz verisini üçüncü taraflara satmaz, kiralamaz, lisanslamaz veya paylaşmaz. Photify, üçüncü taraf yüz tanıma, biyometrik işleme veya yapay zeka eşleştirme hizmetleri kullanmaz. Tüm yüz eşleştirme işlemleri yalnızca Photify kontrolündeki sistemlerde gerçekleştirilir.</p>
                    </div>

                    <div className="pp-subsection">
                      <h3 className="pp-subsection-title">Yüz Verisinin Depolanması</h3>
                      <p>Kullanıcı fotoğrafları ve ilgili veriler, Photify adına hareket eden güvenli bulut altyapı sağlayıcıları tarafından depolanır. Biyometrik yüz şablonları ve eşleştirme kayıtları, Photify'nin kontrolündeki güvenli veritabanlarında saklanır.</p>
                    </div>

                    <div className="pp-subsection">
                      <h3 className="pp-subsection-title">Yüz Verisinin Saklanması</h3>
                      <p>Yüz verisi, kullanıcının hesabı aktif ve biyometrik onay geçerli olduğu sürece saklanır. Hesap silinmesi veya biyometrik onayın geri çekilmesi durumunda, özçekim görüntüleri ve biyometrik yüz şablonları 24 saat içinde silinir.</p>
                    </div>

                    <div className="pp-subsection">
                      <h3 className="pp-subsection-title">Kullanıcı Hakları</h3>
                      <p>Kullanıcılar, biyometrik işleme için verdikleri onayı istedikleri zaman geri çekebilir ve uygulama ayarları aracılığıyla veya <a href="mailto:info@photify.studio" className="pp-link">info@photify.studio</a> ile iletişime geçerek biyometrik verilerinin silinmesini talep edebilir.</p>
                    </div>
                  </>
                ) : (
                  <>
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
                      <p>User photos and related data are stored using secure cloud infrastructure providers acting on behalf of Photify. Biometric face templates and matching records are stored in secure databases controlled by Photify.</p>
                    </div>

                    <div className="pp-subsection">
                      <h3 className="pp-subsection-title">Retention of Face Data</h3>
                      <p>Face data is retained while the user's account remains active and biometric consent remains valid. Upon account deletion or withdrawal of biometric consent, selfie images and biometric face templates are deleted within 24 hours.</p>
                    </div>

                    <div className="pp-subsection">
                      <h3 className="pp-subsection-title">User Rights</h3>
                      <p>Users may withdraw consent for biometric processing at any time and request deletion of their biometric data through the application settings or by contacting us at <a href="mailto:info@photify.studio" className="pp-link">info@photify.studio</a>.</p>
                    </div>
                  </>
                )}
              </div>
            </section>

            {/* 03 */}
            <section id="how-we-use" className="pp-section">
              <div className="pp-section-header">
                <span className="pp-section-num">03</span>
                <h2 className="pp-section-title">{isTr ? 'Bilgileri Nasıl Kullanıyoruz' : 'How We Use Information'}</h2>
              </div>
              <div className="pp-section-body">
                {isTr ? (
                  <>
                    <p>Topladığımız bilgileri hizmetlerimizi sağlamak, sürdürmek ve geliştirmek amacıyla kullanıyoruz — yüzünüzü etkinlik fotoğraflarıyla eşleştirmek ve kişisel albümünüzü oluşturmak da dahil olmak üzere. Bu bilgileri aynı zamanda hesabınız ve etkinlikler hakkında sizinle iletişim kurmak, yasal yükümlülükleri yerine getirmek ve platformumuzun güvenliğini sağlamak için de kullanıyoruz.</p>
                    <p>Kişisel bilgilerinizi veya yüz verinizi reklam, davranışsal profilleme ya da temel hizmetin sunulmasının ötesinde herhangi bir amaçla kullanmıyoruz.</p>
                  </>
                ) : (
                  <>
                    <p>We use the information we collect to provide, maintain, and improve our services — including matching your face to event photos and delivering your personal album. We also use it to communicate with you about your account and events, comply with legal obligations, and ensure the security of our platform.</p>
                    <p>We do not use your personal information or face data for advertising, behavioral profiling, or any purpose beyond delivering the core service.</p>
                  </>
                )}
              </div>
            </section>

            {/* 04 */}
            <section id="storage-security" className="pp-section">
              <div className="pp-section-header">
                <span className="pp-section-num">04</span>
                <h2 className="pp-section-title">{isTr ? 'Depolama ve Güvenlik' : 'Storage and Security'}</h2>
              </div>
              <div className="pp-section-body">
                {isTr ? (
                  <>
                    <p>Tüm veriler, endüstri standardı şifreleme kullanılarak aktarım sırasında ve beklemedeyken korunur. Sertifikalı güvenlik uygulamalarına sahip saygın bulut altyapı sağlayıcıları kullanıyoruz. Kişisel verilere ve biyometrik şablonlara erişim, yalnızca meşru operasyonel ihtiyacı olan yetkili Photify sistemleri ve personeli ile kesinlikle sınırlıdır.</p>
                    <p>Güvenlik uygulamalarımızı düzenli olarak gözden geçiriyor ve herhangi bir güvenlik açığı veya olayı derhal ele alıyoruz.</p>
                  </>
                ) : (
                  <>
                    <p>All data is stored using industry-standard encryption at rest and in transit. We use reputable cloud infrastructure providers with certified security practices. Access to personal data and biometric templates is strictly limited to authorized Photify systems and personnel with a legitimate operational need.</p>
                    <p>We regularly review our security practices and promptly address any vulnerabilities or incidents.</p>
                  </>
                )}
              </div>
            </section>

            {/* 05 */}
            <section id="data-sharing" className="pp-section">
              <div className="pp-section-header">
                <span className="pp-section-num">05</span>
                <h2 className="pp-section-title">{isTr ? 'Veri Paylaşımı ve Üçüncü Taraflar' : 'Data Sharing and Third Parties'}</h2>
              </div>
              <div className="pp-section-body">
                {isTr ? (
                  <>
                    <p>Photify, kişisel verilerinizi üçüncü taraflara satmaz. Verileri, kendi amaçları için kullanmalarını yasaklayan katı sözleşme koşulları çerçevesinde veri işleyicisi olarak hareket eden güvenilir hizmet sağlayıcılarla (bulut depolama ve altyapı sağlayıcıları gibi) paylaşabiliriz.</p>
                    <p>Yasal zorunluluk, mahkeme kararı veya kullanıcılarımızın ve kamuoyunun hak ve güvenliğini koruma amacıyla bilgileri ifşa edebiliriz.</p>
                  </>
                ) : (
                  <>
                    <p>Photify does not sell your personal data to third parties. We may share data with trusted service providers acting as data processors (such as cloud storage and infrastructure providers) under strict contractual terms that prohibit them from using your data for their own purposes.</p>
                    <p>We may disclose information if required by law, court order, or to protect the rights and safety of our users and the public.</p>
                  </>
                )}
              </div>
            </section>

            {/* 06 */}
            <section id="data-retention" className="pp-section">
              <div className="pp-section-header">
                <span className="pp-section-num">06</span>
                <h2 className="pp-section-title">{isTr ? 'Veri Saklama' : 'Data Retention'}</h2>
              </div>
              <div className="pp-section-body">
                {isTr ? (
                  <>
                    <p>Hesap bilgilerinizi, hesabınız aktif olduğu sürece veya hizmetlerin sağlanması için gerektiği kadar saklarız. Etkinlik fotoğrafları ve ilgili veriler, etkinlik organizatörünün belirlediği süre boyunca veya yürürlükteki mevzuatın gerektirdiği şekilde saklanır.</p>
                    <p>Biyometrik yüz şablonları, hesap silinmesinden veya onayın geri çekilmesinden itibaren 24 saat içinde silinir. Anonimleştirilmiş toplam istatistikler, hizmet iyileştirme amacıyla süresiz olarak saklanabilir.</p>
                  </>
                ) : (
                  <>
                    <p>We retain your account information for as long as your account is active or as needed to provide services. Event photographs and associated data are retained for the period specified by the event organizer or as required by applicable law.</p>
                    <p>Biometric face templates are deleted within 24 hours of account deletion or consent withdrawal. Anonymized aggregate statistics may be retained indefinitely for service improvement.</p>
                  </>
                )}
              </div>
            </section>

            {/* 07 */}
            <section id="account-deletion" className="pp-section">
              <div className="pp-section-header">
                <span className="pp-section-num">07</span>
                <h2 className="pp-section-title">{isTr ? 'Hesap Silme' : 'Account Deletion'}</h2>
              </div>
              <div className="pp-section-body">
                {isTr ? (
                  <>
                    <p>Hesabınızı istediğiniz zaman uygulama ayarları üzerinden silebilirsiniz. Silme işleminin ardından kişisel profiliniz, özçekim fotoğrafınız ve biyometrik yüz şablonlarınız 24 saat içinde kalıcı olarak kaldırılır. Etkinlik fotoğrafları, etkinlik organizatörünün kontrolünde kalmaya devam eder; ancak biyometrik veriler silindikten sonra Photify, kullanıcıyı bu fotoğraflarda otomatik olarak tanımlayamaz veya eşleştiremez.</p>
                    <p>Tam veri silinmesi talebinde bulunmak için <a href="mailto:info@photify.studio" className="pp-link">info@photify.studio</a> ile iletişime geçin.</p>
                  </>
                ) : (
                  <>
                    <p>You may delete your account at any time through the application settings. Upon deletion, your personal profile, selfie photo, and biometric face templates are permanently removed within 24 hours. Event photographs remain under the control of the event organizer; however, once biometric data is deleted, Photify can no longer automatically identify or match the user within those photographs.</p>
                    <p>To request complete data erasure, contact us at <a href="mailto:info@photify.studio" className="pp-link">info@photify.studio</a>.</p>
                  </>
                )}
              </div>
            </section>

            {/* 08 */}
            <section id="user-privacy-rights" className="pp-section">
              <div className="pp-section-header">
                <span className="pp-section-num">08</span>
                <h2 className="pp-section-title">{isTr ? 'Kullanıcı Gizlilik Hakları' : 'User Privacy Rights'}</h2>
              </div>
              <div className="pp-section-body">
                {isTr ? (
                  <>
                    <p>Tüm kullanıcılar, uygulanabilir gizlilik yasaları kapsamında —  GDPR, KVKK ve diğer yerel düzenlemeler dahil — aşağıdaki haklara sahip olabilir. Bu haklarınızı kullanmak için bizimle iletişime geçebilirsiniz.</p>
                    <ul className="pp-list">
                      <li><strong>Erişim hakkı</strong> — hakkınızda tuttuğumuz kişisel verilerin bir kopyasını talep etme.</li>
                      <li><strong>Düzeltme hakkı</strong> — yanlış veya eksik verilerin düzeltilmesini talep etme.</li>
                      <li><strong>Silme hakkı</strong> — kişisel verilerinizin silinmesini talep etme.</li>
                      <li><strong>İşlemeyi kısıtlama hakkı</strong> — belirli koşullarda verilerinizin nasıl işlendiğini kısıtlamamızı talep etme.</li>
                      <li><strong>Veri taşınabilirliği hakkı</strong> — verilerinizi yapılandırılmış, makine tarafından okunabilir bir biçimde alma.</li>
                      <li><strong>İtiraz hakkı</strong> — meşru çıkarlara dayalı işleme itiraz etme.</li>
                      <li><strong>Biyometrik işleme onayını geri çekme hakkı</strong> — önceki işlemin geçerliliğini etkilemeksizin, biyometrik işleme onayınızı istediğiniz zaman geri çekme.</li>
                      <li><strong>Bilgi talep etme hakkı</strong> — kişisel verilerinizin nasıl işlendiğine dair bilgi isteme.</li>
                      <li><strong>Yanlış verilerin düzeltilmesini veya silinmesini talep etme hakkı</strong> — hatalı ya da güncel olmayan verilerin güncellenmesini veya kaldırılmasını isteme.</li>
                      <li><strong>Denetim makamına şikâyette bulunma hakkı</strong> — uygulanabilir durumlarda ilgili veri koruma otoritesine şikâyette bulunma.</li>
                    </ul>
                    <p>Gizlilik taleplerine 1–2 iş günü içinde, her durumda uygulanabilir mevzuatın öngördüğü süreler içinde yanıt vermeyi hedefliyoruz. Talepleriniz için <a href="mailto:info@photify.studio" className="pp-link">info@photify.studio</a> adresiyle iletişime geçin.</p>
                  </>
                ) : (
                  <>
                    <p>Depending on where you are located, you may have rights under applicable privacy laws, including GDPR, KVKK, and other local regulations. These rights may include:</p>
                    <ul className="pp-list">
                      <li><strong>Right of access</strong> — request a copy of the personal data we hold about you.</li>
                      <li><strong>Right to rectification</strong> — request correction of inaccurate or incomplete data.</li>
                      <li><strong>Right to erasure</strong> — request deletion of your personal data.</li>
                      <li><strong>Right to restriction of processing</strong> — request that we limit how we process your data in certain circumstances.</li>
                      <li><strong>Right to data portability</strong> — receive your data in a structured, machine-readable format.</li>
                      <li><strong>Right to object</strong> — object to processing based on legitimate interests.</li>
                      <li><strong>Right to withdraw consent for biometric processing</strong> — withdraw consent at any time without affecting the lawfulness of prior processing.</li>
                      <li><strong>Right to request information</strong> — ask how your personal data is being processed.</li>
                      <li><strong>Right to request correction or deletion of inaccurate data</strong> — ask us to update or remove data that is wrong or out of date.</li>
                      <li><strong>Right to lodge a complaint</strong> — file a complaint with the relevant supervisory authority where applicable.</li>
                    </ul>
                    <p>We aim to respond to privacy requests within 1–2 business days and no later than the time periods required by applicable law. To exercise your rights, contact us at <a href="mailto:info@photify.studio" className="pp-link">info@photify.studio</a>.</p>
                  </>
                )}
              </div>
            </section>

            {/* 09 */}
            <section id="contact" className="pp-section">
              <div className="pp-section-header">
                <span className="pp-section-num">09</span>
                <h2 className="pp-section-title">{isTr ? 'Bize Ulaşın' : 'Contact Us'}</h2>
              </div>
              <div className="pp-section-body">
                <p>
                  {isTr
                    ? 'Bu Gizlilik Politikası veya verilerinizi nasıl işlediğimiz hakkında herhangi bir soru, talep veya endişeniz için lütfen bizimle iletişime geçin:'
                    : 'For any questions, requests, or concerns about this Privacy Policy or how we handle your data, please contact us:'}
                </p>
                <div className="pp-contact-card">
                  <div className="pp-contact-row">
                    <span className="pp-contact-label">{isTr ? 'E-posta' : 'Email'}</span>
                    <a href="mailto:info@photify.studio" className="pp-link">info@photify.studio</a>
                  </div>
                  <div className="pp-contact-row">
                    <span className="pp-contact-label">{isTr ? 'Konu satırı' : 'Subject line'}</span>
                    <span>{isTr ? 'Gizlilik Talebi / Veri Hakları' : 'Privacy Request / Data Rights'}</span>
                  </div>
                  <div className="pp-contact-row">
                    <span className="pp-contact-label">{isTr ? 'Yanıt süresi' : 'Response time'}</span>
                    <span>{isTr ? '1–2 iş günü' : '1–2 business days'}</span>
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
