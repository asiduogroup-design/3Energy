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

const siasProjectPath = "/progetti/s-i-a-s-societa-incremento-automobilismo-e-sport-s-p-a";
const faiProjectPath = "/progetti/fai-fondo-per-lambiente-italiano";
const vittoriaProjectPath = "/progetti/vittoria-assicurazioni-s-p-a";
const kosProjectPath = "/progetti/kos-care-s-r-l";
const fondazioneProjectPath = "/progetti/fondazione-collegio-delle-universita-milanesi";
const originalProjectsOrigin = "https://www.3energy.it";

function toHostedProjectPath(link) {
  if (!link.startsWith(originalProjectsOrigin)) {
    return link;
  }

  const hostedPath = link.slice(originalProjectsOrigin.length);
  return hostedPath.endsWith("/") ? hostedPath.slice(0, -1) : hostedPath;
}

const projects = [
  {
    title: "S.I.A.S - Società Incremento Automobilismo e Sport S.p.A.",
    image: "/images/projects/project-1.jpg",
    link: siasProjectPath,
    large: false,
  },
  {
    title: "FAI - Fondo per l'Ambiente Italiano",
    image: "/images/projects/project-2.jpeg",
    link: faiProjectPath,
    large: false,
  },
  {
    title: "Vittoria Assicurazioni S.p.A.",
    image: "/images/projects/project-3.jpeg",
    link: vittoriaProjectPath,
    large: false,
  },
  {
    title: "Kos Care S.r.l.",
    image: "/images/projects/project-4.png",
    link: kosProjectPath,
    large: true,
  },
  {
    title: "Fondazione Collegio delle Università Milanesi",
    image: "/images/projects/project-5.jpeg",
    link: fondazioneProjectPath,
    large: true,
  },
];

const progettiPortfolioItems = [
  {
    title: "Eurocommercial Properties Italia S.r.l.",
    image: "https://www.3energy.it/wp-content/uploads/2023/05/1Curno-rid-e1685596034338-700x580.jpg",
    link: "https://www.3energy.it/progetti/eurocommercial-properties-italia-s-r-l-2/",
  },
  {
    title: "Vittoria Assicurazioni S.p.a.",
    image: "/images/projects/project-3.jpeg",
    link: vittoriaProjectPath,
  },
  {
    title: "Aquila Clean Energy Italy S.r.l.",
    image: "https://www.3energy.it/wp-content/uploads/2023/06/1CBRE-AQUILA-700x580.jpg",
    link: "https://www.3energy.it/progetti/aquila-clean-energy-italy-s-r-l/",
  },
  {
    title: "Pensa Pharma S.p.A.",
    image: "https://www.3energy.it/wp-content/uploads/2023/06/PENSA-PHARMA-700x580.jpg",
    link: "https://www.3energy.it/progetti/pensa-pharma-s-p-a/",
  },
  {
    title: "Conteco Check S.r.l.",
    image: "https://www.3energy.it/wp-content/uploads/2023/02/image14-700x580.jpeg",
    link: "https://www.3energy.it/progetti/conteco-check-s-r-l/",
  },
  {
    title: "Fendi Switzerland S.A.",
    image: "https://www.3energy.it/wp-content/uploads/2023/05/1Fendi-700x580.jpg",
    link: "https://www.3energy.it/progetti/fendi-switzerland-s-a-2/",
  },
  {
    title: "ASUR Marche",
    image: "https://www.3energy.it/wp-content/uploads/2023/02/image27.jpeg",
    link: "https://www.3energy.it/progetti/asur-marche/",
  },
  {
    title: "Gabbiano S.p.a.",
    image: "https://www.3energy.it/wp-content/uploads/2023/02/image5-700x580.jpeg",
    link: "https://www.3energy.it/progetti/gabbiano-s-p-a/",
  },
  {
    title: "Uesisa S.p.a.",
    image: "https://www.3energy.it/wp-content/uploads/2023/02/image8-700x580.jpeg",
    link: "https://www.3energy.it/progetti/uesisa-s-p-a-2/",
  },
  {
    title: "CNPADC - Cassa dei Dottori Commercialisti",
    image: "https://www.3energy.it/wp-content/uploads/2023/02/image15-700x580.png",
    link: "https://www.3energy.it/progetti/cnpadc-cassa-dei-dottori-commercialisti/",
  },
  {
    title: "Olympus Italia S.r.l.",
    image: "https://www.3energy.it/wp-content/uploads/2023/06/1Olympus-700x580.jpg",
    link: "https://www.3energy.it/progetti/olympus-italia-s-r-l/",
  },
  {
    title: "Immobiliare Maiga S.p.a.",
    image: "https://www.3energy.it/wp-content/uploads/2023/02/image7-700x580.jpeg",
    link: "https://www.3energy.it/progetti/immobiliare-maiga-s-p-a/",
  },
  {
    title: "Getec Italia S.p.a.",
    image: "https://www.3energy.it/wp-content/uploads/2023/02/image9-700x580.jpg",
    link: "https://www.3energy.it/progetti/getec-italia-s-p-a/",
  },
  {
    title: "Fondazione Cassa di Risparmio di Cuneo",
    image: "https://www.3energy.it/wp-content/uploads/2023/06/1FCRC-Cuneo--700x580.jpg",
    link: "https://www.3energy.it/progetti/fondazione-cassa-di-risparmio-di-cuneo-2/",
  },
  {
    title: "S.I.A.S - Societa Incremento Automobilismo e Sport S.p.A.",
    image: "/images/projects/project-1.jpg",
    link: siasProjectPath,
  },
  {
    title: "FAI - Fondo per l'Ambiente Italiano",
    image: "/images/projects/project-2.jpeg",
    link: faiProjectPath,
  },
  {
    title: "Comune di Macerata",
    image: "https://www.3energy.it/wp-content/uploads/2023/02/image24.jpeg",
    link: "https://www.3energy.it/progetti/comune-di-macerata/",
  },
  {
    title: "Societa Italiana Servizi S.r.l.",
    image: "https://www.3energy.it/wp-content/uploads/2023/02/image25-700x580.jpg",
    link: "https://www.3energy.it/progetti/societa-italiana-servizi-s-r-l/",
  },
  {
    title: "Agenzia del Demanio",
    image: "https://www.3energy.it/wp-content/uploads/2023/02/image17-700x580.jpeg",
    link: "https://www.3energy.it/progetti/agenzia-del-demanio/",
  },
  {
    title: "Ministero delle Infrastrutture e dei Trasporti",
    image: "https://www.3energy.it/wp-content/uploads/2023/02/image22-700x580.jpg",
    link: "https://www.3energy.it/progetti/ministero-delle-infrastrutture-e-dei-trasporti-2/",
  },
  {
    title: "Ministero delle Infrastrutture e dei Trasporti",
    image: "https://www.3energy.it/wp-content/uploads/2023/02/image21-700x580.jpeg",
    link: "https://www.3energy.it/progetti/ministero-delle-infrastrutture-e-dei-trasporti/",
  },
  {
    title: "Immobiliare Triveneta S.p.a.",
    image: "https://www.3energy.it/wp-content/uploads/2023/02/image6.jpeg",
    link: "https://www.3energy.it/progetti/immobiliare-triveneta-s-p-a/",
  },
  {
    title: "Fondazione Collegio delle Universita Milanesi",
    image: "/images/projects/project-5.jpeg",
    link: fondazioneProjectPath,
  },
  {
    title: "Kos Care S.r.l.",
    image: "/images/projects/project-4.png",
    link: kosProjectPath,
  },
  {
    title: "Fondazione Don Carlo Gnocchi",
    image: "https://www.3energy.it/wp-content/uploads/2023/02/image16-700x580.jpeg",
    link: "https://www.3energy.it/progetti/fondazione-don-carlo-gnocchi/",
  },
  {
    title: "Acquambiente Marche S.r.l.",
    image: "https://www.3energy.it/wp-content/uploads/2023/02/image18-700x580.jpeg",
    link: "https://www.3energy.it/progetti/acquambiente-marche-s-r-l/",
  },
  {
    title: "Prefettura di Fermo",
    image: "https://www.3energy.it/wp-content/uploads/2023/02/image20-e1683686084409-700x580.jpeg",
    link: "https://www.3energy.it/progetti/prefettura-di-fermo/",
  },
  {
    title: "Uesisa S.p.a.",
    image: "https://www.3energy.it/wp-content/uploads/2023/02/image4-700x580.jpeg",
    link: "https://www.3energy.it/progetti/uesisa-s-p-a/",
  },
  {
    title: "Fondazione Opera Pia Mastai Ferretti",
    image: "https://www.3energy.it/wp-content/uploads/2023/02/image19-700x580.jpeg",
    link: "https://www.3energy.it/progetti/fondazione-opera-pia-mastai-ferretti/",
  },
  {
    title: "ACER Piacenza",
    image: "https://www.3energy.it/wp-content/uploads/2023/02/image12-700x580.png",
    link: "https://www.3energy.it/progetti/acer-piacenza/",
  },
  {
    title: "Cooperativa Sociale COOSS MARCHE ONLUS",
    image: "https://www.3energy.it/wp-content/uploads/2023/02/image23-700x580.jpeg",
    link: "https://www.3energy.it/progetti/cooperativa-sociale-cooss-marche-onlus/",
  },
  {
    title: "Engie Servizi S.p.a.",
    image: "https://www.3energy.it/wp-content/uploads/2023/05/Cogeneratore-MC-700x580.jpeg",
    link: "https://www.3energy.it/progetti/engie-servizi-s-p-a/",
  },
].map((project) => ({ ...project, link: toHostedProjectPath(project.link) }));

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
          {projects.map((project) => {
            const isExternalLink = project.link.startsWith("http");

            return (
              <a
                key={project.title}
                href={project.link}
                target={isExternalLink ? "_blank" : undefined}
                rel={isExternalLink ? "noreferrer" : undefined}
                className={project.large ? "project-card large" : "project-card"}
                aria-label={project.title}
              >
                <img src={project.image} alt={project.title} />
                <span className="project-overlay">{project.title}</span>
              </a>
            );
          })}
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
      <div className="progetti-page-shell">
        <div className="progetti-title-wrap">
          <h1>Progetti</h1>
        </div>

        <div className="progetti-grid" role="list">
          {progettiPortfolioItems.map((project) => {
            const isExternalLink = project.link.startsWith("http");

            return (
              <article className="progetti-card-wrap" key={project.title} role="listitem">
                <a
                  href={project.link}
                  target={isExternalLink ? "_blank" : undefined}
                  rel={isExternalLink ? "noreferrer" : undefined}
                  className="progetti-card"
                  aria-label={project.title}
                >
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <span className="progetti-card-overlay">
                    <span className="progetti-card-info">
                      <span className="progetti-card-title">{project.title}</span>
                      <span className="progetti-card-term">Progettazione e Direzione</span>
                    </span>
                  </span>
                </a>
              </article>
            );
          })}
        </div>

        <div className="progetti-show-more">
          <button type="button" className="progetti-show-more-btn" disabled>
            No more portfolio items to show
          </button>
        </div>
      </div>
    </section>
  );
}

function SiasProjectPage() {
  return (
    <section className="project-detail-page" aria-label="S.I.A.S project details">
      <div className="project-detail-layout">
        <article className="project-detail-copy">
          <h1>S.I.A.S - Societa Incremento Automobilismo e Sport S.p.A.</h1>
          <p>
            <strong>Progetto:</strong>
            <br />
            Realizzazione della nuova Direzione Gara dell&apos;Autodromo Nazionale di Monza
          </p>

          <div className="project-detail-meta">
            <div>
              <h3>Location</h3>
              <ul>
                <li>Monza</li>
              </ul>
            </div>
            <div>
              <h3>Anno</h3>
              <ul>
                <li>2020</li>
              </ul>
            </div>
            <div>
              <h3>Cliente</h3>
              <ul>
                <li>S.I.A.S - Societa Incremento Automobilismo e Sport S.p.A.</li>
              </ul>
            </div>
            <div>
              <h3>Attivita</h3>
              <ul>
                <li>Progettazione esecutiva e direzione lavori impianti MEP</li>
              </ul>
            </div>
          </div>
        </article>

        <div className="project-detail-gallery">
          <img src="/images/projects/project-1.jpg" alt="S.I.A.S project in Monza" />
        </div>
      </div>

      <div className="project-detail-actions">
        <a href="/progetti" className="primary-btn">
          Torna ai progetti
        </a>
      </div>
    </section>
  );
}

function FaiProjectPage() {
  return (
    <section className="project-detail-page" aria-label="FAI project details">
      <div className="project-detail-layout">
        <article className="project-detail-copy">
          <h1>FAI - Fondo per l'Ambiente Italiano</h1>
          <p>
            <strong>Progetto:</strong>
            <br />
            Riqualificazione energetica della centrale tecnologica alimentata ad acqua di falda a
            servizio di Villa Necchi Campiglio
          </p>

          <div className="project-detail-meta">
            <div>
              <h3>Location</h3>
              <ul>
                <li>Milano</li>
              </ul>
            </div>
            <div>
              <h3>Anno</h3>
              <ul>
                <li>2022</li>
              </ul>
            </div>
            <div>
              <h3>Cliente</h3>
              <ul>
                <li>FAI - Fondo per l'Ambiente Italiano</li>
              </ul>
            </div>
            <div>
              <h3>Attivita</h3>
              <ul>
                <li>Progettazione esecutiva e direzione lavori impianti MEP</li>
              </ul>
            </div>
          </div>
        </article>

        <div className="project-detail-gallery">
          <img src="/images/projects/project-2.jpeg" alt="FAI project in Milano" />
        </div>
      </div>

      <div className="project-detail-actions">
        <a href="/progetti" className="primary-btn">
          Torna ai progetti
        </a>
      </div>
    </section>
  );
}

function VittoriaProjectPage() {
  return (
    <section className="project-detail-page" aria-label="Vittoria project details">
      <div className="project-detail-layout">
        <article className="project-detail-copy">
          <h1>Vittoria Assicurazioni S.p.a.</h1>
          <p>
            <strong>Progetto:</strong>
            <br />
            Due diligence impiantistica delle sedi degli Ispettorati Sinistri di Vittoria
            Assicurazioni
          </p>

          <div className="project-detail-meta">
            <div>
              <h3>Location</h3>
              <ul>
                <li>n.17 Provincie</li>
              </ul>
            </div>
            <div>
              <h3>Anno</h3>
              <ul>
                <li>2022</li>
              </ul>
            </div>
            <div>
              <h3>Cliente</h3>
              <ul>
                <li>Vittoria Assicurazioni S.p.a.</li>
              </ul>
            </div>
            <div>
              <h3>Attivita</h3>
              <ul>
                <li>Consulenza impianti MEP</li>
              </ul>
            </div>
          </div>
        </article>

        <div className="project-detail-gallery">
          <img src="/images/projects/project-3.jpeg" alt="Vittoria Assicurazioni project" />
        </div>
      </div>

      <div className="project-detail-actions">
        <a href="/progetti" className="primary-btn">
          Torna ai progetti
        </a>
      </div>
    </section>
  );
}

function KosProjectPage() {
  return (
    <section className="project-detail-page" aria-label="Kos project details">
      <div className="project-detail-layout">
        <article className="project-detail-copy">
          <h1>Kos Care S.r.l.</h1>
          <p>
            <strong>Progetto:</strong>
            <br />
            Nuova residenza sanitaria assistita da 100 posti letto
          </p>

          <div className="project-detail-meta">
            <div>
              <h3>Location</h3>
              <ul>
                <li>Campofilone (FM)</li>
              </ul>
            </div>
            <div>
              <h3>Anno</h3>
              <ul>
                <li>2017 - 2019</li>
              </ul>
            </div>
            <div>
              <h3>Cliente</h3>
              <ul>
                <li>Kos Care S.r.l.</li>
              </ul>
            </div>
            <div>
              <h3>Attivita</h3>
              <ul>
                <li>Progettazione esecutiva e direzione lavori impianti MEP</li>
              </ul>
            </div>
          </div>
        </article>

        <div className="project-detail-gallery">
          <img src="/images/projects/project-4.png" alt="Kos Care project" />
        </div>
      </div>

      <div className="project-detail-actions">
        <a href="/progetti" className="primary-btn">
          Torna ai progetti
        </a>
      </div>
    </section>
  );
}

function FondazioneProjectPage() {
  return <FaiProjectPage />;
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
  const isSiasProjectPage = currentPath === siasProjectPath;
  const isFaiProjectPage = currentPath === faiProjectPath;
  const isVittoriaProjectPage = currentPath === vittoriaProjectPath;
  const isKosProjectPage = currentPath === kosProjectPath;
  const isFondazioneProjectPage = currentPath === fondazioneProjectPath;
  const isProgettiPage = currentPath === "/progetti" || currentPath.startsWith("/progetti/");
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
  } else if (isSiasProjectPage) {
    page = <SiasProjectPage />;
  } else if (isFaiProjectPage) {
    page = <FaiProjectPage />;
  } else if (isVittoriaProjectPage) {
    page = <VittoriaProjectPage />;
  } else if (isKosProjectPage) {
    page = <KosProjectPage />;
  } else if (isFondazioneProjectPage) {
    page = <FondazioneProjectPage />;
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
            href="https://www.linkedin.com/company/3energy-s-r-l"
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
            <a href="https://www.linkedin.com/company/3energy-s-r-l" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
