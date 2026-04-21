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

import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Package version, sourced from the nearest package.json at runtime.
 *
 * Path resolution is stable across all execution contexts:
 *   Source (src/version.ts)      → ../package.json = packages/cli/package.json
 *   Bundle (dist/index.js)       → ../package.json = packages/cli/package.json
 *   Installed (node_modules/…)   → ../package.json = <pkg root>/package.json
 *   npx cache                    → ../package.json = <cache pkg>/package.json
 *
 * npm always includes package.json in the published tarball, so '../package.json'
 * relative to the dist/ entry point is universally valid.
 */
export const VERSION: string = (() => {
  try {
    const currentDir = dirname(fileURLToPath(import.meta.url));
    const pkgPath = resolve(currentDir, '../package.json');
    const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));
    return pkg.version ?? '0.0.0';
  } catch {
    return '0.0.0';
  }
})();
