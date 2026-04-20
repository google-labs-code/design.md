<!-- Generated from spec.mdx + spec-config.ts | version: alpha -->
<!-- Do not edit directly. Run `bun run spec:gen` to regenerate. -->

# DESIGN.md Format

DESIGN.md is a self-contained, plain-text representation of a design system. It defines the visual identity of a brand and product, thereby ensuring that these stylistic choices can be followed across design sessions and between different AI agents and tools.  As a human-readable, open-format document, it serves as a living source of truth that both humans and AI can understand and refine.

A DESIGN.md file contains two parts: An optional YAML frontmatter, and a markdown body. The YAML front matter contains machine-readable design tokens. The markdown body sections provide human-readable design rationale and guidance. Prose may use descriptive color names (e.g., "Midnight Forest Green") that correspond to systematic token names (e.g., `primary`). The tokens are the normative values; the prose provides context for how to apply them.

# Design Tokens

DESIGN.md may embed design tokens in a structured format. The system that we use to describe design tokens is inspired by the
[Design Token JSON spec](https://www.designtokens.org/tr/2025.10/format/#abstract). Specifically, we adopt the concept of typed token groups (colors, typography, spacing) and the `{path.to.token}` reference syntax for cross-referencing values.

These tokens are easily converted from or to `tokens.json`, Figma variables, and Tailwind theme configs.

Design tokens are embedded as YAML front matter at the beginning of the file. The front matter block must begin with a line containing exactly `---` and end with a line containing exactly `---`. The YAML content between these delimiters is parsed according to the schema defined below.

Example:

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

## Schema

Below is the schema for the design tokens defined in the front matter:

```yaml
version: <string>          # optional, current version: "alpha"
name: <string>
description: <string>      # optional
colors:
  <token-name>: <Color>
typography:
  <token-name>: <Typography>
rounded:
  <scale-level>: <Dimension>
spacing:
  <scale-level>: <Dimension | number>
components:
  <component-name>:
    <token-name>: <string|token reference>
```

The `<scale-level>` placeholder represents a named level in a sizing or spacing scale. Common level names include `xs`, `sm`, `md`, `lg`, `xl`, and `full`. Any descriptive string key is valid.

**Color**: A color value must start with "#" followed by a hex color code in the SRGB color space.

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

**Token References**: A token reference must be wrapped in curly braces, and contain an object path to another value in the YAML tree. For most token groups, the reference must point to a primitive value (e.g., `colors.primary-60`), not a group (e.g., `colors`). Within the `components` section, references to composite values (e.g., `{typography.label-md}`) are permitted.

# Sections

Every `DESIGN.md` follows the same structure. Sections can be omitted if they're not relevant to your project, but those present should appear in the sequence listed below. All sections use `<h2>` (`##`) headings. An optional `<h1>` heading may appear for document titling purposes but is not parsed as a section.

### Section Order

1. **Overview** (also: "Brand & Style")
2. **Colors**
3. **Typography**
4. **Layout** (also: "Layout & Spacing")
5. **Elevation & Depth** (also: "Elevation")
6. **Shapes**
7. **Components**
8. **Do's and Don'ts**

### Prose and Tokens

## Overview

Also known as "Brand & Style".

This section is a holistic description of a product's look and feel. It defines the brand personality, target audience, and the emotional response the UI should evoke, such as whether it should feel playful or professional, dense or spacious. It serves as foundational context for guiding the agent's high-level stylistic decisions when a specific rule or token isn't explicitly defined.

## Colors

This section defines the color palettes for the design system.

At least the `primary` color palette must be defined, and additional color palettes may be defined as needed.

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
map\<string, Color>, that maps the name of the color token to its value.

```yaml
colors:
  primary: "#1A1C1E"
  secondary: "#6C7278"
  tertiary: "#B8422E"
  neutral: "#F7F5F2"
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
map\<string, Typography>

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
map\<string, Dimension | number> that maps the spacing scale identifier to a dimension value or a unitless number (e.g., column counts or ratios).

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

It is a map\<string, Dimension>.

```yaml
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  full: 9999px
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

# Consumer Behavior for Unknown Content

When a DESIGN.md consumer encounters content not defined by this spec:

| Scenario | Behavior | Example |
|---|---|---|
| Unknown section heading | Preserve; do not error | `## Iconography` |
| Unknown color token name | Accept if value is valid | `surface-container-high: '#ede7dd'` |
| Unknown typography token name | Accept as valid typography | `telemetry-data` |
| Unknown spacing value | Accept; store as string if not a valid dimension | `grid-columns: '5'` |
| Unknown component property | Accept with warning | `borderColor` |
| Duplicate section heading | Error; reject the file | Two `## Colors` headings |
