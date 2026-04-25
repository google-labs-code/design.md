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

import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { basename, join } from 'node:path';
import { safeJsonParse } from './safe-json.js';
import type { IconsData } from './spec.js';

export interface ProjectMetadata {
  /** Display name. README H1 > package.json name > directory basename. */
  name: string;
  /** Short description. package.json.description if present. */
  description?: string;
  /** package.json version. */
  version?: string;
  /** First H1 text from README.md, if any. */
  readmeH1?: string;
  /** First real paragraph from README.md, capped length, plain-text. */
  readmeIntro?: string;
  /**
   * Iconography metadata derived from package.json dependencies. Present
   * only when a recognized icon-library package appears in `dependencies`
   * or `devDependencies`. The `library` field carries the display-form
   * name (e.g. "Lucide", "Heroicons"). Wiring into the merged design
   * state is handled downstream.
   */
  icons?: IconsData;
}

interface PackageJsonShape {
  name?: string;
  version?: string;
  description?: string;
  dependencies?: Record<string, unknown>;
  devDependencies?: Record<string, unknown>;
}

const INTRO_MAX_LEN = 500;

/**
 * Ordered mapping from dependency-package name to display-form library
 * name. Order matters: first match wins when a project declares
 * multiple icon libraries. Order is stable and grouped by library
 * family. The deterministic-order test pins this contract — do not
 * reorder without updating that test.
 *
 * Kept small and explicit — an unbounded heuristic invites false
 * positives on packages that happen to contain "icon" in their name.
 * Renderer/utility packages (e.g. `@fortawesome/fontawesome-svg-core`)
 * are intentionally omitted; only icon-set packages are listed.
 */
const LIBRARY_RULES: ReadonlyArray<{ pkg: string; library: string }> = [
  { pkg: 'lucide-react', library: 'Lucide' },
  { pkg: 'lucide-vue-next', library: 'Lucide' },
  { pkg: 'lucide-svelte', library: 'Lucide' },
  { pkg: 'lucide', library: 'Lucide' },
  { pkg: '@heroicons/react', library: 'Heroicons' },
  { pkg: '@heroicons/vue', library: 'Heroicons' },
  { pkg: '@mui/icons-material', library: 'Material Symbols' },
  { pkg: '@material-symbols/svg-400', library: 'Material Symbols' },
  { pkg: 'phosphor-react', library: 'Phosphor' },
  { pkg: '@phosphor-icons/react', library: 'Phosphor' },
  { pkg: '@phosphor-icons/vue', library: 'Phosphor' },
  { pkg: '@tabler/icons-react', library: 'Tabler' },
  { pkg: '@tabler/icons', library: 'Tabler' },
  { pkg: 'react-feather', library: 'Feather' },
  { pkg: 'feather-icons', library: 'Feather' },
  { pkg: '@radix-ui/react-icons', library: 'Radix' },
  { pkg: '@fortawesome/free-solid-svg-icons', library: 'Font Awesome' },
  { pkg: '@fortawesome/free-regular-svg-icons', library: 'Font Awesome' },
];

function detectIconLibrary(pkg: PackageJsonShape): IconsData | undefined {
  const deps = pkg.dependencies ?? {};
  const devDeps = pkg.devDependencies ?? {};
  for (const { pkg: name, library } of LIBRARY_RULES) {
    // Presence of the KEY is the signal; the version value can be
    // anything (string, object — we never inspect it).
    if (Object.prototype.hasOwnProperty.call(deps, name) ||
        Object.prototype.hasOwnProperty.call(devDeps, name)) {
      return { library };
    }
  }
  return undefined;
}

function readPackageJson(projectPath: string): PackageJsonShape | null {
  const pkgPath = join(projectPath, 'package.json');
  if (!existsSync(pkgPath)) return null;
  const parsed = safeJsonParse<PackageJsonShape>(readFileSync(pkgPath, 'utf-8'));
  if (!parsed) return null;
  // Only the scalar string fields and dependency maps we actually
  // consume. Ignoring everything else means an attacker can't smuggle
  // surprising structures into the pipeline via the package.json.
  const out: PackageJsonShape = {};
  if (typeof parsed.name === 'string') out.name = parsed.name;
  if (typeof parsed.version === 'string') out.version = parsed.version;
  if (typeof parsed.description === 'string') out.description = parsed.description;
  if (parsed.dependencies && typeof parsed.dependencies === 'object' && !Array.isArray(parsed.dependencies)) {
    out.dependencies = parsed.dependencies as Record<string, unknown>;
  }
  if (parsed.devDependencies && typeof parsed.devDependencies === 'object' && !Array.isArray(parsed.devDependencies)) {
    out.devDependencies = parsed.devDependencies as Record<string, unknown>;
  }
  return out;
}

function findReadme(projectPath: string): string | null {
  let entries: string[] = [];
  try {
    entries = readdirSync(projectPath);
  } catch {
    return null;
  }
  const match = entries.find((e) => /^readme\.mdx?$/i.test(e));
  return match ? join(projectPath, match) : null;
}

function stripFrontmatter(raw: string): string {
  if (!raw.startsWith('---\n')) return raw;
  const end = raw.indexOf('\n---', 4);
  if (end === -1) return raw;
  return raw.slice(end + 4).replace(/^\r?\n/, '');
}

function looksLikeHtmlOrBadgeBlock(paragraph: string): boolean {
  const trimmed = paragraph.trim();
  if (trimmed.startsWith('<')) return true;
  // Lines that are only badge-style markdown images.
  if (/^!\[[^\]]*\]\([^)]+\)(\s+!\[[^\]]*\]\([^)]+\))*$/.test(trimmed)) return true;
  return false;
}

function extractReadmeParts(
  src: string,
): { h1?: string; intro?: string } {
  const body = stripFrontmatter(src);
  const lines = body.split(/\r?\n/);

  let h1: string | undefined;
  const paragraphs: string[] = [];
  let buffer: string[] = [];

  const flushBuffer = (): void => {
    if (buffer.length > 0) {
      paragraphs.push(buffer.join(' ').trim());
      buffer = [];
    }
  };

  for (const line of lines) {
    if (line.trim() === '') {
      flushBuffer();
      continue;
    }
    if (line.startsWith('# ') && !h1) {
      h1 = line.slice(2).trim();
      flushBuffer();
      continue;
    }
    if (line.startsWith('#')) {
      // Stop at the first subsection — keep intro limited to the opening prose.
      flushBuffer();
      break;
    }
    buffer.push(line);
  }
  flushBuffer();

  const intro = paragraphs.find((p) => p.length > 0 && !looksLikeHtmlOrBadgeBlock(p));
  const result: { h1?: string; intro?: string } = {};
  if (h1) result.h1 = h1;
  if (intro) {
    result.intro = intro.length > INTRO_MAX_LEN ? `${intro.slice(0, INTRO_MAX_LEN - 1).trimEnd()}…` : intro;
  }
  return result;
}

export function readProjectMetadata(projectPath: string): ProjectMetadata {
  const pkg = readPackageJson(projectPath);
  const readmePath = findReadme(projectPath);
  const readmeParts = readmePath
    ? extractReadmeParts(readFileSync(readmePath, 'utf-8'))
    : {};

  const name =
    readmeParts.h1 ??
    (pkg?.name ? pkg.name.replace(/^@[^/]+\//, '') : undefined) ??
    basename(projectPath);

  const meta: ProjectMetadata = { name };
  if (pkg?.description) meta.description = pkg.description;
  if (pkg?.version) meta.version = pkg.version;
  if (readmeParts.h1) meta.readmeH1 = readmeParts.h1;
  if (readmeParts.intro) meta.readmeIntro = readmeParts.intro;
  const icons = pkg ? detectIconLibrary(pkg) : undefined;
  if (icons) meta.icons = icons;
  return meta;
}
