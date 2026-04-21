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

import { describe, it, expect } from 'bun:test';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { VERSION } from './version.js';

const currentDir = dirname(fileURLToPath(import.meta.url));

describe('VERSION', () => {
  it('matches package.json version exactly', () => {
    const pkgPath = resolve(currentDir, '../package.json');
    const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));
    expect(VERSION).toBe(pkg.version);
  });

  it('is a valid semver string', () => {
    expect(VERSION).toMatch(/^\d+\.\d+\.\d+/);
  });

  it('is not the fallback value', () => {
    // If the path resolution is broken, VERSION would fall back to '0.0.0'.
    // This test catches "works on my machine" failures where the relative
    // path from the executing module to package.json is wrong.
    expect(VERSION).not.toBe('0.0.0');
  });
});
