---
version: alpha
name: "Muriel Cooper"
description: >
  A kinetic design language channeling early digital interfaces and offset print;
  typography as architectural object on a construction-site page; hard edges,
  stark contrast, overlapping transparent geometric planes, and instantaneous
  motion.
colors:
  primary: "#E31E24"
  on-primary: "#FFFFFF"
  secondary: "#0044CC"
  on-secondary: "#FFFFFF"
  tertiary: "#FFD700"
  on-tertiary: "#000000"
  quaternary: "#00A8E8"
  quinary: "#E2007A"
  process-tint: "#F07FBE"
  senary: "#00A859"
  neutral: "#000000"
  white: "#FFFFFF"
  surface: "#FFFFFF"
  surface-container: "#E5E5E5"
  on-surface: "#000000"
  error: "#E31E24"
  outline: "#000000"
  on-surface-variant: "#666666"
  acid-accent: "#76FF03"
  surface-dark: "#000000"
  on-surface-dark: "#FFFFFF"
typography:
  display:
    fontFamily: "Akzidenz-Grotesk"
    fontSize: "60px"
    fontWeight: 900
    lineHeight: 1.25
    letterSpacing: "-0.05em"
    textTransform: uppercase
  headline:
    fontFamily: "Akzidenz-Grotesk"
    fontSize: "36px"
    fontWeight: 900
    lineHeight: 1.25
    letterSpacing: "-0.05em"
    textTransform: uppercase
  title:
    fontFamily: "Akzidenz-Grotesk"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.375
    letterSpacing: "-0.05em"
    textTransform: uppercase
  body:
    fontFamily: "Letter Gothic"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.05em"
    textTransform: uppercase
  label:
    fontFamily: "Letter Gothic"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.05em"
    textTransform: uppercase
rounded:
  default: "0px"
  card: "0px"
  button: "0px"
  input: "0px"
  chip: "0px"
spacing:
  component-internal: "8px"
  section-internal: "32px"
  page-edge: "16px"
  between-components: "16px"
  between-sections: "32px"
  component-height-sm: "32px"
  component-height-md: "48px"
  component-height-lg: "64px"
  icon-size: "24px"
components:
  button-primary:
    backgroundColor: "#E31E24"
    textColor: "#FFFFFF"
    rounded: "{rounded.button}"
    padding: "8px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "#E31E24"
    textColor: "#FFFFFF"
    padding: "8px"
  button-secondary:
    backgroundColor: "#FFFFFF"
    textColor: "#000000"
    rounded: "{rounded.button}"
    border: "2px solid #000000"
    padding: "8px"
    height: "48px"
  card:
    backgroundColor: "#FFFFFF"
    textColor: "#000000"
    rounded: "{rounded.card}"
    padding: "16px"
    border: "2px solid #000000"
  input:
    backgroundColor: "#FFFFFF"
    textColor: "#000000"
    rounded: "{rounded.input}"
    border: "2px solid #000000"
    padding: "8px"
  input-focus:
    backgroundColor: "#FFFFFF"
    textColor: "#000000"
    rounded: "{rounded.input}"
    border: "2px solid #0044CC"
    padding: "8px"
  metric-cell:
    backgroundColor: "#FFFFFF"
    textColor: "#000000"
    border: "2px solid #000000"
    padding: "8px"
  signal-bar:
    trackColor: "#000000"
    fillColor: "#E31E24"
    height: "4px"
  status-cell-ok:
    backgroundColor: "transparent"
    textColor: "#0044CC"
    border: "2px solid #0044CC"
  status-cell-warn:
    backgroundColor: "transparent"
    textColor: "#FFD700"
    border: "2px dashed #FFD700"
  status-cell-err:
    backgroundColor: "transparent"
    textColor: "#E31E24"
    border: "2px solid #E31E24"
  data-table-row:
    backgroundColor: "#FFFFFF"
    alternatingBackgroundColor: "#E5E5E5"
    borderBottom: "2px solid #000000"
    padding: "4px"
  chart-surface:
    backgroundColor: "#FFFFFF"
    gridColor: "#000000"
    lineColor: "#E31E24"
    lineWidth: "2px"
  registration-target:
    shape: "crosshair"
    color: "#000000"
    size: "24px"
  data-shape:
    shape: "bar-chart"
    color: "#E31E24"
    size: "16px"
provenance:
  coverage_status: "complete"
  identity_description: "The slug `muriel-cooper` refers to the American graphic designer, educator, and pioneer of information design and digital typography Muriel Cooper (1925–1994). She is best known for her work as the first design director of the MIT Press (1952–1974), where she developed the iconic MIT Press colophon and oversaw the design of hundreds of books, especially the influential Bauhaus series. Later, at th"
  manual_enrichment_required: false
  imagery_count: 6
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "www.moma.org"
      count: 2
    - host: "www.cooperhewitt.org"
      count: 2
    - host: "www.vam.ac.uk"
      count: 1
    - host: "en.wikipedia.org"
      count: 1
  imagery_urls:
    - url: "https://www.moma.org/collection/works/173205"
      host: "www.moma.org"
      institution: "Museum of Modern Art, New York"
      confidence_original: low
    - url: "https://www.cooperhewitt.org/"
      host: "www.cooperhewitt.org"
      institution: "Cooper Hewitt, Smithsonian Design Museum"
      confidence_original: low
    - url: "https://www.cooperhewitt.org/"
      host: "www.cooperhewitt.org"
      institution: "Cooper Hewitt, Smithsonian Design Museum"
      confidence_original: low
    - url: "https://www.vam.ac.uk/collections?q=Muriel+Cooper"
      host: "www.vam.ac.uk"
      institution: "Victoria and Albert Museum, London"
      confidence_original: low
    - url: "https://en.wikipedia.org/wiki/Muriel_Cooper"
      host: "en.wikipedia.org"
      institution: null
      confidence_original: high
    - url: "https://www.moma.org/"
      host: "www.moma.org"
      institution: "Museum of Modern Art, New York"
      confidence_original: low
  typefaces_attested:
    - name: "Monotype Baskerville"
      foundry: "Monotype"
      year: null
      google_fonts: "Libre Baskerville"
      attestation: "attested"
    - name: "Futura"
      foundry: null
      year: null
      google_fonts: "Jost"
      attestation: "attested"
    - name: "Helvetica"
      foundry: null
      year: null
      google_fonts: "Inter"
      attestation: "attested"
    - name: "Optima"
      foundry: null
      year: null
      google_fonts: "Cormorant Garamond"
      attestation: "inferred"
    - name: "Helvetica"
      foundry: null
      year: null
      google_fonts: "Inter"
      attestation: "unknown"
    - name: "Times New Roman"
      foundry: null
      year: null
      google_fonts: "Tinos"
      attestation: "unknown"
    - name: "custom hand-lettered expressive sans serif (Man and the Machine poster)"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "unknown"
  flags:
    []
  honest_gaps:
    - "1. **Colour specifications – missing:** No verified hex, Pantone, or CMYK values for any colour in printed works. [What is missing] – exact colour formula; [why] – not published in primary sources; [resolution] – spectrophotometry of surviving original prints or access to original printer instructions."
---
# Design System: Muriel Cooper

## 0. Taxonomy & Identity

entity-type:        interface / system / environment
artefact-family:    CONTESTED:§0.artefact_family — providers gave: [operating system / software UI, editorial, operating system / software UI, operating system / software UI]; no majority
technique:          CONTESTED:§0.technique — providers gave: [digital vector, digital vector, digital vector, digital raster]; 3/4 majority for digital vector, but no cited evidence for raster/vector classification; contesting the technique basis
movement-lineage:   design movement  (3/4 majority: DSP, GLM, K26 agree; K25 diverges to "1980s postmodern")
era:                CONTESTED:§0.era — providers gave: [postwar, 1980s postmodern, 1970s counterculture, 1970s–1980s counterculture]; no majority; all diverging
geography:          CONTESTED:§0.geography — providers gave: [US / Canada, platform-neutral, US / Canada, platform-neutral]; 2/2 split; no majority
domain:             CONTESTED:§0.domain — providers gave: [internet / software / AI, publishing / media / music, publishing / media / music, internet / software / AI]; 2/4 for publishing/media/music, 2/4 for internet/software/AI; no majority
formal-traits:      CONTESTED:§0.formal_traits — providers gave: [geometric, asymmetric, dense, expressive]; [geometric, asymmetric, dense]; [geometric, asymmetric, expressive, dense]; [diagrammatic, schematic, expressive]; some overlap but no consistent set
color-logic:        saturated  (3/4 majority: DSP, GLM, K26; K25 agrees implicitly via palette)
typography-mode:    CONTESTED:§0.typography_mode — providers gave: [display type, display type, display type, geometric sans]; 3/4 majority for display type; but the phrase "display type" is a role, not a type classification; contesting as insufficiently defined
texture:            CONTESTED:§0.texture — providers gave: [grainy, halated]; [grainy, noisy, halated]; [grainy, printed-register-shift]; [grainy, halated]; overlapping but no single list; core term "grainy" appears in all four → accept "grainy" as majority signal, but full list contested
function:           CONTESTED:§0.function — providers gave: [persuade, speculate / worldbuild, inform, speculate / worldbuild]; 2/4 for "speculate / worldbuild"; no majority; contesting
provenance:         CONTESTED:§0.provenance — providers gave: [revival / homage, studio lineage, revival / homage, fictionalized simulation]; 2/4 for "revival / homage"; no majority

## 1. Overview

Muriel Cooper is a kinetic design language that channels the raw energy of early digital interfaces mixed with the rigorous construction of offset print. It treats typography as an architectural object and the page as a construction site, creating a constant tension between strict structure and raw, unpolished experimentation. The style rejects softness in favor of hard edges, stark contrast, and ambiguous reading orders. It is defined by bold geometric shapes overlapping with varying opacity, asymmetrical layouts that break grids, and motion that mimics early digital experiments with no easing or fade-ins.

**What makes it recognizable:**
- Bold geometric primitives (circles, squares, triangles) as primary compositional elements
- Overlapping transparent planes; no drop shadows, no gradients
- Typography stacked, rotated, cropped by page edges, reading order ambiguous
- High-saturation primaries plus a process tint or acidic accent
- Visible tension between mechanical precision and analog artifacts (misregistration, ink gain, halftone)
- Abstract data-like shapes (bar charts, radar plots, sequences of dots) used as decoration
- Everything flat-vector with hard outlines, 2.5D rotation, and slight depth via scaling

**What would break it:**
- Photographic imagery, illustrations, smooth gradients, drop shadows
- Soft or rounded corners, organic curves, pastel palettes
- Centered, symmetrical layouts, balanced whitespace
- Conventional reading order, gentle typographic hierarchies
- Digital-only polish with no print artifacts

## 2. Constants

Light Mode:   yes — white surface as structural anchor, vibrant colors on white
Dark Mode:    variant — black surface as structural anchor; CRT scanlines may be added in dark mode; colors remain saturated
Responsive:   yes — grid reflows at 768px and 375px; core asymmetry preserved  (3/4 majority; K26 dissents, asserting fixed-format)
States:       Default, Active, Hover, Disabled, Focus  (Hover: 3/4 majority; some providers omit Focus but it is implied by interaction design)
surface-simulation: paper — offset-printed substrate with halftone dots, misregistration, and paper grain; CRT scanlines applied conditionally only on dark backgrounds

## 2a — Interaction Model

hover-delta:        opacity — opacity shifts to 0.85 on hover for interactive elements; no shadow, no color change, no lift
active-delta:       inset-shadow — active elements receive a 1px inset shadow from neutral (#000000 at 0.25) to simulate mechanical button press
focus-style:        color-border — border shifts to secondary blue (#0044CC) or primary red (#E31E24); no glow ring
transition-duration:0ms — all state changes are instantaneous; no easing on any interaction
transition-easing:  none
exempt-animations:  crt-flicker, scanline-drift, halftone-oscillate

## 3. Colors

**Primary palette (light mode):** — All hex values are contested; no pair of providers shares the same value for secondary or tertiary. Primary has 2/4 agreement on #E31E24, but 2/4 is not a majority for 4 providers.

primary:                 CONTESTED:§2.hex_primary — providers gave: [#E31E24, #FF1744, #E31E24, #FF0000]; 2/4 agreement; no cited source; gap marker required
on-primary:              CONTESTED:§2.hex_on_primary — providers gave: [#FFFFFF, #FFFFFF, #FFFFFF, unspecified]; 3/4 majority for #FFFFFF but no citation for white; accepted as conventional [unverified]
secondary:               CONTESTED:§2.hex_secondary — providers gave: [#0044CC, #2979FF, #0033CC, #00FFFF]; all four diverge; no majority
on-secondary:            CONTESTED:§2.hex_on_secondary — providers gave: [#FFFFFF, #FFFFFF, #FFFFFF, unspecified]; 3/4 majority for #FFFFFF; accepted as conventional [unverified]
tertiary:                CONTESTED:§2.hex_tertiary — providers gave: [#FFD700, #FFEA00, #FFD700, #00FF00]; 2/4 agreement on #FFD700; no majority
on-tertiary:             CONTESTED:§2.hex_on_tertiary — providers gave: [#000000, #000000, #1A1A1A, unspecified]; 2/4 for #000000; no majority
quaternary:              CONTESTED:§2.hex_quaternary — only DSP defines [#00A8E8]; others omit or use different names; insufficient data
quinary:                 CONTESTED:§2.hex_quinary — only DSP defines [#E2007A]; insufficient data
process-tint:            CONTESTED:§2.hex_process_tint — providers gave: [#F07FBE, #FF7EB3, #FF80FF, #FF00FF]; no two agree; all four diverge
senary:                  CONTESTED:§2.hex_senary — only DSP defines [#00A859]; insufficient data
neutral:                 CONTESTED:§2.hex_neutral — providers gave: [#000000, #000000, #1A1A1A, #000000]; 3/4 majority for #000000; accepted as conventional [unverified]
white:                   CONTESTED:§2.hex_white — #FFFFFF (conventional, but providers vary on usage as surface vs. anchor); accepted [unverified]
surface:                 CONTESTED:§2.hex_surface — providers gave: [#FFFFFF, #FFFFFF, #FFFFFF, #FFFFFF]; unanimous #FFFFFF, but contesting because the semantic role of "surface" vs. "white" is ambiguous; accepted as conventional [unverified]
surface-container:       CONTESTED:§2.hex_surface_container — providers gave: [#E5E5E5, #E0E0E0, #E8E8E8, unspecified]; 3/4 majority for light gray (around #E5E5E5) but exact hex diverges; gap marker
on-surface:              CONTESTED:§2.hex_on_surface — providers gave: [#000000, #000000, #1A1A1A, unspecified]; 2/4 for #000000; no majority
error:                   CONTESTED:§2.hex_error — providers gave: [#E31E24 (reuse red), #D81B60, #FF00FF, unspecified]; no majority
outline:                 CONTESTED:§2.hex_outline — providers gave: [#000000, #000000, #1A1A1A, unspecified]; 2/4 for #000000; no majority
on-surface-variant:      CONTESTED:§2.hex_on_surface_variant — providers gave: [#666666, #424242, #666666, unspecified]; 2/4 for #666666; no majority
acid-accent:             CONTESTED:§2.hex_acid_accent — providers gave: [none, #76FF03, #39FF14, #32CD32]; 2/4 for green-ish but no exact match; gap marker

**Dark mode swap table** — Only surface and on-surface inverted. Other colors remain identical per majority (3/4 agree on that principle). Exact dark surface hex is contested: [#000000 (DSP, GLM), #1A1A1A (K26), #000000 (K25)] => 3/4 majority #000000 accepted [unverified]. on-surface dark: [#FFFFFF (DSP, GLM, K26 unanimously), K25 unspecified] => accepted [unverified].

## 4. Typography

display:
  font-family:      CONTESTED:§3.primary_typeface — providers gave: [Akzidenz‑Grotesk, Akzidenz‑Grotesk, Helvetica (contested), Akzidenz‑Grotesk]; 3/4 majority for Akzidenz‑Grotesk, but no provider cites a foundry or year; per typeface adjudication rule, gap marker required
  Google Fonts substitute: CONTESTED:§3.google_fonts_substitute_display — providers gave: [Work Sans/Archivo (DSP), sans‑serif (GLM), Inter (K26), sans‑serif (K25)]; no majority and no citation; gap marker
  font-size:        text‑6xl  (3/4 majority: DSP, GLM, K25; K26 gives text‑6xl to text‑8xl, inclusive of text‑6xl)
  font-weight:      CONTESTED:§3.display_font_weight — providers gave: [font‑extrabold, font‑black, font‑bold to font‑black, font‑black]; 2/4 for font‑black, 1 for extrabold, 1 for bold/black range; no majority
  line-height:      CONTESTED:§3.display_line_height — providers gave: [leading‑tight, leading‑tight, leading‑tight to leading‑none, leading‑none]; 2/4 for leading‑tight; no majority
  letter-spacing:   CONTESTED:§3.display_letter_spacing — providers gave: [tracking‑tighter, tracking‑tight, tracking‑tighter, tracking‑tighter]; 3/4 majority for tracking‑tighter; accepted [unverified]
  text-transform:   uppercase  (unanimous)
  text-decoration:  none  (unanimous)

headline:
  font-family:      same as display (contested)
  font-size:        text‑4xl to text‑5xl (DSP text‑4xl, GLM text‑4xl, K26 text‑4xl to text‑5xl, K25 text‑5xl); majority for text‑4xl (3/4 inclusive)
  font-weight:      CONTESTED (similar pattern)
  line-height:      leading‑tight (3/4 majority: DSP, GLM, K26; K25 leading‑tight differs? K25 says leading‑tight for headline actually -> accept)
  letter-spacing:   tracking‑tighter (3/4 majority)
  text-transform:   uppercase (unanimous)

title:
  font-family:      same (contested)
  font-size:        text‑2xl to text‑3xl (DSP text‑2xl, GLM text‑2xl, K26 text‑2xl to text‑3xl, K25 text‑3xl); majority for text‑2xl (3/4 inclusive)
  font-weight:      font‑bold (3/4 majority: DSP, GLM, K26; K25 font‑bold as well -> unanimous actually? K25 says font‑bold for title, yes)
  line-height:      leading‑snug (3/4: DSP, GLM, K26; K25 says leading‑snug -> unanimous)
  letter-spacing:   tracking‑tighter (3/4: DSP, GLM, K26; K25 tracking‑wide, diverges)
  text-transform:   uppercase (unanimous)

body:
  font-family:      CONTESTED:§3.secondary_typeface — providers gave: [Letter Gothic, Courier, Helvetica (contested), Akzidenz‑Grotesk]; no majority; Courier appears in GLM and K26 (2/4), but K26 marks it contested; no citations; gap marker
  Google Fonts substitute: CONTESTED:§3.google_fonts_substitute_body — providers gave: [Space Mono/Courier Prime, monospace, Inter (K26 body actually uses Helvetica), monospace]; no majority; gap marker
  font-size:        text‑xs (unanimous among four providers)
  font-weight:      font‑normal (3/4: DSP, GLM, K26; K25 says font‑normal as well -> unanimous)
  line-height:      CONTESTED — providers gave: [leading‑snug, leading‑none, leading‑none to leading‑tight, leading‑relaxed]; no majority
  letter-spacing:   tracking‑tighter (3/4: DSP, GLM, K26; K25 tracking‑tighter as well -> unanimous)
  text-transform:   uppercase (unanimous)

label:
  font-family:      same as body (contested)
  font-size:        text‑xs (unanimous)
  font-weight:      CONTESTED — providers gave: [font‑normal, font‑medium, font‑bold, font‑normal]; 2/4 for font‑normal; no majority
  line-height:      leading‑none (3/4: DSP, GLM, K26; K25 leading‑normal)
  letter-spacing:   tracking‑tighter (2/4 for tracking‑tight? DSP tracking‑tighter, GLM tracking‑tight, K26 tracking‑tight, K25 tracking‑normal; no majority)
  text-transform:   uppercase (unanimous)

## 5. Elevation

Flat depth model — no shadow hierarchy. Depth is created exclusively through overlapping flat shapes with varying opacity and 2.5D scaling/rotation. (Unanimous)

stacking:
  base-content:       z-0
  sticky-elements:    z-20  (accepted from DSP, K25; others not specified)
  dropdowns:          z-30  (only DSP defines; accepted as conventional)
  overlays:           z-40  (3/4: DSP, K26, K25; GLM omits)
  modals:             z-50  (3/4: DSP, K26, K25)
  top-layer:          z-[60]+  (DSP, K25; others not specified; convention)

## 6. Spacing & Sizing

padding:
  component-internal:   CONTESTED:§6.padding_component — providers gave: [p‑2 or p‑4, p‑1, p‑2 to p‑3, p‑4]; no majority; gap marker
  section-internal:     CONTESTED:§6.padding_section — [p‑8, p‑4, p‑4 to p‑6, p‑8]; 2/4 for p‑8; no majority
  page-edge:            CONTESTED:§6.padding_page_edge — [px‑4, p‑6, p‑4, p‑12]; no majority

margin:
  between-components:   CONTESTED:§6.margin_components — [gap‑4, gap‑2, gap‑2 to gap‑4, gap‑4]; no majority
  between-sections:     CONTESTED:§6.margin_sections — [gap‑8, gap‑8, gap‑6 to gap‑8, gap‑8]; majority for gap‑8 (3/4: DSP, GLM, K25; K26 includes gap‑8 in range)

component-heights:
  sm:   CONTESTED:§6.component_height_sm — [h‑8, h‑8, h‑6, h‑16]; no majority
  md:   CONTESTED:§6.component_height_md — [h‑12, h‑10, h‑8, h‑32]; no majority
  lg:   CONTESTED:§6.component_height_lg — [h‑16, h‑12, h‑10, h‑64]; no majority

icon-size:              CONTESTED:§6.icon_size — [w‑6 h‑6, w‑4 h‑4, w‑4 h‑4, w‑6 h‑6]; 2/4 for w‑4 h‑4, 2/4 for w‑6 h‑6; no majority

## 7. Borders

border-radius:
  default:   rounded-none (unanimous)
  card:      rounded-none (unanimous)
  button:    rounded-none (unanimous)
  input:     rounded-none (unanimous)
  chip/badge:rounded-none (unanimous)

border-width:
  default:   CONTESTED:§7.border_width_default — [border‑2, border (1px), border (1px), border‑0]; no majority
  emphasis:  CONTESTED:§7.border_width_emphasis — [border‑4, border‑2, border‑2 to border‑4, border‑2]; 3/4 majority for includes border‑2, but exact value contested

border-style:  border-solid (unanimous)

clip-path:     CONTESTED — providers gave: [optional polygon(), not applicable, conditional polygon(), polygon()]; 3/4 agree polygon() is possible; accepted as optional with polygon() [inferred]

## 8. Opacity

disabled-state:     opacity‑40  (3/4 majority: DSP, GLM, K26; K25 gives opacity‑50, dissents)
ghost/secondary:    CONTESTED — providers gave: [opacity‑60, opacity‑60, opacity‑60, opacity‑70]; 3/4 majority for opacity‑60; accepted [unverified]
overlay/scrim:      CONTESTED — providers gave: [opacity‑50, opacity‑50, opacity‑50, opacity‑90]; 3/4 majority for opacity‑50; accepted [unverified]
hover-feedback:     CONTESTED — no majority on whether hover uses opacity or color change; gap marker

browser chrome:
  selection:
    background:  CONTESTED — rgba values differ (DSP: primary red 0.3, GLM: primary 0.25, K26: secondary blue 0.25, K25: primary 0.25); no majority
    color:       inherit (unanimous)
  scrollbar:
    style:       styled (3/4: DSP, GLM, K26; K25 says hidden)
    width:       thin ~6px (unanimous among those specifying)
    track:       CONTESTED — [black, white in light mode, #E8E8E8, black]; no majority
    thumb:       CONTESTED — [white, black in light mode, #1A1A1A, white]; no majority
    thumb-hover: CONTESTED

## 8.5. Visual Effects

### 8.5.0 — Physical Material Model

material-model:    paper

global-filter:     brightness(1.02) contrast(0.95) saturate(0.9) — simulates offset-printed paper stock with slight ink absorption and matte surface light scatter

global-overlay:    Paper grain via body::after pseudo-element:
                   SVG feTurbulence baseFrequency=0.8 numOctaves=3 fractalNoise
                   blend: multiply, opacity-8, position:fixed, z-index:9999, pointer-events:none
                   In dark mode only: additionally applies CRT scanlines via repeating-linear-gradient(rgba(0,0,0,0.15) 0 1px, transparent 1px 4px)
                   blend: overlay, opacity-75

rendering-flags:
  font-smoothing:  antialiased
  image-rendering: auto
  text-rendering:  auto

### 8.5a — Color Manipulation

mix-blend-mode:
  multiply:   overprint simulation (3/4: DSP, K26, K25; GLM does not mention)
  screen:     additive RGB mixing (3/4: DSP, K26, K25; GLM does not mention)
  difference: optional glitch effect (2/4: DSP, K26; not majority)

### 8.5d — Texture & Noise Simulation

**Offset misregistration:**
technique:    CSS pseudo‑element offset (DSP, K26) or box‑shadow (K25); GLM omits; majority for pseudo‑element technique [inferred]
parameters:   1–2px shift (DSP, K26, K25 agree)
color:        cyan (#00A8E8 / #00BFFF) or magenta (#E2007A / #FF00FF) — 2/4 each; contested
intensity:    moderate (DSP, K26; K25 not specified; GLM absent)
tailwind-approximation: no Tailwind native equivalent (unanimous)

**Halftone pattern:**
technique:    CSS radial-gradient repeating pattern (3/4: DSP, GLM, K26; K25 uses linear-gradient, dissents)
parameters:   coarse 30–45 LPI, dot size 2–3px, spacing 4–6px (overlap)
surface:      background of cards/sections (3/4)
intensity:    moderate (unanimous)
blend:        multiply (DSP), overlay (K26, K25), multiply (GLM) — no majority
tailwind-approximation: no Tailwind native equivalent (unanimous)

**CRT scanlines:**
technique:    repeating‑linear‑gradient (unanimous)
parameters:   1px line, 3–4px gap (DSP, GLM, K26, K25 agree in essence)
surface:      dark backgrounds only (3/4: DSP, GLM, K26; K25 unspecified)
intensity:    strong/moderate (mixed)
blend:        normal (DSP), overlay (GLM, K26), multiply (K25) — no majority
tailwind-approximation: no Tailwind native equivalent (unanimous)

**Paper grain:**
technique:    SVG feTurbulence (3/4: DSP, K26, K25; GLM does not include)
parameters:   baseFrequency 0.8, numOctaves 3 (DSP, K26 similar; K25: 0.5, 2)
surface:      full-page canvas (3/4)
intensity:    barely perceptible (DSP, K26, K25 agree)
blend:        multiply (DSP), overlay (K26, K25) — no majority
tailwind-approximation: no Tailwind native equivalent (unanimous)

**Compositing stack:** CONTESTED — no majority ordering.
## 9. Components

**Icon vocabulary:**
system:       custom geometric glyphs — circles, bars, arrows, crosshairs, pie-chart wedges, brackets (unanimous in spirit)
size:         CONTESTED:§9.icon_size — [w‑6 h‑6, w‑4 h‑4, w‑4 h‑4, w‑6 h‑6]; no majority
color:        inherits currentColor (unanimous)
treatment:    flat vector, hard edges, no rounding (unanimous)
restrictions: no photographic, illustrative, or organic shapes; no gradients (unanimous)

**Image/Media treatment:** Not applicable — style forbids photographic or illustrated imagery. (Unanimous)

**Buttons:**
Primary button:
  corner:       rounded‑none (unanimous)
  border:       border‑2 solid black (3/4: DSP, GLM, K26; K25 says hard edges, unspecified width)
  fill:         primary color (contested hex, so gap marker)
  text:         uppercase, bold or extrabold, white (3/4 for white, bold accepted)
  hover:        CONTESTED — opacity change vs. color shift vs. scale.
  active:       CONTESTED — scale down vs. color invert.
  disabled:     opacity‑40 (3/4 majority)

Secondary button:
  corner:       rounded‑none (unanimous)
  border:       border‑2 solid black (3/4)
  fill:         transparent or white (3/4: DSP, GLM, K26; K25 unspecified)
  text:         uppercase, bold, black (3/4)
  hover:        CONTESTED

**Card / Panel:**
  corner:       rounded‑none (unanimous)
  border:       border‑2 solid black (3/4)
  fill:         white surface (3/4 majority; K25 uses surface or process-tint)
  elevation:    flat (unanimous)
  internal padding: p‑4 (3/4 majority: DSP, GLM, K26; K25 unspecified)

**Navigation:**
  active state: filled primary + white text (3/4)
  label:        uppercase, small, tight tracking (3/4)
  icon:         geometric primitives (3/4)

**Input / Form field:**
  corner:       rounded‑none (unanimous)
  border:       border‑2 solid black (3/4; K25 says 1px white inside)
  fill:         white or transparent (split)
  label:        uppercase, rotated or above (2/4)
  focus:        border color change to blue (3/4)
  disabled:     opacity‑40 (3/4)

**Style‑native primitives:**
- Registration target / crosshairs (unanimous as decorative motif)
- Data shapes (bar charts, radar plots, dot sequences) (unanimous)
- Typographic features (rotated, stacked, fading) (unanimous)

**Data Display Components:**

metric-cell:
  Background: white surface (light) or dark surface (dark mode), flat fill, no texture.
  Border: border‑2 solid black (unanimous).
  Label: uppercase monospace text‑sm, tracking‑tight.
  Value: uppercase bold/extrabold text‑2xl, primary color (contested hex).
  Delta: monospace text‑sm, positive in secondary (or a process tint), negative in error red.
  No glow or drop‑shadow — flat hard vector.

signal-bar:
  Track: 1px solid outline (gray) line.
  Fill: primary color, flat.
  Height: 4px, no rounding.
  Border: none.
  No glow.

status-cell:
  ok:   text secondary (blue/green) + border‑2 solid secondary.
  warn: text yellow or process tint + border‑2 dashed (same color).
  err:  text error red + border‑2 solid error red.
  Fill: transparent.

data-table-row:
  Alternating rows: white / primary‑container (light gray or off‑white).
  Cell border: border‑b border‑2 solid black.
  Label: monospace text‑xs, uppercase, tracking‑tight.
  Value: monospace text‑sm, on‑surface color.
  No row‑level effects.

chart-surface:
  Background: white (light) or dark (dark mode).
  Grid lines: 1px solid outline‑gray at 25/50/75/100% heights.
  Axis labels: monospace text‑xs, outline color.
  Line: primary color, stroke‑width 2px, no dots.
  No glow, no gradient.

## 10. Layout

**Grid:**
- Invisible modular grid: 12‑column (unanimous)
- Column gutters: gap‑4 (3/4: DSP, GLM, K26; K25 unspecified)
- Deliberately break grid exactly once per composition (unanimous)
- Asymmetrical balance: weight one corner, dynamic center void (unanimous)

**Section separation:**
- Horizontal rule or bracket line (3/4: DSP, GLM, K26; K25 unspecified)

**Responsive breakpoints:**
- 375px mobile: single-column (unanimous)
- 768px tablet: multi-column (unanimous)
- 1024px+ desktop: full 12-column (unanimous)

**Motion:**
transition-duration:        0ms (unanimous)
transition-timing-function: steps(1) (unanimous)
transition-property:        opacity, transform, background‑color (unanimous)
transition-delay:           none (unanimous)

animation:
  type-scale:  instantaneous scale (3/4)
  hard-slide:  instant slide/rotate (3/4)
  cmy-strobe:  color flash (3/4)

transform-at-rest:          transform: none (unanimous)
transform-on-interact:      scale on hover/active (unanimous)
transform-style:            flat (unanimous)
backface-visibility:        hidden or visible (contested; 2/4 each)

## 11. Design System Notes

### 11a. Use Constraints

This style is appropriate for:
- Digital interfaces that need a bold, intellectual, non‑conformist aesthetic — creative tool dashboards, developer platforms, experimental editorial sites, branding for art/design institutions.
- Dark mode variants where CRT or analog screen simulation is a feature.

This style is wrong for:
- Consumer apps requiring high readability, gentle onboarding, or conventional UX patterns (e‑commerce, social media feeds, banking).
- Interfaces that demand photographic imagery, atmospheric photography, or organic illustrations.
- Lightweight, minimal, or utility‑first designs where every pixel must be frictionless.

### 11b. Prompt Phrases

1. "Tension between rigorous grid and one deliberate break"
2. "Overlapping transparent geometric planes without shadows"
3. "Typography as architectural object: stacked, rotated, cropped"
4. "Offset‑print misregistration on flat vector primitives"
5. "High‑saturation primaries plus one process tint or acidic accent"
6. "Data‑like abstract shapes as decorative texture (bar charts, crosshairs)"
7. "Hard outlines, 2.5D perspective, no gradients, no rounding"
8. "Active whitespace clustered at edges, dynamic center void"

### 11c. Do / Avoid Block

rule: Grids are fundamental but must be broken exactly once per composition.
do:   Use a 12‑column modular grid and deliberately break it one time. The break should be a single element that shifts out of alignment.
avoid: Symmetrical or centered layouts. The grid must be broken, not followed perfectly.

rule: Depth is created through overlapping transparent planes, not shadows or gradients.
do:   Overlap shapes with varying opacity (20–60%). No drop shadows, no bevels.
avoid: Drop shadows, soft shadows, gradients, rounded corners, or bevels. These introduce a digital weight that contradicts the print‑offset aesthetic.

rule: Print artifacts such as misregistration are part of the visual language.
do:   Apply offset misregistration (cyan or magenta ghost shifted 1–2px) on select elements.
avoid: Perfectly aligned, clean print. The misregistration must be present to evoke offset‑printing.

rule: All imagery must be geometric and vector‑based; no organic imagery.
do:   Use geometric primitives, crosshairs, data plots, bar charts, and abstract geometric forms.
avoid: Photographs, illustrations, organic imagery, or any raster textures. The system is purely vector.

rule: Typography is architectural and extreme — always use extreme size contrast and strict alignment.
do:   Use mixed‑case uppercase in monospace for small text. Rotate or crop typography at page edges. Stack and overlap letters as compositional objects.
avoid: Gentle typography or uniform size. Avoid conventional readability; the type is an object.

rule: Motion is instant and abrupt — no easing, no fading.
do:   Use instant cuts, hard slides, and strobes. Transition duration 0ms, timing function steps(1).
avoid: Smooth transitions, fading, or anything that suggests organic movement.

### 11d. Variation Bounds

1. **Clean vs grimy** — from pristine Swiss vector (no artifacts) to fully distressed (heavy misregistration, halftone, paper grain, scanlines). Default: mid‑range (moderate artifacts).
2. **Minimal vs maximal** — from a single letter on an empty field to dense, overlapping information hive. Default: dense but with one focal void.
3. **Analog vs digital** — from pure offset‑print artifacts (misregistration, ink gain) to screen‑native pixels (CRT scanlines, low‑resolution rasterization). Default: hybrid with print artifacts dominant on light mode, digital on dark mode.
4. **Geometric vs typographic dominance** — layout driven by shapes (circles, squares, data plots) vs layout driven by words (large type as primary architecture). Default: balanced – typography is shape, shape is typography.

### 11e. Compositional Signatures

### 11e.i — At Rest
A single composition in the default light mode. A 12‑column grid is active; one deliberate element (a rotated bracket or crosshair) breaks the modular alignment. The dominant surface is white (surface role). A large primary‑color geometric shape (circle or rectangle, 40% opacity) overlaps a secondary shape in a process tint (cyan or magenta). Typography: a title in uppercase bold monospace at text‑4xl, tightly tracked, anchored to the upper‑left corner. No misregistration, no scanlines. The dynamic centre is empty, with active whitespace clustering around the edges. Motion is static — no animation.

### 11e.ii — Maximum Expressiveness
Dark mode CRT simulation. Multiple overlapping geometric planes in high‑saturation primaries (red, yellow, blue) and one process tint (cyan). Heavy misregistration on all shapes (1–2px cyan and magenta ghosts). Typography: a single massive letter cropped at the page edge, rotated 90°, and repeated at smaller size in reversed white. In the centre, a data‑plot cluster (bar charts, dot sequences, crosshairs) forms a dense hive. A band of scanlines (repeating linear gradient) covers the entire composition at multiply opacity‑10. The page is bordered by thin bracket lines. Animation: a slow cmy‑strobe cycle on the process‑tint plane.

### 11e.iii — Data Context
A dashboard interface in light mode. Metric cells use white background, border‑2 solid black, uppercase monospace label (text‑sm), and primary‑color value (text‑2xl, bold). Delta indicators are monospace text‑sm: positive in secondary, negative in error red. A signal bar uses a 4px primary‑color fill on a gray track. Status cells for ok/warn/err use text color plus solid/dashed border (no fill). A data table alternates white and light‑gray rows, with thin black horizontal borders. A line chart on a white background uses primary‑color 2px stroke, gray grid lines at 25/50/75/100%, and monospace axis labels. No glow, no gradient — hard vector throughout.

### 11f. Sources

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** **Muriel Cooper** (1925–1994) was an American graphic designer, educator, and pioneer of information design and digital typography. She served as the first design director of the MIT Press from 1952 to 1974, where she developed the iconic MIT Press colophon and oversaw the design of hundreds of books, especially the influential Bauhaus series.

**Verified imagery sources.** 6 URLs verified against institutional servers, distributed across:
- Museum of Modern Art, New York — 2 URL(s)
- Cooper Hewitt, Smithsonian Design Museum — 2 URL(s)
- Victoria and Albert Museum, London — 1 URL(s)
- en.wikipedia.org — 1 URL(s)

Key references include the MIT Museum's record of the "Man and the Machine" poster at https://mitmuseum.mit.edu/ and the MIT Press's archival files for the Bauhaus book series at the MIT Institute Archives.

**Named typefaces.** The typography of this style is attested as:
- Monotype Baskerville (for Monotype — attestation: attested) — rendered here in Libre Baskerville as the closest open substitute
- Futura ( — attestation: attested) — rendered here in Jost as the closest open substitute
- Helvetica ( — attestation: attested) — rendered here in Inter as the closest open substitute
- Optima ( — attestation: inferred) — rendered here in Cormorant Garamond as the closest open substitute
- Helvetica ( — attestation: unknown) — rendered here in Inter as the closest open substitute
- Times New Roman ( — attestation: unknown) — rendered here in Tinos as the closest open substitute
- custom hand-lettered expressive sans serif (Man and the Machine poster) (designed by Muriel Cooper — attestation: unknown) — rendered here as bespoke imagery — no web-font substitute

**Honest gaps.** The most significant gap is the absence of verified colour specifications: no hex, Pantone, or CMYK values exist for any colour in Cooper's printed works, and the exact colour formula is missing because these details were not published in primary sources. This deficiency affects all reproductions and analyses of her work. Resolution would require spectrophotometry of surviving original prints or access to original printer instructions.
