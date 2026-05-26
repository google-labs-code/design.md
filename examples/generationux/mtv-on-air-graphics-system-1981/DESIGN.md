---
version: alpha
name: "1981 MTV On-Air Graphics System"
description: "Channels the raw, lo-fi punk energy of MTV's 1981 broadcast launch. Embraces analog video artifacts, a rebellious tone, and a limited palette of high-saturation primaries on a black void."
colors:
  color: "#FFFFFF"
  track: "#000000"
typography:
  display:
    fontFamily: "Custom hand-drawn replica of MTV logo"
    fontSize: "48px"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.05em"
    textTransform: normal-case
  headline:
    fontFamily: "Bold condensed sans-serif"
    fontSize: "36px"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-0.05em"
    textTransform: uppercase
  title:
    fontFamily: "Bold condensed sans-serif"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025em"
    textTransform: uppercase
  body:
    fontFamily: "Bold condensed sans-serif"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: 1.375
    letterSpacing: "-0.025em"
    textTransform: uppercase
  label:
    fontFamily: "Bold condensed sans-serif"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.05em"
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
  gap-component: "8px"
  gap-section: "16px"
components:
  button-primary:
    backgroundColor: "#FF00FF"
    textColor: "#FFFFFF"
    rounded: "{rounded.default}"
    padding: "8px"
    height: "32px"
  button-primary-hover:
    backgroundColor: "#FF00FF"
    textColor: "#FFFFFF"
  card:
    backgroundColor: "#000000"
    textColor: "#FFFFFF"
    rounded: "{rounded.default}"
    padding: "16px"
  input:
    backgroundColor: "#000000"
    textColor: "#FFFFFF"
    rounded: "{rounded.default}"
    padding: "8px"
  input-focus:
    backgroundColor: "#000000"
    textColor: "#FFFFFF"
    rounded: "{rounded.default}"
provenance:
  coverage_status: "minimal"
  identity_description: "The slug `mtv-on-air-graphics-system-1981` refers to the original on‑air broadcast identity and graphics package used by MTV (Music Television) from its launch on 1 August 1981 through approximately the mid‑1980s. This system comprised animated station‑identification sequences, the graffiti‑inspired custom logotype (designed by Manhattan Design), a limited high‑contrast colour palette, lower‑third"
  manual_enrichment_required: true
  imagery_count: 1
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "www.cooperhewitt.org"
      count: 1
  imagery_urls:
    - url: "https://www.cooperhewitt.org/"
      host: "www.cooperhewitt.org"
      institution: "Cooper Hewitt, Smithsonian Design Museum"
      confidence_original: low
  typefaces_attested:
    - name: "custom MTV wordmark lettering"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "attested"
    - name: "Helvetica Bold"
      foundry: null
      year: null
      google_fonts: "Inter"
      attestation: "conventional"
    - name: "Akzidenz-Grotesk"
      foundry: null
      year: null
      google_fonts: "Archivo"
      attestation: "unverified"
    - name: "Futura Bold/Heavy"
      foundry: null
      year: null
      google_fonts: null
      attestation: "unverified"
  flags:
    - "one_usable_url_only"
    - "1_rate_limited_urls_pending_retry"
  honest_gaps:
    - "1. **No surviving official style guide** – all design decisions were ad‑hoc."
---
# Design System: 1981 MTV On-Air Graphics System

## 0. Taxonomy & Identity

- **entity-type:** interface / system / environment
- **artefact-family:** broadcast / overlay / lower third
- **technique:** digital raster (collage / montage also noted)
- **movement-lineage:** subcultural style
- **era:** 1980s postmodern
- **geography:** US / Canada
- **domain:** broadcast / media
- **formal-traits:** expressive, dense, deconstructed, graphic, asymmetric
- **color-logic:** saturated
- **typography-mode:** display type
- **texture:** grainy, matte, noisy
- **function:** entertain
- **provenance:** revival / homage

## 1. Overview

This design system channels the raw, lo-fi punk energy of MTV’s 1981 broadcast launch. It lives in the gap between analog video synthesis and early digital art — crunchy, magnetic, and defiantly unpolished. The emotional tone is rebellious and chaotic, with every element fighting for attention. The era is early 1980s, rooted in punk subculture, new wave music, and the first wave of consumer video technology. The core rendering philosophy: embrace imperfection. Anti-aliasing is forbidden; staircasing, banding, and noise are features. The palette is limited to 4–6 high-saturation primaries that clash intentionally. The frame is treated as a CRT screen — curved corners, scanlines, static, tracking interference, and occasional vertical hold slip. What makes it recognizable: the blocky, monumental MTV logo, VHS static noise, misregistered color offsets, CRT scanlines, hard-edged black drop shadows, chromatic aberration, and diagonal slashes. What would break it: smooth gradients, rounded corners, anti-aliasing, neutral tones, symmetrical layouts, glossy reflections, or any attempt at polished harmony.

**Key instant-read cues:**
- `Blocky, morphing MTV logo as dominant anchor`
- `Every element feels cut-out or hand-drawn – uneven strokes, rough edges`
- `Heavy analog artifacts: ghosting, chroma bleed, rolling bars, banding`
- `Low resolution / bit depth (256 colors max, often 16 or 4)`
- `Intentionally misregistered colors (offset cyan/magenta outlines)`
- `Frame glitches: horizontal splits, tearing, random color shifts`
- `Grain and noise overlay (VHS static, not film grain)`

## 2. Constants

Light Mode:   no (CRT emits light, background is always black)
Dark Mode:    primary (black background with bright neon elements)
Responsive:   no (fixed broadcast frame; if adapted to UI, breakpoints not style-native)
States:       Default, Active, Disabled (some providers also include Hover, Focus, Error)
surface-simulation: crt-screen — CRT monitor glass and scanlines; full-page analog artifacts apply

## 2a — Interaction Model

hover-delta:        scale-up — instant transform scale(1.05) on interactive elements (buttons, cards); optional 2-frame strobe to white
active-delta:       offset-shift — element shifts 2px down, offset shadow removed on press
focus-style:        color-border — border turns cyan with chromatic aberration text-shadow; element scales 1.02 over 83ms steps(1)
transition-duration: 0ms — instant; no easing for state changes (except named keyframe animations for pop/scale)
transition-easing:  none
exempt-animations:  logo-pop, vertical-hold-roll, strobe, video-synth-morph, static-drift

## 3. Colors

Palette is flat and intentional – no hierarchy beyond role. Use pure hex values only; no tints, shades, or gradients. All tags are [inferred] unless otherwise noted; no provider cited a primary source for exact hex codes.

- `background` — `#000000` [inferred]: Full-frame backdrop.
- `surface` — `#000000` [inferred]: Same as background; elements sit on black.
- `primary` — `#FF00FF` (hot pink) [inferred]: Dominant neon accent for logo, headings, active states. Majority (3/4) agreement.
- `secondary` — `#00FFFF` (cyan) [inferred]: Second dominant neon. Majority (3/4) agreement.
- `tertiary` — `#FFFF00` (yellow) [inferred]: Bright accent for warnings or emphasis. Unanimous.
- `error / alert` — `#FF0000` (red) [inferred]: Urgency, error indicators. Unanimous.
- `highlight / optional` — `#00FF00` (green) [inferred]: Occasional accent. Majority (3/4).
- `outline` — CONTESTED:§3.outline — providers split 2-2 on #000000 vs #FFFFFF; re-stack required.
- `neutral` — `#FFFFFF` (white) [inferred]: Text in most contexts, plus reverse-video boxes. (Provider crof-deepseek uses white as neutral; crof-glm uses black as neutral; crof-kimi uses white as on-background; zai uses white as on-surface. Unanimous on white for text.)
- `on-primary` — `#000000` (black) [inferred]: Text on hot pink or cyan background. (crof-deepseek explicitly states; others implicitly by context.)
- `on-surface` — `#FFFFFF` (white) [inferred]: Text on black background. (crof-deepseek explicit; others agree via examples.)

**Color misregistration:** Any shape can have a duplicate offset 2–4px in cyan or magenta, simulating print misregister. Use `-translate-x-1` or `-translate-y-1` with `text-[#00FFFF]` or `text-[#FF00FF]` and `opacity-70`.

**Dark mode:** Not applicable – the palette is inherently dark.

## 4. Typography

All type set in all caps unless otherwise noted. Mechanical distortion (stretch, squish, skew) is encouraged per-element. Text may be partially cut off by frame edges.

**display (logo / hero title):**
- font-family: Custom hand-drawn replica of the original MTV logo – no web font substitute; supply as SVG or image asset.
- font-size: variable (text-5xl to text-7xl)
- font-weight: font-black
- line-height: leading-none or leading-tight
- letter-spacing: tracking-tighter (erratic manual kerning preferred)
- text-transform: normal-case (logo retains custom letter shapes)
- text-decoration: none
- **Adjudication:** No provider cited a foundry or year for the custom logo; this is an unverified claim. Filed as gap marker.

**headline (section titles, bumpers):**
- font-family: Bold condensed sans-serif (candidates: Compacta, Alternate Gothic, Impact, Arial Black, ITC Machine, Eurostile)
- Google Fonts substitute: CONTESTED:§3.google_fonts_substitute — no provider cited a foundry; zai suggests Oswald, but majority do not endorse. Use gap marker.
- font-size: text-3xl to text-5xl
- font-weight: font-bold to font-black
- line-height: leading-tight or leading-snug
- letter-spacing: tracking-tighter
- text-transform: uppercase
- text-decoration: none; occasionally skewed or stretched via transform

**title (artist name, video title, time):**
- font-family: Same bold condensed sans as headline
- font-size: text-xl to text-2xl
- font-weight: font-bold
- line-height: leading-tight or leading-normal
- letter-spacing: tracking-tight
- text-transform: uppercase

**body (short descriptions, metadata):**
- font-family: Same bold condensed sans as headline
- font-size: text-base to text-lg
- font-weight: font-bold
- line-height: leading-snug
- letter-spacing: tracking-tight
- text-transform: uppercase

**label (small captions, sublabels):**
- font-family: Same bold condensed sans as headline
- font-size: text-sm
- font-weight: font-semibold to font-bold
- line-height: leading-tight or leading-relaxed
- letter-spacing: tracking-wider or tracking-normal
- text-transform: uppercase

**Adjudicated gap markers for typeface names:**
- §3.primary_typeface: no provider cited a foundry or year for the custom logo; unverified.
- §3.secondary_typeface: no provider cited a foundry for bold condensed sans; unverified.
- §3.google_fonts_substitute: no cited source; zai's Oswald is unsupported.

## 5. Elevation

Flat depth model. No layered shadow hierarchy. Use a single hard-edged drop shadow, no blur, solid fill color.

hard-drop:
  offset: contested (2px, 3px, or 4px) – all providers agree on hard offset, no blur.
  color: solid black (#000000) – majority agreement.
  Applied to: logo, text boxes, buttons, and any element that needs to separate from the noisy background.

**Stacking context:** Not applicable (single plane) – some providers suggest a z-index stack (base z-0, logo z-10, overlays z-30, etc.), but this varies. Not used if style remains flat.

## 6. Spacing & Sizing

**padding:**
- component-internal: p-2 (8px) — tight, text hugs border (majority)
- section-internal: p-4 (16px) (majority)
- page-edge: CONTESTED — providers give p-1, p-2, p-4, px-6 py-4; no majority.

**margin:**
- between-components: gap-2 (8px) (majority)
- between-sections: gap-4 (16px) (majority)

**component-heights:**
- sm: h-8 (majority)
- md: h-10 (majority)
- lg: h-12 (majority) (one provider suggests h-14 for lg)

**icon-size:** w-6 h-6 (majority) — pixel sprites at 16x16 or 24x24 preferred.
**avatar-size:** not used (majority absent); if used, w-8 h-8 w-10 h-10, hard-edged rounded-none.

## 7. Borders

**border-radius:** 
- default: rounded-none — all corners sharp (unanimous)
- card, button, input, chip/badge: rounded-none

**border-width:**
- default: border-2 (2px) — majority
- emphasis: border-4 (4px) — majority (some suggest border-8 for safety zones)

**border-style:** border-solid — all borders continuous, no dashes or dots (unanimous)

**border-image:** misregistration effect — offset duplicate border in cyan or magenta (2-3px offset, implemented as box-shadow or pseudo-element; no Tailwind equivalent).

**clip-path:** Conditional — diagonal slash dividers, zigzag shapes, and irregular polygon crops. Example: `polygon(0 0, 100% 0, 85% 100%, 0% 100%)`. No Tailwind native equivalent.

## 8. Opacity

- disabled-state: CONTESTED — providers give opacity-30, opacity-40, opacity-50; no majority.
- ghost/secondary: CONTESTED — opacity-60 vs. opacity-70; no majority.
- overlay/scrim: CONTESTED — values range from opacity-30 to opacity-75; no majority.
- hover-feedback: Not applicable (broadcast medium); use flash-frame strobe instead.

**Browser chrome (for digital implementation):**
selection:
  background:  rgba(255,0,255,0.3) (hot pink at 30%) – majority
  color:       #FFFFFF – majority
scrollbar:
  style:       auto (thin, ~6px) – some providers suggest hidden; use auto with neon thumb.
  track:       #000000 – implied by background
  thumb:       #FF00FF or #FFFFFF – contested; use #FF00FF for style consistency.

## 8.5. Visual Effects

This style is defined by analog artifacts. All of the following subsections are active.

### 8.5.0 — Physical Material Model

material-model:    crt-screen

global-filter:     brightness(1.2) contrast(1.4) — applied to body; simulates CRT bloom and banding

global-overlay:    body::after: repeating-linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.15) 50%) 0 0 / 100% 4px, mix-blend-mode: overlay, opacity-30 (CRT scanlines); body::before: SVG feTurbulence baseFrequency="0.65" numOctaves="3" type="fractalNoise", mix-blend-mode: overlay, opacity-15 (VHS static)

rendering-flags:
  font-smoothing:  none — no antialiasing; sharp staircased edges
  image-rendering: pixelated — low-res sprites and raster text remain crisp
  text-rendering:  optimizeSpeed

### 8.5a — Color Manipulation

filter:
  [brightness(1.2)] on bright shapes to simulate CRT bloom – majority
  [contrast(1.4)] globally to enhance banding – majority

mix-blend-mode:
  screen: for overlapping neon glows (e.g., logo on static background)
  difference: for glitch textures (optional)
  multiply: for darkening overlapping planes

background-blend-mode:
  screen: for multi-layer noise and gradient-like overlaps (not always used)

### 8.5b — Surface Layering (Backdrop Filters)

Not used. All depth is achieved through opacity layering or drop shadow, not blur.

### 8.5c — Gradients & Glow

background-image:
  type:         linear-gradient (posterized steps)
  role:         structural — creates banded gradient fill
  description:  "4–6 step posterized bar from hot pink to black"
  stops:        manual step mapping required (e.g., #FF00FF 0%, #FF00FF 25%, #00FFFF 25%, #00FFFF 50%, ...)
  animation:    none

filter: drop-shadow:
  description:  "glow trail" – thin duplicate of shape in lighter shade, offset 2-4px, opacity-60, no blur.
                Applied to: logo, moving elements.

text-shadow:
  description:  CRT glow on bright text – 0 0 4px currentColor, 0 0 8px currentColor.
                Also chromatic aberration: text-shadow: 2px 0 #FF00FF, -2px 0 #00FFFF.
                Applied to: display and headline text.

### 8.5d — Texture & Noise Simulation

**Block 1: VHS Static Noise**
technique:    SVG feTurbulence
parameters:   baseFrequency="0.65" numOctaves="3" type="fractalNoise"
surface:      full-page canvas (background layer, mixed with overlay blend)
intensity:    moderate (opacity-15 to opacity-20)
blend:        mix-blend-mode: overlay; opacity-15 to 20
color:        monochrome white
animation:    none (static seed)
tailwind-approximation: no Tailwind native equivalent

**Block 2: CRT Scanlines**
technique:    repeating-linear-gradient (to bottom, transparent 50%, rgba(0,0,0,0.15) 50%)
parameters:   horizontal lines 2px every 4px (white or black)
surface:      full-page, above all content
intensity:    strong
blend:        mix-blend-mode: overlay; opacity-15 to 30
color:        black (darkens lines)
animation:    none
tailwind-approximation: no Tailwind native equivalent

**Block 3: Chromatic Aberration (text edges)**
technique:    CSS text-shadow with offset colors
parameters:   text-shadow: 2px 0 #FF00FF, -2px 0 #00FFFF
surface:      display and headline text
intensity:    moderate
blend:        normal
color:        hot pink and cyan
animation:    none
tailwind-approximation: no Tailwind native equivalent

**Block 4: VHS Tracking Noise (horizontal bands)**
technique:    CSS gradient with multiple hard stops (randomized colors) + feTurbulence overlay
parameters:   bands of white/yellow noise, 4px thick, spaced 40px apart, sliding upward
surface:      occasional overlay on full frame
intensity:    strong, sporadic
blend:        mix-blend-mode: screen; opacity-30 to 40
color:        white tinted to cyan
animation:    vertical translation (translateY from 0 to -40px) over 500ms linear infinite, stepped
tailwind-approximation: no Tailwind native equivalent

**Compositing stack (bottom to top):**
1. Black background
2. Content shapes (solid fills, possibly with blend modes)
3. Glow trails / hard drop shadows
4. Chromatic aberration offsets
5. VHS tracking noise (intermittent)
6. CRT scanlines (overlay)
7. VHS static noise (overlay)
8. CRT vignette (radial gradient from transparent to black at edges)

## 9. Components

**Icon vocabulary:**
- system: custom hand-drawn glyphs or 16x16 pixel sprites (cassette, star, lightning bolt, spray can, eighth note, safety pin, hypno spiral)
- size: w-6 h-6 (secondary), w-8 h-8 (primary)
- color: inherits currentColor (usually hot pink or cyan)
- treatment: hard-edge drop shadow no blur; optional glow trail
- restrictions: no complex outlines, no anti-aliasing, no SVG smooth curves

**Image / media treatment (for video stills or collages):**
- aspect-ratio: aspect-[4/3] or aspect-video
- object-fit: object-cover
- filter: contrast(1.4) brightness(1.1) saturate(1.6) (or grayscale 80% with contrast +30%)
- overlay: VHS static noise + CRT scanlines + gradient banding scrim (optional)
- border: border-4 solid white or black; hard drop shadow
- dark-mode: not applicable (already on black)

### Standard UI Components (translated for interface)

**Button (Primary)**
- Fill: hot pink (`bg-[#FF00FF]`)
- Text: white (`text-[#FFFFFF]`), uppercase bold, text-sm
- Border: white, 2px (`border-2 border-[#FFFFFF]`) – some providers suggest 4px; use majority 2px.
- Corner: `rounded-none`
- Shadow: hard drop `shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]` (offset 2px is most common)
- Hover: instant transform scale 1.05, or 2-frame strobe to white
- Active: offset shadow removed, element shifts 2px down
- Disabled: `opacity-50` with static noise overlay, no hover transform
- Icon: optional glowing star or lightning bolt on left

**Button (Secondary)**
- Transparent fill, border-2 solid neon (cyan or magenta), same rules.

**Card / Panel**
- Fill: black (`bg-[#000000]`) with white text, or solid neon fill with black/white text
- Border: white or hot pink, 2-4px (`border-2 border-[#FFFFFF]` or `border-[#FF00FF]`)
- Corner: `rounded-none`
- Shadow: hard drop (black on single element, or – for layering – no shadow on child)
- Internal layout: dense, text boxes may be offset or overlap slightly
- Diagonal slash accent: an intersecting polygon `clip-path` across one corner filled with cyan at `opacity-60`

**Navigation (Lower Third / Bumper)**
- Background: solid neon (pink or cyan) or black bar full width, height h-12
- Border: white, 2px top and bottom lines
- Text: white/black uppercase bold condensed, text-base, hard-edged background box
- Layout: artist name left-aligned, song title right-aligned, divider vertical bar in hot pink
- Active state: entire bar strobes with 2-frame on/off cycle

**Input / Form Field**
- Border: hot pink, 2-4px (`border-2 border-[#FF00FF]`)
- Fill: black (`bg-[#000000]`)
- Text: white, uppercase, text-sm
- Focus: border turns cyan, with chromatic aberration text-shadow on label
- Error: border turns red, diagonal slash appears across field
- Placeholder: white at `opacity-50`

### Style-Native Primitives

**Frame Noise Border**
- A repeating VHS static strip around the viewport edge (width 12px). Implemented with `background-image` of noise tile and `background-repeat: repeat` on `border-image` or a full-frame overlay with `pointer-events: none`.

**Misregistration Ghost**
- Duplicate an element (logo, text, icon) offset 2–4px in cyan or hot pink at `opacity-60`.

**Diagonal Slash Divider**
- A thick (border-4) diagonal line crossing the screen at 45 degrees. Fill: hot pink or cyan. Also available as a `clip-path` on rectangular panels.

**CRT Screen Curvature Vignette**
- A radial gradient overlay (`from-transparent via-transparent at 70% 50%, to-black at 90%`) that darkens the edges. Plus a faint specular highlight in one corner (white ellipse, opacity-10).

**Strobe Element**
- Any component can be set to a 2-frame on/off cycle at 12fps.

## 10. Layout

**Spacing cadence:** Loose, with intentional overriding. Elements often overlap or drift out of alignment. Use `space-x-4` and `space-y-2` but allow `-translate-x-2` and `-translate-y-1` for chaotic placement.

**Grid tendency:** No grid. Place elements asymmetrically: center logo but offset it 5–10% from dead center. Secondary elements (artist name, time, title) stack diagonally (top-left to bottom-right) or in a staggered column.

**Density:** High, with 5+ competing visual elements (logo, text, noise, diagonal slashes, icon). However, leave at least one area of dead space (like a poorly cropped CRT shot).

**Section separation:** Hard horizontal or diagonal lines (border-4 in hot pink or cyan). Avoid white space as separator – use texture or noise bands.

**Alignment philosophy:** Off-center, floating. Elements break out of boxes. Text may be partially cut off by frame edge. Use `mx-auto` rarely; prefer `absolute` positioning with percentage offsets.

**Breakpoint behavior:** Not native to broadcast. If adapted to responsive UI:
- At 375px: simplify to 3 elements max; reduce diagonal slashes to one; make logo smaller (text-4xl from text-6xl); increase noise transparency to avoid overcrowding.
- At 768px: restore full complexity; allow secondary elements in a two-column side layout.

**Motion block:**
motion:
  transition-duration:        0ms (instant) for most state changes; 83ms (12fps) for pop/scale animations
  transition-timing-function: steps(1) – no interpolation between keyframes
  transition-property:        transform, opacity
  transition-delay:           none
  transition-behavior:        allow-discrete (for strobe opacity)

  animation:
    logo-pop:     scale from 1.2 to 1.0 over 4 frames (333ms) with steps(1), trigger: on-load
    vertical-hold-roll:   translateY slip up 20px over 0.2s every 8s, trigger: looping
    strobe:       opacity 0 for 2 frames (166ms), then 1 for 2 frames, looped, trigger: on-active
    video-synth-morph:    clip-path or shape polygon morph over 8 frames (666ms) steps(2), trigger: on-load
    static-drift: background position shift 1px over 2s linear infinite, trigger: looping

  transform-at-rest:
    All elements rest at transform: none (except those with deliberate skew or stretch applied statically)

  transform-on-interact:
    hover:       scale(1.05) over 83ms steps(1) on buttons and cards
    active:      translate(2px, 2px) over 0ms on buttons
    focus:       scale(1.02) + cyan color shift over 83ms steps(1)

  transform-style:       flat
  transform-perspective: none
  backface-visibility:   hidden (for card flip if used)

## 11. Design System Notes

### 11a. Use Constraints

**Appropriate for:** broadcast graphics systems (lower thirds, bumpers, interstitials), music streaming interfaces with a retro/punk brand, gaming HUDs with a 1980s arcade vibe, promotional videos for vintage- or retro-themed content, and any UI that wants to evoke rebellion, noise, and raw energy.

**Wrong for:** corporate dashboards, medical interfaces, finance apps, e‑commerce platforms requiring clarity and trust, reading-heavy editorial, or any context where polished, clean, and neutral aesthetics are the norm.

### 11b. Prompt Phrases

1. "Add VHS static noise overlay at opacity-20 using feTurbulence."
2. "Apply color misregistration: duplicate element in cyan, offset 2px, opacity-60."
3. "Use only pure primary hex values: #FF00FF, #00FFFF, #FFFF00, #FF0000, #00FF00, #FFFFFF."
4. "All corners rounded-none; all borders border-4."
5. "All text uppercase, bold condensed sans-serif; add chromatic aberration text-shadow on headlines."
6. "Center the logo but offset it 10% left and 5% down. Leave one area of dead space."
7. "Incorporate at least one diagonal slash or zigzag element as a divider."
8. "Animations at 12fps (steps(1)); use strobe effects for active states."

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description.

rule: The background must be pure black (#000000) with no variations; all elements sit on this void.
do:   Set `background-color: #000000` on body. All cards and panels have black backgrounds or neon fills.
avoid: Using dark gray (#333333) or any color tint as the base canvas; that would dilute the CRT contrast.

rule: No anti-aliasing is permitted; all edges must be sharp and staircased to mimic low-res video.
do:   Use `-webkit-font-smoothing: none; font-smoothing: none; image-rendering: pixelated;` and text-shadow for chromatic aberration. Borders are crisp pixel boundaries.
avoid: Applying `antialiased` class, CSS `font-smooth: always`, or any blur/smoothing that softens edges.

rule: Corners must be perfectly square (rounded-none) on all components; the CRT curvature is a separate overlay, not component rounding.
do:   Use `rounded-none` for buttons, cards, inputs, and panels.
avoid: Setting `rounded-md`, `rounded-lg`, or any border-radius on interactive elements; only the full-page vignette can have curvature.

rule: All motion uses stepped keyframes (steps(1)), running at 12fps; never use smooth interpolation.
do:   `transition-timing-function: steps(1);` on all transitions; `animation-timing-function: steps(1);` for any animation.
avoid: Using `ease`, `ease-in-out`, or `linear` transitions; even a 83ms pop uses steps(1) to retain the jittery feel.

rule: The color palette is restricted to exactly 6 high-saturation primaries: #FF00FF, #00FFFF, #FFFF00, #FF0000, #00FF00, #FFFFFF, plus black background. No tints, shades, or neutrals.
do:   Apply hex colors directly with no opacity variations beyond disabled states (opacity-50 max). Text is #FFFFFF or #000000.
avoid: Introducing gray (#808080), pastels, desaturated versions, or any color not in the defined set; gradients are banned.

### 11d. Variation Bounds

1. **Chaotic vs. structured:** Push overlapping mayhem (5+ elements, clipping, noise intensity 0.4) or tighten to clear focal point (3 elements, moderate noise).
2. **Clean vs. grimy:** Reduce grain and noise layers to a single overlay (opacity-10) vs. apply full VHS tracking, banding chromatic aberration, and dropout lines.
3. **Flat vs. layered:** Keep strictly 2D (no shadows, no ghosting) vs. use hard-drop shadows and misregistration ghosts for depth.
4. **Vintage authentic vs. new remix:** Strict 1981 constraints (256 colors, 12fps, pure primaries) vs. widen palette slightly (add deep purple #800080) and use smoother motion (ease-out 200ms) for contemporary audience.
5. **Minimal vs. maximal:** Fewer shapes (logo + one text + noise) vs. full-screen mosaic of 5+ elements (logo, text, diagonal slashes, icons, noise, static bands).
6. **Neon day vs. night:** Hot pink/cyan/white palette (day) vs. deep purple/magenta/coral palette (night) – swap #FF00FF for #800080 and #00FFFF for #FF69B4.

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts.
Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
A frame with the MTV logo (hot pink, massive, slightly offset left and up from center) resting on a black void. A lower-third bumper spans the bottom: a horizontal bar (h-12) filled with hot pink, bordered top and bottom with white 2px lines, containing artist name “THE CURE” left-aligned in white uppercase bold condensed, song title “A FOREST” right-aligned in white, separated by a vertical hot pink bar. CRT scanlines (opacity-20) and subtle VHS static noise (opacity-10) overlay the entire composition. No animation. One diagonal cyan slash at opacity-40 cuts across the top-right corner. All elements deliver the raw broadcast signal.

### 11e.ii — Maximum Expressiveness
Full-channel chaos: the MTV logo morphs through video-synth-morph animation (clip-path polygon shift), while a second misregistration ghost offsets 3px in cyan at opacity-60. Three overlapping bounding boxes (cyan, yellow, magenta) with thick borders and diagonal slashes crowd the frame. VHS tracking noise bands slide upward every 8 seconds, and a strobe effect flickers the logo every 2 frames. Chromatic aberration text-shadow on all display text (headlines in hot pink with cyan/red offsets). A static-drift loop shifts the entire background noise texture 1px linearly. At least one element (a star-shaped icon) is cut off by the frame edge. The frame’s edges darken with CRT vignette, and a visible horizontal tear (a thin white line) randomly appears. No smooth motion anywhere.

### 11e.iii — Data Context
When displaying structured information—a playlist, telemetry, or status board—the black background remains. Each data row becomes a narrow rectangular panel with a hot pink border-2, filled black. Row header (e.g., track number) is yellow uppercase bold, left-aligned; song title is white uppercase bold; duration is cyan right-aligned. A signal-bar-style indicator for “energy” uses 5 horizontal bar segments in green (#00FF00) to red (#FF0000), separated by 2px black gaps, inside a bordered box. Any status change triggers a 2-frame strobe: the row’s border flashes white then returns. The data table uses no horizontal rules except the panel borders; vertical text alignment is manual via offset positioning. CRT scanline and noise overlay persist at reduced opacity (5–10%) to avoid distracting from legibility. Scrolling (if any) is stepped in 2-second jumps, not smooth. No drop shadows on data cells—only hard borders and misregistration ghosts for emphasis.

### 11f. Sources

This subject has minimal verified imagery. The visual claims below should be treated with caution.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** (Prose generation failed — see provenance block for attribution data.)

**Verified imagery sources.** 1 URLs verified against institutional servers, distributed across:
- Cooper Hewitt, Smithsonian Design Museum — 1 URL(s)

**Named typefaces.** The typography of this style is attested as:
- custom MTV wordmark lettering (designed by Frank Olinsky — attestation: attested) — rendered here as bespoke imagery — no web-font substitute
- Helvetica Bold ( — attestation: conventional) — rendered here in Inter as the closest open substitute
- Akzidenz-Grotesk ( — attestation: unverified) — rendered here in Archivo as the closest open substitute
- Futura Bold/Heavy ( — attestation: unverified) — no Google Fonts substitute available

**Honest gaps.** (No documented gaps were recorded by the forensic pipeline.)
