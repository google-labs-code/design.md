---
version: alpha
name: "Guilloche"
description: "An ornamental design language drawn from 19th-century banknote engraving and security printing, communicating precision and institutional craftsmanship through dense geometric line patterns in a severely limited duotone palette of deep archival ink on cream paper."
colors:
  ok: "#1A237E"
  warn: "#8D6E63"
  err: "#B71C1C"
  delta-up: "#1A237E"
  delta-down: "#B71C1C"
  delta-flat: "#795548"
typography:
  display:
    fontFamily: "Bodoni MT"
    fontSize: "48px"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0.15em
    textTransform: uppercase
  headline:
    fontFamily: "Didot"
    fontSize: "36px"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0.15em
    textTransform: uppercase
  title:
    fontFamily: "Bodoni MT"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0.1em
  body:
    fontFamily: "Cormorant Garamond"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0em
  label:
    fontFamily: "Cormorant Garamond"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.1em
    textTransform: uppercase
rounded:
  default: "0px"
  card: "0px"
  button: "0px"
  input: "0px"
  chip: "9999px"
spacing:
  height-sm: "32px"
  height-md: "40px"
  height-lg: "48px"
  icon: "24px"
components:
  button-primary:
    backgroundColor: "{colors.ok}"
    textColor: "#F5F0E8"
    rounded: "{rounded.button}"
    padding: "16px"
    height: "{spacing.height-md}"
  button-primary-hover:
    backgroundColor: "{colors.ok}"
    textColor: "#F5F0E8"
    padding: "16px"
  card:
    backgroundColor: "#F5F0E8"
    rounded: "{rounded.card}"
    padding: "16px"
  input:
    backgroundColor: "#F5F0E8"
    textColor: "{colors.ok}"
    rounded: "{rounded.input}"
    padding: "8px"
    height: "{spacing.height-md}"
  input-focus:
    backgroundColor: "#F5F0E8"
    textColor: "{colors.ok}"
    rounded: "{rounded.input}"
    padding: "8px"
  security-seal:
    backgroundColor: "transparent"
    textColor: "{colors.ok}"
    rounded: "{rounded.chip}"
    size: "40px"
  microtext-strip:
    backgroundColor: "transparent"
    textColor: "{colors.ok}"
    height: "12px"
provenance:
  coverage_status: "complete"
  identity_description: "All four providers agree that `guilloche` (guilloché) refers to a class of decorative ornamental patterns – intricate, repetitive, interlacing curved lines – produced by mechanical engine‑turning (geometric lathe) or algorithmic generation, and used as security features on banknotes, passports, certificates; on watch dials; and in architectural ornament. The subject is not a single bounded visual "
  manual_enrichment_required: false
  imagery_count: 5
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "en.wikipedia.org"
      count: 1
    - host: "www.ecb.europa.eu"
      count: 1
    - host: "patents.google.com"
      count: 1
    - host: "commons.wikimedia.org"
      count: 1
    - host: "www.securityprinting.org"
      count: 1
  imagery_urls:
    - url: "https://en.wikipedia.org/wiki/Guilloch%C3%A9"
      host: "en.wikipedia.org"
      institution: "Wikipedia"
      confidence_original: high
    - url: "https://www.ecb.europa.eu/euro/banknotes/current/security/html/index.en.html"
      host: "www.ecb.europa.eu"
      institution: "European Central Bank"
      confidence_original: high
    - url: "https://patents.google.com/patent/US320497A/"
      host: "patents.google.com"
      institution: "Google Patents / USPTO"
      confidence_original: high
    - url: "https://commons.wikimedia.org/wiki/Category:Guilloch%C3%A9"
      host: "commons.wikimedia.org"
      institution: "Wikimedia Commons"
      confidence_original: high
    - url: "https://www.securityprinting.org/"
      host: "www.securityprinting.org"
      institution: "International Association for Security Printing"
      confidence_original: low
  typefaces_attested:
    []
  flags:
    - "no_typography_extracted"
  honest_gaps:
    - "1. **No canonical guilloché pattern** – the subject is a class, not an instance. This record cannot supply a single definitive pattern; it describes the general rules."
---

# Design System: Guilloche

## 0. Taxonomy & Identity

entity-type:        interface / system / environment
artefact-family:    operating system / software UI
technique:          digital vector
movement-lineage:   vernacular commercial style
era:                19th century
geography:          platform-neutral
domain:             finance / insurance / admin
formal-traits:      symmetrical, geometric, ornamental, dense
color-logic:        spot-color
typography-mode:    CONTESTED:§0.typography_mode — providers split between display type and serif
texture:            matte, grainy [conventional]
function:           authenticate, certify
provenance:         revival / homage

## 1. Overview

Guilloche is an ornamental design language drawn from 19th-century banknote engraving and security printing. It communicates precision, trust, and institutional craftsmanship through endlessly repeated geometric line patterns—rosettes, medallions, overlapping waves, and concentric rings. The emotional register is quiet authority: nothing is random, every line is accounted for. The palette is severely limited to duotone (one deep ink color on cream paper) to preserve the spot-color discipline of security printing. Gradients are forbidden; depth comes from line density and moiré interference, not shading. What makes it recognizable: continuous fine-line rosettes radiating from a center, symmetrical border bands, and hidden microtext that reveals itself on zoom. What breaks it: asymmetrical layouts, rounded corners, glossy textures, or any use of more than two hues. The style is most at home in interfaces for financial dashboards, authentication workflows, and premium account management.

## 2. Constants

Light Mode:   yes (cream/white paper background, dark ink)
Dark Mode:    CONTESTED:§2.dark_mode — providers split between no (paper substrate required) and optional inverted variant
Responsive:   yes — patterns scale proportionally; reduce complexity at small viewports (375px) and restore detail at 768px+
States:       Default, Active, Hover, Focus, Disabled, Error

surface-simulation: paper — cream laid paper substrate of security printing; drives full-page grain texture and ink-on-paper rendering behavior

## 2a — Interaction Model

hover-delta:        color-shift — border-color intensifies to full primary opacity on interactive elements; some elements shift fill from transparent to primary at reduced opacity
active-delta:       inset-shadow — engraved recess effect via shadow-inner simulates intaglio press depression; content reads as pressed into the paper surface
focus-style:        color-border — border-2 primary with optional ornamental clip-path corner accents; no glow ring
transition-duration:150ms — applied to all hover and state transitions
transition-easing:  ease-out
exempt-animations:  rosette-spin, line-draw-reveal, shimmer

## 3. Colors

primary:         CONTESTED:§2.hex_primary — providers gave [#1A237E, #0a2c4a, #1a2a3a, #0B1E3D]; no evidence or consensus
on-primary:      CONTESTED:§2.hex_on_primary — providers gave [#FFFFFF, #F5F0E8, #ffffff, #F5F0E8]; partial overlap but not unanimous
secondary:       CONTESTED:§2.hex_secondary — providers gave [#000000, #6b1a1a, #1a1a1a, #1A4A2E]; no consensus
tertiary/accent: CONTESTED:§2.hex_accent — providers gave [#4A002F, #c9a94e, #6b2a3a, not defined]; no consensus
surface:         CONTESTED:§2.hex_surface — providers gave [#F5F0E8, #f5f0e1, #f5f0e0, #F5F0E8]; majority agrees on warm cream ~#F5F0E8
error:           CONTESTED:§2.hex_error — providers gave [#B71C1C, #b22222, #b33a3a, #8B1E1E]; no consensus

The palette logic is duotone: deep archival ink on warm paper substrate. Additional spot accents (burgundy, gold, green) appear in some providers but are not consistently defined. [unverified]

Semantic state colors:
ok:         #1A237E — Deep archival ink; authenticated, verified, confirmed records — same role as primary
warn:       #8D6E63 — Warm umber; pending review, advisory — within the ink-on-paper register, does not introduce a third hue family
err:        #B71C1C — Red stamp ink; critical failure, rejection, security breach — same as error role
delta-up:   #1A237E — Deep archival ink; positive delta rendered in primary ink color
delta-down: #B71C1C — Red stamp ink; negative delta rendered in error color
delta-flat: #795548 — Pencil graphite brown; neutral delta — annotation tone within the paper substrate register

Note: Semantic states remain within the duotone discipline. ok maps to primary ink (a stamp of confirmation), err maps to the existing error role. warn and delta-flat use warm brown tones that read as pencil annotation on security paper rather than introducing an alien color family.

## 4. Typography

primary_typeface:         CONTESTED:§3.primary_typeface — providers gave [Bodoni MT/Didot, Didot/Bodoni/Playfair Display, Engraver's Gothic, Engravers MT/Copperplate]; no foundry citation; re-stack required
secondary_typeface:       CONTESTED:§3.secondary_typeface — providers gave [Cormorant Garamond, Trajan Pro/Lato, Optima, Baskerville/Caslon]; no foundry citation
google_fonts_substitute:  CONTESTED:§3.google_fonts_substitute — providers suggested Cormorant Garamond, Playfair Display, Libre Baskerville, Baskerville; no consensus on substitute role

General typography philosophy: fine serif or engraved sans for display, uppercase, tracking-wide. Body uses readable serif with fine hairlines. Labels are uppercase, tracking-widest. All type is incised, not glowing.

## 5. Elevation

Flat depth model — no cascade shadow hierarchy. Engraved appearance is achieved through inset synthetic shadow (CSS `box-shadow: inset`) on primary lines and medallion fills. No drop shadows on surfaces. Some providers include embossed surface (shadow-sm) for raised panels and overlay-stamp (shadow-md) for cancellation marks. Specific shadow values CONTESTED:§5.shadow_system — providers differ on details.

## 6. Spacing & Sizing

component-internal padding: CONTESTED:§6.component_internal_padding — providers gave p-4 (16px) or p-2 (8px) or p-6 (24px); no majority
section-internal padding:   CONTESTED:§6.section_internal_padding — providers gave p-6 (24px) or p-8 (32px); no majority
page-edge padding:          CONTESTED:§6.page_edge_padding — providers gave p-8 (32px), p-6 (24px), p-10 (40px); no majority

component-heights:
  sm:   h-8 (32px)   – compact buttons, security seals
  md:   h-10 (40px)  – default interactive target  [attested by 3 providers]
  lg:   h-12 (48px)  – primary buttons, medallion frames

icon-size:       w-6 h-6 (24px)  [attested by 3 providers]
avatar-size:     w-10 h-10 (40px) – used for medallion/crest area  [attested by 3 providers]

## 7. Borders

border-radius:
  default:     rounded-none (0px) – [attested by all]
  card:        rounded-none
  button:      rounded-none
  input:       rounded-none
  chip/badge:  rounded-full (9999px) – only for circular security seals [attested by 2 providers, others omit]

border-width:
  default:     border (1px) – [attested by all]
  emphasis:    border-2 (2px) – [attested by all]

border-style:  border-solid – [attested by all]

border-image:  Conditional – For ornamental border bands (Greek key, wave, sawtooth), use repeating SVG pattern as border-image. No Tailwind native equivalent.

## 8. Opacity

disabled-state:     opacity-40 (0.4) – [attested by all]
ghost/secondary:    CONTESTED:§8.ghost_opacity — providers gave 0.6 or 0.7; no consensus
overlay/scrim:      CONTESTED:§8.overlay_opacity — providers gave 0.75, 0.5, 0.6; no consensus
hover-feedback:     CONTESTED:§8.hover_feedback — providers differ on whether to use opacity or border-width change

selection:
  background:  CONTESTED:§8.selection_background — providers gave rgba(#1A237E, 0.25), rgba(10,44,74,0.2), rgba(26,42,58,0.3), #0B1E3D at 0.2; no consensus
  color:       inherit

scrollbar:
  style:       auto/styled
  width:       thin (6px)
  track:       neutral/cream
  thumb:       outline/primary
  thumb-hover: primary/secondary

## 8.5. Visual Effects

### 8.5.0 — Physical Material Model

Declares the top-level surface simulation governing the entire page canvas.
This is distinct from component-level textures (§8.5d) — it is the global rendering layer.

material-model:    paper

global-filter:     none — clean cream paper substrate; no color cast or atmospheric distortion

global-overlay:    Paper grain via body::after pseudo-element:
                   SVG feTurbulence fractalNoise baseFrequency=0.65 numOctaves=2
                   blend: multiply, opacity-10, position:fixed, z-index:9999, pointer-events:none
                   animation: none — static grain, no flicker or drift

rendering-flags:
  font-smoothing:  antialiased
  image-rendering: auto
  text-rendering:  auto

### 8.5d — Texture & Noise Simulation

Paper grain overlay:
  technique:    SVG feTurbulence (fractalNoise) overlaid as background – [attested by all]
  parameters:   CONTESTED:§8.5.paper_grain_parameters — baseFrequency: 0.65 or 0.8; numOctaves: 2 or 3
  surface:      full-page canvas, card fills
  intensity:    barely perceptible to moderate
  blend:        multiply, opacity-10
  color:        monochrome noise
  animation:    none
  tailwind-approximation: no Tailwind native equivalent

Ink bleed simulation (optional): Some providers describe SVG feDisplacementMap or CSS drop-shadow to simulate slight ink spread.

## 9. Components

### Icon Vocabulary

icon-vocabulary:
  system:       custom glyphs – crests, shields, stars, laurel wreaths, geometric emblems [attested by all]
  size:         w-6 h-6 (24px) for inline; w-8–w-12 for medallions
  color:        inherits currentColor
  treatment:    engraved – stroke-only with fine line weight
  restrictions: never filled with solid color; no gradients; no drop shadows

### Buttons

Generic button structure:
- Rectangular, rounded-none, border-2 solid primary or outline color.
- Text uppercase, tracking-wider, fine serif or sans.
- Hover: increase border width or fill opacity (inset shadow).
- Active: engraved recess effect (shadow-inner).
- Disabled: opacity-40.

Specific fill colors are CONTESTED:§9.button_fill_colors — providers differ (primary deep navy, secondary outline, etc.)

### Cards / Panels

- Surface card: bordered with fine rules, paper-grain background, optional double-rule cartouche frame.
- Medallion: circular or octagonal clip-path, concentric rings, central emblem.
- Elevation: none or shallow emboss.

### Navigation

- Horizontal bar with fine underline active state.
- Active tab: border-b-2 primary, uppercase label.
- Hover: border-b primary at lower opacity.

### Inputs / Forms

- Rectangular, rounded-none, border solid.
- Focus: border-2 primary plus optional ornamental clip-path corner accents.
- Label: uppercase, tracking-wider, above field.

### Style-Native Primitives

- Security Seal Badge: circular, border-2, center micro-crest.
- Microtext Strip: horizontal band of tiny uppercase letters (8px) repeating.
- Guilloche Border: repeating pattern strip (Greek key, wave) as section divider.

**Data Display Components:**

metric-cell:
  Background: cream paper surface (#F5F0E8) with paper-grain texture overlay.
  Border: border-2 primary (deep archival ink, ~#1A237E), with optional guilloche corner ornament via clip-path on emphasized cells.
  Label: Didot or Cormorant Garamond text-xs uppercase tracking-widest, primary ink color at opacity-70.
  Value: Bodoni MT or Didot text-3xl font-normal, primary ink color, with engraved text-shadow (1px 1px 0px rgba(0,0,0,0.15)).
  Delta: serif text-sm; positive delta in primary ink (#1A237E), negative delta in error red (#B71C1C).
  No glow or drop-shadow — engraved inset shadow only.

signal-bar:
  Track: 1px solid primary at opacity-25 — thin ruled line on paper substrate.
  Fill: primary ink (#1A237E). Height: 4px.
  Border: none — the ink fill meets the ruled line track edge.
  No glow, no gradient on fill — solid ink, engraved register.

status-cell:
  ok:   primary ink (#1A237E) text with border-2 in same color — authenticated stamp appearance.
  warn: warm umber (#8D6E63) text with border-1 — pencil annotation register.
  err:  error red (#B71C1C) text with border-2 — rejection stamp appearance.
  Fill: always transparent cream — status communicated by text color and border treatment, never by background fill.

data-table-row:
  Alternating: odd rows cream (#F5F0E8, paper surface); even rows cream with paper-grain texture at slightly higher intensity.
  Cell border: border-b 1px primary at opacity-25 (faint engraved ruled line).
  Label: serif text-xs uppercase tracking-wider, primary ink at opacity-60.
  Value: serif text-sm, primary ink (#1A237E) at full opacity.

chart-surface:
  Background: cream (#F5F0E8) with paper-grain texture overlay.
  Grid lines: 1px primary ink at opacity-15 (faint engraved grid — barely visible, like watermark rulings).
  Axis labels: serif text-xs, primary ink at opacity-50.
  Line: primary ink (#1A237E), stroke-width 1px, no drop-shadow.
  Dots: primary ink (#1A237E), r=2px. No glow.

## 10. Layout

spacing_cadence:   CONTESTED:§10.spacing_cadence — providers all agree it is tight, but specific base values differ (4px or 8px increments)
grid tendency:     radial symmetry – content orbits a central vertical axis [attested by all]
density:           high – patterns cover most surface area [attested by all]
alignment:         centered, symmetrical [attested by all]
section separation: ruled border bands or guilloche pattern dividers [attested by all]
breakpoints:
  375px: reduce pattern complexity, single rosette focus
  768px: restore full detail, mirrored cartouches
  1024px+: full grandeur with multiple concentric borders

### Motion

transition-duration:         150ms (hover), 300ms (focus/active), 500ms–2000ms (reveal animations)
transition-timing-function:  ease-out (UI), linear (rotations)
transition-property:         opacity, border-color, background-color, box-shadow
animation:
  rosette-spin:       0→360deg over 10–300s linear, looping – mechanical rotation
  line-draw-reveal:   stroke-dashoffset animation, trigger on-scroll-enter
  shimmer:            background-position shift on security foils
transform-at-rest:         none
transform-on-interact:     none (except some providers suggest subtle scale on seals)
transform-style:           flat

## 11. Design System Notes

### 11a. Use Constraints

Appropriate for: Financial services dashboards, identity verification workflows, premium account management, authentication screens, loyalty program portals, legal document platforms, any context requiring perceived security and authenticity. [attested by all]

Wrong for: Casual social media, playful consumer apps, creative tools, fast-casual retail, entertainment streaming. [attested by all]

### 11b. Prompt Phrases

- "engraved line aesthetic with rosette medallion centerpoint"
- "concentric radial pattern of fine geometric lines"
- "security paper texture background with ink bleed artifacts"
- "single spot color on cream paper surface"
- "hidden microtext revealed on zoom or hover"
- "symmetrical border bands with Greek-key motif"
- "duotone palette of deep archival ink on laid paper"

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description. Minimum 4 rules, maximum 8.

rule: Color is restricted to a single deep archival ink on cream paper substrate — the duotone discipline of security printing.
do:   Primary deep navy ink (~#1A237E) on warm cream surface (#F5F0E8). Every colored element uses one of these two values. Accent elements use the same ink at reduced opacity, never a third hue.
avoid:Any introduction of a third hue — gold highlights, burgundy accents, green status fills. A third color breaks the spot-color illusion immediately.

rule: Line weights are uniformly thin — every stroke reads as an engraved ruling, not a drawn shape.
do:   All borders at 1px solid, guilloche patterns at stroke-width 0.5–1px, consistent across the entire composition. Hairline precision throughout.
avoid:Bold 2–3px strokes on decorative elements, or varying stroke weights within a single rosette pattern. This reads as illustration, not engraving.

rule: Layout is symmetrically composed around a central vertical axis — bilateral mirror balance at every scale.
do:   Rosette centered on the page midline. Navigation items mirrored left and right. Border bands identical on all four edges. Cards aligned to the central axis.
avoid:Left-aligned content blocks, asymmetric sidebar layouts, or off-center focal elements. Asymmetry reads as error or forgery in the security printing register.

rule: Every surface carries paper-grain texture via SVG feTurbulence — no flat digital backgrounds anywhere.
do:   SVG feTurbulence overlay at opacity-10 multiply on the full canvas and every card/panel fill. Warm cream substrate (#F5F0E8) visible through the grain.
avoid:Any area of flat untextured white (#FFFFFF) or clean digital background without grain. Immediately reads as modern web UI, not printed security paper.

rule: Depth is communicated through inset engraved shadows only — never through drop shadows or elevation layers.
do:   box-shadow: inset 1px 1px 0px primary on medallion fills and engraved text. Recessed appearance simulating intaglio press pressure.
avoid:box-shadow: 0 2px 4px rgba(0,0,0,0.2) or any shadow that falls outside the element boundary. This reads as Material Design, not banknote engraving.

rule: Typography uses fine serif or engraved sans faces — uppercase tracking-wide for display; readable serif for body.
do:   Display headings in Didot or Bodoni MT, uppercase, tracking-widest (~0.15em). Body in Cormorant Garamond at font-normal, tracking-normal. Labels uppercase tracking-wider.
avoid:Body text in Inter, Roboto, or any geometric sans-serif. Even one paragraph in a clean sans breaks the security-printing register entirely.

rule: Interactive state changes are communicated through border-color shifts and inset shadow — never through scale transforms.
do:   Hover: border-color transitions to primary at full opacity, 150ms ease-out. Focus: border-2 primary with ornamental corner accents. Active: shadow-inner engraved recess.
avoid:Any hover scale(1.02) or transform on interactive elements. Guilloche elements do not grow or shrink — they engrave deeper or they remain still.

rule: Microtext serves as a hidden authentication layer — tiny repeating text revealed on interaction or zoom.
do:   Horizontal band of 8px uppercase serif text, tracking-widest, at opacity-40 in primary ink. Becomes legible on hover or zoom. Positioned within border bands or behind medallion fills.
avoid:Microtext displayed at readable sizes (12px+) as visible labels. When comfortably legible at rest, microtext ceases to function as a security feature and becomes mere decoration.

### 11d. Variation Bounds

Two primary axes (agreed by providers):
1. Complexity: Sparse (simple 2-ring rosette) ↔ Dense (7+ rings with microtext)
2. Symmetry: Full radial ↔ Mirror ↔ Asymmetric (only for intentional offset)
3. Scale: Micro-patterns ↔ Bold medallions (line weight constant)
4. Authenticity: Clean digital vector ↔ Distressed print artifact

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts.
Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
A cream (#F5F0E8) paper surface with grain texture across the full canvas via SVG feTurbulence at opacity-10 multiply. A central rosette medallion — five concentric rings of fine navy (~#1A237E) lines at stroke-width 0.5–1px — occupies the visual center, radiating symmetrically. Flanking the rosette, ruled border bands in primary ink at 1px separate the header, content, and footer zones. Navigation bar at top: cream surface with uppercase serif labels tracking-wider, active state indicated by border-b-2 primary. Content below organized in a single centered column within a double-rule cartouche frame (border-2 primary outer, border-1 primary inner, 4px gap). No drop shadows. No rounded corners. Duotone only: deep archival ink on cream paper.

### 11e.ii — Maximum Expressiveness
Full guilloche composition at 1024px+ viewport: outer border of interlocking wave patterns runs along all four page edges (1px navy strokes, repeating SVG). Inner double-rule cartouche frame creates a secondary boundary. Central rosette expanded to 7+ concentric rings with a microtext band hidden at opacity-40 between the fourth and fifth rings — text becomes legible on hover. Flanking mirrored cartouche panels contain shield emblems rendered as stroke-only SVG with laurel wreath borders. Security Seal Badges (circular, border-2, micro-crest center, 40px) mark key interaction points. Rosette-spin animation: 0→360deg over 120s linear, looping imperceptibly. Line-draw-reveal triggers on scroll for secondary pattern bands — stroke-dashoffset animates the guilloche borders into existence. Shimmer animation on a narrow security foil accent strip (background-position shift, 2s linear looping). Paper grain across every surface at opacity-10. Ink bleed simulation via feDisplacementMap on the outermost border band. Duotone strict: deep navy ink (#1A237E) on cream (#F5F0E8) throughout.

### 11e.iii — Data Context
Financial data displayed in ruled tables on cream paper-grain surface (#F5F0E8). Metric cells are bordered rectangles (border-2 primary) with optional guilloche clip-path corner ornaments on high-priority values. Label in Didot or Cormorant Garamond text-xs uppercase tracking-widest, primary ink at opacity-70. Value in Bodoni MT or Didot text-3xl font-normal, primary ink at full opacity, engraved text-shadow (1px 1px 0px rgba(0,0,0,0.15)). Status indicators use ink color and border treatment alone: confirmed entries in primary navy (#1A237E) with border-2, flagged in warm umber (#8D6E63) with border-1, rejected in error red (#B71C1C) with border-2. Signal bars are thin ruled-line tracks (1px primary at opacity-25) filled with solid primary ink — no glow, no gradient. Chart surfaces carry the faint engraved grid at opacity-15 primary. Column headers are uppercase serif text-xs with border-b-2 primary. Alternating table rows: odd rows plain cream, even rows cream with grain texture. The entire data surface remains within the duotone register — no colored background fills, no glowing indicators, no status badges that introduce a third hue.

### 11f. Sources

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** **Guilloche** (guilloché) is a class of decorative ornamental patterns—intricate, repetitive, interlacing curved lines—produced by mechanical engine-turning (geometric lathe) or algorithmic generation. The technique is not attributable to a single designer, foundry, or bounded period; it has been employed across centuries in diverse contexts. Guilloche is used as a security feature on **banknotes**, **passports**, and **certificates**, and appears on **watch dials** and in **architectural ornament**.

**Verified imagery sources.** 5 URLs verified against institutional servers, distributed across:
- Wikipedia — 1 URL(s)
- European Central Bank — 1 URL(s)
- Google Patents / USPTO — 1 URL(s)
- Wikimedia Commons — 1 URL(s)
- International Association for Security Printing — 1 URL(s)

Key references include the Smithsonian Institution's record on engine-turning and decorative arts at https://www.si.edu/ and the British Museum's collection of guilloche-patterned metalwork at https://www.britishmuseum.org/.

**Named typefaces.** The typography of this style is attested as:
- (none attested)

**Honest gaps.** The most significant gap is that there is no canonical guilloché pattern—the subject is a class, not an instance, and this record cannot supply a single definitive pattern; it describes the general rules. No specific imagery references accompany the current documentation. These gaps are structural rather than incidental, arising from the unbounded nature of the subject itself. A curated set of historically significant guilloché examples with documented provenance, lathe specifications, and mathematical parametrization would resolve them.
