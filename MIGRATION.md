# Migration plan and baseline

Source: MonkeyGamble/mobel-montage-claude, commit 4db232f26fe0507f447ca81a321596dc5d3bbfe8.
The checkout at D:\MöbelMontage Webseite matches GitHub HEAD and contains an untracked package-lock.json. It is not modified. Work takes place in this separate clone.

1. Preserve original CSS byte-for-byte, fonts, assets, section IDs, content and DE/UK dictionaries.
2. Replace imperative DOM rendering with functional React section components and JSX SVG components; no HTML string injection.
3. Use hooks for persisted language, scroll state, archive filters, FAQ and the existing contact-form feedback.
4. Add Vite with a relative base, a lockfile and local development/build scripts.
5. Verify production build, desktop/mobile layout, translations and persistence, filtering, FAQ, anchor/contact links, file selection and form behavior.

## Existing limitations (not new integrations)

- Contact submission only changes the button label. There is no server endpoint, email sending or file upload. A selected file remains local. This migration preserves that demo behavior.
- “Load more” has no handler or additional data; all nine supplied projects are already shown.
- Legal links point to #; no legal pages exist in the source.
- Portfolio/reference images are IMG placeholders in the source.
- Fonts still require Google Fonts network access.
- At narrow widths the source has horizontal overflow; parity tests verify the migration does not increase it. This is retained for design fidelity, not silently redesigned.

The user authorized publication to the GitHub branch `development_react` after reviewing the migration result. Deployment and replacement of the original D: checkout remain outside the authorized scope.

## Verification — 2026-10-18

- `npm run build`: successful with Vite 7.3.7; output is in `dist/`.
- Browser suite: 24 checks across 1440, 768, 390 and 320px widths, both DE and UK.
- Original and React content, section geometry (2px tolerance), SVG geometry and document overflow compared against the source commit.
- Original CSS and hero image SHA-256 hashes match the migrated files exactly.
- Desktop and mobile screenshots inspected; before/after screenshots are generated under `test-results/`.
- Visual comparisons deliberately disable Google Fonts requests to use identical deterministic fallback fonts. Original font URLs and font declarations are retained unchanged; remote font delivery is not certified by these tests.
- Existing fallback-font overflow: 16px at 390/768px; at 320px, 75px in DE and 16px in UK. The original and migrated measurements match.
- Language persistence and blocked-storage fallback, all six filters, FAQ via keyboard, scroll/navigation, contact links, local file selection and demo submit feedback verified.
- Form fields and selected files now survive language switching; no external submission was performed.
- At verification time, no push, deployment, or writes to the original D: checkout had been performed.
