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

const DANGEROUS_KEYS = new Set(['__proto__', 'constructor', 'prototype']);

/**
 * Parse a JSON string coming from an attacker-controlled file
 * (`package.json`, DTCG `tokens.json`, …) and drop keys that could
 * mutate prototypes or poison downstream object merges.
 *
 * Why: a malicious `package.json` can contain
 *   { "dependencies": { "__proto__": { "isAdmin": true } } }
 *
 * After a naive `JSON.parse`, the parsed value has a literal own
 * property whose key is the string `"__proto__"`. If any caller then
 * does `Object.assign(target, parsed.dependencies)` — or an engine
 * variant that routes the spread through prototype setters — the host
 * Object.prototype can be polluted. Using a reviver that returns
 * `undefined` for these keys removes the property entirely at parse
 * time (per the JSON.parse reviver contract).
 *
 * Also returns `null` (instead of throwing) on malformed JSON so
 * callers can treat it uniformly with "no such file" errors.
 */
export function safeJsonParse<T = unknown>(source: string): T | null {
  try {
    return JSON.parse(source, (key, value) => {
      if (DANGEROUS_KEYS.has(key)) return undefined;
      return value as unknown;
    }) as T;
  } catch {
    return null;
  }
}
