---
version: alpha
name: "Swiss Grid Precision (Synthesis)"
description: "Rigorous Swiss typographic system rooted in Müller-Brockmann and the Zurich School — modular grids, neo-grotesque type, high-contrast black-and-white photography, a single restrained accent hue, and flat unmodulated surfaces that deliver objective, authoritative clarity."
colors:
  primary: "#000000"
  on-primary: "#FFFFFF"
  surface: "#FFFFFF"
  on-surface: "#000000"
  outline: "#000000"
  ok: "#000000"
  delta-up: "#000000"
typography:
  display:
    fontFamily: "Helvetica Neue"
    fontSize: "60px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.025em"
    textTransform: "uppercase"
  headline:
    fontFamily: "Helvetica Neue"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.025em"
    textTransform: "uppercase"
  title:
    fontFamily: "Helvetica Neue"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.375
    letterSpacing: "0em"
  body:
    fontFamily: "Helvetica Neue"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "-0.025em"
  label:
    fontFamily: "Helvetica Neue"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.5
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
  gap-section: "48px"
  height-sm: "32px"
  height-md: "40px"
  height-lg: "48px"
  icon: "20px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.button}"
    padding: "16px"
    height: "40px"
  button-primary-hover:
    backgroundColor: "#DA291C"
    textColor: "#FFFFFF"
    padding: "16px"
    height: "40px"
  button-secondary:
    backgroundColor: "#FFFFFF00"
    textColor: "#000000"
    rounded: "0px"
    padding: "16px"
    height: "40px"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "16px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.input}"
    padding: "16px"
    height: "40px"
  metric-cell:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    padding: "16px"
provenance:
  coverage_status: "sparse"
  identity_description: "The slug `josef-muller-brockmann` refers unambiguously to Josef Müller-Brockmann (1914–1996), the Swiss graphic designer, educator, and author who was a central figure in the International Typographic Style (Swiss Style). This record catalogues the visual identity of his body of work — primarily his posters, book designs, and systematic design principles — not a single corporate identity. The "
  manual_enrichment_required: false
  imagery_count: 4
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "www.emuseum.ch"
      count: 1
    - host: "en.wikipedia.org"
      count: 1
    - host: "www.klingspor-museum.de"
      count: 1
    - host: "www.moma.org"
      count: 1
  imagery_urls:
    - url: "https://www.emuseum.ch/objects/13937"
      host: "www.emuseum.ch"
      institution: "Museum für Gestaltung Zürich"
      confidence_original: low
    - url: "https://en.wikipedia.org/wiki/Josef_M%C3%BCller-Brockmann"
      host: "en.wikipedia.org"
      institution: "Wikipedia/Wikimedia"
      confidence_original: high
    - url: "https://www.klingspor-museum.de/"
      host: "www.klingspor-museum.de"
      institution: "Klingspor Museum, Offenbach"
      confidence_original: low
    - url: "https://www.moma.org/"
      host: "www.moma.org"
      institution: "Museum of Modern Art, New York"
      confidence_original: low
  typefaces_attested:
    - name: "Akzidenz-Grotesk"
      foundry: "Berthold"
      year: 1898
      google_fonts: "Archivo"
      attestation: "attested"
    - name: "Helvetica"
      foundry: null
      year: null
      google_fonts: "Inter"
      attestation: "unknown"
    - name: "Univers"
      foundry: null
      year: null
      google_fonts: "Manrope"
      attestation: "unknown"
  flags:
    - "sparse_imagery"
    - "2_robots_disallowed_urls"
  honest_gaps:
    - "1. **Colour specification**: No verified CMYK or Pantone values for any artefact. All hex approximations are unverified, inferred from reproductions."
---
# Design System: Swiss Grid Precision (Synthesis)

## 0. Taxonomy & Identity

entity-type: interface / system / environment  
artefact-family: operating system / software UI  
technique: CONTESTED:§0.technique — providers split 2-2 on [digital raster / digital vector]; no majority  
movement-lineage: design movement  
era: postwar  
geography: central europe  
domain: publishing / media / music  
formal-traits: grid-based, asymmetric, geometric, minimal  
color-logic: spot-color  
typography-mode: grotesque  
texture: matte, grainy  
function: inform  
provenance: revival / homage

## 1. Overview

This design system channels the rigorous objectivity of Swiss typographic design as exemplified by Josef Müller-Brockmann and the Zurich School. It prioritizes clarity, hierarchy, and functional information delivery through modular grids, neo-grotesque typography, and high-contrast black-and-white photography. The emotional tone is neutral, authoritative, and precise—no decoration, no softness. Negative space is vast, colour is restrained to a single accent hue (classically red), and every element snaps to a visible geometric order. Physical print artifacts (halftone dot patterns, paper grain, ink gain) are optionally simulated to reinforce the analogue heritage.

- Emotional register: objective, rational, authoritative  
- Density level: variable—from sparse minimalism to information-dense, always grid-bound  
- Core rendering philosophy: flat, solid, unmodulated—no gradients, no transparency, no drop shadows  
- What breaks the style: gradients, rounded corners, decorative typefaces, centered text, multiple accent colors, drop shadows, glossy surfaces, illustration  
- Physical texture simulation (optional): offset-printed matte paper stock; fine halftone 85–133 lpi; paper grain via SVG feTurbulence; optional ink misregistration 0.5–1pt at colour/black boundaries

## 2. Constants

Light Mode: primary — white/cream background with black text  
Dark Mode: CONTESTED:§2.dark_mode — providers split 2-2 on [yes, no]; no majority  
Responsive: yes — grid columns reduce proportionally (6→4→2→1) while preserving asymmetric balance  
States: Default, Active, Disabled; Hover, Focus, Error applicable for interactive elements  
surface-simulation: paper — offset-printed matte paper stock; fine halftone 85–133 lpi on photographic areas; paper grain via SVG feTurbulence; optional ink misregistration 0.5–1pt at colour/black boundaries

## 2a — Interaction Model

hover-delta:        color-shift — text or fill color changes to accent red on hover; no movement, no shadow change, no opacity shift
active-delta:       none — no visual change on active/press beyond the hover state
focus-style:        color-border — border-bottom or outline changes to accent color; no glow ring, no box-shadow
transition-duration:150ms — applied to all interactive state transitions (hover, focus)
transition-easing:  ease-out
exempt-animations:  none — no named keyframe animations in this system; all state changes are transitions only

## 3. Colors

primary (#000000) [attested] — Black: all text, structural lines, geometric shapes, navigation  
on-primary (#FFFFFF) [attested] — White: text and icons on black surfaces  
surface (#FFFFFF) [attested] — White: primary canvas, card and panel backgrounds  
on-surface (#000000) [attested] — Black: body text, labels, and content on light surfaces  
accent (#CONTECTED:§2.hex_accent) — Red [unverified]: single accent hue; providers gave [#FF0000, #DA291C, #E30613, #E31B23]; no consensus  
error (#CONTECTED:§2.hex_error) — Red error: providers gave [#D50000, #DA291C, #E31B23]; no consensus  
outline (#000000) [attested] — Black: borders, dividers, grid rules, focus rings  

*Additional accent options (yellow, blue) are permissible but not standardized; each interface uses exactly one accent hue.*

Semantic state colors:
ok:         #000000 — Black; confirmed, nominal, standard state (objective neutral — absence of accent signals normality)
warn:       #CONTECTED:§2.hex_accent — Red accent; caution, attention required, advisory state
err:        #CONTECTED:§2.hex_error — Red error; same as error role; critical, failure
delta-up:   #000000 — Black; positive numeric delta (neutral, confirmed)
delta-down: #CONTECTED:§2.hex_accent — Red accent; negative delta draws attention
delta-flat: #000000 at opacity-50 — Muted black; no change

Note: Swiss Grid Precision uses a single accent hue for all attention-drawing states. ok defaults to black (neutral) rather than green, consistent with the system's restricted chromatic palette. warn and err share the same accent red — differentiation is by typographic treatment and context, not by color. ok is intentionally not the primary accent, which is red, not green.

## 4. Typography

font-family: CONTESTED:§3.primary_typeface — providers gave [Helvetica; Helvetica/Arial; Akzidenz-Grotesk/Helvetica/Univers; Helvetica Neue/Akzidenz-Grotesk/Univers]; no cited foundry or year  
secondary typeface: same family (single family used throughout) — CONTESTED:§3.secondary_typeface  
Google Fonts substitute: CONTESTED:§3.google_fonts_substitute — no provider specified a Google Font; fallbacks include Arial or system sans-serif  

display:
  font-family: CONTESTED:§3.primary_typeface
  font-size: text-6xl (60px) [conventional]
  font-weight: font-bold or font-black
  line-height: leading-none or leading-tight
  letter-spacing: tracking-wider to tracking-widest
  text-transform: uppercase

headline:
  font-family: CONTESTED:§3.primary_typeface
  font-size: text-4xl (36px) [conventional]
  font-weight: font-bold
  line-height: leading-tight
  letter-spacing: tracking-wide
  text-transform: uppercase

title:
  font-family: CONTESTED:§3.primary_typeface
  font-size: text-2xl (24px) [conventional]
  font-weight: font-semibold or font-medium
  line-height: leading-snug
  letter-spacing: tracking-normal
  text-transform: normal-case (some uppercase options)

body:
  font-family: CONTESTED:§3.primary_typeface
  font-size: text-sm (14px) [conventional]
  font-weight: font-normal
  line-height: leading-relaxed (1.5–2× point size)
  letter-spacing: tracking-tight
  text-transform: normal-case

label:
  font-family: CONTESTED:§3.primary_typeface
  font-size: text-xs (12px) [conventional]
  font-weight: font-medium or font-bold
  line-height: leading-normal
  letter-spacing: tracking-wide
  text-transform: uppercase

**Type rules:** All text flush left, ragged right; no centering, no full justification, no hyphenation. Type sizes follow a modular scale (common: 12, 14, 16, 24, 36, 48, 60). Wide tracking on headlines, tight on body. One type family per system.

## 5. Elevation

Flat depth model — no shadow hierarchy. All elements rest on the same z-plane. Stacking order: base content (z-0), structural lines and overlays (z-10–z-20), modals (z-30). No drop shadows, no elevation offsets.

## 6. Spacing & Sizing

padding:
  component-internal: p-4 (16px)
  section-internal: p-8 (32px)
  page-edge: p-8 (32px)

margin:
  between-components: CONTESTED:§6.between_components — providers gave [gap-6, gap-4, gap-6, gap-4]
  between-sections: gap-12 (48px) [majority]

component-heights:
  sm: h-8 (32px) [majority]
  md: h-10 (40px) [majority]
  lg: h-12 (48px) [majority]

icon-size: w-5 h-5 (20px) [majority]

*All measurements reference an 8px base grid.*

## 7. Borders

border-radius:
  default: rounded-none (0px) [unanimous]
  card: rounded-none
  button: rounded-none
  input: rounded-none
  chip/badge: rounded-none

border-width:
  default: CONTESTED:§7.border_width — providers gave [1px, 2px, 1px, 0]; no consensus
  emphasis: CONTESTED:§7.border_emphasis — providers gave [2px, 4px, 2px, 2px]

border-style: border-solid [unanimous]

## 8. Opacity

disabled-state: opacity-50 (50%) [unanimous]  
overlay/scrim: not applicable (no translucent overlays in this style)  
hover-feedback: CONTESTED:§8.hover_opacity — providers gave [no opacity change, 10% tint, no opacity change, no opacity change]; majority says no opacity change  

## 8.5. Visual Effects

### 8.5.0 — Physical Material Model

Declares the top-level surface simulation governing the entire page canvas.
This is distinct from component-level textures (§8.5d) — it is the global rendering layer.

material-model:    paper

global-filter:     contrast(1.02) — very subtle contrast boost simulating printed ink
                   on matte uncoated paper stock

global-overlay:    Paper grain via body::before pseudo-element:
                   SVG feTurbulence baseFrequency=0.85 numOctaves=3
                   blend: overlay, opacity-8, position:fixed, pointer-events:none

rendering-flags:
  font-smoothing:  antialiased
  image-rendering: auto
  text-rendering:  auto

### 8.5d — Texture & Noise Simulation

**halftone-screen**  
Technique: SVG feTurbulence (fractalNoise, baseFrequency 0.65–0.85, numOctaves 2–3) or CSS repeating-radial-gradient  
Surface: photographic image containers (masked to card border)  
Intensity: moderate to subtle  
Blend: multiply, opacity-15 to 25  
Color: monochrome (black dots)  
Animation: none  
Tailwind-approximation: no native equivalent; use custom CSS utility

**paper-grain**  
Technique: SVG feTurbulence (fine noise, baseFrequency ~0.85, numOctaves 3) or data-URI PNG noise tile  
Surface: page background or card surfaces  
Intensity: barely perceptible  
Blend: overlay, opacity-5 to 10  
Color: monochrome  
Animation: none

When both effects are used, compositing stack: base fill → paper-grain (overlay, ~10%) → halftone-screen (multiply, ~15%) on image areas.

## 9. Components

**icon-vocabulary**  
System: custom geometric glyphs—circles, rectangles, lines, arrows—minimal strokes  
Size: w-5 h-5 (20px)  
Color: inherit currentColor  
Treatment: purely flat, solid or outlined (no glow, no gradients, no animation)  
Restrictions: no organic curves, no multi-colour icons, no detailed pictograms

**image-treatment**  
Aspect-ratio: aspect-4/3 (default), aspect-16/9, or full-width bleed  
Object-fit: object-cover  
Filter: grayscale(100%) contrast(120–150%) – all photographic images converted to black-and-white  
Overlay: optional halftone screen as described in 8.5d  
Border: 1px solid #000000 (optional)  
Dark-mode: not applicable (light mode only)

**Button (primary)**  
Fill: #000000, Text: #FFFFFF uppercase, rounded-none  
Border: 1px solid #000000 (or border-0)  
Hover: fill switches to accent red (#CONTECTED) or same  
Active: unchanged or slightly darker  
Disabled: opacity-50

**Button (secondary)**  
Fill: transparent, Text: #000000 uppercase, rounded-none  
Border: 1px solid #000000  
Hover: fill #000000, text #FFFFFF (or border changes to accent)  
Disabled: opacity-50

**Card / Panel**  
Fill: #FFFFFF, rounded-none  
Border: optional 1px solid #000000 or border-l-4 for grid anchor  
No shadow, no elevation  
Internal padding: p-4 to p-6

**Navigation**  
Horizontal list of uppercase labels  
Active: underline (border-b-2 solid black) or solid black fill  
Hover: text color changes to accent or underline becomes accent  
No dropdown arrows; simple geometric icons if needed

**Input / Form Field**  
Border-bottom only (border-b-2 or border)  
Focus: border becomes accent color, no box-shadow  
Error: border becomes red (accent)  
Label: uppercase, text-xs, placed above field  
No background fill on default state

**Geometric Accent (shapes)**  
Solid black or accent circle/rectangle sized to grid modules (e.g., w-10 h-10)  
Used as structural anchors, bullet markers, or spatial organizers

**Data Display Components:**

metric-cell:
  Background: #FFFFFF (surface white).
  Border: border-b-2 #000000 (black structural rule).
  Label: neo-grotesque text-xs uppercase tracking-wide, #000000 (on-surface).
  Value: neo-grotesque text-2xl font-bold, #000000 (on-surface).
  Delta: text-sm; positive in #000000 (black, neutral), negative in accent red (#CONTECTED:§2.hex_accent).
  No glow, no drop-shadow — flat, unmodulated surface.

signal-bar:
  Track: #000000 at opacity-15 (light gray grid line on white surface).
  Fill: accent red (#CONTECTED:§2.hex_accent). Height: 4px.
  Border: none.
  No glow, no texture on fill — solid flat colour field.

status-cell:
  ok:   #000000 text only — confirmed state communicates through absence of accent colour.
  warn: accent red (#CONTECTED:§2.hex_accent) text.
  err:  accent red (#CONTECTED:§2.hex_error) text + border-l-4 in accent red.
  Fill: always transparent (#FFFFFF surface) — status communicated by text color and border, not by fill.

data-table-row:
  Alternating: odd rows #FFFFFF (surface); even rows #F5F5F5 (neutral off-white within grid structure).
  Cell border: border-b 1px solid #000000.
  Label: neo-grotesque text-xs uppercase, #000000.
  Value: neo-grotesque text-sm, #000000.
  No row-level shadow or elevation — all rows rest on the same z-plane.

chart-surface:
  Background: #FFFFFF (surface white).
  Grid lines: 1px #000000 at opacity-15.
  Axis labels: neo-grotesque text-xs uppercase, #000000 at opacity-60.
  Line: #000000 stroke-width 1.5px, no drop-shadow.
  Dots: #000000 r=2.5px. No glow.

## 10. Layout

**Grid philosophy:** Modular grid with 4–6 columns on desktop, 2–4 on tablet, 1–2 on mobile. Row height determined by content. Margins generous (2–3× column width), gutters narrow and consistent (gap-4). All elements align to grid intersections; no optical centering. One element per layout may deliberately break the grid for tension.

**Breakpoints:**  
- 375px (mobile): single column; margins p-4; headlines reduce one size step  
- 768px (tablet): 2–4 column grid; headlines standard  
- 1024px+ (desktop): 4–6 column full grid; margins p-8

**Motion:**  
Transition-duration: 150ms on interactive elements (hover, focus) [majority]  
Transition-timing-function: ease-out  
Transition-property: color, background-color, border-color, opacity  
Animation: none (no decorative animations, no entrance/exit effects)  
Transform-at-rest: none  
Transform-on-interact: none (no scale, no rotation)

## 11. Design System Notes

### 11a. Use Constraints

Appropriate for: data dashboards, editorial interfaces, museum/archive apps, technical documentation, civic portals, financial tools, any context demanding clarity, objectivity, and hierarchy.

Wrong for: playful consumer apps, social media, games, luxury fashion, children's interfaces, contexts requiring ornament or emotional warmth.

### 11b. Prompt Phrases

1. "Asymmetric modular grid with bold grotesque headlines and a single red accent"  
2. "High-contrast black-and-white photography cropped to strict geometry"  
3. "Flat, unmodulated colour fields – no gradients, no shadows, no blends"  
4. "Left-aligned ragged-right sans-serif typography, no hyphenation"  
5. "Thin black grid rules and hairline dividers structuring the composition"  
6. "Generous negative space as an active compositional element"  
7. "Halftone dot overlay and fine paper grain simulating offset print"

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description. Minimum 4 rules, maximum 8.

rule: Every element must snap to the underlying modular grid — optical centering and free placement are forbidden.
do:   Card positioned with its top-left corner on a grid intersection; headline text aligned to column start; image spanning exactly 2 or 3 grid columns with edges on gutter boundaries.
avoid:Card placed at an arbitrary offset from the grid; headline optically centered within its container using text-align: center.

rule: Exactly one neo-grotesque typeface family is used throughout the entire system — no serif, script, decorative, or display faces appear at any hierarchy level.
do:   Helvetica Neue (or Akzidenz-Grotesk / Univers) at text-6xl font-bold uppercase for display, text-sm font-normal for body, text-xs font-medium uppercase for labels — all from the same family.
avoid:A serif typeface like Garamond for body text; a script or decorative display face for headlines.

rule: A single accent colour per interface — red, yellow, or blue — and no other chromatic hues appear.
do:   #DA291C red applied to one CTA button fill, one active navigation underline, and one geometric accent circle — the only non-black-and-white colour on the page.
avoid:A red CTA button alongside a yellow status badge and a blue link — three chromatic hues in a single view.

rule: All photographic images are converted to high-contrast grayscale — no colour photography, no hand-drawn illustration.
do:   grayscale(100%) contrast(130%) CSS filter on every photograph; halftone screen overlay (multiply, opacity-20) reinforcing the offset-print aesthetic.
avoid:A full-colour RGB photograph in a card; a painterly watercolour illustration used in place of photography.

rule: Negative space is an active compositional element, not leftover room — it is deliberately allocated, not accidentally empty.
do:   200px of white space between a text-4xl headline and the first content block below it; page margins at 2–3× column width, creating a breathable frame.
avoid:Every grid cell packed with content; margins reduced to p-2; no visual pause between sections.

rule: Geometric shapes — circles, rectangles, hairline rules — are the only permitted decorative/structural elements; no organic or hand-drawn forms.
do:   A 40×40px solid black circle (w-10 h-10, #000000) as a bullet marker; a 1px solid black horizontal rule (border-b, #000000) as a section divider.
avoid:An organic curved line illustration; a hand-drawn brushstroke texture used as a background or divider.

rule: Surfaces are flat and unmodulated — no gradients, no transparency, no drop shadows of any kind.
do:   #000000 solid fill on a button with no box-shadow; 1px solid #000000 border on a card with zero elevation.
avoid:box-shadow: 0 2px 8px rgba(0,0,0,0.15) on a card; a linear-gradient fill on a button; opacity less than 100% on any colour field.

rule: All text is flush-left ragged-right — never centered, never justified, never hyphenated. Line breaks are manual and grid-aligned.
do:   All body and headline text set text-left with natural ragged right edge; line breaks in headlines positioned to align with grid column boundaries.
avoid:text-align: center on a headline; text-align: justify on a body paragraph; hyphens: auto allowing word breaks mid-line.

### 11d. Variation Bounds

- **Grid density:** Loose (3-column) ↔ Standard (4-column) ↔ Dense (6-column)  
- **Accent hue:** Classic red ↔ Yellow ↔ Blue ↔ Muted (ochre/olive/slate)  
- **Photographic vs. geometric dominance:** Image-led ↔ Geometry-led  
- **Artifact intensity:** Pristine digital ↔ Heavy halftone, paper grain, misregistration  
- **Grid strictness:** Perfect alignment ↔ One element breaks grid for tension  
- **Monochromatic vs. accent:** Pure black/white ↔ Accent used sparingly

### 11e. Compositional Signatures

### 11e.i — At Rest
A 4-column modular grid on a white (#FFFFFF) canvas with paper-grain overlay at opacity-8. Primary headline in neo-grotesque text-4xl font-bold uppercase tracking-wide at column 1, spanning 2 columns, #000000 on #FFFFFF. Below, a high-contrast grayscale photograph (grayscale(100%) contrast(130%)) fills a 2×2 module block, aligned to grid intersections with optional 1px #000000 border. A single geometric accent — a small solid red circle (w-10 h-10, #CONTECTED:§2.hex_accent) — anchors the composition at a grid intersection near the lower-right. Body text in text-sm font-normal flush-left at column 3–4. Generous white space: margins at 2× column width (p-8). Thin 1px black hairline rules (border-b, #000000) divide sections. No shadows, no rounded corners, no colour beyond black, white, and the single red accent circle.

### 11e.ii — Maximum Expressiveness
A 6-column dense grid at maximum information density. Three to five content blocks stacked vertically. A full-width text-6xl font-bold uppercase headline in #000000 spans all 6 columns with tracking-widest. Below, an asymmetric split: a 4-column grayscale photograph with halftone screen overlay (multiply, opacity-20) beside a 2-column text block containing a text-2xl font-semibold subheadline and text-sm font-normal body copy. Geometric accent shapes — black rectangles and a single red circle (#CONTECTED:§2.hex_accent) — mark grid intersections. A thick #000000 rule (border-b-4) separates the headline band from the content zone. Paper grain on all surfaces at opacity-8. Halftone dot pattern applied only to photographic areas. One element — a red accent rectangle — deliberately breaks the grid, overlapping a column gutter by 8px for compositional tension. No animation, no transitions on page load, no shadows. Every element snaps to the modular grid except the single tension-breaking accent.

### 11e.iii — Data Context
A 6-column data dashboard on white (#FFFFFF) surface with paper-grain overlay at opacity-8. Column headers in neo-grotesque text-xs font-medium uppercase tracking-wide with border-b-2 #000000 structural rule. Data table rows alternate #FFFFFF (surface) / #F5F5F5 (neutral off-white) with 1px #000000 cell borders — no shadow, no elevation. Metric cells display values in text-2xl font-bold #000000 on white with border-b-2 #000000 baseline rules; labels in text-xs uppercase. Status indicators use text color only: ok in #000000 (neutral — absence of accent signals normality), warn in accent red (#CONTECTED:§2.hex_accent), err in accent red (#CONTECTED:§2.hex_error) with border-l-4 accent treatment. Signal bars are 4px height: #000000 opacity-15 track with accent red fill proportional to value — solid flat colour, no glow. Charts plot data with #000000 lines (stroke-width 1.5px) on #FFFFFF surface, grid lines at #000000 opacity-15, axis labels in text-xs uppercase at opacity-60. Negative space between data modules maintained at gap-6. Delta indicators: positive in #000000 (neutral), negative in accent red (#CONTECTED:§2.hex_accent), flat in #000000 at opacity-50. No glow, no shadows, no colour beyond black, white, and the single accent red — data density is managed through grid structure and typographic hierarchy, not chromatic variety.

### 11f. Sources

Imagery coverage is sparse — only 4 institutional records verified.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** (Prose generation failed — see provenance block for attribution data.)

**Verified imagery sources.** 4 URLs verified against institutional servers, distributed across:
- Museum für Gestaltung Zürich — 1 URL(s)
- Wikipedia/Wikimedia — 1 URL(s)
- Klingspor Museum, Offenbach — 1 URL(s)
- Museum of Modern Art, New York — 1 URL(s)

**Named typefaces.** The typography of this style is attested as:
- Akzidenz-Grotesk (for Berthold 1898 — attestation: attested) — rendered here in Archivo as the closest open substitute
- Helvetica ( — attestation: unknown) — rendered here in Inter as the closest open substitute
- Univers ( — attestation: unknown) — rendered here in Manrope as the closest open substitute

**Honest gaps.** (No documented gaps were recorded by the forensic pipeline.)
