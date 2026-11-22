export default function FirstCall() {
  return (
    <section className="section" id="first-call">
      <div className="wrap">
        <div className="section-head">
          <div className="mono">
            <b>02</b>Discovery · free
          </div>
          <div>
            <h2 className="display">
              Start with a 30 minute discovery <span className="ac">call</span>.
            </h2>
            <div className="firstcall">
              <div>
                <p className="lede">
                  Free, and no forms to fill in first. One call, where you walk us through how the work gets done today.
                </p>
                <p className="lede" style={{ marginTop: "18px" }}>
                  We're listening for one thing: a job your team does by hand that costs you real money every year. By the end of the call
                  you'll have a rough figure for what it costs, in your own numbers.
                </p>
                <p className="lede" style={{ marginTop: "18px" }}>
                  If we can't find a job costing you at least £20,000 a year, we'll say so on the call and you'll have lost 30 minutes.
                </p>
                <p className="lede" style={{ marginTop: "18px" }}>
                  If we do, the next step is the audit. We spend days inside the business, measure the work properly and come back with a
                  written report and a fixed price to remove most of it. The audit is a fixed fee, and part of it comes off the build if
                  you go ahead.
                </p>
                <div style={{ marginTop: "28px" }}>
                  <a className="btn" href="https://calendly.com/dondemetrius/30min" target="_blank" rel="noopener">
                    Book a discovery call <span className="arr">→</span>
                  </a>
                </div>
              </div>
              <div className="card" id="scorecard">
                <div className="mono">
                  <b>Three minutes</b>Not ready for a call? Start here.
                </div>
                <h3 className="display" style={{ margin: "0 0 8px" }}>
                  Which jobs should AI already be doing for you?
                </h3>
                <p style={{ color: "var(--fg-soft)", fontSize: "15px", marginBottom: "10px" }}>
                  Tick what is true this month and we will name the jobs, and what we would fit for each.
                </p>
                <div id="qs">
                  <div className="q" data-job="Bank lines reconciled in your accounts every morning">
                    <span>Month end takes more than two days.</span>
                    <div className="yn">
                      <button type="button" className="yes" aria-pressed="false">
                        Yes
                      </button>
                      <button type="button" className="no" aria-pressed="false">
                        No
                      </button>
                    </div>
                  </div>
                  <div className="q" data-job="A fitted connector between the two systems">
                    <span>Someone re-keys data between two systems every week.</span>
                    <div className="yn">
                      <button type="button" className="yes" aria-pressed="false">
                        Yes
                      </button>
                      <button type="button" className="no" aria-pressed="false">
                        No
                      </button>
                    </div>
                  </div>
                  <div className="q" data-job="An inbox agent that turns emails into tasks with owners">
                    <span>Jobs go into the inbox and get forgotten.</span>
                    <div className="yn">
                      <button type="button" className="yes" aria-pressed="false">
                        Yes
                      </button>
                      <button type="button" className="no" aria-pressed="false">
                        No
                      </button>
                    </div>
                  </div>
                  <div className="q" data-job="A quote drafter working from the last fifty you won">
                    <span>Quotes or proposals are written from scratch each time.</span>
                    <div className="yn">
                      <button type="button" className="yes" aria-pressed="false">
                        Yes
                      </button>
                      <button type="button" className="no" aria-pressed="false">
                        No
                      </button>
                    </div>
                  </div>
                  <div className="q" data-job="A weekly exceptions report, before the customer calls">
                    <span>You hear about problems from customers, not from a report.</span>
                    <div className="yn">
                      <button type="button" className="yes" aria-pressed="false">
                        Yes
                      </button>
                      <button type="button" className="no" aria-pressed="false">
                        No
                      </button>
                    </div>
                  </div>
                  <div className="q" data-job="A management report that writes itself from Xero and your CRM">
                    <span>Management reports are built by hand in a spreadsheet.</span>
                    <div className="yn">
                      <button type="button" className="yes" aria-pressed="false">
                        Yes
                      </button>
                      <button type="button" className="no" aria-pressed="false">
                        No
                      </button>
                    </div>
                  </div>
                  <div className="q" data-job="A credit-control agent that chases, politely, on schedule">
                    <span>Chasing invoices is somebody's job.</span>
                    <div className="yn">
                      <button type="button" className="yes" aria-pressed="false">
                        Yes
                      </button>
                      <button type="button" className="no" aria-pressed="false">
                        No
                      </button>
                    </div>
                  </div>
                  <div className="q" data-job="Your written way of working, loaded into Claude">
                    <span>Only the owner knows how it all fits together.</span>
                    <div className="yn">
                      <button type="button" className="yes" aria-pressed="false">
                        Yes
                      </button>
                      <button type="button" className="no" aria-pressed="false">
                        No
                      </button>
                    </div>
                  </div>
                </div>
                <div className="result">
                  <div className="bar">
                    <i id="scoreBar" />
                  </div>
                  <div className="verdict" id="verdict">
                    Answer the eight and we'll tell you what it suggests.
                    <small id="verdictSub" />
                  </div>
                  <ol className="jobs" id="jobList" hidden />
                  <form className="inline-form" id="scoreForm" hidden>
                    <label className="sr" htmlFor="scoreEmail">
                      Your email
                    </label>{" "}
                    <input id="scoreEmail" type="email" placeholder="you@yourbusiness.co.uk" autoComplete="email" required />{" "}
                    <button className="btn" type="submit">
                      Email me my list
                    </button>
                  </form>
                  <p className="mono" id="scoreDone" hidden />
                  <p id="scoreApply" hidden style={{ fontSize: "15px", color: "var(--fg-soft)" }}>
                    Or skip the email and{" "}
                    <a className="ulink" href="#apply">
                      book a call
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
