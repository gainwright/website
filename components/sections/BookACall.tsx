export default function BookACall() {
  return (
    <section className="section contact" id="apply">
      <div className="wrap">
        <div className="section-head">
          <div className="mono">
            <b>08</b>Book your 20 minute call
          </div>
          <div>
            <h2 className="display">
              Tell us where the <span className="ac">hours</span> go.
            </h2>
            <div className="contact-top">
              <div className="contact-side">
                <p className="lede">
                  The way in is a free 20 minute call. Answer seven short questions, then pick a time. It takes about two minutes.
                </p>
                <ol className="steps">
                  <li>
                    <b>You answer seven questions.</b> We arrive knowing the business, so the 20 minutes go on the work that matters.
                  </li>
                  <li>
                    <b>We talk for 20 minutes.</b> You leave with a rough figure for what that work costs you a year.
                  </li>
                  <li>
                    <b>You decide.</b> If the figure is worth chasing, the Gain Audit is next. If not, we say so.
                  </li>
                </ol>
              </div>
              <aside className="book-card" aria-label="Book your 20 minute call">
                <div className="mono">
                  <b>Free</b>20 minutes · video call
                </div>
                <a className="btn ac" href="/book">
                  Start the seven questions <span className="arr">→</span>
                </a>
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
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
