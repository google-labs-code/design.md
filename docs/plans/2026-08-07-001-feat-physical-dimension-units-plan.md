---
artifact_contract: ce-unified-plan/v1
artifact_readiness: implementation-ready
execution: code
product_contract_source: ce-plan-bootstrap
title: "feat: Support physical dimension units (pt, mm, cm, in)"
type: feat
date: 2026-08-07
origin: https://github.com/google-labs-code/design.md/issues/162
target_repo: google-labs-code/design.md
---

# feat: Support physical dimension units (pt, mm, cm, in)

**Target repo:** google-labs-code/design.md (authored and executed against a fork/clone, not the current working repo)

## Goal Capsule

Widen the Dimension grammar from `px`/`em`/`rem` to also accept `pt`, `mm`, `cm`, `in` — the print-native units CSS already supports — so print/PDF-targeting DESIGN.md files can express normative values without lossy conversion. Closes [#162](https://github.com/google-labs-code/design.md/issues/162).

---

## Problem Frame

The dimension grammar is defined in one config source (`packages/cli/src/linter/spec-config.yaml`'s `units:` list, re-exported as `STANDARD_UNITS`), but unit *enforcement* is inconsistent across the codebase:

- `rounded` (`model/handler.ts:99`) and `typography`'s `fontSize`/`lineHeight`/`letterSpacing` (`model/handler.ts:383`) each hardcode a literal `unit !== 'px' && unit !== 'rem' && unit !== 'em'` check — bypassing `STANDARD_UNITS`/`isStandardDimension` entirely.
- `spacing` performs no unit restriction at all (any CSS-parseable unit passes silently).
- `isParseableDimension` already recognizes `pt`, `mm`, `cm`, `in` (and many more) via the generous `CSS_UNITS` set in `model/spec.ts` — they parse fine today, they just get flagged as non-standard wherever a standard-unit check runs.

Widening `STANDARD_UNITS` alone would fix `docs/spec.md` (data-driven from the config) and any check that calls `isStandardDimension`, but the two hardcoded literal checks would keep rejecting `pt`/`mm`/`cm`/`in` regardless — the config change would look like it worked (docs update) while the linter kept erroring. This plan closes both gaps together.

## Requirements

- R1: `pt`, `mm`, `cm`, `in` are added to the spec's standard unit list (`spec-config.yaml`), so they're accepted everywhere `px`/`em`/`rem` are — no separate print-unit category or distinct lint signal (KTD1).
- R2: The two hardcoded `unit !== 'px' && ... 'rem' && ... 'em'` literal checks in `model/handler.ts` are replaced with a call to the existing `isStandardDimension` helper (or equivalent shared check), so there is exactly one source of truth for "is this a standard unit" and future unit additions require editing only `spec-config.yaml`.
- R3: `docs/spec.md`'s Dimension type definition reflects the widened unit list (regenerated via `bun run spec:gen`, never hand-edited).
- R4: Existing px/em/rem behavior is unchanged — this is additive only.

## Scope Boundaries

**In scope:** widening the standard-unit set, de-duplicating the two hardcoded checks against it, doc regeneration, test coverage for the four new units across `rounded`, `typography`, and `spacing`.

**Out of scope / deferred:**
- Cross-unit arithmetic or conversion (e.g., auto-converting `12pt` to `px` for consumers that need it) — the issue asks for lossless *authoring*, not conversion.
- Any new lint rule flagging mixed unit systems within one file (e.g., a file using both `px` and `mm`) — not requested by the issue; would be a separate proposal.

## Key Technical Decisions

**KTD1 — Physical units become fully standard, not a separate print category.** Add `pt`, `mm`, `cm`, `in` directly to `spec-config.yaml`'s `units:` list rather than introducing a `print_units:` list with its own validation path. Rationale: the issue's ask is "I can't express normative values without lossy conversion" — the fix is acceptance, not a new taxonomy. A separate category would need its own lint rule, its own docs section, and a decision about whether mixing categories in one file should warn — none of which the issue requests, and PHILOSOPHY.md's "prose is where the design lives" leans toward keeping the token grammar simple. Alternative considered: a `print_units` allowlist consulted only by a new opt-in rule (mirrors how `isParseableDimension`/`isStandardDimension` are already two tiers) — rejected as unnecessary ceremony for four unit strings that are unambiguous and already CSS-native.

**KTD2 — Consolidate the two hardcoded literal checks onto `isStandardDimension` rather than widening each inline condition.** `model/handler.ts:99` and `:383` (and the shadow-specific check on other in-flight branches) each spell out `'px'|'rem'|'em'` by hand. Editing each literal to also list `pt`/`mm`/`cm`/`in` would fix this issue but leave the duplication for the *next* unit addition. Calling the existing `isStandardDimension(raw)` helper (already re-exported from `model/spec.ts`, already backed by `STANDARD_UNITS`) collapses both sites to one source of truth. Verify behavior is identical for `px`/`rem`/`em` before and after (same helper, same underlying `STANDARD_UNITS` set) — this is a refactor-with-a-side-effect, not a new code path.

## Sources & Research

- `packages/cli/src/linter/spec-config.yaml:26-29` — the `units:` list, single source of truth re-exported as `STANDARD_UNITS`.
- `packages/cli/src/linter/model/spec.ts:120-194` — `parseDimensionParts`, `CSS_UNITS` (already includes pt/mm/cm/in/pc and more), `isStandardDimension` (checks against `STANDARD_UNITS`), `isParseableDimension` (checks against `CSS_UNITS`).
- `packages/cli/src/linter/model/handler.ts:99` (rounded) and `:383` (typography `fontSize`/`lineHeight`/`letterSpacing`) — the two hardcoded literal unit checks bypassing `isStandardDimension`.
- `packages/cli/src/linter/spec-gen/renderers.ts:109-111` (`typeDefinitions`) — already data-driven from `config.STANDARD_UNITS`, so `docs/spec.md`'s unit list updates automatically once the config changes and `spec:gen` runs; no renderer edit needed.
- `docs/spec.md:85` — current generated Dimension type text ("Valid units are: px, em, rem"), to be regenerated, not hand-edited.
- `PHILOSOPHY.md` — "prose is where the design lives"; supports keeping the token grammar simple (KTD1).
- Issue [#162](https://github.com/google-labs-code/design.md/issues/162) — no existing PR references this issue (confirmed via GitHub PR search).

---

## Implementation Units

### U1. Widen the standard unit list

**Goal:** Register `pt`, `mm`, `cm`, `in` as standard dimension units at the single source of truth.

**Requirements:** R1

**Dependencies:** none

**Files:**
- `packages/cli/src/linter/spec-config.yaml` — add `pt`, `mm`, `cm`, `in` to the `units:` list (after `px`, `em`, `rem`).
- `packages/cli/src/linter/spec-config.test.ts` — extend the existing "units are non-empty and unique" test (or add a targeted one) asserting the four new units are present.

**Approach:** Purely additive to the YAML list — no schema change needed (`ConfigSchema.units` is already `z.array(z.string()).min(1)`).

**Patterns to follow:** the existing `units:` list structure.

**Test scenarios:**
- `STANDARD_UNITS` contains `pt`, `mm`, `cm`, `in` in addition to `px`, `em`, `rem`.
- `STANDARD_UNITS` has no duplicate entries (existing uniqueness test still passes).

**Verification:** `bun test packages/cli/src/linter/spec-config.test.ts` passes with the new assertion.

---

### U2. Consolidate hardcoded unit checks onto `isStandardDimension`

**Goal:** Replace the two hand-spelled `'px'|'rem'|'em'` literal checks in the model handler with calls to the existing `isStandardDimension` helper, so the widened unit list in U1 actually takes effect for `rounded` and `typography`.

**Requirements:** R2, R4

**Dependencies:** U1

**Files:**
- `packages/cli/src/linter/model/handler.ts` — replace the literal condition at the `rounded` block (~line 99) and the `typography` dimension-property loop (~line 383) with `!isStandardDimension(raw)` (or the parsed-value equivalent already in scope), preserving the exact same finding shape/message.
- `packages/cli/src/linter/model/handler.test.ts` — add/extend cases for `rounded` and `typography` accepting `pt`/`mm`/`cm`/`in` without error, and confirm `px`/`rem`/`em` still behave identically (regression guard for KTD2's refactor).

**Approach:** `isStandardDimension` takes the raw string and internally calls `parseDimensionParts` + checks `STANDARD_UNITS` — confirm it's imported into `handler.ts` already (it's already used indirectly via `model/spec.ts` exports) and call it in place of the literal comparison. Keep the existing error message text and severity unchanged; only the acceptance set changes.

**Patterns to follow:** `model/spec.ts`'s `isStandardDimension` definition; the existing import block at the top of `handler.ts` that already pulls `isParseableDimension`/`parseDimensionParts` from `./spec.js`.

**Test scenarios:**
- Happy path: `rounded: { md: "3mm" }` resolves with no error finding.
- Happy path: `typography.h1.fontSize: "12pt"` resolves with no error finding.
- Happy path: `typography.h1.letterSpacing: "0.5cm"` and `rounded.sm: "1in"` both resolve with no error.
- Regression: `rounded: { md: "8px" }`, `typography.h1.fontSize: "3rem"`, `typography.h1.letterSpacing: "-0.02em"` still resolve with no error (unchanged behavior for existing units).
- Error path: `rounded: { md: "3vh" }` still produces the "invalid unit" error (viewport units remain non-standard) — confirms the refactor didn't accidentally widen acceptance beyond U1's four additions.

**Verification:** `bun test packages/cli/src/linter/model/handler.test.ts` passes; the two edited sites contain no literal `'px'`/`'rem'`/`'em'` unit comparisons.

---

### U3. Regenerate spec documentation

**Goal:** `docs/spec.md`'s Dimension type definition reflects the widened unit list.

**Requirements:** R3

**Dependencies:** U1

**Files:**
- `docs/spec.md` — regenerated via `bun run spec:gen`; never hand-edited.

**Approach:** No `spec.mdx` or renderer edit is needed — `typeDefinitions()` in `spec-gen/renderers.ts` already reads `config.STANDARD_UNITS` dynamically (confirmed at `renderers.ts:109-111`). Running the generator after U1 lands is sufficient.

**Patterns to follow:** the standard edit → `spec:gen` → `bun test` workflow documented in `spec-config.ts`'s header comment.

**Test scenarios:**
- `bun run spec:gen --check` reports the doc up to date after generation (deterministic regen).
- The generated `docs/spec.md` Dimension entry lists all seven units (`px, em, rem, pt, mm, cm, in` in config order).

**Verification:** `bun run spec:gen && git diff --stat docs/spec.md` shows only the Dimension line changing; `bun run spec:gen --check` passes on a second run with no diff.

---

## Verification Contract

- `bun test` (full suite) passes, including all new/updated tests across U1-U2.
- `bunx tsc --noEmit` clean.
- `bun run spec:gen --check` confirms deterministic, up-to-date generation.
- No regression to `px`/`em`/`rem` acceptance or to non-standard-unit rejection (e.g. `vh`, `%`) anywhere unit validation runs.

## Definition of Done

- `pt`, `mm`, `cm`, `in` are accepted wherever `px`/`em`/`rem` are today (`rounded`, `typography`, and — since `spacing` already accepts any parseable unit — no change needed there).
- The two hardcoded literal unit checks are replaced with `isStandardDimension`.
- `docs/spec.md` reflects the change.
- All test scenarios above pass.
- PR opened against `google-labs-code/design.md` referencing and closing `#162`.

## Open Questions

- Whether `spacing`'s current lack of any unit restriction (already permissive to any CSS-parseable unit, including these four) should be tightened to match `rounded`/`typography`'s standard-unit gate — out of scope here since it's pre-existing behavior unrelated to this issue; flag for a maintainer to decide separately if consistency across all three categories becomes a goal.
