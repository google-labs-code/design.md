# Atmospheric Glass

A glassmorphism-driven weather application design system. Frosted crystalline panels float over vibrant gradient backgrounds, transforming complex meteorological data into a serene, premium visual experience. Uses a monochromatic white palette with varying alpha channels for luminosity and depth.

## Files

| File | Description |
|------|-------------|
| `DESIGN.md` | The complete design system specification in DESIGN.md format, including both structured YAML design tokens (frontmatter) and human-readable style guidance (markdown body). |
| `theme.css` | A Tailwind CSS v4 `@theme` stylesheet derived from the design tokens in the DESIGN.md frontmatter. Covers colors, typography, border-radius, and spacing as CSS custom properties (`--color-*`, `--font-*`, `--text-*`, `--radius-*`, `--spacing-*`). Component tokens are intentionally excluded — Tailwind's utility-first approach handles component styling through composition of these primitives. |
| `design_tokens.json` | A [Design Tokens Community Group](https://www.designtokens.org/) JSON file containing all design tokens from the DESIGN.md frontmatter, including component-level tokens. This format is interoperable with tools like Figma, Style Dictionary, and other token pipelines. |
