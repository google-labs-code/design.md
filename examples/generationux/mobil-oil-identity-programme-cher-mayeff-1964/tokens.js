registerSystem({
  "meta": {
    "name": "Mobil Oil Identity Programme (Chermayeff & Geismar, 1964)",
    "tagline": "A strict two-colour digital UI with geometric precision and offset print texture.",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
  },
  "yamlTokens": {
    "name": "Mobil Oil Identity Programme (Chermayeff & Geismar, 1964)",
    "colors": {
      "ok": "#0033A0",
      "warn": "#E31837",
      "err": "#E31837",
      "delta-up": "#0033A0",
      "delta-down": "#E31837",
      "delta-flat": "#1A1A1A"
    },
    "typography": {
      "display": {
        "fontFamily": "Inter",
        "fontSize": "48px",
        "fontWeight": 700,
        "lineHeight": 1.1,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Inter",
        "fontSize": "30px",
        "fontWeight": 700,
        "lineHeight": 1.2,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Inter",
        "fontSize": "20px",
        "fontWeight": 700,
        "lineHeight": 1.3,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Inter",
        "fontSize": "16px",
        "fontWeight": 400,
        "lineHeight": 1.5,
        "letterSpacing": "0em"
      },
      "label": {
        "fontFamily": "Inter",
        "fontSize": "12px",
        "fontWeight": 700,
        "lineHeight": 1.2,
        "letterSpacing": "0.05em",
        "textTransform": "uppercase"
      }
    },
    "rounded": {
      "default": "0px",
      "full": "9999px"
    },
    "spacing": {
      "component-internal": "16px",
      "section-internal": "32px",
      "page-edge": "32px",
      "gap-component": "16px",
      "gap-section": "32px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "{colors.ok}",
        "textColor": "#FFFFFF",
        "rounded": "{rounded.default}",
        "height": "40px"
      },
      "button-primary-hover": {
        "backgroundColor": "#002880",
        "textColor": "#FFFFFF",
        "rounded": "{rounded.default}",
        "height": "40px"
      },
      "card": {
        "backgroundColor": "#FFFFFF",
        "rounded": "{rounded.default}",
        "padding": "16px"
      },
      "input": {
        "backgroundColor": "#FFFFFF",
        "rounded": "{rounded.default}",
        "height": "40px",
        "padding": "8px"
      },
      "input-focus": {
        "backgroundColor": "#FFFFFF",
        "rounded": "{rounded.default}",
        "height": "40px",
        "padding": "8px"
      },
      "perfect-circle-badge": {
        "size": "32px",
        "backgroundColor": "{colors.warn}",
        "rounded": "{rounded.full}"
      },
      "metric-cell": {
        "backgroundColor": "#FFFFFF",
        "padding": "16px",
        "rounded": "{rounded.default}",
        "height": "56px"
      }
    },
    "version": "alpha",
    "description": "A digital UI framework inspired by the 1964 Mobil Oil corporate identity, featuring a strict two-colour palette of deep corporate blue and vivid signal red, geometric sans-serif typography, and a perfect circle motif.",
    "provenance": {
      "coverage_status": "minimal",
      "identity_description": "The slug `mobil-oil-identity-programme-cher-mayeff-1964` refers to the comprehensive visual identity programme designed for Mobil Oil Corporation by the American design firm Chermayeff & Geismar, initiated circa 1964. The programme is most famous for the circular blue corporate logo incorporating the word “Mobil” in a custom lowercase letterform, with the letter “o” rendered as a red circle. The i",
      "manual_enrichment_required": true,
      "imagery_count": 2,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "www.vam.ac.uk",
          "count": 1
        },
        {
          "host": "en.wikipedia.org",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://www.vam.ac.uk/",
          "host": "www.vam.ac.uk",
          "institution": "Victoria and Albert Museum, London",
          "confidence_original": "low"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Mobil",
          "host": "en.wikipedia.org",
          "institution": null,
          "confidence_original": "high"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Mobil logotype",
          "foundry": null,
          "year": 1964,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "unknown"
        },
        {
          "name": "Helvetica",
          "foundry": null,
          "year": null,
          "google_fonts": "Inter",
          "attestation": "conventional"
        }
      ],
      "flags": [
        "few_usable_urls",
        "2_robots_disallowed_urls"
      ],
      "honest_gaps": [
        {
          "\"1. **Colour – exact standards**": "PMS 287 and 186 are unverified. The original colour specification may have used a different colour matching system (DIC, custom mix). No Munsell, NCS, Lab values known.\""
        }
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#FFFFFF",
    "--on-bg": "#1A1A1A",
    "--primary": "#0033A0",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#E31837",
    "--on-secondary": "#FFFFFF",
    "--surface": "#FFFFFF",
    "--on-bg-muted": "#6B6B6B",
    "--border": "#0033A0",
    "--error": "#E31837",
    "--font-display": "Inter",
    "--font-body": "Inter",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "9999px"
  },
  "semanticColors": {
    "ok": "#0033A0",
    "warn": "#E31837",
    "err": "#E31837",
    "delta-up": "#0033A0",
    "delta-down": "#E31837",
    "delta-flat": "#1A1A1A",
    "deltaUp": "#0033A0",
    "deltaDown": "#E31837",
    "deltaFlat": "#1A1A1A",
    "live": "#0033A0",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#6B6B6B",
    "chartFont": "Inter"
  },
  "elevation": {
    "flat": true,
    "description": "No z-axis separation. All surfaces coplanar. No box-shadows, no bevels."
  },
  "surfaceModel": "flat",
  "materialSimulation": {
    "model": "paper",
    "params": {
      "dotScreen": true,
      "paperGrain": true,
      "misregistration": true,
      "misregistrationOffset": "1px"
    }
  },
  "globalFilter": "<svg xmlns=\"http://www.w3.org/2000/svg\"><defs><filter id=\"mobil-print-texture\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" result=\"noise\" /><feColorMatrix type=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.12 0\" result=\"coloredNoise\" /><feComponentTransfer in=\"SourceGraphic\" result=\"dots\"><feFuncA type=\"table\" tableValues=\"0 0.15 0.85 1\" /></feComponentTransfer><feBlend mode=\"multiply\" in=\"coloredNoise\" in2=\"dots\" result=\"textured\" /><feComposite in=\"textured\" in2=\"SourceGraphic\" operator=\"in\" /></filter><filter id=\"mobil-misregistration\" x=\"-5%\" y=\"-5%\" width=\"110%\" height=\"110%\"><feOffset dx=\"1\" dy=\"-0.5\" in=\"SourceGraphic\" result=\"offsetRed\" /><feBlend mode=\"normal\" in=\"offsetRed\" in2=\"SourceGraphic\" /></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-body); background: var(--bg); color: var(--on-bg); margin: 0; padding: 0;",
  "globalCss": ".ds-layout-frame { position: relative; background-color: var(--bg); color: var(--on-bg); } .ds-layout-frame::before { content: \"\"; position: absolute; inset: 0; background: transparent; filter: url(#mobil-print-texture); pointer-events: none; z-index: 9999; mix-blend-mode: multiply; opacity: 0.85; } .ds-layout-frame .perfect-circle-badge { filter: url(#mobil-misregistration); } .ds-layout-frame h1, .ds-layout-frame h2, .ds-layout-frame h3, .ds-layout-frame h4, .ds-layout-frame h5, .ds-layout-frame h6 { text-align: left; text-transform: uppercase; letter-spacing: -0.025em; font-family: var(--font-display); } .ds-layout-frame p, .ds-layout-frame li { text-align: left; } .ds-layout-frame a { color: var(--primary); text-decoration: underline; } .ds-layout-frame a:hover { color: #002880; } .ds-layout-frame .metric-cell { border: 1pt solid var(--border); } .ds-layout-frame .signal-bar-track { border: 2pt solid var(--primary); height: 4px; } .ds-layout-frame .signal-bar-fill { background-color: var(--primary); }",
  "interactionModel": {
    "hover": {
      "transition-duration": "150ms",
      "transition-timing-function": "linear",
      "background-color": "#002880"
    },
    "focus": {
      "outline": "1pt solid var(--primary)",
      "outline-offset": "2px"
    },
    "active": {
      "transition-duration": "150ms",
      "transition-timing-function": "linear",
      "transform": "scale(0.97)"
    }
  },
  "interactionStyles": ".ds-layout-frame button, .ds-layout-frame input, .ds-layout-frame select, .ds-layout-frame .interactive { transition-property: background-color, color, opacity, transform; transition-duration: 150ms; transition-timing-function: linear; transform-origin: center; } .ds-layout-frame button:hover, .ds-layout-frame .interactive:hover { background-color: #002880; } .ds-layout-frame button:focus-visible, .ds-layout-frame input:focus-visible, .ds-layout-frame .interactive:focus-visible { outline: 1pt solid var(--primary); outline-offset: 2px; } .ds-layout-frame button:active, .ds-layout-frame .interactive:active { transform: scale(0.97); } .ds-layout-frame button:disabled, .ds-layout-frame .interactive-disabled { opacity: 0.5; cursor: not-allowed; pointer-events: none; } .ds-layout-frame .perfect-circle-badge { transition: none; } .ds-layout-frame .perfect-circle-badge:hover { transform: none; background-color: var(--secondary-col); }",
  "chartStyle": {
    "background": "White with subtle dot screen and paper grain (opacity 8%)",
    "gridLines": "1pt solid #0033A0 at 25/50/75/100% heights, opacity 0.6",
    "axisLabels": "Uppercase, bold, 12px, #0033A0, letter-spacing 0.05em",
    "line": "#0033A0, stroke-width 1.5px, no shadow",
    "dots": "r=2.5px, #0033A0 fill, perfect circle shape",
    "dataPoints": "No fill, circle outline",
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#6B6B6B",
    "fontFamily": "Inter"
  },
  "dashboardStyle": {
    "layout": "Modular grid, 6 columns, flush left. Metric cells in rows of 3.",
    "density": "Low density with generous whitespace (32px edges, 16px gaps).",
    "panelTreatment": "White fill with 1pt solid blue border, no radius. Internal padding 16px.",
    "dataVizStyle": "Line charts with 1.5px solid blue line, no markers. Axes in uppercase blue labels. No area fill.",
    "signatureElement": "PerfectCircleBadge in top-right for critical alerts. Red horizontal rule below the header."
  },
  "landingStyle": {
    "heroApproach": "CorporateSignatureBlock top-left within a 4-column grid, surrounded by white space. A red horizontal rule spans below.",
    "scrollBehavior": "Hard cut reveals; no parallax, no fade. All transitions linear 150ms.",
    "ctaStyle": "Primary button (blue fill) with uppercase text. Secondary ghost link below.",
    "signatureMoment": "The red circle of the logo is the only colour accent on the screen. Background has subtle dot screen texture (10% opacity, multiply)."
  },
  "spacing": {
    "componentInternal": "16px",
    "sectionInternal": "32px",
    "pageEdge": "32px",
    "gapComponent": "16px",
    "gapSection": "32px"
  },
  "radius": {
    "default": "0px",
    "full": "9999px"
  },
  "buttons": [
    {
      "name": "Primary Button",
      "desc": "Solid blue background with white uppercase bold text. Flat, no shadow. Hard edges.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:var(--primary); color:var(--on-primary); border:2px solid var(--primary); border-radius:var(--radius-btn); padding:8px 24px; height:40px; font-family:var(--font-display); font-weight:700; font-size:12px; letter-spacing:0.05em; text-transform:uppercase; cursor:pointer; line-height:1;\">DASHBOARD</button>",
      "label": "Primary Button",
      "note": "Solid blue background with white uppercase bold text. Flat, no shadow. Hard edges."
    },
    {
      "name": "Secondary Button",
      "desc": "White background with blue outlined border and blue text. Same typography rules.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:var(--surface); color:var(--primary); border:2px solid var(--primary); border-radius:var(--radius-btn); padding:8px 24px; height:40px; font-family:var(--font-display); font-weight:700; font-size:12px; letter-spacing:0.05em; text-transform:uppercase; cursor:pointer; line-height:1;\">REPORT</button>",
      "label": "Secondary Button",
      "note": "White background with blue outlined border and blue text. Same typography rules."
    },
    {
      "name": "Ghost Button",
      "desc": "No background or border; blue text only. Hover adds thin red bottom rule.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:transparent; color:var(--primary); border:none; padding:8px 0; height:40px; font-family:var(--font-display); font-weight:700; font-size:12px; letter-spacing:0.05em; text-transform:uppercase; cursor:pointer; line-height:1;\">VIEW MORE</button>",
      "label": "Ghost Button",
      "note": "No background or border; blue text only. Hover adds thin red bottom rule."
    }
  ],
  "cards": [
    {
      "name": "Standard Data Card",
      "desc": "White fill with 1pt solid blue border, no radius. Internal padding 16px. Left-aligned content.",
      "html": "<div style=\"background:var(--surface); border:1px solid var(--border); border-radius:var(--radius-card); padding:16px; font-family:var(--font-body);\"><p style=\"margin:0; font-size:12px; font-weight:700; letter-spacing:0.05em; text-transform:uppercase; color:var(--primary);\">TOTAL VOLUME</p><p style=\"margin:8px 0 0; font-size:24px; font-weight:700; color:var(--on-bg);\">3,245</p><span style=\"display:inline-block; margin-top:8px; font-size:12px; font-weight:bold; color:var(--primary);\">&#9650; +12%</span></div>",
      "label": "Standard Data Card",
      "note": "White fill with 1pt solid blue border, no radius. Internal padding 16px. Left-aligned content."
    },
    {
      "name": "Alert Card",
      "desc": "White fill with 2pt red border. Red circle badge in top-right corner. Used for critical messages.",
      "html": "<div style=\"position:relative; background:var(--surface); border:2px solid var(--error); border-radius:var(--radius-card); padding:16px; font-family:var(--font-body);\"><div style=\"position:absolute; top:8px; right:8px; width:32px; height:32px; background:var(--error); border-radius:var(--radius-chip);\"></div><p style=\"margin:0; font-size:12px; font-weight:700; letter-spacing:0.05em; text-transform:uppercase; color:var(--error);\">WARNING</p><p style=\"margin:8px 0 0; font-size:14px; font-weight:400; color:var(--on-bg);\">System pressure exceeds nominal range.</p></div>",
      "label": "Alert Card",
      "note": "White fill with 2pt red border. Red circle badge in top-right corner. Used for critical messages."
    }
  ],
  "forms": [
    {
      "name": "Text Input",
      "desc": "White background, 1px solid blue border, 8px padding, height 40px. Uppercase label above.",
      "html": "<div style=\"font-family:var(--font-body);\"><label style=\"display:block; font-size:12px; font-weight:700; letter-spacing:0.05em; text-transform:uppercase; color:var(--primary); margin-bottom:4px;\">SITE ID</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" style=\"background:var(--surface); border:1px solid var(--border); border-radius:var(--radius-default); padding:8px; height:40px; width:100%; font-family:var(--font-body); font-size:14px; color:var(--on-bg); box-sizing:border-box;\"></div>",
      "label": "Text Input",
      "stateLabel": "White background, 1px solid blue border, 8px padding, height 40px. Uppercase label above."
    },
    {
      "name": "Select Dropdown",
      "desc": "White background, blue border, custom down arrow using red circle pseudo-element. Minimalist.",
      "html": "<div style=\"position:relative; font-family:var(--font-body);\"><label style=\"display:block; font-size:12px; font-weight:700; letter-spacing:0.05em; text-transform:uppercase; color:var(--primary); margin-bottom:4px;\">REGION</label><div style=\"background:var(--surface); border:1px solid var(--border); border-radius:var(--radius-default); padding:8px; height:40px; display:flex; align-items:center; justify-content:space-between; cursor:pointer;\"><span style=\"font-size:14px; color:var(--on-bg);\">— SELECT —</span><span style=\"width:16px; height:16px; background:var(--error); border-radius:var(--radius-chip);\"></span></div></div>",
      "label": "Select Dropdown",
      "stateLabel": "White background, blue border, custom down arrow using red circle pseudo-element. Minimalist."
    },
    {
      "name": "Checkbox Toggle",
      "desc": "Square blue border, filled blue when checked. Red circle indicator on right.",
      "html": "<div style=\"display:flex; align-items:center; gap:8px; font-family:var(--font-body);\"><div style=\"width:20px; height:20px; border:2px solid var(--primary); border-radius:var(--radius-default); display:flex; align-items:center; justify-content:center; background:var(--surface);\"><span style=\"width:10px; height:10px; background:var(--primary); border-radius:var(--radius-default);\"></span></div><span style=\"font-size:14px; color:var(--on-bg);\">Override</span><span style=\"margin-left:auto; width:12px; height:12px; background:var(--error); border-radius:var(--radius-chip);\"></span></div>",
      "label": "Checkbox Toggle",
      "stateLabel": "Square blue border, filled blue when checked. Red circle indicator on right."
    }
  ],
  "extraComponents": [
    {
      "name": "PerfectCircleBadge",
      "desc": "A 32px red circle, perfectly round. Used as an alert dot or status indicator. Never filled with blue.",
      "html": "<div style=\"width:32px; height:32px; background:var(--error); border-radius:var(--radius-chip);\"></div>"
    },
    {
      "name": "CorporateSignatureBlock",
      "desc": "Blue uppercase wordmark with the letter 'O' replaced by a red circle. Flush left, generous margins.",
      "html": "<div style=\"display:flex; align-items:center; gap:0; font-family:var(--font-display); font-weight:700; font-size:36px; letter-spacing:-0.025em; color:var(--primary);\"><span style=\"text-transform:uppercase;\">MOB</span><span style=\"display:inline-block; width:0.9em; height:0.9em; background:var(--error); border-radius:var(--radius-chip); margin:0 0.05em;\"></span><span style=\"text-transform:uppercase;\">L</span></div>"
    },
    {
      "name": "Horizontal Rule (Red)",
      "desc": "A thin horizontal rule in red. Used to separate sections or below the signature block.",
      "html": "<hr style=\"border:none; border-top:2px solid var(--error); margin:32px 0;\">"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — MOBIL OIL</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — ANNUAL REPORT</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — MISSION CONTROL</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — This is a digital interface inspired by the 1964 Mobil identity programme. All text is flush left, ragged right.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — SITE ID — REGION 7</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Do not use red for body text or large background areas. Red is reserved exclusively for the circular logo element and small alert badges.",
      "avoid": {
        "html": "<p style=\"color:#E31837; font-size:16px;\">This is a warning message in red body text — not allowed.</p>",
        "label": "Avoid"
      },
      "rule": "Do not use red for body text or large background areas. Red is reserved exclusively for the circular logo element and small alert badges.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);\"></div>"
      }
    },
    {
      "desc": "Do not add box-shadows, gradients, or any simulated depth. All surfaces must remain flat and coplanar.",
      "avoid": {
        "html": "<button style=\"background:#0033A0; color:white; box-shadow:0 4px 6px rgba(0,0,0,0.1); border-radius:4px;\">Invalid</button>",
        "label": "Avoid"
      },
      "rule": "Do not add box-shadows, gradients, or any simulated depth. All surfaces must remain flat and coplanar.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not introduce a third accent colour (e.g. green for success, grey for disabled). Use only blue, red, and white.",
      "avoid": {
        "html": "<span style=\"color:#00A86B; font-weight:bold;\">Success</span>",
        "label": "Avoid"
      },
      "rule": "Do not introduce a third accent colour (e.g. green for success, grey for disabled). Use only blue, red, and white.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not use rounded corners on cards or buttons (except the perfect circle badge). Maintain the sharp, precise geometry.",
      "avoid": {
        "html": "<div style=\"background:white; border-radius:8px; padding:16px;\">Rounded card — not allowed</div>",
        "label": "Avoid"
      },
      "rule": "Do not use rounded corners on cards or buttons (except the perfect circle badge). Maintain the sharp, precise geometry.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "doAvoidStyle": "Never apply rounded corners (except PerfectCircleBadge). Never use box-shadow. Never introduce a third colour. Never use red for body text or large fills.",
  "effects": [],
  "motion": [],
  "colors": {
    "primary": "#0033A0",
    "secondary": "#E31837",
    "surface": "#FFFFFF",
    "onSurface": "#1A1A1A",
    "border": "#0033A0",
    "error": "#E31837",
    "onBg": "#1A1A1A"
  },
  "typography": {
    "display": {
      "fontFamily": "Inter",
      "fontSize": "48px",
      "fontWeight": 700,
      "lineHeight": 1.1,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "Inter",
      "fontSize": "30px",
      "fontWeight": 700,
      "lineHeight": 1.2,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "Inter",
      "fontSize": "20px",
      "fontWeight": 700,
      "lineHeight": 1.3,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "Inter",
      "fontSize": "16px",
      "fontWeight": 400,
      "lineHeight": 1.5,
      "letterSpacing": "0em"
    },
    "label": {
      "fontFamily": "Inter",
      "fontSize": "12px",
      "fontWeight": 700,
      "lineHeight": 1.2,
      "letterSpacing": "0.05em",
      "textTransform": "uppercase"
    }
  },
  "layouts": {
    "copy": {
      "heroKicker": "AUTHORITATIVE IDENTITY SYSTEM",
      "heroHeadline": "REFINERY COMMAND CENTER",
      "heroSub": "Real-time monitoring and dispatch for bulk fuel terminals. Strict two-colour palette. Zero noise.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#0033A0;color:white;border:0;height:40px;padding:8px 16px;font:700 12px/1 Inter;letter-spacing:0.05em;text-transform:uppercase;\">INITIALISE</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:transparent;color:#0033A0;border:1px solid #0033A0;height:40px;padding:8px 16px;font:700 12px/1 Inter;letter-spacing:0.05em;text-transform:uppercase;\">VIEW SPEC</button>",
      "navLinks": [
        "TERMINALS",
        "PIPELINE",
        "TANK FARM",
        "DISPATCH"
      ],
      "features": [
        {
          "title": "TANK INVENTORY",
          "desc": "Live barrel count across all storage vessels with automated alerts.",
          "icon": "🛢️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🛢️ TANK INVENTORY</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Live barrel count across all storage vessels with automated alerts.</div></div>"
        },
        {
          "title": "PIPE FLOW",
          "desc": "Monitor flow rate and pressure in every pipeline segment.",
          "icon": "🔁",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔁 PIPE FLOW</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Monitor flow rate and pressure in every pipeline segment.</div></div>"
        },
        {
          "title": "DISPATCH CONTROL",
          "desc": "Schedule and release loads with one-button authority.",
          "icon": "🚛",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🚛 DISPATCH CONTROL</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Schedule and release loads with one-button authority.</div></div>"
        },
        {
          "title": "OCTANE MIX",
          "desc": "Real-time blend ratios for premium, regular, and diesel grades.",
          "icon": "⛽",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⛽ OCTANE MIX</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Real-time blend ratios for premium, regular, and diesel grades.</div></div>"
        }
      ],
      "ctaStripHeadline": "COMMISSION YOUR TERMINAL",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#0033A0;color:white;border:0;height:40px;padding:8px 16px;font:700 12px/1 Inter;letter-spacing:0.05em;text-transform:uppercase;\">REQUEST ACCESS</button>",
      "sidebarBrand": "MOBIL",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "GRID",
          "active": true
        },
        {
          "icon": "◉",
          "label": "TANKS",
          "active": false
        }
      ],
      "dashboardTitle": "MAIN BOARD",
      "metrics": [
        {
          "label": "BULK STORAGE",
          "value": "184,200 BBL",
          "delta": "+2.4%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "DAILY THROUGHPUT",
          "value": "12,400 BBL",
          "delta": "-0.8%",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "ACTIVE PIPELINES",
          "value": "7",
          "delta": "0",
          "dir": "flat",
          "direction": "flat"
        },
        {
          "label": "LOADING BAYS",
          "value": "9/12",
          "delta": "+1",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "PIPELINE FLOW (BBL/D)",
      "panelATitle": "LOADING LOG",
      "panelARows": [
        {
          "label": "TANK 7",
          "value": "18,200 BBL",
          "pct": 18
        },
        {
          "label": "TANK 12",
          "value": "24,500 BBL",
          "pct": 24
        },
        {
          "label": "TANK 19",
          "value": "12,800 BBL",
          "pct": 12
        },
        {
          "label": "TANK 23",
          "value": "9,600 BBL",
          "pct": 9
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "BAY STATUS",
      "panelBCells": [
        {
          "label": "BAY 1",
          "value": "LOADING",
          "state": "ok"
        },
        {
          "label": "BAY 2",
          "value": "IDLE",
          "state": "warn"
        },
        {
          "label": "BAY 3",
          "value": "LOADING",
          "state": "err"
        },
        {
          "label": "BAY 4",
          "value": "IDLE",
          "state": "ok"
        },
        {
          "label": "BAY 5",
          "value": "MAINTENANCE",
          "state": "warn"
        },
        {
          "label": "BAY 6",
          "value": "LOADING",
          "state": "err"
        },
        {
          "label": "BAY 7",
          "value": "IDLE",
          "state": "ok"
        },
        {
          "label": "BAY 8",
          "value": "LOADING",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "MON",
        "TUE",
        "WED",
        "THU",
        "FRI",
        "SAT"
      ],
      "series": [
        {
          "data": [
            12,
            15,
            11,
            14,
            13,
            16,
            16,
            16,
            16,
            16,
            16,
            16
          ],
          "label": "LINE A",
          "axis": "left",
          "color": "#0033A0"
        },
        {
          "data": [
            8,
            10,
            9,
            11,
            7,
            12,
            12,
            12,
            12,
            12,
            12,
            12
          ],
          "label": "LINE B",
          "axis": "right-1",
          "color": "#E31837"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'min-height:480px; padding:64px 32px; display:flex; flex-direction:column; justify-content:center; background:#FFFFFF;'; el.innerHTML = '<div style=\"display:flex;align-items:center;gap:0;font-family:var(--font-display);font-weight:700;font-size:48px;letter-spacing:-0.025em;color:var(--primary);margin-bottom:16px;\"><span style=\"text-transform:uppercase;\">MOB</span><span style=\"display:inline-block;width:0.9em;height:0.9em;background:var(--secondary-col);border-radius:9999px;margin:0 0.05em;\"></span><span style=\"text-transform:uppercase;\">L</span></div><hr style=\"border:none;border-top:2px solid var(--secondary-col);margin:32px 0;\"><p style=\"font-family:var(--font-display);font-size:12px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;color:var(--primary);margin:0 0 8px;\">AUTHORITATIVE IDENTITY SYSTEM</p><h1 style=\"font-family:var(--font-display);font-size:48px;font-weight:700;letter-spacing:-0.025em;text-transform:uppercase;color:var(--on-bg);margin:0 0 16px;\">REFINERY COMMAND CENTER</h1><p style=\"font-family:var(--font-body);font-size:16px;line-height:1.5;color:var(--on-bg-muted);margin:0 0 32px;max-width:600px;\">Real-time monitoring and dispatch for bulk fuel terminals. Strict two-colour palette. Zero noise.</p><div style=\"display:flex;gap:16px;\"><button style=\"background:var(--primary);color:var(--on-primary);border:2px solid var(--primary);border-radius:0;padding:8px 24px;height:40px;font-family:var(--font-display);font-weight:700;font-size:12px;letter-spacing:0.05em;text-transform:uppercase;cursor:pointer;line-height:1;\">INITIALISE</button><button style=\"background:transparent;color:var(--primary);border:2px solid var(--primary);border-radius:0;padding:8px 24px;height:40px;font-family:var(--font-display);font-weight:700;font-size:12px;letter-spacing:0.05em;text-transform:uppercase;cursor:pointer;line-height:1;\">VIEW SPEC</button></div>'; }",
    "showcaseRender": "function(el) { el.style.cssText = 'display:flex;flex-wrap:wrap;gap:16px;padding:32px;background:#FFFFFF;'; el.innerHTML = '<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🛢️ TANK INVENTORY</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Live barrel count across all storage vessels with automated alerts.</div></div><div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔁 PIPE FLOW</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Monitor flow rate and pressure in every pipeline segment.</div></div><div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🚛 DISPATCH CONTROL</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Schedule and release loads with one-button authority.</div></div><div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⛽ OCTANE MIX</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Real-time blend ratios for premium, regular, and diesel grades.</div></div>'; }",
    "panelCRender": "function(el) { el.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:16px;padding:32px;background:#FFFFFF;'; var html = '<div style=\"border:1px solid var(--border);padding:16px;\"><h3 style=\"font-family:var(--font-display);font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:var(--primary);margin:0 0 16px;\">LOADING LOG</h3><div style=\"font-family:var(--font-body);font-size:12px;color:var(--on-bg);\">TANK 7: 18,200 BBL (18%)</div><div style=\"font-family:var(--font-body);font-size:12px;color:var(--on-bg);\">TANK 12: 24,500 BBL (24%)</div><div style=\"font-family:var(--font-body);font-size:12px;color:var(--on-bg);\">TANK 19: 12,800 BBL (12%)</div><div style=\"font-family:var(--font-body);font-size:12px;color:var(--on-bg);\">TANK 23: 9,600 BBL (9%)</div></div><div style=\"border:1px solid var(--border);padding:16px;\"><h3 style=\"font-family:var(--font-display);font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:var(--primary);margin:0 0 16px;\">BAY STATUS</h3><div style=\"display:grid;grid-template-columns:1fr 1fr;gap:8px;\"><div style=\"display:flex;justify-content:space-between;font-family:var(--font-body);font-size:12px;color:var(--on-bg);\"><span>BAY 1</span><span style=\"color:var(--primary);font-weight:700;\">LOADING</span></div><div style=\"display:flex;justify-content:space-between;font-family:var(--font-body);font-size:12px;color:var(--on-bg);\"><span>BAY 2</span><span style=\"color:var(--secondary-col);font-weight:700;\">IDLE</span></div><div style=\"display:flex;justify-content:space-between;font-family:var(--font-body);font-size:12px;color:var(--on-bg);\"><span>BAY 3</span><span style=\"color:var(--secondary-col);font-weight:700;\">LOADING</span></div><div style=\"display:flex;justify-content:space-between;font-family:var(--font-body);font-size:12px;color:var(--on-bg);\"><span>BAY 4</span><span style=\"color:var(--primary);font-weight:700;\">IDLE</span></div><div style=\"display:flex;justify-content:space-between;font-family:var(--font-body);font-size:12px;color:var(--on-bg);\"><span>BAY 5</span><span style=\"color:var(--secondary-col);font-weight:700;\">MAINTENANCE</span></div><div style=\"display:flex;justify-content:space-between;font-family:var(--font-body);font-size:12px;color:var(--on-bg);\"><span>BAY 6</span><span style=\"color:var(--secondary-col);font-weight:700;\">LOADING</span></div><div style=\"display:flex;justify-content:space-between;font-family:var(--font-body);font-size:12px;color:var(--on-bg);\"><span>BAY 7</span><span style=\"color:var(--primary);font-weight:700;\">IDLE</span></div><div style=\"display:flex;justify-content:space-between;font-family:var(--font-body);font-size:12px;color:var(--on-bg);\"><span>BAY 8</span><span style=\"color:var(--secondary-col);font-weight:700;\">LOADING</span></div></div></div>'; el.innerHTML = html; }",
    "heroBackground": "function(el) { el.style.background = '#FFFFFF'; }",
    "ctaBackground": "function(el) { el.style.background = '#FFFFFF'; }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'height:2px;background:var(--secondary-col);margin:32px 0;border:none;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = '#FFFFFF'; }",
    "surfaceOverlay": "function(el) { var ov = document.createElement('div'); ov.style.cssText = 'position:absolute;inset:0;pointer-events:none;'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(tick) { var d = document.createElement('div'); var x = 10 + 30*Math.sin(tick*0.1); var y = 30 + 20*Math.cos(tick*0.08); d.style.cssText = 'position:absolute;inset:0;pointer-events:none;background:radial-gradient(circle at '+x+'% '+y+'%, rgba(0,51,160,0.03) 0%, transparent 50%);'; return d; }",
  "shadcnTokens": {
    "--color-background": "#FFFFFF",
    "--color-popover": "#FFFFFF",
    "--color-foreground": "#1A1A1A",
    "--color-card-foreground": "#1A1A1A",
    "--color-popover-foreground": "#1A1A1A",
    "--color-card": "#FFFFFF",
    "--color-muted": "#FFFFFF",
    "--color-muted-foreground": "#6B6B6B",
    "--color-primary": "#0033A0",
    "--color-ring": "#0033A0",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#E31837",
    "--color-accent": "#E31837",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
    "--color-border": "#0033A0",
    "--color-input": "#0033A0",
    "--color-destructive": "#E31837"
  },
  "shadcnTokensClassic": {
    "--background": "#FFFFFF",
    "--popover": "#FFFFFF",
    "--foreground": "#1A1A1A",
    "--card-foreground": "#1A1A1A",
    "--popover-foreground": "#1A1A1A",
    "--card": "#FFFFFF",
    "--muted": "#FFFFFF",
    "--muted-foreground": "#6B6B6B",
    "--primary": "#0033A0",
    "--ring": "#0033A0",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#E31837",
    "--accent": "#E31837",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#0033A0",
    "--input": "#0033A0",
    "--destructive": "#E31837"
  }
});
