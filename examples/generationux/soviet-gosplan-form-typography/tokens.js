registerSystem({
  "meta": {
    "name": "Soviet Gosplan Form Typography",
    "tagline": "Cold, bureaucratic machinery of Soviet state planning — dense, utilitarian, unapologetically physical.",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@400;600;700;800&family=Courier+Prime:wght@400&display=swap"
  },
  "yamlTokens": {
    "name": "Soviet Gosplan Form Typography",
    "colors": {
      "primary": "#3A3A3A",
      "on-primary": "#F5F2EB",
      "secondary": "#8B1E1E",
      "on-secondary": "#F5F2EB",
      "tertiary": "#6A7A8C",
      "on-tertiary": "#F5F2EB",
      "surface": "#F5F2EB",
      "on-surface": "#3A3A3A",
      "outline": "#3A3A3A",
      "outline-variant": "#6A7A8C"
    },
    "typography": {
      "display": {
        "fontFamily": "Saira Condensed",
        "fontSize": "48px",
        "fontWeight": 800,
        "lineHeight": 1.25,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Saira Condensed",
        "fontSize": "30px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "-0.05em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Courier Prime",
        "fontSize": "20px",
        "fontWeight": 600,
        "lineHeight": 1.25,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Courier Prime, monospace",
        "fontSize": "16px",
        "fontWeight": 400,
        "lineHeight": 1.2,
        "letterSpacing": "0em",
        "textTransform": "none"
      },
      "label": {
        "fontFamily": "Courier Prime, monospace",
        "fontSize": "14px",
        "fontWeight": 400,
        "lineHeight": 1.25,
        "letterSpacing": "0em",
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
      "section-internal": "16px",
      "page-edge": "16px",
      "gap-component": "8px",
      "gap-section": "16px",
      "height-sm": "32px",
      "height-md": "40px",
      "height-lg": "48px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "{colors.surface}",
        "textColor": "{colors.primary}",
        "rounded": "{rounded.button}",
        "padding": "8px"
      },
      "card": {
        "backgroundColor": "{colors.surface}",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "input": {
        "backgroundColor": "{colors.surface}",
        "rounded": "{rounded.input}",
        "padding": "8px",
        "textColor": "{colors.primary}"
      },
      "rubber-stamp": {
        "backgroundColor": "{colors.surface}",
        "textColor": "{colors.secondary}",
        "rounded": "0px",
        "padding": "8px",
        "size": "80px"
      }
    },
    "version": "alpha",
    "description": "Cold, bureaucratic machinery of Soviet state planning — dense, utilitarian, unapologetically physical, evoking stamped ledgers, typewritten reports, and photocopied paper. Every element feels printed on cheap, uncoated stock.",
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
          "host": "en.wikipedia.org",
          "count": 1
        },
        {
          "host": "www.marxists.org",
          "count": 1
        },
        {
          "host": "www.typejournal.ru",
          "count": 1
        },
        {
          "host": "pastvu.com",
          "count": 1
        },
        {
          "host": "cyberleninka.ru",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://en.wikipedia.org/wiki/State_Emblem_of_the_Soviet_Union",
          "host": "en.wikipedia.org",
          "institution": null,
          "confidence_original": "high"
        },
        {
          "url": "https://www.marxists.org/",
          "host": "www.marxists.org",
          "institution": "Marxists Internet Archive",
          "confidence_original": "low"
        },
        {
          "url": "https://www.typejournal.ru/",
          "host": "www.typejournal.ru",
          "institution": "TypeJournal.ru (Russian typography publication)",
          "confidence_original": "low"
        },
        {
          "url": "https://pastvu.com/",
          "host": "pastvu.com",
          "institution": "PastVu (historical photo platform)",
          "confidence_original": "low"
        },
        {
          "url": "https://cyberleninka.ru/",
          "host": "cyberleninka.ru",
          "institution": "CyberLeninka (Russian open access library)",
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
    "--bg": "#F5F2EB",
    "--on-bg": "#3A3A3A",
    "--primary": "#3A3A3A",
    "--on-primary": "#F5F2EB",
    "--secondary-col": "#8B1E1E",
    "--on-secondary": "#F5F2EB",
    "--surface": "#F5F2EB",
    "--on-bg-muted": "#4A4A4A",
    "--border": "#3A3A3A",
    "--error": "#8B1E1E",
    "--font-display": "'Saira Condensed', sans-serif",
    "--font-body": "'Courier Prime', monospace",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "textPrimary": "--on-bg",
    "textSecondary": "--on-bg-muted",
    "background": "--bg",
    "surface": "--surface",
    "border": "--border",
    "error": "--error",
    "accent": "--secondary-col",
    "err": "--error",
    "warn": "#FF8C42",
    "ok": "#22C55E",
    "deltaUp": "#22C55E",
    "deltaDown": "--error",
    "deltaFlat": "#4A4A4A",
    "live": "#3A3A3A",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#4A4A4A",
    "chartFont": "Space Grotesk"
  },
  "chartStyle": {
    "background": "#F5F2EB",
    "gridLines": "dotted 1px #6A7A8C",
    "axisLabels": {
      "fontFamily": "'Saira Condensed', sans-serif",
      "fontSize": "12px",
      "textTransform": "uppercase",
      "color": "#3A3A3A"
    },
    "dataLine": {
      "stroke": "#3A3A3A",
      "strokeWidth": "1.5px",
      "noSmoothing": true
    },
    "dataPoints": {
      "fill": "#3A3A3A",
      "radius": "small"
    },
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#4A4A4A",
    "fontFamily": "'Courier Prime', monospace"
  },
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "paper",
    "params": {
      "grainFilter": "url(#paper-grain)",
      "grainOpacity": 0.08,
      "grainBlend": "multiply",
      "misregistration": true,
      "carbonCopyGhost": true,
      "carbonCopyGhostCss": ".ds-layout-frame p, .ds-layout-frame div { position: relative; } .ds-layout-frame p::before, .ds-layout-frame div::before { content: attr(data-ghost); position: absolute; top: 2px; left: 0; opacity: 0.3; pointer-events: none; font-family: var(--font-body); color: var(--on-bg); }"
    }
  },
  "interactionModel": {
    "hover": {
      "state": "none"
    },
    "focus": {
      "style": "double-underline",
      "color": "var(--primary, #3A3A3A)",
      "borderWidth": "2px",
      "borderStyle": "solid"
    },
    "active": {
      "effect": "stamp-overlay",
      "scale": "0.8 to 1.0",
      "timing": "100ms steps(1)",
      "offset": "1-2px random"
    },
    "transition": "0ms steps(1) for stamp; linear for ghost trails"
  },
  "spacing": {
    "component-internal": "8px",
    "section-internal": "16px",
    "page-edge": "16px",
    "gap-component": "8px",
    "gap-section": "16px",
    "height-sm": "32px",
    "height-md": "40px",
    "height-lg": "48px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "0px"
  },
  "elevation": {
    "level0": "0 0 0 0 transparent",
    "level1": "0 0 0 0 transparent",
    "level2": "0 0 0 0 transparent"
  },
  "dashboardStyle": {
    "layout": "strict modular grid, 2-4 columns, equal width, fixed gap (8px)",
    "density": "high",
    "panelTreatment": "flat cards with heavy horizontal rules, no rounded corners, no shadows",
    "dataVizStyle": "monochrome lines, dotted grid, no smoothing, square markers",
    "signatureElement": "red rubber stamp overlay on hover/active sections"
  },
  "landingStyle": {
    "heroApproach": "full-width condensed sans-serif headline with heavy underline, no imagery",
    "scrollBehavior": "instant, no animations",
    "ctaStyle": "stamp-style button with dashed border for secondary CTA",
    "signatureMoment": "a data table row with double underline that reveals a stamp on interaction"
  },
  "globalFilter": "<svg><defs><filter id='paper-grain' x='0' y='0' width='100%' height='100%'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' result='noise'></feTurbulence><feColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.08 0' in='noise' result='alphaNoise'></feColorMatrix></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-body, 'Courier Prime', monospace); background-color: var(--bg, #F5F2EB); color: var(--on-bg, #3A3A3A); margin: 0; padding: 0;",
  "globalCss": ".ds-layout-frame { position: relative; background-color: var(--bg); color: var(--on-bg); font-family: var(--font-body, 'Courier Prime', monospace); border-radius: 0px; } .ds-layout-frame::before { content: ''; position: absolute; inset: 0; pointer-events: none; filter: url(#paper-grain); mix-blend-mode: multiply; opacity: 0.08; z-index: 1; } .ds-layout-frame table { border-collapse: collapse; width: 100%; } .ds-layout-frame th { border-bottom: 2px solid var(--border); padding: 4px 8px; text-align: left; text-transform: uppercase; font-family: var(--font-display, 'Saira Condensed', sans-serif); } .ds-layout-frame td { padding: 4px 8px; border-bottom: 1px solid var(--outline-variant, #6A7A8C); font-family: var(--font-body, 'Courier Prime', monospace); } .ds-layout-frame .total td { border-top: 2px double var(--border); } .ds-layout-frame .total + .total td { border-top: none; } .ds-layout-frame * { transition: none; }",
  "interactionStyles": ".ds-layout-frame * { transition: none; }.ds-layout-frame .rubber-stamp:active { transform: scale(0.8); }",
  "buttons": [
    {
      "name": "Primary Action",
      "desc": "Standard primary button used for main actions, mimicking a stamped approval.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:var(--surface); color:var(--primary); border:1px solid var(--primary); border-radius:0; padding:8px 16px; font-family:var(--font-display); font-size:16px; font-weight:700; text-transform:uppercase; letter-spacing:-0.025em; cursor:pointer; transition:none; -webkit-tap-highlight-color:transparent;\">UTVERDI</button>",
      "label": "Primary Action",
      "note": "Standard primary button used for main actions, mimicking a stamped approval."
    },
    {
      "name": "Secondary Stamp",
      "desc": "Red rubber stamp style button for destructive or secondary actions.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:transparent; color:var(--secondary-col); border:2px solid var(--secondary-col); border-radius:0; padding:8px 16px; font-family:var(--font-display); font-size:16px; font-weight:700; text-transform:uppercase; letter-spacing:-0.025em; cursor:pointer; transition:none; -webkit-tap-highlight-color:transparent;\">ODOBRENO</button>",
      "label": "Secondary Stamp",
      "note": "Red rubber stamp style button for destructive or secondary actions."
    },
    {
      "name": "Dashed Fill-In",
      "desc": "Button with dashed border for less emphasized actions, like fill-in fields.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:transparent; color:var(--primary); border:1px dashed var(--primary); border-radius:0; padding:8px 16px; font-family:var(--font-body); font-size:14px; text-transform:uppercase; cursor:pointer; transition:none;\">VYDELIT</button>",
      "label": "Dashed Fill-In",
      "note": "Button with dashed border for less emphasized actions, like fill-in fields."
    }
  ],
  "cards": [
    {
      "name": "Ledger Card",
      "desc": "A data card with heavy horizontal rules and a stamp overlay indicator.",
      "html": "<div style=\"background:var(--surface); border:1px solid var(--border); border-top:4px solid var(--primary); padding:16px; margin-bottom:8px; font-family:var(--font-body); color:var(--on-bg);\"><div style=\"border-bottom:2px solid var(--primary); padding-bottom:8px; margin-bottom:8px; font-family:var(--font-display); font-weight:700; text-transform:uppercase; letter-spacing:-0.05em;\">Plan Fulfillment Report</div><div>Steel output: 112%</div><div>Coal output: 98%</div><div style=\"margin-top:8px; border-top:1px solid var(--border); padding-top:8px; font-size:12px; color:var(--secondary-col); text-transform:uppercase;\">STAMPED APPROVED</div></div>",
      "label": "Ledger Card",
      "note": "A data card with heavy horizontal rules and a stamp overlay indicator."
    },
    {
      "name": "Data Table Card",
      "desc": "A card containing a dense tabular row with double underlines.",
      "html": "<div style=\"background:var(--surface); border:1px solid var(--border); padding:0; margin-bottom:8px; font-family:var(--font-body); color:var(--on-bg);\"><div style=\"display:grid; grid-template-columns:1fr 1fr 1fr; border-bottom:2px solid var(--primary); padding:8px; font-family:var(--font-display); font-weight:600; text-transform:uppercase; font-size:14px;\"><span>Plan</span><span>Actual</span><span>%</span></div><div style=\"display:grid; grid-template-columns:1fr 1fr 1fr; padding:8px; border-bottom:1px solid var(--border);\"><span>Steel</span><span>1200t</span><span>112%</span></div><div style=\"display:grid; grid-template-columns:1fr 1fr 1fr; padding:8px; border-bottom:2px solid var(--primary);\"><span>Total</span><span>--</span><span>105%</span></div></div>",
      "label": "Data Table Card",
      "note": "A card containing a dense tabular row with double underlines."
    }
  ],
  "forms": [
    {
      "name": "Text Input",
      "desc": "Single-line text input with heavy border.",
      "html": "<div style=\"margin-bottom:8px;\"><label style=\"display:block; font-family:var(--font-body); font-size:14px; text-transform:uppercase; margin-bottom:4px; color:var(--on-bg);\">INN</label><input onfocus=\"this.style.border='2px solid var(--secondary-col)'\" onblur=\"this.style.border='1px solid var(--border)'\" type=\"text\" style=\"background:var(--surface); border:1px solid var(--border); border-radius:0; padding:8px; font-family:var(--font-body); color:var(--on-bg); width:100%; box-sizing:border-box;\" placeholder=\"Enter value\" /></div>",
      "label": "Text Input",
      "stateLabel": "Single-line text input with heavy border."
    },
    {
      "name": "Select Input",
      "desc": "Dropdown select mimicking a fill-in field.",
      "html": "<div style=\"margin-bottom:8px;\"><label style=\"display:block; font-family:var(--font-body); font-size:14px; text-transform:uppercase; margin-bottom:4px; color:var(--on-bg);\">OKRUG</label><div style=\"background:var(--surface); border:1px solid var(--border); border-radius:0; padding:8px; display:flex; justify-content:space-between; align-items:center; cursor:pointer; font-family:var(--font-body); color:var(--on-bg);\"><span>Moscow</span><span style=\"color:var(--primary);\">▼</span></div></div>",
      "label": "Select Input",
      "stateLabel": "Dropdown select mimicking a fill-in field."
    },
    {
      "name": "Checkbox",
      "desc": "Monospaced checkbox using square brackets.",
      "html": "<div style=\"margin-bottom:8px; font-family:var(--font-body); font-size:16px; color:var(--on-bg);\"><label style=\"cursor:pointer; display:flex; align-items:center;\"><input onfocus=\"this.style.border='2px solid var(--secondary-col)'\" onblur=\"this.style.border='1px solid var(--border)'\" type=\"checkbox\" style=\"margin-right:8px; background:var(--surface); border:1px solid var(--border); width:16px; height:16px; -webkit-appearance:none; appearance:none; position:relative;\" /><span>[ ] Approved</span></label></div>",
      "label": "Checkbox",
      "stateLabel": "Monospaced checkbox using square brackets."
    }
  ],
  "extraComponents": [
    {
      "name": "Rubber Stamp",
      "desc": "A circular red stamp overlay with misregistration.",
      "html": "<div style=\"display:inline-block; width:80px; height:80px; border:2px solid var(--secondary-col); background:var(--surface); color:var(--secondary-col); font-family:var(--font-display); font-size:12px; font-weight:700; text-transform:uppercase; text-align:center; line-height:80px; border-radius:0; transform:rotate(-2deg) translate(2px,1px);\">APPROVED</div>"
    },
    {
      "name": "Data Table Row",
      "desc": "A single data table row with double underline.",
      "html": "<div style=\"display:grid; grid-template-columns:1fr 1fr 1fr; border-bottom:2px solid var(--primary); padding:8px; font-family:var(--font-body); color:var(--on-bg);\"><span style=\"font-family:var(--font-display); font-size:14px; text-transform:uppercase;\">Steel</span><span>1200t</span><span style=\"text-align:right;\">112%</span></div>"
    },
    {
      "name": "Metric Cell",
      "desc": "A numeric metric with a double underline, used in tables.",
      "html": "<div style=\"display:inline-block; border-bottom:2px solid var(--primary); padding:4px 8px; font-family:var(--font-body); font-size:24px; font-weight:700; color:var(--on-bg); line-height:1;\">112%</div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — STATE PLANNING</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — FIVE YEAR PLAN REPORT</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — ANNUAL OUTPUT SUMMARY</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — Steel production exceeded plan by 12% in Q3.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — FILE NUMBER: 78-456-32</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Rounded corners erode the sharp, bureaucratic feel.",
      "avoid": {
        "html": "<div style=\"border-radius:8px; background:var(--surface); border:1px solid var(--border); padding:16px; font-family:var(--font-body); color:var(--on-bg);\">Rounded card</div>",
        "label": "Avoid"
      },
      "rule": "Rounded corners erode the sharp, bureaucratic feel.",
      "do": {
        "label": "Do",
        "html": "<div style=\"background:var(--surface); border:1px solid var(--border); padding:16px; font-family:var(--font-body); color:var(--on-bg);\">Sharp card</div>"
      }
    },
    {
      "desc": "Gradients and transparency destroy the flat, printed look.",
      "avoid": {
        "html": "<div style=\"background:linear-gradient(to right, var(--surface), var(--secondary-col)); border-radius:0; padding:16px; font-family:var(--font-display); color:var(--on-bg);\">Gradient banner</div>",
        "label": "Avoid"
      },
      "rule": "Gradients and transparency destroy the flat, printed look.",
      "do": {
        "label": "Do",
        "html": "<div style=\"background:var(--surface); border:2px solid var(--border); padding:16px; font-family:var(--font-display); text-transform:uppercase; color:var(--on-bg);\">Solid block</div>"
      }
    },
    {
      "desc": "Drop shadows suggest digital screens, not paper.",
      "avoid": {
        "html": "<div style=\"box-shadow:0 4px 6px rgba(0,0,0,0.1); border-radius:0; background:var(--surface); padding:16px;\">Shadow element</div>",
        "label": "Avoid"
      },
      "rule": "Drop shadows suggest digital screens, not paper.",
      "do": {
        "label": "Do",
        "html": "<div style=\"border:1px solid var(--border); background:var(--surface); padding:16px; border-top:4px solid var(--primary);\">Flat heavy rule</div>"
      }
    },
    {
      "rule": "Maintain the system binary: accent-structured specificity, never generic neutral UI.",
      "do": {
        "label": "System-specific cue",
        "html": "<div style=\"background:var(--surface); border:1px solid var(--border); padding:8px; font-family:var(--font-body); text-transform:uppercase; color:var(--on-bg); border-bottom:2px double var(--border);\">METRIC: 112%</div>"
      },
      "avoid": {
        "label": "Generic soft card",
        "html": "<div style=\"background:#f4f4f4; border-radius:14px; box-shadow:0 8px 24px rgba(0,0,0,.12); padding:16px;\">Generic</div>"
      }
    }
  ],
  "doAvoidStyle": {
    "description": "Intentionally violates core directives: no rounded corners, no gradients, no shadows, no transparency except texture overlays."
  },
  "effects": [],
  "motion": [],
  "colors": {
    "primary": "#3A3A3A",
    "on-primary": "#F5F2EB",
    "secondary": "#8B1E1E",
    "on-secondary": "#F5F2EB",
    "tertiary": "#6A7A8C",
    "on-tertiary": "#F5F2EB",
    "surface": "#F5F2EB",
    "on-surface": "#3A3A3A",
    "outline": "#3A3A3A",
    "outline-variant": "#6A7A8C"
  },
  "typography": {
    "display": {
      "fontFamily": "Saira Condensed",
      "fontSize": "48px",
      "fontWeight": 800,
      "lineHeight": 1.25,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "Saira Condensed",
      "fontSize": "30px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "-0.05em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "Courier Prime",
      "fontSize": "20px",
      "fontWeight": 600,
      "lineHeight": 1.25,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "Courier Prime, monospace",
      "fontSize": "16px",
      "fontWeight": 400,
      "lineHeight": 1.2,
      "letterSpacing": "0em",
      "textTransform": "none"
    },
    "label": {
      "fontFamily": "Courier Prime, monospace",
      "fontSize": "14px",
      "fontWeight": 400,
      "lineHeight": 1.25,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    }
  },
  "layouts": {
    "copy": {
      "heroKicker": "ГОСПЛАН СССР | STATE PLANNING COMMITTEE",
      "heroHeadline": "OPERATIVE PRODUCTION SUMMARY",
      "heroSub": "PERIOD: 4TH QUARTER 1976 | PLAN FULFILLMENT: 98.2%",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"button\">STAMP REPORT</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"button\">VIEW ARCHIVE</button>",
      "navLinks": [
        "PLAN",
        "OUTPUT",
        "FUNDS",
        "PERSONNEL",
        "AUDIT"
      ],
      "features": [
        {
          "title": "PRODUCTION LEDGER",
          "desc": "DIGITAL RECORD OF ALL OUTPUT, STAMPED AND SEALED BY SECTION CHIEF.",
          "icon": "📋",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📋 PRODUCTION LEDGER</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">DIGITAL RECORD OF ALL OUTPUT, STAMPED AND SEALED BY SECTION CHIEF.</div></div>"
        },
        {
          "title": "DIGITAL STAMP",
          "desc": "APPLY OFFICIAL RUBBER STAMP WITH MISREGISTRATION AND PAPER GRAIN.",
          "icon": "🖨️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🖨️ DIGITAL STAMP</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">APPLY OFFICIAL RUBBER STAMP WITH MISREGISTRATION AND PAPER GRAIN.</div></div>"
        },
        {
          "title": "CARBON COPY",
          "desc": "AUTOMATIC GHOST DUPLICATE FOR EVERY REPORT — NO TRANSPARENCY.",
          "icon": "📝",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📝 CARBON COPY</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">AUTOMATIC GHOST DUPLICATE FOR EVERY REPORT — NO TRANSPARENCY.</div></div>"
        },
        {
          "title": "NORMATIVES TABLE",
          "desc": "DENSE MATRIX OF PLAN TARGETS, ACTUALS, AND DEVIATIONS.",
          "icon": "📊",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📊 NORMATIVES TABLE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">DENSE MATRIX OF PLAN TARGETS, ACTUALS, AND DEVIATIONS.</div></div>"
        },
        {
          "title": "RUBBER STAMP OVERLAY",
          "desc": "RED STAMP ON ACTIVE STATE WITH INSTANTANEOUS STEPS(1) ANIMATION.",
          "icon": "🔴",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔴 RUBBER STAMP OVERLAY</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">RED STAMP ON ACTIVE STATE WITH INSTANTANEOUS STEPS(1) ANIMATION.</div></div>"
        }
      ],
      "ctaStripHeadline": "SUBMIT QUARTERLY RETURN FOR STAMPING",
      "ctaStripHtml": "<a href=\"#\" class=\"btn-secondary\">ADD RUBBER STAMP</a>",
      "sidebarBrand": "ГП / USSR",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "MAIN BOARD",
          "active": true
        },
        {
          "icon": "◉",
          "label": "OUTPUT TABLES",
          "active": false
        },
        {
          "icon": "◉",
          "label": "FUND ALLOCATIONS",
          "active": false
        },
        {
          "icon": "◉",
          "label": "ARCHIVE",
          "active": false
        }
      ],
      "dashboardTitle": "OPERATIVE DASHBOARD — 4TH QUARTER 1976",
      "metrics": [
        {
          "label": "PLAN (РУБ)",
          "value": "12 450 000",
          "delta": "+2.3%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "ACTUAL (РУБ)",
          "value": "12 225 000",
          "delta": "-0.8%",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "OUTPUT (Т)",
          "value": "84 300",
          "delta": "+4.1%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "MAN‑HOURS",
          "value": "1 240 000",
          "delta": "+0.5%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "FULFILLMENT (%)",
          "value": "98.2",
          "delta": "+0.3%",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "MONTHLY OUTPUT (TONNES)",
      "panelATitle": "PLAN FULFILLMENT BY SHOP",
      "panelARows": [
        {
          "label": "MACHINE TOOLS",
          "value": "104.2%",
          "pct": 100
        },
        {
          "label": "TRACTOR ASSEMBLY",
          "value": "97.8%",
          "pct": 97.8
        },
        {
          "label": "METALLURGY",
          "value": "101.5%",
          "pct": 100
        },
        {
          "label": "CHEMICALS",
          "value": "95.3%",
          "pct": 95.3
        },
        {
          "label": "TEXTILES",
          "value": "99.0%",
          "pct": 99
        }
      ],
      "panelBTitle": "FUND ALLOCATIONS (THOUSAND RUBLES)",
      "panelBCells": [
        {
          "label": "RAW MATERIALS",
          "value": "3 200",
          "state": "ok"
        },
        {
          "label": "WAGES",
          "value": "4 100",
          "state": "warn"
        },
        {
          "label": "EQUIPMENT",
          "value": "2 450",
          "state": "err"
        },
        {
          "label": "TRANSPORT",
          "value": "1 800",
          "state": "ok"
        },
        {
          "label": "ENERGY",
          "value": "950",
          "state": "warn"
        },
        {
          "label": "RESERVE",
          "value": "500",
          "state": "err"
        },
        {
          "label": "MAINTENANCE",
          "value": "1 300",
          "state": "ok"
        },
        {
          "label": "SOCIAL FUND",
          "value": "600",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN"
      ],
      "series": [
        {
          "data": [
            12000,
            12500,
            13000,
            12800,
            13200,
            13500,
            13500,
            13500,
            13500,
            13500,
            13500,
            13500
          ],
          "label": "PLAN (Т)",
          "axis": "left",
          "color": "#3A3A3A"
        },
        {
          "data": [
            11800,
            12300,
            13100,
            12600,
            13400,
            13200,
            13200,
            13200,
            13200,
            13200,
            13200,
            13200
          ],
          "label": "ACTUAL (Т)",
          "axis": "right-1",
          "color": "#8B1E1E"
        }
      ]
    },
    "splashRender": "function(el) { el.innerHTML = '<div style=\"padding:32px 16px;border-bottom:4px solid var(--border);background:var(--bg);\"><div style=\"font-family:var(--font-display);font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--secondary-col);margin-bottom:8px;\">ГП / USSR — STATE PLANNING COMMITTEE</div><div style=\"font-family:var(--font-display);font-size:42px;font-weight:800;line-height:1.15;letter-spacing:-0.03em;text-transform:uppercase;color:var(--on-bg);margin-bottom:8px;\">OPERATIVE PRODUCTION SUMMARY</div><div style=\"font-family:var(--font-body);font-size:14px;text-transform:uppercase;color:var(--on-bg-muted);border-top:2px solid var(--border);padding-top:8px;\">PERIOD: 4TH QUARTER 1976 · PLAN FULFILLMENT: 98.2%</div><div style=\"margin-top:16px;display:flex;gap:12px;\"><div style=\"border:2px solid var(--secondary-col);padding:8px 16px;font-family:var(--font-display);font-size:14px;font-weight:700;text-transform:uppercase;color:var(--secondary-col);letter-spacing:-0.02em;display:inline-block;\">STAMP REPORT</div><div style=\"border:1px dashed var(--border);padding:8px 16px;font-family:var(--font-body);font-size:14px;text-transform:uppercase;color:var(--on-bg);display:inline-block;\">VIEW ARCHIVE</div></div></div>'; }",
    "showcaseRender": "function(el) { el.innerHTML = '<div style=\"display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:16px;\"><div style=\"background:var(--surface);border:1px solid var(--border);border-top:4px solid var(--primary);padding:12px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px;color:var(--primary);\">📋 PRODUCTION LEDGER</div><div style=\"font-family:var(--font-body);font-size:12px;color:var(--on-bg-muted);\">DIGITAL RECORD OF ALL OUTPUT, STAMPED AND SEALED.</div><div style=\"margin-top:8px;border-top:1px solid var(--border);padding-top:8px;display:flex;justify-content:space-between;font-family:var(--font-body);font-size:12px;text-transform:uppercase;\"><span>STEEL</span><span>112%</span></div><div style=\"display:flex;justify-content:space-between;font-family:var(--font-body);font-size:12px;text-transform:uppercase;\"><span>COAL</span><span>98%</span></div></div><div style=\"background:var(--surface);border:1px solid var(--border);padding:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;\"><div style=\"width:80px;height:80px;border:2px solid var(--secondary-col);color:var(--secondary-col);font-family:var(--font-display);font-size:12px;font-weight:700;text-transform:uppercase;display:flex;align-items:center;justify-content:center;transform:rotate(-2deg) translate(2px,1px);\">APPROVED</div><div style=\"margin-top:8px;font-family:var(--font-body);font-size:10px;text-transform:uppercase;color:var(--on-bg-muted);\">RUBBER STAMP</div></div></div>'; }",
    "panelCRender": "function(el) { el.innerHTML = '<div style=\"padding:16px;background:var(--surface);border:1px solid var(--border);\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--primary);margin-bottom:8px;border-bottom:2px solid var(--border);padding-bottom:8px;\">FUND ALLOCATIONS (THOUSAND RUBLES)</div><div style=\"display:grid;grid-template-columns:1fr 1fr;gap:4px;\"><div style=\"font-family:var(--font-body);font-size:12px;text-transform:uppercase;color:var(--on-bg);\">RAW MATERIALS</div><div style=\"font-family:var(--font-body);font-size:12px;text-align:right;color:var(--on-bg);\">3 200</div><div style=\"font-family:var(--font-body);font-size:12px;text-transform:uppercase;color:var(--on-bg);\">WAGES</div><div style=\"font-family:var(--font-body);font-size:12px;text-align:right;color:var(--on-bg);\">4 100</div><div style=\"font-family:var(--font-body);font-size:12px;text-transform:uppercase;color:var(--on-bg);\">EQUIPMENT</div><div style=\"font-family:var(--font-body);font-size:12px;text-align:right;color:var(--error);\">2 450</div><div style=\"font-family:var(--font-body);font-size:12px;text-transform:uppercase;color:var(--on-bg);\">TRANSPORT</div><div style=\"font-family:var(--font-body);font-size:12px;text-align:right;color:var(--on-bg);\">1 800</div><div style=\"font-family:var(--font-body);font-size:12px;text-transform:uppercase;color:var(--on-bg);\">ENERGY</div><div style=\"font-family:var(--font-body);font-size:12px;text-align:right;color:var(--on-bg);\">950</div><div style=\"font-family:var(--font-body);font-size:12px;text-transform:uppercase;color:var(--on-bg);\">RESERVE</div><div style=\"font-family:var(--font-body);font-size:12px;text-align:right;color:var(--error);\">500</div><div style=\"font-family:var(--font-body);font-size:12px;text-transform:uppercase;color:var(--on-bg);\">MAINTENANCE</div><div style=\"font-family:var(--font-body);font-size:12px;text-align:right;color:var(--on-bg);\">1 300</div><div style=\"font-family:var(--font-body);font-size:12px;text-transform:uppercase;color:var(--on-bg);\">SOCIAL FUND</div><div style=\"font-family:var(--font-body);font-size:12px;text-align:right;border-top:2px double var(--border);padding-top:4px;color:var(--on-bg);\">600</div></div></div>'; }",
    "heroBackground": "function(el) { el.style.background = 'var(--bg)'; }",
    "ctaBackground": "function(el) { el.style.background = 'var(--surface)'; }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText='height:4px;background:var(--border);margin:8px 0;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = 'var(--bg)'; }",
    "surfaceOverlay": "function(el) { var ov=document.createElement('div'); ov.style.cssText='position:absolute;inset:0;z-index:2;pointer-events:none;background:repeating-linear-gradient(0deg,transparent,transparent 1px,rgba(58,58,58,0.04) 1px,rgba(58,58,58,0.04) 2px);'; el.appendChild(ov); }"
  },
  "shadcnTokens": {
    "--color-background": "#F5F2EB",
    "--color-popover": "#F5F2EB",
    "--color-foreground": "#3A3A3A",
    "--color-card-foreground": "#3A3A3A",
    "--color-popover-foreground": "#3A3A3A",
    "--color-card": "#F5F2EB",
    "--color-muted": "#F5F2EB",
    "--color-muted-foreground": "#4A4A4A",
    "--color-primary": "#3A3A3A",
    "--color-ring": "#3A3A3A",
    "--color-primary-foreground": "#F5F2EB",
    "--color-secondary": "#8B1E1E",
    "--color-accent": "#8B1E1E",
    "--color-secondary-foreground": "#F5F2EB",
    "--color-accent-foreground": "#F5F2EB",
    "--color-border": "#3A3A3A",
    "--color-input": "#3A3A3A",
    "--color-destructive": "#8B1E1E"
  },
  "shadcnTokensClassic": {
    "--background": "#F5F2EB",
    "--popover": "#F5F2EB",
    "--foreground": "#3A3A3A",
    "--card-foreground": "#3A3A3A",
    "--popover-foreground": "#3A3A3A",
    "--card": "#F5F2EB",
    "--muted": "#F5F2EB",
    "--muted-foreground": "#4A4A4A",
    "--primary": "#3A3A3A",
    "--ring": "#3A3A3A",
    "--primary-foreground": "#F5F2EB",
    "--secondary": "#8B1E1E",
    "--accent": "#8B1E1E",
    "--secondary-foreground": "#F5F2EB",
    "--accent-foreground": "#F5F2EB",
    "--border": "#3A3A3A",
    "--input": "#3A3A3A",
    "--destructive": "#8B1E1E"
  }
});
