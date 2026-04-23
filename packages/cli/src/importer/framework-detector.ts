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

import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { FrameworkInfo, FrameworkName } from './spec.js';
import { safeJsonParse } from './safe-json.js';

interface FrameworkRule {
  name: FrameworkName;
  deps: string[];
  configs: string[];
}

/**
 * Ordered from most-specific to least-specific. Vite is last among
 * bundlers because Next / Nuxt / SvelteKit / Remix / Astro all transitively
 * depend on Vite — we want the meta-framework to win.
 */
const RULES: FrameworkRule[] = [
  { name: 'next',      deps: ['next'],             configs: ['next.config.js', 'next.config.mjs', 'next.config.ts'] },
  { name: 'nuxt',      deps: ['nuxt', 'nuxt3'],    configs: ['nuxt.config.ts', 'nuxt.config.js'] },
  { name: 'sveltekit', deps: ['@sveltejs/kit'],    configs: ['svelte.config.js', 'svelte.config.ts'] },
  { name: 'remix',     deps: ['@remix-run/dev'],   configs: ['remix.config.js', 'remix.config.ts'] },
  { name: 'astro',     deps: ['astro'],            configs: ['astro.config.mjs', 'astro.config.ts', 'astro.config.js'] },
  { name: 'cra',       deps: ['react-scripts'],    configs: [] },
  { name: 'gatsby',    deps: ['gatsby'],           configs: ['gatsby-config.js', 'gatsby-config.ts'] },
  { name: 'angular',   deps: ['@angular/core'],    configs: ['angular.json'] },
  { name: 'vue-cli',   deps: ['@vue/cli-service'], configs: ['vue.config.js'] },
  { name: 'vite',      deps: ['vite'],             configs: ['vite.config.js', 'vite.config.ts', 'vite.config.mjs'] },
];

interface PackageJsonShape {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
}

function readPackageJson(projectPath: string): { deps: Record<string, string> } | null {
  const pkgPath = join(projectPath, 'package.json');
  if (!existsSync(pkgPath)) return null;
  let raw: PackageJsonShape | null;
  try {
    raw = safeJsonParse<PackageJsonShape>(readFileSync(pkgPath, 'utf-8'));
  } catch {
    return null;
  }
  if (!raw) return null;
  // Compose into a null-prototype object so that even if the spread has
  // been tampered with, no prototype chain is involved in subsequent
  // lookups. safeJsonParse already stripped __proto__/constructor keys
  // at parse time; this is the second layer.
  const deps: Record<string, string> = Object.create(null);
  for (const bucket of [raw.dependencies, raw.devDependencies, raw.peerDependencies]) {
    if (!bucket || typeof bucket !== 'object') continue;
    for (const [k, v] of Object.entries(bucket)) {
      if (k === '__proto__' || k === 'constructor' || k === 'prototype') continue;
      if (typeof v === 'string') deps[k] = v;
    }
  }
  return { deps };
}

export function detectFramework(projectPath: string): FrameworkInfo {
  const pkg = readPackageJson(projectPath);
  if (!pkg) {
    return { name: 'unknown', confidence: 'low', evidence: ['no package.json'] };
  }

  for (const rule of RULES) {
    const matchingDep = rule.deps.find((d) => pkg.deps[d]);
    const matchingConfig = rule.configs.find((c) => existsSync(join(projectPath, c)));
    const evidence: string[] = [];
    if (matchingDep) evidence.push(`package.json: ${matchingDep}@${pkg.deps[matchingDep]}`);
    if (matchingConfig) evidence.push(`config file: ${matchingConfig}`);

    if (matchingDep && matchingConfig) {
      return {
        name: rule.name,
        version: pkg.deps[matchingDep],
        confidence: 'high',
        evidence,
      };
    }
    if (matchingDep) {
      return {
        name: rule.name,
        version: pkg.deps[matchingDep],
        confidence: 'medium',
        evidence,
      };
    }
    if (matchingConfig) {
      return { name: rule.name, confidence: 'medium', evidence };
    }
  }

  return {
    name: 'node',
    confidence: 'low',
    evidence: ['package.json present, no framework matched'],
  };
}
