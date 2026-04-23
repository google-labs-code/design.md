# Workspace Reliability and Interoperability Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to
> implement this plan task-by-task.

**Goal:** Restore the root Bun/Turbo build contract, remove the stale Ink peer
warning, refresh the interoperability issue program, and deliver the change
through PR and merge.

**Architecture:** Keep the diff focused on repository reliability. Use the
existing roadmap issue (#29) and blocker issue (#30) as the canonical GitHub
anchors, and keep feature delivery for #15 / #19 / #28 as follow-up work after
the baseline is repaired.

**Tech Stack:** Bun, Turbo, TypeScript, GitHub Issues/PRs, GitHub Actions,
markdown docs.

**Baseline note:** Any step that expects a failure or warning refers to the
`origin/main` snapshot captured before remediation in this worktree.

---

## Task 1: Capture baseline evidence and current issue topology

**Files:**

- Create: `docs/plans/2026-04-23-workspace-reliability-design.md`
- Create: `docs/plans/2026-04-23-workspace-reliability.md`
- Read: `package.json`
- Read: `packages/cli/package.json`
- Read: `.github/workflows/test.yml`

### Step 1: Reproduce the root build failure

Run: `bun run build`

Expected on the baseline snapshot: Turbo fails with `Missing packageManager`
field in `package.json`.

### Step 2: Reproduce the root test failure

Run: `bun run test`

Expected on the baseline snapshot: Turbo fails through the same missing-root
contract path.

### Step 3: Reproduce the install warning

Run: `bun install`

Expected on the baseline snapshot: Bun prints
`warn: incorrect peer dependency "ink@7.0.1"`.

### Step 4: Confirm dependency use is absent

Run repo search for `@json-render/ink`, `@json-render/core`, `ink`, and
`react` imports under `packages/cli/src`.

Expected: No active runtime imports.

### Step 5: Re-check the issue program

Inspect #29, #30, #15, #19, #27, and #28 plus open PRs #20 and #21.

Expected: #29 remains the canonical roadmap issue and #30 remains the first
executable blocker.

## Task 2: Refresh GitHub milestone and hierarchy metadata

**Files:**

- Modify remotely via GitHub CLI only

### Step 1: Attempt milestone creation

Create milestone: `Interop & Workspace Reliability`.

### Step 2: Re-check issue hierarchy support

Attempt formal sub-issue or dependency wiring from #29 to #30, #15, #19, and
issue #28.

### Step 3: Apply fallback documentation if metadata APIs fail

Update issue bodies or add comments so the roadmap, blocker, related issues,
follow-ups, and blockers remain explicit.

### Step 4: Verify the resulting issue program

Run GitHub reads for the affected issues.

Expected: hierarchy and sequencing are current, even if stored as text rather
than first-class metadata.

## Task 3: Restore the root workspace contract

**Files:**

- Modify: `package.json`
- Modify: `.github/workflows/test.yml`

### Step 1: Use the captured failing root build as the red state

Run: `bun run build`

Expected on the baseline snapshot: failure before the root manifest is fixed.

### Step 2: Add the minimal root metadata

Add the root `packageManager` field using the current Bun version.

### Step 3: Re-run the root build

Run: `bun run build`

Expected: build succeeds.

### Step 4: Update CI to use the same root contract

Replace the package-local build invocation with root workspace `test` and
`build`, preserve smoke steps, and pin the workflow Bun version from the root
`packageManager` contract.

## Task 4: Eliminate the stale Ink peer warning by root cause

**Files:**

- Modify: `packages/cli/package.json`
- Modify: `packages/cli/tsconfig.json`
- Modify: `bun.lock`

### Step 1: Keep the captured warning as red evidence

Run: `bun install`

Expected on the baseline snapshot: incorrect peer dependency warning for Ink.

### Step 2: Remove dead dependencies and stale TS config

- Remove `@json-render/core`, `@json-render/ink`, `ink`, `react`, and
  `@types/react` if unused.
- Remove `jsx: "react-jsx"` if no JSX files remain.

### Step 3: Refresh the lockfile

Run: `bun install`

Expected: lockfile updates with no Ink peer warning.

## Task 5: Make lint verification real and add the remediation skill

**Files:**

- Modify: `packages/cli/package.json`
- Create: `.agents/skills/quality-remediation/SKILL.md`

### Step 1: Add a real package-level lint command

Add the smallest static-check script that makes `bun run lint` meaningful for
the current TypeScript-only package.

### Step 2: Write the remediation skill from the observed failures

Cover:

- missing `packageManager` causing Turbo workspace failure
- dead dependency / peer mismatch diagnosis
- CI workaround detection and correction
- warning, lint, and security remediation expectations

### Step 3: Verify the lint contract

Run: `bun run lint`

Expected: the workspace lint step executes a real static check and passes.

## Task 6: Full verification and smoke checks

**Files:**

- No new files unless verification reveals required fixes

### Step 1: Run install, lint, test, and build

Run:

- `bun install`
- `bun run lint`
- `bun run test`
- `bun run build`

Expected: all four commands pass from the repo root with no peer warning.

### Step 2: Run built CLI smoke

Run: `node packages/cli/dist/index.js lint examples/atmospheric-glass/DESIGN.md`

Expected: no errors, and only repository-baseline warnings if the sample file
itself contains them.

### Step 3: Run tarball smoke

Run the equivalent of the workflow tarball path:

- `cd packages/cli && npm pack`
- install the tarball in a temp directory
- run `npx design.md lint DESIGN.md`
- import `@google/design.md/linter`

Expected: the tarball installs and both CLI and library smoke paths work.

### Step 4: Check deployment and Kubernetes surfaces

Expected: no Kubernetes or runtime deployment assets exist; package and CI
verification remain the only relevant deployment surfaces.

## Task 7: Commit, push, PR, merge, and rescan

**Files:**

- All modified files above

### Step 1: Review git status, diff, and recent log

Gather commit context and draft a concise message explaining why the repository
baseline cleanup is needed.

### Step 2: Commit and push

Push branch `continuous-delivery-20260423` to origin.

### Step 3: Create a draft PR

The PR should summarize:

- root build and test contract restored
- stale Ink peer warning removed
- CI now validates the root build path and Bun contract
- roadmap / blocker issue program refreshed

### Step 4: Advance the PR to merge

- Refresh the branch if GitHub reports it as behind.
- Wait for required checks.
- Do not proactively request human or robot review in a repo that does not
  appear to use one.
- Merge when checks and repository gates allow.

### Step 5: Rescan and continue

After merge, verify default-branch health, update linked issues, and begin the
next executable follow-up issue from #29 if a clean, non-conflicting slice
remains.
