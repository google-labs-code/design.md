registerSystem({
  "meta": {
    "name": "Jeppesen Navigation Chart System",
    "tagline": "Cold, precise, and authoritative — aeronautical chart aesthetics for digital interfaces",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Arimo&family=Courier+Prime&display=swap"
  },
  "yamlTokens": {
    "name": "Jeppesen Navigation Chart System",
    "colors": {
      "surface": "#F5F0E8",
      "on-surface": "#333333",
      "on-surface-variant": "#666666",
      "primary": "#0072BC",
      "on-primary": "#FFFFFF",
      "secondary": "#FFD100",
      "on-secondary": "#333333",
      "tertiary": "#4D8B3B",
      "on-tertiary": "#FFFFFF",
      "error": "#CC0000",
      "on-error": "#FFFFFF",
      "outline": "#9A9A9A",
      "outline-variant": "#D0D0D0",
      "surface-container-low": "#F5F0E8"
    },
    "typography": {
      "display": {
        "fontFamily": "Inter, Arimo, sans-serif",
        "fontSize": "24px",
        "fontWeight": 400,
        "lineHeight": 1.25,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Inter, Arimo, sans-serif",
        "fontSize": "20px",
        "fontWeight": 400,
        "lineHeight": 1.25,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Inter, Arimo, sans-serif",
        "fontSize": "16px",
        "fontWeight": 400,
        "lineHeight": 1.25,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Inter, Arimo, sans-serif",
        "fontSize": "14px",
        "fontWeight": 400,
        "lineHeight": 1.375,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "label": {
        "fontFamily": "Inter, Arimo, sans-serif",
        "fontSize": "12px",
        "fontWeight": 400,
        "lineHeight": 1.375,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "tabular": {
        "fontFamily": "Courier Prime, monospace",
        "fontSize": "12px",
        "fontWeight": 400,
        "lineHeight": 1,
        "letterSpacing": "0em"
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
      "component-internal": "4px",
      "section-internal": "8px",
      "page-edge": "16px",
      "gap-component": "4px",
      "gap-section": "16px",
      "height-sm": "24px",
      "height-md": "32px",
      "height-lg": "40px",
      "icon": "16px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "transparent",
        "textColor": "#333333",
        "rounded": "{rounded.button}",
        "padding": "12px",
        "height": "32px"
      },
      "button-primary-hover": {
        "backgroundColor": "#0072BC",
        "textColor": "#FFFFFF",
        "rounded": "{rounded.button}",
        "padding": "12px",
        "height": "32px"
      },
      "button-secondary": {
        "backgroundColor": "transparent",
        "textColor": "#333333",
        "rounded": "{rounded.button}",
        "padding": "12px"
      },
      "card": {
        "backgroundColor": "#F5F0E8",
        "rounded": "{rounded.card}",
        "padding": "8px"
      },
      "input": {
        "backgroundColor": "transparent",
        "textColor": "#333333",
        "rounded": "{rounded.input}"
      },
      "input-focus": {
        "backgroundColor": "transparent",
        "textColor": "#0072BC",
        "rounded": "{rounded.input}"
      },
      "legend-box": {
        "backgroundColor": "#F5F0E8",
        "rounded": "{rounded.card}",
        "padding": "8px"
      },
      "airspace-overlay": {
        "backgroundColor": "#0072BC",
        "rounded": "0px"
      }
    },
    "version": "alpha",
    "description": "A cold, precise, and authoritative design system translating aeronautical navigation chart aesthetics into digital interfaces — off-white paper simulation, all-caps grotesque typography, thin vector linework, and a strictly functional palette of cyan, yellow, green, gray, and red.",
    "provenance": {
      "coverage_status": "minimal",
      "identity_description": "",
      "manual_enrichment_required": true,
      "imagery_count": 2,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": null,
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "en.wikipedia.org",
          "count": 1
        },
        {
          "host": "airandspace.si.edu",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://en.wikipedia.org/wiki/Jeppesen",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia",
          "confidence_original": "high"
        },
        {
          "url": "https://airandspace.si.edu/collection-objects/jeppesen-chart-1930/nasm_A19731416000",
          "host": "airandspace.si.edu",
          "institution": "Smithsonian National Air and Space Museum",
          "confidence_original": "high"
        }
      ],
      "typefaces_attested": {},
      "flags": [
        "few_usable_urls",
        "no_typography_extracted",
        "no_colour_extracted",
        "3_robots_disallowed_urls"
      ],
      "honest_gaps": {}
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#F5F0E8",
    "--on-bg": "#333333",
    "--primary": "#0072BC",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#FFD100",
    "--on-secondary": "#333333",
    "--surface": "#F5F0E8",
    "--on-bg-muted": "#666666",
    "--border": "#9A9A9A",
    "--error": "#CC0000",
    "--font-display": "Inter, Arimo, sans-serif",
    "--font-body": "Inter, Arimo, sans-serif",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "on-surface": "#333333",
    "on-surface-variant": "#666666",
    "tertiary": "#4D8B3B",
    "on-tertiary": "#FFFFFF",
    "on-error": "#FFFFFF",
    "outline": "#9A9A9A",
    "outline-variant": "#D0D0D0",
    "surface-container-low": "#F5F0E8",
    "primary-container": "rgba(0, 114, 188, 0.4)",
    "error-container": "rgba(204, 0, 0, 0.15)",
    "warn": "#FF8C42",
    "ok": "#22C55E",
    "err": "#CC0000",
    "deltaUp": "#0072BC",
    "deltaDown": "#CC0000",
    "deltaFlat": "#9A9A9A",
    "live": "#0072BC",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#666666",
    "chartFont": "Space Grotesk"
  },
  "elevation": {
    "model": "flat",
    "chart-card": {
      "box-shadow": "0 1px 2px rgba(0,0,0,0.15)",
      "description": "Light shadow at chart edge only, no elevation hierarchy"
    },
    "depths": {
      "level-0": "no shadow",
      "level-1": "0 1px 2px rgba(0,0,0,0.15)",
      "stacking-context": "background → airspace fills → linework → labels → symbols"
    }
  },
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "paper",
    "grain": {
      "technique": "SVG feTurbulence",
      "parameters": {
        "baseFrequency": "0.65",
        "numOctaves": "3",
        "type": "fractalNoise"
      },
      "intensity": "opacity 5%",
      "blend": "overlay",
      "scope": "full-page canvas",
      "tailwind-approximation": "not available"
    },
    "halftone": {
      "technique": "CSS repeating-radial-gradient",
      "parameters": {
        "dot-radius": "1.5px",
        "spacing": "4px",
        "density": "20%"
      },
      "intensity": "opacity 15%",
      "blend": "multiply",
      "scope": "area fills (water, terrain, airspace)",
      "tailwind-approximation": "not available"
    },
    "fold-crease": {
      "technique": "CSS linear-gradient",
      "parameters": {
        "center-band": "2px rgba(0,0,0,0.08)",
        "feather": "true"
      },
      "intensity": "opacity 15%",
      "blend": "multiply",
      "scope": "vertical center of chart",
      "tailwind-approximation": "not available"
    },
    "misregistration": {
      "technique": "CSS translate offset",
      "parameters": {
        "offset-x": "0.15mm",
        "offset-y": "0",
        "color-cyan": "#0072BC",
        "color-magenta": "#CC0066"
      },
      "intensity": "barely perceptible",
      "blend": "normal",
      "scope": "airspace boundary lines",
      "tailwind-approximation": "not available"
    },
    "terrain-hatch": {
      "technique": "CSS repeating-linear-gradient (45°)",
      "parameters": {
        "line-width": "0.5pt",
        "spacing": "1mm",
        "color": "#333333"
      },
      "intensity": "opacity 20%",
      "blend": "multiply",
      "scope": "terrain elevation fills",
      "tailwind-approximation": "not available"
    },
    "rendering-flags": {
      "font-smoothing": "antialiased",
      "image-rendering": "auto",
      "text-rendering": "auto"
    }
  },
  "globalFilter": "<svg xmlns='http://www.w3.org/2000/svg'><defs><filter id='paper-grain' x='0' y='0' width='100%' height='100%'><feTurbulence baseFrequency='0.65' numOctaves='3' type='fractalNoise'/></filter></defs></svg>",
  "globalBodyCss": "font-family: Inter, Arimo, sans-serif; background: #F5F0E8; color: #333333;",
  "globalCss": ".ds-layout-frame ::selection { background-color: rgba(0, 114, 188, 0.25); color: #333333; } .ds-layout-frame ::-webkit-scrollbar { width: 6px; } .ds-layout-frame ::-webkit-scrollbar-track { background: #E8E2D8; } .ds-layout-frame ::-webkit-scrollbar-thumb { background: #9A9A9A; } .ds-layout-frame *:focus-visible { outline: 0.5pt solid #0072BC; outline-offset: 1px; } .ds-layout-frame *:hover:not(:disabled) { border-color: #0072BC; } .ds-layout-frame *:active:not(:disabled) { border-width: 2px; } .ds-layout-frame *:disabled { opacity: 0.4; cursor: not-allowed; } .ds-layout-frame::before { content: ''; position: absolute; inset: 0; pointer-events: none; z-index: 1; background-image: url(data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%27 height=%27100%27%3E%3Cfilter id=%27f%27%3E%3CfeTurbulence baseFrequency=%270.65%27 numOctaves=%273%27 type=%27fractalNoise%27/%3E%3C/filter%3E%3Crect width=%27100%27 height=%27100%27 fill=%27%23000%27 filter=%27url(%23f)%27 opacity=%270.5%27/%3E%3C/svg%3E); background-size: 100px 100px; opacity: 0.05; mix-blend-mode: overlay; }",
  "interactionModel": {
    "hover": {
      "delta": "color-shift",
      "description": "Thin border (#9A9A9A outline or #0072BC cyan) appears on interactive elements"
    },
    "focus": {
      "delta": "color-border",
      "description": "0.5pt solid cyan (#0072BC) outline on focused element"
    },
    "active": {
      "delta": "offset-shift",
      "description": "Highlighted route or waypoint line receives a parallel offset stroke in cyan (#0072BC)"
    }
  },
  "interactionStyles": ".ds-layout-frame button:hover, .ds-layout-frame a:hover, .ds-layout-frame [role='button']:hover { border-color: #0072BC; } .ds-layout-frame button:focus-visible, .ds-layout-frame a:focus-visible { outline: 0.5pt solid #0072BC; outline-offset: 1px; } .ds-layout-frame button:active, .ds-layout-frame a:active { border-width: 2px; } .ds-layout-frame *:disabled { opacity: 0.4; cursor: not-allowed; }",
  "chartStyle": {
    "grid": {
      "color": "#D0D0D0",
      "weight": "0.25pt",
      "major-interval": "10 minutes of arc",
      "minor-interval": "2 minutes of arc"
    },
    "airspace-fills": {
      "controlled": "rgba(0, 114, 188, 0.4) with halftone",
      "restricted": "rgba(204, 0, 0, 0.4) with diagonal hash",
      "terrain": "rgba(77, 139, 59, 0.4) with hatch"
    },
    "symbols": {
      "airport": "square with inner circle",
      "VOR": "hexagon with central dot",
      "NDB": "circle with dot",
      "waypoint": "diamond",
      "obstacle": "triangle (red)",
      "reporting-point": "star",
      "size": "16px",
      "stroke-width": "0.5pt",
      "fill": "none"
    },
    "leader-lines": {
      "angle": "45°",
      "weight": "0.5pt",
      "color": "#333333"
    },
    "compass-rose": {
      "position": "corner",
      "outer-ring": "1px #333333",
      "cardinal-labels": "uppercase text-xs"
    },
    "scale-bar": {
      "bands": "4-6 alternating black/white rectangles",
      "length": "200px",
      "labels": "nautical miles and kilometers"
    },
    "legend-box": {
      "border": "1px solid #9A9A9A",
      "padding": "8px",
      "title": "LEGEND uppercase text-xs"
    },
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#666666",
    "fontFamily": "Inter, Arimo, sans-serif"
  },
  "dashboardStyle": {
    "background": "#F5F0E8",
    "card": {
      "background": "#F5F0E8",
      "border": "1px solid #9A9A9A",
      "border-radius": "0px",
      "padding": "8px"
    },
    "metric-cell": {
      "background": "#F5F0E8",
      "border": "1px solid #9A9A9A",
      "label": "text-xs uppercase #666666",
      "value": "text-2xl uppercase #333333",
      "delta-positive": "text-sm #0072BC",
      "delta-negative": "text-sm #CC0000"
    },
    "signal-bar": {
      "track": "border 1px #9A9A9A, h-2",
      "fill": "bg-[#0072BC]",
      "border-radius": "0px"
    },
    "status-cell": {
      "ok": "text-[#009900] with border-l-2 border-[#009900]",
      "warn": "text-[#FFD700] with border-l-2 border-[#FFD700]",
      "err": "text-[#CC0000] with border-l-2 border-[#CC0000]"
    },
    "data-table": {
      "row-alternating": "even bg-[#EDE8E0]",
      "cell-border": "border-b border-[#D0D0D0]",
      "label": "text-xs uppercase #666666",
      "value": "text-sm uppercase #333333"
    }
  },
  "landingStyle": {
    "layout": "single chart panel with data block top-left, legend bottom-left/right, compass rose free corner",
    "hero": "full chart canvas with grid and airspace fills",
    "cta": "border-only button with uppercase label, no rounded corners, hover shifts to filled state",
    "signatureMoment": "Grid lines and cyan airspace boundary appear on initial scroll"
  },
  "buttons": [
    {
      "name": "Primary Action Button",
      "desc": "Used for primary commands. Default state shows a thin outline; hover fills with cyan.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; color: var(--on-bg); border: 1px solid var(--border); height: 32px; padding: 0 12px; font-family: var(--font-display); font-size: 12px; text-transform: uppercase; letter-spacing: -0.025em; cursor: pointer; outline: none;\" onmouseover=\"this.style.background='var(--primary)'; this.style.color='var(--on-primary)'; this.style.borderColor='var(--primary)';\" onmouseout=\"this.style.background='transparent'; this.style.color='var(--on-bg)'; this.style.borderColor='var(--border)';\">APPROACH</button>",
      "label": "Primary Action Button",
      "note": "Used for primary commands. Default state shows a thin outline; hover fills with cyan."
    },
    {
      "name": "Secondary Action Button",
      "desc": "For less prominent actions. Text-only with hover effect.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; color: var(--on-bg); border: none; height: 32px; padding: 0 12px; font-family: var(--font-display); font-size: 12px; text-transform: uppercase; letter-spacing: -0.025em; cursor: pointer; outline: none;\" onmouseover=\"this.style.color='var(--primary)';\" onmouseout=\"this.style.color='var(--on-bg)';\">HOLDING</button>",
      "label": "Secondary Action Button",
      "note": "For less prominent actions. Text-only with hover effect."
    },
    {
      "name": "Danger / Error Button",
      "desc": "For destructive actions. Uses error color.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; color: var(--error); border: 1px solid var(--error); height: 32px; padding: 0 12px; font-family: var(--font-display); font-size: 12px; text-transform: uppercase; letter-spacing: -0.025em; cursor: pointer; outline: none;\" onmouseover=\"this.style.background='var(--error)'; this.style.color='var(--on-error)';\" onmouseout=\"this.style.background='transparent'; this.style.color='var(--error)';\">DANGER</button>",
      "label": "Danger / Error Button",
      "note": "For destructive actions. Uses error color."
    }
  ],
  "cards": [
    {
      "name": "Data Block Card",
      "desc": "Compact card for displaying a set of related data, mimicking a chart's information block.",
      "html": "<div style=\"background: var(--bg); border: 1px solid var(--border); padding: 8px; font-family: var(--font-display); color: var(--on-bg);\"><div style=\"font-size: 12px; color: var(--on-bg-muted); letter-spacing: -0.025em; text-transform: uppercase; margin-bottom: 4px;\">FREQUENCY</div><div style=\"font-size: 24px; font-weight: 400; letter-spacing: -0.025em;\">118.5</div></div>",
      "label": "Data Block Card",
      "note": "Compact card for displaying a set of related data, mimicking a chart's information block."
    },
    {
      "name": "Metric Cell",
      "desc": "Used in dashboards to show a metric with label and delta indicator.",
      "html": "<div style=\"background: var(--bg); border: 1px solid var(--border); padding: 8px; font-family: var(--font-display);\"><div style=\"font-size: 12px; color: var(--on-bg-muted); text-transform: uppercase; letter-spacing: -0.025em;\">GROUND SPEED</div><div style=\"font-size: 24px; color: var(--on-bg); letter-spacing: -0.025em;\">245</div><div style=\"font-size: 14px; color: var(--primary); letter-spacing: -0.025em;\">+12 KT</div></div>",
      "label": "Metric Cell",
      "note": "Used in dashboards to show a metric with label and delta indicator."
    }
  ],
  "forms": [
    {
      "name": "Text Input",
      "desc": "Single-line text input with thin border and uppercase styling.",
      "html": "<div style=\"display: flex; flex-direction: column;\"><label style=\"font-family: var(--font-display); font-size: 12px; color: var(--on-bg-muted); text-transform: uppercase; letter-spacing: -0.025em; margin-bottom: 4px;\">WAYPOINT</label><input onfocus=\"this.style.border='1px solid var(--primary)'\" onblur=\"this.style.border='1px solid var(--border)'\" type=\"text\" style=\"background: transparent; border: 1px solid var(--border); color: var(--on-bg); font-family: var(--font-display); font-size: 14px; text-transform: uppercase; padding: 0 8px; height: 32px; outline: none;\" placeholder=\"KJFK\" /></div>",
      "label": "Text Input",
      "stateLabel": "Single-line text input with thin border and uppercase styling."
    },
    {
      "name": "Select / Dropdown",
      "desc": "Dropdown for selecting from a list of options, styled as a chart legend item.",
      "html": "<div style=\"display: flex; flex-direction: column; position: relative;\"><label style=\"font-family: var(--font-display); font-size: 12px; color: var(--on-bg-muted); text-transform: uppercase; letter-spacing: -0.025em; margin-bottom: 4px;\">AIRSPACE</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; border: 1px solid var(--border); color: var(--on-bg); font-family: var(--font-display); font-size: 14px; text-transform: uppercase; padding: 0 8px; height: 32px; outline: none; appearance: none;\"><option>CLASS B</option><option>CLASS C</option><option>CLASS D</option></select><span style=\"pointer-events: none; position: absolute; right: 8px; bottom: 8px; color: var(--on-bg-muted); font-size: 10px;\">▼</span></div>",
      "label": "Select / Dropdown",
      "stateLabel": "Dropdown for selecting from a list of options, styled as a chart legend item."
    },
    {
      "name": "Checkbox / Toggle",
      "desc": "Square checkbox with cyan check on hover/active.",
      "html": "<div style=\"display: flex; align-items: center;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"width: 16px; height: 16px; border: 1px solid var(--border); background: transparent; appearance: none; outline: none; margin: 0 8px 0 0;\" onchange=\"this.style.borderColor=\\x27var(--primary)\\x27\" /><label style=\"font-family: var(--font-display); font-size: 12px; color: var(--on-bg); text-transform: uppercase; letter-spacing: -0.025em;\">NOTAM</label></div>",
      "label": "Checkbox / Toggle",
      "stateLabel": "Square checkbox with cyan check on hover/active."
    }
  ],
  "extraComponents": [
    {
      "name": "Airspace Overlay",
      "desc": "A semi-transparent cyan fill representing controlled airspace.",
      "html": "<div style=\"background: rgba(0, 114, 188, 0.4); border: 1px dashed var(--primary); padding: 4px; font-family: var(--font-display); font-size: 10px; color: var(--on-primary); text-transform: uppercase; letter-spacing: -0.025em;\">CLASS B AIRSPACE</div>"
    },
    {
      "name": "Compass Rose",
      "desc": "Navigation compass indicator with cardinal points.",
      "html": "<div style=\"width: 64px; height: 64px; position: relative; border: 1px solid var(--on-bg); display: flex; align-items: center; justify-content: center;\"><div style=\"position: absolute; top: 2px; left: 50%; transform: translateX(-50%); font-size: 12px; font-family: var(--font-display); color: var(--on-bg); text-transform: uppercase;\">N</div><div style=\"position: absolute; bottom: 2px; left: 50%; transform: translateX(-50%); font-size: 12px; font-family: var(--font-display); color: var(--on-bg); text-transform: uppercase;\">S</div><div style=\"position: absolute; left: 2px; top: 50%; transform: translateY(-50%); font-size: 12px; font-family: var(--font-display); color: var(--on-bg); text-transform: uppercase;\">W</div><div style=\"position: absolute; right: 2px; top: 50%; transform: translateY(-50%); font-size: 12px; font-family: var(--font-display); color: var(--on-bg); text-transform: uppercase;\">E</div><div style=\"width: 2px; height: 2px; background: var(--on-bg); border-radius: 50%;\"></div></div>"
    },
    {
      "name": "Legend Box",
      "desc": "A legend panel with symbol descriptions, as seen on chart edges.",
      "html": "<div style=\"background: var(--bg); border: 1px solid var(--border); padding: 8px; font-family: var(--font-display);\"><div style=\"font-size: 12px; color: var(--on-bg-muted); text-transform: uppercase; letter-spacing: -0.025em; margin-bottom: 4px;\">LEGEND</div><div style=\"display: flex; flex-direction: column; gap: 4px;\"><div style=\"display: flex; align-items: center; gap: 4px;\"><span style=\"width: 16px; height: 16px; border: 1px solid var(--on-bg); display: inline-block;\"></span><span style=\"font-size: 11px; color: var(--on-bg);\">AIRPORT</span></div><div style=\"display: flex; align-items: center; gap: 4px;\"><span style=\"width: 16px; height: 16px; border: 1px solid var(--primary); background: var(--primary); opacity: 0.4;\"></span><span style=\"font-size: 11px; color: var(--on-bg);\">CONTROLLED</span></div></div></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — N12345</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — VOR 112.5</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — AIRWAY J45</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — ALTITUDE 3500 FT</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — FREQ 118.5</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Avoid rounded corners on any component — all corners must be square (0px).",
      "avoid": {
        "html": "<button style=\"border-radius: 8px; background: var(--primary); color: var(--on-primary); border: none; padding: 8px 12px; font-family: var(--font-display); text-transform: uppercase;\">ROUNDED</button>",
        "label": "Avoid"
      },
      "rule": "Avoid rounded corners on any component — all corners must be square (0px).",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Avoid drop shadows and glows — maintain flat, printed appearance.",
      "avoid": {
        "html": "<div style=\"box-shadow: 0 4px 6px rgba(0,0,0,0.3); background: var(--bg); padding: 16px; font-family: var(--font-display); color: var(--on-bg); text-transform: uppercase;\">SHADOW</div>",
        "label": "Avoid"
      },
      "rule": "Avoid drop shadows and glows — maintain flat, printed appearance.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Avoid pure black (#000000) — use #333333 for darkest value.",
      "avoid": {
        "html": "<p style=\"color: #000000; font-family: var(--font-display);\">BLACK TEXT</p>",
        "label": "Avoid"
      },
      "rule": "Avoid pure black (#000000) — use #333333 for darkest value.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Avoid serif, italic, or bold fonts — use grotesque sans-serif at regular weight.",
      "avoid": {
        "html": "<p style=\"font-family: 'Times New Roman', serif; font-style: italic; font-weight: bold; color: var(--on-bg);\">WRONG STYLE</p>",
        "label": "Avoid"
      },
      "rule": "Avoid serif, italic, or bold fonts — use grotesque sans-serif at regular weight.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "doAvoidStyle": {
    "desc": "Global style rules enforcing the printed-chart aesthetic",
    "html": "* { box-sizing: border-box; } *:focus-visible { outline: 0.5pt solid var(--primary); outline-offset: 1px; } *:hover:not(:disabled) { border-color: var(--primary); } *:active:not(:disabled) { border-width: 2px; } *:disabled { opacity: 0.4; cursor: not-allowed; }"
  },
  "effects": [],
  "motion": [],
  "colors": {
    "surface": "#F5F0E8",
    "on-surface": "#333333",
    "on-surface-variant": "#666666",
    "primary": "#0072BC",
    "on-primary": "#FFFFFF",
    "secondary": "#FFD100",
    "on-secondary": "#333333",
    "tertiary": "#4D8B3B",
    "on-tertiary": "#FFFFFF",
    "error": "#CC0000",
    "on-error": "#FFFFFF",
    "outline": "#9A9A9A",
    "outline-variant": "#D0D0D0",
    "surface-container-low": "#F5F0E8"
  },
  "typography": {
    "display": {
      "fontFamily": "Inter, Arimo, sans-serif",
      "fontSize": "24px",
      "fontWeight": 400,
      "lineHeight": 1.25,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "Inter, Arimo, sans-serif",
      "fontSize": "20px",
      "fontWeight": 400,
      "lineHeight": 1.25,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "Inter, Arimo, sans-serif",
      "fontSize": "16px",
      "fontWeight": 400,
      "lineHeight": 1.25,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "Inter, Arimo, sans-serif",
      "fontSize": "14px",
      "fontWeight": 400,
      "lineHeight": 1.375,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "label": {
      "fontFamily": "Inter, Arimo, sans-serif",
      "fontSize": "12px",
      "fontWeight": 400,
      "lineHeight": 1.375,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "tabular": {
      "fontFamily": "Courier Prime, monospace",
      "fontSize": "12px",
      "fontWeight": 400,
      "lineHeight": 1,
      "letterSpacing": "0em"
    }
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "0px"
  },
  "spacing": {
    "component-internal": "4px",
    "section-internal": "8px",
    "page-edge": "16px",
    "gap-component": "4px",
    "gap-section": "16px",
    "height-sm": "24px",
    "height-md": "32px",
    "height-lg": "40px",
    "icon": "16px"
  },
  "layouts": {
    "copy": {
      "heroKicker": "AERONAUTICAL CHART SYSTEM",
      "heroHeadline": "COLD. PRECISE. AUTHORITATIVE.",
      "heroSub": "OFF-WHITE PAPER GROUND WITH CYAN AIRSPACE FILLS",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">LOAD WAYPOINTS</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">VIEW AIRSPACE</button>",
      "navLinks": [
        "CHART",
        "AIRSPACE",
        "FREQ",
        "LEGEND",
        "METAR"
      ],
      "features": [
        {
          "title": "AIRSPACE OVERLAY",
          "desc": "COLOR-CODED CONTROLLED AND RESTRICTED AIRSPACE WITH HALFTONE FILLS",
          "icon": "🛰️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🛰️ AIRSPACE OVERLAY</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">COLOR-CODED CONTROLLED AND RESTRICTED AIRSPACE WITH HALFTONE FILLS</div></div>"
        },
        {
          "title": "LEGEND BOX",
          "desc": "COMPACT SYMBOL AND LINE KEY WITH LEADER LINES",
          "icon": "📘",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📘 LEGEND BOX</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">COMPACT SYMBOL AND LINE KEY WITH LEADER LINES</div></div>"
        },
        {
          "title": "COMPASS ROSE",
          "desc": "CARDINAL AND INTERCARDINAL DIRECTIONS WITH MAGNETIC VARIATION",
          "icon": "🧭",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🧭 COMPASS ROSE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">CARDINAL AND INTERCARDINAL DIRECTIONS WITH MAGNETIC VARIATION</div></div>"
        },
        {
          "title": "DATA BLOCK",
          "desc": "REVISION DATE, SCALE BAR, AND FREQUENCY PANEL",
          "icon": "📊",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📊 DATA BLOCK</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">REVISION DATE, SCALE BAR, AND FREQUENCY PANEL</div></div>"
        }
      ],
      "ctaStripHeadline": "BUILD YOUR FLIGHT PLAN WITH CHART PRECISION",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">BEGIN COMPOSITION</button>",
      "sidebarBrand": "CHART STATION",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "MAP LAYER",
          "active": true
        },
        {
          "icon": "◉",
          "label": "WAYPOINT LIST",
          "active": false
        },
        {
          "icon": "◉",
          "label": "AIRSPACE FILTER",
          "active": false
        }
      ],
      "dashboardTitle": "NAVIGATION DASHBOARD — FLIGHT DECK",
      "metrics": [
        {
          "label": "ALTITUDE",
          "value": "FL280",
          "delta": "+400FT",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "GROUND SPEED",
          "value": "420KT",
          "delta": "-15KT",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "HEADING",
          "value": "270°",
          "delta": "+2°",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "DIST TO DEST",
          "value": "83NM",
          "delta": "-12NM",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "FUEL REMAIN",
          "value": "2.4H",
          "delta": "-0.3H",
          "dir": "down",
          "direction": "down"
        }
      ],
      "chartTitle": "ALTITUDE PROFILE — SEGMENT 2",
      "panelATitle": "WAYPOINT SEQUENCE",
      "panelARows": [
        {
          "label": "KLAX",
          "value": "SID RY24L",
          "pct": 24
        },
        {
          "label": "FIM",
          "value": "VOR 114.2",
          "pct": 100
        },
        {
          "label": "OAK",
          "value": "VOR 115.8",
          "pct": 100
        },
        {
          "label": "SFO",
          "value": "STAR RY28R",
          "pct": 28
        },
        {
          "label": "MOD",
          "value": "NDB 385",
          "pct": 100
        }
      ],
      "panelBTitle": "AIRSPACE ADVISORIES",
      "panelBCells": [
        {
          "label": "CLASS B",
          "value": "ACTIVE",
          "state": "ok"
        },
        {
          "label": "CLASS C",
          "value": "INACTIVE",
          "state": "warn"
        },
        {
          "label": "MOA",
          "value": "HOT",
          "state": "err"
        },
        {
          "label": "TFR",
          "value": "ACTIVE",
          "state": "ok"
        },
        {
          "label": "ADIZ",
          "value": "WATCH",
          "state": "warn"
        },
        {
          "label": "WARNING",
          "value": "AREA 4",
          "state": "err"
        },
        {
          "label": "ALERT",
          "value": "CEASE",
          "state": "ok"
        },
        {
          "label": "RESTRICTED",
          "value": "R-2508",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "00Z",
        "02Z",
        "04Z",
        "06Z",
        "08Z",
        "10Z"
      ],
      "series": [
        {
          "data": [
            280,
            290,
            310,
            320,
            310,
            300,
            300,
            300,
            300,
            300,
            300,
            300
          ],
          "label": "ALTITUDE (FL)",
          "axis": "left",
          "color": "#0072BC"
        },
        {
          "data": [
            420,
            430,
            440,
            450,
            440,
            430,
            430,
            430,
            430,
            430,
            430,
            430
          ],
          "label": "SPEED (KT)",
          "axis": "right-1",
          "color": "#FFD100"
        }
      ]
    },
    "splashRender": "function(el) { el.innerHTML = '<div style=\"padding:24px;background:var(--bg);border:1px solid var(--border);color:var(--on-bg);font-family:var(--font-display);text-transform:uppercase;letter-spacing:-0.025em;\"><div style=\"font-size:10px;color:var(--on-bg-muted);margin-bottom:8px;\">AERONAUTICAL CHART</div><div style=\"font-size:32px;font-weight:400;\">JEppesen</div><div style=\"font-size:14px;color:var(--on-bg-muted);margin-top:4px;\">COLD. PRECISE. AUTHORITATIVE.</div><div style=\"margin-top:16px;display:flex;gap:8px;\"><span style=\"width:16px;height:16px;background:var(--primary);\"></span><span style=\"font-size:12px;\">AIRSPACE OVERLAY</span></div></div>'; }",
    "showcaseRender": "function(el) { var features=[{title:'AIRSPACE OVERLAY',desc:'COLOR-CODED CONTROLLED AND RESTRICTED AIRSPACE WITH HALFTONE FILLS'},{title:'LEGEND BOX',desc:'COMPACT SYMBOL AND LINE KEY WITH LEADER LINES'},{title:'COMPASS ROSE',desc:'CARDINAL AND INTERCARDINAL DIRECTIONS WITH MAGNETIC VARIATION'},{title:'DATA BLOCK',desc:'REVISION DATE, SCALE BAR, AND FREQUENCY PANEL'}]; var html='<div style=\"display:grid;grid-template-columns:1fr 1fr;gap:16px;padding:16px;\">'; for(var i=0;i<features.length;i++){ html+='<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:400;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">'+features[i].title+'</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">'+features[i].desc+'</div></div>'; } html+='</div>'; el.innerHTML=html; }",
    "panelCRender": "function(el) { var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); svg.setAttribute('width','100%'); svg.setAttribute('height','200'); svg.style.display='block'; svg.style.background='var(--bg)'; var s1 = document.createElementNS('http://www.w3.org/2000/svg','polyline'); s1.setAttribute('points','10,180 30,140 50,100 70,80 90,100 110,120'); s1.setAttribute('stroke','#0072BC'); s1.setAttribute('stroke-width','1.5'); s1.setAttribute('fill','none'); var s2 = document.createElementNS('http://www.w3.org/2000/svg','polyline'); s2.setAttribute('points','10,180 30,160 50,150 70,140 90,150 110,160'); s2.setAttribute('stroke','#FFD100'); s2.setAttribute('stroke-width','1.5'); s2.setAttribute('fill','none'); svg.appendChild(s1); svg.appendChild(s2); el.appendChild(svg); }",
    "heroBackground": "function(el) { el.style.background = '#F5F0E8'; el.style.backgroundImage = 'repeating-linear-gradient(0deg, transparent, transparent 19px, var(--outline-variant) 19px, var(--outline-variant) 20px), repeating-linear-gradient(90deg, transparent, transparent 19px, var(--outline-variant) 19px, var(--outline-variant) 20px)'; }",
    "ctaBackground": "function(el) { el.style.background = '#F5F0E8'; }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText='height:1px;width:100%;background:var(--border);margin:0;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = '#F5F0E8'; el.style.backgroundImage = 'repeating-linear-gradient(0deg, transparent, transparent 19px, var(--outline-variant) 19px, var(--outline-variant) 20px), repeating-linear-gradient(90deg, transparent, transparent 19px, var(--outline-variant) 19px, var(--outline-variant) 20px)'; }",
    "surfaceOverlay": "function(el) { var grain=document.createElement('div'); grain.style.cssText='position:absolute;inset:0;pointer-events:none;z-index:2;opacity:0.05;mix-blend-mode:overlay;background-image:url(data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%27 height=%27100%27%3E%3Cfilter id=%27f%27%3E%3CfeTurbulence baseFrequency=%270.65%27 numOctaves=%273%27 type=%27fractalNoise%27/%3E%3C/filter%3E%3Crect width=%27100%27 height=%27100%27 fill=%27%23000%27 filter=%27url(%23f)%27 opacity=%270.5%27/%3E%3C/svg%3E);background-size:100px 100px;'; el.appendChild(grain); }"
  },
  "ambientCanvas": "function(canvas, tick) { var ctx = canvas.getContext('2d'); var w = canvas.width, h = canvas.height; ctx.clearRect(0,0,w,h); ctx.strokeStyle = '#0072BC'; ctx.lineWidth = 0.5; for(var i=0;i<20;i++) { var x = (i * 20 + tick * 0.02) % w; ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x+5, h); ctx.stroke(); } }",
  "shadcnTokens": {
    "--color-background": "#F5F0E8",
    "--color-popover": "#F5F0E8",
    "--color-foreground": "#333333",
    "--color-card-foreground": "#333333",
    "--color-popover-foreground": "#333333",
    "--color-card": "#F5F0E8",
    "--color-muted": "#F5F0E8",
    "--color-muted-foreground": "#666666",
    "--color-primary": "#0072BC",
    "--color-ring": "#0072BC",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#FFD100",
    "--color-accent": "#FFD100",
    "--color-secondary-foreground": "#333333",
    "--color-accent-foreground": "#333333",
    "--color-border": "#9A9A9A",
    "--color-input": "#9A9A9A",
    "--color-destructive": "#CC0000"
  },
  "shadcnTokensClassic": {
    "--background": "#F5F0E8",
    "--popover": "#F5F0E8",
    "--foreground": "#333333",
    "--card-foreground": "#333333",
    "--popover-foreground": "#333333",
    "--card": "#F5F0E8",
    "--muted": "#F5F0E8",
    "--muted-foreground": "#666666",
    "--primary": "#0072BC",
    "--ring": "#0072BC",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#FFD100",
    "--accent": "#FFD100",
    "--secondary-foreground": "#333333",
    "--accent-foreground": "#333333",
    "--border": "#9A9A9A",
    "--input": "#9A9A9A",
    "--destructive": "#CC0000"
  }
});
