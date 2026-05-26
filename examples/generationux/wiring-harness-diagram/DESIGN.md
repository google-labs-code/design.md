---
version: alpha
name: "Wiring Harness Diagram"
description: "A hyper-functional, densely annotated wiring harness schematic style grounded in postwar engineering drafting standards — pure vector diagram logic with orthogonal routing, monospace labels, and functional wire color conventions."
colors:
  canvas: "#FFFFFF"
  canvas-alternate: "#F5F6F8"
  canvas-blueprint: "#003366"
  wire-power: "#E53935"
  wire-ground: "#212121"
  wire-signal: "#1E88E5"
  wire-sensor: "#FDD835"
  connector-outline: "#424242"
  connector-cavity: "#F5F5DC"
  label-text: "#000000"
  accent-diagnostic: "#FF6F00"
typography:
  display:
    fontFamily: "monospace"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0.05em
    textTransform: "uppercase"
  headline:
    fontFamily: "monospace"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0em
    textTransform: "uppercase"
  title:
    fontFamily: "monospace"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.375
    letterSpacing: 0em
    textTransform: "uppercase"
  body:
    fontFamily: "monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0em
    textTransform: "uppercase"
  label:
    fontFamily: "monospace"
    fontSize: "10px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: -0.025em
    textTransform: "uppercase"
rounded:
  default: "0px"
  card: "0px"
  button: "0px"
  input: "0px"
  chip: "0px"
spacing:
  component-internal: "4px"
  section-internal: "8px"
  page-edge: "16px"
  gap-component: "8px"
  gap-section: "16px"
  height-sm: "24px"
  height-lg: "64px"
  icon: "16px"
components:
  connector:
    backgroundColor: "{colors.connector-cavity}"
    rounded: "{rounded.default}"
  legend-box:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.label-text}"
    rounded: "{rounded.default}"
    padding: "16px"
  metric-cell:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.label-text}"
    rounded: "{rounded.default}"
    padding: "8px"
  splice-point:
    backgroundColor: "{colors.label-text}"
    size: "6px"
  signal-bar:
    backgroundColor: "{colors.connector-outline}"
    height: "6px"
provenance:
  coverage_status: "complete"
  identity_description: "The slug `wiring-harness-diagram` is ambiguous. It does not refer to a single branded visual identity, system, or artefact, but to a genre of technical illustration: the schematic diagram of wire routing and connections used in electrical engineering, automotive, aerospace, and industrial contexts."
  manual_enrichment_required: false
  imagery_count: 5
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "www.thehenryford.org"
      count: 1
    - host: "www.sae.org"
      count: 1
    - host: "www.fordservicecontent.com"
      count: 1
    - host: "www.asme.org"
      count: 1
    - host: "www.khanacademy.org"
      count: 1
  imagery_urls:
    - url: "https://www.thehenryford.org/search?Tab=collections"
      host: "www.thehenryford.org"
      institution: "The Henry Ford Museum of American Innovation, Dearborn, MI"
      confidence_original: low
    - url: "https://www.sae.org/standards/content/as50881/"
      host: "www.sae.org"
      institution: "SAE International"
      confidence_original: low
    - url: "https://www.fordservicecontent.com/"
      host: "www.fordservicecontent.com"
      institution: "Ford Motor Company (historical publications)"
      confidence_original: low
    - url: "https://www.asme.org/codes-standards/find-codes-standards/y14-2-line-conventions-lettering"
      host: "www.asme.org"
      institution: "ASME"
      confidence_original: low
    - url: "https://www.khanacademy.org/humanities/special-topics/design-drafting/mechanical-drafting"
      host: "www.khanacademy.org"
      institution: "Khan Academy"
      confidence_original: low
  typefaces_attested:
    - name: "Leroy lettering system"
      foundry: "Keuffel & Esser"
      year: null
      google_fonts: null
      attestation: "unknown"
    - name: "Standard Engineering Lettering"
      foundry: null
      year: null
      google_fonts: null
      attestation: "attested"
    - name: "Futura Bold"
      foundry: null
      year: null
      google_fonts: "Jost"
      attestation: "inferred"
    - name: "Helvetica Medium"
      foundry: null
      year: null
      google_fonts: "Inter"
      attestation: "inferred"
    - name: "ROMANS"
      foundry: null
      year: null
      google_fonts: null
      attestation: "unverified"
    - name: "HELV"
      foundry: null
      year: null
      google_fonts: null
      attestation: "unverified"
  flags:
    - "1_robots_disallowed_urls"
  honest_gaps:
    - "1. **No specific primary artefact identified** – the record relies on general practice. A single surviving drawing with known accession number would anchor claims."
---
# Design System: Wiring Harness Diagram

## 0. Taxonomy & Identity

entity-type:        interface / system / environment
artefact-family:    map / atlas / chart / diagram
technique:          digital vector
movement-lineage:   vernacular commercial style
era:                postwar
geography:          platform-neutral
domain:             industrial / engineering / maintenance
formal-traits:      grid-based, diagrammatic, schematic, informational, utilitarian, geometric, dense, clean
color-logic:        spot-color
typography-mode:    monospace
texture:            smooth
function:           instruct
provenance:         revival / homage

## 1. Overview

This style simulates a technician's wiring harness schematic – a hyper‑functional, densely annotated diagram where clarity and traceability are everything. The aesthetic is grounded in postwar engineering drafting standards (MIL‑STD, ISO) and CAD vector output, prioritizing logical routing over physical realism. The emotional tone is neutral, precise, and purely informational; there is no decorative intent.

**What makes it recognizable:** every wire starts and ends at a connector, terminal, or junction — no floating lines; orthogonal routing with 90° or 45° bends (never freehand curves); connectors are simple geometric outlines (circular, rectangular, trapezoidal) with numbered pins; labels are all‑caps monospace placed adjacent to each wire at least once per segment; a legend box and title block occupy the lower‑right corner; non‑connected crossings use half‑circle bump arcs; a sparse dash‑pattern vocabulary (solid, dashed, dotted) differentiates wire function.

**What would break it:** freehand curves, unlabeled wires, more than three ink colors, decorative flourishes, gradients, dark themes (except optional blueprint variant), lines without connection points.

**Optional texture layers** (paper grain, ink bleed, blueline cyan fading, grid overlay) can be added for simulated printed realism, but the core is always crisp, orthogonal vector geometry.

## 2. Constants

Light Mode:   yes (primary) — white, very light gray, or blueprint blue canvas
Dark Mode:    no — the style does not support dark canvas; blueprint blue is the deepest acceptable background (see optional blueline variant in §8.5)
Responsive:   yes — breakpoints at 375px/768px adjust font size, wire spacing, and layout (single‑column scroll ↔ full hierarchical)
States:       Default, Hover (wire highlight / glow), Active (selected path), Disabled (dimmed connector/wire)
              Focus (connector pin ring) — optional interactive specific
              Error (accent highlight on fault path) — optional diagnostic
surface-simulation: none — clean digital vector; no physical material simulation; optional paper grain/ink bleed are additive layers, not the default surface.

## 2a — Interaction Model

hover-delta:        glow — wire highlight/glow on hover; connector outline brightens, wire stroke width increases 1px
active-delta:       color-shift — selected path shifts to accent-diagnostic orange; connector fill darkens
focus-style:        glow-ring — connector pin ring thickens and gains a soft glow (drop-shadow)
transition-duration:150ms — quick enough to feel responsive, slow enough to avoid jitter
transition-easing:  ease-in-out
exempt-animations:  none

## 3. Colors

The palette is based on conventional wire‑color standards. All hex values are [unverified]; no source citation provided.

canvas                  (#FFFFFF) — White: default diagram background surface
canvas-alternate        (#F5F6F8) — Very Light Gray: alternative diagram background
canvas-blueprint        (#003366) — Deep Blueprint Blue: blueprint-simulation background surface

wire-power              (#E53935) — Red: power supply lines
wire-ground             (#212121) — Black: ground / return paths
wire-signal             (#1E88E5) — Blue: data / control signals
wire-sensor             (#FDD835) — Yellow: sensor inputs
wire-shield             (#43A047 or #757575) — Green or Gray: shielded conductors

connector-outline       (#424242) — Dark Gray: connector body outlines
connector-cavity        (#F5F5DC) — Light Beige: pin cavity fills
label-text              (#000000) — Pure Black: wire labels, annotations, legend text
accent-diagnostic       (#FF6F00) — Orange: diagnostic branches (use sparingly; max three ink colors total)

No more than three total ink colors (including black) in a single diagram; the accent may be used on at most one diagnostic branch.

## 4. Typography

All type roles use monospace fonts. Specific typeface names are contested (see contestation map). The following generic specifications apply:

display:
  font-family:      monospace
  font-size:        (contested — see §2)
  font-weight:      font-bold
  line-height:      leading-tight
  letter-spacing:   tracking-wide
  text-transform:   uppercase

headline:
  font-family:      monospace
  font-size:        (contested)
  font-weight:      font-semibold
  line-height:      leading-tight
  letter-spacing:   tracking-normal
  text-transform:   uppercase

title:
  font-family:      monospace
  font-size:        (contested)
  font-weight:      font-medium
  line-height:      leading-snug
  letter-spacing:   tracking-normal
  text-transform:   uppercase

body:
  font-family:      monospace
  font-size:        (contested)
  font-weight:      font-normal
  line-height:      leading-normal
  letter-spacing:   tracking-normal
  text-transform:   uppercase (for identifiers); normal-case for notes

label:
  font-family:      monospace
  font-size:        (contested)
  font-weight:      font-normal
  line-height:      leading-none
  letter-spacing:   tracking-tight
  text-transform:   uppercase

Pin numbers use a reduced size with a short leader line ending in a filled circle.

## 5. Elevation

Flat depth model — no shadow hierarchy.
All elements rest on the canvas plane. No elevation levels.

## 6. Spacing & Sizing

padding:
  component-internal:  p-1 (4px) — inside connector boxes, pin label offset
  section-internal:    p-2 (8px) — between diagram regions
  page-edge:           p-4 (16px)

margin:
  between-components:  gap-2 (8px) — between connectors, splice points, junction nodes
  between-sections:    gap-4 (16px)

component-heights:
  sm:   h-6 (24px) — small terminal, 2–4 pin header
  md:   (contested — see §6.md)
  lg:   h-16 (64px) — high‑density header, title block

icon-size:       w-4 h-4 (16px) — ground symbol, splice dot, fuse rectangle, pin indicators
avatar-size:     not applicable

wire-spacing:
  bundle-gap:         gap-1 (4px) — parallel wire spacing within a routed bundle
  corridor-max:       12 wires split to sub‑diagram

## 7. Borders

border-radius:
  default:     rounded-none — sharp corners everywhere
  card:        rounded-none — legend box may use optional rounded-sm
  button:      rounded-none
  input:       rounded-none
  chip/badge:  rounded-none

border-width:
  default:     border (1px solid) — wire outlines, connector outlines
  emphasis:    border-2 (2px solid) — title block frame, active wire highlight, primary power paths

border-style:  border-solid — wires use line dash/pattern via stroke-dasharray, not border

clip-path:     polygon() for trapezoidal D‑sub connectors (optional)

## 8. Opacity

disabled-state:     opacity-40 — deactivated connector pins, dead wires
ghost/secondary:    opacity-60 — context wires in highlighted-view, alternative routing
overlay/scrim:      opacity-50 — dimmed background during pinout callout focus (interactive)
hover-feedback:     (thickened outline / glow, not opacity change)

## 8.5 — Visual Effects (conditional)

### 8.5a — Color Manipulation

Activate only for blueline simulation (optional).

filter:
  (not used directly; blueline achieved through SVG filter stack)

mix-blend-mode:
  multiply:      on paper texture overlay for ink bleed simulation
                 surface: full page, opacity-30

background-blend-mode:  not used

### 8.5d — Texture & Noise Simulation

Optional, for printed‑paper realism.

paper-grain:
  technique:    SVG feTurbulence (fractalNoise)
  parameters:   baseFrequency: 0.65, numOctaves: 3
  surface:      full-page canvas
  intensity:    barely perceptible (opacity 5%)
  blend:        overlay, opacity-5
  color:        monochrome
  animation:    none

ink-bleed:
  technique:    CSS filter blur on text and lines (0.5px) + mix-blend-mode multiply
  surface:      all text and wire paths
  intensity:    barely perceptible
  blend:        multiply, opacity-30
  color:        n/a
  animation:    none

background-grid:
  technique:    repeating-linear-gradient (horizontal + vertical crosshatch)
  parameters:   10mm squares at full scale
  surface:      full-page canvas
  intensity:    barely perceptible (10–15% opacity)
  blend:        normal
  color:        #000000
  animation:    none
## 9. Components

**Icon vocabulary**
system:        custom geometric symbols: ground (3 descending lines), splice (filled circle),
               fuse (rectangle with S‑shaped line), resistor (zigzag), terminal (open circle / U‑shape)
size:          w-4 h-4 (16px) for most; ground symbol h-6 w-4
color:         inherit (black or connector-outline) – no fill
treatment:     purely flat, no filter or glow
restrictions:  no photorealistic icons, no gradients, no 3D

**Image & media treatment** (not used – no raster imagery)

**Connector**
- Geometry: round (circular), rectangular (header), trapezoidal (D‑sub)
- Border: border-2 solid connector-outline
- Fill: bg-connector-cavity for pin cavities
- Pins: numbered with leader lines (small filled circle at text side)
- Corner: rounded-none
- States: Default (neutral outline), Active (border-2 in accent or wire-color), Disabled (opacity-40)

**Wire segment**
- Path: straight line with 45° or 90° bends (SVG path with M, L; corner radius 0–3px consistent per diagram)
- Line style:
  - Signal: solid, stroke label-text/wire-signal, stroke-width 1.5
  - Power: solid, stroke wire-power, stroke-width 2
  - Ground: dashed (stroke-dasharray 4 2), stroke wire-ground
  - Shield: dotted (stroke-dasharray 1 3), stroke wire-shield
- Label adjacent: all caps, wire ID + gauge + color code, text orientation matches wire direction
- Hover (interactive): stroke-width increases to 4, soft glow via drop-shadow(0 0 4px currentColor)
- Non-connected crossings: half‑circle bump arc (radius ~4px) on passing wire

**Splice point**
- Filled circle: r=3px, fill label-text
- At wire junctions, no border

**Legend box**
- Location: lower‑right corner
- Border: border-2 solid connector-outline-primary
- Fill: bg-white or bg-surface-container-lowest
- Content: line‑style definitions, color key, revision, date, scale
- Corner: rounded-none (optional rounded-sm)

**Title block**
- Part number, revision letter, date, scale
- All caps, monospace, font-size (contested)
- Bottom‑right inside page border, above legend box

**Continuation flag**
- Arrow symbol (→ or ↓) with letter, placed at wire end to indicate continuation to another page
- Color: label-text or accent-diagnostic

**Data Display Components:**

metric-cell:
  Background: bg-white or bg-surface-container-lowest, border-2 solid connector-outline.
  Label: monospace uppercase text-xs, color label-text.
  Value: monospace bold text-lg, color label-text.
  Delta: monospace text-sm, positive in wire-signal blue, negative in accent-diagnostic orange.
  No glow or drop-shadow — flat vector.

signal-bar:
  Track: 1px solid border connector-outline, height 6px.
  Fill: solid area in wire-signal blue, no texture.
  Border: border-solid connector-outline on track.

status-cell:
  ok:   border-left-4 solid wire-signal blue, no fill, text label-text.
  warn: border-left-4 solid yellow, text label-text.
  err:  border-left-4 solid error-red, text error-red or with exclamation icon.
  No background fill for status cells — only border indicator plus text.

data-table-row:
  Alternating: odd bg-white, even bg-surface-container-lowest (very light gray).
  Cell borders: border-b solid 1px connector-outline.
  Labels monospace text-xs, values monospace text-sm.

chart-surface:
  Background: bg-white.
  Grid lines: 1px solid outline at 25/50/75/100% heights, color connector-outline at 20% opacity.
  Axis labels monospace text-xs, color label-text.
  Line chart: path with stroke wire-signal blue, stroke-width 1.5, no fill, no drop-shadow.
  Data dots: r=2.5px fill wire-signal blue.

## 10. Layout

- **Flow direction:** left‑to‑right or top‑to‑bottom from source (battery, ECU) to loads
- **Grid:** invisible alignment grid; connectors align on grid lines, pins face wire direction; optional background grid at 10–15% opacity
- **Wire routing:** orthogonal (horizontal/vertical) with 45° or 90° bends; corner radius 0–3mm consistent
- **Wire bundles:** parallel runs with consistent gap (4px); max 12 wires per corridor; beyond split to sub‑diagram
- **Crossings:** non‑connected crossings use small half‑circle bump arc (gap arc) to indicate no connection
- **Page border:** optional, with "PAGE 1 OF X" footer
- **Breakpoints (responsive):**
  - 375px: single‑column vertical scroll; wires re‑route top‑to‑bottom; sub‑diagrams split at corridor limit; font sizes reduce one step
  - 768px: two‑column grid, left‑to‑right flow; title block remains bottom‑right; full detail

**Motion (interactive digital only)**
motion:
  transition-duration:        200ms (highlight), 1s (draw‑in)
  transition-timing-function: ease-in-out (highlight), linear (draw‑in)
  transition-property:        stroke-dashoffset, stroke-width, filter, opacity

  animation:
    wire-draw-in:   stroke-dashoffset 100% → 0% over 1s linear, trigger: on-load
    hover-glow:     stroke-width from 1.5 to 4, filter drop-shadow added, trigger: on-hover
    pin-pulse:      opacity 1 → 0.6 → 1 over 1000ms ease-in-out, trigger: on-active (diagnostic mode)

  transform-at-rest:               none
  transform-on-interact:           none (highlight via stroke-width and filter)

## 11. Design System Notes

### 11a. Use Constraints

- **Appropriate for:** technical documentation (service manuals, wiring diagrams), engineering dashboards, diagnostic interfaces, industrial control panels, schematics, CAD views
- **Wrong for:** consumer mobile apps, marketing websites, editorial layouts, game UI, any context requiring warmth or emotional engagement

### 11b. Prompt Phrases

1. "Orthogonal wire routing with 90° or 45° bends — no curves."
2. "All connectors drawn as simple geometric outlines with numbered pins."
3. "All‑caps wire labels adjacent to each path segment: wire ID, gauge, color."
4. "Legend box in lower‑right corner: revision, date, line‑style key."
5. "Filled circle splices; three‑line ground symbol; rectangle‑with‑S fuse."
6. "Page border and 'PAGE 1 OF X' footer for printed appearance."
7. "Single accent color (orange) used on at most one diagnostic branch."
8. "No decorative elements, gradients, or 3D effects — pure vector diagram logic."
9. "Half‑circle bump arcs at non‑connecting wire crossings."
10. "Color logic follows convention: red for power, black for ground, blue for signal."

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description.

rule: Wire colors follow a strict functional convention that must never be overridden for decorative purposes.
do:   Use standard wire colors: red for power, black for ground, blue for signal, yellow for sensor, green/gray for shield.
avoid:Use decorative flourishes, drop shadows, skeuomorphic textures (except optional paper/blueline simulation) or dark themes (blueprint blue is the deepest acceptable background); more than three ink colors are also prohibited.

rule: Line dashes must be consistent to distinguish signal types.
do:   Keep line dashes consistent: solid for signal power, dashed for ground, dotted for shield.
avoid:Use freehand curves or any curved paths instead of consistent dash patterns.
```

```
rule: Connectors must align on an invisible grid with pins facing wire direction.
do:   Align connectors on invisible grid lines with pins facing wire direction.
avoid:Align connectors off-grid or with pins facing away from wire direction.
```

```
rule: Every diagram must include a legend for all line styles and symbols.
do:   Include a legend for all line styles and symbols (revision, date, line-style key).
avoid:Omit the legend — leaves readers to guess conventions.
```

```
rule: Bends and corners must use consistent radius throughout.
do:   Maintain consistent corner radius across all bends (0–3px as defined per diagram).
avoid:Mix sharp and rounded corners inconsistently.
```

```
rule: Wire corridors must be split to prevent congestion beyond 12 parallel runs.
do:   Split wire corridors when they exceed 12 parallel runs.
avoid:Allow more than 12 wires in a single corridor — reduces readability.
```

```
rule: Every wire segment must be labeled at least once.
do:   Label every wire segment with wire ID, gauge, and color code at least once.
avoid:Leave any wire unlabeled — essential information is missing.
```

```
rule: Animations are exclusive to interactive digital versions; print/PDF exports must be static.
do:   Restrict wire draw-in and other animations to interactive digital versions.
avoid:Animate wire draw-in on print/PDF export; motion must not appear on static exports.

### 11d. Variation Bounds

- **Density:** Minimal (few connectors, long straight runs) ↔ Dense (many splices, nested callouts, sub‑diagrams)
- **Rendering fidelity:** Clean CAD (perfect right angles, no artifacts) ↔ Hand‑drawn (slight line wiggles, uneven dashes, ink blobs, paper grain)
- **Color usage:** Monochrome (all black lines differentiated by dash pattern and text labels) ↔ Full color (wire‑color coded paths with legend)
- **Format:** Page‑oriented (single sheet hierarchical with title block, continuation flags) ↔ Scroll‑oriented (tall digital diagram with sticky title block)
- **Annotation level:** Bare schematic (no callouts) ↔ Fully annotated (pinouts, revision marks, continuation flags)

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts. Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
A single wiring diagram page on a white background (bg-white) with an optional blueline grid at 10–15% opacity. One rectangular header connector is positioned left, border-2 solid connector-outline, pin cavities filled bg-connector-cavity, pins numbered with leader lines. A single wire segment (solid, stroke wire-signal blue, stroke-width 1.5) exits the connector, routed with a 90° bend (corner-radius 2px) to a second connector. The wire carries an adjacent label in monospace uppercase: "12 AWG RED / BATT+". Legend box (lower-right, border-2 solid connector-outline-primary, bg-white) shows line-style definitions for solid (signal, power), dashed (ground), dotted (shield). Title block (bottom-right) lists part number, revision A, date, scale 1:1. No motion, no decorative effects — pure vector diagram logic.

### 11e.ii — Maximum Expressiveness
Five connectors of three geometries (rectangular headers, circular DIN connectors, a trapezoidal D‑sub) populate an orthogonal grid. Four wire types are present: two power wires (solid, wire-power red, stroke-width 2) running parallel, three signal wires (solid, wire-signal blue, stroke-width 1.5), one ground wire (dashed, wire-ground black, stroke-dasharray 4 2), and one shield wire (dotted, wire-shield gray, stroke-dasharray 1 3). Three filled-circle splices (r=3px, fill label-text) join wires. A fuse symbol (rectangle with S‑shaped line) appears on a power leg. One wire bundle of 8 runs transitions to a second bundle of 12 runs, then splits via a continuation flag (arrow with letter "A") to a sub-diagram. A single diagnostic branch uses accent-diagnostic orange for both wire and border. Page border with "PAGE 1 OF 3" footer. Interactive version: wire-draw-in animation (1s linear) on load, hover-glow (stroke-width 4 + drop-shadow) on wire segments, pin-pulse (opacity 1→0.6→1, 1000ms) on active diagnostic pins. Background grid visible at 15% opacity.

### 11e.iii — Data Context
The diagram adapts to a dashboard or status display: metric cells replace connectors. Each metric cell: bg-white, border-2 solid connector-outline, label in monospace uppercase text-xs (color label-text), value in monospace bold text-lg (color label-text). A delta indicator beside the value: positive in wire-signal blue, negative in accent-diagnostic orange. Status cells use border-left-4 color coding: ok (wire-signal blue), warn (yellow), err (error-red). A signal bar displays track (1px solid connector-outline, height 6px) and fill (solid wire-signal blue). Data table: alternating row backgrounds (white / bg-surface-container-lowest), cell border-bottom 1px solid connector-outline, labels monospace text-xs, values monospace text-sm. Chart surface: white background with grid lines (1px solid connector-outline at 20% opacity) at 25/50/75/100% heights; line chart with stroke wire-signal blue, stroke-width 1.5, no fill, data dots r=2.5px fill wire-signal blue. All elements remain flat — no glow, no drop-shadow, no texture.

### 11f. Sources

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** The **Wiring Harness Diagram** is a genre of technical illustration rather than a single branded artefact, with its documented use spanning the mid‑20th century to the present across electrical engineering, automotive, aerospace, and industrial contexts. It has no single attributed designer or foundry, but its visual conventions are historically associated with the **Leroy lettering system**, **Standard Engineering Lettering**, **Futura Bold**, **Helvetica Medium**, **ROMANS**, and **HELV** typefaces.

**Verified imagery sources.** 5 URLs verified against institutional servers, distributed across:
- The Henry Ford Museum of American Innovation, Dearborn, MI — 1 URL(s)
- SAE International — 1 URL(s)
- Ford Motor Company (historical publications) — 1 URL(s)
- ASME — 1 URL(s)
- Khan Academy — 1 URL(s)

Key references include general engineering drafting manuals and standards (e.g., ANSI Y14, ISO 1219), but no specific institutional record of a single named diagram is documented as a primary artefact.

**Named typefaces.** The typography of this style is attested as:
- Leroy lettering system (for Keuffel & Esser — attestation: unknown) — no Google Fonts substitute available
- Standard Engineering Lettering ( — attestation: attested) — no Google Fonts substitute available
- Futura Bold ( — attestation: inferred) — rendered here in Jost as the closest open substitute
- Helvetica Medium ( — attestation: inferred) — rendered here in Inter as the closest open substitute
- ROMANS ( — attestation: unverified) — no Google Fonts substitute available
- HELV ( — attestation: unverified) — no Google Fonts substitute available

**Honest gaps.** No specific primary artefact identified – the record relies on general practice. This ambiguity prevents precise dating, attribution, or verification of typical visual conventions against an authentic source. The absence of a surviving drawing with accession number leaves the description abstract. A single surviving drawing with known accession number would anchor claims.
