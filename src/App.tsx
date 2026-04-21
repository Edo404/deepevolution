import { useState, useEffect } from 'react'

type CookiePreferences = {
  necessary: true
  analytics: boolean
  marketing: boolean
  updatedAt: string
}

const COOKIE_PREFERENCES_KEY = 'deepevolution_cookie_preferences_v1'

function App() {
  const isPrivacyPolicyPage =
    typeof window !== 'undefined' &&
    (window.location.pathname === '/privacy-policy' || window.location.pathname === '/privacy-policy/')

  if (isPrivacyPolicyPage) {
    return (
      <div className="bg-[var(--surface)] text-[var(--on-surface)] min-h-screen">
        <PrivacyPolicyPage />
        <CookieQuickButton />
        <CookieConsentBanner />
      </div>
    )
  }

  return (
    <div className="bg-[var(--surface)] text-[var(--on-surface)] relative">
      <TopNav />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <AsusPointSection />
        <ContactSection />
      </main>
      <Footer />
      <CookieQuickButton />
      <CookieConsentBanner />
    </div>
  )
}



function TopNav() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = ['home', 'about', 'services', 'contact']
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: '-100px 0px -50% 0px'
      }
    )

    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [])

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-2xl shadow-blue-900/5 flex justify-between items-center px-8 py-4 max-w-full mx-auto">
      <div className="flex items-center gap-2">
        <img
          alt="DeepEvolution Fano Logo"
          className="h-8 w-auto"
          src="/logow.jpg"
        />
        <span className="text-xl font-black tracking-tighter text-blue-700" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Deep Evolution
        </span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a 
          className={`${activeSection === 'home' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-slate-600'} pb-1 font-bold tracking-tight hover:text-blue-600 transition-colors duration-200`} 
          style={{ fontFamily: 'Space Grotesk, sans-serif' }} 
          href="#home"
        >
          Home
        </a>
        <a 
          className={`${activeSection === 'about' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-slate-600'} pb-1 font-medium hover:text-blue-600 transition-colors duration-200`} 
          style={{ fontFamily: 'Space Grotesk, sans-serif' }} 
          href="#about"
        >
          About Us
        </a>
        <a 
          className={`${activeSection === 'services' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-slate-600'} pb-1 font-medium hover:text-blue-600 transition-colors duration-200`} 
          style={{ fontFamily: 'Space Grotesk, sans-serif' }} 
          href="#services"
        >
          Services
        </a>
        <a 
          className={`${activeSection === 'contact' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-slate-600'} pb-1 font-medium hover:text-blue-600 transition-colors duration-200`} 
          style={{ fontFamily: 'Space Grotesk, sans-serif' }} 
          href="#contact"
        >
          Contact
        </a>
      </div>
      <a href="#contact" className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-container)] text-[var(--on-primary)] px-4 py-1.5 sm:px-6 sm:py-2 rounded-lg font-bold text-sm sm:text-base hover:scale-105 transition-all duration-200">
        Contattaci
      </a>
    </nav>
  )
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="home">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          alt="High-end PC hardware with blue LED lighting"
          src="/cover.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--surface)] via-[var(--surface)]/80 to-transparent"></div>
      </div>
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-2xl">
          <span className="text-[var(--primary-container)] font-bold tracking-widest uppercase text-sm mb-4 block animate-fadeIn" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Since 2002
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[var(--on-surface)] mb-5 md:mb-6 leading-tight animate-fadeInUp delay-200" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            <span className="text-[var(--primary-container)]">Deep Evolution</span> Esperti di Informatica a <span className="text-[var(--primary-container)]">Fano</span> dal 2002
          </h1>
          <p className="text-[var(--on-surface-variant)] text-lg md:text-xl mb-8 md:mb-10 leading-relaxed font-light animate-fadeInUp delay-400">
            Precisione, competenza e oltre vent'anni di esperienza al servizio del tuo hardware. Siamo il punto di riferimento certificato per la tua tecnologia.
          </p>
          <div className="flex gap-3 animate-fadeInUp delay-600">
            <a
              className="bg-[var(--primary-container)] text-[var(--on-primary)] px-6 py-3 md:px-8 md:py-4 rounded font-bold text-base md:text-lg hover:scale-105 transition-transform whitespace-nowrap"
              href="#services"
            >
              Scopri i Servizi
            </a>
            <a
              className="border border-[var(--outline-variant)]/30 bg-[var(--surface-container-high)] md:bg-transparent px-6 py-3 md:px-8 md:py-4 rounded font-bold text-base md:text-lg hover:bg-[var(--surface-container-high)] transition-colors whitespace-nowrap"
              href="#contact"
            >
              Contattaci
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="py-24 bg-[var(--surface)]" id="about">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative animate-slideInLeft">
            <div className="grid grid-cols-2 gap-4">
              <img
                className="w-full h-[400px] object-cover rounded shadow-2xl"
                alt="Technical professional working on motherboard"
                src='/mirko.jpg'              
              />
              <img
                className="w-full h-[300px] object-cover rounded shadow-2xl mt-12"
                alt="Modern computer shop interior"
                src="/banco.jpg" 
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[var(--primary-container)] text-[var(--on-primary)] p-8 rounded shadow-2xl">
              <span className="block text-4xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>20+</span>
              <span className="text-sm uppercase tracking-tighter">Anni di Esperienza</span>
            </div>
          </div>
          <div className="animate-slideInRight">
            <h2 className="text-4xl font-bold mb-8 tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Precision Engineered Retail &amp; Service
            </h2>
            <div className="space-y-6 text-[var(--on-surface-variant)] leading-relaxed text-lg">
              <p>
                Essere un <strong>Certified ASUS POINT</strong> significa rispettare gli standard più elevati di qualità e assistenza definiti da ASUS. A Fano, rappresentiamo l'eccellenza nell'assistenza tecnica e nella vendita di soluzioni informatiche.
              </p>
              <p>
                Dal 2002, ci occupiamo di ogni aspetto della vita del tuo computer: dalla consulenza all'acquisto fino alla manutenzione più complessa. La nostra longevità è frutto della passione per l'hardware e del costante aggiornamento sulle ultime tecnologie.
              </p>
            </div>
            <div className="mt-12 flex gap-8">
              <div className="flex flex-col">
                <span className="font-bold text-[var(--primary)]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Certified</span>
                <span className="text-xs text-[var(--on-surface-variant)] uppercase">ASUS Technicians</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[var(--primary)]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Original</span>
                <span className="text-xs text-[var(--on-surface-variant)] uppercase">Spare Parts</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[var(--primary)]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Fast</span>
                <span className="text-xs text-[var(--on-surface-variant)] uppercase">Turnaround Time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const services = [
    { icon: 'computer', title: 'Repair PC & Notebook', description: 'Riparazione hardware e software per ogni tipo di dispositivo.' },
    { icon: 'print', title: 'Printers & Peripherals', description: 'Vendita e assistenza specializzata su stampanti e accessori.' },
    { icon: 'lan', title: 'Network Config', description: 'Progettazione e setup di reti domestiche e aziendali sicure.' },
    { icon: 'system_update_alt', title: 'OS Recovery', description: 'Ripristino sistemi operativi e installazione software pulito.' },
    { icon: 'database', title: 'Data Recovery', description: 'Recupero dati professionale da hard disk e supporti danneggiati.' },
    { icon: 'speed', title: 'Performance', description: 'Ottimizzazione e upgrade per velocizzare il tuo vecchio PC.' },
    { icon: 'shopping_cart', title: 'Sale of PC', description: 'Consulenza esperta per l\'acquisto del tuo nuovo hardware ASUS.' },
    { icon: 'memory', title: 'Netbook Support', description: 'Assistenza dedicata per dispositivi ultra-portatili e tablet.' }
  ]

  return (
    <section className="py-24 bg-[var(--surface-container-low)]" id="services">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            I Nostri Servizi
          </h2>
          <div className="h-1 w-24 bg-[var(--primary-container)] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-[var(--surface-container-lowest)] p-8 rounded group hover:bg-[var(--primary-container)] transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-scaleIn" style={{ animationDelay: `${index * 100}ms` }}>
              <span className="material-symbols-outlined text-4xl text-[var(--primary-container)] group-hover:text-[var(--on-primary)] mb-6 block">
                {service.icon}
              </span>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--on-primary)]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {service.title}
              </h3>
              <p className="text-[var(--on-surface-variant)] text-sm group-hover:text-[var(--on-primary)]/80">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AsusPointSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[var(--primary)] text-[var(--on-primary)]">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-[var(--primary-container)]/20 skew-x-12 translate-x-20"></div>
      <div className="container mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-2/3">
            <h2 className="text-5xl font-bold mb-6 tracking-tighter" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              CERTIFIED ASUS POINT
            </h2>
            <p className="text-xl leading-relaxed text-[var(--on-primary)]/90 max-w-xl">
              Il marchio ASUS POINT è garanzia di professionalità. Come centro autorizzato, abbiamo accesso diretto alle parti di ricambio originali e ai protocolli tecnici ufficiali per garantirti un servizio senza compromessi.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-2xl transform rotate-3">
            <img
              alt="ASUS Official"
              className="h-16 w-auto"
              src="/asus.png"
            />
            <p className="text-[var(--primary)] mt-4 font-bold text-center uppercase tracking-widest text-xs">
              Partner Ufficiale
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [deviceType, setDeviceType] = useState('Notebook ASUS')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('https://formsubmit.co/ajax/edoardogamurrini@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          deviceType,
          message,
          _subject: `Nuova richiesta assistenza Deep Evolution - ${deviceType}`,
          _template: 'table',
        }),
      })

      if (!response.ok) {
        throw new Error('Errore invio')
      }

      setSubmitStatus('success')
      setName('')
      setEmail('')
      setDeviceType('Notebook ASUS')
      setMessage('')
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-24 bg-[var(--surface)]" id="contact">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-bold mb-10 tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Vieni a Trovarci
            </h2>
            <div className="space-y-8 mb-12">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-[var(--surface-container-high)] rounded flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[var(--primary-container)]">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Indirizzo</h4>
                  <p className="text-[var(--on-surface-variant)]">
                    Via Carlo Pisacane, 70<br />
                    61032 Fano (PU), Italy
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-[var(--surface-container-high)] rounded flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[var(--primary-container)]">schedule</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Orari di Apertura</h4>
                  <p className="text-[var(--on-surface-variant)]">
                    Lunedì - Sabato<br />
                    09:00 - 13:00 | 15:30 - 19:30
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-[var(--surface-container-high)] rounded flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[var(--primary-container)]">support_agent</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Assistenza Tecnica</h4>
                  <p className="text-[var(--on-surface-variant)]">
                    Telefono: +39 0721 80 35 19<br />
                    Email: info@deepevolution.com
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-64 bg-[var(--surface-container-high)] rounded overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=Via+Carlo+Pisacane+70+Fano+Italy&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa Deep Evolution Fano"
              />
            </div>
          </div>
          <div className="bg-[var(--surface-container-lowest)] p-10 rounded-xl shadow-xl shadow-blue-900/5">
            <h3 className="text-2xl font-bold mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Inviaci una Richiesta
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[var(--on-surface-variant)] uppercase tracking-wider">
                    Nome
                  </label>
                  <input
                    className="w-full bg-[var(--surface-container-high)] border-none rounded focus:ring-2 focus:ring-[var(--primary-container)] px-4 py-3"
                    name="name"
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Inserisci il tuo nome"
                    required
                    type="text"
                    value={name}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[var(--on-surface-variant)] uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    className="w-full bg-[var(--surface-container-high)] border-none rounded focus:ring-2 focus:ring-[var(--primary-container)] px-4 py-3"
                    name="email"
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="la-tua@email.it"
                    required
                    type="email"
                    value={email}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[var(--on-surface-variant)] uppercase tracking-wider">
                  Tipo di Dispositivo
                </label>
                <select
                  className="w-full bg-[var(--surface-container-high)] border-none rounded focus:ring-2 focus:ring-[var(--primary-container)] px-4 py-3"
                  name="deviceType"
                  onChange={(event) => setDeviceType(event.target.value)}
                  value={deviceType}
                >
                  <option>Notebook ASUS</option>
                  <option>PC Desktop</option>
                  <option>Stampante</option>
                  <option>Altro</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[var(--on-surface-variant)] uppercase tracking-wider">
                  Messaggio / Problematica
                </label>
                <textarea
                  className="w-full bg-[var(--surface-container-high)] border-none rounded focus:ring-2 focus:ring-[var(--primary-container)] px-4 py-3"
                  name="message"
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Descrivi brevemente il problema..."
                  required
                  rows={4}
                  value={message}
                />
              </div>
              {submitStatus === 'success' && (
                <p className="text-sm font-bold text-green-700">
                  Messaggio inviato con successo. Ti risponderemo al piu presto.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-sm font-bold text-red-700">
                  Invio non riuscito. Riprova tra qualche minuto.
                </p>
              )}
              <button
                className="w-full bg-[var(--primary-container)] text-[var(--on-primary)] py-4 rounded font-bold hover:bg-[var(--primary)] transition-colors uppercase tracking-widest text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? 'Invio in corso...' : 'Invia Messaggio'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(COOKIE_PREFERENCES_KEY)
      if (!saved) {
        setIsVisible(true)
        return
      }

      const parsed = JSON.parse(saved) as CookiePreferences
      setAnalytics(Boolean(parsed.analytics))
      setMarketing(Boolean(parsed.marketing))
    } catch {
      setIsVisible(true)
    }
  }, [])

  useEffect(() => {
    const handleOpenPreferences = () => {
      setIsVisible(true)
      setShowPreferences(true)

      try {
        const saved = localStorage.getItem(COOKIE_PREFERENCES_KEY)
        if (!saved) {
          return
        }

        const parsed = JSON.parse(saved) as CookiePreferences
        setAnalytics(Boolean(parsed.analytics))
        setMarketing(Boolean(parsed.marketing))
      } catch {
        // Keep defaults if parse/storage fails.
      }
    }

    window.addEventListener('open-cookie-preferences', handleOpenPreferences)
    return () => {
      window.removeEventListener('open-cookie-preferences', handleOpenPreferences)
    }
  }, [])

  const savePreferences = (next: { analytics: boolean; marketing: boolean }) => {
    const payload: CookiePreferences = {
      necessary: true,
      analytics: next.analytics,
      marketing: next.marketing,
      updatedAt: new Date().toISOString(),
    }

    try {
      localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(payload))
    } catch {
      // If storage is blocked, keep graceful UX and just close the banner.
    }

    window.dispatchEvent(new CustomEvent('cookie-preferences-updated', { detail: payload }))
    setIsVisible(false)
    setShowPreferences(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] p-4 md:p-6">
      <div className="mx-auto max-w-5xl rounded-xl border border-[var(--outline-variant)] bg-white/95 shadow-2xl backdrop-blur">
        <div className="p-4 md:p-6">
          <h3 className="text-lg font-bold text-[var(--on-surface)]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Gestione Cookie
          </h3>
          <p className="mt-2 text-sm md:text-base text-[var(--on-surface-variant)]">
            Usiamo cookie tecnici necessari al funzionamento del sito e, con il tuo consenso,
            cookie statistici e marketing per migliorare i servizi.
          </p>

          {showPreferences && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              <label className="flex items-center justify-between rounded-lg border border-[var(--outline-variant)] p-3">
                <span className="text-sm text-[var(--on-surface)]">Cookie Tecnici (sempre attivi)</span>
                <input checked disabled type="checkbox" />
              </label>
              <label className="flex items-center justify-between rounded-lg border border-[var(--outline-variant)] p-3">
                <span className="text-sm text-[var(--on-surface)]">Cookie Statistici</span>
                <input
                  checked={analytics}
                  onChange={(event) => setAnalytics(event.target.checked)}
                  type="checkbox"
                />
              </label>
              <label className="flex items-center justify-between rounded-lg border border-[var(--outline-variant)] p-3 md:col-span-2">
                <span className="text-sm text-[var(--on-surface)]">Cookie Marketing</span>
                <input
                  checked={marketing}
                  onChange={(event) => setMarketing(event.target.checked)}
                  type="checkbox"
                />
              </label>
            </div>
          )}

          <div className="mt-5 flex flex-wrap gap-2 md:gap-3">
            <button
              className="px-4 py-2 rounded bg-[var(--primary-container)] text-[var(--on-primary)] font-bold text-sm"
              onClick={() => savePreferences({ analytics: true, marketing: true })}
              type="button"
            >
              Accetta tutti
            </button>
            <button
              className="px-4 py-2 rounded border border-[var(--outline-variant)] font-bold text-sm"
              onClick={() => savePreferences({ analytics: false, marketing: false })}
              type="button"
            >
              Rifiuta non essenziali
            </button>
            <button
              className="px-4 py-2 rounded border border-[var(--outline-variant)] font-bold text-sm"
              onClick={() => setShowPreferences((value) => !value)}
              type="button"
            >
              {showPreferences ? 'Chiudi preferenze' : 'Personalizza'}
            </button>
            {showPreferences && (
              <button
                className="px-4 py-2 rounded border border-[var(--outline-variant)] font-bold text-sm"
                onClick={() => savePreferences({ analytics, marketing })}
                type="button"
              >
                Salva preferenze
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function CookieQuickButton() {
  return (
    <button
      aria-label="Apri impostazioni cookie"
      className="fixed bottom-4 right-4 z-[101] h-12 w-12 rounded-full bg-slate-700/75 backdrop-blur-md text-slate-100 border border-slate-500/60 shadow-[0_10px_30px_rgba(15,23,42,0.45)] hover:bg-slate-600/80 hover:scale-105 transition-all text-xl"
      onClick={() => window.dispatchEvent(new CustomEvent('open-cookie-preferences'))}
      type="button"
    >
      🍪
    </button>
  )
}

function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 md:px-10 py-12 md:py-16">
      <div className="mb-8 md:mb-10">
        <a
          className="inline-flex items-center text-sm font-bold text-[var(--primary)] hover:underline"
          href="/"
        >
          ← Torna alla Home
        </a>
      </div>

      <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
        Informativa Privacy
      </h1>
      <p className="text-[var(--on-surface-variant)] leading-relaxed mb-8">
        Ai sensi del Regolamento (UE) 2016/679 (GDPR), questa informativa descrive le modalita con cui
        Deep Evolution tratta i dati personali degli utenti che visitano il sito web e utilizzano i servizi
        di contatto e assistenza.
      </p>

      <div className="space-y-8 text-[var(--on-surface-variant)]">
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-[var(--on-surface)] mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            1. Titolare del Trattamento
          </h2>
          <p>
            Titolare del trattamento e Deep Evolution, con sede in Via Carlo Pisacane, 70 - 61032 Fano (PU), Italia.
            Contatti: info@deepevolution.com - Tel. +39 0721 80 35 19.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-bold text-[var(--on-surface)] mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            2. Tipologie di Dati Trattati
          </h2>
          <p>
            Possiamo trattare dati identificativi e di contatto (nome, email, telefono), dati forniti nel messaggio
            di richiesta assistenza, dati tecnici di navigazione (indirizzo IP, log tecnici, user agent) e preferenze
            cookie espresse dall'utente.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-bold text-[var(--on-surface)] mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            3. Finalita e Base Giuridica
          </h2>
          <p>
            I dati sono trattati per: gestione richieste di contatto e assistenza (esecuzione di misure precontrattuali),
            adempimento di obblighi legali, tutela dei diritti del titolare, miglioramento dei servizi tramite statistiche
            (previo consenso, ove richiesto), e gestione tecnica/sicurezza del sito (legittimo interesse).
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-bold text-[var(--on-surface)] mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            4. Modalita del Trattamento
          </h2>
          <p>
            Il trattamento avviene con strumenti informatici e misure organizzative idonee a garantire riservatezza,
            integrita e disponibilita dei dati, prevenendo accessi non autorizzati, perdita o uso illecito.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-bold text-[var(--on-surface)] mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            5. Conservazione dei Dati
          </h2>
          <p>
            I dati sono conservati per il tempo strettamente necessario alle finalita indicate, e comunque nel rispetto
            dei termini di legge applicabili. Le richieste di contatto vengono conservate per il periodo utile alla gestione
            della pratica e a eventuali obblighi amministrativi o difensivi.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-bold text-[var(--on-surface)] mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            6. Destinatari e Responsabili
          </h2>
          <p>
            I dati possono essere trattati da personale autorizzato e da fornitori tecnici nominati responsabili del trattamento
            (es. hosting, servizi IT, manutenzione). I dati non sono diffusi al pubblico.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-bold text-[var(--on-surface)] mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            7. Trasferimento Extra UE
          </h2>
          <p>
            Qualora si renda necessario trasferire dati verso Paesi terzi, il trasferimento avverra nel rispetto degli artt. 44 e ss.
            GDPR, adottando clausole contrattuali standard o altre garanzie adeguate.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-bold text-[var(--on-surface)] mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            8. Diritti dell'Interessato
          </h2>
          <p>
            L'utente puo esercitare i diritti previsti dagli artt. 15-22 GDPR: accesso, rettifica, cancellazione, limitazione,
            opposizione, portabilita dei dati e revoca del consenso (senza pregiudicare la liceita del trattamento precedente).
            E possibile proporre reclamo al Garante per la protezione dei dati personali.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-bold text-[var(--on-surface)] mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            9. Cookie
          </h2>
          <p>
            Questo sito utilizza cookie tecnici necessari e, previo consenso, cookie statistici e di marketing.
            Le preferenze possono essere modificate in qualsiasi momento tramite il pulsante cookie presente sul sito.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-bold text-[var(--on-surface)] mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            10. Aggiornamenti
          </h2>
          <p>
            La presente informativa puo essere aggiornata nel tempo. Ultimo aggiornamento: 21 aprile 2026.
          </p>
        </section>
      </div>
    </main>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200/10 w-full relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-12 py-16 w-full">
        <div>
          <div className="text-lg font-bold text-slate-900 mb-4">DEEP EVOLUTION</div>
          <p className="text-sm text-slate-500 mb-6">
            Professionalità, Esperienza e Tecnologia. <br /> Il tuo punto di riferimento certificato per l'informatica nelle Marche.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://www.facebook.com/deepevolutionfano" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-700 transition-colors"
              aria-label="Facebook Deep Evolution Fano"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/deepevolution/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-pink-600 transition-colors"
              aria-label="Instagram Deep Evolution"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          {/* <div>
            <h5 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Informazioni</h5>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="hover:text-slate-800 transition-all duration-200 cursor-default">
                Business Hours: Mon-Sat 9:00-19:30
              </li>
              <li className="hover:text-slate-800 transition-all duration-200 cursor-default">
                Location: Fano (PU), Italy
              </li>
            </ul>
          </div> */}
          <div>
            <h5 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Supporto</h5>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <a className="hover:underline decoration-blue-500 underline-offset-4" href="/privacy-policy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <button
                  className="hover:underline decoration-blue-500 underline-offset-4"
                  onClick={() => window.dispatchEvent(new CustomEvent('open-cookie-preferences'))}
                  type="button"
                >
                  Gestisci Cookie
                </button>
              </li>
              {/* <li>
                <a className="hover:underline decoration-blue-500 underline-offset-4" href="#">
                  Technical Support
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
      <div className="px-12 py-6 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center bg-slate-100">
        <span className="text-xs text-slate-500">© 2026 Deep Evolution Fano.</span>
        <span className="text-xs text-slate-400 mt-4 md:mt-0">P. IVA: 02106650415</span>
      </div>
    </footer>
  )
}

export default App
