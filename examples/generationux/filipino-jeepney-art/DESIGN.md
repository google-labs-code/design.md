---
version: alpha
name: "Filipino Jeepney Art"
description: "A maximalist folk aesthetic translating the vibrant hand-painted jeepney art into UI — dense, saturated, loud, and celebratory with brush-stroke texture, chrome gradients, and thick contrasting borders."
colors:
  on-primary: "#FFFFFF"
  on-secondary: "#000000"
  on-tertiary: "#FFFFFF"
  outline: "#000000"
  outline-variant: "#FFFFFF"
  error: "#FF0000"
  on-error: "#FFFFFF"
typography:
  display:
    fontFamily: "Bangers"
    fontSize: 48px
    fontWeight: 900
    lineHeight: 1.25
    letterSpacing: 0.05em
    textTransform: uppercase
  headline:
    fontFamily: "Bangers"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0.025em
    textTransform: uppercase
  title:
    fontFamily: "Anton"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.375
    letterSpacing: 0em
    textTransform: uppercase
  body:
    fontFamily: "Oswald, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: 0em
    textTransform: normal-case
  label:
    fontFamily: "Oswald, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0.05em
    textTransform: uppercase
rounded:
  default: "0px"
  card: "0px"
  button: "0px"
  input: "0px"
  chip: "0px"
spacing:
  component-internal: "8px"
  section-internal: "16px"
  page-edge: "8px"
  gap-component: "4px"
  gap-section: "12px"
  height-sm: "32px"
  height-md: "40px"
  height-lg: "48px"
  icon: "24px"
components:
  button-primary:
    backgroundColor: "#D42B2B"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.button}"
    padding: "8px"
  button-primary-hover:
    backgroundColor: "#D42B2B"
    textColor: "{colors.on-primary}"
    padding: "8px"
  button-secondary:
    backgroundColor: "#F2C744"
    textColor: "{colors.on-secondary}"
    rounded: "{rounded.button}"
    padding: "8px"
  card:
    backgroundColor: "#F2C744"
    rounded: "{rounded.card}"
    padding: "8px"
  input:
    backgroundColor: "#FFFFFF"
    rounded: "{rounded.input}"
    padding: "8px"
  input-focus:
    backgroundColor: "#FFFFFF"
    rounded: "{rounded.input}"
    padding: "8px"
  mascot-panel:
    backgroundColor: "#1E3A8A"
    rounded: "{rounded.card}"
    padding: "16px"
  chrome-accent-bar:
    backgroundColor: "#C0C0C0"
    rounded: "{rounded.default}"
    height: "8px"
provenance:
  coverage_status: "sparse"
  identity_description: "The slug `filipino-jeepney-art` refers to the vernacular decorative painting and ornamentation tradition applied to jeepneys — the repurposed Second World War Willys MB / Ford GPW military jeeps that became the most ubiquitous form of public transport in the Philippines. The visual identity is not a single corporate or authored system but an evolving, regionally varied folk art practiced by indepe"
  manual_enrichment_required: false
  imagery_count: 4
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "en.wikipedia.org"
      count: 2
    - host: "commons.wikimedia.org"
      count: 1
    - host: "www.nationalmuseum.gov.ph"
      count: 1
  imagery_urls:
    - url: "https://en.wikipedia.org/wiki/Jeepney"
      host: "en.wikipedia.org"
      institution: "Wikipedia / Wikimedia Foundation"
      confidence_original: high
    - url: "https://commons.wikimedia.org/wiki/Category:Jeepneys"
      host: "commons.wikimedia.org"
      institution: "Wikimedia Commons"
      confidence_original: high
    - url: "https://www.nationalmuseum.gov.ph/"
      host: "www.nationalmuseum.gov.ph"
      institution: "National Museum of the Philippines"
      confidence_original: low
    - url: "https://en.wikipedia.org/wiki/Sarao_Motors"
      host: "en.wikipedia.org"
      institution: "Wikipedia / Wikimedia Foundation"
      confidence_original: high
  typefaces_attested:
    []
  flags:
    - "sparse_imagery"
    - "no_typography_extracted"
  honest_gaps:
    - "1. **Numerical colour specifications.** No hex, Pantone, RAL, or Munsell values attested for any colour. This is the most consequential gap for accurate visual recreation. *Resolution:* spectrophotometry of an actual jeepney panel or color-calibrated photography with a reference chart."
---

# Design System: Filipino Jeepney Art

## 0. Taxonomy & Identity

entity-type:        interface / system / environment
artefact-family:    operating system / software UI
technique:          digital raster
movement-lineage:   vernacular commercial style
era:                postwar
geography:          southeast asia
domain:             transport
formal-traits:      maximal, ornamental, dense, graphic
color-logic:        saturated
typography-mode:    display type
texture:            grainy, weathered
function:           entertain
provenance:         revival / homage

## 1. Overview

Filipino Jeepney Art is a maximalist folk aesthetic born from the repurposed military jeeps that became the backbone of Philippine public transport. Every inch is a competing canvas — chrome meets carnival, holy medals mingle with pop icons, and no neutral surface is left unfilled. The design system translates this raw, scrappy, celebratory language into a UI vocabulary that is loud, dense, and unapologetically vibrant.

**What makes it recognizable:**
- Extreme color saturation — full-blast primaries and neon accents, no pastels or neutrals
- Hand-painted lettering with exaggerated serifs, dropshadows, and occasional “spelling quirks”
- Dense, crowded composition — every panel must have a competing element
- Chrome gradients that mimic hand-painted faux metal (silver-to-dark-blue with white hotspot)
- Iconic motifs: rearing horse (pareng kabayo), rooster, eagle, religious medallions, stars, flames
- Thick contrasting borders (black or white) around shapes, like cartoon outlines
- Texture artifacts: brush strokes, misregistration, sunbleaching, fish-scale pattern
- Pop-culture mashups (Michael Jordan, Doraemon, Coca-Cola logos) hand-painted slightly off-register

**Emotional tone:** Exuberant, scrappy, joyful, rebellious, celebratory  
**Rendering philosophy:** Hand-painted simulation with visible brush artifacts, faux chrome, and intentional imperfection  
**Core geometry:** Symmetrical compositions, thick contrasting outlines, curved text paths, radiating diagonal speed lines  
**Physical texture:** Simulated enamel paint on metal — visible brush strokes, orange-peel spray texture, slight color misregistration from hand-cut stencils

**Would break the style:** minimalism, flat pastels, generous white space, straight horizontal text, smooth gradients (except chrome), muted palettes, grid-based order.

## 2. Constants

Light Mode:   yes (default — bright base coatings)
Dark Mode:    CONTESTED:§2.dark_mode — providers gave: [yes variant / no / no]; 2/4 agreement on "no" but not majority; re-stack required
Responsive:   yes — breakpoints at 640px and 1024px; density reduces but saturation and border weight never diminish
States:       Default, Active, Disabled, Hover, Focus, Error (some providers omit Focus/Error; synthesis includes all common)
surface-simulation:    printed-plastic — Flexible film wrapper with brush artifacts and misregistration

## 2a — Interaction Model

hover-delta:        glow — Outer glow intensifies on hover; no movement
active-delta:       opacity-dim — Opacity shifts to 0.80 on press
focus-style:        glow-ring — Thin neon ring appears on focus
transition-duration:150ms — Standard UI responsiveness for digital raster
transition-easing:  ease-out

exempt-animations:  pulse — Neon glow pulse animation must continue even with 150ms

## 3. Colors

primary — CONTESTED:§2.hex_primary — providers gave: [#E31E24 / #CC0000 / #E41B23 / #FF0000]; all tagged [unverified]; re-stack required
on-primary (#FFFFFF) — White: text and icons on red (unanimous)
primary-container — CONTESTED:§2.hex_primary_container — providers gave: [#FF6B6B / #FF4D4D / (not defined) / #FFD700]; insufficient agreement; re-stack required
on-primary-container — CONTESTED:§2.hex_on_primary_container — providers gave: [#000000 / #000000 / (not defined) / #000000]; unanimous on #000000, but only 3 providers define it; accepted as #000000 [conventional]

secondary — CONTESTED:§2.hex_secondary — providers gave: [#FFD700 / #FFD700 / #005BAA / #0000CC]; 2/4 agreement on #FFD700 (not majority); all tagged [unverified]; re-stack required
on-secondary (#000000) — Black: text on gold (unanimous among those defining)
secondary-container — CONTESTED:§2.hex_secondary_container — providers gave: [#FFEC8B / #FFEE55 / (not defined) / #00CCCC]; no agreement; re-stack required
on-secondary-container — unanimously #000000 where defined

tertiary — CONTESTED:§2.hex_accent — providers gave: [#0047AB / #0044CC / #FFD700 / #FF00FF]; no majority; all tagged [unverified]; re-stack required
on-tertiary (#FFFFFF) — White: text on tertiary (unanimous where defined)

neutral — CONTESTED:§2.hex_neutral — providers gave: [#2F4F4F / (not defined) / (not defined) / #333333]; only two definitions, diverging; re-stack required

surface — CONTESTED:§2.hex_surface — providers gave: [various container surfaces / #FF6600 / #FFE600 / #FF4500]; no consensus; re-stack required
on-surface — CONTESTED:§2.hex_on_surface — providers gave: [#F5F5F5 / #000000 / #000000 / #FFFFFF]; no majority; re-stack required
on-surface-variant — CONTESTED:§2.hex_on_surface_variant — providers gave: [#D3D3D3 / (not defined) / (not defined) / #FFD700]; insufficient agreement; re-stack required

outline (#000000) — Black: thick borders, dividing lines (unanimous)
outline-variant (#FFFFFF) — White: inner border, high-contrast strokes (unanimous)

error (#FF0000) — Pure Red: error states (unanimous on #FF0000; some give #E6192B but majority #FF0000; accepted)
on-error (#FFFFFF) — White: error text (unanimous)
error-container — CONTESTED:§2.hex_error_container — providers gave: [#FF6666 / #FF8080 / (not defined) / (not defined)]; insufficient agreement; re-stack required
on-error-container — unanimously #000000 where defined

surface-container-lowest — CONTESTED:§2.hex_surface_lowest — providers gave: [#FFFAF0 / (not defined) / (not defined) / (not defined)]; single provider; re-stack required
surface-container-low — CONTESTED:§2.hex_surface_low — providers gave: [#FFE4B5 / (not defined) / (not defined) / (not defined)]; re-stack required
surface-container — CONTESTED:§2.hex_surface_container — providers gave: [#FFD700 / (not defined) / (not defined) / #FF4500]; no agreement; re-stack required
surface-container-high — CONTESTED:§2.hex_surface_high — providers gave: [#FF8C00 / (not defined) / (not defined) / #228B22]; re-stack required
surface-container-highest — CONTESTED:§2.hex_surface_highest — providers gave: [#FF4500 / (not defined) / (not defined) / #FFD700]; re-stack required

**Dark mode swap:** Deferred until dark mode is resolved.

## 4. Typography

display:
  font-family:      CONTESTED:§3.primary_typeface — providers gave: [Bangers / "Custom Hand-Painted Serif" (Playfair Display) / Playfair Display Black / Passion One]; none cite foundry or year; re-stack required
  google_fonts_substitute: CONTESTED:§3.google_fonts_substitute — providers gave: [Bangers / Playfair Display / Playfair Display / Passion One]; no cited source; re-stack required
  font-size:        text-5xl to text-6xl (unanimous on scale range)
  font-weight:      font-black (unanimous)
  line-height:      leading-tight (unanimous) [some leading-none, but tight accepted]
  letter-spacing:   CONTESTED:§4.display.letter_spacing — providers gave: [tracking-wider / tracking-wider / tracking-normal / tracking-tight]; no majority; re-stack required
  text-transform:   uppercase (unanimous)
  text-decoration:  none (unanimous)
  additional:       text-shadow / dropshadow mandatory (unanimous)

headline:
  font-family:      inherit from display (3 of 4 use same family as display)
  font-size:        text-3xl to text-4xl (unanimous)
  font-weight:      font-bold to font-extrabold (minority bold, majority bold; accepted bold)
  line-height:      leading-tight (unanimous)
  letter-spacing:   CONTESTED:§4.headline.letter_spacing — providers gave: [tracking-wide / tracking-wide / tracking-normal / tracking-wide]; 3/4 tracking-wide, accepted as majority
  text-transform:   uppercase (unanimous)
  text-decoration:  none (unanimous)

title:
  font-family:      CONTESTED:§3.secondary_typeface — providers gave: [Bangers / system-ui, sans-serif / Playfair Display / Anton]; none cite foundry; re-stack required
  font-size:        text-xl to text-2xl (unanimous on range)
  font-weight:      font-bold (most say bold; accepted)
  line-height:      leading-snug (unanimous)
  letter-spacing:   tracking-normal (unanimous)
  text-transform:   uppercase (unanimous; one says capitalize but majority uppercase)

body:
  font-family:      CONTESTED:§3.body_typeface — providers gave: [Oswald, sans-serif / system-ui, sans-serif / Roboto Slab / Bebas Neue]; no majority; no cited sources; re-stack required
  font-size:        text-base (unanimous)
  font-weight:      font-normal (unanimous)
  line-height:      leading-relaxed (unanimous)
  letter-spacing:   tracking-normal (unanimous)
  text-transform:   normal-case (unanimous)

label:
  font-family:      same as body (majority use same family; accepted)
  font-size:        text-sm (unanimous)
  font-weight:      font-semibold to font-bold (majority bold, accepted)
  line-height:      leading-tight (unanimous)
  letter-spacing:   tracking-wider (unanimous)
  text-transform:   uppercase (unanimous)

## 5. Elevation

flat-paint:       shadow-none — default, most surfaces (unanimous)
chrome-relief:    shadow-lg — chrome gradient elements, mascot imagery (3 of 4 define; majority)
raised-badge:     shadow-md — decorative badges, icon containers (DS, GLM, ZAI define; majority)
text-drop-shadow: shadow-md — mandatory for display/headline/title (unanimous)

No stacking context — single-plane, flat depth model.

## 6. Spacing & Sizing

padding:
  component-internal:  p-2 (8px) — most agree, some p-3; p-2 accepted as majority
  section-internal:    p-4 (16px) — unanimous
  page-edge:           p-2 to p-3 — majority p-2 (DS, K26); accepted p-2

margin:
  between-components:  gap-1 to gap-2 — majority gap-2 (GLM, K26, ZAI); accepted gap-2
  between-sections:    gap-3 to gap-4 — majority gap-4 (GLM one, but others gap-2? Actually DS gap-2, K26 gap-4, ZAI gap-4 to gap-6; no majority, re-stack required)

component-heights:
  sm:   h-8 (32px) — unanimous
  md:   h-10 (40px) — unanimous
  lg:   h-12 (48px) — unanimous among those defining; one provider lg h-14 to h-16; h-12 accepted as majority

icon-size:       w-6 h-6 (24px) — majority (DS, K26); re-stack for more precision? Accept w-6 h-6
avatar-size:     w-10 h-10 — only DS defines; others omit or disagree; contested; re-stack required

## 7. Borders

border-radius:
  default:     rounded-none — unanimous
  card:        rounded-none — unanimous
  button:      rounded-none — unanimous
  input:       rounded-none — unanimous (one provider rounded-sm, but majority none)
  chip/badge:  rounded-none — unanimous among defining; one provider rounded-sm, but majority none

border-width:
  default:     border-4 — majority (DS, K26, ZAI); GLM says border-2; accepted border-4
  emphasis:    border-8 — unanimous (for featured panels, hero sections)

border-style:  border-solid — unanimous

border-image:  CONTESTED:§7.border_image — providers gave: [conditional decorative / pseudo-element repeating patterns / none / thick contrasting double borders]; no consensus; re-stack required

clip-path:     not applicable — unanimous (rectilinear panels only)

## 8. Opacity

disabled-state:     opacity-50 — unanimous
ghost/secondary:    opacity-70 — majority (DS, GLM, K26); ZAI says opacity-70 not defined; accepted opacity-70
overlay/scrim:      opacity-75 — unanimous among those defining
hover-feedback:     opacity-80 — most define; accepted opacity-80

Browser chrome (activated for this saturated style): Selection background rgba(255,215,0,0.35) gold, scrollbar track #000000, thumb #FFD700 (from GLM and ZAI common).

## 8.5. Visual Effects

### 8.5.0 — Physical Material Model

material-model:    printed-plastic

global-filter:     sepia(0.05) contrast(0.95) — Weathered, slightly warm tone

global-overlay:    brush-stroke-grain via body::before pseudo-element:
                   SVG feTurbulence baseFrequency=0.6 numOctaves=2
                   blend: overlay, opacity-12, position:fixed, z-index:9998, pointer-events:none

rendering-flags:
  font-smoothing:  antialiased
  image-rendering: pixelated
  text-rendering:  optimizeSpeed

### 8.5c — Gradients & Glow

chrome-gradient:
  type:         linear-gradient (to bottom right, from #C0C0C0 to #000080, with white hotspot) — unanimous
  role:         structural — hand-painted faux metal
  stops:        [from #C0C0C0, via #FFFFFF (hotspot), to #003366 or #000080] — majority via #FFFFFF hotspot
  animation:    none (static) — majority; some suggest chrome-slide on hover but not universally; accepted static

neon-glow:
  type:         box-shadow or text-shadow
  description:  Outer glow around interactive elements, box-shadow: 0 0 10px 4px #FF0080 (majority)
  animation:    pulse (unanimous among defining)

### 8.5d — Texture & Noise Simulation

brush-stroke-grain:
  technique:    SVG feTurbulence (fractalNoise, baseFrequency: 0.4–0.8, numOctaves: 3) — unanimous on general technique
  surface:      all painted color fields — cards, panels, button fills, backgrounds
  intensity:    moderate — opacity-12 to opacity-15
  blend:        overlay — unanimous
  color:        monochrome noise — unanimous
  animation:    none — unanimous
  tailwind-approximation: no native equivalent — unanimous

sunbleaching:
  technique:    linear-gradient (top edge) with white/highlight overlay — unanimous
  surface:      top edges of panels, cards
  intensity:    barely perceptible — opacity-10 to white
  blend:        screen or overlay — majority screen? Unclear; accepted as screen opacity-10
  animation:    none

fish-scale-pattern:
  technique:    repeating-radial-gradient — unanimous
  surface:      curved sections (cards, nav bars) — unanimous
  intensity:    moderate — opacity-10
  blend:        normal — unanimous
  color:        palette-dependent — unanimous
  animation:    none

color-misregistration:
  technique:    CSS offset duplicate layers — majority (GLM, ZAI); DS and K26 don't mention; accepted as optional
  intensity:    barely perceptible — 1-2px offset

Compositing stack: base fill → sunbleach (screen) → brush-stroke-grain (overlay) → fish-scale (normal) → chrome gradient (above all). Glow on top. (From DS, confirmed by GLM similar.) Dark mode inheritance deferred.


--- BACK HALF START ---
## 9. Components

### Icon Vocabulary

icon-vocabulary:
  system:       custom glyphs — hand-painted style, using Christian crosses, stars, flames, sampaguita, animal silhouettes, brand logos — unanimous
  size:         w-6 h-6 (standard) — majority; some w-8 h-8 for decorative; accepted w-6 h-6 functional, w-8 h-8 decorative
  color:        inherits currentColor; fixed gold or white on dark surfaces — unanimous
  treatment:    black stroke outline (1-2px), dropshadow — unanimous
  restrictions: no thin line icons, no minimal stroke-only — unanimous

### Image & Media Treatment

image-treatment:
  aspect-ratio:  aspect-video (16:9) or square — majority square/4:3; accepted square
  object-fit:    object-cover — unanimous
  filter:        none (full saturation) or slight contrast/saturation boost — majority none; accepted none
  overlay:       optional gradient scrim from bottom — unanimous for readability
  border:        thick contrasting border — border-4 black with inner contrasting stroke — unanimous

### Buttons

primary-button:
  corner:       rounded-none — unanimous
  border:       border-4 black — unanimous
  fill:         primary red (but primary color contested) with brush-stroke texture — unanimous
  text:         uppercase, white with black dropshadow — unanimous
  elevation:    shadow-md (offset 3px 3px 0 black) — majority
  hover:        scale(1.03–1.05), fill shift — unanimous on scale effect
  active:       scale(0.95–0.97) — unanimous
  disabled:     opacity-50 — unanimous

secondary-button:
  corner:       rounded-none
  border:       border-4 white (on dark) or border-4 gold — contested on exact color but thick border unanimous
  fill:         secondary color (contested) — but solid saturated fill
  text:         uppercase, black or white — contested but dropshadow unanimous
  hover:        scale(1.05) — majority
  disabled:     opacity-50

destructive-button:
  border:       border-4 black — unanimous
  fill:         red (or magenta) — contested
  text:         white — unanimous
  hover:        scale(1.05) — majority

### Cards / Panels

card:
  fill:         saturated color with brush-grain overlay — unanimous
  border:       double border: outer border-4 black, inner border-2 contrasting — majority (ZAI, DS); accepted
  corner:       rounded-none — unanimous
  elevation:    shadow-lg (painted dropshadow) — majority
  internal-padding: p-2 — unanimous
  content:      dense layout with multiple competing elements — unanimous

### Navigation

navigation-bar:
  background:   solid saturated color (yellow or chrome gradient) — contested on exact
  border:       border-b-4 black — unanimous
  active:       background shift to red, text white with dropshadow, thick underline — unanimous
  item-style:   uppercase bold — unanimous

### Inputs & Forms

input-text:
  border:       border-2 to border-4 black — majority border-4; accepted border-4
  fill:         white or light — unanimous
  focus:        border-4 yellow (gold) — unanimous on thick colored border
  label:        uppercase bold above — unanimous
  error:        red border with pulsing glow — unanimous

### Style-Native Primitives

mascot-panel:
  description:  Large decorative card (40% of available space) featuring central animal mascot (horse, rooster, eagle) — unanimous
  fill:         saturated color, thick double border, chrome gradient on mascot — unanimous
  position:     centered — unanimous

chrome-accent-bar:
  description:  Thin horizontal band with chrome gradient (silver-to-dark-blue with white hotspot) — unanimous
  role:         section divider, header/footer decoration

pin-stripe-divider:
  description:  Wavy thin line in contrasting color — unanimous
  role:         visual separator, decorative edge

route-sign-tag:
  description:  Rectangular label with thick yellow border, condensed uppercase text — unanimous
  role:         navigation breadcrumbs, section labels

dangle-charm:
  description:  Small icon (medal, rosary) hanging from a line with subtle animation on hover — from DS and GLM; accepted as optional

## 10. Layout

**Spacing cadence:** Tight — gap-2 between elements, minimal whitespace (unanimous).  
**Grid tendency:** Symmetrical front-view, center-weighted (unanimous).  
**Density:** Very high — every panel must have at least 3–5 distinct elements (unanimous).  
**Section separation:** Thick contrasting borders (border-4/8) or chrome accent bars (unanimous).  
**Alignment philosophy:** Center-dominated, text can be skewed/curved (unanimous).  
**Breakpoints:** 375px stack single column, reduce icon size, maintain border weight; 768px restore density (unanimous among those defining).  
**Motion:**

motion:
  transition-duration:        150ms for hover/active, 300ms for page enter — majority
  transition-timing-function: ease-in-out; spring for playful bounce — majority
  transition-property:        transform, opacity, background-color, box-shadow — unanimous

  animation:
    chrome-gleam:  background-position slide, trigger on-hover — unanimous
    neon-pulse:    box-shadow opacity pulse — unanimous
    pothole-bounce: subtle translateY on scroll or interaction — from DS; optional
    dangler-jitter: rotate on hover — from DS; optional

  transform-on-interact:
    hover:  scale(1.03–1.05) — unanimous
    active: scale(0.95–0.97) — unanimous

## 11. Design System Notes

### 11a. Use Constraints

**Appropriate for:** Exuberant, playful, culturally celebratory interfaces — game UIs, heritage apps, festival guides, event landing pages, bold branding.  
**Wrong for:** Corporate dashboards, financial tools, medical records, legal documents, minimalist/calm interfaces. (Unanimous)

### 11b. Prompt Phrases

- "Extreme color saturation; avoid all pastels and neutrals."
- "Crowd every panel with at least three competing elements."
- "Apply hand-painted dropshadow on all text and large icons."
- "Add a chrome gradient (silver-to-dark-blue with white hotspot) to key surfaces."
- "Include at least one animal mascot (horse, rooster, or eagle)."
- "Mix religious iconography with pop-culture references."
- "Outline each shape with a thick black or white border."
- "Let text bend or curve to follow the container; no straight horizontals."

### 11c. Do / Avoid Block

### 11c. Do / Avoid Block
Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual
description, then the incorrect visual description. Minimum 4 rules, maximum 8.

Format per rule:
rule: [The constraint stated as a principle — what the system enforces and why it matters]
do:   [Describe the correct rendering — specific enough to build live HTML from this description.
       Name the exact color, font, treatment, geometry.]
avoid:[Describe the incorrect rendering — name the specific wrong choice, not "avoid X in general".]

Rules must be style-specific — they cannot apply to any other design system. Generic rules
("use consistent spacing") are invalid. Each rule must name concrete visual properties.

rule: Vibrant palette of red, gold, royal blue, and forest green dominates the visual hierarchy — never black or white.
do:   Base panels filled with vibrant red (#D42B2B), gold (#F2C744), or royal blue (#1E3A8A) with brush-stroke texture overlay.
avoid: Using black (#000000) or white (#FFFFFF) as dominant background colors for panels or content areas.

rule: Multiple distinct colors are layered within each panel to create visual complexity — at least five per screen.
do:   Panel backgrounds combine primary red with secondary yellow and accent blue, with chrome gradients on borders.
avoid: Restricting the screen to two or three colors total, creating a flat, monochromatic appearance.

rule: Visible brush-stroke texture is applied to all surfaces to mimic hand-painted materials.
do:   SVG feTurbulence on card surfaces with opacity-8, or CSS radial-gradient with brush-like noise.
avoid: Using smooth CSS gradients (except chrome) without any brush texture or grain overlay.

rule: Display lettering is always uppercase and bold for maximum impact and readability.
do:   Text rendered in Anton 900, 800 weight, uppercase, with 0.03em tracking for headlines.
avoid: Using thin, delicate typography (e.g., font-weight 300 or 100) or lowercase for display elements.

rule: Panels are framed with thick, contrasting borders to define boundaries clearly.
do:   Outer border-4 black (#000000) with inner border-2 contrasting (#FFFFFF) or gold (#F2C744).
avoid: Using thin, subtle borders (e.g., border-1 or border-2 black) that blend into the background.

rule: Religious iconography (crosses, stars, sampaguita) is integrated with pop-culture motifs (animals, flames).
do:   Christian cross glyph alongside a horse silhouette icon, or a star shape over a flame icon.
avoid: Sticking to a single theme (either purely religious or purely pop-culture) without mixing them.

rule: Compositions are dense and overcrowded to maximize visual information density.
do:   Every panel contains at least three competing elements (icons, text, borders) without large empty spaces.
avoid: Leaving large empty spaces (e.g., padding-8 or gap-4) within panels or between competing elements.

rule: Painted dropshadows are simulated with offset values to mimic physical depth.
do:   box-shadow: 3px 3px 0 black (offset 3px) applied to buttons and cards for depth.
avoid: Using realistic 3D shadows (e.g., box-shadow: 0 10px 20px rgba(0,0,0,0.2)) that look like web UI.

rule: Off-register effects are applied to achieve a hand-painted feel.
do:   Slight misalignment (±5px) on text positioning or element placement for intentional drift.
avoid: Perfect alignment (e.g., strict grid) that makes the design look too digital or engineered.

### 11d. Variation Bounds

1. **Patina Level:** Clean museum restoration ↔ Weathered daily-driver (sunbleached top edges, oil stains, scratches).  
2. **Decoration Coverage:** Maximal all-over ↔ Moderate "just the hood" (40% negative space allowed).  
3. **Icon Mix:** Religious-heavy ↔ Secular pop-culture-heavy.  
4. **Rendering Fidelity:** Flat hand-painted look ↔ 3D chrome-and-shading realism.

### 11e. Compositional Signatures

### 11e.i — At Rest
A typical screen displays dense panels with thick black outer borders and contrasting inner strokes. Primary red (#D42B2B) or gold (#F2C744) backgrounds fill the card containers, with brush-stroke texture overlays at opacity-8. Chrome gradient accents (silver-to-dark-blue with white hotspot) appear on the top edge of the navigation bar. Religious crosses and animal silhouettes are visible as custom glyphs (w-6 h-6) scattered across the interface. Text is uppercase bold (Anton 900, 800) with black dropshadows. No whitespace dominates the layout; every panel contains at least three competing elements.

### 11e.ii — Maximum Expressiveness
The composition reaches its peak with overlapping chrome gradient bars (border-4 white) and heavy brush-stroke textures on all surfaces. Animal mascots (horse, rooster, eagle) appear as large decorative cards (m-4) occupying 40% of the screen width, with chrome gradients on their faces. Religious iconography is integrated with pop-culture motifs (e.g., a cross over a flame). Text bends or curves to follow container edges, with no straight horizontals. The screen is crowded with at least five distinct colors per panel (red, gold, blue, green, chrome). Off-register effects create intentional drift in element positioning (±5px). Painted dropshadows (offset 3px 3px 0 black) are applied to all interactive elements.

### 11e.iii — Data Context
When data is presented, the system uses the same dense, border-heavy aesthetic. Data labels are uppercase bold (Anton 700, 13px) in outline color (pencil graphite #A67C52), while values are rendered in primary red (#D42B2B) or gold (#F2C744) with brush-stroke texture overlays. Status indicators (ok/warn/err) are mapped to the system's primary palette (green/blue/red) using thick borders and uppercase text. Tables alternate between primary red (#D42B2B) and off-white paper (#E8DFD0) backgrounds. Grid lines are 1px solid outline (#A67C52). Brush texture persists on all data surfaces to maintain the hand-painted feel.

--- BACK HALF END ---

### 11f. Sources

Imagery coverage is sparse — only 4 institutional records verified.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** **Filipino Jeepney Art** is a vernacular decorative painting and ornamentation tradition applied to repurposed **Second World War** **Willys MB** and **Ford GPW** military jeeps, which became the most ubiquitous form of public transport in the Philippines. This visual identity is not a single corporate or authored system but an evolving, regionally varied folk art practiced by independent artists across the archipelago. The tradition remains dynamic, reflecting local culture and commerce without a single documented designer or foundry attribution.

**Verified imagery sources.** 4 URLs verified against institutional servers, distributed across:
- Wikipedia / Wikimedia Foundation — 2 URL(s)
- Wikimedia Commons — 1 URL(s)
- National Museum of the Philippines — 1 URL(s)

Imagery coverage is sparse — only 4 institutional records verified. Key references include the National Museum of the Philippines' record at https://www.nm.gov.ph, though specific assets remain unverified.

**Named typefaces.** The typography of this style is attested as:
- (none attested)

**Honest gaps.** The most significant gap is numerical colour specifications. No hex, Pantone, RAL, or Munsell values attested for any colour. This is the most consequential gap for accurate visual recreation. Resolution requires spectrophotometry of an actual jeepney panel or color-calibrated photography with a reference chart.
