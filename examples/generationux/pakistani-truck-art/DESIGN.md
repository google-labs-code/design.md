---
version: alpha
name: "Pakistani Truck Art"
description: "A maximalist digital interface inspired by the hand-painted folk tradition of Pakistani truck art: every surface densely ornamented with flat saturated colors, heavy black outlines, symmetrical mirroring, and Nastaliq calligraphy."
colors:
  primary: "#E31B23"
  on-primary: "#FFFFFF"
  primary-container: "#1A3A6B"
  on-primary-container: "#FFD700"
  secondary: "#008000"
  on-secondary: "#000000"
  secondary-container: "#FFA500"
  on-secondary-container: "#000000"
  tertiary: "#FF1493"
  on-tertiary: "#000000"
  tertiary-container: "#00CED1"
  on-tertiary-container: "#000000"
  neutral: "#000000"
  on-surface: "#FFFFFF"
  on-surface-variant: "#FFFFFF"
  surface-container-lowest: "#000000"
  surface-container-low: "#1A1A2E"
  surface-container: "#800020"
  surface-container-high: "#006400"
  surface-container-highest: "#4B0082"
  error: "#FF4C4C"
  on-error: "#000000"
  outline: "#000000"
  outline-variant: "#8B4513"
  accent: "#D4AF37"
typography:
  display:
    fontFamily: "Noto Nastaliq Urdu"
    fontSize: "48px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0em"
    textTransform: "none"
  headline:
    fontFamily: "Noto Nastaliq Urdu"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.025em"
    textTransform: "uppercase"
  title:
    fontFamily: "Bangers"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.375
    letterSpacing: "0em"
    textTransform: "capitalize"
  body:
    fontFamily: "Bangers"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: 1.625
    letterSpacing: "0em"
    textTransform: "uppercase"
  label:
    fontFamily: "Bangers"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.1em"
    textTransform: "uppercase"
rounded:
  default: "0px"
  card: "0px"
  button: "0px"
  input: "0px"
  chip: "9999px"
spacing:
  component-internal: "8px"
  page-edge: "16px"
  gap-component: "8px"
  height-sm: "32px"
  height-md: "48px"
  height-lg: "64px"
  icon: "24px"
components:
  button-primary:
    backgroundColor: "#E31B23"
    textColor: "#FFFFFF"
    rounded: "0px"
    padding: "8px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "#D4AF37"
    textColor: "#FFFFFF"
    rounded: "0px"
    padding: "8px"
    height: "48px"
  button-secondary:
    backgroundColor: "#D4AF37"
    textColor: "#000000"
    rounded: "0px"
    padding: "8px"
    height: "48px"
  card:
    backgroundColor: "#000080"
    rounded: "0px"
    padding: "8px"
  input:
    backgroundColor: "#FFFFFF"
    textColor: "#000000"
    rounded: "0px"
    padding: "8px"
    height: "48px"
  mirror-badge:
    backgroundColor: "#D4AF37"
    textColor: "#000000"
    rounded: "9999px"
    size: "24px"
  calligraphy-cartouche:
    backgroundColor: "#D4AF37"
    textColor: "#000000"
    rounded: "0px"
    padding: "8px"
  floral-filler-dot:
    backgroundColor: "#D4AF37"
    rounded: "9999px"
    size: "4px"
  faux-rivet:
    backgroundColor: "#8B4513"
    textColor: "#000000"
    rounded: "9999px"
    size: "8px"
provenance:
  coverage_status: "minimal"
  identity_description: "The slug `pakistani-truck-art` refers to the elaborate, hand-painted decoration of commercial trucks, buses, and trailers in Pakistan — a living folk‑art vernacular combining calligraphy, floral and geometric ornament, figurative painting, and reflective or mirrored embellishments. The tradition emerged in the mid‑20th century and continues today, with regional variations (Punjab, Sindh, Khyber Pa"
  manual_enrichment_required: true
  imagery_count: 2
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "en.wikipedia.org"
      count: 1
    - host: "collections.vam.ac.uk"
      count: 1
  imagery_urls:
    - url: "https://en.wikipedia.org/wiki/Truck_art_in_Pakistan"
      host: "en.wikipedia.org"
      institution: "Wikipedia"
      confidence_original: high
    - url: "https://collections.vam.ac.uk/search/?q=pakistani+truck+art"
      host: "collections.vam.ac.uk"
      institution: "Victoria and Albert Museum, London"
      confidence_original: low
  typefaces_attested:
    - name: "Nastaliq"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "attested"
    - name: "Sulus/Thuluth"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "attested"
    - name: "Roman/English lettering"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "conventional"
  flags:
    - "few_usable_urls"
    - "1_robots_disallowed_urls"
  honest_gaps:
    - "1. **Colour specifications** – No verified hex, Pantone, or RAL measurements. All colour references are inferred or conventional."
---
# Design System: Pakistani Truck Art

## 0. Taxonomy & Identity

entity-type:           interface / system / environment
artefact-family:       operating system / software UI
technique:             digital raster
movement-lineage:      vernacular commercial style
era:                   postwar
geography:             south asia
domain:                transport
formal-traits:         maximal, dense, ornamental, symmetrical
color-logic:           saturated
typography-mode:       display type
texture:               glossy, grainy
function:              persuade
provenance:            revival / homage

## 1. Overview

Pakistani Truck Art is a maximalist, hand-painted folk tradition that transforms commercial vehicles into moving shrines of pride, prayer, and play. Every surface is covered: flat saturated color fields, heavy black outlines, symmetrical floral arrangements, mirror accents, and bold Nastaliq calligraphy. The UI translation retains this ethos: no neutral space, no empty background, every pixel decorated. It is joyful, devotional, and unapologetically loud.

**What makes it recognizable:**
- Full-coverage decoration – every panel, edge, and protrusion painted; no negative space
- Heavy black (or dark brown) outlines around every major shape (like stained glass)
- Symmetrical mirroring along vertical axis
- Hand-painted roughness: visible brush strokes, slight wobble, paint drips
- Mirrored accents (shisha) with cross‑hatching and white reflection dots
- Floral vines, lotuses, and geometric borders as fillers
- Bold Nastaliq calligraphy in highest‑contrast area, often within concentric circles or cartouches
- Saturated complementary color pairs: red/green, blue/orange, yellow/purple
- 3–5 layered decorative borders around central motifs (thin white line, thick colored bar, zigzag/scallop trim)

**What would break it:** empty space, gradients, digital perfection, sans-serif fonts, subtlety, neutrals, asymmetric composition.

## 2. Constants

Light Mode:   no – primary mode is deep, saturated backgrounds (navy, maroon, forest green, indigo)
Dark Mode:    variant – keep deep canvases; adjust text shadows for readability if needed
Responsive:   yes – breakpoints at 375px (single‑column, reduced ornament layers) and 768px (two‑column, full density)
States:       Default, Active, Disabled, Hover, Focus
surface-simulation: collage — richly layered hand-painted motifs, floral arrangements, and mirrored accents simulating a decorative collage on metal surfaces.

## 2a — Interaction Model

hover-delta:        glow — mirror shimmer (radial gradient pulse) activates on primary interactive elements; slight scale-up (transform: scale(1.02)) for buttons
active-delta:       scale-down — elements press slightly (transform: scale(0.98)), with heavy outline deepening to border-4
focus-style:        thick-outline — border-4 solid #000000 (outline color) and an inner gold (#D4AF37) dotted rule, no glow ring
transition-duration: 200ms — brisk, hand‑painted reaction; mirror glow animation runs independently
transition-easing:  ease-out — quick start, settle; feels physical but not mechanical
exempt-animations:  mirror-glow (pulse animation defined in §8.5c, permanent / infinite loop, must survive transition‑duration overrides)

## 3. Colors

All colors are flat, unblended, and applied with crisp edges. Use Tailwind arbitrary values for exact hexes. Every hex below carries the tag `[unverified]` because no provider cited a primary source.

primary:                         CONTESTED:§2.hex_primary — providers gave [#E31B23 / #000080 / #0B0B2B / #0047AB / #C41E3A]; no majority; re‑stack required
on-primary:                      #FFFFFF [unverified]
primary-container:               CONTESTED:§2.hex_primary_container — providers gave [#1A3A6B / #003366 / #800000 / #1B3A5C]; no majority; re‑stack required
on-primary-container:            CONTESTED:§2.hex_on_primary_container — providers gave [#FFD700 / #FFFFFF]; no majority; re‑stack required

secondary:                       CONTESTED:§2.hex_secondary — providers gave [#008000 / #50C878 / #006400 / #DC143C / #2E8B57]; no majority; re‑stack required
on-secondary:                    CONTESTED:§2.hex_on_secondary — providers gave [#000000 / #FFFFFF / #D4AF37]; no majority; re‑stack required
secondary-container:             CONTESTED:§2.hex_secondary_container — providers gave [#FFA500 / #6B2D7B]; no majority; re‑stack required
on-secondary-container:          CONTESTED:§2.hex_on_secondary_container — providers gave [#000000 / #FF69B4]; no majority; re‑stack required

tertiary:                        CONTESTED:§2.hex_tertiary — providers gave [#FF1493 / #DC143C / #008000 / #FF8C00]; no majority; re‑stack required
on-tertiary:                     CONTESTED:§2.hex_on_tertiary — providers gave [#000000 / #FFD700 / #1A1A2E]; no majority; re‑stack required
tertiary-container:              #00CED1 [unverified] – two providers agree; treated as candidate but not locked
on-tertiary-container:           #000000 [unverified] – only one provider; weak

neutral:                         #000000 [unverified]
on-surface:                      #FFFFFF [unverified] – majority (4 of 5)
on-surface-variant:              CONTESTED:§2.hex_on_surface_variant — only one provider [#FFFFFF]; re‑stack required

surface-container-lowest:        #000000 [unverified] – majority (3 of 5)
surface-container-low:           CONTESTED:§2.hex_surface_container_low — providers gave [#1A1A2E / #1A0A2E]; no majority; re‑stack required
surface-container:               CONTESTED:§2.hex_surface_container — providers gave [#800020 / #800000 / #2D1B3D]; no majority; re‑stack required
surface-container-high:          CONTESTED:§2.hex_surface_container_high — providers gave [#006400 / #FF9933 / #3D2B1F]; no majority; re‑stack required
surface-container-highest:       CONTESTED:§2.hex_surface_container_highest — providers gave [#4B0082 / #4A1A2E]; no majority; re‑stack required

error:                           CONTESTED:§2.hex_error — providers gave [#FF4C4C / #FF4500 / #FF0000]; no majority; re‑stack required
on-error:                        CONTESTED:§2.hex_on_error — providers gave [#000000 / #FFFFFF]; no majority; re‑stack required

outline:                         #000000 [unverified] – unanimous
outline-variant:                 CONTESTED:§2.hex_outline_variant — providers gave [#8B4513 / #FFD700 / #D4AF37]; no majority; re‑stack required

accent:                          #D4AF37 [unverified] – three providers use this gold; placed here as conventional accent

**Dark mode swap table:** No light mode exists; all surfaces are inherently dark. The palette above is the single mode. For alternate panels, the primary background may shift from deep navy to maroon or forest green; accent colours remain fixed.

## 4. Typography

All type receives a solid 3D drop shadow (2px offset, no blur) on display/headline/title text. Letterforms have hand‑painted wobble; never digital‑perfect.

display:
  font-family:      CONTESTED:§3.primary_typeface — providers gave [Noto Nastaliq Urdu / Nastaliq (serif) / Nastaliq with Noto Nastaliq Urdu as GF substitute]; none cited a foundry; re‑stack required
  font-size:        text-5xl or text-6xl
  font-weight:      font-bold
  line-height:      leading-tight
  letter-spacing:   tracking-normal
  text-transform:   normal-case
  text-decoration:  none

headline:
  font-family:      CONTESTED:§3.primary_typeface (same as display) – no secondary typeface consensus among providers; re‑stack required
  font-size:        text-3xl or text-4xl
  font-weight:      font-bold
  line-height:      leading-tight
  letter-spacing:   tracking-wide (for English)
  text-transform:   uppercase (English only)
  text-decoration:  none

title:
  font-family:      CONTESTED:§3.secondary_typeface — providers gave [Noto Nastaliq Urdu / Bangers / Arial Black / Playfair Display]; none cited a foundry; re‑stack required
  font-size:        text-xl or text-2xl
  font-weight:      font-semibold or font-bold
  line-height:      leading-snug
  letter-spacing:   tracking-normal
  text-transform:   normal-case (Urdu) / capitalize (English)
  text-decoration:  none

body:
  font-family:      CONTESTED:§3.secondary_typeface — providers gave [Bangers / system-ui sans / Impact / Pattaya]; none cited a foundry; re‑stack required
  font-size:        text-base
  font-weight:      font-normal or font-bold (weight not consensus)
  line-height:      leading-relaxed
  letter-spacing:   tracking-normal
  text-transform:   uppercase (English only per some) / normal-case (others)
  text-decoration:  none

label:
  font-family:      CONTESTED:§3.secondary_typeface — same as body; re‑stack required
  font-size:        text-xs or text-sm
  font-weight:      font-semibold or font-bold
  line-height:      leading-none
  letter-spacing:   tracking-widest
  text-transform:   uppercase
  text-decoration:  none

google_fonts_substitute: CONTESTED:§3.google_fonts_substitute — some providers suggest Noto Nastaliq Urdu, others no substitute; no cited foundry; re‑stack required

**Monospace / tabular:** Not used. All type is expressive hand‑lettering. For numerals (truck numbers), use chunky display type with floral swashes.

## 5. Elevation

Flat depth model – no shadow hierarchy. All surfaces lie on the same z‑plane.

**Text drop shadow** (required on all display, headline, and title text):
text-shadow: 2px 2px 0 #000000 (no blur)

**Mirror accents** (shisha) use a small white reflection dot (`filter: drop-shadow(1px 1px 0 white)` to simulate specular highlight). No other elevation.

**Stacking context:** Minimal; z‑index only for layering painted elements (base colour → motif → calligraphy → mirror accent). No complex stacking.

## 6. Spacing & Sizing

Dense packing. No empty space; use decorative fillers (tiny flowers, geometric stars) to occupy all gaps.

padding:
  component-internal:  p-2 (compact)
  section-internal:    CONTESTED:§6.padding_section — providers diverged [p-3 / p-4 / p-6 / p-8]; re‑stack required
  page-edge:           p-4

margin:
  between-components:  gap-2
  between-sections:    CONTESTED:§6.gap_sections — providers diverged [gap-4 / gap-6 / gap-8]; re‑stack required

component-heights:
  sm:   h-8 (small buttons, badges)
  md:   h-12 (default interactive target)
  lg:   h-16 (hero buttons, large cards)

icon-size:       w-6 h-6 minimum
avatar-size:     w-12 h-12 (circular, with decorative border)

**Spacer filler:** Use decorative motifs (e.g., `content: '🌸'`, `content: '✦'`) in `::before`/`::after` rather than blank space.

## 7. Borders

All borders are solid, heavy lines. No border-radius interiors.

border-radius:
  default:     rounded-none
  card:        rounded-none
  button:      rounded-none
  input:       rounded-none
  chip/badge:  rounded-full (only for mirror accents)

border-width:
  default:     border-2 (all interactive elements)
  emphasis:    border-4 (focus rings, dividers between decorative bands)
  decorative:  border-2 with zigzag or scallop pattern (use `border-image`)

border-style:  border-solid

border-image:  [for decorative bands only]
               Zigzag: repeating-linear-gradient(45deg, #000, #000 2px, transparent 2px, transparent 4px)
               Scallop: radial-gradient(circle at 50% 100%, #000 3px, transparent 3px) repeat-x
               Apply as `border-image-source` with `border-image-slice: 1` on top/bottom borders.

clip-path:     [mirror accents] clip-path: circle(50%) – represents embedded circular mirrors.
               Optional: scalloped arch for cartouches.

**Geometry:** All corners sharp. Mirrors are circular (`aspect-square`, `rounded-full`, `clip-path: circle(50%)`).

## 8. Opacity

disabled-state:     CONTESTED:§8.opacity_disabled — providers diverged [opacity-80 / opacity-40 / opacity-30 / opacity-50]; re‑stack required
ghost/secondary:    CONTESTED:§8.opacity_ghost — providers diverged [opacity-90 / opacity-70 / opacity-60 / opacity-80]; re‑stack required
overlay/scrim:      CONTESTED:§8.opacity_overlay — providers diverged [opacity-75 / opacity-50 / opacity-80]; re‑stack required
hover-feedback:     CONTESTED:§8.opacity_hover — providers diverged [color shift / opacity-80 / opacity-100]; re‑stack required

**Browser chrome (dark mode):**
selection:
  background:  gold highlight (various rgba values; no consensus)
  color:       dark text on gold

scrollbar:
  style:       styled – decorative, thick
  width:       ~12px (some providers suggest thin 6px; re‑stack required)
  track:       deep navy or maroon
  thumb:       gold (#D4AF37) with black border
  thumb-hover: brighter gold

## 8.5 Visual Effects – Texture & Ornamentation

### 8.5.0 — Physical Material Model

material-model:    collage — layered hand-painted motifs, floral vines, mirror accents, and heavy outlines simulating a decorative collage on metal surfaces.

global-filter:     none — no overall color manipulation; colors remain flat and crisp

global-overlay:    enamel-grain SVG feTurbulence (baseFrequency 0.65–0.7, numOctaves 3, type fractalNoise) applied as body::before with mix-blend-mode: overlay, opacity 5–15% (as described in §8.5d). Provides a subtle painted metal texture across the entire canvas.

rendering-flags:
  font-smoothing:  antialiased
  image-rendering: auto
  text-rendering:  auto

### 8.5a – Color Manipulation

None. All colors are flat, unblended, and applied with crisp edges. No filters.

### 8.5b – Surface Layering (Backdrop Filters)

Not used. The style does not use frosted glass or layered translucency.

### 8.5c – Gradients & Glow

**Mirror shimmer (microanimation on hover):**
mirror-glow:
  background: radial-gradient(circle at center, #FFD700 0%, #D4AF37 100%)
  animation: none at rest; on hover, pulse between #FFD700 and #FFA500 over 1.5s ease-in-out infinite
  paired with drop-shadow: drop-shadow-[0_0_4px_rgba(255,215,0,0.8)]

All other surfaces are flat color. No linear gradients on backgrounds.

### 8.5d – Texture & Noise Simulation

**Grain (simulate enamel over metal):**
enamel-grain:
  technique:    SVG feTurbulence
  parameters:   baseFrequency 0.65–0.7, numOctaves 3, type fractalNoise
  surface:      all surfaces (global overlay)
  intensity:    barely perceptible – 3–15% opacity (providers disagree on exact)
  blend:        mix-blend-mode: overlay
  color:        monochrome noise
  animation:    none
  tailwind-approximation: no native equivalent; use CSS filter or SVG overlay

**Paint‑drip:**
paint-drip:
  technique:    CSS pseudo-element with border-radius and gradient
  parameters:   small triangular tail at bottom of vertical shapes
  surface:      bottom edge of component containers / buttons
  intensity:    moderate – 1–2 per component
  color:        inherit (same fill colour as parent, slightly darker)

**Misregistration:**
misregistration:
  technique:    box-shadow inset 1px of contrasting colour, or multiple pseudo-element backgrounds
  parameters:   second colour bleeds 1–2px over the first
  surface:      card/panel borders
  intensity:    subtle
  color:        adjacent complementary colour

**Faux‑wood‑grain (optional lower panel):**
faux-wood-grain:
  technique:    repeating-linear-gradient with thin brown/tan combed lines
  parameters:   45deg stripes 2px width
  surface:      lower section of cards or footers
  intensity:    moderate
  color:        #8B4513 and #A0522D
## 9. Components

### Icon Vocabulary
icon-vocabulary:
  system:       custom hand‑painted glyphs – floral, geometric, animal motifs (lotus, peacock feather, star, crescent, tiger eye)
  size:         w-6 h-6 (standard), w-8 h-8 (decorative)
  color:        inherits currentColor with black outline; metallic variants use fixed gold (#D4AF37)
  treatment:    heavy black border-1 or border-2, no smooth corners; mirror accents get cross‑hatch overlay
  restrictions: no thin‑line icons, no standard library icons; every icon must have floral or curved element

### Image Treatment
image-treatment:
  aspect-ratio:  aspect-[1/1] square or aspect-[4/3] portrait
  object-fit:    object-cover
  filter:        slight contrast bump (+5%) to match painted surfaces
  overlay:       grain overlay (see 8.5d) plus nested decorative border frame
  border:        black border-2 around image, plus inner gold line and corner ornaments (stars or floral clips)
  dark-mode:     not applicable (always dark backgrounds)

### Buttons
- **Primary:** Flat saturated fill (contested hex), black border-2, white or gold text, `rounded-none`. Hover: mirror shimmer overlay (gold radial gradient pulse). Active: dark fill, gold text. Disabled: crosshatch pattern overlay + reduced opacity.
- **Secondary:** Gold (#D4AF37) background, black outline, black text. Hover: scale(1.05) with small floral burst animation.
- **Destructive:** Vivid red fill (contested hex), black outline, black text. No special hover.

All buttons: `font-weight: heavy`, `uppercase`, use chunky hand‑painted sans (contested typeface) or display role when calligraphic.

### Cards / Panels
- Fill: deep navy, maroon, or indigo (contested hexes)
- Border: composite 3–5 layers: thin white line, thick coloured bar, zigzag/scallop pattern, inner gold line
- Radius: `rounded-none`
- Elevation: flat
- Internal: dense – no card body padding > p-2; every gap filled with tiny flower or star glyph
- Header: calligraphic title with 3D drop shadow, centred, with floral corner decorations

### Navigation
- Vertical symmetrical mirroring or horizontal bar with decorative top/bottom borders
- Active state: gold background with black outline, floral tail accents
- Icon treatment: each nav item has a small animal or floral glyph

### Inputs / Forms
- Border: black border-2, `rounded-none`
- Background: white or very light cornsilk for readability, but with black outline
- Focus ring: gold border-4, no outline offset; small gold glow appears on focus
- Label: always uppercase, chunky sans, positioned above
- Placeholder: italicised hand‑painted style, muted gold

### Style‑Native Primitives
1. **Mirror Badges** – Circular `w-6 h-6` to `w-8 h-8`, `rounded-full`, black border, gold or silver fill, diagonal cross‑hatch, white reflection dot. Uses: accent badge, step indicator, notification count.
2. **Decorative Dividers** – Horizontal bands 3–5 layers: thin white line, thick coloured bar, zigzag or scallop pattern. Use `border-image` or layered `::before`/`::after`.
3. **Calligraphy Cartouche** – Arch‑topped or teardrop frame containing calligraphic phrase. Background: gold or teal. Border: black. Solid drop shadow.
4. **Floral Filler Dots** – Tiny 4px circles (or `content: '🌸'` pseudo‑elements) repeated in any empty space. Use `gap-1` grid or absolute positioning.
5. **Faux Rivet** – 8px circle with dark brown fill and black border, placed at component corners to simulate metal truck panel construction.

## 10. Layout

**Spacing cadence:** Dense. Use minimum safe whitespace (p-2, gap-1). Fill remaining space with decorative motifs.

**Grid tendency:** Symmetrical two‑column layout at 768px+. At 375px, single column with centred content. All grids use `grid-cols-2` (desktop) and `grid-cols-1` (mobile) with `gap-2`.

**Density level:** Maximal. No empty gutters. Use p-4 on sections, but inner components are tight.

**Section separation logic:** Use decorative dividers (5‑layer bands) rather than blank margin. Each major section has a different divider pattern (zigzag, wave, diamond, brick).

**Alignment philosophy:** Central symmetry. Content is centred horizontally with mirroring. Avoid left‑aligned blocks unless unavoidable (e.g., long text). Use `text-center` globally.

**Breakpoint behavior:**
- 375px (mobile): Single column, full‑width decorations. Dividers collapse to 3 layers. Calligraphy scales to `text-2xl`. Icon size reduces to w-5 h-5.
- 768px (tablet): Two‑column grid with symmetrical mirroring. Dividers full 5‑layer. Calligraphy at `text-3xl`. Side panels receive additional floral motifs.
- 1024px+: 6‑column grid for dense catalog of icon badges. Hero calligraphy at `text-5xl`. Mirrors scale to w-8 h-8.

### Motion

motion:
  transition-duration:        150ms (fast interactions: button hover, focus) / 300ms (medium: cards, panels) / 600ms (slow: entrance, decorative animations)
  transition-timing-function: ease-out (all state changes) / ease-in-out (mirror shimmer)
  transition-property:        opacity, transform, background-color, box-shadow
  transition-delay:           stagger 50ms for grouped elements (e.g., grid items)

  animation:
    mirror-shimmer:           background-color #FFD700 ↔ #D4AF37 over 1.5s ease-in-out infinite;
                              trigger: on-hover (only on hovered element)
    floral-sway:              transform rotate(0deg) ↔ rotate(5deg) over 2s ease-in-out infinite;
                              trigger: on-hover (on floral accents)
    entrance-rise:            transform translateY(20px) → translateY(0); opacity 0 → 1;
                              duration 600ms; timing ease-out; trigger: on-scroll-enter (once)
    sparkle-fade:             opacity 0 → 1 → 0 over 1.5s ease-in-out; trigger: looping
                              (applied to small gold dots in decorative borders)

  transform-at-rest:          all elements at transform: none (no permanent rotation or skew)
  transform-on-interact:      hover: scale(1.05) on buttons and mirror badges (duration 150ms, ease-out)
                              active: scale(0.95) on buttons (duration 100ms)
  transform-style:            flat
  backface-visibility:        hidden (if any card-flip is used, but not recommended for this style)

**No motion rule:** Avoid spring easing, bounce, or easing curves that create smooth digital feel. Use `ease-out` only.

## 11. Design System Notes

### 11a. Use Constraints

This design system is appropriate for:
- Cultural/heritage apps, travel e‑commerce, festive feature hubs, storytelling interfaces
- Products that want to evoke South Asian pride, devotion, or joyful spectacle
- Brand identities built on maximalist, handcrafted authenticity

It is **wrong** for:
- Productivity tools, data dashboards, medical or critical systems
- Minimalist brands, luxury minimalism, enterprise B2B
- Any context where readability speed or information density is top priority

### 11b. Prompt Phrases

1. "no empty space – every gap filled with a tiny flower or star"
2. "heavy black outlines, flat saturated colors, no gradients ever"
3. "symmetrical mirroring across a vertical axis"
4. "hand-painted look: visible brush strokes, slight wobble, paint drips"
5. "use Nastaliq calligraphy for all display type with solid black 3D drop shadow"
6. "circular mirror accents with cross-hatch and white reflection dot"
7. "decorative borders in 3–5 layers: thin white, thick colored, zigzag or scallop"
8. "every motif has a kohl-lined eye with white highlight dot"

### 11c. Do / Avoid Block

rule: No empty space is permitted; every surface must be densely ornamented.
do:   Fill every background with pattern, dot, or leaf; embed small mirror badges (circular, w-6 h-6, gold fill #D4AF37, black border) at decorative focal points.
avoid: Leaving any blank rectangular area larger than 16×16px – decorate it immediately.

rule: Color palette is limited to complementary, high‑contrast pairs; neutrals and pastels are excluded.
do:   Use complementary pairs (red/green, blue/orange, yellow/purple) on adjacent shapes. All colors are flat and saturated, never muted.
avoid: Neutral beige, grey, or pastel colors.

rule: All interactive elements must have heavy black outlines and sharp corners.
do:   Apply black border-2 (`#000000`, `border-2`) to every button, card, input. Use `rounded-none` on all containers.
avoid: Applying rounded corners to cards or buttons (keep sharp).

rule: Typography must be hand‑crafted or calligraphic; digital system fonts are forbidden.
do:   Use chunky hand‑painted sans for English text, Nastaliq (contested) for Urdu calligraphy. All text uppercase, heavy weight.
avoid: Using pure sans-serif digital fonts (no Helvetica, no Roboto).

rule: Visual effects are limited to solid colors and sharp contrast; gradients and opacity fades are not allowed.
do:   Use only flat, saturated colors with no gradients, no box‑shadow glows, no opacity adjustments as primary styling.
avoid: Using gradients or opacity as primary styling.

### 11d. Variation Bounds

1. **Clean vs. Weathered** – pristine gold/polished enamel vs. scratched, dusty, chipped road patina (add noise, paint drip, slight desaturation on top surfaces)
2. **Urban vs. Rural** – urban: more pop culture, filmi lyrics, peacock/hero motifs; rural: more religious calligraphy, Sufi poetry, maroon backgrounds
3. **Mirror Density** – sparse accents (2–3 per panel) vs. full rosettes covering entire cards
4. **Classic vs. Neon Remix** – traditional deep greens/golds/crimson vs. UV pink, electric cyan, lime green with blacklight glow

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts.
Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
The system in its default, single-composition state. A symmetrical two‑column layout (desktop) or centred single column (mobile). Background: deep navy or maroon (contested hexes) filled with floral filler dots (🌸 pseudo‑elements, `gap-1` grid). Centre section contains a Calligraphy Cartouche (gold #D4AF37 background, black border, solid drop shadow) with Nastaliq headline (white text, `text-center`, `text-3xl`) and 3D drop shadow. Below, a primary button: flat saturated fill (contested), black border-2, white text, `uppercase`, `rounded-none`. Decorative Dividers separate sections: 5‑layer bands of thin white line, thick coloured bar, zigzag pattern, inner gold line. No empty space; every 16px gap contains a tiny flower or star. Navigation bar top: horizontal, gold active state, floral glyph beside each label. Mirror Badges (w-6 h-6) cluster at the top corners. All elements carry the grain overlay (opacity‑8).

### 11e.ii — Maximum Expressiveness
The system with all characteristic elements fully active. A 6‑column grid (1024px+) of icon badges: each cell a Mirror Badge (w-8 h-8, gold #D4AF37 fill, black border, cross‑hatch, white reflection dot) surrounded by floral motifs (lotus, peacock feather, tiger eye). Hero area: Calligraphy Cartouche with gold shimmer animation (`mirror-shimmer`) on hover, Nastaliq at `text-5xl`, arch‑topped frame. Background: deep navy (contested) with peacock feather motifs and kohl‑lined eyes in white highlight. Sparkle‑fade animation on small gold dots in every border (looping). Entrance‑rise applied to three stacked panels on scroll (600ms ease‑out, staggered 50ms). Buttons hover: `scale(1.05)`, `mirror-shimmer` overlay, and floral burst. Dividers alternate patterns: zigzag, wave, diamond, brick, each a 5‑layer band. Faux Rivets at panel corners (dark brown, 8px circles). Grain overlay and slight contrast boost on images. No empty space – every gap filled with floral filler dots or mirror rosettes. Floral‑sway animation on decorative accents.

### 11e.iii — Data Context
How the system’s visual language adapts when the content is numeric, tabular, or status‑driven rather than cultural or editorial. Even though the system is not built for dashboards, the maximalist ornamentation persists: every data cell is decorated. A data table: header row with gold (#D4AF37) fill, black border-2, white hand‑painted sans uppercase labels. Data rows alternating deep navy (contested) and maroon (contested), each cell containing a tiny floral filler dot in the corner. Row borders: thin white line and a zigzag lower border. Numeric values displayed in Nastaliq calligraphy (black text), with a gold Mirror Badge (w-6) beside each row number. Status cells: for positive metrics, use green complementary to red (flat, saturated green, no glow) with black outline; for negative, vivid red fill (contested), black outline, no gradient. Delta indicators: arrows as custom hand‑painted glyphs (peacock feather up, lotus down) in gold, surrounded by black border. Chart surface: deep navy background with sparkle‑fade gold dots at axis ticks, x/y axes drawn as black 2‑line decorative borders, data bars as solid gold (#D4AF37) rectangles with black outlines and cross‑hatch fill. No opacity-based fades, no rounded corners, no system fonts.

<CONTESTATION_MAP>
{
  "schema_version": "contestation-v1",
  "slug": "pakistani-truck-art",
  "panel_run_id": "00f75fe5-e67c-4483-a36c-f4e6533bd82c",
  "providers_used": [
    "crof-deepseek-v4-pro-precision",
    "crof-glm-5.1-precision",
    "crof-kimi-k2.6-precision",
    "crof-kimi-k2.5-lightning",
    "zai"
  ],
  "fields": {
    "§2.hex_primary": {
      "agreement": "0/5",
      "confidence": 0.0,
      "evidence_density": 0.0,
      "locked": false,
      "provenance_anchored": false,
      "synthesised_value_summary": "Gap marker: all five providers gave different hex values for primary role (D1: #E31B23, D2: #000080, D3: #0B0B2B, D4: #0047AB, D5: #C41E3A). None cited a source.",
      "gap_marker": "CONTESTED:§2.hex_primary — providers gave [#E31B23 / #000080 / #0B0B2B / #0047AB / #C41E3A]; no majority; all [unverified]; re‑stack required",
      "provider_values": ["#E31B23", "#000080", "#0B0B2B", "#0047AB", "#C41E3A"]
    },
    "§2.hex_secondary": {
      "agreement": "0/5",
      "confidence": 0.0,
      "evidence_density": 0.0,
      "locked": false,
      "provenance_anchored": false,
      "synthesised_value_summary": "Gap marker: providers gave five different green/crimson hexes. No two identical.",
      "gap_marker": "CONTESTED:§2.hex_secondary — providers gave [#008000 / #50C878 / #006400 / #DC143C / #2E8B57]; no majority; re‑stack required",
      "provider_values": ["#008000", "#50C878", "#006400", "#DC143C", "#2E8B57"]
    },
    "§2.hex_accent": {
      "agreement": "3/5",
      "confidence": 0.5,
      "evidence_density": 0.0,
      "locked": false,
      "provenance_anchored": false,
      "synthesised_value_summary": "Gold accent #D4AF37 used by D3, D4, D5 as background or outline-variant. No citation but majority. Tagged [unverified].",
      "gap_marker": null,
      "provider_values": ["#FFD700 (D1 gold shimmer)", "#D4AF37 (D2 outline-variant)", "#D4AF37 (D3 bg-gold)", "#D4AF37 (D4 accent)", "#D4AF37 (D5 outline-variant)"]
    },
    "§2.hex_outline": {
      "agreement": "unanimous",
      "confidence": 0.7,
      "evidence_density": 0.0,
      "locked": true,
      "provenance_anchored": false,
      "synthesised_value_summary": "#000000, all providers agree on black outlines.",
      "gap_marker": null,
      "provider_values": ["#000000", "#000000", "#000000", "#000000", "#000000"]
    },
    "§2.hex_on_surface": {
      "agreement": "4/5",
      "confidence": 0.6,
      "evidence_density": 0.0,
      "locked": false,
      "provenance_anchored": false,
      "synthesised_value_summary": "#FFFFFF, four providers chose white for on-surface. D1 used gold (#FFD700).",
      "gap_marker": null,
      "provider_values": ["#FFD700", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"]
    },
    "§2.hex_surface_container_lowest": {
      "agreement": "3/5",
      "confidence": 0.5,
      "evidence_density": 0.0,
      "locked": false,
      "provenance_anchored": false,
      "synthesised_value_summary": "#000000, three providers agree.",
      "gap_marker": null,
      "provider_values": ["#000000", "#000000", "not defined", "#000000", "#0D0D1A"]
    },
    "§3.primary_typeface": {
      "agreement": "majority",
      "confidence": 0.2,
      "evidence_density": 0.0,
      "locked": false,
      "provenance_anchored": false,
      "synthesised_value_summary": "Majority (4 of 5) mention Noto Nastaliq Urdu, but no provider cites a foundry or source. Per typeface adjudication rule, output is gap marker.",
      "gap_marker": "CONTESTED:§3.primary_typeface — providers gave [Noto Nastaliq Urdu / Nastaliq (serif) / Nastaliq with Noto Nastaliq Urdu as GF substitute]; none cited a foundry; re‑stack required",
      "provider_values": ["Noto Nastaliq Urdu", "Noto Nastaliq Urdu", "'Nastaliq', serif (no GF substitute)", "Nastaliq (GF: Noto Nastaliq Urdu)", "Nastaliq-style calligraphic face (GF: Noto Nastaliq Urdu)"]
    },
    "§3.secondary_typeface": {
      "agreement": "partial",
      "confidence": 0.1,
      "evidence_density": 0.0,
      "locked": false,
      "provenance_anchored": false,
      "synthesised_value_summary": "Providers gave multiple options (Bangers, Arial Black, Playfair Display, Impact, Pattaya). No consensus, no citations.",
      "gap_marker": "CONTESTED:§3.secondary_typeface — providers gave [Bangers / Arial Black / Playfair Display / Impact / Pattaya / Noto Nastaliq Urdu]; none cited a foundry; re‑stack required",
      "provider_values": ["Bangers (English)", "Bangers / system-ui sans", "'Truck Hand Sans', 'Arial Black'", "Noto Nastaliq Urdu (body/label)", "Pattaya (body/label)"]
    },
    "§3.google_fonts_substitute": {
      "agreement": "partial",
      "confidence": 0.1,
      "evidence_density": 0.0,
      "locked": false,
      "provenance_anchored": false,
      "synthesised_value_summary": "Some providers suggest Noto Nastaliq Urdu, others no substitute. No foundry citation.",
      "gap_marker": "CONTESTED:§3.google_fonts_substitute — providers gave [Noto Nastaliq Urdu / none / Amiri / Pattaya]; no cited foundry; re‑stack required",
      "provider_values": ["Noto Nastaliq Urdu", "not defined", "no Google Fonts substitute available", "Noto Nastaliq Urdu", "Amiri (headline) / Pattaya (body)"]
    },
    "§5.ornamental_system": {
      "agreement": "majority
</CONTESTATION_MAP>

### 11f. Sources

This subject has minimal verified imagery. The visual claims below should be treated with caution.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** The folk‑art vernacular **Pakistani Truck Art** (slug `pakistani-truck-art`) emerged in the mid‑20th century and continues as a living practice today, with no single designer or foundry attributable to its anonymous, collective authorship. It encompasses the elaborate, hand‑painted decoration of commercial trucks, buses, and trailers — a fusion of Nastaliq and Thuluth calligraphy, floral and geometric ornament, figurative painting, and reflective or mirrored embellishments, with distinct regional variations across Punjab, Sindh, Khyber Pakhtunkhwa, and beyond.

**Verified imagery sources.** 2 URLs verified against institutional servers, distributed across:
- Wikipedia — 1 URL(s)
- Victoria and Albert Museum, London — 1 URL(s)

No formal institutional imagery references are currently catalogued for this source; key references remain absent, with no verified records or URLs added to the design system.

**Named typefaces.** The typography of this style is attested as:
- Nastaliq ( — attestation: attested) — rendered here as bespoke imagery — no web-font substitute
- Sulus/Thuluth ( — attestation: attested) — rendered here as bespoke imagery — no web-font substitute
- Roman/English lettering ( — attestation: conventional) — rendered here as bespoke imagery — no web-font substitute

**Honest gaps.** The most significant gap is the complete absence of colour specifications — no verified hex, Pantone, or RAL measurements exist for the tradition’s palette. All colour references currently in use are inferred or conventional, derived from photographs rather than controlled physical sampling, and this undermines accurate design tokenisation and reproduction. A field study using spectrophotometry on active trucks, conducted in partnership with local workshops and painters, would resolve these specifications.
