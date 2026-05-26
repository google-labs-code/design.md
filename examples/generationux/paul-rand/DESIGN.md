---
version: alpha
name: "Paul Rand"
description: "A mid-century modernist design language marrying stringent geometric reduction with playful wit — flat spot-colors on matte paper, asymmetric compositions with 40% negative space, bold all-caps geometric sans-serif, and cut-paper collage textures."
colors:
  primary: "#E31E24"
  on-primary: "#FFFFFF"
  secondary: "#003399"
  on-secondary: "#FFFFFF"
  tertiary: "#FFC72C"
  on-tertiary: "#000000"
  neutral: "#000000"
  on-surface: "#000000"
  surface: "#FFFFFF"
  surface-container: "#F5F0E8"
  outline: "#000000"
typography:
  display:
    fontFamily: "Futura"
    fontSize: "60px"
    fontWeight: 900
    lineHeight: 1.25
    letterSpacing: "-0.025em"
    textTransform: uppercase
  headline:
    fontFamily: "Futura"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0em"
    textTransform: uppercase
  title:
    fontFamily: "Futura"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.375
    letterSpacing: "0em"
    textTransform: uppercase
  body:
    fontFamily: "Futura"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: 1.625
    letterSpacing: "0em"
    textTransform: lowercase
  label:
    fontFamily: "Futura"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.025em"
    textTransform: uppercase
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
  gap-component: "16px"
  gap-section: "48px"
components:
  button-primary:
    backgroundColor: "#E31E24"
    textColor: "#FFFFFF"
    rounded: "{rounded.button}"
    padding: "16px"
  button-primary-hover:
    backgroundColor: "#E31E24"
    textColor: "#FFFFFF"
    rounded: "{rounded.button}"
    padding: "16px"
  button-secondary:
    backgroundColor: "#003399"
    textColor: "#FFFFFF"
    rounded: "{rounded.button}"
    padding: "16px"
  card:
    backgroundColor: "#FFFFFF"
    rounded: "{rounded.card}"
    padding: "16px"
  card-warm:
    backgroundColor: "#F5F0E8"
    rounded: "{rounded.card}"
    padding: "16px"
  input:
    backgroundColor: "#FFFFFF"
    textColor: "#000000"
    rounded: "{rounded.input}"
    padding: "16px"
  input-focus:
    backgroundColor: "#FFFFFF"
    textColor: "#000000"
    rounded: "{rounded.input}"
    padding: "16px"
  geometric-face-avatar:
    backgroundColor: "#E31E24"
    size: "48px"
  tooltip-triangle:
    backgroundColor: "#FFC72C"
    size: "24px"
provenance:
  coverage_status: "sparse"
  identity_description: "Paul Rand (1914–1996), American graphic designer, one of the most influential figures in 20th-century modernist design. This record captures his personal visual identity (letterhead, monogram, signature) and the defining corpus of his corporate logo work: IBM, UPS, ABC, Westinghouse, and others. The slug is unambiguous within design-historical discourse; the majority of providers adopt this broade"
  manual_enrichment_required: false
  imagery_count: 3
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "collection.cooperhewitt.org"
      count: 2
    - host: "en.wikipedia.org"
      count: 1
  imagery_urls:
    - url: "https://en.wikipedia.org/wiki/Paul_Rand"
      host: "en.wikipedia.org"
      institution: "Wikipedia"
      confidence_original: high
    - url: "https://collection.cooperhewitt.org/search/?q=paul+rand"
      host: "collection.cooperhewitt.org"
      institution: "Cooper Hewitt, Smithsonian Design Museum"
      confidence_original: low
    - url: "https://collection.cooperhewitt.org/objects/18746897"
      host: "collection.cooperhewitt.org"
      institution: "Cooper Hewitt"
      confidence_original: low
  typefaces_attested:
    - name: "City Medium"
      foundry: null
      year: 1930
      google_fonts: "Roboto Slab"
      attestation: "attested"
    - name: "custom UPS logotype"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "attested"
    - name: "custom ABC logotype"
      foundry: null
      year: 1962
      google_fonts: null
      is_custom: true
      attestation: "conventional"
    - name: "custom PR monogram"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "attested"
    - name: "Bodoni Book"
      foundry: null
      year: null
      google_fonts: "Playfair Display"
      attestation: "attested"
    - name: "Futura"
      foundry: null
      year: null
      google_fonts: "Jost"
      attestation: "attested"
    - name: "Helvetica"
      foundry: null
      year: null
      google_fonts: "Inter"
      attestation: "attested"
    - name: "Helvetica"
      foundry: null
      year: null
      google_fonts: "Inter"
      attestation: "conventional"
    - name: "Univers"
      foundry: null
      year: null
      google_fonts: "Manrope"
      attestation: "conventional"
  flags:
    - "sparse_imagery"
  honest_gaps:
    - "1. **CONTESTED:§2.primary_colour** — No verified hex/Pantone/CMYK for IBM blue."
---
# Design System: Paul Rand

## 0. Taxonomy & Identity

entity-type: interface / system / environment  
artefact-family: operating system / software UI  
technique: digital vector  
movement-lineage: design movement  
era: postwar  
geography: US / Canada  
domain: publishing / media / music  
formal-traits: geometric, flat, asymmetric, graphic  
color-logic: spot-color  
typography-mode: geometric sans  
texture: matte, grainy  
function: persuade  
provenance: studio lineage

## 1. Overview

Paul Rand's visual language marries stringent modernist geometry with playful, often irreverent wit. Every element is reduced to its essential form—circles, squares, triangles—then composed asymmetrically with bold primary colors and ample negative space. The style feels both corporate and childlike, serious and ridiculous, industrial and handmade. The core rendering philosophy is **essential gesture plus one playful twist**: strip away everything except the purest geometric form, then add a single unexpected element—an eye where a label should be, a shape that scales suddenly on hover, a yellow triangle pointing at a tooltip.

- **Emotional tone:** Confident, joyful, intellectually playful, slightly irreverent  
- **Era/lineage:** Mid-century American modernism (1950s–1960s), specifically the corporate identity and editorial work of Paul Rand  
- **Density level:** Low — at least 40% of any viewport is deliberate negative space  
- **Anti-patterns:** Gradients, drop shadows, soft shading, pastels, thin typography, rounded corners (unless part of a visual joke), symmetry (unless ironic), smooth animations, crossfades, 3D effects  
- **Recognizable traits:** Flat spot-color palette (red, blue, yellow, black, white); geometric shape construction (circles, squares, triangles); heavy black outlines or none; collage-like offset shadows; bold all-caps geometric sans; visual puns and detached body parts (the Paul Rand eye); asymmetrical compositions anchored by scale contrast  
- **Physical texture (optional):** Matte paper grain overlay, cut-paper edge simulation, slight CMYK misregistration  

## 2. Constants

Light Mode: primary (white background is the cornerstone)  
Dark Mode: CONTESTED:§2.dark_mode — providers split 3/3 on applicability (3 said "no dark mode", 3 said "variant with inverted palette"); no consensus  
Responsive: yes — breakpoints at 375px (single-column asymmetric, stacked) and 768px (asymmetric grid, diagonal anchors)  
States: Default, Active, Disabled, Hover

surface-simulation: paper
                    Matte paper substrate with optional grain overlay and cut-paper collage edges.
                    The interface simulates a mid-century printed page — flat spot-color ink on
                    uncoated white stock, with optional CMYK misregistration and hand-cut collage
                    edges. Drives page-level paper-grain texture and hard offset shadow rendering
                    in preview generation.

## 2a — Interaction Model

hover-delta:        scale-105 — interactive elements enlarge 5% on hover via transform: scale(1.05);
                    no color change, no opacity shift, no shadow. Near-instantaneous.

active-delta:       scale-95 — elements contract to 95% on press via transform: scale(0.95);
                    some components use instant color swap instead (disputed among providers).

focus-style:        color-border — border-4 solid #000000 black outline on focus; no glow ring,
                    no box-shadow. Border weight increase is the only focus signal.

transition-duration:100ms — all state changes are near-instantaneous; load-in animations may
                    extend to 200ms.

transition-easing:  linear — no smooth easing; only linear or stepped motion is permitted.

exempt-animations:  snap-in, paper-grain-shift
                    snap-in must survive as a 200ms linear scale entrance. paper-grain-shift
                    is an optional subtle texture drift that persists regardless of duration
                    overrides.

## 3. Colors

Colors are flat spot colors; no tints or pastels.

- **primary** CONTESTED:§2.hex_primary — providers gave six different red/blue hexes [#004B87, #E31E24, #E32636, #E60012, #E4002B, #E4002B]; all tagged [unverified]; no cited source  
- **on-primary** (#FFFFFF) — White text or icon on primary surfaces  
- **secondary** CONTESTED:§2.hex_secondary — providers gave five blue variants [#003399, #005A9E, #0057B7, #003DA5, #0056A4] and one red [#E31E24]; all tagged [unverified]  
- **on-secondary** (#FFFFFF) — White text on secondary surfaces  
- **tertiary** CONTESTED:§2.hex_accent — providers gave six different yellow hexes [#FFC72C, #FDD835, #FFD700, #FFCC00, #FFD100, #FFD100]; all tagged [unverified]  
- **on-tertiary** (#000000) — Black text on yellow  
- **neutral** (#000000) — Black used for structural outlines, text, and graphic weights  
- **on-surface** (#000000) — Black text on white background  
- **surface** (#FFFFFF) — Primary background; white negative space  
- **surface-container** (#F5F0E8 [unverified]) — Optional paper-tone background for warmer, collaged feel  
- **outline** (#000000) — All borders and heavy strokes  

Dark mode variant: CONTESTED:§2.dark_mode_colors — providers that support dark mode used different swap tables; no consensus on dark-mode hex adjustments.

## 4. Typography

All type is all-caps or lowercase (never mixed case), heavy weight, and treated as a visual element.

- **primary_typeface** CONTESTED:§3.primary_typeface — providers gave [Futura / Futura / Futura / Akzidenz-Grotesk / Futura / Futura]; majority Futura but no foundry or year cited; re-stack required  
- **secondary_typeface** CONTESTED:§3.secondary_typeface — providers gave [Helvetica / none explicit / none explicit / none / Helvetica/Akzidenz / Helvetica/Akzidenz]; no cited source  
- **google_fonts_substitute** CONTESTED:§3.google_fonts_substitute — providers suggested [Montserrat or Jost / Nunito / Roboto / Centuary Gothic / Nunito / none]; no consensus  

| Role      | font-size | font-weight | line-height   | letter-spacing | text-transform | text-decoration |
|-----------|-----------|-------------|---------------|----------------|----------------|-----------------|
| display   | text-6xl  | font-black  | leading-tight | tracking-tight | uppercase      | none            |
| headline  | text-4xl  | font-bold   | leading-tight | tracking-normal | uppercase      | none            |
| title     | text-2xl  | font-bold   | leading-snug  | tracking-normal | uppercase      | none            |
| body      | text-base | font-bold   | leading-relaxed | tracking-normal | lowercase      | none            |
| label     | text-sm   | font-bold   | leading-none  | tracking-wide  | uppercase      | none            |

Kerning is deliberate – wide or tight, never default. Hand-drawn or collaged block lettering is permitted for display/hero roles but must feel geometric and deliberate.

## 5. Elevation

Flat depth model — no shadow hierarchy. All surfaces exist on a single plane. Depth is communicated through hard offset (cut-paper collage technique: duplicate shape shifted 2–4px down/right, filled with solid black or contrasting color, placed behind the foreground) or overlapping solid shapes. No box-shadow, no elevation classes.

## 6. Spacing & Sizing

**padding:**  
- component-internal: p-4 (majority agreement)  
- section-internal: p-8 (unanimous)  
- page-edge: p-8 or px-8 py-12 (majority p-8)  

**margin:**  
- between-components: gap-4 (majority) or gap-6 (partial)  
- between-sections: gap-12 (majority)  

**component-heights:**  
- sm: h-10 (majority)  
- md: h-12 (default interactive target, unanimous)  
- lg: h-16 (majority)  

**icon-size:** w-8 h-8 (majority; one provider says w-6 h-6, one says w-12 h-12)  
**avatar-size:** w-12 h-12 (majority; one provider says w-10 h-10, one says w-16 h-16)

## 7. Borders

**border-radius:**  
- default: rounded-none (unanimous)  
- card: rounded-none  
- button: rounded-none  
- input: rounded-none  
- chip/badge: rounded-none  

**border-width:**  
- default: border-2 (majority; one says border-4, one says border-0)  
- emphasis: border-4 (majority for focus/active states)  

**border-style:** border-solid (unanimous)  

**border-image:** not used  

**clip-path:** not used for default components; may be used for collage-edge simulation (minority)

## 8. Opacity

- disabled-state: opacity-40 (majority; two say opacity-50)  
- ghost/secondary: opacity-70 (partial; one provider says "not used")  
- overlay/scrim: opacity-50 (partial; one says 0, one says 90)  
- hover-feedback: not opacity-based – uses scale transform  

**Browser chrome (optional):**  
- selection: color not agreed; multiple conflicting suggestions  
- scrollbar: not agreed; some suggest hidden, others styled  

## 8.5. Visual Effects

### 8.5.0 — Physical Material Model

Declares the top-level surface simulation governing the entire page canvas.
This is distinct from component-level textures (§8.5d) — it is the global rendering layer.

material-model:    paper

global-filter:     none — no color cast or contrast shift applied to body;
                   the paper substrate is neutral white with optional warm tone
                   provided by surface-container (#F5F0E8) rather than a global filter

global-overlay:    Paper grain via body::before pseudo-element:
                   SVG feTurbulence baseFrequency=0.45 numOctaves=3 fractalNoise
                   blend: overlay or multiply, opacity 0.08–0.15 (barely perceptible)
                   position: fixed, z-index: 9998, pointer-events: none
                   animation: none

rendering-flags:
  font-smoothing:  antialiased — standard smooth rendering; not a pixel-art system
  image-rendering: auto — no pixelation required for this style
  text-rendering:  auto

### 8.5d — Texture & Noise Simulation

Two optional techniques, never both at full strength:

**Paper Grain**  
- technique: SVG feTurbulence (fractalNoise)  
- parameters: baseFrequency 0.35–0.65, numOctaves 3, type fractalNoise  
- surface: full-page canvas, card fills  
- intensity: barely perceptible (opacity 0.08–0.15)  
- blend: overlay, multiply, or screen (depending on mode)  
- color: monochrome noise  
- animation: none  
- tailwind-approximation: no native equivalent; use CSS filter or inline SVG  

**Cut-Paper Offset Shadow**  
- technique: duplicate shape shifted 2–4px down/right, solid black fill, no blur  
- surface: cards, buttons, collage elements  
- intensity: strong (solid color)  
- blend: normal  
- color: black  
- animation: none  

**Optional additional effects (minority reports):**  
- Halftone dots (radial-gradient repeating pattern, moderate intensity)  
- Print misregistration (0.2–0.5pt offset of color layers)  

## 9. Components

**Icon vocabulary:**  
- system: custom geometric glyphs (everyday objects: eye, hand, arrow, apple, bird, pencil; abstract mascots)  
- size: w-8 h-8 (majority)  
- color: inherits currentColor by default, or fixed role (primary, secondary, neutral)  
- treatment: purely flat, no filter, no animation  
- restrictions: no gradients, no shadows, no photographic icons  

**Image & media treatment:**  
- aspect-ratio: aspect-square or free (not agreed)  
- object-fit: object-cover (majority)  
- filter: none  
- overlay: optional paper grain; no gradient scrims  
- border: border-2 solid black on containers (majority)  

### Buttons  

| Property        | Primary                                        | Secondary                                         | Disabled             |
|-----------------|------------------------------------------------|---------------------------------------------------|----------------------|
| background      | contested (red hex not agreed)                 | contested (blue hex not agreed)                   | opacity-40           |
| border          | border-2 solid black (majority)                | border-2 solid black (majority)                   | border-2 solid black |
| border-radius   | rounded-none (unanimous)                       | rounded-none                                      | rounded-none         |
| text            | white, bold uppercase                          | black/white, bold uppercase (depends on bg)       | opacity-40           |
| hover           | scale-105 (instant linear 100–150ms)           | scale-105                                         | no change            |
| active          | scale-95 or color swap (disagreed)             | scale-95 or offset (disagreed)                    | no change            |
| disabled        | opacity-40                                     | opacity-40                                        | –                    |

### Cards / Panels  

- Fill: surface (#FFFFFF) or surface-container (#F5F0E8)  
- Border: border-2 solid black (majority)  
- Border-radius: rounded-none  
- Elevation: none (flat)  
- Internal padding: p-4 or p-6 (not agreed)  
- Optional collage variant: cut-paper offset shadow  

### Navigation  

- Active state: solid black underline (border-b-4) or primary background (not agreed)  
- Inactive: neutral text on surface  
- Hover: scale-105 or color change (disagreed)  

### Inputs / Forms  

- Border: border-2 solid black  
- Background: white  
- Border-radius: rounded-none  
- Focus ring: border-4 solid black (majority) or primary color (minority)  
- Label: uppercase bold, above field  

### Style-Native Primitives  

1. **Geometric Face Avatar** – Circle with two dot eyes and straight-line mouth; solid fill primary or neutral  
2. **Cut-Paper Collage Element** – Shape with hard offset shadow (2–4px shift) and optional irregular clip-path edge  
3. **Visual Puns** – Letterform that is also an object (e.g., "I" as an eye)  
4. **Tooltip Triangle** – Single yellow triangle pointing to element, no border or border-2 solid black (disagreed)  

## 10. Layout

- **Spacing cadence:** Generous, with at least 40% negative space  
- **Grid tendency:** Asymmetric – loose 4-column grid or off-center diagonal anchor (3:2:1 proportions)  
- **Density:** Low  
- **Section separation:** Large vertical gaps (gap-12) or single thick black rule (25% width, placed asymmetrically)  
- **Alignment philosophy:** Left-aligned with diagonal anchors; elements may overlap intentionally  
- **Breakpoint behavior:**  
  - **375px:** Stack all sections vertically; reduce display/headline by 2 sizes; keep padding p-4; soften asymmetry  
  - **768px:** Return to asymmetric grid; font sizes scale up  

**Motion block (majority agreement):**  
- transition-duration: 0.1–0.15s for scale/color swaps; 0.2s for load-in  
- transition-timing-function: linear  
- transition-property: transform, background-color, border-color (no opacity)  
- animation: snap-in (scale 0→1 over 200ms linear); hover-scale (1.05); instant color flash on state change  
- No smooth easing, no spring, no fade – only instantaneous color swaps and linear scaling  

## 11. Design System Notes

### 11a. Use Constraints

**Appropriate for:** Brand identity websites, playful creative tools, editorial landing pages, children's apps, museum/gallery interfaces, confirmation/success screens  
**Wrong for:** Data-heavy dashboards, medical records, financial trading platforms, formal government portals, dark-mode-first applications  

### 11b. Prompt Phrases

1. "bold geometric shapes in red blue yellow with heavy black outlines"  
2. "asymmetric layout with at least 40% negative space"  
3. "visual pun using everyday objects as abstract mascots"  
4. "cut-paper collage aesthetic with hard offset shadow"  
5. "flat primary colors, no gradients or shading, heavy typography in all-caps"  
6. "playful mid-century modern interface, sparse and witty"  
7. "single accent color used for a specific joke within a limited palette"  

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description.

rule: The palette is limited to 2–4 flat spot colors per composition. No tints, no pastels, no gradients.
do:   Red (#E31E24 or similar contested primary), blue (#003399 range contested secondary), yellow (#FFC72C range contested tertiary), black (#000000), and white (#FFFFFF) — each as a pure spot-color fill. Backgrounds are solid. Overlapping shapes create interaction through layering, not blending.
avoid:Linear gradients on any surface (e.g., background: linear-gradient(to bottom, #E31E24, #FFC72C)). Drop shadows with gaussian blur. Soft shading transitions. Pastel or desaturated variants of any palette color.

rule: Typography is always all-caps or always lowercase within a single element — mixed case is forbidden.
do:   Headlines in Futura Black text-4xl uppercase with leading-tight. Body text in bold text-base lowercase with leading-relaxed. Case choice is deliberate per element, never accidental.
avoid:Mixed-case text like "Click Here" or "Learn More" in a button or label. Font-light or font-extralight weights on any text. Italic styling on any element (font-style: italic).

rule: Clickable elements carry heavy black borders (border-2 to border-4) as the primary interactive signal, with no rounded corners.
do:   Primary button: contested red background, border-2 solid #000000, white bold uppercase text. Focus state: border-4 solid #000000. All border-radius: rounded-none. Border weight communicates interactivity.
avoid:Rounded corners on buttons or inputs (border-radius: 4px or higher). Thin 1px borders (border-1) on interactive elements. Focus rings using box-shadow glow (e.g., box-shadow: 0 0 0 3px rgba(0,0,0,0.3)) instead of border weight.

rule: At least 40% of any viewport is deliberate negative space — white (#FFFFFF) or surface-container (#F5F0E8).
do:   A hero section with a single large geometric shape (e.g., a red circle at 200×200px) placed off-center, surrounded by white. Content areas using gap-12 (48px) between sections. Sparse, confident composition anchored by asymmetry.
avoid:Symmetrical layouts with equal visual weight on both sides (unless used ironically). Dense grids filling every pixel. Equal-sized elements distributed uniformly across the viewport.

rule: Imagery is geometric, flat, and conceptual — everyday objects rendered as abstract mascots and visual puns.
do:   A circle with two dot eyes and a straight-line mouth as an avatar (w-12 h-12, flat fill). A yellow triangle (tertiary color, no border or border-2 solid black) pointing at a tooltip. A letterform doubling as an object (the letter "I" shaped like an eye).
avoid:Photorealistic imagery. Detailed illustration with shading. Photographic icons. Gradient-filled vector art. Any image requiring shading, blur, or soft edge to read correctly.

rule: Color interaction is high contrast only — color sits on white or on black, never color directly on color.
do:   Red text (#E31E24) on white (#FFFFFF) background. Yellow shape (#FFC72C) on black (#000000) background. Blue circle on white surface. Every color pairing at maximum contrast with black or white separation.
avoid:Red text on blue background. Yellow shape on red surface. Adjacent spot colors touching without black outline or white gap separation.

rule: Motion is instantaneous or linear — no smooth easing curves, no spring physics, no opacity crossfades.
do:   scale-105 on hover via transform: scale(1.05) over 100ms linear. Color state changes as instant swaps (100ms linear at most). snap-in animation: scale 0→1 over 200ms linear. transition-timing-function: linear everywhere.
avoid:ease-in-out transitions. Spring-based or bounce animations. opacity crossfades between states (transition on opacity). CSS cubic-bezier curves with smooth deceleration.

### 11d. Variation Bounds

- **flat vs. textured:** Toggle paper grain, cut-paper offset, misregistration on/off  
- **minimal vs. complex:** 3 shapes per composition vs. 6 shapes  
- **primary vs. muted:** Pure spot-color red/blue/yellow vs. faded print versions (70% saturation, slight yellow cast)  
- **geometric vs. organic:** Perfect compass-drawn circles/squares vs. wobbly hand-drawn shapes  
- **collage vs. pure flat:** Enable/disable cut-paper edges and hard offset shadows  
- **chaos vs. order:** Number of off-grid elements (none vs. up to 2 offset elements)

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts.
Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
A single large geometric shape — a red circle (contested primary, approximately #E31E24, 180×180px) — sits in the upper-right quadrant of a white (#FFFFFF) surface, leaving the lower-left 60% of the viewport as pure negative space. A bold headline in Futura font-black text-4xl uppercase occupies the lower-left, set in black (#000000) on white. No border on the circle. No drop shadow. Surface is clean white with optional paper grain at opacity 0.08–0.12 if surface-container is not active. A single black horizontal rule, 25% viewport width, sits between the headline and a smaller text-base lowercase body line below. Section gap is gap-12 (48px). The composition is asymmetric — the visual weight of the circle balances the typographic block at a 3:2:1 diagonal tension. No animations are running.

### 11e.ii — Maximum Expressiveness
Five to seven geometric shapes overlap in a cut-paper collage composition across the viewport: a large blue rectangle (contested secondary) as the ground layer, a yellow triangle (contested tertiary, border-2 solid #000000) overlapping its upper edge, a red circle (contested primary) offset 3px down-right with a solid black cut-paper shadow behind it, two small white circles with black dot eyes (Geometric Face Avatar primitive) peering over the rectangle's edge, and a Tooltip Triangle in yellow pointing at a call-to-action button. The CTA button: contested primary background, border-2 solid #000000, white bold uppercase text, with cut-paper offset shadow (3px down-right, solid black). Paper grain overlay at opacity 0.12 across the entire surface. Optional CMYK misregistration visible on overlapping color edges (0.3pt offset). snap-in animation fires on load: shapes scale from 0 to 1 over 200ms linear, staggered. At least 35% of the viewport remains white negative space even at maximum density. A visual pun is present — the letter "I" in the headline is replaced by a geometric eye shape (circle with horizontal line through it, black fill on white).

### 11e.iii — Data Context
Data is rendered as flat geometric blocks rather than conventional tables or charts. Each data label is a bold text-sm uppercase label in black (#000000) on white, set in Futura font-bold with tracking-wide. Each data value is a large geometric shape: a colored rectangle (contested primary for positive values, contested secondary for neutral, black for negative) with the number set in white bold text-2xl uppercase inside it, border-2 solid #000000. Values are arranged in an asymmetric grid with gap-4 between cells, not a uniform table. Column headers are black horizontal rules (border-b-4 solid #000000) at 25% width, placed off-center. Status indicators are flat spot-color dots: a green circle for ok, a yellow circle for warn, a red circle for err — each 12×12px, no border, no glow. Bar fills are solid rectangles with border-2 solid #000000, filled with contested primary color, no gradient, no rounded corners. At least 40% white space is maintained. Paper grain persists on the background surface at opacity 0.08. Typography shifts: data labels use label role (text-sm, font-bold, tracking-wide, uppercase), data values use title role (text-2xl, font-bold, uppercase). No chart axis lines — data is presented as discrete geometric cards, not continuous plots.

### 11f. Sources

Imagery coverage is sparse — only 3 institutional records verified.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** **Paul Rand** (1914–1996) was an American graphic designer recognized as one of the most influential figures in 20th-century modernist design. This record captures his personal visual identity—including letterhead, monogram, and signature—alongside the defining corpus of his corporate logo work for **IBM**, **UPS**, **ABC**, **Westinghouse**, and others. The slug is unambiguous within design-historical discourse; the majority of providers adopt this broad coverage of his practice. Associated typefaces include City Medium, Bodoni Book, Futura, Helvetica, Univers, and his custom logotypes for UPS, ABC, and his personal PR monogram.

**Verified imagery sources.** 3 URLs verified against institutional servers, distributed across:
- Wikipedia — 1 URL(s)
- Cooper Hewitt, Smithsonian Design Museum — 1 URL(s)
- Cooper Hewitt — 1 URL(s)

Key references include no verified institutional records at this time; the imagery references field lists zero documented URLs. Imagery coverage is sparse — only 3 institutional records verified.

**Named typefaces.** The typography of this style is attested as:
- City Medium (designed by Georg Trump 1930 — attestation: attested) — rendered here in Roboto Slab as the closest open substitute
- custom UPS logotype ( — attestation: attested) — rendered here as bespoke imagery — no web-font substitute
- custom ABC logotype (1962 — attestation: conventional) — rendered here as bespoke imagery — no web-font substitute
- custom PR monogram ( — attestation: attested) — rendered here as bespoke imagery — no web-font substitute
- Bodoni Book ( — attestation: attested) — rendered here in Playfair Display as the closest open substitute
- Futura ( — attestation: attested) — rendered here in Jost as the closest open substitute
- Helvetica ( — attestation: attested) — rendered here in Inter as the closest open substitute
- Helvetica ( — attestation: conventional) — rendered here in Inter as the closest open substitute
- Univers ( — attestation: conventional) — rendered here in Manrope as the closest open substitute

**Honest gaps.** The most significant gap is CONTESTED:§2.primary_colour — No verified hex/Pantone/CMYK for IBM blue. This absence is notable given the logo's canonical status in corporate identity history and the frequency with which designers reference Rand's color specifications without primary sourcing. Additional gaps likely exist in undocumented color values across his other corporate identities and personal branding materials. Direct access to Rand's original production files, printer proofs, or verified client brand guidelines from the relevant periods would resolve these uncertainties.
