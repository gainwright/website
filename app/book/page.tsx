import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import BookingInteractions from "@/components/BookingInteractions";

export const metadata: Metadata = {
  title: "Book your 20 minute call · Gainwright",
  description: "A free 20 minute call with Gainwright. Answer seven short questions, then pick a time.",
};

/** The booking questions on a page of their own, for sending to people directly. */
export default function Book() {
  return (
    <main>
      <section className="section" style={{ borderTop: "0" }}>
        <div className="wrap">
          <div className="section-head">
            <div className="mono">
              <b>Free</b>20 minutes · video call
              <a className="ulink" href="/">
                gainwright.ai
              </a>
            </div>
            <div>
              <h1 className="display" style={{ fontSize: "clamp(34px,4.4vw,62px)" }}>
                Book your 20 minute <span className="ac">call</span>.
              </h1>
              <div className="book-intro">
                <p className="lede">
                  Answer seven short questions, then pick a time. It takes about two minutes. We ask these first so the call
                  starts on your business, not on introductions.
                </p>
                <p className="lede">
                  By the time we speak we have read your answers and looked at the systems you use, so the 20 minutes go on the
                  jobs that are eating into your week and what each one is worth.
                </p>
                <p className="lede">
                  You leave with a rough figure for what your top job is costing you each year, and a straight answer on whether
                  it is worth going any further.
                </p>
              </div>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
      <BookingInteractions />
    </main>
  );
}
