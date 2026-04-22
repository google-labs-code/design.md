import type {
  ShowColorToken,
  ShowComponentToken,
  ShowDimensionToken,
  ShowModel,
  ShowTypographyToken,
} from './spec.js';

export function renderShowTemplate(model: ShowModel): string {
  const diagnosticsCount = model.summary.errors + model.summary.warnings;

  // Overview limited items
  const overviewColors = model.colors.slice(0, 4);
  const overviewTypography = model.typography.slice(0, 2);
  const overviewSpacing = model.spacing.slice(0, 6);
  const overviewRounded = model.rounded.slice(0, 6);
  
  const compLimit = 4;
  const overviewComponents = model.components.slice(0, compLimit);
  const compMid = Math.ceil(overviewComponents.length / 2);
  const col3Components = overviewComponents.slice(0, compMid);
  const col4Components = overviewComponents.slice(compMid);

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(model.title)} - DESIGN.md Show</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&family=Noto+Serif:wght@400;700&display=swap');

    :root {
      --bg-dark: #242424;
      --board-bg: #e2e2db;
      --board-border: #7951ff;
      --card-bg: #f5f5f0;
      --text-main: #333333;
      --text-muted: #888888;
      --radius-xl: 1.5rem;
      --radius-lg: 1rem;
      --radius-md: 0.75rem;
      --radius-sm: 0.5rem;
      --radius-pill: 9999px;
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      min-height: 100vh;
      font-family: "Manrope", sans-serif;
      color: var(--text-main);
      background-color: var(--bg-dark);
      background-image: radial-gradient(#3a3a3a 1px, transparent 0);
      background-size: 20px 20px;
      padding: 2rem 4rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;
      padding: 0 1rem;
    }

    .page-title {
      font-weight: 700;
      font-size: 1.25rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .page-title svg {
      width: 24px;
      height: 24px;
      fill: currentColor;
    }

    .page-actions {
      display: flex;
      gap: 0.5rem;
      color: #999;
    }

    .page-actions svg {
      width: 24px;
      height: 24px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
    }

    .board-container {
      border: 4px solid var(--board-border);
      border-radius: var(--radius-xl);
      background: var(--board-bg);
      padding: 1.5rem;
      box-shadow: 0 24px 48px rgba(0,0,0,0.2);
    }

    .tabs {
      display: flex;
      gap: 1.5rem;
      margin-bottom: 1.5rem;
      border-bottom: 2px solid rgba(0,0,0,0.05);
      padding-bottom: 0.5rem;
    }

    .tab-btn {
      background: none;
      border: none;
      color: var(--text-muted);
      font-family: "Manrope", sans-serif;
      font-weight: 700;
      font-size: 1rem;
      cursor: pointer;
      padding: 0.5rem 0.25rem;
      border-bottom: 3px solid transparent;
      margin-bottom: -0.5rem;
      transition: color 0.2s, border-color 0.2s;
    }

    .tab-btn:hover {
      color: var(--text-main);
    }

    .tab-btn.active {
      color: var(--text-main);
      border-bottom-color: var(--board-border);
    }

    .tab-content {
      display: none;
      animation: fadeIn 0.3s ease;
    }

    .tab-content.active {
      display: block;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(5px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Column layouts for Overview */
    .grid-4 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;
      align-items: start;
    }

    .column {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    /* Masonry layout for inner tabs */
    .masonry {
      column-count: 4;
      column-gap: 1.5rem;
    }
    .masonry > * {
      break-inside: avoid;
      margin-bottom: 1.5rem;
    }
    
    .grid-auto {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.5rem;
      align-items: start;
    }

    /* Cards */
    .card {
      background: var(--card-bg);
      border-radius: var(--radius-lg);
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    /* Color Card */
    .color-card {
      padding: 0;
      gap: 0;
    }
    .color-main {
      padding: 1.25rem;
      display: flex;
      justify-content: space-between;
      font-weight: 700;
      font-size: 0.9rem;
      min-height: 120px;
    }
    .color-shades {
      display: flex;
      height: 36px;
    }
    .color-shades i {
      flex: 1;
      background: var(--shade);
    }

    /* Typography Card */
    .type-header {
      display: flex;
      justify-content: space-between;
      font-size: 0.85rem;
      color: var(--text-muted);
      margin-bottom: 2.5rem;
    }
    .type-sample {
      margin: 0;
      text-align: center;
      font-size: 6.5rem;
      line-height: 1;
      color: #333;
      padding-bottom: 1.5rem;
    }

    /* Dimension Rows */
    .dim-row {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 0.5rem;
      font-size: 0.85rem;
      margin-bottom: 0.5rem;
      align-items: center;
    }
    .dim-bar {
      grid-column: 1 / -1;
      height: 6px;
      border-radius: var(--radius-pill);
      background: rgba(0,0,0,0.05);
      margin-bottom: 1rem;
    }
    .dim-bar i {
      display: block;
      height: 100%;
      border-radius: var(--radius-pill);
      background: #5d665b;
      width: var(--width);
    }
    .rounded-chip {
      height: 32px;
      background: rgba(0,0,0,0.1);
      border-radius: var(--radius);
      margin-top: 0.25rem;
    }

    /* Components */
    .component-prop {
      display: flex;
      justify-content: space-between;
      font-size: 0.85rem;
      padding: 0.35rem 0;
      border-bottom: 1px solid rgba(0,0,0,0.05);
    }
    .component-prop:last-child {
      border-bottom: none;
    }
    .component-prop strong {
      color: var(--text-muted);
      font-weight: 400;
    }

    .diagnostics {
      margin-bottom: 1rem;
      border-radius: var(--radius-md);
      padding: 1rem;
      background: ${diagnosticsCount > 0 ? '#ffebee' : '#e8f5e9'};
      color: ${diagnosticsCount > 0 ? '#c62828' : '#2e7d32'};
      font-size: 0.9rem;
    }

    @media (max-width: 1200px) {
      .grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 768px) {
      .grid { grid-template-columns: 1fr; }
      body { padding: 1rem; }
    }
  </style>
</head>
<body>
  <header class="page-header">
    <div class="page-title">
      <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
      ${escapeHtml(model.title)}
    </div>
    <div class="page-actions">
      <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
      <svg viewBox="0 0 24 24"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
      <svg viewBox="0 0 24 24"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"></path></svg>
    </div>
  </header>

  <div class="board-container">
    ${diagnosticsCount > 0 ? renderDiagnostics(model) : ''}
    
    <nav class="tabs">
      <button class="tab-btn active" onclick="showTab(event, 'tab-overview')">Overview</button>
      ${model.colors.length > 0 ? `<button class="tab-btn" onclick="showTab(event, 'tab-colors')">Colors (${model.colors.length})</button>` : ''}
      ${model.typography.length > 0 ? `<button class="tab-btn" onclick="showTab(event, 'tab-typography')">Typography (${model.typography.length})</button>` : ''}
      ${model.spacing.length > 0 ? `<button class="tab-btn" onclick="showTab(event, 'tab-layout')">Layout (${model.spacing.length})</button>` : ''}
      ${model.rounded.length > 0 ? `<button class="tab-btn" onclick="showTab(event, 'tab-shapes')">Shapes (${model.rounded.length})</button>` : ''}
      ${model.components.length > 0 ? `<button class="tab-btn" onclick="showTab(event, 'tab-components')">Components (${model.components.length})</button>` : ''}
    </nav>

    <main class="board">
      
      <!-- OVERVIEW TAB -->
      <div id="tab-overview" class="tab-content active">
        <div class="grid-4">
          <div class="column">
            ${renderColorCards(overviewColors)}
          </div>
          <div class="column">
            ${renderTypographyCards(overviewTypography)}
          </div>
          <div class="column">
            <div class="card">
              <h3 style="margin:0 0 1rem;font-size:0.9rem;color:var(--text-muted);font-weight:400;">Spacing</h3>
              ${renderDimensionRows(overviewSpacing, 'spacing')}
            </div>
            ${renderComponentCards(col3Components)}
          </div>
          <div class="column">
            <div class="card">
              <h3 style="margin:0 0 1rem;font-size:0.9rem;color:var(--text-muted);font-weight:400;">Rounded</h3>
              ${renderDimensionRows(overviewRounded, 'rounded')}
            </div>
            ${renderComponentCards(col4Components)}
          </div>
        </div>
      </div>

      <!-- COLORS TAB -->
      <div id="tab-colors" class="tab-content">
        <div class="grid-auto">
          ${renderColorCards(model.colors)}
        </div>
      </div>

      <!-- TYPOGRAPHY TAB -->
      <div id="tab-typography" class="tab-content">
        <div class="grid-auto">
          ${renderTypographyCards(model.typography)}
        </div>
      </div>

      <!-- LAYOUT (SPACING) TAB -->
      <div id="tab-layout" class="tab-content">
        <div class="masonry">
          <div class="card">
            <h3 style="margin:0 0 1rem;font-size:0.9rem;color:var(--text-muted);font-weight:400;">All Spacing Tokens</h3>
            ${renderDimensionRows(model.spacing, 'spacing')}
          </div>
        </div>
      </div>

      <!-- SHAPES (ROUNDED) TAB -->
      <div id="tab-shapes" class="tab-content">
        <div class="masonry">
          <div class="card">
            <h3 style="margin:0 0 1rem;font-size:0.9rem;color:var(--text-muted);font-weight:400;">All Rounded Tokens</h3>
            ${renderDimensionRows(model.rounded, 'rounded')}
          </div>
        </div>
      </div>

      <!-- COMPONENTS TAB -->
      <div id="tab-components" class="tab-content">
        <div class="masonry">
          ${renderComponentCards(model.components)}
        </div>
      </div>

    </main>
  </div>

  <script>
    function showTab(event, tabId) {
      document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
      document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
      
      document.getElementById(tabId).classList.add('active');
      event.currentTarget.classList.add('active');
    }
  </script>
</body>
</html>`;
}

function renderDiagnostics(model: ShowModel): string {
  const diagnosticsCount = model.summary.errors + model.summary.warnings;
  const findings = model.diagnostics
    .filter((finding) => finding.severity === 'error' || finding.severity === 'warning')
    .slice(0, 6);

  return `<div class="diagnostics">
    <p style="margin:0 0 0.5rem;font-weight:bold;">Diagnostics: ${model.summary.errors} errors, ${model.summary.warnings} warnings</p>
    ${findings.length > 0 ? `<ul style="margin:0;padding-left:1.5rem;">${findings
      .map((finding) => `<li>${escapeHtml(`${finding.path ? `[${finding.path}] ` : ''}${finding.message}`)}</li>`)
      .join('')}</ul>` : ''}
  </div>`;
}

function renderColorCards(colors: ShowColorToken[]): string {
  if (colors.length === 0) return '<div class="card empty">No color tokens.</div>';

  return colors
    .map((token) => {
      const isDark = Number(token.luminance) < 0.4;
      const textColor = isDark ? '#ffffff' : '#000000';
      return `<article class="card color-card">
      <div class="color-main" style="background-color: ${escapeAttr(token.hex)}; color: ${textColor};">
        <span>${escapeHtml(token.name)}</span>
        <span>${escapeHtml(token.hex.toUpperCase())}</span>
      </div>
      <div class="color-shades">
        ${token.shades.map((shade) => `<i style="--shade:${escapeAttr(shade)}"></i>`).join('')}
      </div>
    </article>`
    })
    .join('');
}

function renderTypographyCards(typography: ShowTypographyToken[]): string {
  if (typography.length === 0) return '<div class="card empty">No typography tokens.</div>';

  return typography
    .map((token) => {
      const style = [
        `font-family:${safeCssValue(token.fontFamily)}`,
        `font-size: 6.5rem`,
        `font-weight:${safeCssValue(token.fontWeight)}`,
        token.letterSpacing !== 'n/a' ? `letter-spacing:${safeCssValue(token.letterSpacing)}` : '',
      ]
        .filter(Boolean)
        .join(';');

      return `<article class="card">
        <div class="type-header">
          <span>${escapeHtml(token.name)}</span>
          <span>${escapeHtml(token.fontFamily)}</span>
        </div>
        <p class="type-sample" style="${escapeAttr(style)}">Aa</p>
      </article>`;
    })
    .join('');
}

function renderDimensionRows(dimensions: ShowDimensionToken[], mode: 'spacing' | 'rounded'): string {
  if (dimensions.length === 0) return `<div class="empty">No ${mode} tokens.</div>`;

  return dimensions
    .map((token) => {
      const width = clamp(token.approxPx * 2.2, 12, 240);
      const visual = mode === 'rounded'
        ? `<div class="rounded-chip" style="--radius:${escapeAttr(token.value)}"></div>`
        : `<div class="dim-bar"><i style="--width:${escapeAttr(`${width}px`)}"></i></div>`;

      return `<div>
        <div class="dim-row">
          <strong style="color:var(--text-main);font-weight:700;">${escapeHtml(token.name)}</strong>
          <span style="color:var(--text-muted);">${escapeHtml(token.value)}</span>
        </div>
        ${visual}
      </div>`;
    })
    .join('');
}

function renderComponentCards(components: ShowComponentToken[]): string {
  if (components.length === 0) return '';

  return components
    .map((component) => `<article class="card">
      <h3 style="margin:0 0 1rem;font-size:0.9rem;color:var(--text-main);font-weight:400;">${escapeHtml(component.name)}</h3>
      <div>
      ${component.properties.map((property) => `<div class="component-prop">
        <strong>${escapeHtml(property.name)}</strong>
        <span>${escapeHtml(property.value)}</span>
      </div>`).join('')}
      </div>
    </article>`)
    .join('');
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeAttr(value: string): string {
  return escapeHtml(value);
}

function safeCssValue(value: string): string {
  return value.replace(/[;{}<>`]/g, '');
}
