---
version: alpha
name: "Isotype Visual Education System (Neurath)"
description: "A modular pictographic language for statistical and explanatory diagrams developed in 1920s-30s Vienna by Otto Neurath, Gerd Arntz, and Marie Reidemeister — rational, didactic, and ruthlessly simplified with every element serving a single instructional purpose."
colors:
  primary: "#000000"
  on-primary: "#FFFFFF"
  background: "#F5F0E8"
  on-surface: "#000000"
  on-secondary: "#FFFFFF"
  outline: "#000000"
typography:
  display:
    fontFamily: "Futura, 'Futura PT', 'Century Gothic', 'Trebuchet MS', sans-serif"
    fontSize: "48px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.08em"
    textTransform: "uppercase"
  headline:
    fontFamily: "Futura, 'Futura PT', 'Century Gothic', 'Trebuchet MS', sans-serif"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.05em"
    textTransform: "uppercase"
  title:
    fontFamily: "Futura, 'Futura PT', 'Century Gothic', 'Trebuchet MS', sans-serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.375
    letterSpacing: "0em"
    textTransform: "uppercase"
  body:
    fontFamily: "Futura, 'Futura PT', 'Century Gothic', 'Trebuchet MS', sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
    textTransform: "uppercase"
  label:
    fontFamily: "Futura, 'Futura PT', 'Century Gothic', 'Trebuchet MS', sans-serif"
    fontSize: "12px"
    fontWeight: 300
    lineHeight: 1.25
    letterSpacing: "0em"
    textTransform: "uppercase"
rounded:
  default: "0px"
spacing:
  component-internal: "0px"
  section-internal: "16px"
  page-edge: "32px"
  gap-component: "16px"
  gap-section: "32px"
  icon: "48px"
components:
  pictogram-cell:
    backgroundColor: "transparent"
    rounded: "{rounded.default}"
    size: "64px"
  data-row:
    backgroundColor: "transparent"
    height: "64px"
    width: "100%"
  chart-frame:
    backgroundColor: "{colors.background}"
    rounded: "{rounded.default}"
    padding: "32px"
    width: "100%"
  headline:
    textColor: "{colors.on-surface}"
    backgroundColor: "transparent"
    padding: "16px"
  legend-key:
    textColor: "{colors.on-surface}"
    backgroundColor: "transparent"
    padding: "8px"
  grid-divider:
    backgroundColor: "{colors.outline}"
    height: "1px"
    width: "100%"
provenance:
  coverage_status: "complete"
  identity_description: "The slug `isotype-visual-education-system-neurath` refers to the International System of Typographic Picture Education (ISOTYPE), a visual language for statistical and factual information developed from the mid‑1920s by Otto Neurath, in collaboration with Marie Neurath (née Reidemeister) and the graphic designer Gerd Arntz. ISOTYPE is a systematic method comprising a defined set of drawing con"
  manual_enrichment_required: false
  imagery_count: 5
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "collections.reading.ac.uk"
      count: 2
    - host: "archive.org"
      count: 1
    - host: "en.wikipedia.org"
      count: 1
    - host: "www.wienmuseum.at"
      count: 1
  imagery_urls:
    - url: "https://collections.reading.ac.uk/special-collections/"
      host: "collections.reading.ac.uk"
      institution: "University of Reading Special Collections"
      confidence_original: low
    - url: "https://archive.org/details/internationalpic00neur"
      host: "archive.org"
      institution: "Internet Archive"
      confidence_original: medium
    - url: "https://en.wikipedia.org/wiki/Isotype_(picture_language)"
      host: "en.wikipedia.org"
      institution: "Wikimedia Foundation"
      confidence_original: high
    - url: "https://www.wienmuseum.at/en/"
      host: "www.wienmuseum.at"
      institution: "Wien Museum"
      confidence_original: low
    - url: "https://collections.reading.ac.uk/"
      host: "collections.reading.ac.uk"
      institution: "University of Reading"
      confidence_original: low
  typefaces_attested:
    - name: "Futura"
      foundry: null
      year: 1927
      google_fonts: "Jost"
      attestation: "unverified"
    - name: "Primär-Grotesk"
      foundry: "J. G. Schelter & Giesecke"
      year: null
      google_fonts: null
      attestation: "unverified"
    - name: "Erbar-Grotesk"
      foundry: null
      year: null
      google_fonts: "Jost"
      attestation: "unverified"
    - name: "hand-drawn sans-serif logotype and label lettering"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "attested"
    - name: "Gill Sans"
      foundry: null
      year: null
      google_fonts: "Cabin"
      attestation: "unverified"
  flags:
    []
  honest_gaps:
    - "1. **Colour coordinates**: No confirmed hex/CMYK/Pantone values for any ISOTYPE colour. Providers gave conflicting approximations. Resolution: spectrophotometry on original prints."
---
# Design System: Isotype Visual Education System (Neurath)

## 0. Taxonomy & Identity

entity-type:        interface / system / environment
artefact-family:    poster / chart / diagram
technique:          printmaking (offset lithography simulation)
movement-lineage:   design movement
era:                interwar (1920s–1930s)
geography:          central europe (Vienna)
domain:             museum / archive / education
formal-traits:      grid-based, modular, geometric, flat, informational
color-logic:        spot-color (key plate + one or two accent fills)
typography-mode:    geometric sans-serif (all caps)
texture:            grainy, printed-register-shift, halftone dot pattern
function:           inform, instruct
provenance:         canonical historical source / revival

## 1. Overview

The Isotype Visual Education System, developed by Otto Neurath, Gerd Arntz, and Marie Reidemeister in 1920s–30s Vienna, is a modular pictographic language for statistical and explanatory diagrams. Its core philosophy: replace numbers with repeated identical symbols, eliminate visual noise, and make data legible at a glance. The style is rational, didactic, and ruthlessly simplified — every element serves a single instructional purpose. 

Emotionally, it is neutral, objective, and pedagogically authoritative — clarity over expression. It feels like a 1930s printed poster in a progressive school: black ink on uncoated paper, one or two spot colors, absolute clarity. Density is moderate with generous equal margins and a fixed 4:3 or 3:2 aspect ratio. The rendering philosophy treats every symbol as an ideogram — no perspective, no overlap, no decoration.

**What makes it recognizable:**
- Flat‑top heads and right‑angle feet on human figures — no curves, no fingers, no facial features
- Uniform stroke width (1–2 pt) across all linework
- Strict profile or front‑on silhouettes — no perspective, no overlapping
- Black ink as primary; white (off‑white) paper ground; one or two spot‑color accents as solid fills only
- Geometric sans‑serif type, all caps or title case, aligned to the same baseline grid as pictograms
- Repetition of identical symbols to show quantity — never numbers
- Text labels placed outside pictogram cells (left, right, or above the row)
- Visible printing artefacts: paper grain, halftone dots in large colour areas, slight misregistration, ink gain

**What would break the style:** Curved or organic outlines, gradient fills, serif or script type, perspective rendering, overlapping symbols, use of numbers to represent counts, photographic imagery, multi‑page documents, interactive states.

## 2. Constants

Light Mode:   yes (primary) — off‑white paper ground (uncoated paper simulation); all providers agree.
Dark Mode:    no — the style is rooted in ink‑on‑paper; a dark adaptation would invert the entire system but is outside the canonical specification.
Responsive:   no — designed for fixed aspect ratio (4:3 or 3:2); if scaled, maintain square cell proportions and baseline grid alignment. [majority: 3 of 4 say no]
States:       Default (static) — no interactive states defined; all providers agree.
surface-simulation: paper — offset lithography on uncoated paper stock; paper grain, ink absorption.

## 2a — Interaction Model

hover-delta:        none — static print medium; no hover states
active-delta:       none
focus-style:        none
transition-duration:0ms
transition-easing:  none
exempt-animations:  none

## 3. Colors

All colours are used as solid fills only (no gradients, no tints). The black key plate is the primary ink; one or two accent colours may appear as solid shapes. Halftone screens are a texture effect, not a colour variation.

primary              (#000000) — Black ink [conventional]: all linework and silhouette fills for pictograms
on-primary           (#FFFFFF) — White: used only where black fills sit on coloured or black backgrounds
background           (#F5F0E8) — Off‑white paper [conventional]: full background, simulates uncoated stock as described by all providers
on-surface           (#000000) — Black: all text and label copy
secondary            CONTESTED:§2.hex_secondary — four different values given; no majority; re‑stack required
on-secondary         (#FFFFFF) — White text: when rendered on a red fill
tertiary             CONTESTED:§2.hex_accent — four different values given; no majority; re‑stack required
outline              (#000000) — Black: linework always black or very dark grey

**Variation note:** Providers agree that accent may be red, blue, yellow, or green (choose one or two). The palette above uses contested values for accent; implementor should choose one spot colour from the accepted historical palette (red #DA291C or #D62828, blue #0057B8 or #1976D2, etc.) after establishing a cited reference. Black presswork may be replaced with a slightly warm dark grey (#3E3E3A) to simulate 4‑colour black with brown touch.

## 4. Typography

All typography uses a geometric sans‑serif. Real family: Futura (primary), Kabel (fallback). Digital substitute: `Futura, 'Futura PT', 'Century Gothic', 'Trebuchet MS', sans-serif`. No serif, script, or decorative faces.

**Adjudication note for §3:** All four providers name Futura as the primary typeface, but none cite a foundry or year. Per typeface adjudication rule, without a credited source, the typeface is not attestable. Therefore primary_typeface and secondary_typeface are contested. The style parameters below use the majority phrasing but should be considered provisional until a cited attribution is established.

| Role      | Font family (provisional) | Font size | Font weight | Line height | Letter spacing | Text transform |
|-----------|---------------------------|-----------|-------------|-------------|----------------|----------------|
| display   | Futura, Kabel, or geometric sans | text-5xl (48px) to text-6xl (60px) | font-bold | leading-tight (1.1–1.25) | tracking-wider (+0.05em to +0.1em) | uppercase |
| headline  | same as display | text-3xl (30px) to text-4xl (36px) | font-bold | leading-tight | tracking-wide | uppercase |
| title     | same | text-xl (20px) to text-2xl (24px) | font-semibold | leading-snug (1.3) | tracking-normal | uppercase |
| body      | same | text-sm (14px) to text-base (16px) | font-normal | leading-normal (1.5) | tracking-normal | uppercase |
| label     | same | text-xs (12px) to text-sm (14px) | font-light or font-medium | leading-tight | tracking-normal | uppercase |

**Notes:**
- `display` used for chart titles, `headline` for section headings, `title` for row labels, `body` for captions and keys, `label` for axis annotations.
- All weights available in the chosen face. Tracked lettering is essential for the Bauhaus‑era feel.
- No italic, no lowercase when possible. Use title case optionally for labels.
- All text set on baseline grid matching pictogram row height (1×1 grid unit).

**§3 fields:**
- primary_typeface: CONTESTED:§3.primary_typeface — unanimous on Futura but no foundry or year cited; re‑stack required
- secondary_typeface: CONTESTED:§3.secondary_typeface — providers gave [Kabel / not specified / Century Gothic / Jost]; no consensus; re‑stack required
- google_fonts_substitute: CONTESTED:§3.google_fonts_substitute — only one provider mentions Century Gothic/Trebuchet MS; no majority; re‑stack required

## 5. Elevation

Flat depth model — no shadow hierarchy. All components share a single 2D plane. Stacking context is not required.

§5.ornamental_system: Not defined — all providers agree on absence of decorative elements.

## 6. Spacing & Sizing

Based on an 8px modular grid. The pictogram cell is a predefined square unit (e.g., 48×48px or 64×64px). All values below are screen‑ready approximations; for print, scale proportionally to target format.

padding:
  component-internal:  p-0 to p-1  (no internal padding in pictogram cells; minimal in chart cells)
  section-internal:    p-4 to p-8  (between chart content and surrounding margin)
  page-edge:           p-8 to p-12  (generous equal margins; no content touches trim edge)

margin:
  between-components:  gap-4 (between pictogram cells in a row) [majority: 3 of 4]
  between-sections:    gap-8 (between title, data rows, and caption block) [majority]

component-heights:
  pictogram-cell:      h-16 (1 grid unit = 64px, scalable; alternative h-12 = 48px)
  row-label-area:      h-16 (matches pictogram cell height for baseline alignment)

icon-size:             w-12 h-12 to w-14 h-14 (pictograms within cell, typically 75% of cell area)
avatar-size:           not applicable

## 7. Borders

border-radius:
  default:     rounded-none — all corners sharp; no rounding anywhere

border-width:
  default:     border-0 (no internal stroke separators; linework is drawn independently)
  emphasis:    border (1px) to border-2 (2px) for chart bounding box or key rules

border-style:  border-solid (solid lines only; never dashed or dotted)

border-image:  none
clip-path:     none (all shapes rectangular or simple geometric silhouettes)

Linework (1–2pt strokes) is applied via SVG `<path>` or `<rect>` with `stroke=#000000` and `stroke-width=1.5`; not expressed as CSS borders.

## 8. Opacity

disabled-state:     not applicable (no interactive components) [majority: 3 of 4]
ghost/secondary:    not applicable (all fills are solid; halftone is pattern, not opacity)
overlay/scrim:      not applicable (no layers)
hover-feedback:     not applicable (no interactivity)

One provider (crof‑glm) defines opacity values for interactive states; this is inconsistent with the static print medium and is rejected in synthesis.

## 8.5. Visual Effects — Texture & Noise Simulation

This style relies on simulated offset printing artefacts and surface texture. All effects are static (no animation). Compositing stack: base white/grain background → pictogram linework (black) → accent fill layer (with optional halftone texture) → misregistration offset (if active) → ink gain blur.

### 8.5.0 — Physical Material Model

material-model:    paper
global-filter:     none
global-overlay:    Paper grain via SVG feTurbulence on body::before,
                   baseFrequency=0.65, numOctaves=2–3, fractalNoise,
                   blend: multiply, opacity 0.05–0.15, pointer-events:none
rendering-flags:
  font-smoothing:  antialiased
  image-rendering: auto
  text-rendering:  auto

### 8.5d — Texture & Noise Simulation

**Paper grain:**
- technique: SVG feTurbulence (fractalNoise)
- parameters: baseFrequency 0.65, numOctaves 2–3, type fractalNoise
- surface: full background (white/off‑white)
- intensity: barely perceptible (opacity 0.05–0.15)
- blend: multiply or overlay, opacity 0.05–0.15
- colour: monochrome noise
- animation: none
- tailwind-approximation: no Tailwind native equivalent; require custom CSS or SVG filter

**Halftone dot pattern (colour fills only):**
- technique: CSS repeating‑radial‑gradient pattern
- parameters: dot size ≈ 1.5–2px, spacing ≈ 4–8px, angle 0° or 45°
- surface: large solid colour areas (accent backgrounds, not pictogram fills)
- intensity: moderate (dot coverage 50–70% at 15–25% opacity)
- blend: multiply over the flat fill
- colour: black dots on accent colour, or same accent colour on white
- animation: none
- tailwind-approximation: no Tailwind native equivalent; require custom `background-image`

**Ink gain (stroke softening):**
- technique: Gaussian blur on black linework
- parameters: blur radius 0.5–1px (simulates ink spread on uncoated paper)
- surface: all black stroke elements (pictogram lines, borders, text)
- intensity: minimal — edges legible but not razor‑sharp
- blend: normal
- colour: n/a
- animation: none
- tailwind-approximation: `blur-sm` (4px) is too large; use custom `filter: blur(0.5px–1px)`

**Misregistration offset:**
- technique: CSS transform (translate) on colour‑fill containers
- parameters: dx 0.25–0.5mm, dy 0–0.5mm (randomized per printed sheet)
- surface: all colour fills that abut black lines (accent layer)
- intensity: subtle, only visible on close inspection
- blend: normal (colour layer sits behind black linework)
- colour: accent colour
- animation: none
- tailwind-approximation: no Tailwind native equivalent; require custom `transform: translate(1px, 0px)`
## 9. Components

### Icon Vocabulary
icon-vocabulary:
  system:       custom pictogram glyphs (geometric silhouettes, flat‑top heads, right‑angle feet, no facial features)
  size:         w-12 h-12 to w-14 h-14 (within 64px cell)
  colour:       #000000 (always black for linework; never coloured)
  treatment:    no filter — purely flat vector; optional global ink gain
  restrictions: never add hair detail, facial features, fingers, toes, or perspective; profile facing left standard

### Image & Media Treatment
Not applicable — no photographic or raster imagery allowed. All graphics are vector pictograms.

### Pictogram Cell (base unit)
A square container with transparent background; icon centered at 75% of cell area; no border, no shadow, no rounding.

- corner: rounded-none
- border: none (the stroke itself defines the shape)
- fill: transparent by default; accent fill uses secondary or tertiary colour when emphasised
- shadow: none
- state: static only

### Data Row (horizontal strip of repeated pictograms)
- Container: flex row, gap-4 between cells (alternative gap-1 for tight stamping)
- Row background may be filled with spot colour (solid or halftone) behind all cells
- Text label placed to the left, right, or above the row (never inside cell)
- Label uses title or body typography, uppercase, black, left‑aligned
- Baseline aligned to pictogram row’s centre

### Chart Frame (full printed-page container)
- Aspect ratio: 4:3 or 3:2 (fixed)
- Padding: generous equal margins (p-8 to p-12)
- Background: surface or surface-off-white; paper grain optional
- Border: none or thin black rule (border-2) around the entire frame

### Headline (chart title)
- Positioned above the grid, spanning full width
- Typography: display role, uppercase, bold, wide tracking
- May have a black underline (1pt rule) separating title from data rows

### Legend / Key (below chart)
- Typography: label role, lighter weight, uppercase
- Layout: 2‑3 column grid of mini pictograms with adjacent caps labels
- Spacing: gap-2 between symbol and text
- May include colour key (e.g., "Red = exported goods")

### Registration Marks (implied)
- Not rendered in final output; designed as crop marks ±3mm outside trim zone in source files
- Encourages offset‑print realism

### Grid Divider (optional)
- Hairline rule (1pt black) separating rows or sections
- Used only when visual grouping needed

## 10. Layout

**Spacing cadence:** 8px base unit; generous margins; rows separated by one cell height (h-16) of white space; internal gaps between cells consistent.

**Grid tendency:** Strict modular grid – cells are square, rows align to baseline, all elements sit on an invisible grid of equal‑sized cells. No broken grids, no overlapping.

**Density:** Moderate — generous white space prevents crowding, but rows are packed with repeated symbols. Never tight or crowded.

**Section separation logic:** Rows separated by gap-8; captions sit below the main chart with a gap of 48–64px. Headlines above with 64px gap.

**Alignment philosophy:** Left‑aligned row labels; pictogram rows centre‑aligned within chart area; captions left‑aligned. Text labels align to baseline grid of pictograms.

**Breakpoint behavior:** Not applicable — fixed aspect ratio (4:3 or 3:2). For screen display, scale proportionally within viewport, maintaining aspect ratio. No responsive reflow.

**Motion:**
motion:
  No motion. All state changes are instantaneous (static print composition).
  animation: none
  transform-at-rest: all elements rest at transform: none
  transform-on-interact: no transform interactions

## 11. Design System Notes

### 11a. Use Constraints

**Appropriate for:** Static explanatory diagrams, educational charts, statistical infographics, museum labels/publications, textbook plates, quantitative displays where clarity and objectivity are paramount. Ideal for comparing quantities across categories (e.g., population per country, production per year) using repeated symbols.

**Wrong for:** Interactive dashboards, high‑density data displays, any medium needing perspective or overlap, photographic realism, animated infographics, multi‑page documents, contexts where numbers must appear instead of repeated icons, emotional brand storytelling, or any application requiring gradients, photographs, or complex illustrations.

### 11b. Prompt Phrases

- "Flat‑top heads and right‑angle feet – no curves on human figures"
- "Uniform stroke width (1–2pt) for all linework – no thick‑thin variation"
- "Repeat identical pictograms to show quantity – never use numbers for counts"
- "Limit accent colours to one or two solid fills – no gradients, no tints"
- "All text all‑caps in a geometric sans – no italics, no lowercase"
- "Simulate paper grain and halftone dot texture in large colour areas"
- "Apply slight offset between black line layer and colour fill layer (misregistration)"
- "No perspective, no overlapping, no facial features – strict profile or front‑on only"
- "Generous equal margins, fixed 4:3 or 3:2 aspect ratio"
- "Pictograms as reusable rubber stamps on a modular grid"

### 11c. Do / Avoid Block

rule: Linework must remain black (or very dark warm grey) — colour is never applied to lines, only to fills.
do:   Keep all lines black (or very dark warm grey) — never coloured linework.
avoid: Colour in linework; lines must remain uniformly dark, never tinted.

rule: Human figures require flat‑top heads and right‑angle feet; every object is geometrically abstracted to its simplest readable shape.
do:   Geometrically abstract every object to its simplest readable shape (car = rectangle + circles, house = square + triangle). Enforce flat‑top heads and right‑angle feet — no curves on human figures.
avoid: Curved lines on head tops or feet ends; any organic, curvy, or detailed character designs (fingers, faces, hair).

rule: Text labels sit outside pictogram cells and are set in all‑caps geometric sans; use repetition of symbols, never numbers, to express quantity.
do:   Place text labels outside pictogram cells, never inside. Set all text in geometric sans, uppercase. Represent quantity through repetition of identical pictograms.
avoid: Serif, script, or decorative typefaces; numbers to represent magnitude — rely on symbol repetition.

rule: Stroke width is uniform across all linework; accent colours are limited to one or two solid fills — no gradients, no tints, no shadows.
do:   Use uniform stroke width across the entire piece. Use one accent colour (at most two) as solid fills only.
avoid: Gradient fills, drop shadows, or any 3D effect; colour in linework; more than two accent colours.

rule: Composition respects a fixed aspect ratio (4:3 or 3:2) with equal margins; each pictogram is a separate stamp — no overlapping, merging, or perspective.
do:   Use equal margins and a fixed aspect ratio (4:3 or 3:2). Treat each pictogram as an independent stamp — never overlap or merge.
avoid: Overlapping or merging pictograms; perspective or depth cues; variation in margins or aspect ratio.

### 11d. Variation Bounds

The following parameters may be modulated while preserving style identity:

1. **Background texture:** Flat vector paper (no grain) ↔ scanned paper stock with grain (intensity 0–15%, multiply blend)
2. **Accent palette:** Single colour (e.g., red only) ↔ two colours (e.g., red + blue) – never more than two spot colours
3. **Black ink tone:** Pure black (#000000) ↔ slightly warm dark grey (Pantone 426 or #3E3E3A)
4. **Grid registration:** Strict integer alignment ↔ slight vertical misalignment of rows (±1–2px) replicating cheap offset printing
5. **Halftone presence:** Clean solid fills ↔ halftone dot pattern at 15–25% opacity on large colour areas

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts. Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
The system in its default, single-composition state: a single educational chart within a fixed 4:3 aspect ratio canvas.  
- **Surface:** Off‑white paper (#F5F0E8) with optional scanned‑paper grain at 8% opacity (multiply).  
- **Border:** Thin black rule (1–2pt #000000) around the entire chart frame.  
- **Headline:** Geometric sans (e.g., Futura), uppercase, bold, tracking 0.08em, black (#000000). Placed above the data rows, separated by a 1pt underline.  
- **Data area:** Three rows of pictogram cells, each row containing 5–8 identical black line‑art pictograms (e.g., stick figures, houses, ships) at 64px cell size, gap 16px between cells.  
- **Labels:** Geometric sans, uppercase, regular, left‑aligned to the left of each row.  
- **Row background:** Transparent (no fill).  
- **No accent colour at rest.**  
- **No motion, no shadows, no rounded corners.**

### 11e.ii — Maximum Expressiveness
The system with all its characteristic elements fully active: a full‑page statistical diagram that pushes every allowable parameter.  
- **Canvas:** 4:3 aspect ratio, generous equal margins (p-12).  
- **Background:** Scanned paper stock with grain (intensity 12%, multiply blend).  
- **Border:** Thin black rule (2pt) frames the entire composition.  
- **Headline:** Geometric sans, uppercase, bold, tracking 0.08em, black (#000000), with a 1pt underline.  
- **Data area:** Five rows of pictograms, each row representing a different category (e.g., exports, imports, production, consumption, reserves). Accent colours applied as solid fills to alternate pictograms: red (#D32F2F) for one category, blue (#1976D2) for another, remaining rows black‑only. Halftone dot pattern at 20% opacity over large colour‑filled areas.  
- **Row backgrounds:** Some rows have a solid accent‑colour fill (red or blue, halftone) behind all cells; others remain transparent.  
- **Misregistration:** Slight vertical offset (±1px) between black line layer and colour fill layer to simulate cheap offset printing.  
- **Legend/Key:** Below the chart, a 2‑column grid of mini pictograms with caption labels in geometric sans, uppercase, regular. Colour key: “Red = exported goods”, “Blue = imported goods”.  
- **Grid divider:** 1pt black hairline rule between the last data row and the legend.  
- **No motion, no gradients, no drop shadows.**

### 11e.iii — Data Context
How the system’s visual language adapts when the content is numeric, tabular, or status‑driven. Because the system is fundamentally a quantitative display, the “Data Context” is its native mode.  
- **Surface:** Off‑white paper with optional grain, as in At Rest.  
- **Primary data element:** A horizontal row of repeated identical pictograms. Each pictogram represents a fixed quantity (e.g., 1 million people). The row length directly encodes the numeric value.  
- **Typographic hierarchy:**  
  - Category label: geometric sans, uppercase, regular, text‑sm, left‑aligned, black.  
  - No value numbers appear — the symbol count is the number.  
  - Optional footnote: geometric sans, uppercase, light, text‑xs, below chart.  
- **Status representation:** Status is conveyed entirely by accent fill colour and halftone texture, never by icon change.  
  - “Active/ok” = red solid fill (or blue, depending on category)  
  - “Inactive/deprecated” = black outline only (no fill)  
  - “Caution” = halftone dot pattern over the existing colour fill (15% opacity)  
- **Table structure:** Rows are separated by uniform 8px white space. No cell borders within rows. Grid dividers used only between major row groups.  
- **No interactive states, no animations, no hover effects.** The composition remains static; any data change would require a new print run or screen reload.

### 11f. Sources

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** The **International System of Typographic Picture Education (ISOTYPE)** was developed from the mid‑1920s by **Otto Neurath** in collaboration with **Marie Neurath** (née Reidemeister) and the graphic designer **Gerd Arntz**. It is a systematic method comprising a defined set of drawing conventions for statistical and factual information.

**Verified imagery sources.** 5 URLs verified against institutional servers, distributed across:
- University of Reading Special Collections — 1 URL(s)
- Internet Archive — 1 URL(s)
- Wikimedia Foundation — 1 URL(s)
- Wien Museum — 1 URL(s)
- University of Reading — 1 URL(s)

No specific source imagery is recorded in the top imagery references of the forensic seed. Key references from the design system’s working files are not available in this coverage.

**Named typefaces.** The typography of this style is attested as:
- Futura (designed by Paul Renner 1927 — attestation: unverified) — rendered here in Jost as the closest open substitute
- Primär-Grotesk (for J. G. Schelter & Giesecke — attestation: unverified) — no Google Fonts substitute available
- Erbar-Grotesk (designed by Jakob Erbar — attestation: unverified) — rendered here in Jost as the closest open substitute
- hand-drawn sans-serif logotype and label lettering ( — attestation: attested) — rendered here as bespoke imagery — no web-font substitute
- Gill Sans (designed by Eric Gill — attestation: unverified) — rendered here in Cabin as the closest open substitute

**Honest gaps.** The most significant gap is the complete absence of confirmed colour coordinates: no hex, CMYK, or Pantone values exist for any ISOTYPE colour. Providers gave conflicting approximations, and no resolution has been reached. Spectrophotometry on original prints would resolve this gap by providing empirical data from the actual historical artefacts.
