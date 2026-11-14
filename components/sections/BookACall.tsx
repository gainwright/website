export default function BookACall() {
  return (
    <section className="section contact" id="apply">
      <div className="wrap">
        <div className="section-head">
          <div className="mono">
            <b>08</b>Book a call
          </div>
          <div>
            <h2 className="display">
              Tell us where the <span className="ac">hours</span> go.
            </h2>
            <div className="inner">
              <div className="contact-side">
                <p className="lede">
                  What you run, roughly what it turns over, where the time disappears. We reply within three working days with a time for
                  the call.
                </p>
                <div className="spec">
                  <div className="row">
                    <div className="mono">Email</div>
                    <p>
                      <span id="emailText">hello@gainwright.ai</span>
                      <button className="copy-btn" type="button" id="copyEmail" aria-label="Copy email address">
                        Copy
                      </button>
                    </p>
                  </div>
                  <div className="row">
                    <div className="mono">Studio</div>
                    <p>London</p>
                  </div>
                  <div className="row">
                    <div className="mono">This month</div>
                    <p id="capLine">Ledgerwright installs open: 20</p>
                  </div>
                </div>
              </div>
              <form className="form" id="applyForm" noValidate>
                <div className="f2">
                  <div className="field">
                    <label htmlFor="fName">Your name</label>
                    <input id="fName" name="name" type="text" autoComplete="name" placeholder="Karen Holm" required />
                  </div>
                  <div className="field">
                    <label htmlFor="fEmail">Email</label>
                    <input id="fEmail" name="email" type="email" autoComplete="email" placeholder="karen@holmandco.co.uk" required />
                  </div>
                </div>
                <div className="f2">
                  <div className="field">
                    <label htmlFor="fCo">Business</label>
                    <input id="fCo" name="company" type="text" autoComplete="organization" placeholder="Holm &amp; Co Ltd" required />
                  </div>
                  <div className="field">
                    <label htmlFor="fWeb">Website (optional)</label>
                    <input id="fWeb" name="website" type="url" autoComplete="url" placeholder="holmandco.co.uk" />
                  </div>
                </div>
                <div className="field">
                  <label id="lblTurn">Turnover</label>
                  <div className="chips" role="group" aria-labelledby="lblTurn" data-name="turnover">
                    <button type="button" aria-pressed="false">
                      Under £1m
                    </button>
                    <button type="button" aria-pressed="false">
                      £1m to £3m
                    </button>
                    <button type="button" aria-pressed="false">
                      £3m to £5m
                    </button>
                    <button type="button" aria-pressed="false">
                      £5m to £10m
                    </button>
                    <button type="button" aria-pressed="false">
                      Over £10m
                    </button>
                  </div>
                </div>
                <div className="field">
                  <label id="lblInt">What are you here for?</label>
                  <div className="chips" role="group" aria-labelledby="lblInt" data-name="interest">
                    <button type="button" aria-pressed="false" data-val="call">
                      A first call
                    </button>
                    <button type="button" aria-pressed="false" data-val="ledgerwright">
                      Buy Ledgerwright
                    </button>
                    <button type="button" aria-pressed="false" data-val="ledgerwright-call">
                      Talk about Ledgerwright
                    </button>
                    <button type="button" aria-pressed="false" data-val="fitted">
                      A custom build
                    </button>
                    <button type="button" aria-pressed="false" data-val="claude">
                      Claude set up for our business
                    </button>
                  </div>
                </div>
                <div className="field">
                  <label id="lblBooks">What runs your books?</label>
                  <div className="chips" role="group" aria-labelledby="lblBooks" data-name="books">
                    <button type="button" aria-pressed="false">
                      Xero
                    </button>
                    <button type="button" aria-pressed="false">
                      QuickBooks
                    </button>
                    <button type="button" aria-pressed="false">
                      Sage
                    </button>
                    <button type="button" aria-pressed="false">
                      Something else
                    </button>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="fHours">Where do the hours go?</label>
                  <textarea
                    id="fHours"
                    name="hours"
                    placeholder="Month end, chasing invoices, re-keying orders into Xero, writing the same quote again…"
                  />
                </div>
                <div className="f2">
                  <div className="field">
                    <label htmlFor="fWhen">When would you like to start?</label>
                    <input id="fWhen" name="when" type="text" placeholder="January" />
                  </div>
                  <div className="field">
                    <label htmlFor="fHeard">How did you hear about us?</label>
                    <input id="fHeard" name="heard" type="text" placeholder="LinkedIn, a friend, a search" />
                  </div>
                </div>
                <div className="foot">
                  <p>
                    We read every request ourselves. We do not sell or share your details and we do not add you to a list unless you ask for
                    the guide.
                  </p>
                  <button className="btn" type="submit">
                    Book a call <span className="arr">→</span>
                  </button>
                </div>
                <div className="done" id="applyDone" hidden>
                  <div className="mono ok">Received</div>
                  <div className="verdict">Thank you. We'll reply within three working days.</div>
                  <p style={{ color: "var(--fg-soft)" }}>
                    If it is quicker, email <span id="emailText2">hello@gainwright.ai</span> directly.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
