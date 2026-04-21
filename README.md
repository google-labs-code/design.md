# DESIGN.md

A format specification for describing a visual identity to coding agents. DESIGN.md gives agents a persistent, structured understanding of a design system.

## The Format

A DESIGN.md file combines machine-readable design tokens (YAML front matter) with human-readable design rationale (markdown prose). Tokens give agents exact values. Prose tells them *why* those values exist and how to apply them.

```md
---
name: Heritage
colors:
  primary: "#1A1C1E"
  secondary: "#6C7278"
  tertiary: "#B8422E"
  neutral: "#F7F5F2"
typography:
  h1:
    fontFamily: Public Sans
    fontSize: 3rem
  body-md:
    fontFamily: Public Sans
    fontSize: 1rem
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 0.75rem
rounded:
  sm: 4px
  md: 8px
spacing:
  sm: 8px
  md: 16px
---

## Overview

Architectural Minimalism meets Journalistic Gravitas. The UI evokes a
premium matte finish — a high-end broadsheet or contemporary gallery.

## Colors

The palette is rooted in high-contrast neutrals and a single accent color.

- **Primary (#1A1C1E):** Deep ink for headlines and core text.
- **Secondary (#6C7278):** Sophisticated slate for borders, captions, metadata.
- **Tertiary (#B8422E):** "Boston Clay" — the sole driver for interaction.
- **Neutral (#F7F5F2):** Warm limestone foundation, softer than pure white.
```

An agent that reads this file will produce a UI with deep ink headlines in Public Sans, a warm limestone background, and Boston Clay call-to-action buttons.

## Getting Started

Validate a DESIGN.md against the spec, catch broken token references, check WCAG contrast ratios, and surface structural findings — all as structured JSON that agents can act on.

```bash
npx @google/design.md lint DESIGN.md
```

```json
{
  "findings": [
    {
      "severity": "warning",
      "path": "components.button-primary",
      "message": "textColor (#ffffff) on backgroundColor (#1A1C1E) has contrast ratio 15.42:1 — passes WCAG AA."
    }
  ],
  "summary": { "errors": 0, "warnings": 1, "info": 1 }
}
```

Compare two versions of a design system to detect token-level and prose regressions:

```bash
npx @google/design.md diff DESIGN.md DESIGN-v2.md
```

```json
{
  "tokens": {
    "colors": { "added": ["accent"], "removed": [], "modified": ["tertiary"] },
    "typography": { "added": [], "removed": [], "modified": [] }
  },
  "regression": false
}
```

## The Specification

The full DESIGN.md spec lives at [`docs/spec.md`](docs/spec.md). What follows is a condensed reference.

### File Structure

A DESIGN.md file has two layers:

1. **YAML front matter** — Machine-readable design tokens, delimited by `---` fences at the top of the file.
2. **Markdown body** — Human-readable design rationale organized into `##` sections.

The tokens are the normative values. The prose provides context for how to apply them.

### Token Schema

```yaml
version: <string>          # optional, current: "alpha"
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
    <token-name>: <string | token reference>
```

### Token Types

| Type | Format | Example |
|:-----|:-------|:--------|
| Color | `#` + hex (sRGB) | `"#1A1C1E"` |
| Dimension | number + unit (`px`, `em`, `rem`) | `48px`, `-0.02em` |
| Token Reference | `{path.to.token}` | `{colors.primary}` |
| Typography | object with `fontFamily`, `fontSize`, `fontWeight`, `lineHeight`, `letterSpacing`, `fontFeature`, `fontVariation` | See example above |

### Section Order

Sections use `##` headings. They can be omitted, but those present must appear in this order:

| # | Section | Aliases |
|:--|:--------|:--------|
| 1 | Overview | Brand & Style |
| 2 | Colors | |
| 3 | Typography | |
| 4 | Layout | Layout & Spacing |
| 5 | Elevation & Depth | Elevation |
| 6 | Shapes | |
| 7 | Components | |
| 8 | Do's and Don'ts | |

### Component Tokens

Components map a name to a group of sub-token properties:

```yaml
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.sm}"
    padding: 12px
  button-primary-hover:
    backgroundColor: "{colors.tertiary-container}"
```

Valid component properties: `backgroundColor`, `textColor`, `typography`, `rounded`, `padding`, `size`, `height`, `width`.

Variants (hover, active, pressed) are expressed as separate component entries with a related key name.

### Consumer Behavior for Unknown Content

| Scenario | Behavior |
|:---------|:---------|
| Unknown section heading | Preserve; do not error |
| Unknown color token name | Accept if value is valid |
| Unknown typography token name | Accept as valid typography |
| Unknown component property | Accept with warning |
| Duplicate section heading | Error; reject the file |

## CLI Reference

### Installation

```bash
npm install @google/design.md
```

Or run directly:

```bash
npx @google/design.md lint DESIGN.md
```

All commands accept a file path or `-` for stdin. Output defaults to JSON.

### `lint`

Validate a DESIGN.md file for structural correctness.

```bash
npx @google/design.md lint DESIGN.md
npx @google/design.md lint --format json DESIGN.md
cat DESIGN.md | npx @google/design.md lint -
```

| Option | Type | Default | Description |
|:-------|:-----|:--------|:------------|
| `file` | positional | required | Path to DESIGN.md (or `-` for stdin) |
| `--format` | `json` | `json` | Output format |

Exit code `1` if errors are found, `0` otherwise.

### `diff`

Compare two DESIGN.md files and report token-level changes.

```bash
npx @google/design.md diff DESIGN.md DESIGN-v2.md
```

| Option | Type | Default | Description |
|:-------|:-----|:--------|:------------|
| `before` | positional | required | Path to the "before" DESIGN.md |
| `after` | positional | required | Path to the "after" DESIGN.md |
| `--format` | `json` | `json` | Output format |

Exit code `1` if regressions are detected (more errors or warnings in the "after" file).

### `export`

Export DESIGN.md tokens to other formats (tailwind, dtcg).

```bash
npx @google/design.md export --format tailwind DESIGN.md > tailwind.theme.json
npx @google/design.md export --format dtcg DESIGN.md > tokens.json
```

| Option | Type | Default | Description |
|:-------|:-----|:--------|:------------|
| `file` | positional | required | Path to DESIGN.md (or `-` for stdin) |
| `--format` | `tailwind` \| `dtcg` | required | Output format |

### `spec`

Output the DESIGN.md format specification (useful for injecting spec context into agent prompts).

```bash
npx @google/design.md spec
npx @google/design.md spec --rules
npx @google/design.md spec --rules-only --format json
```

| Option | Type | Default | Description |
|:-------|:-----|:--------|:------------|
| `--rules` | boolean | `false` | Append the active linting rules table |
| `--rules-only` | boolean | `false` | Output only the linting rules table |
| `--format` | `markdown` \| `json` | `markdown` | Output format |

## Linting Rules

The linter runs seven rules against a parsed DESIGN.md. Each rule produces findings at a fixed severity level.

| Rule | Severity | What it checks |
|:-----|:---------|:---------------|
| `broken-ref` | error | Token references (`{colors.primary}`) that don't resolve to any defined token |
| `missing-primary` | warning | Colors are defined but no `primary` color exists — agents will auto-generate one |
| `contrast-ratio` | warning | Component `backgroundColor`/`textColor` pairs below WCAG AA minimum (4.5:1) |
| `orphaned-tokens` | warning | Color tokens defined but never referenced by any component |
| `token-summary` | info | Summary of how many tokens are defined in each section |
| `missing-sections` | info | Optional sections (spacing, rounded) absent when other tokens exist |
| `missing-typography` | warning | Colors are defined but no typography tokens exist — agents will use default fonts |
| `section-order` | warning | Sections appear out of the canonical order defined by the spec |

### Programmatic API

The linter is also available as a library:

```typescript
import { lint } from '@google/design.md/linter';

const report = lint(markdownString);

console.log(report.findings);       // Finding[]
console.log(report.summary);        // { errors, warnings, info }
console.log(report.designSystem);   // Parsed DesignSystemState
```

## Design Token Interoperability

DESIGN.md tokens are inspired by the [W3C Design Token Format](https://www.designtokens.org/). The `export` command converts tokens to other formats:

- **Tailwind theme config** — `npx @google/design.md export --format tailwind DESIGN.md`
- **DTCG tokens.json** ([W3C Design Tokens Format Module](https://tr.designtokens.org/format/)) — `npx @google/design.md export --format dtcg DESIGN.md`

## Status

The DESIGN.md format is at version `alpha`. The spec, token schema, and CLI are under active development. Expect changes to the format as it matures.

## Disclaimer

This project is not eligible for the [Google Open Source Software Vulnerability
Rewards Program](https://bughunters.google.com/open-source-security).