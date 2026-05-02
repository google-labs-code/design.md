# Paws & Paths

A warm, friendly design system for a dog-walking and pet care platform. Built around "Golden Retriever" orange primary and "Sky Walk" blue secondary colors, with Plus Jakarta Sans typography for an approachable yet premium feel.

## Files

| File | Description |
|------|-------------|
| `DESIGN.md` | The complete design system specification in DESIGN.md format, including both structured YAML design tokens (frontmatter) and human-readable style guidance (markdown body). |
| `theme.css` | A Tailwind CSS v4 `@theme` stylesheet derived from the design tokens in the DESIGN.md frontmatter. Covers colors, typography, border-radius, and spacing as CSS custom properties (`--color-*`, `--font-*`, `--text-*`, `--radius-*`, `--spacing-*`). Component tokens are intentionally excluded — Tailwind's utility-first approach handles component styling through composition of these primitives. |
| `design_tokens.json` | A [Design Tokens Community Group](https://www.designtokens.org/) JSON file containing all design tokens from the DESIGN.md frontmatter, including component-level tokens. This format is interoperable with tools like Figma, Style Dictionary, and other token pipelines. |
