# Ink & Code

A minimal developer portfolio design system. Typographic precision meets terminal-native clarity such as sharp, confident, and built for developers who let their work speak.

The aesthetic pairs **Geist** (geometric sans-serif) for prose with **Geist Mono** for all UI chrome, labels, and tags by mirroring the way developers think. A single burnt orange accent on a deep warm-black canvas. No gradients, no decorative shadows. Depth through tonal surface layers alone.

## Files

| File | Description |
|------|-------------|
| `DESIGN.md` | The complete design system specification in DESIGN.md format, including both structured YAML design tokens (frontmatter) and human-readable style guidance (markdown body). |
| `tailwind.config.js` | A Tailwind CSS v3 theme configuration derived from the design tokens in the DESIGN.md frontmatter. Covers colors, typography, border-radius, and spacing. Component tokens are intentionally excluded — Tailwind's utility-first approach handles component styling through composition of these primitives. |
| `design_tokens.json` | A [Design Tokens Community Group](https://www.designtokens.org/) JSON file containing all design tokens from the DESIGN.md frontmatter, including component-level tokens. This format is interoperable with tools like Figma, Style Dictionary, and other token pipelines. |