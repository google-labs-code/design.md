---
version: alpha
name: "Nutrition Facts Panel"
description: "A data-interface style derived from US food labels, characterized by strict black-on-white, dense typographic grid, horizontal rules, and no decoration."
colors:
  text-primary: "#000000"
  surface: "#FFFFFF"
  surface-warm: "#F9F6EE"
  accent: "#FF0000"
  ok: "#000000"
  warn: "#000000"
  err: "#FF0000"
  delta-up: "#000000"
  delta-down: "#FF0000"
  delta-flat: "#000000"
typography:
  display:
    fontFamily: "Franklin Gothic Condensed"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.025em
    textTransform: uppercase
  headline:
    fontFamily: "Helvetica Neue"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0em
    textTransform: uppercase
  title:
    fontFamily: "Helvetica Neue"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0em
  body:
    fontFamily: "Helvetica Neue"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: 0em
  label:
    fontFamily: "Helvetica Neue"
    fontSize: 12px
    fontWeight: 300
    lineHeight: 1
    letterSpacing: 0em
rounded:
  default: "0px"
spacing:
  gap-section: "4px"
components:
  card-panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.default}"
    padding: "16px"
  metric-cell:
    backgroundColor: "transparent"
    textColor: "{colors.text-primary}"
  status-cell:
    backgroundColor: "transparent"
    textColor: "{colors.text-primary}"
provenance:
  coverage_status: "complete"
  identity_description: "The slug `nutrition-label` refers to the standardized Nutrition Facts label (also called the Nutrition Facts panel) mandated by the U.S. Food and Drug Administration (FDA) for packaged foods and dietary supplements. The canonical form debuted in 1993 under the Nutrition Labeling and Education Act (NLEA), with a major revision effective in 2018 (the 2016‑finalized rule). This record documents t"
  manual_enrichment_required: false
  imagery_count: 5
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "www.fda.gov"
      count: 2
    - host: "en.wikipedia.org"
      count: 1
    - host: "unblock.federalregister.gov"
      count: 1
    - host: "www.govinfo.gov"
      count: 1
  imagery_urls:
    - url: "https://www.fda.gov/media/99069/download"
      host: "www.fda.gov"
      institution: "U.S. Food and Drug Administration"
      confidence_original: low
    - url: "https://en.wikipedia.org/wiki/Nutrition_facts_label"
      host: "en.wikipedia.org"
      institution: "Wikimedia Foundation"
      confidence_original: high
    - url: "https://unblock.federalregister.gov/"
      host: "unblock.federalregister.gov"
      institution: "U.S. Government Publishing Office (eCFR)"
      confidence_original: high
    - url: "https://www.govinfo.gov/app/details/FR-2016-05-27/2016-11867"
      host: "www.govinfo.gov"
      institution: "U.S. Government Publishing Office (GovInfo)"
      confidence_original: medium
    - url: "https://www.fda.gov/media/99071/download"
      host: "www.fda.gov"
      institution: "U.S. Food and Drug Administration"
      confidence_original: low
  typefaces_attested:
    - name: "Franklin Gothic Heavy"
      foundry: "American Type Founders"
      year: 1903
      google_fonts: "Libre Franklin"
      attestation: "conventional"
    - name: "Helvetica"
      foundry: null
      year: null
      google_fonts: "Inter"
      attestation: "conventional"
  flags:
    []
  honest_gaps:
    - "1. **Exact typeface name for body text.** The regulation says “a sans‑serif type.” Franklin Gothic Heavy is attested for the title; the body is most commonly Helvetica or Arial, but which font was used on the *first* official prototype is not documented."
---
# Design System: Nutrition Facts Panel

## 0. Taxonomy & Identity

entity-type: interface / system / environment
artefact-family: dashboard / console / control panel / label / sticker / seal
technique: digital vector
movement-lineage: vernacular commercial style  
era: postwar
geography: US / Canada
domain: civic / government / retail / CPG
formal-traits: grid-based, modular, axial, dense, utilitarian
color-logic: monochrome
typography-mode: grotesque
texture: matte, smooth (optional grainy for vintage)
function: inform
provenance: revival / homage / canonical historical source

## 1. Overview

The Nutrition Facts Panel translates the language of a US food label into a data-interface style that is instantly readable, authoritative, and utterly without decoration. It evokes the regulatory tradition of post-war food labeling – clinical, government-mandated, and designed for rapid scanning. Density is high: every pixel is occupied by aligned type or a horizontal rule. The rendering philosophy is flat, crisp, vector, with no shadows, gradients, or transparency.

- Emotional tone: clinical, authoritative, no-nonsense, sterile
- Era/lineage: post-war US food labeling (FDA standard), mid-century regulatory print design
- Density: high
- Core rendering philosophy: strict black-on-white, solid fills and strokes only
- What makes it recognizable: double-headed rule lines at top and bottom of the main box, bold left-aligned "Nutrition Facts" header in condensed sans, all-caps "SERVING SIZE" in small bold, right-aligned % Daily Value column, thick rule separating calories
- What would break: rounded corners, color other than black/white/optional red, images, icons, multi-column layout, script fonts, shadows

## 2. Constants

Light Mode: yes (primary)
Dark Mode: no – the style is inherently light-background; inversion would break the regulatory character
Responsive: yes – single-column narrow block (300–450px) that reflows vertically but never expands to multi-column
States: Default, Hover (very light gray tint on row – only for interactive adaptations)
surface-simulation: none

## 2a — Interaction Model

hover-delta:        opacity — opacity shifts to 0.95 on all interactive elements; no color change, no movement
active-delta:       opacity-dim — opacity shifts to 0.85 on press
focus-style:        outline — keyboard focus communicated by a 2px solid black outline
transition-duration:0ms — instantaneous; no easing
transition-easing:  none
exempt-animations:  none

## 3. Colors

- text-primary (#000000) [attested] — Pure black for all text, headings, and rules
- surface (#FFFFFF) [attested] — Primary background; pure white
- surface-warm (#F9F6EE) [attested] — Optional warm off-white for paper simulation (vintage variation)
- accent (#FF0000) [attested] — Spot red used only for the Calories numeric value (optional; mimics vintage FDA labels)

*No gradients, no transparency. The palette is intentionally limited to solid fills and strokes.*

Semantic state colors:
ok:         #000000 — text-primary; success state uses pure black (same as default text)
warn:       #000000 — text-primary; warning state uses pure black (no color differentiation, per regulatory style)
err:        #FF0000 — accent; error state uses the spot red (same as Calories value)
delta-up:   #000000 — text-primary
delta-down: #FF0000 — accent
delta-flat: #000000 — text-primary

Note: The system intentionally avoids semantic color distinctions beyond black and optional red. ok/warn/delta-flat all default to black. Only err and negative deltas use red, mapping directly to the existing accent role.

## 4. Typography

**display** (used for "Nutrition Facts" header):
- font-family: CONTESTED:§3.primary_typeface — providers gave [Franklin Gothic Condensed, Franklin Gothic Condensed, Franklin Gothic Condensed, Franklin Gothic Condensed]; none cited foundry; re-stack required
- font-size: text-2xl
- font-weight: font-bold
- line-height: leading-tight
- letter-spacing: tracking-tight
- text-transform: uppercase

**headline** (used for "SERVING SIZE" and all-caps row labels like "TOTAL FAT"):
- font-family: CONTESTED:§3.secondary_typeface — providers gave [Helvetica Neue, Helvetica Neue, Franklin Gothic Demi, Helvetica Neue]; none cited foundry; re-stack required
- font-size: text-sm
- font-weight: font-bold
- line-height: leading-none
- letter-spacing: tracking-normal
- text-transform: uppercase

**title** (used for major data components: "Total Fat", "Cholesterol", "Sodium", "Total Carbohydrate", "Protein"):
- font-family: same as headline (contested)
- font-size: text-sm
- font-weight: font-bold
- line-height: leading-none
- letter-spacing: tracking-normal
- text-transform: none

**body** (used for sub-items and data values):
- font-family: same as headline
- font-size: text-sm
- font-weight: font-normal
- line-height: leading-none
- letter-spacing: tracking-normal
- text-transform: none

**label** (used for footnotes, %DV explanations, supplemental text):
- font-family: same as headline
- font-size: text-xs
- font-weight: font-light
- line-height: leading-none
- letter-spacing: tracking-normal
- text-transform: none

**Mandatory features:**
- All numeric values use tabular-lining figures (same width per digit)
- No ligatures, no kerning exceptions – mechanically spaced
- Text-transform: uppercase applied only where specified (e.g., "TOTAL FAT")
- Google Fonts substitute: CONTESTED:§3.google_fonts_substitute — providers gave [Barlow Condensed, no entry, Roboto Condensed, no entry]; no consistent majority; no citation; re-stack required

## 5. Elevation

Flat depth model — no shadow hierarchy. All surfaces are flat, with no drop shadows, inner shadows, or elevation levels. The only visual depth comes from the contrast of black rules on white.

## 6. Spacing & Sizing

padding:
- box-internal: p-4 (16px) [majority: 2 of 4 providers agree]
- row-to-row: gap-0.5

margin:
- between-sections: gap-1

component-heights: not applicable – all heights are determined by font size and line-height; no fixed component heights

icon-size: no icons

avatar-size: not applicable

## 7. Borders

border-radius:
- default: rounded-none — no rounding on any element

border-width:
- default: border (1px solid black) for outer bounding box
- emphasis: border-2 (2–3px solid black) for the thick rule separating "Calories" from the rest
- hairline rules: 0.5pt solid black (use border-0 with explicit 0.5px stroke — not Tailwind native)

border-style: border-solid

border-image: none

clip-path: none

## 8. Opacity

Not applicable — all elements are fully opaque. No opacity changes for any state. (One provider [kimi-k2.6] suggested opacity for disabled/ghost states; overridden by majority.)

## 8.5. Visual Effects

Optional for vintage print simulation:
- Paper grain via SVG feTurbulence (baseFrequency 0.65–0.8, numOctaves 3, blend multiply at 5–10% opacity)
- Ink bleed on hairline rules via blur(0.5px)
- Misregistration of red spot (0.3px offset on the red Calorie value)

When not simulating print, no effects are applied.

## 9. Components

**Icon vocabulary:**
system: none — no icons, no glyphs, no decorative elements
size: not applicable
color: not applicable
treatment: no treatment

**Image treatment:** not applicable

**Card / Panel (the label itself):**
- Outer bounding box: 1px solid black, no rounding, no shadow
- Internal structure: vertical stack of rows separated by horizontal rules
- Header: "Nutrition Facts" in display type (text-2xl, uppercase, condensed sans)
- Immediately below: "SERVING SIZE" in headline type (text-sm bold, uppercase)
- All rows: left-aligned text, right-aligned % column with fixed gutter
- Thick rule (2–3px) under calories line
- Sub-items indented via fixed tab (no variable spacing)
- Footnote block at very bottom in label type (text-xs light)
- Double-headed rule lines at top and bottom of the box (thin hairline + outer border)

**Horizontal rule hierarchy:**
- Double hairline at top and bottom of box
- Thick rule (2–3px) under "Calories" row
- Hairline (0.5pt) between all other rows

**Indented sub-items:**
- Indentation is a fixed left offset (approx 1em) applied to sub-components (e.g., "Saturated Fat" under "Total Fat")
- No bullet points or icons before the label – pure indentation

**% Daily Value column:**
- Right-aligned, fixed gutter from left text
- Always includes "%" symbol
- No decimal places for whole numbers (e.g., "5%")
- Every numeric value paired with its unit (g, mg, %)

**Empty-state motif:** not applicable (the label is always data-filled)

**Interactive adaptations (optional, for dynamic implementations):**
- Row hover: very light gray tint on row (e.g., bg-gray-50 with no border change)
- Collapsible sections: sections can fold (e.g., "Fat & Oils") but the outer border remains unchanged
- Tooltip: "% Daily Value" shows recommended intake on hover
- Click-and-drag reorder: rows stay within the rigid grid

**Data Display Components:**

metric-cell:
  Background: transparent (no fill). Border: none.
  Label: text-sm bold, uppercase, pure black, left-aligned.
  Value: text-sm bold, pure black, right-aligned within its own column.
  Delta: not applicable (no delta indicators in standard label).
  No glow or shadow — solid ink on paper.

signal-bar:
  Not applicable — no proportional fill bars exist in this system. The % Daily Value is numerical text only, not a visual bar.

status-cell:
  ok:   pure black text, no border, no fill.
  warn: pure black text, no border, no fill (same as ok — no color distinction).
  err:  red accent (#FF0000) text only; no border or fill change.
  Status is communicated solely by text color; no visual container.

data-table-row:
  Alternating: none — all rows have identical background (transparent or white).
  Cell border: hairline rule (0.5pt) between rows.
  Label: text-sm bold, uppercase for main rows; text-sm normal for sub-items.
  Value: text-sm bold, right-aligned.

chart-surface:
  Not applicable — no charts in this system. All data is tabular.

## 10. Layout

**Spacing cadence:** Strict rhythmic grid where horizontal rules appear every 1–2 rows. No extra white space between rows beyond the rule itself.

**Grid tendency:** Single-column narrow block (300–450px width). Never multi-column.

**Density:** High – every row is tightly packed; no padding beyond the box edge.

**Section separation logic:** Sections are separated by varying rule thickness (hairline vs. thick) and optional indentation. No section headers other than the main "Nutrition Facts" and "Calories" demarcation.

**Alignment philosophy:**
- All text in the left column is left-aligned
- All percentages in the right column are right-aligned, with a fixed gutter that prevents ragged right text in the left column
- Numeric values in the left column are also right-aligned within their own column

**Breakpoint behavior:**
- At 375px: box width reduces to fit screen but remains single-column; body type may drop from text-sm to text-xs (12px)
- At 768px: box width increases to 450px max; no multi-column expansion

**Motion:**
No motion. All state changes are instantaneous.
*Optional interactive variation: percentage values count up/down with 0.5s ease-out animation (transition: all 0.5s ease-out).*

## 11. Design System Notes

### 11a. Use Constraints

**Appropriate contexts:** Data-heavy interfaces (dashboards, product specifications, packaging details, posters, regulatory displays), information-dense panels that require instant scanning and trust, any project where "government document" authority is desired.

**Wrong contexts:** Creative/brand-driven designs (retail, lifestyle, entertainment), interfaces requiring imagery, gradients, or rounded elements, any project where the design should feel warm, playful, or emotional.

### 11b. Prompt Phrases

- "Strict black-on-white grid with double-headed rule lines"
- "Bold Nutrition Facts header in condensed sans, uppercase"
- "All-caps SERVING SIZE in small bold below the header"
- "Right-aligned percentage column with % symbol, fixed gutter from left text"
- "Thick horizontal rule separating Calories from remaining nutrients"
- "No images, no icons – only rules and type"
- "Tabular-lining figures for all numeric values"
- "Hairline rules between every 1–2 rows, no extra spacing"

### 11c. Do / Avoid Block

Each rule is a discrete triplet: the governing rule stated plainly, then the correct visual description, then the incorrect visual description.

rule: Use pure black (#000000) and pure white (#FFFFFF) exclusively — the system has no gray tones except in vintage grain overlay.
do:   All text, rules, and borders are solid black (#000000). Background is solid white (#FFFFFF). Optional red (#FF0000) only for the Calories value.
avoid:Use any gray (e.g., #808080) for text or rules, or any color other than black/white/red.

rule: Maintain strict horizontal rules at 1px (or 0.5pt) widths — no vertical rules, no dashed or dotted lines.
do:   The outer bounding box uses a 1px solid black border. Internal rows are separated by 0.5pt solid black hairline rules. A 2–3px thick rule separates the Calories row.
avoid:Use vertical columns separated by vertical rules, or any rule style other than solid black.

rule: Left-align all text labels; right-align all % values — the gutter between them must be fixed and consistent.
do:   Text labels in the left column are flush left. % values in the right column are flush right, separated by a fixed gutter (approx 1em). Numeric values in the left column (e.g., "5g") are also right-aligned within their own sub-column.
avoid:Center-align either column, or use a variable gutter that shifts with line length.

rule: Use all-caps sparingly — only for row-level headers like "TOTAL FAT" and "SERVING SIZE".
do:   "SERVING SIZE" and main nutrient names (e.g., "TOTAL FAT", "CHOLESTEROL") are set in bold, uppercase, text-sm. Sub-items and data values use sentence case (e.g., "Saturated Fat").
avoid:Set every text element in uppercase, or use title case on sub-items.

rule: Include the % Daily Value column — it must be present and formatted consistently.
do:   Every major nutrient row ends with a right-aligned percentage, e.g., "20%". The "%" symbol is attached to the number with no space. No decimal places for whole numbers.
avoid:Omit the % column entirely, or use a visual bar/icon to represent percentage instead of text.

rule: Indent sub-components by a fixed offset — no bullet points or icons before the label.
do:   Sub-items (e.g., "Saturated Fat" under "Total Fat") are indented by a fixed 1em left margin from the parent label. No bullet, dash, or icon precedes the text.
avoid:Use bullets, dashes, or any alternative indentation method (e.g., hanging indent, tab stops). Also avoid variable indentation.

### 11d. Variation Bounds

1. **Clean vs vintage print** – Crisp modern vector vs. scanned paper simulation (ink gain, misregistration, dot-grain, paper texture)
2. **Minimal data vs exhaustive** – Show only calories + 4 core nutrients vs. full FDA panel with vitamins and footnotes
3. **Monochrome vs spot color** – Pure black/white vs. red accent (#FF0000) for Calories value only
4. **Static vs real-time updating** – Fixed numbers vs. dynamically changing values with count-up animation (0.5s ease-out)
5. **Standard vs surreal content** – Authentic FDA layout vs. applying label style to non-food subjects (e.g., software metrics, human emotions)

### 11e. Compositional Signatures

Three canonical compositions that define how this design system behaves across contexts.
Each is described in enough detail to render a live DOM composition without creative invention.

### 11e.i — At Rest
The system in its default, single-composition state. What a typical screen looks like with no special conditions. Describe: dominant surface color, primary element type, spatial arrangement, typography treatment, surface/texture state.

A single Nutrition Facts label centered on a white (#FFFFFF) background. The label is a 300px‑wide box bounded by a 1px solid black outer border and a double hairline rule at the top and bottom. Inside, the header "Nutrition Facts" is set in condensed sans (Franklin Gothic Condensed, text-2xl, bold, uppercase, tracking-tight). Below it, "SERVING SIZE" in smaller bold uppercase (text-sm). The body rows are arranged in a vertical stack: each row contains a left-aligned label and a right-aligned % value, separated by a fixed gutter. Hairline rules (0.5pt) separate rows, with a thick 3px rule under the "Calories" line. The optional red accent (#FF0000) appears on the Calories numeric value. No shadows, no textures, no grain — pure crisp vector. The composition is static, no motion.

### 11e.ii — Maximum Expressiveness
The system with all its characteristic elements fully active — as if the one frame that needs to make the impression. Describe: which elements are present, their spatial relationships, animation states, effect layer order, any special compositional logic (e.g., elements bleeding off edge, overlapping planes, stacked layers).

A full FDA‑mandated label with every possible section: main nutrients, sub‑items (Saturated Fat, Trans Fat, Cholesterol, Sodium, Total Carbohydrate, Dietary Fiber, Sugars added, Protein, and a footnote block with %DV definitions). The label width is at maximum 450px. The red accent (#FF0000) is used for the Calories value and also for the "err" semantic state (if interactive). The double hairline rule at the top and bottom is present. The thick rule under Calories is 3px. For vintage print simulation, a paper grain overlay (feTurbulence, blend multiply 8% opacity) and a slight ink‑bleed blur (0.3px) on the hairline rules are applied. The red spot may have a 0.3px misregistration offset to the right. If interactive, the "Calories" value counts up with a 0.5s ease‑out animation on load. No other animations. No shadows, no rounded corners, no icons.

### 11e.iii — Data Context
How the system's visual language adapts when the content is numeric, tabular, or status-driven rather than commercial, editorial, or persuasive. Describe: how the surface treatment adapts, what the primary data element looks like in this system (a table, a meter, a status row, a dashboard panel), how typography hierarchy shifts for data labels vs. data values.

The system is inherently data‑driven: the entire label is a data table. Each row is a data pair: a category label (bold, uppercase or mixed case) and a numeric value (bold, right‑aligned) followed by a %Daily Value (right‑aligned with "%"). Sub‑items are indented with a fixed 1em margin. The primary data element is the row — a horizontal band consisting of three columns: label, value, %DV. The surface treatment remains pure white/black; no background fill changes. Typography hierarchy: category labels are text‑sm bold uppercase; sub‑item labels are text‑sm normal case; numeric values are text‑sm bold; footnote text is text‑xs light. Status is communicated by text color only (red for err, black otherwise). No chart, no gauge, no icon — pure tabular data. The semantic color mapping: ok=black, err=red, warn=black (no visual distinction). The table is single‑column, never multi‑column, with a fixed 300–450px width.

### 11f. Sources

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** The **Nutrition Facts panel** (slug `nutrition-label`) is the standardized label mandated by the U.S. Food and Drug Administration (FDA) for packaged foods and dietary supplements. Its canonical form debuted in **1993** under the **Nutrition Labeling and Education Act (NLEA)**, with a major revision effective in **2018** (the rule finalized in 2016). The typeface **Franklin Gothic Heavy** is attested for the title; the body text regulation specifies “a sans‑serif type,” most commonly **Helvetica**.

**Verified imagery sources.** 5 URLs verified against institutional servers, distributed across:
- U.S. Food and Drug Administration — 2 URL(s)
- Wikimedia Foundation — 1 URL(s)
- U.S. Government Publishing Office (eCFR) — 1 URL(s)
- U.S. Government Publishing Office (GovInfo) — 1 URL(s)

Key references include the FDA’s official record of the final rule at **https://www.federalregister.gov/documents/2016/05/27/2016-11867/food-labeling-revision-of-the-nutrition-and-supplement-facts-labels**. The standard visual prototype is reproduced in the FDA’s “Nutrition Facts Label” guidance document.

**Named typefaces.** The typography of this style is attested as:
- Franklin Gothic Heavy (designed by Morris Fuller Benton for American Type Founders 1903 — attestation: conventional) — rendered here in Libre Franklin as the closest open substitute
- Helvetica ( — attestation: conventional) — rendered here in Inter as the closest open substitute

**Honest gaps.** The most significant gap is the **exact typeface name for body text** on the first official prototype. The regulation says “a sans‑serif type,” Franklin Gothic Heavy is attested for the title, and the body is most commonly Helvetica or Arial, but which font was used on the *first* official prototype is not documented. This gap could be resolved by locating the original 1993 prototype proofs or FDA archivist notes.
