# IT-focused portfolio: final QA

The owner approved the IT-focused direction and explicitly authorized deployment after final QA. The publication target is https://eduardson-cortez.vercel.app.

## Completed checks

- ESLint: passed with zero warnings using Next.js core-web-vitals and TypeScript configurations.
- TypeScript: passed tsc --noEmit and the production build's type validation.
- Inquiry tests: all four passed, including computer-support selection, required fields, optional fields, and safe email-draft encoding.
- Production build: succeeded; all seven content routes prerendered.
- Local HTTP checks: homepage, inquiry page, and all five project pages return 200, with one H1, a description, and an Open Graph image. Unknown projects return 404.
- All five external project URLs return 200 with expected titles.
- Repository text audit found no remaining references to the removed service category in maintained text files.
- The unused public design-reference mockup and two obsolete desktop screenshots were removed. They remain recoverable in Git history.
- The current portrait, five project screenshots, computer-servicing illustration, contact details, and project descriptions are retained.
- it-content-check.json records rendered content counts, anchor targets, and asset responses: seven services, four skills panels, one certificate, five projects, no missing anchors, all 16 referenced assets responding.
- Local preview indexing remains disabled because SITE_URL is unset locally. Production settings were not modified.

## Visual and interaction review limitations

Browser automation could not start because its sandbox helper failed, even after a reset and a later retry. No new manual desktop/mobile screenshots, interactive navigation checks, or full browser inquiry walkthrough are claimed for this iteration. Inquiry validation and email-draft generation passed the automated tests; the site still prepares a draft rather than sending an email.

The responsive CSS balances seven services, four skills panels, and one certification card. The owner approved the overall visual direction. Description text was brightened to #c2ccd6 and project descriptions enlarged to 13px on desktop and mobile. This text has over 10:1 contrast against the dark panel/card backgrounds. Responsive rules and accessibility semantics were reviewed in source, but this does not replace a manual browser or assistive-technology audit.

mobile-preview.jpg, inquiry-preview.jpg, and project-detail.jpg are historical evidence from earlier iterations, not screenshots of this update. social-preview.png was regenerated from the updated local Open Graph route. production-check.json is also historical; the current route check passed with roughly 4-16.4 KB gzip HTML and 180-182.5 KB gzip initial JavaScript per page (estimates, not Lighthouse or real-user measurements).

## Tooling note

npm audit --omit=dev reports zero runtime dependency findings. The new Next.js lint toolchain reports five high-severity development-dependency entries from one upstream braces advisory chain. npm suggests an incompatible Next.js lint-config downgrade; no forced downgrade was applied. The lint tooling runs locally and does not become client-side application code.

Certificate scans and actual computer-servicing photos are still pending from the owner. No replacement images or credentials were invented.
