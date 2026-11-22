export default function Hours() {
  return (
    <section className="section" id="hours">
      <div className="wrap">
        <div className="section-head">
          <div className="mono">
            <b>01</b>What you get back
          </div>
          <div>
            <h2 className="display">
              Two and a half months a year, back on the work that <span className="ac">pays</span>.
            </h2>
            <p className="lede" style={{ marginTop: "24px" }}>
              UK owners spend about eleven hours a week on admin and finance. Fitted agents take the routine part. The people who did it get
              their week back for customers, and the numbers arrive before anyone asks.
            </p>
            <div className="tiles">
              <div className="tile">
                <div className="num ac">
                  2½<small>months a year</small>
                </div>
                <p>of every working year goes on admin and finance, per person doing it. Eleven hours a week over 48 weeks.</p>
                <p className="mono src2">Amex SME Barometer, 1,000 UK owners, July 2026</p>
              </div>
              <div className="tile">
                <div className="num">
                  £29k<small>to £45k a year</small>
                </div>
                <p>
                  is the full cost of an in-house bookkeeper: £24k to £35k salary plus 20 to 30% on-costs. When the admin adds up to a whole
                  role, that is what it costs every year.
                </p>
                <p className="mono src2">Xero UK hiring guide · National Careers Service</p>
              </div>
              <div className="tile">
                <div className="num">
                  1 in 3<small>owners</small>
                </div>
                <p>
                  say their own lack of capacity is the biggest barrier to growth. More than half say paperwork gets in the way of running
                  the business.
                </p>
                <p className="mono src2">Amex SME Barometer, July 2026 (36% and 54%)</p>
              </div>
            </div>
            <div className="calc" aria-label="What you get back">
              <div className="in">
                <div className="mono">
                  <b>Your numbers</b>Move the sliders. Nothing is sent.
                </div>
                <div className="ctl">
                  <div className="lab">
                    <span>Hours a week on admin and finance</span>
                    <span id="vHours">11 hrs</span>
                  </div>
                  <input id="cHours" type="range" min="1" max="30" step="1" defaultValue="11" />
                  <div className="under">UK average is 11 (Amex, 2026). Count everyone who touches it, not just you.</div>
                </div>
                <div className="ctl">
                  <div className="lab">
                    <span>Whose hours are they, mostly?</span>
                    <span id="vRate">£100</span>
                  </div>
                  <div className="seg whose" role="group" aria-label="Whose hours">
                    <button type="button" data-rate="100" aria-pressed="true">
                      The owner
                    </button>
                    <button type="button" data-rate="45" aria-pressed="false">
                      A manager
                    </button>
                    <button type="button" data-rate="25" aria-pressed="false">
                      A bookkeeper
                    </button>
                  </div>
                  <input id="cRate" type="range" min="15" max="250" step="5" defaultValue="100" aria-label="Value of an hour" />
                  <div className="under">
                    An owner's hour at a growing business is worth £100 or more. A bookkeeper's is £20 to £50. Set it to what yours is
                    worth.
                  </div>
                </div>
              </div>
              <div className="out">
                <div className="mono">Time back, a year</div>
                <div className="big">
                  <span id="oHoursBig">528 hrs</span>
                  <small id="oHours">66 working days · 13 weeks of one person</small>
                </div>
                <div className="row2">
                  <span>What those hours are worth</span>
                  <b id="oCost">£52,800</b>
                </div>
                <div className="row2">
                  <span>If fitted work takes half of them</span>
                  <b className="ac" id="oHalf">
                    £26,400
                  </b>
                </div>
                <p className="note">
                  Half is an assumption, not a promise. It counts only the hours. It does not count month end arriving a week earlier,
                  invoices chased on time, or what a person does with the weeks they get back. The discovery call puts a rough figure on
                  it in your own numbers, and the audit measures it properly.
                </p>
                <a className="btn" href="#apply" style={{ justifyContent: "center" }}>
                  Book a call <span className="arr">→</span>
                </a>
              </div>
            </div>
            <details className="fold">
              <summary>
                <span className="k">The gap, and where the figures come from</span>
                <span className="hint" />
              </summary>
              <div className="inner">
                <div className="gap-stats" style={{ marginTop: "0" }}>
                  <div className="stat">
                    <div className="num">54%</div>
                    <p>of UK SMEs say they are using AI, up from 35% a year earlier.</p>
                  </div>
                  <div className="stat">
                    <div className="num ac">6%</div>
                    <p>of small firms have AI embedded in day-to-day work.</p>
                  </div>
                </div>
                <p className="lede">
                  Most firms have adopted AI. Almost none have installed it. The difference is not the tool. It is the fitting: whether the
                  AI lives inside the systems the business runs, reads what it needs to read, writes where it needs to write, and asks a
                  human when it is not sure.
                </p>
                <div className="compare" style={{ marginTop: "0" }}>
                  <div className="col">
                    <div className="mono">Adopted</div>
                    <ul>
                      <li>A ChatGPT seat someone pays for.</li>
                      <li>A prompt found on LinkedIn, used twice.</li>
                      <li>A pilot that stalled in March.</li>
                      <li>The owner still re-keying numbers on a Sunday.</li>
                    </ul>
                  </div>
                  <div className="col fit">
                    <div className="mono">
                      <b>Fitted</b>
                    </div>
                    <ul>
                      <li>An agent reconciling Xero before anyone is in.</li>
                      <li>Your written way of working loaded into Claude, so it answers like your best person.</li>
                      <li>Quotes drafted from the last fifty you won.</li>
                      <li>The month-end report on your desk by eight.</li>
                    </ul>
                  </div>
                </div>
                <p className="mono src" style={{ marginTop: "0" }}>
                  Sources: American Express SME Business Barometer with Small Business Saturday UK, 1,000 UK business owners, July 2026 (11
                  hours a week on admin and finance; 54% say paperwork gets in the way; 36% cite their own capacity as the biggest barrier
                  to growth). Xero UK, "Hiring a bookkeeper" guide (freelance £20 to £50 an hour; in-house £24,000 to £35,000 citing the
                  National Careers Service, plus 20 to 30% on-costs; outsourced £120 to £700+ a month). British Chambers of Commerce with Atos, 668 UK businesses, Jan to Feb 2026 (54% using
                  AI). Enterprise Nation with Strand Partners, 1,320 UK SMEs, May 2026 (6% embedded). The value of an hour is your own
                  figure.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
