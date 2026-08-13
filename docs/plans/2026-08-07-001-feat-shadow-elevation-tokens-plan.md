---
artifact_contract: ce-unified-plan/v1
artifact_readiness: implementation-ready
execution: code
product_contract_source: ce-plan-bootstrap
title: "feat: Add structured shadows/elevation token category"
type: feat
date: 2026-08-07
origin: https://github.com/google-labs-code/design.md/issues/92
target_repo: google-labs-code/design.md
---

# feat: Add structured shadows/elevation token category

**Target repo:** google-labs-code/design.md (this plan is authored and executed against a fork/clone, not the current working repo)

## Goal Capsule

Add a `shadows:` token category to the DESIGN.md spec with the same first-class treatment as `colors`, `typography`, `rounded`, and `spacing`: a structured YAML schema, model resolution, lint validation, spec documentation, and an example. Closes [#92](https://github.com/google-labs-code/design.md/issues/92).

---

## Problem Frame

`packages/cli/src/linter/model/spec.ts` (`DesignSystemState`) currently resolves five token maps: `colors`, `typography`, `rounded`, `spacing`, `components`. `Elevation & Depth` is already a canonical section (`packages/cli/src/linter/spec-config.yaml:58`) but is prose-only — there is no `shadows:` YAML key, no resolved value type, and no lint rule. Authors describing box-shadow-shaped elevation values today have nowhere structured to put them, and `design.md lint` cannot validate them the way it validates `colors` (format, references, contrast) or `rounded`/`spacing` (unit compliance).

## Requirements

- R1: `shadows:` is a recognized top-level YAML key, parsed the same way `rounded`/`spacing` are (`forEachLeaf` over a flat or nested token map).
- R2: Each shadow token resolves to a structured composite value (`offsetX`, `offsetY`, `blur`, `spread`, `color`), not a bare string — this is the actual gap versus `rounded`/`spacing` (scalar dimensions) and mirrors how `typography` is already a composite (`ResolvedTypography`).
- R3: A shadow's `color` field accepts either a literal color string or a `{colors.*}` token reference, resolved through the existing reference-resolution pass.
- R4: Lint validates shadow tokens: malformed dimension fields, invalid/unresolvable color, and (analogous to `orphaned-tokens`) shadow tokens no component references.
- R5: `docs/spec.md` documents the new category (regenerated via `bun run spec:gen` from `spec-config.yaml`/`spec.mdx`, never hand-edited).
- R6: At least one example `DESIGN.md` in `examples/` demonstrates `shadows:` usage under a component.

## Scope Boundaries

**In scope:** flat `shadows:` token category, composite value shape, reference resolution for the `color` sub-field, lint validation, spec doc, one example.

**Out of scope / deferred:**
- Multi-layer shadows (arrays of shadow objects per token, like CSS's comma-separated `box-shadow`) — the issue's worked examples are single-layer; note as a future extension in Open Questions.
- Inset/outset variants — not requested in the issue thread.
- A dedicated `elevation` semantic layer (e.g., naming z-index or perceived depth beyond visual shadow values) — the issue title mentions "elevation" as an alias for the section, not a separate token type.

### Deferred to Follow-Up Work
- Multi-layer shadow arrays (open question, not this PR).

## Key Technical Decisions

**KTD1 — Composite value shape, not a string shorthand.** Model `ResolvedShadow` as `{ type: 'shadow', offsetX, offsetY, blur, spread, color }` (dimensions as `ResolvedDimension`, color as `ResolvedColor`), matching `ResolvedTypography`'s composite pattern rather than inventing a single CSS-`box-shadow`-string field. Rationale: keeps each sub-value independently lintable (dimension unit checks, color contrast/reference checks) the same way `typography.fontSize` is checked today — a flat string would need its own mini-parser and lose that reuse. Alternative considered: a raw CSS box-shadow string (`"0px 4px 8px 0px #00000033"`); rejected because it can't reuse `parseDimensionParts`/`isValidColor` per-field and can't support `{colors.*}` token references inside the string without a custom grammar.

**KTD2 — `color` sub-field supports token references.** Resolve `shadows.<name>.color` through the same reference-resolution pass used for `components.*` properties (`{colors.shadow-ambient}` etc.), not just literal hex/rgba. Rationale: shadow color should be able to point at the palette like every other color-consuming field does; skipping this would make `shadows` inconsistent with `components`.

**KTD3 — New `SHADOW` model error codes, reusing existing dimension/color validators.** Add `INVALID_SHADOW` to `ModelErrorCode` but delegate field-level checks to `parseDimensionParts`/`isValidColor` (already exported from `model/spec.ts`) rather than writing shadow-specific parsing logic. Rationale: consistency with how `rounded`/`spacing` validation already works, and it avoids duplicating dimension-parsing logic.

## Sources & Research

- `packages/cli/src/linter/model/spec.ts` — `DesignSystemState`, `ResolvedColor`/`ResolvedDimension`/`ResolvedTypography`, `ModelErrorCode`, `parseDimensionParts`/`isValidColor` helpers.
- `packages/cli/src/linter/model/handler.ts:52,91-135` — how `rounded`/`spacing` are parsed via `forEachLeaf` + `buildCollisionGuard`; comment at line 254 documents the "call once per category" contract this unit follows for `shadows`.
- `packages/cli/src/linter/spec-config.yaml:58-60` — `Elevation & Depth` is already a canonical section (currently prose-only, needs no new section, just token-category wiring).
- `packages/cli/src/linter/linter/rules/` (28 files) — `contrast-ratio.ts` (composite-value lint against `state.components`), `orphaned-tokens.ts` (unused-token pattern to mirror for shadows), `types.ts` (`RuleDescriptor`/`RuleFinding` contract), `index.ts` (rule registration point).
- Issue [#92](https://github.com/google-labs-code/design.md/issues/92) and follow-up comment from `@Emp1500` (expressed interest, no PR followed) — no existing PR references this issue (confirmed via GitHub PR search).

---

## Implementation Units

### U1. Spec config: add `shadows` category and `Shadow` type

**Goal:** Register the new token category and its composite type at the single source of truth so both the linter and doc generator pick it up.

**Requirements:** R1, R2, R5

**Dependencies:** none

**Files:**
- `packages/cli/src/linter/spec-config.yaml` — add a `shadow_properties` array (parallel to existing `typography_properties`): `offsetX`, `offsetY` (type `Dimension`), `blur`, `spread` (type `Dimension`, non-negative), `color` (type `Color | Reference`). Add a `shadows` example entry under `examples:` parallel to `colors`/`typography`.
- `packages/cli/src/linter/spec-config.ts` — extend `ConfigSchema` with `shadow_properties: z.array(PropertyDefSchema).min(1)` and `examples.shadows: z.record(...)`; re-export `VALID_SHADOW_PROPS` the same way `VALID_TYPOGRAPHY_PROPS` is re-exported today.

**Approach:** Mirror `typography_properties` exactly — same `PropertyDefSchema` shape, same re-export pattern in `model/spec.ts` (`_VALID_SHADOW_PROPS` → `VALID_SHADOW_PROPS`). Do not introduce a new schema primitive.

**Patterns to follow:** `packages/cli/src/linter/spec-config.yaml:65-83` (`typography_properties`), `spec-config.ts:44-49` (`ConfigSchema` typography/component fields).

**Test scenarios:**
- Loading `spec-config.yaml` via `loadSpecConfig()` succeeds and `config.shadow_properties` contains exactly `offsetX`, `offsetY`, `blur`, `spread`, `color`.
- Malformed `shadow_properties` entry (missing `type`) fails Zod validation with a clear error — mirrors existing `spec-config.test.ts` coverage for `typography_properties`.

**Verification:** `bun test packages/cli/src/linter/spec-config.test.ts` passes with new assertions added.

---

### U2. Model: `ResolvedShadow` type and `shadows` resolution in the handler

**Goal:** Parse a `shadows:` YAML block into `Map<string, ResolvedShadow>` on `DesignSystemState`, resolving each sub-field (including `color` token references) the same way `rounded`/`spacing`/`typography` are resolved today.

**Requirements:** R1, R2, R3, R4 (data prerequisite)

**Dependencies:** U1

**Files:**
- `packages/cli/src/linter/model/spec.ts` — add `ResolvedShadow` interface (`type: 'shadow'`, `offsetX/offsetY/blur/spread: ResolvedDimension`, `color: ResolvedColor`); add `'INVALID_SHADOW'` to `ModelErrorCode`; add `shadows: Map<string, ResolvedShadow>` to `DesignSystemState`; extend `ResolvedValue` union.
- `packages/cli/src/linter/model/handler.ts` — add a `shadows` resolution block parallel to the `rounded`/`spacing` blocks at lines 91-135: for each `shadows.<name>` entry, resolve each of the 5 sub-fields (dimensions via `parseDimensionParts`, color via `isValidColor` or reference lookup against `symbolTable` for `{colors.*}` syntax), push an `INVALID_SHADOW` finding per malformed sub-field, and set the composite `ResolvedShadow` in both the `shadows` map and `symbolTable` (as `shadows.<name>`) only when all sub-fields resolve.
- `packages/cli/src/linter/model/handler.test.ts` — new test cases.

**Approach:** Because `color` may be a `{colors.*}` reference, this resolution must run *after* the `colors` block populates `symbolTable` (colors are already resolved earlier in `handler.ts`) — respect the existing resolution order rather than reordering it. Malformed shadows still populate `symbolTable` with the raw value (matching the `rounded`/`spacing` fallback behavior at handler.ts:111-116) so downstream lint rules can still report on them by path.

**Technical design (directional):**
```
for name, raw in shadows_block:
  offsetX = resolveDimension(raw.offsetX)   // reuse parseDimensionParts
  offsetY = resolveDimension(raw.offsetY)
  blur    = resolveDimension(raw.blur)
  spread  = resolveDimension(raw.spread ?? '0px')  // spread optional, defaults 0
  color   = isTokenReference(raw.color)
              ? symbolTable.get(stripBraces(raw.color))
              : parseCssColor(raw.color)
  if all resolved: shadows.set(name, {type:'shadow', offsetX, offsetY, blur, spread, color})
  else: push INVALID_SHADOW finding per bad field; symbolTable.set(`shadows.${name}`, raw)
```

**Patterns to follow:** `handler.ts:91-119` (`rounded` block), `handler.ts:254` comment describing the "call once per category" contract — reuse `buildCollisionGuard('shadows', findings)`.

**Test scenarios:**
- Happy path: `shadows: { card: { offsetX: 0px, offsetY: 4px, blur: 8px, spread: 0px, color: "#00000033" } }` resolves to a `ResolvedShadow` with correct numeric values.
- `color` as a token reference: `color: "{colors.shadow-ambient}"` resolves to the referenced `ResolvedColor` (requires `colors.shadow-ambient` defined earlier in the same file).
- `spread` omitted: defaults to `0px`, no finding.
- Edge case: `offsetX: "not-a-dimension"` → `INVALID_SHADOW` finding at `shadows.card.offsetX`, shadow still recorded in `symbolTable` with raw value.
- Edge case: `color: "{colors.nonexistent}"` → `UNRESOLVED_REFERENCE` finding (reuse existing reference-resolution error path, not a new `INVALID_SHADOW` for this case).
- Collision: two top-level `shadows` keys colliding (existing `buildCollisionGuard` behavior) produces the same collision finding shape as `rounded`.

**Verification:** `bun test packages/cli/src/linter/model/handler.test.ts` — new cases pass; existing `rounded`/`spacing` cases unaffected.

---

### U3. Parser: accept `shadows:` top-level key

**Goal:** The YAML parser recognizes `shadows` as a known top-level section so it flows into the model handler instead of `unknownKeys`.

**Requirements:** R1

**Dependencies:** none (parallel to U1/U2, but must land before U2's handler code has real input to consume in integration tests)

**Files:**
- `packages/cli/src/linter/parser/spec.ts` — add `shadows` to the known-key allowlist alongside `rounded`/`spacing`/`components`.
- `packages/cli/src/linter/parser/handler.ts` — pass through `input.shadows` the same way `input.rounded`/`input.spacing` are passed through today.
- `packages/cli/src/linter/parser/spec.test.ts` — test that a `shadows:` block is not flagged as an unknown key.

**Approach:** Mirror the exact code path used for `rounded`, which is the simplest existing flat-map category (`spacing` is identical).

**Patterns to follow:** wherever `parser/handler.ts` special-cases `rounded`/`spacing` vs. falling through to `unknownKeys`.

**Test scenarios:**
- A YAML doc with a `shadows:` top-level key parses without an `unknown-key` finding.
- A YAML doc with a `shadow:` (singular, typo) top-level key still produces the existing `unknown-key` finding with a Levenshtein-based suggestion pointing at `shadows` (reuses `levenshtein.ts` — no new code needed here, just verify it fires).

**Verification:** `bun test packages/cli/src/linter/parser/spec.test.ts`.

---

### U4. Lint rule: `shadow-value` validation

**Goal:** A new lint rule surfaces malformed shadow tokens and unused shadow tokens, analogous to how `contrast-ratio.ts` and `orphaned-tokens.ts` cover `colors`.

**Requirements:** R4

**Dependencies:** U2

**Files:**
- `packages/cli/src/linter/linter/rules/shadow-value.ts` (new) — reports `INVALID_SHADOW` model findings as lint findings (pass-through, same shape as how `rounded`/`spacing` dimension errors surface today) plus a check that a shadow token with a non-standard unit (not `px`/`rem`) gets a `warning`, matching the existing `isStandardDimension` vs `isParseableDimension` distinction used elsewhere.
- `packages/cli/src/linter/linter/rules/orphaned-tokens.ts` — extend the existing orphaned-token scan to also walk `state.shadows`, flagging any shadow token no `components.*` property references (the rule already generalizes over token maps; confirm and extend its category list rather than duplicating its logic).
- `packages/cli/src/linter/linter/rules/index.ts` — register `shadow-value` in the rule list.
- `packages/cli/src/linter/linter/rules/shadow-value.test.ts` (new), update `orphaned-tokens.test.ts`.

**Approach:** Keep `shadow-value.ts` thin — it should mostly re-surface findings the model handler (U2) already computed, matching how existing rules treat `rounded`/`spacing` unit warnings rather than re-implementing validation in the lint layer.

**Patterns to follow:** `packages/cli/src/linter/linter/rules/contrast-ratio.ts` (composite-value rule reading `state.components`/`ResolvedColor`), `orphaned-tokens.ts` (unused-token detection across categories), `types.ts` (`RuleDescriptor`/`RuleFinding` contract).

**Test scenarios:**
- A `shadows` token with a non-`px`/`rem` unit on `offsetY` produces a `warning`-severity finding, not an error (mirrors existing dimension-unit leniency).
- A `shadows` token unreferenced by any `components.*` property produces an `orphaned-tokens` finding with path `shadows.<name>`.
- A `shadows` token referenced by a component property is not flagged as orphaned.
- Integration: running `design.md lint` end-to-end (via existing CLI test harness) on a fixture with an invalid shadow reports the finding at the correct path and severity.

**Verification:** `bun test packages/cli/src/linter/linter/rules/` — new and updated tests pass; `bun test src/linter` full suite (274+ tests per issue #13's PR baseline) still green.

---

### U5. Spec documentation and example

**Goal:** `docs/spec.md` documents `shadows:` under `Elevation & Depth`, generated (not hand-written) from `spec-config.yaml` + `spec.mdx`; one example `DESIGN.md` demonstrates it.

**Requirements:** R5, R6

**Dependencies:** U1

**Files:**
- `packages/cli/src/linter/spec-gen/spec.mdx` — add prose for the `Elevation & Depth` section describing the `shadows:` category, its five sub-fields, and the token-reference behavior for `color` (follow the existing `Typography` prose block's structure and depth).
- `docs/spec.md` — regenerated via `bun run spec:gen`; never hand-edited.
- `examples/paws-and-paths/DESIGN.md` (or whichever example is least token-dense) — add a `shadows:` block with 1-2 tokens and reference one from a `components.*` entry (e.g., a card's `boxShadow`-equivalent), consistent with `component_sub_tokens` if a shadow-referencing sub-token is added in U1/U4 scope — otherwise reference it via a custom/prose mention consistent with PHILOSOPHY.md's "tokens are universal, prose is where design lives" stance.
- `README.md` — if it has a token-category summary table (as issue #101's PR #112 mentions for section order), add `shadows` there too.

**Approach:** Do not hand-edit `docs/spec.md`; author only `spec.mdx`, then run the generator. Keep prose short and consistent with `PHILOSOPHY.md`'s stated project philosophy (spec defines universal categories; prose is where the design lives) — avoid prescribing exact shadow "meanings," just document the schema and resolution behavior.

**Patterns to follow:** the `Typography` section of `spec.mdx` for prose depth/structure; `spec-config.ts:29` doc comment describing the edit → `spec:gen` → `bun test` workflow.

**Test scenarios:**
- `bun run spec:gen` regenerates `docs/spec.md` with no diff drift beyond the new section (i.e., generation is deterministic).
- The updated example `DESIGN.md` passes `design.md lint` with 0 errors (run via existing example-linting test if one exists, e.g. `check-package.ts`'s example checks).

**Verification:** `bun run spec:gen && git diff --stat docs/spec.md` shows only the expected addition; `bunx @google/design.md lint examples/paws-and-paths/DESIGN.md` (or repo-local equivalent) reports 0 errors on the updated example.

---

## Verification Contract

- `bun test` (full suite) passes, including all new/updated tests across U1-U4.
- `bun run spec:gen` produces a deterministic, reviewable diff to `docs/spec.md` limited to the new `shadows` documentation.
- `packages/cli/scripts/check-package.ts` package-integrity checks (referenced in the #153 fix, check `#20 CLI spec command valid`-style assertions) still pass — this change touches `spec-config.yaml`/`spec-gen`, the same subsystem #153 fixed, so a regression there would be a direct repeat of that prior bug.
- Updated example `DESIGN.md` lints clean.

## Definition of Done

- `shadows:` token category has a schema (U1), model resolution (U2, U3), lint validation (U4), spec docs (U5), and an example (U5).
- All test scenarios above pass.
- No regression to existing `colors`/`typography`/`rounded`/`spacing`/`components` resolution or lint behavior.
- PR opened against `google-labs-code/design.md` referencing and closing `#92`.

## Open Questions

- Multi-layer shadows (array of shadow objects per token) — deferred; flag as a natural follow-up in the PR description so maintainers can decide if it belongs in this PR or a follow-up.
- Whether `shadows` needs its own `component_sub_tokens` entry (e.g., a `boxShadow` property referencing `{shadows.*}` from a component) — U5 assumes yes for the example to be meaningful, but the exact sub-token name is a judgment call left to the implementer, following the `backgroundColor`/`textColor` naming convention already in `component_sub_tokens`.
