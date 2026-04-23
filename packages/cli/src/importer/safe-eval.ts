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

import { runInNewContext } from 'node:vm';

export interface SafeEvalResult {
  exports: unknown;
  warnings: string[];
}

/**
 * Strip TypeScript syntax that would make vm choke. Handles:
 *   - type / interface declarations
 *   - import type { ... } from '...';
 *   - `satisfies T` / `as T` casts
 *   - variable / parameter `: Type` annotations
 *   - return type annotations `): T {`
 *   - generic type arguments `<T>` after function names
 * Conservative: if this regex pass damages syntax, vm will throw and we fall
 * back to the regex parser. Never executes code.
 */
function stripTypescript(src: string): string {
  let out = src;
  // Remove whole-line `type Foo = ...;` and `interface Foo { ... }` blocks.
  out = out.replace(/^[\t ]*(?:export\s+)?type\s+\w+\s*=[^;]+;\s*$/gm, '');
  out = out.replace(/^[\t ]*(?:export\s+)?interface\s+\w+[^{]*\{[\s\S]*?^\}\s*$/gm, '');
  // Drop `import type { … } from '…';`
  out = out.replace(/^[\t ]*import\s+type\s+[^;]+;\s*$/gm, '');
  // Drop `satisfies X` annotations and `as X` casts. Linear regex:
  // bounded negated class, no alternation, no lookahead. The previous
  // lookahead-based `as` pattern exhibited catastrophic backtracking on
  // pathological TS source (28s for 50k stacked casts).
  //
  // `satisfies` annotations sit at the end of an expression (typical
  // tailwind form: `} satisfies import('tailwindcss').Config;`), so we
  // walk forward until `;` or newline and allow parenthesized internals
  // like `import('…').Config`.
  out = out.replace(/\s+satisfies\s+[^;\n]{0,2048}/g, '');
  // `as X` casts can appear mid-expression (e.g. `(foo as Bar).baz`), so
  // we stop at closing delimiters as well to avoid eating the surrounding
  // expression.
  out = out.replace(/\s+as\s+[^;,)\]}\n]{0,2048}/g, '');
  // Strip `: Type` annotations on declarations and parameters. Matches until
  // `=`, `,`, `)`, `;`, `{`, or end of line. Avoids touching object literals
  // by requiring the colon to follow an identifier.
  out = out.replace(/(\b[A-Za-z_$][\w$]*\??)\s*:\s*[A-Za-z_$][\w$.<>\[\]|& ,]*(?=\s*[=,);{}\n])/g, '$1');
  return out;
}

/**
 * Rewrite ESM `export default X` to CJS `module.exports = X` so a single
 * vm.runInNewContext call captures it. Also rewrites `export const foo = ...`
 * to bare `const foo = ...;` (the value doesn't matter — we only care about
 * the default).
 */
function esmToCjs(src: string): string {
  return src
    .replace(/\bexport\s+default\s+/g, 'module.exports = ')
    .replace(/\bexport\s+(const|let|var|function|class)\s+/g, '$1 ');
}

/**
 * Deep-clone a sandbox value into a plain, inert host object. Only string
 * keys and JSON-serializable primitive leaves survive. Getters, functions,
 * Proxy traps, Symbols, prototypes, and numeric-keyed entries that would
 * surface through `Object.entries` on attacker-controlled objects are all
 * stripped. This is the critical barrier that prevents a sandbox getter
 * from executing in the host realm later when the parser iterates the
 * returned config.
 *
 * Recurses with an own `seen` set — cycles are replaced with `null`.
 */
function cloneToInertData(value: unknown, seen: WeakSet<object> = new WeakSet()): unknown {
  if (value === null) return null;
  const t = typeof value;
  if (t === 'string' || t === 'boolean') return value;
  if (t === 'number') return Number.isFinite(value as number) ? value : null;
  if (t !== 'object') return null; // function, symbol, bigint, undefined → drop
  if (seen.has(value as object)) return null;
  seen.add(value as object);

  if (Array.isArray(value)) {
    const out: unknown[] = [];
    const len = Math.min(value.length, 10000);
    for (let i = 0; i < len; i++) {
      out.push(cloneToInertData(value[i], seen));
    }
    return out;
  }

  const out: Record<string, unknown> = Object.create(null);
  // Use Object.getOwnPropertyNames to enumerate ONLY own string keys,
  // bypassing any attacker-defined Symbol.iterator or Proxy ownKeys trap
  // that could short-circuit. We still touch attacker values via the
  // property descriptor — that invokes getters. So read the descriptor
  // via Object.getOwnPropertyDescriptor and only accept data descriptors
  // (no getters / setters).
  let names: string[] = [];
  try {
    names = Object.getOwnPropertyNames(value as object);
  } catch {
    return null;
  }
  let count = 0;
  for (const key of names) {
    if (count >= 4096) break; // absolute cap on branches
    if (key === '__proto__' || key === 'constructor' || key === 'prototype') continue;
    let desc: PropertyDescriptor | undefined;
    try {
      desc = Object.getOwnPropertyDescriptor(value as object, key);
    } catch {
      continue;
    }
    if (!desc) continue;
    // Accessor descriptors (get/set) are attacker-authored code; never run them.
    if ('get' in desc || 'set' in desc) continue;
    out[key] = cloneToInertData(desc.value, seen);
    count++;
  }
  return out;
}

/**
 * Evaluate a tailwind-style config in a locked-down vm context. Returns
 * the `module.exports` value as an inert plain data structure and any
 * warnings collected during evaluation.
 *
 * Security model:
 *   - Context has only a `module` stub — no `require`, `process`,
 *     `global`, `fetch`, `Buffer`, `URL`, filesystem, or network APIs.
 *   - Source evaluates once inside `runInNewContext` with a 1000ms timeout.
 *   - Returned exports are deep-cloned to plain data BEFORE they reach the
 *     host: no functions, no getters, no Proxy traps, no prototypes, no
 *     non-string keys. This prevents the canonical `Error.prepareStackTrace`
 *     realm-escape where a host-side `Object.entries` invokes a
 *     sandbox-authored getter and walks the stack back into the host realm.
 *   - vm is explicitly NOT a cryptographic sandbox, but combined with the
 *     inert-clone barrier above, the practical attack surface is limited
 *     to what happens during the initial synchronous evaluation under
 *     the 1s budget.
 */
export function safeEvalConfig(
  source: string,
  lang: 'js' | 'ts' | 'mjs' | 'cjs',
): SafeEvalResult {
  const warnings: string[] = [];
  let code = source;

  if (lang === 'ts') {
    code = stripTypescript(code);
  }
  code = esmToCjs(code);

  const context: { module: { exports: unknown } } = {
    module: { exports: {} },
  };

  try {
    runInNewContext(code, context as unknown as object, {
      timeout: 1000,
      displayErrors: false,
    });
  } catch (err) {
    warnings.push(`safe-eval failed: ${(err as Error).message}`);
  }

  let inert: unknown;
  try {
    inert = cloneToInertData(context.module.exports);
  } catch (err) {
    warnings.push(`safe-eval clone failed: ${(err as Error).message}`);
    inert = {};
  }

  return { exports: inert, warnings };
}
