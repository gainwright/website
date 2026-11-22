export default function Guide() {
  return (
    <section className="section" id="guide">
      <div className="wrap">
        <div className="section-head">
          <div className="mono">
            <b>07</b>Written up · free
          </div>
          <div>
            <h2 className="display">
              The owner's guide to AI that earns its <span className="ac">keep</span>.
            </h2>
            <div className="guide">
              <div style={{ display: "grid", gap: "20px" }}>
                <p className="lede">
                  Ten jobs AI should already be doing in an established business, what each costs you now, what each saves, and the five
                  questions that tell a fitting from a demo. Eleven pages, for owners, not IT.
                </p>
                <form className="inline-form" id="guideForm" style={{ maxWidth: "480px" }}>
                  <label className="sr" htmlFor="guideEmail">
                    Your email
                  </label>{" "}
                  <input id="guideEmail" type="email" placeholder="you@yourbusiness.co.uk" autoComplete="email" required />{" "}
                  <button className="btn" type="submit">
                    Send me the guide
                  </button>
                </form>
                <p className="mono ok" id="guideDone" hidden />
                <p style={{ color: "var(--muted)", fontSize: "14px" }}>Nothing else lands in your inbox unless you ask.</p>
                <details className="fold" style={{ marginTop: "4px" }}>
                  <summary>
                    <span className="k">What is in it</span>
                    <span className="hint" />
                  </summary>
                  <div className="inner">
                    <ul>
                      <li>The ten jobs, in payback order, with the hours.</li>
                      <li>The five questions to ask anyone who says they "do AI".</li>
                      <li>What a written way of working is, and why it is the whole job.</li>
                      <li>One job fitted step by step, including what went wrong.</li>
                      <li>A scorecard to fill in with a pen.</li>
                    </ul>
                  </div>
                </details>
              </div>
              <figure className="plate" style={{ margin: "0", maxWidth: "360px" }}>
                <img
                  src="/images/guide-01-cover.jpg"
                  alt="A slim printed booklet with a cobalt spine stripe standing on a workshop bench"
                  width="1400"
                  height="1750"
                />
                <figcaption className="plate-cap mono">
                  <span>Guide 01 · The owner's guide</span>
                  <span>Free · by email</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
