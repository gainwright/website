export default function Studio() {
  return (
    <section className="section" id="studio" style={{ paddingBottom: "0" }}>
      <div className="wrap">
        <div className="section-head">
          <div className="mono">
            <b>06</b>The studio
          </div>
          <div>
            <h2 className="display">
              Not consultants. <span className="ac">Wrights</span>.
            </h2>
            <div className="studio">
              <div style={{ display: "grid", gap: "0" }}>
                <p className="lede">
                  A consultant tells you what the ship needs. An agency builds a boat and leaves. A wright fits the thing into the structure
                  you already have, and stays until it holds.
                </p>
                <div className="people team" style={{ marginTop: "28px" }}>
                  <div className="person">
                    <img src="/images/don-demetrius.jpg" alt="Don Demetrius" width="800" height="960" />
                    <div>
                      <div className="mono">Don Demetrius</div>
                      <p>
                        <b>Founder and lead engineer.</b> Fifteen years of shipping software, leading engineering across games, fintech,
                        e-commerce, blockchain and self-development products. Don runs every audit and builds what comes out of it.
                      </p>
                    </div>
                  </div>
                  <div className="person">
                    <img src="/images/ivan-sesar.jpg" alt="Ivan Sesar" width="800" height="960" />
                    <div>
                      <div className="mono">Ivan Sesar</div>
                      <p>
                        <b>Full-stack engineer.</b> More than five years building web applications across fintech, cybersecurity and
                        business software, from the screen people use to the cloud systems behind it. Ivan and Don have built software
                        together before.
                      </p>
                    </div>
                  </div>
                </div>
                <details className="fold">
                  <summary>
                    <span className="k">The name and the numbers</span>
                    <span className="hint" />
                  </summary>
                  <div className="inner">
                    <div className="defn">
                      <div className="word">
                        wright<i>noun</i>
                      </div>
                      <p>
                        A maker or builder of a particular thing: shipwright, millwright, wheelwright, playwright. From the Old English{" "}
                        <em>wryhta</em>, a worker. We took the name because it describes the job.
                      </p>
                    </div>
                    <div className="people" style={{ marginTop: "0" }}>
                      <div className="person">
                        <div className="mono">How many</div>
                        <p>A small number of businesses at a time. Enough to do each one properly.</p>
                      </div>
                    </div>
                    <figure className="plate" style={{ margin: "0" }}>
                      <img
                        src="/images/plate-03-drawing-office.jpg"
                        alt="An empty drawing office with plans pinned to the wall and rooftops through tall windows"
                        width="1800"
                        height="1208"
                      />
                      <figcaption className="plate-cap mono">
                        <span>Plate 03 · The drawing office</span>
                        <span>Where the scoping is drawn up</span>
                      </figcaption>
                    </figure>
                  </div>
                </details>
              </div>
              <div className="plates">
                <figure className="plate" style={{ margin: "0" }}>
                  <img
                    src="/images/plate-02-checking-a-joint.jpg"
                    alt="A wright's hands checking a timber joint for square with a steel try-square"
                    width="1600"
                    height="1195"
                  />
                  <figcaption className="plate-cap mono">
                    <span>Plate 02 · Checking a joint for square</span>
                    <span>Fitted work · built to fit what you have</span>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="band" aria-label="Workshop film">
        <video autoPlay muted loop playsInline preload="metadata" poster="/video/workshop-poster.jpg" aria-hidden="true">
          <source src="/video/workshop.mp4" type="video/mp4" />
        </video>
        <div className="wrap">
          <div>
            <div className="mono" style={{ marginBottom: "22px" }}>
              <b>The standard</b>What we hold ourselves to
            </div>
            <p className="quote">
              <span className="qm">“</span>A wright does not advise on the ship. A wright builds it so it floats.
              <span className="qm">”</span>
            </p>
          </div>
          <p className="mini">
            Nothing ships from here that we would not run in our own business. If it is not saving you hours you can count, we have not
            finished.
          </p>
        </div>
      </div>
    </section>
  );
}
