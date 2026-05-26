---
version: alpha
name: "Mobil Oil Identity Programme (Chermayeff & Geismar, 1964)"
description: "A digital UI framework inspired by the 1964 Mobil Oil corporate identity, featuring a strict two-colour palette of deep corporate blue and vivid signal red, geometric sans-serif typography, and a perfect circle motif."
colors:
  ok: "#0033A0"
  warn: "#E31837"
  err: "#E31837"
  delta-up: "#0033A0"
  delta-down: "#E31837"
  delta-flat: "#1A1A1A"
typography:
  display:
    fontFamily: "Helvetica"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.025em
    textTransform: uppercase
  headline:
    fontFamily: "Helvetica"
    fontSize: 30px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.025em
    textTransform: uppercase
  title:
    fontFamily: "Helvetica"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: -0.025em
    textTransform: uppercase
  body:
    fontFamily: "Helvetica"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0em
  label:
    fontFamily: "Helvetica"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.05em
    textTransform: uppercase
rounded:
  default: "0px"
  full: "9999px"
spacing:
  component-internal: "16px"
  section-internal: "32px"
  page-edge: "32px"
  gap-component: "16px"
  gap-section: "32px"
components:
  button-primary:
    backgroundColor: "{colors.ok}"
    textColor: "#FFFFFF"
    rounded: "{rounded.default}"
    height: "40px"
  button-primary-hover:
    backgroundColor: "#002880"
    textColor: "#FFFFFF"
    rounded: "{rounded.default}"
    height: "40px"
  card:
    backgroundColor: "#FFFFFF"
    rounded: "{rounded.default}"
    padding: "16px"
  input:
    backgroundColor: "#FFFFFF"
    rounded: "{rounded.default}"
    height: "40px"
    padding: "8px"
  input-focus:
    backgroundColor: "#FFFFFF"
    rounded: "{rounded.default}"
    height: "40px"
    padding: "8px"
  perfect-circle-badge:
    size: "32px"
    backgroundColor: "{colors.warn}"
    rounded: "{rounded.full}"
  metric-cell:
    backgroundColor: "#FFFFFF"
    padding: "16px"
    rounded: "{rounded.default}"
    height: "56px"
provenance:
  coverage_status: "minimal"
  identity_description: "The slug `mobil-oil-identity-programme-cher-mayeff-1964` refers to the comprehensive visual identity programme designed for Mobil Oil Corporation by the American design firm Chermayeff & Geismar, initiated circa 1964. The programme is most famous for the circular blue corporate logo incorporating the word “Mobil” in a custom lowercase letterform, with the letter “o” rendered as a red circle. The i"
  manual_enrichment_required: true
  imagery_count: 2
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "www.vam.ac.uk"
      count: 1
    - host: "en.wikipedia.org"
      count: 1
  imagery_urls:
    - url: "https://www.vam.ac.uk/"
      host: "www.vam.ac.uk"
      institution: "Victoria and Albert Museum, London"
      confidence_original: low
    - url: "https://en.wikipedia.org/wiki/Mobil"
      host: "en.wikipedia.org"
      institution: null
      confidence_original: high
  typefaces_attested:
    - name: "Mobil logotype"
      foundry: null
      year: 1964
      google_fonts: null
      is_custom: true
      attestation: "unknown"
    - name: "Helvetica"
      foundry: null
      year: null
      google_fonts: "Inter"
      attestation: "conventional"
  flags:
    - "few_usable_urls"
    - "2_robots_disallowed_urls"
  honest_gaps:
    - "1. **Colour – exact standards**: PMS 287 and 186 are unverified. The original colour specification may have used a different colour matching system (DIC, custom mix). No Munsell, NCS, Lab values known."
---
# Design System: Mobil Oil Identity Programme (Chermayeff & Geismar, 1964)

## 0. Taxonomy & Identity

- entity-type: interface / system / environment
- artefact-family: operating system / software UI
- technique: digital vector (majority)
- movement-lineage: design movement
- era: postwar
- geography: US / Canada
- domain: industrial / engineering / maintenance (majority; one provider suggests retail/CPG)
- formal-traits: grid-based, geometric, flat, minimal
- color-logic: spot-color
- typography-mode: geometric sans
- texture: grainy, matte
- function: persuade
- provenance: studio lineage / canonical historical source (mixed phrasing)

## 1. Overview

This design system translates the 1964 Mobil Oil corporate identity programme by Chermayeff & Geismar into a digital UI framework. The style is defined by a strict two-colour palette of deep corporate blue and vivid signal red against a white field, with bold geometric sans-serif typography and a perfect circle as the recurring motif. All shapes are flat, unshaded, and mathematically precise — no gradients, drop shadows, or simulated depth. Negative space is treated as a structural material, and every composition follows a modular grid. The emotional register is authoritative, restrained, and unflinchingly crisp.

**What makes it recognizable (unanimous):**
- Strict two-colour palette (blue + red + white) with no tints, gradients, or third accent
- Bold geometric sans-serif wordmark where at least one letterform is a perfect circle
- Red applied only to the signature circular element — never to body text
- Flat, unshaded, mathematically precise shapes
- Generous white margins around all identity elements
- A consistent horizontal rule (thin red or thick blue) repeated across applications
- All text flush left, ragged right
- Modular grid system anchoring every composition

**What would break it (unanimous):**
- Gradients, drop shadows, bevels, or any simulated depth
- A third accent colour or any tint/shade of the two corporate colours
- Serif, italic, condensed, or light typeface variants
- Centered or justified body text
- Rounded corners on structural elements (except the perfect circle)
- More than two colours in a single composition
- Red used for body text or large background areas

## 2. Constants

- **Light Mode:** primary — white (or off-white paper) background, blue text, red accents
- **Dark Mode:** no — the identity is defined for light backgrounds exclusively
- **Responsive:** yes — modular grid adapts to viewport; breakpoints at 375px and 768px (majority)
- **States:** Default, Active, Disabled; Hover and Focus are specified inconsistently (see component details); Error is defined with red
- **surface-simulation:** paper — mid-century offset printing on uncoated paper with dot screen halftone, paper grain, and optional misregistration effects

## 2a — Interaction Model

- **hover-delta:** color-shift — primary elements darken to opacity-90 of primary blue (#0033A0); secondary buttons fill with primary blue and text shifts to white
- **active-delta:** scale-down — subtle scale(0.97) on press with linear timing; no bounce or spring
- **focus-style:** color-border — 1pt primary blue border with 2px offset; secondary red used for accent-only contexts
- **transition-duration:** 0ms — majority of state changes use instant hard cuts characteristic of mechanical precision; some providers specify 150-300ms linear timing
- **transition-easing:** none — linear timing applied where transitions are used; no easing curves
- **exempt-animations:** logo-rotation, typewriter-reveal

## 3. Colors

All hex values are tagged [unverified] — no provider cited a source.

- **primary:** CONTESTED:§2.hex_primary — providers gave #003366 (two providers) and #0033A0 (two providers); no consensus; re-stack required.
- **on-primary:** #FFFFFF [unverified]
- **secondary:** #E31837 [unverified] — Vivid Signal Red; used exclusively for the circular logo element and key structural details.
- **on-secondary:** #FFFFFF [unverified]
- **surface:** #FFFFFF [unverified] (default background; one provider suggests #F5F5F0 off-white paper)
- **on-surface:** #1A1A1A [unverified] (near-black for body text; one provider uses #0033A0)
- **outline:** #003366 or #0033A0 [unverified] — depends on primary choice; use primary blue.
- **error:** #E31837 [unverified] — same as secondary red.

**Palette rule (unanimous):** No tints, no tones, no shades of the two corporate colours. The palette is closed — adding a third hue would break the identity.

**Semantic state colors:**
ok:         #0033A0 — primary blue; positive/confirmed status within the closed palette
warn:       #E31837 — secondary red; caution/advisory uses red outline or icon treatment (not fill)
err:        #E31837 — secondary red; error/critical uses red fill or heavier border treatment; same as error role
delta-up:   #0033A0 — primary blue; positive numeric delta
delta-down: #E31837 — secondary red; negative numeric delta
delta-flat: #1A1A1A — on-surface near-black; neutral delta

Note: warn and err both map to secondary red (#E31837) due to the closed palette constraint. They are differentiated by visual treatment: warn uses red outline or icon-only, err uses red fill or heavier structural treatment.

## 4. Typography

- **primary_typeface:** CONTESTED:§3.primary_typeface — three providers named Helvetica (or Helvetica Neue / Univers) for body and display; one provider named Futura for display and Helvetica for body. No provider cited a foundry or year attribution. Re-stack required.
- **secondary_typeface:** CONTESTED:§3.secondary_typeface — providers did not specify a separate secondary typeface; all use the same family in Regular and Bold weights. No foundry citation.
- **google_fonts_substitute:** CONTESTED:§3.google_fonts_substitute — one provider suggested Inter as a close substitute for Helvetica; others did not specify. No cited source.

**Style rules (unanimous):**
- Only Regular (400) and Bold (700) weights — no italic, condensed, light, or extrabold
- All corporate names and headlines set in uppercase with tight tracking
- Body text: mixed case, flush left, ragged right — never justified or centered
- Numbers use lining figures aligned with cap height
- At small sizes (below 12px), uppercase labels may be used for structure

## 5. Elevation

**Flat depth model (unanimous).** All surfaces are coplanar — no box-shadow, no z-axis separation, no bevels or simulated elevation.

## 6. Spacing & Sizing

- **Spacing cadence (unanimous):** 8pt base grid (or 12pt for some providers); all margins, padding, gaps are multiples of 8.
- **padding (majority):** component-internal: p-4 (16px); section-internal: p-8 (32px); page-edge: px-8 py-6 (32px horizontal, 24px vertical).
- **margin (majority):** between-components: gap-4 (16px); between-sections: gap-8 (32px) or gap-12 (48px for emphasis).
- **component-heights (majority):** sm: h-8 (32px); md: h-10 (40px); lg: h-12 (48px).
- **icon-size:** w-5 h-5 (20px) or w-6 h-6 (24px) — majority w-5.
- **avatar-size:** w-10 h-10 (40px), circular — used only if avatars are required (rare in this system).

**Grid system (partial consensus):** 4 columns on narrow viewports (≤375px), 6 columns on tablet (≥768px). Desktop column count varies: two providers specify 8 columns, two specify 6. No majority for desktop. All columns equal width, gutters 16–32px.

## 7. Borders

- **border-radius (unanimous):** rounded-none — all corners mathematically sharp. The only curved shape is the perfect circle, achieved via `rounded-full` on completely square containers (aspect-ratio: 1/1).
- **border-width (majority):** 1pt (border or border-2 in Tailwind) for all rules, boxes, borders. Some use border-2 for emphasis.
- **border-style (unanimous):** border-solid — no dashed, dotted, or decorative borders.
- **border-color (majority):** primary blue for all structural borders.
- **focus ring (varies):** some providers use a 1pt red outline, others use blue; no consensus on red vs blue. Recommend primary blue with 2px offset as default, red for accent-only in specific contexts.

## 8. Opacity

- **disabled-state (majority):** opacity-40 (three providers). One provider uses opacity-50.
- **ghost/secondary (varies):** not consistently defined; default is fully opaque.
- **overlay/scrim (unanimous):** not used — the identity avoids overlays.
- **hover-feedback (majority):** no opacity change; use colour or brightness shift instead.

## 8.5. Visual Effects

### 8.5.0 — Physical Material Model

material-model:    paper — mid-century offset printing on uncoated paper

global-filter:     none — the paper stock is neutral white with no colour shift; the identity's colour accuracy is preserved without global filtration

global-overlay:    Two stacked pseudo-element overlays applied to the body:
                   1. Dot screen halftone via repeating radial-gradient (10-15% black density, monochrome, blend mode multiply, opacity 10-15%)
                   2. Paper grain via SVG feTurbulence (baseFrequency ~0.65, numOctaves 3-4, blend mode overlay or multiply, opacity 5-15%)
                   Both applied at z-index above background, below content, pointer-events:none

rendering-flags:
  font-smoothing:  antialiased — geometric sans benefit from standard antialiasing
  image-rendering: auto
  text-rendering:  auto

The style simulates mid-century offset printing on uncoated paper. Three production-realism effects are unanimously agreed:

1. **Dot screen halftone** — fine dot pattern (10–15% black density) applied to full-page background and occasionally card fills. Technique: repeating radial-gradient or SVG feTurbulence. Opacity 10–15%, blend mode multiply. Color: monochrome black.

2. **Paper grain** — fractal noise simulating uncoated offset paper stock. Technique: SVG feTurbulence (baseFrequency ~0.65, numOctaves 3–4). Opacity 5–15%, blend mode overlay or multiply. Applied to all backgrounds.

3. **Misregistration (red plate offset)** — the red circular element is shifted 0.5–1pt (0.7–1.4px) horizontally and/or vertically relative to other plates. Applied exclusively to the logo's red element. Technique: CSS transform translate. No blend.

Providers differ on exact parameters (baseFrequency, opacity values, offset direction). These can be adjusted within the variation bounds.

**Additional effect (majority):** Subtle ink sheen on the red element — a very soft gradient or inner shadow simulating specular gloss on red ink. One provider uses a drop-shadow filter; others use a linear-gradient overlay.

## 9. Components

### Icon vocabulary
- **system (unanimous):** custom geometric glyphs — circles, straight lines at 45°/90° angles, uniform stroke weight. No literal illustration, no pictograms, no human figures.
- **size (majority):** w-5 h-5 (20px) for functional icons; larger for supergraphics.
- **color (unanimous):** primary blue (or currentColor on dark backgrounds). Red only for the circular motif itself.
- **treatment (unanimous):** flat, no anti-aliasing preferred (crisp edges), no filters, no animation.

### Image/media treatment (majority)
- **aspect-ratio:** 4/3 or 16/9
- **object-fit:** cover
- **filter:** grayscale(100%) contrast(1.1–1.5) — high-contrast black-and-white only
- **overlay:** none (no scrims)
- **border:** 1pt solid primary blue
- **dark-mode:** not applicable

### Buttons (partial consensus)
**Primary button:**
- Background: primary blue (value depends on §2 choice)
- Text: white, uppercase, bold
- Corner: rounded-none
- Height: h-10 or h-12
- Padding: px-6 py-3 (majority)
- **Hover state: CONTESTED** — providers gave: no change, darker blue, red fill, or brightness shift. No majority. Recommend using a darker shade of primary blue (e.g., opacity-90) as default.
- Active state: varies; some use red fill, others darker blue. No consensus.
- Disabled: opacity-40

**Secondary button (outline):**
- Background: transparent
- Text: primary blue, uppercase, bold
- Border: 1pt solid primary blue
- Corner: rounded-none
- Hover: background fills with primary blue, text white (majority)
- Active: varies
- Disabled: opacity-40

### Cards/panels (majority)
- Fill: white or off-white (surface)
- Border: 1pt solid primary blue
- Corner: rounded-none
- Elevation: none
- Internal padding: p-4 to p-6
- Internal structure: left-aligned text, generous padding, optional horizontal rule separator (1pt red or blue)

### Navigation (varies)
- Horizontal bar with primary blue background (majority) or transparent with blue text
- Active indicator: red bullet (circle) or red underline
- Items: uppercase, bold, left-aligned

### Inputs/forms (majority)
- Border: 1pt solid primary blue, bottom-only or full box; rounded-none
- Label: uppercase, bold, above input
- Focus ring: 1pt red border (or blue) with offset — no shadow
- Placeholder: grey or blue at reduced opacity
- Disabled: opacity-40

### Style-native primitives

1. **Perfect Circle Badge** — w-8 h-8 rounded-full, fill secondary red (#E31837), white text if any. Used for notifications, status markers, decorative motifs.
2. **Horizontal Rule** — 1pt solid primary blue or secondary red, full container width. Used as a structural divider.
3. **Corporate Signature Block** — geometric sans-serif wordmark (all caps, bold) with the circular "O" in red. Always placed top-left or top-center within the grid, surrounded by generous white space.
4. **Geometric Arrow** — right-pointing arrow composed of two lines at 45°, uniform stroke weight, filled primary blue. For directional indicators.

**Data Display Components:**

metric-cell:
  Background: white (#FFFFFF) with paper grain and dot screen at standard opacity, or off-white (#F5F5F0) for subtle card differentiation.
  Border: 1pt solid primary blue (#0033A0), rounded-none.
  Label: primary blue (#0033A0), uppercase, bold, text-xs, flush left.
  Value: on-surface (#1A1A1A), geometric sans-serif, text-xl font-bold, lining figures.
  Delta: monospace text-sm; positive in primary blue (#0033A0), negative in secondary red (#E31837), flat in on-surface (#1A1A1A).
  No glow, no drop-shadow, no background fill variation by value.

signal-bar:
  Track: 2pt solid primary blue (#0033A0) outline, height 4px, rounded-none.
  Fill: primary blue (#0033A0) at the specified percentage, flat with no gradient or glow.
  Background: transparent — the track is an outline only, with fill painted inside.
  No texture on fill — flat ink line.

status-cell:
  ok:   text primary blue (#0033A0) with no background fill; Perfect Circle Badge in primary blue fill (w-6 h-6) as indicator.
  warn: text secondary red (#E31837) with 1pt red outline on the badge element; no fill.
  err:  Perfect Circle Badge filled secondary red (#E31837) with white text if any; 1pt red border may frame the cell.
  Fill: always transparent — status is communicated by text color and badge treatment, not cell background.

data-table-row:
  Alternating: odd rows white (#FFFFFF), even rows off-white (#F5F5F0) with paper grain and dot screen at standard opacity.
  Cell border: 1pt solid primary blue (#0033A0), rounded-none.
  Label: primary blue (#0033A0), uppercase, bold, text-xs, flush left.
  Value: on-surface (#1A1A1A), geometric sans-serif, text-sm font-bold, lining figures.
  No row-level surface effects beyond the alternating background.

chart-surface:
  Background: white (#FFFFFF) with paper grain and dot screen at reduced opacity (5-8%) to keep data legible.
  Grid lines: 1pt solid primary blue (#0033A0) at 25/50/75/100% heights, opacity-60.
  Axis labels: primary blue (#0033A0), uppercase, text-xs font-bold.
  Line: primary blue (#0033A0), stroke-width 1.5px, no drop-shadow, no glow.
  Dots: primary blue (#0033A0), r=2.5px, no glow, no outline.
  Data points use the Perfect Circle shape (rounded-full on square container) for any dot markers.

## 10. Layout

- **Spacing cadence:** 8pt base grid. All margins, padding, gaps are multiples of 8.
- **Grid system:** 4 columns (mobile ≤375px), 6 columns (tablet ≥768px). Desktop column count contested — providers gave 6 or 8 columns. Recommend 6 columns as compromise, with option to expand to 8 for dense content.
- **Density:** low — generous white space around all elements. At least one full grid column of margin around the identity symbol.
- **Section separation:** horizontal rules (1pt blue or red) or generous vertical gaps (gap-8 or gap-12). No background colour shifts.
- **Alignment:** all text flush left, ragged right. The identity block may be top-center on certain pieces (e.g., business card back), but top-left is default.
- **Breakpoint behavior (majority):** At 375px: single column, reduced padding, logo scales down. At 768px: two-column layout, logo top-left, navigation bar horizontal. At 1280px: three-column or four-column layout.

### Motion (majority)

- **Transition duration:** 150–300ms, linear timing (no easing curves). Some providers prefer 0ms (instant hard cuts) for most state changes.
- **Transition properties:** opacity, background-color, border-color, transform. Not color (static palette).
- **Animation:** Logo appears with a hard cut (no fade). The red circular element may rotate slowly (0→360deg over 2–6s) as a looping idle animation. Text reveals can be staccato typewriter (characters appear one-by-one at 40–50ms intervals) on load or scroll-enter.
- **No hover transforms** (scale, rotate) on the logo or primary elements. Active state may include a subtle scale(0.97) press on buttons (linear, no bounce).
- **No 3D transforms, no spring, no overshoot.** Motion is mechanical and precise.

## 11. Design System Notes

### 11a. Use Constraints
**Appropriate for:** Corporate branding, industrial dashboards, financial tools, logistics apps, heritage-brand interfaces, any application requiring authority and clarity. Best suited for light-background, low-density, high-contrast environments.

**Wrong for:** Playful consumer apps, social media platforms, creative portfolios, dark-mode-first applications, gaming, editorial content with serif typography, or any context requiring emotional warmth or organic shapes.

### 11b. Prompt Phrases
- "Geometric sans-serif wordmark with a perfect red circle"
- "Strict two-colour palette of deep corporate blue and vivid signal red"
- "Flat, unshaded, mathematically precise shapes — no gradients or shadows"
- "All caps headlines with tight tracking, flush left ragged right body text"
- "Red reserved exclusively for the circular logo element"
- "Modular grid with generous white space — at least one full column margin"
- "Offset print simulation: dot screen, paper grain, slight misregistration on red"
- "Hard mechanical motion with linear timing and staccato reveals"

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description.

rule: All shapes must remain flat, unshaded, and mathematically precise — no simulated depth, rotation, or 3D transforms.
do:   Keep all shapes flat, unshaded, mathematically precise. Background surfaces are pure white (#FFFFFF), buttons are flat blue (#0033A0 or #003366) with no shadow or gradient. The logo sits flat at 0° rotation.
avoid: Gradients, drop shadows, bevels, or any simulated depth. Rotation or 3D transforms of the full logo. A button with box-shadow immediately breaks the identity.

rule: Use only the two corporate colours (blue + red) plus white — no tints, shades, or third accent colour.
do:   Every screen uses only primary blue, secondary red, and white. Text is blue or white, the circular motif is red, backgrounds are white. The palette is closed.
avoid: A third accent colour or tints/shades of the two colours. Adding a green accent for success states or a grey tint for disabled elements violates the closed palette.

rule: Apply red only to the circular element or key structural details — never to body text or large background areas.
do:   The perfect circle badge is filled secondary red (#E31837). Horizontal rules may use red as a thin accent (1pt). Red is reserved for the signature circular motif.
avoid: Red on body text or large background areas. Red used as a primary interface colour for buttons or fills reads as a different system.

rule: Set all headlines and corporate names in all caps with tight tracking, using only Regular (400) and Bold (700) weights of a geometric sans-serif.
do:   Corporate wordmarks and section headings use an all-caps geometric sans (Univers/Helvetica) at font-bold with tracking-wider. Body text is mixed-case Regular at text-base.
avoid: Serif, italic, condensed, or light type variants. Lowercase or loosely tracked headlines read as a different design language.

rule: Left-align all text with a ragged right edge — never centered, justified, or right-aligned.
do:   Body copy, labels, and headings all start at the left grid column with a ragged right edge. Even single-line CTAs are flush left.
avoid: Centered or justified body text. Centered compositions break the modular grid logic and the authority of the identity.

rule: Use a modular grid with consistent 8pt-based spacing — all margins, padding, and gaps are multiples of 8, and all structural corners are sharp.
do:   Use 4-column (mobile), 6-column (tablet), or 8-column (desktop) grids with gap-4 to gap-8 gutters. All corners are rounded-none except the perfect circle.
avoid: Rounded corners on structural elements (except the perfect circle, which uses rounded-full). Arbitrary padding values or irregular spacing break the grid discipline.

rule: Simulate offset print texture with dot screen halftone, paper grain, and optional misregistration on the red plate — maintain light backgrounds.
do:   Apply dot screen (10-15% black, multiply) and paper grain (feTurbulence, opacity 8-12%) to all white backgrounds. The red circular element may show 0.5-1pt misregistration.
avoid: Clean digital surfaces with no texture. Dark backgrounds for the identity — paper grain and dot screen require a light background to remain visible and authentic.

rule: Use high-contrast black-and-white photography with a 1pt primary blue border — no colour images without high-contrast treatment.
do:   Convert all images to grayscale(100%) with contrast(1.1-1.5), apply aspect-ratio 4/3 or 16/9, and add a 1pt solid primary blue border. No scrims or overlays.
avoid: Color photography without high-contrast treatment. Images without the blue border break the strict two-colour discipline of the page.

### 11d. Variation Bounds
1. **Color intensity:** Faded vintage (low saturation, paper yellowing) ↔ fresh corporate (full saturation, bright white stock). Maximum drift: reduce saturation by 20–30% and warm paper by 10%.
2. **Grid density:** 4-column loose layout (generous gutters) ↔ 6-column standard ↔ 8-column brochure grid (dense data displays). Gutters range from gap-4 to gap-8.
3. **Clean vs. worn:** Perfectly registered offset print (no misregistration, minimal grain) ↔ slightly misregistered (0.5–1pt offset) with visible dot screen and grain. Not to simulate heavy damage.
4. **Scale of symbol:** Oversized (w-24 or larger, occupying a full grid column) ↔ understated (w-8 to w-12, sitting quietly in the corner). Minimum size for readability: w-8.

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts. Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
A single-screen corporate application: white (#FFFFFF) surface with dot screen halftone (10-15% black, multiply, opacity 12%) and paper grain (feTurbulence, opacity 10%, overlay) applied across the full background. The Corporate Signature Block sits top-left within the 6-column grid: a geometric sans-serif wordmark (all caps, bold, primary blue #0033A0, text-3xl, tracking-wider) with the circular "O" in secondary red (#E31837, w-12 h-12, rounded-full), surrounded by two grid columns of white space. A thin horizontal rule (1pt, secondary red, full container width) separates the header from content. Below, a single card/panel (white fill, 1pt primary blue border, rounded-none, p-6) holds flush-left body text in primary blue at text-base font-normal. The Perfect Circle Badge (w-8 h-8, secondary red fill, rounded-full) marks a notification in the top-right corner. No drop shadows, no gradients. Text is flush left, ragged right. The 6-column grid uses gap-6 gutters. No motion at rest — the composition is static and authoritative.

### 11e.ii — Maximum Expressiveness
An oversized Corporate Signature Block spans three of six grid columns, with the wordmark at text-5xl and the circular "O" at w-16 h-16, the red plate shifted 0.7px down and 0.5px right (misregistration transform applied). A thick horizontal rule (2pt, primary blue #0033A0) runs the full container width below the signature. Three cards/panels in a 3-column grid: left card holds a high-contrast black-and-white photograph (4/3 aspect ratio, grayscale(100%) contrast(1.3), 1pt primary blue border, object-fit cover, no overlay), centre card displays a Geometric Arrow (primary blue, 45° lines, 2pt stroke, w-8 h-8) beside all-caps bold blue text at text-lg, right card shows a data table with alternating white/off-white rows and 1pt primary blue cell borders. The Perfect Circle Badge (w-12 h-12, secondary red fill, rounded-full) floats in the top-right corner with a subtle ink sheen (linear-gradient overlay at opacity-5). A secondary horizontal rule (1pt, secondary red, full width) separates main content from footer. The red circular element in the logo animates with a slow rotation (0→360deg over 4s, linear, looping). Paper grain and dot screen overlay the full composition at standard opacity. Text reveals use staccato typewriter (50ms intervals) on load for the headline.

### 11e.iii — Data Context
Data is displayed in a structured table spanning 6 columns: column headers in primary blue (#0033A0), uppercase, bold, text-sm, flush left, with a 1pt primary blue border-bottom across the full row. Data rows alternate white (#FFFFFF) and off-white (#F5F5F0) backgrounds with paper grain and dot screen at standard opacity. Cell borders are 1pt solid primary blue, rounded-none. Numeric values are set in the primary geometric sans-serif at text-sm font-bold, using lining figures, in on-surface (#1A1A1A). Status indicators use the Perfect Circle Badge (w-6 h-6, rounded-full): ok = primary blue (#0033A0) fill, warn = secondary red (#E31837) outline only (no fill), err = secondary red (#E31837) fill with white glyph if needed. Each metric row includes a label (primary blue, uppercase, text-xs font-bold) and a value (on-surface, text-sm font-bold). A signal-bar component shows proportional fill: track is a 2pt primary blue outline (height 4px), fill is primary blue at the specified percentage, flat with no glow. Bar charts use primary blue fill with secondary red reference lines at threshold values — no drop shadows, no gradients. Chart grid lines are 1pt primary blue at 25/50/75/100% heights, opacity-60. Data dots use the Perfect Circle shape (r=2.5px, primary blue fill). The table surface carries paper grain and dot screen at standard opacity values (10-15% dot, 8-12% grain). No motion on data elements — charts and tables are static.

### 11f. Sources

This subject has minimal verified imagery. The visual claims below should be treated with caution.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** The **Mobil Oil Identity Programme** was developed circa 1964 by the American design firm **Chermayeff & Geismar**. The programme is best known for its circular blue corporate logo, which features the word “Mobil” in a custom lowercase letterform, with the letter “o” rendered as a red circle.

**Verified imagery sources.** 2 URLs verified against institutional servers, distributed across:
- Victoria and Albert Museum, London — 1 URL(s)
- en.wikipedia.org — 1 URL(s)

No specific institutional records or archival imagery references have been captured for this entry. Key references remain unavailable pending further forensic sourcing.

**Named typefaces.** The typography of this style is attested as:
- Mobil logotype (designed by Chermayeff & Geismar 1964 — attestation: unknown) — rendered here as bespoke imagery — no web-font substitute
- Helvetica ( — attestation: conventional) — rendered here in Inter as the closest open substitute

**Honest gaps.** The most significant gap concerns colour exact standards: PMS 287 and 186 are unverified; the original colour specification may have used a different colour matching system (DIC, custom mix), and no Munsell, NCS, or Lab values are known. This uncertainty compromises accurate digital reproduction. Additional gaps include missing typographic details beyond Mobil logotype and Helvetica, and a lack of application guidelines documentation. Access to the original Chermayeff & Geismar project files or a verified Mobil brand manual would resolve these gaps.
