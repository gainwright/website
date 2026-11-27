import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Privacy · Gainwright" };

export default function Privacy() {
  return (
    <LegalPage label="Privacy" title="What we do with your data." updated="22 November 2026">
      <h2>The short version</h2>
      <p>
        Gainwright runs this site at gainwright.ai. We do not set tracking cookies or sell anything to advertisers. We count
        visits with Cloudflare Web Analytics, which uses no cookies. If you send us a form, email us or book a call, we keep what you sent so we can reply and remember the conversation.
      </p>

      <h2>Who we are</h2>
      <p>
        Gainwright is operated by Don Demetrius, based in the United Kingdom. For any privacy question, email hello@gainwright.ai.
      </p>

      <h2>What we collect on the website</h2>
      <p>
        Reading the site does not require you to give us any personal data. We count page views with Cloudflare Web Analytics, which sets
        no cookies, does not follow you across other sites and does not build a profile of you. We do not set marketing cookies. The site remembers your choice of light or dark version in your own browser, and nowhere else.
      </p>
      <p>
        The site is served through Cloudflare from a server hosted with Hetzner. Both process limited request data, such as your IP address,
        browser version and the page you asked for, for security and to deliver the page. The typeface is loaded from Google Fonts, so your
        browser also makes a request to Google when the page loads.
      </p>

      <h2>What we collect when you contact us</h2>
      <p>
        The site has two forms: the call booking questions and the scorecard. Each sends us an email containing what you typed,
        which is typically your name, email address, business, and anything you tell us about it. We use it to reply, to send what you
        asked for and to arrange a call. We do not add you to a mailing list unless you ask us to.
      </p>
      <p>
        To stop the forms being abused, the server keeps a count of recent submissions against your IP address. That count is held in
        memory for ten minutes and is never written to disk. When the scorecard emails you your list, the server also remembers the
        address it sent to for a day, in memory only, so that nobody can use the form to email you repeatedly.
      </p>
      <p>
        Emails are stored by our mail provider. Call bookings are handled by Calendly, which has its own privacy policy. When you finish the booking questions we pass your name and email address to Calendly, so you do not have to type them twice. Your answers stay with us.
      </p>

      <h2>How long we keep things</h2>
      <p>
        We keep correspondence for as long as it is useful for a current or possible engagement, and for a reasonable period afterwards for
        record keeping and tax. You can ask us to delete it at any time.
      </p>

      <h2>Your rights under UK GDPR</h2>
      <ul>
        <li>You can ask what data we hold about you.</li>
        <li>You can ask us to correct it if it is wrong.</li>
        <li>You can ask us to delete it.</li>
        <li>You can complain to the UK Information Commissioner's Office if you think we have mishandled your data.</li>
      </ul>
      <p>To use any of these rights, email hello@gainwright.ai. We reply within 30 days.</p>

      <h2>Changes</h2>
      <p>If we change how we handle data, we update this page and the date at the top.</p>
    </LegalPage>
  );
}
