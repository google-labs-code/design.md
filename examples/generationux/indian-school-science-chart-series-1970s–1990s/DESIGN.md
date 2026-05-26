---
version: alpha
name: "Indian School Science Chart Series (1970s–1990s)"
description: A digital interface language translating the hand-painted didactic precision of Indian school science charts from the 1970s–1990s. Flat unblended fills, thick black outlines, intentional misregistration, and paper grain evoke the nostalgic, instructive character of a dusty classroom wall chart.
colors:
  primary: "#B34A3C"
  on-primary: "#FFFFFF"
  secondary: "#6B7C52"
  on-secondary: "#FFFFFF"
  tertiary: "#D4A34B"
  on-tertiary: "#3B3B3B"
  surface: "#F5ECD7"
  on-surface: "#3B3B3B"
  outline: "#3B3B3B"
  outline-variant: "#B34A3C"
typography:
  display:
    fontFamily: "Oswald"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0.05em
    textTransform: uppercase
  headline:
    fontFamily: "Oswald"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0.025em
    textTransform: uppercase
  title:
    fontFamily: "Helvetica"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.375
    letterSpacing: -0.025em
    textTransform: uppercase
  body:
    fontFamily: "Times New Roman"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: 0em
  label:
    fontFamily: "Courier"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.375
    letterSpacing: -0.025em
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
  height-sm: "32px"
  height-md: "40px"
  height-lg: "48px"
  icon: "24px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.button}"
    padding: "8px"
  button-primary-hover:
    backgroundColor: "#942A1E"
    textColor: "{colors.on-primary}"
    padding: "8px"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    rounded: "{rounded.button}"
    padding: "8px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.button}"
    padding: "8px"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "24px"
  input:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.input}"
    padding: "4px"
  input-focus:
    textColor: "{colors.on-surface}"
    rounded: "{rounded.input}"
    padding: "4px"
  title-bar:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    height: "48px"
    padding: "16px"
  publisher-footer-strip:
    backgroundColor: "{colors.on-surface}"
    textColor: "#F5ECD7"
    height: "32px"
    padding: "8px"
  metric-cell:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.card}"
    padding: "16px"
  leader-line-callout:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    size: "24px"
  frame-border:
    rounded: "{rounded.default}"
    padding: "0px"
provenance:
  coverage_status: "minimal"
  identity_description: ""
  manual_enrichment_required: true
  imagery_count: 2
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: null
    typography_map: "entries:113"
  sources:
    - host: "ncert.nic.in"
      count: 2
  imagery_urls:
    - url: "https://ncert.nic.in/"
      host: "ncert.nic.in"
      institution: "National Council of Educational Research and Training, New Delhi"
      confidence_original: high
    - url: "https://ncert.nic.in/"
      host: "ncert.nic.in"
      institution: "NCERT"
      confidence_original: low
  typefaces_attested:
    []
  flags:
    - "few_usable_urls"
    - "no_typography_extracted"
    - "no_colour_extracted"
    - "1_robots_disallowed_urls"
  honest_gaps:
    []
---

# Design System: Indian School Science Chart Series (1970s–1990s)

## 0. Taxonomy & Identity

- entity-type: interface / system / environment
- artefact-family: operating system / software UI (with note: one provider suggests manual/datasheet)
- technique: digital vector / digital raster
- movement-lineage: vernacular commercial style
- era: postwar / 1980s postmodern (providers diverge on exact period; accepted as "postwar" with note of 1980s postmodern influence)
- geography: south asia
- domain: museum / archive / education
- formal-traits: diagrammatic, flat, weathered, informational
- color-logic: spot-color
- typography-mode: display type / grotesque
- texture: grainy, matte
- function: instruct
- provenance: revival / homage

## 1. Overview

This design system translates the earnest, hand-painted didactic precision of Indian school science charts from the 1970s–1990s into a digital interface language. It evokes a dusty classroom: diagrams faithfully copied onto cheap offset paper, pinned up for decades, bearing the honest wear of use. The emotional register is nostalgic, instructive, and slightly rough—a reminder that knowledge was once physical, printed, and pinned.

The rendering philosophy is flat, unblended fills bounded by thick black outlines, with intentional misregistration, paper grain, and fading. The density is moderate: generous white space around central diagrams, with marginalia, callouts, and bilingual labels. The style is unmistakable for its hand-drawn imperfections, limited palette of bold but muted colors, and the quiet dignity of a well-used educational tool.

**Recognizable signals:**
- Thick black outlines around every flat fill — no gradient, no shading, no airbrush
- Limited 3–5 color palette (brick red, muted olive, mustard, charcoal, cream) on warm off-white paper
- Prominent coloured title bar (red or olive) with white uppercase text
- Bilingual labels (English + Hindi/Devanagari) with baseline misalignment
- Leader lines with numbered callouts, terminating in small dots
- Double-line border (black outer, red inner) framing the entire chart
- Print artifacts: paper grain, misregistration, fold creases, staple holes, sun-bleaching

**What would break the style:**
- Gradients, smooth curves, perfect registration, pastel or neon colours, photographic imagery, drop shadows, modern rounded corners, anti-aliased edges, any sign of digital slickness.

## 2. Constants

- Light Mode: yes (warm off-white canvas)
- Dark Mode: no (the style is inherently light paper–based; a dark variant would lose the core identity)
- Responsive: yes – breakpoints at 375px (single-column, stacked) and 768px (multi-panel grid); generous margins at all sizes
- States: Default, Active, Disabled – Hover and Focus are not primary style concerns; interactions are instantaneous with color-only changes
- surface-simulation: paper — cheap offset-printed paper stock with grain, misregistration, fold creases, foxing, sun-bleaching, and staple holes; the dominant material identity of classroom wall charts

## 2a — Interaction Model

hover-delta:        color-shift — subtle fill color darkens or lightens on interactive elements (e.g., primary #b34a3c shifts to a slightly deeper brick); no movement, no glow, no shadow
active-delta:       offset-shift — element translates 0.5px in a random direction, simulating the physical imprecision of pressing a printed surface; no scale change
focus-style:        color-border — border color shifts from outline (#3b3b3b charcoal) to outline-variant (#b34a3c brick red), matching the inner line of the double-line border motif
transition-duration:0ms — instantaneous state changes; printed artifacts do not animate or ease
transition-easing:  none
exempt-animations:  none — no named keyframe loops required; all motion in this system is static or texture-based

## 3. Colors

A spot-color palette of 3–5 bold, slightly muted hues on an off-white paper stock background. No blending, no gradients – every shape is flat with a solid fill and a black stroke. Colors may appear slightly faded or muddy due to simulated age and cheap ink.

| Role | Hex | Descriptive Name | Usage | Tag |
|------|-----|------------------|-------|-----|
| primary | #b34a3c | Brick red | Title bars, primary fills, emphasis borders, active states | [inferred] |
| on-primary | #ffffff | White | Text on primary surfaces | [inferred] |
| secondary | #6b7c52 | Muted olive | Secondary fills, diagram interiors, secondary borders | [inferred] |
| on-secondary | #ffffff | White | Text on secondary surfaces | [inferred] |
| tertiary | #d4a34b | Mustard yellow | Accent fills, callout boxes, measurement annotations | [inferred] |
| on-tertiary | #3b3b3b | Charcoal | Text on tertiary surfaces | [inferred] |
| surface | #f5ecd7 | Warm cream | Page/canvas background | [inferred] |
| on-surface | #3b3b3b | Charcoal | All text, outlines, leader lines, numerals | [inferred] |
| outline | #3b3b3b | Charcoal | All strokes, borders, divider lines | [inferred] |
| outline-variant | #b34a3c | Brick red | Inner line of double-line border, status indicators | [inferred] |

No color blending — every shape is a flat, solid fill. Use exactly these swatches; never add extra hues. The "faded" quality comes from the paper texture overlay and misregistration artifacts (Section 8.5), not from color manipulation.

Dark mode variant not applicable.

## 4. Typography

All type mimics offset-printed character, often slightly misaligned or loosely spaced. English set in a bold condensed grotesque; Hindi labels in a thin Devanagari slab. Letters may appear slightly loose; do not fine-kern.

**display** (title bar, large numerals):
- font-family: CONTESTED:§3.primary_typeface — providers gave [Helvetica Bold, Akzidenz-Grotesk Bold]; none cited foundry; re-stack required
- Google Fonts substitute: CONTESTED:§3.google_fonts_substitute — providers gave [Oswald, Oswalt condensed, none]; no source; re-stack required
- font-size: text-4xl to text-5xl
- font-weight: font-bold to font-extrabold
- line-height: leading-tight
- letter-spacing: tracking-wider
- text-transform: uppercase

**headline** (section headers inside diagrams):
- font-family: CONTESTED:§3.secondary_typeface — providers gave [Helvetica Bold, Arial Narrow]; no foundry cited; re-stack required
- font-size: text-2xl to text-3xl
- font-weight: font-bold
- line-height: leading-tight
- letter-spacing: tracking-wide
- text-transform: uppercase

**title** (diagram primary name, bilingual pair):
- font-family: system sans-serif (e.g., Helvetica/Arial) for English; Noto Sans Devanagari for Hindi
- font-size: text-xl to text-2xl
- font-weight: font-semibold to font-bold
- line-height: leading-snug
- letter-spacing: tracking-tight
- text-transform: uppercase

**body** (English labels, callout text):
- font-family: Times New Roman, Georgia, serif (English); Noto Serif Devanagari or system serif (Hindi)
- font-size: text-sm to text-base
- font-weight: font-normal
- line-height: leading-relaxed
- letter-spacing: tracking-normal
- text-transform: uppercase for labels; normal-case for descriptive text

**label** (small callout annotations, measurements, Devanagari text):
- font-family: monospace (Courier) for numerals; Noto Sans Devanagari or system Devanagari for Hindi
- font-size: text-xs to text-sm
- font-weight: font-normal
- line-height: leading-snug
- letter-spacing: tracking-tight
- text-transform: normal-case (Hindi); uppercase (English numerals)

For numerals, use tabular-nums (monospaced figures). Baseline misalignment between English and Hindi lines is intentional — a print artifact. Spelling imperfections ("Resperation", "Oxegen") are style-authentic.

## 5. Elevation

Flat depth model — no shadow hierarchy. All elements sit on the same plane. Elevation is expressed only through the use of outline borders and fill contrast. Stacking context is simple: base content z-0, overlays z-40 (only for modals if needed).

## 6. Spacing & Sizing

- padding:
  - component-internal: p-4 (diagram panels, title bar)
  - section-internal: p-6 (between diagram and sidebar)
  - page-edge: p-8 (simulates 2–3cm margin)
- margin:
  - between-components: gap-4 (between panels)
  - between-sections: gap-8 (title to diagram, diagram to bottom strip)
- component-heights:
  - sm: h-8 (small callout boxes)
  - md: h-10 (default interactive targets)
  - lg: h-12 (title bar)
- icon-size: w-6 h-6
- avatar-size: not applicable

All spacing is generous, mirroring the simulated 1-inch margins of a printed chart.

## 7. Borders

- border-radius:
  - default: rounded-none (hard edges)
  - card: rounded-none
  - button: rounded-none
  - input: rounded-none
  - chip/badge: rounded-none
- border-width:
  - default: border-2 (2px, charcoal black)
  - emphasis: border-4 (thick double-line border)
- border-style: border-solid (dashed lines only for internal flow/arrows)
- double-line border: outer stroke black border-4, inner stroke primary (brick red) border-2, separated by 2–3px gap of cream paper. Implementation: nested divs or border + outline with offset. No Tailwind native equivalent.
- clip-path: not used; all shapes are rectilinear or hand-drawn organic.

## 8. Opacity

- disabled-state: opacity-40 to opacity-50
- ghost/secondary: not used
- overlay/scrim: not used (no modals native to the style; if needed, use opacity-80 dark overlay)
- hover-feedback: not opacity-based; color fill changes only

**Browser chrome (optional, for immersive experience):**
- selection:
  - background: rgba(179, 74, 60, 0.3) (primary at low opacity)
  - color: inherit
- scrollbar:
  - style: thin (6px width)
  - track: #f5ecd7
  - thumb: #b34a3c
  - thumb-hover: #8a2e2e

## 8.5. Visual Effects

### 8.5.0 — Physical Material Model

Declares the top-level surface simulation governing the entire page canvas.
This is distinct from component-level textures (§8.5d) — it is the global rendering layer.

material-model:    paper — cheap offset-printed uncoated paper stock

global-filter:     sepia(0.06) contrast(0.97) — simulates aged, slightly yellowed paper
                   with the reduced contrast of cheap offset printing on absorbent stock

global-overlay:    Paper grain via body::before pseudo-element:
                   SVG feTurbulence baseFrequency=0.65 numOctaves=3 fractalNoise
                   blend: overlay, opacity-15, position:fixed, z-index:9998,
                   pointer-events:none, top:0, left:0, width:100%, height:100%
                   Composited with fold crease (multiply, opacity-10) at 50% height
                   and foxing spots (multiply, opacity-10) near page edges.

rendering-flags:
  font-smoothing:  antialiased — standard rendering for offset-printed text simulation
  image-rendering: auto — no pixel-art requirements
  text-rendering:  auto — standard text rendering

### 8.5a – Color Manipulation

Not needed. The "aged" quality comes from texture overlays, not from CSS filters on colors. Colors are flat and directly applied.

### 8.5b – Surface Layering (Backdrop Filters)

Not applicable. All surfaces are opaque and flat; no translucency.

### 8.5c – Gradients & Glow

None. All visibility is from solid fill + black stroke.

### 8.5d – Texture & Noise Simulation

**Paper grain (offset-dot screen):**
- technique: SVG feTurbulence (baseFrequency 0.65, numOctaves 3, type fractalNoise)
- surface: full-page canvas, card fills (all surfaces)
- intensity: moderate
- blend: mix-blend-mode: multiply or overlay, opacity-15
- color: monochrome grain (black/white noise)
- animation: none
- tailwind-approximation: no native equivalent; use CSS background-image with SVG data-URI filter

**Misregistration offset:**
- technique: CSS transform on colored fill layers (translate 0.5–2px in random direction per diagram element)
- surface: primary fills, diagram shapes, title bar background
- intensity: subtle to moderate
- blend: none (flat colors)
- tailwind-approximation: no native equivalent; apply per-element transform

**Fold crease:**
- technique: horizontal linear-gradient (transparent → rgba(0,0,0,0.08) → transparent) at 50% height
- surface: full-page canvas behind content
- intensity: barely perceptible
- blend: multiply, opacity-10
- color: warm grey
- animation: none
- tailwind-approximation: bg-gradient-to-b from-transparent via-black/5 to-transparent

**Foxing (brown spots):**
- technique: scattered tiny brown semi-transparent circles via multiple radial-gradients or SVG pattern
- surface: page background, especially near edges
- intensity: very low (opacity-10)
- blend: multiply
- animation: none
- tailwind-approximation: none; implement with generated CSS background

**Sun-bleaching:**
- technique: linear-gradient from left (slightly lighter cream) to right (standard cream)
- surface: background
- intensity: very subtle
- blend: normal
- tailwind-approximation: bg-gradient-to-r from-[#F8F0E0] to-[#F5ECD7]

**Staple holes / thumbtack marks:**
- technique: two small dark semi-circles near top corners via pseudo-elements
- surface: top-left and top-right corners of card container
- intensity: static, always present optionally
- tailwind-approximation: after:content-[''] after:absolute after:top-2 after:left-2 after:w-2 after:h-2 after:rounded-full after:bg-black/20

**Ink wear / dust specks (optional):**
- technique: scattered 1–2px black dots via SVG pattern or pseudo-elements
- intensity: very low (opacity 5–8%)
- blend: normal

Compositing stack (from bottom to top): page background → sun-fade gradient → fold crease (multiply) → foxing (multiply) → paper grain (overlay) → content layer → misregistration on fill elements → staple holes (optional). Dark mode not applicable.
## 9. Components

### Icon Vocabulary
- system: custom glyphs — simplified vector line drawings of scientific apparatus (test tubes, leaves, gears, organs, chemical flasks), drawn with 2px stroke, flat solif fills where appropriate
- size: w-6 h-6 (inline), w-8 h-8 (standalone)
- color: inherits currentColor (black/charcoal) or primary/secondary for emphasis
- treatment: no filters or glow; purely flat; slight misregistration optional
- restrictions: no photographs, no gradients, no abstract shapes

### Image & Media Treatment
- aspect-ratio: aspect-[4/3] or aspect-square for diagram panels
- object-fit: object-contain (diagram must fit without crop)
- filter: none — keep full fidelity (if using photographs, apply grayscale and posterization to match palette; this style avoids photographs)
- overlay: optional grain overlay per 8.5d
- border: border-2 charcoal outline around the image frame; optional inner border-1 red
- dark-mode: not applicable

### Primary Button
- background: #b34a3c (brick red)
- text: #ffffff (white), uppercase, font-bold, text-sm
- border: border-2 charcoal
- border-radius: rounded-none
- padding: px-4 py-2
- hover: darker shade of brick (hover:bg-[#942a1e])
- active: even darker (active:bg-[#7a1f14])
- disabled: opacity-40, text remains white

### Secondary Button
- background: #6b7c52 (muted olive)
- text: #ffffff (white), uppercase, font-bold, text-sm
- border: border-2 charcoal
- border-radius: rounded-none
- padding: px-4 py-2
- hover: darker olive (hover:bg-[#54603b])
- active: darker still (active:bg-[#424c2e])
- disabled: opacity-40

### Tertiary / Ghost Button
- background: transparent
- text: #3b3b3b (charcoal), uppercase, font-bold, text-sm
- border: border-2 charcoal dashed (or solid)
- border-radius: rounded-none
- padding: px-4 py-2
- hover: bg-charcoal/10
- active: bg-charcoal/20

### Card / Panel (Chart Container)
- background: #f5ecd7 (warm cream)
- border: double-line border — outer charcoal border-4, inner brick red border-2, with 2px gap (nesting or outline-offset)
- border-radius: rounded-none
- padding: p-6
- shadow: none (flat)
- internal title bar: top strip (h-12) filled with brick red (#b34a3c) or olive (#6b7c52), white uppercase bold text, with a small chart-number badge (e.g., "Fig. 3") in corner
- optional: faint horizontal fold line (border-t-2 border-dashed border-charcoal/30) across middle

### Navigation (Tabs)
- style: narrow horizontal bar with section labels
- each tab: uppercase, font-bold, text-sm, border-b-2 border-charcoal
- active tab: border-b-4 border-brick, text brick
- inactive tab: text charcoal, border-b-2 border-charcoal
- hover: border-b-3 border-brick (no rounding)
- no rounded corners

### Leader Line Callout (Numbered Part)
- consists of: a numbered circle (w-6 h-6) filled with cream or mustard (#d4a34b), text charcoal, centered numeric label (font-mono, text-xs), connected to target by thin solid charcoal line (1px) terminating in a small dot (w-1.5 h-1.5, rounded-full bg-black)
- leader line can be straight or bent, always ends at dot
- label box: small rectangular (p-1 px-2) or oval (rounded-full), background white or mustard, border charcoal 1px, containing bilingual text

### Input / Form Field
- background: transparent (cream canvas)
- border: border-b-2 or border-2 charcoal
- border-radius: rounded-none
- padding: py-1 px-2
- text: charcoal, uppercase, font-family: Times New Roman, serif
- focus: border-brick, outline-none (or offset outline)
- placeholder: text-charcoal/50 uppercase

**Data Display Components:**

metric-cell:
  Background: #f5ecd7 (warm cream) with paper grain texture overlay.
  Border: double-line — outer charcoal border-4, inner brick red border-2.
  Label: strip at top (brick red #b34a3c or olive #6b7c52 fill, h-8), white uppercase bold text-sm condensed.
  Value: Times New Roman serif, text-2xl, font-bold, #3b3b3b (charcoal).
  Delta: serif text-sm; positive in #d4a34b (mustard), negative in #b34a3c (brick red), flat in #3b3b3b.
  No glow or drop-shadow — flat printed ink aesthetic.

signal-bar:
  Track: 1px border-b in #3b3b3b (charcoal) — a ruled line on paper.
  Fill: solid flat colour from palette (#6b7c52 olive or #b34a3c brick red). Height: 4px.
  Border: none — the fill is a flat block of colour.
  No glow, no gradient on fill — solid ink, no texture.

status-cell:
  ok: text in #6b7c52 (muted olive), uppercase bold, no fill change — green-adjacent in this palette signals nominal.
  warn: text in #d4a34b (mustard), uppercase bold, no fill change.
  err: text in #b34a3c (brick red), uppercase bold, optional border-2 brick red outline.
  Background: always #f5ecd7 (warm cream) — status communicated by text colour alone, not background fill.

data-table-row:
  Alternating: odd rows #f5ecd7 (warm cream); even rows #ede4cf (slightly deeper cream).
  Cell border: border-b-2 #3b3b3b (charcoal).
  Label: uppercase, font-bold, text-sm, charcoal, serif or condensed sans.
  Value: font-bold, text-sm, charcoal.
  No row-level surface effects beyond grain overlay.

chart-surface:
  Background: #f5ecd7 (warm cream).
  Grid lines: 1px #3b3b3b at opacity-25 — faint ruled lines like graph paper.
  Axis labels: Times New Roman text-xs, #3b3b3b, uppercase.
  Line: solid flat palette colour (#6b7c52 olive or #b34a3c brick red), stroke-width 2px, no glow.
  Dots: filled circles in palette colour, r=3px, border-1 charcoal. No glow.
  Bar fills: solid flat palette colours, no gradient, no shadow.

### Style-Native Primitives

**Title Bar:** Full-width top strip, height h-12, background brick red or olive, white uppercase bold condensed text. Double-line border below it.

**Frame Border (Double-line):** Outer charcoal border-4, inner brick red border-2 offset by 1–2px to simulate misregistration.

**Staple Holes:** Two small dark semi-circles near top corners, implemented as ::before/::after on root container.

**Publisher Footer Strip:** Narrow strip (h-8 to h-10) at bottom, background inverse-surface (#3b3b3b) or tertiary, with small white text: "EduCharts – Science Series – Chart No. 17", and a tiny price stamp in accent: "Rs. 2.50".

**Measurement Scale Bar:** Horizontal bar with tick marks and numeric annotations (monospace), drawn in charcoal with 1px strokes, placed near bottom of diagram.

## 10. Layout

- spacing cadence: generous; minimum 1-inch (24px) simulated margin around primary content
- grid tendency: single centered main diagram (60–70% of width) with side inset panels (30–40%) or a 2×2 grid of charts
- density: moderate — ample white space (like paper margins)
- section separation: double-line border frames entire chart; inside, ruled lines (border-b-2 charcoal) separate title from diagram, and diagram from footer
- alignment philosophy: diagram centered; labels left-aligned at margin; title centered; bottom strip left-aligned
- breakpoint behavior:
  - 768px and above: side-by-side layout (main diagram left, insets right) or 2-column grid
  - 375px (mobile): all content stacks vertically; main diagram reduces to full width; insets stack below; title bar shrinks to h-10; margins reduce to p-4
- motion: No motion. All state changes are instantaneous (0ms transition). No transitions, no animations. The style is static like a printed chart.

## 11. Design System Notes

### 11a. Use Constraints
**Appropriate for:** educational interfaces, science museum dashboards, infographic-heavy apps, nostalgic product pages, data visualizations that need a didactic, analog feel, children's learning platforms, archive-themed brand sites.

**Wrong for:** modern e-commerce, photo-heavy portfolios, interactive gaming UIs, fintech dashboards requiring sterile minimalism, any context where smooth animations or rounded modern shapes are expected, any context requiring high-contrast accessibility (the low contrast of cream and brick red may fail WCAG AA).

### 11b. Prompt Phrases
- "Educational print nostalgia — thick outlines, flat fills, bilingual labels"
- "Faded offset lithography charm — paper grain, misregistration, sun-bleaching"
- "Hand-painted diagrammatic clarity — every element has a black outline"
- "Bilingual label precision — English and Devanagari side by side"
- "Thick outlines and flat fills — no gradients, no antialiasing"
- "Misregistration and paper grain — the soul of a worn classroom chart"
- "Didactic earnestness — stiff, clear, slightly imperfect"
- "Science-fair warmth — an analogue school poster for the digital age"

### 11c. Do / Avoid Block

rule: Colour is restricted to the five-colour palette — brick red, muted olive, mustard yellow, charcoal, warm cream — because the palette mimics cheap offset lithography where spot colours are economically chosen.
do: All fills use #b34a3c, #6b7c52, #d4a34b, #3b3b3b, or #f5ecd7 exclusively. No tint ramps, no hue variation beyond these five values.
avoid: A sixth colour such as #4a90d9 (blue) or #e879f8 (violet) appearing anywhere — it breaks the lithographic constraint and reads as digital UI.

rule: Every element carries a thick black outline — this is a diagrammatic convention where outlines define form, not shading or gradients.
do: All shapes use border-2 or border-4 in #3b3b3b (charcoal). Icons drawn with 2px stroke and flat solid fills. Diagram components terminate in visible outlines.
avoid: Borderless shapes, stroke-width: 0.5px hairlines, or elements defined by colour fill alone without outline — these read as modern flat UI, not printed chart.

rule: Surface texture is mandatory — grain, misregistration, and paper wear simulate a physical printed artifact, not a clean digital screen.
do: Paper grain feTurbulence overlay at opacity-8 to opacity-12. Misregistration via 1–2px offset on inner border. Fold lines as border-dashed charcoal/30 across panels. Foxing as sparse radial-gradient spots at opacity-6.
avoid: Perfectly crisp edges, white #ffffff backgrounds without texture, pixel-perfect alignment of all borders — this reads as Figma export, not a classroom wall chart.

rule: Labels are uppercase, set in serif (Times New Roman) or condensed sans-serif, mirroring the lettering conventions of Indian educational posters.
do: Text labels in font-bold, uppercase, text-sm to text-base. Mixed serif/sans is acceptable. Bilingual labels in English and Devanagari placed side by side with deliberate baseline misalignment.
avoid: Sentence-case labels in a rounded sans-serif like Nunito, or script fonts, or lowercase italic — these read as modern editorial design, not didactic chart.

rule: Physical artifact markers — staple holes, fold lines, foxing, sun-bleaching — are subtle overlays that authenticate the print simulation without overwhelming it.
do: Staple holes as ::before/::after pseudo-elements (w-2 h-2, rounded-full, bg-charcoal/40) near top corners. Fold line as single border-dashed across mid-panel at charcoal/30. Sun-bleaching as radial aging overlay on one side.
avoid: No staple holes, no fold lines, no aging marks at all — the chart looks freshly exported from a vector tool, not like it hung in a classroom for fifteen years.

rule: All state changes are instantaneous (0ms) — the printed chart has no motion, no animation, no easing. Any transition implies a digital origin the style rejects.
do: transition-duration: 0ms on all interactive elements. Hover states change colour immediately. No keyframe animations. exempt-animations: none.
avoid: transition: all 200ms ease-out, spring-physics buttons, staggered fade-in on page load — these read as modern web app, not printed reference material.

rule: Shape language is angular and rigid — no rounded corners anywhere in the UI chrome. Rounded corners contradict the die-cut, guillotine-trimmed nature of printed charts.
do: border-radius: rounded-none (0px) on all buttons, cards, inputs, tabs. Rectangular label boxes. Sharp-cornered panels with double-line borders.
avoid: border-radius: 8px or border-radius: full on any element — rounded corners read as modern mobile UI, not government-press lithographic printing.

rule: No photographic imagery or 3D shading — the style is flat, diagrammatic, and didactic. Photorealism contradicts the illustrative convention of educational wall charts.
do: Custom vector glyphs for all iconography (2px stroke, flat fill). Diagrams use flat colour areas separated by thick outlines. No box-shadow, no gradient fills, no perspective transforms.
avoid: A hero photograph with object-fit: cover, or a card with box-shadow: 0 4px 12px rgba(0,0,0,0.15), or a button with linear-gradient background — these read as contemporary web design, not offset lithography.

### 11d. Variation Bounds
- **Clean vs. grimy:** Scale from pristine (crisp registration, minimal grain, no wear) to heavily used (maximum misregistration, fold lines, foxing, sun-bleaching). Control via overlay opacity and offset randomization.
- **Science domain:** Choose one of biology, physics, chemistry, geology, astronomy — each changes the diagram motifs but not the structural style.
- **Label language dominance:** Slide from mostly English to mostly Hindi to fully bilingual; baseline misalignment between scripts is constant.
- **Inking fidelity:** Fresh (sharp lines, perfect borders) to worn (broken lines, faded areas, rub). Apply via stochastic line break overlays.
- **Color saturation:** Fresh-from-press (vivid, full saturation) vs. sun-faded (paler, brownish cast, especially on one side). Adjust via CSS filter saturate() and radial aging overlay.

### 11e. Compositional Signatures

### 11e.i — At Rest
A single Chart Container panel fills the viewport. Surface is warm cream (#f5ecd7) with paper grain feTurbulence overlay at opacity-8. Double-line border frames the whole: outer charcoal border-4, inner brick red border-2 offset 1–2px for slight misregistration. Title Bar at top (h-12, brick red #b34a3c fill, white uppercase bold condensed text, chart-number badge "Fig. 1" in the top-right corner). A centred scientific diagram occupies 60–70% of the panel width — all elements drawn with thick charcoal (#3b3b3b) outlines and flat fills from the five-colour palette. Leader line callouts (mustard #d4a34b numbered circles, charcoal lines, terminal dots) connect labels to diagram parts. Publisher Footer Strip at bottom (h-8, inverse-surface #3b3b3b fill, white text "EduCharts – Science Series – Chart No. 17", tiny mustard price stamp "Rs. 2.50"). Staple holes (::before/::after, w-2 h-2, bg-charcoal/40) near top corners. No motion. No animation. All transitions 0ms.

### 11e.ii — Maximum Expressiveness
A 2×2 grid of Chart Containers, each panel independent with its own Title Bar in alternating brick red (#b34a3c) and muted olive (#6b7c52). Every panel carries the double-line border with visible 1–2px misregistration. Diagrams are dense — cross-sections, anatomical illustrations, circuit schematics, geological strata — all in thick charcoal outlines with flat palette fills. Leader line callouts throughout, mustard numbered circles with bilingual labels (English uppercase serif, Devanagari alongside, deliberate baseline offset). A fold line bisects the full composition horizontally (border-dashed, charcoal/30). The upper-right panel shows foxing — sparse radial-gradient spots at opacity-6. The left column carries a sun-bleaching radial aging overlay, fading colours toward brownish cream. The lower-right panel has maximum inking wear — broken lines, faded areas, stochastic line-break overlays. Staple holes at all four corners of the outer frame. Grain overlay at opacity-12. Everything static, 0ms transitions, no easing.

### 11e.iii — Data Context
Data elements adopt the chart-panel aesthetic without breaking the printed-artifact illusion. Each metric is a small Chart Container: warm cream (#f5ecd7) background, double-line border (outer charcoal border-4, inner brick red border-2), with a brick red or olive Title Bar strip (h-8) containing the metric label in white uppercase bold text-sm. The metric value sits below in Times New Roman serif, text-2xl, font-bold, charcoal (#3b3b3b). Delta indicators render as serif text-sm: positive in mustard (#d4a34b), negative in brick red (#b34a3c), flat in charcoal (#3b3b3b). Data tables alternate warm cream (#f5ecd7) and deeper cream (#ede4cf) rows with border-b-2 charcoal separating them. Status is communicated by text colour alone — olive (#6b7c52) for ok, mustard (#d4a34b) for warn, brick red (#b34a3c) for err — no background fills change. Bar fills are solid flat palette colours with no glow or gradient. Chart surfaces use warm cream background with charcoal grid lines at opacity-25 (1px, like ruled graph paper), axis labels in Times New Roman text-xs uppercase. No rounded corners anywhere. Paper grain persists on every surface.

### 11f. Sources

This subject has minimal verified imagery. The visual claims below should be treated with caution.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** The **Indian School Science Chart Series** was produced from the **1970s through the 1990s** as classroom educational material for Indian school science curricula. No specific designer, studio, publisher, or institutional attribution has been documented in the forensic seed. The series functioned as widely circulated pedagogical visual aids, though precise provenance remains unrecorded.

**Verified imagery sources.** 2 URLs verified against institutional servers, distributed across:
- National Council of Educational Research and Training, New Delhi — 1 URL(s)
- NCERT — 1 URL(s)

No imagery references were captured by the forensic pipeline for this entry.

**Named typefaces.** The typography of this style is attested as:
- (none attested)

**Honest gaps.** No documented gaps were recorded by the forensic pipeline. Systematic archival research into Indian state and national education boards, combined with examination of publisher catalogs from the period, would begin to establish attribution, production context, and the full scope of the series' visual vocabulary.
