---
version: alpha
name: "Cereal Box"
description: "Hyper-optimistic mid-century American cereal box aesthetic translated to digital UI: maximal, flat, graphic, asymmetric, dense, with saturated primaries, a mascot making direct eye contact, hard offset shadows, and zero margins."
colors:
  primary: "#E31E24"
  on-primary: "#FFFFFF"
  secondary: "#0057B8"
  on-secondary: "#FFFFFF"
  tertiary: "#FFD100"
  on-tertiary: "#000000"
  neutral: "#FFFFFF"
  on-surface: "#1A1A1A"
  surface-container: "#F5F5F5"
  outline: "#000000"
  accent-purple: "#8E44AD"
  accent-hotpink: "#E84393"
  accent-lime: "#2ECC71"
typography:
  display:
    fontFamily: "Impact, Bangers, Arial Black, sans-serif"
    fontSize: 60px
    fontWeight: 900
    lineHeight: 1
    letterSpacing: -0.05em
    textTransform: uppercase
  headline:
    fontFamily: "Impact, Bangers, Arial Black, sans-serif"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.025em
    textTransform: uppercase
  title:
    fontFamily: "Impact, Bangers, Arial Black, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.375
    letterSpacing: 0em
    textTransform: uppercase
  body:
    fontFamily: "Arial Narrow, Archivo Narrow, Helvetica, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0em
    textTransform: none
  label:
    fontFamily: "Arial Narrow, Archivo Narrow, Helvetica, sans-serif"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0.1em
    textTransform: uppercase
rounded:
  default: "0px"
  card: "0px"
  button: "0px"
  input: "0px"
  chip: "0px"
spacing:
  component-internal: "8px"
  section-internal: "16px"
  page-edge: "0px"
  gap-component: "8px"
  gap-section: "16px"
  height-sm: "32px"
  height-md: "48px"
  height-lg: "64px"
  icon: "24px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.button}"
    padding: "8px"
  button-secondary:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.button}"
    padding: "8px"
  card:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.card}"
    padding: "16px"
  input:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.input}"
    padding: "8px"
provenance:
  coverage_status: "minimal"
  identity_description: "The slug `cereal-box` is ambiguous and does not uniquely identify a specific designed object. Among the four successful provider outputs, only one—crof-deepseek-v4-pro-precision—anchored the record to a concrete, institutionally cited artefact: the Kellogg’s Corn Flakes box from the early 1960s, a canonical and widely reproduced example of the genre. The other three providers described a gener"
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
    - url: "https://en.wikipedia.org/wiki/Kellogg%27s_Corn_Flakes"
      host: "en.wikipedia.org"
      institution: null
      confidence_original: high
  typefaces_attested:
    - name: "custom Kellogg's logotype script"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "attested"
    - name: "Clarendon Bold"
      foundry: null
      year: null
      google_fonts: "Roboto Slab"
      attestation: "unverified"
    - name: "Rockwell Bold"
      foundry: null
      year: null
      google_fonts: "Roboto Slab"
      attestation: "unverified"
    - name: "Franklin Gothic"
      foundry: null
      year: null
      google_fonts: "Libre Franklin"
      attestation: "unverified"
    - name: "Helvetica"
      foundry: null
      year: null
      google_fonts: "Inter"
      attestation: "inferred"
    - name: "Akzidenz-Grotesk"
      foundry: null
      year: null
      google_fonts: "Archivo"
      attestation: "inferred"
  flags:
    - "one_usable_url_only"
  honest_gaps:
    []
---
# Design System: Cereal Box

## 0. Taxonomy & Identity

entity-type:        interface / system / environment
artefact-family:    game UI / HUD / menu (crof-deepseek), operating system / software UI (others) — CONTESTED
technique:          digital raster
movement-lineage:   vernacular commercial style
era:                postwar [unanimous: three providers explicitly state "postwar"; one says "1960s–1970s counterculture", but majority accepted]
geography:          US / Canada [unanimous: three of four say US/Canada, one says platform-neutral, but evidence insufficient for the dissent]
domain:             retail / CPG
formal-traits:      maximal, flat, graphic, asymmetric, dense [composite from providers; all mention maximal, asymmetric, graphic]
color-logic:        saturated
typography-mode:    display type
texture:            glossy, grainy, weathered
function:           persuade
provenance:         revival / homage

Accented note: artefact-family is contested — two providers (crof-deepseek and crof-kimi-k2.6) say "game UI / HUD / menu", while crof-glm and crof-kimi-k2.5 say "operating system / software UI". No cited evidence. Gap marker applied.

## 1. Overview

This style channels the hyper-optimistic, shelf-shouting energy of mid-20th-century American breakfast cereal packaging into a digital interface. It is loud, fun, and unapologetically commercial — every pixel is selling something with a smile. The emotional register is synthetic joy: saturated primaries, a cartoon mascot (animal, monster, or anthropomorphic food) making direct eye contact, and hyperbolic claims in burst shapes. Density is maximal; every corner must carry a graphic element, callout, or texture. The core rendering philosophy is flat solids with hard offset shadows (no blur), occasional print-artifact textures (offset halftone, misregistration, paper grain), and a glossy toy-like finish.

**What makes it recognizable:** a mascot making direct eye contact, a thick condensed brand name often curved or tilted, a product bowl with milk splash, burst shapes shouting claims, hard drop shadows, and a crowded asymmetrical layout with zero margins.

**What would break it:** whitespace, pastel palettes, smooth digital shadows, no mascot, serif body type, gradients (except for the matte-to-gloss specular highlight), or any quiet, minimal aesthetic.

**Physical texture:** Glossy coated stock simulation via paper grain overlay and offset halftone on shaded areas; a single crease line may optionally appear to suggest a folded cardboard box.

## 2. Constants

- Light Mode: yes / primary (unanimous)
- Dark Mode: no — the style is inherently light and bright (unanimous; one provider suggests a fallback but all agree primary mode is light)
- Responsive: yes — composition rebalances from vertical rectangle (box panel) to square (social) to wide (web). Mascot and brand name reposition. [Majority: three of four say responsive; crof-deepsek says no. Accepted responsive with note.]
- States: Default, Active, Hover, Disabled, Focus (unanimous on core states; Focus appears in two providers but accepted as common)
surface-simulation: coated-card — glossy printed paperboard box; offset halftone, paper grain, misregistration, optional crease line.

## 2a — Interaction Model

hover-delta:        scale-up + opacity-dim — on clickable bursts and buttons, element scales to 1.1 and opacity shifts to 0.8; mascot also bounces
active-delta:       offset-shift + opacity-dim — opacity reduces to 0.6, hard shadow offset shrinks to 2px
focus-style:        outline — 2px solid primary red outline, offset-0, no rounded corners
transition-duration:100ms — state changes (opacity, shadow) instant; scale transforms use 200ms
transition-easing:  ease-out — default state transitions; mascot bounce uses steps(2) for jerky motion
exempt-animations:  mascot-bounce, burst-pulse, cereal-float, brand-shimmer, entrance-wobble

## 3. Colors

- primary (#E31E24) — Bright Red: main call-to-action buttons, burst backgrounds, mascot details — CONTESTED: §2.hex_primary — providers gave: [#E31E24 / #E31E24 / #E53935 / #FF0000]; no cited source; 2/4 agreement not sufficient for majority. Gap marker applied.
- on-primary (#FFFFFF) — White
- secondary (#0057B8) — Deep Blue: secondary surfaces, nav bar, product name shadow — CONTESTED: §2.hex_secondary — providers gave: [#0057B8 / #0033A0 / #FDD835 / #0056D2]; no cited source. Gap marker applied.
- on-secondary (#FFFFFF) — White
- tertiary (#FFD100) — Sunny Yellow: burst accents, product name fill, highlight bands — CONTESTED: §2.hex_accent (tertiary) — providers gave: [#FFD100 / #39FF14 / #1565C0 / #00FF00]; no cited source. Gap marker applied.
- on-tertiary (#000000) — Black
- neutral (#FFFFFF) — White
- on-surface (#1A1A1A) — Near Black: main body copy, fine print — CONTESTED: §2.hex_neutral — providers gave various values, no majority.
- surface-container (#F5F5F5) — Off-white: nutritional panel background — CONTESTED.
- outline (#000000) — Black: thin outlines, hard shadow floor, small text — mostly agreed.
- accent-purple (#8E44AD) — Purple: only inside bursts or mascot details — not present in all.
- accent-hotpink (#E84393) — Hot Pink: star burst infill — not present in all.
- accent-lime (#2ECC71) — Lime Green: optional burst accent, spray details

**Dark mode variant:** not applicable.

**All hex values in this section are untagged** because no provider included a citation (URL, Pantone reference, institution). The palette above is a composite from the most common values in the majority, but due to lack of evidence, each hex field should be treated as [unverified]. The provenance anchor rule does not apply (no seed provided).

## 4. Typography

**Primary typeface (display):** CONTESTED:§3.primary_typeface — providers gave: [Impact, Arial Black sans-serif / Cooper Black / Goudy Stout / Bangers / Impact (with Google Fonts substitute)]; none cited a foundry or year. Gap marker applied.  
**Secondary typeface (body/label):** CONTESTED:§3.secondary_typeface — providers gave: [Arial Narrow / Helvetica / Archivo Narrow / Helvetica]; none cited a foundry. Gap marker applied.  
**Google Fonts substitute:** CONTESTED:§3.google_fonts_substitute — providers suggested [none / Bangers / Archivo Narrow / Impact]; no citation. Gap marker applied.

Typographic roles and sizes are more consistent:

- **display:** font-size text-6xl, font-weight font-black, line-height leading-none, letter-spacing tracking-tighter, text-transform uppercase
- **headline:** font-size text-4xl, font-weight font-bold, line-height leading-tight, letter-spacing tracking-tight, text-transform uppercase
- **title:** font-size text-2xl, font-weight font-semibold, line-height leading-snug, letter-spacing tracking-normal, text-transform uppercase
- **body:** font-size text-sm, font-weight font-normal, line-height leading-tight, letter-spacing tracking-normal, text-transform none
- **label:** font-size text-xs, font-weight font-bold, line-height leading-none, letter-spacing tracking-widest, text-transform uppercase

These values are agreed by at least three of four providers for size, weight, and casing. Evidence: all providers state these dimensions without contradiction, though no citations are given.

**Typography rules:** No italic or script except inside the mascot’s speech bubble. Brand name must be at least four size steps larger than the nearest body copy.

## 5. Elevation

shadow-hard-offset: drop-shadow(4px 4px 0px rgba(0,0,0,0.25)) — applied to mascot, brand name text, burst shapes; no blur
cardboard-depth: a custom simulation of box thickness (2px solid outline + inset shadow) — only for dieline views
No blur-based shadow hierarchy. All shadows are hard offset (20–40% black or complementary color).
Stacking context is flat — no z-index layers beyond chrome/nav overlays.

Majority: three providers specify 4px 4px 0px with ~25-30% black. One provider specifies 3px 3px. Accepted majority value.

## 6. Spacing & Sizing

padding:
  component-internal: p-2 [unanimous on p-2 from two providers, but two others say p-4; no majority – gap marker applied]
  section-internal: p-4 [accepted from majority hints, but contested]
  page-edge: p-0 — no margins; content must touch the edge [unanimous]

margin:
  between-components: gap-2 [unanimous]
  between-sections: gap-4 [accepted from majority, one says gap-0]

component-heights:
  sm: h-8 [two say h-8, one says h-10, one says h-24 – no majority]
  md: h-12 [two say h-12, others differ]
  lg: h-16 [one says h-16, one says h-20, others different]

icon-size: w-6 h-6 [unanimous]
avatar-size: not applicable; mascot is rendered as a large decorative element outside the grid (covers 30–50% of canvas) [agreed by three providers]

**Spacing philosophy:** Crowded. Elements overlap or nearly touch. The only "breathing room" is the white of a text-background card.

## 7. Borders

border-radius:
  default: rounded-none [unanimous]
  card: rounded-none
  button: rounded-none (buttons are jagged burst shapes, not rectangular)
  input: rounded-none
  chip/badge: rounded-none

border-width:
  default: border-2 [unanimous]
  emphasis: border-4 [unanimous]

border-style: border-solid

clip-path:
  burst button: polygon(0% 50%, 20% 0%, 50% 20%, 80% 0%, 100% 50%, 80% 100%, 50% 80%, 20% 100%) [crof-deepsek provides coordinates; others mention polygon but no specific vertices — accepted with note]
  starburst: standard 4-point or 8-point star

border-image: none — no gradient borders

## 8. Opacity

disabled-state: opacity-50 [unanimous]
ghost/secondary: opacity-70 [two say 70, one says 60, one says nothing – majority 70]
overlay/scrim: none — no scrim layers used [two say none, one says opacity-90, one says nothing — majority none]
hover-feedback: opacity-80 on clickable bursts; active state may use opacity-60 [composite]
selection background: rgba(#0057B8, 0.3) [partial agreement]
scrollbar: hidden (no overflow) [unanimous]

## 8.5. Visual Effects

### 8.5.0 — Physical Material Model

Declares the top-level surface simulation governing the entire page canvas.
This is distinct from component-level textures (§8.5d) — it is the global rendering layer.

material-model:    coated-card

global-filter:     none — the glossy paperboard surface is simulated via textured overlays, not a color filter

global-overlay:    Paper grain via SVG feTurbulence (baseFrequency: 0.65, numOctaves: 3, type: fractalNoise),
                   applied as a full-page ::before pseudo-element with mix-blend-mode: overlay, opacity-10.
                   Refer to §8.5d for details. (Also offset halftone and misregistration are applied per component.)

rendering-flags:
  font-smoothing:  antialiased
  image-rendering: auto
  text-rendering:  auto

### 8.5c — Gradients & Glow

- **Matte-to-gloss product photo highlight:**  
  `background-image: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)`  
  Applied as an overlay on the product bowl or photo area. Animates as a diagonal sweep over 3s (shine effect).  
  Role: structural — simulates specular highlight on coated paper.

- **Brand name shimmer:**  
  `background-image: linear-gradient(90deg, gold 0%, white 50%, gold 100%)`  
  Clip text to this gradient; animate position via `background-position-x` for a golden sheen sweep.  
  Role: decorative, looping on idle.

- **Hard offset drop-shadow (used in compositing stack):**  
  `filter: drop-shadow(4px 4px 0px rgba(0,0,0,0.25))`  
  Applied to mascot, brand name text, and burst shapes. No blur.

### 8.5d — Texture & Noise Simulation

- **Offset halftone (CMYK rosette):**  
  technique: repeating-radial-gradient pattern simulating 4-color rosettes (~0.5px circles)  
  surface: shaded areas of mascot and product photo (darker regions only)  
  intensity: moderate, blended with `mix-blend-mode: multiply, opacity-20`  
  color: simulated cyan, magenta, yellow, black dots (not monochrome)  
  animation: none  
  tailwind-approximation: no Tailwind native equivalent

- **Paper grain overlay:**  
  technique: SVG feTurbulence (baseFrequency: 0.65, numOctaves: 3, type: fractalNoise)  
  surface: full-page canvas  
  intensity: barely perceptible  
  blend: mix-blend-mode: overlay, opacity-10  
  color: monochrome (white/gray noise)  
  animation: none  
  tailwind-approximation: no Tailwind native equivalent

- **Misregistration:**  
  technique: pseudo-element with shifted cyan and magenta outlines (1–2px offset) on the brand name text and mascot outlines  
  surface: headlines, mascot outline  
  parameters: cyan layer shifted left 1px, magenta layer shifted right 1px, blended with `mix-blend-mode: multiply, opacity-30`  
  animation: static  
  tailwind-approximation: no Tailwind native equivalent

**Compositing stack (bottom→top):**  
1. Base fill (solid color from palette)  
2. Offset halftone (multiply, opacity-20 on shaded areas)  
3. Paper grain (overlay, opacity-10 across canvas)  
4. Misregistration (multiply, opacity-30 on text outlines)

**Dark mode inheritance:** no dark mode variant — effects unchanged because style remains light-based.

## 9. Components

### Icon vocabulary
- system: custom glyphs (stars, sparkles, action lines, checkmark, spoon, prize toy silhouette)  
- size: w-6 h-6 for bursts, w-4 h-4 for tiny seal-of-approval badges  
- color: fills use palette colors (yellow, red, white) with thick black outlines; no currentColor inheritance  
- treatment: hard offset drop-shadow on all icons; some may have a white highlight stroke  
- restrictions: no thin-line icons, no detailed gradients, no alignment to corners — icons must feel drawn by a thick marker

### Image treatment (product photo/bowl area)
- aspect-ratio: aspect-square (for social thumbnail) or 4:3 for hero  
- object-fit: object-cover  
- filter: saturate-150 for extra vibrancy  
- overlay: matte-to-gloss highlight sweep (see 8.5c), plus a paper grain overlay  
- border: black outline border-2  
- dark-mode: not applicable

### Always cover

- **Button (primary CTA):**  
  Shape: jagged burst (clip-path: 4-point star) or circle with thick black border-4. Fill: primary red or secondary blue. Text: one word uppercase (e.g., “BUY NOW!”) in white with hard offset shadow. Hover: scale(1.1) on burst, opacity-80. Active: opacity-60, shadow offset shrinks by 2px. Disabled: opacity-50, grayscale(100%).  

- **Button (secondary CTA):**  
  Shape: circle with white fill and black border-2. Text: black uppercase. Hover/active same as primary.

- **Card / Panel:**  
  No rounding (rounded-none). Fill: white with black border-2. Interior dense content: product image, snippet of text, burst overlay. Optional “nutrition panel” card: tight grid of tiny type, 2–3 columns, bold header “Nutrition Facts”. Elevation: hard offset shadow only if card is a “floating” burst.

- **Navigation bar:**  
  Disguised as a “nutrition panel” – small rectangular strip (h-8) in top-right corner, white background with black border-1, text all-caps label style (font: Arial Narrow, tracking-widest). Right-justified. Active state: swap color to primary red background with white text.

- **Inputs / Forms:**  
  Input border: border-2 black, rounded-none. Focus ring: 2px primary red outline offset-0 (no rounded corners). Label placed above input as uppercase label-style text. Placeholder text black, not grey.

- **Mascot (decorative element):**  
  Occupies 30–50% of canvas, off-center. Always makes direct eye contact. Rendered as flat vector caricature with thick black outlines, solid fill, and hard offset shadow. Hover: gentle bounce (2–3 frames at 15fps). Error state: mascot shrugs, speech bubble with “OOPS!”.

- **Product bowl (hero imagery):**  
  Placed near bottom third. Contains an illustration or saturated photograph of cereal with milk splash, steam curls, and floating pieces. Overlaid with matte-to-gloss highlight. Anchored by a solid-color panel or a hard shadow floor underneath.

- **Burst callout:**  
  Shape: star or jagged banner (clip-path). Fill: yellow or hot pink. Content: short claim in uppercase Impact (“NEW!”, “IMPROVED!”, “LOW SUGAR!”). Text has hard shadow. Positioned top-left or top-right overlapping the border edge.

- **Badge (seal of approval):**  
  Small circle or die-cut rectangle with white fill, black border-2, and a colored ribbon. Text: “100% Whole Grain” or “Prize Inside”. Placed near brand name.

- **Prize offer icon:**  
  Dashed border rectangle with a miniature toy illustration inside (car, dinosaur, robot). Small, placed near bottom.

- **Serving suggestion box:**  
  Tiny inset square in the corner with a simplified bowl illustration, no shadows, black line art.

- **Loading state:**  
  Animation of a spoon stirring in a bowl, 2–3 frames flipbook style (15fps). Progress bar disguised as a rising milk line.

- **Error state:**  
  Mascot shrugs with speech bubble “OOPS!” and a burst shape reading “TRY AGAIN” in red.

## 10. Layout

- **Spacing cadence:** Tight — no padding at the edge of the canvas. Elements overlap or touch borders. Inner component spacing uses gap-2.

- **Grid tendency:** Asymmetrical, non-grid. The mascot anchors one side (left or right), product and text balance the opposite side. Bursts float freely, often overlapping the main axis.

- **Density:** Maximal — every corner must have a graphic element or callout. No empty space.

- **Section separation logic:** Hard-rule borders (thick black lines) or solid color bands. Never whitespace.

- **Alignment philosophy:** The brand name is centered or tilted; everything else orbits that center. Right-aligned fine print; left-aligned or center-aligned bursts. Mascot gaze leads the viewer’s eye toward the product.

- **Breakpoint behavior:**  
  - 375px (mobile): Mascot shrinks to 30% canvas and moves to top; product bowl collapses below; bursts stack vertically.  
  - 768px (tablet): Standard box aspect ratio (vertical rectangle). Bursts spread to corners.  
  - 1024px+: Full canvas; mascot returns to 40% size.

- **Motion block:**  
  - transition-duration: 100ms for state changes (instant feel); 200ms for hover transforms  
  - transition-timing-function: steps(2) for hover bounce (jerky); ease-out for entrance wobble  
  - transition-property: transform, opacity  
  - transition-delay: none  
  - animation: mascot-bounce (0→-4px over 200ms steps(2), on-hover, looping 3 times); burst-pulse (scale 1→1.1 over 2s ease-in-out, looping); cereal-float (translateY(-10px) over 4s linear, looping); brand-shimmer (background-position-x 0→100% over 3s linear, looping); entrance-wobble (translateX(-50px) to 0 over 500ms cubic-bezier(0.34,1.56,0.64,1), on-scroll-enter)  
  - transform-at-rest: none  
  - transform-on-interact: scale(1.1) on hover for bursts and buttons (100ms, steps(1))  
  - transform-style: flat  
  - backface-visibility: hidden only if card-flip is used (not typical)

## 11. Design System Notes

### 11a. Use Constraints
This style is appropriate for gamified e-commerce, children’s apps, nostalgic brand landings, and fun promotional microsites where the goal is immediate attention and conversion through joyful excess. It is wrong for corporate B2B dashboards, medical software, financial services, or any context that requires trust through restraint and clarity. The style’s persuasive energy works well on shelf-like surfaces (app stores, homepage hero) but fails in reading-heavy or productivity contexts.

### 11b. Prompt Phrases
- “as if designed for a mid-century cereal box”  
- “mascot with direct gaze and hard offset shadow”  
- “saturated red, blue, yellow palette with high contrast”  
- “burst shape callout with uppercase Impact text”  
- “crowded layout with zero margins and overlapping elements”  
- “flat vector rendering with thick black outlines and no blur”  
- “hard offset drop shadow on text and mascot”  
- “simulated offset halftone and paper grain texture”

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description.

rule: The mascot must make direct eye contact and dominate the composition; no mascot removes the core identity.
do:   Render a flat vector mascot (animal, monster, or anthropomorphic food) with thick black outlines, solid fill colors, and hard offset drop-shadow(4px 4px 0px rgba(0,0,0,0.25)). The mascot must face forward, making eye contact with the viewer, covering 30–50% of the canvas.
avoid: Substitute the mascot with an abstract icon, generic stock photo, or a non-character illustration. The style collapses without a face.

rule: All shadows must be hard offset with absolutely no blur; softening the shadows breaks the physical print illusion.
do:   Apply drop-shadow(4px 4px 0px rgba(0,0,0,0.25)) to mascot, brand name text, and burst shapes. No box-shadow, no blur radius.
avoid: Use box-shadow: 0 4px 6px rgba(0,0,0,0.1) or any shadow with a blur value. Smooth digital shadows read as web UI, not printed box.

rule: The layout must be maximally dense with zero margins; whitespace is the enemy.
do:   Set page-edge padding to 0; content must touch the edge. Burst callouts overlap the border and each other. No empty corners.
avoid: Introduce whitespace margins (padding:2rem) or intentional breathing room. A minimalist, airy layout destroys the shelf-shouting intent.

rule: Typography must be aggressively condensed and uppercase; any hint of serif or thin sans body type signals a different brand era.
do:   Use a display face like Impact or an ultra-bold condensed sans with text-transform: uppercase for brand name and claims. Body copy is small, tight, and uppercase (label style).
avoid: Use a serif typeface (even for body), a thin weight sans-serif, or any lowercase relaxation. A delicate font reads as luxury, not breakfast cereal.

rule: The surface must carry physical print artifacts (halftone, grain, misregistration); a clean digital surface is alien.
do:   Apply paper grain overlay (SVG feTurbulence, mix-blend-mode: overlay, opacity-10) on the full canvas, and offset halftone patterns on darker shaded areas. Misregistration (1–2px cyan/magenta offset) on brand name and mascot outlines.
avoid: Use only flat solid fills with no texture; avoid smooth digital gradients across the entire canvas (the product highlight sweep is the sole allowed gradient). A sterile, clean surface undermines the retro printed feel.

rule: The primary color palette must be saturated red, blue, and yellow; pastels or muted tones are forbidden.
do:   Use primary red (#E31E24), secondary blue (#0057B8), tertiary yellow (#FFD100) as the dominant colors. White and near-black for surfaces and text.
avoid: Use pastel pink, muted lavender, or any desaturated palette. The energy must be high-contrast and childlike.

### 11d. Variation Bounds
- **Sweet vs savory:** mascot type (cartoon animal = sweet, anthropomorphic food = savory) and color warmth (red/yellow = sweet, green/blue = savory)  
- **Vintage vs modern:** printing artifacts (misregistration, grain) toggled on/off; slab serif vs ultra-bold sans for display  
- **Big product vs big mascot:** scale emphasis between the bowl/photo (60% vs 30%)  
- **Genuine promise vs parody:** nutritional claims are either over-the-top healthy or absurd (“Now with 2X Marshmallows!”)  
- **Maximal vs minimal clean:** bursts and borders density (max: 6+ callouts; min: 2 main bursts only)

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts.

### 11e.i — At Rest
The default single-screen composition resembles a cereal box panel viewed flat. From left: a large flat mascot (40% width) makes eye contact, its shadow falling to the right. The brand name curves across the top center in massive uppercase Impact, with a hard offset shadow and misregistration halftone outline. A product bowl with a splash of milk, saturated photograph, sits near the bottom right, overlaid with a matte-to-gloss highlight sweep. Two burst callouts (“NEW!” in yellow, “PRIZE INSIDE” in hot pink) overlap the top-right and top-left edges, their jagged star shapes clipping the border. A “Nutrition Facts” panel in the upper right corner provides dense, fine-print details. Paper grain texture over the entire canvas, and a single crease line may run vertically through the center. No margins, no empty space.

### 11e.ii — Maximum Expressiveness
Every characteristic element is maxed out: the mascot now occupies 50% of the canvas, eyes slightly widened; an additional speech bubble juts out with “GREAT TASTE!” in comic lettering. Brand name is tilted 5 degrees and enlarged to text-8xl, shimmering with a golden gradient sweep. Six burst callouts radiate from all four corners, each with a different color (yellow, hot pink, lime, purple) and a different claim (“IMPROVED!”, “LOW SUGAR!”, “2X MARSHMALLOWS!”, “FREE TOY!”). The product bowl is replaced by a dynamic splash composition: floating cereal pieces mid-air, steam curls, and a drip of milk that animates downward. Offset halftone pattern is at opacity-30 over all shaded areas; misregistration is intensified (2px offset on all outlines). Paper grain is at opacity-12. The crease line is prominent and the dieline view shows a 3D box thickness. The mascot animation loops (bounce and idle blink); the brand shimmer sweeps continuously; floating cereal particles rise and fall. A “Prize Offer” badge with a toy illustration hovers near the mascot’s hand.

### 11e.iii — Data Context
When forced to present numeric data, the Cereal Box style forces it into a nutrition-facts-panel aesthetic. Data is displayed as a tight, multi-column table with thick black borders, header cells in uppercase label style (secondary typeface, tracking-widest), and values in bold black. Alternating rows are white and off-white. Status indicators are repurposed: “ok” is a green checkmark inside a yellow burst circle, “warn” is a red starburst with “CAUTION”, “err” is a weeping mascot speech bubble. Bar fills are solid primary yellow with a hard black outline, and a prize ribbon icon marks the highest value. The entire data surface is overlaid with paper grain and halftone on the header row. A “Serving Suggestion” box appears near the bottom showing a simplified chart. No smooth gradients, no rounded corners, no delicate typography — the data is loud, like a nutritional label on steroids.

### 11f. Sources

This subject has minimal verified imagery. The visual claims below should be treated with caution.

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** The design subject is the **Kellogg’s Corn Flakes box from the early 1960s**, the sole artefact anchored by the crof-deepseek-v4-pro-precision provider across four outputs. Documented dates place the box in the early 1960s, with no specific designer, foundry, or agency attribution recorded; the work is understood as a product of Kellogg’s internal or commissioned packaging design of the period.

**Verified imagery sources.** 1 URLs verified against institutional servers, distributed across:
- en.wikipedia.org — 1 URL(s)

Key references include none; the forensic pipeline yielded zero institutional imagery records or linked digital surrogates for this entry.

**Named typefaces.** The typography of this style is attested as:
- custom Kellogg's logotype script ( — attestation: attested) — rendered here as bespoke imagery — no web-font substitute
- Clarendon Bold ( — attestation: unverified) — rendered here in Roboto Slab as the closest open substitute
- Rockwell Bold ( — attestation: unverified) — rendered here in Roboto Slab as the closest open substitute
- Franklin Gothic ( — attestation: unverified) — rendered here in Libre Franklin as the closest open substitute
- Helvetica ( — attestation: inferred) — rendered here in Inter as the closest open substitute
- Akzidenz-Grotesk ( — attestation: inferred) — rendered here in Archivo as the closest open substitute

**Honest gaps.** The most significant gap is the fundamental ambiguity of the slug "cereal-box," which resulted in three of four providers describing generic or unmoored objects rather than a concrete artefact. The raw honest gaps list contains no entries, but the minimal coverage status itself constitutes an evidentiary void around production details, provenance, and variant states. No documented gaps were recorded by the forensic pipeline.
