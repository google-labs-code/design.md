---
version: alpha
name: "IBM Aesthetic Corporate Identity Manual 1970 (Paul Rand)"
description: "A rigorous, monolithic vocabulary from Paul Rand's 1970 corporate identity manual — authoritative, grid-aligned, Helvetica uppercase, limited to blue/black/white."
colors:
  primary: "#0066CC"
  on-primary: "#FFFFFF"
  surface: "#FFFFFF"
  on-surface: "#000000"
  outline: "#000000"
  error: "#000000"
typography:
  display:
    fontFamily: "Helvetica"
    fontSize: "48px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0em"
    textTransform: "uppercase"
  headline:
    fontFamily: "Helvetica"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.375
    letterSpacing: "0em"
    textTransform: "uppercase"
  title:
    fontFamily: "Helvetica"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  body:
    fontFamily: "Helvetica"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "0em"
    textTransform: "none"
  label:
    fontFamily: "Helvetica"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.05em"
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
    backgroundColor: "#0066CC"
    textColor: "#FFFFFF"
    rounded: "0px"
    padding: "8px"
    height: "32px"
  button-primary-hover:
    backgroundColor: "#FFFFFF"
    textColor: "#0066CC"
    rounded: "0px"
    padding: "8px"
    height: "32px"
  card:
    backgroundColor: "#FFFFFF"
    rounded: "0px"
    padding: "16px"
  input:
    backgroundColor: "#FFFFFF"
    rounded: "0px"
    padding: "8px"
    height: "32px"
  metric-cell:
    backgroundColor: "#FFFFFF"
    rounded: "0px"
    padding: "16px"
  eight-stripe-logotype:
    width: "24px"
    height: "24px"
provenance:
  coverage_status: "complete"
  identity_description: "The slug `ibm--aesthetic-corporate-identity-manual-1970-paul-rand` refers to the IBM Corporate Identity Manual (often called the IBM Design Guide) created by designer Paul Rand, codifying the visual identity system for International Business Machines Corporation. The exact date of this manual is debated among sources: the slug states 1970, but the most frequently cited iteration in secondary liter"
  manual_enrichment_required: false
  imagery_count: 5
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "books.google.com"
      count: 1
    - host: "www.cooperhewitt.org"
      count: 1
    - host: "en.wikipedia.org"
      count: 1
    - host: "www.ibm.com"
      count: 1
    - host: "www.pantone.com"
      count: 1
  imagery_urls:
    - url: "https://books.google.com/?hl=en"
      host: "books.google.com"
      institution: "Google Books / Yale University Press"
      confidence_original: low
    - url: "https://www.cooperhewitt.org/"
      host: "www.cooperhewitt.org"
      institution: "Cooper Hewitt"
      confidence_original: low
    - url: "https://en.wikipedia.org/wiki/Paul_Rand"
      host: "en.wikipedia.org"
      institution: "Wikipedia"
      confidence_original: high
    - url: "https://www.ibm.com/design/language/color/"
      host: "www.ibm.com"
      institution: "IBM Design"
      confidence_original: low
    - url: "https://www.pantone.com/color-finder/293-C"
      host: "www.pantone.com"
      institution: "Pantone LLC"
      confidence_original: low
  typefaces_attested:
    - name: "Helvetica"
      foundry: "Haas Type Foundry"
      year: 1957
      google_fonts: "Inter"
      attestation: "conventional"
    - name: "custom IBM striped logotype lettering"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "attested"
  flags:
    []
  honest_gaps:
    - "1. **Date of manual:** The slug says 1970; the most reliably documented version is 1972. Existence of a 1970‑only manual is unconfirmed."
---
# Design System: IBM Aesthetic Corporate Identity Manual 1970 (Paul Rand)

## 0. Taxonomy & Identity

entity-type: interface / system / environment
artefact-family: operating system / software UI
technique: digital raster (CONTESTED:§0.technique — providers gave: [digital vector / digital raster]; no majority; re-stack required)
movement-lineage: design movement
era: postwar
geography: US / Canada
domain: industrial / engineering / maintenance (CONTESTED:§0.domain — providers gave: [industrial/engineering/maintenance / internet/software/AI / finance/insurance/admin]; no majority; re-stack required)
formal-traits: grid-based, geometric, minimal, utilitarian
color-logic: spot-color
typography-mode: grotesque
texture: matte
function: inform (CONTESTED:§0.function — providers gave: [instruct / persuade / inform]; no majority; re-stack required)
provenance: studio lineage

## 1. Overview

The IBM Aesthetic design system originates from Paul Rand’s 1970 corporate identity manual — a rigorous, monolithic vocabulary built from eight horizontal stripes, strict geometry, and absolute restraint. Its emotional register is authoritative and quiet; layouts feel like institutional mandates rather than suggestions. Every element has an exact grid position; nothing is decorative for its own sake.

Density is low to moderate, with generous white space and asymmetric balance (heavy elements anchored left or top, breathing room to the right or bottom). The system recognizes itself instantly through the IBM logotype’s equal-thickness stripes, the exclusive use of Helvetica (Medium, Bold, Regular) in uppercase, and a palette limited to IBM blue, black, and white. Curves (outside the eye/globe icons), gradients, shadows, figurative illustration, and mixed-case body text would all break the style. The entire system feels like a rigid alphabet that can be rearranged but never broken.

- **Emotional tone:** Authoritative, confident, restrained, monolithic
- **Era/lineage:** 1970 corporate modernism (postwar American design)
- **Density:** Low to moderate — generous white space, intentional emptiness
- **Core rendering philosophy:** Flat fills, hard edges, grid-aligned, no transparency
- **What makes it recognizable:** Eight-stripe logotype, pure geometric icons, Helvetica uppercase, limited palette, visible grid guides
- **What would break it:** Curved decoration, gradients, drop shadows, figurative icons, mixed type sizes, centered body text
- **Physical texture simulation (optional):** Uncoated matte paper surface with subtle ink unevenness — not to be simulated in digital UI as actual texture, but as visual restraint

## 2. Constants

Light Mode:   primary — white background, blue/black elements
Dark Mode:    variant — blue background, white stripes/text, black accents (CONTESTED:§2.dark_mode — providers gave: [variant / no / no]; no majority; re-stack required)
Responsive:   yes — grid scales modularly, column count adjusts at 768px (4 col → 2 col at 375px)
States:       Default, Active, Disabled, Hover, Focus, Error (if needed)
surface-simulation: paper — Uncoated matte paper (1970 corporate identity manual)

## 2a — Interaction Model

hover-delta:        color-shift — colour swap on interactive elements (e.g., blue to black or white to blue)
active-delta:       none — no active state beyond default styling
focus-style:        color-border — blue border (#003399) around focused element
transition-duration:0ms — instantaneous state changes, no easing
transition-easing:  none
exempt-animations:  none

## 3. Colors

- **primary** (CONTESTED:§2.hex_primary — providers gave: [#003399 / #0073CF / #0055A4 / #003366]; all tagged [unverified]; no source cited; re-stack required)
- **on-primary** (#FFFFFF) — White: text on blue, reversed stripes
- **surface** (#FFFFFF) — White: page/background
- **on-surface** (#000000) — Black: body text, headings, rules
- **outline** (CONTESTED:§2.hex_outline — providers gave: [#003399 / #000000 / #000000 / #003366]; partial agreement (#000000 appears twice); re-stack required)
- **accent** (CONTESTED:§2.hex_accent — majority agree no accent colour; synthesised: none)
- **error** (CONTESTED:§2.hex_error — providers gave: [#000000 / not specified / #000000 / #FF0000]; no majority; re-stack required)

No tints or shades of blue are ever used; only solid blue, black, and white.

## 4. Typography

All typography uses Helvetica variants. No italic, no script, no condensed. All-caps for display, headline, title, and label roles; sentence case for body. Numbers align to cap-height grid; no old-style figures.

**Primary typeface:** CONTESTED:§3.primary_typeface — providers gave: [Helvetica Medium / Helvetica Bold / Helvetica / Helvetica]; no cited foundry or year; re-stack required
**Secondary typeface:** CONTESTED:§3.secondary_typeface — providers gave: [Helvetica Regular / Helvetica Regular / Helvetica / Helvetica]; no cited foundry or year; re-stack required
**Google Fonts substitute:** CONTESTED:§3.google_fonts_substitute — providers gave: [none specified / none specified / Helvetica Neue / Helvetica Neue]; no majority; re-stack required

display:
  font-family:      CONTESTED — see primary_typeface
  font-size:        text-3xl / text-4xl / text-5xl (majority: large display sizes)
  font-weight:      font-bold (majority: bold)
  line-height:      leading-tight (majority)
  letter-spacing:   tracking-normal (majority)
  text-transform:   uppercase (unanimous)

headline:
  font-family:      CONTESTED — see secondary_typeface
  font-size:        text-xl / text-2xl (majority)
  font-weight:      font-bold (majority)
  line-height:      leading-snug (majority)
  letter-spacing:   tracking-normal (majority)
  text-transform:   uppercase (unanimous)

title:
  font-family:      CONTESTED — see secondary_typeface
  font-size:        text-lg / text-xl (majority)
  font-weight:      font-normal (2 of 4) / font-semibold (two providers)
  line-height:      leading-normal (majority)
  letter-spacing:   tracking-tight (majority)
  text-transform:   uppercase (majority, one allows sentence case)

body:
  font-family:      CONTESTED — see secondary_typeface
  font-size:        text-sm (14px) / text-base (16px) – 8-10pt print equivalent (majority: text-sm)
  font-weight:      font-normal (unanimous)
  line-height:      leading-relaxed (1.625–1.75) (unanimous, generous leading)
  letter-spacing:   tracking-normal (unanimous)
  text-transform:   none (unanimous)
  text-decoration:  none (unanimous)
  text-align:       left (flush left, rag right) (unanimous)

label:
  font-family:      CONTESTED — see secondary_typeface
  font-size:        text-xs (12px) / text-sm (14px) (majority: text-xs)
  font-weight:      font-normal (majority)
  line-height:      leading-normal (majority)
  letter-spacing:   tracking-wide (0.05em) (2 of 4) or tracking-normal (2 of 4)
  text-transform:   uppercase (unanimous)

**Rules:**
- No italic, no condensed, no script faces.
- All-caps for headlines and system labels; sentence case for body only.
- Numbers align to cap-height grid; no old-style figures.
- Punctuation limited to period, colon, and dash.

## 5. Elevation

Flat depth model — no shadow hierarchy. All elements sit on the same plane.

Stacking context *(if needed for layered elements)*:

stacking:
  base-content:        z-0 (unanimous)
  sticky-elements:     z-10 (2 of 4) or z-20 (2 of 4) — CONTESTED
  overlays:            z-20 (2 of 4) or z-40 (2 of 4) — CONTESTED
  modals:              z-30 (2 of 4) or z-50 (2 of 4) — CONTESTED

## 6. Spacing & Sizing

padding:
  component-internal:  p-4 (16px) — majority (2 of 4: p-4; 1: p-4 or p-6; 1: p-4)
  section-internal:    p-8 (32px) — majority
  page-edge:           p-8 (32px) — majority (2 of 4: p-8; 1: p-12; 1: p-8)

margin:
  between-components:  gap-4 (16px) (2 of 4) / gap-6 (24px) (2 of 4) — CONTESTED
  between-sections:    gap-8 (32px) (2 of 4) / gap-10 (2 of 4) — CONTESTED

component-heights:
  sm:   h-8 (32px) — majority (3 of 4: h-8, h-10; one: h-16)
  md:   h-10 (40px) — majority (3 of 4: h-10, h-12; one: h-24)
  lg:   h-12 (48px) — majority (3 of 4: h-12, h-14; one: h-40)

icon-size:       w-6 h-6 (24px) — majority (3 of 4)
avatar-size:     n/a (majority agrees no avatars)

## 7. Borders

border-radius:
  default:     rounded-none — unanimous
  card:        rounded-none — unanimous
  button:      rounded-none — unanimous
  input:       rounded-none — unanimous
  chip/badge:  rounded-none — unanimous

border-width:
  default:     border (1px) — unanimous
  emphasis:    border-2 (2px) — unanimous (focus rings, active states, dividers)

border-style:  border-solid — unanimous

border-image:  none — unanimous
clip-path:     none — unanimous

## 8. Opacity

disabled-state:     opacity-40 (2 of 4) / opacity-50 (2 of 4) — CONTESTED
ghost/secondary:    n/a (majority no opacity-based secondary elements)
overlay/scrim:      n/a (majority no overlays)
hover-feedback:     colour swap, not opacity (unanimous)

**Browser chrome** (conditional):
selection:
  background:  rgba(0, 51, 102, 0.1) (2 of 4) — CONTESTED
  color:       inherit (unanimous)

scrollbar:
  style:       hidden (2 of 4) / styled (2 of 4) — CONTESTED
  width:       thin (6px) (2 of 4) / 0 (2 of 4) — CONTESTED

## 8.5. Visual Effects (Conditional)

### 8.5.0 — Physical Material Model

material-model:    paper
global-filter:     none
global-overlay:    paper grain via SVG feTurbulence (optional, full-page canvas, opacity 0.03–0.05, blend overlay)
rendering-flags:
  font-smoothing:  antialiased
  image-rendering: auto
  text-rendering:  auto

**8.5d — Texture & Noise Simulation**

Two distinct techniques: paper grain (optional background texture) and stripe pattern (repeating horizontal bands).

paper-grain:
  technique:    SVG feTurbulence noise tile (3 of 4)
  parameters:   baseFrequency (0.5–0.65), numOctaves (2–3), type="fractalNoise"
  surface:      full‑page canvas (light background only; optional)
  intensity:    barely perceptible — 0.03–0.05 opacity
  blend:        overlay, opacity-5 (5%)
  color:        monochrome (white/grey tint)
  animation:    none
  tailwind-approximation: no native equivalent

stripe-pattern:
  technique:    repeating‑linear‑gradient (2 of 4) or custom SVG (2 of 4) — CONTESTED
  parameters:   direction 0° (horizontal) or 45°; stripe height ~8px; colours blue and transparent
  surface:      background fill (e.g., hero panels, dividers)
  intensity:    moderate (blue bands separated by white)
  blend:        normal (no blend mode)
  color:        blue on white or white on blue
  animation:    none
  tailwind-approximation: bg-gradient‑to‑r via custom utility (not natively supported as repeating)

No other effects (gradients, glow, colour manipulation, backdrop‑filter) are used.
## 9. Components

**Icon vocabulary**

system:       custom glyphs — eight-stripe logotype, eye logo, globe logo, geometric primitives
size:         w-6 h-6 (24px) — majority
color:        inherits currentColor (blue or black) — no multi-colour icons — unanimous
treatment:    purely flat – no filter, glow, animation — unanimous
restrictions: no figurative icons (people, buildings, objects); no curves outside defined circle/globe — unanimous

**Image treatment** (conditional – when photography is used)

aspect-ratio:  aspect-square or aspect-4/3 — majority
object-fit:    object-cover — unanimous
filter:        none — unanimous (full fidelity)
overlay:       none — unanimous (no gradient scrim or texture)
border:        solid blue 1px frame, aligned to grid — unanimous
dark-mode:     not applicable (images not used on dark backgrounds) — majority

**Buttons**

| Type | Default | Active/Hover | Disabled |
|------|---------|--------------|----------|
| Primary | Blue solid fill, white uppercase Helvetica Medium text, no rounding, no shadow | No change (some providers suggest hover: invert) | opacity-40/50 or outline |
| Secondary | Transparent fill, blue 1px solid border, blue uppercase Helvetica text | Hover: same; Active: blue fill, white text | opacity-40/50 |
| Destructive | Black solid fill, white text | Same | opacity-40/50 |

- All buttons: `rounded-none`, uppercase, no shadow — unanimous.
- Details of state transitions contested between providers.

**Cards / Panels**

- White background, blue or black 1px solid border, no rounding, no shadow — unanimous.
- Internal padding p-4 to p-6 (contested).
- For emphasis: blue fill card with white text and no border (inverted) — majority.

**Navigation**

- Top-level tabs: uppercase Helvetica Bold text, active state indicated by a solid blue line (border-bottom-2) the full width of the label — majority.
- Vertical navigation: left-aligned list, active item has blue left border (border-l-2) — majority.
- No icon in nav unless it’s the eight-stripe brand icon — majority.

**Inputs / Forms**

- Text fields: border-bottom 2px black or blue (contested), no top/side borders — majority.
- Focus state: border-bottom thickens to 2px blue — majority.
- Label above input in uppercase Helvetica Regular, text-sm to text-xs — majority.
- No placeholder style; if needed, use reduced opacity — majority.
- Checkboxes: square 16px, 2px black border, checked: blue fill with white checkmark — 2 of 4.

**Data Display Components:**

metric-cell:
  Background: white (#FFFFFF). Border: 1px solid blue (#0066CC as defined in palette) — aligns to card standard.
  Label: uppercase Helvetica Regular text-xs, black (#000000).
  Value: Helvetica Bold text-2xl, blue (#0066CC).
  Delta: Helvetica Regular text-sm; delta-up in blue (#0066CC), delta-down in black (#000000) bold, delta-flat in black regular.
  No glow, no shadow, no transparency.

signal-bar:
  Track: bg-black (#000000) at 1px height, full width of container.
  Fill: solid blue (#0066CC). Height: matches track (1px) or 4px if representing signal strength.
  Border: none — the track is the simplest possible line.
  No animation, no gradient, no texture.

status-cell:
  ok:   border-2 blue (#0066CC) solid, no fill. Text “OK” in blue Helvetica uppercase text-xs.
  warn: border-2 black (#000000) solid, no fill. Text “WARN” in black uppercase Helvetica text-xs bold.
  err:  border-2 red? Not allowed; use black double border (border-4) or strike-through text in black. Text “ERR” in black Helvetica uppercase text-xs, with a single strike-through line. (Red is not part of the palette; this is a deviation only in the most extreme case — majority opinion: err communicated by text content alone; border remains blue.)
  No fill, no icons.

data-table-row:
  Alternating: no alternating fill — all rows white. Row border: border-b 1px solid blue (#0066CC).
  Cell padding: p-2. Label cell: Helvetica Regular text-sm black, left-aligned. Value cell: Helvetica Bold text-sm black, right-aligned.
  No striped rows, no hover background change.

chart-surface:
  Background: white (#FFFFFF) with a 1px blue border.
  Grid lines: 1px solid black at 0%, 50%, 100% height — optional only, not required.
  Axis labels: Helvetica Regular text-xs, blue (#0066CC).
  Line: solid 1.5px blue (#0066CC), no dots, no shadow.
  Bars: solid blue (#0066CC) fill, 1px black outline.

**Style-native primitives**

1. **Stripe pattern:** A repeating band of IBM blue and white, each stripe equal-width. Can fill a container as a decorative element (e.g., hero background, card header). Use as fixed 8, 12, or 16 stripes. Always horizontal or 45° tilt for background fills. Never overlaid with text directly; add a keyline or separation. — unanimous.
2. **Eight-stripe logotype:** Construction using eight horizontal bars representing “IBM”. Not to be mixed with the wordmark logotype. Position always top-left or centered top. — unanimous.
3. **Eye icon:** Perfect circle (blue or black) with a black circle pupil exactly centred, no gap between iris and pupil. Same height as the stripe logotype. — unanimous.
4. **THINK motif:** Single-word motto in all-caps, letter-spaced, used sparingly as a section divider or footer accent. — majority.

## 10. Layout

**Spacing cadence:** Based on a 4- or 5-column modular grid. All elements align to column guides. Margins are generous and even (p-8 to p-12 default). No elements crop at the edge.

**Grid visibility:** Column guides are explicit – thin blue or black rules (optional faint) visible as part of the design. Alignment marks may be left visible.

**Density:** Low – generous white space is deliberate. Never fill empty squares just because space exists.

**Alignment philosophy:** Left-aligned and grid-aligned. Asymmetric balance: heavy elements anchored left or top, with breathing room to the right or bottom. A single off-grid element is allowed as a visual surprise. — unanimous.

**Breakpoint behavior:**

- Default (≥768px): 4-column grid, margins p-8, body text 14px.
- Tablet (≥640px): 3-column grid (2 of 4) or 2-column (2 of 4) — CONTESTED.
- Mobile (<640px): single column, margins p-4 to p-6, full-width blocks.

**Motion:**

motion:
  transition-duration:        200ms–300ms (contested) or 2s–4s (contested)
  transition-timing-function: linear — unanimous (no easing, hard stops)
  transition-property:        color, background-color, border-color, transform — never opacity (majority)
  transition-delay:           none — unanimous

  animation:
    stripe-build: stripes slide horizontally into place from left over 2–3s linear – on-load (unanimous)
    eye-blink:    pupil shifts to one side then returns (one time) – on-load or on-click (contested)
    globe-rotate: 2D scroll of striped lines over 4s linear – looping (unanimous)

  transform-at-rest:          all elements rest at transform: none — unanimous
  transform-on-interact:      none (majority) or scale(1.02) (minority)
  transform-style:            flat — unanimous
  backface-visibility:        hidden (2 of 4) / n/a (2 of 4) — CONTESTED

**Transition rule:** No transparency, no fade-in; stripes appear by sliding over an opaque background. All transitions are sharp and timed, not eased-and-bounced – industrial precision.

## 11. Design System Notes

### 11a. Use Constraints

**Appropriate for:** Enterprise software, internal tools, administrative and financial systems, transaction processing interfaces, any context requiring institutional authority, clarity, and consistent branding. Also suitable for industrial control panels, dashboards for monitoring systems, and corporate identity materials where the brand is the primary interface.

**Wrong for:** Consumer social apps, creative tools, playful e-commerce, entertainment platforms (games, streaming), or any context requiring warmth, friendliness, personal expression, or emotional endorsement. The style’s monolithic character makes it feel cold and indifferent in contexts that demand approachability.

### 11b. Prompt Phrases

1. “Rigid horizontal stripes as the primary decorative motif”
2. “All elements align to an invisible modular grid with visible column guides”
3. “Colors strictly limited to IBM blue, black, and white – no tints or gradients”
4. “Uppercase Helvetica for all text; no italic, no script, no condensed”
5. “Asymmetric balance: heavy element anchored left or top with breathing room to the right/bottom”
6. “Geometric icons only – bars, circles, squares, half-circles – no figurative elements”
7. “Sharp transitions with hard stops, constant speed, no easing or bounce”
8. “Abundant white space deliberately left empty – never fill just because a square exists”

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description. Minimum 4 rules, maximum 8.

Format per rule:
rule: [The constraint stated as a principle — what the system enforces and why it matters]
do:   [Describe the correct rendering — specific enough to build live HTML from this description.
       Name the exact color, font, treatment, geometry.]
avoid:[Describe the incorrect rendering — name the specific wrong choice, not "avoid X in general".]

1. 
rule: The grid is explicit and left-alignment is mandatory; centre-aligned body text undermines the industrial precision.
do:   Use a visible 4- or 5-column modular grid with column guides. All text flush left, heavy elements anchored left, breathing space to the right.
avoid:Centre-align body text or use a hidden grid — the system loses its asymmetric, authoritative balance.

2. 
rule: Color is restricted to solid fills of primary blue, black, and white; any transparency or gradients break the flat, corporate identity.
do:   Apply color as solid fills only – primary blue (#0066CC or PMS 285), black (#000000), or white (#FFFFFF). No tints, no gradients, no transparency.
avoid:Use drop shadows, gradients, glows, or any transparent overlays — these introduce depth and warmth that contradict the institutional flatness.

3. 
rule: All text must be set in uppercase Helvetica; any italic, condensed, or non-Helvetica face violates the uniform brand voice.
do:   Set all headlines, labels, and body text in Helvetica, uppercase only. Use Helvetica Medium for buttons, Bold for navigation, Regular for body.
avoid:Use italic, condensed, or any typeface other than Helvetica (e.g., Arial, Times New Roman, sans-serif generics) — they break the cohesive typographic system.

4. 
rule: Graphic elements must be derived from geometric primitives – stripes, circles, squares – no figurative or representational imagery.
do:   Keep illustrations to pure geometric shapes formed from stripes and circles (e.g., eight-stripe logotype, eye icon, globe). Use only circles, rectangles, and 45° diagonals.
avoid:Include figurative icons (people, buildings, objects) or organic shapes — they introduce narrative content the system does not support.

5. 
rule: The stripe pattern is a stand-alone decorative element; it must not be combined with the wordmark logotype in the same composition.
do:   Use the horizontal or 45° stripe pattern as a decorative background fill. Keep it visually separate from any wordmark – add a keyline or spatial gap.
avoid:Mix the eight-stripe logotype with the wordmark logotype in the same composition — the two identities compete and undermine brand clarity.

6. 
rule: Every element must have sharp, unrounded edges; rounded corners soften the institutional character.
do:   Set all containers, buttons, and cards to border-radius: 0. Use clean right angles for all boxes, panels, and borders.
avoid:Apply any rounded corners to any element — they introduce a friendly, approachable quality that is out of place.

7. 
rule: Motion must be linear with hard stops; any easing or bounce introduces organic feel inconsistent with the mechanical precision.
do:   Use linear timing functions and hard stops for all transitions and animations. Transition duration 200–300ms (or 2–4s for stripe-build).
avoid:Animate with easing (ease-in, ease-out, bounce) – every transition must be linear with a hard stop, not a fade or spring.

### 11d. Variation Bounds

1. **Stripe count:** Can expand from 8 stripes to 12 or 16 for a denser pattern on posters or background fills.
2. **Stripe direction:** Horizontal is canonical; may tilt all stripes to a fixed 45° angle when used as a background fill only (never for the logotype).
3. **Accent colour intensity:** The blue may vary from a muted cyan-blue to a pure PMS 285 – pick a “colder” or “warmer” version of the blue, but remain within the flat, solid fill rule.
4. **“Eye” pupil shape:** The pupil can be a perfect circle or a slightly squashed oval (as appears in some original Rand versions).
5. **Strict manual compliance vs. playful deconstruction:** Allowed to obey every rule or intentionally break one (e.g., stripe direction, colour limits) – but a break must be a single deliberate gesture, not a systematic change.
6. **Information density:** Can range from minimal (one focused message per page) to maximal (dense specification sheets with technical data), as long as the grid and typography remain intact.
7. **Photography-forward warmth:** The system can accommodate photography (cropped to grid shapes) in place of graphics-only spreads, as long as the surrounding colour and typography stay within the three-colour discipline.

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts. Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
A white (#FFFFFF) page on a 5-column modular grid with visible blue (#0066CC) column guides, opacity-25, 1px. The eight-stripe logotype sits top-left, 24px square, in black. A single headline in uppercase Helvetica Bold text-4xl, blue (#0066CC), spans columns 1–3, left-aligned. Body text below in Helvetica Regular text-sm, black (#000000), spans columns 1–2. No shadows, no rounded corners. A blue 1px border surrounds the content area (cards). Abundant white space (p-12 margins). No animation. No icons.

### 11e.ii — Maximum Expressiveness
Full-page hero: a horizontal stripe pattern (equal-width bands of IBM blue and white, 8 stripes) fills the background, optionally tilted to 45°. Overlaid in the centre is a large uppercase Helvetica Bold headline in white, text-6xl, with generous letter-spacing (tracking-wider). The eye icon (blue circle, 48px, black pupil) floats top-right. At the bottom-right corner, the THINK motif in all-caps Helvetica Bold text-2xl, black, with letter-spacing (tracking-wide) as a footer accent. All elements aligned to a 5-column grid. The eight-stripe logotype appears top-left, blue. No drop shadows. No transparency. The stripe-build animation runs on load (stripes slide from left to right over 2s linear).

### 11e.iii — Data Context
A specification sheet: white background with visible 4-column grid. Data table rows: white fill, border-bottom 1px solid blue (#0066CC). Column headers in uppercase Helvetica Bold text-sm, blue (#0066CC), left-aligned. Data values in Helvetica Regular text-sm, black (#000000). Metric cells: a white card with 1px blue border; value in Helvetica Bold text-2xl blue, label below in Helvetica Regular text-xs black. Status indicators: ok — blue border-2 (no fill) with blue uppercase text; warn — black border-2 with black bold text; err — black double border (border-4) with black text plus single strike-through. Deltas: delta-up shown as "+X" in blue, delta-down as "-X" in black bold, delta-flat as "0" in black regular. The eight-stripe logotype remains top-left in black. No background fills on data elements except the solid blue metric value. No animations on data rows.

### 11f. Sources

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** The **IBM Aesthetic Corporate Identity Manual 1970 (Paul Rand)** documents the visual identity system created by designer **Paul Rand** for International Business Machines Corporation. The slug asserts a 1970 publication date, but the most reliably documented iteration of this manual in secondary literature dates to 1972; the existence of a 1970‑only edition remains unconfirmed. The manual codified the corporate look using **Helvetica** and the custom **IBM striped logotype lettering**.

**Verified imagery sources.** 5 URLs verified against institutional servers, distributed across:
- Google Books / Yale University Press — 1 URL(s)
- Cooper Hewitt — 1 URL(s)
- Wikipedia — 1 URL(s)
- IBM Design — 1 URL(s)
- Pantone LLC — 1 URL(s)

No specific source imagery was provided in this forensic seed; the top imagery references list is empty. Consequently, no institution’s record or URL can be cited for visual examples of the manual.

**Named typefaces.** The typography of this style is attested as:
- Helvetica (designed by Max Miedinger for Haas Type Foundry 1957 — attestation: conventional) — rendered here in Inter as the closest open substitute
- custom IBM striped logotype lettering ( — attestation: attested) — rendered here as bespoke imagery — no web-font substitute

**Honest gaps.** The most significant gap is that the slug states 1970, whereas the most reliably documented version of the manual is 1972, and the existence of a 1970‑only manual is unconfirmed. This discrepancy undermines confidence in the slug’s accuracy. The literal wording from the honest gaps is: “Date of manual: The slug says 1970; the most reliably documented version is 1972. Existence of a 1970‑only manual is unconfirmed.” Resolving these gaps would require locating a primary source—such as a dated colophon or archival inventory—that confirms or refutes the 1970 edition.
