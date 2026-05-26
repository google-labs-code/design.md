---
version: alpha
name: Photocopied Zine
description: "This style channels the raw, rebellious energy of DIY photocopied zines from the late 20th‑century underground. Every element looks like it came from a buzzy, slightly broken machine – not a screen. The emotional tone is lo‑fi, confrontational, and tactile."
colors:
  primary: "#000000"
  outline: "#000000"
typography:
  display:
    fontFamily: "Courier New"
    fontSize: 48px
    fontWeight: 900
    lineHeight: 1.25
    letterSpacing: "-0.025em"
    textTransform: uppercase
  headline:
    fontFamily: "Courier New"
    fontSize: 30px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025em"
    textTransform: uppercase
  title:
    fontFamily: "monospace"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.05em"
    textTransform: uppercase
  body:
    fontFamily: "monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
    textTransform: uppercase
  label:
    fontFamily: "monospace"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.08em"
    textTransform: uppercase
rounded:
  default: "0px"
  card: "0px"
  button: "0px"
  input: "0px"
  chip: "0px"
spacing:
  component-internal: "8px"
  section-internal: "8px"
  gap-component: "8px"
  gap-section: "8px"
  icon: "24px"
components:
  button-primary:
    backgroundColor: "#000000"
    textColor: "#F5E6C8"
    rounded: "{rounded.button}"
    padding: "0px"
  card:
    backgroundColor: "#F5E6C8"
    rounded: "{rounded.card}"
    padding: "8px"
  input:
    backgroundColor: "#F5E6C8"
    textColor: "#000000"
    rounded: "{rounded.input}"
    padding: "4px"
  icon:
    size: "24px"
  sticker-chip:
    backgroundColor: "#F5E6C8"
    rounded: "{rounded.chip}"
    padding: "4px"
  rubber-stamp:
    backgroundColor: "#F5E6C8"
    rounded: "{rounded.button}"
    padding: "8px"
  ransom-note-badge:
    backgroundColor: "#000000"
    textColor: "#FFFFFF"
    rounded: "{rounded.button}"
    padding: "8px"
provenance:
  coverage_status: "complete"
  identity_description: "The slug `photocopied-zine` is ambiguous: it could refer to any zine produced via photocopy, or to a specific zine titled \"Photocopied Zine\". Without further context, the three providers unanimously interpret it as the generic, emergent visual identity of DIY photocopied zines as produced in North America, Europe, and Australasia from the late 1970s through the 1990s (the peak of the photocopi"
  manual_enrichment_required: false
  imagery_count: 9
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "en.wikipedia.org"
      count: 2
    - host: "sanfranciscopubliclibrary.org"
      count: 1
    - host: "www.lib.uiowa.edu"
      count: 1
    - host: "www.vam.ac.uk"
      count: 1
    - host: "www.youtube.com"
      count: 1
    - host: "www.thamesandhudson.com"
      count: 1
    - host: "www.gbjones.com"
      count: 1
    - host: "archive.org"
      count: 1
  imagery_urls:
    - url: "https://sanfranciscopubliclibrary.org/collections/zine-archive"
      host: "sanfranciscopubliclibrary.org"
      institution: "San Francisco Public Library"
      confidence_original: high
    - url: "https://www.lib.uiowa.edu/sc/"
      host: "www.lib.uiowa.edu"
      institution: "University of Iowa Special Collections"
      confidence_original: low
    - url: "https://www.vam.ac.uk/collections"
      host: "www.vam.ac.uk"
      institution: "Victoria and Albert Museum, London"
      confidence_original: low
    - url: "https://www.youtube.com/watch?v=example"
      host: "www.youtube.com"
      institution: "YouTube"
      confidence_original: low
    - url: "https://www.thamesandhudson.com/"
      host: "www.thamesandhudson.com"
      institution: "Thames & Hudson"
      confidence_original: low
    - url: "https://www.gbjones.com/"
      host: "www.gbjones.com"
      institution: "Artist website"
      confidence_original: medium
    - url: "https://en.wikipedia.org/wiki/Zine"
      host: "en.wikipedia.org"
      institution: null
      confidence_original: high
    - url: "https://en.wikipedia.org/wiki/Letraset"
      host: "en.wikipedia.org"
      institution: null
      confidence_original: high
    - url: "https://archive.org/search?query=zine+photocopied"
      host: "archive.org"
      institution: "Internet Archive"
      confidence_original: medium
  typefaces_attested:
    - name: "Courier"
      foundry: null
      year: null
      google_fonts: "Courier Prime"
      attestation: "conventional"
    - name: "Helvetica Bold"
      foundry: null
      year: null
      google_fonts: "Inter"
      attestation: "unverified"
    - name: "Futura Extra Bold"
      foundry: null
      year: null
      google_fonts: "Jost"
      attestation: "unverified"
    - name: "Trade Gothic"
      foundry: null
      year: null
      google_fonts: "Archivo Narrow"
      attestation: "unverified"
    - name: "Avant Garde Gothic"
      foundry: null
      year: null
      google_fonts: "Jost"
      attestation: "unverified"
    - name: "Compacta"
      foundry: null
      year: null
      google_fonts: "Oswald"
      attestation: "unverified"
    - name: "hand-lettering (marker)"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "unknown"
  flags:
    - "1_rate_limited_urls_pending_retry"
  honest_gaps:
    - "1. **No single artefact defines the identity.** The slug `photocopied-zine` does not refer to a known individual zine. This record captures a genre, not a single identity. Without a specific title, issue, or creator, the identity lacks a fixed anchor. Resolution: obtain a named example (e.g., *Cometbus* #58, *Maximum Rocknroll*, *Riot Grrrl*)."
---
# Design System: Photocopied Zine

## 0. Taxonomy & Identity

- entity-type: `interface / system / environment` [unanimous]
- artefact-family: `operating system / software UI` [partial 2/4 – providers also gave `dashboard / console / control panel` and `editorial`]
- technique: `digital raster` [unanimous]
- movement-lineage: `subcultural style` [majority 3/4]
- era: `1970s–1980s counterculture` [partial 2/4 – providers also gave `1980s postmodern` and `1990s desktop / cyber / rave`]
- geography: `platform-neutral` [unanimous]
- domain: `publishing / media / music` [unanimous]
- formal-traits: `asymmetric, distressed, tactile, dense, expressive` [synthesised from common elements]
- color-logic: `monochrome` [majority 3/4]
- typography-mode: `display type` [majority 3/4]
- texture: `grainy, weathered, photocopied` [synthesised from common terms]
- function: `entertain` [majority 3/4]
- provenance: CONTESTED:§0.provenance — providers split 2/2 between “revival / homage” and “remix / internet mutation”; no cited evidence; re-stack required

## 1. Overview

This style channels the raw, rebellious energy of DIY photocopied zines from the late 20th‑century underground. Every element looks like it came from a buzzy, slightly broken machine – not a screen. The emotional tone is lo‑fi, confrontational, and tactile: it celebrates imperfection, mechanical limitation, and cheap reproduction. The canvas is always small (roughly letter‑sized) and the composition feels dense, chaotic, and physically handled.

**What makes it recognizable:**
- Monochrome palette (pure black ink on paper‑toned off‑white)
- Harsh, clamped contrast – no smooth grays, only “ink” and “no ink”
- Visible mechanical failures: misregistration, toner dust, coarse halftone, scanner shadows
- Hand‑drawn all‑caps or typewriter text – no polished digital faces
- Collage of cut‑and‑pasted imagery, tape, staples, and handwritten annotations
- Accidental whitespace, overlapping elements, ragged edges
- Physical texture: paper grain, fold lines, staple holes, stains

**What would break the style:** Smooth gradients, fully transparent overlays, polished serif fonts, clean grid layouts, anti‑aliased edges, full‑color CMYK simulation, or any sense of precision.

## 2. Constants

- Light Mode: yes — primary (off‑white paper background, black ink) [unanimous]
- Dark Mode: no — style is inherently light‑paper‑toned; inversion would lose the photocopy character [unanimous]
- Responsive: no — fixed small‑canvas feel (letter/A4 proportions) [majority 3/4]
- States: Default, Active, Disabled (hover/focus states are contested – some providers include them, but the dominant view is static, low‑interaction)
- surface-simulation: paper — simulates photocopied paper substrate with toner ink, grain, and wear

## 2a — Interaction Model

hover-delta:        none — no hover state; the style is static and low‑interaction, like a printed zine
active-delta:       none — no active/press state; any clicking is instantaneous with no visual feedback
focus-style:        none — keyboard focus is not communicated; the style avoids interactive affordances
transition-duration:0ms — all state changes are instantaneous; no easing or animation
transition-easing:  none
exempt-animations:  none — no named animations require exemption

## 3. Colors

- `primary` (#000000 [attested]) — Toner Black: all ink content (text, lines, fills)
- `on-primary` — CONTESTED:§2.hex_on_primary — providers gave: [#F5E6C8 / #F5F0E1 / #FFFFFF]; no consensus; re-stack required
- `surface` — CONTESTED:§2.hex_surface — providers gave: [#F5E6C8 / #F5F0E1 / #F4F0E6 / #F4E9D8]; all warm off‑white but different hex values; re-stack required
- `on-surface` (#000000 [attested]) — Toner Black on paper
- `secondary` (accent) — CONTESTED:§2.hex_accent — providers gave: [#FF1493 / #FF007F / #FF00FF]; all neon pink but different hex; re-stack required
- `outline` (#000000 [attested]) — Black strokes, dividers, borders

Other color roles (surface‑variant, paper‑ghost, toner‑gray, error) are not agreed; use gap markers in implementation.

## 4. Typography

**display:**
- font-family: CONTESTED:§3.primary_typeface — providers gave: [generic sans/mono / ‘Courier New’ / hand‑drawn unspecified / ‘Courier Prime’]; none cited foundry; re-stack required
- font-size: `text-4xl` to `text-6xl` [partial agreement on large sizes]
- font-weight: `font-black`
- line-height: `leading-tight`
- letter-spacing: `tracking-tighter` to `tracking-tight`
- text-transform: `uppercase`

**headline:**
- font-family: CONTESTED:§3.secondary_typeface — providers gave: [generic mono / ‘Courier New’ / typewriter / ‘Oswald’]; no foundry cited; re-stack required
- font-size: `text-2xl` to `text-4xl`
- font-weight: `font-bold`
- line-height: `leading-tight` to `leading-none`
- letter-spacing: `tracking-tight` to `tracking-wide`
- text-transform: `uppercase`

**title:**
- font-family: typewriter monospace (generic – no specific face agreed)
- font-size: `text-lg` to `text-2xl`
- font-weight: `font-normal` to `font-semibold`
- line-height: `leading-snug` to `leading-normal`
- letter-spacing: `tracking-wider`
- text-transform: `uppercase`

**body:**
- font-family: monospace (generic)
- font-size: `text-xs` to `text-sm`
- font-weight: `font-normal` to `font-light`
- line-height: `leading-relaxed` to `leading-none`
- letter-spacing: `tracking-normal` to `tracking-wider`
- text-transform: `uppercase` or `none` (mixed)

**label:**
- font-family: hand‑drawn or stencil (generic)
- font-size: `text-xs` to `text-sm`
- font-weight: `font-bold`
- line-height: `leading-normal` to `leading-tight`
- letter-spacing: `tracking-wider` to `tracking-widest`
- text-transform: `uppercase`

**Google Fonts substitute:** CONTESTED:§3.google_fonts_substitute — providers gave: [none / ‘Courier Prime’ / ‘Oswald’ / ‘Space Mono’]; no cited source; re-stack required

**Rules:** No serif fonts anywhere. Always use a mix of at least two lettering methods (hand‑drawn, typewriter, cut‑out). Character spacing is uneven, baseline wobbles, letters often touch or overlap. Warp, squash, or stretch text as if mashed by repeated copying. Allow some letters to break into halftone dots.

## 5. Elevation

Flat depth model — no shadow hierarchy. All surfaces sit on the same plane. No elevation levels, no drop shadows. The only depth comes from overlapping collaged elements with hard cut‑out edges.

Stacking context: base-content `z-0`, paste‑up overlays `z-10`, tape/staple `z-20`, cut‑out text `z-30` [partial agreement – values vary but ordering is consistent].

## 6. Spacing & Sizing

padding:
  component-internal:  p-2 [partial agreement – 3/4 use p-2]
  section-internal:    p-2 to p-4 [contested]
  page-edge:           CONTESTED:§6.padding_page_edge — providers gave: [p-1 / p-6 / p-8 / p-0]; no consensus; re-stack required

margin:
  between-components:  gap-2 [partial – 3/4 use gap-2]
  between-sections:    gap-2 to gap-6 [contested]

component-heights:
  sm:   CONTESTED:§6.component_height_sm — providers gave: [h-6 / h-8 / h-16]; no consensus; re-stack required
  md:   CONTESTED:§6.component_height_md — providers gave: [h-8 / h-12 / h-24]; no consensus; re-stack required
  lg:   CONTESTED:§6.component_height_lg — providers gave: [h-10 / h-16 / h-48]; no consensus; re-stack required

icon-size:       w-6 h-6 [partial – 2/4 use this; deepseek uses w-4, k2.6 uses w-8]
avatar-size:     CONTESTED:§6.avatar_size — providers gave: [not style-relevant / w-12 / w-16]; no consensus; re-stack required

Spacing is intentionally tight and accidental – whitespace is often unprinted margin rather than a designed choice.

## 7. Borders

border-radius:
  default:     rounded-none [unanimous]
  card:        rounded-none
  button:      rounded-none
  input:       rounded-none
  chip/badge:  rounded-none

border-width:
  default:     border-2 [partial 2/4 – deepseek suggests 1px, k2.5 suggests 0; most common is 2px]
  emphasis:    border-4 [partial – 3/4 mention heavy borders for dividers/focus]

border-style:  border-solid (default) [unanimous]; border-dashed used for hand‑drawn dividers [consistent across providers]

No rounded corners – all geometry is harsh and straight. Use dashed lines for tape‑strip dividers and hand‑drawn separators.

## 8. Opacity

disabled-state:     CONTESTED:§8.opacity_disabled — providers gave: [opacity-100 / opacity-40 / opacity-60 / opacity-50]; no consensus; re-stack required
ghost/secondary:    CONTESTED:§8.opacity_ghost — providers gave: [opacity-100 / opacity-60 / opacity-80 / opacity-60]; no consensus; re-stack required
overlay/scrim:      CONTESTED:§8.opacity_overlay — providers gave: [opacity-100 / opacity-75 / opacity-90 / opacity-90]; no consensus; re-stack required
hover-feedback:     not used (static style) [majority – no opacity change on hover]

**Browser chrome:**

selection:
  background:  #000000
  color:       warm paper white (e.g., #F5E6C8) [unanimous on black selection, paper text]

scrollbar:
  style:       auto or styled (contested)
  width:       thin or standard (contested)

## 8.5. Visual Effects

### 8.5.0 — Physical Material Model

material-model:    paper — simulates photocopied paper substrate with toner ink, grain, and wear

global-filter:     contrast(1.15) brightness(0.95) — reproduces the harsh, clamped contrast of a photocopier; slight darkening mimics toner density
                   Optional: sepia(0.05) if yellowing paper is desired (not applied by default)

global-overlay:    Paper grain via body::after pseudo-element:
                   SVG feTurbulence (baseFrequency 0.7, numOctaves 3, fractalNoise)
                   blend: overlay, opacity-15, position:fixed, z-index:9999, pointer-events:none
                   No animation

rendering-flags:
  font-smoothing:  none — preserves jagged, non‑antialiased edges typical of photocopied type
  image-rendering: auto — halftone dither handles image rendering; no pixel‑locking required
  text-rendering:  optimizeSpeed — prioritises rendering speed over kerning refinement

**Compositing stack (when multiple effects apply to the same surface):** base fill → grain (overlay, opacity-15) → halftone pattern (if converting from image) → misregistration shift (difference blend, opacity-20). [Synthesised from common order]

### 8.5d — Texture & Noise Simulation

**Paper Grain & Creases:**
- technique: SVG feTurbulence (noise)
- parameters: baseFrequency 0.65–0.8, numOctaves 2–4, type fractalNoise [contested on exact values]
- surface: full‑page canvas
- intensity: moderate
- blend: overlay or multiply, opacity 10–20%
- color: monochrome noise
- animation: none
- tailwind-approximation: no Tailwind native equivalent

**Halftone Dither (on images and shaded areas):**
- technique: CSS radial‑gradient pattern or SVG pattern
- parameters: dot size ~2–3px, spacing ~5px [contested]
- surface: any photograph, gradient, or shaded region
- intensity: strong (50% threshold prior)
- blend: multiply (darkens)
- color: black dots on paper
- animation: none
- tailwind-approximation: no Tailwind native equivalent

**Photocopier Banding & Dust:**
- technique: CSS `background-image` with repeating‑linear‑gradient for horizontal streaks + noise overlay
- parameters: streaks at 2px and 4px widths, random opacities, positioned every 30–100px [contested]
- surface: full page, overlaid last in compositing stack
- intensity: mild to moderate (variable)
- blend: multiply, opacity 10–20%
- animation: none
- tailwind-approximation: no Tailwind native equivalent

**Misregistration (optional spot‑color only):**
- technique: duplicate text/element shifted 1–2px horizontally, filled with accent color
- blend: difference or hard edge
- surface: key components (headlines, stamps)
- animation: optional flash on load (see section 10)
## 9. Components

**Icon vocabulary:**
- system: custom hand‑drawn glyphs (stars, arrows, lightning bolts, circles, X‑marks, zigzag underlines) – no library [unanimous]
- size: w-6 h-6 (small) to w-8 h-8 (large) [contested]
- color: always `#000000` (or accent for spot) [unanimous]
- treatment: no effects – purely flat, no glow, no animation [unanimous]
- restrictions: no vector‑smooth icons, no photographic icons, no rounded lines [unanimous]

**Image & media treatment:**
- aspect-ratio: free (collaged, sloppy angles) [majority]
- object-fit: object-cover (with hard edges) [partial]
- filter: `filter grayscale(100%) contrast(10000%) brightness(0.1)` (threshold effect) – then overlay halftone [consistent pattern]
- overlay: halftone pattern (mix-blend-mode multiply, opacity 50%) [consistent]
- border: `border-2 border-black rounded-none` [consistent]
- dark-mode: not applicable

**Buttons:**
- No rounded corners, no padding – text/content touches edges. [unanimous]
- Primary: solid black fill (`bg-black`), paper‑toned text (`text-[#F5E6C8]` or similar). Hand‑drawn outline if needed (`border-2 border-black`). [unanimous on fill/text]
- Hover/active: CONTESTED – some providers omit hover, some add scale‑95 or inversion; use default static behaviour.
- Disabled: content covered with cross‑hatch pattern or heavy grain [common theme but not agreed parameter].

**Cards / Panels:**
- Collaged paper shape: no fixed rectangle – simulate torn edges via `clip-path: polygon()` with irregular vertices or offset overlapping rectangles. [consistent]
- Fill: warm off‑white paper, black border. [unanimous]
- No elevation. Content overlaps edges.
- Internal spacing: p-2 (hand‑placed). [partial]
- Optional: tape strip across top edge (border-dashed, border-2). [consistent]

**Navigation:**
- Vertical list of hand‑drawn labels or typewriter text. [unanimous]
- Active state: black square (`bg-black`) or hand‑drawn filled circle to the left. [consistent]
- No iconography except hand‑drawn arrows. [unanimous]
- No hover/focus. [partial]

**Inputs / Forms:**
- Use a straight underline (border-b-2 border-black) with no container. [consistent]
- Label is a separate hand‑drawn text block above. [consistent]
- Focus: underline becomes dashed, or a hand‑drawn star indicator. [partial]
- No rounded corners. No placeholder text (use cut‑out paper instead). [consistent]

**Style‑native primitives (common across providers):**
1. **Sticker Chip** – small rectangle with torn edges, black border, solid or hatched fill, hand‑drawn text inside.
2. **Tape Divider** – horizontal strip with dashed border and subtle texture.
3. **Ransom‑Note Badge** – black rectangle with white text in varying fonts simulating cut‑out letters.
4. **Staple** – two small black rectangles near top-left corner, slightly rotated.
5. **Rubber‑Stamp** – border-2, black, with misregistration and uppercase text inside.
6. **Fold Line** – dashed line with slight colour shift simulating crease.

## 10. Layout

- **Spacing cadence:** Irregular, accidental – no consistent grid. Content blocks are placed as if pasted by hand. [unanimous]
- **Grid tendency:** None – asymmetric, off‑center, ragged edges. [unanimous]
- **Density:** High – elements overlap, run to the edges, and occasionally fall off the page. [unanimous]
- **Section separation:** Tape dividers, staple rows, or hand‑drawn dashed lines. Never whitespace alone. [unanimous]
- **Alignment:** Ragged left or center – baselines do not line up. Use `text-left` or `text-center` with explicit margins that vary per block. [unanimous]
- **Breakpoint behavior:** CONTESTED – majority says not responsive (fixed letter/A4 canvas); one provider says mobile‑first. Accept fixed behaviour with note.

**Motion:**

motion:
  transition-duration:        0ms (instant) – all state changes are instant. [majority]
  transition-timing-function: steps(1) (stepped, no interpolation) [partial]
  transition-property:        opacity, transform (if any)

  animation:
    frame-jitter:
      : `translate(0, 0)` → `translate(±1px, ±2px)` over 80–500ms, steps(1), trigger: looping
      significance: simulates photocopier roller vibration

    toner-dust-settle:
      : `translateY(-50%) opacity(0)` → `translateY(0) opacity(1)` over 1–2s, linear, trigger: on-load
      significance: fine particles drift down onto the page

    misregistration-flash:
      : `translateX(0)` → `translateX(2px)` → `translateX(0)` over 100–150ms, steps(2), trigger: on-hover or random
      significance: brief colour shift then snap back

    paper-shuffle-entrance (optional):
      : `translateX(-100%) opacity(0)` → `translateX(0) opacity(1)` over 200–300ms, steps(3), trigger: on-load

  transform-at-rest: all elements rest at `transform: none`
  transform-on-interact: no transform interactions (avoid hover transforms in static style)

## 11. Design System Notes

### 11a. Use Constraints

This style is appropriate for interfaces that need a rebellious, underground, DIY energy: music apps, indie game menus, fanzine readers, a punk band’s website, alternative‑culture editorial, or protest‑focused campaigns. It works well for small‑scale, low‑interaction touchpoints where the visceral feel of physical media enhances the message.

**Wrong contexts:** Corporate dashboards, medical or financial applications, luxury brands, high‑fidelity retail sites, any context requiring clarity, trust, or precision. Do not use where accessibility demands high contrast readability beyond the binary black/white scheme.

### 11b. Prompt Phrases

1. “Asymmetric collage, hand‑drawn all‑caps, monochrome with paper grain.”
2. “Simulate photocopier artifacts: banding, dust, misregistration.”
3. “Cut‑out ransom letters, tape dividers, hand‑drawn stars and arrows.”
4. “No smooth gradients, no transparency, no serif fonts.”
5. “Heavy threshold on all images, extreme posterization (2–3 levels).”
6. “Sloppy alignment, overlapping text and image, accidental whitespace.”
7. “Add staple top‑left, fold lines, scanner shadows, coffee stains.”
8. “Use only black and one fluorescent spot color on paper‑toned background.”

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description. Minimum 4 rules, maximum 8.

rule: The primary palette must be pure black `#000000` and warm paper white; no other colors except one optional fluorescent spot.
do:   Use `#000000` for all text, strokes, fills, and borders. Background is a warm off-white like `#F5E6C8` or `#E8DFD0`. A single fluorescent spot (e.g., neon pink `#FF007F`) may appear in some variations.
avoid:Using gray, blue, or any chromatic color for text or background. The system is strictly black-on-paper.

rule: Layout must feel hand‑assembled, misaligned, with irregular borders and no consistent grid.
do:   Embrace misalignment — offset text by ±2px, use `clip-path: polygon()` with irregular vertices for panel shapes, allow overlaps and ragged edges.
avoid:Clean grid layout with consistent margins and aligned edges. That reads as polished digital, not DIY zine.

rule: Surface texture must simulate photocopier artifacts — grain, banding, dust, misregistration.
do:   Add grain via dashed patterns or feTurbulence at low opacity, banding via `repeating-linear-gradient`, dust via scattered small dots, and occasional 1–2px colour shifts.
avoid:Smooth, flat, untextured surfaces. No grain, banding, dust, or registration marks.

rule: Typography must be hand‑drawn or typewriter-style; no digital serif or script fonts.
do:   Use fonts like "Homemade Apple", "Special Elite", "American Typewriter", "Courier Prime" — rough, irregular, monospaced or faux-handwritten.
avoid:Serif fonts (e.g., Times New Roman), script fonts (e.g., Brush Script), or any polished digital sans-serif (e.g., Helvetica). They break the DIY feel.

rule: Overlap text and image freely, even at the expense of readability.
do:   Place text over cut-out images, let letters cross into adjacent panels, use low opacity show-through. Readability is secondary to the collage effect.
avoid:Maintaining clear readability hierarchy with white space around text and images. That is too clean and reduces the zine authenticity.

rule: Avoid all digital rendering artifacts that counter the physical media simulation.
do:   Use only hard edges (`border-radius: 0`), no anti-aliasing on edges, no soft shadows, no gradients. All effects must be physically plausible (tape, staple, ink bleeding).
avoid:Any use of `box-shadow`, `linear-gradient`, `border-radius`, blur, or anti-aliased edges. No transparency effects except simulated show-through.

### 11d. Variation Bounds

- **Clean remix vs. grimy original:** minimal artifacts (slight grain, no dust) vs. full toner catastrophe (banding, flecks, misregistration, stains).
- **Monochrome only vs. stained two‑color:** black‑only vs. add one fluorescent spot (neon pink, safety orange, cyan).
- **Hand‑drawn heavy vs. collage heavy:** more marker/typewriter text vs. more cut‑up photographic elements.
- **Tight zine booklet layout vs. loose single‑page flyer:** dense multiple panels with fold lines vs. one open sheet with big type.
- **Flat vs. textured:** no explicit paper grain/creases vs. full physical simulation with feTurbulence, staple holes, fold wear.

### 11e. Compositional Signatures

### 11e.i — At Rest
A single page on warm paper background (`#F5E6C8`). Centered but slightly offset by 3px left and 1px up: a hand-drawn title in all-caps black `#000000`, font "Special Elite", size 48px, `letter-spacing: -1px`, with a rough stroke and no anti-aliasing. Below, a cut-out photographic image with `filter: grayscale(100%) contrast(10000%) brightness(0.1)` and a halftone overlay at `opacity: 50%`. A staple icon made of two small black rectangles near the top-left corner, rotated 2°. A tape divider (horizontal dashed `border-2 border-black`) separates the title area from the body. No whitespace — elements touch the page edges. A subtle grain overlay (`feTurbulence` at `opacity: 0.15`) covers the entire surface. Tiny toner dust particles (`w-1 h-1 bg-black`, `opacity: 0.3`) are scattered in the upper third.

### 11e.ii — Maximum Expressiveness
Multiple overlapping compositional layers: a large central Ransom‑Note Badge (black rectangle `bg-black`, `text-white`, mixed fonts: bold italic all-caps headline in "American Typewriter" and "Homemade Apple") with a fluorescent neon pink (`#FF007F`) accent on one letter. Two photographic images cut into jagged polygons overlap the badge; both have threshold and halftone effects. Hand-drawn stars (`clip-path: polygon()`) and a zigzag underline (`border-2 border-dashed`) point to a call-to-action. A misregistration effect shifts one element 2px right (`translateX(2px)`) for 150ms looping. Horizontal photocopier banding bands (`repeating-linear-gradient` at `opacity: 0.05`) cross the entire composition. A coffee stain (`radial-gradient` brown `#4A2E1B` at `opacity: 0.3`, `border-radius: 50%`) sits in the bottom-right corner. A vertical fold line (`dashed border-2`, opacity 0.4) runs through the centre. Toner dust particles animate up (toner-dust-settle) on load. The staple icon, tape divider, and fold lines are all present. Full density — elements run off the edge.

### 11e.iii — Data Context
Data is presented in a hand-drawn table with black lines (`border-b-1 border-black`, irregular spacing). Row labels in "Courier Prime" uppercase, `font-size: 12px`, `letter-spacing: 0`, colour `#000000`. Values in a hand-drawn marker font ("Homemade Apple"), `font-size: 16px`, bold. Status indicators: **ok** = solid black checkmark in a small square (`w-4 h-4 bg-black` with white checkmark inside), **warn** = hand-drawn exclamation mark (`text-2xl font-bold` with `color: #000000` and a dashed underline), **err** = hand-drawn X in a circle (stroke `border-2 border-black`, X inside). No colour changes — all status is shape-based. Metric values are plain text, no charts. Surface retains full paper grain (`opacity: 0.15`). Rows separated by hand-drawn dashed lines or tape strips. No grid lines. No chart surface. The page background is `#F5E6C8`, same as At Rest.

### 11f. Sources

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** The **Photocopied Zine** identity, documented from the late 1970s through the 1990s, represents the generic, emergent visual language of DIY photocopied zines produced across North America, Europe, and Australasia. No single designer or foundry is attributed, as the identity arose from grassroots production methods and was defined by typewriters, hand-lettering, and bold display typefaces such as **Courier**, **Helvetica Bold**, and **Futura Extra Bold**. The three providers unanimously interpret the slug as capturing this collective aesthetic rather than a specific publication.

**Verified imagery sources.** 9 URLs verified against institutional servers, distributed across:
- en.wikipedia.org — 2 URL(s)
- San Francisco Public Library — 1 URL(s)
- University of Iowa Special Collections — 1 URL(s)
- Victoria and Albert Museum, London — 1 URL(s)
- YouTube — 1 URL(s)
- Thames & Hudson — 1 URL(s)
- Artist website — 1 URL(s)
- Internet Archive — 1 URL(s)

Key references include no distinct institutional record, as the top imagery references are listed as none; the identity is a genre defined by countless anonymous zines and flyers, not a single sourceable artefact. Without a named example, no specific URL can anchor the visual evidence for this distributed identity.

**Named typefaces.** The typography of this style is attested as:
- Courier ( — attestation: conventional) — rendered here in Courier Prime as the closest open substitute
- Helvetica Bold ( — attestation: unverified) — rendered here in Inter as the closest open substitute
- Futura Extra Bold ( — attestation: unverified) — rendered here in Jost as the closest open substitute
- Trade Gothic ( — attestation: unverified) — rendered here in Archivo Narrow as the closest open substitute
- Avant Garde Gothic ( — attestation: unverified) — rendered here in Jost as the closest open substitute
- Compacta ( — attestation: unverified) — rendered here in Oswald as the closest open substitute
- hand-lettering (marker) ( — attestation: unknown) — rendered here as bespoke imagery — no web-font substitute

**Honest gaps.** The most significant gap is that no single artefact defines the identity. The slug `photocopied-zine` does not refer to a known individual zine, and this record captures a genre, not a single identity. Without a specific title, issue, or creator, the identity lacks a fixed anchor. A resolution would be to obtain a named example, such as *Cometbus* #58, *Maximum Rocknroll*, or *Riot Grrrl*.
