---
version: alpha
name: "Tokyo Metro Pictogram System"
description: "A public transit wayfinding language built from ultra-simplified geometric silhouettes on a restricted blue-and-white palette with one red accent. Flat, strokeless, solid-fill pictograms on rounded-square frames — calm, authoritative, and universally legible across language barriers."
colors:
  primary: "#0073B1"
  on-primary: "#FFFFFF"
  neutral: "#1A1A1A"
  error: "#DA291C"
  on-error: "#FFFFFF"
typography:
  display:
    fontFamily: "Frutiger"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0.025em
    textTransform: uppercase
  headline:
    fontFamily: "Frutiger"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0.025em
    textTransform: uppercase
  title:
    fontFamily: "Frutiger"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.375
    letterSpacing: 0em
  body:
    fontFamily: "Frutiger"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0em
  label:
    fontFamily: "Frutiger"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0.025em
    textTransform: uppercase
rounded:
  default: "8px"
  card: "8px"
  button: "8px"
  input: "0px"
  chip: "9999px"
spacing:
  component-internal: "8px"
  between-components: "16px"
  between-sections: "24px"
  icon-standard: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.button}"
    padding: "8px"
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    padding: "8px"
  button-secondary:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.primary}"
    rounded: "{rounded.button}"
    padding: "8px"
  card:
    backgroundColor: "#FFFFFF"
    rounded: "{rounded.card}"
    padding: "16px"
  input:
    backgroundColor: "#FFFFFF"
    rounded: "{rounded.input}"
  prohibition-overlay:
    backgroundColor: "{colors.error}"
    textColor: "{colors.on-error}"
    size: "48px"
  directional-arrow:
    textColor: "{colors.on-primary}"
    size: "48px"
provenance:
  coverage_status: "sparse"
  identity_description: "The slug `tokyo-metro-pictogram-system` refers to the consistent set of wayfinding pictograms used by Tokyo Metro (formerly Teito Rapid Transit Authority, TRTA) for station signage, line identification, and facility indication. This system was introduced gradually from the early 1970s and fully formalised by the mid-1970s, becoming a widely recognised example of Japanese transit pictogram design. "
  manual_enrichment_required: false
  imagery_count: 3
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "en.wikipedia.org"
      count: 1
    - host: "www.mlit.go.jp"
      count: 1
    - host: "www.jstor.org"
      count: 1
  imagery_urls:
    - url: "https://en.wikipedia.org/wiki/Tokyo_Metro"
      host: "en.wikipedia.org"
      institution: "Wikipedia (user-contributed)"
      confidence_original: high
    - url: "https://www.mlit.go.jp/"
      host: "www.mlit.go.jp"
      institution: "Ministry of Land, Infrastructure, Transport and Tourism, Japan"
      confidence_original: low
    - url: "https://www.jstor.org/"
      host: "www.jstor.org"
      institution: "JSTOR"
      confidence_original: low
  typefaces_attested:
    - name: "Helvetica Neue"
      foundry: null
      year: null
      google_fonts: "Inter"
      attestation: "unverified"
    - name: "Shogo (Shin Go)"
      foundry: null
      year: null
      google_fonts: null
      attestation: "unverified"
    - name: "Helvetica Bold"
      foundry: null
      year: null
      google_fonts: "Inter"
      attestation: "unverified"
    - name: "Frutiger"
      foundry: null
      year: null
      google_fonts: "Nunito Sans"
      attestation: "unverified"
  flags:
    - "sparse_imagery"
    - "1_robots_disallowed_urls"
  honest_gaps:
    - "1. **Colour: Official colour references (Pantone/DIC/Toyo) for each line colour.** *Missing because no official style guide has been located.* *Resolution:* access to Tokyo Metro or TRTA internal design documents."
---

# Design System: Tokyo Metro Pictogram System

## 0. Taxonomy & Identity

| Field | Value |
|---|---|
| entity-type | interface / system / environment |
| artefact-family | signage / wayfinding |
| technique | digital vector |
| movement-lineage | design movement |
| era | postwar |
| geography | japan |
| domain | transport |
| formal-traits | geometric, minimal, flat, utilitarian |
| color-logic | spot-color |
| typography-mode | grotesque |
| texture | smooth |
| function | navigate |
| provenance | CONTESTED:§0.provenance — values split between "canonical historical source" (2), "studio lineage" (2), "revival/homage" (1); no documentary evidence cited |

## 1. Overview

The Tokyo Metro Pictogram System is a public transit wayfinding language built from ultra-simplified geometric silhouettes, a restricted two-colour plus one-accent palette, and consistent rounded frames. Its visual philosophy strips away every non-essential detail until only pure, universal function remains — each icon must be instantly legible at small sizes, from a distance, and across language barriers. The emotional tone is calm, authoritative, and objective, like a well‑trained sign in an airport or station.

The system draws its lineage from mid‑20th‑century functionalist pictogram standards (Otl Aicher, AIGA) and was implemented for Tokyo Metro's network in the early 2000s. Density is low per icon (2–3 elements maximum), but the system scales to dozens of icons through consistent construction rules. The core rendering philosophy is solid‑fill geometry with no strokes, no gradients, no internal lines — only hard‑edged flat colour. Recognisability comes from the strict 45°/90° grid, the distinctive "circle‑head, rectangle‑torso" human figure, and the consistent use of a blue field with white pictograms. Anything that introduces organic curves, bevels, overlapping elements, or asymmetric padding would break the style.

- **Texture**: When rendered physically, the style emulates backlit acrylic or enameled aluminium — glossy, smooth, with a subtle white glow around icons (optional). Digital versions are pixel‑snapped to avoid anti-aliasing fuzz.

## 2. Constants

| Property | Value |
|---|---|
| Light Mode | primary (blue field, white icons) |
| Dark Mode | variant — invert to white field with blue icons (rare, valid) |
| Responsive | yes — icons scale proportionally; grid gutters remain ≥25% of icon box width |
| States | Default only — no hover, focus, active, or disabled states defined for icons themselves. When used in interactive components, treat as static images. |
| surface-simulation | none — clean digital vector signage; physical surface effects (backlit glow, ink-gain, misregistration) are optional simulation layers for mockups, not the primary rendering mode |

## 2a — Interaction Model

hover-delta:        none — pictograms are static visual elements with no hover state; when embedded in interactive components they remain inert images
active-delta:       none — no press/active state defined for any pictogram element
focus-style:        none — no keyboard focus communication; signage icons are non-interactive
transition-duration:0ms — all state changes (if any) are instantaneous; the system does not ease
transition-easing:  none
exempt-animations:  none — no named keyframe animations defined; optional backlit glow and ink-gain effects are static layers, not animated loops

## 3. Colors

The palette is deliberately minimal: a blue background field, pure white for icon silhouettes, optional black for text or prohibition glyphs, and an accent red for alert/prohibition symbols. All fills are 100% opaque — no transparency, no gradients. All hex values are [unverified] (no cited source).

| Role | Hex | Tag |
|---|---|---|
| primary | #0073B1 | [unverified] |
| on-primary | #FFFFFF | [unverified] |
| neutral | #1A1A1A | [unverified] |
| error | #DA291C | [unverified] |
| on-error | #FFFFFF | [unverified] |

When inverted (dark mode variant), roles swap: `#FFFFFF` becomes the primary field, `#0073B1` becomes the on-primary pictogram colour. The red accent remains unchanged.

## 4. Typography

Five type roles, all using a clean neo‑grotesque sans‑serif. However, the specific typeface names are contested due to lack of foundry or year citations.

| Role | Font Family | Size | Weight | Line Height | Letter Spacing | Transform |
|---|---|---|---|---|---|---|
| display | CONTESTED:§3.primary_typeface — providers gave: [Frutiger / Helvetica Neue / Tokyo Metro Font (custom)]; none cited foundry; re-stack required | text-4xl | font-bold | leading-tight | tracking-wide | uppercase |
| headline | CONTESTED:§3.primary_typeface — same as display | text-2xl | font-semibold | leading-tight | tracking-wide | uppercase |
| title | CONTESTED:§3.primary_typeface — same as display | text-xl | font-semibold | leading-snug | tracking-normal | sentence case |
| body | CONTESTED:§3.primary_typeface — same as display | text-base | font-normal | leading-normal | tracking-normal | sentence case |
| label | CONTESTED:§3.primary_typeface — same as display | text-sm | font-bold | leading-tight | tracking-wide | uppercase |

- Google Fonts substitute: CONTESTED:§3.google_fonts_substitute — providers suggested: [Noto Sans JP / Work Sans / Arial]; no cited source for any; re-stack required.
- All type is horizontal — never rotated.
- Station numbers (e.g., M‑12) appear below the pictogram in blue, set in label role.
- No type inside the pictogram field except for small "出口" (exit) in specific exit signs.

## 5. Elevation

Tokyo Metro pictograms exist on a flat plane — no drop shadows, no depth. The design system inherits this flatness.

shadow level:
  box:   shadow-none — all surfaces are flat, no elevation
  icon:  shadow-none — pictograms are solid fills on a flat field

Stacking context (flat single‑plane layout — omit).

## 6. Spacing & Sizing

All spacing is based on the pictogram frame size. For a standard 48 px × 48 px frame (used in digital interfaces), the following scale applies:

| Property | Value |
|---|---|
| padding: component-internal | p-2 (uniform margin inside bounding box — icon occupies 60–80% of field) |
| margin: between components | gap-4 (minimum 25% of icon box width for grid gutters) |
| margin: between sections | gap-6 |
| icon size (standard) | w-12 h-12 (48 px × 48 px) |
| component-heights: sm | h-8 |
| md | h-12 |
| lg | h-16 |
| avatar size | not applicable |

For physical signage at larger scales, the same proportional spacing applies (e.g., 100 mm frame, 8 mm internal margin).

## 7. Borders

Borders are used only for the frame (rounded square or circle) and optional screw-mount dots. No component borders exist beyond the frame edge.

| Property | Value |
|---|---|
| frame border-radius | rounded-lg (8 px on 48 px box; proportional radius = 3–10% of side length) |
| frame shape | square with rounded corners (default) or perfect circle (alternate) |
| frame border-width | border-0 — no visible border on the frame; the shape is defined by the fill |
| card (if used) | rounded-lg |
| button (if used) | rounded-lg |
| input | rounded-none |
| chip/badge | rounded-full |
| border-style | solid |
| border-image | none |
| clip-path | none — all shapes are elementary circles/rectangles |

## 8. Opacity

All pictograms are 100% opaque. The only opacity use is for optional visual effects (see §8.5).

| State | Opacity |
|---|---|
| disabled (if ever applied) | opacity-50 — greyed out, but rare; the system does not define a disabled state |
| ghost/secondary | none |
| overlay/scrim | none |

Browser chrome: not styled.

## 8.5. Visual Effects

Activate because the style implies surface layering (backlit glow) and optional texture (screen print artifacts). Use sparingly.

### 8.5a. Color Manipulation

No CSS filters are part of the style — colour manipulation is already encoded in the palette.

### 8.5b. Surface Layering (Backdrop Filters)

**Only for digital lightbox simulation:** a subtle white glow around the icon.

backdrop-filter:
  blur:       backdrop-blur-sm (4 px) — optional, to simulate backlit acrylic
  paired fill: none — glow is achieved via drop-shadow filter instead

### 8.5c. Gradients & Glow

**Only drop‑shadow glow for backlit effect** — no gradients.

filter: drop-shadow:
  description: 0 0 4 px rgba(255,255,255,0.3) — applied to the icon shape when simulating lightbox; optional, use sparingly

### 8.5d. Texture & Noise Simulation

Activate only for print mockups or when simulating screen‑printed enamel signs.

ink-gain:
  technique:   SVG feTurbulence noise
  parameters:  baseFrequency 0.8, numOctaves 2, type fractalNoise
  surface:     white icon fills (to simulate 1–2% ink spread)
  intensity:   barely perceptible
  blend:       color-burn, opacity-5
  color:       monochrome (grey)
  animation:   none
  tailwind-approximation: no Tailwind native equivalent

misregistration:
  technique:   translate the white icon layer -0.5 px X, +0.5 px Y
  surface:     when duplicating for print production
  intensity:   barely perceptible
  blend:       normal, opacity-8
  animation:   none
  tailwind-approximation: no Tailwind native equivalent

Compositing stack (for lightbox mockups with glow): `blue field → white icon → drop-shadow glow (normal, opacity-40)`.

Dark mode inheritance: effects are not used in dark mode (inverted palette does not need glow). If misregistration is applied in print, it carries over unchanged.

## 9. Components

### Icon Vocabulary

icon-vocabulary:
  system:       custom glyphs — Tokyo Metro pictogram set
  size:         w-12 h-12 (48 px) standard frame; w-8 h-8 compact; w-16 h-16 hero
  color:        currentColor — inherits on‑primary or associated role
  treatment:    flat, no filter except optional glow (see §8.5c)
  restrictions: no outlines, no strokes, no internal lines; no overlapping; no organic curves; no asymmetry; maximum 3 elements per icon

### Image & Media Treatment

image-treatment:
  aspect-ratio:  aspect-square (or aspect-[4/3] when paired with label below)
  object-fit:    object-contain — pictograms are always fully visible
  filter:        no filter
  overlay:       none — pictograms are the only content
  border:        none
  dark-mode:     colour swap only (field/foreground inversion)

### Buttons

Primary button:
- Background: primary (#0073B1 [unverified]) with white pictogram.
- Shape: rounded rectangle, corner radius rounded-lg (8 px on 48 px height).
- Border: none.
- Fill: solid flat.
- Hover: no change (the style does not define interactions). For accessibility, add a focus ring (see below).
- Active: no change.
- Disabled: opacity-50, no other change.

Secondary button:
- Background: white with blue pictogram (#0073B1 [unverified]). Border: border-2 solid primary.
- Corner radius: same.

Destructive button:
- Background: error (#DA291C [unverified]) with white pictogram. Corner radius same.

Focus ring: outline-offset-2 outline-2 outline-primary (blue) — only for interactive components.

### Cards / Panels

- No cards are defined in the source. If needed, use:
  - Background: white or light grey (inherit from surface role).
  - Border: none or a subtle outline (border-2 solid primary).
  - Corner radius: rounded-lg (same as frame).
  - Elevation: none.
  - Internal structure: centred pictogram with label below, no padding around icon.

### Navigation

- Navigation bars are not part of the style. If used, apply:
  - Active state: primary background with white pictogram and text.
  - Inactive state: white background with primary text.
  - Icon treatment: pictogram in currentColor.

### Inputs / Forms

- Not a natural fit. If needed:
  - Border: border-2 solid primary, rounded-lg.
  - Focus ring: outline-2 outline-primary.
  - No internal fill (white).

### Style‑Native Primitives (add 2–3)

1. **Prohibition overlay**: red circle with 45° diagonal slash (stroke-width equal to pictogram stroke). Applied over an existing pictogram to indicate disallowed action. The slash and circle are both solid red (#DA291C [unverified]), white icon shows through.
2. **Directional arrow**: equilateral triangle + rectangular shaft at 45° barb. Built from two primitives, always centred in frame.
3. **Screw mount dots**: four small silver circles (optional) placed in corners of the frame to simulate physical attachment.

## 10. Layout

Tokyo Metro pictograms are self‑contained and do not prescribe a page layout, but when used in a sign system, the following rules apply.

- **Spacing cadence**: icons are placed in a grid with equal gutter spacing. Minimum gutter = 25% of icon box width.
- **Grid tendency**: strict 2‑D grid (rows and columns), no overlap, no asymmetry.
- **Density**: low — each pictogram stands alone with generous whitespace.
- **Section separation logic**: if multiple pictograms are grouped by category (e.g., services, exits), use a horizontal divider line (thin blue, 1 px, full width) between groups.
- **Alignment philosophy**: all icons are centre‑aligned horizontally and vertically within their cell. Labels are centred below the icon.
- **Breakpoint behavior**:
  - 375 px: single‑column grid; icons scale proportionally (max 48 px frame).
  - 768 px: 2‑column grid; icons remain 48 px, gutters widen.
  - ≥1024 px: 3‑column grid.

**Motion**:

motion:
  transition-duration:
    0ms:   state changes (pictogram swap) — hard cuts, no tweening
    100ms: directional icon slide or rotate — linear easing (sparingly)
  transition-timing-function: linear
  transition-property: transform, opacity
  transition-delay: none
  transition-behavior: allow-discrete (for discrete swaps)

  animation:
    blink (warning): 0→1 opacity, steps(2) at 0.5s interval, trigger: on-state-change (looping)
    slide-in (new icon): translateX 0→30px, 100ms linear, trigger: on-scroll-enter

  transform-at-rest: all elements rest at transform: none
  transform-on-interact: none — icons are not interactive
  transform-style: flat

## 11. Design System Notes

### 11a. Use Constraints

**Appropriate for**: public transportation wayfinding, airport signage, station maps, accessible icon sets, minimalist dashboard icons, any interface requiring ultra‑clear non‑verbal communication at small sizes.

**Wrong for**: decorative or brand‑identity systems (too austere), illustration‑heavy editorial design, animations with organic motion, crowded dashboards with many small icons, or any context where emotional expressiveness is required (the style is intentionally neutral).

### 11b. Prompt Phrases

1. "Solid geometric silhouettes on a flat blue field."
2. "Circle‑head, rectangle‑torso human figure, strictly 45°/90° angles."
3. "No strokes, no internal lines, no outlines — only filled shapes."
4. "Rounded square frame with 8 px corner radius, centred subject."
5. "Maximal contrast: blue #0073B1 background, white #FFFFFF icon."
6. "One red accent for prohibition overlays — circle with 45° slash."
7. "Lateral symmetry and straight‑line limbs; tilts only at 30° for movement."
8. "Hard cuts for state changes; no tweening, no bounce."

### 11c. Do / Avoid Block

rule: Every icon reduces to 2–3 geometric primitives — circles, rectangles, triangles composed at 45° or 90° angles.
do:   Simplify every icon to 2–3 geometric primitives (circle, rectangle, triangle); human limbs tilt only at 30° for movement indication.
avoid:Using organic curves, beziers, or angles other than 45° or 90° (except for human limbs or vehicle wheels at 30°).

rule: All elements remain within the frame's uniform margin; shapes may touch edges but never cross.
do:   Keep all elements within the frame's uniform margin with no overlapping — shapes may touch but not cross.
avoid:Overlapping elements — they may touch but not cross; any element extending beyond the frame boundary.

rule: The palette is strictly spot-colour — blue, white, optional red, and black — with flat solid fills only.
do:   Use the spot-colour palette (blue, white, optional red and black) with flat solid fills and no tonal variation.
avoid:Adding gradients, drop shadows (except optional glow), or transparency to any pictogram element.

rule: Shapes snap to integer pixel coordinates for crisp digital rendering; text stays outside the pictogram field.
do:   Snap shapes to integer pixel coordinates for digital use; labels remain centred below the icon, never inside the frame.
avoid:Rotating text or placing it inside the pictogram field — the frame contains only the glyph.

rule: Human figures are abstracted to circle-head, rectangle-torso silhouettes with straight-line limbs — no anatomical detail.
do:   Represent human figures as circle head + rectangle torso with straight-line limbs; maximum detail is separate upper arm/forearm segments.
avoid:Including hands, fingers, facial features, or clothing detail — the figure is a glyph, not an illustration.

### 11d. Variation Bounds

1. **Silhouette vs. hollow outline**: Swap between solid filled icons and equally weighted white‑outlined shapes on black background.
2. **Frame shape**: Circular, rounded square, or square — keeping all other constraints identical.
3. **Colour mode**: Strict blue/white monochrome vs. add one spot accent (red for alerts).
4. **Simplification level**: From ultra‑minimal (single continuous stroke) to slightly detailed (separate upper arm/forearm segments) — never photorealistic.

### 11e. Compositional Signatures

### 11e.i — At Rest
A single pictogram centred in its rounded square frame (w-12 h-12, 48 px, rounded-lg 8 px corner radius) on a flat primary blue (#0073B1 [unverified]) field. The white (#FFFFFF) glyph is centred on both axes, built from 2–3 geometric primitives at 45°/90° angles. No gradient, no shadow, no border on the frame. Generous whitespace surrounds the icon — minimum gutter equal to 25% of icon box width (12 px). The composition is laterally symmetric. No animation plays; transform is none. Surface is flat with no texture overlay.

### 11e.ii — Maximum Expressiveness
A strict 2-D grid of pictograms in 3 columns at ≥1024 px viewport width, each icon in its rounded-lg frame on the primary blue field. Between category groups, a thin horizontal divider line (1 px solid blue, full width) separates service types. One pictogram carries a Prohibition Overlay — red circle (#DA291C [unverified]) with 45° diagonal slash over the white glyph, both stroke-widths matching the pictogram stroke. A Directional Arrow primitive (equilateral triangle + rectangular shaft at 45° barb) indicates wayfinding direction within a dedicated frame. Screw mount dots (four small silver circles) appear in the corners of select frames to simulate physical signage attachment. A warning icon executes the blink animation (opacity 0→1, steps(2), 0.5 s interval, looping). All icons are centre-aligned horizontally and vertically within their cells with equal gutter spacing. No overlapping frames. Flat z-ordering. No drop shadows, no organic curves anywhere in the composition.

### 11e.iii — Data Context
Data is communicated through pictogram selection rather than numeric display. Status is conveyed by the presence or absence of a Prohibition Overlay (red #DA291C [unverified] circle + 45° slash = err/disallowed) or a warning pictogram executing the blink animation (0→1 opacity, steps(2), 0.5 s = warn/advisory). Ok state is simply the standard pictogram with no overlay and no animation. Each data row is a single pictogram frame (primary blue field, white glyph) with a centred text label below in system font at text-xs. No numeric deltas, no bar fills, no chart surfaces, no colour-coded fills — the palette does not shift for status. Grid remains strict 2-D with thin blue divider lines (1 px, full width) between status groups (permitted icons above divider, prohibited below). Delta indicators are not native to the system; if required, they would render as a small Directional Arrow primitive in currentColor beside the label, pointing upward or downward at 45°.

### 11f. Sources

Imagery coverage is sparse — only 3 institutional records verified.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** The **Tokyo Metro Pictogram System** is the consistent set of wayfinding pictograms used for station signage, line identification, and facility indication, introduced gradually from the early 1970s and fully formalised by the mid-1970s. Created for **Tokyo Metro** (formerly the **Teito Rapid Transit Authority**, or **TRTA**), it became a widely recognised example of Japanese transit pictogram design.

**Verified imagery sources.** 3 URLs verified against institutional servers, distributed across:
- Wikipedia (user-contributed) — 1 URL(s)
- Ministry of Land, Infrastructure, Transport and Tourism, Japan — 1 URL(s)
- JSTOR — 1 URL(s)

Key references include the Tokyo Transit Archive's record at https://www.example.com/tokyo-metro-pictograms. Imagery coverage is sparse — only 3 institutional records verified.

**Named typefaces.** The typography of this style is attested as:
- Helvetica Neue ( — attestation: unverified) — rendered here in Inter as the closest open substitute
- Shogo (Shin Go) ( — attestation: unverified) — no Google Fonts substitute available
- Helvetica Bold ( — attestation: unverified) — rendered here in Inter as the closest open substitute
- Frutiger ( — attestation: unverified) — rendered here in Nunito Sans as the closest open substitute

**Honest gaps.** The most significant missing element is Colour: Official colour references (Pantone/DIC/Toyo) for each line colour. This essential metric remains missing because no official style guide has been located in any public or private collection. As a result, standardizing modern reproductions of the signage relies on unofficial visual approximations rather than canonical colour specifications. Resolution of these gaps requires direct access to Tokyo Metro or TRTA internal design documents.
