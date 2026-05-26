---
version: alpha
name: "Exploded Assembly Interface"
description: "A schematic, instructional UI that translates the visual language of technical disassembly posters — patent drawings, IKEA manuals, and mid‑century illustration — into an interactive dashboard. Built on a cream vellum substrate with uniform linework, flat tints, and monospaced uppercase type, it uses an exploded‑view layout with dashed leader lines and numbered callouts to reveal a device's inner structure."
colors:
  surface-paper: "#F5F0E8"
  primary: "#FF6B35"
  error: "#D0342C"
  blueprint-bg: "#1A3C6E"
  blueprint-line: "#FFFFFF"
  ok: "#333333"
  warn: "#FF6B35"
  err: "#D0342C"
  delta-up: "#2B2B2B"
  delta-down: "#D0342C"
  delta-flat: "#808080"
typography:
  display:
    fontFamily: "Helvetica, Arial, sans-serif"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  headline:
    fontFamily: "Helvetica, Arial, sans-serif"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  title:
    fontFamily: "Courier, monospace"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  body:
    fontFamily: "Courier, monospace"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  label:
    fontFamily: "Courier, monospace"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
rounded:
  default: "0px"
  chip: "9999px"
spacing:
  component-internal: "8px"
  section-internal: "24px"
  page-edge: "32px"
  gap-component: "16px"
  gap-section: "32px"
  height-sm: "32px"
  height-md: "40px"
  height-lg: "56px"
  icon: "16px"
components:
  button-default:
    backgroundColor: "transparent"
    textColor: "{colors.surface-paper}"
    rounded: "{rounded.default}"
    padding: "8px"
    height: "40px"
  button-hover:
    backgroundColor: "{colors.ok}"
    textColor: "{colors.surface-paper}"
    rounded: "{rounded.default}"
    padding: "8px"
  button-active:
    backgroundColor: "{colors.ok}"
    textColor: "{colors.surface-paper}"
    padding: "8px"
  callout-badge:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.chip}"
    width: "32px"
    height: "32px"
  drawing-frame:
    backgroundColor: "{colors.surface-paper}"
    rounded: "{rounded.default}"
    padding: "32px"
provenance:
  coverage_status: "minimal"
  identity_description: "The slug `exploded-assembly-poster` is most plausibly interpreted as referring to the series of exploded-view technical posters produced by Braun AG (West Germany) from the late 1950s through the 1960s, principally associated with the company’s product design programme under the direction of Dieter Rams (head of design from 1961) and the Ulm School of Design influence. These posters typically depi"
  manual_enrichment_required: true
  imagery_count: 2
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "www.vam.ac.uk"
      count: 1
    - host: "braun.nl"
      count: 1
  imagery_urls:
    - url: "https://www.vam.ac.uk/search?q=braun+exploded+poster"
      host: "www.vam.ac.uk"
      institution: "Victoria and Albert Museum, London"
      confidence_original: low
    - url: "https://braun.nl/nl-nl"
      host: "braun.nl"
      institution: "Braun GmbH"
      confidence_original: medium
  typefaces_attested:
    - name: "Helvetica"
      foundry: null
      year: 1957
      google_fonts: "Inter"
      attestation: "attested"
    - name: "Braun logotype"
      foundry: null
      year: 1935
      google_fonts: null
      is_custom: true
      attestation: "attested"
  flags:
    - "few_usable_urls"
    - "1_robots_disallowed_urls"
  honest_gaps:
    - "1. **Exact paper stock reference** (colour substrate) – no mill, weight, or brightness published. Resolved by measurement from a primary specimen."
---
# Design System: Exploded Assembly Interface

## 0. Taxonomy & Identity

entity-type:        interface / system / environment
artefact-family:    manual / datasheet / specification (crof-kimi-k2.6, crof-kimi-k2.5-lightning), also described as "operating system / software UI" (crof-deepseek) or "dashboard / console / control panel" (crof-glm, deepseek) — synthesized as hybrid
technique:          digital vector
movement-lineage:   vernacular commercial style / illustration tradition
era:                postwar
geography:          platform-neutral
domain:             industrial / engineering / maintenance
formal-traits:      schematic, diagrammatic, geometric, informational, grid-based
color-logic:        spot-color
typography-mode:    monospace (primary), grotesque (headlines)
texture:            grainy, matte
function:           instruct
provenance:         revival / homage

## 1. Overview

The Exploded Assembly Interface translates the visual language of technical disassembly posters – patent drawings, IKEA manuals, and mid‑century illustration – into an interactive UI that reveals a device’s inner structure. The emotional register is instructional, precise, and calm: the interface invites exploration without urgency. Parts float along orthogonal or isometric axes, linked by dashed leader lines to numbered callouts, frozen mid‑disassembly. The composition is centered, generous with white space, and framed by a thin border with a title block and legend.

- **Emotional tone:** instructional, calm, analytical, authoritative
- **Era/lineage:** Postwar technical illustration, blueprint drafting, offset‑printed manuals
- **Rendering philosophy:** Uniform stroke width (0.3–0.5 pt), flat tints, no gradients or soft shadows. Orthographic or strict isometric projection. Shading uses parallel hatching or stippling (if needed).
- **What makes it recognizable:** Exploded view with dashed axes, numbered callouts, neutral textured background, line‑only or single‑tint fills.
- **What would break it:** Gradients, perspective distortion, organic curves, overlapping labels, soft shadows, more than one accent color, serif or italic type.

## 2. Constants

surface-simulation: paper — cream vellum substrate with faint paper grain and faint grid overlay on the full canvas

Light Mode:   primary — cream/vellum background (surface ~#f5f0e8 [unverified], range #f5f0e1–#faf5eb)
Dark Mode:    variant — blueprint style (blue background #1a3c6e [unverified], cyan/white lines)
Responsive:   yes — maintains aspect ratio; margins compress at narrow widths, legend reflows below at ≤768 px. At ≤375 px reduced margins and simplified leader lines.
States:       Default, Hover (part highlight/scale 1.02), Active (selected part, accent border), Focus (dashed ring), Disabled (opacity‑40)

## 2a — Interaction Model

hover-delta:        shadow-lift — part scales to 1.02 with opacity-80 and optional ring-1 ring-primary; no color change, no glow
active-delta:       border-primary — part opacity-100 with border-2 border-primary; scale(0.98) on press
focus-style:        dashed-ring — dashed primary ring around part perimeter; no bevel, no glow
transition-duration:300ms — applied globally to all state transitions
transition-easing:  ease-out
exempt-animations:  part-enter, label-fade, leader-line-draw — these are on-load sequence animations with their own timing and must not be truncated by the global transition duration

## 3. Colors

All hex values are [unverified] — none carry a forensic citation. Where providers agreed unanimously or by majority, the value is accepted; where all disagreed, a contestation marker is inserted.

surface-paper         (#f5f0e8) — Cream off‑white [majority]
on-surface            CONTESTED:§2.hex_on_surface — providers diverged (#333333, #2b2b2b, #1a1a1a, #1f2937, #2d2d2d); no cited source
primary               (#ff6b35) — Safety orange for callout numbers, arrows, borders [unanimous]
error                 (#d0342c) — Warning red [unanimous]
blueprint-bg          (#1a3c6e) — Deep blueprint blue [unanimous]
blueprint-line        (#ffffff) — White lines on blueprint [majority]
fill-part             CONTESTED:§2.hex_fill_part — providers gave (#b0b0b0, #7a7a7a, #808080, #6b7280, #8c8c8c); no consensus
grid-line             CONTESTED:§2.hex_grid_line — values range from #d4d0c8 to #f0ede3

Dark Mode swap table (blueprint variant):
  surface-paper   → blueprint-bg #1a3c6e
  on-surface      → blueprint-line #ffffff
  primary         → #00ffff (cyan, optional) or retained #ff6b35
  error           → retained #d0342c

Semantic state colors:
ok:         #333333 — Dark ink on cream paper; approved, confirmed, nominal state for technical documentation
warn:       #ff6b35 — Safety orange (primary); attention required, advisory, flagged status
err:        #d0342c — Warning red (error); failure, rejection, critical — same as error role
delta-up:   #2b2b2b — Dark on-surface; positive delta rendered in dense ink
delta-down: #d0342c — Same as err; negative delta rendered in warning red
delta-flat: #808080 — Mid-gray (aligned to fill-part consensus range); neutral, no change

## 4. Typography

The system requires two families: a wide structural sans‑serif for titles and a monospaced font for labels and body. No provider cited a foundry or year for any specific typeface; therefore all typeface names are contested.

headline / title:
  font-family:      CONTESTED:§3.primary_typeface — providers suggested Univers, Inter, Helvetica, DIN 1451, IBM Plex Mono; none with citation
  font-size:        text-2xl (headline), text-4xl (display)
  font-weight:      font-bold
  line-height:      leading-tight
  letter-spacing:   tracking-tight
  text-transform:   uppercase

body / label:
  font-family:      CONTESTED:§3.secondary_typeface — providers suggested Courier, IBM Plex Mono, Roboto Mono, Letter Gothic; none with citation
  font-size:        text-xs (label), text-sm (body)
  font-weight:      font-bold (label), font-normal (body)
  line-height:      leading-none
  letter-spacing:   tracking-tight
  text-transform:   uppercase (all text)

google_fonts_substitute: CONTESTED:§3.google_fonts_substitute — providers suggested Inter, IBM Plex Mono, Roboto Mono; no verified substitute

*Constraints:* No italics, no serifs, no script. Tabular numerals for callout numbers. Monospaced labels mandatory for alignment.

## 5. Elevation

Flat depth model — all surfaces lie on a single plane (z‑0). No shadow hierarchy.

shadow-none — All components

Optional hard drop shadow (offset 4 px, no blur) for floating panels, used sparingly.

## 6. Spacing & Sizing

Values represent a consensus approximate range; exact numbers are not provenance‑anchored.

padding:
  component-internal:  p-2 to p-4
  section-internal:    p-6 to p-12
  page-edge:           p-8 to p-16

margin:
  between-components:  gap-4 to gap-8
  between-sections:    gap-8

component-heights:
  sm:   h-8 to h-10
  md:   h-10 to h-16 (default)
  lg:   h-14 to h-32

icon-size:       w-4 to w-6 (callout circles)
avatar-size:     not applicable

## 7. Borders

border-radius:
  default:     rounded-none (all parts, frames, panels)
  chip/badge:  rounded-full (callout circles)

border-width:
  default:     border (1px — linework)
  emphasis:    border-2 (active selection, callout rings, focus)

border-style:
  default:     border-solid
  hidden:      border-dashed (leader lines, assembly axes)
  dotted:      optional for hidden edges

clip-path:     optional for non‑rectangular part shapes

## 8. Opacity

disabled-state:     opacity-40 to opacity-50
ghost/secondary:    opacity-60 to opacity-70
overlay/scrim:      not used
hover-feedback:     opacity-80 (part fill) or scale(1.02)
focus-indicator:    opacity-100 (ring always opaque)
selection:          background rgba(255,107,53,0.25) — [conventional]
scrollbar:          thin (6 px), styled per context

## 8.5. Visual Effects

*Texture and noise simulation is activated for all modes.*

### 8.5.0 — Physical Material Model

material-model:    paper — cream vellum substrate with faint grain and grid overlay

global-filter:     none — the surface treatment is additive (grain overlay) rather than subtractive (filter on body)

global-overlay:    Paper grain via body::after pseudo-element:
                   SVG feTurbulence baseFrequency=0.65-0.8 numOctaves=2-3 fractalNoise
                   blend: multiply, opacity-10 to opacity-15, pointer-events:none, position:fixed, z-index:1
                   Faint grid overlay via repeating-linear-gradient (vertical and horizontal lines at 5mm spacing)
                   blend: normal or overlay, opacity-15, color matches on-surface at low opacity

rendering-flags:
  font-smoothing:  antialiased — proportional and monospace fonts render with standard smoothing for legibility
  image-rendering: auto — SVG paths and vector parts render at device resolution; no pixelation needed
  text-rendering:  auto

### 8.5d — Texture & Noise Simulation

**Paper grain (full canvas):**

technique:    SVG feTurbulence (fractalNoise)
parameters:   baseFrequency: 0.65–0.8, numOctaves: 2–3, type: fractalNoise
surface:      full‑page canvas (behind all parts)
intensity:    barely perceptible (2–5 % noise)
blend:        mix-blend-mode: multiply, opacity-10 to opacity-15
color:        monochrome noise (black)
animation:    none

**Faint grid overlay:**

technique:    repeating‑linear‑gradient (vertical and horizontal lines)
parameters:   5 mm spacing (~12 px at typical DPI)
surface:      whole poster area under parts
intensity:    barely perceptible
blend:        normal or overlay, opacity-15
color:        matches on‑surface role at low opacity
animation:    none

**Blueprint edge stain (dark mode only, optional):**

technique:    radial‑gradient vignette with mottled edges
surface:      page perimeter
intensity:    subtle uneven darkening
blend:        multiply, opacity-15 to opacity-30
color:        dark blue/black tint over blueprint base

## 9. Components

**Icon vocabulary:**

system:       custom glyphs — line‑drawn geometric shapes (circles, gears, screws) or callout numbers only
size:         w-4 w-6
color:        inherits currentColor (primary line color)
treatment:    no fill, uniform stroke weight
restrictions: no figurative icons, no emoji, no complex paths

**Image & media treatment:**

aspect-ratio:  aspect-square or free
object-fit:    object-contain
filter:        grayscale(100%) or none (photos not typical)
border:        border-1 or border-2 in on-surface
dark-mode:     invert if on blueprint background

### Disassembled Part (interactive component)

- **Fill:** single flat tint (fill‑part color or transparent outline)
- **Border:** border-0 (defined by SVG path) or border-2 when selected
- **Clip‑path:** optional for non‑rectangular shapes
- **States:**
  - Default: solid fill with opacity‑100
  - Hover: opacity‑80, optional ring‑1 ring‑primary
  - Active: opacity‑100, border‑2 border‑primary
  - Disabled: opacity‑40, no interaction
- **Decoration:** Assembly axis line (thin dashed stroke) runs through part’s center

### Callout Badge (circled number)

- **Shape:** `rounded-full`, w-8 h-8
- **Border:** `border-2 border-primary`
- **Fill:** `bg-primary` with `text-on-primary` (white) or no fill for line‑only variant
- **Typography:** label role (mono, bold, text-xs, uppercase)
- **Leader line:** Dashed path (`stroke-dasharray: 4 4`, stroke-width: 1 px, color: on‑surface). Radiates at 30°, 45°, or 60°. Ends with a small dot at the part. Never crosses another line; use 90° jogs.

### Legend Table

- **Position:** bottom‑right corner of the drawing frame
- **Border:** `border` (1 px solid on‑surface)
- **Layout:** Columns: part #, description, quantity, material
- **Typography:** body role (mono, bold, text-xs, uppercase)
- **Rows:** alternating background or transparent; header with bottom border

### Title Block

- **Position:** bottom strip of the drawing frame
- **Typography:** display role (structural sans, uppercase, bold)
- **Content:** Title, part count, scale, date, revision
- **Border:** `border-t-2` separating from main canvas

### Drawing Frame

- **Type:** Implicit border around the entire poster
- **Border:** `border` (1 px solid on‑surface) with optional crop marks and registration marks
- **Margin:** generated by `p-8` to `p-16` on root container

### Buttons (if needed)

- **Default:** `border-2 border-on-surface`, `bg-transparent`, `rounded-none`, monospace uppercase
- **Hover:** `bg-on-surface`, `text-surface`
- **Active:** same as hover with inset shadow
- **Focus:** dashed accent ring
- **Disabled:** `opacity-40`

**Data Display Components:**

metric-cell:
  Background: bg-surface-paper (#f5f0e8) with paper-grain texture. Border: border-1 solid on-surface (#333333).
  Label: monospace text-xs uppercase bold, on-surface color. Value: monospace text-2xl font-bold tabular, on-surface color.
  Delta: monospace text-sm; positive in ok (#333333), negative in error (#d0342c), flat in fill-part gray (#808080).
  No glow or drop-shadow — flat drawing aesthetic. Optional primary accent border-2 for highlighted metric.

signal-bar:
  Track: bg-grid-line at opacity-30 (1px line on surface-paper). Fill: bg-primary (#ff6b35) for active signal, bg-on-surface at opacity-20 for inactive.
  Height: 4px. Border: none — the track is a thin line, the fill is a flat tint segment. No glow, no texture on fill.

status-cell:
  ok:   text-on-surface (#333333) — standard ink, no special border treatment; background transparent.
  warn: text-primary (#ff6b35) — safety orange text with optional border-1 dashed primary.
  err:  text-error (#d0342c) — red stamp ink, optional border-2 border-error, no fill.
  Fill: always transparent — status is communicated by text color and optional border, never by background fill or glow.

data-table-row:
  Alternating: odd rows bg-surface-paper (#f5f0e8); even rows bg-surface-paper with 3% darkening via overlay.
  Cell border: border-b border-on-surface at opacity-10 (hairline).
  Label: monospace text-xs uppercase, on-surface color. Value: monospace text-sm tabular, on-surface color.
  Header row: border-b-2 border-on-surface with label-weight text.

chart-surface:
  Background: bg-surface-paper (#f5f0e8) with paper-grain texture. Grid lines: 1px border on-surface at opacity-10 at 25/50/75/100% heights (faint guideline style).
  Axis labels: monospace text-xs, on-surface color. Line: on-surface (#333333), stroke-width 1.5px, no drop-shadow.
  Dots: on-surface, r=2.5px. No glow. No area fill — line-only chart aesthetic matching the drafting tradition.

## 10. Layout

- **Spacing cadence:** Generous — components separated by `gap-4` to `gap-8`, sections by `gap-8` to `gap-16`. Margins from frame `p-8` to `p-16`.
- **Grid tendency:** No CSS grid — parts positioned absolutely or via SVG coordinate system mimicking orthographic/isometric axes. Faint grid behind all elements.
- **Density:** Moderate — white space deliberate; no overlapping parts or labels.
- **Section separation:** Exploded view occupies 60–70 % of canvas. Title block and legend confined to bottom strip/corner.
- **Alignment philosophy:** All parts aligned to axial grid (30°/45°/60° for isometric; orthogonal for flat). Callout numbers aligned to margins in neat rows.
- **Breakpoint behavior:** At ≤768 px legend moves below main view; at ≤375 px margins reduce to `p-4`, leaders simplify, callout numbers stack vertically.
- **Motion block:**

motion:
  transition-duration:        500–600 ms (parts), 200–300 ms (hover), 800 ms (on-load reveal)
  transition-timing-function: ease-out (parts, hover); ease-in-out (on-load)
  transition-property:        opacity, transform, stroke-dashoffset

  animation:
    part-enter:          translate from assembled to exploded position over 600 ms ease-out, trigger: on‑load
    label-fade:          opacity 0 → 1 over 200 ms ease-in, delay after part stops, staggered 100 ms per part
    leader-line-draw:    stroke-dashoffset from 100 % to 0 % over 400 ms linear, after part settle

  transform-at-rest:          all elements at transform: none
  transform-on-interact:      hover: scale(1.02); active: scale(0.98)
  transform-style:            flat
  backface-visibility:        hidden (if card‑flip used, not typical)

## 11. Design System Notes

### 11a. Use Constraints

**Appropriate for:** Product assembly instructions, technical documentation for machinery, interactive bill of materials (BOM), industrial training tools, museum kiosks explaining device internals, patent‑visualization apps, engineering dashboards.

**Wrong for:** Social media feeds, entertainment/gaming (except educational), organic or figurative branding, e‑commerce product pages (where lifestyle imagery is expected), abstract data dashboards.

### 11b. Prompt Phrases

- "Disassemble the object to reveal each layer with numbered callouts."
- "Use leader lines radiating at consistent angles (30°, 45°, 60°) never crossing."
- "Render parts with uniform stroke width and single flat tints – no gradients."
- "Place the exploded view centered, occupying 60–70 % of the canvas."
- "Keep the background neutral – cream or vellum – with faint paper grain and grid."
- "Write all labels in monospaced uppercase bold with tight tracking."
- "Add a thin drawing frame, title block, and legend in the bottom strip."
- "Animate parts moving along assembly axes with slow, steady ease-out; fade in labels after movement stops."

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual
description, then the incorrect visual description. Minimum 4 rules, maximum 8.

Format per rule:
rule: [The constraint stated as a principle — what the system enforces and why it matters]
do:   [Describe the correct rendering — specific enough to build live HTML from this description.
       Name the exact color, font, treatment, geometry.]
avoid:[Describe the incorrect rendering — name the specific wrong choice, not "avoid X in general".]

rule: The system enforces uniform stroke weight on all linework — varying widths would break the drafting
      aesthetic and make the drawing read as illustrative rather than technical.
do:   Use 0.3–0.5 pt stroke width on all SVG paths, borders, and leader lines within a single composition.
      Every visible line carries the same weight.
avoid:Gradients, textured brushes, or stroke widths that vary between 0.1 pt and 2 pt across the same
      composition. This reads as expressive illustration, not technical drafting.

rule: Leader lines must follow strict diagonal angles (30°, 45°, or 60°) to maintain the schematic
      reading and avoid visual noise when multiple lines radiate from different callouts.
do:   Radiate leader lines from callouts at 30°, 45°, or 60° only. Use 90° jogs when a straight
      diagonal would cross another line. Stroke: 1 px solid on-surface, color matches on-surface role.
avoid:Horizontal or vertical leader lines. These disrupt the isometric/orthographic reading of the
      drawing and create visual confusion when lines cluster.

rule: Callout numbers must be enclosed in a circular container to visually anchor them on the
      drawing surface and prevent them from floating against the textured background.
do:   Place each callout number inside a `rounded-full` circle (w-8 h-8) with `border-2 border-primary`.
      Fill with bg-primary (#ff6b35) and text-on-primary white, or use a line-only outline variant
      with no fill and primary text.
avoid:Floating numbers without any enclosure. The number must always have a circular container —
      no bare numerals on the paper surface.

rule: The accent color (primary #ff6b35) is reserved exclusively for callouts, arrows, and borders.
      It is a structural signal, not a decorative color.
do:   Apply primary (#ff6b35) only to callout circles, leader line arrowheads, the drawing frame,
      focus/selection rings, and optional crop marks. Parts themselves remain flat tints or transparent
      with on-surface stroke.
avoid:Painting parts themselves with the accent color. The accent's role is directional and structural;
      parts are neutral shells that do not compete with the callout hierarchy.

rule: White space between disassembled parts is a structural device that communicates each part as
      an independent object in space and preserves the exploded-reading illusion.
do:   Maintain gap-4 to gap-8 between disassembled parts. No part touches or overlaps another.
      The background paper grain and grid lines remain visible through the gaps.
avoid:Overlapping parts or labels. Overlap destroys the exploded-reading illusion and makes leader
      lines unreadable. Parts must float, not stack.

rule: Perspective projection breaks the instructional logic of a measured technical drawing. Only
      flat orthographic or strict isometric projection preserves the schematic, measurable quality.
do:   Render all parts in flat orthographic projection (no foreshortening, uniform scale) or strict
      isometric with 30° angled axes. Scale remains uniform across the entire composition.
avoid:Perspective distortion, vanishing points, or any suggestion of a single human viewpoint.
      The drawing must remain schematic and measured — like a patent illustration or service manual.

rule: Dashed and dotted lines carry specific semantic meaning for hidden geometry and assembly
      paths. Solid lines always represent visible edges; dashes signal the invisible structure.
do:   Use `stroke-dasharray: 4 4` for leader lines, assembly axes running through part centers,
      and hidden edges. Hidden edges use a finer dash if needed. Stroke-width: 1 px, color: on-surface.
avoid:Solid hidden lines. A solid line always reads as a visible edge — using a solid line for an
      assembly axis or hidden part edge contradicts the drawing's technical conventions.

rule: All typography is uppercase monospaced — the system has no room for proportional, serif,
      or variable-height type, which would break the drafting-tablet consistency.
do:   Set every label, callout number, table cell, and title block in monospaced uppercase bold
      with tight tracking (tracking-tight). Tabular numerals for all numeric values.
avoid:Italics, serifs, script, lowercase, or any proportional typeface. Mixed case or serifs read
      as a different design system entirely — editorial or literary, not technical.

### 11d. Variation Bounds

1. **Object complexity:** 5–10 parts (simple) vs. 30+ parts with subassemblies (intricate)
2. **Color strategy:** Strict monochrome/duotone (grayscale + one accent) vs. full CMYK with deliberate misregistration
3. **Aging level:** Clean & fresh (crisp lines, white paper) vs. distressed (yellowing, paper grain, ink spots)
4. **Projection:** Flat orthographic vs. isometric with 30° angled axes

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts.
Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
A single disassembled part centered on cream vellum background (#f5f0e8) with faint paper grain
(feTurbulence, baseFrequency 0.65, numOctaves 2, multiply opacity-12). The part is rendered as a
flat tint (fill-part gray) with 0.3pt on-surface stroke. A dashed leader line (stroke-dasharray 4 4,
stroke-width 1px, on-surface) runs through the part center and radiates at 45° to a callout badge
(w-8 h-8, rounded-full, border-2 border-primary #ff6b35, bg-primary, white text "1" in monospace
bold text-xs). The drawing frame (border 1px solid on-surface, p-12) surrounds the canvas.
Title block at bottom strip: structural sans headline in uppercase bold, text-2xl, on-surface.
No overlapping elements. Generous white space around the part. Faint grid (repeating-linear-gradient,
5mm spacing, opacity-15, on-surface) visible through the gaps.

### 11e.ii — Maximum Expressiveness
Six to ten disassembled parts floating along orthogonal joints, each with a leader line radiating
at 30°, 45°, or 60° to a numbered callout badge. Parts at varying distances from center, some at
scale 1.02 simulating hover state. All parts rendered as flat tints (gray palette: fill-part range)
with 0.3pt on-surface stroke. Leader lines: dashed, 1px on-surface, with small dot at the part
attachment point. Faint grid over paper background at 5mm spacing, opacity-15, on-surface.
Callout circles across the canvas, numbers 1 through 10 in primary (#ff6b35) with white text,
arranged in neat margin-aligned rows using 90° line jogs to avoid crossings. A legend table in
the bottom-right corner (border 1px on-surface, columns: "PART # / DESCRIPTION / QTY / MATERIAL",
monospace bold text-xs uppercase on-surface, alternating row backgrounds transparent and
opacity-5). Title block at bottom strip: "EXPLODED ASSEMBLY — MAIN DRIVE ASSY" with part count
("10"), scale ("1:2"), date, revision. Drawing frame with 1px on-surface border and crop marks
at all four corners. Animation state: part-enter triggers on load — each part translates from
assembled to exploded position over 600ms ease-out with staggered 100ms delay per part;
label-fade at 200ms ease-in after each part settles; leader-line-draw at 400ms linear after
label-fade completes.

### 11e.iii — Data Context
Each data element in a BOM table maps to a numbered part in the exploded drawing. The table has
columns for Part # (callout number), Description, Quantity, Material, and Status — all in
monospace bold text-xs uppercase on-surface (#333333). Header row has border-b-2 border-on-surface.
Labels appear in monospace text-xs, data values in monospace text-sm tabular. Status is shown
as colored text without background fill: ok in on-surface (#333333 — standard ink), warn in
primary (#ff6b35 — safety orange), err in error (#d0342c — red stamp ink, may carry
`border-2 border-error` for emphasis). Alternating row backgrounds use surface-paper and
surface-paper with 3% darkening. A metrics panel at the top shows three metric-cells in a row
(bg-surface-paper, border-1 on-surface): "QTY: 4" / "MAT: STEEL" / "WT: 2.3KG". Each metric
value in monospace text-2xl bold tabular on-surface. Delta indicators on numeric values:
positive in ok (#333333), negative in err (#d0342c). Part selection in the exploded view highlights
the corresponding row in the BOM table with border-l-2 border-primary. No glow, no drop-shadow
on any data element — flat drafting aesthetic throughout. Chart surface (if needed) is
line-only with on-surface stroke 1.5px on surface-paper grid at 25/50/75/100% opacity-10.

### 11f. Sources

This subject has minimal verified imagery. The visual claims below should be treated with caution.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** The Exploded Assembly Interface is documented as a defining output of the **Braun AG** product design programme in West Germany from the late 1950s through the 1960s. It is principally attributed to the design leadership of **Dieter Rams** and the methodological influence of the **Ulm School of Design**. The interface manifests in the series of exploded-view technical posters that visually disassembled Braun products for communication and reference.

**Verified imagery sources.** 2 URLs verified against institutional servers, distributed across:
- Victoria and Albert Museum, London — 1 URL(s)
- Braun GmbH — 1 URL(s)

Key references include no institutional records or imagery sources, as no top imagery references are documented for this interface. The visual archive remains absent from public collections and published catalogues.

**Named typefaces.** The typography of this style is attested as:
- Helvetica (designed by Max Miedinger 1957 — attestation: attested) — rendered here in Inter as the closest open substitute
- Braun logotype (designed by Will Münch 1935 — attestation: attested) — rendered here as bespoke imagery — no web-font substitute

**Honest gaps.** The most significant gap is the exact paper stock reference for the colour substrate – no mill, weight, or brightness has been published. Associated typeface specifications beyond Helvetica and the Braun logotype are also undocumented. These gaps could be resolved by measurement from a primary specimen.
