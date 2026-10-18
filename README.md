# Möbel Montage — React + Vite

Functional React components and hooks, original responsive CSS, DE/UK translations and inline SVG graphics. No HTML injection or runtime HTML parser.

## Run locally

Requires Node.js 22.12+ (or a newer supported Node release) and npm.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. To build and inspect the production version:

```sh
npm run build
npm run preview
```

## Tests

```sh
npx playwright install chromium
npm run build
npm test
```

Tests cover 320, 390, 768 and 1440px widths, both languages, local-storage fallback, archive filters, FAQ, contact links, local file selection and the original form feedback. Parity tests serve the original Git commit locally to compare content, section geometry and SVG geometry, and save before/after screenshots. Keep the baseline commit in Git history to run these comparisons.

## Structure

- `src/App.jsx`: page composition and translation selection.
- `src/components/`: one named component per page section, plus navigation and shared UI.
- `SectionRef`, `SectionHeading`, `FormField`, `ProjectCard`: shared markup without extra DOM wrappers.
- `src/hooks/useLanguage.js`: language persistence and document language.
- `src/hooks/useScrolled.js`: scroll threshold subscription with cleanup; only page chrome subscribes.
- `src/config/contact.js`: contact URLs and displayed phone/email used by navigation and footer. Translated contact-card text remains in the dictionaries.
- `src/components/Icons.jsx`, `Drawings.jsx`: SVG React components with named props; original geometry retained.
- `src/translations.js`, `src/projects.js`: original content and data.
- `src/styles.css`: unchanged source stylesheet.
- `public/`: original image assets.

## Code formatting

```sh
npm run format
npm run format:check
```

Prettier formats JavaScript, JSX and configuration files. The original stylesheet is deliberately excluded to preserve its exact contents. Keep state in the section that owns it; language changes update props without remounting forms, filters or FAQ. Project categories are grouped once from static data and shared by the portfolio counts and filters.

The contact form remains a local demo and does **not** send requests or files. Load-more, legal links and portfolio placeholders retain the original limitations. See `MIGRATION.md`. No backend, deployment configuration or external sending service has been added.
