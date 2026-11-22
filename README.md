# Gainwright website

Marketing site for gainwright.ai: a Next.js (App Router, TypeScript) app, plus the first guide and brand assets.

- `app/page.tsx` puts the page together from the section components in `components/sections/` (one file per numbered section), with `components/Header.tsx` and `components/Footer.tsx`. Edit copy there.
- `app/globals.css` holds all the styles.
- `lib/site.js` is the page's interactive behaviour (theme, menu, calculator, scorecard, forms, ledger demo, 3D model), carried over from the original single-file site. `components/SiteInteractions.tsx` starts it.
- `app/api/contact/route.ts` receives the two forms (the First Sketch request and the scorecard) and emails each submission to `hello@gainwright.ai`.
- `public/` holds the images, the workshop film, `brand/` (mark, blueprint mark, lockup, favicon, dotted wordmark).
- `READ-ME-FIRST.txt` is the review note from before launch.

## Running it locally

```
npm install
npm run dev
```

Then open http://localhost:3000. Without mail settings, form submissions are printed in the terminal instead of being sent.

## Form email

The forms send through SMTP. Set these environment variables (see `.env.example`; use `.env.local` locally, the app's environment variables in Coolify for production):

- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`: the sending account. For Google Workspace: `smtp.gmail.com`, `465`, the mailbox address, and an app password.
- `CONTACT_TO` (optional, default `hello@gainwright.ai`) and `CONTACT_FROM` (optional).

In production, if these are missing the forms show their "could not send" message and ask the visitor to email instead.

## Hosting

Served by Coolify on the Hetzner box, same as donlabs.ai. Pushes to `main`
trigger a redeploy through a GitHub webhook into Coolify (project "Gainwright",
app "gainwright-website", Dockerfile build pack, port 3000). DNS and TLS termination are on
Cloudflare, proxied, with SSL set to Full (strict); the box holds its own
Let's Encrypt certificates.
