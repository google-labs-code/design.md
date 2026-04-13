import { z } from 'zod';

export const FixerInputSchema = z.object({
  content: z.string(),
  sections: z.array(z.object({
    heading: z.string(),
    content: z.string(),
  })),
});

export type FixerInput = z.infer<typeof FixerInputSchema>;

export type FixerResult =
  | { success: true; fixedContent: string; details?: { beforeOrder: string[]; afterOrder: string[] } }
  | { success: false; error: string };
