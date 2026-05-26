---
version: alpha
name: "Excel 97"
description: "Resurrects the late‑1990s Windows desktop paradigm: a beige‑box interface of raised 3D buttons, grey gradients, and the ghost of Clippy. The core rendering philosophy is instant, binary, and physically simulated with beveled edges and pixel‑perfect bitmap rendering."
colors:
  Interface-Grey: "#C0C0C0"
  Cell-White: "#FFFFFF"
  Text-Black: "#000000"
  Primary-Navy: "#000080"
  Title-Bar-Blue: "#0000FF"
  Highlight-Blue: "#0080FF"
  White-Text: "#FFFFFF"
  Hyperlink-Blue: "#0000FF"
  Visited-Purple: "#800080"
  Error-Yellow: "#FFFFE0"
  Grid-Grey: "#C0C0C0"
  Disabled-Grey: "#808080"
typography:
  display:
    fontFamily: "MS Sans Serif"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0em"
    textTransform: "normal-case"
  headline:
    fontFamily: "MS Sans Serif"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0em"
    textTransform: "normal-case"
  title:
    fontFamily: "MS Sans Serif"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0em"
    textTransform: "normal-case"
  body:
    fontFamily: "MS Sans Serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
    textTransform: "normal-case"
  label:
    fontFamily: "MS Sans Serif"
    fontSize: "8px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0em"
    textTransform: "normal-case"
rounded:
  default: "0px"
  card: "0px"
  button: "0px"
  input: "0px"
  chip: "0px"
spacing:
  component-internal: "4px"
  section-internal: "8px"
  page-edge: "12px"
  gap-component: "4px"
  gap-section: "8px"
  height-sm: "18px"
  height-md: "22px"
  height-lg: "28px"
  icon: "16px"
components:
  button:
    backgroundColor: "#C0C0C0"
    rounded: "{rounded.button}"
    padding: "4px"
    height: "22px"
    width: "22px"
  dialog-window:
    backgroundColor: "#C0C0C0"
    rounded: "{rounded.card}"
    padding: "8px"
  formula-bar-input:
    backgroundColor: "#FFFFFF"
    textColor: "#000000"
    rounded: "{rounded.input}"
    padding: "4px"
    height: "22px"
  metric-cell:
    backgroundColor: "#FFFFFF"
    textColor: "#000000"
    rounded: "0px"
    padding: "2px"
    height: "18px"
  chart-surface:
    backgroundColor: "#FFFFFF"
    rounded: "0px"
    padding: "8px"
provenance:
  coverage_status: "sparse"
  identity_description: "The slug `excel-97` refers to the visual identity of Microsoft Excel 97, the spreadsheet application released as part of Microsoft Office 97 (version 8.0) in late 1996 (general availability January 1997). This identity includes the application’s primary logo (the green ‘X’ cross mark), the splash screen, iconography, toolbar design, and the broader Office 97 visual system (shared by Word, Powe"
  manual_enrichment_required: false
  imagery_count: 4
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "iconarchive.com"
      count: 1
    - host: "www.computerhistory.org"
      count: 1
    - host: "web.archive.org"
      count: 1
    - host: "www.iconarchive.com"
      count: 1
  imagery_urls:
    - url: "https://iconarchive.com/show/microsoft-office-icons-by-microsoft.html"
      host: "iconarchive.com"
      institution: "IconArchive.com"
      confidence_original: low
    - url: "https://www.computerhistory.org/collections/"
      host: "www.computerhistory.org"
      institution: "Computer History Museum, Mountain View, CA"
      confidence_original: low
    - url: "https://web.archive.org/web/20080505055333/http://msdn.microsoft.com/en-us/library/ms997636.aspx"
      host: "web.archive.org"
      institution: "Microsoft via Internet Archive"
      confidence_original: low
    - url: "https://www.iconarchive.com/show/microsoft-windows-95-icons-by-microsoft.html"
      host: "www.iconarchive.com"
      institution: "IconArchive.com"
      confidence_original: low
  typefaces_attested:
    - name: "Microsoft Excel 97 wordmark"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "conventional"
    - name: "Tahoma"
      foundry: null
      year: 1994
      google_fonts: "Public Sans"
      attestation: "attested"
  flags:
    - "sparse_imagery"
    - "2_robots_disallowed_urls"
  honest_gaps:
    - "1. **Colour: no verified hex or Pantone values.** Resolution: locate a Microsoft brand guide from the Office 97 era or sample a physical box using a spectrophotometer."
---
# Design System: Excel 97

## 0. Taxonomy & Identity

entity-type:            interface / system / environment
artefact-family:        operating system / software UI
technique:              digital raster
movement-lineage:       1990s desktop / cyber / rave
era:                    1990s desktop / cyber / rave
geography:              US / Canada
domain:                 finance / insurance / admin
formal-traits:          grid-based, volumetric, utilitarian, dense
color-logic:            institutional-neutral
typography-mode:        grotesque
texture:                matte, grainy
function:               simulate
provenance:             revival / homage

## 1. Overview

Excel 97 resurrects the late‑1990s Windows desktop paradigm: a beige‑box interface of raised 3D buttons, grey gradients, and the ghost of Clippy. The emotional tone is boxy, pragmatic, and slightly nostalgic — the interface is a tool, not a canvas. It belongs to the 1990s desktop/cyber lineage, characterised by a rigid non‑responsive grid (800×600 or 1024×768), pixel‑perfect bitmap rendering, and a fixed grey palette accented with the classic Windows 95/98 blue gradient.

The core rendering philosophy is instant, binary, and physically simulated: every UI element appears as a real object with beveled edges (raised or sunken) and a distinct highlight/shadow pair. There is no anti‑aliasing, no semi‑transparency, no smooth gradients — only hard colour shifts and visible banding. The style is dense: toolbars stacked at the top, a formula bar, a grid of cells with row/column headers, a status bar below, and thick 3D window borders.

What makes it recognisable: chunky 22×22 buttons with top‑left white highlights and bottom‑right dark shadows, 16×16 pixel icons with two colours plus transparent, the blue gradient title bar (#000080 to #0000FF), downward scrollbars with a 3D ridge, thick sunken status bar, and the "marching ants" selection animation. What would break it: anti‑aliasing of any kind, rounded corners, transparent overlays or glassmorphism, responsive layout, smooth transitions, or vector icons.

The style simulates a CRT display with optional scanlines, barrel distortion, and a faint watermark — surfaces are not just flat grey but physically textured (dither, scanlines, moiré patterns in large areas).

- **Recognisable from two glances:** grey toolbar, blue title bar, raised buttons, pixel icons
- **Breaks if:** anti‑aliased, rounded, transparent, responsive, or animated smoothly
- **Appropriate for:** retro UI kits, nostalgic data dashboards, period‑accurate interfaces
- **One detail that sells it:** the 1‑pixel white highlight on every interactive element

## 2. Constants

Light Mode:   primary — default, no dark mode offered
Dark Mode:    no — interface remains light grey; optional variation knob lowers brightness (#A0A0A0)
Responsive:   no — fixed viewport (800×600 or 1024×768); no breakpoint behaviour
States:       Default, Active (pressed), Disabled (dithered pattern)
surface-simulation: crt-screen — the entire interface simulates a CRT monitor, including scanlines, barrel distortion, and phosphor glow

## 2a — Interaction Model

hover-delta:        none — no hover state; Excel 97 does not provide visual feedback on hover
active-delta:       bevel-depress — raised bevels invert to sunken on press; content shifts 1px down and right
focus-style:        outline — a 1px dotted black rectangle appears around the focused element (e.g., button text, cell)
transition-duration:0ms — all state changes are instantaneous; no easing
transition-easing:  none
exempt-animations:  marching-ants — the selection marquee animation must continue despite 0ms transition rule; other animations are absent or static

## 3. Colors

- **Interface Grey** (#C0C0C0) [conventional] — toolbar, panel, and button backgrounds
- **Cell White** (#FFFFFF) [conventional] — cell content area, window inner backgrounds
- **Text Black** (#000000) [conventional] — all default text on grey and white
- **Primary Navy** (#000080) [conventional] — title bar active text, window frame active text
- **Title Bar Blue** (#0000FF) [conventional] — gradient end for title bar; also hyperlink colour
- **Highlight Blue** (#0080FF) [conventional] — selected cell fill, selection marquee
- **White Text** (#FFFFFF) [conventional] — text on highlighted cells and primary navy background
- **Hyperlink Blue** (#0000FF) [conventional] — link text (identical hex to Title Bar Blue)
- **Visited Purple** (#800080) [conventional] — visited link text
- **Error Yellow** (#FFFFE0) [conventional] — warning dialog background
- **Grid Grey** (#C0C0C0) [conventional] — cell gridlines (same hex as Interface Grey)
- **Disabled Grey** (#808080) [conventional] — 50% pattern base for disabled controls (not a solid fill)

**Dark mode:** Not applicable. Only a variation knob shifts base grey toward #A0A0A0 or #E0E0E0.

**Additional VGA chart colors (exactly 16):** red (#FF0000), green (#00FF00), blue (#0000FF), yellow (#FFFF00), cyan (#00FFFF), magenta (#FF00FF), dark red (#800000), dark green (#008000), dark blue (#000080), olive (#808000), teal (#008080), purple (#800080), white (#FFFFFF), silver (#C0C0C0), gray (#808080), black (#000000). These are used only for chart objects and drawing shapes.

## 4. Typography

display:
  font-family:      CONTESTED:§3.primary_typeface — no provider cites foundry; re-stack required
  font-size:        text-2xl (24px)
  font-weight:      font-bold
  line-height:      leading-none
  letter-spacing:   tracking-normal
  text-transform:   normal-case
  text-decoration:  none

headline:
  font-family:      CONTESTED:§3.secondary_typeface — no provider cites foundry; re-stack required
  font-size:        text-lg (18px)
  font-weight:      font-bold
  line-height:      leading-tight
  letter-spacing:   tracking-normal
  text-transform:   normal-case
  text-decoration:  none

title:
  font-family:      CONTESTED:§3.secondary_typeface — same as headline; re-stack required
  font-size:        text-sm (14px)
  font-weight:      font-bold
  line-height:      leading-tight
  letter-spacing:   tracking-normal
  text-transform:   normal-case
  text-decoration:  none

body:
  font-family:      CONTESTED:§3.secondary_typeface — no provider cites foundry; re-stack required
  font-size:        text-xs (12px)
  font-weight:      font-normal
  line-height:      leading-normal
  letter-spacing:   tracking-normal
  text-transform:   normal-case
  text-decoration:  none

label:
  font-family:      CONTESTED:§3.primary_typeface — same as display; re-stack required
  font-size:        text-[8px] (8pt — implement with arbitrary value)
  font-weight:      font-normal
  line-height:      leading-none
  letter-spacing:   tracking-normal
  text-transform:   normal-case
  text-decoration:  none

Google Fonts substitute:
  CONTESTED:§3.google_fonts_substitute — providers gave [none / Tahoma / Segoe UI / Arimo]; no consensus; re-stack required

**Additional rules:**
- Column headers and row numbers use `font-bold`
- Hyperlinks use `text-decoration: underline` and colour `#0000FF`
- All text is left-aligned, no kerning, no letter-spacing
- Pixel-perfect sizes only: 8, 10, 12, 14, 18, 24
- No anti-aliasing — use `-webkit-font-smoothing: none;` and `font-smooth: never;`
- Bold is permitted, italic is forbidden

## 5. Elevation

Flat depth model with simulated 3D bevels via 1px highlight/shadow borders.
No CSS box-shadow is used.

raised:   border-t-white, border-l-white, border-b-#808080, border-r-#808080
sunken:   border-t-#808080, border-l-#808080, border-b-white, border-r-white

Stacking context:
  base-content:       z-0
  toolbars:           z-10
  dialog windows:     z-40
  modal dialogs:      z-50
  top-layer (popups): z-60

## 6. Spacing & Sizing

padding:
  component-internal:      p-1 (4px) — inside buttons, around icons
  section-internal:        p-2 (8px) — inside dialog content areas
  page-edge:               p-3 (12px) — window chrome inner margin

margin:
  between-components:      gap-1 (4px) — toolbar icon spacing
  between-sections:        gap-2 (8px) — between toolbar rows, between formula bar and grid

component-heights:
  sm:   h-[18px] — status bar sections, small labels
  md:   h-[22px] — default button, toolbar item
  lg:   h-[28px] — formula bar input area

icon-size:         w-4 h-4 (16×16 px) — toolbar buttons; also 24×24 for larger icons
avatar-size:       not applicable

## 7. Borders

border-radius:
  default:   rounded-none — no rounding anywhere
  card:      rounded-none
  button:    rounded-none
  input:     rounded-none
  chip/badge: rounded-none — not used

border-width:
  default:      border (1px) — gridlines, raised/sunken bevel edges
  emphasis:     border-2 — selected cell outline, dialog outer frame
  thick:        border-4 — window border (raised outer + sunken inner)

border-style:   border-solid — all borders solid; no dashed/dotted except marching ants selection

border-image:   not applicable

clip-path:      not applicable

## 8. Opacity

disabled-state:     not an opacity — 50% dithered pattern (#808080 crosshatch)
ghost/secondary:    not used
overlay/scrim:      not used
hover-feedback:     not used — no hover states

Browser chrome:
  selection:
    background:  #0080FF (solid, no transparency)
    colour:       #FFFFFF
  scrollbar:
    style:       styled — classic Windows thick ridge
    width:       thick (16–18 px)
    track:       #C0C0C0
    thumb:       #C0C0C0 with raised 3D bevel (border-top/left white, border-bottom/right #808080)
    thumb-hover: same as thumb — no hover effect

## 8.5. Visual Effects

This section is active because the style has structural gradients, texture overlays, and CRT simulation effects. Dark mode inheritance is not applicable (only light mode).

### 8.5.0 — Physical Material Model

material-model:    crt-screen

global-filter:     contrast(1.1) brightness(0.9) — simulates CRT barrel distortion and slight drop in brightness; optional higher-fidelity SVG filter via feDisplacementMap

global-overlay:    CRT scanlines via body::after pseudo-element:
                   repeating-linear-gradient(rgba(0,0,0,0.5) 0 1px, transparent 1px 4px)
                   blend: overlay, opacity-20, pointer-events:none, position:fixed, z-index:9999

rendering-flags:
  font-smoothing:  none — pixel-perfect bitmap rendering, no anti-aliasing
  image-rendering: pixelated — 16×16 icons and bitmap graphics must not be interpolated
  text-rendering:  optimizeSpeed

### 8.5c — Gradients & Glow

Title Bar Gradient:
  role:         structural — window identity
  description:  Two-stop linear gradient from #000080 to #0000FF, vertical, with visible banding due to 8‑bit colour depth
  stops:        from primary-navy to title-bar-blue
  animation:    none — static

### 8.5d — Texture & Noise Simulation

**Monitor Scanlines:**
  technique:    repeating‑linear‑gradient scanline — 1px black at 50% opacity every 4px
  surface:      full viewport (CRT effect)
  intensity:    moderate
  blend:        overlay, opacity‑20
  colour:       black
  animation:    none
  tailwind‑approximation: no native equivalent; implement via CSS `repeating-linear-gradient`

**Disabled Dither:**
  technique:    50% grey crosshatch pattern — CSS `repeating-conic-gradient` or 4×4 PNG tile
  surface:      disabled controls and inactive areas
  intensity:    strong
  blend:        normal
  colour:       #808080
  animation:    none
  tailwind‑approximation: no native equivalent; use `background-image` with a data‑URI pattern

**Barrel Distortion (optional):**
  technique:    SVG filter with `feDisplacementMap` or CSS `filter: contrast(1.1) brightness(0.9)` approximation
  surface:      full viewport (simulate 15‑inch CRT)
  intensity:    subtle — corners pull inward
  blend:        n/a
  tailwind‑approximation: no native equivalent; implement via custom SVG filter

**Compositing stack for windows:** background grey → scanline overlay (overlay, opacity‑20) → raised bevel borders (via border colours, no blending).
## 9. Components

icon-vocabulary:
  system:       custom pixel sprites in classic Office 97 style (floppy disk for save, printer for print, folder for open, binoculars for search, sigma for AutoSum)
  size:         w-4 h-4 (16×16 px) or w-6 h-6 (24×24 px)
  colour:       two colours plus transparent background — typically dark grey (#000000) and highlight white (#FFFFFF) on Interface Grey (#C0C0C0)
  treatment:    pixel-perfect, no anti-aliasing, single highlight pixel top-left, single shadow pixel bottom-right
  restrictions: no smooth icons, no gradients, no semi-transparency, no stroke outside 1px

image-treatment:
  not applicable — no images used

**Buttons:**
- Size: 22×22 px (h-[22px], w-[22px])
- Corner: rounded-none
- Border: raised (1px white top/left, 1px #808080 bottom/right)
- Fill: Interface Grey (#C0C0C0)
- Icon: pixel icon centred, 2 colours + transparent
- Pressed state: border inverted (1px #808080 top/left, 1px white bottom/right), icon optionally shifted 1px down/right
- Disabled state: dithered pattern overlay (#808080 crosshatch)
- No hover state, no gradient, no shadow

**Dialog Windows:**
- Fixed size, non-resizable, centred on screen
- Title bar: blue gradient (#000080 → #0000FF) with navy text (#000080), height 22–26px
- Close button: recessed square (sunken border) with "X" icon in pixel font
- Outer border: thick raised (border-2 white top/left, border-2 #808080 bottom/right) plus inner sunken border (1px)
- Minimize/Maximize/Close button set in upper-right corner: classic Windows square, recessed

**Toolbars:**
- Fixed docked positions at top (Standard + Formatting), up to 3 rows
- Separator between toolbar groups: vertical groove (2 thin lines — 1 white, 1 dark grey)
- Icon-only or icon+label (label uses text-[8px] MS Sans Serif)
- Buttons have raised 3D border; active (pressed) inverts border

**Formula Bar:**
- Located between toolbars and grid, full width of window
- Contains: a label "=" button (sunken), then a long text input field (sunken inset with white background)
- Text input uses MS Sans Serif 10pt (text-[10px]), black text on white

**Spreadsheet Grid:**
- Occupies majority of window
- Row numbers (left) and column letters (top) — grey background (#C0C0C0), bold black text
- Cells: white background (#FFFFFF), 1px grey gridlines (#C0C0C0)
- Selected cell: thick dark border (border-2, #000000) with white highlight (1px inset) and a tiny white "fill handle" square at bottom-right corner
- "Marching ants" selection: dashed line moving 1px every 300ms (CSS `animation` with `dashoffset`)

**Scrollbars:**
- Thick thumb track (16–18 px)
- 3D ridge: raised on thumb (top/left white, bottom/right #808080), sunken on track (inverse)
- Arrow buttons at each end (small raised square with black triangle)
- Scrolling: discrete step per tick (not smooth), no animation between steps

**Checkboxes / Radio Buttons:**
- Classic Windows 3D look
- Checkbox: square with sunken border (1px #808080 top/left, 1px white bottom/right) inside a flat white area
- Radio: circular equivalent with sunken border
- Checked state: black checkmark or dot, pixel-perfect

**Combo Boxes:**
- Drop-down arrow: small downward triangle in a grey button (raised, same size as a toolbar button)
- Edit box: sunken border, white background

**Tabs:**
- 3D raised look with active tab appearing to sit above content area
- Inactive tabs: sunken or flat
- Active tab: raised top and sides, no bottom border (appears connected to content area)

**Progress Bar:**
- Series of small blue blocks (#0000FF) on grey (#C0C0C0) background — not a smooth fill
- Block width ~4px, gap ~2px

**Status Bar:**
- Sunken panel at bottom (border: top dark grey, bottom white)
- Split into sections (e.g., "Ready", "Sum=...")
- Text: MS Sans Serif 8pt, left-aligned in each section

**Selection (marching ants):**
- Animated dashed line (border-2 dashed) running around selected cells or items
- `animation: march 0.3s linear infinite` — moves dash offset 1px per step
- No smooth cursor

**Fill Handle:**
- Small square (4×4 px) at bottom-right corner of selected cell
- Colour: white (#FFFFFF) with black border (1px)
- Draggable to extend selection

**Data Display Components:**

metric-cell:
  Background: white (#FFFFFF) with thin grey gridlines (1px #C0C0C0). Selected cell shows thick black border and white fill handle.
  Border: standard cell border is 1px #C0C0C0; selected cell gets border-2 #000000 with 1px white inset.
  Label: column header (bold black text on #C0C0C0) or row number (bold black text on #C0C0C0) — MS Sans Serif 8pt.
  Value: cell content is MS Sans Serif 10pt, black text on white. Delta indicators not used; value treated as numeric or text.
  Delta indicator: not applicable — Excel 97 shows raw numbers; no inline delta arrows.
  No glow or shadow; pixel-perfect rendering.

signal-bar:
  Not applicable — no signal bars in Excel 97.

status-cell:
  ok:   No explicit status; a cell with valid data is white background, black text.
  warn: A cell with an error is not highlighted; error displays as #DIV/0! in red text? (Excel defaults to red error text, but not defined in constraints). For this system, status is shown via the status bar text (e.g., "Ready", "Sum=...").
  err:  Status bar text is black on grey, no color coding.
  Border: none for status.

data-table-row:
  Spreadsheet rows are uniform white (#FFFFFF) with grey gridlines. Alternating colour not used; row background is all white.
  Cell border: 1px #C0C0C0 gridlines on individual cells.
  Label: row header (bold black text on grey) and column header (bold black text on grey).
  Value: cell text black on white.

chart-surface:
  Chart objects appear as embedded windows inside the spreadsheet. Background: white (#FFFFFF) for chart area, grey (#C0C0C0) for plot area? Typically Excel 97 charts have a white chart area and light grey plot area.
  Grid lines: light grey (#C0C0C0) dotted lines for value axis.
  Axis labels: MS Sans Serif 8pt, black.
  Chart series: Use 16 VGA colours (red #FF0000, green #00FF00, blue #0000FF, yellow #FFFF00, etc.) with no gradients. Columns are flat filled, not shaded.
  No glow, no drop shadow.

## 10. Layout

Spacing cadence:       Pixel-precise 4px grid; all margins and gaps are multiples of 1px (4px preferred)
Grid tendency:         Rigid, fixed-width columns and rows in spreadsheet; no responsive reflow
Density:               High — toolbars packed with icons, info-dense dashboard
Section separation:    Via raised/sunken borders or vertical grooves (toolbar separators)
Alignment philosophy:  Left-aligned, top-aligned, no centring except dialog titles
Breakpoint behaviour:   None — layout is fixed at 800×600 or 1024×768 viewport; content reflows not allowed

motion:
  transition-duration:       0ms — all state changes instant
  transition-timing-function: not applicable
  transition-property:        none
  transition-delay:           0ms
  transition-behaviour:       not applicable

  animation:
    marching-ants:   border-dashed offset 0→1px over 300ms steps(1), trigger: on-load — looping
    chart-build:     bar-by-bar wipe left-to-right 1s linear, trigger: on-load — one-time

  transform-at-rest: none

  transform-on-interact: none (binary state through border inversion only)

  transform-style:       flat
  transform-perspective: not used
  backface-visibility:   hidden — not used

## 11. Design System Notes

### 11a. Use Constraints

Appropriate for: retro UI kits, nostalgic data dashboards, low‑poly office scenes, period‑accurate interfaces set in the late 1990s, game HUDs depicting office or productivity applications, and anything that benefits from instant‑recognisable Windows 95/98 aesthetic.

Wrong for: modern minimalist apps (sleek, flat, responsive), high‑DPI retina interfaces (pixel icons become blurry), accessibility‑focused designs (low contrast, small text size, no hover states), mobile‑first layouts (fixed width), and any project requiring smooth transitions, transparency, or anti‑aliased rendering.

### 11b. Prompt Phrases

- "classic Windows 95 grey toolbar with raised 3D buttons"
- "16×16 pixel icons with single highlight top‑left and shadow bottom‑right"
- "non‑responsive 800×600 layout with grey background"
- "blue gradient title bar from navy to blue with navy text"
- "marching ants selection animation at 300ms intervals"
- "VGA chart colours: red, green, blue, yellow on grey background"
- "bitmapped MS Sans Serif font with no anti‑aliasing, crisp rendering"
- "chunky scrollbars with 3D ridge and arrow buttons at ends"

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description.

rule: Use the exact 16 VGA colours for all chart/drawing objects; never expand the palette.
do:   Use the fixed VGA set: #000000, #FFFFFF, #808080, #C0C0C0, #800000, #FF0000, #008000, #00FF00, #808000, #FFFF00, #000080, #0000FF, #800080, #FF00FF, #008080, #00FFFF.
avoid:Use any custom colours, gradients, or expanded palette beyond the 16 VGA colours.

rule: Every interactive element must use the classic raised/sunken 3D border model with light source top‑left.
do:   Add 1px white highlight top‑left and 1px dark grey (#808080) shadow bottom‑right on raised surfaces. Invert for sunken.
avoid:Use flat borders, drop shadows, or modern outline styles.

rule: All text and icons must use fixed pixel sizes (8, 10, 12, 14, 18, 24) with crisp bitmap rendering.
do:   Use MS Sans Serif at those exact sizes with no anti‑aliasing. Icons are 16×16 or 24×24 px.
avoid:Use vector fonts, smooth rendering, fractional font sizes, or high‑resolution icons.

rule: All state changes (pressed, disabled) must be instantaneous with 0ms transitions.
do:   Apply border inversion and icon shift immediately on press. Disabled state uses dithered overlay.
avoid:Use hover delays, opacity transitions, or CSS animations for state feedback.

rule: All corners are 90°; no rounded corners, no semi‑transparency, no alpha blending.
do:   Use square corners, crisp edges, and opaque fills. Banding in gradients is acceptable.
avoid:Any border‑radius, rgba colors, or opacity‑based effects.

rule: Scrolling must be discrete per tick with no smooth interpolation.
do:   Step scrollbar thumb in fixed increments per click or arrow button.
avoid:Smooth scrolling animations, momentum scrolling, or continuous scroll.

rule: All icons must be 16×16 or 24×24 pixel art with no vector or high‑res images.
do:   Use 2‑colour plus transparent sprites with 1px highlight top‑left and 1px shadow bottom‑right.
avoid:SVG icons, high‑resolution PNG icons, or icons with gradients.

rule: No hover effects, scale transforms, or colour transitions.
do:   State changes only on press/active via inverted border. No hover state exists.
avoid:Hover states that change background, add shadow, or apply any transform.

### 11d. Variation Bounds

1. **Base grey brightness**: #A0A0A0 (darkened) to #E0E0E0 (brightened) — keep the grey, adjust only lightness.
2. **Toolbar density**: one row of icons (standard) vs. three rows (icon+label) vs. no toolbars (pure spreadsheet grid).
3. **Chart style**: flat 2D columns, 3D exploded pie, or 3D surface with wireframe — all using exact 16 VGA colours.
4. **Grid on/off**: show standard grey gridlines, or hide grid for a "white canvas" while keeping cell boundaries visible.
5. **Clean retro vs. glitch‑artifact**: add intentional misregistration, colour banding, or corrupted font rendering.
6. **Colour scheme**: default grey theme, "Platinum" (beige/greys), or "Rose" (pink tones) — swap the base grey while keeping the blue title bar and VGA accent colours.

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts. Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
A single Excel 97 window fills the viewport (800×600 px). The surface-container is Interface Grey (#C0C0C0). The title bar at top uses blue gradient (#000080 to #0000FF) with white MS Sans Serif text ("Microsoft Excel - Book1") and classic minimise/maximise/close buttons (recessed square, pixel "X" icon). Below is a raised 3D toolbar dock (22px high) with icon-only buttons: each button is 22×22 px, raised border, 16×16 pixel icon. No pressed states. The formula bar sits below: sunken inset with white background, MS Sans Serif 10pt black text. The spreadsheet grid occupies the remainder: white cells (#FFFFFF) with 1px grey (#C0C0C0) gridlines. Row headers (grey background, bold black 8pt) and column headers (grey, bold black 8pt) are visible. A single cell is selected: thick black border (2px) with white inset 1px and fill handle (white 4×4 square) at bottom-right. Status bar at bottom: sunken panel, split into sections, text "Ready" in MS Sans Serif 8pt.

### 11e.ii — Maximum Expressiveness
Two overlapping Excel windows: one full-window, one smaller (400×300 px) partially covering the top-right. Both have active blue title bars. The foreground window shows a spreadsheet with a chart embedded: a 3D exploded pie chart using VGA colours (red, yellow, blue, green slices) on a white chart area with grey plot area. Toolbars are extended to three rows: Standard, Formatting, and Drawing. Buttons show a mix of icon-only and icon+label (text 8pt). The selected cell range is animated with marching ants (dashed border offset moving 1px every 300ms). A drop-down combo box is open below a toolbar, showing a list of font names in MS Sans Serif 8pt on a white drop-down list with sunken border. A progress bar (blue blocks on grey) appears in the status bar during a calculation. The background desktop is teal (#008080) with the taskbar at bottom (32px, raised bevel top edge) showing the Excel button, clock, and system tray. CRT scanline overlay is present (simulated via repeating gradient at opacity 0.15 multiply). Global filter: brightness(1.05) contrast(0.95) for fluorescent office light.

### 11e.iii — Data Context
The spreadsheet grid is the primary data display. Data values fill cells (white background, black MS Sans Serif 10pt text). Column headers are bold black 8pt on grey (#C0C0C0). A selected cell has thick black border and fill handle. Aggregated data appears in the status bar: e.g., "Sum=45.00" in MS Sans Serif 8pt black on grey sunken panel. No inline delta indicators; numeric values are raw. For chart data, a line chart uses VGA blue (#0000FF) line on white chart area with grey gridlines (dotted). No data table row alternation; all rows are white. Status is communicated exclusively via the status bar text ("Ready", "Enter", "Edit") — no color coding. Error values display as red text (#FF0000) in cells (e.g., #DIV/0!). The overall surface remains Interface Grey; no glow, no transparency.

### 11f. Sources

Imagery coverage is sparse — only 4 institutional records verified.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** **Microsoft Excel 97** was released as part of Microsoft Office 97 (version 8.0) in late 1996, with general availability in January 1997. Its visual identity includes the primary green ‘X’ cross mark logo, the splash screen, iconography, toolbar design, and the broader Office 97 visual system shared by sibling applications. The wordmark uses **Tahoma**, designed by **Matthew Carter** for Microsoft.

**Verified imagery sources.** 4 URLs verified against institutional servers, distributed across:
- IconArchive.com — 2 URL(s)
- Computer History Museum, Mountain View, CA — 1 URL(s)
- Microsoft via Internet Archive — 1 URL(s)

Key references include none — no institutional records have been verified for top imagery references. Imagery coverage is sparse — only 4 institutional records verified.

**Named typefaces.** The typography of this style is attested as:
- Microsoft Excel 97 wordmark ( — attestation: conventional) — rendered here as bespoke imagery — no web-font substitute
- Tahoma (designed by Matthew Carter 1994 — attestation: attested) — rendered here in Public Sans as the closest open substitute

**Honest gaps.** The most significant gap is colour: no verified hex or Pantone values. Resolution: locate a Microsoft brand guide from the Office 97 era or sample a physical box using a spectrophotometer. Additionally, all four top imagery references remain unconfirmed, leaving the visual record incomplete. Official Office 97 press kits or retail packaging would greatly close these gaps.
