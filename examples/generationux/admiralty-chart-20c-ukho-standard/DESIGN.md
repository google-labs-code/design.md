---
version: alpha
name: "Admiralty Chart 20C UKHO Standard"
description: "A vintage nautical chart aesthetic that recreates the authoritative, aged-paper presence of a mid-20th-century UK Hydrographic Office chart, with muted earth and sea tones, fine hachured coastlines, and simulated printed texture."
colors:
  surface: "#F4ECD8"
  on-surface: "#3A3A3A"
  primary: "#8C2F4F"
  on-primary: "#FFFFFF"
  secondary: "#1F6388"
  on-secondary: "#FFFFFF"
  outline: "#3A3A3A"
  outline-variant: "#6B6B6B"
  surface-container: "#E8E0D0"
  error: "#8C2F4F"
typography:
  display:
    fontFamily: "Times New Roman"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.025em"
    textTransform: "uppercase"
  headline:
    fontFamily: "Times New Roman"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.375
    letterSpacing: "0em"
    textTransform: "uppercase"
  title:
    fontFamily: "Times New Roman"
    fontSize: "18px"
    fontWeight: 500
    lineHeight: 1.625
    letterSpacing: "-0.025em"
    textTransform: "normal-case"
  body:
    fontFamily: "Times New Roman"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 2
    letterSpacing: "0em"
    textTransform: "normal-case"
  label:
    fontFamily: "Helvetica, Arial"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.05em"
    textTransform: "uppercase"
rounded:
  default: "0px"
spacing:
  component-internal: "4px"
  section-internal: "8px"
  page-edge: "12px"
  gap-component: "4px"
  gap-section: "8px"
  height-sm: "24px"
  height-md: "32px"
  height-lg: "40px"
  icon: "16px"
components:
  button-primary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.default}"
    padding: "4px"
  button-primary-hover:
    backgroundColor: "#E8E0D0"
    textColor: "{colors.on-surface}"
    padding: "4px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.default}"
    padding: "4px"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.default}"
    padding: "8px"
  input:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.default}"
    padding: "4px"
  input-focus:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.default}"
  light-marker:
    backgroundColor: "{colors.primary}"
    size: "12px"
  compass-rose:
    backgroundColor: "{colors.surface}"
    size: "56px"
provenance:
  coverage_status: "minimal"
  identity_description: ""
  manual_enrichment_required: true
  imagery_count: 1
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: null
    typography_map: "entries:113"
  sources:
    - host: "www.admiralty.co.uk"
      count: 1
  imagery_urls:
    - url: "https://www.admiralty.co.uk/about-us"
      host: "www.admiralty.co.uk"
      institution: "UK Hydrographic Office"
      confidence_original: low
  typefaces_attested:
    []
  flags:
    - "one_usable_url_only"
    - "no_typography_extracted"
    - "no_colour_extracted"
  honest_gaps:
    []
---
# Design System: Admiralty Chart 20C UKHO Standard

## 0. Taxonomy & Identity

entity-type:        interface / system / environment
artefact-family:    map / atlas / chart / diagram
technique:          digital raster
movement-lineage:   vernacular commercial style
era:                postwar
geography:          UK
domain:             transport
formal-traits:      grid-based, informational, dense, utilitarian, diagrammatic
color-logic:        muted
typography-mode:    serif
texture:            grainy, weathered, halated
function:           simulate (majority); navigate (single provider)
provenance:         revival / homage

## 1. Overview

This design system recreates the authoritative, aged-paper presence of a mid‑20th‑century UK Hydrographic Office nautical chart. The emotional register is functional, traditional, and subtly worn—a document that has guided ships through fog and tide. Each visual element carries the weight of institutional printing: muted earth and sea tones, fine hachured coastlines, a delicate graticule, and hand‑set serif lettering that curves along shorelines. The core philosophy is *simulated realism*: the interface should feel like a printed chart reproduced on screen, complete with paper grain, ink spread, and slight colour misregistration.

- **What makes it recognizable:** Neatline border with latitude/longitude ticks, compass rose (8‑ or 16‑point star with magnetic variation note), depth contours as dashed lines, soundings in small italic numbers, magenta overprints for warnings, and lighthouses marked with red dots or stars.
- **What would break it:** Neon or high‑saturation colours, purely flat design without paper texture, sans‑serif type used for land features, symmetrical layout, any digital‑native gloss or shadow hierarchy.
- **Emotional tone:** Stoic, navigational, archival—trustworthy but fading.
- **Density level:** High—information rich, tightly packed, no wasted space.
- **Core rendering philosophy:** Simulate lithographic halftone in land tints, coarse paper grain (4–5% noise), slight ink bleed on fine lines, and subtle foxing/stain artefacts on edges.

## 2. Constants

Light Mode:   primary (paper base #F4ECD8, text on‑surface #3A3A3A)
Dark Mode:    no — style relies on a light paper base; inversion would destroy the aged print character
Responsive:   yes — grid reflows at narrow viewports; legend collapses into overlay
States:       Default, Active, Disabled, Hover, Focus (all adapted from chart interaction patterns)
surface-simulation: paper — a mid‑20th‑century printed nautical chart on off‑white aged paper stock with grain and foxing

## 2a — Interaction Model

hover-delta:        opacity — opacity shifts to 0.70 on all interactive elements; no color change, no movement
active-delta:       none — no active state; physical chart has no press feedback
focus-style:        color-border — 2px solid primary (#8C2F4F) border around focused element, as per §7 focus rings
transition-duration:0ms — all state changes are instantaneous, mimicking printed artifact
transition-easing:  none
exempt-animations:  none — no keyframe animations exist in this system

## 3. Colors

- `surface (#F4ECD8)` [unverified] — Paper base: off‑white/cream rendering surface for all backgrounds.
- `on-surface (#3A3A3A)` [unverified] — Warm dark grey: primary text, soundings, line art.
- `primary (#8C2F4F)` [unverified] — Deep madder red: lighthouses, danger markers, navigational aids, error states.
- `on-primary (#FFFFFF)` [unverified] — White text on primary.
- `secondary (#1F6388)` [unverified] — Cyan‑blue: shallow water tint (light depth area) and secondary surface fills.
- `on-secondary (#FFFFFF)` [unverified] — White text on secondary.
- `tertiary (CONTESTED:§2.hex_accent — providers gave [#D4C4A8 / #BD9E68 / #6B8E56 / #6B7353 / #1F6388]; no consensus; re‑stack required)`.
- `outline (#3A3A3A)` [unverified] — Neatline borders, hachures, graticule, all line work.
- `outline-variant (#6B6B6B)` [unverified] — Lighter lines for depth contours and secondary structuring.
- `surface-container (#E8E0D0)` [unverified] — Slightly darker paper tint for inset cards, table cells.
- `error (#8C2F4F)` [unverified] — Reuses primary red for error states.

**Dark mode swap:** Not applicable—light paper base is required.

## 4. Typography

primary_typeface (CONTESTED:§3.primary_typeface — providers gave [Caslon / Playfair Display / Times New Roman]; none cited foundry or year; re‑stack required)
secondary_typeface (CONTESTED:§3.secondary_typeface — providers gave [Helvetica / Arial / Roboto Condensed / Inter]; none cited foundry; re‑stack required)
google_fonts_substitute (CONTESTED:§3.google_fonts_substitute — providers gave varying Google font names; no consensus; re‑stack required)

display:
  font-family: CONTESTED: see primary_typeface
  font-size:        text-4xl
  font-weight:      font-bold
  line-height:      leading-tight
  letter-spacing:   tracking-wide
  text-transform:   uppercase
  text-decoration:  decorative swashes on first letters (SVG or custom)

headline:
  font-family: CONTESTED
  font-size:        text-2xl
  font-weight:      font-semibold
  line-height:      leading-snug
  letter-spacing:   tracking-normal
  text-transform:   uppercase
  text-decoration:  none

title:
  font-family: CONTESTED
  font-size:        text-lg
  font-weight:      font-medium
  line-height:      leading-relaxed
  letter-spacing:   tracking-tight
  text-transform:   normal-case
  font-style:       normal

body:
  font-family: CONTESTED
  font-size:        text-sm
  font-weight:      font-normal
  line-height:      leading-loose
  letter-spacing:   tracking-normal
  text-transform:   normal-case

label:
  font-family:      sans-serif (Helvetica, Arial)
  font-size:        text-xs
  font-weight:      font-medium
  line-height:      leading-none
  letter-spacing:   tracking-tighter
  text-transform:   uppercase
  font-variant-numeric: tabular-nums (for soundings)

**Notes:** Water features use italicised serif (body role with `font-style: italic`). Soundings (label role) are upright sans‑serif 4.5–6pt equivalent. Display type supports curved baselines along coastlines via SVG textPath.

## 5. Elevation

Flat depth model — no shadow hierarchy. All surfaces are on the same plane.
Stacking context omitted; single-plane layout. (All providers agree.)

## 6. Spacing & Sizing

padding:
  component-internal:  p-1 (tight, chart-constrained)
  section-internal:    p-2 (majority) or p-4 (single provider: crof-glm)
  page-edge:           p-3 (within neatline border) [unverified]

margin:
  between-components:  gap-1
  between-sections:    gap-2

component-heights:
  sm:   h-6 (e.g., sounding label)
  md:   h-8 (interactive button)
  lg:   h-10 (navigation bar)

icon-size:       w-4 h-4 (system icons like compass rose, anchor)
avatar-size:     not applicable

## 7. Borders

border-radius:
  default:     rounded-none (all corners sharp, as on printed charts) — unanimous

border-width:
  default:     border (1px) for neatline and component outlines
  emphasis:    border-2 for focus rings, active graticule lines, accent borders

border-style:  border-solid for most; border-dashed for depth contours; border-dotted for rhumb lines and channel markers

border-image:  conditional — ornamental borders for title panel: use SVG decorative swashes (crof-deepseek) or repeating geometric pattern (single provider). CONTESTED:§7.border_image_ornamental — providers diverged on need and implementation.

clip-path:     conditional — compass rose (polygon), lighthouse symbol (circle), wreck symbol (plus sign). (Agreed by majority.)

## 8. Opacity

disabled-state:     opacity-40 (majority) or opacity-50 (single provider: crof-kimi)
ghost/secondary:    opacity-60
overlay/scrim:      opacity-50 (modal backgrounds)
hover-feedback:     opacity-70 (on interactive elements)

browser chrome:
  selection:
    background: rgba(140, 47, 79, 0.25)  // primary red at low opacity
    color:      #FFFFFF (majority) or inherit (single)
  scrollbar:
    style:      thin (~6px) dark track
    track:      #E8E0D0 (container)
    thumb:      #6B6B6B (outline-variant)
    thumb-hover: #3A3A3A (on-surface)

## 8.5. Visual Effects

### 8.5.0 — Physical Material Model

material-model:    paper — mid‑20th‑century printed nautical chart stock, off‑white aged paper with grain and foxing

global-filter:     none — no top-level CSS filter; colour rendering relies on paper base tint and subsequent texture layers

global-overlay:    Paper grain via SVG feTurbulence on body::before (baseFrequency 0.65–0.8, numOctaves 3, monochrome, blend overlay opacity-5) as defined in §8.5d

rendering-flags:
  font-smoothing:  antialiased — serif type requires smooth rendering for legibility
  image-rendering: auto — no pixel‑art or CRT constraints
  text-rendering:  auto — standard quality/speed trade-off

### 8.5d — Texture & Noise Simulation

**Paper Grain (subtle):**
technique:    SVG feTurbulence (majority)
parameters:   baseFrequency: 0.65–0.8, numOctaves: 3, type: fractalNoise
surface:      full-page canvas
intensity:    barely perceptible (opacity 0.04–0.05)
blend:        mix-blend-mode: overlay, opacity-5
color:        monochrome grey
animation:    none
tailwind-approximation: no native equivalent

**Ink Spread (halation):**
technique:    SVG feGaussianBlur or CSS text-shadow on text/line elements at low opacity
parameters:   stdDeviation: 0.3–0.5px
surface:      fine type, soundings, hachures
intensity:    barely perceptible
blend:        mix-blend-mode: multiply, opacity-10
color:        #3A3A3A
animation:    none
tailwind-approximation: text-shadow: 0 0 0.3px currentColor (approximate)

**Foxing & Age Stains:**
technique:    CSS radial-gradient or SVG ellipse with blurred edges, positioned at page edges (majority); optional water stain (crof-glm)
parameters:   multiple 20–80px radius spots at irregular locations
surface:      full-page canvas background layer
intensity:    moderate (visible at full size)
blend:        mix-blend-mode: multiply, opacity-15
color:        #8C6E4E (brownish)
animation:    none
tailwind-approximation: no native equivalent

**Compositing stack for full-page background:**
layer 0: surface #F4ECD8
layer 1: foxing spots (multiply, opacity-15)
layer 2: paper grain (overlay, opacity-5)

**Halftone Dot Pattern (land tints):**
technique:    CSS radial-gradient repeating pattern (majority)
parameters:   dot size ~85–100 lpi equivalent (≈0.25mm), spacing ≈0.3mm
surface:      land mass fills
intensity:    moderate
blend:        multiply, opacity-10 to opacity-15
color:        tinted to land buff
animation:    none
tailwind-approximation: no Tailwind native equivalent
## 9. Components

**Icon Vocabulary:**
system:       Custom glyphs from UKHO symbology (compass rose, lighthouse, wreck, buoy, anchor)
size:         w-4 h-4 to w-6 h-6
color:        Inherits currentColor for on-surface, or fixed roles (primary for lighthouses)
treatment:    No filter; flat but with ink-spread halation on fine strokes
restrictions: Never use abstract modern icons; always derive from chart symbols

**Buttons**
- **Primary button:** Rectangular, `rounded-none`, `border` (#3A3A3A), surface `#F4ECD8` with `on-surface` text. Hover: surface darkens to `#E8E0D0`. Active: border to `border-2` and text to primary red. Disabled: opacity-40.
- **Secondary button:** Outline only (no fill), `border` (#6B6B6B), text `on-surface`. Hover: fill appears with `surface-container`. Active: border to primary red.
- **Destructive button:** Surface primary red, text white, same geometry.

**Cards / Panels**
- **Chart Card:** `rounded-none`, `border` (#3A3A3A), fill `surface` or `tertiary` for land. Internal padding `p-2`. Optional neatline border inside with ticks. Elevation none.
- **Inset Panel:** `rounded-none`, `border` (#6B6B6B dashed), fill `surface-container`, positioned with `p-1`.

**Navigation**
- **Top bar / header:** Thick bottom border (`border-b-2`, #3A3A3A). Logo/compass rose left, right alignment. Active link: underline via hachure line (SVG). No background fill beyond paper.
- **Sidebar (optional):** Vertical list of place names using serif headline, with depth soundings after name. Active: magenta underline.

**Inputs / Forms**
- **Text input:** `rounded-none`, `border` (#6B6B6B), fill `surface`. Focus: `ring-2 ring-primary` (#8C2F4F) with inset shadow. Label (serif body) above.
- **Select / dropdown:** Same as text input, with down arrow icon (anchor symbol). Options styled as chart legend items.

**Style-Native Primitives**
1. **Compass Rose navigation widget** — 8‑point star with N marker, interactive rotation (rotate on hover). Uses `clip-path: polygon(...)`.
2. **Depth contour lines** — Dashed border pattern used as separators, decorative dividers between sections.
3. **Soundings badge** — Small sans-serif number inside a thin circle (`rounded-full`), positioned near coastlines in layout.
4. **Light marker** — Red dot (12px circle) with `light-characteristic` label (e.g., "Fl(2) 15s"). Used as notification dot or status indicator.
5. **Wreck totem** — Plus sign (+) with surrounding dashed border; used for error/alert emphasis.
6. **Title panel** — Container at bottom left with ornate border (SVG swashes), chart number, scale. Used as branding block.

## 10. Layout

- **Spacing cadence:** Tight, based on p-1/gap-1 grid. Component clusters spaced by p-2. Section breaks via neatline border (no extra white space).
- **Grid tendency:** Cartesian graticule—lines at regular intervals (longitude/latitude) serve as absolute positioning guides. Use CSS grid with explicit column counts (e.g., 12-column grid, but with 5° degree intervals for rhythm).
- **Density:** High. Aim for 80%+ fill; avoid large voids except in open-sea areas.
- **Section separation:** Neatline border (1px #3A3A3A) around all chart content. Internal sections separated by thin dashed lines (depth contours) or hachure blocks.
- **Alignment philosophy:** Top-left to bottom-right reading order, with title panel and legend always at the bottom. Text aligns with graticule lines. Curved labels follow geographic features.
- **Breakpoint behavior:**
  - 375px: Stack title panel vertically; remove graticule ticks except cardinal ones; compress navigation to hamburger (compass rose icon). Reduce font sizes by one step.
  - 768px: Maintain full graticule; show two-column layout (main chart + smaller inset panel). Keep full neatline.
  - >1024px: Add optional third column for tide tables or legend.

**Motion:**
transition-duration:        150ms (compositing), 300ms (layout shifts)
transition-timing-function: ease-out
transition-property:        opacity, color, background-color, border-color (no transforms)
transition-delay:           none
transition-behavior:        allow-discrete

animation:
  - compass-rose-pulse: opacity 1→0.7→1 over 2s ease-in-out, trigger: on-hover (subtle breathing)
  - tide-table-fade: opacity 0→1 over 500ms ease-out, trigger: on-scroll-enter

transform-at-rest:          all elements rest at transform: none
transform-on-interact:      none (no scaling, no rotation except compass rose static)

## 11. Design System Notes

### 11a. Use Constraints
**Appropriate for:** Nautical-themed interfaces (maritime apps, sailing dashboards, weather stations), travel-related editorial, historical reenactment/educational tools, game UIs for sea voyaging, decorative maps.  
**Wrong for:** Corporate intranets, financial dashboards, medical interfaces, any context requiring high contrast pure white backgrounds, fast-paced action games.

### 11b. Prompt Phrases
1. "A vintage nautical chart aesthetic with muted paper tones, fine hachured coastlines, and a compass rose."
2. "Serif type labels that curve along geographic contours, with italicised water features."
3. "Paper grain, ink bleed, and foxing as subtle texture overlays—no pure whites."
4. "Magenta overprints for warnings, cyan-blue depth contours for shallow areas."
5. "Neatline border with latitude/longitude ticks and minute marks."
6. "Lighthouse markers as red dots with light characteristics (Fl(2) 15s)."
7. "Soundings as small sans-serif italic numbers, spaced densely near shorelines."
8. "Title panel with decorative swashes, placed at lower left or right corner."

### 11c. Do / Avoid

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description. 8 rules total.

rule: Colour palette must be drawn from muted earth and sea tones found on 20th-century UKHO charts — no bright or saturated hues.
do:   Use off-white #F4ECD8 (paper), buff #D4C9A0, blue-grey #6B8E9B, madder red #8C2F4F. All colors have chroma < 30 in Lab.
avoid:Neon or high-saturation colours such as #FF0000, #00FF00, or any hex with saturation > 70%.

rule: Every surface must convey physical print — paper grain and ink spreading effects are required.
do:   Apply paper grain via SVG feTurbulence at opacity-3 to opacity-10 on background surfaces. Add ink-halation blur (0.3px) on thin text or fine lines.
avoid:Pure flat surfaces with no texture — no grain, no ink bleed, no halation.

rule: Serif typefaces must be used for all land labels and headlines; sans-serif is restricted to soundings and technical annotations.
do:   Use a serif (e.g., Times New Roman or similar) for place names, headings, and navigational text. Soundings use sans-serif italic (e.g., Arial italic) at small sizes.
avoid:Using sans-serif for body text or display headlines — that reads as modern digital, not period chart.

rule: Every hero or primary view must include a compass rose or graticule element to establish orientation.
do:   Place an 8-point compass rose (SVG polygon) in the upper-right or centered. Graticule lines with degree ticks at the edges.
avoid:Symmetrical layout with no directional cues — no compass, no graticule, no arrow.

rule: Colour layers must be slightly misregistered to simulate printing process — a 0.1–0.2px offset is standard.
do:   Apply a shift of 0.15px on the magenta channel relative to black. Use CSS `mix-blend-mode: multiply` on overlays.
avoid:Perfect alignment of colour layers — no offset, no misregistration.

rule: Layout density must be high — avoid large empty voids unless they represent open sea.
do:   Fill 80%+ of the canvas with chart elements. Use soundings, depth contours, buoys, and labels to populate areas.
avoid:Large empty spaces without purpose — no dead zones, no excessive margins.

rule: Depth contours must be rendered as dashed lines, not solid lines.
do:   Use `border-dashed` or `stroke-dasharray="4 2"` for depth contour lines at intervals. Solid lines reserved for coastlines and neatline.
avoid:Solid lines for everything — contours lose their cartographic meaning.

rule: A neatline border with latitude/longitude ticks is mandatory on all chart panels.
do:   Add a 1px solid #3A3A3A border around chart content, with minute ticks every 1° interval on the inner edge.
avoid:Borderless or full-bleed layouts — no neatline, no ticks.

### 11d. Variation Bounds
1. **Positive vs. negative space:** Range from chart with large land mass (dominant land tint) to open-ocean view (more sea surface). Adjust ratio of `tertiary` to `surface`.
2. **Clean vs. worn:** Vary intensity of paper grain (opacity-2 to opacity-10), foxing (none to heavy), and colour misregistration (0px to 0.2px offset).
3. **Authentic vs. remix:** Keep actual UKHO symbology (light characteristics, buoy shapes) or replace with fantasy names and coastlines. Remix can use decorative overlays not on real charts.
4. **Detail density:** Scale from sparse (only main buoys and depth contours) to dense (every rock, light, obstruction). Control number of soundings shown.
5. **Era variant:** Use only magenta overprints (pre-1950s) or include cyan-blue shallow water tints (later 20th-century). Affects color palette usage.

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts. Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
A single chart panel at default state: surface `#F4ECD8` fills the canvas, bounded by a 1px solid #3A3A3A neatline border with minute ticks along all four edges. A compass rose (8-point star, black with red N marker) is positioned in the upper-right quadrant, scale 56px. The primary content area shows a coastal region: land mass filled with `tertiary` (#D4C9A0 buff), sea surface left as `surface` with a few depth soundings (sans-serif italic #3A3A3A, 11px) and dashed depth contour lines (1px dashed #6B8E9B). A single lighthouse marker (red 12px circle, label "Fl(2) 15s" in serif 9px) marks a hazard. The title panel sits at bottom-left: ornate SVG swash border, chart number "CHART 1234" in serif 14px bold, scale "1:25 000". Paper grain texture overlaid at opacity-4. No pure white anywhere.

### 11e.ii — Maximum Expressiveness
Full chart with dense annotation: land mass at `tertiary`, coastline in 2px solid #3A3A3A with fine hachure lines perpendicular to shore. Multiple depth contours (dashed #6B8E9B, 1px) at 5m intervals, 20+ soundings spread across the sea area. Buoy symbols (small triangles with labels) in shipping channel. Two light markers (red dots) with flashing characteristics. A wreck symbol (plus sign with dashed border) in the northwest. Magenta overprint warning note in upper-left: "WRECK — DANGER" in serif italic 12px magenta (#8C2F4F). At bottom-right, a tide table panel (separate neatline border, 2-column grid) showing high/low times in serif 10px. The compass rose is animated with a subtle pulse (opacity 1→0.7→1, 2s ease-in-out). Paper grain at opacity-8, slight colour misregistration visible on the magenta note (0.15px offset). Foxing spots randomly distributed at opacity-3. Graticule lines at 1° intervals with black minute marks. Title panel full: chart number, scale, edition, and decorative swashes in SVG.

### 11e.iii — Data Context
When the system is used for sailing dashboards or weather stations, the same visual language adapts to data: a status panel replaces the chart area. Surface remains `#F4ECD8` with neatline border. Data is displayed as a series of soundings-style metric cells: each cell has a serif label (e.g., "WIND SPEED", 11px, #3A3A3A) and a large sans-serif value (e.g., "14 kn", 24px italic, #3A3A3A), aligned in a dense grid. Depth contour dashes become separator lines between rows. The compass rose persists as a directional indicator (shows wind direction via animated rose). Status markers: lighthouses change colour to indicate warning levels — red for critical, cyan for caution, buff for normal. A tide table (two-column, serif) shows predicted heights as a data detail. Paper grain and ink effects remain at reduced opacity (opacity-3). No bar charts or donuts — only typographic data capsules, using the chart's own soundings logic.

### 11f. Sources

This subject has minimal verified imagery. The visual claims below should be treated with caution.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** No documented identity description exists for **Admiralty Chart 20C UKHO Standard**. No dates, designer, foundry, or period are recorded in the forensic seed. The subject name itself is the only available attribution.

**Verified imagery sources.** 1 URLs verified against institutional servers, distributed across:
- UK Hydrographic Office — 1 URL(s)

No notable specific sources were provided. Key references include no institution's record, as no URLs or references were supplied.

**Named typefaces.** The typography of this style is attested as:
- (none attested)

**Honest gaps.** The most significant gap is the complete absence of any identity description, imagery references, or typeface data. This leaves the source's provenance and visual character entirely undocumented. No documented gaps were recorded by the forensic pipeline.
