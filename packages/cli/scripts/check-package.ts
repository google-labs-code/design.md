#!/usr/bin/env bun
// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Package verification script for @google/design.md
 *
 * Runs a series of checks, grouped into phases, to ensure the package is
 * correctly structured for npm publication. The final phase installs the
 * packed tarball into a throwaway consumer project and audits the production
 * dependency tree that consumers would actually receive.
 * Exit code 0 = all pass, 1 = failures.
 *
 * Usage: bun run scripts/check-package.ts [--skip-audit]
 *
 * The dependency audit needs network access to the npm registry and fails
 * closed when the registry can't be reached. To run offline, opt out with
 * `--skip-audit` or `DESIGN_MD_SKIP_AUDIT=1`; the audit is then reported as
 * SKIPPED rather than passed.
 */

import { readFileSync, existsSync, mkdtempSync, writeFileSync, rmSync } from 'fs';
import { join, resolve } from 'path';
import { execSync } from 'child_process';
import { Glob } from 'bun';
import { tmpdir } from 'os';

// ── Helpers ────────────────────────────────────────────────────────

const ROOT = resolve(import.meta.dir, '..');
const PKG_PATH = join(ROOT, 'package.json');

let passed = 0;
let failed = 0;
let skipped = 0;
let phases = 0;

function pass(label: string) {
  console.log(`  ✅ ${label}`);
  passed++;
}

function fail(label: string, detail?: string) {
  console.error(`  ❌ ${label}`);
  if (detail) console.error(`     → ${detail}`);
  failed++;
}

function skip(label: string, reason: string) {
  console.log(`  ⏭️  SKIPPED ${label}`);
  console.log(`     → ${reason}`);
  skipped++;
}

function check(label: string, ok: boolean, detail?: string) {
  if (ok) pass(label);
  else fail(label, detail);
}

function heading(title: string) {
  phases++;
  console.log(`\n── ${title} ${'─'.repeat(Math.max(0, 56 - title.length))}`);
}

function readPkg(): Record<string, unknown> {
  return JSON.parse(readFileSync(PKG_PATH, 'utf-8'));
}

function exec(cmd: string, opts?: { cwd?: string; timeoutMs?: number }): { ok: boolean; stdout: string; stderr: string } {
  try {
    const stdout = execSync(cmd, {
      cwd: opts?.cwd ?? ROOT,
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'pipe'],
      timeout: opts?.timeoutMs,
      maxBuffer: 64 * 1024 * 1024,
      env: { ...process.env, PATH: `${process.env.HOME}/.bun/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:${process.env.PATH ?? ''}` },
    });
    return { ok: true, stdout, stderr: '' };
  } catch (e: unknown) {
    const err = e as { stdout?: string; stderr?: string };
    return { ok: false, stdout: err.stdout ?? '', stderr: err.stderr ?? '' };
  }
}

// ── Phase 1: Pre-pack validation ───────────────────────────────────

function phase1_config() {
  heading('Phase 1a: Package.json validation');

  const pkg = readPkg();

  // 1. files field exists
  const files = pkg.files as string[] | undefined;
  check('#1  `files` field exists', Array.isArray(files) && files.length > 0,
    'Add a "files" array to package.json to control what ships');

  // 2. exports structure
  const exports = pkg.exports as Record<string, Record<string, string>> | undefined;
  check('#2  `exports["."]` defined', !!exports?.['.'],
    'Missing exports["."] in package.json');

  if (exports?.['.']) {
    check('#3  `exports["."].types` field exists', !!exports['.'].types,
      'Missing types condition in exports["."]');
  } else {
    fail('#3  `exports["."].types` field exists', 'Skipped — no exports');
  }

  // 4. main field
  const main = pkg.main as string | undefined;
  check('#4  `main` field exists', !!main,
    'Missing "main" field in package.json');

  // 5. types field
  const types = pkg.types as string | undefined;
  check('#5  `types` field exists', !!types,
    'Missing "types" field in package.json');

  // 5c. bin map exposes a Windows-friendly alias (no dot in the name).
  // The `design.md` bin file is unrunnable on Windows because the `.md`
  // suffix collides with the Markdown file association, so PowerShell
  // opens the shim in the user's Markdown editor instead of executing it.
  // A dot-free alias such as `designmd` lets the npm CMD/PowerShell shims
  // resolve cleanly via PATHEXT. See https://github.com/google-labs-code/design.md/issues/54.
  const bin = pkg.bin as Record<string, string> | string | undefined;
  const binEntries = typeof bin === 'object' && bin !== null ? Object.keys(bin) : [];
  const hasDotFreeAlias = binEntries.some((name) => !name.includes('.'));
  check('#5c bin map exposes a Windows-friendly alias (no dot in the name)',
    hasDotFreeAlias,
    `bin entries: ${binEntries.join(', ') || '(none)'} — add an alias without a dot for Windows compatibility`);
}

function phase1_paths() {
  heading('Phase 1b: Path resolution (post-build)');

  const pkg = readPkg();
  const exports = pkg.exports as Record<string, Record<string, string>> | undefined;

  if (exports?.['.']) {
    const importPath = join(ROOT, exports['.'].import);
    const typesPath = join(ROOT, exports['.'].types);
    check('#2b `exports["."].import` resolves', existsSync(importPath),
      `Missing: ${exports['.'].import}`);
    check('#3b `exports["."].types` resolves', existsSync(typesPath),
      `Missing: ${exports['.'].types}`);
  }

  const main = pkg.main as string | undefined;
  check('#4b `main` resolves', !!main && existsSync(join(ROOT, main)),
    `Missing: ${main}`);

  const types = pkg.types as string | undefined;
  check('#5b `types` resolves', !!types && existsSync(join(ROOT, types)),
    `Missing: ${types}`);
}

// ── Phase 2: Clean build ───────────────────────────────────────────

function phase2() {
  heading('Phase 2: Clean build');

  // 6. Clean dist
  const distPath = join(ROOT, 'dist');
  if (existsSync(distPath)) {
    rmSync(distPath, { recursive: true, force: true });
  }
  check('#6  Clean dist', !existsSync(distPath));

  // 7. Build
  const build = exec('bun run build');
  check('#7  Build succeeds', build.ok, 'tsc exited with non-zero');

  if (!existsSync(distPath)) {
    fail('#8  No test files in dist', 'dist/ does not exist after build');
    fail('#9  No fixture files in dist', 'dist/ does not exist after build');
    return;
  }

  // 8. No test files in dist
  const testGlob = new Glob('**/*.test.*');
  const testFiles = Array.from(testGlob.scanSync({ cwd: distPath, absolute: false }));
  check('#8  No test files in dist', testFiles.length === 0,
    `Found: ${testFiles.join(', ')}`);

  // 9. No fixture files in dist
  const fixtureGlob = new Glob('**/fixtures/**');
  const fixtureFiles = Array.from(fixtureGlob.scanSync({ cwd: distPath, absolute: false }));
  check('#9  No fixture files in dist', fixtureFiles.length === 0,
    `Found: ${fixtureFiles.join(', ')}`);
}

// ── Phase 3: Pack audit ────────────────────────────────────────────

function phase3() {
  heading('Phase 3: Pack audit');

  // 10. npm pack --dry-run
  const pack = exec('npm pack --dry-run --json 2>/dev/null');
  let fileList: string[] = [];

  if (pack.ok) {
    try {
      const parsed = JSON.parse(pack.stdout);
      const files = (parsed[0]?.files ?? parsed.files ?? []) as Array<{ path: string }>;
      fileList = files.map((f) => f.path);
    } catch {
      // Fallback: parse the non-JSON dry-run output
      const lines = pack.stdout.split('\n');
      fileList = lines
        .map((l) => l.replace(/^npm notice\s+\d+[\w.]+\s+/, '').trim())
        .filter((l) => l.includes('/') || l.endsWith('.js') || l.endsWith('.json'));
    }
  }

  check('#10 `npm pack --dry-run` succeeds', pack.ok && fileList.length > 0,
    'npm pack failed or returned empty file list');

  if (fileList.length === 0) {
    fail('#11 No source .ts files in tarball', 'Skipped — no file list');
    fail('#12 No test files in tarball', 'Skipped — no file list');
    fail('#13 No config files in tarball', 'Skipped — no file list');
    fail('#14 No fixtures in tarball', 'Skipped — no file list');
    fail('#15 Entry point in tarball', 'Skipped — no file list');
    return;
  }

  // 11. No source .ts files (allow .d.ts and .d.ts.map)
  const rawTs = fileList.filter(
    (f) => f.endsWith('.ts') && !f.endsWith('.d.ts') && !f.endsWith('.d.ts.map')
  );
  check('#11 No source .ts files in tarball', rawTs.length === 0,
    `Found: ${rawTs.join(', ')}`);

  // 12. No test files
  const testInPack = fileList.filter((f) => f.includes('.test.'));
  check('#12 No test files in tarball', testInPack.length === 0,
    `Found: ${testInPack.join(', ')}`);

  // 13. No config files
  const configInPack = fileList.filter((f) => f.includes('tsconfig'));
  check('#13 No config files in tarball', configInPack.length === 0,
    `Found: ${configInPack.join(', ')}`);

  // 14. No fixtures
  const fixturesInPack = fileList.filter((f) => f.includes('fixtures'));
  check('#14 No fixtures in tarball', fixturesInPack.length === 0,
    `Found: ${fixturesInPack.join(', ')}`);

  // 15. Entry point present
  const hasIndex = fileList.some((f) => f.includes('dist/index.js'));
  const hasTypes = fileList.some((f) => f.includes('dist/index.d.ts'));
  check('#15 Entry point present in tarball', hasIndex && hasTypes,
    `index.js: ${hasIndex}, index.d.ts: ${hasTypes}`);
}

// ── Phase 4: Consumer smoke test ───────────────────────────────────

function phase4() {
  heading('Phase 4: Consumer smoke test');

  const distIndex = join(ROOT, 'dist', 'linter', 'index.js');
  const distTypes = join(ROOT, 'dist', 'linter', 'index.d.ts');

  // 16. Import resolution (ESM)
  const tmpDir = mkdtempSync(join(tmpdir(), 'check-pkg-'));
  const smokeFile = join(tmpDir, 'smoke.mjs');
  writeFileSync(
    smokeFile,
    `import { lint } from '${distIndex}';\n` +
    `if (typeof lint !== 'function') { process.exit(1); }\n` +
    `console.log('ok');\n`
  );
  const importCheck = exec(`node ${smokeFile}`);
  if (!importCheck.ok || !importCheck.stdout.trim().endsWith('ok')) {
    console.error('Smoke test failed!');
    console.error('STDOUT:', importCheck.stdout);
    console.error('STDERR:', importCheck.stderr);
  }
  check('#16 Import resolution (ESM)', importCheck.ok && importCheck.stdout.trim().endsWith('ok'),
    'Could not import lint() from dist/index.js');

  // 17. Type declarations exist and export lint
  const dtsContent = existsSync(distTypes) ? readFileSync(distTypes, 'utf-8') : '';
  const hasLintExport = dtsContent.includes('export') && dtsContent.includes('lint');
  const hasLintReportType = dtsContent.includes('LintReport');
  check('#17 Type declarations valid',
    hasLintExport && hasLintReportType,
    `index.d.ts missing lint export or LintReport type`);

  // 18. Runtime sanity
  const sanityFile = join(tmpDir, 'sanity.mjs');
  writeFileSync(
    sanityFile,
    `import { lint } from '${distIndex}';\n` +
    `const result = lint('---\\nname: Test\\ncolors:\\n  primary: "#ff0000"\\n---');\n` +
    `const keys = Object.keys(result);\n` +
    `const expected = ['designSystem','findings','summary','tailwindConfig'];\n` +
    `const hasAll = expected.every(k => keys.includes(k));\n` +
    `if (!hasAll) {\n` +
    `  console.error('Missing keys. Actual:', keys);\n` +
    `  process.exit(1);\n` +
    `}\n` +
    `if (typeof result.designSystem !== 'object') { process.exit(1); }\n` +
    `if (!Array.isArray(result.findings)) { process.exit(1); }\n` +
    `if (typeof result.summary.errors !== 'number') { process.exit(1); }\n` +
    `console.log('ok');\n`
  );
  const sanityCheck = exec(`node ${sanityFile}`);
  if (!sanityCheck.ok || !sanityCheck.stdout.trim().endsWith('ok')) {
    console.error('Sanity check failed!');
    console.error('STDOUT:', sanityCheck.stdout);
    console.error('STDERR:', sanityCheck.stderr);
  }
  check('#18 Runtime sanity', sanityCheck.ok && sanityCheck.stdout.trim().endsWith('ok'),
    'lint() did not return expected shape');

  // 19. CLI entry point works
  const cliIndex = join(ROOT, 'dist', 'index.js');
  const cliCheck = exec(`node ${cliIndex} --help`);
  check('#19 CLI entry point valid', cliCheck.ok && !cliCheck.stderr.includes('ENOENT'),
    'CLI failed to run or reported missing files');

  // 20. CLI spec command works
  const specCheck = exec(`node ${cliIndex} spec`);
  check('#20 CLI spec command valid', specCheck.ok && !specCheck.stderr.includes('Failed to load spec.md'),
    'CLI spec command failed to load spec.md');

  // Cleanup
  try {
    rmSync(tmpDir, { recursive: true, force: true });
  } catch {
    // best effort
  }
}

// ── Phase 5: Consumer dependency audit ─────────────────────────────

const AUDIT_LABEL = 'Consumer dependency audit (no high/critical advisories)';
const FAILING_SEVERITIES = new Set(['high', 'critical']);
const NETWORK_TIMEOUT_MS = 3 * 60 * 1000;
// Bound npm's network retries so an unreachable registry fails in seconds
// instead of hanging on npm's default exponential backoff.
const NPM_NETWORK_FLAGS = '--fetch-retries=1 --fetch-retry-mintimeout=2000 --fetch-retry-maxtimeout=10000 --fetch-timeout=60000';

function auditSkipReason(): string | null {
  if (process.argv.includes('--skip-audit')) return '--skip-audit flag set';
  const env = process.env.DESIGN_MD_SKIP_AUDIT;
  if (env && env !== '0' && env.toLowerCase() !== 'false') return `DESIGN_MD_SKIP_AUDIT=${env}`;
  return null;
}

interface Advisory {
  pkg: string;
  severity: string;
  url: string;
  title: string;
}

/**
 * Packs the package and installs the tarball (production deps only) into a
 * fresh consumer project, so the audit sees exactly what a user would get —
 * not the monorepo's root lockfile.
 */
function installPackedTarball(consumerDir: string): { ok: boolean; detail: string } {
  const packed = exec(`npm pack --json --pack-destination "${consumerDir}"`, { timeoutMs: NETWORK_TIMEOUT_MS });
  let tarball = '';
  try {
    const parsed = JSON.parse(packed.stdout);
    tarball = (parsed[0]?.filename ?? '') as string;
  } catch {
    // handled below
  }
  if (!packed.ok || !tarball) {
    return { ok: false, detail: `npm pack failed: ${packed.stderr.trim().split('\n').pop() ?? ''}` };
  }
  // npm >= 9 may prefix scoped filenames differently; resolve to what's on disk.
  const tarballPath = join(consumerDir, tarball.replace(/^@/, '').replace(/\//g, '-'));
  if (!existsSync(tarballPath)) {
    return { ok: false, detail: `packed tarball not found at ${tarballPath}` };
  }

  writeFileSync(
    join(consumerDir, 'package.json'),
    JSON.stringify({ name: 'check-package-consumer', version: '0.0.0', private: true }, null, 2) + '\n',
  );
  const install = exec(
    `npm install "${tarballPath}" --omit=dev --ignore-scripts --no-audit --no-fund ${NPM_NETWORK_FLAGS}`,
    { cwd: consumerDir, timeoutMs: NETWORK_TIMEOUT_MS },
  );
  if (!install.ok) {
    const firstErrors = install.stderr.trim().split('\n')
      .filter((l) => l.trim() !== '' && l.trim() !== 'npm error')
      .slice(0, 2)
      .join(' | ');
    return { ok: false, detail: `npm install of packed tarball failed: ${firstErrors || 'no output'}` };
  }
  return { ok: true, detail: '' };
}

/**
 * Runs `npm audit` in `consumerDir` and records a single pass/fail result.
 * Fails closed: anything other than a well-formed report with zero
 * high/critical advisories is a failure.
 */
function auditConsumer(consumerDir: string) {
  const audit = exec(`npm audit --omit=dev --audit-level=high --json ${NPM_NETWORK_FLAGS}`, {
    cwd: consumerDir,
    timeoutMs: NETWORK_TIMEOUT_MS,
  });

  let report: Record<string, unknown>;
  try {
    report = JSON.parse(audit.stdout);
  } catch {
    const why = (audit.stderr || audit.stdout).trim().split('\n').slice(-3).join(' | ') || 'no output';
    fail(AUDIT_LABEL, `audit unavailable: could not parse npm audit output (${why}). ` +
      'Re-run with network access, or pass --skip-audit / DESIGN_MD_SKIP_AUDIT=1 to skip explicitly.');
    return;
  }

  if (report.error) {
    const err = (typeof report.error === 'object' ? report.error : {}) as {
      code?: string; summary?: string; detail?: string;
    };
    const why = [err.code, err.summary, err.detail, report.message as string | undefined]
      .filter((x) => typeof x === 'string' && x.trim() !== '')
      .join(' — ') || 'no details';
    fail(AUDIT_LABEL, `audit unavailable: npm audit reported an error (${why}). Re-run with network ` +
      'access, or pass --skip-audit / DESIGN_MD_SKIP_AUDIT=1 to skip explicitly.');
    return;
  }

  const counts = (report.metadata as { vulnerabilities?: Record<string, number> } | undefined)?.vulnerabilities;
  const vulns = report.vulnerabilities as Record<string, { via?: unknown[] }> | undefined;
  if (!counts || typeof counts !== 'object' || !vulns || typeof vulns !== 'object') {
    fail(AUDIT_LABEL, 'audit unavailable: npm audit output is missing vulnerability data');
    return;
  }

  // Collect concrete advisories (via entries that are objects, not package names).
  const advisories = new Map<string, Advisory>();
  for (const entry of Object.values(vulns)) {
    for (const via of entry.via ?? []) {
      if (typeof via !== 'object' || via === null) continue;
      const v = via as { name?: string; severity?: string; url?: string; title?: string; source?: number };
      const key = v.url ?? `${v.name}:${v.source}`;
      advisories.set(key, {
        pkg: v.name ?? '?',
        severity: v.severity ?? 'unknown',
        url: v.url ?? '(no url)',
        title: v.title ?? '(no title)',
      });
    }
  }

  const blocking = [...advisories.values()].filter((a) => FAILING_SEVERITIES.has(a.severity));
  const informational = [...advisories.values()].filter((a) => !FAILING_SEVERITIES.has(a.severity));
  const highCount = (counts.high ?? 0) + (counts.critical ?? 0);

  for (const a of informational) {
    console.log(`  ℹ️  ${a.severity}: ${a.pkg} — ${a.title} (${a.url})`);
  }

  if (blocking.length === 0 && highCount === 0) {
    pass(`${AUDIT_LABEL} — ${informational.length} lower-severity advisor${informational.length === 1 ? 'y' : 'ies'}`);
    return;
  }

  const list = blocking.length > 0
    ? blocking.map((a) => `${a.severity}: ${a.pkg} — ${a.title} (${a.url})`).join('\n       ')
    : `${highCount} high/critical vulnerabilities reported, but no advisory details were returned`;
  fail(AUDIT_LABEL, `found ${blocking.length || highCount} high/critical advisor${(blocking.length || highCount) === 1 ? 'y' : 'ies'}:\n       ${list}`);
}

function phase5() {
  heading('Phase 5: Consumer dependency audit');

  const reason = auditSkipReason();
  if (reason) {
    skip(AUDIT_LABEL, `${reason} — dependency audit was NOT run`);
    return;
  }

  const consumerDir = mkdtempSync(join(tmpdir(), 'check-pkg-consumer-'));
  try {
    const install = installPackedTarball(consumerDir);
    if (!install.ok) {
      fail(AUDIT_LABEL, `audit unavailable: ${install.detail}. Re-run with network access, or pass ` +
        '--skip-audit / DESIGN_MD_SKIP_AUDIT=1 to skip explicitly.');
      return;
    }
    auditConsumer(consumerDir);
  } finally {
    try {
      rmSync(consumerDir, { recursive: true, force: true });
    } catch {
      // best effort
    }
  }
}

// ── Main ───────────────────────────────────────────────────────────

console.log('🔍 Package verification: @google/design.md\n');

phase1_config();
phase2();
phase1_paths();
phase3();
phase4();
phase5();

console.log(`\n${'═'.repeat(60)}`);
console.log(`  ${passed + failed + skipped} checks across ${phases} phases`);
console.log(`  ✅ ${passed} passed   ❌ ${failed} failed${skipped > 0 ? `   ⏭️  ${skipped} skipped` : ''}`);
console.log(`${'═'.repeat(60)}\n`);

if (failed > 0) {
  process.exit(1);
}
