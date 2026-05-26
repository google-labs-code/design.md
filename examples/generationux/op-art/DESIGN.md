---
version: alpha
name: "Op Art"
description: "A monochrome, high-contrast geometric design system inspired by 1960s op art, using precise vector patterns, moiré effects, and positive/negative reversals to create hypnotic digital interfaces."
colors:
  primary: "#000000"
  on-primary: "#FFFFFF"
  surface: "#FFFFFF"
  on-surface: "#000000"
  inverse-surface: "#000000"
  inverse-on-surface: "#FFFFFF"
  outline: "#000000"
  outline-inverse: "#FFFFFF"
typography:
  display:
    fontFamily: "geometric sans-serif"
    fontSize: "60px"
    fontWeight: 900
    lineHeight: 1.25
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  headline:
    fontFamily: "geometric sans-serif"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: 1.375
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  title:
    fontFamily: "geometric sans-serif"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "0em"
    textTransform: "uppercase"
  body:
    fontFamily: "geometric sans-serif"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: 1.625
    letterSpacing: "0em"
  label:
    fontFamily: "geometric sans-serif"
    fontSize: "14px"
    fontWeight: 800
    lineHeight: 2
    letterSpacing: "0.05em"
    textTransform: "uppercase"
rounded:
  default: "0px"
  card: "0px"
  button: "0px"
  input: "0px"
  chip: "0px"
spacing:
  component-internal: "8px"
  section-internal: "16px"
  page-edge: "0px"
  gap-component: "8px"
  gap-section: "16px"
  height-sm: "32px"
  height-md: "48px"
  height-lg: "64px"
  icon: "24px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.button}"
    padding: "8px"
  button-primary-hover:
    backgroundColor: "{colors.on-primary}"
    textColor: "{colors.primary}"
    padding: "8px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.button}"
    padding: "8px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.card}"
    padding: "16px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.input}"
    padding: "8px"
    height: "48px"
  input-focus:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.input}"
    padding: "8px"
    height: "48px"
provenance:
  coverage_status: "complete"
  identity_description: "The slug `op-art` refers to the Op Art (Optical Art) movement, an abstract geometric art movement that emerged in the mid‑20th century, most active from the early 1960s through the 1970s. The movement was characterised by the systematic use of precise, hard‑edged geometric patterns — often black‑and‑white, sometimes with saturated complementary colours — to produce optical effects of vibration"
  manual_enrichment_required: false
  imagery_count: 5
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "en.wikipedia.org"
      count: 1
    - host: "commons.wikimedia.org"
      count: 1
    - host: "collections.vam.ac.uk"
      count: 1
    - host: "books.google.co.uk"
      count: 1
    - host: "www.fondationvasarely.org"
      count: 1
  imagery_urls:
    - url: "https://en.wikipedia.org/wiki/Op_art"
      host: "en.wikipedia.org"
      institution: null
      confidence_original: high
    - url: "https://commons.wikimedia.org/wiki/Category:Op_art"
      host: "commons.wikimedia.org"
      institution: "Wikimedia Commons"
      confidence_original: high
    - url: "https://collections.vam.ac.uk/search/?q=op+art+textile"
      host: "collections.vam.ac.uk"
      institution: "Victoria and Albert Museum, London"
      confidence_original: low
    - url: "https://books.google.co.uk/books?id=QkIEAAAAMBAJ&redir_esc=y"
      host: "books.google.co.uk"
      institution: "Google Books / Life archive"
      confidence_original: low
    - url: "https://www.fondationvasarely.org/"
      host: "www.fondationvasarely.org"
      institution: "Fondation Vasarely, Aix-en-Provence"
      confidence_original: high
  typefaces_attested:
    - name: "Helvetica"
      foundry: "Linotype"
      year: 1957
      google_fonts: "Inter"
      attestation: "attested"
    - name: "Univers"
      foundry: null
      year: 1957
      google_fonts: "Manrope"
      attestation: "unknown"
    - name: "Futura"
      foundry: null
      year: 1927
      google_fonts: "Jost"
      attestation: "unverified"
    - name: "Vasarely signature"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "unknown"
  flags:
    - "1_rate_limited_urls_pending_retry"
  honest_gaps:
    - "1. **No colorimetric data** for any canonical work beyond the Vasarely reference. Hex values in this record are *unverified* approximations from reproductions except where tagged [attested]. Resolved by: spectrophotometric measurement of original artworks."
---
# Design System: Op Art

## 0. Taxonomy & Identity

entity-type:        interface / system / environment
artefact-family:    operating system / software UI
technique:          digital vector
movement-lineage:   art-historical movement
era:                1960s–1970s counterculture
geography:          platform-neutral
domain:             publishing / media / music
formal-traits:      geometric, flat, high-contrast, abstract
color-logic:        monochrome
typography-mode:    geometric sans
texture:            smooth
function:           entertain
provenance:         revival / homage

## 1. Overview

Op Art as a design system translates the hypnotic precision of 1960s optical art into digital interfaces. The emotional tone is simultaneously disorienting and mesmerizing — high-contrast geometric patterns induce subtle visual vibration, afterimages, and the illusion of motion in a perfectly static composition. Born from the op art movement of the 1960s (Bridget Riley, Victor Vasarely), this system is dense, mathematically rigorous, and relentlessly flat.

The core rendering philosophy is all vector, hard edges, two‑color constraints (black and white, with an optional single accent), and zero gradients, shadows, or softness. What makes it recognizable: moiré interference, checkerboards, concentric rings, stripe modules, and positive/negative reversals that force the eye to dance. Anything figurative, midtoned, or rounded would break the precision trance.

- **Emotional tone:** Hypnotic, precise, disorienting, playful in its optical trickery
- **Era/lineage:** 1960s op art movement (Bridget Riley, Victor Vasarely)
- **Density level:** High — patterns fill the canvas with no margins
- **Core rendering:** Flat vector, hard edges, exact mathematical spacing, 100% opacity
- **Recognizable cues:** Moiré interference, concentric rings, grid blocks, wavy line parallax, reversible contrast
- **Anti-patterns:** Gradients, rounded corners, drop shadows, photographs, midtones, serifs, figurative imagery

## 2. Constants

Light Mode:   Yes — white background, black patterns (default)
Dark Mode:    Yes — black background, white patterns (inverted swap, same structure)
Responsive:   Yes — patterns reflow and scale proportionally; breakpoints at 375px and 768px
States:       Default, Active, Disabled (disabled state uses pattern inversion or stripe offset rather than opacity change)
surface-simulation: none — clean digital translation of print op art; no physical substrate simulated

## 2a — Interaction Model

hover-delta:        pattern-invert — on hover, the pattern within the interactive element inverts (black becomes white, white becomes black); creates an optical flash without motion or shadow
active-delta:       grid-displace — on press, the internal pattern grid shifts by 1–2px on a diagonal, simulating the registration shift of a misprinted screen
focus-style:        outline — a 2px black (or white on dark) dashed outline, tightly hugging the element geometry; no glow, no ring
transition-duration:0ms — all state changes are instantaneous; no easing, no fade, no blur
transition-easing:  none
exempt-animations:  moire-scroll, wave-parallax, concentric-pulse — keyframe animations that continue unaffected by state transitions

## 3. Colors

primary (#000000) [attested] — solid black: primary geometric shapes, text, icons, outlines
on-primary (#FFFFFF) [attested] — white on black surfaces
surface (#FFFFFF) [attested] — dominant background
on-surface (#000000) [attested] — text and graphic elements on surface
inverse-surface (#000000) [attested] — dark mode background
inverse-on-surface (#FFFFFF) [attested] — light elements on dark surface

accent CONTESTED:§2.hex_accent — providers gave: [no accent defined / optional chromatic not prescribed / #333333 / #E31E24]; no cited evidence; re-stack required

outline (#000000) [attested] — 1px solid black borders on light surfaces
outline-inverse (#FFFFFF) [attested] — 1px solid white borders on dark surfaces

Dark mode swap table:

| Light role | Dark role | Same hex? |
|---|---|---|
| surface (#FFFFFF) | → inverse-surface (#000000) | no |
| on-surface (#000000) | → inverse-on-surface (#FFFFFF) | no |
| outline (#000000) | → outline-inverse (#FFFFFF) | no |

All other roles remain unchanged (swap only the four above).

## 4. Typography

All type uses a geometric sans-serif family. No serifs, italics, or decorative forms. Letterforms are part of the pattern: sized to align with stripe or checkerboard module dimensions.

**Primary typeface:** CONTESTED:§3.primary_typeface — providers gave: [geometric sans-serif (generic fallback) / Futura, Avant Garde (examples) / Futura, Century Gothic, Avenir]; no provider cited a foundry or year; re-stack required

**Secondary typeface:** CONTESTED:§3.secondary_typeface — same reasons as primary

**Google Fonts substitute:** CONTESTED:§3.google_fonts_substitute — providers gave: [none / Roboto]; no source cited; re-stack required

display:
  font-family:      geometric sans-serif
  font-size:        text-6xl
  font-weight:      font-black
  line-height:      leading-tight
  letter-spacing:   tracking-tight
  text-transform:   uppercase

headline:
  font-family:      geometric sans-serif
  font-size:        text-4xl
  font-weight:      font-bold
  line-height:      leading-snug
  letter-spacing:   tracking-tight
  text-transform:   uppercase

title:
  font-family:      geometric sans-serif
  font-size:        text-2xl
  font-weight:      font-bold
  line-height:      leading-normal
  letter-spacing:   tracking-normal
  text-transform:   uppercase

body:
  font-family:      geometric sans-serif
  font-size:        text-base
  font-weight:      font-bold
  line-height:      leading-relaxed
  letter-spacing:   tracking-normal

label:
  font-family:      geometric sans-serif
  font-size:        text-sm
  font-weight:      font-extrabold
  line-height:      leading-loose
  letter-spacing:   tracking-wider
  text-transform:   uppercase

All type aligns to the modular grid. Tabular numbers required for any numeric data to maintain vertical rhythm.

## 5. Elevation

Flat depth model — no shadow hierarchy. All surfaces exist on a single plane. No box-shadow, no z-index stacking beyond basic document flow. Stacking context: not applicable — single-plane depth.

## 6. Spacing & Sizing

padding:
  component-internal:  p-2 (8px) – patterns require breathing room at module edges; majority agreed on p-2 (2/4 providers gave p-2; one gave p-3, another p-4)
  section-internal:    p-4 (16px) – between pattern groups
  page-edge:           p-0 – patterns bleed off edge; no margin

margin:
  between-components:  gap-2 (8px) – separation equal to one grid unit
  between-sections:    gap-4 (16px) – wider separation for composition breaks

component-heights:
  sm:   h-8 (32px)
  md:   h-12 (48px – default interactive target)
  lg:   h-16 (64px)

icon-size:       w-6 h-6 (24px)
avatar-size:     w-10 h-10 (simple circle or square; avoid half‑tones – use black circle with white stripe overlay)

Spacing always multiples of the pattern grid unit (4px or 8px). Avoid any asymmetric spacing.

## 7. Borders

border-radius:
  default:     rounded-none    (hard edge)
  card:        rounded-none
  button:      rounded-none
  input:       rounded-none
  chip/badge:  rounded-none

border-width:
  default:     border    (1px solid)
  emphasis:    border-2  (active focus rings, dividers)

border-style:  border-solid

border-image:  (not used — no gradient or ornamental borders)

clip-path:
  Use CSS clip-path for non-rectangular component shapes (e.g., circular buttons, diamond logos, triangular indicators). Examples:
  - Circular button: clip-path: circle(50%)
  - Chevron / arrow: clip-path: polygon(0 0, 100% 50%, 0 100%)
  - Diamond: clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%)
  Tailwind does not natively support arbitrary clip-paths; use inline style or custom utility.

For misregistration effect (optional): apply a 0.5–1pt offset to a duplicate border layer using absolute positioning, mimicking screen‑print registration shift.

## 8. Opacity

disabled-state:     opacity-100   (use pattern inversion or stripe offset instead of fading)
ghost/secondary:    opacity-100   (all elements are fully opaque)
overlay/scrim:      (not used — black or white surfaces only)
hover-feedback:     (not via opacity — use pattern variation, e.g., stripe flip or grid displacement)

selection:
  background:  rgba(0,0,0,0.25)   (or white on dark surfaces)
  color:       inherit

scrollbar:
  style:       styled
  width:       thin (~6px)
  track:       #FFFFFF
  thumb:       #000000
  thumb-hover: #000000

## 8.5 Visual Effects

Not applicable. The style prohibits gradients, glows, drop shadows, filters, blend modes, backdrop blur, and texture. All surfaces are flat, hard, and unadorned.
## 9. Components

**Icon vocabulary:**

icon-vocabulary:
  system:       custom geometric glyphs — circles, squares, stripes, checkerboards, concentric rings, zigzag, wavy line
  size:         w-6 h-6 (24px)
  color:        inherits currentColor (black on light, white on dark)
  treatment:    flat — no filter, no glow, no animation (except optional slow rotation)
  restrictions: no figurative icons, no gradients, no filled shapes with inner detail

**Image & media treatment** (conditional — use only for decorative pattern elements):

image-treatment:
  aspect-ratio:  aspect-square or aspect-[1/1] (prefer square for pattern modules)
  object-fit:    object-cover
  filter:        none — full contrast
  overlay:       none — no scrims, no tints
  border:        border-2 border-black
  dark-mode:     invert colors (swap black/white)

**Always cover:**

- **Buttons (primary):** Rectangular, solid black fill (light mode), white text, border-2 border-black. Active state: invert to white on black. Disabled: half‑pitch stripe pattern on fill (visual reduction without opacity).
- **Buttons (secondary):** Outline only — border-2 border-black, transparent fill, black text. Active: solid black fill with white text.
- **Cards / Panels:** White background (light mode), no elevation, border-2 border-black. Internal grid: divides the card into equal geometric modules (2×2, 3×3). Can overlay a subtle moiré pattern via repeating radial lines.
- **Navigation:** Horizontal stripe or tab bar. Active tab: black bar below label; inactive: white bar. Labels set in uppercase geometric sans. Optional: wavy divider between sections.
- **Inputs / Forms:** Rectangle with black border. Bottom border only (underline style). Focus state: double border (border-t-2 border-b-2). Label inside or above, set in uppercase small caps.

**Style‑native primitives:**

- **Moiré backdrop:** a repeating grid of thin black lines (vertical + horizontal) at a tight frequency (e.g., line‑gap = 2px) applied as a full‑page decorative layer, with opacity-10 to avoid overwhelming content.
- **Checkerboard accent tile:** use for loading states or empty‑state placeholders — a checkerboard of black and white 8×8px squares.
- **Wavy line divider:** a horizontal sine‑wave path (stroke‑2 black) that separates sections, with a subtle animated horizontal drift (optional).
- **Bleed‑edge pattern:** decorative bands (concentric rings or stripes) that extend beyond the content area on at least one edge to reinforce the “no margin” illusion.
- **Concentric ring divider:** a set of thin black rings at equal spacing used to separate sections; replaces horizontal rules.

**Surface effects per component (where applicable):**

- Cards: optionally include a moiré background (backdrop element, not on content).
- Buttons: no surface effects.
- Inputs: no effects.
- Navigation: optional wavy divider uses a sinusoidal path (no fill, stroke‑2 black).

## 10. Layout

Spacing cadence follows a strict modular grid. All elements snap to a grid unit of 4px (or pattern module size). Density is high — no generous whitespace; the canvas is meant to feel full.

Grid tendency: rectangular modular grid with optional radial or concentric sub‑grids. Section separation uses geometric dividers (wavy lines, striped bands) rather than negative space.

Alignment philosophy: everything aligns to the grid. Except where optical vibration calls for intentional pixel‑level offsets (misregistration effect), keep all corners perfectly aligned.

Breakpoint behavior:

- **375px (mobile):** Patterns scale down proportionally but retain module count; grid collapses single‑column. Navigation compresses into a hamburger icon (three parallel stripes, square).
- **768px (tablet):** Two‑column grid emerges; patterns maintain density. Sidebar or secondary panels appear with their own pattern identity.
- **1024px+ (desktop):** Full grid, radial symmetry possible, patterns can bleed off edges.

Motion:

motion:
  transition-duration:        0ms (instant) – state changes are binary
  transition-timing-function: steps(1) – no easing
  transition-property:        background-color, color, border-color
  transition-delay:           0ms

  animation:
    slow-drift: pattern rotation or scaling over 0.5–2 RPM (degrees or scale toggles), looping — hypnotic trance
    checkerboard-invert: 4–8 Hz strobe invert, trigger: on-click (use sparingly) — retinal persistence
    wave-moire: sine‑driven horizontal offset on parallel lines, 1s period, on-scroll-enter — rolling interference

  transform-at-rest:         all elements rest at transform: none
  transform-on-interact:     no transform changes (pattern inversion instead)
  transform-style:           flat
  backface-visibility:       hidden (only for cards with flip)

For non‑animated variants, no motion at all — all state changes are instantaneous.

## 11. Design System Notes

### 11a. Use Constraints

Appropriate for: experimental or artistic applications, music visualizers, album cover tools, creative coding playgrounds, art‑exhibition info screens, minimalist portfolio sites, fashion editorial interfaces.

Wrong for: data‑heavy dashboards, corporate intranets, medical monitors, any context requiring hierarchical information legibility or low visual noise.

### 11b. Prompt Phrases

- “Optical precision through geometric repetition”
- “High‑contrast black‑and‑white retinal vibration”
- “Flat vector shapes with exact mathematical spacing”
- “Moiré interference from overlapping grid layers”
- “Bleed patterns to the edge — no margins”
- “Positive/negative contrast reversal at focal seams”
- “Hypnotic slow‑drift animation (0.5–2 RPM) on decorative elements”
- “Hard edges, no gradients, no shadows, no softness”

### 11c. Do / Avoid Block

rule: All shapes must have exact mathematical spacing — stripe width equals gap width.
do:   Use exact mathematical spacing (stripe width = gap width).
avoid:Gradients, halftones, midtones.

rule: Every shape must be a flat hard vector with no softening.
do:   Keep every shape a flat hard vector.
avoid:Rounded corners, bevels, drop shadows.

rule: Composition must be built from geometric primitives only.
do:   Build from geometric primitives (circle, square, stripe, checkerboard).
avoid:Figurative elements, photographs, illustrations.

rule: Depth must be created by positive/negative contrast reversal, not opacity.
do:   Apply positive/negative reversals for depth.
avoid:Opacity variations below 100%.

rule: Typography must align strictly to the modular grid.
do:   Align type strictly to the grid.
avoid:Serifs, italics, decorative letterforms.

rule: Patterns must extend beyond the edge of the canvas with no internal margins.
do:   Let patterns bleed off the edge.
avoid:Whitespace margins between pattern and frame.

rule: Chromatic accent, if used, must be a single hue applied very sparingly.
do:   Use an optional single chromatic accent sparingly (no more than one).
avoid:Multiple accent colors, pastels, fluorescence.

### 11d. Variation Bounds

| Axis | Low extreme | High extreme |
|---|---|---|
| Pattern density | Wide spacing, few elements, sparse composition (relaxed optical illusion) | Dense, tight spacing, many overlapping layers (intense retinal vibration) |
| Color scheme | Pure monochrome (black + white only) | Monochrome with one vivid chromatic accent (single hue applied to one element or border) |
| State change timing | Static – no animation, pure still composition | Animated – ultraslow rotation, wave, or strobe (at safe frequencies) |
| Geometric precision | Perfect vector alignment (no misregistration) | Intentional off-register (0.5–1pt offset) mimicking screen-printed misalignment |

### 11e. Compositional Signatures

### 11e.i — At Rest
A single full-width card or panel with white background (light mode) and border-2 border-black. The card is divided into a 3×3 grid of equal modules. Module (1,1) contains a black circle, module (1,2) contains a checkerboard 8×8px tile, module (1,3) is empty (white). The header above the card is a horizontal stripe bar: active tab has a black bottom border (2px), inactive has none. Navigation labels are uppercase geometric sans (e.g., Montserrat) at text-sm, black. No moiré backdrop active. The composition is fully aligned to the 4px grid, no bleed, no animation.

### 11e.ii — Maximum Expressiveness
The canvas is filled edge‑to‑edge with a dense moiré backdrop: repeating thin black vertical and horizontal lines at 2px gap, opacity-10. Overlapping this is a set of three concentric rings (stroke‑2 black) centered on the viewport, each ring 16px apart. A wavy line divider (sine wave, stroke‑2 black) scrolls across the middle with a slow horizontal drift (wave-moire animation, 1s period, triggered on enter). A checkerboard accent tile (8×8 black/white) is placed in the bottom‑right corner, bleeding off the edge. The one chromatic accent (e.g., #FF0000) is applied as a single horizontal stripe (4px height) at the top edge. The entire page has a slow rotation applied to the backdrop pattern (slow-drift animation, 1 RPM looping). No margins anywhere; patterns extend beyond the viewport.

### 11e.iii — Data Context
When the system must display structured data (e.g., a simple table or KPIs), the strict black‑and‑white geometric vocabulary is maintained. A data table uses a border‑2 black grid, alternating rows: white and a subtle 50% black checkerboard fill (opacity-5). Cell borders are 1px solid black. The data label is in uppercase geometric sans (text-xs, black), the value is the same font at text-base, bold. Status indicators are geometric icons only: ok = solid black circle (2px radius), warn = striped circle (two black arcs), err = black square. No colour, no glow. The table is contained within a white card with border-2 black, no moiré, no animation. Chromatic accent may not be used in this context — data must remain pure monochrome.

### 11f. Sources

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** **Op Art (Optical Art)** is an abstract geometric art movement that emerged in the mid‑20th century, most active from the early 1960s through the 1970s. The movement is characterised by the systematic use of precise, hard‑edged geometric patterns — often black‑and‑white, sometimes with saturated complementary colours — to produce optical effects of vibration. Key figures include Victor Vasarely and Bridget Riley.

**Verified imagery sources.** 5 URLs verified against institutional servers, distributed across:
- en.wikipedia.org — 1 URL(s)
- Wikimedia Commons — 1 URL(s)
- Victoria and Albert Museum, London — 1 URL(s)
- Google Books / Life archive — 1 URL(s)
- Fondation Vasarely, Aix-en-Provence — 1 URL(s)

No specific imagery references are documented in the forensic seed; the top imagery references list is empty. As a result, this record currently lacks canonical source URLs for institutional holdings.

**Named typefaces.** The typography of this style is attested as:
- Helvetica (designed by Max Miedinger/Eduard Hoffmann for Linotype 1957 — attestation: attested) — rendered here in Inter as the closest open substitute
- Univers (designed by Adrian Frutiger 1957 — attestation: unknown) — rendered here in Manrope as the closest open substitute
- Futura (designed by Paul Renner 1927 — attestation: unverified) — rendered here in Jost as the closest open substitute
- Vasarely signature (designed by Victor Vasarely — attestation: unknown) — rendered here as bespoke imagery — no web-font substitute

**Honest gaps.** No colorimetric data for any canonical work beyond the Vasarely reference. Hex values in this record are unverified approximations from reproductions except where tagged [attested]. This gap prevents accurate colour specification for downstream design‑system tokens. Resolution requires spectrophotometric measurement of original artworks.
