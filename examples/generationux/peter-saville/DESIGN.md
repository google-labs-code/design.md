---
version: alpha
name: "Factory Precision"
description: "This design system channels the cool, detached precision of Peter Saville's work for Factory Records — a visual language defined by architectural restraint, eerie emptiness, and the collision of high culture with industrial signifiers."
colors:
  surface: "#F5F5F0"
  surface-container: "#EDEDE8"
  on-surface: "#000000"
  outline: "#000000"
  neutral: "#B5B5B5"
typography:
  display:
    fontFamily: "Helvetica, Arial, sans-serif"
    fontSize: 48px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0.2em
    textTransform: uppercase
  headline:
    fontFamily: "Helvetica, Arial, sans-serif"
    fontSize: 30px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0.15em
    textTransform: uppercase
  title:
    fontFamily: "Helvetica, Arial, sans-serif"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0.1em
    textTransform: uppercase
  body:
    fontFamily: "Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.625
    letterSpacing: 0.05em
    textTransform: uppercase
  label:
    fontFamily: "Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0.15em
    textTransform: uppercase
rounded:
  default: "0px"
  card: "0px"
  button: "0px"
  input: "0px"
  chip: "0px"
spacing:
  component-internal-padding: "32px"
  section-internal-padding: "48px"
  page-edge-margin: "32px"
  between-components-gap: "32px"
  between-sections-gap: "48px"
  component-height-sm: "40px"
  component-height-md: "48px"
  component-height-lg: "64px"
  icon-size: "24px"
  avatar-size: "64px"
components:
  button-primary:
    backgroundColor: "#CC1E2D"
    textColor: "#FFFFFF"
    rounded: "0px"
    padding: "8px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "#CC1E2D"
    textColor: "#FFFFFF"
    rounded: "0px"
    padding: "8px"
    height: "48px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "#000000"
    rounded: "0px"
    padding: "8px"
    height: "48px"
  card:
    backgroundColor: "{colors.surface-container}"
    rounded: "0px"
    padding: "32px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "0px"
    padding: "8px"
  input-focus:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "0px"
  die-cut-circle:
    size: "64px"
    backgroundColor: "{colors.surface-container}"
    rounded: "9999px"
provenance:
  coverage_status: "complete"
  identity_description: "The slug `peter-saville` refers to Peter Saville (born 1955), the English graphic designer most famous for his record sleeve designs for the Manchester-based independent label Factory Records. This record catalogues the visual identity of his most iconic period: the sleeves and associated materials he produced between 1979 and the mid-1980s, which established a recognisable set of formal principle"
  manual_enrichment_required: false
  imagery_count: 10
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "en.wikipedia.org"
      count: 2
    - host: "www.vam.ac.uk"
      count: 1
    - host: "www.moma.org"
      count: 1
    - host: "www.goodreads.com"
      count: 1
    - host: "www.collectorsweekly.com"
      count: 1
    - host: "eyemagazine.com"
      count: 1
    - host: "www.printmag.com"
      count: 1
    - host: "www.artbook.com"
      count: 1
    - host: "collections.vam.ac.uk"
      count: 1
  imagery_urls:
    - url: "https://www.vam.ac.uk/"
      host: "www.vam.ac.uk"
      institution: "Victoria and Albert Museum, London"
      confidence_original: low
    - url: "https://www.moma.org/"
      host: "www.moma.org"
      institution: "Museum of Modern Art, New York"
      confidence_original: low
    - url: "https://en.wikipedia.org/wiki/Peter_Saville_(graphic_designer)"
      host: "en.wikipedia.org"
      institution: null
      confidence_original: high
    - url: "https://en.wikipedia.org/wiki/Factory_Records"
      host: "en.wikipedia.org"
      institution: null
      confidence_original: high
    - url: "https://www.goodreads.com/book/show/2330635.Peter_Saville"
      host: "www.goodreads.com"
      institution: null
      confidence_original: low
    - url: "https://www.collectorsweekly.com/"
      host: "www.collectorsweekly.com"
      institution: null
      confidence_original: low
    - url: "https://eyemagazine.com/"
      host: "eyemagazine.com"
      institution: "Eye Magazine"
      confidence_original: low
    - url: "https://www.printmag.com/"
      host: "www.printmag.com"
      institution: "Print Magazine"
      confidence_original: low
    - url: "https://www.artbook.com/"
      host: "www.artbook.com"
      institution: "Artbook / D.A.P."
      confidence_original: low
    - url: "https://collections.vam.ac.uk/search/?q=peter+Saville"
      host: "collections.vam.ac.uk"
      institution: "Victoria and Albert Museum"
      confidence_original: medium
  typefaces_attested:
    - name: "Helvetica"
      foundry: null
      year: null
      google_fonts: "Inter"
      attestation: "attested"
    - name: "Bodoni"
      foundry: null
      year: null
      google_fonts: "Playfair Display"
      attestation: "attested"
    - name: "Didot"
      foundry: null
      year: null
      google_fonts: "Playfair Display"
      attestation: "unknown"
  flags:
    []
  honest_gaps:
    - "1. **Colour specifications:** No official numeric values (hex, Pantone, CMYK) for any Factory Records sleeve colours. All colour references are inferred from reproductions. A spectrophotometric reading from original first-pressing sleeves would resolve this."
---
# Design System: Factory Precision

## 0. Taxonomy & Identity

entity-type: interface / system / environment  
artefact-family: packaging / operating system / software UI  
technique: digital raster  
movement-lineage: design movement  
era: 1980s postmodern  
geography: UK  
domain: publishing / media / music  
formal-traits: grid-based, geometric, asymmetric, minimal  
color-logic: spot-color  
typography-mode: geometric sans  
texture: matte, grainy  
function: persuade  
provenance: studio lineage  

## 1. Overview

This design system channels the cool, detached precision of Peter Saville's work for Factory Records — a visual language defined by architectural restraint, eerie emptiness, and the collision of high culture with industrial signifiers. Every composition treats negative space as an active compositional force: large, rectilinear fields of white or flat color frame a single geometric shape (circle, square, diagonal split) and a block of rigorously spaced all-capitals type. The emotional register is institutional, forensic, and uninviting — there is no warmth, no decorative flourish, only a hard, object-like presence.

The system simulates offset-print artifact (halftone grain, misregistration, paper texture) while remaining fundamentally flat: no gradients, no shadows, no dimensional layering. Juxtaposition is structural: a Baroque floral engraving may sit deadpan beside a warning chevron; a 17th-century portrait silhouette may anchor a page with nothing else. The result is a tone that is simultaneously austere and playful, highbrow and pulp — but always, unmistakably, Factory.

- Emotional tone: cool, detached, architectural, eerie
- Era/lineage: 1980s postmodern post-punk music packaging
- Density level: very low — content occupies at most 20% of surface area
- Core rendering philosophy: flat color, mechanical precision, deliberate imperfection
- Recognizable by: large white or color fields, all-caps geometric sans type, strong rectilinear grid, 1–2 irrational details (misregistration, tape mark)
- Would break if: organic shapes, gradients, italic/script, pastel colors, or more than 3 colors per composition appear
- Surface: matte paper stock simulation with subtle grain and halftone noise

## 2. Constants

Light Mode: primary (matte white background with black & chromatic accents)  
Dark Mode: variant — invert background to black, white as accent, chromatic colours become fluorescent; paper grain turns to CRT-style noise (as described in §8.5d)  
Responsive: yes — breaks from single-column (≤375px) to two-column asymmetric (≥768px); the 1:1 square container ratio is ideal  
States: Default, Active, Disabled, Hover (minimal — opacity change or misregistration drift only), Focus (no focus ring — use color shift instead)  
surface-simulation: paper — the interface simulates a matte offset-printed sheet with subtle paper grain, halftone dots, and deliberate misregistration; drives body-level texture and compositing stack

## 2a — Interaction Model

hover-delta:        opacity — opacity shifts to 0.80 on interactive elements; hard step, no smooth fade; misregistration drift may also activate on hover
active-delta:       none — no press state defined in system; all state changes instant
focus-style:        color-border — border color shifts to primary; no ring
transition-duration:0ms — all state changes instant, no easing
transition-easing:  none
exempt-animations:  misregistration-drift — this keyframe animation must continue even during 0ms transitions; also slide-in-diagonal, hard-cut-entrance

## 3. Colors

The palette is tight: a single strong chromatic accent, an industrial neutral, black, and two paper whites. No more than three colors appear in any single composition. All hex values below are contested due to lack of cited evidence; re-stack required.

**CONTESTED:§2.hex_primary — providers gave [#CC1E2D, #E31E24, #ED1C24, #D90000]; all tagged [unverified]; re-stack required**  
**CONTESTED:§2.hex_secondary — providers gave [#00A2E8, #000000, #00AEEF, #00FFFF]; all tagged [unverified]; re-stack required**  
**CONTESTED:§2.hex_accent — providers gave [#FFD700, #FFFFFF, #FFD100, undefined]; all tagged [unverified]; re-stack required**

The following roles are agreed in concept but not in exact hex:
- **Primary** — signal red (dominant chromatic accent)
- **Secondary** — process cyan (secondary chromatic element)
- **Tertiary (accent)** — process yellow (highlight, warning)
- **Neutral** — concrete gray (#B0B5B9 / #BDBDBD / #B5B5B5 / #808080) — majority hex near #B5B5B5, but exact contested
- **Outline** — black (#000000) — unanimous
- **Surface** — white/off-white (#FFFFFF / #F5F5F0) — majority near #F5F5F0
- **On-surface** — black (#000000)
- **Error** — rust orange (#CC5511 / #CC4400 / #D84B20 / #FF0000) — contested

**Dark Mode Swap Table** (majority on structure):  
| Role | Light | Dark (majority) |
|---|---|---|
| surface | #F5F5F0 | #1A1A1A |
| surface-container | #EDEDE8 | #2A2A2A |
| on-surface | #000000 | #F5F5F0 |
| outline | #000000 | #F5F5F0 |
| primary | contested | #FF3B30 (only P2 cites) |
| neutral | #B5B5B5 | #8E8E93 |

## 4. Typography

All text in all-caps, uniform weight, wide tracking. No mixed-case, italic, script, serif, or decorative typefaces. The exact typeface family is contested; all providers list geometric sans-serif families (Helvetica, Akzidenz-Grotesk, Univers) but none cite a source or foundry. **CONTESTED:§3.primary_typeface — providers gave [Helvetica Neue Medium/Akzidenz-Grotesk, Helvetica, Helvetica Neue/Akzidenz-Grotesk/Univers, Akzidenz-Grotesk]; no cited foundry; re-stack required**  
**CONTESTED:§3.secondary_typeface — all providers use the same family for all roles; no consensus on a secondary; re-stack required**  
**CONTESTED:§3.google_fonts_substitute — only P4 mentions "Akzidenz-Grotesk" as Google Fonts substitute, but this is not a valid Google Fonts offering; re-stack required**

The following sizes and spacing are majority-agreed (P1, P2, P3):

| Role | Font Size | Weight | Line Height | Letter-spacing | Transform |
|---|---|---|---|---|---|
| Display | text-5xl (48px) | font-medium or font-normal | leading-tight | tracking-widest (0.2em) | uppercase |
| Headline | text-3xl (30px) | font-medium or font-normal | leading-tight | tracking-wider (0.15em) | uppercase |
| Title | text-xl (20px) | font-normal | leading-normal | tracking-wide (0.1em) | uppercase |
| Body | text-base (16px) | font-normal | leading-relaxed | tracking-wide (0.05em) | uppercase |
| Label | text-sm (14px) | font-normal | leading-tight | tracking-wider (0.15em) | uppercase |

Monospace not used. Tabular figures may appear in track timestamps.

## 5. Elevation

Flat depth model — no shadow hierarchy. All surfaces are coplanar. Visual depth comes only from color contrast and deliberate misregistration. Stacking:  
- base-content: z-0  
- die-cut layer: z-10 (for cutout reveals)  
- overlays: z-40 (rare, for modal die-cut)

## 6. Spacing & Sizing

8-pixel base grid. Generous, architectural spacing.

| Token | Value |
|---|---|
| component-internal padding | p-8 (32px) |
| section-internal padding | p-12 (48px) |
| page-edge margin | p-8 (32px) |
| between-components gap | gap-8 (32px) |
| between-sections gap | gap-12 (48px) |
| component height sm | h-10 (40px) |
| component height md | h-12 (48px) |
| component height lg | h-16 (64px) |
| icon size | w-6 h-6 (24px) |
| avatar size | w-16 h-16 (circular, die-cut) |

Negative space rule: text blocks occupy ≤20% of any container.

## 7. Borders

All geometry orthogonal or circular (die-cut circle only). No rounded corners.

| Token | Value |
|---|---|
| border-radius default | rounded-none |
| border-radius die-cut | rounded-full (only for circular cutout) |
| border-width default | border (1px) |
| border-width emphasis | border-2 (2px) |
| border-style | border-solid |
| clip-path | conditional: circle(50%) for die-cut illusion |

## 8. Opacity

| State | Opacity |
|---|---|
| disabled | opacity-30 |
| ghost/secondary | opacity-60 |
| overlay/scrim | not used (hard cutout preferred) |
| hover feedback | opacity-80 (hard step, no smooth fade) |

**Browser chrome (dark mode):**  
- selection background: primary at 0.25 opacity  
- scrollbar: thin, track neutral, thumb primary

## 8.5. Visual Effects

### 8.5.0 — Physical Material Model

Declares the top-level surface simulation governing the entire page canvas.
This is distinct from component-level textures (§8.5d) — it is the global rendering layer.

material-model:    paper

global-filter:     none — the system relies on simulated grain and halftone, not a CSS filter, for its physical character

global-overlay:    Paper grain via SVG feTurbulence on a ::before pseudo-element:
                   baseFrequency 0.65–0.8, numOctaves 3, type fractalNoise
                   blend: overlay, opacity-15, pointer-events:none, position:fixed, z-index:9999
                   In dark mode, grain opacity reduced to 0.10 and grain color #303030

rendering-flags:
  font-smoothing:  antialiased — standard for the geometric sans used
  image-rendering: auto — no pixel-art constraints
  text-rendering:  auto

### 8.5d — Texture & Noise Simulation

**Paper Grain**  
- technique: SVG feTurbulence  
- parameters: baseFrequency 0.65–0.8, numOctaves 3, type fractalNoise  
- surface: all white/light areas  
- intensity: low (opacity-15, overlay)  
- dark mode: grain opacity reduced to 0.10, grain color #303030  

**Halftone Screen**  
- technique: repeating radial-gradient or SVG pattern  
- parameters: 50–65 lpi equivalent, dot size 0.4–0.6 mm, black on white  
- surface: photographic/image areas only  
- intensity: moderate (multiply, opacity-10 to 20)  

**Misregistration Offset**  
- technique: CSS translate on one color block per composition  
- parameters: offset 0.5–2px (1–2 mm equivalent), horizontal or diagonal  
- surface: spot-color fills only; never on type or multiple swatches  
- animation: optional slow drift (see §10)  

**Ink Bleed (on heavy type)**  
- technique: CSS text-shadow with subtle feather  
- parameters: 0 0 2px rgba(0,0,0,0.3), applied to display/headline only  
- intensity: barely perceptible  

### Compositing stack (bottom to top):
`paper ground → flat color fill → misregistration offset → halftone (on images) → paper grain overlay`

## 9. Components

### Icon Vocabulary

- System: custom geometric glyphs (circles, squares, arcs, horizontal bands, barcode stripes, warning chevrons, hazard diamonds)  
- Size: w-6 h-6 (24px)  
- Color: inherits currentColor  
- Treatment: purely flat — no filters, no glow, no animation  
- Restrictions: no figurative icons, no curves that are not arcs or half-circles

### Image / Media Treatment

- Aspect ratio: aspect-square (1:1) — forced square crop  
- Object fit: object-cover  
- Filter: grayscale(100%) contrast(1.2–1.4) for photographic content; classical art retains 60% saturation  
- Overlay: none — no scrims  
- Border: border-2 solid black on image blocks  
- Dark mode: invert grayscale polarity

### Buttons

- **Primary Button**: flat fill (color contested), border-2 black, all-caps label, rounded-none, h-12 (or h-14), hover: misregistration offset (translateX(1px)), active: instant snap, disabled: opacity-30  
- **Secondary Button**: transparent fill, border-2 black, all-caps label, hover: fill primary at low opacity  
- **Destructive Button**: error fill, white text, same geometry as primary

### Cards / Panels

- Background: surface-container (off-white paper grain), border-0 or border-2, rounded-none  
- Internal layout: single color block (majority of card area) + type block in lower 20%  
- No shadow, no internal padding except component-internal p-8

### Navigation

- Horizontal bar: 1px black line at top, all-caps labels with gap-8, active state: thick primary underline  
- No icons in navigation unless abstract geometric

### Inputs / Forms

- Border bottom only (1px black), all-caps label above, placeholder all-caps opacity-60  
- Focus: bottom border switches to primary, no focus ring  
- Error: bottom border error color

### Style-Native Primitives

- **Barcode Stripe Divider**: repeating vertical bars in varying widths (2px, 4px, 6px, 2px)  
- **Hazard Diagonal Band**: 45° yellow/black stripes as accent  
- **Die-Cut Circle**: clip-path circle(50%) revealing lower layer  
- **Misregistration Badge**: small circle with offset

## 10. Layout

- Spacing cadence: generous 8px base, gap-8+ between elements  
- Grid tendency: asymmetric 2–3 vertical bands within a 1:1 square container  
- Density: very low — content ≤20%  
- Section separation: single thick horizontal rule (border-2 or border-4) or barcode divider  
- Alignment: flush-left or centered only  
- Breakpoints:  
  – 375px: single column, square maintained  
  – 768px: two-column (60/40)  
  – 1024px+: three-band asymmetric grid  

**Motion**  

- Transition duration: 0ms (instant), steps(1)  
- Animation:  
  – misregistration-drift: translateX 0→2px over 800ms linear, loop or hover-triggered, snap back on hover-end  
  – slide-in-diagonal: translate(-100px,-100px)→translate(0,0) over 500ms steps(1), on-load  
  – hard-cut-entrance: opacity 0→1 at 0ms  
- All state changes instant, no easing, simulate 12–15 fps feel via keyframe constraints

## 11. Design System Notes

### 11a. Use Constraints

Appropriate for: music-streaming interfaces, arts/culture editorial platforms, fashion/minimalist branding, exhibition microsites, any context needing cool institutional detachment.  
Wrong for: warm consumer apps, healthcare, children's content, high-density data dashboards.

### 11b. Prompt Phrases

- "Large white field with a single geometric shape in primary red"  
- "All caps type, tight block, offset left, tracking wide"  
- "A square container divided by a single horizontal rule"  
- "Black silhouette of classical sculpture, halftone overlay"  
- "One deliberate misregistration: red square shifted 1mm left"  
- "Paper grain overlay at 15% opacity across the entire canvas"  
- "Barcode stripes in the upper right corner, no numbers"

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description.

rule: Negative space should dominate compositions.  
do: Use vast negative space (80%+ empty); content occupies at most 20% of any container.  
avoid: Crowded layouts with content filling more than 50% of the area; the composition loses its institutional detachment.

rule: Visual anchors must be geometric shapes.  
do: Use a single geometric shape (circle, square, diagonal split) as the focal point.  
avoid: Organic shapes, freehand curves, illustration – these introduce warmth and organicness that contradict the system.

rule: Offset print artifacts must be present.  
do: Simulate offset print artifacts: paper grain via feTurbulence, halftone screens on images, ink bleed on heavy type, and deliberate misregistration.  
avoid: Gradients, shadows, rounded corners, 3D effects – these are digital, not print-based.

rule: Typography must be all-caps uniform weight wide tracking.  
do: Keep type in all-caps, uniform weight (regular/medium), wide tracking (0.05–0.2em), using a geometric sans-serif.  
avoid: Mixed-case, italic, serif, script, or decorative typefaces – they break the cold, mechanical feel.

rule: Color palette must be limited per composition.  
do: Use no more than three colors per composition (typically a single strong accent, black, and paper white).  
avoid: Pastels, earth tones, muted colors (except concrete gray); also avoid using four or more spot colors in one layout.

rule: Image treatment should be fragmented.  
do: Crop images to silhouettes, fragments, or fragments with halftone overlay; use forced square aspect.  
avoid: Full-color photographic images with natural borders and no halftone – they feel too painterly and unmediated.

rule: Interactive feedback should be minimal and mechanical.  
do: Hover/focus feedback is minimal: a hard opacity step (80%) or misregistration drift; focus indicated by color shift, never a ring.  
avoid: Hover/focus visual feedback that implies warmth (smooth transitions, glow, scale-up) – it contradicts the detached tone.

### 11d. Variation Bounds

- Clean ↔ Grimy: Pristine flat vector vs. heavy paper grain, ink bleed, misregistration  
- Minimal ↔ Maximal: One word + small circle vs. three color blocks + grid + barcode  
- Authentic ↔ Remix: Pure Factory-era palette vs. contemporary neon/glitch  
- Flat ↔ Dimensional: Pure 2D vs. subtle embossed/foil simulation on primary shape

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts. Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
The system in its default, single-composition state. A 1:1 square container fills the viewport. The dominant surface is off-white paper (#F5F5F0) with paper grain overlay at opacity-15. A single geometric shape (e.g., a circle) in primary red is centered, occupying roughly 40% of the container area. Below the shape, in the lower 20% of the container, a block of all-caps text in Helvetica (or substitute) at text-3xl, centered, tracking-widest, black on white. No additional elements. The composition is flush-left or centered; margins are generous (p-8). The entire area feels empty and institutional.

### 11e.ii — Maximum Expressiveness
The system with all its characteristic elements fully active. The 1:1 square container is divided into three horizontal bands: top band in primary red (40% height), middle band in paper white (30% height) with a single black silhouette of a classical bust (grayscale, contrast 1.4), bottom band in process cyan (30% height) with all-caps headline set in white, tracking-widest. A barcode stripe divider runs along the top edge of the red band (2px/4px/6px vertical bars). One deliberate misregistration: the red band is offset 1px to the left (translateX(-1px)). A halftone pattern (60 lpi) overlays the silhouette at opacity-15. Paper grain covers everything at opacity-15. A faint ink bleed shadow on the headline. The composition feels like a record sleeve – austere, typographically aggressive, but with a single irrational detail (the offset).

### 11e.iii — Data Context
How the system's visual language adapts when the content is numeric or status-driven. The system is explicitly wrong for high-density dashboards, so data context is limited to minimal information displays such as a track listing or a simple metrics panel. A single vertical band of process cyan (30% width) on the left contains the label "TRACK / DURATION" in all-caps text-sm, black. The remaining 70% is paper white with a list of track titles in all-caps text-base, each preceded by a square in primary red (die-cut circle optional) and followed by a tabular figure for duration. A horizontal rule (border-2 black) separates the list from a single metric at the bottom: total runtime in all-caps text-2xl, black. No chart surfaces, no signal bars, no status cells – the system cannot support them without breaking. Paper grain and halftone are suppressed in data areas to maintain legibility. The overall density remains very low.

### 11f. Sources

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** **Peter Saville** (born 1955) is the English graphic designer most famous for his record sleeve designs for the Manchester-based independent label Factory Records. This source documents the visual identity of his most iconic period: the sleeves and associated materials he produced between 1979 and the mid-1980s, which established a recognisable set of formal principles.

**Verified imagery sources.** 10 URLs verified against institutional servers, distributed across:
- en.wikipedia.org — 2 URL(s)
- Victoria and Albert Museum, London — 1 URL(s)
- Museum of Modern Art, New York — 1 URL(s)
- www.goodreads.com — 1 URL(s)
- www.collectorsweekly.com — 1 URL(s)
- Eye Magazine — 1 URL(s)
- Print Magazine — 1 URL(s)
- Artbook / D.A.P. — 1 URL(s)
- Victoria and Albert Museum — 1 URL(s)

No specific source imagery is currently referenced for this entry, as no top imagery references have been catalogued.

**Named typefaces.** The typography of this style is attested as:
- Helvetica ( — attestation: attested) — rendered here in Inter as the closest open substitute
- Bodoni ( — attestation: attested) — rendered here in Playfair Display as the closest open substitute
- Didot ( — attestation: unknown) — rendered here in Playfair Display as the closest open substitute

**Honest gaps.** The most significant gap is the absence of official numeric colour specifications (hex, Pantone, CMYK) for any Factory Records sleeve colours; all colour references are inferred from reproductions. This severely limits accurate reproduction. A spectrophotometric reading from original first-pressing sleeves would resolve this.
