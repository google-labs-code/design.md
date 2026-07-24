# Change Log

AI-made changes to this fork, with the decisions behind them. Newest first.

## 2026-07-24 — Synced fork with upstream v0.3.0 (branch `sync/upstream-0.3.0`, Claude)

**Ask:** analyze upstream's 37-commit lead, then merge it.

**What changed:** all upstream 0.2.0/0.3.0 work merged — css-vars export, CSS Color
Module parser (named colors, hwb, lch, color-mix), nested token declarations with
collision detection, unknown-key / token-like-ignored lint rules, typography
sub-property warnings, export/lint exit-code fixes, TTY/ENOENT guards, Windows
`designmd` alias, PHILOSOPHY.md. Fork primitives (ramps, pairs, themes, voice,
copy, motion, iconography, layout, component states, evals) untouched.

**Why this approach:** union merges where features were additive; fork-wins on the
model pipeline and shadcn Tailwind output (deliberate fork identity), upstream-wins
on CLI exit codes, color fallback parsing, and format naming. Color support is the
union of both engines: the fork's parser (incl. display-p3) first, upstream's
`parseCssColor` as fallback.

**Considered and rejected:** adopting upstream's `tailwind`→`json-tailwind` alias
(would silently change fork output — the fork keeps `tailwind` aliased to the
shadcn-style `css-tailwind` CSS); replacing the fork's color parser wholesale with
upstream's (would lose display-p3 and the `format`/`raw` round-trip metadata).
