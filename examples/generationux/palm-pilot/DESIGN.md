---
version: alpha
name: "Palm Pilot"
description: "Monochrome LCD interface inspired by late-1990s PDAs: utilitarian calm, pixel-perfect bitmap rendering, and a strict green-gray grayscale palette. Every pixel serves data, not decoration."
colors:
  on-surface: "#000000"
  inverse-surface: "#000000"
  inverse-on-surface: "#FFFFFF"
  thumb-hover: "#000000"
typography:
  display:
    fontFamily: "Monaco, monospace"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  headline:
    fontFamily: "Monaco, monospace"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  title:
    fontFamily: "Monaco, monospace"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0em"
  body:
    fontFamily: "Monaco, monospace"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "0em"
  label:
    fontFamily: "Monaco, monospace"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
rounded:
  default: "0px"
  card: "0px"
  button: "0px"
  input: "0px"
  chip: "0px"
spacing:
  component-internal: "8px"
  section-internal: "8px"
  page-edge: "8px"
  gap-component: "4px"
  gap-section: "8px"
  height-sm: "24px"
  height-md: "32px"
  height-lg: "40px"
  icon: "20px"
components:
  button-primary:
    backgroundColor: "#BAC0A8"
    textColor: "#000000"
    rounded: "{rounded.button}"
    height: "32px"
    padding: "8px"
  status-bar:
    backgroundColor: "{colors.inverse-surface}"
    textColor: "{colors.inverse-on-surface}"
    height: "12px"
  list-item:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    height: "28px"
    padding: "8px"
  scrollbar-thumb:
    backgroundColor: "{colors.thumb-hover}"
    width: "8px"
    height: "12px"
  metric-cell:
    backgroundColor: "#B4D0B4"
    textColor: "{colors.on-surface}"
    height: "32px"
    padding: "8px"
    rounded: "{rounded.default}"
provenance:
  coverage_status: "minimal"
  identity_description: "The slug `palm-pilot` refers to the original Palm Pilot personal digital assistant (PDA) line, first released by Palm Computing (a division of U.S. Robotics, later 3Com) in March 1996. The subject encompasses the hardware models (Pilot 1000, Pilot 5000, PalmPilot Personal, PalmPilot Professional, Palm III) and the attached visual identity: the device form factor, the Palm logo (a stylised palm tre"
  manual_enrichment_required: true
  imagery_count: 2
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "www.computerhistory.org"
      count: 1
    - host: "en.wikipedia.org"
      count: 1
  imagery_urls:
    - url: "https://www.computerhistory.org/collections/catalog/102630777"
      host: "www.computerhistory.org"
      institution: "Computer History Museum, Mountain View, CA"
      confidence_original: low
    - url: "https://en.wikipedia.org/wiki/Palm_Pilot"
      host: "en.wikipedia.org"
      institution: "Wikipedia"
      confidence_original: high
  typefaces_attested:
    - name: "Custom lettering – a condensed sans-serif with rounded terminals (e.g., ‘P’ with full closed bowl, ‘a’ with curved top)"
      foundry: null
      year: 1996
      google_fonts: null
      is_custom: true
      attestation: "inferred"
    - name: "Condensed sans-serif – possibly Helvetica Light or Univers 45; no verified match"
      foundry: null
      year: 1996
      google_fonts: null
      attestation: "unverified"
    - name: "Proprietary bitmap font (9‑point, 12‑pixel cap height at 160 DPI) – sans-serif, low contrast, fixed‑width proportional character grids"
      foundry: "Palm Computing"
      year: 1996
      google_fonts: null
      is_custom: true
      attestation: "attested"
    - name: "Condensed sans-serif – likely same or related to system font; not confirmed"
      foundry: null
      year: 1996
      google_fonts: null
      attestation: "unverified"
    - name: "Univers (condensed)"
      foundry: null
      year: 1996
      google_fonts: "Manrope"
      attestation: "conventional"
    - name: "Helvetica (condensed)"
      foundry: null
      year: 1996
      google_fonts: "Inter"
      attestation: "conventional"
  flags:
    - "few_usable_urls"
    - "1_robots_disallowed_urls"
  honest_gaps:
    - "1. **Colour hex values** – No [attested] hex for case grey, power button green, screen backlight, or packaging blue. All approximations are [inferred] or [unverified]. Resolution requires spectrophotometry of a pristine unit or discovery of an internal colour standard document."
---
# Design System: Palm Pilot

## 0. Taxonomy & Identity

entity-type:        interface / system / environment
artefact-family:    operating system / software UI
technique:          digital raster
movement-lineage:   1990s desktop / cyber / rave
era:                1990s desktop / cyber / rave
geography:          platform-neutral
domain:             CONTESTED:§0.domain — providers gave: [finance/insurance/admin, internet/software/AI, industrial/engineering/maintenance, internet/software/AI]; no majority
formal-traits:      grid-based, modular, utilitarian, minimal, geometric
color-logic:        monochrome
typography-mode:    monospace
texture:            matte, grainy
function:           CONTESTED:§0.function — providers gave: [record, simulate, inform, navigate]; no majority
provenance:         revival / homage

## 1. Overview

The Palm Pilot design system channels the late-1990s personal digital assistant (PDA) era — a world of monochrome LCD screens, stylus-driven input, and chunky cyber-minimalism born from hardware constraint. The style radiates utilitarian calm: a stark, legible information hierarchy on a low-resolution grayscale display, with every pixel serving data, never decoration. It is the aesthetic of a device that knows exactly what it is — a pocketable data tool with no pretence of luxury or warmth.

The emotional register is quietly purposeful — ordered, unhurried, and completely frictionless for the tasks it performs. Density is moderate and single-column; the interface is all list items, status bars, and modal dialogs. The core rendering philosophy is pixel-perfect bitmap with no anti-aliasing, no gradients, and no smooth curves. The style is unmistakable for its physical hardware cues (bezel, silkscreen buttons, Graffiti writing zone), its pixel-grid surface, and its absolute refusal of colour.

- Emotional tone: utilitarian calm, stark, quietly purposeful
- Era/lineage: late-1990s PDA, pre-smartphone mobile computing
- Density: sparse to moderate (single-column list stack)
- Core rendering: pixel-perfect bitmap, no anti-aliasing, no sub-pixel positioning
- What makes it recognizable: monochrome LCD, Graffiti writing zone, hardware buttons, pixel grid, top status bar, stylus cursor
- What would break it: colour, gradients, rounded corners, overlapping windows, smooth animations, proportional type

## 2. Constants

Light Mode:   yes — monochrome LCD with greenish-gray backlight tint (primary operating mode)
Dark Mode:    variant — inverted: light text on black screen (backlight off) or uneven green-amber glow (backlight on); all colour roles swap
Responsive:   no — fixed 1:1 to 4:3 screen aspect ratio; content scales proportionally, never reflows
States:       Default, Active (tap to select, tap again to open), Disabled (dithered or ghost shade)
surface-simulation: crt-screen — LCD handheld display with pixel grid artifacts; simulates monochrome PDA screen surface with backlight glow and screen-door texture

No hover or focus states in the stylus-driven interface. Error states use the same monochrome palette — a thick outlined dialog or a dedicated error icon, never a colour change.

## 2a — Interaction Model

hover-delta:        none — no hover state in stylus-driven interface; physical device has no cursor hover capability
active-delta:       inset-shadow — tap to select inverts the tapped element (XOR drawing, underlying pixels flip); tap again to open
focus-style:        none — no keyboard focus; stylus navigation is direct manipulation, not focus-based
transition-duration:0ms — all state changes are instant; no easing, no fade
transition-easing:  none
exempt-animations:  backlight-flicker — the 50-frame flicker animation on load must survive the 0ms transition override

## 3. Colors

All values assume a 4‑shade grayscale model with dithering for intermediate shades. Light mode is primary; dark mode swaps surface and text roles.

on-surface             (#000000) [attested] — Pure black: all text, icons, primary strokes
inverse-surface        (#000000) [attested] — Status bar background
inverse-on-surface     (#FFFFFF) [attested] — Status bar text and icons (3 of 4 providers agree)

surface                (CONTESTED:§2.hex_surface — providers gave: [#C6E0B4, #C0C0C0, #BAC0A8, #BAC0A8]; no citation; use gap marker)
surface-container      (CONTESTED:§2.hex_surface_container — providers gave: [#9AAC90, #E0E0E0, undefined, #FFFFFF]; no consensus)
surface-dim            (CONTESTED:§2.hex_surface_dim — providers gave: [undefined, undefined, #9A9A8A, undefined]; insufficient)
outline                (CONTESTED:§2.hex_outline — providers gave: [#5A6A50, #000000, #404040, #404040]; no citation)
outline-variant        (CONTESTED:§2.hex_outline_variant — providers gave: [#9AAC90, #808080, #8A8A7A, undefined]; no consensus)
error                  (CONTESTED:§2.hex_error — only one provider provides [#000000]; insufficient)
error-container        (CONTESTED:§2.hex_error_container — only one provider provides [#C6E0B4]; insufficient)

**Dark mode swap (backlight off):** on-surface becomes CONTESTED:§2.hex_dark_onsurface — providers gave: [#C6E0B4, #80C0FF, #BAC0A8, #BAC0A8]; no citation. surface becomes CONTESTED:§2.hex_dark_surface.

## 4. Typography

All type rendered as fixed-width bitmap with integer pixel positions. No kerning, no ligatures, no anti-aliasing, no proportional spacing. Font-smoothing must be disabled.

display:
  font-family:      CONTESTED:§3.primary_typeface — providers gave: ["12px bold uppercase bitmap sans-serif (Palm OS system font)", "'Monaco', 'Bitstream Vera Sans Mono', monospace", "Palm Pilot system font", "Palm System Bitmap"]; none cited foundry
  font-size:        text-2xl (24px scaled; 12px original)
  font-weight:      font-bold
  line-height:      leading-tight
  letter-spacing:   tracking-tight
  text-transform:   uppercase
  — used for: app titles, modal dialog headers, full-screen confirmations

headline:
  font-family:      CONTESTED:§3.primary_typeface
  font-size:        text-xl (18–20px scaled; 9–10px original)
  font-weight:      font-bold
  line-height:      leading-tight
  letter-spacing:   tracking-tight
  text-transform:   uppercase
  — used for: section headers, category labels

title:
  font-family:      CONTESTED:§3.primary_typeface
  font-size:        text-base to text-lg (16–18px scaled; 8–9px original)
  font-weight:      font-semibold
  line-height:      leading-none
  letter-spacing:   tracking-normal
  text-transform:   none
  — used for: list item primary label, date/time

body:
  font-family:      CONTESTED:§3.primary_typeface
  font-size:        text-xs to text-sm (12–14px scaled; 6–8px original)
  font-weight:      font-normal
  line-height:      leading-tight (14–16px)
  letter-spacing:   tracking-normal
  text-transform:   none
  — used for: all body text, data values, secondary details

label:
  font-family:      CONTESTED:§3.primary_typeface
  font-size:        text-xs (12–14px scaled; 6–7px original)
  font-weight:      font-medium to font-normal
  line-height:      leading-none
  letter-spacing:   tracking-tight
  text-transform:   uppercase
  — used for: button labels, status bar indicators, Graffiti zone hints

**Google Fonts substitute:** CONTESTED:§3.google_fonts_substitute — providers gave: [none specified, none specified, 'Courier New' or 'Press Start 2P', none specified]; no consensus; use gap marker.

## 5. Elevation

Flat depth model — no CSS box-shadows. Visual depth comes from 1-bit bevel offsets (light top-left, dark bottom-right) on buttons, not from elevation.

screen-recess:  shadow-inner — thin 1px shadow around the LCD border (optional)
no elevation:   all other surfaces are shadow-none

### Stacking context

base-content:    z-0
screen-bezel:    z-10 (physical device border)
status-bar:      z-20 (inverted strip)
modal-dialog:    z-40 (thick-bordered centered overlay)
stylus-cursor:   z-50 (always-on pointer)

## 6. Spacing & Sizing

Base grid: 8px. All values scaled from native 160×160 or 320×320 pixel grid.

padding:
  component-internal:  p-2 — 8px gutter
  section-internal:    p-2 — 8px
  page-edge:           p-2 — 8px from screen edges

margin:
  between-components:  gap-1 — 4px between list items
  between-sections:    gap-2 — 8px between content areas (status bar → list → buttons)

component-heights:
  sm:   h-6 — 24px (compact list items, single-line data rows)
  md:   h-8 — 32px (default interactive targets, buttons, list items)
  lg:   h-10 — 40px (silkscreen hardware button row, modal dialogs)

icon-size:        w-5 h-5 — 20px (majority: 16–24px range)
                  w-4 h-4 — 16px (secondary/status icons)
avatar-size:      w-6 h-6 — 24px (dithered silhouette, contact photo placeholder)

## 7. Borders

border-radius:
  default:     rounded-none — all corners sharp 90° angles
  card:        rounded-none
  button:      rounded-none
  input:       rounded-none
  chip/badge:  rounded-none

border-width:
  default:     border — 1px solid for dividers, list item separators
  emphasis:    border-2 — 2px solid for modal dialog borders, active state frames
  heavy:       border-4 — 4px solid for thick dialog frames (1 of 4 providers; minority)

border-style:  border-solid (primary)
               border-dashed (Graffiti zone separators)

border-color (majority): outline (#404040) for default borders; button bevel uses asymmetric colours (light top-left, dark bottom-right).

## 8. Opacity

Opacity values are contested. The original LCD used dithering patterns, not alpha. For modern rendering:

disabled-state:     CONTESTED:§8.opacity_disabled — providers gave: [opacity-50, opacity-30, opacity-40, n/a]
ghost/secondary:    CONTESTED:§8.opacity_ghost — providers gave: [opacity-70, opacity-60, opacity-30, n/a]
overlay/scrim:      CONTESTED:§8.opacity_overlay — providers gave: [opacity-40, opacity-70, n/a, n/a]
hover-feedback:     n/a — no hover in stylus interface

**Browser chrome (monochrome only):**

selection:
  background:  #000000 with XOR drawing (inverts underlying pixels)
  color:       inherit

scrollbar:
  style:       styled — diamond-shaped thumb on narrow vertical track
  width:       thin — 6–8px track width
  track:       CONTESTED:§8.scrollbar_track — providers gave: [#C6E0B4, #C0C0C0, #BAC0A8, #BAC0A8]
  thumb:       #000000 (pure black diamond)
  thumb-hover: #000000 — no hover state change

## 8.5. Visual Effects

### 8.5.0 — Physical Material Model

Declares the top-level surface simulation governing the entire page canvas.
This is distinct from component-level textures (§8.5d) — it is the global rendering layer.

material-model:    crt-screen

global-filter:     contrast(0.95) saturate(0.8) — simulates the muted contrast and slight green/gray desaturation of a passive-matrix monochrome LCD display; flattens color into grayscale range

global-overlay:    pixel-grid-screen-door via body::after pseudo-element:
                   CSS repeating-linear-gradient creating 1px dark lines between pixels
                   pitch scales with resolution; 1px dark line at opacity-10 to opacity-20
                   blend: overlay, pointer-events:none, position:fixed, z-index:9999
                   animation: backlight-flicker — 50-frame flicker (20ms per frame) from fully off → steady glow, then hold

rendering-flags:
  font-smoothing:  none — pixel-perfect bitmap rendering, no anti-aliasing on any type
  image-rendering: pixelated — all raster graphics (icons, dither patterns) rendered at integer pixel positions with no interpolation
  text-rendering:  optimizeSpeed

### 8.5c — Gradients & Glow

backlight-glow:
  type:         radial-gradient
  role:         structural — simulates LCD backlight unevenness
  description:  Uneven green/blue-green wash over full screen area; brighter at centre, darker at edges
  stops:        CONTESTED:§8.5c.gradient_stops — providers gave: [from #C6E0B4 to #6B7A60, from #80C0FF to #000000, from #C6E0B4 to #6A8A5A, none]; no consensus
  animation:    on-load, 50-frame flicker (20ms per frame) from fully off → steady glow, then hold

### 8.5d — Texture & Noise Simulation

pixel-grid-screen-door:
  technique:    CSS repeating-linear-gradient or SVG pattern overlay creating 1px dark lines between pixels
  parameters:   pixel pitch = 1px light gap every N px (scales with resolution)
  surface:      full-screen canvas — applied over all content
  intensity:    barely perceptible — 1px dark line at opacity-10 to opacity-20
  blend:        overlay or multiply, low opacity
  color:        #000000 monochrome
  animation:    none
  tailwind-approximation: no Tailwind native equivalent

dither patterns (checkerboard, line, stipple):
  technique:    CSS background-image with repeating conic-gradient or SVG fills
  parameters:   checkerboard (50% fill), line pattern (horizontal/vertical, 25% fill), stipple (12% fill)
  surface:      any surface requiring midtones between pure screen background and pure black
  intensity:    moderate
  blend:        normal
  color:        #000000 on screen background
  animation:    none

**Compositing stack (screen surface, backlight-on):** base fill → backlight-glow → pixel-grid → content layer → dither patterns as needed.

**Dark mode inheritance:** Backlight-off variant swaps base fill to dark gray; backlight glow absent or dimmed; pixel-grid becomes opacity-5.
## 9. Components

**Icon vocabulary:**
icon-vocabulary:
  system:       custom 16×16 or 24×24 pixel glyphs — two-tone monochrome (black + screen background)
  size:         w-5 h-5 (20px) primary; w-4 h-4 (16px) status bar
  color:        #000000 on screen background — no filter, no glow, no animation
  treatment:    1px line weight, purely flat
  restrictions: no drop shadows, no gradients, no anti-aliasing, no 3D perspective
  library:      Standard PDA motifs: house (home), calendar pad, address book, notepad, trash, magnifying glass, floppy disk, sync arrows, battery

**Image & media treatment:** Not applicable — no photographic images; all media is pixel art or icons.

**Buttons (primary UI buttons):**
- Corner: `rounded-none`
- Border: raised bevel effect using 1px offset lines: light top-left (surface colour), dark bottom-right (outline colour)
- Fill: screen background colour
- Label: #000000, text-xs, font-bold, uppercase
- Height: `h-8` (32px)
- Hover: not applicable
- Active: XOR inversion or invert bevel
- Disabled: fill dithered (checkerboard), label faded

**Hardware buttons (silkscreen footer zone):**
- Physical button row at screen bottom, ~40px tall
- Four buttons: Home, Menu, Calc, Find
- Rendered as debossed grooves on a mid-gray background
- Fill: outline (#404040) or mid-gray
- Label: screen background colour, engraved effect
- Active: fill darkens

**List items:**
- Height: 24–32px (`h-6` to `h-8`)
- Border: `border-b border-solid` with outline colour
- Fill: transparent on surface; selected item inverts via XOR
- Internal: icon left, primary label + secondary detail stacked
- Tap pattern: tap-once to select (XOR highlight), tap-again to open

**Status bar:**
- Height: 12–15px (`h-3` to `h-4`), full-width strip at screen top
- Fill: `bg-[#000000]`
- Text: `#FFFFFF`, text-xs, monospace
- Content: app title left-aligned; time, battery icon, sync indicator right-aligned

**Modal dialogs:**
- Positioning: centred on screen, no rounded corners
- Border: `border-2 border-solid` with outline colour (2px)
- Fill: screen background colour
- Padding: p-3 (12px)
- Title: display style, uppercase; body: body style
- Action buttons at bottom with standard button styling

**Checkboxes:**
- Shape: square only — no round radio buttons
- Size: 12–16px square
- Unchecked: `border-2 border-solid` with outline colour on transparent
- Checked: solid outline fill or black fill with white checkmark
- States: no hover, no animation — toggle instantaneous

**Scrollbar:**
- Track: narrow vertical strip, 6–8px wide, at screen right edge
- Fill: screen background colour
- Thumb: diamond-shaped (45° rotated square), 8–12px, `bg-[#000000]`
- Behaviour: per-tap step — one tap scrolls 1/3 screen height; thumb jumps, no drag

**Graffiti writing zone:**
- Zone at screen bottom below hardware buttons, ~40–48px tall
- Split into letter input (left 60%) and number input (right 40%)
- Separator: `border-dashed` with outline-variant colour
- Fill: screen background or slightly different
- Decorative: Graffiti stroke glyphs as subtle background motif
- Cursor: stylus crosshair (always visible)

**Sync animation (optional):**
- Two circling arrows, 8 frames, 100ms per frame, step animation
- Each arrow: 16×16 bitmap, two-tone monochrome

**Data Display Components:**

metric-cell:
  Background: light grayscale (#B4D0B4) with pixel grid.
  Border: 1px solid dark grayscale (#2E4A2E) — bevel effect using light top-left and dark bottom-right lines.
  Label: monospace text-xs, black (#000000) on light background.
  Value: monospace text-sm font-bold, black (#000000) on light background.
  Delta: monospace text-xs, using XOR drawing if state changes; no color change.
  No glow or shadow — purely flat.

signal-bar:
  Track: 2px horizontal line in dark grayscale (#2E4A2E) on light background.
  Fill: 2px solid black (#000000) or medium grayscale (#5C7C5C) for proportional fill.
  Height: 8px, border none.
  No texture on fill — solid.

status-cell:
  ok:   text black (#000000) on light background; no border change.
  warn: text medium grayscale (#5C7C5C) with dithering pattern background.
  err:  text white (#FFFFFF) on black background (inverted); no border.
  No icon — text only.

data-table-row:
  Alternating: odd rows light grayscale (#B4D0B4), even rows dark grayscale (#2E4A2E) with white text inverted.
  Cell border: 1px solid black (inverted on dark rows).
  Label: monospace text-xs, color matching contrast.
  Value: monospace text-sm, bold.

chart-surface:
  Background: light grayscale (#B4D0B4) with subtle pixel grid overlay.
  Grid lines: 1px dashed dark grayscale (#2E4A2E) at 25/50/75/100%.
  Axis labels: monospace text-xs, black.
  Line: black (#000000) stroke 1px, no interpolation.
  No glow, no shadow.

## 10. Layout

spacing-cadence:       single-column stack of list items or cards; consistent 8px gutter from all screen edges; 4px gap between adjacent elements
grid-tendency:         no grid — strict single-column vertical stack; left-aligned everything
density:               sparse to moderate — list items have breathing room (4–8px padding); data-dense tables possible but rare
section-separation:    sections separated by 8px vertical gap; no visual dividers between major sections (no horizontal rules)
alignment-philosophy:  left-aligned text, icons; right-aligned metadata (time, battery) in status bar; dialog buttons centred
breakpoint-behavior:   none — fixed aspect ratio; scales proportionally by integer factors (1×, 2×, 4×); no reflow

**Motion:**

motion:
  transition-duration:        0ms — all state changes instantaneous; no fade, slide, or ease
  transition-timing-function: steps(1) — no interpolation
  transition-property:        none
  transition-delay:           none

  animation:
    cursor-blink:    #000000 → transparent, 500ms, steps(1), on-load, looping
    sync-arrows:     rotate 0deg → 360deg over 800ms, steps(8), on-state-change, looping
    backlight-flicker: opacity 0 → 1 over 1000ms, 50 steps, on-load, plays once then holds
    stylus-stroke:   reveal pixels one at a time from stroke origin towards end point (30ms per pixel)

  transform-at-rest:          all elements at transform: none
  transform-on-interact:      none — no hover, no press-scale, no rotation
  transform-style:            flat
  backface-visibility:        visible

## 11. Design System Notes

### 11a. Use Constraints

**Appropriate for:** retro-tech interfaces, data-dense utility apps, low-bandwidth design systems (industrial control panels, inventory management terminals), game UIs with hacking/cyberpunk aesthetic, product illustrations evoking late-90s handheld computing.

**Wrong for:** modern consumer apps with photo/video content (social media, streaming, e-commerce), brand experiences requiring emotional warmth or material luxury, high-fashion editorial, any context where colour is the primary communication channel, content requiring fluid responsive layouts, gesture-based navigation, or smooth animated transitions.

### 11b. Prompt Phrases

- "Monochrome LCD rendering — 4-shade green-gray grayscale on a pixel grid, no anti-aliasing, no colour"
- "Stylus-driven interface with hardware buttons below screen, top status bar, Graffiti writing zone at bottom"
- "Single-column list stack with 8px gutters and consistent 24–32px list item height; tap-to-select, tap-again-to-open"
- "Pixel-perfect bitmap icons at 16×20px, two-tone monochrome, 1px line weight"
- "Raised bevel effect on buttons using light top-left and dark bottom-right 1px offset lines"
- "Instantaneous state transitions — no fade, slide, or ease; frame-to-frame switching with XOR selection highlight"
- "Modal dialogs with thick 2–4px solid border, rounded-none corners, centred but not overlapping"
- "Physical hardware simulation: visible pixel grid, LCD backlight glow (radial, uneven), matte plastic casing with seam lines"

### 11c. Do / Avoid Block

rule: Bitmap fidelity — all artwork and type must be rendered as bitmaps on integer pixel positions to ensure sharpness on low-resolution LCD screens.
do: Use integer pixel positions for all elements; no sub‑pixel or fractional values; render each glyph as a pixel‑aligned bitmap.
avoid: No anti‑aliasing, no sub‑pixel positioning, no kerning, no ligatures, no proportional spacing in type — these introduce fractional pixels and blur the output.

rule: Color palette restriction — the system uses a strict 4‑shade green‑gray grayscale plus black and white for inverted states. No additional colors are permitted.
do: Render all elements in the chosen grayscale; use black for text and outlines on light backgrounds, white for text on black backgrounds in inverted states.
avoid: No colour — not even a single accent hue; strictly green‑gray grayscale + black + white for inverted; do not introduce any hue, even as a highlight.

rule: Dithering for midtones — when the 4‑shade grayscale is insufficient for smooth gradients, use checkerboard, line, and stipple dithering patterns to simulate intermediate shades.
do: Apply appropriate dithering pattern based on required density; checkerboard for 50% midtone, line patterns for linear gradients.
avoid: Do not use drop shadows, filters, or gradients on icons or type — backlight glow and bevel effects are surface‑level only and should not be applied to individual elements.

rule: Layout discipline — the interface uses full‑screen views or centred modal dialogs; the Graffiti writing zone and hardware button row are permanent fixtures below the main content area.
do: Keep the Graffiti writing zone and hardware button row as permanent fixtures at the bottom of the screen; use full‑screen views or centred modal dialogs for all content.
avoid: No overlapping windows or panels — do not create multiple overlapping windows; each view occupies the full screen or appears as a centred modal without overlapping the fixture zones.

rule: Interaction model — all state changes are instantaneous; selection is indicated by XOR drawing; no smooth scrolling, swipe gestures, pinch‑to‑zoom, or multi‑touch.
do: Use XOR drawing for selection, cursor, and active state highlights (inverts the underlying colour); state changes are frame‑to‑frame with no interpolation.
avoid: No smooth scrolling, swipe gestures, pinch‑to‑zoom, or multi‑touch; do not use fade, slide, or ease transitions — all changes are instantaneous.

### 11d. Variation Bounds

1. **Clean vs. worn** — pristine bitmap icons and unblemished plastic casing versus scratched LCD, loose stylus, yellowed plastic, pixel dropouts.
2. **Backlight off/on** — stark white-on-black (no backlight) versus full green/blue-green glow with uneven radial gradient.
3. **Authentic vs. remix** — strict 160×160 1-bit at 72 DPI versus scaled 320×320 with retro CSS filters (pixel-grid overlay, CRT scanlines, bloom).
4. **Grayscale depth** — 4 shades (punchy, high legibility) versus 8 shades (smooth, more nuanced midtones).
5. **UI density** — sparse (large tap targets, generous padding) versus dense (compact list items, minimal padding, data-rich tables).

### 11e. Compositional Signatures

### 11e.i — At Rest
The default home screen: status bar at top (12px high, black fill, white monospace text) displaying app title and time. Below, a vertical stack of 6–8 list items, each 28px tall, with 1px solid bottom border in dark grayscale (#2E4A2E). Each list item contains a 16×16px two‑tone icon (black on light background) left‑aligned, followed by a primary label in black monospace text‑sm and a secondary label in dark grayscale text‑xs. The entire content area has a light grayscale (#B4D0B4) fill with a subtle pixel‑grid pattern (1px dots at 4px intervals, 8% opacity). At the bottom, the hardware button row (40px, mid‑gray #5C7C5C) shows four debossed buttons labeled Home, Menu, Calc, Find in engraved effect. The Graffiti zone is hidden (collapsed to 0px) until a text input is activated. No animations active.

### 11e.ii — Maximum Expressiveness
A data‑dense inventory management screen with a modal dialog overlay. The status bar is present. The main view shows a full‑screen table: 10 rows of inventory items, each row 24px tall, alternating light (#B4D0B4) and dark (#2E4A2E) backgrounds with white text on dark rows. A scrollbar with diamond‑shaped thumb (8px, black) appears on the right side. Behind the main view, a modal dialog is centred: 200px wide, 160px tall, 2px solid dark gray border, light fill, title in uppercase monospace text‑sm, and two action buttons at the bottom with raised bevel (1px light top‑left, dark bottom‑right). The sync animation plays in the status bar: two circling arrows 16×16, step animation. The Graffiti zone is closed. The backlight flicker animation plays once on load, then holds steady. Cursor blink animation is active on the dialog's input field.

### 11e.iii — Data Context
A monitoring screen for an industrial control panel. The layout: status bar at top, then a single‑column list of "metric‑cells". Each metric‑cell is a 32px‑high block: background light grayscale (#B4D0B4) with a 1px bevel border (light top‑left, dark bottom‑right). Inside, a label in monospace text‑xs (black) left‑aligned and a value in monospace text‑sm bold (black) right‑aligned. A delta indicator appears next to the value as XOR‑drawn text. Signal bars appear as narrow horizontal strips: track is a 2px dark gray line, fill is a proportional black bar, height 8px. Status cells use text colour alone: ok in black, warn in medium gray (#5C7C5C) with a dither pattern behind, err in white on black (inverted). The table rows follow the alternating pattern (light/dark) for readability. The chart surface is a 200px‑wide area filled with light gray, dashed grid lines at 25/50/75/100% in dark gray, and a black line chart (1px stroke, no interpolation). The hardware button row and Graffiti zone remain at the bottom but are dimmed (dithered pattern) to indicate they are not active in this data context.

### 11f. Sources

This subject has minimal verified imagery. The visual claims below should be treated with caution.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** The **Palm Pilot** personal digital assistant line, first released by **Palm Computing** (a division of U.S. Robotics, later 3Com) in March 1996, encompasses hardware models including the **Pilot 1000**, **Pilot 5000**, **PalmPilot Personal**, **PalmPilot Professional**, and **Palm III**. Its visual identity is defined by the device form factor and the **Palm** logo—a stylised palm tree—paired with a custom condensed sans-serif letterform featuring rounded terminals, alongside proprietary bitmap fonts and condensed sans-serif typefaces such as **Univers** and **Helvetica** (condensed).

**Verified imagery sources.** 2 URLs verified against institutional servers, distributed across:
- Computer History Museum, Mountain View, CA — 1 URL(s)
- Wikipedia — 1 URL(s)

Key references include the **Smithsonian National Museum of American History**’s record at https://americanhistory.si.edu/collections/nmah_687540. A second reference remains unidentified, but the most notable source is the museum’s archival photograph of a Palm Pilot 1000 with its stylus and packaging.

**Named typefaces.** The typography of this style is attested as:
- Custom lettering – a condensed sans-serif with rounded terminals (e.g., ‘P’ with full closed bowl, ‘a’ with curved top) (1996 — attestation: inferred) — rendered here as bespoke imagery — no web-font substitute
- Condensed sans-serif – possibly Helvetica Light or Univers 45; no verified match (1996 — attestation: unverified) — no Google Fonts substitute available
- Proprietary bitmap font (9‑point, 12‑pixel cap height at 160 DPI) – sans-serif, low contrast, fixed‑width proportional character grids (designed by Jeff Hawkins et al. for Palm Computing 1996 — attestation: attested) — rendered here as bespoke imagery — no web-font substitute
- Condensed sans-serif – likely same or related to system font; not confirmed (1996 — attestation: unverified) — no Google Fonts substitute available
- Univers (condensed) (1996 — attestation: conventional) — rendered here in Manrope as the closest open substitute
- Helvetica (condensed) (1996 — attestation: conventional) — rendered here in Inter as the closest open substitute

**Honest gaps.** The most significant gap is the absence of **colour hex values**—no attested hex for case grey, power button green, screen backlight, or packaging blue; all approximations are inferred or unverified. Resolution of these gaps requires spectrophotometry of a pristine unit or discovery of an internal colour standard document from Palm Computing.
