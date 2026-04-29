// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License").

import type { Agent, Task } from './types.js';

const HEX_RE = /#[0-9a-fA-F]{3,8}\b/g;
const FONT_FAMILY_RE = /fontFamily:\s*([^\n,]+)/g;
const PX_RE = /\b(\d+)px\b/g;

const OFF_BRAND_PALETTE = ['#ff00ff', '#00ff00', '#ffff00', '#1abc9c', '#e74c3c'];
const OFF_BRAND_FONTS = ['Comic Sans MS', 'Impact', 'Times New Roman'];
const OFF_BRAND_PX = [3, 5, 7, 11, 13, 17, 23];

function uniq(xs: string[]): string[] {
  return [...new Set(xs)];
}

function pickPalette(context: string): { colors: string[]; font: string; px: number[] } {
  const colors = uniq(context.match(HEX_RE) ?? []);
  const families = uniq(
    [...context.matchAll(FONT_FAMILY_RE)].map((m) => (m[1] ?? '').trim().replace(/^["']|["']$/g, '')),
  ).filter(Boolean);
  const pxFromContext = uniq(context.match(PX_RE) ?? []).map((s) => parseInt(s, 10));
  return {
    colors: colors.length ? colors : OFF_BRAND_PALETTE,
    font: families[0] ?? 'system-ui',
    px: pxFromContext.length ? pxFromContext : [8, 16, 24, 32],
  };
}

function renderHtml(task: Task, palette: { colors: string[]; font: string; px: number[] }): string {
  const [bg, fg, accent, mute] = [
    palette.colors[0] ?? '#ffffff',
    palette.colors[1] ?? '#111111',
    palette.colors[2] ?? palette.colors[0] ?? '#3366ff',
    palette.colors[3] ?? palette.colors[1] ?? '#666666',
  ];
  const space = palette.px[1] ?? 16;
  const big = palette.px[3] ?? 32;
  const radius = palette.px[0] ?? 8;
  const ff = `${palette.font}, system-ui, sans-serif`;
  const styleBase = `font-family: ${ff}; background: ${bg}; color: ${fg}; padding: ${big}px;`;
  const btn = `background: ${accent}; color: ${bg}; padding: ${space}px ${big}px; border: 0; border-radius: ${radius}px; font-family: ${ff};`;
  const subtle = `color: ${mute}; font-family: ${ff};`;
  switch (task.id) {
    case 'marketing-hero':
      return `<!doctype html><html><body style="${styleBase}"><h1 style="font-family:${ff}">Ship faster.</h1><p style="${subtle}">A one-sentence pitch about the product.</p><button style="${btn}">Get started</button></body></html>`;
    case 'pricing-card':
      return `<!doctype html><html><body style="${styleBase}"><div style="background:${bg};color:${fg};padding:${big}px;border-radius:${radius}px"><h2 style="font-family:${ff}">Pro</h2><p style="font-family:${ff}">$29 / mo</p><ul style="${subtle}"><li>Unlimited projects</li><li>Priority support</li><li>SSO</li></ul><button style="${btn}">Choose Pro</button></div></body></html>`;
    case 'app-shell-topbar':
      return `<!doctype html><html><body style="${styleBase}"><header style="display:flex;gap:${space}px;padding:${space}px;background:${bg};color:${fg};font-family:${ff}"><span>Brand</span><nav style="display:flex;gap:${space}px;flex:1"><a style="color:${fg}">Home</a><a style="color:${fg}">Docs</a><a style="color:${fg}">Pricing</a></nav><div style="width:${big}px;height:${big}px;border-radius:${big}px;background:${accent}"></div></header></body></html>`;
    default:
      return `<!doctype html><html><body style="${styleBase}"></body></html>`;
  }
}

export const tokenAwareMockAgent: Agent = {
  id: 'mock-token-aware',
  async render(task, context) {
    return renderHtml(task, pickPalette(context));
  },
};

export const offBrandMockAgent: Agent = {
  id: 'mock-off-brand',
  async render(task, _context) {
    return renderHtml(task, { colors: OFF_BRAND_PALETTE, font: OFF_BRAND_FONTS[0]!, px: OFF_BRAND_PX });
  },
};

/**
 * Real LLM agent. Wire in @anthropic-ai/sdk (or any SDK) here.
 * The system prompt should instruct the model to honor the provided context
 * and emit only HTML.
 */
export const claudeAgent: Agent = {
  id: 'claude',
  async render(_task, _context) {
    throw new Error(
      'claudeAgent: not wired. Add @anthropic-ai/sdk and replace this body with a messages.create call.',
    );
  },
};
