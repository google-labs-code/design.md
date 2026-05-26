---
version: alpha
name: "Art Deco"
description: "A design system channeling the geometric opulence and streamlined symmetry of the 1920s–1930s interwar period, combining hard edges, stepped silhouettes, and gilded restraint to simulate lacquered surfaces with foil-stamped metallic highlights on deep black grounds."
colors:
  primary: "#D4AF37"
  on-primary: "#0A0A0A"
  primary-container: "#B8960C"
  on-primary-container: "#F5F0E8"
  secondary: "#C0C0C0"
  on-secondary: "#0A0A0A"
  secondary-container: "#8A8A8A"
  on-secondary-container: "#1A1A1A"
  neutral: "#0D0D0D"
  on-surface: "#F5F0E8"
  on-surface-variant: "#D4AF37"
  error: "#9B111E"
  on-error: "#FFFFFF"
  error-container: "#7A0D16"
  on-error-container: "#FFFFFF"
  outline: "#D4AF37"
  outline-variant: "#8A7334"
  neutral-light: "#F5F0E8"
  on-surface-light: "#0D0D0D"
  on-surface-variant-light: "#8A7334"
  outline-light: "#B8960C"
  outline-variant-light: "#D4CAB8"
typography:
  display:
    fontFamily: "Poiret One"
    fontSize: "48px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.1em"
    textTransform: "uppercase"
  headline:
    fontFamily: "Poiret One"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: 1.375
    letterSpacing: "0.025em"
    textTransform: "uppercase"
  title:
    fontFamily: "Poiret One"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.375
    letterSpacing: "0.025em"
    textTransform: "uppercase"
  body:
    fontFamily: "Raleway"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "0em"
  label:
    fontFamily: "Raleway"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.05em"
    textTransform: "uppercase"
rounded:
  default: "0px"
  card: "0px"
  button: "0px"
  input: "0px"
  chip: "0px"
spacing:
  component-internal: "8px"
  section-internal: "24px"
  page-edge: "32px"
  gap-component: "16px"
  gap-section: "32px"
  height-sm: "32px"
  height-md: "40px"
  height-lg: "48px"
  icon: "20px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.button}"
    padding: "8px"
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.button}"
    padding: "8px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.button}"
    padding: "8px"
  card:
    backgroundColor: "#2C2C2C"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.card}"
    padding: "16px"
  input:
    backgroundColor: "#050505"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.input}"
    padding: "8px"
  input-focus:
    backgroundColor: "#050505"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.input}"
    padding: "8px"
  stepped-panel:
    backgroundColor: "{colors.primary-container}"
    rounded: "{rounded.default}"
    padding: "24px"
  chevron-band:
    textColor: "{colors.primary}"
    height: "16px"
  sunburst-medallion:
    backgroundColor: "{colors.primary}"
    size: "120px"
provenance:
  coverage_status: "minimal"
  identity_description: ""
  manual_enrichment_required: true
  imagery_count: 1
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: null
    typography_map: "entries:113"
  sources:
    - host: "en.wikipedia.org"
      count: 1
  imagery_urls:
    - url: "https://en.wikipedia.org/wiki/Art_Deco"
      host: "en.wikipedia.org"
      institution: null
      confidence_original: high
  typefaces_attested:
    []
  flags:
    - "one_usable_url_only"
    - "no_typography_extracted"
    - "no_colour_extracted"
  honest_gaps:
    []
---

# Design System: Art Deco

## 0. Taxonomy & Identity

entity-type:         interface / system / environment
artefact-family:     operating system / software UI
technique:           digital raster
movement-lineage:    design movement
era:                 interwar
geography:           platform-neutral
domain:              luxury / fashion
formal-traits:       geometric, symmetrical, ornamental, dense
color-logic:         spot-color
typography-mode:     display type
texture:             matte, grainy
function:            persuade
provenance:          revival / homage

## 1. Overview

Art Deco is a design system channeling the geometric opulence and streamlined symmetry of the 1920s–1930s interwar period. It combines hard edges, stepped silhouettes, and gilded restraint to create a look that is both luxurious and architecturally precise. The style emphasises symmetry, a strong central axis, and a limited palette of deep blacks, rich navies, and warm golds or cool silvers. Surfaces evoke lacquer, enamel, and brushed metal — matte black backgrounds with sharp metallic highlights. Ornament is tightly controlled: chevrons, sunbursts, concentric rectangles, and fan motifs repeat with mechanical regularity. The overall density is moderate; generous margins contain compact internal elements.

- **Emotional tone:** Opulent, confident, theatrical, restrained.
- **Core rendering philosophy:** Vector flatness with stylised metallic highlights and hard offset shadows (no blur, no gradient fall-off); a simulation of foil‑stamped, lacquered surfaces.
- **Recognisable by:** absolute symmetry, stepped/zigzag outlines, sunburst or chevron motifs, thin gold outlines, all‑caps headings with wide letter‑spacing, zero corner radii.
- **Broken by:** rounded corners, blurry/gradient shadows, italics, organic curves, pastel‑dominant palettes, off‑axis alignment, realistic photography.

## 2. Constants

Light Mode:   Secondary – cream/ivory background, dark text, gold accents.
Dark Mode:    Primary – deep black or rich navy background, cream/text, gold accents.
Responsive:   Yes – breakpoints at 375 px (single-column stack) and 768 px (two-column symmetrical).
States:       Default, Active, Disabled, Hover, Focus.

surface-simulation: coated-card — lacquered card stock with foil-stamped metallic highlights; simulates luxury printed collateral, invitation stock, and enamelled decorative surfaces

**State behaviors:** Hover uses hard offset shadow (no blur) or gold outline brightening. Active uses inset shadow or gold fill inversion. Disabled drops opacity with no shadow. Focus uses thin gold dashed ring offset 2px.

## 2a — Interaction Model

hover-delta:        shadow-lift — hard offset shadow deepens from 4px to 6px offset; gold outlines may brighten on accent elements
active-delta:       inset-shadow — shadow reverses to inset on press; gold fill inversion on primary elements
focus-style:        color-border — thin gold dashed ring offset 2px from element edge
transition-duration:150ms — crisp transitions matching geometric precision
transition-easing:  ease-out
exempt-animations:  none

## 3. Colors

### Dark Mode (primary)

primary (#D4AF37) [conventional]
  — Signature Gold: primary actions, accents, borders, active states
on-primary (#0A0A0A) [inferred]
  — Near-black: text and icons on gold surfaces
primary-container (#B8960C) [inferred]
  — Dark Gold: container fills, secondary metallic areas
on-primary-container (#F5F0E8) [inferred]
  — Cream: text on primary-container

secondary (#C0C0C0) [conventional]
  — Silver/Chrome: secondary accents, cool metallic surfaces
on-secondary (#0A0A0A) [inferred]
  — Near-black: text on silver
secondary-container (#8A8A8A) [unverified]
  — Gunmetal: container fills for secondary surfaces
on-secondary-container (#1A1A1A) [unverified]
  — Near-black: text on secondary-container

tertiary: CONTESTED:§2.hex_accent — providers gave emerald (#005C4A, #008B5E, #006B54) and ruby (#E0115F, #9B111E); no majority; re‑stack required

neutral (#0D0D0D) [inferred]
  — Deep Black: dominant background
on-surface (#F5F0E8) [inferred]
  — Cream: body text on dark
on-surface-variant (#D4AF37) [inferred]
  — Gold: secondary text

error (#9B111E) [conventional]
  — Ruby: destructive actions, error states
on-error (#FFFFFF) [conventional]
  — White: text on error
error-container (#7A0D16) [unverified]
  — Dark Ruby: error container
on-error-container (#FFFFFF) [conventional]
  — White: text on error-container

outline (#D4AF37) [conventional]
  — Gold: borders, dividers
outline-variant (#8A7334) [unverified]
  — Dull Gold: secondary borders

### Light Mode (swap — changed only)

neutral:            #F5F0E8  (cream) [inferred]
on-surface:         #0D0D0D  (black) [inferred]
on-surface-variant: #8A7334  (dull gold) [unverified]
surface-container-lowest:  #FEFCF8 [unverified]
surface-container-low:     #F5F0E8 [unverified]
surface-container:         #ECE5D8 [unverified]
surface-container-high:    #E0D8C8 [unverified]
surface-container-highest: #D4CAB8 [unverified]
outline:            #B8960C  (dark gold) [unverified]
outline-variant:    #D4CAB8  (warm beige) [unverified]

**Palette logic:** Exactly 3–5 colors total (black, gold, silver, cream, one jewel tone). The jewel tone (emerald, ruby, or sapphire) is contested.

## 4. Typography

No provider cited a foundry and year for any typeface. Therefore all typeface names are contested.

display:
  font-family:      CONTESTED:§3.primary_typeface — providers suggested: ["Broadway, Futura Display, geometric display sans" / "Futura Extra Bold, ITC Avant Garde Gothic, Kabel" / "Futura PT" / "Archetype: Geometric Sans"]; none cited foundry; re‑stack required
  font-size:        text-5xl to text-6xl
  font-weight:      font-bold / font-black
  line-height:      leading-tight
  letter-spacing:   tracking-widest
  text-transform:   uppercase
  text-decoration:  none

headline:
  font-family:      CONTESTED:§3.secondary_typeface — providers gave: ["Futura Bold" / "Futura PT" / "Archetype: Geometric Sans"]; no foundry cited; re‑stack required
  font-size:        text-3xl to text-4xl
  font-weight:      font-bold
  line-height:      leading-snug
  letter-spacing:   tracking-wide
  text-transform:   uppercase

title:
  font-family:      (same as secondary)
  font-size:        text-xl to text-2xl
  font-weight:      font-semibold
  line-height:      leading-snug
  letter-spacing:   tracking-wide
  text-transform:   uppercase

body:
  font-family:      CONTESTED:§3.body_typeface — providers gave: ["Futura Book, Raleway" / "Futura Book" / "Futura PT" / "Inter"]; no foundry cited
  font-size:        text-base to text-lg
  font-weight:      font-normal (400)
  line-height:      leading-relaxed
  letter-spacing:   tracking-normal
  text-transform:   normal-case

label:
  font-family:      CONTESTED:§3.label_typeface — providers gave multiple; no consensus
  font-size:        text-xs to text-sm
  font-weight:      font-semibold or font-medium
  line-height:      leading-none
  letter-spacing:   tracking-wider
  text-transform:   uppercase

**Google Fonts substitute:** CONTESTED:§3.google_fonts_substitute — providers suggested: [Cinzel Decorative / Josefin Sans & Raleway / Syne / Inter]; no cited source; re‑stack required.

**Important:** All text is upright — no italic, no oblique. Inline decorative rules (thin gold horizontal line, 1px) sit between lines of text in headings. Tabular figures preferred for numerical data.

## 5. Elevation

Hard offset shadows with no blur.

flat:      shadow-none
raised:    shadow-[4px_4px_0_0_rgba(0,0,0,0.8)] — default interactive elements
           shadow-[6px_6px_0_0_rgba(0,0,0,0.8)] — hover / emphasised
           shadow-[8px_8px_0_0_rgba(0,0,0,0.8)] — modals

stacking:
  base-content:      z-0
  sticky-elements:   z-20
  dropdowns:         z-30
  overlays:          z-40
  modals:            z-50
  top-layer:         z-[60] — decorative overlays

**Shadow philosophy:** No blur, no gradient, no softness. In light mode, shadow colour shifts to `rgba(0,0,0,0.15)`.

## 6. Spacing & Sizing

padding:
  component-internal:  p-2 (8px) / p-3 (12px)
  section-internal:    p-6 (24px)
  page-edge:           px-8 (32px) / py-12 (48px)

margin:
  between-components:  gap-4 (16px)
  between-sections:    gap-8 (32px) / gap-12 (48px)

component-heights:
  sm:   h-8 (32px) — compact controls
  md:   h-10 (40px) — default interactive target
  lg:   h-12 (48px) — primary buttons

icon-size:       w-5 h-5 (20px) standard; w-6 h-6 (24px) navigation
avatar-size:     w-10 h-10 (40px) — rendered as geometric shield or medallion

## 7. Borders

border-radius:
  default:     rounded-none — sharp corners everywhere
  card:        rounded-none
  button:      rounded-none
  input:       rounded-none
  chip/badge:  rounded-none

border-width:
  default:     border (1px) — gold or cream
  emphasis:    border-2 (2px) — active states, focus rings

border-style:  border-solid

border-image:  conditional — sawtooth/chevron/stepped patterns using SVG data-URI
clip-path:     conditional — stepped setback contours on headers and panel tops

## 8. Opacity

disabled-state:     CONTESTED:§8.disabled_opacity — providers gave: [40% / 50% / 30%]; no majority
ghost/secondary:    opacity-70
overlay/scrim:      opacity-80 (black)
hover-feedback:     not opacity-based; uses shadow or colour change

selection:
  background:  rgba(212, 175, 55, 0.3)
  color:       inherit

scrollbar:
  style:       styled — gold track, black thumb
  width:       thin (6px)
  track:       #0D0D0D
  thumb:       #D4AF37
  thumb-hover: #B8960C

## 8.5. Visual Effects

### 8.5.0 — Physical Material Model

Declares the top-level surface simulation governing the entire page canvas.
This is distinct from component-level textures (§8.5d) — it is the global rendering layer.

material-model:    coated-card

global-filter:     none — no body-level colour filter; metallic sheen is achieved via gradient fills per-component, not global filtering

global-overlay:    Paper grain in light mode only via body::before pseudo-element:
                   SVG feTurbulence baseFrequency=0.8 numOctaves=3 fractalNoise
                   blend: overlay, opacity-8, pointer-events:none, position:fixed, z-index:9999
                   Applied only on cream/light surfaces; no overlay in dark mode.

rendering-flags:
  font-smoothing:  antialiased — smooth rendering for display typefaces; no pixel-art requirement
  image-rendering: auto — standard rendering for ornamental motifs and icons
  text-rendering:  auto

### 8.5a — Color Manipulation

No CSS filters for colour grading. Metallic surfaces use gradient fills, not filters.

### 8.5c — Gradients & Glow

background-image:
  type:         linear-gradient
  role:         structural — metallic sheen on accent shapes
  description:  Gold metallic gradient: top-left highlight (#F5E6A3) to mid-tone gold (#D4AF37) to shadow gold (#A0842A)
                Silver metallic gradient: top-left highlight (#E8F0F8) to mid-silver (#C0C0C0) to shadow (#808080)
  stops:        custom — no Tailwind gradient utility expresses metallic sheen
  animation:    none

text-shadow:    not used
filter: drop-shadow:  hard offset shadow (see §5)
glow:           not used

### 8.5d — Texture & Noise Simulation

paper-grain:
  technique:    SVG feTurbulence
  parameters:   baseFrequency: 0.8 / numOctaves: 3 / type: fractalNoise
  surface:      full-page canvas — only in light mode (cream backgrounds)
  intensity:    barely perceptible (opacity-8)
  blend:        overlay

halftone-dot-screen:
  technique:    CSS repeating radial-gradient
  parameters:   dot size 2px, spacing 4px, angle 45°
  surface:      metallic gradient fills (gold and silver areas)
  intensity:    moderate (opacity-12)
  blend:        overlay

misregistration-offset:
  technique:    CSS drop-shadow or pseudo-element offset
  parameters:   0.5–1px shift in x/y on metallic borders
  surface:      gold/silver outlines on primary buttons and decorative frames
  intensity:    barely perceptible

foil-stamping:
  technique:    layered metallic gradient + specular highlight + hard offset shadow
  surface:      display headlines, primary button text, logo marks

**Compositing stack (bottom→top):**
base fill → metallic gradient → halftone (overlay, opacity-12) → paper grain (overlay, opacity-8) → specular highlight
## 9. Components

**Icon vocabulary:**
system:       custom geometric line-art glyphs — chevrons, sunbursts, stepped arcs, stylised flora
size:         w-5 h-5 (20px) / w-6 h-6 (24px)
color:        inherits currentColor (gold or on-surface)
treatment:    flat, no glow, no shadow
restrictions: no filled icons, no organic curves, no rounded caps

**Buttons:**
Primary:
  shape:        rectangle, rounded-none
  fill:         primary gold (#D4AF37) — solid (or gradient)
  border:       border-2 gold (#D4AF37)
  text:         uppercase, tracking-widest, on-primary (#1A1A1A)
  shadow:       hard offset raised
  hover:        shadow deepens; fill brightens
  active:       inset shadow
  disabled:     opacity-40, no shadow

Secondary:
  shape:        rectangle, rounded-none
  fill:         transparent
  border:       border primary gold
  text:         uppercase, tracking-widest, on-surface (#F5F0E8) on dark
  hover:        fill becomes primary-container at opacity-20

Destructive:
  shape:        rectangle, rounded-none
  fill:         error ruby (#9B111E)
  border:       border-2 error ruby
  text:         uppercase, on-error (#FFFFFF)
  hover:        shadow deepens; fill brightens

**Cards / Panels:**
shape:        rectangle, rounded-none
fill:         surface-container-high (#2C2C2C) on dark; surface-container-low (#F5F0E8) on light
border:       border gold (#D4AF37) — optional stepped top edge using clip-path
shadow:       hard offset raised
padding:      p-4 (16px)
decorative:   gold chevron band at bottom (SVG repeating pattern)

**Navigation:**
layout:       horizontal bar, full width, gold bottom border
items:        uppercase, tracking-wide, text-sm, font-semibold
active:       gold underline or gold fill background
hover:        gold text or underline
spacing:      gap-8 (32px) between items
divider:      thin gold vertical rule (1px, h-4) between items

**Inputs / Forms:**
shape:        rectangle, rounded-none
background:   surface-container-lowest (#050505) on dark; #FEFCF8 on light
border:       border-bottom only (1px gold)
label:        uppercase, tracking-wider, text-xs, above input
focus:        border-bottom widens to 2px; thin gold dashed ring (offset 2px)
error:        border-bottom shifts to error ruby (#9B111E)
disabled:     opacity-40, no focus

**Style-native primitives:**
1. stepped-panel:
  clip-path polygon with 1–3 setback tiers (skyscraper silhouette)
  fill: primary-container or surface-container
  border: gold outline
  shadow: hard offset

2. chevron-band:
  SVG repeating chevron strip (16–24px height)
  color: primary gold or outline-variant
  use: card bottom borders, section dividers

3. sunburst-medallion:
  radial sunburst with 12–24 rays
  technique: conic-gradient or SVG
  size: 40–120px
  color: gold-to-transparent
  optional: slow rotation animation (5–10s linear infinite) in decorative contexts

## 10. Layout

**Grid tendency:** Strictly symmetrical with a strong central vertical axis. Left and right halves mirror each other. Content blocks align to vertical centre.

**Spacing cadence:** Generous page margins (px-8 to px-12), tight internal component spacing (p-2 to p-3). Sections separated by full-width gold decorative rules with 32–48px vertical gap.

**Density:** Moderate – compact blocks inside generous negative space.

**Alignment:** Centre-aligned for structural elements and headings; body text left-aligned.

**Breakpoint behavior:**
- 375 px (mobile): single column, stacked. Decorative rules remain, chevron bands reduce to 12px, sunbursts scale to 60px max.
- 768 px (tablet): full symmetric two-panel layout. Stepped panels regain tiers, chevron bands return to 16px.

**Motion:**
transition-duration:        200ms (hover/active), 600ms (section reveals)
transition-timing-function: linear-to-ease-out; no bounce or spring
transition-property:        opacity, box-shadow, border-color, background-color

animation:
  radial-reveal:  content fades and scales from centre (scale 0.8→1 + opacity 0→1) over 600ms ease-out
                  trigger: on-scroll-enter
  shimmer:        gold accent fade-up with specular highlight sweep (left-to-right, 1.5s)
                  trigger: on-load for foil-stamped text
  ring-rotate:    sunburst rotates 0→360° over 8s linear infinite
                  trigger: looping for decorative medallions only
  stepped-enter:  elements rise in vertical tiers (translateY 20px→0 + opacity 0→1, 400ms ease-out each)
                  trigger: on-scroll-enter for stepped panel sections

## 11. Design System Notes

### 11a. Use Constraints

**Appropriate for:** Luxury brand interfaces (fashion, jewelry, premium spirits, high-end hospitality), heritage institutions (museums, galleries), editorial magazines, theatrical event landing pages, dashboard skins requiring elegant authority.

**Wrong for:** Budget brands, playful consumer apps, healthcare interfaces, data-dense analytics dashboards, productivity tools, or contexts requiring high‑contrast accessibility with pure white backgrounds.

### 11b. Prompt Phrases

1. "Sharp stepped contours and zero-radius corners on every component — no rounded edges anywhere."
2. "Metallic gold accent on a deep midnight black ground, with hard offset shadows that carry no blur."
3. "Symmetrical layout anchored to a strong central axis, with mirrored content and geometric decorative borders."
4. "All-caps geometric sans-serif at the widest tracking, with thin gold rules between heading lines."
5. "Foil-stamped gold display text with a hard shadow offset — simulate brass or lacquer, not plastic."
6. "Compact internal spacing inside generous margins — every element feels architecturally planned."
7. "Ornament is limited to repeating chevron bands, sunburst medallions, and stepped setback profiles — nothing organic."
8. "Motion is linear-to-ease-out with no bounce or spring — transitions are mechanical and deliberate, not playful."

### 11c. Do / Avoid Block

rule: All primary accent surfaces carry a gold metallic gradient — flat single-tone gold is insufficient for the system's opulent register.
do:   Primary buttons, card borders, and stepped-panel outlines use primary gold (#D4AF37) with a metallic gradient or foil-stamp shimmer treatment.
avoid: Neon glow, gradient blurs, or flat opaque gold fill with no gradient or specular quality on primary accent surfaces.

rule: Major structural elements are centred on the vertical axis with left and right halves mirroring each other — asymmetry breaks the architectural geometry that defines the system.
do:   Hero headings, sunburst medallions, and primary content blocks are horizontally centred with px-8 to px-12 margins; body text is left-aligned within its column.
avoid: Left-aligned hero headings or centre-aligned body text paragraphs — the former breaks symmetry, the latter reduces readability.

rule: Every interactive surface uses a hard offset shadow with zero blur — the system simulates brass inlay and architectural relief, not material elevation.
do:   box-shadow: 4px 4px 0 rgba(0,0,0,0.6) on buttons and cards; shadow deepens on hover.
avoid: Smooth or soft shadows (box-shadow: 0 4px 12px rgba(0,0,0,0.15)) — these read as Material Design, not Art Deco.

rule: Ornament is limited to one motif family per composition zone — chevrons, sunbursts, or concentric frames, never all simultaneously.
do:   A card section uses chevron-band borders (16–24px SVG repeating strip in primary gold #D4AF37) at the bottom, with no sunburst or concentric frame in the same card.
avoid: Organic curves (swoops, vines, flowing lines) or multiple motif families crowded into a single component.

rule: Body text is always normal case; all-caps is reserved exclusively for headings and labels.
do:   Paragraph text in Raleway font-normal, normal case; headings in Poiret One uppercase tracking-widest.
avoid: Italics, oblique, or slanted text anywhere in the system — Art Deco lettering is upright and geometric.

rule: The palette is strictly limited to 3–5 colors; any additional color beyond gold, black, cream, and ruby must be a jewel tone.
do:   Midnight black (#0D0D0D), cream (#F5F0E8), gold (#D4AF37), ruby (#9B111E), emerald (#2E8B57) — five colors maximum.
avoid: Exceeding 5 colors in the palette, or introducing pastels, neons, or desaturated tones that dilute the jewel-box intensity.

rule: Every component uses rounded-none — zero radius on all corners without exception.
do:   Buttons, cards, inputs, panels, and stepped-panels are strict rectangles with border-radius: 0px.
avoid: border-radius: 4px or any rounded corner — even subtle rounding reads as a different design era entirely.

rule: All visual elements are geometric and flat — realistic photography is forbidden.
do:   Icons are custom geometric line-art glyphs (chevrons, sunbursts, stepped arcs at w-5 h-5 or w-6 h-6); imagery uses vector flatness with stylised shading.
avoid: Realistic photography, photorealistic rendering, or any organic/fluid line work — the system communicates through geometry and metallic flatness.

### 11d. Variation Bounds

1. **Geometric vs. Organic:** Soften strict geometry into stylised floral outlines (lotus, palm) while preserving symmetry, gold accents, and stepped forms.
2. **Flat vs. Textured:** Shift from pure vector flat to simulated embossed metallic inlay or engraved surfaces. Paper grain and halftone activate at the textured end.
3. **Dark vs. Light:** Dark mode deep black (#0D0D0D) dominant; light mode cream (#F5F0E8) dominant. Gold accent remains primary in both.
4. **Era-faithful vs. Contemporary remix:** Era-faithful uses full ornament (chevrons, sunbursts, stepped motifs) and bronze/warm gold. Contemporary remix subtracts ornament to 1–2 motifs, swaps gold for chrome/silver, or adds neon accents.
5. **Minimal geometry vs. Maximal ornament:** Minimal uses only one motif (stepped setback shape) with gold linework. Maximal uses chevron bands, sunbursts, concentric frames, and stepped panels simultaneously.
6. **Gilded luxury vs. Industrial streamline:** Gilded luxury uses gold leaf, ornate cartouches, warm metallic gradients. Industrial streamline uses brushed chrome, silver, flat gold outlines (no gradient), and removes motif ornament.

### 11e. Compositional Signatures

### 11e.i — At Rest
A single centred content panel on a deep midnight black (#0D0D0D) ground. The panel is a rectangle with rounded-none, filled surface-container-high (#2C2C2C), bordered in primary gold (#D4AF37) border-2, with a hard offset shadow (4px 4px 0 rgba(0,0,0,0.6)). The heading is Poiret One text-3xl uppercase tracking-widest in primary gold (#D4AF37). Body text is Raleway text-base font-normal in on-surface (#F5F0E8), left-aligned within the panel. A chevron band in primary gold runs along the panel's bottom edge (SVG repeating strip, 16px height). Page margins are generous at px-10 (40px). No animation is active — the composition is static, architecturally still, and symmetrically balanced around the central vertical axis.

### 11e.ii — Maximum Expressiveness
Three stepped-panels at varying heights arranged symmetrically around the central vertical axis, each with 1–3 setback tiers rendered via clip-path polygon. The tallest panel reaches full viewport height with a sunburst-medallion (conic-gradient, 12 rays, gold-to-transparent, 120px diameter) at its crown, rotating via ring-rotate animation (0→360°, 8s linear infinite). Foil-stamped display text on the central panel activates the shimmer animation (gold specular highlight sweep, left-to-right, 1.5s) on load. Chevron bands (24px, primary gold #D4AF37) separate each tier. Radial-reveal animation fades and scales the composition from centre (scale 0.8→1 + opacity 0→1, 600ms ease-out) on scroll-enter. Stepped-enter animation raises lower panels in vertical tiers (translateY 20px→0, 400ms ease-out each, staggered). Hard offset shadows on every surface. All content is contained within the symmetrical frame — no element bleeds off-edge.

### 11e.iii — Data Context
Numeric and tabular content is displayed in gold-bordered rectangle cells on surface-container-high (#2C2C2C). Data labels are Raleway text-xs uppercase tracking-wider in outline-variant (#8B8B8B). Data values are Poiret One text-xl font-normal in primary gold (#D4AF37), with hard offset shadow (2px 2px 0 rgba(0,0,0,0.4)). Tables use alternating row fills: odd rows at surface-container-high (#2C2C2C), even rows at surface-container (#1A1A1A). Cell borders are 1px solid primary gold (#D4AF37) at 30% opacity. Status states: ok mapped to emerald (#2E8B57), warn mapped to primary gold (#D4AF37), err mapped to ruby (#9B111E) — communicated as text color only, no glow or background fill change. Bar fills are solid primary gold (#D4AF37) with hard shadow (2px 2px 0 rgba(0,0,0,0.3)), no gradient on the fill bar. Chart surfaces use surface-container (#1A1A1A) background with gold grid lines (#D4AF37) at 20% opacity, 1px solid, and Raleway text-xs axis labels in on-surface-variant (#A0A0A0).

### 11f. Sources

This subject has minimal verified imagery. The visual claims below should be treated with caution.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** **Art Deco** is an international decorative arts and design movement documented from approximately 1920 to 1940, attributed broadly to the interwar period rather than a single designer or foundry. No specific identity description was captured in the forensic seed for this entry. The movement emerged most prominently from the 1925 **Exposition Internationale des Arts Décoratifs et Industriels Modernes** in Paris and encompasses architecture, industrial design, fashion, and graphic arts.

**Verified imagery sources.** 1 URLs verified against institutional servers, distributed across:
- en.wikipedia.org — 1 URL(s)

No key imagery references were captured by the forensic pipeline for this entry.

**Named typefaces.** The typography of this style is attested as:
- (none attested)

**Honest gaps.** No documented gaps were recorded by the forensic pipeline.
