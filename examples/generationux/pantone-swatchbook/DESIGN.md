---
version: alpha
name: "Pantone Swatchbook"
description: "This style translates the obsessive cataloging of a physical Pantone swatchbook into a digital interface. It is clinical, precise, and data-driven — every color square is a specimen with its own formal identification."
colors:
  background: "#f5f4f0"
  on-surface: "#1a1a1a"
  outline: "#000000"
  surface-container-lowest: "#ffffff"
  outline-variant: "#d4d3cf"
  watermark: "#b3afab"
typography:
  display:
    fontFamily: "Helvetica Neue"
    fontSize: 18px
    fontWeight: 300
    lineHeight: 1.25
    letterSpacing: 0.1em
    textTransform: uppercase
  headline:
    fontFamily: "Helvetica Neue"
    fontSize: 24px
    fontWeight: 300
    lineHeight: 1.375
    letterSpacing: 0.025em
    textTransform: uppercase
  title:
    fontFamily: "Helvetica Neue"
    fontSize: 12px
    fontWeight: 300
    lineHeight: 1
    letterSpacing: 0.025em
    textTransform: uppercase
  body:
    fontFamily: "Helvetica Neue"
    fontSize: 12px
    fontWeight: 300
    lineHeight: 1.25
    letterSpacing: 0.03em
    textTransform: uppercase
  label:
    fontFamily: "Helvetica Neue"
    fontSize: 6px
    fontWeight: 300
    lineHeight: 1
    letterSpacing: 0.02em
rounded:
  default: "0px"
spacing:
  component-internal: "0px"
  section-internal: "16px"
  page-edge: "56px"
  gap-component: "8px"
  gap-section: "24px"
  height-sm: "56px"
  height-md: "56px"
  height-lg: "96px"
components:
  swatch-tile:
    size: "56px"
    height: "56px"
    rounded: "{rounded.default}"
  swatch-grid:
    backgroundColor: "{colors.background}"
  page-number:
    textColor: "{colors.on-surface}"
  color-family-divider-page:
    height: "60px"
    backgroundColor: "#D42B2B"
    textColor: "#ffffff"
  perforation-mark:
    backgroundColor: "{colors.outline-variant}"
provenance:
  coverage_status: "sparse"
  identity_description: "The slug `pantone-swatchbook` most plausibly refers to the physical product known as the Pantone Color Guide or Pantone Formula Guide — a fan-deck or booklet of standardized colour swatches used in graphic design and printing, published by Pantone LLC (formerly Pantone Inc.). This artefact is the primary reference for the Pantone Matching System (PMS), a proprietary colour space first intr"
  manual_enrichment_required: false
  imagery_count: 3
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "en.wikipedia.org"
      count: 1
    - host: "collection.cooperhewitt.org"
      count: 1
    - host: "www.computerhistory.org"
      count: 1
  imagery_urls:
    - url: "https://en.wikipedia.org/wiki/Pantone"
      host: "en.wikipedia.org"
      institution: "Wikimedia Foundation"
      confidence_original: high
    - url: "https://collection.cooperhewitt.org/objects/18613889/"
      host: "collection.cooperhewitt.org"
      institution: "Cooper Hewitt, Smithsonian Design Museum"
      confidence_original: low
    - url: "https://www.computerhistory.org/collections/catalog/102718432"
      host: "www.computerhistory.org"
      institution: "Computer History Museum"
      confidence_original: low
  typefaces_attested:
    - name: "Pantone cover logotype"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "conventional"
    - name: "Helvetica Neue Condensed"
      foundry: null
      year: null
      google_fonts: "Inter"
      attestation: "unknown"
    - name: "Trade Gothic"
      foundry: null
      year: null
      google_fonts: "Archivo Narrow"
      attestation: "unknown"
    - name: "Helvetica"
      foundry: null
      year: null
      google_fonts: "Inter"
      attestation: "unverified"
    - name: "Arial"
      foundry: null
      year: null
      google_fonts: "Arimo"
      attestation: "unverified"
  flags:
    - "sparse_imagery"
  honest_gaps:
    - "1. **Cover colour specification**: The exact PMS number (frequently cited as 2768 C) is unverified. The hex value is inferred from low-quality reproductions. Resolution: access to Pantone’s internal archive or a spectrophotometer reading of a factory-fresh specimen."
---
# Design System: Pantone Swatchbook

## 0. Taxonomy & Identity

entity-type:        interface / system / environment
artefact-family:    operating system / software UI
technique:          digital raster
movement-lineage:   vernacular commercial style
era:                postwar
geography:          platform-neutral
domain:             publishing / media / music
formal-traits:      grid-based, modular, clean, utilitarian
color-logic:        spot-color
typography-mode:    grotesque
texture:            matte, grainy
function:           record/label/certify
provenance:         revival / homage

## 1. Overview

This style translates the obsessive cataloging of a physical Pantone swatchbook into a digital interface. It is clinical, precise, and data-driven — every color square is a specimen with its own formal identification. The emotional register is neutral and methodical, evoking industrial design standards of the mid-20th century. Recognizability comes from the strict grid of solid-color squares separated by thin white gutters, each bearing a unique numeric code and a human-readable name set in small caps. Density is moderate (8–20 swatches per view), and the rendering philosophy simulates matte coated paper stock with a subtle noise layer, a faint emboss ridge on each swatch, and light ink gain on fine print. The analog origin is never hidden: the background is a warm off-white (#f5f4f0), a hairline rule frames the page, and a diagonal microtype watermark certifies the system. Breaking the style would mean using gradients inside swatches, decorative borders, mixing typefaces, or employing glossy surfaces.

- **Core signals:** strict grid, solid swatches, white margins around each colour, numeric labels
- **Would break:** gradients inside swatches, non-rectangular swatches, mixed fonts, full-spectrum randomness without structure, glossy or metallic effects (unless explicitly permitted)
- **Rendering philosophy:** colour is data — every swatch is a reproducible specimen

## 2. Constants

Light Mode:   yes / primary (paper-stock #f5f4f0)
Dark Mode:    no
Responsive:   yes — swatch grid columns reflow at breakpoints (2/3/4 columns) while swatch size remains fixed
States:       Default, Active (selected), Hover, Disabled
surface-simulation: paper — simulates matte coated paper stock with warm off-white substrate, subtle noise grain, and faint emboss ridge on each swatch tile

## 2a — Interaction Model

hover-delta:        shadow-lift — hover applies a subtle shadow change on swatch tiles; a 0.5pt inner highlight intensifies, outer shadow deepens by 1px; no color shift, no movement
active-delta:       inset-shadow — on press/active, the emboss ridge inverts to simulate a pressed paper surface; inset shadow intensifies, no scale change
focus-style:        color-border — a 0.5pt solid border in outline-black at 30% opacity appears on the focused swatch or interactive element; no ring, no glow
transition-duration:150ms — all state transitions are quick and subtle, matching the precise cataloging aesthetic
transition-easing:  ease-out
exempt-animations:  none

## 3. Colors

The swatch colours themselves are a dynamic dataset (spot-color values); the system chrome is defined below.

hex_background: #f5f4f0 [attested] — warm off-white, simulates matte coated paper stock
hex_on_surface: #1a1a1a [inferred] — primary text, labels, and page numbers
hex_outline: #000000 [conventional] at 90% opacity — hairline page rule, certification marks
hex_surface_container_lowest: #ffffff [inferred] — white gutter areas, swatch punch-out margins
hex_outline_variant: #d4d3cf [conventional] — subtle divider lines, perforation marks, secondary rules
hex_watermark: #b3afab [conventional] at 2% opacity — diagonal microtype certification text

## 4. Typography

display:
  font-family:      CONTESTED:§3.primary_typeface — providers gave differing grotesque families (Helvetica Neue / Univers / Akzidenz Grotesk); no foundry cited; gap marker
  font-size:        text-lg (approx 18pt)
  font-weight:      font-light
  line-height:      leading-tight
  letter-spacing:   tracking-widest
  text-transform:   uppercase
  — Section divider headings (e.g., “Reds & Pinks”)

headline:
  font-family:      CONTESTED:§3.primary_typeface (same stack)
  font-size:        text-2xl
  font-weight:      font-light
  line-height:      leading-snug
  letter-spacing:   tracking-wide
  text-transform:   uppercase

title:
  font-family:      CONTESTED:§3.secondary_typeface — no foundry cited; gap marker
  font-size:        text-xs
  font-weight:      font-light
  line-height:      leading-none
  letter-spacing:   tracking-wide
  text-transform:   uppercase
  — Swatch numeric identifiers (first line below swatch)

body:
  font-family:      CONTESTED:§3.secondary_typeface
  font-size:        text-xs (approx 6pt)
  font-weight:      font-light
  line-height:      leading-tight
  letter-spacing:   tracking-[0.03em]
  text-transform:   uppercase (simulated small caps)
  — Color names (second line below swatch)

label:
  font-family:      CONTESTED:§3.secondary_typeface
  font-size:        text-[4.5pt] (approx 4.5 pt, use custom token)
  font-weight:      font-light
  line-height:      leading-none
  letter-spacing:   tracking-[0.02em]
  — CMYK/RGB breakdown (third line), page numbers, watermark microtext

Google fonts substitute: CONTESTED:§3.google_fonts_substitute — providers diverged; none cited an authoritative substitute; gap marker

## 5. Elevation

Flat depth model — no shadow hierarchy. All surfaces are planar. The faint emboss on swatch tiles is a visual effect (see §8.5d), not a result of elevation.

- swatch-card: `shadow-inner` (simulates 0.5pt bevel/ridge — inner highlight + inner shadow)
- all other elements: `shadow-none`

## 6. Spacing & Sizing

padding:
  page-edge:           p-14 (56px, ~15mm)
  section-internal:    p-4 (16px gutter between grid and page edge)
  component-internal:  p-0 (swatch fill has no internal padding)

margin:
  between-components:  gap-2 (8px white gutters between swatches)
  between-sections:    gap-6

component-heights:
  sm:   h-14 (56px, 15mm) — default swatch size
  md:   h-14 (same, no distinct medium)
  lg:   h-24 (96px, feature swatch on divider pages)

icon-size:       Not used
avatar-size:     Not used

## 7. Borders

border-radius:
  default:     rounded-none (all components)
  thumb-tab:   rounded-full (optional semicircular tab protruding from page edge)

border-width:
  default:     border-0 (swatches have no border)
  emphasis:    border-[0.25pt] — hairline page rule, simulated via box-shadow or custom border

border-style:  border-solid (page rules), border-dashed (perforation/fold lines on dividers)

clip-path:     thumb-tab uses `clip-path: circle(50% at 100% 50%)` to produce protruding semicircle

## 8. Opacity

disabled-state:     opacity-40
ghost/secondary:    opacity-70 (color names, secondary labels)
overlay/scrim:      not used
watermark:          opacity-[0.02] (certification microtype)
hover-feedback:     not opacity-based — hover uses ring or subtle shadow change

## 8.5. Visual Effects

### 8.5.0 — Physical Material Model

material-model:    paper — matte coated paper stock, warm off-white substrate

global-filter:     sepia(0.02) contrast(0.95) brightness(1.02)
                   — simulates warm paper stock under controlled lighting; subtle warmth without
                   drifting from neutral colour evaluation (swatch accuracy must be preserved)

global-overlay:    Paper grain via body::after pseudo-element:
                   SVG feTurbulence (baseFrequency: 0.65, numOctaves: 3, fractalNoise)
                   blend: overlay, opacity-0.02, position: fixed, z-index: 9998,
                   pointer-events: none, isolation: isolate
                   The grain is barely perceptible — it exists to break the sterile digital
                   flatness, not to be noticed.

rendering-flags:
  font-smoothing:  antialiased — fine print (4.5pt breakdown) requires subpixel rendering
  image-rendering: auto — swatch fills are solid vector colour, not raster sprites
  text-rendering:  auto

### Compositing Stack (full page, bottom to top)
1. Paper fill (#f5f4f0) → 2. Paper noise (overlay, opacity-[0.02]) → 3. Certification watermark (normal, opacity-[0.02]) → 4. Swatch fills (solid spot colours) → 5. Emboss (inner shadow) → 6. Labels with ink gain

### 8.5d — Texture & Noise Simulation

**Paper grain (matte stock):**
technique:    SVG feTurbulence
parameters:   baseFrequency: 0.65, numOctaves: 3, type: fractalNoise
surface:      full-page canvas (background)
intensity:    barely perceptible (2–3% opacity)
blend:        overlay, opacity-[0.02]
color:        monochrome noise (black/white)
animation:    none
tailwind-approx: no native equivalent — use inline CSS or background-image

**Emboss on swatch tiles:**
technique:    box-shadow inset
parameters:   inset 0 0 0 1px rgba(255,255,255,0.3), inset 0 0 0 1px rgba(0,0,0,0.1)
surface:      each swatch square
intensity:    moderate (0.5pt bevel/ridge)
blend:        normal
animation:    none
tailwind-approx: custom shadow-inner

**Ink gain on fine text (label role, 4.5pt breakdown):**
technique:    text-shadow spread
parameters:   0.2px blur, same color as text, no offset
surface:      breakdown numbers only
intensity:    barely perceptible
blend:        normal
color:        matches text color
animation:    none
tailwind-approx: no native equivalent

**Misregistration (optional, on breakdown text):**
technique:    transform translate
parameters:   translate(0.1px, 0.05px) fractional offset
surface:      process-color breakdown numbers only
intensity:    barely perceptible
blend:        normal
color:        n/a (positional artifact)
animation:    none
tailwind-approx: no native equivalent

**Certification watermark:**
technique:    diagonal repeating microtext ("Pantone LLC" or equivalent)
parameters:   rotated ~45°, 2% opacity, rendered via pseudo-element or SVG
surface:      full page behind swatch grid
intensity:    barely perceptible
blend:        normal, opacity-[0.02]
animation:    none
## 9. Components

### Icon Vocabulary
system:       none — numerals and names replace all icons
size:         n/a
color:        n/a
treatment:    n/a
restrictions: no icons, emoji, pictograms, or symbols

### Image & Media Treatment
Not load-bearing in baseline style. Optional pairing: solitary object (flower, yarn, fabric) centred on spread, matched to a swatch colour. No filter or overlay; full fidelity.

### Swatch Tile (Core Primitive)
- Solid colour fill, no gradients, no internal texture
- Dimensions: 56×56px (h-14 w-14)
- Corner: rounded-none
- Border: none — white punch-out margin created by grid gap on paper background
- Elevation: shadow-inner (emboss, see §8.5d)
- Labels: centred in white gutter below fill: numeric identifier (title role), colour name (body role), optional breakdown (label role with ink gain)
- States:
  - **Default:** as described
  - **Hover:** subtle shadow darkening or thin ring-1 in outline variant
  - **Active (selected):** 2px solid outline in spot colour or check-mark overlay
  - **Disabled:** opacity-40, emboss removed, no interaction

### Swatch Grid
- CSS Grid with fixed 56px cells, gap-2
- Columns reflow: ≥768px = 4 cols; ≥560px = 3 cols; <560px = 2 cols
- Centred within page margins (p-14)
- Rows adjust to maintain 8–20 swatches per view

### Color Family Divider Page
- Full-width solid band of dominant hue (height: 40–80px)
- Heading in display role, centred or left-aligned on band
- Thumb-tab: semicircle protruding 5mm from right edge (clip-path circle)
- Dashed fold line (30mm) at top of band
- Not interactive

### Page Number
- Centred below grid, bottom of page
- Typography: label role, font-weight normal, text-8pt
- Format: "page 34"

### Certification Watermark
- Diagonal repeating microtext "Pantone LLC" at 2% opacity
- Implemented via CSS pseudo-element or SVG, behind grid
- Not interactive, purely atmospheric

### Perforation Mark
- Dashed line (3px dash, 3px gap) in outline-variant
- Placed at top of divider pages, 30mm wide, centred

## 10. Layout

**Spacing cadence:** Uniform margins (p-14 page edges), consistent gap-2 between swatches. Density controlled by grid dimensions, not padding.

**Grid tendency:** Strict rectangular matrix, equal cell size, no offsets. Columns and rows are uniform.

**Density:** Moderate — 8 to 20 swatches per view. Variation knobs allow sparse (2×4) or dense (6×8).

**Section separation:** Full-width divider pages between hue families. Each divider has a solid colour band and thumb-tab. Page numbers reset or continue across families.

**Alignment philosophy:** All text centre-aligned in gutter below swatches. Grid centred on page. Page numbers bottom-centre.

**Breakpoint behavior:**
- ≥768px: 4 columns, full margins (p-14), thumb-tabs visible
- 560–767px: 3 columns, margins reduce to p-6, thumb-tabs collapse to dots
- <560px: 2 columns, margins p-4, thumb-tabs hidden, breakdown text hidden

**Motion:**
transition-duration:        0ms (instantaneous state changes) — optional 150ms ring-fade on hover
transition-timing-function: ease-out
transition-property:        box-shadow, ring-width (if using subtle transitions)
animation:                  none — static reference object
transform-on-interact:      none (no scale, no movement)
transform-style:            flat

## 11. Design System Notes

### 11a. Use Constraints
- **Appropriate for:** Color-picker UIs in design tools, colour-data visualisation, brand-palette explorers, swatch catalogues, editorial spreads where colour is primary data, any interface requiring precise colour selection with clear labels.
- **Wrong for:** Narrative interfaces, gaming HUDs, high-interaction transactional UIs, dark-mode-first environments, contexts that require decorative gradients, rich imagery, or playful motion.

### 11b. Prompt Phrases
1. "Strict grid of equal-sized colour squares with thin white gutters"
2. "Solid fill swatches, no gradients or borders inside"
3. "Centre-aligned labels in small caps, number above name, optional CMYK in 4.5pt"
4. "Matte coated paper texture at 2% noise over warm off-white background"
5. "Faint emboss ridge on each swatch via inset box-shadow"
6. "Hairline page rule at 90% black, framed 2–3 mm from edge"
7. "Diagonal watermark microtype at 2% opacity behind the grid"
8. "Color family divider pages with solid band and thumb-tab protrusion"

### 11c. Do / Avoid Block

rule: Uniform swatch size is essential for maintaining a clean, reference-like grid.
do:   Use a uniform swatch size across the grid.
avoid: Irregular shapes or varying sizes.

rule: Swatches must be solid colour fills to ensure accurate colour representation without distraction.
do:   Keep all swatches solid fills, no internal texture.
avoid: Gradients, patterns, or textures inside swatches.

rule: Typography should be restrained to a single grotesque font family in light weight to avoid competing with the colour content.
do:   Use a single grotesque font family, light weight only.
avoid: Mixing serif, display, or bold weights.

rule: Labels must be centred below each swatch to maintain symmetry and align with the grid’s logic.
do:   Centre-align labels below each swatch.
avoid: Left-aligning labels or placing beside swatches.

rule: White margins around each swatch (punch-out effect) provide breathing room and mimic printed swatch cards.
do:   Add white margins around each colour (punch-out effect).
avoid: Eliminating the white gutter or attaching swatches directly.

rule: Physical paper simulation (grain and emboss) reinforces the printed swatchbook aesthetic.
do:   Simulate paper grain and emboss.
avoid: Glossy reflections, drop shadows, or metallic sheen.

rule: Every colour must include a numeric identifier for unambiguous reference.
do:   Include numeric identifiers for every colour.
avoid: Omitting or hiding the number.

rule: The background must be warm off-white to simulate uncoated paper stock rather than a stark digital canvas.
do:   Use warm off-white (#f5f4f0) background.
avoid: Pure white (#fff) background.

### 11d. Variation Bounds
1. **Sparse vs. Dense** — 2 columns × 4 rows (sparse) ↔ 6 columns × 8 rows (dense). Adjust swatch size inversely (16mm → 8mm).
2. **Monochrome vs. Polychrome** — All swatches from one hue family (monochrome) ↔ full rainbow spread (polychrome). Grid structure remains identical.
3. **Authentic vs. Remix** — Exact Pantone-style labelling (PMS ### C) ↔ fictional brand colour cards with invented codes.
4. **Flat vs. Textured** — Omit all paper/ink artifacts for a digital-first look (no noise, no emboss, no watermark, no ink gain) ↔ lean into print aging (dog-ears, creases, stains, heavier noise). §8.5 effects controlled entirely by this axis.

### 11e. Compositional Signatures

### 11e.i — At Rest
A single colour-family swatch grid on warm off-white #f5f4f0 background. Four columns of 56×56px solid fill squares with gap-2 (white gutter). Each swatch has an inset box-shadow for the emboss effect. Below each swatch, centred labels: numeric identifier in title role (grotesque, light, 10pt, #1a1a1a), colour name in body role (light, 8pt, #4a4a4a). Paper grain texture at 2% noise via CSS background. No divider pages, no watermark visible in focus (behind grid). Page number centred at bottom: "page 3" in label role 8pt. No motion.

### 11e.ii — Maximum Expressiveness
Three colour-family divider pages visible: red band (#D42B2B, height 60px) with heading "Reds" in display role (grotesque, light, 24pt, white) and thumb-tab semicircle protruding 5mm from right edge. Below is a 4×6 grid of red-family swatches. Next, a blue band (#0047AB, 60px) with heading "Blues" and its grid. Then a green band (#00A86B) with heading "Greens". Dashed perforation line (30mm, 3px dash, 3px gap, #A67C52) at top of each divider. The diagonal "Pantone LLC" watermark is faintly visible behind the second and third grids at 2% opacity. Emboss effect on all swatches. No motion. The composition is static and symmetrical.

### 11e.iii — Data Context
In its default state the system is already data-driven: each colour tile is a data record (numeric ID, name, optional CMYK breakdown). The primary data element is the swatch tile. Typography hierarchy: numeric identifier is title (larger, prominent), colour name is body (smaller, subdued), optional breakdown in label role (4.5pt, ink-gain effect) appears only in dense mode. No charts, bars, meters, or status indicators exist. When data density increases (e.g., 6×8 columns), swatch size shrinks to 40×40px, labels collapse to numeric ID only, and breakdown text is hidden. The surface treatment remains identical regardless of data load: warm off-white background with paper grain at 2% opacity. The system does not use status colors or semantic deltas; all colours are static reference values.


### 11f. Sources

Imagery coverage is sparse — only 3 institutional records verified.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** The **Pantone Color Guide** (often called the **Pantone Swatchbook**) is a fan-deck or booklet of standardized colour swatches first published in 1963 by **Pantone Inc.** (now **Pantone LLC**). It serves as the primary physical reference for the **Pantone Matching System (PMS)**, a proprietary colour space used in graphic design and printing.

**Verified imagery sources.** 3 URLs verified against institutional servers, distributed across:
- Wikimedia Foundation — 1 URL(s)
- Cooper Hewitt, Smithsonian Design Museum — 1 URL(s)
- Computer History Museum — 1 URL(s)

Key references include no specific institutional records. Imagery coverage is sparse — only 3 institutional records verified.

**Named typefaces.** The typography of this style is attested as:
- Pantone cover logotype ( — attestation: conventional) — rendered here as bespoke imagery — no web-font substitute
- Helvetica Neue Condensed ( — attestation: unknown) — rendered here in Inter as the closest open substitute
- Trade Gothic ( — attestation: unknown) — rendered here in Archivo Narrow as the closest open substitute
- Helvetica ( — attestation: unverified) — rendered here in Inter as the closest open substitute
- Arial ( — attestation: unverified) — rendered here in Arimo as the closest open substitute

**Honest gaps.** The exact PMS number (frequently cited as 2768 C) is unverified. The hex value is inferred from low-quality reproductions. Resolution requires access to Pantone’s internal archive or a spectrophotometer reading of a factory-fresh specimen.
