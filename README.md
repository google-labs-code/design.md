# DESIGN.md

> **About this fork**
>
> This is a fork of [google-labs-code/design.md](https://github.com/google-labs-code/design.md). Upstream defines the core DESIGN.md format and a linter; this fork extends both to push DESIGN.md closer to a complete, agent-ready design system spec.
>
> **What changed**
>
> - **Expanded token vocabulary** — color ramps and semantic pairs as schema primitives, modern color formats (transparent hex, etc.), and richer component property coverage in the linter.
> - **New token domains** — themes (light/dark), motion, iconography, voice & copy, and a layout system (responsive breakpoints, grid, page templates, layout rules).
> - **Tailwind v4 output** — generator emits a shadcn-style `:root` + `@theme inline` CSS, with foreground pairs renamed to the `<pair>-foreground` convention and radius lifted into `:root`.
> - **Evaluation harness** — a sketch eval suite that checks DESIGN.md fidelity across copy, semantic, and vision layers on top of token extraction.
> - **Docs** — token-storage documentation and a local-clone `bun` CLI workflow in the README.
>
> **Why**
>
> Upstream DESIGN.md focuses on the format and a linter for it. The goal of this fork is to test whether DESIGN.md can drive *real* agent output end-to-end: enough tokens to describe a full design system (not just color/type/spacing), a generator that produces idiomatic modern CSS, and evals to measure how faithfully an agent reproduces the intended design.

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
bun run cli lint DESIGN.md
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
bun run cli diff DESIGN.md DESIGN-v2.md
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
| Color | hex (sRGB) or any CSS color function: `rgb()`, `hsl()`, `oklch()`, `oklab()`, `lab()`, `color(display-p3 …)` | `"#1A1C1E"`, `"oklch(70% 0.15 200)"` |
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

Valid component properties: `backgroundColor`, `textColor`, `typography`, `rounded`, `padding`, `size`, `height`, `width`, `gap`, `border`, `outline`, `opacity`, `boxShadow`, `transition`, `backdropFilter`.

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

This fork is not published to npm. Clone the repo and install dependencies with [Bun](https://bun.sh):

```bash
git clone https://github.com/joesteinkamp/design.md.git
cd design.md
bun install
```

Then run the CLI from the repo root via the `cli` script defined in `package.json`:

```bash
bun run cli lint DESIGN.md
```

All commands accept a file path or `-` for stdin. Output defaults to JSON.

### `lint`

Validate a DESIGN.md file for structural correctness.

```bash
bun run cli lint DESIGN.md
bun run cli lint --format json DESIGN.md
cat DESIGN.md | bun run cli lint -
bun run cli lint --fix DESIGN.md   # rewrite the file with auto-fixes applied
```

| Option | Type | Default | Description |
|:-------|:-----|:--------|:------------|
| `file` | positional | required | Path to DESIGN.md (or `-` for stdin) |
| `--format` | `json` | `json` | Output format |
| `--fix` | boolean | `false` | Apply auto-fixes (currently: section order) and rewrite the input file |

Exit code `1` if errors are found, `0` otherwise.

### `fix`

Apply auto-fixes to a DESIGN.md file. Today the only fix is reordering sections into the canonical order; more fixes will follow. By default the fixed content is written to stdout, leaving the input file untouched.

```bash
bun run cli fix DESIGN.md > DESIGN.fixed.md
bun run cli fix --write DESIGN.md   # rewrite in place
```

| Option | Type | Default | Description |
|:-------|:-----|:--------|:------------|
| `file` | positional | required | Path to DESIGN.md (or `-` for stdin) |
| `--write` | boolean | `false` | Rewrite the input file instead of streaming to stdout |
| `--format` | `json` \| `text` | `json` | Format for the report when `--write` is used |

### `diff`

Compare two DESIGN.md files and report token-level changes.

```bash
bun run cli diff DESIGN.md DESIGN-v2.md
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
bun run cli export --format tailwind DESIGN.md > theme.css
bun run cli export --format dtcg DESIGN.md > tokens.json
```

The `tailwind` format emits a Tailwind v4 `@theme` stylesheet — Tailwind v4 deprecates `tailwind.config.js` in favor of CSS-first configuration via `@theme { --color-*; --font-*; ... }`. Import the generated file from your app's main stylesheet alongside `@import "tailwindcss";`.

| Option | Type | Default | Description |
|:-------|:-----|:--------|:------------|
| `file` | positional | required | Path to DESIGN.md (or `-` for stdin) |
| `--format` | `tailwind` \| `dtcg` | required | Output format |

### `spec`

Output the DESIGN.md format specification (useful for injecting spec context into agent prompts).

```bash
bun run cli spec
bun run cli spec --rules
bun run cli spec --rules-only --format json
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

- **Tailwind v4 `@theme` CSS** — `bun run cli export --format tailwind DESIGN.md`
- **DTCG tokens.json** ([W3C Design Tokens Format Module](https://tr.designtokens.org/format/)) — `bun run cli export --format dtcg DESIGN.md`

## Status

The DESIGN.md format is at version `alpha`. The spec, token schema, and CLI are under active development. Expect changes to the format as it matures.

## Disclaimer

This project is not eligible for the [Google Open Source Software Vulnerability
Rewards Program](https://bughunters.google.com/open-source-security).