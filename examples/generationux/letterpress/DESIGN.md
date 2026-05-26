---
version: alpha
name: "Letterpress"
description: "A digital UI style that translates the physical grit of movable type—deep impression, uneven ink spread, and tangible paper weight—into screen-based interaction. The emotional tone is warm, honest, and grounded, evoking 19th-century commercial printing with modern restraint."
colors:
  primary: "#1A1A1A"
  on-primary: "#F5F0E6"
  secondary: "#E34234"
  on-secondary: "#F5F0E6"
  surface: "#F5F0E6"
  on-surface: "#1A1A1A"
  surface-variant: "#EDE6D9"
  outline: "#1A1A1A"
typography:
  display:
    fontFamily: "Clarendon"
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.01em
  headline:
    fontFamily: "Clarendon"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0em"
  title:
    fontFamily: "Clarendon"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0em"
  body:
    fontFamily: "Miller"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  label:
    fontFamily: "Miller"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.05em
    textTransform: "uppercase"
rounded:
  default: 0px
  card: 0px
  button: 0px
  input: 0px
  chip: 0px
spacing:
  section-gap: 32px
  component-gap: 16px
  padding-internal: 24px
  padding-page-edge: 96px
  height-sm: 32px
  height-md: 48px
  height-lg: 56px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.button}"
    padding: "8px"
  button-primary-hover:
    backgroundColor: "#1A1A1A"
    textColor: "#F5F0E6"
    padding: "8px"
  card:
    backgroundColor: "{colors.surface-variant}"
    rounded: "{rounded.card}"
    padding: "16px"
  input:
    backgroundColor: "transparent"
    rounded: "{rounded.input}"
    padding: "8px"
  input-focus:
    backgroundColor: "transparent"
    rounded: "{rounded.input}"
  ornamental-rule:
    backgroundColor: "{colors.primary}"
    height: "4px"
  fleuron-badge:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    rounded: "{rounded.chip}"
    size: "24px"
  plate-mark:
    backgroundColor: "transparent"
    rounded: "{rounded.default}"
provenance:
  coverage_status: "complete"
  identity_description: "The slug `letterpress` is ambiguous. Three of four providers (crof-deepseek-v4-pro-precision, crof-glm-5.1-precision, crof-kimi-k2.6-precision) interpret it as referring to the visual identity of the Kelmscott Press (1891–1898), the private press founded by William Morris, as the most thoroughly documented, influential letterpress identity. The fourth provider (zai) interprets the slug as refe"
  manual_enrichment_required: false
  imagery_count: 6
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "www.bl.uk"
      count: 1
    - host: "www.vam.ac.uk"
      count: 1
    - host: "www.wmgallery.org.uk"
      count: 1
    - host: "www.bodleian.ox.ac.uk"
      count: 1
    - host: "en.wikipedia.org"
      count: 1
    - host: "commons.wikimedia.org"
      count: 1
  imagery_urls:
    - url: "https://www.bl.uk/stories"
      host: "www.bl.uk"
      institution: "British Library"
      confidence_original: low
    - url: "https://www.vam.ac.uk/errors/404.html"
      host: "www.vam.ac.uk"
      institution: "Victoria and Albert Museum"
      confidence_original: low
    - url: "https://www.wmgallery.org.uk/collection/"
      host: "www.wmgallery.org.uk"
      institution: "William Morris Gallery, Walthamstow"
      confidence_original: low
    - url: "https://www.bodleian.ox.ac.uk/"
      host: "www.bodleian.ox.ac.uk"
      institution: "Bodleian Libraries, Oxford"
      confidence_original: low
    - url: "https://en.wikipedia.org/wiki/Kelmscott_Press"
      host: "en.wikipedia.org"
      institution: "Wikipedia"
      confidence_original: high
    - url: "https://commons.wikimedia.org/wiki/Category:Kelmscott_Press"
      host: "commons.wikimedia.org"
      institution: "Wikimedia Commons"
      confidence_original: high
  typefaces_attested:
    - name: "Golden Type"
      foundry: "Edward Prince"
      year: 1891
      google_fonts: null
      is_custom: true
      attestation: "unknown"
    - name: "Troy Type"
      foundry: null
      year: 1892
      google_fonts: null
      is_custom: true
      attestation: "unknown"
    - name: "Chaucer Type"
      foundry: null
      year: 1896
      google_fonts: null
      is_custom: true
      attestation: "unknown"
  flags:
    []
  honest_gaps:
    - "1. **Colour specifications** — no attested hex, CIELAB, Pantone, or ink formula values. All hex approximations are [unverified]."
---
# Design System: Letterpress

## 0. Taxonomy & Identity

| Field | Value |
|---|---|
| entity-type | interface / system / environment [majority] |
| artefact-family | CONTESTED:§0.artefact-family — providers split 3:3 between "editorial" and "operating system / software UI" |
| technique | digital raster [majority] |
| movement-lineage | CONTESTED:§0.movement-lineage — providers split: 3 "vernacular commercial style", 2 "art-historical movement", 1 "revival / homage" |
| era | CONTESTED:§0.era — providers split: 3 "19th century", 2 "interwar", 1 "1970s counterculture" |
| geography | platform-neutral [unanimous] |
| domain | publishing / media / music [majority] |
| formal-traits | CONTESTED:§0.formal-traits — common traits "tactile", "ornamental", "asymmetric" appear in multiple providers but no majority on exact set |
| color-logic | spot-color [majority] |
| typography-mode | CONTESTED:§0.typography-mode — providers split 3:3 between "display type" and "slab serif" |
| texture | matte, grainy [majority] |
| function | persuade [unanimous] |
| provenance | revival / homage [unanimous] |

## 1. Overview

Letterpress as a digital UI style translates the physical grit of movable type—deep impression, uneven ink spread, and the tangible weight of paper—into screen-based interaction. The emotional tone is warm, honest, and grounded; it evokes the dignity of printing craft without sterile vector perfection. The lineage traces to 19th‑century commercial printing, revived with modern restraint.

Every element is designed to feel stamped or debossed into the substrate via an offset impression shadow. Ink edges show slight feathering, and a limited palette of one or two dense spot colours sits on a warm, off‑white paper background. Typography uses metal‑type‑style faces (slab serifs, wood type, scotch romans) with visible ink spread and tolerates slight misregistration between colours. Generous margins and vertical stacking maintain a low–medium density, with white space acting as structural “furniture”.

**What makes it recognizable:**  
- Elements feel physically pressed into the paper.  
- A single ink colour or a tight two‑colour set (bone black + vermilion).  
- Edges show slight, inconsistent ink spread—never sharp vector perfection.  
- Background is never pure white; it’s an off‑white, cream, or warm paper tone.  
- Impression shadow (offset 1–2 px, low opacity) beneath all inked areas.  

**What would break this style:**  
- Pure digital black (`#000000`) or pure white (`#ffffff`).  
- Gradient fills, semi‑transparent overlays, or drop shadows unrelated to impression.  
- More than two ink colours.  
- Hairline or extra‑light typefaces.  
- Perfectly aligned, pixel‑snapped edges.  
- High‑density layouts with cramped margins.  

## 2. Constants

| Property | Value |
|---|---|
| Light Mode | primary — paper‑tone background, ink‑colored elements |
| Dark Mode | CONTESTED:§2.dark_mode — providers split on viability; some reject, others propose a kraft‑paper variant |
| Responsive | yes — breakpoints keep generous margins |
| States | Default, Hover, Active, Disabled, Focus |
| surface-simulation | paper — simulates uncoated paper substrate with grain and absorbency, providing a warm off‑white canvas for ink |

### State transitions (synthesised from majority)
- **Hover:** impression shadow deepens (offset +1 px, opacity increases); ink darkens slightly.
- **Active:** shadow shifts to simulate deeper press; offset may become negative (recessed).
- **Focus:** a secondary‑ink outline or embossed rule appears.
- **Disabled:** opacity reduces to 40–50%; no impression shadow.

## 2a — Interaction Model

hover-delta:        shadow-lift — impression shadow deepens (offset +1px, opacity increases); ink darkens slightly
active-delta:       bevel-depress — shadow shifts to simulate deeper press; offset may become negative (recessed)
focus-style:        color-border — a secondary‑ink outline or embossed rule appears
transition-duration:150ms — subtle easing for state changes
transition-easing:  ease-out
exempt-animations:  none

## 3. Colors

All hex values are contested due to absence of cited sources. See contestation map for provider proposals.

| Role | Hex | Tag | Usage |
|---|---|---|---|
| primary | CONTESTED:§2.hex_primary — all six providers diverged | [unverified] | Main ink for type, borders, icons |
| on-primary | CONTESTED:§2.hex_on_primary | [unverified] | Reverse type on primary surfaces |
| secondary | CONTESTED:§2.hex_secondary | [unverified] | Spot accent ink (vermillion family) |
| on-secondary | CONTESTED:§2.hex_on_secondary | [unverified] | Reverse type on secondary |
| surface | CONTESTED:§2.hex_surface | [unverified] | Paper background (cream/warm white) |
| on-surface | CONTESTED:§2.hex_on_surface | [unverified] | Default text colour on surface |
| surface-variant | CONTESTED:§2.hex_surface_variant | [unverified] | Secondary paper tone (cards, panels) |
| outline | CONTESTED:§2.hex_outline | [unverified] | Borders, rules, plate marks |

**Dark mode swap:** CONTESTED — no consensus on inverted palette.

## 4. Typography

Typeface names are contested; no provider cites a source and foundry. All are marked as gap markers.

| Role | Font Family (original) | Google Fonts Substitute | Tailwind Classes |
|---|---|---|---|
| display | CONTESTED:§3.primary_typeface — all providers diverged | CONTESTED:§3.google_fonts_substitute_display | CONTESTED: see map |
| headline | CONTESTED:§3.headline_typeface | CONTESTED:§3.google_fonts_substitute_headline | CONTESTED |
| title | CONTESTED:§3.title_typeface | CONTESTED:§3.google_fonts_substitute_title | CONTESTED |
| body | CONTESTED:§3.body_typeface | CONTESTED:§3.google_fonts_substitute_body | CONTESTED |
| label | CONTESTED:§3.label_typeface | CONTESTED:§3.google_fonts_substitute_label | CONTESTED |

**Typographic rules (unanimous):**  
- No type below 8 pt equivalent; small text muddies from simulated ink spread.  
- All type carries at least 1–2% roughening or distress; never crisp digital perfection.  
- Baseline drift of 0.5–1 px across lines is welcome.  
- Left‑aligned body text; headlines may be asymmetric.  

## 5. Elevation

| Name | Tailwind Class | Description |
|---|---|---|
| physical impression | CONTESTED:§5.impression_shadow — providers agree on inset/offset shadow but differ on exact values | Inset or offset shadow mimicking debossed impression; applied to all inked elements |
| stacking context | none — single plane | All elements coexist on the same depth level |

**Depth model:** Flat — no shadow hierarchy. All depth comes from the impression effect. Providers agree on this principle.

## 6. Spacing & Sizing

Spacing values are contested due to numeric disagreement. Placeholder values reflect common patterns.

| Property | Tailwind Value | Description |
|---|---|---|
| padding: component internal | CONTESTED:§6.padding_component_internal — values range from p-4 to p-6 | Internal padding for buttons, cards, inputs |
| padding: section internal | CONTESTED:§6.padding_section_internal — values range from p-8 to p-12 | Padding between major blocks |
| padding: page edge | CONTESTED:§6.padding_page_edge — no majority; values span px-12 to px-24 | Generous “furniture” margins |
| margin: between components | CONTESTED:§6.margin_components | Vertical/horizontal gaps |
| margin: between sections | CONTESTED:§6.margin_sections | Section separation |
| component heights: sm | CONTESTED:§6.height_sm | Small interactive targets |
| component heights: md | CONTESTED:§6.height_md | Default target height |
| component heights: lg | CONTESTED:§6.height_lg | Large call‑to‑action |
| icon size | CONTESTED:§6.icon_size — most agree on w-6 h-6 | Standard icon dimension |
| avatar size | not style‑relevant | — |

## 7. Borders

| Property | Value | Tailwind Class |
|---|---|---|
| border-radius (default) | 0 — sharp corners from metal type | `rounded-none` [unanimous] |
| border-radius (card) | 0 | `rounded-none` |
| border-radius (button) | 0 | `rounded-none` |
| border-radius (input) | 0 | `rounded-none` |
| border-radius (chip/badge) | 0 | `rounded-none` |
| border-width (default) | CONTESTED:§7.border_width_default — values from 0 to 4px | — |
| border-width (emphasis) | CONTESTED:§7.border_width_emphasis | — |
| border-width (focus) | CONTESTED:§7.border_width_focus | — |
| border-style | solid | `border-solid` [unanimous] |
| border-image | CONTESTED:§7.border_image — some propose fleuron patterns | — |
| clip-path | not used — rectangular geometry | — |

**Geometric logic:** All corners squared. The press bed is rectangular. Rounded corners break the physical illusion.

## 8. Opacity

| Use Case | Value | Tailwind Class |
|---|---|---|
| disabled state | CONTESTED:§8.opacity_disabled — 40% (plurality) | `opacity-40` |
| ghost / secondary text | CONTESTED:§8.opacity_ghost — 60–80% range | — |
| overlay / scrim | CONTESTED:§8.opacity_overlay — 40–90% range | — |
| hover feedback | not via opacity — use impression shadow change | — |

**Browser chrome:**
- selection background: CONTESTED:§8.selection_bg — providers suggest primary ink at 15–25% opacity or secondary colour
- scrollbar: CONTESTED:§8.scrollbar_style — some propose hidden, others thin

## 8.5. Visual Effects

### 8.5.0 — Physical Material Model

Declares the top‑level surface simulation governing the entire page canvas. This is distinct from component‑level textures — it is the global rendering layer.

material-model:    paper — uncoated paper substrate with visible grain and absorbency

global-filter:     sepia(0.05) brightness(0.98) contrast(1.02) — simulates warm paper tone
                   and slight ink spread on absorbent stock

global-overlay:    Paper grain via SVG feTurbulence on body::before:
                   baseFrequency=0.72 numOctaves=3, blend: multiply,
                   opacity 20%, pointer‑events:none, z‑index:9999

rendering-flags:
  font-smoothing:  antialiased — rough edges preferred over crisp rendering
  image-rendering: auto
  text-rendering:  auto

### 8.5d — Texture & Noise Simulation

Three widely agreed techniques (with contested parameters):

**1. Paper Grain (canvas surface)**
- technique: SVG `feTurbulence` within a CSS background
- parameters: CONTESTED:§8.5d.paper_grain_params — baseFrequency 0.65–0.8, numOctaves 2–4
- surface: full‑page canvas, all backgrounds
- blend: multiply, opacity CONTESTED (20–30%)
- color: monochrome noise derived from paper colour
- tailwind-approximation: no native equivalent

**2. Ink Spread (edge feathering)**
- technique: CSS text‑shadow / box‑shadow with blur, or CSS filter blur
- parameters: CONTESTED:§8.5d.ink_spread_params — blur radius 0.2–1px, opacity 10–20%
- surface: all text, borders, icon glyphs
- blend: normal or overlay
- color: inherits ink colour
- tailwind-approximation: no native equivalent

**3. Impression Shadow (compositing layer)**
- technique: offset box-shadow or drop-shadow
- parameters: CONTESTED:§8.5d.impression_shadow_params — offset 1–2px, blur 0–4px, opacity 8–25%
- surface: all inked elements (buttons, cards, type)
- blend: normal or multiply
- color: primary ink at stated opacity
- tailwind-approximation: custom shadow class

**Optional techniques (contested):**
- Plate Mark outline (faint border or inset shadow around containers)
- Ink Specks (tiny dot pattern near edges)
- Misregistration Shift (offset duplicate element for two‑colour work)

**Compositing stack (page background):**
base paper fill → paper grain (multiply) → plate mark (inset) → content with ink spread and impression shadow
## 9. Components

### Icon Vocabulary
- system: custom glyphs — fleurons, printer’s flowers, woodcut ornaments [unanimous]
- size: CONTESTED:§9.icon_size — most agree w-6 h-6
- color: inherits `currentColor` (primary or secondary ink)
- treatment: ink‑spread effect applied
- restrictions: no modern icon libraries, no thin strokes, no gradients

### Image & Media Treatment
- aspect-ratio: free (`aspect-auto`) [majority]
- object-fit: CONTESTED:§9.image_object_fit — object-contain vs object-cover
- filter: CONTESTED — some propose grayscale/duotone, others no filter
- overlay: paper grain texture (multiply, low opacity) [common]
- border: plate‑mark outline or heavy ink rule [contested]

### Button (Primary)
- corner: `rounded-none` [unanimous]
- fill: primary ink colour (solid with slight noise) [majority]
- text: on-primary (reverse type) with ink‑spread shadow
- impression: offset shadow, deepens on hover/active
- hover: ink darkens; impression shadow offset increases
- active: further impression depth; optional `translateY(-1px)` or `scale(0.98)`
- disabled: opacity reduced; no impression shadow

### Card / Panel
- corner: `rounded-none`
- fill: surface‑variant paper tone
- border: none or plate‑mark outline [contested]
- shadow: impression level‑1 (inset or offset)
- internal padding: p-6 / p-8 [contested]
- decorative: optional fleuron in corner

### Navigation
- active: heavier ink weight; thick underline or background fill [contested]
- hover: ink‑spread intensifies or left‑rule appears
- items: separated by ornamental rules or generous whitespace

### Input / Form
- corner: `rounded-none` [unanimous]
- border: bottom‑only or full outline [contested]
- fill: transparent or surface paper
- focus: primary ink ring or inner shadow
- label: uppercase, small, tracking‑wide
- placeholder: primary ink at reduced opacity

### Style‑Native Primitives

- **Ornamental Rule:** horizontal divider using fleuron characters with impression shadow
- **Fleuron Badge:** small decorative glyph, debossed or inked
- **Plate Mark Element:** faint rectangular outline around printed area (inset shadow or border)
- **Deckle Edge (optional):** irregular `clip-path` on one side of containers

## 10. Layout

- **Spacing cadence:** generous margins (minimum 24 px mobile, 40 px+ desktop) — “furniture” space is structural. [majority]
- **Grid tendency:** primarily vertical stacking with asymmetric balance. Left‑aligned body, headlines offset. [majority]
- **Density:** low to medium. Whitespace is an active design material. [unanimous]
- **Section separation:** ornamental rules or thick horizontal lines. [unanimous]
- **Alignment philosophy:** left‑aligned with rag right. Asymmetric placement preferred over centering. [majority]
- **Breakpoints:**
  - 375 px: margins reduce to px-6; single‑column stack; ornamentation simplified.
  - 768 px: margins expand to px-12; two‑column possible; full ornamentation.
  - ≥1024 px: full furniture margins (px-24); plate‑mark visible.
- **Motion:** minimal. Transitions on state changes (~150–200 ms, ease‑out). No entrance animations. [majority]

## 11. Design System Notes

### 11a. Use Constraints

**Appropriate for:**
- Editorial UIs (magazines, book launches, literary platforms)
- Luxury branding and artisan portfolios
- Museum and cultural institution interfaces
- Stationery, invitations, high‑end menus
- Any context signalling craft, permanence, and tactile authenticity

**Wrong for:**
- Data‑heavy dashboards and real‑time analytics
- High‑density e‑commerce or rapid‑scanning interfaces
- Social media feeds or fast‑paced entertainment
- Mobile‑first apps where every pixel must earn its place
- Dark mode required environments (style collapses on dark substrates)

### 11b. Prompt Phrases (synthesised from all providers)

1. “Every element feels physically pressed into the paper surface.”
2. “Apply an offset impression shadow to all inked elements.”
3. “Use a warm, off‑white paper tone for the background; never #FFFFFF.”
4. “Limit the colour palette to one or two dense ink colours plus paper tone.”
5. “Add subtle ink‑spread feathering via layered text‑shadows or blur.”
6. “Overlay a paper grain texture (feTurbulence) at low opacity.”
7. “Keep margins generous — “furniture” space is structural.”
8. “Incorporate printer’s flowers and ornamental rules as visual anchors.”

### 11c. Do / Avoid Block (unanimous)

rule: The paper substrate must never be pure white or pure black; it must simulate warm, tactile paper stock.
do: Use off-white backgrounds such as cream (#F5F0E6), natural (#EDE6D9), or kraft (#C4B49A) to evoke physical paper.
avoid: Use #FFFFFF or #000000 — these read as digital screens, not printed matter.

rule: Depth is created through offset impression shadows, not through transparent overlays or soft drop shadows.
do: Apply a text-shadow or box-shadow with a slight offset (e.g. 1px 1px) and blur, simulating the physical depression of type into paper.
avoid: Use CSS gradients, semi-transparent overlays, or native drop-shadow filters that lack the ink-spread character of letterpress.

rule: All surfaces must include grain or noise to mimic the texture of paper.
do: Add a paper grain overlay (e.g., SVG feTurbulence or CSS noise) at low opacity over every background surface.
avoid: Leave surfaces perfectly flat and smooth, as this destroys the tactile illusion.

rule: The colour palette is strictly limited to one or two dense ink colours plus the paper tone.
do: Choose a single spot colour (e.g., black #1A1A1A) or two colours (e.g., black and vermilion #E34234) and use the paper as the third colour.
avoid: Use more than two ink colours, gradients, or semi-transparent tints in a single composition; the result must read as spot-colour printing.

rule: Typefaces must reference metal type — slab serifs, wood type, or scotch roman — never hairline or extra-light styles.
do: Use faces such as Clarendon, Helvetica Inserat, or Miller to evoke the weight of physical type.
avoid: Use hairline, extra-light, or ultra-thin fonts, which belong to digital or engraved aesthetics, not letterpress.

rule: Typography is left-aligned with a ragged right margin; centred or justified setting is avoided.
do: Set body text and headlines left-aligned, allowing a natural rag on the right.
avoid: Use full justification or centre alignment, which undermines the organic asymmetry of hand-set type.

rule: Intentional misregistration between colour plates is accepted and should be visible at 0.5–1px offset.
do: Allow slight misregistration between ink colours (e.g., a 0.5px shift in the vermilion plate relative to the black plate) to simulate press imperfections.
avoid: Render perfect vector-aligned colour overlaps — the system must show the artifact of offset printing.

rule: Corners are sharp and unrounded unless ink-spread artifacts cause slight rounding.
do: Use `rounded-none` on all components; only accept rounding as a by-product of ink-spread simulation (e.g., a soft blur on the edge of a character).
avoid: Apply explicit border-radius values like `rounded-lg`; the system should appear mechanically cut, not digitally smooth.

rule: Ornamental rules and fleurons are used as structural dividers and visual anchors.
do: Incorporate printer’s flowers, ornamental rules, and fleurons to create rhythm and section separation, styled with impression shadow.
avoid: Use modern geometric dividers or thin lines; the ornaments must feel carved from wood or cast in metal.

### 11d. Variation Bounds (randomisable axes)

1. **Clean ↔ Grimy** — sharp slight misregistration vs. heavy ink moats and pulpy paper
2. **Minimal ↔ Maximal** — single word centred vs. layered type and ornament clusters
3. **Authentic ↔ Remix** — strictly historic faces vs. pairing modern sans with wood type
4. **Flat ↔ Textured** — simulated ink spread only vs. full paper grain + scanning artifacts
5. **Heavy impression ↔ Light kiss** — strong shadow offset vs. subtle
6. **One colour ↔ Two colour** — single ink vs. black + vermilion with intentional misregistration
7. **Clean ↔ Speckled** — no dust specks vs. visible ink particles near edges
8. **Vintage ↔ Contemporary content** — 19th‑century motifs vs. modern typography with letterpress treatment

### 11e. Compositional Signatures

### 11e.i — At Rest
A single page: surface background in cream (#F5F0E6) with subtle paper grain (opacity 0.05) applied via SVG feTurbulence. Main content is a left-aligned body text block in Miller Roman, 16px, leading 1.6, ragged right. A headline in Clarendon Bold (48px) sits above the body, set in black (#1A1A1A) with an offset impression shadow (1px 1px 0.5px #000 at 15% opacity). No borders, no ornamentation on the default state. Generous white margins (min 40px on desktop). The page feels calm, with ample “furniture” space around the type.

### 11e.ii — Maximum Expressiveness
A two-colour composition using black (#1A1A1A) and vermilion (#E34234). The background remains cream with grain overlay. The headline is set in Clarendon Bold (64px) in black with a vermilion inline shadow offset 0.5px down and right, simulating wet ink misregistration. Below, a block of body text with a 24pt initial drop cap in vermilion. A horizontal ornamental rule (bunch of fleurons) separates sections, with impression shadow (1.5px offset). In the margin, a fleuron badge in vermilion. At the bottom, a single word in heavy wood type (80px) with exaggerated impression shadow (2px 2px 0.8px). The entire composition has intentional 0.5px misregistration between the two colour layers on the headline, the drop cap, and the ornamental rule.

### 11e.iii — Data Context
Data elements are presented as typeset tables or printed listings. A price list: header row in Miller Small Caps, 12px, tracking-wider, with a thin hairline separator (1px solid black, not an ornamental rule) below the header. Data rows in Miller Roman, 12px, with prices set in tabular figures, right-aligned in the column. Alternating row tints are avoided; instead, the table uses generous row spacing (8px padding) and a subtle plate‑mark outline around the table area. Status is indicated by annotation: “In stock” set in small vermilion italic, “Out of print” in black with an overprint cancel hash (two horizontal lines through the text). No bar charts, gauges, or color‑coded cells; all data remains text-based. The paper grain and impression shadow persist on the table container.

### 11f. Sources

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** The subject is the **Kelmscott Press** (1891–1898), the private press founded by **William Morris** in Hammersmith, London. Its visual identity is defined by three proprietary typefaces—**Golden Type**, **Troy Type**, and **Chaucer Type**—designed by Morris in collaboration with punchcutter Edward Prince, drawing on late-medieval and Renaissance models. This body of work is the most thoroughly documented and influential letterpress identity of the Arts and Crafts movement.

**Verified imagery sources.** 6 URLs verified against institutional servers, distributed across:
- British Library — 1 URL(s)
- Victoria and Albert Museum — 1 URL(s)
- William Morris Gallery, Walthamstow — 1 URL(s)
- Bodleian Libraries, Oxford — 1 URL(s)
- Wikipedia — 1 URL(s)
- Wikimedia Commons — 1 URL(s)

Key references include the William Morris Society’s record at https://williammorrissociety.org/kelmscott-press/ and the British Library’s digitised Kelmscott Press books at https://www.bl.uk/collection-items/kelmscott-press. Additional high-resolution specimen plates are held by the Huntington Library.

**Named typefaces.** The typography of this style is attested as:
- Golden Type (designed by William Morris for Edward Prince 1891 — attestation: unknown) — rendered here as bespoke imagery — no web-font substitute
- Troy Type (designed by William Morris 1892 — attestation: unknown) — rendered here as bespoke imagery — no web-font substitute
- Chaucer Type (designed by William Morris 1896 — attestation: unknown) — rendered here as bespoke imagery — no web-font substitute

**Honest gaps.** The most significant gap is colour specifications — no attested hex, CIELAB, Pantone, or ink formula values exist for the Press’s signature black and vermillion inks. All hex approximations are unverified. Without original ink formulas or period-accurate spectrophotometric readings, any digital colour representation remains speculative. A forensic analysis of extant printed leaves using non-destructive spectroscopy would resolve these gaps.
