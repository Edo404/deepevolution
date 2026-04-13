import { useState, useEffect } from 'react'

function App() {
  return (
    <div className="bg-[var(--surface)] text-[var(--on-surface)]">
      <TopNav />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <AsusPointSection />
        <ContactSection />
      </main>
      <Footer />
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
      <a href="#contact" className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-container)] text-[var(--on-primary)] px-6 py-2 rounded-lg font-bold hover:scale-105 transition-all duration-200">
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
          <span className="text-[var(--primary-container)] font-bold tracking-widest uppercase text-sm mb-4 block" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Since 2002
          </span>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-[var(--on-surface)] mb-6 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            <span className="text-[var(--primary-container)]">Deep Evolution</span> Esperti di Informatica a <span className="text-[var(--primary-container)]">Fano</span> dal 2002
          </h1>
          <p className="text-[var(--on-surface-variant)] text-xl mb-10 leading-relaxed font-light">
            Precisione, competenza e oltre vent'anni di esperienza al servizio del tuo hardware. Siamo il punto di riferimento certificato per la tua tecnologia.
          </p>
          <div className="flex gap-4">
            <a
              className="bg-[var(--primary-container)] text-[var(--on-primary)] px-8 py-4 rounded font-bold text-lg hover:scale-105 transition-transform"
              href="#services"
            >
              Scopri i Servizi
            </a>
            <a
              className="border border-[var(--outline-variant)]/30 px-8 py-4 rounded font-bold text-lg hover:bg-[var(--surface-container-high)] transition-colors"
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
          <div className="relative">
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
          <div>
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
            <div key={index} className="bg-[var(--surface-container-lowest)] p-8 rounded group hover:bg-[var(--primary-container)] transition-all duration-300">
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
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[var(--on-surface-variant)] uppercase tracking-wider">
                    Nome
                  </label>
                  <input
                    className="w-full bg-[var(--surface-container-high)] border-none rounded focus:ring-2 focus:ring-[var(--primary-container)] px-4 py-3"
                    placeholder="Inserisci il tuo nome"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[var(--on-surface-variant)] uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    className="w-full bg-[var(--surface-container-high)] border-none rounded focus:ring-2 focus:ring-[var(--primary-container)] px-4 py-3"
                    placeholder="la-tua@email.it"
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[var(--on-surface-variant)] uppercase tracking-wider">
                  Tipo di Dispositivo
                </label>
                <select className="w-full bg-[var(--surface-container-high)] border-none rounded focus:ring-2 focus:ring-[var(--primary-container)] px-4 py-3">
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
                  placeholder="Descrivi brevemente il problema..."
                  rows={4}
                />
              </div>
              <button
                className="w-full bg-[var(--primary-container)] text-[var(--on-primary)] py-4 rounded font-bold hover:bg-[var(--primary)] transition-colors uppercase tracking-widest text-sm"
                type="submit"
              >
                Invia Messaggio
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200/10 w-full">
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
                <a className="hover:underline decoration-blue-500 underline-offset-4" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:underline decoration-blue-500 underline-offset-4" href="#">
                  Technical Support
                </a>
              </li>
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
