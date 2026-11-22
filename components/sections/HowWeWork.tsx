export default function HowWeWork() {
  return (
    <section className="section" id="how">
      <div className="wrap">
        <div className="section-head">
          <div className="mono">
            <b>06</b>How we work
          </div>
          <div>
            <h2 className="display">
              First Sketch to fitted in about <span className="ac">eight weeks</span>.
            </h2>
            <p className="lede" style={{ marginTop: "24px" }}>
              A typical job, with a three day Blueprint. One fixed price for the Blueprint and one for the build, each agreed before we start.
            </p>
            <div className="timeline">
              <div className="tl-head">
                <div className="mono">Stage</div>
                <div className="tl-scale">
                  <span>Wk 0</span>
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                  <span>6</span>
                  <span>7</span>
                  <span>8</span>
                </div>
              </div>
              <div className="tl-row">
                <div className="t">
                  <div className="mono">01</div>
                  <div>
                    <h3>First Sketch and Blueprint</h3>
                    <p>A free call, then time inside the business and a written report.</p>
                  </div>
                </div>
                <div className="tl-track">
                  <div className="tl-bar" style={{ left: "0", width: "25%" }}>
                    <span>2 weeks</span>
                    <span>Wk 0–2</span>
                  </div>
                </div>
              </div>
              <div className="tl-row">
                <div className="t">
                  <div className="mono">02</div>
                  <div>
                    <h3>Decide</h3>
                    <p>One fixed price, in the report. Go ahead and part of the Blueprint fee comes off it.</p>
                  </div>
                </div>
                <div className="tl-track">
                  <div className="tl-bar n" style={{ left: "25%", width: "12.5%" }}>
                    <span>1 week</span>
                    <span>Wk 2–3</span>
                  </div>
                </div>
              </div>
              <div className="tl-row">
                <div className="t">
                  <div className="mono">03</div>
                  <div>
                    <h3>Build</h3>
                    <p>Into your systems, on your real data, with your team in the room.</p>
                  </div>
                </div>
                <div className="tl-track">
                  <div className="tl-bar" style={{ left: "37.5%", width: "43.75%" }}>
                    <span>3 to 4 weeks</span>
                    <span>Wk 3–7</span>
                  </div>
                </div>
              </div>
              <div className="tl-row">
                <div className="t">
                  <div className="mono">04</div>
                  <div>
                    <h3>Fit</h3>
                    <p>Installed, tested against last month, your people trained.</p>
                  </div>
                </div>
                <div className="tl-track">
                  <div className="tl-bar n" style={{ left: "81.25%", width: "18.75%" }}>
                    <span>1 week</span>
                    <span>Wk 7–8</span>
                  </div>
                </div>
              </div>
              <div className="tl-row">
                <div className="t">
                  <div className="mono">05</div>
                  <div>
                    <h3>Keep</h3>
                    <p>Ninety days of support, then a visit twice a year to see what to build next.</p>
                  </div>
                </div>
                <div className="tl-track">
                  <div className="tl-bar keep" style={{ left: "0", width: "100%" }}>
                    <span>90 days after fit</span>
                    <span>Included</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
