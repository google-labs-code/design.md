---
version: alpha
name: "ms-dos-command-line-interface-1981"
description: "The quintessential early personal-computer operating system UI—a stark, 80×25 character-cell terminal with a single monochrome foreground on solid black, evoking clinical, authoritative nostalgia."
colors:
  background: "#000000"
  primary: "#00FF00"
  secondary: "#FFB000"
  accent: "#C0C0C0"
  ok: "#00FF00"
  warn: "#00FF00"
  err: "#00FF00"
  delta-up: "#00FF00"
  delta-down: "#00FF00"
  delta-flat: "#00FF00"
typography:
  display:
    fontFamily: "fixed-width bitmap, Consolas, Courier New, Courier, monospace"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0em
    textTransform: uppercase
  headline:
    fontFamily: "fixed-width bitmap, Consolas, Courier New, Courier, monospace"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0em
    textTransform: uppercase
  title:
    fontFamily: "fixed-width bitmap, Consolas, Courier New, Courier, monospace"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0em
    textTransform: uppercase
  body:
    fontFamily: "fixed-width bitmap, Consolas, Courier New, Courier, monospace"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0em
    textTransform: uppercase
  label:
    fontFamily: "fixed-width bitmap, Consolas, Courier New, Courier, monospace"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0em
    textTransform: uppercase
rounded:
  default: 0px
  card: 0px
  button: 0px
  input: 0px
  chip: 0px
spacing:
  xs: 0px
  sm: 0px
  md: 0px
  lg: 0px
  xl: 0px
components:
  command-prompt:
    backgroundColor: "{colors.background}"
    textColor: "{colors.primary}"
    rounded: "{rounded.default}"
  dialog-box:
    backgroundColor: "{colors.background}"
    textColor: "{colors.primary}"
    rounded: "{rounded.default}"
  input-area:
    backgroundColor: "{colors.background}"
    textColor: "{colors.primary}"
    rounded: "{rounded.default}"
  progress-bar:
    backgroundColor: "{colors.background}"
    textColor: "{colors.primary}"
    height: "16px"
  metric-cell:
    backgroundColor: "{colors.background}"
    textColor: "{colors.primary}"
  status-cell:
    backgroundColor: "{colors.background}"
    textColor: "{colors.primary}"
provenance:
  coverage_status: "complete"
  identity_description: "The slug `ms-dos-command-line-interface-1981` refers to the visual identity of the Microsoft Disk Operating System (MS‑DOS) command‑line interface as it appeared in 1981, the year MS‑DOS 1.0 was released for the IBM Personal Computer (IBM 5150) in August 1981. This identity is the on‑screen presentation of a text‑based operating system shell: the prompt format, the monospaced character rendering, "
  manual_enrichment_required: false
  imagery_count: 5
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "en.wikipedia.org"
      count: 4
    - host: "archive.org"
      count: 1
  imagery_urls:
    - url: "https://en.wikipedia.org/wiki/MS-DOS"
      host: "en.wikipedia.org"
      institution: "Wikimedia Commons"
      confidence_original: medium
    - url: "https://en.wikipedia.org/wiki/IBM_5151"
      host: "en.wikipedia.org"
      institution: "Wikipedia"
      confidence_original: high
    - url: "https://en.wikipedia.org/wiki/Code_page_437"
      host: "en.wikipedia.org"
      institution: "Wikipedia"
      confidence_original: high
    - url: "https://en.wikipedia.org/wiki/Color_Graphics_Adapter"
      host: "en.wikipedia.org"
      institution: "Wikipedia"
      confidence_original: medium
    - url: "https://archive.org/details/byte-magazine-1981-10"
      host: "archive.org"
      institution: "Internet Archive"
      confidence_original: medium
  typefaces_attested:
    - name: "IBM PC text font"
      foundry: null
      year: 1981
      google_fonts: null
      is_custom: true
      attestation: "attested"
  flags:
    []
  honest_gaps:
    - "1. **Colour — hex values for MDA green (#33FF33 accepted as [conventional] but unverified)**: No primary source. Resolved by phosphor chromaticity from monitor service manual."
---
## 0. Taxonomy & Identity

- entity-type: interface / system / environment
- artefact-family: operating system / software UI
- technique: digital raster
- movement-lineage: 1980s postmodern, vernacular commercial style
- era: 1980s postmodern
- geography: platform-neutral
- domain: internet / software / AI
- formal-traits: grid-based, flat, minimal, utilitarian, geometric
- color-logic: monochrome
- typography-mode: monospace
- texture: grainy, halated
- function: navigate / simulate
- provenance: canonical historical source, revival

## 1. Overview

The MS-DOS Command Line Interface is the quintessential early personal‑computer operating system UI—a stark, 80‑column × 25‑row character‑cell terminal driven by keyboard input alone. Its emotional register is utilitarian, clinical, authoritative, and nostalgic: every pixel serves a functional purpose, with zero ornamentation beyond the inherent geometry of box‑drawing characters and the faint glow of a CRT phosphor. The aesthetic lineage is rooted in 1981 IBM PCs running Microsoft's disk‑operating system, where memory and display hardware were severely constrained.

What makes it instantly recognizable: a solid black background, a single monochrome foreground colour (green, amber, or white), a blinking block cursor, left‑aligned text that scrolls upward, and a command prompt like `C:\>`. There are no images, no overlapping elements, no anti‑aliasing, no gradients. Every visual decision obeys the machine's limits—text is rendered in a fixed‑width bitmap font, and the display is a strict text grid. Breaking the style would require introducing proportionally spaced type, more than two colours, graphical icons, smooth animations, or soft edges.

- **Emotional tone:** spare, disciplined, slightly cold, immediate
- **Density:** maximal (every character cell filled; no negative space beyond blank lines)
- **Core rendering philosophy:** immediate, pixel‑perfect, no smoothing, no compositing
- **Identifiable at a glance:** monochrome text grid, box‑drawn dialog borders, blinking cursor, prompt string `C:\>`
- **Physical texture:** simulated CRT phosphor aging and scanline persistence

## 2. Constants

- **Light Mode:** no (inherently dark)
- **Dark Mode:** primary (the only mode – black background, single glowing foreground)
- **Responsive:** no (fixed 80×25 character grid; if scaling is required, the entire grid is scaled uniformly)
- **States:** Default (steady display), Active (cursor blinking), Disabled (inactive input – no visual change; cursor hidden)
- **surface-simulation:** crt-screen — simulated CRT monitor glass with scanlines and phosphor glow

No hover, focus, error, or disabled states—keyboard‑driven, no mouse interaction.

## 2a — Interaction Model

hover-delta:        none — no mouse hover; interface is keyboard-driven
active-delta:       none — no press states; key strokes produce immediate character insertion
focus-style:        block-cursor-blink — blinking block cursor at input location indicates keyboard focus; no outline
transition-duration:0ms — all state changes are instantaneous, no transitions
transition-easing:  none
exempt-animations:  cursor-blink, progress-spinner, text-scroll, cls

## 3. Colors

The system uses exactly two colours on screen at any time: a solid black background and one glowing foreground. All values are fully opaque; no transparency, no gradients. Three canonical phosphor hues are acceptable; the chosen foreground is used uniformly across all elements.

- **background** (#000000) [conventional] — Solid black: entire canvas
- **primary** (#00FF00) [conventional — green P1 phosphor] — Foreground for all text, prompts, borders, and cursor
- **secondary** (#FFB000) [conventional — amber P3 phosphor] — Alternate foreground (same role)
- **accent** (#C0C0C0) [conventional — white P4 phosphor] — Alternate foreground (same role)

**Dark mode swap:** Not applicable—the interface is already dark. If a light background were forced, all foreground and background would invert (e.g., white bg + black text), but that is not authentic.

Semantic state colors:
ok:      primary (#00FF00) normal intensity — nominal, confirmed, successful command execution
warn:    primary high-intensity (bright green) — caution, advisory, or pending state
err:     primary with blink attribute (blinking green) — error, failure, or critical state. Same as error role (blinking foreground)
delta-up:   primary normal intensity — positive numeric delta (e.g., file count increase)
delta-down: primary dim (low intensity) — negative numeric delta (e.g., decreased memory)
delta-flat: primary dim — neutral delta (no change). Same as outline role (dim foreground)

## 4. Typography

All five type roles—`display`, `headline`, `title`, `body`, `label`—share the same specification. The typeface is described as a fixed‑width bitmap font, but no provider cited a foundry or year.

- **primary_typeface:** CONTESTED:§3.primary_typeface — providers gave: ["IBM CGA/EGA bitmap (8×16 or 8×8 glyphs, Code Page 437)" / "Terminal, monospace (IBM CGA/EGA bitmap)" / "IBM CGA/EGA bitmap" / "monospace (system stack: Consolas, 'Courier New', Courier)"]; none cited foundry; re‑stack required
- **secondary_typeface:** CONTESTED:§3.secondary_typeface — no distinct secondary font designated; all roles use the same typeface; no foundry cited
- **google_fonts_substitute:** CONTESTED:§3.google_fonts_substitute — providers gave: ["no Google Fonts substitute" / "no Google Fonts substitute" / not specified / not specified]; no cited source

**All roles specification (for implementation guidance):**
- font-family: fixed‑width bitmap font (system monospace stack recommended; e.g., `Consolas`, `Courier New`, `Courier`, but original hardware used an 8×16 or 8×8 pixel glyph set from Code Page 437)
- font-size: text-base (an arbitrary pixel size that yields 80 columns × 25 rows; commonly 8×16px or 8×8px native)
- font-weight: font-normal (bold is simulated with high‑intensity foreground, not a different weight)
- line-height: leading-none (exactly 1.0; no vertical spacing between rows)
- letter-spacing: tracking-normal (fixed‑width; no kerning)
- text-transform: uppercase (lowercase optional post‑DOS 2.0)
- text-decoration: none

**Cursor:** A solid block or underscore character using the same bitmap font, alternating on/off at ~2 Hz, no easing.

**Character set:** ASCII 0x20–0x7E plus Code Page 437 box‑drawing and block characters. No italic, no subpixel rendering.

## 5. Elevation

Flat depth model — no shadow hierarchy. All content occupies a single plane. There is no z‑axis stacking; every character cell is directly on the display. No CSS box‑shadows, no elevation tokens.

## 6. Spacing & Sizing

The layout is a rigid 80‑column × 25‑row grid. All spacing is conceptual (character cells), not CSS padding/margin.

- **padding:** p-0 (every cell is used; no interior padding or page-edge margin)
- **margin:** gap-0 (separation via blank lines, each blank line = one empty row)
- **component-height:** not applicable (each line = one character row)
- **icon-size:** not applicable (text‑only; no graphical icons)
- **avatar-size:** not applicable

## 7. Borders

All borders are created with box‑drawing characters from Code Page 437 (e.g., ╔═╗, ║ ║, ╚═╝). They form a 1‑cell‑wide border around dialogs and menus. No CSS border properties are used.

- **border-radius:** rounded-none (hard right angles)
- **border-width:** border-0 (emulates the visual weight of a single box‑drawing character; no CSS border)
- **border-style:** none
- **border-image:** none
- **clip-path:** none

## 8. Opacity

All UI foreground and background content is fully opaque (opacity-100). The only exception is CRT scanline and noise effects described in §8.5, which use low opacity for simulation.

- **disabled-state:** not used (all content is always fully legible)
- **ghost/secondary:** not used
- **overlay/scrim:** not used (scanline/noise overlays are visual effects, not UI states)
- **hover-feedback:** not used (no mouse interaction)
- **selection:** not applicable (text selection would be inverted video, not an opacity effect)
- **scrollbar:** not applicable (no scrollbar widget; content scrolls via line feed)

## 8.5 — Visual Effects

### 8.5.0 — Physical Material Model

Declares the top-level surface simulation governing the entire page canvas.
This is distinct from component-level textures (§8.5d) — it is the global rendering layer.

material-model:    crt-screen

global-filter:     brightness(1.05) contrast(0.95) — simulates fluorescent office lighting
                   with a subtle green cast from the phosphor.

global-overlay:    CRT scanlines via body::after pseudo-element (as described in §8.5d) plus
                   optional phosphor grain overlay applied globally. Both use multiply/overlay blend modes at low opacity (see §8.5d).

rendering-flags:
  font-smoothing:  none — pixel-perfect bitmap font rendering, no antialiasing
  image-rendering: pixelated — any pixel art sprites must not be interpolated
  text-rendering:  optimizeSpeed — prioritise crisp rendering over smoothness

### 8.5c — Gradients & Glow

- **Phosphor glow/bloom:** A subtle soft glow around bright characters (especially cursor and uppercase characters). Implement via CSS `filter: drop-shadow(0 0 2px currentColor)` or `text-shadow: 0 0 4px currentColor`. Must not blur character edges; the glow should feel like an afterglow.
- **Screen tint (optional):** An opaque low‑intensity overlay using the chosen phosphor hue (e.g., `rgba(0, 255, 0, 0.03)`) blended over the entire display via `mix-blend-mode: screen` or `multiply` to mimic CRT cast.
- **Vignette (optional):** A radial gradient overlay (transparent at center to black at edges) at `opacity-10` to `opacity-20`, `pointer-events: none`.

### 8.5d — Texture & Noise Simulation

- **Scanlines:**
  - technique: CSS `repeating-linear-gradient` (horizontal lines alternating transparent and dark)
  - parameters: e.g., `transparent 0px, transparent 1px, rgba(0,0,0,0.05) 1px, rgba(0,0,0,0.05) 2px` (1‑pixel high stripes, 2‑pixel cycle)
  - surface: full‑page canvas overlay
  - intensity: moderate (5% dim on alternate rows)
  - blend: normal, opacity‑100
  - color: black (#000000)
  - animation: none
  - Tailwind approximation: `bg-[repeating-linear-gradient(transparent_0px,transparent_1px,rgba(0,0,0,0.05)_1px,rgba(0,0,0,0.05)_2px)]`

- **Phosphor grain/noise:**
  - technique: SVG `feTurbulence` filter or CSS `background-image` with a tiny data‑URI noise PNG tile (50×50, random opacity dots)
  - parameters: `feTurbulence`: `baseFrequency="0.65"`, `numOctaves="3"`, `type="fractalNoise"`
  - surface: full‑screen overlay
  - intensity: barely perceptible to moderate
  - blend: `mix-blend-mode: overlay`, opacity‑10 to opacity‑15
  - color: monochrome (white noise on black)
  - animation: none (or slow pan if desired)
  - Tailwind approximation: no native equivalent; use CSS filter or data‑URI

- **Optional CRT jitter:**
  - technique: CSS `@keyframes jitter` shifting the canvas `1px` horizontally every 4–8 seconds
  - surface: entire display area
  - intensity: slight
  - animation: infinite, random steps

- **Phosphor persistence (optional):**
  - technique: A very short after‑image effect approximated with `transition: opacity 0.15s` on line removal
  - surface: scrolling text rows
  - intensity: barely perceptible

**Compositing stack (bottom to top):** 1. Vignette (radial gradient, multiply), 2. Grain/noise (overlay, opacity-15), 3. Scanlines (multiply, opacity-10), 4. Phosphor glow (drop-shadow on foreground text).

**Dark mode inheritance:** All effects carry over unchanged; black background ensures no recalibration needed.

## 9. Components

### Icon Vocabulary
- system: no graphical icons. All symbolic content uses ASCII or extended‑ASCII characters (Code Page 437): ☺, ♪, ▀, █, ░, →, etc.
- size: single fixed‑width character cell (8×16 or 8×8 px at native resolution)
- color: same as foreground (inherits `currentColor`)
- treatment: flat (phosphor glow may be applied globally)
- restrictions: never use image files, SVG, or unicode emoji

### Image & Media Treatment
Not applicable – the interface is text-only; no images, no media.

### Style-Defined Components

1. **Command Prompt**
   - Format: `[drive]:\[path]>` (e.g., `C:\>` or `A:\>`)
   - Displayed at the first visible line of the input area
   - Followed by blinking block or underscore cursor
   - All uppercase, left-aligned
   - Fill: none (same as background)
   - Border: none
   - Active state: cursor visible; inactive: cursor solid (constant on)

2. **Dialog / Alert Box**
   - Simple rectangular border using box‑drawing characters: top corners `╔ ╗`, bottom corners `╚ ╝`, horizontal sides `═`, vertical sides `║`
   - Content inside left‑aligned, typically uppercase
   - No title bar, no shadow, no rounded corners
   - Fill: same as background
   - Active: cursor at input position if textual input

3. **Progress Bar**
   - Single line of block characters: `████████░░░░░░` (filled █, empty ░)
   - Filled portion uses foreground colour; empty portion uses dim foreground (e.g., dark green) or `░`
   - No border, no rounding
   - Animation (if present): fills instantaneously in steps of one character

4. **Error Message**
   - One‑line alert text, e.g., `Bad command or file name`
   - No icon, no box
   - Colour: foreground (same colour, possibly bright attribute)
   - Dismissed by pressing any key

5. **Boot Screen**
   - Version string or ASCII art logo, e.g., `Microsoft(R) MS-DOS(R) Version 6.22`
   - All uppercase, may use block characters for simple graphics
   - No animation (or simple memory‑count spinner)

6. **File Listing (DIR output)**
   - Tabular columns: filename (8.3 format), extension, size, date – aligned with spaces
   - Left‑aligned, monospaced
   - No borders between rows; headers may be in high‑intensity or underlined with `-`

7. **Menu System**
   - Box‑drawn border around list of options, each option on its own line
   - Active/highlighted item: inverse video (background/foreground swap) if device supports it; otherwise marked by `>` or other symbol
   - Keyboard navigation: arrow keys or number selection

8. **Input Area** (the command prompt line itself)
   - Current line at bottom of visible scroll region
   - Characters appear immediately on key press; no typing animation

**Data Display Components:**

metric-cell:
  Background: black (#000000). Single row of characters.
  Label: uppercase text in normal intensity green, left-aligned in first portion.
  Value: numeric string in bright green (high-intensity) at right side, separated by spaces.
  Delta: appended in parentheses, using dim green for negative, bright for positive.
  No borders; use blank line before/after.

signal-bar:
  Rendered as a horizontal bar of block characters: filled ██ and empty ░░.
  Track: empty blocks (░) in dim green. Fill: solid blocks (█) in normal green.
  Height: one character row. Width: up to 80 columns. No border.

status-cell:
  In a table or listing, status shown as a short text label in bright green or blinking.
  ok: "OK" in normal green. warn: "WARN" in bright green. err: "ERR" blinking green.
  No fill; just text in the cell.

data-table-row:
  Alternating rows: odd rows normal green, even rows dim green (low intensity) to mimic striped paper.
  Cell separation: spaces. No border characters between columns. Header row in bright green and underlined with '-' characters.

chart-surface:
  Chart area bounded by box-drawing characters (e.g., ┌─┐ └─┘) with axis labels.
  Grid lines: horizontal lines of '·' or '-' in dim green at 25%, 50%, 75%.
  Data line: plotted using block characters (█) or '*' at positions. No glow beyond phosphor.
  Axes labels: normal green text. Entire chart is text-based.

## 10. Layout

- **Spacing cadence:** No variable spacing. Each line occupies exactly one character row. Vertical spacing is achieved by inserting blank lines (`\n`).
- **Grid tendency:** Strict 80×25 cell grid. All content must fit within these boundaries. Never overflow horizontally. Vertical overflow triggers line‑by‑line scroll.
- **Density:** Maximum – all 80×25 cells are filled with either a character or a blank space. No negative space for aesthetic reasons.
- **Section separation:** One or two blank lines between distinct blocks (e.g., prompt output vs. next command).
- **Alignment:** All text is left‑aligned. Centring is done by prepending spaces (character count).
- **Breakpoint behavior:** No breakpoints. The display is always 80×25. On very small viewports (below 640px width per character), scale the entire grid as a single raster (pixel‑doubling) to maintain aspect ratio. Do not reflow.

**Motion block:**
- transition-duration: 0ms (all state changes are instantaneous)
- transition-timing-function: steps(1) (stepwise)
- transition-property: none
- transition-delay: 0ms

- animation:
  - cursor-blink: visibility toggles on/off every 500ms, no easing – loop
  - progress-spinner: `| / - \` rotates every 200ms, stepwise – for batch operations
  - text-scroll: line‑by‑line instant jump when line count exceeds 25
  - cls: screen immediately replaced with black (#000000), 0ms

- transform-at-rest: all elements at `transform: none`
- transform-on-interact: none
- transform-style: flat
- backface-visibility: visible

Scrolling: line‑by‑line (full rows) with no smooth scrolling. The screen instantly reflows when new lines exceed row 25 (oldest lines are discarded). `cls` clears the entire screen in one frame with no fade.

## 11. Design System Notes

### 11a. Use Constraints

**Appropriate for:** retro‑themed game UIs, terminal emulators, boot‑sequence intros, nostalgia‑driven dashboards, text‑based adventure games, '80s‑themed posters or motion graphics, and any project that celebrates extreme constraints and early‑computing aesthetics.

**Wrong for:** modern consumer apps requiring images, multi‑colour branding, responsive layouts, touch interfaces, or any scenario where the user expects a graphical user interface with windows, icons, and mice.

### 11b. Prompt Phrases

1. "Fixed‑width monochrome 80×25 text grid with blinking block cursor"
2. "All characters rendered in a single glowing phosphor colour on solid black"
3. "Box‑drawing characters for dialog borders and menus (╔═╗, ║ ║, ╚═╝)"
4. "Command prompt format: `C:\>` followed by blinking cursor"
5. "Instantaneous screen updates – no fade or transition"
6. "Uppercase text, no proportional spacing, no anti‑aliasing"
7. "Cursor toggles on/off at 2 Hz, no easing"
8. "Text scrolls one full row at a time; screen clears with `cls` instantly"

### 11c. Do / Avoid Block

rule: Colour is strictly binary — exactly one foreground and one background colour fill the entire screen. No palette swaps, no accent colours, no gradients.
do:   White (#FFFF00 or #FFFFFF) text on black (#000000) background, or green (#00FF00) on black — the two-colour DOS palette. Every pixel is either fg or bg.
avoid: A third colour introduced for highlights, links, or status bars. Three or more colours on screen violates the CGA/MDA constraint.

rule: All glyphs are fixed-width bitmap characters at 8×16 or 8×8 pixel cell size. No anti-aliasing, no subpixel rendering, no variable stroke width.
do:   CP437 bitmap font rendered with image-rendering: pixelated, font-smoothing: none. Each character occupies exactly the same cell width.
avoid: Any TrueType outline font with antialiased edges, or a proportional font where 'W' is wider than 'i'.

rule: Borders, dialogs, and structural elements are composed entirely from box-drawing characters (CP437 range U+2500–U+257F). No images, no SVG icons, no pixel-art sprites.
do:   Single-line box-drawing characters (─ │ ┌ ┐ └ ┘) for dialog frames and menu borders. Double-line characters (═ ║ ╔ ╗ ╚ ╝) for emphasis where needed.
avoid: An icon component, an img element, an SVG shape, or any visual mark not present in the ASCII/CP437 codepage.

rule: Layout is a rigid 80×25 character grid. Text is left-aligned; centring is achieved by padding with space characters, not by CSS text-align.
do:   Content positioned by row and column offset within the 80×25 matrix. Horizontal centring via leading spaces in the string. No overlapping regions.
avoid: CSS flexbox or grid layout that allows elements to overlap, float, or break the character-cell alignment. Any window or element that spans beyond column 80 or row 25.

rule: Animation is stepwise and binary — elements switch between discrete states with no interpolation. Cursor blink toggles on/off. No easing curves, no smooth transitions.
do:   Cursor blink via animation stepping between opacity 1 and 0 with steps(1, start) over 530ms. No transition-property, no transition-timing-function.
avoid: transition: all 200ms ease-out on any element. Fade-ins, parallax scrolling, or any motion that interpolates between two visual states.

rule: Surface authenticity comes from phosphor glow and CRT scanline texture applied as a global overlay — never from CSS shadows, rounded corners, or hover effects.
do:   Scanlines via repeating-linear-gradient on a body::after pseudo-element. Subtle phosphor bloom via text-shadow: 0 0 4px currentColor at low opacity on text only.
avoid: border-radius on any element. box-shadow on any container. :hover pseudo-class that changes visual properties on mouse-over.

rule: Filenames, drive letters, and command keywords are always uppercase — the DOS/CP437 convention. Mixed-case or lowercase renders the terminal inauthentic.
do:   C:\>, AUTOEXEC.BAT, DIR /W, A:\ — all command text in uppercase using the bitmap font.
avoid: c:\>, autoexec.bat, dir /w — lowercase rendering that breaks the DOS terminal convention.

### 11d. Variation Bounds

1. **Phosphor hue:** Green (#00FF00) ↔ Amber (#FFB000) ↔ White (#C0C0C0). This single choice shifts the entire mood from clinical (white) to warm (amber) to familiar (green).
2. **CRT wear:** Clean display (no scanlines, no grain, no jitter) ↔ Aged CRT (heavy scanlines, noise, flicker, bloom, barreling). The cleaned variant emphasises readability; the aged variant emphasises authenticity.
3. **Interface maturity:** MS‑DOS 1.0 – fewer commands, no subdirectories, 64KB limit ↔ MS‑DOS 6.22 – full command set, HELP, EDIT, directory trees. Controls the available prompts and command set depth.
4. **Period accuracy:** CGA text mode (80×25, 4 colours max only if using combo modes, 8×8 font) ↔ EGA/VGA (more colours with extended ASCII, 8×16 font). Affects character resolution and box‑drawing set availability.

### 11e. Compositional Signatures

### 11e.i — At Rest
The default state of the system: a solid black (#000000) background with a single command prompt `C:\>` left-aligned at the top of the 80×25 grid. The foreground is green (#00FF00) using a fixed‑width bitmap font (8×16 pixel glyphs). A blinking block cursor occupies the character cell immediately after the prompt, toggling on/off every 500ms with no easing. There is no additional content, no scroll, and no overlays. The only visual effect is the global CRT scanline and phosphor glow as described in §8.5. This is the resting composition: spare, clinical, and fully readable.

### 11e.ii — Maximum Expressiveness
The system is in full interactive use: a directory listing (DIR) output fills the grid, displaying filenames, extensions, sizes, and dates in tabular columns left-aligned. A menu system with box-drawing borders (╔═╗, ║ ║, ╚═╝) occupies a portion of the screen, with one item highlighted via inverse video (background #00FF00, text #000000). At the bottom, a command prompt awaits input with the blinking cursor active. The scroll animation (text-scroll) pushes old lines up instantaneously as new lines appear. The progress-spinner (| / - \ rotating every 200ms) may be visible during a batch operation. The global compositing stack is active: vignette, grain noise, scanlines, and phosphor glow. This is the system at its most visually dense and animated, yet still within the 80×25 grid and binary colour model.

### 11e.iii — Data Context
When the interface presents numeric or status-driven content, the system adapts through its text-only data components. A metric-cell displays a label and value on a single row: e.g., "FILES:    42  (+12)" with the label in normal green (#00FF00) and the value in bright green, delta in dim green. A table of data-table-row alternates between normal and dim green backgrounds to mimic striped paper, with header row underlined. Status indicators like "OK", "WARN", and "ERR" appear as short text labels in the status-cell: OK in normal green, WARN in bright green, ERR blinking green. A chart-surface uses box-drawing characters for axes and '█' characters for data points. No layout or colour scheme changes; the same black background, green foreground, and fixed‑width typography are preserved. The system explicitly forbids graphical charts, scales, or any deviation from the character-cell paradigm.

### 11f. Sources

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** The visual identity of the **ms-dos-command-line-interface-1981** refers to the on-screen presentation of the **Microsoft Disk Operating System (MS‑DOS)** command-line interface as it appeared in August 1981. Authored by **Microsoft** for the release of MS-DOS 1.0 on the **IBM Personal Computer (IBM 5150)**, this identity is defined entirely by a text-based operating system shell consisting of a specific prompt format and monospaced character rendering. The foundational typography of this environment is rooted in the fixed **IBM PC text font** stored within the hardware's character generator.

**Verified imagery sources.** 5 URLs verified against institutional servers, distributed across:
- Wikipedia — 3 URL(s)
- Wikimedia Commons — 1 URL(s)
- Internet Archive — 1 URL(s)

Direct archival imagery of the original 1981 interface is sparse, as the operating system was primarily documented through technical reference manuals rather than preserved as visual design material. Key references include the **Computer History Museum**'s record at https://www.computerhistory.org/collections/catalog/102627153.

**Named typefaces.** The typography of this style is attested as:
- IBM PC text font (1981 — attestation: attested) — rendered here as bespoke imagery — no web-font substitute

**Honest gaps.** The most significant gap in documenting this system is **Colour — hex values for MDA green (#33FF33 accepted as [conventional] but unverified)**. There is currently **No primary source** establishing an official digital hex value for the IBM Monochrome Display Adapter's characteristic text color. Modern hex approximations are frequently skewed by emulator defaults, aftermarket monitor calibrations, and subjective Photoshop color-picking from degraded archival photographs. These chromatic uncertainties would be resolved by calculating the exact digital color values directly from the P1 phosphor chromaticity specifications provided in an original IBM 5151 monitor service manual.
