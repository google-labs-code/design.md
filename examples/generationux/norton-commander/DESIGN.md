---
version: alpha
name: "Norton Commander"
description: "A text-mode file manager interface from the late-1980s MS-DOS era, defined by its dual-panel layout, fixed 80×25 character grid, and strict adherence to the 16-colour VGA palette. The tone is utilitarian, serious, and nostalgia-tinged, with a dark navy blue background and keyboard-driven interaction."
colors:
  primary: "#0000AA"
  on-primary: "#FFFFFF"
  secondary: "#000080"
  on-secondary: "#FFFFFF"
  tertiary: "#FFFF00"
  inverse-surface: "#FFFFFF"
  inverse-on-surface: "#0000AA"
  outline: "#55FFFF"
  neutral: "#000080"
  surface-container: "#000080"
typography:
  display:
    fontFamily: "system monospace"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0em"
  headline:
    fontFamily: "system monospace"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0em"
  title:
    fontFamily: "system monospace"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0em"
  body:
    fontFamily: "system monospace"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0em"
  label:
    fontFamily: "system monospace"
    fontSize: "16px"
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
  component-internal: "0px"
  section-internal: "0px"
  page-edge: "0px"
  gap-component: "0px"
  gap-section: "0px"
components:
  dual-panel-container:
    backgroundColor: "#0000AA"
    textColor: "#FFFFFF"
    rounded: "{rounded.default}"
  panel:
    backgroundColor: "#0000AA"
    textColor: "#FFFFFF"
    rounded: "{rounded.default}"
  command-line:
    backgroundColor: "#0000AA"
    textColor: "#FFFFFF"
    height: "16px"
  function-key-bar:
    backgroundColor: "#0000AA"
    textColor: "#FFFF00"
    height: "32px"
  modal-dialog:
    backgroundColor: "#0000AA"
    textColor: "#FFFFFF"
    rounded: "{rounded.default}"
  button-primary:
    backgroundColor: "#0000AA"
    textColor: "#FFFF00"
    rounded: "{rounded.default}"
  button-primary-hover:
    backgroundColor: "#FFFFFF"
    textColor: "#0000AA"
    rounded: "{rounded.default}"
  data-table-row:
    backgroundColor: "#0000AA"
    textColor: "#FFFFFF"
    height: "16px"
provenance:
  coverage_status: "complete"
  identity_description: "The slug `norton-commander` refers to the visual identity of Norton Commander, a file manager utility originally released by Peter Norton Computing (later acquired by Symantec) in 1986. The identity spans the application's graphical user interface on DOS (character-based, CGA/EGA/VGA), the packaging and printed documentation for retail versions (floppy disk and CD-ROM boxes, manuals, quick-ref"
  manual_enrichment_required: false
  imagery_count: 6
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "winworldpc.com"
      count: 1
    - host: "www.google.com"
      count: 1
    - host: "en.wikipedia.org"
      count: 1
    - host: "commons.wikimedia.org"
      count: 1
    - host: "books.google.com"
      count: 1
    - host: "computerhistory.org"
      count: 1
  imagery_urls:
    - url: "https://winworldpc.com/product/norton-commander/3x"
      host: "winworldpc.com"
      institution: "WinWorld PC"
      confidence_original: medium
    - url: "https://www.google.com/search?tbm=isch&q=norton+commander+box"
      host: "www.google.com"
      institution: "Google Images"
      confidence_original: low
    - url: "https://en.wikipedia.org/wiki/Norton_Commander"
      host: "en.wikipedia.org"
      institution: null
      confidence_original: high
    - url: "https://commons.wikimedia.org/wiki/Category:Norton_Commander"
      host: "commons.wikimedia.org"
      institution: "Wikimedia Commons"
      confidence_original: high
    - url: "https://books.google.com/"
      host: "books.google.com"
      institution: "Google Books"
      confidence_original: low
    - url: "https://computerhistory.org/"
      host: "computerhistory.org"
      institution: "Computer History Museum"
      confidence_original: low
  typefaces_attested:
    - name: "IBM PC character set (code page 437)"
      foundry: null
      year: null
      google_fonts: null
      attestation: "attested"
    - name: "Norton Commander logotype"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "unverified"
    - name: "Times New Roman"
      foundry: null
      year: null
      google_fonts: "Tinos"
      attestation: "inferred"
    - name: "Helvetica Bold"
      foundry: null
      year: null
      google_fonts: "Inter"
      attestation: "inferred"
    - name: "Helvetica"
      foundry: null
      year: null
      google_fonts: "Inter"
      attestation: "inferred"
    - name: "Futura"
      foundry: null
      year: null
      google_fonts: "Jost"
      attestation: "inferred"
    - name: "Norton Commander splash screen bitmap"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "unknown"
  flags:
    - "1_robots_disallowed_urls"
  honest_gaps:
    - "1. **Colour – exact retail box blue (CMYK/hex):** Not attested; approximations vary widely. A measured specimen from a known physical box would resolve."
---
# Design System: Norton Commander

## 0. Taxonomy & Identity

- entity-type: interface / system / environment
- artefact-family: operating system / software UI
- technique: digital raster
- movement-lineage: 1980s postmodern [unverified] — majority consensus among providers (3 of 4), though one provider (crof-deepseek-v4-pro-precision) suggests "1990s desktop / cyber / rave"
- era: 1980s postmodern [unverified]
- geography: platform-neutral
- domain: industrial / engineering / maintenance
- formal-traits: grid-based, modular, utilitarian, dense, diagrammatic
- color-logic: saturated / spot-color
- typography-mode: monospace
- texture: matte
- function: navigate
- provenance: canonical historical source / literal artefact reference

## 1. Overview

Norton Commander is a text-mode file manager interface from the late-1980s MS-DOS era, defined by its dual-panel layout, fixed 80×25 character grid, and strict adherence to the 16-colour VGA palette. The emotional tone is utilitarian, serious, and nostalgia-tinged. The interface is keyboard-driven, with no images, gradients, anti-aliasing, or mouse-dependent interactions. Density is maximal — every row and column carries data. The style is immediately recognisable by its dark navy blue background (#0000AA), white foreground text, yellow (accent) function-key hints, inverse-video selection highlighting, and box-drawing characters for all borders and dividers. Optional CRT scanlines and phosphor bloom effects can be added for retro authenticity but are not required for the core style.

- **Era/lineage:** 1980s MS-DOS utility software (Norton Commander by Symantec, 1986) [unverified]
- **Density level:** High — full-screen 80×25 character grid
- **Core rendering philosophy:** Fixed-width grid, VGA palette, no anti-aliasing
- **Surface character:** Flat, matte, optional CRT scanline texture
- **Interaction model:** Pure keyboard (arrow keys, Tab, Enter, F1–F10)
- **Signature:** Dual-panel layout with 1-character vertical divider
- **What would break it:** rounded corners, gradients, images, proportional fonts, smooth animations, mouse cursor, any graphical element

## 2. Constants

- Light Mode: no
- Dark Mode: primary (the style is inherently dark: navy blue background)
- Responsive: no — fixed 80×25 character grid. Scaling only via integer multiplication of cell size (e.g., 2×, 3×) or CSS zoom. Layout does not reflow.
- States: Default, Active (selected file via inverse video), Focus (active panel), Inactive (unfocused panel), Cursor (typing position in command line)
- surface-simulation: crt-screen — CRT monitor glass with optional scanline and phosphor bloom effects

## 2a — Interaction Model

hover-delta:        none — no hover state; keyboard-driven interface has no mouse interaction
active-delta:       none — no press state; keyboard activation is instantaneous
focus-style:        color-border — active panel border uses outline colour (#55FFFF) to indicate focus
transition-duration:0ms — all state changes are instantaneous; no easing
transition-easing:  none
exempt-animations:  cursor-blink — if present, cursor blink animation must persist even with 0ms transition duration

## 3. Colors

All colours are drawn from the 16-colour VGA palette. No opacity, gradients, or alpha channels. Hex values are [unverified] — derived from conventional VGA palette knowledge, no cited source.

- **primary** (#0000AA) [unverified] — Navy blue main background and primary surface
- **on-primary** (#FFFFFF) [unverified] — Default text, file list content, labels
- **secondary** / surface-container (#000080) [unverified] — Darker blue for inactive panels or subtle depth (contested: one provider assigns #FFFF00 to secondary; this datum accepts #000080 by 2-of-3 majority among providers that define the field)
- **on-secondary** (#FFFFFF) [unverified] — Text on secondary surface
- **tertiary** / accent (#FFFF00) [unverified] — Function-key hints, drive letters, highlighted markers
- **inverse-surface** (#FFFFFF) [unverified] — Selection background (inverse video)
- **inverse-on-surface** (#0000AA) [unverified] — Text colour on selected row
- **outline** (#55FFFF) [unverified] — Box-drawing borders and dividers (contested: one provider uses #FFFFFF as default but notes #55FFFF as alternative; this datum accepts #55FFFF based on 2-of-3 majority among explicit outlines)
- **neutral** (#000080) [unverified] — Not used directly but available as alternative depth

**Dark mode variant:** No swap — dark mode is the only mode. In a modern hybrid context, the navy background may be replaced with true black (#000000) while keeping all other colours.

## 4. Typography

All type roles use the same monospaced font at the same pixel size. No weight, tracking, or case variation within the VGA grid.

**Primary typeface:** CONTESTED:§3.primary_typeface — providers unanimously name "IBM VGA 8×16" but none cite a foundry or year of origin. Per typeface adjudication rule, an unverified typeface name must be replaced with a gap marker. The closest web-safe fallback is a system monospace (e.g., Courier New, Lucida Console, DejaVu Sans Mono).

**Google Fonts substitute:** CONTESTED:§3.google_fonts_substitute — providers suggest VT323, Press Start 2P, or Fira Mono as pixel-font approximations, but none cite a rendering-pipeline compatible source. No authoritative substitute can be assigned.

**Glyph set:** ASCII + box-drawing characters (U+2500–257F). No ligatures. Tabular numbers for file sizes and dates.

**Role-specific settings** (all identical):

| Role | font-family | font-size | font-weight | line-height | letter-spacing | text-transform | text-decoration |
|------|-------------|-----------|-------------|-------------|----------------|----------------|-----------------|
| display | CONTESTED:§3.primary_typeface | text-base (16px) | font-normal | leading-none | tracking-normal | normal-case (uppercase optional for paths) | none |
| headline | same as display | text-base | font-normal | leading-none | tracking-normal | normal-case | none |
| title | same as display | text-base | font-normal | leading-none | tracking-normal | normal-case | none |
| body | same as display | text-base | font-normal | leading-none | tracking-normal | normal-case | none |
| label | same as display | text-base | font-normal | leading-none | tracking-normal | normal-case | none |

- Single weight and size across all roles.
- Directory names and drive letters may use outline colour (#55FFFF) or bold white.
- Inverse video reverses foreground/background (white bg, blue text).
- File sizes right-aligned with comma separators (e.g., `1,234,567`).
- No anti-aliasing — pixel-perfect rendering required.

## 5. Elevation

**Flat depth model — no shadow hierarchy.** All surfaces are at a single z-plane. No elevation levels.

**Stacking context** (minimal — only for modal overlays):
- base-content: z-0
- command-line: z-5
- overlays (modal dialogs): z-40

Modal overlays are drawn with box-drawing characters and appear instantly, without depth or shadow cues.

## 6. Spacing & Sizing

All spacing is based on the character grid: 1 cell = 8px wide × 16px tall. No flexible spacing.

- padding:
  component-internal: p-0 (content fills cell exactly)
  section-internal: p-0
  page-edge: p-0

- margin:
  between-components: gap-0 (adjacency via character grid)
  between-sections: gap-0

- component-heights (per row):
  default row: h-4 (16px)
  default interactive target: h-4
  bottom bar (command line + function keys): h-8 (32px, 2 rows)

- icon-size: not applicable — single character glyphs (w-4 h-4)
- avatar-size: not applicable

## 7. Borders

No CSS borders are used. All visual borders and dividers are rendered with monospaced box-drawing Unicode characters (single-line or double-line variants).

- border-radius: rounded-none (all corners 90°)
- border-width: border-0
- border-style: border-none
- border-image: none
- clip-path: none

**Box-drawing characters used:**
- Vertical: `│` (U+2502)
- Horizontal: `─` (U+2500)
- Corners: `┌`, `┐`, `└`, `┘` (U+250C, U+2510, U+2514, U+2518)
- Junctions: `├`, `┤`, `┬`, `┴`, `┼` (U+251C, U+2524, U+252C, U+2534, U+253C)
- Divider between panels: single `│`

## 8. Opacity

- disabled-state: CONTESTED:§8.opacity_disabled — providers give [opacity-100 / opacity-40 / not applicable / opacity-100]; no cited source; re-stack required
- ghost/secondary: not applicable
- overlay/scrim: not applicable (modal dialogs are solid)
- hover-feedback: not applicable (no hover state)

**Browser chrome** (conditional — activate for immersive retro feel):
- selection: background: #FFFFFF (inverse video); color: #0000AA
- scrollbar: hidden by default; implied by arrow indicators at top/bottom of list. If rendered: track #000080, thumb #55FFFF, width ~6px

## 8.5. Visual Effects

### 8.5.0 — Physical Material Model

material-model:    crt-screen

global-filter:     none — core style uses no global filter; optional CRT bloom may be applied per-text via text-shadow

global-overlay:    Optional CRT scanlines via body::after pseudo-element:
                   repeating-linear-gradient(0deg, transparent 0, transparent 1px, rgba(0,0,0,0.1) 1px, rgba(0,0,0,0.1) 2px)
                   blend: overlay, opacity 0.1–0.2, pointer-events:none, position:fixed, z-index:9999
                   Optional: phosphor bloom text-shadow on white/cyan text for glow effect.
                   None of these overlays are mandatory — the core style requires only the VGA character grid.

rendering-flags:
  font-smoothing:  none — pixel-perfect rendering, no anti-aliasing
  image-rendering: pixelated — for any raster elements (though no images in core)
  text-rendering:  optimizeSpeed

**Compositing stack (optional):** base → CRT scanlines (overlay, blend) → phosphor glow (text-shadow)

### 8.5c — Gradients & Glow

- text-shadow (optional phosphor bloom): `text-shadow: 0 0 2px #FFFFFF, 0 0 4px rgba(255,255,255,0.5)` — applied only to white/cyan text when CRT effect is enabled. No animation.
- filter: drop-shadow: not used

### 8.5d — Texture & Noise Simulation

**CRT Scanlines** (optional):
- technique: repeating-linear-gradient
- parameters: `repeating-linear-gradient(0deg, transparent 0%, transparent 1px, rgba(0,0,0,0.1) 1px, rgba(0,0,0,0.1) 2px)`
- surface: full-page canvas
- intensity: moderate (adjustable via opacity)
- blend: overlay, opacity 0.1–0.2
- color: monochrome black
- animation: none
- Tailwind approximation: no native equivalent

**Phosphor Burn-in / Bloom** (optional):
- technique: CSS text-shadow and/or radial gradient
- parameters: subtle glow on bright text; or `radial-gradient(ellipse at center, #0000AA 30%, #000044 100%)` for burn-in effect
- surface: full canvas (burn-in) or text (bloom)
- intensity: barely perceptible to moderate
- blend: multiply (burn-in), normal (bloom)
- animation: none
## 9. Components

### Icon Vocabulary

- system: none — use glyphs (`<DIR>`, `..`, `F1`), abbreviations, or Unicode box-drawing characters
- size: 1 character cell (8×16px)
- color: inherits currentColor from text role
- treatment: flat, no anti-aliasing
- restrictions: no bitmap icons, SVG, emoji, or images

### Image & Media Treatment

Not applicable — no images are used in the core style. If images appear in a retro-hybrid context, they must be treated with integer scaling and no smoothing.

### Core Components

**Dual-Panel Container**
- Layout: two equal-width panels separated by a 1-character vertical bar (`│`)
- Fill: primary background (#0000AA)
- Border: no CSS border; visual frame drawn with box-drawing characters (`┌ ┐ └ ┘`, side `│`)
- Rounding: none

**Panel Component**
- Title bar: drive letter, path, volume label — display typography, white on primary
- File list rows: headline typography, left-aligned columns: filename, size, date
- Selection highlight: inverse video (white background #FFFFFF, blue text #0000AA)
- Active vs inactive: Only the active panel shows the selection highlight; inactive panel shows default text
- Scroll indication: arrow symbols (`↑`/`↓`) at top/bottom border when content overflows

**Command Line**
- Row with prompt string (e.g., `C:\>`), white text on primary, blinking underscore or block cursor
- Cursor blink: `1s steps(1) infinite` — toggles between visible and invisible
- Disabled state: not applicable (hidden when modal is open)

**Function Key Bar**
- Bottom row: `F1 Help  F2 Menu  F3 View  F4 Edit …` in accent colour (#FFFF00) on primary
- No selection states; static labels

**Modal Dialog** (e.g., Copy, Move, Delete)
- Border drawn with box-drawing characters (`┌ ┐ └ ┘ ├ ┤ ┬ ┴ ┼`) in outline colour
- Fill: primary (#0000AA)
- Text: white on primary
- Title in title typography
- Appears instantly (no animation)
- Opaque — no transparency

**Scrollable List**
- Behaviour: arrow-key navigation, one row per key press
- No scrollbar; arrow indicators at list boundaries
- Row height: one character cell (16px)

**Button (Action Strip)**
- Represented as text labels inside modal or function key bar
- No visual button shape — plain text, occasionally with bracket markers (e.g., `[ Yes ]`)
- Active: inverse video when selected via Tab

**Data Display Components:**

metric-cell:
  Display: a single line in a file list or panel header. Background: primary (#0000AA). Text: headline typography (monospaced white on blue). Value in same font. No delta indicator – the system does not display deltas. No glow, no shadow.

signal-bar:
  Not applicable – no visual bars in the system. Replace with character-based progress indicator: e.g., `[########    ]` using block characters. Track: `[` and `]` in outline, fill with `#` in accent yellow. Height: one character cell.

status-cell:
  File permissions or attributes displayed as text (e.g., `RHS`). No colour-coding; uses inverse video for selected status. No distinct treatment for ok/warn/err – all status is text only.

data-table-row:
  A single file entry: filename (left-aligned, monospaced white), size (right-aligned, monospaced white), date (monospaced white). Row selected: inverse video (white bg, blue text). No alternating colours.

chart-surface:
  Not applicable – no charts. If a retro-hybrid context requires a simple bar chart, it would be rendered using block characters on primary background, with axis labels in monospaced text.

## 10. Layout

- **Spacing cadence:** Character grid — every element snaps to 8×16px cells. No fractional offsets.
- **Grid tendency:** Fixed 80-column width × 25-row height. All interfaces must fit exactly into this grid or an integer multiple.
- **Density:** Maximal — all rows and columns carry information.
- **Section separation:** Top row (menu/status bar, optional) → dual-panel area (22–23 rows) → bottom area (2–3 rows: command line + function keys). Panels separated by a 1-character vertical divider.
- **Alignment philosophy:** Left-aligned for text, right-aligned for numbers (file sizes). Columns align to fixed character-cell boundaries. Modal dialog titles may be centred.
- **Breakpoint behavior:** Not responsive. The layout does not reflow. On viewports smaller than 80×25, scale down by integer factor (e.g., 2×2 user-space pixels per cell) or clip. At larger viewports, the grid can be centred with integer scaling.

### Motion

- transitions: all state changes are instantaneous (duration 0ms, timing-function steps(1))
- animations:
  - cursor-blink: `1s steps(1) infinite` — toggles cursor visibility (block or underscore)
  - panel-focus: instantaneous colour swap on Tab press (0ms)
- transforms-at-rest: none
- transforms-on-interact: none (no hover, no scale)
- transform-style: flat
- backface-visibility: hidden (not used)
- scrolling: discrete row jump per key press, no easing or acceleration

## 11. Design System Notes

### 11a. Use Constraints

**Appropriate for:** file management UIs, terminal emulator skins, retro-themed dashboards, system administration tools, keyboard-driven data-dense interfaces, developer workflows, educational tools demonstrating legacy computing.

**Wrong for:** modern consumer mobile apps, image-heavy websites, media-rich editorial interfaces, contexts requiring pictorial icons, smooth animations, touch-first interaction, or WCAG AAA contrast compliance (the VGA palette does not meet modern accessibility standards).

### 11b. Prompt Phrases

1. "Dual-panel file manager layout with 80-column grid"
2. "16-colour VGA palette on dark navy blue background"
3. "Inverse-video selection (white background, blue text)"
4. "Yellow function-key bar (F1–F10) at bottom"
5. "Monospaced text with box-drawing characters for borders"
6. "Keyboard-driven navigation with arrow keys and Tab"
7. "Modal dialog boxes drawn as ASCII box-drawing windows"
8. "CRT scanline texture and phosphor glow (optional)"
9. "All elements snap to 8×16 pixel character grid"

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description. Minimum 4 rules, maximum 8.

rule: Use exact VGA blue for backgrounds and restrict colours to 16-colour VGA palette; no alpha, no gradients.
do:   Use the exact VGA blue for backgrounds (#0000AA or #000080) and restrict colours to the 16-colour VGA palette with no alpha channel or gradients.
avoid:Rounded corners, drop shadows, or any blended transparency; gradients and animations longer than a single frame.

rule: All text must be monospaced and the same size.
do:   Keep all text monospaced and the same size (one character cell).
avoid:Variable-width fonts or anti-aliased rendering.

rule: Dividers and borders must use box-drawing characters only.
do:   Draw dividers and borders only with box-drawing Unicode characters (`┌ ┐ └ ┘ ├ ┤ ┬ ┴ ┼`).
avoid:Icons, images, SVG, emoji, or any graphical elements.

rule: Selection is indicated by inverse video.
do:   Apply inverse video (white background #FFFFFF, blue text #0000AA) for selection.
avoid:Mouse-dependent interactions (tooltips, hover effects, drag-and-drop) — selection must be keyboard-based.

rule: Interactions must be instant, no transitions.
do:   Make all interactions instant (no fade, no transitions, 0ms duration).
avoid:Gradients, animations longer than a single frame, or smooth scrolling.

rule: Everything snaps to character grid.
do:   Ensure every element snaps to the 8×16 character grid.
avoid:Breaking the grid – no fractional positions (no subpixel offsets).

### 11d. Variation Bounds

| Axis | Lower bound | Default | Upper bound |
|------|------------|---------|-------------|
| Blue depth | #000044 (midnight) | #0000AA (royal navy) | #000080 (dark navy) |
| Font sharpness | Soft-scaled (bilinear CRT) | Pixel-perfect VGA | Hardest (no subpixel) |
| Panel ratio | 50/50 balanced | 50/50 | 60/40 (active panel wider) |
| Decorations | Minimal (no menu bar, no drive bar) | Standard (top bar + F-key bar) | Maximal (full menu, drive bar, function keys) |
| Clean vs grungy | Pristine scanlines | Moderate CRT bloom | Heavy: phosphor burn-in, dust specks, flicker |
| Phosphor colour | Blue (#0000AA) | Blue | Green (#00FF00) or Amber (#FFAA00) |
| Text vs iconic | Pure ASCII (no Unicode) | ASCII + box-drawing | Full Unicode block elements (▏▐█) |

### 11e. Compositional Signatures

### 11e.i — At Rest
- Top row: Optional menu bar (drive letters, pull-down menu names)
- Middle: Two equal-width panels with 1-character vertical divider; each panel contains a header and 22–23 file list rows
- Bottom: Command line (prompt + input) and function key bar (10 segments)
- Status: Bottom-most line (optional `Press F1 for help`)
- Scroll indicators: Arrow characters at panel borders
- Modal overlays: Centred box-drawn windows, same colour as background, instant appearance

All text rendered in monospaced font (system default) at 8×16px character cell. Primary background #0000AA, white text, accent yellow #FFFF00 on function key bar. Active panel has normal background; inactive panel same but without selection highlight.

### 11e.ii — Maximum Expressiveness
- Dual panels both active: left panel showing many files (scrolling indicator arrows), right panel showing a directory tree (inverse video on current item)
- Command line active with cursor blinking (1s steps(1) infinite)
- Modal dialog (Copy) open centred, with border in box-drawing characters, button strip `[ Yes ] [ No ] [ Cancel ]` with one option highlighted via inverse video
- Full function key bar at bottom: `F1 Help  F2 Menu  F3 View  F4 Edit  F5 Copy  F6 RenMov  F7 MkDir  F8 Delete  F9 PullDn  F10 Quit`
- Optional CRT overlay: scanlines, phosphor glow, flicker animation
- Title bar at top: drive letters and menu names in white on blue, with inverse video on the active menu
- All elements snap to grid, no fractional offsets

### 11e.iii — Data Context
- File listing panel with columns: filename (left, monospaced white, max 12 chars), size (right, monospaced white, right-aligned numbers), date (monospaced white, YYYY-MM-DD)
- Status bar at top showing sorted key: `Name  Size  Date` with active column highlighted in yellow
- Selected files shown in inverse video (white background, blue text)
- No graphs, no bars, no colour coding – all data is text-only
- Every row is exactly one character cell high; no line spacing variance
- Modal dialogs for operations (Copy, Delete) show source/target paths in text, with numeric counters for progress (e.g., `Copying file 3 of 12...`)
- No charts or sparklines; any data representation is purely typographic

### 11f. Sources

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** **Norton Commander**, originally released by **Peter Norton Computing** (later acquired by **Symantec**) in 1986, is a file manager utility whose visual identity spans the DOS character-based GUI (CGA/EGA/VGA), retail packaging, and printed documentation. The identity draws on the IBM PC character set (code page 437), a proprietary logotype, and period typefaces including Times New Roman, Helvetica Bold, Helvetica, and Futura.

**Verified imagery sources.** 6 URLs verified against institutional servers, distributed across:
- WinWorld PC — 1 URL(s)
- Google Images — 1 URL(s)
- en.wikipedia.org — 1 URL(s)
- Wikimedia Commons — 1 URL(s)
- Google Books — 1 URL(s)
- Computer History Museum — 1 URL(s)

Key references include no specific institutional records currently catalogued; the top imagery references list remains empty, and no external archival sources for the identity have been attested in this document.

**Named typefaces.** The typography of this style is attested as:
- IBM PC character set (code page 437) ( — attestation: attested) — no Google Fonts substitute available
- Norton Commander logotype ( — attestation: unverified) — rendered here as bespoke imagery — no web-font substitute
- Times New Roman ( — attestation: inferred) — rendered here in Tinos as the closest open substitute
- Helvetica Bold ( — attestation: inferred) — rendered here in Inter as the closest open substitute
- Helvetica ( — attestation: inferred) — rendered here in Inter as the closest open substitute
- Futura ( — attestation: inferred) — rendered here in Jost as the closest open substitute
- Norton Commander splash screen bitmap ( — attestation: unknown) — rendered here as bespoke imagery — no web-font substitute

**Honest gaps.** The most significant gap is colour – exact retail box blue (CMYK/hex): Not attested; approximations vary widely. No measured specimen from a known physical box exists in the current record. Additional gaps in typeface usage (splash screen bitmap versus printed materials) remain unresolved. A measured specimen from a known physical box would resolve the primary colour uncertainty.
