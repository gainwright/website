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
      <section className="section contact" style={{ borderTop: "0" }}>
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
              <p className="lede" style={{ marginTop: "24px" }}>
                Answer seven short questions, then pick a time. It takes about two minutes.
              </p>
              <p className="lede" style={{ marginTop: "14px" }}>
                We ask first so the call starts on your business, not on introductions. You leave with a shortlist of three
                jobs, in order, and a straight answer on whether it is worth going further.
              </p>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
      <BookingInteractions />
    </main>
  );
}
