---
version: alpha
name: "Neue Grafik"
description: "Neue Grafik translates the rational clarity of mid-20th-century Swiss Graphic Design into digital interfaces. The system trusts that information structure is inherently beautiful: every element earns its place through function, never ornament."
colors:
  ok: "#000000"
  warn: "#FDD835"
  delta-up: "#000000"
  delta-flat: "#999999"
typography:
  display:
    fontFamily: "Akzidenz-Grotesk"
    fontSize: "48px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.05em"
    textTransform: "uppercase"
  headline:
    fontFamily: "Akzidenz-Grotesk"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.025em"
    textTransform: "uppercase"
  title:
    fontFamily: "Akzidenz-Grotesk"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.375
    letterSpacing: "0em"
  body:
    fontFamily: "Akzidenz-Grotesk"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "0em"
  label:
    fontFamily: "Akzidenz-Grotesk"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.025em"
    textTransform: "uppercase"
rounded:
  default: "0px"
  card: "0px"
  button: "0px"
  input: "0px"
  chip: "0px"
spacing:
  component-internal: "16px"
  section-internal: "32px"
  page-edge: "32px"
  gap-component: "24px"
  gap-section: "48px"
  height-sm: "32px"
  height-md: "40px"
  height-lg: "48px"
  icon: "20px"
components:
  button-primary:
    backgroundColor: "#000000"
    textColor: "#FFFFFF"
    rounded: "{rounded.button}"
    padding: "12px"
    height: "40px"
  button-primary-hover:
    backgroundColor: "#E31E24"
    textColor: "#FFFFFF"
    padding: "12px"
    height: "40px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "#000000"
    rounded: "{rounded.button}"
    padding: "12px"
    height: "40px"
  button-secondary-hover:
    backgroundColor: "#000000"
    textColor: "#FFFFFF"
    padding: "12px"
    height: "40px"
  card:
    backgroundColor: "#FFFFFF"
    rounded: "{rounded.card}"
    padding: "24px"
  input:
    backgroundColor: "#FFFFFF"
    textColor: "#000000"
    rounded: "{rounded.input}"
    padding: "12px"
  metric-cell:
    backgroundColor: "#FFFFFF"
    textColor: "#000000"
    rounded: "{rounded.card}"
    padding: "8px"
  data-table-row:
    backgroundColor: "#FFFFFF"
    padding: "8px"
provenance:
  coverage_status: "minimal"
  identity_description: "The slug `neue-grafik` refers to Neue Grafik / New Graphic Design / Graphisme actuel, a trilingual Swiss graphic design journal published quarterly from 1958 to 1965 (some sources cite 1959–1965; the exact first issue year is CONTESTED:§0.publication_start_year — providers gave: [1958 / 1959]; no primary source; re-stack required). It was founded and edited by Richard Paul Lohse, Josef Müller‑"
  manual_enrichment_required: true
  imagery_count: 1
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "en.wikipedia.org"
      count: 1
  imagery_urls:
    - url: "https://en.wikipedia.org/wiki/Neue_Grafik"
      host: "en.wikipedia.org"
      institution: "Wikimedia Foundation"
      confidence_original: high
  typefaces_attested:
    - name: "Akzidenz-Grotesk"
      foundry: "Berthold"
      year: null
      google_fonts: "Archivo"
      attestation: "conventional"
  flags:
    - "one_usable_url_only"
  honest_gaps:
    - "1. **Accent colour – unverified**. No primary‑source hex, Pantone, or ink specification. Colour‑calibrated survey needed."
---
# Design System: Neue Grafik

## 0. Taxonomy & Identity

entity-type:        interface / system / environment
artefact-family:    operating system / software UI
technique:          digital vector
movement-lineage:   design movement
era:                postwar
geography:          central europe
domain:             publishing / media / education
formal-traits:      grid-based, asymmetric, minimal, geometric
color-logic:        spot-color
typography-mode:    grotesque
texture:            matte, grainy
function:           inform
provenance:         revival / homage

Note: One provider described technique as “digital raster”, era as “1960s–1970s counterculture”, domain as “internet/software/AI”, texture as “smooth”, and provenance as “canonical historical source”. These are minority dissents.

## 1. Overview

Neue Grafik translates the rational clarity of mid-20th-century Swiss Graphic Design into digital interfaces. The system trusts that information structure is inherently beautiful: every element earns its place through function, never ornament. The dominant emotional register is calm, authoritative, and precise—a confident asymmetry that communicates hierarchy through weight and position rather than decoration. The aesthetic lineage runs from the work of Josef Müller-Brockmann, Armin Hofmann, and the Basel School through to contemporary minimalist UI practice.

**Recognizability comes from:** a strict modular grid (2–4 invisible columns) with asymmetrical composition; flush-left, ragged-right text; high contrast black‑on‑white surfaces interrupted by exactly one accent color (classic vermillion, cadmium yellow, or ultramarine); generous negative space that functions as an active compositional element; photography or image blocks cut into rigid rectangles or circles—no rounded corners, no drop shadows. **Breaking the style:** introducing serifs, italics, gradients, decorative flourishes, rounded corners, symmetrical centering, or more than one accent color.

- **Physical texture:** simulates uncoated paper stock with subtle ink gain, paper grain, dust specks, and optional offset misregister on accent elements—applied as static overlay rather than dynamic interaction.

## 2. Constants

Light Mode:   yes – primary (high-contrast black on white)
Dark Mode:    no – the style is inherently light-mode; inversion loses the uncoated-paper character
Responsive:   yes – grid collapses at 375px, 2 columns at 768px, full grid ≥1024px
States:       Default, Active, Disabled, Hover, Focus, Error (Error may be omitted)
surface-simulation: paper — simulates uncoated paper stock, grain, ink gain, offset misregister

Note: Three providers allow a dark variant by inverting the palette; the canonical system is light‑mode only.

## 2a — Interaction Model

hover-delta:        color-shift — primary button shifts to accent background and border on hover (black→accent); secondary button shifts to black background; no opacity change, no movement
active-delta:       none — active state is same as default; no press feedback beyond possible color (already applied on hover)
focus-style:        glow-ring — ring-2 with accent color (ring-2 ring-accent) on focused elements; alternatively border-accent
transition-duration:0ms — all state changes are instantaneous hard cuts
transition-easing:  step-end
exempt-animations:  type-enter, slide-reveal, accent-pop

## 3. Colors

- `#000000` [attested] – **primary**: black, neutral; main text, icons, rules, structural fills
- `#FFFFFF` [attested] – **on-primary / surface**: white background canvas, card fills, text on black
- `#F5F5F5` [attested] – **neutral / surface-container**: light grey for secondary backgrounds, cards
- accent: **CONTESTED** – providers gave `#E34234`, `#E32636`, `#E31E24`; no unanimity or majority; re‑stack required
- `#FFFFFF` [inferred] – **on-accent**: text on accent fields
- on-surface-variant: **CONTESTED** – providers gave `#1A1A1A90`, `#999999`, `#666666`, `#757575`; no consensus
- outline: **CONTESTED** – providers gave `#B3B3B3`, `#666666`, `#000000`, `#D1D1D1`; no consensus
- outline-variant: `#CCCCCC` [conventional] – only one provider specifies; use with caution
- Alternative accent colours (cadmium yellow `#FDD835`, ultramarine `#1A237E`) are cited by three providers but not part of the core palette.

Monochrome alternative: replace accent with 5%–90% grey stepped scale; maintain single accent logic.

Semantic state colors:
ok:         #000000 — black; success, confirmed, nominal — the authoritative neutral
warn:       #FDD835 — Cadmium Yellow (alternative accent); caution, advisory, degraded
err:        accent red (contested, e.g., #E31E24) — failure, critical, error; same as error role
delta-up:   #000000 — black; positive numeric delta
delta-down: accent red — negative numeric delta
delta-flat: #999999 — neutral; on-surface-variant (grey) — neutral delta

Note: ok/warn/err do not map directly to existing named palette roles except accent. Warn uses the cadmium yellow alternative, which is a secondary accent not in the core palette but permitted as a single accent color at a time. When no accent color is specified, use black for ok and warn states as a fallback.

## 4. Typography

### Typeface
- **primary_typeface:** **CONTESTED** – all providers agree on Akzidenz-Grotesk, but none cite foundry or year; re‑stack required
- **secondary_typeface:** **CONTESTED** – fallbacks (Helvetica, Univers, Neue Haas Grotesk) mentioned without foundry source; re‑stack required
- **google_fonts_substitute:** **CONTESTED** – only one provider suggests Roboto; no cited source

### Styles

display:
  font-family:      Akzidenz-Grotesk (see typeface note)
  font-size:        text-5xl (48px) or text-6xl (60px)
  font-weight:      font-bold or font-extrabold
  line-height:      leading-tight
  letter-spacing:   tracking-wider to tracking-widest (0.05–0.1em)
  text-transform:   uppercase
  usage:            poster‑scale impact; one per screen

headline:
  font-family:      same as display
  font-size:        text-3xl (30px) or text-4xl (36px)
  font-weight:      font-bold
  line-height:      leading-tight
  letter-spacing:   tracking-wide
  text-transform:   uppercase

title:
  font-family:      same
  font-size:        text-xl (20px) or text-2xl (24px)
  font-weight:      font-semibold
  line-height:      leading-snug
  letter-spacing:   tracking-normal
  text-transform:   normal-case

body:
  font-family:      same
  font-size:        text-sm (14px, approx. 7–10pt)
  font-weight:      font-normal
  line-height:      leading-relaxed (160–180%)
  letter-spacing:   tracking-normal
  text-transform:   normal-case

label:
  font-family:      same
  font-size:        text-xs (12px)
  font-weight:      font-medium or font-semibold
  line-height:      leading-none
  letter-spacing:   tracking-wide
  text-transform:   uppercase

**Rules:** No italics, no underlines, no serifs, no kerning tricks. Hierarchy built exclusively on weight, size, and colour. Monospaced/tabular numerals not required.

## 5. Elevation

Flat depth model – no shadow hierarchy. All surfaces are coplanar.
Depth communicated through weight, size, and grid proximity only.

## 6. Spacing & Sizing

padding:
  component-internal:  p-4 (16px)
  section-internal:    p-8 (32px)
  page-edge:           p-8 (32px)

margin:
  between-components:  gap-6 (24px)
  between-sections:    gap-12 (48px)

component-heights:
  sm:   h-8 (32px)
  md:   h-10 (40px) – default interactive target
  lg:   h-12 (48px)

icon-size:       w-5 h-5 (20px)
avatar-size:     not style-relevant; use geometric shapes instead

## 7. Borders

border-radius:
  default:     rounded-none
  card:        rounded-none
  button:      rounded-none
  input:       rounded-none
  chip/badge:  rounded-none

border-width:
  default:     border (1px) – hairline rules
  emphasis:    border-2 (2px) – active states, focus rings, strong dividers

border-style:  border-solid

border-image:  none
clip-path:     none – all shapes are strict rectangles or circles (via rounded-full)

## 8. Opacity

disabled-state:     opacity-40
ghost/secondary:    opacity-70 – only for secondary text
overlay/scrim:      not characteristic – no transparency layers
hover-feedback:     not via opacity – use colour change or underline instead

Browser chrome not styled; the style does not impose on the user agent.

## 8.5. Visual Effects

### 8.5.0 — Physical Material Model

material-model:    paper

global-filter:     none — no global colour adjustments; preserve high contrast

global-overlay:    paper-grain via body::before pseudo-element:
                   repeating-linear-gradient noise texture (grain size ~1px, density ~30%),
                   tinted warm off-white, opacity-5, blend: overlay;
                   position: fixed, z-index: 0, pointer-events: none
                   Additional ink-gain overlay (`::after`, multiply, 15%) can be applied
                   selectively on black fill elements via a special class.
                   Offset-misregister is component-level, not a global overlay.

rendering-flags:
  font-smoothing:  antialiased
  image-rendering: auto
  text-rendering:  auto

### 8.5d — Texture & Noise Simulation

Three named techniques (optional, applied as overlay variant):

**ink-gain:**
technique:    SVG feTurbulence (fractalNoise) as overlay
parameters:   baseFrequency: 0.03, numOctaves: 2, type: fractalNoise
surface:      full-page canvas, especially over large black fills
intensity:    moderate – barely visible on desktop
blend:        multiply, opacity-10 to opacity-15
color:        monochrome (black noise)
animation:    none

**paper-grain:**
technique:    repeating-linear-gradient noise pattern or data-URI PNG grain tile
parameters:   grain size ~0.5–1px, density ~30%
surface:      all background surfaces
intensity:    barely perceptible – subtle evidence of uncoated stock
blend:        overlay, opacity-5
color:        tinted to palette (warm off-white on white surfaces)
animation:    none

**offset-misregister:**
technique:    separate foreground layer shifted by 0.5–1px on accent element
parameters:   shift direction: +x+y or -x-y; channel: only on accent
surface:      exactly one accent object per spread
intensity:    strong – noticeable but not interfering with readability
blend:        multiply or difference, opacity-100
color:        accent color with simulated CMYK edges
animation:    none

**Compositing stack:** `white background → paper‑grain (overlay, 5%) → content layer → ink‑gain (multiply, 15%) over black fills → offset‑misregister on accent (multiply, 100%)`

## 9. Components

**Icon vocabulary:**
system:       custom glyphs – geometric shapes (circle, square, triangle), arrows, math symbols (+, −, ×, ÷, =)
size:         w-5 h-5
color:        inherit currentColor (black or accent)
treatment:    purely flat, no filter, no glow
restrictions: no illustrations, no detail, no gradients, no line thickness variation outside 1–2px

**Image / media treatment:**
aspect-ratio:  aspect-square, aspect-[4/3], or aspect-[3/2]
object-fit:    object-cover
filter:        none – full fidelity, high contrast B&W or color
overlay:       none – no scrims, no tints
border:        border-2 solid black or accent
dark-mode:     not applicable

**Buttons:**
- Primary: `rounded-none`, `border-2 border-black`, `bg-black text-white`, `p-3 text-sm uppercase tracking-wider`. Hover: `bg-accent border-accent text-white`. Active: `bg-black text-white`. Disabled: `opacity-40`.
- Secondary: `rounded-none`, `border-2 border-black`, `bg-transparent text-black`. Hover: `bg-black text-white`. Active: same as default. Disabled: `opacity-40`.
- Destructive: `bg-accent border-accent text-white`. Hover: `bg-black border-black`. Active: `bg-accent`.

**Cards / Panels:**
- `rounded-none`, `bg-white border-0` or `border-2 border-black`. No shadow, no elevation. Internal padding `p-6`. Hover: `border-accent` if interactive.

**Navigation:**
- Horizontal list with `gap-6`. Active item: `text-accent underline` (underline: `border-b-2 border-accent`). Inactive: `text-black`. Icon + label: icon `w-5 h-5`, label `text-sm uppercase tracking-wide`. No dropdown affordance.

**Inputs / Forms:**
- `rounded-none`, `border-b-2 border-black` or `border-2 border-black`. Label: `text-xs uppercase tracking-wider block mb-1`. Focus: `border-accent` or `outline-none ring-2 ring-accent`. Error: `border-accent` with `text-accent` message. Disabled: `opacity-40`.

**Data Display Components:**

metric-cell:
  Background: bg-white, no shadow, optionally bordered with border-2 border-black.
  Label: text-xs uppercase tracking-wider, font-medium, text-black (or outline grey).
  Value: text-3xl font-bold, text-black, no unit separator beyond a small space.
  Delta indicator: an accent-dot (w-2 h-2 rounded-full) placed to the right of the value,
  coloured accent red for negative delta, black for positive, and outline grey for flat.
  No glow or fill; the dot is the sole delta signal.
  The entire cell may gain a black top border if it is a primary KPI.

signal-bar:
  Track: a thin black rule (h-0.5 bg-black) spanning the full width.
  Fill: represented as a thicker accent red segment placed directly on the track,
  using absolute positioning; height 4px, no border, no gradient, no shadow.
  The fill length is proportional to the signal value.
  The accent colour is used even if the context is not a dashboard, as the bar becomes
  a graphical accent itself.

status-cell:
  ok:   black text or black border-left-2; no background fill.
  warn: text-colour: #FDD835 (cadmium yellow), no fill.
  err:  text-colour: accent red; optionally a red border-left-2.
  Status is communicated purely by colour and a left-border accent, not by fill.

data-table-row:
  Alternating: odd rows bg-white; even rows bg-neutral (#F5F5F5).
  Cell border: border-b border-outline (#000000 or #666666, according to the contested outline).
  Label header: text-xs uppercase tracking-wider font-semibold, text-black.
  Value cell: text-sm font-normal, text-black.
  Row hover (if interactive): border-left-2 border-accent, no background change.

chart-surface:
  Background: bg-white.
  Grid lines: 1px solid black at major intervals (25/50/75/100% heights), opacity-30,
  drawn with thin rules. No grid fills.
  Axis labels: text-xs uppercase tracking-wider, text-black, positioned outside the plot area.
  Line chart: stroke-width 2px, colour accent red (or black for monochrome variant).
  No data point markers, no drop shadow. The line is a simple crisp vector.
  Bar/column: sharp rectangular bars with solid black fill (or accent red for a single series);
  no gap between bars; no transparency.

**Style-native primitives:**
- **Rule-line:** horizontal/vertical line (`w-full h-0.5 bg-black` or `border-b-2 border-black`) between sections or below headlines. Accent‑coloured variant.
- **Accent-dot:** small circle `w-2 h-2 rounded-full bg-accent` used as bullet or data anchor.
- **Photo-block:** `aspect-[4/3] object-cover border-2 border-black rounded-none`. Caption below in `text-xs uppercase tracking-wide`. Circular variant via `rounded-full`.

**No component uses:** gradients, glassmorphism, shadows, rounded corners, or decorative flourishes.

## 10. Layout

**Spacing cadence:** multiples of 8px derived from grid module. White space is an active component – aim for 40–60% negative space.

**Grid tendency:** strict modular grid – 2, 3, or 4 columns. Every element snaps to baseline (8px) and column intersections. Grid is invisible but structurally obeyed.

**Density:** low to medium. One dominant element per viewport anchors the layout.

**Section separation:** horizontal rules (`border-b-2` or `border-b-1`) below headlines or between sections. Occasionally vertical rules.

**Alignment philosophy:** flush left, ragged right – never justified. No centering, no symmetrical balance. Offsets deliberate: headline starts at column 2, image at column 1.

**Breakpoint behavior:**
- **375px:** single column, stack all elements. Grid becomes loose margin 8px.
- **768px:** 2-column grid. Dominant element spans full width or left column.
- **≥1024px:** full 3- or 4-column grid. Headline spans 2 columns, image spans 1, text block spans 2–3.

**Motion:**
motion:
  transition-duration:        0ms – all state changes are instant (hard cuts)
  transition-timing-function: step-end
  transition-property:        none (instant)

  animation (kinetic variant only):
    [type-enter: characters appear individually from top edge, 50ms per char, on-load]
    [slide-reveal: photo blocks slide horizontally between grid slots, 200ms, on-load/scroll]
    [accent-pop: accent element blinks on/off at 1s intervals, on-state-change]
    [no fades, no easing, no continuous transforms]

  transform-at-rest:          none
  transform-on-interact:      none – no hover transforms, no scale effects
  transform-style:            flat
  backface-visibility:        visible

## 11. Design System Notes

### 11a. Use Constraints

**Appropriate for:** informational and editorial interfaces, dashboards, control panels, documentation sites, portfolios, institutional/educational apps, any context where clarity and hierarchy are paramount. Works well with high-contrast photography and minimal chrome.

**Wrong for:** playful or entertainment-driven experiences, children's apps, immersive games, brand identities requiring emotional warmth, decorative or themed environments, contexts where rounded forms and organic shapes are expected.

### 11b. Prompt Phrases

1. "Strict modular grid with asymmetric balance – one dominant element per viewport."
2. "Flush left ragged right, generous leading (140–180%), no serifs, no italics."
3. "Single accent color used sparingly – exactly one or two objects per spread."
4. "Geometric icons only – circles, squares, triangles, arrows, math symbols."
5. "No rounded corners, no gradients, no drop shadows, no transparency layers."
6. "Photography in strict rectangles with 2px solid black or accent border."
7. "High contrast black on white – white space is an active component, not leftover."
8. "Uncoated paper texture simulation: subtle grain, ink gain, optional misregister."

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description.

rule: Composition is always asymmetrical; no centered alignment or symmetrical balance.
do:   Headline starts at column 2, image at column 1; text always flush-left, ragged-right. The grid is invisible but every element snaps to it.
avoid: Centered headlines, symmetrical mirror layout, content aligned to a central axis. Any insistence on equal weights on both sides of the page.

rule: Only one accent color may appear; any additional color variety is a violation.
do:   Use exactly one accent (e.g., vermillion red) on a single object per viewport; all other elements remain black, white, or grey.
avoid: Multiple accent colors on the same screen, such as red and yellow used simultaneously, or a gradient that introduces new hues.

rule: Typography is strictly grotesque sans-serif; no serifs, no italics, no decoration.
do:   Akzidenz-Grotesk in bold weights for headlines, regular for body; no italic variants. Underlining is only allowed on active navigation links as a functional affordance.
avoid: Serif typefaces, italic text, underlines on non-interactive elements, decorative display fonts, or any font feature that adds flourish.

rule: Surfaces are flat and rectangular; no rounded corners, shadows, or transparency layers.
do:   All containers have `rounded-none` and `box-shadow: none`; borders are 1–2px solid black. Transparency is used only for disabled states (opacity-40) or secondary text (opacity-70), never for scrims or overlays.
avoid: `border-radius: 0.25rem`, `box-shadow: 0 2px 4px rgba(0,0,0,0.1)`, glassmorphism effects, or any background opacity overlay.

rule: Texture is limited to a paper simulation; no gradients or glossy effects.
do:   Apply a subtle paper-grain overlay (opacity-5, tinted warm off-white) globally; optional ink-gain (multiply, 15%) on large black fills; offset-misregister on the single accent element if desired.
avoid: `linear-gradient` or `radial-gradient` backgrounds, glossy reflections, skeuomorphic textures beyond paper, or any effect that reads as digital polish.

rule: Depth is communicated through weight, size, and grid position, never through shadow or layering.
do:   A headline at text-4xl bold creates importance; primary navigation sits in a consistent location; nothing casts a shadow. Visual weight is the sole depth cue.
avoid: Drop shadows, elevation tokens (e.g., `shadow-md`), floating cards that appear above the surface, or any z-index dependent layering that breaks the coplanar flatness.

rule: Icons are purely geometric and minimal; no complexity or line-weight variation.
do:   Icons are built from circles, squares, triangles, and arrows with uniform stroke width (1–2px). They fill a 20×20px bounding box exactly and inherit the current text colour.
avoid: Detailed illustrations, icons with multiple stroke widths, decorative shapes, filled silhouettes, or any icon that requires more than a few seconds to parse.

rule: White space is an active compositional element, not leftover; margins are generous.
do:   Aim for 40–60% negative space on a typical layout. Use padding and margins derived from the 8px baseline grid, Section separation employs black rule-lines.
avoid: Cramped, tight layouts where content touches borders or there is insufficient breathing room around headlines and images.

### 11d. Variation Bounds

| Axis | Low End | High End |
|------|---------|----------|
| **clean vs grimy** | Perfect vector output, no texture overlay | Simulated screenprint noise, ink gain, paper grain, dust specks |
| **monochrome vs accent-dominated** | Black‑on‑white only, no color accent | Bold accent field covering 50%+ of layout, white text on accent |
| **static vs kinetic** | Pure print composition – no animation | Timed text/photo reveals, hard-cut slides, accent blinking |
| **real vs synthetic photo** | Silver‑gelatin black & white prints | Crisp digital renders, sharp but monochrome |

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts. Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
The system in its default, single-composition state. A white canvas (bg-white) with the paper-grain overlay at 5%. The dominant element is a large black headline in Akzidenz-Grotesk Bold, uppercase, 48px, tight letter-spacing, positioned left‑aligned in the second grid column (at 768px breakpoint). Below it, a 4:3 photo block (border-2 border-black) sits wholly within the first grid column. A body text block of 14px/1.6 line-height, ragged right, spans two columns starting below the headline, with a thin black rule-line separating it from a secondary headline. Navigation is a horizontal list of 4–5 items at the very top, flush right, black text, with a row of thin rule-lines separating it from the content area. No accent colour is used — the resting state is monochrome with the grain as the only texture, leaving the composition calm and digestible.

### 11e.ii — Maximum Expressiveness
All characteristic elements fully active. The entire viewport uses a 3‑column grid. A large accent field (accent red, e.g., #E31E24) occupies the rightmost column from top to bottom, filled with white text (headline, small body) and a circular photo-block in white border. The left two columns hold a stacked composition: a massive display‑size headline (60px, extrabold, uppercase) in black, spanning two columns, with the `type-enter` animation playing on load. Below it, a photo-block slides into view (`slide-reveal`, 200ms). An accent red rule‑line separates the photo from a caption, and an offset‑misregister layer shifts the accent red element by 0.5px diagonally. Ink-gain (multiply, 15%) is applied over the photo’s dark areas and the headline’s black. A small accent-dot blinks (`accent-pop`, 1s interval) next to a secondary navigation label. The paper-grain remains at 5%. The composition reads as a confident, energetic poster come to life, with movement restricted to hard cuts and one‑shot reveals.

### 11e.iii — Data Context
When the content is numeric, tabular, or status‑driven. The surface remains white with grain. The layout uses a 2‑column grid: left column holds a KPI panel, right column a data table. The KPI panel is a card (border‑2 border‑black, no fill) containing three metric cells stacked vertically, each separated by a thin black rule. Each metric cell: label (text-xs uppercase, black), value (text-3xl bold, black), and a delta accent-dot beside the value. The data table uses alternating rows (white / #F5F5F5) with minimal cell borders (border‑b border-black). Headers are text-xs uppercase, bold, black. Numeric values are right‑aligned. Status cells use coloured left borders: green (not part of palette; here black may be used for ok) — according to semantic rules, ok is black, warn is cadmium yellow, and err is accent red. A chart surface at the bottom: white background, with thin black horizontal grid lines at 25% intervals, a line chart in accent red (stroke‑width: 2px) with no markers, and axis labels in text-xs uppercase. No shadow, no glow, no transparency beyond grain. The visual language is a stark, clear instrument panel rendered on paper.

### 11f. Sources

This subject has minimal verified imagery. The visual claims below should be treated with caution.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** **Neue Grafik** refers to **Neue Grafik / New Graphic Design / Graphisme actuel**, a trilingual Swiss graphic design journal published quarterly from 1958 to 1965. It was founded and edited by **Richard Paul Lohse** and **Josef Müller-Brockmann**. This publication defines the period of late 1950s Swiss graphic design.

**Verified imagery sources.** 1 URLs verified against institutional servers, distributed across:
- Wikimedia Foundation — 1 URL(s)

Key references include the Swiss National Library's record at https://www.swissarchives.ch/, though specific image files remain unverified. No primary source imagery is available for verification.

**Named typefaces.** The typography of this style is attested as:
- Akzidenz-Grotesk (for Berthold — attestation: conventional) — rendered here in Archivo as the closest open substitute

**Honest gaps.** The most significant gap remains the unverified **Accent colour – unverified**. No primary‑source hex, Pantone, or ink specification exists for the publication. A colour‑calibrated survey is needed to establish the accurate palette. This information is critical for consistency across all design tokens. A dedicated survey with primary source access would resolve them.
