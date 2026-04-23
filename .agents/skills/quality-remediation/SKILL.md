---
name: quality-remediation
description: >
  Use when workspace reliability defects appear as missing root packageManager
  metadata, dead dependency peer warnings, fake lint coverage, or CI commands
  that bypass the root workspace contract.
---

# Quality Remediation

Fix reliability defects at the contract boundary instead of suppressing symptoms.

## When to use this skill

- Root workspace commands fail because package-manager metadata is missing.
- Install logs show peer warnings for libraries with no active imports.
- A package exposes a `lint` target but the workspace contract does not execute
  a real static check.
- CI runs package-local commands that hide a broken root workspace path.
- Warning, lint, or security findings need removal by root cause.

## Workflow

1. Reproduce the failure or warning from the repo root.
2. Trace the contract boundary causing it: root manifest, package manifest,
   compiler config, or workflow.
3. Confirm active imports before removing any dependency chain.
4. Remove dead config with the dead dependency, such as JSX settings after
   `.tsx` sources disappear.
5. Make package lint commands execute a real static check.
6. Update CI to use the root workspace contract and derive tool versions from
   canonical metadata.
7. Re-run install, lint, test, and build, then keep smoke paths that prove
   packaged artifacts still work.

## Quick checks

- `bun run build` fails with missing `packageManager` -> add root
  `packageManager` using the installed Bun version.
- `bun install` warns about Ink or React peers without imports -> remove the
  unused dependency chain and refresh the lockfile.
- `bun run lint` is hollow -> add a package `lint` script that typechecks or
  lints real sources.
- Workflow runs `cd packages/... && bun run build` while root build is broken
  -> switch CI back to root `bun run` commands and keep smoke steps after
  build.

## Common mistakes

- Pinning CI to `latest` instead of the root `packageManager` contract.
- Keeping dead dependencies because they were once planned for future
  features.
- Leaving stale TS JSX config after the last `.tsx` file is gone.
- Treating warnings as acceptable background noise.
