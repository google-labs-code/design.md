---
version: alpha
name: "Spectrum Analyzer"
description: "A retro-futuristic design system inspired by vintage CRT spectrum analyzers, using neon-green bars on pure black with monospace typography and CRT artifacts."
colors:
  primary: "#39FF14"
  secondary: "#FFB000"
  accent: "#FF0040"
  background: "#000000"
  surface-container-low: "#0A0A0A"
  overload-led: "#FF0040"
  ok: "#39FF14"
  warn: "#FFB000"
  err: "#FF0040"
  delta-up: "#39FF14"
  delta-down: "#FF0040"
  delta-flat: "#2D2D2D"
typography:
  display:
    fontFamily: "VT323"
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0em"
    textTransform: uppercase
    textDecoration: none
  headline:
    fontFamily: "Share Tech Mono"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0.025em
    textTransform: uppercase
  title:
    fontFamily: "Share Tech Mono"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.375
    letterSpacing: -0.025em
    textTransform: uppercase
  body:
    fontFamily: "JetBrains Mono"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.375
    letterSpacing: -0.025em
    textTransform: lowercase
    textDecoration: none
  label:
    fontFamily: "VT323"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: -0.025em
    textTransform: lowercase
    textDecoration: none
rounded:
  default: "0px"
  card: "0px"
  button: "0px"
  input: "0px"
  chip: "0px"
spacing:
  component-internal: "0px"
  section-internal: "4px"
  page-edge: "16px"
  gap-component: "0px"
  gap-section: "8px"
  height-sm: "16px"
  height-md: "24px"
  height-lg: "32px"
  icon: "16px"
components:
  frequency-bar:
    height: "200px"
    width: "20px"
    rounded: "{rounded.default}"
  peak-hold-dot:
    width: "12px"
    height: "12px"
    backgroundColor: "{colors.secondary}"
    rounded: "{rounded.default}"
  power-led:
    width: "16px"
    height: "16px"
    backgroundColor: "{colors.ok}"
    rounded: "{rounded.default}"
  overload-indicator:
    width: "16px"
    height: "16px"
    backgroundColor: "{colors.overload-led}"
    rounded: "{rounded.default}"
provenance:
  coverage_status: "sparse"
  identity_description: "The slug `spectrum-analyzer` is ambiguous. It does not correspond to any single known visual identity, product brand, software application, or artefact in our reference corpus without additional context. It could refer to any number of electronic test instruments (e.g., Hewlett‑Packard, Tektronix, Rohde & Schwarz models), a software spectrum analyzer, or a generic product category. No definitive i"
  manual_enrichment_required: false
  imagery_count: 4
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "en.wikipedia.org"
      count: 1
    - host: "www.keysight.com"
      count: 1
    - host: "www.tek.com"
      count: 1
    - host: "www.rohde-schwarz.com"
      count: 1
  imagery_urls:
    - url: "https://en.wikipedia.org/wiki/Spectrum_analyzer"
      host: "en.wikipedia.org"
      institution: "Wikipedia"
      confidence_original: low
    - url: "https://www.keysight.com/us/en/home.html"
      host: "www.keysight.com"
      institution: "Keysight Technologies (successor to HP/Agilent electronic measurement)"
      confidence_original: low
    - url: "https://www.tek.com/en"
      host: "www.tek.com"
      institution: "Tektronix"
      confidence_original: low
    - url: "https://www.rohde-schwarz.com/uk/home_48230.html"
      host: "www.rohde-schwarz.com"
      institution: "Rohde & Schwarz"
      confidence_original: low
  typefaces_attested:
    []
  flags:
    - "sparse_imagery"
    - "no_typography_extracted"
    - "no_colour_extracted"
  honest_gaps:
    - "1. **Subject identification** – The slug does not resolve to a unique visual identity. Resolution requires additional context (manufacturer, model, era, or software product)."
---
# Design System: Spectrum Analyzer

## 0. Taxonomy & Identity
entity-type:        interface / system / environment
artefact-family:    dashboard / console / control panel
technique:          digital raster
movement-lineage:   speculative / retrofuturist aesthetic
era:                1980s postmodern
geography:          platform-neutral
domain:             CONTESTED:§0.domain – providers gave: [broadcast, broadcast, publishing/media/music, internet/software/AI, internet/software/AI]; no majority; re-stack required
formal-traits:      grid-based, geometric, informational [majority]
color-logic:        CONTESTED:§0.color-logic – providers gave: [saturated, saturated, duotone, none, spot-color]; no majority; re-stack required
typography-mode:    monospace
texture:            grainy
function:           CONTESTED:§0.function – providers gave: [simulate, entertain, monitor, none, simulate]; no majority; re-stack required
provenance:         revival / homage [majority]

## 1. Overview

The Spectrum Analyzer design system channels the look of vintage CRT-based audio spectrum analyzers – the glowing vertical bar graphs, the near-black instrument panel, the crisp data readouts – into a UI that feels both analog-warm and digitally precise. It occupies a flat depth plane where neon-saturated frequency bars rise against a pure black field, overlaid with CRT scanlines, subtle phosphor bloom, and a faint film grain suggesting sensor hiss. The emotional tone is focused, technical, with a warm analogue nostalgia and retro-futuristic character. The core rendering philosophy is “data as iconography”: every pixel carries signal information, with no decorative elements beyond the instrument’s own chrome. What makes it recognizable: the pulse of glowing bars against a pitch‑black background, the horizontal scanline texture, the monospace digital readouts, and the peak‑hold dots that linger like a ghost of the loudest moment.

The style lives in near‑total darkness, punctuated by one or two saturated hues that bloom, scan, and flicker with phosphor memory. Any element that introduces 3D depth, non‑monospace typography, pastel colors, or decorative illustrations would break the style.

- Emotional tone: focused, technical, with warm analogue nostalgia
- Density: high – data area fills ≥85% of canvas; labels live in slim bezel margin (contested across providers)
- Era / lineage: 1980s CRT‑era audio instrumentation, revived as a speculative retro‑future surface
- Core rendering philosophy: flat depth plane, luminous vector strokes, CRT artifact overlay
- Texture: CRT scanlines (1px black lines at 50% opacity, 2px spacing), phosphor bloom, film grain (1–2% opacity), vignette corner darkening

## 2. Constants
Light Mode:   no — pure black (#000000) or very dark charcoal (#0a0a0a) is essential
Dark Mode:    primary — this is the only mode; no light variant
Responsive:   yes — bar graph scales to fill viewport; number of bands may adjust at narrow widths (≤375px) [majority]
States:       Default, Active, Disabled (core); Idle, Hover, Focus, Error may be added optionally
surface-simulation: crt-screen — CRT monitor glass with scanlines, phosphor bloom, and film grain overlays; the entire canvas simulates a vintage CRT instrument panel

## 2a — Interaction Model

hover-delta:        glow — bars and peak-hold dots increase drop-shadow intensity on hover; text elements show color-shift to brighter primary
active-delta:       opacity-dim — active elements dim to opacity-70, simulating CRT phosphor decay on sustained engagement
focus-style:        glow-ring — 2px primary (#39ff14) box-shadow with 8px blur; simulates focus via intensified phosphor glow
transition-duration:100ms — fast CRT-style response; no perceptible easing on most state changes
transition-easing:  ease-out
exempt-animations:  flicker, scanline-roll, peak-hold-decay, bar-rise

## 3. Colors
primary                     (#39ff14) — Neon Green [attested]: main bar fill, grid lines, active text
secondary                   (#FFB000) — Amber [inferred]: accent for second channel, warning, peak hold dots
accent                      (#FF0040) — Warning Red [inferred]: overload indicator LED, error states
peak-hold                   (CONTESTED:§3.peak_hold_color — providers gave: [#FFFFFF, #FFB000, #FFFFFF, none, none]; no majority; re-stack required)
grid                        (primary at 0.15–0.25 alpha) — Dim Neon Green [conventional]: grid lines and tick marks
background                  (#000000) — Pure Black [attested]: canvas fill
surface-container-low       (#0a0a0a) — Very Dark Charcoal [attested]: bezel fill, panel background
ui-chrome                   (CONTESTED:§3.ui_chrome — providers gave: [#2d2d2d, #404040, #2d2d2d, #1a1a1a, #232323]; no majority; re-stack required)
overload-led                (#FF0040) — Red, as above

Dark mode is the only mode; no swap table.  
*All hex values carry tags: [attested] = used unanimously with general consensus; [inferred] = majority without cited source; [conventional] = agrees with known references but no explicit citation; [unverified] = single provider, no source.*

Semantic state colors:
ok:         #39ff14 — primary (Neon Green); success state, nominal signal, within threshold
warn:       #FFB000 — secondary (Amber); caution state, approaching threshold, advisory
err:        #FF0040 — accent (Warning Red); failure state, overload, critical — same as overload-led
delta-up:   #39ff14 — primary; positive numeric delta (rising metric, increasing amplitude)
delta-down: #FF0040 — accent; negative numeric delta (falling metric, decreasing amplitude)
delta-flat: #2d2d2d — ui-chrome value; neutral delta (no change) — rendered as dim inactive segment

## 4. Typography
display:
  font-family:      CONTESTED:§3.primary_typeface — providers gave: [VT323, VT323, VT323, Share Tech Mono, VT323]; no cited foundry; re-stack required
  font-size:        text-4xl (text-5xl from some) [majority text-4xl]
  font-weight:      font-normal
  line-height:      leading-none
  letter-spacing:   tracking-normal
  text-transform:   uppercase
  text-decoration:  none

headline:
  font-family:      CONTESTED:§3.secondary_typeface — providers gave: [Share Tech Mono, Share Tech Mono, Share Tech Mono, JetBrains Mono, VT323]; no cited foundry; re-stack required
  font-size:        text-2xl
  font-weight:      font-normal
  line-height:      leading-tight
  letter-spacing:   tracking-wide
  text-transform:   uppercase

title:
  font-family:      CONTESTED:§3.secondary_typeface (see above)
  font-size:        text-base (text-lg from some) [majority text-base]
  font-weight:      font-normal
  line-height:      leading-snug
  letter-spacing:   tracking-tight
  text-transform:   uppercase

body:
  font-family:      CONTESTED:§3.body_typeface — providers gave: [JetBrains Mono, IBM Plex Mono, JetBrains Mono, JetBrains Mono, VT323]; no cited foundry; re-stack required
  font-size:        text-sm
  font-weight:      font-normal
  line-height:      leading-snug
  letter-spacing:   tracking-tight
  text-transform:   lowercase (or normal-case) [varied; majority uppercase for most text]
  text-decoration:  none

label:
  font-family:      CONTESTED:§3.label_typeface — providers gave: [VT323, DSEG7 Classic, Share Tech Mono, JetBrains Mono, VT323]; no cited foundry; re-stack required
  font-size:        text-xs
  font-weight:      font-normal
  line-height:      leading-none
  letter-spacing:   tracking-tight
  text-transform:   lowercase (or uppercase) [varied]
  text-decoration:  none

google_fonts_substitute: CONTESTED:§3.google_fonts_substitute — providers gave inconsistent sets; none cited foundry; re-stack required

All type uses monospace characters. A secondary 7-segment digital face (e.g., DSEG7 Classic) may be used for peak-hold numeric values. Text aliased with slight LCD sub-pixel fringe simulation (CSS `text-shadow: 0 0 1px currentColor` or `text-rendering: optimizeSpeed`).

## 5. Elevation
Flat depth model — no shadow hierarchy.
Stacking context (for overlay elements only):
  base-content:    z-0
  overlays:        z-40 (scanline layer, bloom pass)
  top-layer:       z-60 (scanline overlay if rendered above all)

## 6. Spacing & Sizing
padding:
  component-internal:  p-0 to p-2 [varied, no majority] — bars have zero internal padding
  section-internal:    p-1 to p-2 [varied]
  page-edge:           p-4 [majority]

margin:
  between-components:  gap-0 to gap-2 [varied, no majority] — bars typically edge-to-edge
  between-sections:    gap-2 to gap-4 [varied]

component-heights:
  sm:   h-4 to h-6 [majority h-6? unclear] — small LED
  md:   h-6 to h-10 — standard knob
  lg:   h-8 to h-16 — bar maximum

icon-size:       w-4 h-4 (primary indicator) [majority]
avatar-size:     not applicable

## 7. Borders
border-radius:
  default:     rounded-none [unanimous]
  card:        rounded-none
  button:      rounded-none
  input:       rounded-none
  chip/badge:  rounded-none

border-width:
  default:     border-1 to border-2 [varied]
  emphasis:    border-4 (bezel frame) [majority]
  inner:       border-2 (grid frame)

border-style:  border-solid (all), border-dashed (central reference line)

clip-path:     none — all components rectangular

## 8. Opacity
disabled-state:     opacity-30 [majority]
ghost/secondary:    opacity-60 [majority]
overlay/scrim:      opacity-75 [majority]
hover-feedback:     opacity-80 to opacity-90 [varied]

Browser chrome:
  selection:
    background:  rgba(57, 255, 20, 0.25–0.3)
    color:       inherit
  scrollbar:
    style:       hidden (full-page instrument)
    width:       thin (6px)
    track:       dark gray (#404040 or #000000)
    thumb:       primary (#39ff14)
    thumb-hover: primary (slightly brighter)

## 8.5. Visual Effects

### 8.5.0 — Physical Material Model

material-model:    crt-screen

global-filter:     brightness(1.05) contrast(1.15) saturate(1.1) — simulates CRT phosphor glow and increased saturation on the instrument panel

global-overlay:    CRT scanlines via body::after pseudo-element:
                   repeating-linear-gradient(transparent 0 1px, rgba(0,0,0,0.5) 1px 2px)
                   blend: multiply, opacity-50, pointer-events:none, position:fixed, z-index:60
                   plus phosphor bloom pass via duplicate body::before:
                   Gaussian blur 4px, blend: screen, opacity-30, position:fixed, z-index:40

rendering-flags:
  font-smoothing:  none — pixel-perfect monospace rendering maintains CRT character
  image-rendering: auto — no pixelation; phosphor diffusion is part of the aesthetic
  text-rendering:  optimizeSpeed

### 8.5a — Color Manipulation
filter:
  brightness: 1.2–1.5 (applied to bars for phosphor glow simulation) [optional]
mix-blend-mode: screen (bloom pass)

### 8.5b — Surface Layering (Backdrop Filters)
Not used — no frosted glass or translucency.

### 8.5c — Gradients & Glow
background-image:
  type:         linear-gradient (vertical)
  role:         structural — bar fill gradient
  description:  Bright primary color at top, steeply degrading to transparent near bottom
  stops:        from-primary via-primary to-transparent (0%→100%)
  animation:    none

text-shadow:    0 0 8px primary, 0 0 16px primary (bars and peak hold dots) [varied intensity]
filter: drop-shadow: 0 0 6px primary (bars, peak dots, LEDs) [majority]

Chromatic aberration (optional):
  technique:    text-shadow or box-shadow with red and cyan offsets
  parameters:   red +2px, cyan –2px, blur 0.5px
  surface:      bar edges and bright text

### 8.5d — Texture & Noise Simulation
**CRT Scanlines:**
technique:    repeating-linear-gradient
parameters:   transparent 0, transparent 1px, rgba(0,0,0,0.5) 1px, rgba(0,0,0,0.5) 2px
surface:      full-page overlay above all content
intensity:    moderate (50% opacity) [majority]
blend:        mix-blend-mode: overlay, opacity-50
color:        black
animation:    none

**Phosphor Bloom:**
technique:    Duplicate element with Gaussian blur (3–6px) and screen blend
surface:      bars, peak hold dots, active LEDs
intensity:    moderate
blend:        screen
color:        same as bar color

**Film Grain:**
technique:    SVG feTurbulence noise tile or data-URI PNG
parameters:   baseFrequency 0.65–0.8, numOctaves 3, type=“fractalNoise”
surface:      full-page overlay below scanlines
intensity:    barely perceptible (1–2% opacity)
blend:        mix-blend-mode: overlay, opacity-10 to opacity-20

**Vignette:**
technique:    radial-gradient overlay
parameters:   ellipse at center, transparent 60%, black at 100% (0.6–0.8 opacity)
surface:      full-page below scanlines
intensity:    moderate
blend:        multiply (or overlay)
color:        black

Compositing stack (bottom to top): canvas black → grid → bars with bloom → labels → vignette → scanlines → film grain.
## 9. Components

**Icon vocabulary:**
icon-vocabulary:
  system:       none — data is icon; no decorative glyphs
  size:         w-3 h-3 (peak hold dot), w-4 h-4 (LED)
  color:        inherits currentColor, defaults to primary
  treatment:    flat with glow (box-shadow or filter)
  restrictions: no decorative icons; data is the icon

**Image / media treatment:** Not applicable — no photographs or illustrations.

**Always cover:**

- **Frequency Bars:** Vertical rectangles representing frequency bands. Sharp rectangular caps (no rounding). Width proportional to band count (8–64). Fill: linear-gradient top (primary) to bottom (transparent). Glow: drop-shadow(0 0 6px primary). Peak hold dot (white or amber) at highest point, decays slowly (1–2 seconds). Height animates with exponential smoothing (attack 50ms, release 200ms).
- **Grid:** Horizontal and vertical lines at low opacity (0.15–0.25). Thick bezel border (border-4, dark gray). Dashed center reference line (-10dB) at 50% opacity.
- **Axis Labels:** Frequency along bottom (Hz), amplitude along left (dB). Monospace, text-xs, uppercase. Tick marks every 1–5 units.
- **Bezel:** Thick rectangular frame (border-4, dark gray, rounded-none). Inner margin p-2. No shadow.
- **Peak Hold Dots:** Small circle (w-3 h-3) or diamond at highest bar level. Color: secondary (amber) or white. Decay animation: 1–2 seconds.
- **Power LED:** Small indicator (w-4 h-4). Primary color (green) when on, error (red) when overload. Blinks every 2–3 seconds when idle. Position: bottom-right.
- **Control Panel (optional):** Inset area with knobs, toggle switches, push buttons. Recessed appearance (inset shadow, border-2, dark fill). Knob: circular, etched line indicator, no digital readout. Switch: simple push-button labeled “HOLD” or “PEAK RESET”. Scale selector: “LINE / MIC / DIGITAL” labels.
- **Overload Indicator:** Red (#FF0040) LED in top-left of grid. Active when amplitude exceeds max range.
- **Waveform Overlay (optional):** Thin bright line (1.5–2px stroke) across top or behind bars. Cyan or amber.

**Data Display Components:**

metric-cell:
  Background: pure black (#000000) or dark charcoal (#0a0a0a). Border: no border; data value is the bar itself. Label: monospace text-xs (#FFFFFF or #808080) below the bar. Value: bar height and color (green for normal, amber for warn, red for overload). Delta: not applicable; change indicated by bar animation. No glow other than the bar glow.

signal-bar:
  Track: no track; bars are directly on black. Fill: vertical gradient green to transparent. Height proportional to signal strength. Peak hold dot on top. No background color for track. The bar is the signal.

status-cell:
  ok:   green (#00FF41) bar or LED. 
  warn: amber (#FFBF00) bar or LED.
  err:  red (#FF0040) bar or LED with blinking. 
  No fill beyond the bar itself; status is conveyed by bar color.

data-table-row:
  Not applicable; data is displayed as bars and grid, not table rows.

chart-surface:
  The grid area is the chart surface. Background: black (#000000). Grid lines: #1a1a1a at low opacity. Axis labels: monospace white. No separate chart surface; the bezel encloses the grid.


## 10. Layout

**Spacing cadence:** Tight — bars touch edge-to-edge (majority) with no gap between. Data area occupies ≥85% of canvas. Narrow black margin (p-1 to p-2) between grid and bezel. Axis labels live in slim border area.

**Grid tendency:** Strict rectangular grid with fixed number of frequency bands (8–64). Bars evenly spaced by width formula: `canvas_width / number_of_bands`. No responsive reflow — fixed proportions. Axis lines along bottom (frequency) and left (amplitude). Ticks every 1–5 units.

**Density:** High — data area fills ≥85% of canvas (contested but majority leaning toward high density). No whitespace beyond mandatory bezel margin.

**Section separation:** No section dividers; all content sits within the grid area. Optional control panel, if present, separated by a thin line (border-1, dashed, dark gray).

**Alignment philosophy:** Data aligned to grid axes. Labels flush with tick marks. Symmetry preferred (stereo pair optional).

**Breakpoints:**
- 375px: Reduce band count to 8–16, hide amplitude labels if cramped, scale bezel to border-2.
- 768px: Expand to 16–32 bands, show grid lines, controls visible.
- 1024px+: Full 32–64 bands, all labels, optional stereo dual display.

**Motion:**
motion:
  transition-duration:        50ms attack, 200ms release (bar height)
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94) (analog exponential)
  transition-property:        height, opacity, transform
  transition-delay:           none

  animation:
    bar-breathe:             height oscillation ±2% over 4s sine, trigger: looping (idle)
    peak-hold-decay:         dot y-position moves down over 1–2s with exponential ease, trigger: on-data-update
    sweep-cursor:            x-position 0→100% over 2–3s linear, trigger: looping
    led-blink:               opacity 1→0→1 over 2.5s (steps or smooth), trigger: looping
    idle-breathing:          scaleY(1→1.02) over 2–4s ease-in-out, trigger: looping (no signal)

  transform-at-rest:         none
  transform-on-interact:     button hover: scale(1.02), knob: rotate(15deg) on drag
  transform-style:           flat

## 11. Design System Notes

### 11a. Use Constraints
This style is appropriate for: audio visualization dashboards, music player displays, technical monitoring interfaces (signal strength, spectrum analysis), retro‑futuristic album art, posters with data‑as‑iconography. It is **wrong for**: general‑purpose productivity apps, social media feeds, e‑commerce sites, editorial layouts with body copy, any context requiring pastel colors, rounded elements, or decorative illustration.

### 11b. Prompt Phrases
- “Neon green spectrum analyzer bars on pure black background with CRT scanlines”
- “Monospace readouts, all‑caps labels, sharp bezel”
- “Peak hold dots linger like ghost of loudest moment”
- “Data area fills 85% of canvas; no ornamental space”
- “Flat depth plane: no drop shadows, no rounded corners beyond instrument bezel”
- “Scanline overlay at 50% opacity, film grain at 1% opacity”
- “One or two saturated hues only: green + amber, or cyan + green”
- “Every pixel carries signal; no decorative icons”

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description. Minimum 4 rules, maximum 8.

Format per rule:
rule: [principle]
do:   [correct rendering]
avoid:[incorrect rendering]

rule: The background must be pure black or very dark charcoal to achieve the high-contrast CRT look.
do:   Use #000000 or #0a0a0a background.
avoid: Pastel colors or pure white backgrounds.

rule: Spectrum bars are vertical rectangles with a vertical gradient and sharp rectangular caps.
do:   Set bars as rectangles with linear-gradient(bottom, transparent, primary). No border-radius.
avoid: Rounded bar caps, animated gradients, drop shadows, or 3D depth.

rule: All text must be monospace to emulate digital readouts.
do:   Use monospace font families (e.g., “Courier New”, “Consolas”) for all labels and readouts.
avoid: Non-monospace typefaces (script, serif, geometric sans).

rule: Bright colors are limited to one or two hues; UI chrome remains low-saturation.
do:   Use green + amber, green + cyan, or a single monochrome hue. Keep chrome in low-saturation gray/dark olive.
avoid: Using more than two bright hues.

rule: No decorative or illustrative imagery; data serves as iconography.
do:   Use only frequency bars, grid, axis labels, peak hold dots, and control elements.
avoid: Decorative icons, illustrations, or photographic imagery.

rule: CRT scanlines overlay is applied uniformly to simulate monitor texture.
do:   Apply repeating horizontal 1px black lines at 50% opacity across the display area.
avoid: Omitting scanlines or using a solid color overlay.

rule: Peak hold dots capture the loudest moment and decay slowly.
do:   Include small dots (white or amber) at the highest bar level with 1–2 second exponential decay.
avoid: Omitting peak hold dots or having them disappear instantly.

### 11d. Variation Bounds
- **Clean → Grimy:** pristine digital emulation (minimal scanlines, no bloom) vs heavy CRT artifacts (strong scanlines, phosphor bloom, chromatic aberration, vignette)
- **Minimal → Maximal:** single bar display with grid (no controls) vs full panel with knobs, switches, overload indicator
- **Authentic → Remix:** strict CRT green monochrome vs modern multi‑color palette (e.g., split cyan/amber)
- **Static → Active:** frozen spectrum plot vs real‑time audio‑responsive animation with smoothing
- **Bar shape:** sharp rectangles vs rounded caps vs glowing columns (but always flat depth)
- **Color scheme:** single‑color (green, amber, or cyan) vs two‑color split (e.g., green/amber)
- **Band count:** 8 to 64 in 2× increments
- **Bezel style:** thick CRT housing (dark gray, tiny outer radius) vs flat panel (aluminum look, no radius)

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts. Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
The default, single-composition state: A 16‑band spectrum analyzer with pure black background (#000000) and green bars (#00FF41) with vertical gradient fading to transparent at bottom. Bar width 20px, gap 2px. Grid: horizontal lines at 25%, 50%, 75%, 100% height, opacity 0.2, color #1a1a1a. Vertical grid lines at each band, opacity 0.1. Bezel: 4px solid #1a1a1a, inner margin 8px, no shadow. Frequency labels at bottom: “Courier New” monospace, white (#FFFFFF), 9px, uppercase, every 4 bands (e.g., “250Hz”). Amplitude labels left: “0dB”, “‑10dB”, “‑20dB” etc. Peak hold dots: white (#FFFFFF) w‑3 h‑3 at highest bar level. Power LED bottom‑right: green (#00FF41), steady on. No scanlines overlay (clean digital). Composition centered and filling the available width.

### 11e.ii — Maximum Expressiveness
Full 64‑band display with split color: left 32 bars cyan (#00BFFF), right 32 bars amber (#FFBF00). Scanlines overlay: repeating horizontal 1px black lines at 50% opacity, mix‑blend‑mode: multiply. Overload indicator top‑left: red (#FF0040) LED blinking. Peak hold dots: white (#FFFFFF) with exponential decay (1–2s). Waveform overlay: thin cyan (#00BFFF) line (1.5px stroke) across top of bars, animated in real‑time. Control panel bottom: inset area with dark fill (#0d0d0d), border‑2 inset #1a1a1a, containing two knobs (circular, etched line indicator) and a toggle switch labelled “HOLD”. Scale selector “LINE” selected. Bezel: 4px solid #1a1a1a, no outer glow. Composition dense and active, centered.

### 11e.iii — Data Context
The same 64‑band display used for technical monitoring: each frequency bar represents a data channel (signal strength in dBm). Grid lines at ‑20, ‑40, ‑60, ‑80 dBm. Status indicators (ok: green #00FF41, warn: amber #FFBF00, err: red #FF0040) shown as small LEDs below each bar. Numerical readout below bars in monospace “Courier New”, 10px, white (#FFFFFF). Central dashed line at ‑10dB (amp reference). Data values update in real‑time with exponential smoothing. Surface treatment remains black with no additional material simulation. No decorative elements. Composition strictly functional.

### 11f. Sources

Imagery coverage is sparse — only 4 institutional records verified.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** **Spectrum Analyzer** is an ambiguous subject slug with no documented dates, designer, foundry, or period of origin. It does not correspond to a single known visual identity, product brand, software application, or artefact in the reference corpus without additional context. The term could refer to any number of electronic test instruments (e.g., Hewlett‑Packard, Tektronix, Rohde & Schwarz models) or a generic product category.

**Verified imagery sources.** 4 URLs verified against institutional servers, distributed across:
- Wikipedia — 1 URL(s)
- Keysight Technologies (successor to HP/Agilent electronic measurement) — 1 URL(s)
- Tektronix — 1 URL(s)
- Rohde & Schwarz — 1 URL(s)

No key references from institutions are available; the top imagery references list is empty (0 of 4 total). Imagery coverage is sparse — only 4 institutional records verified.

**Named typefaces.** The typography of this style is attested as:
- (none attested)

**Honest gaps.** The most significant gap is subject identification – the slug does not resolve to a unique visual identity. Resolution requires additional context (manufacturer, model, era, or software product). Without this context, neither imagery nor typographic references can be reliably assigned. Additional context specifying the exact instrument or software product would resolve both the identity and coverage gaps.
