import type { ReactNode } from "react";

/** Shared frame for the privacy and terms pages: a plain page with a way back to the site. */
export default function LegalPage({ label, title, updated, children }: { label: string; title: string; updated: string; children: ReactNode }) {
  return (
    <main>
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="mono">
              <b>{label}</b>
              <a className="ulink" href="/">
                Back to gainwright.ai
              </a>
            </div>
            <div className="legal">
              <h1 className="display">{title}</h1>
              <p className="mono">Last updated {updated}</p>
              {children}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
