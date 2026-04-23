import type { DesignSystemState, ResolvedValue, ResolvedDimension, ResolvedTypography, ResolvedColor } from '../linter/index.js';

export function generateHtml(state: DesignSystemState): string {
  const { name, colors, typography, rounded, spacing, components } = state;

  const colorObj = Object.fromEntries(colors || new Map());
  const typoObj = Object.fromEntries(typography || new Map());
  const roundedObj = Object.fromEntries(rounded || new Map());
  const spacingObj = Object.fromEntries(spacing || new Map());
  const compObj = Object.fromEntries(components || new Map());

  const toCssValue = (val: any): string => {
    if (!val) return '';
    if (typeof val === 'string') return val;
    if (val.type === 'color') return val.hex;
    if (val.type === 'dimension') return `${val.value}${val.unit || ''}`;
    if (val.type === 'typography') return `${val.fontSize?.value}${val.fontSize?.unit || ''} ${val.fontFamily}`;
    return String(val);
  };

  const fonts = new Set<string>();
  Object.values(typoObj).forEach((t: any) => {
    if (t.fontFamily) fonts.add(t.fontFamily);
  });
  fonts.add('Manrope');

  const fontImport = Array.from(fonts).length > 0 
    ? `@import url('https://fonts.googleapis.com/css2?family=${Array.from(fonts).map(f => f.replace(/ /g, '+')).join(':wght@300;400;500;600;700&family=')}:wght@300;400;500;600;700&display=swap');`
    : '';

  const primary = toCssValue(colorObj.primary) || '#2E7D32';

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${name || 'Design System'} — Dashboard</title>
<style>
${fontImport}

:root {
  --primary:${primary};
  --bg: #F7F5F0; /* Warmer limestone background */
  --surface: #FFFFFF;
  --surface-2: #FDFCFB;
  --text: #1C1C18;
  --text-muted: #6B6B65;
  --border: rgba(62, 39, 35, 0.1); /* Warm brown border */
  --viz-color: var(--primary);
  --font-body: 'Manrope', sans-serif;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #141412; /* Deep warm dark background */
    --surface: #1C1C1A;
    --surface-2: #242422;
    --text: #EDEDEA;
    --text-muted: #A0A09C;
    --border: rgba(237, 237, 234, 0.1);
    --viz-color: #FFF9C4; /* Tertiary sunlight for visibility in dark mode */
  }
}

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
body{font-family:var(--font-body);background:var(--bg);color:var(--text);min-height:100dvh;font-size:14px;line-height:1.6;transition: background 0.3s ease;}

.topbar{position:sticky;top:0;z-index:100;background:var(--surface);border-bottom:1px solid var(--border);padding:0 40px;height:60px;display:flex;align-items:center;justify-content:space-between;backdrop-filter:blur(8px);}
.brand{display:flex;align-items:center;gap:12px;font-weight:800;font-size:18px;}

.layout{display:grid;grid-template-columns:320px 1fr;min-height:calc(100dvh - 60px);max-width:1800px;margin:0 auto;}
.sidebar{padding:40px 24px;border-right:1px solid var(--border);background:var(--surface);display:flex;flex-direction:column;gap:24px;overflow-y:auto;}

.main{padding:40px;display:flex;flex-direction:column;gap:80px;overflow-y:auto;}

.section-title { font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.2em; color: var(--text-muted); margin-bottom: 32px; display: flex; align-items: center; gap: 16px; }
.section-title::after { content: ''; flex: 1; height: 1px; background: var(--border); }

.bento{display:grid;grid-template-columns:repeat(auto-fill, minmax(360px, 1fr));gap:24px;}

.card{background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:32px;display:flex;flex-direction:column;gap:24px;transition: transform 0.2s ease;}

.token-header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom: 4px;}
.token-name{font-weight:800;font-size:14px;letter-spacing: -0.01em;}
.token-value{font-family:monospace;font-size:10px;opacity:0.6;background:rgba(0,0,0,0.05);padding:2px 6px;border-radius:4px;color:var(--text);}

/* Colors */
.sw-block{border-radius:14px;overflow:hidden;border:1px solid var(--border);}
.sw-strip{display:flex;height:32px;}
.sw-strip span{flex:1;}

/* Components */
.comp-preview-box { 
    padding: 40px; 
    background-image: radial-gradient(var(--border) 1px, transparent 1px);
    background-size: 20px 20px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px dashed var(--border);
    margin: 16px 0;
}

.comp-details {
    font-size: 11px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    background: var(--bg);
    padding: 16px;
    border-radius: 8px;
}
.prop-key { font-weight: 700; opacity: 0.5; }
.prop-val { font-family: monospace; text-align: right; }

/* Scales */
.spacing-viz { background: var(--viz-color); opacity: 0.3; border: 1px solid var(--viz-color); }
.rounding-viz { border: 2px solid var(--viz-color); width: 60px; height: 60px; }

</style>
</head>
<body>

<header class="topbar">
  <div class="brand">
    <div style="width:32px; height:32px; background:var(--primary); border-radius:10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);"></div>
    ${name || 'Design System'}
  </div>
  <div style="font-family:monospace; font-weight:800; color:var(--primary); letter-spacing: 0.1em; background: rgba(0,0,0,0.03); padding: 4px 12px; border-radius: 99px;">
    SYSTEM DASHBOARD
  </div>
</header>

<div class="layout">
  <aside class="sidebar">
    <div class="section-title">Palettes</div>
    ${Object.entries(colorObj).map(([key, color]: [string, any]) => `
      <div class="sw-block">
        <div style="padding:16px; background:${color.hex}; color: ${color.luminance > 0.5 ? '#000' : '#fff'}">
          <div class="token-name">${key}</div>
          <div style="font-size:10px; opacity:0.8; font-family:monospace;">${color.hex}</div>
        </div>
        <div class="sw-strip">
          ${generateScaleHtml(color.hex, 9)}
        </div>
      </div>
    `).join('')}
  </aside>

  <main class="main">
    
    <!-- Typography -->
    <section>
      <div class="section-title">Typography</div>
      <div class="bento">
        ${Object.entries(typoObj).map(([key, t]: [string, any]) => `
          <div class="card">
            <div class="token-header">
              <span class="token-name">${key}</span>
              <span class="token-value">${t.fontFamily}</span>
            </div>
            <div style="
              font-family: '${t.fontFamily}', sans-serif;
              font-size: ${toCssValue(t.fontSize)};
              font-weight: ${t.fontWeight || 400};
              letter-spacing: ${toCssValue(t.letterSpacing)};
              line-height: ${toCssValue(t.lineHeight)};
              margin: 20px 0;
              overflow: hidden;
            ">The quick brown fox</div>
            <div class="comp-details" style="grid-template-columns: 1fr;">
               <div>Size: ${toCssValue(t.fontSize)} / Weight: ${t.fontWeight || 400} / Lead: ${toCssValue(t.lineHeight)}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- Components -->
    <section>
      <div class="section-title">Components</div>
      <div class="bento">
        ${Object.entries(compObj).map(([key, c]: [string, any]) => {
          const props = Object.fromEntries(c.properties);
          const typo = props.typography as any;
          const typoStyles = typo?.type === 'typography' ? `
            font-family: '${typo.fontFamily || 'inherit'}';
            font-size: ${toCssValue(typo.fontSize) || 'inherit'};
            font-weight: ${typo.fontWeight || 'inherit'};
          ` : '';

          return `
          <div class="card">
            <div class="token-header"><span class="token-name">${key}</span></div>
            <div class="comp-preview-box">
              <div style="
                background-color: ${toCssValue(props.backgroundColor) || 'transparent'};
                color: ${toCssValue(props.textColor) || 'inherit'};
                border-radius: ${toCssValue(props.rounded) || '0px'};
                padding: ${toCssValue(props.padding) || '12px 24px'};
                width: ${toCssValue(props.width) || 'auto'};
                height: ${toCssValue(props.height) || 'auto'};
                border: ${toCssValue(props.border) || 'none'};
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 4px 12px rgba(0,0,0,0.05);
                ${typoStyles}
              ">
                Preview
              </div>
            </div>
            <div class="comp-details">
              ${Object.entries(props).map(([pk, pv]) => `
                <span class="prop-key">${pk}</span>
                <span class="prop-val">${toCssValue(pv)}</span>
              `).join('')}
            </div>
          </div>
          `;
        }).join('')}
      </div>
    </section>

    <!-- Scales -->
    <section style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">
      <div>
        <div class="section-title">Spacing</div>
        <div class="card" style="gap:24px;">
          ${Object.entries(spacingObj).map(([key, val]: [string, any]) => `
            <div style="display:flex; align-items:center; gap:20px;">
              <div style="width:100px; font-weight:800; font-size:12px; color:var(--text-muted);">${key}</div>
              <div class="spacing-viz" style="width: ${toCssValue(val)}; height: ${toCssValue(val)}; min-width: 2px; min-height: 2px;"></div>
              <div class="token-value" style="margin-left:auto;">${toCssValue(val)}</div>
            </div>
          `).join('')}
        </div>
      </div>
      <div>
        <div class="section-title">Rounding</div>
        <div class="bento" style="grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));">
          ${Object.entries(roundedObj).map(([key, val]: [string, any]) => `
            <div style="display:flex; flex-direction:column; align-items:center; gap:16px; background:var(--surface); padding:20px; border-radius:12px; border:1px solid var(--border);">
              <div class="rounding-viz" style="border-radius: ${toCssValue(val)}"></div>
              <div class="token-name" style="font-size:12px;">${key}</div>
              <div class="token-value">${toCssValue(val)}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

  </main>
</div>

</body>
</html>`;
}

function generateScaleHtml(hex: string, steps: number): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const rgb = result ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) } : null;
  if (!rgb) return Array(steps).fill('<span></span>').join('');
  
  let html = '';
  for (let i = 0; i < steps; i++) {
    const lum = 0.2 + (i * (1.6 / (steps - 1)));
    const r = Math.min(255, Math.max(0, Math.round(rgb.r * lum)));
    const g = Math.min(255, Math.max(0, Math.round(rgb.g * lum)));
    const b = Math.min(255, Math.max(0, Math.round(rgb.b * lum)));
    html += `<span style="background-color: rgb(${r}, ${g}, ${b})"></span>`;
  }
  return html;
}
