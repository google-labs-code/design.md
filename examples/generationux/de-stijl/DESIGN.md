---
version: alpha
name: "De Stijl"
description: A radical reduction of interface form to orthogonal lines, primary colour planes, and black-and-white fields, rooted in the early 20th-century Dutch modernist movement. The system enforces absolute abstraction with only horizontal and vertical lines, pure primary colour rectangles at 100% opacity, and asymmetrically balanced compositions on a modular grid.
colors:
  primary: "#FF0000"
  secondary: "#0000FF"
  tertiary: "#FFFF00"
  surface: "#FFFFFF"
  outline: "#000000"
  neutral: "#888888"
typography:
  display:
    fontFamily: "geometric sans-serif"
    fontSize: "48px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.05em"
    textTransform: "uppercase"
  headline:
    fontFamily: "geometric sans-serif"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: 1.375
    letterSpacing: "0.025em"
    textTransform: "uppercase"
  title:
    fontFamily: "geometric sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0em"
    textTransform: "uppercase"
  body:
    fontFamily: "geometric sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "0em"
    textTransform: "lowercase"
  label:
    fontFamily: "geometric sans-serif"
    fontSize: "14px"
    fontWeight: 500
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
  component-internal: "8px"
  section-internal: "16px"
  page-edge: "32px"
  gap-component: "16px"
  gap-section: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.button}"
    padding: "8px"
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.button}"
    padding: "8px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.outline}"
    rounded: "{rounded.button}"
    padding: "8px"
  button-secondary-hover:
    backgroundColor: "{colors.outline}"
    textColor: "{colors.surface}"
    rounded: "{rounded.button}"
    padding: "8px"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "16px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.outline}"
    rounded: "{rounded.input}"
    padding: "8px"
  input-focus:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.outline}"
    rounded: "{rounded.input}"
    padding: "8px"
  colour-plane:
    backgroundColor: "{colors.primary}"
  grid-divider:
    backgroundColor: "{colors.outline}"
  square-accent:
    backgroundColor: "{colors.outline}"
    size: "24px"
provenance:
  coverage_status: "sparse"
  identity_description: "This slug refers to De Stijl (Dutch for \"The Style\"), an art and design movement founded in the Netherlands in 1917 and active through the early 1930s. The movement’s visual identity—manifested in paintings, architecture, furniture, typography, and graphic design—is defined by a strict geometry of orthogonal lines, primary colours (red, blue, yellow) plus black, white, and grey, and a rejectio"
  manual_enrichment_required: false
  imagery_count: 4
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "www.rietveldschroderhuis.nl"
      count: 1
    - host: "www.moma.org"
      count: 1
    - host: "en.wikipedia.org"
      count: 1
    - host: "colourlex.com"
      count: 1
  imagery_urls:
    - url: "https://www.rietveldschroderhuis.nl/en"
      host: "www.rietveldschroderhuis.nl"
      institution: "Rietveld Schröder House, Utrecht (Centraal Museum)"
      confidence_original: medium
    - url: "https://www.moma.org/collection/works/82249"
      host: "www.moma.org"
      institution: "Museum of Modern Art, New York"
      confidence_original: low
    - url: "https://en.wikipedia.org/wiki/De_Stijl"
      host: "en.wikipedia.org"
      institution: null
      confidence_original: high
    - url: "https://colourlex.com/"
      host: "colourlex.com"
      institution: "ColourLex (independent research database)"
      confidence_original: low
  typefaces_attested:
    - name: "Futura"
      foundry: null
      year: 1927
      google_fonts: "Jost"
      attestation: "attested"
    - name: "Akzidenz-Grotesk"
      foundry: "Berthold"
      year: 1896
      google_fonts: "Archivo"
      attestation: "attested"
    - name: "custom De Stijl masthead lettering"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "attested"
    - name: "Dadaistische handlettering"
      foundry: null
      year: 1923
      google_fonts: null
      is_custom: true
      attestation: "unknown"
  flags:
    - "sparse_imagery"
    - "1_robots_disallowed_urls"
  honest_gaps:
    - "1. **Colour hex values** – all are `[inferred]` from reproductions; no published colorimetric measurements are cited."
---

# Design System: De Stijl

## 0. Taxonomy & Identity
- entity-type: interface / system / environment
- artefact-family: operating system / software UI
- technique: digital vector (majority; one provider said raster)
- movement-lineage: design movement / art-historical movement (unanimous)
- era: early modernist (unanimous)
- geography: central europe (majority; one provider said platform‑neutral)
- domain: publishing / media / music / internet / software / AI (varied)
- formal‑traits: grid‑based, asymmetric, geometric, flat, minimal, modular (majority)
- color‑logic: saturated / spot‑color (majority)
- typography‑mode: geometric sans (unanimous)
- texture: smooth, matte (majority)
- function: inform / navigate (split; majority inform)
- provenance: canonical historical source (split; one revival/homage)

## 1. Overview
De Stijl is a radical reduction of interface form to orthogonal lines, primary colour planes, and black‑and‑white fields, rooted in the early 20th‑century Dutch modernist movement (1917–1931). The style is defined by absolute abstraction: only straight horizontal and vertical lines, pure primary colour rectangles (red, blue, yellow), and black‑and‑white fields. The emotional register is utopian order – calm, austere, yet dynamically balanced through off‑axis composition. Every element is perfectly flat, with no gradients, shadows, textures, or representational imagery. Asymmetrical balance is the only law; symmetry would break the style.

**Recognisability cues**
- Composition built entirely from horizontal and vertical lines meeting at right angles
- Black orthogonal lines dividing rectangular zones of pure red, blue, or yellow on a white field
- All edges crisp, vector‑like, with zero anti‑aliasing degradation
- Colour fields are solid, unmodulated, perfectly opaque, and never touch without a black line or white gap
- Typography set in all‑caps geometric sans (or strict lowercase for body)
- Asymmetrical balance; empty white space is deliberate

**What would break it**
- Curves, diagonals (unless explicit counter‑composition)
- Gradients, shading, transparency, or any 3D effect
- Secondary colors (green, orange, purple) or pastels
- Representational imagery or organic forms
- Centered symmetry or floating elements

## 2. Constants
- Light Mode: primary — white background, black lines, primary color fields (unanimous)
- Dark Mode: variant — invert background to black, lines and text to white; primary color fields remain unchanged (majority; one provider said no dark mode)
- Responsive: yes — grid‑based layout adapts to viewport; composition reflows at 375px and 768px (majority)
- States: Default, Active, Disabled (majority; some include Focus, Error, Hover)
- surface-simulation: none — clean digital vector aesthetic; no physical material simulation. Smooth matte surfaces with no substrate grain, scanlines, or print artifacts.

## 2a — Interaction Model

hover-delta:        color-shift — border thickens from border-2 to border-4 black (#000000) on interactive elements; some implementations also shift fill colour (e.g., secondary button fill becomes black)
active-delta:       color-shift — fill colour shifts to black (#000000) or blue (#0000FF); providers disagree on target colour
focus-style:        color-border — border thickens to border-4 black (#000000); no glow, no offset ring
transition-duration:300ms — slow linear state transitions matching motion block specification
transition-easing:  linear
exempt-animations:  none — no continuous keyframe loops in this system; slide-in, color-reveal, and line-draw are triggered once on load/scroll

## 3. Colors
All colours are 100% opaque with no blending or transparency.

| Role | Hex | Tag | Description |
|------|-----|-----|-------------|
| primary | `#FF0000` | [conventional] | Pure Red — prominent actions, headings, focal color fields |
| on‑primary | `#FFFFFF` | [conventional] | White text on red |
| secondary | `#0000FF` | [conventional] | Pure Blue — secondary actions, links, alternate color fields |
| on‑secondary | `#FFFFFF` | [conventional] | White text on blue |
| tertiary | `#FFFF00` | [conventional] | Pure Yellow — highlights, badges, background alternatives |
| on‑tertiary | `#000000` | [conventional] | Black text on yellow |
| surface | `#FFFFFF` | [conventional] | White — default background (light mode) |
| on‑surface | `#000000` | [conventional] | Black — primary text, grid lines, structural outlines |
| outline | `#000000` | [conventional] | Black — borders, grid dividers, focus rings |
| neutral | `#888888` | [inferred] | Middle Gray — optional for subdued text or disabled fill (use sparingly) |
| error | — | [unverified] | Not explicitly defined; some providers reuse primary red for error states |

**Dark mode swap table** (majority opinion)
- surface → `#000000`
- on‑surface → `#FFFFFF`
- outline → `#FFFFFF`
- neutral → `#888888` (unchanged)
- Color fields remain unchanged (primary, secondary, tertiary hex values)

## 4. Typography
All typefaces use straight lines and right angles; no serifs, no calligraphic strokes. The specific typeface is **contested** (see §3 typeface field in contestation map). Providers offered multiple examples: Futura, Akzidenz‑Grotesk, Avant Garde, Gill Sans, Avenir, Century Gothic, Helvetica — none with cited foundry or year.

For the purposes of this document, use a **geometric sans-serif** archetype (the exact family must be resolved before production). Type is set in all caps for display/headline/title/label roles; strict lowercase for body text. No mixed case. Text alignment flush left or flush right only — never centered, never justified.

### Roles
- **display**:
  - font-family: geometric sans-serif (typeface contested — see map)
  - font-size: text-5xl to text-6xl (majority)
  - font-weight: font-bold
  - line-height: leading-tight
  - letter-spacing: tracking-wide to tracking-wider
  - text-transform: uppercase
- **headline**:
  - font-family: geometric sans-serif
  - font-size: text-3xl to text-4xl
  - font-weight: font-bold
  - line-height: leading-tight to leading-snug
  - letter-spacing: tracking-wide
  - text-transform: uppercase
- **title**:
  - font-family: geometric sans-serif
  - font-size: text-xl to text-2xl
  - font-weight: font-semibold
  - line-height: leading-snug to leading-normal
  - letter-spacing: tracking-normal
  - text-transform: uppercase
- **body**:
  - font-family: geometric sans-serif
  - font-size: text-base
  - font-weight: font-normal to font-medium (majority normal)
  - line-height: leading-relaxed
  - letter-spacing: tracking-normal
  - text-transform: lowercase
- **label**:
  - font-family: geometric sans-serif
  - font-size: text-sm
  - font-weight: font-medium
  - line-height: leading-none to leading-normal
  - letter-spacing: tracking-wide
  - text-transform: uppercase

## 5. Elevation
Flat depth model — no shadow hierarchy. All elements exist on a single plane. No stacking context.

## 6. Spacing & Sizing
All spacing follows a modular grid (base unit 4px or 8px). Values are approximate; see variation bounds.

- **padding**:
  - component-internal: p-2 to p-4 (majority p-2)
  - section-internal: p-4 to p-8 (majority p-4)
  - page-edge: p-8 to px-8 (consistent)
- **margin**:
  - between-components: gap-4 to gap-6 (majority gap-4)
  - between-sections: gap-8 to gap-12 (majority gap-8)
- **component-heights**:
  - sm: h-8 to h-16 (majority h-8)
  - md: h-10 to h-24 (majority h-10 or h-12; reconcile before use)
  - lg: h-12 to h-32 (majority h-12)

| Provider | sm | md | lg |
|----------|----|----|-----|
| crof-deepseek-v4-pro-precision | h-8 | h-10 | h-12 |
| crof-glm-5.1-precision | h-8 | h-12 | h-16 |
| crof-kimi-k2.6-precision | h-8 | h-10 | h-12 |
| crof-kimi-k2.5-lightning | h-16 | h-24 | h-32 |
| deepseek-v4-pro | h-10 | h-12 | h-16 |

No clear majority; size tokens need grid‑specific tuning.

- **icon-size**: w-5 to w-8 (majority w-6)
- **avatar-size**: w-8 (mentioned by two providers)

## 7. Borders
- border-radius: `rounded-none` — all edges are right angles (unanimous)
- border-width:
  - default: `border-2` (2px) — grid lines, component outlines (unanimous)
  - emphasis: `border-4` (4px) — focus rings, active states, heavy dividers (unanimous)
- border-style: `border-solid` — never dashed, dotted, or double (unanimous)
- border-image: none
- clip-path: none — all components are axis‑aligned rectangles

## 8. Opacity
All color planes are 100% opaque; the style avoids transparency. For functional UI states:

| State | Proposed treatment |
|-------|-------------------|
| disabled | Use gray fill (`#888888`) **or** opacity reduction (providers split: some say `opacity-30` to `opacity-50`, others say keep opaque and use gray fill) |
| ghost/secondary | Not used (unanimous) |
| overlay/scrim | Not applicable (unanimous) |
| hover-feedback | None (no opacity change); use border thickening or color shift instead (majority) |
| selection (text) | Primary red at 20–30% opacity (two providers) |
| scrollbar | Thin, monochrome (two providers) |

The correct disabled treatment is contested: use gray fill vs. opacity. Default to gray fill (`#888888`) as it maintains flat opacity discipline.

## 9. Components
All components reflect the core language: straight lines, right angles, solid primary/black/white fills, thick black borders, zero curvature.

### Icon vocabulary
- system: custom geometric glyphs — only rectangles, squares, and thin lines; no figurative icons (unanimous)
- size: w-4 to w-8 (majority w-6)
- colour: inherits `currentColor` (black on white, white on black, or a primary colour)
- treatment: purely flat, no filter or glow (unanimous)
- restrictions: no curves, no diagonal lines, no filled shapes with internal detail; no icon with more than one colour

### Buttons
All buttons are rectangular (rounded-none), with border-2 black outline, and flat fill. Text is uppercase geometric sans.

- **Primary**: fill `#FF0000` (red), text white (`#FFFFFF`), hover: border thickens to border-4, active: fill shifts to black **or** blue (providers disagree), disabled: fill becomes `#888888` (gray) with white text.
- **Secondary (outline)**: fill white (`#FFFFFF`), text black (`#000000`), hover: fill becomes black, text white, active: fill becomes primary red, disabled: gray fill and border.
- **Destructive**: fill yellow (`#FFFF00`) or black (providers disagree; majority yellow with black text), text on yellow is black, on black is white.
- **Hover**: border thickness increase (border-4) is the most common pattern; some providers also include fill colour change.

### Cards / Panels
- Fill: white (default), optionally black or gray for dark mode
- Border: border-2 solid black
- Rounding: rounded-none
- Internal padding: p-4
- No shadow, no elevation

### Navigation
- Horizontal bar with items separated by thin black lines or whitespace
- Active state: primary‑coloured bar (red) under the text, or a full‑height primary fill behind the text
- Inactive items: black text on white
- All items uppercase, flush left

### Inputs / Forms
- Background: white (light) or black (dark)
- Border: border-2 solid black, rounded-none
- Focus: border thickens to border-4 black (no offset, no glow)
- Label: above input, uppercase, label style
- Error: border changes to red (`#FF0000`) border-4; error message in red uppercase
- Disabled: gray fill (`#888888`) with white/gray text

### Primitive components
1. **Colour plane** — a rectangular block of pure primary colour, bounded by black lines on at least two sides. Used for visual weight, hierarchy, or as accent panel.
2. **Grid divider** — a full‑width or full‑height black line (border-2 or border-4) extending to canvas edges. Separates zones.
3. **Square accent** — a small black or primary‑colour square (w-4 to w-6) used as a focal point or end‑of‑line marker.

## 10. Layout
- **Spacing cadence**: modular grid (e.g., 4×4 or 6×6). Every element sits at grid intersections. Spacing between items is uniform (gap-4 or gap-8).
- **Grid tendency**: modular, 2–8 columns depending on viewport. Asymmetrical balance; no single colour zone dominates more than ~40% of area.
- **Density**: sparse — 6–12 rectangular fields; deliberate white space.
- **Section separation**: thick black lines (border-2 to border-4) that run edge‑to‑edge. No margin‑based separation; all divisions are structural lines.
- **Alignment**: flush left or flush right on the grid. Never centred.
- **Breakpoints**:
  - 375px: grid reduces to 2–3 columns; colour fields stack vertically; text scales down one step.
  - 768px: standard 4–6 columns; 6–12 rectangles; text at full sizes.
  - 1024px+: 6×8 grid optional; proportion remains simple; stroke thickness scales proportionally.
- **Motion**:
  - transition-duration: 300–400ms (majority 300ms)
  - transition-timing-function: linear (no easing, no bounce)
  - transition-property: opacity, transform (translateX/Y), width, height
  - Animations: `slide-in` (element translates from edge to rest position), `color-reveal` (opacity 0→1 for colour fills), `line-draw` (scaleX 0→1 for black lines)
  - trigger: on-load or on-scroll-enter
  - No rotation, no 3D, no parallax.

## 11. Design System Notes

### 11a. Use Constraints
**Appropriate for**: editorial layouts, museum/archive interfaces, brand identity for modern art/architecture, abstract geometric UIs, poster‑style landing pages, minimalist dashboards, architectural visualisations.
**Wrong for**: data‑heavy dashboards requiring deep hierarchy, playful consumer apps, photography‑first portfolios, e‑commerce product displays, gaming HUDs, any context needing curves, gradients, or photographic imagery.

### 11b. Prompt Phrases
- "Primary colour blocks on a white field, separated by black orthogonal lines"
- "Asymmetric grid composition with no curves, no diagonals"
- "All‑caps geometric sans in flush‑left alignment on a strict baseline"
- "Flat 2D surfaces with 100% opacity — no gradients, no shadows"
- "Rectangles and squares only — no representational icons or organic shapes"
- "Modular grid with deliberate empty white space"
- "Black lines extend to canvas edge; colour fields never touch without a black line or white gap"
- "Slow linear motion: elements slide in from the edge and stop abruptly"

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description. Minimum 4 rules, maximum 8.

rule: Colour is restricted to pure primaries — red, blue, yellow — plus black, white, and optional gray. No secondary or mixed colours exist in the system.
do:   Red (#FF0000), blue (#0000FF), and yellow (#FFFF00) fields appear as solid opaque rectangles separated by black (#000000) lines or white (#FFFFFF) gaps. Gray (#888888) used only for disabled states.
avoid:Green (#00FF00), orange (#FF8800), purple (#8800FF), pastels, or any colour resulting from mixing primaries appear anywhere in the composition.

rule: All geometry is axis-aligned — only horizontal and vertical lines meeting at right angles. Curves and diagonals are forbidden unless Van Doesburg counter-composition is explicitly invoked.
do:   Rectangles and squares aligned to the modular grid; all borders and dividers are perfectly horizontal or vertical with border-solid; border-radius: rounded-none on every component.
avoid:Circular avatars, pill-shaped buttons (border-radius: 9999px), arc separators, or diagonal lines dividing composition zones.

rule: Typography uses strict case discipline — all caps for display/headline/title/label roles, strict lowercase for body. Mixed case never appears.
do:   Headlines in geometric sans-serif uppercase (font-bold, tracking-wide, text-3xl to text-6xl); body in geometric sans-serif lowercase (font-normal, tracking-normal, text-base).
avoid:Sentence-case headings ("Welcome to our gallery"), title-case labels ("Click Here"), or mixed-case body text — these read as a different, non-De Stijl design system.

rule: Composition is asymmetrically balanced — visual weight is distributed off-centre. Symmetry is the single strongest signal that the system is wrong.
do:   A large white field (60% area) with a red plane (25%) in the lower-right quadrant and a blue strip (15%) along the upper-left; no element centred; flush-left or flush-right text alignment only.
avoid:Symmetrical layout with equal-area colour zones arranged in mirror balance, or centred headings on a centred grid — this reads as Swiss/International style, not De Stijl.

rule: Surfaces are perfectly flat at 100% opacity — no gradients, shadows, bevels, or depth effects of any kind.
do:   Solid opaque fills; edges rendered as crisp vector lines with no anti-aliasing degradation; all colour planes at full saturation with no alpha channel.
avoid:box-shadow: 0 2px 8px rgba(0,0,0,0.15), linear-gradient on any element, bevel borders, or feDropShadow/feTurbulence SVG filters — each immediately reads as a non-De Stijl aesthetic.

rule: Primary colour planes never touch directly — a black line or white gap always separates them. Colour adjacency without buffering breaks the system.
do:   Red (#FF0000) field bordered by border-2 black (#000000) lines; blue (#0000FF) field on the opposite side of a white (#FFFFFF) gap; no two primaries share an edge.
avoid:Red and blue rectangles adjacent with no black line or white buffer between them — the optical vibration reads as a colour-theory exercise, not a composed De Stijl grid.

rule: Every element is placed on the modular grid — no free-floating, centred, or off-grid positioning.
do:   Components aligned to grid intersections with gap-4 or gap-8 uniform spacing; all edges flush with grid lines; padding follows 4px or 8px base unit.
avoid:Elements positioned with arbitrary pixel offsets (e.g., top: 37px, left: 53px), centred alignment, or spacing values that do not correspond to the modular grid unit.

rule: Motion is slow and strictly linear — elements slide in from edges and stop abruptly. Easing, bounce, parallax, and 3D rotation are forbidden.
do:   translateX/Y animation at 300ms linear; elements move from canvas edge to rest position with no deceleration curve; color-reveal fades at opacity 0→1; line-draw scales 0→1.
avoid:cubic-bezier(0.4, 0.0, 0.2, 1) ease-in-out, bounce keyframes, parallax scroll offsets, or rotate3d transforms — each breaks the austere mechanical quality of De Stijl motion.

### 11d. Variation Bounds
1. **Grid density**: sparse 3×3 to dense 8×8 — affects number of colour planes and lines
2. **Stroke thickness**: hairline (1px) to bold block outlines (8px) — must remain uniform throughout composition
3. **Colour emphasis**: all three primaries balanced vs. one dominant (up to 40% area) with others as accents
4. **Proportion of black vs. white**: light‑dominant (70% white, 20% black lines, 10% colour) to heavy‑dominant (40% black fields, 30% white, 30% colour)
5. **Clean vs. grimy**: perfect vector edges vs. subtle offset misregistration simulating print (applied as global overlay, not per‑element)
6. **Diagonal allowance**: strict Mondrian grid (no diagonals) vs. Van Doesburg counter‑composition (allow 45° diagonal lines and rotated squares)

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts.
Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
A white (#FFFFFF) canvas divided by border-2 black (#000000) orthogonal lines into 6–8 rectangular zones of varying proportions. One prominent red (#FF0000) field occupies roughly 20% of the lower-right quadrant. A thin blue (#0000FF) vertical strip runs along the left edge, roughly 8% of total width. A small yellow (#FFFF00) square (w-6 × w-6) sits near the upper-right grid intersection. Remaining zones are white (#FFFFFF). Display text in geometric sans-serif uppercase, font-bold, tracking-wide, flush-left, in the largest white zone at text-5xl. Body text in lowercase, font-normal, text-base in an adjacent white zone. Grid spacing at gap-4 throughout. All edges crisp with border-solid and rounded-none. No shadows, no gradients, no curves.

### 11e.ii — Maximum Expressiveness
A dense modular grid (8 columns × 6 rows) with 12 or more rectangular fields of strongly varying proportions. Red (#FF0000) dominates one quadrant at approximately 35% area — a large horizontal rectangle spanning 3 columns and 2 rows. Blue (#0000FF) forms a horizontal band across the upper third, 1 row tall, spanning 5 columns. Yellow (#FFFF00) accents appear as two narrow vertical strips (1 column × 1 row each) at asymmetric positions. Black (#000000) divider lines at border-4 create heavy structural emphasis at the composition's primary intersections. Multiple white (#FFFFFF) zones of unequal size create deliberate asymmetry — no two white zones share the same dimensions. The `slide-in` animation translates each colour plane from the canvas edge to its rest position at 300ms linear. `line-draw` animation extends black dividers via scaleX 0→1. `color-reveal` fades each primary field from opacity 0→1. Display text at text-6xl uppercase in the largest white zone. No single colour exceeds 40% of total area. Flush-left alignment throughout.

### 11e.iii — Data Context
Data elements occupy rectangular grid cells bounded by border-2 black (#000000) lines on a white (#FFFFFF) surface. Numeric values appear in geometric sans-serif text-2xl uppercase, on-surface (#000000). Labels in text-sm uppercase tracking-wide label role, also black (#000000). Status states are communicated solely through primary colour field fills behind status values: ok rendered as a blue (#0000FF) cell with white (#FFFFFF) text; err rendered as a red (#FF0000) cell with white (#FFFFFF) text; warn rendered as a yellow (#FFFF00) cell with black (#000000) text. Bar fills are solid primary colours with no gradient or glow — flat opaque rectangles. Table rows are bounded by border-2 black cell dividers; no alternating row colour (white only) to maintain the single-plane discipline. Charts use a blue (#0000FF) line on a white grid, stroke-width 1.5px, with axis lines in black (#000000) and axis labels in text-xs uppercase. All data visualization maintains axis-aligned, flat, opaque discipline — no curved chart lines, no drop-shadow on data points.

### 11f. Sources

Imagery coverage is sparse — only 4 institutional records verified.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** **De Stijl** (Dutch for "The Style") was an art and design movement founded in the Netherlands in 1917 and active through the early 1930s. The movement’s visual identity—manifested in paintings, architecture, furniture, typography, and graphic design—is defined by a strict geometry of orthogonal lines, primary colours (red, blue, yellow) plus black, white, and grey, and a rejection of traditional compositional forms. Designers integrated these strict visual principles with typography, heavily utilizing **Futura**, **Akzidenz-Grotesk**, custom **De Stijl** masthead lettering, and Dadaistische handlettering.

**Verified imagery sources.** 4 URLs verified against institutional servers, distributed across:
- Rietveld Schröder House, Utrecht (Centraal Museum) — 1 URL(s)
- Museum of Modern Art, New York — 1 URL(s)
- en.wikipedia.org — 1 URL(s)
- ColourLex (independent research database) — 1 URL(s)

Key references include the **Rijksmuseum**'s record at `https://www.rijksmuseum.nl/en/collection/RP-P-2017-265-1`. Imagery coverage is sparse — only 4 institutional records verified.

**Named typefaces.** The typography of this style is attested as:
- Futura (designed by Paul Renner 1927 — attestation: attested) — rendered here in Jost as the closest open substitute
- Akzidenz-Grotesk (for Berthold 1896 — attestation: attested) — rendered here in Archivo as the closest open substitute
- custom De Stijl masthead lettering ( — attestation: attested) — rendered here as bespoke imagery — no web-font substitute
- Dadaistische handlettering (designed by Theo van Doesburg 1923 — attestation: unknown) — rendered here as bespoke imagery — no web-font substitute

**Honest gaps.** The most significant gap in the system involves unverified chromatic data. Currently, all **Colour hex values** are `[inferred]` from reproductions; no published colorimetric measurements are cited. This lack of empirical data prevents exact digital replication of the movement's foundational red, blue, and yellow geometry. Commissioning spectrophotometric analysis of surviving original canvases and typographic prints would resolve these measurement gaps definitively.
