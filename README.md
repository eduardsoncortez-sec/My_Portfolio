# Eduardson Cortez — Personal Portfolio

A responsive Next.js App Router, TypeScript, and Tailwind CSS portfolio based on the supplied Design 3: midnight navy, warm gold, editorial headings, generous spacing, and real project screenshots.

## Run locally

Requires Node.js 20.9 or newer.

```powershell
npm.cmd ci
npm.cmd run dev
```

Open **http://localhost:3107**. Port 3107 avoids the existing application on port 3000. On macOS/Linux, use `npm` instead of `npm.cmd`.

```powershell
npm.cmd run typecheck
npm.cmd run build
npm.cmd start
```

Stop the development server before starting production on the same port.

## Live deployment

- Website: https://eduardson-cortez.vercel.app
- GitHub: https://github.com/eduardsoncortez-sec/My_Portfolio
- Vercel project: `eduardson/my-portfolio`, connected to the `main` branch.
- Production configuration: `SITE_URL=https://eduardson-cortez.vercel.app`.

Pushes to `main` trigger a new production deployment. Keep `SITE_URL` in the Production environment only so preview builds remain unindexed. If the public domain changes, update this variable and redeploy.

## Edit the portfolio

- `src/content/portfolio.ts`: profile details, project URLs, services, skill lists, and certifications.
- `src/content/project-details.ts`: purpose, features, development approach, and demo notes for all five project detail pages.
- `src/components/inquiry-form.tsx`: service selection, project brief, and email-draft review flow.
- `src/app/page.tsx`: hero, About copy, reusable project cards, and section composition.
- `src/app/globals.css`: palette, typography, spacing, hover effects, and responsive breakpoints.
- `src/app/layout.tsx`: page title, description, and social sharing metadata.
- `public/images/`: project screenshots, portrait, and illustrative workshop image.

There are five featured projects, eight services, About and skills sections, two NC II certification cards, a coming-soon SIGLA Power & Security Services banner, and direct email/Facebook contact links. No backend, database, contact-form service, or environment secrets are required.

## Replace temporary assets

The hero uses a transparent cutout derived from the owner's graduation photo with gold-tinted glasses at `/public/images/eduardson-graduation-cutout.png`. The original is retained at `/public/images/eduardson-graduation-glasses.jpg`. ImageGen removed the studio background; CSS provides the navy-and-gold composition, and Next.js serves optimized sizes. `profile.portrait` can point to a replacement asset; update its dimensions in the hero image component when replacing it.

Certification cards display the supplied qualifications without invented certificate scans, certificate numbers, dates, or license claims. To add a scan, place it in `public/images/` and set the corresponding `certifications[].image` path in `src/content/portfolio.ts`; the card will expose a View certificate link.

The computer-servicing workbench image is an AI-generated illustration, labeled as illustrative on the page. See `docs/ASSETS.md` for asset sources and exact generation prompts.

## Verification

- Production compilation, static prerendering, and TypeScript checks passed.
- Browser checked at desktop, 768px tablet, 390px mobile, and 320px mobile widths; no horizontal page overflow.
- All five project destinations and internal section anchors checked against the supplied links.
- Mobile menu open/close, navigation selection, and Escape dismissal verified.
- Email copy feedback and clipboard content verified; graceful manual-copy instructions are provided if clipboard access fails.
- All seven displayed images loaded; no browser console errors observed.
- Email and Facebook hrefs verified without sending messages.

Preview images are in `docs/desktop-preview.jpg` and `docs/mobile-preview.jpg`.

## Project details and inquiries

Each project now has a `/projects/[slug]` detail page, with purpose, features, approach, a full screenshot, and a live/demo link. The homepage keeps direct live links alongside the new detail links. The hero includes two subtle decorative project mockups.

`/start-a-project` guides visitors through service selection, project details, and review. Required fields are validated and keyboard focus moves to errors. The final action opens an email draft; visitors send it from their own email app. Copy inquiry is available as a fallback. No backend sends messages, and form information is not persisted by the site.

The owner confirmed permission to publicly feature both UPCM projects, including screenshots and demo links. Demo and prototype labels remain accurate.

The original portrait has been supplied and added. Certificate scans and real computer-servicing photos are still pending from the owner. To replace the workshop illustration, update `profile.servicingImage`, `profile.servicingImageAlt`, and set `profile.servicingImageIsIllustration` to `false`. Add more real images to `workPhotos` using `{ src, alt, caption }`; the gallery appears automatically. Certificate images use `certifications[].image`.

## SEO and deployment configuration

Set `SITE_URL` in the hosting provider's Production environment to the public origin, then rebuild. This configures canonical URLs, social-image URLs, sitemap entries, and indexing. For local SEO checks, copy `.env.example` to `.env.local` and set the same value. With no public origin configured, the local preview is intentionally non-indexable and has an empty sitemap.

## Updated verification

```powershell
npm.cmd test
npm.cmd run typecheck
npm.cmd run build
node --experimental-strip-types scripts/check-project-links.mjs
# With a production server running on port 3108:
node --experimental-strip-types scripts/check-local-build.mjs
```

See `docs/QUALITY-CHECKS.md` for the latest results and scope, and `docs/production-check.json` for HTTP and estimated payload measurements. Updated desktop proofs: `docs/hero-updated.jpg` and `docs/project-detail.jpg`.

## Framework references

[Next.js installation](https://nextjs.org/docs/app/getting-started/installation) and [Tailwind CSS for Next.js](https://tailwindcss.com/docs/installation/framework-guides/nextjs). Installed Next.js guides also live in `node_modules/next/dist/docs/`.
