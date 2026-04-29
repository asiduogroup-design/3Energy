import { useEffect, useState } from "react";
import { FaArrowUp, FaLinkedin } from "react-icons/fa";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Progetti", href: "/progetti" },
  { label: "Chi Siamo", href: "/chi-siamo" },
  { label: "Servizi", href: "/servizi" },
  { label: "Contatti", href: "/contatti" },
];

const heroSlides = [
  { src: "/images/hero/hero1.png", caption: "Centro Commerciale Curno" },
  { src: "/images/hero/hero2.png", caption: "Fondazione Cassa di Risparmio di Cuneo" },
  { src: "/images/hero/hero3.png", caption: "Accademia Guardia di Finanza di Bergamo" },
  { src: "/images/hero/hero4.png", caption: "Palazzo Vecchio Firenze" },
  { src: "/images/hero/hero5.png", caption: "Vittoria Assicurazioni S.p.A." },
];

const projects = [
  {
    title: "S.I.A.S - Società Incremento Automobilismo e Sport S.p.A.",
    image: "/images/projects/project-1.jpg",
    link: "https://www.3energy.it/progetti/s-i-a-s-societa-incremento-automobilismo-e-sport-s-p-a/",
    large: false,
  },
  {
    title: "FAI - Fondo per l'Ambiente Italiano",
    image: "/images/projects/project-2.jpeg",
    link: "https://www.3energy.it/progetti/fai-fondo-per-lambiente-italiano/",
    large: false,
  },
  {
    title: "Vittoria Assicurazioni S.p.A.",
    image: "/images/projects/project-3.jpeg",
    link: "https://www.3energy.it/progetti/vittoria-assicurazioni-s-p-a/",
    large: false,
  },
  {
    title: "Kos Care S.r.l.",
    image: "/images/projects/project-4.png",
    link: "https://www.3energy.it/progetti/kos-care-s-r-l/",
    large: true,
  },
  {
    title: "Fondazione Collegio delle Università Milanesi",
    image: "/images/projects/project-5.jpeg",
    link: "https://www.3energy.it/progetti/fondazione-collegio-delle-universita-milanesi/",
    large: true,
  },
];

const services = [
  {
    title: "ENGINEERING",
    image: "/images/services/engineering.png",
  },
  {
    title: "ENERGY MANAGEMENT",
    image: "/images/services/energy-management.png",
  },
  {
    title: "ASSET MANAGEMENT",
    image: "/images/services/asset-management.png",
  },
  {
    title: "GREEN PRODUCTION",
    image: "/images/services/green-production.png",
  },
];

const chiSiamoMetrics = [
  { image: "/images/chi-siamo/esperienza.png", alt: "Esperienza 3Energy" },
  { image: "/images/chi-siamo/progetti.png", alt: "Progetti 3Energy" },
  { image: "/images/chi-siamo/sedi.png", alt: "Sedi 3Energy" },
];

const serviziSections = [
  {
    id: "engineering",
    title: "Engineering",
    icon: "/images/services/engineering.png",
    text:
      "3Energy srl si propone come interlocutore di riferimento fin dalle prime fasi di sviluppo del progetto, tramite analisi di fattibilità tecnico-economiche finalizzate all'individuazione di soluzioni energeticamente efficienti, offrendo un servizio interdisciplinare ed integrato di progettazione, direzione lavori e verifiche/collaudi prestazionali. Il Team possiede un'esperienza consolidata nella prevenzione incendi, nel coordinamento della sicurezza e nella consulenza in ambito acustico attraverso professionisti che vantano competenze specialistiche in ciascun settore.",
    items: [
      "Impianti HVAC",
      "Impianti idrico-sanitari",
      "Impianti antincendio",
      "Fluidi tecnici",
      "Gas medicali",
      "Impianti di processo",
      "Impianti a fonti rinnovabili",
      "Impianti elettrici civili e industriali",
      "Illuminotecnica",
      "Rete dati e cablaggio strutturato",
      "Impianti speciali",
      "Impianti di sicurezza",
      "Building automation",
    ],
  },
  {
    id: "energy-management",
    title: "Energy Management",
    icon: "/images/services/energy-management.png",
    text:
      "I nostri Esperti in Gestione dell'Energia offrono alle aziende e agli enti pubblici un servizio completo focalizzato al risparmio energetico ed economico, indirizzando il cliente nella definizione dei propri obiettivi di risparmio attraverso soluzioni che permettono di rendere più efficienti i processi produttivi e di ridurre i costi di approvvigionamento energetico.",
    items: [
      "Diagnosi energetiche e piani di monitoraggio",
      "Implementazione di Sistemi di Gestione dell'Energia ISO 50001",
      "Gestione del proprio portafoglio energetico: analisi contratti in essere, negoziazione e monitoraggio dei mercati energetici",
      "Gestione degli incentivi in efficienza energetica: Conto Termico 2.0, CAR",
      "Cogenerazione ad Alto Rendimento, TEE - Titoli di Efficienza Energetica e detrazioni fiscali",
    ],
  },
  {
    id: "asset-management",
    title: "Asset Management",
    icon: "/images/services/asset-management.png",
    text:
      "Il Team è in grado di assistere l'investitore nella gestione tecnica ed amministrativa degli impianti di produzione di energia da fonte rinnovabile e di cogenerazione, con l'obiettivo di aumentare la redditività ed il valore dell'investimento nel rispetto delle normative vigenti.",
    items: [
      "Consulenza operativa: gestione dei rapporti e degli adempimenti con tutti gli enti regolatori e di controllo (GSE, Ufficio delle Dogane, ...)",
      "Monitoraggio e reportistica: verifica ed analisi delle performance degli impianti di autoproduzione e controllo del rispetto delle garanzie contrattuali",
      "Advisory su M&A asset: analisi e consulenza per investitori, fondi e finanziatori su operazioni di acquisizione o cessione di asset energetici",
    ],
  },
  {
    id: "green-production",
    title: "Green Production",
    icon: "/images/services/green-production.png",
    text:
      "3Energy è una società specializzata nell'analisi, sviluppo e progettazione di grandi impianti a fonte rinnovabile utility scale. Un team altamente qualificato si occupa di tutta la fase di sviluppo, dalla ricerca della location più idonea all'installazione fino all'ottenimento di tutte le autorizzazioni necessarie per la costruzione e l'esercizio dell'impianto. Le procedure adottate perseguono gli obiettivi della sostenibilità finanziaria, ambientale e sociale del progetto realizzato.",
    items: [
      "Scouting e selezione di siti idonei, in accordo ai parametri richiesti dagli investitori",
      "Business plan e studi di fattibilità per la stima della redditività e della bancabilità dell'investimento",
      "Permitting e gestione del processo autorizzativo per arrivare al ready to build",
      "Owner engineering",
      "Commissioning tecnico/amministrativi e prestazionali",
    ],
  },
];

const contattiOffices = [
  {
    title: "Head Office",
    address: ["Via Edmondo de Amicis 67", "20092 Cinisello Balsamo (MI)"],
    phone: "+39 02 45395996",
    email: "info@3energy.it",
    map:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6408.641597936455!2d9.222939473287823!3d45.563924334949235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786b8d7503436db%3A0x68aef7da635199bb!2sVia%20E.%20de%20Amicis%2C%2067%2C%2020092%20Cinisello%20Balsamo%20MI!5e1!3m2!1sit!2sit!4v1693338472614!5m2!1sit!2sit",
  },
  {
    title: "Branch Office",
    address: ["Piazzale Manlio Germozzi 30", "62014 Corridonia (MC)"],
    phone: "+39 0733 1680239",
    email: "info@3energy.it",
    map:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.223004078277!2d13.485224011983693!3d43.2578618777896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132df4f8768985b9%3A0x90f80480b7bf8737!2sPiazzale%20Manlio%20Germozzi%2C%2030%2C%2062014%20Corridonia%20MC!5e1!3m2!1sit!2sit!4v1693338568833!5m2!1sit!2sit",
  },
];

function normalizePath(pathname) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="hero-section" aria-label="Hero slider">
        <img
          src={heroSlides[currentSlide].src}
          alt={heroSlides[currentSlide].caption}
          className="hero-photo"
        />
        <p className="hero-caption">{heroSlides[currentSlide].caption}</p>
        <div className="hero-indicators" aria-hidden="true">
          {heroSlides.map((slide, index) => (
            <span key={slide.src} className={index === currentSlide ? "dot active" : "dot"} />
          ))}
        </div>
      </section>

      <section className="welcome-section">
        <div className="welcome-left">
          <img
            src="/images/3Energysrl-1024x200.png"
            alt="3Energy engineering and consulting"
            className="welcome-logo"
          />
        </div>

        <div className="welcome-right">
          <p>
            3Energy srl opera a livello nazionale in ambito civile, industriale e terziario con
            particolare attenzione all&apos;individuazione di soluzioni tecnologiche finalizzate al
            risparmio energetico.
          </p>
          <p>Il core business è strutturato in quattro distinte aree:</p>
          <ul>
            <li>Engineering</li>
            <li>Energy Management</li>
            <li>Asset Management</li>
            <li>Green Production</li>
          </ul>
          <p>I fattori di successo della società sono:</p>
          <ul>
            <li>professionalità e competitività</li>
            <li>focus sull&apos;innovazione tecnologica nel settore energetico</li>
            <li>disponibilità e attenzione alle esigenze del cliente</li>
          </ul>
          <a href="/chi-siamo" className="primary-btn">
            Leggi altro...
          </a>
        </div>
      </section>

      <section className="projects-section" id="progetti">
        <hr />
        <div className="projects-grid">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className={project.large ? "project-card large" : "project-card"}
              aria-label={project.title}
            >
              <img src={project.image} alt={project.title} />
              <span className="project-overlay">{project.title}</span>
            </a>
          ))}
        </div>
        <a href="/progetti" className="primary-btn project-btn">
          Guarda i nostri progetti -&gt;
        </a>
        <hr />
      </section>

      <section className="services-section" id="servizi">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <img src={service.image} alt={service.title} className="service-image" />
            <h2>{service.title}</h2>
          </article>
        ))}
      </section>
    </>
  );
}

function ProgettiPage() {
  return (
    <section className="progetti-page" aria-label="Progetti">
      <div className="progetti-title-wrap">
        <h1>Progetti</h1>
      </div>

      <div className="progetti-grid">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="progetti-card"
            aria-label={project.title}
          >
            <img src={project.image} alt={project.title} />
            <span className="progetti-card-title">{project.title}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function ServiziPage() {
  return (
    <section className="servizi-page" aria-label="Servizi">
      {serviziSections.map((section) => (
        <article className="servizi-block" id={section.id} key={section.id}>
          <div className="servizi-heading">
            <h3>{section.title}</h3>
            <img src={section.icon} alt={section.title} className="servizi-heading-icon" />
          </div>
          <hr />
          <div className="servizi-content">
            <div className="servizi-copy">
              <p>{section.text}</p>
            </div>
            <div className="servizi-list">
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

function ChiSiamoPage() {
  return (
    <section className="chi-page" aria-label="Chi Siamo">
      <div className="chi-story">
        <h2>La nostra storia</h2>
        <p>
          Nel 2008 nasce Studio 3Energy Associati, dal desiderio di due giovani ingegneri di unire
          le proprie conoscenze ed esperienze per dare vita ad una nuova realtà nel campo della
          consulenza e della progettazione energeticamente sostenibile: due profili diversi ma
          complementari, in grado di generare progetti con creatività e professionalità grazie alla
          comune esperienza formativa e alle diverse esperienze personali e lavorative.
        </p>
        <p>
          L&apos;evoluzione nella società di ingegneria 3Energy srl, che si è ampliata nel corso
          degli anni con l&apos;ingresso di ulteriori professionisti di assoluto rilievo, con la
          diversificazione in quattro distinte aree di lavoro - Engineering, Energy Management,
          Asset Management, Green Production - è la naturale evoluzione negli oltre 15 anni di
          attività: linee di lavoro specializzate, che possono agire singolarmente o in piena
          sinergia con l&apos;obiettivo di fornire soluzioni integrate che rispettino i principi
          dell&apos;efficienza energetica e della sostenibilità ambientale.
        </p>
      </div>

      <div className="chi-metrics">
        {chiSiamoMetrics.map((metric) => (
          <article className="chi-metric-card" key={metric.image}>
            <img src={metric.image} alt={metric.alt} />
          </article>
        ))}
      </div>

      <hr className="chi-divider" />

      <div className="chi-expertise">
        <div className="chi-expertise-copy">
          <h2>Expertise</h2>
          <p>
            Un team di professionisti che opera nel settore dell&apos;impiantistica ad alta
            efficienza energetica e delle fonti rinnovabili e che vanta importanti esperienze
            professionali e prestigiose collaborazioni con le più importanti società italiane del
            settore.
          </p>
          <p>
            Teamwork e competenza tecnica sono il valore aggiunto che qualifica 3Energy srl come
            unico interlocutore per investitori, clienti privati, enti pubblici ed EPC contractors.
          </p>
        </div>

        <div className="chi-expertise-image">
          <img src="/images/chi-siamo/industria.png" alt="3Energy expertise" />
        </div>
      </div>
    </section>
  );
}

function ContattiPage() {
  return (
    <section className="contatti-page" aria-label="Contatti">
      {contattiOffices.map((office, index) => (
        <div key={office.title}>
          <article className="contatti-row">
            <div className="contatti-office">
              <h3>{office.title}</h3>
              {office.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p>{office.phone}</p>
              <p>
                <a href={`mailto:${office.email}`}>{office.email}</a>
              </p>
            </div>
            <div className="contatti-map">
              <iframe
                src={office.map}
                title={`${office.title} map`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </article>
          {index < contattiOffices.length - 1 ? <hr className="contatti-separator" /> : null}
        </div>
      ))}

      <hr className="contatti-separator" />

      <section className="contatti-form-section" aria-label="Contact form">
        <form className="contatti-form" onSubmit={(event) => event.preventDefault()}>
          <div className="contatti-form-grid">
            <div className="contatti-field">
              <label htmlFor="contatti-name">I am</label>
              <input id="contatti-name" name="name" type="text" />
            </div>
            <div className="contatti-field">
              <label htmlFor="contatti-email">My email is</label>
              <input id="contatti-email" name="email" type="email" />
            </div>
            <div className="contatti-field contatti-field-full">
              <label htmlFor="contatti-message">Message</label>
              <textarea id="contatti-message" name="message" rows={6} />
            </div>
          </div>

          <label className="contatti-privacy">
            <input type="checkbox" name="privacy_policy_check" />
            <span>
              I&apos;ve read and accept the{" "}
              <a href="https://www.3energy.it/privacy-e-cookie-policy/" target="_blank" rel="noreferrer">
                terms &amp; conditions
              </a>{" "}
              *
            </span>
          </label>

          <button type="submit" className="primary-btn contatti-submit-btn">
            Send Message
          </button>
        </form>
      </section>
    </section>
  );
}

function App() {
  const currentPath = normalizePath(window.location.pathname);
  const isChiSiamoPage = currentPath === "/chi-siamo";
  const isProgettiPage = currentPath === "/progetti";
  const isServiziPage = currentPath === "/servizi";
  const isContattiPage = currentPath === "/contatti";

  let activeLabel = "Home";
  if (isChiSiamoPage) {
    activeLabel = "Chi Siamo";
  } else if (isProgettiPage) {
    activeLabel = "Progetti";
  } else if (isServiziPage) {
    activeLabel = "Servizi";
  } else if (isContattiPage) {
    activeLabel = "Contatti";
  }

  let page = <HomePage />;
  if (isChiSiamoPage) {
    page = <ChiSiamoPage />;
  } else if (isProgettiPage) {
    page = <ProgettiPage />;
  } else if (isServiziPage) {
    page = <ServiziPage />;
  } else if (isContattiPage) {
    page = <ContattiPage />;
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="site-root" id="top">
      <header className="site-header">
        <div className="header-inner">
          <a href="/" className="logo-link" aria-label="3Energy Home">
            <img src="/images/logo.jpeg" alt="3Energy" className="header-logo" />
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={item.label === activeLabel ? "nav-link active" : "nav-link"}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="https://it.linkedin.com/company/3energy-s-r-l"
            target="_blank"
            rel="noreferrer"
            className="header-linkedin"
            aria-label="3Energy LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </header>

      <main>{page}</main>

      <footer className="site-footer" id="contatti">
        <button type="button" onClick={scrollToTop} className="scroll-up-btn" aria-label="Go to top">
          <FaArrowUp />
        </button>

        <div className="footer-content">
          <div className="footer-left">
            <p>© Copyright 2026 - 3Energy srl - P.IVA 11003760961 | Samara Engineering solutions</p>
          </div>
          <div className="footer-right">
            <a href="https://it.linkedin.com/company/3energy-s-r-l" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
