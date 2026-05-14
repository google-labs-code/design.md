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

import type {
  ComponentDef,
  DesignSystemState,
  ResolvedColor,
  ResolvedDimension,
  ResolvedTypography,
  ResolvedValue,
} from '../model/spec.js';
import type { HtmlPreviewEmitterResult, HtmlPreviewEmitterSpec } from './spec.js';

export class HtmlPreviewEmitterHandler implements HtmlPreviewEmitterSpec {
  execute(state: DesignSystemState): HtmlPreviewEmitterResult {
    try {
      return { success: true, data: renderHtmlPreview(state) };
    } catch (error) {
      return { success: false, error: error instanceof Error ? error : new Error(String(error)) };
    }
  }
}

export function renderHtmlPreview(state: DesignSystemState): string {
  const name = state.name || 'DESIGN.md Preview';
  const colors = Array.from(state.colors.entries());
  const typography = Array.from(state.typography.entries());
  const spacing = Array.from(state.spacing.entries());
  const rounded = Array.from(state.rounded.entries());
  const components = Array.from(state.components.entries());
  const primary = tokenColor(state, 'primary') || colors[0]?.[1] || null;
  const neutral = tokenColor(state, 'neutral') || tokenColor(state, 'background') || tokenColor(state, 'surface') || null;
  const text = tokenColor(state, 'on-background') || tokenColor(state, 'on-surface') || tokenColor(state, 'primary') || primary;
  const accent = tokenColor(state, 'tertiary') || tokenColor(state, 'secondary') || primary;
  const primaryCss = primary ? colorToCss(primary) : '#1a1c1e';
  const neutralCss = neutral ? colorToCss(neutral) : '#f7f5f2';
  const textCss = text ? colorToCss(text) : '#1a1c1e';
  const accentCss = accent ? colorToCss(accent) : '#b8422e';
  const headingTypography = typography.find(([key]) => /display|headline|h1/i.test(key))?.[1] || typography[0]?.[1];
  const bodyTypography = typography.find(([key]) => /body|paragraph|text/i.test(key))?.[1] || typography[0]?.[1];

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(name)} Preview</title>
  <style>
    :root {
      --preview-bg: ${neutralCss};
      --preview-ink: ${textCss};
      --preview-primary: ${primaryCss};
      --preview-accent: ${accentCss};
      --preview-muted: color-mix(in srgb, var(--preview-ink) 62%, var(--preview-bg));
      --preview-line: color-mix(in srgb, var(--preview-ink) 18%, transparent);
      --preview-panel: color-mix(in srgb, var(--preview-bg) 88%, white);
      --preview-radius: ${rounded[1] ? dimToCss(rounded[1][1]) : rounded[0] ? dimToCss(rounded[0][1]) : '12px'};
      --preview-body-font: ${fontStack(bodyTypography)};
      --preview-heading-font: ${fontStack(headingTypography || bodyTypography)};
    }

    * { box-sizing: border-box; }

    body {
      margin: 0;
      color: var(--preview-ink);
      background:
        linear-gradient(135deg, color-mix(in srgb, var(--preview-bg) 86%, white), var(--preview-bg) 46%, color-mix(in srgb, var(--preview-accent) 16%, var(--preview-bg))),
        var(--preview-bg);
      font: 400 16px/1.6 var(--preview-body-font);
    }

    .page {
      width: min(1180px, calc(100vw - 32px));
      margin: 0 auto;
      padding: 48px 0 64px;
    }

    .hero {
      display: grid;
      grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
      gap: clamp(24px, 5vw, 72px);
      align-items: end;
      min-height: 62vh;
      padding: clamp(32px, 6vw, 72px) 0;
      border-bottom: 1px solid var(--preview-line);
    }

    h1, h2, h3 { font-family: var(--preview-heading-font); line-height: 0.98; letter-spacing: 0; }

    h1 {
      margin: 0;
      max-width: 9.5ch;
      font-size: clamp(64px, 11vw, 148px);
      font-weight: ${headingTypography?.fontWeight || 760};
    }

    .intro {
      max-width: 64ch;
      margin: 28px 0 0;
      color: var(--preview-muted);
      font-size: clamp(18px, 2vw, 23px);
    }

    .meta {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 32px;
    }

    .pill {
      border: 1px solid var(--preview-line);
      border-radius: 999px;
      padding: 8px 13px;
      background: color-mix(in srgb, var(--preview-bg) 74%, white);
      font-size: 13px;
      color: var(--preview-muted);
    }

    .showcase {
      border: 1px solid var(--preview-line);
      border-radius: var(--preview-radius);
      overflow: hidden;
      background: var(--preview-panel);
      box-shadow: 0 24px 80px color-mix(in srgb, var(--preview-primary) 12%, transparent);
    }

    .showcase-top {
      min-height: 270px;
      padding: 24px;
      display: flex;
      align-items: flex-end;
      background:
        radial-gradient(circle at 18% 20%, color-mix(in srgb, var(--preview-accent) 72%, transparent), transparent 30%),
        radial-gradient(circle at 82% 18%, color-mix(in srgb, var(--preview-primary) 55%, transparent), transparent 34%),
        linear-gradient(135deg, var(--preview-primary), color-mix(in srgb, var(--preview-primary) 35%, var(--preview-bg)));
      color: ${bestTextOn(primary || accent || null)};
    }

    .showcase-title {
      margin: 0;
      font-size: clamp(34px, 5vw, 62px);
      line-height: 1;
      max-width: 8ch;
    }

    .showcase-bottom {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      border-top: 1px solid var(--preview-line);
    }

    .metric {
      padding: 18px;
      border-right: 1px solid var(--preview-line);
    }

    .metric:last-child { border-right: 0; }
    .metric b { display: block; font-size: 26px; line-height: 1.1; }
    .metric span { color: var(--preview-muted); font-size: 12px; text-transform: uppercase; }

    .section {
      padding: 54px 0;
      border-bottom: 1px solid var(--preview-line);
    }

    .section-header {
      display: flex;
      justify-content: space-between;
      gap: 24px;
      align-items: end;
      margin-bottom: 24px;
    }

    h2 { margin: 0; font-size: clamp(32px, 5vw, 58px); }
    .section-note { max-width: 44ch; color: var(--preview-muted); margin: 0; }

    .swatches {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 14px;
    }

    .swatch {
      min-height: 158px;
      border: 1px solid var(--preview-line);
      border-radius: var(--preview-radius);
      overflow: hidden;
      background: var(--preview-panel);
    }

    .swatch-chip { height: 92px; background: var(--swatch); }
    .swatch-info { padding: 13px 14px 15px; }
    .swatch-name { display: block; font-weight: 700; }
    .swatch-value { color: var(--preview-muted); font-family: ui-monospace, SFMono-Regular, Consolas, monospace; font-size: 13px; }

    .type-stack {
      display: grid;
      gap: 16px;
    }

    .type-row {
      display: grid;
      grid-template-columns: 180px minmax(0, 1fr);
      gap: 24px;
      align-items: baseline;
      padding: 20px 0;
      border-top: 1px solid var(--preview-line);
    }

    .type-label { color: var(--preview-muted); font-family: ui-monospace, SFMono-Regular, Consolas, monospace; font-size: 13px; }
    .type-sample { margin: 0; overflow-wrap: anywhere; }

    .component-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 14px;
    }

    .component-card {
      min-height: 132px;
      padding: 18px;
      border: 1px solid var(--preview-line);
      border-radius: var(--preview-radius);
      background: var(--preview-panel);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 18px;
    }

    .component-demo {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 44px;
      width: fit-content;
      max-width: 100%;
      padding: 0 18px;
      border-radius: 10px;
      background: var(--preview-primary);
      color: ${bestTextOn(primary)};
      font-weight: 700;
    }

    .component-name { color: var(--preview-muted); font-family: ui-monospace, SFMono-Regular, Consolas, monospace; font-size: 13px; }

    .scales {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
    }

    .scale-card {
      padding: 20px;
      border: 1px solid var(--preview-line);
      border-radius: var(--preview-radius);
      background: var(--preview-panel);
    }

    .scale-row {
      display: grid;
      grid-template-columns: 92px 1fr auto;
      gap: 12px;
      align-items: center;
      padding: 10px 0;
      border-top: 1px solid var(--preview-line);
    }

    .scale-row:first-of-type { border-top: 0; }
    .bar { height: 12px; border-radius: 999px; background: var(--preview-accent); min-width: 8px; }
    .radius-demo { width: 46px; height: 34px; background: var(--preview-accent); }
    code { color: var(--preview-muted); font-family: ui-monospace, SFMono-Regular, Consolas, monospace; font-size: 13px; }

    @media (max-width: 820px) {
      .hero { grid-template-columns: 1fr; min-height: auto; }
      .section-header { display: block; }
      .section-note { margin-top: 12px; }
      .type-row { grid-template-columns: 1fr; gap: 8px; }
      .showcase-bottom { grid-template-columns: 1fr; }
      .metric { border-right: 0; border-bottom: 1px solid var(--preview-line); }
      .metric:last-child { border-bottom: 0; }
    }
  </style>
</head>
<body>
  <main class="page">
    <section class="hero">
      <div>
        <h1>${escapeHtml(name)}</h1>
        <p class="intro">${escapeHtml(state.description || `A readable browser preview generated from ${name} design tokens. Use it to inspect color, typography, components, spacing, and shape decisions before applying the system in production UI.`)}</p>
        <div class="meta">
          <span class="pill">${colors.length} colors</span>
          <span class="pill">${typography.length} type styles</span>
          <span class="pill">${components.length} components</span>
          <span class="pill">${spacing.length + rounded.length} layout tokens</span>
        </div>
      </div>
      <aside class="showcase" aria-label="Design system sample">
        <div class="showcase-top">
          <h2 class="showcase-title">Visual system preview</h2>
        </div>
        <div class="showcase-bottom">
          <div class="metric"><b>${escapeHtml(primaryCss)}</b><span>Primary</span></div>
          <div class="metric"><b>${escapeHtml(accentCss)}</b><span>Accent</span></div>
          <div class="metric"><b>${escapeHtml(neutralCss)}</b><span>Canvas</span></div>
        </div>
      </aside>
    </section>
    ${colors.length ? renderColorSection(colors) : ''}
    ${typography.length ? renderTypographySection(typography) : ''}
    ${components.length ? renderComponentsSection(components) : ''}
    ${spacing.length || rounded.length ? renderScalesSection(spacing, rounded) : ''}
  </main>
</body>
</html>
`;
}

function renderColorSection(colors: Array<[string, ResolvedColor]>): string {
  return `<section class="section">
      <div class="section-header">
        <h2>Color</h2>
        <p class="section-note">Every token is shown as a named swatch with its resolved CSS value, so humans can scan the palette without reading YAML.</p>
      </div>
      <div class="swatches">
        ${colors.map(([name, color]) => `<article class="swatch">
          <div class="swatch-chip" style="--swatch: ${escapeAttribute(colorToCss(color))}"></div>
          <div class="swatch-info">
            <span class="swatch-name">${escapeHtml(name)}</span>
            <span class="swatch-value">${escapeHtml(colorToCss(color))}</span>
          </div>
        </article>`).join('\n        ')}
      </div>
    </section>`;
}

function renderTypographySection(typography: Array<[string, ResolvedTypography]>): string {
  return `<section class="section">
      <div class="section-header">
        <h2>Typography</h2>
        <p class="section-note">Type tokens render as real text specimens with their configured family, size, weight, line height, and tracking.</p>
      </div>
      <div class="type-stack">
        ${typography.map(([name, typo]) => `<div class="type-row">
          <div class="type-label">${escapeHtml(name)}<br>${escapeHtml(typeMeta(typo))}</div>
          <p class="type-sample" style="${escapeAttribute(typeStyle(typo))}">Sphinx of black quartz, judge my vow.</p>
        </div>`).join('\n        ')}
      </div>
    </section>`;
}

function renderComponentsSection(components: Array<[string, ComponentDef]>): string {
  return `<section class="section">
      <div class="section-header">
        <h2>Components</h2>
        <p class="section-note">Component tokens are translated into small interface samples to make interaction colors, shape, and spacing easier to judge.</p>
      </div>
      <div class="component-grid">
        ${components.map(([name, component]) => `<article class="component-card">
          <div class="component-demo" style="${escapeAttribute(componentStyle(component))}">${escapeHtml(componentLabel(name))}</div>
          <div class="component-name">${escapeHtml(name)}</div>
        </article>`).join('\n        ')}
      </div>
    </section>`;
}

function renderScalesSection(spacing: Array<[string, ResolvedDimension]>, rounded: Array<[string, ResolvedDimension]>): string {
  return `<section class="section">
      <div class="section-header">
        <h2>Layout</h2>
        <p class="section-note">Spacing and radius scales appear at visual size, giving the design system a quick tactile check.</p>
      </div>
      <div class="scales">
        ${spacing.length ? `<article class="scale-card">
          <h3>Spacing</h3>
          ${spacing.map(([name, dim]) => `<div class="scale-row">
            <code>${escapeHtml(name)}</code>
            <div class="bar" style="width: ${escapeAttribute(scaleWidth(dim))}"></div>
            <code>${escapeHtml(dimToCss(dim))}</code>
          </div>`).join('\n          ')}
        </article>` : ''}
        ${rounded.length ? `<article class="scale-card">
          <h3>Radius</h3>
          ${rounded.map(([name, dim]) => `<div class="scale-row">
            <code>${escapeHtml(name)}</code>
            <div class="radius-demo" style="border-radius: ${escapeAttribute(dimToCss(dim))}"></div>
            <code>${escapeHtml(dimToCss(dim))}</code>
          </div>`).join('\n          ')}
        </article>` : ''}
      </div>
    </section>`;
}

function tokenColor(state: DesignSystemState, key: string): ResolvedColor | null {
  return state.colors.get(key) || null;
}

function colorToCss(color: ResolvedColor): string {
  return color.hex;
}

function bestTextOn(color: ResolvedColor | null | undefined): string {
  if (!color) return '#ffffff';
  return color.luminance > 0.45 ? '#111111' : '#ffffff';
}

function dimToCss(dim: ResolvedDimension): string {
  return `${dim.value}${dim.unit}`;
}

function typeStyle(typo: ResolvedTypography): string {
  const declarations = [
    typo.fontFamily ? `font-family: ${fontStack(typo)}` : '',
    typo.fontSize ? `font-size: ${dimToCss(typo.fontSize)}` : '',
    typo.fontWeight ? `font-weight: ${typo.fontWeight}` : '',
    typo.lineHeight ? `line-height: ${dimToCss(typo.lineHeight)}` : '',
    typo.letterSpacing ? `letter-spacing: ${dimToCss(typo.letterSpacing)}` : '',
  ].filter(Boolean);
  return declarations.join('; ');
}

function typeMeta(typo: ResolvedTypography): string {
  return [
    typo.fontFamily,
    typo.fontSize ? dimToCss(typo.fontSize) : undefined,
    typo.fontWeight ? String(typo.fontWeight) : undefined,
  ].filter(Boolean).join(' / ');
}

function fontStack(typo: ResolvedTypography | undefined): string {
  if (!typo?.fontFamily) return 'ui-sans-serif, system-ui, sans-serif';
  return `"${typo.fontFamily.replaceAll('"', '')}", ui-sans-serif, system-ui, sans-serif`;
}

function componentStyle(component: ComponentDef): string {
  const declarations: string[] = [];
  const background = component.properties.get('backgroundColor');
  const color = component.properties.get('textColor');
  const rounded = component.properties.get('rounded');
  const padding = component.properties.get('padding');
  const height = component.properties.get('height');
  const width = component.properties.get('width');
  const typography = component.properties.get('typography');

  if (background) declarations.push(`background: ${valueToCss(background)}`);
  if (color) declarations.push(`color: ${valueToCss(color)}`);
  if (rounded) declarations.push(`border-radius: ${valueToCss(rounded)}`);
  if (padding) declarations.push(`padding: ${valueToCss(padding)}`);
  if (height) declarations.push(`min-height: ${valueToCss(height)}`);
  if (width) declarations.push(`width: ${valueToCss(width)}`);
  if (typography && typeof typography === 'object' && 'type' in typography && typography.type === 'typography') {
    declarations.push(typeStyle(typography));
  }

  return declarations.join('; ');
}

function valueToCss(value: ResolvedValue): string {
  if (typeof value === 'string') return value;
  if (typeof value === 'number') return String(value);
  if (value.type === 'color') return colorToCss(value);
  if (value.type === 'dimension') return dimToCss(value);
  return typeStyle(value);
}

function componentLabel(name: string): string {
  if (/button/i.test(name)) return 'Button';
  if (/input|field/i.test(name)) return 'Input text';
  if (/card|container/i.test(name)) return 'Card';
  if (/label|metric/i.test(name)) return 'Label';
  return 'Component';
}

function scaleWidth(dim: ResolvedDimension): string {
  const px = dim.unit === 'rem' ? dim.value * 16 : dim.unit === 'em' ? dim.value * 16 : dim.value;
  return `${Math.max(8, Math.min(220, px))}px`;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function escapeAttribute(value: string): string {
  return escapeHtml(value).replaceAll('\n', ' ');
}
