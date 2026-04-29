import { FaLinkedin } from "react-icons/fa";

const menuItems = ["Home", "Progetti", "Chi Siamo", "Servizi", "Contatti"];

function App() {
  return (
    <div className="page">
      <header className="navbar">
        <div className="brand">
          <div className="logo-mark">
            <span className="logo-three">3</span>
            <span className="logo-e">E</span>
          </div>
          <span className="brand-subtext">srl</span>
        </div>

        <nav className="menu" aria-label="Main navigation">
          {menuItems.map((item, index) => (
            <a
              key={item}
              href="#"
              className={index === 0 ? "menu-link active" : "menu-link"}
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="linkedin-link"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </header>
    </div>
  );
}

export default App;
