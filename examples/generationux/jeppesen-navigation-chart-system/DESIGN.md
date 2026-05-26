---
version: alpha
name: "Jeppesen Navigation Chart System"
description: "A cold, precise, and authoritative design system translating aeronautical navigation chart aesthetics into digital interfaces — off-white paper simulation, all-caps grotesque typography, thin vector linework, and a strictly functional palette of cyan, yellow, green, gray, and red."
colors:
  surface: "#F5F0E8"
  on-surface: "#333333"
  on-surface-variant: "#666666"
  primary: "#0072BC"
  on-primary: "#FFFFFF"
  secondary: "#FFD100"
  on-secondary: "#333333"
  tertiary: "#4D8B3B"
  on-tertiary: "#FFFFFF"
  error: "#CC0000"
  on-error: "#FFFFFF"
  outline: "#9A9A9A"
  outline-variant: "#D0D0D0"
  surface-container-low: "#F5F0E8"
typography:
  display:
    fontFamily: "Helvetica, Arial, sans-serif"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  headline:
    fontFamily: "Helvetica, Arial, sans-serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  title:
    fontFamily: "Helvetica, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  body:
    fontFamily: "Helvetica, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.375
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  label:
    fontFamily: "Helvetica, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.375
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  tabular:
    fontFamily: "Courier, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0em"
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
  gap-component: "4px"
  gap-section: "16px"
  height-sm: "24px"
  height-md: "32px"
  height-lg: "40px"
  icon: "16px"
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "#333333"
    rounded: "{rounded.button}"
    padding: "12px"
    height: "32px"
  button-primary-hover:
    backgroundColor: "#0072BC"
    textColor: "#FFFFFF"
    rounded: "{rounded.button}"
    padding: "12px"
    height: "32px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "#333333"
    rounded: "{rounded.button}"
    padding: "12px"
  card:
    backgroundColor: "#F5F0E8"
    rounded: "{rounded.card}"
    padding: "8px"
  input:
    backgroundColor: "transparent"
    textColor: "#333333"
    rounded: "{rounded.input}"
  input-focus:
    backgroundColor: "transparent"
    textColor: "#0072BC"
    rounded: "{rounded.input}"
  legend-box:
    backgroundColor: "#F5F0E8"
    rounded: "{rounded.card}"
    padding: "8px"
  airspace-overlay:
    backgroundColor: "#0072BC"
    rounded: "0px"
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
    - host: "airandspace.si.edu"
      count: 1
  imagery_urls:
    - url: "https://en.wikipedia.org/wiki/Jeppesen"
      host: "en.wikipedia.org"
      institution: "Wikipedia"
      confidence_original: high
    - url: "https://airandspace.si.edu/collection-objects/jeppesen-chart-1930/nasm_A19731416000"
      host: "airandspace.si.edu"
      institution: "Smithsonian National Air and Space Museum"
      confidence_original: high
  typefaces_attested:
    []
  flags:
    - "few_usable_urls"
    - "no_typography_extracted"
    - "no_colour_extracted"
    - "3_robots_disallowed_urls"
  honest_gaps:
    []
---

# Design System: Jeppesen Navigation Chart System

## 0. Taxonomy & Identity

entity-type:        interface / system / environment
artefact-family:    map / atlas / chart / diagram
technique:          digital vector [unverified]
movement-lineage:   vernacular commercial style [unverified]
era:                postwar [unverified]
geography:          US / Canada [unverified]
domain:             transport [unverified]
formal-traits:      grid-based, informational, utilitarian, dense [unverified]
color-logic:        spot-color [unverified]
typography-mode:    grotesque [unverified]
texture:            grainy, weathered [unverified]
function:           navigate [unverified]
provenance:         revival / homage [unverified]

## 1. Overview

The Jeppesen Navigation Chart System translates the visual language of aeronautical navigation charts into a digital-interface toolkit for wayfinding, data-dense dashboards, and technical interfaces. Its emotional register is cold, precise, and authoritative — every element exists for a functional reason. Rooted in mid-20th-century cartographic printing, it simulates an off-white paper substrate with thin, crisp vector linework (0.25–0.5 pt) and a severely limited palette of cyan, yellow, green, gray, and a warm accent. The system achieves its recognizability through relentless hierarchy: all-caps sans-serif labels, a grid of latitude/longitude ticks, color-coded airspace boundaries (dashed, dotted, solid), and compact data blocks framed by thin strokes. It is a style that trusts the user to parse complexity — density is not clutter when every mark carries information.

*   **What makes it recognizable:** off-white paper ground (#F5F0E8), cyan for water and controlled airspace, all-caps Helvetica/Arial labels, fine lat/lon grid, thin outline symbols, paper grain and fold crease artifacts.
*   **What would break it:** gradients, drop shadows, rounded corners, script or serif type, saturated or extraneous colors, decorative elements, motion with easing curves.
*   **Surface character:** simulates printed paper on thick stock — light grain, faint fold crease, soft shadow at sheet edges, intentional misregistration on critical color lines.
*   **Density:** moderate to high, with strict collision avoidance (no two labels within 1/8 inch).

## 2. Constants

Light Mode:   yes (primary – off-white paper simulation) [unverified]
Dark Mode:    no – the style is fundamentally light-ground; any dark variant would lose printed-chart fidelity [unverified]
Responsive:   yes – breakpoints at 375px and 768px govern label sizing and panel stacking; at 768px side panels appear [unverified]
States:       Default, Active (highlighted line), Hover (thin border show), Focus (0.5pt cyan outline), Disabled (opacity-40) [unverified]
surface-simulation: paper — off-white chart stock with grain, halftone dots, fold crease, and print misregistration artifacts

## 2a — Interaction Model

hover-delta:        color-shift — thin border (#9A9A9A outline gray or #0072BC cyan) appears on interactive elements; no opacity shift, no scale change, no shadow
active-delta:       offset-shift — highlighted route or waypoint line receives a parallel offset stroke in cyan (#0072BC) to create visual prominence; original line position maintained
focus-style:        color-border — 0.5pt solid cyan (#0072BC) outline on focused element; no ring, no glow, no inset
transition-duration:0ms — printed chart aesthetic; all state changes are instantaneous with no easing
transition-easing:  none
exempt-animations:  none — no keyframe animations exist in the system; all effects are static composites

## 3. Colors

All hex values are [unverified] — no cited sources found in providers.

| Role | Hex | Tailwind Class | Description |
|------|-----|----------------|-------------|
| **surface** | `#F5F0E8` | `bg-[#F5F0E8]` | Off-white paper background |
| **on-surface** | `#333333` | `text-[#333333]` | Primary text and linework (very dark gray, no pure black) |
| **on-surface-variant** | `#666666` | `text-[#666666]` | Secondary labels, legal notes |
| **primary** | `#0072BC` | `bg-[#0072BC]` | Cyan – water, controlled airspace, key annotations |
| **on-primary** | `#FFFFFF` | `text-white` | Text on cyan fills |
| **primary-container** | `#0072BC` at 40% opacity | `bg-[#0072BC]/40` | Water bodies, airspace fill tint |
| **secondary** | `#FFD100` | `bg-[#FFD100]` | Yellow – terrain shading, obstacle warnings |
| **on-secondary** | `#333333` | `text-[#333333]` | Labels on yellow/amber fills |
| **tertiary** | `#4D8B3B` | `bg-[#4D8B3B]` | Green – vegetation, terrain elevation fills |
| **on-tertiary** | `#FFFFFF` | `text-white` | White text on green fills |
| **error** | `#CC0000` | `bg-[#CC0000]` | Warning red – restricted areas, emergency frequencies |
| **on-error** | `#FFFFFF` | `text-white` | White text on red alerts |
| **outline** | `#9A9A9A` | `border-[#9A9A9A]` | Secondary boundaries, legend frames |
| **outline-variant** | `#D0D0D0` | `border-[#D0D0D0]` | Grid lines, faint separators |
| **surface-container-low** | `#F5F0E8` | `bg-[#F5F0E8]` | Same as surface – panels inherit paper (some providers propose a slightly darker variant; see contestation) |

**Area fill rules:** All fills are flat solid tints (no gradients) with a thin (#333333) 0.5pt outline. Use opacity variants: cyan area fills at 40% opacity, yellow terrain fills at 100%, green terrain fills at 100%. No two bright colors adjacent without a medium-gray separator line.

## 4. Typography

All labels are all-caps except mountain elevations (mixed case, rare). Numeric data (altitudes, frequencies, bearings) uses monospace/tabular figures. Kerning is tight (optical), no looser than `tracking-tight`. Line-height between stacked labels: exactly 1.2× font-size. Labels align left or right along horizontal baselines — never vertical. Labels offset slightly from the feature they describe, never overlapping.

### Primary typeface (grotesque sans-serif) [unverified]

| Role | font-family | font-size | font-weight | line-height | letter-spacing | text-transform |
|------|-------------|-----------|-------------|-------------|----------------|----------------|
| **display** | Helvetica, Arial, sans-serif | `text-2xl` | `font-normal` | `leading-tight` | `tracking-tight` | `uppercase` |
| **headline** | Helvetica, Arial, sans-serif | `text-xl` | `font-normal` | `leading-tight` | `tracking-tight` | `uppercase` |
| **title** | Helvetica, Arial, sans-serif | `text-base` | `font-normal` | `leading-tight` | `tracking-tight` | `uppercase` |
| **body** | Helvetica, Arial, sans-serif | `text-sm` | `font-normal` | `leading-snug` | `tracking-tight` | `uppercase` |
| **label** | Helvetica, Arial, sans-serif | `text-xs` | `font-normal` | `leading-snug` | `tracking-tight` | `uppercase` |

### Secondary typeface (monospace for numeric data) [unverified]

| Role | font-family | font-size | font-weight | line-height | letter-spacing | text-transform | font-variant-numeric |
|------|-------------|-----------|-------------|-------------|----------------|----------------|----------------------|
| **tabular** | Courier, monospace | `text-xs` | `font-normal` | `leading-none` | `tracking-normal` | `normal-case` | `tabular-nums` |

### Google Fonts substitute (for rendering pipelines) [unverified]

CONTESTED:§3.google_fonts_substitute — providers gave: [Arial (not a Google Font), no valid Google Font; no cited substitute]; re-stack required

**Exception:** Emergency frequencies use bold red (`font-bold`, `color-error`).

## 5. Elevation

Flat depth model — no shadow hierarchy. All surfaces sit on the same plane.

Light shadow simulation at chart edge (paper-artefact cue, not elevation):
  box-shadow: 0 1px 2px rgba(0,0,0,0.15) on the chart container.

Stacking context (for map layers, not UI stacks):
  background (terrain/water fills) → airspace fills → linework → labels → symbols

## 6. Spacing & Sizing

padding:
  component-internal:  p-1 (4px) for data blocks, legend boxes
  section-internal:    p-2 (8px) for legend panels
  page-edge:           p-4 (16px) = 5mm margin (¼ inch)

margin:
  between-components:  gap-1 (4px) between symbols and labels; gap-2 (8px) between data panels
  between-sections:    gap-4 (16px) between chart area and legend

component-heights:
  sm:   h-6 (24px) for small symbols (toggle chips)
  md:   h-8 (32px) for standard interactive targets
  lg:   h-10 (40px) for data block headers

icon-size:       w-4 h-4 (16px) for all map symbols, navaids
avatar-size:     not applicable

## 7. Borders

border-radius:
  default:     rounded-none (sharp corners throughout)
  card:        rounded-none
  button:      rounded-none
  input:       rounded-none
  chip/badge:  rounded-none

border-width:
  default:     border (1px) – for general borders, data panels
  emphasis:    border-2 (2px) – airspace boundaries, focus rings, selected items

border-style:
  default:     border-solid for primary boundaries
  dashed:      border-dashed for airways, advisory areas, special airspace boundaries
  dotted:      border-dotted for uncontrolled boundaries, magnetic variation lines

clip-path:     none – all shapes rectangular or polygonal via standard borders

## 8. Opacity

disabled-state:     opacity-40 (deactivated map layers, greyed-out toggles)
ghost/secondary:    opacity-60 (secondary annotation labels, non-active waypoint names)
overlay/scrim:      opacity-20 for area fills (e.g., 40% cyan for water); restricted area hash uses blended opacity
hover-feedback:     style avoids hover-based feedback beyond cursor change; use border change rather than opacity

**Browser chrome (for digital UI context):**

selection:
  background:  rgba(0, 114, 188, 0.25) — cyan tint at low opacity
  color:       #333333

scrollbar:
  style:       auto (no custom scrollbar – consistent with no-decorative treatment)
  width:       thin (6px)
  track:       #E8E2D8 or #F5F0E8
  thumb:       #9A9A9A

## 8.5. Visual Effects

The printed-chart realism demands a suite of subtle analog artefacts. These are composited in this order: base fill → halftone overlay → paper grain → fold crease → optional misregistration on airspace borders. All techniques are [unverified].

### 8.5.0 — Physical Material Model

material-model:    paper

global-filter:     sepia(0.05) brightness(1.02) — simulates the warm, slightly sun-aged tone of
                   Jeppesen chart stock; shifts the off-white ground toward its characteristic
                   creamy warmth without desaturating spot colors

global-overlay:    Paper grain via body::before pseudo-element:
                   SVG feTurbulence baseFrequency=0.65 numOctaves=3 fractalNoise
                   blend: mix-blend-mode overlay, opacity-5, position:fixed, z-index:9998,
                   pointer-events:none
                   Fold crease via body::after pseudo-element:
                   linear-gradient at vertical center: 2px band rgba(0,0,0,0.08) feathered to transparent
                   blend: multiply, opacity-15, position:fixed, z-index:9999, pointer-events:none

rendering-flags:
  font-smoothing:  antialiased — smooth vector rendering for crisp Helvetica labels
  image-rendering: auto — no pixel-art requirement; standard interpolation for chart imagery
  text-rendering:  auto — no performance override needed; standard legibility rendering

### 8.5d — Texture & Noise Simulation

**paper-grain**
technique:    SVG feTurbulence
parameters:   baseFrequency="0.65", numOctaves="3", type="fractalNoise"
surface:      full-page canvas (chart background)
intensity:    barely perceptible (opacity 3–5%)
blend:        mix-blend-mode: overlay, opacity-5
color:        monochrome (#000)
animation:    none
tailwind-approximation: no Tailwind native equivalent

**halftone-pattern**
technique:    CSS repeating-radial-gradient (simulated halftone dots) or repeating-linear-gradient (45° rosette)
parameters:   dot radius ~1.5px, spacing ~4px, approx 20% density; applied to all area fills
surface:      water, terrain, airspace fills
intensity:    moderate (dots visible on close inspection, not on overview)
blend:        mix-blend-mode: multiply, opacity-15
color:        dark gray (#333333) or black over flat colour
animation:    none
tailwind-approximation: no Tailwind native equivalent

**fold-crease**
technique:    CSS linear-gradient (horizontal or vertical line with feathered edges)
parameters:   gradient from 0% to 100% with a center band at #E0D8C8 or rgba(0,0,0,0.08) over 2px
surface:      middle of chart area (simulates a folded chart flattened)
intensity:    barely perceptible (opacity 10–15%)
blend:        mix-blend-mode: multiply, opacity-15
color:        dark gray or light gray
animation:    none
tailwind-approximation: no Tailwind native equivalent

**misregistration (cyan/magenta offset)**
technique:    CSS translate offset (0.15mm) or text-shadow/box-shadow applied to critical airspace boundaries
parameters:   offset ~0.5px; cyan boundary offset +0.15mm X, magenta ghost offset -0.15mm X
surface:      airspace boundary lines only
intensity:    barely perceptible
blend:        normal (separate layers)
color:        cyan (#0072BC) and process magenta (#CC0066)
animation:    none
tailwind-approximation: no Tailwind native equivalent

**terrain hatch pattern (alternative to halftone for terrain)**
technique:    repeating-linear-gradient (45° diagonal lines)
parameters:   line width 0.5pt, spacing 1mm
surface:      terrain elevation areas (green or yellow fills)
intensity:    moderate
blend:        mix-blend-mode: multiply, opacity-20
color:        dark gray (#333333) over green/yellow
animation:    none
tailwind-approximation: no Tailwind native equivalent

**registration marks** (optional)
technique:    positioned crosses (cyan, magenta, yellow, black) in margins outside chart area
tailwind-approximation: custom elements
## 9. Components

Components are stripped-down mapping primitives, not generic UI widgets. Every element inherits the chart's line-driven, all-caps, non-decorative logic.

### Icon vocabulary
system:       custom monoline glyphs — airport (square with inner circle or runway rectangle), VOR (hexagon with central dot), NDB (circle with dot), waypoint (diamond), obstacle (triangle), reporting point (star)
size:         w-4 h-4 (16px) — uniform across chart
color:        inherits currentColor (default on-surface #333333); red (#CC0000) for warning symbols
treatment:    outline only, no fill, stroke width 0.5pt
restrictions: never use filled icons; no decorative/illustrative motifs

### Image / media treatment
aspect-ratio:  aspect-[4/3] for chart canvas
object-fit:    object-cover
filter:        none — full fidelity (or paper grain overlay via 8.5d)
overlay:       none
border:        border, border-[#9A9A9A]
dark-mode:     not applicable

### Buttons (UI adaptation)
primary-button:
  border:        border, border-[#333333], text-on-surface uppercase
  fill:          none (transparent)
  corner:        rounded-none
  hover:         border-2, border-[#0072BC], bg-[#0072BC]/10
  active:        solid fill with white text
  disabled:      opacity-40, border-[#D0D0D0]
  size:          h-8 px-3

secondary-button:
  border:        border-dashed, border-[#9A9A9A]
  fill:          none
  hover:         border-solid, border-[#333333]
  active:        bg-[#333333]/10
  disabled:      opacity-40

destructive-button:
  border:        border, border-[#CC0000], text-[#CC0000]
  hover:         border-2

### Cards / Panels (legend, data blocks)
fill:          bg-[#F5F0E8] (paper)
border:        border, border-[#9A9A9A], rounded-none
shadow:        none
padding:       p-2
internal-divider: border-t, border-[#D0D0D0]

### Navigation (UI tabs)
style:         all-caps text-xs, tracking-tight
active:        border-b-2, border-[#0072BC], text-[#0072BC]
inactive:      text-[#666666]
hover:         text-[#333333]
icon:          small monoline glyph at 12px

### Inputs / Forms (UI adaptation)
text-input:
  border:        border-b, border-[#9A9A9A], rounded-none
  fill:          transparent
  focus:         border-b-2, border-[#0072BC], outline-none, cyan dashed outline
  placeholder:   text-[#666666], uppercase, text-xs
  error:         border-b-2, border-[#CC0000]
  disabled:      opacity-40, border-[#D0D0D0]

**Data Display Components:**

metric-cell:
  Background: bg-[#F5F0E8] (off-white paper), no texture at cell level.
  Border: border, border-[#9A9A9A], rounded-none.
  Label: Grotesque all-caps text-xs uppercase, color #666666.
  Value: Grotesque all-caps text-2xl font-normal, color #333333 (on-surface).
  Delta: Grotesque text-sm; positive in cyan (#0072BC), negative in red (#CC0000), flat in gray (#9A9A9A).
  No glow, no drop-shadow — printed document aesthetic.

signal-bar:
  Track: border, border-[#9A9A9A], bg-transparent, h-2 (8px).
  Fill: bg-[#0072BC] (cyan) at functional opacity, h-2.
  Border: none on fill — flat ink within track outline.
  No glow, no texture on fill — flat printed color.

status-cell:
  ok:   text-[#009900] (green) with border-l-2 border-[#009900]. No fill change.
  warn: text-[#FFD700] (yellow) with border-l-2 border-[#FFD700]. No fill change.
  err:  text-[#CC0000] (red) with border-l-2 border-[#CC0000]. No fill change.
  Fill: always transparent bg-[#F5F0E8] — status communicated by text color and left border accent only.

data-table-row:
  Alternating: odd rows bg-[#F5F0E8] (off-white paper); even rows bg-[#EDE8E0] (slightly darker paper).
  Cell border: border-b, border-[#D0D0D0] (thin gray rule).
  Label: Grotesque all-caps text-xs uppercase, color #666666.
  Value: Grotesque all-caps text-sm font-normal, color #333333.
  No row-level surface effects.

chart-surface:
  Background: bg-[#F5F0E8] (off-white paper).
  Grid lines: 1px border-[#D0D0D0], 0.25pt weight, at regular coordinate intervals.
  Axis labels: Grotesque all-caps text-xs, color #666666.
  Line: cyan (#0072BC), stroke-width 1.5pt, no drop-shadow. Dashed stroke where indicating projected or estimated data.
  Data points: open circles, 1.5pt diameter, stroke #333333, no fill, no glow.

### Style-native primitives

**1. Leader line with open-circle dot**
line:           45° angle, 0.5pt solid, color: on-surface (#333333)
dot:            open circle, 1.5pt diameter, no fill, stroke #9A9A9A
placement:      connects annotation offset from feature

**2. Compass rose**
position:       corner of chart
rings:          outer ring (stroke 1px #333333), inner circle for true north indicator
cardinal points: N, S, E, W in uppercase text-xs, other directions in label size

**3. Scale bar**
bands:          4–6 alternating black/white rectangles
length:         200px at chart scale
labels:         nautical miles and kilometers below

**4. Legend box**
frame:          border, border-[#9A9A9A], p-2
title:          "LEGEND" uppercase text-xs font-normal
content:        sample line types + labels
placement:      outside main chart area

**5. Airspace fill overlay**
fill:           flat tint (bg-[#0072BC]/40) with halftone pattern
outline:        solid or dashed border, 1px, color-coded
hatch:          for restricted areas: red diagonal hash (repeating-linear-gradient 45deg, #CC0000 2px, transparent 2px, cycle 4px)

## 10. Layout

The layout is driven by the printed chart's grid and strict information hierarchy. Spacing maintains a 5mm (¼-inch) margin on all sides; inside, content is arranged according to:

- **Top-left:** data block (revision, scale bar).
- **Bottom-left or right:** legend box.
- **Compass rose** embedded in a free corner outside the dense map centre.
- **Map canvas** fills the central area, oriented true north.

**Grid:** Fixed grid based on latitude/longitude ticks (thin lines every 2 minutes of arc, grid lines #D0D0D0 0.25pt). Major ticks every 10 minutes of arc; minor every 2 minutes.

**Spacing cadence:** tight – components sit close together (gap-1 default), reflecting the dense annotation style.

**Alignment philosophy:** Everything aligns to the lat/lon grid. Labels are horizontal only, aligning left or right along a line. Symbols centered on their feature coordinates.

### Breakpoints

- **375px (mobile):** chart reduces to single panel; grid collapsed (show only 5-minute ticks); labels enlarge to text-sm minimum; legend becomes bottom-sheet toggle; compass rose removed.
- **768px (tablet):** full grid and labels return; legend and data block as fixed panes on side; compass rose appears; main chart occupies 70% width.
- **1024px and above:** maximum label density; all airspace fills, minor ticks, and approach-plate split-views appear.

### Motion
transition-duration:          150ms for state changes, 300ms for layout transitions
transition-timing-function:   linear (cubic-bezier(0,0,1,1)) – no easing
transition-property:          opacity, border-color, background-color, transform
transition-behavior:          allow-discrete

animation:
  flight-path:    moving dot (4px radius) along dashed trail – 2s linear, looping
  airspace-fill:  opacity ramp from 0% to 40% over 500ms linear, triggered on-load per airspace layer
  paper-slide:    translateX (-100% to 0%) over 400ms linear, triggered on-state-change (switching chart panels)

transform-at-rest:              all elements at transform: none
transform-on-interact:          none (state changes via border/colour only)
transform-style:                flat

## 11. Design System Notes

### 11a. Use Constraints

**Appropriate for:** navigation interfaces, data-dense dashboards, technical operating manuals, aviation-themed applications, wayfinding kiosks, logistics control panels, any context where precision and hierarchy are paramount.

**Wrong for:** consumer social media, playful apps, fashion e-commerce, children's products, any interface requiring warmth or organic feel.

### 11b. Prompt Phrases
- "Aeronautical chart-inspired grid with cyan airspace fills"
- "All-caps grotesque labels on off-white paper background"
- "Thin monoline symbols and dashed airway lines"
- "Paper grain texture with subtle halftone fills"
- "Functional, no decoration: every element has a purpose"
- "Data block in corner with revision date and scale bar"
- "Collision-avoiding label placement with leader lines"
- "Linear transitions, no easing, mechanical motion"

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description.

rule: Surface color is warm off-white — never pure black or pure white.
do:   Off-white (#F5F0E8) as primary surface for all chart backgrounds, panels, and data blocks. The lightest neutral is the paper itself; the darkest value is very dark gray (#333333).
avoid:Pure black (#000000) for any element — text, lines, or fills. Any element that would be #000000 uses #333333 instead.

rule: Strokes are thin and crisp — no decorative visual effects on any element.
do:   Thin, crisp strokes at 0.5–1pt for all lines, borders, and symbol outlines. Leader lines at 0.5pt solid, grid lines at 0.25pt.
avoid:Gradients, drop shadows, bevels, or glows on any element — these read as consumer UI, not printed chart.

rule: Typography is uniform all-caps grotesque — weight and posture do not vary across the chart.
do:   All-caps grotesque for all labels, except mountain elevations which use mixed case. Emergency frequencies are the sole exception for bold weight.
avoid:Serif, italic, or bold text anywhere on the chart (emergency frequencies excepted). These break the mechanical uniformity of the label system.

rule: Labels are horizontal, offset from features, and never overlap symbols or other labels.
do:   Labels aligned horizontally, offset from features with leader lines (0.5pt, 45° angle) where needed. Collision-avoiding placement.
avoid:Vertical text, rotated labels, or overlapping labels and symbols. Any label that cannot fit horizontally is abbreviated, not rotated.

rule: Color is limited to the functional palette — cyan, yellow, green, red, gray — and adjacent bright regions are always separated by gray boundaries.
do:   Limited functional color palette: cyan (#0072BC) for airspace, yellow (#FFD700) for restricted zones, green (#009900) for terrain features, red (#CC0000) for warnings, gray (#9A9A9A) for infrastructure. Bright color blocks separated by a medium-gray (#9A9A9A) boundary line at 0.5pt.
avoid:More than one bright color adjacent without a gray separator line. Colors outside this functional palette introduced decoratively.

rule: Every element serves a navigational purpose — chart furniture is mandatory, decoration is forbidden.
do:   Lat/lon grid (#D0D0D0 0.25pt), compass rose (corner of chart), and revision data block (top-left) positioned outside main chart area. Every symbol maps to a real feature class.
avoid:Decorative elements that lack functional justification — ornamental borders, background illustrations, branding marks not part of the chart specification.

rule: Surface texture is barely perceptible substrate simulation; geometry is strictly rectilinear.
do:   Paper grain and halftone overlays at barely perceptible intensities (opacity 8–12%). All corners at 0 radius (rounded-none) on every component.
avoid:Rounded corners on any element. Heavy texture that obscures data readability. The absence of substrate simulation on printed-mode charts.

### 11d. Variation Bounds

1. **Clean vs. Weathered:** pristine (no paper grain, no fold crease, perfect registration) vs. weathered (grain, fold crease, misregistration, yellowing).
2. **Sparse vs. Dense:** minimum labels (only major cities and navaids) vs. full pilot-grade clutter (all obstacles, minor airports, frequencies).
3. **Monochrome vs. Full Color:** grayscale only (reprint) vs. full cyan/yellow/green/red palette with spot-color intent.
4. **Modern Digital vs. Vintage Print:** sharp vector lines, no artifacts vs. halftone dots, sepia tint, heavy paper grain, faded colors.
5. **VFR vs. IFR:** VFR (full terrain/obstacle data, high clutter) vs. IFR (stripped-down instrument approach plates with dense numeric tables).
6. **Large-scale vs. Small-scale:** region (1:500,000, coarse grid) vs. airport (1:50,000, fine grid, detailed taxiways).
7. **Authentic vs. Remixed:** strict FAA/Jeppesen format vs. speculative sci-fi/fantasy navigation chart.

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts.

### 11e.i — At Rest
A single chart panel on off-white (#F5F0E8) paper substrate with grain overlay at opacity 8–12%. Lat/lon grid (#D0D0D0, 0.25pt) fills the central map area with minor ticks every 2 minutes of arc. Top-left corner holds a data block: revision date and scale bar (4–6 alternating black/white rectangles, 200px total length, nautical miles and kilometers labeled below) inside a border-[#9A9A9A] panel with p-2. A compass rose occupies the bottom-right corner — outer ring stroke 1px #333333, cardinal labels N/S/E/W in uppercase text-xs. Airspace boundaries rendered as cyan (#0072BC) dashed lines. All labels in grotesque uppercase text-xs, horizontal, offset from features with 0.5pt leader lines at 45°. No rounded corners anywhere. No drop shadows. No glow.

### 11e.ii — Maximum Expressiveness
Full pilot-grade chart density across the entire canvas. Multiple overlapping airspace layers: cyan (#0072BC/40) for controlled airspace, yellow (#FFD700/40) for restricted zones, green (#009900/40) for military areas — each with halftone pattern fills. Restricted zones carry red diagonal hash (repeating-linear-gradient 45deg, #CC0000 2px, transparent 2px, cycle 4px). All navaid symbols active simultaneously: VOR hexagons, NDB circles-with-dot, waypoint diamonds, obstacle triangles in red (#CC0000), reporting point stars — all monoline outline at 0.5pt stroke, #333333 except warnings in #CC0000. Leader lines connect every offset label to its feature at 45° angles across the full canvas. Flight-path animation active: 4px radius dot moving along a dashed cyan trail (2s linear, looping). Grid at maximum density — 2-minute minor ticks, 10-minute major ticks. Compass rose with full cardinal and intercardinal labels. Legend box (border-[#9A9A9A], p-2, "LEGEND" uppercase text-xs title) positioned bottom-left with sample line types and airspace color keys. Medium-gray (#9A9A9A) boundary lines at 0.5pt separate every pair of adjacent bright color regions. Paper grain and halftone across the entire surface at barely perceptible intensity. Airspace-fill animation: each layer ramps from 0% to 40% opacity over 500ms linear on load.

### 11e.iii — Data Context
Data elements adopt the chart's label-and-line DNA. Metric cells are flat paper panels (bg-[#F5F0E8], border border-[#9A9A9A], rounded-none) with uppercase grotesque labels in #666666 at text-xs and values in #333333 at text-2xl font-normal. Delta indicators in grotesque text-sm: positive in cyan (#0072BC), negative in red (#CC0000), flat in gray (#9A9A9A). Status communicated entirely through color — green (#009900) for nominal, yellow (#FFD700) for advisory, red (#CC0000) for critical — applied as text color and border-l-2 accent only, with no background fill change. Data tables alternate between bg-[#F5F0E8] (off-white) and bg-[#EDE8E0] (darker paper) rows, separated by border-b border-[#D0D0D0] rules. Labels in grotesque all-caps text-xs #666666; values in grotesque all-caps text-sm #333333. Signal bars use flat cyan (#0072BC) fill within gray-bordered (border-[#9A9A9A]) tracks at h-2. Chart surfaces maintain the lat/lon coordinate grid as the spatial framework, with data plotted as monoline paths in functional colors — no glow, no drop-shadow, no rounded corners. Every element reads as ink on paper.

### 11f. Sources

This subject has minimal verified imagery. The visual claims below should be treated with caution.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** The **Jeppesen Navigation Chart System** lacks a specific documented date range in this minimal coverage, though its historical origins trace back to founder **Elrey Borge Jeppesen** in 1934. Because the provided identity description is entirely empty, no specific designer, foundry, or period attribution can be definitively established for the system's overarching design guidelines. The system is recognized broadly as the standard for aeronautical navigation charts, but detailed design system attribution remains uncategorized.

**Verified imagery sources.** 2 URLs verified against institutional servers, distributed across:
- Wikipedia — 1 URL(s)
- Smithsonian National Air and Space Museum — 1 URL(s)

Due to the minimal coverage status, no specific visual archives or notable sources were captured during the forensic process. Key references include [none]'s record at [none].

**Named typefaces.** The typography of this style is attested as:
- (none attested)

**Honest gaps.** The most significant gap in this entry is the profound lack of structural and historical metadata provided for the system's visual identity. The forensic pipeline returned an empty state for specific missing typefaces, imagery references, or unconfirmed designer attributions. Because of this minimal coverage, the core typographic and layout specifications of the charts remain entirely unexplored in this context. No documented gaps were recorded by the forensic pipeline.
