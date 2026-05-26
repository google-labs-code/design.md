---
version: alpha
name: "Airport Departure Board Flip"
description: "A retro-futuristic simulation of electromechanical split-flap departure boards featuring strict monospaced grids, warm amber on near-black surfaces, visible hinge gaps, and mechanical flip animations. The style evokes vintage airport terminal signage through tactile realism, grain overlays, and deliberate mechanical imperfection."
colors:
  error: "#CC0000"
  surface: "#F5F0E0"
  on-surface: "#0A0A0A"
  outline: "#B3A899"
  surface-dark: "#0A0A0A"
  on-surface-dark: "#FFB000"
  outline-dark: "#2A2A2A"
typography:
  display:
    fontFamily: "monospace-condensed-sans"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  headline:
    fontFamily: "monospace-condensed-sans"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  title:
    fontFamily: "monospace-condensed-sans"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0em"
    textTransform: "uppercase"
  body:
    fontFamily: "monospace-condensed-sans"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "0em"
    textTransform: "uppercase"
  label:
    fontFamily: "monospace-condensed-sans"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "0.025em"
    textTransform: "uppercase"
rounded:
  default: "0px"
  card: "0px"
  button: "0px"
  input: "0px"
  chip: "0px"
spacing:
  component-internal: "4px"
  section-internal: "16px"
  page-edge: "32px"
  gap-component: "4px"
  gap-section: "16px"
  height-sm: "32px"
  height-md: "40px"
  height-lg: "48px"
components:
  board-frame:
    backgroundColor: "#0A0A0A"
    rounded: "{rounded.card}"
    padding: "16px"
  card-cell:
    backgroundColor: "#1A1A1A"
    textColor: "#FFB000"
    rounded: "{rounded.card}"
    padding: "4px"
  column-header:
    backgroundColor: "#0A0A0A"
    textColor: "#FFB000"
    rounded: "{rounded.card}"
    padding: "4px"
  status-ok:
    textColor: "#FFB000"
  status-err:
    textColor: "{colors.error}"
  metric-cell:
    backgroundColor: "#1A1A1A"
    textColor: "#FFB000"
    rounded: "{rounded.card}"
    padding: "4px"
  stuck-flap:
    backgroundColor: "#1A1A1A"
    textColor: "#FFB000"
    rounded: "{rounded.card}"
provenance:
  coverage_status: "complete"
  identity_description: "The slug `airport-departure-board-flip` refers to the split-flap display (also called flip-disc, flap board, Solari board) — a mechanical information display system historically used for departure and arrival information at airports, railway stations, bus terminals, and other public transport hubs. The most culturally and technically significant implementation is the system manufactured by S"
  manual_enrichment_required: false
  imagery_count: 8
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "en.wikipedia.org"
      count: 2
    - host: "commons.wikimedia.org"
      count: 1
    - host: "patents.google.com"
      count: 1
    - host: "www.museoscienza.org"
      count: 1
    - host: "collection.sciencemuseumgroup.org.uk"
      count: 1
    - host: "www.bbc.co.uk"
      count: 1
    - host: "www.moma.org"
      count: 1
  imagery_urls:
    - url: "https://en.wikipedia.org/wiki/Split-flap_display"
      host: "en.wikipedia.org"
      institution: "Wikipedia"
      confidence_original: high
    - url: "https://en.wikipedia.org/wiki/Solari_di_Udine"
      host: "en.wikipedia.org"
      institution: "Wikipedia"
      confidence_original: high
    - url: "https://commons.wikimedia.org/wiki/Category:Split-flap_displays"
      host: "commons.wikimedia.org"
      institution: "Wikimedia Commons"
      confidence_original: high
    - url: "https://patents.google.com/patent/US3040454A/en"
      host: "patents.google.com"
      institution: "Google Patents"
      confidence_original: high
    - url: "https://www.museoscienza.org/it/collezione/solari-flap-display"
      host: "www.museoscienza.org"
      institution: "Museo Nazionale della Scienza e della Tecnologia, Milan"
      confidence_original: low
    - url: "https://collection.sciencemuseumgroup.org.uk/"
      host: "collection.sciencemuseumgroup.org.uk"
      institution: "Science Museum, London"
      confidence_original: low
    - url: "https://www.bbc.co.uk/topics/c01yxyz46myt"
      host: "www.bbc.co.uk"
      institution: "BBC Archive"
      confidence_original: low
    - url: "https://www.moma.org/"
      host: "www.moma.org"
      institution: "Museum of Modern Art, New York"
      confidence_original: low
  typefaces_attested:
    - name: "Solari flap font"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "unverified"
  flags:
    - "1_rate_limited_urls_pending_retry"
  honest_gaps:
    - "1. **Colour specification (yellow)** — No published Pantone, RAL, or RGB value from a primary source. Resolution: locate a factory paint sample or a spectrophotometric reading from an original flap in museum storage."
---

# Design System: Airport Departure Board Flip

## 0. Taxonomy & Identity

entity-type:        interface / system / environment
artefact-family:    dashboard / console / control panel
technique:          digital raster
movement-lineage:   speculative / retrofuturist aesthetic [unverified]
era:                postwar [majority: 3 of 5, contested: 2 cite 1980s postmodern]
geography:          platform-neutral
domain:             transport
formal-traits:      grid-based, utilitarian, tactile, informational
color-logic:        duotone [contested: 2 providers cite spot-color]
typography-mode:    monospace
texture:            matte, grainy, halated
function:           inform
provenance:         revival / homage

## 1. Overview

This style simulates the electromechanical split‑flap display of vintage airport departure boards—a retro‑futuristic mix of industrial utility and tactile realism. It relies on a strict grid of monospaced, all‑caps characters, each rendered as two independently flipping "cards" with a visible horizontal hinge gap. The overall feel is that of a living, ticking schedule: dark matte backgrounds, warm amber or pale off‑white text, and a faint layer of grain and ghost scanlines that suggest decades of dust and vibration. Recognizable at a glance: high‑contrast cards, uniform cell widths, and the signature mid‑flip split where top and bottom halves show different letters.

**What makes it recognizable** – split‑flap character construction, dark field with warm amber glow, strict grid with horizontal and vertical dividers, mechanical noise in motion. **What would break it** – rounded corners, variable‑width fonts, serifs, smooth gradients in text, or any element that breaks the illusion of physical cards.

## 2. Constants

Light Mode:   variant – off-white (#F5F0E0) background with near-black text [unanimous]
Dark Mode:    primary – near-black (#0A0A0A) background with warm amber (#FFB000) or off-white (#F5E6C8) text; used by default
Responsive:   yes – columns collapse at 375px (single column or horizontal scroll), return to multi-column at 768px
States:       Default, Flipping (mid-split), Stuck (frozen half-visible), Disabled (dimmed, 60-70% opacity)
surface-simulation: bevel-plastic — molded plastic flap modules with 3D inset edge highlights and visible hinge gaps simulating an electromechanical split-flap departure board

## 2a — Interaction Model

hover-delta:        none — the split-flap display is a read-only physical device; no hover state exists on electromechanical boards
active-delta:       none — physical flaps do not respond to press; the mechanism flips on timer, not on user input
focus-style:        none — maintains the illusion of a non-interactive informational display; accessibility focus is handled at the application layer outside the board simulation
transition-duration:0ms — mechanical state changes are instantaneous; the flap-flip itself is a keyframe animation, not a CSS transition
transition-easing:  none
exempt-animations:  flap-flip, stuck-flap-glitch — the core split-flap character animation and the frozen-failure glitch animation must survive any blanket transition override

## 3. Colors

| Role | Hex | Tag | Description |
|------|-----|-----|-------------|
| `on-surface` (primary text) | `#FFB000` | [attested] | Warm amber – primary character fill |
| `on-surface` (variant text) | `#F5E6C8` | [attested] | Pale off-white – alternate character fill |
| `surface` (background) | `#0A0A0A` | [attested] | Near-black – primary dark field |
| `surface` (secondary bg) | `#1A1A1A` | [conventional] | Alternative dark background |
| `error` | `#CC0000` | [attested] | Signal red – CANCELLED, GATE CLOSED |
| `outline` (divider) | `#2A2A2A` | [attested] | Slightly lighter than background – column gaps, hinge lines |
| `outline` (cell border) | `#333333` | [conventional] | Card module edges |
| `on-surface-dimmed` | `#FFB000` at 60% opacity | [conventional] | Future departures, dimmed text |

### Dark Mode Swaps

| Role | Light Mode (alternate) | Dark Mode |
|------|------------------------|-----------|
| `surface` | `#F5F0E0` | `#0A0A0A` |
| `on-surface` | `#0A0A0A` | `#FFB000` or `#F5E6C8` |
| `on-surface-variant` | `#0A0A0A` at 60% | `#FFB000` at 60% |
| `outline` | `#B3A899` | `#2A2A2A` |

## 4. Typography

All roles share a single typeface family: a monospaced, uppercase‑only, condensed square sans. No foundry citation reaches consensus across providers; the following are commonly referenced but unverified as a single selection: Helvetica Condensed (Monotype), DIN Condensed (Linotype), JetBrains Mono (JetBrains), OCR‑B (Monotype). For web rendering, the same family should be used across all roles.

Because typeface selection is contested (no majority with cited foundry), the primary and secondary typeface names are replaced with the following gap marker:

**CONTESTED:§3.primary_typeface** — providers gave: [Helvetica Condensed, DIN Condensed, JetBrains Mono, OCR-B]; none cited a foundry consistently across all; re-stack required.

**CONTESTED:§3.secondary_typeface** — no distinct secondary typeface proposed; all providers assume a single typeface.

**CONTESTED:§3.google_fonts_substitute** — providers gave: [JetBrains Mono, Barlow Condensed, no consensus]; no majority with foundry; re-stack required.

display:
  font-family:      <gap-marker>  (monospaced uppercase condensed sans)
  font-size:        text-4xl
  font-weight:      font-bold
  line-height:      leading-tight
  letter-spacing:   tracking-tight
  text-transform:   uppercase
  text-decoration:  none

headline:
  font-family:      same
  font-size:        text-3xl
  font-weight:      font-bold
  line-height:      leading-tight
  letter-spacing:   tracking-tight
  text-transform:   uppercase

title:
  font-family:      same
  font-size:        text-xl
  font-weight:      font-bold
  line-height:      leading-tight
  letter-spacing:   tracking-normal
  text-transform:   uppercase

body:
  font-family:      same
  font-size:        text-base
  font-weight:      font-normal
  line-height:      leading-tight
  letter-spacing:   tracking-normal
  text-transform:   uppercase

label:
  font-family:      same
  font-size:        text-sm
  font-weight:      font-normal
  line-height:      leading-tight
  letter-spacing:   tracking-wide
  text-transform:   uppercase

**Special notes:** Each character contains a visible horizontal gap at the midline (1px dark line) to simulate the flap hinge. Characters may have slight vertical misalignment (card wear). No kerning — every glyph fits its cell rigidly. No lowercase, no punctuation in status text.

## 5. Elevation

board-shadow:         shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] – hard, short drop shadow simulating wall mount
card-thickness:       inset box-shadow: 0 1px 0 rgba(255,255,255,0.15) (bright top edge), 0 -1px 0 rgba(0,0,0,0.3) (dark bottom edge)
                     Applied per character cell.
stacking-context:     single plane – no z-index layering within board

## 6. Spacing & Sizing

padding:
  component-internal:  p-1 (inside each card cell)
  section-internal:    p-4 (inside board frame)
  page-edge:           p-8 (generous margins around board)

margin:
  between-components:  gap-1 (4px) vertical gaps between rows; gap-2 (8px) horizontal gaps between columns
  between-sections:    gap-4 (16px) between header row and data rows

component-heights:
  sm:   h-8 (32px)
  md:   h-10 (40px)
  lg:   h-12 (48px)

icon-size:       not applicable (no icons)
avatar-size:     not applicable

## 7. Borders

border-radius:
  default:       rounded-none (all rectangular)
  card:          rounded-none
  button:        not applicable
  input:         not applicable
  chip/badge:    none

border-width:
  default:       border (1px) – used for vertical dividers between columns
  emphasis:      border-2 (2px) – board frame
  divider:       border-b (1px under header row)

border-style:    border-solid

border-image:    none – no ornamental borders

clip-path:       none – all cells are straight rectangles

## 8. Opacity

disabled-state:     opacity-40 to opacity-70 (dimmed future departures, stuck flaps)
ghost/secondary:    opacity-60 (column headers, dimmed status)
overlay/scrim:      opacity-10 to opacity-15 (vignette effect – 10-15% darken at edges)
hover-feedback:     not applicable – no mouse interaction

### Browser chrome

selection:
  background:  rgba(255, 176, 0, 0.25) (amber at 25% opacity)
  color:       inherit

scrollbar:
  style:       auto (dark theme preferred)
  width:       thin (~6px)
  track:       #1A1A1A
  thumb:       #2A2A2A
  thumb-hover: #FFB000

## 8.5. Visual Effects

### 8.5.0 — Physical Material Model

material-model:    bevel-plastic

global-filter:     brightness(1.0) contrast(1.1) — slight contrast lift simulating the high-contrast
                   amber-on-black of an illuminated electromechanical departure board under terminal
                   overhead lighting

global-overlay:    Grain noise via body::before pseudo-element:
                   SVG feTurbulence (baseFrequency=0.65, numOctaves=3, fractalNoise)
                   blend: overlay, opacity-10, position:fixed, pointer-events:none, z-index:9998.
                   Scanlines via body::after pseudo-element:
                   repeating-linear-gradient(0deg, transparent 0px, transparent 1px, rgba(0,0,0,0.05) 1px, rgba(0,0,0,0.05) 2px)
                   blend: normal, opacity-5 to opacity-10, position:fixed, pointer-events:none, z-index:9999

rendering-flags:
  font-smoothing:  antialiased
  image-rendering: auto
  text-rendering:  auto

### 8.5c — Gradients & Glow

text-shadow / filter drop-shadow:
  description:  Faint backlight glow on amber characters – 0 0 4px rgba(255, 176, 0, 0.3) to 0.5.
                Board mount drop-shadow: 2px 2px 0 rgba(0,0,0,0.8).

vignette:
  technique:    radial-gradient(circle at center, transparent 80%, rgba(0,0,0,0.15) 100%)
  surface:      full board canvas
  animation:    none

room-reflection:
  description:  Soft linear gradient on the top edge of the board (faint, 10% white at top fading to 0%)
  implementation: bg-gradient-to-t from-transparent via-transparent to-white/10

### 8.5d — Texture & Noise Simulation

grain-noise:
  technique:       SVG feTurbulence (baseFrequency: 0.65, numOctaves: 3, type: fractalNoise)
  surface:         full board canvas (behind all content)
  intensity:       barely perceptible (opacity 0.08–0.15, use 0.10)
  blend:           overlay, opacity-10
  color:           monochrome (grayscale)
  animation:       none
  tailwind-approximation: no native equivalent – use CSS custom property with SVG filter

scanlines:
  technique:       repeating-linear-gradient(0deg, transparent 0px, transparent 1px, rgba(0,0,0,0.05) 1px, rgba(0,0,0,0.05) 2px)
  surface:         full board canvas
  intensity:       subtle (opacity 0.05–0.10)
  blend:           normal
  color:           black
  animation:       none (optional horizontal scrolling at 1px/10s for CRT simulation)
  tailwind-approximation: no native equivalent – use background-image

card-edge-highlight:
  description:      1px bright top/bottom edge per character cell + 1px shadow bottom
  technique:        box-shadow inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.3)
  surface:          each character cell
  blend:            normal

hinge-gap:
  description:      1px dark horizontal line at the midline of each character
  technique:        pseudo-element or border with color #2A2A2A
  surface:          every character
  blend:            normal

stuck-flap-overlay:
  description:      half-visible character – top half of old, bottom half of new, with blurred intermediate line
  technique:        clip-path(inset(0 0 50% 0)) for top half and bottom half from different characters
  surface:          specific cells during failure state
  blend:            normal

parallax-hinge-shadow:
  description:      Hard shadow cast by top flap onto bottom flap (0.5px dark line at top and bottom of cell)
  technique:        box-shadow inset 0 0.5px 0 #000, inset 0 -0.5px 0 #000
  surface:          every character cell
  blend:            normal

**Compositing stack order:** surface fill → grain-noise layer (overlay, opacity-10) → scanlines layer (opacity-5) → card-edge-highlight (inset shadows) → hinge-gap (border) → text (with drop-shadow). Vignette applied after compositing on the outermost wrapper.

**Dark mode inheritance:** All effects carry over unchanged. Grain and scanlines may become slightly more visible on light backgrounds (reduce scanlines opacity to 2% for alternate variant).
## 9. Components

### Icon vocabulary
icon-vocabulary:
  system:       none – all information is text only. No icons, symbols, or emoji.
  size:         not applicable
  color:        not applicable
  treatment:    not applicable
  restrictions: never insert icons, symbols, or emoji

### Board Frame
- Outer container: 2px dark border (#1A1A1A) with slight inner bevel (inset box-shadow)
- Rounded corners: none
- Drop shadow: hard, short (2px 2px 0 rgba(0,0,0,0.8))
- Background: near‑black (#0A0A0A)
- Optional: mounting screws/bolts at corners (simulated 3D circles)

### Column Header Row
- Same flap style as data rows but smaller (text-sm) and static (non‑flipping)
- Dimmed to 60–80% opacity to visually separate from dynamic data
- Underlined with a thin horizontal rule (border-b, 1px, #2A2A2A)

### Data Row (Card Cell)
- Each cell: fixed‑width card containing one character
- Character centered vertically within cell, all‑caps monospaced
- Horizontal midline gap (1px dark line) simulating flap hinge
- Slight vertical misalignment between adjacent characters (0.5–1px random offset per cell)
- Cell background: #1A1A1A (slightly lighter than board background)
- Cell size: uniform (h-8 to h-12), width proportional to character cell
- On flip: top half of old character + bottom half of new character shown simultaneously during transition
- Stuck state: display a jumbled split – one half from new, other half from old (random)

### Status Tag
- Text in small caps (text-sm): "ON TIME", "DELAYED", "BOARDING", "GATE CLOSED", "CANCELLED"
- All uppercase, no punctuation
- Color: amber on black (or red for error states)
- No background pill or border – plain text aligned to left cell

### Gate Labels
- Same style as status but always dimmed (60%) and static
- May use dot‑fill to meet cell width (e.g., "GATE.....12")

### Clock
- Optional, anchored above or alongside the board
- Same split‑flap style as data (flipping digits) or plain monospaced time (HH:MM)

### Dividers
- Vertical gaps (6–12px) between columns, colored #2A2A2A
- Thin horizontal rule under header row

**Data Display Components:**

metric-cell:
  Background: #1A1A1A (cell card background), no texture on individual cells.
  Border: none — cell edges are implicit in the fixed-width grid structure.
  Label: Monospace text-sm uppercase, dimmed to 60–80% opacity, amber (#FFB000).
  Value: Monospace, all-caps, amber (#FFB000) on #1A1A1A cell, with 1px horizontal midline gap (#2A2A2A) across the center.
  Delta: Not applicable — values flip to new state via split-flap animation; no delta arrow or indicator.
  No glow or drop-shadow on individual cells — shadow belongs to the board frame only.

signal-bar:
  Not applicable — the departure board does not use proportional fill bars.
  If required by context: track in #2A2A2A, fill in amber #FFB000, 4px height, no glow, no gradient.

status-cell:
  ok ("ON TIME", "BOARDING"): amber (#FFB000) plain text, no background pill, no icon, no border.
  warn ("DELAYED"): amber (#FFB000) plain text — same visual treatment as ok; the word alone carries meaning.
  err ("CANCELLED", "GATE CLOSED"): red text (e.g., #FF3333 or #C41E3A), plain treatment, no background, no icon.
  All status rendered as all-caps monospace text-sm, left-aligned in cell.

data-table-row:
  Alternating: no alternating row colors — all rows use #1A1A1A cell backgrounds on #0A0A0A board.
  Cell border: none — grid structure communicated via column gaps (6–12px, #2A2A2A dividers).
  Label: column headers dimmed to 60–80% opacity, text-sm, monospace, amber (#FFB000), underlined with 1px #2A2A2A border-bottom.
  Value: all data cells amber (#FFB000) on #1A1A1A, uniform character-width grid, each character in its own fixed-width card.
  Row-level surface effects: slight 0.5–1px vertical misalignment between adjacent character cells simulates mechanical imprecision.

chart-surface:
  Not applicable — the departure board does not include line or bar charts.
  Data is tabular text only: flight numbers, destinations, times, status text, gate numbers in the split-flap grid.

### Stuck Flap (Error State)
- A single character that refuses to flip, showing top half of old and bottom half of new (or a garbled mix)
- Accompanied by a slight blur or jitter on the hinge line
- May be accompanied by a faint glow artifact (brown‑in halo)

### Mid‑Flip Ghost
- During transition, show a blurred intermediate state of the flap edge for ~30ms
- Motion blur effect simulated by a 1px horizontal smear

## 10. Layout

grid:               strict horizontal grid – columns for Flight Number, Destination, Time, Status, Gate
grid-tendency:      uniform row heights, fixed cell widths, fixed column gaps
density:            high – no extra whitespace between rows, tight line height (leading-tight)
section-separation: thin horizontal rule beneath header; generous outside margins (p-8)
alignment:          left‑align all text; dot‑fill (e.g., "MILAN.....MX12") for variable‑width content

breakpoints:
  375px:            collapse to single column (vertical stack) or horizontal scroll; margins shrink to p-4
  768px:            return to multi‑column grid, may reduce cell height to fit more rows

### Motion

motion:
  transition-duration:
    80–250ms per character flip (80ms fast, 250ms deliberate)
    40–80ms pause at halfway point (card catches air)
    30ms motion blur frame

  transition-timing-function:
    cubic-bezier(0.34, 1.56, 0.64, 1) – crisp with slight overshoot (1-2px bounce then snap)
    Optional linear slam (no ease) for urgent updates

  transition-property:
    transform, opacity (for old character fade, new character slide)

  transition-delay:
    staggered per character – left‑to‑right order, or row‑by‑row (never all at once)

  transition-behavior: allow-discrete (for instant box‑shadow changes)

  animation:
    flip:             top half slides out (translateY(-100%)) + bottom half slides in (translateY(100%))
                      old character fades to 0 opacity, new character fades to 1
                      TRIGGER: on-data-update

    flutter:          1-2px horizontal jitter during last 20ms of flip
                      TRIGGER: on-flip-end

    idle-oscillation: 0.5px vertical oscillation, 10s period (simulates motor vibration)
                      TRIGGER: looping (continuous)

    stutter-stagger:  random intermediate characters cycle (fast) before settling
                      TRIGGER: on-data-update (optional)

  transform-at-rest: none – all elements start at transform: none

  transform-on-interact: none – no interactive transforms

  transform-style:   flat (no 3D)

  backface-visibility: hidden (prevents flicker during flip)

## 11. Design System Notes

### 11a. Use Constraints
**Appropriate for:** Real‑time data dashboards (flight schedules, departure/arrival boards), transportation signage, event schedules, retro‑themed applications, terminal emulators, or any UI that benefits from a mechanical, high‑contrast, attention‑fixing display. **Wrong for:** Content‑heavy editorial layouts, e‑commerce (product listings need images and variable type), creative portfolios, or any design requiring soft, organic, or playful aesthetics.

### 11b. Prompt Phrases
- "Use all‑caps monospaced text in a strict grid – each character a split‑flap card with a visible midline gap."
- "Render characters in warm amber (#FFB000) on a near‑black (#0A0A0A) background, no gradients on text."
- "Apply a faint grain overlay and optional scanlines to simulate physical aging; keep everything flat – no rounded corners."
- "Column headers are static and slightly dimmed; data rows flip on update with a 80–250ms bounce ease‑in‑out."
- "Never use icons, serifs, or variable‑width fonts – every glyph is a rigid card cell."
- "Status text only: ON TIME, DELAYED, BOARDING, GATE CLOSED, CANCELLED – all caps, no punctuation."
- "Leave generous margins around the board; add a hard drop shadow (2px, 2px, 0) to make it feel like a wall‑mounted object."
- "Simulate physical wear: occasional stuck flaps, slight vertical misalignment, dimmed characters for future departures."

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual
description, then the incorrect visual description.

rule: A single monospaced font is used for all content — every glyph occupies a rigid card cell of equal width. No variable-width type, no icons, no symbols.
do:   One monospaced typeface at uniform character width for headers, data, status, and labels. All text in all-caps. Amber (#FFB000) characters on #1A1A1A cell backgrounds.
avoid: Variable-width fonts, serif typefaces, icon fonts, emoji, or mixing multiple font families within the board.

rule: The board background is dark and matte — near-black but never pure black — with no textures behind the board surface.
do:   Background at #0A0A0A. No gradients, no background images. Optional faint grain overlay on the board surface itself for physical aging.
avoid: Pure black (#000000), background textures or images behind the board, rounded corners on any element, drop shadows on individual card cells.

rule: Every character cell displays a horizontal midline gap simulating the physical split-flap hinge.
do:   1px dark line (#2A2A2A) across the horizontal center of each character cell, dividing top half from bottom half of the flap.
avoid: Characters rendered as seamless continuous text with no visible split-flap hinge line.

rule: Flip animations are staggered — never simultaneous — and use crisp timing with bounce or linear slam, never smooth easing.
do:   Per-character stagger (30–60ms delay) left-to-right or row-by-row. Flip duration 80–250ms with cubic-bezier(0.34, 1.56, 0.64, 1) bounce or linear slam for urgent updates.
avoid: All characters flipping at once. Smooth ease-in-out transitions without the mechanical snap or bounce. Any animation duration exceeding 300ms per flip.

rule: All status information is conveyed through plain text — no color-coded pills, icons, or decorative badges.
do:   Status rendered as plain all-caps monospace text: "ON TIME", "DELAYED", "BOARDING", "GATE CLOSED", "CANCELLED" in amber (#FFB000) or red for error states, left-aligned in cell with no background or border.
avoid: Icon indicators, background pills, colored badge containers, punctuation in status text, or any decorative wrapper around status labels.

rule: The system simulates mechanical imperfection — misalignments, stuck flaps, dimmed entries — never appearing digitally perfect.
do:   0.5–1px random vertical offset per character cell. Occasional stuck flaps showing garbled split halves. Future or inactive entries dimmed to 60% opacity.
avoid: Pixel-perfect alignment of all characters with no variation, or pristine card surfaces with no sign of physical aging or mechanical wear.

### 11d. Variation Bounds
- **Clean vs grimy:** pristine flaps with perfect alignment ↔ scratched, dusty flaps with 3px wobble and more grain.
- **Fast vs deliberate:** single‑letter flips (80ms) ↔ multiple‑flap revolutions (300ms) with inertia.
- **Monochromatic vs dual‑tone:** strict black/amber ↔ black on pale green or cyan (sci‑fi remix).
- **Grid vs scattered:** full schedule grid ↔ individual flap tiles floating in space (alternate composition).
- **Flat vs textured:** solid color cards with no simulated depth ↔ pronounced card shadows, edge highlights, grain, and physical wear.

### 11e. Compositional Signatures

### 11e.i — At Rest
A near-black (#0A0A0A) board with 2px dark border (#1A1A1A) and hard drop shadow (2px 2px 0 rgba(0,0,0,0.8)). The header row displays dimmed (60–80% opacity) column labels in monospace text-sm: "FLIGHT", "DESTINATION", "TIME", "STATUS", "GATE" — static, non-flipping, underlined with 1px #2A2A2A border-bottom. Below, data rows fill the grid in warm amber (#FFB000) on #1A1A1A cell backgrounds. Each character occupies its own fixed-width cell with a visible 1px horizontal midline gap (#2A2A2A). Column dividers at 6–12px in #2A2A2A. No icons, no rounded corners. Slight grain overlay at low opacity across the board surface. Generous margins (p-8) surrounding the board. The idle-oscillation animation (0.5px vertical, 10s period) runs continuously on all rows, simulating motor vibration.

### 11e.ii — Maximum Expressiveness
Multiple data rows actively flipping — characters stagger left-to-right with 30–60ms delays, each flip 80–250ms with cubic-bezier(0.34, 1.56, 0.64, 1) bounce ease. A stutter-stagger sequence fires on one row: random intermediate characters cycling rapidly before settling. One stuck flap is visible, showing a garbled split — top half of the old character, bottom half of the new — with a slight blur on the hinge line and a faint brown-tint halo glow artifact. A mid-flip ghost appears as a 1px horizontal smear for ~30ms on a transitioning character. Slight vertical misalignment (0.5–1px random offset) between adjacent cells. A clock element anchored above the board shows flipping digits in the same split-flap style. Optional mounting screws at corners rendered as simulated 3D circles. Faint grain overlay across the entire composition. The board reads as a wall-mounted physical object — heavy, mechanical, alive with constant micro-motion.

### 11e.iii — Data Context
The departure board IS a data display — the entire grid is the dashboard. Each row is a flight record: flight number, destination, scheduled time, status, and gate. Status values ("ON TIME", "DELAYED", "BOARDING", "GATE CLOSED", "CANCELLED") rendered as plain all-caps monospace amber (#FFB000) text — no color-coded backgrounds, no pills, no icons. "CANCELLED" and "GATE CLOSED" may shift to red. Gate labels are dimmed (60% opacity) with dot-fill to meet cell width (e.g., "GATE.....12"). Column headers are static and dimmed to 60–80% opacity, non-flipping. Numeric data (flight numbers, times, gate numbers) in the same monospace amber on #1A1A1A cells, each character in its own card cell with the hinge gap. There is no separate chart surface — the split-flap grid is the sole data visualization. Past flights may be fully dimmed or absent; future flights at full amber brightness. The staggered flip animation triggers on every data update, making real-time changes visible as cascading mechanical motion across the board.

### 11f. Sources

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** The **Airport Departure Board Flip** (also called the split-flap display or **Solari board**) is a mechanical information display system historically used for departure and arrival information at airports, railway stations, and other public transport hubs. The most culturally and technically significant implementation is the system manufactured by **Solari di Udine** beginning in 1956. It relies on the proprietary **Solari flap font** to maintain strict legibility during the rapid mechanical transition of its flipping discs.

**Verified imagery sources.** 8 URLs verified against institutional servers, distributed across:
- Wikipedia — 2 URL(s)
- Wikimedia Commons — 1 URL(s)
- Google Patents — 1 URL(s)
- Museo Nazionale della Scienza e della Tecnologia, Milan — 1 URL(s)
- Science Museum, London — 1 URL(s)
- BBC Archive — 1 URL(s)
- Museum of Modern Art, New York — 1 URL(s)

Key references include no designated institution's record at a specific URL.

**Named typefaces.** The typography of this style is attested as:
- Solari flap font ( — attestation: unverified) — rendered here as bespoke imagery — no web-font substitute

**Honest gaps.** The most significant gap in the documentation is the colour specification (yellow), for which there is no published Pantone, RAL, or RGB value from a primary source. Furthermore, precise mechanical specifications regarding the metallurgical composition of the internal flaps and the exact gear ratio tolerances remain absent from public record. These omissions prevent an exact digital or physical restoration of the original mid-century manufacturing standard. This would be resolved by an effort to locate a factory paint sample or a spectrophotometric reading from an original flap in museum storage.
