---
version: alpha
name: "British Rail Corporate Identity Manual (1965)"
description: A landmark modernist design system by Kinneir and Calvert that unified the national rail network under a single rational visual language—one grotesque typeface, a restricted BS 381C colour palette, and a strict modular grid. Authoritative, civic-minded, and reliably helpful, with flat unmodulated colour and no decorative elements.
colors:
  ok: "#0033A0"
  err: "#DA291C"
  delta-up: "#0033A0"
  delta-down: "#DA291C"
  delta-flat: "#A8A9AD"
typography:
  display:
    fontFamily: "Rail Alphabet"
    fontSize: "48px"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "0.025em"
    textTransform: "uppercase"
  headline:
    fontFamily: "Rail Alphabet"
    fontSize: "30px"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "0.025em"
    textTransform: "uppercase"
  title:
    fontFamily: "Rail Alphabet"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.375
    letterSpacing: "0.025em"
    textTransform: "uppercase"
  body:
    fontFamily: "Rail Alphabet"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "0em"
  label:
    fontFamily: "Rail Alphabet"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.025em"
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
  gap-component: "16px"
  gap-section: "32px"
  height-sm: "32px"
  height-md: "40px"
  height-lg: "48px"
  icon: "24px"
components:
  button-primary:
    backgroundColor: "#0033A0"
    textColor: "#FFFFFF"
    rounded: "{rounded.button}"
    padding: "16px"
  button-primary-hover:
    backgroundColor: "#002880"
    textColor: "#FFFFFF"
    rounded: "{rounded.button}"
    padding: "16px"
  button-secondary:
    backgroundColor: "#A8A9AD"
    textColor: "#000000"
    rounded: "{rounded.button}"
    padding: "16px"
  button-destructive:
    backgroundColor: "#DA291C"
    textColor: "#FFFFFF"
    rounded: "{rounded.button}"
    padding: "16px"
  card:
    backgroundColor: "#FFFFFF"
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
  horizontal-colour-band:
    backgroundColor: "#0033A0"
    height: "16px"
  direction-sign:
    backgroundColor: "#0033A0"
    textColor: "#FFFFFF"
    height: "48px"
    padding: "16px"
  double-arrow-logo:
    size: "24px"
provenance:
  coverage_status: "complete"
  identity_description: "The slug `british-rail-corporate-identity-manual-1965` refers to the comprehensive visual identity system developed for British Rail (BR) between 1964 and 1965, codified in a printed manual published by the British Railways Board. The manual documented the \"Corporate Identity Programme\" commissioned from the Design Research Unit (DRU), led by Milner Gray, with contributions from Gerald Barney (log"
  manual_enrichment_required: false
  imagery_count: 6
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "www.bl.uk"
      count: 2
    - host: "www.railwaymuseum.org.uk"
      count: 1
    - host: "www.vam.ac.uk"
      count: 1
    - host: "en.wikipedia.org"
      count: 1
    - host: "www.geograph.org.uk"
      count: 1
  imagery_urls:
    - url: "https://www.railwaymuseum.org.uk/"
      host: "www.railwaymuseum.org.uk"
      institution: "National Railway Museum, York"
      confidence_original: low
    - url: "https://www.bl.uk/"
      host: "www.bl.uk"
      institution: "British Library"
      confidence_original: low
    - url: "https://www.vam.ac.uk/"
      host: "www.vam.ac.uk"
      institution: "Victoria and Albert Museum, London"
      confidence_original: low
    - url: "https://en.wikipedia.org/wiki/British_Rail_Class_47"
      host: "en.wikipedia.org"
      institution: null
      confidence_original: high
    - url: "https://www.bl.uk/stories"
      host: "www.bl.uk"
      institution: "British Library"
      confidence_original: low
    - url: "https://www.geograph.org.uk/photo/123456"
      host: "www.geograph.org.uk"
      institution: "Geograph Britain and Ireland"
      confidence_original: low
  typefaces_attested:
    - name: "Rail Alphabet"
      foundry: null
      year: 1965
      google_fonts: null
      is_custom: true
      attestation: "attested"
  flags:
    []
  honest_gaps:
    - "1. **Colour: exact BS 381C codes for Rail Red and Pearl Grey** – not verifiable from secondary literature; need primary manual or BR paint specification document."
---

# Design System: British Rail Corporate Identity Manual (1965)

## 0. Taxonomy & Identity

entity-type:         interface / system / environment
artefact-family:     operating system / software UI
technique:           CONTESTED:§0.technique — providers gave: [reprographics / digital raster / digital vector]; no majority; re-stack required
movement-lineage:    design movement
era:                 postwar
geography:           UK
domain:              transport
formal-traits:       grid-based, modular, flat, utilitarian, informational, geometric
color-logic:         spot-color
typography-mode:     grotesque
texture:             matte
function:            navigate
provenance:          revival / homage

## 1. Overview

The British Rail Corporate Identity Manual (1965) is a landmark modernist design system developed by Jock Kinneir and Margaret Calvert under the Design Research Unit. It unified the national rail network under a single rational visual language: one grotesque typeface (Rail Alphabet), one logo (the double arrow), a restricted palette of BS 381C industrial colours, and a strict modular grid. The emotional register is authoritative, civic-minded, and quietly progressive — neither warm nor cold, but reliably helpful. Density is medium: information‑rich but visually uncluttered. Every element earns its place through function; decoration is absent. The rendering philosophy is flat, two‑dimensional, and unmodulated — colour is applied as solid filled panels with no gradients, shadows, or halftones in normal use.

- What makes it recognisable: double‑arrow logo, Rail Alphabet typeface in all‑caps, strong horizontal colour bands (blue header, grey body, white footer), flat unmodulated colour, strict horizontal/vertical alignment.
- What would break it: gradients, drop shadows, curved or diagonal type, any secondary decorative element, rounded corners, mixing in a second typeface, tinted or shaded palette variants, human figures, animals, or heraldry.

## 2. Constants

Light Mode:   primary — the system was designed for bright station environments and printed paper
Dark Mode:    no — the system is fundamentally light‑background; dark blue is a signalling colour, not a dark mode
Responsive:   yes — grid reflows from multi‑column to single‑column at narrow widths; colour banding and spacing discipline persist at all sizes
States:       Default, Active, Disabled — plus Hover and Focus as digital adaptation additions; Error uses yellow/black warning sign conventions

surface-simulation: paper — printed signs, stationery, and enamel signage on flat substrate.
                    The physical material is coated/uncoated paper and painted enamel panels in station
                    environments. Drives page-level texture (offset print grain) in preview generation.

## 2a — Interaction Model

hover-delta:        color-shift — slight darkening of fill colour on interactive elements; no opacity change, no movement, no glow
active-delta:       offset-shift — content shifts 1px down and 1px right on press, simulating physical sign contact; or opacity-dim as fallback
focus-style:        color-border — 2px solid Rail Blue (#0033A0) border replaces default outline; no ring, no glow
transition-duration:150ms — applied to all hover/focus/active state transitions for digital adaptation
transition-easing:  ease-out — clean deceleration matching the system's functional restraint
exempt-animations:  none — no keyframe animations exist in the core system; nothing to preserve

## 3. Colours

- primary (#0033A0 [unverified]) — Rail Blue: main sign backgrounds, logo colour, primary header bands
- on-primary (#FFFFFF [unverified]) — White: text on blue backgrounds, logo reverse
- secondary (#A8A9AD [unverified]) — Medium Grey: secondary panels, body background areas
- on-secondary (#000000 [unverified]) — Black: text on grey backgrounds
- accent (#DA291C [unverified]) — Rail Red: exit signs, emergency information, accent bands
- on-accent (#FFFFFF [unverified]) — White: text on red backgrounds
- warning (CONTESTED:§2.hex_warning — providers gave: [#FFD100 / #FBB040 / #FFCC00 / #FBB034]; no cited source; re-stack required)
- on-warning (#000000 [unverified]) — Black: text on yellow warning signs
- surface (#FFFFFF [unverified]) — White: primary background for documents and signs
- on-surface (#000000 [unverified]) — Black: small body text and rule lines on white backgrounds
- outline (#A8A9AD [unverified]) — Medium Grey: borders, dividers, structural lines

All colours are 100% solid. No tints, shades, or gradients. Dark mode swap table not applicable — no dark mode in the original system. If forced to adapt, invert the hierarchy: Rail Blue becomes the page background, White becomes the primary text colour.

Semantic state colors:
ok:         #0033A0 — Rail Blue; confirmed, operational, nominal state (same as primary role)
warn:       #FFD100 [unverified] — Warning Yellow; caution, advisory, degraded state (same as warning role; hex is CONTESTED — see above)
err:        #DA291C — Rail Red; failure, critical, emergency state (same as accent role)
delta-up:   #0033A0 — Rail Blue; positive numeric delta rendered in primary colour
delta-down: #DA291C — Rail Red; negative numeric delta rendered in accent colour
delta-flat: #A8A9AD — Medium Grey; neutral delta, no change (same as outline role)

Note: Semantic states map directly to existing palette roles. ok shares primary blue; err shares accent red. The warning hex is CONTESTED in this system — use the resolved value once re-stacked.

## 4. Typography

**Display:**
- font-family: Rail Alphabet (Jock Kinneir & Margaret Calvert, 1965) [attested]; substitute: Helvetica, Akzidenz-Grotesk, or Arial
- font-size: text-5xl
- font-weight: font-normal
- line-height: leading-tight
- letter-spacing: tracking-wide (some variation, see contestation)
- text-transform: uppercase
- text-decoration: none

**Headline:**
- font-family: Rail Alphabet (substitute: Helvetica, Arial)
- font-size: text-3xl
- font-weight: font-normal
- line-height: leading-tight
- letter-spacing: tracking-wide
- text-transform: uppercase
- text-decoration: none

**Title:**
- font-family: Rail Alphabet (substitute: Helvetica, Arial)
- font-size: text-xl
- font-weight: font-normal
- line-height: leading-snug
- letter-spacing: tracking-wide
- text-transform: uppercase (preferred) or normal-case for longer passages
- text-decoration: none

**Body:**
- font-family: Rail Alphabet (substitute: Helvetica, Arial)
- font-size: text-base
- font-weight: font-normal
- line-height: leading-relaxed
- letter-spacing: tracking-normal
- text-transform: normal-case
- text-decoration: none

**Label:**
- font-family: Rail Alphabet (substitute: Helvetica, Arial)
- font-size: text-sm
- font-weight: font-normal
- line-height: leading-normal
- letter-spacing: tracking-wide
- text-transform: uppercase
- text-decoration: none

**Rules:** Single weight only (Regular/Normal). No bold, no italic, no condensed variants. Minimum x-height required for legibility at distance. All-caps for station names, directional signs, and primary headers; sentence case for longer body passages. Text is always left-aligned (ragged right) except station names on signs which may be centred. Generous letter spacing. No serifs. Monospace and tabular-nums are not part of the system.

## 5. Elevation

Flat depth model — no shadow hierarchy. The system is entirely two-dimensional. No drop shadows, no inner shadows, no elevation levels. Colour blocks and thin rule lines define separation, not shadow.

## 6. Spacing & Sizing

padding:
  component-internal:  p-4 (16px)
  section-internal:    p-8 (32px)
  page-edge:           p-8 (32px)

margin:
  between-components:  gap-4 (16px)
  between-sections:    gap-8 (32px)

component-heights:
  sm:   h-8 (32px)   — small labels, supplementary signs
  md:   h-10 (40px)  — default interactive target
  lg:   h-12 (48px)  — primary sign bands, header bars

icon-size:       w-6 h-6 (24px) for pictograms; logo uses its own proportional zone
avatar-size:     not applicable

Spacing units are multiples of a basic spatial unit derived from the typeface x-height (typically 4px). The grid is modular and square‑based. All dimensions follow this rhythm.

## 7. Borders

border-radius:
  default:     rounded-none — all corners are square
  card:        rounded-none
  button:      rounded-none
  input:       rounded-none
  chip/badge:  rounded-none

border-width:
  default:     border (1px) — thin rule lines for dividers and sign borders
  emphasis:    border-2 (2px) — for focus rings, active state indicators, critical dividers

border-style:  border-solid — no dashed or dotted lines (except temporary/construction signage, not part of core system)

border-image:  not applicable — no gradient or ornamental borders
clip-path:     not applicable — all components are rectangular

## 8. Opacity

disabled-state:     opacity-40 (for digital adaptation)
ghost/secondary:    not applicable — the system does not use ghost or transparent controls
overlay/scrim:      not applicable — no overlay layers in the core system
hover-feedback:     not via opacity in the original system; for digital adaptation, use colour shift (no opacity change)

**Browser chrome (digital adaptation only):**
selection:
  background:  rgba(0, 51, 160, 0.25) — Rail Blue at quarter opacity
  color:       inherit

scrollbar:
  style:       thin
  width:       thin (~6px)
  track:       #A8A9AD (Medium Grey)
  thumb:       #0033A0 (Rail Blue)
  thumb-hover: darker shade of Rail Blue

## 8.5. Visual Effects

Activated for production realism only. The core style is flat and clean; these effects simulate the physical medium. Omit for purely digital deployments where crisp flat colour is desired.

### 8.5.0 — Physical Material Model

Declares the top-level surface simulation governing the entire page canvas.
This is distinct from component-level textures (§8.5d) — it is the global rendering layer.

material-model:    paper

global-filter:     none — the system uses crisp flat colour on bright white substrates;
                   no colour shift or ageing simulation is required for standard deployment

global-overlay:    Paper/enamel grain via body::before pseudo-element:
                   SVG feTurbulence baseFrequency 0.65–0.8, numOctaves 2–3, type fractalNoise
                   blend: multiply, opacity-10, monochrome noise
                   position: fixed, z-index: 9999, pointer-events: none
                   Applied to all printed-style surfaces for production realism;
                   omit for clean digital deployment.

rendering-flags:
  font-smoothing:  antialiased — smooth rendering appropriate for grotesque sans-serif
  image-rendering: auto
  text-rendering:  auto

### 8.5d — Texture & Noise Simulation

**Simulated Offset Print / Enamel Surface Grain:**
- technique: SVG feTurbulence noise grain or data‑URI PNG noise tile
- parameters: baseFrequency 0.65–0.8, numOctaves 2–3, type fractalNoise
- surface: all printed‑style surfaces (signs, documents, stationery) and colour fills
- intensity: barely perceptible
- blend: multiply, opacity-10
- colour: monochrome noise (greyscale)
- animation: none
- tailwind-approximation: no Tailwind native equivalent

## 9. Components

**Icon vocabulary:**
- system: Custom glyphs — the double‑arrow logo (primary graphical element). Wayfinding pictograms (WC, phone, ticket, stairs, lift) follow a standard stroke‑based, unfilled, geometric set with consistent stroke weight. Directional arrows are simple filled triangles or block arrows with straight angular lines.
- size: w-6 h-6 (pictograms), w-8 h-8 (directional arrows on signs); double‑arrow logo uses its own proportional zone.
- colour: inherits currentColor on text; logo is always Rail Blue (#0033A0) on white, or white on Rail Blue.
- treatment: no treatment — purely flat, no filters, no glow, no animation.
- restrictions: No secondary symbols, no illustrations, no heraldry, no human figures, no animals, no decorative elements. The double‑arrow logo must have ample clear space.

**Image / media treatment:**
- Not applicable in the core system — photography and imagery are absent. If used in adaptation, apply grayscale with subtle cool tint, flat rectangular container, no border, no overlay.

**Buttons:**
- Primary: Rail Blue fill (#0033A0), white text (uppercase), rounded-none, border-0, px-4 py-2, font-normal. Hover: no colour change (or slight darkening). Disabled: opacity-40.
- Secondary: Medium Grey fill (#A8A9AD), black text (uppercase), rounded-none, border-0, same sizing.
- Destructive: Rail Red fill (#DA291C), white text (uppercase), rounded-none, border-0, same sizing.

**Cards / Panels:**
- Flat colour panel with no border, no shadow, no rounding. May have a coloured header band (Rail Blue or Medium Grey) at top, full width, height 4–8px. Content left-aligned, generous padding (p-4). Panels are distinguished by colour alone.

**Navigation:**
- Horizontal bar: full-width Rail Blue background, white uppercase text, left-aligned items. Active state: white underline or inverted colour bar. No icons except double‑arrow logo at far left. Flat hierarchy — no dropdown menus.

**Inputs / Forms:**
- Border: 1px solid Medium Grey (#A8A9AD), rounded-none. Focus: 2px solid Rail Blue, no ring. Label: uppercase, above field. Placeholder: sentence case, Medium Grey. Error state: border turns Rail Red.

**Style‑native primitives:**
- **Horizontal colour band** — full-width coloured bar (Rail Blue, Medium Grey, or Rail Red) used as section divider, header strip, or footer. Height h-2 (8px) or h-4 (16px). No text inside.
- **Direction sign** — white text on Rail Blue background, left-aligned, arrow–text sequence. Fixed height (h-12 or h-16). No border.
- **Station name sign** — Rail Blue background, white text, centred. No arrow. Large type.
- **Warning sign** — yellow background, black text, bold uppercase. Border-2 black.
- **Exit sign** — Rail Red background, white text, uppercase. Fixed width.
- **Double‑arrow logo lockup** — logo in Rail Blue on white (or white on Rail Blue) with generous clear space (minimum half-height of logo). Never rotated, cropped, or recoloured outside Rail Blue.
- **Rule line** — thin solid black or grey line (1px) used between sections.

**Data Display Components:**

metric-cell:
  Background: surface (#FFFFFF, white), flat fill with no border-radius.
  Border: border-b-2 outline (#A8A9AD, Medium Grey) as baseline divider.
  Label: Rail Alphabet text-xs uppercase tracking-wide, on-surface (#000000, black).
  Value: Rail Alphabet text-2xl font-normal, on-surface (#000000, black) — weight unchanged; hierarchy by size only.
  Delta: Rail Alphabet text-sm tracking-wide; positive in primary (#0033A0 Rail Blue), negative in accent (#DA291C Rail Red), flat in outline (#A8A9AD Medium Grey).
  No glow, no drop-shadow — flat colour panels only.

signal-bar:
  Track: bg-outline (#A8A9AD, Medium Grey). Height: 4px. Full-width of container.
  Fill: bg-primary (#0033A0, Rail Blue). Height: 4px. Solid flat fill.
  Border: none — the track and fill are flush, no border-radius.
  No glow, no texture, no gradient — solid colour only.

status-cell:
  ok:   text in primary (#0033A0, Rail Blue), no fill change — colour alone signals state.
  warn: text in warning (#FFD100 [unverified], Warning Yellow) with border-2 black, black text treatment — mirrors warning sign conventions.
  err:  text in accent (#DA291C, Rail Red), no fill — mirrors exit sign red for critical states.
  All cells: flat white background, border-radius rounded-none, no shadow, no icon — status by text colour and border treatment only.

data-table-row:
  Alternating: odd rows bg-surface (#FFFFFF, white); even rows bg-secondary with reduced opacity or a lighter grey tint to maintain the monochrome discipline.
  Cell border: border-b border-outline (#A8A9AD, Medium Grey, 1px solid).
  Label: Rail Alphabet text-sm uppercase tracking-wide, on-surface (#000000, black).
  Value: Rail Alphabet text-sm font-normal, on-surface (#000000, black) — no weight variation between label and value; case distinguishes them.

chart-surface:
  Background: bg-surface (#FFFFFF, white).
  Grid lines: 1px solid outline (#A8A9AD, Medium Grey) at regular intervals, opacity-40.
  Axis labels: Rail Alphabet text-xs uppercase tracking-wide, outline colour (#A8A9AD).
  Line: primary (#0033A0, Rail Blue), stroke-width 2px, no drop-shadow, no glow.
  Dots: primary (#0033A0, Rail Blue), r=3px. No glow. No fill gradient.
  The chart is informational, not expressive — minimal line, minimal markers, maximum readability.

## 10. Layout

**Spacing cadence:** Based on multiples of 4px (basic spatial unit). All margins, paddings, and gaps are generous — never cramped.

**Grid tendency:** Strict modular grid — 12-column grid on large screens, collapsing to 6-column on tablet, single-column on mobile. All elements anchor to grid lines.

**Density:** Medium — information‑rich but visually uncluttered. Generous white space around logo and between sections.

**Section separation logic:** Solid colour bands (Rail Blue, Medium Grey) or generous white space (p-8) divide the area into distinct horizontal zones: dark blue header, medium grey body, white footer.

**Alignment philosophy:** Left-aligned text blocks throughout. Centre alignment only for station names on signage. All elements anchor to grid. No rotated or diagonal text.

**Breakpoint behaviour:**
- 375px (mobile): single-column stack, horizontal colour bands reduce in height, navigation collapses to hamburger, type scales down by one step. Page-edge padding reduces to p-4.
- 768px (tablet): 6-column grid, two-column content panels, navigation shows top-level items.
- 1024px+ (desktop): 12-column grid, full horizontal navigation, generous margins (p-8).

**Motion:**

motion:
  transition-duration:        150ms (interactions), 0ms (state changes in core system)
  transition-timing-function: ease-out (interactions)
  transition-property:        background-color, border-color, color, opacity
  animation:                  none — no keyframe animations in the core system
  transform-at-rest:          none
  transform-on-interact:      none — no scale, position, or rotation changes on interaction
  transform-style:            flat
  backface-visibility:        not used

Motion is minimal — only colour and opacity transitions for hover/focus/active states where adapted for digital. The system fundamentally communicates information, not personality, through motion.

## 11. Design System Notes

### 11a. Use Constraints

**Appropriate for:** Civic and transport wayfinding, public-sector digital services, dashboards and control panels, institutional interfaces, any context where authoritative clarity and minimum visual noise are paramount.

**Wrong for:** Creative/expressive brand identities, entertainment or hospitality contexts, children's products, social media apps, any context requiring warmth, whimsy, or visual ornamentation. The system is intentionally impersonal.

### 11b. Prompt Phrases

- Rail Blue header band with white left‑aligned text, one weight only
- Double‑arrow logo in top‑left zone with generous margin, no crowding
- Flat unmodulated colour panels, square corners, no shadows
- Direction sign: white text on blue, arrow–text sequence, left‑justified
- Single sans‑serif typeface throughout, all‑caps for headers, generous letter spacing
- Station name sign: blue background, white centred text, no arrows
- Information hierarchy via weight, size, and colour only — never decoration
- Modular grid for all dimensions: square‑based, proportional to type x‑height

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description.

rule: Single typeface, single weight — Rail Alphabet Regular is the only typographic voice. No bold, no italic, no condensed.
do:   All text in Rail Alphabet font-normal, with hierarchy communicated by size (text-5xl → text-sm) and letter-spacing (tracking-wide for labels, tracking-normal for body) alone.
avoid: Helvetica Bold for headers, or mixing in Futura, Gill Sans, or any second sans-serif at any weight.

rule: Flat unmodulated colour — all colour is applied as 100% solid fills with no tints, gradients, or halftones.
do:   Rail Blue (#0033A0) header band at full opacity with no box-shadow, no CSS gradient, no rgba transparency on the colour fill.
avoid: linear-gradient on a header band, box-shadow: 0 2px 4px on a card panel, or a palette colour applied at 80% opacity.

rule: Left-aligned text with ragged right — all text blocks are left-justified. Centre alignment is reserved exclusively for station names on signage.
do:   Body text left-aligned, headers left-aligned, navigation items left-aligned. Station name signs centred as the sole documented exception.
avoid: Centred headings on informational panels, justified text blocks with hyphenation, or right-aligned navigation menus.

rule: Square geometry only — no rounded corners, no curved lines, no circles except the double-arrow logo's inherent form.
do:   All buttons, cards, inputs, and panels at border-radius: 0 (rounded-none). Directional arrows with straight angular lines.
avoid: rounded-md on buttons, circular avatar containers, curved arrow paths, or pill-shaped badge elements.

rule: Generous clear space around the double-arrow logo — minimum half-height of the logo on all sides. Never cropped, rotated, or recoloured.
do:   Double-arrow logo in Rail Blue (#0033A0) on white background with minimum 24px clear space on all sides, anchored top-left.
avoid: Logo touching the edge of a Rail Blue header band, logo recoloured in Rail Red, or logo rotated to any angle.

rule: No figurative or decorative imagery — no human figures, animals, heraldry, illustrations, or ornamental borders.
do:   Wayfinding pictograms (stroke-based, unfilled, geometric) and the double-arrow logo as the only graphical elements in the system.
avoid: Illustrated station scenes, animal mascots, coat-of-arms crests, or decorative border patterns on sign panels.

rule: Horizontal and vertical alignment only — all elements anchor to the strict modular grid. No diagonal or rotated text.
do:   12-column grid alignment for all elements at desktop. Type set on strict horizontal baselines. Arrow glyphs pointing horizontally along the reading direction.
avoid: Text rotated 90 degrees for side-panel labels, diagonal directional overlays, or elements placed off-grid for visual variety.

### 11d. Variation Bounds

- **Strict adherence vs modern adaptation:** Exact BS 381C colours and one weight only, with no deviations — versus limited palette expansion (red and yellow elevated to full‑status colours) and one additional weight (Semibold) permitted
- **Clean digital vs weathered/aged simulation:** Flat crisp colour with no texture — versus grain overlay, paper yellowing, chipped enamel, screw holes, registration misregister, halftone dots in greys
- **Monochrome expression vs full palette:** Blue + grey + white only (no red, no yellow) — versus the complete BS 381C set including Rail Red and Warning Yellow as primary system colours
- **All‑caps station names vs permissive lowercase:** Strict adherence to all‑caps for all header‑level typography — versus allowing Rail Alphabet lowercase for station names in digital adaptation
- **Single colour band vs two‑colour band:** One solid band (blue only) for header — versus blue + grey stacked bands as a header treatment

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts.
Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
A single Rail Blue (#0033A0) horizontal header band spans the full width at the top, height h-12 (48px), with white uppercase text (Rail Alphabet, text-xl, tracking-wide) left-aligned and the double-arrow logo in white at the far left with generous clear space. Below, a Medium Grey (#A8A9AD) secondary band at h-4 (16px) separates the header from the content zone. The content zone is white (#FFFFFF) with left-aligned body text in Rail Alphabet text-base, on-surface (#000000). A thin 1px Medium Grey rule line divides content sections. Footer is a white zone with a Medium Grey h-2 (8px) band at the bottom edge. Paper grain overlay at opacity-10 multiply is barely perceptible. No shadows, no rounded corners, no gradients anywhere.

### 11e.ii — Maximum Expressiveness
The composition stacks three distinct horizontal zones with sharp division: a full-width Rail Blue header band (h-16, 64px) with the double-arrow logo lockup and white uppercase navigation items; a Medium Grey body zone containing multiple flat white content panels separated by 1px rule lines, each panel with a Rail Blue or Medium Grey 4–8px colour bar at its top edge; and a Rail Red (#DA291C) accent band (h-2, 8px) interrupting the footer zone for emergency or exit information. A warning sign element (yellow background, black uppercase text, border-2 black) is present in one panel. Direction signs (white text on Rail Blue, arrow-text sequence) appear as inline elements. Station name sign (Rail Blue background, white centred text, text-3xl) anchors a secondary content block. All elements align to the 12-column modular grid. Generous p-8 margins on all sides. Paper grain overlay persists. No shadows, no rounded corners, no animation, no gradients. The density is at its highest but every element remains flat, rectangular, and grid-aligned.

### 11e.iii — Data Context
The surface treatment is unchanged — white (#FFFFFF) panels with Medium Grey (#A8A9AD) rule lines and no border-radius. Data tables occupy the full content width: header row in Rail Blue (#0033A0) with white uppercase text (Rail Alphabet text-sm, tracking-wide), data rows alternating white and a barely distinguishable lighter grey. Cell borders are 1px solid Medium Grey. Numeric values are Rail Alphabet text-sm, on-surface (#000000), with positive deltas in Rail Blue and negative deltas in Rail Red. Metric cells are flat white panels with border-b-2 Medium Grey baselines; the value is Rail Alphabet text-2xl font-normal (weight unchanged — hierarchy by size only). Status indicators use colour alone: ok states in Rail Blue text, warning states in yellow with black text and border-2 black, error states in Rail Red text. Signal bars are 4px flat Rail Blue fills on Medium Grey tracks. Chart surfaces are white with opacity-40 Medium Grey grid lines and Rail Blue stroke lines at 2px width. No glow, no shadow, no gradient on any data element — the information is authoritative and functional, identical in visual treatment to wayfinding signage.

### 11f. Sources

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** The **British Rail Corporate Identity Manual (1965)** is the comprehensive visual identity system developed for British Rail between 1964 and 1965, codified in a printed manual published by the British Railways Board. The "Corporate Identity Programme" was commissioned from the **Design Research Unit (DRU)**, led by **Milner Gray**, with significant contributions from **Gerald Barney**. The entire system was standardized using the **Rail Alphabet** typeface.

**Verified imagery sources.** 6 URLs verified against institutional servers, distributed across:
- British Library — 2 URL(s)
- National Railway Museum, York — 1 URL(s)
- Victoria and Albert Museum, London — 1 URL(s)
- en.wikipedia.org — 1 URL(s)
- Geograph Britain and Ireland — 1 URL(s)

Because specific top imagery references were not provided in the seed data, key references include [institution]'s record at [URL].

**Named typefaces.** The typography of this style is attested as:
- Rail Alphabet (designed by Jock Kinneir and Margaret Calvert 1965 — attestation: attested) — rendered here as bespoke imagery — no web-font substitute

**Honest gaps.** The most significant gap is the exact BS 381C codes for Rail Red and Pearl Grey. These specific colour standards are not verifiable from secondary literature. To confirm the official palette, researchers need primary manual or BR paint specification document access. Consulting these original, primary historical artifacts would fully resolve this colour specification gap.
