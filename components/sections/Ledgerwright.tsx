export default function Ledgerwright() {
  return (
    <section className="section" id="ledgerwright">
      <div className="wrap">
        <div className="section-head">
          <div className="mono">
            <b>03</b>Tools · Ledgerwright
          </div>
          <div>
            <h2 className="display">
              Reconciliation for Xero, fitted to your <span className="ac">business</span>.
            </h2>
            <div className="lw">
              <div className="lw-copy">
                <div style={{ display: "grid", gap: "18px" }}>
                  <p className="lede">
                    Ledgerwright connects to your inboxes, picks up the invoices and receipts that arrive by email, and gives your team one
                    screen to turn them into draft bills and invoices in Xero.
                  </p>
                  <p className="lede">
                    It creates drafts. Your team checks and approves them in Xero, exactly as they do now, in a fraction of the time.
                  </p>
                </div>
                <div className="plate" aria-label="Figure 02: Ledgerwright reconciling a morning's bank lines">
                  <div className="ledger" id="ledger">
                    <div className="lh">
                      <span>Date</span>
                      <span>Bank line</span>
                      <span style={{ textAlign: "right" }}>Amount</span>
                      <span>Ledgerwright</span>
                    </div>
                    <div className="lr">
                      <span>03 Oct</span>
                      <span>STRIPE PAYOUT</span>
                      <span className="amt">2,418.00</span>
                      <span className="m">
                        <span className="tick">
                          <svg viewBox="0 0 10 10">
                            <path d="M1.5 5.5 L4 8 L8.5 2.5" fill="none" stroke="var(--accent-fg)" strokeWidth="1.6" />
                          </svg>
                        </span>
                        <span className="txt">Matched INV-1042, INV-1043</span>
                      </span>
                    </div>
                    <div className="lr">
                      <span>03 Oct</span>
                      <span>BT GROUP PLC</span>
                      <span className="amt">86.40</span>
                      <span className="m">
                        <span className="tick">
                          <svg viewBox="0 0 10 10">
                            <path d="M1.5 5.5 L4 8 L8.5 2.5" fill="none" stroke="var(--accent-fg)" strokeWidth="1.6" />
                          </svg>
                        </span>
                        <span className="txt">Bill · Telephone · rule</span>
                      </span>
                    </div>
                    <div className="lr">
                      <span>04 Oct</span>
                      <span>AMZN MKTP UK</span>
                      <span className="amt">49.99</span>
                      <span className="m">
                        <span className="tick">
                          <svg viewBox="0 0 10 10">
                            <path d="M1.5 5.5 L4 8 L8.5 2.5" fill="none" stroke="var(--accent-fg)" strokeWidth="1.6" />
                          </svg>
                        </span>
                        <span className="txt">For you · no bill found</span>
                      </span>
                    </div>
                    <div className="lr">
                      <span>04 Oct</span>
                      <span>HMRC VAT</span>
                      <span className="amt">6,210.00</span>
                      <span className="m">
                        <span className="tick">
                          <svg viewBox="0 0 10 10">
                            <path d="M1.5 5.5 L4 8 L8.5 2.5" fill="none" stroke="var(--accent-fg)" strokeWidth="1.6" />
                          </svg>
                        </span>
                        <span className="txt">VAT liability · Q3</span>
                      </span>
                    </div>
                    <div className="lr">
                      <span>05 Oct</span>
                      <span>DD · INSURANCE</span>
                      <span className="amt">212.50</span>
                      <span className="m">
                        <span className="tick">
                          <svg viewBox="0 0 10 10">
                            <path d="M1.5 5.5 L4 8 L8.5 2.5" fill="none" stroke="var(--accent-fg)" strokeWidth="1.6" />
                          </svg>
                        </span>
                        <span className="txt">Bill · recurring · rule</span>
                      </span>
                    </div>
                    <div className="lr">
                      <span>05 Oct</span>
                      <span>TRANSFER FROM SAVINGS</span>
                      <span className="amt">15,000.00</span>
                      <span className="m">
                        <span className="tick">
                          <svg viewBox="0 0 10 10">
                            <path d="M1.5 5.5 L4 8 L8.5 2.5" fill="none" stroke="var(--accent-fg)" strokeWidth="1.6" />
                          </svg>
                        </span>
                        <span className="txt">Bank transfer</span>
                      </span>
                    </div>
                    <div className="lr">
                      <span>06 Oct</span>
                      <span>HOLM &amp; CO</span>
                      <span className="amt">3,600.00</span>
                      <span className="m">
                        <span className="tick">
                          <svg viewBox="0 0 10 10">
                            <path d="M1.5 5.5 L4 8 L8.5 2.5" fill="none" stroke="var(--accent-fg)" strokeWidth="1.6" />
                          </svg>
                        </span>
                        <span className="txt">Matched INV-1047</span>
                      </span>
                    </div>
                    <div className="lr">
                      <span>06 Oct</span>
                      <span>PAYROLL</span>
                      <span className="amt">18,432.11</span>
                      <span className="m">
                        <span className="tick">
                          <svg viewBox="0 0 10 10">
                            <path d="M1.5 5.5 L4 8 L8.5 2.5" fill="none" stroke="var(--accent-fg)" strokeWidth="1.6" />
                          </svg>
                        </span>
                        <span className="txt">Payroll journal</span>
                      </span>
                    </div>
                    <div className="sum">
                      <span id="sumLeft">
                        31 lines · <b>30</b> matched · 1 for you
                      </span>
                      <span id="sumRight">Done in 4 min 12 s</span>
                    </div>
                  </div>
                  <div className="plate-cap mono">
                    <span>Fig. 02 · Ledgerwright, one morning's bank lines</span>
                    <span>Tools · illustrative run</span>
                  </div>
                </div>
                <div className="spec">
                  <div className="row">
                    <div className="mono">Our guarantee</div>
                    <p>
                      We start with a 45 minute onboarding call where we set up your accounts and connect your inboxes and Xero together. If
                      Ledgerwright isn't reconciling within 30 days of that call, we refund your setup fee in full.
                    </p>
                  </div>
                  <div className="row">
                    <div className="mono">What you own</div>
                    <p>
                      It runs on your server, with your database and your accounts. If you ever stop the care plan, it keeps running and it
                      stays yours.
                    </p>
                  </div>
                </div>
                <details className="fold" style={{ marginTop: "0" }}>
                  <summary>
                    <span className="k">What it does, and what it looks like running</span>
                    <span className="hint" />
                  </summary>
                  <div className="inner">
                    <ul className="does">
                      <li>
                        <div className="mono">01</div>
                        <div>
                          <strong>Reconciles bank lines against invoices and bills in Xero.</strong>
                          <p>Payouts, payments in, direct debits, transfers. In the order your bookkeeper would do it.</p>
                        </div>
                      </li>
                      <li>
                        <div className="mono">02</div>
                        <div>
                          <strong>Codes recurring spend to rules you set once.</strong>
                          <p>Telephone, insurance, software, rent. Tell it once; it remembers.</p>
                        </div>
                      </li>
                      <li>
                        <div className="mono">03</div>
                        <div>
                          <strong>Flags the handful that need a human, with the reason.</strong>
                          <p>No bill found, an amount that doesn't agree, a new supplier. Everything else is done.</p>
                        </div>
                      </li>
                      <li>
                        <div className="mono">04</div>
                        <div>
                          <strong>Leaves a trail your accountant can follow.</strong>
                          <p>Every match is noted. Nothing is hidden in a black box.</p>
                        </div>
                      </li>
                    </ul>
                    <figure className="plate" style={{ margin: "0" }}>
                      <img
                        src="/images/plate-04-tuesday-nine-oclock.jpg"
                        alt="A tidy finance desk at nine in the morning with a closed ledger, a cup of tea and a closed laptop"
                        width="1800"
                        height="1013"
                      />
                      <figcaption className="plate-cap mono">
                        <span>Plate 04 · Tuesday, nine o'clock</span>
                        <span>Ledgerwright, running</span>
                      </figcaption>
                    </figure>
                    <p style={{ color: "var(--fg-soft)" }}>
                      Ledgerwright is the first tool from the workshop. Others are on the bench. Each one is fixed-price, installed by us,
                      and supported for ninety days.
                    </p>
                  </div>
                </details>
              </div>
              <aside className="price-card" aria-label="Ledgerwright: what it costs">
                <div className="mono">
                  <b>What it costs</b>Ledgerwright for Xero
                </div>
                <div className="price">
                  £4,999
                  <small style={{ lineHeight: "1.45" }}>
                    Setup, fixed. This is our founding price for our first three clients. After that it is £6,999.
                  </small>
                </div>
                <div className="spec">
                  <div className="row">
                    <div className="mono">Running costs</div>
                    <p>
                      Ledgerwright runs on your own accounts for hosting, your database and the AI service, and you pay those providers
                      directly. For a business your size that is typically about £40 a month.
                    </p>
                  </div>
                  <div className="row">
                    <div className="mono">Care plan</div>
                    <p>
                      £400 a month. Fixes, updates whenever Xero or the AI models change, and small improvements as your process changes.
                      Cancel whenever you like.
                    </p>
                  </div>
                </div>
                <div className="ctas">
                  <a className="btn ac" href="#apply" data-intent="ledgerwright-call">
                    Talk to us first
                  </a>{" "}
                  <a className="btn ghost" href="#apply" data-intent="ledgerwright">
                    Buy Ledgerwright
                  </a>
                </div>
                <p className="fine">
                  Buying takes you to a short form so we can check Xero is set up the way Ledgerwright expects. We confirm by return and
                  book the onboarding call.
                </p>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
