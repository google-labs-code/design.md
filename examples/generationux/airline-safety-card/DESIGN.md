---
version: alpha
name: "Airline Safety Card"
description: "A utilitarian, universally-readable design system based on mid-20th century airline safety instruction cards. Flat vector rendering with spot-color logic, grid-based layout, and sequential pictograms in an all-caps grotesque sans-serif."
colors:
  ok: "#00A651"
  warn: "#F3C300"
  err: "#D52737"
  delta-up: "#00A651"
  delta-down: "#D52737"
  delta-flat: "#8B9BB5"
typography:
  display:
    fontFamily: "Helvetica, Arial, sans-serif"
    fontSize: "48px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.1em"
    textTransform: "uppercase"
  headline:
    fontFamily: "Helvetica, Arial, sans-serif"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.375
    letterSpacing: "0.05em"
    textTransform: "uppercase"
  title:
    fontFamily: "Helvetica, Arial, sans-serif"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 1.375
    letterSpacing: "0.025em"
    textTransform: "uppercase"
  body:
    fontFamily: "Helvetica, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "0.05em"
    textTransform: "uppercase"
  label:
    fontFamily: "Helvetica, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.05em"
    textTransform: "uppercase"
rounded:
  chip: "9999px"
spacing:
  component-internal: "16px"
  section-internal: "24px"
  page-edge: "24px"
  gap-component: "16px"
  gap-section: "32px"
  height-sm: "40px"
  height-md: "48px"
components:
  button-primary:
    backgroundColor: "#1A2744"
    textColor: "#FFFFFF"
    rounded: "0px"
    padding: "16px"
  button-primary-hover:
    backgroundColor: "#1A2744"
    textColor: "#FFFFFF"
    padding: "16px"
  button-emergency:
    backgroundColor: "{colors.err}"
    textColor: "#FFFFFF"
    rounded: "0px"
    padding: "16px"
  card:
    backgroundColor: "#F5F0E8"
    rounded: "8px"
    padding: "24px"
  step-number-badge:
    backgroundColor: "#1A2744"
    textColor: "#FFFFFF"
    size: "32px"
    rounded: "{rounded.chip}"
  instruction-header-bar:
    backgroundColor: "#1A2744"
    textColor: "#FFFFFF"
    height: "40px"
  pictogram-cell:
    backgroundColor: "#F5F0E8"
    size: "64px"
    padding: "4px"
provenance:
  coverage_status: "minimal"
  identity_description: "The slug `airline-safety-card` is ambiguous: it does not specify an airline, era, or jurisdiction. The most plausible interpretation is the generic airline safety instruction card mandated by aviation authorities, focusing on the period from the 1960s through the 1990s when these cards established a recognisable semiotic vocabulary. This record treats that generic class as the subject, with the un"
  manual_enrichment_required: true
  imagery_count: 1
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "en.wikipedia.org"
      count: 1
  imagery_urls:
    - url: "https://en.wikipedia.org/wiki/Aircraft_safety_card"
      host: "en.wikipedia.org"
      institution: "Wikipedia"
      confidence_original: high
  typefaces_attested:
    - name: "Helvetica (or Helvetica Neue)"
      foundry: null
      year: null
      google_fonts: "Inter"
      attestation: "conventional"
    - name: "Frutiger"
      foundry: null
      year: null
      google_fonts: "Nunito Sans"
      attestation: "conventional"
    - name: "Univers"
      foundry: null
      year: null
      google_fonts: "Manrope"
      attestation: "conventional"
  flags:
    - "one_usable_url_only"
    - "2_robots_disallowed_urls"
  honest_gaps:
    - "1. **Colour:** No hex, Pantone, or spectrophotometric values verified for any specific card. All hex approximations are [unverified] or [conventional]. The exact shade of red, yellow, and blue across carriers and decades is unknown."
---
# Design System: Airline Safety Card

## 0. Taxonomy & Identity

entity-type:        interface / system / environment
artefact-family:    operating system / software UI
technique:          digital vector
movement-lineage:   vernacular commercial style
era:                postwar
geography:          platform-neutral
domain:             transport
formal-traits:      grid-based, modular, diagrammatic, flat, utilitarian, informational
color-logic:        spot-color
typography-mode:    grotesque
texture:            matte, grainy
function:           instruct
provenance:         revival / homage

## 1. Overview

This design system translates the utilitarian, universally-readable visual language of mid-20th century airline safety instruction cards into a digital interface framework. Rooted in constraints of spot-color offset printing, it prioritises clarity, sequential instruction, and immediate recognition over ornament. The emotional register is calm, authoritative, and reassuring — communicating "this is how things work; follow along."

The core rendering philosophy is flat vector with spot-color logic: all fills are solid, outlines are uniform unmodulated strokes, and each ink colour serves a specific informational role. The layout is relentlessly grid-based, driven by sequential pictograms supported by minimal all-caps text. A folded-card silhouette with rounded die-cut corners, a 2–4 colour spot palette dominated by deep navy and cream with red reserved for emergencies, and wide-track all-caps grotesque sans-serif define the recognisable identity. Every surface is flat and unmodulated — no gradients, no transparency, no soft shadows. Material artifacts — subtle paper grain, fold creases, ink misregistration — are optional surface effects that simulate the printed source but never compromise legibility.

- **Emotional tone:** calm, authoritative, instructional, reassuring
- **Era/lineage:** postwar commercial printing, IATA pictogram standards, 1960s–80s airline identity
- **Density level:** moderate — generous white space, pictogram-dominant
- **Core rendering philosophy:** flat solid fills, unmodulated line art, no optical effects
- **What makes it recognisable:** folded-card boundary, spot palette, all-caps wide-track sans, faceless figures, prohibition circles, thin framing border
- **What would break it:** gradients, transparency, decorative type, photographic imagery, lowercase text, realistic anatomy, curved organic layouts
- **Physical texture:** uncoated paper grain (3–5% opacity) with simulated fold-crease artifacts and slight die-cut rounding

## 2. Constants

Light Mode:   primary — cream background, navy text, dark pictogram outlines
Dark Mode:    CONTESTED:§2.dark_mode_support — providers split; majority do not define dark mode; if forced, invert background/text and preserve red
Responsive:   yes — grid collapses from 4‑column to 2‑column at 768 px; pictograms reflow but maintain square aspect ratio
States:       Default, Active, Disabled, Hover, Focus, Error

- Focus indication: solid red ring (1px) or thick navy outline (contested between providers)

surface-simulation: paper
                    Uncoated paper substrate — the printed airline safety card is the surface model.
                    Drives page-level grain texture, fold-crease artifacts, and die-cut corner
                    rounding in preview generation.

## 2a — Interaction Model

hover-delta:        opacity — opacity shifts to 0.80 on interactive elements; no color change, no movement.
                    Printed-card feel; the card surface does not glow or shift on hover.

active-delta:       opacity-dim — opacity shifts to 0.65 on press; fill may darken slightly on
                    emergency buttons (darker red).

focus-style:        glow-ring — solid red ring (1px) signals keyboard focus; communicates attention,
                    not error. Contested alternative: thick navy outline.

transition-duration:0ms — printed card has no easing; all state changes are instantaneous.

transition-easing:  none

exempt-animations:  none — no named keyframe animations exist in the system.

## 3. Colours

### Core spot palette — all values [unverified] unless noted

- **primary** – CONTESTED:§2.hex_primary — providers gave [#1A2744, #1B2A4A, #0B1D3A, #000000, #001F3F]; no majority; re-stack required
- **on-primary** – CONTESTED:§2.hex_on_primary — providers gave [#F5F0E8, #FFFFFF, #F5F0E8, #F5F5DC, #FFFFFF]; partial agreement but no majority; re-stack required
- **secondary (emergency red)** – CONTESTED:§2.hex_secondary — providers gave [#D52737, #C8102E, #D81B21, #FF0000, #C8102E]; partial agreement (2 on #C8102E) but not majority; re-stack required
- **on-secondary** – CONTESTED:§2.hex_on_secondary — providers gave [#F5F0E8, #FFFFFF, #FFFFFF, #FFFFFF, #FFFFFF]; majority #FFFFFF (4 of 5) — accept
- **surface (cream)** – CONTESTED:§2.hex_surface — providers gave [#F5F0E8, #F2EFE5, #F5F0E8, #F5F5DC, #FDFBF7]; partial agreement #F5F0E8 (2 of 5) but not majority; re-stack required
- **on-surface** – CONTESTED:§2.hex_on_surface — providers gave [#1A2744, #1B2A4A, #0B1D3A, #000000, #001F3F]; no majority; re-stack required
- **outline** – CONTESTED:§2.hex_outline — providers gave [#1A2744, #1B2A4A, #0B1D3A, #000000, #001F3F]; no majority; re-stack required
- **outline-variant** – CONTESTED:§2.hex_outline_variant — providers gave [#8B9BB5, #A0AEC0, (not specified), (not specified), (not specified)]; insufficient data; re-stack required

### Accent colours (optional, used sparingly)

- **accent-yellow** (#F3C300) [unverified] — Safety Yellow: caution symbols, warning strips (majority of 4 providers)
- **accent-green** (#00A651) [inferred] — Exit Green: exit-path indicators, emergency lighting (not specified by all)
- **accent-orange** (#F26522) [inferred] — Oxygen-Mask Orange: oxygen mask icons, life vest details (not specified by all)

> **Dark mode swap table:** Not defined for core; if implemented, swap surface and on-surface roles, preserve red.

Semantic state colors:
ok:         #00A651 — Exit Green; confirmed, compliant, safe state — maps to accent-green
warn:       #F3C300 — Safety Yellow; caution, advisory, flagged — maps to accent-yellow
err:        #D52737 — Emergency Red; failure, critical, prohibition — same as secondary/emergency red role
delta-up:   #00A651 — Exit Green; positive numeric delta in accent-green
delta-down: #D52737 — Emergency Red; negative numeric delta in emergency red
delta-flat: #8B9BB5 — outline-variant; neutral delta — muted navy gray, same as outline-variant role

Note: All semantic states map to existing spot palette roles. No colours are introduced outside the
defined palette. Red (err) is shared with the emergency secondary role — it serves dual duty as
error indicator and emergency action colour, consistent with the system's safety-card identity.

## 4. Typography

All instructional text is set in a grotesque sans-serif with even stroke weight, all capitals, and generous letter-spacing. No typeface name is evidenced with a foundry citation.

- **primary_typeface** – CONTESTED:§3.primary_typeface — providers gave [Futura, Univers, Frutiger / Helvetica, Univers, Akzidenz-Grotesk, Arial / Helvetica, Arial / Akzidenz-Grotesk / Helvetica]; none cited foundry; re-stack required
- **secondary_typeface** – CONTESTED:§3.secondary_typeface — no provider distinguished secondary from primary; re-stack required
- **google_fonts_substitute** – CONTESTED:§3.google_fonts_substitute — providers gave [none / none / none / Roboto / none]; only one provider specified; re-stack required

**Type roles** (all uppercase, grotesque sans-serif):

| Role | Font Size | Weight | Line Height | Letter Spacing |
|------|-----------|--------|-------------|----------------|
| display | text-4xl / text-5xl / text-6xl | font-bold | leading-tight | tracking-widest |
| headline | text-2xl / text-3xl | font-bold | leading-snug | tracking-wider |
| title (step numbers, section titles) | text-lg / text-xl | font-bold | leading-snug | tracking-wide |
| body (pictogram captions, instructional labels) | text-sm / text-base | font-normal | leading-relaxed | tracking-wider |
| label (multilingual secondary text) | text-xs | font-normal | leading-none | tracking-wider |

- Tabular-lining numerals for step numbers and data display
- Reverse-out text (cream on navy / red) uses same family and weight, no optical adjustment
- No decorative, script, or novelty typefaces

## 5. Elevation

**Flat depth model — no shadow hierarchy.** All elements rest on a single plane. Active states are indicated by outline thickening or fill reversal, not elevation change. No drop shadows, no z-axis stacking.

## 6. Spacing & Sizing

padding:
  component-internal:  p-4
  section-internal:    p-6
  page-edge:           p-6

margin:
  between-components:  gap-4
  between-sections:    gap-8

component-heights:
  sm:   h-10
  md:   h-12 (default interactive target)
  lg:   CONTESTED:§6.component-heights.lg — providers gave [h-16, h-14, h-16, h-64, h-14]; no majority; re-stack required

icon-size (pictograms):  w-8 h-8
avatar-size:                not used

- Grid cells maintain square aspect ratio for pictogram panels
- Fold-line indicators occupy a 4px gutter between grid cells
- Step-number badges: w-8 h-8, filled circle with centred white numeral

## 7. Borders

border-radius:
  default:     CONTESTED:§7.border-radius.default — providers gave [rounded-lg, rounded-sm, rounded-md, rounded-lg, rounded-md]; no majority; re-stack required
  card:        CONTESTED:§7.border-radius.card — providers gave [rounded-lg, rounded, rounded-md, rounded-lg, rounded-md]; no majority; re-stack required
  button:      CONTESTED:§7.border-radius.button — providers gave [rounded-none, rounded-sm, rounded-sm, rounded-lg, rounded-md]; no majority; re-stack required
  input:       CONTESTED:§7.border-radius.input — providers gave [rounded-none, rounded-sm, rounded-sm, rounded-lg, rounded-md]; no majority; re-stack required
  chip/badge:  rounded-full (unanimous)

border-width:
  default:     border-2
  emphasis:    border-2 (focus rings, dividers)

border-style:  border-solid (fold creases: border-dashed, 1px, outline-variant)

clip-path:     none

## 8. Opacity

disabled-state:     opacity-50
ghost/secondary:    CONTESTED:§8.opacity.ghost — providers gave [opacity-60, opacity-70, (not used), opacity-60, opacity-80]; no majority; re-stack required
overlay/scrim:      not used (if required, opacity-50 from one provider but contested)
hover-feedback:     CONTESTED:§8.opacity.hover — providers gave [opacity-80, opacity-80, (not used), none, not opacity-based]; partial agreement but not majority; re-stack required

**Browser chrome** (activated — high-contrast instructional interface):
selection:
  background:  primary at 0.25–0.30 opacity (navy tint)
  color:       inherit

scrollbar:
  style:       styled
  width:       thin (6px)
  track:       surface cream
  thumb:       primary (navy)
  thumb-hover: primary (navy) or emergency red (contested)

## 8.5. Visual Effects

### 8.5.0 — Physical Material Model

Declares the top-level surface simulation governing the entire page canvas.
This is distinct from component-level textures (§8.5d) — it is the global rendering layer.

material-model:    paper

global-filter:     contrast(1.05) — simulates the slightly heightened contrast of
                   offset-printed spot-colour on uncoated stock

global-overlay:    Paper grain via body::before pseudo-element:
                   SVG feTurbulence baseFrequency=0.65 numOctaves=3 fractalNoise
                   blend: overlay, opacity-10, position:fixed, z-index:9999, pointer-events:none

rendering-flags:
  font-smoothing:  antialiased
  image-rendering: auto
  text-rendering:  auto

### 8.5a — Color Manipulation
filter:
  contrast(1.05):  applied to entire card surface (from one provider; contested)
No hue‑rotate, saturate, or blend‑mode modifications to base palette.

### 8.5b — Surface Layering (Backdrop Filters)
Not used.

### 8.5c — Gradients & Glow
background-image:  none  (no structural gradients)
text-shadow:       none
filter: drop-shadow: none
Exit‑path illumination represented as solid colour fill in pictogram, not glow.

### 8.5d — Texture & Noise Simulation

**Paper Grain**
- technique: SVG feTurbulence (fractalNoise)
- parameters: baseFrequency 0.65, numOctaves 3, type fractalNoise
- surface: full-page canvas / card fills
- intensity: barely perceptible (opacity contested — typical 3–15%)
- blend: overlay, opacity-10 (majority on overlay, opacity contested)
- color: monochrome noise
- animation: none

**Fold Crease Artifacts**
- technique: thin horizontal/vertical rules at grid boundaries
- parameters: 1px line, dashed style, colour contested (muted navy or gray), opacity 10–20%
- surface: grid boundaries only
- intensity: subtle but visible
- blend: normal

**Optional Halftone (Vintage Mode)**
- repeating radial-gradient dot pattern, 2% dot size, multiply opacity-10

**Optional Ink Misregistration (Legacy Variant)**
- offset 1–2px of colour plate fills (red and accent layers)

**Compositing stack:**
cream fill → feTurbulence grain (overlay, ~5% opacity) → fold‑crease rules (normal, ~10% opacity) → pictogram outlines/fills → optional halftone → optional misregistration offset

## 9. Components

### Icon Vocabulary
system:       custom pictograms — uniform outlined style, no library substitutions
size:         w-8 h-8 (standard pictogram), w-12 h-12 (emphasis)
color:        inherited (primary or emergency red)
treatment:    flat, 2–4pt uniform stroke, solid fill; no filter/glow/animation
restrictions: no photographic icons, no gradient fills, no thin strokes, no curved‑tail arrows, no gendered figure cues

### Buttons

| State | Primary Button | Secondary Button | Destructive/Emergency Button |
|-------|----------------|------------------|------------------------------|
| Fill | primary (navy) | surface (cream) | secondary (red) |
| Text | on-primary (white), uppercase, tracking-wider | on-surface (navy), uppercase, tracking-wide | on-secondary (white), uppercase, tracking-wider |
| Border | border-2 primary | border-2 primary | border-2 secondary |
| Corner | rounded-none (contested) | rounded-none (contested) | rounded-none (contested) |
| Hover | fill primary, opacity-80 or colour inversion | fill primary, text white | fill darker red |
| Active | fill primary, opacity-80 | fill surface-variant | fill darkest red |
| Disabled | opacity-50, border & text remain | opacity-50 | opacity-50 |

### Cards / Panels
- Fill: surface (cream) with uncoated‑paper grain compositing
- Border: border-2 primary, border-radius contested (see §7)
- Elevation: flat
- Internal structure: grid of square pictogram cells separated by 4px dashed fold‑line rules
- No image treatment within card

### Navigation (Step Progression)
- Active step: step number in filled circle (w-8 h-8, primary background, white numeral, font-bold)
- Inactive step: same circle at opacity-50, or outline‑only circle with no fill
- Icon treatment: current pictogram at full opacity; adjacent steps at opacity-60
- Directional arrows between steps: simple triangle‑on‑line, primary or red for emergency, 2–3pt stroke

### Inputs / Forms
- Border: border-2 primary, rounded contested
- Focus: border switches to secondary (red) — signals attention, not error
- Label: text-xs, uppercase, tracking-wide, above input
- Placeholder: uppercase, same grotesque sans, opacity-50
- Error state: red border, prohibition‑circle icon inline
- Disabled: opacity-50, dashed border (outline-variant)

### Style‑Native Primitives

1. **Pictogram Cell** — square aspect container (w-16 h-16 md:w-20 h-20) with internal 4px margin. Contains step-number badge (top‑left), flat outlined pictogram (2–3pt stroke), optional one‑line label (text-xs, uppercase, tracking‑wide). Cells arranged in 3–4 column grid. Prohibition circles (red, 3pt stroke, diagonal slash) wrap prohibited symbols.

2. **Step-Number Badge** — w-8 h-8 filled circle, primary background, white bold numeral. For emergency steps: secondary (red) background.

3. **Prohibition Symbol** — Ø20px circle, border-3 secondary, diagonal slash at 45° (secondary, stroke-3). Never X alone.

4. **Fold-Line Indicator** — 1px dashed rule in outline-variant at grid boundaries. In dark mode: shifted variant.

5. **Instruction Header Bar** — full‑width band (h-10) at top of card, primary fill, uppercase "IN CASE OF EMERGENCY" in on-primary. May include "PULL TO OPEN" in red at top‑right.

6. **Exit Map Panel** — top‑down cabin layout, border-4 primary, directional arrows indicating exit paths. Emergency‑lighting strips as solid green rectangles.

**Data Display Components:**

metric-cell:
  Background: surface cream (#F5F0E8 range) with paper-grain texture.
  Border: border-2 primary (navy outline).
  Label: grotesque sans-serif text-xs uppercase, tracking-wider, on-surface (navy).
  Value: grotesque sans-serif text-2xl font-bold, on-surface (navy), tabular-lining numerals.
  Delta: text-sm; positive in accent-green (#00A651), negative in emergency red (#D52737 range), neutral in outline-variant.
  No glow, no drop-shadow — flat solid fills, printed-card aesthetic.

signal-bar:
  Track: bg-outline-variant (#8B9BB5 range, muted navy gray).
  Fill: accent-green (#00A651) for nominal, emergency red for critical. Height: 4px.
  Border: none — solid flat fill on flat track, no outline on fill bar.
  No glow, no texture on fill — flat ink colour.

status-cell:
  ok:   accent-green (#00A651) check pictogram, 2–3pt stroke, or solid green bottom-border on cell.
  warn: accent-yellow (#F3C300) caution-strip fill behind cell label, or yellow diamond pictogram.
  err:  emergency red with Prohibition Symbol component overlaid (Ø20px red circle + diagonal slash).
  Fill: always cream surface — status communicated by pictogram overlay and border accent, not background fill.
  No glow on any state.

data-table-row:
  Alternating: odd rows surface cream (#F5F0E8); even rows slightly warmer cream or same surface — no strong banding.
  Cell border: border-b in outline-variant (1px, muted navy gray).
  Label: grotesque sans-serif text-xs uppercase, tracking-wider, outline color (navy).
  Value: grotesque sans-serif text-sm, on-surface (navy), tabular-lining numerals.
  No row-level surface effects beyond paper grain.

chart-surface:
  Background: surface cream (#F5F0E8 range) with paper-grain texture.
  Grid lines: 1px outline-variant (muted navy gray) at regular intervals.
  Axis labels: grotesque sans-serif text-xs uppercase, tracking-wider, outline color.
  Line/bar fills: primary navy for nominal data, accent-green for exit-path metrics, emergency red for critical thresholds.
  No glow on any chart element — flat solid strokes and fills only.

## 10. Layout

**Spacing cadence:** Generous. Card margins p-6; internal grid cells have 4px gutters (fold lines). Pictograms have p-2 internal breathing room.

**Grid tendency:** Strict modular grid. Every step occupies a square cell. Columns: 4 at ≥1024px, 3 at 768–1023px, 2 at 375–767px. Rows auto-fill vertically. No asymmetric or broken grid.

**Density:** Moderate. Cell size scales proportionally — at 375px, cells smaller but maintain square aspect. Text labels reduce to ~9px at narrow viewports. Pictograms simplify.

**Section separation logic:** Card surface is a single continuous rectangle. Fold lines (dashed rules) separate sections internally. No coloured section backgrounds.

**Alignment philosophy:** All content left‑aligned (or start‑aligned in RTL). Step numbers top‑left of cell. Labels centred below pictograms. Arrows centred between cells.

**Breakpoint behaviour:**
- ≥1024px: 4‑column grid, card width 780px, 20px gutters
- 768px: 3‑column grid, card width 600px, fold lines reduce to 2px gutters
- 375px: 2‑column grid, card width 340px, pictograms w-12 h-12, text labels inline beside pictograms, step‑number badge top‑left overlap

**Motion block:**

motion:
  transition-duration:        0ms (instantaneous for printed‑card feel)
  transition-timing-function: linear
  transition-property:        none (optional: outline color, opacity at 100ms if needed)
  animation:                  none
  transform-at-rest:          transform: none
  transform-on-interact:      none
  transform-style:            flat

Motion rule: instructional and utilitarian. No spring easing, no bounce, no parallax, no entry animations that delay legibility.

## 11. Design System Notes

### 11a. Use Constraints

**Appropriate for:** sequential instructional interfaces, tutorial flows, safety and compliance dashboards, step‑by‑step wizards, signage systems, evacuation/emergency‑procedure displays, public‑facing kiosks, transit information displays, industrial control panels.

**Wrong for:** entertainment/lifestyle consumer apps (social feeds, media browsing, e‑commerce discovery), brand experiences requiring emotional warmth or aspirational tone, children‑targeted UIs, contexts requiring photographic or illustrative richness.

### 11b. Prompt Phrases

1. "Instructional pictogram grid with uniform 2–3pt outlines, faceless figures, and step numbers in filled navy circles"
2. "Spot‑colour palette of deep navy, cream, and emergency red — pure solid fills, no gradients or transparency"
3. "All‑caps grotesque sans‑serif, tracking‑widest to tracking‑wider, with labels below pictograms"
4. "Prohibition as a red circle with diagonal slash — never an X alone; red reserved for emergency actions only"
5. "Folded‑card layout with dashed fold lines between grid sections and a thin die‑cut card border"
6. "Unmodulated line art: uniform stroke weight across all symbols, no shading, no hairline strokes"
7. "Subtle uncoated‑paper texture and fold‑crease artifacts on the card surface"
8. "Sequential left‑to‑right, top‑to‑bottom reading flow with generous white space around each cell"

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description.

rule: All instructional text is uppercase with tracking-wider or wider — lowercase never appears in this system.
do:   Body text at text-sm/text-base, font-normal, tracking-wider, all uppercase in grotesque sans-serif. Step labels at text-xs, tracking-wider, uppercase. Display and headline at tracking-widest/tracking-wider.
avoid:Mixed-case text, tracking-normal, or tracking-tight anywhere. Decorative, script, handwriting, or novelty typefaces of any kind — they break the utilitarian printed-card identity.

rule: Fills are solid and flat — no optical effects, no transparency blending for decorative purpose.
do:   Primary navy as solid hex fill, cream surface as solid hex fill, emergency red as solid hex fill. Exit-path lighting as solid green rectangles. No opacity layering except for disabled/hover states.
avoid:Gradients, soft shadows, drop shadows, transparency blending, or any optical effect on any surface or fill.

rule: Red is reserved exclusively for emergency-related elements — it is not a general accent colour.
do:   Emergency buttons in secondary red, prohibition symbols in red (Ø20px circle + diagonal slash, 3pt stroke), emergency step-number badges in red fill. No other element uses red.
avoid:Red as a decorative accent, red for non-emergency interactive states, photographic or gradient red fills inside pictograms, or red used casually outside the emergency semantic.

rule: Step numbers are anchored top-left of each cell; all content follows strict start-alignment.
do:   Step-number badge (w-8 h-8 filled circle, white bold numeral) positioned top-left corner of pictogram cell. Labels centered below pictograms. All content left-aligned (start-aligned in RTL).
avoid:Centered or right-aligned step numbers. Centered overall layout composition. Grid content that does not follow strict start-alignment.

rule: Human figures are faceless, gender-neutral, and simplified — circle head with blocky body, no anatomical detail.
do:   Uniform 2–3pt outlined figures with circle heads, no facial features, no hair, no gendered silhouette cues. Same stroke weight as all other pictograms in the set.
avoid:Realistic human anatomy, faces with features (eyes, mouth, expression), gendered body indicators, or anatomically detailed silhouettes of any kind.

rule: Grid structure is strictly rectangular — fold lines as dashed rules between sections, no coloured section backgrounds.
do:   1px dashed rules in outline-variant at grid boundaries separating square pictogram cells. Fold-line gutters at 4px. Card container with die-cut appropriate border-radius. Single continuous cream surface.
avoid:Curved or organic layouts. Asymmetric broken grids. Coloured section backgrounds instead of fold-line rules. Non-rectangular cell shapes.

rule: All pictogram outlines share the same 2–3pt uniform stroke weight — no variation across the symbol set.
do:   Every pictogram rendered with consistent 2–3pt stroke — human figures, arrows, doors, oxygen masks, exits all share identical stroke weight. No thin strokes, no hairline details.
avoid:Inconsistent stroke weights across pictograms (e.g., 1pt arrows alongside 3pt figures). Thin or varying stroke treatments that break the visual uniformity of the symbol vocabulary.

### 11d. Variation Bounds

| Axis | Range | Notes |
|------|-------|-------|
| Vintage vs. Modern | Yellowed paper with halftone dots → Crisp white with vector‑flat rendering | Controls paper age, grain intensity, presence of halftone; palette shifts |
| Minimal vs. Maximal | 4‑pictogram single‑panel card → 12‑step two‑sided card with multilingual labels | Controls grid dimensions, cell count, overall density |
| Clean vs. Distressed | Mint‑fresh card, no artifacts → Sun‑faded, creased, coffee‑stained, ink misregistration | Controls texture parameters: grain opacity, fold‑line visibility, offset, edge‑wear |
| Flat vs. Textured | Pure vector, no material simulation → Scan‑based full paper grain, fold wear, ink spots | Activates or omits all §8.5d compositing |
| Pictographic vs. Wordy | Zero text — pictograms alone → Multilingual tables with dense instructional copy | Controls label length, presence of secondary languages |

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts.
Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
A single safety card panel: cream surface fill with subtle uncoated-paper grain (feTurbulence, overlay, opacity-10). Thin border-2 in primary navy frames the card with die-cut-appropriate border-radius. An instruction header bar (h-10, primary navy fill, uppercase "IN CASE OF EMERGENCY" in on-primary white, grotesque sans-serif, tracking-widest) spans the full width. Below the header, a 4-column grid of square pictogram cells separated by 4px dashed fold-line gutters in outline-variant. Each cell contains a step-number badge (w-8 h-8, primary navy filled circle, white bold numeral, top-left corner) and a flat outlined pictogram (2–3pt stroke, primary navy or emergency red for prohibition steps) with a one-line uppercase label (text-xs, tracking-wider) centered below the pictogram. No drop shadows. No gradients. No animation. Paper grain compositing across the entire surface.

### 11e.ii — Maximum Expressiveness
A two-sided card layout showing 12 sequential steps across two panels. Seven to nine pictogram cells per side at maximum density, including emergency procedures (oxygen mask deployment, brace position, exit door pull, slide deployment, life vest inflation) and prohibition symbols (red Ø20px circles with diagonal slashes over cigarettes, electronics, high heels). Instruction header bar in primary navy with "PULL TO OPEN" in emergency red at top-right. Exit-map panel (top-down cabin layout, border-4 primary navy, solid accent-green emergency-lighting strip rectangles, directional arrows in primary or red, 2–3pt stroke). Multilingual labels (text-xs, tracking-wider, uppercase, outline-variant color) below primary captions. Full compositing stack active: cream fill → feTurbulence grain (overlay, ~5% opacity) → fold-crease dashed rules (normal, ~10% opacity) → pictogram outlines and fills → optional halftone dot pattern (multiply, opacity-10) → optional ink misregistration offset (1–2px red plate shift). Fold-line rules visible between every section. All text uppercase grotesque sans-serif. Die-cut card border with rounded corners on outer container.

### 11e.iii — Data Context
Safety compliance data rendered as a grid of pictogram cells: each status indicator occupies a square cell with a step-number badge top-left. Status states map directly to the spot palette — ok uses accent-green (#00A651) as a flat solid check pictogram or green bottom-border accent on the cell; warn uses accent-yellow (#F3C300) as a caution-strip fill behind the cell label or yellow diamond pictogram; err uses emergency red with a Prohibition Symbol component overlaid (Ø20px red circle + diagonal slash). Data tables have cream surface fills with paper grain, border-2 primary navy cell borders, header rows in primary navy fill with on-primary white uppercase text (text-sm, tracking-wider, grotesque sans-serif). Data values in on-surface navy, grotesque sans-serif, text-sm, tabular-lining numerals. Metric deltas: positive in accent-green (#00A651), negative in emergency red, neutral in outline-variant. No glow on any data element. Paper grain persists on every surface. Column headers use the instruction header bar treatment (navy band, white uppercase text). All fills flat and solid — printed spot-colour logic maintained even in tabular/data contexts.

### 11f. Sources

This subject has minimal verified imagery. The visual claims below should be treated with caution.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** The **Airline Safety Card** represents a generic class of aviation instruction materials mandated by authorities, spanning the documented period from the 1960s through the 1990s. These documents established a recognisable semiotic vocabulary that remains relevant across different jurisdictions. While specific designers and foundries vary by carrier, the core identity relies on standardized safety instruction protocols.

**Verified imagery sources.** 1 URLs verified against institutional servers, distributed across:
- Wikipedia — 1 URL(s)

Key references include the **Federal Aviation Administration**'s historical collection at [URL], though the current record indicates zero verified image sources are available. Consequently, the visual identity must be inferred from public domain archives rather than primary documents.

**Named typefaces.** The typography of this style is attested as:
- Helvetica (or Helvetica Neue) ( — attestation: conventional) — rendered here in Inter as the closest open substitute
- Frutiger ( — attestation: conventional) — rendered here in Nunito Sans as the closest open substitute
- Univers ( — attestation: conventional) — rendered here in Manrope as the closest open substitute

**Honest gaps.** The most significant gap concerns colour fidelity, as no hex, Pantone, or spectrophotometric values verified for any specific card exist. All hex approximations are [unverified] or [conventional], and the exact shade of red, yellow, and blue across carriers and decades is unknown. This lack of spectral data compromises the design system's ability to replicate the original aesthetic accurately. Resolution requires access to archived physical samples or official Pantone guides from the specific jurisdictions involved.
