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
                  The way in is a free 20 minute call. Answer seven short questions below, then pick a time. It takes about two minutes.
                </p>
                <ol className="steps">
                  <li>
                    <b>You answer seven questions.</b> We arrive knowing the business, so the 20 minutes go on the job that matters.
                  </li>
                  <li>
                    <b>We talk for 20 minutes.</b> You leave with a rough figure for what one job costs you a year.
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
                <a className="btn ac" href="#applyForm">
                  Start the seven questions <span className="arr">↓</span>
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
            <div className="mono form-label">
              <b>Seven questions</b>Then you pick a time
            </div>
            <form className="form" id="applyForm" noValidate>
              <div className="f3">
                <div className="field">
                  <label htmlFor="fName">Your name</label>
                  <input id="fName" name="name" type="text" autoComplete="name" placeholder="Karen Holm" required />
                </div>
                <div className="field">
                  <label htmlFor="fEmail">Email</label>
                  <input id="fEmail" name="email" type="email" autoComplete="email" placeholder="karen@holmandco.co.uk" required />
                </div>
                <div className="field">
                  <label htmlFor="fCo">Business</label>
                  <input id="fCo" name="company" type="text" autoComplete="organization" placeholder="Holm &amp; Co Ltd" required />
                </div>
              </div>
              <div className="field">
                <label className="ask" htmlFor="fAbout">
                  <b>1</b>What does the business do, and roughly how many people work in it?
                </label>
                <textarea id="fAbout" name="about" placeholder="We make and fit architectural glazing. Fourteen of us, four in the office." required />
              </div>
              <div className="field">
                <label className="ask" id="lblTime">
                  <b>2</b>Which of these take up time in the business that you wish they didn't? <i>Tick all that apply.</i>
                </label>
                <div className="chips" role="group" aria-labelledby="lblTime" data-name="time" data-multi="true">
                  <button type="button" aria-pressed="false">
                    Bookkeeping and reconciliation
                  </button>
                  <button type="button" aria-pressed="false">
                    Chasing invoices
                  </button>
                  <button type="button" aria-pressed="false">
                    Quoting and proposals
                  </button>
                  <button type="button" aria-pressed="false">
                    Inbox and customer replies
                  </button>
                  <button type="button" aria-pressed="false">
                    Reports and month end
                  </button>
                  <button type="button" aria-pressed="false">
                    Scheduling and admin
                  </button>
                  <button type="button" aria-pressed="false">
                    Data entry between systems
                  </button>
                  <button type="button" aria-pressed="false" data-other="fTimeOther">
                    Something else
                  </button>
                </div>
                <input id="fTimeOther" name="timeOther" type="text" placeholder="What is the something else?" aria-label="What is the something else?" hidden />
              </div>
              <div className="field">
                <label className="ask" id="lblNever">
                  <b>3</b>Of those, which one would you most like to never do again?
                </label>
                <div className="chips" role="group" aria-labelledby="lblNever" data-name="never">
                  <button type="button" aria-pressed="false">
                    Bookkeeping and reconciliation
                  </button>
                  <button type="button" aria-pressed="false">
                    Chasing invoices
                  </button>
                  <button type="button" aria-pressed="false">
                    Quoting and proposals
                  </button>
                  <button type="button" aria-pressed="false">
                    Inbox and customer replies
                  </button>
                  <button type="button" aria-pressed="false">
                    Reports and month end
                  </button>
                  <button type="button" aria-pressed="false">
                    Scheduling and admin
                  </button>
                  <button type="button" aria-pressed="false">
                    Data entry between systems
                  </button>
                  <button type="button" aria-pressed="false">
                    Something else
                  </button>
                </div>
              </div>
              <div className="field">
                <label className="ask" id="lblWeek">
                  <b>4</b>Roughly how many hours a week go into that one job, across everyone involved?
                </label>
                <div className="chips" role="group" aria-labelledby="lblWeek" data-name="week">
                  <button type="button" aria-pressed="false">
                    Under 5
                  </button>
                  <button type="button" aria-pressed="false">
                    5 to 10
                  </button>
                  <button type="button" aria-pressed="false">
                    10 to 20
                  </button>
                  <button type="button" aria-pressed="false">
                    20 or more
                  </button>
                </div>
              </div>
              <div className="field">
                <label className="ask" id="lblTried">
                  <b>5</b>What have you tried already? <i>Tick all that apply.</i>
                </label>
                <div className="chips" role="group" aria-labelledby="lblTried" data-name="tried" data-multi="true">
                  <button type="button" aria-pressed="false">
                    Nothing yet
                  </button>
                  <button type="button" aria-pressed="false">
                    Hired someone
                  </button>
                  <button type="button" aria-pressed="false">
                    Off-the-shelf software
                  </button>
                  <button type="button" aria-pressed="false">
                    ChatGPT or similar
                  </button>
                  <button type="button" aria-pressed="false">
                    An agency or freelancer
                  </button>
                  <button type="button" aria-pressed="false">
                    Built something in-house
                  </button>
                </div>
              </div>
              <div className="field">
                <label className="ask" id="lblSys">
                  <b>6</b>Which systems do you run the business on? <i>Tick all that apply.</i>
                </label>
                <div className="chips" role="group" aria-labelledby="lblSys" data-name="systems" data-multi="true">
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
                    HubSpot
                  </button>
                  <button type="button" aria-pressed="false">
                    Salesforce
                  </button>
                  <button type="button" aria-pressed="false">
                    Google Workspace
                  </button>
                  <button type="button" aria-pressed="false">
                    Microsoft 365
                  </button>
                  <button type="button" aria-pressed="false">
                    Spreadsheets
                  </button>
                  <button type="button" aria-pressed="false" data-other="fSysOther">
                    Other
                  </button>
                </div>
                <input id="fSysOther" name="systemsOther" type="text" placeholder="Which other systems?" aria-label="Which other systems?" hidden />
              </div>
              <div className="field">
                <label className="ask" id="lblBudget">
                  <b>7</b>If the right fit existed, is there a budget for it this quarter?
                </label>
                <div className="chips" role="group" aria-labelledby="lblBudget" data-name="budget">
                  <button type="button" aria-pressed="false">
                    Yes
                  </button>
                  <button type="button" aria-pressed="false">
                    Possibly
                  </button>
                  <button type="button" aria-pressed="false">
                    Not yet, just exploring
                  </button>
                </div>
              </div>
              <div className="foot">
                <p>
                  We read every answer ourselves. We do not sell or share your details and we do not add you to a list.
                </p>
                <button className="btn" type="submit">
                  Pick a time <span className="arr">→</span>
                </button>
              </div>
              <p className="mono form-err" id="applyErr" role="alert" hidden />
              <div className="done" id="applyDone" hidden>
                <div className="mono ok">Received</div>
                <div className="verdict">Thank you. Now pick a time.</div>
                <p style={{ color: "var(--fg-soft)" }}>
                  The calendar opens in a moment. If it does not,{" "}
                  <a className="ulink" id="bookLink" href="https://calendly.com/gainwright/first-sketch">
                    choose a time for your call
                  </a>
                  . Or email <span id="emailText2">hello@gainwright.ai</span>.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
