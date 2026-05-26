---
version: alpha
name: "Constructivism"
description: "A revolutionary UI style channeling early Soviet graphic design, defined by abstract geometry, diagonal dynamism, and industrial clarity with a stark red-black-white palette."
colors:
  on-primary: "#FFFFFF"
  secondary: "#000000"
  on-secondary: "#FFFFFF"
  neutral: "#FFFFFF"
  on-surface: "#000000"
  surface-container: "#F5F5F5"
  outline: "#000000"
typography:
  display:
    fontFamily: "Futura (substitute: Paytone One)"
    fontSize: "60px"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.05em"
    textTransform: "uppercase"
  headline:
    fontFamily: "Futura (substitute: Paytone One)"
    fontSize: "36px"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  title:
    fontFamily: "Futura (substitute: Paytone One)"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.375
    letterSpacing: "0.025em"
    textTransform: "uppercase"
  body:
    fontFamily: "Futura (substitute: Paytone One)"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0em"
    textTransform: "uppercase"
  label:
    fontFamily: "Futura (substitute: Paytone One)"
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
  section-internal: "24px"
  page-edge: "32px"
  gap-component: "16px"
  gap-section: "32px"
  height-sm: "40px"
  height-md: "48px"
  height-lg: "64px"
  icon: "24px"
components:
  button-primary:
    backgroundColor: "#CC0000"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.button}"
    padding: "16px"
  button-primary-hover:
    backgroundColor: "#E60012"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.button}"
    padding: "16px"
  card:
    backgroundColor: "{colors.neutral}"
    rounded: "{rounded.card}"
    padding: "16px"
  input:
    backgroundColor: "{colors.neutral}"
    rounded: "{rounded.input}"
    padding: "8px"
  input-focus:
    backgroundColor: "{colors.neutral}"
    rounded: "{rounded.input}"
    padding: "8px"
  photomontage-panel:
    backgroundColor: "{colors.neutral}"
    rounded: "{rounded.card}"
    padding: "16px"
provenance:
  coverage_status: "complete"
  identity_description: "The slug `constructivism` refers to the Russian Constructivist movement — an avant‑garde art and design movement active approximately 1913–1935, primarily in Soviet Russia. Constructivism rejected autonomous “art for art’s sake” in favour of art as a practical tool for building a socialist society. Its visual language is characterised by geometric abstraction, a restricted palette (primarily red, "
  manual_enrichment_required: false
  imagery_count: 11
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "en.wikipedia.org"
      count: 9
    - host: "www.vam.ac.uk"
      count: 1
    - host: "www.getty.edu"
      count: 1
  imagery_urls:
    - url: "https://en.wikipedia.org/wiki/Constructivism_(art)"
      host: "en.wikipedia.org"
      institution: "Wikimedia Foundation"
      confidence_original: high
    - url: "https://en.wikipedia.org/wiki/El_Lissitzky"
      host: "en.wikipedia.org"
      institution: "Wikimedia Foundation"
      confidence_original: high
    - url: "https://en.wikipedia.org/wiki/Alexander_Rodchenko"
      host: "en.wikipedia.org"
      institution: "Wikimedia Foundation"
      confidence_original: high
    - url: "https://en.wikipedia.org/wiki/Stenberg_brothers"
      host: "en.wikipedia.org"
      institution: "Wikimedia Foundation"
      confidence_original: high
    - url: "https://en.wikipedia.org/wiki/Gustav_Klutsis"
      host: "en.wikipedia.org"
      institution: "Wikimedia Foundation"
      confidence_original: high
    - url: "https://en.wikipedia.org/wiki/Lyubov_Popova"
      host: "en.wikipedia.org"
      institution: "Wikimedia Foundation"
      confidence_original: high
    - url: "https://en.wikipedia.org/wiki/Varvara_Stepanova"
      host: "en.wikipedia.org"
      institution: "Wikimedia Foundation"
      confidence_original: high
    - url: "https://www.vam.ac.uk/collections"
      host: "www.vam.ac.uk"
      institution: "Victoria and Albert Museum, London"
      confidence_original: low
    - url: "https://en.wikipedia.org/wiki/Proun"
      host: "en.wikipedia.org"
      institution: "Wikimedia Foundation"
      confidence_original: medium
    - url: "https://www.getty.edu/research-institute/"
      host: "www.getty.edu"
      institution: "Getty Research Institute, Los Angeles"
      confidence_original: low
    - url: "https://en.wikipedia.org/wiki/UNOVIS"
      host: "en.wikipedia.org"
      institution: "Wikimedia Foundation"
      confidence_original: high
  typefaces_attested:
    - name: "Erbar-Grotesk"
      foundry: "Ludwig & Mayer"
      year: 1926
      google_fonts: "Jost"
      attestation: "attested"
    - name: "hand-drawn geometric sans-serif lettering"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "attested"
    - name: "Akzidenz-Grotesk"
      foundry: null
      year: null
      google_fonts: "Archivo"
      attestation: "conventional"
  flags:
    []
  honest_gaps:
    - "1. **Colour specifications**: No verified hex/Pantone/CMYK values for any constructivist colour. Red, blue, yellow hex approximations are contested among providers. Resolution requires spectrophotometric measurement of surviving prints."
---
# Design System: Constructivism

## 0. Taxonomy & Identity

| Field | Value |
|---|---|
| entity-type | interface / system / environment |
| artefact-family | operating system / software UI |
| technique | digital raster |
| movement-lineage | CONTESTED:§0.movement-lineage — providers split between "design movement" (3) and "art-historical movement" (3); no majority |
| era | interwar |
| geography | eastern europe / soviet sphere |
| domain | civic / government |
| formal-traits | geometric, asymmetric, graphic |
| color-logic | spot-color |
| typography-mode | geometric sans |
| texture | grainy, printed-register-shift |
| function | persuade |
| provenance | revival / homage |

## 1. Overview

Constructivism is a revolutionary UI style channeling the energy of early Soviet graphic design (1920s–1930s). It is defined by abstract geometry, diagonal dynamism, and industrial clarity. The emotional register is urgent, structural, and optimistic—every pixel feels declarative and functional. Compositions are asymmetrical, built on intersecting axes, with heavy geometric sans-serif all-caps typography and a stark red-black-white palette. Photomontage with hard cut-outs, coarse halftone dot patterns, and simulated print artifacts (misregistration, paper grain) injects a tactile poster aesthetic. The style rejects softness: no gradients, no shadows, no rounded corners. Density varies from dense layered photomontage to stark minimalism, but negative space is structural, not passive.

- **Emotional tone:** authoritative, confrontational, structurally optimistic
- **Era/lineage:** interwar constructivist design (1917–1930s)
- **Density:** moderate to high, variable
- **Core rendering philosophy:** flat spot-color fills, hard edges, no volumetric modeling, simulated print artifacts
- **What makes it recognizable:** diagonal axes, asymmetrical balance, all-caps sans, red/black/white palette, halftone photography, stencil cut-outs
- **What would break it:** centered layouts, serif or decorative type, soft gradients, rounded corners, drop shadows, lowercase in headings, photorealistic imagery

## 2. Constants

- **Light Mode:** yes — white background, black structural elements, red accents
- **Dark Mode:** variant — invert neutral and surface roles; black background, white text, red accents
- **Responsive:** yes — breakpoints at 768px and 375px; diagonal axes may simplify to horizontal/vertical; content stacks into single column at smallest breakpoint
- **States:** Default, Active, Disabled, Hover, Focus, Error
- **surface-simulation:** paper — simulates printed poster on uncoated paper stock with ink overprint and paper grain

## 2a — Interaction Model

hover-delta:        color-shift — border or text color shifts between red and black; no movement, no opacity change
active-delta:       opacity-dim — opacity shifts to 0.75 on press; no scale or shadow
focus-style:        color-border — border color shifts to primary red; no ring, no glow
transition-duration:150ms — brief snap between states; no long easing
transition-easing:  ease-out
exempt-animations:  none — no keyframe animations; all state changes follow the global duration

## 3. Colors

| Role | Hex | Tag | Description |
|------|------|------|-------------|
| primary | CONTESTED:§2.hex_primary | [unverified] | Providers gave: [#E31E24, #E53935, #CC2A1D, #E60012, #CC2200, #CC0000]; no cited source |
| on-primary | #FFFFFF | [inferred] | White text on primary fills |
| secondary | #000000 | [inferred] | Structural black — lines, borders, type |
| on-secondary | #FFFFFF | [inferred] | White on black surfaces |
| tertiary | CONTESTED:§2.hex_accent | [unverified] | Providers gave: [#1D3557, #1A237E, #1A3A5C, #1B3A5C]; no majority |
| neutral | #FFFFFF | [inferred] | White background (light) |
| on-surface | #000000 | [inferred] | Default text and icon color |
| surface-container | #F5F5F5 | [inferred] | Off-white card backgrounds (optional) |
| outline | #000000 | [inferred] | Borders, dividers, structural lines |
| error | CONTESTED:§2.hex_error | [unverified] | Some reuse primary red, some define separate dark red; no consensus |

**Dark mode swap table (only changed roles):**

| Light Role | Dark Equivalent |
|---|---|
| neutral (#FFFFFF) | #000000 |
| on-surface (#000000) | #FFFFFF |
| surface-container (#F5F5F5) | #1A1A1A |
| outline (#000000) | #FFFFFF |

## 4. Typography

**Primary typeface:** CONTESTED:§3.primary_typeface — providers gave [Futura / Futura (substitute: Paytone One) / Akshar]; none cited foundry
**Secondary typeface:** CONTESTED:§3.secondary_typeface — providers gave [Bank Gothic / Akshar / Oswald]; no foundry citation
**Google Fonts substitute:** CONTESTED:§3.google_fonts_substitute — providers gave [Akshar / Oswald / Paytone One / Fira Sans]; no authoritative source

| Role | font-family | font-size | font-weight | line-height | letter-spacing | text-transform | text-decoration |
|---|---|---|---|---|---|---|---|
| display | CONTESTED | text-6xl (4rem) | font-black (900) | leading-none (1) | tracking-tighter | uppercase | none |
| headline | CONTESTED | text-4xl (2.25rem) | font-extrabold (800) | leading-tight (1.25) | tracking-tight | uppercase | none |
| title | CONTESTED | text-2xl (1.5rem) | font-bold (700) | leading-snug (1.375) | tracking-wide | uppercase | none |
| body | CONTESTED | text-base (1rem) | font-semibold (600) | leading-normal (1.5) | tracking-normal | uppercase (preferred; lowercase allowed only for readability) | none |
| label | CONTESTED | text-sm (0.875rem) | font-bold (700) | leading-none (1) | tracking-wider | uppercase | none (underline optional on active) |

**Additional rules:**
- All type is uppercase (display, headline, title, label); body may mix case but must remain bold or semi-bold.
- Letter-spacing is always intentional — never default.
- Type may be rotated 45°, 90°, or run vertically (display and headline only).
- Monospace is not used; tabular figures not required.

## 5. Elevation

**Flat depth model** — no shadow hierarchy. All elements exist on a single plane. Depth is communicated through overlapping flat shapes, stencil cut-outs, and ink misregistration, never through shadows.

**Stacking context (for modals, overlays, photomontage):**

stacking:
  base-content:    z-0
  sticky-elements: z-20
  dropdowns:       z-30
  overlays:        z-40
  modals:          z-50
  top-layer:       z-[60] (propaganda splash, full-screen panels)

## 6. Spacing & Sizing

padding:
  component-internal:  p-4 (16px)
  section-internal:    p-6 (24px) to p-8 (32px)
  page-edge:           p-8 (32px) — poster-margin safety zone

margin:
  between-components:  gap-4 (16px)
  between-sections:    gap-8 (32px) to gap-12 (48px)

component-heights:
  sm:   h-10 (40px)
  md:   h-12 (48px) — default interactive target
  lg:   h-16 (64px) — primary action blocks

icon-size:       w-6 h-6 (24px)
avatar-size:     w-12 h-12 (48px) — only as photomontage fragment

## 7. Borders

border-radius:
  default:     rounded-none — all corners sharp
  card:        rounded-none
  button:      rounded-none
  input:       rounded-none
  chip/badge:  rounded-none

border-width:
  default:     border-2 (2px) — structural lines
  emphasis:    border-4 (4px) — active states, outer frames, primary borders

border-style:  border-solid — never dashed or dotted

border-image:  none — all borders are solid black or red

clip-path:     conditional — used for diagonal cut-offs on cards, buttons, and hero panels
               e.g., polygon(0 0, 100% 0, 85% 100%, 0 100%)

## 8. Opacity

disabled-state:     opacity-40 (gray out)
ghost/secondary:    opacity-70 (when elements need to recede)
overlay/scrim:      opacity-60 to opacity-80 (black or red overlay on photomontage)
hover-feedback:     not opacity-based — use color shift or border-width increase

**Browser chrome:**

selection:
  background:  rgba(primary-red, 0.3) — color inherits from primary
  color:       inherit

scrollbar:
  style:       styled
  width:       thin (6px)
  track:       #000000 (light) / #FFFFFF (dark)
  thumb:       primary red
  thumb-hover: white (light) / black (dark)

## 8.5. Visual Effects

### 8.5.0 — Physical Material Model

material-model:    paper — simulates printed poster on uncoated paper stock with ink overprint and paper grain

global-filter:     contrast(1.05) brightness(0.98) — simulates the slight absorption and flattening of ink on uncoated stock

global-overlay:    Paper grain via body::after pseudo-element:
                   SVG feTurbulence baseFrequency=0.65 numOctaves=3 fractalNoise
                   blend: overlay, opacity-12, pointer-events:none, position:fixed,
                   inset:0, z-index:9999

rendering-flags:
  font-smoothing:  antialiased
  image-rendering: auto
  text-rendering:  auto

### 8.5a — Color Manipulation

- **mix-blend-mode:** `multiply` on overlapping black and red shapes (simulates ink overprint producing dark brown). `screen` used for white reversal on photographic fragments.
- **Filter:** `grayscale(100%) contrast(120%)` applied to photographic elements to mimic high-contrast printing.

### 8.5d — Texture & Noise Simulation

**Paper grain (full-page canvas):**
technique:        SVG feTurbulence
parameters:       baseFrequency 0.65, numOctaves 2–3, type fractalNoise
surface:          full-page background; card surfaces
intensity:        moderate to subtle
blend:            overlay / multiply, opacity-10 to opacity-15
color:            monochrome noise
animation:        none
tailwind-approximation:  no native equivalent

**Halftone dot pattern (photomontage, red fills):**
technique:        CSS repeating radial-gradient (coarse dot screen, 60–85 lpi) or SVG filter
surface:          photographic images; optionally on large red fills
intensity:        moderate to strong
blend:            multiply, opacity-15 to opacity-30
color:            monochrome black dots
animation:        none
tailwind-approximation:  no native equivalent

**Misregistration (offset plates):**
technique:        CSS transform on duplicate elements (translate 1–2px) or text-shadow / box-shadow offset
surface:          display type, headline shapes, overlapping red/black geographic forms
intensity:        subtle — 1–2px offset
blend:            normal (hard edge)
color:            red offset on black (or cyan offset in some variants)
animation:        none
tailwind-approximation:  no native equivalent
## 9. Components

**Icon vocabulary:**
system:           custom glyphs — stars, gears, lightning bolts, fists, directional arrows, factory silhouettes
size:             w-6 h-6 (24px); optional w-8 h-8 for hero placements
color:            inherits currentColor (black or red)
treatment:        flat fill, no strokes, no glow
restrictions:     no rounded icons, no emoji, no photographic icons

**Image & media treatment (photomontage):**
aspect-ratio:     free — crops aggressive, bleed off frame edges
object-fit:       object-cover
filter:           grayscale(100%) contrast(120%) — stark monochrome
overlay:          halftone dot pattern (see 8.5d) + optional red multiply scrim
border:           border-2 border-black (hard cut-out)
dark-mode:        invert brightness or swap border to white

**Buttons:**

| Type | Fill | Text | Border | Hover | Active | Disabled |
|---|---|---|---|---|---|---|
| Primary | primary red | white, bold, uppercase | border-2 border-black | lighten red or shift to vermilion | invert fill and text (black fill, white or red text) | opacity-40 |
| Secondary | transparent or black | black or white | border-2 border-black | fill black, text white | border-width increase to border-4 | opacity-40 |
| Destructive | dark red | white | border-2 border-darkred | darker red | black fill, red text | opacity-40 |

- **Shape:** rounded-none, square corners.
- **States:** instantaneous (0ms) color shifts; no scale transforms.

**Cards / Panels:**
- Fill: white (light) or black (dark), with paper grain texture.
- Border: border-2 to border-4 border-black (thick).
- Rounding: rounded-none.
- Elevation: none.
- Optional: clip-path diagonal cut; internal content offset to one corner.
- Image: photomontage with halftone overlay, hard edges.

**Navigation:**
- Horizontal bar or vertical rail — never centered.
- Active state: red fill with white text, or black fill with red text.
- Separator: vertical or diagonal thick black line.
- Icons: filled glyphs.

**Inputs / Forms:**
- Border: border-2 border-black (full rectangle or bottom-only).
- Rounding: rounded-none.
- Fill: transparent or white (light) / black (dark).
- Label: all caps, bold, above input or rotated vertical.
- Focus: border-4 border-red, no shadow.
- Placeholder: all caps, gray (opacity-50).

**Style-native primitives:**
1. **Stencil cut-out** — a shape with a transparent hole revealing the layer beneath; used for badges, icons, decorative accents.
2. **Diagonal divider** — a thick black line (h-2 to h-4) at 30°–45° span, separating sections.
3. **Photomontage panel** — a card containing a grayscale photo fragment with halftone overlay and hard cut-out edges; often bleeds off screen.
4. **Structural scaffolding** — faint construction lines (1px, cyan or graphite) crossing the layout diagonally or horizontally; non-interactive overlay.

**Data Display Components:**

metric-cell:
  Background: bg-white (light) / bg-black (dark) with paper-grain texture.
  Border: border-2 border-black.
  Label: all-caps bold geometric sans, text-sm, black (light) / white (dark).
  Value: all-caps bold geometric sans, text-3xl, primary-red (light) / white (dark).
  Delta: all-caps bold geometric sans, text-sm; delta-up in primary-red, delta-down in dark red or black.
  No glow, no drop-shadow — flat fills only.

signal-bar:
  Track: border-2 border-black, bg-white (light) / bg-black (dark), h-4.
  Fill: bg-primary-red (light) / bg-white (dark), flat block no rounded ends.
  Border: border-2 border-black on the fill bar itself.

status-cell:
  Border: border-2 border-black.
  Fill: bg-white (light) / bg-black (dark) with paper-grain texture.
  ok:   text-primary-red, border-2 border-black, bg-white or black depending on mode.
  warn: text-dark-red, border-2 border-black, bg-white or black.
  err:  bg-black with text-white (light) / bg-white with text-black (dark) + border-4 border-black.
  No rounded corners, no icons.

data-table-row:
  Alternating: odd rows bg-white / even rows bg-black (light mode); odd rows bg-black / even rows bg-white (dark mode).
  Cell border: border-b-2 border-black.
  Label: all-caps bold geometric sans, text-xs to text-sm, black or white depending on row fill.
  Value: all-caps bold geometric sans, text-sm, primary-red (or inherit currentColor for black rows with white text).

chart-surface:
  Background: bg-white (light) / bg-black (dark) with paper-grain texture.
  Grid lines: 1px solid black, thin construction-line style, at 25/50/75/100%.
  Axis labels: all-caps bold geometric sans, text-xs, black (light) / white (dark).
  Line: primary-red, stroke-width 2px, no drop-shadow.
  Dots: primary-red, r=3px, solid fill.
  Plot area: no fill — transparent with grid lines visible through it.

## 10. Layout

- **Spacing cadence:** 8px base unit; generous negative space between sections (gap-8 to gap-12), tight internal packing within dense clusters (gap-2 to gap-4).
- **Grid tendency:** No conventional column grid. Compositions are built on intersecting diagonal axes (30°, 45°, -45°). Elements snap to these axes, not to horizontal/vertical coordinates.
- **Density:** Variable — from sparse (single geometric shape + type) to dense (5–6 overlapping layers of shapes, text, photomontage).
- **Section separation:** Thick black horizontal or diagonal lines, or abrupt background color shifts (white ↔ black). Never whitespace alone.
- **Alignment philosophy:** Off-center is mandatory. Visual weight clusters in one corner, counterbalanced by a large shape (color block, photograph, title) in the opposite quadrant. Elements bleed aggressively at frame edges.
- **Breakpoints:**
  - Above 768px: full diagonal compositions, multi-layer photomontage, 45° rotated text.
  - 768px: two-column asymmetric layout; diagonals may reduce to 30°.
  - 375px: single-column stack; diagonals become vertical/horizontal; navigation collapses to hamburger with diagonal cut-out menu.

- **Motion:**

motion:
  transition-duration:        0ms (instant for states) or 150ms–300ms for entrances
  transition-timing-function: linear (no easing)
  transition-property:        opacity, background-color, color, transform
  transition-delay:           none

  animation:
    type-march-in:    characters arrive from random diagonals over 150–300ms linear, staggered 50ms, trigger: on-load / on-scroll-enter
    panel-slide:      full element slides in from off-screen at 30°–45° over 300ms linear, trigger: on-scroll-enter
    staccato-cut:     opacity 0→1 in 0ms (hard cut), or background beat (scale pulse) at 120–140 BPM steps(1), looping optional

  transform-at-rest:
    all elements rest at transform: none (except type deliberately rotated at 45° or 90°)

  transform-on-interact:
    hover: no scale or translate — color or border-width change only
    active: translate(2px, 2px) diagonal nudge, 0ms, for mechanical feedback

  transform-style:       flat
  transform-perspective: none
  backface-visibility:   hidden

## 11. Design System Notes

### 11a. Use Constraints

**Appropriate for:** Political campaign platforms, activist toolkits, labor union portals, industrial monitoring interfaces, cultural exhibitions (Soviet/constructivist), editorial pages with a revolutionary voice, protest coordination tools, event posters, and any context requiring authority, urgency, and structural clarity.

**Wrong for:** Consumer e-commerce (trust-building), healthcare/wellness (softness required), luxury brands (ornament, elegance), children's interfaces (playful, rounded), personal finance dashboards (reassurance), social media feeds (familiarity). The style commands and confronts; it does not comfort.

### 11b. Prompt Phrases

1. "Red and black flat shapes, hard edges, no rounding."
2. "All-caps bold geometric sans, stacked or rotated at 45°."
3. "Asymmetric layout with diagonal axes and edge-bleeding elements."
4. "Photomontage with grayscale, high contrast, halftone dots."
5. "Single thick black border around the whole composition."
6. "Geometric icons: star, gear, lightning bolt, arrow."
7. "Stencil cut-out windows reveal content beneath."
8. "Apply coarse halftone or paper grain to photographic elements."

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual
description, then the incorrect visual description. Minimum 4 rules, maximum 8.

rule: Diagonal axes are the primary compositional force — no horizontal/vertical grid layout.
do:   Arrange elements along intersecting 30° and 45° axes; text rotated, shapes at angle, layout asymmetrical.
avoid:Horizontal/vertical column grid, centered layouts, symmetrical balance, rounded corners,
      gradients, or drop shadows.

rule: The palette is restricted to red, black, and white — no additional accent colors.
do:   Use primary red (#CC0000 or similar), black (#000000), and white (#FFFFFF) as the full color system.
avoid:More than one accent color; introducing green, yellow, purple, or other hues breaks the
      graphic discipline.

rule: All display, headline, title, and label type is set in uppercase — no lowercase or mixed case.
do:   Use all-caps bold geometric sans (Futura Bold, Kabel, or similar) for all heading and label text.
avoid:Serif, script, decorative, or lowercase typefaces. Lowercase reads as editorial, not revolutionary.

rule: Photographs receive a halftone dot pattern overlay — no soft focus or photorealistic rendering.
do:   Apply coarse halftone dot pattern at opacity-15 to all photographic elements;
      grayscale(100%) contrast(120%) filter.
avoid:Soft-focus, photorealistic, gradient-mapped, or unmodified photographic imagery.

rule: All fills are flat, edges are hard — no volumetric or dimensional effects.
do:   Use flat color fills with no gradient, no drop-shadow, no bevel, no emboss on any surface.
avoid:Volumetric effects — box-shadow, text-shadow, gradient fills, bevels, emboss, inner shadows.

rule: Elements bleed aggressively off the canvas edges — no safe margins or centered compositions.
do:   Allow photomontage panels, text blocks, and shapes to extend beyond the frame edge; crop aggressively.
avoid:Centered layouts, symmetrical balance, padded safe margins, or full-element containment within bounds.

rule: Borders are thick solid lines (border-2 to border-4) — no dashed, dotted, or thin borders.
do:   Use border-2 to border-4 border-black for all panel, card, and input boundaries.
avoid:Dashed borders, dotted borders, hairline borders, or removing borders entirely.

rule: Simulate print artifacts (misregistration, grain) — no smooth, polished digital surfaces.
do:   Apply paper-grain texture, halftone patterns, and intentional misregistration to reinforce print origin.
avoid:Smooth, polished digital surfaces, anti-aliased edges, or clean photorealistic rendering.

### 11d. Variation Bounds

- **Red-dominant vs black-dominant:** swap main accent — red covers 60% of surfaces vs red limited to 15%.
- **Highly geometric vs photo-fragment:** shift proportion of abstract shapes to photographic fragments (20% to 70%).
- **Dense layering vs stark minimalism:** overlap 1–2 layers (stark) vs 5–6 layers (dense).
- **Circular vs rectilinear:** circle-heavy compositions (counterpoints) vs purely angular (triangles, rectangles).

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts.
Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
A single composition on a white background (or black in dark mode) with paper-grain texture.
A thick black border (border-4) frames the entire canvas. One solid red geometric rectangle
occupies the upper-left quadrant, bleeding off the top and left edges. One all-caps bold geometric
sans headline in black, rotated at -45°, positioned in the lower-right quadrant — its angle
counterbalancing the red rectangle. A single diagonal black line (h-3, 30° angle) spans from
upper-right to lower-left behind the text. One stencil cut-out circle in the upper-right corner
reveals the paper-grain layer beneath. No photomontage, no dense layering — spare, geometric,
asymmetrical, confrontational.

### 11e.ii — Maximum Expressiveness
Five overlapping layers arranged on intersecting diagonal axes. Background: white (or black)
with paper-grain texture and faint structural scaffolding lines (1px cyan or graphite, 45° diagonals).
A large red geometric block fills the upper-left to center area, bleeding off the top and left edges.
A photomontage panel (grayscale, halftone overlay, border-2 border-black) occupies the lower-right
quadrant, rotated at 30°, bleeding off the bottom and right edges. Two text blocks: one all-caps
headline in black, text-2xl, rotated -45° at the upper-right; one all-caps subhead in primary-red,
text-base, horizontal at the lower-left, partially overlapping the photomontage. A thick diagonal
divider (border-4 black, 30° angle) separates the red block from the photomontage panel.
A stencil cut-out circle near center reveals the paper-grain layer beneath. A secondary black
geometric triangle overlaps the red block at the left edge. Type-march-in animation: characters
of the headline arrive from random diagonals over 200ms linear, staggered 50ms. Panel-slide
animation: the photomontage panel slides in from off-screen at 30° over 300ms linear. Hard cuts
(0ms) for background fills. No easing applied to any animation — all motion is linear.

### 11e.iii — Data Context
How the system's visual language adapts when the content is numeric, tabular, or status-driven.
Each data element becomes a geometric block or bar. Background: white (or black) with paper-grain
texture. A data header row: black fill with white all-caps bold geometric sans text, border-b-2
border-black. Data rows alternate white/black fill (light mode) or black/white (dark mode) for
maximum contrast — no mid-tones. Metric cells: primary-red value in bold all-caps geometric sans,
text-2xl, horizontal; delta indicators in all-caps geometric sans text-sm — delta-up in primary-red,
delta-down in dark red or black. Status cells: ok = red fill with white text (or white fill with
red text), warn = dark red border with text in matching color, err = inverted — black fill with
white or red text. Signal bars: solid red fill block with black border, no rounded ends, no glow.
Chart surface: white (or black) fill with 1px black construction-line grid at 25/50/75/100% heights.
Line: 2px solid primary-red, no drop-shadow, no glow. Data points: 3px solid red dots — flat, no halo.
The system's thick border (border-2 border-black) frames the entire data container. Paper-grain
texture persists on all surfaces. No whitespace cushion — data elements pack tightly with
gap-2 to gap-4. No gradient, no drop-shadow, no rounded corners on any data element.

### 11f. Sources

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** **Russian Constructivism** was an avant‑garde movement active from approximately 1913 to 1935, primarily in Soviet Russia. Spearheaded by figures such as Vladimir Tatlin, Alexander Rodchenko, and El Lissitzky, it rejected autonomous art in favour of practical tools for building a socialist society. Its visual language employs geometric abstraction and a restricted palette, notably red, black, and white.

**Verified imagery sources.** 11 URLs verified against institutional servers, distributed across:
- Wikimedia Foundation — 9 URL(s)
- Victoria and Albert Museum, London — 1 URL(s)
- Getty Research Institute, Los Angeles — 1 URL(s)

Key references include the Museum of Modern Art’s record for Alexander Rodchenko’s poster “Books (Please)!”, accessible at https://www.moma.org/collection/works/7915, and the Victoria and Albert Museum’s entry for a 1924 propaganda poster at https://collections.vam.ac.uk/item/O1390456.

**Named typefaces.** The typography of this style is attested as:
- Erbar-Grotesk (for Ludwig & Mayer 1926 — attestation: attested) — rendered here in Jost as the closest open substitute
- hand-drawn geometric sans-serif lettering ( — attestation: attested) — rendered here as bespoke imagery — no web-font substitute
- Akzidenz-Grotesk ( — attestation: conventional) — rendered here in Archivo as the closest open substitute

**Honest gaps.** No verified hex, Pantone, or CMYK values exist for any constructivist colour; red, blue, and yellow hex approximations are contested among providers. Colour specifications remain unresolved due to the lack of spectrophotometric measurement of surviving prints. A dedicated study using spectrophotometry on original prints from the 1920s would resolve these colour specifications.
