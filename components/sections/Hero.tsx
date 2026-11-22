export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-copy">
          <div>
            <div className="mono eyebrow">AI, fitted into the business you already run</div>
            <h1 className="display">
              You know you should be using AI.
              <br />
              We make it <span className="ac">happen</span>.
            </h1>
          </div>
          <div>
            <p className="lede">
              You know AI could change how your business works. You're just not sure where to start, or whether to trust it. We build
              it into the systems you already run, set Claude up safely, and stay until your team runs it without us.
            </p>
            <div className="hero-ctas">
              <a className="btn" href="#apply">
                Book your First Sketch <span className="arr">→</span>
              </a>{" "}
              <a className="ulink" href="#hours">
                What the admin costs you
              </a>
            </div>
          </div>
        </div>
        <div className="hero-fig">
          <div className="fig-head">
            <div className="mono">
              Fig. 01: a £3m business, as fitted
              <br />
              Accounts · inbox · CRM · sheets · calendar · files · one agent
            </div>
            <svg width="26" height="26" viewBox="0 0 64 64" aria-hidden="true">
              <rect x="8" y="8" width="48" height="12" fill="var(--muted)" />
              <rect x="8" y="8" width="12" height="48" fill="var(--muted)" />
              <rect x="8" y="44" width="48" height="12" fill="var(--muted)" />
              <rect x="30" y="30" width="26" height="12" fill="var(--accent)" />
              <rect x="44" y="30" width="12" height="26" fill="var(--accent)" />
            </svg>
          </div>
          <div className="model" id="model" data-fallback="false">
            <div className="model-fallback" aria-hidden="true">
              <svg viewBox="0 0 400 300" width="100%" height="100%">
                <g fill="none" stroke="var(--border)">
                  <path d="M40 190 L200 100 L360 190 L200 280 Z" />
                </g>
                <g fill="var(--model-block)" stroke="var(--border)">
                  <path d="M90 160 L130 138 L170 160 L170 200 L130 222 L90 200 Z" />
                  <path d="M230 120 L270 98 L310 120 L310 150 L270 172 L230 150 Z" />
                  <path d="M110 230 L150 208 L190 230 L190 250 L150 272 L110 250 Z" />
                  <path d="M250 200 L290 178 L330 200 L330 240 L290 262 L250 240 Z" />
                </g>
                <g fill="var(--accent)">
                  <path d="M180 150 L220 128 L260 150 L260 210 L220 232 L180 210 Z" />
                </g>
              </svg>
            </div>
          </div>
          <div className="fig-ctl">
            <div className="seg" role="group" aria-label="Model state">
              <button type="button" data-state="found" aria-pressed="false">
                As found
              </button>{" "}
              <button type="button" data-state="fitted" aria-pressed="true">
                As fitted
              </button>
            </div>
            <button className="mono play" id="spinBtn" type="button" aria-pressed="true">
              <svg viewBox="0 0 10 10" aria-hidden="true">
                <path d="M2 1.5 L8.5 5 L2 8.5 Z" fill="currentColor" />
              </svg>
              <span>Turning · drag to look</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
