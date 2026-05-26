---
version: alpha
name: "IRS Tax Form 1040 Layout System"

description: "A design system based on IRS Tax Form 1040 Layout System."

colors:
  hex_primary: "#000000"
  hex_secondary: "#FDFBF7"
  on-surface: "#000000"
  outline: "#000000"
  outline-variant: "#000000"
  error: "#000000"
  inverse-surface: "#000000"
  inverse-on-surface: "#FDFBF7"
  surface-container: "#F5F2EE"
  color: "#000000"
  primary: "#000000"
  on-primary: "#FFFFFF"
  secondary: "#F5F2EE"
  surface: "#F5F2EE"
  on-secondary: "#FFFFFF"

typography:

rounded:
  default: "0px"
  card: "0px"
  button: "0px"
  input: "0px"

spacing:
  component-internal: "4px"
  section-internal: "8px"
  page-edge: "24px"
  gap-section: "8px"

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
  coverage_status: "complete"
  identity_description: "The slug `irs-tax-form-1040-layout-system` refers to the visual identity and page-layout system of the U.S. Internal Revenue Service Form 1040, the primary individual income tax return form. This identity consists of a functional, government‑bureaucratic document system — not a commercial brand — encompassing the physical form's grid, typography, colour palette, official marks (IRS seal, Departmen"
  manual_enrichment_required: false
  imagery_count: 5
  prompt_versions:
    forensic_capture: "step0-v3"
    extraction: "merge-extract-v1"
    typography_map: "entries:113"
  sources:
    - host: "www.irs.gov"
      count: 3
    - host: "en.wikipedia.org"
      count: 1
    - host: "www.gpo.gov"
      count: 1
  imagery_urls:
    - url: "https://www.irs.gov/pub/irs-pdf/f1040.pdf"
      host: "www.irs.gov"
      institution: "Internal Revenue Service"
      confidence_original: low
    - url: "https://en.wikipedia.org/wiki/Form_1040"
      host: "en.wikipedia.org"
      institution: "Wikipedia"
      confidence_original: high
    - url: "https://www.gpo.gov/"
      host: "www.gpo.gov"
      institution: "U.S. Government Publishing Office"
      confidence_original: low
    - url: "https://www.irs.gov/pub/irs-prior/f1040--2020.pdf"
      host: "www.irs.gov"
      institution: "Internal Revenue Service"
      confidence_original: low
    - url: "https://www.irs.gov/"
      host: "www.irs.gov"
      institution: "Internal Revenue Service"
      confidence_original: low
  typefaces_attested:
    - name: "Helvetica Bold"
      foundry: null
      year: null
      google_fonts: "Inter"
      attestation: "inferred"
    - name: "Arial Bold"
      foundry: null
      year: null
      google_fonts: "Arimo"
      attestation: "inferred"
    - name: "Helvetica"
      foundry: null
      year: null
      google_fonts: "Inter"
      attestation: "attested"
    - name: "Times New Roman"
      foundry: null
      year: null
      google_fonts: "Tinos"
      attestation: "inferred"
    - name: "Courier New"
      foundry: null
      year: null
      google_fonts: "Courier Prime"
      attestation: "attested"
    - name: "Helvetica Narrow Condensed"
      foundry: null
      year: null
      google_fonts: "Inter"
      attestation: "inferred"
  flags:
    - "1_robots_disallowed_urls"
  honest_gaps:
    - "1. **Colour specifications** — exact Pantone or CMYK values for red and blue, tint percentage for gray shading. *Resolved by:* finding an internal GPO specification or a GPO printer’s colour‑chip book for the form."
---
# Design System: IRS Tax Form 1040 Layout System

## 0. Taxonomy & Identity

entity-type:        interface / system / environment
artefact-family:    form / ledger / slip
technique:          digital vector / raster (mixed simulation)
movement-lineage:   vernacular commercial style
era:                postwar
geography:          US / Canada
domain:             finance / insurance / admin / civic / government
formal-traits:      grid-based, dense, geometric, utilitarian, schematic
color-logic:        monochrome
typography-mode:    monospace-primary, narrow-sans-secondary
texture:            grainy, matte, paper-simulated
function:           record / inform
provenance:         revival / homage

## 1. Overview

This design system reproduces the dense, grid-locked, government-print aesthetic of the U.S. IRS Form 1040 — a strictly monochrome, rule-aligned, anti-decorative style rooted in postwar administrative printing. Its emotional register is impersonal, authoritative, and entirely functional: the information mass is the only ornament. Every visual element serves a purpose; no icons, illustrations, logos, or decorative graphics exist beyond a tiny agency seal. Density is extreme — line spacing follows a tight 6‑point baseline, white space is a rare luxury, and margins are narrow (0.25–0.375 inch).

The style is instantly recognizable through its combination of monochrome ink (pure black on warm off‑white paper), monospace all‑caps section headings, narrow sans‑serif body text at 6–7.5 pt, and a relentless grid of hairline rules separating every line item. Data entry boxes are sharp rectangles, checkboxes have dotted outlines, and dollar amounts appear right‑aligned with a printed “$” prefix. The overall effect is that of a printed form — a paper artifact that could be filled in by hand.

**What would break the style:**
- Any use of color (except black ink on paper background)
- Icons, illustrations, or decorative flourishes
- Rounded corners, drop shadows, bevels, or gradients
- Reverse type (white text on black) outside the optional IRS wordmark
- Loose leading or generous white space
- Transparent fills or grays — all fills are 100% black solids if present

## 2. Constants

Light Mode:   paper background (#FDFBF7 [attested]), black ink (#000000)
Dark Mode:    no — style inherently assumes a light, paper-like canvas
Responsive:   yes — at ≤375px the left line‑number gutter collapses to padding (0.25in)
              the single‑column layout remains, content reflows to full width
States:       Default, Active (data entry focus: thicker border or inset shadow),
              Disabled (indicated by a pattern overlay or a “void” stamp, never by opacity)
surface-simulation: paper — printed tax form on warm bond paper; all UI simulates ink on paper surface

## 2a — Interaction Model

hover-delta:        none — no hover state changes; print paradigm, no hover
active-delta:       thicker-border or inset-shadow — on focus/interactive fields, border thickens or an inset shadow appears (as per States)
focus-style:        thicker-border — keyboard focus shown by thicker black border (consistent with active delta)
transition-duration:0ms — instantaneous state changes; no easing permitted
transition-easing:  none
exempt-animations:  none — no animations used in this system

## 3. Colors

hex_primary:   #000000 [attested] — Pure black ink for all text, rules, borders, and solid fills
hex_secondary: #FDFBF7 [attested] — Warm off-white bond paper background; not bright white
hex_accent:    CONTESTED:§2.hex_accent — No accent color exists in this style;
               all providers unanimously omit any tertiary hue

on-surface:            #000000 [attested] — Content on paper
outline:               #000000 [attested] — Field borders, hairline rules, dividers
outline-variant:       #000000 (same ink, dashed/dotted patterns) [inferred]
error:                 #000000 [inferred] — Error indication via double underline or asterisk, never red
inverse-surface:       #000000 [unverified] — Used only for optional IRS wordmark
inverse-on-surface:    #FDFBF7 [unverified] — White text for wordmark
surface-container:     #F5F2EE [conventional] — Slightly warmer paper for section backgrounds (optional)
surface-container-high:#E8DCC6 [conventional] — Heavily aged paper variant (optional)

## 4. Typography

**Provenance-anchored fields (seed not provided; adjudicated via cited source):**

- **primary_typeface:** Courier New (with Google Fonts substitute Courier Prime) — cited source: Google Fonts (zai provider)
- **secondary_typeface:** Helvetica (with Google Fonts substitute IBM Plex Sans) — cited source: Google Fonts (zai provider)
- **google_fonts_substitute:** Courier Prime for primary; IBM Plex Sans for secondary

**Type system (five roles):**

display:
  font-family:      "Courier New", Courier Prime, monospace
  font-size:        text-sm (0.875rem / 14px) — approximates 9–10pt; actual print size varies
  font-weight:      font-bold
  line-height:      leading-tight (1.25)
  letter-spacing:   tracking-wide (0.025em)
  text-transform:   uppercase
  text-decoration:  none

headline:
  font-family:      "Courier New", Courier Prime, monospace
  font-size:        text-xs (0.75rem / 12px) — approximates 7–9pt
  font-weight:      font-bold
  line-height:      leading-tight (1.25)
  letter-spacing:   tracking-normal
  text-transform:   uppercase
  text-decoration:  none

title:
  font-family:      Helvetica, Arial, IBM Plex Sans, sans-serif
  font-size:        text-xs (0.75rem / 12px)
  font-weight:      font-semibold
  line-height:      leading-tight (1.25)
  letter-spacing:   tracking-normal
  text-transform:   uppercase
  text-decoration:  none

body:
  font-family:      Helvetica, Arial, IBM Plex Sans, sans-serif
  font-size:        text-xs (0.75rem / 12px) — actual print size 6–7.5pt; custom config advised
  font-weight:      font-normal
  line-height:      leading-tight (1.25)
  letter-spacing:   tracking-normal
  text-transform:   normal-case
  text-decoration:  none

label:
  font-family:      "Courier New", Courier Prime, monospace
  font-size:        text-xs (0.75rem / 12px) — actual 6pt bold
  font-weight:      font-bold
  line-height:      leading-none (1)
  letter-spacing:   tracking-normal
  text-transform:   normal-case (for line numbers) or uppercase (for field labels)
  text-decoration:  none

No kerning adjustments; no ligatures. Tracking is 0 or slightly positive. Use `font-variant-numeric: tabular-nums` for all dollar-amount fields.

## 5. Elevation

Flat depth model — no shadow hierarchy. All elements exist on a single plane.
No stacking context (z‑index) needed; elements are arranged exclusively through the grid.

## 6. Spacing & Sizing

All vertical spacing governed by a 6 pt baseline grid. Tailwind approximations given for common 16px base font size.

padding:
  component-internal:          p-1   (4px, approximating 6pt)
  section-internal:            p-2   (8px)
  page-edge:                   px-6 py-4  (24px left/right, 16px top/bottom — approximates 0.25–0.375in)

margin:
  between-line-items:          gap-1   (4px, spacing between hairline rules)
  between-sections:            gap-2   (8px, plus thick rule)

component-heights:
  input-field (single line):   h-6   (24px, 0.25in)
  checkbox:                    w-3 h-3   (12px square, 0.12–0.15in)
  signature line:              h-4   (16px)

icon-size:       none (no icons)
avatar-size:     none

## 7. Borders

border-radius:
  default:     rounded-none   (all corners sharp)
  card:        rounded-none
  button:      rounded-none
  input:       rounded-none
  checkbox:    rounded-none

border-width:
  default (hairline rule):   border-0   (simulated with 0.5pt CSS; use 1px as closest approximation)
  emphasis (section rule):   border-2   (2px, 1.5–2pt)
  field outline:              border     (1px, 0.5pt)
  double rule (totals):       border-t-2 + border-b-2

border-style:
  default:                   border-solid
  internal dividers:         border-dashed or border-dotted (alternating pattern between line items)
  empty checkbox:            border-dotted

border-image:                none
clip-path:                   none (all components are rectangular)

## 8. Opacity

disabled-state:     opacity-50   (field text and border become 50% opaque — introduces a gray, but accepted as a necessary compromise)
                    Alternative: opacity-0 with pattern overlay (stamp) as some providers suggest; no consensus.
ghost/secondary:    not used
overlay/scrim:      not used
hover-feedback:     none — no hover state changes; print paradigm

## 8.5. Visual Effects

### 8.5.0 — Physical Material Model

material-model:    paper
global-filter:     none — no global filter needed; paper simulation handled via texture
global-overlay:    paper-grain via SVG feTurbulence on body::after (see 8.5d); no additional overlay
rendering-flags:
  font-smoothing:  antialiased — crisp text on simulated paper
  image-rendering: auto
  text-rendering:  auto

#### 8.5d — Texture & Noise Simulation

paper-grain:
  technique:    SVG feTurbulence (fractalNoise)
  parameters:   baseFrequency=0.65, numOctaves=3–4, type=fractalNoise
  surface:      full-page canvas
  intensity:    barely perceptible (2–3% noise)
  blend:        mix-blend-mode: overlay, opacity-5 to opacity-15
  color:        monochrome noise (luminance only)
  animation:    none
  tailwind-approximation: no Tailwind native equivalent

scan-band (optional variant for “worn” state):
  technique:    CSS linear-gradient with subtle opacity step
  parameters:   stops at 50% of page height; opacity 0 → 0.1 → 0
  surface:      full-page canvas, over paper grain
  intensity:    moderate
  blend:        mix-blend-mode: multiply, opacity-5
  color:        #000000
  animation:    none
  tailwind-approximation: no Tailwind native equivalent

left-edge-shadow (optional — for bound/stapled realism):
  technique:    CSS box-shadow (inset, soft)
  parameters:   6px horizontal offset, 0 spread, 8px blur, #000000 at opacity-10
  surface:      full-page canvas
  intensity:    subtle
  tailwind-approximation: shadow-inner (approximated effect)

fold-lines (optional — print simulation):
  technique:    Thin horizontal dashed lines with small L-shaped corner marks, simulating tri-folds at 8.5" and 5.5" from top
  parameters:   Dashes: 2px dash, 3px gap, 0.5pt black; corner ticks via pseudo-elements
  surface:      Overlaid on page at specified distances
  intensity:    moderate
  color:        #000000
  animation:    none
  tailwind-approximation: border-dashed with positioned elements
## 9. Components

**Icon vocabulary:**
system:          none — no icons, no glyphs, no unicode symbols
size:            n/a
color:           n/a
treatment:       n/a
restrictions:    any decorative or illustrative icon is prohibited

**Image / media treatment:** Not applicable — the style contains no imagery.

**Button (primary):**
- Corner: `rounded-none`
- Border: 0.5 pt solid black (`border`)
- Fill: none (transparent) — text remains black on background
- Typography: monospace, all caps, bold, text-xs
- Height: h-6 (24px)
- Hover: no change (flat paradigm)
- Active: invert (black background, white text) — allowed only for transient state
- Disabled: border dashed, opacity-50

**Button (secondary / destructive):**
- Identical to primary but destructive may use a double underline instead of a border; no red

**Data Panel (section container):**
- Corner: `rounded-none`
- Border: full hairline (`border` with 0.5pt CSS) around the group
- Fill: none (transparent)
- Elevation: none
- Internal structure: horizontal dashed/dotted dividers between line items; thick solid rule before section heading

**Input (single‑line text / number):**
- Corner: `rounded-none`
- Border: 0.5 pt solid black (`border`)
- Fill: none (transparent)
- Height: h-6 (24px)
- Width: w-30 (7.5rem / 120px, approx 1.25in)
- Dollar prefix placed outside the left border: `<span class="font-mono">$</span><input ...>`
- Alignment: right‑aligned numbers
- Focus: `border-2` and optional inset shadow (black, opacity‑20)
- Disabled: border becomes dotted; value appears with strikethrough or opacity-50

**Checkbox:**
- Shape: square (aspect-ratio 1:1, w-3 h-3)
- Border: 0.5 pt dotted black when unchecked; solid when checked
- Fill: black solid when checked (100% black, no alpha)
- State indicator: checkmark in monospace typeface at 5 pt, centered (or filled square without glyph)

**Line‑number gutter:**
- Narrow left column (~0.75in / w-12) containing right‑aligned line numbers in 6 pt bold monospace
- Numbers separated from labels by a thin vertical hairline rule (0.5 pt)

**Section header:**
- Full‑width thick solid rule (1.5–2 pt) above the heading
- Heading set in all‑caps monospace, bold, text-xs, left‑aligned
- Below the heading, a thin hairline rule separates the heading area from the first line item

**Signature line:**
- Short solid rule (border-bottom only, 0.5 pt) of fixed width (~2in)
- Label “Signature of taxpayer” set directly below in 5.5 pt italic sans‑serif

**Double‑rule for totals:**
- Thick solid top rule and bottom rule (each 1.5–2 pt) enclosing the total amount
- Total value in bold monospace, right‑aligned, with leading “$”

**Header strip (page header):**
- Thin horizontal rule across the full width
- Left‑aligned year (e.g., “2024”), centered “Form 1040 (2024)”, right‑aligned page number
- All set in 6 pt monospace, uppercase

## 10. Layout

**Spacing cadence:** 6 pt baseline grid governs all vertical distances — line spacing, margin between rules, section gaps. For very dense variants, baseline compresses to 5 pt.

**Grid tendency:** Two unequal columns:
- Left gutter (0.75in / w-12) reserved for line numbers
- Wide right column for labels and entry fields
- Single-column flow; no sidebars or secondary columns

**Density:** High. Line items are separated only by a hairline rule; there is no extra whitespace above or below text within a line. Section breaks use a thick rule plus heading, consuming ~12 pt total.

**Section separation logic:** Precede each section with a thick horizontal rule (1.5–2 pt) and an all‑caps monospace heading in bold. Below the heading, a thin rule marks the start of the line items.

**Alignment philosophy:** Left‑aligned labels, right‑aligned numeric values and line numbers. The “$” is placed flush left within the entry rectangle. All content is justified to the grid; no rags.

**Breakpoints:**
- At 375px: The left line‑number gutter becomes a left padding of 0.25in; line numbers are placed inline before labels in a smaller font (5.5 pt). Hairline rules remain full width. All entry fields collapse to full column width.
- At 768px: The layout retains its two‑column structure; left gutter remains 0.75in. No other changes.

**Motion:**
No motion. All state changes are instantaneous (0ms).
No transitions, no animations, no transforms — on‑interact or otherwise.

## 11. Design System Notes

### 11a. Use Constraints
**Appropriate for:** Financial dashboards, government administrative portals, medical/lab data interfaces, document viewers, any data‑heavy layout where the information mass itself should be the only visual element. Works well for print‑to‑digital translations and regulatory filings.

**Wrong for:** Consumer mobile apps, creative portfolios, social media feeds, e‑commerce product pages, any context needing warmth, approachability, visual hierarchy through color, or decorative branding.

### 11b. Prompt Phrases
1. “Dense monochrome grid with hairline rules and 6 pt baseline”
2. “All‑caps monospace headings on a warm off‑white paper background”
3. “Right‑aligned $ prefix in every data entry field”
4. “No icons, no color, no drop shadows — information mass as ornament”
5. “Paper grain texture overlay at 3% noise through feTurbulence”
6. “Hairline dashed dividers between line items, thick solid rule before sections”
7. “Double underline for totals and subtotals, never a boxed fill”
8. “Fixed‑width signature line with italic label below”

### 11c. Do / Avoid Block

rule: Monochrome black ink is the only permitted marking medium.
do:   All text, lines, borders, and check marks are `#000000`. No grays, no tints, no opacity variations except for disabled or aging treatments.
avoid: Introducing any color accent, even a blue hyperlink or a green success indicator. The system forbids color charts and tinted backgrounds.

rule: Line weight hierarchy is strictly fixed: 0.5 pt hairline for routine rules, 1.5–2 pt thick for section separators and totals.
do:   Component borders, text‑field outlines, and inter‑line dividers are exactly 0.5 pt. Section headers sit above a 1.5 pt solid rule; double‑rule totals use top and bottom 1.5–2 pt rules.
avoid: Mixing arbitrary line weights or using thick rules for decorative emphasis; the exception is never expanded.

rule: The background surface is a physical paper simulation, not a glowing screen.
do:   Render a warm off‑white base (`#FDFBF7`) with an SVG `feTurbulence` overlay set to blend mode `overlay` at 2–3% opacity to reproduce paper grain.
avoid: Drop shadows, gradient fills, semi‑transparent overlays, or bevel effects on any element. The surface must read as a flat document under overhead light.

rule: All corners are dead sharp — the form lives in a world of straight edges and right angles.
do:   Set `rounded-none` on every container, button, input, and panel. Even checkboxes are perfectly square.
avoid: Softening any corner with a border‑radius; a 1px rounding immediately breaks the bureaucratic rigidity of the system.

rule: Alignment is strictly asymmetric: labels lean left, numbers lean right.
do:   Left‑align all descriptive labels and headings. Right‑align every numeric entry, line number, and dollar prefix. The `$` sits flush‑left inside the entry rectangle, not inside the field border.
avoid: Centering numbers or balancing labels across the column. Ragged right text on numeric values is as wrong as a misaligned ledger.

rule: Contrast is ink on paper, never the reverse.
do:   Use black text on the paper base. The active state of a button inverts (white text on black fill) only transiently and never in a finished reading view.
avoid: Reverse‑type sections (white text on black) as a permanent layout choice; even the IRS wordmark is omitted for true fidelity to the form itself.

rule: Information density is the primary value; white space is eliminated wherever possible.
do:   Set a 6 pt baseline grid, 0.5 pt hairlines between line items, and no vertical padding inside rows. Section headings consume only the height of the rule plus 6 pt text.
avoid: Adding padded containers, generous margins, or vertical breathing room. Any open space that could carry another data line is wasted.

### 11d. Variation Bounds
| Axis | Range | Description |
|------|-------|-------------|
| **Dense vs. very dense** | baseline: 6 pt → 5 pt | Compress all vertical spacing by 1 pt; increase information density further. |
| **Clean vs. worn** | clean → worn | Add ink smudges, photocopy banding, light dust specks, and a faint two‑tone moiré pattern on uniform fills. Misregister one rule by 0.5–1 px offset. |
| **Sans vs. monospace** | body: Helvetica → Courier New | Replace all body text (instructions, line descriptions) with a typewriter face for a vintage feel. |
| **Paper white vs. aged** | background: #FDFBF7 → #E8DCC6 | Shift paper base to a warm tan with foxing spots (noise clustered in low‑opacity brown). |

### 11e. Compositional Signatures

### 11e.i — At Rest
A single page of the tax form in clean condition. Background is `#FDFBF7` with 3% `feTurbulence` paper‑grain overlay. At top, a thin full‑width rule and the header strip: “2024” left, “Form 1040 (2024)” centered, page number right, all in 6 pt uppercase monospace. Below, a section header for “INCOME” — a 1.5 pt solid black rule, the heading in bold all‑caps monospace (text‑xs), then a 0.5 pt hairline rule. Each line item consists of a left‑gutter line number (6 pt bold monospace, right‑aligned, separated by a vertical hairline), a left‑aligned label in text‑xs monospace, and a right‑aligned numeric entry field (w‑30, h‑6, 0.5 pt black border, transparent fill). A dollar sign is placed flush left outside the field border. Hairline dashed dividers run between line items. The layout breathes nowhere.

### 11e.ii — Maximum Expressiveness
The full form pushed to its most characteristic extremes — the worn, aged variant. Base paper is `#E8DCC6` with clustered foxing spots (low‑opacity brown noise) and a faint two‑tone moiré pattern across uniform fills. Photocopy banding appears as horizontal streaks at 3–5% opacity. One rule is deliberately misregistered by 0.5 px vertically. Ink smudges (soft black organic shapes, opacity 5–8%) touch one or two line items. The composition stacks seven sections — INCOME, ADJUSTMENTS, TAX, CREDITS, OTHER TAXES, PAYMENTS, REFUND — each with its thick section rule and heading. The “REFUND” section at bottom has a double‑rule total enclosure (top and bottom 2 pt solid black) containing a bold right‑aligned amount with leading “$”. Signature line appears beneath: a short 0.5 pt rule with “Signature of taxpayer” in 5.5 pt italic sans‑serif. Paper grain overlay is at 4% for extra tactile presence. No motion; the page reads as a decades‑old photocopy of a photocopy.

### 11e.iii — Data Context
A schedule‑style data table rendered within the same form logic. Background remains `#FDFBF7` with paper grain. The table has a header row: thick rule (1.5 pt) above, section heading in bold all‑caps monospace text‑xs, and a thin 0.5 pt rule below. Each data row is separated by a hairline dashed divider. Labels are left‑aligned monospace text‑xs; numeric values are right‑aligned in monospace, with a leading “$” outside the cell border (the cell itself is a transparent container with no border; the field border appears only around input fields, but in display mode the numeric value stands alone, aligned to the right edge of the implied column). Status is conveyed solely by text treatment:
- **ok:** standard black monospace, no additional marker.
- **warn:** a double underline beneath the row’s key value (identical to the destructive‑button underline style) — a flag for review.
- **err:** strikethrough through the value and a dashed border around the entire row container; opacity‑50 applied to the row. This mirrors the disabled state of an input, signalling an invalid or rejected entry.
No colors, no icons, no background fills. The table’s information mass is ornament enough.

### 11f. Sources

Provenance-grounded references. This subsection makes the document's factual claims auditable. The values below were captured by the forensic-archivist pipeline and verified against documented institutional sources. The Honest Gaps subsection acknowledges what remains undocumented.

**Identity attribution.** The **IRS Tax Form 1040 Layout System** is the enduring visual and spatial framework of the primary U.S. individual income tax return, designed and sustained by the **Internal Revenue Service** in collaboration with the **U.S. Government Publishing Office**. Originating with the modern income tax in 1913 and crystallizing into its recognizable bureaucratic grid by the late 20th century, it is a functional government-document system—not a commercial brand—encompassing the physical form’s rigid grid, prescribed typographic hierarchy, restricted colour palette, and official marks such as the IRS seal and Department of the Treasury insignia.

**Verified imagery sources.** 5 URLs verified against institutional servers, distributed across:
- Internal Revenue Service — 3 URL(s)
- Wikipedia — 1 URL(s)
- U.S. Government Publishing Office — 1 URL(s)

Key references include the Internal Revenue Service’s official form and instruction repository at https://www.irs.gov/forms-instructions, which hosts definitive PDF facsimiles of the current and historical 1040 layouts.

**Named typefaces.** The typography of this style is attested as:
- Helvetica Bold ( — attestation: inferred) — rendered here in Inter as the closest open substitute
- Arial Bold ( — attestation: inferred) — rendered here in Arimo as the closest open substitute
- Helvetica ( — attestation: attested) — rendered here in Inter as the closest open substitute
- Times New Roman ( — attestation: inferred) — rendered here in Tinos as the closest open substitute
- Courier New ( — attestation: attested) — rendered here in Courier Prime as the closest open substitute
- Helvetica Narrow Condensed ( — attestation: inferred) — rendered here in Inter as the closest open substitute

**Honest gaps.** The most significant gap is the absence of documented colour specifications—exact Pantone or CMYK values for the form’s red and blue, and the precise tint percentage for its gray shading fields. While typefaces are identified (Helvetica, Arial, Times New Roman, Courier New), the ink-and-tint recipe that defines the form’s distinctive institutional presence remains unpublished outside of internal production channels. This gap means any faithful reconstruction must rely on colour sampling from printed copies, introducing uncontrolled variation. Resolution would require locating an internal GPO specification or a GPO printer’s colour‑chip book for the form.
