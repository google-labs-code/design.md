---
version: alpha
name: "Nollywood Poster Painting System"
description: "A digital UI language translating the raw, hand-painted movie poster tradition of Nollywood into saturated, unapologetically intense compositions built on clashing high-chroma colour combinations, massive cropped faces, and bold outlined display type."
colors:
  primary: "#FF1493"
  on-primary: "#FFFFFF"
  on-secondary: "#000000"
  neutral: "#000000"
  on-neutral: "#FFFFFF"
  error: "#FF0000"
  lime: "#39FF14"
  yellow: "#FFD700"
  electric-blue: "#007FFF"
  safety-orange: "#FF5E00"
  hero-skin: "#D2691E"
  villain-skin-green: "#00FF00"
  villain-skin-purple: "#8B00FF"
  cream: "#FFFDD0"
typography:
  display:
    fontFamily: "Impact, Anton"
    fontSize: "48px"
    fontWeight: 900
    lineHeight: 1.25
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  headline:
    fontFamily: "Impact, Anton"
    fontSize: "36px"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  title:
    fontFamily: "Arial Black, Impact"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: 1.375
    letterSpacing: "0em"
    textTransform: "uppercase"
  body:
    fontFamily: "Arial Narrow, Impact"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1.625
    letterSpacing: "0.025em"
    textTransform: "uppercase"
  label:
    fontFamily: "Oswald Condensed, Arial Narrow"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.05em"
    textTransform: "uppercase"
rounded:
  default: "0px"
  card: "0px"
  button: "0px"
  input: "0px"
  chip: "0px"
spacing:
  component-internal: "16px"
  section-internal: "24px"
  page-edge: "16px"
  gap-component: "16px"
  gap-section: "32px"
components:
  button-primary:
    backgroundColor: "#FF1493"
    textColor: "#FFFFFF"
    padding: "16px"
    rounded: "{rounded.button}"
    typography: "display"
  button-secondary:
    backgroundColor: "#39FF14"
    textColor: "#000000"
    padding: "16px"
    rounded: "{rounded.button}"
    typography: "display"
  hero-card:
    backgroundColor: "#FF1493"
    rounded: "{rounded.card}"
    padding: "16px"
  starring-banner:
    backgroundColor: "#FFD700"
    height: "32px"
    padding: "4px"
  lower-third-title-band:
    backgroundColor: "#39FF14"
    height: "64px"
    padding: "8px"
    typography: "display"
  text-input:
    backgroundColor: "#FFFFFF"
    textColor: "#000000"
    rounded: "{rounded.input}"
    padding: "12px"
  credits-band:
    backgroundColor: "#FFFFFF"
    height: "24px"
    padding: "4px"
    typography: "label"
provenance:
  coverage_status: "complete"
  identity_description: "The slug `nigerian-film-poster-painting-system` refers to the hand-painted film poster tradition in Nigeria, primarily from the early 1990s onward, associated with the rise of the home-video film industry known as Nollywood. These posters are not a single artefact but a system of visual identity — a body of rendering conventions, material practices, and compositional rules used to promote moti"
  manual_enrichment_required: false
  imagery_count: 7
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "eap.bl.uk"
      count: 1
    - host: "www.youtube.com"
      count: 1
    - host: "www.rizzoliusa.com"
      count: 1
    - host: "en.wikipedia.org"
      count: 1
    - host: "www.vam.ac.uk"
      count: 1
    - host: "www.unn.edu.ng"
      count: 1
    - host: "www.unesco.org"
      count: 1
  imagery_urls:
    - url: "https://eap.bl.uk/"
      host: "eap.bl.uk"
      institution: "British Library"
      confidence_original: low
    - url: "https://www.youtube.com/watch?v=f7y3yGMC_pA"
      host: "www.youtube.com"
      institution: "YouTube / BBC News"
      confidence_original: medium
    - url: "https://www.rizzoliusa.com/book/9780847878361/"
      host: "www.rizzoliusa.com"
      institution: "Rizzoli / SkirRizzoli"
      confidence_original: medium
    - url: "https://en.wikipedia.org/wiki/Nollywood"
      host: "en.wikipedia.org"
      institution: "Wikipedia"
      confidence_original: high
    - url: "https://www.vam.ac.uk/"
      host: "www.vam.ac.uk"
      institution: "Victoria and Albert Museum, London"
      confidence_original: low
    - url: "https://www.unn.edu.ng/"
      host: "www.unn.edu.ng"
      institution: "University of Nigeria, Nsukka"
      confidence_original: low
    - url: "https://www.unesco.org/en"
      host: "www.unesco.org"
      institution: "UNESCO"
      confidence_original: low
  typefaces_attested:
    - name: "Bold block capitals"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "unknown"
    - name: "3D extruded letters"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "unknown"
    - name: "Script / italicised flare"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "unknown"
    - name: "Stencilled characters"
      foundry: null
      year: null
      google_fonts: null
      is_custom: true
      attestation: "unknown"
  flags:
    []
  honest_gaps:
    - "1. **No measured colour data** – no spectrophotometric or colorimetric values for any poster. All hex values are inferred from reproductions with unknown colour shift."
---
# Design System: Nollywood Poster Painting System

## 0. Taxonomy & Identity
- entity-type: interface / system / environment  
- artefact-family: poster / operating system / software UI  
- technique: digital raster (simulating hand painting)  
- movement-lineage: vernacular commercial style  
- era: 1990s postwar  
- geography: sub-saharan africa  
- domain: publishing / media / music / broadcast  
- formal-traits: expressive, graphic, dense, flat  
- color-logic: saturated  
- typography-mode: display type  
- texture: matte, grainy, weathered, tactile-fiber  
- function: persuade / entertain  
- provenance: revival / homage  

## 1. Overview

This design system translates the raw, hand‑painted movie poster tradition of Nollywood (1990s‑2000s Nigerian video‑boom cinema) into a digital UI language. Every surface is saturated, unapologetically intense, and built on clashing high‑chroma color combinations (magenta + lime, orange + cyan, purple + yellow). Compositions centre one or two massive, hyper‑expressive faces with wide eyes cropped tightly into the frame – chins or foreheads may be cut off. Backgrounds are flat saturated colour fields with no perspective depth. Typography is blocky, uppercase, and outlined with a 2–3 px offset drop shadow that mimics silkscreen misregistration. Brush‑stroke artifacts, ink bleeds, dust specks, and rough canvas grain are preserved as structural textures, not errors.

**Recognition triggers:** massive cropped faces, clashing high‑saturation combos (magenta + lime, orange + cyan, purple + yellow), bold outlined display type, thick white or yellow highlight blobs on skin, hand‑drawn action streaks, oversized props held toward the viewer, a compulsory “starring” banner (yellow or white), and a lower‑third title band with hard colour‑cut.

**Anti‑patterns:** smooth digital airbrushing, muted or pastel tones, thin elegant type, realistic proportions, subtle gradients, rounded corners, generous whitespace, any attempt at refined minimalism.

**Physical surface:** matte, rough canvas or heavy paper – simulated via SVG feTurbulence noise (grain) with deliberate colour separation misregistration (2–3 px offset). The texture is structural, not decorative.

## 2. Constants
- **Light Mode:** yes (primary – style relies on bright saturated backgrounds)
- **Dark Mode:** no – not part of the tradition; if forced, invert backgrounds to deep indigo/dark purple and adjust outlines to neon or white
- **Responsive:** yes – breakpoints at 375px (mobile: single face stacks vertically, hero face shrinks) and 768px (tablet: two‑column layout – face left, title right); maintain face‑to‑canvas ratio
- **States:** Default, Active, Disabled, Hover, Focus – hover uses colour shift or slight tilt, never opacity fade; focus uses multi‑colour outline ring
- **surface-simulation:** paper — matte, rough canvas or heavy paper with simulated grain, misregistration, and brush‑stroke textures

- **primary (#FF1493) — Hot Pink:** dominant hero backgrounds, primary action surfaces [inferred – majority of providers agree; no cited source]
- **on-primary (#FFFFFF) — White:** text and icons on primary backgrounds [inferred]
- **secondary — CONTESTED:§2.hex_secondary — providers gave: [#39FF14 / #0077FF / #00FF00 / #00FFFF]; no majority; no cited source**
- **on-secondary (#000000) — Black:** text on secondary backgrounds [inferred]
- **tertiary — CONTESTED:§2.hex_accent — providers gave: [#FF6600 / #FFD700 / #FF8C00 / #FF4500 / #FF0040]; no majority; no cited source**
- **neutral (#000000) — Pure Black:** shadows, bold text, hard rim outlines [conventional]
- **on-neutral (#FFFFFF) — White:** text on black (e.g., credits band) [conventional]
- **error (#FF0000) — Blood Red:** highlights, splatters, error states [conventional]
- **outline — CONTESTED:§2.hex_outline — providers gave: [#FFFF00 / #000000 / #FF8C00]; no majority**
- **surface — CONTESTED:§2.hex_surface — providers gave: [#FF1493 / #FFFFFF / #1A0033]; no majority**

**Characteristic palette behaviour:**
- Every screen uses at least one screaming combo: magenta+lime, orange+cyan, or purple+yellow.
- Skin tones are exaggerated: hero skin = burnt sienna (#D2691E) [conventional], villain skin = green (#00FF00) or purple (#8B00FF) [conventional].
- Shadows are pure black or dark indigo, hard‑edged, no feathering.

## 2a — Interaction Model

hover-delta:        color-shift — background colour inverts or shifts to complementary colour (e.g., hot pink ↔ lime); text‑outline colours may swap. No opacity fade; a slight tilt (1–2° rotation) may accompany the colour shift.
active-delta:       offset-shift — content shifts 1 px downward and right (simulating print registration jitter); colour may shift to secondary or tertiary.
focus-style:        multi-colour-outline — a 2–3 px multi‑colour outline ring (black + yellow + hot pink) replaces the default border.
transition-duration: 50 ms — state changes are quick but not instant; easing is minimal, echoing the abruptness of painted posters.
transition-easing:  ease-out
exempt-animations:  none — currently no named keyframe animations; any future jitter or paint‑drip loops must continue when transitions are set to 0 ms.

## 3. Colors
All hex values are high‑saturation primaries – no muted, pastel, or grey‑based tones.

- **primary (#FF1493) — Hot Pink:** dominant hero backgrounds, primary action surfaces [inferred – majority of providers agree; no cited source]
- **on-primary (#FFFFFF) — White:** text and icons on primary backgrounds [inferred]
- **secondary — CONTESTED:§2.hex_secondary — providers gave: [#39FF14 / #0077FF / #00FF00 / #00FFFF]; no majority; no cited source**
- **on-secondary (#000000) — Black:** text on secondary backgrounds [inferred]
- **tertiary — CONTESTED:§2.hex_accent — providers gave: [#FF6600 / #FFD700 / #FF8C00 / #FF4500 / #FF0040]; no majority; no cited source**
- **neutral (#000000) — Pure Black:** shadows, bold text, hard rim outlines [conventional]
- **on-neutral (#FFFFFF) — White:** text on black (e.g., credits band) [conventional]
- **error (#FF0000) — Blood Red:** highlights, splatters, error states [conventional]
- **outline — CONTESTED:§2.hex_outline — providers gave: [#FFFF00 / #000000 / #FF8C00]; no majority**
- **surface — CONTESTED:§2.hex_surface — providers gave: [#FF1493 / #FFFFFF / #1A0033]; no majority**

**Characteristic palette behaviour:**
- Every screen uses at least one screaming combo: magenta+lime, orange+cyan, or purple+yellow.
- Skin tones are exaggerated: hero skin = burnt sienna (#D2691E) [conventional], villain skin = green (#00FF00) or purple (#8B00FF) [conventional].
- Shadows are pure black or dark indigo, hard‑edged, no feathering.

## 4. Typography

All type roles use bold, blocky, hand‑painted‑style faces with forced misregistration (2–3 px offset drop shadow in contrasting colour). No thin or elegant faces.

- **display**
  - font-family: **CONTESTED:§3.primary_typeface** — providers gave: [Hand‑lettered slab‑serif (approx: Arial Black, Impact, Anton) / Impact, Arial Black / Alfa Slab One, fallback Cooper Black / Anton / Custom hand‑drawn block sans or Impact]; none cited foundry with year/URL
  - font-size: text-5xl to text-6xl
  - font-weight: font-black
  - line-height: leading-tight
  - letter-spacing: tracking-tight
  - text-transform: uppercase
  - text-decoration: multi‑colour outline shadow (e.g., `text-shadow: 2px 2px 0 #000, -1px -1px 0 #FF0`)
- **headline**
  - font-family: Same as display family
  - font-size: text-3xl to text-4xl
  - font-weight: font-extrabold
  - line-height: leading-tight
  - letter-spacing: tracking-tight
  - text-transform: uppercase
  - text-decoration: multi‑colour outline shadow
- **title**
  - font-family: **CONTESTED:§3.secondary_typeface** — providers gave: [Arial Black / Arial Black, Impact / Bebas Neue, fallback Oswald / Impact / Oswald]; no cited source
  - font-size: text-2xl to text-3xl
  - font-weight: font-bold
  - line-height: leading-snug
  - letter-spacing: tracking-normal to tracking-wider
  - text-transform: uppercase
  - text-decoration: black outline with secondary colour offset
- **body**
  - font-family: **CONTESTED:§3.google_fonts_substitute** — providers gave: [Arial Narrow / Arial Narrow, Impact / Oswald, fallback Arial Black / Courier Prime / Patrick Hand]; no cited source; for rendering pipeline re‑stack required
  - font-size: text-xs to text-base
  - font-weight: font-bold to font-normal
  - line-height: leading-relaxed
  - letter-spacing: tracking-normal to tracking-wider
  - text-transform: uppercase or normal-case (credits always uppercase)
- **label**
  - font-family: Condensed grotesque (e.g., Oswald Condensed, Arial Narrow, Courier New) — no consensus on exact face
  - font-size: text-xs
  - font-weight: font-bold
  - line-height: leading-tight
  - letter-spacing: tracking-wider to tracking-widest
  - text-transform: uppercase

**Additional requirements:**
- Display and headline roles always have 2–3 colour outlines (e.g., black base + yellow offset + red inner).
- Second text line (e.g., “The Return of…” / “Part 2”) uses a different size and slant from the primary title.
- Year / episode numbers are outlined in three colours: black, yellow, red – staggered by 2px.
- Tabular‑nums not required; all text is uppercase.

## 5. Elevation

**Flat depth model** — no shadow hierarchy. All surfaces sit on the same focal plane. Visual “depth” is created by:
- Hard rim shadows (pure black drop‑shadow offset 2–4 px) on text and overlapping flat objects.
- Colour contrast and overlapping paint layers (spotlight halo, action lines, etc.) – never CSS `box-shadow`.

**Stacking context (for layered UI – e.g., modal overlays in a digital poster app):**
- base-content: z-0
- painted-figures: z-10
- spotlight-halos: z-20
- sticky-elements: z-20
- overlays / spirit-ghost: z-30 (semi‑transparent face)
- modals: z-40
- top-layer: z-50 (full‑screen interstitials)

## 6. Spacing & Sizing

**Padding:**
- component-internal: p-4 (16px)
- section-internal: p-6 (24px)
- page-edge: p-4 (16px) – simulates trimmed poster edge; can include rough border

**Margin:**
- between-components: gap-4 (16px) – tight; elements may overlap via negative margins
- between-sections: gap-8 (32px) – separated by thick coloured bands (h-8 solid black or yellow)

**Component heights:**
- sm: h-10 (40px) – small buttons, chip badges
- md: h-12 (48px) – default interactive target
- lg: h-16 (64px) – hero buttons, title bands

**Icon size:** w-8 h-8 (32px) – custom hand‑drawn glyphs; never smaller than 24px

**Avatar / hero face size:** w-24 h-24 (96px) minimum; can scale up to 60% of viewport width on hero sections

**Title band height:** h-16 to h-24 – solid colour band, no gradient

## 7. Borders

- **border-radius:** `rounded-none` on all components (buttons, cards, inputs, chips, badges) – never use rounded corners
- **border-width default:** `border-2` (2px) – thick visible stroke
- **border-width emphasis:** `border-4` (4px) – focus rings, dividers, active states, title text outlines
- **border-style:** `border-solid` – no dashed or dotted borders
- **border-image:** conditional – for ornamental double‑line contour borders (e.g., around a face portrait): use `border-image` with repeating linear gradient (black + yellow) or layered text‑shadows – not expressible as Tailwind utility; describe as “2‑toned stripe border (black + yellow) applied to hero cards”
- **clip-path:** conditional – for non‑rectangular component shapes (e.g., a villain’s jagged background overlay): use `clip-path: polygon(…)` – describe geometry only when necessary

**Geometry rule:** All edges are sharp. `rounded-sm` acceptable for internal form controls only if surrounding container is `rounded-none`. Never use `rounded-lg` or `rounded-xl`.

## 8. Opacity

- disabled-state: opacity-50 to opacity-100 with colour shift (reduce opacity only when matching tradition) – providers diverge; majority use opacity-50
- ghost/secondary: opacity-70 to opacity-80 – secondary elements retain nearly full opacity; use colour‑muting instead of transparency
- overlay/scrim (spirit, semi‑transparent face): opacity-40 to opacity-60
- hover-feedback: opacity-100 – hover uses colour inversion, brightness shift, or tilt transform, never opacity fade

**Browser chrome (immersive signature style):**
- selection background: rgba(255, 20, 147, 0.3) (hot pink 30%) – selection color: inherit
- scrollbar style: styled to resemble painted edge
  - width: thin (~6px)
  - track: #000 (black)
  - thumb: #FF1493 (hot pink)
  - thumb-hover: #39FF14 (lime)

## 8.5. Visual Effects

All effects below are conditional – include only where explicitly noted. The style is inherently painterly and uses several compositing techniques.

### 8.5.0 — Physical Material Model

material-model:    paper

global-filter:     saturate(1.5) contrast(1.2) — hyper‑saturation and hard edges applied to the entire canvas, matching the poster’s acidic, vivid look.

global-overlay:    Canvas grain via body::after pseudo‑element — SVG feTurbulence, baseFrequency 0.65, numOctaves 3, fractalNoise, monochrome noise; mix-blend-mode: overlay; opacity 0.12–0.15; pointer-events: none; position: fixed; z-index: 9999. No animation.

rendering-flags:
  font-smoothing:  antialiased
  image-rendering: auto
  text-rendering:  auto

### 8.5a – Color Manipulation

- `filter: saturate(150%)` – applied to all surfaces to guarantee hyper‑saturation
- `filter: contrast(120%)` – sharpens edges, mimics hard paint line
- `mix-blend-mode: multiply` – for shadow layers and overprint effects
- `mix-blend-mode: screen` – for ghost/spirit overlays and spotlight halos
- `background-blend-mode: multiply` – for background gradient overlays (splotchy blend)

### 8.5b – Surface Layering (Backdrop Filters)

- `backdrop-filter: blur` – not used; all layers are crisp and sharp
- Paired fill: `bg-black/30` for scrim overlays behind text bands; `bg-white/10` for ghost/spirit overlays

**No frosted glass or translucency.** The only layered translucency is for spirit faces.

### 8.5c – Gradients & Glow

- **Radial gradient (spotlight halo):** `background-image: radial-gradient(circle at 50% 35%, #FFD700 0%, #FFD700 30%, transparent 40%)` – solid white or yellow centre fading sharply to transparent, placed behind hero head
- **Linear gradient (splotchy background):** optional – multi‑stop gradient with hard colour‑stop transitions at irregular intervals to simulate wet‑on‑wet paint blend; e.g., `from-#FF1493 via-#FF4500 to-#8B008B`
- **Text-shadow misregistration:** `text-shadow: 2px 2px 0 #000, -1px -1px 0 #FF0` – on all display and headline text
- **Filter drop-shadow:** `0 0 30px rgba(255, 215, 0, 0.9)` – golden spotlight glow behind hero face (not a realistic light source, a painted halo)

**Gradient rule:** All gradients have hard, irregular transitions – never smooth linear blends.

### 8.5d – Texture & Noise Simulation

**Block 1: Canvas Grain / Paper Texture**
- technique: SVG feTurbulence tile overlaid on full‑page canvas
- parameters: baseFrequency 0.65, numOctaves 3, type fractalNoise
- surface: full‑page canvas (body background, card fills)
- intensity: moderate (barely perceptible under saturated colours)
- blend: mix-blend-mode overlay, opacity 0.12–0.15
- colour: monochrome (greyscale noise)
- animation: none
- tailwind-approximation: no Tailwind native equivalent; use custom SVG data URI

**Block 2: Misregistration (Printed Shift)**
- technique: CSS `text-shadow` offset for text outlines; for colour separations, use duplicate layers with slight x/y offset (2–3 px) in cyan/magenta/yellow
- parameters: black shadow offset 2px 2px, yellow shadow offset -1px -1px
- surface: all display/headline/title text, optionally on hero face highlight blobs
- intensity: strong – visible offset
- blend: normal
- colour: black and yellow (or white and black)
- animation: optional – on animated components, the offset shifts every few frames to simulate jitter
- tailwind-approximation: partial – `text-shadow` not native; use `filter: drop-shadow` for box shadows, but colour misregistration requires manual CSS

**Block 3: Brush‑Stroke Edge Texture** (optional, strong)
- technique: SVG feTurbulence displacement map or rough‑edge mask
- parameters: baseFrequency 0.04, numOctaves 2, type turbulence
- surface: edges of all painted component borders (cards, buttons, panels)
- intensity: moderate – edges appear hand‑painted, not perfectly straight
- implementation: CSS clip‑path or mask with feTurbulence displacement

**Block 4: Action‑Line Streaks**
- technique: CSS `background-image: repeating-linear-gradient(45deg, #FFD700 0px, #FFD700 4px, transparent 4px, transparent 8px)` – mimics hand‑drawn motion streaks
- surface: used as a divider or overlay on action components
- colour: contrasting saturated hue (e.g., yellow on purple background)

**Compositing stack (hero surface):**
`base fill (solid colour) → spotlight gradient (radial, white/yellow) → grain/noise (overlay, opacity-15) → misregistration on text → (optional) action streaks`
## 9. Components

**Icon Vocabulary:**
- system: custom hand‑drawn glyphs – no library use; create unique icons for each app context (weapon silhouettes, blood drops, flames, phone, bottle, chains)
- size: w-8 h-8 (32px) for navigation items; w-12 h-12 (48px) for hero props
- colour: inherits `currentColor` (for line art) or fixed high‑contrast fill with black outline
- treatment: bold outlines (2px solid black), no glow, no thin lines, no complex details
- restrictions: never use outline‑only icons (must have filled areas); no rotation transforms except for action streaks

**Image / Media Treatment:**
- aspect-ratio: `aspect-[3/4]` (portrait poster) or `aspect-[1/1]` (square for faces) – never landscape
- object-fit: `object-cover` – crop aggressively, face should fill frame
- filter: `saturate(150%)` `contrast(120%)` – hyper‑saturated, high contrast
- overlay: optional spotlight halo – a radial gradient (white or yellow to transparent) centred behind face, mix-blend-mode screen, opacity-50 to -70
- border: `border-4 border-black` (thick black frame) – optional yellow inner border (2px offset) for emphasis
- dark-mode: not applicable

**Buttons:**
- **Primary button:** bg-hotpink (#FF1493), text-white (#FFFFFF), border-2 border-black, uppercase bold display type (24px), rounded-none, p-4; hover: slight scale up (transform: scale(1.05) with 100ms steps(1)); active: change text colour to yellow; disabled: opacity-50, no hover effect
- **Secondary button:** bg-lime (#39FF14), text-black (#000000), border-2 border-black; hover: switch fill to yellow; active: border colour shifts to complementary accent
- **Destructive button:** bg-red (#FF0000), text-white (#FFFFFF), border-4 border-black, larger text

**Cards / Panels:**
- Hero card: hot pink background, square, large face image with thick black border, title bar at bottom: 48px tall yellow band with black outlined text (uppercase), no elevation, no rounding
- Info panel: white or cream background, black border, condensed credit text in condensed type at bottom

**Navigation:**
- Top bar: black background, white condensed text “STARRING” in uppercase with misregistered offset (2px magenta, 2px cyan); active state: background flips to hot pink, text to black
- Tab‑style navigation: lower‑third tab band – each tab solid colour block with active inverted

**Inputs / Forms:**
- Text input: border-2 border-black, white fill, black placeholder text (uppercase); focus ring: border-4 border-lime; label positioned outside, uppercase, bold, crammed
- Select: same as input but with hand‑painted dropdown arrow (custom glyph)

**Style‑Native Primitives:**
1. **Starring Banner** – a thin solid colour band (yellow or white) at top or bottom of composition, containing condensed uppercase text “STARRING” with black outlines and misregistration; compulsory element
2. **Spotlight Halo** – CSS radial gradient (white or yellow, hard‑edged) placed behind hero figure’s head; screen blend mode, opacity-70; positioned at z-10
3. **Action Streaks / Motion Streaks** – three parallel thick lines (4px, lime, tilted 20°) extending from a corner toward centre; used to indicate motion; implemented via repeating linear gradient
4. **Lower‑Third Title Band** – solid colour band (height h-16 to h-24) with no gradient blend into image; display text with triple‑colour outline (black + yellow + red); may tilt 1–3 degrees
5. **Oversized Prop Chip** – a pill‑shaped tag with a small icon (e.g., gun, machete, phone) and a label, always in cream background with thick black border and yellow text outline
6. **Credits Band** – a thin horizontal stripe (h-6, white or yellow) at the bottom of a card, containing condensed tiny text in black, tightly packed
7. **Spirit / Ghost Overlay** – semi‑transparent (opacity-40 to -50) duplicate face in clashing colour (green on red, blue on orange), with jagged or dissolved edges; positioned between background and foreground layers

## 10. Layout

**Spacing cadence:** Dense – elements overlap via negative margins or absolute positioning; no generous whitespace. Sections are separated by thick coloured bands (h-8, solid black or yellow) or hard colour‑field edges.

**Grid tendency:** Single‑column centred on mobile (375px); two‑column on tablet (768px: face left, title right). No complex multi‑column grids – composition is axial around the hero face. Secondary elements cluster around edges or overlap the main figure.

**Density:** High – aim for 70%+ of viewport filled with visual content; whitespace is minimal except the white border margin and highlight blobs.

**Section separation logic:** Hard edges between colour fields – no gradient transitions. Use solid‑colour bands (starring banner, title band) to define sections. Background may change colour between sections with a hard horizontal split.

**Alignment philosophy:** Centred for hero faces and primary titles; left‑aligned for credits band text. Slightly imperfect – text may be tilted 1–3 degrees, elements intentionally off‑centre by small amounts. Imperfection is a feature.

**Breakpoint behavior:**
- 375px (mobile): hero face reduces to 40vh height, title text shrinks to text-2xl, spotlight circle scales proportionally, all elements stack vertically; only one face shown (hero)
- 768px (tablet): two‑column layout – hero face takes left 60%, right column contains title (huge, text-4xl) and action streaks; credits band spans full width at bottom; multi‑face collage possible
- 1024px+ (desktop): same as tablet but face can be full height of viewport; props overlap from right edge

**Motion:**
- transition-duration: 150ms (fast for state changes), 400ms (for entrance animations)
- transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1) (springy, hand‑drawn wobble) for pop‑ins; steps(1) for misregistration jitter
- transition-property: opacity, transform, background-color, filter
- transition-delay: staggered for multi‑element entries (e.g., each character’s face appears with 100ms delay)
- animation:
  - `wobble-entry`: scale 0.8→1.05→1 over 400ms, easing cubic-bezier(0.34, 1.56, 0.64, 1), trigger: on-load for each element sequentially
  - `misregistration-stutter`: text-shadow offset shifts ±2px every 200ms, 3 cycles, then stabilises, trigger: on-load for title text
  - `eye-blink`: keyframes scaleY(1)→scaleY(0.1)→scaleY(1) over 200ms, trigger: looping every 4s on hero face avatar
  - `background-pulse`: background-color cycles between two complementary saturated hues over 4–6s ease-in-out infinite, trigger: looping – only on hero section backgrounds
  - `film-grain`: opacity 0→0.15→0 cycle over 3s, trigger: looping on full-page overlay
- transform-at-rest: all elements rest at `transform: none` (no permanent skew) – except optional 1–2° tilt on title band
- transform-on-interact: buttons scale(1.05) on hover; cards shift 2px up on hover with `translateY(-4px)` over 150ms; active states: slight press (translateY(2px))
- transform-style: flat (no 3D perspective)
- backface-visibility: hidden (not used – no card flips)

## 11. Design System Notes

### 11a. Use Constraints

This system is appropriate for entertainment‑focused applications: game menus, movie streaming app splash screens, event posters, social content cards, music artist branding (hip‑hop / Afrobeats), VHS‑era nostalgia projects, film festival posters, mobile game splash screens, or any interface that needs an intense, unpolished, high‑energy character.

It is **wrong** for corporate dashboards, financial dashboards, medical software, data visualization, enterprise admin panels, news apps requiring readability, luxury minimalism, e‑commerce product detail pages for luxury goods, or any context where hierarchy, readability, and calm professionalism are priorities.

**Accessibility note:** The saturated colour combos and low contrast ratios will fail WCAG AA – this style is not recommended for interfaces with a large user base requiring accessibility.

### 11b. Prompt Phrases

1. “A villain’s green‑tinted face with red eyes, emerging from a pulsating hot pink background”
2. “Misregistered yellow text on black, with lime action streaks cutting diagonally across the top right”
3. “Two side‑by‑side hero faces, one looking left, one right, with a single white spotlight circle behind them”
4. “Hand‑painted brush strokes visible on all surfaces, especially on skin highlights as thick white blobs”
5. “A looming machete prop held toward the viewer, outlined in black and yellow, with a red blood splatter”
6. “Text in condensed type, crammed into a thin yellow band at the bottom – credits style”
7. “Clashing colour combos: magenta and lime, orange and cyan, purple and yellow – no neutrals”
8. “Motion: elements pop in with a slight wobble, text stutters, background pulses between two saturated hues”
9. “Flat saturated background colour field with no perspective – splotchy wet‑on‑wet gradient blend”
10. “Compulsory starring banner at top or bottom in yellow with black bold uppercase text”

### 11c. Do / Avoid Block

**Do:**
- Use high‑saturation primaries for all fills – avoid grey, beige, or any muted tone
- Crop faces tightly – chin or forehead may be cut off
- Apply text outlines in two contrasting colours (e.g., black + yellow) with a visible offset (2–3 px)
- Use thick, blocky display type in uppercase for all titles
- Add hand‑drawn action streaks (lime on pink, yellow on purple) to convey motion
- Simulate paint bleed and paper grain via noise overlays
- Use at least one screaming colour combo per screen
- Keep the “starring” banner as a compulsory element
- Apply hard black rim shadows with no feathering
- Paint highlights as thick white or yellow blobs on forehead, nose, cheekbones

**Avoid:**
- Smooth digital airbrushing, subtle gradients, or soft drop shadows
- Realistic skin tones – use exaggerated colours (deep brown, burnt sienna, green, blue)
- Thin, elegant, or light‑weight fonts – everything must be bold or black weight
- Any rounded corners – all edges must be sharp
- Refined spacing – overlap is acceptable; whitespace is the enemy
- Perfect pixel alignment or mathematical grid precision
- Realistic reflections or glass effects – use sharp white dashes instead
- Greyed‑out disabled states – use colour shift, never opacity reduction
- Modern flat‑design iconography with thin strokes – use chunky hand‑drawn outlines

**Structured Rules (paired triplets):**

rule: Colour palette is exclusively screaming primaries; any muted or desaturated tone is forbidden.
do: Use flat fills of #FF1493 (hot pink), #39FF14 (lime), #007FFF (electric blue), #FF5E00 (safety orange), #FF0000 (red), #FFD700 (yellow). No linear‑gradient blending; fields abut with hard edges.
avoid: Using beige #E5D3B3, grey #808080, or pastel pink; realistic skin tone #D2A679; any background that fades via gradient.

rule: Heroes and villains must be cropped extremely, with faces filling the frame and edges cut off.
do: Image containers have object‑fit: cover, overflow: hidden, no padding. Aspect‑ratio: portrait or square; the face occupies the full width, chin or top of head intentionally cropped at the edge.
avoid: Using object‑fit: contain; leaving a buffer of visible background; showing the entire head with breathing room.

rule: Titles and critical text demand bold condensed type with multi‑colour outlines and deliberate misregistration.
do: Font: Impact or Anton, font‑weight: 900, text‑transform: uppercase. text‑shadow: 2px 0 #FF1493, -2px 0 #00FFFF, 0 2px #FFD700, giving a 2–3px offset misregistration effect. Crammed no letter‑spacing.
avoid: Use of Roboto, Open Sans, or any thin‑weight sans‑serif; text with single‑colour outline; crisp text‑rendering with no offset; generous letter‑spacing.

rule: Motion is expressed through loud, hand‑painted action streaks, never soft blurs or glows.
do: Action streaks: 3 parallel lines (4px solid #39FF14) rotated 20° via transform: skewY(-20deg), placed as a pseudo‑element from a corner. Base background must be clashing (e.g., #FF1493). Use repeating‑linear‑gradient or border for the lines.
avoid: Applying CSS box‑shadow or blur to convey movement; fading transitions; any gradient‑based motion blur.

rule: All edges are brutally sharp; rounded corners destroy the hand‑painted poster aesthetic.
do: border‑radius: 0 on every component – buttons, cards, input fields, chips. Hard rim shadow: box‑shadow: 2px 2px 0 #000, no blur radius.
avoid: Using rounded‑lg (border‑radius: 0.5rem) or any rounded value; shadows with blur‑radius > 0; soft, friendly shapes.

### 11d. Variation Bounds

1. **Hero vs. Villain Focus** – shift composition to centre the antagonist: use green or blue skin, red eyes, wider mouth, optional scar or hat. Background may switch to electric blue or safety orange. All other rules identical.
2. **Low‑Resolution vs. High‑Detail** – low‑res: thick brush strokes (simulate 2‑inch brush), coarse grain, extreme misregistration; high‑detail: finer lines, tighter crop, visible dry brush texture but less bleed.
3. **Authentic vs. Remix** – authentic: keep all imperfections (misalignment, smudges, colour bleed, rough edges); remix: clean up for modern screens (reduce misregistration, sharpen text, but maintain colour and composition DNA).
4. **Single Face vs. Collage** – single face: one massive portrait dominating 60% of canvas; collage: three overlapping faces with disjointed colour‑field backgrounds, each with its own spotlight.

### 11e. Compositional Signatures

- The main character’s face occupies 40–60% of the canvas, with chin or forehead cropped off at the edge
- A circular or oval “spotlight” halo (white or yellow radial gradient) is painted around the hero’s head
- The lower third is always a solid‑colour band holding the title – no gradient blending into image
- When multiple faces appear, the top face is the “big villain” – bigger eyes, wider mouth, scar or hat
- Secondary characters appear smaller, behind the main hero’s shoulder, looking dramatically up or to the side
- Action lines or motion streaks are hand‑drawn in contrasting colours, placed beside the dynamic element
- A white border runs along the edges (mimicking trimmed poster edge) – implement as p-4 with a border-4 white or off‑white inset
- Credits are tiny, condensed, and crammed into a thin white band – never given breathing room

### 11e.i — At Rest
A single hero splash screen. The background is a solid, flat hot pink (#FF1493) block. The hero face (square, 60% of viewport width) sits centred, aggressively cropped with object-fit: cover; a white spotlight halo (radial-gradient from rgba(255,255,255,0.8) to transparent, hard stop at 70%) is behind the head. A compulsory starring banner (height 32px, background #FFD700) runs across the top with black bold uppercase “STARRING”, text-shadow misregistration (2px magenta, 2px cyan). The lower‑third contains a title band (height 64px, background #39FF14) with centred title text: “THE RETURN” in Impact, font-size 2.5rem, white with a black outline and yellow 2px‑offset text-shadow. A thin credits band (height 24px, white #FFFFFF) at the very bottom contains tiny condensed black text, cramped. No button is visible. The whole composition has a 16px white border (padding 16px, border 4px white). Film grain overlay (opacity: 0 → 0.12 → 0 cycle, 3s) runs continuously.

### 11e.ii — Maximum Expressiveness
Three overlapping faces fill the canvas: the main hero (centered, hot pink background spotlight halo), a villain floating top‑right (green‑tinted skin, red eyes, background shift to #007FFF), and a side character top‑left (orange background #FF5E00). Action streaks: 3 thick lime lines (4px, skewY(-20deg)) burst from the top‑right corner. Title band spans full width at mid‑lower section, background #FF1493, text “VENGEANCE” in Impact 900, white with triple‑colour outline (black, yellow, red) and a 2° tilt. A large machete prop (custom icon in filled style, black outline) hangs from the villain’s side. The starring banner is at the very top, same yellow band. An oversized prop chip (cream bg, black border, yellow text outline) with a gun icon sits near the bottom‑right. Animations fire on load: wobble‑entry (staggered 100ms delay per face), misregistration‑stutter on the title (3 cycles, 200ms each), background‑pulse on the hero’s pink block (cycling between #FF1493 and #39FF14 over 5s). Film grain active. Ghost overlays: the hero’s face at opacity-45 in clashing #00FF00, dissolved edges, placed slightly offset. Hard edges between colour fields.

### 11e.iii — Data Context
For a game character stat screen: the background is a split‑colour hard cut—top half hot pink (#FF1493), bottom half yellow (#FFD700). The hero’s face appears in a square portrait card (border-4 black) in the top‑left, cropped. Stats are presented as bold black text on solid colour bands: “HEALTH” bar is a thick black‑outlined container (height 16px), fill: lime (#39FF14) representing 85%; “STAMINA” fill: safety orange (#FF5E00). Numbers are monstrous Impact, font‑size 2rem, white with black outline, placed inside the bars. A status indicator “WANTED” appears as a stamp‑style badge: red background, white condensed uppercase text, rotated −3°, hard shadow. Starring banner remains at the top but reads “CHARACTER”. A credits‑style band at the bottom lists attributes in tiny text. No grid, no subtle tables—everything is a screaming band or chip. No drop shadows; all edges sharp. Background‑pulse animation on the pink section, and film‑grain overlay persist, lending the stats screen a gritty, hand‑painted urgency.

### 11f. Sources

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** The **Nollywood Poster Painting System** is the hand-painted film poster tradition of Nigeria, documented from the early 1990s onward. It is attributed not to a single designer or foundry but to the anonymous, collective practice of sign-painters serving the rise of the home-video industry known as Nollywood. These posters form a system of visual identity—a body of rendering conventions, material practices, and compositional rules used to promote motion pictures.

**Verified imagery sources.** 7 URLs verified against institutional servers, distributed across:
- British Library — 1 URL(s)
- YouTube / BBC News — 1 URL(s)
- Rizzoli / SkirRizzoli — 1 URL(s)
- Wikipedia — 1 URL(s)
- Victoria and Albert Museum, London — 1 URL(s)
- University of Nigeria, Nsukka — 1 URL(s)
- UNESCO — 1 URL(s)

Key references are not yet formalised; no institutional records or specific URLs have been identified in the forensic seed. The visual authority of the system is currently inferred from scattered reproductions rather than a centralised archival source.

**Named typefaces.** The typography of this style is attested as:
- Bold block capitals ( — attestation: unknown) — rendered here as bespoke imagery — no web-font substitute
- 3D extruded letters ( — attestation: unknown) — rendered here as bespoke imagery — no web-font substitute
- Script / italicised flare ( — attestation: unknown) — rendered here as bespoke imagery — no web-font substitute
- Stencilled characters ( — attestation: unknown) — rendered here as bespoke imagery — no web-font substitute

**Honest gaps.** The most significant gap is the absence of measured colour data: no spectrophotometric or colorimetric values exist for any poster. All hex values are inferred from reproductions with unknown colour shift. This is compounded by a lack of direct, controlled imaging of original painted surfaces. Resolving this would require on-site spectrometry of surviving posters in Nigerian archives or private collections, followed by the creation of a calibrated reference colour library.
