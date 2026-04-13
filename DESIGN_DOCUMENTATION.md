# Deep Evolution - Documentazione Design UI/UX

## 📋 Panoramica Progetto

**Nome**: Deep Evolution snc  
**Tipo**: Landing Page per Negozio Fisico di Informatica  
**Obiettivo**: Presentare i servizi, l'esperienza e i contatti dell'attività  
**Target**: Clienti privati e aziende che necessitano di assistenza informatica  
**Stile**: Moderno, Tech-Oriented, Dark Theme con Accenti Blu

---

## 🎨 Brand Identity

### Informazioni Azienda
- **Nome Legale**: Deep Evolution snc
- **Anno Fondazione**: 2002 (oltre 20 anni di esperienza)
- **Sede**: Via Carlo Pisacane, 70 - 61032 Fano (PU), Italy
- **P. IVA**: 02106650415
- **Certificazione**: ASUS POINT Certificato
- **Telefono**: +39 0721 80 35 19
- **Email**: info@deepevolution.com

### Posizionamento
- Esperti nel settore informatico dal 2002
- Partner certificato ASUS
- Assistenza specializzata hardware e software
- Servizio per privati e aziende

---

## 🎨 Design System

### Palette Colori

#### Colori Primari
```css
/* Backgrounds */
--bg-primary: linear-gradient(to bottom right, #111827, #1f2937, #000000)
--bg-header: rgba(17, 24, 39, 0.95) con backdrop-blur
--bg-section: rgba(17, 24, 39, 0.5)
--bg-footer: #111827

/* Accenti Blu (Colore Principale) */
--blue-primary: #3b82f6 (blue-500)
--blue-hover: #2563eb (blue-600)
--blue-light: #60a5fa (blue-400)
--cyan-accent: #67e8f9 (cyan-300)

/* Grigi (Struttura) */
--gray-darkest: #000000 (black)
--gray-darker: #1f2937 (gray-800)
--gray-dark: #111827 (gray-900)
--gray-border: #374151 (gray-700)
--gray-text: #9ca3af (gray-400)
--gray-light-text: #d1d5db (gray-300)
--gray-lightest: #f3f4f6 (gray-100)

/* Stati e Interazioni */
--hover-blue: opacity 50% su blue-500
--hover-border: opacity 50% su blue-500
--shadow-blue: rgba(59, 130, 246, 0.2)
```

#### Utilizzo Colori per Sezioni
- **Header**: Sfondo grigio scuro semi-trasparente (gray-900/95) con blur
- **Hero**: Sfondo gradient principale (gray-900 → gray-800 → black)
- **Servizi**: Sfondo gray-900 con opacity 50%
- **Chi Siamo**: Sfondo trasparente (eredita dal container principale)
- **Footer**: Sfondo gray-900 solido

### Tipografia

#### Font Stack
```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
```

#### Gerarchia Tipografica

**Display Heading (Hero Title)**
- Font Size: 80px (desktop) / 48px (mobile)
- Line Height: 1.1
- Font Weight: 700 (bold)
- Letter Spacing: -0.02em
- Gradient: from-blue-400 to-cyan-300
- Effetto: text-transparent con bg-clip-text

**H1 (Header Brand)**
- Font Size: 24px
- Font Weight: 700
- Color: gray-100

**H2 (Section Titles)**
- Font Size: 48px (desktop) / 40px (mobile)
- Font Weight: 700
- Color: gray-100
- Margin Bottom: 16px

**H3 (Service Cards)**
- Font Size: 20px
- Font Weight: 700
- Color: gray-100
- Margin Bottom: 12px

**H4 (Feature Labels)**
- Font Weight: 600
- Color: gray-100

**Body Large**
- Font Size: 24px (desktop) / 20px (mobile)
- Color: gray-400
- Line Height: 1.5

**Body Regular**
- Font Size: 16px
- Color: gray-300/400
- Line Height: 1.625

**Body Small**
- Font Size: 14px
- Color: gray-400/500

### Spacing System

#### Container
- Max Width: 1152px (max-w-6xl)
- Padding Horizontal: 24px (px-6)
- Margin: 0 auto

#### Sezioni
- Padding Vertical: 80px (py-20)
- Padding Top Hero: 128px (pt-32) per compensare header fisso
- Gap tra elementi: 16px, 32px, 48px, 64px

#### Card Spacing
- Padding Card: 32px (p-8)
- Gap Grid: 32px (gap-8)
- Gap Elementi Interni: 12-16px

### Border Radius
- **Small**: 8px (rounded-lg) - Buttons, piccoli elementi
- **Medium**: 12px (rounded-xl) - Cards
- **Large**: 9999px (rounded-full) - Badge, pills

### Shadows & Effects

#### Box Shadows
```css
/* Card Hover */
shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1)
shadow-blue-500/10: con tinta blu

/* Button Primary */
shadow-lg shadow-blue-500/20: 0 10px 15px -3px rgba(59, 130, 246, 0.2)

/* Glow Effect (Chi Siamo Card) */
blur-xl opacity-20: effetto glow dietro la card
```

#### Backdrop Effects
```css
backdrop-blur-sm: applicato all'header per effetto vetro smerigliato
```

### Iconografia

**Libreria**: lucide-react  
**Stile**: Outline (stroke)  
**Dimensioni**:
- Header Logo: 32px (w-8 h-8)
- Service Cards: 48px (w-12 h-12)
- Feature Icons: 24px (w-6 h-6)
- Footer Icons: 20px (w-5 h-5)

**Colore**: blue-500 (#3b82f6) per tutti gli icon

**Icone Utilizzate**:
- Monitor: Logo, Esperienza, Riparazione PC
- Wifi: Configurazione Reti
- HardDrive: Ripristino Sistemi
- Wrench: Recupero Dati, Professionalità
- Zap: Ottimizzazione PC, Velocità
- MapPin: Indirizzo
- Phone: Telefono
- Mail: Email

---

## 📐 Layout e Struttura

### Architettura della Pagina

```
├── Header (Fixed)
│   ├── Logo + Brand Name
│   └── Navigation Menu (Desktop only)
│
├── Hero Section
│   ├── Badge Certificazione
│   ├── Main Heading (Gradient)
│   ├── Subtitle
│   └── CTA Buttons (2)
│
├── Services Section
│   ├── Section Title + Subtitle
│   └── Grid 3 Colonne (5 Cards)
│
├── About Section
│   ├── Left Column (Testo)
│   │   ├── Title
│   │   ├── Description (3 paragrafi)
│   │   └── Certification Badge
│   └── Right Column (Feature Cards)
│       └── 3 Feature Items
│
└── Footer
    ├── Company Info
    ├── Contact Info
    ├── Opening Hours
    └── Copyright
```

### Grid System

**Breakpoints**:
- Mobile: < 768px (1 colonna)
- Tablet: 768px - 1024px (2 colonne)
- Desktop: > 1024px (3 colonne)

**Services Grid**:
- Mobile: `grid-cols-1`
- Tablet: `md:grid-cols-2`
- Desktop: `lg:grid-cols-3`
- Gap: 32px

**About Grid**:
- Mobile: `grid-cols-1` (stack)
- Desktop: `lg:grid-cols-2`
- Gap: 48px

**Footer Grid**:
- Mobile: `grid-cols-1`
- Desktop: `md:grid-cols-3`
- Gap: 32px

---

## 🧩 Componenti Dettagliati

### 1. Header Component

**Comportamento**: Fixed, sempre visibile  
**Z-index**: 50  
**Background**: gray-900/95 con backdrop-blur  
**Border**: Bottom border gray-800  

**Struttura**:
```
Header
├── Container (max-w full, padding 24px vertical)
│   ├── Logo Section
│   │   ├── Monitor Icon (blue-500, 32px)
│   │   └── Text "Deep Evolution" (24px, bold)
│   └── Navigation (hidden su mobile)
│       ├── Link "Home" (#hero)
│       ├── Link "Servizi" (#servizi)
│       ├── Link "Chi Siamo" (#chi-siamo)
│       └── Link "Contatti" (#contatti)
```

**Interazioni**:
- Hover sui link: color → blue-500
- Transizione: transition-colors

---

### 2. Hero Section

**Padding Top**: 128px (per compensare header fisso)  
**Padding Bottom**: 80px  
**Allineamento**: Centro (text-center)  

**Struttura Gerarchica**:
```
Hero
├── Badge Certificazione
│   ├── Background: blue-500/10
│   ├── Border: blue-500/30
│   ├── Border Radius: full (pill)
│   └── Text: "ASUS POINT Certificato" (blue-400, small, semibold)
│
├── Main Heading
│   ├── Text: "Esperti in Informatica dal 2002"
│   ├── Gradient: blue-400 → cyan-300
│   ├── Font Size: 80px (desktop) / 48px (mobile)
│   ├── Font Weight: 700
│   └── Effetto: text-transparent con gradient background
│
├── Subtitle
│   ├── Text: "Riparazione, vendita e assistenza..."
│   ├── Font Size: 24px (desktop) / 20px (mobile)
│   ├── Color: gray-400
│   └── Max Width: 768px
│
└── CTA Buttons (Flex Row, gap 16px)
    ├── Primary Button "Contattaci Ora"
    │   ├── Background: blue-600
    │   ├── Hover: blue-700 + scale-105
    │   ├── Shadow: lg con tinta blue-500/20
    │   └── Link: #contatti
    └── Secondary Button "I Nostri Servizi"
        ├── Background: gray-800
        ├── Border: gray-700
        ├── Hover: gray-700
        └── Link: #servizi
```

**Dimensioni Button**:
- Padding: 32px horizontal, 16px vertical
- Border Radius: 8px
- Font Weight: 600

---

### 3. Services Section

**Background**: gray-900/50 (semi-trasparente)  
**Padding**: 80px vertical, 24px horizontal  

**Header della Sezione**:
```
Section Header (center-aligned)
├── Title: "I Nostri Servizi" (48px, bold, mb-16px)
└── Subtitle: "Soluzioni complete..." (gray-400, 18px)
```

**Service Card** (5 totali):
```
Card
├── Container
│   ├── Padding: 32px
│   ├── Background: gray-800/50
│   ├── Border: gray-700
│   ├── Border Radius: 12px
│   ├── Hover States:
│   │   ├── Border: blue-500/50
│   │   ├── Background: gray-800 (opaco)
│   │   └── Shadow: xl con blue-500/10
│   └── Transition: all 300ms
│
├── Icon
│   ├── Size: 48px
│   ├── Color: blue-500
│   ├── Margin Bottom: 16px
│   └── Hover: scale-110
│
├── Title (20px, bold, mb-12px)
└── Description (gray-400, leading-relaxed)
```

**Lista Servizi**:
1. **Riparazione e Vendita PC** (Icon: Monitor)
2. **Configurazione Reti** (Icon: Wifi)
3. **Ripristino Sistemi** (Icon: HardDrive)
4. **Recupero Dati** (Icon: Wrench)
5. **Ottimizzazione PC** (Icon: Zap)

---

### 4. About Section

**Layout**: 2 colonne (desktop), stack (mobile)  
**Gap**: 48px  
**Padding**: 80px vertical  

**Colonna Sinistra (Contenuto)**:
```
Content Column
├── Title: "Chi Siamo" (48px, bold, mb-24px)
│
├── Text Content (space-y-16px, gray-300)
│   ├── Paragraph 1: Presentazione + anno fondazione (2002 highlighted)
│   ├── Paragraph 2: Esperienza e servizi
│   └── Paragraph 3: Certificazione ASUS
│
└── Certification Badge
    ├── Gradient Background: blue-500/10 → cyan-500/10
    ├── Border: blue-500/30
    ├── Padding: 24px
    ├── Border Radius: 8px
    ├── Label: "Negozio Certificato" (gray-400, small)
    └── Badge Text: "ASUS POINT" (blue-400, 24px, bold)
```

**Colonna Destra (Features)**:
```
Feature Card Container (con glow effect)
├── Glow Effect (absolute, blur-xl, opacity-20)
│   └── Gradient: blue-600 → cyan-600
│
└── Card (relative)
    ├── Background: gray-800
    ├── Border: gray-700
    ├── Border Radius: 8px
    ├── Padding: 32px
    │
    └── Feature Items (space-y-24px) × 3
        ├── Item 1: Esperienza (Monitor icon)
        ├── Item 2: Professionalità (Wrench icon)
        └── Item 3: Velocità (Zap icon)
        
        Structure per Item:
        ├── Icon Container
        │   ├── Size: 48px
        │   ├── Background: blue-500/20
        │   ├── Border Radius: 8px
        │   └── Icon: 24px, blue-400
        └── Text
            ├── Title (16px, semibold)
            └── Description (gray-400, 14px)
```

---

### 5. Footer Component

**Background**: gray-900 solido  
**Border Top**: gray-800  
**Padding**: 48px vertical  

**Struttura Grid** (3 colonne desktop):
```
Footer
├── Column 1: Company Info
│   ├── Logo + Brand Name (flex, 24px icon + text)
│   ├── Tagline: "Il tuo partner..." (gray-400)
│   └── P.IVA: 02106650415 (gray-500, small)
│
├── Column 2: Contact Info
│   ├── Title: "Contatti" (16px, semibold)
│   └── Contact Items (space-y-12px)
│       ├── Address (MapPin icon)
│       │   └── Via Carlo Pisacane, 70 / 61032 Fano (PU)
│       ├── Phone (Phone icon)
│       │   └── +39 0721 80 35 19 (hover: blue-400)
│       └── Email (Mail icon)
│           └── info@deepevolution.com (hover: blue-400)
│
└── Column 3: Opening Hours
    ├── Title: "Orari di Apertura"
    └── Schedule (space-y-8px, gray-400)
        ├── "Lun - Ven: 9:00 - 19:00"
        ├── "Sabato: 9:00 - 13:00"
        └── "Domenica: Chiuso"
```

**Copyright Bar**:
```
Copyright
├── Border Top: gray-800
├── Padding Top: 32px
├── Alignment: Center
├── Color: gray-500
└── Text: "© 2026 Deep Evolution snc. Tutti i diritti riservati."
```

---

## 🎭 Interazioni e Animazioni

### Transizioni Standard
```css
transition-colors: 150ms ease
transition-all: 300ms ease
```

### Effetti Hover

**Navigation Links**:
- State: Color → blue-500
- Transition: colors

**Service Cards**:
- Border: gray-700 → blue-500/50
- Background: gray-800/50 → gray-800
- Shadow: none → shadow-xl + shadow-blue-500/10
- Icon: scale(1) → scale(1.1)
- Duration: 300ms

**Primary Button (Contattaci Ora)**:
- Background: blue-600 → blue-700
- Transform: scale(1) → scale(1.05)
- Shadow: persistente (shadow-lg shadow-blue-500/20)

**Secondary Button (I Nostri Servizi)**:
- Background: gray-800 → gray-700
- Transition: all

**Footer Links (Phone/Email)**:
- Color: gray-400 → blue-400

### Smooth Scrolling
- Comportamento: smooth scroll verso anchor (#hero, #servizi, etc.)
- Implementazione: anchor links con `href="#section-id"`

---

## 📱 Responsive Design

### Breakpoint Strategy

**Mobile First Approach**:
- Base: 320px - 767px (1 colonna, stack)
- Tablet: 768px - 1023px (md:, 2 colonne)
- Desktop: 1024px+ (lg:, 3 colonne)

### Adattamenti per Sezione

**Header**:
- Mobile: Logo visibile, Navigation nascosta (`hidden md:flex`)
- Desktop: Logo + Navigation completa

**Hero**:
- Mobile:
  - Heading: 48px (`text-5xl`)
  - Subtitle: 20px (`text-xl`)
  - Buttons: Stack verticale (`flex-col`)
- Desktop:
  - Heading: 80px (`md:text-7xl`)
  - Subtitle: 24px (`md:text-2xl`)
  - Buttons: Row orizzontale (`sm:flex-row`)

**Services Grid**:
- Mobile: 1 colonna (`grid-cols-1`)
- Tablet: 2 colonne (`md:grid-cols-2`)
- Desktop: 3 colonne (`lg:grid-cols-3`)

**About Section**:
- Mobile: Stack verticale, content poi card (`grid-cols-1`)
- Desktop: 2 colonne affiancate (`lg:grid-cols-2`)

**Footer**:
- Mobile: 1 colonna, informazioni stacked
- Desktop: 3 colonne affiancate (`md:grid-cols-3`)

### Touch Targets
- Minimo 44px × 44px per tutti gli elementi cliccabili
- Buttons: 16px padding verticale, 32px orizzontale
- Links: padding adeguato per area touch

---

## 📝 Contenuti

### Messaggi Chiave

**Value Proposition (Hero)**:
- "Esperti in Informatica dal 2002"
- Focus su esperienza e specializzazione
- Certificazione ASUS come differenziatore

**Servizi Offerti**:
1. Riparazione e vendita PC, Notebook, Stampanti
2. Configurazione Reti (Router, LAN, Wi-Fi)
3. Ripristino Sistemi Operativi
4. Recupero Dati
5. Ottimizzazione Prestazioni

**About Story**:
- Punto di riferimento dal 2002 (20+ anni)
- Competenza ampia (hardware, software, reti)
- Partner certificato ASUS
- Servizio per privati e aziende

### Tone of Voice
- **Professionale**: Competenza e affidabilità
- **Accessibile**: Linguaggio chiaro, non troppo tecnico
- **Rassicurante**: Esperienza e certificazioni
- **Locale**: Riferimenti a Fano, servizio di prossimità

### Call-to-Action
- Primaria: "Contattaci Ora" (scroll to footer contacts)
- Secondaria: "I Nostri Servizi" (scroll to services)
- Tertiarzia: Links telefono/email nel footer

---

## 🛠 Stack Tecnologico

### Frontend
- **Framework**: React 19.2.4
- **Linguaggio**: TypeScript 6.0.2
- **Build Tool**: Vite 8.0.4
- **Styling**: Tailwind CSS 4.2.2
- **Icons**: lucide-react (outline style)

### Configurazione

**Vite**:
- HMR (Hot Module Replacement) abilitato
- Development server: localhost:5174

**Tailwind CSS v4**:
- Import method: `@import "tailwindcss"`
- PostCSS plugin: `@tailwindcss/postcss`
- JIT mode (Just-In-Time) per classi on-demand

**TypeScript**:
- Strict mode abilitato
- JSX: React

### File Structure
```
deepevolution/
├── public/
├── src/
│   ├── App.tsx (componente principale + sotto-componenti)
│   ├── main.tsx (entry point)
│   ├── index.css (Tailwind imports)
│   └── assets/
├── index.html
├── package.json
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
└── DESIGN_DOCUMENTATION.md (questo file)
```

---

## 🎯 Component Architecture

### Struttura Componenti in App.tsx

```typescript
App (Container principale)
├── Header (Navigazione fissa)
├── Hero (Sezione hero con CTA)
├── Services (Griglia servizi)
├── About (Chi Siamo, 2 colonne)
└── Footer (Contatti e info)
```

**Tutti i componenti sono funzionali** e definiti nello stesso file per semplicità.

### Props e State
- Nessun prop passing tra componenti
- Nessun state management (landing page statica)
- Dati servizi definiti come array costante dentro il componente

---

## 🔍 SEO e Accessibilità

### Struttura Semantica
- Header: `<header>` con navigation
- Sezioni: `<section>` con ID per anchor navigation
- Footer: `<footer>` con info strutturate
- Headings: Gerarchia H1 → H2 → H3 → H4

### Anchor Navigation
- `#hero`: Sezione Hero
- `#servizi`: Sezione Servizi
- `#chi-siamo`: Sezione About
- `#contatti`: Footer

### Link Esterni
- Telefono: `tel:+390721803519`
- Email: `mailto:info@deepevolution.com`

### Accessibilità Icone
- Tutte le icone sono decorative (lucide-react)
- Testo descrittivo sempre presente accanto alle icone
- Contrasto colori: WCAG AA compliant (grigio chiaro su sfondo scuro, blu su scuro)

---

## 📊 Performance Considerations

### Ottimizzazioni
- Gradients CSS nativi (no immagini)
- Icone SVG inline via lucide-react (leggere)
- Tailwind JIT: solo classi utilizzate nel bundle finale
- Nessuna immagine pesante
- Font di sistema (no web fonts esterni)

### Loading Strategy
- Component-based: caricamento progressivo dei componenti React
- Vite HMR: aggiornamenti istantanei in development
- Code splitting automatico con Vite

---

## 🎨 Design Patterns Utilizzati

### Pattern Visivi
- **Dark Theme**: Sfondo scuro professionale
- **Glass Morphism**: Header con backdrop-blur
- **Gradient Accents**: Titoli con gradient blu-ciano
- **Glow Effects**: Ombre blu luminose su hover
- **Card-Based Layout**: Contenuti organizzati in card

### Pattern UX
- **Fixed Navigation**: Header sempre accessibile
- **Anchor Scrolling**: Navigazione fluida tra sezioni
- **Progressive Disclosure**: Informazioni organizzate per priorità
- **F-Pattern Layout**: Contenuto organizzato per scansione naturale
- **Call-to-Action Prominenti**: 2 CTA nella Hero, ripetuti nelle sezioni

---

## 📐 Specifiche Dimensionali

### Container
- Max Width: 1152px (Tailwind `max-w-6xl`)
- Horizontal Padding: 24px su tutti i dispositivi

### Spacing Verticale
- Header Height: ~72px (24px padding × 2 + contenuto)
- Hero Padding Top: 128px (compensa header + extra)
- Section Padding: 80px top & bottom
- Footer Padding: 48px top & bottom

### Grid Gaps
- Services Grid: 32px
- About Grid: 48px
- Footer Grid: 32px

### Card Dimensions
- Service Card Padding: 32px
- Feature Icon Container: 48px × 48px
- Footer Column Width: auto (1fr each in 3-col grid)

---

## 🎨 Design Tokens Summary

```json
{
  "colors": {
    "primary": "#3b82f6",
    "primaryHover": "#2563eb",
    "accent": "#60a5fa",
    "accentLight": "#67e8f9",
    "background": {
      "primary": "linear-gradient(120deg, #111827, #1f2937, #000000)",
      "section": "rgba(17, 24, 39, 0.5)",
      "card": "rgba(31, 41, 55, 0.5)",
      "cardHover": "#1f2937"
    },
    "text": {
      "primary": "#f3f4f6",
      "secondary": "#d1d5db",
      "tertiary": "#9ca3af",
      "muted": "#6b7280"
    },
    "border": {
      "default": "#374151",
      "hover": "rgba(59, 130, 246, 0.5)"
    }
  },
  "spacing": {
    "section": "80px",
    "container": "24px",
    "card": "32px",
    "element": "16px"
  },
  "borderRadius": {
    "small": "8px",
    "medium": "12px",
    "large": "9999px"
  },
  "typography": {
    "fontFamily": "system-ui, sans-serif",
    "sizes": {
      "hero": "80px / 48px (desktop/mobile)",
      "h2": "48px / 40px",
      "h3": "20px",
      "body-large": "24px / 20px",
      "body": "16px",
      "small": "14px"
    },
    "weights": {
      "regular": 400,
      "semibold": 600,
      "bold": 700
    }
  },
  "shadows": {
    "card": "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
    "button": "0 10px 15px -3px rgba(59, 130, 246, 0.2)",
    "glow": "blur-xl opacity-20"
  },
  "transitions": {
    "default": "150ms ease",
    "all": "300ms ease"
  }
}
```

---

## 🚀 Quick Implementation Guide

### Avvio Progetto
```bash
npm install
npm run dev
```

### Modifica Colori
Cercare e sostituire in App.tsx:
- `blue-500` / `blue-600` → Colore primario
- `gray-800` / `gray-900` → Backgrounds
- `gray-400` → Text color secondario

### Modifica Contenuti
Tutti i testi sono hardcoded in App.tsx:
- Hero: linee 43-58
- Services: linee 69-90 (array)
- About: linee 127-143
- Footer: linee 199-231

### Aggiunta Servizi
Modificare l'array `services` (linee 69-90):
```typescript
{
  icon: IconName, // da lucide-react
  title: 'Titolo Servizio',
  description: 'Descrizione del servizio'
}
```

---

## 📞 Informazioni di Contatto

**Per aggiornamenti contenuti contattare**:
- Email: info@deepevolution.com
- Tel: +39 0721 80 35 19
- Indirizzo: Via Carlo Pisacane, 70 - 61032 Fano (PU)

---

**Documentazione creata**: Aprile 2026  
**Versione**: 1.0  
**Formato**: Markdown per tool Stitch e design collaboration

