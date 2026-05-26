---
version: alpha
name: "Cockpit Instrument Panel"
description: "A functional, high-contrast design system inspired by postwar aircraft cockpits and modern glass cockpits. Monospaced green-on-black typography, geometric precision, and utilitarian minimalism define this style for data-dense interfaces where readability under stress is paramount."
colors:
  panel-background: "#0A0A0A"
  panel-background-variant: "#1A1A1A"
  text-primary: "#F0F0F0"
  text-night: "#7FFF7F"
  text-daylight-alt: "#F5E6A0"
  accent-amber: "#FFCC00"
  alert-red: "#FF3B30"
  outline-day: "#808080"
  outline-night: "#4A7A7A"
typography:
  display:
    fontFamily: "Digital-7, monospace"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0.025em
    fontVariantNumeric: tabular-nums
  headline:
    fontFamily: "Arial Narrow, sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.025em
    textTransform: uppercase
  title:
    fontFamily: "Arial Narrow, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.05em
    textTransform: uppercase
  body:
    fontFamily: "Arial Narrow, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: -0.025em
    textTransform: uppercase
  label:
    fontFamily: "Arial Narrow, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: -0.05em
    textTransform: uppercase
rounded:
  default: 0px
  card: 0px
  button: 0px
  input: 0px
  chip: 0px
spacing:
  page-edge: 16px
  component-padding: 8px
  section-gap: 24px
  instrument-gap: 16px
  tight-gap: 8px
  component-height-sm: 32px
  component-height-md: 48px
  component-height-lg: 64px
  icon-size: 16px
components:
  button-default:
    backgroundColor: "{colors.panel-background}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.button}"
    padding: "8px"
    height: "32px"
  numeric-readout:
    backgroundColor: "{colors.panel-background-variant}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.default}"
    padding: "8px"
    height: "48px"
  warning-flag-critical:
    backgroundColor: "{colors.alert-red}"
    textColor: "#000000"
    rounded: "{rounded.default}"
    padding: "4px"
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
    - host: "quicksearch.dla.mil"
      count: 1
  imagery_urls:
    - url: "https://quicksearch.dla.mil/qsDocDetails.aspx?ident_number=239843"
      host: "quicksearch.dla.mil"
      institution: "Defense Logistics Agency (DLA)"
      confidence_original: medium
  typefaces_attested:
    []
  flags:
    - "one_usable_url_only"
    - "no_typography_extracted"
    - "no_colour_extracted"
    - "1_rate_limited_urls_pending_retry"
    - "1_robots_disallowed_urls"
  honest_gaps:
    []
---
# Design System: Cockpit Instrument Panel

## 0. Taxonomy & Identity
- entity-type: interface / system / environment
- artefact-family: dashboard / console / control panel
- technique: digital raster
- movement-lineage: vernacular commercial style
- era: postwar
- geography: platform-neutral
- domain: transport
- formal-traits: grid-based, geometric, utilitarian, informational
- color-logic: monochrome [unverified] — though one provider suggests spot‑colour logic; majority favours monochrome
- typography-mode: monospace
- texture: matte, grainy, halated
- function: monitor
- provenance: revival / homage

## 1. Overview
The Cockpit Instrument Panel design system translates the stark, high‑stakes typographic logic of aircraft cockpits into a functional digital interface. Born from postwar aviation instrumentation through to modern glass cockpits, this aesthetic is built for instant reading under stress, low light, and zero ambiguity. Every pixel serves a purpose: maximise legibility, minimise interpretation.

The system juxtaposes analog dial refinement with digital readout precision. Surfaces are matte black or very dark gray, providing a non‑reflective canvas for backlit text and luminous indicators. Typography is the hero — monospaced digits for numeric values, condensed sans‑serif for labels, both pushed to fill their bounds. The result is information‑dense, high‑contrast, and aggressively unadorned.

**What makes it recognisable:**
- Backlit or edge‑lit text with soft halation glow
- All‑caps, tightly tracked labels in fixed‑width windows
- Monospaced digital readouts (Segment7, LCD fonts)
- Geometric pointer arrows, dot markers, crosshairs
- Hard 1‑pixel borders enclosing each instrument
- Functional lines, arcs, and tick marks only
- Night‑vision green or amber text on black
- Very subtle film grain and backlight drift

**What would break it:**
- Organic shapes, freehand curves, or rounded corners
- Gradients used decoratively (only functional gradients for glass reflection)
- Vertical typography
- Any element that does not convey time‑critical data
- Soft shadows or excessive blur

## 2. Constants
- Light Mode: variant (daytime with bright white backlight; background stays dark)
- Dark Mode: primary (night mode with dimmed green/amber backlight; dim pulse present)
- Responsive: yes — at 375px instruments stack vertically (single‑column), at 768px revert to multi‑column grid (2×2, 2×3, 3×1). Individual component sizes remain fixed.
- States: Default, Active (pressed switch/button), Warning (flashing red/amber), Disabled (dimmed at 40% opacity). Hover is not visually expressed (no fill or colour change); active state may show a subtle pressed bevel.
- surface-simulation: bevel-plastic — molded ABS panel with matte finish, engraved borders, and backlit readouts; simulates a physical instrument panel surface with subtle film grain and glass reflection overlays.

## 2a — Interaction Model

hover-delta:        none — no hover state; instantaneous state changes without visual feedback
active-delta:       bevel-depress — pressed state reverses the engraved bevel (top/left highlight becomes bottom/right shadow, content shifts 1px down/right)
focus-style:        glow-ring — a 1px solid outline in accent-amber (#ffcc00) with a 2px spread of rgba(255,204,0,0.3) for keyboard focus on interactive instruments
transition-duration:0ms — all state transitions are instantaneous; no easing curves
transition-easing:  none
exempt-animations:  backlight-pulse — the 10s brightness oscillation must continue even during state changes

## 3. Colors
*All hex values are tagged [unverified] because no provider cited a colour reference or Pantone source. Values below represent majority agreement.*

- `panel-background` (#0a0a0a) [unverified] — Matte black panel surface
- `panel-background-variant` (#1a1a1a) [unverified] — Slightly lighter dark gray for contrast panels
- `text-primary` (#f0f0f0) [unverified] — White text for daytime high‑visibility readouts
- `text-night` (#7fff7f) [unverified] — Night‑vision green text for night mode
- `text-daylight-alt` (#f5e6a0) [unverified] — Yellowish daylight‑visible text (optional direct‑sunlight variant)
- `accent-amber` (#ffcc00) [unverified] — Amber warning flags, caution indicators, critical values
- `alert-red` (#ff3b30) [unverified] — Danger/warning flags, error indicators
- `backlight-night` — CONTESTED:§3.backlight_tint — providers gave: [#1a3a3a / #4a7a7a / gradient range]; no consensus on single hex value
- `outline-day` (#808080) [unverified] — Dim gray borders for daytime mode
- `outline-night` (#4a7a7a) [unverified] — Blue‑green wireframe/dial arcs in night mode (optional)

**Dark mode swap:** All text colours swap to `text-night` or `accent-amber` as primary; `panel-background` remains unchanged; backlight glow reduces to 30% intensity.

## 4. Typography
*All typeface names are contested because no provider cited a foundry or year. See contestation map.*

- **display** (large numeric readouts):
  - font-family: CONTESTED:§3.primary_typeface — providers gave: ["Digital-7", "DB LCD Temp", "Segment7"]; none cited foundry
  - font-size: text-5xl / text-6xl (48px–60px)
  - font-weight: font-bold (700)
  - line-height: leading-tight (1.25)
  - letter-spacing: tracking-wide (loose for digit legibility)
  - text-transform: normal-case (digits only)
  - font-variant-numeric: tabular-nums (required)

- **headline** (warning flags, critical alerts):
  - font-family: CONTESTED:§3.secondary_typeface — providers gave: ["FAA-Font", "DIN 1451 Engschrift", "Arial Narrow"]; none cited foundry
  - font-size: text-2xl / text-3xl (1.5rem–1.875rem)
  - font-weight: font-bold
  - line-height: leading-tight (1.25)
  - letter-spacing: tracking-tight (-0.025em)
  - text-transform: uppercase

- **title** (instrument labels, section headers):
  - font-family: CONTESTED:§3.secondary_typeface (same as headline)
  - font-size: text-lg / text-xl (1.125rem–1.25rem)
  - font-weight: font-semibold (600)
  - line-height: leading-tight (1.25)
  - letter-spacing: tracking-tighter (-0.05em)
  - text-transform: uppercase

- **body** (unit labels, secondary data):
  - font-family: CONTESTED:§3.secondary_typeface
  - font-size: text-sm / text-base (0.875rem–1rem)
  - font-weight: font-medium (500)
  - line-height: leading-normal (1.5)
  - letter-spacing: tracking-tight (-0.025em)
  - text-transform: uppercase

- **label** (small instrument labels, sub‑headings):
  - font-family: CONTESTED:§3.secondary_typeface
  - font-size: text-xs (0.75rem)
  - font-weight: font-medium (500)
  - line-height: leading-none (1)
  - letter-spacing: tracking-tighter (-0.05em to -0.07em)
  - text-transform: uppercase

- **Google Fonts substitute** (rendering pipeline): CONTESTED:§3.google_fonts_substitute — providers gave: [Share Tech Mono + Oswald / DIN (substitute)]; no majority with evidence

Monospace font must support tabular figures. Condensed sans must support negative tracking.

## 5. Elevation
- Flat depth model — no shadow hierarchy. The only surface layering is an optional engraved bevel effect:
  - Top/left highlight: 1px solid rgba(255,255,255,0.15)
  - Bottom/right shadow: 1px solid rgba(0,0,0,0.5)
- Digital readout boxes may use `shadow-inner` for a recessed appearance.
- No `shadow-*` classes used except on pressed button states (`shadow-sm`).
- Stacking context: `z-0` for all base content; `z-10` for warning flags; `z-20` for glass reflection overlay; `z-50` for modal overlays.

## 6. Spacing & Sizing
- **padding (component‑internal):** p-2 (8px) inside instrument panels
- **padding (section‑internal):** p-1 (4px) around tick marks and labels
- **page‑edge:** p-4 (16px) outer panel margin
- **margin (between components):** gap-4 (16px) between instruments in grid; gap-2 (8px) for tighter packing
- **margin (between sections):** gap-6 (24px) between instrument clusters
- **component‑heights:**
  - sm: h-8 (32px) — small button/switch
  - md: h-12 (48px) — standard instrument window (numeric readout box)
  - lg: h-16 (64px) — large primary numeric display
- **icon‑size:** w-4 h-4 (16px) for bug marks, pointers, crosshairs
- **avatar‑size:** n/a (not applicable)

## 7. Borders
- **border‑radius:** `rounded-none` — all rectangles are sharp. Circular dials use clip‑path: `circle(50%)`.
- **border‑width:**
  - default: `border` (1px solid)
  - emphasis: `border-2` (2px) for active states, focus rings, warning flags
- **border‑style:** `border-solid`
- **border‑image:** none
- **clip‑path:** `polygon(0 0, 100% 0, 100% 100%, 0 100%)` for rectangular regions; `circle(50%)` for dial containers

## 8. Opacity
- **disabled‑state:** `opacity-40` (40% — inoperative instrument)
- **ghost/secondary:** `opacity-60` (60% — less important labels)
- **overlay/scrim:** `opacity-75` (75% — warning flag partially covering dial)
- **hover‑feedback:** none — no opacity change on hover (instantaneous state changes)

**Browser chrome (optional – for immersive dark fit):**
- **selection:** background rgba(127,255,127,0.25) night mode / rgba(240,240,240,0.25) day mode; colour inherit
- **scrollbar:** styled; width thin (6px); track `#0a0a0a`; thumb `#4a7a7a` (night) / `#666` (day); thumb‑hover `#7fff7f` (night) / `#999` (day)

## 8.5. Visual Effects

### 8.5.0 — Physical Material Model

material-model:    bevel-plastic — molded ABS instrument panel with matte finish, engraved borders, and backlit readouts

global-filter:     none — no global filter is applied; the backlight-pulse animation is per‑element, not body‑wide

global-overlay:    Film grain via body::after pseudo‑element:
                   SVG feTurbulence (baseFrequency: 0.65, numOctaves: 3, type: fractalNoise)
                   blend: overlay, opacity: 8%, position: fixed, z‑index: 9998, pointer‑events: none

rendering-flags:
  font-smoothing:  antialiased — ensures crisp edge‑lit text rendering
  image-rendering: auto — no pixelation needed; raster elements are smooth
  text-rendering:  auto — standard quality for backlit text

### 8.5a — Color Manipulation
- **filter:** none globally. A subtle `brightness` animation (`backlight‑pulse`) oscillates brightness between 1.0 and 0.998 over 10 s ease‑in‑out, applied only to numeric readout windows and backlit labels.
- **mix‑blend‑mode:** `screen` for glass reflection overlay (diagonal white streak); `multiply` for optional red light leak in night mode.
- No chromatic aberration by default (optional variation: red/blue shift on digital readouts at 0.5px offset).

### 8.5b — Surface Layering
- **backdrop‑filter:** not present. Glass reflection is a separate overlay layer with `mix‑blend‑mode: screen`.
- **paired‑fill:** not used.

### 8.5c — Gradients & Glow
- **background‑image:** none (all fills are solid). Exception: glass reflection uses a diagonal `linear-gradient` pseudo‑element:
  background-image: linear-gradient(
    135deg,
    transparent 40%,
    rgba(255,255,255,0.15) 42%,
    rgba(255,255,255,0.2) 45%,
    transparent 47%
  );
- **text‑shadow (halation):** applied to all bright text on dark surfaces:
  - White text: `0 0 4px currentColor, 0 0 8px color-mix(in srgb, currentColor 50%, transparent)`
  - Green text: `0 0 4px #7fff7f, 0 0 8px rgba(127,255,127,0.3)`
  - Amber text: `0 0 4px #ffcc00, 0 0 8px rgba(255,204,0,0.3)`
- **filter: drop‑shadow:** optional additive glow on warning flags (red glow behind flags: `0 0 4px rgba(255,51,48,0.5)`).
- No animated gradients.

### 8.5d — Texture & Noise Simulation
- **Film grain:**
  - technique: SVG `feTurbulence` overlay on full panel canvas
  - parameters: `baseFrequency: 0.65–0.8`, `numOctaves: 2–3`, `type: fractalNoise`
  - surface: full‑page canvas
  - intensity: barely perceptible (`opacity: 5–10%`, `mix-blend-mode: overlay`)
  - colour: monochrome grayscale
  - animation: none
- **CRT dither (optional variation):**
  - technique: `repeating-linear-gradient` scanlines (1px transparent, 1px black)
  - parameters: 2px cycle, 0deg
  - surface: digital readout areas only
  - intensity: subtle (`opacity: 5–10%`, `mix-blend-mode: multiply` or `overlay`)
  - colour: black
  - animation: none
- **Glass reflection streaks** appear as both a surface effect (8.5c) and a component overlay (see §9).
## 9. Components

### Icon vocabulary
- **system:** geometric arrows (filled triangle for pointers), small circle/dot for “bug” markers, crosshair/reticle for flight directors
- **size:** w-4 h-4 (16px) for pointer arrows; w-2 h-2 (4px) for dot marks
- **colour:** inherits `currentColor` (always white, amber, or green depending on mode)
- **treatment:** no glow, no filter, always solid fill
- **restrictions:** no outline‑only icons, no organic shapes, no freehand strokes

### Image & media treatment
Not applicable — no photographic imagery in this style.

### Buttons / Switches
- **shape:** rectangular (`rounded-none`) or round for rotary switches (`rounded-full`)
- **fill:** `bg-panel-background` (solid dark, same as panel surface)
- **border:** `border` (1px solid), colour `outline` (#808080)
- **label:** white uppercase condensed sans (title role)
- **states:** default (no shadow), active (pressed) — inner shadow 1px dark, text dim to 60%; disabled: `opacity-40`
- **no hover effect** (state change only on press)
- **no fill animation**

### Panels / Instrument Windows
- each instrument is a self‑contained rectangle
- fill: `bg-panel-background-variant` (#1a1a1a)
- border: `border` (1px solid) colour `outline` (dim gray) or `text-primary` (white)
- optional raised bevel: box‑shadow as described in §7
- corner: `rounded-none`
- padding: `p-2`
- no elevation

### Numeric Readout Box
- aspect ratio: roughly 1:3 (tall and wide) for digital values; square for analog dials
- fill: `bg-panel-background-variant` with `shadow-inner`
- border: `border border-outline-variant` (#555555)
- typography: display role (monospaced, bold, with halation glow)
- text alignment: left‑aligned or centre‑aligned depending on instrument
- optional 7‑segment font for LCD simulation

### Warning Flags
- rectangular tabs overlapping dial area
- fill: `alert-red` (#ff3b30) or `accent-amber` (#ffcc00)
- text: headline role, all‑caps, white or black depending on fill contrast
- border: `border-2` (emphasis)
- animation: instant snap in/out (2‑3 frame flip, no easing)
- no glow

### Slider / Vertical Scale
- vertical linear track: 1px line, colour `text-primary` dimmed
- indicator: triangular arrow icon (filled, colour `accent-amber` or `text-primary`)
- numeric readout to the right of slider: display role, `text-sm`
- no thumb, only the triangle along track

### Crosshair / Reticle
- thin white lines (1px solid with reduced opacity)
- centre dot at intersection
- within circular/flight director instruments

### Loading State
- rotating dash ring: dashed circular outline (`border-dashed`, `border-2`) with stroke‑dashoffset animation
- optional: gauge needle sweep (smooth linear rotation)

### Primary/Secondary/Destructive Button Distinction
Not applicable; all buttons are equal. Destructive actions (if needed) use `alert-red` fill.

## 10. Layout
- **spacing cadence:** 8px base unit, instruments placed with 16px gaps (`gap-4`) in grid (optional tighter 8px gap for high‑density panels).
- **grid tendency:** fixed grid of instruments (2×2, 1×3, 3×1, 2×3) — no flexible wrap.
- **density:** high — each instrument occupies maximum feasible space with minimal whitespace inside.
- **section separation:** each instrument has its own border; no extra dividers between groups.
- **alignment:** left‑aligned for labels and numbers within instrument windows; centre‑aligned for dial indicators and numeric readouts.
- **breakpoint behaviour:** 
  - 375px: single‑column vertical stack, each instrument full width, same spacing.
  - 768px: 2‑column grid.
  - 1024px+: 3–4‑column grid (preserving instrument aspect ratios).
- **motion block:**
  - `transition-duration`: 0ms for all numeric updates and state changes (instant); 200–300ms for gauge needle sweeps (linear); 0ms for warning flag appearance (steps(1)).
  - `transition-timing-function`: `linear` for smooth sweeps; `steps(1)` for digital snap.
  - `transition-property`: `transform` for needle rotation; `opacity` for flag visibility; `all` for readouts set to `none`.
  - `animation`:
    - `gauge-sweep`: 0deg to targetDeg over 200ms linear; trigger `on-data-update`.
    - `flag-flip`: scaleY(0) to scaleY(1) over 100ms steps(1); trigger `on-state-change`.
    - `backlight-drift`: brightness 1.0 → 0.998 → 1.0 over 10s ease-in-out infinite; trigger looping.
    - `attitude-horizon`: rotate according to roll; smooth linear interpolation per frame.
  - `transform-at-rest`: all elements rest at `transform: none`.
  - `transform-on-interact`: button press: `translateY(1px)` instantaneous.
  - No parallax, no scrolling.

## 11. Design System Notes

### 11a. Use Constraints
Appropriate for: data‑dense interfaces where readability under stress is critical — flight dashboards, mission control, security monitoring, industrial HMI panels, driver information displays, high‑frequency trading terminals.
Wrong for: whimsical consumer apps, lifestyle or brand‑oriented marketing sites, editorial design with large hero imagery, mobile camera‑first UIs, children’s apps, anything requiring warmth or personality.

### 11b. Prompt Phrases
- “instant‑read typography with monospaced green on black”
- “functional minimalism, no decorative elements, all data”
- “harsh backlight glow and halation around every character”
- “tightly tracked all‑caps labels in fixed windows”
- “glass cockpit minimalism with analog‑inspired precision”
- “instrument panel grit via subtle film grain overlay”
- “gamma‑corrected contrast for low‑light legibility”
- “two‑colour warning palette: amber caution, red danger”

### 11c. Do / Avoid Block

**11c.** Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description.

rule: Every element is geometrically precise; no organic or freehand shapes. Text is strictly horizontal except on dial arcs.
do:   Use only horizontal text — vertical type is forbidden except on dial arc labels.
avoid:Any organic or freehand shapes — every element is ruler‑straight or compass‑drawn.

rule: Color palette is limited to 1–2 functional colors per panel zone; gradients are only used to simulate real physical effects.
do:   Keep to 1–2 colours per panel zone (one for text, one for accent).
avoid:Gradients unless they simulate functional glass reflection or backlight bleed.

rule: Numeric readouts must fill their container for maximum legibility; hover effects that change color, scale, or opacity are unused.
do:   Ensure numeric readouts fill their container — text should appear to “fill the window”.
avoid:Hover effects that change colour, scale, or opacity — only active (pressed) states have visual feedback.

rule: Lighting is achieved through halation and backlight glow; drop shadows are reserved for text and indicators only, not containers.
do:   Include subtle halation and backlight glow for authenticity.
avoid:Drop shadows on containers — only text and indicators receive glow.

### 11d. Variation Bounds
- **Clean vs. worn:** increase halation + add smudge/scratch overlay; degrade edge crispness
- **Analog dominant vs. digital dominant:** more dials (tick marks, needles) vs. LCD 7‑segment style
- **Daytime vs. night mode:** swap white text for green/amber, adjust glow intensity
- **Authentic 1970s panel vs. modern glass cockpit:** incandescent glow, thicker borders, more tick marks, film grain vs. sharper edges, higher contrast, synthetic vision, minimal grain

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts. Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
The system in its default, single-composition state. A single instrument panel window occupies the centre of the viewport. Background: `bg-panel-background` (#1a1a1a). The window is a rectangular panel with `border` 1px solid `outline` (#808080), fill `bg-panel-background-variant` (#1a1a1a), padding 8px. Inside, a numeric readout displays a four‑digit value in monospaced bold white text (display role), left‑aligned, filling the container width. No glow, no animation, no warning flags. The layout is minimal with no additional decoration. Spacing conforms to 8px base unit.

### 11e.ii — Maximum Expressiveness
The system at its most visually complex: three overlapping instrument windows arranged in a horizontal strip (1×3 grid, 8px gaps). The left window contains an analog dial with a needle (gauge-sweep animation, 200ms linear) and tick marks; a crosshair reticle (thin white 1px lines, centre dot) overlays the dial at the intersection. The centre window shows a numeric readout with halation glow (drop-shadow on text) and a warning flag (`alert-red` #ff3b30) overlapping the upper‑right corner, with instant snap animation (flag-flip, 100ms steps(1)). The right window contains a vertical slider with amber (`accent-amber` #ffcc00) triangular indicator and numeric readout. Across the entire composition, the backlight-drift animation (brightness 1.0 → 0.998 → 1.0 over 10s ease-in-out infinite) is active on the body, perceived as a subtle incandescent pulse. A film grain overlay (opacity 10%, multiply blend) adds panel grit. Smudge and scratch overlay (opacity 5%) degrades edge crispness. All text shows halation and backlight glow.

### 11e.iii — Data Context
When the system is driven by live data — status indicators, numeric metrics, or alert conditions — the visual language adapts as follows. Numeric readouts continue to fill their containers and update instantaneously (0ms transition). Status values are communicated exclusively through warning flags: `accent-amber` (#ffcc00) for cautionary states, `alert-red` (#ff3b30) for critical states. No green or success color is used; ok status is indicated by the absence of any flag. Delta indicators (rising/falling metrics) are not color‑coded but displayed as raw numeric changes. For tabular data, each row is a rectangular panel with the same border and background as an instrument window. Labels are condensed sans in white, values are monospaced. Alarm bands or secondary accent colors are not introduced — the palette remains the two‑color warning system plus white text. The surface treatment (grain, scanlines, backlight drift) persists identically.

### 11f. Sources

This subject has minimal verified imagery. The visual claims below should be treated with caution.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** **Cockpit Instrument Panel** is the subject of this source record. No documented dates or attribution are available; no designer, foundry, or period has been recorded in the forensic seed. The identity description remains empty, and no typefaces are associated with this entry.

**Verified imagery sources.** 1 URLs verified against institutional servers, distributed across:
- Defense Logistics Agency (DLA) — 1 URL(s)

Key references include no specific institution or URL. No top imagery references were provided, and no source records have been identified for visual documentation.

**Named typefaces.** The typography of this style is attested as:
- (none attested)

**Honest gaps.** The most significant gap is the complete absence of any documented identity, dates, attribution, or imagery references. No documented gaps were recorded by the forensic pipeline. Without further forensic seed data or external archival records, the source remains undefined. Acquisition of a designer credit, a period of use, or a single authoritative repository image would resolve these gaps.
