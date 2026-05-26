---
version: alpha
name: "null"
description: "A digital interface system translating Bank of England banknote aesthetics: ceremonial, symmetrical, craft-oriented, with intaglio lines, limited spot colors, paper grain, guilloché patterns, and authoritative serif/condensed typography."
colors:
  primary: "#1B2A4A"
  secondary: "#005A6E"
  accent: "#CC5500"
  surface: "#FFFDF5"
  outline: "#8C6A3A"
  error: "#D32F2F"
  on-primary: "#FFFFFF"
  on-secondary: "#FFFFFF"
  on-surface: "#1B2A4A"
  on-error: "#FFFFFF"
typography:
  display:
    fontFamily: "Helvetica Neue"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.025em
    textTransform: uppercase
  headline:
    fontFamily: "Playfair Display"
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.05em
    textTransform: uppercase
  title:
    fontFamily: "Playfair Display"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.375
    letterSpacing: 0.025em
    textTransform: uppercase
  body:
    fontFamily: "Playfair Display"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.025em
    textTransform: uppercase
  label:
    fontFamily: "Courier New"
    fontSize: 8px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "0em"
  microtext:
    fontFamily: "Playfair Display"
    fontSize: 4px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: 0.025em
    textTransform: uppercase
rounded:
  default: "0px"
  card: "0px"
  button: "0px"
  input: "0px"
  chip: "0px"
spacing:
  icon: "24px"
  component-padding: "16px"
  section-padding: "32px"
  page-padding: "32px"
  component-gap: "16px"
  section-gap: "32px"
  component-height-sm: "32px"
  component-height-md: "48px"
  component-height-lg: "64px"
components:
  button-primary:
    backgroundColor: "#1B2A4A"
    textColor: "#FFFFFF"
    rounded: "0px"
    padding: "16px"
  button-primary-hover:
    backgroundColor: "#1B2A4A"
    textColor: "#FFFFFF"
    padding: "16px"
  card:
    backgroundColor: "#FFFDF5"
    textColor: "#1B2A4A"
    rounded: "0px"
    padding: "24px"
  input:
    backgroundColor: "#FFFDF5"
    textColor: "#1B2A4A"
    rounded: "0px"
    padding: "12px"
  portrait-medallion:
    backgroundColor: "#FFFDF5"
    rounded: "0px"
    size: "96px"
provenance:
  coverage_status: "complete"
  identity_description: "The slug `banknote-design-bank-of-england` refers to the visual identity system of banknotes issued by the Bank of England, the central bank of the United Kingdom, from its founding in 1694 to the present. This encompasses the full range of design elements—typography, illustration, ornament, colour, material substrate, and production processes—across all denominational series, from handwritten not"
  manual_enrichment_required: false
  imagery_count: 5
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "en.wikipedia.org"
      count: 3
    - host: "www.bankofengland.co.uk"
      count: 2
  imagery_urls:
    - url: "https://en.wikipedia.org/wiki/Bank_of_England_note_issues"
      host: "en.wikipedia.org"
      institution: "Wikimedia Foundation"
      confidence_original: high
    - url: "https://en.wikipedia.org/wiki/Banknotes_of_the_pound_sterling"
      host: "en.wikipedia.org"
      institution: "Wikimedia Foundation"
      confidence_original: high
    - url: "https://www.bankofengland.co.uk/museum"
      host: "www.bankofengland.co.uk"
      institution: "Bank of England Museum"
      confidence_original: medium
    - url: "https://www.bankofengland.co.uk/banknotes/withdrawn-banknotes"
      host: "www.bankofengland.co.uk"
      institution: "Bank of England"
      confidence_original: high
    - url: "https://en.wikipedia.org/wiki/Britannia"
      host: "en.wikipedia.org"
      institution: "Wikimedia Foundation"
      confidence_original: high
  typefaces_attested:
    - name: "Blackletter (gothic) script style"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "attested"
    - name: "Serifed roman style"
      foundry: null
      year: null
      google_fonts: null
      attestation: "inferred"
    - name: "Bank of England wordmark lettering"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "attested"
    - name: "Custom denominational numerals"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "attested"
  flags:
    []
  honest_gaps:
    - "1. **Colour: No official colour standards published.** Pantone, RAL, Munsell, NCS values for any note are unknown. Hex values in this record are crude approximations from digital reproductions, all tagged [unverified]. Resolution requires access to internal design specifications or spectrophotometry of genuine notes."
---
## 0. Taxonomy & Identity

entity-type:        interface / system / environment
artefact-family:    CONTESTED:§0.artefact-family — providers gave: [dashboard/console/control panel / operating system/software UI / operating system/software UI / certificate/form/ledger/slip]; no majority; re-stack required
technique:          digital raster
movement-lineage:   vernacular commercial style [3 of 4 providers; accepted per majority]
era:                CONTESTED:§0.era — providers gave: [19th century / 19th century / postwar / postwar]; 2 vs 2 split; re-stack required
geography:          UK
domain:             CONTESTED:§0.domain — providers gave: [finance/insurance/admin / finance / civic/government / finance/insurance/admin]; no majority; re-stack required
formal-traits:      ornamental, symmetrical, dense [majority agree on these three; one provider omits "ornamental"]
color-logic:        spot-color
typography-mode:    CONTESTED:§0.typography-mode — providers gave: [display type / display type / serif / serif]; 2 vs 2 split; re-stack required
texture:            grainy [unanimous on "grainy"; some add tactile/matte/weathered]
function:           CONTESTED:§0.function — providers gave: [transact / authenticate / transact / (missing)]; no majority; re-stack required
provenance:         revival / homage

## 1. Overview

This design system translates the authoritative, handcrafted aesthetic of Bank of England banknotes into a digital interface language. It evokes trust, security, and meticulous craftsmanship through simulated intaglio printing, ornate geometric patterns (guilloché), machine-engraved portraiture in oval medallions, metallic foil accents, and a rigorously symmetrical frame. The emotional register is formal, traditional, and slightly ceremonial – every element feels carved rather than rendered.

The system is rooted in 19th–20th century security printing traditions: deep engraved lines, double- and triple-line borders with corner ornaments, limited spot-color palettes (maximum 4 colours), paper grain texture, and fine microtext borders. The most recognizable elements are the portrait medallion, mirrored denomination numerals (condensed bold), vertical security thread, and watermark zone. Removing the guilloché, introducing gradients outside foil patches, or using rounded corners would break the style entirely.

- Emotional tone: authoritative, trustworthy, craft-oriented, ceremonial
- Density: high around focal points; deliberate voids in watermark areas
- Core rendering philosophy: simulate intaglio with flat offset colours, heavy line weights (1.5–3pt), zero-blur drop shadows, and metallic gradients restricted to foil patches
- Surface texture: faint paper grain (feTurbulence noise) applied to all canvas fills
- Dark mode: variant – cream substrate inverts to deep marine/charcoal; paper grain carries; foil and security effects adjust contrast

## 2. Constants

- Light Mode: yes (primary)
- Dark Mode: yes [3 of 4 providers agree; one provider asserts light-mode only]
- Responsive: CONTESTED:§2.responsive — providers split 2 yes / 2 no; re-stack required
- States: Default, Hover, Active, Disabled
- surface-simulation: [paper] — The physical material that the interface surface simulates. Drives page-level texture and rendering artifacts. Paper substrate with faint grain; applied universally.

## 2a — Interaction Model

hover-delta:        opacity — opacity shifts to 0.80–0.90 on all interactive elements; no colour change, no movement
active-delta:       opacity-dim — opacity shifts to 0.65 on press; no scale or offset
focus-style:        none — keyboard focus is not visually indicated; the system treats all elements as physical printed artifacts
transition-duration:0ms — all state changes are instantaneous; no easing
transition-easing:  none
exempt-animations:  foil-shimmer, microtext-scroll — these named keyframe animations must continue even when transition-duration is 0ms

## 3. Colors

All hex values are contested – providers gave divergent palettes. See §2 fields in contestation map.

**Provisional token structure (no validated hex values):**
- primary: CONTESTED:§2.hex_primary — providers gave: [#1B2A4A / #005A6E / #005B5C / #1B3A4B]; two dark blue, two deep teal; no majority; re-stack required
- secondary: CONTESTED:§2.hex_secondary — providers gave: [#005A6E / #C85A17 / #4E2A5C / #C4652A]; no majority; re-stack required
- accent (tertiary): CONTESTED:§2.hex_accent — providers gave: [#CC5500 / #5D3A1A / #CC5500 / #6B2D5B]; two burnt orange, two plum; no majority; re-stack required
- surface (substrate): CONTESTED:§2.hex_surface — providers gave: [#FFFDF5 / #FFFDD0 / #FFF5E6 / #F5F0E8]; all cream variants but not identical; re-stack required
- outline: CONTESTED:§2.hex_outline — providers gave: [#8C6A3A / #CD7F32 / #B87333 / #8B7D6B]; no majority; re-stack required
- error: CONTESTED:§2.hex_error — providers gave: [#D32F2F / #8B0000 / #8B0000 / #8B1A1A]; two dark red, one bright red, one slightly different; re-stack required
- on- colors: some unanimity on white (#FFFFFF) for on-primary; but contingent on primary hex.

All hex values are tagged [unverified] – no cited Pantone or source references in any provider.

## 4. Typography

Primary and secondary typeface names are contested (no provider cited foundry and year). Google fonts substitutes also contested.

display (denomination numeral):
  CONTESTED:§3.primary_typeface — providers gave: [Helvetica Neue/Arial Narrow / Oswald / Franklin Gothic Condensed/Trade Gothic / Helvetica Condensed/Impact]; no foundry citations; re-stack required

headline (denomination word, e.g. “FIFTY POUNDS”):
  CONTESTED:§3.secondary_typeface — providers gave: [Times New Roman/Georgia / Playfair Display / Caslon/Times New Roman / Caslon]; no foundry citations; re-stack required

Google Fonts substitute:
  CONTESTED:§3.google_fonts_substitute — providers gave: [none / Playfair Display / Oswald or Playfair Display / Playfair Display]; re-stack required (value inconsistent across providers)

Provisional common roles (subject to typeface resolution):
  - display:           condensed sans-serif, bold, uppercase, tracking-tight
  - headline:          serif (wide), uppercase, tracking-widest, small-caps variant
  - title:             serif, uppercase, tracking-wider, small-caps
  - body:              serif (microtext) or monospace (serial numbers), uppercase, tracking-wider
  - label:             monospace or script (signature), normal case
  - microtext:         4pt minimum, repeating pattern, not meant for reading

## 5. Elevation

Flat depth model – no shadow hierarchy. Depth simulated through stroke weight and drop-shadow on intaglio elements.

- raised-ink shadow: `filter: drop-shadow(0 1px 0 rgba(0,0,0,0.15))` (all providers agree on 1px offset, 0 blur)
- foil-glow shadow: `filter: drop-shadow(0 1px 0 rgba(0,0,0,0.12))` (restricted to foil patches)
- all other surfaces: `shadow-none`
- Stacking context (unanimous): base z-0 → watermark z-10 → security thread z-20 → intaglio portrait z-30 → foil patch z-40 → microtext overlay z-50

## 6. Spacing & Sizing

Based on common 8px grid with Tailwind-like tokens:

- padding (component-internal): p-3 to p-4 (12–16px)
- padding (section-internal): p-6 to p-8 (24–32px)
- padding (page-edge): p-6 to p-8 (24–32px)
- margin (between-components): gap-4 (16px)
- margin (between-sections): gap-8 (32px)
- component-heights: sm h-8 (32px), md h-12 (48px), lg h-16 (64px)
- icon-size: w-6 h-6 (24px)
- portrait medallion: w-20 to w-24 h-24 (80–96px)
- canvas aspect ratio: 1:2 (portrait orientation, approx 85mm × 170mm)

## 7. Borders

All providers agree on:
- border-radius: `rounded-none` on all components
- border-style: `border-solid` (except security thread which may be dashed)
- border-width: default 1px, emphasis 2–4px for main frame
- double/triple-line borders implemented via nested `box-shadow` or `border-image` (no Tailwind native)
- clip-path: oval medallion `clip-path: ellipse(50% 60% at 50% 50%)` (for portrait)
- corner ornaments: heraldic motifs (crown, rose, thistle) via SVG

## 8. Opacity

- disabled-state: opacity-40 to opacity-50 (providers agree on 40–50%)
- ghost/secondary text: opacity-60 to opacity-70
- overlay/scrim: opacity-50 to opacity-60
- hover-feedback: opacity-80 to opacity-90 (or colour shift)
- selection: `rgba(primary_color, 0.25)` with white text
- scrollbar: styled thin (6px), track=surface, thumb=outline (or primary)

## 8.5 Visual Effects

### 8.5.0 — Physical Material Model

material-model:    paper — simulates the substrate of a banknote; all surfaces inherit a faint paper grain

global-filter:     none — no additional global filter applied; the natural substrate colour and grain provide the surface character

global-overlay:    Paper grain via body::before pseudo-element: SVG feTurbulence (baseFrequency=0.65, numOctaves=3, type=fractalNoise) applied as a full-page overlay; mix-blend-mode: multiply, opacity 0.08–0.12, pointer-events:none, position:fixed, z-index:9998

rendering-flags:
  font-smoothing:  antialiased — standard rendering; no pixel‑level adjustments needed
  image-rendering: auto — no pixel‑art or crisp‑edge scaling required
  text-rendering:  auto — default optimised readability

### 8.5c — Gradients & Glow (unanimous)
- Foil patch only: linear or radial metallic gradient (gold: #D4AF37 → #FFF5CC → #B8860B; silver: #C0C0C0 → #E0E0E0 → #808080)
- Animation: none (static sheen; one provider permits subtle shimmer via background-position shift)
- No text-shadow or glow effects.

### 8.5d — Texture & Noise Simulation (unanimous)
- **Paper grain**: SVG feTurbulence, baseFrequency 0.65–0.80, numOctaves 3–4, type fractalNoise, applied full-page via mix-blend-mode:multiply (light) or screen (dark), opacity 0.08–0.12.
- **Micro-perforation**: repeating radial-gradient circles (1px at 4px intervals) on small corner rectangle.
- **Ink spread (optional)**: SVG feMorphology dilate (radius 0.3px) on intaglio elements.
- **Compositing stack**: substrate → flat colours → guilloché pattern → paper grain → raised-ink elements → foil patches → microtext → watermark → security thread.

## 9. Components

All providers describe these primitives with strong unanimity:

- **Icon vocabulary**: custom engraved glyphs (crown, heraldic rose, thistle, shamrock); line-art style, no fill, inherits currentColor or foil.
- **Portrait medallion**: oval clip-path, double-line border, intaglio drop-shadow, high-contrast line art.
- **Guilloché pattern**: SVG repeating concentric/sinusoidal lines; applied as background; density variant.
- **Watermark zone**: semi-transparent lighter rectangle, ghost portrait or symbol.
- **Security thread**: vertical solid/dashed line near one edge; metallic colour; microtext optional.
- **Foil patch**: solid geometric shape with metallic gradient and thin drop-shadow; optional shimmer.
- **Colour-shift patch**: two adjacent flat-colour bands (green/purple) with 1px gap.
- **Microtext border**: repeating phrase (e.g. “BANK OF ENGLAND”) at 4pt along frame edge.
- **Serial number block**: monospace alphanumeric, tabular-nums, slightly boldened (over-ink).
- **Denomination numeral pair**: condensed bold, mirrored upper-left / lower-right.
- **Frame border system**: nested double or triple lines with corner ornaments.
- **Governor signature**: script typeface (cursive), small, lower portion.

Buttons, cards, inputs follow the same visual language (rounded-none, solid borders, intaglio shadows).

## 10. Layout

- **Spacing cadence**: dense around focal points; generous voids around watermark; 8px grid base.
- **Grid tendency**: symmetric single-column; absolute bilateral symmetry; composition centred.
- **Section separation**: via double-line borders or guilloché density change.
- **Breakpoints**: contested (see §2). All providers agree the 1:2 aspect ratio is preserved; some allow scaling, others prohibit reflow. At ≤375px, portrait may stack above denomination; at ≥768px, full layout.
- **Motion**: minimal – transition duration 0–200ms, ease-out; no decorative animation except optional foil shimmer and microtext scroll (one provider). Colour-shift animation (fading between green/purple) proposed by one provider.

## 11. Design System Notes

### 11a. Use Constraints
Appropriate for: financial dashboards, banking apps, official document viewers, authentication UIs, luxury/heritage branding, security credentials.  
Wrong for: social media, entertainment, playful interfaces, minimalist products, data-heavy dashboards needing quick scanning.

### 11b. Prompt Phrases
- “Portrait in oval medallion with deep engraved lines and raised-ink shadow”
- “Guilloché pattern repeating geometric lathe-work on background”
- “Security thread vertical dashed or solid line near edge”
- “Denomination numeral in condensed bold, mirrored diagonal placement”
- “Serif headline with wide tracking and small caps”
- “Watermark overlay lighter rectangle in primary-container”
- “Foil patch with metallic gradient and thin emboss shadow”
- “Double-line symmetric frame with heraldic corner ornaments”
- “Paper grain texture multiply blended at low opacity”
- “Microtext repeating along border at 4pt”

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description. Minimum 4 rules, maximum 8.

rule: All primary lines are rendered with heavy stroke widths (1.5–3pt) and all corners are sharp, rejecting any softening or rounding.
do:   Use heavy strokes (1.5–3pt) for primary lines; keep all corners sharp.
avoid:Blurred drop shadows or glassmorphism; rounded corners.

rule: Paper grain texture is applied universally across every surface to simulate intaglio printing.
do:   Apply paper grain universally.
avoid:Photorealistic imagery, which would contradict the grain simulation.

rule: Every composition must be absolutely symmetrical; asymmetric layouts break the security-printing heritage.
do:   Maintain absolute symmetry.
avoid:Asymmetric layouts.

rule: The palette is strictly limited to 3–4 spot colours plus a metallic foil; gradients are forbidden except on foil patches.
do:   Limit palette to 3–4 spot colours plus metallic.
avoid:Gradients outside foil patches.

rule: Denomination words use a serif typeface, while numerals use condensed bold sans-serif and are mirrored diagonally. Sans-serif must not replace serif for the word.
do:   Use serif for denomination words; mirror denomination numerals diagonally.
avoid:Sans-serif as primary type.

rule: Only one colour-shift patch is permitted; multiple patches would clutter the design.
do:   Use exactly one colour-shift patch (if any).
avoid:More than one colour-shift patch.

rule: The security thread is placed on a consistent vertical axis and remains static; no decorative animation.
do:   Place security thread on consistent vertical axis.
avoid:Animated shimmer (except the optional provision from one provider; default is static).

rule: All other decorative elements (foil, corner ornaments) are static; no animated effects.
do:   Keep all decorative elements static.
avoid:Any animated shimmer beyond the optional provision (implied by the previous convention).

### 11d. Variation Bounds
- **Palette warmth**: deep teal ↔ rich plum ↔ bronze; substrate shifts accordingly.
- **Guilloché complexity**: dense concentric curves ↔ few sweeping strokes.
- **Subject formality**: traditional monarch portrait ↔ mythical creature or landmark (always line art).
- **Circulation wear**: clean uncirculated (crisp lines, high contrast) ↔ worn (soft creases, ink fade, paper grain increase, sepia tint).

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts. Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
A single banknote face in its default, uncirculated state. The portrait medallion (oval clip-path, double-line border, intaglio drop-shadow) is centred horizontally and occupies approximately 40% of the canvas height from top. The substrate is cream (#FFFDF5 variant) with paper grain applied at opacity 0.08 via feTurbulence. The denomination numeral is condensed bold (Helvetica Condensed or substitute) at 48px, white, mirrored in the upper-left and lower-right corners. The denomination word (“FIFTY POUNDS”) is set in a serif typeface (Caslon or Playfair Display) at 18px, uppercase, tracking-widest, centred below the portrait. A double-line border (2px outer, 1px inner) frames the entire canvas with heraldic corner ornaments (crown, rose, thistle) in the primary ink colour (deep teal #005A6E). The guilloché pattern (concentric sinusoidal lines, density high) fills the background behind the portrait, using the secondary colour (burnt orange #C85A17) at 0.6 opacity. The security thread (1px dashed line) runs vertically 15px from the left edge, coloured metallic gold (#D4AF37). The watermark zone is a semi-transparent rectangle (10% opacity of primary) behind the lower-right numeral. The governor signature appears in script typeface at 8px, lower-left. All corners are sharp (rounded‑none).

### 11e.ii — Maximum Expressiveness
A complete, uncirculated banknote with all characteristic elements fully active. The composition is symmetric single‑column on 1:2 canvas. The portrait medallion is centred, with double-line border and intaglio drop-shadow (filter: drop-shadow(0 1px 0 rgba(0,0,0,0.15))). Above and below the portrait, the guilloché pattern expands to fill the entire background, rendered in two colours (secondary and accent) at 0.8 opacity. The denomination numeral pair (condensed bold, white, 64px) sits in the upper-left and lower-right corners, each with a foil patch beneath it (geometric shape, metallic gradient gold: #D4AF37 → #FFF5CC → #B8860B, thin drop-shadow). A colour-shift patch (two bands: green #2E8B57 and purple #4B0082, 1px gap) sits adjacent to the lower-left numeral. The microtext border repeats “BANK OF ENGLAND” at 4pt along all four edges inside the double-line frame. The security thread is solid metallic silver (#C0C0C0) with microtext “£50” repeating. The watermark zone is a ghost portrait (10% opaque primary) offset 10px below the main portrait. The serial number block (monospace, tabular‑nums, boldened) runs horizontally below the portrait in the centre. The governor signature appears in script at 7px, lower-left. The optional foil shimmer animation (background-position shift over 3s ease-in-out, loop) is applied to the foil patch, and microtext scroll (horizontal shift over 10s linear, loop) is applied to the microtext border. Paper grain overlay (mix-blend-mode: multiply, opacity 0.12) covers the entire canvas. No rounded corners, no blurred shadows, no photorealistic elements.

### 11e.iii — Data Context
When the system’s visual language is applied to numeric, tabular, or status-driven content (such as a financial dashboard or authentication UI), elements retain banknote logic but adapt for readability. Numeric values use the denomination numeral style: condensed bold, tracking-tight, uppercase, and mirrored where appropriate (e.g., large currency amounts mirrored at opposite corners). Tabular data (e.g., transaction history) is presented in a frame bordered by a double-line with corner ornaments. Each row is separated by a microtext line (repeating “BANK OF ENGLAND” at 4pt, opacity 0.4). Data labels are set in serif, uppercase, tracking-widest, small-caps (e.g., “AMOUNT”). Data values are set in condensed bold sans-serif, 14px, with a subtle intaglio shadow (filter: drop-shadow(0 1px 0 rgba(0,0,0,0.1))). The primary spot colour (deep teal) is used for headings and frames; secondary (burnt orange) for emphasis on high values; accent (burnt orange) for interactive status indicators. Errors are displayed using the error colour (dark red) within a colour-shift patch (two bands: red and grey) to mimic banknote security features. Status indicators (ok/warn/err) are encoded as colour shifts in small foiled patches: ok = a metallic green gradient (#2E8B57 → #D4AF37?), warn = metallic orange (#C85A17 → #D4AF37?), err = metallic red (#8B0000 → #D4AF37?). No glow, no blurred shadows, no rounded corners. The paper grain overlay remains at full opacity. The security thread is repurposed as a vertical progress bar (solid metallic line, fill proportional to completion) while retaining microtext. Overall, the data context preserves the formal, craft‑oriented, and highly structured aesthetic of the banknote, rejecting any fluid, asymmetric, or gradient‑heavy UI conventions.

### 11f. Sources

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** (Prose generation failed — see provenance block for attribution data.)

**Verified imagery sources.** 5 URLs verified against institutional servers, distributed across:
- Wikimedia Foundation — 3 URL(s)
- Bank of England Museum — 1 URL(s)
- Bank of England — 1 URL(s)

**Named typefaces.** The typography of this style is attested as:
- Blackletter (gothic) script style ( — attestation: attested) — rendered here as bespoke imagery — no web-font substitute
- Serifed roman style ( — attestation: inferred) — no Google Fonts substitute available
- Bank of England wordmark lettering ( — attestation: attested) — rendered here as bespoke imagery — no web-font substitute
- Custom denominational numerals ( — attestation: attested) — rendered here as bespoke imagery — no web-font substitute

**Honest gaps.** (No documented gaps were recorded by the forensic pipeline.)
