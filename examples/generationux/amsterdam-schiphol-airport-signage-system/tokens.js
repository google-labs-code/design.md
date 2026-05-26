registerSystem({
  "meta": {
    "name": "Amsterdam Schiphol Airport Signage System",
    "tagline": "A rational, blunt, and quietly authoritative design language for wayfinding, prioritizing maximum legibility through high-contrast yellow backgrounds, black text, rigid rectangular panels, and hard straight baselines.",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;700&family=Nunito+Sans:wght@400;700&display=swap"
  },
  "yamlTokens": {
    "name": "Amsterdam Schiphol Airport Signage System",
    "colors": {
      "primary": "#FFD100",
      "on-primary": "#000000",
      "secondary": "#003399",
      "on-secondary": "#FFFFFF",
      "outline": "#000000",
      "sm": "#FFD100",
      "md": "#FFD100",
      "lg": "#FFD100",
      "icon-size": "#FFD100",
      "ok": "#000000",
      "warn": "#003399",
      "err": "#000000",
      "delta-up": "#000000",
      "delta-down": "#000000",
      "delta-flat": "#000000"
    },
    "typography": {
      "display": {
        "fontFamily": "Barlow, 'Nunito Sans', sans-serif",
        "fontSize": "48px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.05em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Barlow",
        "fontSize": "36px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Barlow",
        "fontSize": "24px",
        "fontWeight": 500,
        "lineHeight": 1.25,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Barlow",
        "fontSize": "18px",
        "fontWeight": 400,
        "lineHeight": 1.625,
        "letterSpacing": "0em",
        "textTransform": "normal-case"
      },
      "label": {
        "fontFamily": "Barlow",
        "fontSize": "14px",
        "fontWeight": 400,
        "lineHeight": 1.5,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      }
    },
    "rounded": {
      "default": "0px",
      "card": "0px",
      "button": "0px",
      "input": "0px",
      "chip": "0px"
    },
    "spacing": {
      "component-internal": "32px",
      "section-internal": "32px",
      "page-edge": "32px",
      "between-components": "32px",
      "between-sections": "32px",
      "component-height-sm": "48px",
      "component-height-md": "64px",
      "component-height-lg": "80px",
      "icon-size": "48px"
    },
    "components": {
      "sign-panel": {
        "backgroundColor": "{colors.primary}",
        "textColor": "{colors.on-primary}",
        "rounded": "{rounded.default}",
        "padding": "32px"
      },
      "directional-arrow": {
        "size": "48px",
        "backgroundColor": "{colors.on-primary}"
      },
      "pictogram-tile": {
        "size": "48px",
        "backgroundColor": "{colors.on-primary}",
        "rounded": "9999px"
      },
      "destination-button": {
        "backgroundColor": "{colors.primary}",
        "textColor": "{colors.on-primary}",
        "rounded": "{rounded.button}",
        "padding": "32px"
      },
      "metric-cell": {
        "backgroundColor": "{colors.primary}",
        "textColor": "{colors.on-primary}",
        "rounded": "{rounded.default}",
        "padding": "16px"
      },
      "data-table-row": {
        "backgroundColor": "{colors.primary}",
        "textColor": "{colors.on-primary}"
      },
      "chart-surface": {
        "backgroundColor": "{colors.primary}"
      },
      "signal-bar-fill": {
        "backgroundColor": "{colors.secondary}",
        "height": "4px"
      }
    },
    "version": "alpha",
    "description": "A rational, blunt, and quietly authoritative design language for wayfinding, prioritizing maximum legibility through high-contrast yellow backgrounds, black text, rigid rectangular panels, and hard straight baselines.",
    "provenance": {
      "coverage_status": "complete",
      "identity_description": "",
      "manual_enrichment_required": false,
      "imagery_count": 5,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": null,
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "www.nationaalarchief.nl",
          "count": 1
        },
        {
          "host": "en.wikipedia.org",
          "count": 1
        },
        {
          "host": "www.deptagency.com",
          "count": 1
        },
        {
          "host": "eyemagazine.com",
          "count": 1
        },
        {
          "host": "nieuweinstituut.nl",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://www.nationaalarchief.nl/",
          "host": "www.nationaalarchief.nl",
          "institution": "Nationaal Archief (Netherlands)",
          "confidence_original": "low"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Amsterdam_Airport_Schiphol",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia",
          "confidence_original": "high"
        },
        {
          "url": "https://www.deptagency.com/en-uki/",
          "host": "www.deptagency.com",
          "institution": "Dept (successor to Studio Dumbar)",
          "confidence_original": "low"
        },
        {
          "url": "https://eyemagazine.com/search?q=Schiphol",
          "host": "eyemagazine.com",
          "institution": "Eye Magazine",
          "confidence_original": "low"
        },
        {
          "url": "https://nieuweinstituut.nl/",
          "host": "nieuweinstituut.nl",
          "institution": "Het Nieuwe Instituut, Rotterdam",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": {},
      "flags": [
        "no_typography_extracted",
        "no_colour_extracted"
      ],
      "honest_gaps": {}
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#FFD100",
    "--on-bg": "#000000",
    "--primary": "#FFD100",
    "--on-primary": "#000000",
    "--secondary-col": "#003399",
    "--on-secondary": "#FFFFFF",
    "--surface": "#FFD100",
    "--on-bg-muted": "#555555",
    "--border": "#000000",
    "--error": "#000000",
    "--font-display": "Barlow, 'Nunito Sans', sans-serif",
    "--font-body": "Barlow",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "ok": "#000000",
    "warn": "#003399",
    "err": "#000000",
    "delta-up": "#000000",
    "delta-down": "#000000",
    "delta-flat": "#000000",
    "on-ok": "#FFD100",
    "on-warn": "#FFD100",
    "on-err": "#FFD100",
    "deltaUp": "#000000",
    "deltaDown": "#000000",
    "deltaFlat": "#000000",
    "live": "#FFD100",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#555555",
    "chartFont": "Barlow"
  },
  "chartStyle": {
    "backgroundColor": "#FFD100",
    "gridLineColor": "rgba(0,0,0,0.15)",
    "gridLineWidth": "1px",
    "axisLabelFontFamily": "Barlow",
    "axisLabelFontSize": "14px",
    "axisLabelTextTransform": "uppercase",
    "axisLabelColor": "#000000",
    "lineColor": "#003399",
    "lineWidth": "2px",
    "dotColor": "#003399",
    "dotRadius": "3px",
    "border": "2px solid #000000",
    "borderRadius": "0px",
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#555555",
    "fontFamily": "Barlow"
  },
  "surfaceModel": "flat",
  "materialSimulation": {
    "model": "coated-card",
    "grain": {
      "technique": "feTurbulence",
      "baseFrequency": 0.65,
      "numOctaves": 3,
      "type": "fractalNoise",
      "opacity": "0.02",
      "blendMode": "overlay",
      "color": "#000000",
      "animation": "none"
    },
    "renderingFlags": {
      "fontSmoothing": "antialiased",
      "imageRendering": "auto",
      "textRendering": "optimizeLegibility"
    }
  },
  "interactionModel": {
    "hover": {
      "effect": "color-swap",
      "description": "Background changes to secondary (#003399), text to white, instant transition."
    },
    "focus": {
      "effect": "none",
      "description": "No focus ring; outline: none."
    },
    "active": {
      "effect": "left-border-bar",
      "description": "Adds 4px solid black border-left."
    }
  },
  "spacing": {
    "component-internal": "32px",
    "section-internal": "32px",
    "page-edge": "32px",
    "between-components": "32px",
    "between-sections": "32px",
    "component-height-sm": "48px",
    "component-height-md": "64px",
    "component-height-lg": "80px",
    "icon-size": "48px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "0px"
  },
  "elevation": {
    "base": {
      "level": 0,
      "shadow": "none",
      "description": "All elements are coplanar. No shadow hierarchy."
    },
    "hover": null,
    "active": null
  },
  "dashboardStyle": {
    "layout": "Grid of metric cells and data table rows arranged in a rigid horizontal banding pattern. Each cell is a yellow panel with 2px black border, sharp corners.",
    "density": "Low. Minimum 32px gaps between elements. Each metric cell contains at most two lines (value + label).",
    "panelTreatment": "Every panel uses full yellow background with baked-enamel grain overlay. Never use white or grey backgrounds.",
    "dataVizStyle": "Signal bars (faint black track, blue fill) for proportional data. Line charts on chart-surface: yellow background, black grid lines at 15% opacity, blue line (2px), blue dots (r=3). No shadows, no gradients.",
    "signatureElement": "The directional arrow (open-notch black triangle) appears at the far right edge of the last metric cell to imply forward movement."
  },
  "landingStyle": {
    "heroApproach": "A single large sign-panel card (yellow, 2px black border) split into two columns: left holds a black pictogram circle with white icon, right holds stacked headline and subtitle in uppercase Barlow. The panel consumes at least 80% of the viewport width with generous margins.",
    "scrollBehavior": "No parallax or fade transitions. New panels slide in from the right with a 250ms cubic-bezier overshoot animation, then instantly lock into place.",
    "ctaStyle": "Primary destination button (yellow, black text, sharp corners) instantly swaps to dark blue on hover. No opacity changes.",
    "signatureMoment": "A split‑flap style gate number text flip: the current gate number cuts to the new number with no transition, mimicking the instantaneous flip mechanism of Schiphol’s departure boards."
  },
  "globalFilter": "<svg xmlns=\"http://www.w3.org/2000/svg\"><defs><filter id=\"grain-filter\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" result=\"noise\"/><feColorMatrix type=\"matrix\" values=\"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.02 0\" in=\"noise\" result=\"coloredNoise\"/><feBlend mode=\"overlay\" in=\"coloredNoise\" in2=\"SourceGraphic\"/></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-body); background-color: var(--bg); color: var(--on-bg); margin: 0; padding: 0; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; text-rendering: optimizeLegibility;",
  "globalCss": ".ds-layout-frame .sign-panel, .ds-layout-frame .destination-button, .ds-layout-frame .metric-cell, .ds-layout-frame .data-table-row, .ds-layout-frame .chart-surface { background-color: var(--primary); color: var(--on-primary); border: 2px solid var(--border); border-radius: var(--radius-default); filter: url(#grain-filter); } .ds-layout-frame .sign-panel { padding: var(--component-internal); } .ds-layout-frame .directional-arrow { width: var(--icon-size); height: var(--icon-size); background-color: var(--on-primary); } .ds-layout-frame .pictogram-tile { width: var(--icon-size); height: var(--icon-size); background-color: var(--on-primary); border-radius: 9999px; display: inline-flex; align-items: center; justify-content: center; } .ds-layout-frame .pictogram-tile svg { width: 70%; height: 70%; fill: var(--primary); } .ds-layout-frame .metric-cell { padding: 16px; } .ds-layout-frame .data-table-row { border-bottom: 2px solid var(--border); } .ds-layout-frame .chart-surface { padding: 16px; } .ds-layout-frame .signal-bar-track { background-color: rgba(0,0,0,0.15); height: 4px; } .ds-layout-frame .signal-bar-fill { background-color: var(--secondary-col); height: 100%; } .ds-layout-frame .ds-text-display { font-family: var(--font-display); font-size: 48px; font-weight: 700; line-height: 1.25; letter-spacing: 0.05em; text-transform: uppercase; } .ds-layout-frame .ds-text-headline { font-family: var(--font-display); font-size: 36px; font-weight: 700; line-height: 1.25; letter-spacing: 0.025em; text-transform: uppercase; } .ds-layout-frame .ds-text-title { font-family: var(--font-display); font-size: 24px; font-weight: 500; line-height: 1.25; letter-spacing: 0.025em; text-transform: uppercase; } .ds-layout-frame .ds-text- .ds-layout-frame .ds-text-label { font-family: var(--font-body); font-size: 14px; font-weight: 400; line-height: 1.5; letter-spacing: 0.025em; text-transform: uppercase; } .ds-layout-frame .sign-enter { animation: slideIn 250ms cubic-bezier(0.68,-0.55,0.27,1.55); } @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }",
  "interactionStyles": ".ds-layout-frame .destination-button { transition: none; } .ds-layout-frame .destination-button:hover { background-color: var(--secondary-col); color: var(--on-secondary); } .ds-layout-frame .destination-button:active { border-left: 4px solid var(--border); } .ds-layout-frame .destination-button:focus { outline: none; }",
  "buttons": [
    {
      "name": "destination-button",
      "desc": "Primary action button: yellow panel with black text, 2px solid black border, sharp corners. Instantly swaps to blue on hover.",
      "html": "<button onmouseenter=\"this.dataset.guxBg=this.style.background;this.dataset.guxColor=this.style.color;this.style.background='#003399';this.style.color='#FFFFFF';\" onmouseleave=\"this.style.background=this.dataset.guxBg||'';this.style.color=this.dataset.guxColor||'';\" style=\"display:inline-flex;align-items:center;justify-content:center;padding:32px;background:var(--primary);color:var(--on-primary);font-family:var(--font-display);font-size:24px;font-weight:700;letter-spacing:0.025em;text-transform:uppercase;border:2px solid var(--border);border-radius:0;cursor:pointer;transition:none;line-height:1.25;\">FLIGHT INFO</button>",
      "label": "destination-button",
      "note": "Primary action button: yellow panel with black text, 2px solid black border, sharp corners. Instantly swaps to blue on hover."
    },
    {
      "name": "secondary-button",
      "desc": "Secondary action button: blue panel with white text, 2px solid black border. No hover transition, instant swap.",
      "html": "<button onmouseenter=\"this.dataset.guxBg=this.style.background;this.dataset.guxColor=this.style.color;this.style.background='#FFD100';this.style.color='#000000';\" onmouseleave=\"this.style.background=this.dataset.guxBg||'';this.style.color=this.dataset.guxColor||'';\" style=\"display:inline-flex;align-items:center;justify-content:center;padding:32px;background:var(--secondary-col);color:var(--on-secondary);font-family:var(--font-display);font-size:24px;font-weight:500;letter-spacing:0.025em;text-transform:uppercase;border:2px solid var(--border);border-radius:0;cursor:pointer;transition:none;line-height:1.25;\">DEPARTURES</button>",
      "label": "secondary-button",
      "note": "Secondary action button: blue panel with white text, 2px solid black border. No hover transition, instant swap."
    },
    {
      "name": "outline-button",
      "desc": "Ghost button: transparent background, black text and border. Maintains sharp corners and instant hover to blue fill.",
      "html": "<button onmouseenter=\"this.dataset.guxBg=this.style.background;this.dataset.guxColor=this.style.color;this.style.background='#003399';this.style.color='#FFFFFF';\" onmouseleave=\"this.style.background=this.dataset.guxBg||'';this.style.color=this.dataset.guxColor||'';\" style=\"display:inline-flex;align-items:center;justify-content:center;padding:32px;background:transparent;color:var(--on-primary);font-family:var(--font-display);font-size:24px;font-weight:500;letter-spacing:0.025em;text-transform:uppercase;border:2px solid var(--border);border-radius:0;cursor:pointer;transition:none;line-height:1.25;\">TERMINAL MAP</button>",
      "label": "outline-button",
      "note": "Ghost button: transparent background, black text and border. Maintains sharp corners and instant hover to blue fill."
    }
  ],
  "cards": [
    {
      "name": "sign-panel-card",
      "desc": "A full rigid rectangular sign panel with yellow background, 2px black border, baked-enamel grain effect. Contains a two‑column layout: pictogram tile on left, stacked text on right.",
      "html": "<div style=\"display:grid;grid-template-columns:48px 1fr;gap:16px;padding:32px;background:var(--bg);border:2px solid var(--border);border-radius:0;font-family:var(--font-display);position:relative;overflow:hidden;\"><div style=\"width:48px;height:48px;background:var(--on-primary);border-radius:9999px;display:flex;align-items:center;justify-content:center;\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--on-secondary)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"5\"/><path d=\"M12 1v2\"/><path d=\"M12 21v2\"/><path d=\"M4.22 4.22l1.42 1.42\"/><path d=\"M18.36 18.36l1.42 1.42\"/><path d=\"M1 12h2\"/><path d=\"M21 12h2\"/><path d=\"M4.22 19.78l1.42-1.42\"/><path d=\"M18.36 5.64l1.42-1.42\"/></svg></div><div style=\"display:flex;flex-direction:column;justify-content:center;\"><span style=\"font-size:36px;font-weight:700;letter-spacing:0.025em;text-transform:uppercase;line-height:1.25;\">GATE G9</span><span style=\"font-size:18px;font-weight:400;letter-spacing:0;text-transform:normal-case;line-height:1.625;font-family:var(--font-body);\">Amsterdam – London Heathrow</span></div><div style=\"position:absolute;inset:0;pointer-events:none;mix-blend-mode:overlay;opacity:0.02;background-image:url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E');background-repeat:repeat;background-size:200px 200px;\"></div></div>",
      "label": "sign-panel-card",
      "note": "A full rigid rectangular sign panel with yellow background, 2px black border, baked-enamel grain effect. Contains a two‑column layout: pictogram tile on left, stacked text on right."
    },
    {
      "name": "metric-cell-card",
      "desc": "A compact metric cell with yellow background, black border, sharp corners. Shows a numeric value and a label in uppercase Barlow.",
      "html": "<div style=\"padding:16px;background:var(--bg);border:2px solid var(--border);border-radius:0;display:flex;flex-direction:column;align-items:flex-start;gap:4px;overflow:hidden;position:relative;\"><span style=\"font-size:24px;font-weight:700;letter-spacing:0.025em;text-transform:uppercase;line-height:1.25;font-family:var(--font-display);color:var(--on-primary);\">45</span><span style=\"font-size:14px;font-weight:400;letter-spacing:0.025em;text-transform:uppercase;line-height:1.5;font-family:var(--font-body);color:var(--on-primary);\">GATES</span><div style=\"position:absolute;inset:0;pointer-events:none;mix-blend-mode:overlay;opacity:0.02;background-image:url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E');background-repeat:repeat;background-size:200px 200px;\"></div></div>",
      "label": "metric-cell-card",
      "note": "A compact metric cell with yellow background, black border, sharp corners. Shows a numeric value and a label in uppercase Barlow."
    }
  ],
  "forms": [
    {
      "name": "text-input",
      "desc": "Text input in sign‑panel style: yellow background, 2px solid black border, black uppercase placeholder, sharp corners.",
      "html": "<div style=\"display:flex;flex-direction:column;gap:8px;\"><label style=\"font-size:14px;font-weight:400;letter-spacing:0.025em;text-transform:uppercase;line-height:1.5;font-family:var(--font-body);color:var(--on-primary);\">FLIGHT NUMBER</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" placeholder=\"e.g. KL123\" style=\"width:100%;padding:16px 32px;background:var(--bg);color:var(--on-primary);font-family:var(--font-display);font-size:18px;font-weight:400;line-height:1.625;text-transform:uppercase;border:2px solid var(--border);border-radius:0;outline:none;box-sizing:border-box;\" /></div>",
      "label": "text-input",
      "stateLabel": "Text input in sign‑panel style: yellow background, 2px solid black border, black uppercase placeholder, sharp corners."
    },
    {
      "name": "select-input",
      "desc": "Dropdown select styled as a sign panel element. Yellow background, black border, black arrow indicator.",
      "html": "<div style=\"display:flex;flex-direction:column;gap:8px;\"><label style=\"font-size:14px;font-weight:400;letter-spacing:0.025em;text-transform:uppercase;line-height:1.5;font-family:var(--font-body);color:var(--on-primary);\">DESTINATION</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"width:100%;padding:16px 32px;padding-right:48px;background:var(--bg) url(\\x27data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 width=%2224%22 height=%2224%22 fill=%22black%22%3E%3Cpath d=%22M7 10l5 5 5-5z%22/%3E%3C/svg%3E\\x27) no-repeat right 16px center;background-size:24px;color:var(--on-primary);font-family:var(--font-display);font-size:18px;font-weight:400;line-height:1.625;text-transform:uppercase;border:2px solid var(--border);border-radius:0;outline:none;appearance:none;-webkit-appearance:none;box-sizing:border-box;\"><option>LONDON</option><option>PARIS</option><option>NEW YORK</option></select></div>",
      "label": "select-input",
      "stateLabel": "Dropdown select styled as a sign panel element. Yellow background, black border, black arrow indicator."
    },
    {
      "name": "checkbox-input",
      "desc": "Custom checkbox styled as a solid square with black border; checked state is full black fill with white checkmark.",
      "html": "<label style=\"display:flex;align-items:center;gap:16px;cursor:pointer;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" checked style=\"appearance:none;-webkit-appearance:none;width:24px;height:24px;background:var(--bg);border:2px solid var(--border);border-radius:0;cursor:pointer;position:relative;flex-shrink:0;\"/><span style=\"font-size:18px;font-weight:400;line-height:1.625;text-transform:normal-case;font-family:var(--font-body);color:var(--on-primary);\">Priority boarding</span></label>",
      "label": "checkbox-input",
      "stateLabel": "Custom checkbox styled as a solid square with black border; checked state is full black fill with white checkmark."
    }
  ],
  "extraComponents": [
    {
      "name": "directional-arrow",
      "desc": "Schiphol open‑notch directional arrow, solid black, placed at the extreme right edge of a sign panel.",
      "html": "<div style=\"display:flex;align-items:center;padding:0;width:48px;height:48px;background:var(--on-primary);clip-path:polygon(0 0,0 100%,100% 50%);-webkit-clip-path:polygon(0 0,0 100%,100% 50%);\"></div>"
    },
    {
      "name": "pictogram-tile",
      "desc": "Solid black circular tile containing a white silhouette pictogram, representing a facility or service.",
      "html": "<div style=\"width:48px;height:48px;background:var(--on-primary);border-radius:9999px;display:flex;align-items:center;justify-content:center;\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--on-secondary)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"2\" y=\"4\" width=\"20\" height=\"16\" rx=\"2\" ry=\"2\"/><path d=\"M7 8h10\"/><path d=\"M7 12h6\"/><path d=\"M7 16h4\"/></svg></div>"
    },
    {
      "name": "signal-bar",
      "desc": "Horizontal bar showing a proportional fill (blue) over a faint black track, used for loading or gauge values.",
      "html": "<div style=\"display:flex;flex-direction:column;gap:8px;padding:16px;background:var(--bg);border:2px solid var(--border);border-radius:0;\"><span style=\"font-size:14px;font-weight:400;letter-spacing:0.025em;text-transform:uppercase;line-height:1.5;font-family:var(--font-body);color:var(--on-primary);\">OCCUPANCY</span><div style=\"width:100%;height:4px;background:rgba(0,0,0,0.15);position:relative;\"><div style=\"width:70%;height:100%;background:var(--secondary-col);\"></div></div></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — DEPARTURES</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — GATE CHANGES</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — FLIGHT STATUS</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — Please proceed to gate G9 for immediate boarding.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — TERMINAL 3 – SCHIPHOL PLAZA</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Rounded corners on any panel, button, or container break the rigid industrial character.",
      "avoid": {
        "html": "<div style=\"background:#FFD100;border:2px solid #000;border-radius:12px;padding:32px;\">DO NOT USE ROUNDED CORNERS</div>",
        "label": "Avoid"
      },
      "rule": "Rounded corners on any panel, button, or container break the rigid industrial character.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Drop shadows add depth to a system that must remain flat and coplanar.",
      "avoid": {
        "html": "<button style=\"background:#FFD100;color:#000;border:2px solid #000;box-shadow:3px 3px 0 rgba(0,0,0,0.5);padding:32px;\">NO SHADOWS</button>",
        "label": "Avoid"
      },
      "rule": "Drop shadows add depth to a system that must remain flat and coplanar.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Gradients, transparency, and more than three colours per panel dilute the high-contrast legibility.",
      "avoid": {
        "html": "<div style=\"background:linear-gradient(to right,#FFD100,#FFC700);color:#000;border:2px solid #00f;padding:32px;\">NO GRADIENTS / EXTRA COLORS</div>",
        "label": "Avoid"
      },
      "rule": "Gradients, transparency, and more than three colours per panel dilute the high-contrast legibility.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "rule": "Maintain the system binary: accent-structured specificity, never generic neutral UI.",
      "do": {
        "label": "System-specific cue",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      },
      "avoid": {
        "label": "Generic soft card",
        "html": "<div style=\"width:110px;height:68px;background:#f4f4f4;border-radius:14px;box-shadow:0 8px 24px rgba(0,0,0,.12);\"></div>"
      }
    }
  ],
  "layouts": {
    "copy": {
      "heroKicker": "SCHIPHOL · FLIGHT INFORMATION SYSTEM",
      "heroHeadline": "REAL-TIME DEPARTURE MONITORING",
      "heroSub": "AT A GLANCE STATUS FOR ALL GATES · BASED ON THE OFFICIAL AMSTERDAM AIRPORT SIGNAGE SYSTEM",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">VIEW DEPARTURES</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">GATE MAP</button>",
      "navLinks": [
        "DEPARTURES",
        "ARRIVALS",
        "GATES",
        "FLIGHTS",
        "TERMINAL"
      ],
      "features": [
        {
          "title": "GATE MONITOR",
          "desc": "LIVE UPDATES ON GATE ASSIGNMENTS AND BOARDING STAGE.",
          "icon": "✈️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">✈️ GATE MONITOR</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">LIVE UPDATES ON GATE ASSIGNMENTS AND BOARDING STAGE.</div></div>"
        },
        {
          "title": "FLIGHT TRACKING",
          "desc": "REAL-TIME DEPARTURE AND ARRIVAL TIMES WITH DELTA INDICATORS.",
          "icon": "🕐",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🕐 FLIGHT TRACKING</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">REAL-TIME DEPARTURE AND ARRIVAL TIMES WITH DELTA INDICATORS.</div></div>"
        },
        {
          "title": "SIGNAGE PREVIEW",
          "desc": "PANELS RENDERED IN THE OFFICIAL SCHIPHOL YELLOW-BLACK STYLE.",
          "icon": "🪧",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🪧 SIGNAGE PREVIEW</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">PANELS RENDERED IN THE OFFICIAL SCHIPHOL YELLOW-BLACK STYLE.</div></div>"
        },
        {
          "title": "ROUTE MAP",
          "desc": "INTERACTIVE TERMINAL LAYOUT WITH DIRECTIONAL ARROWS.",
          "icon": "🧭",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🧭 ROUTE MAP</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">INTERACTIVE TERMINAL LAYOUT WITH DIRECTIONAL ARROWS.</div></div>"
        }
      ],
      "ctaStripHeadline": "READY TO IMPLEMENT THIS SYSTEM?",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">REQUEST ACCESS</button>",
      "sidebarBrand": "AMS SIGNAGE",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "DEPARTURES",
          "active": true
        },
        {
          "icon": "◉",
          "label": "GATES",
          "active": false
        },
        {
          "icon": "◉",
          "label": "FLIGHTS",
          "active": false
        },
        {
          "icon": "◉",
          "label": "TERMINAL",
          "active": false
        }
      ],
      "dashboardTitle": "TERMINAL OPERATIONS BOARD",
      "metrics": [
        {
          "label": "ON TIME",
          "value": "87",
          "delta": "+3",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "DELAYED",
          "value": "11",
          "delta": "-2",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "CANCELLED",
          "value": "2",
          "delta": "0",
          "dir": "flat",
          "direction": "flat"
        },
        {
          "label": "GATES ACTIVE",
          "value": "24",
          "delta": "+1",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "HOURLY DEPARTURE VOLUME",
      "panelATitle": "GATE ASSIGNMENTS",
      "panelARows": [
        {
          "label": "GATE B13",
          "value": "LHR 12:30",
          "pct": 12
        },
        {
          "label": "GATE C22",
          "value": "JFK 13:15",
          "pct": 13
        },
        {
          "label": "GATE D04",
          "value": "BCN 14:00",
          "pct": 14
        },
        {
          "label": "GATE A18",
          "value": "FRA 14:45",
          "pct": 14
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "SIGNAL BAR STATUS",
      "panelBCells": [
        {
          "label": "BOARDING",
          "value": "3",
          "state": "ok"
        },
        {
          "label": "FINAL CALL",
          "value": "2",
          "state": "warn"
        },
        {
          "label": "GATE CLOSED",
          "value": "1",
          "state": "err"
        },
        {
          "label": "DELAYED",
          "value": "5",
          "state": "ok"
        },
        {
          "label": "CANCELLED",
          "value": "1",
          "state": "warn"
        },
        {
          "label": "ON SCHEDULE",
          "value": "12",
          "state": "err"
        },
        {
          "label": "GATE CHANGE",
          "value": "2",
          "state": "ok"
        },
        {
          "label": "UNKNOWN",
          "value": "0",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "06:00",
        "07:00",
        "08:00",
        "09:00",
        "10:00",
        "11:00"
      ],
      "series": [
        {
          "data": [
            12,
            18,
            24,
            20,
            15,
            10,
            10,
            10,
            10,
            10,
            10,
            10
          ],
          "label": "DEPARTURES",
          "axis": "left",
          "color": "#FFD100"
        },
        {
          "data": [
            8,
            14,
            20,
            22,
            18,
            12,
            12,
            12,
            12,
            12,
            12,
            12
          ],
          "label": "ARRIVALS",
          "axis": "right-1",
          "color": "#003399"
        }
      ]
    },
    "splashRender": "function(el) { el.innerHTML = '<div style=\"display:grid;grid-template-columns:48px 1fr;gap:16px;padding:32px;background:#FFD100;border:2px solid #000;border-radius:0;font-family:var(--font-display);position:relative;overflow:hidden;filter:url(#grain-filter);\"><div style=\"width:48px;height:48px;background:#000;border-radius:9999px;display:flex;align-items:center;justify-content:center;\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"5\"/><path d=\"M12 1v2\"/><path d=\"M12 21v2\"/><path d=\"M4.22 4.22l1.42 1.42\"/><path d=\"M18.36 18.36l1.42 1.42\"/><path d=\"M1 12h2\"/><path d=\"M21 12h2\"/><path d=\"M4.22 19.78l1.42-1.42\"/><path d=\"M18.36 5.64l1.42-1.42\"/></svg></div><div style=\"display:flex;flex-direction:column;justify-content:center;\"><span style=\"font-size:48px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;line-height:1.25;color:#000;\">REAL-TIME DEPARTURES</span><span style=\"font-size:18px;font-weight:400;letter-spacing:0;text-transform:normal-case;line-height:1.625;font-family:var(--font-body);color:#000;\">SCHIPHOL AMSTERDAM AIRPORT</span></div></div>'; }",
    "showcaseRender": "function(el) { el.innerHTML = '<div style=\"display:grid;grid-template-columns:1fr 1fr;gap:16px;padding:32px;\">' + '<div style=\"min-height:160px;padding:24px;border:2px solid #000;background:#FFD100;color:#000;font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;border-radius:0;overflow:hidden;filter:url(#grain-filter);\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#000;\">✈️ GATE MONITOR</div><div style=\"font-size:12px;line-height:1.55;color:#000;\">LIVE UPDATES ON GATE ASSIGNMENTS AND BOARDING STAGE.</div></div>' + '<div style=\"min-height:160px;padding:24px;border:2px solid #000;background:#FFD100;color:#000;font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;border-radius:0;overflow:hidden;filter:url(#grain-filter);\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#000;\">🕐 FLIGHT TRACKING</div><div style=\"font-size:12px;line-height:1.55;color:#000;\">REAL-TIME DEPARTURE AND ARRIVAL TIMES WITH DELTA INDICATORS.</div></div>' + '<div style=\"min-height:160px;padding:24px;border:2px solid #000;background:#FFD100;color:#000;font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;border-radius:0;overflow:hidden;filter:url(#grain-filter);\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#000;\">🪧 SIGNAGE PREVIEW</div><div style=\"font-size:12px;line-height:1.55;color:#000;\">PANELS RENDERED IN THE OFFICIAL SCHIPHOL YELLOW-BLACK STYLE.</div></div>' + '<div style=\"min-height:160px;padding:24px;border:2px solid #000;background:#FFD100;color:#000;font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;border-radius:0;overflow:hidden;filter:url(#grain-filter);\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#000;\">🧭 ROUTE MAP</div><div style=\"font-size:12px;line-height:1.55;color:#000;\">INTERACTIVE TERMINAL LAYOUT WITH DIRECTIONAL ARROWS.</div></div></div>'; }",
    "panelCRender": "function(el) { var html = '<div style=\"padding:32px;background:#FFD100;border:2px solid #000;border-radius:0;filter:url(#grain-filter);font-family:var(--font-display);\">'; html += '<div style=\"font-size:24px;font-weight:700;letter-spacing:0.025em;text-transform:uppercase;line-height:1.25;color:#000;margin-bottom:16px;\">SIGNAL BAR STATUS</div>'; var items = [{label:'BOARDING',value:'3',state:'ok'},{label:'FINAL CALL',value:'2',state:'warn'},{label:'GATE CLOSED',value:'1',state:'err'},{label:'DELAYED',value:'5',state:'ok'},{label:'CANCELLED',value:'1',state:'warn'},{label:'ON SCHEDULE',value:'12',state:'err'},{label:'GATE CHANGE',value:'2',state:'ok'},{label:'UNKNOWN',value:'0',state:'warn'}]; for(var i=0;i<items.length;i++){ var item=items[i]; html += '<div style=\"display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #000;font-family:var(--font-body);font-size:14px;letter-spacing:0.025em;text-transform:uppercase;\"><span>'+item.label+'</span><span style=\"font-weight:700;\">'+item.value+'</span></div>'; } html += '</div>'; el.innerHTML = html; }",
    "heroBackground": "function(el) { el.style.background = '#FFD100'; el.style.filter = 'url(#grain-filter)'; }",
    "ctaBackground": "function(el) { el.style.background = '#FFD100'; el.style.filter = 'url(#grain-filter)'; }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'height:4px;background:#000;width:100%;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = '#FFD100'; el.style.filter = 'url(#grain-filter)'; }",
    "surfaceOverlay": "function(el) { var ov = document.createElement('div'); ov.style.cssText = 'position:absolute;inset:0;pointer-events:none;mix-blend-mode:overlay;opacity:0.02;background-image:url(data:image/svg+xml,%3Csvg%20viewBox=%220%200%20200%20200%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter%20id=%22noise%22%3E%3CfeTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.65%22%20numOctaves=%223%22%20stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20filter=%22url(%23noise)%22/%3E%3C/svg%3E);background-repeat:repeat;background-size:200px 200px;'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(canvas, tick) { var ctx = canvas.getContext('2d'); var w = canvas.width; var h = canvas.height; ctx.clearRect(0,0,w,h); var s = 4; var primary = '#FFD100'; for(var y=0; y<h; y+=s){ for(var x=0; x<w; x+=s){ var noise = Math.sin(x * 0.1 + tick * 10) * Math.cos(y * 0.1 + tick * 7); if(noise > 0.95){ ctx.fillStyle = primary; ctx.globalAlpha = 0.03; ctx.fillRect(x,y,s,s); } } } }",
  "shadcnTokens": {
    "--color-background": "#FFD100",
    "--color-popover": "#FFD100",
    "--color-foreground": "#000000",
    "--color-card-foreground": "#000000",
    "--color-popover-foreground": "#000000",
    "--color-card": "#FFD100",
    "--color-muted": "#FFD100",
    "--color-muted-foreground": "#555555",
    "--color-primary": "#FFD100",
    "--color-ring": "#FFD100",
    "--color-primary-foreground": "#000000",
    "--color-secondary": "#003399",
    "--color-accent": "#003399",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
    "--color-border": "#000000",
    "--color-input": "#000000",
    "--color-destructive": "#000000"
  },
  "shadcnTokensClassic": {
    "--background": "#FFD100",
    "--popover": "#FFD100",
    "--foreground": "#000000",
    "--card-foreground": "#000000",
    "--popover-foreground": "#000000",
    "--card": "#FFD100",
    "--muted": "#FFD100",
    "--muted-foreground": "#555555",
    "--primary": "#FFD100",
    "--ring": "#FFD100",
    "--primary-foreground": "#000000",
    "--secondary": "#003399",
    "--accent": "#003399",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#000000"
  }
});
