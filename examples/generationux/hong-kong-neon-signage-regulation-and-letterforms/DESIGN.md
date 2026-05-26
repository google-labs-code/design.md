---
version: alpha
name: "Hong Kong Neon Signage — Regulation & Letterforms"
description: "Kowloon Glow translates the dense, regulated beauty of Hong Kong’s neon signage into an interface system that is simultaneously chaotic and ordered, luminous and gritty."
colors:
typography:
  display:
    fontFamily: "Noto Sans SC Black, Source Han Sans Heavy"
    fontSize: 60px
    fontWeight: 900
    lineHeight: 1
    letterSpacing: -0.025em
  headline:
    fontFamily: "Barlow Condensed, Trade Gothic Condensed, Franklin Gothic Demi Cond"
    fontSize: 30px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0.1em
    textTransform: uppercase
  title:
    fontFamily: "Noto Sans SC Black, Source Han Sans Heavy"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0em
  body:
    fontFamily: "Barlow Condensed, Trade Gothic Condensed, Franklin Gothic Demi Cond"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0.05em
    textTransform: uppercase
  label:
    fontFamily: "Courier New, Consolas, monospace"
    fontSize: 12px
    fontWeight: 300
    lineHeight: 1
    letterSpacing: -0.05em
    textTransform: uppercase
rounded:
  default: "0px"
  card: "0px"
  button: "0px"
  input: "0px"
  chip: "0px"
spacing:
  component-internal: "4px"
  section-internal: "8px"
  page-edge: "16px"
  gap-component: "0px"
  gap-section: "8px"
  height-sm: "48px"
  height-md: "96px"
  height-lg: "192px"
  icon: "24px"
components:
  button-primary:
    backgroundColor: "#1a1a2e"
    textColor: "#FF0033"
    rounded: "0px"
    padding: "4px"
  button-primary-hover:
    backgroundColor: "#1a1a2e"
    textColor: "#FF0033"
    rounded: "0px"
    padding: "4px"
  card:
    backgroundColor: "#1a1a2e"
    rounded: "0px"
    padding: "8px"
  input:
    backgroundColor: "#1a1a2e"
    textColor: "#FF0033"
    rounded: "0px"
    padding: "4px"
  input-focus:
    backgroundColor: "#1a1a2e"
    textColor: "#FF0033"
    rounded: "0px"
    padding: "4px"
  badge:
    backgroundColor: "#1a1a2e"
    textColor: "#D0D0FF"
    rounded: "0px"
    padding: "4px"
provenance:
  coverage_status: "minimal"
  identity_description: "The slug `hong-kong-neon-signage-regulation-and-letterforms` refers to the vernacular visual identity system formed by the massed neon signage of Hong Kong, predominantly from the 1950s through the 2010s, the regulatory frameworks that shaped its typographic and structural norms, and the specific lettering conventions (both Chinese calligraphic/typographic and Latin alphabetic) used in these signs"
  manual_enrichment_required: true
  imagery_count: 1
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "www.lusterpublishing.com"
      count: 1
  imagery_urls:
    - url: "https://www.lusterpublishing.com/"
      host: "www.lusterpublishing.com"
      institution: "Luster Publishing"
      confidence_original: high
  typefaces_attested:
    - name: "Chinese lettering (custom hand-drawn)"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "attested"
    - name: "Fang Song (仿宋体)"
      foundry: null
      year: null
      google_fonts: null
      attestation: "conventional"
    - name: "Li Shu (隶书)"
      foundry: null
      year: null
      google_fonts: null
      attestation: "conventional"
    - name: "Hei (sans-serif generic)"
      foundry: null
      year: null
      google_fonts: null
      attestation: "conventional"
    - name: "Helvetica"
      foundry: null
      year: null
      google_fonts: "Inter"
      attestation: "inferred"
    - name: "Frankfurter"
      foundry: null
      year: null
      google_fonts: null
      attestation: "inferred"
    - name: "Arial"
      foundry: null
      year: null
      google_fonts: "Arimo"
      attestation: "inferred"
    - name: "Chinese Hei"
      foundry: null
      year: null
      google_fonts: null
      attestation: "inferred"
  flags:
    - "one_usable_url_only"
    - "1_robots_disallowed_urls"
  honest_gaps:
    - "1. **Colour:** No verified Munsell/Pantone values for any specific sign; no spectral measurements of gas discharge in Hong Kong signs; no record of phosphor formulations used by local shops. *Resolution needed:* scientific analysis of decommissioned tubes by a conservation lab (e.g., M+ has capability but results not published)."
---
# Design System: Hong Kong Neon Signage — Regulation & Letterforms

## 0. Taxonomy & Identity

entity-type:        interface / system / environment
artefact-family:    game UI / HUD / menu / operating system
technique:          digital raster
movement-lineage:   vernacular commercial style
era:                1980s postmodern
geography:          china / korea
domain:             retail / CPG
formal-traits:      dense, ornamental, graphic
color-logic:        saturated
typography-mode:    display type
texture:            grainy, glossy
function:           persuade
provenance:         revival / homage

## 1. Overview

Kowloon Glow translates the dense, regulated beauty of Hong Kong’s neon signage into an interface system that is simultaneously chaotic and ordered, luminous and gritty. Born from the postwar commercial vernacular of Kowloon’s street canyons (enforced by the Buildings Ordinances), this style treats every screen as a building facade — a vertical, packed composition of glowing tube letterforms (Traditional Chinese dominating, English supporting) constrained by legal envelopes, visible brackets, and the wear of decades.

The aesthetic is unmistakable: a near-black backdrop with purplish bias, 2–4 saturated neon colors per composition, hand‑bent‑looking characters with rounded tube corners and visible “joint” gaps, hard diagonal cast shadows, and a faint grain of concrete dust. Empty sky‑space carved by regulations is as important as the signs themselves, creating negative space that breathes through the density.

### What makes it recognizable
- Dense vertical stacking of sign rectangles filling height
- Heavy traditional Chinese characters 3× larger than any English
- Tube stroke rounded caps, minimum bend radius, cross‑stroke simplification
- No gradients — each neon color flat except for a soft outer glow (filter blur)
- Visible metal brackets, transformer boxes, hanging cables
- Hard cast shadows at 45°
- Faint noise/grain layer over entire design
- “Off” tubes (darker, less saturated) and broken‑tube gaps

### What would break the style
- Rounded corners on sign frames (regulation requires rectangular signs)
- Smooth gradients or blur transitions
- Standard typefaces (everything must read as custom‑bent outlines)
- Light backgrounds or pure white on‑surface
- Animations that are smooth morphing, scrolling text, or fast blink
- Lack of structural constraints (must feel regulated)

## 2. Constants

Light Mode:   no — style exclusively dark/ambient; all assets assume dark canvas  
Dark Mode:    primary — pure night context; background #0a0a14, neon colors at full luminous intensity  

Responsive:   minimal — stacking density adjusts but vertical axis is preserved;  
              breakpoints: 375px (single‑column stack), 768px (2–3 signs deep)  

States:       Default (full glow, no flicker)
              Active (bright glow, slight bloom)
              Disabled (off tube – opacity, desaturation)
              Hover (subtle 10–20% brightness increase + micro‑jitter)
              Focus (flicker on/off at 2 Hz)
              Error (tube gap / broken stroke indicator)

surface-simulation: collage — layered neon signs on a building facade, viewed through a gritty urban lens

## 2a — Interaction Model

hover-delta:        glow — brightness increases 10–20%, with micro‑jitter displacement of ±1px
active-delta:       glow — neon glow intensifies by ~20%, bloom expands slightly
focus-style:        glow-ring — neon ring pulses on/off at 2 Hz around focused element
transition-duration:0ms — state changes are instantaneous; animation for micro‑jitter and flicker handled via exempt‑animations
transition-easing:  none
exempt-animations:  flicker-focus, neon-jitter, glow-bloom

## 3. Colors

All hex values are sourced from provider outputs; tags indicate evidence quality. Neon colors are applied flat with a soft outer glow (blur 2–4px, opacity 60–80%). No gradients. One or two “off” tubes (lighter value, lower saturation) may appear per composition.

| Role | Hex | Tailwind Class | Usage |
|------|-----|----------------|-------|
| neon-red (primary) | `#FF0033` [unanimous, unverified] | `text-[#FF0033]` `bg-[#FF0033]` | Primary neon — main Chinese characters, dominant sign content |
| neon-green (secondary) | `#00FF66` [unanimous, unverified] | `text-[#00FF66]` `bg-[#00FF66]` | Secondary neon — English text, secondary strokes, accent outlines |
| neon-blue (tertiary) | `#0066FF` [unanimous, unverified] | `text-[#0066FF]` `bg-[#0066FF]` | Tertiary neon — additional accents, background tube outlines |
| neon-yellow (accent) | `#FFCC00` [unanimous, unverified] | `text-[#FFCC00]` `bg-[#FFCC00]` | Accent neon — price tags, arrows, decorative elements |
| neon-pink | `#FF3399` [unanimous, unverified] | `text-[#FF3399]` `bg-[#FF3399]` | Warm accent — special offers, mismatched tube replacements |
| cool-white | CONTESTED:§2.hex_cool_white — providers gave [#D0D0FF / #E0EFFF / #e8f0ff]; no consensus | text-/bg- placeholder | On‑surface white — English text, some Chinese strokes; tinted glow, never pure white |
| background | `#0a0a14` [unanimous, unverified] | `bg-[#0a0a14]` | Night canvas — near‑black with purple/blue bias |
| surface-dark | `#1a1a2e` (majority: A & B) | `bg-[#1a1a2e]` | Slightly lighter surface for sign backplates, card panels |
| surface-container | CONTESTED:§2.surface_container — providers gave [#141428 / #2a2a3e]; no majority | `bg-[#...]` | Alternative backplate color (see contestation) |
| disabled-dim | CONTESTED:§2.disabled — providers gave [#405060 / #334455]; no consensus | `text-[#...]` | Unlit/off tube — low saturation, dim |
| outline | CONTESTED:§2.outline — providers gave [#2a2a3e / #556677 / #E0EFFF@30%]; no consensus | `border-[#...]` | Frame edges, divider lines |
| cast-shadow | `rgba(0,0,0,0.3)` (unanimous) | `shadow-[drop-shadow(4px_4px_0_rgba(0,0,0,0.3))]` | Hard diagonal cast shadow for sign projections |

**Dark mode variant:** all colors remain unchanged. Glow strength may increase by 10% to compensate for lighter dark backgrounds.

## 4. Typography

All letterforms are custom‑bent outlines — never live digital fonts. For implementation, use SVG or canvas rendering. The following Tailwind approximation is provided for fallback metrics only; no attested font family is available.

| Role | font-family (attested) | font-size | font-weight | line-height | letter-spacing | text-transform | notes |
|------|------------------------|-----------|-------------|-------------|----------------|----------------|-------|
| Display (Chinese primary) | CONTESTED:§3.primary_typeface — providers gave [‘KowloonNeon’ + ‘Noto Sans SC’ / custom Chinese strokes / ‘Noto Sans SC Black’, ‘Source Han Sans Heavy’]; none cited foundry or year | `text-6xl` (3.75rem) | 900 | `leading-none` | -0.025em (tight) | normal-case | Heavy chunky strokes, rounded corners (min bend radius = stroke/2), tube joint gaps 1–3px; no descenders/ascenders squeezed to fit square space |
| Headline (English all-caps) | CONTESTED:§3.secondary_typeface — providers gave [‘KowloonNeonLatin’ + ‘Barlow Condensed’ / ‘Tight Condensed Sans’ (custom) / ‘Trade Gothic Condensed’, ‘Franklin Gothic Demi Cond’]; none cited foundry | `text-3xl` (1.875rem) | 700 | 1.0 | 0.1em (widest) | uppercase | Condensed grotesque with triangular tapers at terminals; single-loop numerals; no kerning – equal spacing + jumpers |
| Title (subsidiary Chinese) | Same as primary contestation | `text-2xl` (1.5rem) | 700 | 1.25 | normal | normal-case | Smaller sign secondary content |
| Body (English secondary) | Same as headline contestation | `text-base` (1rem) | 600 | 1.5 | 0.05em | uppercase | Often placed below Chinese, height ≤ ⅓ of Chinese character height |
| Label (cert numbers, arrows) | CONTESTED:§3.google_fonts_substitute — providers gave [‘Courier New’ monospaced / monospace unspecified / ‘Courier New’, ‘Consolas’]; no citation | `text-xs` (0.75rem) | 300 | 1.0 | -0.05em | uppercase | Certificate numbers (white text, bottom right); arrow motifs as filled neon triangles |

### Customisation rules
- Chinese characters: heavy (800–900), strokes simplified to continuous tube runs (loops replace cross strokes, sharp corners → gentle arcs)
- Latin: all‑caps condensed grotesque, wide tracking, triangular tapers at terminals, descenders/ascenders squeezed to match Chinese character height
- Ampersand & numerals: single‑loop forms
- Gaps in strokes mimic neon tube joints: small non‑glowing segments (1–3px) every few curves

## 5. Elevation

Flat depth model for surfaces. Shadow hierarchy defined by glow and cast shadows only. Stacking context based on urban layering (majority agreement):

| Level | Token | When/Where |
|-------|-------|------------|
| wall surface | `z-0` | Background (building wall) |
| background sign | `z-10` | Signs behind, dimmed |
| primary sign | `z-20` | Dominant shop name sign, brightest |
| bracket / armature | `z-22` (approximate, majority from A & C) | Metal hardware attached to sign |
| transformer box | `z-35` (C only; contested — see map) | Small dark rectangle near sign base |
| glow bloom overlay | `z-40` (unanimous) | Duplicate neon layer, screen blend |
| topmost overlay | `z-50` (B & C) | Modals, headlight sweeps |

Hard diagonal cast shadow: `drop-shadow(4px 4px 0 rgba(0,0,0,0.3))` — no blur, 45° angle.

## 6. Spacing & Sizing

padding:
  component-internal:    p-1 (4px) — tight interior (fire safety gap ~15cm = 10px at 1×)
  section-internal:      p-2 (8px) — between sign elements
  page-edge:             p-4 (16px) — pedestrian clearance

margin:
  between-components:    gap-0 (0px) — dense stacking; signs may touch/overlap
  between-sections:      gap-2 (8px) — between sign clusters

component-heights:
  sm:   h-12 (48px)   — small subsidiary sign (e.g., “OPEN”)
  md:   h-24 (96px)   — default sign (Chinese top 70%, English bottom 30%)
  lg:   h-48 (192px)  — full building height sign stack

icon-size:       w-6 h-6 (24px) — arrows, bullets
avatar-size:     w-10 h-10 — not typical, consider neon tube cross-section

## 7. Borders

border-radius:
  default:     rounded-none  (signs are rectangular by regulation)
  card:        rounded-none
  button:      rounded-none
  input:       rounded-none
  chip/badge:  rounded-none
  neon-tube-element:  rounded-full — for glowing tube representations only (e.g., progress bars)

border-width:
  default:     border-0          (glass tubes define edge)
  emphasis:    border-2          (metal frame edge – dark outline)
  focus:       border-4          (focus ring in neon red with glow)

border-style:  border-solid      (exception: dashed for tube gaps – not a border, use stroke)

clip-path:     polygon()          (for neon arrow icons – simple filled triangle)

## 8. Opacity

disabled-state:     opacity-40  (majority: B & C; A had 30)
ghost/secondary:    opacity-60  (unanimous)
overlay/scrim:      CONTESTED:§8.opacity_overlay — providers gave [90 / 30 / 50]; no consensus
hover-feedback:     not opacity‑based — use glow brightness increase

### Browser chrome (immersive night mode)

selection:
  background:  rgba(255, 0, 51, 0.35) (unanimous: A & C; B used blue) — CONTESTED: §8.selection_bg — A and C agree on red, B used blue; majority red.
  color:       cool-white (contested)

scrollbar:
  style:       auto (dark‑themed, thin)
  width:       thin (~6px)
  track:       #0a0a14 / #1a1a2e (conflict; majority #0a0a14 from A)
  thumb:       #2a2a3e / #FF0033 / #334455 — CONTESTED: §8.scrollbar_thumb — no consensus
  thumb-hover: #FF0033 / #FF3399 — no consensus

## 8.5. Visual Effects

### 8.5.0 — Physical Material Model

material-model:    collage — layered neon signs on a building facade, viewed through a gritty urban lens

global-filter:     none (color manipulation directly via palette and glow, no body‑level filter)

global-overlay:    Urban‑grain noise layer (SVG feTurbulence, fractalNoise, baseFrequency 0.65, numOctaves 3) applied as a full‑page pseudo‑element (body::after) with mix‑blend‑mode: overlay, opacity 6–10%, monochrome, pointer‑events: none, z‑index high.

rendering-flags:
  font-smoothing:  antialiased — neon tube outlines are smooth but overlaid with grain
  image-rendering: auto
  text-rendering:  auto

### 8.5a — Color Manipulation
Not applicable. No CSS filters for grayscale/hue-rotate; color character defined by palette and glow.

### 8.5b — Surface Layering (Backdrop Filters)
Not applicable. No frosted glass or backdrop blur.

### 8.5c — Gradients & Glow

background-image:
  type:         none (no gradients)
  role:         n/a
  description:  All colors are flat per neon tube physics. Glow is a separate layer.

text-shadow:    N/A (glow applied via drop-shadow, not text-shadow)

filter: drop-shadow:
  description:  “Glow bloom” layer – duplicate neon element, apply drop-shadow(0 0 6px neonColor)
                with 60–80% opacity, blend-mode screen. One per neon color.
                Use Tailwind `drop-shadow-[0_0_6px_#FF0033]` or CSS.

### 8.5d — Texture & Noise Simulation

**urban-grain:**
  technique:    SVG feTurbulence (fractalNoise, baseFrequency 0.65, numOctaves 3)
  surface:      full‑page canvas – overlay on entire composition
  intensity:    moderate (opacity 6–10%)
  blend:        mix-blend-mode: overlay
  color:        monochrome (white/grey)
  animation:    none
  tailwind-approximation: no native equivalent; use CSS filter: url(#urbanGrain)

**scratched-metal:**
  technique:    repeating‑linear‑gradient (scratch lines) + noise tile
  surface:      sign backplates, metal brackets
  intensity:    subtle (opacity 4–15%)
  blend:        mix-blend-mode: multiply
  color:        monochrome
  tailwind-approximation: no native equivalent

**dust-grime:**
  technique:    radial‑gradient (dust accumulation on tube tops)
  surface:      top edges of neon tubes
  intensity:    barely perceptible (opacity 3–5%)
  blend:        mix-blend-mode: multiply
  color:        near-black tinted
  tailwind-approximation: no native equivalent
## 9. Components

### Icon vocabulary
icon-vocabulary:
  system:       custom neon-glyph set – triangular arrows, single‑loop ampersands, bent‑tube triangles,
                simplified Chinese radicals used directionally
  size:         w-6 h-6 (arrows), w-4 h-4 (bullets)
  color:        inherits neon color (currentColor) or fixed per role
  treatment:    no effect – flat neon fill with glow (handled by drop-shadow on parent)
  restrictions: no rounded lines beyond tube logic; no gradients; no standard icon library digits

### Image & media treatment
image-treatment:
  aspect-ratio:  aspect-[3/4] (portrait sign), aspect-[1/1] (square sign)
  object-fit:    object-cover
  filter:        brightness(0.4) saturate(0.3) — simulates night ambient
  overlay:       gradient scrim from bottom (transparent → 50% #0a0a14) to simulate wet pavement reflection
  border:        rounded-none, border-0 (or 2px dark outline)
  dark-mode:     already dark; no adjustment

### Components

**Button (Sign Frame)**
- Shape: rectangle (rounded-none, border-0)
- Fill: `bg-surface-dark` (#1a1a2e) as backplate, or transparent neon tube only
- Neon text: using custom outlined letterforms with glow
- Border: optional 2px dark outline for metal frame (`border-[#2a2a3e]` or contested outline)
- Elevation: hard cast shadow (diagonal)
- States:
  - Default: full neon intensity, glow, no flicker
  - Hover: brightness increase 10%, micro‑jitter (±1px transform) simulating transformer hum
  - Active: tube flicker (abrupt 50ms off, 100ms on)
  - Disabled: off tube (opacity-40, color shift to disabled-dim, no glow)
- Icon: optional neon arrow at edge
- Visual effects: glow bloom, urban-grain over entire button

**Card / Panel (Sign Backplate)**
- Shape: rectangle, rounded-none
- Fill: `bg-[#1a1a2e]` (surface-dark) with optional scratched‑metal overlay (multiply)
- Border: 2px dark outline (`border-[#2a2a3e]`) or none if tube‑defined
- Elevation: hard cast shadow
- Internal stacking: sign content (Chinese top 70%, English bottom 30%)
- States: none (static panel)
- May include visible transformer box (small black rectangle at bottom)

**Navigation (Sign Stack)**
- Orientation: vertical stack of sign components, tight spacing (gap-0)
- Active sign: brightest neon, full glow
- Inactive sign: dimmer (opacity-60), reduced glow
- Scrollable vertical list, each sign full width available

**Input / Form (Hand‑painted Enamel Sign)**
- Shape: rectangle, rounded-none
- Fill: dark metal backplate (surface-dark)
- Text: white or red enamel letters (not neon) – solid color `text-[#FF0033]` with no glow
- Border: 2px outline
- Focus state: neon tube outline appears (glow border with `shadow-[0_0_6px_#FF0033]`)
- Placeholder: hand‑painted‑style lettering (custom SVG), mimicking old sign painter

**Arrow (Neon Directional)**
- Shape: filled triangle or bent‑tube arrow with rounded corners
- Clip‑path: polygon() for triangle
- Fill: neon accent color (usually yellow or blue)
- Glow: same as neon text
- Position: at sign edge, pointing direction

**Badge (Certificate Number / License)**
- Shape: small rectangle, rounded-none
- Fill: `bg-[#1a1a2e]` (or none if empty)
- Text: white cool-white monospace (contested cool-white), font-size text-xs
- Border: none (sits on sign frame)
- Position: bottom right of sign

**Empty State / Off Sign**
- When sign is unlit: display the metal backplate and bracket structure (surface-dark, visible texture) with dim tube remnants (opacity-40, no glow). Use as placeholder for loading or disconnection.

## 10. Layout

### Grid & Density
- Vertical stacking is primary axis. Signs occupy the full height of their container, one after another, with no gaps between sign edges.
- Each sign is a rectangle: 70% Chinese (top) + 30% English (bottom). Alternative: left 60% Chinese / right 40% English vertical split.
- Content hierarchy: shop name → product category → license number → directional arrow.
- Density: 2–6 signs per “facade” (viewport). Cluster is a tight stack with overlapping allowed.
- Negative space (empty sky) carved between clusters.

### Alignment
- Chinese characters: center‑aligned within sign block.
- English: right‑aligned or below Chinese, smaller.
- Certificate number: bottom right.

### Breakpoints
375px  (single‑column mobile):
  - One sign per viewport (full height).
  - Signs stack vertically, each full width.
  - Chinese occupies 70% of height, English 30%.
  - No horizontal overlap.
  - Font sizes reduced by one step.

768px  (tablet):
  - 2–3 signs per viewport, tight stacking.
  - Signs may have slight angular offsets (rotation) to simulate different building planes.
  - English may sit vertically beside Chinese (left 60% / right split).

1024px+ (desktop):
  - 4–6 signs per viewport, dense vertical stack.
  - Overlap allowed: signs protrude forward, with z-index layering.
  - Horizontal spread: clustered at left or right, leaving two‑thirds empty sky.
  - Sidewalk reflector effect (low op reflections at bottom).

### Motion Block

motion:
  transition-duration:        50ms (flicker), 2s (fade up/down), 3–4s (breathing)
  transition-timing-function: steps(1) for flicker; ease-out for fade; linear for breathing
  transition-property:        opacity, filter (glow intensity)
  transition-delay:           sequential: Chinese first (~1s), then English, then accent tubes (each group ~0.5s apart)
  transition-behavior:        allow-discrete (for flicker)

  animation:
    flicker:       op:1 → 0.3 + filter:drop-shadow(0 0 0px) at steps(1) over 100ms, loop random intervals
                   Trigger: on-state-change (active/disabled)
    breathe:       filter:drop-shadow(0 0 4px) → drop-shadow(0 0 10px) over 3–4s linear, loop
                   Trigger: looping (one tube per sign)
    sequential-lit: Chinese: opacity 0→1 over 500ms delay 0; English: delay 1s; accent: delay 2s
                   Trigger: on-load
    micro-jitter:  transform: translate(0,0) → translate(±1px, ±1px) over 2s steps(2) loop
                   Trigger: looping (transformer hum, 2 Hz)
    headlight-sweep: background-color: #0a0a14 → #1a1a3e over 3s ease-out, then revert over 5s
                   Trigger: on-scroll (rare)
    rain-streak:   background-position horizontal pulse, 0.5s
                   Trigger: on-state (environmental)

  transform-at-rest:           all elements at transform: none
  transform-on-interact:       hover: scale(1.02) + brightness(1.1) over 150ms ease-out;
                               active: scale(0.98) over 50ms steps(1)
  transform-style:             flat (no 3D)
  backface-visibility:         hidden (not used)

## 11. Design System Notes

### 11a. Use Constraints

This style is appropriate for:
- Retail, hospitality, and CPG applications that want an energetic, night‑market atmosphere
- Game interfaces (HUD, menus, in‑world signage)
- Brand pages for street food, nightlife, or urban culture
- Dark‑mode‑first environments where density and glow are assets

This style is wrong for:
- Light‑mode or pastel commercial interfaces (travel booking, healthcare)
- Minimalist/Swiss design systems (clean, lots of whitespace)
- Data‑heavy dashboards requiring high legibility and low visual noise
- Formal, professional, or corporate contexts (banking, legal)

### 11b. Prompt Phrases

1. “Treat the screen as a building facade: dense vertical stacking of glowing rectangular signs with visible brackets and regulation gaps.”
2. “Chinese characters (Traditional) are 3× larger than English; strokes are chunky, bent‑tube with rounded corners and joint gaps.”
3. “All neon colors are saturated, flat, and applied with a soft outer glow (blur 2–4px) – never gradients.”
4. “Hard diagonal cast shadows (45°) from every sign element, with no blur on the shadow edge.”
5. “Allow 15–30% of tubes to be off (dim, desaturated) for wear – and one mismatched tube replacement.”
6. “Add faint concrete‑dust grain (feTurbulence, fractalNoise) over the entire composition at 6–8% opacity.”
7. “Animations are abrupt on/off flicker, sequential lighting (Chinese → English → accent), and one per‑sign 0.5 Hz breathe.”
8. “Sign frames are rectangular only – no curves, no decorative borders, no rounded corners.”

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description. Minimum 4 rules, maximum 8.

rule: Signs must be strictly rectangular with no ornamental framing.
do:   Use rectangular sign frames (rounded-none, border-0) with visible metal brackets. All edges are straight; no rounded corners, circles, or decorative borders appear anywhere.
avoid: Using rounded frames, circular medallions, or any decorative border profiles—these break the industrial, regulation‑compliant sign language and introduce softness.

rule: Chinese characters dominate the visual hierarchy and are rendered as custom bent‑tube neon outlines.
do:   Chinese text occupies the top 70% of the sign, using custom outlined letterforms with bent‑tube corners and joint gaps (1–3px non‑glowing segments). Strokes are chunky, 3× larger than English, and glow with a soft drop-shadow (2–4px blur).
avoid: Using standard web fonts (e.g., sans‑serif system fonts) for the primary Chinese lettering—this removes the handcrafted, sign‑painter quality and the distinctive bent‑tube silhouette.

rule: Neon fills must be flat, saturated colour with a soft outer glow; gradients are forbidden on the tube.
do:   Apply flat neon fill (no gradient) to all tube strokes and reinforce with a drop-shadow glow in the same hue (blur 2–4px). A subtle thin‑film iridescent gradient on the glass surface overlay is permitted as a separate layer, not on the tube fill itself.
avoid: Using gradient fills directly on the neon tube—this flattens the cylindrical volume perception and contradicts the physical construction.

rule: Colour palette per sign is limited to 2–4 neon hues; overlapping tubes must be different colours.
do:   Restrict each sign to 2–4 neon colours, mixing warm and cool. When tubes cross, they must be of different colours (e.g., red over blue) so their glows remain distinct; same‑colour tubes never overlap.
avoid: Overlapping two tubes of identical colour—their glow merges into a single blob, destroying the separate stroke legibility and the sign’s structural clarity.

rule: The background is always near‑black with a purple/blue bias; pure white text is never used.
do:   Keep all backgrounds at `#0a0a14` (surface‑dark) with a subtle blue/purple undertone. All “white” text is a tinted cool white (e.g., `#e8ecf0`)—never `#FFFFFF`.
avoid: Setting backgrounds to light colours or using pure `#FFFFFF` for any text—this destroys the night‑market atmosphere and makes the glow appear washed out.

rule: Depth is conveyed by hard diagonal cast shadows with zero blur, not by rounded elevation.
do:   Give every sign element a hard cast shadow (45° diagonal, `blur(0)`, colour matching the dark background). The shadow’s sharp edge simulates the physical gap between the sign and the wall.
avoid: Using soft box‑shadows, blur‑based elevation, or rounded depth lifts—these contradict the rigid, planar construction of flat metal signs.

rule: Motion is mechanical, abrupt, and loop‑driven; smooth morphing or scrolling animations are absent.
do:   Animate state changes with `steps(1)` flicker (50ms off/100ms on) and sequential lighting (Chinese → English → accent, each with a 0.5s delay). Apply a 2 Hz micro‑jitter (`translate(±1px)`) for transformer hum. Never use easing for these mechanical effects.
avoid: Using smooth morphing, continuous scrolling, or ease‑in‑out transitions on signs—they belong to digital interfaces, not to physically mounted neon shop signs.

### 11d. Variation Bounds

| Axis | Low Bound | High Bound |
|------|-----------|------------|
| Dense vs Sparse | 2 signs per facade, large negative space | 6 signs per facade, tight stacking with overlap |
| Clean vs Weathered | Fresh neon, crisp glow, no gaps | Old burn‑out, dust accumulation, 30% broken tubes |
| Bright vs Dim | High‑contrast electric glow (100% intensity) | Faded, low‑power neon (60% intensity, reduced glow) |
| Authentic vs Remix | Period‑correct 1980s–90s Hong Kong sign | Futuristic glitch‑core: tube flicker as digital artifact |
| Horizontal vs Vertical Dominance | Wide billboard layout (2:1 aspect) | Narrow street‑canyon banner (1:3 aspect) |
| Regulated vs Rebellious | Strict compliance: fire‑safety margins, exact projection limits | Push limits: sign overshoots frame, protrudes past 4‑foot limit |
| Day vs Night | Sign off – high contrast metal and glass in sunlight | Sign on – pure glow against dark wall (default) |

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts. Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
The facade is a dense stack of 3–4 rectangular signs, each containing large custom‑outlined Chinese characters (top 70%, font‑size roughly `text-5xl` to `text-7xl` depending on character count) in saturated neon colours (e.g., red `#FF0033`, blue `#00ADEF`, yellow `#FFD700`), with a soft drop‑shadow glow (blur 2–4px, same hue). English text sits below in a smaller, cool‑white neon tint (`#e8ecf0`) at `text-base` to `text-lg`. Between signs there is no gap; they butt directly against each other, each casting a hard diagonal shadow (45°, `blur(0)`, `#0a0a14`). The background is a deep near‑black `#0a0a14` with a subtle blue/indigo bias, overlaid with a faint concrete‑dust grain (feTurbulence fractalNoise, 6–8% opacity, multiply). One or two signs show a visible bracket (thin metal strip) on the left edge, and a small transformer box (solid black rectangle) at the bottom. All signs are fully lit, with one tube off for wear (dim, desaturated to opacity‑40, no glow) on a side accent. The composition has no whitespace between signs, only the dark wall at the top and bottom margins.

### 11e.ii — Maximum Expressiveness
Seven signs fill the viewport in a tight vertical column, with slight angular offsets (±3° rotation) to simulate misaligned mounting. Three signs protrude forward (z‑index layering) so that their left edges overlap the sign below, creating a dense, three‑dimensional cluster. Chinese text is highly visible: bold bent‑tube outlines with glowing joint gaps, colours alternating between red, blue, yellow, and green (e.g., `#FF0033`, `#00ADEF`, `#FFD700`, `#39FF14`). One sign contains a mismatched tube replacement (e.g., a pink tube where yellow was expected). The sequential‑lit animation plays on load: Chinese fades in over 500ms, after a 1s delay English fades in, and after a further 2s accent tubes light up. Simultaneously, the `breathe` animation cycles one tube per sign (3–4s linear loop) and the `micro‑jitter` hum runs at 2Hz on all lit signs. A `headlight‑sweep` flashes across the background (brightness spike to `#1a1a3e`) once. Hard diagonal shadows are intensified, and a wet‑pavement reflection gradient (transparent → 50% `#0a0a14`) sits at the bottom quarter of the composition. The concrete grain overlay persists at 8% opacity. Visible bracket details, wire conduits, and one rusted bolt (small orange dot) appear on the frame edges. The overall feel is chaotic, vibrant, and overwhelmingly nocturnal.

### 11e.iii — Data Context
When forced to display numeric or status information, the system subverts the sign‑language into a series of miniature neon panels. Each data point becomes a small rectangle (w‑40 h‑16) containing a certificate‑number‑style badge: monospaced digits (e.g., “128.4”) in cool‑white neon (`#e8ecf0`, glow 2px) on a surface‑dark backplate (`#1a1a2e`). Positive deltas are shown in green neon (`#39FF14`), negative in red (`#FF0033`); flat values remain white. A simple bar chart is rendered as a row of vertical neon tubes (height proportional to value) inside a dark panel, each tube filled with a single neon colour and no gradient. Grid lines are faint 1px strokes in a dimmed outline colour (`#2a2a3e`). Labels are set in a small English hand‑painted enamel style (`text-xs`, solid red `#FF0033`, no glow) atop each tube. The background remains `#0a0a14` with grain. No interactive flicker or breathing is applied to data elements—they are static, preserving legibility. This composition avoids dashboard conventions, instead presenting data as an extension of the physical sign system: a technician’s measurement board temporarily attached to the facade.

### 11f. Sources

This subject has minimal verified imagery. The visual claims below should be treated with caution.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** **Hong Kong Neon Signage — Regulation & Letterforms** is the vernacular visual identity system produced by the massed neon signage of Hong Kong, predominantly from the 1950s through the 2010s, shaped by colonial-era building and sign regulations and the hand-drawn lettering conventions of anonymous sign-painters and neon benders. It encompasses both Chinese calligraphic and typographic forms (Fang Song, Li Shu, Hei) and imported Latin alphabetic faces (Helvetica, Frankfurter, Arial). No single designer or foundry is documented; the system is attributed to the collective, generational craft of local sign shops.

**Verified imagery sources.** 1 URLs verified against institutional servers, distributed across:
- Luster Publishing — 1 URL(s)

No top imagery references are currently recorded. Key institutional collections or verified online image sources remain unlisted.

**Named typefaces.** The typography of this style is attested as:
- Chinese lettering (custom hand-drawn) ( — attestation: attested) — rendered here as bespoke imagery — no web-font substitute
- Fang Song (仿宋体) ( — attestation: conventional) — no Google Fonts substitute available
- Li Shu (隶书) ( — attestation: conventional) — no Google Fonts substitute available
- Hei (sans-serif generic) ( — attestation: conventional) — no Google Fonts substitute available
- Helvetica ( — attestation: inferred) — rendered here in Inter as the closest open substitute
- Frankfurter ( — attestation: inferred) — no Google Fonts substitute available
- Arial ( — attestation: inferred) — rendered here in Arimo as the closest open substitute
- Chinese Hei ( — attestation: inferred) — no Google Fonts substitute available

**Honest gaps.** The most significant gap is colour: no verified Munsell or Pantone values exist for any specific sign, no spectral measurements of gas discharge in Hong Kong signs have been taken, and no record of phosphor formulations used by local shops has been published. This absence blocks any accurate colour reproduction or material conservation standard. Scientific analysis of decommissioned tubes by a conservation lab (e.g., M+ has capability but results not published) would resolve these deficits.
