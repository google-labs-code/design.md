---
version: alpha
name: "Wim Crouwel Grid System"
description: "A typographic and spatial language rooted in 1960s–70s Dutch modernism, based on a strict modular grid, monospaced type, single-case text, one spot accent colour, and offset-print texture simulation."
colors:
  primary: "#000000"
  on-primary: "#F5F0E8"
  on-secondary: "#F5F0E8"
  surface: "#F5F0E8"
  on-surface: "#000000"
  outline: "#000000"
  surface-container: "#F5F0E8"
  outline-variant: "#D4D0C8"
  inverse-surface: "#000000"
  inverse-on-surface: "#F5F0E8"
  ok: "#0033A0"
  warn: "#FEDD00"
  err: "#E31E24"
  delta-up: "#0033A0"
  delta-down: "#E31E24"
  delta-flat: "#D4D0C8"
typography:
  display:
    fontFamily: "Space Mono"
    fontSize: "72px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.1em"
    textTransform: "uppercase"
  headline:
    fontFamily: "Space Mono"
    fontSize: "48px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.075em"
    textTransform: "uppercase"
  title:
    fontFamily: "Space Mono"
    fontSize: "30px"
    fontWeight: 400
    lineHeight: 1.375
    letterSpacing: "0.05em"
    textTransform: "uppercase"
  body:
    fontFamily: "Space Mono"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.075em"
    textTransform: "lowercase"
  label:
    fontFamily: "Space Mono"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.075em"
    textTransform: "uppercase"
rounded:
  default: "0px"
  card: "0px"
  button: "0px"
  input: "0px"
  chip: "0px"
spacing:
  component-internal: "8px"
  section-internal: "24px"
  page-edge: "32px"
  gap-component: "16px"
  gap-section: "32px"
  height-sm: "32px"
  height-md: "40px"
  height-lg: "48px"
  icon: "16px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.button}"
    padding: "16px"
    height: "40px"
  button-primary-hover:
    backgroundColor: "#E31E24"
    textColor: "{colors.on-primary}"
    padding: "16px"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "16px"
  metric-cell:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "8px"
    height: "80px"
provenance:
  coverage_status: "complete"
  identity_description: ""
  manual_enrichment_required: false
  imagery_count: 5
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: null
    typography_map: "entries:113"
  sources:
    - host: "www.stedelijk.nl"
      count: 2
    - host: "en.wikipedia.org"
      count: 2
    - host: "www.rijksmuseum.nl"
      count: 1
  imagery_urls:
    - url: "https://www.stedelijk.nl/en/collection/3658-vormgeving"
      host: "www.stedelijk.nl"
      institution: "Stedelijk Museum Amsterdam"
      confidence_original: low
    - url: "https://en.wikipedia.org/wiki/New_Alphabet"
      host: "en.wikipedia.org"
      institution: "Wikipedia"
      confidence_original: high
    - url: "https://www.rijksmuseum.nl/en/collection/object/The-Christian-year-Thoughts-in-verse-for-the-sundays-and-holydays-throughout-the-year--38c431194e9dc51fb9c0b9d3bcf033e6"
      host: "www.rijksmuseum.nl"
      institution: "Rijksmuseum, Amsterdam"
      confidence_original: low
    - url: "https://en.wikipedia.org/wiki/Wim_Crouwel"
      host: "en.wikipedia.org"
      institution: "Wikipedia"
      confidence_original: high
    - url: "https://www.stedelijk.nl/en/collection"
      host: "www.stedelijk.nl"
      institution: "Stedelijk Museum Amsterdam"
      confidence_original: medium
  typefaces_attested:
    []
  flags:
    - "no_typography_extracted"
    - "no_colour_extracted"
  honest_gaps:
    []
---
# Design System: Wim Crouwel Grid System

## 0. Taxonomy & Identity

entity-type:        interface / system / environment
artefact-family:    editorial
technique:          digital vector
movement-lineage:   design movement
era:                postwar
geography:          central europe
domain:             publishing / media / music
formal-traits:      grid-based, modular, asymmetric, geometric, minimal
color-logic:        spot-color
typography-mode:    monospace
texture:            matte, grainy
function:           inform
provenance:         studio lineage

## 1. Overview

The Crouwel Grid System is a typographic and spatial language rooted in 1960s–70s Dutch modernism (Total Design, Stedelijk Museum). The grid is simultaneously structure and ornament — every letter, rule, and accent is a modular unit snapped to a mathematical matrix. The system is relentlessly geometric: only rectangles and straight lines are permitted; curves, decoration, and photography are excluded. Negative space is as active as ink. The emotional register is precise, spare, and authoritative.

What makes it recognizable: a strict modular grid visible at every scale; monospaced or geometric sans-serif type with wide, mechanical tracking; single-case text (all-uppercase or all-lowercase, never mixed); black, off-white, and exactly one unmodulated spot accent colour; generous margins (20–30% of the area); hairline rules dividing content zones; simulated offset-print artifacts (faint paper grain, subtle ink gain, registration misregister between spot colours); and one dominant typographic element occupying 30–50% of the composition.

What would break the style: gradients, curves, circles, or organic shapes; photography or illustration; mixed-case text, italics, or kerning adjustments; centered or justified alignment; drop shadows, opacity layers, or 3D transforms; more than one accent colour or any tint/shade of the accent; smooth digital-white backgrounds. Density is sparse to moderate; compositions are asymmetrical but mathematically weighted.

## 2. Constants

Light Mode:   primary (off-white paper background, black ink, single accent spot colour)
Dark Mode:    no [conventional] — system is inherently paper-based; one provider describes a dark-mode invert variant [unverified]
Responsive:   contested — some providers describe responsive grid reflow (4→6→12 columns at breakpoints); others assert fixed print medium. Majority accepts responsive adaptation.
States:       Default, Active, Disabled
surface-simulation: paper — uncoated offset paper stock with grain, ink gain, and registration misregister

## 2a — Interaction Model

hover-delta:        color-shift — hover triggers an immediate swap to the accent colour (or inverse for secondary) on all interactive elements
active-delta:       offset-shift — click/press translates active element downward by one grid unit (8px) instantly (no animation) on primary buttons; other elements may use color-shift
focus-style:        color-border — 2px solid accent underline or border on focused inputs and buttons; no ring
transition-duration:200ms — all state color changes use 200ms linear transition; offset-shift is instantaneous (0ms)
transition-easing:  linear
exempt-animations:  accent-pulse, type-reveal, grid-enter

## 3. Colors

All hex values are tagged [conventional] — approximations for offset printing on uncoated stock; no provider cites a Pantone reference or spectrophotometer reading.

primary                 (#000000) [conventional] — Black ink: all text, structural rules, filled button backgrounds
on-primary              (#F5F0E8) [conventional] — Off-white paper: reversed-out type on black
secondary / accent      (#E31E24) [conventional] — Spot red: single unmodulated accent for emphasis, active states, bars
on-secondary            (#F5F0E8) [conventional] — Reversed-out type on accent fills
surface                 (#F5F0E8) [conventional] — Off-white paper stock: main background, card fills
on-surface              (#000000) [conventional] — Default text on light background
outline                 (#000000) [conventional] — Hairline rules, borders, structural dividers
surface-container       (#F5F0E8) [conventional] — Same as surface; card/panel fills
outline-variant         (#D4D0C8) [conventional] — Faint grid guidelines (simulated light-blue pencil lines)
inverse-surface         (#000000) [conventional] — Dark surface for inverted zones
inverse-on-surface      (#F5F0E8) [conventional] — Light text on dark surface

**Accent substitution set** (one per composition, full saturation only): red (#E31E24) [canonical]; blue (#0033A0 or #0051BA) [conventional]; yellow (#FEDD00 or #FFD700) [conventional]. No tints, shades, or halftones of any accent colour.

**Dark mode swap (unverified variant):** primary ↔ #F5F0E8, on-primary ↔ #0D0D0D, surface ↔ #1A1A1A, on-surface ↔ #F5F0E8, outline ↔ #F5F0E8, outline-variant ↔ #2E2E28, inverse-surface ↔ #F5F0E8, inverse-on-surface ↔ #000000. Accent unchanged.

Semantic state colors:
ok:         #0033A0 — blue accent substitute; success, confirmed, nominal state
warn:       #FEDD00 — yellow accent substitute; caution, pending, advisory state
err:        #E31E24 — red accent (canonical); failure, critical, error state
delta-up:   #0033A0 — blue, positive numeric delta
delta-down: #E31E24 — red, negative numeric delta
delta-flat: #D4D0C8 — outline-variant, neutral (no change)

## 4. Typography

§3.primary_typeface:        CONTESTED:§3.primary_typeface — providers gave: [Courier New / Menlo / IBM Plex Mono / Space Mono / Roboto Mono / custom geometric monospace]; none cited a foundry with year; re-stack required
§3.secondary_typeface:      CONTESTED:§3.secondary_typeface — same monospace face as primary; no foundry citation; re-stack required
§3.google_fonts_substitute: CONTESTED:§3.google_fonts_substitute — providers gave: [Space Mono / Roboto Mono / IBM Plex Mono]; none cited a foundry; re-stack required

All type is monospace or geometric sans-serif with uniform stroke width, constructed from straight lines and right angles (square bowls on O, D, Q). All spacing is mechanical — no kerning adjustments. Single-case per role (uppercase for display/headline/title/label; lowercase for body). No italics, no mixed case within a composition. Tabular figures required for numeric data.

| Role    | font-size      | font-weight  | line-height   | letter-spacing | text-transform |
|---------|----------------|--------------|---------------|----------------|----------------|
| display | text-6xl–text-8xl | font-bold  | leading-tight | tracking-widest (0.1em+) | uppercase |
| headline| text-4xl–text-5xl | font-bold/font-normal | leading-tight–leading-snug | tracking-wider–tracking-widest | uppercase |
| title   | text-2xl–text-3xl | font-normal/font-semibold | leading-snug–leading-normal | tracking-wide–tracking-wider | uppercase |
| body    | text-base–text-lg  | font-normal | leading-normal–leading-relaxed (1.5–1.6) | tracking-wide–tracking-widest | lowercase |
| label   | text-xs–text-sm    | font-normal/font-bold | leading-normal–leading-tight | tracking-wider–tracking-widest | uppercase |

*Note: body text is lowercase; all other roles are uppercase. Leading tracking approximations; true Crouwel spacing may approach cap-height letter-spacing requiring custom CSS beyond Tailwind equivalents.*

## 5. Elevation

Flat depth model — no shadow hierarchy. All elements exist on a single plane.
Stacking context is purely z-index with no visual shadow cues:
  base-content:   z-0
  sticky:         z-20
  overlays:       z-40
  top-layer:      z-50

## 6. Spacing & Sizing

All spacing derives from the modular grid unit (base = 8px / 0.5rem). Margins, gutters, and paddings are always multiples of this unit.

padding:
  component-internal:  p-2 to p-4   (8–16px / 0.5–1 grid unit)
  section-internal:    p-6 to p-8   (24–32px / 3–4 grid units)
  page-edge:           p-8 to p-12  (32–48px / 4–6 grid units; 20–30% of page width/height)

margin:
  between-components:  gap-4 to gap-8  (16–32px / 2–4 grid units)
  between-sections:    gap-8 to gap-16 (32–64px / 4–8 grid units)

component-heights:
  sm:   h-8 to h-12  (32–48px)
  md:   h-10 to h-24 (40–96px)
  lg:   h-12 to h-48 (48–192px)

icon-size:  w-4 to w-6, h-4 to h-6  (geometric markers only; no pictorial icons)
avatar-size:  not applicable

## 7. Borders

border-radius:
  default:       rounded-none (all corners — no exceptions)
  card:          rounded-none
  button:        rounded-none
  input:         rounded-none
  chip/badge:    rounded-none

border-width:
  default:          border (1px) — hairline rules, structural dividers
  emphasis:         border-2 (2px) — active states, focus rings, accent underlines
  heavy:            border-4 (4px) — dominant structural bars (used by one provider)

border-style:  border-solid (no dashed/dotted except for construction guidelines)

clip-path:     none — except for intentional diagonal accents at 45°, using polygon() anchored to grid nodes [conditional]

## 8. Opacity

disabled-state:     opacity-40 to opacity-50 (hollow, ghosted presence)
ghost/secondary:    opacity-60 to opacity-70 (secondary information, captions)
overlay/scrim:      opacity-10 to opacity-20 (faint grid construction lines — "light blue pencil"; never translucent glass)
hover-feedback:     none — hover changes colour, not opacity
accent-pulse:       opacity 80% ↔ 100% loop (linear, no easing, 2s duration) [used by some providers for animated accent elements]

No transparency except for disabled-state opacity, faint grid guidelines, and print-texture simulation layers. Browser chrome: no custom specifications — browser defaults are acceptable.

## 8.5. Visual Effects

### 8.5.0 — Physical Material Model
Declares the top-level surface simulation governing the entire page canvas.
This is distinct from component-level textures (§8.5d) — it is the global rendering layer.

material-model:    paper

global-filter:     none — the paper grain and grid artifacts are applied via overlays, not a body filter

global-overlay:    Paper grain via body::after pseudo-element:
                   SVG feTurbulence(baseFrequency=0.6, numOctaves=2, type=fractalNoise),
                   monochrome noise tinted to paper tone (#F5F0E8),
                   mix-blend-mode: overlay, opacity-10, position:fixed, z-index:9998, pointer-events:none.
                   Faint grid lines (repeating-linear-gradient, #D4D0C8 0.5px, opacity-15) on a separate pseudo‑element beneath content.

rendering-flags:
  font-smoothing:  antialiased
  image-rendering: auto
  text-rendering:  auto

The interface mimics offset lithography on uncoated paper. A single compositing stack is declared for all surfaces.

**Compositing stack (base → top):**
off-white fill → faint grid guidelines (CSS repeating-linear-gradient or SVG pattern, #D4D0C8 at 0.5px stroke, opacity-10 to opacity-20) → paper grain (overlay, opacity-10 to opacity-15) → black ink elements (no blend) → accent ink elements (no blend) → ink gain (on fill edges) → registration misregister layer (multiply, opacity-50, over accent fills only)

### 8.5d — Texture & Noise Simulation

**Paper grain — full-page canvas:**
- technique:       SVG feTurbulence (inline SVG or pseudo-element)
- parameters:      baseFrequency 0.4–0.8, numOctaves 2–3, type fractalNoise
- surface:         all surfaces (page, cards, containers)
- intensity:       barely perceptible (1–2% noise; opacity-10 to opacity-15)
- blend:           mix-blend-mode: overlay
- color:           monochrome noise tinted to paper tone (#F5F0E8 light mode; #1A1A1A dark mode variant)
- animation:       none
- tailwind-approximation: no native equivalent; manual CSS with SVG filter or pseudo-element required

**Ink gain / ink bleed — high-contrast edges:**
- technique:       CSS filter drop-shadow(0 0 0.5px rgba(0,0,0,0.15)) on black fills; SVG feGaussianBlur at 0.3px on accent fills; or multiple stacked box-shadows with blur(0.5px)
- surface:         all printed/inked elements (text, fills, borders)
- intensity:       barely perceptible (0.3–0.5 pt / 0.5–1 px edge softening)
- color:           inherit (black ink; chromatic for accent)
- animation:       none
- tailwind-approximation: no native equivalent; custom utility class required

**Registration misregister — accent colour layer:**
- technique:       duplicate accent-colour elements shifted 0.3–1.0 px horizontally/vertically using CSS transform: translate(); set mix-blend-mode: multiply over accent fill
- surface:         accent-colour fills and reversed-out accent shapes only
- intensity:       moderate (0.3–1 px shift; visible but not disruptive to legibility)
- color:           accent colour only (red)
- animation:       none
- tailwind-approximation: no native equivalent; custom .misregistered class with translate required

**Faint grid lines — underlying composition:**
- technique:       CSS repeating-linear-gradient or SVG pattern matching the module grid intervals
- parameters:      color #D4C0C8 (light blue pencil) or #CCCCCC at 0.5px stroke; grid intervals matching column widths
- surface:         page background, visible behind all content
- intensity:       faint (opacity-10 to opacity-20; as if drawn with light blue pencil that never got erased)
- color:           light blue pencil (#D4C0C8 or similar); dark mode variant: #2E2E28
- animation:       none
- tailwind-approximation: no native equivalent; custom CSS repeating-linear-gradient required

**Dark mode inheritance (variant):** Paper grain shifts to dark noise on #1A1A1A. Ink gain and misregister remain identical. Grid lines become #2E2E28 on dark backgrounds.

## 9. Components

**Icon Vocabulary:**
system:       none — purely typographic and geometric. No pictorial or symbolic icons.
              Minimal geometric markers only (crosshairs, rectilinear targets, dots at grid intersections).
size:         w-4 h-4 to w-6 h-6
color:        inherits currentColor
treatment:    purely flat — no filter, glow, or animation
restrictions: no circles, no organic shapes, no filled areas (line-art only where used)

**Image & Media Treatment:**
Images are generally not used in this system. If unavoidable (e.g., user-generated content), they must be converted to two-colour halftone (black-only), with a rectilinear grid treatment: aspect-ratio forced to 1:1, 4:3, or 3:4 grid-aligned blocks; filter: grayscale(100%) contrast(150%); border-2 black outline; no rounding; no caption — label appears in adjacent grid module. This is a style-breaking exception and should be avoided.

**Buttons:**

**Primary:**
- fill: bg-primary (#000000)
- text: on-primary (#F5F0E8), uppercase monospace, tracking-widest, font-bold
- border: none (solid fill) or border-2 black
- rounded-none, p-4 (square internal padding)
- hover: fill becomes accent (#E31E24), text remains on-primary
- active: translateY(8px) [one grid unit] instant
- disabled: opacity-40, no interaction

**Secondary:**
- fill: transparent / bg-surface (#F5F0E8)
- text: on-surface (#000000), uppercase monospace, tracking-widest, font-normal
- border: border-2 outline (#000000)
- rounded-none, p-4
- hover: invert — fill becomes black, text becomes white
- active: fill becomes accent
- disabled: border opacity-40, text opacity-40

**Destructive (where applicable):**
- fill: bg-accent (#E31E24)
- text: on-accent (#F5F0E8), same typographic structure as Primary
- rounded-none, p-4
- hover: fill becomes black
- active: translateY(8px) instant

**Cards / Panels:**
- Fill: bg-surface (#F5F0E8)
- Border: border-1 outline (#000000, hairline) on all sides, or bottom-only rule
- rounded-none, no shadow
- Internal padding: p-4
- Internal content: flush left, ragged right, aligned to a 4-column sub-grid
- Label in uppercase monospace tracking-widest at top-left corner
- Body content in lowercase monospace tracking-wide
- No internal dividers — vertical spacing equal to one grid unit between sections

**Navigation:**
- Horizontal strip of uppercase monospace labels, tracking-widest, font-bold
- Items separated by border-r-1 hairline rules (black)
- Active state: solid black fill behind text, white reversed-out type
- Hover: accent fill behind text
- Each nav item spans an integer number of grid columns
- No icons, no dropdowns — all navigation is top-level

**Inputs / Forms:**
- Label: uppercase monospace, tracking-widest, font-bold, text-xs, flush left above input
- Input field: transparent bg, border-b-1 outline (bottom-only hairline), rounded-none
- Input value: lowercase monospace, tracking-wide, text-base
- Focus state: border-b-2 accent (#E31E24)
- Error state: border-b-2 accent, label text turns accent; no icon
- Placeholder: lowercase monospace, tracking-wide, opacity-60
- Disabled: opacity-40, no underline on active

**Style-Native Primitives:**

1. **Dominant Letterform** — A single uppercase letter or short word filling 30–50% of the layout. Set in display type, uppercase, tracking-widest, placed on a grid intersection. No fill — it is the background. Ink gain and misregister apply.

2. **Grid Divider** — Horizontal or vertical hairline (1px, solid black) spanning full column width or row height. Used to separate content zones. May be doubled (2px) for emphasis.

3. **Accent Colour Bar** — A solid rectangle of accent colour filling one or more grid cells. Height equal to one or multiple rows. Always placed at a grid edge. May contain reversed-out type.

4. **Text Block (flush left, ragged right)** — Single-case monospaced text aligned to baseline grid. No indentation. Margins align with grid module. Multiple blocks stack vertically with generous gutter.

5. **Modular Grid Frame** — Faint construction lines (light blue pencil, opacity-10 to opacity-20) visible behind the composition. Drawn as symmetrical grid of rows and columns (e.g., 4×4, 6×4, 8×6). Not interactive.

6. **Reversed-Out Shape** — White (paper) text or geometric shape punched out of solid black or accent block. Maintains modular proportions. Pure negative space — no clip-path.

7. **Small Caption / Label** — Set in label role, uppercase, tight to a rule or corner. Used for dates, prices, catalogue numbers. Aligned to baseline and vertical grid.

8. **Modular Filler Block** — Solid black square or rectangle matching grid module dimensions. Used as visual weight, texture, or counterbalance. Size is always an integer multiple of grid units.

9. **Crosshair Marker** — Vertical plus horizontal hairline rules intersecting at grid intersection. Width: 8px from center in each direction. No dot at center. Used as coordinate reference.

**Data Display Components:**

metric-cell:
  Background: bg-surface (#F5F0E8) with paper grain. Border: none; separated by grid unit gap or a 1px outline rule on one edge. Label: uppercase monospace font-bold, tracking-widest, text-xs, on-surface (#000000). Value: large display role (text-5xl‑7xl) uppercase font-bold, on-surface, no shadow. Delta indicator: monospace text-sm, tracking-wide; positive in blue (#0033A0), negative in red (#E31E24), flat in outline-variant (#D4D0C8). The cell may include a thin accent bar (2px, full width) below the value — coloured blue for positive, red for negative, or omitted for flat.

signal-bar:
  Track: outline-variant (#D4D0C8) faint rule, height 4px. Fill: black (#000000) or accent blue (#0033A0) depending on metric; no glow. Height 4px, straight rectangle. Border: none.

status-cell:
  ok:   text colour blue (#0033A0) plus a 1px underline of the same blue; no background fill.
  warn: text colour yellow (#FEDD00) (may be hard to read; if using yellow on off-white, use a 2px yellow background bar behind black text, but avoid too much fill); recommended: a 2px yellow accent bar above the cell content, black text.
  err:  text colour red (#E31E24) with a 2px red underline and, optionally, a small filled red square (4px×4px) as a marker; no full‑cell fill.
  The background of the cell remains surface (#F5F0E8). Status is communicated through colour and line, not fill.

data-table-row:
  All rows have the same background (surface #F5F0E8). Rows are separated by a 1px outline rule (#000000) spanning full width. No alternating row fills. Header row uses uppercase label role (font-bold, tracking-widest), with a 2px rule below. Data cells use lowercase monospace tracking-wide; numeric columns are tabular figures.

chart-surface:
  Background: surface (#F5F0E8) with paper grain. Grid lines: 1px outline-variant (#D4D0C8) at major tick intervals; axes: 1px solid black. Data lines: black (#000000) or accent blue for primary series, stroke-width 1.5px, no fill under the line. No drop shadow or glow. Dot markers: small squares (3×3px) in same colour. Axis labels: uppercase label role, black.

## 10. Layout

**Spacing cadence:** Strict modular grid — every element snaps to horizontal and vertical increments equal to one grid cell (8px base). Gutters between columns are consistently one cell wide. Margins are generous: 20–30% of page width/height.

**Grid tendency:** 12-column grid at desktop (≥1024px), 6–8 columns at 768px, 4 columns at 375px. Each element occupies an integer number of columns. Grid lines are faintly visible as part of the composition.

**Density:** Sparse. One dominant element occupies a large quadrant (30–50% of area); secondary text is confined to a narrow strip or corner. Empty grid cells are as active as filled ones.

**Section separation:** Horizontal hairline rules (1px, full column width) between content zones. Rules align to baseline grid increments. No extra space above/below rules beyond the grid cadence.

**Alignment:** Flush left, ragged right for all text blocks. Never centered or justified. Asymmetrical composition with mathematically weighted distribution — one quadrant carries the dominant element; opposite quadrant carries secondary content.

**Breakpoint behavior (conventional):**
- 375px: 4-column grid, margins reduce to 12–16px, stacked vertical layout, dominant element scales down proportionally
- 768px: 6–8 column grid, margins 24px, content in horizontal strips
- 1024px+: 12-column grid, margins 48px+, dominant block plus corner quadrant

**Motion block:**

transition-duration:        150–300 ms (state changes); 2000 ms (accent pulse loop)
transition-timing-function: linear (no easing curves permitted)
transition-property:        opacity, color, background-color, transform
transition-delay:           none

animation:
  grid-enter:       translateY(8px→0) over 200–300 ms linear — trigger: on-load or on-scroll-enter
  type-reveal:      characters appear one by one with steps(1) timing, 100 ms per glyph — trigger: on-load
  accent-pulse:     opacity 80%→100%→80% loop, 2000 ms duration, linear — trigger: looping (continuous accent elements)

transform-at-rest:           all elements rest at transform: none (except misregistration on accent)
transform-on-interact:       button active — translateY(8px) instant (0 ms); no hover transforms
transform-style:             flat
backface-visibility:         not applicable

No rotation, no 3D, no parallax, no easing curves.

## 11. Design System Notes

### 11a. Use Constraints

**Appropriate for:** editorial interfaces (museum guides, catalogue readers, exhibition catalogues), large-format posters and book covers, data-rich dashboards requiring authoritative structure, archival and documentation systems, institutional brand presences for cultural and educational organizations, and any context where visual authority derives from structural discipline.

**Wrong for:** playful consumer apps, social media feeds, gaming, e-commerce, entertainment streaming, any context requiring emotional warmth, illustration-driven storytelling, photographic hero imagery, or visual hierarchy based on depth/shadows/scale variance beyond grid alignment.

### 11b. Prompt Phrases

- "Treat the grid as law — every element snaps to a modular intersection."
- "Letters are building blocks; counters are rooms."
- "No curves, no circles — only rectangles and straight lines."
- "One accent colour, full saturation, no tints, no shades."
- "Wide letter spacing turns each character into an independent unit."
- "Negative space is as active as ink; empty cells are part of the composition."
- "Offset-print texture: faint grain, ink gain, misregister between spot colours."
- "All type is either all caps or all lowercase — never mixed case."
- "Monospaced rhythm — type as modular building material."
- "Asymmetric but weighted — negative space is as active as form."

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description.

rule: All spatial placement must obey the modular grid; no implicit or fluid positioning.
do:   Snap every element to a column and baseline grid using 8px increments. Place one dominant block occupying 30–50% of the layout, with secondary text in adjacent grid cells. Use hairline rules to separate sections spanned by full column widths.
avoid: Center‑aligning text or using full justification, which breaks the grid’s anchor points and creates uneven rags that disrupt the layout’s modular rhythm.

rule: Typography is monospaced, single‑case, with no weight or style variation.
do:   Set display, headline, title, and label roles in all‑uppercase, body in all‑lowercase. Use the same monospace face at a single weight (font-normal or font-bold as the role requires, never both in the same block). Apply mechanical, wide letter‑spacing uniformly.
avoid: Mixing upper‑ and lowercase in the same line, applying italics, using a bold weight within a monospace block, or adjusting kerning per letter‑pair.

rule: Exactly one spot accent colour is used, at full saturation only.
do:   Choose from the canonical set — red (#E31E24), blue (#0033A0), or yellow (#FEDD00) — and apply it as a solid fill for selected buttons, active states, and accent bars. Never tint or halftone the accent.
avoid: Using more than one accent colour in a single composition, or applying tints (e.g., pink from red), shades (dark red), or halftone screens of the accent.

rule: The geometric vocabulary is restricted to rectangles and straight lines.
do:   Draw buttons, panels, rules, and filled blocks as axis‑aligned rectangles. Use 45‑degree diagonal accents only when anchored to grid‑intersection corners. Borders are solid 1–2px lines.
avoid: Introducing any curve, circle, oval, or organic shape — no rounded corners, no circular avatars, no decorative flourishes.

rule: Visual separation is achieved exclusively through hairline rules, never through simulated depth.
do:   Use 1px solid black rules (border) to separate content zones. For emphasis, a 2px rule may be used. The off‑white paper background provides the base surface.
avoid: Applying drop shadows (box-shadow), gradient fades, or opacity‑blurred overlays as spatial dividers, which would introduce an undesirable sense of depth on the flat printed surface.

rule: The surface must simulate offset lithography on uncoated paper; pure digital white is forbidden.
do:   Set the page background to off‑white (#F5F0E8). Apply a full‑page paper grain via SVG feTurbulence (opacity‑10), subtle ink gain on fills, and a registration misregister shift (0.3–1px) on accent‑coloured elements.
avoid: Using a pure white (#FFFFFF) background without any texture, which would read as a pristine vector canvas and undermine the printed‑artifact aesthetic.

rule: All text blocks are set flush left, ragged right.
do:   Align every paragraph to the left edge of its grid module. Allow the right edge to break naturally, creating a rough right rag within the column.
avoid: Center‑aligning or full‑justifying text, which would create symmetrical or forced even edges inconsistent with the asymmetric grid composition.

rule: Motion is strictly linear or stepped; easing curves are prohibited.
do:   Use CSS transition: 150–300ms linear for colour changes and grid‑enter animations. The accent‑pulse loop uses a linear opacity cycle. Type‑reveal animations step character‑by‑character.
avoid: Applying ease‑in, ease‑out, ease‑in‑out, or bounce timing functions — any curve that implies acceleration or deceleration, which contradicts the mechanical, grid‑based rhythm.

### 11d. Variation Bounds

1. **Grid density:** coarse 4-column (sparse, monumental) ↔ fine 12-column (tight, data-dense). At 8-column the system reads as default Crouwel.

2. **Accent colour:** red (#E31E24, canonical) ↔ blue (#0033A0–#0051BA, cold/technical) ↔ yellow (#FEDD00–#FFD700, warmest contrast). Only one accent per composition; change the accent to shift emotional register while preserving all other system rules.

3. **Clean ↔ grimy:** pristine vector geometry and pure ink fills ↔ simulated offset dirt, registration shift at 0.5–1px, broken hairline rules, and slight ink gain. The grimy variant uses Section 8.5 effects at full strength; the clean variant uses only paper grain at minimum.

4. **Typographic scale:** extreme large/small (display at 8xl, secondary at xs) ↔ moderate ratio (display at 5xl, secondary at base). Extreme ratio reads as poster/monumental; moderate ratio reads as editorial/documentary.

5. **Anchor position:** top-left block (canonical Crouwel, reading gravity) ↔ bottom-right block (inverted gravity, destabilized) ↔ centred block (asymmetrical within centre-weighted composition — never truly centred). The asymmetry constraint holds across all variations.

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts.
Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
The off‑white paper surface (#F5F0E8) fills the viewport. Faint blue‑pencil grid lines (outline‑variant #D4D0C8, opacity‑15) define a 12‑column grid visible behind all content. A massive uppercase display word “GRID” in black (#000000), set in a monospace face, tracking‑widest, sits in the top‑left quadrant, occupying six columns and three rows. A single 1px black hairline rule runs horizontally beneath it. A narrow right‑hand column (2 columns wide) holds a block of lowercase body text, flush left, ragged right, tracking‑wide. The bottom‑right corner of the page contains a small solid red accent bar (#E31E24), 2 columns wide by one row high, flush against the right margin. Paper grain (SVG feTurbulence, opacity‑10) covers the entire surface. No element moves; no animation is active.

### 11e.ii — Maximum Expressiveness
A 12‑column grid frame is fully visible. A giant uppercase “W” in black occupies the left 8 columns and three‑quarters of the height, set with type‑reveal animation (each character appears step‑by‑step, 100ms per glyph). A pulsing red accent bar (#E31E24, opacity 80%↔100%, 2s linear loop) spans the full width at the bottom edge, with a 1px registration misregister (shifted 0.5px right and down, multiply blend) visible on the red fill. A black‑filled button (reversed‑out white label “ENTER”) sits on a grid intersection in the right column, ink gain visible at its edges. A 45‑degree diagonal rule crosses from bottom‑left to the grid intersection of the “W”, using the accent. Faint construction lines are at full opacity‑20. A crosshair marker sits at the intersection of column 4, row 3. The entire composition is asymmetric with heavy visual weight in the top‑left and bottom‑right. No shadows, no gradients.

### 11e.iii — Data Context
The surface remains off‑white paper with grain. A multi‑column data table occupies the central 8 columns, with a header row in uppercase label role (font‑bold, tracking‑widest) and a 2px black underline. Data rows use lowercase tabular‑figure monospace tracking‑wide. Rows are separated by 1px black hairline rules; no alternating fills. A status column uses coloured text: ok = blue (#0033A0), warn = yellow (#FEDD00) shown as a 2px yellow bar behind black text, err = red (#E31E24) with a small filled red square marker. A metric‑cell in the top‑right quadrant displays a large value “ 452” in uppercase display black, with a label “ACTIVE USERS” in uppercase label, and a blue 2px bar beneath the value (positive delta). A small bar‑chart surface uses black and blue lines, no fill, on faint blue‑pencil grid lines. Every element respects the modular grid; no drop shadows or opacity‑based depth are present.

### 11f. Sources

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** (Prose generation failed — see provenance block for attribution data.)

**Verified imagery sources.** 5 URLs verified against institutional servers, distributed across:
- Stedelijk Museum Amsterdam — 2 URL(s)
- Wikipedia — 2 URL(s)
- Rijksmuseum, Amsterdam — 1 URL(s)

**Named typefaces.** The typography of this style is attested as:
- (none attested)

**Honest gaps.** (No documented gaps were recorded by the forensic pipeline.)
