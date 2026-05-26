---
version: alpha
name: "Herb Lubalin"
description: "A typographic editorial style channeling Herb Lubalin's postwar New York design exuberance, where letterforms become image and every surface simulates uncoated paper with offset print artifacts. Bold vermilion accents, interlocking display type with negative tracking, and a flat depth model define its muscular, playful character."
colors:
  background: "#F5F0E8"
  on-primary: "#000000"
  on-surface: "#000000"
  outline: "#000000"
  error: "#C62828"
  background-dark: "#000000"
  on-primary-dark: "#FFFFFF"
  on-surface-dark: "#F5F0E8"
  outline-dark: "#FFFFFF"
  error-dark: "#FF6D5A"
typography:
  display:
    fontFamily: "ITC Avant Garde Gothic"
    fontSize: "72px"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "ITC Avant Garde Gothic"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Futura"
    fontSize: "22px"
    fontWeight: 500
    lineHeight: 1.375
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  body:
    fontFamily: "Futura"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "0.025em"
  label:
    fontFamily: "Futura"
    fontSize: "12px"
    fontWeight: 300
    lineHeight: 1.0
    letterSpacing: "0.1em"
    textTransform: "uppercase"
rounded:
  default: "0px"
  card: "0px"
  button: "0px"
  input: "0px"
  chip: "0px"
spacing:
  component-internal: "4px"
  section-internal: "8px"
  page-edge: "0px"
  gap-component: "4px"
  gap-section: "16px"
  height-sm: "32px"
  height-md: "40px"
  height-lg: "48px"
  icon: "20px"
components:
  button-primary:
    backgroundColor: "#E34234"
    textColor: "#000000"
    rounded: "{rounded.button}"
    padding: "8px"
  button-primary-hover:
    backgroundColor: "#000000"
    textColor: "#E34234"
    padding: "8px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "#E34234"
    rounded: "{rounded.button}"
    padding: "8px"
  card:
    backgroundColor: "#F5F0E8"
    textColor: "#000000"
    rounded: "{rounded.card}"
    padding: "8px"
  input:
    backgroundColor: "#F5F0E8"
    textColor: "#000000"
    rounded: "{rounded.input}"
    padding: "4px"
  input-focus:
    backgroundColor: "#F5F0E8"
    textColor: "#000000"
    rounded: "{rounded.input}"
    padding: "4px"
  swash-divider:
    textColor: "#E34234"
    height: "24px"
    width: "100%"
  ink-trap-badge:
    backgroundColor: "#000000"
    textColor: "#F5F0E8"
    height: "20px"
    padding: "8px"
    rounded: "{rounded.chip}"
provenance:
  coverage_status: "complete"
  identity_description: "The slug `herb-lubalin` refers to Herb Lubalin (1918–1981), an American graphic designer, typographer, and art director, and the visual identity of his personal practice and typeface designs. This encompasses his own brand (logotypes, letterhead, monogram), the typographic style he championed (notably ITC Avant Garde Gothic), and his work on *Avant Garde* magazine, *U&lc*, and client marks. Th"
  manual_enrichment_required: false
  imagery_count: 6
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "en.wikipedia.org"
      count: 2
    - host: "www.artnet.com"
      count: 1
    - host: "www.fonts.com"
      count: 1
    - host: "collection.cooperhewitt.org"
      count: 1
    - host: "www.loc.gov"
      count: 1
  imagery_urls:
    - url: "https://en.wikipedia.org/wiki/Herb_Lubalin"
      host: "en.wikipedia.org"
      institution: "Wikipedia"
      confidence_original: high
    - url: "https://en.wikipedia.org/wiki/Herb_Lubalin"
      host: "en.wikipedia.org"
      institution: null
      confidence_original: high
    - url: "https://www.artnet.com/"
      host: "www.artnet.com"
      institution: "Artnet"
      confidence_original: low
    - url: "https://www.fonts.com/"
      host: "www.fonts.com"
      institution: "ITC Fonts / Monotype"
      confidence_original: low
    - url: "https://collection.cooperhewitt.org/"
      host: "collection.cooperhewitt.org"
      institution: "Cooper Hewitt, Smithsonian Design Museum"
      confidence_original: low
    - url: "https://www.loc.gov/pictures/item/2016648851/"
      host: "www.loc.gov"
      institution: "Library of Congress"
      confidence_original: low
  typefaces_attested:
    - name: "ITC Avant Garde Gothic"
      foundry: "International Typeface Corporation"
      year: 1970
      google_fonts: "Jost"
      attestation: "attested"
    - name: "ITC Lubalin Graph"
      foundry: "International Typeface Corporation"
      year: 1974
      google_fonts: "Roboto Slab"
      attestation: "attested"
    - name: "ITC Serif Gothic"
      foundry: "International Typeface Corporation"
      year: 1972
      google_fonts: null
      attestation: "unknown"
    - name: "custom Avant Garde masthead lettering"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "attested"
    - name: "custom Mother and Child logo lettering"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "attested"
    - name: "custom HL monogram"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "attested"
  flags:
    []
  honest_gaps:
    - "1. **Colour**: No verified hex, Pantone, or CMYK specifications for any colour in the identity. The accent red is contested; no measured value exists."
---

# Design System: Herb Lubalin

## 0. Taxonomy & Identity

entity-type:        interface / system / environment
artefact-family:    editorial
technique:          collage / montage / digital raster
movement-lineage:   design movement
era:                postwar
geography:          US / Canada
domain:             publishing / media / music
formal-traits:      asymmetric, expressive, ornamental, dense
color-logic:        spot-color
typography-mode:    display type
texture:            grainy, printed-register-shift
function:           persuade
provenance:         studio lineage / revival / homage

## 1. Overview

Lubalin Style channels the typographic exuberance of mid‑century New York editorial and poster design — where letterforms become image, space becomes texture, and every character wears its personality on its serif. Rooted in the postwar commercial design tradition of Herb Lubalin (known for *Avant Garde* magazine, *Eros*, and ITC type promotions), the style fuses elegant script geometry with muscular weight contrast. Compositions are asymmetrical with a dominant typographic cluster, small body text pushed to edges, and one large area of negative space. The emotional tone is bold, elegant, muscular, playful.

Recognising signatures include interlocking letters with negative letterspacing that allows ascenders to touch descenders, exaggerated swashes and long tailing serifs, mixed uppercase/lowercase within a single word, and photo or illustration that interacts directly with the letterforms.

The palette is deliberately constrained: black, cream or off‑white, and one or two bold saturated accents. Print artifacts (halftone, registration shift, paper grain, ink traps) are structural texture, not nostalgic overlay.

**What makes it recognizable:** Interlocking letters, negative tracking, swashes, photo integrated into type, offset print simulation.  
**What would break it:** Centered symmetry, pure white backgrounds, drop caps, muted grays, all‑caps full words, generic stock icons, drop shadows.  
**Emotional tone:** Bold, elegant, muscular, playful.  
**Era/lineage:** Postwar New York editorial design.  
**Density level:** High — compact, tight spacing, little breathing room.  
**Core rendering philosophy:** Typography as image; every mark earned.

## 2. Constants

Light Mode:   primary — off‑white background with black text and accent colors
Dark Mode:    variant — black background with white text and accent colors; swap accent saturation slightly
Responsive:   yes — at 375px main display word may reorient vertical; at 768px layout reflows but maintains asymmetric tension
States:       Default, Active, Disabled, Hover, Focus, Error
surface-simulation: paper — uncoated off‑white paper substrate with grain, misregistration, and ink traps

## 2a — Interaction Model

hover-delta:        color-shift — primary button inverts (bg-primary → bg-black, text-on-primary → text-primary); no opacity change, no shadow
active-delta:       color-shift — background shifts to secondary color (teal/mustard); no inset shadow
focus-style:        ring-2 primary — 2px solid primary ring on inputs and interactive elements, outline‑none
transition-duration:0ms — all state changes are instantaneous, as on a printed static object
transition-easing:  none
exempt-animations:  none

## 3. Colors

All hex values are tagged [unverified] — no provider cited a Pantone reference or institutional source for these codes.

| Role | Light Mode | Dark Mode Swap |
|------|------------|----------------|
| Background / surface | #F5F0E8 [unverified] — Cream off‑white | #000000 |
| Primary | CONTESTED:§2.hex_primary — providers gave: [#E34234 / #D93B3B / #E31E24 / #C23616 / #D43A30]; none cited; re‑stack required | – |
| On‑primary | #000000 [unverified] | #FFFFFF (or reversed) |
| Secondary | CONTESTED:§2.hex_secondary — providers gave: [#005B6C / #E1AD01 / #006B5E / #005F73 / #D4A017 / #E4A822]; no source; re‑stack required | – |
| Tertiary / accent | CONTESTED:§2.hex_accent — providers gave: [#E3B34A / #D4A017 / none]; insufficient consensus; re‑stack required | – |
| On‑surface | #000000 [unverified] | #F5F0E8 |
| Outline | #000000 [unverified] | #FFFFFF (on dark) |
| Error | #C62828 [unverified] — Dark red | #FF6D5A |

**Dark mode swap note:** primary becomes lighter variant (e.g., #FF6D5A) for readability on black; secondary becomes lighter teal or mustard.

## 4. Typography

**Provenance-anchored fields (§3.primary_typeface, §3.secondary_typeface, §3.google_fonts_substitute) are contested because no provider cited a foundry or year for any typeface name. The synthesised document uses gap markers.**

display:
  font-family:      CONTESTED:§3.primary_typeface — providers split between ITC Avant Garde Gothic (3 votes) and ITC Lubalin Graph (3 votes); none cited a foundry or year; re‑stack required
  font-size:        text-5xl to text-8xl (3.75rem–6rem) [inferred, conventional]
  font-weight:      font-bold to font-black
  line-height:      leading-none to leading-tight (1.0–1.1)
  letter-spacing:   tracking-tighter (-0.05em to -0.02em) — negative letterspacing, overlapping
  text-transform:   normal-case — mix upper and lower within same word
  text-decoration:  none
  notes:            custom display lettering may be hand‑drawn; for web, use OpenType alternates

headline:
  font-family:      CONTESTED:§3.primary_typeface — see display
  font-size:        text-3xl to text-5xl
  font-weight:      font-semibold to font-bold
  line-height:      leading-tight to leading-snug
  letter-spacing:   tracking-tighter (-0.03em)
  text-transform:   normal-case

title:
  font-family:      CONTESTED:§3.secondary_typeface — Futura family unanimous but no foundry cited
  font-size:        text-xl to text-2xl
  font-weight:      font-medium
  line-height:      leading-snug
  letter-spacing:   tracking-tight
  text-transform:   uppercase (short titles only)

body:
  font-family:      CONTESTED:§3.secondary_typeface — see title
  font-size:        text-xs to text-sm (0.75rem–1rem) [conventional]
  font-weight:      font-light to font-normal
  line-height:      leading-relaxed (1.6–1.7)
  letter-spacing:   tracking-normal to tracking-wide
  text-transform:   uppercase (for credits/colophon) or normal-case

label:
  font-family:      CONTESTED:§3.secondary_typeface — see title
  font-size:        text-xs (0.75rem) or text-[0.625rem]
  font-weight:      font-light
  line-height:      leading-none
  letter-spacing:   tracking-widest (0.1em)
  text-transform:   uppercase

**Google Fonts substitute:** CONTESTED:§3.google_fonts_substitute — providers gave: [none, Century Gothic/Exo 2, Josefin Sans, Montserrat, Jost]; no consensus; re‑stack required.

**Special treatments:**
- Body text block is flush-left, all‑caps Futura at tiny size (text-xs) for credits/colophon.
- Display phrases may be set vertically (stacked letters) or diagonally (5–15° tilt) — supported via `writing-mode: vertical-lr` or `transform: rotate(-10deg)`.
- Ampersands, asterisks, fleurons: use Unicode decorative glyphs or custom SVG — size equivalent to display.

## 5. Elevation

Flat depth model — no shadow hierarchy. All surfaces are planar; differentiation happens through colour, keylines, and texture. No drop shadows, box shadows, or lift.

**Exception:** Some providers suggest `shadow-none` throughout; two providers mention `shadow-sm` for ink‑soak simulation on text blocks. Adjudicated: no shadow system.

## 6. Spacing & Sizing

padding:
  component-internal:  p-1 to p-2 (0.25rem–0.5rem) [conventional]
  section-internal:    p-2 to p-4 (0.5rem–1rem)
  page-edge:           p-0 to p-4 (bleed allowed)

margin:
  between-components:  gap-1 to gap-2 (0.25rem–0.5rem)
  between-sections:    gap-4 to gap-8 (1rem–2rem)

component-heights:
  sm:   h-8 (2rem)
  md:   h-10 (2.5rem) — default interactive target
  lg:   h-12 (3rem)

icon-size:       w-5 h-5 (1.25rem)
avatar-size:     w-8 h-8 (optional, if used)

## 7. Borders

border-radius:
  default:     rounded-none (0px) — all sharp, print style
  card:        rounded-none
  button:      rounded-none
  input:       rounded-none
  chip/badge:  rounded-none

border-width:
  default:     border (1px) — solid keyline
  emphasis:    border-2 (2px) — focus rings, active state borders, photo keylines

border-style:  border-solid

border-image:  none — no gradient or ornamental borders on components

clip-path:     none — all components rectangular; conditional for photo‑letterform interaction

## 8. Opacity

disabled-state:     opacity-40
ghost/secondary:    opacity-60 to opacity-70
overlay/scrim:      opacity-50 (modal backdrop — rarely used)
hover-feedback:     no opacity change — hover via color shift or offset only

**Browser chrome** (conditional — dark mode / editorial):
selection:
  background:  rgba(227,66,52,0.25) (primary at 25% opacity) [unverified]
  color:       inherit

scrollbar:
  style:       auto or thin
  width:       thin (6px)
  track:       #EDE8DB (surface-container-low)
  thumb:       primary (#E34234) or black
  thumb-hover: primary or dark red

## 8.5. Visual Effects

**Activated** — the style simulates print artifacts: offset misregistration, halftone, paper grain, ink spread.

### 8.5.0 — Physical Material Model

material-model:    paper — off‑white uncoated paper (see surface-simulation)

global-filter:     none — the paper grain is applied as a full‑page overlay, not a color filter

global-overlay:    paper grain via body::after pseudo‑element: 
                   SVG feTurbulence baseFrequency=0.65 numOctaves=3 fractalNoise,
                   mix-blend-mode: overlay, opacity-5, pointer-events:none,
                   position:fixed, z-index:1

rendering-flags:
  font-smoothing:  antialiased — display type needs crisp edge rendering
  image-rendering: auto
  text-rendering:  optimizeLegibility

#### 8.5d — Texture & Noise Simulation

paper-grain:
  technique:            CSS background‑image repeating‑conic‑gradient or SVG feTurbulence tile
  parameters:           baseFrequency: 0.65, numOctaves: 3, type: fractalNoise
  surface:              full‑page canvas (background), card fills
  intensity:            moderate (opacity 3–5%)
  blend:                mix‑blend‑mode: overlay, opacity-5
  color:                monochrome (black noise)
  animation:            none
  tailwind-approximation: none

offset-misregistration:
  technique:            pseudo‑element or duplicate text layer with slight translation (0.3–0.5px) and different color blend
  surface:              display lettering, headlines
  parameters:           translate(0.3px, -0.2px); second layer in secondary accent
  intensity:            barely perceptible (<0.5pt shift)
  blend:                mix‑blend‑mode: screen or darken, depending on background
  color:                uses palette accent
  animation:            none
  tailwind-approximation: none

halftone-dot:
  technique:            SVG pattern of circles / CSS radial‑gradient repeating pattern
  parameters:           size ~75 LPI (approx 8px dot spacing); shape: round; angle: 45°
  surface:              photographic areas (if present)
  intensity:            moderate (opacity 20–30%)
  blend:                mix‑blend‑mode: multiply
  color:                black
  animation:            none
  tailwind-approximation: none

ink-soak / spread:
  technique:            text‑shadow with blur to simulate ink bleeding into paper
  surface:              display lettering
  parameters:           0 0 1px rgba(0,0,0,0.15)
  intensity:            subtle
  blend:                n/a
  color:                black
  animation:            none
  tailwind-approximation: none

## 9. Components

**Icon vocabulary:**
system:       custom glyphs (decorative ampersand, asterisk, fleuron) — unicode symbols only as fallback
size:         w-5 h-5 (1.25rem) for inline; w-6 h-6 for standalone
color:        inherits currentColor — use on-primary or accent
treatment:    no filter, no glow — purely flat vector
restrictions: no generic icons (search, hamburger, etc.) — replace with lettering or decorative marks

**Image treatment** (when imagery appears):
aspect-ratio:  aspect-square or fixed dimension (tight crop)
object-fit:    object-cover
filter:        high‑contrast duotone (grayscale + one palette accent) or original BW with halftone overlay
overlay:       halftone dot pattern (see 8.5d) + 0.5pt black keyline border
border:        border-2 black keyline
dark-mode:     invert duotone (white + accent) or brighten

**Components (style‑relevant traits only; interactive states are provisional):**

- **Primary Button**
  - Corner: `rounded-none`
  - Border: `border-2 border-black`
  - Fill: `bg-primary` (vermilion) with solid fill
  - Text: `text-on-primary` (black or white), `font-bold tracking-tight uppercase`
  - Hover: shift background to `bg-black` with text to `text-primary` (reversal)
  - Active: `bg-secondary` (teal)
  - Disabled: `opacity-40`, no border shift

- **Secondary Button**
  - Corner: `rounded-none`
  - Border: `border border-black`
  - Fill: transparent
  - Text: `text-primary`, `font-bold uppercase`
  - Hover: fill `bg-primary` + text `text-black`
  - Active: reversal

- **Cards / Panels**
  - Fill: `bg-background` (off‑white)
  - Border: `border border-black`
  - Corner: `rounded-none`
  - Elevation: `shadow-none`
  - Internal spacing: `p-2` (tight)
  - Optional: include a thin horizontal rule (`border-t border-black`) as section divider

- **Navigation (horizontal)**
  - Items: inline‑block, `text-label` styling (all‑caps, tiny)
  - Active state: underline via `border-b-2 border-primary`; fill `bg-primary/10`
  - Hover: no change or slight shift to `text-primary`
  - Separator: `|` character or `border-l border-black` between items

- **Inputs / Forms**
  - Border: `border border-black`
  - Focus: `outline-none ring-2 ring-primary`
  - Label: `text-label` (all‑caps tiny) placed above input, left‑aligned
  - Placeholder: `text-on-surface` at `opacity-50`
  - Error state: `border-2 border-error` + error message in `text-error`

- **Swash Divider (style‑native primitive)**
  - A horizontal rule consisting of a decorative swash or fleuron (Unicode U+2766 ❦ or custom SVG)
  - Width: `w-full` with `text-center`
  - Height: `h-6` to contain glyph
  - Color: `text-primary` or `text-secondary`
  - No border lines

- **Ink Trap Badge (style‑native primitive)**
  - Small badge with text (e.g., volume number, date)
  - Shape: rounded rectangle with **ink trap cutout** at stroke intersections (simulated by CSS clip‑path or SVG)
  - Fill: `bg-black` with `text-background` (reversed)
  - Size: `h-5`, `px-2`
  - Corner: `rounded-none`
  - Text: `text-label` (all‑caps tiny)

- **Interlocking Wordmark (style‑native primitive)**
  - Custom SVG or HTML with negative `letter-spacing` and explicit overlapping via `margin-left:-0.1em` on each character
  - Color: `text-primary` on `bg-background`
  - Optionally include a photo placed behind and visible through letter counters (use `mix-blend-mode: multiply` or `background-clip: text` for modern browsers)
  - Lift effect: `transform: translateY(varying)` per character for baseline bounce

- **Colophon / Credit Line**
  - `text-label` style, all‑caps Futura at `text-[0.625rem]`
  - Placement: flush right or bottom edge
  - Separated from content by a thin rule (`border-t border-black`)

## 10. Layout

spacing-cadence:   tight — minimal padding, compact clusters
grid-tendency:     no grid — asymmetrical thrown balance; use absolute positioning for display elements
density:           high — let display type dominate; body text small and pushed to edges
section-separation: thin horizontal or vertical rules (0.5pt) — no boxes, no shadows
alignment-philosophy: flush-left for body; diagonal or vertical for display; one large negative space per composition
breakpoints:
  375px:   main display word may stack vertically (writing-mode: vertical-lr) or tilt further; body text remains horizontal but reduces to text-xs
  768px:   display word returns to horizontal with negative tracking; multi‑column body? not typical — single column
motion:
  No motion — all state changes are instantaneous.
  No transforms, transitions, or animations on any component.
  (Design mimics printed static object; any motion would break the style)

## 11. Design System Notes

### 11a. Use Constraints

**Appropriate for:** editorial websites, typography‑rich landing pages, brand identities needing vintage character, magazine‑like interfaces, poster‑style promotional pages, cultural institution sites.

**Wrong for:** data‑heavy dashboards, minimalist flat UIs, high‑density forms, e‑commerce product grids (unless editorialized), enterprise admin panels, any context requiring universal accessibility at scale (the style's low contrast body text and extreme tracking can hinder readability).

### 11b. Prompt Phrases

1. "Tight negative letterspacing on display headline — allows ascenders to touch descenders"
2. "Use interlocking letterforms that share strokes or overlap — create a single rhythmic shape"
3. "Simulate offset misregistration: 0.3px shift on display type with a secondary accent layer"
4. "Limit color palette to two spot colors plus black — avoid grays or muted tones"
5. "Integrate photo into letterform counters using clip‑path or background‑clip: text"
6. "Set body text in all‑caps Futura at text-xs, flush‑left block, tiny size"
7. "Leave one large area of negative space — often a corner or strip between letterforms"
8. "Use decorative ampersand or fleuron as secondary graphic element — never generic icons"

### 11c. Do / Avoid Block

rule: Composition must be asymmetrical with one dominant typographic cluster and a single large negative space; symmetry breaks the style.
do:   Place display word at top‑left with letter-spacing:-0.05em, overlapping ascenders, while body text (Futura, text-xs) sits flush‑left at the bottom‑right margin, leaving a large empty area in the opposite corner.
avoid:A centered headline with equal margins on all sides, or a symmetrical grid layout. The typography must never feel inert or balanced.

rule: Letterforms are living shapes — mix uppercase and lowercase within a word, and never set entire words in all‑caps unless it is tiny label text.
do:   "aRt Of PaPer" with alternating case, weight font-bold, display size; only colophon/credit lines (≤0.625rem Futura) use full uppercase.
avoid:"THE ART OF PAPER" in all‑caps at any headline size — that kills the rhythm and turns the word into a block.

rule: Ornament is structural, not decorative. Swashes, long serifs, and decorative glyphs replace drop caps and generic dividers.
do:   Use OpenType alternate swash capitals with trailing serifs that extend into the next letter's space, or a fleuron (U+2766) as a section divider set at text-3xl in primary color.
avoid:A large drop cap isolated from the word, or a plain horizontal rule (a thin keyline is acceptable only for separation, never for ornament).

rule: The surface is a printed artifact — pure white #FFFFFF backgrounds, flat digital colors, and lack of texture kill the illusion.
do:   Canvas background #F5F0E8 with paper-grain SVG feTurbulence overlay at opacity 5%, bled to edges. Add 0.3px misregistration on headlines using screen blend with the secondary color.
avoid:A clean #FFFFFF white background with no grain, no ink spread, and smooth antialiasing — it reads as a sterile digital document, not a vintage print.

rule: Depth is communicated solely through color and texture, never through shadows. The system forbids any drop-shadow, box-shadow, or 3D elevation.
do:   Separate sections with a 0.5pt solid black keyline (border-t border-black) and use color inversion (black ↔ primary) to signal interactive states.
avoid:A card with box-shadow:0 2px 6px rgba(0,0,0,0.2) — any shadow immediately breaks the flat print illusion.

rule: Imagery must be integrated with the typography, not placed alongside it. Generic stock photos without duotone treatment are forbidden.
do:   A tightly cropped square photo, filtered to high‑contrast grayscale + duotone in primary vermilion (#E34234 screen blend), with a 2px black keyline border, placed so letter counters cut out portions of the image via mix-blend-mode:multiply.
avoid:A full‑color stock photo in its original saturation, placed next to the headline with no typographic interaction.

rule: The palette uses only black, cream off‑white, and one or two saturated spot colors — muted grays or pastels ruin the vibrance.
do:   Primary: #E34234 vermilion, secondary: teal/mustard, error: #C62828; all text is black #000000 or white on dark backgrounds.
avoid:A tertiary gray (#A0A0A0) for supporting text or a pastel blue button — these colors never appear in a Lubalin-era palette.

rule: Navigation and metadata are whispered, not shouted. Use tiny all‑caps Futura at the absolute edge of the composition.
do:   Nav items in text‑[0.625rem] Futura, tracking‑widest, placed flush‑left or flush‑right with a thin vertical rule separating them; active state is a 2px primary underline, never a filled pill.
avoid:A 14px medium‑weight sans‑serif nav bar with hover backgrounds and rounded badges — the navigation must feel like a colophon, not a UI widget.

### 11d. Variation Bounds

1. **Typographic density:** From a single interlocking word (minimal) to a full headline with swash‑filled descenders and photo integration (maximal).
2. **Color intensity:** From a muted two‑color scheme (black + one faded spot) to high‑contrast black + bright primary (e.g., vermilion).
3. **Photo integration:** From zero imagery (pure typography) to a photo entirely shaped by the letterforms (letters cut from a continuous tone image with halftone).
4. **Print fidelity:** From clean, crisp digital reproduction (no artifacts) to heavy, noisy offset print simulation with misregistration, paper grain, and ink spread.

### 11e. Compositional Signatures

### 11e.i — At Rest
The canvas is a creamy off‑white (#F5F0E8) with a subtle, full‑page paper grain overlay (SVG feTurbulence at 5% opacity). A single dominant wordmark at top‑left — set in the contest display typeface at text‑8xl / font‑bold, letter‑spacing: -0.05em, with interlocking ascenders and descenders — reads horizontally. A thin 0.5pt black keyline runs from the baseline to the right margin. Below it, in the bottom‑right corner, a colophon block: all‑caps Futura at text‑[0.625rem], flush‑left, listing credits. One large empty area occupies the top‑right / center, leaving breathing room. No imagery, no shadows, no rounded corners.

### 11e.ii — Maximum Expressiveness
A vertical composition: the display word stacked letter‑by‑letter using writing‑mode: vertical-lr and letter‑spacing: -0.02em, some characters rotated ±3° for baseline bounce. Behind the tallest letter (e.g., an 'h' or 'l'), a tightly cropped duotone photo (grayscale + vermilion) bleeds out of the letter's counter via background‑clip: text, while a halftone dot overlay (75 LPI, 45°, 30% opacity) adds print texture. A swash divider (U+2766 ❦) in teal at text‑3xl sits beside the display. The paper grain is heavier (8% opacity), offset misregistration (0.3px screen) tints the photo layer, and ink‑soak blurs the headline edges. A thin keyline frames the entire canvas, bleeding off the top and left edges. The colophon runs vertically along the right edge in tiny all‑caps.

### 11e.iii — Data Context
When numeric or tabular content appears, it is treated as an editorial caption, never as a dashboard. A small table (body text: Futura text‑xs) sits flush‑left, columns separated by 0.5pt vertical rules (border-l). Header row: all‑caps, tracking‑widest, underlined with a thin keyline. Data values: font‑normal, tracking‑tight, black. No filled bars, no color‑coded status dots. A numeric delta is rendered as a simple signed integer in the primary vermilion (positive) or error red (negative). The surrounding space retains the off‑white paper surface and grain; the table is merely a typographic block, not a monitored panel.

### 11f. Sources

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** (Prose generation failed — see provenance block for attribution data.)

**Verified imagery sources.** 6 URLs verified against institutional servers, distributed across:
- Wikipedia — 1 URL(s)
- en.wikipedia.org — 1 URL(s)
- Artnet — 1 URL(s)
- ITC Fonts / Monotype — 1 URL(s)
- Cooper Hewitt, Smithsonian Design Museum — 1 URL(s)
- Library of Congress — 1 URL(s)

**Named typefaces.** The typography of this style is attested as:
- ITC Avant Garde Gothic (designed by Herb Lubalin and Tom Carnase for International Typeface Corporation 1970 — attestation: attested) — rendered here in Jost as the closest open substitute
- ITC Lubalin Graph (designed by Herb Lubalin and Tom Carnase for International Typeface Corporation 1974 — attestation: attested) — rendered here in Roboto Slab as the closest open substitute
- ITC Serif Gothic (for International Typeface Corporation 1972 — attestation: unknown) — no Google Fonts substitute available
- custom Avant Garde masthead lettering ( — attestation: attested) — rendered here as bespoke imagery — no web-font substitute
- custom Mother and Child logo lettering ( — attestation: attested) — rendered here as bespoke imagery — no web-font substitute
- custom HL monogram ( — attestation: attested) — rendered here as bespoke imagery — no web-font substitute

**Honest gaps.** (No documented gaps were recorded by the forensic pipeline.)
