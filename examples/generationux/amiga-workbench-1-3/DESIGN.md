---
version: alpha
name: "Amiga Workbench 1.3"
description: "A pixel-precise, chunky GUI language reproducing the Commodore Amiga Workbench 1.3 interface from the late 1980s, built around hard edges, a strict 4-colour palette, monospaced bitmap typography, and no anti-aliasing or gradients."
colors:
  primary: "#0055AA"
  on-primary: "#FFFFFF"
  surface: "#FFFFFF"
  on-surface: "#000000"
  secondary: "#FF8800"
  on-secondary: "#000000"
  outline: "#000000"
  outline-variant: "#808080"
typography:
  display:
    fontFamily: "Topaz, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0em"
    textTransform: "none"
  headline:
    fontFamily: "Topaz, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0em"
    textTransform: "none"
  title:
    fontFamily: "Topaz, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0em"
    textTransform: "none"
  body:
    fontFamily: "Topaz, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0em"
    textTransform: "none"
  label:
    fontFamily: "Topaz, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0em"
    textTransform: "none"
rounded:
  default: "0px"
  card: "0px"
  button: "0px"
  input: "0px"
spacing:
  component-internal: "4px"
  section-internal: "8px"
  page-edge: "8px"
  gap-component: "8px"
  gap-section: "12px"
  height-sm: "16px"
  height-md: "24px"
  height-lg: "32px"
  icon: "32px"
components:
  button:
    backgroundColor: "#FFFFFF"
    textColor: "#000000"
    rounded: "{rounded.button}"
    padding: "4px"
    height: "16px"
  button-active:
    backgroundColor: "#FFFFFF"
    textColor: "#000000"
    rounded: "{rounded.button}"
    padding: "4px"
  window:
    backgroundColor: "#FFFFFF"
    rounded: "{rounded.default}"
    padding: "8px"
  menu-bar:
    backgroundColor: "#0055AA"
    textColor: "#FFFFFF"
    padding: "4px"
    height: "14px"
  icon:
    width: "32px"
    height: "32px"
  input:
    backgroundColor: "#FFFFFF"
    textColor: "#000000"
    rounded: "{rounded.input}"
    padding: "4px"
  status-bar:
    backgroundColor: "#FF8800"
    textColor: "#000000"
    height: "8px"
  metric-cell:
    backgroundColor: "#0055AA"
    textColor: "#FFFFFF"
    padding: "4px"
  signal-bar-track:
    backgroundColor: "#808080"
    height: "4px"
  signal-bar-fill:
    backgroundColor: "#FFFFFF"
    height: "4px"
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
    - host: "archive.org"
      count: 1
    - host: "www.commodore.ca"
      count: 1
  imagery_urls:
    - url: "https://archive.org/details/amiga-hardware-reference-manual-3rd-edition"
      host: "archive.org"
      institution: "Internet Archive"
      confidence_original: medium
    - url: "https://www.commodore.ca/"
      host: "www.commodore.ca"
      institution: "Commodore.ca (fan archive)"
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
# Design System: Amiga Workbench 1.3

## 0. Taxonomy & Identity

entity-type:          interface / system / environment
artefact-family:      operating system / software UI
technique:            digital raster
movement-lineage:     vernacular commercial style
era:                  1980s postmodern
geography:            US / Canada
domain:               internet / software / AI
formal-traits:        grid-based, geometric, flat, utilitarian
color-logic:          spot-color (saturated)
typography-mode:      monospace
texture:              matte (optional halated, grainy via CRT simulation)
function:             navigate
provenance:           canonical historical source

## 1. Overview

The Amiga Workbench 1.3 design system reproduces the graphical user interface of the Commodore Amiga personal computer from the late 1980s. It is a pixel-precise, chunky visual language built around hard edges, a strict 4‑colour palette per screen (expandable to 8 or 16), and monospaced bitmap typography. Every element is hand‑drawn at 1:1 pixel scale with visible pixel edges, no anti‑aliasing, no alpha transparency, and no gradients.

The emotional register is utilitarian and no‑nonsense — a tool interface that makes no concessions to modern smoothness or fluidity. The style is unmistakably late‑1980s GUI culture: a period when computer interfaces were defined by hardware constraints (640×256 PAL, 4‑colour planar graphics, 50/60 Hz refresh) and designers worked within those constraints with creative pragmatism.

- **Emotional tone:** pragmatic, utilitarian, nostalgic (for those who remember), clinically retro for those who don't
- **Era/lineage:** late 1980s commercial GUI — designed in an era of planar 2D framebuffers, 4-colour planar chunky graphics, and no hardware acceleration
- **Density level:** moderate — windows stack and overlap; icons are sparse but perfectly aligned; no visual noise
- **Core rendering philosophy:** every pixel is exactly one of the hardware’s palette colours; no subpixel positioning, no antialiasing, no gradients (dither only for pseudo-shading, never smooth)
- **What makes it recognisable:** blue (#0055AA) full-screen background, white window surfaces, orange (#FF8800) accents on active elements and disk icons, black borders and drop shadows, blocky monospaced Topaz font, double-line window borders, tall hollow arrow pointer
- **What would break it:** smooth curves, alpha transparency, anti-aliased text, more than 4–6 colours per screen, rounded corners, drop shadows with blur, variable font sizes, any use of gradients or blended transparency
- **Surface/Texture:** the interface is flat and matte (CRT screen surface); optional CRT artifacts (scanlines, phosphor glow, barrel distortion, vignette) may be applied but are not part of the core aesthetic — they are production realism overlays

## 2. Constants

Light Mode:   yes (primary) — blue background, white windows, black text
Dark Mode:    no — the style does not have a dark variant; screen background is already a medium blue
Responsive:   no — fixed resolution 640×256 (PAL) or 640×200 (NTSC); all elements snap to a fixed pixel grid
States:       Default, Active (window in focus), Disabled (greyed gadgets)
surface-simulation: crt-screen — the interface is displayed on a CRT monitor; scanlines, phosphor glow, and barrel distortion are optional overlays

## 2a — Interaction Model

hover-delta:        none — no hover state; buttons and gadgets do not change on hover
active-delta:       bevel-depress — on press, the bevel reverses (light edge becomes dark, dark edge becomes light); the gadget appears depressed
focus-style:        none — no keyboard focus ring; active window is indicated by title bar colour and checkerboard pattern
transition-duration:0ms — all state changes are instantaneous, with no easing
transition-easing:  none
exempt-animations:  none

## 3. Colors

primary:               #0055AA — Screen background, active title bar, menu bar, background pattern base
on-primary:            #FFFFFF — Title text, bright bevel edges, window fill
surface:               #FFFFFF — Window background, file list panels, gadget interiors
on-surface:            #000000 — File list text, general content text
secondary:             #FF8800 — Accent orange: disk icons, progress bars, selected gadgets, active window checkerboard (with white)
on-secondary:          #000000 — Text on orange areas (seldom used)
outline:               #000000 — Borders, bevel shadows, icon outlines, drop shadows, pointer outline
outline-variant:       #808080 — Inactive title bar fill, disabled gadgets, lighter border for inactive elements
error:                 (not used)
inverse-surface:       (not used)

- **Palette rule:** A single screen typically uses at most 4 colours from the list (including black and white); the 5th colour (outline-variant grey) is used only for inactive windows and disabled gadgets. Dither (2×2 checkerboard) may simulate additional shades but never adds new colour positions.
- **Orange is reserved** for highlights, active elements, and disk/drawer icons only — never for background fills or text.
- **All colours are fully opaque** — no alpha channel.
- **Primary hex #0055AA [attested]** — consistent across all provider reconstructions.
- **Secondary hex #FF8800 [attested]** — consistent across all provider reconstructions.

## 4. Typography

All text is rendered in the **Topaz** monospaced bitmap font (Commodore/John Eidsheim, 1985). It is a monospaced, 1‑bit pixel font with no kerning, no sub‑pixel positioning, and hard bitmap outlines. There is no Google Fonts substitute; fallback to system monospace (Courier, fixed‑width terminal font) in non‑pixel‑perfect renderers.

display:
  font-family:    Topaz, monospace
  font-size:      text-xs (12px approximation; actual 8px glyph height)
  font-weight:    font-normal
  line-height:    leading-none
  letter-spacing: tracking-normal
  text-transform: normal-case

headline:
  font-family:    Topaz, monospace
  font-size:      text-xs
  font-weight:    font-normal
  line-height:    leading-none
  letter-spacing: tracking-normal
  text-transform: normal-case

title:
  font-family:    Topaz, monospace
  font-size:      text-xs
  font-weight:    font-normal
  line-height:    leading-none
  letter-spacing: tracking-normal
  text-transform: normal-case

body:
  font-family:    Topaz, monospace
  font-size:      text-xs
  font-weight:    font-normal
  line-height:    leading-none
  letter-spacing: tracking-normal
  text-transform: normal-case

label:
  font-family:    Topaz, monospace
  font-size:      text-xs
  font-weight:    font-normal
  line-height:    leading-none
  letter-spacing: tracking-normal
  text-transform: normal-case

- All typography uses the same face, size, weight, and spacing — visual hierarchy is established by colour (black on white vs white on blue), placement, and optional capitalisation (file names are mixed case).
- Window titles are centred within their title bar region.  
- File name labels are left-aligned, truncated to 31 characters.  
- No Google Fonts substitute is available; the font must be supplied as a packaged bitmap or custom `@font-face` using a TrueType conversion of Topaz.

## 5. Elevation

Flat depth model — no shadow hierarchy. The only depth cues are:
- 2‑pixel solid black drop shadows on icons (offset right/down) — cosmetic, not elevation.
- Active window sits above others with an orange/checkered title bar; inactive windows have a solid grey title bar.
- No blur, no stacking layers above the base-content plane.
- Bevels on gadgets: 1‑pixel light (white) on top/left, dark (black) on bottom/right create raised appearance.

stacking:
  base-content:        z-0
  windows:             z-10 (default), z-20 (active)
  menu-bar:            z-30 (floats above windows)
  pointer:             z-50

## 6. Spacing & Sizing

All values assume a 1× pixel grid; Tailwind spacing units approximate 4px increments.

padding:
  component-internal:  p-1   (4px) — inside buttons, gadget faces
  section-internal:    p-2   (8px) — inside windows, between content border
  page-edge:           p-2   (8px) — screen edge margin

margin:
  between-components:  gap-2 (8px) — icon grid spacing, between gadgets
  between-sections:    gap-3 (12px) — between windows, window to screen edge

component-heights:
  sm:   h-4 (16px)   — buttons, scroll bar thumb
  md:   h-6 (24px)   — title bar (including border)
  lg:   h-8 (32px)   — window border area (menu bar)

icon-size:       w-8 h-8 (32px) — standard Workbench icon (includes 2px drop shadow region)
avatar-size:     (not used)

## 7. Borders

border-radius:
  default:     rounded-none   — all corners are hard 90°
  card:        rounded-none
  button:      rounded-none
  input:       rounded-none
  chip/badge:  (not used)

border-width:
  default:     border         (1px) — thin bevel edge, icon outlines, pointer
  emphasis:    border-2       (2px) — window outer border, double-line window frame

border-style:  border-solid   — only solid lines; no dashed or dotted

border-image:  (not used)

clip-path:     (not used)     — all elements are axis-aligned rectangles

- All bevels are 1‑pixel: top/left edge uses `on-primary` (white), bottom/right edge uses `on-surface` (black) to create pseudo‑3D raised effect.
- Window border: outer 2‑pixel solid black, inner 1‑pixel white (light top/left, dark bottom/right).
- Icon outlines: 1‑pixel solid black.

## 8. Opacity

No alpha transparency is used. Disabled state is indicated by colour shift (grey fill, reduced contrast) not opacity. The style does not employ ghost/secondary elements or overlay scrims.

disabled-state:     (not opacity-based — use outline-variant #808080 for gadget backgrounds, on-surface = #000000 text)
ghost/secondary:    (not used)
overlay/scrim:      (not used)
hover-feedback:     (not used — buttons have no hover state)

**Browser chrome (conditional — activate for authentic CRT simulation):**
selection:
  background:  (not applicable — text is in file list panels, not selectable in browser)
scrollbar:
  style:       styled (if scroll bars are needed in the UI)
  width:       thin ~6px
  track:       #0055AA
  thumb:       #FFFFFF with #000000 border
  thumb-hover: #FF8800 (active scroll bar thumb)

## 8.5. Visual Effects

Activate — the style includes several optional CRT simulation effects that are characteristic of the hardware era.

### 8.5.0 — Physical Material Model

material-model:    crt-screen — the interface is rendered as if displayed on a CRT monitor

global-filter:     none — no global colour manipulation applied; CRT appearance is achieved via overlays only

global-overlay:    CRT scanlines via body::after pseudo-element:
                   repeating-linear-gradient(transparent 0 1px, rgba(0,0,0,0.15) 1px 2px)
                   blend: multiply, opacity-75, pointer-events:none, position:fixed, z-index:9999
                   Optional radial-gradient vignette at edges (rgba(0,0,0,0.2) at center to transparent)
                   Both overlays are optional and may be toggled independently

rendering-flags:
  font-smoothing:  none — bitmap fonts must remain pixel-sharp; no anti-aliasing
  image-rendering: pixelated — all raster graphics are nearest-neighbour scaled
  text-rendering:  optimizeSpeed — favour pixel-crisp text over subpixel positioning

### 8.5a — Color Manipulation

filter: (none by default)
mix-blend-mode: (none by default)
background-blend-mode: (none by default)

### 8.5b — Surface Layering (Backdrop Filters)

Not used — all surfaces are opaque.

### 8.5c — Gradients & Glow

text-shadow: (conditional — for phosphor glow around bright white pixels)
  description: "0 0 2px rgba(255,255,255,0.6)" on white text or bright white icon edges
  surface: optional, on white elements in dark/blue surroundings
  animation: none

filter: drop-shadow:
  (not used — icon drop shadows are solid black, not blur)

### 8.5d — Texture & Noise Simulation

Three named techniques. Apply in compositing stack order (bottom to top) when combined: `background pattern → scanline overlay → vignette`.

[background-grid-pattern]:
  technique:    repeating-linear-gradient (grid lines) or CSS conic-gradient (checkerboard)
                Alternatively, a data-URI PNG 8×8 tile (blue base + lighter blue grid lines)
  parameters:   (none for CSS gradients; tile size 8×8)
  surface:      full-screen background (behind all windows)
  intensity:    moderate (grid lines at 1px width, spaced 8px)
  blend:        normal, opacity-100
  color:        white (#FFFFFF) on primary blue (#0055AA) — or a lighter blue via dither
  animation:    none
  tailwind-approximation: bg-[pattern] custom utility

[scanlines]:
  technique:    repeating-linear-gradient (2px transparent / 2px rgba(0,0,0,0.15))
  parameters:   frequency 2px stripes
  surface:      full viewport (over all UI)
  intensity:    moderate (opacity-15 black stripes, or optional)
  blend:        normal over composited content
  color:        black (#000000) at low opacity
  animation:    none (or slow vertical scroll for authentic CRT flicker)
  tailwind-approximation: bg-[pattern] custom utility

[vignette]:
  technique:    radial-gradient (center transparent → edges #000000 at ~70%)
  parameters:   radius 80% ellipse
  surface:      full viewport (topmost layer)
  intensity:    mild (vignette opacity ~0.2)
  blend:        normal
  color:        black (#000000)
  animation:    none
  tailwind-approximation: bg-radial-[at_50%_50%] custom utility

- **Compositing stack (bottom → top):** `background pattern (grid) → UI components → scanlines (if used) → vignette (if used)`  
- **Dark mode inheritance:** not applicable (no dark mode).  
- **Dual-presence:** the background grid pattern is both a surface texture (here) and a component (see §9 — background pattern). Its parameters in both sections must match.
## 9. Components

**icon-vocabulary:**
system:       custom pixel-art glyphs (hand-drawn at 1:1 pixel scale)
size:         w-8 h-8 (32×32 pixels)
color:        black outline (#000000), white fill (#FFFFFF), blue highlight (#0055AA), orange (#FF8800) for disk/drawer icons
treatment:    no glow or animation; static pixel art with 1px black outline and 2px solid black drop shadow (right/down)
restrictions: no anti-aliasing, no gradients, no outlines thicker than 1px, no drop shadow on fingers

**image-treatment:** (not used — no media images in Workbench UI)

**Buttons:**
size:            16px height (h-4), variable width
border:          1px bevel — top/left #FFFFFF (light), bottom/right #000000 (dark)
fill:            #FFFFFF (default), disabled #808080
text:            #000000, Topaz monospace, centered, no hover state
active state:    shifts 1px down and right (instant animation), no colour change

**Windows:**
border:          10–14px total thickness (including title bar; common 10px)
                 Outer border: 2px solid #000000
                 Inner border: 1px bevel (light top/left, dark bottom/right)
title bar:       14–24px high (common 14px)
                 Active: checkerboard pattern (2×2 alternating cells of #0055AA and #FFFFFF)
                 Inactive: solid #808080
title text:      Topaz, text-xs, white (#FFFFFF) on active, black (#000000) on inactive, centred
background:      #FFFFFF (window fill)
close gadget:    12×12px square with cross (or 8×8 variant) — top-left corner
zoom gadget:     upward-pointing triangle — top-right corner
depth gadget:    horizontal thick bar (drag zone) — title bar area

**Menu bar:**
position:        top of screen, full width, 14–24px high (common 14px)
fill:            #0055AA (primary)
text:            #FFFFFF, Topaz monospace, left-aligned menu items
borders:         1px #000000 outline bottom

**Icons (standard Workbench set):**
disk icon:       3D shaded rectangular disk with 45° write-protect notch at bottom-right
drawer icon:     folder with tab at top
trash icon:      sideways cylinder with lid (trash can)
style:           1px black outline, white fill with blue (#0055AA) highlight region
drop shadow:     2px solid black, offset right/down
all icons:       hand-drawn pixel art, no smoothing

**Gadgets (scroll bars, sliders):**
scroll bar:      width 8–14px (common 8px), thin, with arrow buttons at ends and proportional thumb
thumb fill:      #FFFFFF with #000000 outline
track fill:      #808080 (grey) with #000000 outline
arrow buttons:   12×12px, beveled (light top/left, dark bottom/right)
bevel convention: light edge on top/left, dark on bottom/right for all controls

**Inputs (text fields):**
border:          1px bevel inward (dark top/left, light bottom/right, i.e., recessed)
fill:            #FFFFFF
text:            #000000, Topaz monospace
focus indicator: none (no state change on focus)

**Status bar:**
height:          8px
outline:         1px #000000
fill:            #FF8800 (orange)
text:            optional, #000000, Topaz monospace, centred

**Background pattern (desktop):**
tile:            8×8 pixel grid lines in white (#FFFFFF) on primary blue (#0055AA)
pattern:         1px lines every 8 pixels, forming a grid (or optional 8×8 checkered pattern)
surface:         full screen behind all windows

**Data Display Components:**

metric-cell:
  Background: bg-primary (#0055AA, Workbench blue).
  Border: 1px bevel — light top/left (#FFFFFF), dark bottom/right (#000000).
  Label: Topaz monospace text-xs, white (#FFFFFF).
  Value: Topaz monospace text-base font-bold, white (#FFFFFF).
  Delta: Topaz monospace text-sm; positive in white (#FFFFFF), negative in orange (#FF8800).
  No glow or drop-shadow — flat pixel UI.

signal-bar:
  Track: bg-#808080 (grey) with #000000 outline.
  Fill: bg-#FFFFFF (white). Height: 4px.
  Border: 1px #000000.
  No glow, no texture on fill — flat pixel bar.

status-cell:
  ok:   text-#FFFFFF (white) with no outline change — status communicated by text label.
  warn: text-#FF8800 (orange) with 1px #000000 outline.
  err:  text-black (#000000) on white fill, with 1px #000000 outline.
  Fill: always transparent — status is communicated by text color, not fill color.

data-table-row:
  Alternating: odd rows bg-#FFFFFF (white) with black text; even rows bg-#0055AA (primary blue) with white text.
  Cell border: 1px #000000.
  Label: Topaz text-xs; white on blue rows, black on white rows.
  Value: Topaz text-sm; same contrast logic.

chart-surface:
  Background: bg-#0055AA (Workbench blue).
  Grid lines: 1px solid #FFFFFF at 25/50/75/100% heights.
  Axis labels: Topaz text-xs, white (#FFFFFF).
  Line: white (#FFFFFF), stroke-width 1px, no drop-shadow.
  Dots: white (#FFFFFF), r=2px. No glow.

**Native primitives (1–3 style-specific):**
- **Disk LED indicator:** 4×4px orange square (#FF8800) that pulses to indicate disk activity – bottom-right of screen.
- **Cursor / pointer:** hollow arrow pointing top-left (1px #000000 outline, no fill, no drop shadow) — unique tall slender shape.
- **Window drag zone / title bar gizmo:** the depth gadget (horizontal thick bar) also acts as a drag handle.

## 10. Layout

spacing cadence:   All elements snap to a 1-pixel grid; background grid spacing is 8px (icon alignment grid is 10px)
grid tendency:     Implicit invisible grid aligning icons and windows at 10-pixel intervals
density:           Moderate — windows overlap, icons are spaced 10px apart, no cramming
section separation logic:  Windows separate by stacking Z-order; active window distinct via title bar pattern
alignment philosophy:      Left-aligned text, centre-aligned window titles, icons on grid
breakpoint behavior:       Not responsive — fixed width (640px at 1×); no scaling.
motion:
  transition-duration:        0ms (instant) — all state changes are frame-accurate, no interpolation
  transition-timing-function: steps(1)
  transition-property:         opacity (only for window open/close, no fade)
  transition-delay:            none
  animation:
    cursor-move:        instant 1px jump, no interpolation — discrete pixel steps
    button-press:       0ms — shifts 1px down/right, then back on release (2‑frame)
    window-open:        4‑frame flip or wipe from title bar to full window (no fade)
    disk-activity:      orange progress bar fills left-to-right in stutter steps (256 bytes per step)
    disk-LED:           4×4 orange square pulses on/off with drive activity
  transform-at-rest:           none
  transform-on-interact:       button press: translate(1px, 1px) on active
  transform-style:             flat

## 11. Design System Notes

### 11a. Use Constraints

**Appropriate for:** Retro-operating-system-inspired interfaces, vintage computing nostalgia projects, pixel-art games (especially UI/HUD), terminal-style dashboards, and any context where a blocky, low-colour, highly utilitarian aesthetic is desired. Works well for file manager interfaces, digital audio workstation UIs, and embedded system control panels.

**Wrong for:** Modern consumer apps with fluid layouts, content-rich editorial sites, photography portfolios, e‑commerce product pages, dark-mode defaults, branding that requires smooth gradients or variable font sizes. Avoid in contexts where accessibility requires high contrast ratios beyond the limited palette.

### 11b. Prompt Phrases

1. "chunky pixel interface, 4-colour palette, blue background, orange highlights, black borders and drop shadows"
2. "Topaz monospaced bitmap font, 8×8 pixel grid alignment, hard 1-pixel bevels"
3. "active window title bar with 2×2 checkerboard of blue and white"
4. "inactive window with solid grey title bar and no drop shadow"
5. "disk icon with 1px black outline, white fill, blue highlight, 2px black drop shadow offset right/down"
6. "tall hollow arrow cursor, 1px black outline, no fill, pointing top-left"
7. "all edges are axis-aligned rectangles with rounded-none corners"
8. "no anti-aliasing, no alpha transparency, no gradients, no variable font sizes"

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description. Minimum 4 rules, maximum 8.

rule: The palette is strictly controlled to 4 colours per screen — blue, white, black, and orange — with grey permitted only for inactive elements. Expanded variants may add a second blue and second orange but no other hues.
do:   Blue (#0055AA) background, white (#FFFFFF) text or fills, black (#000000) outlines and text, orange (#FF8800) for status or accent. Inactive elements use solid #808080 grey.
avoid:Introducing any colour outside the approved set — no green, no red, no purple. Using smooth gradients or alpha transparency to blend colours.

rule: All text must render in monospaced Topaz bitmap font (or exact substitute) at the fixed 8px size. No proportional or variable-width typefaces are permitted.
do:   Terminal-style monospaced layout with every character occupying the same fixed-width cell. Text size is exactly 8 pixels, no scaling.
avoid:Using proportional fonts, variable font sizes, web-safe fallback fonts, or any typeface that is not pixel-perfect monospaced at 8px.

rule: Every interface element must snap to an integer pixel grid — no fractional positioning, no sub-pixel rendering.
do:   All elements positioned at whole-pixel coordinates (e.g., left: 10px, top: 24px). The background grid aligns to 8px increments for icons and 10px for windows.
avoid:Rounded corners, fractional pixel values (left: 10.5px), anti-aliased edges, or any smoothing that introduces sub-pixel rendering artifacts.

rule: Bevels on all controls follow the 1‑pixel light-top/left, dark-bottom/right convention. Buttons have no hover state — interaction is binary and instantaneous.
do:   Raised bevel: top/left #FFFFFF, bottom/right #000000. Active state shifts the element 1px down and right without any colour change or animation.
avoid:Smooth gradients as bevel substitutes, hover states that change colour or opacity, rounded bevels, or bevels thicker than 1px.

rule: Drop shadows are 2‑pixel solid black, offset right/down, and applied to icons only — no blur, no diffuse shadows on windows or controls.
do:   Icons carry box-shadow: 2px 2px 0px #000000 — hard, no blur radius. Windows and controls have no drop shadow.
avoid:Blurred or diffuse drop shadows, shadows on windows or UI controls, shadow offsets that are not exactly 2px right/down.

rule: All animations are frame‑accurate with no interpolation — motions must be stepped or instant, never smooth or eased.
do:   Button press: 0ms with instant 1px offset shift. Window open: 4‑frame wipe. Cursor move: instant 1px jump. Disk activity: stepped progress bar.
avoid:Smooth scroll, CSS transitions with duration > 0ms, eased animations, fade-in/fade-out effects, or any interpolated motion between discrete states.

### 11d. Variation Bounds

1. **Palette compression:** 4-colour (Classic) vs. expanded 8‑ or 16‑colour (add second blue #3388CC and second orange #CC6600).  
2. **CRT realism intensity:** clean factory-fresh pixel grid ↔ heavy CRT artifacts (scanlines, phosphor bloom, chroma bleed, barrel distortion).  
3. **Resolution:** authentic 320×200 lo‑res ↔ 640×256 hi‑res (PAL). All metrics scale accordingly.  
4. **Desktop density:** minimal single window with few icons ↔ maximal cluttered desktop with dozens of stacked windows and icons.  
5. **Icon pack swap:** shapes remain identical, but colours may swap blue for green or grey (e.g., Amiga icon packs).

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts. Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
The desktop surface fills the full screen: bg-#0055AA (primary blue) with an 8×8 grid of 1px white (#FFFFFF) lines forming a tile pattern. A single window is centred: 10px total border thickness (2px outer #000000, 1px bevel light top/left dark bottom/right), title bar 14px high with active checkerboard (2×2 alternating #0055AA and #FFFFFF), title text in Topaz text-xs white (#FFFFFF) centred. The window background is #FFFFFF. Three icons sit in the top-right quadrant aligned to the 10px grid: disk icon (3D shaded rectangle with write-protect notch), drawer icon (folder with tab), each at 32×32px with 1px black outline, white fill, blue (#0055AA) highlight, 2px solid black drop shadow offset right/down. Cursor is the Workbench hollow arrow (1px #000000 outline, no fill) positioned at default screen-centre. No animations running. All edges are sharp 90° corners.

### 11e.ii — Maximum Expressiveness
Three overlapping application windows at staggered Z-positions, each with distinct content. The active top window has the checkerboard title bar pattern; two inactive windows below have solid #808080 grey title bars with black (#000000) text. The desktop is dense: twelve icons arranged in three rows of four, aligned to the invisible 10px grid, showing disk, drawer, trash, and tool icons. The disk-LED indicator (4×4px orange #FF8800) pulses at the bottom-right corner with animation: disk-led — step on/off at 500ms intervals over a 2s loop. A window is mid-open (4‑frame wipe animation: title bar first, then content revealing in stepped vertical stripes, no fade). The cursor is mid-screen. Background grid pattern is fully visible behind all windows. The status bar at bottom (8px, #FF8800 orange with 1px #000000 outline) displays "3 DISKS MOUNTED" in Topaz text-xs black (#000000), centred. All bevels are crisp 1px, all drop shadows are 2px solid black on icons only, no glow or blur anywhere.

### 11e.iii — Data Context
Data is displayed in a two-column file manager panel: left column (drawer listing) in bg-#FFFFFF with black text, right column (file details) in bg-#0055AA with white text. Each row: label in Topaz text-xs, value in Topaz text-sm, separated by a 1px black vertical divider. Status indicators use text-only colour coding: file permissions = white (#FFFFFF) for readable, orange (#FF8800) for write-protected, black (#000000) on white fill for locked. Disk free-space bar at bottom: track bg-#808080 (grey) with 1px #000000 outline, fill bg-#FFFFFF (white) proportional to remaining space, height 4px. No chart surface is used — data is always displayed as monospaced text columns or simple pixel-fill bars. The desktop grid pattern remains visible behind the data panel. No drop shadows on any data element — icons retain shadows, data content is flat.

### 11f. Sources

This subject has minimal verified imagery. The visual claims below should be treated with caution.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** Amiga Workbench 1.3 has no documented identity description from the forensic seed. No dates or attribution (designer, foundry, period) are recorded. The subject name is **Amiga Workbench 1.3**, but forensic identity details are absent.

**Verified imagery sources.** 2 URLs verified against institutional servers, distributed across:
- Internet Archive — 1 URL(s)
- Commodore.ca (fan archive) — 1 URL(s)

Key references include no institution’s record at no URL due to minimal coverage. No specific imagery references are available.

**Named typefaces.** The typography of this style is attested as:
- (none attested)

**Honest gaps.** The most significant gap is that no gaps were documented for this source. The honest gaps raw field is empty. This lack of recorded gaps means potential missing details are unknown. No documented gaps were recorded by the forensic pipeline.
