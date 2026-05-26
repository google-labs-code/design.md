---
version: alpha
name: "Air Traffic Strip Board"
description: "An operational dashboard aesthetic that translates the tactile, information‑dense ritual of mid‑20th‑century physical flight‑progress strips into a digital interface. It evokes a shadowy control tower with near‑black matte board, off‑cream paper cards, monospaced data, coloured plastic shuttles, and the wear of heavy use."
colors:
  surface: "#1A1A1A"
  on-surface: "#9CA3AF"
  surface-container: "#F5F0E1"
  on-surface-container: "#1A1A1A"
  primary: "#CC3333"
  on-primary: "#FFFFFF"
  secondary: "#2E7D32"
  tertiary: "#1A3A6B"
  marker-yellow: "#FFE066"
  marker-white: "#FFFFFF"
  outline-variant: "#D6DCE5"
typography:
  display:
    fontFamily: "JetBrains Mono"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.05em"
    textTransform: "uppercase"
  headline:
    fontFamily: "JetBrains Mono"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "0em"
    textTransform: "uppercase"
  title:
    fontFamily: "JetBrains Mono"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  body:
    fontFamily: "JetBrains Mono"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  label:
    fontFamily: "JetBrains Mono"
    fontSize: "10px"
    fontWeight: 400
    lineHeight: 1.375
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  handwritten:
    fontFamily: "Caveat"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "0em"
rounded:
  default: "0px"
  card: "0px"
  button: "0px"
  input: "0px"
  chip: "0px"
spacing:
  strip-internal: "2px"
  board-edge-x: "16px"
  board-edge-y: "8px"
  section-internal: "4px"
  strip-gap: "4px"
  row-gap: "8px"
  strip-height: "48px"
  icon-size: "12px"
components:
  strip:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface-container}"
    rounded: "{rounded.default}"
    padding: "2px"
    height: "48px"
    width: "240px"
  push-button:
    backgroundColor: "#3A3F4B"
    textColor: "#FFFFFF"
    rounded: "{rounded.default}"
    padding: "4px"
    height: "32px"
    width: "64px"
  tooltip:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface-container}"
    rounded: "{rounded.default}"
    padding: "8px"
  metric-cell:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface-container}"
    rounded: "{rounded.default}"
    padding: "2px"
    height: "48px"
    width: "240px"
  shuttle-flag:
    backgroundColor: "{colors.primary}"
    size: "16px"
    width: "8px"
provenance:
  coverage_status: "sparse"
  identity_description: "The slug `air-traffic-strip-board` refers to the physical board (also called a flight progress strip board, strip holder, or strip bay) used in air traffic control (ATC) to hold paper flight progress strips. These strips are rectangular paper slips that track individual aircraft, and the board provides a rack or frame – often vertically slotted or horizontally arrayed – for organising strips by se"
  manual_enrichment_required: false
  imagery_count: 3
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "www.ral-farben.de"
      count: 1
    - host: "commons.wikimedia.org"
      count: 1
    - host: "patents.google.com"
      count: 1
  imagery_urls:
    - url: "https://www.ral-farben.de/en/"
      host: "www.ral-farben.de"
      institution: "RAL gGmbH"
      confidence_original: low
    - url: "https://commons.wikimedia.org/wiki/Category:Flight_progress_strips"
      host: "commons.wikimedia.org"
      institution: "Wikimedia Commons"
      confidence_original: high
    - url: "https://patents.google.com/patent/USD261407S/"
      host: "patents.google.com"
      institution: "Google Patents / USPTO"
      confidence_original: medium
  typefaces_attested:
    - name: "Univers 55"
      foundry: "Monotype"
      year: null
      google_fonts: "Manrope"
      attestation: "inferred"
    - name: "Futura"
      foundry: null
      year: null
      google_fonts: "Jost"
      attestation: "inferred"
    - name: "Akzidenz-Grotesk"
      foundry: null
      year: null
      google_fonts: "Archivo"
      attestation: "inferred"
    - name: "OCR-B"
      foundry: null
      year: null
      google_fonts: "Roboto Mono"
      attestation: "unverified"
    - name: "Courier"
      foundry: null
      year: null
      google_fonts: "Courier Prime"
      attestation: "unverified"
    - name: "proprietary bitmap font"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "unverified"
    - name: "OCR-A"
      foundry: null
      year: null
      google_fonts: "Major Mono Display"
      attestation: "attested"
  flags:
    - "sparse_imagery"
    - "1_robots_disallowed_urls"
  honest_gaps:
    - "1. **Colour – board grey: no verified hex, RAL, Munsell, or paint reference.** Resolved only by direct measurement from a surviving primary artefact (e.g., Science Museum object 1992‑634)."
---
# Design System: Air Traffic Strip Board

## 0. Taxonomy & Identity
entity-type:        interface / system / environment
artefact-family:    dashboard / console / control panel
technique:          digital raster
movement-lineage:   postwar [conventional] — 3/6 providers agree; remaining disagree (vernacular commercial style, art-historical movement)
era:                postwar
geography:          platform-neutral
domain:             transport
formal-traits:      informational, dense, utilitarian, tactile, grid-based
color-logic:        spot-color
typography-mode:    monospace
texture:            matte, grainy, weathered
function:           simulate / monitor
provenance:         revival / homage

## 1. Overview
The Air Traffic Strip Board style translates the tactile, information‑dense ritual of mid‑20th‑century physical flight‑progress strips into a digital interface. It evokes the shadowy, fluorescent‑lit interior of a control tower: a near‑black matte board holding rows of narrow off‑cream paper cards densely packed with monospaced data, coloured plastic shuttles and flags, and the unmistakable wear of a heavily used operations room — smudged ink, ballpoint corrections, stamp marks, crease lines, and tape artifacts.

The aesthetic celebrates functional austerity, manual override, and rapid scanning. Every element reinforces transparency and situational awareness over polish. The surface simulates uncoated paper stock with a fine grain overlay; hard drop shadows (zero blur) suggest physical paper offset. No gradients, glows, or rounded corners are used. The palette is flat and matte.

- Emotional tone: methodical, urgent, analogue, worn‑in.
- Era/lineage: 1950s–1960s air traffic control.
- Density: extremely high; whitespace is structural only (empty slots).
- Core rendering: flat, matte, printed ink on uncoated stock.
- What makes it recognisable: dark background; rows of cream strips with left‑edge perforations; dense monospaced codes; coloured plastic shuttles/flags; hard drop shadows; fine grain overlay.
- What would break it: gradients, smooth shadows, rounded corners, variable‑width type, photographs, large whitespace, glossy surfaces, decorative typography.

## 2. Constants
Light Mode:   no
Dark Mode:    primary — board always dark; strips are light paper.
Responsive:   yes — at 768px and below, strips reflow to fewer columns (horizontal scroll preserved); board expands above 1440px.
States:       Default, Active (selected), Hover, Focus, Disabled (empty slot), Dragged (ghost shadow), Error (emergency markers)
surface-simulation: paper — uncoated paper stock with fine grain overlay, simulating physical flight progress strips on a dark matte board; all shadows are hard (zero blur) reinforcing physical paper offset

## 2a — Interaction Model

hover-delta:        shadow-lift — strips translate up 1px on hover with deeper hard shadow (drop-shadow-[0_2px_0_0_rgba(0,0,0,0.4)]); no opacity change, no color shift
active-delta:       bevel-depress — on press, strip returns to rest position (translateY 0) with inset shadow suggesting paper pressed flat against board
focus-style:        color-border — active strip receives border-2 in primary (#CC3333) as red marker line; no glow ring, no dotted outline
transition-duration:0ms — all state changes are instantaneous; no easing curves
transition-easing:  none
exempt-animations:  none — no keyframe animations survive the 0ms transition override

## 3. Colors
surface             (#1A1A1A) — Board background: near‑black matte [inferred] (providers gave #121212, #1A1A1A, #1C1C1E, #2A2A2E; #1A1A1A most common)
on-surface          (#9CA3AF) — Board text: headers, timestamps, labels [inferred] (only D1 provides; others vary)
surface-container   (#F5F0E1) — Strip paper: off‑cream [attested] (unanimous)
on-surface-container (#1A1A1A) — Strip text: near‑black ink [attested] (unanimous)
primary             (#CC3333) — Red marker: status flags, urgent annotations [attested] (unanimous)
on-primary          (#FFFFFF) — Text on red markers [inferred] (only D1 provides)
secondary           (#2E7D32) — Green marker: approved/active status [attested] (unanimous)
tertiary            (#1A3A6B) — Blue marker: critical data fields [attested] (unanimous)
marker-yellow       (#FFE066) — Yellow shuttle/flag [majority] (4/6 agree; 2 give #FCE94F)
marker-white        (#FFFFFF) — White shuttle/flag [inferred] (only D1 provides)
outline             CONTESTED:§2.hex_outline — providers gave: [#A0A0A0, #8A8A8A, #3A3F4B, #333333, #6B6B6B, #6B7280]; all tagged [unverified]; re-stack required.
outline-variant     (#D6DCE5) — Faint column dividers [inferred] (only D1 provides; others have similar)

## 4. Typography
All text within strips is monospace. No serif, decorative, or proportional typefaces. Tabular-nums required for numeric fields. Flight identifiers, airport codes, and ATC commands in uppercase. Timestamps in HHMM format (no colon).

**Primary typeface (body, labels, titles):**
CONTESTED:§3.primary_typeface — providers gave: [JetBrains Mono, IBM Plex Mono, Courier Prime]; none cited a foundry or source; re-stack required.

**Secondary typeface (handwritten annotations):**
CONTESTED:§3.secondary_typeface — providers gave: [FF Trixie, P22 Typewriter, Caveat, Special Elite]; none cited a foundry or source; re-stack required.

**Google Fonts substitute:**
CONTESTED:§3.google_fonts_substitute — providers gave: [JetBrains Mono, IBM Plex Mono, Caveat, Special Elite]; no consensus and no cited source; re-stack required.

**Typography roles (suggested, to be rebased after typeface selection):**
display:           font-size text-sm (0.875rem), font-weight medium, line-height tight, letter-spacing tighter, uppercase.
headline:          font-size text-xs (0.75rem), font-weight medium, line-height tight, uppercase.
title:             font-size text-xs, font-weight normal, line-height tight, letter-spacing tight.
body:              font-size text-[11px] (0.688rem), font-weight normal, line-height tight (1.1), letter-spacing tight.
label:             font-size text-[10px] (0.625rem), font-weight normal, line-height snug, letter-spacing tight, uppercase.
handwritten:       font-size text-[11px], font-weight normal, line-height tight, ink-bleed effect (multiply blend, slight rotation).

## 5. Elevation
Flat depth model — simulated physical paper stacking. All shadows are hard (zero blur), defined as custom drop‑shadows.

Default strip:     drop-shadow-[0_1px_0_0_rgba(0,0,0,0.3)] — paper resting on board [inferred].
Pulled strip:      drop-shadow-[0_2px_0_0_rgba(0,0,0,0.4)] — 2px vertical offset, no blur [inferred] (providers gave 1px–3px; 2px most common).
Shuttle/flag:      drop-shadow-[0_1px_0_0_rgba(0,0,0,0.2)] [inferred].
Tooltip:           drop-shadow-[0_4px_0_0_rgba(0,0,0,0.4)] [inferred].
Recessed button:   box-shadow: inset 0 1px 0 rgba(0,0,0,0.3) [inferred].

**Stacking context:**
z-0:   base content (board background)
z-10:  strips at rest
z-20:  pulled strips, shuttles/flags
z-30:  tooltip/ detail panels
z-40:  modals/overlays

## 6. Spacing & Sizing
padding:
  strip internal:        p-0.5 (2px) — unanimous
  board edge:            px-4 (16px) / py-2 (8px)
  section internal:      p-1 (4px)

margin:
  between strips (row):  gap-1 (4px) — unanimous
  between rows:          gap-2 (8px) [inferred]

component heights:
  strip default:         h-12 (48px) [majority] — 3/6 agree; providers gave 40, 48, 56px
  strip compact:         h-10 (40px)
  strip with annotations: h-14 (56px)
  toolbar/header row:    h-14 (56px)

icon size:               w-3 h-3 (12px) — unanimous

shuttle/flag size:       w-4 h-2 (16x8px) [inferred] (only D1 provides)

## 7. Borders
border-radius:           rounded-none — unanimous on all elements.
border-width:
  default:               border (1px)
  emphasis:              border-2 (2px) — active strip, focus ring
  rail:                  border-t-2 (2px)

border-style:            border-solid (default) / border-dashed (faint column rules within strips)

clip-path:               none

## 8. Opacity
disabled state:          opacity-30 [majority] (4/6 agree; 2 give 40)
ghost/secondary:         opacity-60 [inferred]
overlay/scrim:           not used
hover feedback:          not opacity — strip lifts via translateY

selection:
  background:            rgba(204, 51, 51, 0.25) — red at 25% opacity [inferred]
  color:                 inherit

scrollbar (dark, styled):
  width:                 thin (~6px)
  track:                 surface (#1A1A1A)
  thumb:                 outline (CONTESTED → use #6B7280 as placeholder)
  thumb-hover:           lighter version

## 8.5. Visual Effects

### 8.5.0 — Physical Material Model

material-model:    paper

global-filter:     none — no color transformation applied to the body; ink colors render as flat solid swatches

global-overlay:    Paper grain via SVG feTurbulence on board container ::before:
                   baseFrequency 0.65–0.72, numOctaves 3, type fractalNoise, monochrome
                   blend: overlay, opacity-20, pointer-events:none, position:absolute, z-index:0, inset:0
                   Applied behind strips only. No CRT scanlines, no broadcast artifacts.

rendering-flags:
  font-smoothing:  antialiased — monospace text must remain crisp but not pixel-perfect
  image-rendering: auto — no pixel-art constraints; grain overlay handles texture
  text-rendering:  auto

### 8.5a — Color Manipulation
None. All color is solid ink; no CSS filters on strip surfaces.

### 8.5b — Surface Layering
Not used. No frosted glass or translucent layering.

### 8.5c — Gradients & Glow
Optional fluorescent tube glare at top edge of board:
background-image:    linear-gradient(180deg, rgba(255,255,255,0.10) 0%, transparent 8px)
role:                atmospheric — only on board container
No text-shadow or glow effects.

### 8.5d — Texture & Noise Simulation

**Paper grain (full‑board overlay):**
technique:    SVG feTurbulence
parameters:   baseFrequency 0.65–0.72, numOctaves 3, type fractalNoise
surface:      entire board canvas (behind strips)
intensity:    moderate (15–25% opacity)
blend:        overlay, opacity-20 [inferred]
color:        monochrome
animation:    none
tailwind-approx: no native equivalent

**Paper curl (per strip bottom):**
technique:    inset 1px hard shadow or 1px solid dark line
intensity:    barely perceptible

**Ink smear / stamp artifacts:**
technique:    CSS mix-blend-mode: multiply + slight rotation (±2°)
surface:      handwritten annotations, stamp overlays
intensity:    moderate
blend:        multiply, opacity-60–80

**Dot‑matrix banding (optional):**
technique:    repeating-linear-gradient (2–3px intervals, opacity-2)
surface:      strips only
intensity:    very faint

**Tape artifact:**
semi‑transparent yellowed rectangle (rgba(200,180,100,0.2)) at strip corner, with thin fold shadow.
## 9. Components

**Icon vocabulary:**
system:       custom geometric glyphs — stroke-only, no fill, 1.5px stroke
size:         w-3 h-3 (12px)
color:        inherits marker colour (currentColor)
shapes:       circle (holding), arrow (departure/arrival), cross (cancelled), triangle (emergency), push-pin, staple
treatment:    hard edge, no glow, no animation, no filled icons

**Image / media treatment:**
Not applicable — no photographs or illustrations. All information is typographic and schematic.

**Strip (core component):**
- Background: `bg-surface-container` (#F5F0E1) — unanimous
- Border: `border border-[#6B7280]` (adjusted after outline contestation) `rounded-none`
- Padding: `p-0.5` — unanimous
- Height: `h-12` (48px) — majority
- Width: fixed 200–300px (e.g., `w-60` 240px)
- Shadow: hard drop shadow at rest (0 1px 0 rgba(0,0,0,0.3))
- Left edge: two perforation holes (4px diameter circles, white with dark border) — always visible
- Internal layout: dense, left-aligned monospaced data; field separators are 1px dashed rules in outline colour
- States:
  - Default: flat, no lift
  - Hover: `translateY(-2px)`, border changes to marker colour (red priority), deeper shadow (0 2px 0)
  - Active: selected, same as hover but border blue
  - Dragged: leaves `opacity-30` ghost shadow in original slot
  - Disabled: not used directly — empty slot shown as void
- Overlays (optional per strip): paper curl, tape, stamp, handwritten marks

**Empty slot:**
- Background: matches board surface (#1A1A1A)
- Dimensions: same as strip (h-12, w-60)
- No interaction — visible as dark void
- Perforation holes present but dimmed (opacity-30)

**Slot rail:**
- Thin horizontal bar above and below each row: `h-1` (4px) `bg-[#6B7280]` (outline placeholder)
- Small rivet/screw details at ends (4px circles, darker)
- Specular highlight via linear gradient (white 10% at top)

**Shuttle / Flag marker:**
- Coloured plastic tab: `bg-primary` (#CC3333) or `bg-marker-yellow` etc.
- Size: `w-4 h-2` (16x8px) [inferred]
- Position: slides along top edge of strip, overlapping rail
- Interaction: draggable, snaps to discrete positions (no easing, 0ms)
- Ghost shadow in original position during drag

**Push‑button (action button):**
- Small rectangle: `h-8 w-16`, `bg-[#3A3F4B]`, `border border-#1A1A1A`, `rounded-none`
- Recessed look: `box-shadow: inset 0 1px 0 rgba(0,0,0,0.2), 0 1px 0 rgba(255,255,255,0.05)`
- Active: inset shadow deepens, translateY(1px)
- Text: all-caps monospace, `text-xs`

**Tooltip / Detail panel:**
- Appears to side of selected strip (left or right)
- `bg-surface-container`, `border border-#6B7280`, `p-2`, `rounded-none`
- Hard shadow (0 4px 0 rgba(0,0,0,0.4))
- Typography: same monospace as strips, data in columns with dashed rules
- Close button (small push-button) top-right

**Handwritten annotation:**
- Applied via SVG path or overlay with handwriting font
- Ink-bleed effect: `mix-blend-mode: multiply`, `slight rotation` (0–2°)
- Color: marker-red or text-ink
- Animation (optional): stroke-dasharray draw, slow (12fps)

**Stamp mark:**
- Rounded rectangle or custom shape in marker colour
- Opacity-70, rotation ±3°
- Ink unevenness via feTurbulence
- Animation: quick scale dip on press (scale 0.95→1)

**Data Display Components:**

metric-cell:
  Background: bg-surface-container (#F5F0E1) — matches strip paper. Paper-grain noise via feTurbulence overlay at 15% opacity.
  Border: border border-[#6B7280] rounded-none, hard drop shadow (0 1px 0 rgba(0,0,0,0.3)).
  Label: monospace text-xs uppercase, color inherit from marker palette or outline (#6B7280).
  Value: monospace text-base font-bold, color on-surface (#1A1A1A). Delta indicator: monospace text-sm, positive in blue (#1A3A6B), negative in red (#CC3333), no glow or shadow.
  Dimension: fixed width (w-60), height h-12 (48px) — same footprint as a strip to maintain board grid rhythm.

signal-bar:
  Track: bg-[#4B5563] — dark rail colour, h-1 (4px) height, rounded-none, positioned within a strip row.
  Fill: bg-primary (#CC3333) for priority, bg-marker-yellow (#FFE066) for advisory, bg-[#1A3A6B] for confirmed. Height matches track.
  Border: none — the fill sits flush against the track edges.
  No glow, no grain on fill — flat marker colour applied as solid block. Transition: none (0ms, discrete snap).

status-cell:
  ok:   border-2 border-[#1A3A6B] (blue), text-[#1A3A6B] pop — confirmed, holding, nominal. No fill, no glow.
  warn: border border-marker-yellow (#FFE066) dashed, text-marker-yellow — advisory, flagged for attention. No fill.
  err:  border-2 border-primary (#CC3333), text-primary — emergency, priority, critical. Stamp mark may overlay with ±2° rotation and opacity-70 ink bleed.
  All status cells: bg-transparent within the strip paper — status is communicated by coloured border/text, never by background fill.

data-table-row:
  Strip is the data table row. Alternating: every strip is bg-surface-container (#F5F0E1); no row alternation within the board — strips are identical in surface treatment.
  Cell borders: 1px dashed rules in outline colour (#6B7280) between data fields, left-aligned.
  Label: monospace text-xs, color outline (#6B7280).
  Value: monospace text-sm, color on-surface (#1A1A1A). No row-level surface effects beyond strip paper grain.
  Selected row: border changes to blue (#1A3A6B), translateY(-2px), deeper shadow (0 2px 0).

chart-surface:
  Not applicable — this system does not render line charts, bar charts, or any graph geometry. All information is tabular and typed. The strip board schematic is the only data display paradigm.

## 10. Layout
.board {
  display: flex;
  flex-direction: column;
  gap: 8px;                /* gap-2 */
  padding: 16px;           /* p-4 */
  background: #1A1A1A;     /* surface */
  overflow: hidden;
  border: 2px solid #6B7280; /* outline placeholder */
}

.board__row {
  display: flex;
  gap: 4px;                /* gap-1 */
  align-items: flex-start;
  position: relative;
}

.board__slot {
  width: 240px;            /* w-60 */
  min-height: 48px;        /* h-12 */
  flex-shrink: 0;
}

.board__rail {
  height: 4px;
  background: #6B7280;
  position: relative;
  display: flex;
  align-items: center;
  border-top: 2px solid #4B5563;
}

/* Rail rivet dots */
.board__rail::before,
.board__rail::after {
  content: '';
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #4B5563;
  position: absolute;
  top: 0;
}
.board__rail::before { left: 8px; }
.board__rail::after { right: 8px; }

**Density**: Variable between sparse (30% slots filled) and dense (all slots filled, strips nearly touching). Controlled by a `density` parameter.

**Breakpoints**:
- < 768px: Board scrolls horizontally; strip width remains 240px; header fixed; 3–4 columns visible.
- 768–1439px: 5–7 columns; may still scroll.
- ≥ 1440px: Full board, no horizontal scroll, 8–12 columns.

**Motion block**:
transition-duration:
  150ms: strip hover lift, border colour change
  300ms: strip slide-in (easeOutBack)
  250ms: strip slide-out (easeInOutQuad)
  0ms:   shuttle snap, state toggles
  200ms: stamp press
transition-timing-function:
  easeOutBack: strip entry
  easeInOutQuad: strip removal gap‑fill
  steps(1): shuttle snap
transition-property: transform, opacity, box-shadow, border-color

animation:
  strip-slide-in: translateX(-100%)→0, 300ms easeOutBack, trigger: on-load
  strip-slide-out: translateX(0)→100%, 250ms easeInOutQuad, trigger: on-remove
  stamp-press: scale(1)→0.95→1, 200ms ease-out, trigger: on-click
  handwriting-draw: stroke-dashoffset 100%→0, 1000ms linear, trigger: on-load
  board-drift: translateX(0)→2px→0, 8000ms linear infinite, trigger: looping
  board-jitter: translate(0.1px,0.3px) random, 12–18fps, trigger: looping

transform-at-rest: none
transform-on-interact:
  strip hover: translateY(-2px)
  button active: translateY(1px)
  stamp active: scale(0.95)
transform-style: flat

**Frame rate constraint**: All motion rendered at 12–18fps visual cadence (via steps() or frame‑rate limiting) to simulate surveillance‑camera physicality.

## 11. Design System Notes

### 11a. Use Constraints
**Appropriate for**: Operational dashboards, ATC simulators, logistics monitoring, command‑and‑control interfaces, any context requiring dense scannable data and a grounded, manual‑override feel.
**Wrong for**: Consumer retail apps, creative portfolios, editorial content, smooth modern UIs, light‑mode mandatory contexts.

### 11b. Prompt Phrases
- "Dense monospaced text on off-white paper cards against a dark matte background"
- "Bright colour markers for status with hard-edged shadows"
- "Physical artifact texture: noise overlay, paper grain, tape stains, stamp marks"
- "Left-aligned columns with thin vertical dashed rules"
- "All-caps flight codes, monospace, tight margins"
- "Hard drop shadows with no blur, simulating physical paper offset"
- "Geometric stroke-only icons in marker colours"
- "Handwritten ink marks with multiply blend and slight rotation"
- "Empty rectangular slots as dark voids"
- "Shuttle flags sliding along top rail with instant snap"

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description. Minimum 4 rules, maximum 8.

rule: Monospace is the only type system — every character on the board uses fixed-width lettering, preserving the teletype / flight-strip convention.
do:   All text — headers, labels, values, annotations — in a monospace face. Even the clock and board header use Courier or a monospace equivalent.
avoid:Variable-width fonts, decorative typefaces, or any proportional typography. A single proportional heading reads as office software, not ATC.
```

```
rule: All corners are 90° — no rounding anywhere in the system, from the board frame to the smallest button.
do:   Every element uses `rounded-none`. Strips, slots, buttons, panels, tooltips — all are rectangular with sharp corners.
avoid:Any `border-radius` value. A single `rounded-sm` corner reads as modern UI, not a physical flight-strip board.
```

```
rule: The entire board surface carries fine noise to simulate card stock, dust, and environmental wear on a control-room artifact.
do:   A full-canvas feTurbulence noise overlay at 15–25% opacity in multiply blend mode across the entire board background.
avoid:Clean, noise-free surfaces. Without the grain overlay the board reads as flat digital, not a handled physical control panel.
```

```
rule: Any lifted strip uses a hard drop shadow with zero blur — simulating the physical offset of paper on a board.
do:   `box-shadow: 0 2px 0 rgba(0,0,0,0.3)` or `0 1px 0 rgba(0,0,0,0.3)` for hovered, selected, or dragged strips. No blur radius.
avoid:Blurred shadows (`box-shadow` with non-zero blur). Soft shadows signal digital elevation; hard shadows signal physical paper thickness.
```

```
rule: Every strip has two perforation holes on the left edge — a defining physical identifier of the flight-strip form factor.
do:   Two 4px diameter circles, white fill with dark (#1A1A1A) 1px border, on the left edge of every strip. Always present, never clipped.
avoid:Strips without perforation holes. Their removal strips the core physical identity from the component.
```

```
rule: Tape, stamps, and handwritten marks use multiply blend to simulate real physical media layering on paper.
do:   Tape strips use `mix-blend-mode: multiply` with 0–2° rotation. Stamp marks use opacity-70 with ±3° rotation and ink unevenness via feTurbulence. Handwriting uses multiply blend with slight rotation.
avoid:Applying tape, stamps, or handwriting with normal blend mode. The multiply blend is essential for the physical-media illusion.
```

```
rule: Icons are stroke-only geometric glyphs in marker colours — no filled shapes, no glow, no animation.
do:   1.5px stroke, no fill, colour inherits from marker colour. Set includes circle, arrow, cross, triangle, push-pin, staple. Hard edges, no rounding.
avoid:Filled icons, gradient fills, glow effects, or any icon with animation or blur. Even a single filled shape contradicts the schematic language.
```

```
rule: Empty slots are always visible as dark rectangular voids — they carry operational meaning (no aircraft assigned).
do:   Empty slot displays as `bg-[#1A1A1A]` at full dimensions (h-12, w-60) with dimmed perforation holes (opacity-30). Visible, inert, communicating "empty."
avoid:Hiding empty slots, replacing them with lighter placeholders, or filling them with decorative content. The void is a necessary information state.

### 11d. Variation Bounds
1. **Density**: Sparse (many empty slots) ↔ Dense (every slot filled).
2. **Aging / wear**: Pristine (clean paper) ↔ Heavily handled (smudges, creases, coffee stains, tape, pen marks).
3. **Colour accent set**: Primary marker colour can be red (#CC3333), yellow (#FFE066), or blue (#1A3A6B) as dominant accent.
4. **Board angle**: Horizontal ↔ slight tilt (2–3°) for static compositions only.
5. **Authentic vs. Remix**: Strict 1960s ATC replica ↔ Modern reinterpretation (neon accents, digital grid overlay).
6. **Annotation style**: Monochrome (black ink only) ↔ Full colour (red/green/blue highlights).

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts. Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
A single board row with 3–4 strip slots, approximately 50% occupied. Surface: bg-[#1A1A1A] with fine noise overlay (feTurbulence, multiply, 15% opacity). Each occupied slot shows a strip with bg-surface-container (#F5F0E1), hard border in outline (#6B7280) rounded-none, two perforation holes (4px white circles with #1A1A1A border) on the left edge. Internal layout: monospace text columns (text-xs label, text-sm value) separated by 1px dashed outline rules. Top rail (h-1 bg-[#6B7280]) above the row with rivet dots at each end. Bottom rail below. Slot-rail-slot-rail rhythm repeated across the row width. No drop shadows on default strips — flat, flush with the board surface. Perforation holes at full opacity. No tape, no stamps, no handwritten marks.

### 11e.ii — Maximum Expressiveness
Three board rows with most slots filled. Two strips per row show hover state: translateY(-2px), border changes to primary (#CC3333) for priority aircraft, deeper shadow (0 2px 0 rgba(0,0,0,0.3)). One selected strip shows border blue (#1A3A6B). A shuttle flag (16x8px tab in marker-yellow #FFE066) slides along the top edge of one strip, overlapping the rail. One empty slot in the second row shows as dark void with dimmed perforations (opacity-30). A handwritten annotation (ink-bleed, multiply blend, 1° rotation, marker-red) overlays one strip. A stamp mark (rounded rectangle, primary colour, opacity-70, 2° rotation, feTurbulence ink unevenness) covers a second strip. A tooltip panel (bg-surface-container, border outline, hard shadow 0 4px 0 rgba(0,0,0,0.4), monospace columnar data) appears to the right of the selected strip. Two action buttons visible: push-button (h-8 w-16, bg-[#3A3F4B], recessed inset shadow) in the board header area. Paper curl effect visible on one corner of a heavily handled strip. Tape artifact (multiply blend, 10% opacity brown stain) crossing one strip edge. board-drift animation (translateX 0→2px→0, 8000ms linear infinite) and board-jitter (12–18fps random micro-translation) active on the entire board container.

### 11e.iii — Data Context
The board is the data context — no separate "data mode" exists. All data elements are embedded in strips. A data strip's anatomy: left-aligned monospace columns with 1px dashed outline (#6B7280) separators. Data labels in text-xs uppercase, outline colour. Data values in text-sm, on-surface (#1A1A1A). Flight codes in all-caps monospace text-base bold. Timestamps in text-xs monospace. Status cell: border-color signals state — blue (#1A3A6B) for confirmed/holding, yellow (#FFE066) dashed for advisory/warning, red (#CC3333) solid for emergency/priority. No background fill on status cells — status is border + text colour only. Signal bar: 4px height fill bar within the strip, track colour #4B5563, fill colour matching the marker palette. Metric cell (e.g., altitude, speed): value in bold monospace text-sm, delta indicator as monospace text-xs suffix in blue (up) or red (down), no glow or shadow on any data element. Empty slots (no data assigned) show as void — the board communicates data presence and absence through the slot's visual state, not through any chart or gauge. Table rows do not alternate — every strip is uniformly bg-surface-container. Selected row gains blue border and translateY(-2px) lift with hard shadow.

### 11f. Sources

Imagery coverage is sparse — only 3 institutional records verified.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** The **Air Traffic Strip Board** (also called flight progress strip board, strip holder, or strip bay) saw documented use from the 1950s through the late 1990s in air traffic control centres. Its attribution is collective, arising from operational requirements rather than a single designer or foundry, though key typefaces associated with the strips include **Univers 55**, **Futura**, **Akzidenz-Grotesk**, **OCR-B**, **Courier**, a proprietary bitmap font, and **OCR-A**. The physical board is a rack or frame – often vertically slotted or horizontally arrayed – that holds paper flight progress strips, which are rectangular slips tracking individual aircraft.

**Verified imagery sources.** 3 URLs verified against institutional servers, distributed across:
- RAL gGmbH — 1 URL(s)
- Wikimedia Commons — 1 URL(s)
- Google Patents / USPTO — 1 URL(s)

Key references include the Science Museum’s record at https://collection.sciencemuseumgroup.org.uk/objects/co8056780/ (object 1992‑634). Imagery coverage is sparse — only 3 institutional records verified.

**Named typefaces.** The typography of this style is attested as:
- Univers 55 (for Monotype — attestation: inferred) — rendered here in Manrope as the closest open substitute
- Futura ( — attestation: inferred) — rendered here in Jost as the closest open substitute
- Akzidenz-Grotesk ( — attestation: inferred) — rendered here in Archivo as the closest open substitute
- OCR-B ( — attestation: unverified) — rendered here in Roboto Mono as the closest open substitute
- Courier ( — attestation: unverified) — rendered here in Courier Prime as the closest open substitute
- proprietary bitmap font ( — attestation: unverified) — rendered here as bespoke imagery — no web-font substitute
- OCR-A ( — attestation: attested) — rendered here in Major Mono Display as the closest open substitute

**Honest gaps.** The most significant gap is the colour for the board grey: no verified hex, RAL, Munsell, or paint reference. This gap is resolved only by direct measurement from a surviving primary artefact (e.g., Science Museum object 1992‑634). Additionally, no original manufacturer documentation or specification sheets have been located. Recovering these would require physical inspection of the surviving board and access to institutional archival records.
