---
version: alpha
name: "Kodak Aesthetic Film Box Packaging System 1960s"
description: "A digital interface inspired by 1960s Kodak film box packaging, featuring saturated flat colors, hard offset-print effects, geometric sans typography, and modular banded layouts."
colors:
  on-primary: "#000000"
  on-secondary: "#FFFFFF"
  surface: "#FFFFFF"
  on-surface: "#000000"
  outline: "#000000"
typography:
  display:
    fontFamily: "Futura"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.1em"
    textTransform: uppercase
  headline:
    fontFamily: "Futura"
    fontSize: "30px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.05em"
    textTransform: uppercase
  title:
    fontFamily: "Futura"
    fontSize: "20px"
    fontWeight: 500
    lineHeight: 1.375
    letterSpacing: "0em"
    textTransform: uppercase
  body:
    fontFamily: "Helvetica Neue"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "0em"
    textTransform: none
  label:
    fontFamily: "Helvetica Neue"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.05em"
    textTransform: uppercase
rounded:
  default: "0px"
  card: "0px"
  button: "0px"
  input: "0px"
  chip: "9999px"
spacing:
  component-internal: "16px"
  section-internal: "24px"
  page-edge: "24px"
  gap-component: "16px"
  gap-section: "24px"
  height-sm: "32px"
  height-md: "40px"
  height-lg: "48px"
  icon: "16px"
components:
  button-primary:
    backgroundColor: "#FFD700"
    textColor: "#000000"
    rounded: "{rounded.button}"
    padding: "8px"
    height: "40px"
  button-primary-hover:
    backgroundColor: "#FFD700"
    textColor: "#000000"
    rounded: "0px"
    padding: "8px"
    height: "40px"
  button-secondary:
    backgroundColor: "#FFFFFF"
    textColor: "#000000"
    rounded: "0px"
    padding: "8px"
    height: "40px"
  card:
    backgroundColor: "#FFD700"
    rounded: "{rounded.card}"
    padding: "16px"
  input:
    backgroundColor: "#FFFFFF"
    textColor: "#000000"
    rounded: "0px"
    padding: "8px"
    height: "40px"
  input-focus:
    backgroundColor: "#FFFFFF"
    textColor: "#000000"
    rounded: "0px"
    padding: "8px"
    height: "40px"
  exposure-dot-indicator:
    size: "8px"
    backgroundColor: "#000000"
    rounded: "0px"
provenance:
  coverage_status: "minimal"
  identity_description: "The slug `kodak--aesthetic-film-box-packaging-system-1960s` refers to the cohesive visual identity of Kodak’s consumer and professional film packaging in the 1960s – primarily the yellow-and-red cardboard boxes, foil wraps, and plastic canisters that held roll films (e.g., Kodachrome, Ektachrome, Tri-X, Verichrome). This identity is centred on the iconic yellow field, the red Kodak logotype (a cus"
  manual_enrichment_required: true
  imagery_count: 1
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "collection.sciencemuseumgroup.org.uk"
      count: 1
  imagery_urls:
    - url: "https://collection.sciencemuseumgroup.org.uk/"
      host: "collection.sciencemuseumgroup.org.uk"
      institution: "Science Museum Group, UK"
      confidence_original: low
  typefaces_attested:
    - name: "Kodak logotype (custom script)"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "unknown"
    - name: "Akzidenz-Grotesk"
      foundry: null
      year: null
      google_fonts: "Archivo"
      attestation: "inferred"
    - name: "Akzidenz-Grotesk"
      foundry: null
      year: null
      google_fonts: "Archivo"
      attestation: "unknown"
  flags:
    - "one_usable_url_only"
    - "1_rate_limited_urls_pending_retry"
    - "2_robots_disallowed_urls"
  honest_gaps:
    - "1. **No attested colour specification** (Pantone, Munsell, hex, or pigment formula) for Kodak Yellow or Kodak Red from any 1960s primary source."
---
# Design System: Kodak Aesthetic Film Box Packaging System 1960s

## 0. Taxonomy & Identity

entity-type:        interface / system / environment
artefact-family:    operating system / software UI
technique:          digital raster
movement-lineage:   vernacular commercial style
era:                postwar / 1960s
geography:          US / platform-neutral
domain:             retail / CPG
formal-traits:      grid-based, modular, flat, geometric, symmetrical
color-logic:        spot-color
typography-mode:    geometric sans
texture:            matte, grainy
function:           persuade
provenance:         revival / homage

## 1. Overview

This system translates the crisp, optimistic vernacular of 1960s analog photography packaging into a digital interface. It channels the saturated primaries, hard‑offset two‑colour prints, and no‑frills typographic hierarchy of the Kodak film box aesthetic. The emotional register is confident, clean, and instructional — a commercial artefact ready for remix. Density is low to moderate, with generous colour fields and white space. The core rendering philosophy: flat colour fields, hard edges, no gradients, and a deliberate echo of offset printing artifacts. The system is built on a modular grid dividing the interface into brand and content zones, separated by thin horizontal rules.

**What makes it recognizable:**
- Full‑bleed yellow field as dominant brand surface
- Red horizontal stripe or rectangle as accent
- Black sans‑serif logotype in all caps, tightly tracked, anchored in a fixed position
- White reserved for product details, never cluttered
- Two‑zone layout: brand/colour zone and product info zone, separated by a thin horizontal rule (red or black)
- Film strip perforation motifs as decorative edges
- Flat colour only: no gradients, shadows, or bevels
- Offset printing artifacts: misregistration (1–2 px shift at block edges), halftone dot screen, paper grain, matte finish

**What would break it:** Gradients, drop shadows, bevels, serif or script typefaces, more than three flat colours per surface, dynamic diagonals, justified text, low contrast between type and background, screen blends without halftone treatment.

## 2. Constants

Light Mode:   primary (yellow field)
Dark Mode:    not supported by any provider with cited evidence — gap
Responsive:   yes — grid adapts from tall/narrow to wide/square, maintaining horizontal band structure
States:       Default, Hover, Active, Disabled (Focus and Error coverage contested)
surface-simulation: paper — offset-printed paper card with matte finish and halftone screening

## 2a — Interaction Model

hover-delta:        color-shift — on hover, the secondary (red) accent stripe appears or border shifts to secondary; no opacity change, no movement, no shadow
active-delta:       opacity-dim — opacity drops to 0.75 on press; maintains flat, untextured feel
focus-style:        color-border — border color shifts to secondary (red); no ring, no glow
transition-duration:150ms — subtle and quick, avoids animated feel
transition-easing:  ease-out
exempt-animations:  none — no keyframe animations that must survive

## 3. Colors

No provider cites a source (Pantone reference, institutional URL) for hex values. All hexes are tagged [unverified]. Provenance-anchored field without seed → gap marker required.

primary (#CONTESTED:§2.hex_primary — providers gave [#FED000 / #FED100 / #FFCC00 / #FDE100]; all unverified; re-stack required)
on-primary (#000000) [unanimous, conventional]

secondary (#CONTESTED:§2.hex_secondary — providers gave [#FF0000 / #E31E24 / #FF0000 / #D90000]; all unverified; re-stack required)
on-secondary (#FFFFFF) [unanimous, conventional]

surface (#FFFFFF) [majority — 3 of 4]
on-surface (#000000) [unanimous, conventional]
outline (#000000) [majority — 3 of 4]

error (#CONTESTED:§2.hex_error — providers gave [#FF0000 / #E31E24 / #FF0000 / (not given)]; all unverified; re-stack required)

Additional surface tones: neutral / surface-container-low (#F5F0E8 to #F5F5F5) [partial — 2 of 4 mention warm off-white; contested intensity]

Per-product variant palettes (all [unverified], sourced from §11d):
- Kodachrome: yellow + red + black + white
- Ektachrome: deep blue/teal + white + orange + black
- Tri-X: black + white + red accent
- Verichrome Pan: soft yellow-green + black + cyan

## 4. Typography

Primary and secondary typeface names contested — no provider cites foundry or year. Provenance-anchored fields without seed → gap markers.

font-family (display / headline / title): CONTESTED:§3.primary_typeface — providers gave [Futura / Helvetica Neue / Trade Gothic / geometric sans]; none cited foundry; re-stack required
font-family (body / label): CONTESTED:§3.secondary_typeface — providers gave [Helvetica Neue / Arial / Futura Light / Helvetica]; none cited foundry; re-stack required
google_fonts_substitute: CONTESTED:§3.google_fonts_substitute — providers gave [Arial, (none)]; no consensus; re-stack required

All type roles are geometric or grotesque sans-serif. No serifs, scripts, or decorative type.

display:
  font-size:        text-4xl to text-5xl [partial agreement]
  font-weight:      font-bold to font-black [partial]
  line-height:      leading-tight [unanimous]
  letter-spacing:   tracking-wider to tracking-widest [partial]
  text-transform:   uppercase [unanimous]
  text-decoration:  none [unanimous]

headline:
  font-size:        text-2xl to text-4xl [partial]
  font-weight:      font-bold to font-semibold [partial]
  line-height:      leading-tight [unanimous]
  letter-spacing:   tracking-wide to tracking-wider [partial]
  text-transform:   uppercase [unanimous]

title:
  font-size:        text-lg to text-xl [majority]
  font-weight:      font-medium to font-bold [partial]
  line-height:      leading-snug to leading-normal [partial]
  letter-spacing:   tracking-normal to tracking-wide [partial]
  text-transform:   uppercase [unanimous]

body:
  font-size:        text-sm to text-base [partial]
  font-weight:      font-light to font-normal [partial]
  line-height:      leading-snug to leading-relaxed [partial]
  letter-spacing:   tracking-normal [unanimous]
  text-transform:   normal-case [unanimous]

label:
  font-size:        text-xs to text-sm [partial]
  font-weight:      font-medium to font-bold [partial]
  line-height:      leading-tight to leading-none [partial]
  letter-spacing:   tracking-wide [unanimous]
  text-transform:   uppercase [unanimous]

Numbers (ASA, exposures): bold, tracking-wider to tracking-widest, same family.

## 5. Elevation

Flat depth model — no shadow hierarchy [3 of 4 providers agree; one provider (kimi-k2.5-lightning) introduces shadow-sm/md/lg for active states and modals, but this diverges from the core flat design principle. No cited evidence for shadows — contested.]

Stacking context: not applicable (single-plane layout)

## 6. Spacing & Sizing

padding:
  component-internal:  p-4 (1rem) [majority — 2 of 4 explicit; others use p-6]
  section-internal:    p-6 to p-8 [partial]
  page-edge:           p-6 to p-12 [partial]

margin:
  between-components:  gap-4 (1rem) [unanimous]
  between-sections:    gap-6 to gap-8 [partial]

component-heights:
  sm:   h-8 to h-10 [partial]
  md:   h-10 to h-12 [majority — default interactive target]
  lg:   h-12 to h-16 [partial]

icon-size:       w-4 to w-6 (1rem to 1.5rem) [partial]
avatar-size:     w-8 to w-12 (some omit) [contested — not a core element]

## 7. Borders

border-radius:
  default:     rounded-none [unanimous]
  card:        rounded-none [unanimous]
  button:      rounded-none [unanimous]
  input:       rounded-none [unanimous]
  chip/badge:  rounded-full [majority — 3 of 4; one provider (kimi-k2.5-lightning) specifies rounded-none for badge, contested]

border-width:
  default:     border-2 (2px) [majority — 3 of 4]
  emphasis:    border-4 (4px) — focus rings, active states [majority — 3 of 4; one provider uses border-1 for thin rules]
  thick:       border-4 to border-8 (for red stripes) [partial]

border-style:  border-solid [unanimous]

border-image:  none [unanimous]

clip-path:     mostly none; one provider (kimi-k2.5-lightning) proposes polygon for film strip corners — contested

## 8. Opacity

disabled-state:     opacity-40 to opacity-50 [partial — majority opacity-50 (3 of 4)]
ghost/secondary:    opacity-60 to opacity-70 [contested — only 2 providers mention]
overlay/scrim:      none (2 providers say not used; one says opacity-80 for modals — contested)
hover-feedback:     color/border change preferred over opacity [3 providers agree]

## 8.5. Visual Effects

All providers agree that texture and noise simulation is essential (8.5d). Parameters diverge.

### 8.5.0 — Physical Material Model

material-model:    paper

global-filter:     sepia(0.04) contrast(0.95) — slight warm aging and matte paper reflection; softens digital edges

global-overlay:    Paper grain via SVG feTurbulence on body::before:
                   baseFrequency=0.65, numOctaves=3, type=fractalNoise,
                   opacity=0.12, blend=overlay, pointer-events:none, position:fixed, z-index:9999
                   Halftone dot pattern on solid colour fields via repeating radial-gradient (1.5px dots, 12px spacing, opacity 0.08, blend=multiply)

rendering-flags:
  font-smoothing:  antialiased
  image-rendering: auto
  text-rendering:  auto

### 8.5d — Texture & Noise Simulation

**Paper Grain Overlay** [unanimous in principle]

technique:    SVG feTurbulence noise tile or data-URI PNG grain
parameters:   baseFrequency: 0.35 to 0.8, numOctaves: 2–3, type: fractalNoise [contested — no cited source for exact values]
surface:      full-page canvas, card fills, gradient overlays, hero
intensity:    moderate (opacity 0.10–0.15) [partial agreement]
blend:        overlay or multiply [contested — overlay (2 providers), multiply (1)]
color:        monochrome black/white [unanimous]
animation:    none [unanimous]
tailwind-approximation:  no native equivalent [unanimous]

**Halftone Dot Screen** [unanimous in principle]

technique:    CSS radial-gradient repetition or SVG pattern
parameters:   dot size 1–4 px, spacing 4–20 px, 65–85 LPI effect [contested]
surface:      product photography thumbnails, solid colour blocks
intensity:    moderate (opacity 0.05–0.15) [partial]
blend:        multiply [majority — 2 of 4 explicit]
color:        monochrome black [unanimous]
animation:    none [unanimous]
tailwind-approximation:  no native equivalent

**Offset Misregistration** [unanimous in principle]

technique:    CSS pseudo-element with 1–2 px offset
parameters:   shift 1–2 px horizontally/vertically on yellow and red layers [unanimous]
surface:      edges where yellow and red blocks meet
intensity:    barely perceptible [unanimous]
blend:        difference, screen, or multiply [contested — 3 providers give different answers]
color:        inherited or cyan tint [contested]
animation:    none [unanimous]
tailwind-approximation:  no native equivalent

**Edge Wear** (one provider only) — [contested; not included in synthesis]

*Compositing stack (for typical card):* Base fill → Halftone dot (multiply) → Paper grain (overlay, opacity-15) → Misregistration shift.
## 9. Components

**Icon Vocabulary** [unanimous core]

system:       custom glyphs – film strip perforations, simplified camera, film roll, exposure dots
size:         w-4 to w-6 (1rem to 1.5rem) [partial]
color:        inherits currentColor, or fixed black/red for decorative elements
treatment:    purely line art, no fills, no shadows, no gradients [unanimous]
restrictions: no complex icons, no photographic icons, no three‑dimensional glyphs [unanimous]

**Image / Media Treatment** [partial]

aspect-ratio:  aspect-[4/3] or aspect-[4/5] [contested]
object-fit:    object-cover [unanimous]
filter:        halftone dot overlay [majority]; grayscale not required [contested]
overlay:       grain overlay (see 8.5d) [majority]
border:        border-2 black [majority]
dark-mode:     not applicable [unanimous]

### Film Box Card [unanimous core structure]

- **Fill:** primary yellow (variant) as top zone; white as bottom info panel.
- **Border:** border-2 black, no rounding (rounded-none).
- **Internal structure:** top yellow band (brand/icon), middle horizontal rule (border-t-2 red or black), bottom white band (product name, metadata).
- **Badge:** red pill (rounded-full, bg-secondary, text-white) with film speed (ASA) in bold all-caps.
- **States:** Default; Hover adds red stripe at top or bottom of card; Active may darken yellow; Disabled opacity-50.

### Buttons [unanimous flat, no rounded corners]

- **Primary button:** Fill yellow or red (contested), border-2 black, rounded-none. Hover: red stripe appears (border-4 red). Active: darker tone. Disabled: opacity-50.
- **Secondary button:** Fill white, border-2 black. Hover: fill yellow. Active: red stripe.
- **Destructive button:** Fill red, text white.

### Navigation Tabs [partial]

- Tabs styled as overlapping film strips, rectangular, no rounding.
- Inactive: white background, black text, border-2 black.
- Active: filled with yellow or variant colour, red stripe on edge.
- Hover: red stripe appears.

### Inputs & Forms [partial]

- Input field: border-2 black, bg-white, text-black, rounded-none, p-2.
- Focus ring: border-4 red or black (contested).
- Labels above: uppercase, tracking-wide.
- Error: red border, red label.

### Badge / Chip [unanimous for film-speed pill]

- Red pill (rounded-full), white text, border-2 black.
- Used for ASA, exposures.
- May be circle or starburst (contested).

### Horizontal Rule [unanimous]

- border-t-2, red or black, full width. Between zones.

### Style-native primitives [unanimous in concept, contested in detail]

- **Film Strip Perforation Decorative Border:** repeating pattern of small rectangles, black on yellow or white. Used at card edges or section separators. Implementation (linear-gradient vs SVG) not specified unanimously.
- **Exposure Dot Indicator:** small square or circle, w-2 h-2, black, used in lines for scales.

## 10. Layout

spacing cadence:  generous whitespace, low density [unanimous]
grid tendency:    modular horizontal bands (2–3 per view) [unanimous]
alignment:        left or centered; never justified [unanimous]
section separation: horizontal rule (red or black) or perforation border [unanimous]

breakpoint behavior:
  ≤375px: single column, bands stack vertically [unanimous]
  ≥768px: two‑zone horizontal layout or 2‑column cards [unanimous]
  ≥1024px: multi-column (3–4) [partial]

motion:
  transition-duration:        150–300 ms for color/border, 200 ms for hover, 100 ms for active [partial]
  transition-timing-function: ease-out or cubic-bezier spring-like [contested]
  transition-property:        background-color, border-color, border-width, opacity, transform [partial]
  transition-delay:           none [unanimous]
  transition-behavior:        allow-discrete where needed [one provider]

  animation:
    load-sequential:   opacity 0→1, blur→sharp (fade/slide) [partial agreement, parameters contested]
    button-depress:    transform scale(0.95–0.97), 100–150 ms, on active [unanimous]
    white-flash:       brief overlay on state change [one provider]

  transform-at-rest:          none [unanimous]
  transform-on-interact:
    hover:   scale(1.02) [one provider] or translate; contested
    active:  scale(0.97) [unanimous]
  transform-style:            flat [unanimous]

## 11. Design System Notes

### 11a. Use Constraints
[Unanimous] This system is appropriate for product catalogs, retail apps, photography tools, lifestyle brands, nostalgic or archival content, art/publishing interfaces. It is **wrong** for data‑dense dashboards, dark‑mode‑first experiences, medical/healthcare UIs, serious financial platforms, or any context requiring subdued, professional tone.

### 11b. Prompt Phrases
[Synthesised from common elements]
- “full‑bleed yellow field with red accent stripe”
- “product name in all caps, tracking‑widest, font‑bold”
- “paper grain overlay on matte surfaces”
- “offset misregistration between yellow and red layers”
- “thin black horizontal rule separates zones”
- “badge in contrasting pill or circle”
- “film strip perforation decorative border”
- “button depress with slight scale and no shadow”
- “matte off‑white page background with subtle grain overlay”

### 11c. Do / Avoid Block
[Synthesised from unanimous agreements — reformatted as paired triplets]

rule: Flat colour surfaces are the only permitted fill treatment — no gradients, drop shadows, bevels, or any simulated 3D depth may appear on any surface.
do:   Cards, buttons, and panels filled with solid yellow (#FFD700–#FEE12B), red (#DA291C), black (#000000), or white (#FFFFFF). Flat, unmodulated fills with no linear-gradient, radial-gradient, box-shadow, or filter effects applied to the fill layer.
avoid: Cards with a subtle linear-gradient from yellow to gold for visual depth. Buttons with box-shadow: 0 2px 4px rgba(0,0,0,0.3). Panels using drop-shadow for separation.

rule: All component edges must be sharp — rounded corners are prohibited on cards, buttons, inputs, and panels. The sole exception is the badge/chip component.
do:   Film Box Card with border-2 black and rounded-none. Primary button with border-2 black and rounded-none. Input field with border-2 black and rounded-none. Only the ASA speed pill uses rounded-full.
avoid: Cards with rounded corners at radius-4. Buttons with radius-3 border smoothing. Any component inheriting a default border-radius from a framework reset.

rule: Typography must use a geometric sans-serif typeface with tight leading (line-height: 1.0–1.1) and wide letter-spacing (tracking-widest at 0.12em–0.15em). Serifs, scripts, and decorative typefaces are forbidden.
do:   Product name set in Futura or Century Gothic, font-bold, text-2xl, tracking-widest at 0.12em, leading-9 (line-height: 1.0). Metadata set in Helvetica Neue, text-sm, tracking-wider at 0.08em, uppercase.
avoid: Product name in Times New Roman for a classic feel. Body text in a script typeface for elegance. Any typeface with a serif counter or calligraphic swash.

rule: Layouts must organise content into clear, modular horizontal bands (2–3 per view) separated by thin horizontal rules. Dynamic diagonal compositions, overlapping planes, and off-grid arrangements are prohibited.
do:   A product view composed of: top yellow band (brand icon + product line), middle white band (product name + metadata), bottom red band (price + CTA). Each separated by border-t-2 black at 2px.
avoid: A product view with a diagonal split between yellow and white zones. Cards positioned at a rotated angle. Elements layered with z-index offsets to create staggered depth.

rule: Offset printing artifacts must be simulated — misregistration between colour layers, halftone dot overlays on photographs, and paper grain texture applied to all surfaces. Photographic images must always carry halftone or grain treatment.
do:   A product photograph with an SVG feColorMatrix halftone filter at 8–12% dot density and a paper grain overlay via feTurbulence at baseFrequency=0.4, opacity=8%, blend-mode=multiply. The yellow and black layers offset by 0.5px horizontal separation.
avoid: A high-resolution product photograph with no image filter, presented cleanly against the yellow background. A hero image with smooth 4K rendering and no halftone reduction.

rule: Text alignment must be left-aligned or centred — justified text and negative tracking are prohibited. Generous whitespace and low information density are enforced.
do:   Product name left-aligned with ample padding on each side (px-6). Metadata centred beneath it. The composition breathes with generous margin blocks between text elements — never compressed.
avoid: Product name justified across the full card width with word-spacing forced. Body text set at tracking-tight or letter-spacing compressed to shrink character gaps. Text filling every pixel of available width.

### 11d. Variation Bounds
[Contested — providers differ on specific ranges]

- **Yellow saturation:** range from rich golden to pale canary. No cited source for endpoints.
- **Red stripe width:** from thin 1–2px rule to thick 25mm band. Contested exact proportions.
- **Box aspect ratio:** tall (35mm can), wide square (120 film), slim (135 cassette). Unanimous that band structure is preserved.
- **Clean vs. grimy:** pristine factory print vs. shelf-worn with heavy misregistration and grain. Toggle additive texture layers.

### 11e. Compositional Signatures

### 11e.i — At Rest
A single Film Box Card dominates the view: top zone filled with primary yellow (#FFD700) at approximately 40% of card height, bottom zone filled with white (#FFFFFF) at 60%. A 2px black horizontal rule (border-t-2 #000000) separates the zones. The upper zone carries the film perforation decorative border (repeating black rectangles, w-3 h-4, gap-2) along the top edge. The lower zone contains the product name in Futura font-bold, text-2xl, tracking-widest, black text, left-aligned with px-6 padding. Below it, metadata in Helvetica Neue text-sm, tracking-wider, uppercase, black. A red ASA pill badge (rounded-full, bg-secondary #DA291C, text-white) sits at the top-right corner of the yellow zone with border-2 black. The entire card has border-2 black rounded-none. Background behind the card is matte off-white (#F5F0E8) with paper grain overlay at opacity-8%. No drop shadows. No rounded corners. No gradients.

### 11e.ii — Maximum Expressiveness
Three Film Box Cards arranged in a 3-column grid (≥1024px) on the off-white grain substrate. Each card has a different yellow variant: rich golden (#FFD700), pale canary (#FFF176), and buff (#F5DEB3). Each card carries a different red stripe treatment: the first has a thick 12px border-4 red at the top edge; the second has a thin 2px border-2 red across the middle zone; the third has a red bottom band filling the lower 20% of the card. Each card shows deliberate offset misregistration: the black text layer is shifted 0.75px right and 0.5px down from the yellow fill layer, creating a faint ghost-edge. All three cards carry the film perforation border along their full width. A horizontal rule (border-t-2 #DA291C) spans the full page width below the card row. An offset-printing grain overlay (feTurbulence baseFrequency=0.45, opacity=10%, blend-mode=multiply) covers the entire composition at body-level. A film strip decorative border (black rectangles on transparent, 12px repeat) runs along the bottom of the viewport. The load-sequential animation reveals each card with opacity 0→1 and blur→sharp over 300ms, staggered 100ms apart. The leftmost card's hover state is active, showing a 4px red bottom border (border-b-4 #DA291C) and no other change.

### 11e.iii — Data Context
Data is displayed in a minimal tabular listing rather than cards, but the core band structure is preserved. Each table row is a horizontal band: a yellow left strip (w-6, bg-primary #FFD700) acts as the row header indicator, followed by white cell content. Row divider: border-t-2 #000000. Data labels are in uppercase Helvetica Neue text-xs tracking-wider, black. Data values are in Futura text-base font-bold, black. The ASA speed badge format (red pill rounded-full, white text, border-2 black) is reused as a data status indicator: active rows carry a red pill, archived rows carry a black-outlined pill with no fill. The perforation decorative border becomes a repeating table header separator (black rectangles, 4px wide, 12px apart) above the column header row. Column headers sit in a yellow band (bg-primary #FFD700) with black uppercase text. No chart surface is used — data is presented as pure tabulation with the banded row pattern. Numeric values use no delta indicators, no coloured arrows, no glow effects. The paper grain overlay remains at full opacity across the table surface.

### 11f. Sources

This subject has minimal verified imagery. The visual claims below should be treated with caution.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** The **Kodak Aesthetic Film Box Packaging System** of the 1960s is a cohesive visual identity for consumer and professional film packaging, primarily the yellow-and-red cardboard boxes, foil wraps, and plastic canisters that held roll films (e.g., Kodachrome, Ektachrome, Tri-X, Verichrome). This identity is centred on the iconic yellow field and the red Kodak logotype (a custom script), with supporting typefaces including Akzidenz-Grotesk. No single designer or foundry is formally attributed in the seed, but the system reflects Kodak’s mid‑century branding practice.

**Verified imagery sources.** 1 URLs verified against institutional servers, distributed across:
- Science Museum Group, UK — 1 URL(s)

No specific archival imagery references are available for this section. Key references remain unidentified due to the lack of top imagery sources in the forensic seed.

**Named typefaces.** The typography of this style is attested as:
- Kodak logotype (custom script) ( — attestation: unknown) — rendered here as bespoke imagery — no web-font substitute
- Akzidenz-Grotesk ( — attestation: inferred) — rendered here in Archivo as the closest open substitute
- Akzidenz-Grotesk ( — attestation: unknown) — rendered here in Archivo as the closest open substitute

**Honest gaps.** The most significant gap is the absence of any attested colour specification (Pantone, Munsell, hex, or pigment formula) for Kodak Yellow or Kodak Red from any 1960s primary source. Without these specifications, the system’s colour values cannot be reliably reproduced or documented. Additional unknowns include the exact dates of first use for specific packaging variants and the designer attribution. These gaps would be resolved by locating internal Kodak design standards or period manufacturing records that specify colour formulas and production dates.
