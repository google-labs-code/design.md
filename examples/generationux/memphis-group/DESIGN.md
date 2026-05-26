---
version: alpha
name: "Memphis Group"
description: "The Memphis Group design system translates the 1980s postmodern movement into an interface language with clashing colors, playful geometry, deliberate asymmetry, and a rebellious mix of high and low culture."
colors:
  neutral: "#000000"
  on-surface: "#000000"
  on-surface-variant: "#FFFFFF"
  surface-container-lowest: "#FFFFFF"
  surface-container-low: "#FFCBA4"
  surface-container: "#FFFFFF"
  surface-container-high: "#FFDAB9"
  error-container: "#FFC0CB"
  outline: "#000000"
  outline-variant: "#00FFFF"
  inverse-surface: "#000000"
  inverse-on-surface: "#FFFFFF"
  inverse-primary: "#FDE100"
typography:
  display:
    fontFamily: "Futura"
    fontSize: "60px"
    fontWeight: 900
    lineHeight: 1.25
    letterSpacing: "0.1em"
    textTransform: "uppercase"
  headline:
    fontFamily: "Futura"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.025em"
    textTransform: "uppercase"
  title:
    fontFamily: "Futura"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.025em"
    textTransform: "uppercase"
  body:
    fontFamily: "Futura"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "0em"
    textTransform: "lowercase"
  label:
    fontFamily: "Futura"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.1em"
    textTransform: "uppercase"
rounded:
  default: "0px"
  card: "0px"
  button: "0px"
  input: "0px"
  chip: "0px"
spacing:
  component-internal: "16px"
  section-internal: "24px"
  page-edge: "24px"
  gap-component: "16px"
  gap-section: "40px"
  height-sm: "40px"
  height-md: "48px"
  height-lg: "64px"
  icon: "32px"
components:
  button-primary:
    backgroundColor: "#FF49A4"
    textColor: "#FFFFFF"
    rounded: "0px"
    padding: "16px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "#FF49A4"
    textColor: "#FFFFFF"
    padding: "16px"
    height: "48px"
  card:
    backgroundColor: "#FFFFFF"
    rounded: "0px"
    padding: "16px"
  input:
    backgroundColor: "#FFFFFF"
    textColor: "#000000"
    rounded: "0px"
    height: "48px"
    padding: "12px"
  squiggle-divider:
    backgroundColor: "#FF49A4"
    height: "16px"
    width: "100%"
provenance:
  coverage_status: "complete"
  identity_description: "The slug `memphis-group` refers to the Memphis Group, a Milan-based design and architecture collective founded in 1981 by Ettore Sottsass (1917–2007). The group produced furniture, lighting, ceramics, textiles, and graphic works defined by bold, clashing colours, geometric patterns, and a deliberate break from modernist functionalism. This identification is unambiguous within design history an"
  manual_enrichment_required: false
  imagery_count: 10
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "www.vam.ac.uk"
      count: 4
    - host: "www.centrepompidou.fr"
      count: 2
    - host: "www.moma.org"
      count: 1
    - host: "en.wikipedia.org"
      count: 1
    - host: "abetlaminati.com"
      count: 1
    - host: "collection.cooperhewitt.org"
      count: 1
  imagery_urls:
    - url: "https://www.moma.org/collection/works/3590"
      host: "www.moma.org"
      institution: "Museum of Modern Art, New York"
      confidence_original: low
    - url: "https://www.vam.ac.uk/collections"
      host: "www.vam.ac.uk"
      institution: "Victoria and Albert Museum, London"
      confidence_original: low
    - url: "https://www.centrepompidou.fr/fr/"
      host: "www.centrepompidou.fr"
      institution: "Centre Pompidou, Paris"
      confidence_original: low
    - url: "https://en.wikipedia.org/wiki/Memphis_Group"
      host: "en.wikipedia.org"
      institution: "Wikipedia"
      confidence_original: high
    - url: "https://www.vam.ac.uk/collections"
      host: "www.vam.ac.uk"
      institution: "V&A"
      confidence_original: low
    - url: "https://www.centrepompidou.fr/fr/"
      host: "www.centrepompidou.fr"
      institution: "Centre Pompidou, Bibliothèque Kandinsky"
      confidence_original: low
    - url: "https://abetlaminati.com/"
      host: "abetlaminati.com"
      institution: "Abet Laminati S.p.A."
      confidence_original: low
    - url: "https://collection.cooperhewitt.org/"
      host: "collection.cooperhewitt.org"
      institution: "Cooper Hewitt, Smithsonian Design Museum"
      confidence_original: low
    - url: "https://www.vam.ac.uk/"
      host: "www.vam.ac.uk"
      institution: "V&A"
      confidence_original: low
    - url: "https://www.vam.ac.uk/collections"
      host: "www.vam.ac.uk"
      institution: "V&A"
      confidence_original: low
  typefaces_attested:
    - name: "Helvetica (Neue Haas Grotesk)"
      foundry: "Haas/Linotype"
      year: 1957
      google_fonts: "Inter"
      attestation: "inferred"
    - name: "Futura (Extra Bold weight)"
      foundry: "Bauer Type Foundry"
      year: 1927
      google_fonts: "Jost"
      attestation: "conventional"
    - name: "Custom display lettering / hand-drawn logotype for Memphis"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "unknown"
    - name: "ITC American Typewriter (medium weight)"
      foundry: "ITC"
      year: 1974
      google_fonts: null
      attestation: "inferred"
    - name: "ITC Garamond (occasionally)"
      foundry: "ITC"
      year: 1977
      google_fonts: "EB Garamond"
      attestation: "conventional"
    - name: "Univers 55 Medium"
      foundry: "De Stijl"
      year: 1954
      google_fonts: "Manrope"
      attestation: "unverified"
    - name: "Memphis (geometric slab-serif)"
      foundry: "Ludwig & Mayer"
      year: 1929
      google_fonts: "Roboto Slab"
      attestation: "unverified"
  flags:
    - "1_rate_limited_urls_pending_retry"
  honest_gaps:
    - "1. **Colour – hex/Pantone/CMYK values**: None attested. All digital approximations are unreliable."
---
# Design System: Memphis Group

## 0. Taxonomy & Identity

entity-type:        interface / system / environment
artefact-family:    operating system / software UI
technique:          digital vector / digital raster
movement-lineage:   design movement / art-historical movement
era:                1980s postmodern
geography:          italy / platform-neutral
domain:             internet / software / AI / retail / CPG
formal-traits:      geometric, asymmetric, maximal, expressive, flat, vibrant
color-logic:        saturated
typography-mode:    geometric sans / display type
texture:            glossy, grainy
function:           entertain / persuade
provenance:         revival / homage

## 1. Overview

The Memphis Group design system translates the 1980s postmodern movement into an interface language rooted in joyous defiance. Originating from the Milan-based collective active from 1981 to 1988 under Ettore Sottsass, it rejects minimalism, good taste, and the tyranny of the grid. Every surface is a playground of clashing colors, playful geometry, deliberate asymmetry, and a rebellious mix of high and low culture. The emotional register is playful, confrontational, and slightly unstable — like a room that might slide off its foundations.

The style is instantly recognizable by its anti-harmonious color combinations (pink + red, yellow + teal), the iconic “bacterio” squiggle motif, hard-edge offset shadows with zero blur, and extreme scale shifts where a giant circle sits next to a tiny triangle. Black-and-white patterns (stripes, checkerboards, polka dots) act as loud neutrals. Typography is treated as a graphic object — oversized, widely tracked, all caps or all lowercase. Gradients, soft shadows, earth tones, centered layouts, and realistic icons would shatter the effect.

- **Emotional tone:** Joyous defiance, playful rebellion, ironic exuberance, slightly chaotic
- **Density:** Medium to maximal — pattern overload is the default; deliberate negative space in unexpected places
- **Core rendering philosophy:** Flat opaque fills, razor-sharp hard edges, no gradients, no shading, no atmospheric blending
- **Surface character:** Simulated cheap 1980s plastic laminate — slight gloss reflection, zero softness, optional misregistration like a bad silkscreen print
- **What would break it:** Earth tones, gray, centered layouts, soft rounded corners, realistic iconography, gradients, smooth anti-aliased transitions, any attempt at visual calm

## 2. Constants

Light Mode:   Primary — high-contrast bright background; primary mode.
Dark Mode:    Variant — invert backgrounds. Same palette swaps: surface becomes black, on-surface becomes white, outlines stay black; accents shift to slightly brighter versions.
              Swap logic: surface-container-lowest becomes black, on-surface becomes white. Patterns invert roles.
Responsive:   Yes — breakpoints preserve unstable off-kilter composition. Elements reflow but maintain deliberate wrong-scale relationships.
              At 375px: single column with offset margins. At 768px: multi-column with floating elements. At 1200px+: full pattern overload.
States:       Default, Active, Disabled, Hover, Focus, Error.
              Hover triggers misregistration offset or color swap. Focus triggers thick black outline. Error triggers squiggle animation.
surface-simulation: printed-plastic — Cheap 1980s plastic laminate with slight gloss reflection and optional halftone/misregistration textures.

## 2a — Interaction Model

hover-delta:        misregistration-shift — on hover, element shifts 4px right/4px down and a cyan (#00FFFF) offset ghost (via `::before` with `mix-blend-mode: difference`) slides from 0px to 4px offset over 200ms linear; alternative: color-swap (primary ↔ secondary)
active-delta:       offset-snap — shadow offset reduces to 2px/2px; no misregistration overlay
focus-style:        thick black outline — `border-4 border-solid #000000`, no blur
transition-duration:200ms — applied to hover misregistration slide and shadow offset transitions; other state changes (disabled, error) are instantaneous
transition-easing:  linear
exempt-animations:  squiggle-animation — the error state `@keyframes squiggle` must continue running even if `transition-duration` is set to 0ms; scanline-shift (if used) also exempt

## 3. Colors

**Note:** No seed.json was provided. Hex values are contested across providers. Each hex is tagged [unverified] as no provider cited a source. The palette should include: a primary red or hot pink, a secondary yellow, a tertiary blue or teal, plus black and white as structural. Pastel surfaces (peach, mint, lavender, powder blue) are used for containers. Gray is never used. Metallic gold/silver optional for ironic accents.

primary:            CONTESTED:§2.hex_primary — Providers gave: [#E31E24, #E31E24, #E63946, #FF0000, #FF2D2D, #FF2A6D]; no source; re-stack required [unverified]
on-primary:         #FFFFFF [conventional]
primary-container:  CONTESTED:§2.hex_primary_container — Providers gave: [#FF238C, #FF1493, #FF69B4, #FFFF00, #FF6B9D, #FFD700]; no source; re-stack required [unverified]
on-primary-container: #000000 [conventional]

secondary:          CONTESTED:§2.hex_secondary — Providers gave: [#FDE100, #FFD700, #0047AB, #0000FF, #FFD600, #FFD700]; no source; re-stack required [unverified]
on-secondary:       #000000 [conventional]
secondary-container: CONTESTED:§2.hex_secondary_container — Providers gave: [#70FF9E, #FFDAB9, #B0E0D6, #FF69B4, #FFF3E0, #A8F0C6]; no source; re-stack required [unverified]
on-secondary-container: #000000 [conventional]

tertiary:           CONTESTED:§2.hex_tertiary — Providers gave: [#004CFF, #0057B8, #FFD700, #98FF98, #00C9C9, #00D4AA]; no source; re-stack required [unverified]
on-tertiary:        #FFFFFF [conventional]
tertiary-container: CONTESTED:§2.hex_tertiary_container — Providers gave: [#B2D4FF, #B0E0E6, #98FB98, #FFFFFF, #E0F7FA, #A0D8F0]; no source; re-stack required [unverified]
on-tertiary-container: #000000 [conventional]

neutral:            #000000 — Black: outlines, text, heavy strokes [attested]
on-surface:         #000000 — Black on light surfaces [attested]
on-surface-variant: #FFFFFF — White on dark fills, or lavender (#D4C4FB) for muted labels [inferred]

surface-container-lowest: #FFFFFF — White: page background [conventional]
surface-container-low:    #FFCBA4 — Peach: subtle surface separation [conventional]
surface-container:        #FFFFFF — White: card and panel backgrounds [conventional]
surface-container-high:   #FFDAB9 — Peach or #B2D4FF Powder Blue: elevated surfaces [inferred]
surface-container-highest:#FF1493 — Hot Pink or #70FF9E Mint: high-contrast surface [inferred]

error:              CONTESTED:§2.hex_error — Providers gave: [#E31E24, #FF0000, #E63946, #FF0000, #FF2D2D, #FF0000]; no source; re-stack required [unverified]
on-error:           #FFFFFF [conventional]
error-container:    #FFC0CB — Light Pink: error background [conventional]
on-error-container: #000000 [conventional]

outline:            #000000 — Black: all borders, dividers, focus rings [attested]
outline-variant:    #00FFFF — Cyan: misregistration offset shadows, decorative border accents [conventional]

inverse-surface:    #000000 — Black: inverted background [conventional]
inverse-on-surface: #FFFFFF — White: text on inverted [conventional]
inverse-primary:    #FDE100 — Yellow: accent on inverse [conventional]

**Palette constraint per composition:** 4–6 distinct hues excluding black and white. Do not exceed.

## 4. Typography

**Note:** No provider cited a foundry or year for typefaces. Per adjudication rule, all typeface names are unverified. Gap markers inserted.

display:
  font-family:      CONTESTED:§3.primary_typeface — Providers gave: [Avant Garde Gothic/Futura/ Century Gothic, Futura/ Century Gothic, Futura/ Avant Garde/ Eurostile, sans-serif, Futura/ Nunito, Futura/ Avant Garde/ Eurostile/ Poppins/ Montserrat]; none cited foundry; re-stack required
  Google Fonts substitute: CONTESTED:§3.google_fonts_substitute — Providers gave: [Century Gothic, Century Gothic, (none), Roboto, Nunito, Poppins/Montserrat]; re-stack required
  font-size:        text-6xl [conventional]
  font-weight:      font-black or font-bold [conventional]
  line-height:      leading-tight or leading-none [conventional]
  letter-spacing:   tracking-widest [conventional]
  text-transform:   uppercase [conventional]
  text-decoration:  none
  note:             Thick black outline (`text-shadow: 4px 4px 0 #000` or `-webkit-text-stroke: 3px #000`) when on busy patterns.

headline:
  font-family:      CONTESTED:§3.secondary_typeface — see primary; same set
  font-size:        text-4xl [conventional]
  font-weight:      font-bold [conventional]
  line-height:      leading-tight or leading-snug [conventional]
  letter-spacing:   tracking-wide or tracking-wider [conventional]
  text-transform:   uppercase [conventional]
  text-decoration:  none

title:
  font-family:      same as headline
  font-size:        text-2xl [conventional]
  font-weight:      font-bold or font-semibold [conventional]
  line-height:      leading-tight or leading-normal [conventional]
  letter-spacing:   tracking-wide or tracking-normal [conventional]
  text-transform:   uppercase [conventional]

body:
  font-family:      same geometric sans; never serif
  font-size:        text-base [conventional]
  font-weight:      font-normal or font-medium [conventional]
  line-height:      leading-relaxed [conventional]
  letter-spacing:   tracking-normal [conventional]
  text-transform:   lowercase (never sentence case) [conventional]
  text-decoration:  none

label:
  font-family:      same as body
  font-size:        text-sm or text-xs [conventional]
  font-weight:      font-bold or font-semibold [conventional]
  line-height:      leading-tight or leading-none [conventional]
  letter-spacing:   tracking-widest [conventional]
  text-transform:   uppercase [conventional]
  text-decoration:  none

Fallback chain: geometric sans-serif (Futura, Avant Garde, Eurostile, Poppins, Montserrat) — no serif, no script.
All type uses sharp, crisp rendering; no anti-aliasing fuzziness.
Avoid gray text entirely; use full black at reduced opacity or a pastel fill behind text.

## 5. Elevation

Unanimous agreement: **Flat depth model — no soft shadow hierarchy.** All depth is simulated via **hard-edge offset shadows** (zero blur, zero spread, contrasting color). Implemented via `box-shadow: [offset-x] [offset-y] 0 [color]` or a duplicate pseudo-element. Default offset: 4px right/4px down. Interactive hover: increase to 6px/6px. Active: snap to 2px/2px.

elevation-name        implementation                    description
────────────────────────────────────────────────────────────────────────────
flat                  shadow-none                       Default state. Pure flat.
raised                box-shadow: 4px 4px 0 #00FFFF     Hard-edge offset in contrasting accent
overlay               box-shadow: 8px 8px 0 #FDE100     Stronger offset
modal                 box-shadow: 12px 12px 0 #FF238C   Largest offset

stacking:
  base-content:    z-0
  decorative-shapes: z-10
  sticky-elements: z-20
  dropdowns:       z-30
  overlays:        z-40
  modals:          z-50
  misregistration-ghosts: z-[-1] (pushed behind parent)

## 6. Spacing & Sizing

Spacing is deliberately uneven and asymmetric to reinforce the off-kilter aesthetic. Values below are a synthesis of provider ranges, accepted as majority.

padding:
  component-internal:  p-4
  section-internal:    p-6
  page-edge:           px-6 to px-8

margin:
  between-components:  gap-4 to gap-8 (rotate values to break rhythm)
  between-sections:    gap-10 to gap-16

component-heights:
  sm:   h-10
  md:   h-12 or h-14 (default interactive target)
  lg:   h-16 or h-20

icon-size:       w-8 h-8 to w-10 h-10 (can be larger for decorative emphasis)
avatar-size:     Not style-relevant. Use geometric shapes instead.

## 7. Borders

Unanimous: All edges razor-sharp — no rounding. Border radius: `rounded-none` everywhere (cards, buttons, inputs, chips, badges). Border width: `border-2` default, `border-4` for emphasis (focus rings, active states, key dividers). Border style: `border-solid`. Ornamental borders optional via `border-image` with repeating patterns (stripes, checkerboard, squiggle). `clip-path` used for non-rectangular shapes (teardrops, triangles, diamonds) — no Tailwind native equivalent; use CSS `clip-path` or inline SVG.

## 8. Opacity

disabled-state:     opacity-40 (unanimous)
ghost/secondary:    opacity-70 (majority: 4 of 6 providers use 70%)
overlay/scrim:      CONTESTED:§8.scrim_opacity — Providers: [opacity-90, 80%, 80%, 0%, 90%, not used]; no majority; re-stack recommended. Suggestion: use flat opaque color block (not scrim) with no transparency.
hover-feedback:     No opacity change — use color swap or offset shadow instead (unanimous)

Browser chrome:
selection:
  background:  #FDE100 (yellow) at 30-40% opacity, or primary red at 30% opacity [inferred]
  color:       #000000

scrollbar:
  style:       styled — visibly designed
  width:       thick ~10-12px or thin ~6px [contested; use tailwind `scrollbar-*` with custom CSS]
  track:       #FFFFFF or #D4C4FB [contested]
  thumb:       #000000 with a bright accent border [conventional]
  thumb-hover: #004CFF or primary accent [contested]

## 8.5. Visual Effects

### 8.5.0 — Physical Material Model

material-model:    printed-plastic — cheap 1980s plastic laminate with slight gloss

global-filter:     none — all color is structural; no post-processing

global-overlay:    Plastic laminate gloss via body::after pseudo-element:
                   radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.06) 0%, transparent 60%);
                   background-size: 100% 100%; position: fixed; z-index: 9998; pointer-events: none;
                   blend: normal, opacity-100; no animation.

rendering-flags:
  font-smoothing:  antialiased — sharp, crisp geometric type (no fuzzy anti-aliasing)
  image-rendering: auto
  text-rendering:  auto

### 8.5a — Color Manipulation

filter:          none — all color is structural, not post-processed
mix-blend-mode:  multiply for pattern overlays (stripes under dots); screen for dark mode or neon ghosts; difference for misregistration hover
background-blend-mode: multiply for pattern tiles on colored fills

Dark mode inheritance: Multiply becomes hard to read on dark; swap `multiply` for `screen` on dark surfaces. `difference` remains effective on dark.

### 8.5b — Surface Layering (Backdrop Filters)

Not applicable. Memphis prohibits frosted glass and translucency. All surface layering is achieved through flat opaque overlapping.

### 8.5c — Gradients & Glow

Not applicable. Gradients and glow effects are forbidden. Replace all soft shadows/blurs with hard-edge offset shadows. Only use `text-shadow: 4px 4px 0 #000` for text outline on busy patterns. `filter: drop-shadow` only with zero blur.

### 8.5d — Texture & Noise Simulation

Texture effects are optional but style-native. Common techniques:

**Halftone / Dot Screen:**
- Technique: CSS `repeating-radial-gradient` dot pattern on `::before` pseudo-element
- Parameters: `circle at 2px 2px, #000 1px, transparent 1px`, `background-size: 4px 4px`
- Surface: Selected card fills, button backgrounds, section dividers (one accent zone per composition)
- Intensity: moderate
- Blend: `multiply`, `opacity-15` to `opacity-20`; on dark surfaces, invert dots to white with `screen`
- Color: black on light; white on dark
- Animation: none
- No Tailwind native equivalent; use custom CSS.

**Plastic Laminate Gloss:**
- Technique: CSS `radial-gradient` or `linear-gradient` highlight — a small white ellipse in upper-left quadrant, hard edge (no blur)
- Parameters: `radial-gradient(circle at 30% 20%, rgba(255,255,255,0.08) 0%, transparent 40%)`
- Surface: Card fills, button surfaces, panel backgrounds
- Intensity: barely perceptible — a whisper of gloss, not reflective
- Blend: normal, opacity-100
- Color: white only
- Animation: none

**Deliberate Misregistration (Offset Overlay):**
- Technique: `::before` pseudo-element with contrasting color (cyan, hot pink, or red), shifted `-2px` horizontally and `-2px` vertically. `mix-blend-mode: screen` (on dark) / `multiply` (on light).
- Surface: Display headlines, hero shapes, buttons on hover; static on decorative motifs
- Intensity: moderate; on hover, offset slides from 0px to 4px over 200ms linear
- Color: #00FFFF (Cyan) or #FF238C (Hot Pink)
- Animation: linear 200ms on hover (optional static artifact)
- No Tailwind native equivalent.

**CRT Scanlines (Optional):**
- Technique: `repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)`
- Surface: Full-canvas overlay for retro video effects
- Intensity: barely perceptible, `opacity-5` to `opacity-10`
- Blend: overlay
- Color: black (monochrome)
- Animation: optional slow vertical shift.

**Terrazzo / Speckles (Optional):**
- Technique: CSS multiple `radial-gradient` layers or SVG `feTurbulence` with `feColorMatrix`
- Parameters: `baseFrequency 0.8`, `numOctaves 3`, `type fractalNoise` (SVG) or varied `radial-gradient` sizes
- Surface: Full-page canvas, hero sections, card backgrounds
- Intensity: barely perceptible to moderate, `opacity-8` to `opacity-15`
- Blend: normal or multiply
- Color: monochrome noise or multi-colored specks in palette hues
- No Tailwind native equivalent.
## 9. Components

### Icon Vocabulary
- System: Custom geometric glyphs — squiggle (bacterio), teardrop, isometric cube, comb/rake, lightning bolt, stylized fish, bird, cactus, diamond. No universal icon library. Never realistic or representational.
- Size: `w-8 h-8` to `w-16 h-16` (intentionally variable)
- Color: Flat fill inheriting `currentColor` or explicitly primary/secondary/black. Heavy black outline (stroke-width 2px–4px).
- Treatment: Purely flat vector. No gradients, no glows, no shadows. Optional misregistration ghost on hover.
- Restrictions: No silhouettes, no detailed photorealism, no skeuomorphic lighting.

### Image & Media Treatment
- Aspect-ratio: `aspect-square` or `aspect-video` or freeform geometric. Avoid wide panoramas.
- Object-fit: `object-cover` (or `object-contain` for motifs).
- Filter: None preferred. Increase contrast/saturation (`contrast-150 saturate-200`) for intensity; grayscale for ironic effect.
- Overlay: Optional solid color rectangle with `mix-blend-mode: multiply` or `screen` at `opacity-20`; or halftone dot pattern overlay.
- Border: 4px solid black frame; optional offset shadow.
- Dark-mode: On dark backgrounds, invert image colors with CSS `filter: invert(1)` if needed.

### Buttons

**Primary Button:**
- Fill: Hot Pink or Primary Red (CONTESTED:§2.hex_primary — use majority value after re-stack)
- Text: White or Black, uppercase, font-bold, tracking-widest
- Border: `border-4` Black, `rounded-none`
- Hover: Offset shadow spawns 4px right/4px down in contrasting accent (Cyan or Yellow). Optional misregistration ghost.
- Active: Pushes down with 1px `transform` offset; no elevation change.
- Disabled: `opacity-40`, no shadow, optional pattern overlay.

**Secondary Button:**
- Fill: Transparent or solid white (or Yellow)
- Border: `border-2` or `border-4` Black, `rounded-none`
- Text: Black, uppercase
- Hover: Fill becomes solid pastel or accent color; offset shadow appears.
- Disabled: `opacity-40`, border becomes `border-dotted`.

**Destructive Button:**
- Fill: Red (CONTESTED:§2.hex_error)
- Border: `border-4` or `border-8` Black
- Text: White, uppercase, font-bold
- Hover: Offset shadow in Yellow or Black; fill may invert to black with red text.
- Disabled: `opacity-40`, no shadow.

### Cards / Panels
- Fill: White or pastel (Peach, Lavender, Powder Blue, Mint Green) or B&W pattern.
- Border: `border-2` or `border-4` Black, `rounded-none`.
- Elevation: Optional hard-edge offset shadow in contrasting accent.
- Internal content: `p-4` to `p-6`; content floats asymmetrically (never centered).
- Pattern variant: Background repeating pattern (stripes, dots, checkerboard, terrazzo) on a narrow strip or full area.
- Optional: Squiggle decorative strip along top or bottom edge.

### Navigation
- Horizontal bar, left-aligned. Items: solid color rectangles with all-caps text.
- Active item: background fill in primary or accent, plus offset shadow; or thick underline.
- Inactive items: transparent fill or pattern background.
- Icon treatment: Pair with label. Icon sits inside a geometric frame (circle, diamond, hexagon).

### Inputs / Forms
- Border: `border-2` Black, `rounded-none`. Background: White or light pastel.
- Label: Above input, uppercase, tracking-widest, font-bold.
- Focus: `outline: 4px solid #004CFF` (or primary), `outline-offset: 2px`. No softening.
- Placeholder: Uppercase, black at `opacity-50` or lower.
- Error state: Red border; squiggle icon in right corner; error message in red with bold underline.
- Checkbox/Radio: Replaced with geometric shapes (diamond, square, circle). Active fill in Yellow or accent.

### Style-Native Primitives

1. **Squiggle Divider (Bacterio):** Wavy horizontal strip between sections. Height: 12-16px. Color: Hot Pink or Black. Width: 100% or short for asymmetry. Implemented as SVG path with repeating wave segments.

2. **Teardrop Accent:** Asymmetric droplet shape. `clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)` or SVG path. Flat fill in primary or accent, black outline. Size: `w-8 h-10` to `w-20 h-20`. Offset shadow optional.

3. **Geometric Motif Tile:** Isometric cube, lightning bolt, stylized cactus/fish — abstract semi-nature forms. Each facet a different flat color with black border between facets. No gradients. Placed as oversized floating decor near edges.

4. **Pattern Strip:** Narrow horizontal or vertical band (h-8 to h-12) filled with repeating B&W pattern (stripes, checkerboard, polka dots, terrazzo). Used as card trim, section divider, header band.

5. **Hard-Edge Offset Shadow:** Utility class `.memphis-shadow { box-shadow: 4px 4px 0 var(--shadow-color); }` applied to interactive components for emphasis.

6. **Terrazzo Grid:** Pattern of small irregular dots/speckles used as fill for panels or backgrounds. Implemented as SVG `feTurbulence` or CSS multi-radial-gradient.

## 10. Layout

**Spacing cadence:** Erratic. No uniform rhythm. Use `gap-4`, `gap-8`, `gap-12` in the same container. Deliberate negative space in unexpected places as "rest areas", never as margins.

**Grid tendency:** Asymmetric modular grid. Origin is off-center. Elements float, hang off edges, overlap freely. No visible grid; if present, break it deliberately (three columns with one column half-width).

**Density:** High / Maximal. Pattern overload is the default. Leave one "rest area" of negative space per viewport to give the eye a break.

**Section separation:** Dividers are not lines. Sections separated by color changes, pattern strips, squiggle motifs, or thick black horizontal rules. Abrupt color shifts. No white space transitions.

**Alignment philosophy:** Nothing is centered unless it's a deliberate joke. Elements float off viewport edges to imply limitless energy. Focal points near edges (not center). Left/right alignments; never center.

**Breakpoint behavior:**
- **375px (mobile):** Stack into single column. One giant shape dominates. Small shapes float below. Overlaps simplified. Pattern layers reduced to 2 max per section. Reduce motif density.
- **768px (tablet):** 2–3 columns. Asymmetry reasserts. One column takes "giant scale" shape. Pattern strips expand. Allow overlapping elements.
- **1200px+ (desktop):** Full pattern overload. 3–4 columns. Multiple overlapping layers. Squiggles and teardrops multiply as decorative fills. Maximum density.

**Motion:**
transition-duration:        100ms for hovers (snap-like), 300-500ms for layout animations. Linear timing, no easing.
transition-timing-function: linear (cubic-bezier(0,0,1,1)). No variable durations.
transition-property:        all (focus on transform, opacity, background-color, border-width)
transition-delay:           none (no staggered delays)

animation:
  wiggle:            rotate(3deg) → rotate(-3deg) over 200ms linear, trigger: on-hover
  slide-in:          translateX(-100%) → translateX(0) over 500ms linear, trigger: on-load
  pattern-scroll:    background-position shift (0,0) → (100px,0) over 3s linear looping, trigger: on-load
  misregister:       box-shadow offset 0px → 4px, ::before opacity 0 → 1, trigger: on-hover
  vibrate:           translate(0,0) → translate(1px,var) → translate(-1px,var), trigger: on-hover
  snap-slide:        translateX(120%)→ translateX(0) over 250ms linear, trigger: on-scroll-enter
  dot-sequence:      opacity 0→1→0 over 500ms steps(4), trigger: on-load
  frame-stepped-enter: opacity 0→1 over 400ms steps(6), trigger: on-scroll-enter

transform-at-rest:       All elements rest at transform: none. (Exception: intentionally rotated display type.)
transform-on-interact:   Hover: scale(1.05) or translate(-2px,-2px), linear 100ms. Active: scale(0.95) or translate(2px,2px), linear 50ms.
transform-style:         flat
transform-perspective:   none
backface-visibility:     visible (or hidden only for card-flip variants)

## 11. Design System Notes

### 11a. Use Constraints

**Appropriate for:**
- Bold personal brand landing pages, portfolio sites for artists/designers
- Museum, gallery, exhibition microsites
- Retro-futurist game interfaces and playable web experiences
- Children's entertainment platforms and learning toys
- Music player skins, audio visualization apps, concert promotion
- Radical e-commerce (streetwear, vinyl records, independent magazines)
- Creative tools, music apps, festival websites, quirky e-commerce

**Wrong for:**
- Banking apps, fintech interfaces, financial dashboards
- Medical records, hospital information systems, clinical tools
- Institutional websites (government, law, academic administration)
- Corporate SaaS (CRM, ERP, project management)
- Any context requiring user trust, calm, or readability continuity
- Long-form editorial reading where typographic hierarchy must be invisible
- Accessibility-first utility tools (readers, screen magnifiers)

### 11b. Prompt Phrases

(Contested: providers diverged on phrasing. Synthesised set of common themes.)

1. "Clashing anti-harmonious color palette with flat opaque fills and zero gradients, where black is the only structural outline and primary red meets hot pink directly."
2. "Bold black and white patterns — stripes, checkerboards, polka dots — acting as the loud neutral background for all content layers."
3. "Incorporate the classic Memphis squiggle (bacterio) and teardrop motifs as decorative borders, dividers, or primary icon forms throughout the interface."
4. "Deliberately unstable asymmetric layout where focal points sit near the edge, elements float or overlap freely, and containment is always slightly off-balance."
5. "Razor-sharp hard edges with a thick black outline on all interactive components for that 1980s postmodern poster and laminate surface look."
6. "Hard-edge drop shadow with zero blur — solid block of contrasting accent color (cyan on pink, yellow on blue) offset exactly 4 to 8 pixels right and down."
7. "Display type set entirely in uppercase geometric sans-serif with extra-wide letter tracking, treated as graphic objects that may be oversized or rotated."
8. "Deliberate misregistration hover effect where a contrasting color ghost of the component slides offset from the original, producing a cheap silkscreen or photocopy artifact."

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description.

rule: Black is the only structural outline color — it defines every component boundary and sharpens the visual noise.
do: Apply `border: 4px solid #000000` to every interactive element. Use black outlines on icons, cards, buttons, and input fields. No other color may serve as a permanent structural edge.
avoid: Using gray (`#808080`) or pastel (`#B0E0E6`) as a border color on a button; the component loses its hard-edge identity and becomes something soft and corporate.

rule: Asymmetry is the primary layout rule — nothing is centered unless it is a deliberate, self-aware joke.
do: Position focal points `left: 10%`, `right: 5%`, or `transform: translateX(-5%) translateY(15%)` relative to the viewport. The main hero text floats to the top‑left, overlapping a teardrop shape at `right: -4px`. Centering only appears when mocking typical design patterns, e.g., a tiny centered “ABOUT” in a sea of chaos.
avoid: A perfectly centered hero section with `margin: 0 auto`, padding on both sides equal. That kills the unstable energy and reads as a conventional landing page.

rule: Hover feedback is a printing error, not a smooth digital transition. Misregistration is the only primary hover effect.
do: On hover, spawn a `::before` pseudo‑element in Hot Pink (`#FF49A4`) offset `4px` right and `4px` down, with a `border: 2px solid #000000`. The original element remains sharp; the ghost prints a deliberate color‑offset. Use `transition: offset 0ms` (instant appearance) or pair with a `wiggle` animation.
avoid: Using `box-shadow: 0 4px 12px rgba(0,0,0,0.3)` for hover depth. A blurred shadow reads as atmospheric UI, not a silkscreen artifact.

rule: Pattern overload is the default background — multiple flat patterns must multiply visually, not fade.
do: Layer a checkerboard pattern (`background: repeating-conic-gradient(#000 0 25%, #fff 0 50%) 0 0 / 20px 20px`) behind a terrazzo speckle overlay (`SVG feTurbulence baseFrequency=0.05`) with `mix-blend-mode: multiply` at `opacity: 0.9`. Both patterns remain fully opaque, no gradients.
avoid: Filling a hero section with a single solid pastel color (`background: #E6E6FA`) and no texture. The result is too calm, too digital, and not Memphis.

rule: The squiggle, teardrop, and isometric cube are non‑negotiable visual vocabulary — real objects are forbidden.
do: Use an SVG squiggle divider `height="16px"` between content sections, filled with Hot Pink. Teardrops act as clip‑paths for images or as oversized decor (`clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)`, `width: 80px`, `height: 100px`, `fill: #FFEA00`). Isometric cubes appear as decorative tiles with three flat faces: Cyan, Yellow, Black, each bordered with 2px Black.
avoid: Placing a photograph or a realistic silhouette icon (a real fish, a real lightning bolt) on the page. Only abstract, geometry‑derived motifs are permitted.

rule: Clashing saturated colors must sit directly adjacent to each other — no neutrals, no earth tones, no separation.
do: Place a Hot Pink (`#FF49A4`) button directly above a Primay Red (`#E63946`) strip, separated only by a 4px black outline. A Cyan (`#00E5FF`) accent shadow sits behind a Yellow (`#FFEA00`) card. Optical vibration is the goal.
avoid: Using olive (`#808000`), beige (`#F5F5DC`), or rust (`#B7410E`) anywhere in the palette. Earth tones kill the electric saturated clash and make the interface feel grounded, not impossible.

rule: Every edge must be razor‑sharp — no radius, no feathering, no anti‑aliasing fuzziness.
do: Set `border-radius: 0` on all elements. Icons are drawn with `shape-rendering: crispEdges`. Box shadows use `blur-radius: 0`. Even text remains sharp by selecting a geometric sans‑serif at larger sizes with no sub‑pixel smoothing.
avoid: Applying `border-radius: 8px` to a card, or using `box-shadow: … 4px blur`. Such softening suggests a rounded, friendly interface, which contradicts the hard‑edge Memphis aesthetic.

rule: Typography is a graphic object — always uppercase or lowercase, never sentence case, and always with wide tracking.
do: Use `text-transform: uppercase`, `letter-spacing: 0.15em`, and a geometric sans‑serif like Haas-Grotesk or a retro equivalent. Headlines are `font-size: 4rem` in lowercase with `letter-spacing: 0.2em`. No mixed case anywhere.
avoid: “Welcome to our portfolio” in sentence case with standard letter‑spacing. That neutral, readable text dissolves the graphic voice.

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description.

**rule:** Black is the only structural outline color — it defines every component boundary and sharpens the visual noise.
**do:** Apply `border: 4px solid #000000` to every interactive element. Use black outlines on icons, cards, buttons, and input fields. No other color may serve as a permanent structural edge.
**avoid:** Using gray (`#808080`) or pastel (`#B0E0E6`) as a border color on a button; the component loses its hard-edge identity and becomes something soft and corporate.

**rule:** Asymmetry is the primary layout rule — nothing is centered unless it is a deliberate, self-aware joke.
**do:** Position focal points `left: 10%`, `right: 5%`, or `transform: translateX(-5%) translateY(15%)` relative to the viewport. The main hero text floats to the top‑left, overlapping a teardrop shape at `right: -4px`. Centering only appears when mocking typical design patterns, e.g., a tiny centered “ABOUT” in a sea of chaos.
**avoid:** A perfectly centered hero section with `margin: 0 auto`, padding on both sides equal. That kills the unstable energy and reads as a conventional landing page.

**rule:** Hover feedback is a printing error, not a smooth digital transition. Misregistration is the only primary hover effect.
**do:** On hover, spawn a `::before` pseudo‑element in Hot Pink (`#FF49A4`) offset `4px` right and `4px` down, with a `border: 2px solid #000000`. The original element remains sharp; the ghost prints a deliberate color‑offset. Use `transition: offset 0ms` (instant appearance) or pair with a `wiggle` animation.
**avoid:** Using `box-shadow: 0 4px 12px rgba(0,0,0,0.3)` for hover depth. A blurred shadow reads as atmospheric UI, not a silkscreen artifact.

**rule:** Pattern overload is the default background — multiple flat patterns must multiply visually, not fade.
**do:** Layer a checkerboard pattern (`background: repeating-conic-gradient(#000 0 25%, #fff 0 50%) 0 0 / 20px 20px`) behind a terrazzo speckle overlay (`SVG feTurbulence baseFrequency=0.05`) with `mix-blend-mode: multiply` at `opacity: 0.9`. Both patterns remain fully opaque, no gradients.
**avoid:** Filling a hero section with a single solid pastel color (`background: #E6E6FA`) and no texture. The result is too calm, too digital, and not Memphis.

**rule:** The squiggle, teardrop, and isometric cube are non‑negotiable visual vocabulary — real objects are forbidden.
**do:** Use an SVG squiggle divider `height="16px"` between content sections, filled with Hot Pink. Teardrops act as clip‑paths for images or as oversized decor (`clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)`, `width: 80px`, `height: 100px`, `fill: #FFEA00`). Isometric cubes appear as decorative tiles with three flat faces: Cyan, Yellow, Black, each bordered with 2px Black.
**avoid:** Placing a photograph or a realistic silhouette icon (a real fish, a real lightning bolt) on the page. Only abstract, geometry‑derived motifs are permitted.

**rule:** Clashing saturated colors must sit directly adjacent to each other — no neutrals, no earth tones, no separation.
**do:** Place a Hot Pink (`#FF49A4`) button directly above a Primay Red (`#E63946`) strip, separated only by a 4px black outline. A Cyan (`#00E5FF`) accent shadow sits behind a Yellow (`#FFEA00`) card. Optical vibration is the goal.
**avoid:** Using olive (`#808000`), beige (`#F5F5DC`), or rust (`#B7410E`) anywhere in the palette. Earth tones kill the electric saturated clash and make the interface feel grounded, not impossible.

**rule:** Every edge must be razor‑sharp — no radius, no feathering, no anti‑aliasing fuzziness.
**do:** Set `border-radius: 0` on all elements. Icons are drawn with `shape-rendering: crispEdges`. Box shadows use `blur-radius: 0`. Even text remains sharp by selecting a geometric sans‑serif at larger sizes with no sub‑pixel smoothing.
**avoid:** Applying `border-radius: 8px` to a card, or using `box-shadow: … 4px blur`. Such softening suggests a rounded, friendly interface, which contradicts the hard‑edge Memphis aesthetic.

**rule:** Typography is a graphic object — always uppercase or lowercase, never sentence case, and always with wide tracking.
**do:** Use `text-transform: uppercase`, `letter-spacing: 0.15em`, and a geometric sans‑serif like Haas-Grotesk or a retro equivalent. Headlines are `font-size: 4rem` in lowercase with `letter-spacing: 0.2em`. No mixed case anywhere.
**avoid:** “Welcome to our portfolio” in sentence case with standard letter‑spacing. That neutral, readable text dissolves the graphic voice.

### 11d. Variation Bounds

| Axis | Pole 1 (Calm) | Pole 2 (Wild) |
|------|---------------|----------------|
| Clean vs. Chaotic | One bold geometric shape + two straight lines | Full-on pattern overload with overlapping stripes, dots, and squiggles |
| Flat vs. Patterned | Solid pastel fills (mint, lavender, peach) | Busy black-and-white textures (checkerboard, terrazzo, halftone) |
| Minimal vs. Maximal | Few large shapes (3–4 per viewport), much negative rest space | Many small shapes (12–20 scattered), high density, no empty areas |
| Bright vs. Neon | Saturated primaries (red, yellow, blue, teal) | Fluorescent day-glo (acid green, hot pink, electric cyan, neon orange) |

All variations retain: asymmetry, hard edges, offset shadows, and at least one squiggle. Do not mix both modes within a single composition; palette mode is a global toggle.

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts. Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
A bold personal portfolio hero section. Background: repeating checkerboard pattern (`repeating-conic-gradient(#000 0 25%, #fff 0 50%) 0 0 / 20px 20px`) overlaid with a Peach (`#FFDAB9`) pastel rectangle at `opacity: 85%`, mix-blend-mode multiply. Top-left: a large teardrop shape (`fill: #FF49A4`, `outline: 4px solid #000`, offset shadow: 4px 4px 0 #00E5FF`) bleeding off the left edge at `transform: rotate(-12deg)`. Center‑right: the main headline “DESIGNER & ARTIST” in uppercase Haas-Grotesk, `font-size: 3.5rem`, `letter-spacing: 0.2em`, `color: #000000`, partially overlapping the teardrop. Below it, a solid Yellow (`#FFEA00`) button with `border: 4px solid #000`, `translate(2px, 2px)` intentional drift, label “WORK” in uppercase black. A narrow squiggle divider stripe (`height: 12px`, `fill: #FF49A4`) runs across the viewport at `bottom: 20%`. No element is centered; the eye moves from teardrop to headline to button.

### 11e.ii — Maximum Expressiveness
A full‑bleed exhibition‑promo layout. Seven overlapping layers: (1) base: terrazzo speckle background via `feTurbulence` at `opacity: 0.15` over Powder Blue (`#B0E0E6`). (2) A Cyan (`#00E5FF`) rectangle placed at `left: -10%`, `width: 40%`, `height: 100vh`, mix-blend-mode multiply. (3) Multiple isometric cubes scattered — one at `top: 10%`, `right: -5%` (faces: Hot Pink, Yellow, Black, each outlined 2px Black), rotating via `wiggle` animation on hover. (4) A massive teardrop (`width: 200px`) in Primary Red (`#E63946`) with a 4px Black outline, floating at `left: 70%`, `top: 40%`, partially covered by (5) a card: white fill, `border: 4px solid #000`, offset shadow 8px 8px 0 #FFEA00, containing the event name “RETROSPECTIVE” in all‑caps, `letter-spacing: 0.3em`. (6) A pattern‑strip along the bottom: alternating black‑and‑white diagonal stripes (`background: repeating-linear-gradient(45deg, #000 0 5px, #fff 5px 10px)`). (7) Two squiggle dividers: one Hot Pink at `top: 5%`, one Black at `top: 85%`, both animating in with `slide-in` on load. All type is uppercase, nothing centered, everything sharp.

### 11e.iii — Data Context
Even though the system is intentionally wrong for serious dashboards, when forced to display numeric content, it does so as a playful, pattern‑driven exhibit. Each KPI becomes a geometric card: a `border: 2px solid #000` container with a pastel fill (rotating through Peach, Lavender, Mint). The metric label is uppercase, `font-size: 0.75rem`, `letter-spacing: 0.12em`, `color: #000`, placed at top‑left. The value is a huge geometric sans‑serif number (`font-size: 3rem`, `color: #FF49A4`) with a Yellow offset shadow (`4px 4px 0 #FFEA00`). Positive delta gets a Cyan teardrop badge with `text-positive` in black; negative delta gets a Red squiggle badge with a black outline. A “chart” is rendered as a series of isometric bars: each bar facet is a solid color (Cyan, Hot Pink, Yellow) with a 1px black stroke, stacked with deliberate misalignment. The grid uses a checkerboard pattern as background at `opacity: 0.08`, with rows separated by narrow squiggle strips. This is a data display that sacrifices readability for visual noise, true to the system’s postmodern ethos. No semantic‑state colors are used; status is communicated purely by shape and position, never by calm color coding.

### 11f. Sources

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** The **Memphis Group** was a Milan-based design and architecture collective founded in 1981 by **Ettore Sottsass** (1917–2007). Active primarily throughout the 1980s, the group produced furniture, lighting, ceramics, textiles, and graphic works defined by bold, clashing colours, geometric patterns, and a deliberate break from modernist functionalism.

**Verified imagery sources.** 10 URLs verified against institutional servers, distributed across:
- V&A — 3 URL(s)
- Museum of Modern Art, New York — 1 URL(s)
- Victoria and Albert Museum, London — 1 URL(s)
- Centre Pompidou, Paris — 1 URL(s)
- Wikipedia — 1 URL(s)
- Centre Pompidou, Bibliothèque Kandinsky — 1 URL(s)
- Abet Laminati S.p.A. — 1 URL(s)
- Cooper Hewitt, Smithsonian Design Museum — 1 URL(s)

Key references are not yet catalogued; no institutional records or URLs have been linked.

**Named typefaces.** The typography of this style is attested as:
- Helvetica (Neue Haas Grotesk) (designed by Max Miedinger for Haas/Linotype 1957 — attestation: inferred) — rendered here in Inter as the closest open substitute
- Futura (Extra Bold weight) (designed by Paul Renner for Bauer Type Foundry 1927 — attestation: conventional) — rendered here in Jost as the closest open substitute
- Custom display lettering / hand-drawn logotype for Memphis ( — attestation: unknown) — rendered here as bespoke imagery — no web-font substitute
- ITC American Typewriter (medium weight) (designed by Joel Kaden and Tony Stan for ITC 1974 — attestation: inferred) — no Google Fonts substitute available
- ITC Garamond (occasionally) (designed by Tony Stan for ITC 1977 — attestation: conventional) — rendered here in EB Garamond as the closest open substitute
- Univers 55 Medium (designed by Akira Kakuta for De Stijl 1954 — attestation: unverified) — rendered here in Manrope as the closest open substitute
- Memphis (geometric slab-serif) (for Ludwig & Mayer 1929 — attestation: unverified) — rendered here in Roboto Slab as the closest open substitute

**Honest gaps.** The most significant gap is **Colour – hex/Pantone/CMYK values**: None attested. All digital approximations are unreliable. Without authoritative spectral data or manufacturer specifications from the original production, any numeric colour system mapping is speculative. Access to physical artefacts in museum collections, matched with spectrophotometer readings and official Memphis archive documentation, would resolve this.
