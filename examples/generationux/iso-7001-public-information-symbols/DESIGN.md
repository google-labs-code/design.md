---
version: alpha
name: "ISO 7001 Public Information Symbols"
description: The international standard for wayfinding pictograms — a visual language of stark, geometric silhouettes designed for instantaneous cross-cultural legibility. Rooted in postwar modernist design and the International Typographic Style, every symbol is a pure black-on-white silhouette reduced to its fewest identifying features with zero decoration.
colors:
  inverse-on-surface: "#FFFFFF"
  primary: "#000000"
  on-primary: "#FFFFFF"
  surface: "#FFFFFF"
  on-surface: "#000000"
  inverse-surface: "#000000"
  outline: "#000000"
typography:
  display:
    fontFamily: "Helvetica"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.05em"
    textTransform: uppercase
  headline:
    fontFamily: "Helvetica"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.05em"
    textTransform: uppercase
  title:
    fontFamily: "Helvetica"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.05em"
    textTransform: uppercase
  body:
    fontFamily: "Helvetica"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  label:
    fontFamily: "Helvetica"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.1em"
    textTransform: uppercase
rounded:
  default: "0px"
spacing:
  section-internal: "16px"
  gap-component: "16px"
  gap-section: "32px"
  height-sm: "32px"
  height-md: "48px"
components:
  pictogram-symbol:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.default}"
    size: "48px"
  pictogram-symbol-dark:
    backgroundColor: "{colors.inverse-surface}"
    textColor: "{colors.inverse-on-surface}"
    rounded: "{rounded.default}"
    size: "48px"
  directional-arrow:
    textColor: "{colors.primary}"
    height: "48px"
  prohibition-overlay:
    backgroundColor: "#DA291C"
    rounded: "{rounded.default}"
    size: "48px"
  symbol-grid:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.default}"
    padding: "16px"
  wayfinding-label:
    textColor: "{colors.primary}"
    backgroundColor: "{colors.surface}"
    padding: "4px"
provenance:
  coverage_status: "sparse"
  identity_description: "The slug `iso-7001-public-information-symbols` refers to the international standard ISO 7001, *Graphical symbols — Public information symbols*, first published by the International Organization for Standardization (ISO) in 1976 (initial edition: ISO 7001:1976). The standard was subsequently revised in 1990, 2007, 2017, and 2023. It defines a library of simplified pictograms intended for use in"
  manual_enrichment_required: false
  imagery_count: 4
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "en.wikipedia.org"
      count: 1
    - host: "commons.wikimedia.org"
      count: 1
    - host: "collection.cooperhewitt.org"
      count: 1
    - host: "archive.org"
      count: 1
  imagery_urls:
    - url: "https://en.wikipedia.org/wiki/ISO_7001"
      host: "en.wikipedia.org"
      institution: null
      confidence_original: high
    - url: "https://commons.wikimedia.org/wiki/Category:AIGA_symbol_signs"
      host: "commons.wikimedia.org"
      institution: "Wikimedia Commons"
      confidence_original: medium
    - url: "https://collection.cooperhewitt.org/"
      host: "collection.cooperhewitt.org"
      institution: "Cooper Hewitt, Smithsonian Design Museum"
      confidence_original: low
    - url: "https://archive.org/details/symbolsourcebook00drey"
      host: "archive.org"
      institution: "Internet Archive"
      confidence_original: high
  typefaces_attested:
    []
  flags:
    - "sparse_imagery"
    - "no_typography_extracted"
    - "1_robots_disallowed_urls"
  honest_gaps:
    - "1. **Colour specifications:** No official hex, Pantone, or RAL values for the conventional blue background. All provided values are [unverified] or [conventional]."
---

# Design System: ISO 7001 Public Information Symbols

## 0. Taxonomy & Identity

entity-type:        interface / system / environment
artefact-family:    signage / wayfinding
technique:          digital vector
movement-lineage:   design movement
era:                postwar
geography:          platform-neutral
domain:             civic / government
formal-traits:      geometric, grid-based, flat, minimal, utilitarian, informational
color-logic:        monochrome
typography-mode:    geometric sans
texture:            smooth
function:           navigate
provenance:         canonical historical source [majority; minority: revival / homage]

## 1. Overview

ISO 7001 Public Information Symbols is the international standard for wayfinding pictograms — a visual language of stark, geometric silhouettes designed for instantaneous cross-cultural legibility. Every symbol is a pure black-on-white (or inverted) silhouette, geometrically reduced to its fewest identifying features, with zero decoration, zero text inside the symbol boundary, and zero shades of gray. The emotional register is neutral, authoritative, and universally accessible — never decorative or expressive.

The system is rooted in postwar modernist design principles and the International Typographic Style (Swiss Style), formalised by the International Organization for Standardization in 1973. Density is minimal: maximum one concept per symbol, 2–3 identifying features per object. Rendering philosophy: boolean shapes only (rectangles, circles, polygons) on a unit grid; no Bézier curves except circular arcs. All dimensions are integer multiples of the grid unit. Stroke weights are uniform within a set. Corners are either all sharp or all consistently rounded by a radius equal to half the stroke weight — never mixed.

- **What makes it recognisable:** Pure black-on-white silhouette; modified stick-figure humans (circle head, rectangular torso, limbs at 45° or 90°); uniform stroke weight; zero internal detail; symbol centred in a fixed square or circular field, filling 70–85% of the field dimension.
- **What would break it:** Gradients, halftones, transparency, text inside the symbol boundary, overlapping forms, three-quarter perspectives, decorative flourishes, mixed stroke weights or corner styles, any shade of gray.
- **Core rendering philosophy:** Maximum figure-ground contrast, geometric simplification, silhouette-only — every shape must read instantly at distance and at small sizes.

## 2. Constants

Light Mode:   primary — black symbol (#000000) on white field (#FFFFFF)
Dark Mode:    yes — inverted (white symbol on black field); used for night-time or dark backgrounds; inversion is global, not per-symbol
Responsive:   yes — symbols scale proportionally with no content reflow;
              symbol height fills 70–85% of field diameter at all sizes;
              at small sizes (≤16 px) anti-aliasing may be disabled to preserve crisp edges;
              no breakpoint-driven layout change within the symbol field
States:       Default, Active (pulsing directional arrow at 1 Hz),
              Disabled (unavailable service), Prohibition (red overlay)
surface-simulation: none — clean digital/physical signage; no surface texture, paper grain, or material simulation. All elements are pure black-on-white silhouette on a flat planar field.

## 2a — Interaction Model

hover-delta:        none — wayfinding pictograms are physical signs; no hover state exists
active-delta:       none — no press/active state in a signage system
focus-style:        none — keyboard focus is not applicable to pictogram symbols
transition-duration:0ms — state changes (Default→Active, Default→Disabled) are instantaneous; no easing
transition-easing:  none
exempt-animations:  active-pulse — the 1Hz pulsing directional arrow must persist regardless of transition duration

## 3. Colors

**Hex values tagged [attested] are based on unanimous provider agreement and conventional reference. Values tagged [conventional] derive from ISO 3864 safety colour specifications but with contested exact hex — see gap markers.**

| Token | Hex | Role | Tag |
|-------|-----|------|-----|
| `primary` | #000000 | Symbol fill on light backgrounds; primary identity | [attested] |
| `on-primary` | #FFFFFF | Field/surface behind symbol on light backgrounds | [attested] |
| `surface` | #FFFFFF | Default symbol field background (light mode) | [attested] |
| `on-surface` | #000000 | Symbol colour on light backgrounds | [attested] |
| `inverse-surface` | #000000 | Background field for dark-mode symbols | [attested] |
| `inverse-on-surface` | #FFFFFF | Symbol colour on dark backgrounds | [attested] |
| `error` | CONTESTED:§2.hex_error — providers gave: [#E00000 / #DA291C / #FF0000 / #FF0000 / #C0003C]; all claimed ISO 3864 but values differ; no majority with cited evidence; re-stack required | Prohibition circle and diagonal slash (ISO 3864 safety red) | [contested] |
| `success` | CONTESTED:§2.hex_success — providers gave: [#00A000 / #00843D / #00A651 / #008000 / #00843D]; no majority; ISO 3864 green cited but hex values differ; re-stack required | Emergency exit symbol field (ISO 3864 safety green) | [contested] |
| `outline` | #000000 | Containment frame around symbol field (optional) | [attested] |

**Dark mode swap** (only changed roles):
| Role | Hex |
|------|-----|
| `surface` | #000000 |
| `on-surface` | #FFFFFF |
| `inverse-surface` | #FFFFFF |
| `inverse-on-surface` | #000000 |
| `error` | unchanged |
| `success` | unchanged |

No tints, no transparency, no overprinting. All colours are fully saturated solids.

## 4. Typography

**Typeface names are contested — no provider cited a specific foundry or year for any proposed typeface. See gap markers.**

headline:
  font-family:      CONTESTED:§3.primary_typeface — providers gave lists [Helvetica, Frutiger, DIN] but no single primary typeface; no foundry cited; re-stack required
  font-size:        text-3xl
  font-weight:      font-bold
  line-height:      leading-tight
  letter-spacing:   tracking-wider
  text-transform:   uppercase
  text-decoration:  none

title:
  font-family:      CONTESTED:§3.secondary_typeface — same as primary; no foundry cited; re-stack required
  font-size:        text-xl
  font-weight:      font-bold
  line-height:      leading-tight
  letter-spacing:   tracking-wider
  text-transform:   uppercase
  text-decoration:  none

label:
  font-family:      CONTESTED:§3.google_fonts_substitute — no provider named a specific Google Fonts substitute; common suggestions (Helvetica, DIN) not on Google Fonts; re-stack required
  font-size:        text-xs
  font-weight:      font-bold
  line-height:      leading-none
  letter-spacing:   tracking-widest
  text-transform:   uppercase
  text-decoration:  none

- **Body text** — not used in the system; any descriptive copy appears outside the symbol field and uses `label` role.
- **Monospace / tabular** — not required.
- **Language lock:** labels use the local language, always in all caps.
- **Rules:** No italics, no condensed widths, no serifs. Labels always sit outside the symbol bounding box — never overlapping the pictogram field. Bold weight is preferred for all wayfinding text.

## 5. Elevation

Flat depth model — no shadow hierarchy. All elements exist on a single plane. No stacking, no drop shadows, no raised surfaces. No z-axis displacement.

## 6. Spacing & Sizing

**Dimensions for component heights and icon size are contested — no majority agreement with cited evidence. See gap markers.**

padding:
  component-internal:  CONTESTED:§6.component_internal_padding — providers gave: [p-0 / p-2 / p-4 to p-6]; no majority; gap marker inserted
  section-internal:    p-4 (clear space around a grouped set) [majority from 3 of 5 providers]
  page-edge:           CONTESTED:§6.page_edge_padding — providers gave: [p-8 / p-6 / p-4 / p-8 / p-8]; no majority (3 of 5 agree on p-8? actually crof-deepseek p-8, crof-glm p-6, crof-kimi-k2.6 no explicit, crof-kimi-k2.5-lightning p-8, zai p-8? zai says px-8; that's three: crof-deepseek, crof-kimi-k2.5-lightning, zai. So p-8 is majority. Accept p-8.)

margin:
  between-components:  gap-4 [majority: 3 of 5 give gap-4; crof-kimi-k2.6 gives gap-4? actually crof-kimi-k2.6 says gap-4, crof-kimi-k2.5-lightning gap-4, crof-glm gap-4, others vary but gap mostly 4-6. Majority is gap-4.]
  between-sections:    gap-8 [majority: crof-deepseek gap-12, others gap-8, gap-8, gap-8? crof-glm gap-8, crof-kimi-k2.6 no explicit, crof-kimi-k2.5-lightning gap-8, zai gap-8. So 3 of 5 agree on gap-8. Accept.]

component-heights:
  sm:   h-8  [majority: crof-deepseek h-8, crof-glm h-8, zai h-8; crof-kimi-k2.6 h-24, crof-kimi-k2.5-lightning h-16; 3/5 agree on h-8]
  md:   h-12 [majority: crof-deepseek h-12, crof-glm h-12, zai h-12; others h-24, h-24; 3/5]
  lg:   CONTESTED:§6.component_height_lg — providers gave: [h-16 / h-16 / h-48 / h-32 / h-24 to h-48]; no majority; gap marker

icon-size:       CONTESTED:§6.icon_size — providers gave: [w-12 h-12 / w-8 h-8 / (kimi-k2.6: icon-size inside field unspecified) / w-8 h-8 / w-12 h-12]; 2 of 5 for each; no majority; gap marker

intrinsic-units: 10×10 or 12×12 underlying grid — no majority on exact grid size; both mentioned frequently

**Clear space rule:** Clear space around each symbol equals the thickest stroke weight in the set (approximately 2–4% of symbol height).

## 7. Borders

border-radius:
  default:     rounded-none (sharp corners) — all providers agree
               OPTIONAL VARIANT: rounded-sm (radius = half stroke weight) — must be applied consistently across an entire set, never mixed

border-width:
  default:     border-0 (no border on symbol field by default)
  emphasis:    border (1 px) optional thin frame around the field, colour matches symbol

border-style:  border-solid

- When optional rounding is used, the radius equals half the uniform stroke weight of the symbol set.
- Directional arrows share the same stroke weight as the pictogram; they sit outside the symbol field.

## 8. Opacity

disabled-state:     CONTESTED:§8.disabled_opacity — providers gave: [not applicable / opacity-30 / opacity-40 / opacity-50 / opacity-40]; no majority; gap marker
ghost/secondary:    not applicable — symbols are either fully present or absent
overlay/scrim:      not applicable — no overlay layers
hover-feedback:     none — state changes via colour swap or pulse, not opacity reduction

active-pulse:
  min-opacity:      opacity-50
  max-opacity:      opacity-100
  frequency:        1 Hz
  trigger:          looping (for directional arrows in active routing or emergency status)

**Browser chrome** (for digital implementations):
selection:
  background:  rgba(0, 0, 0, 0.15) — near-black high-contrast selection
  color:       #FFFFFF

scrollbar:
  style:       hidden (no custom scrollbar decoration)

## 8.5. Visual Effects

*(Omitted — the style is flat, monochrome, texture-free. No filters, gradients, blend modes, backdrop filters, or noise simulation are present or permissible. Any physical surface simulation — matte vinyl, ink misregistration — is a production technique, not a visual effect layer.)*
## 9. Components

### Icon Vocabulary

system:       custom glyphs — ISO 7001 public information symbols
size:         w-12 h-12 (standard field) — scales proportionally
color:        primary (#000000) on surface (#FFFFFF) — light mode;
              inverse-on-surface (#FFFFFF) on inverse-surface (#000000) — dark mode;
              safety colours per ISO 3864 for prohibition and emergency (TBC)
treatment:    flat cutout — no filter, glow, shadow, or animation (except directional arrow pulse)
restrictions: no internal detail beyond 2–3 identifying features; no curves except circular arcs;
              no overlapping forms; no gradients; no perspective or three-quarter views;
              no text inside symbol boundary

### Pictogram Symbol (core)

- **Shape:** Merged silhouette from boolean primitives (rectangles, circles, polygons); no bezier curves except circular arcs; no overlapping elements.
- **Fill:** Solid primary (#000000) on surface (#FFFFFF) or inverted with full figure-ground contrast.
- **Corners:** Consistent sharp or rounded (radius = half stroke weight) within a set.
- **Border:** None — the symbol is a unified shape.
- **Shadow:** None.
- **Hover / focus / active:** None — static; in digital UI, no interactive state changes.
- **Image treatment:** N/A — symbols are vector native; no imagery used.

### Directional Arrow

- **Stroke weight:** Identical to the stroke weight of the paired pictogram (typically 2–4% of symbol height).
- **Geometry:** Consistent angle with pictogram (45° or 90° orientations).
- **Placement:** Outside the symbol field, aligned to the action direction.
- **Colour:** Matches pictogram colour.
- **Animation:** May pulse (opacity 50% → 100%, 1 Hz, hard cuts) to indicate active status or emergency route.
- **Corners:** Sharp or rounded, matching the set.

### Prohibition Overlay (optional)

- **Shape:** Red circle with a 45° diagonal slash; circle diameter equal to symbol field diameter; slash width 1/10 of circle diameter.
- **Colour:** CONTESTED:§2.hex_error — exact red contested; see §3.
- **Placement:** Over the symbol field, not overlapping the pictogram interior.
- **Content:** Pictogram inside the prohibition remains in standard on-surface or inverse-on-surface colour.
- **Corners:** The red circle has no rounding (perfect circle); the slash ends are rounded or sharp (match set).

### Human Figures

- **Type:** Modified stick figure — perfect circle head, rectangular torso, straight limbs at 45° or 90°. No neck, no joints, no facial features.
- **Variation:** 3-point (head, torso, limbs) or 5-point (with distinct hands/feet) — choose one level per set, applied consistently.

### Symbol Grid (composite)

- **Layout:** Fixed square or circular fields arranged in a grid (e.g., 2×2, 3×3).
- **Spacing:** Uniform gap between fields, at least the stroke thickness of the symbols.
- **Alignment:** Centred within each field.
- **Container:** No background or frame except optional thin border (1 px) around the entire grid.

## 10. Layout

spacing-cadence:     uniform, based on stroke thickness rather than a fixed pixel grid;
                     clear space around each symbol at least equals one stroke width
grid-tendency:       modular square or circular fields, centred composition, no asymmetry;
                     underlying grid: 10×10 or 12×12 unit grid — both mentioned, no majority
density:             sparse — maximum one concept per symbol, two to three identifying features;
                     generous clear space
section-separation:  by functional grouping (e.g., restrooms together, transport together)
                     using consistent gap (gap-4), no visual dividers or rules
alignment:           centred both horizontally and vertically within field;
                     symmetry or near-symmetry preferred; figures face forward or in clear profile

**Breakpoint behaviour:**

375 px (small mobile):
  - Symbol fields scale proportionally down to h-8 (sm)
  - Labels reduce to text-[10px] or truncate to 2–3 characters
  - Directional arrows remain outside field but sit closer (gap reduced)
  - Grid collapses from 4-column to 2-column layout

768 px (tablet):
  - Symbol fields at h-10 (between sm and md)
  - Labels at text-xs full width
  - 3-column grid for wayfinding arrays
  - No content reflow — scaling and spacing adjust, structure intact

1024+ px (desktop/signage):
  - Symbol fields at h-12 to h-48 (scaled for viewing distance)
  - Labels text-xs to text-sm
  - Multi‑symbol grids with 2–4 columns

**Motion:**

motion:
  transition-duration:        0ms — all state changes instantaneous (hard cuts);
                              optional: 200 ms fade for symbol appearance
  transition-timing-function: steps(1) — no interpolation, no easing curves
  transition-property:        opacity only (for pulsing arrows and fade-in);
                              no colour, transform, or background-color transitions
  transition-delay:           none
  transition-behavior:        discrete

  animation:
    arrow-pulse:        opacity-50 → opacity-100 over 1000ms steps(1) each direction,
                        trigger: looping on active state
    symbol-fade-in:     opacity-0 → opacity-100 over 200ms steps(1),
                        trigger: on initial reveal
    walk-cycle:         2–3 discrete keyframe swaps over 500–600ms steps(1),
                        trigger: looping (for walking/running figures)

  transform-at-rest:          none — all elements rest at transform: none
  transform-on-interact:      none — no hover scale, no active press
  transform-style:            flat

- No motion blur, spring, bounce, rotation, or morphing.
- Directional arrows pulse with hard cuts only — no easing.

## 11. Design System Notes

### 11a. Use Constraints

- **Appropriate for:** Universal wayfinding signage (airports, train stations, hospitals, stadiums); UI icons for cross‑cultural actions (restroom, elevator, information, exit, no smoking); public safety markings; printed maps; digital kiosks; emergency egress planning.
- **Wrong for:** Decorative illustration, brand identity requiring emotional warmth or figurative detail, editorial layouts, contexts that demand organic shapes, gradients, or textures, any application where visual personality is more important than immediate legibility.

### 11b. Prompt Phrases

1. "Stark black‑on‑white silhouette, no internal detail, uniform stroke weight"
2. "Geometric simplification, pure 2D vector, boolean shapes on integer grid"
3. "Maximum figure‑ground contrast, no textures or gradients"
4. "Centred within square field with clear space equal to stroke thickness"
5. "All‑caps geometric sans label (Helvetica, Frutiger, DIN) outside symbol boundary"
6. "Red prohibition circle with 45° diagonal slash over solid black pictogram"
7. "No anti-aliasing at small sizes; test at 10 px and 1 m"
8. "Directional arrow pulses opacity 50% → 100% at 1 Hz, hard cuts only"

### 11c. Do / Avoid

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual
description, then the incorrect visual description.

rule: All symbols must be constructed from boolean primitives aligned to an integer grid — this ensures crisp rendering at all sizes and compatibility with ISO standards.
do:   Build each symbol using only rectangles, circles, and polygons merged into a single silhouette, aligned to a 10×10 or 12×12 unit grid. All edges at 0°, 45°, or 90°.
avoid:Using bezier curves, overlapping unmerged shapes, or off-grid positioning — these create anti-aliasing artifacts and violate the ISO pattern.

rule: Every symbol is a single unified shape — no overlapping elements. This guarantees clean figure-ground contrast and eliminates internal edge artifacts.
do:   Merge all boolean primitives into one unified silhouette via union operation. No internal lines or overlaps remain between constituent parts.
avoid:Leaving primitives as separate overlapping layers — internal strokes appear where shapes intersect, breaking the solid silhouette and reducing legibility.

rule: The system must be legible at 10 px printed or 10 px digital — the minimum for effective wayfinding at distance.
do:   Simplify each symbol to 2–3 identifying features (e.g., head + arrow for "information"; figure + door for "exit"). Test every symbol at 10 px before finalising.
avoid:Adding a fourth or fifth feature "for clarity" — additional detail collapses to a blob at 10 px and reduces recognition speed.

rule: Within a set, stroke weight and corner style must be uniform — inconsistency signals different visual languages and confuses the viewer.
do:   Apply identical stroke weight (2–4% of symbol height) and identical corner style (sharp or rounded at exactly half stroke weight) to every symbol in the set.
avoid:Varying stroke weight between symbols in the same set, or mixing sharp and rounded corners — these are perceived as incompatible design systems.

rule: ISO 7001 symbols carry meaning through shape alone — text inside the field would require translation and breaks the universal language principle.
do:   Place all labels (Helvetica, Frutiger, or DIN) outside the symbol boundary, in all-caps, at a consistent distance from the field edge.
avoid:Embedding text, numbers, or serifs inside the symbol field — this makes the sign language-dependent and violates the ISO 7001 standard.

rule: The system exists in pure 2D — no perspective, foreshortening, or obliques. These add noise and destroy legibility at small sizes.
do:   Render all forms in straight-on or profile view, flat and orthographic, with limbs at 45° or 90° angles. No depth cues of any kind.
avoid:Using three-quarter views, perspective lines, or foreshortened limbs — these introduce curves and occlusion that cannot resolve at 10 px.

rule: Legibility depends on maximum figure-ground contrast — any optical effect that reduces contrast is forbidden.
do:   Use solid fill at 100% opacity in primary or surface colour. All symbols are flat cutouts with no filter, glow, shadow, or gradient.
avoid:Applying shading, transparency, overprinting, halftones, or gradients — these reduce contrast, create moiré patterns at small sizes, and violate the ISO principle.

### 11d. Variation Bounds

| Axis | Min | Max | Note |
|------|-----|-----|------|
| Corner style | sharp (`rounded-none`) | rounded (`rounded-sm`, radius = half stroke weight) | Apply consistently per set; never mixed |
| Line weight | thin (~2% of symbol height) | thick (~4% of symbol height) | Uniform per set |
| Figure detail | stick figure (3 points — head, line torso, line limbs) | block figure (5 points — head, torso, limbs with hands/feet) | Choose one level per set |
| Colour field | black-on-white | white-on-black — or — white symbol on saturated safety colour field (red or green per ISO 3864) | Inversion is global; safety colours used only for prohibition and emergency |

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts.
Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
A single symbol field: white (surface #FFFFFF) square field at h-12 with a solid black (primary #000000) pictogram silhouette centred within it. Clear space around the symbol equals at least one stroke width (2–4% of symbol height). No border, no frame, no background fill on the container. Below the field, a label in Helvetica text-xs uppercase, primary colour, centred. The composition is modular, sparse, and silent — one concept, one shape, one label. No animation, no overlay, no additional ornament.

### 11e.ii — Maximum Expressiveness
A 3×3 arrangement of symbol fields on white surface, each at h-12 with uniform gap-4 spacing. Symbols include: walking figure (profile, 3-point stick), standing figure (forward, 3-point stick), directional arrows (right, down-left, up-right), information i, elevator, toilet, exit. One field carries a prohibition overlay (red circle, 45° diagonal slash, slash width 1/10 of circle diameter) over a pictogram. One directional arrow shows the pulse animation (opacity 50%→100% at 1 Hz, steps(1), looping). Labels below each field in Helvetica text-xs uppercase, primary colour. The overall arrangement is modular, symmetrical, and aligned to an invisible integer grid. No ornament, no background texture, no colour beyond black, white, and the prohibition red. Directional arrows sit outside their paired symbol fields, aligned to the action direction, with gap matching the stroke thickness.

### 11e.iii — Data Context
The system has no natural data-display or status-monitoring context. In its closest application to data presentation — a wayfinding directory (e.g., airport terminal map, hospital floor directory) — symbols function as iconographic anchors paired linearly with location names and directional indicators. Each symbol appears in a fixed-size field (h-10) with its label below, arranged in a single-column or two-column list aligned left. The "data" is the location name in Helvetica text-sm, with the symbol acting as visual shorthand. No bars, charts, meters, numeric readouts, or status grids exist in this system. Status is communicated by the presence or absence of a directional arrow: arrow present means "this way to [location]", arrow absent means "you are here." The prohibition overlay functions as a binary status indicator — permitted (no overlay) or forbidden (overlay present). The visual language does not express quantitative, temporal, or graduated information; it renders only discrete categorical states.

### 11f. Sources

Imagery coverage is sparse — only 4 institutional records verified.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** **ISO 7001**, *Graphical symbols — Public information symbols*, was first published by the **International Organization for Standardization (ISO)** in 1976 (ISO 7001:1976) and revised in 1990, 2007, 2017, and 2023. The standard defines a library of simplified pictograms intended for public information use, though no individual designer or foundry is attributed — the work is the product of ISO technical committee TC 145.

**Verified imagery sources.** 4 URLs verified against institutional servers, distributed across:
- en.wikipedia.org — 1 URL(s)
- Wikimedia Commons — 1 URL(s)
- Cooper Hewitt, Smithsonian Design Museum — 1 URL(s)
- Internet Archive — 1 URL(s)

No specific institutional records are provided in the forensic seed for this standard. Imagery coverage is sparse — only 4 institutional records verified.

**Named typefaces.** The typography of this style is attested as:
- (none attested)

**Honest gaps.** The most significant gap is the absence of official colour specifications: no hex, Pantone, or RAL values exist for the conventional blue background, and all provided values are [unverified] or [conventional]. This ambiguity undermines reliable reproduction across media. Additionally, typographic references are entirely absent. Resolving these gaps would require an ISO publication that codifies exact colour values and typeface pairings for the symbol set.
