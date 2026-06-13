// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License").

/**
 * Vision-judge layer. Loaded lazily so the SDK is only required when the
 * `--vision-judge` flag is set.
 */

import type { ParsedDesign } from './formats.js';
import type { Task } from './types.js';

let clientPromise: Promise<any> | undefined;

const SYSTEM_PROMPT =
  'You are a brand-fidelity judge. Score how faithfully the rendered UI honors the supplied design system on a scale of 0 to 1, where 1.0 means every color, type choice, spacing, and component treatment comes from the system and 0.0 means none of it does. Respond with only valid JSON of the form {"score": number, "rationale": string}. Do not include any other text.';

const MODEL = 'claude-sonnet-4-6';

export async function scoreVision(
  png: Buffer,
  design: ParsedDesign,
  task: Task,
): Promise<{ score: number; rationale: string }> {
  const client = await getClient();
  const response = await client.messages.create({
    model: MODEL,
    max_tokens: 512,
    system: [
      {
        type: 'text',
        text: SYSTEM_PROMPT,
        cache_control: { type: 'ephemeral' },
      },
    ],
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'image',
            source: {
              type: 'base64',
              media_type: 'image/png',
              data: png.toString('base64'),
            },
          },
          {
            type: 'text',
            text: `<task>${task.prompt}</task>`,
          },
          {
            type: 'text',
            text: `<design_system>\n${design.raw}\n</design_system>`,
            cache_control: { type: 'ephemeral' },
          },
        ],
      },
    ],
  });

  const text = (response.content ?? [])
    .filter((b: any) => b.type === 'text')
    .map((b: any) => b.text as string)
    .join('');
  return parseJudgeResponse(text);
}

export function parseJudgeResponse(text: string): { score: number; rationale: string } {
  const cleaned = text.replace(/```json\s*/i, '').replace(/```\s*$/i, '').trim();
  try {
    const parsed = JSON.parse(cleaned);
    const score = clampUnit(Number(parsed.score));
    const rationale = typeof parsed.rationale === 'string' ? parsed.rationale : '';
    return { score, rationale };
  } catch {
    return { score: 0, rationale: `unparseable judge response: ${text.slice(0, 200)}` };
  }
}

function clampUnit(n: number): number {
  if (!Number.isFinite(n)) return 0;
  return Math.max(0, Math.min(1, n));
}

async function getClient(): Promise<any> {
  if (!clientPromise) {
    clientPromise = (async () => {
      const mod = await import('@anthropic-ai/sdk');
      const Anthropic = (mod as any).default ?? (mod as any).Anthropic;
      return new Anthropic();
    })();
  }
  return clientPromise;
}
