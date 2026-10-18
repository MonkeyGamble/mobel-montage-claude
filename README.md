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

- `src/App.jsx`: language persistence and page composition, scroll-aware navigation.
- `src/components/Sections.jsx`: presentation sections, original class names and structure.
- `src/components/Interactive.jsx`: portfolio, FAQ and contact form state.
- `src/components/Icons.jsx`, `Drawings.jsx`: original SVG geometry as JSX.
- `src/translations.js`, `src/projects.js`: original content and data.
- `src/styles.css`: unchanged source stylesheet.
- `public/`: original image assets.

The contact form remains a local demo and does **not** send requests or files. Load-more, legal links and portfolio placeholders retain the original limitations. See `MIGRATION.md`. No backend, deployment configuration or external sending service has been added.
