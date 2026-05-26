---
version: alpha
name: "IATA Boarding Pass"
description: "The IATA Boarding Pass design system translates the iconic airline paper document into a constrained, utilitarian UI primitive. Its emotional register is impersonal yet trustworthy—every pixel serves a transactional purpose."
colors:
  neutral: "#FAF8F5"
  on-surface: "#1A2A3A"
  on-surface-variant: "#999999"
  on-primary: "#FFFFFF"
  outline: "#999999"
  barcode-black: "#000000"
typography:
  display:
    fontFamily: "IBM Plex Mono"
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0em
    textTransform: uppercase
  headline:
    fontFamily: "IBM Plex Mono"
    fontSize: 19px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0em
    textTransform: uppercase
  body:
    fontFamily: "IBM Plex Mono"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 0em
    textTransform: uppercase
  label:
    fontFamily: "IBM Plex Mono"
    fontSize: 7px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 0em
    textTransform: uppercase
rounded:
  default: "0px"
  card: "0px"
  button: "0px"
  input: "0px"
  chip: "0px"
spacing:
  component-internal: "4px"
  section-internal: "8px"
  page-edge: "4px"
  gap-component: "8px"
  height-sm: "24px"
  height-md: "32px"
  height-lg: "48px"
  icon: "16px"
components:
  card-frame:
    backgroundColor: "{colors.neutral}"
    rounded: "{rounded.card}"
    padding: "4px"
  airport-code-triad:
    textColor: "{colors.on-surface}"
  barcode-block:
    backgroundColor: "{colors.barcode-black}"
    rounded: "{rounded.default}"
    width: "1in"
    height: "1in"
provenance:
  coverage_status: "sparse"
  identity_description: "This slug refers to the IATA Boarding Pass Standard – the internationally prescribed format for airline boarding passes, governed by IATA Resolution 722 (and its successors). The standard defines the layout, data fields, barcode symbology, and minimum visual requirements for machine-readable boarding passes. The visual identity described here is the generic canonical template as specified "
  manual_enrichment_required: false
  imagery_count: 4
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "en.wikipedia.org"
      count: 1
    - host: "www.icao.int"
      count: 1
    - host: "www.hugedomains.com"
      count: 1
    - host: "www.iata.org"
      count: 1
  imagery_urls:
    - url: "https://en.wikipedia.org/wiki/Boarding_pass"
      host: "en.wikipedia.org"
      institution: "Wikimedia Commons"
      confidence_original: high
    - url: "https://www.icao.int/"
      host: "www.icao.int"
      institution: "International Civil Aviation Organization (ICAO)"
      confidence_original: low
    - url: "https://www.hugedomains.com/domain_profile.cfm?d=azteccode.com"
      host: "www.hugedomains.com"
      institution: "Aztec Code promotion site"
      confidence_original: low
    - url: "https://www.iata.org/"
      host: "www.iata.org"
      institution: "IATA"
      confidence_original: low
  typefaces_attested:
    - name: "OCR-B"
      foundry: "Monotype"
      year: 1968
      google_fonts: "Roboto Mono"
      attestation: "conventional"
    - name: "Helvetica"
      foundry: null
      year: null
      google_fonts: "Inter"
      attestation: "conventional"
  flags:
    - "sparse_imagery"
    - "1_robots_disallowed_urls"
  honest_gaps:
    - "1. **IATA Resolution 722 – full text or graphic appendix**: Not publicly accessible. Resolved by acquiring a copy from IATA (cost) or locating an archived PDF in a university library."
---
# Design System: IATA Boarding Pass

## 0. Taxonomy & Identity

entity-type:        interface / system / environment
artefact-family:    ticket / pass / tag / badge
technique:          digital raster
movement-lineage:   vernacular commercial style
era:                1980s postmodern
geography:          platform-neutral
domain:             transport
formal-traits:      grid-based, utilitarian, dense
color-logic:        spot-color
typography-mode:    monospace
texture:            grainy, matte
function:           authenticate / navigate / certify
provenance:         revival / homage

## 1. Overview

The IATA Boarding Pass design system translates the iconic airline paper document into a constrained, utilitarian UI primitive. Born from the constraints of thermal printing, machine readability, and rapid passenger processing, this style is data-dense and physically grounded. Its emotional register is impersonal yet trustworthy—every pixel serves a transactional purpose.

**What makes it recognizable:** strict left-aligned grid, extreme size contrast (24pt airport codes to 6pt footnotes), oversized airport code triad (e.g., "JFK ▸ LHR"), prominent 2D barcode block (PDF417/Aztec) and linear Code 128 barcode, thermal paper grain simulation, dashed/dotted separator lines, perforation motifs, and the complete absence of decorative elements. **What breaks it:** rounded corners, gradients, shadows, script/italic typefaces, centered alignment, generous whitespace, photographic imagery, multiple accent colors per pass.

- **Era/lineage:** 1980s–1990s IATA standard, thermal receipt printing.
- **Density:** very high—every line contains a label or value.
- **Core rendering:** flat vector with simulated analog print damage (grain, misregistration, ink fade, crease).
- **Texture:** fine uniform grain (simulated via SVG feTurbulence) covering the full card surface.

## 2. Constants

Light Mode:   primary (off-white/cream thermal paper)
Dark Mode:    CONTESTED:§2.dark_mode — 3 providers say no (thermal paper paradigm);
              1 provider says variant (dark charcoal). Majority: no.
Responsive:   CONTESTED:§2.responsive — 2 providers say no (fixed card dimensions);
              1 says yes (expands on large screens); 1 says scales proportionally.
              Insufficient majority; gap marker.
States:       Default, Active (validated/scanned), Disabled (expired/used)
surface-simulation: paper — thermal paper grain simulated via SVG feTurbulence

## 2a — Interaction Model

hover-delta:        none — no hover state on printed document simulation
active-delta:       none — no press state
focus-style:        none — not applicable
transition-duration:300ms — from §10 motion section
transition-easing:  ease-out
exempt-animations:  feed-in, barcode-scan, tear-off, typewriter — named animations that must survive duration

## 3. Colors

All hex values are tagged [inferred] as no provider cited a source. For provenance-anchored fields (hex_primary, hex_secondary, hex_accent) the seed was not provided, so contestation rules apply.

- `neutral (#FAF8F5) [inferred]` — Thermal paper background (all providers agree on this approximate tone)
- `on-surface (#1a2a3a) [inferred]` — Near-black with slight cyan undertone: primary text, passenger name, flight data
- `on-surface-variant (#999999) [inferred]` — Gray: divider lines, footnotes, placeholder text (3 providers use this)
- `primary CONTESTED:§2.hex_primary — 2 providers give #0033A0 (blue), 2 give #CC0000 (red); no majority.`
- `primary-container CONTESTED:§2.hex_secondary — multiple values: #D6E4FF, #CC0000/10, etc.; no consensus.`
- `on-primary (#FFFFFF) [inferred]` — White text on accent (only 2 providers specify, but consistent)
- `outline (#999999) [inferred]` — Divider gray (unanimous among those specifying)
- `barcode-black (#000000) [inferred]` — Pure black for barcodes (unanimous)

**Accent swap rule:** Only one accent color per pass. Typical carriers use red (#CC0000), blue (#0033A0), orange (#FF6600). Swap primary and primary-container as a set when changing accent.

## 4. Typography

CONTESTED:§3.primary_typeface — 2 providers say OCR-B, 1 says IBM Plex Mono outright, 1 says Helvetica. None cite foundry or year. Gap marker.

CONTESTED:§3.secondary_typeface — 3 providers say Helvetica, 1 says Inter. None cite source. Gap marker.

CONTESTED:§3.google_fonts_substitute — values include IBM Plex Mono (for OCR-B) and Inter (for Helvetica). No cited foundry. Gap marker.

**Style rules (agreed):** All upright roman – no italics, no script. Digits always monospace, tabular figures. All‑caps for data fields (airport codes, gate, seat); mixed case for passenger name. Extreme size contrast: 20–24pt display vs. 6–7pt labels.

**Approximate size roles (unverifiable):**

- Display: 20–24pt, bold, uppercase (airport codes)
- Headline: 18–20pt, bold/regular, uppercase (passenger name)
- Body: 12–14pt, normal, uppercase (gate, seat, time)
- Label: 6–7pt, normal, uppercase (footnotes, small labels)

## 5. Elevation

Flat depth model – no shadow hierarchy. All surfaces are coplanar. Paper curl simulation (if used) is handled via texture overlays (see §8.5d), not CSS shadows. Stacking context not applicable – single-plane layout.

## 6. Spacing & Sizing

CONTESTED:§6.card_dimensions — 3 providers specify 203mm × 80mm (2:1 aspect ratio); 1 provider gives ~320px × 800px (different aspect). Majority: 203mm × 80mm.

padding:
  component-internal:  p-1 (4px)
  section-internal:    p-2 (8px)
  page-edge:           px-1 py-1 (2–4mm per side)

margin:
  between-components:  gap-2 (8px horizontal) / gap-3 (12px vertical)
  between-sections:    separated by dashed rule

component-heights:
  sm:   h-6 (24px single data row)
  md:   h-8 (32px passenger name row)
  lg:   h-12 (48px airport code row)

icon-size:       w-4 h-4 (16px)
barcode-block:   approx 1×1 inch

## 7. Borders

border-radius:  rounded-none (all elements)
border-width:   default 1px (border), emphasis 2px (seat callout)
border-style:   dashed (section dividers), dotted (perforation lines), solid (data group dividers)
border-color:   outline (#999999) for all non-accent borders
clip-path:      none (all rectilinear)

## 8. Opacity

disabled-state:     opacity-40 to opacity-50 (agreed range)
ghost/secondary:    opacity-60 (secondary data)
overlay/scrim:      opacity-15 to opacity-20 (paper curl vignette)

## 8.5. Visual Effects

### 8.5.0 — Physical Material Model

material-model:    paper

global-filter:     none

global-overlay:    Thermal paper grain via SVG feTurbulence on body::before:
                   SVG feTurbulence baseFrequency=0.65 numOctaves=3 fractalNoise,
                   mix-blend-mode: overlay, opacity-10, pointer-events:none, position:fixed, z-index:9999

rendering-flags:
  font-smoothing:  antialiased
  image-rendering: auto
  text-rendering:  auto

### 8.5d — Texture & Noise Simulation

All providers agree on the use of SVG feTurbulence for thermal paper grain, with slight differences in parameters. Synthesised:

technique:    SVG feTurbulence noise tile
parameters:   baseFrequency: 0.65 (fine grain), numOctaves: 2–3, type: fractalNoise
surface:      full card canvas (placed below content)
intensity:    moderate (barely perceptible; visible on inspection)
blend:        mix-blend-mode: overlay, opacity-5 to opacity-15 (average 10%)
color:        monochrome (black/white noise)
animation:    none
tailwind:     no native equivalent

**Optional overlays (not mandatory):**

- **Misregistration:** offset duplicate layer (1–2px) of accent-colored elements (seat callout border), mix-blend-mode: multiply.
- **Ink fade:** white horizontal streaks over barcode block, repeating linear gradient, mix-blend-mode: screen, opacity-20 to opacity-40.
- **Fold/crease line:** horizontal dashed line (border-style: dashed outline, 1px) with slight pixel bleed (box-shadow).
- **Paper curl vignette:** radial-gradient at bottom edge, mix-blend-mode: multiply, opacity-15.

Stacking order (bottom → top): Thermal paper grain → background fill → content (text, bars) → misregistration layer → ink fade → crease line → curl vignette.

## 9. Components

**Icon vocabulary**

system:       custom outline glyphs (airplane, luggage, wheelchair, priority star)
size:         w-4 h-4 (16px) — some providers use w-5 h-5; majority 16px
color:        inherits currentColor (on-surface or accent)
treatment:    pure outline, 1–2px stroke, no fill, no glow
restrictions: no filled icons, no multi-color, no stroke-width variation

**Card Frame**
- Fixed dimensions: 203mm × 80mm (scaled for screen: ~320px × 480px approximate)
- Fill: bg-neutral (#FAF8F5) with thermal grain overlay
- Border: none
- Elevation: none

**Airport Code Triad**
- Largest typographic element (e.g., "JFK ▸ LHR")
- Monospace, bold, uppercase, left-aligned
- Color: on-surface (#1a2a3a)

**Section Divider**
- Full-width horizontal dashed rule
- border-t border-dashed outline (#999999), 1px
- Appears after every data group

**Data Row**
- Two-column layout: label left (outline color), value right (on-surface)
- Label: label role (6–7pt), uppercase, gray
- Value: body role (12–14pt), uppercase
- Row height: h-6 (24px)

**Seat Callout Box**
- Container around seat and boarding group
- border-2 border-accent (contested color), fill at accent-10% opacity
- Rounded-none
- The only emphasized rectangle on the card

**Barcode Block (2D Code)**
- PDF417 or Aztec symbology
- Approx 1×1 inch, placed lower third
- Fill: barcode-black (#000000) on white quiet zone
- Human-readable number beneath in label role
- No border, no rounding, no label overlay

**Linear Barcode (Code 128)**
- Full card width, bottom edge
- Height: h-6 (24px)
- Pure black bars

**Perforation Line**
- Full-width dotted or dash-dot-dash line
- border-t-2 border-dotted outline (#999999)
- Spacing: my-3 above and below

**Priority Badge**
- Fill: accent (contested color)
- Text: on-primary (#FFFFFF), label role, bold, uppercase
- Placement: near passenger name or seat

**Footer**
- Text: "BOARDING PASS" in micro size (6–7pt), gray (#999999)
- Uppercase, tracking-wider
- Placement: bottom of card, left-aligned

## 10. Layout

- **Card orientation:** narrow portrait (2:1 aspect ratio, 203mm × 80mm)
- **Grid:** Single-column vertical layout with two-column data rows (label left, value right). Three-column variant for dense data.
- **Spacing cadence:** 8px column gap, 12px row height. No fractional spacing.
- **Density:** Maximum – no empty lines.
- **Section hierarchy:** Header (airport code + passenger name) → flight data rows → barcode area → footer.
- **Alignment:** Strict left-aligned for all content. Exception: gate and time right-aligned within their data row.
- **Section separation:** Full-width dashed horizontal rules after every group.
- **Breakpoints:** CONTESTED:§10.breakpoints — 2 providers say not applicable (fixed width); 1 says scales proportionally; 1 says landscape expansion. No majority.

**Motion (optional)**

motion:
  transition-duration:        300ms (general), 100ms (typewriter)
  transition-timing-function: ease-out, steps(1) for typewriter
  transition-property:        opacity, transform

  animation:
    feed-in:              translateY(100%) → translateY(0) over 300–600ms, trigger: on-load
    barcode-scan:         left→right linear sweep over 200–400ms, trigger: on-interaction
    tear-off:             rotation and translation over 300–800ms, trigger: on-click
    typewriter:           characters appear one at a time (25–50ms each), trigger: on-state-change

  transform-at-rest:           none
  transform-on-interact:       none (some providers suggest scale(1.02) on hover; not majority)

## 11. Design System Notes

### 11a. Use Constraints

**Appropriate for:** Digital ticket and pass experiences, airline check-in flows, boarding pass wallets, airport kiosk UIs, transportation authentication tokens, luggage tags, any document-based interface where speed and machine readability are primary.

**Wrong for:** Consumer e-commerce, social media, editorial layouts, museum/gallery interfaces, brand-expression-forward marketing sites, any context requiring whitespace or organic hierarchy.

### 11b. Prompt Phrases

- "Strict IATA grid logic with 8px column spacing and 12px row height"
- "Monospace data fields with extreme size contrast – 24pt to 6pt"
- "Thermal paper grain overlay at moderate intensity"
- "Full-width dashed section dividers in gray #999999"
- "Left-aligned data rows with right-aligned gate and time"
- "Barcode block in the lower third with visible quiet zones"
- "Perforation dotted line as the primary structural separator"
- "Single spot-color accent per pass applied to seat callout only"

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description. Minimum 4 rules, maximum 8.

rule: Hierarchy is communicated by extreme size contrast (24pt to 6pt) rather than weight or color variation. All typefaces are upright roman — no italic, no script.
do:   Airport codes at 24pt bold monospace, passenger name at 18pt, labels at 6–7pt gray #999999, all upright.
avoid:Using font weight bold for hierarchy, or italic/script for emphasis.

rule: All content is strictly left-aligned; right-aligned only for gate and time within their data row. Center alignment is never used.
do:   Left-align all data rows; gate and time right-aligned in the same row.
avoid:Centered alignment for any element.

rule: Section separators are full-width dashed horizontal rules in outline gray (#999999). No solid rules, no double lines, no decorative separators.
do:   Use border-t border-dashed outline between data groups.
avoid:Using solid rules, double lines, or any decorative divider.

rule: Surface texture is thermal paper grain only — no gradients, no drop shadows, no photographic backgrounds.
do:   Apply SVG feTurbulence noise (baseFrequency=0.65, numOctaves=3) as overlay with mix-blend-mode overlay, opacity-10.
avoid:Gradients, drop shadows, or photographic imagery on the card surface.

rule: All elements have sharp 90° corners — no rounded corners anywhere. Barcodes are raw un-styled pure black on white, no decoration.
do:   Set border-radius to 0 on all elements; barcode block with black fill and white quiet zone, no border, no label overlay.
avoid:Rounded corners, colored fills, or decorative elements on barcodes.

rule: Every row is filled with content. No generous whitespace, no empty lines.
do:   Each data row has a label and value (or a separator). Use 8px column gap, 12px row height.
avoid:Large margins, unnecessary padding, or empty rows.

### 11d. Variation Bounds

- **Clean → Grimy:** Pristine thermal print vs. smudged, creased, coffee-stained paper (all 8.5d effects at high intensity).
- **Data density:** Minimalist (only flight code, seat, gate) vs. full IATA data dump (frequent flyer number, check-in time, fare class, sequence number).
- **Accent color:** Red (#CC0000) / Blue (#0033A0) / Orange (#FF6600) – only one per pass.
- **Paper tone:** Bright white (#FFFFFF) / Aged cream (#FAF8F5) / Slightly yellow (#F4F5F7).
- **Authentic → Remix:** Faithful 1980s/90s IATA layout vs. modern airline interpretation with branded banners, minimal rounded corners on the card, contemporary sans-serif.
- **Flat → Textured:** Pure vector flat colors vs. full scanned paper simulation (grain, fold, ink fade, crease).
- **Still → Motion:** Static print vs. animated feed, barcode scan sweep, typewriter data update, perforation tear.

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts.
Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
A single boarding pass card, 203mm × 80mm, off-white thermal paper (bg-neutral #FAF8F5) with fine grain overlay. Left-aligned layout: airport code triad (e.g., "JFK ▸ LHR") in 24pt bold monospace at top, passenger name in 18pt uppercase below. Data rows (label in 6–7pt gray #999999, value in 12–14pt on-surface #1a2a3a) separated by full-width dashed rules. Seat callout box with border-2 in accent color and 10% fill. Barcode block (PDF417, approx 1×1 inch) in lower third, pure black on white. Footer "BOARDING PASS" in micro gray. No motion, no effects beyond grain.

### 11e.ii — Maximum Expressiveness
One pass with all optional effects active: animated feed-in (translateY(100%) to 0 over 600ms), barcode scan sweep (left-to-right over 400ms), typewriter for passenger name and flight data. Misregistration offset on seat callout border (1px, multiply). Ink fade streaks across barcode (white horizontal lines, screen blend, opacity-30). Horizontal crease line (dashed, 1px, with pixel bleed box-shadow). Paper curl vignette at bottom edge. Priority badge in accent color with white text. Data includes full IATA dump: frequent flyer number, fare class, sequence number, check-in time. Tear-off perforation at bottom.

### 11e.iii — Data Context
The boarding pass displays data as key-value pairs. In a validation context, a dynamic status badge appears: "VALID" in accent color on the seat callout, or a scanned checkmark. The barcode may animate with a scan sweep on successful read. No new layout structure; the existing card adapts its state (Default → Active) with a brief animation. Text remains left-aligned, size contrast preserved. No data visualizations, no tables beyond existing rows. Pure document-centric data presentation.

### 11f. Sources

Imagery coverage is sparse — only 4 institutional records verified.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** The **IATA Boarding Pass Standard**, governed by **IATA Resolution 722** and its successors, is the internationally prescribed format for airline boarding passes, attributed to the International Air Transport Association from the mid‑20th century onward. Its identity prescribes typefaces **OCR-B** and **Helvetica**, along with specific layout, data fields, barcode symbology, and minimum visual requirements for machine‑readable boarding passes as defined in the generic canonical template.

**Verified imagery sources.** 4 URLs verified against institutional servers, distributed across:
- Wikimedia Commons — 1 URL(s)
- International Civil Aviation Organization (ICAO) — 1 URL(s)
- Aztec Code promotion site — 1 URL(s)
- IATA — 1 URL(s)

Key references include no institutional records currently verified; imagery coverage is sparse — only 4 institutional records verified. No specific image repositories for the canonical template have been identified among the four total possible sources.

**Named typefaces.** The typography of this style is attested as:
- OCR-B (designed by Adrian Frutiger for Monotype 1968 — attestation: conventional) — rendered here in Roboto Mono as the closest open substitute
- Helvetica ( — attestation: conventional) — rendered here in Inter as the closest open substitute

**Honest gaps.** The most significant gap is **IATA Resolution 722 – full text or graphic appendix**: Not publicly accessible. This document is essential for verifying the standard’s exact layout and barcode specifications, but it remains unavailable without purchase. Additional gap evidence includes the lack of a publicly archived graphic appendix from IATA. These gaps would be resolved by acquiring a copy from IATA (cost) or locating an archived PDF in a university library.
