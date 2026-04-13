import { z } from 'zod';
import type { Config } from 'tailwindcss';
import type { DesignSystemState } from '../model/spec.js';

// ── TAILWIND CONFIG SCHEMA ──────────────────────────────────────────
export const TailwindThemeExtendSchema = z.object({
  colors: z.record(z.string()).optional(),
  fontFamily: z.record(z.array(z.string())).optional(),
  fontSize: z.record(z.tuple([z.string(), z.record(z.string())])).optional(),
  borderRadius: z.record(z.string()).optional(),
  spacing: z.record(z.string()).optional(),
});

export type TailwindThemeExtend = z.infer<typeof TailwindThemeExtendSchema>;



export const TailwindEmitterResultSchema = z.discriminatedUnion('success', [
  z.object({
    success: z.literal(true),
    data: z.object({
      theme: z.object({
        extend: TailwindThemeExtendSchema
      })
    })
  }),
  z.object({
    success: z.literal(false),
    error: z.object({
      code: z.string(),
      message: z.string()
    })
  })
]);

export type TailwindEmitterResult = z.infer<typeof TailwindEmitterResultSchema>;

// ── INTERFACE ──────────────────────────────────────────────────────
export interface TailwindEmitterSpec {
  execute(state: DesignSystemState): TailwindEmitterResult;
}
