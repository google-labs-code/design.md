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

import { parseCssVariables } from './css-var-parser.js';
import { parseDtcgTokens } from './dtcg-parser.js';
import type { PartialState } from './merger.js';
import type { ScanResult, SourceAdapter } from './spec.js';

const cssAdapter: SourceAdapter = {
  kind: 'css',
  selectFiles: (scan: ScanResult) => scan.cssFiles,
  parse: (path: string): PartialState => parseCssVariables(path),
};

const dtcgAdapter: SourceAdapter = {
  kind: 'dtcg',
  selectFiles: (scan: ScanResult) => scan.dtcgFiles,
  parse: (path: string): PartialState => parseDtcgTokens(path),
};

/**
 * Order matters: later adapters win on conflicting fields under the
 * merger's last-wins rule. CSS parses first (least structured); DTCG
 * parses last (most structured, has explicit $type / $value semantics).
 */
export const BUILTIN_ADAPTERS: readonly SourceAdapter[] = [cssAdapter, dtcgAdapter];
