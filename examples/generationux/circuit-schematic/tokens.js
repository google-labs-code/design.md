registerSystem({
  "meta": {
    "name": "Circuit Schematic",
    "tagline": "Precise, utilitarian design system inspired by electrical engineering diagrams.",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&display=swap"
  },
  "yamlTokens": {
    "name": "Circuit Schematic",
    "colors": {
      "neutral-surface": "#F5F2EB",
      "on-surface": "#000000"
    },
    "typography": {
      "display": {
        "fontFamily": "IBM Plex Mono",
        "fontSize": "36px",
        "fontWeight": 600,
        "lineHeight": 1.25,
        "letterSpacing": "0.05em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "IBM Plex Mono",
        "fontSize": "24px",
        "fontWeight": 400,
        "lineHeight": 1.25,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "IBM Plex Mono",
        "fontSize": "20px",
        "fontWeight": 400,
        "lineHeight": 1.375,
        "letterSpacing": "0em"
      },
      "body": {
        "fontFamily": "IBM Plex Mono",
        "fontSize": "14px",
        "fontWeight": 400,
        "lineHeight": 1.625,
        "letterSpacing": "0em"
      },
      "label": {
        "fontFamily": "IBM Plex Mono",
        "fontSize": "12px",
        "fontWeight": 400,
        "lineHeight": 1.5,
        "letterSpacing": "-0.025em",
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
      "page-edge": "24px",
      "gap-component": "16px",
      "gap-section": "32px",
      "height-sm": "32px",
      "height-md": "40px",
      "height-lg": "48px",
      "icon": "24px"
    },
    "components": {
      "button-primary": {
        "textColor": "{colors.on-surface}",
        "rounded": "{rounded.button}",
        "padding": "8px"
      },
      "button-secondary": {
        "textColor": "{colors.on-surface}",
        "rounded": "{rounded.button}",
        "padding": "8px"
      },
      "card": {
        "backgroundColor": "{colors.neutral-surface}",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "input": {
        "textColor": "{colors.on-surface}",
        "rounded": "{rounded.input}",
        "padding": "8px"
      },
      "junction-dot": {
        "size": "12px",
        "backgroundColor": "{colors.on-surface}"
      },
      "t-bar-ground": {
        "size": "32px"
      },
      "dashed-bounding-box": {
        "padding": "16px"
      },
      "metric-cell": {
        "textColor": "{colors.on-surface}"
      },
      "signal-bar": {
        "backgroundColor": "{colors.on-surface}"
      },
      "status-cell": {
        "textColor": "{colors.on-surface}"
      },
      "data-table-row": {
        "textColor": "{colors.on-surface}"
      }
    },
    "version": "alpha",
    "description": "Circuit Schematic translates the visual grammar of electrical engineering diagrams into a precise, utilitarian design system. It prizes orthogonal geometry, diagrammatic clarity, and the raw beauty of technical drawings, with an analytical, retro-tech tone like a blueprint or PCB layout.",
    "provenance": {
      "coverage_status": "complete",
      "identity_description": "The slug `circuit-schematic` refers to the visual identity system of electronic circuit schematic diagrams as standardised by ANSI/IEEE Std 315‑1975 and IEC 60617. This is not a single brand or logo system but a functional visual language composed of standardised component symbols, line conventions, layout rules, and typographic practices used in electrical engineering from the mid‑20th century to",
      "manual_enrichment_required": false,
      "imagery_count": 9,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "en.wikipedia.org",
          "count": 2
        },
        {
          "host": "ethw.org",
          "count": 1
        },
        {
          "host": "patents.google.com",
          "count": 1
        },
        {
          "host": "commons.wikimedia.org",
          "count": 1
        },
        {
          "host": "www.loc.gov",
          "count": 1
        },
        {
          "host": "ieeexplore.ieee.org",
          "count": 1
        },
        {
          "host": "www.kicad.org",
          "count": 1
        },
        {
          "host": "www.ti.com",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://ethw.org/Bell_Labs",
          "host": "ethw.org",
          "institution": "Engineering and Technology History Wiki (ETHW)",
          "confidence_original": "low"
        },
        {
          "url": "https://patents.google.com/patent/US2500000A/en",
          "host": "patents.google.com",
          "institution": "Google Patents (USPTO source)",
          "confidence_original": "high"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Circuit_diagram",
          "host": "en.wikipedia.org",
          "institution": null,
          "confidence_original": "high"
        },
        {
          "url": "https://commons.wikimedia.org/wiki/Category:Circuit_diagrams",
          "host": "commons.wikimedia.org",
          "institution": "Wikimedia Commons",
          "confidence_original": "high"
        },
        {
          "url": "https://www.loc.gov/pictures/collection/agc/",
          "host": "www.loc.gov",
          "institution": "Library of Congress – Architecture, Design, and Engineering Collection",
          "confidence_original": "low"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Resistor",
          "host": "en.wikipedia.org",
          "institution": null,
          "confidence_original": "high"
        },
        {
          "url": "https://ieeexplore.ieee.org/Xplore/home.jsp",
          "host": "ieeexplore.ieee.org",
          "institution": "IEEE History Center",
          "confidence_original": "low"
        },
        {
          "url": "https://www.kicad.org/download/",
          "host": "www.kicad.org",
          "institution": "KiCad Project",
          "confidence_original": "low"
        },
        {
          "url": "https://www.ti.com/",
          "host": "www.ti.com",
          "institution": "Texas Instruments",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Helvetica",
          "foundry": "Linotype",
          "year": 1957,
          "google_fonts": "Inter",
          "attestation": "conventional"
        },
        {
          "name": "Courier New",
          "foundry": null,
          "year": null,
          "google_fonts": "Courier Prime",
          "attestation": "unknown"
        },
        {
          "name": "Letter Gothic",
          "foundry": null,
          "year": null,
          "google_fonts": "Roboto Mono",
          "attestation": "unknown"
        }
      ],
      "flags": {},
      "honest_gaps": [
        {
          "\"1. **Colour palette": "** No official colour specification exists. All hex values are [unverified] and conventional/inferred. Accent colour usage is not standardised.\""
        }
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#F5F2EB",
    "--on-bg": "#000000",
    "--primary": "#0066CC",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#D2691E",
    "--on-secondary": "#FFFFFF",
    "--surface": "#F5F2EB",
    "--on-bg-muted": "#1A1A1A",
    "--border": "#000000",
    "--error": "#E53935",
    "--font-display": "IBM Plex Mono",
    "--font-body": "IBM Plex Mono",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "accent": "#0066CC",
    "secondary-accent": "#D2691E",
    "error": "#E53935",
    "err": "#E53935",
    "warn": "#FF8C42",
    "ok": "#22C55E",
    "deltaUp": "#22C55E",
    "deltaDown": "#E53935",
    "deltaFlat": "#1A1A1A",
    "live": "#0066CC",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#1A1A1A",
    "chartFont": "IBM Plex Mono"
  },
  "chartStyle": {
    "background": "transparent",
    "grid": "1px dashed on-surface",
    "line": {
      "strokeWidth": "1.5px",
      "strokeColor": "on-surface"
    },
    "dataPoint": {
      "shape": "circle",
      "size": "12px",
      "fill": "on-surface"
    },
    "axisLabel": {
      "fontFamily": "var(--font-body)",
      "textTransform": "uppercase",
      "fontSize": "12px"
    },
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#1A1A1A",
    "fontFamily": "IBM Plex Mono"
  },
  "surfaceModel": "flat",
  "materialSimulation": {
    "model": "paper",
    "params": {
      "grainIntensity": 0.02,
      "inkBleed": false,
      "textureFilterId": "paper-grain"
    }
  },
  "interactionModel": {
    "hover": {
      "color": "var(--primary)",
      "fill": "var(--primary)",
      "transitionDuration": "100ms"
    },
    "focus": {
      "outline": "2px solid var(--primary)",
      "outlineOffset": "4px"
    },
    "active": {
      "transform": "translate(1px, 1px)",
      "transitionDuration": "50ms"
    }
  },
  "spacing": {
    "component-internal": "8px",
    "section-internal": "16px",
    "page-edge": "24px",
    "gap-component": "16px",
    "gap-section": "32px",
    "height-sm": "32px",
    "height-md": "40px",
    "height-lg": "48px",
    "icon": "24px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "0px"
  },
  "elevation": {
    "flat": true,
    "levels": {
      "0": {
        "boxShadow": "none"
      }
    }
  },
  "dashboardStyle": {
    "layout": "three-column",
    "leftColumn": "metric cells (voltage, current, resistance)",
    "centerColumn": "signal bars for multiple channels",
    "rightColumn": "status grid with open circles for test points",
    "density": "moderate",
    "panelTreatment": "dashed bounding box panels, no fill",
    "dataVizStyle": "line chart with 1.5px stroke, circular data points, dashed grid",
    "signatureElement": "junction dots at all data point intersections"
  },
  "landingStyle": {
    "heroApproach": "single functional block with dashed bounding box containing schematic symbols (resistor, capacitor, transistor) connected by orthogonal traces",
    "scrollBehavior": "static, no parallax",
    "ctaStyle": "button with solid border, uppercase label, no fill",
    "signatureMoment": "animated junction dot pulse (100ms blink at 8fps)"
  },
  "globalFilter": "<svg aria-hidden=\"true\" style=\"position: absolute; width: 0; height: 0;\"><defs><filter id=\"paper-grain\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"4\" result=\"noise\"/><feColorMatrix type=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.03 0\" result=\"opacityNoise\"/><feBlend in=\"SourceGraphic\" in2=\"opacityNoise\" mode=\"multiply\"/></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-body); background-color: var(--bg); color: var(--on-bg); margin: 0; padding: 0; -webkit-font-smoothing: antialiased;",
  "globalCss": ".ds-layout-frame { background-image: repeating-linear-gradient(0deg, transparent, transparent 7px, rgba(0,0,0,0.03) 7px, rgba(0,0,0,0.03) 8px), repeating-linear-gradient(90deg, transparent, transparent 7px, rgba(0,0,0,0.03) 7px, rgba(0,0,0,0.03) 8px); background-size: 8px 8px; } .ds-layout-frame *, .ds-layout-frame *::before, .ds-layout-frame *::after { box-sizing: border-box; } .ds-layout-frame .dashed-group { border: 2px dashed var(--border); padding: 16px; position: relative; } .ds-layout-frame .dashed-group::before { content: attr(data-label); position: absolute; top: -0.75em; left: 8px; background: var(--bg); padding: 0 4px; font-family: var(--font-label); font-size: 12px; text-transform: uppercase; color: var(--on-bg); } .ds-layout-frame .junction-dot { width: 12px; height: 12px; border-radius: 50%; background: var(--on-bg); } .ds-layout-frame .test-point { width: 12px; height: 12px; border-radius: 50%; border: 2px solid var(--on-bg); background: transparent; }",
  "interactionStyles": ".ds-layout-frame a, .ds-layout-frame button, .ds-layout-frame .interactive { transition: color 100ms ease-out, fill 100ms ease-out, border-color 100ms ease-out, opacity 100ms ease-out; } .ds-layout-frame a:hover, .ds-layout-frame button:hover, .ds-layout-frame .interactive:hover { color: var(--primary); fill: var(--primary); border-color: var(--primary); } .ds-layout-frame a:focus, .ds-layout-frame button:focus, .ds-layout-frame .interactive:focus { outline: 2px solid var(--primary); outline-offset: 4px; } .ds-layout-frame a:active, .ds-layout-frame button:active, .ds-layout-frame .interactive:active { transform: translate(1px, 1px); } .ds-layout-frame a:disabled, .ds-layout-frame button:disabled, .ds-layout-frame .interactive:disabled { opacity: 0.4; pointer-events: none; }",
  "buttons": [
    {
      "name": "Button Primary",
      "desc": "Primary action button with solid fill and uppercase label. Flat, no shadow, border-radius zero.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||'';this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+' ':'')+'brightness(1.12)';\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||'';\" style=\"background:var(--on-bg); color:var(--bg); border:2px solid var(--on-bg); border-radius:var(--radius-btn); padding:8px 16px; font-family:var(--font-body); font-size:12px; text-transform:uppercase; letter-spacing:-0.025em; cursor:pointer; transition:background 100ms ease-out, color 100ms ease-out;\">ACTIVATE</button>",
      "label": "Button Primary",
      "note": "Primary action button with solid fill and uppercase label. Flat, no shadow, border-radius zero."
    },
    {
      "name": "Button Secondary",
      "desc": "Secondary button with no fill, only border. Uppercase label, orthogonal corners.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||'';this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+' ':'')+'brightness(1.12)';\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||'';\" style=\"background:transparent; color:var(--on-bg); border:2px solid var(--on-bg); border-radius:var(--radius-btn); padding:8px 16px; font-family:var(--font-body); font-size:12px; text-transform:uppercase; letter-spacing:-0.025em; cursor:pointer; transition:background 100ms ease-out, color 100ms ease-out;\">CANCEL</button>",
      "label": "Button Secondary",
      "note": "Secondary button with no fill, only border. Uppercase label, orthogonal corners."
    },
    {
      "name": "Button Ghost / Outline",
      "desc": "Ghost button with dashed border for secondary grouping actions. No fill, monochrome.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||'';this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+' ':'')+'brightness(1.12)';\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||'';\" style=\"background:transparent; color:var(--on-bg); border:2px dashed var(--on-bg); border-radius:var(--radius-btn); padding:8px 16px; font-family:var(--font-body); font-size:12px; text-transform:uppercase; letter-spacing:-0.025em; cursor:pointer; transition:background 100ms ease-out, color 100ms ease-out;\">RESET</button>",
      "label": "Button Ghost / Outline",
      "note": "Ghost button with dashed border for secondary grouping actions. No fill, monochrome."
    }
  ],
  "cards": [
    {
      "name": "Card Panel",
      "desc": "Standard equipment panel card. No fill, solid border, no elevation. Used for grouping controls or metrics.",
      "html": "<div style=\"border:2px solid var(--on-bg); border-radius:var(--radius-card); padding:16px; background:transparent; font-family:var(--font-body);\"><div style=\"font-size:14px; text-transform:uppercase; letter-spacing:-0.025em; margin-bottom:8px; color:var(--on-bg);\">CONTROL PANEL</div><div style=\"font-size:12px; color:var(--on-bg);\">SIGNAL: 4.2V</div></div>",
      "label": "Card Panel",
      "note": "Standard equipment panel card. No fill, solid border, no elevation. Used for grouping controls or metrics."
    },
    {
      "name": "Card Dashed Bounding Box",
      "desc": "Functional block grouping using dashed border. Label in top-left corner. Aligns to 8px grid.",
      "html": "<div style=\"border:2px dashed var(--on-bg); border-radius:0; padding:16px; background:transparent; position:relative; font-family:var(--font-body);\"><span style=\"position:absolute; top:-12px; left:8px; background:var(--bg); padding:0 4px; font-size:12px; text-transform:uppercase; letter-spacing:-0.025em; color:var(--on-bg);\">BLOCK A</span><div style=\"margin-top:8px; font-size:12px; color:var(--on-bg);\">TRACE ROUTING</div></div>",
      "label": "Card Dashed Bounding Box",
      "note": "Functional block grouping using dashed border. Label in top-left corner. Aligns to 8px grid."
    }
  ],
  "forms": [
    {
      "name": "Text Input (Value Entry)",
      "desc": "Single-line text input for component values. Solid border, zero radius, monospaced uppercase text.",
      "html": "<div style=\"display:flex; flex-direction:column; gap:4px;\"><label style=\"font-family:var(--font-body); font-size:12px; text-transform:uppercase; letter-spacing:-0.025em; color:var(--on-bg);\">RESISTANCE</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" value=\"10KΩ\" style=\"border:2px solid var(--on-bg); border-radius:var(--radius-input); padding:8px; background:transparent; color:var(--on-bg); font-family:var(--font-body); font-size:14px; text-transform:uppercase; letter-spacing:0; outline:none;\"></div>",
      "label": "Text Input (Value Entry)",
      "stateLabel": "Single-line text input for component values. Solid border, zero radius, monospaced uppercase text."
    },
    {
      "name": "Select / Dropdown",
      "desc": "Dropdown for selecting component type. Monospaced, uppercase, flat border.",
      "html": "<div style=\"display:flex; flex-direction:column; gap:4px;\"><label style=\"font-family:var(--font-body); font-size:12px; text-transform:uppercase; letter-spacing:-0.025em; color:var(--on-bg);\">COMPONENT</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"border:2px solid var(--on-bg); border-radius:var(--radius-input); padding:8px; background:transparent; color:var(--on-bg); font-family:var(--font-body); font-size:14px; text-transform:uppercase; letter-spacing:0; outline:none; appearance:none;\"><option>RESISTOR</option><option>CAPACITOR</option><option>INDUCTOR</option></select></div>",
      "label": "Select / Dropdown",
      "stateLabel": "Dropdown for selecting component type. Monospaced, uppercase, flat border."
    },
    {
      "name": "Checkbox / Toggle",
      "desc": "Toggle switch for enabling/disabling traces or modules. Uses crosshair mark (×) for checked state.",
      "html": "<label style=\"display:flex; align-items:center; gap:8px; font-family:var(--font-body); font-size:12px; text-transform:uppercase; letter-spacing:-0.025em; color:var(--on-bg); cursor:pointer;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"width:16px; height:16px; border:2px solid var(--on-bg); background:transparent; color:var(--on-bg); appearance:none; display:flex; align-items:center; justify-content:center; cursor:pointer;\" checked=\"checked\"><span>TRACE ENABLE</span></label>",
      "label": "Checkbox / Toggle",
      "stateLabel": "Toggle switch for enabling/disabling traces or modules. Uses crosshair mark (×) for checked state."
    }
  ],
  "extraComponents": [
    {
      "name": "Junction Dot",
      "desc": "Filled circle indicating wire junction. Placed at trace intersections. 12px diameter.",
      "html": "<div style=\"width:12px; height:12px; background:var(--on-bg); border-radius:50%; border:2px solid var(--on-bg);\"></div>"
    },
    {
      "name": "Metric Cell",
      "desc": "Single metric display with label and value. Uppercase label, monospaced value. Used in dashboards.",
      "html": "<div style=\"display:flex; flex-direction:column; gap:4px; border:2px solid var(--on-bg); padding:8px; font-family:var(--font-body); background:transparent;\"><span style=\"font-size:12px; text-transform:uppercase; letter-spacing:-0.025em; color:var(--on-bg);\">VOLTAGE</span><span style=\"font-size:20px; font-weight:400; color:var(--on-bg);\">5.0V</span></div>"
    },
    {
      "name": "Signal Bar",
      "desc": "Horizontal bar visualising signal strength. Track is 20% opacity, fill is solid on-surface. No rounding.",
      "html": "<div style=\"display:flex; align-items:center; gap:8px;\"><span style=\"font-family:var(--font-body); font-size:12px; text-transform:uppercase; letter-spacing:-0.025em; color:var(--on-bg);\">CH1</span><div style=\"flex:1; height:8px; background:var(--on-bg); opacity:0.2;\"><div style=\"height:100%; width:75%; background:var(--on-bg); opacity:1;\"></div></div></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — AMPLIFIER SCHEMATIC</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — SIGNAL FLOW DIAGRAM</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — Power Distribution Network</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — All traces must maintain 90° bends and minimum 8px clearance from adjacent routes.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — JUNCTION TEST POINT A1</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Do: Use dashed borders for functional block grouping. Avoid: Using filled rectangles or solid borders which add visual weight and hide the substrate.",
      "avoid": {
        "html": "<div style=\"border:2px solid var(--on-bg); background:var(--bg); padding:16px; border-radius:8px;\">WRONG — Filled card with rounded corners</div>",
        "label": "Avoid"
      },
      "rule": "Do: Use dashed borders for functional block grouping. Avoid: Using filled rectangles or solid borders which add visual weight and hide the substrate.",
      "do": {
        "label": "Do",
        "html": "<div style=\"border:2px dashed var(--on-bg); padding:16px; position:relative;\"><span style=\"position:absolute; top:-12px; left:8px; background:var(--bg); padding:0 4px; font-family:var(--font-body); font-size:12px; text-transform:uppercase; color:var(--on-bg);\">BLOCK A</span><div style=\"font-family:var(--font-body); font-size:12px; color:var(--on-bg);\">FUNCTIONAL GROUP</div></div>"
      }
    },
    {
      "desc": "Do: Use orthogonal traces with 90° bends. Avoid: Curved paths or arbitrary angles that break the schematic grammar.",
      "avoid": {
        "html": "<svg width=\"100\" height=\"50\"><path d=\"M10 25 C30 25 40 10 60 10\" stroke=\"var(--on-bg)\" fill=\"none\" stroke-width=\"2\"/></svg>",
        "label": "Avoid"
      },
      "rule": "Do: Use orthogonal traces with 90° bends. Avoid: Curved paths or arbitrary angles that break the schematic grammar.",
      "do": {
        "label": "Do",
        "html": "<svg width=\"100\" height=\"50\" style=\"display:block;\"><path d=\"M10 25 L10 10 L50 10 L50 40 L90 40\" stroke=\"var(--on-bg)\" stroke-width=\"2\" fill=\"none\"/><circle cx=\"10\" cy=\"25\" r=\"6\" fill=\"var(--on-bg)\"/><circle cx=\"10\" cy=\"10\" r=\"6\" fill=\"var(--on-bg)\"/><circle cx=\"50\" cy=\"10\" r=\"6\" fill=\"var(--on-bg)\"/><circle cx=\"50\" cy=\"40\" r=\"6\" fill=\"var(--on-bg)\"/><circle cx=\"90\" cy=\"40\" r=\"6\" fill=\"var(--on-bg)\"/></svg>"
      }
    },
    {
      "desc": "Do: Use only black and one accent (blue) on neutral surface. Avoid: More than two ink colors plus one accent.",
      "avoid": {
        "html": "<div style=\"color:red; background:green; border:2px solid purple; padding:8px;\">WRONG — Polychrome</div>",
        "label": "Avoid"
      },
      "rule": "Do: Use only black and one accent (blue) on neutral surface. Avoid: More than two ink colors plus one accent.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do: Use monospaced uppercase labels. Avoid: Proportional typefaces or mixed case.",
      "avoid": {
        "html": "<span style=\"font-family:Georgia; font-size:14px; text-transform:none;\">Wrong Label</span>",
        "label": "Avoid"
      },
      "rule": "Do: Use monospaced uppercase labels. Avoid: Proportional typefaces or mixed case.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "doAvoidStyle": {
    "description": "All components must avoid shadows, gradients, transparency, rounded corners, and curved lines. Use only solid or dashed 2px borders, flat fill (or no fill), and strict 0px border-radius. Typography must be monospaced and uppercase where applicable. Only two ink colors (on-surface and accent) plus substrate neutral are permitted."
  },
  "effects": [],
  "motion": [],
  "colors": {
    "bg": "#F5F2EB",
    "on-bg": "#000000",
    "primary": "#0066CC",
    "secondary": "#D2691E",
    "surface": "#F5F2EB",
    "error": "#E53935",
    "border": "#000000"
  },
  "typography": {
    "display": {
      "fontFamily": "var(--font-display)",
      "fontSize": "36px",
      "fontWeight": 600,
      "lineHeight": 1.25,
      "letterSpacing": "0.05em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "var(--font-display)",
      "fontSize": "24px",
      "fontWeight": 400,
      "lineHeight": 1.25,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "var(--font-body)",
      "fontSize": "20px",
      "fontWeight": 400,
      "lineHeight": 1.375,
      "letterSpacing": "0em"
    },
    "body": {
      "fontFamily": "var(--font-body)",
      "fontSize": "14px",
      "fontWeight": 400,
      "lineHeight": 1.625,
      "letterSpacing": "0em"
    },
    "label": {
      "fontFamily": "var(--font-body)",
      "fontSize": "12px",
      "fontWeight": 400,
      "lineHeight": 1.5,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    }
  },
  "layouts": {
    "copy": {
      "heroKicker": "SCHEMATIC VIEW v1.0",
      "heroHeadline": "ORTHOGONAL TRACE ANALYSIS",
      "heroSub": "Precise vector routing on an 8-px grid. No curves, no shadows — only junction dots and dashed bounding boxes.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">ANALYZE NETLIST</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">EXPORT LAYOUT</button>",
      "navLinks": [
        "SIGNAL FLOW",
        "NODE MAP",
        "GROUND PLANE",
        "TRACE TABLE"
      ],
      "features": [
        {
          "title": "JUNCTION DOT",
          "desc": "Filled circle at every wire intersection — 2× trace width, no fill variants.",
          "icon": "●",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">● JUNCTION DOT</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Filled circle at every wire intersection — 2× trace width, no fill variants.</div></div>"
        },
        {
          "title": "DASHED BOUNDING BOX",
          "desc": "Group functional blocks with 2-px on-off border. Label top-left in uppercase monospace.",
          "icon": "⊟",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⊟ DASHED BOUNDING BOX</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Group functional blocks with 2-px on-off border. Label top-left in uppercase monospace.</div></div>"
        },
        {
          "title": "SIGNAL BAR",
          "desc": "Horizontal amplitude indicator with exact fill ratio. Track opacity fixed at 20%.",
          "icon": "▂",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">▂ SIGNAL BAR</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Horizontal amplitude indicator with exact fill ratio. Track opacity fixed at 20%.</div></div>"
        },
        {
          "title": "T‑BAR GROUND",
          "desc": "Standardised ground symbol — 32-px horizontal line, vertical stem, no offset.",
          "icon": "⏚",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⏚ T‑BAR GROUND</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Standardised ground symbol — 32-px horizontal line, vertical stem, no offset.</div></div>"
        }
      ],
      "ctaStripHeadline": "READY TO ROUTE YOUR SCHEMATIC?",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">OPEN WORKBENCH</button>",
      "sidebarBrand": "CIRCUIT SCHEMATIC",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "TRACE ROUTER",
          "active": true
        },
        {
          "icon": "◉",
          "label": "COMPONENT LIBRARY",
          "active": false
        }
      ],
      "dashboardTitle": "SIGNAL INTEGRITY ANALYSIS",
      "metrics": [
        {
          "label": "TRACE COUNT",
          "value": "142",
          "delta": "+8",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "NODE POTENTIAL",
          "value": "3.3V",
          "delta": "−0.1V",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "RISE TIME",
          "value": "2.4ns",
          "delta": "+0.3ns",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "GROUND LOOP IMPEDANCE",
          "value": "12mΩ",
          "delta": "−2mΩ",
          "dir": "down",
          "direction": "down"
        }
      ],
      "chartTitle": "FREQUENCY RESPONSE — CHANNEL A",
      "panelATitle": "TRACE LOG",
      "panelARows": [
        {
          "label": "NET 001",
          "value": "ACTIVE",
          "pct": 0
        },
        {
          "label": "NET 002",
          "value": "FLOATING",
          "pct": 0
        },
        {
          "label": "NET 003",
          "value": "SHORT",
          "pct": 0
        },
        {
          "label": "NET 004",
          "value": "ACTIVE",
          "pct": 0
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "NODE STATUS",
      "panelBCells": [
        {
          "label": "VCC",
          "value": "OK",
          "state": "ok"
        },
        {
          "label": "GND",
          "value": "OK",
          "state": "warn"
        },
        {
          "label": "CLK",
          "value": "WARN",
          "state": "err"
        },
        {
          "label": "DATA",
          "value": "OK",
          "state": "ok"
        },
        {
          "label": "ENABLE",
          "value": "ERR",
          "state": "warn"
        },
        {
          "label": "RESET",
          "value": "OK",
          "state": "err"
        },
        {
          "label": "TEST",
          "value": "WARN",
          "state": "ok"
        },
        {
          "label": "AUX",
          "value": "OK",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "1MHz",
        "10MHz",
        "50MHz",
        "100MHz",
        "500MHz",
        "1GHz"
      ],
      "series": [
        {
          "data": [
            0.8,
            0.75,
            0.6,
            0.45,
            0.2,
            0.1,
            0.1,
            0.1,
            0.1,
            0.1,
            0.1,
            0.1
          ],
          "label": "AMPLITUDE",
          "axis": "left",
          "color": "#0066CC"
        },
        {
          "data": [
            0,
            -5,
            -12,
            -20,
            -35,
            -50,
            -50,
            -50,
            -50,
            -50,
            -50,
            -50
          ],
          "label": "PHASE SHIFT",
          "axis": "right-1",
          "color": "#D2691E"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'min-height:360px;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;overflow:hidden;'; var box = document.createElement('div'); box.style.cssText = 'border:2px dashed var(--border);padding:32px;max-width:640px;width:100%;position:relative;'; var label = document.createElement('span'); label.style.cssText = 'position:absolute;top:-12px;left:12px;background:var(--bg);padding:0 6px;font-family:var(--font-body);font-size:12px;text-transform:uppercase;letter-spacing:-0.025em;color:var(--on-bg);'; label.textContent = 'SCHEMATIC ENTRY'; box.appendChild(label); var inner = document.createElement('div'); inner.style.cssText = 'display:flex;flex-direction:column;gap:16px;padding-top:8px;'; var trace = document.createElement('div'); trace.style.cssText = 'display:flex;align-items:center;gap:4px;'; for (var i = 0; i < 5; i++) { var seg = document.createElement('div'); seg.style.cssText = 'width:32px;height:2px;background:var(--on-bg);'; trace.appendChild(seg); if (i < 4) { var dot = document.createElement('div'); dot.style.cssText = 'width:12px;height:12px;border-radius:50%;background:var(--on-bg);flex-shrink:0;'; trace.appendChild(dot); } } inner.appendChild(trace); var trace2 = document.createElement('div'); trace2.style.cssText = 'display:flex;align-items:center;gap:4px;'; for (var j = 0; j < 4; j++) { var seg2 = document.createElement('div'); seg2.style.cssText = 'width:32px;height:2px;background:var(--on-bg);'; trace2.appendChild(seg2); if (j < 3) { var dot2 = document.createElement('div'); dot2.style.cssText = 'width:12px;height:12px;border-radius:50%;background:var(--on-bg);flex-shrink:0;'; trace2.appendChild(dot2); } } inner.appendChild(trace2); box.appendChild(inner); el.appendChild(box); }",
    "showcaseRender": "function(el) { el.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px;padding:24px;'; var features = ['JUNCTION DOT','DASHED BOUNDING BOX','SIGNAL BAR','T-BAR GROUND']; var descriptions = ['Filled circle at every wire intersection — 2× trace width, no fill variants.','Group functional blocks with 2-px on-off border. Label top-left in uppercase monospace.','Horizontal amplitude indicator with exact fill ratio. Track opacity fixed at 20%.','Standardised ground symbol — 32-px horizontal line, vertical stem, no offset.']; var icons = ['●','⊟','▂','⏚']; for (var i = 0; i < 4; i++) { var card = document.createElement('div'); card.style.cssText = 'min-height:160px;padding:24px;border:2px solid var(--border);background:transparent;color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;'; var title = document.createElement('div'); title.style.cssText = 'font-family:var(--font-body);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:var(--primary);'; title.textContent = icons[i] + ' ' + features[i]; var desc = document.createElement('div'); desc.style.cssText = 'font-size:12px;line-height:1.55;color:var(--on-bg);'; desc.textContent = descriptions[i]; card.appendChild(title); card.appendChild(desc); el.appendChild(card); } }",
    "panelCRender": "function(el) { el.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:16px;padding:16px;'; var traceLog = document.createElement('div'); traceLog.style.cssText = 'border:2px dashed var(--border);padding:16px;position:relative;'; var label1 = document.createElement('span'); label1.style.cssText = 'position:absolute;top:-12px;left:8px;background:var(--bg);padding:0 4px;font-family:var(--font-body);font-size:12px;text-transform:uppercase;letter-spacing:-0.025em;color:var(--on-bg);'; label1.textContent = 'TRACE LOG'; traceLog.appendChild(label1); var rows = ['NET 001 — ACTIVE','NET 002 — FLOATING','NET 003 — SHORT','NET 004 — ACTIVE']; for (var i = 0; i < rows.length; i++) { var row = document.createElement('div'); row.style.cssText = 'font-family:var(--font-body);font-size:12px;color:var(--on-bg);padding:4px 0;border-bottom:1px solid var(--border);'; row.textContent = rows[i]; traceLog.appendChild(row); } el.appendChild(traceLog); var nodeStatus = document.createElement('div'); nodeStatus.style.cssText = 'border:2px dashed var(--border);padding:16px;position:relative;'; var label2 = document.createElement('span'); label2.style.cssText = 'position:absolute;top:-12px;left:8px;background:var(--bg);padding:0 4px;font-family:var(--font-body);font-size:12px;text-transform:uppercase;letter-spacing:-0.025em;color:var(--on-bg);'; label2.textContent = 'NODE STATUS'; nodeStatus.appendChild(label2); var nodes = [['VCC','OK'],['GND','WARN'],['CLK','ERR'],['DATA','OK'],['ENABLE','WARN'],['RESET','ERR']]; for (var j = 0; j < nodes.length; j++) { var node = document.createElement('div'); node.style.cssText = 'display:flex;justify-content:space-between;font-family:var(--font-body);font-size:12px;color:var(--on-bg);padding:4px 0;border-bottom:1px solid var(--border);'; var name = document.createElement('span'); name.textContent = nodes[j][0]; var state = document.createElement('span'); state.textContent = nodes[j][1]; if (nodes[j][1] === 'ERR') { state.style.color = 'var(--error)'; } else if (nodes[j][1] === 'WARN') { state.style.color = 'var(--warn)'; } else { state.style.color = 'var(--ok)'; } node.appendChild(name); node.appendChild(state); nodeStatus.appendChild(node); } el.appendChild(nodeStatus); }",
    "heroBackground": "function(el) { el.style.background = 'repeating-linear-gradient(0deg, transparent, transparent 7px, rgba(0,0,0,0.03) 7px, rgba(0,0,0,0.03) 8px), repeating-linear-gradient(90deg, transparent, transparent 7px, rgba(0,0,0,0.03) 7px, rgba(0,0,0,0.03) 8px)'; el.style.backgroundSize = '8px 8px'; el.style.backgroundColor = 'var(--bg)'; }",
    "ctaBackground": "function(el) { el.style.background = 'repeating-linear-gradient(0deg, transparent, transparent 7px, rgba(0,0,0,0.03) 7px, rgba(0,0,0,0.03) 8px), repeating-linear-gradient(90deg, transparent, transparent 7px, rgba(0,0,0,0.03) 7px, rgba(0,0,0,0.03) 8px)'; el.style.backgroundSize = '8px 8px'; el.style.backgroundColor = 'var(--bg)'; }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'height:2px;background:var(--border);margin:0;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = 'repeating-linear-gradient(0deg, transparent, transparent 7px, rgba(0,0,0,0.03) 7px, rgba(0,0,0,0.03) 8px), repeating-linear-gradient(90deg, transparent, transparent 7px, rgba(0,0,0,0.03) 7px, rgba(0,0,0,0.03) 8px)'; el.style.backgroundSize = '8px 8px'; el.style.backgroundColor = 'var(--bg)'; }",
    "surfaceOverlay": "function(el) { var ov = document.createElement('div'); ov.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;'; el.appendChild(ov); }"
  },
  "shadcnTokens": {
    "--color-background": "#F5F2EB",
    "--color-popover": "#F5F2EB",
    "--color-foreground": "#000000",
    "--color-card-foreground": "#000000",
    "--color-popover-foreground": "#000000",
    "--color-card": "#F5F2EB",
    "--color-muted": "#F5F2EB",
    "--color-muted-foreground": "#1A1A1A",
    "--color-primary": "#0066CC",
    "--color-ring": "#0066CC",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#D2691E",
    "--color-accent": "#D2691E",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
    "--color-border": "#000000",
    "--color-input": "#000000",
    "--color-destructive": "#E53935"
  },
  "shadcnTokensClassic": {
    "--background": "#F5F2EB",
    "--popover": "#F5F2EB",
    "--foreground": "#000000",
    "--card-foreground": "#000000",
    "--popover-foreground": "#000000",
    "--card": "#F5F2EB",
    "--muted": "#F5F2EB",
    "--muted-foreground": "#1A1A1A",
    "--primary": "#0066CC",
    "--ring": "#0066CC",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#D2691E",
    "--accent": "#D2691E",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#E53935"
  }
});
