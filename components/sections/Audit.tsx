export default function Audit() {
  return (
    <section className="section" id="audit">
      <div className="wrap">
        <div className="section-head">
          <div className="mono">
            <b>03</b>The Blueprint
          </div>
          <div>
            <h2 className="display">
              We spend days inside the business before we quote for <span className="ac">anything</span>.
            </h2>
            <div className="lw">
              <div className="lw-copy">
                <div style={{ display: "grid", gap: "18px" }}>
                  <p className="lede">
                    <b>We don't run on vibes. We run on blueprints.</b>
                  </p>
                  <p className="lede">
                    The Blueprint is our audit. It is where we find out how the work really gets done. We sit with each team, watch the jobs that eat the week,
                    and measure them. You get a written report that says where the hours go, what each job costs you, and what we would
                    build to take it away.
                  </p>
                  <p className="lede">
                    The report is yours whatever you decide. Ask us to build it and part of the Blueprint fee comes off the price. Or take
                    the report and do it yourselves.
                  </p>
                </div>
                <div className="spec">
                  <div className="row">
                    <div className="mono">On site</div>
                    <p>
                      A day or more with each team that matters: finance, operations, sales, whoever carries the admin. We watch the work
                      being done instead of asking how it is meant to be done.
                    </p>
                  </div>
                  <div className="row">
                    <div className="mono">Between visits</div>
                    <p>
                      The fee covers more than the days you see us. We go through your systems and the tools you already pay for, work out
                      what can be done with each, and test the ideas before they reach the report.
                    </p>
                  </div>
                  <div className="row">
                    <div className="mono">The report</div>
                    <p>
                      Every job we would change, in payback order, with the hours and the cost in your own numbers. For each one: what we
                      would build, how long it takes, and a fixed price.
                    </p>
                  </div>
                </div>
                <details className="fold" style={{ marginTop: "0" }}>
                  <summary>
                    <span className="k">Everything the Blueprint covers</span>
                    <span className="hint" />
                  </summary>
                  <div className="inner">
                    <ul className="does">
                      <li>
                        <div className="mono">01</div>
                        <div>
                          <strong>How the work gets done today.</strong>
                          <p>Each process followed from start to finish, with the person who does it, and timed.</p>
                        </div>
                      </li>
                      <li>
                        <div className="mono">02</div>
                        <div>
                          <strong>The systems you run and how they connect.</strong>
                          <p>Accounts, CRM, inboxes, spreadsheets, and every place someone copies from one into another.</p>
                        </div>
                      </li>
                      <li>
                        <div className="mono">03</div>
                        <div>
                          <strong>What AI your people already use, and how safely.</strong>
                          <p>Who is using what, on which accounts, and what company or customer data is going into it.</p>
                        </div>
                      </li>
                      <li>
                        <div className="mono">04</div>
                        <div>
                          <strong>Where the time and money go.</strong>
                          <p>Hours a week for each job, turned into a yearly cost using your own rates.</p>
                        </div>
                      </li>
                      <li>
                        <div className="mono">05</div>
                        <div>
                          <strong>What to do about it, in order.</strong>
                          <p>The jobs worth fixing first, what we would build for each, and what your team would need to learn.</p>
                        </div>
                      </li>
                      <li>
                        <div className="mono">06</div>
                        <div>
                          <strong>A fixed price for the build.</strong>
                          <p>Quoted in the report, so the next decision is yours and you have the figures to make it.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>
              <aside className="price-card" aria-label="The Blueprint: how it is sized">
                <div className="mono">
                  <b>How it is sized</b>The Blueprint
                </div>
                <div className="spec">
                  <div className="row">
                    <div className="mono">Size</div>
                    <p>Up to three days in the business, or up to five when there are more teams to cover. Many start with one team and work through the rest.</p>
                  </div>
                  <div className="row">
                    <div className="mono">Price</div>
                    <p>One fixed fee, agreed on the First Sketch call before anything starts.</p>
                  </div>
                  <div className="row">
                    <div className="mono">Credited</div>
                    <p>Part of the fee comes off the build if you ask us to do the work.</p>
                  </div>
                  <div className="row">
                    <div className="mono">Yours</div>
                    <p>The report is yours to keep and to act on, with us or without us.</p>
                  </div>
                </div>
                <div className="ctas">
                  <a className="btn ac" href="#apply">
                    Book your First Sketch
                  </a>
                </div>
                <p className="fine">
                  Every Blueprint starts with the First Sketch, a free 30 minute call. That is where we agree which teams to cover and which size fits.
                </p>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
