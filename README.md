# Gainwright website

Single-file marketing site for gainwright.ai, plus the first guide and brand assets.

- `index.html` — the full website in one file. Images, video, 3D model and scripts are embedded; the only external fetch is Google Fonts.
- `Gainwright-Guide-01-The-owners-guide.pdf` — Guide 01, offered free in section 07 of the site.
- `brand/` — mark, blueprint mark, lockup, favicon, and dotted wordmark (dark and light).
- `READ-ME-FIRST.txt` — review notes: what to check and what still needs sign-off before launch.

## Hosting

Served by Coolify on the Hetzner box, same as donlabs.ai. Pushes to `main`
trigger a redeploy through a GitHub webhook into Coolify (project "Gainwright",
app "gainwright-website", static build pack). DNS and TLS termination are on
Cloudflare, proxied, with SSL set to Full (strict); the box holds its own
Let's Encrypt certificates.
The forms on the page confirm locally but are not yet wired to send anywhere.
