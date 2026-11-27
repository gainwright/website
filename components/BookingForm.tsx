/** The call booking: name, email, business and the seven questions. Behaviour is in lib/booking.js. */
export default function BookingForm() {
  return (
    <>
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
      <div className="field askf">
        <label className="ask" htmlFor="fAbout">
          <b>1</b>What does the business do, and roughly how many people work in it?
        </label>
        <textarea id="fAbout" name="about" rows={1} required />
      </div>
      <div className="field askf">
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
      <div className="field askf">
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
          <button type="button" aria-pressed="false" data-other="fNeverOther">
            Something else
          </button>
        </div>
        <input id="fNeverOther" name="neverOther" type="text" placeholder="What is the something else?" aria-label="What is the something else?" hidden />
      </div>
      <div className="field askf">
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
      <div className="field askf">
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
          <button type="button" aria-pressed="false" data-other="fTriedOther">
            Something else
          </button>
        </div>
        <input id="fTriedOther" name="triedOther" type="text" placeholder="What else have you tried?" aria-label="What else have you tried?" hidden />
      </div>
      <div className="field askf">
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
      <div className="field askf">
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
          <a className="ulink" id="bookLink" href="https://calendly.com/gainwright/20-minute-call">
            choose a time for your call
          </a>
          . Or email <span id="emailText2">hello@gainwright.ai</span>.
        </p>
      </div>
    </form>
    </>
  );
}
