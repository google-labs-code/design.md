registerSystem({
  "meta": {
    "name": "Wim Crouwel Grid System",
    "tagline": "Modular grid, monospaced type, offset-print texture",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
  },
  "yamlTokens": {
    "name": "Wim Crouwel Grid System",
    "colors": {
      "primary": "#000000",
      "on-primary": "#F5F0E8",
      "on-secondary": "#F5F0E8",
      "surface": "#F5F0E8",
      "on-surface": "#000000",
      "outline": "#000000",
      "surface-container": "#F5F0E8",
      "outline-variant": "#D4D0C8",
      "inverse-surface": "#000000",
      "inverse-on-surface": "#F5F0E8",
      "ok": "#0033A0",
      "warn": "#FEDD00",
      "err": "#E31E24",
      "delta-up": "#0033A0",
      "delta-down": "#E31E24",
      "delta-flat": "#D4D0C8"
    },
    "typography": {
      "display": {
        "fontFamily": "Space Mono",
        "fontSize": "72px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.1em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Space Mono",
        "fontSize": "48px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.075em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Space Mono",
        "fontSize": "30px",
        "fontWeight": 400,
        "lineHeight": 1.375,
        "letterSpacing": "0.05em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Space Mono",
        "fontSize": "16px",
        "fontWeight": 400,
        "lineHeight": 1.5,
        "letterSpacing": "0.075em",
        "textTransform": "lowercase"
      },
      "label": {
        "fontFamily": "Space Mono",
        "fontSize": "14px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.075em",
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
      "component-internal": "8px",
      "section-internal": "24px",
      "page-edge": "32px",
      "gap-component": "16px",
      "gap-section": "32px",
      "height-sm": "32px",
      "height-md": "40px",
      "height-lg": "48px",
      "icon": "16px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "{colors.primary}",
        "textColor": "{colors.on-primary}",
        "rounded": "{rounded.button}",
        "padding": "16px",
        "height": "40px"
      },
      "button-primary-hover": {
        "backgroundColor": "#E31E24",
        "textColor": "{colors.on-primary}",
        "padding": "16px"
      },
      "card": {
        "backgroundColor": "{colors.surface}",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "metric-cell": {
        "backgroundColor": "{colors.surface}",
        "rounded": "{rounded.card}",
        "padding": "8px",
        "height": "80px"
      }
    },
    "version": "alpha",
    "description": "A typographic and spatial language rooted in 1960s–70s Dutch modernism, based on a strict modular grid, monospaced type, single-case text, one spot accent colour, and offset-print texture simulation.",
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
          "host": "www.stedelijk.nl",
          "count": 2
        },
        {
          "host": "en.wikipedia.org",
          "count": 2
        },
        {
          "host": "www.rijksmuseum.nl",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://www.stedelijk.nl/en/collection/3658-vormgeving",
          "host": "www.stedelijk.nl",
          "institution": "Stedelijk Museum Amsterdam",
          "confidence_original": "low"
        },
        {
          "url": "https://en.wikipedia.org/wiki/New_Alphabet",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia",
          "confidence_original": "high"
        },
        {
          "url": "https://www.rijksmuseum.nl/en/collection/object/The-Christian-year-Thoughts-in-verse-for-the-sundays-and-holydays-throughout-the-year--38c431194e9dc51fb9c0b9d3bcf033e6",
          "host": "www.rijksmuseum.nl",
          "institution": "Rijksmuseum, Amsterdam",
          "confidence_original": "low"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Wim_Crouwel",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia",
          "confidence_original": "high"
        },
        {
          "url": "https://www.stedelijk.nl/en/collection",
          "host": "www.stedelijk.nl",
          "institution": "Stedelijk Museum Amsterdam",
          "confidence_original": "medium"
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
    "--bg": "#F5F0E8",
    "--on-bg": "#000000",
    "--primary": "#000000",
    "--on-primary": "#F5F0E8",
    "--secondary-col": "#E31E24",
    "--on-secondary": "#F5F0E8",
    "--surface": "#F5F0E8",
    "--on-bg-muted": "#333333",
    "--border": "#000000",
    "--error": "#E31E24",
    "--font-display": "Space Mono",
    "--font-body": "Space Mono",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "ok": "#0033A0",
    "warn": "#FEDD00",
    "err": "#E31E24",
    "delta-up": "#0033A0",
    "delta-down": "#E31E24",
    "delta-flat": "#D4D0C8",
    "success": "#0033A0",
    "warning": "#FEDD00",
    "error": "#E31E24",
    "deltaUp": "#0033A0",
    "deltaDown": "#E31E24",
    "deltaFlat": "#D4D0C8",
    "live": "#000000",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#333333",
    "chartFont": "Space Mono"
  },
  "elevation": {
    "base": "z-0",
    "sticky": "z-20",
    "overlays": "z-40",
    "top-layer": "z-50",
    "shadow": "none"
  },
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "paper",
    "params": {
      "grain": true,
      "inkGain": true,
      "misregister": true
    }
  },
  "globalFilter": "<svg xmlns='http://www.w3.org/2000/svg'><defs><filter id='offset-print-simulation' x='0' y='0' width='100%' height='100%'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' result='noise'/><feColorMatrix type='matrix' values='0 0 0 0 0.96 0 0 0 0 0.94 0 0 0 0 0.91 0 0 0 0.08 0' result='grain'/><feComposite operator='in' in='grain' in2='SourceGraphic' result='grainApplied'/><feMerge><feMergeNode in='SourceGraphic'/><feMergeNode in='grainApplied'/></feMerge></filter></defs></svg>",
  "globalBodyCss": "font-family: 'Space Mono', monospace; background: var(--bg); color: var(--on-bg); margin: 0; padding: 0; overflow-x: hidden;",
  "globalCss": ".ds-layout-frame { box-sizing: border-box; --grid-unit: 8px; background-image: linear-gradient(0deg, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px); background-size: var(--grid-unit) var(--grid-unit); filter: url('#offset-print-simulation'); } .ds-layout-frame, .ds-layout-frame * { box-sizing: border-box; font-family: 'Space Mono', monospace; text-rendering: geometricPrecision; }",
  "interactionModel": {
    "hover": {
      "transition": null,
      "properties": {
        "background-color": "var(--secondary-col)",
        "color": "var(--on-secondary)"
      }
    },
    "focus": {
      "outline": "none",
      "border-bottom": "2px solid var(--secondary-col)"
    },
    "active": {
      "transform": "translateY(8px)",
      "transition": "0ms linear"
    }
  },
  "interactionStyles": ".ds-layout-frame button, .ds-layout-frame a, .ds-layout-frame input, .ds-layout-frame select, .ds-layout-frame textarea { transition: background-color 200ms linear, color 200ms linear, transform 0ms linear; }\n.ds-layout-frame button:hover, .ds-layout-frame a:hover { background-color: var(--secondary-col); color: var(--on-secondary); }\n.ds-layout-frame button:active, .ds-layout-frame a:active { transform: translateY(8px); }\n.ds-layout-frame :focus { outline: none; border-bottom: 2px solid var(--secondary-col); }",
  "chartStyle": {
    "background": "#F5F0E8",
    "gridLines": "#D4D0C8",
    "axis": "#000000",
    "dataLine": "#000000",
    "dataLineSecondary": "#0033A0",
    "dot": "#000000",
    "dotSize": "3px",
    "axisLabel": {
      "fontFamily": "Space Mono",
      "fontWeight": 700,
      "textTransform": "uppercase",
      "letterSpacing": "0.075em"
    },
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#333333",
    "fontFamily": "Space Mono"
  },
  "dashboardStyle": {
    "layout": "strict 12-column grid, 8px unit, frames neatly into three zones: left sidebar (3 col), main (9 col), with hairline dividers between zones.",
    "density": "highly structured but generous margins (32px page edge, 16px gap-component). Each metric cell is exactly 80px height, snapped to grid.",
    "panelTreatment": "no rounded corners, no shadows. Each panel is a paper-white rectangle bounded by hairline or heavy rules. Accent bar used for active selection or error highlight.",
    "dataVizStyle": "monochrome line charts with 1.5px squares for dots, no circles. Grid lines in outline-variant (#D4D0C8). Axis labels uppercase, tabular figure alignment.",
    "signatureElement": "accent-colour bar (solid red #E31E24) spanning 2 columns × 1 row at bottom-right of dashboard, containing reversed-out uppercase label 'LIVE'."
  },
  "landingStyle": {
    "heroApproach": "dominant letterform (uppercase 'GRID' in display size, 72px) occupying top-left quadrant over 6 columns × 3 rows. Secondary lowercase body text in right 2 columns. All flush left.",
    "scrollBehavior": "linear snap to grid rows. Each scroll increments by 1 row (8px unit). No parallax, no easing.",
    "ctaStyle": "primary black button with reversed-out white type. Hover transforms to solid accent red. No animation curves.",
    "signatureMoment": "on load, a faint paper grain texture (CSS opacity pattern) fades in linearly over 300ms. Simultaneously, the dominant letterform slides from left (translateX(-8px) to 0) in a stepped linear reveal mimicking ink on press."
  },
  "spacing": {
    "unit": "8px",
    "component-internal": "8px",
    "section-internal": "24px",
    "page-edge": "32px",
    "gap-component": "16px",
    "gap-section": "32px",
    "height-sm": "32px",
    "height-md": "40px",
    "height-lg": "48px",
    "icon": "16px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "0px"
  },
  "buttons": [
    {
      "name": "primary",
      "desc": "Solid black button with white reversed-out type, strict grid alignment. Hover shifts to accent red.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"button\" style=\"display:inline-block;background-color:var(--primary);color:var(--on-primary);border:none;border-radius:var(--radius-btn);padding:0 16px;height:40px;font-family:var(--font-display);font-size:14px;font-weight:700;line-height:1.25;letter-spacing:0.075em;text-transform:uppercase;text-align:left;cursor:pointer;transition:background-color 200ms linear,color 200ms linear,transform 0ms linear;white-space:nowrap;\">unit</button>",
      "label": "primary",
      "note": "Solid black button with white reversed-out type, strict grid alignment. Hover shifts to accent red."
    },
    {
      "name": "secondary",
      "desc": "Outline button with black border, transparent background (paper). Active focus overlays red accent bar.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"button\" style=\"display:inline-block;background-color:transparent;color:var(--on-bg);border:2px solid var(--border);border-radius:var(--radius-btn);padding:0 16px;height:40px;font-family:var(--font-display);font-size:14px;font-weight:700;line-height:1.25;letter-spacing:0.075em;text-transform:uppercase;text-align:left;cursor:pointer;transition:background-color 200ms linear,color 200ms linear,transform 0ms linear;white-space:nowrap;\">unit</button>",
      "label": "secondary",
      "note": "Outline button with black border, transparent background (paper). Active focus overlays red accent bar."
    },
    {
      "name": "ghost",
      "desc": "Nearly invisible, only typography. Hover reveals a red underline (2px) below the all-caps label.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"button\" style=\"display:inline-block;background-color:transparent;color:var(--on-bg);border:none;border-bottom:2px solid transparent;border-radius:var(--radius-btn);padding:0 8px;height:32px;font-family:var(--font-display);font-size:14px;font-weight:700;line-height:1.25;letter-spacing:0.075em;text-transform:uppercase;text-align:left;cursor:pointer;transition:border-color 200ms linear,color 200ms linear;white-space:nowrap;\">unit</button>",
      "label": "ghost",
      "note": "Nearly invisible, only typography. Hover reveals a red underline (2px) below the all-caps label."
    }
  ],
  "cards": [
    {
      "name": "card",
      "desc": "Paper-white card with no border-radius, strict internal padding of 16px. Contains a modular typography block.",
      "html": "<div style=\"background-color:var(--surface);border:none;border-radius:var(--radius-card);padding:16px;height:auto;font-family:var(--font-body);font-size:16px;line-height:1.5;letter-spacing:0.075em;text-transform:lowercase;color:var(--on-bg);\"><div style=\"font-family:var(--font-display);font-size:30px;font-weight:400;line-height:1.375;letter-spacing:0.05em;text-transform:uppercase;margin-bottom:8px;\">module</div><div style=\"border-top:1px solid var(--border);padding-top:8px;\">three lines of lowercase body text set wide across the grid cell.</div></div>",
      "label": "card",
      "note": "Paper-white card with no border-radius, strict internal padding of 16px. Contains a modular typography block."
    },
    {
      "name": "metric-cell",
      "desc": "Compact 80px card for data values. Bold display numeral dominates, label below in uppercase label style.",
      "html": "<div style=\"background-color:var(--surface);border:1px solid var(--border);border-radius:var(--radius-card);padding:8px;height:80px;display:flex;flex-direction:column;justify-content:space-between;font-family:var(--font-display);\"><div style=\"font-size:72px;font-weight:700;line-height:1.25;letter-spacing:0.1em;text-transform:uppercase;color:var(--on-bg);\">72</div><div style=\"font-size:14px;font-weight:700;line-height:1.25;letter-spacing:0.075em;text-transform:uppercase;color:var(--on-bg);border-top:1px solid var(--border);padding-top:4px;\">module</div></div>",
      "label": "metric-cell",
      "note": "Compact 80px card for data values. Bold display numeral dominates, label below in uppercase label style."
    }
  ],
  "forms": [
    {
      "name": "text-input",
      "desc": "Single-line input framed by a hairline border. All lowercase placeholder, uppercase active label above.",
      "html": "<div style=\"display:flex;flex-direction:column;gap:4px;font-family:var(--font-display);\"><label style=\"font-size:14px;font-weight:700;line-height:1.25;letter-spacing:0.075em;text-transform:uppercase;color:var(--on-bg);\">enter value</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" placeholder=\"type here\" style=\"background-color:var(--surface);border:1px solid var(--border);border-radius:var(--radius-input);padding:0 8px;height:40px;font-family:var(--font-body);font-size:16px;font-weight:400;line-height:1.5;letter-spacing:0.075em;text-transform:lowercase;color:var(--on-bg);outline:none;transition:border-color 200ms linear;\" /></div>",
      "label": "text-input",
      "stateLabel": "Single-line input framed by a hairline border. All lowercase placeholder, uppercase active label above."
    },
    {
      "name": "select",
      "desc": "Custom-styled select with downward chevron formed by a 45° diagonal rule (no curves).",
      "html": "<div style=\"display:flex;flex-direction:column;gap:4px;font-family:var(--font-display);\"><label style=\"font-size:14px;font-weight:700;line-height:1.25;letter-spacing:0.075em;text-transform:uppercase;color:var(--on-bg);\">choose</label><div style=\"position:relative;height:40px;\"><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"appearance:none;background-color:var(--surface);border:1px solid var(--border);border-radius:var(--radius-input);padding:0 8px;height:40px;width:100%;font-family:var(--font-body);font-size:16px;font-weight:400;line-height:1.5;letter-spacing:0.075em;text-transform:lowercase;color:var(--on-bg);outline:none;transition:border-color 200ms linear;\"><option>option one</option><option>option two</option></select><div style=\"position:absolute;right:8px;top:12px;width:10px;height:10px;border-right:2px solid var(--on-bg);border-bottom:2px solid var(--on-bg);transform:rotate(45deg);pointer-events:none;\"></div></div></div>",
      "label": "select",
      "stateLabel": "Custom-styled select with downward chevron formed by a 45° diagonal rule (no curves)."
    },
    {
      "name": "checkbox",
      "desc": "Square toggle, 16px, with a reversed-out 'X' when checked. No round elements.",
      "html": "<label style=\"display:flex;align-items:center;gap:8px;font-family:var(--font-display);font-size:14px;font-weight:700;line-height:1.25;letter-spacing:0.075em;text-transform:uppercase;color:var(--on-bg);cursor:pointer;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"appearance:none;width:16px;height:16px;margin:0;background-color:var(--surface);border:2px solid var(--border);border-radius:var(--radius-chip);cursor:pointer;position:relative;\" onchange=\"this.style.backgroundColor=this.checked?\\x27var(--primary)\\x27:\\x27var(--surface)\\x27; this.nextElementSibling.style.display=this.checked?\\x27block\\x27:\\x27none\\x27;\" /><span style=\"display:none;position:absolute;top:0;left:3px;font-size:14px;font-weight:700;color:var(--on-primary);pointer-events:none;\">X</span>option</label>",
      "label": "checkbox",
      "stateLabel": "Square toggle, 16px, with a reversed-out 'X' when checked. No round elements."
    }
  ],
  "extraComponents": [
    {
      "name": "badge",
      "desc": "Small all-caps label inside a solid block (full saturation accent or black). Width equals character count × grid unit.",
      "html": "<span style=\"display:inline-block;background-color:var(--secondary-col);color:var(--on-secondary);padding:0 8px;height:24px;font-family:var(--font-display);font-size:14px;font-weight:700;line-height:24px;letter-spacing:0.075em;text-transform:uppercase;white-space:nowrap;\">live</span>"
    },
    {
      "name": "grid-divider",
      "desc": "A hairline rule (1px) or heavy bar (4px) that snaps to the grid. Always full-width within its container.",
      "html": "<div style=\"height:1px;background-color:var(--border);width:100%;margin:8px 0;\"></div>"
    },
    {
      "name": "accent-colour-bar",
      "desc": "Solid rectangle of accent red occupying a grid-aligned space. Often used at edge. May contain reversed-out type.",
      "html": "<div style=\"background-color:var(--secondary-col);color:var(--on-secondary);padding:8px 16px;font-family:var(--font-display);font-size:14px;font-weight:700;line-height:1.25;letter-spacing:0.075em;text-transform:uppercase;display:inline-block;\">accent</div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — GRID</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — MODULAR SYSTEM</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — VISUAL LANGUAGE</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — three lines of lowercase body text set wide across the grid cell.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — ENTER VALUE</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Avoid curves, circles, or organic shapes. Use only rectangles and straight lines.",
      "avoid": {
        "html": "<button style=\"background-color:#000000; color:white; border-radius:50%; width:40px; height:40px;\">OK</button>",
        "label": "Avoid"
      },
      "rule": "Avoid curves, circles, or organic shapes. Use only rectangles and straight lines.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:100%;height:68px;background:var(--bg);border:2px solid var(--primary);display:flex;align-items:center;padding:0 16px;\"><span style=\"font-family:Space Mono;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:var(--primary);\">GRID CELL</span></div>"
      }
    },
    {
      "desc": "Avoid more than one accent colour or any tint/shade. Use one full-saturation accent.",
      "avoid": {
        "html": "<div style=\"background-color:#E31E24; color:white;\">red</div><div style=\"background-color:#0033A0; color:white;\">blue</div>",
        "label": "Avoid"
      },
      "rule": "Avoid more than one accent colour or any tint/shade. Use one full-saturation accent.",
      "do": {
        "label": "Do",
        "html": "<div style=\"background-color:var(--secondary-col);color:var(--on-secondary);padding:8px 16px;font-family:Space Mono;font-weight:700;text-transform:uppercase;letter-spacing:0.075em;display:inline-block;\">ACCENT</div>"
      }
    },
    {
      "desc": "Avoid centered or justified text alignment. Always flush left, ragged right.",
      "avoid": {
        "html": "<p style=\"text-align:center; font-family:Space Mono;\">centered type violates grid rhythm</p>",
        "label": "Avoid"
      },
      "rule": "Avoid centered or justified text alignment. Always flush left, ragged right.",
      "do": {
        "label": "Do",
        "html": "<p style=\"font-family:Space Mono;text-align:left;margin:0;letter-spacing:0.075em;\">flush left text aligns with grid</p>"
      }
    },
    {
      "desc": "Avoid drop shadows, gradients, or opacity layers. Use flat colour blocks.",
      "avoid": {
        "html": "<div style=\"background:linear-gradient(to right, #000000, #E31E24); box-shadow:2px 2px 4px rgba(0,0,0,0.5);\">gradient and shadow forbidden</div>",
        "label": "Avoid"
      },
      "rule": "Avoid drop shadows, gradients, or opacity layers. Use flat colour blocks.",
      "do": {
        "label": "Do",
        "html": "<div style=\"background-color:var(--primary);color:var(--on-primary);padding:16px;font-family:Space Mono;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;\">FLAT</div>"
      }
    }
  ],
  "layouts": {
    "copy": {
      "heroKicker": "GRID SYSTEM / ALPHA",
      "heroHeadline": "WIM CROUWEL\nMODULAR GRID",
      "heroSub": "monospaced type · single-case text · one spot accent · offset-print texture",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">VIEW GRID</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">LOAD ACCENT</button>",
      "navLinks": [
        "GRID",
        "SIGNAL",
        "DRIFT",
        "NODES",
        "ACCENT"
      ],
      "features": [
        {
          "title": "MODULAR GRID",
          "desc": "strict 8px cell · every element snaps to intersection · visible blue construction lines",
          "icon": "▦",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">▦ MODULAR GRID</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">strict 8px cell · every element snaps to intersection · visible blue construction lines</div></div>"
        },
        {
          "title": "MONOSPACED TYPE",
          "desc": "space mono · all uppercase or all lowercase · widest tracking · uniform stroke",
          "icon": "M",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">M MONOSPACED TYPE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">space mono · all uppercase or all lowercase · widest tracking · uniform stroke</div></div>"
        },
        {
          "title": "SPOT ACCENT",
          "desc": "one colour at full saturation · red, blue, or yellow · never tinted or shaded",
          "icon": "■",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">■ SPOT ACCENT</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">one colour at full saturation · red, blue, or yellow · never tinted or shaded</div></div>"
        },
        {
          "title": "OFFSET TEXTURE",
          "desc": "simulated paper grain · ink gain · spot colour misregister · uncoated surface",
          "icon": "﹍",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">﹍ OFFSET TEXTURE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">simulated paper grain · ink gain · spot colour misregister · uncoated surface</div></div>"
        },
        {
          "title": "GRID DIVIDER",
          "desc": "hairline rules · 1px structural dividers · accent bars at grid edges",
          "icon": "▬",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">▬ GRID DIVIDER</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">hairline rules · 1px structural dividers · accent bars at grid edges</div></div>"
        }
      ],
      "ctaStripHeadline": "APPLY THE SYSTEM / BUILD YOUR GRID",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">NEW COMPOSITION</button>",
      "sidebarBrand": "CROUWEL GRID",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "MODULES",
          "active": true
        },
        {
          "icon": "◉",
          "label": "SPACING",
          "active": false
        },
        {
          "icon": "◉",
          "label": "ACCENT",
          "active": false
        },
        {
          "icon": "◉",
          "label": "DIVIDERS",
          "active": false
        }
      ],
      "dashboardTitle": "GRID COMPOSITION / ACTIVE  [LIVE]",
      "metrics": [
        {
          "label": "CELLS",
          "value": "144",
          "delta": "+12",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "COLUMNS",
          "value": "12",
          "delta": "0",
          "dir": "flat",
          "direction": "flat"
        },
        {
          "label": "ROWS",
          "value": "12",
          "delta": "0",
          "dir": "flat",
          "direction": "flat"
        },
        {
          "label": "ACCENT AREA",
          "value": "2×3",
          "delta": "-1",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "DOMINANT SIZE",
          "value": "6×4",
          "delta": "+2",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "INK GAIN",
          "value": "5%",
          "delta": "+1%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "LIVE STATUS",
          "value": "ACTIVE",
          "delta": "—",
          "dir": "flat",
          "direction": "flat"
        }
      ],
      "chartTitle": "REGISTRATION OFFSET / X AXIS",
      "panelATitle": "GRID COORDINATES",
      "panelARows": [
        {
          "label": "ORIGIN",
          "value": "0,0",
          "pct": 0
        },
        {
          "label": "MARGIN",
          "value": "32px",
          "pct": 32
        },
        {
          "label": "GUTTER",
          "value": "8px",
          "pct": 8
        },
        {
          "label": "COLUMN WIDTH",
          "value": "64px",
          "pct": 64
        },
        {
          "label": "ROW HEIGHT",
          "value": "64px",
          "pct": 64
        },
        {
          "label": "GRID END",
          "value": "768,768",
          "pct": 100
        }
      ],
      "panelBTitle": "ACCENT SWATCHES",
      "panelBCells": [
        {
          "label": "RED",
          "value": "#E31E24",
          "state": "ok"
        },
        {
          "label": "BLUE",
          "value": "#0033A0",
          "state": "warn"
        },
        {
          "label": "YELLOW",
          "value": "#FEDD00",
          "state": "err"
        },
        {
          "label": "BLACK",
          "value": "#000000",
          "state": "ok"
        },
        {
          "label": "PAPER",
          "value": "#F5F0E8",
          "state": "warn"
        },
        {
          "label": "OUTLINE",
          "value": "#D4D0C8",
          "state": "err"
        },
        {
          "label": "INK GAIN",
          "value": "+8%",
          "state": "ok"
        },
        {
          "label": "MISREGISTER",
          "value": "0.2mm",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "CELL 1",
        "CELL 2",
        "CELL 3",
        "CELL 4",
        "CELL 5",
        "CELL 6",
        "CELL 7",
        "CELL 8"
      ],
      "series": [
        {
          "data": [
            0,
            0.1,
            0.2,
            0.1,
            0,
            -0.1,
            -0.2,
            -0.1,
            -0.1,
            -0.1,
            -0.1,
            -0.1
          ],
          "label": "X OFFSET",
          "axis": "left",
          "color": "#000000"
        },
        {
          "data": [
            0.1,
            0.1,
            0,
            -0.1,
            -0.2,
            -0.1,
            0,
            0.1,
            0.1,
            0.1,
            0.1,
            0.1
          ],
          "label": "Y OFFSET",
          "axis": "right-1",
          "color": "#E31E24"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText='min-height:320px;background:var(--surface);position:relative;overflow:hidden;'; el.innerHTML='<div style=\"padding:32px;border-bottom:1px solid var(--border);\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:var(--primary);margin-bottom:8px;\">GRID SYSTEM / ALPHA</div><div style=\"font-family:var(--font-display);font-size:72px;font-weight:700;line-height:1.25;letter-spacing:0.1em;text-transform:uppercase;color:var(--on-bg);margin:0;\">WIM CROUWEL<br>MODULAR GRID</div><div style=\"font-family:var(--font-body);font-size:16px;font-weight:400;line-height:1.5;letter-spacing:0.075em;text-transform:lowercase;color:var(--on-bg-muted);margin-top:16px;\">monospaced type · single-case text · one spot accent · offset-print texture</div><div style=\"margin-top:24px;display:flex;gap:16px;\"><button style=\"background-color:var(--primary);color:var(--on-primary);border:none;padding:0 16px;height:40px;font-family:var(--font-display);font-size:14px;font-weight:700;letter-spacing:0.075em;text-transform:uppercase;cursor:pointer;transition:background-color 200ms linear,color 200ms linear,transform 0ms linear;\">VIEW GRID</button><button style=\"background-color:transparent;color:var(--on-bg);border:2px solid var(--border);padding:0 16px;height:40px;font-family:var(--font-display);font-size:14px;font-weight:700;letter-spacing:0.075em;text-transform:uppercase;cursor:pointer;transition:background-color 200ms linear,color 200ms linear,transform 0ms linear;\">LOAD ACCENT</button></div></div>'; }",
    "showcaseRender": "function(el) { el.style.cssText = 'padding:32px;display:grid;grid-template-columns:repeat(3,1fr);gap:16px;background:var(--surface);'; el.innerHTML = '<div style=\"border:1px solid var(--border);padding:24px;display:flex;flex-direction:column;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--primary);\">▦ MODULAR GRID</div><div style=\"font-family:var(--font-body);font-size:12px;line-height:1.5;color:var(--on-bg-muted);\">strict 8px cell · every element snaps to intersection · visible blue construction lines</div></div><div style=\"border:1px solid var(--border);padding:24px;display:flex;flex-direction:column;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--primary);\">M MONOSPACED TYPE</div><div style=\"font-family:var(--font-body);font-size:12px;line-height:1.5;color:var(--on-bg-muted);\">space mono · all uppercase or all lowercase · widest tracking · uniform stroke</div></div><div style=\"border:1px solid var(--border);padding:24px;display:flex;flex-direction:column;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--primary);\">■ SPOT ACCENT</div><div style=\"font-family:var(--font-body);font-size:12px;line-height:1.5;color:var(--on-bg-muted);\">one colour at full saturation · red, blue, or yellow · never tinted or shaded</div></div>'; }",
    "panelCRender": "function(el) { el.style.cssText = 'padding:16px;background:var(--surface);border-top:4px solid var(--secondary-col);display:flex;flex-direction:column;gap:12px;'; el.innerHTML = '<div style=\"font-family:var(--font-display);font-size:14px;font-weight:700;letter-spacing:0.075em;text-transform:uppercase;color:var(--on-bg);\">ACCENT SWATCHES</div><div style=\"display:grid;grid-template-columns:repeat(4,1fr);gap:4px;\"><div style=\"background-color:#E31E24;height:24px;\"></div><div style=\"background-color:#0033A0;height:24px;\"></div><div style=\"background-color:#FEDD00;height:24px;\"></div><div style=\"background-color:#000000;height:24px;\"></div></div><div style=\"display:grid;grid-template-columns:1fr 1fr;gap:8px;\"><div><span style=\"font-family:var(--font-body);font-size:12px;letter-spacing:0.075em;text-transform:lowercase;color:var(--on-bg-muted);\">red</span><div style=\"font-family:var(--font-body);font-size:10px;letter-spacing:0.075em;text-transform:lowercase;color:var(--primary);\">#E31E24</div></div><div><span style=\"font-family:var(--font-body);font-size:12px;letter-spacing:0.075em;text-transform:lowercase;color:var(--on-bg-muted);\">blue</span><div style=\"font-family:var(--font-body);font-size:10px;letter-spacing:0.075em;text-transform:lowercase;color:var(--primary);\">#0033A0</div></div><div><span style=\"font-family:var(--font-body);font-size:12px;letter-spacing:0.075em;text-transform:lowercase;color:var(--on-bg-muted);\">yellow</span><div style=\"font-family:var(--font-body);font-size:10px;letter-spacing:0.075em;text-transform:lowercase;color:var(--primary);\">#FEDD00</div></div><div><span style=\"font-family:var(--font-body);font-size:12px;letter-spacing:0.075em;text-transform:lowercase;color:var(--on-bg-muted);\">black</span><div style=\"font-family:var(--font-body);font-size:10px;letter-spacing:0.075em;text-transform:lowercase;color:var(--primary);\">#000000</div></div></div>'; }",
    "heroBackground": "function(el) { el.style.background = '#F5F0E8'; var grid = document.createElement('div'); grid.style.cssText = 'position:absolute;inset:0;background-image:linear-gradient(0deg,rgba(0,0,0,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.03) 1px,transparent 1px);background-size:8px 8px;z-index:1;'; el.appendChild(grid); }",
    "ctaBackground": "function(el) { el.style.background = '#000000'; var grain = document.createElement('div'); grain.style.cssText = 'position:absolute;inset:0;background-image:url(\"data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%278%27 height=%278%27%3E%3Crect width=%278%27 height=%278%27 fill=%27rgba(255,255,255,0.02)%27/%3E%3C/svg%3E\");background-size:8px 8px;z-index:1;opacity:0.5;'; el.appendChild(grain); }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText='height:1px;width:100%;background:var(--border);margin:32px 0;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = 'var(--surface)'; var grid = document.createElement('div'); grid.style.cssText = 'position:absolute;inset:0;background-image:linear-gradient(0deg,rgba(0,0,0,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.03) 1px,transparent 1px);background-size:8px 8px;z-index:0;'; el.appendChild(grid); }",
    "surfaceOverlay": "function(el) { var ov = document.createElement('div'); ov.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;background: radial-gradient(circle at 50% 50%, rgba(0,0,0,0.02) 0%, transparent 70%);mix-blend-mode:multiply;'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(tick) { var canvas = document.createElement('div'); canvas.style.cssText = 'position:fixed;inset:0;z-index:-1;pointer-events:none;background:var(--surface);'; var cell = document.createElement('div'); cell.style.cssText = 'position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:80px;height:80px;border:2px solid var(--primary);opacity:' + (0.3 + 0.2 * Math.sin(tick * 0.01)) + ';'; var inner = document.createElement('div'); inner.style.cssText = 'width:100%;height:100%;background:var(--secondary-col);opacity:' + (0.1 + 0.1 * Math.cos(tick * 0.015)) + ';'; cell.appendChild(inner); canvas.appendChild(cell); return canvas; }",
  "shadcnTokens": {
    "--color-background": "#F5F0E8",
    "--color-popover": "#F5F0E8",
    "--color-foreground": "#000000",
    "--color-card-foreground": "#000000",
    "--color-popover-foreground": "#000000",
    "--color-card": "#F5F0E8",
    "--color-muted": "#F5F0E8",
    "--color-muted-foreground": "#333333",
    "--color-primary": "#000000",
    "--color-ring": "#000000",
    "--color-primary-foreground": "#F5F0E8",
    "--color-secondary": "#E31E24",
    "--color-accent": "#E31E24",
    "--color-secondary-foreground": "#F5F0E8",
    "--color-accent-foreground": "#F5F0E8",
    "--color-border": "#000000",
    "--color-input": "#000000",
    "--color-destructive": "#E31E24"
  },
  "shadcnTokensClassic": {
    "--background": "#F5F0E8",
    "--popover": "#F5F0E8",
    "--foreground": "#000000",
    "--card-foreground": "#000000",
    "--popover-foreground": "#000000",
    "--card": "#F5F0E8",
    "--muted": "#F5F0E8",
    "--muted-foreground": "#333333",
    "--primary": "#000000",
    "--ring": "#000000",
    "--primary-foreground": "#F5F0E8",
    "--secondary": "#E31E24",
    "--accent": "#E31E24",
    "--secondary-foreground": "#F5F0E8",
    "--accent-foreground": "#F5F0E8",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#E31E24"
  }
});
