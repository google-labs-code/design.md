---
version: alpha
name: "Mac Classic"
description: "A nostalgic recreation of the 1984 Macintosh 128K interface — pure black on white bitmap rendering, fixed 512×342 pixel grid, Chicago bitmap typography, strict 1-bit logic with no anti-aliasing, gradients, or transparency."
colors:
  neutral: "#FFFFFF"
  on-neutral: "#000000"
  primary: "#000000"
  on-primary: "#FFFFFF"
  surface-container: "#C0C0C0"
  surface-container-high: "#808080"
typography:
  display:
    fontFamily: "Chicago"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.333
    letterSpacing: "0em"
  headline:
    fontFamily: "Chicago"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.333
    letterSpacing: "0em"
  title:
    fontFamily: "Chicago"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.333
    letterSpacing: "0em"
  body:
    fontFamily: "Chicago"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.333
    letterSpacing: "0em"
  label:
    fontFamily: "Monaco"
    fontSize: "9px"
    fontWeight: 400
    lineHeight: 1.333
    letterSpacing: "0em"
rounded:
  default: "4px"
  card: "0px"
  button: "4px"
  input: "4px"
  chip: "4px"
spacing:
  component-internal: "2px"
  section-internal: "4px"
  page-edge: "8px"
  between-components: "2px"
  between-sections: "4px"
components:
  button-primary:
    backgroundColor: "#FFFFFF"
    textColor: "#000000"
    rounded: "{rounded.button}"
    padding: "2px"
    height: "24px"
  button-primary-pressed:
    backgroundColor: "#000000"
    textColor: "#FFFFFF"
    rounded: "{rounded.button}"
    padding: "2px"
    height: "24px"
  card:
    backgroundColor: "#FFFFFF"
    rounded: "0px"
    padding: "4px"
  input:
    backgroundColor: "#FFFFFF"
    textColor: "#000000"
    rounded: "{rounded.input}"
    padding: "2px"
    height: "24px"
  input-focus:
    backgroundColor: "#FFFFFF"
    textColor: "#000000"
    rounded: "{rounded.input}"
    padding: "2px"
    height: "24px"
  menu-bar:
    backgroundColor: "#000000"
    textColor: "#FFFFFF"
    height: "22px"
    padding: "2px"
  dialog:
    backgroundColor: "#FFFFFF"
    textColor: "#000000"
    rounded: "0px"
    padding: "4px"
provenance:
  coverage_status: "complete"
  identity_description: ""
  manual_enrichment_required: false
  imagery_count: 8
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: null
    typography_map: "entries:113"
  sources:
    - host: "en.wikipedia.org"
      count: 4
    - host: "commons.wikimedia.org"
      count: 1
    - host: "www.ifixit.com"
      count: 1
    - host: "68kmla.org"
      count: 1
    - host: "www.vintageapple.com"
      count: 1
  imagery_urls:
    - url: "https://en.wikipedia.org/wiki/Macintosh_Classic"
      host: "en.wikipedia.org"
      institution: null
      confidence_original: high
    - url: "https://commons.wikimedia.org/wiki/Category:Macintosh_Classic"
      host: "commons.wikimedia.org"
      institution: "Wikimedia Commons"
      confidence_original: high
    - url: "https://www.ifixit.com/Device/Macintosh_Classic"
      host: "www.ifixit.com"
      institution: "iFixit"
      confidence_original: high
    - url: "https://en.wikipedia.org/wiki/Apple_Garamond"
      host: "en.wikipedia.org"
      institution: null
      confidence_original: high
    - url: "https://en.wikipedia.org/wiki/Happy_Mac"
      host: "en.wikipedia.org"
      institution: "Wikimedia Foundation"
      confidence_original: high
    - url: "https://en.wikipedia.org/wiki/System_1"
      host: "en.wikipedia.org"
      institution: null
      confidence_original: high
    - url: "https://68kmla.org/bb/"
      host: "68kmla.org"
      institution: "68k Macintosh Liberation Army"
      confidence_original: low
    - url: "https://www.vintageapple.com/"
      host: "www.vintageapple.com"
      institution: "Vintage Apple (fan collection)"
      confidence_original: low
  typefaces_attested:
    []
  flags:
    - "no_typography_extracted"
    - "no_colour_extracted"
  honest_gaps:
    []
---
# Design System: Mac Classic

## 0. Taxonomy & Identity
entity-type:        interface / system / environment
artefact-family:    operating system / software UI
technique:          digital raster
movement-lineage:   1980s postmodern
era:                1980s postmodern
geography:          US / Canada
domain:             internet / software / AI
formal-traits:      grid-based, geometric, flat, utilitarian
color-logic:        monochrome
typography-mode:    bitmap sans-serif
texture:            grainy, matte
function:           simulate
provenance:         revival / homage

## 1. Overview

Mac Classic reproduces the experience of booting a 1984 Macintosh 128K or System 7 machine: a world of beige plastic, chunky pixel grids, and deterministic spatial metaphors. The emotional register is nostalgic and utilitarian—nothing is decorative; everything is an operation. The style lives in strict 1‑bit or limited 4‑color bitmap logic, with all grays simulated through dither patterns. Screen resolution is locked to the original 512 × 342 (or an integer multiple). The soul resides in the tactile weight of each pixel, the palpable grain of an old CRT, and the no‑compromise purity of black on white.

**What makes it recognizable:**
- Pure black (#000000) on pure white (#FFFFFF) as the primary language.
- A solid black menu bar at the top with white text and an Apple logo on the far left.
- Classic window chrome: title bar, close box (filled square left), zoom box (empty square right), size handle (bottom‑right).
- Desktop icons on an invisible 32 × 32 or 64 × 64 grid with text labels directly below, no drop shadows.
- Everything rendered at 72 dpi bitmap with zero anti‑aliasing, no gradients, no transparency.
- Cursors: simple black‑and‑white pixel designs—arrow, I‑beam, watch (spinning beach ball precursor).
- Diagonals are never smoothed; they are pure staircase steps.
- The optional "Happy Mac" or "Sad Mac" boot face as a signature easter egg.

**What would break the style:**
- Any anti‑aliasing, alpha channel, or gradient.
- Rounded corners on windows (buttons get tiny pixel‑rounded radii, but windows stay strictly rectangular).
- Modern iconography with shading or perspective.
- Variable‑width type or kerning.
- Any form of responsive layout that breaks the fixed pixel grid.

## 2. Constants
Light Mode:   primary (white canvas, black ink)
Dark Mode:    no (not supported; all surfaces are white)
Responsive:   no (fixed resolution 512 × 342 or integer multiple)
States:       Default, Pressed/Active, Disabled, Highlighted (inverted)

surface-simulation: crt-screen
                    The interface simulates a 1984 Macintosh CRT monitor — phosphor screen
                    with scanlines, 1-bit pixel rendering, and no color depth. Drives page-level
                    texture (scanline overlay), rendering flags (pixelated, no font-smoothing),
                    and the deterministic spatial grid of the original 512×342 display.

## 2a — Interaction Model

hover-delta:        none — no hover state exists in the classic Mac interface; the original system
                    had no hover feedback on any element
active-delta:       color-shift — pressed state inverts colors (black→white, white→black);
                    no scale, no shadow change, pure inversion
focus-style:        color-border — 1px dotted black outline inside the element edge;
                    the system focus indicator for keyboard navigation
transition-duration:0ms — all state changes are instantaneous; the classic Mac did not ease
transition-easing:  steps(1) — no interpolation between states; jump to end state immediately
exempt-animations:  window-open-zoom, dialog-jitter, icon-bounce, cursor-watch-spin

## 3. Colors

The palette is monochrome with optional two additional grays. All grays are simulated through 2 × 2 Bayer dither patterns when no third color is used. The base palette is strictly black and white.

- **neutral (#FFFFFF) [conventional]** — Pure white: canvas, window backgrounds, dialog fills
- **on‑neutral (#000000) [conventional]** — Pure black: text, icons, outlines, menu bar background
- **primary (#000000) [conventional]** — Pure black (used as primary structural color on all white surfaces)
- **on‑primary (#FFFFFF) [conventional]** — White text on black menu bar, white text on black buttons (inverted)
- **surface‑container (#C0C0C0) [conventional]** — Light gray (optional, for 4‑color variant): dithered patterns, disabled fills
- **surface‑container‑high (#808080) [conventional]** — Dark gray (optional, for 4‑color variant): secondary outlines, shadow dither

*Highlight color: inverted area (white becomes black, black becomes white). No other solid colors.*

## 4. Typography

CONTESTED:§3.primary_typeface — all providers agree on Chicago (Apple bitmap), but none cite a foundry or year; gap marker applied.
CONTESTED:§3.secondary_typeface — majority agree on Monaco (Apple bitmap), but no foundry citation; gap marker applied.
CONTESTED:§3.google_fonts_substitute — all agree no substitute exists, but no citation; gap marker applied.

*All characters sit on a fixed pixel grid with no kerning, no ligatures, no font smoothing. Type is always left‑aligned, never justified or hyphenated.*

## 5. Elevation

CONTESTED:§5.ornamental_system — drop shadow offset: providers disagree between 1 px and 2 px; no majority; re‑stack required.

Flat depth model — no shadow hierarchy. Stacking (for overlap) – single application window scenario:

- base‑content: z‑0 (desktop icons, background)
- windows: z‑10
- menu bar: z‑20 (always above all content)
- dialogs: z‑30 (modal above windows)
- cursors: z‑50 (always topmost)

## 6. Spacing & Sizing

All spacing follows a 1‑px grid. Tailwind approximations are the closest practical equivalents.

padding:
  component‑internal:  1–2 px (e.g., p‑0.5)
  section‑internal:    2–4 px (e.g., p‑1)
  page‑edge:           4–8 px (e.g., p‑2)

margin:
  between‑components:  1–2 px (gap‑0.5)
  between‑sections:    4 px (gap‑1)

component‑heights:
  menu bar:           20–22 px (h‑5 / h‑6)
  button:             20–24 px (h‑5 / h‑6)
  icon row:           32 px (h‑8)

icon‑size:       32 × 32 (w‑8 h‑8) or 64 × 64 (w‑16 h‑16)
avatar‑size:     not used

## 7. Borders

border‑radius:
  default:     rounded‑none (windows, panels, icons)
  button:      rounded‑sm (2 px pixel‑stepped rounding for rounded rectangles) [majority: 3 of 4]
  input:       rounded‑none
  chip/badge:  rounded‑none

border‑width:
  default:     border (1 px)
  emphasis:    border‑2 (default button in dialog, active selection border)

border‑style:  border‑solid (always solid)

*Windows and most objects use a 1‑px black outline. Buttons additionally have a 1‑px white highlight on the top and left edges to simulate a raised bevel; pressed state inverts this pattern.*

## 8. Opacity

No opacity values used. Disabled states are indicated by dither patterns or light gray. All visual states are achieved through inversion, dither, or solid color changes.

**Browser chrome (conditional):**
selection:
  background:  #000000 (inverted)
  color:       #FFFFFF
scrollbar:     hidden (classic Mac had no visible scrollbar track; thumb only)

## 8.5. Visual Effects

### 8.5.0 — Physical Material Model

Declares the top-level surface simulation governing the entire page canvas.
This is distinct from component-level textures (§8.5d) — it is the global rendering layer.

material-model:    crt-screen

global-filter:     none — the 1-bit Mac Classic screen has no color shift;
                   brightness and contrast remain unmodified (pure black on pure white)

global-overlay:    CRT scanlines via body::after pseudo-element:
                   repeating-linear-gradient(
                     rgba(0,0,0,0.12) 0 1px,
                     transparent 1px 2px
                   )
                   blend: overlay, opacity 10-15%, pointer-events:none,
                   position:fixed, z-index:9999

rendering-flags:
  font-smoothing:  none — pixel-perfect bitmap font rendering, no anti-aliasing
  image-rendering: pixelated — 32×32 and 64×64 pixel icons must not be interpolated
  text-rendering:  optimizeSpeed — no kerning, no ligature computation

### 8.5c – Gradients & Glow

**Phosphor glow** (optional)
- type: `filter: drop‑shadow` (very faint green‑blue or amber bloom around bright pixels)
- role: atmospheric – simulates CRT phosphor persistence
- description: A subtle radial glow emitted from solid white elements on the screen.
- intensity: barely perceptible; applied at ~3–15 % opacity over a matching hue
- dark‑mode: not applicable (style has no dark mode)
- tailwind‑approximation: no Tailwind native equivalent; use custom CSS filter

### 8.5d – Texture & Noise Simulation

**Scanlines**
- technique: repeating‑linear‑gradient (alternating full intensity and dimmed rows, opacity 10–15 %)
- surface: full‑page canvas (behind all UI elements)
- intensity: subtle
- blend: overlay
- color: monochrome
- animation: none
- tailwind‑approximation: no Tailwind native equivalent; use custom CSS background‑image

**Dither pattern (mid‑tone simulation)**
- technique: 2 × 2 Bayer checkerboard (e.g., CSS repeating‑conic‑gradient for 2 × 2 squares)
- surface: areas needing gray (disabled controls, window content backgrounds in 1‑bit mode)
- intensity: moderate (50 % fill for light gray, 75 % for dark gray)
- blend: normal (pure pixel substitution)
- color: monochrome (black and white only)
- animation: none
- tailwind‑approximation: no Tailwind native equivalent; use CSS repeating‑conic‑gradient

*Both effects are optional. When combined, compositing order is: canvas → UI elements → dither fill → scanlines (overlay) → phosphor glow (if used).*

## 9. Components

**Icon vocabulary**
icon‑vocabulary:
  system:       custom pixel glyphs (no library)
  size:         w‑8 h‑8 (32 × 32) or w‑16 h‑16 (64 × 64)
  color:        black (#000000) on white (#FFFFFF) – no currentColor
  treatment:    purely flat, no shadows, no highlights
  restrictions: no halftones, no perspectival depth, no photographic content

**Image & media treatment:** *Not applicable – the style does not incorporate photographic imagery.*

**Buttons**
- Primary: rounded rectangle (`rounded‑sm`), `border`, `bg‑white`, `text‑black`, `border‑black`, with a 1‑px white highlight on top and left edges; pressed state inverts colors (`bg‑black`, `text‑white`, `border‑white`).
- Default (dialog): heavier outline (`border‑2`).
- Disabled: dithered gray fill or checkerboard pattern.
- Hover: no hover state; only Pressed/Active transitions.

**Cards / Panels (windows)**
- Frame: `rounded‑none`, `border`, `bg‑white`, 1‑px black outline.
- Title bar: 20‑22 px tall, white/gray background (dithered or solid depending on variant), black text. Close box (filled `w‑3 h‑3` square) on left, zoom box (empty `w‑3 h‑3` square) on right.
- Size handle: small `w‑3 h‑3` square at bottom‑right corner of window.
- Active window: optional 1‑px hard drop shadow offset bottom‑right (contested between 1 px and 2 px).

**Navigation**
- Menu bar: fixed top, 20‑22 px high, `bg‑black`, `text‑white`. Apple logo on far left. Menu items with right‑aligned keyboard shortcuts (Cmd+key).
- Drop‑down menus appear instantly, no animation.

**Inputs**
- Checkbox: `w‑3 h‑3` hollow square, `border`. When checked: X inside.
- Radio button: `w‑3 h‑3` hollow circle (`rounded‑full`), `border`. When selected: filled circle dot.
- Text field: `w‑full h‑6`, `rounded‑none`, `border`, `bg‑white`, left‑aligned text.

**Progress bar**: single row of 1‑px squares that fill left to right in solid black; no stripes or gradient.

**Dialogs**
- Modal, centered, `rounded‑none`, `border`, `bg‑white`. Two default buttons (OK, Cancel) at bottom. Default button has `border‑2`. Dialog appears with rapid 2‑px jitter.

**System cursors**
- Arrow (16 × 16, black outline with 1‑px white shadow to right).
- I‑beam (for text selection).
- Watch (spinning beach ball precursor, 16 × 16).

## 10. Layout
spacing‑cadence:    1‑px grid alignment for all elements
grid‑tendency:      invisible fixed grid for desktop icons (row from top‑left, never overlap menu bar)
density:            low – large icons, generous whitespace around windows
section‑separation: windows do not overlap; each is a distinct floating rectangle
alignment:          left‑aligned text, icons centered within their grid cells
breakpoint‑behavior: none – a single fixed canvas (512 × 342 or integer multiple)

**Motion**
motion:
  transition‑duration:        [0s – all state changes are instantaneous]
  transition‑timing‑function: [step‑start – no easing]
  transition‑property:        [none – no property transitions]
  transition‑delay:           [none]
  animation:
    window‑open:    rectangle zooms from close box to full size in ~6 frames (100ms), no easing (on‑load)
    menu‑dropdown:  instant appearance, no fade (on‑click)
    cursor‑change:  arrow→watch jumps without intermediate frames (on‑state‑change)
    dialog‑appear:  rapid 2‑px jitter before settling (on‑load)
    icon‑bounce:    desktop icons may bounce once on launch – 2‑px vertical offset, 200ms (on‑click)
  transform‑at‑rest:      all elements at transform: none
  transform‑on‑interact:  none (pressed state is color inversion, not transform)

## 11. Design System Notes

### 11a. Use Constraints
- **Appropriate for**: Retro‑themed operating system interfaces, game menus (pixel‑style), nostalgic digital art installations, museum kiosks replicating the early Mac experience, any project where the 1984 Macintosh 128K is a clear reference.
- **Wrong for**: Modern productivity applications that require variable‑width type, responsive layout, or high‑contrast accessibility modes. The style's fixed resolution and lack of dark mode make it unsuitable for long‑form reading or environments with variable lighting.

### 11b. Prompt Phrases
1. "Chunky bitmap grid, strict 1‑bit logic, no anti‑aliasing."
2. "Classic system chrome: menu bar, close box, zoom box, size handle."
3. "Pure black on white with dither‑simulated grays."
4. "Pixel‑perfect jaggies on diagonals – never smooth a step."
5. "Inverted highlights for selection and pressed states."
6. "Monochrome palette with optional 4‑color extension (black, white, light gray, dark gray)."
7. "Scanline overlay and phosphor glow for CRT authenticity."
8. "Hard 1‑px (or 2‑px) offset drop shadow on active windows (contested)."

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual
description, then the incorrect visual description. Minimum 4 rules, maximum 8.

rule: All geometry must exist on the integer pixel grid with solid black outlines and white fills — the entire visual language depends on pixel-alignment.
do:   1-px solid black (#000000) borders on all windows, buttons, and panels with pure white (#FFFFFF) fills. Every element positioned at integer pixel coordinates only. No sub-pixel rendering anywhere.
avoid: Sub-pixel positioning, anti-aliased outlines, rgba() borders, or any border color other than pure black (#000000).

rule: Gray values are achieved exclusively through 2×2 Bayer dither patterns — smooth gradients do not exist in this system.
do:   CSS repeating-conic-gradient producing a 2×2 checkerboard at 50% fill for light gray (#C0C0C0 visual equivalent), 75% fill for dark gray (#808080 visual equivalent). Applied to disabled controls and secondary backgrounds.
avoid: CSS linear-gradient or radial-gradient for any tonal transition, or rgba() alpha values to simulate gray tones.

rule: The menu bar is a fixed 20–22px black bar at the top of the canvas — it is always present and always on top.
do:   bg-black (#000000), text-white (#FFFFFF), Chicago 12px bitmap font, Apple logo icon at far left, menu items left-to-right with keyboard shortcuts right-aligned. Menu dropdowns appear instantly with no fade or animation.
avoid: Transparent or semi-transparent menu bars, colored menu bars, modern navigation patterns (hamburger menus, tab bars, slide-out drawers), or any font other than Chicago/monospace bitmap.

rule: All state changes are instantaneous — the classic Mac did not animate property transitions.
do:   transition-duration: 0ms, transition-timing-function: step-start on all elements. Pressed state is immediate full color inversion (black↔white). Dialogs appear with 2-px jitter, not fade-in.
avoid: transition-duration greater than 0ms, ease-in-out or linear timing functions, opacity transitions, or any CSS animation longer than 200ms (except window-zoom at 100ms and icon-bounce at 200ms).

rule: Windows are strictly rectangular — rounded corners exist only on buttons as small stepped pixel rounding.
do:   rounded-none on all window frames, panels, and dialogs. Buttons use rounded-sm (2px pixel-stepped rounding) only. 1-px black outline on all window edges with 1-px white highlight on top-left for raised bevel.
avoid: rounded-md, rounded-lg, or any CSS border-radius value on windows, panels, or dialogs that exceeds 2px. No smooth bezier curves on any structural element.

rule: The canvas is a fixed resolution of 512×342 (or integer multiple) with no responsive behavior — the system does not reflow.
do:   Fixed-width container at 512px, 1024px, or other integer multiples. Desktop icons on invisible 32×32 or 64×64 grid. No media queries, no flexible layouts, no viewport-relative units.
avoid: CSS flexbox wrapping, CSS grid auto-fill, @media breakpoints, viewport units (vw, vh, %), or any layout that adapts to screen size.

rule: Desktop icons are flat monochrome pixel bitmaps — no shading, no perspective, no depth cues beyond optional window shadow.
do:   Custom pixel glyphs at w-8 h-8 (32×32) or w-16 h-16 (64×64), purely flat black (#000000) on white (#FFFFFF), text label in Chicago 12px centered directly below icon. No shadows, no color, no gradient.
avoid: Icons with shading, perspective rendering, isometric views, photographic content, drop shadows, color fills, or any 3D depth cue.

rule: CRT surface effects (scanlines, phosphor glow) are optional atmospheric overlays applied after all UI rendering — they are never inline component styles.
do:   Scanlines via body::after repeating-linear-gradient (1px/2px rows, overlay blend, opacity 10–15%). Phosphor glow via faint drop-shadow filter on bright elements. Compositing order: canvas → UI → dither → scanlines → glow.
avoid: Applying scanlines or phosphor glow as inline styles on individual components, or using these effects as primary visual elements rather than subtle atmospheric overlays.

### 11d. Variation Bounds
1. **Clean vs. grimy**: pure 1‑bit correctness (no artifacts) vs. intentional CRT distortion (blur, ghosting, moire patterns).
2. **Native vs. remix**: stick to 512 × 342 and Chicago bitmap font vs. scale to retina and swap in a pixel font with slight color.
3. **Desktop vs. application**: classic Finder (trash, disk icons, multiple windows) vs. single‑app view (Word, MacPaint).
4. **Monochrome vs. 4‑color palette**: pure black‑and‑white vs. extension with light gray (#C0C0C0) and dark gray (#808080).
5. **Flat vs. textured**: no extra artifacts vs. scanline overlay, phosphor glow, paper texture from old manuals.

### 11e. Compositional Signatures

### 11e.i — At Rest
A single Finder desktop: white (#FFFFFF) canvas filling the fixed 512×342 viewport. A solid black (#000000) menu bar (20–22px) runs the full width at top with white Chicago 12px text — "Finder" menu title visible with Apple logo at far left. Desktop icons (32×32 black pixel bitmaps) sit on an invisible grid: Macintosh HD in top-right corner, Trash icon in bottom-right. A singleUntitled folder icon mid-screen. No overlapping windows. No anti-aliasing anywhere. All elements on integer pixel coordinates. Optional faint CRT scanline overlay across the entire canvas at opacity 10–15%.

### 11e.ii — Maximum Expressiveness
Three overlapping application windows at slight pixel offsets, each with 1-px black (#000000) outline, white title bar background (or dithered gray for inactive windows), close box (filled w-3 h-3 black square) on left of title bar, zoom box (empty w-3 h-3 square) on right, and size handle (w-3 h-3 square) at bottom-right corner. Active front window has 1-px white highlight on top-left edges simulating raised bevel, plus optional 1-px hard drop shadow offset bottom-right. Menu bar always on top (z-20). A modal dialog (centered, rounded-none, border-2 on default OK button) appears above all windows with rapid 2-px jitter animation on load. CRT scanline overlay across entire canvas. Optional phosphor glow (faint drop-shadow) on bright white elements. Watch cursor (16×16 pixel spinning animation) visible during a simulated operation. Icon-bounce animation (2-px vertical offset, 200ms) on a launching application.

### 11e.iii — Data Context
Data displayed in a monochrome table within a standard application window (1-px black outline, title bar, close/zoom boxes). Header row rendered with inverted colors: bg-black (#000000), text-white (#FFFFFF), Chicago 12px bitmap font, no bold weight — inversion alone signals header status. Data rows in black (#000000) text on white (#FFFFFF) background. Alternating rows optionally use 2×2 Bayer dither pattern (50% fill) simulating light gray (#C0C0C0) for visual separation. Cell borders are 1-px solid black (#000000) throughout — no colored borders, no varying weights. Status indicators are text-only labels in Chicago 12px: "OK", "--", "!!" — no color coding, no icons, no glow. The entire system is monochrome; status differentiation comes from text content and dither density alone, never from hue. Progress shown as a single row of 1-px solid black squares filling left to right within the table context.

### 11f. Sources

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** **Mac Classic** was not assigned a confirmed identity description during forensic analysis. No documented dates, designer, foundry, or period attribution were recovered by the forensic pipeline for this subject.

**Verified imagery sources.** 8 URLs verified against institutional servers, distributed across:
- en.wikipedia.org — 3 URL(s)
- Wikimedia Commons — 1 URL(s)
- iFixit — 1 URL(s)
- Wikimedia Foundation — 1 URL(s)
- 68k Macintosh Liberation Army — 1 URL(s)
- Vintage Apple (fan collection) — 1 URL(s)

Key references were not identified during the forensic analysis of **Mac Classic**. No institutional records or archival URLs were captured.

**Named typefaces.** The typography of this style is attested as:
- (none attested)

**Honest gaps.** No documented gaps were recorded by the forensic pipeline.
