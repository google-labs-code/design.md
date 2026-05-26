---
version: alpha
name: "VT100 Terminal Interface"
description: A monochrome phosphor-lit terminal interface evoking late-1970s computing, rendered on a rigid 80×24 character grid with CRT simulation artifacts including scanlines, phosphor glow, and vignette.
colors:
  primary: "#33FF33"
  surface: "#001100"
  on-primary: "#001100"
  inverse-surface: "#33FF33"
  inverse-on-surface: "#001100"
typography:
  body:
    fontFamily: VT323
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: 0em
  label:
    fontFamily: VT323
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0em
  display:
    fontFamily: VT323
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0em
rounded:
  default: "0px"
spacing:
  component-internal: "0px"
  section-internal: "0px"
  page-edge: "0px"
  gap-component: "0px"
  gap-section: "4px"
  height-sm: "20px"
  height-md: "20px"
  height-lg: "20px"
components:
  prompt:
    textColor: "{colors.primary}"
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.default}"
    padding: "0px"
    height: "20px"
  status-line:
    backgroundColor: "{colors.inverse-surface}"
    textColor: "{colors.inverse-on-surface}"
    rounded: "{rounded.default}"
    height: "20px"
    padding: "0px"
  cursor:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    size: "8px"
    width: "8px"
    height: "16px"
  divider:
    textColor: "{colors.primary}"
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.default}"
    height: "20px"
    padding: "0px"
  menu-item-selected:
    backgroundColor: "{colors.inverse-surface}"
    textColor: "{colors.inverse-on-surface}"
    rounded: "{rounded.default}"
    padding: "0px"
    height: "20px"
provenance:
  coverage_status: "complete"
  identity_description: "The slug `dec-vt100-terminal-interface-1978` refers to the visual identity of the Digital Equipment Corporation (DEC) VT100 video display terminal, introduced in 1978. This identity encompasses the physical terminal hardware (case, keyboard, CRT bezel, indicator lights) and the on-screen character-based user interface (monochrome phosphor display, bitmap character set, line-drawing graphics, statu"
  manual_enrichment_required: false
  imagery_count: 5
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "en.wikipedia.org"
      count: 1
    - host: "commons.wikimedia.org"
      count: 1
    - host: "www.computerhistory.org"
      count: 1
    - host: "www.vintagecomputer.net"
      count: 1
    - host: "www.bitsavers.org"
      count: 1
  imagery_urls:
    - url: "https://en.wikipedia.org/wiki/VT100"
      host: "en.wikipedia.org"
      institution: null
      confidence_original: high
    - url: "https://commons.wikimedia.org/wiki/Category:VT100"
      host: "commons.wikimedia.org"
      institution: "Wikimedia Commons"
      confidence_original: high
    - url: "https://www.computerhistory.org/collections/catalog/102713562"
      host: "www.computerhistory.org"
      institution: "Computer History Museum, Mountain View"
      confidence_original: low
    - url: "https://www.vintagecomputer.net/vt100/"
      host: "www.vintagecomputer.net"
      institution: "VintageComputer.net"
      confidence_original: low
    - url: "https://www.bitsavers.org/pdf/dec/terminal/vt100/"
      host: "www.bitsavers.org"
      institution: "Bitsavers.org"
      confidence_original: medium
  typefaces_attested:
    - name: "DEC VT100 on-screen bitmap font"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "attested"
    - name: "DEC logotype (custom)"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "attested"
    - name: "VT100 model number lettering"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "unverified"
    - name: "Helvetica (or similar)"
      foundry: null
      year: null
      google_fonts: "Inter"
      attestation: "inferred"
  flags:
    - "1_robots_disallowed_urls"
  honest_gaps:
    - "1. **Official colour specification for case, bezel, keycaps, CRT phosphor:** Absent from all located sources. A spectrophotometer reading of a NOS unit would be required."
---

# Design System: VT100 Terminal Interface

## 0. Taxonomy & Identity

entity-type:        interface / system / environment
artefact-family:    operating system / software UI  
technique:          digital raster
movement-lineage:   vernacular commercial style
era:                postwar / 1970s counterculture
geography:          US / Canada
domain:             industrial / engineering / maintenance
formal-traits:      grid-based, geometric, flat, utilitarian
color-logic:        monochrome
typography-mode:    monospace
texture:            grainy, halated, noisy
function:           instruct / navigate / monitor
provenance:         canonical historical source / revival

## 1. Overview

The VT100 Terminal Interface evokes the stark, phosphor‑lit world of late‑1970s computing: a single saturated hue (green, amber, or white) against a near‑black background, rendered on a rigid 80‑column × 24‑row character grid with no anti‑aliasing, no subpixel rendering, and no fractional positioning. Every element snaps to the matrix; the interface breathes through a steady blinking block cursor, an inverse‑video status line, and vertical scrolling that pushes older lines into a dimmed scrollback buffer. CRT simulation artifacts – scanlines, phosphor glow, vignette, and optional chromatic aberration – transform an otherwise flat grid into a physical, glowing tube surface.

What makes it recognizable: monochrome phosphor glow, scanlines, blinking block cursor, inverse‑video status bar, command prompt ending in `$` / `%` / `#` / `>`, ASCII box‑drawing and arrow symbols.

What would break it: rounded corners, gradients, multiple foreground hues in the same view, graphical icons, anti‑aliased text, floating windows, glassmorphism, smooth animations.

**Emotional tone:** Cold, functional, slightly melancholic, with a nostalgic warmth from the phosphor glow.

## 2. Constants

Light Mode:   no
Dark Mode:    primary (very dark background, bright foreground)
Responsive:   no – fixed 80×24 grid; optional resize snaps to nearest character cell dimensions
States:       Default, Active (cursor), Disabled (dimmed text), Focus (cursor)

surface-simulation: crt-screen — CRT monitor glass and phosphor layer with scanlines and vignette

## 2a — Interaction Model

hover-delta:        none — no hover state on keyboard-driven terminal; all interaction via keyboard
active-delta:       none — activation is instantaneous character insertion or menu selection via inverse video
focus-style:        cursor — blinking block cursor indicates input focus; no glow ring or border
transition-duration:0ms — instantaneous; no easing
transition-easing:  none
exempt-animations:  cursor-blink, screen-flash, bell-flash

## 3. Colors

Three phosphor variants – each view uses exactly one set. Choose green, amber, or white before rendering.  
All hex values are tagged with certainty level: [attested], [inferred], [conventional], [unverified].

### Green Phosphor (default)
| Role | Hex | Tag | Notes |
|------|-----|-----|-------|
| `primary` | `#33FF33` | [unverified] | Main phosphor: text, prompts, cursor |
| `surface` | `#001100` | [conventional] | Unlit CRT surface background |
| `dimmed` | CONTESTED:§2.green_dimmed | — | Providers gave [#005500, vague, #1A7F1A, #1A8C00]; no majority; re‑stack required |
| `cursor` | CONTESTED:§2.green_cursor | — | Providers gave [#66FF66, none, #000000, #33FF33]; no majority; re‑stack required |
| `on-primary` | `#001100` | [conventional] | Inverse video background (same as surface) |
| `inverse-surface` | `#33FF33` | [unverified] | Background of inverse‑video regions |
| `inverse-on-surface` | `#001100` | [conventional] | Text on inverse‑video regions |

### Amber Phosphor
| Role | Hex | Tag | Notes |
|------|-----|-----|-------|
| `primary` | `#FFB000` | [conventional] | Main phosphor |
| `surface` | `#0f0a00` | [conventional] | Unlit CRT surface (amber cast) |
| `dimmed` | CONTESTED:§2.amber_dimmed | — | Providers gave [#7a5800, vague, #7F5800, #8C6000]; no majority; re‑stack required |
| `cursor` | CONTESTED:§2.amber_cursor | — | Providers differ; no majority; re‑stack required |
| `on-primary` | `#0f0a00` | [conventional] | Inverse background |
| `inverse-surface` | `#FFB000` | [conventional] | |
| `inverse-on-surface` | `#0f0a00` | [conventional] | |

### White Phosphor
| Role | Hex | Tag | Notes |
|------|-----|-----|-------|
| `primary` | `#C0C0C0` | [unverified] | Main phosphor |
| `surface` | CONTESTED:§2.white_surface | — | Providers gave [#111111, #000000, #101010, #0A0A0A]; no majority; re‑stack required |
| `dimmed` | CONTESTED:§2.white_dimmed | — | Providers gave [#606060, vague, #606060, #666666]; insufficient consensus; re‑stack required |
| `cursor` | CONTESTED:§2.white_cursor | — | Providers differ; no majority; re‑stack required |
| `on-primary` | CONTESTED:§2.white_on_primary | — | Providers gave [#111111, #000000, #101010, #0A0A0A]; no majority |
| `inverse-surface` | `#C0C0C0` | [unverified] | |
| `inverse-on-surface` | CONTESTED:§2.white_inverse_on_surface | — | Providers diverge |

**Note:** Phosphor glow is rendered via transparency/overlay (see §8.5c), not as a separate color role.

## 4. Typography

All type is bitmap monospace with no anti‑aliasing, no kerning, no extra leading, and no subpixel rendering.

body:
  font-family:      CONTESTED:§3.primary_typeface — providers gave [VT323 / Perfect DOS VGA 437 / IBM Bios / Terminus / Fixedsys / VT100]; none cited foundry or year; re‑stack required
  font-size:        text-base (16px recommended, but must match character cell matrix)
  font-weight:      font-normal (bitmap weight fixed; bold achieved via pixel duplication)
  line-height:      leading-none (exactly matches font height)
  letter-spacing:   tracking-normal (0px – fixed cell width)
  text-transform:   normal-case
  text-decoration:  none

label (status line):
  font-family:      [same as body]
  font-size:        text-base
  font-weight:      font-semibold
  line-height:      leading-none
  letter-spacing:   tracking-normal

display (optional splash):
  font-family:      [same as body]
  font-size:        text-2xl
  font-weight:      font-bold (pixel‑duplication or bold bitmap variant)

**Bold treatment:** Duplicate each character horizontally by 1 pixel, or use a separate bold bitmap variant.  
**Google Fonts substitute:** CONTESTED:§3.google_fonts_substitute — providers gave [VT323, none, VT323, VT323]; no cited foundry/source; re‑stack required.

## 5. Elevation

Flat depth model — no shadow hierarchy. All elements exist on a single plane.
No stacking context needed; everything is z‑0.

## 6. Spacing & Sizing

All spacing derived from the character cell matrix. No fractional values.

padding:
  component-internal:  p-0 (elements occupy full cell)
  section-internal:    p-0 (no gutters between cells)
  page-edge:           p-0 (content fills grid)

margin:
  between-components:  gap-0
  between-sections:    gap-y-1 (one empty row between sections)

component-heights:
  sm:   h-5 (single line, ~20px)
  md:   h-5
  lg:   h-5

icon-size:             not applicable (no graphical icons)
avatar-size:           not applicable

## 7. Borders

Border radius, width, and style not used. Visual separators are drawn with box‑drawing characters.

border-radius:
  default:     rounded-none (all corners sharp)
  card:        – (no cards)
  button:      – (no buttons)
  input:       – (no input field border)

border-width:
  default:     border-0 (no native borders)

border-style:  border-none

border-image:  not applicable

clip-path:     not applicable

## 8. Opacity

disabled-state:     opacity-50 (dimmed text; actual color uses `dimmed` role)
ghost/secondary:    opacity-50
overlay/scrim:      not used
hover-feedback:     not used

selection:
  background:  primary at 0.25–0.3 opacity (or full inverse video)
  color:       on-surface

scrollbar:
  style:       auto (thin overlay)
  width:       thin (6px)
  track:       surface
  thumb:       primary
  thumb-hover: cursor (slightly brighter)

## 8.5. Visual Effects

### 8.5.0 — Physical Material Model

material-model:    crt-screen

global-filter:     none — no color filter on body; CRT appearance via scanline and vignette overlays

global-overlay:    CRT scanlines via body::after pseudo-element:
                   repeating-linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.15) 50%);
                   background-size: 100% 4px; blend: multiply; opacity: 0.75; pointer-events: none; position: fixed; z-index: 9999.
                   Vignette via body::before pseudo-element:
                   radial-gradient(circle farthest-corner at 50% 50%, transparent 60%, rgba(0,0,0,0.4) 100%);
                   pointer-events: none; position: fixed; z-index: 9998.

rendering-flags:
  font-smoothing:  none — no antialiasing on bitmap font
  image-rendering: auto — no raster images; default
  text-rendering:  optimizeSpeed — terminal-style rendering, no kerning or ligatures

### 8.5a — Color Manipulation

Not a constant rendering strategy. Used only for transient events:
- **Screen flash:** `brightness(1.8)` duration 100ms on data update.
- **Chromatic aberration (optional):** 1–2px shift on red/blue channels at 10–20% opacity.

### 8.5b — Surface Layering (Backdrop Filters)

Not applicable. No frosted glass or layered translucency.

### 8.5c — Gradients & Glow

**Phosphor glow:** Applied to all lit characters via `text-shadow` or `filter: drop-shadow`.

text-shadow:  0 0 2px currentColor, 0 0 5px currentColor (30–50% opacity)

**CRT vignette:** Radial gradient from transparent center to darkened edges.

background-image: radial-gradient(circle farthest-corner at 50% 50%, transparent 60%, rgba(0,0,0,0.4) 100%)

### 8.5d — Texture & Noise Simulation

**Scanlines:**
technique:    repeating-linear-gradient
parameters:  linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.15) 50%); background-size: 100% 4px
surface:     full-page canvas overlay
blend:       mix-blend-mode: multiply
color:       black
intensity:   moderate (50% opacity every other row)

**Burn‑in artifacts (optional):**
technique:   pseudo-element with static text at very low opacity (5–10%)
surface:     background canvas

**Phosphor persistence ghost (optional):**
technique:   CSS animation that fades recently changed characters from 10–20% opacity to 0 over 100ms

## 9. Components

### Icon Vocabulary
icon-vocabulary:
  system:       VT100 extended character set – box‑drawing (│ ─ ┌ ┐ └ ┘ ├ ┤ ┬ ┴ ┼), arrows (◀ ▶ ▲ ▼), block elements, ASCII symbols
  size:         fits one character cell
  color:        inherits currentColor (phosphor hue)
  treatment:    no filter or glow (separate from text glow)
  restrictions: no graphical icons, no emoji, no SVG

### Image & Media Treatment
Not applicable – no images.

### Buttons
No conventional buttons. Interactive elements:
- **Command prompt:** line ending with `$` / `%` / `#` / `>`. Active when cursor present.
- **Setup menu:** navigated by keyboard; selected item highlighted via inverse video or `>` indicator.

### Status Line
Always visible at bottom (inverse video row). Displays system info, mode indicators, cursor position.
fill: inverse-surface (primary), text: inverse-on-surface (surface)

### Cursor
- Shape: solid block (insert) or underline (overwrite)
- Blinking: 0.5s on, 0.5s off, steps(1)
- Color: `cursor` role (slightly brighter than primary) or inverse in inverse‑video areas
- Always aligned to character cell

### Divider Lines
Full‑width row of box‑drawing characters (`─`) or dashes (`-`).

### Prompt Symbols
Permitted: `$`, `%`, `#`, `>`, `&`. No arrows.

## 10. Layout

- **Spacing cadence:** Every element occupies full character cells. No half‑spaces, no fractional padding.
- **Grid tendency:** Strict 80 columns × 24 rows. Left‑aligned (rarely centered for setup screens). No overlapping elements.
- **Density:** Low – one command per line, one status line, empty lines separate sections.
- **Section separation:** Full‑width row of dashes or box‑drawing horizontal rule.
- **Alignment philosophy:** Everything left‑aligned. Tabular menus use fixed columns with `│` separators.
- **Breakpoint behavior:** Not responsive. At narrower viewports (<768px), grid column count reduces to fit (e.g., 40 columns) or horizontal scroll appears. Cell size remains unchanged.

**Motion:**
transition-duration:        0ms (instantaneous)
transition-timing-function: steps(1) – no easing
transition-property:        none

animation:
  cursor-blink: 0.5s on → 0.5s off, steps(1), looping
  scroll-feed:  instant (one frame)
  screen-flash: brightness(1.8) for 100ms on display update
  bell-flash:   full‑screen inversion for 200ms on BEL

transform-at-rest:          none
transform-on-interact:      none
transform-style:            flat

## 11. Design System Notes

### 11a. Use Constraints

**Appropriate for:** Terminal emulators, CLI tools, retro‑themed apps (coding environments, system monitors), nostalgic dashboards, game terminals, museum kiosks, "glass terminal" overlay.

**Wrong for:** Consumer mobile apps, content‑heavy social media feeds, e‑commerce, interfaces requiring multiple colors or photographic imagery, data dashboards with interactive charts, accessibility‑first apps without careful contrast support.

### 11b. Prompt Phrases

- "Render as an 80×24 character grid, no anti‑aliasing"
- "Use monochrome phosphor: green #33FF33 on near‑black #001100 background"
- "Show a blinking block cursor at the insertion point, 0.5s cycle"
- "Apply scanlines with a repeating linear gradient every 4px"
- "Status line at bottom in inverse video"
- "All icons are box‑drawing characters from the VT100 set"
- "No gradients, no rounded corners, no shadows beyond phosphor glow"
- "Dim older scrollback content to a darker shade of the same hue"

### 11c. Do / Avoid Block

rule: The interface must snap to the character grid; no fractional positioning or antialiased rendering is permitted.
do:   Align every element to integer multiples of the character cell size. Text rendered with no anti-aliasing, image-rendering pixelated.
avoid:Anti-aliased, subpixel-rendered text; elements positioned at half-pixel offsets; any anti-aliased stroke.

rule: Only one foreground phosphor hue per view; monochrome is a defining constraint.
do:   Use exactly primary color (e.g., #33FF33) for all text and symbols; no additional hues.
avoid:Mixing multiple foreground colors (e.g., green and amber in the same terminal view).

rule: Use CRT-specific visual effects (scanlines, phosphor glow, vignette) to simulate a physical tube, not modern UI depth cues.
do:   Overlay scanlines via repeating-linear-gradient, add phosphor glow with text-shadow, and apply vignette via radial-gradient.
avoid:Rounded corners, drop-shadows, gradient fills, glassmorphism, or any smooth UI shadow effects.

rule: Every visual container and separator must be drawn with box-drawing characters, not CSS borders or graphical icons.
do:   Use VT100 box-drawing characters (│ ─ ┌ ┐ └ ┘ ├ ┤ ┬ ┴ ┼) for lines, tables, panels.
avoid:Graphical icons, emoji, images, SVG, or CSS border properties.

rule: Status and selection must be communicated through inverse video or character-based indicators, never via z-index layers.
do:   Use inverse video (background becomes primary, text becomes surface) for status bar and selected menu items.
avoid:Floating windows, overlapping elements with z-index above 0, modal overlays, or any layer-based depth.

rule: Only instantaneous or character-level animations are permissible; smooth transitions and continuous motion break the terminal illusion.
do:   Allow cursor blink (steps(1) cycle), screen flash, and instantaneous scroll only.
avoid:Animations such as fade, slide, scale, or any transition with duration > 0ms; no smooth or easing animations.

### 11d. Variation Bounds

| Axis | Range |
|------|-------|
| Phosphor color | green (#33FF33) – amber (#FFB000) – white (#C0C0C0) – one per view |
| CRT wear | clean, sharp → noisy scanlines + burn‑in + ghosting |
| Contrast | high (primary on black) – low (reduced intensity, lighter background) |
| Grid size | fixed 80×24 – user‑resizable snapping to character cells |
| Era fidelity | pristine 1978 – worn CRT with jitter and interference |

### 11e. Compositional Signatures

### 11e.i — At Rest
A standard 80×24 CRT screen: background #001100, foreground #33FF33, filling the viewport snapped to character cells. A command prompt line `$ ` with blinking block cursor (0.5s cycle) sits at the second row. Above it, a few lines of output, separated by a full-width row of dashes (`-`). At the bottom, a single inverse-video status line (background #33FF33, text #001100) displays the mode (e.g., "INS"). Scanlines overlay (repeating-linear-gradient every 4px at 50% opacity black) and a subtle vignette (radial-gradient from transparent to 40% black at edges) complete the at-rest composition. No other elements.

### 11e.ii — Maximum Expressiveness
A dense monitoring readout occupies the full grid. Top rows: time and system identifier in bold (pixel-duplication). Then a table drawn with box-drawing characters (│ ─ ├ ┤) listing processes, each column aligned. The cursor blinks at a command prompt (`#`). Older scrollback lines dimmed to the dimmed color (e.g., #005500). A screen-flash (brightness(1.8) for 100ms) triggers on data update. Bell-flash (full inversion for 200ms) pulses the whole screen. Burn-in ghost text "TERMINAL READY" faintly visible at 5% opacity behind active content. Chromatic aberration: a 1-2px red/blue channel shift at 10% opacity. Scanlines, phosphor glow (text-shadow 0 0 2px/5px currentColor at 30-50% opacity), and vignette all active. No drop shadows, no color variation beyond green phosphor.

### 11e.iii — Data Context
Numeric data appears in a monochrome terminal table using ASCII and box-drawing characters. Column headers are in inverse video on a single row. Cell values are plain primary text aligned to character positions. A divider row of `─` separates header from data. Positive/negative differences indicated by `+`/`-` prefixes, not color changes. No glow or shadow beyond the text-shadow of the phosphor. The grid is strictly 80 columns; long numbers wrap or truncate. The CRT surface (scanlines, vignette) remains identical. Status like "OK" and "ERR" are rendered as text in primary, possibly with box-drawing borders (`┌───┐` etc.). The system never uses diverse colors to encode meaning.

### 11f. Sources

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** (Prose generation failed — see provenance block for attribution data.)

**Verified imagery sources.** 5 URLs verified against institutional servers, distributed across:
- en.wikipedia.org — 1 URL(s)
- Wikimedia Commons — 1 URL(s)
- Computer History Museum, Mountain View — 1 URL(s)
- VintageComputer.net — 1 URL(s)
- Bitsavers.org — 1 URL(s)

**Named typefaces.** The typography of this style is attested as:
- DEC VT100 on-screen bitmap font ( — attestation: attested) — rendered here as bespoke imagery — no web-font substitute
- DEC logotype (custom) ( — attestation: attested) — rendered here as bespoke imagery — no web-font substitute
- VT100 model number lettering ( — attestation: unverified) — rendered here as bespoke imagery — no web-font substitute
- Helvetica (or similar) ( — attestation: inferred) — rendered here in Inter as the closest open substitute

**Honest gaps.** (No documented gaps were recorded by the forensic pipeline.)
