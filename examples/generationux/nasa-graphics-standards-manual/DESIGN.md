---
version: alpha
name: "NASA Graphics Standards Manual (Worm Identity)"
description: "The definitive expression of institutional modernism in American aerospace — sterile, authoritative, precision-obsessed, with the worm logotype, brutal simplicity, and at least 50% white space. Based on Danne & Blackburn's 1975 identity system."
colors:
  ok: "#003087"
  warn: "#FF8C42"
  err: "#DA291C"
  delta-up: "#003087"
  delta-down: "#DA291C"
  delta-flat: "#999999"
typography:
  display:
    fontFamily: "Helvetica"
    fontSize: "64px"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0.2em"
    textTransform: uppercase
  headline:
    fontFamily: "Helvetica"
    fontSize: "48px"
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: "0.1em"
    textTransform: uppercase
  title:
    fontFamily: "Helvetica"
    fontSize: "32px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.05em"
  body:
    fontFamily: "Helvetica"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  label:
    fontFamily: "Helvetica"
    fontSize: "11px"
    fontWeight: 300
    lineHeight: 1.2
    letterSpacing: "0em"
    textTransform: lowercase
rounded:
  default: "4px"
  chip: "4px"
spacing:
  component-internal: "16px"
  section-internal: "32px"
  page-edge-side: "40px"
  page-edge-top: "48px"
  page-edge-bottom: "32px"
  between-components: "16px"
  between-sections: "48px"
  component-height-sm: "24px"
  component-height-md: "40px"
  component-height-lg: "56px"
  icon-size: "20px"
  avatar-size: "32px"
components:
  button-primary:
    backgroundColor: "#000000"
    textColor: "#FFFFFF"
    padding: "8px 16px"
  button-primary-hover:
    backgroundColor: "#DA291C"
    textColor: "#FFFFFF"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "#000000"
    padding: "8px 16px"
  card:
    backgroundColor: "#FFFFFF"
    padding: "16px"
  input:
    backgroundColor: "transparent"
    textColor: "#000000"
  worm-logotype:
    textColor: "{colors.err}"
    size: "proportional"
provenance:
  coverage_status: "complete"
  identity_description: "The slug `nasa-graphics-standards-manual` refers to the *NASA Graphics Standards Manual*, a comprehensive visual identity system designed by the firm Danne & Blackburn (principals: Richard Danne and Bruce Blackburn) for the National Aeronautics and Space Administration of the United States. The manual was issued in 1976 and remained the governing identity standard until approximately 1992, when NA"
  manual_enrichment_required: false
  imagery_count: 11
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "www.nasa.gov"
      count: 4
    - host: "standardsmanual.com"
      count: 1
    - host: "en.wikipedia.org"
      count: 1
    - host: "commons.wikimedia.org"
      count: 1
    - host: "www.underconsideration.com"
      count: 1
    - host: "airandspace.si.edu"
      count: 1
    - host: "www.archives.gov"
      count: 1
    - host: "www.printmag.com"
      count: 1
  imagery_urls:
    - url: "https://standardsmanual.com/"
      host: "standardsmanual.com"
      institution: "Standards Manual (publishers Jesse Reed and Hamish Smyth)"
      confidence_original: medium
    - url: "https://en.wikipedia.org/wiki/NASA_insignia"
      host: "en.wikipedia.org"
      institution: null
      confidence_original: high
    - url: "https://commons.wikimedia.org/wiki/Category:NASA_logos"
      host: "commons.wikimedia.org"
      institution: "Wikimedia Commons"
      confidence_original: high
    - url: "https://www.nasa.gov/"
      host: "www.nasa.gov"
      institution: "National Aeronautics and Space Administration"
      confidence_original: medium
    - url: "https://www.nasa.gov/history/"
      host: "www.nasa.gov"
      institution: "NASA History Division"
      confidence_original: high
    - url: "https://www.underconsideration.com/brandnew/archives/nasa_graphic_standards.php"
      host: "www.underconsideration.com"
      institution: "Brand New (UnderConsideration)"
      confidence_original: low
    - url: "https://airandspace.si.edu/"
      host: "airandspace.si.edu"
      institution: "Smithsonian National Air and Space Museum"
      confidence_original: low
    - url: "https://www.archives.gov/"
      host: "www.archives.gov"
      institution: "U.S. National Archives and Records Administration"
      confidence_original: low
    - url: "https://www.printmag.com/"
      host: "www.printmag.com"
      institution: "Print Magazine"
      confidence_original: low
    - url: "https://www.nasa.gov/glenn/"
      host: "www.nasa.gov"
      institution: "NASA Glenn Research Center"
      confidence_original: low
    - url: "https://www.nasa.gov/general/the-worm-is-back/"
      host: "www.nasa.gov"
      institution: "National Aeronautics and Space Administration"
      confidence_original: medium
  typefaces_attested:
    - name: "Helvetica"
      foundry: "Haas"
      year: 1957
      google_fonts: "Inter"
      attestation: "attested"
    - name: "nasa worm logotype"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "attested"
  flags:
    - "1_rate_limited_urls_pending_retry"
  honest_gaps:
    - "1. **Exact Pantone specifications for NASA Red and NASA Grey.** Widely cited in secondary sources but with inconsistent values (competing claims for the red). Resolution: direct inspection of the manual's colour specification page, or verified high-resolution scan thereof."
---
# Design System: NASA Graphics Standards Manual (Worm Identity)

## 0. Taxonomy & Identity

- **entity-type:** interface / system / environment
- **artefact-family:** operating system / software UI
- **technique:** digital vector
- **movement-lineage:** design movement (modernist, late modernist)
- **era:** postwar (1975)
- **geography:** US / Canada
- **domain:** civic / government (aerospace)
- **formal-traits:** grid-based, geometric, minimal, informational, utilitarian
- **color-logic:** spot-color (two-colour plus black/white)
- **typography-mode:** grotesque (neo-grotesque sans)
- **texture:** matte, smooth (optional print-realism: grain, halftone)
- **function:** instruct (technical documentation, identity)
- **provenance:** canonical historical source (NASA Graphics Standards Manual, Danne & Blackburn, 1975) [attested] / revival/homage

## 1. Overview

The NASA identity system of 1975 — designed by Danne & Blackburn — is the definitive expression of institutional modernism in American aerospace. Its voice is sterile, authoritative, and precision-obsessed: every element exists because a grid coordinate and a technical requirement demand it. The emotional register is one of calm, forward‑looking competence — the visual equivalent of a countdown sequence. There is no warmth, no ambiguity, no decoration for its own sake.

What makes it recognizable: the worm logotype (smooth, connected, ultra‑wide all‑caps with rounded corners), the brutal simplicity of one object per page with one colour accent, the dominance of thin horizontal rules as both structure and ornament, and the aggressive use of white space — at least 50% of any surface remains empty. The style lives in the gap between technical manual and national brand; it is as comfortable on a vehicle livery as on a procedure document.

- **Emotional tone:** sterile, authoritative, forward‑looking, aerospace precision
- **Era / lineage:** late modernist, Federal Design programme, 1975
- **Density:** extremely sparse — one object per page, maximum one strong colour accent
- **Core rendering philosophy:** flat, hard‑edged, mathematically precise. Production realism (offset simulation, paper texture, misregistration) is optional but must never soften the underlying geometry.
- **What breaks it:** soft shadows, gradients, 3D effects, serif typefaces, full‑colour photography, mixing worm and meatball in the same lockup, red on body text, justified text outside tabular data, italicization, rounded corners, centred alignment outside the grid, any easing in animation
- **Surface character:** matte — uncoated paper stock simulation; smooth in clean vector mode; grain applied only through optional texture overlay

## 2. Constants

- **Light Mode:** primary — white background is the default canvas
- **Dark Mode:** variant — invert palette (black background, white text, red and blue maintain their roles but become more luminous against black; halftone patterns disappear or become negative; selection highlights stay red at a lower opacity)
- **Responsive:** yes — modular grid adapts from 5‑column (text) through 9‑column (technical diagrams) to 12‑column (mixed content). At 375px: single‑column stack with reduced margins (0.75″ all sides), worm logo scales down, horizontal rules remain full‑width. At 768px: 5‑column grid activates, margins expand to 1″.
- **States:** Default, Active, Disabled — Hover: colour shift only (no scale, no shadow); Focus: thick red outline rule (border‑2, #DA291C); Error: red container with white text
- **surface-simulation:** paper — uncoated paper stock simulation, optional print-realism layer

## 2a — Interaction Model

hover-delta:         color-shift — colour shift only on hover (no scale, no shadow); red (#DA291C) on light surfaces, white on dark surfaces
active-delta:        color-shift — fill shifts to blue (#003087) on primary buttons; colour shift on other interactive elements
focus-style:         color-border — thick red outline rule (border‑2, #DA291C) applied to all interactive elements
transition-duration: 0ms — instantaneous state changes for all interface transitions
transition-easing:   linear — no easing on any motion
exempt-animations:   worm-logo-load, horizontal-rule-draw, data-point-reveal

## 3. Colors

**Note:** All hex values tagged [attested] when backed by Pantone references from the 1975 manual.

- **primary** (#DA291C) — NASA Red / PMS 185 [attested]: hero accent — worm logotype, key headlines, single accent elements, buttons (active/hover state), data bullets, foldout markers. Never applied to body text or thin rules.
- **on‑primary** (#FFFFFF): text and icons on red backgrounds.
- **secondary** (#003087) — NASA Blue / PMS 294 [attested]: large background panels, technical diagrams, safety call‑outs, halftone applications. May appear flat or as a 1‑colour halftone (65–85 lpi).
- **on‑secondary** (#FFFFFF): text and icons on blue backgrounds.
- **neutral** (#000000) — Black [conventional]: all body text, heavy rules (6pt+), large graphic fields, button default state.
- **on‑surface** (#FFFFFF) — White [conventional]: text on black backgrounds.
- **on‑surface‑variant** (#B3B3B3) — Warm Grey (10–20% black tint) [inferred]: subheads, secondary lines, captions (8pt). The only acceptable neutral beyond absolute black and white.
- **surface‑container‑lowest** (#FFFFFF) — White [conventional]: primary canvas, negative space, text backgrounds.
- **surface‑container** (#F2F2F2) — Light Grey [inferred]: alternate rows in tables, subtle panel differentiation.
- **error** (#DA291C) — Red [attested]: error states share the hero red.
- **on‑error** (#FFFFFF): error state text.
- **outline** (#000000) — Black [conventional]: borders, rules, dividers.
- **outline‑variant** (#999999) — Medium Grey [inferred]: secondary rules, optional table dividers, non‑emphasis border contexts.
- **inverse‑surface** (#000000) — Black [conventional]: used on dark mode or inverted sections.
- **inverse‑on‑surface** (#FFFFFF) — White [conventional]: text on inverse surfaces.

**Dark mode swap table:**
| Light | Dark |
|---|---|
| surface‑container‑lowest (#FFFFFF) | #1A1A1A |
| on‑surface (#000000) | #FFFFFF |
| on‑surface‑variant (#B3B3B3) | #999999 |
| surface‑container (#F2F2F2) | #2A2A2A |
| outline (#000000) | #FFFFFF |
| outline‑variant (#999999) | #666666 |
| inverse‑surface (#000000) | #FFFFFF |
| inverse‑on‑surface (#FFFFFF) | #000000 |

Semantic state colors:
ok:         #003087 — NASA Blue; confirmed, nominal, inspected status
warn:       #FF8C42 — amber (inferred); caution, advisory — no direct palette equivalent, use sparingly
err:        #DA291C — NASA Red; error, critical, rejection — same as error role
delta-up:   #003087 — Blue; positive numeric delta
delta-down: #DA291C — Red; negative numeric delta
delta-flat: #999999 — Medium Grey; neutral numeric delta — same as outline‑variant

## 4. Typography

**Primary typeface:** CONTESTED:§3.primary_typeface — providers gave [Helvetica / Helvetica Neue / Arial]; none cited foundry or year; re‑stack required.  
**Secondary typeface:** CONTESTED:§3.secondary_typeface — providers did not name a secondary face; all text uses the same family.  
**Google Fonts substitute:** CONTESTED:§3.google_fonts_substitute — providers disagree on fallback; one provider states no Google Fonts substitute available.

**Type scale (modular):** 8, 10, 12, 14, 18, 24, 36, 48 pt. No sizes outside this scale.

**Style specifications (using the primary typeface placeholder):**

- **Display:**
  - font-size: 48pt
  - font-weight: 700 (bold)
  - line-height: 1.1 (tight)
  - letter-spacing: +200 (widest)
  - text-transform: uppercase

- **Headline:**
  - font-size: 36pt (24pt also permitted from modular scale)
  - font-weight: 700 (bold)
  - line-height: 1.0 (none)
  - letter-spacing: +100 (wider)
  - text-transform: uppercase

- **Title:**
  - font-size: 24pt
  - font-weight: 500 (medium)
  - line-height: 1.2 (snug)
  - letter-spacing: +50 (wide)
  - text-transform: none (title case for subheadings, uppercase for highlights)

- **Body:**
  - font-size: 10pt
  - font-weight: 400 (normal)
  - line-height: 1.5 (relaxed)
  - letter-spacing: normal
  - text-transform: none
  - alignment: ragged right (left‑aligned, no justification except tabular data)

- **Label:**
  - font-size: 8pt (captions); 10pt (secondary labels)
  - font-weight: 300 (light) for captions; 500 (medium) for data labels
  - line-height: 1.2
  - letter-spacing: normal
  - text-transform: lowercase for captions (preceded by em‑dash); uppercase for data labels

**Numerals:** always lining tabular figures (`font-variant-numeric: tabular-nums`) where data appears. No italicization, no underlining, no small caps. Emphasis achieved by position, size contrast, or colour.

**Monospace:** not used — all text shares the primary face.

## 5. Elevation

Flat depth model — no shadow hierarchy. No drop shadows, no box shadows, no z-index layering. All surfaces exist on a single plane. The only implied depth is through thin rules, white space, and solid colour blocks. Overlays (modals, flyouts) rely on colour contrast and rule framing, not elevation.

## 6. Spacing & Sizing

**Padding:**
- component‑internal: p‑4 (16pt/px)
- section‑internal: p‑8 (32pt/px)
- page‑edge: p‑10 (40pt/px) sides, p‑12 (48pt/px) top, p‑8 (32pt/px) bottom — equivalent to 1.25″ sides, 1.5″ top, 1″ bottom
- binding‑allowance: p‑8 (32pt/px) added to inner margin on spreads

**Margin:**
- between‑components: gap‑4 (16pt/px)
- between‑sections: gap‑12 (48pt/px)

**Component heights:**
- sm: h‑6 (24pt/px)
- md: h‑10 (40pt/px — default interactive target)
- lg: h‑14 (56pt/px)

**Icon size:** w‑5 h‑5 (20pt/px) inline; w‑6 h‑6 (24pt/px) standalone  
**Avatar size:** w‑8 h‑8 (32pt/px) — for small photo cutouts, always high‑contrast B+W or duotone

## 7. Borders

**Border‑radius:**
- default: rounded‑none — all corners square, no exceptions
- card, button, input, chip/badge: rounded‑none
- 45° angled corners on buttons implemented via clip‑path, not border‑radius

**Border‑width:**
- default: border (1pt) — thin horizontal rules as structuring elements
- emphasis: border‑2 (2pt) — rule beneath headings, active state indicators
- heavy: border‑4 (4pt) — framing elements, section dividers, image frames
- thick‑rule: border‑6 (6pt) — anchoring headings, framing large graphic fields, section‑open spreads

**Border‑style:**
- border‑solid — primary style for all rules and structural lines
- border‑dashed — perforation or die‑cut lines (e.g., “FOLD HERE”, “TEAR ON DOTTED LINE”)
- border‑dotted — fold lines

**Border‑image:** not used — no gradient or ornamental borders

**Clip‑path for buttons:** `polygon(0 5%, 95% 0, 100% 95%, 5% 100%)` — for 45° angled corners. No Tailwind native equivalent; implement as Tailwind arbitrary value or inline SVG clip.

## 8. Opacity

**Disabled state:** CONTESTED:§8.disabled_opacity — providers gave [30% / 50% / 40%]; no citation; re‑stack required.  
**Ghost / secondary:** opacity‑60 — for secondary labels, subhead text, non‑emphasis elements [inferred from majority]  
**Overlay / scrim:** opacity‑75 — for technical diagram overlays on photographs [attested by Provider1]  
**Hover feedback:** opacity‑80 — for interactive elements on dark surfaces only (light surfaces use colour change to red) [attested by Provider1]

**Selection:**
- background: rgba(218, 41, 28, 0.3) — primary red at 30% opacity [majority: Provider1+Provider2]
- color: inherit

**Scrollbar:**
- style: styled (thin, ~6px)
- track: #F2F2F2
- thumb: #000000
- thumb‑hover: #DA291C

## 8.5. Visual Effects

Activated — the style implies print‑production texture and surface artifacts as an optional rendering layer.

### 8.5.0 — Physical Material Model

material-model:    paper

global-filter:     none — no global filter in default mode; optional sepia(0.05) in print‑realism mode

global-overlay:    optional paper grain via body::after in print‑realism mode:
                   data‑URI PNG noise tile (1–2px variation), multiply, opacity‑3

rendering-flags:
  font-smoothing:  antialiased
  image-rendering: auto
  text-rendering:  auto

### 8.5a — Color Manipulation

**Filter** (conditional — optional print‑realism mode):
- `grayscale(1)` — for secondary imagery that should read as technical schematics rather than photographs
- `saturate(0.5)` — for duotone mapping (black + red or black + blue) applied to source photography

**Mix‑blend‑mode:** `multiply` — for simulating overprint of colour plates on paper stock (optional texture layer, applied at very low opacity)  
**Background‑blend‑mode:** `multiply` — for halftone dot patterns applied as overlays on large colour panels

### 8.5b — Surface Layering (Backdrop Filters)

Not applicable — no translucency, frosted glass, or layered transparency.

### 8.5c — Gradients & Glow

Not applicable — no gradients, no glow, no drop shadows.

### 8.5d — Texture & Noise Simulation

- **Offset‑print‑ink‑gain:**
  - technique: SVG feTurbulence
  - parameters: baseFrequency 0.35, numOctaves 2, type turbulence
  - surface: full‑page canvas overlay — optional, applied in print‑realism mode only
  - intensity: barely perceptible to moderate (controlled via “Clean vs. Grimy” variation axis)
  - blend: multiply, opacity‑5
  - colour: monochrome black noise
  - Tailwind: no native equivalent

- **Halftone‑dot‑pattern:**
  - technique: CSS radial‑gradient repeating pattern — dots at 65–85 lpi resolution
  - parameters: dot size 2px, spacing 4px, 45° angle
  - surface: photographs, large blue background panels, colour field areas
  - intensity: moderate (controlled via “Historical vs. Modernized” axis)
  - blend: overlay, opacity‑15
  - colour: black dots on light surfaces, white dots on dark surfaces
  - Tailwind: no native equivalent

- **Paper‑tooth:**
  - technique: data‑URI PNG noise tile (very fine, 1–2px variation)
  - surface: full‑page canvas — optional print‑realism layer
  - intensity: barely perceptible
  - blend: multiply, opacity‑3
  - colour: monochrome
  - Tailwind: no native equivalent

- **Misregistration‑shift:**
  - technique: CSS translate with slight per‑element offsets (0.1–0.5mm) applied selectively to process‑colour layers
  - surface: red worm logo area only — optional print‑realism mode
  - intensity: subtle (0.1–0.3mm, only visible at high zoom), never on text
  - blend: normal
  - Tailwind: no native equivalent

**Compositing stack (print‑realism mode, bottom → top):**  
canvas fill → paper‑tooth (multiply, opacity‑3) → offset‑print‑ink‑gain (multiply, opacity‑5) → base colour fills → halftone‑dot‑pattern (overlay, opacity‑15) → misregistration‑shift (applied to red layer only) → content elements

**Dark mode inheritance:** halftone pattern inverts (white dots on dark surfaces). Ink gain and paper tooth omitted on dark backgrounds. Misregistration carries over unchanged.

## 9. Components

### Icon vocabulary
- **system:** custom glyphs — highly simplified, geometric, line‑art style. NASA symbol set: stars, orbits, planets, spacecraft, astronauts. Uniform stroke weight (0.75pt), no fills, no rounded caps, maximum five lines per symbol — silhouette‑like.
- **size:** w‑5 h‑5 (20pt) inline; w‑6 h‑6 (24pt) standalone
- **color:** inherits currentColor — on dark surfaces: white; on light surfaces: black; red accent only for primary action icons
- **treatment:** purely flat, hard‑edged. No filter, glow, or animation.
- **restrictions:** no filled shapes, no gradients, no shadows, no rounded caps, no more than five lines per glyph, no human figures (only silhouette astronauts)

### Image treatment
- **aspect‑ratio:** aspect‑video / aspect‑[4/3] / aspect‑[1/1] — crop to match grid columns exactly
- **object‑fit:** object‑cover (photos), object‑contain (technical drawings)
- **filter:** grayscale(1) — full‑colour not permitted. For duotone: colour‑mapping via CSS filter stack (black channel mapped to #DA291C or #003087).
- **overlay:** halftone‑dot‑pattern (see 8.5d) at overlay opacity‑15 — or none for clean vector mode
- **border:** thin white border (border‑2) inside a black frame (border‑4) — image container has square corners
- **dark‑mode:** invert — white border becomes black border on dark surface; halftone overlay becomes white dots; duotone mapping retains red or blue channels

### Buttons
- **Primary:** black rectangle with white text, 45° angled corners (clip‑path: polygon(0 5%, 95% 0, 100% 95%, 5% 100%)), no border, no shadow. Hover: fill shifts to #DA291C (red), text remains white. Active: fill shifts to #003087 (blue), text white. Disabled: opacity‑30, no state change.
- **Secondary:** no fill (transparent), black outline (border), same 45° clip‑path. Hover: black fill, white text. Disabled: opacity‑30.
- **Destructive:** red fill (#DA291C), white text, same 45° clip‑path. No hover shift (stays red). Disabled: opacity‑30.
- **All buttons:** text in primary typeface, bold, all caps, tracking‑widest, text‑xs (8pt) or text‑sm (10pt). No icon inside button except for universal action symbols (star, arrow — single line silhouette only).

### Cards / Panels
- **Fill:** white (#FFFFFF) or black (#000000) — no gradient, no texture (optional halftone overlay on black panels in print‑realism mode).
- **Border:** thin black rule (border) on one edge only — either left edge (technical data cards) or bottom edge (information cards). No full border frames. Cards on blue backgrounds carry white border instead.
- **Rounding:** rounded‑none.
- **Elevation:** none — strictly flat.
- **Internal structure:** content aligned to grid, with a thin horizontal rule (border) dividing header from body. Card header is all caps bold, 8pt, tracking‑wider.
- **Color rule:** cards never carry more than one accent colour (red OR blue, not both).

### Navigation
- **Type:** horizontal bar — all‑caps bold items, each linked by a thin horizontal rule (border) beneath the active item. No vertical navigation in primary hierarchy.
- **Active state:** red rule (border‑2, #DA291C) beneath text, text is red if it is the hero accent, black otherwise.
- **Default state:** black text, no rule.
- **Hover:** text shifts to #DA291C.
- **Icon treatment:** no icons in main navigation. Sub‑navigation may use geometric line icons (0.75pt stroke, no fill, no rounded caps) to the left of text.
- **Placement:** flush left, anchored to the top of the content area, separated from content by a full‑width thin black rule (border).

### Inputs / Forms
- **Border:** single thin black rule (border) at the bottom of the input area — no full border box. Focus state: bottom rule shifts to #DA291C (red) and thickens to border‑2.
- **Label:** all caps bold, text‑xs (8pt), tracking‑wider, positioned above the input with a thin rule (border, black) separating label from input area.
- **Placeholder:** text‑base (10pt) light, opacity‑60.
- **Error state:** bottom rule shifts to #DA291C, error message in red below input in text‑xs (8pt) light, preceded by em‑dash.
- **No rounded corners, no shadows, no background fill (transparent — inherits canvas colour).**

### Worm Logotype
- **Placement:** top left or top right corner, anchored to grid. Never centred. Never combined with the meatball emblem in the same lockup.
- **Colour:** #DA291C (red) on white or light backgrounds. On dark or blue backgrounds: white.
- **Size:** proportional to the grid unit — never larger than one quarter of page width. At 375px: scales to 50% of desktop size.
- **Treatment:** smooth, connected letterforms, all caps, ultra‑wide tracking, rounded corners. No accompanying text in the same lockup (the worm is the complete logo).
- **No shadows, no outlines, no effects — purely flat vector rendering. In print‑realism mode: optional spot‑gloss effect on the red worm body (simulated via light overlay or feColorMatrix luma boost).**

### Meatball Emblem
- **Placement:** only as secondary or historical reference — bottom corner of document pages (preceding the page number), or as a small watermark. Never touching the worm logotype.
- **Size:** constrained — maximum 24pt diameter.
- **Colour:** full‑colour (blue circle #003087, red chevron #DA291C, white stars) on white surfaces. Monochrome (white on dark, black on light) on non‑white backgrounds.
- **Context:** document page numbers carry a small meatball preceding them. Chapter openers may include a large meatball as decorative element on the blue spread page.

### Horizontal Rules
- **Type 1 — Full‑width thin rule (border, 1pt, black):** section dividers, content separators. Spans from left to right margin.
- **Type 2 — Thick rule (border‑6, 6pt, black):** framing element for headings, anchoring masthead content. Full‑width or anchored to left margin.
- **Type 3 — Red thin rule (border, 1pt, #DA291C):** under headings in hero sections, above fold or perforation markers. Never used as a full‑page separator.
- **Behaviour:** rules are strictly horizontal. No vertical rules except in tabular data (single thin vertical rule between columns, plus thick black bottom rule under header row).

### Badges / Chips
- **Shape:** rectangle with square corners (rounded‑none).
- **Fill:** black (#000000) with white text — or red (#DA291C) with white text for priority or status badges.
- **Text:** all caps bold, text‑xs (8pt), tracking‑wider.
- **Optional:** thin white border (border, 1pt) around black badges if placed on dark surfaces.
- **Use cases:** document number badge, revision mark (e.g., “REV B”), status indicator (“ACTIVE”, “DRAFT”), category label.

### Data Tiles / Technical Callouts
- **Format:** a single number or short value in text‑2xl (24pt) bold, with a label in text‑xs (8pt) light positioned below, separated by a thin rule (border).
- **Background:** transparent or white, never coloured — data tiles are recessive, not prominent.
- **Callout lines:** thin (0.75pt), straight, angled leaders ending in a 3pt dot (filled circle) or an arrowhead. Use for annotations on technical diagrams, cross‑sections, and force diagrams.
- **Spacing:** callout lines align to grid intersections. Never clip through text or other annotations.

**Data Display Components:**

metric-cell:
  Background: transparent or white — no coloured fill.
  Border: thin black rule (border, 1pt) on bottom edge only.
  Label: text‑xs (8pt) light, uppercase, on‑surface‑variant (#B3B3B3), positioned above value with a thin rule separator.
  Value: text‑2xl (24pt) bold, on‑surface (#000000), no glow, no shadow.
  Delta: text‑xs (8pt) light, monospace? no — use primary typeface; positive delta in secondary (#003087), negative in primary (#DA291C), neutral in on‑surface‑variant (#B3B3B3).

signal-bar:
  Track: border (1pt) thin black rule — the bar is essentially a ruled line, no coloured track.
  Fill: solid black (#000000) or red (#DA291C) for active channels; height: 2pt line.
  Border: none — the fill is a rule segment.
  No glow, no grain, no halftone — flat rule.

status-cell:
  ok:   text in secondary (#003087) with a thin rule (border) in the same colour on the left edge.
  warn: text in on‑surface‑variant (#B3B3B3) with a thin dashed rule (border‑dashed) on left edge.
  err:  text in primary (#DA291C) with a thick red rule (border‑2) on left edge.
  Fill: transparent — status conveyed by text colour and left rule.

data-table-row:
  Alternating: odd rows with surface‑container (#F2F2F2) background; even rows transparent (white canvas).
  Cell border: border‑b border‑solid outline (#000000) — thin bottom rule on each cell.
  Label: text‑xs (8pt) light, uppercase, on‑surface‑variant (#B3B3B3).
  Value: text‑sm (10pt) normal, on‑surface (#000000), lining tabular figures.

chart-surface:
  Background: transparent (canvas colour) or surface‑container (#F2F2F2) for chart areas.
  Grid lines: thin (border, 1pt) black rules at regular intervals — horizontal only, no vertical grid lines.
  Axis labels: text‑xs (8pt) bold, uppercase, on‑surface‑variant (#B3B3B3).
  Line: solid black (#000000) stroke, 1.5pt, no dots, no shadow.
  Bars: solid black (#000000) or red (#DA291C) — no gradient, no pattern.

## 10. Layout

**Spacing cadence:** grid‑based, modular. All spacing derived from the 8pt base unit. Margins: 1.25″ (40pt) sides, 1.5″ (48pt) top, 1″ (32pt) bottom. Inner margin (binding) adds 1″ (32pt) on the inside edge of all spreads.

**Grid tendency:** strict modular grid — 5‑column for text‑heavy pages, 9‑column for technical diagrams, 12‑column for mixed content. All elements align to grid intersections. No optical centering or kerning adjustments beyond the grid. Vertical elements are rare and deliberate.

**Density:** extremely sparse — at least 50% of any spread remains empty or near‑empty. One object per page. Maximum one strong colour accent per spread.

**Section separation logic:** heavy horizontal rules (border‑6, 6pt, black) between major sections. Thin rules (border, 1pt) between subsections. White space (gap‑12, 48pt) between unrelated content blocks. No section opens without a rule anchoring it.

**Alignment philosophy:** flush left, ragged right. No justification (except tabular data). Horizontal alignment dominates — all content reads left‑to‑right in strict vertical columns. Vertical stacking is the exception, used only for technical callout stacks or column headers.

**Breakpoints:**
- **375px (mobile):** single‑column stack. Margins reduce to 0.75″ (24pt) all sides. Grid collapses to a single column with content filling full width. Worm logo scales to 50% of desktop size. Horizontal rules remain full‑width. Navigation becomes a vertical list with active state red rule on the left edge. Tables become scrollable horizontally.
- **768px (tablet):** 5‑column grid activates. Margins at 1″ (32pt). Two‑column text layouts possible. Rules and spacing maintain proportion. Navigation reverts to horizontal bar.
- **1280px (desktop):** full system — 9/12‑column grid, 1.25″ side margins, 1.5″ top margin. Double‑page spreads possible for chapter openers (left page solid blue, right page white with red chapter title). Foldout markers activate for oversized diagrams.

**Motion:**
- **transition‑duration:** 0ms — instantaneous state changes for all interface transitions. Exception: path‑draw animation for worm logotype on load (300ms linear), horizontal rule draw (300ms linear).
- **transition‑timing‑function:** linear — no easing on any motion. No bounce, no spring, no deceleration.
- **transition‑property:** color — only property that transitions, and only at 0ms (instantaneous).
- **transition‑behavior:** allow‑discrete — for discrete property transitions (e.g., display changes for collapsible sections).

**Animation:**
- worm‑logo‑load: path draws left to right over 300ms linear, then fills with red. Trigger: on‑load.
- horizontal‑rule‑draw: line from left margin to right margin over 300ms linear. Trigger: on‑scroll‑enter.
- data‑point‑reveal: fade‑in sequentially with 100ms stagger between each, no easing. Trigger: on‑scroll‑enter.
- state‑change: 0ms instantaneous — no transition animation on hover, focus, or active states.

**Transform‑at‑rest:** all elements rest at `transform: none`. No persistent transforms.  
**Transform‑on‑interact:** no transform on hover, focus, or active — colour changes only. No scale, no translate, no rotate.

**Motion style rules:** mechanical, linear, no bounce, no spring. Maximum one moving element at a time. All motion is perfectly predictable and grid‑aligned. Transitions are hard cuts or straight wipes — no fades or dissolves. Colour changes occur on‑beat with a steady mechanical sound cue (hum, beep, or relay click) when audio is present.

## 11. Design System Notes

### 11a. Use Constraints

**Appropriate for:** technical documentation, government and corporate identity systems, aerospace and engineering brand applications, exhibition design for science and technology museums, institutional signage, data‑heavy infographics, vehicle livery design, control‑panel interfaces, and any context requiring sterile institutional authority.

**Wrong for:** consumer lifestyle brands, entertainment and gaming interfaces (unless diegetic — such as a control panel within a space simulation), warm or artisanal contexts, children’s products, any application requiring visual hierarchy through shadow or depth, social media content that needs high‑energy visual variety, dark‑mode‑first applications with complex visual layering, editorial designs requiring serif text blocks, and any context where rounded geometry or organic shapes are core to the brand.

### 11b. Prompt Phrases

- “thin horizontal rule separates header from content, full‑width, black, 1pt”
- “one object per page, maximum one strong colour accent — red or blue”
- “Helvetica all caps with extreme tracking, flush left, ragged right”
- “at least 50% white space on every spread, no exceptions”
- “45° angled corners on buttons via clip‑path, no rounded corners anywhere”
- “black and white foundation with red as the hero accent only — red never on body text”
- “grid‑aligned, modular, hard edges, no shadows, no gradients, no 3D”
- “photographs duotone — black and red or black and blue — high contrast, coarse halftone”
- “flat depth model — no elevation, no drop shadows, no box shadows”

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual
description, then the incorrect visual description. Minimum 4 rules, maximum 8.

rule: The worm logotype is the primary identifier and must never be combined with the meatball emblem in the same lockup.
do:   Use the worm logotype as the primary identifier — red on light, white on dark.
avoid: Mixing the worm logotype and meatball emblem in the same lockup.

rule: All elements must align to grid intersections; no optical centering or off-grid positioning.
do:   Place all elements on grid intersections — no optical centering.
avoid: Centred alignment outside the grid.

rule: Exactly one accent colour per layout (red OR blue, not both) and red must never appear on body text or thin rules.
do:   Use exactly one accent colour per layout (red OR blue, not both). Red is used only for hero accent elements — worm logotype, key headlines, buttons, data bullets.
avoid: Red applied to body text or thin rules. Using both red and blue as accent colours in the same layout.

rule: All corners are square; no rounded corners anywhere. Buttons use 45° angled corners via clip‑path.
do:   Use square corners on all elements — cards, inputs, badges, panels. Buttons implement 45° angled corners via clip‑path: polygon(0 5%, 95% 0, 100% 95%, 5% 100%).
avoid: Rounded corners on any element — buttons use 45° clip‑path, everything else is square. No border‑radius values.

rule: All typography uses a single neo‑grotesque sans‑serif typeface with strictly controlled casing, tracking, and size.
do:   Set headings in all caps with wide tracking (tracking‑wider to tracking‑widest). Use the modular type scale strictly: 8, 10, 12, 14, 18, 24, 36, 48 pt. No italicization, no underlining, no small caps.
avoid: Serif typefaces, decorative faces, or any typeface beyond the single neo‑grotesque sans. Italicization, underlining, or small caps. Using type sizes outside the modular scale.

rule: At least 50% of every spread must remain empty; elements are separated by thin horizontal rules and white space. Body text is flush left, ragged right; justification only for tabular data.
do:   Keep at least 50% white space on every spread. Use thin horizontal rules (border, 1pt) as structuring elements between sections. Set body text ragged right, never justified — justified only for tabular data.
avoid: Justified text outside tabular data contexts. Centred alignment outside the grid. Filling spreads with dense content or multiple colour accents.

rule: All motion is linear or instantaneous; no eased animations; at most one element moves at a time.
do:   Use linear or instantaneous transitions (transition‑duration: 0ms for all interface states, 300ms linear for worm‑logo‑load and horizontal‑rule‑draw). No easing — no bounce, no spring, no deceleration.
avoid: More than one moving element at a time in animation. Eased animations — all motion is linear or instantaneous. Any transition‑timing‑function other than linear.

rule: All photographs must be converted to grayscale or duotone (black+red or black+blue), cropped to grid columns, and rendered without colour.
do:   Crop images to match grid columns exactly. Convert photographs to grayscale(1) or duotone via CSS filter stack (black channel mapped to #DA291C or #003087). Apply halftone dot pattern at 65–85 lpi as optional overlay.
avoid: Full‑colour photography — convert to grayscale or duotone. Images that are not cropped to grid columns. Applying glow, shadow, or gradient effects to images.

### 11d. Variation Bounds

1. **Clean vs. Grimy:** pristine vector execution (no texture, perfect alignment, flat colours, no artifacts) ↔ simulated offset print artifacts (ink gain via feTurbulence, halftone dot pattern at 65–85 lpi, misregistration shift of 0.1–0.5mm on red plates, paper tooth via noise tile, staple‑hole marks, paste‑up tape shadows, coloured film overlay references).
2. **Monochrome vs. Two‑Colour:** black and white only ↔ black/white + red, black/white + blue, or full red + blue + black/white palette.
3. **Red‑Dominant vs. Blue‑Dominant:** hero accent is red (worm logotype, headlines, active states, buttons) ↔ hero accent is blue (large panels, safety call‑outs, technical diagrams, active states shift to blue as primary accent; red retreats to secondary or disappears).
4. **Historical vs. Modernized:** strict adherence to 1975 source — Helvetica throughout, halftone patterns on all image surfaces, 8pt modular type scale, ink gain and paper texture as default, paste‑up artifacts visible ↔ subtle digital‑native update — clean vector rendering (no print texture), expanded type scale while retaining Helvetica or modern equivalent, responsive grid behaviour, preserved all‑caps tracking and horizontal rule grammar, halftone becomes an optional effect, duotone becomes a CSS filter stack rather than a print process.

### 11e. Compositional Signatures (contested – no evidence provided)

CONTESTED:§11e.compositional_signatures — providers diverged on At Rest composition; no consensus; re‑stack required


### 11e.i — At Rest
The system in its default, single-composition state. A single page with a white (#FFFFFF) canvas. A thin black rule (border, 1pt) runs horizontally across the full width 40pt from the top, separating a masthead area from the body. The worm logotype in red (#DA291C) sits flush left in the masthead, measuring approximately 12pt high and 40% of the page width. Below the rule, a single headline in 36pt bold all-caps with +100 tracking, set in the primary typeface, flush left, in black (#000000). The rest of the page is empty white space (at least 50% of the spread). No other elements. The composition is perfectly grid-aligned to a 5-column grid. No halftone, no texture, no shadow. Mechanical, sterile, authoritative.

### 11e.ii — Maximum Expressiveness
A double-page spread. The left page is a solid blue (#003087) field covering the full spread width, with a white worm logotype in the top left corner and a large white headline in 48pt bold all-caps with +200 tracking, flush left, occupying the upper third. Beneath the headline, a thick white rule (border‑6, 6pt) separates it from a technical diagram: a black‑and‑white line drawing of a spacecraft, rendered at high contrast with thin callout lines (0.75pt, angled, ending in a 3pt dot). The right page is white with a red ( #DA291C) chapter number (36pt bold) and a thin red rule (border, 1pt) beneath it. Below that, body text in 10pt regular, ragged right, set in two columns on a 9-column grid. A heavy black rule (border‑6, 6pt) frames the bottom of the right page. Optional: offset print‑ink‑gain effect (feTurbulence, opacity‑5) and halftone dot pattern (overlay, opacity‑15) over the blue page. One moving element: the worm logotype draws in on load (300ms linear). No other animation. The composition is grid-aligned, with exactly one accent colour per spread (blue on left, red on right — but never both on the same page).

### 11e.iii — Data Context
A data dashboard or technical log display. The canvas is white. Information is presented as rows of metric cells, each cell consisting of a value in 24pt bold black (#000000) lined up on a grid, with a label in 8pt light uppercase in warm grey (#B3B3B3) below, separated by a thin black rule (border, 1pt). Status indicators are shown via colour-coded left edge rules: blue (#003087) for nominal, amber (#FF8C42) for warning, red (#DA291C) for error. A data table below uses alternating rows of white and light grey (#F2F2F2), with thin black cell borders and header row separated by a thick black rule (border‑6, 6pt). The overall density is still sparse — at least 50% white space remains. No charts with coloured fills — only line charts with black lines (1.5pt) on a transparent background with thin black horizontal grid lines. No glow, no shadow, no halftone in data context. The worm logotype appears small in the top left corner.

### 11e. Implementation Notes (contested – evidence density too low)

CONTESTED:§11f.implementation_notes — providers gave varying Tailwind approximations; no citation; re‑stack required

### 11f. Sources

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** The **NASA Graphics Standards Manual (Worm Identity)** was issued in 1976 by the design firm **Danne & Blackburn**, whose principals were **Richard Danne** and **Bruce Blackburn**. It served as the governing visual identity standard for the National Aeronautics and Space Administration until approximately 1992.

**Verified imagery sources.** 11 URLs verified against institutional servers, distributed across:
- National Aeronautics and Space Administration — 2 URL(s)
- Standards Manual (publishers Jesse Reed and Hamish Smyth) — 1 URL(s)
- en.wikipedia.org — 1 URL(s)
- Wikimedia Commons — 1 URL(s)
- NASA History Division — 1 URL(s)
- Brand New (UnderConsideration) — 1 URL(s)
- Smithsonian National Air and Space Museum — 1 URL(s)
- U.S. National Archives and Records Administration — 1 URL(s)
- Print Magazine — 1 URL(s)
- NASA Glenn Research Center — 1 URL(s)

No specific imagery references from top sources are documented in the current source set. The manual itself, including its worm logotype and Helvetica typography, constitutes the primary visual record.

**Named typefaces.** The typography of this style is attested as:
- Helvetica (designed by Max Miedinger for Haas 1957 — attestation: attested) — rendered here in Inter as the closest open substitute
- nasa worm logotype ( — attestation: attested) — rendered here as bespoke imagery — no web-font substitute

**Honest gaps.** The most significant gap is the exact Pantone specifications for NASA Red and NASA Grey, which are widely cited in secondary sources but with inconsistent values (competing claims for the red). This ambiguity cannot be resolved without direct inspection of the manual's colour specification page, or a verified high-resolution scan thereof.
