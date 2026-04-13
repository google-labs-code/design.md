import { z } from 'zod';
import type { DesignSystemState } from '../model/spec.js';

// ── DTCG Value Types (W3C Design Tokens Format Module 2025.10) ────

export interface DtcgColorValue {
  colorSpace: 'srgb';
  components: [number, number, number];
  hex?: string;
}

export interface DtcgDimensionValue {
  value: number;
  unit: string;
}

export interface DtcgTypographyValue {
  fontFamily?: string;
  fontSize?: DtcgDimensionValue;
  fontWeight?: number;
  letterSpacing?: DtcgDimensionValue;
  lineHeight?: number;
}

// ── DTCG Token & Group Structures ─────────────────────────────────

export interface DtcgToken {
  $type?: string;
  $value: DtcgColorValue | DtcgDimensionValue | DtcgTypographyValue | string | number;
  $description?: string;
}

export interface DtcgGroup {
  $type?: string;
  $description?: string;
  [key: string]: DtcgToken | DtcgGroup | string | undefined;
}

/** The complete tokens.json output file. */
export interface DtcgTokenFile extends DtcgGroup {
  $schema?: string;
}

// ── Result ─────────────────────────────────────────────────────────

export const DtcgEmitterResultSchema = z.discriminatedUnion('success', [
  z.object({
    success: z.literal(true),
    data: z.record(z.unknown()),
  }),
  z.object({
    success: z.literal(false),
    error: z.object({
      code: z.string(),
      message: z.string(),
    }),
  }),
]);

export type DtcgEmitterResult = z.infer<typeof DtcgEmitterResultSchema>;

// ── Interface ──────────────────────────────────────────────────────

export interface DtcgEmitterSpec {
  execute(state: DesignSystemState): DtcgEmitterResult;
}
