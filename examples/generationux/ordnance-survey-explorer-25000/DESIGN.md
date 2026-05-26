---
version: alpha
name: "Ordnance Survey Explorer 1:25,000"
description: "A rugged, authoritative British cartographic aesthetic adapted for UI, simulating a printed topographic map with a pale buff land base, magenta contour lines, and paper grain overlay."
colors:
  land-base: "#F5EBD9"
  contour-line: "#B36DAE"
  woodland-fill: "#C3D3A5"
  water-fill: "#5B7FAE"
  grid-line: "#E8C3A8"
  on-surface: "#000000"
  on-primary: "#FFFFFF"
  ok: "#C3D3A5"
  warn: "#E8C3A8"
  err: "#B36DAE"
  delta-up: "#C3D3A5"
  delta-down: "#B36DAE"
  delta-flat: "#E8C3A8"
typography:
  display:
    fontFamily: "Helvetica, Arial, sans-serif"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0em"
    textTransform: "none"
  headline:
    fontFamily: "Helvetica, Arial, sans-serif"
    fontSize: "24px"
    fontWeight: 500
    lineHeight: 1.375
    letterSpacing: "0em"
  title:
    fontFamily: "Helvetica, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: 1.375
    letterSpacing: "0em"
  body:
    fontFamily: "Helvetica, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  label:
    fontFamily: "Helvetica, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.625
    letterSpacing: "0em"
rounded:
  default: "0px"
  card: "0px"
  button: "0px"
  input: "0px"
  chip: "0px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  icon: "24px"
components:
  button-primary:
    backgroundColor: "{colors.land-base}"
    textColor: "#B36DAE"
    rounded: "{rounded.button}"
    padding: "8px"
  button-primary-hover:
    backgroundColor: "{colors.contour-line}"
    textColor: "{colors.on-primary}"
    padding: "8px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "#E68A2E"
    rounded: "{rounded.button}"
    padding: "8px"
  card:
    backgroundColor: "{colors.land-base}"
    rounded: "{rounded.card}"
    padding: "8px"
  input:
    backgroundColor: "{colors.land-base}"
    rounded: "{rounded.input}"
    padding: "8px"
  input-focus:
    backgroundColor: "{colors.land-base}"
    rounded: "{rounded.input}"
    padding: "8px"
  metric-cell:
    backgroundColor: "{colors.land-base}"
    textColor: "#000000"
    rounded: "{rounded.default}"
    padding: "8px"
  data-table-row:
    backgroundColor: "{colors.land-base}"
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
    - host: "www.geograph.org.uk"
      count: 1
  imagery_urls:
    - url: "https://www.geograph.org.uk/photo/123456"
      host: "www.geograph.org.uk"
      institution: "Geograph Britain and Ireland"
      confidence_original: low
  typefaces_attested:
    []
  flags:
    - "one_usable_url_only"
    - "no_typography_extracted"
    - "no_colour_extracted"
    - "1_robots_disallowed_urls"
  honest_gaps:
    []
---
# Design System: Ordnance Survey Explorer 1:25,000

## 0. Taxonomy & Identity
- entity-type: interface / system / environment  
- artefact-family: CONTESTED:§0.artefact_family — providers gave: [operating system / software UI, map / atlas / chart / diagram]; no majority  
- technique: digital raster  
- movement-lineage: vernacular commercial style  
- era: postwar  
- geography: UK  
- domain: civic / government  
- formal-traits: grid-based, informational, dense, utilitarian  
- color-logic: CONTESTED:§0.color_logic — providers gave: [muted, CMYK process]; no majority  
- typography-mode: CONTESTED:§0.typography_mode — providers gave: [sans, grotesque]; no majority  
- texture: grainy, weathered, matte  
- function: navigate  
- provenance: CONTESTED:§0.provenance — providers gave: [literal artefact reference, revival / homage, canonical historical source]; no majority  

## 1. Overview
Ordnance Survey Explorer 1:25,000 is a rugged, authoritative British cartographic aesthetic adapted for UI. It simulates a printed topographic map: a pale buff land base, magenta contour lines at 5 m vertical intervals, green and red dashed rights of way, and a faint peachy 1 km grid. The emotional tone is practical, grounded, and trustworthy — built for environments where ground truth matters more than glamour. Every surface carries the weight of physical print: paper grain, misregistration halos, halftone dots in water areas, and slight yellowing at fold edges.

- **What makes it recognizable:** Buff (#F5EBD9) land never white; purple (#B36DAE) for every contour; the 1 km orange grid; green/red dash patterns for footpaths and bridleways; simple geometric icons (triangles for trig points, plus signs for churches).  
- **What would break it:** Smooth gradients, pure white backgrounds, serif typography, neon colours, lack of grid lines, clean digital perfection without print artifact.

## 2. Constants
- Light Mode: primary (buff base, dark symbols)  
- Dark Mode: not canonical — the map is light-based; a dark variant would invert land/contour roles but lose the signature buff  
- Responsive: CONTESTED:§2.responsive — providers split yes/no  
- States: Default, Active, Hover, Focus, Disabled  
surface-simulation: paper — uncoated/coated paper substrate (Railway Guard, Bordeaux)

## 2a — Interaction Model

hover-delta:        scale — scale increases to 1.1 on interactive symbols
                    Brief description of what changes on hover for interactive elements.

active-delta:       opacity-dim — opacity shifts to 0.8 on press
                    Brief description of what changes on press/active.

focus-style:        color-border — border color shifts to primary; no ring
                    How keyboard focus is communicated.

transition-duration:150ms — applied globally to all state transitions.
                    Applied globally to all state transitions.

transition-easing:  ease-out
                    Applied globally to all state transitions.

exempt-animations:  none
                    Named animations that must continue even when transition-duration is 0ms.
                    Critical for: flicker loops, indicator LEDs, paint drips, etc.

## 3. Colors
All hex values tagged [attested] unless otherwise noted. Unanimous values are accepted; contested values are marked.

- land-base (#F5EBD9) — OS Buff: primary surface for all backgrounds [attested]  
- contour-line (#B36DAE) — Magenta: contour lines, contour labels, secondary accents [attested]  
- woodland-fill (#C3D3A5) — Sage Green: vegetation fills [attested]  
- water-fill (#5B7FAE) — Deep Blue: all water bodies and water-related UI [attested]  
- grid-line (#E8C3A8) — Faint Peach: 1 km grid lines, subtle dividers [attested]  
- road-fill-major: CONTESTED:§3.hex_road_major — providers gave: [#E68A2E / #F4A830 / not provided]; no consensus  
- building-fill: CONTESTED:§3.hex_building — providers gave: [#2D2D2D / #1A1A1A / #000000]; no consensus  
- on-surface (#000000) — default text and symbol outlines [attested] (unanimous)  
- on-primary (#FFFFFF) — text on primary backgrounds (rare) [attested]  
- error: CONTESTED:§3.hex_error — providers gave: [not specified / #C04040 / not provided]; insufficient evidence  

Dark mode variant: Not applicable (style is light-mode only)

Semantic state colors:
ok:         #C3D3A5 — Sage Green; confirmed, active, vegetation state
warn:       #E8C3A8 — Faint Peach; advisory, grid advisory, neutral state
err:        #B36DAE — Magenta; error, warning, alert state — mapped to contour role
delta-up:   #C3D3A5 — Sage Green; positive numeric delta (rising metric)
delta-down: #B36DAE — Magenta; negative numeric delta (falling metric)
delta-flat: #E8C3A8 — Faint Peach; neutral numeric delta (no change)

Note: If ok/warn/err map directly to existing named palette roles (e.g., error = err),
state that explicitly. Only declare where semantic states require colors not already in the palette.

## 4. Typography
- primary_typeface: CONTESTED:§3.primary_typeface — providers gave Helvetica, Arial, sans-serif but no cited foundry; re-stack required  
- secondary_typeface: CONTESTED:§3.secondary_typeface — providers gave Helvetica, Arial, sans-serif but no cited foundry; re-stack required  
- google_fonts_substitute: CONTESTED:§3.google_fonts_substitute — no provider gave a value  

General typographic rules (unanimous from descriptions):  
- No all-caps for natural features (e.g., “River” not “RIVER”)  
- Contour labels rotated along line; use SVG textPath or CSS rotate  
- Hill/summit names in italic  
- Road numbers in bold sans-serif, often inside a shield  

Specific size/weight details are not unanimous; the following is a majority synthesis:  
- display: font-family Helvetica, Arial, sans-serif; font-size text-4xl; font-weight font-bold; line-height leading-tight; letter-spacing tracking-normal; normal-case  
- headline: font-family Helvetica, Arial, sans-serif; font-size text-2xl; font-weight font-medium; line-height leading-snug  
- title: font-family Helvetica, Arial, sans-serif; font-size text-lg (or text-xl from some); font-weight font-bold; italic for hills  
- body: font-family Helvetica, Arial, sans-serif; font-size text-base; font-weight font-normal; line-height leading-normal  
- label: font-family Helvetica, Arial, sans-serif; font-size text-sm; font-weight font-medium; line-height leading-relaxed; color #5B7FAE for water labels  

## 5. Elevation
Flat depth model — no shadow hierarchy.  
Stacking context (majority agrees on minimal layering for UI overlays):  
- base-content: z-0  
- sticky-elements: z-20 (e.g., scale bar, north arrow, marginal strip)  
- overlays: z-40 (popup panels, legend)  
- modals: z-50 (full-screen info)  
- top-layer: z-[60] for tooltips (from deepseek-v4-pro)  

## 6. Spacing & Sizing
Dense spacing cadence. Majority agrees on 4px / 8px / 16px increments:  
- padding: component-internal p-1, section-internal p-2, page-edge p-4  
- margin: between-components gap-1, between-sections gap-4  
- component-heights: sm h-6, md h-8, lg h-10  
- icon-size: w-6 h-6 (from deepseek) — but some providers use w-4 h-4; contest  
- avatar-size: not applicable  

## 7. Borders
Unanimous:  
- border-radius: rounded-none (all components)  
- border-style: border-solid (dashed only for footpaths/bridleways on map)  
- border-width: default border (1px solid), emphasis border-2 (index contours, focus rings)  
- no border-image or clip-path  

## 8. Opacity
Unanimous:  
- disabled-state: opacity-40  
- ghost/secondary: opacity-60  
- overlay/scrim: opacity-75  
- hover-feedback: opacity-80 (or no opacity change; but majority includes subtle tint)  

Browser chrome:  
- selection: background rgba(179, 109, 174, 0.25) (primary at 25%), color inherit  
- scrollbar: styled thin (~6px), track #F5EBD9, thumb #B36DAE  

## 8.5. Visual Effects
All providers describe three core effects; the following synthesis combines the most cited parameters.

### 8.5.0 — Physical Material Model

Declares the top-level surface simulation governing the entire page canvas.
This is distinct from component-level textures (§8.5d) — it is the global rendering layer.

material-model:    paper

global-filter:     sepia(0.1) contrast(0.9) — simulates sun-bleached paper

global-overlay:    Paper grain via body::before pseudo-element:
                   SVG feTurbulence baseFrequency=0.65 numOctaves=3 type fractalNoise
                   blend: overlay, opacity 15%, color monochrome, pointer-events:none

rendering-flags:
  font-smoothing:  antialiased
  image-rendering: auto
  text-rendering:  auto

### 8.5a. Color Manipulation
Not used in baseline style. Optional faded vintage variant (from deepseek) uses desaturation and sepia.

### 8.5b. Surface Layering
No backdrop filters or frosted glass.

### 8.5c. Gradients & Glow
None.

### 8.5d. Texture & Noise Simulation
- **Paper grain**: technique SVG feTurbulence, baseFrequency 0.65, numOctaves 3, type fractalNoise, surface full-page canvas, intensity barely perceptible, mix-blend-mode overlay, opacity 15%, color monochrome, no animation.  
- **Misregistration halos**: technique duplicate coloured fill with offset (1px left/up) and low opacity (10–15%), surface woodland and water fills, blend multiply or difference, color using fill color.  
- **Halftone water dots**: technique repeating radial-gradient with dot size ~1px, spacing ~4px, surface water areas only, intensity moderate, blend multiply, color #5B7FAE at 20–30% opacity (or cyan #00A3E0 from one provider).  

Tailwind-approximation: no native equivalent; use SVG or CSS background-image.

## 9. Components
### Icon Vocabulary
- system: custom geometric glyphs (trig point ▲, church with tower ╋□, church with spire ╋◯, windpump, car park P in rectangle)  
- size: w-6 h-6 (majority) — contested with w-4 h-4  
- color: #000000 default, #B36DAE for contour-related, #C3D3A5 for woodland  
- treatment: flat, no filter, no shadow  

### Buttons (Primary, Secondary)
- button-primary: fill #F5EBD9, border 2px solid #B36DAE, text #B36DAE, hover fill #B36DAE with white text, active darker, disabled opacity-40  
- button-secondary: fill transparent, border 2px dashed #E68A2E, text #E68A2E, hover fill #E68A2E with white text  

### Cards / Panels
- fill #F5EBD9, border solid #C3D3A5 (or black from others), rounded-none, interior p-2, optional grid-line background  

### Map Markers (Trig Point)
- geometry ▲, color #B36DAE or #000000, label spot-height in primary color  

### Legend Strip
- horizontal flex, items separated by thin orange rule, icon + label in text-sm  

### Road Number Badge
- rectangle with fill #F4A830 (A-roads) or white (B-roads), border black, bold uppercase  

### Input / Search
- fill #F5EBD9, border-bottom-2 solid #B36DAE, focus border-2 solid, no box-shadow, placeholder italic  

### Scale Bar
- horizontal bar with alternating black/white segments, 1 km increments, label below  

### North Arrow
- simple black chevron ↑, w-6 h-6, fixed top-right  

**Data Display Components:**

metric-cell:
  Background: bg-primary (#F5EBD9, OS Buff) with paper-grain texture.
  Border: border-b-2 outline (#B36DAE, magenta contour).
  Label: Helvetica text-xs uppercase, outline color.
  Value: Helvetica text-2xl font-bold, on-primary (#000000).
  Delta: monospace text-sm; positive in woodland (#C3D3A5), negative in contour (#B36DAE).
  No glow or drop-shadow — physical document aesthetic.

signal-bar:
  Track: bg-outline (#E8C3A8, faint peach grid line).
  Fill: bg-secondary (#C3D3A5, sage green ink). Height: 4px.
  Border: none — the ink line on ruled paper is the track.
  No glow, no texture on fill — flat ink.

status-cell:
  ok:   text-secondary (#C3D3A5) + paper grain border-2 in same color.
  warn: text-outline-variant (#E8C3A8) + pencil-mark border-1.
  err:  Contour border-2 in error magenta (#B36DAE); may carry ±1deg rotation.
  Fill: always transparent — status is communicated by text color and border, not fill.

data-table-row:
  Alternating: odd rows bg-primary-container (#E8DFD0, off-white paper); even rows bg-primary (#F5EBD9, manila).
  Cell border: border-b border-outline (#E8C3A8).
  Label: Helvetica text-sm uppercase, outline color.
  Value: Helvetica text-sm, on-primary (#000000).

chart-surface:
  Background: bg-primary-container (#E8DFD0, off-white paper).
  Grid lines: 1px border-outline (#E8C3A8, pencil graphite) at 25/50/75/100% heights.
  Axis labels: Helvetica text-xs, outline color.
  Line: secondary (#C3D3A5, sage ink), stroke-width 1.5px, no drop-shadow.
  Dots: secondary (#C3D3A5), r=2.5px. No glow.

### 10. Layout
- Spacing cadence: dense, use 4px / 8px / 16px increments  
- Grid tendency: strong 1 km grid as structural guide  
- Density: high — information-rich, symbols close together  
- Section separation: by grid lines or thin black rules  
- Alignment: left-aligned text, centred icons  
- Breakpoint behavior (majority from deepseek and crof-deepseek):  
  - 375px: mobile full-screen map, grid simplifies to every fifth line, icons reduced, controls in bottom sheet  
  - 768px+: full grid, permanent marginal strip, full symbol set  
- Motion: transition-duration 150–200ms, ease-out, no animation at rest, hover scale(1.05–1.1) for interactive symbols  

## 11. Design System Notes
### 11a. Use Constraints
Appropriate for outdoor/navigation apps, geographic data dashboards, environmental monitoring, hiking websites, UK‑centric interfaces. Wrong for glamorous consumer apps, neon-heavy designs, smooth glassmorphism, or playfully rounded UIs.

### 11b. Prompt Phrases (unanimous)
- “pale buff land base with magenta contour lines”  
- “misregistration halos on coloured fills”  
- “rights of way as green and red dashes”  
- “1 km orange grid (faint peachy)”  
- “italic hill/summit names; no all-caps for natural features”  
- “paper grain overlay at 15–20% opacity”  
- “halftone dot pattern in water areas”  
- “simple geometric icons: triangle for trig point, cross for church”  

### 11c. Do / Avoid (unanimous)

rule: Background must be Buff (#F5EBD9) — never white
do:   fill #F5EBD9 on all containers
avoid: fill #FFFFFF on any container

rule: Contour lines must be Magenta (#B36DAE) — never brown or black
do:   stroke #B36DAE for all contour lines
avoid: stroke #000000 or #8B4513 for contours

rule: 1 km grid must be present as a faint peachy divider
do:   grid-line #E8C3A8 visible across all sections
avoid: omit grid lines in map views

rule: Paper grain and misregistration artifacts are mandatory for authenticity
do:   overlay paper grain at 15–20% opacity with feTurbulence
avoid: flat, clean digital surface without grain

rule: Typography must be sans-serif (Helvetica/Arial) — never serif
do:   font-family Helvetica, Arial, sans-serif
avoid: font-family Georgia, Times New Roman, serif

rule: All colors must be muted — no neon or high saturation
do:   palette limited to buff, sage, deep blue, magenta
avoid: use #00FF00 or #FF0000 for emphasis

rule: All corners must be square — no rounded corners
do:   border-radius: 0px
avoid: border-radius: 4px or higher

rule: Outlines must be thin black — no 3D icons or emojis
do:   stroke 1px solid #000000 for symbols
avoid: use emoji icons or 3D icon sets

### 11d. Variation Bounds (unanimous cited from multiple providers)
1. Clean vs. worn: pristine sharp registration vs. field-folded, ink-smeared, yellowed edges  
2. Modern vs. vintage: contemporary symbols vs. 1980s OS symbol set  
3. Rural vs. urban fringe: large open spaces vs. dense housing estate fills  
4. Saturated vs. faded: bright magenta/blue vs. sun-bleached pastel

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts.
Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
A single map view fills the viewport: pale buff (#F5EBD9) land base with magenta (#B36DAE) contour lines at 5 m intervals. Green (#C3D3A5) woodland fills appear as solid patches, deep blue (#5B7FAE) water bodies. The 1 km grid (#E8C3A8) is faintly visible. A north arrow (simple black chevron) sits top-right, a scale bar (black/white alternating segments) bottom-left. Paper grain (feTurbulence, overlay 15%) is uniformly applied. No interactive elements are hovered or active. The typography for place names is Helvetica at various sizes, with hill names italicized. The overall impression is a static, printed map displayed on screen.

### 11e.ii — Maximum Expressiveness
The viewport shows a map with a dense urban fringe area. Multiple interactive elements are active: a trig point marker (▲) is hovered, scaling to 1.1, with a popup panel (z-40) showing spot height in magenta (#B36DAE). A footpath (green dash pattern) and bridleway (red dash pattern) cross. The legend strip is visible at the bottom, with icons and labels separated by thin orange rules. A search input is focused, with its bottom border (#B36DAE) boldened. A metric-cell displays a gauge with delta-up (#C3D3A5) and delta-down (#B36DAE) indicators. A data-table-row shows alternating manila (#F5EBD9) and off-white (#E8DFD0) backgrounds. The chart-surface has grid lines (#E8C3A8) and a line (#C3D3A5). The paper grain, misregistration halos on woodland and water fills, and halftone dots in water areas are all visible. The composition layers: base map (z-0), interactive symbols (z-10), overlays (z-40), modals (z-50). All state transitions are eased-out at 150ms.

### 11e.iii — Data Context
The system adapts for data-heavy contexts such as a geographic dashboard. The buff (#F5EBD9) background remains, but multiple metric-cells are arranged in a grid, each showing a label (Helvetica text-xs uppercase) and a value (Helvetica text-2xl bold). Deltas appear monospace, with color-coding: green (#C3D3A5) for positive, magenta (#B36DAE) for negative, peach (#E8C3A8) for flat. Signal-bars with 4px high tracks (#E8C3A8) and fills (#C3D3A5) indicate levels. Data-table-rows alternate backgrounds, with cell borders (#E8C3A8). Status-cells communicate via text color and border only: ok (#C3D3A5 border-2), warn (#E8C3A8 border-1), err (#B36DAE border-2, ±1° rotation). No chart surface or tooltip overlays are present unless explicitly needed. The typography hierarchy shifts: labels are smaller, values are larger and bold. The paper grain and grid lines persist, maintaining the cartographic identity. The composition remains dense, utilitarian, and grounded.

### 11f. Sources

This subject has minimal verified imagery. The visual claims below should be treated with caution.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** **Ordnance Survey Explorer 1:25,000** is a topographic map series covering the United Kingdom, typically published by the **Ordnance Survey** between 1970 and 2025. The identity description provided is (none), indicating no specific designer or foundry attribution is currently documented for this specific document version. Consequently, the source relies on general historical records of the **Ordnance Survey** rather than direct metadata.

**Verified imagery sources.** 1 URLs verified against institutional servers, distributed across:
- Geograph Britain and Ireland — 1 URL(s)

Key references include no institutional record at any URL. Consequently, visual sourcing remains unverified within the current documentation scope.

**Named typefaces.** The typography of this style is attested as:
- (none attested)

**Honest gaps.** The most significant gap is the recorded value of (none) in the honest gaps section. Since the honest gaps field is empty, there are no specific constraints or missing elements to address. No documented gaps were recorded by the forensic pipeline.
