registerSystem({
  "meta": {
    "name": "Wiring Harness Diagram",
    "tagline": "Hyper-functional, densely annotated wiring schematic in postwar engineering drafting style",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap"
  },
  "yamlTokens": {
    "name": "Wiring Harness Diagram",
    "colors": {
      "canvas": "#FFFFFF",
      "canvas-alternate": "#F5F6F8",
      "canvas-blueprint": "#003366",
      "wire-power": "#E53935",
      "wire-ground": "#212121",
      "wire-signal": "#1E88E5",
      "wire-sensor": "#FDD835",
      "connector-outline": "#424242",
      "connector-cavity": "#F5F5DC",
      "label-text": "#000000",
      "accent-diagnostic": "#FF6F00"
    },
    "typography": {
      "display": {
        "fontFamily": "monospace",
        "fontSize": "20px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.05em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "monospace",
        "fontSize": "16px",
        "fontWeight": 600,
        "lineHeight": 1.25,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "monospace",
        "fontSize": "14px",
        "fontWeight": 500,
        "lineHeight": 1.375,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "monospace",
        "fontSize": "12px",
        "fontWeight": 400,
        "lineHeight": 1.5,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "label": {
        "fontFamily": "monospace",
        "fontSize": "10px",
        "fontWeight": 400,
        "lineHeight": 1,
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
      "component-internal": "4px",
      "section-internal": "8px",
      "page-edge": "16px",
      "gap-component": "8px",
      "gap-section": "16px",
      "height-sm": "24px",
      "height-lg": "64px",
      "icon": "16px"
    },
    "components": {
      "connector": {
        "backgroundColor": "{colors.connector-cavity}",
        "rounded": "{rounded.default}"
      },
      "legend-box": {
        "backgroundColor": "{colors.canvas}",
        "textColor": "{colors.label-text}",
        "rounded": "{rounded.default}",
        "padding": "16px"
      },
      "metric-cell": {
        "backgroundColor": "{colors.canvas}",
        "textColor": "{colors.label-text}",
        "rounded": "{rounded.default}",
        "padding": "8px"
      },
      "splice-point": {
        "backgroundColor": "{colors.label-text}",
        "size": "6px"
      },
      "signal-bar": {
        "backgroundColor": "{colors.connector-outline}",
        "height": "6px"
      }
    },
    "version": "alpha",
    "description": "A hyper-functional, densely annotated wiring harness schematic style grounded in postwar engineering drafting standards — pure vector diagram logic with orthogonal routing, monospace labels, and functional wire color conventions.",
    "provenance": {
      "coverage_status": "complete",
      "identity_description": "The slug `wiring-harness-diagram` is ambiguous. It does not refer to a single branded visual identity, system, or artefact, but to a genre of technical illustration: the schematic diagram of wire routing and connections used in electrical engineering, automotive, aerospace, and industrial contexts.",
      "manual_enrichment_required": false,
      "imagery_count": 5,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "www.thehenryford.org",
          "count": 1
        },
        {
          "host": "www.sae.org",
          "count": 1
        },
        {
          "host": "www.fordservicecontent.com",
          "count": 1
        },
        {
          "host": "www.asme.org",
          "count": 1
        },
        {
          "host": "www.khanacademy.org",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://www.thehenryford.org/search?Tab=collections",
          "host": "www.thehenryford.org",
          "institution": "The Henry Ford Museum of American Innovation, Dearborn, MI",
          "confidence_original": "low"
        },
        {
          "url": "https://www.sae.org/standards/content/as50881/",
          "host": "www.sae.org",
          "institution": "SAE International",
          "confidence_original": "low"
        },
        {
          "url": "https://www.fordservicecontent.com/",
          "host": "www.fordservicecontent.com",
          "institution": "Ford Motor Company (historical publications)",
          "confidence_original": "low"
        },
        {
          "url": "https://www.asme.org/codes-standards/find-codes-standards/y14-2-line-conventions-lettering",
          "host": "www.asme.org",
          "institution": "ASME",
          "confidence_original": "low"
        },
        {
          "url": "https://www.khanacademy.org/humanities/special-topics/design-drafting/mechanical-drafting",
          "host": "www.khanacademy.org",
          "institution": "Khan Academy",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Leroy lettering system",
          "foundry": "Keuffel & Esser",
          "year": null,
          "google_fonts": null,
          "attestation": "unknown"
        },
        {
          "name": "Standard Engineering Lettering",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "attestation": "attested"
        },
        {
          "name": "Futura Bold",
          "foundry": null,
          "year": null,
          "google_fonts": "Jost",
          "attestation": "inferred"
        },
        {
          "name": "Helvetica Medium",
          "foundry": null,
          "year": null,
          "google_fonts": "Inter",
          "attestation": "inferred"
        },
        {
          "name": "ROMANS",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "attestation": "unverified"
        },
        {
          "name": "HELV",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "attestation": "unverified"
        }
      ],
      "flags": [
        "1_robots_disallowed_urls"
      ],
      "honest_gaps": [
        "1. **No specific primary artefact identified** – the record relies on general practice. A single surviving drawing with known accession number would anchor claims."
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#FFFFFF",
    "--on-bg": "#000000",
    "--primary": "#1E88E5",
    "--on-primary": "#1e1e1e",
    "--secondary-col": "#E53935",
    "--on-secondary": "#FFFFFF",
    "--surface": "#F5F6F8",
    "--on-bg-muted": "#424242",
    "--border": "#424242",
    "--error": "#FF6F00",
    "--font-display": "JetBrains Mono",
    "--font-body": "JetBrains Mono",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "wire-power": "#E53935",
    "wire-ground": "#212121",
    "wire-signal": "#1E88E5",
    "wire-sensor": "#FDD835",
    "wire-shield": "#43A047",
    "connector-outline": "#424242",
    "connector-cavity": "#F5F5DC",
    "label-text": "#000000",
    "accent-diagnostic": "#FF6F00",
    "canvas-blueprint": "#003366",
    "canvas-alternate": "#F5F6F8",
    "warn": "#FF8C42",
    "ok": "#22C55E",
    "err": "#FF6F00",
    "deltaUp": "#22C55E",
    "deltaDown": "#FF6F00",
    "deltaFlat": "#424242",
    "live": "#1E88E5",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#424242",
    "chartFont": "JetBrains Mono"
  },
  "elevation": {
    "level-0": "none",
    "level-1": "none",
    "level-2": "none",
    "level-3": "none"
  },
  "surfaceModel": "flat",
  "materialSimulation": {
    "model": "none",
    "params": {}
  },
  "interactionModel": {
    "hover": {
      "delta": "glow"
    },
    "focus": {
      "style": "glow-ring"
    },
    "active": {
      "delta": "color-shift"
    },
    "transition-duration": "150ms",
    "transition-easing": "ease-in-out",
    "exempt-animations": []
  },
  "interactionStyles": ".ds-layout-frame .wire:hover { stroke-width: 4px; filter: drop-shadow(0 0 4px currentColor); transition: stroke-width 150ms ease-in-out, filter 150ms ease-in-out; } .ds-layout-frame .connector:hover { stroke-width: 2px; filter: brightness(1.1); } .ds-layout-frame .connector:focus { stroke-width: 3px; filter: drop-shadow(0 0 3px rgba(0,0,0,0.3)); } .ds-layout-frame .wire.active { stroke: #FF6F00; } .ds-layout-frame .connector.active { fill: #424242; } .ds-layout-frame .wire.dimmed, .ds-layout-frame .connector.dimmed { opacity: 0.4; }",
  "chartStyle": {
    "background": "var(--bg)",
    "gridLines": "1px solid var(--border) at 20% opacity",
    "axisLabels": "monospace 12px var(--on-bg)",
    "lineChart": {
      "stroke": "var(--primary)",
      "strokeWidth": 1.5,
      "fill": "none"
    },
    "dataDots": {
      "r": 2.5,
      "fill": "var(--primary)"
    },
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#424242",
    "fontFamily": "JetBrains Mono"
  },
  "dashboardStyle": {
    "layout": "Dense grid with orthogonal alignment; connectors and wires aligned to invisible grid (10px base).",
    "density": "High density – minimal whitespace, tightly packed wire labels and metrics.",
    "panelTreatment": "Flat panels with 2px solid border, no radius, monospace labels. Use surface color for alternate rows.",
    "dataVizStyle": "Pure line charts with orthogonal axis lines; data points as small filled circles (2.5px); no gradients; grid lines at 20% opacity.",
    "signatureElement": "Wire color key (blue/red/black/yellow) at bottom of each panel with legend box treatment."
  },
  "landingStyle": {
    "heroApproach": "Title block in lower-right corner containing part number, revision, date, scale – all monospace uppercase. Positioned inside a page border.",
    "scrollBehavior": "Simple vertical scroll; wire segments animate in with stroke-dashoffset from 100% to 0%.",
    "ctaStyle": "Inline bordered links styled as secondary buttons; no hover effects beyond subtle glow on wire paths.",
    "signatureMoment": "Initial page load reveals orthogonal wire network with a left-to-right stroke animation; connectors appear with a pin-pulse effect."
  },
  "globalFilter": null,
  "globalBodyCss": "font-family: var(--font-body); background: var(--bg); color: var(--on-bg);",
  "globalCss": ":root { --bg: #FFFFFF; --on-bg: #000000; --primary: #1E88E5; --on-primary: #FFFFFF; --secondary-col: #E53935; --surface: #F5F6F8; --on-bg-muted: #424242; --border: #424242; --error: #FF6F00; --font-display: 'JetBrains Mono', monospace; --font-body: 'JetBrains Mono', monospace; --radius-default: 0px; --radius-card: 0px; --radius-btn: 0px; --radius-chip: 0px; } .ds-layout-frame { box-sizing: border-box; }",
  "buttons": [
    {
      "name": "Primary Action Button",
      "desc": "Flat solid button with monospace uppercase label. Background uses primary blue. For executing wiring diagram actions like 'DOWNLOAD SCHEMATIC'.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--primary); color: var(--on-primary); border: 2px solid var(--primary); border-radius: var(--radius-default); padding: 8px 16px; font-family: var(--font-body); font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; line-height: 1.5;\">DOWNLOAD SCHEMATIC</button>",
      "label": "Primary Action Button",
      "note": "Flat solid button with monospace uppercase label. Background uses primary blue. For executing wiring diagram actions like 'DOWNLOAD SCHEMATIC'."
    },
    {
      "name": "Secondary Outline Button",
      "desc": "Outlined button with surface background. Used for secondary commands like 'CANCEL' or 'RESET' in diagram tools.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--surface); color: var(--on-bg); border: 2px solid var(--border); border-radius: var(--radius-default); padding: 8px 16px; font-family: var(--font-body); font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; line-height: 1.5;\">CANCEL</button>",
      "label": "Secondary Outline Button",
      "note": "Outlined button with surface background. Used for secondary commands like 'CANCEL' or 'RESET' in diagram tools."
    },
    {
      "name": "Ghost Action Button",
      "desc": "Transparent background, primary border and text. For less prominent actions like 'INFO' or 'DETAILS' on a connector.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; color: var(--primary); border: 2px solid var(--primary); border-radius: var(--radius-default); padding: 8px 16px; font-family: var(--font-body); font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; line-height: 1.5;\">DETAILS</button>",
      "label": "Ghost Action Button",
      "note": "Transparent background, primary border and text. For less prominent actions like 'INFO' or 'DETAILS' on a connector."
    }
  ],
  "cards": [
    {
      "name": "Connector Card",
      "desc": "A card representing a wiring connector. Contains numbered pin slots and a label. Flat, no radius, with border.",
      "html": "<div style=\"background: var(--bg); border: 2px solid var(--border); border-radius: var(--radius-default); padding: 16px; font-family: var(--font-body); display: flex; flex-direction: column; gap: 8px;\"><div style=\"text-transform: uppercase; font-size: 10px; letter-spacing: -0.025em; color: var(--on-bg-muted);\">CONNECTOR J4</div><div style=\"display: flex; gap: 4px; flex-wrap: wrap;\"><span style=\"display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; border: 1px solid var(--border); color: var(--on-bg); font-size: 10px;\">1</span><span style=\"display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; border: 1px solid var(--border); color: var(--on-bg); font-size: 10px;\">2</span><span style=\"display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; border: 1px solid var(--border); color: var(--on-bg); font-size: 10px;\">3</span><span style=\"display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; border: 1px solid var(--border); color: var(--on-bg); font-size: 10px;\">4</span></div></div>",
      "label": "Connector Card",
      "note": "A card representing a wiring connector. Contains numbered pin slots and a label. Flat, no radius, with border."
    },
    {
      "name": "Metric Cell Card",
      "desc": "A dashboard metric cell showing a label and value. Used for wire length, voltage, or current readings.",
      "html": "<div style=\"background: var(--bg); border: 2px solid var(--border); border-radius: var(--radius-default); padding: 8px; font-family: var(--font-body); display: flex; flex-direction: column; gap: 4px;\"><span style=\"text-transform: uppercase; font-size: 10px; letter-spacing: -0.025em; color: var(--on-bg-muted);\">WIRE LENGTH</span><span style=\"text-transform: uppercase; font-size: 16px; font-weight: 600; color: var(--on-bg);\">12.5 M</span></div>",
      "label": "Metric Cell Card",
      "note": "A dashboard metric cell showing a label and value. Used for wire length, voltage, or current readings."
    }
  ],
  "forms": [
    {
      "name": "Text Input (Voltage)",
      "desc": "A monospace uppercase text input for entering diagnostic values. Flat border, no radius.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px; font-family: var(--font-body);\"><label style=\"text-transform: uppercase; font-size: 10px; letter-spacing: -0.025em; color: var(--on-bg);\">VOLTAGE (V)</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" value=\"12.0\" style=\"background: var(--bg); border: 2px solid var(--border); border-radius: var(--radius-default); padding: 8px; font-family: var(--font-body); font-size: 12px; text-transform: uppercase; color: var(--on-bg);\" /></div>",
      "label": "Text Input (Voltage)",
      "stateLabel": "A monospace uppercase text input for entering diagnostic values. Flat border, no radius."
    },
    {
      "name": "Select (Wire Gauge)",
      "desc": "A dropdown styled as flat monospace. Used to select wire gauge or color code.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px; font-family: var(--font-body);\"><label style=\"text-transform: uppercase; font-size: 10px; letter-spacing: -0.025em; color: var(--on-bg);\">WIRE GAUGE</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--bg); border: 2px solid var(--border); border-radius: var(--radius-default); padding: 8px; font-family: var(--font-body); font-size: 12px; text-transform: uppercase; color: var(--on-bg);\"><option>18 AWG</option><option>16 AWG</option><option>14 AWG</option></select></div>",
      "label": "Select (Wire Gauge)",
      "stateLabel": "A dropdown styled as flat monospace. Used to select wire gauge or color code."
    },
    {
      "name": "Checkbox (Diagnostic Toggle)",
      "desc": "A custom checkbox with monospace label. Flat, no radius, uses border for unchecked and primary fill for checked.",
      "html": "<div style=\"display: flex; align-items: center; gap: 8px; font-family: var(--font-body);\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" id=\"diag-3d12\" style=\"width: 16px; height: 16px; border: 2px solid var(--border); appearance: none; background: var(--bg); cursor: pointer;\" checked /><label for=\"diag-3d12\" style=\"text-transform: uppercase; font-size: 10px; letter-spacing: -0.025em; color: var(--on-bg);\">ENABLE DIAGNOSTIC</label></div>",
      "label": "Checkbox (Diagnostic Toggle)",
      "stateLabel": "A custom checkbox with monospace label. Flat, no radius, uses border for unchecked and primary fill for checked."
    }
  ],
  "extraComponents": [
    {
      "name": "Splice Point",
      "desc": "A filled circle representing a wire splice or junction. Always 6px diameter, no border.",
      "html": "<span style=\"display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: var(--on-bg);\"></span>"
    },
    {
      "name": "Wire Segment Label",
      "desc": "A monospace uppercase label placed adjacent to wire segments. Contains wire ID, gauge, and color.",
      "html": "<span style=\"font-family: var(--font-body); font-size: 10px; text-transform: uppercase; letter-spacing: -0.025em; color: var(--on-bg); line-height: 1;\">W12 18 RD</span>"
    },
    {
      "name": "Signal Bar",
      "desc": "A horizontal bar used to indicate signal presence or activity. Height 6px, full width container.",
      "html": "<div style=\"width: 100%; height: 6px; background: var(--border);\"></div>"
    },
    {
      "name": "Continuation Flag",
      "desc": "A dashed border box indicating the diagram continues on another page. Used in multi-sheet schematics.",
      "html": "<div style=\"border: 2px dashed var(--border); border-radius: var(--radius-default); background: var(--surface); padding: 8px; font-family: var(--font-body); text-transform: uppercase; font-size: 10px; color: var(--on-bg-muted); letter-spacing: -0.025em;\">CONTINUED ON SHEET 2</div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — WIRING HARNESS DIAGRAM</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — SIGNAL ROUTING</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — CONNECTOR J4</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — WIRE 12 AWG RED</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — PIN 3</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Do not use curved wire paths. All routing must be orthogonal (90° or 45° bends). Avoid freehand or bezier curves.",
      "avoid": {
        "html": "<svg width=\"200\" height=\"100\"><path d=\"M10 50 Q100 10 190 50\" stroke=\"#E53935\" stroke-width=\"2\" fill=\"none\"/></svg>",
        "label": "Avoid"
      },
      "rule": "Do not use curved wire paths. All routing must be orthogonal (90° or 45° bends). Avoid freehand or bezier curves.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not use more than three ink colors in a single diagram. Stick to red (power), black (ground), blue (signal), yellow (sensor) for wires, and black for labels. Avoid gradients, shadows, or additional hues.",
      "avoid": {
        "html": "<div style=\"background: linear-gradient(135deg, #FF6F00, #E53935); border: 1px solid #1E88E5; padding: 16px; font-family: 'Comic Sans MS'; text-transform: lowercase; color: #FDD835;\">BAD EXAMPLE</div>",
        "label": "Avoid"
      },
      "rule": "Do not use more than three ink colors in a single diagram. Stick to red (power), black (ground), blue (signal), yellow (sensor) for wires, and black for labels. Avoid gradients, shadows, or additional hues.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not use lowercase or non-monospace fonts. All labels must be uppercase monospace. Avoid decorative typefaces.",
      "avoid": {
        "html": "<span style=\"font-family: 'Georgia'; font-size: 12px; text-transform: lowercase; letter-spacing: normal;\">Wire A12 (lowercase)</span>",
        "label": "Avoid"
      },
      "rule": "Do not use lowercase or non-monospace fonts. All labels must be uppercase monospace. Avoid decorative typefaces.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not add decorative elements, drop shadows, or 3D effects. The diagram must remain a flat vector schematic with no skeuomorphic simulation.",
      "avoid": {
        "html": "<button style=\"background: var(--primary); color: var(--on-primary); border: none; box-shadow: 0 4px 6px rgba(0,0,0,0.3); border-radius: 8px; padding: 12px 24px; font-family: var(--font-body); text-transform: uppercase;\">3D BUTTON</button>",
        "label": "Avoid"
      },
      "rule": "Do not add decorative elements, drop shadows, or 3D effects. The diagram must remain a flat vector schematic with no skeuomorphic simulation.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "doAvoidStyle": {
    "background": "var(--bg)",
    "border": "2px solid var(--border)",
    "padding": "16px",
    "display": "flex",
    "flexDirection": "column",
    "gap": "16px"
  },
  "effects": [],
  "motion": [],
  "colors": {
    "canvas": "#FFFFFF",
    "canvas-alternate": "#F5F6F8",
    "canvas-blueprint": "#003366",
    "wire-power": "#E53935",
    "wire-ground": "#212121",
    "wire-signal": "#1E88E5",
    "wire-sensor": "#FDD835",
    "connector-outline": "#424242",
    "connector-cavity": "#F5F5DC",
    "label-text": "#000000",
    "accent-diagnostic": "#FF6F00"
  },
  "typography": {
    "display": {
      "fontFamily": "var(--font-display)",
      "fontSize": "20px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "0.05em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "var(--font-display)",
      "fontSize": "16px",
      "fontWeight": 600,
      "lineHeight": 1.25,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "var(--font-display)",
      "fontSize": "14px",
      "fontWeight": 500,
      "lineHeight": 1.375,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "var(--font-body)",
      "fontSize": "12px",
      "fontWeight": 400,
      "lineHeight": 1.5,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "label": {
      "fontFamily": "var(--font-body)",
      "fontSize": "10px",
      "fontWeight": 400,
      "lineHeight": 1,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
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
    "gap-component": "8px",
    "gap-section": "16px",
    "height-sm": "24px",
    "height-lg": "64px",
    "icon": "16px"
  },
  "layouts": {
    "copy": {
      "heroKicker": "WIRING HARNESS DIAGRAM",
      "heroHeadline": "TRACE. CONNECT. DIAGNOSE.",
      "heroSub": "POSTWAR ENGINEERING DRAFTING STANDARD FOR CIRCUIT SCHEMATICS",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"button\">OPEN HARNESS</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"button\">VIEW LEGEND</button>",
      "navLinks": [
        "WIRING",
        "CONNECTORS",
        "SPLICES",
        "LEGEND",
        "TITLE BLOCK"
      ],
      "features": [
        {
          "title": "ORTHOGONAL ROUTING",
          "desc": "90° AND 45° BENDS ONLY — NO CURVES. EVERY WIRE PATH IS A STRAIGHT SEGMENT.",
          "icon": "📐",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📐 ORTHOGONAL ROUTING</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">90° AND 45° BENDS ONLY — NO CURVES. EVERY WIRE PATH IS A STRAIGHT SEGMENT.</div></div>"
        },
        {
          "title": "FUNCTIONAL COLORS",
          "desc": "RED POWER, BLACK GROUND, BLUE SIGNAL, YELLOW SENSOR. STRICT CONVENTION.",
          "icon": "🎨",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🎨 FUNCTIONAL COLORS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">RED POWER, BLACK GROUND, BLUE SIGNAL, YELLOW SENSOR. STRICT CONVENTION.</div></div>"
        },
        {
          "title": "ALL-CAPS LABELS",
          "desc": "WIRE ID, GAUGE, COLOR ADJACENT TO EACH SEGMENT. MONOSPACE 10 PT.",
          "icon": "🏷️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🏷️ ALL-CAPS LABELS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">WIRE ID, GAUGE, COLOR ADJACENT TO EACH SEGMENT. MONOSPACE 10 PT.</div></div>"
        },
        {
          "title": "LEGEND BOX",
          "desc": "LINE-STYLE KEY, REVISION, DATE, SCALE. LOWER-RIGHT CORNER.",
          "icon": "📋",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📋 LEGEND BOX</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">LINE-STYLE KEY, REVISION, DATE, SCALE. LOWER-RIGHT CORNER.</div></div>"
        },
        {
          "title": "NO DECORATION",
          "desc": "NO GRADIENTS, SHADOWS, OR 3D EFFECTS. PURE VECTOR LOGIC.",
          "icon": "🚫",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🚫 NO DECORATION</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">NO GRADIENTS, SHADOWS, OR 3D EFFECTS. PURE VECTOR LOGIC.</div></div>"
        }
      ],
      "ctaStripHeadline": "GENERATE A HARNESS DIAGRAM FROM YOUR BOM",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"button\">UPLOAD CSV</button>",
      "sidebarBrand": "HARNESS DIAG",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "ROUTES",
          "active": true
        },
        {
          "icon": "◉",
          "label": "NODES",
          "active": false
        },
        {
          "icon": "◉",
          "label": "ALERTS",
          "active": false
        }
      ],
      "dashboardTitle": "ACTIVE HARNESS — CHASSIS 8274",
      "metrics": [
        {
          "label": "WIRES TRACED",
          "value": "142",
          "delta": "+8",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "CONNECTORS",
          "value": "37",
          "delta": "-2",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "SPLICE POINTS",
          "value": "19",
          "delta": "0",
          "dir": "neutral",
          "direction": "neutral"
        },
        {
          "label": "CONTINUITY FAULTS",
          "value": "3",
          "delta": "-1",
          "dir": "down",
          "direction": "down"
        }
      ],
      "chartTitle": "WIRE VOLTAGE DROP PER SEGMENT",
      "panelATitle": "CONNECTOR PIN ASSIGNMENTS",
      "panelARows": [
        {
          "label": "CONNECTOR: J1",
          "value": "PIN 1 — POWER",
          "pct": 1
        },
        {
          "label": "CONNECTOR: J1",
          "value": "PIN 2 — GROUND",
          "pct": 2
        },
        {
          "label": "CONNECTOR: J2",
          "value": "PIN 1 — SIGNAL",
          "pct": 1
        },
        {
          "label": "CONNECTOR: J2",
          "value": "PIN 2 — SENSOR",
          "pct": 2
        },
        {
          "label": "CONNECTOR: J3",
          "value": "PIN 1 — DIAGNOSTIC",
          "pct": 1
        }
      ],
      "panelBTitle": "WIRE SEGMENT STATUS",
      "panelBCells": [
        {
          "label": "WIRE ID",
          "value": "AWG-18",
          "state": "ok"
        },
        {
          "label": "LENGTH",
          "value": "3.2 M",
          "state": "warn"
        },
        {
          "label": "COLOR",
          "value": "RED",
          "state": "err"
        },
        {
          "label": "CONTINUITY",
          "value": "PASS",
          "state": "ok"
        },
        {
          "label": "SPLICE COUNT",
          "value": "1",
          "state": "warn"
        },
        {
          "label": "TERMINAL",
          "value": "RING",
          "state": "err"
        },
        {
          "label": "ROUTE",
          "value": "J1–J2",
          "state": "ok"
        },
        {
          "label": "NOTES",
          "value": "BUNDLE 4",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "SEG-01",
        "SEG-02",
        "SEG-03",
        "SEG-04",
        "SEG-05",
        "SEG-06"
      ],
      "series": [
        {
          "data": [
            12.1,
            11.9,
            12,
            11.8,
            12.2,
            12,
            12,
            12,
            12,
            12,
            12,
            12
          ],
          "label": "POWER",
          "axis": "left",
          "color": "#1E88E5"
        },
        {
          "data": [
            5,
            4.9,
            5.1,
            4.8,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
          ],
          "label": "SIGNAL",
          "axis": "right-1",
          "color": "#E53935"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'position:relative;width:100%;min-height:400px;background:var(--bg);border:2px solid var(--border);font-family:var(--font-body);overflow:hidden;'; var titleBlock = document.createElement('div'); titleBlock.style.cssText = 'position:absolute;bottom:16px;right:16px;border:1px solid var(--border);padding:8px;background:var(--surface);text-align:right;'; titleBlock.innerHTML = '<div style=\"font-size:10px;color:var(--on-bg-muted);\">P/N 8274-12</div><div style=\"font-size:12px;font-weight:700;\">REV B</div><div style=\"font-size:10px;\">DATE: 2025-03-15</div>'; el.appendChild(titleBlock); var wire1 = document.createElement('div'); wire1.style.cssText = 'position:absolute;top:100px;left:50px;width:200px;height:2px;background:var(--primary);'; el.appendChild(wire1); var wire2 = document.createElement('div'); wire2.style.cssText = 'position:absolute;top:100px;left:250px;width:2px;height:100px;background:var(--secondary-col);'; el.appendChild(wire2); var wire3 = document.createElement('div'); wire3.style.cssText = 'position:absolute;top:200px;left:50px;width:2px;height:60px;background:var(--wire-ground);'; el.appendChild(wire3); }",
    "showcaseRender": "function(el) { el.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:8px;padding:16px;'; for(var i=1;i<=6;i++){ var card=document.createElement('div'); card.style.cssText='border:2px solid var(--border);padding:8px;background:var(--bg);font-family:var(--font-body);'; card.innerHTML='<div style=\"font-size:10px;color:var(--on-bg-muted);\">CONNECTOR J'+i+'</div><div style=\"display:flex;gap:4px;margin-top:8px;\"><span style=\"display:inline-block;width:20px;height:20px;border:1px solid var(--border);text-align:center;font-size:10px;\">1</span><span style=\"display:inline-block;width:20px;height:20px;border:1px solid var(--border);text-align:center;font-size:10px;\">2</span></div>'; el.appendChild(card); } }",
    "panelCRender": "function(el) { el.style.cssText = 'padding:16px;border:2px solid var(--border);background:var(--surface);font-family:var(--font-body);'; var legend = document.createElement('div'); legend.style.cssText = 'border:1px solid var(--border);padding:16px;margin-bottom:16px;background:var(--bg);'; legend.innerHTML = '<div style=\"font-size:12px;font-weight:700;margin-bottom:8px;\">LEGEND</div><div style=\"font-size:10px;\">— POWER: RED</div><div style=\"font-size:10px;\">— GROUND: BLACK</div><div style=\"font-size:10px;\">— SIGNAL: BLUE</div><div style=\"font-size:10px;\">— SENSOR: YELLOW</div>'; el.appendChild(legend); var metrics = document.createElement('div'); metrics.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:8px;'; var items = ['WIRES TRACED: 142','CONNECTORS: 37','SPLICES: 19','FAULTS: 3']; items.forEach(function(t){ var m = document.createElement('div'); m.style.cssText = 'border:1px solid var(--border);padding:8px;background:var(--bg);font-size:10px;'; m.textContent = t; metrics.appendChild(m); }); el.appendChild(metrics); var titleBlock = document.createElement('div'); titleBlock.style.cssText = 'margin-top:16px;border:1px solid var(--border);padding:8px;background:var(--bg);text-align:right;'; titleBlock.innerHTML = '<div style=\"font-size:10px;color:var(--on-bg-muted);\">TITLE BLOCK</div><div>P/N: 8274-12   REV: B</div>'; el.appendChild(titleBlock); }",
    "heroBackground": "function(el) { el.style.background = '#FFFFFF'; }",
    "ctaBackground": "function(el) { el.style.background = '#FFFFFF'; }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'border-top:2px solid var(--border);height:8px;width:100%;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = '#FFFFFF'; }",
    "surfaceOverlay": "function(el) { var ov = document.createElement('div'); ov.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;'; el.appendChild(ov); }"
  },
  "shadcnTokens": {
    "--color-background": "#FFFFFF",
    "--color-popover": "#FFFFFF",
    "--color-foreground": "#000000",
    "--color-card-foreground": "#000000",
    "--color-popover-foreground": "#000000",
    "--color-card": "#F5F6F8",
    "--color-muted": "#F5F6F8",
    "--color-muted-foreground": "#424242",
    "--color-primary": "#1E88E5",
    "--color-ring": "#1E88E5",
    "--color-primary-foreground": "#1e1e1e",
    "--color-secondary": "#E53935",
    "--color-accent": "#E53935",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
    "--color-border": "#424242",
    "--color-input": "#424242",
    "--color-destructive": "#FF6F00"
  },
  "shadcnTokensClassic": {
    "--background": "#FFFFFF",
    "--popover": "#FFFFFF",
    "--foreground": "#000000",
    "--card-foreground": "#000000",
    "--popover-foreground": "#000000",
    "--card": "#F5F6F8",
    "--muted": "#F5F6F8",
    "--muted-foreground": "#424242",
    "--primary": "#1E88E5",
    "--ring": "#1E88E5",
    "--primary-foreground": "#1e1e1e",
    "--secondary": "#E53935",
    "--accent": "#E53935",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#424242",
    "--input": "#424242",
    "--destructive": "#FF6F00"
  }
});
