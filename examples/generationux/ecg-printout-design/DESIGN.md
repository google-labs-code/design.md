---
version: alpha
name: "ECG Printout"
description: "Translates the cold precision of hospital chart recorders into a digital interface with a continuous wavy trace on monochrome grid paper, thermal paper simulation, and clinical monospaced annotation."
colors:
  primary: "#000000"
  on-primary: "#FFFFFF"
  surface-container: "#F5F0E0"
  surface-container-lowest: "#FFFFFF"
  outline: "#D0E5F0"
  error: "#E53935"
  on-error: "#FFFFFF"
  tertiary: "#43A047"
  on-surface: "#000000"
  on-surface-variant: "#E0E0E0"
typography:
  display:
    fontFamily: "IBM Plex Mono"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  headline:
    fontFamily: "IBM Plex Mono"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0em"
    textTransform: "uppercase"
  title:
    fontFamily: "IBM Plex Mono"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "0.025em"
    textTransform: "uppercase"
  body:
    fontFamily: "IBM Plex Mono"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.375
    letterSpacing: "0em"
    textTransform: "none"
  label:
    fontFamily: "IBM Plex Mono"
    fontSize: "10px"
    fontWeight: 400
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
  component-internal: "4px"
  section-internal: "8px"
  page-edge: "8px"
  gap-component: "4px"
  gap-section: "16px"
  height-sm: "32px"
  height-md: "48px"
  height-lg: "64px"
  icon: "16px"
components:
  metric-cell-label:
    textColor: "#87CEEB"
    backgroundColor: "transparent"
    rounded: "0px"
    padding: "0px"
  metric-cell-value:
    textColor: "#000000"
    backgroundColor: "transparent"
    rounded: "0px"
    padding: "0px"
  status-cell-ok:
    backgroundColor: "#43A047"
    height: "12px"
    width: "12px"
    rounded: "0px"
  status-cell-err:
    backgroundColor: "#E53935"
    height: "12px"
    width: "12px"
    rounded: "0px"
  data-table-row:
    backgroundColor: "transparent"
    textColor: "#000000"
    height: "20px"
    padding: "0px"
  data-table-row-even:
    backgroundColor: "rgba(0,0,0,0.03)"
    textColor: "#000000"
    height: "20px"
    padding: "0px"
  chart-surface:
    backgroundColor: "#FFFFFF"
    rounded: "0px"
provenance:
  coverage_status: "sparse"
  identity_description: "This slug refers to the visual identity of a standard electrocardiogram (ECG) printout strip — the physical paper output from a clinical electrocardiograph machine. This is not the work of a specific designer or brand but a *de facto* technical-visual standard that evolved from Einthoven’s early 20th‑century string galvanometer traces through mid‑century standardization efforts by bodies such as t"
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
    - host: "patents.google.com"
      count: 1
    - host: "www.gehealthcare.com"
      count: 1
  imagery_urls:
    - url: "https://en.wikipedia.org/wiki/Electrocardiography"
      host: "en.wikipedia.org"
      institution: "Wikimedia Commons"
      confidence_original: medium
    - url: "https://commons.wikimedia.org/wiki/Category:ECG_paper"
      host: "commons.wikimedia.org"
      institution: "Wikimedia Commons"
      confidence_original: high
    - url: "https://patents.google.com/patent/US5578266A/en"
      host: "patents.google.com"
      institution: "Google Patents"
      confidence_original: high
    - url: "https://www.gehealthcare.com/en-us"
      host: "www.gehealthcare.com"
      institution: "GE Healthcare"
      confidence_original: low
  typefaces_attested:
    - name: "Helvetica"
      foundry: null
      year: null
      google_fonts: "Inter"
      attestation: "conventional"
    - name: "Arial"
      foundry: null
      year: null
      google_fonts: "Arimo"
      attestation: "unknown"
    - name: "Lucida Console"
      foundry: null
      year: null
      google_fonts: null
      attestation: "inferred"
  flags:
    - "sparse_imagery"
  honest_gaps:
    - "1. **Grid colour exact chromatic specification** — not attested in any primary style guide; only visual approximations exist. Could be resolved by spectrometric measurement of a new/unaged ECG paper roll from a known manufacturer (e.g., GE, Nihon Kohden) and publication of the resulting Lab or sRGB value."
---
# Design System: ECG Printout

## 0. Taxonomy & Identity

entity-type:        interface / system / environment
artefact-family:    dashboard / console / control panel
technique:          digital raster
movement-lineage:   vernacular commercial style
era:                postwar
geography:          platform-neutral
domain:             medical / laboratory
formal-traits:      grid-based, informational, utilitarian, flat
color-logic:        monochrome
typography-mode:    monospace
texture:            grainy, weathered
function:           simulate / monitor / record
provenance:         revival / homage / literal artefact reference

## 1. Overview

The ECG Printout style translates the cold precision of hospital chart recorders into a digital interface. It lives in the tension between life‑sign urgency and raw data – a monochrome grid, a continuous wavy trace, and clinical annotation that signals “medical report, not art.” The emotional register is neutral, objective, and slightly sterile, with an undertone of vigilance. Its lineage is the 1960s–70s adoption of standardised ECG printouts, now revived as a UI metaphor for health, monitoring, or any context that demands immediate data legibility.

**What makes it recognizable:**
- Continuous single‑line (or multi‑lead) trace as the hero element, contrasting against a light blue or gray grid
- Fine square grid (1 mm / 5 mm intervals) as permanent background texture
- Monospaced uppercase labels for lead names, measurements, and time markers
- Thermal paper simulation: warm off‑white paper, subtle grain, ink bleed at trace peaks, occasional skip lines
- Flat rectangular layout – horizontal strips separated by ruled lines, with left‑aligned lead labels and right‑aligned measurements
- No gradients (except thermal fade), no decorative type, no photographic hearts – everything signal‑based

**What would break the style:** Use of colour gradients beyond thermal fade, rounded corners, curvilinear layouts, photographic or filled‑shape icons, serif or decorative type, bright saturated colour scales (except single red/green accents for alarms/normal markers).

## 2. Constants

Light Mode:   primary (white/thermal off‑white paper, black trace)
Dark Mode:    no (inversion would destroy thermal paper character); optional oscilloscope mode with green phosphor trace
Responsive:   yes – at 375px strips stack vertically, trace width reduced; at 768px+ multi‑lead side‑by‑side possible
States:       Default (solid trace), Active (live trace recording / alarm flash), Disabled (flatline – dotted or opacity‑30)
surface-simulation: paper — warm off‑white thermal paper substrate

## 2a — Interaction Model

hover-delta:        opacity — opacity shifts to 0.80 on interactive annotations and clickable elements
active-delta:       none — no press animation; active state is visual (alarm flash, live trace) not a transient click effect
focus-style:        none — no keyboard focus ring
transition-duration:0ms — instantaneous state changes; no easing
transition-easing:  none
exempt-animations:  none

## 3. Colors

primary (#000000) [unverified] — Trace line: bold black ink on all surfaces
on-primary (#FFFFFF) [conventional] — Paper background: white for pristine variant
surface-container (#F5F0E0) [unverified] — Thermal paper: off‑white with yellow‑brown cast for aged variant
surface-container-lowest (#FFFFFF) [conventional] — Clean paper base
outline (#D0E5F0) [unverified] — Grid lines: pale blue (variant: #E0E0E0 pale gray)
error (#E53935) [conventional] — Alarm marker: critical points, arrhythmia indicators
on-error (#FFFFFF) [conventional] — Text on error fields
tertiary (#43A047) [unverified] — Normal marker: ECG intervals within range, confirmation ticks
on-surface (#000000) [conventional] — Labels and measurements: monospaced black type
on-surface-variant (#E0E0E0) [unverified] — Faint grid background / dim annotation (minority: #666666)

**Dark mode variant:** Not applicable in standard system. If implemented, use inverse-surface (#1A1A2E), inverse-primary (#00FF41), inverse-on-surface (#1E3A5F).

## 4. Typography

display:
  font-family:      CONTESTED:§3.primary_typeface — providers gave [IBM Plex Mono, SF Mono, Roboto Mono]; none cited foundry; re-stack required
  font-size:        text-xl to text-3xl
  font-weight:      font-bold
  line-height:      leading-tight
  letter-spacing:   tracking-tight
  text-transform:   uppercase
  text-decoration:  none

headline:
  font-family:      CONTESTED:§3.primary_typeface — same contestation
  font-size:        text-base to text-lg
  font-weight:      font-semibold
  line-height:      leading-tight
  letter-spacing:   tracking-normal
  text-transform:   uppercase
  text-decoration:  none

title:
  font-family:      CONTESTED:§3.primary_typeface
  font-size:        text-sm
  font-weight:      font-medium
  line-height:      leading-tight
  letter-spacing:   tracking-wide
  text-transform:   uppercase
  text-decoration:  none

body:
  font-family:      CONTESTED:§3.primary_typeface
  font-size:        text-xs to text-sm
  font-weight:      font-normal
  line-height:      leading-snug
  letter-spacing:   tracking-normal
  text-transform:   normal-case
  text-decoration:  none

label:
  font-family:      CONTESTED:§3.primary_typeface
  font-size:        text-xs (8–10px)
  font-weight:      font-normal
  line-height:      leading-none
  letter-spacing:   tracking-wider
  text-transform:   uppercase
  text-decoration:  none

All text is fixed‑width, no serifs. Measurements (heart rate, interval durations) use `label` role, right‑aligned. Lead labels (I, II, III, aVR, aVL, aVF, V1–V6) use `title` or `headline` role, left‑aligned. Time markers (25 mm/s, 10 mm/mV) use `label` role. Simulate dot‑matrix or thermal printer jitter by applying a very slight `translate()` to each character on interactive hover (optional).

## 5. Elevation

Flat depth model — no shadow hierarchy. No elevation tokens. All elements lie on the same plane as the paper background.

Stacking context: Not required – single‑plane layout. If overlays are needed (e.g., a modal for alarm details), use a semi‑transparent screen (bg-primary/80) with content on a white card (no shadow).

## 6. Spacing & Sizing

padding:
  component-internal:  p-1 to p-2 (2–8px grid spacing inside trace strips)
  section-internal:    p-2 to p-4 (8–16px between trace strip groups)
  page-edge:           p-2 to p-4 (3–5 mm unprinted margin)

margin:
  between-components:  gap-1 to gap-2 (2–8px ruled line between strips)
  between-sections:    gap-4 to gap-6 (8–24px between groups of strips)

component-heights:
  sm:   h-8 to h-24 (single‑lead strip, 2 seconds)
  md:   h-12 to h-32 (multi‑lead strip, 3 seconds)
  lg:   h-16 to h-48 (12‑lead overview)

icon-size:       w-4 to w-6 (16–24px) for electrode symbols, calibration pulse
avatar-size:     not applicable

## 7. Borders

border-radius:
  default:     rounded-none (rectangular – no rounding anywhere)
  card:        rounded-none
  button:      rounded-none
  input:       rounded-none
  chip/badge:  rounded-none

border-width:
  default:     border or border-[1px] (grid lines, ruled separators)
  emphasis:    border-2 (calibration pulse outline, active lead highlight)

border-style:  border-solid

border-image:  none

clip-path:     none (all elements are rectangular)

## 8. Opacity

disabled-state:     opacity-30 (majority) — dimmed trace, faded grid
ghost/secondary:    opacity-50 to opacity-60 — non‑primary traces, annotation labels
overlay/scrim:      opacity-50 to opacity-75 — modal background if used
hover-feedback:     opacity-80 on hover for interactive annotations (optional)

browser chrome (conditional – for dedicated monitoring apps):
  selection:
    background:  rgba(0,0,0,0.08 to 0.15) (subtle dark selection)
    color:       inherit
  scrollbar:
    style:       thin (4–6px)
    width:       thin
    track:       transparent
    thumb:       #D0E5F0 or #F5F0E0
    thumb-hover: #B0C5D8 or #999999

## 8.5. Visual Effects

### 8.5.0 — Physical Material Model

material-model:    paper

global-filter:     sepia(0.1) contrast(0.95) brightness(0.98) — subtle thermal paper aging

global-overlay:    full‑page grain via body::after pseudo‑element: SVG feTurbulence (baseFrequency 0.65–0.8, fractalNoise), blend: overlay, opacity-12, pointer-events:none, position:fixed, z-index:9999 — simulates thermal paper texture

rendering-flags:
  font-smoothing:  antialiased
  image-rendering: auto
  text-rendering:  auto

### 8.5c — Gradients & Glow

background-image:
  type:         linear-gradient or radial-gradient
  role:         structural – thermal paper edge burn / aging vignette
  description:  Very subtle warm gradient from page center to edges (brown‑yellow)
  stops:        transparent 85%, rgba(255,200,150,0.10) 100%
  animation:    none

text-shadow:    none

filter: drop-shadow: none (except optional ink bleed simulation)

### 8.5d — Texture & Noise Simulation

thermal-grain:
  technique:    SVG feTurbulence (CSS filter on paper container)
  parameters:   baseFrequency: 0.65 to 0.8, numOctaves: 2–3, type: fractalNoise
  surface:      full page canvas
  intensity:    barely perceptible to moderate (opacity-3 to opacity-15)
  blend:        overlay or multiply
  color:        monochrome noise
  animation:    none
  tailwind-approximation: no Tailwind native equivalent

ink-bleed:
  technique:    CSS filter: blur(0.3–0.5px) combined with drop-shadow or SVG displacement map
  parameters:   blur radius ~0.3px, opacity 0.1–0.15
  surface:      trace line only (applied on top of grid)
  intensity:    moderate – thicker at QRS peaks (simulate ink pool)
  blend:        normal
  color:        same as trace (#000000)
  animation:    none
  tailwind-approximation: no Tailwind native equivalent

grid-misregistration:
  technique:    CSS transform: sub-pixel translate on grid layers
  parameters:   slight rotation (±0.05–0.1deg) and offset (0.3–1px) to mimic dirty roller
  surface:      grid background layer
  intensity:    subtle (barely perceptible) to strong (grimy variant)
  blend:        normal
  color:        n/a
  animation:    none
  tailwind-approximation: no Tailwind native equivalent

fold-lines / crease marks:
  technique:    repeating-linear-gradient with hard color stops (shadow crease)
  parameters:   white line at 50% (length), followed by 1px shadow at 51%, irregular intervals
  surface:      full page, positioned randomly among instances
  intensity:    weak (opacity-10 shadow)
  blend:        overlay or normal
  color:        #000000 at low opacity
  animation:    none
  tailwind-approximation: no Tailwind native equivalent

paper-yellowing:
  technique:    background-color: #F5F0E0 with overlayed radial-gradient (center vignette)
  parameters:   radial-gradient(ellipse, transparent 70%, rgba(255,200,150,0.15) 100%)
  surface:      page container
  intensity:    weak
  blend:        normal
  color:        brown
  animation:    none
  tailwind-approximation: bg-amber-50 / bg-yellow-50 as fallback

trace skip gaps:
  technique:    dashed stroke on SVG path with randomized gaps
  parameters:   stroke‑dasharray: 2, 95; offset varied
  surface:      trace line only
  intensity:    occasional – 1–2 per strip
  blend:        normal
  color:        trace color
  animation:    none
  tailwind-approximation: no Tailwind native equivalent
## 9. Components

### Icon vocabulary
icon-vocabulary:
  system:       custom glyphs – simplified ECG waveforms (P‑QRS‑T), single‑trace heart outline, electrode symbols
  size:         w-4 to w-6 (16–24px)
  color:        inherits currentColor (primary)
  treatment:    no filter, no glow – purely flat strokes, no fills
  restrictions: no filled shapes, no photographic hearts, no anatomical illustrations

### Image & media treatment
image-treatment:
  aspect-ratio:  free (ECG traces are arbitrary width)
  object-fit:    object-contain (trace must stay within visible bounds)
  filter:        none (unless thermal aging applied globally)
  overlay:       none (trace sits directly on grid)
  border:        none
  dark-mode:     trace color inverts to phosphor green if dark mode used

**Data Display Components:**

metric-cell:
  Background: transparent (grid lines visible). Label: monospace text-xs uppercase (8pt) in grid color (#87CEEB, pale blue), left-aligned above the value. Value: monospace text-2xl (12pt) font-normal, primary color (#000), right-aligned. Delta indicator: placed inline after value, same font; positive delta in green (#43A047), negative in red (#E53935). No glow, no drop-shadow.

signal-bar:
  Track: 1px solid outline (#87CEEB) on grid background. Fill: primary (#000) solid bar, height 3px. No border radius, no gradient. Represents analog signal amplitude if used; not a native component but rendered as grid-line extension.

status-cell:
  ok:   green (#43A047) filled diamond or circle (w-3 h-3), no label, positioned at exact trace point.
  warn: not used – only ok/err states via discrete marks. No text, no shadow.
  err:  red (#E53935) filled diamond, size w-3 h-3, same positioning; may carry alarm-pulse opacity animation.
  Fill always solid; no border.

data-table-row:
  Row height 20px; alternating: odd rows transparent, even rows with a 3% black tint (paper weathering). Cell border: border-b 1px solid outline (#87CEEB). Label cell (left-aligned): monospace text-xs (8pt) uppercase #000. Value cell (right-aligned): monospace text-sm (10pt) #000. No hovering effects.

chart-surface:
  Background: white (#FFFFFF) with a repeating-linear-gradient grid: 1mm minor lines (#87CEEB 1px transparent 4px), 5mm major lines (#A9C2D9 1px transparent 20px). Grid extends full width, continuous. No additional axis labels (trace axes are implicit). Line chart: the ECG trace itself; other data series (e.g., reference intervals) would be rendered as dotted lines (#000, opacity-30, no anti-aliasing).

### Always‑cover components

**Trace Strip (primary container):**
- corner: `rounded-none`
- fill: transparent (grid background visible)
- border: `border-t` or `border-b` (1px solid outline) between strips
- shadow: none
- internal: grid background (repeating linear gradient), trace path overlaid
- icons: lead label (mono uppercase, left), calibration pulse box (1 mV square wave, stroke #000, fill transparent)
- measurements: right‑aligned (heart rate, interval durations)
- states: Default (solid trace), Active (alarm flash red at R-wave), Disabled (flatline: dotted line, opacity-30)

**Calibration Pulse:**
- 1 mV box: rectangle of fixed height (approx 10 mm), positioned at start of each lead
- fill: transparent, stroke: 1–2px solid #000
- no interaction state

**Electrode Symbol:**
- small circle with a dot inside (or “+”/“-” for lead reference)
- size: `w-4 h-4`, stroke 1.5px, fill transparent

**Alarm Marker (conditional):**
- red circle or diamond (#E53935) placed on trace at critical point
- optional: same shape, green (#43A047) for normal intervals
- size: `w-3 h-3`, fill solid
- no shadow, no glow

**Paper Edge:**
- straight‑cut but slightly irregular edge (use `clip‑path: polygon()` with slight variations)
- margin: 3–5mm unprinted on all sides
- if double‑sided simulation: faint ghost of reverse text (opacity-10, mix-blend-multiply)

**Patient Info Header:**
- top-of-page metadata bar: patient ID, date/time stamp, lead configuration
- fill: surface (white), border-b in grid color
- typography: label or body role, monospace, right-aligned

## 10. Layout

- **Spacing cadence:** horizontal strips occupy full width; each strip is 2–3 seconds of data (300–450ms at 25mm/s). Strips separated by a 1px ruled line (outline color).
- **Grid tendency:** strict rectangular grid – 1mm squares (approx 4px at 1x scale), 5mm major squares (20px). Grid is continuous across all strips.
- **Density:** moderate – grid lines fine, trace is bold, labels small.
- **Section separation:** ruled line and optional thicker calibration pulse at start of new lead set.
- **Alignment:** left‑aligned lead labels and speed/sensitivity markers; right‑aligned measurements and time stamp; trace path floats centered in its strip.
- **Breakpoint behavior:**
  - 375px: strips stack vertically, each strip width shrinks to screen edge (margin p-2). Traces show 2 seconds of data (scale proportionally). Grid remains but may skip 1mm sub‑lines.
  - 768px: multi‑lead arrangement – up to 6 strips side‑by‑side in two columns. Each strip occupies half the viewport width. Grid scales uniformly.
- **Motion block:**
motion:
  transition-duration:        0ms to 150ms (instant feel; step-start for clinical instruments)
  transition-timing-function: step-start or none
  transition-property:        opacity, background-color (trace value changes)
  transition-delay:           none
  transition-behavior:        allow-discrete

  animation:
    trace-draw:  path stroke-dashoffset 100%→0% over 2s linear, trigger: on-load – mimics real‑time recording scroll
    alarm-pulse: opacity 0.5→1 over 500ms step-end infinite, trigger: on-alarm
    cursor-blink: opacity 1→0 over 1000ms steps(1) looping (if interactive)
    baseline-drift: translateY 0→2px over 4–10s linear (optional, for disabled state)

  transform-at-rest:          all elements rest at transform: none
  transform-on-interact:      none (no hover transforms)
  transform-style:            flat
  transform-perspective:      none
  backface-visibility:        visible

## 11. Design System Notes

### 11a. Use Constraints

**Appropriate for:** Medical dashboards, patient monitoring UIs, health metrics displays, clinical data logs, fitness tracking summary screens, any interface that benefits from a sense of urgent accuracy and cold objectivity.

**Wrong for:** Casual lifestyle apps, children’s games, entertainment hubs, social media feeds, photo galleries, editorial layouts requiring warmth or narrative.

### 11b. Prompt Phrases

1. "Continuous wavy trace on grid paper, monochrome, no anti‑aliasing"
2. "Thermal paper grain and ink bleed at QRS peaks"
3. "Monospaced uppercase labels in clinical sans‑serif, small fixed pitch"
4. "12‑lead strip layout with calibration pulse at start of each lead"
5. "Red alarm diamond on black trace, green normal marker"
6. "Slight paper yellowing and fold line crease artifacts"
7. "Grid lines in pale blue, trace in bold black, no rounding anywhere"
8. "Single‑lead OR multi‑lead layering, each with its own baseline"

### 11c. Do / Avoid Block

rule: The surface must be a strict rectilinear grid, never a gradient or rounded shape.
do:   Use fine grid as permanent background in pale blue (#87CEEB) or gray (#A9C2D9), covering every data strip.
avoid: Gradients (except faint thermal edge burn at the paper margins) and rounded corners on any element – all corners are sharp (border-radius:0).

rule: The trace must appear as a sharp, machine-drawn line with deliberate interruptions, free of smoothing.
do:   Render trace as a continuous vector path (stroke: #000, 2px) with occasional skip gaps (1–2px breaks).
avoid: Anti-aliasing or subpixel smoothing on the trace stroke; use `shape-rendering: crispEdges`.

rule: Typography is strictly clinical: monospaced, uppercase, tiny; expressive fonts are prohibited.
do:   All text in monospaced, uppercase, 8–10pt (Courier New or similar clinical sans), normal weight.
avoid: Serif, script, or decorative typefaces; no italic, bold, or light variants.

rule: Depth and atmosphere come from paper grain, not gradients or digital gloss.
do:   Add subtle noise (opacity 5–8%) and paper aging (yellowing, sepia 10–20%) over the entire canvas.
avoid: Gradients on any UI surface (except a minimal thermal burn gradient at edges), and avoid box-shadows or glows.

rule: Composition is rigidly left‑to‑right with labels on the left, numerical values on the right.
do:   Place lead labels (e.g., "I", "II") left‑aligned in 8pt monospace; measurements (HR, intervals) right‑aligned in 10pt.
avoid: Curvilinear or asymmetrical layouts; the strip is a strict horizontal bar with no winding or offset.

rule: Color is reserved exclusively for critical state indicators; decorative or multi‑color displays are forbidden.
do:   Use red (#E53935) only for alarm diamonds, green (#43A047) only for normal markers – no other accent colors.
avoid: Colourful data visualisation (rainbow spectrums, heatmaps), photographic icons, or filled heart shapes.

rule: The interface must emulate a physical printed artifact, carrying at least one analog imperfection; digital‑native conventions are refused.
do:   Simulate at least one analog artifact: paper grain, ink bleed at QRS peaks (blur 0.3px), or grid misregistration (1px offset between strips).
avoid: Rounded corners on any element; even the paper edge is achieved with an irregular `clip‑path`, not a smooth border-radius.

### 11d. Variation Bounds

- **Clean → Grimy:** pristine digital grid with crisp black trace ↔ aged thermal paper with yellowing, creases, ink bleed, and misregistered grid lines
- **Single‑lead → Multi‑lead:** one continuous trace ↔ 12 overlapping traces with distinct baselines
- **Authentic → Remix:** faithful medical report ↔ decorative use of ECG waves forming silhouettes, logos, or patterns
- **Flat → Textured:** no paper noise, grid perfectly registered ↔ all thermal artifacts active (grain, bleed, skips, fold lines, edge burn)

### 11e. Compositional Signatures

### 11e.i — At Rest
A single ECG trace strip occupies the full width on a white thermal paper surface (surface, #FFFFFF) with a faint pale blue grid (minor lines #87CEEB at 1mm, major #A9C2D9 at 5mm). Patient info header at top: monospace uppercase 8pt in black (#000), right‑aligned patient ID and timestamp, left‑aligned lead label (“II”). A calibration pulse box (1 mV, stroke #000, fill transparent) sits at the strip’s left edge. The trace runs as a continuous black path (stroke-width 2px, crispEdges rendering) with occasional 1–2px skip gaps. No alarm markers. A subtle paper grain (noise opacity 5%) and slight yellowing (sepia 10%) overlay the entire surface. The paper edge is an irregular clip‑path with 5mm margins.

### 11e.ii — Maximum Expressiveness
Twelve lead strips (I, II, III, aVR, aVL, aVF, V1–V6) stacked vertically, each separated by a 1px ruled line (outline #87CEEB). Every strip carries its own calibration pulse and a distinct baseline offset. Thermal paper aging is full: yellowing (sepia 20%), edge‑burn gradient (reddish tint at top‑right), a crease line (1px shadow with offset), and a faint ghost of reverse text (opacity‑10, mix‑blend‑multiply) visible through the paper. Ink bleed at QRS peaks appears as a 0.3px blur. An alarm diamond (red, #E53935) pulses on lead II (alarm‑pulse animation), while a normal marker (green, #43A047) sits on lead V4. Patient info header includes full diagnostic codes. Grid misregistration: major lines shift 1px between some strips. Paper grain increased to 8% opacity.

### 11e.iii — Data Context
Numerical data (heart rate “72 BPM”, PR interval “160ms”, QRS duration “100ms”) is shown right‑aligned in the measurement zone of each strip: the value is 12pt monospace (#000) and the label (e.g., “HR”) is 8pt monospace uppercase in grid color (#87CEEB). Status cells are the alarm/normal diamonds (red/green) placed precisely on the trace; no additional text or background fill. A measurement summary table, if needed, uses rows with lead label (left, monospace 8pt #000) and value (right, monospace 10pt #000), separated by a 1px bottom grid line; no alternating row colors. The chart surface (grid) is unchanged; no extra data layers. All data elements inherit the analog paper texture and avoid any digital gloss.

### 11f. Sources

Imagery coverage is sparse — only 4 institutional records verified.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** **ECG Printout** emerged as a de facto technical-visual standard across the 20th century, rooted in **Willem Einthoven**’s early string galvanometer traces and codified through mid-century clinical standardization by bodies such as the American Heart Association and the International Electrotechnical Commission. Neither a single designer nor a brand owns its form; the gridded strip, calibrated amplitude and time-base, and limited annotation typography evolved as a diagnostic lingua franca for cardiac electrophysiology.

**Verified imagery sources.** 4 URLs verified against institutional servers, distributed across:
- Wikimedia Commons — 2 URL(s)
- Google Patents — 1 URL(s)
- GE Healthcare — 1 URL(s)

Key references include the Science Museum Group’s electrocardiograph paper samples at collection.sciencemuseumgroup.org.uk; no further institutional records have been formally catalogued. Imagery coverage is sparse — only 4 institutional records verified.

**Named typefaces.** The typography of this style is attested as:
- Helvetica ( — attestation: conventional) — rendered here in Inter as the closest open substitute
- Arial ( — attestation: unknown) — rendered here in Arimo as the closest open substitute
- Lucida Console ( — attestation: inferred) — no Google Fonts substitute available

**Honest gaps.** The most significant gap is the grid colour exact chromatic specification — not attested in any primary style guide; only visual approximations exist. The background tint, typically a warm pink or red-orange, and the precise ink colour of the fine grid lines remain undocumented in sRGB, Lab, or spectral terms. No manufacturer (GE, Nihon Kohden, Schiller) publishes these values, leaving the visual identity vulnerable to drift in digital simulation. This could be resolved by spectrometric measurement of a new, unaged ECG paper roll from a known manufacturer and publication of the resulting Lab or sRGB value.
