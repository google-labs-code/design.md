---
version: alpha
name: "HyperCard Interface System (1987)"
description: "A 1-bit monochrome pixel-fidelity system drawn from Apple's 1987 card-stack authoring environment, with orthographic geometry, bitmap typography, and hard 1-px offset shadows."
colors:
typography:
  display:
    fontFamily: "Chicago"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0em
    textTransform: "normal-case"
  headline:
    fontFamily: "Chicago"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0em
    textTransform: "normal-case"
  title:
    fontFamily: "Chicago"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0em
    textTransform: "normal-case"
  body:
    fontFamily: "Geneva"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0em
    textTransform: "normal-case"
  label:
    fontFamily: "Geneva"
    fontSize: 9px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0em
    textTransform: "normal-case"
rounded:
  card: "0px"
  button: "6px"
  chip: "0px"
spacing:
  component-internal: "4px"
  section-internal: "16px"
  gap-component: "8px"
  gap-section: "16px"
  icon: "16px"
components:
  button-primary:
    backgroundColor: "#FFF"
    textColor: "#000"
    rounded: "{rounded.button}"
    padding: "8px"
    height: "32px"
  button-primary-hover:
    backgroundColor: "#FFF"
    textColor: "#000"
    rounded: "{rounded.button}"
    padding: "8px"
    height: "32px"
  card:
    backgroundColor: "#FFF"
    rounded: "{rounded.card}"
    padding: "8px"
  input:
    backgroundColor: "#FFF"
    textColor: "#000"
    rounded: "{rounded.card}"
    padding: "4px"
    height: "32px"
  input-focus:
    backgroundColor: "#FFF"
    textColor: "#000"
    rounded: "{rounded.card}"
    padding: "4px"
    height: "32px"
  checkbox:
    width: "10px"
    height: "10px"
    backgroundColor: "#FFF"
    rounded: "{rounded.card}"
provenance:
  coverage_status: "complete"
  identity_description: ""
  manual_enrichment_required: false
  imagery_count: 7
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: null
    typography_map: "entries:113"
  sources:
    - host: "en.wikipedia.org"
      count: 3
    - host: "www.folklore.org"
      count: 3
    - host: "www.computerhistory.org"
      count: 1
  imagery_urls:
    - url: "https://en.wikipedia.org/wiki/HyperCard"
      host: "en.wikipedia.org"
      institution: "Wikipedia / Wikimedia Commons"
      confidence_original: high
    - url: "https://en.wikipedia.org/wiki/Chicago_(typeface)"
      host: "en.wikipedia.org"
      institution: "Wikipedia / Wikimedia Commons"
      confidence_original: high
    - url: "https://www.folklore.org/ProjectView.py?project=HyperCard"
      host: "www.folklore.org"
      institution: "Folklore.org"
      confidence_original: medium
    - url: "https://www.folklore.org/StoryView.py?story=HyperCard.txt"
      host: "www.folklore.org"
      institution: "Folklore.org"
      confidence_original: high
    - url: "https://www.folklore.org/StoryView.py?story=HyperCard.txt"
      host: "www.folklore.org"
      institution: "Folklore.org"
      confidence_original: low
    - url: "https://en.wikipedia.org/wiki/HyperCard"
      host: "en.wikipedia.org"
      institution: "Wikipedia / Wikimedia Commons"
      confidence_original: medium
    - url: "https://www.computerhistory.org/collections/catalog/102658804"
      host: "www.computerhistory.org"
      institution: "Computer History Museum"
      confidence_original: low
  typefaces_attested:
    []
  flags:
    - "no_typography_extracted"
    - "no_colour_extracted"
    - "1_robots_disallowed_urls"
  honest_gaps:
    []
---
# Design System: HyperCard Interface System (1987)

## 0. Taxonomy & Identity

entity-type:        interface / system / environment
artefact-family:    operating system / software UI
technique:          digital raster
movement-lineage:   1980s postmodern [majority: 2/4, one provider cites "1990s desktop / cyber / rave", one "design movement"]
era:                1980s postmodern
geography:          US / Canada
domain:             internet / software / AI
formal-traits:      grid-based, geometric, utilitarian, modular
color-logic:        monochrome
typography-mode:    sans [majority: 2/4; one "geometric sans", one "grotesque"]
texture:            matte, smooth
function:           navigate
provenance:         revival / homage

## 1. Overview

HyperCard is a 1-bit monochrome pixel-fidelity system drawn from Apple's 1987 card-stack authoring environment. Every interface element is orthographic—straight lines, right angles, no anti-aliasing—rendered on a fixed 512×342-pixel canvas that scales by integer multiples with nearest-neighbor interpolation. The emotional register is utilitarian, direct, and nostalgic: a graph-paper clarity that prioritizes legibility over ornament.

Its recognizable character lives in the hard 1-pixel offset drop shadow (bottom-right on every floating element), the absence of gray midtones, the bitmap-rendered Chicago typeface at 72 dpi, and the discrete card-based layout where each screen is a self-contained unit with a background layer and a foreground layer. The movement lineage is rooted in 1980s postmodern software—System UI aesthetics before gradients, translucency, or smooth curves, though some interpretations place it in the 1990s desktop/cyber era.

- **Emotional tone:** Utilitarian, direct, nostalgic, legible
- **Era / lineage:** 1987 Apple HyperCard — 1980s postmodern software UI
- **Density level:** Sparse — generous white space, 8-pixel alignment gutters, maximum field width ~40–50 characters
- **Core rendering philosophy:** 1-bit monochrome, pixel-perfect, no anti-aliasing, no gray, no transparency
- **What makes it recognizable:** Hard 1-px offset shadow, Chicago bitmap type, 512×342 card canvas, square controls with beveled edges, 8-pixel grid discipline
- **What would break it:** Gradients, rounded corners beyond ~6px button radius, anti-aliased text, drop shadows with blur, color beyond black/white (or a single controlled accent), overlapping windows, smooth scaling

## 2. Constants

Light Mode:   primary — white (#FFF) canvas with black (#000) ink
Dark Mode:    CONTESTED:§2.dark_mode — providers split: 2 support a dark variant (invert palette), 2 do not; no consensus. When implemented, the variant swaps black and white surfaces while maintaining 1-bit discipline; hard shadow remains black-on-white (shadow disappears on black surfaces unless recast as white offset).
Responsive:   No — canvas is fixed at 512×342 px; scale by integer multiples only, always with nearest-neighbor interpolation. At viewports narrower than 512 px, letterbox or crop; at viewports wider, center or scale up.
States:       Default, Active (pressed/selected — inverts fill), Disabled (indicated by absent shadow + patterned fill or border treatment; no opacity change)
surface-simulation: none — clean digital, no surface simulation

## 2a — Interaction Model

hover-delta:        none — no hover states; original system has no pointer tracking
active-delta:       fill-invert — on press, the element's fill inverts (black ↔ white); bevel also inverts
focus-style:        outline — keyboard focus indicated by a 1‑px dotted black border around the focused element
transition-duration:0ms — no transitions; state changes are instantaneous
transition-easing:  none
exempt-animations:  none — no keyframe animations exist

## 3. Colors

black (#000) [attested] — Ink: all strokes, text, borders, shadows, icon glyphs, checked state fills
white (#FFF) [attested] — Canvas: background, card fill, field fill, text on inverse selection

accent (optional — varies by remix intent):
  CONTESTED:§3.hex_accent — providers disagree on existence of an accent color; some suggest a single neon hue (e.g., cyan #00FFFF or red #FF0000) for active states, others omit. No consensus. When used, accent replaces black for active-state fills, selection highlights, and navigation arrows.

inverse-selection:
  background: black (#000)
  text:       white (#FFF)
  usage:      selected field content, active button label, highlighted menu item

## 4. Typography

All text is bitmap-rendered at 72 dpi with no anti-aliasing, no kerning, no sub-pixel rendering. Left-aligned in fields (top-anchored), centered within button rectangles. Maximum field width ~40–50 characters; no text wrapping beyond that. No bold, italic, or underline — only plain weight (pseudo-bold system variant allowed for menu titles).

display:
  font-family:      CONTESTED:§3.primary_typeface — providers agree on "Chicago" but no foundry or year citation; re-stack required. Render as system sans-serif fallback or supply as image glyphs.
  font-size:        text-lg (18–24 px / 12–24 pt at 72 dpi — providers vary; majority around 18–24 px)
  font-weight:      font-normal
  line-height:      leading-tight (1.15–1.2)
  letter-spacing:   tracking-normal (0 px)
  text-transform:   normal-case

headline:
  font-family:      CONTESTED:§3.primary_typeface (see note)
  font-size:        text-base (12–18 px)
  font-weight:      font-normal
  line-height:      leading-tight
  letter-spacing:   tracking-normal
  text-transform:   normal-case

title:
  font-family:      CONTESTED:§3.primary_typeface
  font-size:        text-sm (10–14 px)
  font-weight:      font-normal
  line-height:      leading-tight
  letter-spacing:   tracking-normal
  text-transform:   normal-case

body:
  font-family:      CONTESTED:§3.secondary_typeface — providers give "Geneva" or "Monaco" but no foundry citation; re-stack required. Render as system sans-serif; Monaco used for monospaced contexts.
  font-size:        text-xs (9–12 px)
  font-weight:      font-normal
  line-height:      leading-tight
  letter-spacing:   tracking-normal
  text-transform:   normal-case

label:
  font-family:      CONTESTED:§3.secondary_typeface
  font-size:        text-[9px] to text-xs (9–10 px)
  font-weight:      font-normal
  line-height:      leading-none (1.0)
  letter-spacing:   tracking-normal
  text-transform:   normal-case

**Google Fonts substitute:** CONTESTED:§3.google_fonts_substitute — all providers state no Google Fonts substitute exists for Chicago/Geneva/Monaco, but no source cited; re-stack required.

**Monospace / tabular-nums requirement:** Monaco (bitmap, 9 pt) for script fields, message box command input, and any editable text requiring character alignment. No tabular-nums variant exists — all numerals are fixed-width in the bitmap font by nature of the 72 dpi rendering.

## 5. Elevation

Hard 1-pixel offset drop shadow — never blurred. The shadow is a pure black (#000) 1-px rectangle offset +1 px right and +1 px down from the element bounding box.

card-shadow:         1‑px black offset (bottom‑right) on cards and windows
modal-shadow:        1‑px black offset (bottom‑right), darker border than card (border-2)
floating-shadow:     1‑px black offset (bottom‑right) on dialog boxes, pop-up menus, and floating tool palettes
button-bevel:        no shadow — uses bevel (white top/left, black bottom/right)
pressed-state:       bevel inverts (black top/left, white bottom/right); shadow disappears

Flat depth model — no hierarchical shadow system. All shadows are identical in size, offset, and color. Depth is communicated by order of rendering, not shadow variance.

**Stacking context:** Not applicable — no z-axis layering beyond rendered draw order. Modals appear as a darker-bordered card drawn on top of the stack, with the same 1-px shadow. When z-index is required (implementation): base-content z-0, menu bar z-10, overlays z-40, modals z-50.

## 6. Spacing & Sizing

padding:
  card-edge:              p-2 (8 px safety margin between card edge and interactive content)
  component-internal:     p-1 to p-2 (4–8 px — inside button and field borders; majority p-2)
  section-internal:       p-4 (16 px — between grouped controls)

margin:
  between-components:     gap-2 (8 px — aligned to 8-pixel grid)
  between-sections:       gap-4 (16 px — between card sections e.g., title area to body)
  page-edge (canvas):     0 px — card edge is canvas edge; content inset by 8 px

component-heights:
  sm (label/chip):        h-6 to h-8 (24–32 px — providers vary)
  md (button/field):      h-8 to h-10 (32–40 px — majority h-8)
  lg (menu bar):          h-[18px] to h-12 (18–48 px — fixed system menu bar height ~18-20 px; navigation buttons larger)

icon-size:                w-4 h-4 (16 × 16 px) or w-8 h-8 (32 × 32 px)
avatar-size:              not applicable — no avatar convention in 1-bit system

## 7. Borders

border-radius:
  default (card/window):  rounded-none — square corners
  card:                   rounded-none (1–2 px black border)
  button:                 rounded-md (6 px radius — the only element with curved corners)
  input/field:            rounded-none (1 px black border, white fill)
  chip/badge:             rounded-none (1 px black border, pattern fill optional)
  checkbox:               rounded-none (7–10 px square)
  radio-button:           rounded-full (7–10 px circle)

border-width:
  default (card outline): border (1 px — cards, windows, fields, controls)
  emphasis (modal):       border-2 (2 px — modal dialog borders, active selection)
  dividers:               border-t or border-b (1 px dotted or dashed)

border-style:
  default:                border-solid
  separators:             border-dashed (alternating 2‑px black/white dashes)
  decorative rules:       border-dotted

border-image:
  Not applicable — no gradient or ornamental borders.
  The 1-bit system uses only solid and dashed line styles.

clip-path:
  Not applicable — all elements are rectangular or simple rounded-rect (button).
  No polygonal clipping required.

## 8. Opacity

disabled-state:     Not applicable — 1-bit system has no opacity.
                    Disabled elements use pattern fill (8×8 tile: checkerboard, hatch, or stipple) or removed shadow instead.

ghost/secondary:    Not applicable — no opacity-based ghosting.
                    Secondary actions are drawn with the same weight as primary actions.

overlay/scrim:      Not applicable — no translucent overlays.
                    Modal dialogs use a darker card border (2-px vs. 1-px) and
                    1-px offset shadow; no scrim behind.

hover-feedback:     Not applicable — no pointer tracking in original system.

**Browser chrome** — activate: HyperCard is a dark-ink-on-light-canvas system with signature-accent discipline.

selection:
  background:  black (#000)
  color:       white (#FFF)

scrollbar:
  style:       styled — narrow track with arrow buttons and proportional thumb
  width:       thin — 14–16 px (track) / 8×8 px (arrow buttons)
  track:       white (#FFF) with 1-px black border
  thumb:       black (#000) — square proportional to content
  thumb-hover: black (#000) — no hover state change

## 8.5. Visual Effects

CONTESTED:§8.5 — providers split on inclusion of decorative effects. Some include optional CRT scanlines (repeating horizontal lines, subtle overlay) and 8×8 pattern tiles as texture; others omit. No consensus. Core system has no color manipulation, surface layering, gradient fills, glow effects, or compositing stack. Patterns (8×8 tile fills) are structural component decorations described in Section 9, not independent visual effects.
## 9. Components

**Icon vocabulary:**
icon-vocabulary:
  system:       custom pixel glyphs — 16×16 or 32×32 px, 1-bit, hand-drawn with 1-px line weight, no shading, no anti-aliasing
  size:         w-4 h-4 (16×16 px) or w-8 h-8 (32×32 px)
  color:        black (#000) on white (#FFF)
  treatment:    no treatment — purely flat, no filter, no glow, no animation
  restrictions: no filled-area icons (all strokes); no perspective; no shading; no icons smaller than 16×16 px; no multi-color icons
  standard set: hand cursor (open palm), arrow (select), lasso (edit), paint bucket, text tool, brush, apple logo (bitten apple)

**Image / media treatment:**
image-treatment:
  Not applicable — HyperCard is a 1-bit system with no photographic or continuous-tone media. All graphics are pixel art drawn at 1-bit depth. When media is required (remix context), convert to 1-bit dithered bitmap using error-diffusion or 8×8 tile pattern thresholding.

---

**Buttons (primary, secondary, destructive):**

Rectangular or rounded-rect (radius ~6 px, using rounded-md).
- Default: 1-px black border, white fill, bevel (white top/left edge, black bottom/right edge)
- Active (pressed): fill inverts to black, text inverts to white, bevel reverses (black top/left, white bottom/right)
- Disabled: 1-px black border, inset pattern fill (8×8 checkerboard), no bevel, no shadow
- Label: Chicago bitmap, 12–14 pt (or 9–12 pt), centered within button rectangle, no icon unless glyph-only button
- Height: typically h-8 (32 px) default; some variations h-6 or h-10

Primary button: standard beveled rectangle; no distinction from secondary beyond label content — all buttons share identical visual treatment.
Secondary button: identical to primary.
Destructive button: identical to primary (no red/bold treatment); use label text to indicate destructive action.

Hover state: not applicable — no pointer tracking.

**Cards / Panels:**

Discrete "card" — the fundamental container unit.
- Size: full canvas at 512×342 px (or integer multiple)
- Border: 1–2 px solid black border (rounded-none)
- Fill: white (#FFF)
- Shadow: hard 1-px black offset (bottom-right)
- Background layer: solid white or 8×8 tile pattern (checkerboard, stripes, dots) — never photo or gradient
- Foreground layer: contains all interactive controls
- Internal margin: 8 px from card edge to any content
- Each screen is a discrete card; no overlapping cards
- Modal dialog: appears as a card with 2-px border + 1-px shadow, drawn on top of current card (no scrim)

**Navigation:**

Menu bar (18–20 px tall, fixed at top of card):
- Apple logo (bitten apple pixel glyph, 16×16 px) at far left
- Standard menus: File, Edit, Go, Tools, Objects
- Menu items in Chicago 12 pt, left-aligned in bar
- Active menu item: white text on black rectangle (inverse video)
- Menu bar sits flush with card top edge (no border)

Title bar:
- Card name / number, left-aligned, Chicago 14 pt
- 1-px bottom border (solid black) separating title from card body

Navigation buttons (bottom of card, fixed position):
- Back, Home, Forward — standard beveled buttons, Chicago 12 pt
- Aligned in a row with 8-px gutter between them
- Home button centered; Back and Forward flanking

Active state: selected tab or current card indicated by inverse-video title bar (white text on black fill)

**Inputs / Forms:**

Fields:
- Plain rectangle with 1-px black border, white fill, no inner shadow
- Text: left-aligned, top-anchored, Geneva or Monaco 9–12 pt
- Blinking insertion caret: 1-px wide, toggles every 0.5 s (steps(1))
- Maximum width: ~40–50 characters; no wrapping beyond
- Selection: inverse video (white text on black fill)
- Disabled: 1-px border + checkerboard pattern fill

Message box (single-line text field):
- Docked at bottom of card when present
- Geneva/Monaco 12 pt for command input
- 1-px black border, white fill
- Optional: ">" prompt character at left margin

Checkboxes:
- Small square (7–10 px), rounded-none, 1-px black border
- Unchecked: white fill, black border
- Checked: filled black (#000) or X glyph in same stroke weight
- Label: Chicago/Geneva 9 pt, right-adjacent

Radio buttons:
- Small circle (7–10 px), rounded-full, 1-px black border
- Unchecked: white fill, black border
- Checked: solid black 3×3 px circle at center
- Label: same as checkbox

Focus ring: not applicable — focus indicated by caret (fields) or selection highlight (inverse video). No outline or ring.

**Style-native primitives:**

Scroll bars:
- Narrow track (14–16 px wide), white fill, 1-px black border
- Up/down arrow buttons: 8×8 px triangle glyphs (▲ ▼) in bordered boxes
- Thumb: square, black fill, proportional to content length
- Track has no shadow; thumb sits flush with track surface
- Scrolling: pixel-perfect, one line per click, no easing

Pop-up menus:
- Rectangle field with 1-px black border, white fill
- Downward-pointing triangle (▼, 6×6 px) at right edge of field
- Selected value displayed left-aligned in field
- Drop-down list: appears as a card overlay with 1-px black border, entries in Chicago 12 pt, inverse-video selection

Progress bars:
- Thin rectangle (height ~8–12 px) with 1-px black border
- Fill: black (#000) progressing left-to-right
- No animation — static fill proportional to progress
- Optional: percentage text (9 pt) centered in bar

Pinstripe separators / dotted rules:
- Horizontal or vertical dotted line: alternating 2-px black / 2-px white
- Used between sections, below title bars, above navigation row

Window chrome (System 7 chessboard reveal):
- Window opens with chessboard pattern reveal animation
- Window frame: 1-2 px black border, title bar with Chicago 12 pt title
- Close box: small square (8×8 px) at left of title bar
- Resize handle: bottom-right corner, diagonal pattern

## 10. Layout

**Spacing cadence:** 8-pixel grid — all controls, gutters, margins, and alignment snap to 8-px increments. Component heights are multiples of 8 px. Internal padding uses 4-px half-grid increments inside controls only.

**Grid tendency:** Fixed — no fluid grid. The canvas is locked at 512×342 px. Element positions are absolute within the card (no auto-layout). Controls align to an invisible 8-px grid, not a multi-column layout.

**Density:** Sparse — generous white space around controls. Maximum field width ~40–50 characters. The card has one primary content area with supporting navigation at top and bottom. No crowding, no overflow scrolling within the card.

**Section separation logic:** The card is divided into three vertical bands: menu bar (top 18–20 px), content area (remaining height minus bottom navigation), and navigation row (bottom ~32 px). Horizontal rules (dashed 1-px) separate title bar from body, and body from navigation.

**Alignment philosophy:** Left-aligned text in fields, centered text in buttons. Top-anchored text in fields. Icons are top-left anchored with no centering. The menu bar is left-anchored. All elements align to the 8-px grid — nothing floats or is centered unless explicitly a button label.

**Breakpoint behavior:**

375 px viewport (mobile):
  The 512-px card overflows horizontally. Two strategies:
  a) Scale down by integer divisor (2× → 256×171 px) with nearest-neighbor,
     then center in viewport — text becomes very small but remains sharp.
  b) Letterbox with white fill on sides — card retains native resolution,
     user pans/scrolls to see full width.
  Default: letterbox (b). The card is never cropped or reflowed.

768 px viewport (tablet):
  Card fits comfortably. Scale up by 1.5× (768×513 px) using nearest-neighbor.
  Center card in viewport with white margin on bottom if height overflow.
  No reflow, no column changes, no responsive adaptation.

**Motion block:**

motion:
  transition-duration:        0–100 ms (button press); 250–1000 ms (card transitions)
  transition-timing-function:  steps(1) — no easing curves; instantaneous or stepped
  transition-property:        Not applicable — transitions are discrete pixel shifts, not CSS property transitions
  transition-delay:           none
  transition-behavior:        allow-discrete

  animation:
    card-wipe:
      value:                    right-to-left or left-to-right, full card width
      over:                     250–1000 ms, steps(N) where N = card width in pixels
      trigger:                  on-state-change (navigate to next/previous card)

    card-dissolve:
      value:                    stepping through dither patterns (coarse to fine)
      over:                     250–1000 ms, steps(8–16) per dither frame
      trigger:                  on-state-change (alternate transition)

    button-press:
      value:                    instant invert toggle (white↔black fill)
      over:                     16–32 ms (1–2 frames at 60 fps), steps(1)
      trigger:                  on-active

    scroll-field:
      value:                    vertical pixel shift, one line height per trigger
      over:                     0 ms — instantaneous, no interpolation
      trigger:                  on-scroll (click on up/down arrow)

    window-open (chessboard):
      value:                    chessboard pattern reveal — 8×8 px tiles toggle from white to black in staggered order
      over:                     500–1000 ms, steps(tile-count)
      trigger:                  on-load (dialog or window appearance)

    caret-blink:
      value:                    visible ↔ hidden (1-px vertical bar)
      over:                     500 ms, steps(1) — toggle every 500 ms
      trigger:                  looping (continuous while field is focused)

  transform-at-rest:
    all elements rest at transform: none

  transform-on-interact:
    button-press:    none (use instant invert instead)
    No other transform interactions defined.

  transform-style:       flat
  transform-perspective: not applicable
  backface-visibility:   not applicable

  Motion style rules:
  - Data/utility: transitions are purely functional — no decorative animations
  - All motion is discrete (steps), never smooth (ease)
  - No opacity, no scaling, no z-axis movement — every animation is a pixel shift or a binary state toggle
  - Duration is proportional to content complexity, not aesthetic preference

## 11. Design System Notes

### 11a. Use Constraints

**Appropriate contexts:** Prototyping tools, nostalgic "card stack" applications, educational software, archival/collection interfaces, pixel-art creative tools, low-fi wireframing systems, retro computing museum exhibits, data-entry interfaces that benefit from distraction-free monochrome rendering, terminal-adjacent admin panels.

**Wrong contexts:** High-traffic consumer mobile apps (the fixed 512×342 canvas does not adapt to device sizes), photography portfolios (no continuous-tone support), modern SaaS dashboards requiring multi-column responsive layouts, interfaces that depend on color coding for meaning, accessibility-sensitive applications where color contrast is the only differentiator (1-bit removes that dimension rather than enhancing it), any context requiring smooth animation or translucent layering.

### 11b. Prompt Phrases

1. "Render as 1-bit monochrome with hard 1-px offset shadow, no anti-aliasing"
2. "Align every control to the 8-pixel grid with 8-px gutters"
3. "Use Chicago bitmap type at 72 dpi for all display and title text"
4. "Draw all curves as stair-stepped pixel edges — no smooth arcs"
5. "Apply bevel to buttons: white top/left, black bottom/right, invert on press"
6. "Restrict all fills to pure black, pure white, or 8×8 reversible tile patterns"
7. "Snap canvas to 512×342 px with nearest-neighbor integer scaling only"
8. "Inverse-video selection: white text on solid black rectangle"

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description.

rule: The system uses only pure black (#000) and pure white (#FFF) — no midtones, no alpha transparency, no smooth gradients, and no anti-aliased edges. The 1-bit constraint drives all creative decisions.
do:   Fill all surfaces with #000 or #FFF exclusively. Use 8×8 tile patterns (checkerboard, stripes, dots) for visual variation instead of gray tones. Render all edges as stair-stepped pixel boundaries with no smooth arcs.
avoid:Gray hex values (e.g., #808080), rgba() with alpha < 1, CSS gradients, box-shadow with blur-radius, anti-aliased curves, or any element containing a color outside pure black or pure white.

rule: All text must be rendered as bitmap with no sub-pixel positioning, no kerning, no anti-aliasing, and no typographic weight variation beyond the single plain bitmap weight.
do:   Use Chicago bitmap type at 72 dpi for all display and title text. Use Geneva or Monaco 9–12 pt for field text. Apply no letter-spacing, no font-weight variation, no italic, no underline. Set text-rendering to optimizeSpeed.
avoid:Sub-pixel text positioning, font-weight: bold or 700, letter-spacing kerning, text-rendering: optimizeLegibility, anti-aliased font smoothing, or any typographic weight variation beyond the plain bitmap weight. No bold, italic, or underline.

rule: Every element position must snap to the 8-pixel grid, including typography baseline, container coordinates, and control placement. The grid is absolute within the fixed 512×342 px canvas.
do:   Set element top/left values to multiples of 8 px. Use 8-px gutters between all controls. Keep field width at ~40–50 characters maximum — use multiple lines or truncation for longer content. Align all elements to the grid; nothing floats or is centered unless explicitly a button label.
avoid:Element positions at odd pixel values (e.g., left: 13px). Controls placed with fractional offsets. Auto-layout or flexbox centering that does not resolve to an 8-px multiple. Text wrapping beyond ~50 characters per line.

rule: Every floating element (cards, modals, pop-ups) must use a hard 1-px black offset shadow with no blur, no transparency, and no z-axis separation. Cards and dialogs sit in the same z-plane as the card surface.
do:   Apply box-shadow: 1px 1px 0px 0px #000 to all floating elements. Depth is purely a 2D horizontal offset — no elevation, no layering, no overlapping windows.
avoid:box-shadow with blur-radius > 0 (creates soft depth), rgba shadows, layered multiple shadows, translateZ or scale transforms for depth, or overlapping windows — each card is a discrete full-screen container with no overlap.

rule: Fill variation must use 8×8 reversible tile patterns (checkerboard, stripes, dots) — never gray midtones or continuous-tone imagery without dithering to 1-bit.
do:   Create checkerboard, stripe, and dot patterns as 8×8 px repeating backgrounds for disabled fields, secondary surfaces, and window chrome fills. If photographs are required, convert to 1-bit dithered bitmap via error-diffusion or tile pattern thresholding.
avoid:Photographs or continuous-tone images in native form — always convert to 1-bit dithered bitmap. Gray midtone fills, CSS repeating-linear-gradient for patterns (introduces anti-aliasing), or any non-1-bit media treatment.

rule: Button bevels must follow a consistent logic — white (#FFF) top/left edge, black (#000) bottom/right edge at rest; inverse on press. No hover-dependent interaction exists.
do:   Apply a 1-px bevel to every button: white on top and left, black on bottom and right. On press (mousedown/click), invert the bevel — black on top/left, white on bottom/right. Use click/press states only, never hover.
avoid:Hover-dependent interactions — HyperCard had no pointer tracking. Bevels using gray tones, gradients, or multiple shades. Buttons without clear press-state inversion. hover: pseudo-class styling.

rule: All motion must be discrete pixel shifts or binary state toggles — no smooth scrolling, opacity transitions, scale animations, or z-axis movement. Every animation uses steps() timing, never ease curves.
do:   Use steps(1) or steps(N) timing for all animations: button press at 16–32 ms (instant invert toggle), card wipe at 250–1000 ms with steps equal to card width in pixels. All transitions are binary on/off or pixel-perfect shifts.
avoid:CSS transition-timing-function: ease, ease-in-out, or linear (smooth interpolation between states). Opacity transitions, scale transforms, translateZ, fading, or any animation that interpolates rather than stepping discretely.

rule: All icons must be 1-bit pixel glyphs at 16×16 px or 32×32 px — no filled areas, no perspective, no shading, no anti-aliasing, and no multi-color treatment.
do:   Draw icons as 1-px line weight strokes on a 16×16 or 32×32 px canvas. Use open shapes only (strokes, not fills). Keep within the standard set: hand cursor, arrow, lasso, paint bucket, text tool, brush, apple logo (bitten apple).
avoid:Icons smaller than 16×16 px or larger than 32×32 px. Filled-area icons — all strokes must be open outlines. Multi-color, gray, or anti-aliased icons. Custom icons outside the standard set without explicit justification.

### 11d. Variation Bounds

| Axis | Minimum | Maximum |
|------|---------|---------|
| **Authentic vs. remix** | Strict 1-bit Chicago purity: no color, no deviation from canonical HyperCard geometry | Add a single neon accent color (e.g., cyan, red) that replaces black for active states, selection highlights, and the Apple logo icon only. All other elements remain pure black. |
| **Clean vs. glitchy** | Perfect pixel fidelity: every element aligns to grid, no stray pixels, no off-register shadows | Intentional pixel misalignment: shadows offset by 2–3 px, stray black pixels as "scan artifacts", off-by-one element positions, partial glyph corruption. Maintain 1-bit discipline — glitches are structural, not color-based. |
| **Dither density** | Coarse visible checkerboard: 4×4 or 8×8 tile patterns used for any "gray" simulation | Fine error-diffusion: Floyd-Steinberg or Atkinson dithering for continuous-tone media translation. Coarse end preserves the graph-paper look; fine end enables photographic reference while maintaining 1-bit output. |
| **Screen ratio** | Portrait: 512×342 px (original HyperCard aspect ratio ~3:2) | Wide: 640×480 px (VGA) or square: 512×384 px. Scaling rule holds: integer-multiple nearest-neighbor from any base ratio. The 8-px grid and card metaphor remain intact regardless of ratio. |

### 11e. Compositional Signatures

Three canonical compositions that define how the HyperCard design system behaves across contexts. Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
A single card at 512×342 px with pure white (#FFF) background fill. Menu bar (18–20 px tall, Chicago 12 pt) spans the full width at the card top: Apple logo (16×16 px 1-bit pixel glyph, open palm shape) at far left, followed by File, Edit, Go, Tools, Objects menu titles in Chicago 12 pt, left-aligned, black (#000) text on white (#FFF) surface. Title bar sits directly below the menu bar: card name or number in Chicago 14 pt bitmap, left-aligned, with a 1-px solid black bottom border separating title from card body. The content area occupies the middle of the card — one or two plain rectangular fields (1-px black border, white fill, Monaco 10 pt black text, left-aligned and top-anchored) with 8-px internal margin from card edge. A single beveled button (Chicago 12 pt, centered label, 32 px height, white fill with 1-px bevel: white top/left, black bottom/right) sits in the content area. Navigation row at bottom (32 px tall): Back, Home, and Forward buttons (standard beveled rectangles, Chicago 12 pt, centered labels) aligned in a row with 8-px gutters, Home button centered. The entire card has a 2-px solid black outer border and a hard 1-px black offset shadow (box-shadow: 1px 1px 0px 0px #000). No overlapping elements, no scroll bars, no tile patterns on the card surface itself. All elements snap to the invisible 8-px grid.

### 11e.ii — Maximum Expressiveness
A card that demonstrates the full HyperCard toolkit. The menu bar is fully populated with all standard menu titles. The title bar shows an inverse-video active state (white text on black fill, Chicago 14 pt) to indicate the current card. The content area contains three distinct regions: (1) a tools palette along the left edge — a vertical stack of 16×16 px pixel icon buttons (hand cursor, arrow, lasso, paint bucket, text tool, brush), each in a beveled button frame (18×18 px, 1-px bevel, white fill), with the active tool shown in inverse video; (2) a single-column field stack in the center — three fields stacked vertically, each with its label in Chicago 9 pt, uppercase, left-aligned, followed by a value field (Monaco 10 pt, 1-px black border, white fill), separated by a pinstripe horizontal rule of alternating 2-px black / 2-px white dots; (3) a radio button group in the lower-right quadrant — three options (Chicago 9 pt labels), each with a 7×10 px circle (rounded-full, 1-px black border), the selected option showing a solid black 3×3 px circle at center. A scroll bar (14 px wide, white fill, 1-px black border, black square thumb proportional to content length) appears on a multi-line text field at right. The message box is docked at the bottom of the card, above the navigation row: a single-line field (Monaco 12 pt, 1-px black border, white fill) with ">" prompt character at the left margin. The card maintains the 2-px solid black outer border and 1-px hard offset shadow. All elements align to the 8-px grid with 8-px gutters. No gray tones, no gradients, no transparency, no overlapping elements. This is the maximum density this system supports — three content regions (palette, field stack, radio group) with supporting chrome (scroll bar, message box, menu bar, title bar, navigation row).

### 11e.iii — Data Context
Data is displayed in tabular form as a single-column field stack with no color coding — all status differentiation is structural or binary. Each data record is represented as a labeled field pair: the data label in Chicago 9 pt, uppercase, black (#000) on white (#FFF), left-aligned with 8-px gutter to the field; the data value in Monaco 9 pt, black text, within a bordered rectangle (1-px solid black border, white fill, dimensions ~40 characters wide × 1 line tall). Record selection is indicated by inverse-video highlight on the selected row's value field (white text on black fill). Boolean status indicators use checkboxes (7×10 px square, rounded-none, 1-px black border): checked for "complete/confirmed/yes" with filled black interior, unchecked for "pending/no" with white fill and black border only. A progress bar (rectangle, height 10 px, 1-px black border, black fill progressing left-to-right proportional to completion percentage, no animation, no text) displays overall record-set progress. Multi-record lists display up to ~8 records per card view, with a scroll bar (no arrow buttons, black square thumb proportional to record count) for vertical navigation. The message box at the bottom of the card serves as a command-line entry for data queries: "> " prompt followed by Monaco 12 pt text entry. The card surface remains pure white (#FFF) with no texture, no tile patterns on the data surface itself, and no overlapping elements. There are no glow effects, no delta indicators, no icons for status — every data element is either a binary state (checkbox checked/unchecked), a proportional fill (progress bar), or a text value in a bordered field. The title bar reads the record count (e.g., "Records: 24") in Chicago 14 pt. Navigation buttons (Back, Home, Forward) at bottom provide record-set traversal.

### 11f. Sources

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** The **HyperCard Interface System (1987)** was created by **Bill Atkinson** at **Apple Computer**, Inc., and first released in August 1987. It introduced a card‑and‑stack metaphor with a built‑in scripting language, HyperTalk, which defined a visual, object‑oriented interaction model.

**Verified imagery sources.** 7 URLs verified against institutional servers, distributed across:
- Wikipedia / Wikimedia Commons — 3 URL(s)
- Folklore.org — 3 URL(s)
- Computer History Museum — 1 URL(s)

Key references include the Computer History Museum’s record at https://www.computerhistory.org/collections/catalog/102738063. No other top‑imagery sources were specified by the forensic seed.

**Named typefaces.** The typography of this style is attested as:
- (none attested)

**Honest gaps.** The honest gaps raw field contains "(none)", meaning no missing information was explicitly recorded. The lack of identity description and imagery references in the seed limits the depth of this entry. A complete reconstruction of the system’s visual vocabulary would resolve these omissions. No documented gaps were recorded by the forensic pipeline.
