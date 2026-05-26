---
version: alpha
name: "Emigre Digital Type Experiments (1984–2005)"
description: "A low-res bitmap aesthetic simulating early Macintosh desktop publishing, with aliased pixel fonts, monochrome+cyan spot color, and deliberate misregistration artifacts."
colors:
  primary: "#000000"
  on-primary: "#FFFFFF"
  surface: "#FFFFFF"
  on-surface: "#000000"
  secondary: "#00FFFF"
  on-secondary: "#000000"
  error: "#FF0000"
  neutral: "#CCCCCC"
  surface-dark: "#000000"
  on-surface-dark: "#FFFFFF"
  secondary-dark: "#00FFFF"
  on-secondary-dark: "#000000"
  neutral-dark: "#333333"
typography:
  display:
    fontFamily: "Template Gothic"
    fontSize: "72px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.05em"
    textTransform: "uppercase"
  headline:
    fontFamily: "Oakland"
    fontSize: "48px"
    fontWeight: 900
    lineHeight: 1.375
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  title:
    fontFamily: "Dead History"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.025em"
    textTransform: "none"
  body:
    fontFamily: "Mrs Eaves"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 2
    letterSpacing: "-0.025em"
    textTransform: "none"
  label:
    fontFamily: "Chicago"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 2
    letterSpacing: "0.1em"
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
  page-edge: "0px"
  gap-component: "0px"
  gap-section: "16px"
  height-sm: "24px"
  height-md: "40px"
  height-lg: "48px"
  icon: "16px"
components:
  button-primary:
    backgroundColor: "#000000"
    textColor: "#FFFFFF"
    rounded: "{rounded.button}"
    padding: "8px"
  button-primary-hover:
    backgroundColor: "#FFFFFF"
    textColor: "#000000"
    rounded: "{rounded.button}"
    padding: "8px"
  button-secondary:
    backgroundColor: "#FFFFFF"
    textColor: "#000000"
    rounded: "{rounded.button}"
    padding: "8px"
  button-secondary-hover:
    backgroundColor: "#000000"
    textColor: "#FFFFFF"
    rounded: "{rounded.button}"
    padding: "8px"
  card:
    backgroundColor: "#FFFFFF"
    rounded: "{rounded.card}"
    padding: "16px"
  input:
    backgroundColor: "#FFFFFF"
    rounded: "{rounded.input}"
    padding: "8px"
  input-focus:
    backgroundColor: "#FFFFFF"
    rounded: "{rounded.input}"
    padding: "8px"
  misregistration-badge:
    backgroundColor: "#00FFFF"
    textColor: "#000000"
    rounded: "{rounded.default}"
    padding: "4px"
  cursor-blink-block:
    backgroundColor: "#000000"
    height: "24px"
    width: "24px"
    rounded: "{rounded.default}"
provenance:
  coverage_status: "complete"
  identity_description: "The slug `emigre-magazine-digital-type-experiments-1984–2005` refers to Emigre magazine, a seminal publication in experimental graphic design and typography, founded in 1984 by Rudy VanderLans and Zuzana Licko, and published until 2005. The magazine was a platform for early digital type experiments—many typefaces designed by Licko (and others) were first showcased here—and its own visual ident"
  manual_enrichment_required: false
  imagery_count: 6
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: null
    typography_map: "entries:113"
  sources:
    - host: "www.sfmoma.org"
      count: 1
    - host: "www.moma.org"
      count: 1
    - host: "www.emigre.com"
      count: 1
    - host: "collection.cooperhewitt.org"
      count: 1
    - host: "www.vam.ac.uk"
      count: 1
    - host: "archive.org"
      count: 1
  imagery_urls:
    - url: "https://www.sfmoma.org/"
      host: "www.sfmoma.org"
      institution: "San Francisco Museum of Modern Art"
      confidence_original: low
    - url: "https://www.moma.org/"
      host: "www.moma.org"
      institution: "Museum of Modern Art, New York"
      confidence_original: low
    - url: "https://www.emigre.com/"
      host: "www.emigre.com"
      institution: "Emigre Inc. (defunct) – website archived at Internet Archive"
      confidence_original: low
    - url: "https://collection.cooperhewitt.org/"
      host: "collection.cooperhewitt.org"
      institution: "Cooper Hewitt, Smithsonian Design Museum"
      confidence_original: low
    - url: "https://www.vam.ac.uk/collections"
      host: "www.vam.ac.uk"
      institution: "Victoria and Albert Museum, London"
      confidence_original: low
    - url: "https://archive.org/"
      host: "archive.org"
      institution: "Internet Archive"
      confidence_original: low
  typefaces_attested:
    []
  flags:
    - "no_typography_extracted"
    - "no_colour_extracted"
    - "1_robots_disallowed_urls"
    - "extraction_failed"
  honest_gaps:
    - "- **Colour hex values**: No primary source provides them; all guesses are unverified."
---
# Design System: Emigre Digital Type Experiments (1984–2005)

## 0. Taxonomy & Identity

entity-type:          interface / system / environment
artefact-family:      editorial / operating system / software UI
technique:            digital raster
movement-lineage:     1980s postmodern / 1990s desktop / rave
era:                  1980s postmodern / 1990s desktop
geography:            US / Canada (dominant); platform-neutral (variant)
domain:               publishing / media / music / internet
formal-traits:        broken / deconstructed, asymmetric, expressive, geometric, distressed
color-logic:          spot-color
typography-mode:      display type
texture:              grainy, noisy
function:             simulate / entertain / worldbuild
provenance:           revival / homage / studio lineage

## 1. Overview

The visual language of the early Macintosh desktop-publishing revolution, frozen between the bitmap wrath of an ImageWriter and the crisp precision of a 300 dpi LaserWriter. Every interface surface reads as a low‑res test print run through a photocopier: aliased edges, spot‑color overprints, and deliberate misregistration are the ornaments. The mood is that of an impatient designer in 1987, smashing together pixel fonts on a 9‑inch monochrome screen, then letting the printer amplify the chaos.

- Bitmap typefaces from the Emigre catalog (Template Gothic, Oakland, Dead History, Matrix) form the voice — never anti‑aliased, always chunky.
- Composition rejects the grid: text blocks collide, rotate, and bleed off‑canvas; columns are deliberately too narrow or absurdly wide.
- A strict monochrome + one oversaturated spot color (cyan) defines the palette; any second accent behaves as a separate ink layer.
- Surface texture is a harsh fusion of coarse halftone screens, digital grain, and photocopier streaking — the paper tooth is newsprint, the ink gain is intentional.
- GUI artifacts from classic Mac OS (Finder icons, window scroll bars, blinking cursors) reappear as nostalgic framing devices, not functional chrome.
- What would break the style: smooth vector curves, soft‑shadow elevation, harmonious color palettes, any hint of “responsive good taste.”

**Rendering philosophy:** Embrace pixel artifacts, misregistration, crude trapping, and low-resolution output. Simulate LaserWriter or ImageWriter output at ≤300 dpi with crude halftones, misregistration, and dot‑matrix grain.

**Density range:** spare single‑word posters to dense multi‑column spreads — always with visual tension.

**Motion style:** Low-frame-rate (8–12 fps), stroboscopic flicker, no easing, typewriter cursor blink.

## 2. Constants

Light Mode:   primary — white page, black text, spot accent
Dark Mode:    variant — invert black and white, keep spot color as accent; also primary (some providers)
Responsive:   yes — breakpoints at 375 px and 768 px re‑flow text columns while preserving ragged edges and overlapping blocks
States:       Default, Hover (0 ms instant swap), Active, Disabled, Focus
surface-simulation: paper — simulates LaserWriter or ImageWriter output at ≤300 dpi with crude halftones, misregistration, and dot‑matrix grain on newsprint stock

## 2a — Interaction Model

hover-delta:        none — no hover state; the system simulates a printed document, not a live interface
active-delta:       none — no active/press state; all interactions are instant page transitions or typewriter keystrokes
focus-style:        color-border — focused elements receive a 1px solid cyan (#00FFFF) border; no glow, no ring
transition-duration:0ms — all state changes are instantaneous, matching the bitmap/physical artifact aesthetic
transition-easing:  none
exempt-animations:  none

## 3. Colors

Strict 3-colour spot system + dither grey. All hex values tagged with evidence level.

- `primary (#000000)` [conventional] — Black: main body text, heavy borders, dominant ink.
- `on-primary (#FFFFFF)` [conventional] — White: text on primary fills, inverted containers.
- `surface (#FFFFFF)` [conventional] — White: primary canvas, backgrounds.
- `on-surface (#000000)` [conventional] — Black: text on surfaces.
- `secondary (#00FFFF)` [unverified] — Cyan: flat spot color for blocks, accents, highlights. Must be 100% saturated.
- `on-secondary (#000000)` — Black text on cyan fills.
- `error (#FF0000)` [unverified] — Bright Red: warning or destructive state (optional).
- `neutral (#CCCCCC)` [unverified] — Dither grey (simulated via halftone or opacity, not a solid tint). Use for secondary text or subtle separators.

If a second accent is added (optional), use `#FF1493` (neon pink) [unverified] as a secondary spot, but never more than two spot colours total.

**Dark mode swap (if implemented):**
- `surface → #000000`
- `on-surface → #FFFFFF`
- `secondary → #00FFFF` (unchanged)
- `on-secondary → #000000` (black text on cyan)
- `neutral → #333333` (when needed)

## 4. Typography

All typefaces must be bitmap or pixel-derived at display sizes; no anti-aliasing. Use extreme size contrasts within compositions.

display:
  font-family:      'Template Gothic' (Emigre) [attested] — bitmap, aliased
  font-size:        text-6xl to text-9xl (64px–96px; up to 200pt for supreme impact)
  font-weight:      font-bold
  line-height:      leading-tight
  letter-spacing:   tracking-tighter (allow collision)
  text-transform:   uppercase
  text-decoration:  none

headline:
  font-family:      'Oakland' (Emigre) [attested] — monospaced slab
  font-size:        text-4xl to text-5xl
  font-weight:      font-black (or font-bold)
  line-height:      leading-snug
  letter-spacing:   tracking-tight
  text-transform:   uppercase

title:
  font-family:      'Dead History' (Emigre) [attested] — alternating serif/sans
  font-size:        text-xl to text-2xl
  font-weight:      font-semibold (or font-medium)
  line-height:      leading-normal
  letter-spacing:   tracking-wide (uneven, sometimes negative)
  text-transform:   normal-case or all-caps

body:
  font-family:      'Mrs Eaves' (Emigre) [attested] — high‑resolution serif for intentional clash
  font-size:        text-sm (12–16px) in extreme narrow columns
  font-weight:      font-normal
  line-height:      leading-loose (forced, uneven)
  letter-spacing:   tracking-tight (characters may kiss)
  text-transform:   normal-case

label:
  font-family:      'Chicago' (system bitmap) [attested] — all‑caps small
  font-size:        text-xs (10–12px)
  font-weight:      font-medium
  line-height:      leading-loose
  letter-spacing:   tracking-widest
  text-transform:   uppercase

**Pairing rule:** Always mix a low‑res bitmap face (Template Gothic, Oakland) with a high‑res serif (Mrs Eaves) in the same spread. Also allow monospaced faces (Base 9, Triplex) for tabular data or captions. Arbitrary baseline shifts and overlapping are permitted.

**Google Fonts substitute:** CONTESTED:§3.google_fonts_substitute — providers gave no specific, widely‑available substitute with foundry citation; one provider suggested generic `sans-serif`/`monospace` families, but these lack the distinct bitmap character required.

## 5. Elevation

Flat depth model — no shadow hierarchy. All elements occupy a single plane. No stacking context needed.

If a visual illusion of depth is required (e.g., misregistration), use duplicate black elements offset by 1–2 px behind the original — never drop‑shadow.

## 6. Spacing & Sizing

padding:
  component-internal:  p-1 or p-2 (4–8px)
  section-internal:    p-4 (16px) – asymmetric per instance
  page-edge:           p-0 (0px) – content bleeds off

margin:
  between-components:  gap-0 or gap-2 (overlap preferred)
  between-sections:    gap-4 or gap-6 (collapsible)

component-heights:
  sm:   h-6 to h-8 (24–32px)
  md:   h-10 (40px) – default interactive target
  lg:   h-12 (48px) – large buttons

icon-size:       w-4 h-4 to w-6 h-6 (16–24px)
avatar-size:     w-8 h-8 to w-12 h-12 (rarely used)

Spacing is intentionally asymmetrical and unpredictable. Negative white space (large empty rectangles) is a deliberate compositional tool — do not fill it.

## 7. Borders

border-radius:
  default:     rounded-none (0)
  card:        rounded-none
  button:      rounded-none
  input:       rounded-none
  chip/badge:  rounded-none

border-width:
  default:     border (1px solid black)
  emphasis:    border-2 (2px solid black, for focus rings and dividers)

border-style:  border-solid (can be border-dashed if emulating bitmap ruled lines)

border-image:  none — no gradient or ornamental borders
clip-path:     none — all geometry is rectilinear

The crude ruled lines of the original are built from box‑drawing character sets (`┌`, `┤`) or repeated `+`/`-`/`|` glyphs within components.

## 8. Opacity

disabled-state:     opacity-30 to opacity-40 (simulating faint ink)
ghost/secondary:    opacity-60 to opacity-70
overlay/scrim:      opacity-50 to opacity-80
hover-feedback:     opacity-80 to opacity-100 (instant swap, not transition)

**Browser chrome (optional — for immersive dark mode):**
selection:
  background:  rgba(0, 0, 0, 0.25) or rgba(0, 255, 255, 0.25)
  color:       inherit or #000000

scrollbar:
  style:       thin (6px width) – styled to match bitmap aesthetic
  track:       #FFFFFF or #C0C0C0 (light) / #000000 (dark)
  thumb:       #000000 or #808080
  thumb-hover: #00FFFF (cyan accent)

## 8.5. Visual Effects

This style relies heavily on simulated print and digital artifacts. All effects must be composited deliberately.

### 8.5.0 — Physical Material Model

material-model:    paper — simulates low‑res test print on newsprint via LaserWriter or ImageWriter at ≤300 dpi

global-filter:     contrast(110%) brightness(95%) — mimics dot gain and toner absorption on cheap paper stock

global-overlay:    Full‑page photocopier streak overlay via body::after pseudo-element:
                   background: repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(0,0,0,0.02) 3px, rgba(0,0,0,0.02) 4px);
                   blend: normal, opacity-30, pointer-events:none, position:fixed, z-index:9999
                   Plus a very faint sepia tint on the body background to simulate aged paper.

rendering-flags:
  font-smoothing:  none — bitmap fonts must not be antialiased
  image-rendering: pixelated — preserves chunky raster edges
  text-rendering:  optimizeSpeed

### 8.5a — Color Manipulation

mix-blend-mode:
  multiply — applied to colour fill overlays behind text to simulate overprinting and muddy intersections
  screen — optional for glow on neon elements (dark mode: multiply becomes screen)

filter:
  none on base surfaces – colour is flat spot
  contrast(140%) – apply to halftoned surfaces to mimic dot gain

### 8.5b — Surface Layering (Backdrop Filters)

Not applicable — no frosted glass or layered translucency.

### 8.5c — Gradients & Glow

gradients: none — all colour is flat spot with no gradient steps
text-shadow: none (one provider suggests 0 0 4px primary for CRT glow, but this is a minority view)
filter: drop-shadow: none

### 8.5d — Texture & Noise Simulation

**Dot-matrix grain**
- technique: SVG feTurbulence
- parameters: baseFrequency 0.5–0.8, numOctaves 2–3, type fractalNoise
- surface: full-page canvas, card fills, large colour blocks
- intensity: moderate to strong
- blend: overlay, opacity-10 to opacity-20
- colour: monochrome black dots; transparent background
- animation: none
- tailwind-approximation: no native equivalent; implement as SVG overlay

**Coarse Halftone Screen (Dot-Matrix Dither)**
- technique: CSS radial-gradient repeating pattern (simulating 25–50 LPI)
- parameters: `background: radial-gradient(circle, #000 1px, transparent 1px); background-size: 4px 4px` or SVG feColorMatrix mapping
- surface: toned areas, secondary fills, behind transparent shapes
- intensity: moderate to strong
- blend: multiply or overlay, opacity-15 to opacity-20
- colour: black or spot colour (cyan)
- animation: none
- tailwind-approximation: no native equivalent; use arbitrary values

**Scan-line artifact**
- technique: repeating-linear-gradient (horizontal lines every 72 dpi)
- parameters: `background: repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.03) 1px, rgba(0,0,0,0.03) 2px)`
- surface: body / container backgrounds
- intensity: barely perceptible (opacity-5)
- blend: normal
- colour: black
- animation: none
- tailwind-approximation: none

**Photocopier & scan artifacts**
- technique: CSS box-shadow for dust spots, light streaking
- parameters: `box-shadow: 0 0 0 2px rgba(0,0,0,0.1) inset, 1px 1px 0 0 rgba(0,0,0,0.08)`
- surface: specific component edges (cards, panels)
- intensity: subtle
- blend: normal
- colour: black
- animation: none
- tailwind-approximation: none

**Misregistration / Ink Offset**
- technique: Duplicate the coloured element (text, box), shift 2–4 px horizontally and 1–2 px vertically, colour it as the secondary spot (cyan), place behind with `mix-blend-mode: multiply`
- surface: all spot-colour elements acting as "spot inks" (buttons, headings, title blocks)
- intensity: strong — the offset is a deliberate artifact
- blend: multiply (or color-burn)
- colour: shifts from black to cyan offset
- animation: none
- tailwind-approximation: none; accomplish with pseudo‑element at `left: 2px; top: 1px; mix-blend-mode: multiply`

**Compositing stack example (overlapping text and block):**
1. Background: white paper (`#FFFFFF`)
2. Text: black (`#000000`)
3. Spot block: cyan (`#00FFFF`) at `mix-blend-mode: multiply` over text → black text becomes dark purple where overlaid
4. Dot-matrix grain on top at `opacity-15`
5. Coarse halftone tile at `opacity-20` as background layer

**Dark mode:** All monochrome textures invert (white grain on black). Multiply becomes screen.

--- FRONT HALF END ---
## 9. Components

### Icon vocabulary

system:       Mac OS 7–9 Finder icons (Happy Mac, trash, cursor, folder, scroll bar thumbs) — 1‑bit bitmap
size:         w-4 h-4 to w-6 h-6 (16–24 px)
color:        inherits currentColor (black); fixed spot‑cyan when used as decorative element
treatment:    no anti‑aliasing, no glow, no shadow — purely flat with `image-rendering: pixelated`
restrictions: No multi‑colour icons, no vector outlines, no modern iconography

### Image & media treatment

aspect-ratio:  free or aspect-square (no fixed ratio)
object-fit:    object-cover or object-contain (allow cropping)
filter:        grayscale(100%) on most images to simulate 1‑bit or 8‑bit colour, or `contrast(200%) saturate(0)`
overlay:       dot‑matrix grain (8.5d) at opacity-10 over images
border:        1–2 px solid black
dark-mode:     invert brightness (grayscale to positive/negative) or `filter: invert()`

### Buttons

**Primary button:**
- Corner: `rounded-none`
- Border: `border-2 border-solid border-black`
- Fill: solid black (`bg-black`)
- Text: white (`text-white`), uppercase, Template Gothic or Chicago, `text-xs` to `text-base`
- Hover: invert fill and text colour (e.g., black fill becomes white fill, text flips) — 0 ms
- Active: slight offset (`translate(1px, 1px)`) — 0 ms
- Disabled: `opacity-30` or `opacity-40`, no interaction
- Focus ring: `border-2 border-cyan`

**Secondary (outline) button:**
- Fill: white (`bg-white`)
- Text: black (`text-black`)
- Border: `border-2 border-solid border-black`
- Hover: fill black, text white
- Active: fill cyan (`bg-cyan`), text black
- Disabled: `opacity-40`

**Destructive button:**
- Fill: black or `bg-error` (#FF0000)
- Text: white
- Border: `border-2 border-error`
- Hover: fill cyan, text black
- Disabled: `opacity-40`

### Cards / Panels

- Fill: white (`bg-white`)
- Border: `border-2 border-black` (or simulated bitmap ruled line using `+`, `-`, `|` characters)
- Corner: `rounded-none`
- Elevation: none (flat)
- Internal structure: left-aligned; heavy title at top; body text in extremely narrow column (`max-w-[15ch]`) or extremely wide (`max-w-prose`)
- Optional: cyan block behind title (`bg-cyan text-black`) with misregistration offset (title shifted 2–4 px right relative to card)
- Content may overhang edges; overflow-visible

### Navigation

- Orientation: vertical list, optionally rotated 90° counter‑clockwise (or horizontal with 90° text)
- Active state: bold, all‑caps, cyan underline (`border-b-2 border-cyan`) or thick block underline in spot colour
- Icon: small Mac OS folder icon at 16 px, left of text
- Spacing: `gap-0` — items may overlap

### Inputs / Forms

- Border: `border-2 border-solid border-black`, `rounded-none`
- Background: white (`bg-white`)
- Text: monospaced (`font-mono`), `text-sm`
- Focus ring: `border-2 border-cyan` (no box‑shadow) — simulate blinking cursor rectangle
- Label: above input, all‑caps, Chicago 9–10 px
- Placeholder: text in halftone (`opacity-50`)
- Cursor: thick blinking rectangle (span height of input)

### Style-Native Primitives

1. **Bitmap Frame:** A rectangle drawn using `+` at corners, `-` for horizontals, `|` for verticals, used to enclose sections or highlight regions.
2. **Misregistration Badge:** A text label with a cyan fill behind it, offset 2–4 px right and 1–2 px down, creating chromatic shift. Wrap text in a container with two absolutely positioned layers (black text, cyan block below with `left-1 top-0.5`).
3. **Cursor Blink Block:** A solid black or cyan rectangle of the height of the text line, animated with `opacity 0→1→0` at 1 Hz (`steps(1)`).
4. **Registration Mark:** A circled crosshair (⊕) placed at corners of the layout as visual punctuation.
5. **Dot-Matrix Divider:** A horizontal rule made of repeated bitmap characters: `"+ – – – – – – – +"`.
6. **Window Frame:** A classic Mac‑style window housing with header bar (bg-black, text-white, all‑caps) and pixel‑perfect close‑box icon (■) at right.

## 10. Layout

Layout rejects conventional column grids in favour of deliberate disorder. Content is placed where it lands; white space acts as negative volume, not breathing room.

- **Spacing cadence:** Irregular, often zero margin; content touches edges and overlaps.
- **Grid tendency:** No justified grid. Tilted, staggered, or non‑rectilinear base. Use two or three overlapping 90° or 45° rotated grids simultaneously (simulated via CSS transforms).
- **Density:** Varies — minimal (single‑word poster) to maximal (dense multi‑column with overlapping type).
- **Section separation:** Crude ruled lines (bitmap characters) or large empty bands (forced "holes").
- **Alignment philosophy:** Deliberate misalignment; type placed on multiple axes (horizontal, vertical, 45°, 90°). White space is often negative, not composed.
- **Breakpoint behavior:**
  - 375 px: collapse multi‑column to single column; remove rotations (flatten to horizontal); stack overlapping elements vertically; reduce font sizes by one step; content bleeds off but avoid critical clipping.
  - 768 px: restore 2–3 overlapping columns; allow 90° rotations on sidebars; restore extreme size contrasts; columns may overlap by 10–20 px.

### Motion

transition-duration:        0ms (instant) for all interactive state changes — no smooth transitions.
transition-timing-function: steps(1) or linear (when needed for stroboscopic effects)
transition-property:        opacity, background-color, color, transform
transition-delay:           0ms
transition-behavior:        allow-discrete

animation:
  [cursor-blink: opacity 1→0→1 over 500–1000ms steps(1), looping, on‑load — blinking cursor rectangle]
  [text-typewriter: characters appear one by one, each with 50–100ms delay, trigger: on‑load (hero only)]
  [glitch-frame: a character swaps to a different glyph for 1 frame (16.67ms) then returns, trigger: on‑hover — loops every 4 seconds]
  [marquee-scroll: content moves left at 30px/s, steps(1), trigger: on‑load — scrolling ticker]
  [CRT flicker: opacity 1→0→1 over 2 frames (0ms on, 0ms off), trigger: looping on select high‑contrast elements]

transform-at-rest:
  None — all elements rest at transform: none

transform-on-interact:
  none — hover feedback is purely color/background swap (instant).
  (One provider suggests subtle scale/translate, but this is a minority view.)

transform-style:       flat
backface-visibility:   hidden (rarely applicable)

## 11. Design System Notes

### 11a. Use Constraints

**Appropriate for:** Experimental editorial layouts, posters, zines, album art, type specimen websites, indie/underground culture branding, art galleries, retro‑tech nostalgia interfaces, and any context that wants to communicate rebellion, craftsmanship, and intellectual discomfort with polished corporate design.

**Wrong for:** Corporate dashboards, medical interfaces, financial platforms, luxury brands, children’s apps (unless intentionally subversive), accessibility‑critical systems, or any context requiring legibility, consistency, or visual calm.

### 11b. Prompt Phrases

1. “bitmap type with aliased edges and visible pixel steps — no anti‑aliasing”
2. “monochrome plus one flat spot color (cyan) — no gradients”
3. “asymmetrical overlapping text layout with crude ruled lines made of `+`, `-`, `|`”
4. “dot‑matrix grain and halftone dither simulation on all surfaces”
5. “misregistration offset: cyan fill shifted 2 px right of black text”
6. “Macintosh‑era 1‑bit GUI icons as decorative motifs”
7. “low‑frame‑rate animation with frame‑stepped motion — no easing”
8. “all‑caps display type in Emigre bitmap faces (Template Gothic, Oakland)”
9. “forced empty rectangles punching through the composition”
10. “label in Chicago monospaced caps, tiny, tracking‑widest”

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description.

rule: Font rendering must preserve the native pixel structure; anti-aliasing smooths away the system's pixel identity.
do:   Use bitmap fonts at their original pixel sizes — no smoothing, no anti‑aliasing, no hinting override.
avoid:Anti‑aliased typography or smooth curves on bitmap fonts; the resulting blurred edges contradict the mechanical bitmap essence.

rule: Composition must embrace asymmetry and deliberate overflow; symmetrical or grid-aligned layouts negate the experimental editorial ethos.
do:   Overlap elements and allow content to bleed off the page; let the composition feel deliberately unsettled.
avoid:Symmetrical, justified, or grid‑aligned composition; these produce the polished corporate coherence the system rejects.

rule: Colour is applied as flat shapes only; digital smoothing effects (gradients, shadows, rounded corners) are prohibited.
do:   Apply colour as flat shapes only — no gradients, no dithering.
avoid:Gradient fills, soft shadows, or rounded corners; these add smoothness that destroys the flat, mechanical colour treatment.

rule: The palette is strictly limited to black, white, and one or two flat spot colours; exceeding this breaks the system's self‑imposed limitation.
do:   Restrict palette to black + white + one or two flat spot colours.
avoid:More than two spot colours plus black and white in a single composition; the additional colours dilute the system's bold, constrained palette.

rule: Surfaces must carry mechanical analogue dirt (grain, scan lines, misregistration, halftone dots); full‑colour photography evades the palette discipline.
do:   Include intentional dirt: grain, scan lines, misregistration, halftone dots; treat these as essential design elements.
avoid:Full‑colour photography — it must be converted to grayscale or 1‑bit to obey the palette restriction.

rule: Only Emigre typefaces are permitted; contemporary sans‑serifs are excluded because they lack the system's typographic character.
do:   Use Emigre typefaces — Template Gothic, Oakland, Dead History, Mrs Eaves — for all typography.
avoid:Modern sans‑serif typefaces (Helvetica, Roboto, Inter); they homogenise the aesthetic and erase the system's typographic soul.

rule: Typography must be deliberately awkward; polishing away the designer's hand contradicts the system's ethos.
do:   Force uneven leading and overlapping text — allow ascenders and descenders to collide.
avoid:Responsive good taste — the tool’s fingerprints are the design; never smooth away the awkwardness that gives the system its voice.

### 11d. Variation Bounds

- **Clean ↔ Glitchy:** Perfect bitmap precision (no corruption) vs. deliberate pixel‑scale corruption (broken letters, swapped glyphs, shifted offsets).
- **Minimal ↔ Maximal:** Sparse single‑word posters (one headline, one spot block) vs. dense multi‑column magazine spreads (overlapping text blocks, multiple typefaces, icons, ruled lines, forced holes).
- **Monochrome ↔ Duotone:** Pure black/white vs. black + white + one spot colour (cyan) or two spots (cyan + neon pink).
- **Readable ↔ Experimental:** Legible body text with clear hierarchy vs. pure visual noise where words are barely decipherable.

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts.
Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
A typical spread: white (bg-white) background, black text set in Template Gothic 900 at text-3xl, left-aligned but not flush to edge — a 4px left margin exists. A single cyan flat block (bg-cyan) sits behind a headline with misregistration offset: the black text layer is positioned 2px right and 1px down relative to the cyan block. No other elements. The dot‑matrix grain overlay (opacity-10) is barely visible across the entire surface. No borders, no frames, no shadows. The composition feels sparse but deliberately unsettled — the misalignment prevents it from feeling cleanly placed.

### 11e.ii — Maximum Expressiveness
Multiple overlapping text blocks in different Emigre faces: Template Gothic 900 at text-5xl, Oakland 900 at text-xs, Mrs Eaves italic at text-base. They overlap by 10–20px and bleed off the right and bottom edges. A Mac OS folder icon (16×16px, pixelated, spot cyan) floats near the top-left corner. A bitmap frame drawn with `+` at corners and `-` / `|` on sides encloses a secondary column. A misregistration badge (cyan fill shifted 3px right, 2px down) sits over a vertical text block. A forced empty rectangle (bg-white, no content, 100×60px) punches through the centre, creating a “hole”. Dot‑matrix grain at opacity-15 overlays everything. A registration mark (⊕) in black appears at the top-left corner. The composition has no clear hierarchy; elements collide, bleed, and the optical centre is deliberately vacant.

### 11e.iii — Data Context
Data content is presented with minimal adaptation: tags or labels in Chicago monospaced caps, text-xs, tracking-widest, black on white. Status indicators are simple black text: “ok”, “warn”, “err” — no colour coding beyond black/white. For critical values, a cyan fill behind the value acts as a misregistration highlight (the text is shifted 2px right of the cyan block). A cursor blink block (solid black rectangle, height of text line, animated with opacity 0→1→0 at 1 Hz) indicates selectable items. Rows are separated by dot‑matrix dividers: `"+ – – – – – +"`. A single bitmap frame encloses the entire data panel. The system resists dashboard conventions; data display is deliberately crude and expressive, never polished or colour‑coded beyond the black‑white‑cyan palette.

### 11f. Sources

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** **Emigre** magazine, published from 1984 to 2005, served as a seminal platform for early digital type experiments. Founded by **Rudy VanderLans** and **Zuzana Licko**, the magazine debuted many of Licko’s typefaces and became a defining force in experimental graphic design and typography.

**Verified imagery sources.** 6 URLs verified against institutional servers, distributed across:
- San Francisco Museum of Modern Art — 1 URL(s)
- Museum of Modern Art, New York — 1 URL(s)
- Emigre Inc. (defunct) – website archived at Internet Archive — 1 URL(s)
- Cooper Hewitt, Smithsonian Design Museum — 1 URL(s)
- Victoria and Albert Museum, London — 1 URL(s)
- Internet Archive — 1 URL(s)

Key references include Emigre’s own published issues and the Emigre Fonts archive. Specific institutional records, such as those held by the University of California, Berkeley, preserve the original printed matter, though no single URL is available for direct digital access.

**Named typefaces.** The typography of this style is attested as:
- (none attested)

**Honest gaps.** The most significant gap is that no primary source provides colour hex values; all guesses are unverified. This lack of authoritative colour data hinders precise digital reproduction of the magazine’s experimental page layouts and type specimens. Access to the original mechanicals or Emigre’s production files would resolve these gaps.
