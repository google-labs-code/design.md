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

import { realpathSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { safeWriteFile } from './safe-write.js';
import { detectFramework } from './framework-detector.js';
import { scanSources } from './source-scanner.js';
import { parseTailwindConfig } from './tailwind-parser.js';
import { parseCssVariables } from './css-var-parser.js';
import { parseDtcgTokens } from './dtcg-parser.js';
import { mergeStates, type PartialState, type MergedState } from './merger.js';
import { emitDesignMd } from './markdown-emitter.js';
import { readProjectMetadata } from './project-metadata.js';
import type {
  ImportOptions,
  ImportResult,
  ImportStep,
  SourceCounts,
} from './spec.js';

function countsOf(p: PartialState): SourceCounts {
  return {
    colors: p.colors?.size ?? 0,
    typography: p.typography?.size ?? 0,
    spacing: p.spacing?.size ?? 0,
    rounded: p.rounded?.size ?? 0,
  };
}

function totalCount(c: SourceCounts): number {
  return c.colors + c.typography + c.spacing + c.rounded;
}

export async function runImport(opts: ImportOptions): Promise<ImportResult> {
  const emit = (s: ImportStep): void => opts.onStep?.(s);
  const warnings: string[] = [];
  const partials: PartialState[] = [];

  // Resolve and validate the project root once. realpath resolves symlinks
  // so subsequent containment checks in safeWriteFile compare against the
  // same canonical root the scanner walks.
  let canonicalRoot: string;
  try {
    const st = statSync(opts.projectPath);
    if (!st.isDirectory()) {
      throw new Error('projectPath is not a directory');
    }
    canonicalRoot = realpathSync(opts.projectPath);
  } catch (err) {
    const msg = (err as Error).message;
    emit({ kind: 'error', message: 'invalid project path', path: opts.projectPath });
    return {
      success: false,
      markdown: '',
      framework: { name: 'unknown', confidence: 'low', evidence: [msg] },
      sources: { tailwindConfigs: [], cssFiles: [], dtcgFiles: [] },
      warnings: [msg],
    };
  }

  emit({ kind: 'detect-start', projectPath: canonicalRoot });
  const framework = detectFramework(canonicalRoot);
  emit({ kind: 'detect-done', framework });

  emit({ kind: 'scan-start' });
  const sources = scanSources(canonicalRoot, framework.name);
  emit({ kind: 'scan-done', sources });

  // Paths that actually contributed tokens — passed to the emitter so the
  // body's "Sources scanned" line reflects real signal, not the full raw scan.
  const contributingSources = { tailwindConfigs: [] as string[], cssFiles: [] as string[], dtcgFiles: [] as string[] };

  // Order: css → tailwind → dtcg so the most structured source wins.
  for (const path of sources.cssFiles) {
    const partial = parseCssVariables(path);
    if (partial.warnings) warnings.push(...partial.warnings);
    const counts = countsOf(partial);
    if (totalCount(counts) === 0) {
      emit({ kind: 'parse-skip', source: 'css', path, reason: 'no tokens found' });
      continue;
    }
    emit({ kind: 'parse-source', source: 'css', path, counts });
    contributingSources.cssFiles.push(path);
    partials.push(partial);
  }

  for (const path of sources.tailwindConfigs) {
    try {
      const partial = await parseTailwindConfig(path);
      if (partial.warnings) warnings.push(...partial.warnings);
      const counts = countsOf(partial);
      emit({ kind: 'parse-source', source: 'tailwind', path, counts });
      if (totalCount(counts) > 0) contributingSources.tailwindConfigs.push(path);
      partials.push(partial);
    } catch (err) {
      emit({
        kind: 'parse-skip',
        source: 'tailwind',
        path,
        reason: (err as Error).message,
      });
    }
  }

  for (const path of sources.dtcgFiles) {
    const partial = parseDtcgTokens(path);
    if (partial.warnings) warnings.push(...partial.warnings);
    const counts = countsOf(partial);
    if (totalCount(counts) === 0) {
      emit({ kind: 'parse-skip', source: 'dtcg', path, reason: 'no tokens found' });
      continue;
    }
    emit({ kind: 'parse-source', source: 'dtcg', path, counts });
    contributingSources.dtcgFiles.push(path);
    partials.push(partial);
  }

  const projectMeta = readProjectMetadata(canonicalRoot);
  // Asymmetric precedence by field: name/description from package.json
  // are AUTHORITATIVE (push → highest precedence under last-wins), but
  // the icon-library heuristic from package.json is a WEAK signal that
  // CSS and DTCG should be allowed to override (unshift → lowest
  // precedence). A project may depend on lucide-react for one
  // component while declaring "Heroicons" in its design tokens.
  if (projectMeta.icons) {
    partials.unshift({ icons: projectMeta.icons });
  }
  const metaPartial: PartialState = { name: projectMeta.name };
  if (projectMeta.description) metaPartial.description = projectMeta.description;
  partials.push(metaPartial);

  const merged: MergedState = mergeStates(partials);
  emit({
    kind: 'merge-done',
    totals: { ...countsOf(merged), components: merged.components.size },
  });

  const markdown = emitDesignMd(merged, {
    framework,
    sources: contributingSources,
    ...(projectMeta.readmeIntro ? { readmeIntro: projectMeta.readmeIntro } : {}),
    ...(projectMeta.version ? { version: projectMeta.version } : {}),
  });
  const userSuppliedOutput = opts.outputPath !== undefined;
  const outputPath = opts.outputPath ?? join(canonicalRoot, 'DESIGN.md');

  if (!opts.dryRun) {
    try {
      // When the output path is defaulted (attacker-controlled project
      // root), require the write to land inside the project. When the
      // user explicitly set --output, trust them (CLI flags are in-policy
      // per the threat model).
      safeWriteFile(outputPath, markdown, userSuppliedOutput ? {} : { containWithin: canonicalRoot });
      emit({
        kind: 'write-done',
        outputPath,
        bytes: Buffer.byteLength(markdown, 'utf-8'),
      });
    } catch (err) {
      emit({ kind: 'error', message: 'refused to write output', path: outputPath });
      return {
        success: false,
        markdown,
        framework,
        sources,
        warnings: [...warnings, (err as Error).message],
      };
    }
  }

  return {
    success: true,
    ...(opts.dryRun ? {} : { outputPath }),
    markdown,
    framework,
    sources,
    warnings,
  };
}
