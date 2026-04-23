# Workspace Reliability and Interoperability Program Design

## Goal

Restore a trustworthy repository baseline for `design.md` so the active export
and interoperability roadmap can run without hidden build breakage, stale
dependency warnings, or CI-only workarounds.

## Context

This design captures the baseline `origin/main` failure state observed at the
start of this run and the first delivery slice needed to unblock the broader
interoperability roadmap.

- At the start of this run, `bun run build` at the repo root failed because
  Turbo could not resolve workspaces without a root `packageManager` field.
- At the start of this run, `bun run test` failed through the same missing root
  contract.
- At the start of this run, `bun install` emitted
  `warn: incorrect peer dependency "ink@7.0.1"` because the CLI package still
  declared an Ink / React dependency chain that was not imported by the current
  source tree.
- At the start of this run, `.github/workflows/test.yml` validated `bun test`
  and `cd packages/cli && bun run build`, which masked the broken root build
  contract instead of enforcing it.
- GitHub already has a canonical roadmap issue (#29) and a concrete blocker
  issue (#30), but milestone and formal sub-issue metadata may still require
  refresh or fallback documentation.

## Constraints

- Work from a fresh worktree created from the current default branch reference.
- Keep repo-facing artifacts in English.
- Do not wait for human review by default.
- Do not proactively summon a robot reviewer when the repository does not
  appear to use one.
- Treat warnings, deprecations, lint findings, and security findings as
  remediation targets rather than suppressing them.
- Consider Kubernetes and deployment surfaces explicitly, even if the result is
  that none are present in the current repository.
- Keep the first slice small enough to merge autonomously from `origin/main`.

## Candidate Approaches

### Approach A — Baseline-first cleanup, then continue the roadmap (recommended)

1. Refresh the issue program around the existing roadmap and blocker issues.
2. Fix the root build/test contract, remove the stale dependency warning, and
   align CI with the repo-level contract.
3. Merge that blocker slice.
4. Re-scan the roadmap and continue with the next executable issue.

#### Approach A pros

- Smallest mergeable diff with direct operational value.
- Removes warning noise before feature work.
- Creates a reliable baseline for #15, #19, #27, and #28.

#### Approach A cons

- Delays direct feature delivery by one PR.

### Approach B — Combine baseline cleanup with Tailwind v4 export work

Implement the workspace cleanup and one export feature in the same branch.

#### Approach B pros

- Fewer PRs overall.
- Immediate user-facing feature delivery.

#### Approach B cons

- Larger diff, harder review, mixed responsibility.
- Harder to separate blocker remediation from feature regressions.

### Approach C — Issue-program refresh only

Refresh GitHub issues and milestone metadata without changing code.

#### Approach C pros

- Fastest GitHub housekeeping path.

#### Approach C cons

- Leaves the broken repo baseline and warning unresolved.
- Does not satisfy the requirement to fix warnings by root cause.

## Recommendation

Use **Approach A**.

The strongest current-code concern is the broken root workspace contract. The
roadmap already has an explicit blocker issue (#30), and every downstream
interoperability change depends on being able to trust the repository baseline.

## Proposed Issue Program Topology

- **Milestone intent:** `Interop & Workspace Reliability`
- **Canonical meta issue:** #29 `Token interoperability roadmap`
- **Concrete blocker issue:** #30 `Restore root Bun/Turbo build contract and
  remove stale Ink peer mismatch`
- **Related execution issues:**
  - #15 CSS custom properties export
  - #19 Tailwind v4 export support
  - #28 DTCG `tokens.json` -> `DESIGN.md`
- **Cross-cutting issue:**
  - #27 OKLCH color support

Relationship intent:

- #30 remains the first executable blocker under #29.
- #15, #19, and #28 remain direct roadmap children or explicitly linked
  follow-up issues.
- #27 remains a cross-cutting spec/fidelity dependency rather than a hard
  blocker for the baseline cleanup.
- If milestone or formal sub-issue wiring is unavailable from the current
  account, the fallback is to record the same hierarchy in issue bodies and
  comments.

## Implementation Shape

### Code changes

- Add `packageManager` to the root `package.json` using the currently installed
  Bun version.
- Remove unused CLI dependencies that trigger the Ink peer mismatch if the
  source tree has no imports of them.
- Remove stale TS React / JSX compiler settings if no JSX sources remain.
- Add a package-level lint script so `bun run lint` becomes a meaningful static
  check instead of a no-op workspace placeholder.
- Update CI so the workflow:
  - reads Bun from the root `packageManager` contract,
  - runs root workspace `test` and `build`, and
  - preserves package smoke coverage.

### Documentation changes

- Record the investigation and execution plan under `docs/plans/`.
- Add a repo-local remediation skill for warning, lint, and security-class
  defects observed during this run.

### GitHub changes

- Re-check milestone creation and issue-linking capabilities.
- Refresh #29 and #30 if the latest evidence or hierarchy wording changed.
- Create comments or issue-body relationship sections when first-class metadata
  edges are unavailable.

## Verification Strategy

- `bun install` should complete without the Ink peer warning.
- `bun run lint` should execute a real package-level static check and pass.
- `bun run test` should pass from the repo root.
- `bun run build` should pass from the repo root.
- Built CLI smoke and tarball smoke should continue to pass.
- PR checks should validate the same root contract used locally.

## Deployment / Runtime / Kubernetes Notes

- No Kubernetes manifests, Helm charts, Dockerfiles, or runtime deployment
  manifests are present in the current repository tree.
- Kubernetes is therefore considered explicitly and found to be out of direct
  runtime scope for this slice.
- The relevant deployment surface here is CI, package build, tarball smoke, and
  default-branch health after merge.

## Decisions

- Fix the workspace baseline before continuing feature delivery.
- Treat the peer warning as a dead-dependency / config drift problem unless code
  inspection proves active runtime use.
- Keep the first PR scoped to repository reliability plus issue-program
  maintenance.
