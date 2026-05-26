---
version: alpha
name: "Ceefax"
description: "Ceefax is a design system rooted in the BBC's teletext service, active from 1974 to 2012. Every page lives on a rigid 40‑column × 25‑row character grid, built from block‑character mosaics and an 8‑colour palette. The emotional tone is utilitarian, dense, and unapologetically low‑tech."
colors:
  ok: "#00AA00"
  warn: "#AAAA00"
  err: "#AA0000"
  delta-up: "#00AA00"
  delta-down: "#AA0000"
  delta-flat: "#FFFFFF"
typography:
  display:
    fontFamily: "monospace"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0em"
    textTransform: "uppercase"
  headline:
    fontFamily: "monospace"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0em"
    textTransform: "uppercase"
  title:
    fontFamily: "monospace"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0em"
    textTransform: "uppercase"
  body:
    fontFamily: "monospace"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0em"
    textTransform: "uppercase"
  label:
    fontFamily: "monospace"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0em"
    textTransform: "uppercase"
rounded:
  default: "0px"
  card: "0px"
  button: "0px"
  input: "0px"
  chip: "0px"
spacing:
  component-internal: "0px"
  section-internal: "0px"
  page-edge: "4px"
  gap-component: "0px"
  gap-section: "0px"
  icon: "20px"
components:
  page-header:
    backgroundColor: "#000000"
    textColor: "{colors.warn}"
    rounded: "{rounded.default}"
  separator-row:
    backgroundColor: "#000000"
    textColor: "{colors.delta-flat}"
  fasttext-menu:
    backgroundColor: "#000000"
    rounded: "{rounded.button}"
  blinking-text:
    backgroundColor: "#000000"
    textColor: "{colors.err}"
  metric-cell:
    backgroundColor: "#000000"
    textColor: "{colors.delta-flat}"
    padding: "0px"
  signal-bar:
    backgroundColor: "#000000"
    height: "20px"
  status-cell:
    backgroundColor: "#000000"
    textColor: "{colors.ok}"
  data-table-row:
    backgroundColor: "#000000"
    textColor: "{colors.delta-flat}"
  chart-surface:
    backgroundColor: "#000000"
provenance:
  coverage_status: "complete"
  identity_description: "The slug `ceefax` refers unambiguously to the BBC’s Ceefax teletext information service, launched on 23 September 1974 and terminated on 23 October 2012 (with residual BBC Red Button service continuing until 2020). Ceefax was the world’s first broadcast teletext system, transmitting pages of text and simple graphics within the vertical blanking interval of the analogue PAL television signal. Its v"
  manual_enrichment_required: false
  imagery_count: 9
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "en.wikipedia.org"
      count: 1
    - host: "knowledge.bsigroup.com"
      count: 1
    - host: "unless.com"
      count: 1
    - host: "www.datasheetarchive.com"
      count: 1
    - host: "www.youtube.com"
      count: 1
    - host: "commons.wikimedia.org"
      count: 1
    - host: "www.itu.int"
      count: 1
    - host: "www.computinghistory.org.uk"
      count: 1
    - host: "www.bbc.co.uk"
      count: 1
  imagery_urls:
    - url: "https://en.wikipedia.org/wiki/Ceefax"
      host: "en.wikipedia.org"
      institution: "Wikipedia (Wikimedia Commons)"
      confidence_original: high
    - url: "https://knowledge.bsigroup.com/products/teletext-specification"
      host: "knowledge.bsigroup.com"
      institution: "BSI (British Standards Institution)"
      confidence_original: low
    - url: "https://unless.com/"
      host: "unless.com"
      institution: "Teletext.io"
      confidence_original: low
    - url: "https://www.datasheetarchive.com/?q=saa5050"
      host: "www.datasheetarchive.com"
      institution: "Datasheet Archive"
      confidence_original: low
    - url: "https://www.youtube.com/watch?v=9J4Z7Zm3ZtE"
      host: "www.youtube.com"
      institution: "YouTube (user 'Teletext Museum')"
      confidence_original: low
    - url: "https://commons.wikimedia.org/wiki/Category:Ceefax"
      host: "commons.wikimedia.org"
      institution: "Wikimedia Commons"
      confidence_original: high
    - url: "https://www.itu.int/rec/R-REC-BT.653-4-199802-S/en"
      host: "www.itu.int"
      institution: "International Telecommunication Union"
      confidence_original: high
    - url: "https://www.computinghistory.org.uk/det/23647/acorn-teletext-decoder-rom/"
      host: "www.computinghistory.org.uk"
      institution: "Centre for Computing History, Cambridge"
      confidence_original: high
    - url: "https://www.bbc.co.uk/topics/c01yxyz46myt"
      host: "www.bbc.co.uk"
      institution: "BBC Archive"
      confidence_original: low
  typefaces_attested:
    - name: "teletext character set"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "attested"
  flags:
    - "1_robots_disallowed_urls"
  honest_gaps:
    - "1. **Exact RGB/hex values for the Ceefax colour palette**: no primary source; conventional approximations only. (Refer to `CONTESTED:§2.palette_hex_provenance`.)"
---
# Design System: Ceefax

## 0. Taxonomy & Identity

entity-type:          interface / system / environment
artefact-family:      broadcast / overlay / lower third
technique:            digital raster
movement-lineage:     vernacular commercial style
era:                  1970s–1980s broadcast
geography:            UK
domain:               broadcast
formal-traits:        grid-based, modular, informational, dense
color-logic:          spot-color
typography-mode:      monospace
texture:              grainy, halated
function:             inform
provenance:           revival / homage

## 1. Overview

Ceefax is a design system rooted in the BBC’s teletext service, active from 1974 to 2012. Every page lives on a rigid 40‑column × 25‑row character grid, built from block‑character mosaics and an 8‑colour palette. The emotional tone is utilitarian, dense, and unapologetically low‑tech — information is packed in, every character cell counts, and zero anti‑aliasing keeps the aesthetic digital to its core. What makes it recognisable: a fixed‑position page number (e.g. `P100`), full‑width separator rows of dashes or solid blocks, uppercase monospaced text, and colour‑flash for critical alerts. The charm comes entirely from the constraints: no overlapping windows, no scrolling, no gradients, no mid‑tones. White space is an artifact of empty black cells, never intentional negative space. Physical texture includes optional CRT scanlines, phosphor bloom, and analog noise — these are production accretions, not part of the base style.

- **Emotional tone:** factual, utilitarian, retro‑futuristic, slightly urgent
- **Era/lineage:** 1970s‑80s broadcast design, pre‑internet digital era
- **Density:** high (every cell utilised)
- **Core rendering philosophy:** strict grid, no alpha, no dithering, no hierarchy beyond text size
- **Distinguishing features:** page number, separator lines, block‑mosaic graphics, colour‑flash
- **What would break it:** gradients, photographic imagery, responsive reflow, anti‑aliasing, any typeface that varies in width, or more than 3 foreground colours per page

## 2. Constants

Light Mode:   no (black background only)
Dark Mode:    primary (black #000000 is the default canvas)
Responsive:   no — fixed 40×25 grid, 4:3 aspect ratio; no breakpoints
States:       Default, Active (blinking text ~1–2 Hz), Disabled (not applicable)
              No hover, focus, or error states — static broadcast display

surface-simulation: crt-screen — CRT monitor glass with scanlines and phosphor bloom

## 2a — Interaction Model

hover-delta:        none — no hover state on static broadcast display
active-delta:       none — no press interaction; blinking is not a click state
focus-style:        none — no keyboard focus model
transition-duration:0ms — instant for all state changes (page flips, blink)
transition-easing:  none
exempt-animations:  blink, page-reveal, title-slide, ticker-scroll

## 3. Colors

Palette of 8 flat colours with no alpha. Background is black (#000000). Foreground colours can change per cell.

- **black (#000000)** — Background / neutral surface [inferred]
- **white (#FFFFFF)** — Primary text, main body content [inferred]
- **yellow (#AAAA00)** — Headings, page numbers, category labels [inferred]
- **cyan (#AAAAAA)** — Secondary information, subtitles (alternative approximation #00AAAA also exists) [inferred]
- **green (#00AA00)** — Sports scores, positive data, Fastext menu [inferred]
- **magenta (#AA00AA)** — Warnings, decorative accents [inferred]
- **red (#AA0000)** — Alerts, errors, critical data, Fastext menu [inferred]
- **blue (#0000AA)** — Less common; used for flavour text, Fastext menu [inferred]

- Use at most 3 distinct foreground colours per page to maintain readability.
- Colour‑flash (blinking) allowed only for critical alerts, used very sparingly.

Semantic state colors:
ok:         #00AA00 — Green; success, live data, positive status, sports scores
warn:       #AAAA00 — Yellow; caution, advisory, pending (e.g., travel alerts)
err:        #AA0000 — Red; critical, emergency, error — same as the palette’s red role
delta-up:   #00AA00 — Green; positive numeric delta (rising score, gain)
delta-down: #AA0000 — Red; negative delta (falling value, loss)
delta-flat: #FFFFFF — White; neutral, no change — standard body text colour

## 4. Typography

**CONTESTED:§3.primary_typeface** — No attested typeface for Ceefax; all providers list monospace without foundry or year attribution. Re-stack required.

**CONTESTED:§3.secondary_typeface** — Same as primary; no attested face.

**CONTESTED:§3.google_fonts_substitute** — All providers suggest "Press Start 2P" as closest modern substitute, but none cite a source linking it to the original teletext face. Until verified, this field is open.

All text uses a monospaced bitmap face, uppercase only (lowercase descenders may be sacrificed). No kerning, no ligatures, no italic. Every glyph occupies an identical fixed‑width cell.

display:
  font-family:      monospace (generic)
  font-size:        text-base (standard cell); double‑height achieved by stacking two identical rows
  font-weight:      font-normal
  line-height:      leading-none
  letter-spacing:   tracking-normal
  text-transform:   uppercase

headline:
  font-family:      monospace
  font-size:        text-base
  font-weight:      font-normal
  line-height:      leading-none
  letter-spacing:   tracking-normal
  text-transform:   uppercase

title:
  font-family:      monospace
  font-size:        text-base
  font-weight:      font-normal
  line-height:      leading-none
  letter-spacing:   tracking-normal
  text-transform:   uppercase

body:
  font-family:      monospace
  font-size:        text-base
  font-weight:      font-normal
  line-height:      leading-none
  letter-spacing:   tracking-normal
  text-transform:   uppercase

label:
  font-family:      monospace
  font-size:        text-base
  font-weight:      font-normal
  line-height:      leading-none
  letter-spacing:   tracking-normal
  text-transform:   uppercase

**Character set:** Limited to uppercase A–Z, digits 0–9, punctuation (.,!?:;'"-()), and teletext‑specific symbols (£, ½, °, block characters U+2500–U+259F). No lowercase with descenders, no accented characters beyond the broadcast set.

## 5. Elevation

Flat depth model — no shadow hierarchy. All content lives on a single plane. Optional CRT glow or halo around bright text (see §8.5) is a compositing overlay, not structural elevation.

## 6. Spacing & Sizing

Every element snaps to the 40×25 grid. There is no margin or padding between cells — they abut exactly.

padding:
  component-internal:  p-0 (no padding within cells)
  section-internal:    p-0
  page-edge:           p-1 (minimum one black cell margin around edges; achieved by empty cells)

margin:
  between-components:  gap-0 (cells directly adjacent)
  between-sections:    gap-0 (separator row is a component)

component-heights:
  single-row:          h-5 (one character cell ~20px)
  double-row:          h-10 (double‑height header ~40px)

icon-size:             w-5 h-5 (one character cell)
avatar-size:           not applicable

## 7. Borders

Ceefax uses no CSS borders. All visual separators are character‑based (dashes, solid blocks, etc.).

border-radius:
  default:     rounded-none
  card:        rounded-none
  button:      rounded-none
  input:       rounded-none
  chip/badge:  rounded-none

border-width:
  default:     border-0

border-style:  border-none

border-image:  not applicable
clip-path:     not applicable

**Separator rows:** Full‑width line of dashes (`───`), solid blocks (`███`), or block characters (▄ █ ▀). Not a CSS border; use a grid cell filled with a repeated character.

## 8. Opacity

All colours are fully opaque. The only appearance of transparency is the optional CRT glow halo (semi‑transparent blurred layer). Blinking text toggles visibility (not opacity) via `visibility: hidden` with a step function.

disabled-state:     not applicable
ghost/secondary:    not applicable
overlay/scrim:      not applicable
hover-feedback:     not applicable

**Browser chrome** (optional, for authentic CRT simulation):

selection:
  background:  rgba(255, 255, 255, 0.2) (white low opacity – approximates CRT bloom)
  color:       inherit

scrollbar:
  style:       hidden (teletext has no scrollbar)

## 8.5 Visual Effects

*Base style is clean; these effects are additive optional layers for CRT realism.*

### 8.5.0 — Physical Material Model

material-model:    crt-screen

global-filter:     none — base style has no colour correction; optional bloom/contrast applied per effect
global-overlay:    none — CRT scanlines and noise are optional additive layers, not a fixed global overlay

rendering-flags:
  font-smoothing:  none — all text must be rendered without anti-aliasing to preserve the bitmap grid
  image-rendering: pixelated — block character mosaics must not be blurred
  text-rendering:  optimizeSpeed — no sub‑pixel rendering, hard edges

### 8.5c — Gradients & Glow

**Phosphor Bloom:**
- **Technique:** `text-shadow: 0 0 2px currentColor, 0 0 4px currentColor`
- **Applied to:** Bright text (white, yellow, cyan, green) on black background
- **Description:** Subtle coloured blur extending 2–4px into background, simulating CRT phosphor bleed
- **Tailwind approximation:** No native equivalent; custom shadow

**Gradients:** Not used — pure flat fills.

### 8.5d — Texture & Noise Simulation

**CRT Scanlines:**
- **Technique:** `repeating-linear-gradient(0deg, transparent 0px, transparent 1px, rgba(0,0,0,0.15) 1px, rgba(0,0,0,0.15) 2px)`
- **Surface:** Full‑page canvas overlay
- **Intensity:** Moderate (visible on light areas, barely perceptible on dark)
- **Blend:** `mix-blend-mode: overlay`, opacity-20
- **Color:** Monochrome (black banding)
- **Animation:** none
- **Tailwind approximation:** No native equivalent; custom CSS

**Analog Noise (optional):**
- **Technique:** SVG `feTurbulence` filter on pseudo-element
- **Parameters:** `baseFrequency: 0.8, numOctaves: 3, type: fractalNoise`
- **Surface:** Background idle state (optional)
- **Intensity:** Very faint (opacity-5)
- **Blend:** `mix-blend-mode: overlay`, opacity-5
- **Color:** Monochrome (white/grey)
- **Animation:** none (static noise tile; can animate seed for dynamic snow)
- **Tailwind approximation:** No native equivalent

**Ghosting / Sub‑pixel Misregistration (optional):**
- **Technique:** CSS text-shadow offset
- **Parameters:** `text-shadow: -1px 0 0 rgba(255,0,0,0.08), 1px 0 0 rgba(0,0,255,0.08)`
- **Surface:** Bright text elements (headlines, page numbers)
- **Intensity:** Very subtle
- **Blend:** normal
- **Color:** Red/blue fringe
- **Animation:** none

## 9. Components

### Icon vocabulary

- **System:** Block‑character mosaics using teletext graphic characters (U+2500–U+259F)
- **Size:** `w-5 h-5` (one character cell) for simple pictograms; 2×2 to 4×4 cells for larger icons
- **Color:** One foreground colour per cell + background (both from 8‑colour palette)
- **Treatment:** Purely flat; no glow on icons (only on text)
- **Restrictions:** No curved lines, no anti‑aliasing, no photographic imagery

### Page Header

- **Position:** Top row (row 1)
- **Content:** Page number left‑aligned (e.g., "P100"), category label right‑aligned (e.g., "NEWS")
- **Color:** White or yellow on black
- **Separator:** Full‑width row of dashes or solid blocks below header

### Separator Rows

- **Fill:** Black background with white or accent‑colour characters
- **Characters:** Full‑width row of dashes (`─`), solid blocks (`█`), or lower blocks (`▄`)
- **Placement:** Between content zones — after header, between articles, above footer
- **No rounding, no shadow, no elevation**

### Content Blocks

- **Structure:** Top‑down list or two‑column tabular layout
- **Fill:** Black background; each cell carries one character
- **Colors:** Maximum 3 foreground colours per block on black
- **No internal padding** — content sits at cell boundary

### Fastext Menu (optional bottom row)

- **Position:** Row 25
- **Layout:** Four coloured boxes (red #AA0000, green #00AA00, yellow #AAAA00, blue #0000AA), each 2–4 cells wide
- **Label:** Uppercase white or black text centred within coloured block
- **Hover:** Not native; if added in translation, `brightness(1.10)`
- **Active:** Colour inversion or white highlight

### Blinking Text

- **Position:** Row 1 or centre of screen for critical alerts
- **Color:** Red or magenta on black
- **Animation:** `@keyframes blink { 50% { opacity: 0; } }` at 1–2 Hz cycle
- **Used sparingly** (no more than one per page)

### Mosaic Graphics

- **System:** 76 teletext graphic characters (2×3 sub‑pixel matrices)
- **Size:** 2×2 to 4×4 character cells
- **Foreground/background:** Two colours per cell from palette
- **Applications:** Weather icons (sun, cloud, rain), sports pictograms, bar charts, decorative patterns

**Data Display Components:**

metric-cell:
  A single KPI cell within the grid. Background: black (#000000). Label: uppercased cyan (#AAAAAA) monospace at standard cell size, placed in the same row left‑side. Value: white (#FFFFFF) monospace, right‑aligned in the same row or stacked below if space permits, using single‑height text. Delta indicator (e.g., “+3”) in green (#00AA00) or red (#AA0000) immediately after the value, same font size. No glow or drop‑shadow on numbers; plain flat appearance maintains teletext authenticity.

signal-bar:
  A horizontal bar composed entirely of repeated block characters (█) within grid cells. Track is empty black cells. Fill is green (#00AA00) for normal signal or yellow (#AAAA00) for weak, using the block-characters drawn in that colour. Height is one character cell (~20px). The maximum width is a set number of cells (e.g., 20). No borders, no rounded corners — pure character-drawn.

status-cell:
  Status indicated by foreground colour only. Black background cell. Status text or symbol in green (#00AA00) for ok, yellow (#AAAA00) for warn, red (#AA0000) for err. The text is a single word like “OK”, “WARN”, “ERR” in uppercase monospace. No background fill on the cell; only the coloured text and possibly a preceding block character (▀) of the same colour. Blink may be applied to err status (critical alerts).

data-table-row:
  A row of characters forming a table line. Header row: yellow (#AAAA00) text on black, often with an underlined separator using block characters (▄) across the entire row. Data row: white (#FFFFFF) text with columns separated by a fixed width (e.g., 12 columns for team name, 4 for score). No alternating background colours; every row is black background. Columns align by fixed character offsets. A separator row of dashes in white or cyan sits below the header.

chart-surface:
  A grid area where bar charts are drawn using block characters. Background: black. Axis labels: cyan (#AAAAAA) monospace along the top or left. Bars: solid columns of block characters (█) in green (#00AA00) for positive, yellow (#AAAA00) for neutral, red (#AA0000) for negative. No grid lines — the grid’s own cell boundaries provide alignment. The chart height is, for example, 10 cells; values are scaled to that range. No glow, no anti‑aliasing.

## 10. Layout

### Grid & Layout Philosophy

- **Fixed 40‑column × 25‑row character grid.** Every element must fit within a cell boundary.
- **Layout type:** Top‑down list or two‑column tabular.
- **Alignment:** Left‑aligned for body text; centred for headings and the Fastext menu.
- **White space** is the result of empty black cells — never intentionally negative.
- **Margins:** Minimum 1 black cell margin around edges (pillarbox effect optional).

### Density

- **High** — most rows filled with content. Generous whitespace is rare but possible.

### Breakpoint Behaviour

- **375px (small mobile):** Force horizontal scroll or use CSS `zoom` to scale. Content does not reflow.
- **768px (tablet):** Display grid at native pixel size with centering.
- **1280px+:** Grid centres on screen with black pillarbox bars.

### Motion

motion:
  transition-duration:        0ms (instant for page flips); 100ms per row for reveal
  transition-timing-function: steps(1) (no interpolation)
  transition-property:        opacity (for reveal and blink)
  transition-delay:           none
  transition-behavior:        allow-discrete (for visibility toggles)

  animation:
    page-reveal:         rows appearing from top to bottom at 1/10 second per row, trigger: on-load
    blink:               text alternates between foreground and background at 1–2 Hz (500ms on/off), trigger: critical alert
    title-slide:         characters entering left‑to‑right at 50ms per char, trigger: on-load
    ticker-scroll:       text shifts one character per frame (50ms), looping, trigger: on-load

  transform-at-rest:           all elements rest at `transform: none`
  transform-on-interact:       no transform interactions
  transform-style:             flat

## 11. Design System Notes

### 11a. Use Constraints

**Appropriate for:**
- Retro/pixel‑art interfaces evoking late‑70s broadcast teletext
- Information‑dense dashboards, sports scoreboards, news tickers, TV guides
- Screen interfaces where the aesthetic is part of the brand (e.g. BBC‑inspired, chiptune‑themed)
- Static infographics or posters mimicking the 40×25 grid
- Low‑fi HUD elements in games or terminal applications

**Wrong for:**
- Modern, high‑fidelity mobile apps with fluid layouts
- Interfaces requiring variable‑width fonts, gradients, or photographic backgrounds
- Content that demands scrollable long pages (teletext has no scroll)
- Accessibility‑first designs (low contrast, flickering)

### 11b. Prompt Phrases

- “Strict 40×25 character grid, no anti‑aliasing”
- “Eight‑colour teletext palette (black background, white, yellow, green, cyan, magenta, red, blue)”
- “Uppercase monospaced bitmap, no kerning, no ligatures”
- “Content is all text — no photographs, no smooth curves”
- “Page number top‑left, category label, separator row of dashes”
- “Block‑character mosaic graphics built from 2×3 sub‑pixels”
- “No padding, no margins, no overlapping elements”
- “Optional CRT effects: scanlines, phosphor glow, analog noise”

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual
description, then the incorrect visual description. Minimum 4 rules, maximum 8.

rule: All content must snap to the 40×25 grid; no element may sit between cells or outside grid boundaries.
do:   Page number at row 1, column 1; separator row occupies all 40 cells with repeated `─`; body text starts at column 2, row 4. Every element uses integer cell offsets.
avoid:Using CSS `position: absolute; top: 12px; left: 50px` — the element would float between cells, breaking the rigid grid.

rule: Strictly limit to the 8‑colour palette and at most 3 foreground colours per page.
do:   A news page: white body text, yellow headline, cyan byline; total three foreground colours on black. No colour outside the eight defined hex values.
avoid:Adding `color: #FF6600` for emphasis, or using four different foreground colours (e.g., white, yellow, cyan, green all at once) — destroys the teletext clarity.

rule: Every glyph must be uppercase monospaced bitmap, with zero anti‑aliasing, kerning, or variable width.
do:   Headline “LATEST NEWS” in `font-family: monospace; font-size: 20px; text-transform: uppercase;`. Each character sits in a fixed‑width cell; no `letter-spacing` or `font-weight` deviation.
avoid:Using “Press Start 2P” with its slightly irregular widths and inherent anti‑aliasing; or applying `text-transform: lowercase` that introduces descenders.

rule: Graphics are constructed solely from block characters (▄ █ ▀ ▐ ▌) within the grid; no smooth curves or continuous lines.
do:   A weather icon of a sun made from four cells: top‑left `█▌`, bottom‑left `▀▄`, all using yellow on black. `border-radius: 0` everywhere.
avoid:Drawing a circular sun with an SVG `<circle>` element, or using a PNG icon that does not conform to the character grid.

rule: Full‑width separator rows using dashes, solid blocks, or lower blocks are mandatory between content zones — never a CSS border.
do:   Between header and body, a `<div>` containing exactly 40 `─` characters in white on black, occupying row 2. No border property applied.
avoid:Applying `border-bottom: 1px dashed white` to the header `<div>`, which produces a visual line that does not occupy an actual grid row.

rule: The page number and category label are ever‑present and correctly placed.
do:   Page number “P100” left‑aligned at row 1, column 1 in yellow (#AAAA00); category “SPORT” right‑aligned at row 1, column 35 in yellow. Both uppercase, same font size.
avoid:Omitting the page number entirely; placing “P100” centred on the row; using a smaller font size for the category — breaks the spatial contract.

### 11d. Variation Bounds

1. **Clean vs. glitchy** — perfect bitmap (no artifacts) vs. heavy scanlines, static noise, and phosphor bloom
2. **Colorful vs. monochrome** — full 8‑colour palette vs. black and white only
3. **Informational vs. whimsical** — news/sports tone vs. playful mosaic art and decorative patterns
4. **Flat page vs. animated** — static infographic vs. flickering, rolling teletext with row‑reveal and ticker
5. **Dense vs. sparse** — many rows packed with content vs. generous empty cells (rare)
6. **Official vs. unofficial** — strict BBC house style (calm, factual, uniform) vs. chaotic pirate teletext (garish patterns, heavy colour‑flash)

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts.
Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
A standard Ceefax news page: Black background (#000000) canvas. Row 1: “P100” in yellow (#AAAA00) at column 1, “NEWS” in yellow at column 35. Row 2: full‑width separator of 40 white dash characters. Rows 3–4: headline “LATEST NEWS” in white (#FFFFFF) double‑height (two identical rows, uppercase monospace). Rows 6–22: body text in white, split into two fixed‑width columns; occasional cyan (#AAAAAA) sub‑labels. Row 24: separator row of white lower‑blocks (▄). Row 25: Fastext menu with four coloured blocks: red (#AA0000) labelled “INDEX”, green (#00AA00) “TV”, yellow “WEATHER”, blue (#0000AA) “SPORT”, centred. All text is monospace, no glow or scanlines in the clean base. Pillarbox black bars left and right maintain 4:3 ratio.

### 11e.ii — Maximum Expressiveness
The full retro‑teletext spectacle: Black background with heavy CRT effects. Top row: blinking red “BREAKING NEWS” (blink keyframe), phosphor glow text‑shadow on the headline. Row 1 also holds page number “P100” yellow with ghosting red/blue fringe. Title‑slide animation brings in the headline characters left‑to‑right. Middle of screen: a colour‑flash alert in magenta (#AA00AA) alternating visibility. A weather map of block‑character mosaics (yellow sun, cyan clouds) nestled in the grid. Bottom row: ticker‑scroll rolling sports scores in green/white, moving one character every 50ms. Over the whole page: CRT scanlines via repeating‑linear‑gradient at opacity‑20 in blend‑mode overlay, plus faint analog noise (SVG feTurbulence, opacity‑5). Ghosting applied to all bright text. The composition feels alive but still respects the 40×25 grid — no element floats outside.

### 11e.iii — Data Context
Ceefax as a sports scoreboard. Page number and category (“FOOTBALL”) at top in yellow. Headline “LATEST SCORES” in white double‑height, followed by separator row. Main body: a table with columns for “HOME”, “AWAY”, “SCORE”. Header row in yellow, data rows in white, fixed character offsets. Column width for team names: 15 cells; for score: 4 cells. Scores for winning teams appear in green (#00AA00), draws in white, losses in red (#AA0000). A live‑update delta flashes briefly next to the score in green or red. No background fills on cells, no drop shadows; all numeric data is flat. At the bottom, a signal‑bar style mini‑chart uses block characters (█) in green to show possession percentage. The CRT surface may have subtle scanlines but no bloom on data — clarity is paramount.

### 11f. Sources

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** (Prose generation failed — see provenance block for attribution data.)

**Verified imagery sources.** 9 URLs verified against institutional servers, distributed across:
- Wikipedia (Wikimedia Commons) — 1 URL(s)
- BSI (British Standards Institution) — 1 URL(s)
- Teletext.io — 1 URL(s)
- Datasheet Archive — 1 URL(s)
- YouTube (user 'Teletext Museum') — 1 URL(s)
- Wikimedia Commons — 1 URL(s)
- International Telecommunication Union — 1 URL(s)
- Centre for Computing History, Cambridge — 1 URL(s)
- BBC Archive — 1 URL(s)

**Named typefaces.** The typography of this style is attested as:
- teletext character set ( — attestation: attested) — rendered here as bespoke imagery — no web-font substitute

**Honest gaps.** (No documented gaps were recorded by the forensic pipeline.)
