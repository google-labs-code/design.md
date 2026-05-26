---
version: alpha
name: "Industrial HMI"
description: "Industrial control panel aesthetic for monitoring and control interfaces: dark near‑black canvas, high‑contrast signal colors, chunky borders, all‑caps monospaced type, CRT artifacts."
colors:
  ok: "#00CC00"
  warn: "#FFB000"
  delta-up: "#00CC00"
  delta-down: "#E03030"
  delta-flat: "#888888"
typography:
  display:
    fontFamily: "DIN 1451"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.025em
    textTransform: uppercase
  headline:
    fontFamily: "DIN 1451"
    fontSize: 30px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0.025em
    textTransform: uppercase
  title:
    fontFamily: "DIN 1451"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.375
    letterSpacing: 0.025em
    textTransform: uppercase
  body:
    fontFamily: "IBM Plex Mono"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0em
    textTransform: uppercase
  label:
    fontFamily: "IBM Plex Mono"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0em
    textTransform: uppercase
rounded:
  default: "0px"
  card: "0px"
  button: "0px"
  input: "0px"
  chip: "2px"
spacing:
  component-internal: "12px"
  section-internal: "16px"
  page-edge: "48px"
  gap-component: "16px"
  gap-section: "24px"
  height-sm: "40px"
  height-md: "48px"
  height-lg: "56px"
  icon: "24px"
components:
  button-primary:
    backgroundColor: "#0099FF"
    textColor: "#FFFFFF"
    rounded: "{rounded.button}"
    padding: "12px"
    height: "48px"
  button-destructive:
    backgroundColor: "#E03030"
    textColor: "#FFFFFF"
    rounded: "{rounded.button}"
    padding: "12px"
    height: "48px"
  indicator-led:
    width: "12px"
    height: "12px"
    rounded: "9999px"
    backgroundColor: "{colors.ok}"
  alarm-banner:
    backgroundColor: "rgba(224,48,48,0.2)"
    textColor: "#FFFFFF"
    rounded: "{rounded.default}"
    height: "56px"
    padding: "12px"
  metric-cell:
    backgroundColor: "#1a1c20"
    textColor: "#FFFFFF"
    rounded: "{rounded.default}"
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
    - host: "www.siemens.com"
      count: 1
  imagery_urls:
    - url: "https://en.wikipedia.org/wiki/SCADA"
      host: "en.wikipedia.org"
      institution: "Wikimedia Foundation"
      confidence_original: high
    - url: "https://www.siemens.com/en-us/products/simatic-hmi/"
      host: "www.siemens.com"
      institution: "Siemens AG"
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
# Design System: Industrial HMI

## 0. Taxonomy & Identity

entity-type:        interface / system / environment
artefact-family:    dashboard / console / control panel
technique:          digital raster
movement-lineage:   vernacular commercial style
era:                postwar
geography:          platform-neutral
domain:             industrial / engineering / maintenance
formal-traits:      grid-based, flat, utilitarian
color-logic:        saturated
typography-mode:    monospace
texture:            matte, grainy
function:           monitor
provenance:         revival / homage

## 1. Overview

This style captures the look and feel of factory floor control panels, PLC interfaces, and heavy machinery displays – translated into a crisp digital UI. The emotional tone is urgent, functional, and unadorned: every pixel exists to monitor or control a process. The visual lineage draws from post-war industrial instrumentation, CRT terminals, and 1980s–1990s SCADA systems, with a deliberate nod to analog display artifacts.

The style is immediately recognizable by its near-black canvas, high-contrast signal colors (red, amber, green, blue), chunky 1–4px solid borders, all-caps monospaced labels, and persistent CRT grain and scanlines. It relies on a rigid 8px grid, left-aligned text, and static layout zones. Any rounding is ≤2px, shadows are hard and 2px offset, and transitions are instant or 100ms hard cuts. The style would break with rounded corners, gradients, pastels, smooth animations, or sans-serif lowercase text.

- Emotional tone: urgent, alert, reliable
- Era/lineage: industrial control panels, 1970s–1990s CRT terminals
- Density: dense but structured, with generous whitespace between groups
- Core philosophy: legibility under harsh light, immediate data scanning, tactile mimicry of physical controls
- Recognizable by: dark backgrounds, chunky borders, signal-colored indicators, all-caps monospaced type, CRT artifacts
- Would break: rounded corners, smooth animations, pastels, decorative gradients, lowercase variable-width text

## 2. Constants

Light Mode:   no
Dark Mode:    primary — the style is inherently dark; light mode is not supported
Responsive:   no — static layout with fixed grid zones; no fluid resizing
States:       Default, Active, Disabled, Focus (some providers include Alarm)
surface-simulation: crt-screen — the interface emulates a CRT monitor with scanlines, grain, and glass reflection overlays

## 2a — Interaction Model

hover-delta:        color-shift — on interactive controls (buttons, toggles) the background shifts to a darker shade (e.g., primary drops from #0099FF to #0080CC); no hover on touch-only surfaces
active-delta:       inset-shadow and offset-shift — a 1px dark highlight appears on top/left and 1px light shadow on bottom/right, with content shifting 1px down, simulating a machined bevel press
focus-style:        color-border — outer border highlights in info blue (#0099FF) on input fields and selectable controls; no glow, no ring
transition-duration:0ms — all state changes are instantaneous hard cuts; no smoothing
transition-easing:  none
exempt-animations:  alarm-blink, gauge-needle, value-flash, alarm-rollin, cursor-blink

## 3. Colors

- **surface** — CONTESTED:§2.hex_surface — providers gave: [#121212 / #0f1117 / #1a1c20 / #0a0a0a]; no majority; all [unverified]; re-stack required
- **on-surface (#FFFFFF)** [unverified] — High-Contrast White: Primary text, labels, and icons on dark surfaces.
- **on-surface-variant (#888888)** [unverified] — Mid-Gray Label: Secondary text, inactive labels, measurement units.
- **primary** — CONTESTED:§2.hex_primary — providers gave: [#0099FF / #FF0000 (two)]; no majority; no evidence; re-stack required
- **on-primary** — CONTESTED:§2.hex_on_primary — providers gave: [#FFFFFF (D,G) / #FFFFFF (K2.6) / #FFFFFF (K2.5)]; unanimous but dependent on primary; field locked to primary decision
- **secondary (#FFB000)** [unverified] — Caution Amber: Warning indicators, alarm banners (caution level), system alerts.
- **on-secondary (#000000)** [unverified] — On Amber Text: Text on amber backgrounds.
- **tertiary / info (#0099FF)** [unverified] — Info Blue: Digital readouts, active selections, informational status.
- **on-tertiary (#FFFFFF)** [unverified] — On Blue Text: Text on blue backgrounds.
- **error** — CONTESTED:§2.hex_error — providers gave: [#E03030 (D,G) / #FF0000 (K2.6,K2.5)]; no majority; all [unverified]; re-stack required
- **on-error** — CONTESTED:§2.hex_on_error — providers gave: [#FFFFFF (D) / not defined elsewhere]; consistency unclear; re-stack required
- **disabled (#555555)** [unverified] — Disabled Control Fill: Background for inactive buttons, switches.
- **disabled-text (#777777)** [unverified] — Disabled Control Text: Text on disabled controls.
- **surface-low (#0a0a0a)** [unverified] — Deep Background: Used for bezel, outer frame.

**Dark mode variant:** Not applicable — the style is dark-only.

**Color meaning mapping:**  
- red = alarm / emergency  
- amber = warning / caution  
- green = running / normal (uncontested hue #00CC00–#00CC55)  
- blue = information / data  

**Dimmed backgrounds:** Use signal colors at 20% opacity for alarm zone fills. For disabled controls, use `#555555` fill.

**Color-blind safety:** Avoid red-green only distinctions; add shapes or patterns to status indicators (e.g., square vs circle, blinking vs steady).

Semantic state colors:
ok:         #00CC00 — Running Green; normal operation, confirmed status, process nominal
warn:       #FFB000 — Caution Amber; warning, degraded, or advisory condition (same as secondary)
err:        CONTESTED:§2.hex_error (candidate #E03030) — Alarm Red; critical failure, emergency — maps to error role
delta-up:   #00CC00 — Positive numeric change (green, favorable)
delta-down: #E03030 — Negative numeric change (red, unfavorable)
delta-flat: #888888 — Neutral / no change — same as on-surface-variant

Note: ok and err are distinct functional colors not present in the base palette; green (#00CC00) is uncontested for running state, err directly maps to the error role.

## 4. Typography

All text is uppercase. No italic or lowercase. Numeric readouts use tabular figures.

| Role | font-family | font-size | font-weight | line-height | letter-spacing | text-transform |
|------|-------------|-----------|-------------|-------------|----------------|----------------|
| display | CONTESTED:§3.primary_typeface — providers unanimously agree on DIN 1451 but no foundry citation; re-stack required | text-4xl (36px) | font-bold | leading-tight | tracking-tight | uppercase |
| headline | CONTESTED:§3.primary_typeface (same) | text-2xl to text-3xl | font-semibold to bold | leading-tight | tracking-wide | uppercase |
| title | CONTESTED:§3.primary_typeface (same) | text-xl to text-2xl | font-semibold | leading-snug | tracking-wide | uppercase |
| body | CONTESTED:§3.secondary_typeface — providers gave: [IBM Plex Mono / JetBrains Mono / DIN 1451]; no majority, no foundry citation; re-stack required | text-sm (14px) | font-medium to normal | leading-normal | tracking-normal | uppercase |
| label | CONTESTED:§3.secondary_typeface (same as body candidate) | text-xs (12px) | font-normal | leading-tight | tracking-normal | uppercase |

**Google Fonts substitute:** CONTESTED:§3.google_fonts_substitute — providers gave: [Archivo / Barlow / JetBrains Mono / none]; no majority, no cited foundry; re-stack required

**Additional rules:**  
- All text is left-aligned or center-aligned in dedicated fields; never justified.  
- Numeric readouts use tabular numbers for consistent decimal alignment.  
- 7-segment-style digits may replace monospace for critical numeric displays.  
- Smallest readable size is ~14pt for body; 10pt (text-xs) only for super-small parameters.  
- Labels are often abbreviated to 3–4 characters (e.g., "TMP", "PSI", "FLW").  
- No italic or lowercase – everything is uppercase for control identifiers and alarm messages.

## 5. Elevation

**Flat depth model** – no shadow hierarchy. Instead, use hard bevel effects:

- Panel edges: 1px lighter highlight on top/left, 1px darker shadow on bottom/right (simulate machined bevel).
- Button press: 1px inset highlight (dark) top/left + 1px shadow (light) bottom/right.
- No drop shadows or blur.

**Stacking context (minimal):**
stacking:
  base-content:    z-0
  alarm-banners:   z-20
  overlays:        z-40 (rare, for modal confirmation dialogs)

## 6. Spacing & Sizing

padding:
  component-internal:  p-3 (12px) for buttons; p-4 (16px) for panels
  section-internal:    p-4 (16px)
  page-edge:           12–20px from inner bezel to first content → px-3 to px-5

margin:
  between-components:  gap-4 (16px) minimum
  between-sections:    gap-6 (24px) for group separation

component-heights:
  sm:   h-10 (40px) – compact buttons, input fields
  md:   h-12 (48px) – default interactive controls
  lg:   h-14 (56px) – alarm banners, primary buttons

icon-size:       w-6 h-6 (24px) inside button; w-5 h-5 (20px) for status indicators
avatar-size:     not applicable

**Grid:** 8px baseline grid. All spacing is multiples of 8px.

## 7. Borders

border-radius:
  default:     rounded-none (0px)
  card:        rounded-none
  button:      rounded-none (may use rounded-sm for very small badges)
  input:       rounded-none
  chip/badge:  rounded-sm (2px)

border-width:
  default:     border (1px) – frames, panel outlines
  emphasis:    border-2 (2px) – active selections, alarm zone borders
  heavy:       border-4 (4px) – bezel, major panel separators

border-style:  border-solid

**Geometry:** All shapes use straight lines and 90° angles – no curves except circular gauge arcs.  
No border-image, clip-path, or rounded corners (≤2px only for very specific elements like indicator borders).

**Bevel illusion:** For panels and buttons, use a 1px lighter top/left edge and 1px darker bottom/right edge instead of border (achieved via pseudo-elements or box-shadow).

## 8. Opacity

disabled-state:     Not used – disabled controls use color swap (#555555 fill, #777777 text)
ghost/secondary:    Not used
overlay/scrim:      Not used (alarm banners are opaque)
hover-feedback:     Not used

alarm-zone-fill:    Signal color at 20% opacity (e.g., error at 20% for alarm background)

**Browser chrome (optional – for standalone terminal screens):**
selection:
  background:  rgba(0, 153, 255, 0.35) — info blue at low opacity
  color:       inherit

scrollbar:
  style:       styled (thin, blocky)
  width:       thin (6px)
  track:       #1a1c20
  thumb:       #555555
  thumb-hover: #777777

## 8.5. Visual Effects

*Conditional: this style relies heavily on analog display artifacts.*

### 8.5.0 — Physical Material Model

material-model:    crt-screen — the entire page simulates a CRT monitor viewed under industrial lighting

global-filter:     none — all color is applied flat; no cinema‑style color grade

global-overlay:    Multiple full‑page overlays composited in order:
                   1. CRT scanlines: repeating-linear-gradient(black 1px, transparent 1px) at 100% 4px, blend: overlay, opacity 0.05
                   2. CRT grain: SVG feTurbulence (baseFrequency 0.65, octaves 3, fractalNoise) on a full‑screen pseudo‑element, blend: screen, opacity 0.03–0.05
                   3. Glass reflection: white diagonal clip‑path (10%–50% strip), opacity 5–10%, blend: normal, above content but below modal overlays

rendering-flags:
  font-smoothing:  antialiased — fonts retain crisp edges but no pixel‑level jaggies
  image-rendering: auto
  text-rendering:  auto

### 8.5a – Color Manipulation

Not used. No CSS filters for color manipulation; all color is applied via flat hex values.

### 8.5b – Surface Layering (Backdrop Filters)

Not used. All surfaces are fully opaque.

### 8.5c – Gradients & Glow

**Gradients:**  
- Only linear two-stop gradients for gauge fills (e.g., green → red threshold) and very subtle button bevel (from lighter to darker shade). No animated gradients.  
- Example: `bg-gradient-to-b from-gray-700 to-gray-900` for bezel frame.

**Glow:**  
- Not used. Shadows are hard and opaque.

### 8.5d – Texture & Noise Simulation

Four distinct texture blocks:

#### CRT Scanlines
technique:        repeating-linear-gradient (1px transparent, 1px black) over full canvas
parameters:       line-height: 4px; background-size: 100% 4px; opacity: 0.03–0.05
surface:          full-page canvas, behind all content
intensity:        barely perceptible
blend:            overlay, opacity-5
color:            black
animation:        none (static)
tailwind-approximation: no Tailwind native equivalent; use custom CSS

#### CRT Grain / Noise
technique:        SVG feTurbulence filter applied to a full-screen overlay
parameters:       baseFrequency: 0.65; numOctaves: 3; type: fractalNoise
surface:          full-page canvas (over scanlines)
intensity:        moderate (opacity 3–5%)
blend:            screen (to lighten)
color:            monochrome noise
animation:        none (static, or optional very slow animation via feTurbulence with <animate>)
tailwind-approximation: no Tailwind native equivalent; use SVG filter

#### Chromatic Aberration (Analog Glow)
technique:        CSS text-shadow or pseudo-element offset on high-contrast elements
parameters:       offset: 0.5–1px red shift on x, 0.5–1px cyan shift on y; no blur
surface:          text and icons on alarm banners, active readouts (optional full-screen)
intensity:        barely perceptible
blend:            normal
color:            red and cyan channels separated
animation:        none
tailwind-approximation: no Tailwind native equivalent; use multiple text-shadow

#### Glass Reflection (Screen Surface)
technique:        CSS pseudo-element with a diagonal polygon clip-path, white fill at 5–10% opacity
parameters:       clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)? Actually a diagonal stripe: e.g., polygon(10% 0, 50% 0, 40% 100%, 0 100%)
surface:          full canvas overlay, above all content
intensity:        subtle (opacity 5–10%)
blend:            normal
color:            white
animation:        none
tailwind-approximation: no Tailwind native equivalent; use CSS clip-path

**Compositing stack (bottom to top):**  
1. Base dark background  
2. CRT Scanlines (overlay, opacity-5)  
3. CRT Grain (screen, opacity-5)  
4. Content layer  
5. Chromatic aberration on select high-contrast elements  
6. Glass reflection overlay (optional, above content)  

**Dark mode inheritance:** All textures carry over unchanged; they are designed for dark surfaces.

## 9. Components

### Icon Vocabulary
icon-vocabulary:
  system:       custom schematic line-art – pumps, valves, motors, conveyors, gears, arrows
  size:         w-6 h-6 (24px) inside buttons; w-5 h-5 (20px) for status indicators
  color:        inherits currentColor or uses on-surface white
  treatment:    solid shapes for maximum contrast; filled only for active states
  restrictions: no outlines, no thin details, no gradients, no gloss
  label:        every icon has a visible label beneath (no icon-only navigation)

### Buttons
- **Primary (action):** Rectangular, h-12 (48px), full-height of adjacent field. Background: primary (contested color, use placeholder). Text: all-caps white, text-sm, weight font-semibold. Border: 1px solid. Hover: darker shade (e.g., #0080CC if blue). Active: 1px inset highlight top/left, 1px shadow bottom/right, offset text 1px down. Disabled: fill #555555, text #777777. No rounding.  
- **Secondary (system):** Gray background (#555555) with white text, or transparent with border. Active state similar inset.  
- **Destructive (emergency):** Background error (contested color). Same dimensions and interaction.

### Cards / Panels
- Bordered box with 1px solid border (color #555555), rounded-none. Title bar (h-10, background #2a2c30, text uppercase, text-sm, white). Content area filled with surface (contested). Internal padding p-4. Elevation: bevel illusion on outer edge (1px lighter top/left, 1px darker bottom/right). No drop shadow.

### Navigation
- Top bar (h-12) with persistent buttons mimicking physical selector switches. Each nav button: rectangular, same height as bar, active state filled with primary (contested), inactive with transparent border. No hover tooltip. Labels only.

### Input Fields / Numeric Entry
- Single-line field with dark inset background (#1a1c20), 1px inset border (#555555), rounded-none. Font: monospace uppercase, text-base. Placeholder in #777777. Focus: outer border highlighted with info blue (#0099FF), blink cursor (block style, width 1ch, color white, blink 1Hz). Disabled: fill #333333, text #555555.

### Indicator LEDs
- Filled circles (diameter 12–16px) with matte finish and 1px subtle border (darker shade). No gloss. Colors: green (running), amber (warning), red (alarm), blue (info). Dimensions: w-3 h-3 (12px) to w-4 h-4 (16px). No animation except steady blink at 1Hz for alarm states.

### Alarm Banner
- Persistent top-right or bottom-left float. Background: error at 20% opacity (for alarm zone), with a 2px solid border in error. Height: h-14. Text: bold uppercase, text-lg (18px), white. Flashing background at 1Hz (500ms on/off) for critical alarms. Appears via vertical roll-in (like slot machine, no easing), disappears instantly on acknowledge. Always visible until acknowledged.

### Toggle Switch
- Two-state rectangular slider: on (fill green #00CC00, text "ON", white), off (fill #555555, text "OFF", #777777). No rounded ends – rectangular thumb (blocky, same height as track, 1px bevel). Track width: 48px, height: h-6 (24px). Thumb: w-4 h-4 (16px) inside track.

### Slider
- Thick horizontal bar (height: h-4, 16px) with blocky thumb (w-4 h-4, square). Track marks at major divisions (small vertical lines every 5 units). Color: track fill #555555, thumb fill white, active fill primary at 20% opacity. No rounding.

### Progress Bar
- Solid block fill (no stripes). Height: h-4. Background: #1a1c20. Fill: green (normal) → amber (warning) → red (critical) based on threshold. No animation. Color change instant.

### Dial Gauge
- Semi-circle arc (180°) with needle (thin white line, 1px). Background: surface-low (contested). Numeric value inside arc (monospace, text-lg). Color-coded danger zones: arc segments in green (safe), amber (caution), red (danger). Needle moves in discrete steps (hold 200ms per step).

### Trends Chart
- Line or step chart on dark background (#1a1c20). Bright trace (info blue #0099FF). No grid labels, only axis ticks (small marks). Thick line (2px). Data points: none.

### List / Dropdown
- Compact dropdown list with down-arrow icon (schematic) and flat overlay panel. Items: monospace uppercase, h-10, background #2a2c30, selected item highlighted with info blue. Border 1px.

**Data Display Components:**

metric-cell:
  A single KPI tile within a panel. Background: surface (contested) with no extra fill, only the 1px panel border. Label: monospace uppercase text-xs (12px), color on-surface-variant (#888888), placed top-left. Value: monospace text-2xl (24px) bold, tabular figures, color on-surface (#FFFFFF), center-aligned. Delta indicator: small monospace text-sm, positive in ok green (#00CC00), negative in err red (#E03030), placed to the right of the value. No glow, no shadow behind the value.

signal-bar:
  Solid progress bar for channel strength or fill level. Track: #1a1c20, height h-4, no border. Fill: solid block, height h-4, color uses green (#00CC00) → amber (#FFB000) → red (#E03030) gradient only at threshold boundaries; otherwise flat. No gloss, no animation during steady state.

status-cell:
  For a grid of process states, each cell shows an Indicator LED (12–16px circle) to the left, followed by a short monospace uppercase label (text-xs, on-surface-variant). The LED uses ok green, warn amber, err red, or info blue. The cell background remains surface, no color fill. A 1px border-left in the LED color can be used for row emphasis.

data-table-row:
  Rows alternate between no background fill (transparent over surface) and a very subtle dark tint (#1a1c20 at 30% opacity). Table cells have no internal borders, only the row's bottom border: 1px solid #555555. All text is monospace uppercase, text-sm, with headers in on-surface white, data in on-surface-variant (#888888). Numeric values use tabular figures and right-align.

chart-surface:
  Background: #1a1c20, fully opaque. Grid lines: none; only small axis tick marks (2px short lines) at intervals, color #555555. Axis labels: monospace text-xs, #888888. Plot line: 2px solid info blue (#0099FF), no smoothing, step interpolation where applicable. No data point markers. The surface inherits CRT grain and scanlines from the global overlays but no additional texture.

## 10. Layout

grid:               static layout with fixed zones – 4- or 6-column grid (fixed widths, no fluid)
spacing-cadence:    8px baseline; all margins, paddings, gaps in multiples of 8
section-separation: bordered boxes with title bars; 16px gap between groups
density:            high but with generous whitespace (≥16px) between bounded groups; no clutter
alignment:          strict left-to-right, top-to-bottom; priority in upper left

breakpoints:        not applicable – layout is fixed-width; no responsive changes
                    For small screens: content may overflow with horizontal scroll; no reflow

motion:
  transition-duration:        0ms (instant) – all state changes are hard cuts
                              100ms for blink frequency (500ms on/off at 1Hz)
  transition-timing-function: step-start (no easing)
  transition-property:        background-color, color, border-color, text-shadow (for chromatic aberration)
  transition-delay:           none
  transition-behavior:        allow-discrete for blink state changes

  animation:
    alarm-blink:  background-color #E03030 → transparent 500ms steps, trigger: looping (1Hz)
    gauge-needle: transform rotate(Ndeg) 200ms step, trigger: on-data-update
    value-flash:  background-color white 150ms then back to normal, trigger: on-data-update
    alarm-rollin: transform translateY(Npx) 100ms step, trigger: on-load or on-state-change
    cursor-blink: opacity 0→1 500ms steps, trigger: looping (1Hz) on focused input

  transform-at-rest:           none – all elements rest at transform: none
  transform-on-interact:       button press: translateY(1px) 0ms, trigger: on-active
  transform-style:             flat
  transform-perspective:       none
  backface-visibility:         hidden (only for gauge needle rotation)

  motion-policy:               no transitions, no fades, no easing curves – only instant cuts and discrete steps

## 11. Design System Notes

### 11a. Use Constraints

**Appropriate for:**  
- SCADA, manufacturing execution system (MES) dashboards  
- Industrial control panels on touchscreens or dedicated terminals  
- Data-heavy monitoring interfaces (factory floors, power plants, process lines)  
- Retro-futuristic or cyberpunk UI projects that borrow from industrial hardware  

**Wrong for:**  
- Consumer mobile apps, social media interfaces, or lifestyle branding  
- Entertainment or media consumption (video players, music apps)  
- Creative tools that require expressive, organic, or rounded aesthetics  
- Admin panels for general office or healthcare (where softer visual language is expected)

### 11b. Prompt Phrases

1. "Dark near-black background with high-contrast signal colors and chunky solid borders"  
2. "All-caps monospaced typography on a rigid 8px grid"  
3. "CRT scanlines and subtle noise overlay with hard shadows and beveled panels"  
4. "Instant state transitions – no easing, no fades, only hard cuts and step animations"  
5. "Functional schematic icons with visible labels – no icon-only navigation"  
6. "Fixed layout with top-bar status, left-side alarm list, central process display"  
7. "Alarm banners flash at 1Hz with vertical roll-in; gauge needles step discretely"  
8. "Flat matte finish – no gloss, gradients limited to two-stop linear for bevels only"

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description.

rule: Layout adheres to a strict 8px baseline grid; any deviation breaks the instrument panel aesthetic.
do:   All padding, margins, gaps, and component dimensions are multiples of 8px. Panels align top‑left with no fluid breakpoints; overscroll uses a horizontal bar, not reflow.
avoid: Rounded corners larger than 2px, pill‑shaped buttons, or fluid grids that resize columns – the interface must stay as fixed as a physical control cabinet.

rule: All text is rendered in uppercase, monospaced, and purely functional; no decorative typography.
do:   Labels in all‑caps monospaced (e.g., "TMP", "PRESSURE"), body text uppercase DIN‑derived, numerals in tabular figures; weight is always normal to semibold, never italic or lowercase.
avoid: Variable‑width fonts, sentence case, italic, or ornate typefaces – they would soften the industrial urgency and break the monospaced alignment of readouts.

rule: Borders define every surface through hard, 1–2px solid lines and bevel illusions; curved or blurry edges break the hardware look.
do:   Panels and buttons use 1px lighter highlight on top/left and 1px darker shadow on bottom/right to simulate a machined bevel; border color is #555555 (or primary when active); maximum rounding is 2px for tiny indicator badges.
avoid: Drop shadows, blur, gradients across more than two stops, or rounded corners above 2px – the interface must feel like pressed metal, not molded plastic or mobile app.

rule: Signal colors are reserved exclusively for functional meaning; any decorative use undermines alarm comprehension.
do:   Red (#E03030) = alarm/emergency, amber (#FFB000) = warning/caution, green (#00CC00) = running/normal, blue (#0099FF) = informational; labels stay high‑contrast white; never use signal colors for marketing accents.
avoid: Pastels, soft palettes, or "friendly" hues; using red for a secondary button or background would mislead an operator into ignoring a real emergency.

rule: CRT artifacts (scanlines, grain, glass reflection) must be present but sub‑perceptual; they communicate the hardware display context without obscuring data.
do:   Apply scanlines at 4px interval, opacity 3–5% in overlay blend; add monochrome grain via SVG feTurbulence at 3–5% screen; add a diagonal glass reflection stripe at 5–10% opacity; all static.
avoid: Heavy noise that reduces text legibility, animated textures, or a perfectly clean canvas – a slick, Apple‑like display would read as consumer software, not a factory terminal.

rule: All state changes are instant hard cuts or discrete steps; smooth animations are excluded because they feel playful, not urgent.
do:   Button press switches to active instantly (0ms transition); alarm‑blink runs at 500ms steps (1Hz); gauge needle moves in 200ms discrete steps; value‑flash is a 150ms white pulse then immediate revert.
avoid: CSS ease‑in‑out curves, opacity fades, or continuous tweens – they suggest a leisurely UI, not a control‑room display where every millisecond matters.

### 11d. Variation Bounds

1. **Wear Level:** pristine new panel (no artifacts) ↔ grimy, scratched factory floor unit (add dust, burn-in ghosting at 5–8%, heavy grain)  
2. **Era:** 1980s amber/green CRT terminal (no chromatic aberration, green or amber monochrome) ↔ 2020s high-res LCD (sharp pixels, flat bezel, full color)  
3. **Data Density:** sparse single-process display (large gauges, few labels) ↔ densely packed multi-zone dashboard (many panels, smaller text, scrollable)  
4. **Bevel Depth:** shallow (1px highlight/shadow) ↔ deep (3px highlight/shadow)  
5. **Color Mode:** full color (red/amber/green/blue) ↔ monochrome (white on black only, with gray for secondary)  
6. **Bezel Density:** minimal UI (full-screen graphic, no bezel) ↔ heavy frame (thick bezel, hardware button grid, vents)

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts.

### 11e.i — At Rest
The system in its default, single‑composition state. A near‑black canvas (surface, e.g., #0a0a0a or contested alternative) fills the viewport, with CRT scanlines and grain overlays at 3‑5% opacity. A top navigation bar (h‑12, surface‑low) spans the full width, holding rectangular button‑switches labelled in uppercase monospaced text (e.g., "OVERVIEW", "PROCESS", "ALARMS"); the active switch is filled with primary (#0099FF placeholder) and white text, while inactive switches are transparent with a 1px #555555 border. Below, a central process display panel (1px solid border, title bar "REACTOR STATUS" in uppercase white on #2a2c30) contains a single large dial gauge (green arc, thin white needle, numeric value in monospaced 36px) and a trends chart with a blue trace on a #1a1c20 background. The left column holds an empty alarm list panel; its title bar reads "ALARMS" but the content area is blank. All indicator LEDs show steady green. No alarm banners are present. The glass reflection diagonal stripe is visible at 5% opacity.

### 11e.ii — Maximum Expressiveness
All characteristic elements are active simultaneously. The top bar's "ALARMS" button pulses with primary fill as a critical alarm triggers. Three alarm banners scroll in from the top‑right: the most critical flashes red (#E03030) at 1Hz with white text "EMERGENCY STOP " and chromatic aberration (red/cyan offset) applied via text‑shadow. A caution banner (amber #FFB000) appears below it, static but with a 2px accent border. Gauge needles on the process display step to new values every 200ms; the dial’s arc displays red and amber danger zones. The trends chart shows a spiking line in info blue. A modal confirmation dialog (z‑40) overlays the center with a 4px heavy border, asking "ACKNOWLEDGE ALARM?" with a primary and a destructive button. The CRT scanlines and grain remain, with the glass reflection stripe at 10% opacity. Every interactive surface uses bevel illusions, and cursor‑blink animates in an active numeric input field.

### 11e.iii — Data Context
When the composition shifts to numeric, tabular status, the interface becomes a multi‑column data dashboard. A data‑table‑row pattern fills the main area: alternating rows with either no extra fill or #1a1c20 at 30% opacity, 1px solid bottom border (#555555). Column headers are monospaced uppercase text‑xs in white, left‑aligned; data values are tabular‑figure monospaced text‑sm in #888888. Status‑cells pair a 12px indicator LED (green for running, amber for warning, red for alarm) with a short label. Metric‑cells are arranged in a 3‑column grid: each tile shows a label ("TEMP", "PRESS") in #888888 text‑xs and a value in 24px monospaced white, with a delta indicator (green or red). Signal‑bars visualize tank levels with solid fills, using green‑amber‑red thresholds. The chart‑surface below displays a step‑chart with blue trace on #1a1c20 background, tick marks only. All panels retain their 1px bevel border and title bars; CRT texture persists on the entire page. No alarm banners or modal overlays distract from data scanning.

### 11f. Sources

This subject has minimal verified imagery. The visual claims below should be treated with caution.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** (Prose generation failed — see provenance block for attribution data.)

**Verified imagery sources.** 2 URLs verified against institutional servers, distributed across:
- Wikimedia Foundation — 1 URL(s)
- Siemens AG — 1 URL(s)

**Named typefaces.** The typography of this style is attested as:
- (none attested)

**Honest gaps.** (No documented gaps were recorded by the forensic pipeline.)
