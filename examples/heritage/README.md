# Heritage

An editorial design system for premium long-form publications. Architectural Minimalism meets Journalistic Gravitas — high-contrast neutrals, a single accent color, and motion tuned for editorial restraint rather than performance.

This example demonstrates the `motion` token group: durations, cubic-bezier easings, and composite transitions referenced from components.

## Files

| File | Description |
|------|-------------|
| `DESIGN.md` | The complete design system specification, including motion tokens. |

## Generating exports

```bash
npx @google/design.md export --format json-tailwind DESIGN.md > tailwind.theme.json
npx @google/design.md export --format css-tailwind  DESIGN.md > theme.css
npx @google/design.md export --format dtcg          DESIGN.md > tokens.json
```

The DTCG export emits motion tokens as W3C-conformant `duration`, `cubicBezier`, and `transition` types ready for Style Dictionary, Tokens Studio, or Figma Variables.
