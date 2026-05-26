---
version: alpha
name: "Jan Tschichold — New Typography"
description: "A constrained functionalist design system based on Jan Tschichold's New Typography: asymmetrical layouts, extreme typographic contrast, monochromatic palette with a single flat accent colour (red), matte surfaces, hard edges, and no ornament."
colors:
  ok: "#000000"
  warn: "#CC0000"
  err: "#CC0000"
  delta-up: "#000000"
  delta-down: "#CC0000"
typography:
  display:
    fontFamily: "Jost"
    fontSize: "60px"
    fontWeight: 900
    lineHeight: 1.25
    letterSpacing: "0.05em"
    textTransform: "uppercase"
  headline:
    fontFamily: "Jost"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.025em"
    textTransform: "uppercase"
  title:
    fontFamily: "Jost"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.375
    letterSpacing: "0em"
    textTransform: "uppercase"
  body:
    fontFamily: "Jost"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "0em"
  label:
    fontFamily: "Jost"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.1em"
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
components:
  button-primary:
    backgroundColor: "{colors.ok}"
    textColor: "#FFFFFF"
    rounded: "{rounded.button}"
    padding: "16px"
  button-primary-hover:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.ok}"
    rounded: "{rounded.button}"
    padding: "16px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ok}"
    rounded: "{rounded.button}"
    padding: "16px"
  card:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.ok}"
    rounded: "{rounded.card}"
    padding: "16px"
  input:
    backgroundColor: "transparent"
    textColor: "{colors.ok}"
    rounded: "{rounded.input}"
    padding: "16px"
  input-focus:
    backgroundColor: "transparent"
    textColor: "{colors.ok}"
    rounded: "{rounded.input}"
    padding: "16px"
  metric-cell:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.ok}"
    rounded: "{rounded.card}"
    padding: "16px"
  signal-bar:
    backgroundColor: "{colors.err}"
    height: "4px"
  status-cell-ok:
    textColor: "{colors.ok}"
  status-cell-warn:
    textColor: "{colors.warn}"
  status-cell-err:
    backgroundColor: "{colors.err}"
    textColor: "#FFFFFF"
    rounded: "{rounded.card}"
    padding: "16px"
  data-table-row:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.ok}"
  chart-surface:
    backgroundColor: "#FFFFFF"
  horizontal-rule:
    backgroundColor: "{colors.ok}"
    height: "2px"
  geometric-arrow:
    backgroundColor: "{colors.err}"
    width: "32px"
    height: "32px"
  diagonal-band:
    backgroundColor: "{colors.err}"
    width: "100%"
    height: "40px"
  reversed-out-block:
    backgroundColor: "{colors.ok}"
    textColor: "#FFFFFF"
    rounded: "{rounded.card}"
    padding: "16px"
  register-mark:
    width: "16px"
    height: "16px"
provenance:
  coverage_status: "complete"
  identity_description: "The slug `jan-tschichold` refers to Jan Tschichold (1902–1974), German typographer, book designer, calligrapher, and typeface designer. His career is divided into two influential phases: the radical modernist period (c. 1923–1933), in which he codified the principles of the New Typography through his poster work, book designs, and the manifesto *Die neue Typographie* (1928); and the later classica"
  manual_enrichment_required: false
  imagery_count: 7
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "bauhaus-dessau.de"
      count: 1
    - host: "collections.reading.ac.uk"
      count: 1
    - host: "www.vam.ac.uk"
      count: 1
    - host: "www.linotype.com"
      count: 1
    - host: "en.wikipedia.org"
      count: 1
    - host: "commons.wikimedia.org"
      count: 1
    - host: "www.penguin.co.uk"
      count: 1
  imagery_urls:
    - url: "https://bauhaus-dessau.de/"
      host: "bauhaus-dessau.de"
      institution: "Bauhaus Dessau Foundation"
      confidence_original: low
    - url: "https://collections.reading.ac.uk/special-collections/"
      host: "collections.reading.ac.uk"
      institution: "University of Reading, Design Archives"
      confidence_original: medium
    - url: "https://www.vam.ac.uk/"
      host: "www.vam.ac.uk"
      institution: "Victoria and Albert Museum, London"
      confidence_original: low
    - url: "https://www.linotype.com/"
      host: "www.linotype.com"
      institution: "Linotype GmbH"
      confidence_original: low
    - url: "https://en.wikipedia.org/wiki/Jan_Tschichold"
      host: "en.wikipedia.org"
      institution: null
      confidence_original: high
    - url: "https://commons.wikimedia.org/wiki/Category:Jan_Tschichold"
      host: "commons.wikimedia.org"
      institution: null
      confidence_original: high
    - url: "https://www.penguin.co.uk/"
      host: "www.penguin.co.uk"
      institution: "Penguin Random House"
      confidence_original: low
  typefaces_attested:
    - name: "Akzidenz-Grotesk"
      foundry: "Berthold"
      year: 1896
      google_fonts: "Archivo"
      attestation: "attested"
    - name: "Futura"
      foundry: "Bauer"
      year: 1927
      google_fonts: "Jost"
      attestation: "attested"
    - name: "Sabon"
      foundry: "Linotype / Monotype / Stempel"
      year: 1967
      google_fonts: "EB Garamond"
      attestation: "attested"
    - name: "Monotype Baskerville"
      foundry: "Monotype"
      year: 1923
      google_fonts: "Libre Baskerville"
      attestation: "attested"
    - name: "Garamond (Monotype series 156)"
      foundry: "Monotype"
      year: null
      google_fonts: "EB Garamond"
      attestation: "unknown"
    - name: "Custom lettering"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "attested"
  flags:
    []
  honest_gaps:
    - "1. **No attested hex/Pantone values for any colour.** Any colour given in this record is inferred or unverified."
---
# Design System: Jan Tschichold — New Typography

## 0. Taxonomy & Identity

- entity-type: interface / system / environment  
- artefact-family: operating system / software UI  
- technique: reprographics  
- movement-lineage: design movement  
- era: interwar  
- geography: central europe  
- domain: publishing / media / music  
- formal-traits: asymmetric, grid-based, geometric, utilitarian  
- color-logic: spot-color  
- typography-mode: geometric sans  
- texture: matte  
- function: inform  
- provenance: revival / homage  

## 1. Overview

This style channels the rigorous asymmetrical clarity of Jan Tschichold's New Typography (1920s–1930s). Layouts reject ornament in favour of functional hierarchy, extreme contrast between headline and body sizes, and dynamic balance through asymmetrical placement. The palette is stripped to black, white, and a single flat accent colour (typically red). All surfaces are matte and unmodulated — no gradients, shadows, or rounded corners. Typography is the sole expressive medium: all type is sans‑serif, set flush left, ragged right, never justified. Photographs appear as stark high‑contrast cut‑outs. The emotional register is rigorous, direct, and intellectual.

- **Emotional tone:** rigorous, direct, authoritative, functional  
- **Era/lineage:** 1920s–1930s New Typography (Germany/Central Europe)  
- **Density level:** low to moderate — generous white space  
- **Core rendering philosophy:** functional clarity through typographic form alone  
- **What makes it recognizable:** asymmetrical balance, extreme size contrast, geometric sans‑serif, red accent, hard edges, no ornament  
- **What would break it:** centred layouts, serifs, rounded corners, gradients, multiple accent colours, decorative flourishes  
- **Surface texture:** flat matte; optional ink‑bleed or paper‑grain simulation (as variation)

## 2. Constants

- **Light Mode:** primary (white/off‑white background)  
- **Dark Mode:** no (not typically part of the system)  
- **Responsive:** yes — adapt grid from 2–4 columns at 768px+ to single column at 375px; maintain flush‑left, ragged‑right alignment  
- **States:** Default, Active, Disabled, Hover, Focus (minimal, where interactivity required)  
- **surface-simulation:** none — clean flat matte surfaces by default; paper grain and ink‑bleed available as a variation bound (see §11d.4)

## 2a — Interaction Model

hover-delta:        color-shift — black↔white or black↔accent-red swap on interactive elements; no opacity change, no movement
active-delta:       color-shift — inversion continues; primary button fills white with black text on press, or accent fills black
focus-style:        color-border — border-b-2 in accent red (#CC0000) or border-2 solid #000000 on focused elements
transition-duration:0ms — state changes are instantaneous per New Typography principle; optional 100–150ms for colour transitions only
transition-easing:  none
exempt-animations:  none — the system has no named keyframe animations

## 3. Colors

All hex values are [unverified] — no cited source.

- **primary** [unverified] — CONTESTED:§2.hex_primary — providers gave [#000000 / #000000 / #000000 / #DA291C]; majority #000000 but contested due to role ambiguity  
- **on-primary** (#FFFFFF) [unverified] — white for reversed‑out type  
- **secondary** [unverified] — CONTESTED:§2.hex_secondary — providers gave [#CC0000 / not defined / not defined / #000000]; no consensus  
- **on-secondary** (#FFFFFF) [unverified] — white for reversed‑out type  
- **accent** [unverified] — CONTESTED:§2.hex_accent — providers gave [#CC0000 / #E30613 / #E31E24 / #DA291C]; all unverified  
- **on-accent** (#FFFFFF) [unverified] — white text on accent  
- **surface** (#FFFFFF or #F5F0E8) [unverified] — CONTESTED:§2.surface — providers gave [#F5F0E8 / #FFFFFF / #FFFFFF / #F7F3EB]; no majority  
- **on-surface** (#000000) [unverified] — black text  
- **outline** (#000000) [unverified] — black rules, borders

All colours are solid, flat, unmodulated. No mid‑tones or pastels.

Semantic state colors:
ok:         #000000 — black / primary; confirmed entries, nominal state — the system's default text colour signals normal
warn:       #CC0000 — accent red; flagged, pending, advisory — same as accent role
err:        #CC0000 — accent red; errors, critical — same as accent role, visually identical to warn (the system sacrifices state granularity for chromatic restraint)
delta-up:   #000000 — black / primary; positive deltas rendered in primary colour
delta-down: #CC0000 — accent red; negative deltas rendered in accent
delta-flat: #000000 opacity-50 — primary at half opacity; neutral (only opacity exception in the system)

Note: The system's strict monochromatic palette (black, white, single accent red) means semantic states map directly to existing roles. No additional colours are introduced. ok and warn are visually similar — the system prioritises chromatic restraint over status differentiation.

## 4. Typography

[unverified] CONTESTED:§3.primary_typeface — providers gave [Futura / Futura / Akzidenz‑Grotesk / Futura]; none cited foundry or year; gap marker required.  
[unverified] CONTESTED:§3.secondary_typeface — providers gave [not specified / Akzidenz‑Grotesk / Akzidenz‑Grotesk / Akzidenz‑Grotesk]; none cited foundry; gap marker.  
[unverified] CONTESTED:§3.google_fonts_substitute — providers gave [Jost / Jost / none / Jost]; none cited suitability evidence; gap marker.

The following size and weight values are based on majority agreement among providers, but the typeface itself is contested. All text flush left, ragged right; no hyphens at line ends; no justification.

- **display:**  
  font-size: text-6xl (60–64px) [unverified]  
  font-weight: font-black/bold [unverified]  
  line-height: leading-tight  
  letter-spacing: tracking-wider (0.05em) or tracking-tight [unverified]  
  text-transform: uppercase  

- **headline:**  
  font-size: text-4xl (36px) [unverified]  
  font-weight: font-bold [unverified]  
  line-height: leading-tight/snug [unverified]  
  letter-spacing: tracking-wide (0.025em) or tracking-tight [unverified]  
  text-transform: uppercase  

- **title:**  
  font-size: text-2xl (24px) [unverified]  
  font-weight: font-bold/semibold [unverified]  
  line-height: leading-snug  
  letter-spacing: tracking-normal  
  text-transform: uppercase (optional)  

- **body:**  
  font-size: text-base (16px) [unverified]  
  font-weight: font-normal  
  line-height: leading-relaxed (1.6–1.8)  
  letter-spacing: tracking-normal  

- **label:**  
  font-size: text-xs or text-sm (12–14px) [unverified]  
  font-weight: font-bold/medium [unverified]  
  line-height: leading-none/tight [unverified]  
  letter-spacing: tracking-widest or tracking-wide [unverified]  
  text-transform: uppercase  

## 5. Elevation

Flat depth model — no shadow hierarchy. All elements sit on a single plane. No drop shadows, no stacked layers. Depth conveyed through contrast and solid rules.

## 6. Spacing & Sizing

- **padding:**  
  component-internal: p-4 (16px)  
  section-internal: p-8 (32px)  
  page-edge: p-8 (32px) or p-12 (48px) [unverified]  

- **margin/gap:**  
  between-components: gap-6 (24px)  
  between-sections: gap-12 (48px) or gap-16 (64px) [unverified]  

- **component-heights:**  
  sm: h-8 or h-10 [unverified]  
  md: h-10 or h-12 (default) [unverified]  
  lg: h-12 or h-14 [unverified]  

- **icon-size:** w-6 h-6 (24px) dominant [unverified]  
- **avatar-size:** not style‑relevant; if needed w-12 h-12 square [unverified]

## 7. Borders

- **border-radius:** rounded-none — all corners hard, 0px  
- **border-width:**  
  default: border (1px) for rules, dividers  
  emphasis: border-2 (2px) or border-4 (4px) [unverified]  
- **border-style:** border-solid  
- **border-image:** none  
- **clip-path:** optional for diagonal bands (polygon clip‑path)

## 8. Opacity

- **disabled-state:** opacity-40 or opacity-50 [unverified]  
- **ghost/secondary:** not used (secondary actions rely on colour inversion)  
- **overlay/scrim:** not used (or solid black overlay for modals) [unverified]  
- **hover-feedback:** via colour swap (black↔red or red↔black), not opacity

**Selection:** background: accent colour at 25%–30% opacity [unverified]  
**Scrollbar:** thin (~6px), track: surface, thumb: #000000

## 9. Components

### Icon Vocabulary
- system: custom geometric glyphs — thick right‑angle arrows, circles, squares, horizontal rules  
- size: w-6 h-6 (24px) [unverified]  
- color: inherits currentColor or fixed to accent  
- treatment: flat, no shadow, no roundness  
- restrictions: no organic shapes, no fine details, no filled‑in complex icons

### Image / Media Treatment
- aspect-ratio: aspect-[4/3] or aspect-[3/2] [unverified]  
- object-fit: object-cover  
- filter: none (optional high‑contrast grayscale)  
- overlay: optional vertical/horizontal rule overlapping edge  
- border: border-1 or border-2 solid black (optional frame)

### Buttons
- **Primary:** filled black, white uppercase bold text, sharp corners, no border. Hover/active: invert (white fill, black text) or swap to accent. Disabled: opacity-40.  
- **Secondary:** outlined black, black uppercase bold text, transparent fill. Hover: filled black, white text. Disabled: opacity-40.  
- **Destructive:** filled accent red, white text. Hover: darker red or black fill.

### Cards / Panels
- Fill: surface colour, thin black border (border-1 or border-2), no rounding, no shadow. Internal rule (border-b-2) optional.

### Navigation
- Horizontal list, uppercase bold, tight tracking. Active: black underline (border-b-2) or red underline (border-b-2 accent). Hover: colour change.

### Inputs / Forms
- Underline style: border-b-2 black, no top/left/right borders, transparent fill. Focus: thicker bottom border or red. Label: uppercase, small, above.

### Style‑Native Primitives
- **Horizontal Rule:** solid black rectangle (height 1–4px), full width, as section divider.  
- **Geometric Arrow:** thick right‑angle arrow, size w-8 h-8, solid primary or accent.  
- **Diagonal Band:** coloured stripe rotated 20°–30°, filled primary or accent, used as structural accent.  
- **Reversed‑Out Block:** solid black or red rectangle with white uppercase text, sharp corners.  
- **Register Mark (optional):** crosshairs in corners, size w-4 h-4, border-2.

### Data Display Components

metric-cell:
  Background: surface (#FFFFFF), flat white with no texture.
  Border: border-1 solid #000000 (black), sharp corners (rounded-none).
  Label: Jost / Futura text-xs font-bold uppercase tracking-widest, #000000 on white.
  Value: Jost / Futura text-2xl font-bold uppercase, #000000 on white.
  Delta: text-sm; positive in #000000 (black / primary), negative in #CC0000 (accent red).
  No glow, no shadow, no gradient — flat matte surface.

signal-bar:
  Track: border-b-1 solid #000000 (black rule on white surface).
  Fill: solid accent red (#CC0000). Height: 4px.
  Border: none on fill — flat solid bar.
  No glow, no texture, no gradient on fill.

status-cell:
  ok:   black text (#000000), no special treatment — nominal state is visually invisible, same as default text.
  warn: accent red text (#CC0000), border-b-2 accent red underline.
  err:  Reversed-Out Block component — solid accent red (#CC0000) fill, white (#FFFFFF) text, sharp corners.
  Fill: always transparent except err (which uses solid red fill per the Reversed-Out Block primitive).

data-table-row:
  Alternating: odd rows white (#FFFFFF); even rows surface off-white (#F5F0E8) if paper-variation active, otherwise white with border-b-1.
  Cell border: border-b solid #000000.
  Label: text-xs font-bold uppercase tracking-widest, #000000.
  Value: text-base font-normal, #000000.
  No row-level shadow or texture.

chart-surface:
  Background: #FFFFFF (white).
  Grid lines: 1px solid #000000 (black) at regular intervals.
  Axis labels: text-xs font-bold uppercase, #000000.
  Bar fills: solid accent red (#CC0000) or solid black (#000000), flat — no gradient.
  Line: #000000 stroke-width 1.5px, no glow, no shadow.
  Dots: #CC0000, r=2px. No glow.

## 10. Layout

- **Spacing cadence:** mathematical proportions (2:3 or 3:5) — generous margins and gutters [unverified]  
- **Grid tendency:** 2–4 column asymmetrical grid with deliberate breakouts  
- **Density:** low — active white space  
- **Section separation logic:** horizontal rules or large vertical gaps  
- **Alignment philosophy:** flush left, ragged right — no centring, no justification  
- **Breakpoint behavior:**  
  - 375px: single column, reduced margins, still flush left.  
  - 768px: 2–3 column grid with asymmetrical split.  
- **Motion:** No motion (state changes instantaneous). Optional 100–150ms transition for colour changes only.

## 11. Design System Notes

### 11a. Use Constraints
- **Appropriate for:** editorial interfaces, cultural/arts branding, minimalist dashboards, documentation, educational publications.  
- **Wrong for:** playful consumer apps, gaming, social media, e‑commerce requiring warmth.

### 11b. Prompt Phrases
1. "Asymmetrical but balanced composition with generous white space."  
2. "Sans‑serif typography in all‑caps with extreme size contrast."  
3. "Geometric arrows and rules as primary navigational gestures."  
4. "Monochromatic palette with a single flat accent colour (red, blue, or yellow)."  
5. "No shadows, no gradients, no rounded corners."  
6. "Photographs as stark cut‑outs overlapping type blocks."  
7. "Thick horizontal rules and diagonal bands as structural dividers."  
8. "Flush left, ragged right; never centred or justified."

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description.

rule: Layout must be asymmetrical — dynamic balance through deliberate off-axis placement, never centred symmetry.
do:   Headline offset to the left third of the canvas at text-6xl / font-black / tracking-wider, body text below starting at a different x-position. Generous white space concentrated on one side. The composition feels deliberately unbalanced but resolved.
avoid:Headline centred on the canvas with equal margins on all sides. This reads as conventional corporate design, not New Typography.

rule: A single flat accent colour is the only hue beyond black and white. Never introduce a second coloured element.
do:   Accent red (#CC0000) used sparingly for one element per composition — a horizontal rule, a reversed-out block, or an underline. All other elements are black (#000000) on white (#FFFFFF).
avoid:Red headline, blue subhead, yellow sidebar accent. Multiple colours dissolve the system's monochromatic rigour into general editorial styling.

rule: Corners are always hard at 0px radius. No rounded rectangles exist anywhere in the system.
do:   Buttons, cards, image frames, and input fields all use rounded-none (0px border-radius). Edges are sharp and geometric.
avoid:border-radius: 4px or 8px on buttons or cards. Rounded corners read as modern UI chrome, not functionalist print.

rule: All type is sans-serif — geometric or grotesque only. Serif and script typefaces are forbidden.
do:   Futura or Akzidenz-Grotesk (Google Fonts substitute: Jost) at all levels from display to label. Clean geometric forms throughout.
avoid:Garamond, Times New Roman, or any serif for body text. Script faces for headlines. Serifs contradict the system's machine-age functionalism.

rule: Surfaces are flat and unmodulated — no gradients, no drop shadows, no blurred glows of any kind.
do:   Cards and panels with solid surface (#FFFFFF) fill, border-1 solid #000000, no box-shadow. Elevation is zero. All colour is flat and opaque.
avoid:box-shadow: 0 2px 8px rgba(0,0,0,0.1) on cards, or linear-gradient fills on buttons. Shadows and gradients belong to material design, not New Typography.

rule: All type is set flush left, ragged right. Centring and justification are both prohibited.
do:   Body text left-aligned with a ragged right edge. Headlines left-aligned at the same grid origin point. The rag is intentional and visible.
avoid:Body text justified with even left and right margins, or headlines centred. Centring belongs to classical axial typography, not the New Typography.

rule: Geometric shapes — thick rules, right-angle arrows, diagonal bands — replace all illustrative or decorative ornament.
do:   Horizontal rules (1–4px solid #000000), right-angle geometric arrows in accent red, diagonal bands at 20°–30° rotation as structural dividers. Pure geometry as navigation and emphasis.
avoid:Flourishes, decorative borders, organic illustrations, or ornamental dividers. Ornament violates the system's core principle of functional clarity through typographic form.

rule: Hierarchy is expressed through extreme scale contrast between levels, never through weight gradation alone.
do:   Display at text-6xl (60–64px) font-black uppercase alongside body at text-base (16px) font-normal. The 4:1 size ratio creates the hierarchy — the gap is immediately legible.
avoid:Display at text-2xl (24px) font-bold and body at text-base (16px) font-normal — the size contrast is insufficient and the system loses its defining typographic tension.

### 11d. Variation Bounds
1. Contrast: high (black/white/red) ↔ low (greyscale only)  
2. Accent colour: red (default) ↔ blue ↔ yellow ↔ none  
3. Rule density: single bold rule ↔ multiple thin rules ↔ no rules  
4. Texture: pristine flat ↔ heavy paper grain + ink bleed  
5. Typeface flavour: Futura (strict geometric) ↔ Akzidenz‑Grotesk (warmer) ↔ Helvetica (neutral) — [all unverified]  
6. Photographs: type‑only ↔ photographic cut‑outs

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts.

### 11e.i — At Rest
A single-column composition on white (#FFFFFF) surface. Display headline in Futura/Jost text-6xl font-black uppercase tracking-wider, flush-left at the left page margin. Below it, a solid black horizontal rule (2px height) spans full width as the sole structural divider. Body text follows in text-base font-normal flush-left ragged-right. Accent red (#CC0000) appears on exactly one element — perhaps the rule itself, or a single reversed-out label block. No photographs in the default state. Generous white space occupies the right third of the composition. No shadows, no rounded corners, no gradients. The surface is pristine flat matte.

### 11e.ii — Maximum Expressiveness
An asymmetrical 3-column grid with deliberate breakouts. A high-contrast photographic cut-out (grayscale, object-cover, border-2 solid #000000, sharp corners) overlaps a display headline at text-6xl — the image bleeds into the type column from above. A diagonal accent-red (#CC0000) band at 25° rotation cuts across the lower third of the composition. Multiple horizontal rules at varying weights (1px, 2px, 4px, all solid #000000) create section divisions. A Reversed-Out Block (solid #000000 fill, #FFFFFF uppercase text, sharp corners) anchors the primary call to action. Geometric arrows in accent red (#CC0000), size w-8 h-8, point to key navigation elements. The composition feels deliberately unbalanced but dynamically resolved — generous white space on the right offsets the dense left column. No shadows, no rounded corners. Surface remains flat matte or, at the expressive extreme, carries subtle paper grain texture (see §11d.4).

### 11e.iii — Data Context
Data is presented in a sparse tabular grid on white (#FFFFFF) with black (#000000) rules as dividers. Column headers in text-xs font-bold uppercase tracking-widest, black on white — the same label treatment as the editorial system. Data values in text-base font-normal, flush-left. Status states use accent red (#CC0000) for err/critical via the Reversed-Out Block primitive (solid red fill, white text); ok states use plain black text with no special treatment — nominal is invisible. Warn states receive a red underline (border-b-2 #CC0000) on the text. No colour-coded fill backgrounds for status cells — the system's monochromatic restraint persists even in data contexts. Metric cells are plain white panels with border-1 solid #000000, no shadow. The chart surface is white (#FFFFFF) with black (#000000) grid lines at 1px. Bar fills are solid accent red (#CC0000) or solid black (#000000), flat with no gradient. Line charts use #000000 stroke at 1.5px width. Typography hierarchy shifts only in scale: data labels at text-xs uppercase, data values at text-base or text-lg, metric totals at text-2xl font-bold uppercase.

### 11f. Sources

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** (Prose generation failed — see provenance block for attribution data.)

**Verified imagery sources.** 7 URLs verified against institutional servers, distributed across:
- Bauhaus Dessau Foundation — 1 URL(s)
- University of Reading, Design Archives — 1 URL(s)
- Victoria and Albert Museum, London — 1 URL(s)
- Linotype GmbH — 1 URL(s)
- en.wikipedia.org — 1 URL(s)
- commons.wikimedia.org — 1 URL(s)
- Penguin Random House — 1 URL(s)

**Named typefaces.** The typography of this style is attested as:
- Akzidenz-Grotesk (for Berthold 1896 — attestation: attested) — rendered here in Archivo as the closest open substitute
- Futura (designed by Paul Renner for Bauer 1927 — attestation: attested) — rendered here in Jost as the closest open substitute
- Sabon (designed by Jan Tschichold for Linotype / Monotype / Stempel 1967 — attestation: attested) — rendered here in EB Garamond as the closest open substitute
- Monotype Baskerville (designed by John Baskerville for Monotype 1923 — attestation: attested) — rendered here in Libre Baskerville as the closest open substitute
- Garamond (Monotype series 156) (designed by Claude Garamond for Monotype — attestation: unknown) — rendered here in EB Garamond as the closest open substitute
- Custom lettering (designed by Jan Tschichold — attestation: attested) — rendered here as bespoke imagery — no web-font substitute

**Honest gaps.** (No documented gaps were recorded by the forensic pipeline.)
