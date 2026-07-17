import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export type Lang = 'en' | 'tr'

type Dict = Record<string, string>

const en: Dict = {
  // Navbar
  'nav.howItWorks': 'How It Works',
  'nav.solutions': 'Solutions',
  'nav.organizers': 'For Organizers',
  'nav.privacy': 'Privacy',
  'nav.getDemo': 'Get a Demo',

  // Hero
  'hero.tag': 'AI-Powered Event Photography',
  'hero.headline.l1': 'Upload one selfie.',
  'hero.headline.l2': 'Get every photo',
  'hero.headline.l3': "you're in.",
  'hero.subtext': 'Scan a QR code, join instantly. AI finds your face and creates your personal photo album. No chaos, no manual sorting — just your memories, delivered.',
  'hero.cta.organizers': 'For Organizers',
  'hero.cta.join': 'Join an Event',
  'hero.stat.events': 'Events Powered',
  'hero.stat.photos': 'Photos Delivered',
  'hero.stat.gdpr': 'Compliant',
  'hero.badge1.title': 'AI album ready',
  'hero.badge1.sub': 'Just 12 seconds after upload',
  'hero.badge2.title': '27,600+ photos',
  'hero.badge2.sub': 'delivered this month',

  // Problem
  'problem.label': 'The Problem',
  'problem.heading': 'Event Photos Are Broken',
  'problem.subtext': 'From guests waiting weeks to organizers drowning in logistics — the workflow is broken.',
  'problem.c1.title': 'Days to Weeks of Waiting',
  'problem.c1.text': 'Photos arrive weeks late — long after the moment.',
  'problem.c2.title': 'Manual Photo Chaos',
  'problem.c2.text': 'Organizers sort hundreds of photos by hand — no real workflow.',
  'problem.c3.title': 'Scattered Sharing',
  'problem.c3.text': 'Photos vanish across WhatsApp, email, and cloud links nobody can find.',
  'problem.c4.title': 'Zero Personalization',
  'problem.c4.text': 'Everyone gets the same dump — no filtering by face or participant.',

  // Solution
  'solution.label': 'The Solution',
  'solution.heading.l1': 'Built for every photo,',
  'solution.heading.l2': 'personalized for you',
  'solution.subtext': 'Four technologies that close the gap between the shutter and your album.',
  'solution.c1.title': 'QR Code Instant Access',
  'solution.c1.text': 'Guests scan and join in seconds — no app download, no registration.',
  'solution.c2.title': 'AI Face Recognition',
  'solution.c2.text': "AI detects faces and builds a personal album for each guest — only yours, not everyone else's.",
  'solution.c3.title': 'Real-Time Delivery',
  'solution.c3.text': 'Photos land in personal albums within seconds — guests download before leaving the venue.',
  'solution.c4.title': 'Private & Personal',
  'solution.c4.text': 'Each album is private and GDPR-compliant — face data is ephemeral, you stay in control.',

  // How It Works
  'how.label': 'Process',
  'how.heading': '5 Simple Steps',
  'how.subtext': 'From venue setup to personal album delivery — the entire journey takes minutes, not days.',
  'how.s1.title': 'QR Codes at the Event',
  'how.s1.text': 'Organizer sets up QR codes at key venues and entry points.',
  'how.s2.title': 'Guests Scan & Join',
  'how.s2.text': 'Guests scan to instantly join the event photo platform.',
  'how.s3.title': 'Photos Are Uploaded',
  'how.s3.text': 'Photographers upload directly to the secure event gallery.',
  'how.s4.title': 'AI Creates Albums',
  'how.s4.text': "Our AI scans every photo and builds each guest's personal album.",
  'how.s5.title': 'Access Your Photos',
  'how.s5.text': 'Each guest views, downloads, and shares only their photos.',

  // Event Types
  'events.label': 'Solutions',
  'events.heading': 'Built for every type of event',
  'events.subtext': 'From an intimate wedding to a 10,000-person festival — Photify scales to fit.',
  'events.e1.title': 'Weddings & Private Events',
  'events.e1.sub': 'Intimate moments, perfectly organized',
  'events.e1.f1': 'Instant access for 200+ guests',
  'events.e1.f2': 'Face-tagged albums for couples',
  'events.e1.f3': 'No WhatsApp group chaos',
  'events.e1.f4': 'Branded QR displays',
  'events.e2.title': 'Corporate & Brand Events',
  'events.e2.sub': 'Boost engagement, capture leads',
  'events.e2.f1': '40% engagement boost',
  'events.e2.f2': 'Attendee data capture with consent',
  'events.e2.f3': 'Custom branding & white-label',
  'events.e2.f4': 'Analytics dashboard',
  'events.e3.title': 'Festivals & Concerts',
  'events.e3.sub': 'Scale to any audience size',
  'events.e3.f1': 'Scales to 10,000+ attendees',
  'events.e3.f2': 'Multi-photographer support',
  'events.e3.f3': 'Real-time processing',
  'events.e3.f4': 'Social sharing integration',
  'events.e4.title': 'Sports & Competitions',
  'events.e4.sub': 'Find every athlete automatically',
  'events.e4.f1': 'Automatic athlete detection',
  'events.e4.f2': 'Bib number recognition',
  'events.e4.f3': 'Finish line photo matching',
  'events.e4.f4': 'Sponsor visibility tracking',

  // For Organizers
  'org.label': 'For Organizers',
  'org.heading.l1': 'Run Events,',
  'org.heading.l2': 'Not Photo',
  'org.heading.l3': 'Logistics.',
  'org.subtext': 'Skip the sorting and the download-link chasing — Photify automates the whole workflow.',
  'org.stat.hours': 'Hours saved per event',
  'org.stat.engagement': 'Engagement boost',
  'org.stat.setup': 'Setup time',
  'org.b1.title': 'Save 10+ Hours',
  'org.b1.text': 'Per event, zero manual photo sorting required.',
  'org.b2.title': '40% More Engagement',
  'org.b2.text': 'Guests interact more when they get personalized content.',
  'org.b3.title': 'Premium Experience',
  'org.b3.text': 'Elevate your events with a luxury photo delivery system.',
  'org.b4.title': 'Zero Technical Setup',
  'org.b4.text': 'Ready in 5 minutes. No hardware, no app installs.',
  'org.b5.title': 'Analytics & Insights',
  'org.b5.text': 'Track engagement, downloads, and attendee behavior.',
  'org.b6.title': 'Event-Day Support',
  'org.b6.text': 'Dedicated team on-call throughout your event.',

  // Privacy
  'priv.label': 'Privacy & Security',
  'priv.heading.l1': 'Your Privacy is',
  'priv.heading.l2': 'Non-Negotiable.',
  'priv.badge': '🛡 GDPR & KVKK Compliant',
  'priv.subtext': 'We process biometric data — faces. That means we hold ourselves to the highest standard, and face recognition data is processed ephemerally, never stored permanently.',
  'priv.c1.title': 'Privacy by Design',
  'priv.c1.text': 'Built into our architecture from day one.',
  'priv.c2.title': 'End-to-End Encryption',
  'priv.c2.text': 'AES-256 in transit and at rest.',
  'priv.c3.title': 'User-Controlled Access',
  'priv.c3.text': 'Delete your data anytime with one tap.',
  'priv.c4.title': 'Consent-First',
  'priv.c4.text': 'No face data processed without explicit opt-in.',
  'priv.c5.title': 'EU Data Residency',
  'priv.c5.text': 'GDPR and Turkish KVKK compliant.',
  'priv.c6.title': 'Regular Audits',
  'priv.c6.text': 'Independent third-party security reviews.',
  'priv.docs.label': 'Yasal Belgeler',
  'priv.docs.title': 'Sözleşmeler ve Politikalar',

  // CTA
  'cta.headline.l1': 'Start Free.',
  'cta.headline.l2': 'Deliver Magic.',
  'cta.sub': 'Join 500+ successful events. Up to 50 photos free. No credit card required.',
  'cta.perk1': 'No credit card',
  'cta.perk2': 'Up to 50 photos free',
  'cta.perk3': '5-min setup',
  'cta.startFree': 'Start for Free',
  'cta.scheduleDemo': 'Schedule a Demo',

  // Footer
  'footer.tagline': 'AI-powered event photography that delivers every photo to the right person, instantly.',
  'footer.location': '📍 Istanbul, Turkey',
  'footer.col.product': 'Product',
  'footer.col.company': 'Company',
  'footer.col.legal': 'Legal',
  'footer.link.eventTypes': 'Event Types',
  'footer.link.contact': 'Contact',
  'footer.copy': '© 2026 Photify. All rights reserved.',

  // Start Form
  'start.back': 'Ana sayfaya dön',
  'start.label': 'Get Started',
  'start.heading.l1': 'Start Your',
  'start.heading.l2': 'Photify Experience',
  'start.sub': "Share a few details about your event and we'll help you create a smarter, easier way to collect and deliver photos.",
  'start.benefit1': 'AI-powered photo matching',
  'start.benefit2': 'Easy photo sharing for guests',
  'start.benefit3': 'Designed for weddings, events, and organizers',
  'start.benefit4': 'Simple setup, premium experience',
  'start.trustNote': 'Your information stays private. We use it only to set up your Photify event.',
  'start.success.title': 'Thank you!',
  'start.success.text': 'Your request has been received. Our team will contact you soon.',
  'start.backToHome': 'Back to home',
  'start.form.title': 'Event details',
  'start.form.sub': 'Tell us about your event — required fields are marked.',
  'start.fullName': 'Full Name',
  'start.email': 'Email Address',
  'start.phone': 'Phone Number',
  'start.company': 'Company / Organization',
  'start.eventType': 'Event Type',
  'start.eventDate': 'Event Date',
  'start.guestCount': 'Estimated Guest Count',
  'start.city': 'City / Location',
  'start.city.placeholder': 'Istanbul, Turkey',
  'start.notes': 'Additional Notes',
  'start.notes.placeholder': 'Anything we should know about your event?',
  'start.selectPlaceholder': 'Seçin…',
  'start.submitting': 'Gönderiliyor…',
  'start.continue': 'Continue',
  'start.submitError': 'Something went wrong. Please try again or contact us at info@photify.com.',

  // FAQ
  'faq.label': 'FAQ',
  'faq.heading': 'Frequently Asked Questions',
  'faq.subtext': 'Everything you need to know about AI event photo delivery with Photify.',
  'faq.q1': 'How does Photify deliver event photos to guests?',
  'faq.a1': "Guests scan a QR code to join the event, and Photify's AI face recognition identifies them across every uploaded photo, then delivers a personalized album in real time — no app download or manual sorting required.",
  'faq.q2': 'Do guests need to download an app to get their photos?',
  'faq.a2': 'No. Guests simply scan a QR code with their phone camera to access their personalized photo album directly in the browser.',
  'faq.q3': "Is Photify's face recognition GDPR compliant?",
  'faq.a3': 'Yes. Photify is GDPR and KVKK compliant, uses encryption, and processes facial data only with explicit guest consent. Each guest sees only their own private album.',
  'faq.q4': 'How much does Photify cost?',
  'faq.a4': 'Photify is free to start, including up to 50 photos per event. Paid plans unlock higher volumes and additional features for larger events.',
}

const tr: Dict = {
  // Navbar
  'nav.howItWorks': 'Nasıl Çalışır',
  'nav.solutions': 'Çözümler',
  'nav.organizers': 'Organizatörler için',
  'nav.privacy': 'Gizlilik',
  'nav.getDemo': 'Demo Al',

  // Hero
  'hero.tag': 'Yapay Zeka Destekli Etkinlik Fotoğrafçılığı',
  'hero.headline.l1': 'Selfie yükle.',
  'hero.headline.l2': 'Olduğun her fotoğrafı',
  'hero.headline.l3': 'hemen bul.',
  'hero.subtext': 'QR kodu okutun, anında katılın. Yapay zeka teknolojimiz her fotoğrafın doğru kişiye hızlı ve güvenli bir şekilde ulaşmasını sağlar. Yüzünüzü bulur ve kişisel fotoğraf albümünüzü oluşturur. Karmaşa yok, manuel ayıklama yok.',
  'hero.cta.organizers': 'Organizatörler için',
  'hero.cta.join': 'Etkinliğe Katıl',
  'hero.stat.events': 'Düzenlenen Etkinlik',
  'hero.stat.photos': 'Teslim Edilen Fotoğraf',
  'hero.stat.gdpr': 'Uyumlu',
  'hero.badge1.title': 'AI albüm hazır',
  'hero.badge1.sub': 'Yüklemeden sadece 12 saniye sonra',
  'hero.badge2.title': '27.600+ fotoğraf',
  'hero.badge2.sub': 'bu ay teslim edildi',

  // Problem
  'problem.label': 'Sorun',
  'problem.heading': 'Etkinlik Fotoğrafları Bozuk',
  'problem.subtext': 'Haftalarca bekleyen misafirlerden, lojistiğe boğulan organizatörlere kadar — mevcut süreç işlemiyor.',
  'problem.c1.title': 'Günlerce, Haftalarca Bekleme',
  'problem.c1.text': 'Fotoğraflar günler sonra ulaşıyor — anlık coşku çoktan kaybolduğunda.',
  'problem.c2.title': 'Manuel Fotoğraf Kaosu',
  'problem.c2.text': 'Organizatörler yüzlerce fotoğrafı tek tek ayıklıyor — gerçek bir iş akışı yok.',
  'problem.c3.title': 'Dağınık Paylaşım',
  'problem.c3.text': 'Fotoğraflar WhatsApp, e-posta ve bulut bağlantıları arasında kayboluyor.',
  'problem.c4.title': 'Sıfır Kişiselleştirme',
  'problem.c4.text': 'Herkese aynı klasör gönderiliyor — yüze ya da katılımcıya göre filtreleme yok.',

  // Solution
  'solution.label': 'Çözüm',
  'solution.heading.l1': 'Her fotoğraf için,',
  'solution.heading.l2': 'size özel hazırlandı',
  'solution.subtext': 'Deklanşör ile albümünüz arasındaki mesafeyi kapatan dört teknoloji.',
  'solution.c1.title': 'QR Kod ile Anında Erişim',
  'solution.c1.text': 'Misafirler saniyeler içinde okutup katılır — uygulama indirme, kayıt yok.',
  'solution.c2.title': 'Yapay Zeka Yüz Tanıma',
  'solution.c2.text': 'Yapay zeka yüzleri algılar ve her misafire kişisel bir albüm oluşturur — başkalarının değil, yalnızca sizin fotoğraflarınız.',
  'solution.c3.title': 'Gerçek Zamanlı Teslimat',
  'solution.c3.text': 'Fotoğraflar saniyeler içinde kişisel albümlere düşer — misafirler salondan çıkmadan indirir.',
  'solution.c4.title': 'Özel ve Kişisel',
  'solution.c4.text': 'Her albüm özeldir ve GDPR uyumludur — yüz verisi geçicidir, kontrol her zaman sizdedir.',

  // How It Works
  'how.label': 'Süreç',
  'how.heading': '5 Basit Adım',
  'how.subtext': 'Mekan kurulumundan kişisel albüm teslimatına kadar — tüm süreç günlerce değil, dakikalar içinde tamamlanır.',
  'how.s1.title': 'Etkinlikte QR Kodlar',
  'how.s1.text': 'Organizatör, önemli alanlara ve giriş noktalarına QR kodları yerleştirir.',
  'how.s2.title': 'Misafirler Okutur ve Katılır',
  'how.s2.text': 'Misafirler QR kodu okutarak etkinlik fotoğraf platformuna anında katılır.',
  'how.s3.title': 'Fotoğraflar Yüklenir',
  'how.s3.text': 'Fotoğrafçılar doğrudan güvenli etkinlik galerisine yükler.',
  'how.s4.title': 'Yapay Zeka Albümleri Oluşturur',
  'how.s4.text': 'Yapay zekamız her fotoğrafı tarar ve her misafir için kişisel bir albüm hazırlar.',
  'how.s5.title': 'Fotoğraflarınıza Ulaşın',
  'how.s5.text': 'Her misafir yalnızca kendi fotoğraflarını görüntüler, indirir ve paylaşır.',

  // Event Types
  'events.label': 'Çözümler',
  'events.heading': 'Her tür etkinlik için tasarlandı',
  'events.subtext': 'Samimi bir düğünden 10.000 kişilik bir festivale kadar — Photify her ölçeğe uyum sağlar.',
  'events.e1.title': 'Düğünler ve Özel Etkinlikler',
  'events.e1.sub': 'Samimi anlar, kusursuz organizasyon',
  'events.e1.f1': '200+ misafir için anında erişim',
  'events.e1.f2': 'Çiftler için yüz etiketli albümler',
  'events.e1.f3': 'WhatsApp grup kaosuna son',
  'events.e1.f4': 'Markalı QR ekranlar',
  'events.e2.title': 'Kurumsal ve Marka Etkinlikleri',
  'events.e2.sub': 'Etkileşimi artırın, potansiyel müşteri yakalayın',
  'events.e2.f1': '%40 daha fazla etkileşim',
  'events.e2.f2': 'Onaylı katılımcı veri toplama',
  'events.e2.f3': 'Özel markalama ve beyaz etiket',
  'events.e2.f4': 'Analitik panosu',
  'events.e3.title': 'Festivaller ve Konserler',
  'events.e3.sub': 'Her boyutta kitleye ölçeklenir',
  'events.e3.f1': '10.000+ katılımcıya kadar ölçeklenir',
  'events.e3.f2': 'Çoklu fotoğrafçı desteği',
  'events.e3.f3': 'Gerçek zamanlı işleme',
  'events.e3.f4': 'Sosyal medya paylaşım entegrasyonu',
  'events.e4.title': 'Spor ve Yarışmalar',
  'events.e4.sub': 'Her sporcuyu otomatik olarak bulun',
  'events.e4.f1': 'Otomatik sporcu tespiti',
  'events.e4.f2': 'Yarış numarası tanıma',
  'events.e4.f3': 'Bitiş çizgisi fotoğraf eşleştirme',
  'events.e4.f4': 'Sponsor görünürlük takibi',

  // For Organizers
  'org.label': 'Organizatörler için',
  'org.heading.l1': 'Fotoğraflarınız,',
  'org.heading.l2': 'anında',
  'org.heading.l3': 'sizinle.',
  'org.subtext': 'Ayıklama işine ve indirme bağlantısı kovalamacasına son verin — Photify tüm iş akışını otomatikleştirir.',
  'org.stat.hours': 'Etkinlik başına kazanılan saat',
  'org.stat.engagement': 'Etkileşim artışı',
  'org.stat.setup': 'Kurulum süresi',
  'org.b1.title': '10+ Saat Tasarruf',
  'org.b1.text': 'Etkinlik başına, sıfır manuel fotoğraf ayıklama.',
  'org.b2.title': '%40 Daha Fazla Etkileşim',
  'org.b2.text': 'Kişiselleştirilmiş içerik alan misafirler daha çok etkileşime girer.',
  'org.b3.title': 'Premium Deneyim',
  'org.b3.text': 'Lüks bir fotoğraf teslim sistemiyle etkinliklerinizi yukarı taşıyın.',
  'org.b4.title': 'Sıfır Teknik Kurulum',
  'org.b4.text': '5 dakikada hazır. Donanım yok, uygulama kurulumu yok.',
  'org.b5.title': 'Analitik ve İçgörüler',
  'org.b5.text': 'Etkileşimi, indirmeleri ve katılımcı davranışını takip edin.',
  'org.b6.title': 'Etkinlik Günü Desteği',
  'org.b6.text': 'Etkinliğiniz boyunca özel ekibimiz hizmetinizde.',

  // Privacy
  'priv.label': 'Gizlilik ve Güvenlik',
  'priv.heading.l1': 'Gizliliğiniz',
  'priv.heading.l2': 'Pazarlık Konusu Değildir.',
  'priv.badge': '🛡 GDPR ve KVKK Uyumlu',
  'priv.subtext': 'Biyometrik veri — yüz verisi — işliyoruz. Bu yüzden kendimizi en yüksek standartta tutuyoruz; yüz tanıma verisi yalnızca geçici olarak işlenir, kalıcı olarak saklanmaz.',
  'priv.c1.title': 'Tasarımdan Gelen Gizlilik',
  'priv.c1.text': 'Mimarimize ilk günden itibaren gömülüdür.',
  'priv.c2.title': 'Uçtan Uca Şifreleme',
  'priv.c2.text': 'AES-256 ile aktarımda ve depolamada.',
  'priv.c3.title': 'Kullanıcı Denetimli Erişim',
  'priv.c3.text': 'Verinizi istediğiniz an tek dokunuşla silin.',
  'priv.c4.title': 'Önce Onay',
  'priv.c4.text': 'Açık onay olmadan hiçbir yüz verisi işlenmez.',
  'priv.c5.title': 'AB Veri İkametgahı',
  'priv.c5.text': 'GDPR ve KVKK uyumludur.',
  'priv.c6.title': 'Düzenli Denetimler',
  'priv.c6.text': 'Bağımsız üçüncü taraf güvenlik incelemeleri.',
  'priv.docs.label': 'Yasal Belgeler',
  'priv.docs.title': 'Sözleşmeler ve Politikalar',

  // CTA
  'cta.headline.l1': 'Ücretsiz Başlayın.',
  'cta.headline.l2': 'Sihri Sunun.',
  'cta.sub': '500+ başarılı etkinliğe katılın. 50 fotoğrafa kadar ücretsiz. Kredi kartı gerekmez.',
  'cta.perk1': 'Kredi kartı yok',
  'cta.perk2': '50 fotoğrafa kadar ücretsiz',
  'cta.perk3': '5 dk kurulum',
  'cta.startFree': 'Ücretsiz Başla',
  'cta.scheduleDemo': 'Demo Planla',

  // Footer
  'footer.tagline': 'Her fotoğrafı doğru kişiye anında ulaştıran yapay zeka destekli etkinlik fotoğrafçılığı.',
  'footer.location': '📍 İstanbul, Türkiye',
  'footer.col.product': 'Ürün',
  'footer.col.company': 'Şirket',
  'footer.col.legal': 'Yasal',
  'footer.link.eventTypes': 'Etkinlik Türleri',
  'footer.link.contact': 'İletişim',
  'footer.copy': '© 2026 Photify. Tüm hakları saklıdır.',

  // Start Form
  'start.back': 'Ana sayfaya dön',
  'start.label': 'Başlayın',
  'start.heading.l1': 'Photify Deneyiminizi',
  'start.heading.l2': 'Başlatın',
  'start.sub': 'Etkinliğiniz hakkında birkaç detay paylaşın; fotoğraf toplamanın ve teslim etmenin daha akıllı, daha kolay yolunu birlikte kuralım.',
  'start.benefit1': 'Yapay zeka destekli fotoğraf eşleştirme',
  'start.benefit2': 'Misafirler için kolay fotoğraf paylaşımı',
  'start.benefit3': 'Düğün, etkinlik ve organizatörler için tasarlandı',
  'start.benefit4': 'Basit kurulum, premium deneyim',
  'start.trustNote': 'Bilgileriniz gizli kalır. Yalnızca Photify etkinliğinizi kurmak için kullanılır.',
  'start.success.title': 'Teşekkürler!',
  'start.success.text': 'Talebiniz alındı. Ekibimiz kısa süre içinde sizinle iletişime geçecek.',
  'start.backToHome': 'Ana sayfaya dön',
  'start.form.title': 'Etkinlik detayları',
  'start.form.sub': 'Etkinliğinizden bahsedin — zorunlu alanlar işaretlenmiştir.',
  'start.fullName': 'Adınız Soyadınız',
  'start.email': 'E-posta Adresi',
  'start.phone': 'Telefon Numarası',
  'start.company': 'Şirket / Kuruluş',
  'start.eventType': 'Etkinlik Türü',
  'start.eventDate': 'Etkinlik Tarihi',
  'start.guestCount': 'Tahmini Misafir Sayısı',
  'start.city': 'Şehir / Konum',
  'start.city.placeholder': 'İstanbul, Türkiye',
  'start.notes': 'Ek Notlar',
  'start.notes.placeholder': 'Etkinliğiniz hakkında bilmemiz gereken bir şey var mı?',
  'start.selectPlaceholder': 'Seçin…',
  'start.submitting': 'Gönderiliyor…',
  'start.continue': 'Devam Et',
  'start.submitError': 'Bir şeyler ters gitti. Lütfen tekrar deneyin veya info@photify.com adresinden bizimle iletişime geçin.',

  // FAQ
  'faq.label': 'SSS',
  'faq.heading': 'Sıkça Sorulan Sorular',
  'faq.subtext': 'Photify ile yapay zeka destekli etkinlik fotoğrafı teslimi hakkında bilmeniz gereken her şey.',
  'faq.q1': 'Photify etkinlik fotoğraflarını misafirlere nasıl ulaştırır?',
  'faq.a1': 'Misafirler etkinliğe katılmak için bir QR kodu okutur; Photify’nin yapay zeka destekli yüz tanıma teknolojisi onları yüklenen tüm fotoğraflarda tanır ve gerçek zamanlı olarak kişiselleştirilmiş bir albüm sunar — uygulama indirmeye veya elle ayıklamaya gerek yoktur.',
  'faq.q2': 'Misafirlerin fotoğraflarına ulaşmak için uygulama indirmesi gerekir mi?',
  'faq.a2': 'Hayır. Misafirler telefon kameralarıyla bir QR kodu okutarak kişiselleştirilmiş fotoğraf albümlerine doğrudan tarayıcıdan erişir.',
  'faq.q3': 'Photify’nin yüz tanıma teknolojisi GDPR uyumlu mu?',
  'faq.a3': 'Evet. Photify GDPR ve KVKK uyumludur, şifreleme kullanır ve yüz verisini yalnızca misafirin açık onayıyla işler. Her misafir yalnızca kendi özel albümünü görür.',
  'faq.q4': 'Photify ne kadar?',
  'faq.a4': 'Photify ücretsiz başlar ve etkinlik başına 50 fotoğrafa kadar dahildir. Ücretli planlar, daha büyük etkinlikler için daha yüksek hacimler ve ek özellikler sunar.',
}

const dictionaries: Record<Lang, Dict> = { en, tr }

type Ctx = {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string) => string
}

const LangContext = createContext<Ctx | null>(null)

const STORAGE_KEY = 'photify.lang'

const initialLang = (): Lang => {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'tr' || stored === 'en' ? stored : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const value = useMemo<Ctx>(() => ({
    lang,
    setLang: setLangState,
    t: (key: string) => dictionaries[lang][key] ?? dictionaries.en[key] ?? key,
  }), [lang])

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useT() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useT must be used inside <LanguageProvider>')
  return ctx
}
