import type { DesignSystemState } from '../model/spec.js';

// ── TAILWIND CONFIG ────────────────────────────────────────────────
export interface TailwindConfig {
  theme: {
    extend: {
      colors?: Record<string, string>;
      fontFamily?: Record<string, string[]>;
      fontSize?: Record<string, [string, Record<string, string>]>;
      borderRadius?: Record<string, string>;
      spacing?: Record<string, string>;
    };
  };
}

// ── INTERFACE ──────────────────────────────────────────────────────
export interface TailwindEmitterSpec {
  execute(state: DesignSystemState): TailwindConfig;
}
