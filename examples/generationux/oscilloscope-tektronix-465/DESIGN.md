---
version: alpha
name: "Tektronix 465"
description: "A 1970s analog CRT oscilloscope aesthetic translated into a UI — near-black phosphor screen, green trace palette, graticule grid, scanline textures, and chunky hardware controls for dashboards and retro-futuristic interfaces."
colors:
  primary: "#00FF41"
  secondary: "#CCFF00"
  tertiary: "#FFB000"
  surface: "#0A0E0A"
  surface-container: "#0D1B0D"
  on-surface: "#00FF41"
  on-surface-variant: "#00CC00"
typography:
  display:
    fontFamily: "VT323"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "0em"
    textTransform: "uppercase"
  headline:
    fontFamily: "VT323"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0em"
    textTransform: "uppercase"
  title:
    fontFamily: "VT323"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "0em"
    textTransform: "uppercase"
  body:
    fontFamily: "VT323"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.375
    letterSpacing: "0em"
    textTransform: "uppercase"
  label:
    fontFamily: "VT323"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.05em"
    textTransform: "uppercase"
rounded:
  default: "2px"
  card: "2px"
  button: "0px"
spacing:
  component-internal: "8px"
  section-internal: "16px"
  page-edge: "16px"
  gap-component: "8px"
  gap-section: "16px"
  height-sm: "24px"
  height-md: "32px"
  height-lg: "40px"
  icon: "16px"
components:
  button-primary:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.primary}"
    rounded: "{rounded.button}"
    padding: "8px"
    height: "32px"
  button-primary-hover:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.primary}"
    rounded: "{rounded.button}"
    padding: "8px"
  metric-cell:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.primary}"
    rounded: "{rounded.default}"
    padding: "8px"
  graticule-grid:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.default}"
  power-led:
    backgroundColor: "{colors.tertiary}"
    size: "8px"
  waveform-trace:
    textColor: "{colors.primary}"
    height: "2px"
provenance:
  coverage_status: "minimal"
  identity_description: "The slug `oscilloscope-tektronix-465` refers to the Tektronix 465, a portable dual-trace analog oscilloscope manufactured by Tektronix, Inc. (Beaverton, Oregon). It was introduced in 1972 (attested in Tektronix catalog documentation, per Provider ZAI) and produced through the early 1980s. The instrument is widely recognised for its ruggedness and 100 MHz bandwidth, and served as a general‑"
  manual_enrichment_required: true
  imagery_count: 2
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "w140.com"
      count: 1
    - host: "www.ebay.com"
      count: 1
  imagery_urls:
    - url: "https://w140.com/tekwiki/wiki/465"
      host: "w140.com"
      institution: "TekWiki"
      confidence_original: medium
    - url: "https://www.ebay.com/"
      host: "www.ebay.com"
      institution: "eBay"
      confidence_original: low
  typefaces_attested:
    - name: "Helvetica Medium"
      foundry: null
      year: null
      google_fonts: "Inter"
      attestation: "inferred"
    - name: "custom Tektronix logotype"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "unknown"
    - name: "monoline sans-serif (graticule scale)"
      foundry: null
      year: null
      google_fonts: null
      attestation: "unknown"
  flags:
    - "few_usable_urls"
    - "1_robots_disallowed_urls"
  honest_gaps:
    - "1. **Primary colour specification** — No attested hex, Pantone, RAL, or Munsell value for the cabinet blue‑grey. Four divergent inferred approximations exist (see §2). Resolution requires spectrophotometric measurement of a known‑original unit or discovery of a Tektronix paint specification."
---

# Design System: Tektronix 465

## 0. Taxonomy & Identity

entity-type:        interface / system / environment
artefact-family:    dashboard / console / control panel
technique:          digital raster
movement-lineage:   vernacular commercial style
era:                postwar
geography:          platform-neutral
domain:             industrial / engineering / maintenance
formal-traits:      grid-based, utilitarian, informational
color-logic:        monochrome
typography-mode:    monospace
texture:            grainy, noisy, halated
function:           simulate
provenance:         revival / homage

## 1. Overview

This design system translates the visual language of a 1970s analog CRT oscilloscope—specifically the Tektronix 465—into a UI for dashboards, data displays, and retro-futuristic interfaces. The aesthetic is industrial, scientific, and slightly worn: every element mimics an electron beam painting a phosphor screen. The emotional tone is functional, precise, and faintly nostalgic, evoking laboratory test equipment that has logged thousands of hours.

The style is unmistakable: a near-black CRT background, dominant green phosphor palette, a squared graticule grid, continuous jagged waveform traces, and pervasive analog artifacts—scanlines, phosphor grain, CRT bloom, vignette, and micro-jitter. Surface textures are matte and grainy. Controls are chunky hardware components (knobs, push-buttons, BNC connectors) grouped around the screen edge. Typography is exclusively monospaced bitmap-style, small, slightly distorted, and always uppercase.

**What makes it recognizable:**
- Dark CRT tube face (#0a0e0a [conventional]) with bright green phosphor traces (#00ff41 [conventional])
- Square graticule grid (6×6 to 8×8) at ~30% opacity, overlaid on all screen content
- Continuous, slightly ragged waveform paths with afterglow ghosts
- Monospaced, chunky bitmap typography (VT323 [unverified]), aligned to the graticule grid
- Surrounding analog controls: nested knobs, push-buttons, BNC ports, glowing amber LED

**What would break the style:**
- Anti-aliased vector curves or smooth bezier arcs
- White or bright modern background
- Any rich color palette beyond green phosphor and dim amber/white accents
- Shadows, glassmorphism, or soft rounded corners (except the subtle CRT frame rounding)
- Proportional fonts or clean sans-serif typography

**Emotional tone:** functional, analytical, nostalgic, grounded
**Era/lineage:** 1970s industrial test equipment (Tektronix, Hewlett-Packard)
**Density level:** moderate to dense within CRT face; sparse around controls
**Core rendering philosophy:** simulate analog electron beam—no anti-aliasing, no vector perfection, imperfect jitter
**Texture layers (bottom to top):** base CRT dark fill → phosphor grain → vignette → scanlines → graticule → traces/text → bloom glow (see §8.5d)

## 2. Constants

Light Mode:   no
Dark Mode:    primary — the style is inherently dark (CRT-off background)
Responsive:   yes — maintain CRT aspect ratio (4:3 or 5:4), scale graticule grid proportionally at breakpoints; controls reflow below screen on narrow viewports
States:       Default (trace present), Active (knob rotation/button press), Disabled (dimmed to opacity-30)
surface-simulation: crt-screen — simulates a 1970s analog CRT phosphor monitor with scanlines, phosphor grain, vignette, and electron-beam bloom

## 2a — Interaction Model

hover-delta:        glow — phosphor bloom intensifies on interactive traces via text-shadow spread increase; no color shift, no movement
active-delta:       offset-shift — element shifts 1px down and right simulating physical button depression; brightness increases 10%
focus-style:        glow-ring — 2px ring in primary (#00ff41) with 0 0 4px glow simulating phosphor focus
transition-duration:150ms — slight delay mimicking analog circuit response time
transition-easing:  linear — analog signal paths do not ease
exempt-animations:  scanline-shimmer, phosphor-flicker, crt-refresh-beat, static-charge

## 3. Colors

All values are drawn from a monochrome phosphor-green emulation; no pure white or saturated blue appears. Hex values are tagged with evidence status.

primary              (#00ff41) [conventional] — Trace Green: main waveform, active text, bright indicators
secondary            (#ccff00) [conventional] — Alternate Trace Green: secondary traces, highlighted readouts
tertiary             (#ffb000) [conventional] — Amber: side markings, power indicator LED, warning labels
surface              (#0a0e0a) [conventional] — CRT Screen Base: unlit tube, deepest background with greenish tint
surface-container    (#0d1b0d) [conventional] — Off-Screen Charcoal: bezel areas, panel backgrounds, knob bodies
on-surface           (#00ff41) [conventional] — Active Text and Icons: primary content on screen
on-surface-variant   (#00cc00) [conventional] — Dim Text: secondary information, afterglow traces
outline              CONTESTED:§2.outline_color — providers gave: [#00ff41 at 30% opacity / #003300 / #336633]; no consensus; re-stack required
error                CONTESTED:§2.error_color — providers gave: [#ff4500 / #ff3300]; insufficient evidence; re-stack required

**Color behavior notes:** All greens derive from the same phosphor hue at different black levels. No pure white (#ffffff) or high-saturation blues are used. The palette is effectively monochrome green with a dim amber tertiary for accent. Contrast between trace (bright `primary`) and graticule (dim `outline` at lower opacity) is essential.

## 4. Typography

All text rendered in monospaced bitmap-style fonts, crisp and un-antialiased. Slight wobbly distortion via SVG displacement filter recommended.

display:
  font-family:      'VT323', monospace
  font-size:        text-lg (18px simulated)
  font-weight:      font-normal
  line-height:      leading-tight
  letter-spacing:   tracking-normal
  text-transform:   uppercase
  usage:            brand mark "TEKTRONIX", large graticule axes labels

headline:
  font-family:      'VT323', monospace
  font-size:        text-base (16px)
  font-weight:      font-normal
  line-height:      leading-none
  letter-spacing:   tracking-normal
  text-transform:   uppercase
  usage:            section titles like "CHANNEL 1", "TIME/DIV"

title:
  font-family:      'VT323', monospace
  font-size:        text-sm (14px)
  font-weight:      font-normal
  line-height:      leading-tight
  letter-spacing:   tracking-normal
  text-transform:   uppercase
  usage:            floating readout values, knob position labels

body:
  font-family:      'VT323', monospace
  font-size:        text-xs (12px)
  font-weight:      font-normal
  line-height:      leading-snug
  letter-spacing:   tracking-normal
  text-transform:   uppercase
  usage:            axis tick labels, graticule scale numbers, silkscreened control labels

label:
  font-family:      'VT323', monospace
  font-size:        text-xs (12px)
  font-weight:      font-normal
  line-height:      leading-none
  letter-spacing:   tracking-wider
  text-transform:   uppercase
  usage:            push-button captions, connector labels (all-caps, often underlined)

**Secondary typeface (for pixel-perfect fallback):** `'Zpix', monospace` [unverified] — most providers agree on Zpix as alternative bitmap font.

**Google Fonts substitute:** CONTESTED:§3.google_fonts_substitute — insufficient evidence; re-stack required.

**Character rendering:** All text appears as slightly wobbly bitmap stencils. Numeric values are right-aligned with leading zeros (e.g., `000.5`). Tabular figures are implied. All text aligned to graticule grid.

## 5. Elevation

Flat depth model — no shadow hierarchy. All apparent depth is simulated via CRT glow, bloom, and vignette (see §8.5). No box shadows or elevation levels.

no shadows used.

Stacking context (for CRT surface layering):
  base-crt-black:         z-0
  phosphor-grain-layer:   z-10
  afterglow-traces:       z-20
  waveform-traces:        z-30
  graticule-grid:         z-40
  readout-panel:          z-50
  scanline-overlay:       z-60
  bezel-frame:            z-70
  knob-controls:          z-80
  power-indicator:        z-90

## 6. Spacing & Sizing

Spacing cadence: 8px base unit (aligned to graticule grid).

padding:
  component-internal:    p-2  (8px) — trace area to graticule edge; inside readout panels, button labels
  section-internal:      p-4  (16px) — screen area to bezel
  page-edge:             p-4  (16px) — outer bezel to page edge

margin:
  between-components:    gap-2 (8px) — between knobs/buttons on bezel
  between-sections:      gap-4 (16px) — between readout panel and trace area

component-heights:
  sm:   h-6  (24px) — small push-buttons, BNC icons
  md:   h-8  (32px) — default interactive target (medium knobs)
  lg:   h-10 (40px) — larger dials/knobs

icon-size:       w-4 h-4 (16px) — internal symbols; w-6 h-6 (24px) — control icons
avatar-size:     not applicable

## 7. Borders

border-radius:
  default:     rounded-sm (2px) — CRT screen mask corners, readout panels
  card:        rounded-sm (see default)
  button:      rounded-none (tall rectangular, sharp edges)
  input:       not applicable
  chip/badge:  not applicable
  knob:        rounded-full (circular knobs)

border-width:
  default:     border (1px) — graticule lines, button outlines, thin dividers
  emphasis:    border-2 (2px) — active control indicator, power LED ring

border-style:  border-solid — all borders solid; no dashed/dotted unless simulating broken scanline

clip-path:     not applicable

## 8. Opacity

disabled-state:     opacity-30 — greyed-out controls, inactive graticule zones
ghost/secondary:    opacity-40 — afterglow traces, dim readouts
overlay/scrim:      opacity-50 — scanline overlay, CRT vignette
hover-feedback:     not opacity-based; uses brightness increase or glow

**Browser chrome** (conditional — activate for dark immersive style):
selection:
  background:  rgba(0, 255, 65, 0.25) — primary at 25% opacity
  color:       inherit

scrollbar:
  style:       styled (thin, dark, green thumb)
  width:       thin (6px)
  track:       rgba(13, 27, 13, 0.8) — surface-container
  thumb:       rgba(0, 255, 65, 0.5) — primary at 50%
  thumb-hover: rgba(0, 255, 65, 0.7)

## 8.5. Visual Effects

All effects apply only to the CRT screen area; the bezel and controls remain flat and untextured.

### 8.5.0 — Physical Material Model

Declares the top-level surface simulation governing the entire page canvas.
This is distinct from component-level textures (§8.5d) — it is the global rendering layer.

material-model:    crt-screen

global-filter:     brightness(1.2) contrast(1.1) — simulates CRT driving voltage
                   and phosphor activation intensity

global-overlay:    CRT scanlines via body::after pseudo-element:
                   repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(0,0,0,0.12) 2px, rgba(0,0,0,0.12) 3px)
                   blend: normal, opacity-60, pointer-events:none, position:fixed, z-index:60
                   animation: scanline-shimmer — background-position-y drift over 2s linear looping

rendering-flags:
  font-smoothing:  none — pixel-perfect bitmap font rendering, no anti-aliasing
  image-rendering: pixelated — bitmap icons and graticule patterns must not be interpolated
  text-rendering:  optimizeSpeed — CRT output does not refine glyph edges

### 8.5a — Color Manipulation

filter:
  brightness(1.2) contrast(1.1): applied to the entire screen area, simulating CRT driving voltage

mix-blend-mode:   screen (for overlaying glow on traces)
background-blend-mode: not used

### 8.5b — Surface Layering (Backdrop Filters)

Not used. The CRT depth is simulated via stacking order, not backdrop blur.

### 8.5c — Gradients & Glow

background-image:
  type:         radial-gradient
  role:         structural — CRT vignette (screen corner fade to darker)
  description:  Dark gradient at edges to simulate tube curvature and electron beam cutoff
  stops:        from transparent at 70% radius to rgba(0,10,0,0.8) at 100%
  animation:    none

text-shadow:
  description:  "CRT bloom" on trace elements — a subtle green glow around bright lines
  value:        0 0 4px #00ff41, 0 0 8px #00ff41, 0 0 12px #00ff41
  surface:      waveform traces, active power LED, bright labels

filter: drop-shadow:
  description:  0 0 6px #00ff41 — for glowing trace components
  surface:      waveform traces, trigger flash events

### 8.5d — Texture & Noise Simulation

Three distinct texture layers compose the CRT simulation. They stack bottom-to-top:

1. **phosphor-grain** — fine, high-frequency static grain covering the whole screen
2. **crt-vignette** — circular luminance falloff from center to edges (shared with 8.5c gradient)
3. **scanlines** — horizontal dark lines at 3px spacing, adding the characteristic raster pattern

**phosphor-grain:**
technique:    SVG feTurbulence filter applied to a full-screen overlay
parameters:   baseFrequency=0.8, numOctaves=3, type=fractalNoise
surface:      entire CRT face (screen area only)
intensity:    barely perceptible (more visible in dark areas)
blend:        mix-blend-mode: overlay, opacity: 0.08
color:        monochrome noise (no hue shift)
animation:    none — static film of grain
tailwind-approximation: no native equivalent

**crt-vignette:**
technique:    radial-gradient with varying transparency, placed over the screen surface
parameters:   ellipse 60% 50% at center, from rgba(0,0,0,0) to rgba(0,10,0,0.8)
surface:      screen area topmost layer, above grain and scanlines, below traces
intensity:    moderate
blend:        mix-blend-mode: multiply (darkens edges)
tailwind-approximation: can approximate with bg-[radial-gradient(...)] but best as separate layer

**scanlines:**
technique:    repeating-linear-gradient horizontal stripes
parameters:   0deg, transparent 0px, transparent 2px, rgba(0,0,0,0.12) 2px, rgba(0,0,0,0.12) 3px
surface:      screen area, always on top of vignette and grain
intensity:    moderate (12% opacity dark lines)
blend:        normal (no blend mode)
animation:    very slow shimmer (like CRT refresh beat) — background-position-y drift over 2s linear, looping
tailwind-approximation: no native equivalent; custom CSS

**Static Charge Artifacts (optional, for worn variation):**
technique:    occasional dim stretched streaks (CSS pseudo-element with gradient)
parameters:   random positions, length 20-60px, height 1-2px, opacity 10-30%
surface:      CRT screen area (random occurrence)
intensity:    very subtle, optional
blend:        screen
color:        greenish white (#88ff55)
animation:    none (or sporadic via JS)
tailwind-approximation: no native equivalent

**Compositing stack (bottom → top):**
1. Dark background fill (surface, #0a0e0a)
2. phosphor-grain overlay (overlay, opacity-10)
3. crt-vignette (multiply, ~80% edge fade)
4. scanlines (normal, 12% dark stripes)
5. Graticule grid (normal, `outline` color at ~30% opacity)
6. Waveform traces + text (normal, with text-shadow glow; no blend mode)
## 9. Components

### Icon vocabulary

icon-vocabulary:
  system:       custom oscilloscope front-panel symbols
  size:         w-4 h-4 (16px) for internal symbols; w-6 h-6 (24px) for control icons
  color:        inherits currentColor (default primary #00ff41)
  treatment:    crisp, no anti-aliasing; may carry text-shadow bloom when used inside screen
  restrictions: no modern UI icons (hamburger, gear, magnifying glass); no multi-color glyphs

Specific glyphs: sine wave, square wave, trigger slope arrows (rising/falling), ground symbol (⏚), BNC connector, probe calibration square, power LED indicator.

### Image treatment

Not applicable — no photographic imagery. All visual content is signal traces or vector shapes.

### Buttons (Push-buttons)

shape:         tall rectangle, height h-8 (32px), width auto (based on label), rounded-none
background:    #0d1b0d (surface-container) — dark charcoal
border:        1px solid primary (#00ff41) at default
text:          ALL CAPS, monospaced, text-xs (12px), primary (#00ff41) or dim white (#aaaaaa)
stroke:        underline (thin silkscreen rule) below text
states:
  default:     dark fill, green border, green text
  hover:       border brightens to #00ff41, subtle glow (drop-shadow 0 0 4px #00ff41)
  active:      fill changes to #003300 (primary-container), green text
  disabled:    opacity-30, no glow

### Knobs (Rotary Controls)

shape:         concentric circles, outer diameter h-10 (40px) or h-8 (32px)
fill:          #1a1b1a (dark gray) with matte noise texture (inherited from 8.5d)
border:        2px solid primary (#00ff41)
ticks:         small lines every 10° around outer rim, only 1–3 active positions highlighted in green
notch:         small solid circle or line at active position, color primary
states:
  default:     notch indicator at rest, tick marks dim (#336633 at 40% opacity)
  active:      (when turned) notch glows brighter via text-shadow, border pulse
  hover:       border lightens
  disabled:    opacity-30, no glow
animation:     10° step rotation with discrete snap (no interpolation)

### BNC Connector Icon

structure:     circle (16-24px diameter) with center dot and two flange protrusions opposite sides
color:         primary (#00ff41) or neutral (#cccccc) for labels
fill:          transparent
stroke:        1px solid

### Graticule Grid

type:          8×8 grid of thin crosshairs (or 6×6 to 10×10)
line style:    border (1px) solid outline color (contested, see §3 outline)
opacity:       30%
applies:       overlays entire CRT screen area, sits between traces and scanlines
labels:        small coordinate numbers at top and right edges (dim green or amber, text-xs)
minor ticks:   optional – smaller subdivisions at 1/5 divisions

### Waveform Trace

type:         continuous, rough-edged polyline (no Bezier)
color:        #00ff41 (primary), #ccff00 (secondary for CH2)
line width:   2px (border-2 equivalent)
fill:         none
states:
  active:     fully opaque with drop-shadow glow (0 0 6px #00ff41)
  ghost:      afterglow copies at opacity-20 to opacity-40, offset left by 2-4px
  paused:     trace dimmed to opacity-60, ghost copies removed
animation:
  trace-sweep:     x from 0 to 100% over 2s linear, loop
  afterglow-decay: opacity 1 → 0 over 600ms ease-out
  trigger-flash:   opacity 0 → 1 → 0 over 150ms, scale 1 → 1.2

### Power Indicator LED

shape:         small circle (8px diameter)
color on:      amber (#ffb000) with glow (drop-shadow 0 0 6px #ffb000)
color off:     dark (opacity-20, no glow)
position:      near bottom edge of CRT bezel

### Logo / Brand Mark

text:          "TEKTRONIX" or "TEK" in low-res slab serif (or bitmap) – ALL CAPS, text-sm, dim green (#00cc00)
placement:     bottom center or right edge of bezel

**Data Display Components:**

metric-cell:
  Background: #0d1b0d (surface-container) — dark charcoal fill.
  Border: 1px solid primary (#00ff41).
  Label: monospace bitmap text-xs ALL CAPS, dim green (#00cc00).
  Value: monospace bitmap text-2xl, primary (#00ff41) with drop-shadow 0 0 6px #00ff41 (CRT bloom glow).
  Delta: monospace text-sm; positive in primary (#00ff41), negative in amber (#ffb000), flat in dim green (#336633).
  Glow on value text via text-shadow; no box-shadow elevation — light emits, surfaces do not lift.

signal-bar:
  Track: #1a1b1a (dark gray), height 4px — flat phosphor channel, no inset.
  Fill: primary (#00ff41), solid, no gradient, height 4px.
  Border: none — the track edge is the boundary.
  No glow on fill bar — signal strength reads as flat phosphor intensity, not bloom.
  Position: aligned to graticule grid intersections.

status-cell:
  ok:   text primary (#00ff41) with border-1 primary, steady glow via text-shadow 0 0 4px #00ff41.
  warn: text amber (#ffb000) with border-1 amber — indicator LED aesthetic, glow via text-shadow 0 0 4px #ffb000.
  err:  blinking primary (#00ff41) alternating opacity-30 / opacity-100 at 500ms intervals — no dedicated red in palette; blink signals fault.
  Fill: transparent — status communicated by text color and glow alone, no background fill change.

data-table-row:
  Alternating: odd rows #0a0f0a (near-black CRT base); even rows #0d1b0d (surface-container charcoal).
  Cell border: border-b 1px solid #336633 (dim green, graticule line aesthetic).
  Label: monospace text-xs ALL CAPS, dim green (#00cc00), left-aligned.
  Value: monospace text-sm, primary (#00ff41) with subtle text-shadow bloom, right-aligned.
  No row-level surface effects — rows are phosphor readouts, not material layers.

chart-surface:
  Background: #0a0f0a (near-black CRT phosphor base).
  Grid lines: 1px solid dim green (#336633) at 25/50/75/100% — graticule grid aesthetic at ~30% opacity.
  Axis labels: monospace bitmap text-xs, dim green (#00cc00), right-aligned for numeric values.
  Chart lines: waveform trace style — 2px rough-edged polyline, primary (#00ff41) with drop-shadow 0 0 6px glow; no Bezier interpolation between points.
  Dots: primary (#00ff41), r=2px, with bloom glow via text-shadow. No hollow markers.
  Scanline overlay persists over chart surface at 15% opacity.

### Style-native primitives (additional)

1. **Trigger Slope Arrow** (↗/↘) — angular arrow indicating rising/falling edge, monochrome
2. **Ground Symbol** (⏚) — three descending horizontal lines of decreasing length
3. **Scale Switch Dial** — thin nested semicircles with tick marks, like a small ruler segment

## 10. Layout

- The CRT screen occupies the majority of the canvas, with a 16px margin for bezel area.
- Graticule grid fills the screen area completely, with a 4px inner margin for fall-off.
- Readouts (time/div, volts/div) are stacked along the bottom edge or right side, using small text and panel lines.
- Knobs and push-buttons are placed outside the screen area, around the bezel – never overlapping the trace area.
- Trace path is irregular, diagonal, or curved – never symmetric.
- Minor tick marks and labels align to grid intersections.
- Spacing cadence: 8px base unit (aligned to graticule grid).
- At widths ≥768px: control strip vertical on right; below 768px: controls horizontal below screen.
- Alignment: all elements grid-snapped; text left-aligned for labels, right-aligned for numeric values.

**Motion block:**

motion:
  transition-duration:
    100ms: trigger flash fade, button press offset
    300ms: knob rotation indicator color pulse
    600ms: afterglow decay
    1000ms: sweep reset
  transition-timing-function:
    steps(1):      knob rotation visual update — immediate angle snap
    linear:        trace sweep, scanline shimmer
    ease-out:      afterglow fade
  animation:
    trace-sweep:            x position from 0% to 100% over 2s linear, looping
    afterglow-decay:        opacity 1 → 0 over 600ms ease-out, triggered on-sweep-end
    trigger-flash:          opacity 1 → 0 over 150ms ease-out, scale 1 → 1.2; on-trigger-event
    scanline-shimmer:       background-position-y 0 → 3px over 2s linear, looping
    knob-rotate:            rotate 0 → N° steps(1) on-click (immediate snap)
  transform-at-rest:        all elements at transform: none
  transform-on-interact:
    push-button:            translateY(1px) on-active, duration 100ms steps(1)
    knob:                   no persistent transform; notch angle updates via SVG attribute
  transform-style:          flat
  backface-visibility:      visible

## 11. Design System Notes

### 11a. Use Constraints

**Appropriate for:** data-dashboards, signal monitoring interfaces, retro-futuristic UIs, oscilloscope simulators, low-poly HUDs, analog aesthetic overlays, music visualizers, hardware simulators.

**Wrong for:** modern enterprise SaaS dashboards requiring high-density readability, photographic or video-heavy interfaces, consumer mobile apps needing color variety, any context where accessibility contrast standards (WCAG) are mandatory, content-heavy reading experiences.

### 11b. Prompt Phrases

- "green phosphor glow on near-black CRT screen"
- "continuous rough-edged waveform trace with afterglow"
- "8×8 graticule grid at 30% opacity"
- "monospace bitmap text in all caps at 12px"
- "CRT vignette and corner fall-off"
- "push-buttons with green border and uppercase label"
- "concentric knobs with 10° tick marks"
- "scanline overlay at 15% opacity"
- "CRT bloom effect: radial glow around bright trace points"
- "dim amber (#ffb000) for secondary markings and side labels"

### 11c. Do / Avoid Block

rule: The palette is strictly limited to phosphor greens and one dim secondary — the hardware never displays a full spectrum.
do:   2–3 greens (#00ff41 primary, #00cc00 dim, #336633 muted) plus optional dim amber (#ffb000) and dim white (#aaaaaa). No other hues enter the CRT.
avoid:A full color wheel with blues, reds, and purples — or any palette that resembles a modern dark-mode UI with accent variety.

rule: Waveform traces are rough-edged polylines sampled at discrete intervals — the phosphor gun draws line segments, not curves.
do:   2px polyline in primary (#00ff41) with jagged vertices and visible coordinate quantization. Afterglow ghosts offset 2–4px left at opacity-20 to opacity-40. Drop-shadow 0 0 6px #00ff41 bloom on active trace.
avoid:Smooth cubic Bezier curves, perfectly regular sine waves, or any path with antialiased curvature — this is a sampling instrument, not a vector illustration tool.

rule: All text is locked to the graticule grid — labels snap to division intersections as if burned into the phosphor screen.
do:   Monospace bitmap font at text-xs (12px), ALL CAPS, aligned to the 8px grid cadence. Decorative horizontal silkscreen rules below button labels. Dim green (#00cc00) or amber (#ffb000) for secondary markings.
avoid:Proportional fonts, open-tracking, centered pull quotes, or any typographic treatment that floats free of the grid — text that looks like a website, not an instrument readout.

rule: CRT glow is the system's only luminance model — light emits from phosphor via text-shadow and drop-shadow, never from elevation or material layering.
do:   text-shadow 0 0 4px #00ff41 on green text; drop-shadow 0 0 6px #00ff41 on traces; radial bloom on bright trace peaks. Glow intensity encodes importance.
avoid:box-shadow for elevation, layer stacking for depth, or any shadow system that implies physical distance rather than phosphor emission — this screen does not have Z-depth.

rule: The CRT surface carries persistent grain and scanlines — the medium is always visible, never invisible.
do:   Scanline overlay at 15% opacity (repeating-linear-gradient, 1px/2px, multiply) across entire screen. Subtle grain texture on all CRT surfaces. CRT vignette darkening corners. These never turn off.
avoid:A clean, flat, noiseless dark background that resembles a modern dark-mode app surface — the phosphor screen is a physical object with persistent texture.

rule: Controls are physical hardware elements — knobs and push-buttons with weight, grip, and mechanical snap, not abstract digital affordances.
do:   Concentric knob circles with 10° tick marks, 2px border primary, matte noise fill, steps(1) rotation snap. Push-buttons: tall rectangles, dark fill (#0d1b0d), green border, underline silkscreen rule, translateY(1px) on press.
avoid:Rounded-pill buttons, toggle switches, hamburger menus, gear icons, or any control vocabulary drawn from touch-screen or web UI conventions.

rule: Symmetry and vector perfection are artifacts of digital tools — the oscilloscope's nature is analog imprecision.
do:   Waveforms with slight jitter, coordinate misalignment of ±1px, uneven trace intensity, graticule lines at consistent but not sub-pixel precision. Allow the texture of discrete sampling.
avoid:Perfectly regular repeating waveforms, sub-pixel-aligned geometry, or any composition that looks like it was generated by a charting library with anti-aliased output.

rule: No modern UI iconography or elevation model appears anywhere — the interface vocabulary is drawn exclusively from analog test equipment.
do:   Sine wave glyph, trigger slope arrow (↗/↘), ground symbol (⏚), BNC connector circle, probe calibration square, power LED dot. Monochrome, 16–24px, crisp edges.
avoid:Hamburger menus, magnifying glasses, gear icons, share arrows, or any icon from a modern icon set — also avoid drop-shadow elevation on any element.

### 11d. Variation Bounds

- **Clean vs. Worn:** Pristine lab equipment (uniform brightness, minimal noise) vs. aged bench unit (dust motes, scratches, faded labels, slight misregistration of silkscreen). Adjust grain opacity, add static charge streaks.
- **Single vs. Dual Trace:** One waveform (#00ff41) or two overlapping (#00ff41 and #ccff00), with optional Y offset. Dual mode adds a second trace color dimmer green (#00cc00).
- **Brightness / Contrast:** Dim and murky (phosphor aged: trace at 30% intensity, background lighter green) vs. bright and punchy (fresh CRT: trace at 100%, deep black).
- **Grid Complexity:** 4×4 simple crosshair (minimal) to 10×10 dense graticule with numbered axes and minor divisions.

### 11e. Compositional Signatures

### 11e.i — At Rest
A single CRT screen dominates the canvas — surface near-black (#0a0f0a) with CRT vignette darkening all four corners by 15–20%. An 8×8 graticule grid of 1px dim green lines (#336633) at 30% opacity fills the screen area with a 4px inner margin. A single waveform trace (#00ff41) sweeps left to right as a rough-edged 2px polyline, leaving afterglow ghosts at opacity-20 offset 3px left. Scanline overlay (repeating-linear-gradient, 1px transparent / 1px rgba(0,0,0,0.15)) at 15% opacity across the entire surface. Readout text along the bottom edge: monospace bitmap ALL CAPS at text-xs in dim green (#00cc00) — "TIME/DIV" and "VOLTS/DIV" labels left-aligned, numeric values right-aligned. Power indicator LED: 8px amber (#ffb000) circle glowing with drop-shadow near bezel bottom edge. "TEKTRONIX" in dim green (#00cc00) slab serif at text-sm at bezel bottom right. Bezel frame is 16px of dark charcoal (#0d1b0d) surrounding the screen. No controls are interacted with. No secondary trace. The composition is still — the sweep is the only motion.

### 11e.ii — Maximum Expressiveness
Dual trace display fills the CRT: primary waveform (#00ff41) and secondary channel (#ccff00) overlapping with a vertical Y offset of ~2 graticule divisions. Each trace carries 2–3 afterglow ghost copies at opacity-20, opacity-30, and opacity-40, offset 2px, 3px, and 4px left respectively. Trigger flash fires at sweep start: opacity 0→1→0 over 150ms with scale 1→1.2 at the trigger point. CRT bloom (radial gradient glow, 0 0 12px #00ff41) surrounds the three brightest trace peaks. Full 10×10 graticule grid with numbered axis labels (dim green #00cc00 at text-xs) along top and right edges, plus minor tick subdivisions at 1/5 divisions. Trigger slope arrow (↗) rendered at top-left of screen in primary (#00ff41). Right bezel hosts a column of rotary knobs (concentric circles, 40px diameter, #1a1b1a fill with matte noise, 2px green border, active notch glowing) and push-buttons (32px tall dark rectangles with green border and uppercase silk-screened labels). One knob notch pulses with 300ms color animation. Probe calibration square visible in a corner of the graticule. Static charge streak artifact crosses the upper-left quadrant at low opacity. Scanline shimmer animation active (background-position-y 0→3px over 2s). Grain and noise at maximum intensity. The entire composition vibrates with the texture of live analog instrumentation.

### 11e.iii — Data Context
Numeric data is rendered as oscilloscope readout cells on the CRT phosphor surface. Each metric cell: dark charcoal fill (#0d1b0d), 1px border in primary (#00ff41), label in monospace bitmap text-xs ALL CAPS dim green (#00cc00) top-aligned left, value in monospace text-2xl primary (#00ff41) with drop-shadow 0 0 6px bloom glow center-aligned. Delta indicators render in monospace text-sm: positive delta in primary green (#00ff41), negative delta in amber (#ffb000), flat in muted green (#336633). Signal strength bars use a 4px track in dark gray (#1a1b1a) with primary (#00ff41) solid fill — no gradient, no glow on the bar itself, aligned to graticule grid divisions. Status cells communicate state through text color and glow alone: ok = #00ff41 with steady text-shadow, warn = #ffb000 with amber glow, err = #00ff41 blinking at 500ms intervals between opacity-30 and opacity-100. Data table rows alternate #0a0f0a (near-black) and #0d1b0d (charcoal) with 1px dim green (#336633) border-bottom. Labels left-aligned in dim green, values right-aligned in primary with bloom. The chart surface is the CRT itself: #0a0f0a background, graticule grid lines at 30% in #336633, axis labels in monospace text-xs dim green. Data plotted as 2px rough-edged polylines in #00ff41 with 0 0 6px drop-shadow glow — the waveform trace is the chart. Scanlines persist at 15% over all data surfaces. No card containers, no panel shadows, no elevation — data lives on the phosphor.

### 11f. Sources

This subject has minimal verified imagery. The visual claims below should be treated with caution.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** The **Tektronix 465** is a portable dual-trace analog oscilloscope introduced in 1972 by **Tektronix, Inc.** out of Beaverton, Oregon. Production of this widely recognized, rugged instrument with a 100 MHz bandwidth continued through the early 1980s. Its physical and visual design relies on functional typography, specifically utilizing **Helvetica Medium**, a custom **Tektronix** logotype, and a monoline sans-serif for the graticule scale.

**Verified imagery sources.** 2 URLs verified against institutional servers, distributed across:
- TekWiki — 1 URL(s)
- eBay — 1 URL(s)

Key references include **TekWiki**'s record at `https://w140.com/tekwiki/wiki/465`.

**Named typefaces.** The typography of this style is attested as:
- Helvetica Medium ( — attestation: inferred) — rendered here in Inter as the closest open substitute
- custom Tektronix logotype ( — attestation: unknown) — rendered here as bespoke imagery — no web-font substitute
- monoline sans-serif (graticule scale) ( — attestation: unknown) — no Google Fonts substitute available

**Honest gaps.** The most significant gap is the absence of a primary colour specification. There is no attested hex, Pantone, RAL, or Munsell value for the cabinet blue-grey. Four divergent inferred approximations exist (see §2), which underscores the minimal coverage status of the current forensic documentation. Resolution requires spectrophotometric measurement of a known-original unit or discovery of a **Tektronix** paint specification.
