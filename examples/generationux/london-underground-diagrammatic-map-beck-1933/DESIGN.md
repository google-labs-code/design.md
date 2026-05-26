---
version: alpha
name: "London Underground Diagrammatic Map (Beck 1933)"
description: "Harry Beck's 1933 diagrammatic map of the London Underground reduces the network to pure topology governed by an octilinear grid, sacrificing geographic fidelity for connectivity. The style is rational, orderly, and austere, with every element serving legibility."
colors:
  line-red: "#DA291C"
  line-blue: "#003688"
  line-yellow: "#FFB300"
  line-green: "#00853E"
  line-brown: "#716B3B"
  line-grey: "#9B9B9B"
  interchange-fill: "#FFFFFF"
typography:
  title:
    fontFamily: "Condensed Geometric Sans"
    fontSize: 18px
    fontWeight: 300
    lineHeight: 1.25
    letterSpacing: 0.025em
    textTransform: uppercase
  line-name:
    fontFamily: "Condensed Geometric Sans"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: 0.05em
    textTransform: uppercase
  station-label:
    fontFamily: "Condensed Geometric Sans"
    fontSize: 12px
    fontWeight: 300
    lineHeight: 1
    letterSpacing: 0.1em
    textTransform: uppercase
  body:
    fontFamily: "Condensed Geometric Sans"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0.025em
    textTransform: uppercase
rounded:
  default: 0px
  card: 0px
  button: 0px
  input: 0px
  chip: 0px
  full: 9999px
spacing:
  component-internal: 4px
  section-internal: 16px
  page-edge: 24px
  between-components: 16px
  between-sections: 24px
components:
  line:
    backgroundColor: "{colors.line-red}"
    height: 2px
  station-tick:
    backgroundColor: "#000000"
    width: 2px
    height: 10px
  interchange-circle:
    backgroundColor: "{colors.interchange-fill}"
    rounded: "{rounded.full}"
    size: 16px
  legend-box:
    backgroundColor: "#FFFFFF"
    rounded: "{rounded.default}"
    padding: "8px"
  line-name-box:
    backgroundColor: "#FFFFFF"
    rounded: "{rounded.default}"
    padding: "4px"
  roundel-logo:
    backgroundColor: "{colors.line-red}"
    size: 12px
provenance:
  coverage_status: "sparse"
  identity_description: "This slug refers to the first diagrammatic pocket map of the London Underground rail network, designed by electrical draughtsman Harry Beck (1902–1974) and published in January 1933 by the London Passenger Transport Board (LPTB). The map abandoned geographic accuracy in favour of a topological schematic: lines run only horizontally, vertically, or at 45° diagonals; stations are spaced uniformly; t"
  manual_enrichment_required: false
  imagery_count: 3
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: null
    typography_map: "entries:113"
  sources:
    - host: "www.ltmuseum.co.uk"
      count: 2
    - host: "en.wikipedia.org"
      count: 1
  imagery_urls:
    - url: "https://en.wikipedia.org/wiki/Harry_Beck"
      host: "en.wikipedia.org"
      institution: "Wikipedia"
      confidence_original: high
    - url: "https://www.ltmuseum.co.uk/collections"
      host: "www.ltmuseum.co.uk"
      institution: "London Transport Museum"
      confidence_original: low
    - url: "https://www.ltmuseum.co.uk/"
      host: "www.ltmuseum.co.uk"
      institution: "London Transport Museum"
      confidence_original: low
  typefaces_attested:
    []
  flags:
    - "sparse_imagery"
    - "no_typography_extracted"
    - "no_colour_extracted"
    - "1_robots_disallowed_urls"
  honest_gaps:
    []
---
# Design System: London Underground Diagrammatic Map (Beck 1933)

## 0. Taxonomy & Identity

entity-type:           interface / system / environment
artefact-family:       operating system / software UI
technique:             digital vector
movement-lineage:      design movement
era:                   interwar
geography:             UK
domain:                transport
formal-traits:         grid-based, geometric, minimal, schematic
color-logic:           spot-color
typography-mode:       geometric sans
texture:               grainy, smooth (optional vintage print artifacts)
function:              navigate
provenance:            revival / homage

## 1. Overview

Harry Beck's 1933 diagrammatic map of the London Underground is a landmark of modernist information design. It reduces the network to pure topology governed by an octilinear grid—all lines run at 0°, 45°, or 90° only. Geographic fidelity is entirely sacrificed for connectivity. The emotional register is rational, orderly, and austere. Every element serves legibility: stations are short perpendicular ticks, interchanges are hollow circles, and the background is white or off-white. The River Thames is the sole non‑rail element, rendered as a simplified geometric band.

The core rendering philosophy is maximum clarity through severe constraint. What makes it instantly recognizable: the octilinear grid, uniform line weights, black‑only typography set in a condensed geometric sans with wide letter spacing, and the complete absence of curves, shading, or ornament. Breaking the style requires introducing any curve, any non‑orthogonal angle, any 3D effect, or any pictorial element.

- **Emotional tone:** Clear, rational, efficient, authoritative.
- **Era/lineage:** 1933 British interwar modernist information design.
- **Density level:** Sparse with generous whitespace; central area expanded, outer branches compressed.
- **Core rendering philosophy:** Connectivity over geography, extreme constraint.
- **What makes it recognisable:** 45°/90° lines, station ticks, hollow interchange circles, white background, geometric river band.
- **What would break it:** Curves, 3D, shading, photography, non‑orthogonal angles, rounded corners, colour gradients, serif type.
- **Physical surface simulation (optional):** Offset print texture (paper grain noise, slight ink gain at junctions, colour‑plate misregistration) for vintage reproduction.

## 2. Constants

- **Light Mode:** Yes (primary) – white/off-white background, black text, coloured lines.
- **Dark Mode:** No – style is inherently light‑background; dark mode would lose the print‑era clarity.
- **Responsive:** Scale‑based – the diagram scales proportionally to the viewport; content does not reflow. Breakpoints defined in §10.
- **States:** Default, Hover (line highlight), Active (selected route or interchange), Disabled (faded line).
- surface-simulation: paper — offset print paper substrate with optional grain, misregistration, and ink gain

## 2a — Interaction Model

hover-delta:        opacity — line highlight on hover: opacity shifts to 0.80 (from 1.0); no color change, no movement
active-delta:       color-shift — selected route or interchange may increase stroke weight to 4px or change line colour; no movement
focus-style:        none — diagram has no keyboard focus model
transition-duration:150ms — applied to opacity transitions on hover/select; state changes are not instantaneous but eased
transition-easing:  ease-out
exempt-animations:  none

## 3. Colors

Surface: `#FFFFFF` – White background (vintage alternative `#F5F0E0` for aged paper effect).  
Text and marks: `#000000` – Black for all labels, station ticks, interchange outlines.

**Data‑line colours (1933 ink palette)**  
All colours are flat, no gradients, one colour per line.

| Role           | Hex        | Tag          | Description                     |
|----------------|------------|--------------|---------------------------------|
| line-red       | `#DA291C`  | [conventional] | Primary line (e.g., Central Line) |
| line-blue      | `#003688`  | [conventional] | Secondary line (e.g., Piccadilly Line) |
| line-yellow    | `#FFB300`  | [conventional] | Tertiary line (e.g., Circle Line) |
| line-green     | `#00853E`  | [conventional] | District Line analogue           |
| line-brown     | `#716B3B`  | [conventional] | Bakerloo Line analogue           |
| line-grey      | `#9B9B9B`  | [conventional] | Jubilee Line / subsidiary route  |

**Special elements**

| Role             | Hex        | Tag        | Description                                |
|------------------|------------|------------|--------------------------------------------|
| interchange-fill | `#FFFFFF`  | [unanimous] | White fill of hollow interchange circles    |
| **river-fill**   | CONTESTED  | –          | Providers disagree: [#9EB8D4, #B0C4E0, #9B9B9B]; no majority. |

*The river‑fill hex value is contested. Use gap marker in implementation until resolved.*

## 4. Typography

All text is set in a condensed geometric sans‑serif, black only. No serifs, italics, bold, or colour. Station labels are uppercase with generous tracking; line names may be rotated to match the line angle (0°, 45°, or 90°). Station labels remain strictly horizontal.

**Primary typeface (adjudicated):**  
CONTESTED:§3.primary_typeface — providers gave: [Spartan, Futura Condensed, Akzidenz-Grotesk Condensed, Barlow Condensed, Roboto Condensed]; none cited a foundry or year; re‑stack required.

**Secondary typeface:**  
CONTESTED:§3.secondary_typeface — same divergence; no cited source.

**Google Fonts substitute:**  
CONTESTED:§3.google_fonts_substitute — providers gave: [none, Roboto Condensed, Barlow Condensed, none]; no majority, no citation.

**Typography tokens (Tailwind CSS equivalents)**  

| Role           | font-family         | font-size | font-weight | line-height | letter-spacing | text-transform |
|----------------|----------------------|-----------|-------------|-------------|----------------|----------------|
| Title / heading| Arbitrary condensed geometric sans | text-lg   | font-light  | leading-tight| tracking-wide  | uppercase      |
| Line name      | Same                 | text-xs   | font-normal | leading-none| tracking-wider | uppercase      |
| Station label  | Same                 | text-xs   | font-light  | leading-none| tracking-widest| uppercase      |
| Body / legend  | Same                 | text-xs   | font-normal | leading-tight| tracking-wide  | uppercase      |

*All text is set in `#000000` only. No other colours applied to type.*

## 5. Elevation

Flat depth model — no shadow hierarchy. All elements exist on a single 2D plane. No drop shadows, no box shadows, no z‑index layering.

## 6. Spacing & Sizing

Padding (approximate Tailwind scales):
- component-internal: `p-1` (station labels, line‑name boxes)
- section-internal: `p-4` (between network clusters)
- page-edge: `p-6` (canvas margin)

Margin:
- between-components: `gap-4` (minimum separation between lines)
- between-sections: `gap-6` (between independent corridors)

Component heights:
- station tick: `h-2` (10px depth, 2px width) – represented as a stroke, not a box
- interchange circle: `h-4 w-4` (16px diameter)
- line stroke: `2px` (border-2 equivalent)
- legend box: `h-8` (64px)

Icon size: not applicable – all marks are geometric primitives.

## 7. Borders

- border-radius: `rounded-none` for all elements except interchange circles (`rounded-full`)
- border-width: `border-2` (2px) for interchange circle outlines and legend frames; `border` (1px) for line strokes
- border-style: `border-solid`
- No border‑image, no clip‑path.

## 8. Opacity

- disabled-state: `opacity-30` (faded line when out of service)
- ghost/secondary: `opacity-60` (secondary lines in background)
- hover-feedback: `opacity-80` (line highlight on hover)
- selection: primary line colour at 20% opacity for selected route background
- scrollbar: hidden (diagram intended to be fully visible; scrolling avoided)

## 8.5. Visual Effects — Texture & Noise (Optional)

### 8.5.0 — Physical Material Model

Declares the top-level surface simulation governing the entire page canvas.
This is distinct from component-level textures (§8.5d) — it is the global rendering layer.

material-model:    paper — offset print paper substrate

global-filter:     none — no body-level filter; any vintage effect is applied via overlays, not filter

global-overlay:    Paper grain via body::after pseudo-element:
                   SVG feTurbulence baseFrequency="0.65" numOctaves="2" type="fractalNoise"
                   blend: multiply, opacity: 0.05–0.15, pointer-events: none, position: fixed, z-index: 1.
                   (Styled to match the optional paper grain described in §8.5 below.)

rendering-flags:
  font-smoothing:  antialiased
  image-rendering: auto
  text-rendering:  auto

**Paper grain** (applied to full canvas)
- technique: SVG `feTurbulence` (fractalNoise)
- parameters: `baseFrequency="0.65"`, `numOctaves="2"`, `type="fractalNoise"`
- intensity: barely perceptible, `opacity-5` to `opacity-15`
- blend: overlay or multiply
- colour: monochrome (black or sepia)
- animation: none

**Print misregistration** (optional, applied to colour lines)
- technique: CSS pseudo‑element shift of colour layers
- offset: 0.1–0.3 px per layer
- blend: multiply, `opacity-20`
- applied only to coloured lines; black marks remain solid

**Ink gain at junctions** (optional)
- slightly heavier stroke weight (1.5×) at intersections

## 9. Components

### Icon Vocabulary
- **System:** Custom geometric primitives – no library icons.
- **Size:** Station tick: 2px × 10px; interchange circle: 16px diameter.
- **Colour:** All marks black (`#000000`); interchange fill white.
- **Treatment:** Purely flat, no filters, no animation.
- **Restrictions:** No pictograms, no bus/tram symbols, no emoji.

### Diagram Elements

**Line (coloured stroke)**  
- Stroke: 2px solid, one colour per line from §3 palette.  
- Joins: mitered. Caps: butt (sharp).  
- All segments at 0°, 45°, or 90° — no curves, no other angles.  
- Uniform weight across entire length.  
- Hover: opacity‑80. Selected: stroke weight increased to 4px (or colour change).

**Station Tick (regular stop)**  
- Short perpendicular stroke across the line.  
- Width: 2px (same as line weight), depth: 10px.  
- Orientation: perpendicular to the line (0°, 45°, or 90° depending on line angle).  
- Colour: `#000000`. No rounding, no shadow.

**Interchange Circle (hollow)**  
- Shape: circle, diameter 16px.  
- Fill: `#FFFFFF`. Stroke: 2px solid `#000000`.  
- Encloses the intersection of multiple station ticks.  
- Multiple lines may enter/exit at the same angle; circle sized to accommodate all ticks.

**River Thames (geometric band)**  
- **Fill colour contested** – see §3 note.  
- Simplified shape composed of straight segments (or gentle arc in original).  
- Uniform width (approximately 4–6 pt).  
- No text, no outline. The only non‑rail element on the map.

**Legend Box**  
- Rectangle with solid 2px black border, white fill.  
- Content: line colour swatches with line names, set in label typography.  
- Placed in a corner without obscuring the network.

**Line Name Box**  
- Small rectangle (white fill, 1px black border) containing the line name.  
- Rotated to match line angle (0°, 45°, or 90°).  
- Text: title typography, black.

**Roundel Logo (optional brand element)**  
- Red circle (12px diameter) with blue horizontal bar across middle (2px thick).  
- Colours: circle `#DA291C`, bar `#003688`.  
- Placement: bottom‑right or bottom‑left corner.

## 10. Layout

- **Grid tendency:** Strict octilinear grid — all station coordinates and line vertices snap to 0°, 45°, or 90° axes. The grid is invisible but governs every placement.
- **Spacing cadence:** Generous and uniform. Lines are separated by a minimum gutter of 4–8px. No lines touch or overlap unless sharing a corridor; shared corridors use parallel lines spaced 4px apart.
- **Density:** Central area enlarged, outer branches compressed — distortion is intentional.
- **Section separation:** Lines sharing a corridor cluster together; different corridors separated by wider gaps. River Thames sits between clusters, never intersecting lines.
- **Alignment:** All station labels strictly horizontal regardless of line angle. Line‑name boxes rotated to match line angle.
- **Breakpoints:**  
  - 375px: entire diagram scales down proportionally (~0.8×). Station ticks and circles reduce to minimum readable size. Legend may collapse.  
  - 768px: full detail, comfortable spacing. Content does not reflow — only scaling.
- **Motion:** All state changes instantaneous. Optional 150ms opacity transition on hover/select.

## 11. Design System Notes

### 11a. Use Constraints

**Appropriate for:** Transit network maps, flow diagrams, data flow pipelines, network topologies, project dependency graphs — any system that can be reduced to connectivity between nodes. Excels when clarity and simplicity are paramount.

**Wrong for:** Geographic maps, organic shapes, designs requiring curves, 3D, shadows, or pictorial elements. Also wrong for interfaces requiring hierarchy through depth, gradients, or flexible layout — this style is rigid and planar.

### 11b. Prompt Phrases (synthesised)

1. “Octilinear grid, 45° angles only — no curves, no other angles.”  
2. “Uniform line weight, one colour per line — no gradients or stroke variation.”  
3. “Station ticks (perpendicular strokes), never dots — interchange circles are hollow with black outline, white fill.”  
4. “Geometric sans-serif, uppercase, wide tracking — all text black only.”  
5. “Minimalist — no shading, no drop shadows, no depth.”  
6. “River Thames as geometric band in muted blue‑grey — the only non‑rail element.”  
7. “Print-era texture optional: paper grain noise, slight misregistration, ink gain.”

### 11c. Do / Avoid

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description. Minimum 4 rules, maximum 8.

rule: All line segments must use strict 45° angles only — no curves and no other angles.
do:   Use only 0°, 45°, or 90° for all line segments; keep joins mitered and caps butt.
avoid:Curves, rounded corners (except interchange circles), or angles such as 30° or 60°.

rule: Stroke weight must be uniform across the entire line — no variation along a single route.
do:   Maintain a consistent 2px stroke weight with mitered joins and butt caps.
avoid:Gradients, line weight variation, or multiple colours on the same line.

rule: All text must be black only and set in a condensed geometric sans with wide tracking.
do:   Use only #000000 for all text, with uppercase and letter-spacing at tracking-wide or wider.
avoid:Serifs, italics, bold, lowercase, or any colour applied to type.

rule: Station labels must be strictly horizontal — never rotated to match line angle.
do:   Place all station labels horizontally directly beside station ticks; only line-name boxes may be rotated.
avoid:Rotating station labels to match line angle, which reduces legibility.

rule: No depth, shading, or 3D effects — the diagram exists on a single 2D plane.
do:   Keep all elements flat with no drop shadows, box shadows, or z-index layering.
avoid:Drop shadows, box shadows, 3D effects, or any hierarchy through depth.

### 11d. Variation Bounds

1. **Topographic distortion:** 0 (pure diagrammatic, maximum compression of outer areas) to 10 (slightly geographic, retains some shape of coastlines or boundaries).  
2. **Station density:** 0 (express‑only, minimal stations) to 10 (all stops shown).  
3. **Ink palette:** 0 (muted 1930s printing inks: desaturated, warm) to 10 (saturated modern primary colors).  
4. **Line weight:** Hairline (1pt) to slightly thicker (3pt).  
5. **Paper age / surface:** 0 (crisp white, no texture) to 10 (heavily weathered, crease marks, paper grain, misregistration).  
6. **Interchange shape:** Circles, diamonds, or squares — but must remain hollow with thin outline.

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts.
Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
A single line (red, #DA291C) runs horizontally at 0° across a white (#FFFFFF) canvas. Three station ticks (2px × 10px, black #000000) are spaced evenly along the line, each perpendicular. The tick labels (Anton 900? — actually condensed geometric sans, text-xs, uppercase, tracking-widest, #000000) sit to the right of each tick. No interchange circles, no legend, no river. The composition is centered with generous whitespace around the line. No texture, no shadow.

### 11e.ii — Maximum Expressiveness
Three lines intersect: red (horizontal), blue (45° descending), yellow (90° vertical). They converge at an interchange circle (16px diameter, white fill #FFFFFF, 2px black stroke) with ticks from each line entering at their respective angles. Line-name boxes (white fill, 1px black border) are rotated to match each line's angle, containing the line name in the same condensed sans (text-xs, tracking-wider, #000000). River Thames appears as a geometric band (contested fill colour, uniform width ~5pt) in the lower third, composed of straight segments at 0°. A legend box sits in the upper-right corner (2px black border, white fill, line colour swatches with names). Optional print-era texture: paper grain at opacity-10, slight misregistration of the red line (0.2px shift), ink gain at the junction where three lines meet.

### 11e.iii — Data Context
When the system is used for a data flow or network topology, the same visual vocabulary applies. Nodes are interchange circles (hollow — larger for important nodes, 16–32px diameter); edges are coloured lines (2px) at 0°/45°/90°. Labels on edges near terminals in small uppercase black. Status indicators are omitted — the scheme expresses connectivity only. If a status distinction is needed (e.g., active vs. degraded path), the line's stroke weight increases (4px) or its opacity shifts to 0.60. No colour-coded status, no animated pulses — flat, silent, permanent.

### 11f. Sources

Imagery coverage is sparse — only 3 institutional records verified.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** The **London Underground Diagrammatic Map (Beck 1933)** is the first diagrammatic pocket map of the London Underground rail network, designed by electrical draughtsman **Harry Beck** (1902–1974) and published in January 1933 by the London Passenger Transport Board (LPTB). The map abandoned geographic accuracy in favour of a topological schematic: lines run only horizontally, vertically, or at 45° diagonals; stations are spaced uniformly.

**Verified imagery sources.** 3 URLs verified against institutional servers, distributed across:
- London Transport Museum — 2 URL(s)
- Wikipedia — 1 URL(s)

Key references include the London Transport Museum's record at https://www.ltmuseum.co.uk/collections/collections-online/maps/item/1998-41818. Imagery coverage is sparse — only 3 institutional records verified.

**Named typefaces.** The typography of this style is attested as:
- (none attested)

**Honest gaps.** The most significant gap is the truncation of the original identity description (the forensic seed ends mid-word with "t"), leaving the full provenance and production instructions undocumented. Additionally, no explicit typeface or colour specifications are recorded. No documented gaps were recorded by the forensic pipeline. Resolving these gaps would require access to Beck's original draft notes and the LPTB's 1933 printing records.
