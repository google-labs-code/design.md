registerSystem({
  "meta": {
    "name": "Ceefax",
    "tagline": "Rooted in the BBC's teletext service (1974–2012)",
    "mode": "dark",
    "fontImport": "https://fonts.googleapis.com/css2?family=VT323&display=swap"
  },
  "yamlTokens": {
    "name": "Ceefax",
    "colors": {
      "ok": "#00AA00",
      "warn": "#AAAA00",
      "err": "#AA0000",
      "delta-up": "#00AA00",
      "delta-down": "#AA0000",
      "delta-flat": "#FFFFFF"
    },
    "typography": {
      "display": {
        "fontFamily": "monospace",
        "fontSize": "16px",
        "fontWeight": 400,
        "lineHeight": 1,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "monospace",
        "fontSize": "16px",
        "fontWeight": 400,
        "lineHeight": 1,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "monospace",
        "fontSize": "16px",
        "fontWeight": 400,
        "lineHeight": 1,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "monospace",
        "fontSize": "16px",
        "fontWeight": 400,
        "lineHeight": 1,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "label": {
        "fontFamily": "monospace",
        "fontSize": "16px",
        "fontWeight": 400,
        "lineHeight": 1,
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
      "component-internal": "0px",
      "section-internal": "0px",
      "page-edge": "4px",
      "gap-component": "0px",
      "gap-section": "0px",
      "icon": "20px"
    },
    "components": {
      "page-header": {
        "backgroundColor": "#000000",
        "textColor": "{colors.warn}",
        "rounded": "{rounded.default}"
      },
      "separator-row": {
        "backgroundColor": "#000000",
        "textColor": "{colors.delta-flat}"
      },
      "fasttext-menu": {
        "backgroundColor": "#000000",
        "rounded": "{rounded.button}"
      },
      "blinking-text": {
        "backgroundColor": "#000000",
        "textColor": "{colors.err}"
      },
      "metric-cell": {
        "backgroundColor": "#000000",
        "textColor": "{colors.delta-flat}",
        "padding": "0px"
      },
      "signal-bar": {
        "backgroundColor": "#000000",
        "height": "20px"
      },
      "status-cell": {
        "backgroundColor": "#000000",
        "textColor": "{colors.ok}"
      },
      "data-table-row": {
        "backgroundColor": "#000000",
        "textColor": "{colors.delta-flat}"
      },
      "chart-surface": {
        "backgroundColor": "#000000"
      }
    },
    "version": "alpha",
    "description": "Ceefax is a design system rooted in the BBC's teletext service, active from 1974 to 2012. Every page lives on a rigid 40‑column × 25‑row character grid, built from block‑character mosaics and an 8‑colour palette. The emotional tone is utilitarian, dense, and unapologetically low‑tech.",
    "provenance": {
      "coverage_status": "complete",
      "identity_description": "The slug `ceefax` refers unambiguously to the BBC’s Ceefax teletext information service, launched on 23 September 1974 and terminated on 23 October 2012 (with residual BBC Red Button service continuing until 2020). Ceefax was the world’s first broadcast teletext system, transmitting pages of text and simple graphics within the vertical blanking interval of the analogue PAL television signal. Its v",
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
          "count": 1
        },
        {
          "host": "knowledge.bsigroup.com",
          "count": 1
        },
        {
          "host": "unless.com",
          "count": 1
        },
        {
          "host": "www.datasheetarchive.com",
          "count": 1
        },
        {
          "host": "www.youtube.com",
          "count": 1
        },
        {
          "host": "commons.wikimedia.org",
          "count": 1
        },
        {
          "host": "www.itu.int",
          "count": 1
        },
        {
          "host": "www.computinghistory.org.uk",
          "count": 1
        },
        {
          "host": "www.bbc.co.uk",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://en.wikipedia.org/wiki/Ceefax",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia (Wikimedia Commons)",
          "confidence_original": "high"
        },
        {
          "url": "https://knowledge.bsigroup.com/products/teletext-specification",
          "host": "knowledge.bsigroup.com",
          "institution": "BSI (British Standards Institution)",
          "confidence_original": "low"
        },
        {
          "url": "https://unless.com/",
          "host": "unless.com",
          "institution": "Teletext.io",
          "confidence_original": "low"
        },
        {
          "url": "https://www.datasheetarchive.com/?q=saa5050",
          "host": "www.datasheetarchive.com",
          "institution": "Datasheet Archive",
          "confidence_original": "low"
        },
        {
          "url": "https://www.youtube.com/watch?v=9J4Z7Zm3ZtE",
          "host": "www.youtube.com",
          "institution": "YouTube (user 'Teletext Museum')",
          "confidence_original": "low"
        },
        {
          "url": "https://commons.wikimedia.org/wiki/Category:Ceefax",
          "host": "commons.wikimedia.org",
          "institution": "Wikimedia Commons",
          "confidence_original": "high"
        },
        {
          "url": "https://www.itu.int/rec/R-REC-BT.653-4-199802-S/en",
          "host": "www.itu.int",
          "institution": "International Telecommunication Union",
          "confidence_original": "high"
        },
        {
          "url": "https://www.computinghistory.org.uk/det/23647/acorn-teletext-decoder-rom/",
          "host": "www.computinghistory.org.uk",
          "institution": "Centre for Computing History, Cambridge",
          "confidence_original": "high"
        },
        {
          "url": "https://www.bbc.co.uk/topics/c01yxyz46myt",
          "host": "www.bbc.co.uk",
          "institution": "BBC Archive",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": [
        {
          "name": "teletext character set",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "attested"
        }
      ],
      "flags": [
        "1_robots_disallowed_urls"
      ],
      "honest_gaps": [
        {
          "\"1. **Exact RGB/hex values for the Ceefax colour palette**": "no primary source; conventional approximations only. (Refer to `CONTESTED:§2.palette_hex_provenance`.)\""
        }
      ]
    }
  },
  "colorMode": "dark",
  "tokens": {
    "--bg": "#000000",
    "--on-bg": "#FFFFFF",
    "--primary": "#AAAA00",
    "--on-primary": "#000000",
    "--secondary-col": "#AAAAAA",
    "--on-secondary": "#000000",
    "--surface": "#000000",
    "--on-bg-muted": "#AAAAAA",
    "--border": "#000000",
    "--error": "#AA0000",
    "--font-display": "VT323",
    "--font-body": "VT323",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "ok": "#00AA00",
    "warn": "#AAAA00",
    "err": "#AA0000",
    "delta-up": "#00AA00",
    "delta-down": "#AA0000",
    "delta-flat": "#FFFFFF",
    "deltaUp": "#00AA00",
    "deltaDown": "#AA0000",
    "deltaFlat": "#FFFFFF",
    "live": "#AAAA00",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#AAAAAA",
    "chartFont": "VT323"
  },
  "chartStyle": {
    "backgroundColor": "var(--bg)",
    "barColor": "var(--ok)",
    "axisColor": "var(--on-bg-muted)",
    "labelColor": "var(--on-bg-muted)",
    "barHeight": "20px",
    "barWidth": "character cell",
    "type": "block-character",
    "gridColor": "rgba(128,128,128,0.18)",
    "fontFamily": "VT323"
  },
  "surfaceModel": "flat",
  "materialSimulation": {
    "model": "crt-screen",
    "params": {
      "scanlines": "linear-gradient(0deg, transparent 0px, transparent 1px, rgba(0,0,0,0.15) 1px, rgba(0,0,0,0.15) 2px)",
      "phosphorGlow": "text-shadow: 0 0 2px currentColor, 0 0 4px currentColor",
      "noise": "filter: url(#crt-noise); mix-blend-mode: overlay; opacity: 0.05; pointer-events: none;"
    }
  },
  "interactionModel": {
    "hover": null,
    "focus": null,
    "active": null
  },
  "interactionStyles": null,
  "elevation": {
    "0": "none"
  },
  "dashboardStyle": {
    "layout": "40x25 fixed grid, no gaps",
    "density": "high",
    "panelTreatment": "character-cell panels, no backgrounds except black",
    "dataVizStyle": "block-character bar charts, colour-coded metric cells",
    "signatureElement": "row 1: page number + category; row 25: fastext menu"
  },
  "landingStyle": {
    "heroApproach": "news page: header (page number, category), separator, headline, body columns, footer fastext",
    "scrollBehavior": "none; page is static 25 rows",
    "ctaStyle": "fastext menu at bottom with colour-coded labels (red, green, yellow, blue)",
    "signatureMoment": "full-width separator row of dashes after the header"
  },
  "globalFilter": "<svg xmlns=\"http://www.w3.org/2000/svg\"><defs><filter id=\"crt-noise\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" result=\"noise\"/><feColorMatrix type=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.05 0\"/></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-display); background-color: var(--bg); color: var(--on-bg); text-transform: uppercase; -webkit-font-smoothing: none; -moz-osx-font-smoothing: unset; margin: 0; overflow: hidden;",
  "globalCss": ".ds-layout-frame ::selection { background: rgba(255,255,255,0.2); color: inherit; } .ds-layout-frame * { scrollbar-width: none; } .ds-layout-frame *::-webkit-scrollbar { display: none; } .ds-layout-frame *, .ds-layout-frame *::before, .ds-layout-frame *::after { border-radius: 0 !important; border-style: none; } .ds-layout-frame { font-family: var(--font-display); font-size: 16px; line-height: 1; text-transform: uppercase; -webkit-font-smoothing: none; -moz-osx-font-smoothing: unset; image-rendering: pixelated; text-rendering: optimizeSpeed; }",
  "buttons": [
    {
      "name": "fastext-primary",
      "desc": "Primary action button mimicking a Ceefax fastext menu item. Solid yellow background with black uppercase text, no padding, no border.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:var(--primary);color:var(--on-primary);font-family:var(--font-display);font-size:16px;line-height:1;letter-spacing:0;text-transform:uppercase;border:none;padding:0;display:inline-block;width:160px;text-align:center;\">PRIMARY</button>",
      "label": "fastext-primary",
      "note": "Primary action button mimicking a Ceefax fastext menu item. Solid yellow background with black uppercase text, no padding, no border."
    },
    {
      "name": "fastext-secondary",
      "desc": "Secondary action button using green background (ok) for confirmations, white text, same zero-padding character-cell format.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:var(--ok);color:var(--on-bg);font-family:var(--font-display);font-size:16px;line-height:1;letter-spacing:0;text-transform:uppercase;border:none;padding:0;display:inline-block;width:160px;text-align:center;\">SECONDARY</button>",
      "label": "fastext-secondary",
      "note": "Secondary action button using green background (ok) for confirmations, white text, same zero-padding character-cell format."
    },
    {
      "name": "fastext-tertiary",
      "desc": "Tertiary action as plain white text on black, no background—typical teletext menu link. Clickable text only.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:var(--bg);color:var(--on-bg);font-family:var(--font-display);font-size:16px;line-height:1;letter-spacing:0;text-transform:uppercase;border:none;padding:0;display:inline-block;width:160px;text-align:left;\">TERTIARY</button>",
      "label": "fastext-tertiary",
      "note": "Tertiary action as plain white text on black, no background—typical teletext menu link. Clickable text only."
    }
  ],
  "cards": [
    {
      "name": "metric-card",
      "desc": "Data display card for a single metric. Yellow label, white value, no padding. Background black.",
      "html": "<div style=\"background: var(--bg); color: var(--on-bg); font-family: var(--font-display); font-size: 16px; line-height: 1; letter-spacing: 0; text-transform: uppercase; display: inline-block; width: 200px;\"><span style=\"color: var(--primary);\">SPEED:</span> 120</div>",
      "label": "metric-card",
      "note": "Data display card for a single metric. Yellow label, white value, no padding. Background black."
    },
    {
      "name": "news-headline-card",
      "desc": "News page card with yellow headline, white body, and a full-width separator row of dashes.",
      "html": "<div style=\"background: var(--bg); color: var(--on-bg); font-family: var(--font-display); font-size: 16px; line-height: 1; letter-spacing: 0; text-transform: uppercase; width: 400px;\"><div style=\"color: var(--primary);\">BREAKING NEWS</div><div>STORM APPROACHES</div><div style=\"color: var(--on-bg);\">----------------------------------------------------------------------</div></div>",
      "label": "news-headline-card",
      "note": "News page card with yellow headline, white body, and a full-width separator row of dashes."
    }
  ],
  "forms": [
    {
      "name": "text-input",
      "desc": "Character-based text input field. A row of underscores simulates the input area; the label is in yellow to the left.",
      "html": "<div style=\"background: var(--bg); color: var(--on-bg); font-family: var(--font-display); font-size: 16px; line-height: 1; letter-spacing: 0; text-transform: uppercase;\"><span style=\"color: var(--primary);\">NAME:</span> <span>____________________</span></div>",
      "label": "text-input",
      "stateLabel": "Character-based text input field. A row of underscores simulates the input area; the label is in yellow to the left."
    },
    {
      "name": "select-dropdown",
      "desc": "Dropdown menu using teletext list style. Options displayed as lines, selected item shown in yellow.",
      "html": "<div style=\"background: var(--bg); color: var(--on-bg); font-family: var(--font-display); font-size: 16px; line-height: 1; letter-spacing: 0; text-transform: uppercase;\"><div style=\"color: var(--primary);\">> OPTION A</div><div> OPTION B</div><div> OPTION C</div></div>",
      "label": "select-dropdown",
      "stateLabel": "Dropdown menu using teletext list style. Options displayed as lines, selected item shown in yellow."
    },
    {
      "name": "checkbox-toggle",
      "desc": "Binary toggle using teletext block characters. Checked state shows a solid block, unchecked shows a hollow block.",
      "html": "<div style=\"background: var(--bg); color: var(--on-bg); font-family: var(--font-display); font-size: 16px; line-height: 1; letter-spacing: 0; text-transform: uppercase;\"><span>█</span> <span>ENABLED</span></div>",
      "label": "checkbox-toggle",
      "stateLabel": "Binary toggle using teletext block characters. Checked state shows a solid block, unchecked shows a hollow block."
    }
  ],
  "extraComponents": [
    {
      "name": "blinking-text",
      "desc": "Red uppercase text that blinks at 1–2 Hz, exactly as Ceefax used for urgent alerts.",
      "html": "<span style=\"background: var(--bg); color: var(--error); font-family: var(--font-display); font-size: 16px; line-height: 1; letter-spacing: 0; text-transform: uppercase; animation: blink 1s step-end infinite;\">⚠ ALERT</span>"
    },
    {
      "name": "signal-bar",
      "desc": "5-cell bar chart built from teletext block characters (U+2588). Height fixed to one character cell, width variable.",
      "html": "<div style=\"background: var(--bg); color: var(--ok); font-family: var(--font-display); font-size: 16px; line-height: 1; letter-spacing: 0; text-transform: uppercase;\">██████████</div>"
    },
    {
      "name": "status-indicator",
      "desc": "Colour-coded text cell for status (ok/warn/err). Used in dashboards to show uptime, errors, etc.",
      "html": "<span style=\"background: var(--bg); color: var(--ok); font-family: var(--font-display); font-size: 16px; line-height: 1; letter-spacing: 0; text-transform: uppercase;\">OK</span>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — P100 CEEFAX NEWS</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — STORM APPROACHES COAST</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — WEATHER: TODAY</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — TEMPERATURE 12 CLOUDY</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — PAGE 100 INDEX</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Using images, gradients, or anti-aliasing breaks the teletext aesthetic. All graphics must be block-character mosaics.",
      "avoid": {
        "html": "<div style=\"background: linear-gradient(#000, #fff); border-radius: 8px;\"><img src=\"photo.jpg\"/></div>",
        "label": "Avoid"
      },
      "rule": "Using images, gradients, or anti-aliasing breaks the teletext aesthetic. All graphics must be block-character mosaics.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);color:var(--primary);font-family:var(--font-display);font-size:16px;line-height:1;letter-spacing:0;text-transform:uppercase;display:flex;align-items:center;justify-content:center;\">CEEFAX</div>"
      }
    },
    {
      "desc": "More than three foreground colours per page reduces clarity. The 8-colour palette is strict.",
      "avoid": {
        "html": "<div style=\"color: #FF6600;\">ORANGE</div><div style=\"color: #00FFFF;\">CYAN</div><div style=\"color: #FF00FF;\">MAGENTA</div><div style=\"color: #FFFFFF;\">WHITE</div><div style=\"color: #0000FF;\">BLUE</div>",
        "label": "Avoid"
      },
      "rule": "More than three foreground colours per page reduces clarity. The 8-colour palette is strict.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);color:var(--primary);font-family:var(--font-display);font-size:16px;line-height:1;letter-spacing:0;text-transform:uppercase;display:flex;align-items:center;justify-content:center;\">3 COLOURS</div>"
      }
    },
    {
      "desc": "CSS borders, padding, margins, or rounded corners must not be used. All separators are character-based.",
      "avoid": {
        "html": "<div style=\"border: 1px solid white; padding: 8px; border-radius: 4px;\">BORDERED BOX</div>",
        "label": "Avoid"
      },
      "rule": "CSS borders, padding, margins, or rounded corners must not be used. All separators are character-based.",
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
  "doAvoidStyle": "Avoid any anti-aliasing, gradients, photographic images, variable-width fonts, CSS borders, padding, margins, or more than three foreground colours per page.",
  "effects": [],
  "motion": [],
  "colors": {
    "ok": "#00AA00",
    "warn": "#AAAA00",
    "err": "#AA0000",
    "delta-up": "#00AA00",
    "delta-down": "#AA0000",
    "delta-flat": "#FFFFFF"
  },
  "typography": {
    "display": {
      "fontFamily": "monospace",
      "fontSize": "16px",
      "fontWeight": 400,
      "lineHeight": 1,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "monospace",
      "fontSize": "16px",
      "fontWeight": 400,
      "lineHeight": 1,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "monospace",
      "fontSize": "16px",
      "fontWeight": 400,
      "lineHeight": 1,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "monospace",
      "fontSize": "16px",
      "fontWeight": 400,
      "lineHeight": 1,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "label": {
      "fontFamily": "monospace",
      "fontSize": "16px",
      "fontWeight": 400,
      "lineHeight": 1,
      "letterSpacing": "0em",
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
    "component-internal": "0px",
    "section-internal": "0px",
    "page-edge": "4px",
    "gap-component": "0px",
    "gap-section": "0px",
    "icon": "20px"
  },
  "layouts": {
    "copy": {
      "heroKicker": "BBC CEEFAX",
      "heroHeadline": "WORLD NEWS AT A GLANCE",
      "heroSub": "PAGE 101 - TOP STORIES",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">PAGE 101</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">INDEX</button>",
      "navLinks": [
        "NEWS",
        "SPORT",
        "FINANCE",
        "WEATHER"
      ],
      "features": [
        {
          "title": "MOSAIC GRAPHICS",
          "desc": "2X3 SUB-PIXEL BLOCK CHARACTERS",
          "icon": "⬛",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⬛ MOSAIC GRAPHICS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">2X3 SUB-PIXEL BLOCK CHARACTERS</div></div>"
        },
        {
          "title": "SEPARATOR ROWS",
          "desc": "FULL-WIDTH DASH ROWS",
          "icon": "▬",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">▬ SEPARATOR ROWS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">FULL-WIDTH DASH ROWS</div></div>"
        },
        {
          "title": "FASKEY MENU",
          "desc": "25TH ROW COLOUR-CODED LINKS",
          "icon": "🔴",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔴 FASKEY MENU</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">25TH ROW COLOUR-CODED LINKS</div></div>"
        },
        {
          "title": "PAGE REVEAL",
          "desc": "ROW-BY-ROW SCROLL EFFECT",
          "icon": "📄",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📄 PAGE REVEAL</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">ROW-BY-ROW SCROLL EFFECT</div></div>"
        }
      ],
      "ctaStripHeadline": "PAGE 199 - MORE TOPICS",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">INDEX</button><button>PAGE 250</button>",
      "sidebarBrand": "CEEFAX 101",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "PAGE",
          "active": true
        },
        {
          "icon": "◉",
          "label": "INDEX",
          "active": false
        }
      ],
      "dashboardTitle": "SYSTEM STATUS",
      "metrics": [
        {
          "label": "PAGES LOADED",
          "value": "187",
          "delta": "+12",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "SIGNAL STRENGTH",
          "value": "78%",
          "delta": "-5%",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "ERROR RATE",
          "value": "0.02%",
          "delta": "+0.01%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "CHANNEL",
          "value": "BBC1",
          "delta": "",
          "dir": "flat",
          "direction": "flat"
        }
      ],
      "chartTitle": "PAGE REQUESTS",
      "panelATitle": "TOP HEADLINES",
      "panelARows": [
        {
          "label": "STORM ALERT",
          "value": "P101",
          "pct": 100
        },
        {
          "label": "MARKETS RISE",
          "value": "P202",
          "pct": 100
        },
        {
          "label": "CUP FINAL",
          "value": "P301",
          "pct": 100
        },
        {
          "label": "NEW FLOOD",
          "value": "P104",
          "pct": 100
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "SUBPAGES",
      "panelBCells": [
        {
          "label": "SPORT",
          "value": "P302",
          "state": "ok"
        },
        {
          "label": "FINANCE",
          "value": "P204",
          "state": "warn"
        },
        {
          "label": "WEATHER",
          "value": "P401",
          "state": "err"
        },
        {
          "label": "NEWS",
          "value": "P105",
          "state": "ok"
        },
        {
          "label": "ENTERTAIN",
          "value": "P501",
          "state": "warn"
        },
        {
          "label": "TRAVEL",
          "value": "P601",
          "state": "err"
        },
        {
          "label": "SHOPPING",
          "value": "P701",
          "state": "ok"
        },
        {
          "label": "GAMES",
          "value": "P801",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00"
      ],
      "series": [
        {
          "data": [
            45,
            62,
            58,
            71,
            80,
            66,
            66,
            66,
            66,
            66,
            66,
            66
          ],
          "label": "NEWS",
          "axis": "left",
          "color": "#AAAA00"
        },
        {
          "data": [
            30,
            28,
            35,
            42,
            38,
            55,
            55,
            55,
            55,
            55,
            55,
            55
          ],
          "label": "SPORT",
          "axis": "right-1",
          "color": "#AAAAAA"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'min-height:240px;background:var(--bg);font-family:var(--font-display);font-size:16px;line-height:1;text-transform:uppercase;letter-spacing:0;padding:4px;'; el.innerHTML = '<div style=\"color:var(--primary);\">P100 CEEFAX NEWS</div><div style=\"color:var(--on-bg);\">----------------------------------------------------------------------</div><div style=\"color:var(--on-bg);margin-top:8px;\"><span style=\"color:var(--warn);\">STORM APPROACHES</span> COAST TODAY</div><div style=\"color:var(--on-bg);margin-top:4px;\">TEMPERATURE 12C  WIND 25MPH</div><div style=\"color:var(--on-bg-muted);margin-top:8px;\">----------------------------------------------------------------------</div><div style=\"color:var(--primary);margin-top:4px;\">PAGE 101  TOP STORIES</div>'; }",
    "showcaseRender": "function(el) { el.style.cssText = 'background:var(--bg);font-family:var(--font-display);font-size:16px;line-height:1;text-transform:uppercase;letter-spacing:0;padding:4px;'; el.innerHTML = '<div style=\"color:var(--primary);\">SHOWCASE: WEATHER MAP</div><div style=\"margin-top:4px;\"><span style=\"color:var(--ok);\">████████████</span><span style=\"color:var(--warn);\">████████</span><span style=\"color:var(--err);\">████</span></div><div style=\"margin-top:4px;\"><span style=\"color:var(--on-bg);\">SUN:</span><span style=\"color:var(--ok);\"> 15C</span><span style=\"margin-left:8px;color:var(--on-bg);\">RAIN:</span><span style=\"color:var(--err);\"> 5MM</span></div>'; }",
    "panelCRender": "function(el) { el.style.cssText = 'background:var(--bg);font-family:var(--font-display);font-size:16px;line-height:1;text-transform:uppercase;letter-spacing:0;padding:4px;'; el.innerHTML = '<div style=\"color:var(--primary);\">DATA TABLE</div><div style=\"margin-top:4px;\"><span style=\"color:var(--on-bg);\">CHANNEL</span> <span style=\"color:var(--ok);\">BBC1</span></div><div><span style=\"color:var(--on-bg);\">PAGES   </span><span style=\"color:var(--on-bg-muted);\">187</span></div><div><span style=\"color:var(--on-bg);\">ERROR   </span><span style=\"color:var(--err);\">0.02%</span></div><div><span style=\"color:var(--on-bg);\">SIGNAL  </span><span style=\"color:var(--warn);\">78%</span></div>'; }",
    "heroBackground": "function(el) { el.style.background = 'var(--bg)'; }",
    "ctaBackground": "function(el) { el.style.background = 'var(--bg)'; }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'color:var(--on-bg);font-family:var(--font-display);font-size:16px;line-height:1;text-transform:uppercase;letter-spacing:0;'; d.textContent = '----------------------------------------------------------------------'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = 'var(--bg)'; }",
    "surfaceOverlay": "function(el) { var scan = document.createElement('div'); scan.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;background:repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.15) 1px, rgba(0,0,0,0.15) 2px);'; el.appendChild(scan); }"
  },
  "ambientCanvas": "function(el, tick) { el.style.cssText = 'position:absolute;inset:0;z-index:0;pointer-events:none;'; var p = document.createElement('div'); p.style.cssText = 'color:var(--primary);font-family:var(--font-display);font-size:16px;line-height:1;text-transform:uppercase;'; p.textContent = 'P100'; p.style.opacity = 0.15 + 0.05 * Math.sin(tick * 0.02); el.appendChild(p); }",
  "shadcnTokens": {
    "--color-background": "#000000",
    "--color-popover": "#000000",
    "--color-foreground": "#FFFFFF",
    "--color-card-foreground": "#FFFFFF",
    "--color-popover-foreground": "#FFFFFF",
    "--color-card": "#000000",
    "--color-muted": "#000000",
    "--color-muted-foreground": "#AAAAAA",
    "--color-primary": "#AAAA00",
    "--color-ring": "#AAAA00",
    "--color-primary-foreground": "#000000",
    "--color-secondary": "#AAAAAA",
    "--color-accent": "#AAAAAA",
    "--color-secondary-foreground": "#000000",
    "--color-accent-foreground": "#000000",
    "--color-border": "#000000",
    "--color-input": "#000000",
    "--color-destructive": "#AA0000"
  },
  "shadcnTokensClassic": {
    "--background": "#000000",
    "--popover": "#000000",
    "--foreground": "#FFFFFF",
    "--card-foreground": "#FFFFFF",
    "--popover-foreground": "#FFFFFF",
    "--card": "#000000",
    "--muted": "#000000",
    "--muted-foreground": "#AAAAAA",
    "--primary": "#AAAA00",
    "--ring": "#AAAA00",
    "--primary-foreground": "#000000",
    "--secondary": "#AAAAAA",
    "--accent": "#AAAAAA",
    "--secondary-foreground": "#000000",
    "--accent-foreground": "#000000",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#AA0000"
  }
});
