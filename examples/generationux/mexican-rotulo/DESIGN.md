---
version: alpha
name: "Mexican Rótulo"
description: "A vibrant, vernacular design system inspired by Mexican hand-painted storefront signage, using saturated enamel colours, fat Tuscan serifs, heavy drop shadows, and weathered textures."
colors:
  primary: "#DC143C"
  tertiary: "#FFD700"
typography:
  display:
    fontFamily: "system serif"
    fontSize: "60px"
    fontWeight: 900
    lineHeight: 1.25
    letterSpacing: "-0.05em"
    textTransform: "uppercase"
  headline:
    fontFamily: "system serif"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: 1.375
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  title:
    fontFamily: "system sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0em"
    textTransform: "uppercase"
  body:
    fontFamily: "system serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.625
    letterSpacing: "0em"
  label:
    fontFamily: "system cursive"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0em"
    textTransform: "uppercase"
rounded:
  default: "0px"
  card: "2px"
  button: "2px"
  input: "0px"
  chip: "0px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.button}"
    padding: "8px"
    height: "40px"
  button-primary-hover:
    backgroundColor: "#A01028"
    textColor: "#FFFFFF"
    padding: "8px"
    height: "40px"
  button-primary-disabled:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    padding: "8px"
    height: "40px"
  card:
    backgroundColor: "#F5F0E1"
    rounded: "{rounded.card}"
    padding: "16px"
  nav-link:
    textColor: "{colors.primary}"
    padding: "8px"
    height: "40px"
  nav-link-active:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    padding: "8px"
    height: "40px"
  input:
    backgroundColor: "#FFFFFF"
    rounded: "{rounded.input}"
    padding: "8px"
  input-focus:
    backgroundColor: "#FFFFFF"
    rounded: "{rounded.input}"
    padding: "8px"
  decorative-frame:
    backgroundColor: "#F5F0E1"
    padding: "8px"
  ribbon-banner:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    padding: "8px"
    height: "40px"
  year-stamp:
    backgroundColor: "#F5F0E1"
    textColor: "#3E2723"
    padding: "4px"
    width: "48px"
    height: "24px"
  motif-badge:
    backgroundColor: "{colors.tertiary}"
    textColor: "#3E2723"
    padding: "4px"
    width: "24px"
    height: "24px"
provenance:
  coverage_status: "minimal"
  identity_description: ""
  manual_enrichment_required: true
  imagery_count: 2
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: null
    typography_map: "entries:113"
  sources:
    - host: "www.youtube.com"
      count: 1
    - host: "www.mexicancraft.com"
      count: 1
  imagery_urls:
    - url: "https://www.youtube.com/watch?v=3l9s4f6b_2A"
      host: "www.youtube.com"
      institution: "YouTube"
      confidence_original: low
    - url: "https://www.mexicancraft.com/mexican-signs"
      host: "www.mexicancraft.com"
      institution: "mexicancraft.com"
      confidence_original: low
  typefaces_attested:
    []
  flags:
    - "few_usable_urls"
    - "no_typography_extracted"
    - "no_colour_extracted"
    - "4_robots_disallowed_urls"
  honest_gaps:
    []
---
# Design System: Mexican Rótulo

## 0. Taxonomy & Identity

- entity-type: interface / system / environment [unanimous]
- artefact-family: CONTESTED:§0.artefact-family — providers split: [operating system / software UI] ×3, [signage / wayfinding] ×3; no majority; re-stack required
- technique: digital raster [majority, 5/6]
- movement-lineage: vernacular commercial style [unanimous]
- era: CONTESTED:§0.era — providers split: [postwar] ×3, [1960s–1970s counterculture] ×3; no majority; re-stack required
- geography: latin america [majority, 4/6]
- domain: retail / CPG [unanimous]
- formal-traits: ornamental, dense, tactile, expressive, graphic [majority consensus on common terms]
- color-logic: saturated [majority, 4/6]
- typography-mode: display type [majority, 5/6]
- texture: weathered, grainy [majority, 5/6 for each]
- function: persuade [unanimous]
- provenance: revival / homage [unanimous]

## 1. Overview

Mexican Rótulo channels the hand‑painted storefront and street‑sign tradition of Mexico — bold, vernacular, and unapologetically decorative. The style draws from family‑owned shop signs, bustling market stalls, and street‑corner workshops, prioritizing vibrant energy, hand‑crafted warmth, and imperfect, tactile character over sterile precision.

**Emotional tone:** Energetic, warm, festive, and humble. It feels lived‑in and sincere.

**Era / lineage:** Mid‑20th century to present, rooted in Mexican vernacular commercial sign painting.

**Density:** Maximal — every inch is filled with lettering, borders, motifs, or texture.

**Core rendering philosophy:** Simulate hand‑painted enamel on weathered surfaces. Letters have visible brushstroke texture, uneven fill, slight wobble. Heavy drop shadows (crisp, no blur) offset down‑right. Thick contrasting outlines (casquillo) frame characters. Decorative borders (double line, dashed, scalloped, stepped) run inside the composition edge.

**What makes it recognizable:** Fat Tuscan serifs, multiple lettering styles in one composition, high‑saturation synthetic enamel hues, heavy shadows, thick outlines, visible substrate texture (wood grain, stucco, metal), and decorative cultural motifs (chili, flower, star, sun).

**What would break it:** Perfect alignment, clean sans‑serif, gradients, pure black, neutral grays, abundant white space, or any digital perfection.

## 2. Constants

- Light Mode: primary [unanimous]
- Dark Mode: CONTESTED:§2.dark_mode — providers split: [no] ×3, [variant] ×3; no majority; re‑stack required
- Responsive: yes [unanimous] — at 375px font sizes reduce and decorative borders simplify; at 768px padding increases and full ornamentation returns
- States: Default, Active, Disabled [majority]; Hover/Focus handled via colour shift, not opacity
- surface-simulation: paper — simulates hand‑painted enamel on a weathered paper or wood‑grain substrate; drives page‑level grain and texture overlay

## 2a — Interaction Model

hover-delta:        color-shift — hover swaps to a darker or secondary hue on interactive elements; no opacity change, no movement
active-delta:       offset-shift — shadow offset reduces by 1–2px on press, giving a slight depress effect
focus-style:        color-border — border colour shifts to accent (or a brightened primary) with a 2px solid line
transition-duration:0ms — all state changes instantaneous; no easing
transition-easing:  none
exempt-animations:  none — no keyframe animations exist that must survive a 0ms override

## 3. Colors

All colours are flat and opaque. No gradients.

| Role | Hex | Descriptive Name | Tag |
|------|-----|------------------|-----|
| primary | `#DC143C` | Crimson | [conventional] |
| on‑primary | `#FFFFFF` | White | [conventional] |
| secondary | CONTESTED:§2.hex_secondary — providers gave: [#0047AB, #0066FF, #007FFF, #0047AB, #00897B, #1E90FF]; no majority; re‑stack required |  |  |
| on‑secondary | `#FFFFFF` | White | [conventional] |
| tertiary | `#FFD700` | Sunflower Yellow | [conventional] |
| on‑tertiary | `#3E2723` | Dark Brown | [conventional] |
| neutral | CONTESTED:§2.hex_neutral — providers gave: [#2C2C2C, #2C2C2C, #2F2F2F, #1A1A1A, #3E2723, #2B2B2B]; no majority; re‑stack required |  |  |
| surface | CONTESTED:§2.hex_surface — providers gave: [#F5F0E1, #F5F5DC, #F5F0E6, #F5F5DC, #FFFEF5, #FDFBF7]; no majority; re‑stack required |  |  |
| outline | CONTESTED:§2.hex_outline — providers gave: [#4A3728, #FFFFFF, #3E2723, #CCCCCC, #FFFEF5, #2B2B2B]; no majority; re‑stack required |  |  |
| accent | CONTESTED:§2.hex_accent — providers gave: [#FF007F, #50C878, #FF69B4, #E91E63, <missing>]; no majority; re‑stack required |  |  |
| faded | CONTESTED:§2.hex_faded — providers gave: [#D4A59A, #C08080, #C08080, <missing>, <missing>, <missing>]; insufficient evidence; re‑stack required |  |  |

All hex values are [unverified] unless tagged otherwise.

## 4. Typography

No provider cited a foundry or year for any typeface name. Per Typeface Adjudication Rule, all §3 typeface fields receive gap markers.

- primary_typeface: CONTESTED:§3.primary_typeface — providers gave: [Alfa Slab One, Rótulo Hand‑Painted/Playfair Display Black/Acme, Buena Park/Frijol/Tuscan, Brush Script MT/Caveat, Veracruz, Londrina Solid]; none cited foundry; re‑stack required
- secondary_typeface: CONTESTED:§3.secondary_typeface — providers gave: [Caveat Brush, Playfair Display Bold/ Abril Fatface, Cactus/Mexicana, Impact/Anton, Rótulo Serif/Bookmania, Kaushan Script]; none cited foundry; re‑stack required
- google_fonts_substitute: CONTESTED:§3.google_fonts_substitute — providers gave: [Alfa Slab One, Caveat Brush, Oswand, Playfair Display, Kaushan Script / Playfair Display Black, Acme, April Fatface, Josefin Sans, Permanent Marker, Caveat, Indie Flower / Buena Park, Frijol, Tuscan, Cactus, Mexicana, Josefin Sans, Nanum Pen Script, Bebas Neue / Caveat, Anton, Bangers, Space Mono / Veracruz, Bookmania, Lobster, Oswand / Londrina Solid, Kaushan Script, Lilita One, Crimson Text, Patrick Hand SC]; no consensus; all without foundry citation; re‑stack required

**Role‑based typographic defaults (fallbacks only):**

- display: system serif fallback; font-size text-5xl to text-6xl; font-black; leading-tight; tracking-tighter; uppercase
- headline: system serif fallback; text-3xl to text-4xl; font-bold; leading-snug; tracking-tight; uppercase
- title: system sans‑serif fallback; text-2xl; font-semibold; leading-normal; tracking-normal; uppercase
- body: system serif fallback; text-base; font-medium; leading-relaxed; tracking-normal; normal-case
- label: system cursive fallback; text-sm; font-normal; leading-none; tracking-normal; uppercase

All lettering must simulate hand‑painted irregularity — no digital perfection. Hard drop shadows and casquillo outlines are applied via CSS text‑shadow and text‑stroke where available.

## 5. Elevation

Flat depth model with crisp, blur‑free drop shadows offset down‑right.

- shadow‑heavy: shadow offset 4–6px, colour dark brown or charcoal [majority on characteristic, specific pixel values contested]
- shadow‑medium: offset 2–4px, same colour family
- shadow‑light: offset 1–2px, lighter opacity

No blur, no spread. Shadows are applied to text via `text-shadow` and to containers via `box-shadow`.

## 6. Spacing & Sizing

- padding: component‑internal p‑2 to p‑4; section‑internal p‑4 to p‑6; page‑edge p‑4 to p‑8 [majority on tight spacing, specific values vary]
- margin: between‑components gap‑1 to gap‑2; between‑sections gap‑4 to gap‑6 [tight stacking preferred]
- component‑heights: sm h‑8, md h‑10, lg h‑12 [majority consensus]
- icon‑size: w‑6 h‑6 [unanimous]
- avatar‑size: w‑10 h‑10 [majority]

## 7. Borders

- border‑radius: default `rounded-none` [unanimous]; cards and buttons may use `rounded-sm` [minority]
- border‑width: default `border‑2`; emphasis `border‑4` [unanimous]
- border‑style: `border‑solid` [unanimous]; decorative double‑line or scalloped borders implemented via CSS `box‑shadow` or `outline` + `outline‑offset` — no Tailwind native equivalent

## 8. Opacity

- disabled‑state: `opacity‑50` [unanimous]
- ghost/secondary: `opacity‑70` to `opacity‑80` [majority]
- overlay/scrim: `opacity‑60` to `opacity‑85` [majority]
- hover‑feedback: not via opacity — use colour shift or shadow offset change [majority]

## 8.5. Visual Effects

### 8.5.0 — Physical Material Model

material-model:    paper

global-filter:     none — colour and contrast come from paint saturation alone

global-overlay:    Grain noise via SVG feTurbulence (baseFrequency 0.4–0.8, numOctaves 2–4, fractalNoise)
                   applied as body::after pseudo-element, blend: multiply, opacity 0.15,
                   pointer-events:none, position:fixed, z-index:9999
                   (parameters match those in §8.5d)

rendering-flags:
  font-smoothing:  antialiased
  image-rendering: auto
  text-rendering:  auto

### 8.5d — Texture & Noise Simulation

**grain‑noise (stucco / wood grain)**
- technique: SVG feTurbulence
- parameters: baseFrequency 0.4–0.8; numOctaves 2–4; type fractalNoise
- surface: full‑page canvas, card fills
- intensity: moderate; blend: overlay or multiply, opacity 0.1–0.2
- colour: monochrome tinted to palette
- animation: none
- tailwind‑approximation: no native equivalent

**chalkiness / weathering (optional)**
- technique: CSS pseudo‑element with white/transparent gradient or data‑URI tile
- surface: top edges of cards, painted fills
- intensity: subtle; blend: screen or overlay, opacity 0.1–0.15
- colour: white or dusty rose
- animation: none

## 9. Components

### Icon Vocabulary

- system: custom hand‑drawn glyphs — chili, cactus, star, sun, marigold, rooster; no standard UI libraries
- size: w‑6 h‑6 (inline), w‑10 h‑10 (standalone)
- colour: inherits `currentColor` or uses tertiary/accent
- treatment: flat opaque fill; optional hard 1‑px outline; no filter, no glow

### Image & Media Treatment

- aspect‑ratio: `aspect‑square` for cartouche images; otherwise free
- object‑fit: `object‑cover`
- filter: none (optional slight desaturation for weathering)
- overlay: grain texture on container, not on media
- border: `border‑2` outline colour; rounded‑none

### Buttons

- Primary: `bg‑primary`, `text‑on‑primary`, `border‑2` outline; hard shadow; hover uses colour swap (darken primary or shift to secondary); active shadow offset reduced; disabled opacity‑50

### Cards / Panels

- fill: surface colour (contested) with grain overlay; `border‑2` outline; hard shadow; internal centering; optional decorative double‑line border via pseudo‑elements

### Navigation

- horizontal bar; links uppercase condensed (label style); active state: background primary, text on‑primary; no underline; decorative rule separator

### Inputs / Forms

- rounded‑none; `border‑2` outline; label above in label typography; focus: ring‑2 with primary or accent colour

### Style‑Native Primitives

1. **Decorative Frame** — double‑ or triple‑line border inset from edge, corner motifs (star, dot)
2. **Ribbon / Banner** — clip‑path polygon angled ends; primary background; hard shadow
3. **Year Stamp** — small rotated serif numerals in neutral colour, thin outline
4. **Motif Badge** — filled star or chili with outline; tertiary or accent fill

## 10. Layout

- **Spacing cadence:** tight — components often touch or overlap; small gaps (gap‑1 to gap‑2)
- **Grid tendency:** single‑column, centered; no multi‑column grids in core composition
- **Density:** maximal — avoid empty space; use decorative borders, motifs, secondary text
- **Section separation:** thick decorative rules (double, dashed, scalloped) between sections
- **Alignment:** centre all text and elements; left/right only for hand‑painted asymmetrical placement
- **Breakpoint behaviour:**
  - 375px: font sizes reduce (display → text‑3xl), decorative borders simplify, motifs scale down
  - 768px: restore full ornamentation, increase padding, allow two‑column card arrangement
- **Motion:** all state changes instantaneous, no transitions, no animations [majority; some providers suggest minimal entrance animations]

## 11. Design System Notes

### 11a. Use Constraints

**Appropriate contexts:** Vibrant, casual, festive, or heritage‑driven UI: restaurant menus, product splash screens, digital posters, brand landing pages for Latin American products, event ads, indie game HUDs.

**Wrong contexts:** Corporate finance, medical, sterile admin dashboards, formal documentation, luxury minimalism, or any interface requiring high readability and low visual noise.

### 11b. Prompt Phrases

1. "hand‑painted lettering with heavy drop shadow and thick casquillo outline"
2. "saturated enamel hues on weathered primer background"
3. "decorative double‑line border with misaligned miter corners"
4. "mix fat Tuscan serif, brush script, and condensed sans in a single composition"
5. "central headline in display typography, uppercase, with inline cutout"
6. "faux wood grain texture applied as multiply overlay"
7. "sun‑faded colors with chalky, uneven paint opacity"
8. "small hand‑drawn chili or star motif as corner decoration"

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description.

rule: Thick outlines (casquillo) and heavy crisp shadows are essential for the rotulo look.
do:   Use a 2–4px solid outline in a contrasting colour (often dark brown or charcoal) around all lettering, and a hard drop shadow offset 4–6px down‑right with no blur.
avoid:Do not use thin lines, blurred shadows, or remove the outline entirely — the lettering will lose its hand‑painted weight.

rule: Multiple lettering styles must coexist in a single composition.
do:   Mix at least two different typefaces: one fat Tuscan serif for the main headline, one brush script or condensed sans for secondary text, both uppercase.
avoid:Do not rely on a single typeface throughout; that produces a uniform, un‑vernacular look.

rule: Decorative borders are mandatory inside the composition edge.
do:   Include a double‑line, dashed, or scalloped border inset 4–8px from the container edge, often using the outline colour.
avoid:Do not leave the composition edge bare — without a decorative border the surface reads as a clean UI card, not a painted sign.

rule: Visible substrate texture is required on all background fills.
do:   Apply a grain‑noise overlay (SVG feTurbulence, multiply blend, opacity 0.1–0.2) simulating stucco or wood grain over every solid colour fill.
avoid:Do not keep backgrounds perfectly flat — this removes the tactile, weathered foundation of the style.

rule: Use high‑saturation flat colours exclusively.
do:   Select saturated enamel hues such as crimson (#DC143C), sunflower yellow (#FFD700), and cobalt blue (#0047AB) with opaque, full‑fills — no transparency.
avoid:Do not use gradients, pure black, neutral grays, or any muted or pastel tones; those read as modern digital design.

rule: Centre all text and allow letters to touch or overlap.
do:   Set every text element to text-align: center; let character bounding boxes occasionally overlap by 1–2px (e.g., “RÓTULO” with the ‘Ó’ crossing into the ‘T’).
avoid:Do not left‑ or right‑align text, and do not enforce generous letter‑spacing that separates characters.

rule: Include a small cultural motif as a decorative accent.
do:   Place one hand‑drawn motif (chili, star, flower, sun, rooster) in a corner of the frame or as a divider between text blocks.
avoid:Do not omit the motif — a composition without a cultural icon feels generic and loses its Latin American identity.

rule: Apply light wear and weathering to suggest age.
do:   Simulate chipped paint along top edges (white/transparent gradient at opacity 0.15), a slight fade towards the top of the composition, and a subtle vignette at the corners.
avoid:Do not render everything perfectly crisp and pristine — the style is built on the character of imperfect, aged surfaces.

### 11d. Variation Bounds

| Axis | Range | Direction |
|------|-------|-----------|
| clean ↔ weathered | Fresh bright paint ↔ sun‑faded, chipped, dust‑aged | Lower values = crisp colors, intact borders; higher = worn, faded, dark corners |
| sparse ↔ ornate | Minimal text‑only ↔ full filigree, cartouche, flourishes | Lower = one headline, one border; higher = multiple borders, ribbons, motifs |
| traditional ↔ remix | Earthy red/green/white palette ↔ neon 90s pink/cyan/purple | Traditional uses primary, secondary, tertiary; remix swaps in accent, fluorescent hues |
| flat ↔ textured | Solid color blocks ↔ visible brush strokes, wall texture, drips | Lower = flat fills only; higher = grain overlay, chalk overlay, paint drips |
| authentic ↔ hybrid | Pure rotulo ↔ cross with Chicano script, Day of the Dead sugar skulls, neon outlines | Authentic stays within Mexico’s rotulo tradition; hybrid borrows from adjacent Latinx styles |

### 11e. Compositional Signatures

### 11e.i — At Rest
A single central headline in fat Tuscan serif (display role, text-5xl, uppercase, font-black, tracking-tighter) in primary crimson (#DC143C) with a 3px charcoal outline and a hard drop shadow offset 5px down‑right in dark brown (#3E2723). The background is the surface colour (contested, e.g. #F5F0E1) with full‑page grain noise overlay at multiply opacity 0.15. A double‑line decorative border (2px outer, 1px inner) runs 6px inside the container edge, coloured outline (contested, e.g. #4A3728). One small star motif in tertiary yellow (#FFD700) sits in the top‑right corner. No other elements. Everything centre‑aligned.

### 11e.ii — Maximum Expressiveness
Three stacked text zones: top ribbon in brush script (label style, text-2xl, “PRODUCTO MEXICANO”) in secondary blue (#0047AB) with white shadow offset 2px, middle zone featuring the headline in fat Tuscan (text-6xl, “RÓTULO”) with a cutout inline effect (background shows through letter interiors), bottom zone with a condensed sans date “1952” in a year stamp (small rotated serif numerals). The decorative border is triple‑lined: thick outer, dashed middle, thin inner. Two motif badges (chili and rooster) flank the headline. A banner ribbon spans the composition width (clip‑path polygon ends, primary crimson fill, hard shadow). Grain noise is at maximum intensity (multiply 0.20) with an added chalky weathering gradient across the top edge. Elements overlap slightly: the ribbon overhangs the border, the year stamp sits partially inside the bottom border line.

### 11e.iii — Data Context
This style is not designed for dense data display, but when a single metric or status must be shown, it is treated as a decorative element. A metric value (e.g. “99%”) appears in the display typography (fat Tuscan, text-4xl, primary crimson with outline and shadow) inside a decorative frame. The label (e.g. “SATISFACCIÓN”) uses the label typography (cursive, text-sm, uppercase) in secondary blue above the value. A small status indicator is rendered as a motif badge: ok = green star, warn = yellow chili, err = red cross. No table rows, no progress bars, no multi‑column grid. The grain overlay remains at moderate intensity. If multiple data points are needed, they are stacked vertically with thick decorative rules between them. The composition remains centre‑aligned, maximal, and visually loud.

### 11f. Sources

This subject has minimal verified imagery. The visual claims below should be treated with caution.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** **Mexican Rótulo** refers to a vernacular sign-painting tradition that flourished primarily in 20th-century Mexico. No single designer or foundry is attributed to this style, as it evolved organically through anonymous craftspeople. The tradition is documented from the early 1900s through the present, though precise historical boundaries remain unspecified.

**Verified imagery sources.** 2 URLs verified against institutional servers, distributed across:
- YouTube — 1 URL(s)
- mexicancraft.com — 1 URL(s)

Key references include no institutional records currently identified. The coverage status is minimal, and no specific imagery sources have been cataloged for this entry.

**Named typefaces.** The typography of this style is attested as:
- (none attested)

**Honest gaps.** No documented gaps were recorded by the forensic pipeline. The most significant gap is the absence of a formal typographic attribution, which prevents classification within a standard typeface taxonomy. Without archival imagery or type specimen provenance, the tradition cannot be traced to a specific designer or foundry. Resolution would require ethnographic fieldwork to identify surviving workshop records and collect dated photographic samples of the signs themselves.
