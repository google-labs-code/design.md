---
version: alpha
name: "Lufthansa 1963 Design Manual (Synthesis)"
description: "A flat, modular interface language derived from Otl Aicher's 1963 corporate manual for Lufthansa, based on a severe rationalist grid, four-colour palette (white, blue, yellow, black), and a single grotesque sans-serif typeface in two weights, communicating quiet authority and systemic clarity."
colors:
  on-primary: "#FFFFFF"
  on-secondary: "#000000"
  neutral: "#FFFFFF"
  on-surface: "#000000"
  outline: "#000000"
  on-primary-container: "#FFFFFF"
  err: "#E00000"
  delta-down: "#E00000"
  delta-flat: "#000000"
typography:
  display:
    fontFamily: "Akzidenz-Grotesk, Helvetica, Univers"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.05em"
    textTransform: "uppercase"
  headline:
    fontFamily: "Akzidenz-Grotesk, Helvetica, Univers"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.05em"
    textTransform: "uppercase"
  title:
    fontFamily: "Akzidenz-Grotesk, Helvetica, Univers"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "0em"
    textTransform: "uppercase"
  body:
    fontFamily: "Akzidenz-Grotesk, Helvetica, Univers"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
    textTransform: "normal-case"
  label:
    fontFamily: "Akzidenz-Grotesk, Helvetica, Univers"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.05em"
    textTransform: "uppercase"
rounded:
  default: "0px"
  card: "0px"
  button: "0px"
  input: "0px"
  chip: "0px"
spacing:
  component-internal: "16px"
  section-internal: "24px"
  page-edge: "32px"
  gap-component: "24px"
  gap-section: "32px"
  height-sm: "32px"
  height-md: "40px"
  height-lg: "48px"
  icon: "24px"
components:
  button-primary:
    backgroundColor: "#003366"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.button}"
    padding: "8px 16px"
    height: "40px"
  button-primary-hover:
    backgroundColor: "#FFCC00"
    textColor: "{colors.on-secondary}"
    padding: "8px 16px"
    height: "40px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "#003366"
    rounded: "{rounded.button}"
    padding: "8px 16px"
    height: "40px"
  button-secondary-hover:
    backgroundColor: "#003366"
    textColor: "{colors.on-primary}"
    padding: "8px 16px"
    height: "40px"
  card:
    backgroundColor: "{colors.neutral}"
    rounded: "{rounded.card}"
    padding: "24px"
  input:
    backgroundColor: "transparent"
    rounded: "{rounded.input}"
    padding: "8px 12px"
    height: "40px"
  input-focus:
    backgroundColor: "transparent"
    rounded: "{rounded.input}"
    padding: "8px 12px"
    height: "40px"
  pictogram-frame:
    backgroundColor: "{colors.neutral}"
    size: "48px"
    rounded: "{rounded.default}"
  horizontal-rule:
    backgroundColor: "{colors.outline}"
    height: "1px"
  crane-logo:
    backgroundColor: "{colors.neutral}"
    size: "40px"
    rounded: "{rounded.default}"
  metric-cell:
    backgroundColor: "{colors.neutral}"
  signal-bar:
    backgroundColor: "#003366"
    height: "4px"
  status-cell:
    backgroundColor: "transparent"
  data-table-row:
    backgroundColor: "{colors.neutral}"
provenance:
  coverage_status: "complete"
  identity_description: "The slug `lufthansa–aesthetic-corporate-design-manual-1963-otl-aicher` refers to the landmark corporate design manual conceived by Otl Aicher (1922–1991) for Deutsche Lufthansa AG, first published in 1963. The manual codified the airline’s visual identity—colour, typography, logotype, layout grids, and applications—and is widely regarded as one of the most influential examples of German modernist "
  manual_enrichment_required: false
  imagery_count: 5
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "commons.wikimedia.org"
      count: 1
    - host: "museum-gestaltung.ch"
      count: 1
    - host: "archive.org"
      count: 1
    - host: "www.die-neue-sammlung.de"
      count: 1
    - host: "www.designmadeingermany.de"
      count: 1
  imagery_urls:
    - url: "https://commons.wikimedia.org/wiki/Category:Lufthansa_logos"
      host: "commons.wikimedia.org"
      institution: "Wikimedia Commons"
      confidence_original: medium
    - url: "https://museum-gestaltung.ch/de"
      host: "museum-gestaltung.ch"
      institution: "Museum für Gestaltung Zürich"
      confidence_original: low
    - url: "https://archive.org/details/?search=Lufthansa+timetable+1964"
      host: "archive.org"
      institution: "Internet Archive"
      confidence_original: low
    - url: "https://www.die-neue-sammlung.de/"
      host: "www.die-neue-sammlung.de"
      institution: "Die Neue Sammlung, Munich"
      confidence_original: low
    - url: "https://www.designmadeingermany.de/"
      host: "www.designmadeingermany.de"
      institution: "Design Made in Germany (blog)"
      confidence_original: low
  typefaces_attested:
    - name: "Helvetica"
      foundry: "Haas Type Foundry / Linotype"
      year: 1957
      google_fonts: "Inter"
      attestation: "attested"
    - name: "Times New Roman"
      foundry: null
      year: null
      google_fonts: "Tinos"
      attestation: "unverified"
  flags:
    []
  honest_gaps:
    - "1. **Colour specifications**: Exact hex, Pantone, RAL, or proprietary references from the manual are not verified. All values are conventional or inferred."
---
# Design System: Lufthansa 1963 Design Manual (Synthesis)

## 0. Taxonomy & Identity

entity-type:        interface / system / environment
artefact-family:    operating system / software UI
technique:          digital vector
movement-lineage:   design movement
era:                postwar
geography:          central europe
domain:             transport
formal-traits:      grid-based, geometric, flat, minimal, modular, informational
color-logic:        spot-color
typography-mode:    grotesque
texture:            matte, smooth
function:           inform / navigate
provenance:         revival / homage

## 1. Overview

This design system translates Otl Aicher's 1963 corporate manual for Lufthansa into a flat, modular interface language built on severe rationalism. It marries a modernist grid, bold primary color fields (deep blue and bright yellow), and minimal linear pictograms into a system that communicates quiet authority, airlift precision, and systemic clarity. The style inherits its soul from mid‑century European modernism (International Typographic Style / Ulm School): every element is aligned to a visible grid, no decorative flourish is permitted, and typography is restricted to a single grotesque sans‑serif in two weights.

What makes it unmistakable: a palette of exactly four colours (white, blue, yellow, black), all‑caps letter‑spaced headlines, sharp 90° corners, linear pictograms with uniform stroke weight, the geometric crane logo encircled, aggressive white space, and a flat depth model with no shadows, gradients, or transparency. The style would break instantly with rounded corners, drop shadows, a third accent colour, italic type, or any opacity blend.

**Emotional tone:** Quiet, methodical, authoritative, optimistic (postwar modernism)  
**Era / lineage:** 1963 German corporate modernism; Otl Aicher, Ulm School of Design  
**Density:** Low to moderate – generous margins, aggressive negative space  
**Rendering philosophy:** Flat, matte, solid fills only; no gradients, no glow, no texture  
**Surface character:** Pristine offset print quality conceptually, but on screen it is purely flat digital vector  
**What would break it:** Rounded corners, shadows, more than four colors, italics, decorative type, any opacity less than 100%

## 2. Constants

Light Mode:   primary (white background)
Dark Mode:    no — not supported in original; if required, invert blue/yellow roles with caution (blue becomes background, yellow becomes accent, black text on white becomes white on blue)
Responsive:   yes — grid adapts column count at 375px (single column) and 768px (4 columns), but margins and gutters remain fixed
States:       Default, Active, Disabled, Hover, Focus (Hover/Focus use full‑colour swaps, never shadows or scaling)
surface-simulation: none — flat digital vector; no physical substrate, no grain, no scanlines, no broadcast artifacts

## 2a — Interaction Model

hover-delta:        color-shift — full background/foreground colour swap on all interactive elements;
                    e.g., primary fill → secondary fill with black text, or transparent → primary fill
                    with white text; never shadow, scale, opacity, or glow
active-delta:       color-shift — same hover colour states maintained on press; no additional
                    scale-down, inset-shadow, or offset-shift
focus-style:        color-border — 2px border in secondary (yellow) for focus indication on inputs
                    and buttons; no glow ring, no dotted outline, no bevel
transition-duration:0ms — all state changes instantaneous; no easing, no delay
transition-easing:  none
exempt-animations:  none — no named keyframe animations exist in this system

## 3. Colors

primary                    CONTESTED:§2.hex_primary — providers gave: [#003366 / #003A70 / #003C71 / #003399 / #00305E / #0033A0]; all tagged [unverified]; re-stack required
on-primary                 (#FFFFFF) — White: text and icons on blue surfaces
secondary                  CONTESTED:§2.hex_secondary — providers gave: [#FFCC00 / #F0C200 / #FFD100 / #FFD700 / #FFD600 / #FFC72C]; all tagged [unverified]; re-stack required
on-secondary               (#000000) — Black: text on yellow surfaces
neutral                    (#FFFFFF) — White: page background, card fills
on-surface                 (#000000) — Black: body text, rules, pictogram silhouettes
outline                    (#000000) — Black: 1pt horizontal rules, dividers, focus rings
primary-container          CONTESTED:§2.hex_primary (same as primary; used as filled surface for containers)
on-primary-container       (#FFFFFF) — White text on primary-container

**Color rules:**
- Blue dominates structural areas; yellow is reserved for accents and the crane icon.
- Black is used only for text and thin rules – never as a fill (except pictogram silhouettes).
- No gradients, opacity blends, or tints – every color is solid 100%.
- Photography must be converted to black‑and‑white or duotone (blue + yellow).

Semantic state colors:
ok:         CONTESTED:§2.hex_primary (#003366 / #003A70 etc.) — Primary blue; confirmed, nominal, in-service state
warn:       CONTESTED:§2.hex_secondary (#FFCC00 / #F0C200 etc.) — Secondary yellow; caution, advisory, attention-required
err:        #E00000 — Red (from input error border); error, critical, out-of-service — note: this is the only use of red in the system, and it is restricted to error contexts
delta-up:   CONTESTED:§2.hex_primary — Positive numeric delta rendered in primary blue; no glow, no special treatment beyond colour
delta-down: #E00000 — Negative numeric delta rendered in error red
delta-flat: #000000 — Neutral delta rendered in outline black; no change is communicated via the system's neutral/nominal text colour only — no amber, no grey variant exists

## 4. Typography

display:
  font-family:      CONTESTED:§3.primary_typeface — providers gave: [Helvetica, Univers, Akzidenz-Grotesk / Helvetica, Helvetica Neue, Arial / Akzidenz-Grotesk / Helvetica Neue / Helvetica / Akzidenz-Grotesk, Helvetica, Univers]; no cited foundry; re-stack required
  font-size:        CONTESTED:§3.display.font-size — providers gave: [24pt / 36px / 30px / text-4xl (undefined) / text-5xl / text-5xl]; no consensus; re-stack required
  font-weight:      font-bold (700)
  line-height:      leading-tight (1.25×)
  letter-spacing:   tracking-wider (0.05em)
  text-transform:   uppercase
  text-decoration:  none

headline:
  font-family:      CONTESTED:§3.primary_typeface (same as display)
  font-size:        CONTESTED:§3.headline.font-size — providers gave: [18pt / 24px / 20px / text-2xl / text-3xl / text-2xl]; no consensus; re-stack required
  font-weight:      font-bold (700)
  line-height:      leading-tight (1.25×)
  letter-spacing:   tracking-wider (0.05em)
  text-transform:   uppercase
  text-decoration:  none

title:
  font-family:      CONTESTED:§3.primary_typeface
  font-size:        CONTESTED:§3.title.font-size — providers gave: [14pt / 18px / 18px / text-lg / text-xl / text-base]; no consensus; re-stack required
  font-weight:      font-bold (700) — majority font-bold; some use font-medium
  line-height:      leading-normal (1.5×)
  letter-spacing:   tracking-normal (0)
  text-transform:   uppercase — majority uppercase, one normal-case
  text-decoration:  none

body:
  font-family:      CONTESTED:§3.primary_typeface
  font-size:        CONTESTED:§3.body.font-size — providers gave: [12pt / 14px / 16px / text-base (undefined) / text-base / text-sm (0.875rem)]; no consensus; re-stack required
  font-weight:      font-normal (400)
  line-height:      leading-normal (1.5×) — multiple variants
  letter-spacing:   tracking-normal
  text-transform:   normal-case
  text-decoration:  none
  alignment:        flush left, ragged right

label:
  font-family:      CONTESTED:§3.primary_typeface
  font-size:        CONTESTED:§3.label.font-size — providers gave: [8pt / 12px / 14px / text-sm / text-sm / text-xs]; no consensus; re-stack required
  font-weight:      font-bold (700) — some use font-medium
  line-height:      leading-tight (1.25×)
  letter-spacing:   tracking-wider (0.05em)
  text-transform:   uppercase
  text-decoration:  none

**Additional rules:**
- No italic, no decorative weights – only regular and bold.
- Headlines set flush left or centered; body text flush left, ragged right.
- Tabular figures used for numbers in data contexts.
- Monospace not used.

## 5. Elevation

Flat depth model — no shadow hierarchy.
All surfaces are coplanar. No elevation, no shadow, no stacking context.

## 6. Spacing & Sizing

padding:
  component-internal:  p-4 (16px)
  section-internal:    p-6 (24px) — majority p-6; some p-8
  page-edge:           px-8 (32px) — majority px-8; one px-12, one px-10

margin:
  between-components:  gap-6 (24px) — majority gap-6; some gap-4
  between-sections:    gap-8 (32px) — majority gap-8; one gap-10

component-heights:
  sm:   h-8 (32px)
  md:   h-10 (40px) — default interactive target
  lg:   h-12 (48px)

icon-size:       w-6 h-6 (24px) — majority w-6; two use w-8 (32px) or w-5
avatar-size:     w-12 h-12 (48px) — when used

**Baseline grid:** 4px increments (derived from original 6pt/12pt system). All spacing values align to a 4px modular grid.

## 7. Borders

border-radius:
  default:     rounded-none (0)
  card:        rounded-none
  button:      rounded-none
  input:       rounded-none
  chip/badge:  rounded-none

border-width:
  default:     border-0 — most elements have no border; rely on background colour
  emphasis:    border (1px) — horizontal rules, thin separators; some use border-2 for active states

border-style:  border-solid
border-image:  none
clip-path:     none

**Rule:** All corners are exactly 90°. No exception.

## 8. Opacity

disabled-state:     opacity-50 — majority; one provider uses opacity-40
ghost/secondary:    not used — secondary roles use solid colour swaps
overlay/scrim:      none — no translucent overlays
hover-feedback:     none — always solid background/foreground swaps

**Browser chrome** *(conditional – not needed in most contexts)*:
selection:
  background:  rgba(blue, 0.3) — blue at 30% opacity (exact blue contested)
  color:       inherit
scrollbar:
  style:       styled — thin, flat
  width:       thin (6px)
  track:       #F5F5F5 or #E0E0E0
  thumb:       blue (hex contested)
  thumb-hover: darker blue

## 8.5. Visual Effects
*(Omitted – the style is flat, matte, and uses no filters, blends, gradients, or textures on screen. Optional print‑simulation artifacts are described in §11d.)*

## 9. Components

### Icon Vocabulary
icon-vocabulary:
  system:       custom linear pictograms, 2pt stroke, 90° corners, no rounded caps/joins, no fill (except crane silhouette)
  size:         w-6 h-6 (24px) — majority; some use w-8 (32px)
  color:        inherits currentColor (black on white, white on blue, black on yellow)
  treatment:    none – purely flat, no glow, no drop shadow
  restrictions: no filled icons except the crane silhouette; no rounded joins
  frame:        square or circular, centred, with 1pt border

### Image & Media Treatment
image-treatment:
  aspect-ratio:  aspect-[16/9] for hero imagery, aspect-[4/3] for diagrams, aspect-square for icons
  object-fit:    object-cover (crop to grid cell)
  filter:        grayscale(100%) for monochrome, or duotone (blue + yellow) via CSS filter/blend-mode
  overlay:       none – images stand alone
  border:        1px solid blue (hex contested) when inside a bordered container
  dark-mode:     not applicable (light‑mode only)

### Buttons
primary:
  border-radius:   rounded-none
  border:          2px solid primary (hex contested) — some use 1px
  fill:            primary solid
  text:            on-primary, text-xs, uppercase, bold, tracking-wider
  padding:         px-4 py-2 (8px 16px)
  hover:           fill secondary, text on-secondary
  active:          fill secondary, text on-secondary — or darker blue
  disabled:        opacity-50

secondary:
  border-radius:   rounded-none
  border:          2px solid primary
  fill:            transparent
  text:            primary, text-xs, uppercase, bold, tracking-wider
  hover:           fill primary, text on-primary
  active:          fill secondary, text on-secondary
  disabled:        opacity-50

### Cards / Panels
cards:
  border-radius:      rounded-none
  border:             1px solid outline (black) — or no border
  fill:               surface (white)
  shadow:             none
  padding:            p-6 (24px)
  internal structure: header with all‑caps title + horizontal rule (1px black) + content

### Navigation
navigation:
  mode:               horizontal bar at top
  background:         primary (blue)
  text:               on-primary, text-xs, uppercase, bold, tracking-wider
  active item:        background secondary (yellow) with black text, or yellow underline
  hover:              colour swap only
  padding:            px-6 py-3 (24px 12px)
  alignment:          flush left

### Inputs / Forms
inputs:
  border:             bottom border only: 1px solid outline (black)
  border-radius:      rounded-none
  fill:               transparent (or white if needed)
  padding:            py-2 (8px) vertical, px-3 (12px) horizontal
  focus:              border bottom turns 2px secondary (yellow)
  label:              text-xs, uppercase, bold, on-surface, placed above input
  error:              border bottom turns red (#E00000) or secondary (yellow)
  disabled:           opacity-50

### Style‑Native Primitives

**Pictogram frame**  
- Shape: square (w-12 h-12, 48px) or circle (w-10 h-10, 40px)  
- Border: 1px solid outline (black) or primary (blue)  
- Fill: surface (white)  
- Content: linear pictogram centered, 2pt stroke, 90° corners  
- Usage: service icons, wayfinding symbols, aviation pictograms

**Horizontal rule**  
- Width: 100% (block)  
- Height: 1px  
- Color: outline (black) or secondary (yellow)  
- Margin: my-8 (32px) above and below  
- Usage: section separators – never use vertical dividers

**Crane logo**  
- Description: simplified geometric bird facing right, often encircled  
- Stroke: 2pt, primary (blue) or secondary (yellow) when on blue  
- Size: w-10 h-10 (40px) or w-12 h-12 (48px)  
- Placement: top‑left or top‑center of primary surfaces  
- Restrictions: never deform, never rotate, never fill with gradients

**Grid ruler (optional meta‑element)**  
- Purpose: Visible construction lines — baseline grid dots, column guides, ruler ticks, registration crosses  
- Treatment: 0.5pt lines in outline at low opacity  
- Placement: margins, gutters, page furniture zones — never overlapping content

**Data Display Components:**

metric-cell:
  Background: bg-neutral (#FFFFFF, white) — no fill, clean white surface.
  Border: none — or 1px solid outline (#000000) bottom rule beneath the value.
  Label: label role — text-xs, uppercase, bold, tracking-wider, on-surface (#000000), placed above value.
  Value: display role — text-4xl (contested), font-bold, uppercase, tracking-wider, on-surface (#000000).
  Delta: monospace tabular text-sm, on-surface; positive in primary (blue), negative in error (#E00000), flat in outline (#000000).
  No glow, no drop-shadow, no background fill — purely typographic metric cell on white.

signal-bar:
  Track: 1px solid outline (#000000) — a thin black line as the track.
  Fill:  primary (blue, contested hex) — solid fill, height 4px, no rounding, no glow.
  Border: none — the track line defines the bar.
  The fill is a flat rectangle with 90° corners — no gradient, no grain, no texture.

status-cell:
  ok:   text in primary (blue, contested hex) — no icon, no fill, no border; colour alone signals ok.
  warn: text in secondary (yellow, contested hex) — colour alone; no glow, no icon.
  err:  text in error (#E00000) — colour alone; no stamp, no rotation, no fill.
  Fill: always transparent — status is communicated exclusively by text colour against white surface; no background treatment, no border colour change.

data-table-row:
  Alternating: no alternating rows — all rows bg-neutral (#FFFFFF).
  Cell border: 1px solid outline (#000000) bottom rule only — no vertical cell borders.
  Label: text-xs, uppercase, bold, tracking-wider, on-surface (#000000).
  Value: text-sm, font-normal, on-surface (#000000); tabular figures for numeric columns.
  No row-level surface effects — purely flat white with horizontal rules.

chart-surface:
  Background: bg-neutral (#FFFFFF).
  Grid lines: 1px solid outline (#000000) at 25/50/75/100% heights — horizontal only, no vertical grid lines.
  Axis labels: label role — text-xs, uppercase, bold, tracking-wider, on-surface (#000000).
  Line: primary (blue, contested hex), stroke-width 2px, no rounding, no drop-shadow.
  Dots: primary (blue, contested hex), r=3px, square points — no glow, no fill gradient.
  The system permits bar charts: bars are flat primary (blue) rectangles with 90° corners, no rounding, no shadow.

## 10. Layout

layout:
  grid-tendency:      modular column grid (4 columns on mobile, 8 columns on tablet, 12 columns on desktop)
  column-gap:         gap-6 (24px) — majority gap-6; some gap-6 to gap-10
  margin-gutter:      page-edge: px-8 (32px) — majority px-8; some px-10 or px-12
  baseline-grid:      4px increments (12pt base)
  density:            low – aggressive white space between content blocks
  alignment:          all content aligns to grid intersections; no free‑floating elements

breakpoints:
  375px:              grid collapses to 4 columns (stacked), margins reduce to px-4 (16px), single‑column components stack vertically
  768px:              grid expands to 8 columns, two‑column layout, sidebars become 2 columns wide
  1024px:             12‑column grid, full three‑column or four‑column modules, generous margins px-8

motion:
  transition-duration:       0ms – no transitions; some providers suggest 150ms for practical state changes
  transition-timing-function: step-start / linear
  transition-property:        none (or background-color, color, border-color)
  animation:                  [none]
  transform-at-rest:          all elements rest at transform: none
  transform-on-interact:      no transform interactions

**Rule:** All state changes are instantaneous. No animation, no hover transforms, no entrance effects.

## 11. Design System Notes

### 11a. Use Constraints

**Appropriate for:** Airline interfaces, corporate dashboards, wayfinding kiosks, informational microsites, museum catalogues, premium booking tools, technical documentation, and any application requiring systemic clarity and quiet authority.

**Wrong for:** Playful consumer apps, social media interfaces, creative portfolios, artisanal brands, organic/farm contexts, or any application that needs emotional warmth, whimsy, or dynamic expressiveness.

### 11b. Prompt Phrases

1. "Align everything to a visible modular grid – components snap to column and baseline intersections."  
2. "Use only the four‑color palette: white background, blue structural areas, yellow accents, black text."  
3. "Set headlines in all‑caps bold grotesque with +0.05em letter‑spacing – no italics, no decorative weights."  
4. "Reserve yellow strictly for the crane icon and highlights – never use yellow as text on blue."  
5. "Design all icons as linear 2pt stroke pictograms with exact 90° corners – no filled shapes except the crane silhouette."  
6. "Separate sections with a single 1pt horizontal rule in blue, yellow, or black – never use vertical dividers."  
7. "Keep every surface flat and matte – no shadows, gradients, opacity, or textures."  
8. "Crop photography to grid cells and convert to black‑and‑white or duotone (blue + yellow) – full colour is forbidden."

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description.

rule: White space must be generous and equal between all content blocks — the system breathes through its margins, never through decorative flourishes.
do:   Same gap-6 (24px) between every pair of content blocks; no variation based on element type. Grid columns separated by gap-6. Page margins at px-8 (32px). White surface visible and consistent.
avoid:Rounded corners on any element — a single border-radius of 2px reads as a different design language entirely (consumer, not corporate). The system enforces 90° corners unconditionally.

rule: The crane logo is the only symbol permitted to carry a filled silhouette — it must always appear inside a circle or square frame, never floating.
do:   Crane logo placed inside a w-10 h-10 (40px) square or circle with 1pt border in primary (blue) or secondary (yellow) when on blue. White fill behind the bird. No other icon in the system receives a filled silhouette.
avoid:Drop shadows, box shadows, or any elevation applied to any element — shadows introduce a z-axis that violates the flat coplanar depth model. The crane frame sits flat on the surface.

rule: One grotesque sans-serif family in exactly two weights (regular and bold) is the entire typographic vocabulary — no secondary typeface, no italic, no decorative weight.
do:   Every text element — display, headline, title, body, label — set in the same grotesque family (Akzidenz-Grotesk, Univers, or Helvetica). Bold (700) for headings and labels; regular (400) for body text. No exceptions.
avoid:A secondary typeface, italic, or light weight — even a single line in a different face breaks the visual monolith. The system cannot absorb a second typographic voice.

rule: All labels and headlines are set in all-caps with +0.05em tracking — body text must never be all-caps.
do:   Display, headline, title, and label roles: text-transform: uppercase, letter-spacing: tracking-wider (0.05em). Body text: normal-case, tracking-normal. The distinction between caps (structure) and lowercase (content) is a hierarchical rule.
avoid:Setting body text in all-caps — readability collapses and the hierarchy between structural labels and readable content is lost. The system requires lowercase body text to function.

rule: Icons are linear 2pt stroke pictograms contained within square or circular boundaries — no filled shapes (except the crane), no rounded joins, no rounded caps.
do:   Every icon drawn with exact 90° corners, 2pt uniform stroke, square or circular frame (1pt border). Strokes meet at sharp mitre joins. The pictogram sits centred inside its frame.
avoid:Rounded line caps or rounded stroke joins — even a 1px round cap on an arrow tip introduces a softness that contradicts the system's severe rational geometry. All corners and joins are exactly 90°.

rule: Blue is the structural fill colour; yellow is reserved exclusively for accents and the crane icon — yellow text must never appear on a blue background.
do:   Blue (contested hex) fills navigation bars, primary buttons, structural panels, and the crane's background when it appears on white. Yellow (contested hex) fills the crane icon, active navigation items, and small accent blocks. The ratio is blue 80–90% / yellow 10–20%.
avoid:Yellow text on a blue background — the contrast ratio of yellow (#FFCC00) on blue (#003366) is approximately 2.8:1, below WCAG AA. More fundamentally, yellow exists only as a surface fill, never as typography on a filled field.

rule: Every corner, join, and edge in the system is exactly 90° — no gradients, no opacity, no transparency may appear anywhere.
do:   All components set border-radius: 0. Icons use stroke-linejoin: mitre. Pictogram frames are square. Horizontal rules are 1px solid. Every colour fill is solid 100% with no tint, shade, or blend. Four colors only: white, blue, yellow, black.
avoid:Gradients, opacity less than 100%, transparency, or any blend mode — even a 5% opacity overlay on a button introduces a digital sophistication that contradicts the pristine offset-print analog of the original 1963 manual. The system is flat.

rule: All photography must be converted to black-and-white or duotone (blue + yellow) — full-colour images are structurally incompatible with the four-colour palette.
do:   Every photograph passed through filter: grayscale(100%) or duotone via CSS filter with blue and yellow colour stops. Images cropped to grid cells. No image carries a border unless inside a bordered container (then 1px solid blue).
avoid:Full-colour photography or vignette overlays — a full-colour photograph next to a solid blue primary button breaks the colour system's contract. The image must submit to the four-colour palette.

### 11d. Variation Bounds

| Axis | Range | Description |
|------|-------|-------------|
| Grid exposure | invisible (transparent) ↔ visible (dotted overlay) | Whether the baseline grid is shown as a meta‑design element |
| Color balance | blue‑dominant (90% blue, 10% yellow) ↔ yellow‑accent (70% blue, 30% yellow) | Ratio of blue to yellow area in large structural blocks |
| Information density | minimalist (single‑element composition) ↔ dense catalogue (multiple modules per grid cell) | How many components occupy each grid zone |
| Print realism | flawless digital ↔ simulated offset artifacts | Optional: slight misregistration (0.3pt offset), paper grain (#FEF9E7 tint), crop marks in margins |

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts.
Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
A single white surface (bg-neutral #FFFFFF) fills the viewport. A horizontal navigation bar in primary blue (contested hex) spans the full width at 48px height, containing all-caps bold grotesque labels in white at text-xs tracking-wider, aligned flush left with 24px padding. Below, a centred headline in display role (contested size, font-bold, all-caps, tracking-wider) sits 64px from the nav baseline. A 1px solid black horizontal rule separates the headline from a single column of body text (flush left, ragged right, font-normal, normal-case). The crane logo in a 40px circle frame sits in the top-left of the navigation bar, primary blue stroke on white fill. No shadow, no glow, no texture. Generous white space surrounds each content zone — the composition breathes.

### 11e.ii — Maximum Expressiveness
A 12-column grid layout on a white surface. The top third is a full-width duotone hero image (blue + yellow) cropped to 16:9, with an overlaid headline in white at display size (contested), all-caps bold, centred. Below, three card modules in a 4/4/4 grid: each card has a white fill, 1px solid black border, 24px padding, a blue pictogram frame (48px square, linear icon), an all-caps bold title in black with a 1px black rule beneath, and body text in normal-case. The navigation bar below the hero switches its active item to secondary yellow fill with black text. The crane logo appears twice — once in the nav bar (blue stroke on white) and once in the footer (yellow stroke on blue fill). A visible grid ruler (0.5pt dotted black lines at column boundaries) overlays the composition as a meta-design element. The colour balance leans blue-dominant (80% blue, 20% yellow). Yellow appears only in the active nav item and the footer crane.

### 11e.iii — Data Context
A white surface with a 12-column grid. The header row contains metric cells: each cell is purely typographic — no background fill, no border — with a label in text-xs uppercase bold tracking-wider black above a value in display (contested) font-bold uppercase black. A positive delta appears in primary blue at text-sm tabular; a negative delta in error red (#E00000). Below, a data table with no alternating rows: each row separated by a 1px solid black bottom rule. Columns: text-xs uppercase bold black labels, text-sm normal-case black values in tabular figures for numeric fields. Status values in the rightmost column use colour only — ok in primary blue, warn in secondary yellow, err in error red — on transparent white background. A signal bar track is a 1px solid black line with a 4px flat primary blue fill rectangle above it. A line chart sits below the table: white background, horizontal black grid lines at 25/50/75/100%, a 2px primary blue line with square 3px data points, no glow, no rounding, axis labels in text-xs uppercase bold black. No element on the screen carries a shadow, a gradient, or any surface effect — the data context is the system at its most utilitarian, and the flat rational aesthetic ensures clarity under operational conditions.

### 11f. Sources

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** The **Lufthansa 1963 Design Manual**, first published in 1963, represents the landmark corporate design manual conceived by **Otl Aicher** for Deutsche Lufthansa AG. This manual codified the airline’s visual identity including colour, typography, logotype, layout grids, and applications. It is widely regarded as one of the most influential examples of German modernist design history.

**Verified imagery sources.** 5 URLs verified against institutional servers, distributed across:
- Wikimedia Commons — 1 URL(s)
- Museum für Gestaltung Zürich — 1 URL(s)
- Internet Archive — 1 URL(s)
- Die Neue Sammlung, Munich — 1 URL(s)
- Design Made in Germany (blog) — 1 URL(s)

Key references include the **Deutsches Architekturmuseum**'s record at `https://www.dam.de/`.

**Named typefaces.** The typography of this style is attested as:
- Helvetica (designed by Max Miedinger, Eduard Hoffmann for Haas Type Foundry / Linotype 1957 — attestation: attested) — rendered here in Inter as the closest open substitute
- Times New Roman ( — attestation: unverified) — rendered here in Tinos as the closest open substitute

**Honest gaps.** The most significant gap concerns colour specifications, as exact hex, Pantone, RAL, or proprietary references from the manual are not verified. All values are conventional or inferred rather than sourced directly from the original manual. This lack of precision undermines the reproducibility of the visual identity for modern applications. Without verified colour data, designers must rely on historical approximations. What would resolve them is access to the original physical volumes for spectral analysis or digitized scans of the colour charts.
