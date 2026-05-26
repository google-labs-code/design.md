---
version: alpha
name: "ICAO Passport Booklet Layout Standards"
description: "A digital design language translating ICAO Doc 9303 machine-readable travel document standards into identity verification interfaces and passport data page renderings. Deep navy, off-white, and gold palette with guilloche security patterns, OCR-B monospace MRZ, and laminated card simulation on fixed-aspect-ratio data pages."
colors:
  primary: "#1B2A4A"
  on-primary: "#F5F0E8"
  surface: "#F5F0E8"
  on-surface: "#1B2A4A"
  on-surface-variant: "#6B7A8D"
  outline: "#C8A951"
  outline-variant: "#D5C9B0"
  surface-container: "#F0ECE0"
  surface-container-low: "#FFFFFF"
  error: "#C42E2A"
  border-outline-variant: "#D5C9B0"
  white: "#FFFFFF"
typography:
  display:
    fontFamily: "sans-serif"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  headline:
    fontFamily: "sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.375
    letterSpacing: "0em"
    textTransform: "uppercase"
  title:
    fontFamily: "sans-serif"
    fontSize: "20px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.025em"
    textTransform: "uppercase"
  body:
    fontFamily: "sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0em"
  label:
    fontFamily: "sans-serif"
    fontSize: "12px"
    fontWeight: 300
    lineHeight: 1.25
    letterSpacing: "0.05em"
    textTransform: "uppercase"
  mrz-line:
    fontFamily: "monospace"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "0.1em"
    textTransform: "uppercase"
rounded:
  default: "6px"
  card: "6px"
  button: "0px"
  input: "2px"
  chip: "9999px"
spacing:
  component-internal: "8px"
  section-internal: "16px"
  page-edge: "16px"
  gap-component: "8px"
  gap-section: "16px"
  height-sm: "32px"
  height-md: "48px"
  height-lg: "128px"
  icon: "24px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.button}"
    padding: "8px"
  button-primary-hover:
    backgroundColor: "#1E3A8A"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.button}"
    padding: "8px"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "16px"
  input:
    rounded: "{rounded.input}"
    padding: "8px"
  input-focus:
    rounded: "{rounded.input}"
    padding: "8px"
  mrz-area:
    backgroundColor: "{colors.surface-container-low}"
    height: "80px"
  data-field:
    padding: "8px"
  signature-box:
    backgroundColor: "{colors.surface-container}"
    height: "40px"
  photo-zone:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.default}"
  hologram-element:
    size: "24px"
provenance:
  coverage_status: "complete"
  identity_description: ""
  manual_enrichment_required: false
  imagery_count: 6
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: null
    typography_map: "entries:113"
  sources:
    - host: "en.wikipedia.org"
      count: 4
    - host: "www.iso.org"
      count: 1
    - host: "www.icao.int"
      count: 1
  imagery_urls:
    - url: "https://en.wikipedia.org/wiki/Machine-readable_passport"
      host: "en.wikipedia.org"
      institution: "Wikipedia"
      confidence_original: high
    - url: "https://en.wikipedia.org/wiki/Passport"
      host: "en.wikipedia.org"
      institution: "Wikipedia"
      confidence_original: high
    - url: "https://en.wikipedia.org/wiki/OCR-B"
      host: "en.wikipedia.org"
      institution: "Wikipedia"
      confidence_original: high
    - url: "https://en.wikipedia.org/wiki/Biometric_passport"
      host: "en.wikipedia.org"
      institution: "Wikipedia"
      confidence_original: high
    - url: "https://www.iso.org/standard/31426.html"
      host: "www.iso.org"
      institution: "International Organization for Standardization (ISO)"
      confidence_original: low
    - url: "https://www.icao.int/"
      host: "www.icao.int"
      institution: "ICAO"
      confidence_original: low
  typefaces_attested:
    []
  flags:
    - "no_typography_extracted"
    - "no_colour_extracted"
  honest_gaps:
    []
---

# Design System: ICAO Passport Booklet Layout Standards

## 0. Taxonomy & Identity

entity-type:        interface / system / environment
artefact-family:    certificate / form / ledger / slip
technique:          digital raster / printmaking
movement-lineage:   vernacular commercial style / postwar design movement
era:                postwar / 2000s web / skeuo / enterprise
geography:          platform-neutral
domain:             civic / government
formal-traits:      grid-based, modular, utilitarian, informational, clean
color-logic:        spot-color
typography-mode:    grotesque / sans
texture:            matte, grainy, glossy, tactile-fiber
function:           authenticate / certify
provenance:         canonical historical source

## 1. Overview

This system translates the strict visual grammar of ICAO Doc 9303 machine-readable travel documents into a digital design language for identity verification interfaces, passport data page renderings, and travel document applications. Its emotional register is official, trustworthy, and secure – a balance between austere government utility and subtle national ornament.

The layout is heavily constrained: a fixed‑aspect‑ratio data page with the photo zone on the left, personal data fields in a two‑column right block, and a full‑width machine‑readable zone (MRZ) at the bottom. The palette is limited to deep navy, off‑white, metallic gold or red accent, and black. Typography uses a grotesque sans‑serif for human‑readable fields and a dedicated OCR‑B monospace for the MRZ.

What makes it recognizable: the guilloche background patterns, the exact position and proportions of the MRZ, the lamination overlay simulating a physical card, and the subtle paper grain. What would break it: placing artwork under the MRZ, using italics for field labels, altering the fixed row height of the MRZ characters, or removing the signature box.

- Official, bureaucratic tone
- Rooted in postwar international standardization (1970s–present)
- Medium density: highly structured, clear hierarchy, but ornamented security patterns
- Rendering philosophy: simulate physical document production – lamination, intaglio, hologram, paper grain
- Core recognition: navy‑off‑white‑gold palette, 44‑character MRZ lines, guilloche curves, 3 mm rounded corners
- If broken: any unsanctioned color, mismatched font, or missing security elements

## 2. Constants

Light Mode:   primary – off‑white paper with dark ink
Dark Mode:    no – the style is fundamentally light‑ground; if surrounding interface uses dark theme, treat the data page card as a light‑mode element with a dark shadow
Responsive:   no – fixed ID‑3 booklet dimensions (125 mm × 88 mm) at all sizes; digital representations maintain proportional scaling
States:       Default only – static physical document; no interactive states (if adapted for UI, hover/active may use slight elevation or outline change on editable fields; Focus, Error, Disabled states may apply for buttons/inputs outside the document card)

surface-simulation: coated-card
                    The physical material that the interface surface simulates. Drives page-level
                    texture and rendering artifacts in preview generation.

                    A laminated passport data page on coated card stock — satin/matte substrate with
                    lamination overlay, paper grain, and intaglio emboss effects. The surface behaves
                    as a printed security document, not a screen or flexible film.

## 2a — Interaction Model

hover-delta:        shadow-lift — slight elevation increase (shadow-sm → shadow-md) on interactive
                    elements in adapted UI contexts; static document has no hover response
active-delta:       opacity-dim — opacity shifts to 0.85 on press for adapted UI buttons
focus-style:        color-border — border-color shifts to primary (#1B2A4A) on editable fields;
                    no glow ring
transition-duration:150ms — applied to field focus and button state changes
transition-easing:  ease-out — official, restrained; no overshoot
exempt-animations:  hologram-scan, page-enter, field-validation-flash

## 3. Colors

The palette is a limited set of spot‑colour inks on a light stock. Where no consensus exists, CONTESTED markers are used.

- `primary (#1B2A4A) [attested]` – Deep Navy: cover stock, major borders, text on light backgrounds, guilloche lines
- `on-primary (#F5F0E8) [conventional]` – Off‑White: text and icons on primary backgrounds; also the page surface colour
- `secondary CONTESTED:§2.hex_secondary – providers gave [#C8A951 / #C9A84C / #B8860B / #C5A55A / #C5A15A]; all [unverified]; no majority with cited evidence; re‑stack required`
- `accent CONTESTED:§2.hex_accent – providers gave [#C42E2A / #C41E3A / #C8102E / #B22234 / #B91C1C]; all [unverified]; no majority with cited evidence; re‑stack required`
- `surface (#F5F0E8) [conventional]` – Off‑White: base page background, data page substrate
- `on-surface (#1B2A4A) [conventional]` – Navy: default text colour for data values
- `on-surface-variant (#6B7A8D) [inferred]` – Muted Navy: field labels (lighter weight, smaller)
- `outline (#C8A951) [unverified]` – Gold: thin decorative borders, official logo edges
- `outline-variant (#D5C9B0) [inferred]` – Pale Gold: subtle guidance lines, divider between data fields
- `surface-container (#F0ECE0) [inferred]` – Slightly warmer off‑white: signature box background
- `surface-container-low (#FFFFFF) [conventional]` – White: MRZ background area
- `error (#C42E2A) [conventional]` – Red: validation indicators, emergency accents

**Dark Mode Variant:** Not applicable to the document itself; if the surrounding interface has a dark theme, treat the data page card as a light‑mode element with a dark shadow.

**Cover variant colour scheme (informational):**

| Passport type | primary | secondary |
|---|---|---|
| Ordinary (blue) | #1B2A4A | gold |
| Ordinary (red) | #8B1A2B | gold |
| Diplomatic | #8B1A2B | gold |
| Service | #2D5F3E | gold |
| Official | #1C1C1C | gold |

## 4. Typography

**Human‑readable typeface:**  
`CONTESTED:§3.primary_typeface – providers gave [Helvetica / Frutiger / national sans-serif]; none cited a specific foundry or year of release; re‑stack required`

**MRZ typeface:**  
`CONTESTED:§3.secondary_typeface – providers gave [OCR‑B]; no specific foundry cited (ISO 1073‑2 is a standard, not a foundry attribution); re‑stack required`

**Google Fonts substitute for primary:**  
`CONTESTED:§3.google_fonts_substitute – providers gave [none / system sans-serif / "not available"]; no cited evidence; re‑stack required`

**Suggested fallback for rendering (pending resolution):**  
- Human‑readable: `Helvetica Neue`, `Arial`, `sans-serif`  
- MRZ: `'OCR B'`, `'Courier New'`, `monospace`

**Type scale (approximate, derived from majority of providers):**

| Role               | Font Family        | Font Size | Font Weight | Line Height | Letter Spacing | Text Transform |
|--------------------|-------------------|-----------|-------------|-------------|----------------|----------------|
| **Display**        | sans-serif        | text-3xl  | font-bold   | leading-tight | tracking-tight | uppercase |
| **Headline**       | sans-serif        | text-2xl  | font-semibold | leading-snug | tracking-normal | uppercase |
| **Title**          | sans-serif        | text-xl   | font-medium | leading-normal | tracking-wide   | uppercase |
| **Body**           | sans-serif        | text-sm   | font-semibold | leading-normal | tracking-normal | normal-case |
| **Label**          | sans-serif        | text-xs   | font-light  | leading-tight | tracking-wider  | uppercase |
| **MRZ Line**       | monospace         | text-base | font-normal | leading-tight | tracking-widest | uppercase |

- MRZ characters must be exactly 10 mm line height and 2.54 mm per character at print size; in digital, use fixed‑width font with calibrated `font-size` and `line-height`.
- Field labels: 6–8 pt, lighter weight, uppercase.
- Data values: 8–10 pt, bold enough, mixed‑case.
- Signature: allow handwritten input or a simulated wavy line; not a typeface.

## 5. Elevation

- Flat depth model – no shadow hierarchy. All elements sit on the same virtual plane.
- The only depth is the illusion of lamination and intaglio:  
  - **Intaglio emboss:** `shadow‑sm` on emblem vectors (0 1px 2px rgba(0,0,0,0.05))  
  - **Lamination overlay:** `shadow‑none` – visual depth comes from gradient + opacity  
  - **Cover elevation:** `shadow‑lg` (for digital mockup layering)

**Stacking context (for digital simulation):**

base-content:    z-0  (document image)
guilloche-bg:    z-10
lamination:      z-20
emboss-elements: z-30
hologram:        z-40
data-fields:     z-50
mrz:             z-60

## 6. Spacing & Sizing

**Document Card Dimensions**  
Width: `max-w-[354px]` (at 72 dpi); prefer relative units: `aspect-[125/88]` to lock ratio.  
At common screen density (96 dpi): 472 px × 332 px.

padding:
  component-internal:  p-2   (8 px – within field label/value pairs)
  section-internal:    p-4   (16 px – between photo, data block, MRZ)
  page-edge:           p-4   (16 px – uniform margin)

margin:
  between-components:  gap-2 (8 px – between label and value rows)
  between-sections:    gap-4 (16 px – between photo and data block, data block and MRZ)

component-heights:
  sm:   h-8   (32 px – default field row)
  md:   h-12  (48 px – signature area)
  lg:   h-32  (128 px – photo zone minimum)

icon-size:     w-6 h-6 (passport chip symbol), w-8 h-8 (national emblem)
avatar-size:   w-[140px] h-[190px] (photo zone, ≈37 mm × 50 mm)

## 7. Borders

border-radius:
  default:     rounded-md (3 mm radius ≈ 6 px)
  card:        rounded-md (data page corners)
  button:      rounded-none (print‑style corners)
  input:       rounded-sm (field boxes)
  chip/badge:  rounded-full (seal badges)

border-width:
  default:     border-2 (outer document boundary)
  emphasis:    border-4 (important divider below photo)
  mrz-border:  border-0 (MRZ has no border, just clean background)

border-style:  border-solid (primary) / border-dashed (security cut lines, signature box)

border-image:  none – guilloche implemented as background-image
clip-path:     none – all components rectangular with rounded corners

## 8. Opacity

disabled-state:     opacity-50 (greyed fields, expired/voided watermark)
ghost/secondary:    opacity-80 (background guilloche patterns)
overlay/scrim:      opacity-90 (modal backdrop, if used)
hover-feedback:     no opacity change; focus uses border color change
lamination:         opacity-5 to opacity-10 (pale yellow or blue overlay)
paper-grain:        opacity-10 (noise layer)
hologram:           opacity-50 to opacity-60
intaglio-emboss:    opacity-20 (shadow)

**Browser Chrome (digital interface only, not document itself)**

selection:
  background:  navy at 0.25 opacity
  color:       white

scrollbar:
  style:       hidden (booklet page is fixed; no overflow)

## 8.5. Visual Effects

### 8.5.0 — Physical Material Model

Declares the top-level surface simulation governing the entire page canvas.
This is distinct from component-level textures (§8.5d) — it is the global rendering layer.

material-model:    coated-card

global-filter:     none — spot-color palette requires no color manipulation;
                   UV simulation mode may optionally apply brightness(1.10) contrast(1.25)

global-overlay:    Paper grain via body::before pseudo-element:
                   SVG feTurbulence baseFrequency=0.65 numOctaves=3 fractalNoise
                   blend: overlay, opacity-10, position:fixed, z-index:1,
                   pointer-events:none
                   Lamination layer via separate pseudo-element:
                   background-color: rgba(255,245,230,0.07), mix-blend-mode: overlay,
                   applied to data page area only (excludes MRZ)

rendering-flags:
  font-smoothing:  antialiased
  image-rendering: auto
  text-rendering:  auto

### 8.5a – Color Manipulation

No CSS filters required – the palette is already spot‑color. The hologram effect (8.5c) uses a gradient, not a filter.  
For UV simulation: `brightness(110)` and `contrast(125)` may be applied.

### 8.5b – Surface Layering (Backdrop Filters)

Not used. The only layered effect is the lamination overlay, implemented as a pseudo‑element with `background-color: rgba(255, 245, 230, 0.07)` and `mix-blend-mode: overlay`.  
Lamination applies to entire data page except MRZ.

### 8.5c – Gradients & Glow

**Hologram / OVI Foil**

background-image:
  type:         linear-gradient (angled)
  role:         structural – simulates optically variable ink
  description:  Iridescent gradient cycling from gold through green to blue
  stops:        from-amber-400 via-emerald-400 to-blue-400 (approximate)
  animation:    none – static simulation; if animated, hue-rotate at 4s linear infinite
  surface:      small foil element (bird, national symbol) at 40–60% opacity

**Intaglio emboss simulation**

filter: drop-shadow(1px 1px 0 rgba(0,0,0,0.15)) – applied to emblem vectors only

### 8.5d – Texture & Noise Simulation

**Paper Grain**

name: paper-grain
technique:    SVG feTurbulence (4k noise tile as data‑URI)
parameters:   baseFrequency 0.65, numOctaves 3, type fractalNoise
surface:      full data page background
intensity:    moderate (5–10% opacity)
blend:        mix-blend-mode: overlay, opacity-10
color:        monochrome (black/grey noise)
animation:    none
tailwind-approximation: no native equivalent; use CSS `background-image: url(data:image/svg+xml,...)`

**Guilloche Pattern**

name: guilloche
technique:    SVG repeating path (sinusoidal waves or rosettes)
parameters:   custom vector design
surface:      data page background, behind data block and photo
intensity:    moderate (stroke width ~0.5 px, colour navy at 10% opacity)
blend:        multiply
color:        deep navy (#1B2A4A) at 5–15% opacity
animation:    none
tailwind-approximation: no; requires custom SVG inline or as pattern.

**Microtext Band**

name: microtext
technique:    extremely small repeating text (0.2–0.3 mm line width)
surface:      overlay on data page, within guilloche or borders
intensity:    barely perceptible – reads as a thin line
blend:        normal (solid, low contrast)
color:        surface variant or outline-variant
animation:    none

**Stitching Line**

name: binding-stitch
technique:    dashed border along left edge
parameters:   vertical dotted line; `border-l-2 border-dashed border-gray-300`
surface:      left edge of data page (near spine)
intensity:    subtle (dashed, thin)
blend:        normal
color:        gray (#A0A0A0)
animation:    none
tailwind-approximation: `border-l-2 border-dashed border-gray-300`

## 9. Components

**Icon Vocabulary**

icon-vocabulary:
  system:       custom – national emblem, passport chip symbol (e‑passport), guilloche accents
                also small icons for document type (P<), check digit indicators
  size:         w-6 h-6 (chip), w-10 h-10 (emblem)
  color:        inherited currentColor or gold accent
  treatment:    subtle inner shadow for intaglio effect; no glow
  restrictions: no flat outline icons – must have stroke weight variation

**Image/Media Treatment**

image-treatment:
  aspect-ratio: aspect-[35/45] (photo zone)
  object-fit:   object-cover
  filter:       none (full fidelity); but overlay with lamination effect
  overlay:      lamination pseudo‑element + grain (see 8.5d)
  border:       2px solid gold (secondary)
  dark-mode:    not applicable

**Primary Button** (used only in digital interface for actions like "Verify", "Print")

- Corner: `rounded-none` (print‑style)
- Fill: `bg-primary` (navy) with gold border `border-2 border-secondary`
- Hover: `hover:bg-blue-900`
- Active: `active:bg-blue-950`
- Disabled: `opacity-50`

**Data Page Card**

- Fill: `bg-surface` (off‑white) with guilloche background (via `background-image` SVG)
- Border: `rounded-md border-2 border-primary`
- Internal padding: `p-4`
- Elevation: `shadow-sm`
- Lamination: pseudo‑element with `bg-[rgba(255,245,230,0.07)] mix-blend-overlay`
- Grain: noise layer (see 8.5d)

**MRZ Area**

- Fill: `bg-surface-container-low` (white)
- No border
- Full width, height `h-20` (two lines each 10 mm)
- Typography: OCR‑B, font-bold, tracking-widest
- Gap from data block: `mt-6` or `gap-6`
- No artwork beneath: clean white

**Data Field (Label + Value)**

- Layout: grid with two columns (label left, value right) or stacked
- Label: `text-xs uppercase text-on-surface-variant font-light tracking-wider`
- Value: `text-sm text-on-surface font-semibold`
- Divider: `border-b border-outline-variant` between fields

**Signature Box**

- Fill: `bg-surface-container` (warm off‑white)
- Height: `h-10`
- Border: `border-2 border-dashed border-outline-variant`
- Internal: thin wavy line (simulated via SVG or `wave` motif)

**Photo Zone**

- Aspect ratio 35:45
- Fill: `bg-gray-100` (placeholder)
- Border: `border-2 border-secondary` (gold)
- Overlay: lamination + grain

**National Emblem / Seal**

- SVG with intaglio texture
- `drop-shadow-sm` for raised effect
- Gold color variant for official documents

**Stitching Line**

- `border-l-2 border-dashed border-gray-300` along left spine edge

**Hologram Element**

- Small rectangle (e.g., bird) with iridescent gradient (`bg-gradient-to-r from-yellow-500 via-green-400 to-blue-500`)
- Opacity: `opacity-50`
- `rounded-sm` optional
- Near photo or cover

## 10. Layout

The authoritative layout is the data page card, which must follow a fixed composition:

+----------------------------------------------+
|  Spine |   Photo Zone (35×45)   | Data block |
| stitch |   left half            | two col    |
|        |                        |__________  |
|        |                        | Signature  |
|        |                        | box        |
|        +------------------------+------------+
|            MRZ (two lines, 44 chars each)     |
+----------------------------------------------+

- **Grid tendency:** explicit two‑column split (photo : data = 1:1.2)
- **Density:** moderate; fields are spacious but not airy (2–4 mm gaps)
- **Section separation:** clear gap between data block and MRZ (6 vertical spacing)
- **Alignment:** left‑align all fields; photo top‑left aligned with data column
- **Breakpoints:**
  - **375px (mobile):** card scales proportionally (aspect‑[125/88]), text sizes reduce by one step (text-xs for labels, text-sm for data), MRZ font scales to `text-sm` but character spacing maintained.
  - **768px (tablet+):** full physical size, text at standard, optional column layout for data if space allows.
- **Motion block:**

motion:
  transition-duration:        150ms (field focus) / 300ms (page flip)
  transition-timing-function: ease (official, not bouncy)
  transition-property:        opacity, border-color, box-shadow
  transition-delay:           none
  transition-behavior:        no discrete transitions

  animation:
    page‑enter: opacity 0→1 over 300ms ease, trigger: on-load
    hologram‑scan: hue‑rotate 0→360deg over 6s linear infinite, trigger: looping (subtle)
    field‑validation‑flash: border‑color red to navy 200ms ease, trigger: on-error

  transform-at-rest:          none (all elements at transform: none)
  transform-on-interact:      scale(1.02) on hover for buttons only, 150ms ease
  transform-style:            flat
  no 3D perspective

## 11. Design System Notes

### 11a. Use Constraints

This design system is appropriate for any application that needs to present official identity documents: government portals, border control kiosks, travel document design tools, museum exhibits on passport security, or digital identity wallets. It would be wrong for social media, entertainment, marketing, or any context where perceived trustworthiness and formality are detrimental.

### 11b. Prompt Phrases

- "Official data page with guilloche background and MRZ"
- "Navy, off‑white, and gold palette for identity document"
- "OCR‑B monospace for machine‑readable zone"
- "Intaglio‑style emblem with inner shadow"
- "Laminated overlay with subtle paper grain"
- "Signature box with dashed border and wavy line"
- "Fixed‑aspect‑ratio photo zone (35:45) with gold border"
- "Spine stitching line along left edge"

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description.

rule: MRZ area is strictly formatted — clean white background, two lines of 44 OCR-B
      characters each, no decoration beneath.
do:   MRZ uses bg-surface-container-low (#FFFFFF) with no guilloche, no artwork, no
      gradient behind characters. Two lines of OCR-B monospace at text-base,
      tracking-widest, uppercase, within an h-20 container. Character spacing calibrated
      to 2.54 mm per character at print scale.
avoid:Any background pattern, guilloche stroke, background-image, or lamination overlay
      rendered behind or through the MRZ character area. Single-line MRZ, non-44-character
      lines, or proportional font substitution.

rule: Typography case is role-dependent — labels and MRZ uppercase, data values mixed-case.
do:   Field labels at text-xs uppercase tracking-wider font-light in on-surface-variant
      (#6B7A8D). MRZ text uppercase in OCR-B. Data values at text-sm normal-case
      font-semibold in on-surface (#1B2A4A).
avoid:Uppercase data values that collapse hierarchy, italic labels (never used in ICAO
      documents), or mixed-case/lowercase MRZ text.

rule: Lamination overlay simulates physical card coating on the data page but must never
      extend over the MRZ zone.
do:   Pseudo-element with bg-[rgba(255,245,230,0.07)] mix-blend-overlay applied across
      the photo zone and data block. MRZ area excluded from the lamination layer.
      Paper grain (opacity-10) on data page surfaces only.
avoid:Lamination overlay, grain texture, or any opacity treatment applied over the white
      MRZ background — the MRZ must remain absolutely clean.

rule: Color palette is strictly limited to navy, off-white, gold, red, and black.
do:   All elements rendered in primary (#1B2A4A), on-primary/surface (#F5F0E8),
      secondary gold (CONTESTED range), accent red (CONTESTED range), or black only.
      Guilloche strokes in navy at 5–15% opacity.
avoid:Any color outside the declared palette — decorative greens, pastel tints,
      gradient fills using non-palette hues, or unattested accent colors.

rule: Corner radii must not exceed 4px on interior elements — the document looks stamped,
      not playful.
do:   Data page card outer corners at rounded-md (6px ≈ 3 mm, matching ICAO spec).
      Buttons at rounded-none. Input fields at rounded-sm. Seal badges at rounded-full.
avoid:rounded-lg, rounded-xl, rounded-2xl, or any radius exceeding 4px on buttons,
      inputs, or interior document elements.

rule: Animation timing is restrained and official — linear or ease curves only.
do:   transition-timing-function: ease for field focus (150ms). Hologram hue-rotate at
      6s linear infinite. Page-enter at 300ms ease. No overshoot, no spring.
avoid:ease-in-out-back, spring(), cubic-bezier with overshoot, bounce timing, or any
      playful/bouncy easing curve.

rule: Photo zone and data block form a single clean rectangular region with aligned edges.
do:   Photo zone (aspect-[35/45]) left-aligned at top edge. Data block two-column
      right-aligned at the same top edge. Signature box below data columns. Continuous
      rectangular boundary between photo, data, and signature — no gaps in the composite
      rectangle.
avoid:Photo and data block at different vertical positions, overlapping boundaries,
      vertical gaps between the photo right edge and data block left edge, or misaligned
      top edges.

rule: Signature box must appear with dashed border and warm off-white fill for physical
      document authenticity.
do:   Signature box at bg-surface-container (#F0ECE0), h-10, border-2 border-dashed
      border-outline-variant (#D5C9B0), containing a thin wavy SVG line simulating
      a handwritten mark.
avoid:Solid border on the signature box, omitting the signature zone entirely, using a
      typeface/rendered font for the signature, or filling with white instead of the warm
      off-white.

### 11d. Variation Bounds

- **Strict ICAO vs. national flavour:** The guilloche pattern, emblem, and accent color (gold vs. red) can be changed per country; the functional zones (photo, data, MRZ) must not move.
- **Minimal vs. ornate security background:** Choose simple guilloche (single wave) or dense microtext + multiple rosettes.
- **Photo size:** Photo can occupy 35–40 mm × 45–50 mm; data block shifts accordingly.
- **Cover color:** Not part of data page, but implies passport type (blue/red ordinary, red diplomatic, green service, black official).

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts.
Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
A single data page card at aspect-[125/88] on a neutral background. The surface is off-white
(#F5F0E8) with guilloche pattern visible at 5–10% opacity in deep navy (#1B2A4A), rendered as
sinusoidal SVG strokes behind all content. Photo zone on the left half (aspect-[35/45]) with a
2px gold border (#C8A951), containing a placeholder or portrait image. Data block on the right
in a two-column grid: field labels at text-xs uppercase font-light in on-surface-variant
(#6B7A8D), values at text-sm font-semibold in on-surface (#1B2A4A), separated by border-b in
outline-variant (#D5C9B0). Signature box below the data columns: bg-surface-container
(#F0ECE0), border-2 border-dashed, h-10, with a thin wavy line. MRZ at the bottom on clean
white (#FFFFFF): two lines of OCR-B monospace, text-base, tracking-widest, uppercase, h-20.
Lamination overlay as a pseudo-element at rgba(255,245,230,0.07) with mix-blend-overlay covers
the data page area but stops above the MRZ. Paper grain (SVG feTurbulence, opacity-10) on all
non-MRZ surfaces. Spine stitching line (border-l-2 border-dashed border-gray-300) along the
left edge. Card border: rounded-md, border-2 border-primary. National emblem SVG in gold with
drop-shadow(1px 1px 0 rgba(0,0,0,0.15)) in the upper data block region.

### 11e.ii — Maximum Expressiveness
The data page card with all security features fully engaged. Dense guilloche rosette pattern
behind the photo and data block at 15% navy opacity — multiple overlapping sinusoidal paths
forming a complex security weave. Microtext band running horizontally across the midpoint as a
barely perceptible line at 0.2–0.3mm effective width in outline-variant color. Hologram element
(a small bird or national symbol, approximately 24×24px) positioned near the photo zone with an
iridescent gradient (from-amber-400 via-emerald-400 to-blue-400) at opacity-50, its hue-rotate
animation cycling at 6s linear infinite. Intaglio emboss on the national emblem with
drop-shadow(1px 1px 0 rgba(0,0,0,0.15)) producing a raised impression. Lamination overlay across
the full data page surface at opacity-10, mix-blend-overlay. Spine stitching line active. Page
enters with opacity 0→1 over 300ms ease. Paper grain texture (feTurbulence, opacity-10) on every
non-MRZ surface. The MRZ remains pristine: clean white, no overlay, no grain. The overall
impression is a high-security travel document viewed under normal lighting — layered, dense,
but legible.

### 11e.iii — Data Context
When displaying verification results, document status, or field-level data in a tabular or
status-driven layout rather than a facsimile card: the guilloche background persists at reduced
opacity (5%) to maintain the security aesthetic without impeding readability. Data rows use
alternating fills of surface (#F5F0E8) and surface-container (#F0ECE0). Each row: label at
text-xs uppercase font-light tracking-wider in on-surface-variant (#6B7A8D), value at text-sm
font-semibold in on-surface (#1B2A4A), separated by border-b border-outline-variant (#D5C9B0).
The MRZ block becomes the primary machine-readable data zone — OCR-B monospace on white, two
lines, unchanged. Validation status uses error red (#C42E2A) for failed checks and primary navy
(#1B2A4A) for confirmed fields; no green is introduced. Field-validation-flash animation
(border-color red to navy, 200ms ease) fires on error states. No glow, no drop-shadow on any
data element — flat ink-on-paper aesthetic maintained throughout. The lamination overlay is
omitted from tabular views to preserve scan clarity.

### 11f. Sources

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** The **ICAO Passport Booklet Layout Standards** were established by the **International Civil Aviation Organization** to ensure uniformity across international travel documents. Specific documented dates and designer attributions remain unrecorded within the provided identity description. This lack of specific provenance prevents the designation of a particular foundry or period of origin.

**Verified imagery sources.** 6 URLs verified against institutional servers, distributed across:
- Wikipedia — 4 URL(s)
- International Organization for Standardization (ISO) — 1 URL(s)
- ICAO — 1 URL(s)

Key references include no institutional record at any available URL. Consequently, there are no visual assets or typeface samples provided for the forensic seed analysis.

**Named typefaces.** The typography of this style is attested as:
- (none attested)

**Honest gaps.** The most significant gap is the absence of any specific documented provenance for the layout specifications. The honest gaps list contains (none). This silence in the documentation requires external verification to confirm the standard's evolution over time. No documented gaps were recorded by the forensic pipeline.
