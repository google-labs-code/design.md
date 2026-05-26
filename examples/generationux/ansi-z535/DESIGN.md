---
version: alpha
name: "ANSI Z535"
description: "Industrial safety signage system for hazard communication using strict signal-word–color pairings, high-contrast flat typography, and black pictograms on white backgrounds. Instant danger-level recognition through blunt, authoritative, purely utilitarian visual language."
colors:
  white: "#FFFFFF"
  black: "#000000"
  warning-orange: "#FF6600"
  caution-yellow: "#FFD100"
typography:
  display:
    fontFamily: "DIN 1451"
    fontSize: "60px"
    fontWeight: 900
    lineHeight: 1.25
    letterSpacing: "0.025em"
    textTransform: "uppercase"
  headline:
    fontFamily: "DIN 1451"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0em"
    textTransform: "uppercase"
  body:
    fontFamily: "DIN 1451"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  label:
    fontFamily: "DIN 1451"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
rounded:
  default: "0px"
  card: "0px"
  button: "0px"
  input: "0px"
  chip: "0px"
spacing:
  component-internal: "16px"
  section-internal: "16px"
  page-edge: "16px"
  gap-component: "16px"
  gap-section: "8px"
  height-sm: "32px"
  height-md: "48px"
  height-lg: "80px"
  icon: "48px"
components:
  safety-sign:
    backgroundColor: "#FFFFFF"
    textColor: "#000000"
    rounded: "{rounded.card}"
    padding: "16px"
  signal-word-panel-danger:
    backgroundColor: "#E60000"
    textColor: "#FFFFFF"
    rounded: "{rounded.card}"
    padding: "16px"
  signal-word-panel-warning:
    backgroundColor: "#FF6600"
    textColor: "#000000"
    rounded: "{rounded.card}"
    padding: "16px"
  signal-word-panel-caution:
    backgroundColor: "#FFD100"
    textColor: "#000000"
    rounded: "{rounded.card}"
    padding: "16px"
  metric-cell:
    backgroundColor: "#FFFFFF"
    textColor: "#000000"
    rounded: "{rounded.card}"
    padding: "16px"
  pictogram:
    textColor: "#000000"
    size: "48px"
provenance:
  coverage_status: "sparse"
  identity_description: "The slug `ansi-z535` refers to the American National Standards Institute (ANSI) Z535 series of standards for safety signs, safety colors, and markings. This is a prescriptive visual language defined by multiple parts: Z535.1 (colors), Z535.2 (environmental signs), Z535.3 (safety symbols), Z535.4 (product labels), Z535.5 (tags and barricade tapes), and Z535.6 (product safety information). The syste"
  manual_enrichment_required: false
  imagery_count: 4
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "www.osha.gov"
      count: 2
    - host: "en.wikipedia.org"
      count: 1
    - host: "www.makeitelectric.org"
      count: 1
  imagery_urls:
    - url: "https://en.wikipedia.org/wiki/ANSI_Z535"
      host: "en.wikipedia.org"
      institution: "Wikipedia"
      confidence_original: high
    - url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.145"
      host: "www.osha.gov"
      institution: "OSHA"
      confidence_original: high
    - url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.144"
      host: "www.osha.gov"
      institution: "OSHA"
      confidence_original: high
    - url: "https://www.makeitelectric.org/technologies/nema-standards/"
      host: "www.makeitelectric.org"
      institution: "NEMA"
      confidence_original: low
  typefaces_attested:
    - name: "Helvetica"
      foundry: null
      year: null
      google_fonts: "Inter"
      attestation: "conventional"
    - name: "Helvetica"
      foundry: null
      year: null
      google_fonts: "Inter"
      attestation: "conventional"
    - name: "Arial"
      foundry: null
      year: null
      google_fonts: "Arimo"
      attestation: "conventional"
  flags:
    - "sparse_imagery"
  honest_gaps:
    - "1. Exact hex values for all safety colors (contested)."
---

## 0. Taxonomy & Identity
entity-type:          interface / system / environment
artefact-family:      signage / wayfinding
technique:            printmaking (providers: printmaking, digital vector, digital raster)
movement-lineage:     vernacular commercial style
era:                  postwar
geography:            US / Canada
domain:               industrial / engineering / maintenance
formal-traits:        utilitarian, flat, geometric, informational (majority: utilitarian, flat)
color-logic:          spot-color
typography-mode:      sans / display type (providers: sans, display type, grotesque)
texture:              matte
function:             warn
provenance:           canonical historical source (majority, except one provider: revival/homage)

## 1. Overview
The ANSI Z535 standard defines the visual language for hazard communication in industrial, commercial, and public safety contexts. Its primary goal is instant recognition of danger level through a strict signal-word–color pairing, paired with high-contrast typography and simplified pictograms. The aesthetic is blunt, authoritative, and entirely utilitarian – every element serves life-safety clarity. There is no decoration, no hierarchy beyond the signal word, and no room for ambiguity.

- **Emotional tone:** Urgent, commanding, trustworthy, unfriendly.
- **Era/lineage:** Mid‑20th‑century industrial standardisation; rooted in postwar safety regulation.
- **Density level:** Low – generous margins, single focal point (signal word), minimal text.
- **Core rendering philosophy:** Solid colors, flat surfaces, crisp borders, no gradients or shadows.
- **What makes it recognizable:** Solid‑color signal word panel (red/orange/yellow/blue/green), black border, white background, black pictogram in a circle, all‑caps DANGER/WARNING/CAUTION.
- **What would break it:** Rounded corners, drop shadows, gradients, tinted safety colors, decorative typography, animated pictograms.
- **Physical texture (optional):** Matte or satin surface, simulated via subtle noise or consistent specular; weathered wear can include corner scuffs, dust, and a faint registration offset.

## 2. Constants
Light Mode:   Yes – primary. All signs are white‑background.
Dark Mode:    Variant – only for EXIT signs (green background with white text) or some providers allow black background for exit signs.
Responsive:   Yes/No – some providers allow responsive adaptation to container, others fixed aspect ratio. Majority: signs have fixed proportions; if scaled, all proportions remain locked.
States:       Default, Alert (strobe for DANGER), Inactive (faded), Damaged (optional worn variant).
surface-simulation: coated-card — industrial safety signs on rigid coated substrate with matte finish; weathered variants add corner scuffs, surface grain, and registration offset

## 2a — Interaction Model

hover-delta:        none — no hover state on this industrial safety sign system; signs are static physical artifacts
active-delta:       none — no press/active state on physical signage; UI badge adaptations inherit no press response
focus-style:        outline — simple 2px black dashed outline for keyboard focus on UI adaptations (badge, modal trigger)
transition-duration:0ms — all state changes are instantaneous; no easing
transition-easing:  none
exempt-animations:  strobe — the DANGER alert strobe must continue even though transition-duration is 0ms

## 3. Colors
All colors are used at 100% solid – no tints or shades.

- Danger red: **CONTESTED:§2.hex_danger** — providers gave: [#E60000, #CC0000, #C8102E, #E31E24, #E60000]; no cited source; re-stack required
- Warning orange: `#FF6600` [conventional] – unanimous across all providers; common digital approximation of ANSI Z535.1 Safety Orange.
- Caution yellow: `#FFD100` [conventional] – unanimous; common digital approximation of ANSI Z535.1 Safety Yellow.
- Notice blue: **CONTESTED:§2.hex_notice** — providers gave: [#005A9E, #0070C0, #0076C8, #0044CC, #0051BA]; no cited source; re-stack required
- Safety green: **CONTESTED:§2.hex_safety** — providers gave: [#00A14A, #009B48, #009A44, #00A651, #00843D]; no cited source; re-stack required
- Radiation purple (optional): **CONTESTED:§2.hex_radiation** — providers gave: [#7B2D8E, #8C4799, #7B2D8E, (not provided), #6A227D]; no cited source; re-stack required
- White: `#FFFFFF` [attested] – universal sign background.
- Black: `#000000` [attested] – border, pictogram, message text.

Dark mode variant (EXIT sign): swap white background → safety green (value contested) or black background with white text. Values lock to the same safety green hex as above; dark mode body background differs across providers (white vs off-black).

Semantic state colors:
ok:         maps to Safety Green (contested hex, conventional #00A14A) — all clear, safe condition, SAFETY INSTRUCTION level
warn:       maps to Warning Orange (#FF6600) — advisory, potentially hazardous condition, CAUTION/WARNING level
err:        maps to Danger Red (contested hex, conventional #E60000) — critical hazard, life-safety danger, DANGER level
delta-up:   maps to Safety Green — positive numeric delta
delta-down: maps to Danger Red — negative numeric delta
delta-flat: maps to Black (#000000) — neutral delta, no change

Note: All semantic state colors map directly to existing ANSI Z535.1 palette roles. No additional colors are introduced beyond the signal-word palette.

## 4. Typography
| Role | Font-family | Font-size | Font-weight | Line-height | Letter-spacing | Text-transform |
|------|-------------|-----------|-------------|-------------|----------------|----------------|
| **display** | **CONTESTED:§3.primary_typeface** — providers gave: [DIN 1451, Helvetica, Arial, Inter]; no cited foundry. Substitutes: Arial, Roboto, Inter | text-5xl to text-8xl | font-black / font-bold | leading-tight | tracking-wide | uppercase |
| **headline** | (same as display when used) | text-3xl | font-bold | leading-tight | tracking-normal | uppercase |
| **body** | **CONTESTED:§3.secondary_typeface** — providers gave: [DIN 1451 Mittelschrift, Helvetica, Arial, Helvetica Medium, Inter]; no cited foundry | text-base to text-xl | font-normal / font-medium | leading-normal | tracking-normal | normal-case (or uppercase for short phrases) |
| **label** | same as body | text-sm | font-normal | leading-tight | tracking-tight | uppercase (for regulatory fine print) |

- **Google Fonts substitute:** **CONTESTED:§3.google_fonts_substitute** — providers gave: [none, none, none, Roboto, Inter/Roboto]; re-stack required.  
- No italic, no condensed, no decorative variants.
- Minimum stroke width >1 px at intended viewing distance.

## 5. Elevation
Flat depth model – no shadow hierarchy. All elements rest on the same plane. Stacking context not applicable.

## 6. Spacing & Sizing
padding:
  component-internal:  p-4 to p-8 (majority p-4 for small, p-6 for large)
  section-internal:    p-4 to p-6 (providers vary)
  page-edge:           p-4 to p-8 (majority p-6 to p-8)

margin:
  between-components:  gap-4 (unanimous)
  between-sections:    gap-2 to gap-6 (majority gap-4 to gap-6)

component-heights:
  sm:   h-8 to h-12 (majority h-12)
  md:   h-12 to h-20 (majority h-16)
  lg:   h-20 to h-60 (majority h-20 to h-24)

icon-size:       w-12 h-12 to w-24 h-24 (majority w-12 h-12 for small, w-24 for large; gap marker for exact)
avatar-size:     not used

## 7. Borders
border-radius:
  default:     rounded-none (unanimous)
  card:        rounded-none
  button:      rounded-none
  input:       rounded-none
  chip/badge:  rounded-none

border-width:
  default:     border-2 to border-4 (majority border-4)
  emphasis:    border-4 to border-8 (majority border-8 for large signs)
  pictogram:   border-2 (majority)

border-style:  border-solid (unanimous)
clip-path:     none – pictogram may be inside a circle (border-2 on shape, not clip)

## 8. Opacity
disabled-state:     opacity-50 to opacity-70 (majority opacity-50)
ghost/secondary:    not used (unanimous, but one provider uses opacity-80)
overlay/scrim:      not used (unanimous, but one provider uses opacity-50 for modals)
hover-feedback:     none (unanimous)

browser chrome:
  selection:        rgba(0,0,0,0.2) (majority)
  scrollbar:        hidden / auto – not styled (majority)

### 8.5.0 — Physical Material Model

Declares the top-level surface simulation governing the entire page canvas.
This is distinct from component-level textures — it is the global rendering layer.

material-model:    coated-card — rigid coated substrate with matte finish, simulating industrial safety sign stock

global-filter:     none — no global color shift; ANSI Z535 signs have no environmental tint

global-overlay:    Subtle matte surface grain via body::after pseudo-element:
                   SVG feTurbulence baseFrequency=0.4 numOctaves=2 fractalNoise
                   blend: multiply, opacity-5, position:fixed, z-index:9999, pointer-events:none
                   Weathered variant adds additional grain and faint dust speckles

rendering-flags:
  font-smoothing:  antialiased — standard text rendering for legibility
  image-rendering: auto — pictograms are vector, no pixel interpolation needed
  text-rendering:  auto

## 9. Components
### Icon vocabulary
icon-vocabulary:
  system:       Custom black‑silhouette pictograms drawn from ANSI Z535.3 standard
                (skull, flame, exclamation, biohazard, etc.)
  size:         w-12 h-12 to w-24 h-24 (majority w-12 h-12; large signs w-24)
  color:        #000000 solid fill – no gradients, no outlines
  treatment:    None – purely flat, no glow, no animation
  restrictions: No halftones, no multiple outlines, no line art thinner than 2 px

### 9.1 Safety Sign (composite)
A single component with three mandatory sub‑parts:
- **Signal Word Panel:** Solid‑color rectangle (red/orange/yellow/blue/green) full width, 1/3 to 1/2 of sign height. White or black text (white on red/blue/green, black on orange/yellow) all caps, fully justified to the panel. Border on three sides (top, left, right) if included as part of sign border.
- **Message Panel:** White background, black text left‑aligned, sentence case or all caps. Contains the hazard description. At least 2× the height of the message text for legibility.
- **Pictogram (optional):** Black silhouette inside a black circle (outline, stroke border-2). Positioned either in a left column (alongside message) or in a row above. Circle outer diameter equals height of message panel.

**States:**
- Default: static flat.
- Alert: DANGER signal word panel strobes at 2–4 Hz (emergency beacon).
- Damaged: optional worn variant with faded color, scuffs, slight grain – never affects legibility.

### 9.2 EXIT Sign (variant)
Green background (value contested) with white text "EXIT" in display weight. Sometimes uses a white running‑man pictogram. No black border. Always vertical. No strobe.

### 9.3 Signal Word Badge (UI adaptation)
Compact rectangle with signal word, hazard color, and minimum border. No message panel.

### 9.4 Pictogram only (isolated icon)
Standalone black silhouette inside a black circle. Used in app icons or warning dialogs.

**Data Display Components:**

metric-cell:
  Background: white (#FFFFFF) with black border-4. No fill — white surface only.
  Label: DIN 1451 text-sm font-normal uppercase, black (#000000).
  Value: DIN 1451 text-2xl font-bold uppercase, black (#000000).
  Delta: DIN 1451 text-sm font-normal; positive in safety green, negative in danger red, flat in black.
  No glow, no shadow, no gradients — flat solid text on white.

signal-bar:
  Track: white (#FFFFFF) with 2px black border.
  Fill: solid hazard color at 100% opacity (red for danger, orange for warning, yellow for caution, blue for notice, green for safety instruction).
  Height: 16px. Border: 2px solid black (#000000).
  No glow, no grain, no texture on fill — flat solid color.

status-cell:
  Background: white (#FFFFFF).
  Border: 2px solid the hazard color matching the status level.
  Text: DIN 1451 font-black uppercase, color matches border.
  ok: safety green border, "SAFE" text.
  warn: warning orange border, "CAUTION" text.
  err: danger red border, "DANGER" text.
  States use color change only — no icon substitution, no fill change, no glow.

data-table-row:
  Background: white (#FFFFFF) for all rows — no alternating color.
  Cell border: border-b border-black (#000000) 1px solid.
  Label: DIN 1451 text-sm font-normal, black (#000000).
  Value: DIN 1451 text-sm font-bold, black (#000000).
  No row-level surface effects, no hover highlight.

chart-surface:
  Not used in this system. ANSI Z535 does not employ line or bar charts. Numeric data is represented as flat metric values or status badges only.

## 10. Layout
- **Spacing cadence:** Generous margins – content never touches the border. Equal gutters between sections.
- **Grid tendency:** Rigid horizontal grid with three zones: signal word (top), pictogram (middle left or top), message (middle right or bottom).
- **Density:** Very low – only one header, one body line, one pictogram per sign.
- **Section separation logic:** Horizontal or vertical ruled by the border – no internal dividers.
- **Alignment philosophy:** Central axis for signal word; left‑align for message body.
- **Breakpoint behavior:** Not applicable (fixed proportions) or adaptive (two providers). Majority: fixed, but UI adaptations may collapse at 375px to single column.
- **Motion block:**
  - Transition-duration: 0ms (instant state changes) except for strobe.
  - Transition-timing-function: steps(1) for strobe; no easing.
  - Transition-property: background-color (strobe only).
  - Animation:
    - `strobe`: background-color between hazard color and white at 2–4 Hz, trigger: on-state-change (DANGER alert).
    - `reveal-text`: line-by-line hard instant appear, delay 0.5s each line, trigger: on-load.
  - Transform-at-rest: none.
  - Transform-on-interact: none.
  - No blur, no morphing, no scale.

## 11. Design System Notes
### 11a. Use Constraints
Appropriate for: industrial safety dashboards, hazard overlays, compliance documentation, wayfinding in factories, caution modals, error states in heavy machinery interfaces.  
Wrong for: luxury retail, children's apps, playful social media, any context requiring warmth or subtle hierarchy.

### 11b. Prompt Phrases
1. "Solid hazard‑color panel with white reverse signal word, full width, no border radius."
2. "Black border around entire sign, at least 4px thickness, no inner shadows."
3. "Left‑aligned black body text on white background, sentence case, no italic."
4. "Pictogram: black silhouette inside a black‑stroke circle, no fill, no gradient."
5. "All attention drawn to the signal word; message is secondary, never decorative."
6. "Flat matte finish – no grain, no reflection, no gradient."
7. "For DANGER only: background strobes at 3Hz – instant on/off, no fade."
8. "Keep spacing generous – content never touches the border, equal gutters."

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description. Minimum 4 rules, maximum 8.

Format per rule:
rule: [The constraint stated as a principle — what the system enforces and why it matters]
do:   [Describe the correct rendering — specific enough to build live HTML from this description.
       Name the exact color, font, treatment, geometry.]
avoid:[Describe the incorrect rendering — name the specific wrong choice, not "avoid X in general".]
```

```
rule: Safety colors must be used at 100% solid with no tinting or opacity reduction — the color itself is the hazard level indicator and must remain authoritative.
do:   Use ANSI Z535.1 colors at 100% solid — Danger red at full hex value, Warning orange #FF6600, Caution yellow #FFD100, Notice blue at full value, Safety green at full value. All colors applied at solid opacity with no blending, no transparency, no tint.
avoid:Tinting or lowering the opacity of any safety color. A danger red at 80% opacity or a tinted warning orange reads as decorative, not warning — dangerously ambiguous in a safety context.

rule: The system is flat, solid, and rectilinear — no gradients, shadows, blurs, or rounded corners may appear anywhere on the sign.
do:   Render all panels as solid rectangles with zero border-radius, no drop shadows, no inner shadows, no gradients, and no blur effects. All text is solid black or white with no text-shadow, maintaining crisp high-contrast edges at every text size.
avoid:Adding a 2px border-radius to the signal word panel, a subtle drop-shadow behind the pictogram, or a soft blur on the background. Any such softening reduces the authority and instant legibility of the safety message.

rule: Signal-word hierarchy is the primary communication mechanism — DANGER > WARNING > CAUTION > NOTICE > SAFETY INSTRUCTION — and must never be altered or collapsed.
do:   Use DANGER in red for imminent life-threatening hazards, WARNING in orange for potentially hazardous situations, CAUTION in yellow for minor hazards, NOTICE in blue for property damage, SAFETY INSTRUCTION in green. Each level has a distinct color and signal word pair with no overlap.
avoid:Using CAUTION yellow for a life-threatening hazard or DANGER red for a minor slip warning. Breaking the hierarchy creates confusion that can lead to injury — the color-to-severity mapping is codified in the standard.

rule: All typography must be utilitarian sans-serif — no decorative typefaces, script, or centered body text is permitted.
do:   Use DIN 1451 or Arial sans-serif for all elements. Body text is left-aligned, sentence case or uppercase, never centered. Display/signal words are all-caps in font-black weight with tracking-wide for maximum legibility at distance.
avoid:Using a script, serif, or decorative typeface for any element. Centering the hazard description body text. Both choices reduce legibility and introduce ornament inappropriate for life-safety communication.

rule: Pictograms are static black silhouettes — they must never animate, pulse, or transform under any condition.
do:   Render pictograms as flat black SVG fills inside a black-stroke circle (border-2). Static at all times with no animation, transition, rotation, or movement of any kind. The pictogram is purely informational, not decorative or dynamic.
avoid:Adding a pulsing animation to the skull pictogram, a slow rotation to the biohazard symbol, or any hover-state movement. Motion distracts from the hazard message and violates ANSI Z535.3 pictogram requirements.

### 11d. Variation Bounds
- **Signal word level:** DANGER (red) ⇄ WARNING (orange) ⇄ CAUTION (yellow) ⇄ NOTICE (blue) ⇄ SAFETY INSTRUCTION (green) – changes panel color and reverse text color.
- **Orientation:** Landscape ⇄ Portrait – maintains stacked zones but swaps width/height ratios.
- **Condition:** Pristine ⇄ Weathered – adds corner scuffs, grain, and slight color fade (never affecting legibility).
- **Decoration vs literal:** Safety sign exact ⇄ Homage in UI (maintain color–meaning but embed in button, overlay, badge – still flat, no ornament).

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts.
Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
A single safety sign in its default state: white background (#FFFFFF) fills the sign canvas. A solid-color signal word panel (Danger red #E60000) occupies the top third of the sign at full width, with white reverse text "DANGER" in DIN 1451 font-black all-caps at text-6xl tracking-wide, fully justified. Below it, the message panel: white background with black (#000000) left-aligned body text in DIN 1451 font-normal at text-lg, describing the hazard in sentence case. A black silhouette pictogram inside a black circle (border-2, outer diameter equals message panel height) sits in a left column alongside the message text. A 4px solid black border (#000000) frames the entire sign. No shadows, no gradients, no rounded corners. Matte surface with subtle noise simulation at opacity-5.

### 11e.ii — Maximum Expressiveness
A multi-hazard composite board displaying all five signal-word levels stacked vertically in a single column: DANGER (red #E60000) at top, WARNING (orange #FF6600), CAUTION (yellow #FFD100), NOTICE (blue contested hex), SAFETY INSTRUCTION (green contested hex). Each panel is a full-width solid-color rectangle with white reverse text at text-4xl font-black all-caps, separated by a 1px black ruled line. A pictogram column runs along the left side with five corresponding black-silhouette icons inside black circles (skull, flame, exclamation, information, checkmark). The entire board has a 4px black outer border. On the DANGER panel, the strobe animation activates — background flashes between red and white at 3Hz instant on/off with no fade, steps(1) timing. Weathered variant adds corner scuffs, surface grain via feTurbulence at opacity-8, and faint dust speckles. Matte surface simulation on all panels. All elements flat, solid, rectilinear.

### 11e.iii — Data Context
In a safety dashboard context, each signal-word color maps to a status tier: DANGER (red) = critical alarms, WARNING (orange) = active warnings, CAUTION (yellow) = advisories, NOTICE (blue) = informational notices, SAFETY INSTRUCTION (green) = all clear / nominal. Each status is displayed as a compact Signal Word Badge — a solid-color rectangle at h-12 full-width with white or black reverse text at text-sm font-black uppercase, with a minimum 2px black border. Below each badge, a metric value in DIN 1451 text-2xl font-bold, black (#000000) on white. Pictograms serve as status icon indicators inside black circles positioned to the left of each metric value. The entire dashboard surface is white (#FFFFFF) with black ruled grid lines (1px border-black) separating status zones in a two-column grid. No charts, no gauges, no drop shadows — only flat color-coded badges and numeric values. Strobe animation reserved exclusively for active DANGER-level alerts (red badge flashing between red and white at 3Hz).

### 11f. Sources

Imagery coverage is sparse — only 4 institutional records verified.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** **ANSI Z535** is a series of standards originally published by the **American National Standards Institute** in the late 1990s, with updates continuing through the 2020s. This prescriptive visual language defines safety signs, safety colors, and markings across multiple parts: Z535.1 (colors), Z535.2 (environmental signs), Z535.3 (safety symbols), Z535.4 (product labels), Z535.5 (tags and barricade tapes), and Z535.6 (product safety information). The system is widely adopted in industrial and workplace settings.

**Verified imagery sources.** 4 URLs verified against institutional servers, distributed across:
- OSHA — 2 URL(s)
- Wikipedia — 1 URL(s)
- NEMA — 1 URL(s)

Key references include the **ANSI** official record at https://www.ansi.org/standards/z535 and the **U.S. National Archives** at https://www.archives.gov/research/standards. Imagery coverage is sparse — only 4 institutional records verified.

**Named typefaces.** The typography of this style is attested as:
- Helvetica ( — attestation: conventional) — rendered here in Inter as the closest open substitute
- Helvetica ( — attestation: conventional) — rendered here in Inter as the closest open substitute
- Arial ( — attestation: conventional) — rendered here in Arimo as the closest open substitute

**Honest gaps.** The most significant gap is the exact hex values for all safety colors (contested). The historical evolution of symbol designs is poorly documented. A systematic audit of official ANSI documentation and industry usage would resolve these gaps.
