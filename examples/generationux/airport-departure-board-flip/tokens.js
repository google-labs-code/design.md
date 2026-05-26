registerSystem({
  "meta": {
    "name": "Airport Departure Board Flip",
    "tagline": "Retro-futuristic split-flap departure board simulation",
    "mode": "dark",
    "fontImport": "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap"
  },
  "yamlTokens": {
    "name": "Airport Departure Board Flip",
    "colors": {
      "error": "#CC0000",
      "surface": "#F5F0E0",
      "on-surface": "#0A0A0A",
      "outline": "#B3A899",
      "surface-dark": "#0A0A0A",
      "on-surface-dark": "#FFB000",
      "outline-dark": "#2A2A2A"
    },
    "typography": {
      "display": {
        "fontFamily": "JetBrains Mono",
        "fontSize": "36px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "JetBrains Mono",
        "fontSize": "30px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "JetBrains Mono",
        "fontSize": "20px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "JetBrains Mono",
        "fontSize": "16px",
        "fontWeight": 400,
        "lineHeight": 1.25,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "label": {
        "fontFamily": "JetBrains Mono",
        "fontSize": "14px",
        "fontWeight": 400,
        "lineHeight": 1.25,
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
      "component-internal": "4px",
      "section-internal": "16px",
      "page-edge": "32px",
      "gap-component": "4px",
      "gap-section": "16px",
      "height-sm": "32px",
      "height-md": "40px",
      "height-lg": "48px"
    },
    "components": {
      "board-frame": {
        "backgroundColor": "#0A0A0A",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "card-cell": {
        "backgroundColor": "#1A1A1A",
        "textColor": "#FFB000",
        "rounded": "{rounded.card}",
        "padding": "4px"
      },
      "column-header": {
        "backgroundColor": "#0A0A0A",
        "textColor": "#FFB000",
        "rounded": "{rounded.card}",
        "padding": "4px"
      },
      "status-ok": {
        "textColor": "#FFB000"
      },
      "status-err": {
        "textColor": "{colors.error}"
      },
      "metric-cell": {
        "backgroundColor": "#1A1A1A",
        "textColor": "#FFB000",
        "rounded": "{rounded.card}",
        "padding": "4px"
      },
      "stuck-flap": {
        "backgroundColor": "#1A1A1A",
        "textColor": "#FFB000",
        "rounded": "{rounded.card}"
      }
    },
    "version": "alpha",
    "description": "A retro-futuristic simulation of electromechanical split-flap departure boards featuring strict monospaced grids, warm amber on near-black surfaces, visible hinge gaps, and mechanical flip animations. The style evokes vintage airport terminal signage through tactile realism, grain overlays, and deliberate mechanical imperfection.",
    "provenance": {
      "coverage_status": "complete",
      "identity_description": "The slug `airport-departure-board-flip` refers to the split-flap display (also called flip-disc, flap board, Solari board) — a mechanical information display system historically used for departure and arrival information at airports, railway stations, bus terminals, and other public transport hubs. The most culturally and technically significant implementation is the system manufactured by S",
      "manual_enrichment_required": false,
      "imagery_count": 8,
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
          "host": "commons.wikimedia.org",
          "count": 1
        },
        {
          "host": "patents.google.com",
          "count": 1
        },
        {
          "host": "www.museoscienza.org",
          "count": 1
        },
        {
          "host": "collection.sciencemuseumgroup.org.uk",
          "count": 1
        },
        {
          "host": "www.bbc.co.uk",
          "count": 1
        },
        {
          "host": "www.moma.org",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://en.wikipedia.org/wiki/Split-flap_display",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia",
          "confidence_original": "high"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Solari_di_Udine",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia",
          "confidence_original": "high"
        },
        {
          "url": "https://commons.wikimedia.org/wiki/Category:Split-flap_displays",
          "host": "commons.wikimedia.org",
          "institution": "Wikimedia Commons",
          "confidence_original": "high"
        },
        {
          "url": "https://patents.google.com/patent/US3040454A/en",
          "host": "patents.google.com",
          "institution": "Google Patents",
          "confidence_original": "high"
        },
        {
          "url": "https://www.museoscienza.org/it/collezione/solari-flap-display",
          "host": "www.museoscienza.org",
          "institution": "Museo Nazionale della Scienza e della Tecnologia, Milan",
          "confidence_original": "low"
        },
        {
          "url": "https://collection.sciencemuseumgroup.org.uk/",
          "host": "collection.sciencemuseumgroup.org.uk",
          "institution": "Science Museum, London",
          "confidence_original": "low"
        },
        {
          "url": "https://www.bbc.co.uk/topics/c01yxyz46myt",
          "host": "www.bbc.co.uk",
          "institution": "BBC Archive",
          "confidence_original": "low"
        },
        {
          "url": "https://www.moma.org/",
          "host": "www.moma.org",
          "institution": "Museum of Modern Art, New York",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Solari flap font",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "unverified"
        }
      ],
      "flags": [
        "1_rate_limited_urls_pending_retry"
      ],
      "honest_gaps": [
        {
          "\"1. **Colour specification (yellow)** — No published Pantone, RAL, or RGB value from a primary source. Resolution": "locate a factory paint sample or a spectrophotometric reading from an original flap in museum storage.\""
        }
      ]
    }
  },
  "colorMode": "dark",
  "tokens": {
    "--bg": "#0A0A0A",
    "--on-bg": "#FFB000",
    "--primary": "#FFB000",
    "--on-primary": "#0A0A0A",
    "--secondary-col": "#F5E6C8",
    "--on-secondary": "#0A0A0A",
    "--surface": "#1A1A1A",
    "--on-bg-muted": "#B37400",
    "--border": "#2A2A2A",
    "--error": "#CC0000",
    "--font-display": "JetBrains Mono",
    "--font-body": "JetBrains Mono",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "surface": "#0A0A0A",
    "on-surface": "#FFB000",
    "on-surface-variant": "#F5E6C8",
    "surface-dark": "#0A0A0A",
    "outline": "#2A2A2A",
    "error": "#CC0000",
    "err": "#CC0000",
    "warn": "#FF8C42",
    "ok": "#22C55E",
    "deltaUp": "#22C55E",
    "deltaDown": "#CC0000",
    "deltaFlat": "#B37400",
    "live": "#FFB000",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#B37400",
    "chartFont": "JetBrains Mono"
  },
  "chartStyle": {
    "type": "none",
    "note": "No charts; departure board displays tabular data only.",
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#B37400",
    "fontFamily": "JetBrains Mono"
  },
  "surfaceModel": "bevel",
  "materialSimulation": {
    "model": "printed-plastic",
    "params": {
      "texture": "matte grainy",
      "edgeHighlight": "0 1px 0 rgba(255,255,255,0.15), 0 -1px 0 rgba(0,0,0,0.3)",
      "hingeGap": "1px solid #2A2A2A",
      "grainFilter": "url(#airport-grain)",
      "scanlines": "repeating-linear-gradient",
      "boardShadow": "2px 2px 0 rgba(0,0,0,0.8)"
    }
  },
  "interactionModel": {
    "hover": null,
    "focus": "none",
    "active": null,
    "transition": {
      "duration": "150ms",
      "easing": "cubic-bezier(0.34, 1.56, 0.64, 1)"
    }
  },
  "interactionStyles": null,
  "globalFilter": "<svg xmlns=\"http://www.w3.org/2000/svg\"><defs><filter id=\"airport-grain\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.75\" numOctaves=\"3\" stitchTiles=\"stitch\" result=\"noise\"/><feColorMatrix type=\"saturate\" values=\"0\" in=\"noise\" result=\"grayNoise\"/><feComponentTransfer in=\"grayNoise\" result=\"softNoise\"><feFuncA type=\"linear\" slope=\"0.06\"/></feComponentTransfer><feBlend in=\"SourceGraphic\" in2=\"softNoise\" mode=\"multiply\"/></filter></defs></svg>",
  "globalBodyCss": "font-family: 'JetBrains Mono', monospace; background: #0A0A0A; color: #FFB000; text-transform: uppercase; font-weight: 400; line-height: 1.25; letter-spacing: 0em;",
  "globalCss": ".ds-layout-frame .card-cell { position: relative; overflow: hidden; } .ds-layout-frame .card-cell::after { content: \"\"; position: absolute; left: 0; right: 0; top: 50%; height: 1px; background: #2A2A2A; transform: translateY(-50%); pointer-events: none; } .ds-layout-frame .airport-board { position: relative; } .ds-layout-frame .airport-board::before { content: \"\"; position: absolute; inset: 0; background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px); pointer-events: none; mix-blend-mode: multiply; z-index: 2; } .ds-layout-frame .column-header { text-transform: uppercase; letter-spacing: 0.025em; opacity: 0.85; } .ds-layout-frame .card-cell, .ds-layout-frame .metric-cell, .ds-layout-frame .stuck-flap { text-transform: uppercase; }",
  "spacing": {
    "component-internal": "4px",
    "section-internal": "16px",
    "page-edge": "32px",
    "gap-component": "4px",
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
    "board": {
      "shadow": "2px 2px 0 rgba(0,0,0,0.8)"
    },
    "card": {
      "inset": "0 1px 0 rgba(255,255,255,0.15), 0 -1px 0 rgba(0,0,0,0.3)"
    },
    "stackingContext": "single plane"
  },
  "dashboardStyle": {
    "layout": "strict horizontal grid with fixed column widths, uniform row heights",
    "density": "tight (4px gap between rows and columns)",
    "panelTreatment": "board-frame as outer container, data-row panels for each departure, column headers fixed at top",
    "dataVizStyle": "none; all data is tabular monospaced text",
    "signatureElement": "visible 1px hinge gap across each character cell"
  },
  "landingStyle": {
    "heroApproach": "full-screen departure board with realtime clock and simulated flip animations on load",
    "scrollBehavior": "no scroll; single viewport board that updates data set piecewise",
    "ctaStyle": "no call-to-action; board is purely informational",
    "signatureMoment": "flip animation of flight numbers and statuses when data changes"
  },
  "buttons": [
    {
      "name": "flip-primary",
      "desc": "Primary action button styled as a split-flap cell. Hinge line visible. Monospaced uppercase amber on dark.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"font-family: var(--font-body); font-size: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.025em; background-color: var(--surface); color: var(--primary); border: 0; padding: 4px 16px; min-height: 32px; border-radius: var(--radius-default); position: relative; cursor: pointer;\"><span style=\"display: block; position: relative; z-index: 1;\">DEPART</span><span style=\"display: block; position: absolute; left: 0; right: 0; top: 50%; height: 1px; background-color: var(--border); z-index: 2;\"></span></button>",
      "label": "flip-primary",
      "note": "Primary action button styled as a split-flap cell. Hinge line visible. Monospaced uppercase amber on dark."
    },
    {
      "name": "flip-secondary",
      "desc": "Secondary button with inverted colors: amber background, dark text, same hinge line.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"font-family: var(--font-body); font-size: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.025em; background-color: var(--primary); color: var(--bg); border: 0; padding: 4px 16px; min-height: 32px; border-radius: var(--radius-default); position: relative; cursor: pointer;\"><span style=\"display: block; position: relative; z-index: 1;\">GATE</span><span style=\"display: block; position: absolute; left: 0; right: 0; top: 50%; height: 1px; background-color: var(--border); z-index: 2;\"></span></button>",
      "label": "flip-secondary",
      "note": "Secondary button with inverted colors: amber background, dark text, same hinge line."
    },
    {
      "name": "flip-ghost",
      "desc": "Outline button, transparent background, amber border and text, hinge line.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"font-family: var(--font-body); font-size: 16px; font-weight: 400; text-transform: uppercase; letter-spacing: 0.025em; background-color: transparent; color: var(--primary); border: 1px solid var(--primary); padding: 3px 15px; min-height: 32px; border-radius: var(--radius-default); position: relative; cursor: pointer;\"><span style=\"display: block; position: relative; z-index: 1;\">HELP</span><span style=\"display: block; position: absolute; left: 0; right: 0; top: 50%; height: 1px; background-color: var(--border); z-index: 2;\"></span></button>",
      "label": "flip-ghost",
      "note": "Outline button, transparent background, amber border and text, hinge line."
    }
  ],
  "cards": [
    {
      "name": "board-frame",
      "desc": "Outer container for the departure board. Dark background, hard drop shadow, generous padding. Contains all rows and column headers.",
      "html": "<div style=\"background-color: var(--bg); border: 2px solid var(--border); box-shadow: 2px 2px 0 rgba(0,0,0,0.8); padding: 16px; border-radius: var(--radius-card);\"><div style=\"display: flex; flex-direction: column; gap: 4px;\"><div style=\"display: flex; gap: 4px; font-family: var(--font-body); font-size: 14px; font-weight: 700; color: var(--primary); background-color: var(--bg); padding: 4px; text-transform: uppercase;\"><div style=\"width: 80px;\">FLIGHT</div><div style=\"width: 120px;\">DESTINATION</div><div style=\"width: 80px;\">TIME</div><div style=\"width: 100px;\">STATUS</div><div style=\"width: 60px;\">GATE</div></div><div style=\"display: flex; gap: 4px; font-family: var(--font-body); font-size: 16px; color: var(--primary); background-color: var(--surface); padding: 4px; border-radius: var(--radius-default);\"><div style=\"width: 80px; position: relative;\">AB123<span style=\"display: block; position: absolute; left: 0; right: 0; top: 50%; height: 1px; background-color: var(--border);\"></span></div><div style=\"width: 120px; position: relative;\">LONDON<span style=\"display: block; position: absolute; left: 0; right: 0; top: 50%; height: 1px; background-color: var(--border);\"></span></div><div style=\"width: 80px; position: relative;\">14:30<span style=\"display: block; position: absolute; left: 0; right: 0; top: 50%; height: 1px; background-color: var(--border);\"></span></div><div style=\"width: 100px; position: relative; color: var(--primary);\">ON TIME<span style=\"display: block; position: absolute; left: 0; right: 0; top: 50%; height: 1px; background-color: var(--border);\"></span></div><div style=\"width: 60px; position: relative;\">A1<span style=\"display: block; position: absolute; left: 0; right: 0; top: 50%; height: 1px; background-color: var(--border);\"></span></div></div></div></div>",
      "label": "board-frame",
      "note": "Outer container for the departure board. Dark background, hard drop shadow, generous padding. Contains all rows and column headers."
    },
    {
      "name": "data-row",
      "desc": "A single row of flip cells representing one departure. Each cell shows a character with a hinge gap. Amber on dark, fixed width cells.",
      "html": "<div style=\"display: flex; gap: 4px; font-family: var(--font-body); font-size: 16px; color: var(--primary); background-color: var(--surface); padding: 4px; border-radius: var(--radius-default);\"><div style=\"width: 80px; position: relative;\">CD456<span style=\"display: block; position: absolute; left: 0; right: 0; top: 50%; height: 1px; background-color: var(--border);\"></span></div><div style=\"width: 120px; position: relative;\">PARIS<span style=\"display: block; position: absolute; left: 0; right: 0; top: 50%; height: 1px; background-color: var(--border);\"></span></div><div style=\"width: 80px; position: relative;\">15:45<span style=\"display: block; position: absolute; left: 0; right: 0; top: 50%; height: 1px; background-color: var(--border);\"></span></div><div style=\"width: 100px; position: relative; color: var(--error);\">DELAYED<span style=\"display: block; position: absolute; left: 0; right: 0; top: 50%; height: 1px; background-color: var(--border);\"></span></div><div style=\"width: 60px; position: relative;\">B12<span style=\"display: block; position: absolute; left: 0; right: 0; top: 50%; height: 1px; background-color: var(--border);\"></span></div></div>",
      "label": "data-row",
      "note": "A single row of flip cells representing one departure. Each cell shows a character with a hinge gap. Amber on dark, fixed width cells."
    }
  ],
  "forms": [
    {
      "name": "flip-input",
      "desc": "Text input styled as a flip cell. Placeholder appears as dimmed amber. Faux hinge line across center.",
      "html": "<div style=\"position: relative; display: inline-block;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" placeholder=\"FLIGHT\" style=\"font-family: var(--font-body); font-size: 16px; font-weight: 400; text-transform: uppercase; letter-spacing: 0.025em; background-color: var(--surface); color: var(--primary); border: 1px solid var(--border); padding: 4px; width: 120px; border-radius: var(--radius-default); caret-color: var(--primary);\" /><span style=\"display: block; position: absolute; left: 0; right: 0; top: 50%; height: 1px; background-color: var(--border); pointer-events: none;\"></span></div>",
      "label": "flip-input",
      "stateLabel": "Text input styled as a flip cell. Placeholder appears as dimmed amber. Faux hinge line across center."
    },
    {
      "name": "flip-select",
      "desc": "Dropdown styled as flip cells. Arrow icon replaced by a small amber triangle. Hinge line preserved.",
      "html": "<div style=\"position: relative; display: inline-block;\"><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"font-family: var(--font-body); font-size: 16px; font-weight: 400; text-transform: uppercase; letter-spacing: 0.025em; background-color: var(--surface); color: var(--primary); border: 1px solid var(--border); padding: 4px; width: 120px; border-radius: var(--radius-default); appearance: none; -webkit-appearance: none; -moz-appearance: none; background-image: url(\\x27data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"8\" viewBox=\"0 0 12 8\"><polygon points=\"0,0 12,0 6,8\" fill=\"%23FFB000\"/></svg>\\x27); background-repeat: no-repeat; background-position: right 4px center; padding-right: 20px;\"><option value=\"all\">ALL GATES</option><option value=\"A\">GATE A</option><option value=\"B\">GATE B</option></select><span style=\"display: block; position: absolute; left: 0; right: 0; top: 50%; height: 1px; background-color: var(--border); pointer-events: none;\"></span></div>",
      "label": "flip-select",
      "stateLabel": "Dropdown styled as flip cells. Arrow icon replaced by a small amber triangle. Hinge line preserved."
    },
    {
      "name": "flip-checkbox",
      "desc": "Checkbox toggle styled as a small flip card. When checked, the hinge line reveals an amber indicator.",
      "html": "<label style=\"font-family: var(--font-body); font-size: 14px; text-transform: uppercase; color: var(--primary); display: inline-flex; align-items: center; gap: 4px; cursor: pointer;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"width: 0; height: 0; opacity: 0;\" /><span style=\"display: inline-flex; align-items: center; justify-content: center; width: 20px; height: 20px; background-color: var(--surface); border: 1px solid var(--border); position: relative;\"><span style=\"display: block; position: absolute; left: 2px; right: 2px; top: 50%; height: 1px; background-color: var(--border);\"></span><span style=\"display: none; color: var(--primary); font-size: 12px; line-height: 1;\">✓</span></span>NOTIFY</label>",
      "label": "flip-checkbox",
      "stateLabel": "Checkbox toggle styled as a small flip card. When checked, the hinge line reveals an amber indicator."
    }
  ],
  "extraComponents": [
    {
      "name": "status-tag",
      "desc": "Status indicator, all-caps monospaced. Shown in amber for OK, red for error. No background.",
      "html": "<span style=\"font-family: var(--font-body); font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.025em; color: var(--primary);\">ON TIME</span><span style=\"font-family: var(--font-body); font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.025em; color: var(--error); margin-left: 8px;\">CANCELLED</span>"
    },
    {
      "name": "stuck-flap",
      "desc": "A flip cell that is visually stuck mid-flip. Half of character visible, split diagonally or with skewed content.",
      "html": "<div style=\"position: relative; width: 32px; height: 32px; background-color: var(--surface); overflow: hidden;\"><div style=\"position: absolute; left: 0; right: 0; top: 0; bottom: 50%; background-color: var(--surface); color: var(--primary); font-family: var(--font-body); font-size: 16px; line-height: 1; padding: 4px; display: flex; align-items: flex-end;\">A</div><div style=\"position: absolute; left: 0; right: 0; top: 50%; bottom: 0; background-color: var(--surface); color: var(--primary); font-family: var(--font-body); font-size: 16px; line-height: 1; padding: 4px; display: flex; align-items: flex-start; transform: rotateX(45deg); transform-origin: top center;\">B</div><div style=\"position: absolute; left: 0; right: 0; top: 50%; height: 1px; background-color: var(--border);\"></div></div>"
    },
    {
      "name": "metric-cell",
      "desc": "Cell for numeric data, e.g., flight duration or count. Includes unit label below or alongside as smaller text.",
      "html": "<div style=\"font-family: var(--font-body); font-size: 16px; font-weight: 400; text-transform: uppercase; color: var(--primary); background-color: var(--surface); padding: 4px; border-radius: var(--radius-default); display: inline-flex; align-items: baseline; gap: 2px;\"><span style=\"font-weight: 700;\">$\\infty$</span><span style=\"font-size: 12px; letter-spacing: 0.025em;\">FLIGHTS</span></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — DEPARTURES</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — FLIGHTS TO LONDON</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — GATE A12 STATUS</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — BOARDING AT 14:30 GATE B7</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — FLIGHT DESTINATION TIME STATUS GATE</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Rounded corners on any element break the rigid mechanical illusion of the split-flap board.",
      "avoid": {
        "html": "<div style=\"border-radius: 8px; background-color: #1A1A1A; color: #FFB000; padding: 8px;\">FLIGHT</div>",
        "label": "Avoid"
      },
      "rule": "Rounded corners on any element break the rigid mechanical illusion of the split-flap board.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:80px;height:40px;background-color:var(--surface);color:var(--primary);font-family:var(--font-body);font-size:16px;text-transform:uppercase;display:flex;align-items:center;justify-content:center;position:relative;\">AB<span style=\"display:block;position:absolute;left:0;right:0;top:50%;height:1px;background-color:var(--border);\"></span></div>"
      }
    },
    {
      "desc": "Variable-width fonts or serifs destroy the uniform grid required for split-flap character cells.",
      "avoid": {
        "html": "<div style=\"font-family: Georgia; font-size: 16px; text-transform: uppercase; color: #FFB000; background-color: #0A0A0A;\">A12</div>",
        "label": "Avoid"
      },
      "rule": "Variable-width fonts or serifs destroy the uniform grid required for split-flap character cells.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:80px;height:40px;background-color:var(--surface);color:var(--primary);font-family:var(--font-body);font-size:16px;text-transform:uppercase;display:flex;align-items:center;justify-content:center;position:relative;\">FL<span style=\"display:block;position:absolute;left:0;right:0;top:50%;height:1px;background-color:var(--border);\"></span></div>"
      }
    },
    {
      "desc": "Smooth gradients on text or backgrounds contradict the matte, plastic material of the flaps.",
      "avoid": {
        "html": "<div style=\"background: linear-gradient(#1A1A1A, #0A0A0A); color: #FFB000; font-size: 20px;\">GRADIENT</div>",
        "label": "Avoid"
      },
      "rule": "Smooth gradients on text or backgrounds contradict the matte, plastic material of the flaps.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:80px;height:40px;background-color:var(--surface);color:var(--primary);font-family:var(--font-body);font-size:16px;text-transform:uppercase;display:flex;align-items:center;justify-content:center;position:relative;\">12<span style=\"display:block;position:absolute;left:0;right:0;top:50%;height:1px;background-color:var(--border);\"></span></div>"
      }
    },
    {
      "desc": "Seamless continuous text without the midline hinge gap makes the display look like an LCD panel, not a mechanical flip board.",
      "avoid": {
        "html": "<div style=\"background-color: #1A1A1A; color: #FFB000; font-size: 16px; font-family: monospace;\">NO HINGE</div>",
        "label": "Avoid"
      },
      "rule": "Seamless continuous text without the midline hinge gap makes the display look like an LCD panel, not a mechanical flip board.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:80px;height:40px;background-color:var(--surface);color:var(--primary);font-family:var(--font-body);font-size:16px;text-transform:uppercase;display:flex;align-items:center;justify-content:center;position:relative;\">00<span style=\"display:block;position:absolute;left:0;right:0;top:50%;height:1px;background-color:var(--border);\"></span></div>"
      }
    }
  ],
  "doAvoidStyle": {
    "forbiddenMoves": [
      "Rounded corners on any element",
      "Variable-width fonts, serifs, or icon fonts",
      "Smooth gradients on text or cell backgrounds",
      "Seamless continuous text without split-flap hinge gap",
      "All characters flipping simultaneously",
      "Smooth ease-in-out transitions without mechanical bounce"
    ]
  },
  "effects": [],
  "motion": [],
  "colors": {
    "error": "#CC0000",
    "surface": "#F5F0E0",
    "on-surface": "#0A0A0A",
    "outline": "#B3A899",
    "surface-dark": "#0A0A0A",
    "on-surface-dark": "#FFB000",
    "outline-dark": "#2A2A2A"
  },
  "typography": {
    "display": {
      "fontFamily": "JetBrains Mono",
      "fontSize": "36px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "JetBrains Mono",
      "fontSize": "30px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "JetBrains Mono",
      "fontSize": "20px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "JetBrains Mono",
      "fontSize": "16px",
      "fontWeight": 400,
      "lineHeight": 1.25,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "label": {
      "fontFamily": "JetBrains Mono",
      "fontSize": "14px",
      "fontWeight": 400,
      "lineHeight": 1.25,
      "letterSpacing": "0.025em",
      "textTransform": "uppercase"
    }
  },
  "layouts": {
    "copy": {
      "heroKicker": "MECHANICAL DISPLAY SYSTEM",
      "heroHeadline": "SPLIT-FLAP DEPARTURE BOARD",
      "heroSub": "RETRO-FUTURISTIC FLIGHT INFORMATION WITH REAL FLIP ANIMATIONS",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">LAUNCH FLIP BOARD</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">VIEW DOCUMENTATION</button>",
      "navLinks": [
        "FLIGHTS",
        "GATES",
        "SCHEDULE",
        "ARCHIVE",
        "MAINTENANCE"
      ],
      "features": [
        {
          "title": "MECHANICAL FLIP",
          "desc": "EACH CHARACTER FLIPS WITH BOUNCE EASING. 80-250MS PER FLAP. NEVER ALL AT ONCE.",
          "icon": "⏱️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⏱️ MECHANICAL FLIP</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">EACH CHARACTER FLIPS WITH BOUNCE EASING. 80-250MS PER FLAP. NEVER ALL AT ONCE.</div></div>"
        },
        {
          "title": "AMBER GLOW",
          "desc": "WARM AMBER TEXT ON NEAR-BLACK BACKGROUND. HIGH CONTRAST, NO GRADIENTS.",
          "icon": "🔥",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔥 AMBER GLOW</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">WARM AMBER TEXT ON NEAR-BLACK BACKGROUND. HIGH CONTRAST, NO GRADIENTS.</div></div>"
        },
        {
          "title": "STRICT GRID",
          "desc": "MONOSPACED CHARACTER CELLS WITH 1PX HINGE GAP. NO ROUNDED CORNERS.",
          "icon": "🔲",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔲 STRICT GRID</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">MONOSPACED CHARACTER CELLS WITH 1PX HINGE GAP. NO ROUNDED CORNERS.</div></div>"
        },
        {
          "title": "PHYSICAL NOISE",
          "desc": "GRAIN OVERLAY AND SCANLINES SIMULATE AGED PLASTIC FLAP MODULES.",
          "icon": "📟",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📟 PHYSICAL NOISE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">GRAIN OVERLAY AND SCANLINES SIMULATE AGED PLASTIC FLAP MODULES.</div></div>"
        },
        {
          "title": "STUCK FLAP SIM",
          "desc": "OCCASIONAL MALFUNCTIONING FLAPS FOR TACTILE REALISM.",
          "icon": "🔧",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔧 STUCK FLAP SIM</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">OCCASIONAL MALFUNCTIONING FLAPS FOR TACTILE REALISM.</div></div>"
        }
      ],
      "ctaStripHeadline": "READY TO DEPLOY YOUR FLIP BOARD?",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">START BUILDING</button>",
      "sidebarBrand": "FLIP DISPLAY",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "BOARD",
          "active": true
        },
        {
          "icon": "◉",
          "label": "SCHEDULE",
          "active": false
        },
        {
          "icon": "◉",
          "label": "GATES",
          "active": false
        },
        {
          "icon": "◉",
          "label": "LOGS",
          "active": false
        }
      ],
      "dashboardTitle": "TERMINAL 1 FLIGHT BOARD",
      "metrics": [
        {
          "label": "ON TIME",
          "value": "34",
          "delta": "+2",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "DELAYED",
          "value": "7",
          "delta": "-1",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "BOARDING",
          "value": "5",
          "delta": "0",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "GATES OPEN",
          "value": "12",
          "delta": "+3",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "CANCELLED",
          "value": "1",
          "delta": "0",
          "dir": "down",
          "direction": "down"
        }
      ],
      "chartTitle": "HOURLY DEPARTURES",
      "panelATitle": "UPCOMING FLIGHTS",
      "panelARows": [
        {
          "label": "FL 301",
          "value": "LHR 08:45",
          "pct": 8
        },
        {
          "label": "FL 204",
          "value": "CDG 09:10",
          "pct": 9
        },
        {
          "label": "FL 112",
          "value": "FRA 09:35",
          "pct": 9
        },
        {
          "label": "FL 408",
          "value": "AMS 10:00",
          "pct": 10
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "GATE ASSIGNMENTS",
      "panelBCells": [
        {
          "label": "GATE A1",
          "value": "FL 301",
          "state": "ok"
        },
        {
          "label": "GATE A2",
          "value": "FL 204",
          "state": "warn"
        },
        {
          "label": "GATE B3",
          "value": "FL 112",
          "state": "err"
        },
        {
          "label": "GATE B4",
          "value": "FL 408",
          "state": "ok"
        },
        {
          "label": "GATE C1",
          "value": "FL 512",
          "state": "warn"
        },
        {
          "label": "GATE C2",
          "value": "FL 620",
          "state": "err"
        },
        {
          "label": "GATE D1",
          "value": "FL 715",
          "state": "ok"
        },
        {
          "label": "GATE D2",
          "value": "FL 819",
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
            4,
            6,
            8,
            7,
            9,
            5,
            5,
            5,
            5,
            5,
            5,
            5
          ],
          "label": "SCHEDULED",
          "axis": "left",
          "color": "#FFB000"
        },
        {
          "data": [
            3,
            5,
            7,
            6,
            8,
            4,
            4,
            4,
            4,
            4,
            4,
            4
          ],
          "label": "DEPARTED",
          "axis": "right-1",
          "color": "#F5E6C8"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:320px;background:var(--bg);padding:32px;position:relative;overflow:hidden;'; el.innerHTML = '<div style=\"font-family:var(--font-display);font-size:40px;font-weight:700;line-height:1.25;color:var(--primary);letter-spacing:-0.025em;text-transform:uppercase;position:relative;z-index:1;\">SPLIT-FLAP<br>DEPARTURE BOARD</div><div style=\"font-family:var(--font-body);font-size:16px;color:var(--on-bg-muted);margin-top:8px;text-transform:uppercase;letter-spacing:0.025em;position:relative;z-index:1;\">MECHANICAL FLIGHT INFORMATION SYSTEM</div><div style=\"display:flex;gap:12px;margin-top:24px;position:relative;z-index:1;\"><button style=\"font-family:var(--font-body);font-size:16px;font-weight:700;text-transform:uppercase;letter-spacing:0.025em;background-color:var(--surface);color:var(--primary);border:0;padding:4px 16px;min-height:32px;border-radius:var(--radius-default);position:relative;cursor:pointer;\"><span style=\"display:block;position:relative;z-index:1;\">LAUNCH FLIP BOARD</span><span style=\"display:block;position:absolute;left:0;right:0;top:50%;height:1px;background-color:var(--border);z-index:2;\"></span></button></div><div style=\"position:absolute;inset:0;pointer-events:none;z-index:0;filter:url(#airport-grain);\"></div>'; }",
    "showcaseRender": "function(el) { el.style.cssText = 'padding:32px;background:var(--bg);position:relative;'; el.innerHTML = '<div style=\"border:2px solid var(--border);box-shadow:2px 2px 0 rgba(0,0,0,0.8);padding:16px;background:var(--bg);\"><div style=\"display:flex;flex-direction:column;gap:4px;\"><div style=\"display:flex;gap:4px;font-family:var(--font-body);font-size:14px;font-weight:700;color:var(--primary);background:var(--bg);padding:4px;text-transform:uppercase;\"><div style=\"width:90px;\">FLIGHT</div><div style=\"width:140px;\">DESTINATION</div><div style=\"width:80px;\">TIME</div><div style=\"width:120px;\">STATUS</div><div style=\"width:60px;\">GATE</div></div><div style=\"display:flex;gap:4px;font-family:var(--font-body);font-size:16px;color:var(--primary);background:var(--surface);padding:4px;\"><div style=\"width:90px;position:relative;\">AB123<span style=\"display:block;position:absolute;left:0;right:0;top:50%;height:1px;background:var(--border);\"></span></div><div style=\"width:140px;position:relative;\">LONDON<span style=\"display:block;position:absolute;left:0;right:0;top:50%;height:1px;background:var(--border);\"></span></div><div style=\"width:80px;position:relative;\">14:30<span style=\"display:block;position:absolute;left:0;right:0;top:50%;height:1px;background:var(--border);\"></span></div><div style=\"width:120px;position:relative;color:var(--primary);\">ON TIME<span style=\"display:block;position:absolute;left:0;right:0;top:50%;height:1px;background:var(--border);\"></span></div><div style=\"width:60px;position:relative;\">A1<span style=\"display:block;position:absolute;left:0;right:0;top:50%;height:1px;background:var(--border);\"></span></div></div><div style=\"display:flex;gap:4px;font-family:var(--font-body);font-size:16px;color:var(--error);background:var(--surface);padding:4px;\"><div style=\"width:90px;position:relative;\">CD456<span style=\"display:block;position:absolute;left:0;right:0;top:50%;height:1px;background:var(--border);\"></span></div><div style=\"width:140px;position:relative;\">PARIS<span style=\"display:block;position:absolute;left:0;right:0;top:50%;height:1px;background:var(--border);\"></span></div><div style=\"width:80px;position:relative;\">15:45<span style=\"display:block;position:absolute;left:0;right:0;top:50%;height:1px;background:var(--border);\"></span></div><div style=\"width:120px;position:relative;color:var(--error);\">DELAYED<span style=\"display:block;position:absolute;left:0;right:0;top:50%;height:1px;background:var(--border);\"></span></div><div style=\"width:60px;position:relative;\">B12<span style=\"display:block;position:absolute;left:0;right:0;top:50%;height:1px;background:var(--border);\"></span></div></div></div></div>'; }",
    "panelCRender": "function(el) { el.style.cssText = 'padding:16px;background:var(--bg);border:1px solid var(--border);font-family:var(--font-body);'; el.innerHTML = '<div style=\"font-size:14px;font-weight:700;color:var(--primary);text-transform:uppercase;letter-spacing:0.025em;margin-bottom:8px;\">UPCOMING FLIGHTS</div><div style=\"display:flex;flex-direction:column;gap:2px;\"><div style=\"display:flex;justify-content:space-between;\"><span style=\"color:var(--primary);\">FL 301 LHR 08:45</span><span style=\"color:var(--on-bg-muted);\">GATE A1</span></div><div style=\"display:flex;justify-content:space-between;\"><span style=\"color:var(--primary);\">FL 204 CDG 09:10</span><span style=\"color:var(--on-bg-muted);\">GATE A2</span></div><div style=\"display:flex;justify-content:space-between;\"><span style=\"color:var(--primary);\">FL 112 FRA 09:35</span><span style=\"color:var(--on-bg-muted);\">GATE B3</span></div></div>'; }",
    "heroBackground": "function(el) { el.style.background = '#0A0A0A'; var neon = document.createElement('div'); neon.style.cssText = 'position:absolute;inset:0;background:radial-gradient(ellipse at 50% 30%, rgba(255,176,0,0.08) 0%, transparent 60%);pointer-events:none;'; el.appendChild(neon); var grain = document.createElement('div'); grain.style.cssText = 'position:absolute;inset:0;background-image:url(\"data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'200\\' height=\\'200\\'%3E%3Cfilter id=\\'n\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.8\\' numOctaves=\\'3\\' stitchTiles=\\'stitch\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23n)\\''%3E%3C/rect%3E%3C/svg%3E\");opacity:0.04;pointer-events:none;mix-blend-mode:multiply;'; el.appendChild(grain); }",
    "ctaBackground": "function(el) { el.style.background = '#0A0A0A'; var line = document.createElement('div'); line.style.cssText = 'position:absolute;left:0;right:0;top:0;height:1px;background:var(--border);'; el.appendChild(line); var bottom = document.createElement('div'); bottom.style.cssText = 'position:absolute;left:0;right:0;bottom:0;height:1px;background:var(--border);'; el.appendChild(bottom); }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'height:4px;background:var(--border);margin:16px 32px;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = 'var(--bg)'; var border = document.createElement('div'); border.style.cssText = 'position:absolute;inset:0;border:2px solid var(--border);box-shadow:2px 2px 0 rgba(0,0,0,0.8);pointer-events:none;'; el.appendChild(border); }",
    "surfaceOverlay": "function(el) { var ov = document.createElement('div'); ov.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.06) 2px,rgba(0,0,0,0.06) 4px);mix-blend-mode:multiply;'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(container, tick, config) { var c = document.createElement('canvas'); c.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:1;opacity:0.06;mix-blend-mode:multiply;'; c.width = container.offsetWidth; c.height = container.offsetHeight; var ctx = c.getContext('2d'); var primary = config.tokens['--primary'] || '#FFB000'; ctx.fillStyle = primary; for (var i = 0; i < 800; i++) { var x = Math.random() * c.width; var y = Math.random() * c.height; var size = Math.random() * 2 + 0.5; var alpha = Math.sin((tick / 1000) + x * 0.01 + y * 0.01) * 0.3 + 0.5; ctx.globalAlpha = alpha; ctx.fillRect(x, y, size, size); } container.appendChild(c); }",
  "shadcnTokens": {
    "--color-background": "#0A0A0A",
    "--color-popover": "#0A0A0A",
    "--color-foreground": "#FFB000",
    "--color-card-foreground": "#FFB000",
    "--color-popover-foreground": "#FFB000",
    "--color-card": "#1A1A1A",
    "--color-muted": "#1A1A1A",
    "--color-muted-foreground": "#B37400",
    "--color-primary": "#FFB000",
    "--color-ring": "#FFB000",
    "--color-primary-foreground": "#0A0A0A",
    "--color-secondary": "#F5E6C8",
    "--color-accent": "#F5E6C8",
    "--color-secondary-foreground": "#0A0A0A",
    "--color-accent-foreground": "#0A0A0A",
    "--color-border": "#2A2A2A",
    "--color-input": "#2A2A2A",
    "--color-destructive": "#CC0000"
  },
  "shadcnTokensClassic": {
    "--background": "#0A0A0A",
    "--popover": "#0A0A0A",
    "--foreground": "#FFB000",
    "--card-foreground": "#FFB000",
    "--popover-foreground": "#FFB000",
    "--card": "#1A1A1A",
    "--muted": "#1A1A1A",
    "--muted-foreground": "#B37400",
    "--primary": "#FFB000",
    "--ring": "#FFB000",
    "--primary-foreground": "#0A0A0A",
    "--secondary": "#F5E6C8",
    "--accent": "#F5E6C8",
    "--secondary-foreground": "#0A0A0A",
    "--accent-foreground": "#0A0A0A",
    "--border": "#2A2A2A",
    "--input": "#2A2A2A",
    "--destructive": "#CC0000"
  }
});
