# Graph Report - MöbelMontage Webseite  (2026-11-03)

## Corpus Check
- 62 files · ~48,556 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: (none) 3, .css 1)

## Summary
- 329 nodes · 496 edges · 22 communities (18 shown, 4 thin omitted)
- Extraction: 95% EXTRACTED · 4% INFERRED · 1% AMBIGUOUS · INFERRED: 21 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `6a7017bc`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Cookies, Legal & Footer
- App Shell & Sections
- Entry Page & Migration Notes
- Build Tooling (package.json)
- Translations & Tests
- Wardrobe Assembly Animation
- Code Review and Quality
- Hero, Contact & Icons
- Hardening Controls
- Portfolio Projects
- Hero Image (public/)
- Hero Image (green-screen)
- Hero Image (assets/)
- Prettier Config
- Debugging and Error Recovery
- Hardening Patterns
- Interview Me
- Spec-Driven Development
- CLAUDE.md

## God Nodes (most connected - your core abstractions)
1. `Code Review and Quality` - 19 edges
2. `App()` - 18 edges
3. `SectionRef()` - 15 edges
4. `react` - 13 edges
5. `Möbel Montage React + Vite README` - 13 edges
6. `Debugging and Error Recovery` - 12 edges
7. `Hardening Controls` - 12 edges
8. `@playwright/test` - 12 edges
9. `Interview Me` - 11 edges
10. `Security and Hardening` - 10 edges

## Surprising Connections (you probably didn't know these)
- `Hooks for Language, Scroll, Filters, FAQ, Form Feedback` --references--> `useLanguage()`  [INFERRED]
  MIGRATION.md → src/hooks/useLanguage.js
- `Hooks for Language, Scroll, Filters, FAQ, Form Feedback` --references--> `useScrolled()`  [INFERRED]
  MIGRATION.md → src/hooks/useScrolled.js
- `Möbel Montage React + Vite README` --references--> `useLanguage()`  [EXTRACTED]
  README.md → src/hooks/useLanguage.js
- `Möbel Montage React + Vite README` --references--> `useScrolled()`  [EXTRACTED]
  README.md → src/hooks/useScrolled.js
- `Wardrobe Assembly Animation Page (Збирання шафи)` --conceptually_related_to--> `Functional React Components, No HTML String Injection`  [AMBIGUOUS]
  public/assets/shafa/shafa.html → MIGRATION.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Wardrobe Clip-Path Assembly Animation Pipeline** — public_assets_shafa_shafa_img, public_assets_shafa_shafa_pieces, public_assets_shafa_shafa_grow, public_assets_shafa_shafa_play, public_assets_shafa_shafa_dimsin [EXTRACTED 1.00]
- **Migration Design-Fidelity Guarantees** — migration_css_byte_preservation, migration_parity_comparison, migration_narrow_width_overflow, migration_deterministic_fallback_fonts, readme_playwright_tests [INFERRED 0.85]

## Communities (22 total, 4 thin omitted)

### Community 0 - "Cookies, Legal & Footer"
Cohesion: 0.18
Nodes (14): CookieSettingsButton(), Footer(), LegalPage(), LegalText(), CONTACT, CONTACT_CARD_LINKS, HTML_LANGUAGES, LANGUAGE_STORAGE_KEY (+6 more)

### Community 1 - "App Shell & Sections"
Cohesion: 0.12
Nodes (27): App(), COOKIE_COPY, CookieBanner(), readDecision(), CabinetDrawing(), DismantlingDrawing(), ProcessStep1Drawing(), ProcessStep2Drawing() (+19 more)

### Community 2 - "Entry Page & Migration Notes"
Cohesion: 0.10
Nodes (21): #app Mount Point, Google Fonts (Hanken Grotesk, JetBrains Mono), index.html Entry Document, Paper Grain Texture Overlay, SEO Meta (Möbel Montage Bonn/NRW, Festpreis, 12h Termin, 100 km), Baseline Source Commit 4db232f (mobel-montage-claude), Demo Contact Submission (button label only, no backend), development_react GitHub Branch Publication (+13 more)

### Community 3 - "Build Tooling (package.json)"
Cohesion: 0.10
Nodes (23): dependencies, react@^19.2.0, react-dom@^19.2.0, devDependencies, @playwright/test@^1.56.0, prettier@^3.9.10, vite@^7.2.0, @vitejs/plugin-react@^5.1.0 (+15 more)

### Community 4 - "Translations & Tests"
Cohesion: 0.14
Nodes (4): @playwright/test, EN, TRANSLATIONS, ids

### Community 5 - "Wardrobe Assembly Animation"
Cohesion: 0.16
Nodes (13): dim (dimension line builder), dimsIn (dimension line animation), el (SVG element factory), grow (polygon offset), head (arrowhead polygon), IMG Embedded Sketch Images (orig, clean, back), norm (vector normalize), Wardrobe Assembly Animation Page (Збирання шафи) (+5 more)

### Community 6 - "Code Review and Quality"
Cohesion: 0.07
Nodes (29): 1. Correctness, 2. Readability & Simplicity, 3. Architecture, 4. Security, 5. Performance, Change Descriptions, Change Sizing, Code Review and Quality (+21 more)

### Community 7 - "Hero, Contact & Icons"
Cohesion: 0.20
Nodes (9): Contact(), FormField(), Hero(), ArrowRightIcon(), UploadIcon(), WhatsappIcon(), Navigation(), PageChrome() (+1 more)

### Community 8 - "Hardening Controls"
Cohesion: 0.08
Nodes (24): AI / LLM features, Always Do (No Exceptions), Ask First (Requires Human Approval), Authentication and sessions, Common Rationalizations, Dependencies and supply chain, Destructive operations on derived paths, Hardening Controls (+16 more)

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

### Community 17 - "Debugging and Error Recovery"
Cohesion: 0.09
Nodes (21): Build Failure Triage, Common Rationalizations, Debugging and Error Recovery, Error-Specific Patterns, Instrumentation Guidelines, Overview, Red Flags, Runtime Error Triage (+13 more)

### Community 18 - "Hardening Patterns"
Cohesion: 0.10
Nodes (18): Broken Access Control, Broken Authentication, Cross-Site Scripting (XSS), Data Classification, Dependency Audit Triage, Destructive Operations on Derived Paths, File Upload Safety, Hardening Patterns (+10 more)

### Community 19 - "Interview Me"
Cohesion: 0.11
Nodes (18): Common Rationalizations, Example, Interaction with Other Skills, Interview Me, Loading Constraints, Output, Overview, Red Flags (+10 more)

### Community 20 - "Spec-Driven Development"
Cohesion: 0.14
Nodes (13): Common Rationalizations, Keeping the Spec Alive, Overview, Phase 0: Scope Check, Phase 1: Specify, Phase 2: Plan, Phase 3: Tasks, Phase 4: Implement (+5 more)

## Ambiguous Edges - Review These
- `Pencil Technical-Drawing Style` → `Dimension Annotations 200 x 100 x 60 (likely cm)`  [AMBIGUOUS]
  public/schrank-hero.png · relation: conceptually_related_to
- `Chroma-Key Green Background` → `Wardrobe Hero Drawing (Schrank, 100x60x200)`  [AMBIGUOUS]
  public/assets/schrank-hero-туц===new.png · relation: rationale_for
- `Dimension Annotations 200 x 100 x 60 (cm)` → `Furniture Assembly Service (MöbelMontage)`  [AMBIGUOUS]
  public/assets/schrank-hero.png · relation: conceptually_related_to
- `Functional React Components, No HTML String Injection` → `Wardrobe Assembly Animation Page (Збирання шафи)`  [AMBIGUOUS]
  public/assets/shafa/shafa.html · relation: conceptually_related_to

## Knowledge Gaps
- **17 isolated node(s):** `Furniture Assembly Service (MöbelMontage)`, `Single Hinged Door with Bar Handle`, `Open Interior: Shelves and Clothes Rail`, `MöbelMontage Furniture Assembly Service`, `Dimension Annotations 100 x 60 x 200 cm` (+12 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 168 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Möbel Montage React + Vite README` connect `Entry Page & Migration Notes` to `Cookies, Legal & Footer`, `App Shell & Sections`, `Translations & Tests`, `Hero, Contact & Icons`?**
  _High betweenness centrality (0.083) - this node is a cross-community bridge._
- **What connects `Furniture Assembly Service (MöbelMontage)`, `Single Hinged Door with Bar Handle`, `Open Interior: Shelves and Clothes Rail` to the rest of the system?**
  _17 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `App Shell & Sections` be split into smaller, more focused modules?**
  _Cohesion score 0.11707317073170732 - nodes in this community are weakly interconnected._
- **Why does `react` connect `Build Tooling (package.json)` to `Cookies, Legal & Footer`, `App Shell & Sections`, `Entry Page & Migration Notes`, `Hero, Contact & Icons`, `Portfolio Projects`?**
  _High betweenness centrality (0.075) - this node is a cross-community bridge._
- **Should `Entry Page & Migration Notes` be split into smaller, more focused modules?**
  _Cohesion score 0.10256410256410256 - nodes in this community are weakly interconnected._

### Low-confidence Hints
_AMBIGUOUS edges — the extractor was unsure. Verify before acting on these._

- **What is the exact relationship between `Pencil Technical-Drawing Style` and `Dimension Annotations 200 x 100 x 60 (likely cm)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Chroma-Key Green Background` and `Wardrobe Hero Drawing (Schrank, 100x60x200)`?**
  _Edge tagged AMBIGUOUS (relation: rationale_for) - confidence is low._