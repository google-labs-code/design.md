registerSystem({
  "meta": {
    "name": "ms-dos-command-line-interface-1981",
    "tagline": "Stark 80×25 terminal with monochrome green on black",
    "mode": "dark",
    "fontImport": "https://fonts.googleapis.com/css2?family=VT323&display=swap"
  },
  "yamlTokens": {
    "name": "ms-dos-command-line-interface-1981",
    "colors": {
      "background": "#000000",
      "primary": "#00FF00",
      "secondary": "#FFB000",
      "accent": "#C0C0C0",
      "ok": "#00FF00",
      "warn": "#00FF00",
      "err": "#00FF00",
      "delta-up": "#00FF00",
      "delta-down": "#00FF00",
      "delta-flat": "#00FF00"
    },
    "typography": {
      "display": {
        "fontFamily": "VT323, Courier Prime, monospace",
        "fontSize": "16px",
        "fontWeight": 400,
        "lineHeight": 1,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "VT323, Courier Prime, monospace",
        "fontSize": "16px",
        "fontWeight": 400,
        "lineHeight": 1,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "VT323, Courier Prime, monospace",
        "fontSize": "16px",
        "fontWeight": 400,
        "lineHeight": 1,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "VT323, Courier Prime, monospace",
        "fontSize": "16px",
        "fontWeight": 400,
        "lineHeight": 1,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "label": {
        "fontFamily": "VT323, Courier Prime, monospace",
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
      "xs": "0px",
      "sm": "0px",
      "md": "0px",
      "lg": "0px",
      "xl": "0px"
    },
    "components": {
      "command-prompt": {
        "backgroundColor": "{colors.background}",
        "textColor": "{colors.primary}",
        "rounded": "{rounded.default}"
      },
      "dialog-box": {
        "backgroundColor": "{colors.background}",
        "textColor": "{colors.primary}",
        "rounded": "{rounded.default}"
      },
      "input-area": {
        "backgroundColor": "{colors.background}",
        "textColor": "{colors.primary}",
        "rounded": "{rounded.default}"
      },
      "progress-bar": {
        "backgroundColor": "{colors.background}",
        "textColor": "{colors.primary}",
        "height": "16px"
      },
      "metric-cell": {
        "backgroundColor": "{colors.background}",
        "textColor": "{colors.primary}"
      },
      "status-cell": {
        "backgroundColor": "{colors.background}",
        "textColor": "{colors.primary}"
      }
    },
    "version": "alpha",
    "description": "The quintessential early personal-computer operating system UI—a stark, 80×25 character-cell terminal with a single monochrome foreground on solid black, evoking clinical, authoritative nostalgia.",
    "provenance": {
      "coverage_status": "complete",
      "identity_description": "The slug `ms-dos-command-line-interface-1981` refers to the visual identity of the Microsoft Disk Operating System (MS‑DOS) command‑line interface as it appeared in 1981, the year MS‑DOS 1.0 was released for the IBM Personal Computer (IBM 5150) in August 1981. This identity is the on‑screen presentation of a text‑based operating system shell: the prompt format, the monospaced character rendering, ",
      "manual_enrichment_required": false,
      "imagery_count": 5,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "en.wikipedia.org",
          "count": 4
        },
        {
          "host": "archive.org",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://en.wikipedia.org/wiki/MS-DOS",
          "host": "en.wikipedia.org",
          "institution": "Wikimedia Commons",
          "confidence_original": "medium"
        },
        {
          "url": "https://en.wikipedia.org/wiki/IBM_5151",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia",
          "confidence_original": "high"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Code_page_437",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia",
          "confidence_original": "high"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Color_Graphics_Adapter",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia",
          "confidence_original": "medium"
        },
        {
          "url": "https://archive.org/details/byte-magazine-1981-10",
          "host": "archive.org",
          "institution": "Internet Archive",
          "confidence_original": "medium"
        }
      ],
      "typefaces_attested": [
        {
          "name": "IBM PC text font",
          "foundry": null,
          "year": 1981,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "attested"
        }
      ],
      "flags": {},
      "honest_gaps": [
        {
          "\"1. **Colour — hex values for MDA green (#33FF33 accepted as [conventional] but unverified)**": "No primary source. Resolved by phosphor chromaticity from monitor service manual.\""
        }
      ]
    }
  },
  "colorMode": "dark",
  "tokens": {
    "--bg": "#000000",
    "--on-bg": "#00FF00",
    "--primary": "#00FF00",
    "--on-primary": "#000000",
    "--secondary-col": "#FFB000",
    "--on-secondary": "#000000",
    "--surface": "#000000",
    "--on-bg-muted": "#00e600",
    "--border": "#00FF00",
    "--error": "#00FF00",
    "--font-display": "VT323",
    "--font-body": "VT323",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "ok": "#00FF00",
    "warn": "#00FF00",
    "err": "#00FF00",
    "delta-up": "#00FF00",
    "delta-down": "#00FF00",
    "delta-flat": "#00FF00",
    "deltaUp": "#00FF00",
    "deltaDown": "#00FF00",
    "deltaFlat": "#00FF00",
    "live": "#00FF00",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#5c5c5c",
    "chartFont": "VT323"
  },
  "chartStyle": {
    "type": "text-based",
    "gridChars": "· -",
    "dataChar": "█",
    "axisBorder": "─ │ ┌ ┐ └ ┘",
    "color": "#00FF00",
    "background": "#000000",
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#5c5c5c",
    "fontFamily": "VT323"
  },
  "surfaceModel": "flat",
  "materialSimulation": {
    "model": "crt-screen",
    "params": {
      "scanlines": {
        "technique": "repeating-linear-gradient",
        "parameters": "transparent 0px, transparent 1px, rgba(0,0,0,0.05) 1px, rgba(0,0,0,0.05) 2px",
        "blend": "normal",
        "opacity": 1,
        "color": "#000000"
      },
      "phosphorGlow": {
        "technique": "text-shadow",
        "value": "0 0 4px currentColor"
      },
      "grainNoise": {
        "technique": "svg-filter",
        "filterId": "ds-noise",
        "blend": "overlay",
        "opacity": 0.15
      },
      "vignette": {
        "technique": "radial-gradient",
        "parameters": "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.4) 100%)",
        "blend": "multiply",
        "opacity": 0.15
      }
    }
  },
  "globalFilter": "<svg><defs><filter id='ds-noise' x='0' y='0' width='100%' height='100%'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/><feComponentTransfer><feFuncA type='linear' slope='0.15'/></feComponentTransfer></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-body); background: var(--bg); color: var(--on-bg); text-rendering: optimizeSpeed; -webkit-font-smoothing: none; image-rendering: pixelated; overflow: hidden;",
  "globalCss": ".ds-layout-frame::after { content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: repeating-linear-gradient(transparent 0px, transparent 1px, rgba(0,0,0,0.05) 1px, rgba(0,0,0,0.05) 2px); pointer-events: none; z-index: 9999; } .ds-layout-frame { position: relative; } .ds-layout-frame .scanline-overlay { display: none; }",
  "interactionModel": {
    "hover": {
      "delta": "none"
    },
    "focus": {
      "style": "block-cursor-blink",
      "outline": "none"
    },
    "active": {
      "delta": "none"
    }
  },
  "interactionStyles": ".ds-layout-frame :focus-visible { outline: none; } .ds-layout-frame .cursor-blink { animation: cursorBlink 0.5s step-start infinite; } @keyframes cursorBlink { 50% { visibility: hidden; } } .ds-layout-frame * { transition: none !important; }",
  "dashboardStyle": {
    "layout": "single-pane full-screen terminal (80×25 character grid)",
    "density": "maximal, every character cell occupied by either text or background",
    "panelTreatment": "none, all content is inline monospace text with no visual panels",
    "dataVizStyle": "text-based charts using block characters and box drawing symbols, only green on black",
    "signatureElement": "blinking block cursor at the command prompt"
  },
  "landingStyle": {
    "heroApproach": "static boot screen: solid black with single prompt line 'C:\\>' at top left and blinking cursor",
    "scrollBehavior": "no scrolling; if content exceeds viewport, new lines push old lines upward instantly",
    "ctaStyle": "no call-to-action button; the command prompt itself invites text entry",
    "signatureMoment": "the first appearance of the blinking cursor after a clear screen (cls)"
  },
  "elevation": {
    "levels": [
      {
        "name": "flat",
        "shadow": "none",
        "style": ""
      },
      {
        "name": "raised",
        "shadow": "none",
        "style": ""
      },
      {
        "name": "overlay",
        "shadow": "none",
        "style": ""
      }
    ],
    "description": "No elevation; all elements are at the same flat plane."
  },
  "buttons": [
    {
      "name": "command-execute",
      "desc": "Primary action button styled as a DOS command entry. No padding, no rounding, solid black background with glowing green border and text.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:var(--bg);color:var(--on-bg);border:1px solid var(--border);font-family:var(--font-display);font-size:16px;text-transform:uppercase;letter-spacing:0;padding:0;margin:0;cursor:pointer;\">[ OK ]</button>",
      "label": "command-execute",
      "note": "Primary action button styled as a DOS command entry. No padding, no rounding, solid black background with glowing green border and text."
    },
    {
      "name": "cancel-dismiss",
      "desc": "Secondary button identical to primary but with different text. Uses same monochrome palette.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:var(--bg);color:var(--on-bg);border:1px solid var(--border);font-family:var(--font-display);font-size:16px;text-transform:uppercase;letter-spacing:0;padding:0;margin:0;cursor:pointer;\">[CANCEL]</button>",
      "label": "cancel-dismiss",
      "note": "Secondary button identical to primary but with different text. Uses same monochrome palette."
    },
    {
      "name": "ghost-text-only",
      "desc": "Ghost-style button with no border, only text. Mimics a command prompt action.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:transparent;color:var(--on-bg);border:none;font-family:var(--font-display);font-size:16px;text-transform:uppercase;letter-spacing:0;padding:0;margin:0;cursor:pointer;\">_ECHO</button>",
      "label": "ghost-text-only",
      "note": "Ghost-style button with no border, only text. Mimics a command prompt action."
    }
  ],
  "cards": [
    {
      "name": "dialog-box",
      "desc": "A fixed-width dialog box using box-drawing characters (CP437) as borders. No padding, no rounding, monochrome green on black.",
      "html": "<div style=\"background:var(--bg);color:var(--on-bg);font-family:var(--font-display);font-size:16px;line-height:1;border:0;display:inline-block;white-space:pre;\">╔════════════╗\n║  WARNING   ║\n╚════════════╝</div>",
      "label": "dialog-box",
      "note": "A fixed-width dialog box using box-drawing characters (CP437) as borders. No padding, no rounding, monochrome green on black."
    },
    {
      "name": "metric-card",
      "desc": "A simple informational card showing a label and value, typical of a status display.",
      "html": "<div style=\"background:var(--bg);color:var(--on-bg);font-family:var(--font-display);font-size:16px;line-height:1;text-transform:uppercase;\">CPU: 100%\nMEM: 64K</div>",
      "label": "metric-card",
      "note": "A simple informational card showing a label and value, typical of a status display."
    }
  ],
  "forms": [
    {
      "name": "command-input",
      "desc": "Text input area mimicking the DOS command line. Includes a blinking cursor underscore via CSS animation.",
      "html": "<div style=\"background:var(--bg);color:var(--on-bg);font-family:var(--font-display);font-size:16px;line-height:1;white-space:pre;\">C:\\> <span style=\"animation:blink 0.5s step-start infinite;\">_</span></div>",
      "label": "command-input",
      "stateLabel": "Text input area mimicking the DOS command line. Includes a blinking cursor underscore via CSS animation."
    },
    {
      "name": "selection-list",
      "desc": "A select menu rendered as a list of options with a highlighted item using a caret.",
      "html": "<div style=\"background:var(--bg);color:var(--on-bg);font-family:var(--font-display);font-size:16px;line-height:1;white-space:pre;\">[ ] OPTION A\n> [X] OPTION B\n[ ] OPTION C</div>",
      "label": "selection-list",
      "stateLabel": "A select menu rendered as a list of options with a highlighted item using a caret."
    },
    {
      "name": "checkbox-toggle",
      "desc": "A simple checkbox indicator using bracket characters and an X for checked state.",
      "html": "<div style=\"background:var(--bg);color:var(--on-bg);font-family:var(--font-display);font-size:16px;line-height:1;white-space:pre;\">[X] ENABLE\n[ ] DISABLE</div>",
      "label": "checkbox-toggle",
      "stateLabel": "A simple checkbox indicator using bracket characters and an X for checked state."
    }
  ],
  "extraComponents": [
    {
      "name": "progress-bar",
      "desc": "A text-based progress bar using block characters (█). Width indicates percentage.",
      "html": "<div style=\"background:var(--bg);color:var(--on-bg);font-family:var(--font-display);font-size:16px;line-height:1;white-space:pre;\">[████████░░] 80%</div>"
    },
    {
      "name": "status-indicator",
      "desc": "A single-line status indicator with a colored keyword (always green, no actual color change).",
      "html": "<div style=\"background:var(--bg);color:var(--on-bg);font-family:var(--font-display);font-size:16px;line-height:1;text-transform:uppercase;\">STATUS: OK</div>"
    },
    {
      "name": "tooltip-popup",
      "desc": "A small popup box with a single line of help text, styled as a minimal bordered rectangle.",
      "html": "<div style=\"background:var(--bg);color:var(--on-bg);font-family:var(--font-display);font-size:16px;line-height:1;white-space:pre;border:1px solid var(--border);display:inline-block;\">╔══════════╗\n║ PRESS F1  ║\n╚══════════╝</div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — MS-DOS 1.0</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — WELCOME TO MS-DOS</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — C:\\\\>DIR</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — 10/10/1981  12:00A      1234 FILE.COM</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — ENTER COMMAND:</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Avoid using any color other than the single foreground green on black. Do not apply gradients, shadows, or multiple colors.",
      "avoid": {
        "html": "<button style=\"background:#000;color:red;border:1px solid blue;\">BAD BUTTON</button>",
        "label": "Avoid"
      },
      "rule": "Avoid using any color other than the single foreground green on black. Do not apply gradients, shadows, or multiple colors.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Avoid proportional or anti-aliased fonts. Use only monospace, pixel-aligned typefaces with no smooth rendering.",
      "avoid": {
        "html": "<div style=\"font-family:Helvetica;font-size:18px;color:#00FF00;\">Proportional text</div>",
        "label": "Avoid"
      },
      "rule": "Avoid proportional or anti-aliased fonts. Use only monospace, pixel-aligned typefaces with no smooth rendering.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Avoid any border-radius, padding, margin, or spacing that does not align to the character grid. All spacing must be multiples of text line-height (16px).",
      "avoid": {
        "html": "<div style=\"background:#000;color:#00FF00;border-radius:10px;padding:20px;\">Rounded padded box</div>",
        "label": "Avoid"
      },
      "rule": "Avoid any border-radius, padding, margin, or spacing that does not align to the character grid. All spacing must be multiples of text line-height (16px).",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Avoid hover transitions, animations (except the 2Hz cursor blink), and any non-instantaneous state changes.",
      "avoid": {
        "html": "<button style=\"background:#000;color:#00FF00;transition:0.3s ease;\">SLOW BUTTON</button>",
        "label": "Avoid"
      },
      "rule": "Avoid hover transitions, animations (except the 2Hz cursor blink), and any non-instantaneous state changes.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "doAvoidStyle": {
    "desc": "Avoid styling that contradicts the rigid 80×25 grid and monochrome palette. No CSS layout properties like flexbox, grid, or floats.",
    "avoid": {
      "html": "<div style=\"display:flex;justify-content:center;\">FLEX LAYOUT</div>"
    }
  },
  "effects": [],
  "motion": [],
  "colors": {
    "background": "#000000",
    "primary": "#00FF00",
    "secondary": "#FFB000",
    "accent": "#C0C0C0",
    "ok": "#00FF00",
    "warn": "#00FF00",
    "err": "#00FF00",
    "delta-up": "#00FF00",
    "delta-down": "#00FF00",
    "delta-flat": "#00FF00"
  },
  "typography": {
    "display": {
      "fontFamily": "VT323",
      "fontSize": "16px",
      "fontWeight": 400,
      "lineHeight": 1,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "VT323",
      "fontSize": "16px",
      "fontWeight": 400,
      "lineHeight": 1,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "VT323",
      "fontSize": "16px",
      "fontWeight": 400,
      "lineHeight": 1,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "VT323",
      "fontSize": "16px",
      "fontWeight": 400,
      "lineHeight": 1,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "label": {
      "fontFamily": "VT323",
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
    "xs": "0px",
    "sm": "0px",
    "md": "0px",
    "lg": "0px",
    "xl": "0px"
  },
  "layouts": {
    "copy": {
      "heroKicker": "C:\\>",
      "heroHeadline": "SYSTEM MONITOR 1.0",
      "heroSub": "REAL-TIME DISK ACTIVITY & PROCESS TRACKING",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">INITIALIZE</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">LOAD CONFIG</button>",
      "navLinks": [
        "DRIVE C:",
        "DRIVE A:",
        "BATCH LIST",
        "HELP",
        "EXIT"
      ],
      "features": [
        {
          "title": "SECTOR SCAN",
          "desc": "READ DIRECT SECTOR DATA FROM DISK SURFACE",
          "icon": "╔",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔍 SECTOR SCAN</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">READ DIRECT SECTOR DATA FROM DISK SURFACE</div></div>"
        },
        {
          "title": "SPEED BENCH",
          "desc": "MEASURE SEEK TIME & DATA TRANSFER RATE",
          "icon": "╔",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⏱️ SPEED BENCH</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">MEASURE SEEK TIME & DATA TRANSFER RATE</div></div>"
        },
        {
          "title": "BATCH EXEC",
          "desc": "RUN SEQUENTIAL COMMANDS FROM .BAT FILES",
          "icon": "╔",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⚡ BATCH EXEC</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">RUN SEQUENTIAL COMMANDS FROM .BAT FILES</div></div>"
        },
        {
          "title": "MEM VIEW",
          "desc": "DISPLAY MEMORY MAP & RESIDENT PROGRAMS",
          "icon": "╔",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🗄️ MEM VIEW</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">DISPLAY MEMORY MAP & RESIDENT PROGRAMS</div></div>"
        }
      ],
      "ctaStripHeadline": "READY TO MONITOR YOUR SYSTEM?",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">START MONITOR</button>",
      "sidebarBrand": "MS-DOS MONITOR",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "MAIN MENU",
          "active": true
        },
        {
          "icon": "◉",
          "label": "DISK UTIL",
          "active": false
        },
        {
          "icon": "◉",
          "label": "PROC TAB",
          "active": false
        },
        {
          "icon": "◉",
          "label": "CONFIG",
          "active": false
        }
      ],
      "dashboardTitle": "SYSTEM MONITOR - MAIN DISPLAY",
      "metrics": [
        {
          "label": "TOTAL DISK",
          "value": "10 MB",
          "delta": "0%",
          "dir": "flat",
          "direction": "flat"
        },
        {
          "label": "FREE SPACE",
          "value": "3.2 MB",
          "delta": "-15%",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "ACTIVE PROCS",
          "value": "4",
          "delta": "+2",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "SECTOR READS",
          "value": "1024",
          "delta": "+0%",
          "dir": "flat",
          "direction": "flat"
        }
      ],
      "chartTitle": "DISK ACTIVITY (SECTORS/SEC)",
      "panelATitle": "ACTIVE PROCESSES",
      "panelARows": [
        {
          "label": "COMMAND.COM",
          "value": "RESIDENT",
          "pct": 0
        },
        {
          "label": "MONITOR.EXE",
          "value": "RUNNING",
          "pct": 0
        },
        {
          "label": "SCANDISK.EXE",
          "value": "IDLE",
          "pct": 0
        },
        {
          "label": "FORMAT.COM",
          "value": "WAITING",
          "pct": 0
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "SECTOR BUFFER",
      "panelBCells": [
        {
          "label": "CLUSTER 1",
          "value": "OK",
          "state": "ok"
        },
        {
          "label": "CLUSTER 2",
          "value": "ERR",
          "state": "warn"
        },
        {
          "label": "CLUSTER 3",
          "value": "OK",
          "state": "err"
        },
        {
          "label": "CLUSTER 4",
          "value": "WARN",
          "state": "ok"
        },
        {
          "label": "CLUSTER 5",
          "value": "OK",
          "state": "warn"
        },
        {
          "label": "CLUSTER 6",
          "value": "OK",
          "state": "err"
        },
        {
          "label": "CLUSTER 7",
          "value": "ERR",
          "state": "ok"
        },
        {
          "label": "CLUSTER 8",
          "value": "WARN",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "0S",
        "1S",
        "2S",
        "3S",
        "4S",
        "5S",
        "6S"
      ],
      "series": [
        {
          "data": [
            10,
            25,
            15,
            30,
            20,
            10,
            5,
            5,
            5,
            5,
            5,
            5
          ],
          "label": "READ",
          "axis": "left",
          "color": "#00FF00"
        },
        {
          "data": [
            5,
            8,
            12,
            18,
            10,
            6,
            3,
            3,
            3,
            3,
            3,
            3
          ],
          "label": "WRITE",
          "axis": "right-1",
          "color": "#FFB000"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'background:#000000;color:#00FF00;font-family:VT323,monospace;font-size:16px;line-height:1;text-transform:uppercase;overflow:hidden;'; el.innerHTML = '<pre style=\"margin:0;padding:0;background:#000000;color:#00FF00;font-family:VT323,monospace;font-size:16px;line-height:1;text-transform:uppercase;\">MS-DOS 1.0\n\nC:\\\\><span style=\"animation:cursorBlink 0.5s step-start infinite;\">_</span></pre>'; }",
    "showcaseRender": "function(el) { el.style.cssText = 'background:#000000;color:#00FF00;font-family:VT323,monospace;font-size:16px;line-height:1;text-transform:uppercase;'; el.innerHTML = '<pre style=\"margin:0;padding:0;background:#000000;color:#00FF00;font-family:VT323,monospace;font-size:16px;line-height:1;text-transform:uppercase;\">C:\\\\>DIR\n Volume in drive C has no label\n Directory of C:\\\\\n10/10/1981  12:00A      1234 FILE.COM\n10/10/1981  12:01A      5678 DATA.DAT\n10/10/1981  12:02A         4 CONFIG.SYS\n       3 File(s)          3.2 MB free</pre>'; }",
    "panelCRender": "function(el) { el.style.cssText = 'background:#000000;color:#00FF00;font-family:VT323,monospace;font-size:16px;line-height:1;text-transform:uppercase;'; el.innerHTML = '<pre style=\"margin:0;padding:0;background:#000000;color:#00FF00;font-family:VT323,monospace;font-size:16px;line-height:1;text-transform:uppercase;\">ACTIVE PROCESSES\n────────────────\nCOMMAND.COM    RESIDENT\nMONITOR.EXE    RUNNING\nSCANDISK.EXE   IDLE\nFORMAT.COM     WAITING</pre>'; }",
    "heroBackground": "function(el) { el.style.background = '#000000'; }",
    "ctaBackground": "function(el) { el.style.background = '#000000'; }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'height:16px;background:transparent;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = '#000000'; }",
    "surfaceOverlay": "function(el) { var ov = document.createElement('div'); ov.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;mix-blend-mode:overlay;opacity:0.15;filter:url(#ds-noise);background:radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.4) 100%);'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(tick) { var el = document.createElement('div'); el.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;mix-blend-mode:screen;opacity:0.02;z-index:9998;'; var offset = Math.sin(tick * 0.25) * 1.5; el.style.transform = 'translateY(' + offset.toFixed(2) + 'px)'; el.style.boxShadow = '0 0 20px var(--primary)'; return el; }",
  "shadcnTokens": {
    "--color-background": "#000000",
    "--color-popover": "#000000",
    "--color-foreground": "#00FF00",
    "--color-card-foreground": "#00FF00",
    "--color-popover-foreground": "#00FF00",
    "--color-card": "#000000",
    "--color-muted": "#000000",
    "--color-muted-foreground": "#00e600",
    "--color-primary": "#00FF00",
    "--color-ring": "#00FF00",
    "--color-primary-foreground": "#000000",
    "--color-secondary": "#FFB000",
    "--color-accent": "#FFB000",
    "--color-secondary-foreground": "#000000",
    "--color-accent-foreground": "#000000",
    "--color-border": "#00FF00",
    "--color-input": "#00FF00",
    "--color-destructive": "#00FF00"
  },
  "shadcnTokensClassic": {
    "--background": "#000000",
    "--popover": "#000000",
    "--foreground": "#00FF00",
    "--card-foreground": "#00FF00",
    "--popover-foreground": "#00FF00",
    "--card": "#000000",
    "--muted": "#000000",
    "--muted-foreground": "#00e600",
    "--primary": "#00FF00",
    "--ring": "#00FF00",
    "--primary-foreground": "#000000",
    "--secondary": "#FFB000",
    "--accent": "#FFB000",
    "--secondary-foreground": "#000000",
    "--accent-foreground": "#000000",
    "--border": "#00FF00",
    "--input": "#00FF00",
    "--destructive": "#00FF00"
  }
});
