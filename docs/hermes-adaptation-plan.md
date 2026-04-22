# Hermes DESIGN.md Adaptation Plan

> Goal: keep upstream `DESIGN.md` compatibility where it helps, then add the agent/runtime constraints we actually need.

## Recommendation

Use a **compatible fork + extension profile**, not a hard rewrite.

That means:
- keep the upstream document shape: YAML front matter + markdown rationale
- keep the current token reference syntax: `{path.to.token}`
- keep upstream CLI behavior working for plain `DESIGN.md`
- add Hermes-specific guidance in a way that degrades gracefully under upstream tooling

## Why this path

Upstream already gives us the useful core:
- one text artifact that both humans and agents can read
- lint/diff/export/spec commands
- a decent split between hard tokens and soft rationale
- tolerant handling of unknown sections and unknown component properties

That makes it a good base for a fork that needs to stay practical instead of turning into a bespoke snowflake.

## What to preserve unchanged

### File contract
- YAML front matter at the top
- markdown `##` sections for prose guidance
- token references via `{...}`
- current token groups: `colors`, `typography`, `rounded`, `spacing`, `components`

### CLI surface
- `design.md lint`
- `design.md diff`
- `design.md export`
- `design.md spec`

### Philosophy
- tokens are normative
- prose explains intent and guardrails
- agent consumers should preserve unknown content where possible

## What Hermes should add

### 1. Explicit agent policy layer

Upstream explains visual identity. We also need to tell agents how much freedom they have.

Add an optional top-level YAML block:

```yaml
agent:
  mode: strict
  canInfer:
    - missing-hover-state
    - spacing-between-related-elements
  mustNotInfer:
    - brand-colors
    - new-component-families
  fallbackOrder:
    - components
    - typography
    - colors
```

Purpose:
- separate hard design rules from allowed agent judgment
- make reviews less hand-wavy
- reduce "creative" UI drift from coding agents

### 2. Accessibility contract

Upstream checks contrast, but that is too small for real UI work.

Add an optional YAML block:

```yaml
accessibility:
  contrast:
    bodyText: AA
    largeText: AA
  focus:
    minRingWidth: 2px
    minContrast: 3
  motion:
    respectReducedMotion: true
```

Purpose:
- define minimum accessibility expectations as first-class contract
- give lint rules something concrete to validate later

### 3. Interaction + state model

Upstream components are currently too thin for practical product UI.

We should extend component properties with optional fields like:
- `borderColor`
- `borderWidth`
- `shadow`
- `gap`
- `focusRingColor`
- `focusRingWidth`
- `iconSize`
- `minHeight`
- `stateLayer`

And optionally support nested states:

```yaml
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.md}"
    padding: 12px
    borderWidth: 0px
    minHeight: 40px
    states:
      hover:
        backgroundColor: "{colors.tertiary-hover}"
      focus:
        focusRingColor: "{colors.focus-ring}"
        focusRingWidth: 2px
      disabled:
        backgroundColor: "{colors.surface-disabled}"
        textColor: "{colors.on-surface-muted}"
```

We can support this in two phases:
- Phase 1: accept nested `states` as extension data with warnings disabled in Hermes mode
- Phase 2: teach lint/diff/export to understand it semantically

### 4. New prose sections that help agents

Upstream already tolerates unknown sections. Use that.

Hermes-specific optional sections:
- `## Interaction`
- `## Motion`
- `## Accessibility`
- `## Density`
- `## Platform Overrides`
- `## Agent Notes`

Purpose:
- keep design intent near implementation reality
- avoid shoving everything into YAML
- let humans explain exceptions without inventing a parallel format

### 5. Platform overrides

We need a clean way to express web/mobile/chat surfaces without cloning the whole design file.

Proposed extension:

```yaml
platformOverrides:
  web:
    components:
      button-primary:
        minHeight: 40px
  mobile:
    components:
      button-primary:
        minHeight: 44px
  telegram:
    components:
      button-primary:
        rounded: 9999px
```

Purpose:
- keep one base design system
- allow bounded surface-specific deviations
- make agent output less fake-cross-platform

## Modes

### Upstream mode
- strict compatibility
- only upstream fields and rules
- useful when we want to compare behavior or upstream contributions

### Hermes relaxed mode
- accept Hermes extension sections and properties
- preserve upstream behavior where possible
- no hard failure for Hermes-only keys

### Hermes strict mode
- require explicit agent/accessibility fields for production-facing systems
- fail when mandatory Hermes constraints are missing

## Proposed CLI additions

Keep upstream commands, add Hermes-aware options instead of inventing a new CLI first.

### `lint`
- `--profile upstream|hermes-relaxed|hermes-strict`
- `--warn-unknown-sections=false`

### `diff`
- show changes in:
  - agent policy
  - accessibility contract
  - state tokens
  - platform overrides

### future commands
- `design.md normalize`
- `design.md explain`
- `design.md scaffold`

These should come later, not in the first pass.

## Implementation phases

### Phase 0 — docs-first
- fork repo
- create adaptation docs
- create one Hermes example DESIGN file
- do not touch parser behavior yet

### Phase 1 — non-breaking parser/linter support
- allow Hermes extension keys without noisy warnings in Hermes profile
- keep upstream profile intact
- add tests for extension parsing and lint behavior

### Phase 2 — semantic validation
- validate accessibility block
- validate nested component states
- validate platform override merge behavior

### Phase 3 — exporter behavior
- decide what `export --format tailwind|dtcg` should do with Hermes extensions
- likely export core tokens only by default
- add `--include-hermes-metadata` later if needed

## What we should not do

- do not hard-break upstream `DESIGN.md` compatibility on day one
- do not rename the file format immediately just because we can
- do not build a huge ontology before we have one real consumer flow
- do not mix brand prose, accessibility policy, and runtime component state into one unstructured blob

## Naming recommendation

Short term:
- keep file name `DESIGN.md`
- describe our dialect as **Hermes profile for DESIGN.md**

If divergence becomes large later:
- keep accepting `DESIGN.md`
- optionally add a version/profile marker like:

```yaml
version: alpha
profile: hermes-v1
```

That is cleaner than inventing a new file name too early.

## Practical success criteria

This fork is worth keeping only if it improves at least one real flow:
- agent scaffolds UI closer to intended design on first pass
- reviewers can diff meaningful design-contract changes
- accessibility expectations stop living only in people's heads
- cross-surface variance becomes explicit instead of accidental

## Immediate next steps

1. Add a Hermes example `DESIGN.md` that exercises extension fields.
2. Decide the minimal extension set for v1:
   - `agent`
   - `accessibility`
   - `states`
   - `platformOverrides`
3. Patch parser/linter behind a profile flag instead of changing upstream default behavior.
4. Add tests before touching exporters.
