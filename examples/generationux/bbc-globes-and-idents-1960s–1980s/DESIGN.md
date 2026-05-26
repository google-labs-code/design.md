---
version: alpha
name: "BBC Globes & Idents (1960s–1980s)"
description: "A nostalgic, authoritative broadcast style built around spinning physical globes, solid saturated backgrounds, and bold all‑caps typography. The system simulates analog video with film grain, scanlines, and halation."
colors:
  primary: "#003366"
  on-primary: "#FFFFFF"
  secondary: "#CC0000"
  on-secondary: "#FFFFFF"
  tertiary: "#DDCC88"
  on-tertiary: "#003366"
  neutral: "#000000"
  on-surface: "#FFFFFF"
  on-surface-variant: "#FFFFCC"
  outline: "#FFFFFF"
  error: "#CC0000"
  on-error: "#FFFFFF"
typography:
  display:
    fontFamily: "sans-serif"
    fontSize: "48px"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0.05em"
    textTransform: "uppercase"
  headline:
    fontFamily: "sans-serif"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.05em"
    textTransform: "uppercase"
  title:
    fontFamily: "sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.05em"
    textTransform: "uppercase"
  body:
    fontFamily: "sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.025em"
  label:
    fontFamily: "sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.025em"
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
  page-edge: "48px"
  gap-component: "32px"
  gap-section: "64px"
  height-sm: "32px"
  height-md: "48px"
  height-lg: "64px"
  icon: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.button}"
    padding: "12px 32px"
    height: "48px"
  button-secondary:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    rounded: "{rounded.button}"
    padding: "12px 32px"
    height: "48px"
  card:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.card}"
    padding: "24px"
  input:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.input}"
    padding: "16px"
    height: "48px"
provenance:
  coverage_status: "minimal"
  identity_description: "The slug `bbc-globes-and-idents-1960s–1980s` refers to the on-screen continuity identification devices (idents) used by the British Broadcasting Corporation (BBC) for its television channels BBC1 and BBC2 between the early 1960s and the late 1980s, most notably the rotating globes that served as channel brandmarks. These idents evolved from filmed mechanical models (1963–1985) to early computer-ge"
  manual_enrichment_required: true
  imagery_count: 2
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "www.youtube.com"
      count: 1
    - host: "collections.vam.ac.uk"
      count: 1
  imagery_urls:
    - url: "https://www.youtube.com/watch?v=z_Dv3RMgN1g"
      host: "www.youtube.com"
      institution: null
      confidence_original: low
    - url: "https://collections.vam.ac.uk/item/O135668/bbc-poster/"
      host: "collections.vam.ac.uk"
      institution: "Victoria and Albert Museum, London"
      confidence_original: low
  typefaces_attested:
    - name: "Custom BBC lettering (BBC Blocks and channel numerals)"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "attested"
  flags:
    - "few_usable_urls"
    - "2_robots_disallowed_urls"
  honest_gaps:
    - "1. **Exact colour values:** No verified CIE, RGB, or Pantone values for any ident colour. The \"teal\" of the globe ranges from #3F8E9A to #5F9EA0 in secondary estimates. A verified reference point (e.g., a frame from a known film master) would be required to anchor colours."
---
# Design System: BBC Globes & Idents (1960s–1980s)

## 0. Taxonomy & Identity

entity-type:        interface / system / environment
artefact-family:    broadcast / overlay / lower third
technique:          digital raster / simulated analog
movement-lineage:   vernacular commercial style
era:                postwar
geography:          UK
domain:             broadcast
formal-traits:      axial, geometric, volumetric, flat
color-logic:        saturated
typography-mode:    grotesque (further specification contested)
texture:            grainy, halated, scan-damaged
function:           persuade / inform
provenance:         revival / homage

## 1. Overview

This design system inhabits the confident, analog warmth of BBC broadcast heritage from the 1960s through the 1980s. It is nostalgic, authoritative, and slightly weathered — a televisual identity built around spinning physical globes, solid saturated backgrounds, and bold all‑caps typography. The emotional tone is earnest and self‑assured.

- **Era/lineage:** Post‑war British broadcast design, referencing physical globe models and early wireframe computer graphics (1980s Mantis)
- **Density level:** Low — each frame is sparse, with only the globe, a background, and text
- **Core rendering philosophy:** Simulated analog video — film grain, scanlines, halation, slight colour misregistration, tape artifacts
- **What makes it recognizable:** A slowly rotating globe (physical or wireframe) centered on a solid saturated blue or red background, with centred all‑caps text in a black horizontal band in the lower third
- **What would break the style:** Modern UI elements, gradients, rounded corners, overlapping globe and text, drop shadows, smooth digital easing, pastels or neons

## 2. Constants

- **Light Mode:** Not applicable (the style is inherently dark)
- **Dark Mode:** Primary (saturated dark blue, red, or black backgrounds; white or pale yellow text)
- **Responsive:** Yes (maintain 4:3 aspect ratio with generous overscan margins; at 375px scale globe and text proportionally; at 768px maintain proportions)
- **States:** Default, Active, Disabled (Hover uses analog glow not opacity change; Focus is not styled)
- **surface-simulation:** broadcast — Simulates television broadcast chain with analog artifacts: film grain, scanlines, vignette, CRT color response, and tape imperfections; the entire page canvas is treated as a television screen.

## 2a — Interaction Model

hover-delta:        none — broadcast idents and overlays have no interactive hover states; all elements are either static or animated continuously.
active-delta:       none — no press/active state; the system is not designed for click interaction.
focus-style:        none — keyboard focus is not styled; the content is primarily passive viewing.
transition-duration:0ms — all state transitions are instantaneous; no easing or fade-in on element appearance.
transition-easing:  none
exempt-animations:  globe-rotation, scanline-flicker — these keyframe animations must continue even when transition-duration is 0ms.

## 3. Colors

The palette is restricted to broadcast‑safe primaries. All hex values are [unverified].

- `primary (#003366)` [unverified] — Dark Blue: primary background for idents, navigation, and key surfaces.
- `on-primary (#FFFFFF)` — White: text on primary backgrounds, primary text colour.
- `secondary (#CC0000)` [unverified] — Red: accent colour, logo highlights, emphasis, error state.
- `on-secondary (#FFFFFF)` — White: text on red.
- `tertiary (#DDCC88)` [unverified] — Gold: metallic globe highlights, ornamental accents, decorative strokes.
- `on-tertiary (#003366)` — Dark Blue: text on tertiary backgrounds (if used).
- `neutral (#000000)` — Black: horizontal bands, text container, overscan margin, fade to black.
- `on-surface (#FFFFFF)` — White: text on black or dark surfaces.
- `on-surface-variant (#FFFFCC)` — Pale Yellow: secondary text, captions, warm highlights.
- `outline (#FFFFFF)` — White: border lines, longitude/latitude lines, focus rings.
- `error (#CC0000)` — Red (same as secondary; reserved for destructive actions).
- `on-error (#FFFFFF)` — White.

**Color behaviour notes:**
- Whites are warm (3200K) or cool (5600K) depending on film vs electronic simulation – never pure neutral.
- Apply deliberate colour banding (posterisation) to mimic low‑bandwidth 625‑line PAL video.
- Avoid pastels and neons; every colour should feel like it was dialled in on a video mixer.

## 4. Typography

**Primary typeface:** CONTESTED:§3.primary_typeface — providers gave Gill Sans, Akzidenz-Grotesk, Helvetica Condensed, Univers; none cited foundry or year; re-stack required.

**Secondary typeface:** CONTESTED:§3.secondary_typeface — providers gave OCR‑B, same family light, Helvetica, Gill Sans light; no consensus; re-stack required.

**Google Fonts substitute:** CONTESTED:§3.google_fonts_substitute — providers gave Montserrat, Jost, Space Grotesk, none, Oswald, Public Sans; no majority; re-stack required.

Until re‑stack, implementers should use a generic `sans-serif` fallback and apply the following style properties (which are agreed):

- **All identification text:** uppercase, tightly tracked (tracking-wide or tracking-wider), centred.
- **Secondary text ("Television", "World Service"):** may appear in lower case italic, lighter weight.
- **No skew, rotation, or baseline shift on any type.**

## 5. Elevation

Flat depth model — no default shadow on UI elements. The globe may carry a soft drop shadow to simulate studio key light.

- `shadow-none`: all buttons, cards, text bands, and backgrounds.
- `globe-shadow`: `drop-shadow(0 4px 8px rgba(0,0,0,0.3))` — applied only to the globe hero element.
- Stacking context: base z-0, globe z-10, text band z-20, overlay effects z-30.

## 6. Spacing & Sizing

padding:
  component-internal:  p-4 (16px)
  section-internal:    p-8 (32px)
  page-edge:           p-12 (48px) – simulates 10% overscan

margin:
  between-components:  gap-8 (32px)
  between-sections:    gap-16 (64px)

component-heights:
  sm:   h-8 (32px)
  md:   h-12 (48px) – default interactive target
  lg:   h-16 (64px)

icon-size:       w-8 h-8 (32px) – used sparingly; only globe-related glyphs
avatar-size:     w-16 h-16 – for circular globe thumbnails if needed

## 7. Borders

border-radius:
  default:     rounded-none
  card:        rounded-none
  button:      rounded-none
  input:       rounded-none
  chip/badge:  rounded-none

border-width:
  default:     border (1px) – for outline, latitude/longitude lines, band edges
  emphasis:    border-2 (2px) – for focus rings, active state borders

border-style:  border-solid (dashed or dotted only for longitude lines on the globe)

border-image:  none

clip-path:     none (the globe itself is a sphere rendered as image or canvas; no clipped containers)

## 8. Opacity

disabled-state:     opacity-50
ghost/secondary:    opacity-70
overlay/scrim:      opacity-80 (fade-to-black transitions)
hover-feedback:     filter: brightness(1.15) — not opacity change

**Browser chrome (dark immersive environment):**
selection:
  background:  rgba(0,51,102,0.3)   (primary at 30%)
  color:       inherit

scrollbar:
  style:       styled / hidden
  width:       thin (6px)
  track:       #000000
  thumb:       #003366
  thumb-hover: #CC0000

## 8.5. Visual Effects

All surfaces carry a compositing stack of analog video artifacts.

**Compositing stack (bottom → top):**
`base fill → film grain (overlay, opacity 12–15%) → scanlines (multiply/overlay, opacity 5–10%) → vignette (normal/multiply, opacity 40–60%) → content (globe, text) → halation (drop-shadow/bloom)`

### 8.5.0 — Physical Material Model

material-model:    broadcast — matches surface-simulation value from §2.

global-filter:     contrast(1.15) saturate(0.9) brightness(1.05) — applied to all surfaces to simulate CRT colour response. (Optional hue-rotate 1° with saturate 1.1 for colour fringing effect.)

global-overlay:    Full‑screen composite overlay: film grain (SVG feTurbulence, overlay blend, opacity 12‑15%) + scanlines (repeating‑linear‑gradient, multiply/overlay, opacity 5‑10%) + vignette (radial‑gradient, normal/multiply, opacity 40‑60%). Overlay elements stacked in order: grain first, then scanlines, then vignette.

rendering-flags:
  font-smoothing:  antialiased — text is not pixel‑based; CRT display uses antialiased vector text.
  image-rendering: auto — no pixelation or nearest‑neighbour; broadcast images are continuous‑tone.
  text-rendering:  auto — readability preferred over speed; CRT bloom is applied separately.

### 8.5a — Color Manipulation

filter:
  contrast(1.15) saturate(0.9) brightness(1.05) — applied to all surfaces to simulate CRT colour response.
  (Optional) hue-rotate 1° with saturate 1.1 for colour fringing effect.
mix-blend-mode: multiply for grain, overlay for scanlines, screen for halation.

No grayscale or sepia.

### 8.5b — Surface Layering (Backdrop Filters)

Not applicable — no frosted glass or translucent layering.

### 8.5c — Gradients & Glow

filter: drop-shadow(0 0 6px rgba(255,255,255,0.4)) — analog CRT bloom around bright text and logo.
text-shadow: 0 0 0.15em rgba(255,255,255,0.6) — soft halation on white text.

No animated gradients. Backgrounds are flat saturated colour fields.

### 8.5d — Texture & Noise Simulation

**Film Grain:**
technique:    SVG feTurbulence (fractalNoise)
parameters:   baseFrequency="0.65", numOctaves="3"
surface:      full-page canvas
intensity:    moderate (opacity 12–15%)
blend:        mix-blend-mode: overlay
color:        monochrome
animation:    none

**Scanlines:**
technique:    repeating-linear-gradient (horizontal)
parameters:   transparent 0px, transparent 2px, rgba(0,0,0,0.03–0.05) 2px, rgba(0,0,0,0.03–0.05) 4px
surface:      full screen overlay
intensity:    barely perceptible
blend:        mix-blend-mode: multiply or overlay
color:        black
animation:    none

**Vignette:**
technique:    radial-gradient
parameters:   from transparent at centre to rgba(0,0,0,0.4–0.6) at edges
surface:      full screen overlay
intensity:    moderate
blend:        normal (or multiply)

**Halation (CRT bloom):**
technique:    CSS filter drop-shadow + text-shadow (see 8.5c)
surface:      text, logo, globe highlights

**Chromatic fringing (optional):**
technique:    CSS text-shadow with offset red/blue channels
parameters:   rgba(255,0,0,0.08) 1px 0, rgba(0,0,255,0.08) -1px 0
surface:      high-contrast edges (text, globe ring)
intensity:    barely perceptible
## 9. Components

### Icon Vocabulary

system:       None (the globe is the only icon; other broadcast symbols (clock, signal rings) are used sparingly)
size:         w-8 h-8 (small indicators), w-16 h-16 (globe thumbnails)
color:        on-primary (white) or tertiary (gold)
treatment:    flat or with halation glow; no built‑in shadows
restrictions: no stars, stripes, abstract shapes; globe-related imagery only

### Image / Media Treatment

aspect-ratio: aspect-[4/3] (broadcast viewport), aspect-square for globe
object-fit:   object-cover (with slight overscan crop to mimic CRT framing)
filter:       contrast(1.15) saturate(0.9) brightness(1.05) + optional colour banding
overlay:      composited with grain, scanlines, vignette
border:       none (optional thin white outline for clarity)
dark-mode:    not applicable (dark is default)

### Buttons

Primary button:
  background:   bg-primary (#003366)
  text:         text-on-primary uppercase tracking-wide font-bold
  border:       border-0
  radius:       rounded-none
  shadow:       none
  height:       h-12
  padding:      px-8 py-3
  hover:        filter brightness(1.15)
  active:       bg-secondary (#CC0000) or brightness(0.9)
  disabled:     opacity-50

Secondary button:
  background:   bg-black
  text:         text-primary uppercase tracking-wide font-bold
  border:       border-2 border-primary
  radius:       rounded-none
  shadow:       none
  height:       h-12
  padding:      px-8 py-3
  hover:        bg-primary text-on-primary
  active:       bg-secondary border-secondary
  disabled:     opacity-50

### Cards / Panels

Card:
  background:   bg-primary or bg-black (depending on role)
  text:         text-on-surface or text-primary
  border:       border-0 (or border border-white for outline variant)
  radius:       rounded-none
  shadow:       none
  padding:      p-6
  internal gap: gap-4
  image:        optional globe square media, object-cover
  hover:        no effect (except color change for interactive cards: bg-secondary)

### Navigation

Nav bar:
  background:   bg-black
  text:         text-primary uppercase tracking-wide font-bold
  items:        horizontally spaced (gap-8), centered
  active item:  text-white border-b-2 border-secondary
  hover:        text-white
  height:       h-16

### Inputs / Forms

Input field:
  background:   bg-black
  text:         text-on-surface
  border:       border border-white
  radius:       rounded-none
  height:       h-12
  padding:      px-4
  focus:        border-secondary, shadow-none, outline-none
  placeholder:  text-gray-500
  label:        uppercase or lowercase, text-sm tracking-wide

### Style-Native Primitives

**Globe Hero:**
- Centred, occupies 40–60% of viewport height
- Rendered as sphere with simplified continents (Europe, Africa, Americas) and latitude/longitude grid lines
- Surface: gold (#DDCC88) with metallic reflection simulation (light from 10 o'clock), or wireframe lines on black
- Slow linear rotation: 8–15 seconds per revolution
- Optional visible gimbal or support arm
- Never overlaps text

**Text Band:**
- Horizontal black band (full width), positioned at bottom (lower third)
- Background: neutral (#000000) or surface (#003366)
- Contains centred display/headline text in white
- Optional secondary text in pale yellow italic
- Fades in 500ms after globe rotation

**BBC Badge:**
- "BBC" in blocky condensed letters, white, uppercase, tight tracking
- Usually placed inside text band, centred

**Clock Face (optional):**
- Circular outline, serif or sans-serif numerals, white
- Second hand with analog stutter (steps(60) animation)

**Radiation Ring (optional):**
- Dashed circle outline, gold, pulsing scale animation

## 10. Layout

- **Spacing cadence:** generous — at least 10% viewport overscan margin on each side
- **Grid tendency:** single-column, centered. No multi-column layout.
- **Density:** low — only one focal element (globe) plus text band
- **Section separation:** horizontal black bands, hard wipes or fades through black
- **Alignment philosophy:** strictly centered horizontally; text baseline aligns with globe equator or just below
- **Breakpoint behavior:**
  - 375px: globe scales to 40% viewport height; text reduces to headline size; maintain 4:3 container
  - 768px: globe at 50–60% viewport height; text at display size; overscan margins at 10%
  - 1024px+: same as 768px; no extra UI elements
- **Motion block:**

motion:
  transition-duration:        500ms (fade-in/out), 300ms (button brightness)
  transition-timing-function: linear (all mechanical motion)
  transition-property:        opacity, filter, transform (rotation)
  transition-delay:           none

  animation:
    globe-rotation:   transform rotate(0→360deg) over 12s linear, trigger: on-load, infinite
    text-fade-in:     opacity 0→1 over 500ms linear, trigger: after first rotation
    crt-collapse:     scaleY 1→0 over 200ms linear, trigger: on-exit (modal dismissal, ident end)
    clock-second:     steps(60) over 60s, trigger: on-load

  transform-at-rest:  all elements at transform: none
  transform-on-interact: button hover scale(1.02) optional
  transform-style:    flat
  backface-visibility: hidden (for globe rotation)

## 11. Design System Notes

### 11a. Use Constraints

**Appropriate for:** broadcast idents, title sequences, retro‑themed interfaces, nostalgic archival experiences, motion graphics celebrating mid‑century television design, static posters evoking lost BBC clips.

**Wrong for:** modern data‑heavy dashboards, fast‑paced gaming UIs, minimal flat corporate presentations, applications requiring high readability of dense information, e-commerce product pages.

### 11b. Prompt Phrases

1. “Spinning globe on a solid saturated background with film grain and scanlines”
2. “Bold centered all‑caps title in a black band after a slow globe rotation”
3. “Analog bloom on the globe, soft glow around white text”
4. “Circular wipe transition or fade to black with CRT collapse”
5. “Mechanical wobble and tape degradation artifacts”
6. “Use a bold condensed grotesque sans, all‑caps, tightly tracked” (typeface contested)
7. “Solid colour backgrounds only, no gradients”
8. “No overlapping elements — globe and text in separate zones”

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description. Minimum 4 rules, maximum 8.

rule: Backgrounds must be solid saturated colours — no gradients, neons, pastels, or desaturated tones.
do:   Use solid saturated backgrounds in primary blue (#003366) or secondary red (#CC0000). No gradient or texture in the background itself.
avoid:Gradient backgrounds, pastels, neons, or desaturated colours. The background must be a single flat saturated colour.

rule: The globe is the sole iconographic element — no modern UI icons or symbols.
do:   Centre the globe as the only icon; use no other icons, stars, arrows, or abstract shapes anywhere.
avoid:Including modern UI icons such as stars, arrows, or other symbols. Only globe-related imagery is permitted.

rule: Text must be placed in the lower third, inside a black band, all caps white — with no drop shadows.
do:   Keep text in the lower third within a full‑width black band, all caps, white, tight tracking.
avoid:Applying drop shadows to text, placing text over the globe, or using any text effect that softens edges.

rule: All motion must be linear/mechanical — no digital smooth easing or spring curves.
do:   Make all motion linear or mechanical (no ease‑in/out). Use steps(60) for analog stutter effects.
avoid:Using digital smooth easing (springs, cubic‑bezier with overshoot). Transitions must not feel organic or bouncy.

rule: The globe must be rendered as a physical model or wireframe — flat illustrations are not allowed.
do:   Use a physical globe model with metallic reflections or a wireframe with longitude/latitude lines.
avoid:Representing the globe as a flat logo, a simple circle, or a vector graphic without depth or grid lines.

rule: Surface effects must include film grain, scanlines, and halation — no clean digital look.
do:   Add film grain, scanlines, and halation (analog bloom) over the entire image.
avoid:A clean digital surface without any analog artifacts or bloom.

rule: No rounded corners on any element — all corners remain sharp.
do:   Use rounded-none consistently for all boxes, panels, buttons, and borders.
avoid:Applying border-radius to any element, including buttons, cards, or panels.

rule: Camera must remain static — no moves, parallax, or zoom effects.
do:   Use a static camera throughout; the only motion is the globe rotation and text fade.
avoid:Camera moves, parallax effects, or zoom (in or out). The camera position never changes.

### 11d. Variation Bounds

- **Authentic vs remix:** strict period‑accurate ident (physical globe, 1960s colour) vs contemporary reinterpretation (same structural rules, digital simulation)
- **Physical model vs digital wireframe:** painted metal globe with brush strokes vs wireframe vector globe (1980s Mantis style)
- **Clean vs gritty:** pristine studio lighting vs heavy tape artifacts, dust, and worn paint
- **Big globe vs cropped globe:** full scenic globe (60% frame) vs extreme close‑up showing only partial curvature
- **Plain logo vs stacked text:** “BBC” in a single line vs “BBC tv” stacked vertically
- **Colour vs black‑and‑white:** full 1960s colour palette vs monochrome with heavy contrast

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts. Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
A single full-frame solid saturated background (primary blue #003366 or secondary red #CC0000) with film grain and scanlines at 75% multiply opacity, plus halation glow overlaid at 10% white. Centre of frame: the BBC globe, rendered as a physical metallic sphere or wireframe, covering approximately 50% of viewport height, rotating slowly (12 seconds per revolution). Below, a full‑width black band occupying the lower third (30% of height) contains the text “BBC” in white, all‑caps, condensed grotesque, tight tracking, 48px headline. No other elements. Aspect ratio 4:3 container.

### 11e.ii — Maximum Expressiveness
Background: deep red (#CC0000) with heavy film grain and scanlines. Globe is metallic gold (#DDCC88) with bright halation and a highlight from 10 o'clock, spinning at 8 seconds per revolution. Below the black text band, a secondary pale yellow italic line (e.g., “television” or a subtitle) appears. A radiation ring (dashed gold circle) pulses behind the globe at 70% opacity. The clock face appears in the top right corner: white serif numerals on a black disc, second hand stuttering with `steps(60)`. CRT collapse animation plays on transition out. Optional gimbal arm visible holding the globe. No overlapping of elements.

### 11e.iii — Data Context
When presenting numeric or status data (e.g., broadcast schedule times, frequencies, or archive metadata), the system retains its ident structure. The black text band now contains a two‑line layout: a data label in white condensed 24px, and a data value in white 36px (or pale yellow italic as a secondary variant). The globe occupies the upper 60% of frame, rotation continues uninterrupted. For status indicators, a small colour‑coded dot (ok: no dot, warn: tertiary gold, err: secondary red) appears left of the value. No additional charts or gauges are introduced; the data remains minimal and typographically driven. Film grain, scanlines, and halation persist unchanged across all data elements.

### 11f. Sources

This subject has minimal verified imagery. The visual claims below should be treated with caution.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** **BBC Globes & Idents (1960s–1980s)** designates the on-screen continuity identification devices used by the British Broadcasting Corporation for its television channels BBC1 and BBC2, most notably the rotating globes serving as channel brandmarks. These idents evolved from filmed mechanical models (1963–1985) to early computer-generated imagery, created in‑house by the BBC Television Design Department. The accompanying lettering relied on custom BBC Blocks and channel numerals.

**Verified imagery sources.** 2 URLs verified against institutional servers, distributed across:
- www.youtube.com — 1 URL(s)
- Victoria and Albert Museum, London — 1 URL(s)

Key references include none currently documented; no verified film masters, archival stills, or institutional records have been identified in standard design archives or broadcast collections.

**Named typefaces.** The typography of this style is attested as:
- Custom BBC lettering (BBC Blocks and channel numerals) ( — attestation: attested) — rendered here as bespoke imagery — no web-font substitute

**Honest gaps.** The most significant gap is the absence of verified colour values: no confirmed CIE, RGB, or Pantone specifications exist for any ident colour, and the "teal" of the globe ranges only from #3F8E9A to #5F9EA0 in secondary estimates. A verified reference point—for example, a frame from a known film master or an original production specification—would be required to anchor colours definitively.
