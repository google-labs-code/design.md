---
version: alpha
name: "Mexico City Metro Pictogram System (Lance Wyman)"
description: "A distilled wayfinding language based on solid silhouette icons in circles, maximum recognition with minimum lines, geometric construction, and black-and-white minimalism with optional single accent for route bar."
colors:
  primary: "#000000"
  on-primary: "#FFFFFF"
  surface: "#FFFFFF"
  on-surface: "#000000"
  inverse-surface: "#000000"
  inverse-on-surface: "#FFFFFF"
typography:
  display:
    fontFamily: "Montserrat"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  headline:
    fontFamily: "Montserrat"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  title:
    fontFamily: "Montserrat"
    fontSize: "20px"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  body:
    fontFamily: "Montserrat"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0em"
    textTransform: "uppercase"
  label:
    fontFamily: "Montserrat"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
rounded:
  default: "0px"
  card: "9999px"
  button: "0px"
  input: "0px"
  chip: "0px"
spacing:
  component-gap: "16px"
  section-gap: "32px"
  page-padding: "24px"
  icon-to-label-gap: "4px"
  icon-size: "64px"
components:
  pictogram-tile:
    backgroundColor: "#FFFFFF"
    rounded: "{rounded.card}"
    size: "64px"
    width: "64px"
    height: "64px"
  pictogram-tile-hover:
    backgroundColor: "#FFFFFF"
    rounded: "{rounded.card}"
    size: "64px"
    width: "64px"
    height: "64px"
  station-name:
    textColor: "#000000"
provenance:
  coverage_status: "complete"
  identity_description: "The slug `mexico-city-metro-pictogram-system-lance-wyman` refers to the iconic pictogram-based wayfinding and identity system designed for the Sistema de Transporte Colectivo (STC) Metro of Mexico City, led by American graphic designer Lance Wyman with collaborators (including Francisco López and the architectural firm Schaefer, Kromer, Ciento y Asociados). The system was developed c. 1967–1969 an"
  manual_enrichment_required: false
  imagery_count: 5
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "en.wikipedia.org"
      count: 2
    - host: "www.moma.org"
      count: 1
    - host: "hache.com.mx"
      count: 1
    - host: "commons.wikimedia.org"
      count: 1
  imagery_urls:
    - url: "https://en.wikipedia.org/wiki/Mexico_City_Metro"
      host: "en.wikipedia.org"
      institution: "Wikipedia"
      confidence_original: high
    - url: "https://www.moma.org/collection/works/?"
      host: "www.moma.org"
      institution: "Museum of Modern Art, New York"
      confidence_original: low
    - url: "https://hache.com.mx/"
      host: "hache.com.mx"
      institution: "Haché (publisher)"
      confidence_original: low
    - url: "https://commons.wikimedia.org/wiki/File:San_Cosme.jpg"
      host: "commons.wikimedia.org"
      institution: "Wikimedia Commons"
      confidence_original: high
    - url: "https://en.wikipedia.org/wiki/Lance_Wyman"
      host: "en.wikipedia.org"
      institution: "Wikipedia"
      confidence_original: high
  typefaces_attested:
    - name: "Helvetica Medium"
      foundry: null
      year: null
      google_fonts: "Inter"
      attestation: "unverified"
    - name: "Helvetica Bold"
      foundry: null
      year: null
      google_fonts: "Inter"
      attestation: "unverified"
    - name: "Univers 65 Bold"
      foundry: null
      year: null
      google_fonts: "Manrope"
      attestation: "unverified"
    - name: "custom/modified sans‑serif"
      foundry: null
      year: null
      google_fonts: null
      attestation: "unverified"
    - name: "custom 'Metro' wordmark"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "attested"
  flags:
    []
  honest_gaps:
    - "1. **Original colour specification for black and white** – no Pantone, Munsell, or hex attested."
---
# Design System: Mexico City Metro Pictogram System (Lance Wyman)

## 0. Taxonomy & Identity

| Field | Value |
|---|---|
| entity-type | interface / system / environment |
| artefact-family | signage / wayfinding |
| technique | digital vector |
| movement-lineage | design movement |
| era | postwar |
| geography | latin america |
| domain | transport |
| formal-traits | geometric, minimal, grid-based |
| color-logic | monochrome |
| typography-mode | geometric sans |
| texture | smooth |
| function | navigate |
| provenance | revival / homage |

## 1. Overview

The Mexico City Metro Pictogram System, designed by Lance Wyman in 1969, is a distilled wayfinding language that achieves maximum recognition with minimum lines. Each station is represented as a solid silhouette icon enclosed in a circle, bisected by a horizontal route bar. The style embodies midcentury information design: rational, modular, and universally legible. The emotional tone is authoritative, welcoming, and confident—rooted in modernist clarity. Density is extremely low (one icon per tile); every element earns its place. The core rendering philosophy is pure silhouette, high contrast, and geometric economy.

**What defines the style:**
- Single-color solid silhouette inside a circular container (route bar horizontal through the middle)
- Black-on-white or white-on-black only; optional single bright accent for the route bar
- Negative space carved as hard-edged geometry—the gap is part of the symbol
- All shapes built from arcs, circles, straight lines at 45° or 90°; no freehand curves
- Symmetry and profile views; no perspective, no internal cutouts beyond the route bar
- Typography: geometric sans-serif, all caps, tightly tracked, never inside the icon container

**What would break it:**
- Drop shadows, bevels, gradients, 3D perspective
- More than one accent color per icon
- Text inside the pictogram container
- Variable stroke widths or organic curves
- Low contrast or gray midtones

*Optional surface simulation*: screen-print artifacts (paper grain, ink bleed, stencil gaps) can be applied for a tactile vintage feel; clean vector is the default.

## 2. Constants

| Attribute | Value |
|---|---|
| Light Mode | yes (primary — black icons/type on white background) |
| Dark Mode | yes (white icons/type on solid black or deep navy background) |
| Responsive | yes — icons scale uniformly with container size; layout adapts via modular grid with consistent relative spacing |
| States | Default, Hover (scale 110%, no color change), Active (route bar highlighted with accent color), Disabled (opacity‑40 or opacity‑50) |
| surface-simulation | none — clean digital vector; no physical surface simulation (optional screen-print variant available via §8.5) |

## 2a — Interaction Model

hover-delta:        none (transform-scale only) — hover applies transform scale(1.1); no opacity change, no color change, no shadow. The icon expands uniformly within its circular container.
active-delta:       color-shift — route bar transitions to a selected accent color on active/selected state; no other element changes
focus-style:        none — no focus ring, outline, or glow; focus is communicated visually only through the active state (accented route bar)
transition-duration:200ms — applied globally to hover scale and route bar color transitions
transition-easing:  ease-out
exempt-animations:  route-bar-draw — the width animation from 0 to 100% on page load must complete regardless of transition-duration settings

## 3. Colors

Colour roles follow an ultra-minimal monochrome palette with an optional single accent per icon for the route bar. Dark mode swaps surface and on-surface roles; accent colours remain unchanged but should be tested for contrast on black.

| Role | Hex | Descriptive Name | Usage |
|------|-----|------------------|-------|
| primary | #000000 [attested] | Black Icon Fill | Solid silhouette of pictograms, route bars (default), primary text on light surface |
| on-primary | #FFFFFF [attested] | White Negative Space | Container background, inverse icon/text on dark backgrounds |
| surface | #FFFFFF [attested] | Light-Mode Background | Tile background, page background |
| on-surface | #000000 [attested] | Text on Light Background | Station names, labels |
| inverse-surface | #000000 [attested] | Dark-Mode Background | Background for dark mode |
| inverse-on-surface | #FFFFFF [attested] | Text on Dark Background | Icon stroke, labels in dark mode |
| route-accent | CONTESTED:§2.hex_accent — providers diverged on exact red hex; no cited source | Red Route Line | Optional accent for route bar, conventional but unverified |
| route-accent-green | CONTESTED:§2.hex_accent_green — providers gave [#00A859 / #00AA00 / #00A651 / #00FF00]; no consensus | Green Route Line | Optional accent |
| route-accent-blue | CONTESTED:§2.hex_accent_blue — providers gave [#005BAA / #0066FF / #003DA5 / #0000FF]; no consensus | Blue Route Line | Optional accent |
| route-accent-orange | CONTESTED:§2.hex_accent_orange — providers gave [#FF6600 / #FF8800 / #FF8200 / #FFA500]; no consensus | Orange Route Line | Optional accent |
| route-accent-yellow | CONTESTED:§2.hex_accent_yellow — providers gave [#FFD100 / #FFD700 / #FFD100 / #FFFF00]; partial agreement on #FFD100 but unverified | Yellow Route Line | Optional accent |

**Dark mode swap:**  
`surface` ↔ `inverse-surface`; `on-surface` ↔ `inverse-on-surface`; all route-accent roles remain as above.

## 4. Typography

The exact typeface is contested in historical sources; no provider cited a foundry or year. The system uses a geometric sans-serif. Text is set in uppercase only, tightly tracked, and always placed outside the pictogram container (baseline aligns with bottom of the circle).

| Role | Typeface | Size | Weight | Line Height | Letter-spacing | Case |
|------|----------|------|--------|-------------|----------------|------|
| display | CONTESTED:§3.primary_typeface — no cited foundry; providers suggested Futura, Montserrat, Inter; gap required | text-4xl | bold | leading-tight | tracking-tight | uppercase |
| headline | CONTESTED:§3.primary_typeface (same family) | text-2xl | semibold | leading-tight | tracking-tight | uppercase |
| title | CONTESTED:§3.primary_typeface | text-xl | medium | leading-tight | tracking-tight | uppercase |
| body | CONTESTED:§3.primary_typeface | text-base | medium | leading-normal | tracking-normal | uppercase (rare) |
| label | CONTESTED:§3.primary_typeface | text-sm | semibold | leading-tight | tracking-tight | uppercase |

**Google Fonts substitute:** CONTESTED:§3.google_fonts_substitute — providers gave [Montserrat, Jost, Inter]; no cited source; gap required.

**Constraints:**
- No lowercase or title case — all uppercase.
- No thin or condensed weights.
- Letterforms never appear inside the pictogram container.
- Baseline of text aligns with the bottom of the icon container (circle sits above, text hangs below).
- Letter spacing does not exceed +10.

## 5. Elevation

Flat depth model — no shadow hierarchy. All elements lie on a single plane. No drop shadows, inset shadows, or layering. The route bar is an internal line, not a shadow.

## 6. Spacing & Sizing

| Property | Value |
|---|---|
| component-internal padding (inside tile) | 0 (icon fills container) |
| section-internal padding | p‑4 (between icon groups) |
| page-edge padding | p‑6 |
| margin between components (tiles) | gap‑4 |
| margin between sections | gap‑8 |
| component-heights (default) | h‑16 (64px) |
| icon size (container) | w‑16 h‑16 (default) |
| icon-to-label spacing | gap‑1 or gap‑2 (tight) |

**Responsive adjustments:**
- 375px: icons reduce to h‑10 w‑10, route bar h‑0.5, gap‑2, label text‑xs
- 768px: icons h‑14 w‑14, gap‑3, label text‑sm
- 1024px+: default h‑16 w‑16, gap‑4, label text‑sm

## 7. Borders

| Property | Value |
|---|---|
| border-radius (container) | rounded-full (circle) |
| border-radius (square variant) | rounded-none |
| border-width | border‑0 (container is solid fill; no strokes) |
| route bar (internal) | height 2–4px, solid, no border rounding |
| clip-path | none (circle via border-radius, square native) |

The route bar is an interior element, implemented as an absolutely positioned horizontal line (e.g., w‑full, h‑0.5, top‑1/2, y‑centered). No outer borders on tiles.

## 8. Opacity

| Use | Value |
|---|---|
| disabled state | opacity‑40 (or opacity‑50 — providers varied) |
| hover feedback | transform scale‑110 only; no opacity change |
| ghost/secondary | not used |
| overlay/scrim | not used |

**Browser chrome (conditional for digital signage):**  
- selection: inherit (rgba(0,0,0,0.25) background in light mode)  
- scrollbar: hidden or minimal thin

## 8.5. Visual Effects

*Conditional — activate only for vintage screen-print variant. Default (clean vector) has zero effects.*

### 8.5d – Texture & Noise Simulation

**Paper grain** (optional):  
- Technique: SVG feTurbulence (baseFrequency 0.65, numOctaves 2, type fractalNoise)  
- Surface: full-page canvas or icon container backgrounds  
- Intensity: barely perceptible (opacity‑5 to opacity‑10)  
- Blend: mix-blend-mode overlay, monochrome noise  
- Tailwind: no native equivalent

**Screen-print stencil gaps** (optional):  
- Technique: custom SVG clip‑path bridges on internal white areas of the icon silhouette (structural not decorative)  
- Surface: icon shape only  
- Intensity: moderate (1–2px gaps)  
- Tailwind: no native equivalent

**Ink bleed** (optional):  
- Technique: filter blur(0.5px) + scale(1.01) on icon silhouette  
- Surface: icon edges  
- Intensity: subtle (0.5–1pt fattening)  
- Tailwind: no native equivalent

**Compositing stack (when multiple effects):** base icon fill → ink‑bleed blur → stencil bridge mask → paper grain (overlay)

## 9. Components

### Icon Vocabulary
- System: custom glyphs – pure silhouette of concrete objects; built from straight lines, arcs, circles only; no freehand curves  
- Size: container w‑16 h‑16 (default)  
- Color: solid fill using `on-surface` role on light mode, `inverse-on-surface` on dark mode  
- Treatment: none (default); optional paper grain or ink bleed  
- Restrictions: no internal cutouts except route bar; no multiple colors per icon; no gradient; no variable stroke; no human facial features or fingers

### Pictogram Tile (Primary Component)
- Container: rounded‑full, fixed aspect‑ratio 1/1, background fills with `surface` or `inverse-surface` role  
- Icon silhouette: absolute centered, same size as container, fill with `on-surface` or `inverse-on-surface`  
- Route bar: absolute horizontal line at vertical center, height 2–4px, color `transparent` (cuts through icon) or `route-accent` if route coloring applied. Implemented as a pseudo-element with `background-color: transparent; border-top: 2px solid background` to create a cut  
- States:
  - Default: solid fill, no border, icon visible, route bar transparent or accent
  - Hover: scale‑110 transition‑transform duration‑200 ease‑out; no color change
  - Active: route bar transitions to a selected accent color
  - Disabled: opacity‑40 (or opacity‑50) – icon and route bar remain

### Route Line Connector (Between Tiles in Series)
- Horizontal bar extending across the row, matching height of route bar  
- Color: black or accent if single accent per series  
- Spans the gap between icon tiles, creating a continuous line map

### Station Name (Text Label)
- Positioned below icon tile, centered, baseline aligned with tile bottom  
- Uses `label` typography role (text‑sm, uppercase, font‑semibold)  
- Color inherits `on-surface` (light mode) or `inverse-on-surface` (dark mode)  
- No border, no background

## 10. Layout

- **Spacing cadence:** strict modular grid – each icon occupies an equal circular bounding area. Consistent horizontal and vertical gap (gap‑4 default).  
- **Grid tendency:** modular, column‑based (equal‑width columns for icon tiles). Density: low to medium (1–2 rows, 4–6 columns typical).  
- **Section separation:** gap‑8 between rows of icons or between icon area and other content.  
- **Alignment philosophy:** centered within tile; text baseline uniform across row. Symmetry in icon composition where possible.  
- **Breakpoint behavior:** see §6 responsive adjustments. No content reflow – only uniform scaling.  

**Motion:**

motion:
  transition-duration:
    default: 200ms (hover scale, bar draw)
    entrance: 300–400ms (fade/slide)
  transition-timing-function:
    hover: ease-out
    entrance: ease-out or linear
  transition-property: transform, opacity
  transition-delay: none (entrance stagger via JS)

  animation:
    fade-in: opacity 0 → 1, 300ms ease-out, on-load or on-scroll-enter
    slide-up: translateY(10px) → 0, 300ms ease-out, on-scroll-enter (stagger 200ms between icons)
    route-bar-draw: width 0 → 100%, 200ms ease-out, on-load (after icon appears)
    hover-scale: transform scale(1) → 1.1, 200ms ease-out, on-hover

  transform-at-rest: none
  transform-on-interact: hover scale(1.1); no active/focus transforms
  transform-style: flat
  backface-visibility: hidden

## 11. Design System Notes

### 11a. Use Constraints

**Appropriate for:** Wayfinding systems, transit signage, map legends, station/chapter markers, museum signage, branding projects requiring a midcentury modern, authoritative, and highly legible visual language. Ideal when maximum recognition with minimum lines is a priority.

**Wrong for:** Complex data visualization with multiple layers, low-contrast environments, playful child-oriented interfaces, high-detail illustration, contexts requiring emotional expressiveness through human figures, and any scenario where color gradients or 3D depth are expected.

### 11b. Prompt Phrases

- "pure silhouette, high contrast, circular container with horizontal route bar"
- "maximum recognition with minimum lines — no freehand curves"
- "solid black shapes on white background; negative space tells the story"
- "geometric sans-serif all-caps type below the icon, never inside"
- "route bar is a single accent line — one bright colour across the container"
- "symmetry-first design: profile views, no perspective"
- "screen-print optional: fine grain or stencil gaps for tactility"
- "test at 1 inch diameter to ensure legibility at distance"

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description. Minimum 4 rules, maximum 8.

rule: Solid fill is the only acceptable primary form — outlines or strokes as primary shapes violate the pure silhouette principle that governs the entire system.
do:   Use solid fill shapes exclusively for icon silhouettes. Each pictogram is a single black mass with no interior strokes, no outlines defining the shape boundary. The icon reads as a unified object at any scale.
avoid:Gradients, drop shadows, 3D perspective, or bevels on the icon silhouette. Any effect that breaks the flat, solid appearance of the shape destroys the midcentury information-design language.

rule: One accent color maximum per icon, applied only to the route bar — additional accent colors destroy the minimal monochrome logic that makes the system instantly readable.
do:   Limit to one accent color per icon, carried exclusively by the route bar. All other elements — the icon silhouette, the container background, the label — remain black or white. The single accent acts as a visual anchor.
avoid:More than one accent color per icon, or placing accent colors on any element other than the route bar. Multiple colors fragment the icon and compete with the silhouette for attention.

rule: All angles must be 45° or 90° — freehand curves and arbitrary angles are alien to the rational, modular midcentury language that the system inherits from information design.
do:   Construct all icon geometry from arcs, circles, and straight lines at 45° or 90° increments. Every angle in the silhouette must be a multiple of 45. The shape reads as engineered, not drawn.
avoid:Freehand curves, organic shapes, or angles that are not multiples of 45°. The icon must look like it was drafted with a T-square and compass, not a brush or pencil.

rule: Legibility at 1 inch diameter is the governing constraint — no detail that disappears at that scale is permitted in the silhouette.
do:   Test every icon at 1 inch (25mm) diameter to ensure the silhouette is recognizable from reading distance. All essential details must survive this reduction without becoming ambiguous.
avoid:Human facial features, individual fingers, or any detail thinner than 2px at full size. These become illegible smudges when the icon is viewed at 1 inch and compromise recognition.

rule: Text must never enter the pictogram container — the icon and the label occupy separate, non-overlapping zones with distinct spatial roles.
do:   Position text outside the pictogram container, with baseline aligned to the bottom of the circular tile. The icon lives inside the circle; the label lives below it as an independent element.
avoid:Placing text inside the pictogram container, overlapping the circle, or positioned above the icon. Text inside the container destroys the purity of the silhouette and creates visual clutter.

rule: Symmetry aids split-second recognition in a transit environment — asymmetrical compositions take longer to decode at a glance.
do:   Use symmetry wherever the subject permits — profile views from the side, centered compositions, mirrored left/right halves. Symmetrical icons are recognized faster and remembered more reliably.
avoid:Variable stroke widths, freehand curves, or asymmetrical compositions that could be redesigned as symmetrical. The system prioritizes immediate recognition over expressive freedom.

rule: Silhouettes must be closed-form — the route bar is the only permitted interior division, and it bisects horizontally rather than puncturing the shape.
do:   Keep silhouettes closed-form with no interior cutouts except the horizontal route bar. The bar divides the shape into two solid masses (upper and lower) with no other gaps or holes in the silhouette.
avoid:Low contrast ratios (gray midtones or tinted fills) that blur the boundary between icon and background. Use only full black (#000000) on white (#FFFFFF) or the inverse for dark mode — no intermediate values.

### 11d. Variation Bounds

| Axis | Bounds |
|---|---|
| Container shape | circle (authentic) ↔ square (architectural feel) ↔ no container (icon floats) |
| Color mode | pure black/white ↔ single accent route line ↔ full minimal color (one accent per icon, background field gets a tint) |
| Icon complexity | 2–3 simple shapes (fast recognition) ↔ 4–5 shapes (more descriptive silhouette, still closed-form) |
| Finish | clean vector precision (default) ↔ distressed screen-print (paper grain, stencil gaps, ink bleed) |
| Abstract vs literal | bird as three arcs (very abstract) ↔ more recognizable bird silhouette (still simplified) |
| Stroke weight (for outline-only variant) | 8% of tile width (thin) ↔ 12% of tile width (thick) — note: solid fill is preferred; outline only as a secondary mode |

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts. Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
The system in its default, single-composition state. A single pictogram tile centered on a white (#FFFFFF) surface. The icon is a solid black (#000000) silhouette inside a circular container (w-16 h-16, rounded-full). No route bar accent is active — the route bar is transparent, cutting through the silhouette as negative space. Below the circle, an uppercase geometric sans-serif label (text-sm, font-semibold, tracking-tight, #000000) is centered with baseline aligned to the tile bottom. No effects, no texture, no animation. The composition is perfectly centered with equal margins on all sides. No drop shadows, no borders, no layering.

### 11e.ii — Maximum Expressiveness
Four pictogram tiles in a single horizontal row (gap-4), each with a distinct icon representing a transit mode: train, bus, metro, cable car. The third tile (metro) is in an active state with its route bar highlighted in route-accent red (CONTESTED:§2.hex_accent). The route line connector spans the full width of the row between tiles, creating a continuous horizontal line at the same height as each tile's route bar (2px solid black). Paper grain (SVG feTurbulence, baseFrequency 0.65, numOctaves 2, opacity-8, mix-blend-mode overlay) is applied across the entire page surface as a barely perceptible texture. Each icon is at default scale (w-16 h-16). Labels below each tile are uppercase, tracking-tight, in black. The composition is centered horizontally with equal space on both sides. No drop shadows, no rounded corners beyond the circular containers, no background color other than white.

### 11e.iii — Data Context
This system is a wayfinding language with no native data-visualization role. When numeric or status information must appear (route numbers, platform indicators, transfer distances), it is handled as a pictogram: a solid circle (w-10 h-10, rounded-full, bg-black) containing a white number or letter carved as negative space — no interior strokes, no accent color, no border. The label below follows the standard typographic treatment (text-xs, uppercase, font-semibold, tracking-tight). Route numbers on a line map appear as small solid circles connected by a horizontal route bar, with the number placed to the right of the circle in the same uppercase label style. No tables, no meters, no progress bars, no status indicators — all data is translated into the icon + label + route bar vocabulary. The surface remains white with no effects; the icon-to-label spacing is gap-2 at this reduced scale.

### 11f. Sources

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** The **Mexico City Metro Pictogram System** was designed circa 1967–1969 for the Sistema de Transporte Colectivo by American graphic designer **Lance Wyman**, in collaboration with **Francisco López** and the architectural firm **Schaefer, Kromer, Ciento y Asociados**.

**Verified imagery sources.** 5 URLs verified against institutional servers, distributed across:
- Wikipedia — 2 URL(s)
- Museum of Modern Art, New York — 1 URL(s)
- Haché (publisher) — 1 URL(s)
- Wikimedia Commons — 1 URL(s)

No specific imagery sources are documented among the top references for this system.

**Named typefaces.** The typography of this style is attested as:
- Helvetica Medium ( — attestation: unverified) — rendered here in Inter as the closest open substitute
- Helvetica Bold ( — attestation: unverified) — rendered here in Inter as the closest open substitute
- Univers 65 Bold ( — attestation: unverified) — rendered here in Manrope as the closest open substitute
- custom/modified sans‑serif ( — attestation: unverified) — no Google Fonts substitute available
- custom 'Metro' wordmark ( — attestation: attested) — rendered here as bespoke imagery — no web-font substitute

**Honest gaps.** The most significant gap is the **original colour specification for black and white** – no Pantone, Munsell, or hex attested. Without a contemporary colour standard, reproduction and historical analysis are compromised. Locating original design blueprints or Wyman’s studio specifications would resolve this gap.
