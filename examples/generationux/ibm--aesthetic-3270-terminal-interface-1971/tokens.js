registerSystem({
  "meta": {
    "name": "IBM 3270 Terminal Interface (1971)",
    "tagline": "Glass-teletype formalism: monochrome green-on-black, fixed character-cell grid, keyboard-driven interaction.",
    "mode": "dark",
    "fontImport": "https://fonts.googleapis.com/css2?family=VT323&display=swap"
  },
  "yamlTokens": {
    "name": "IBM 3270 Terminal Interface (1971)",
    "colors": {
      "surface": "#000000",
      "on-primary": "#000000",
      "on-surface": "#33FF33",
      "ok": "#33FF33",
      "warn": "#33FF33",
      "err": "#33FF33",
      "delta-up": "#33FF33",
      "delta-down": "#33FF33",
      "delta-flat": "#33FF33"
    },
    "typography": {
      "display": {
        "fontFamily": "VT323, monospace",
        "fontSize": "20px",
        "fontWeight": 400,
        "lineHeight": 1,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "VT323, monospace",
        "fontSize": "24px",
        "fontWeight": 400,
        "lineHeight": 1.25,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "VT323, monospace",
        "fontSize": "18px",
        "fontWeight": 400,
        "lineHeight": 1.25,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "VT323, monospace",
        "fontSize": "14px",
        "fontWeight": 400,
        "lineHeight": 1.5,
        "letterSpacing": "0em",
        "textTransform": "none"
      },
      "label": {
        "fontFamily": "VT323, monospace",
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
      "height-sm": "24px",
      "height-md": "32px",
      "height-lg": "40px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "#33FF33",
        "textColor": "{colors.on-primary}",
        "rounded": "{rounded.button}",
        "height": "32px",
        "padding": "8px"
      },
      "card": {
        "backgroundColor": "{colors.surface}",
        "rounded": "{rounded.card}",
        "padding": "8px"
      },
      "input": {
        "backgroundColor": "{colors.surface}",
        "textColor": "{colors.on-surface}",
        "rounded": "{rounded.input}",
        "height": "24px"
      },
      "metric-cell": {
        "backgroundColor": "{colors.surface}",
        "textColor": "{colors.on-surface}",
        "height": "24px"
      },
      "status-line": {
        "backgroundColor": "#33FF33",
        "textColor": "{colors.on-primary}",
        "height": "24px"
      }
    },
    "version": "alpha",
    "description": "A glass-teletype formalism recreating early 1970s mainframe data-entry terminals with strict monochrome green-on-black, fixed character-cell grid, and keyboard-driven interaction.",
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
          "host": "commons.wikimedia.org",
          "count": 2
        },
        {
          "host": "en.wikipedia.org",
          "count": 1
        },
        {
          "host": "bitsavers.org",
          "count": 1
        },
        {
          "host": "www.computerhistory.org",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://en.wikipedia.org/wiki/IBM_3270",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia",
          "confidence_original": "high"
        },
        {
          "url": "https://commons.wikimedia.org/wiki/Category:IBM_3270",
          "host": "commons.wikimedia.org",
          "institution": "Wikimedia Commons",
          "confidence_original": "high"
        },
        {
          "url": "https://commons.wikimedia.org/wiki/Category:IBM_keyboards",
          "host": "commons.wikimedia.org",
          "institution": "Wikimedia Commons",
          "confidence_original": "medium"
        },
        {
          "url": "https://bitsavers.org/pdf/ibm/3270/",
          "host": "bitsavers.org",
          "institution": "Bitsavers",
          "confidence_original": "high"
        },
        {
          "url": "https://www.computerhistory.org/collections/catalog?q=IBM+3277",
          "host": "www.computerhistory.org",
          "institution": "Computer History Museum, Mountain View",
          "confidence_original": "medium"
        }
      ],
      "typefaces_attested": {},
      "flags": [
        "no_typography_extracted",
        "no_colour_extracted",
        "1_robots_disallowed_urls"
      ],
      "honest_gaps": {}
    }
  },
  "colorMode": "dark",
  "tokens": {
    "--bg": "#000000",
    "--on-bg": "#33FF33",
    "--primary": "#33FF33",
    "--on-primary": "#000000",
    "--secondary-col": "#33FF33",
    "--on-secondary": "#000000",
    "--surface": "#000000",
    "--on-bg-muted": "#1A7A1A",
    "--border": "#33FF33",
    "--error": "#33FF33",
    "--font-display": "VT323, monospace",
    "--font-body": "VT323, monospace",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "ok": "#33FF33",
    "warn": "#33FF33",
    "err": "#33FF33",
    "delta-up": "#33FF33",
    "delta-down": "#33FF33",
    "delta-flat": "#33FF33",
    "info": "#33FF33",
    "success": "#33FF33",
    "warning": "#33FF33",
    "error": "#33FF33",
    "deltaUp": "#33FF33",
    "deltaDown": "#33FF33",
    "deltaFlat": "#33FF33",
    "live": "#33FF33",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#1A7A1A",
    "chartFont": "Space Grotesk"
  },
  "elevation": {
    "0": "none",
    "1": "none",
    "2": "none",
    "3": "none",
    "4": "none"
  },
  "surfaceModel": "glow",
  "materialSimulation": {
    "model": "crt-screen",
    "params": {
      "scanlines": "repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)",
      "phosphorGlow": "drop-shadow(0 0 2px rgba(51,255,51,0.6))",
      "vignette": "radial-gradient(ellipse at center, transparent 70%, rgba(0,0,0,0.3) 100%)"
    }
  },
  "interactionModel": {
    "hover": {
      "effect": "none"
    },
    "focus": {
      "effect": "blink-cursor",
      "cursorTiming": "0.33s steps(1)"
    },
    "active": {
      "effect": "none"
    }
  },
  "interactionStyles": ".ds-layout-frame * { transition: none; } .ds-layout-frame :focus { outline: none; } .ds-layout-frame button:active, .ds-layout-frame a:active { background: var(--primary); color: var(--on-primary); }",
  "chartStyle": {
    "enabled": false,
    "note": "All data presented as formatted text columns; no charts or graphical plots.",
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#1A7A1A",
    "fontFamily": "VT323, monospace"
  },
  "dashboardStyle": {
    "layout": "Fixed 80×24 character-cell grid. Dense, left-aligned, no reflow. Rows: 1-23 for content, row 24 for status line.",
    "density": "High. Minimal whitespace. Each cell occupies exactly one character slot.",
    "panelTreatment": "Panels are framed with box-drawing characters (U+2500–U+257F). No CSS box-shadow, no background gradients.",
    "dataVizStyle": "No charts. Data presented as formatted text columns with aligned decimal points and box-drawing separators.",
    "signatureElement": "Reverse-video status line at row 24 with system clock and active function key hints."
  },
  "landingStyle": {
    "heroApproach": "At-rest blank screen: absolute black with a single blinking block cursor at row 1, column 1. No logo, no tagline.",
    "scrollBehavior": "No scrolling. Content is fixed to the viewport as a terminal session. Any overflow is clipped.",
    "ctaStyle": "Text-only instruction in reverse video at row 23: 'PRESS ENTER TO BEGIN'. No button graphic.",
    "signatureMoment": "On load, screen refresh flash (0.05s white phosphor), then stable cursor blink. Optionally display scanline overlay."
  },
  "globalFilter": null,
  "globalBodyCss": "background: #000000, repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px), radial-gradient(ellipse at center, transparent 70%, rgba(0,0,0,0.3) 100%); font-family: var(--font-body); color: var(--on-bg);",
  "globalCss": ".ds-layout-frame { font-family: var(--font-display); -webkit-font-smoothing: none; -moz-osx-font-smoothing: unset; text-rendering: optimizeSpeed; image-rendering: pixelated; } .ds-layout-frame ::selection { background: rgba(51,255,51,0.3); color: #000000; } .ds-layout-frame ::-webkit-scrollbar { display: none; } .ds-layout-frame * { scrollbar-width: none; }",
  "buttons": [
    {
      "name": "primary-action",
      "desc": "Reverse video button for primary actions (PF1-PF3). Green background, black text, all-caps label.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--primary); color: var(--on-primary); border: none; padding: var(--spacing-height-md) 8px; height: 32px; font-family: var(--font-body); font-size: 14px; line-height: 1; text-transform: uppercase; cursor: pointer;\">SUBMIT</button>",
      "label": "primary-action",
      "note": "Reverse video button for primary actions (PF1-PF3). Green background, black text, all-caps label."
    },
    {
      "name": "secondary-action",
      "desc": "Text-only button with no background, matching terminal key labels. Persistent green text.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; color: var(--primary); border: none; padding: var(--spacing-height-md) 8px; height: 32px; font-family: var(--font-body); font-size: 14px; line-height: 1; text-transform: uppercase; cursor: pointer;\">CANCEL</button>",
      "label": "secondary-action",
      "note": "Text-only button with no background, matching terminal key labels. Persistent green text."
    },
    {
      "name": "ghost-action",
      "desc": "Muted secondary button for less important actions. Uses dimmed phosphor green.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; color: var(--on-bg-muted); border: none; padding: var(--spacing-height-md) 8px; height: 32px; font-family: var(--font-body); font-size: 14px; line-height: 1; text-transform: uppercase; cursor: pointer;\">HELP</button>",
      "label": "ghost-action",
      "note": "Muted secondary button for less important actions. Uses dimmed phosphor green."
    }
  ],
  "cards": [
    {
      "name": "metric-card",
      "desc": "Single metric display with label and value, framed by box-drawing characters top and bottom.",
      "html": "<div style=\"background: var(--surface); padding: 8px; width: 240px;\"><pre style=\"margin: 0; font-family: var(--font-body); font-size: 14px; line-height: 1.5; color: var(--on-bg);\">┌──────────────────────┐\n│ USERS ACTIVE:    47  │\n│ SYSTEM LOAD:    0.23 │\n│ RESPONSE:       12ms │\n└──────────────────────┘</pre></div>",
      "label": "metric-card",
      "note": "Single metric display with label and value, framed by box-drawing characters top and bottom."
    },
    {
      "name": "data-card",
      "desc": "Text content card with a title row in reverse video. No border beyond box-drawing characters.",
      "html": "<div style=\"background: var(--surface); padding: 8px; width: 300px;\"><pre style=\"margin: 0; font-family: var(--font-body); font-size: 14px; line-height: 1.5; color: var(--on-bg);\">╔═══════════════════════╗\n║  <span style=\"background: var(--primary); color: var(--on-primary);\"> SESSION LOG     </span>║\n║  15:03:22 LOGON                            ║\n║  15:04:01 QUERY PAYROLL                    ║\n║  15:05:12 DATA ENTRY MODE                  ║\n╚═══════════════════════╝</pre></div>",
      "label": "data-card",
      "note": "Text content card with a title row in reverse video. No border beyond box-drawing characters."
    }
  ],
  "forms": [
    {
      "name": "text-input",
      "desc": "Single-line text field with underscores representing character cells. Blinking cursor simulated via CSS animation.",
      "html": "<div style=\"display: flex; align-items: center; font-family: var(--font-body); font-size: 14px; color: var(--on-bg);\"><label style=\"margin-right: 8px; text-transform: uppercase;\">NAME</label><pre style=\"margin: 0; background: var(--surface); padding: 4px 8px; height: 24px; line-height: 24px;\">______________<span style=\"animation: blink 0.33s steps(1) infinite; background: var(--primary); color: var(--on-primary);\">█</span></pre></div>",
      "label": "text-input",
      "stateLabel": "Single-line text field with underscores representing character cells. Blinking cursor simulated via CSS animation."
    },
    {
      "name": "select-dropdown",
      "desc": "Select field rendered as a list of options with a highlighted current selection. Keyboard-triggered expansion.",
      "html": "<div style=\"font-family: var(--font-body); font-size: 14px; color: var(--on-bg);\"><pre style=\"margin: 0; background: var(--surface); padding: 4px 8px; height: 24px; line-height: 24px; cursor: pointer;\">ACCOUNTING DEPARTMENT <span style=\"color: var(--on-bg-muted);\">▼</span></pre><pre style=\"margin: 0; background: var(--surface); padding: 4px 8px; border-top: 1px solid var(--primary);\">FINANCE        <span style=\"background: var(--primary); color: var(--on-primary);\">●</span>\nMARKETING      <span style=\"color: var(--on-bg-muted);\">○</span>\nENGINEERING    <span style=\"color: var(--on-bg-muted);\">○</span></pre></div>",
      "label": "select-dropdown",
      "stateLabel": "Select field rendered as a list of options with a highlighted current selection. Keyboard-triggered expansion."
    },
    {
      "name": "checkbox-toggle",
      "desc": "Toggle using box-drawing square brackets with filled or empty indicator.",
      "html": "<div style=\"font-family: var(--font-body); font-size: 14px; color: var(--on-bg);\"><label style=\"cursor: pointer;\">[×] ENABLE STATISTICS</label><br/><label style=\"cursor: pointer;\">[ ] DISABLE LOGGING</label></div>",
      "label": "checkbox-toggle",
      "stateLabel": "Toggle using box-drawing square brackets with filled or empty indicator."
    }
  ],
  "extraComponents": [
    {
      "name": "status-line",
      "desc": "Reverse video bar at the bottom of the screen indicating system state.",
      "html": "<div style=\"background: var(--primary); color: var(--on-primary); height: 24px; padding: 0 8px; font-family: var(--font-body); font-size: 14px; line-height: 24px; text-transform: uppercase;\">SESSION: ACTIVE    CURSOR: 01,01    PF1=HELP PF2=SUBMIT</div>"
    },
    {
      "name": "metric-cell",
      "desc": "Individual metric display with label and value, fixed height, no background.",
      "html": "<div style=\"background: var(--surface); color: var(--on-bg); height: 24px; padding: 0 8px; font-family: var(--font-body); font-size: 14px; line-height: 24px;\"><span style=\"color: var(--on-bg-muted);\">CPU:</span>  23%</div>"
    },
    {
      "name": "function-key-row",
      "desc": "Row of function key labels, separated by box-drawing vertical bar.",
      "html": "<div style=\"background: var(--surface); color: var(--on-bg); height: 24px; padding: 0 8px; font-family: var(--font-body); font-size: 14px; line-height: 24px;\"><span style=\"background: var(--primary); color: var(--on-primary); padding: 0 4px;\">PF1</span> │ <span>PF2</span> │ <span>PF3</span> │ <span>PF4</span> │ <span>PF5</span> │ <span>PF6</span> │ <span>PF7</span> │ <span>PF8</span></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — IBM 3270 TERMINAL</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — MAINFRAME DATA ENTRY</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — SESSION CONTROL</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — CURRENT TRANSACTION: PAYROLL QUERY    STATUS: COMPLETE</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — ACCOUNT NUMBER</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Do not use rounded corners, variable-width fonts, or graphic borders. This breaks the character-cell grid contract.",
      "avoid": {
        "html": "<button style=\"background: #33FF33; color: #000000; border-radius: 8px; padding: 10px 20px; font-family: Helvetica;\">SUBMIT</button>",
        "label": "Avoid"
      },
      "rule": "Do not use rounded corners, variable-width fonts, or graphic borders. This breaks the character-cell grid contract.",
      "do": {
        "label": "Do",
        "html": "<pre style=\"margin:0;font-family:var(--font-body);color:var(--on-bg);background:var(--surface);padding:4px;\">┌────────────────┐\n│ SUBMIT         │\n└────────────────┘</pre>"
      }
    },
    {
      "desc": "Do not introduce any color beyond the single phosphor hue. Red for errors is forbidden.",
      "avoid": {
        "html": "<div style=\"color: #FF0000; background: #000000;\">ERROR: INVALID INPUT</div>",
        "label": "Avoid"
      },
      "rule": "Do not introduce any color beyond the single phosphor hue. Red for errors is forbidden.",
      "do": {
        "label": "Do",
        "html": "<div style=\"background:var(--primary);color:var(--on-primary);padding:4px;font-family:var(--font-body);font-size:14px;\">ERROR: INVALID INPUT</div>"
      }
    },
    {
      "desc": "Do not use images, icons, or emoji. All visual elements must be typographic.",
      "avoid": {
        "html": "<div><img src=\"logo.png\" alt=\"logo\"/> <span>⚠️</span> WARNING</div>",
        "label": "Avoid"
      },
      "rule": "Do not use images, icons, or emoji. All visual elements must be typographic.",
      "do": {
        "label": "Do",
        "html": "<div style=\"font-family:var(--font-body);color:var(--on-bg);\">[×] ENABLE FEATURE</div>"
      }
    },
    {
      "desc": "Do not use CSS transitions or animations beyond the approved blink cursor.",
      "avoid": {
        "html": "<div style=\"transition: background 0.3s;\" onmouseover=\"this.style.background='#33FF33'\">HOVER ME</div>",
        "label": "Avoid"
      },
      "rule": "Do not use CSS transitions or animations beyond the approved blink cursor.",
      "do": {
        "label": "Do",
        "html": "<div style=\"font-family:var(--font-body);color:var(--on-bg);\">STATIC TEXT</div>"
      }
    }
  ],
  "doAvoidStyle": {
    "desc": "This section reinforces the forbidden moves from the design system. Already covered in doAvoid array above."
  },
  "effects": [],
  "motion": [],
  "colors": {
    "surface": "#000000",
    "on-primary": "#000000",
    "on-surface": "#33FF33",
    "primary": "#33FF33",
    "ok": "#33FF33",
    "warn": "#33FF33",
    "err": "#33FF33",
    "delta-up": "#33FF33",
    "delta-down": "#33FF33",
    "delta-flat": "#33FF33"
  },
  "typography": {
    "display": {
      "fontFamily": "VT323, monospace",
      "fontSize": "20px",
      "fontWeight": 400,
      "lineHeight": 1,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "VT323, monospace",
      "fontSize": "24px",
      "fontWeight": 400,
      "lineHeight": 1.25,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "VT323, monospace",
      "fontSize": "18px",
      "fontWeight": 400,
      "lineHeight": 1.25,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "VT323, monospace",
      "fontSize": "14px",
      "fontWeight": 400,
      "lineHeight": 1.5,
      "letterSpacing": "0em",
      "textTransform": "none"
    },
    "label": {
      "fontFamily": "VT323, monospace",
      "fontSize": "14px",
      "fontWeight": 400,
      "lineHeight": 1.25,
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
    "height-sm": "24px",
    "height-md": "32px",
    "height-lg": "40px"
  },
  "layouts": {
    "copy": {
      "heroKicker": "IBM 3270 TERMINAL INTERFACE",
      "heroHeadline": "GLASS TELETYPE FORMALISM",
      "heroSub": "MONOCHROME GREEN ON BLACK | 24x80 CHARACTER GRID | KEYBOARD DRIVEN",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">ENTER SYSTEM</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">CONNECT TO HOST</button>",
      "navLinks": [
        "SESSION",
        "JOB QUEUE",
        "BUFFER",
        "CHANNEL",
        "HOST"
      ],
      "features": [
        {
          "title": "SESSION CONTROL",
          "desc": "MANAGE HOST SESSIONS VIA PF-KEYS",
          "icon": ">",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">> SESSION CONTROL</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">MANAGE HOST SESSIONS VIA PF-KEYS</div></div>"
        },
        {
          "title": "JOB QUEUE",
          "desc": "VIEW AND SUBMIT BATCH JOBS",
          "icon": ">",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">> JOB QUEUE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">VIEW AND SUBMIT BATCH JOBS</div></div>"
        },
        {
          "title": "BUFFER EDIT",
          "desc": "DIRECT MEMORY ACCESS TO FIELD BUFFERS",
          "icon": ">",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">> BUFFER EDIT</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">DIRECT MEMORY ACCESS TO FIELD BUFFERS</div></div>"
        },
        {
          "title": "CHANNEL MONITOR",
          "desc": "REAL TIME I/O CHANNEL TRACE",
          "icon": ">",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">> CHANNEL MONITOR</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">REAL TIME I/O CHANNEL TRACE</div></div>"
        }
      ],
      "ctaStripHeadline": "ACTIVATE FULL SCREEN SESSION",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">BEGIN</button>",
      "sidebarBrand": "3270",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "HOST",
          "active": true
        },
        {
          "icon": "◉",
          "label": "CONFIG",
          "active": false
        }
      ],
      "dashboardTitle": "MAINFRAME CONTROL PANEL",
      "metrics": [
        {
          "label": "ACTIVE JOBS",
          "value": "042",
          "delta": "+03%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "QUEUED TASKS",
          "value": "017",
          "delta": "-02%",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "BUFFER UTIL",
          "value": "68%",
          "delta": "+05%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "CHANNEL LOAD",
          "value": "54%",
          "delta": " 0%",
          "dir": "flat",
          "direction": "flat"
        }
      ],
      "chartTitle": "I/O CHANNEL THROUGHPUT",
      "panelATitle": "JOB QUEUE",
      "panelARows": [
        {
          "label": "JOB001",
          "value": "RUNNING",
          "pct": 0
        },
        {
          "label": "JOB002",
          "value": "WAITING",
          "pct": 0
        },
        {
          "label": "JOB003",
          "value": "COMPLETE",
          "pct": 0
        },
        {
          "label": "JOB004",
          "value": "HOLD",
          "pct": 0
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "BUFFER POOL",
      "panelBCells": [
        {
          "label": "BUF01",
          "value": "0x2A01",
          "state": "ok"
        },
        {
          "label": "BUF02",
          "value": "0x2A09",
          "state": "warn"
        },
        {
          "label": "BUF03",
          "value": "0x2B05",
          "state": "err"
        },
        {
          "label": "BUF04",
          "value": "0x2C00",
          "state": "ok"
        },
        {
          "label": "BUF05",
          "value": "0x2C10",
          "state": "warn"
        },
        {
          "label": "BUF06",
          "value": "0x2D03",
          "state": "err"
        },
        {
          "label": "BUF07",
          "value": "0x2E07",
          "state": "ok"
        },
        {
          "label": "BUF08",
          "value": "0x2F0A",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "09:00",
        "09:10",
        "09:20",
        "09:30",
        "09:40",
        "09:50"
      ],
      "series": [
        {
          "data": [
            240,
            310,
            280,
            350,
            290,
            330,
            330,
            330,
            330,
            330,
            330,
            330
          ],
          "label": "READ VOL",
          "axis": "left",
          "color": "#33FF33"
        },
        {
          "data": [
            180,
            220,
            200,
            260,
            210,
            240,
            240,
            240,
            240,
            240,
            240,
            240
          ],
          "label": "WRITE VOL",
          "axis": "right-1",
          "color": "#33FF33"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'min-height:240px;background:#000;display:flex;align-items:flex-start;padding:8px;'; el.innerHTML = '<pre style=\"margin:0;font-family:var(--font-body);font-size:14px;color:var(--on-bg);line-height:1.5;\"><span style=\"background:var(--primary);color:var(--on-primary);animation:blink 0.33s steps(1) infinite;\">█</span></pre>'; }",
    "showcaseRender": "function(el) { el.style.cssText = 'background:#000;padding:16px;'; el.innerHTML = '<pre style=\"margin:0;font-family:var(--font-body);font-size:14px;color:var(--on-bg);line-height:1.5;\">┌────────────────────────────────────┐\\n│  SESSION CONTROL                    │\\n│  MANAGE HOST SESSIONS VIA PF-KEYS   │\\n├────────────────────────────────────┤\\n│  JOB QUEUE                          │\\n│  VIEW AND SUBMIT BATCH JOBS          │\\n├────────────────────────────────────┤\\n│  BUFFER EDIT                        │\\n│  DIRECT MEMORY ACCESS               │\\n└────────────────────────────────────┘</pre>'; }",
    "panelCRender": "function(el) { el.style.cssText = 'background:#000;padding:16px;'; el.innerHTML = '<pre style=\"margin:0;font-family:var(--font-body);font-size:14px;color:var(--on-bg);line-height:1.5;\">╔═══════════════════════╗\\n║  SYSTEM INFORMATION    ║\\n╠═══════════════════════╣\\n║  HOST: MAINFRAME01    ║\\n║  OS  : MVS 3.8J       ║\\n║  CPU : 10.2 MIPS      ║\\n║  MEM : 16 MB          ║\\n╚═══════════════════════╝</pre>'; }",
    "heroBackground": "function(el) { el.style.background = '#000000'; }",
    "ctaBackground": "function(el) { el.style.background = '#000000'; }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'height:8px;background:var(--primary);'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = '#000000'; }",
    "surfaceOverlay": "function(el) { var ov = document.createElement('div'); ov.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;background:repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px), radial-gradient(ellipse at center, transparent 70%, rgba(0,0,0,0.3) 100%);'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(el, tick) { el.style.cssText = 'position:absolute;inset:0;pointer-events:none;'; var line = document.createElement('div'); line.style.cssText = 'position:absolute;left:0;right:0;height:2px;background:var(--primary);opacity:0.3;top:' + ((tick % 100) / 100 * 100) + '%;'; el.appendChild(line); }",
  "shadcnTokens": {
    "--color-background": "#000000",
    "--color-popover": "#000000",
    "--color-foreground": "#33FF33",
    "--color-card-foreground": "#33FF33",
    "--color-popover-foreground": "#33FF33",
    "--color-card": "#000000",
    "--color-muted": "#000000",
    "--color-muted-foreground": "#1A7A1A",
    "--color-primary": "#33FF33",
    "--color-ring": "#33FF33",
    "--color-primary-foreground": "#000000",
    "--color-secondary": "#33FF33",
    "--color-accent": "#33FF33",
    "--color-secondary-foreground": "#000000",
    "--color-accent-foreground": "#000000",
    "--color-border": "#33FF33",
    "--color-input": "#33FF33",
    "--color-destructive": "#33FF33"
  },
  "shadcnTokensClassic": {
    "--background": "#000000",
    "--popover": "#000000",
    "--foreground": "#33FF33",
    "--card-foreground": "#33FF33",
    "--popover-foreground": "#33FF33",
    "--card": "#000000",
    "--muted": "#000000",
    "--muted-foreground": "#1A7A1A",
    "--primary": "#33FF33",
    "--ring": "#33FF33",
    "--primary-foreground": "#000000",
    "--secondary": "#33FF33",
    "--accent": "#33FF33",
    "--secondary-foreground": "#000000",
    "--accent-foreground": "#000000",
    "--border": "#33FF33",
    "--input": "#33FF33",
    "--destructive": "#33FF33"
  }
});
