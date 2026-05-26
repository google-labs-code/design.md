---
version: alpha
name: "Massimo Vignelli"
description: "A direct translation of the Swiss Modernist typographic canon into a UI language, radiating rational authority through extreme restraint: geometric forms, a three-color palette, and a single sans-serif family bound to a modular grid."
colors:
  on-primary: "#FFFFFF"
  on-secondary: "#FFFFFF"
  tertiary: "#FFD100"
  on-tertiary: "#000000"
  surface: "#FFFFFF"
  on-surface: "#000000"
  outline: "#000000"
typography:
  display:
    fontFamily: "Helvetica, 'Neue Haas Grotesk', Arial, sans-serif"
    fontSize: "48px"
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  headline:
    fontFamily: "Helvetica, 'Neue Haas Grotesk', Arial, sans-serif"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  title:
    fontFamily: "Helvetica, 'Neue Haas Grotesk', Arial, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.375
    letterSpacing: "0em"
    textTransform: "uppercase"
  body:
    fontFamily: "Helvetica, 'Neue Haas Grotesk', Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "0em"
  label:
    fontFamily: "Helvetica, 'Neue Haas Grotesk', Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "0.05em"
    textTransform: "uppercase"
rounded:
  default: "0px"
  card: "0px"
  button: "0px"
  input: "0px"
  chip: "0px"
spacing:
  component-internal: "8px"
  section-internal: "24px"
  page-edge: "24px"
  gap-component: "16px"
  gap-section: "48px"
  height-sm: "32px"
  height-md: "40px"
  height-lg: "48px"
  icon: "20px"
components:
  button-primary:
    backgroundColor: "#C8102E"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.button}"
    padding: "8px 16px"
    height: "40px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "#C8102E"
    rounded: "{rounded.button}"
    padding: "8px 16px"
    height: "40px"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "16px"
  input:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.input}"
    padding: "8px"
  data-table-row:
    backgroundColor: "{colors.surface}"
    height: "40px"
  metric-cell:
    backgroundColor: "#F5F5F5"
    padding: "16px"
  signal-bar-track:
    backgroundColor: "transparent"
    height: "12px"
  signal-bar-fill:
    backgroundColor: "#005BAA"
    height: "12px"
  status-cell-ok:
    textColor: "#005BAA"
  status-cell-warn:
    textColor: "{colors.tertiary}"
  status-cell-err:
    textColor: "#C8102E"
provenance:
  coverage_status: "sparse"
  identity_description: "The slug `massimo-vignelli` refers to the Italian-born designer Massimo Vignelli (1931–2014) and, by extension, the visual identity system he developed for his own practice (both as partner at Unimark International and as co-founder of Vignelli Associates). This record captures the enduring visual language he employed across his graphic, environmental, and product design work — a modernist sys"
  manual_enrichment_required: false
  imagery_count: 3
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "www.lars-mueller-publishers.com"
      count: 1
    - host: "en.wikipedia.org"
      count: 1
    - host: "www.cooperhewitt.org"
      count: 1
  imagery_urls:
    - url: "https://www.lars-mueller-publishers.com/vignelli-canon"
      host: "www.lars-mueller-publishers.com"
      institution: "Lars Müller Publishers"
      confidence_original: low
    - url: "https://en.wikipedia.org/wiki/American_Airlines"
      host: "en.wikipedia.org"
      institution: null
      confidence_original: high
    - url: "https://www.cooperhewitt.org/"
      host: "www.cooperhewitt.org"
      institution: "Cooper Hewitt"
      confidence_original: low
  typefaces_attested:
    - name: "Helvetica"
      foundry: "Haas Type Foundry"
      year: 1957
      google_fonts: "Inter"
      attestation: "attested"
    - name: "Bodoni"
      foundry: "Linotype/Stempel"
      year: 1790
      google_fonts: "Playfair Display"
      attestation: "unverified"
    - name: "Futura"
      foundry: "Bauer"
      year: 1927
      google_fonts: "Jost"
      attestation: "attested"
    - name: "Times New Roman"
      foundry: "Monotype"
      year: 1932
      google_fonts: "Tinos"
      attestation: "unknown"
  flags:
    - "sparse_imagery"
    - "1_rate_limited_urls_pending_retry"
  honest_gaps:
    - "1. **Colour hex codes for Vignelli’s six-colour palette** — unverified. No primary source provides RGB/hex values. Resolved by spectrophotometric reading of a primary artefact (e.g., a mint Stendig Calendar)."
---
# Design System: Massimo Vignelli

## 0. Taxonomy & Identity
entity-type:            interface / system / environment
artefact-family:        operating system / software UI
technique:              digital vector
movement-lineage:       design movement
era:                    postwar
geography:              central europe
domain:                 publishing / media / music
formal-traits:          grid-based, asymmetric, geometric, minimal
color-logic:            spot-color
typography-mode:        geometric sans
texture:                smooth, matte
function:               inform
provenance:             studio lineage

## 1. Overview

The Massimo Vignelli design system is a direct translation of the Swiss Modernist typographic canon into a UI language. It radiates rational authority through extreme restraint: only geometric forms, a three-color palette at most, and a single sans-serif family set in strict allegiance to a modular grid. Every pixel carries a functional reason – empty space is an active compositional force, never a void to be filled. The style demands that information hierarchy emerge from scale, position, and colour alone, never from ornament, imagery, or decorative flourish.

The system is unmistakably recognisable by its large, bold, all-caps sans-serif headlines; its asymmetric but grid‑anchored layouts; its preference for primary red, yellow, blue against black and white; and its absolute refusal of rounded corners, shadows, gradients, photography, organic curves, or any non‑functional visual effect. Breaking the style means introducing anything decorative, curving a corner, adding a drop shadow, or straying from the baseline grid.

- **Emotional tone:** Rational, authoritative, serene, unapologetically printed.
- **Era/lineage:** Postwar Swiss Modernism (1950s–1970s), deeply tied to Massimo Vignelli's collaborative practice.
- **Density level:** Alternates between spacious (sparse layouts) and information‑packed (dense modular fields), but always breathing.
- **Core rendering philosophy:** Essential geometry — strip away everything until only the necessary remains.
- **What makes it recognisable:** Large sans-serif type dominating the canvas, strict modular grid, primary spot colours, absence of imagery, thin rule dividers.
- **What would break it:** Any ornament, rounded corners, gradients, drop shadows, photographic images, organic curves, justified text, centred alignment, decorative icons.
- **Surface character:** Surgically flat with a subtle matte hint – uncoated stock implied by a very faint halftone (15–20% black) on large areas, only when analog emulation is needed.

## 2. Constants
- Light Mode: primary (white background, black type, spot‑colour accents)
- Dark Mode: variant (black background, white type, spot‑colour accents — swap logic: invert surface and text, keep accent colours same)
- Responsive: yes — grid requires breakpoint adaptation (see §10)
- States: Default, Active, Disabled (no Hover or Focus unless functional; no Error state as a separate colour unless palette permits)
surface-simulation: paper — uncoated stock, faint halftone (15–20% black) on large areas when analog emulation is needed; otherwise clean flat digital

## 2a — Interaction Model

hover-delta:        color-shift — text or background swaps instantly to a different flat colour; no opacity shift, no movement, no shadow lift
active-delta:       color-shift — active state inverts fill and text (e.g. primary fill → white text becomes black fill → primary text) or swaps to the other spot colour
focus-style:        color-border — full thin border (1px solid primary) appears on focus for inputs; or bottom border thickens to 2px for form fields
transition-duration:100ms — instant; all state changes are mechanical, no easing
transition-easing:  linear
exempt-animations:  slide-in-from-left, slide-in-from-top, color-swap

## 3. Colors
primary              CONTESTED:§2.hex_primary — providers gave [#C8102E / #C8102E / #DA291C / #D12126 / #E31E24]; no majority; re-stack required
on-primary           (#FFFFFF) — White: text on primary
secondary            CONTESTED:§2.hex_secondary — providers gave [#005BAA / #005EB8 / #0072CE / #0067B1 / #005A9C]; no majority; re-stack required
on-secondary         (#FFFFFF) — White: text on secondary
tertiary (#FFD100) [attested] — Vignelli Yellow: optional accent, caution or highlight (3 of 5 providers agree; used by crof-glm-5.1-precision, crof-kimi-k2.6-precision, deepseek)
on-tertiary          (#000000) — Black on Yellow: text on tertiary
surface              (#FFFFFF) — White: primary background (all providers agree)
on-surface           (#000000) — Black: default text, icon colour (all providers agree)
outline              (#000000) — Black: hairline rules and borders (majority agree; some use dark grey)
**Dark mode swap table:**
surface → #000000
on-surface → #FFFFFF
outline → #FFFFFF (or keep primary for coloured rules)

Semantic state colors:
ok:         secondary — blue role (CONTESTED hex, re-stack pending); used for confirmed, nominal, live state
warn:       tertiary (#FFD100) — Vignelli Yellow; used for caution, advisory, pending
err:        primary — red role (CONTESTED hex, re-stack pending); used for failure, critical, error — same as the error role implied by primary's function
delta-up:   secondary — blue role; positive numeric delta rendered in the system's calm, authoritative accent
delta-down: primary — red role; negative numeric delta rendered in the system's alert accent
delta-flat: outline (#000000) — black; neutral delta rendered as a thin rule or outline colour

Note: All semantic states map directly to existing palette roles. No non-palette colours are introduced — consistent with Vignelli's spot-colour discipline.

## 4. Typography
display:
  font-family:      CONTESTED:§3.primary_typeface — all providers agree on Helvetica/Neue Haas Grotesk but none cite foundry or source; re-stack required
  font-size:        text-5xl to text-7xl (headlines covering up to half the canvas)
  font-weight:      font-bold
  line-height:      leading-tight (1.0–1.2)
  letter-spacing:   tracking-tight or tracking-normal
  text-transform:   uppercase
  text-decoration:  none

headline:
  font-family:      [as above]
  font-size:        text-3xl to text-5xl
  font-weight:      font-bold
  line-height:      leading-tight
  letter-spacing:   tracking-tight
  text-transform:   uppercase

title:
  font-family:      [as above]
  font-size:        text-2xl
  font-weight:      font-semibold to font-bold
  line-height:      leading-snug
  letter-spacing:   tracking-normal
  text-transform:   uppercase (or normal-case; providers disagree)

body:
  font-family:      [as above] (or Bodoni for editorial variant — see below)
  font-size:        text-base
  font-weight:      font-normal
  line-height:      leading-relaxed (1.5–2.0)
  letter-spacing:   tracking-normal
  text-transform:   normal-case

label:
  font-family:      [as above]
  font-size:        text-xs to text-sm
  font-weight:      font-bold
  line-height:      leading-normal
  letter-spacing:   tracking-wide or tracking-wider
  text-transform:   uppercase
**Editorial variant (optional):** body may substitute with Bodoni (Book weight) while all other roles remain Helvetica. No other typefaces are permitted.

**Type rules:** Maximum 2–3 type sizes per composition. Left‑aligned only; centred only for single short lines. No justified text. No hyphenation. Kerning is tight and optical.

## 5. Elevation
Flat depth model — no shadow hierarchy. All elements sit on the same plane. Use `shadow-none` for all surfaces. Stacking context is unnecessary (single plane).

## 6. Spacing & Sizing
padding:
  component-internal:  p-2 (8px) or p-3 (12px) – 8pt increments
  section-internal:    p-6 (24px) or p-8 (32px)
  page-edge:           p-6 (24px) to p-12 (48px) – generous, never touching canvas edge

margin:
  between-components:  gap-4 to gap-6 (16–24px)
  between-sections:    gap-12 to gap-16 (48–64px)

component-heights:
  sm:   h-8 (32px)
  md:   h-10 (40px) — default interactive target
  lg:   h-12 (48px)

icon-size:       w-5 h-5 (20px) to w-6 h-6 (24px)
avatar-size:     avoid; if used, initials in bold Helvetica
All values snap to baseline grid of 4pt or 8pt increments.

## 7. Borders
border-radius:
  default:     rounded-none
  card:        rounded-none
  button:      rounded-none
  input:       rounded-none
  chip/badge:  rounded-none

border-width:
  default:     border (1px) for hairline rules
  emphasis:    border-2 for strong dividers, active focus (input bottom border)

border-style:  border-solid
border-image:  none
clip-path:     not used for borders; diagonal bands use rotated linear-gradient or transform

## 8. Opacity
disabled-state:     opacity-40 to opacity-50
ghost/secondary:    not applicable (avoid using opacity; prefer colour substitution)
overlay/scrim:      not used — surfaces remain fully opaque
hover-feedback:     no opacity-based hover — instant colour swap
**Browser chrome** (not style-relevant): omit.

### 8.5.0 — Physical Material Model

Declares the top-level surface simulation governing the entire page canvas.
This is distinct from component-level textures — it is the global rendering layer.

material-model:    paper

global-filter:     none in default mode; optional sepia(0.02) contrast(0.97) when analog
                   uncoated-stock emulation is activated — simulates the warm, slightly
                   absorptive substrate of matte book paper

global-overlay:    Optional faint halftone via body::after pseudo-element when analog
                   emulation is enabled:
                   repeating-conic-gradient(rgba(0,0,0,0.015) 0% 25%, transparent 0% 50%)
                   background-size: 2px 2px, blend: multiply, opacity-15, pointer-events:none,
                   position:fixed, z-index:9999
                   In default (clean digital) mode: none

rendering-flags:
  font-smoothing:  antialiased — Helvetica renders crisply at all sizes with subpixel hinting
  image-rendering: auto — no pixelation; photographic assets use standard interpolation
  text-rendering:  auto

## 9. Components

### Icon vocabulary
icon-vocabulary:
  system:       Euclidean primitives — circles, squares, triangles, lines only. No pictograms, no people, no organic curves. Geometric monoline (stroke‑width 1.5–2px) or solid block shapes. Labels and numerals preferred over symbols.
  size:         w-5 h-5 (20px) to w-6 h-6 (24px)
  colour:       inherits currentColor or fixed role (primary, neutral)
  treatment:    no filters, no glow, no animation, no stroke-weight variation
  restrictions: no illustrations, no multi-coloured icons, no gradients, no rounded corners

### Buttons
- Primary: flat rectangle, background primary (red), text white (on-primary), font-bold uppercase, rounded-none, border-0. Hover: instant swap to secondary or black. Active: same or inverted. Disabled: opacity-40, no colour change.
- Secondary: outline with border-2, text primary, bg-transparent, rounded-none. Active: fill primary, text white. Disabled: opacity-40.
- Destructive: same as primary but uses primary background with white text.

### Cards / Panels
- Fill: surface (white) or surface-container (light grey tint #F5F5F5).
- Border: thin hairline rule (1px solid outline) OR change in background tint. rounded-none.
- Elevation: none.
- Internal structure: consistent inner padding (p-4 to p-6), clear grid alignment.

### Navigation
- Horizontal row of all-caps Helvetica words, no dividers. Generous spacing between items (gap-6 to gap-8). Active state: bold weight or primary colour. No background highlight.

### Inputs / Forms
- Border: bottom-only hairline rule (border-b 1px solid black). No top, right, left borders. Focus: full thin border (border 1px solid primary) or bottom thickens to 2px. No round corners. Label above input in uppercase label style.

### Style-native primitives
- **Thick horizontal rule:** 2–4px black or primary stripe across full column width to establish axis.
- **45° diagonal bands:** Solid primary or secondary colour stripe rotated 45°, used sparingly to separate functional zones.
- **Modular grid blocks:** Rectangular fields of consistent margin/padding, staggered to create rhythm.

### Image treatment (informational only)
- aspect-ratio: natural (rectangular).
- object-fit: contain or cover (no cropping).
- filter: none.
- overlay: none.
- border: hairline rule (1px) or none.
- dark-mode: invert if needed.

**Data Display Components:**

metric-cell:
  Background: surface (white) or surface-container (#F5F5F5 light grey tint). No grain, no texture in default mode.
  Border: hairline rule (1px solid outline) on bottom edge only — consistent with input border treatment.
  Label: Helvetica bold uppercase, text-xs to text-sm, tracking-wider, outline colour (#000000).
  Value: Helvetica bold, text-3xl to text-5xl, all-caps, on-surface (#000000). The value is the compositional anchor of the cell.
  Delta: Helvetica bold, text-sm, all-caps. Positive delta in secondary (blue role), negative delta in primary (red role). No icon — the colour and ± prefix signal direction.
  No glow, no drop-shadow, no background fill variation — a flat typographic statement.

signal-bar:
  Track: 1px solid outline (#000000) — a thin hairline rule running the width of the container.
  Fill: solid secondary (blue role). Height: 12px (h-3). No rounding — track and fill are flat rectangles.
  Border: none on the fill. The track is the rule; the fill sits flush against it.
  No glow, no gradient, no texture on fill — a flat colour block on a ruled line.

status-cell:
  ok:   text in secondary (blue role) — the blue ink of a confirmed entry. No border, no fill. Text only.
  warn: text in tertiary (#FFD100) — Vignelli Yellow. No border, no fill. Text only.
  err:  text in primary (red role) — the red ink of a critical alert. No border, no fill. Text only.
  Fill: always transparent. Status is communicated exclusively by text colour — consistent with Vignelli's refusal of decorative background highlights.

data-table-row:
  Alternating: no alternating background — all rows share surface (white) or surface-container (#F5F5F5) as a group. If alternation is needed, switch the entire group's tint.
  Cell border: border-b border-outline (1px solid #000000) — a hairline rule below each row.
  Label: Helvetica bold uppercase, text-xs, tracking-wider, outline colour.
  Value: Helvetica bold, text-sm, all-caps or regular case, on-surface (#000000).
  No row-level hover effects. Instant colour swap on active cell only.

chart-surface:
  Background: surface-container (#F5F5F5) — a light grey field distinct from the white page body, like a printed chart plate.
  Grid lines: 1px solid outline (#000000) at 25/50/75/100% heights. No vertical grid lines.
  Axis labels: Helvetica bold uppercase, text-xs, tracking-wider, outline colour (#000000).
  Data line: secondary (blue role), stroke-width 1.5px, no drop-shadow, no rounding on inflection points.
  Data points: secondary (blue role), r=3px, no fill — or filled white with secondary stroke. No glow.

## 10. Layout
- **Spacing cadence:** Baseline grid of 4pt or 8pt increments. All margins, padding, and element heights are multiples of the base increment (8pt preferred). Generous internal breathing room – no element touches canvas edge.
- **Grid tendency:** Strict modular grid – 2, 3, 4, or 6 columns. Asymmetric balance enforced by grid position, not symmetry. Elements snap to grid lines. Grid can be staggered to create rhythm.
- **Density:** Can be sparse (one large type element on mostly empty canvas) or information‑packed (dense rectangular fields). Both extremes valid.
- **Section separation:** Large gaps (48–64px) between sections, often reinforced by a thick horizontal rule or diagonal band.
- **Alignment philosophy:** Left-aligned or grid-aligned; never justified, never centred unless single short line.
- **Breakpoint behaviour:** At 375px: single‑column stack, all elements collapse to one column. At 768px: 2–4 column grid re-engages. At 1024px+: 4–6 column grid with generous gaps. Asymmetric restructuring.
- **Motion block:**
motion:
  transition-duration:        100ms (instant) – for colour changes, position shifts
  transition-timing-function: linear – mechanical, no easing
  transition-property:        color, background-color, border-color, opacity, transform
  transition-delay:           none

  animation:
    slide-in-from-left: transform translateX(-100%)→translateX(0) over 100ms linear, trigger: on-load
    slide-in-from-top:  transform translateY(-100%)→translateY(0) over 100ms linear, trigger: on-load
    color-swap:         background-color→background-color over 100ms linear, trigger: on-active/state-change

  transform-at-rest: none
  transform-on-interact: none – no hover/active transforms
  transform-style: flat
  backface-visibility: hidden (only if card-flip, discouraged)
No parallax, no fading, no scaling, no letter-by-letter animation.

## 11. Design System Notes

### 11a. Use Constraints
This system is appropriate for editorial platforms, corporate documentation, museum exhibition guides, transport information systems, data dashboards, and any interface where clarity, hierarchy, and functional minimalism are paramount.

It is wrong for playful consumer apps, social media platforms, e‑commerce product pages requiring high emotional engagement, games, or any context that demands illustration, photography, organic shapes, or a friendly/dynamic tone.

### 11b. Prompt Phrases
1. "Strip to essential geometry"
2. "Grid as grammar – snap every element"
3. "Primary colour as function, never decoration"
4. "White space is an active force"
5. "Type is image – large, bold, all‑caps"
6. "No ornament – only information"
7. "Asymmetric balance from grid position"
8. "Helvetica or nothing (unless editorial body, then Bodoni)"

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description. Minimum 4 rules, maximum 8.

Format per rule:
rule: [The constraint stated as a principle — what the system enforces and why it matters]
do:   [Describe the correct rendering — specific enough to build live HTML from this description.
       Name the exact color, font, treatment, geometry.]
avoid:[Describe the incorrect rendering — name the specific wrong choice, not "avoid X in general".]
```

```
rule: The modular grid is the absolute grammar — every element must snap to column lines and baseline increments; asymmetry is achieved through grid position, not through arbitrary offset.
do:   Use a strict modular grid (2–6 columns) and snap all elements to it. Align all text to a baseline grid — left-aligned or grid-aligned. Group content into rectangular fields with consistent padding.
avoid:Justified text, hyphenation, widows — break lines manually. Never centre unless a single short line. Do not place elements outside the grid or rely on symmetry for balance.

rule: Colour is a functional tool, never decorative — limit to 2–4 flat spot colours from the approved palette (red, blue, yellow, black, white), each assigned a clear communicative role.
do:   Use only 2–4 flat spot colours (red, blue, yellow, black, white). Apply colour to signal hierarchy, category, or status — never for ornament. Each colour carries a defined function.
avoid:Rounded corners, drop shadows, gradients, or any 3D effect. Photography, illustrations, organic curves, or human figures. Applying colour without a functional reason.

rule: Typography carries the visual weight — large, bold, all‑caps Helvetica (Neue Haas Grotesk) is the primary image; use only 2–3 type sizes per composition to maintain disciplined hierarchy.
do:   Set type in Helvetica (Neue Haas Grotesk) — all‑caps for display and headline, regular case for body. Use only 2–3 type sizes per composition. Let type fill the canvas as the dominant graphic element.
avoid:Decorative icons — prefer type and geometric primitives over any pictogram. Mixing typefaces — one sans (Helvetica) per composition; allow one serif (Bodoni) for editorial body only. Never use script, slab, or display faces.

rule: White space is an active compositional force — generous margins create breathing room and tension; no element touches the canvas edge, and sections are separated by large gaps reinforced by thin rules.
do:   Use generous margins (24–48px page edge, 48–64px between sections). Reinforce section separation with a thick horizontal rule (2–4px black or primary) or a 45° diagonal band. No element touches the canvas edge.
avoid:Hover effects that move elements; prefer instant colour swaps. Fading, scaling, or parallax animations — use only slid‑in or instant swaps (100ms linear). Do not fill the canvas edge-to-edge.

### 11d. Variation Bounds
1. **Sparse vs. dense layout:** From a single huge type element dominating white space to a tightly packed grid of informational blocks – both valid; no in‑between.
2. **Pure 2‑colour (black + red) vs. full 4‑colour (black + white + two primaries):** Choose either minimal contrast or wider palette; never add a third primary without purpose.
3. **Helvetica‑only vs. Bodoni for body text:** For editorial-heavy interfaces, substitute Bodoni or Century for body; keep display/headline in Helvetica. Never mix more than one family.
4. **Perfect registration vs. slight misregistration:** Optionally apply 0.25–0.5pt offset between colour plates to emulate analog offset printing – only when the design aims for vintage print realism. Otherwise, perfect alignment.

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts.
Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
A single all-caps Helvetica bold headline (text-6xl, tracking-tight) in on-surface (#000000) occupies the upper-left quadrant of a white surface (#FFFFFF) canvas, aligned to a 4-column modular grid. Below it, a 2px thick horizontal rule in primary (red role) spans the full column width at the grid's third column line, creating an asymmetrical axis. A short body text block (Helvetica regular, text-base, leading-relaxed) sits 48px below the rule, left-aligned to the first column. The page edge margin is 48px (p-12) all around. No imagery, no secondary colour, no decoration — only type and a single ruled line on white space. The composition breathes.

### 11e.ii — Maximum Expressiveness
Six rectangular grid blocks fill a 4-column layout on surface (#FFFFFF), each with consistent p-6 internal padding. The top block spans all 4 columns: a headline in primary (red role), text-7xl all-caps Helvetica bold. Below, two 2-column blocks sit side by side — the left in secondary (blue role) background with white all-caps label text, the right in surface-container (#F5F5F5) with on-surface body text. A 45° diagonal band in primary (red role) cuts across the lower third of the composition, separating a full-width footer block. Thin horizontal rules (1px solid outline) run between every grid row. The hierarchy is strict: scale and colour position the reader, never ornament. No element bleeds off the canvas edge. Generous 64px gaps between sections. No animation in the static composition.

### 11e.iii — Data Context
A data table rendered as a rectangular field on surface-container (#F5F5F5) fills columns 2–4 of the 4-column grid, while column 1 holds a vertical row of Helvetica bold uppercase metric labels (text-xs, tracking-wider, outline #000000). Each data row is separated by a 1px hairline rule in outline (#000000). Metric values are Helvetica bold text-xl in on-surface (#000000). Status indicators are text-only — ok in secondary (blue role), warn in tertiary (#FFD100), err in primary (red role) — with no background fill, no icon, no border. At the bottom of the field, a signal-bar track (1px solid outline, full width) carries a secondary-coloured fill bar at the proportional width of the channel metric. Axis labels below the bar are Helvetica bold uppercase text-xs in outline. The entire data composition is flat, ruled, and typographic — no chart surfaces, no colour fills beyond the bar, no glow.

### 11f. Sources

Imagery coverage is sparse — only 3 institutional records verified.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** (Prose generation failed — see provenance block for attribution data.)

**Verified imagery sources.** 3 URLs verified against institutional servers, distributed across:
- Lars Müller Publishers — 1 URL(s)
- en.wikipedia.org — 1 URL(s)
- Cooper Hewitt — 1 URL(s)

**Named typefaces.** The typography of this style is attested as:
- Helvetica (designed by Max Miedinger for Haas Type Foundry 1957 — attestation: attested) — rendered here in Inter as the closest open substitute
- Bodoni (designed by Giambattista Bodoni for Linotype/Stempel 1790 — attestation: unverified) — rendered here in Playfair Display as the closest open substitute
- Futura (designed by Paul Renner for Bauer 1927 — attestation: attested) — rendered here in Jost as the closest open substitute
- Times New Roman (designed by Stanley Morison for Monotype 1932 — attestation: unknown) — rendered here in Tinos as the closest open substitute

**Honest gaps.** (No documented gaps were recorded by the forensic pipeline.)
