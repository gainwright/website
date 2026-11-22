export default function Header() {
  return (
    <header className="hdr" id="top" data-open="false">
      <div className="wrap">
        <a className="brand" href="#top" aria-label="Gainwright home">
          <svg viewBox="0 0 64 64" aria-hidden="true">
            <rect x="8" y="8" width="48" height="12" fill="var(--fg)" />
            <rect x="8" y="8" width="12" height="48" fill="var(--fg)" />
            <rect x="8" y="44" width="48" height="12" fill="var(--fg)" />
            <rect x="30" y="30" width="26" height="12" fill="var(--accent)" />
            <rect x="44" y="30" width="12" height="26" fill="var(--accent)" />
          </svg>{" "}
          <span className="name">
            gainwright<i>.</i>
          </span>{" "}
          <span className="mono tag">AI · fitted</span>
        </a>
        <nav className="nav" aria-label="Primary">
          <a href="#hours">The hours</a> <a href="#first-call">First Sketch</a> <a href="#audit">The Blueprint</a>{" "}
          <a href="#fitted">What we build</a> <a href="#how">How we work</a> <a href="#apply">Contact</a>{" "}
          <a href="https://calendly.com/dondemetrius/30min" target="_blank" rel="noopener" className="only-menu">
            Book your First Sketch →
          </a>
        </nav>
        <div className="hdr-right">
          <button
            className="detail-btn"
            id="detailBtn"
            type="button"
            aria-pressed="false"
            title="Open every fold on the page at once, or close them all"
          >
            <span>Show all detail</span>
          </button>{" "}
          <button className="theme" id="themeBtn" type="button" aria-label="Switch between sheet and blueprint">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" />
            </svg>
          </button>{" "}
          <a className="btn" href="https://calendly.com/dondemetrius/30min" target="_blank" rel="noopener">
            Book your First Sketch
          </a>{" "}
          <button className="menu-btn" id="menuBtn" type="button" aria-label="Menu" aria-expanded="false">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
