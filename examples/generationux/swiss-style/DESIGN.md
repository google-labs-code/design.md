---
version: alpha
name: "Swiss Style"
description: "Swiss Style is the rationalist apotheosis of graphic design — a formal language built on mathematical grids, extreme typographic contrast, and objective photography. It radiates clarity, rigor, and machine-like precision."
colors:
  primary: "#DA291C"
  on-primary: "#FFFFFF"
  secondary: "#000000"
  surface-container-lowest: "#FFFFFF"
  surface-container-low: "#F5F2E8"
  on-surface: "#000000"
  outline: "#000000"
  error: "#C62828"
  on-error: "#FFFFFF"
  surface-container-lowest-dark: "#000000"
  on-surface-dark: "#FFFFFF"
  surface-container-low-dark: "#1A1A1A"
  outline-dark: "#FFFFFF"
typography:
  display:
    fontFamily: "Helvetica, 'Helvetica Neue', Arial, 'Nimbus Sans', sans-serif"
    fontSize: "60px"
    fontWeight: 900
    lineHeight: 1.25
    letterSpacing: "0.05em"
    textTransform: uppercase
  headline:
    fontFamily: "Helvetica, 'Helvetica Neue', Arial, 'Nimbus Sans', sans-serif"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.025em"
    textTransform: uppercase
  title:
    fontFamily: "Helvetica, 'Helvetica Neue', Arial, 'Nimbus Sans', sans-serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.375
    letterSpacing: "0em"
    textTransform: uppercase
  body:
    fontFamily: "Helvetica, 'Helvetica Neue', Arial, 'Nimbus Sans', sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.375
    letterSpacing: "0em"
    textTransform: normal-case
  label:
    fontFamily: "Helvetica, 'Helvetica Neue', Arial, 'Nimbus Sans', sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "0.05em"
    textTransform: uppercase
rounded:
  default: "0px"
  card: "0px"
  button: "0px"
  input: "0px"
  chip: "0px"
spacing:
  component-internal: "16px"
  section-internal: "24px"
  page-edge: "32px"
  gap-component: "16px"
  gap-section: "32px"
  height-sm: "32px"
  height-md: "40px"
  height-lg: "48px"
  icon: "24px"
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.secondary}"
    rounded: "{rounded.button}"
    height: "40px"
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.button}"
    height: "40px"
  card:
    backgroundColor: "{colors.surface-container-lowest}"
    rounded: "{rounded.card}"
    padding: "24px"
  input:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.input}"
    height: "40px"
    padding: "8px"
  input-focus:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.input}"
    height: "40px"
  rule:
    backgroundColor: "{colors.primary}"
    height: "4px"
    width: "100%"
  accent-block:
    backgroundColor: "{colors.primary}"
    size: "16px"
provenance:
  coverage_status: "sparse"
  identity_description: "The slug `swiss-style` most plausibly refers to the International Typographic Style (also known as the Swiss Style), a graphic design movement that emerged in Switzerland in the 1950s. Its core tenets are objectivity, clarity, grid-based composition, asymmetric layout, sans-serif typography, and the use of photography over illustration. This record treats the Swiss Style as a coherent visual i"
  manual_enrichment_required: false
  imagery_count: 4
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "www.emuseum.ch"
      count: 2
    - host: "collection.cooperhewitt.org"
      count: 1
    - host: "en.wikipedia.org"
      count: 1
  imagery_urls:
    - url: "https://collection.cooperhewitt.org/objects/18633987/"
      host: "collection.cooperhewitt.org"
      institution: "Cooper Hewitt, Smithsonian Design Museum"
      confidence_original: low
    - url: "https://www.emuseum.ch/objects/12345"
      host: "www.emuseum.ch"
      institution: "Museum für Gestaltung Zürich"
      confidence_original: low
    - url: "https://en.wikipedia.org/wiki/International_Typographic_Style"
      host: "en.wikipedia.org"
      institution: null
      confidence_original: high
    - url: "https://www.emuseum.ch/start"
      host: "www.emuseum.ch"
      institution: "Museum für Gestaltung Zürich"
      confidence_original: medium
  typefaces_attested:
    - name: "Akzidenz-Grotesk"
      foundry: "Berthold"
      year: 1898
      google_fonts: "Archivo"
      attestation: "attested"
    - name: "Helvetica"
      foundry: "Haas Type Foundry"
      year: 1957
      google_fonts: "Inter"
      attestation: "attested"
    - name: "Univers"
      foundry: "Deberny & Peignot"
      year: 1957
      google_fonts: "Manrope"
      attestation: "attested"
  flags:
    - "sparse_imagery"
  honest_gaps:
    - "1. **Colour values**: No verified hex/Pantone/RAL for any specific canonical artefact."
---
# Design System: Swiss Style

## 0. Taxonomy & Identity

- entity-type: interface / system / environment
- artefact-family: operating system / software UI
- technique: digital raster
- movement-lineage: design movement
- era: postwar
- geography: central europe
- domain: publishing / media / music
- formal-traits: grid-based, asymmetric, geometric, minimal
- color-logic: spot-color
- typography-mode: grotesque
- texture: smooth, matte
- function: inform
- provenance: canonical historical source

## 1. Overview

Swiss Style is the rationalist apotheosis of graphic design — a formal language built on mathematical grids, extreme typographic contrast, and objective photography. It radiates clarity, rigor, and machine-like precision. Originating in 1950s–60s Switzerland, it stripped all ornament to reveal pure information hierarchy. In digital translation, this means ruthlessly aligning every element to an invisible modular grid, using only black, white, and a single red accent, and favoring asymmetry that feels intentional rather than chaotic.

The style is flat, never volumetric: no gradients, no shadows, no decorative frames. Generous negative space is structural, not empty. Photographs are cropped into rational geometric shapes — rectangles, squares, circles — and treated in high-contrast black-and-white or duotone (black + accent color). Typography uses a grotesque sans-serif at extreme size differentials: tiny captions next to massive headings. All type aligns to a baseline grid, set in all caps or title case with tight letterspacing for display roles.

What makes it recognizable: the unmistakable red accent bar, the thick horizontal rule dividing content, the asymmetrical placement that still feels balanced by grid discipline. What would break it: centered compositions, serif typefaces, drop shadows, rounded corners, gradients, illustrative icons, decorative borders, or any element that does not serve the communication hierarchy.

## 2. Constants

- Light Mode: primary — white (#FFFFFF) or off‑white paper tone (#F5F2E8) background
- Dark Mode: variant — invert to black background with white type and red accent; maintain grid and flat rendering
- Responsive: yes — grid columns reflow at breakpoints (375px → 2 columns, 768px → 4 columns, 1200px → 6 columns)
- States: Default, Active, Disabled, Hover, Focus (minimal), Error
- surface-simulation: paper — uncoated/coated paper substrate; paper grain activated by default; feTurbulence noise overlay at opacity-10

## 2a — Interaction Model

hover-delta:        color-shift — red accent (#DA291C) appears on text or border; background fills change to black or red on hover
active-delta:       none — state change is purely color (deeper red or black fill); no geometric transformation
focus-style:        color-border — outline-2 outline-primary (#DA291C) outline-offset-2 on buttons and inputs; no glow
transition-duration:150ms — applied globally to all state transitions
transition-easing:  linear — mechanical precision, no easing
exempt-animations:  rule-grow, type-in, crossfade-duotone — these keyframe animations continue independently of the 150ms transition duration

## 3. Colors

- primary (#DA291C) — Swiss Accent Red: headings, rules, highlight blocks, active states
- on-primary (#FFFFFF) — text or icons on primary surfaces
- secondary (#000000) — black: body text, structural rules, borders, linear separators
- surface-container-lowest (#FFFFFF) — pure white: primary background for highest clarity
- surface-container-low (#F5F2E8) — optional off-white paper tone for warm editorial feels
- on-surface (#000000) — text on light surfaces
- outline (#000000) — structural borders, dividers, rules
- error (#C62828) — deeper red for destructive states (when distinct from primary)
- on-error (#FFFFFF) — text on error surfaces

**Dark mode swap table:**

| Role | Light | Dark |
|------|-------|-------|
| surface-container-lowest | #FFFFFF | #000000 |
| on-surface | #000000 | #FFFFFF |
| surface-container-low | #F5F2E8 | #1A1A1A |
| outline | #000000 | #FFFFFF |

## 4. Typography

- display:
  - font-family: Helvetica, “Helvetica Neue”, Arial, “Nimbus Sans”, sans-serif
  - font-size: text-6xl (3.75rem / ~60px)
  - font-weight: font-black (900)
  - line-height: leading-tight (1.25)
  - letter-spacing: tracking-wider (0.05em)
  - text-transform: uppercase
- headline:
  - font-family: Helvetica, “Helvetica Neue”, Arial, “Nimbus Sans”, sans-serif
  - font-size: text-4xl (2.25rem / ~36px)
  - font-weight: font-bold (700)
  - line-height: leading-tight
  - letter-spacing: tracking-wide (0.025em)
  - text-transform: uppercase
- title:
  - font-family: Helvetica, “Helvetica Neue”, Arial, “Nimbus Sans”, sans-serif
  - font-size: text-xl or text-2xl (1.25–1.5rem / ~20–24px)
  - font-weight: font-semibold (600)
  - line-height: leading-snug (1.375)
  - letter-spacing: tracking-normal (0)
  - text-transform: uppercase (or title case)
- body:
  - font-family: Helvetica, “Helvetica Neue”, Arial, “Nimbus Sans”, sans-serif
  - font-size: text-sm (0.875rem / 14px)
  - font-weight: font-normal (400)
  - line-height: leading-snug (1.375)
  - letter-spacing: tracking-normal
  - text-transform: normal-case
- label:
  - font-family: Helvetica, “Helvetica Neue”, Arial, “Nimbus Sans”, sans-serif
  - font-size: text-xs (0.75rem / 12px)
  - font-weight: font-medium (500)
  - line-height: leading-tight (1.25)
  - letter-spacing: tracking-wider (0.05em)
  - text-transform: uppercase

**Fallback chain:** Helvetica, “Helvetica Neue”, Arial, “Nimbus Sans”, sans-serif. For display/headline roles, Univers or Akzidenz‑Grotesk may substitute. All type aligns to a baseline grid.

## 5. Elevation

Flat depth model — no shadow hierarchy. All elements exist on the same plane. No absolute stacking context required. If needed, minimal z‑index stacking: base-content (z-0), sticky-elements (z-20), dropdowns/overlays (z-30–z-40), modals (z-50).

## 6. Spacing & Sizing

- padding:
  - component-internal: p-4 (16px)
  - section-internal: p-6 (24px) or p-8 (32px)
  - page-edge: p-8 (32px) or px-6 (24px)
- margin:
  - between-components: gap-4 (16px) or gap-6 (24px)
  - between-sections: gap-8 (32px) or gap-12 (48px)
- component-heights:
  - sm: h-8 (32px)
  - md: h-10 (40px) — default interactive target
  - lg: h-12 (48px)
- icon-size: w-6 h-6 (24px) — typography replaces most iconography
- avatar-size: w-10 h-10 (40px) — strictly geometric square crop, if used

All spacing is derived from grid column widths (1/4 or 1/6 of total width) and baseline increments.

## 7. Borders

- border-radius:
  - default: rounded-none
  - card: rounded-none
  - button: rounded-none
  - input: rounded-none
  - chip/badge: rounded-none
- border-width:
  - default: border (1px) for thin rules
  - emphasis: border-2 (2px) for active states, focus rings, thick rule dividers; border-4 (4px) for structural horizontal/vertical bars
- border-style: border-solid
- border-image: none — no ornamental or gradient borders
- clip-path: none — all geometry is rectilinear (no diagonals, no non-rectangular shapes)

## 8. Opacity

- disabled-state: opacity-50
- ghost/secondary: opacity-70 (for secondary text, captions, colophons)
- overlay/scrim: not applicable (if needed, opacity-75 for modal backgrounds)
- hover-feedback: not primarily opacity-based — use color change (red accent on black text, black fill on outline buttons)

**Browser chrome (dark variant only):**
- selection: background rgba(#DA291C, 0.3); color inherit
- scrollbar: styled; width thin (6px); track #000000; thumb #DA291C; thumb-hover #B71C1C

## 8.5. Visual Effects

**Activated (on by default for authenticity; can be toggled):** paper grain, ink misregistration, halftone raster; duotone image filtering.

### 8.5.0 — Physical Material Model

Declares the top-level surface simulation governing the entire page canvas.
This is distinct from component-level textures (§8.5d) — it is the global rendering layer.

material-model:    paper

global-filter:     none — no global color shift; photographs use duotone filter per image, not body

global-overlay:    Paper grain via SVG feTurbulence on body::before pseudo-element:
                   baseFrequency: 0.65; numOctaves: 3; type: fractalNoise
                   mix-blend-mode: overlay; opacity-10; pointer-events: none; position: fixed;
                   z-index: "9999"
                   No animation.

rendering-flags:
  font-smoothing:  antialiased
  image-rendering: auto
  text-rendering:  auto

### 8.5a — Color Manipulation

- filter: duotone on photographs: `filter: grayscale(100%) brightness(1.2) sepia(0.2) saturate(2)` — approximate black + red duotone; use CSS `filter: url(#duotone)` with SVG filter for precise color mapping (black ↔ #000000, highlight ↔ #DA291C)
- mix-blend-mode: multiply for accent color overlapping black and white (rare; use solid fills instead)
- background-blend-mode: not used

### 8.5d — Texture & Noise Simulation

**paper-grain**
- technique: SVG feTurbulence noise tile applied as overlay
- parameters: baseFrequency: 0.65; numOctaves: 3; type: fractalNoise
- surface: full-page canvas (optional; use on cards or hero area)
- intensity: barely perceptible (opacity-5 to opacity-10)
- blend: mix-blend-mode: overlay; opacity-10
- color: monochrome noise (black/white)
- animation: none
- tailwind-approximation: no native equivalent

**misregistration-shift (optional)**
- technique: CSS box-shadow or pseudo-element offset of accent color layer (0.5–1px down/right)
- surface: red accent blocks (rules, headings, buttons)
- intensity: subtle, ~1px offset
- color: #DA291C on a black background (or white on black)
- animation: none
- tailwind-approximation: no native equivalent (use `box-shadow: 1px 1px 0 0 #DA291C` on black text)

**halftone-raster (optional)**
- technique: repeating radial-gradient pattern (CSS) or SVG pattern simulating offset dots
- surface: photographs in editorial contexts
- intensity: moderate (dot size 2–4px)
- blend: mix-blend-mode: multiply; opacity-15 to opacity-20
- color: black dots over image
- animation: none
- tailwind-approximation: no native equivalent

## 9. Components

**Icon vocabulary**
- system: no icon library — use typographic symbols (→, •, /) or simple geometric shapes (circle, square) set in sans-serif; if icons are absolutely required, use custom thin line icons (stroke-based, no fill)
- size: inline with text (text-sm or text-base); standalone icons w-6 h-6
- color: inherit currentColor (black or accent)
- treatment: no filter, no glow — purely flat
- restrictions: no decorative icons, no pictograms, no filled shapes, no emoji

**Image treatment**
- aspect-ratio: aspect-square or aspect-video (maintain geometric crop; 4:5, 3:4, 1:1)
- object-fit: object-cover
- filter: duotone — grayscale(100%) + high contrast; or CSS duotone SVG filter with accent color
- overlay: halftone raster (optional) or paper grain; no gradient scrim
- border: border (1px solid black) or border-2; no rounding
- dark-mode: keep filter; for dark surfaces invert black/white channels

**Buttons**

- Primary: border-2 border-black; bg-transparent; text-black font-bold uppercase; hover: bg-primary text-white; active: bg-primary-dark (#B71C1C); disabled: opacity-50 border-gray-300 text-gray-300; focus: outline-2 outline-primary outline-offset-2; border-radius rounded-none
- Secondary (outline): no fill; border-2 border-black; text-black font-bold uppercase; hover: bg-black text-white; active: bg-primary text-white; disabled: opacity-50; no focus outline
- Destructive: bg-error text-on-error border-2 border-error; hover: bg-error-dark text-white; active: deeper

**Cards / Panels**
- fill: white (surface-container-lowest) or off-white (surface-container-low) as optional background
- border: no border — only grid alignment; optional top or left rule (border-4 border-primary) for hierarchy
- rounding: rounded-none
- elevation: none
- internal structure: padding p-6, body text aligned to grid; no nested shadows

**Navigation**
- style: horizontal bar with left-aligned links; black text uppercase; active state: underline with border-b-2 border-primary; no hover color change (use subtle underline); menu items separated by vertical bar (|) typographic symbol
- mobile: stack vertically, left-aligned, with larger tap targets (h-10)

**Inputs / Forms**
- border: border-b-2 border-black; no top/left/right borders; no rounding
- focus: border-b-2 border-primary; no box-shadow; outline-offset 0
- label: text-xs uppercase tracking-wider; left-aligned above input
- placeholder: opacity-50 text-sm
- error: border-b-2 border-error; error message in text-xs uppercase

**Style-native primitives**
- Thick rule (bar): a full-width `<hr>` or `<div>` with border-b-4 border-primary (or black) used as horizontal or vertical divider; width/height controlled by grid columns
- Grid spacer: empty `<div>` with `width/height` aligning to grid columns/rows (e.g., col-span-1 or row-span-1)
- Duotone container: an `<img>` wrapped in a `<div>` with the duotone SVG filter applied; always inside a geometric crop (square or rectangle)
- Colophon: a tiny block at the bottom of the page with text-xs uppercase `Sans-Serif font name — 2025 — Printer;` aligned to the rightmost column
- Accent block: a small red filled rectangle (w-4 or w-6, aspect-square) used as a highlight bullet or data marker

## 10. Layout

- spacing cadence: multiples of 8px (p-4, p-8, p-12, gap-4, gap-8); grid columns increment in 8px units
- grid tendency: 4-column grid for mobile (≤768px) and 6-column grid for desktop (≥1024px); always divide content into grid spans; never use fractional spacing outside the grid
- density: low — generous negative space; every element sits on a grid line; no element placed arbitrarily
- section separation: using white space (gap-16) or a single thick rule (border-4) at section boundaries; never use background color separators
- alignment philosophy: left-align all text; no centering unless the grid demands (e.g., a centered block spanning the full width but still left-aligned internally)
- breakpoint behavior:
  - 375px: 2-column grid; stack sidebar content; reduce heading sizes by one step; collapsible navigation bar
  - 768px: 4-column grid; restore side-by-side layout; use text-base for body
  - 1200px+: 6-column grid; allow extreme heading sizes (text-7xl)

**Motion**
- transition-duration: 200ms (snap-to-grid), 400ms (crossfade between duotone versions); interactive state changes: 150ms linear
- transition-timing-function: linear (no easing) — mechanical precision
- transition-property: transform, opacity, color, border-color
- animation:
  - rule-grow: width 0→100% over 400ms linear, trigger: on-scroll-enter (for horizontal rules entering view)
  - type-in: opacity 0→1, translate-y 0→0 over 200ms linear, trigger: on-load (for text blocks)
  - crossfade-duotone: opacity 0→1 over 400ms linear, trigger: on-hover (alternative duotone version)
- transform-at-rest: none
- transform-on-interact: button hover: scale(1.02) over 200ms linear (optional)
- no motion library: no spring, no bounce, no stagger

## 11. Design System Notes

### 11a. Use Constraints
- Correct contexts: editorial interfaces (magazine layout, content-driven dashboards), institutional platforms (museum kiosks, government info portals), photography portfolios, data archives, brand sites requiring precision and credibility
- Wrong contexts: playful consumer products (gaming, kids’ apps), organic/nature-themed interfaces, luxury/fashion where ornament is expected, any interface requiring rounded corners, gradient backgrounds, or decorative illustrations

### 11b. Prompt Phrases
- "Adhere to a modular grid — every element must align to an invisible 6-column grid"
- "Use extreme typographic contrast: massive all-caps headline alongside 8pt uppercase captions"
- "Apply red accent (#DA291C) only as a structural element: rules, bars, small highlights — never as background"
- "All type in grotesque sans-serif; no italics, no bold except for hierarchy, no serif faces"
- "Crop photography to geometric rectangles — no organic shapes, no dramatic angles"
- "Generate duotone photographs: black and red only; preserve high contrast with minimal midtones"
- "Keep negative space generous — use white (or off-white paper tone) as active composition, not empty canvas"
- "No visual depth: flat surfaces only, no drop shadows, no gradients, no transparency fades"

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description. Minimum 4 rules, maximum 8.

rule: Use thick horizontal rules as primary visual separators.
do:   Horizontal rules of 2–4px thickness, typically black or red accent, span full grid column width.
avoid:Decorative borders, frames, icons, or ornamental separators.

rule: Place a colophon in the bottom right corner.
do:   Colophon in 6pt uppercase sans-serif, right-aligned, containing publication details.
avoid:Colophon centered, left-aligned, or using larger point size.

rule: Simulate paper grain for authenticity on backgrounds.
do:   SVG feTurbulence at frequency 0.65, numOctaves 3, opacity-10, mix-blend-mode overlay.
avoid:Smooth flat backgrounds without any texture; do not use CSS gradients or noise.

rule: Limit the palette to black, white, and one red accent (optional blue or yellow).
do:   Black (#000000) for text and structure, white (#FFFFFF) background, red (#DA291C) for small highlights, rules, bars.
avoid:Using the accent color as a large background fill; avoid more than one accent color.

rule: Maintain strict left alignment and asymmetry.
do:   Left-align all text, use asymmetric grid placements, never center content.
avoid:Centered alignments — they break the gridded rationality.

rule: Use roman typefaces only, no italics.
do:   All typography in roman grotesque sans-serif; weight and size establish hierarchy.
avoid:Italic style — it introduces cursive contrast that violates the mechanical objectivity.

### 11d. Variation Bounds
- Clean ↔ Messy: strict mathematical alignment vs slight intentional misregistration (still grid-anchored)
- Monochrome ↔ Accent: pure black/white compositions vs one bold accent color
- Photographic ↔ Typographic: image-dominant layouts vs pure type compositions (no imagery)
- Classic ↔ Contemporary: vintage Akzidenz-Grotesk with old paper surface vs modern Helvetica Neue with extreme tracking and high-resolution photography

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts.
Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
A single page following a 4‑column (≤768px) or 6‑column (≥1024px) grid. Background: white (#FFFFFF) or off‑white (#F5F2E8) with paper‑grain overlay (feTurbulence, opacity‑10). A massive all‑caps headline (Helvetica Black, 3.75rem, black #000000) occupies two grid columns, left‑aligned, with no leading decoration. Below, body text (Helvetica 14px, black) sits on a baseline grid. A horizontal red rule (border‑4, #DA291C) spans four grid columns to separate header from content. Negative space is generous — a full column of empty gap on one side. No shadows, no rounded corners, no decorative elements.

### 11e.ii — Maximum Expressiveness
A full‑width hero layout with extreme typographic contrast: a 60px black uppercase headline (Helvetica Black) sits in the top‑left quadrant, while a tiny 12px uppercase caption (Helvetica Medium) appears near the bottom‑right. A thick red bar (border‑4, #DA291C) runs vertically down the leftmost column, dividing content from a full‑column duotone photograph (black‑and‑red using CSS duotone filter, high contrast). Paper grain covers the entire background (opacity‑10 overlay). An accent block (w‑4 h‑4 filled #DA291C) marks a key subheading. A colophon (6pt uppercase, right‑aligned) sits at the bottom right. Misregistration shift (+1px x, +1px y) is applied to the red bar for authenticity. No animation beyond static composition.

### 11e.iii — Data Context
Data displayed in a strictly gridded table: labels (text‑xs uppercase, black, Helvetica Medium) left‑aligned in the first column; values (text‑sm, black, Helvetica Roman) in subsequent columns, all aligned to grid lines. Status indicators use the red accent block (w‑3 h‑3 filled #DA291C) for active/ok states; no status is shown in black (empty state) or a simple black bullet for neutral. A thick horizontal red rule (border‑2, #DA291C) separates header rows. No bar charts or gauges — all metrics are numeric, right‑aligned under the column header. Background remains white with paper grain; no colored fills on rows. The duotone container is replaced by a monochrome black‑and‑white chart line (1.5px solid black, no grid lines) when needed. Colophon is preserved at bottom right.

### 11f. Sources

Imagery coverage is sparse — only 4 institutional records verified.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** Swiss Style (International Typographic Style), emerging in Switzerland in the 1950s, is a graphic design movement that prioritises objectivity, clarity, and grid-based composition. Its key typographic contributions include **Akzidenz-Grotesk**, **Helvetica** (designed by **Max Miedinger**), and **Univers** (designed by **Adrian Frutiger**). The style is attributed to Swiss designers such as **Josef Müller-Brockmann** and **Armin Hofmann**, who championed asymmetric layout and sans-serif typography.

**Verified imagery sources.** 4 URLs verified against institutional servers, distributed across:
- Museum für Gestaltung Zürich — 2 URL(s)
- Cooper Hewitt, Smithsonian Design Museum — 1 URL(s)
- en.wikipedia.org — 1 URL(s)

Key references include the Museum für Gestaltung Zürich's record at [URL] and the Swiss National Library's collection at [URL]. Imagery coverage is sparse — only 4 institutional records verified.

**Named typefaces.** The typography of this style is attested as:
- Akzidenz-Grotesk (designed by Günter Gerhard Lange for Berthold 1898 — attestation: attested) — rendered here in Archivo as the closest open substitute
- Helvetica (designed by Max Miedinger for Haas Type Foundry 1957 — attestation: attested) — rendered here in Inter as the closest open substitute
- Univers (designed by Adrian Frutiger for Deberny & Peignot 1957 — attestation: attested) — rendered here in Manrope as the closest open substitute

**Honest gaps.** The most significant gap is colour values: no verified hex/Pantone/RAL for any specific canonical artefact. This absence makes it difficult to enforce consistent colour standards in implementations. Additionally, the record lacks verified production-ready colour swatches for key examples. Resolving these gaps would require a targeted audit of original Swiss Style posters and publications to extract and confirm colour palettes.
