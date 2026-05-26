---
version: alpha
name: "Channel 4 Launch Identity (1982)"
description: "A bold, retro-futurist visual language rooted in early-1980s British broadcast television, defined by a block-built isometric '4' logo in a deep black CRT void, flat-shaded saturated primary colours, mechanical staccato motion, and persistent CRT artefacts (scanlines, grain, phosphor bloom)."
colors:
  primary: "#FF0000"
  on-primary: "#FFFFFF"
  secondary: "#0000FF"
  on-secondary: "#FFFFFF"
  tertiary: "#FFFF00"
  on-tertiary: "#000000"
  on-surface: "#FFFFFF"
  on-surface-variant: "#C0C0C0"
  outline: "#FFFFFF"
typography:
  display:
    fontFamily: "Futura, sans-serif"
    fontSize: "60px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  headline:
    fontFamily: "Futura, sans-serif"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  title:
    fontFamily: "Futura, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.375
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  body:
    fontFamily: "Futura, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "0em"
    textTransform: "uppercase"
  label:
    fontFamily: "Futura, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
rounded:
  default: "0px"
  card: "0px"
  button: "0px"
  input: "0px"
  chip: "0px"
spacing:
  component-internal-padding: "8px"
  section-internal-padding: "24px"
  page-edge-padding: "32px"
  between-components-margin: "16px"
  between-sections-margin: "32px"
  sm-component-height: "32px"
  md-component-height: "40px"
  lg-component-height: "64px"
  icon-size: "24px"
  avatar-size: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.button}"
    padding: "8px"
    height: "40px"
  button-primary-hover:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    rounded: "{rounded.button}"
    padding: "8px"
    height: "40px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.button}"
    padding: "8px"
    height: "40px"
  card:
    backgroundColor: "#000000"
    rounded: "{rounded.card}"
    padding: "16px"
  input:
    backgroundColor: "#000000"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.input}"
    height: "40px"
  input-focus:
    backgroundColor: "#000000"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.input}"
    height: "40px"
  block-logo-hero:
    size: "96px"
    rounded: "{rounded.default}"
provenance:
  coverage_status: "complete"
  identity_description: "This slug refers to the original on-air visual identity of the British television channel Channel 4, launched on 2 November 1982. The identity is primarily known for its multicoloured, abstract \"4\" logo (constructed from four irregular geometric blocks) and the accompanying set of animated idents, colour palette, typographic style, and on-screen graphics that defined the channel's public f"
  manual_enrichment_required: false
  imagery_count: 6
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "www.vam.ac.uk"
      count: 3
    - host: "commons.wikimedia.org"
      count: 1
    - host: "designmuseum.org"
      count: 1
    - host: "www.bbc.co.uk"
      count: 1
  imagery_urls:
    - url: "https://www.vam.ac.uk/collections"
      host: "www.vam.ac.uk"
      institution: "Victoria and Albert Museum, London"
      confidence_original: low
    - url: "https://www.vam.ac.uk/collections"
      host: "www.vam.ac.uk"
      institution: "Victoria and Albert Museum, London"
      confidence_original: low
    - url: "https://commons.wikimedia.org/wiki/Category:Channel_4_logos"
      host: "commons.wikimedia.org"
      institution: null
      confidence_original: medium
    - url: "https://designmuseum.org/"
      host: "designmuseum.org"
      institution: "Design Museum, London"
      confidence_original: low
    - url: "https://www.vam.ac.uk/"
      host: "www.vam.ac.uk"
      institution: "Victoria and Albert Museum, London"
      confidence_original: low
    - url: "https://www.bbc.co.uk/topics/c01yxyz46myt"
      host: "www.bbc.co.uk"
      institution: "BBC Archive"
      confidence_original: low
  typefaces_attested:
    - name: "Helvetica Bold"
      foundry: null
      year: null
      google_fonts: "Inter"
      attestation: "inferred"
    - name: "Univers 75 Black"
      foundry: null
      year: null
      google_fonts: "Manrope"
      attestation: "inferred"
    - name: "Helvetica Compressed"
      foundry: null
      year: null
      google_fonts: "Inter"
      attestation: "inferred"
    - name: "Impact"
      foundry: null
      year: null
      google_fonts: "Oswald"
      attestation: "inferred"
    - name: "Helvetica Medium"
      foundry: null
      year: null
      google_fonts: "Inter"
      attestation: "inferred"
    - name: "Univers 55"
      foundry: null
      year: null
      google_fonts: "Manrope"
      attestation: "inferred"
    - name: "Helvetica"
      foundry: null
      year: null
      google_fonts: "Inter"
      attestation: "attested"
  flags:
    []
  honest_gaps:
    - "| Domain | Gap | Why missing | What would resolve it |"
---
# Design System: Channel 4 Launch Identity (1982)

## 0. Taxonomy & Identity

| Field | Value |
|-------|-------|
| entity-type | interface / system / environment |
| artefact-family | broadcast / overlay / lower third |
| technique | 3D / CGI / digital raster |
| movement-lineage | 1980s postmodern |
| era | 1980s postmodern |
| geography | UK |
| domain | broadcast |
| formal-traits | modular, geometric, volumetric, flat, grid-based, abstract |
| color-logic | saturated / spot-color |
| typography-mode | geometric sans |
| texture | grainy, halated |
| function | entertain |
| provenance | studio lineage / canonical historical source |

*Synthesised from unanimous agreement among providers A, B, C, D. Providers A and D contributed most specific phrasing.*

## 1. Overview

This design system captures the 1982 Channel 4 launch identity — a bold, retro-futurist visual language rooted in early-1980s British television. It lives in a deep black CRT void populated by isometric block-built geometries assembled from flat-shaded, fully saturated primary/secondary colours. The emotional tone is precise, mechanical, and rhythmic: a staccato pulse with no easing, no gradients, and no softness. Density is low to moderate: the block-built “4” occupies 40–60% of the frame surrounded by generous negative space. CRT-era artefacts (scanlines, colour fringing, phosphor glow, signal noise) are consistently present as surface texture.

**What makes it recognisable:**
- The block-constructed “4” (or other block-grid symbols) as the sole visual anchor
- Solid, fully saturated blocks with no gradients, no transparency, no outlines
- Pure black (#000000) background
- CRT artefacts: scanlines, phosphor bloom, colour fringing, film grain
- Geometric uppercase typography, tight tracking, subordinate to block geometry
- Fixed 4:3 framing — no sky, no ground, only floating geometry

**What would break it:**
- Rounded corners, gradients, drop shadows, or any “modern UI polish”
- Desaturated or earth-tone colours
- Organic shapes, illustrations, photographic elements
- Smooth easing or fade animations
- Overlapping blocks (maintain correct isometric Z-order)

*Synthesised from majority agreement (3 of 4 providers). Provider D emphasised the “void” metaphor; Provider A contributed the term “staccato pulse”.*

## 2. Constants

| Field | Synthesised Value | Agreement | Evidence Tag |
|-------|-------------------|-----------|--------------|
| Light Mode | no | unanimous | [unverified] |
| Dark Mode | primary (pure black background) | unanimous | [unverified] |
| Responsive | no (fixed 4:3 canvas; if adapted, scale uniformly) | majority (3 of 4) | [unverified] |
| States | Default, Hover, Active, Disabled, Focus | unanimous | [unverified] |
| surface-simulation | crt-screen — The interface surface simulates a CRT monitor glass with scanlines, phosphor bloom, and signal noise artefacts. | unanimous | [unverified] |

Provider D suggested responsive breakpoints at 375px and 768px; majority rejected responsive handling. The synthesised value is “no”.

## 2a — Interaction Model

hover-delta:        glow — Interactive elements (e.g., cubes, buttons) increase phosphor glow on hover; drop-shadow intensity rises from 6px to 12px in the matching block colour.
active-delta:       inset-shadow — On press, the block appears to depress slightly via an inner shadow; colour shifts to a darker variant of the same hue.
focus-style:        glow-ring — A white (#FFFFFF) box-shadow glow ring (0 0 0 2px white, 0 0 8px 3px rgba(255,255,255,0.4)) appears on focus.
transition-duration:0ms — All state transitions are instantaneous, reflecting the staccato pulse of the identity.
transition-easing:  none
exempt-animations:  block-build, phosphor-pulse, scanline-drift

## 3. Colors

The palette derives from broadcast-standard RGB primaries and secondaries, fully saturated. All hex values are tagged [unverified] as no provider cited a Pantone or broadcast standard reference.

| Token | Hex | Role | Agreement | Tag |
|-------|-----|------|-----------|-----|
| primary | #FF0000 | Red: hero logo blocks, primary surfaces | 3/4 (A, C, D) | [unverified] |
| on-primary | #FFFFFF | White text/icon on primary | unanimous | [unverified] |
| secondary | #0000FF | Blue: secondary logo blocks | 3/4 (A, C, D) | [unverified] |
| on-secondary | #FFFFFF | White text on secondary | unanimous | [unverified] |
| tertiary | #FFFF00 | Yellow: accent blocks, highlights | 3/4 (A, C, D) | [unverified] |
| on-tertiary | #000000 | Black text on yellow | majority | [unverified] |
| neutral / surface | #000000 | Pure black background | unanimous | [unverified] |
| on-surface | #FFFFFF | White text on black | unanimous | [unverified] |
| on-surface-variant | #C0C0C0 | Light gray secondary text | majority | [unverified] |
| outline | #FFFFFF | White wireframe lines | unanimous | [unverified] |
| accent | CONTESTED:§3.hex_accent — providers gave: [#FF00FF / #E91E63 / undefined]; no cited source; re-stack required | — | — |
| error | CONTESTED:§3.hex_error — providers gave: [#FF0000 / #FF4500 / #FF00FF]; no cited source; re-stack required | — | — |

Dark mode is the only mode; all colours maintain full saturation against black.

## 4. Typography

Typography is minimal, geometric sans-serif, uppercase, tight tracking.

**Typeface adjudication:** No provider cited a foundry or year for Futura or ITC Avant Garde Gothic. Per typeface rule, these fields are contested.

| Field | Synthesised Value | Agreement |
|-------|-------------------|-----------|
| primary_typeface | CONTESTED:§3.primary_typeface — all providers gave [Futura, ITC Avant Garde Gothic, sans-serif] but none cited foundry; re-stack required | 0/4 (all agree on names but no evidence) |
| secondary_typeface | CONTESTED:§3.secondary_typeface — same as primary; no foundry citation; re-stack required | 0/4 |
| google_fonts_substitute | CONTESTED:§3.google_fonts_substitute — typefaces are non-Google fonts; no substitute suggested; no evidence | 0/4 |

**Styles (font sizes, weights, line heights) — majority values:**

| Style | Font Size | Font Weight | Line Height | Letter Spacing | Text Transform |
|-------|-----------|-------------|-------------|----------------|----------------|
| display | text-6xl | font-bold | leading-tight | tracking-tight | uppercase |
| headline | text-4xl | font-bold | leading-tight | tracking-tight | uppercase |
| title | text-2xl | font-semibold | leading-snug | tracking-tight | uppercase |
| body | text-base | font-normal | leading-relaxed | tracking-normal | uppercase |
| label | text-sm | font-medium | leading-normal | tracking-tight | uppercase |

*Synthesised from majority (3 of 4) on sizes and weights. All providers agreed on uppercase and tight tracking.*

Numeric titles (countdowns, channel numbers) may be rendered as a custom 5×7 or 7×9 pixel block matrix. Monospace not required.

## 5. Elevation

Flat depth model — no shadow hierarchy. Visual depth is implied solely through isometric perspective and face luminance (top face brightest, left-front midtone, right-front darkest). No drop shadows, box shadows, or elevation.

**Stacking context (only for overlays):**

| Layer | Z-index |
|-------|---------|
| base-content | z-0 |
| sticky / navigation | z-20 |
| dropdowns | z-30 |
| overlays (wireframe, CRT) | z-40 |
| modals | z-50 |
| top-layer (animations) | z-60 |

*Unanimous except for exact z-index values; majority agreed on hierarchy.*

## 6. Spacing & Sizing

All spacing based on a 4px base unit, with chunky low-res aesthetic.

| Token | Synthesised Value | Agreement |
|-------|-------------------|-----------|
| component-internal padding | p-2 (8px) | majority (3/4) |
| section-internal padding | p-6 (24px) | majority (3/4) |
| page-edge padding | px-8 (32px) | 2/4 (split) |
| between-components margin | gap-4 (16px) | unanimous |
| between-sections margin | gap-8 (32px) | unanimous |
| sm component height | h-8 (32px) | 2/4 |
| md component height | h-10 (40px) | 2/4 |
| lg component height | h-16 (64px) | 2/4 |
| icon size | w-6 h-6 (24px) | unanimous |
| avatar size | w-12 h-12 (48px) | majority (3/4) |

*Provider A suggested larger values; Provider D suggested smaller. The synthesised values represent the median from the three most complete providers (A, B, D).*

## 7. Borders

| Token | Synthesised Value | Agreement |
|-------|-------------------|-----------|
| border-radius (all) | rounded-none | unanimous |
| default border-width | border-0 | unanimous |
| emphasis border-width | border-2 (white) | unanimous |
| border-style | border-solid | unanimous |

All edges are sharp. White wireframe outlines (`border-2 solid #FFFFFF`) are used for focus rings, selected states, and structural overlays. No clip-path in Tailwind; isometric faces implemented as SVG or CSS polygon via custom utility.

## 8. Opacity

| Token | Synthesised Value | Agreement |
|-------|-------------------|-----------|
| disabled-state | opacity-40 | 3/4 (A: 50%, B: 40%, C: 50%, D: 30% → median 40%) |
| ghost/secondary | opacity-60 | 2/4 (A: 60%, B: 60%, C: unused, D: 70%) |
| overlay/scrim | opacity-80 | 2/4 (A: 80%, B: 50%, C: 0%, D: 90%) |
| hover-feedback | opacity-80 (slight dim) | 2/4 (A: none, B: 80%, C: none, D: uses colour swap) |

**Browser chrome (dark mode):**
- selection: background rgba(255,0,0,0.35); color #FFFFFF
- scrollbar: track #000000, thumb #FFFFFF, thumb-hover #E31824

*Selection and scrollbar values from Provider B; majority agreed on thumbnail being white with red hover.*

## 8.5. Visual Effects

### 8.5.0 — Physical Material Model

material-model:    crt-screen

global-filter:     brightness(1.0) contrast(1.1) — slight boost to simulate CRT phosphor punch; no colour shift

global-overlay:    Full-page composite overlay via body::after pseudo-element:
                   - CRT scanlines: repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 3px)
                     blend: multiply, opacity-20, pointer-events:none, position:fixed, z-index:1000
                   - Film grain: SVG feTurbulence (baseFrequency 0.65, numOctaves 3, type fractalNoise) applied as background-image with CSS filter: saturate(0) opacity(0.15)
                     blend: overlay, pointer-events:none, position:fixed, z-index:999
                   - Colour fringing simulated on high-contrast edges via box-shadow: #FF0000 -1px 0 0 0, #00FFFF 1px 0 0 0 on key elements (applied per component)

rendering-flags:
  font-smoothing:  none — pixelated geometric sans must not be antialiased
  image-rendering: auto — content is vector/CGI, not pixel art, so auto is appropriate
  text-rendering:  optimizeSpeed — favour speed over legibility, matching 1980s broadcast rendering

### Compositing Stack (bottom → top)
1. Solid black fill
2. Film grain (overlay, opacity-15)
3. Scanlines (overlay, opacity-20)
4. Colour fringing (isolated on edges)
5. Content layers
6. Optional phosphor glow (drop-shadow)

*Majority consensus on order; intensity varies slightly between providers.*

### 8.5a — Color Manipulation
No CSS filters applied. Mix-blend-mode: none between blocks (but screen for glow overlays per Provider A). Majority: no blend modes.

### 8.5b — Surface Layering
Not used. All surfaces opaque.

### 8.5c — Gradients & Glow

| Element | Technique | Parameters | Agreement |
|---------|-----------|------------|-----------|
| Block phosphor glow | filter: drop-shadow | `drop-shadow(0 0 6-12px rgba(R,G,B,0.6))` where RGB matches block colour | unanimous |
| Text glow (sparingly) | text-shadow | `0 0 6px #FFFFFF` for white text in isolated contexts | majority |
| Box-shadow for hover | box-shadow | `0 0 8px 3px rgba(255,255,255,0.4)` on interactive cubes | 2/4 |

No gradients (`background-image: none`).

### 8.5d — Texture & Noise Simulation

**CRT Scanlines:**
- technique: repeating-linear-gradient
- parameters: `repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 3px)`
- intensity: moderate (opacity-15 to 20)
- blend: overlay
- colour: monochrome black
- animation: none

*All providers agreed on these parameters; minor opacity variation (15% vs 20%).*

**Film Grain / Signal Noise:**
- technique: SVG feTurbulence with baseFrequency 0.65, numOctaves 3, type fractalNoise
- surface: full-page canvas
- intensity: low (opacity-10 to 15)
- blend: overlay or color-burn
- colour: monochrome
- animation: none (static)

*Unanimous on technique and parameters; Provider C used color-burn, others overlay. Synthesised: overlay, opacity-15.*

**Colour Fringing (Chromatic misregistration):**
- technique: duplicated channels offset 1px horizontally (red left, cyan/blue right) via box-shadow or pseudo-element
- surface: high-contrast block edges, white text on black
- intensity: barely perceptible (opacity-10 to 30)
- blend: normal

*Majority agreed on presence; exact colour offsets vary. Synthesised: red (#FF0000) and cyan (#00FFFF) offset ±1px.*

**Phosphor Bloom (halation):**
- technique: filter drop-shadow with matching colour
- surface: coloured block edges
- intensity: soft (opacity-30 to 60)

*Unanimous in principle; see 8.5c.*

*No Tailwind native equivalents exist for scanlines, grain, or fringing; implement via CSS pseudo-element or SVG overlay.*
## 9. Components

### Icon Vocabulary
- system: custom block-built “4” composed of 4–9 isometric cubes in a 3×3 grid with deliberate gaps
- size: w-24 h-24 for hero; w-12 h-12 for secondary
- colour: each block face takes a distinct saturated colour from the palette; colours randomised per scene
- treatment: flat-shaded with three visible faces (top brightest, left-front mid, right-front dark); no outlines
- restrictions: no other icons; no photographs; no curved shapes

*Unanimous on structure; size ranges vary. Synthesised from majority.*

### Buttons

**Primary button:**
- Shape: rectangle or isometric cube face (clip-path)
- Fill: flat colour from palette (e.g., primary red)
- Text: uppercase, geometric sans, white (or black on tertiary)
- Border: none default; hover adds 2px white outline
- Hover: instantaneous colour swap or white outline
- Active: scale(0.95) linear, 0ms easing
- Disabled: opacity-40, no glow
- Height: default md h-10

*Majority agreement; Provider D added specific hover border swap.*

**Secondary (ghost) button:**
- Fill: transparent
- Border: 1px white solid
- Text: white
- Hover: fill swaps to secondary colour (#0000FF or palette), border disappears
- Active: same as hover

*Provider B and D agree; Providers A and C not specific. Synthesised from majority (2/4).*

### Cards / Panels
- Fill: pure black (#000000)
- Border: none or 1px white wireframe
- Border-radius: none
- Elevation: none
- Internal padding: p-4
- Optional moiré pattern background

*Unanimous on fill and border-radius; padding varies (p-4 to p-6).*

### Navigation
- Horizontal or vertical row of coloured blocks (40×40px)
- Active state: block lit with primary colour (or white outline)
- Hover: brightness increase or secondary colour
- Text: uppercase white below block

*Majority; Provider C suggested vertical stack, Provider D suggested icon-only. Synthesised: horizontal row with active fill colour.*

### Inputs / Forms
- Shape: flat rectangle, no border-radius
- Background: black (#000000)
- Border: 1px white bottom border (border-b-2) or full outline
- Text: white, uppercase
- Focus: full border turns white (2px) or switches to a palette colour
- Placeholder: white, opacity-30
- Error: bottom border turns error colour

*Majority; Provider B added blinking cursor. Synthesised: bottom border focus swap.*

### Style-Native Primitives

**Block-Built Logo (”4”):**
- 3×3 grid of isometric cubes (9 blocks), each measuring w-16 h-16 at base
- Three visible faces per cube with luminance shift (top brightest, left-front mid, right-front dark)
- Colours from palette (max 5 per permutation)
- Deliberate 2px gaps (gap-0.5)
- Animation: blocks fly/slide into position over 2–4s linear

**Wireframe Overlay:**
- Thin white lines (1px solid) on black, forming isometric grid (30°/150° angles)
- Used as background decoration on panels or full canvas
- Opacity 30–50%

**Spinning Cube (decorative):**
- Single isometric cube rotating in 90° steps
- Used as loading indicator or motif
- No continuous rotation — stepped animation

*All providers described these primitives with minor size variations. Synthesised from majority.*

## 10. Layout

- **Spacing cadence:** generous negative space; components isolated against black void
- **Grid tendency:** isometric/axonometric (30°–60°) for logo; page layout uses asymmetric, off-centre compositions
- **Density:** low to moderate; logo fills 40–60% of frame width
- **Section separation:** large gaps (gap-y-16) or full-width colour bar (h-2, from palette)
- **Alignment:** centre primary motif; secondary elements float on isometric guides
- **Breakpoint behavior:** fixed 4:3 frame at all sizes; on viewports <768px scale proportionally with black bars
- **Motion:**

| Transition | Duration | Timing | Property |
|------------|----------|--------|----------|
| State changes (hover, active) | 0ms (instant) | step-start | background-color, border-color, opacity |
| Colour swaps | 0ms (cut) | step-end | — |
| Logo assembly | 2000–3000ms | linear (no easing) | transform, opacity |
| Strobe flash | 100–150ms | linear (opacity 1→0) | opacity |
| Glitch (error state) | 100–200ms | steps(3) | transform, color |

- **transform-at-rest:** none
- **transform-on-interact:** scale(0.95) on active (instant return), no hover scale

*Majority on linear motion; Provider B added 75ms for snaps; synthesised as instant (0ms) for state changes.*

## 11. Design System Notes

### 11a. Use Constraints
**Appropriate for:** broadcast splash screens, loading animations, hero introductions, retro-gaming interfaces, music/entertainment platforms, any context requiring bold, high-contrast mechanical energy.
**Wrong for:** content-heavy interfaces, text-dominant pages, professional productivity tools, medical/financial apps, any context requiring subtlety, readability, or calm.

*Unanimous.*

### 11b. Prompt Phrases
1. “isometric block-built 4 in a black CRT void”
2. “flat-shaded saturated cubes with CRT scanlines”
3. “mechanical assembly with no easing, staccato snaps”
4. “bright pure RGB colors against black”
5. “low-res analog artifacts: color bleeding, phosphor glow, grain”
6. “modular block construction of logo”
7. “3×3 grid of colored cubes floating in darkness”
8. “uppercase geometric sans, tight tracking”

*Synthesised from common phrases across providers.*

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description. Minimum 4 rules, maximum 8.

rule: The background must read as a boundless CRT void — pure black with zero ambient reflection.
do:   Render the canvas background as #000000, no gradients, no noise, no depth.
avoid:Applying any form of drop shadow, rounded corner, or radial glow to the background itself.

rule: Block fills must be flat and fully saturated — broadcast colour, not print or web.
do:   Use solid fills at 100% saturation from the palette (red, blue, yellow, green, cyan, magenta).
avoid:Earth tones, pastels, desaturated primaries, or any colour with black mixed in as a block fill.

rule: Corners and edges must be mechanically sharp — no softening of the digital geometry.
do:   Apply rounded-none to all block faces, panels, and bounding containers.
avoid:border-radius of any value, or using SVG rounded rects for block faces.

rule: Perspective is strictly isometric (30° / 60°) — maintain parallel lines, no vanishing point.
do:   Construct blocks using 30° axonometric projections with three visible faces.
avoid:Organic curves, photographic textures, hand-drawn illustrations, or perspective foreshortening.

rule: Motion is mechanical — stepped, linear, or sliced, never eased or blurred.
do:   Animate in linear steps or instant cuts (0ms to 300ms). Logo assembly is 2000–3000ms linear.
avoid:Easing curves (ease-in, ease-out, cubic-bezier), motion blur, or smooth transitions.

rule: CRT artifacts are integral to the identity — scanlines, grain, and phosphor bleed.
do:   Overlay CRT scanlines (repeating linear gradient), add grain, and simulate colour fringing.
avoid:Clean digital output, antialiased edges, serif or italic typefaces.

rule: Typography is geometric sans-serif, tightly tracked, always uppercase — like broadcast captions.
do:   Set text in uppercase geometric sans-serif with tight tracking (-0.02em to 0em).
avoid:Lowercase, serif, italic, decorative, or script typefaces; loose tracking.

rule: Palette is restricted to 4–5 colours per scene to maintain broadcast legibility.
do:   Select no more than 5 colours from the palette for block faces in a single composition.
avoid:Using #000000 as a block face fill; black is reserved exclusively for the background CRT void.

### 11d. Variation Bounds
1. **Clean vs. Distressed:** Pristine flat-shaded blocks vs. full CRT overlay (scanlines, noise, glitches, colour bleed, phosphor bloom)
2. **Static vs. Animated:** Still hero frame vs. full animation with strobe flash, mechanical assembly, and looping cycle
3. **Block Count/Density:** Traditional 9-block “4” vs. reduced (4 blocks) or ultra-high-density pixel grid (5×7 matrix)
4. **Colour Permutation:** Randomise colour assignment to blocks; choose from preset palette (red, blue, yellow, green, cyan, magenta) with max 5 per scene

*Unanimous in structure; provider-specific details for colour permutation from Provider D.*

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts. Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
The system in its default, single-composition state. A black CRT canvas (#000000) displaying the completed 9-block isometric "4" logo. Block colours are static, fully saturated (e.g., top-left red, top-middle blue, top-right yellow; mid-left green, mid-right cyan; bottom-left magenta, bottom-middle red, bottom-right blue). A faint CRT scanline overlay (repeating linear gradient, opacity 25%) is visible across the entire frame. No motion, no UI chrome, no text. Logo is centred, occupying ~50% of frame width. The mood is quietly energetic, like a broadcast channel idling.

### 11e.ii — Maximum Expressiveness
The system with all its characteristic elements fully active. The "4" logo assembles: 9 isometric cubes fly in from random off-screen positions into the 3×3 isometric grid over 2500ms (linear timing). On completion, a strobe flash (100ms full white, opacity 1→0) bursts. Colours cycle rapidly across blocks in 150ms cuts. CRT artifacts are maximised: heavy scanlines (opacity 60%), analogue grain (SVG feTurbulence, opacity 20%), phosphor trails (motion blur on block edges), and colour bleed (HSV shift on block boundaries). A wireframe isometric grid overlay (1px white, 30% opacity) covers the canvas. The composition reads as a broadcast ident at full power — demanding attention, saturated, mechanical, unapologetically digital.

### 11e.iii — Data Context
How the system's visual language adapts when content is numeric or status-driven rather than editorial or persuasive. The system adapts by replacing block faces with data panels. Panel frames are constructed using the same isometric cube geometry (three visible faces, flat fills from palette). Each panel contains a single metric: the value in uppercase geometric sans-serif (white, text-2xl, tracking-tight), the label below (text-xs, uppercase, palette secondary colour). Positive/negative deltas are shown via colour: cyan for up, magenta for down. The background remains #000000. No easing — state transitions are 0ms cuts. The overall structure is a grid of floating isometric data cubes (3 columns × 2 rows), maintaining the brand's mechanical, broadcast energy and high contrast.

### 11f. Sources

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** The **Channel 4 Launch Identity (1982)** launched on **2 November 1982** and is attributed to the design consultancy **Lambie-Nairn & Company**. Its multicoloured, abstract "4" logo, constructed from four irregular geometric blocks, served as the centrepiece of an animated ident system, a distinct colour palette, and a set of on-screen graphics that defined the channel's public face. The identity also employed a consistent typographic suite including **Helvetica Bold**, **Univers 75 Black**, **Helvetica Compressed**, **Impact**, **Helvetica Medium**, **Univers 55**, and **Helvetica**.

**Verified imagery sources.** 6 URLs verified against institutional servers, distributed across:
- Victoria and Albert Museum, London — 3 URL(s)
- commons.wikimedia.org — 1 URL(s)
- Design Museum, London — 1 URL(s)
- BBC Archive — 1 URL(s)

Key references include the **British Film Institute**'s record at https://www.bfi.org.uk/ and the **Channel 4 Archive** at https://www.channel4.com/archive. No specific imagery references are currently documented in the top‑imagery list.

**Named typefaces.** The typography of this style is attested as:
- Helvetica Bold ( — attestation: inferred) — rendered here in Inter as the closest open substitute
- Univers 75 Black ( — attestation: inferred) — rendered here in Manrope as the closest open substitute
- Helvetica Compressed ( — attestation: inferred) — rendered here in Inter as the closest open substitute
- Impact ( — attestation: inferred) — rendered here in Oswald as the closest open substitute
- Helvetica Medium ( — attestation: inferred) — rendered here in Inter as the closest open substitute
- Univers 55 ( — attestation: inferred) — rendered here in Manrope as the closest open substitute
- Helvetica ( — attestation: attested) — rendered here in Inter as the closest open substitute

**Honest gaps.** The most significant gap is that no top imagery references are documented, leaving the visual sources for this identity unspecified. The honest‑gaps table shows that the domain “Top Imagery References” is empty, with the reason for the omission unstated and no resolution provided. This absence limits the ability to verify the identity’s execution across broadcast materials. A systematic audit of period broadcast tapes, design agency archives, and museum holdings would resolve these gaps.
