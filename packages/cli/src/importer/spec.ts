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

export type FrameworkName =
  | 'next'
  | 'nuxt'
  | 'vite'
  | 'sveltekit'
  | 'remix'
  | 'astro'
  | 'cra'
  | 'gatsby'
  | 'angular'
  | 'vue-cli'
  | 'node'
  | 'unknown';

export interface FrameworkInfo {
  name: FrameworkName;
  version?: string;
  confidence: 'high' | 'medium' | 'low';
  evidence: string[];
}

export interface ScanResult {
  cssFiles: string[];
  dtcgFiles: string[];
}

export interface SourceCounts {
  colors: number;
  typography: number;
  spacing: number;
  rounded: number;
}

export type SourceKind = 'css' | 'dtcg';

export type ImportStep =
  | { kind: 'detect-start'; projectPath: string }
  | { kind: 'detect-done'; framework: FrameworkInfo }
  | { kind: 'scan-start' }
  | { kind: 'scan-done'; sources: ScanResult }
  | { kind: 'parse-source'; source: SourceKind; path: string; counts: SourceCounts }
  | { kind: 'parse-skip'; source: SourceKind; path: string; reason: string }
  | { kind: 'merge-done'; totals: SourceCounts & { components: number } }
  | { kind: 'write-done'; outputPath: string; bytes: number }
  | { kind: 'error'; message: string; path?: string };

export interface ImportOptions {
  projectPath: string;
  outputPath?: string;
  dryRun: boolean;
  onStep?: (step: ImportStep) => void;
}

export interface ImportResult {
  success: boolean;
  outputPath?: string;
  markdown: string;
  framework: FrameworkInfo;
  sources: ScanResult;
  warnings: string[];
}

/**
 * Discovered iconography metadata, carried internally by the importer.
 *
 * Not part of the linter's DesignSystemState (main-branch linter has no
 * icons field). We carry it alongside and emit it into YAML frontmatter
 * in a shape compatible with the spec's future `icons.*` token group.
 */
export interface IconsData {
  library?: string;
  style?: string;
  strokeWidth?: number;
  grid?: string;
  size?: Map<string, string>;
  color?: string;
}

/**
 * The contract that every token-source plugs into. Adding a new source
 * (Style Dictionary, Theme UI, …) is one new adapter — no orchestrator
 * change. The adapter picks which files it cares about from the scan
 * result, then parses each one into a PartialState the merger consumes.
 *
 * `parse` is allowed to be async so adapters that read remote sources
 * or call expensive subprocesses can fit; the current built-ins are sync.
 */
export interface SourceAdapter {
  /** Stable id. Also the value emitted in `parse-source.source` events. */
  readonly kind: SourceKind;
  /** Files this adapter wants from the scan result, in iteration order. */
  selectFiles(scan: ScanResult): readonly string[];
  /**
   * Parse a single file into a partial state. The return type is
   * deliberately permissive (`unknown` rather than `PartialState`) so
   * `spec.ts` doesn't need to import from `merger.ts` and form a
   * dependency cycle. Adapters in this package return the canonical
   * `PartialState` shape; the orchestrator narrows it.
   */
  parse(path: string): unknown | Promise<unknown>;
}
