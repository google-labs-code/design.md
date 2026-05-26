---
version: alpha
name: "Soviet Constructivist Sweet Wrapper (1920s–1930s)"
description: "This design system translates the raw, handmade energy of 1920s–1930s Soviet confectionery packaging into a structured but deliberately unpolished interface language, marrying constructivist geometry with misregistered printing artefacts."
colors:
  secondary: "#1A1A1A"
  on-secondary: "#F5F0E8"
  surface: "#F5F0E8"
  on-surface: "#1A1A1A"
  outline: "#1A1A1A"
typography:
  display:
    fontFamily: "Russo One, sans-serif"
    fontSize: "60px"
    fontWeight: 900
    lineHeight: 1.25
    letterSpacing: "-0.05em"
    textTransform: "uppercase"
  headline:
    fontFamily: "Staatliches, sans-serif"
    fontSize: "36px"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  title:
    fontFamily: "Oswald, sans-serif"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.375
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  body:
    fontFamily: "Inter Tight, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.625
    letterSpacing: "0em"
    textTransform: "normal-case"
  label:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1
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
  page-edge: "16px"
  gap-component: "8px"
  gap-section: "16px"
  height-sm: "32px"
  height-md: "40px"
  height-lg: "48px"
  icon: "20px"
components:
  button-primary:
    backgroundColor: "#D93A1E"
    textColor: "#F5F0E8"
    rounded: "{rounded.button}"
    padding: "8px"
    height: "40px"
  button-primary-hover:
    backgroundColor: "#1A1A1A"
    textColor: "#D93A1E"
    rounded: "{rounded.button}"
    padding: "8px"
    height: "40px"
  button-secondary:
    backgroundColor: "#F5F0E8"
    textColor: "#1A1A1A"
    rounded: "{rounded.button}"
    padding: "8px"
    height: "40px"
  card:
    backgroundColor: "#F5F0E8"
    rounded: "{rounded.card}"
    padding: "12px"
  input:
    backgroundColor: "#F5F0E8"
    rounded: "{rounded.input}"
    padding: "8px"
  input-focus:
    backgroundColor: "#F5F0E8"
    rounded: "{rounded.input}"
    padding: "8px"
  star-motif-badge:
    backgroundColor: "#D93A1E"
    size: "40px"
  gear-motif:
    size: "40px"
  wrapper-frame:
    backgroundColor: "#F5F0E8"
    padding: "16px"
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
    - host: "en.wikipedia.org"
      count: 1
    - host: "collections.vam.ac.uk"
      count: 1
  imagery_urls:
    - url: "https://en.wikipedia.org/wiki/Constructivism_(art)"
      host: "en.wikipedia.org"
      institution: "Wikipedia"
      confidence_original: medium
    - url: "https://collections.vam.ac.uk/search/?q=Soviet+graphic+design"
      host: "collections.vam.ac.uk"
      institution: "Victoria and Albert Museum"
      confidence_original: low
  typefaces_attested:
    []
  flags:
    - "few_usable_urls"
    - "no_typography_extracted"
    - "no_colour_extracted"
  honest_gaps:
    []
---
# Design System: Soviet Constructivist Sweet Wrapper (1920s–1930s)

## 0. Taxonomy & Identity

entity-type:        interface / system / environment
artefact-family:    operating system / software UI
technique:          digital raster
movement-lineage:   design movement
era:                interwar
geography:          eastern europe / soviet sphere
domain:             retail / CPG
formal-traits:      geometric, asymmetric, graphic, dense
color-logic:        spot-color
typography-mode:    display type
texture:            grainy, weathered, printed-register-shift
function:           persuade
provenance:         revival / homage

## 1. Overview

This design system translates the raw, handmade energy of 1920s–1930s Soviet confectionery packaging into a structured but deliberately unpolished interface language. It marries constructivist geometry—bold diagonals, heavy circles, red-black-white contrast—with the humble, misregistered printing artefacts of small-run wrapper production. The result is an interface that feels revolutionary, tactile, and slightly damaged by time: ink bleeds at the edges of solid shapes, paper grain shows through unprinted areas, and coloured plates never quite line up.

- **Emotional tone:** Raw, handmade, revolutionary optimism with gritty materiality. Earnest but imperfect. Propaganda energy filtered through everyday commerce.
- **Core rendering philosophy:** Flat solid fills, no shading, no gradients — only hatching for tonal variation. Imperfection is identity — misregistration, ink bleed, paper grain, uneven borders, and hand-drawn wonkiness are features.
- **Surface density:** Moderate to dense — empty space is active, not passive.
- **What makes it recognizable:** Diagonal typography at 30°–60°, asymmetric heavy weight in one corner, Cyrillic lettering as graphic element, thick double or broken borders, three-colour palette (red + black + paper), aggressive edge bleeding, star/gear/wheat motifs abstracted into pure geometry.
- **What would break it:** Digital smoothness, perfect alignment, more than three inks plus paper, photorealistic imagery, gradients, drop shadows, rounded corners, serifs, cool crimson reds.

## 2. Constants

Light Mode:   Primary — paper-tone background
Dark Mode:    Variant — invert to black field with white/cream text and red accents; paper grain carries over as white noise on dark
Responsive:   Yes — wrapper aspect ratio (2:3 or 3:4) is the atomic layout container; breakpoints at 375px (stack, shrink type) and 768px (allow side-by-side panels)
States:       Default, Active, Disabled, Hover, Focus
surface-simulation: paper — printed paper wrapper with ink and misregistration effects, simulating small-run confectionery packaging of the 1920s–1930s

## 2a — Interaction Model

hover-delta:        color-shift — border or text color shifts between black and red, depending on element; e.g., primary button fill inverts to black, text becomes red; outlines may appear as red misregistration ghost
active-delta:       bevel-depress — border-width increases (e.g., from border-2 to border-4 double-line), slight scale reduction (transform scale-95) simulating physical press; no true shadow, only structural change
focus-style:        color-border — border-4 red, no glow, no offset; a heavy red frame appears around focused input or button
transition-duration:0ms — authentic constructivist variant: instantaneous state changes; for remix variant, 150–300ms, but authentic sets 0ms
transition-easing:  none (instantaneous) for authentic; ease-out for remix
exempt-animations:  gear-spin, misregister-drift, star-pulse

## 3. Colors

A severely limited spot-color palette with no transparency except for simulated print artefacts. All hex values tagged with uncertainty.

### §3a — Core palette
- **primary** — CONTESTED:§2.hex_primary — providers gave [#D93A1E, #C63D2F, #C84C2B, #C8102E, #D84315]; all [unverified]; re-stack required
- **secondary** — #1A1A1A [inferred] — deep matte black for outlines, typography, solid shapes. Accepted by majority (4/5 providers).
- **surface** — #F5F0E8 [inferred] — warm cream paper for background and unprinted areas. Accepted by majority (3/5 providers).
- **accent (gold foil)** — CONTESTED:§2.hex_accent — providers gave [#C8964E, #C9A343, #D4A843, #C5A145]; all [unverified]; re-stack required. Used extremely sparingly on a single hero element.

### §3b — Tailwind role mapping (provisional, pending primary hex)
primary:                 CONTESTED — red fill for action surfaces, error states
on-primary:              CONTESTED — text on red
secondary:               #1A1A1A — structural framing, typography, outlines
on-secondary:            #F5F0E8 — text on black
surface:                 #F5F0E8 — page/component background
on-surface:              #1A1A1A — body text
surface-container:       #EDE4D6 [inferred from P1] — slightly darker paper for nested containers
outline:                 #1A1A1A — thick strokes, borders
outline-variant:         CONTESTED — varies between red and muted brown

error:                   same as primary — signaled structurally, not chromatically
on-error:                #F5F0E8

### §3c — Dark mode swap (when variant is active)
surface:                 #1A1A1A
on-surface:              #F5F0E8
primary-container:       dark variant (e.g., #2A1A12 from P1)
outline-variant:         dark variant (e.g., #4A3A2A from P1)
(Values inferred from P1 as most detailed; other providers give different swaps.)

## 4. Typography

All type is sans-serif, blocky, heavily weighted (extra bold / fat face), condensed, with tight tracking. No italics, no serifs, no decorative flourishes. Cyrillic characters have a manual, cut-paper or wood-type feel. At least one line of type runs at 30°–60° relative to horizontal.

### display
font-family:      CONTESTED:§3.primary_typeface — providers gave [Stenberg/Rodchenko lettering, Futura Black, Constructivist display sans, Futura Condensed, Russo One]; none cited foundry; re-stack required
Google Fonts substitute: "Russo One", sans-serif [majority: 4/5 providers]
font-size:        text-5xl / text-6xl / text-7xl
font-weight:      font-black
line-height:      leading-tight
letter-spacing:   tracking-tighter
text-transform:   uppercase
notes:            Frequently rotated 30°–60°. Cyrillic characters preferred. Edges not perfectly straight.

### headline
font-family:      CONTESTED:§3.secondary_typeface
Google Fonts substitute: CONTESTED — providers gave [Staatliches, Russo One, Oswald, Roboto Condensed]; no consensus
font-size:        text-3xl / text-4xl
font-weight:      font-extrabold
line-height:      leading-tight
letter-spacing:   tracking-tight
text-transform:   uppercase
notes:            Blocky, compressed, wood-type feel. May be rotated alongside display type.

### title
font-family:      Condensed geometric sans (unattributed)
Google Fonts substitute: CONTESTED — providers gave [Bebas Neue, Oswald, Roboto Condensed, Russo One]; no majority
font-size:        text-xl / text-2xl
font-weight:      font-bold
line-height:      leading-snug
letter-spacing:   tracking-tight
text-transform:   uppercase

### body
font-family:      Geometric sans-serif, condensed (unattributed)
Google Fonts substitute: CONTESTED — providers gave [Inter Tight, Oswald, Roboto Condensed, Jost]; no majority
font-size:        text-sm / text-base
font-weight:      font-medium
line-height:      leading-relaxed
letter-spacing:   tracking-normal
text-transform:   normal-case (exception: where space is tight, may be uppercase)
notes:            Limited use — wrappers carry minimal body text. Still blocky and condensed.

### label
font-family:      Condensed geometric sans (unattributed)
Google Fonts substitute: CONTESTED — providers gave [DM Sans, Oswald, Courier New, Staatliches]; no majority
font-size:        text-xs
font-weight:      font-bold
line-height:      leading-none
letter-spacing:   tracking-wider
text-transform:   uppercase
notes:            Small, dense, often misaligned. Used for price, weight, lot number, factory code.

## 5. Elevation

Flat depth model — no shadow hierarchy.

All surfaces exist on a single plane. No drop shadows, no box shadows, no raised elements.
Depth is simulated through thick outlines, color offsets, and misregistration offset (see §8.5d).

stacking (z-index for functional layering only):
  base-content:    z-0
  overlays:        z-40 (solid fill, no translucency)
  modals:          z-50 (solid fill, no translucency)

## 6. Spacing & Sizing

padding:
  component-internal:  p-2 / p-3
  section-internal:    p-4
  page-edge:           p-4 (can bleed at 768px+)

margin:
  between-components:  gap-2
  between-sections:    gap-4 / gap-6 (use thick rule or diagonal divider as separator)

component-heights:
  sm:   h-8
  md:   h-10  (default interactive target)
  lg:   h-12

icon-size:       w-5 h-5
avatar-size:     not style-relevant (if used, w-8 h-8, silhouette only)

## 7. Borders

border-radius:
  default:     rounded-none — all corners sharp, rectangular
  card:        rounded-none
  button:      rounded-none
  input:       rounded-none
  chip/badge:  rounded-none

border-width:
  default:     border-2 — thick, assertive stroke
  emphasis:    border-4 — heavy frames, structural containers, active state outlines
  heavy:       border-8 — outer wrapper borders (conditional)

border-style:
  default:     border-solid — standard structural borders
  decorative:  border-double — thick framing borders, wrapper edge repeats
  broken:      border-dashed — crude woodblock-print effect, distressed lines (use sparingly)

border-image:  Conditional — double-line rectilinear frames with inner gap. No Tailwind native equivalent; implement via nested elements.
clip-path:     Conditional — for diagonal-trimmed panels (e.g., polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)). No Tailwind native equivalent.

## 8. Opacity

disabled-state:     opacity-50 — retains shape but visibly faded
ghost/secondary:    not used (all opaque) — optional opacity-70 for less prominent decorative elements
overlay/scrim:      opacity-75 to opacity-90 — black overlay for modal backdrops (use solid fill where possible)
hover-feedback:     not expressed through opacity — uses structural changes (border-width, color inversion)

selection:
  background:  primary (contested red) — solid, no translucency
  color:       #F5F0E8 (cream)

scrollbar:
  style:       styled
  width:       thin (6px)
  track:       #EDE4D6 (surface-container)
  thumb:       #1A1A1A (solid black)
  thumb-hover: primary (contested red)

## 8.5. Visual Effects

### 8.5.0 — Physical Material Model

material-model:    paper — printed paper wrapper with ink layers

global-filter:     none — paper texture and artefacts are applied via compositing, not a body filter

global-overlay:    none — paper grain, misregistration, ink bleed are applied per surface using CSS backgrounds and layered elements, not a full-page overlay; however, body may carry a slight warm tint: background-color: #F5F0E8

rendering-flags:
  font-smoothing:  antialiased — text edges are slightly irregular but not pixelated; the hand-drawn quality is in the glyph design, not the rendering
  image-rendering: auto
  text-rendering:  auto

**Context:** This style's surface identity is inseparable from paper texture and printing artefacts. Effects appear on all component surfaces unless noted.

**Compositing stack (full-page canvas):** Base paper fill → paper grain (overlay, opacity-15) → ink bleed offset on red shapes → halftone on any gray/ochre fill

**Dark mode inheritance:** Paper grain shifts to white noise on black fill; ink bleed effect inverts to "light bleed"; halftone inverts to white dots on dark.

### 8.5d — Texture & Noise Simulation

**Paper grain:**
technique:    SVG feTurbulence noise tile, applied as CSS background
parameters:   baseFrequency="0.65" numOctaves="3" type="fractalNoise"
surface:      Full-page canvas, card fills, gradient overlays — every surface
intensity:    Moderate (barely perceptible on first glance, visible on close inspection)
blend:        mix-blend-mode: overlay; opacity-15
color:        Monochrome noise
animation:    None
tailwind-approximation:  No Tailwind native equivalent

**Misregistration offset:**
technique:    Duplicated red fill layer shifted 1–3px from black counterpart,
              with subtle blur on red layer edges to simulate feathering
parameters:   offset { x: -1px, y: 1px } or similar; blur radius 0.5px–1px on red layer
surface:      Primary red fills — buttons, badges, star/gear motifs, accent areas
intensity:    Moderate — clearly visible but not chaotic (1–3px)
blend:        Normal; red layer sits beneath black outline layer
color:        Red (contested value) only — offset layer is the red plate
animation:    None
tailwind-approximation:  No Tailwind native equivalent; implement via layered <div> with CSS transform

**Ink bleed:**
technique:    SVG feMorphology dilate + feGaussianBlur on solid edges
parameters:   dilate radius 1–2px, blur radius 1px
surface:      Large solid fills (primary button, hero shape, heavy black panel)
intensity:    Moderate — visible as soft feathering along shape perimeter
blend:        multiply, opacity-15 to darken paper edge
color:        Same as fill color
animation:    None
tailwind-approximation:  No Tailwind native equivalent; requires SVG filter

**Halftone screen:**
technique:    Radial-gradient repeating dot pattern at low resolution
parameters:   background-image with repeating radial circles ~4px diameter, spacing ~6px centres, at 45° angle
surface:      Any gray, ochre, or second-colour fill area (if accent used)
intensity:    Barely perceptible to moderate
blend:        mix-blend-mode: multiply; opacity-20 to opacity-40
color:        Tinted to fill colour
animation:    None
tailwind-approximation:  No Tailwind native equivalent

## 9. Components

**Icon vocabulary:**
system:       Custom glyphs — hand-drawn quality (stars, gears, wheat sheaves, arrows, hammers, sickles). Never stock icons.
size:         w-5 h-5 (primary); w-4 h-4 (secondary)
color:        Inherits currentColor — typically black (#1A1A1A) or red (contested)
treatment:    No filter, no glow, no animation — purely flat, opaque. Strokes slightly irregular.
restrictions: No photorealistic detail, no human facial features, no gradients.
motifs:       Five-pointed star (unequal points, hand-drawn), gear/cog (simplified outline, 6–8 teeth),
              arrow/wedge (directional, aggressive angle), hammer/sickle (abstracted),
              chevron/zigzag (repeating fill pattern), wheat sheaf (parallel strokes)

**Image & media treatment:**
aspect-ratio:  aspect-[2/3] or aspect-[3/4] — wrapper proportion as container
object-fit:    object-cover
filter:        None (full fidelity); apply paper grain overlay from §8.5d
overlay:       Black or red geometric frame; no gradient scrim
border:        Thick black border (border-2) on image containers
dark-mode:     Increase brightness 20% to compensate for dark surround

### Buttons

**Primary:**
- Fill: primary (contested red), no gradient
- Border: border-2 black solid; includes red misregistration ghost on hover/active (translate 2px, -1px)
- Type: label role, uppercase, tracking-wider, color on-primary (contested: black or cream? Use #F5F0E8 [inferred from P1])
- Border-radius: rounded-none
- Hover: fill inverts to black, text becomes red, border becomes red
- Active: border-width increases to border-4 double-line; slight scale reduction (transform scale-95)
- Disabled: opacity-50, no hover effect

**Secondary / Outline:**
- Fill: transparent (paper background)
- Border: border-2 black solid, with faint red misregistration line inside
- Text: label, color #1A1A1A (black) or red for emphasis
- Hover: fill black, text red, border red
- Active: same as primary

### Cards / Panels
- Fill: #F5F0E8 (paper) with paper grain overlay
- Border: border-2 black solid; optional red offset line inside (misregistration)
- Border-radius: rounded-none
- Internal: p-3 padding; heavy geometric rules as section dividers
- Title: rotated -2° to -4°, uppercase, font-bold, color #1A1A1A
- Variants: red-filled card for hero/featured content
- Effect: paper grain and misregistration offset on red card variant

### Navigation
- Alignment: Left-anchored or diagonal (30° slanted nav bar)
- Active state: heavy black underline (border-b-4) with slight vertical offset; text colour switches to black; icon becomes red
- Inactive: text colour red or black outline only
- Divider: thick black rule (border-t-2 or border-l-2) between items
- Icons: w-5 h-5, colour matches text; active becomes thicker with red ghost

### Inputs / Forms
- Border: border-2 black solid, no rounding
- Fill: paper tone (#F5F0E8)
- Label: label role, uppercase, left-aligned above input
- Focus: border-4 red, no glow, no offset — just a heavier red frame
- Placeholder: #1A1A1A at opacity-40, no italic
- Error: border shifts to dashed, red; error message rotated 15° below
- Disabled: opacity-50, border-dashed
- Checkbox: square (rounded-none), border-2 black; checked: red fill with black star icon

### Style-native primitives

**Wrapper Frame:**
A full-bleed rectangular container simulating the outer wrapper edge. Border-4 black double-line, interior padding p-4. Contains asymmetrical composition: large rotated title (30°–45°), heavy geometric corner block, small seal area with dot. Background: paper grain, ink bleed on double line.

**Star Motif Badge:**
Hand-drawn five-pointed star with intentionally unequal points and irregular angles. Fill: red (contested) with black outline (border-2). Size: w-10 h-10 (badge), w-16 h-16 (hero). Placed near an edge, often bleeding off. One per surface maximum.

**Gear Motif:**
Simplified cog outline — 6–8 teeth, thick black strokes, no interior detail. Used as decorative frame or loading indicator (rotate 360° over 8s, steps(12) timing for stuttered gear movement). Size: w-10 h-10 to w-16 h-16.

**Diagonal Stripe Divider:**
Chevron/zigzag pattern from repeating linear-gradient at 45° with 4px stripe + 4px gap. Colours: black on paper or red on paper.

**Heavy Frame Border (Wrapper Edge):**
Double-line border: inner border-4 black, outer border-4 red, 4px gap (paper shows through). May be broken on one side to simulate torn wrapper.

## 10. Layout

- **Spacing cadence:** Tight and compact. Components separated by thick rules rather than generous white space.
- **Grid tendency:** Asymmetric with dominant diagonal axis. Horizontal grid deliberately broken.
- **Density:** Variable — from one massive central motif to dense pattern fill.
- **Section separation:** Diagonal cuts (clip-path), heavy frame borders, thick double-ruled lines. Never whitespace alone.
- **Alignment philosophy:** Intentionally fractured. Heavy weight in one quadrant, opposite side sparse. Elements bleed off edges.
- **Breakpoint behavior:**
  - <375px: Single wrapper, full width, 3:4 proportion. Type scales down one step. Rotations reduce to 5°–15°.
  - 375–767px: Single wrapper centred, max-w-sm. Type at full display scale. Bleed edges visible as overhang.
  - ≥768px: Grid of 2–4 wrappers in a row, 2:3 proportion. Diagonal composition stable. More dense patterns activate.

**Motion:**
motion:
  transition-duration:
    0ms for authentic variant (instantaneous); 150–300ms for remix variant
    hover: 75ms (border-width toggles, fill swaps)
    active: 150ms
    panel open/close: 300ms

  transition-timing-function:
    steps(1) for binary state changes; ease-out for decorative transitions

  animation:
    gear-spin:            0→360deg over 8000ms steps(12) linear — looping (industrial feel)
    misregister-drift:    translateX(0)↔translateX(2px) over 4000ms ease-in-out alternate — looping
    star-pulse:           scale(1)↔scale(1.08) over 2000ms ease-in-out alternate — looping

  transform-at-rest:
    Cards: rotate(-1deg); headlines: rotate(-3deg to -5deg); all other elements at none

  transform-on-interact:
    button-hover:         scale(1.02) over 75ms ease-out
    card-hover:           rotate(0deg) scale(1.02) over 150ms ease-out
    active-press:         scale(0.97) over 75ms steps(1)

## 11. Design System Notes

### 11a. Use Constraints
This system is appropriate for culturally-aware retail interfaces (confectionery, spirits, tobacco, pantry goods), museum and archival exhibitions on early Soviet or constructivist history, branding for theatres, galleries, or leftist bookstores, and promotional microsites where nostalgia and revolutionary grit serve the product narrative.

It is wrong for corporate dashboards, medical or laboratory interfaces, financial services, government portals, healthcare applications, or any context demanding clarity, precision, accessibility at scale, or real-time data fidelity. The deliberate misregistration and low contrast of red text on black fields fails WCAG AA.

### 11b. Prompt Phrases
1. Three-colour palette plus paper tone: warm vermilion red (contested), deep matte black, cream paper, gold foil only as a single sparing accent.
2. Cyrillic lettering used as a graphic element — even a single "CCCP" wordmark or abstracted character.
3. Every layout has a dominant diagonal anchor — type, frame, or shape set at 30°–60° breaking the horizontal grid.
4. Misregistration: the red plate never quite lines up with the black — offset by 1–3px on fills and outlines.
5. Paper grain texture on every surface — SVG feTurbulence noise at moderate intensity, blend-mode overlay.
6. Hand-drawn quality in all geometry — stars have unequal points, circles are slightly wonky, edges are not perfectly straight.
7. Thick black outlines (border-2 minimum) and heavy geometric frames — no rounded corners anywhere.
8. Asymmetric weight: one corner or edge carries the visual mass; the opposite side breathes.

### 11c. Do / Avoid

rule: The palette is strictly three colors (warm vermilion red, matte black, cream paper) with gold foil only as a single sparing accent. No cool crimson, pure white, or extra colors.
do: Use warm vermilion red (contested hex, #D93A1E range), matte black (#1A1A1A), cream paper (#F5F0E8) for fills, text, borders. Gold foil (#C8964E range) limited to one central hero element.
avoid: Using pure white (#FFFFFF) for backgrounds, cool crimson, or adding a blue or green as a functional color; gold foil used in multiple places.

rule: Every composition must break the horizontal with a dominant diagonal axis; symmetry is forbidden.
do: Rotate a major typographic element 30°–45°, place heavy visual weight in one quadrant, let elements bleed off edges; use asymmetric diagonal dividers.
avoid: Centered, balanced layouts where all elements align to a central vertical axis; no rotated type.

rule: All geometry must feel hand-drawn, with intentionally irregular lines, unequal points on stars, and slightly misregistered red plates.
do: Apply a 1–3px offset to the red fill layer relative to its black outline; stars have visibly unequal points; circles are slightly eccentric.
avoid: Perfectly smooth, symmetrical vectors with even stroke widths and precise 90° angles; alignment grids snapping everything into place.

rule: Surfaces are never raised; depth is communicated by thick black outlines and misregistration, never by shadows.
do: Use border-2 to border-4 solid black borders on containers, buttons; red misregistration ghost as a secondary line; no box-shadow.
avoid: Drop shadows, box shadows, or any shadow property; elevation conveyed via z-index stacking alone.

rule: Typography is exclusively blocky, condensed, geometric sans-serif, all uppercase, with tight tracking; no serifs, italics, or decorative script.
do: Apply display type (Russo One substitute) in uppercase, tracking-tighter, font-black; body in condensed geometric sans, uppercase when space is tight.
avoid: Using a serif face, light weight, normal or wide tracking, sentence case, or any font with decorative flourishes.

rule: Every surface carries paper grain; the material feel is integral to the identity.
do: Overlay SVG feTurbulence noise at moderate intensity, blend-mode: overlay, opacity-15, on all card, panel, and page backgrounds.
avoid: Flat, uniform digital colors without texture; any surface that looks purely screen-rendered.

rule: Elements must bleed off at least one edge of their container, mimicking the wrapper's trimming process.
do: Extend a star motif, text block, or heavy frame beyond the wrapper frame, clipped by the parent overflow; a headline may run off the right or bottom edge.
avoid: All elements fully contained within padding boundaries with comfortable margins all around.

### 11d. Variation Bounds

| Axis | Low end | High end |
|------|---------|----------|
| **Wear level** | Clean, pristine, minimal ink bleed | Distressed, heavily weathered, paper scuffed and creased |
| **Density** | Minimal, sparse — one large motif, lots of paper showing | Dense, maximal — repeating patterns fill every corner |
| **Period fidelity** | Authentic — strict 3-colour, hand-drawn, period-correct | Remix — modernized with fourth colour, digital crispness, expanded palette |
| **Surface finish** | Plain matte paper — no reflective elements | Metallic foil accent — gold or silver applied to one central element |
| **Weight dominance** | Red-dominant — red field with black text and accents | Black-dominant — black field with red accents and white paper highlights |
| **Imagery register** | Sweet / whimsical — candy-focused, playful motifs | Industrial / heavy — factory silhouettes, farming motifs, gears and wheat |

### 11e. Compositional Signatures

### 11e.i — At Rest
A single wrapper card fills the viewport, aspect-ratio 3:4. The background is cream paper (#F5F0E8) with moderate paper grain. A black double-line border (border-4 double) frames the card, inner edge kissed by a thin red misregistration ghost shifted 1–2px. The main title “Карамель” in Russo One (uppercase, font-black, tracking-tighter, text-6xl) is rotated 35° clockwise, its red fill (# contest primary) bleeding slightly at the edges from ink spread. A hand-drawn five-pointed star badge (red fill, black outline, w-16 h-16) sits in the top-right corner, partially clipped by the wrapper edge. A small gear motif (black outline, w-8 h-8) anchors the bottom-left corner. No other elements — sparse, the paper breathing.

### 11e.ii — Maximum Expressiveness
A full-bleed composition at 2:3 aspect ratio. The background is cream paper grain at opacity-20, denser than At Rest. The outer frame is a heavy double-line border: inner border-4 black, outer border-4 red, with a 4px paper gap visible. Three text blocks dominate: one diagonal headline “КОНФЕТЫ” at 40°, text-7xl, red fill with black shadow (simulated via duplicate layer shifted 2px), bleeding off the top-left; a second “1924” at 55°, black fill, text-4xl, overlapping the headline; a third “МОСКВА” at 30°, black on white, text-5xl, anchored bottom-right. A gold foil star (accent hero element) sits centred, surrounded by a black gear ring animated with gear-spin. Chevron dividers (black-on-paper) separate the top and bottom sections. Ink bleed is visible on the red headline’s lower edge, and the misregistration offset (red layer behind black outline) applies to all red fills. Several elements bleed: the star partially off the right edge, the gear off the left. A small product weight label (label role, text-xs, Cyrillic) is rotated -5° near the bottom-left corner.

### 11e.iii — Data Context
When presenting numeric or tabular data (e.g., product nutrition, pricing, factory codes), the system adapts by wrapping the data in a paper-textured panel with thick black border. A table uses the full width of the wrapper, with column headers rotated -8°, uppercase, font-bold, color black on paper. Data rows alternate between cream paper (#F5F0E8) and slightly darker surface-container (#EDE4D6), separated by black border-b-2 lines. Key metrics (calories, price, weight) are displayed as a large label-size value in red (contested primary), with a hand-drawn star beside the most important number. No drop shadows, no glow — only structural weight. A gear motif marks loading states. Proportions remain the 2:3 wrapper ratio, and diagonal elements are restrained to 5°–15° to preserve readability.

### 11f. Sources

This subject has minimal verified imagery. The visual claims below should be treated with caution.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** (Prose generation failed — see provenance block for attribution data.)

**Verified imagery sources.** 2 URLs verified against institutional servers, distributed across:
- Wikipedia — 1 URL(s)
- Victoria and Albert Museum — 1 URL(s)

**Named typefaces.** The typography of this style is attested as:
- (none attested)

**Honest gaps.** (No documented gaps were recorded by the forensic pipeline.)
