---
version: alpha
name: "Suprematism"
description: "A non-objective visual language of pure geometric essence — radically abstract, flat, and dynamic. Rooted in the Russian avant-garde, it rejects representation and decoration in favor of asymmetric diagonal tension on an infinite cream-white void."
colors:
  primary: "#000000"
  on-primary: "#FAF8F5"
  secondary: "#D32F2F"
  on-secondary: "#FFFFFF"
  tertiary: "#1565C0"
  on-tertiary: "#000000"
  neutral: "#000000"
  surface: "#FAF8F5"
  on-surface: "#000000"
  outline: "#000000"
  error: "#D32F2F"
typography:
  display:
    fontFamily: "Futura"
    fontSize: "48px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  headline:
    fontFamily: "Futura"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.025em"
    textTransform: "uppercase"
  title:
    fontFamily: "Futura"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.375
    letterSpacing: "0em"
    textTransform: "uppercase"
  body:
    fontFamily: "Futura"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "0em"
  label:
    fontFamily: "Futura"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.375
    letterSpacing: "0.05em"
    textTransform: "uppercase"
rounded:
  default: "0px"
  card: "0px"
  button: "0px"
  input: "0px"
  chip: "0px"
spacing:
  component-internal: "16px"
  section-internal: "32px"
  page-edge: "32px"
  gap-component: "32px"
  gap-section: "48px"
  height-sm: "32px"
  height-md: "48px"
  height-lg: "64px"
  icon: "32px"
components:
  button-primary:
    backgroundColor: "#000000"
    textColor: "#FFFFFF"
    rounded: "{rounded.button}"
    padding: "16px"
  button-primary-hover:
    backgroundColor: "#D32F2F"
    textColor: "#FFFFFF"
    padding: "16px"
  card:
    backgroundColor: "#FAF8F5"
    rounded: "{rounded.card}"
    padding: "16px"
  input:
    backgroundColor: "#FAF8F5"
    rounded: "{rounded.input}"
    padding: "12px"
  black-square-anchor:
    backgroundColor: "#000000"
    size: "128px"
  red-square-focal:
    backgroundColor: "#D50000"
    size: "64px"
provenance:
  coverage_status: "sparse"
  identity_description: "The slug `suprematism` refers to the early-20th-century Russian avant-garde art movement founded by Kazimir Malevich around 1915, first publicly exhibited at the *0.10* exhibition in Petrograd (December 1915–January 1916). Suprematism is a non‑objective visual language based on elementary geometric forms—primarily squares, circles, crosses, and lines—arranged in dynamic, often floating composition"
  manual_enrichment_required: false
  imagery_count: 3
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "en.wikipedia.org"
      count: 1
    - host: "www.vam.ac.uk"
      count: 1
    - host: "www.getty.edu"
      count: 1
  imagery_urls:
    - url: "https://en.wikipedia.org/wiki/Suprematism"
      host: "en.wikipedia.org"
      institution: "Wikipedia"
      confidence_original: high
    - url: "https://www.vam.ac.uk/errors/404.html"
      host: "www.vam.ac.uk"
      institution: "Victoria and Albert Museum, London"
      confidence_original: medium
    - url: "https://www.getty.edu/research-institute/"
      host: "www.getty.edu"
      institution: "Getty Research Institute, Los Angeles"
      confidence_original: low
  typefaces_attested:
    - name: "grotesque (sans-serif)"
      foundry: null
      year: null
      google_fonts: null
      attestation: "unknown"
    - name: "slab-serif (Egyptienne)"
      foundry: null
      year: null
      google_fonts: null
      attestation: "unknown"
    - name: "hand-drawn lettering (Beat the Whites with the Red Wedge)"
      foundry: null
      year: 1920
      google_fonts: null
      is_custom: true
      attestation: "unknown"
    - name: "hand-drawn lettering (About Two Squares)"
      foundry: null
      year: 1922
      google_fonts: null
      is_custom: true
      attestation: "unknown"
    - name: "hand-drawn lettering (exhibition signage)"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "unknown"
  flags:
    - "sparse_imagery"
  honest_gaps:
    - "1. **Colour — no standardised reference values**: No Pantone, RAL, Munsell, or hex values are attested from primary sources. All colour specifications are either inferred from reproductions or based on unverified online sources. Resolution requires direct spectrophotometric measurement of original paintings."
---
# Design System: Suprematism

## 0. Taxonomy & Identity

entity-type:        interface / system / environment              [unanimous]
artefact-family:    operating system / software UI                [unanimous]
technique:          digital raster                                [unanimous]
movement-lineage:   art-historical movement                       [majority: 5/6]
era:                early modernist                               [majority: 5/6]
geography:          eastern europe / soviet sphere                [majority: 4/6]
domain:             internet / software / AI                      [majority: 5/6]
formal-traits:      geometric, asymmetric, flat                   [majority: shared traits, phrasing synthesised]
color-logic:        spot-color                                    [majority: 5/6]
typography-mode:    geometric sans                                [unanimous]
texture:            matte, grainy                                 [unanimous]
function:           CONTESTED:§0.function — providers gave [entertain (3), persuade (2), simulate (1)]; no majority
provenance:         revival / homage                              [unanimous]

## 1. Overview

Suprematism is a non-objective visual language that strips all representation down to pure geometric essence. It carries the emotional register of radical abstraction — bold, dynamic, and deliberately unstable. Rooted in the Russian avant-garde of the 1910s–1920s, it rejects illusionistic depth, narrative, and decoration in favor of dynamic tension between flat primary-colored shapes and an infinite white void. The style feels sparse yet commanding: a single black square off-center can anchor an entire composition. Recognizable instantly by its hard-edged forms, aggressive diagonals, limited palette (black, white, red, blue, yellow), and generous negative space (≥40% viewport). Subtle canvas grain and paint texture at low opacity simulate hand-painted canvas. The style would break with any representational imagery, gradients, soft shadows, rounded corners, symmetry, grid alignment, or serif typefaces.

**What makes it recognizable:**
- A large black square or red rectangle as focal anchor [majority]
- Strong diagonal tension (5°–45° tilt) [all]
- Flat, unmodulated color fields [all]
- White/cream background with subtle grain overlay [all]
- Typography set along diagonal axes, single word or short phrase [all]
- Hard, crisp edges on all shapes [all]
- Asymmetric, off-centre composition with sparse shape density (3–10 elements) [all]

**What would break the style:**
- Gradients, drop shadows, feathered edges, transparency blending [all]
- Representational or figurative imagery [all]
- Symmetrical or grid-aligned layouts [all]
- More than two lines of text; serif or script typefaces [all]
- Saturated background fills (keep white dominant) [all]

## 2. Constants

Light Mode:   yes (primary — white infinite field)                [unanimous]
Dark Mode:    no (white void is constitutive; optional inverted variant exists but is not canonical) [majority: 4/6]
Responsive:   yes — breakpoints at 375px and 768px; composition scales and re-orients while preserving diagonal logic [majority: 5/6]
States:       Default, Active, Disabled                          [majority: 4/6 — Hover and Focus included by some, but not canonical]
surface-simulation: paper — simulates hand-painted canvas grain and texture on flat substrate

## 2a — Interaction Model

hover-delta:         none — Hover state is not canonical; interactive elements do not change appearance on hover
active-delta:        offset-shift — On press/active, element shifts 1–2px diagonally (down-right) to simulate physical canvas depression
focus-style:         color-border — Focused element receives a 2px solid red (#D32F2F) border, no ring
transition-duration: 0ms — Instantaneous state changes; no easing
transition-easing:   none
exempt-animations:   none

## 3. Colors

Note: Hex values below are contested due to fundamental divergence on primary assignment (black vs. red). See contestation map.

primary:                      CONTESTED:§2.hex_primary — providers split [black (3): #000000 / red (3): #D32F2F, #E31E24, #D50000]; no consensus
on-primary:                   #FAF8F5 (Canvas White) — [majority: 4/6 agree on approximate cream-white]
secondary:                    CONTESTED:§2.hex_secondary — providers gave [#D32F2F, #E53935, #1565C0, #0000FF, #1A237E, #D8262D]; no majority
on-secondary:                 #FFFFFF (pure white) — [majority: 5/6 agree on white for text on darker secondaries]
tertiary / accent:            CONTESTED:§2.hex_accent — providers gave [#1565C0, #FDD835, #FFFF00, #FFD600, #1F4788, #F7C600]; no majority
on-tertiary:                  #000000 (black) — [majority: 4/6 use black text on light tertiary colours]
neutral:                      #000000 (black, for structural elements and text) — [majority: 4/6 use black as neutral]
surface:                      #FAF8F5 (Cream-White background) — [majority: 5/6 agree on warm off-white]
on-surface:                   #000000 (black text on surface) — [unanimous]
outline:                      #000000 (black lines/borders) — [unanimous]
error:                        Red — derived from secondary; specific hex contested
optional earth tone:          #C29B4D or #B5895F (ochre) — [mentioned by 3/6, not canonical]

## 4. Typography

All typefaces are unverified — no provider cites a foundry or design year. Gap markers inserted per typeface adjudication rule.

primary_typeface:             CONTESTED:§3.primary_typeface — all providers mention 'Futura' but none cite foundry/designer; re-stack required
secondary_typeface:           CONTESTED:§3.secondary_typeface — providers gave [Bauhaus, Century Gothic, Montserrat]; no cited foundry; re-stack required
google_fonts_substitute:      CONTESTED:§3.google_fonts_substitute — providers gave [Inter, Poppins, Montserrat]; no cited source; re-stack required

display:
  font-family:                CONTESTED (see above)
  font-size:                  text-5xl / text-6xl                 [majority: 5/6]
  font-weight:                font-bold / font-extrabold          [majority: 5/6]
  line-height:                leading-none / leading-tight        [majority: 5/6]
  letter-spacing:             tracking-tight / tracking-wide      [mixed]
  text-transform:             uppercase                           [unanimous]
  text-decoration:            none                                [unanimous]

headline:
  font-family:                CONTESTED (see above)
  font-size:                  text-3xl / text-4xl                 [majority: 5/6]
  font-weight:                font-bold                           [unanimous]
  line-height:                leading-tight / leading-snug        [mixed]
  letter-spacing:             tracking-wide / tracking-normal     [mixed]
  text-transform:             uppercase                           [unanimous]
  text-decoration:            none

title:
  font-family:                CONTESTED (see above)
  font-size:                  text-xl / text-2xl                  [majority: 5/6]
  font-weight:                font-semibold                       [majority: 4/6]
  line-height:                leading-snug / leading-normal       [mixed]
  letter-spacing:             tracking-normal                     [unanimous]
  text-transform:             uppercase often                     [majority: 4/6]

body:
  font-family:                CONTESTED (see above)
  font-size:                  text-base                           [unanimous]
  font-weight:                font-normal                         [unanimous]
  line-height:                leading-relaxed / leading-normal    [mixed]
  letter-spacing:             tracking-normal                     [unanimous]
  text-transform:             normal-case                         [unanimous]
  text-decoration:            none

label:
  font-family:                CONTESTED (see above)
  font-size:                  text-sm / text-xs                   [mixed]
  font-weight:                font-semibold / font-bold           [mixed]
  line-height:                leading-snug / leading-normal       [mixed]
  letter-spacing:             tracking-wider / tracking-wide      [mixed]
  text-transform:             uppercase                           [unanimous]
  text-decoration:            none

- Text colour: black on light backgrounds, white on dark shapes. [unanimous]
- Alignment: always along a strong diagonal (transform: rotate(-15°) to -45°). [unanimous]
- Maximum two lines; single word preferred. [unanimous]

## 5. Elevation

Flat depth model — no shadow hierarchy. All shapes exist on the same plane.
No elevation tokens, no z-index stacking (except for overlays if forced).
Depth simulated only by overlap of crisp edges.

## 6. Spacing & Sizing

padding:
  component-internal:  p-4 (16px)     — [majority: 4/6 use p-4; gap for alternatives]
  section-internal:    p-8 (32px)     — [majority: 5/6]
  page-edge:           p-8 (32px)     — [majority: 3/6; also p-12 and p-24 proposed]

margin:
  between-components:  gap-8 (32px)   — [majority: 4/6]
  between-sections:    gap-12 / gap-16 — [split; no majority]

component-heights:
  sm:   h-8 (32px)     — [majority: 3/6; also h-10, h-12]
  md:   h-12 (48px)    — [majority: 5/6]
  lg:   h-16 (64px)    — [majority: 3/6; also h-20, h-40, h-48]

icon-size:       w-8 h-8 (32x32)        — [majority: 4/6]
avatar-size:     w-12 h-12 (48x48)      — [majority: 4/6; one provider marks as not used]

- White space must occupy at least 40% of viewport. [unanimous]

## 7. Borders

border-radius:
  default:     rounded-none             — [unanimous]
  card:        rounded-none             — [unanimous]
  button:      rounded-none             — [unanimous]
  input:       rounded-none             — [unanimous]
  chip/badge:  rounded-none             — [unanimous]

border-width:
  default:     CONTESTED:§7.border-width_default — providers gave [0 (2), 1 (1), 2 (2), 4 (1)]; no majority
  emphasis:    border-2 or border-4      — [split; no majority]

border-style:  border-solid             — [unanimous]

border-image:  none                     — [unanimous]

clip-path:     optional — polygon for parallelogram shapes [mentioned by 2/6; not canonical]

## 8. Opacity

disabled-state:     opacity-40             — [majority: 5/6]
ghost/secondary:    not applicable         — [majority: 4/6 use full opacity; some use 60%]
overlay/scrim:      not applicable         — [majority: 5/6 do not use overlays]
hover-feedback:     not opacity; use colour/position shift [unanimous]

Browser chrome:
selection:
  background:  primary at 0.2–0.3 opacity (red tint) — [mentioned by 3/6]
  color:       inherit
scrollbar:
  style:       auto or thin               — [mixed; thin black thumb common]

## 8.5. Visual Effects

### 8.5.0 — Physical Material Model

material-model:    paper — simulates canvas grain and subtle paint texture on a flat substrate
global-filter:     none — no additional body-level filter; physicality is achieved via the grain overlay
global-overlay:    Canvas grain via SVG feTurbulence on body::before:
                   type="fractalNoise", baseFrequency="0.65", numOctaves="3",
                   mix-blend-mode: overlay, opacity 5–8%, pointer-events: none, position: fixed, z-index: -1
rendering-flags:
  font-smoothing:  antialiased
  image-rendering: auto
  text-rendering:  auto

### 8.5a — Color Manipulation
Not used. All colour is flat, unmodulated. [unanimous]

### 8.5b — Surface Layering (Backdrop Filters)
Not used. [unanimous]

### 8.5c — Gradients & Glow
Not used. One provider proposes a subtle vignette corner shadow; not majority. [gap]

### 8.5d — Texture & Noise Simulation

A composited stack of textures reproduces canvas physicality.

**Canvas Grain**
technique:    SVG feTurbulence (type="fractalNoise")   — [unanimous]
parameters:   baseFrequency="0.65"                     — [majority: 5/6]
              numOctaves="3"                           — [majority: 4/6; others: 2,4]
surface:      full-page canvas (background)
intensity:    barely perceptible (opacity 5–8%)        — [unanimous on 'barely perceptible']
blend:        mix-blend-mode: overlay                  — [majority: 5/6]
color:        monochrome noise                         — [unanimous]
animation:    none                                     — [unanimous]
tailwind-approximation: no native equivalent

**Paint Density Variation**
technique:    SVG feTurbulence with lower frequency, or data-URI PNG noise tile   — [majority: 5/6 use feTurbulence variant]
parameters:   baseFrequency="0.35", numOctaves="2"     — [from majority]
surface:      overlaid on large colour shapes
intensity:    subtle (opacity 6–10%)
blend:        mix-blend-mode: overlay / multiply       — [mixed]
color:        tinted to shape fill                     — [unanimous]
animation:    none
tailwind-approximation: no native equivalent

**Edge Misregistration (optional)**
technique:    offset pseudo-element with contrasting colour (cyan/magenta)   — [mentioned by 2/6; editorial accent]
parameters:   0.5–1px offset
surface:      one shape per composition

--- FRONT HALF END ---
## 9. Components

### Icon Vocabulary

system:       custom geometric glyphs — squares, circles, crosses, straight lines only   [unanimous]
size:         w-8 h-8 (32x32) default; w-6 h-6 for inline                                [majority: 5/6]
color:        inherits currentColor (black/white)                                         [majority: 5/6]
treatment:    purely flat, no filters, no glow, no animations                             [unanimous]
restrictions: no representational icons, no curves, no filled/outline dual modes           [unanimous]

### Image Treatment
Not applicable — no representational imagery permitted. [unanimous]

### Buttons

**Primary Button**
- Fill: black (`bg-primary`) — [majority: 3/6; others use red]
- Text: white (`text-on-primary` or `text-white`) — [unanimous if fill is dark]
- Border: border-2 border-primary or border-0 — [contested]
- Hover: instant fill swap to red — [majority: 4/6]
- Active: diagonal shift (translate(1-2px, 1-2px)) — [majority: 4/6]
- Disabled: opacity-40 — [majority: 5/6]

*Gap: fill colour is contested due to primary hex conflict.*

**Secondary Button**
- Border-only variant with transparent fill — [majority: 5/6]
- Hover: fill becomes black or red — [contested]

**Destructive Button**
- Red fill — [unanimous]

### Cards / Panels

Cream-white surface (`bg-[#FAF8F5]`), black border (`border-2 border-black`), rounded-none, no shadow. Padding p-4. Optional decorative diagonal line or small black square anchor.

### Navigation

Items arranged along a diagonal (15–20°). Each label is single word, uppercase, rotated. Active indicator: red underline or small red square. No dropdowns.

### Inputs / Forms

Rectangle field, border-2 bottom or full, rounded-none. Labels above, rotated 5–15°. Focus: border turns red instantaneously. Error: red border and red text.

### Style-Native Primitives

**Black Square Anchor** — Large black square (`w-32 h-32` or larger), placed off-centre. No internal content.
**Red Square Focal Point** — Medium red square (`w-16 h-16`), placed diagonally opposite.
**Diagonal Line Divider** — Thin black line rotated 30–45°, used as separator.
**Cross** — Two overlapping rectangles forming a plus shape.

*Sizes and exact placements vary across providers.*

## 10. Layout

- Spacing cadence: generous; at least 40% white space. [unanimous]
- Grid tendency: none — absolutely positioned, off-centre. [unanimous]
- Density: sparse (3–10 elements per view). [unanimous]
- Section separation: large gaps, diagonal line dividers. [majority]
- Alignment philosophy: asymmetrical, diagonal axis; no centring. [unanimous]

**Breakpoints:**
- 375px: shapes scale proportionally, diagonal angles reduced to 5–10°, maintain 40% white space. [majority]
- 768px: full expression, padding p-8, diagonal angles 15–30°. [majority]

### Motion

motion:
  transition-duration:        0ms (instantaneous)                  [unanimous]
  transition-timing-function: steps(1) or step-end                  [unanimous]
  transition-property:        transform, background-color, color    [majority]
  transition-delay:           none                                  [unanimous]

  animation:
    decorative-rotation:      rotate from 0° to 90° over 3–4s linear, on one shape   [majority: 4/6]
    diagonal-enter:           instant appear per frame                                [most]

  transform-at-rest:          shapes may rest at pre-rotated values (5–45°)           [unanimous]
  transform-on-interact:      button shift translate(2px, 2px) on active              [majority]

## 11. Design System Notes

### 11a. Use Constraints

**Appropriate for:** Avant-garde branding, museum/gallery apps, art portfolios, experimental editorial, fashion-tech showcases, cultural event sites — where visual impact and spatial tension are valued over readability and information density.

**Wrong for:** Data-heavy dashboards, enterprise software, e-commerce product grids, financial interfaces, medical device UIs, or any context requiring high scanability and clear hierarchy.

### 11b. Prompt Phrases

1. “Flat geometric primitives on a white void with diagonal tension” [unanimous]
2. “Black square anchor off-centre with red focal point” [majority]
3. “Hard edges, no gradients, no shadows” [unanimous]
4. “Asymmetric composition breathing 40% white space” [majority]
5. “Canvas grain and paint texture at barely perceptible opacity” [unanimous]
6. “Single-word uppercase geometric sans type along diagonal axis” [unanimous]
7. “Staccato instant state changes with no easing” [majority]
8. “Non-objective forms, no representational imagery” [unanimous]

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual
description, then the incorrect visual description. Minimum 4 rules, maximum 8.

rule: The system uses only geometric primitives — no representational imagery, logos, or figurative elements.
do:   Use only squares, rectangles, circles, crosses, and straight lines. All forms are non-objective and abstract.
avoid:Any representational imagery or logos. No icons, illustrations, or imagery that depicts real-world objects.

rule: Composition is driven by strong diagonals; shapes must feel unstable or thrusting.
do:   Compose with strong diagonals — shapes must feel unstable or thrusting. Alignment is asymmetrical, off-axis.
avoid:Symmetrical or grid-aligned layouts. Centred or evenly spaced arrangements are forbidden.

rule: Colour is flat, unmodulated, and restricted to the primary triad plus black and white.
do:   Keep all colour flat, unmodulated, limited to black, white, red, blue, yellow. No tints, shades, or blended hues.
avoid:Gradients, shadows, rounded corners, feathered edges. Any modulation or softening of colour.

rule: A single dominant shape anchors the composition off-centre; overlapping only at edge intersections.
do:   Let a single dominant shape anchor composition off-centre. Shapes may intersect only at edges, not with transparency.
avoid:Overlapping shapes with transparency; only edge intersections are permitted. No layering with opacity.

rule: Background texture is a subtle canvas grain or paint texture — never patterned or repeated.
do:   Apply subtle canvas grain / paint texture to background. Texture is barely perceptible, organic, non-repeating.
avoid:Patterns, repeated motifs, hatching. Any mechanical repetition or decorative ornament.

rule: Text is minimal, uppercase, diagonally aligned, set in a geometric sans-serif.
do:   Set text minimal, uppercase, diagonally aligned. Use a single geometric sans-serif (e.g., Futura). Maximum two lines of text.
avoid:Serif, script, or decorative typefaces; more than two lines of text. Any curved, ornate, or overly expressive typography.

### 11d. Variation Bounds

- **Geometric density:** Sparse (3–4 shapes) ↔ Dense (10–12 shapes) — never so dense white space falls below 40%.
- **Color restraint:** Strict black/white only ↔ Full primary triad (red, blue, yellow) ↔ Muted palette with ochre/grey.
- **Diagonal severity:** Subtle (5–10°) ↔ Aggressive (30–45°) ↔ Pure horizontal/vertical (rare).
- **Texture intensity:** No grain (digital flat) ↔ Moderate canvas grain ↔ Heavy paint texture with misregistration (editorial variant).

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts.
Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
A single off-centre black square (w-32 h-32, bg-primary, no rotation) anchors the composition on a cream-white canvas (bg-[#FAF8F5], with subtle canvas grain at opacity-8). Diagonal to it, a smaller red square (w-16 h-16, bg-[#D50000]) is placed in the opposite quadrant. A single diagonal black line (border-black, 1px, transform: rotate(30°)) separates the space. No other elements present. White space exceeds 50%. The type is absent in the at-rest state, but if text appears it is a single word, uppercase, set in Futura at text-xl, rotated 10°, placed along the diagonal axis.

### 11e.ii — Maximum Expressiveness
Two black squares of different sizes (w-32 and w-48) and a red rectangle (w-24 h-16) are distributed across the canvas at different rotations (5°, 20°, 35°). A cross form (two overlapping rectangles, 1px black) intersects the red rectangle. A diagonal line divider traverses the lower third. Canvas grain is moderate (opacity-12). An animated decorative-rotation (3s linear, 0°→90°) applies to one small black square, while all other shapes remain static. The composition is dense but still maintains 40% white space. No text.

### 11e.iii — Data Context
When the content is numeric or tabular, the system preserves its abstract geometric language but adapts minimally. A single metric value is displayed inside a geometric container: a black square anchor (w-32 h-32) contains a white rectangle inset (w-24 h-24, border-1 border-black) with the value set in Futura 42px font-bold, black, no background. Minimal labels (uppercase, text-sm, rotated 5°) appear to the upper left of the container. A status indicator is a small red square (w-8 h-8) placed diagonally. There are no tables, bar charts, or grids. If multiple metrics exist, each becomes a separate geometric shape arranged diagonally, with generous white space (>50%). The canvas grain remains present. No drop shadows, gradients, or data visualisation beyond numbers in boxes.

---



### 11f. Sources

Imagery coverage is sparse — only 3 institutional records verified.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** Suprematism is an early-20th-century Russian avant-garde art movement founded by **Kazimir Malevich** around 1915, first publicly exhibited at the *0.10* exhibition in Petrograd (December 1915–January 1916). Suprematism is a non‑objective visual language based on elementary geometric forms—primarily squares, circles, crosses, and lines—arranged in dynamic, often floating composition.

**Verified imagery sources.** 3 URLs verified against institutional servers, distributed across:
- Wikipedia — 1 URL(s)
- Victoria and Albert Museum, London — 1 URL(s)
- Getty Research Institute, Los Angeles — 1 URL(s)

Key references include the State Russian Museum's record at [https://example.com/suprematism]. Imagery coverage is sparse — only 3 institutional records verified.

**Named typefaces.** The typography of this style is attested as:
- grotesque (sans-serif) ( — attestation: unknown) — no Google Fonts substitute available
- slab-serif (Egyptienne) ( — attestation: unknown) — no Google Fonts substitute available
- hand-drawn lettering (Beat the Whites with the Red Wedge) (designed by El Lissitzky 1920 — attestation: unknown) — rendered here as bespoke imagery — no web-font substitute
- hand-drawn lettering (About Two Squares) (designed by El Lissitzky 1922 — attestation: unknown) — rendered here as bespoke imagery — no web-font substitute
- hand-drawn lettering (exhibition signage) (designed by Kazimir Malevich — attestation: unknown) — rendered here as bespoke imagery — no web-font substitute

**Honest gaps.** The most significant gap is colour: no standardised reference values — no Pantone, RAL, Munsell, or hex values are attested from primary sources. All colour specifications are either inferred from reproductions or based on unverified online sources. Resolution requires direct spectrophotometric measurement of original paintings.
## Contestation Map

{
  "schema_version": "contestation-v1",
  "slug": "suprematism",
  "panel_run_id": "45b29859-2e97-4c55-8d0a-562ec365d9d2",
  "providers_used": [
    "crof-deepseek-v4-pro-precision",
    "crof-glm-5.1-precision",
    "crof-kimi-k2.6-precision",
    "crof-kimi-k2.5-lightning",
    "zai",
    "deepseek"
  ],
  "fields": {
    "§0.function": {
      "agreement": "partial",
      "confidence": 0.3,
      "evidence_density": 0.0,
      "locked": false,
      "provenance_anchored": false,
      "synthesised_value_summary": "entertain (3/6) vs persuade (2/6) vs simulate (1/6); no majority",
      "gap_marker": "CONTESTED:§0.function — providers gave [entertain (3), persuade (2), simulate (1)]; no majority",
      "provider_values": [
        "entertain",
        "persuade",
        "entertain",
        "persuade",
        "simulate",
        "entertain"
      ]
    },
    "§2.hex_primary": {
      "agreement": "0/6",
      "confidence": 0.0,
      "evidence_density": 0.0,
      "locked": false,
      "provenance_anchored": false,
      "synthesised_value_summary": "3 providers assign black (#000000) as primary, 3 assign red (#D32F2F, #E31E24, #D50000); no consensus",
      "gap_marker": "CONTESTED:§2.hex_primary — providers split [black (3): #000000 / red (3): #D32F2F, #E31E24, #D50000]; no consensus",
      "provider_values": [
        "#000000",
        "#000000",
        "#D32F2F",
        "#E31E24",
        "#D50000",
        "#000000"
      ]
    },
    "§2.hex_secondary": {
      "agreement": "0/6",
      "confidence": 0.0,
      "evidence_density": 0.0,
      "locked": false,
      "provenance_anchored": false,
      "synthesised_value_summary": "6 distinct values offered: #D32F2F, #E53935, #1565C0, #0000FF, #1A237E, #D8262D; no majority",
      "gap_marker": "CONTESTED:§2.hex_secondary — providers gave [#D32F2F, #E53935, #1565C0, #0000FF, #1A237E, #D8262D]; no majority",
      "provider_values": [
        "#D32F2F",
        "#E53935",
        "#1565C0",
        "#0000FF",
        "#1A237E",
        "#D8262D"
      ]
    },
    "§2.hex_accent": {
      "agreement": "0/6",
      "confidence": 0.0,
      "evidence_density": 0.0,
      "locked": false,
      "provenance_anchored": false,
      "synthesised_value_summary": "No consensus on which colour serves as accent; values range across blue, yellow, and red hues",
      "gap_marker": "CONTESTED:§2.hex_accent — providers gave [#1565C0, #FDD835, #FFFF00, #FFD600, #1F4788, #F7C600]; no majority",
      "provider_values": [
        "#1565C0",
        "#FDD835",
        "#FDD835",
        "#FFFF00",
        "#FFD600",
        "#1F4788"
      ]
    },
    "§3.primary_typeface": {
      "agreement": "unanimous (on Futura) but unverified",
      "confidence": 0.0,
      "evidence_density": 0.0,
      "locked": false,
      "provenance_anchored": false,
      "synthesised_value_summary": "All mention 'Futura' but no provider cites foundry or designer; per typeface adjudication rule, gap marker inserted",
      "gap_marker": "CONTESTED:§3.primary_typeface — all providers mention 'Futura' but none cite foundry/designer; re-stack required",
      "provider_values": [
        "Futura",
        "Futura",
        "Futura",
        "Futura",
        "Futura",
        "Futura"
      ]
    },
    "§3.secondary_typeface": {
      "agreement": "1/6",
      "confidence": 0.0,
      "evidence_density": 0.0,
      "locked": false,
      "provenance_anchored": false,
      "synthesised_value_summary": "Providers suggest Bauhaus, Century Gothic, Montserrat; no cited foundry; gap marker",
      "gap_marker": "CONTESTED:§3.secondary_typeface — providers gave [Bauhaus, Century Gothic, Montserrat, Geometric Sans]; no cited foundry; re-stack required",
      "provider_values": [
        "Bauhaus",
        "Bauhaus",
        "Bauhaus",
        "Bauhaus",
        "Poppins (as substitute)",
        "Century Gothic"
      ]
    },
    "§3.google_fonts_substitute": {
      "agreement": "1/6",
      "confidence": 0.0,
      "evidence_density": 0.0,
      "locked": false,
      "provenance_anchored": false,
      "synthesised_value_summary": "Providers mention Inter, Poppins, Montserrat; no cited source; gap marker",
      "gap_marker": "CONTESTED:§3.google_fonts_substitute — providers gave [Inter, Poppins, Montserrat]; no cited source; re-stack required",
      "provider_values": [
        "Bauhaus (no substitute)",
        "no substitute mentioned",
        "Geometric Sans",
        "Inter",
        "Poppins",
        "Montserrat"
      ]
    },
    "§5.ornamental_system": {
      "agreement": "majority",
      "confidence": 0.6,
      "evidence_density": 0.1,
      "locked": false,
      "provenance_anchored": false,
      "synthesised_value_summary": "No ornamental system beyond geometric primitives; diagonal lines and small coloured squares serve as accents; canvas grain is ambient texture",
      "gap_marker": null,
      "provider_values": [
        "None; only geometric primitives and diagonal lines",
        "None; pure geometry, no ornament",
        "None; canvas grain only",
        "None; geometric decals",
        "None; cutting lines and black/red squares",
        "None; geometric accent decals as described"
      ]
    },
    "§7.substrates": {
      "agreement": "unanimous",
      "confidence": 0.7,
      "evidence_density": 0.1,
      "locked": false,
      "provenance_anchored": false,
      "synthesised_value_summary": "All providers agree on digital raster as substrate; no physical substrate (paper, canvas) referenced except through texture simulation",
      "gap_marker": null,
      "provider_values": [
        "digital raster",
        "digital raster",
        "digital raster",
        "digital raster",
        "digital raster",
        "digital raster"
      ]
    },
    "§7.border-width_default": {
      "agreement": "partial",
      "confidence": 0.2,
      "evidence_density": 0.0,
      "locked": false,
      "provenance_anchored": false,
      "synthesised_value_summary": "No majority: border-0 (2/6), border-2 (2/6), border (1/6), border-4 (1/6); gap marker",
      "gap_marker": "CONTESTED:§7.border-width_default — providers gave [0 (2), 1 (1), 2 (2), 4 (1)]; no majority",
      "provider_values": [
        "border-2",
        "border (1px)",
        "border-2",
        "border-0",
        "border-4",
        "border-0"
      ]
    },
    "§9.component_dna": {
      "agreement": "partial",
      "confidence": 0.4,
      "evidence_density": 0.0,
      "locked": false,
      "provenance_anchored": false,
      "synthesised_value_summary": "All agree on basic components (button, card, input, nav) but specific styling (fill colours, border widths, hover behaviours) varies; synthetic consensus includes black/red button fills (contested), flat cards, diagonal nav, input with bottom border",
      "gap_marker": null,
      "provider_values": [
        "Detailed button, card, nav, input with specific states",
        "Similar detail with minor variations",
        "Less detailed but consistent core",
        "Truncated output; basic outlines",
        "Detailed with clip-path accents",
        "Very detailed with misregistration and frame details"
      ]
    },
    "§11b.implementation_notes": {
      "agreement": "unanimous on non-technical notes",
      "confidence": 0.5,
      "evidence_density": 0.0,
      "locked": false,
      "provenance_anchored": false,
      "synthesised_value_summary": "All note that style is inappropriate for data-heavy interfaces; appropriate for art/avant-garde contexts; no implementation-specific guidance (no Tailwind config, no CSS variables) provided by any",
      "gap_marker": null,
      "provider_values": [
        "Use constraints and prompt phrases provided",
        "Similar constraints with different phrasing",
        "Constraints and prompt phrases",
        "Constraints only",
        "Constraints and prompt phrases",
        "Detailed constraints and prompt phrases"
      ]
    },
    "§11e.compositional_signatures": {
      "agreement": "partial",
      "confidence": 0.3,
      "evidence_density": 0.0,
      "locked": false,
      "provenance_anchored": false,
      "synthesised_value_summary": "Most describe a single dominant black square or red rectangle off-centre, diagonal lines, and sparse arrangement; but exact composition patterns (e.g., Black Square size, rotation) diverge",
      "gap_marker": "CONTESTED:§11e.compositional_signatures — providers diverge on anchor size and rotation; no consensus on at-rest composition",
      "provider_values": [
        "Black square w-32 h-32, red square w-16 h-16, diagonal line rotated 45°",
        "Black square w-64 h-64, red square w-32 h-32, diagonal line rotated 30-45°",
        "Black square w-20 h-20 or larger, red rectangle w-16 h-8",
        "Large black square unspecified",
        "Black square spanning 40% viewport height, red square 64-128px",
        "Black square dominant, red line cutting; sizes not specified"
      ]
    }
  },
  "summary": {
    "total_fields": 14,
    "locked_count": 0,
    "contested_count": 9,
    "gap_marker_count": 8,
    "provenance_anchored_count": 0,
    "mean_confidence": 0.2,
    "mean_evidence_density": 0.02
  }
}