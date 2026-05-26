---
version: alpha
name: "Television Test Card"

description: "A design system based on Television Test Card."

colors:
  track: "#1A1A1A"
  thumb: "#FFFFFF"
  thumb-hover: "#00FF00"
  color: "#FFFFFF"
  on-surface: "#FFFFFF"
  primary: "#1A1A1A"
  on-primary: "#FFFFFF"
  secondary: "#333333"
  on-secondary: "#FFFFFF"
  outline: "#FFFFFF"
  outline-variant: "#666666"
  error: "#1A1A1A"
  surface: "#1A1A1A"
  surface-container: "#333333"

typography:

rounded:
  default: "0px"
  card: "0px"
  button: "0px"
  input: "0px"
  chip: "0px"

spacing:
  component-internal: "8px"
  section-internal: "16px"
  page-edge: "16px"
  gap-component: "8px"
  gap-section: "16px"
  height-sm: "32px"
  height-md: "40px"
  height-lg: "48px"
  icon: "16px"

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.default}"
    padding: "4px"
  button-primary-hover:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface}"
    padding: "4px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.default}"
    padding: "4px"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.default}"
    padding: "8px"
  input:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.default}"
    padding: "4px"
  input-focus:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.default}"
provenance:
  coverage_status: "sparse"
  identity_description: "The slug `television-test-card` is ambiguous: it could refer to any of dozens of broadcast test patterns used across countries and eras. The most plausible single interpretation, based on cultural prominence and visual distinctiveness, is BBC Test Card F – a broadcast test pattern used by the BBC from 1967 into the 1990s, featuring a photograph of a girl (Carole Hersee, aged 8 in 1967) holding"
  manual_enrichment_required: false
  imagery_count: 3
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "www.itu.int"
      count: 1
    - host: "collection.sciencemuseumgroup.org.uk"
      count: 1
    - host: "www.bbc.co.uk"
      count: 1
  imagery_urls:
    - url: "https://www.itu.int/rec/R-REC-BT.470-6/en"
      host: "www.itu.int"
      institution: "International Telecommunication Union"
      confidence_original: high
    - url: "https://collection.sciencemuseumgroup.org.uk/"
      host: "collection.sciencemuseumgroup.org.uk"
      institution: "Science Museum Group / National Science and Media Museum"
      confidence_original: low
    - url: "https://www.bbc.co.uk/topics/c01yxyz46myt"
      host: "www.bbc.co.uk"
      institution: "BBC Archives (general)"
      confidence_original: low
  typefaces_attested:
    - name: "BBC1/Test Card F custom sans-serif lettering"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "unverified"
  flags:
    - "sparse_imagery"
  honest_gaps:
    - "1. **Colour values for photographic elements:** Exact hex/RGB/CIE for the girl’s dress, the clown doll, the chalkboard green, and the background grey are unknown and cannot be verified from any public primary source. All values in circulation are from uncontrolled reproductions."
---
# Design System: Television Test Card

## 0. Taxonomy & Identity

entity-type:          interface / system / environment
artefact-family:      operating system / software UI
technique:            digital raster
movement-lineage:     CONTESTED:§0.movement_lineage — providers gave: [postwar, vernacular commercial style, design movement]; re-stack required
era:                  postwar
geography:            platform-neutral
domain:               broadcast
formal-traits:        grid-based, geometric, flat, informational
color-logic:          saturated
typography-mode:      monospace
texture:              smooth (provider 1), grainy/weathered (provider 2), noisy/halated (provider 3) → CONTESTED:§0.texture — providers disagree; re-stack required
function:             instruct (provider 1), simulate (providers 2,3) → majority: simulate
provenance:           revival / homage

## 1. Overview

This style translates the rigid, hypnotic utility of analog broadcast test patterns into a graphic system for UI, poster art, or retro-furniture interfaces. It celebrates precision geometry, signal purity, and the quiet artifact of a channel that never started its program. The emotional tone is technical, clinical, and meditative—like staring at a calibration screen in an empty studio. The aesthetic lineage is mid-century broadcast engineering: SMPTE color bars, CRT convergence patterns, and resolution charts rendered with absolute symmetry. The core rendering philosophy is hard-edged geometry without anti-aliasing; every pixel is a clean block; no gradients, no dither, no transparency.

- **Emotional tone:** Hypnotic, sterile, nostalgia for dead media, functional beauty
- **Era/lineage:** Postwar broadcast television calibration (1950s–1970s) [attested: SMPTE standards]
- **Density level:** High information density within a quiet, dark frame
- **Core rendering philosophy:** Hard-edged geometry, zero anti-aliasing, flat fills, 1-pixel lines
- **What makes it recognizable:** Horizontal color bars across top or bottom, a large concentric circle with crosshairs, grayscale ramps, fine grid overlays, all-caps monospaced metadata
- **What would break it:** Rounded corners, drop shadows, pastel colors, bezier curves, asymmetry, sans-serif lowercase

## 2. Constants

Light Mode:   no (style is inherently dark-background)
Dark Mode:    primary (any surface is dark; bright text and bars)
Responsive:   no — fixed 4:3 aspect ratio; content does not reflow (provider 1,2); provider 3 mentions responsive stacking at 375px but majority says non-responsive → fixed 4:3
States:       Default only (no interactive states defined by original source — provider 1,2); provider 3 adds Hover/Active/Disabled → majority: Default only

surface-simulation: crt-screen
                    CRT monitor glass with scanlines, phosphor artifacts, and vignette.
                    Drives page-level texture and rendering artifacts in preview generation.

## 2a — Interaction Model

hover-delta:        none — no hover state on broadcast calibration surface; test cards are static displays
active-delta:       none — no interactive press state; content does not respond to input
focus-style:        color-border — border-width increases to 2px solid #FFFFFF on focus; no glow, no ring
transition-duration:0ms — all state changes are instantaneous; test card does not ease
transition-easing:  steps(1)
exempt-animations:  flicker/breathing, static-flash, zone-plate-rotate

## 3. Colors

Background (surface):        CONTESTED:§2.hex_background — providers gave: [#000000, #141414, #1A1A1A]; re-stack required
On-background (text):        #FFFFFF [unanimous] [attested]
Surface container (card):    CONTESTED:§2.hex_surface_container — providers gave: [#1A1A1A, #3A3A3A, #262626]; re-stack required
Primary:                     #FF0000 [unanimous] [attested]
On-primary:                  #FFFFFF [unanimous]
Secondary:                   #00FF00 [unanimous] [attested]
On-secondary:                #FFFFFF (provider 1,2) / #000000 (provider 3) → CONTESTED:§2.hex_on_secondary — providers gave: [#FFFFFF, #FFFFFF, #000000]; 2/3 agree on #FFFFFF, use that
Tertiary (accent):           #0000FF [unanimous] [attested]
On-tertiary:                 #FFFFFF [unanimous]
Error:                       #FF00FF [majority: 2 of 3] [attested: SMPTE magenta]
On-error:                    #FFFFFF (provider 1,2) / #000000 (provider 3) → majority: #FFFFFF
Warning:                     #FFFF00 [unanimous] [attested]
Info:                        #00FFFF [unanimous] [attested]
Outline:                     #FFFFFF [unanimous]
Outline-variant:             #999999 (provider 2) / #888888 (provider 3) → CONTESTED:§2.hex_outline_variant; all disagree; re-stack required
Neutral/mid-gray:            [#808080, #999999, #808080] → 2/3 agree on #808080, use that
Gray ramp (10% steps):       #1A1A1A, #333333, #4D4D4D, #666666, #808080, #999999, #B3B3B3, #CCCCCC, #E6E6E6, #FFFFFF — aggregated from providers; not fully uniform but adopted as working set
Inverse surface:             #FFFFFF [unanimous]
Inverse on-surface:          #000000 (provider 2,3) → majority
Color bar saturated set:     #FF0000, #00FF00, #0000FF, #00FFFF, #FF00FF, #FFFF00, #FFFFFF, #000000 [unanimous]
Skin-tone patch:             #E8C39E [unverified — only provider 3]

**Tag notes:** [attested] = all providers agree and cite or imply source; [inferred] = derived from patterns; [conventional] = common but unsourced; [unverified] = only one provider.

## 4. Typography

§3.primary_typeface:   CONTESTED:§3.primary_typeface — providers gave: [monospace stack (Roboto Mono, Fira Mono), "Monaco","Courier New","Liberation Mono","SF Mono", monospace stack (JetBrains Mono, IBM Plex Mono)]; none cited foundry or year; re-stack required
§3.secondary_typeface: CONTESTED:§3.secondary_typeface — providers did not specify a secondary typeface; re-stack required
§3.google_fonts_substitute: CONTESTED:§3.google_fonts_substitute — no provider offered a named substitution; re-stack required

General style:
- All text is monospace, all-caps, tabular numerals (font-variant-numeric: tabular-nums)
- No italic, no script
- Default text color: white (#FFFFFF) on dark background
- Line height: tight (1.0–1.2)
- Letter-spacing: tight to zero (tracking-tight)

Style tokens (aggregated from unanimous/majority):

display:
  font-family:      monospace (unspecified)
  font-size:        text-4xl (2.25rem) [majority: provider 2 and 3 agree on text-4xl; provider 1 had text-5xl → accept majority]
  font-weight:      font-bold
  line-height:      leading-tight
  letter-spacing:   tracking-tight
  text-transform:   uppercase
  text-decoration:  none

headline:
  font-family:      monospace
  font-size:        text-3xl (1.875rem) [unanimous]
  font-weight:      font-bold (provider 2) / font-semibold (provider 1 and 3) → majority: font-semibold (2 of 3)
  line-height:      leading-tight / leading-snug → majority: leading-tight (2 of 3)
  letter-spacing:   tracking-tight / tracking-normal → majority: tracking-tight (2 of 3)
  text-transform:   uppercase
  text-decoration:  none

title:
  font-family:      monospace
  font-size:        text-xl (1.25rem) [unanimous]
  font-weight:      font-medium (provider 1,3) / font-semibold (provider 2) → majority: font-medium
  line-height:      leading-normal (provider 1) / leading-snug (provider 2,3) → majority: leading-snug
  letter-spacing:   tracking-wide (provider 1) / tracking-normal (provider 2,3) → majority: tracking-normal
  text-transform:   uppercase
  text-decoration:  none

body:
  font-family:      monospace
  font-size:        text-base (1rem) [provider 1] / text-sm (0.875rem) [provider 2,3] → majority: text-sm
  font-weight:      font-normal
  line-height:      leading-relaxed
  letter-spacing:   tracking-normal
  text-transform:   uppercase
  text-decoration:  none

label:
  font-family:      monospace
  font-size:        text-xs (0.75rem) [unanimous]
  font-weight:      font-bold (provider 1,3) / font-semibold (provider 2) → majority: font-bold
  line-height:      leading-none (provider 1) / leading-normal (provider 2,3) → majority: leading-normal
  letter-spacing:   tracking-tight (provider 1) / tracking-wider (provider 3) / tracking-tight (provider 2? provider 2 says tracking-tight) → 2/3 tracking-tight, use that
  text-transform:   uppercase
  text-decoration:  none

## 5. Elevation

Flat depth model — no shadow hierarchy. All elements sit on the same plane. Use box-shadow: none.
No drop shadows, no glows.

Stacking context (for overlays only, not for depth):
  base-content:      z-0
  grid-overlay:      z-10
  circle-crosshair:  z-20
  color-bars:        z-30
  text-labels:       z-40
  scanlines-noise:   z-50
  vignette:          z-60

(Unanimous on flat model)

## 6. Spacing & Sizing

Frame dimensions: fixed 4:3 aspect ratio (e.g., 720×540, 1920×1440). Not responsive; scale via transform at breakpoints.

padding:
  component-internal:   p-2 (8px) [unanimous]
  section-internal:     p-4 (16px) [unanimous]
  page-edge:            p-4 (16px) — overscan border area [unanimous]

margin:
  between-components:   gap-2 (8px) [unanimous]
  between-sections:     gap-4 (16px) [unanimous]

component-heights:
  sm:   h-8  (32px) — majority: provider 1 and 3 use h-8; provider 2 uses h-6 → accept h-8
  md:   h-10 (40px) — default interactive target [unanimous]
  lg:   h-12 (48px) — majority: provider 1 and 3 use h-12; provider 2 uses h-10 → accept h-12

icon-size:       w-4 h-4 (16×16 px) [unanimous]
avatar-size:     not applicable [unanimous]

## 7. Borders

border-radius:
  default:     rounded-none [unanimous]
  card:        rounded-none [unanimous]
  button:      rounded-none [unanimous]
  input:       rounded-none [unanimous]
  chip/badge:  rounded-none [unanimous]

border-width:
  default:     border (1px) [unanimous]
  emphasis:    border-2 (2px) — for focus rings, crosshairs, active state [unanimous]

border-style:  border-solid [unanimous]

clip-path:     used only for circle component: clip-path: circle(50% at 50% 50%) [unanimous]
               image-rendering: crisp-edges recommended to minimize anti-aliasing.

## 8. Opacity

No opacity for primary content fills. Overlays only:
  disabled-state:     opacity-40 (provider 3) / not defined (provider 1,2) → adopted: opacity-40
  overlay/scrim:      opacity-10 to opacity-15 (vignette) [unanimous]
  ghost/secondary:    opacity-60 (provider 3) / not used (others) → adopted: opacity-60 for secondary text
  hover-feedback:     opacity-80 (provider 3) / not used (providers 1,2) → adopted: not used (majority: no interactive states)

Browser chrome (dark immersive style):
  selection:
    background:  rgba(255,255,255,0.25) (provider 2) / rgba(0,255,0,0.25) (provider 3) → CONTESTED:§8.selection_background; re-stack required
    color:       inherit
  scrollbar:
    style:       styled
    width:       thin (6px)
    track:       #1A1A1A
    thumb:       #FFFFFF
    thumb-hover: #00FF00 (provider 3) / #555555 (provider 2) → 1/3, use #FFFFFF (provider 1 not specified) → adopted: #FFFFFF for thumb, hover not specified

## 8.5. Visual Effects

### 8.5.0 — Physical Material Model

Declares the top-level surface simulation governing the entire page canvas.
This is distinct from component-level textures (§8.5d) — it is the global rendering layer.

material-model:    crt-screen

global-filter:     contrast(1.1) saturate(1.1) — CRT phosphor color profile;
                   brightness value contested — see CONTESTED:§8.5a_filter in §8.5a

global-overlay:    CRT scanlines via body::after pseudo-element:
                   repeating-linear-gradient(transparent 0px, transparent 1px, rgba(0,0,0,0.15) 1px, rgba(0,0,0,0.15) 2px)
                   blend: overlay, opacity-20, pointer-events:none, position:fixed, z-index:50
                   Optional vignette overlay: radial-gradient(ellipse at center, transparent 60%, #000000 100%),
                   blend: multiply, opacity-10 to opacity-15, position:fixed, z-index:60

rendering-flags:
  font-smoothing:  none — pixel-perfect rendering, no anti-aliasing on glyphs
  image-rendering: crisp-edges — geometric primitives must not be interpolated or smoothed
  text-rendering:  optimizeSpeed

### 8.5a — Color Manipulation

Global CRT filter applied to entire canvas:
filter: contrast(1.1) saturate(1.1) brightness(1.0) — majority: provider 1 and 2 use brightness 1.1/0.95, but provider 3 doesn't; adopt brightness 1.0 as consensus? Actually provider 2 uses brightness(0.95) and contrast(1.1) saturate(1.1). Provider 1 uses brightness(1.1) saturate(1.1). No majority on brightness. Adopt: contrast(1.1) saturate(1.1) and leave brightness out? Use gap.

filter:           CONTESTED:§8.5a_filter — providers diverged on brightness and contrast values; re-stack required
mix-blend-mode:   none (unanimous)
background-blend-mode: none (unanimous)

### 8.5c — Gradients & Glow

Only radial-gradient for CRT vignette:
background-image: radial-gradient(ellipse at center, transparent 60%, #000000 100%)
blend-mode: multiply, opacity-10 to opacity-15

### 8.5d — Texture & Noise Simulation

**Scanlines:**
technique:          repeating-linear-gradient
parameters:         transparent 0px, transparent 1px, rgba(0,0,0,0.15) 1px, rgba(0,0,0,0.15) 2px
surface:            full-page canvas
intensity:          moderate (15% black lines)
blend:              overlay, opacity-20
color:              black
animation:          none (provider 1,2); optional slow vertical scroll at 1px/30frames (provider 3) → majority: none
tailwind-approx:    no native equivalent

**Ghosting:**
technique:          pseudo-element with transform: translate(2px,0) and opacity 0.1–0.15
surface:            all content
intensity:          barely perceptible
blend:              screen (provider 1) / normal (provider 2,3) → majority: normal
color:              same as original, white ghost
animation:          none (majority)

**Static noise (optional):**
technique:          CSS/SVG feTurbulence
parameters:         baseFrequency 0.65–0.8, numOctaves 3–4, type fractalNoise
surface:            full-page on trigger
intensity:          strong during flash
blend:              overlay, opacity-8 to opacity-15
color:              monochrome
animation:          flash for 250ms every 5–8 seconds

**Chromatic aberration (optional):**
technique:          filter: drop-shadow pair (red/cyan shift)
surface:            sharp edges
intensity:          barely perceptible

**Vignette (optional):**
technique:          radial-gradient (transparent 70% → #000000 100%)
surface:            overlay above all content
intensity:          moderate (10–15% corner darkening)
blend:              multiply, opacity-10 to opacity-15

## 9. Components

### Icon Vocabulary

system:             none — use geometric primitives only (cross, circle, wedge, grid crosshair)
size:               w-4 h-4 (16×16 px)
color:              #FFFFFF or currentColor
treatment:          flat, no anti-aliasing, no effects
restrictions:       no pictorial icons, no curved lines, no text in icons
(unanimous)

### Image & Media Treatment

aspect-ratio:       aspect-[4/3]
object-fit:         object-contain (majority: provider 2 and 3 use object-contain; provider 1 use object-cover → accept object-contain)
filter:             none — pre-process to match CRT color profile, then apply global CRT filter
overlay:            gradient scrim (vignette, 15%) + grain overlay
border:             border-2 border-white (provider 1,3) / none (provider 2) → majority: border-2 border-white
dark-mode:          not applicable (dark mode is the only mode)

### Buttons

**Primary:**
- Fill: none or dark (surface-container-low) [provider 1: no fill with 1px border; provider 2: fill #3A3A3A; provider 3: bg-primary text-on-primary with border → 2/3 have filled background] → adopt: filled background (surface-container-low #2A2A2A), 1px solid white border, white text, rounded-none
- Hover: invert colors (white fill, dark text) or lighten fill [provider 1: invert; provider 2: lighten to #4A4A4A; provider 3: opacity-80 + scanline shift → no majority on hover behavior] → adopt: invert (on hover: bg-white text-black)
- Active: invert (unanimous)
- Disabled: opacity-40, text neutral (#808080)

**Secondary:**
- Fill: solid white, text dark (inverse) [unanimous]
- Hover: invert to dark fill
- Active: same as active

**Destructive:**
- Fill: error color (#FF00FF) with white text
- Border: 1px solid error

### Cards / Panels

- Fill: surface-container (CONTESTED: hex value)
- Border: 1px solid white (outline)
- Border-radius: none
- No elevation
- Internal structure: optional 1px grid lines

### Navigation

- Horizontal row of rectangular tabs
- Active tab: white fill with black text (inverse)
- Inactive: dark fill with white text
- Border: 1px solid white around each tab
- No separators or rounded corners
- [Unanimous]

### Inputs / Forms

- Fill: surface-container-lowest (CONTESTED: hex)
- Border: 1px solid white (default), 2px solid white (focus)
- Border-radius: 0
- Text: monospaced uppercase, white
- Focus: border-2, no glow
- Error: border-2 solid magenta
- Label: above, left-aligned, uppercase monospace

### Style-Native Primitives

**1. Color Bar Strip**
Horizontal bar divided into saturated color segments: red, green, blue, cyan, magenta, yellow, white, black. Height h-4 to h-10. No borders between segments. Used as decorative header/footer.

**2. Circle & Crosshair**
Concentric circles with 1px white stroke, centered in frame, diameter ~80% of height. Horizontal and vertical crosshair lines through center. No fill.

**3. Grid Overlay**
Fine orthogonal grid of 1px on-surface lines at regular intervals (e.g., every 100px in 720px frame). Used as background pattern.

**4. Zone Plate**
Radial sine wave pattern (monochrome or chroma sweep) inside a circular bounding box. Implemented as SVG or CSS.

**5. Resolution Wedge**
Tapered pattern of converging parallel lines. Placed at corners or borders.

## 10. Layout

Spacing cadence:        4px increments (p-1, p-2, p-4, etc.)
Grid tendency:          Strict symmetrical grid with fixed columns (12 or 16) following 4:3 ratio. All elements aligned to pixel grid.
Density:                High — every area carries calibration data or visual reference.
Section separation:     Horizontal divider lines (1px white) or empty space (gap-6).
Alignment philosophy:   Centered symmetry for main elements; left-aligned text. All elements centered horizontally in their containers.
Breakpoint behavior:    Not responsive — fixed 4:3 viewport. At narrow widths (375px), scale entire canvas proportionally using transform: scale(). At 768px, maintain native resolution.

Motion:
  transition-duration:        0ms (instant) — majority; provider 3 adds 150ms for hover → overridden by majority
  transition-timing-function: steps(1) [unanimous]
  transition-property:        none [unanimous]

  animation:
    flicker/breathing:
      keyframes:        opacity 0.995 ↔ 1.0
      duration:         0.5s (2Hz)
      easing:           steps(10) or ease-in-out → adopt: steps(10) for jagged effect
      trigger:          looping

    static-flash:
      keyframes:        opacity 0 → 1 → 0
      duration:         250ms (provider 1) / 0.5s (provider 2) / 250ms (provider 3) → majority: 250ms
      easing:           steps(1) or linear → adopt: steps(1)
      trigger:          every 5–8 seconds

    zone-plate-rotate:
      keyframes:        rotate(0deg) → rotate(360deg)
      duration:         30s (provider 1,2) / 20s (provider 3) → majority: 30s
      easing:           linear
      trigger:          looping

    color-bar-drift / horizontal drift:
      keyframes:        translateX(0px) → translateX(1px)
      duration:         30s (provider 2) / 1s (provider 2) / not present (provider 1) → not adopted (no majority)

  transform-at-rest:     none
  transform-on-interact: none
  transform-style:       flat
  backface-visibility:   visible

## 11. Design System Notes

### 11a. Use Constraints

**Appropriate for:** Retro-themed interfaces, broadcast/media dashboards, loading states, kiosk splash screens, poster art, game UI for TV simulation.
**Wrong for:** Modern productivity apps, medical interfaces, children's apps, high-information financial dashboards, any context requiring softness or responsive reflow.

### 11b. Prompt Phrases

- "A broadcast test card interface with SMPTE color bars, concentric circles, and a fine grid overlay in black and white with a single saturated accent."
- "An anechoic black background with thin white crosshairs, a geometric sans all-caps label, and no shadows or rounding."
- "A calibration screen displaying horizontal color bars (red, green, blue, cyan, magenta, yellow, white) on a black field."
- "A monospaced technical dashboard with hard 1px borders, everything uppercase, no anti-aliasing."
- "A retro-furniture UI with a zone plate pattern inside a circle, scanline overlay, and subtle phosphor ghosting."
- "A 4:3 fixed layout with a centered circle and static noise flashing every few seconds."
- "A signal test pattern using only fully saturated primary colors and absolute black, no opacity."
- "A CRT-style interface with a subtle vignette and slight barrel distortion, but only if the geometry remains perfectly symmetrical."

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual
description, then the incorrect visual description. Minimum 4 rules, maximum 8.

rule: Color palette is restricted to fully saturated signal primaries plus black and white — no tints, no mixing.
do:   Use only #FF0000 (red), #00FF00 (green), #0000FF (blue), #00FFFF (cyan), #FF00FF (magenta), #FFFF00 (yellow), #FFFFFF (white), and #000000 (black) — all at 100% saturation.
avoid:Pastels, tints, muted tones, or any color not at full saturation — a muted blue like #6699CC reads as corporate UI, not broadcast signal.

rule: Every edge is a hard 1px pixel boundary — the system forbids anti-aliasing and sub-pixel rendering.
do:   All borders, crosshairs, and geometric lines at exactly 1px with image-rendering: crisp-edges. Emphasis lines (focus rings, active states) at 2px maximum.
avoid:Anti-aliased lines, sub-pixel rendering, feathered edges, or borders thicker than 2px — a 3px rounded border reads as modern web UI, not CRT raster.

rule: Geometry is centered and symmetrical — the frame is a calibration pattern, not a composition.
do:   The main circle and crosshairs centered at exactly 50% 50% of the 4:3 frame. All elements mirrored if not centered on an axis.
avoid:Asymmetry, off-center placement, or unbalanced compositions — a left-aligned circle reads as editorial design, not test pattern.

rule: Typography is uppercase monospace only — every glyph occupies the same horizontal space.
do:   All text in monospace font, text-transform: uppercase, letter-spacing: tracking-tight (-0.025em to 0), font-variant-numeric: tabular-nums.
avoid:Slanted, curved, italic, script, mixed-case, or proportional-serif text — lowercase Georgia italic reads as print editorial, not broadcast metadata.

rule: The frame includes an overscan border — the edges are inactive zones, not content areas.
do:   A padding of p-4 (16px) inside each edge forms the overscan margin. No content or interactive elements enter this zone.
avoid:Content bleeding to the absolute edge of the viewport or removing the overscan margin — edge-to-edge content reads as modern full-bleed design, not CRT safe area.

rule: Physicality comes from scanlines and vignette overlays — never from shadows or glow effects.
do:   Scanlines via repeating-linear-gradient (1px transparent, 1px rgba(0,0,0,0.15)) at overlay opacity-20. Vignette via radial-gradient (transparent 60% → #000000 100%) at multiply opacity-10 to opacity-15.
avoid:Drop shadows (box-shadow: 0 2px 4px), glows (box-shadow: 0 0 8px), or gradients used as decorative fills — a card with box-shadow reads as Material Design, not CRT phosphor.

rule: Corners are always sharp at 0 radius — the only curves are the circle/crosshair primitive.
do:   border-radius: 0 (rounded-none) on every button, card, input, chip, and panel. The sole exception is the circle/crosshair component using clip-path: circle(50%).
avoid:Rounded corners (border-radius: 4px or higher) on any element — a rounded button reads as mobile UI, not broadcast hardware.

### 11d. Variation Bounds

| Axis | Low (Minimalist) | High (Maximalist) |
|------|------------------|-------------------|
| Signal quality | Clean broadcast – no artifacts | Degraded signal – heavy ghosting, noise, jitter |
| Chroma | Black & white – desaturated | Full color – all SMPTE bars, zone plate sweep |
| Standards | NTSC – 525 lines, 60 Hz | PAL – 625 lines, 50 Hz |
| Complexity | Only circle + crosshair | All bars + grid + zone plate + text + branding |
| Scanlines | Off | On with interlaced pattern |
| Technology | Flat vector lines | Emulated beam bloom, phosphor persistence |

### 11e. Compositional Signatures

No specific provider output; all agree on static, centered composition with symmetrical geometry.

### 11e.i — At Rest
A fixed 4:3 black frame (#000000 background) with centered circle and crosshair in 1px white (#FFFFFF), diameter approximately 80% of vertical height. Horizontal SMPTE color bar strip (#FF0000, #00FF00, #0000FF, #00FFFF, #FF00FF, #FFFF00, #FFFFFF, #000000) at the bottom, height h-8 (32px), no borders between segments. Monospace uppercase metadata labels in #FFFFFF at text-xs positioned at corners and center margins. Scanline overlay at opacity-20 via repeating-linear-gradient. Subtle radial vignette at opacity-10. No animation active. Flat depth, no elevation. Global CRT filter: contrast(1.1) saturate(1.1). Overscan border p-4 (16px) on all edges. No drop shadows, no rounded corners, no anti-aliasing.

### 11e.ii — Maximum Expressiveness
Full SMPTE color bar strips at top and bottom (h-10 each, 40px). Large centered circle and crosshair with 1px white strokes

### 11e.iii — Data Context

Numeric data in the Television Test Card system is rendered as stark white-on-black numerals in a fixed monospace grid — every digit occupies the same cell width, reproducing the precision alignment guides and frequency labels of broadcast calibration patterns. Statistical values appear as pure luminance markers: bright primary bars (SMPTE red #C0C0FF, cyan #00FFFF, magenta #FF00FF, yellow #FFFF00) carry no gradient or anti-aliasing, presenting data at maximum chromatic saturation against the absolute black (#000000) surface. Data-dense states such as multi-frequency grids or convergence crosshatch patterns use 1px white (#FFFFFF) hairline rules at mathematically exact intervals (every 100px in a 720-line frame), ensuring measurement precision is never compromised by decorative rounding. Status indicators are binary: a colour bar is either at full saturation or absent, mirroring the on/off logic of NTSC/PAL signal testing where intermediate values represent signal failure rather than informative nuance.


### 11f. Sources

Imagery coverage is sparse — only 3 institutional records verified.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** The subject is **BBC Test Card F**, a broadcast test pattern used by the BBC from 1967 into the 1990s, featuring a photograph of **Carole Hersee** at age 8 in 1967. The test card was designed by BBC engineers and incorporates custom sans-serif lettering associated with BBC1 branding of the period. Its visual distinctiveness and decades-long use make it the most culturally prominent single interpretation of the television-test-card slug.

**Verified imagery sources.** 3 URLs verified against institutional servers, distributed across:
- International Telecommunication Union — 1 URL(s)
- Science Museum Group / National Science and Media Museum — 1 URL(s)
- BBC Archives (general) — 1 URL(s)

No notable specific imagery sources have been identified; key references such as institutional records are not documented with public URLs. Imagery coverage is sparse — only 3 institutional records verified.

**Named typefaces.** The typography of this style is attested as:
- BBC1/Test Card F custom sans-serif lettering ( — attestation: unverified) — rendered here as bespoke imagery — no web-font substitute

**Honest gaps.** Colour values for photographic elements: Exact hex/RGB/CIE for the girl’s dress, the clown doll, the chalkboard green, and the background grey are unknown and cannot be verified from any public primary source. All values in circulation are from uncontrolled reproductions. A verified reference print from the BBC's original 1967 film or engineering documentation would resolve these gaps.
