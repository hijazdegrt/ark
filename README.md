# ARK Global Ventures website

Next.js 16 (App Router, Cache Components) · TypeScript · Tailwind CSS v4 · lucide-react. No animation library.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
npm run lint
```

Requires Node.js 20+ (built and tested with Node 26).

## Structure

| Path | Purpose |
| --- | --- |
| `src/app/*` | Pages: `/`, `/services`, `/who-we-help`, `/our-approach`, `/about`, `/contact`, `/privacy`, `/terms`, plus `sitemap.xml`, `robots.txt`, `/api/contact` |
| `src/lib/site.ts` | Company config. **Contact details live here** (all `null` until confirmed) |
| `src/lib/content.ts` | Services, challenges, audiences, process copy |
| `src/components/` | Header, Footer, Button/Section/CTA primitives, hero SVG, contact form |
| `src/app/globals.css` | Design tokens (brand palette, type, container, motion) |
| `public/brand/` | Logo set (generated, see below) |

## Brand assets

Palette: Oxford Blue `#192338`, Space Cadet `#1E2E4F`, YInMn Blue `#31487A`, Jordy Blue `#8FB3E2`, Lavender `#D9E1F1`.
The teal accent `#1FB8A6` is sampled from the logo arrow.

`scripts/build-logo.mjs` rebuilds `public/brand/` from `source-logo.jpg` (2x upscale, background removed, transparent PNG):
`ark-logo.png`, `ark-mark.png`, `ark-logo-reversed.png` (wordmark in white for dark backgrounds; mark untouched), `ark-logo-on-white.png`, and `src/app/icon.png`.
`scripts/build-og.mjs` builds `public/opengraph-image.png`.
**Recommended:** supply the original vector (SVG/AI) logo; the PNGs are enhanced from a 1024px JPEG.

## Environment variables

Copy `.env.example` to `.env.local`.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Production URL for canonical links, sitemap, Open Graph |
| `CONTACT_WEBHOOK_URL` | HTTPS endpoint receiving the enquiry as JSON (server-side only) |
| `CONTACT_WEBHOOK_TOKEN` | Optional bearer token for that endpoint |

## Contact form integration

`/api/contact` validates input server-side, drops honeypot submissions and forwards the JSON
`{ name, email, company, title, interest, message, source }` to `CONTACT_WEBHOOK_URL`.
Point it at Formspree, Make/Zapier/n8n, or your own mailer. **Until it is set the form reports honestly that the message was not sent** (HTTP 503).
Consider adding rate limiting or a CAPTCHA (e.g. Cloudflare Turnstile) before launch.

## Deploy (Vercel)

1. Push the project to a Git repository and import it in Vercel (framework auto-detected).
2. Add the environment variables above.
3. Set the production domain, then redeploy.

Nothing has been published, and no domain or paid service has been configured.

## Information still required

- Production domain
- Business email, phone, office address, LinkedIn URL (`src/lib/site.ts`)
- Confirmation of services ARK actually delivers (including whether custom development or ongoing support is offered)
- Leadership/team, founding details, locations, certifications, partnerships (About page placeholders)
- Reviewed Privacy Policy and Terms of Use (current copy is a **placeholder, not legal advice**)
- Vector logo; genuine testimonials/case studies if social proof is wanted
- Form delivery provider
