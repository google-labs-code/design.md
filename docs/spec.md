<!-- Generated from spec.mdx + spec-config.ts | version: alpha -->
<!-- Do not edit directly. Run `bun run spec:gen` to regenerate. -->

# DESIGN.md Format

DESIGN.md is a self-contained, plain-text representation of a design system. It defines the visual identity of a brand and product, thereby ensuring that these stylistic choices can be followed across design sessions and between different AI agents and tools.  As a human-readable, open-format document, it serves as a living source of truth that both humans and AI can understand and refine.

A DESIGN.md file contains two parts: human-readable markdown prose and machine-readable YAML design tokens. The markdown body sections provide human-readable design rationale and guidance. Prose may use descriptive color names (e.g., "Midnight Forest Green") that correspond to systematic token names (e.g., `primary`). The tokens are the normative values; the prose provides context for how to apply them.

# Design Tokens

DESIGN.md may embed design tokens in a structured format. The system that we use to describe design tokens is inspired by the
[Design Token JSON spec](https://www.designtokens.org/tr/2025.10/format/#abstract). Specifically, we adopt the concept of typed token groups (colors, typography, spacing) and the `{path.to.token}` reference syntax for cross-referencing values.

These tokens are easily converted from or to `tokens.json`, Figma variables, and Tailwind theme configs.

Design tokens may be embedded into `DESIGN.md` in two ways:

1. **YAML Front Matter:** Placed at the beginning of the file. The front matter block must begin with a line containing exactly `---` and end with a line containing exactly `---`.
2. **Interleaved YAML Code Blocks:** Distributed throughout the document as fenced ` ```yaml ` code blocks placed within the relevant markdown section.

Both approaches may be used together in the same document, for example, placing document metadata like `name` and `description` in the front matter, while placing section tokens like `colors` and `typography` in fenced code blocks inside their respective sections. When multiple YAML blocks are present, all blocks are parsed and merged into a single design token tree. Each top-level schema key may be defined at most once across the entire document; defining the same top-level key in multiple blocks is an error.

Front Matter Example:

```yaml
---
version: alpha
name: Daylight Prestige
colors:
  primary: "#1A1C1E"
  secondary: "#6C7278"
  tertiary: "#B8422E"
typography:
  h1:
    fontFamily: Public Sans
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.02em
---
```

Interleaved YAML Code Block Example:

````markdown
---
version: alpha
name: Daylight Prestige
description: Editorial design system with high-contrast neutrals.
---

## Colors

The palette is rooted in high-contrast neutrals and a single accent color.

```yaml
colors:
  primary: "#1A1C1E"
  secondary: "#6C7278"
  tertiary: "#B8422E"
```

## Typography

The typography strategy leverages Public Sans for headlines and narrative.

```yaml
typography:
  h1:
    fontFamily: Public Sans
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.02em
```
````

## Schema

Below is the schema for the design tokens:

```yaml
version: <string>          # optional, current version: "alpha"
name: <string>
description: <string>      # optional
omitted: <string[]|OmittedSection[]> # optional
colors:
  <token-name>: <Color>
  <group-name>:            # optional nested group
    <token-name>: <Color>
typography:
  <token-name>: <Typography>
  <group-name>:            # optional nested group
    <token-name>: <Typography>
rounded:
  <scale-level>: <Dimension>
  <group-name>:            # optional nested group
    <scale-level>: <Dimension>
spacing:
  <scale-level>: <Dimension | number>
  <group-name>:            # optional nested group
    <scale-level>: <Dimension | number>
motion:
  <token-name>: <Motion>
components:
  <component-name>:
    <token-name>: <string|token reference>
```

The `<scale-level>` placeholder represents a named level in a sizing or spacing scale. Common level names include `xs`, `sm`, `md`, `lg`, `xl`, and `full`. Any descriptive string key is valid.

**Color**: A color value is any valid CSS color string. Supported formats include:

- Hex: `#RGB`, `#RGBA`, `#RRGGBB`, `#RRGGBBAA`
- Named colors: `red`, `cornflowerblue`, `transparent`
- Functional: `rgb()`, `rgba()`, `hsl()`, `hsla()`, `hwb()`
- Wide-gamut: `oklch()`, `oklab()`, `lch()`, `lab()`
- Mixing: `color-mix(in srgb, ...)`

All color values are internally converted to sRGB for WCAG contrast checking. The original format is preserved for display and export.

Hex notation (`#RRGGBB`) remains the recommended default for simplicity and broad tooling support.

- `fontFamily` (string)
- `fontSize` (Dimension)
- `fontWeight` (number) - A numeric font weight value (e.g., `400`, `700`). In YAML, this may be expressed as either a bare number or a quoted string; both are equivalent.
- `lineHeight` (Dimension | number) - Accepts either a Dimension (e.g., `24px`, `1.5rem`) or a unitless number (e.g., `1.6`). A unitless number represents a multiplier of the element's `fontSize`, which is the recommended CSS practice.
- `letterSpacing` (Dimension)
- `fontFeature` (string) - configures
  [`font-feature-settings`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-feature-settings).
- `fontVariation` (string) - configures
  [`font-variation-settings`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-variation-settings).

**Dimension**: A dimension value is a string with a unit suffix. Valid units are: px, em, rem.

**Duration**: A duration value is a string with a `ms` unit suffix (e.g., `100ms`, `250ms`).

**Motion**: A motion token is an object that maps a purpose-driven motion name to its timing properties:

- `duration` (Duration) - The length of time a transition takes to complete (e.g., `100ms`, `250ms`).
- `delay` (Duration) - The time to wait before a transition starts (e.g., `0ms`, `50ms`).
- `timingFunction` (string) - A CSS easing function such as `linear`, `ease`, `ease-in`, `ease-out`, `ease-in-out`, `steps(...)`, or `cubic-bezier(...)`.

**Omitted**: An array of sections that are intentionally omitted from the design system. This suppresses linter warnings for missing sections (e.g. colors, typography, spacing, rounded, motion, components). Each entry can be:

* A string representing the section name (e.g., `spacing`)
* An object of the form `{ section: string, reason?: string }` mapping a section to a documented reason for its omission:
  ```yaml
  omitted:
    - spacing
    - section: rounded
      reason: "No rounded corners defined in brand book"
  ```

**Grouped Tokens**: Top-level token categories (`colors`, `typography`, `rounded`, and `spacing`) accept optional nested YAML sub-maps to organize tokens into logical groups. Groups are organizational and carry no behavior. Names such as `light`, `dark`, `sm`, and `lg` are examples, not reserved words. Grouped tokens are flattened internally to dot-separated paths (e.g., `<category>.<group-name>.<token-name>`) and can be nested up to 20 levels deep. Mixing flat hyphenated keys (e.g., `colors.primary-light`) and nested grouped keys (e.g., `colors.primary.light`) that produce identical flattened CSS custom property names (`--color-primary-light`) is rejected as an error by the linter, as are duplicate token paths.

**Token References**: A token reference must be wrapped in curly braces, and contain a dot-separated object path to another value in the YAML tree. For most token groups, the reference must point to a primitive value (e.g., `colors.primary-60` or `colors.light.surface`), not a group (e.g., `colors` or `colors.light`). Within the `components` section, references to composite values (e.g., `{typography.label-md}` or `{typography.sm.headline-lg}`) are permitted.

# External References

An external reference in `DESIGN.md` prose is an inline code span whose entire content matches `@<path>[#<fragment>]`. `<path>` uses `/` separators, contains no whitespace, and ends in a file extension. Anything else is ordinary code or prose.

| Text | Reference? |
|---|---|
| `@components/button.html` | Yes |
| `@tokens.json` | Yes |
| `@media`, `@font-face` | No: no file extension |
| `@scope/package` | No: no file extension |
| @components/button.html with no code span | No: avoids trailing punctuation and user mentions |

`#<fragment>` names one part of the target file. A fragment is an opaque name with no whitespace whose meaning depends on the target's file type:

* **Markdown (`.md`, `.markdown`):** A heading, matched by its slug (for example, `@guides/color.md#contrast`).
* **HTML (`.html`, `.htm`):** An element `id`, or a `<!-- COMPONENT: name -->` marker (for example, `@components/button.html#button-primary`).
* **Fallback:** A consumer that does not understand a fragment for a given file type ignores the fragment, uses the whole file, and must not treat the reference as broken.

Key paths in data files, exported names in source files, and named rules in stylesheets are reserved for future versions using the same syntax.

Every reference, both in `DESIGN.md` and in any file it references, resolves from the directory containing `DESIGN.md`, never relative to the file the reference appears in:

```text
DESIGN.md
guides/color.md          contains `@components/card.html`
components/card.html     <- resolves here, not guides/components/card.html
```

The same string names the same file everywhere, keeping the reference graph stable regardless of which file an agent reads from. A leading `/` or any path that resolves outside the `DESIGN.md` directory is an error.

The `broken-ref` rule validates external `@`-references alongside token references:

* A leading `/` or a path that resolves outside the `DESIGN.md` directory is an `error`.
* A missing target file or a missing Markdown or HTML fragment anchor is a `warning`.
* A fragment on any other file type is noted (`info`) without warning.

# Sections

Every `DESIGN.md` follows the same structure. Sections can be omitted if they're not relevant to your project, but those present should appear in the sequence listed below. All sections use `<h2>` (`##`) headings. An optional `<h1>` heading may appear for document titling purposes but is not parsed as a section.

### Section Order

1. **Overview** (also: "Brand & Style")
2. **Colors**
3. **Typography**
4. **Layout** (also: "Layout & Spacing")
5. **Elevation & Depth** (also: "Elevation")
6. **Shapes**
7. **Motion & Micro-interaction** (also: "Motion & Micro-interactions", "Motion")
8. **Voice & Content Strategy**
9. **Components**
10. **Do's and Don'ts**

### Prose and Tokens

## Overview

Also known as "Brand & Style".

This section is a holistic description of a product's look and feel. It defines the brand personality, target audience, and the emotional response the UI should evoke, such as whether it should feel playful or professional, dense or spacious. It serves as foundational context for guiding the agent's high-level stylistic decisions when a specific rule or token isn't explicitly defined.

## Colors

This section defines the color palettes for the design system.

At least the `primary` color palette must be defined (at the top level or within a group), and additional color palettes may be defined as needed.

When there are multiple color palettes, the design system may assign a semantic role for each palette. A common convention is to name the palettes in this order: `primary`, `secondary`, `tertiary`, and `neutral`.

Example:

```markdown
## Colors

The palette is rooted in high-contrast neutrals and a single, evocative accent color.

- **Primary (#1A1C1E):** A deep ink used for headlines and core text to provide
  maximum readability and a sense of permanence.
- **Secondary (#6C7278):** A sophisticated slate used primarily for utilitarian
  elements like borders, captions, and metadata.
- **Tertiary (#B8422E):** A vibrant earthy red as the sole driver for
  interaction, used exclusively for primary actions and critical highlights.
- **Neutral (#F7F5F2):** A warm limestone that serves as the foundation for all
  pages, providing a softer, more organic feel than pure white.
```

### Design Tokens

The `colors` section defines all color design tokens. The color tokens should be derived from the key color palettes defined in the markdown prose. The exact mapping from color palettes to color tokens may follow any consistent naming convention.

It is a
map\<string, Color> (with optional nested group sub-maps), that maps the name or dot-separated group path of the color token to its value.

```yaml
colors:
  primary: "#1A1C1E"
  secondary: "#6C7278"
  tertiary: "#B8422E"
  neutral: "#F7F5F2"
```

For adaptive light and dark themes, mode-agnostic brand and semantic roles can remain at the top level while mode-dependent surface and text tokens are grouped under optional `light` and `dark` sub-maps:

```yaml
colors:
  primary: "#647D66"
  on-primary: "#FFFFFF"
  secondary: "#FF8A65"
  on-secondary: "#FFFFFF"
  error: "#BA1A1A"
  light:
    surface: "#FAFDF7"
    on-surface: "#1A1C19"
    surface-container: "#FFFFFF"
    surface-container-low: "#F4F7F1"
  dark:
    surface: "#10130E"
    on-surface: "#E2E4DE"
    surface-container: "#1A1C19"
    surface-container-low: "#14170F"
```

## Typography

This section defines typography levels.

Most design systems have 9 - 15 typography levels. The design system may prescribe a role for each typography level.

A common naming convention for typography levels is to use semantic categories such as `headline`, `display`, `body`, `label`, `caption`. Each category may further be divided into different sizes, such as `small`, `medium`, and `large`.

Example:

```markdown
## Typography

The typography strategy leverages two distinct weights of **Public Sans** for
the narrative and **Space Grotesk** for technical data.

- **Headlines:** Set in Public Sans Semi-Bold to establish an institutional
  and trustworthy voice.
- **Body:** Public Sans Regular at 16px ensures contemporary professionalism
  and long-form readability.
- **Labels:** Space Grotesk is used for all technical data, timestamps, and
  metadata. Its geometric construction evokes the precision of a digital
  stopwatch. Labels are strictly uppercase with generous letter spacing.
```

### Design Tokens

The `typography` section defines the precise font properties for the typography design tokens.

It is a
map\<string, Typography> (with optional nested group sub-maps).

```yaml
typography:
  h1:
    fontFamily: Public Sans
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.02em
  body-md:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.1em
```

For responsive typography, tokens can be grouped under breakpoint sub-maps while breakpoint-agnostic styles remain at the top level. The recommended (but not required) group names for responsive design are `sm`, `md`, `lg`, and `xl` (mobile, tablet, laptop, and desktop, respectively):

```yaml
typography:
  body-md:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  sm:
    headline-lg:
      fontFamily: Public Sans
      fontSize: 32px
      fontWeight: 600
      lineHeight: 1.15
  lg:
    headline-lg:
      fontFamily: Public Sans
      fontSize: 48px
      fontWeight: 600
      lineHeight: 1.1
```

## Layout

Also known as "Layout & Spacing".

This section describes the layout and spacing strategy.

Many design systems follow a grid-based layout. Others, like Liquid Glass, use margins, safe areas, and dynamic padding.

Example:

```markdown
## Layout

The layout follows a **Fluid Grid** model for mobile devices and a
**Fixed-Max-Width Grid** for desktop (max 1200px).

A strict 8px spacing scale (with a 4px half-step for micro-adjustments) is used to maintain a consistent rhythm. Components are grouped using "containment" principles, where related items are housed in cards with generous internal padding (24px) to emphasize the soft, approachable nature of the brand.
```

### Design Tokens

The spacing section defines the spacing design tokens. These may include spacing units that are useful for implementing the layout model. For example, a fixed grid layout may have spacing units for column spans, gutters, and margins.

It is a
map\<string, Dimension | number> (with optional nested group sub-maps) that maps the spacing scale identifier or group path to a dimension value or a unitless number (e.g., column counts or ratios).

```yaml
spacing:
  base: 16px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  gutter: 24px
  margin: 32px
```

For responsive layout metrics, spacing tokens can also be grouped under breakpoint sub-maps (recommended: `sm`, `md`, `lg`, and `xl` for mobile, tablet, laptop, and desktop, respectively):

```yaml
spacing:
  base: 16px
  xs: 4px
  sm:
    gutter: 16px
    margin: 16px
    columns: 4
  lg:
    gutter: 24px
    margin: 32px
    columns: 12
```

## Elevation & Depth

Also known as "Elevation".

This section describes how visual hierarchy is conveyed based on the design style. If elevation is used, it defines the required styling (spread, blur, color). For flat designs, this section explains the alternative methods used to convey visual hierarchy (e.g., borders, color contrast).

Example:

```markdown
## Elevation & Depth

Depth is achieved through **Tonal Layers** rather than heavy shadows. The
background uses a soft off-white or very light green, while primary content sits on pure white cards.
```

## Shapes

This section describes how visual elements are shaped.

Example:

```markdown
## Shapes

The shape language is defined by **Architectural Sharpness**. All interactive
elements, containers, and inputs utilize a minimal **4px corner radius**. This
provides just enough softness to feel modern while maintaining a rigid,
engineered aesthetic.
```

### Design Tokens

The `rounded` section defines the design tokens for rounded corners used in
buttons, cards, and other rectangular shapes.

It is a map\<string, Dimension> (with optional nested group sub-maps).

```yaml
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  full: 9999px
```

## Motion & Micro-interaction

Also known as "Motion & Micro-interactions" or "Motion".

This section describes how the interface moves. It pairs prose choreography rules with structured `motion` tokens so transitions feel consistent and respect user motion preferences:

* **What moves**: State changes on interactive elements, surfaces entering and leaving, and content loading, as well as what deliberately does not move.
* **Duration rhythm**: Small, local changes are faster than large structural transitions.
* **Easing intent**: Elements entering the screen decelerate, elements leaving accelerate, and elements staying on screen use a symmetric curve.
* **Restraint**: Honor `prefers-reduced-motion` and avoid animating properties that force layout recalculation (prefer `transform` and `opacity`).

Example:

```markdown
## Motion & Micro-interaction

Motion is quick and understated. Interactive feedback lands within a tenth of a second so the interface feels immediate, while surfaces that enter the screen take longer and decelerate. Nothing loops, and nothing moves purely for decoration. Honor `prefers-reduced-motion`.
```

### Design Tokens

The `motion` section defines purpose-named motion tokens (such as `state-change`, `surface-enter`, and `surface-exit`) rather than raw speed labels. Each entry maps a semantic motion name to its timing properties (`duration`, `delay`, and `timingFunction`).

It is a map\<string, Motion>.

```yaml
motion:
  state-change:
    duration: 100ms
    delay: 0ms
    timingFunction: ease-out
  surface-enter:
    duration: 250ms
    delay: 0ms
    timingFunction: cubic-bezier(0.2, 0, 0, 1)
  surface-exit:
    duration: 150ms
    delay: 0ms
    timingFunction: cubic-bezier(0.3, 0, 1, 1)
```

## Voice & Content Strategy

This section defines how the product writes. Interface copy is part of the design system: inconsistent tense, capitalization, or terminology degrades visual cohesion just as clearly as inconsistent spacing does. This section is prose-only and covers:

* **Tone of voice**: Two or three adjectives describing the brand voice, with a short explanation of what they sound like in practice and what they rule out.
* **Capitalization**: Sentence case or title case, applied consistently across headings, buttons, form labels, and menu items.
* **Terminology**: The product's canonical names for its own concepts and the synonyms to avoid.
* **Button and action labels**: The grammar of interactive labels (e.g., verb phrases naming the outcome rather than generic labels like "OK" or "Submit").
* **Empty, loading, and error states**: What an empty list says, what an error message says, and whether an error suggests a specific next action.
* **Numbers, dates, and units**: Conventions for date/time formats, relative time, number rounding, and unit spacing.

Example:

```markdown
## Voice & Content Strategy

- **Tone of voice:** Precise, calm, and utilitarian. Avoid exclamation marks, marketing hyperbole, and conversational filler.
- **Capitalization:** Sentence case applied consistently across all headings, buttons, form labels, and menu items.
- **Terminology:** Use "Workspace" (never "Project" or "Repo") and "Member" (never "User" or "Collaborator"). Pick one word per concept and keep it.
- **Button and action labels:** Use a verb phrase naming the outcome (e.g., "Save changes", "Create workspace"), never vague labels like "OK" or "Submit".
- **Empty, loading, and error states:** Empty states explain what belongs in the list and provide a direct creation CTA. Error messages state what failed and suggest a specific next action.
- **Numbers, dates, and units:** Format dates as `YYYY-MM-DD` in tables, use relative time ("3m ago") in activity feeds, and separate numeric values from units with a space (`16 px`).
```

## Components

This section provides style guidance for component atoms within the design system. The following are common component types. Design systems are encouraged to define additional components relevant to their domain.

* **Buttons**: Covers primary, secondary, and tertiary variants, including sizing, padding, and states.
* **Chips**: Covers selection chips, filter chips, and action chips.
* **Lists**: Covers styling for list items, dividers, and leading/trailing elements.
* **Tooltips**: Covers positioning, colors, and timing.
* **Checkboxes**: Covers checked, unchecked, and indeterminate states.
* **Radio buttons**: Covers selected and unselected states.
* **Input fields**: Covers text inputs, text areas, labels, helper text, and error states.

> **Note:** The components specification is actively evolving. The current structure provides intentional flexibility for domain-specific component definitions while the spec matures.

### Design Tokens

The components section defines a collection of design tokens used to ensure consistent styling of common components. It's a map\<string, map\<string, string>> that maps a component identifier to a group of sub token names and values. The design token values may be literal values, or references to previously defined design tokens.

**Variants**. A component may have a variant for different UI states such as active, hover, pressed, etc. Those variant components may be defined under a different but related key, for example, "button-primary", "button-primary-hover", "button-primary-active". The agent will consider all variants and make the appropriate styling decisions.

```yaml
components:
  button-primary:
    backgroundColor: "{colors.primary-60}"
    textColor: "{colors.primary-20}"
    rounded: "{rounded.md}"
    padding: 12px
  button-primary-hover:
    backgroundColor: "{colors.primary-70}"
```

### Component Property Tokens

Each component has a set of properties that are themselves design tokens:

- backgroundColor: \<Color\>
- textColor: \<Color\>
- typography: \<Typography\>
- rounded: \<Dimension\>
- padding: \<Dimension\>
- size: \<Dimension\>
- height: \<Dimension\>
- width: \<Dimension\>

The components section may use [external references](#external-references) to point to further elaboration of the component kit, such as component templates in HTML or component source code in JSX.

```markdown
## Components

Component implementations live as individual HTML sticker sheet files in `components/`. Each file contains the canonical, styled HTML components with `<!-- COMPONENT: name -->` comment markers. Read each file before use.

- **Buttons** → `@components/button.html` — `button-primary`, `button-secondary`, `button-tertiary`, `button-icon`
- **Cards** → `@components/card.html` — `card-elevated`, `card-outlined`
- **Input Fields** → `@components/input-field.html` — `input-default`, `input-error`, `input-disabled`
```

## Do's and Don'ts

This section provides practical guidelines and common pitfalls. These act as guardrails when creating designs.

```markdown
## Do's and Don'ts

- Do use the primary color only for the single most important action per screen
- Don't mix rounded and sharp corners in the same view
- Do maintain WCAG AA contrast ratios (4.5:1 for normal text)
- Don't use more than two font weights on a single screen
```

# Recommended Token Names (Non-Normative)

The following names are commonly used across design systems. They are not required but are provided as guidance for consistency.

**Colors:** `primary`, `secondary`, `tertiary`, `neutral`, `surface`, `on-surface`, `error`

**Typography:** `headline-display`, `headline-lg`, `headline-md`, `body-lg`, `body-md`, `body-sm`, `label-lg`, `label-md`, `label-sm`

**Rounded:** `none`, `sm`, `md`, `lg`, `xl`, `full`

**Motion:** `state-change`, `surface-enter`, `surface-exit`

**Theme Mode Groups:** `light`, `dark`

**Responsive Breakpoint Groups:** `sm` (mobile), `md` (tablet), `lg` (laptop), `xl` (desktop)

# Consumer Behavior for Unknown Content

When a DESIGN.md consumer encounters content not defined by this spec:

| Scenario | Behavior | Example |
|---|---|---|
| Unknown section heading | Preserve; do not error | `## Iconography` |
| Unknown color token name | Accept if value is valid | `surface-container-high: '#ede7dd'` |
| Unknown typography token name | Accept as valid typography | `telemetry-data` |
| Unknown motion token name | Accept as valid motion | `page-transition` |
| Unknown spacing value | Accept; store as string if not a valid dimension | `grid-columns: '5'` |
| Grouped token sub-map | Flatten to dot-separated token path | `colors.light.surface`, `typography.sm.headline-lg` |
| Flat and grouped token name collision | Error; reject the conflicting token | `colors.primary-light` and `colors.primary.light` |
| Unknown component property | Accept with warning | `borderColor` |
| External `@`-reference in prose | Preserve; resolve referenced file on demand | `@components/button.html`, `@tokens.json` |
| External `@`-reference fragment for unsupported file type | Ignore fragment and use whole file; do not treat as broken | `@src/button.tsx#Button` |
| Duplicate section heading | Error; reject the file | Two `## Colors` headings |
| Duplicate top-level YAML key | Error; reject the file | `colors` defined in both front matter and a code block |
