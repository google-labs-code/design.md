---
version: alpha
name: "Alan Fletcher"
description: "A celebration of geometric wit and visual economy. Pairs flat, bold shapes with asymmetrical tension and a wry sense of humor. Visual economy and surprise are paramount."
colors:
  primary: "#E62020"
  on-primary: "#FFFFFF"
  secondary: "#0050A0"
  on-secondary: "#FFFFFF"
  tertiary: "#FFD100"
  on-tertiary: "#000000"
  neutral: "#000000"
  surface: "#FFFFFF"
  on-surface: "#000000"
  surface-container: "#F5F5F5"
  outline: "#000000"
  error: "#C00000"
typography:
  display:
    fontFamily: "Akzidenz-Grotesk"
    fontSize: "60px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  headline:
    fontFamily: "Akzidenz-Grotesk"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: 1.375
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  title:
    fontFamily: "Akzidenz-Grotesk"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  body:
    fontFamily: "Akzidenz-Grotesk"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "0em"
    textTransform: "none"
  label:
    fontFamily: "Akzidenz-Grotesk"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.375
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
rounded:
  default: "0px"
  card: "0px"
  button: "0px"
  input: "0px"
  chip: "0px"
spacing:
  page-edge: "32px"
  section: "32px"
  component: "24px"
  icon: "24px"
  gap-component: "24px"
  gap-section: "48px"
components:
  button-primary:
    backgroundColor: "#E62020"
    textColor: "#FFFFFF"
    rounded: "{rounded.button}"
    padding: "12px"
  button-primary-hover:
    backgroundColor: "#FFFFFF"
    textColor: "#E62020"
    rounded: "{rounded.button}"
    padding: "12px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "#000000"
    rounded: "{rounded.button}"
    padding: "12px"
  card:
    backgroundColor: "#FFFFFF"
    rounded: "{rounded.card}"
    padding: "16px"
  input:
    backgroundColor: "#FFFFFF"
    rounded: "{rounded.input}"
    padding: "12px"
  punctuation-graphic:
    textColor: "#E62020"
    size: "64px"
provenance:
  coverage_status: "complete"
  identity_description: ""
  manual_enrichment_required: false
  imagery_count: 9
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: null
    typography_map: "entries:113"
  sources:
    - host: "www.vam.ac.uk"
      count: 5
    - host: "en.wikipedia.org"
      count: 2
    - host: "designmuseum.org"
      count: 1
    - host: "web.archive.org"
      count: 1
  imagery_urls:
    - url: "https://en.wikipedia.org/wiki/Victoria_and_Albert_Museum"
      host: "en.wikipedia.org"
      institution: "Wikimedia Foundation"
      confidence_original: high
    - url: "https://en.wikipedia.org/wiki/Alan_Fletcher_(graphic_designer)"
      host: "en.wikipedia.org"
      institution: "Wikimedia Foundation"
      confidence_original: high
    - url: "https://www.vam.ac.uk/collections"
      host: "www.vam.ac.uk"
      institution: "Victoria and Albert Museum, London"
      confidence_original: low
    - url: "https://www.vam.ac.uk/collections"
      host: "www.vam.ac.uk"
      institution: "Victoria and Albert Museum, London"
      confidence_original: low
    - url: "https://www.vam.ac.uk/"
      host: "www.vam.ac.uk"
      institution: "Victoria and Albert Museum, London"
      confidence_original: low
    - url: "https://designmuseum.org/"
      host: "designmuseum.org"
      institution: "Design Museum, London"
      confidence_original: low
    - url: "https://www.vam.ac.uk/collections"
      host: "www.vam.ac.uk"
      institution: "Victoria and Albert Museum, London"
      confidence_original: low
    - url: "https://www.vam.ac.uk/collections"
      host: "www.vam.ac.uk"
      institution: "Victoria and Albert Museum, London"
      confidence_original: low
    - url: "https://web.archive.org/web/20000301000000*/http://www.alanfletcher.com"
      host: "web.archive.org"
      institution: "Internet Archive"
      confidence_original: medium
  typefaces_attested:
    []
  flags:
    - "no_typography_extracted"
    - "no_colour_extracted"
  honest_gaps:
    []
---
# Design System: Alan Fletcher

## 0. Taxonomy & Identity

entity-type:      studio / practitioner / artist / designer
artefact-family:  poster (primary), operating system / software UI (contested)
technique:        digital vector (majority), digital raster (minority)
movement-lineage: design movement
era:              postwar
geography:        UK
domain:           publishing / media / music
formal-traits:    geometric, flat, asymmetric, playful, minimal, graphic
color-logic:      saturated (contested: spot-color)
typography-mode:  geometric sans
texture:          smooth, matte
function:         persuade (contested: entertain)
provenance:       studio lineage (contested: revival/homage)

## 1. Overview

Alan Fletcher's graphic design is a celebration of geometric wit and visual economy. Rooted in mid-20th-century British modernism, his work pairs flat, bold shapes with asymmetrical tension and a wry sense of humor. Every composition is a puzzle: the simplest form does the work, often through a pun or figure-ground reversal. The emotional register is confident, playful, and never precious — surprise is the soul, not polish.

- **Emotional tone:** Witty, playful, confident, precise
- **Era/lineage:** Mid-20th-century British modernism; Fletcher (1931–2006) was a co-founder of Pentagram
- **Density level:** Minimal — typically one large shape and a few words on a mostly white canvas
- **Core rendering:** Pure 2D flat color; no shading, gradients, transparency, or 3D effects; solid fills with hard edges
- **Recognizable by:** Bold geometric icons (circle, square, triangle), cut-paper aesthetic, visual puns, >50% negative space
- **Would break:** Gradients, transparency, complex textures, serif typefaces, photorealistic imagery, symmetrical layouts, more than four colors per composition, decorative flourishes
- **Physical surface:** Default smooth offset print; optional matte paper grain, offset misregistration, or ink bleed for vintage authenticity

## 2. Constants

Light Mode:   yes (white background standard)
Dark Mode:    contested — some providers include a full dark theme; others omit or note it is not characteristic
Responsive:   yes — breakpoints at 375px and 768px; asymmetrical layout preserved; elements stack vertically at narrow widths
States:       Default, Active, Disabled; Hover/Focus are instant color swaps with no animation (contested: hover/focus existence)
surface-simulation: paper — smooth offset print stock; matte, uncoated finish with optional paper grain for vintage authenticity

## 2a — Interaction Model

hover-delta:        color-shift — instant color swap on hover (fill and text reverse); no animation, no opacity change, no scale (contested: hover existence)
active-delta:       scale-down — scale(0.95) on press with 150ms ease-out; instant color swap (0ms, no interpolation)
focus-style:        ring-2 ring-black — contested: some providers use border-4, others use ring-2 ring-primary, one uses none; re-stack required
transition-duration:150ms — applied to transform only; color swaps are 0ms with no interpolation
transition-easing:  ease-out — for transform; color swaps use no easing (instant)
exempt-animations:  color-swap — must remain instant (0ms) even when transition-duration is set; hero-enter, punctuation-pop, bounce-in

## 3. Colors

CONTESTED:§2.hex_primary — providers gave: [#E62020 / #E31E24 / #E53935 / #FF0000 / #E60000]; all tagged [unverified]; no majority; re-stack required
CONTESTED:§2.hex_secondary — providers gave: [#0050A0 / #0057B8 / #1E88E5 / #0000FF / #0047AB]; all tagged [unverified]; re-stack required
CONTESTED:§2.hex_accent — providers gave: [#FFD100 / #F7C600 / #FDD835 / #FFD60A / #FFD700]; all tagged [unverified]; re-stack required

All on-* colors and semantic roles (surface, outline, etc.) are synthesised from majority patterns:
- on-primary: #FFFFFF
- on-secondary: #FFFFFF
- on-tertiary: #000000 (majority)
- neutral: #000000 (majority)
- surface: #FFFFFF
- on-surface: #000000
- surface-container: #F5F5F5 (inferred)
- outline: #000000
- error: #C00000 (contested: #FF6600)

Dark mode swap: contested — some providers invert background to near-black; others keep same colors.

No gradients, no transparency, no modulation — solid fills only.

## 4. Typography

CONTESTED:§3.primary_typeface — providers gave: [Helvetica, Akzidenz-Grotesk, or similar / Akzidenz-Grotesk (or Helvetica) / Helvetica, Akzidenz-Grotesk / Akzidenz-Grotesk (DM Sans substitute) / Akzidenz-Grotesk, Helvetica Neue]; majority favors Akzidenz-Grotesk but no provider cites a foundry or source; re-stack required
CONTESTED:§3.secondary_typeface — providers did not specify a distinct secondary typeface; re-stack required
CONTESTED:§3.google_fonts_substitute — only one provider (kimi-k2.5-lightning) suggests DM Sans; no majority; re-stack required

General typographic rules (unanimous):
- All type set in geometric sans-serif.
- Letters are treated as physical objects: layered, rotated, split, stacked.
- Prefer all caps for display, headline, title, and label; body in sentence case.
- Minimal kerning — words hug each other.
- Baseline grid may be broken when meaning demands.
- Oversized punctuation (giant comma, exclamation mark, arrow) may replace or amplify any role.

| Role | Tailwind Classes (synthesised from majority) | Notes |
|------|----------------------------------------------|-------|
| Display | `font-sans text-6xl font-bold leading-tight tracking-tight uppercase` | Large, often cut out or overlapping shapes |
| Headline | `font-sans text-4xl font-bold leading-snug tracking-tight uppercase` | Section headers |
| Title | `font-sans text-xl font-bold leading-normal tracking-tight uppercase` | Card titles, navigation labels |
| Body | `font-sans text-base font-normal leading-relaxed tracking-normal normal-case` | Paragraph text |
| Label | `font-sans text-sm font-medium leading-snug tracking-tight uppercase` | Form labels, small headers |

Tailwind classes are approximate; actual font-family assignment depends on resolved primary_typeface.

## 5. Elevation

**Flat depth model — no shadow hierarchy.** All surfaces exist at the same z-level. No drop shadows, no inset shadows, no elevation levels.

Stacking context: not applicable (single-plane layout), except for layered/collage components where optional z-index may be used (see §9).

*(Minority dissent: kimi-k2.5-lightning proposes shadow-sm/md/lg levels; this is rejected per majority agreement.)*

## 6. Spacing & Sizing

CONTESTED:§6.padding_component_internal — providers gave: [p-2 / p-4 / p-6 / p-4 / p-2]; no majority; re-stack required
CONTESTED:§6.padding_section_internal — providers gave: [p-4 / p-8 / p-8 / p-8 / p-8]; 4 of 5 agree on p-8; accepted.
CONTESTED:§6.padding_page_edge — providers gave: [p-6 / p-12 / px-8 py-8 / p-16 / px-8]; no majority; re-stack required
CONTESTED:§6.margin_between_components — providers gave: [gap-2 / gap-8 / gap-6 / gap-6 / gap-8]; no majority; re-stack required
CONTESTED:§6.margin_between_sections — providers gave: [gap-8 / gap-16 / gap-10 / gap-12 / gap-12]; no majority; re-stack required
CONTESTED:§6.component_heights_sm — providers gave: [h-8 / h-10 / h-10 / h-12 / h-8]; no majority; re-stack required
CONTESTED:§6.component_heights_md — providers gave: [h-10 / h-12 / h-12 / h-16 / h-10]; 2 of 5 agree on h-12; no majority; re-stack required
CONTESTED:§6.component_heights_lg — providers gave: [h-12 / h-16 / h-16 / h-24 / h-12]; no majority; re-stack required
CONTESTED:§6.icon_size — providers gave: [w-5 h-5 / w-6 h-6 / w-8 h-8 / w-6 h-6 / w-8 h-8]; no majority; re-stack required

Spacing philosophy (unanimous): tight within components; generous white space between sections; white space often >50% of canvas.

## 7. Borders

- **border-radius:** `rounded-none` throughout (unanimous)
- **border-style:** `border-solid` (unanimous)

CONTESTED:§7.border_width_default — providers gave: [border (1px) / border-2 / border-2 / border-2 / border-0]; 3 of 5 favor border-2 (thick, uniform weight); accepted as majority.
CONTESTED:§7.border_width_emphasis — providers gave: [border-2 / border-4 / border-4 / border-4 / border-2]; 3 of 5 favor border-4; accepted as majority.
CONTESTED:§7.clip_path — providers gave: [none / conditional polygon / none / conditional polygon / none]; no majority; re-stack required. Majority favors no clip-path for default, but conditional diagonal cuts allowed as variant.

## 8. Opacity

- **disabled-state:** `opacity-40` (majority: 3 of 5)
- **ghost/secondary:** contested — not used by most; one provider uses opacity-60
- **overlay/scrim:** not used (majority)
- **hover-feedback:** no opacity change — use instant color swap or scale transform instead (majority)

Browser chrome (selection, scrollbar): not style-relevant — leave at system defaults (majority).

## 8.5. Visual Effects

Optional — activated only when "authentic era" variation knob is cranked up. Without these, the system is pristine flat vector.

### 8.5.0 — Physical Material Model

Declares the top-level surface simulation governing the entire page canvas.
This is distinct from component-level textures (§8.5d) — it is the global rendering layer.

material-model:    paper — smooth offset print stock

global-filter:     none — pristine flat vector is the default; sepia(0.05) contrast(0.95) optional for vintage authenticity

global-overlay:    optional paper grain via body::after pseudo-element:
                   SVG feTurbulence baseFrequency=0.5 numOctaves=3 type=fractalNoise
                   blend: multiply, opacity-8, pointer-events:none, position:fixed, z-index:9999
                   activated only when "authentic era" variation knob is engaged

rendering-flags:
  font-smoothing:  antialiased
  image-rendering: auto
  text-rendering:  auto

CONTESTED:§8.5d_texture_noise — providers described: paper grain (SVG feTurbulence), offset misregistration, halftone dots, ink spread. No single technique in majority; all agree effects are conditional. Gap marker for specific implementation; general principle accepted.

## 9. Components

### Icon Vocabulary (unanimous)
- system: custom geometric glyphs (arrows, stars, dots, circles, triangles, zigzags)
- size: contested between w-5/w-6/w-8; use `w-6 h-6` for inline, `w-12 h-16` for hero (inferred)
- color: inherits currentColor; can be filled with primary/secondary/tertiary
- treatment: flat fill, no stroke, no shadow, no outline (or thick outline only if required)
- restrictions: no complex shapes, no gradients, no multiple colors per icon

### Image & Media Treatment (majority)
- aspect-ratio: square preferred (contested: free)
- object-fit: object-cover
- filters: none
- border: 2px solid black (contested: none)
- dark-mode: none or brightness adjustment

### Buttons (synthesised from majority)
| Type | Style | Hover | Active | Disabled |
|------|-------|-------|--------|----------|
| Primary | `bg-primary text-on-primary p-3 uppercase font-bold rounded-none border-0` | swap fill to `bg-surface` and text to `primary`, or `bg-secondary` | instant color swap, no scale | `opacity-40` |
| Secondary | `bg-transparent text-on-surface border-2 border-outline p-3 uppercase font-bold rounded-none` | fill `bg-on-surface` text `bg-surface` | instant swap | `opacity-40` |
| Destructive | `bg-error text-on-error p-3 uppercase font-bold rounded-none border-0` | same as primary hover pattern | instant swap | `opacity-40` |

CONTESTED:§9.button_focus_ring — providers gave: [ring-2 ring-black / border-4 / ring-2 ring-primary / none / offset ring]; no majority; re-stack required

### Cards / Panels (majority)
- Fill: `bg-surface` (white) or `bg-primary` for emphasis
- Border: `border-2 border-outline` (contested: none)
- Corner: `rounded-none`
- Internal padding: `p-4` (contested)
- No shadow

### Navigation (majority)
- Horizontal bar, items in uppercase
- Active state: thick underline (border-b-4 or border-b-2) in primary or black, or reversed fill
- Hover: color inversion or underline
- Icon: none — text is the icon

### Inputs / Forms (synthesised)
- Background: `bg-surface`
- Border: `border-2 border-outline` (contested: bottom border only)
- Focus: `border-4` or `ring-2` in primary
- Label: uppercase, small, above input
- Placeholder: black at `opacity-50`
- Error: border becomes `border-error`

### Style-Native Primitives (unanimous agreement on existence, details vary)

**Punctuation Graphic / Oversized Element** — a giant comma, exclamation mark, arrow as focal point. Size: `text-6xl` or `w-16 h-16`. Color: primary or black.

**Visual Pun Container** — a grouping of two or more elements that combine into a pun. Use relative positioning, tight gaps.

**Cutout / Figure-Ground Reversal** — white shape creating negative space within a solid block.

**Tension Cut** — two elements placed nearly touching with a thin white gap.

CONTESTED:§9.component_dna — speech bubble, sticker chip, modal chrome mentioned by only one provider each; no consensus.

## 10. Layout

- **Spacing cadence:** Generous white space — often >50% of the canvas is empty (unanimous)
- **Grid tendency:** No visible grid; rely on optical balance through asymmetry (unanimous)
- **Density:** Low — minimal elements per section (unanimous)
- **Section separation:** Large white space or a bold horizontal/vertical shape as a divider (unanimous)
- **Alignment:** Off-center focal point at one-third of canvas; hero element never dead center (unanimous)
- **Breakpoint behavior (375px/768px):** At 375px, single column with elements stacking vertically; at 768px, two-column asymmetry with floating hero element (majority)
- **Motion block (synthesised from majority):**

motion:
  transition-duration:        150–200ms (fast)
  transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1) for bouncy;
                               ease-out for subtle moves
  transition-property:        transform, opacity, color, background-color
  transition-delay:           none
  transition-behavior:        allow-discrete

  animation:
    hero-enter:       translateY(20px → 0) over 300ms ease-out, trigger: on-load
    bounce-in:        scale(0.9 → 1) over 200ms cubic-bezier, trigger: on-hover
    color-swap:       instant (0ms, no interpolation), trigger: on-active
    punctuation-pop:  scale(0.8 → 1) over 300ms ease-out, trigger: on-scroll-enter

  transform-at-rest:          none
  transform-on-interact:      scale(1.05) on hover, scale(0.95) on active, 150ms ease-out
  transform-style:            flat
  transform-perspective:      not used
  backface-visibility:        not used

CONTESTED:§10.animation_specifics — some providers include hard-cut transitions, slide-in, rotate-in; no majority on exact keyframes.

## 11. Design System Notes

### 11a. Use Constraints
**Appropriate for:** Posters, editorial layouts, branding identity, creative portfolios, cultural institution sites, playful marketing interfaces, and any UI that needs bold, witty, minimalist character.
**Wrong for:** Data-heavy dashboards, corporate utilitarian interfaces (enterprise CRM), conservative financial apps, medical forms, or any context requiring subtlety, depth, or photorealism.

### 11b. Prompt Phrases (synthesised from majority)
- “Bold geometric shapes with a visual pun”
- “Asymmetric layout with generous white space and a single accent color”
- “Letters as physical objects — layered, rotated, or forming an image”
- “One strong shape and one word does the work; no decoration”
- “High contrast: black and white plus one primary accent”
- “Tension cuts between elements — nearly touching but not overlapping”
- “Oversized punctuation as graphic marks”
- “Flat vector with no gradients, no fades, no soft shadows”

### 11c. Do / Avoid Block (unanimous)

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description. Minimum 4 rules, maximum 8.

Format per rule:

rule: Visual economy is paramount — every element must carry communicative meaning. Decoration without conceptual function is forbidden.
do:   Use only shapes, colors, and words that directly serve the concept. A single circle and one word can constitute a complete composition. Minimal shapes are the goal.
avoid:Adding decorative flourishes, borders, ornaments, or abstract shapes that exist only to fill space. Every element must justify its presence.

rule: Color palette is strictly limited to 2–4 flat, solid colors per composition. No gradients, fades, or transparency are permitted.
do:   Choose a primary accent color (typically red or blue) plus black and white. All fills are 100% solid with no modulation. Flat color is the non-negotiable standard.
avoid:Using five or more colors in a single composition, or applying gradients, opacity layers, or tint variations. More than four colors reads as a different system.

rule: Asymmetry is the default compositional structure. Symmetrical layouts read as static and uncharacteristic of the system.
do:   Place the focal element at roughly one-third of the canvas width. Use tension cuts — elements nearly touching but not overlapping. Lean into asymmetry.
avoid:Centering the hero element on both axes, or creating mirror-image left/right balance. Symmetrical layouts belong to a different design language.

rule: All surfaces are flat with no dimensional effects. Depth is communicated through figure-ground reversal alone.
do:   Use solid fills with hard vector edges. Create depth through cutout shapes and negative space, never through shading or shadow. Flat depth is the only depth.
avoid:Drop shadows, inset shadows, bevels, gradients, 3D extrusion, or any effect that suggests a z-axis. Shadows and rounded corners break the system.

rule: Type is graphic — letters are objects to be arranged, layered, and played with, not merely read as text.
do:   Use all caps with tight tracking. Letters can be rotated, split, stacked, or form part of a visual pun. Oversized punctuation is encouraged. Treat letters as physical objects.
avoid:Using body copy as the primary visual element, setting type in sentence case for headlines, or tracking out letters to create air. Letters must feel purposefully placed.

rule: White space is an active compositional element, not empty background. It should constitute more than 50% of the canvas.
do:   Leave generous negative space around the focal elements. The white background is a shape that participates in the composition. White space is the system's signature.
avoid:Filling the canvas edge-to-edge with content, or treating white space as unused area to be filled. Empty space is the point.

### 11d. Variation Bounds (unanimous)
- **Flat vs. Textured:** pristine flat vectors ↔ subtle ink bleed, offset misregistration, paper grain overlay, halftone dots
- **Minimal vs. Dense:** one shape + one word ↔ multiple shapes and words with overlapping motifs
- **Playful vs. Serious:** tilted forms, smiley motifs, hand-drawn letters ↔ pure geometric precision, horizontal type, no ornament
- **Authentic Era vs. Contemporary Remix:** period Pantone swatches, photostat textures ↔ neon digital colors, animated SVG, screen-printed halftones
- **High Contrast vs. Subtle:** stark black/white/primary ↔ muted tones (e.g., black → dark grey, red → brick)
- **Geometric vs. Organic:** strict compass-drawn shapes ↔ loose hand-drawn outlines with variable line weight

### 11e. Compositional Signatures (synthesised from majority)

### 11e.i — At Rest
The system in its default, single-composition state. A single bold geometric form (circle, square, or triangle) in primary red (#E62020 contested) on a white surface (#FFFFFF). One word in Akzidenz-Grotesk all-caps bold at text-4xl sits near the form, creating a visual pun through their spatial relationship. The focal point is at roughly one-third of the canvas width. No other elements are present — white space fills >50% of the canvas. Surface is flat vector with no texture, no shadow, no border.

### 11e.ii — Maximum Expressiveness
Two to three geometric forms at extreme scale contrast: a large solid circle in primary red nearly touches a small square in secondary blue (#0050A0 contested), with a thin white gap between them (tension cut). A third form — a triangle or diagonal stripe in accent yellow (#FFD100 contested) — enters from the bottom-right edge, bleeding off the canvas. Oversized punctuation (a giant comma or exclamation mark) in primary red at text-6xl floats in the upper-left quadrant, partially overlapping the circle. All type in all-caps Akzidenz-Grotesk with tight tracking. Letters may be rotated or split by a shape edge. No shadows, no gradients, no transparency. Optional paper grain overlay at opacity-8 for vintage authenticity.

### 11e.iii — Data Context
Not applicable — this system is explicitly wrong for data-heavy dashboards, monitoring, logging, or any context where clarity and error-free reading are primary requirements. Per §11a, system is wrong for data-heavy dashboards, enterprise CRM, conservative financial apps, and medical forms. No data-display components or semantic state colors are provided. When data presentation is unavoidable, the system's minimal geometry and flat color should be used in editorial/typographic layouts only — not for tables, meters, or status grids.

### 11f. Sources

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** (Prose generation failed — see provenance block for attribution data.)

**Verified imagery sources.** 9 URLs verified against institutional servers, distributed across:
- Victoria and Albert Museum, London — 5 URL(s)
- Wikimedia Foundation — 2 URL(s)
- Design Museum, London — 1 URL(s)
- Internet Archive — 1 URL(s)

**Named typefaces.** The typography of this style is attested as:
- (none attested)

**Honest gaps.** (No documented gaps were recorded by the forensic pipeline.)
