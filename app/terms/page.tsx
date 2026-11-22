import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Terms · Gainwright" };

export default function Terms() {
  return (
    <LegalPage label="Terms" title="Terms of use." updated="22 November 2026">
      <h2>The short version</h2>
      <p>
        gainwright.ai is a marketing site for Gainwright. The content is for information only and does not itself form a contract. If we
        work together, the work is governed by a separate written agreement.
      </p>

      <h2>About Gainwright</h2>
      <p>Gainwright is operated by Don Demetrius, based in the United Kingdom. Contact: hello@gainwright.ai.</p>

      <h2>Use of this website</h2>
      <p>
        You are welcome to read, share and link to anything on this site. You may not republish substantial parts of it as your own, copy
        the site systematically, or use it for anything unlawful.
      </p>

      <h2>No professional advice</h2>
      <p>
        Anything written here is general information, not advice. The calculator and the scorecard give rough figures from the numbers you
        enter. Decisions about AI, security and your business should be made with someone who has looked at your situation.
      </p>

      <h2>Engagements and prices</h2>
      <p>
        When we agree to work together, the scope, fees, timings, ownership of the work, confidentiality and liability are set out in a
        written agreement signed by both sides. That agreement, not this page, governs the work.
      </p>
      <p>
        Prices shown on this site are a guide and may change. The price for any piece of work is the one in your signed agreement.
      </p>

      <h2>Third-party links</h2>
      <p>
        This site links to services such as LinkedIn and Calendly. We do not control those sites and are not responsible for their content
        or their practices.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The text, images, layout, code and brand marks on gainwright.ai belong to Gainwright unless credited otherwise. The research we
        cite belongs to the organisations that published it.
      </p>

      <h2>No warranty</h2>
      <p>
        We do our best to keep this site accurate and online, but it is provided as it is. We do not guarantee that it is always available
        or free of errors. Nothing in these terms limits any liability that cannot lawfully be limited under UK law.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of England and Wales. The courts of England and Wales have non-exclusive jurisdiction over any
        dispute arising from them.
      </p>

      <h2>Changes</h2>
      <p>We may update these terms. The version that applies is the one published here when you read the site.</p>
    </LegalPage>
  );
}
