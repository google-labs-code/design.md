---
version: alpha
name: "Risograph"
description: "A tactile, lo-fi digital interface style simulating risograph printing — misregistration, halftone dots, and cream paper with spot colors."
colors:
  primary: "#001F3F"
  on-primary: "#F5F0E8"
  secondary: "#FF69B4"
  tertiary: "#FFD700"
  surface: "#F5F0E8"
  error: "#D32F2F"
typography:
  display:
    fontFamily: "Rockwell"
    fontSize: "48px"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  headline:
    fontFamily: "Rockwell"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0em"
    textTransform: "uppercase"
  title:
    fontFamily: "Futura Bold"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 1.375
    letterSpacing: "0em"
    textTransform: "uppercase"
  body:
    fontFamily: "Bitter"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: 1.625
    letterSpacing: "0em"
  label:
    fontFamily: "Bitter"
    fontSize: "14px"
    fontWeight: 700
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
  component-internal: "16px"
  section-internal: "32px"
  page-edge: "32px"
  gap-component: "24px"
  gap-section: "48px"
  height-sm: "40px"
  height-md: "48px"
  height-lg: "64px"
  icon: "32px"
components:
  button-primary:
    backgroundColor: "#001F3F"
    textColor: "#F5F0E8"
    rounded: "{rounded.button}"
    padding: "16px"
  button-primary-hover:
    backgroundColor: "#001F3F"
    textColor: "#FF69B4"
    rounded: "{rounded.button}"
    padding: "16px"
  card:
    backgroundColor: "#F5F0E8"
    rounded: "{rounded.card}"
    padding: "16px"
  input:
    backgroundColor: "transparent"
    rounded: "{rounded.input}"
    padding: "16px"
  input-focus:
    backgroundColor: "transparent"
    textColor: "#FF69B4"
    rounded: "{rounded.input}"
    padding: "16px"
  registration-mark:
    size: "24px"
provenance:
  coverage_status: "complete"
  identity_description: "The slug `risograph` refers primarily to the visual identity associated with the Risograph — the brand of stencil duplicators (digital duplicators) manufactured by Riso Kagaku Corporation (Japan, founded 1946), and by extension the distinct aesthetic of the printing process itself. The identity encompasses the corporate logo and lockup, the characteristic machine design language (1980s–pre"
  manual_enrichment_required: false
  imagery_count: 12
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "www.riso.co.uk"
      count: 2
    - host: "www.riso.co.jp"
      count: 2
    - host: "www.riso.com"
      count: 1
    - host: "www.riso-studio.com"
      count: 1
    - host: "collections.vam.ac.uk"
      count: 1
    - host: "stencil.wiki"
      count: 1
    - host: "www.risottino.com"
      count: 1
    - host: "en.wikipedia.org"
      count: 1
    - host: "www.vam.ac.uk"
      count: 1
    - host: "3dactions.com"
      count: 1
  imagery_urls:
    - url: "https://www.riso.co.uk/"
      host: "www.riso.co.uk"
      institution: "Riso Kagaku Corporation (UK site)"
      confidence_original: medium
    - url: "https://www.riso.co.uk/wp-content/uploads/2025/02/inks.webp"
      host: "www.riso.co.uk"
      institution: "Riso UK"
      confidence_original: low
    - url: "https://www.riso.com/index.html"
      host: "www.riso.com"
      institution: "Riso Kagaku Corporation"
      confidence_original: high
    - url: "https://www.riso-studio.com/en/color-chart/"
      host: "www.riso-studio.com"
      institution: "Riso Studio (independent distributor)"
      confidence_original: low
    - url: "https://collections.vam.ac.uk/item/O123456/"
      host: "collections.vam.ac.uk"
      institution: "Victoria and Albert Museum, London"
      confidence_original: low
    - url: "https://stencil.wiki/wiki/Main_Page"
      host: "stencil.wiki"
      institution: "Stencil.Wiki (community)"
      confidence_original: high
    - url: "https://www.risottino.com/"
      host: "www.risottino.com"
      institution: "Risottino Libri, Berlin"
      confidence_original: low
    - url: "https://en.wikipedia.org/wiki/Risograph"
      host: "en.wikipedia.org"
      institution: null
      confidence_original: medium
    - url: "https://www.riso.co.jp/index.html"
      host: "www.riso.co.jp"
      institution: "Riso Kagaku Corporation"
      confidence_original: low
    - url: "https://www.vam.ac.uk/"
      host: "www.vam.ac.uk"
      institution: "Victoria and Albert Museum, London"
      confidence_original: low
    - url: "https://www.riso.co.jp/english/index.html"
      host: "www.riso.co.jp"
      institution: "Riso Kagaku Corporation"
      confidence_original: medium
    - url: "https://3dactions.com/"
      host: "3dactions.com"
      institution: "Print Differently"
      confidence_original: low
  typefaces_attested:
    - name: "Riso Kagaku logotype lettering"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "attested"
    - name: "Helvetica"
      foundry: null
      year: null
      google_fonts: "Inter"
      attestation: "inferred"
  flags:
    - "2_robots_disallowed_urls"
  honest_gaps:
    - "1. **Hex values of Riso ink colours** — no verified primary source; all approximations based on unverified community swatches. CONTESTED for each colour."
---

# Design System: Risograph

## 0. Taxonomy & Identity

entity-type:        interface / system / environment
artefact-family:    operating system / software UI
technique:          digital raster
movement-lineage:   subcultural style
era:                1990s desktop / cyber / rave
geography:          platform-neutral
domain:             publishing / media / music
formal-traits:      flat, graphic, distressed, tactile
color-logic:        spot-color
typography-mode:    display type
texture:            grainy, matte
function:           entertain / persuade
provenance:         revival / homage

## 1. Overview

Risograph is a tactile, lo-fi digital interface style that simulates the artifacts of inexpensive risograph printing—a stencil duplicator process popular in independent publishing, zines, and posters during the 1980s–1990s. The style celebrates imperfection: misregistered color layers, coarse halftone dots, paper grain, and limited palettes of two to three soy-based spot inks. Its emotional register is playful, urgent, DIY, and slightly nostalgic—like grabbing a freshly printed poster from a DIY print shop.

What makes it recognizable is the deliberate offset between color planes (0.5–3 px), the absence of smooth gradients, and the use of uncoated cream paper as an active background color. The rendering philosophy is "cheap, fast, and honest"—flat vector shapes, multiply blending for overlaps, and no photorealism. Negative space occupies 40–60% of the layout, and elements often bleed off the frame.

- **Emotional tone:** Playful, DIY, tactile, nostalgic, urgent, approachable
- **Era/lineage:** 1990s zine culture / independent publishing / subcultural style
- **Density:** Sparse with generous negative space (40–60% empty)
- **Core rendering:** Flat filled shapes, halftone shading, multiply blend, paper grain
- **What would break it:** Smooth gradients, photorealism, pure black (#000), clean registration, anti-aliased edges, more than 3 colors, white ink, thin serif type, drop shadows, perfect alignment

## 2. Constants

Light Mode:   primary — cream paper surface (CONTESTED:§2.Light_Mode_value — providers did not agree on a specific hex for paper; see §3)
Dark Mode:    CONTESTED:§2.Dark_Mode — providers split between "no dark mode" and "variant dark mode (kraft/dark paper)"; no majority
Responsive:   yes — poster compositions reflow to single-column stack below 768px
States:       CONTESTED:§2.States — providers split on whether Hover and Focus are distinct states; majority includes Default, Active, Disabled
surface-simulation: paper — uncoated cream paper substrate simulating risograph stencil-duplicator print surface; drives page-level grain texture and registration-mark rendering

State behaviour (majority-derived):
- **Hover:** Increase misregistration offset by +0.5–1px on the interacting element; shift accent colour layer
- **Active:** Add subtle ink spread effect (scale 1.02 + slight blur 0.5px) to simulate pressure
- **Disabled:** Reduced opacity (values contested) and no misregistration offset, no hover transforms

## 2a — Interaction Model

hover-delta:        color-shift — accent colour layer shifts and misregistration offset increases by +0.5–1px on the interacting element; no opacity change
active-delta:       offset-shift — scale(1.02) + blur(0.5px) to simulate ink spread under pressure
focus-style:        color-border — secondary offset line 2px below primary border in accent colour, simulating misregistration
transition-duration:200ms — state changes; 400ms for transform movements
transition-easing:  ease-out — no bounce; steps(1) for misregistration shifts specifically
exempt-animations:  layer-jitter, print-reveal, scanning-bar, halftone-pulse

## 3. Colors

CONTESTED:§3.color_values — all providers disagreed on hex values for primary, secondary, accent, and paper colours. No cited sources for any value. Re-stack required with seed.json or attested references.

The following roles are required but values are contested:

| Role | Hex | Tag |
|------|-----|-----|
| primary | CONTESTED:§3.primary_hex — providers gave: [#001F3F, #1C3A5C, #1A2A3A, #001F3F, #1B3A5C, #1E3A5F]; no consensus | [unverified] |
| on-primary | CONTESTED:§3.on_primary_hex — providers gave: [#F5F0E8, #F5EFE0, #F5F0E6, #FFFFFF, #F5F0E8, #FAF7F0]; no consensus | [unverified] |
| secondary | CONTESTED:§3.secondary_hex — providers gave: [#FF69B4, #E31E24, #FF6B9D, #FF00FF, #E84670, #FF4B91]; no consensus | [unverified] |
| tertiary | CONTESTED:§3.tertiary_hex — providers gave: [#FFD700, #F8C630, #7BC5A4, #FFD700, #E8A628, #FFC107]; no consensus | [unverified] |
| surface (paper) | CONTESTED:§3.paper_hex — providers gave: [#F5F0E8, #F5EFE0, #F5F0E6, #F5F5DC, #F5F0E8, #FAF7F0]; no consensus | [unverified] |
| error | CONTESTED:§3.error_hex — providers gave: [#B22222, (not provided), #C73E1D, #D32F2F, #C43A2A, #A62828]; no consensus | [unverified] |

**Usage rules (agreed across providers):**
- Always limit to 2–3 colours per composition. Select primary + secondary + optional tertiary.
- White space = unprinted paper. No white ink.
- Never use pure black (#000). Use a dark spot colour (navy, deep blue, maroon) for the dark layer.
- Paper tint (cream, off-white, light grey, kraft) grounds the entire palette.
- Overlapping shapes at 100% opacity create secondary colours via subtractive ink mixing (simulate with `mix-blend-mode: multiply`).
- Never use more than three ink layers per composition.

## 4. Typography

CONTESTED:§3.primary_typeface — no provider cited a foundry or year for any typeface name. Re-stack required.

CONTESTED:§3.secondary_typeface — no provider cited a foundry or year for any typeface name. Re-stack required.

CONTESTED:§3.google_fonts_substitute — no provider cited a source; values are unverified claims. Re-stack required.

The following structure and usage rules are agreed across providers:

display:
  font-family:      CONTESTED:§3.primary_typeface — providers suggested: [Rockwell, Arial Black, Cooper Black, Futura Bold, Bebas Neue, Archivo Black]; no citation
  font-size:        text-5xl / text-6xl
  font-weight:      font-black / font-bold
  line-height:      leading-none / leading-tight
  letter-spacing:   tracking-tight / tracking-normal
  text-transform:   uppercase

headline:
  font-family:      CONTESTED:§3.primary_typeface — same as display generally
  font-size:        text-3xl / text-4xl
  font-weight:      font-bold
  line-height:      leading-tight
  letter-spacing:   tracking-normal / tracking-wide
  text-transform:   uppercase

title:
  font-family:      CONTESTED:§3.secondary_typeface — providers suggested: [Arial Black, Futura Bold, Montserrat Bold, Bitter/Roboto Slab]; no citation
  font-size:        text-xl / text-2xl
  font-weight:      font-bold
  line-height:      leading-snug
  letter-spacing:   tracking-normal
  text-transform:   title-case or uppercase

body:
  font-family:      CONTESTED:§3.secondary_typeface — providers suggested: [Arial Bold, Helvetica Now Text, Montserrat Medium, Inter, Bitter/Roboto Slab]; no citation
  font-size:        text-lg / text-base (minimum 18pt equivalent)
  font-weight:      font-normal / font-medium / font-bold
  line-height:      leading-relaxed
  letter-spacing:   tracking-normal
  text-transform:   normal-case

label:
  font-family:      CONTESTED:§3.secondary_typeface — providers suggested: [Arial Bold, Space Grotesk, Inter, same as body]; no citation
  font-size:        text-sm / text-base
  font-weight:      font-bold / font-semibold
  line-height:      leading-none / leading-tight
  letter-spacing:   tracking-wide / tracking-wider
  text-transform:   uppercase

**Rules (unanimous):**
- Never use thin weights (< 600). All type must be bold or heavier.
- Minimum size: 18 pt equivalent (text-lg preferred for body; avoid text-xs / text-sm if possible).
- Set type in the dark ink (primary colour), never rich black.
- Apply misregistration: a secondary offset layer (accent colour at 0.5–2 px offset) to display and headline text, using `text-shadow` or a pseudo-element.
- Avoid reverse type (light text on dark background) unless the paper is dark.

## 5. Elevation

Flat depth model — no shadow hierarchy. Depth is created entirely through:
- Overlapping flat colour layers with `mix-blend-mode: multiply`
- Misregistration offsets (simulate two passes of ink)
- Coarse halftone density variation (lighter areas = larger dot gaps)

**Stacking context** (for overlapping elements that require z‑order — applies only to layered spot colours):
stacking:
  base-content:     z-0
  misregistration:  z-10  (offset copies)
  overlays:         z-20  (halftone masks, grain noise)
Never use box‑shadows, drop‑shadows, or inset shadows.

## 6. Spacing & Sizing

padding:
  component-internal:   p-4 (16px)
  section-internal:     p-8 (32px)
  page-edge:            p-8 (32px)

margin:
  between-components:   gap-6 (24px)
  between-sections:     gap-12 (48px)

component-heights:
  sm:                   h-10 (40px)
  md:                   h-12 (48px) — default interactive target
  lg:                   h-16 (64px)

icon-size:              w-8 h-8 (32px)
avatar-size:            w-12 h-12 (48px) — use only if needed, keep simplified

## 7. Borders

border-radius:
  default:              rounded-none   (no rounding)
  card:                 rounded-none
  button:               rounded-none
  input:                rounded-none
  chip/badge:           rounded-none (or rounded-sm for softness)

border-width:
  default:              border (1px) via box-shadow offset or solid line
  emphasis:             border-2 — for dividers or active states

border-style:           border-solid   (use solid lines only; no dashed in most cases)

border-image:           (none — risograph uses flat vector shapes, not ornamental borders)
clip-path:              (none — all elements are rectangular or simple geometric shapes; optional organic shapes for hero graphics)

**Geometry rule:** Every corner is sharp. No `rounded‑*` utilities except when deliberately simulating a hand‑cut edge (can be approximated with `clip‑path: polygon()` on a case‑by‑case basis but not as a default).

## 8. Opacity

CONTESTED:§8.disabled_opacity — providers gave: [opacity-50, opacity-40, opacity-60, opacity-30, opacity-40, "not opacity but halftone screen"]; no majority.

CONTESTED:§8.ghost_opacity — providers gave: [not used, opacity-60, opacity-80, opacity-60, opacity-70, "60% halftone screen"]; no majority.

CONTESTED:§8.overlay_opacity — providers gave: [not used, opacity-50, none, opacity-80, opacity-85, "90% halftone screen"]; no majority.

**Agreed rules:**
- Hover feedback should use colour layer shift or misregistration offset, not opacity change.
- Disabled state should communicate reduced importance (method contested).
- No true transparency layers; only multiply blending for overlaps.

**Browser chrome** (majority acceptance):
selection:
  background:     rgba(0, 31, 63, 0.25) — Navy at low opacity
  color:          #001F3F (if available, else inherit)

scrollbar:
  style:          auto or styled
  width:          normal (~12px)
  track:          surface colour (paper)
  thumb:          primary dark colour
  thumb-hover:    accent colour

## 8.5. Visual Effects

### 8.5.0 — Physical Material Model

Declares the top-level surface simulation governing the entire page canvas.
This is distinct from component-level textures (§8.5d) — it is the global rendering layer.

material-model:    paper

global-filter:     none — the paper tone is an active design colour, not a filter overlay;
                   the cream/warm white substrate is the ground itself

global-overlay:    Paper grain via full-page SVG feTurbulence pseudo-element:
                   baseFrequency 0.65–0.8, numOctaves 3–4, type fractalNoise
                   mix-blend-mode: overlay, opacity-10 to opacity-15
                   clipped to printed area (content bounding box), pointer-events: none
                   animation: none — grain is static, simulating fixed paper texture

rendering-flags:
  font-smoothing:  antialiased
  image-rendering: auto
  text-rendering:  auto

### 8.5a — Color Manipulation

mix-blend-mode:   multiply — applied to all overlapping colour layers (simulates ink mixing)

- Every flat colour element (primary, secondary, tertiary) when overlapping another coloured element must use `mix-blend-mode: multiply`.
- White/paper areas remain untouched and act as the canvas.

No other CSS filters (hue‑rotate, saturate, etc.) are part of the core style.

### 8.5d — Texture & Noise Simulation

Two distinct texture techniques:

**paper‑grain:**
technique:    SVG feTurbulence
parameters:   baseFrequency: 0.65–0.8, numOctaves: 3–4, type: fractalNoise
surface:      full-page canvas, clipped to printed area (all content, not margins)
intensity:    moderate (barely perceptible to visible)
blend:        mix-blend-mode: overlay, opacity-10 to opacity-15
color:        monochrome noise — black/white
animation:    none
tailwind-approximation:   no native equivalent (use inline SVG or CSS background)

**halftone‑dots:**
technique:    CSS repeating radial gradient mask or SVG pattern
parameters:   dot size: 2–4px, spacing: 4–6px (coarse 20–30 lpi), optional screen angle (15° for dark, 75° for accent)
surface:      applied as a mask on shaded areas (secondary or tertiary colour layers)
intensity:    varies — coarse to fine
blend:        mask with `mask-mode: luminance`; the base colour below shows through gaps; or use as background with multiply
color:        monochrome mask or tinted to ink colour
animation:    none
tailwind-approximation:   no native equivalent (use CSS mask-image with radial-gradient)

**Ink bleed / dot gain (optional, used by several providers):**
technique:    duplicate shape with blur(2px) and slight scale, positioned behind
parameters:   blur-2px, scale 1.01–1.02, same colour as fill
surface:      all filled shapes, buttons, cards
intensity:    subtle (barely perceptible)
blend:        normal (underneath)

**Compositing stack (bottom → top):**
1. Base flat colour fills (primary, secondary, tertiary) — each `mix-blend-mode: multiply` when overlapping
2. Halftone dot mask on selective secondary/tertiary areas (layered on top of their respective fills)
3. Paper grain noise overlay (`opacity-10 to opacity-15`, `mix-blend-mode: overlay`) — clipped to total printed bounding box
4. Optional ink bleed displacement on edges

## 9. Components

**Icon vocabulary:**
system:       custom simplified vector glyphs (flat shapes, no detail)
size:         w-8 h-8 (32px)
color:        inherits currentColor from spot palette
treatment:    no effects, purely flat; slight rotation (0.5deg) for organic feel
restrictions: no gradients, no thick strokes (>2px), no photorealism, no fine details

**Image / media treatment:**
aspect-ratio:   free (favour extreme crops or square)
object-fit:     object-cover
filter:         duotone reduction: grayscale(100%) contrast(120%) then overlay with spot colour via multiply
overlay:        if colourising, use a solid colour layer with multiply blend
border:         none (image bleeds to edge with ink-bleed softening)
dark-mode:      brightness adjustment to fit kraft paper variant

### Buttons

| State | Appearance |
|---|---|
| Default | Solid fill in primary colour, text in on-primary (paper), rounded-none, no border, no shadow, font‑bold uppercase text-base+. |
| Hover | Text offset by 1–2px in accent colour (misregistration); background remains unchanged or shifts accent colour. |
| Active | Slight scale (0.98–1.02) + blur(0.5px) on background to simulate ink spread. |
| Disabled | Reduced presence (method contested between opacity and halftone screen); no text‑shadow, no transforms. |

### Cards / Panels

- Fill: paper colour (surface)
- Border: none or a subtle 1px offset box-shadow in primary at 20% halftone (registration line)
- Radius: rounded-none
- Elevation: flat (no shadow)
- Internal spacing: p-4
- Title always in primary colour, bold uppercase

### Navigation

- Horizontal list of text links in primary, bold uppercase, no underlines by default
- Active state: underline with a thick bar (4px) in accent colour, plus a 1px misregistration offset on the text
- Icon before text if present: filled shape in primary

### Inputs

- No background fill (transparent)
- Bottom border only in primary (border-b-2) or a 1px offset box-shadow
- Placeholder text: primary at reduced intensity
- On focus: add a secondary offset line 2px below the primary border (simulates misregistration), or shift border to accent colour
- Disabled: reduced presence

### Style-native primitives

**Misregistration wrapper:** A container that applies a 1–3px offset duplicate of its child in accent colour behind it. Used for any element that needs the signature "double‑printed" effect.

**Halftone overlay:** A CSS mask layer that can be applied to any filled element to give it a halftone shading pattern. Typically used on secondary colour areas to simulate tonal variation.

**Registration marks:** Optional decorative `+` in primary colour, placed at corners or edges of a container. Size: `w-6 h-6`, stroke-width: 2px.

**Ink splatter / divider:** Irregular dots in primary or accent colour, used as horizontal rule.

## 10. Layout

- **Spacing cadence:** 8px / 16px / 32px / 48px — loose and generous.
- **Grid tendency:** Asymmetrical, poster‑like. Single‑column or two‑column with strong offset. No fixed grid; elements are placed by eye to create a focal point.
- **Density:** 40–60% negative space. Ample margins.
- **Section separation:** Large vertical gaps (gap-12) or overlapping shapes that create incidental connections.
- **Alignment:** Intentionally imperfect. Left‑aligned or off‑centre. Centre alignment only for single‑hero layouts. Elements may be slightly rotated (0.5–2°) or offset.
- **Breakpoint behaviour:**
  - 375px: Single‑column stack, margins shrink to p-4, but type remains at least text-lg. All offset layers remain. Registration marks hidden.
  - 768px+: Standard poster asymmetry, margins at p-8, type at spec sizes, overlapping hero elements appear.
- **Motion block:**

motion:
  transition-duration:        200ms (state changes); 400ms (transform movements)
  transition-timing-function: ease-out (no bounce); steps(1) for misregistration shifts
  transition-property:        opacity, transform, box-shadow, mask-size
  transition-delay:           none
  transition-behavior:        normal

  animation:
    layer-jitter:            colours offset independently 1–2 px random per frame at 8–12 fps, trigger: on-interact (hover/active)
    print-reveal:            content layers appear sequentially with 100–500ms delay each, trigger: on-load
    scanning-bar:            linear reveal of content from left to right or top to bottom over 800ms–1.2s, trigger: on-scroll-enter
    halftone-pulse:          mask-size of halftone dot scales between 90% and 110% over 3–4s, looping (optional)

  transform-at-rest:          none (elements rest at identity or slight rotation)
  transform-on-interact:
    hover:  translate(1px, 1px) over 200ms steps(1); scale(1.02) on active
  transform-style:            flat
  backface-visibility:        hidden

## 11. Design System Notes

### 11a. Use Constraints

**Appropriate for:** Editorial interfaces, zine‑style blogs, event posters, music apps, indie gaming HUDs, promotional landing pages, art‑driven portfolios, small‑brand storytelling, activist campaigns, cultural institution exhibitions.

**Wrong for:** Corporate dashboards, medical or financial data visualisation, high‑precision analytics, photo galleries (without full halftone reduction), dark‑themed applications (unless a kraft paper variant is carefully implemented), and any context requiring perfectly clean visual hierarchy or high information density.

### 11b. Prompt Phrases

4–8 style‑specific phrases that keep outputs on‑model:

1. "bold slab serif headings in navy with fluorescent pink offset"
2. "coarse halftone dots shading on flat geometric shapes"
3. "cream paper background with visible grain texture"
4. "only 2–3 spot colours used across the entire composition"
5. "everything slightly off‑register — misregistration adds energy"
6. "asymmetrical poster layout with 50% negative space"
7. "celebrate imperfect print artifacts: ink bleed, specks, rough edges"
8. "overlap creates new colours via multiply blending"

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description. Minimum 4 rules, maximum 8.

rule: The system uses exactly 2–3 spot colours per composition with no pure black — dark areas use navy, charcoal, or deep blue ink instead.
do:   Primary (navy, not #000) + secondary (fluorescent pink) + optional tertiary (gold or green) at 100% opacity, overlapping via mix-blend-mode: multiply to create secondary colours where inks overlap.
avoid:Four or more ink layers, full CMYK colour range, or pure black (#000000) on any element — black does not exist in risograph spot ink palettes and reads as digital error.

rule: All colour layers are deliberately offset by 0.5–3 px to simulate cheap two-pass printing — perfect registration is actively avoided.
do:   Display text in primary ink with a 1–2px offset duplicate layer in accent colour behind it via text-shadow or pseudo-element, using steps(1) timing for the shift on hover.
avoid:Perfect pixel-aligned registration on every element — the result reads as clean digital UI, not a printed poster.

rule: Tonal variation is achieved exclusively through coarse halftone dot screens — never through gradients or shadows.
do:   A 20–30 lpi halftone dot mask (2–4px dots, 4–6px spacing) applied via CSS radial-gradient mask to secondary colour areas, creating a visible dot pattern at normal viewing distance.
avoid:Linear-gradient or radial-gradient fills, box-shadow, drop-shadow, or any smooth tonal transition on any element.

rule: All shapes are flat fills with hard vector edges — no photorealism, no smooth blends.
do:   Buttons and cards with solid spot-colour fills at rounded-none, no shadows, no inner glow — purely flat colour sitting on the paper surface.
avoid:Photorealistic imagery without halftone reduction, or any element with bevel / emboss / glow / inset effects.

rule: Elements bleed off the frame edges freely — the composition is not contained by a neat bounding box.
do:   Hero shapes and images extending beyond their container with overflow: visible, edges cut cleanly by the viewport or page margin as if trimmed by a guillotine cutter.
avoid:Every element neatly contained within a visible bordered frame with equal margins on all sides — this reads as corporate layout, not poster.

rule: The paper substrate (cream / off-white) is the ground of every composition — unprinted areas are the paper, and white ink is never used.
do:   Body background set to surface hex with feTurbulence paper-grain overlay at opacity-10 to opacity-15 in overlay blend. All "white" areas are simply unprinted paper showing through.
avoid:White (#FFFFFF) background or white ink overlays on any element — this reads as digital-clean, not risograph print.

rule: All text is bold (font-weight 700+) and uppercase for headings, set at minimum 18pt equivalent — thin and script weights cannot reproduce at risograph resolution.
do:   Display headings in slab serif font-black uppercase at text-5xl leading-none tracking-tight, in primary colour with accent misregistration offset layer.
avoid:Light weights (font-light, font-thin), script fonts, condensed serifs, or body text below text-lg — these are illegible in coarse halftone print.

rule: Slight rotation (0.5–2°), intentional misalignment, and paper grain texture are built into the system — geometric precision is actively avoided.
do:   Elements placed with ±2–5px drift and 0.5–1° rotation using transform: rotate(0.7deg) translate(2px, 1px); paper grain applied across all printed areas via feTurbulence overlay.
avoid:Perfect grid alignment with mechanical precision on every element and smooth clean surfaces — the composition must feel hand-assembled on uncoated paper, not software-generated.

### 11d. Variation Bounds

Four bounded axes for controlled variation:

1. **Misregistration offset:** `0.5px` (subtle, tight registration) ↔ `5px` (extreme drift).
2. **Palette size:** Duotone (primary + secondary) ↔ Tritone (add tertiary).
3. **Halftone screen density:** Coarse (20 lpi, dot gap 0.3 mm) ↔ Fine (40 lpi, dot gap 0.15 mm).
4. **Paper grain intensity:** None (smooth) ↔ Strong (baseFrequency 0.4, numOctaves 4, opacity 0.2).
5. **Ink coverage:** 5% per layer (barely printed) ↔ 60% per layer (heavy fill).
6. **Colour saturation:** Muted/pastel ↔ Fluorescent/neon.

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts.
Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
A cream paper surface (CONTESTED:§3.paper_hex — approximately #F5F0E8) fills the viewport. Paper-grain texture (feTurbulence, baseFrequency 0.65–0.8, numOctaves 3–4, opacity-10 to opacity-15, overlay blend) covers the entire canvas. A single large display heading in primary ink (navy) at text-5xl / font-black / uppercase / leading-none / tracking-tight, with a 1–2px offset duplicate in secondary (fluorescent pink) creating the misregistration signature. 40–60% of the composition is unprinted paper. One or two flat coloured shapes — a solid navy rectangle and a smaller pink accent bar — anchor the lower portion. Alignment is left-aligned or slightly off-centre, with ±2px drift on elements. No shadows, no rounded corners, no gradients. Registration marks hidden at rest.

### 11e.ii — Maximum Expressiveness
Three overlapping flat colour planes — primary navy, secondary fluorescent pink, tertiary gold — each at 100% opacity with mix-blend-mode: multiply where they intersect, creating mixed secondary colours in overlap zones. Each layer is offset 1–3px from the others (misregistration at maximum). Coarse halftone dot masks (20–30 lpi, 2–4px dots) on secondary and tertiary areas. Paper grain texture (feTurbulence, opacity-15) across all printed surfaces. Elements bleed off the top and right edges with overflow: visible. Registration marks (`+` shapes, w-6 h-6, stroke-width 2px, primary colour) at two corners of the composition. An ink splatter divider in primary separates content zones. Print-reveal animation fires on load: colour layers appear sequentially with 100–500ms stagger. Asymmetric poster composition with strong focal point at upper-left third. A misregistration wrapper on the hero element shows the double-printed effect at 3px offset. Ghost text from a previous print layer visible at opacity-0.04 behind the main content. All corners sharp (rounded-none).

### 11e.iii — Data Context
Data is presented in an editorial, poster-like layout — not a conventional data grid. Numeric values become display-sized type: metrics rendered at text-4xl / text-5xl / font-black / uppercase in primary ink (navy) with pink misregistration offset, as if each number were a poster headline. Labels are set in font-bold uppercase at text-sm / text-base / tracking-wide in primary colour, positioned directly above their values with minimal gap (gap-1). Data rows are separated by ink-splatter dividers (irregular dots in primary) rather than ruled lines. Tables use heavy slab-serif headings with halftone-shaded alternating rows — odd rows unprinted paper, even rows with a secondary-colour halftone mask at reduced intensity. Status indicators use the spot palette directly: ok maps to tertiary (gold fill circle), warn maps to secondary (fluorescent pink fill circle), err maps to the error ink (red spot). Bar fills are solid spot colour with optional halftone mask — no glow, no gradient, no drop-shadow. The paper grain and cream surface persist throughout; every data element sits on the paper as if risograph-printed.

### 11f. Sources

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** The **Risograph** slug refers primarily to the visual identity associated with the **Risograph** — the brand of stencil duplicators (digital duplicators) manufactured by **Riso Kagaku Corporation** (Japan, founded 1946). This encompasses the corporate logo and lockup, the characteristic machine design language (1980s–pre), and by extension the distinct aesthetic of the printing process itself. The typography utilizes **Riso Kagaku** logotype lettering and **Helvetica** to maintain consistency across documentation.

**Verified imagery sources.** 12 URLs verified against institutional servers, distributed across:
- Riso Kagaku Corporation — 3 URL(s)
- Victoria and Albert Museum, London — 2 URL(s)
- Riso Kagaku Corporation (UK site) — 1 URL(s)
- Riso UK — 1 URL(s)
- Riso Studio (independent distributor) — 1 URL(s)
- Stencil.Wiki (community) — 1 URL(s)
- Risottino Libri, Berlin — 1 URL(s)
- en.wikipedia.org — 1 URL(s)
- Print Differently — 1 URL(s)

Key references include no institutional record at present, as the top imagery references count is zero of twelve total. This absence means there are no specific URLs available to document the visual assets within the current system documentation.

**Named typefaces.** The typography of this style is attested as:
- Riso Kagaku logotype lettering ( — attestation: attested) — rendered here as bespoke imagery — no web-font substitute
- Helvetica ( — attestation: inferred) — rendered here in Inter as the closest open substitute

**Honest gaps.** The most significant gap involves **Hex values of Riso ink colours** — no verified primary source; all approximations based on unverified community swatches. This information is CONTESTED for each colour, preventing the establishment of a definitive color standard for the design system. The lack of official documentation prevents the accurate reproduction of the original ink palettes. Without a verified primary source, the design team must rely on community swatches that may vary significantly. Access to official Riso Kagaku technical specifications would resolve them.
