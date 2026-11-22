export default function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr-top">
          <div>
            <a className="brand" href="#top" aria-label="Gainwright home">
              <svg viewBox="0 0 64 64" aria-hidden="true">
                <rect x="8" y="8" width="48" height="12" fill="var(--fg)" />
                <rect x="8" y="8" width="12" height="48" fill="var(--fg)" />
                <rect x="8" y="44" width="48" height="12" fill="var(--fg)" />
                <rect x="30" y="30" width="26" height="12" fill="var(--accent)" />
                <rect x="44" y="30" width="12" height="26" fill="var(--accent)" />
              </svg>
            </a>
            <p className="desc">
              AI fitted into established businesses: the Blueprint, an audit of where the hours go, then custom software and Claude set up safely, built into the systems you already run.
            </p>
          </div>
          <div>
            <div className="mono">Index</div>
            <ul>
              <li>
                <a href="#hours">The hours</a>
              </li>
              <li>
                <a href="#first-call">First Sketch</a>
              </li>
              <li>
                <a href="#audit">The Blueprint</a>
              </li>
              <li>
                <a href="#fitted">What we build</a>
              </li>
              <li>
                <a href="#how">How we work</a>
              </li>
              <li>
                <a href="#apply">Book a call</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="mono">Elsewhere</div>
            <ul>
              <li>
                <a className="ext" href="https://www.linkedin.com/" target="_blank" rel="noopener">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="/privacy">Privacy</a>
              </li>
              <li>
                <a href="/terms">Terms</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="mono">Studio</div>
            <ul>
              <li>hello@gainwright.ai</li>
              <li>gainwright.ai</li>
            </ul>
          </div>
        </div>
        <div className="ftr-word" id="ftrWord" aria-hidden="true">
          gain<i>wright</i>.
        </div>
        <div className="ftr-bot mono">
          <span>© 2026 Gainwright · AI, fitted</span>
          <span>United Kingdom</span>
        </div>
      </div>
    </footer>
  );
}
