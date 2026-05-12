# Proposal: Precedence rule + canonical 8-role sub-token vocabulary

**Status**: Draft proposal — opening for maintainer signal before implementation.
**Authors**: Atelier project (https://github.com/atelier-oss/atelier)
**Reference implementation**: [`@atelier-oss/lint`](https://www.npmjs.com/package/@atelier-oss/lint) — wraps `@google/design.md@0.1.1` with both extensions.
**License of this proposal**: MIT (compatible with Apache-2.0).

---

## Summary

Two **additive** extensions to the DESIGN.md spec, derived from observed naming patterns across production DESIGN.md files in independent codebases. Both are also implemented downstream in `@atelier-oss/lint`; if accepted upstream, the wrapper layer becomes a no-op compatibility shim.

1. **Precedence rule** — `explicit > atlas > palette` ordering for token resolution.
2. **Canonical 8-role sub-token vocabulary** — a role-based extension to the lint rules.

Neither changes existing behavior. Both add new (non-error) finding codes.

---

## 1. Precedence rule

When a token is resolvable from multiple sources, the higher-precedence source wins:

1. **Explicit** — values from the project's local `DESIGN.md`
2. **Atlas** — defaults from a build-category atlas (if supplied — e.g., SaaS dashboard / marketing landing)
3. **Palette** — last-resort fallback to raw framework palette (e.g., Tailwind `zinc-900`)

The rule encodes early-return semantics needed by codegen pipelines: per-project intent must survive a re-generation pass.

Reverse precedence is forbidden: an atlas-supplied default MUST NOT silently shadow an explicit DESIGN.md value.

**Proposed new finding code**: `PRECEDENCE_VIOLATION` (severity: warning).

---

## 2. Canonical 8-role sub-token vocabulary

A DESIGN.md may use any naming convention internally (`bg`/`c-bg`/`background` are all valid tokens today). The proposed lint rule cares about **roles**, not exact names. Eight canonical roles, chosen empirically — each appears in at least 3 of 4 surveyed production DESIGN.md files:

| Role                 | Purpose                      |
| -------------------- | ---------------------------- |
| `background`         | Default page surface         |
| `foreground`         | Default text on `background` |
| `primary`            | Brand action (CTA, links)    |
| `primary-foreground` | Legible text on `primary`    |
| `accent`             | Secondary emphasis           |
| `muted`              | Low-contrast supporting tone |
| `border`             | Surface separators           |
| `ring`               | Focus indicator              |

A DESIGN.md is **role-complete** when each of the 8 roles is satisfied by some token. Direct name match (case-insensitive, hyphens optional) auto-satisfies a role; otherwise an optional `aliases:` block in the frontmatter can map a role to a project-specific token name:

```yaml
---
aliases:
  background: c-bg
  foreground: c-text
  primary: c-accent
---
```

The `aliases` block is **opt-in** — DESIGN.md files that omit it pass the lint rule based on direct name matching only.

**Proposed new finding code**: `MISSING_ROLE` (severity: info, non-blocking).

---

## Empirical evidence

Observational corpus walk (committed code, three-arm pre-registered split, n=24 repos, 2026-05-07):

| Arm                                                            | n (kept / total) | Conformance |
| -------------------------------------------------------------- | ---------------- | ----------- |
| `with_design_md`                                               | 3 / 4            | 78.5%       |
| `shadcn_default` (Radix UI + shadcn token vocab, no DESIGN.md) | 10 / 10          | 61.7%       |
| `raw_palette` (Tailwind palette refs only, no DESIGN.md)       | 9 / 10           | 31.4%       |

- DESIGN.md vs shadcn-default: **+16.87pp absolute, +27.4% relative**
- DESIGN.md vs raw-palette: **+47.1pp absolute, +149.98% relative**

Methodology:

- Pre-registered in [`benchmarks/spec.md`](https://github.com/atelier-oss/atelier/blob/main/benchmarks/spec.md) and [`benchmarks/spec-v2.md`](https://github.com/atelier-oss/atelier/blob/main/benchmarks/spec-v2.md) before runs.
- Three-arm split corrects the MVB's two-arm conflation of shadcn-style and raw-palette projects.
- Sensitivity check (registry-strict vs registry-broad) AGREES on the verdict; result is robust to registry breadth.
- Full result: [`benchmarks/results/2026-05-07-phase-1-v2.md`](https://github.com/atelier-oss/atelier/blob/main/benchmarks/results/2026-05-07-phase-1-v2.md).
- Methodology post-mortem: [`benchmarks/results/2026-05-07-v2-analysis.md`](https://github.com/atelier-oss/atelier/blob/main/benchmarks/results/2026-05-07-v2-analysis.md).

**Caveats**: observational only, not causal. All repos owned by one developer. External validation requires fork-and-rerun by independent maintainers. A Phase 2 generative arm-vs-arm study would replace correlation with causation.

---

## Compatibility

Both extensions are additive:

- New finding codes don't break existing consumers (`info`/`warning`, not `error`).
- The `aliases` block is opt-in.
- The precedence rule activates only when an atlas is supplied; without one, behavior is identical to today.

---

## Reference implementation

The Atelier project ships a wrapper layer that adds these checks on top of the upstream linter pinned at exact `@google/design.md@0.1.1`:

- [`@atelier-oss/lint`](https://www.npmjs.com/package/@atelier-oss/lint) — npm package (v0.1.0, MIT license, sigstore provenance)
- [Source](https://github.com/atelier-oss/atelier/tree/main/packages/lint)
- [Spec doc](https://github.com/atelier-oss/atelier/blob/main/spec/DESIGN.md.spec.md)

If these extensions land upstream, the wrapper drops the corresponding layer in the next release and continues to behave identically.

---

## Questions for maintainers

1. Is there appetite for an in-spec atlas concept, or should atlas remain downstream?
2. Would you prefer the role vocabulary as part of the core schema, or as an opt-in extension flag?
3. Naming: `aliases:` or `roles:` for the optional mapping block?
4. Tailwind v4 (`@theme` blocks, `oklch()` palette) — should the spec carve out a v4 chapter, or stay v3-shaped and treat v4 as a separate proposal?
5. If this proposal lands in spirit but with shape changes, the Atelier project is happy to do the implementation PR(s) — what's your preferred staging (one PR vs split per extension)?

---

_Drafted by the Atelier project (2026-05-08). License: MIT for the proposal text; upstream Apache-2.0 preserved._
