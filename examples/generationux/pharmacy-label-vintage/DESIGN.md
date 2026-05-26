---
version: alpha
name: "Pharmacy-Label Vintage"
description: "A vintage apothecary-inspired design system evoking archival authority and handmade craftsmanship through aged paper, sepia ink, and engraved line art."
colors:
  surface-container-lowest: "#F5E6C8"
  surface-container: "#EFDCB0"
  on-surface: "#3E2C1B"
  secondary: "#8B3A3A"
  secondary-container: "#D4A574"
  tertiary: "#6B7A55"
  outline: "#7A5C3A"
  outline-variant: "#A08B6C"
  error: "#7A3B3B"
  on-error: "#F5E6C8"
typography:
  display:
    fontFamily: "Caslon"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.025em"
  headline:
    fontFamily: "Caslon"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.025em"
  title:
    fontFamily: "Caslon"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.05em"
  body:
    fontFamily: "Caslon"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  label:
    fontFamily: "Caslon"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.1em"
    textTransform: "uppercase"
rounded:
  default: "0px"
  card: "0px"
  button: "2px"
  input: "0px"
  chip: "9999px"
spacing:
  padding-xs: "8px"
  padding-sm: "12px"
  padding-md: "16px"
  padding-lg: "24px"
  padding-xl: "32px"
  gap-xs: "8px"
  gap-sm: "12px"
  gap-md: "16px"
  gap-lg: "24px"
  component-height-sm: "32px"
  component-height-md: "40px"
  component-height-lg: "48px"
components:
  button-primary:
    backgroundColor: "#8B3A3A"
    textColor: "#F5E6C8"
    rounded: "{rounded.button}"
    padding: "8px"
  button-primary-hover:
    backgroundColor: "#7A2E2E"
    textColor: "#F5E6C8"
    rounded: "{rounded.button}"
    padding: "8px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "#3E2C1B"
    rounded: "{rounded.default}"
    padding: "8px"
  card:
    backgroundColor: "#F5E6C8"
    rounded: "{rounded.card}"
    padding: "16px"
  input:
    backgroundColor: "transparent"
    textColor: "#3E2C1B"
    rounded: "{rounded.input}"
    padding: "8px"
  badge-stamp:
    backgroundColor: "#8B3A3A"
    textColor: "#F5E6C8"
    rounded: "{rounded.chip}"
    padding: "4px"
    width: "48px"
    height: "48px"
provenance:
  coverage_status: "sparse"
  identity_description: ""
  manual_enrichment_required: false
  imagery_count: 4
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: null
    typography_map: "entries:113"
  sources:
    - host: "en.wikipedia.org"
      count: 1
    - host: "wellcomecollection.org"
      count: 1
    - host: "archive.org"
      count: 1
    - host: "www.nlm.nih.gov"
      count: 1
  imagery_urls:
    - url: "https://en.wikipedia.org/wiki/Prescription_label"
      host: "en.wikipedia.org"
      institution: "Wikipedia"
      confidence_original: high
    - url: "https://wellcomecollection.org/search/works?query=pharmacy+label"
      host: "wellcomecollection.org"
      institution: "Wellcome Collection, London"
      confidence_original: medium
    - url: "https://archive.org/search?query=pharmaceutical+labels"
      host: "archive.org"
      institution: "Internet Archive"
      confidence_original: medium
    - url: "https://www.nlm.nih.gov/"
      host: "www.nlm.nih.gov"
      institution: "U.S. National Library of Medicine"
      confidence_original: low
  typefaces_attested:
    []
  flags:
    - "sparse_imagery"
    - "no_typography_extracted"
    - "no_colour_extracted"
    - "2_robots_disallowed_urls"
  honest_gaps:
    []
---
# Design System: Pharmacy-Label Vintage

## 0. Taxonomy & Identity

entity-type:        interface / system / environment
artefact-family:    operating system / software UI
technique:          digital raster
movement-lineage:   vernacular commercial style
era:                19th century
geography:          US / Canada
domain:             medical / laboratory
formal-traits:      ornamental, dense, weathered, symmetrical
color-logic:        spot-color
typography-mode:    serif
texture:            grainy, weathered
function:           persuade
provenance:         revival / homage

## 1. Overview

Pharmacy-Label Vintage translates the visual language of late‑19th‑ and early‑20th‑century apothecary labels into a digital interface. It evokes archival authority, handmade craftsmanship, and nostalgic medical credibility. The emotional register is warm, restrained, and trustworthy — like an inherited family recipe from a trusted pharmacist.

Density is high: text is small, tightly letter‑spaced, and packed inside generous margins. The rendering philosophy simulates physical artifacts: aged cream paper with visible grain, letterpress ink with slight pressure shadow, and dye fading on stamp elements. Color is deliberately limited to 3–4 low‑saturation, high‑contrast hues. Pure black and bright white are forbidden.

- **Recognizable at a glance:** bordered frame (fine double rule or thin decorative line), red circular stamp with offset fade, Rx symbol (℞) always present, engraved mortar & pestle or botanical vignette, script typeface for patient name, condensed serif for prescription number, small caps for pharmaceutical terms, and a three‑band centered vertical layout.
- **Would break the style:** modern geometric sans, pure black or white, gradients (except dry‑brush or multi‑layer ink), landscape orientation, large type, any background image that is not paper texture.
- **Texture simulation:** paper feels brittle — grain noise, foxing spots, edge wear, tape residue, and a slight warp or curve on containers.

## 2. Constants

Light Mode:   primary (cream paper base, sepia ink, red stamp)
Dark Mode:    no — this style is exclusively light; dark variant would require entirely different paper tones
Responsive:   yes — single‑column layout reflows at 375px and 768px; margins shrink, components stack
States:       Default, Active (stamp press effect), Disabled (faded ink stamp at opacity‑40), Hover (subtle darken), Focus (border darkening)
surface-simulation: paper — aged cream paper with visible grain, foxing spots, edge wear, and slight warp; simulates a physical pharmacy label printed on card stock

## 2a — Interaction Model

hover-delta:        none — physical printed artifact; no hover state exists on paper labels
active-delta:       bevel-depress — stamp press effect; active state simulates the slight indent and offset of a rubber stamp pressed onto paper
focus-style:        color-border — border darkens on focus (transition from outline to a deeper sepia)
transition-duration:0ms — no easing; state changes are instantaneous as on physical paper
transition-easing:  none
exempt-animations:  paper-grain-simmer — the optional grain simmer animation must survive the 0ms transition override

## 3. Colors

All hex values are contested due to lack of consensus and absence of cited sources. The following roles are described conceptually; refer to seed.json override if available. Each hex placeholder is tagged [unverified].

surface-container-lowest: CONTESTED:§2.hex_primary — providers diverged; no cited source. [unverified]
surface-container:       CONTESTED:§2.hex_primary — providers diverged; no cited source. [unverified]
on-surface:             CONTESTED:§2.hex_primary — dark sepia ink (approx. #3B–4A range). [unverified]
secondary:              CONTESTED:§2.hex_secondary — muted brick red (approx. #8B–A0 range). [unverified]
secondary-container:    CONTESTED:§2.hex_accent — light brick tint. [unverified]
tertiary:               CONTESTED:§2.hex_accent — faded olive (approx. #6B–7E range). [unverified]
outline:                CONTESTED:§2.hex_primary — worn brown border (approx. #5C–8C range). [unverified]
outline-variant:        CONTESTED:§2.hex_primary — lighter sepia. [unverified]
error:                  CONTESTED:§2.hex_secondary — dark red (approx. #8B0000–7A3B3B). [unverified]
on-error:               CONTESTED:§2.hex_primary — cream text on error. [unverified]

No dark mode variant.

## 4. Typography

All specific typeface names and numeric values are contested due to absence of cited foundries/sources. The following describes the general typographic style.

- **Primary typeface:** CONTESTED:§3.primary_typeface — providers listed Caslon, Garamond, Miller; no foundry or year cited; re‑stack required.
- **Secondary typeface:** CONTESTED:§3.secondary_typeface — providers listed Bickham Script, Zapfino; no foundry or year cited; re‑stack required.
- **Google Fonts substitute:** CONTESTED:§3.google_fonts_substitute — no cited substitute; re‑stack required.

**Style guidelines:**
- All text is old‑style serif for functional roles (display, headline, body, label). Use a flourished script (Bickham Script or similar) exclusively for patient name / handwritten notes.
- Font sizes: small — generally text‑xxs to text‑base (approx. 10px–16px). Display may be slightly larger but never exceeding 20px.
- Font weight: normal to bold; no light weights except for secondary script.
- Line height: tight (leading‑tight to leading‑normal).
- Letter‑spacing: wider for uppercase and small caps (tracking‑wide to tracking‑wider), tighter for body.
- Text transform: uppercase with small‑caps via `font‑variant‑caps: small‑caps` for pharmaceutical terms; normal case for everything else.
- Italic used for dosage directions.
- Lining figures (tabular numbers) for numeric values.
- Subtle misregistration (0.2–0.5px offset) on stamp text and script lines.
- Letterpress simulation: soft inner shadow on text (`box‑shadow: inset 0 1px 0 rgba(59,47,47,0.15)`).

## 5. Elevation

Flat depth model — no layered shadow hierarchy.
All surfaces share the same plane; depth is implied solely by paper texture and letterpress inner shadow on text.
No drop shadows, no stacking context overrides.
Stamps may use a subtle inner shadow or slight press effect (`shadow‑inner` simulation).

## 6. Spacing & Sizing

All numeric values are contested due to no majority agreement. General guidelines:

padding:
  component-internal:  tight (approx. 8–16px)
  section-internal:    moderate (approx. 16–24px)
  page-edge:           generous (approx. 24–32px)

margin:
  between-components:  very tight (approx. 8–16px)
  between-sections:    moderate (approx. 16–24px)

component-heights:
  sm:   small interactive elements (stamps, badges) — approx. 32px
  md:   default interactive targets — approx. 40–48px
  lg:   large panels — approx. 48–64px

icon-size:       16px for inline marks; 24–32px for focal motifs
avatar-size:     not used

## 7. Borders

border-radius:
  default:     rounded-none — all corners sharp
  card:        rounded-none
  button:      rounded-sm (very slight softening for stamp elements) or rounded-none
  input:       rounded-none (bottom‑border only)
  chip/badge:  rounded-full for circular stamps; otherwise rounded-none

border-width:
  default:     border (1px)
  emphasis:    border-2 (2px) for double‑rule frame, active states, stamp outline

border-style:  border-solid

Double‑rule simulation: outer 1px solid, inner 1px or 0.5px via box‑shadow or outline‑variant. Not natively available in Tailwind.

No clip‑path — geometries remain rectangular.

## 8. Opacity

disabled-state:     opacity-40  [unanimous: 4/5 providers agree]
ghost/secondary:    opacity-60  [majority: 3/5 providers]
overlay/scrim:      opacity-50 (cream tint) — contested (2/5 agree)
hover-feedback:     opacity-80 (subtle darken on interactive elements) — contested

**Browser chrome (active):**

selection:
  background:  rgba(59,47,47,0.25) — sepia tint [common]
  color:       inherit

scrollbar:
  style:       auto (thin)
  width:       thin (6px)
  track:       #E8D5B7 [common]
  thumb:       #A0522D or #A08B76 — contested
  thumb-hover: darker shade

## 8.5. Visual Effects

### 8.5.0 — Physical Material Model

material-model:    paper — aged cream card stock with visible grain, foxing spots, and edge wear

global-filter:     sepia(0.03) contrast(0.92) — simulates the warm, slightly faded appearance of aged paper under
                   soft archival lighting; reduces contrast range to mimic ink absorption into fibrous stock

global-overlay:    Paper grain via body::after pseudo-element:
                   SVG feTurbulence (baseFrequency=0.7, numOctaves=3, type=fractalNoise) rendered as a
                   grayscale image, applied via background-image with blend-mode: overlay, opacity 15%,
                   position: fixed, pointer-events: none, z-index: 9999

rendering-flags:
  font-smoothing:  antialiased — serif type at small sizes requires subtle smoothing
  image-rendering: auto — vintage engraved illustrations need standard rendering
  text-rendering:  auto

### 8.5a — Color Manipulation

mix-blend-mode: multiply — applied to text, stamps, and line art to simulate ink absorption into paper.
No CSS filters used for color shifting; the palette itself encodes the vintage look.
Background‑blend‑mode: multiply for stamp elements over paper texture.

### 8.5b — Surface Layering (Backdrop Filters)

Not used — no frosted glass or translucency.

### 8.5c — Gradients & Glow

Not used as a primary technique. Optional subtle radial gradient from center to edge mimicking paper aging (`radial‑gradient(circle, #F5EFE0, #E8DCC8)`), but never structural. No text‑shadow glow, no drop‑shadow beyond letterpress simulation.

### 8.5d — Texture & Noise Simulation

Four techniques are broadly agreed upon:

**1. Paper Grain (base surface):**
technique:  SVG feTurbulence noise
parameters: baseFrequency 0.65–0.8, numOctaves 3, type fractalNoise
surface:    all card/container backgrounds
intensity:  moderate
blend:      overlay or multiply, opacity 15–20%
color:      monochrome (grayscale)
animation:  static; optional 0.5% simmer on digital (see §10 motion)
**2. Foxing Spots (random stain patches):**
technique:  scattered radial‑gradient spots (CSS or SVG)
parameters: small circles (~2–8px) at random positions
surface:    card fills, heavier near edges
intensity:  low (2–15 spots per container)
blend:      multiply, opacity 10–30%
color:      brown (#5C4033–#6B513A)
**3. Edge Wear / Chipping:**
technique:  jagged mask (SVG feDisplacementMap or CSS clip‑path)
parameters: displacement 4–8px
surface:    outer border of cards/labels
intensity:  moderate
blend:      none (reveals paper base)
**4. Ink Bleed:**
technique:  blur filter (0.3–0.5px) on dark ink elements
surface:    all text and line art
intensity:  barely perceptible
blend:      none (direct pixel diffusion)

**Optional:** Tape residue — vertical linear‑gradient strip on one edge, opacity‑10.
## 9. Components

### Icon Vocabulary

icon-vocabulary:
  system:       Custom engraved‑style line‑art glyphs — Rx symbol (℞), mortar & pestle, botanical sprigs, skull‑and‑crossbones, diamond/dot rules.
  size:         w-4 h-4 (16px) for inline; w-8 h-8 (32px) for focal illustrations.
  color:        currentColor (inherit sepia ink) except stamps (red).
  treatment:    No fills, no gradients, no modern glyphs. Crosshatch shading via SVG stroke‑dasharray.
  restrictions: Filled shapes, gradients, modern icons (hamburger, magnifier) are forbidden.

### Image & Media Treatment

image-treatment:
  aspect-ratio:  aspect-square for vignettes; free for botanical spreads.
  object-fit:    object-contain (preserve line art).
  filter:        None for engraved art; if photographic content used — desaturate 100%, contrast 125% (rare).
  overlay:       none.
  border:        thin single or double rule around illustration.
  dark-mode:     not applicable.

### Buttons

**Primary Button (Stamp Style):**
- Background: brick red (secondary) — exact hue contested.
- Border: 2px solid sepia (on‑surface), rounded‑sm.
- Text: cream (on‑secondary), small caps, bold, tiny (text‑xs), uppercase, tracking‑wider.
- Press effect: shadow‑inner, slight translateY(0.5px), scale(0.98).
- Hover: background darkens, border broadens.
- Disabled: opacity‑40, no shadow.

**Secondary Button (Outline):**
- Background: transparent (cream paper shows through).
- Border: 2px solid sepia (on‑surface), rounded‑none.
- Text: sepia, small caps, bold, tiny.
- Hover: fill shifts to light brick tint (primary‑container).
- Disabled: opacity‑40.

**Destructive Button:**
- Same as primary but with error red (approx. #8B0000 range) background and cream text.

### Cards / Panels

- Background: cream (surface‑container‑lowest).
- Border: fine double rule (2‑line simulation) in sepia (on‑surface) with inner outline‑variant.
- Padding: dense (p-2 to p-4).
- Elevation: none (flat), paper grain and foxing applied via pseudo‑elements.
- Internal structure: three horizontal bands — top (pharmacy name/address), middle (prescription details + illustration), bottom (date/refill info). Separation via decorative bar rule (horizontal line with central diamond or dot).
- Orientation: portrait; max‑width ~320–420px, centered.

### Navigation (Top Bar)

- A single row with pharmacy name in small caps serif, address in body style, Rx symbol left.
- Active tab: underline double rule; inactive: single rule. Items separated by vertical bar rules.
- No hamburger menu.

### Inputs / Forms

- Text input: no visible background (card inherits), single underline border (border‑bottom) in sepia. Focus: double underline or red accent.
- Label: small caps above field, left‑aligned.
- Placeholder: script font, italic, lighter sepia.
- Value: serif, sepia.
- Checkboxes/radio: replaced with hand‑drawn square border with 'X' or dot.

### Badges / Stamps

- **Circular Stamp:** Border‑2, brick red background, cream text, small serif initials, offset rotation (0.5–1.5°), shadow‑inner for press effect.
- **Prescription Number:** Large display style (condensed serif, bold, right‑aligned) preceded by "No." in same style.

### Style‑Native Primitives

- **Ornamental Bar Rule:** Horizontal line, 1px, with centered diamond/dot.
- **Double‑Rule Frame:** Outer 1px, inner 0.5px offset.
- **Foxing Overlay:** Optional noise effect for empty states.
- **Tape Residue Strip:** Optional right‑side accent.
- **Handwritten Script Line:** Styled with script, italic, faint underline.

## 10. Layout

- **Spacing Cadence:** Dense internal (p-2 to p-4), generous outer margins (p-6 to p-8). Sections separated by decorative bar rules.
- **Grid Tendency:** Single‑column centered layout. Symmetry preferred; any asymmetry is intentional (offset stamp, handwritten line).
- **Density:** High — all type is small and tightly tracked; illustration provides breathing room.
- **Section Separation:** Three horizontal bands with decorative bar rules.
- **Alignment:** Centered vertical axis on all elements. Text blocks may be left‑aligned within column if longer.
- **Breakpoints:**
  - 375px: padding reduces, font sizes drop one step, components stack.
  - 768px: restored standard padding, max‑width container centered.
  - No landscape breakpoint — style is portrait only.
- **Motion:**

motion:
  transition-duration:        200ms (default), 400ms (entrance)
  transition-timing-function: ease‑in‑out, cubic‑bezier for stamp wobble
  transition-property:        opacity, transform, background‑color, box‑shadow
  transition-delay:           none

  animation:
    paper‑simmer: opacity 0.5% fluctuation over 4s linear loop — subtle noise on background
    stamp‑appear: scale(1.03) → scale(1.0) with slight rotation, 300–400ms ease‑out, trigger: on‑load / on‑scroll‑enter
    script‑write‑on: stroke‑dashoffset animation revealing a path, 600–800ms linear, trigger: on‑load
    candle‑flicker: saturation +2% oscillating over 4s loop — very subtle warmth pulse

  transform‑at‑rest:           all elements rest at transform: none (except some stamps with perma 0.5° rotation)
  transform‑on‑interact:       button press: translateY(1px) scale(0.98), 200ms; stamp hover: rotate(0.5°) scale(1.02)
  transform‑style:             flat

## 11. Design System Notes

### 11a. Use Constraints

**Appropriate contexts:** Digital health and pharmacy apps, medical forms, vintage‑themed editorial, museum exhibit interfaces, packaging mockups for herbal/apothecary brands, board game UI requiring 19th‑century feel.

**Wrong contexts:** Modern fintech dashboards, social media apps, gaming HUD for sci‑fi/fantasy (unless retro), high‑legibility clinical apps, corporate SaaS, any interface demanding dark mode.

### 11b. Prompt Phrases

- "aged cream paper with visible grain and fine double‑rule border"
- "sepia ink letterpress texture on small serif text"
- "brick red circular stamp with offset and fade"
- "engraved botanical line art — mortar & pestle or herb sprig — no fills"
- "Rx symbol in serif, always present, positioned near prescription number"
- "tight letter‑spacing, all text small (max three size levels)"
- "warm sepia and brick red palette — no pure black or white"
- "centered vertical layout, three horizontal bands separated by decorative bar rule with diamond"

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description. Minimum 4 rules, maximum 8.

rule: Typography must evoke 19th-century apothecary — serif, small caps, script, and italic all serve distinct roles.
do:   Use old‑style serif for all functional text; small caps for pharmaceutical terms; italic for dosage directions; flourised script for patient name. Restrict type to a maximum of ~20px (text size).
avoid:Modern geometric sans‑serif typefaces (e.g., Helvetica, Inter) and any type larger than ~20px.

rule: Color palette must simulate aged paper and sepia ink — no pure white, no pure black.
do:   Keep colors low‑saturation, high contrast — dark sepia for ink, brick red for stamps, cream for paper. Use dark sepia (approx. #3E2C1B) for text, brick red (#8B3A3A) for stamps, cream (#F5E6C8) for background.
avoid:Pure black (#000000) or pure white (#FFFFFF) anywhere in the UI.

rule: Containers use a fine double‑rule border to suggest engraved card stock; drop shadows are forbidden except for letterpress simulation.
do:   Apply double‑rule border (two thin lines) to every major container, using sepia ink color. Simulate letterpress with inner shadow on text elements.
avoid:Drop shadows (box-shadow) on any element except the letterpress inner shadow; avoid single‑rule borders or missing borders.

rule: Every label/card must carry an Rx symbol and a brick‑red circular stamp as authenticity markers.
do:   Include Rx symbol (℞) in serif type near prescription number, and a red circular stamp (border‑2, brick red background, cream text, slight offset rotation 0.5–1.5°).
avoid:Omitting either element, or using stock photography / 3D renders instead of engraved‑style vector art.

rule: Surface simulation of aged paper is essential — grain, foxing, and multiply‑blended ink.
do:   Add paper grain and foxing spots via SVG noise or CSS gradient overlay. Use multiply blend mode for ink elements to simulate letterpress absorption into paper.
avoid:Applying gradients on illustrations (only paper‑aging gradients allowed) or using landscape orientation for cards/containers.

rule: Illustrations remain strict engraved line art with crosshatch shading — no fills, no photos.
do:   Keep illustrations as line art with crosshatch shading, using no fills, only stroke‑based contours.
avoid:Stock photography, 3D renders, or any photographic/gradient‑filled imagery.

rule: Layout is single‑column, centered, portrait orientation — no multiple columns, no landscape.
do:   Use a single centered column for all content; orientation must be portrait (max‑width ~320–420px).
avoid:Landscape orientation for cards/containers, or multiple‑column layouts.

rule: Animations must be slow, subtle, and mimic paper/ink behavior — no fast or bouncy transitions.
do:   Use gentle animation timings: default 200ms, entrance 400ms, with ease‑in‑out or cubic‑bezier for stamp wobble.
avoid:Animated transitions faster than 200ms or bouncy easings (except the stamp wobble, which is allowed).

### 11d. Variation Bounds

1. **Wear intensity:** Clean & precise (minimal foxing, sharp edges) ↔ Worn & chipped (heavy edge wear, dense foxing, tape residue, fold lines).
2. **Color temperature:** Warm sepia (shift +5% yellow/magenta) ↔ Cool faded brown (shift +5% olive + desaturate).
3. **Clutter level:** Sparse (only Rx + patient name + stamp) ↔ Dense (full prescription text, illustration, two stamps, notes).
4. **Boldness scale:** Bold pharmacy (thicker serifs, larger illustration, heavier rules) ↔ Delicate apothecary (thin hairline scripts, small vignette, fine borders).

### 11e. Compositional Signatures

### 11e.i — At Rest
A single pharmacy card on cream paper (surface‑container‑lowest): double‑rule border (sepia), three horizontal bands separated by decorative bar rule with diamond. Top band: pharmacy name in old‑style serif small caps, address in body serif, Rx symbol (℞) left. Middle band: patient name in flourised script italic, dosage in italic serif, prescription number "No." in bold condensed serif right‑aligned, a brick‑red circular stamp with offset rotation. Bottom band: date and refill info in small serif. Paper grain (1% noise) and very subtle foxing (two tiny brown spots) present. No drop shadows.

### 11e.ii — Maximum Expressiveness
Full composition with a botanical engraved illustration (mortar and pestle) in the middle band, left side, with crosshatch shading. Two stamps: primary red circular stamp and a secondary rectangular "DISPENSED" stamp in dark sepia. Tape residue strip on right edge (pseudo‑element, opacity 0.3). Handwritten script line for patient notes below illustration. Dense text: three prescription lines with dosage instructions. Decorative bar rules with diamond at each section boundary. Foxing increased to 6–8 spots. Edge wear simulated via subtle border roughness (SVG filter). Paper‑simmer animation active (opacity 0.5% fluctuation). All elements rest on cream background.

### 11e.iii — Data Context
The system does not adapt to modern data/status dashboards. Numeric or tabular content follows the prescription label paradigm: data values appear as text in the existing three‑band layout, using the same typographic hierarchy. A "table" is a list of drugs with quantities, each row separated by a thin rule — not a modern grid. Status is conveyed by stamp color: red for verified, dark sepia for pending. No metric cells, no signal bars, no chart surfaces. The system's visual language resists conversion to a data display; it remains a card with prescription numbers and stamps.

### 11f. Sources

Imagery coverage is sparse — only 4 institutional records verified.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** Pharmacy-Label Vintage has no documented dates, designer, foundry, or period. The identity description is absent from the forensic seed. No names are available for bold formatting.

**Verified imagery sources.** 4 URLs verified against institutional servers, distributed across:
- Wikipedia — 1 URL(s)
- Wellcome Collection, London — 1 URL(s)
- Internet Archive — 1 URL(s)
- U.S. National Library of Medicine — 1 URL(s)

Key references include no institutional records, as none were identified. Imagery coverage is sparse — only 4 institutional records verified.

**Named typefaces.** The typography of this style is attested as:
- (none attested)

**Honest gaps.** The most significant gap is the total absence of any documented information across identity, imagery, and typefaces. The honest gaps raw list is “none,” leaving no specific gaps to report. No documented gaps were recorded by the forensic pipeline.
