# Graph Report - MöbelMontage Webseite  (2026-10-29)

## Corpus Check
- Corpus is ~20,720 words - fits in a single context window. You may not need a graph.

## Summary
- 198 nodes · 371 edges · 17 communities (14 shown, 3 thin omitted)
- Extraction: 93% EXTRACTED · 6% INFERRED · 1% AMBIGUOUS · INFERRED: 21 edges (avg confidence: 0.85)
- Token cost: 183,585 input · 0 output

## Community Hubs (Navigation)
- Cookies, Legal & Footer
- App Shell & Sections
- Entry Page & Migration Notes
- Build Tooling (package.json)
- Translations & Tests
- Wardrobe Assembly Animation
- Line Drawings
- Hero, Contact & Icons
- Navigation & Page Chrome
- Portfolio Projects
- Hero Image (public/)
- Hero Image (green-screen)
- Hero Image (assets/)
- Prettier Config

## God Nodes (most connected - your core abstractions)
1. `App()` - 18 edges
2. `SectionRef()` - 15 edges
3. `react` - 13 edges
4. `Möbel Montage React + Vite README` - 13 edges
5. `@playwright/test` - 12 edges
6. `Contact()` - 9 edges
7. `SectionHeading()` - 9 edges
8. `React Migration Plan and Baseline` - 9 edges
9. `scripts` - 7 edges
10. `CookieSettingsButton()` - 7 edges

## Surprising Connections (you probably didn't know these)
- `Hooks for Language, Scroll, Filters, FAQ, Form Feedback` --references--> `useLanguage()`  [INFERRED]
  MIGRATION.md → src/hooks/useLanguage.js
- `Möbel Montage React + Vite README` --references--> `useLanguage()`  [EXTRACTED]
  README.md → src/hooks/useLanguage.js
- `Hooks for Language, Scroll, Filters, FAQ, Form Feedback` --references--> `useScrolled()`  [INFERRED]
  MIGRATION.md → src/hooks/useScrolled.js
- `Möbel Montage React + Vite README` --references--> `useScrolled()`  [EXTRACTED]
  README.md → src/hooks/useScrolled.js
- `Wardrobe Assembly Animation Page (Збирання шафи)` --conceptually_related_to--> `Functional React Components, No HTML String Injection`  [AMBIGUOUS]
  public/assets/shafa/shafa.html → MIGRATION.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Wardrobe Clip-Path Assembly Animation Pipeline** — public_assets_shafa_shafa_img, public_assets_shafa_shafa_pieces, public_assets_shafa_shafa_grow, public_assets_shafa_shafa_play, public_assets_shafa_shafa_dimsin [EXTRACTED 1.00]
- **Migration Design-Fidelity Guarantees** — migration_css_byte_preservation, migration_parity_comparison, migration_narrow_width_overflow, migration_deterministic_fallback_fonts, readme_playwright_tests [INFERRED 0.85]

## Communities (17 total, 3 thin omitted)

### Community 0 - "Cookies, Legal & Footer"
Cohesion: 0.14
Nodes (19): dependencies, react@^19.2.0, react-dom@^19.2.0, react, COOKIE_COPY, CookieSettingsButton(), Footer(), LegalPage() (+11 more)

### Community 1 - "App Shell & Sections"
Cohesion: 0.18
Nodes (16): App(), CookieBanner(), readDecision(), FAQ(), Philosophy(), Portfolio(), Process(), SectionHeading() (+8 more)

### Community 2 - "Entry Page & Migration Notes"
Cohesion: 0.11
Nodes (21): #app Mount Point, Google Fonts (Hanken Grotesk, JetBrains Mono), index.html Entry Document, Paper Grain Texture Overlay, SEO Meta (Möbel Montage Bonn/NRW, Festpreis, 12h Termin, 100 km), Baseline Source Commit 4db232f (mobel-montage-claude), Demo Contact Submission (button label only, no backend), development_react GitHub Branch Publication (+13 more)

### Community 3 - "Build Tooling (package.json)"
Cohesion: 0.11
Nodes (19): devDependencies, @playwright/test@^1.56.0, prettier@^3.9.10, vite@^7.2.0, @vitejs/plugin-react@^5.1.0, name, private, scripts (+11 more)

### Community 4 - "Translations & Tests"
Cohesion: 0.14
Nodes (4): @playwright/test, EN, TRANSLATIONS, ids

### Community 5 - "Wardrobe Assembly Animation"
Cohesion: 0.16
Nodes (13): dim (dimension line builder), dimsIn (dimension line animation), el (SVG element factory), grow (polygon offset), head (arrowhead polygon), IMG Embedded Sketch Images (orig, clean, back), norm (vector normalize), Wardrobe Assembly Animation Page (Збирання шафи) (+5 more)

### Community 6 - "Line Drawings"
Cohesion: 0.28
Nodes (10): CabinetDrawing(), DismantlingDrawing(), ProcessStep1Drawing(), ProcessStep2Drawing(), ProcessStep3Drawing(), ProcessStep4Drawing(), ServiceDrawing(), ToolboxDrawing() (+2 more)

### Community 7 - "Hero, Contact & Icons"
Cohesion: 0.29
Nodes (5): Contact(), FormField(), Hero(), ArrowRightIcon(), UploadIcon()

### Community 8 - "Navigation & Page Chrome"
Cohesion: 0.39
Nodes (4): WhatsappIcon(), Navigation(), PageChrome(), useScrolled()

### Community 9 - "Portfolio Projects"
Cohesion: 0.43
Nodes (5): ProjectCard(), CAT_KEYS, PH_HEIGHTS, PROJECTS, PROJECTS_BY_CATEGORY

### Community 10 - "Hero Image (public/)"
Cohesion: 0.33
Nodes (7): Dimension Annotations 200 x 100 x 60 (likely cm), Single Hinged Door with Bar Handle, Furniture Assembly Service (MöbelMontage), Schrank Hero Image (wardrobe sketch), Open Interior: Shelves and Clothes Rail, Pencil Technical-Drawing Style, Wardrobe (Kleiderschrank) 100x60x200

### Community 11 - "Hero Image (green-screen)"
Cohesion: 0.40
Nodes (5): Dimension Annotations 100 x 60 x 200 cm, MöbelMontage Furniture Assembly Service, Chroma-Key Green Background, Open Compartment with Shelves and Hanging Rail, Wardrobe Hero Drawing (Schrank, 100x60x200)

### Community 12 - "Hero Image (assets/)"
Cohesion: 0.50
Nodes (5): Dimension Annotations 200 x 100 x 60 (cm), Furniture Assembly Service (MöbelMontage), Schrank Hero Image (wardrobe sketch), Pencil Technical Sketch Style, Wardrobe (Kleiderschrank, one door, open shelving + hanging rail)

### Community 13 - "Prettier Config"
Cohesion: 0.50
Nodes (3): printWidth, singleQuote, trailingComma

## Ambiguous Edges - Review These
- `Functional React Components, No HTML String Injection` → `Wardrobe Assembly Animation Page (Збирання шафи)`  [AMBIGUOUS]
  public/assets/shafa/shafa.html · relation: conceptually_related_to
- `Wardrobe Hero Drawing (Schrank, 100x60x200)` → `Chroma-Key Green Background`  [AMBIGUOUS]
  public/assets/schrank-hero-туц===new.png · relation: rationale_for
- `Dimension Annotations 200 x 100 x 60 (cm)` → `Furniture Assembly Service (MöbelMontage)`  [AMBIGUOUS]
  public/assets/schrank-hero.png · relation: conceptually_related_to
- `Dimension Annotations 200 x 100 x 60 (likely cm)` → `Pencil Technical-Drawing Style`  [AMBIGUOUS]
  public/schrank-hero.png · relation: conceptually_related_to

## Knowledge Gaps
- **17 isolated node(s):** `Vite Build with Relative Base`, `development_react GitHub Branch Publication`, `Run Locally (Node 22.12+, npm ci, npm run dev)`, `Shared Markup Components (SectionRef, SectionHeading, FormField, ProjectCard)`, `SEO Meta (Möbel Montage Bonn/NRW, Festpreis, 12h Termin, 100 km)` (+12 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 55 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Möbel Montage React + Vite README` connect `Entry Page & Migration Notes` to `Cookies, Legal & Footer`, `App Shell & Sections`, `Translations & Tests`, `Navigation & Page Chrome`?**
  _High betweenness centrality (0.231) - this node is a cross-community bridge._
- **What connects `Vite Build with Relative Base`, `development_react GitHub Branch Publication`, `Run Locally (Node 22.12+, npm ci, npm run dev)` to the rest of the system?**
  _17 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Cookies, Legal & Footer` be split into smaller, more focused modules?**
  _Cohesion score 0.13756613756613756 - nodes in this community are weakly interconnected._
- **Why does `react` connect `Cookies, Legal & Footer` to `App Shell & Sections`, `Entry Page & Migration Notes`, `Build Tooling (package.json)`, `Hero, Contact & Icons`, `Navigation & Page Chrome`, `Portfolio Projects`?**
  _High betweenness centrality (0.209) - this node is a cross-community bridge._
- **Should `Entry Page & Migration Notes` be split into smaller, more focused modules?**
  _Cohesion score 0.11333333333333333 - nodes in this community are weakly interconnected._

### Low-confidence Hints
_AMBIGUOUS edges — the extractor was unsure. Verify before acting on these._

- **What is the exact relationship between `Functional React Components, No HTML String Injection` and `Wardrobe Assembly Animation Page (Збирання шафи)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Wardrobe Hero Drawing (Schrank, 100x60x200)` and `Chroma-Key Green Background`?**
  _Edge tagged AMBIGUOUS (relation: rationale_for) - confidence is low._