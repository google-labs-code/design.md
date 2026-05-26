registerSystem({
  "meta": {
    "name": "VT100 Terminal Interface",
    "tagline": "A monochrome phosphor-lit terminal interface evoking late-1970s computing",
    "mode": "dark",
    "fontImport": "https://fonts.googleapis.com/css2?family=VT323&display=swap"
  },
  "yamlTokens": {
    "name": "VT100 Terminal Interface",
    "colors": {
      "primary": "#33FF33",
      "surface": "#001100",
      "on-primary": "#001100",
      "inverse-surface": "#33FF33",
      "inverse-on-surface": "#001100"
    },
    "typography": {
      "body": {
        "fontFamily": "VT323",
        "fontSize": "16px",
        "fontWeight": 400,
        "lineHeight": 1,
        "letterSpacing": "0em"
      },
      "label": {
        "fontFamily": "VT323",
        "fontSize": "16px",
        "fontWeight": 600,
        "lineHeight": 1,
        "letterSpacing": "0em"
      },
      "display": {
        "fontFamily": "VT323",
        "fontSize": "24px",
        "fontWeight": 700,
        "lineHeight": 1,
        "letterSpacing": "0em"
      }
    },
    "rounded": {
      "default": "0px"
    },
    "spacing": {
      "component-internal": "0px",
      "section-internal": "0px",
      "page-edge": "0px",
      "gap-component": "0px",
      "gap-section": "4px",
      "height-sm": "20px",
      "height-md": "20px",
      "height-lg": "20px"
    },
    "components": {
      "prompt": {
        "textColor": "{colors.primary}",
        "backgroundColor": "{colors.surface}",
        "rounded": "{rounded.default}",
        "padding": "0px",
        "height": "20px"
      },
      "status-line": {
        "backgroundColor": "{colors.inverse-surface}",
        "textColor": "{colors.inverse-on-surface}",
        "rounded": "{rounded.default}",
        "height": "20px",
        "padding": "0px"
      },
      "cursor": {
        "backgroundColor": "{colors.primary}",
        "textColor": "{colors.surface}",
        "size": "8px",
        "width": "8px",
        "height": "16px"
      },
      "divider": {
        "textColor": "{colors.primary}",
        "backgroundColor": "{colors.surface}",
        "rounded": "{rounded.default}",
        "height": "20px",
        "padding": "0px"
      },
      "menu-item-selected": {
        "backgroundColor": "{colors.inverse-surface}",
        "textColor": "{colors.inverse-on-surface}",
        "rounded": "{rounded.default}",
        "padding": "0px",
        "height": "20px"
      }
    },
    "version": "alpha",
    "description": "A monochrome phosphor-lit terminal interface evoking late-1970s computing, rendered on a rigid 80×24 character grid with CRT simulation artifacts including scanlines, phosphor glow, and vignette.",
    "provenance": {
      "coverage_status": "complete",
      "identity_description": "The slug `dec-vt100-terminal-interface-1978` refers to the visual identity of the Digital Equipment Corporation (DEC) VT100 video display terminal, introduced in 1978. This identity encompasses the physical terminal hardware (case, keyboard, CRT bezel, indicator lights) and the on-screen character-based user interface (monochrome phosphor display, bitmap character set, line-drawing graphics, statu",
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
          "count": 1
        },
        {
          "host": "commons.wikimedia.org",
          "count": 1
        },
        {
          "host": "www.computerhistory.org",
          "count": 1
        },
        {
          "host": "www.vintagecomputer.net",
          "count": 1
        },
        {
          "host": "www.bitsavers.org",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://en.wikipedia.org/wiki/VT100",
          "host": "en.wikipedia.org",
          "institution": null,
          "confidence_original": "high"
        },
        {
          "url": "https://commons.wikimedia.org/wiki/Category:VT100",
          "host": "commons.wikimedia.org",
          "institution": "Wikimedia Commons",
          "confidence_original": "high"
        },
        {
          "url": "https://www.computerhistory.org/collections/catalog/102713562",
          "host": "www.computerhistory.org",
          "institution": "Computer History Museum, Mountain View",
          "confidence_original": "low"
        },
        {
          "url": "https://www.vintagecomputer.net/vt100/",
          "host": "www.vintagecomputer.net",
          "institution": "VintageComputer.net",
          "confidence_original": "low"
        },
        {
          "url": "https://www.bitsavers.org/pdf/dec/terminal/vt100/",
          "host": "www.bitsavers.org",
          "institution": "Bitsavers.org",
          "confidence_original": "medium"
        }
      ],
      "typefaces_attested": [
        {
          "name": "DEC VT100 on-screen bitmap font",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "attested"
        },
        {
          "name": "DEC logotype (custom)",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "attested"
        },
        {
          "name": "VT100 model number lettering",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "unverified"
        },
        {
          "name": "Helvetica (or similar)",
          "foundry": null,
          "year": null,
          "google_fonts": "Inter",
          "attestation": "inferred"
        }
      ],
      "flags": [
        "1_robots_disallowed_urls"
      ],
      "honest_gaps": [
        {
          "\"1. **Official colour specification for case, bezel, keycaps, CRT phosphor": "** Absent from all located sources. A spectrophotometer reading of a NOS unit would be required.\""
        }
      ]
    }
  },
  "colorMode": "dark",
  "tokens": {
    "--bg": "#001100",
    "--on-bg": "#33FF33",
    "--primary": "#33FF33",
    "--on-primary": "#001100",
    "--secondary-col": "#33FF33",
    "--on-secondary": "#001100",
    "--surface": "#001100",
    "--on-bg-muted": "#1A7F1A",
    "--border": "#1A7F1A",
    "--error": "#33FF33",
    "--font-display": "VT323",
    "--font-body": "VT323",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "statusLineBg": "#33FF33",
    "statusLineText": "#001100",
    "cursorColor": "#33FF33",
    "warn": "#FF8C42",
    "ok": "#22C55E",
    "err": "#33FF33",
    "deltaUp": "#22C55E",
    "deltaDown": "#33FF33",
    "deltaFlat": "#1A7F1A",
    "live": "#33FF33",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#1A7F1A",
    "chartFont": "VT323"
  },
  "elevation": {
    "shadow": "none",
    "zIndex": 0
  },
  "surfaceModel": "flat",
  "materialSimulation": {
    "model": "crt-screen",
    "parameters": {
      "scanlines": true,
      "vignette": true,
      "phosphorGlow": true,
      "scanlineIntensity": 0.75,
      "vignetteIntensity": 0.4,
      "phosphorGlowBlur": "2px 5px"
    }
  },
  "interactionModel": {
    "hover": {
      "background": "inherit",
      "opacity": "1",
      "transition": "none"
    },
    "focus": {
      "outline": "none",
      "animation": "blink 1s steps(1) infinite"
    },
    "active": {
      "background": "inherit",
      "transition": "none"
    }
  },
  "chartStyle": {
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#1A7F1A",
    "fontFamily": "VT323"
  },
  "dashboardStyle": {
    "layout": "Fixed 80-column grid with 24-row height. Panels snap to character cell boundaries. No scrolling within the viewport; content scrolls by pushing lines up.",
    "density": "Very low. Each line is exactly 20px high (16px font + 4px line-height). No gutters, no padding. Elements touch edge to edge.",
    "panelTreatment": "Each panel is a rectangular region with a 1px solid green border (no antialiasing) or a box-drawing character border. Panels can be stacked vertically with 4px gap between sections.",
    "dataVizStyle": "ASCII bar charts using block characters (█, ▓, ▒, ░) or simple lines of X characters. No charts, no graphs, no fill patterns beyond text characters. Values are numeric with dimmed/green contrast.",
    "signatureElement": "A blinking block cursor at all input points, driven by a steps(1) CSS animation on a 0.5s cycle."
  },
  "landingStyle": {
    "heroApproach": "Full-screen terminal emulation: the entire viewport is filled with the 80×24 grid, background #001100. The hero is a login prompt with a blinking cursor, followed by a few lines of boot messages and a command prompt line. No imagery, no logos, no decorative elements.",
    "scrollBehavior": "Content scrolls vertically by shifting the line buffer upward. No smooth scrolling, no parallax. Each new line appears at the bottom and pushes existing lines up. Past lines fade into a dimmed state (color var(--on-bg-muted)) to simulate scrollback.",
    "ctaStyle": "The primary CTA is a text command entered at the prompt (e.g., 'LOGIN' or 'START'). No traditional buttons. The user interacts by typing. Secondary CTAs are menu items displayed in inverse video when selected.",
    "signatureMoment": "The exact moment when the cursor appears after a boot sequence: the screen is blank for 500ms, then the prompt and cursor appear simultaneously, followed by a soft phosphor glow around the fresh characters. This evokes the power-on experience of a VT100."
  },
  "globalFilter": null,
  "globalBodyCss": "background-color: var(--bg); color: var(--on-bg); font-family: var(--font-body); font-size: 16px; line-height: 1; image-rendering: pixelated; text-rendering: optimizeSpeed; -webkit-font-smoothing: none; font-smoothing: never;",
  "globalCss": ".ds-layout-frame::after { content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 9999; background: repeating-linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.15) 50%); background-size: 100% 4px; mix-blend-mode: multiply; opacity: 0.75; } .ds-layout-frame::before { content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 9998; background: radial-gradient(circle farthest-corner at 50% 50%, transparent 60%, rgba(0,0,0,0.4) 100%); } .ds-layout-frame { caret-color: var(--primary); } .ds-layout-frame .cursor-blink { animation: blink 1s steps(1) infinite; } @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }",
  "interactionStyles": ".ds-layout-frame button, .ds-layout-frame a, .ds-layout-frame input, .ds-layout-frame textarea { transition: none; cursor: default; } .ds-layout-frame :focus { outline: none; }",
  "buttons": [
    {
      "name": "Primary Button (Inverse Video)",
      "desc": "A terminal-style primary action button, rendered as an inverse-video block of text. Background is the phosphor green, text is the dark surface color. No padding, no border, no rounded corners – just a solid rectangle of filled characters.",
      "html": "<button onmouseenter=\"this.style.textShadow='0 0 8px #33FF33'\" onmouseleave=\"this.style.textShadow='none'\" style=\"background: var(--primary); color: var(--on-primary); font-family: var(--font-body); font-size: 16px; line-height: 1; height: 20px; padding: 0; border: none; cursor: pointer; outline: none; text-transform: uppercase; letter-spacing: 0;\">[ SUBMIT ]</button>",
      "label": "Primary Button (Inverse Video)",
      "note": "A terminal-style primary action button, rendered as an inverse-video block of text. Background is the phosphor green, text is the dark surface color. No padding, no border, no rounded corners – just a solid rectangle of filled characters."
    },
    {
      "name": "Secondary Button (Outlined with Box-Drawing Frame)",
      "desc": "A secondary action button framed by box-drawing characters (┌─┐└─┘). Uses the primary color for text and border, no background. The border is purely character-based, simulating a VT100 line-drawing cell.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; color: var(--primary); font-family: var(--font-body); font-size: 16px; line-height: 1; padding: 0; border: 1px solid var(--primary); border-radius: 0; cursor: pointer; height: 20px; outline: none;\">┌─RESET─┐</button>",
      "label": "Secondary Button (Outlined with Box-Drawing Frame)",
      "note": "A secondary action button framed by box-drawing characters (┌─┐└─┘). Uses the primary color for text and border, no background. The border is purely character-based, simulating a VT100 line-drawing cell."
    },
    {
      "name": "Ghost Button (Plain Text)",
      "desc": "A minimal ghost button that appears as plain green text with no visible container. When focused, a blinking block cursor appears at the end. No hover or active effects – consistent with terminal purity.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; color: var(--primary); font-family: var(--font-body); font-size: 16px; line-height: 1; padding: 0; border: none; cursor: pointer; height: 20px;\">> cancel <span style=\"display: inline-block; width: 8px; height: 16px; background: var(--primary); vertical-align: middle;\"></span></button>",
      "label": "Ghost Button (Plain Text)",
      "note": "A minimal ghost button that appears as plain green text with no visible container. When focused, a blinking block cursor appears at the end. No hover or active effects – consistent with terminal purity."
    }
  ],
  "cards": [
    {
      "name": "Status Panel Card",
      "desc": "A card representing a terminal panel with a border made of 1px solid primary color (no antialiasing) and a header line using box-drawing characters. The content is a list of system metrics, each line dimmed/undimmed.",
      "html": "<div style=\"background: var(--bg); color: var(--on-bg); font-family: var(--font-body); font-size: 16px; line-height: 1; border: 1px solid var(--primary); border-radius: 0; padding: 0;\"><div style=\"background: var(--primary); color: var(--on-primary); height: 20px; line-height: 20px; padding: 0 4px;\">SYSTEM STATUS</div><div style=\"padding: 4px;\"><div>CPU: 23%</div><div style=\"color: var(--on-bg-muted);\">MEM: 45%</div><div>DISK: 12%</div></div></div>",
      "label": "Status Panel Card",
      "note": "A card representing a terminal panel with a border made of 1px solid primary color (no antialiasing) and a header line using box-drawing characters. The content is a list of system metrics, each line dimmed/undimmed."
    },
    {
      "name": "Data Grid Card",
      "desc": "A card displaying tabular data with fixed-width character columns. Each cell is a character cell with no gaps. The entire card behaves as a read-only terminal window snippet.",
      "html": "<div style=\"background: var(--bg); color: var(--on-bg); font-family: var(--font-body); font-size: 16px; line-height: 1; border: 1px solid var(--primary); border-radius: 0; padding: 4px;\"><pre style=\"background: transparent; color: inherit; font-family: inherit; font-size: inherit; margin: 0; line-height: 1;\">PID  USER      COMMAND\n  1  root     init\n 23  guest    login\n 45  sys      idle\n</pre></div>",
      "label": "Data Grid Card",
      "note": "A card displaying tabular data with fixed-width character columns. Each cell is a character cell with no gaps. The entire card behaves as a read-only terminal window snippet."
    }
  ],
  "forms": [
    {
      "name": "Text Input (Command Line)",
      "desc": "A single-line text input styled as a terminal prompt. The input is transparent, text is green, and a blinking block cursor is simulated using CSS animation. The prompt symbol '$' is prepended via a label element.",
      "html": "<div style=\"display: flex; align-items: center; height: 20px; background: var(--bg); color: var(--on-bg); font-family: var(--font-body); font-size: 16px; line-height: 1;\"><span>$</span><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" value=\"\" aria-label=\"Command prompt\" style=\"background: transparent; color: var(--primary); font-family: inherit; font-size: inherit; border: none; outline: none; padding: 0; margin: 0; width: 100%; caret-color: var(--primary); caret-shape: block;\" /></div>",
      "label": "Text Input (Command Line)",
      "stateLabel": "A single-line text input styled as a terminal prompt. The input is transparent, text is green, and a blinking block cursor is simulated using CSS animation. The prompt symbol '$' is prepended via a label element."
    },
    {
      "name": "Select (Menu List)",
      "desc": "A dropdown-like select rendered as a vertical list of menu items. Each item is a row of inverse-video when selected, otherwise plain text. The list behaves as a typical terminal menu such as 'Edit' or 'View'.",
      "html": "<div style=\"background: var(--bg); color: var(--on-bg); font-family: var(--font-body); font-size: 16px; line-height: 1; width: 200px;\"><div style=\"background: var(--primary); color: var(--on-primary); height: 20px; padding: 0 4px;\">> Open</div><div style=\"height: 20px; padding: 0 4px;\">  Save</div><div style=\"height: 20px; padding: 0 4px;\">  Close</div></div>",
      "label": "Select (Menu List)",
      "stateLabel": "A dropdown-like select rendered as a vertical list of menu items. Each item is a row of inverse-video when selected, otherwise plain text. The list behaves as a typical terminal menu such as 'Edit' or 'View'."
    },
    {
      "name": "Checkbox (Bracket Toggle)",
      "desc": "A terminal-style checkbox using square brackets. When checked, an 'X' appears inside; when unchecked, a space. The label is placed to the right, separated by a single space. Uses the primary color for the X.",
      "html": "<div style=\"display: flex; align-items: center; height: 20px; background: var(--bg); color: var(--on-bg); font-family: var(--font-body); font-size: 16px; line-height: 1;\"><span style=\"color: var(--primary);\">[X]</span><span style=\"margin-left: 4px;\">Enable logging</span></div>",
      "label": "Checkbox (Bracket Toggle)",
      "stateLabel": "A terminal-style checkbox using square brackets. When checked, an 'X' appears inside; when unchecked, a space. The label is placed to the right, separated by a single space. Uses the primary color for the X."
    }
  ],
  "extraComponents": [
    {
      "name": "Blinking Block Cursor",
      "desc": "A standalone block cursor that blinks at 0.5s intervals using steps(1). It fills one character cell (8px wide, 16px tall) with the primary color. Used to indicate the current insertion point in terminal interfaces.",
      "html": "<div style=\"display: inline-block; width: 8px; height: 16px; background: var(--primary); vertical-align: middle;\"></div>"
    },
    {
      "name": "Divider Line (Full-Width Dashes)",
      "desc": "A full-width row of dash characters that serves as a horizontal rule. The line is exactly one character cell in height (20px) and repeats the minus sign. No margins, no decorations.",
      "html": "<div style=\"background: var(--bg); color: var(--primary); font-family: var(--font-body); font-size: 16px; line-height: 1; height: 20px; overflow: hidden; white-space: nowrap;\">----------------------------------------------------------------</div>"
    },
    {
      "name": "Prompt Input Line with Status",
      "desc": "A composite element showing an active prompt with blinking cursor and a status indicator in the top-right corner (inverse video). Simulates a terminal session with a working prompt and a mode display.",
      "html": "<div style=\"position: relative; background: var(--bg); color: var(--on-bg); font-family: var(--font-body); font-size: 16px; line-height: 1;\"><span>$ </span><span style=\"color: var(--primary);\">ls -la</span><span style=\"display: inline-block; width: 8px; height: 16px; background: var(--primary); vertical-align: middle;\"></span><span style=\"position: absolute; right: 0; top: 0; background: var(--primary); color: var(--on-primary); padding: 0 4px; height: 20px; line-height: 20px;\">INS</span></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — VT100 TERMINAL</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — SYSTEM LOGIN v2.3</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — user@host:~$</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — Last login: Fri Mar 12 18:30:00 on tty1</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — STATUS: READY</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Rounded corners break the rigid character-cell matrix. Every element must have zero border-radius.",
      "avoid": {
        "html": "<div style=\"border-radius: 8px; background: #001100; color: #33FF33; padding: 4px;\">Rounded container</div>",
        "label": "Avoid"
      },
      "rule": "Rounded corners break the rigid character-cell matrix. Every element must have zero border-radius.",
      "do": {
        "label": "Do",
        "html": "<div style=\"border:1px solid #33FF33;padding:4px;font-family:VT323;font-size:16px;color:#33FF33;background:#001100;\">┌──────┐\n│ OK   │\n└──────┘</div>"
      }
    },
    {
      "desc": "Gradients introduce multiple hues, violating the monochrome phosphor rule. Only one green foreground color and one dark background.",
      "avoid": {
        "html": "<div style=\"background: linear-gradient(to right, #33FF33, #FFFFFF); color: #001100;\">Gradient background</div>",
        "label": "Avoid"
      },
      "rule": "Gradients introduce multiple hues, violating the monochrome phosphor rule. Only one green foreground color and one dark background.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Drop shadows simulate depth not present on a flat CRT surface. Use only phosphor glow via text-shadow.",
      "avoid": {
        "html": "<div style=\"box-shadow: 2px 2px 4px rgba(0,0,0,0.5); color: #33FF33; background: #001100;\">Card with shadow</div>",
        "label": "Avoid"
      },
      "rule": "Drop shadows simulate depth not present on a flat CRT surface. Use only phosphor glow via text-shadow.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Multiple foreground colors in the same view break the single-hue rule. All text must be the same green except for inverse-video areas.",
      "avoid": {
        "html": "<div style=\"color: #FF3333; background: #001100;\">Red text on dark background</div>",
        "label": "Avoid"
      },
      "rule": "Multiple foreground colors in the same view break the single-hue rule. All text must be the same green except for inverse-video areas.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "layouts": {
    "copy": {
      "heroKicker": "MONOCHROME PHOSPHOR TERMINAL",
      "heroHeadline": "VT100 TERMINAL INTERFACE",
      "heroSub": "80 x 24 CHARACTER GRID | NO ANTI-ALIASING | CRT ARTIFACTS",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\\x27background:#001100;color:#33FF33;border:1px solid #33FF33;font-family:VT323;font-size:16px;padding:0 4px;\\x27>EXEC</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\\x27background:#33FF33;color:#001100;border:none;font-family:VT323;font-size:16px;padding:0 4px;\\x27>MENU</button>",
      "navLinks": [
        "CONSOLE",
        "MONITOR",
        "LOG",
        "CFG"
      ],
      "features": [
        {
          "title": "COMMAND PROMPT",
          "desc": "Blinking block cursor at insertion point. Accepts line-oriented commands.",
          "icon": "⌨️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⌨️ COMMAND PROMPT</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Blinking block cursor at insertion point. Accepts line-oriented commands.</div></div>"
        },
        {
          "title": "STATUS LINE",
          "desc": "Inverse video bar at bottom. Displays mode and system state.",
          "icon": "📺",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📺 STATUS LINE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Inverse video bar at bottom. Displays mode and system state.</div></div>"
        },
        {
          "title": "SCROLLBACK BUFFER",
          "desc": "Dimmed older lines preserved in memory. Recall with page keys.",
          "icon": "📜",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📜 SCROLLBACK BUFFER</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Dimmed older lines preserved in memory. Recall with page keys.</div></div>"
        },
        {
          "title": "BOX-DRAWING SET",
          "desc": "Full VT100 line-drawing characters for forms and tables.",
          "icon": "▦",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">▦ BOX-DRAWING SET</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Full VT100 line-drawing characters for forms and tables.</div></div>"
        }
      ],
      "ctaStripHeadline": "INITIALIZE CONNECTION",
      "ctaStripHtml": "<div class='prompt' style='display:inline;'>[ CONNECT ]</div>",
      "sidebarBrand": "DEC VT100",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "MAIN",
          "active": true
        },
        {
          "icon": "◉",
          "label": "DATA",
          "active": false
        }
      ],
      "dashboardTitle": "SYSTEM MONITOR",
      "metrics": [
        {
          "label": "CPU",
          "value": "38%",
          "delta": "+5%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "MEM",
          "value": "2.1K",
          "delta": "-0.1K",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "TX",
          "value": "4.8Kbps",
          "delta": "+1.2K",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "RX",
          "value": "3.2Kbps",
          "delta": "+0.8K",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "UPTIME",
          "value": "12:34:56",
          "delta": "+1s",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "CHANNEL THROUGHPUT",
      "panelATitle": "EVENT LOG",
      "panelARows": [
        {
          "label": "BOOT",
          "value": "OK",
          "pct": 0
        },
        {
          "label": "MEM TEST",
          "value": "PASS",
          "pct": 0
        },
        {
          "label": "CLOCK SYNC",
          "value": "DONE",
          "pct": 0
        },
        {
          "label": "LINE INIT",
          "value": "READY",
          "pct": 0
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "TERMINAL CONFIG",
      "panelBCells": [
        {
          "label": "BAUD",
          "value": "9600",
          "state": "ok"
        },
        {
          "label": "PARITY",
          "value": "NONE",
          "state": "warn"
        },
        {
          "label": "DATA",
          "value": "8",
          "state": "err"
        },
        {
          "label": "STOP",
          "value": "1",
          "state": "ok"
        },
        {
          "label": "FLOW",
          "value": "XON/XOFF",
          "state": "warn"
        },
        {
          "label": "TERM",
          "value": "VT100",
          "state": "err"
        },
        {
          "label": "KBD",
          "value": "US",
          "state": "ok"
        },
        {
          "label": "BELL",
          "value": "ON",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "T+0",
        "T+10",
        "T+20",
        "T+30",
        "T+40",
        "T+50"
      ],
      "series": [
        {
          "data": [
            3,
            5,
            4,
            6,
            7,
            5,
            5,
            5,
            5,
            5,
            5,
            5
          ],
          "label": "TX",
          "axis": "left",
          "color": "#33FF33"
        },
        {
          "data": [
            2,
            4,
            3,
            5,
            6,
            4,
            4,
            4,
            4,
            4,
            4,
            4
          ],
          "label": "RX",
          "axis": "right-1",
          "color": "#33FF33"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText='min-height:480px;background:#001100;font-family:VT323;font-size:16px;line-height:1;color:#33FF33;padding:20px;'; el.innerHTML='<div style=\"white-space:pre-wrap;\">DEC VT100 TERMINAL  v2.3<br><br>SYSTEM POWER-ON SEQUENCE<br>ROM CHECKSUM .......... OK<br>MEMORY TEST ........... 64K OK<br>CLOCK SYNC ............. ACQUIRED<br>LINE INIT .............. DTE READY<br><br><span style=\"color:#1A7F1A;\">[ SCROLLBACK BUFFER CLEARED ]</span><br><br>$ <span style=\"display:inline-block;width:8px;height:16px;background:#33FF33;vertical-align:middle;animation:blink 1s steps(1) infinite;\"></span></div>'; }",
    "showcaseRender": "function(el) { el.style.cssText='font-family:VT323;font-size:16px;line-height:1;color:#33FF33;background:#001100;padding:0;'; el.innerHTML='<div style=\"display:grid;grid-template-columns:1fr 1fr;gap:4px;\">' + '<div style=\"border:1px solid #33FF33;padding:8px;\"><div style=\"font-weight:700;\">▦ COMMAND PROMPT</div><div style=\"color:#1A7F1A;\">Blinking block cursor at insertion point.</div></div>' + '<div style=\"border:1px solid #33FF33;padding:8px;\"><div style=\"font-weight:700;\">━ STATUS LINE</div><div style=\"color:#1A7F1A;\">Inverse video bar at bottom.</div></div>' + '<div style=\"border:1px solid #33FF33;padding:8px;\"><div style=\"font-weight:700;\">↕ SCROLLBACK BUFFER</div><div style=\"color:#1A7F1A;\">Dimmed older lines preserved.</div></div>' + '<div style=\"border:1px solid #33FF33;padding:8px;\"><div style=\"font-weight:700;\">┌─┐ BOX-DRAWING SET</div><div style=\"color:#1A7F1A;\">Full VT100 line-drawing characters.</div></div>' + '</div>'; }",
    "panelCRender": "function(el) { el.style.cssText='font-family:VT323;font-size:16px;line-height:1;color:#33FF33;background:#001100;'; el.innerHTML='<div style=\"border:1px solid #33FF33;\"><div style=\"background:#33FF33;color:#001100;padding:0 4px;height:20px;line-height:20px;\">TERMINAL CONFIG</div><div style=\"padding:4px;\">' + '<div><span>BAUD  </span><span style=\"color:#1A7F1A;\">9600</span></div>' + '<div><span>PARITY </span><span style=\"color:#1A7F1A;\">NONE</span></div>' + '<div><span>DATA  </span><span style=\"color:#1A7F1A;\">8</span></div>' + '<div><span>STOP  </span><span style=\"color:#1A7F1A;\">1</span></div>' + '<div><span>FLOW  </span><span style=\"color:#1A7F1A;\">XON/XOFF</span></div>' + '<div><span>TERM  </span><span style=\"color:#33FF33;\">VT100</span></div>' + '</div></div>'; }",
    "heroBackground": "function(el) { el.style.background='#001100'; }",
    "ctaBackground": "function(el) { el.style.background='#001100'; }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText='height:20px;line-height:20px;color:#33FF33;font-family:VT323;font-size:16px;white-space:nowrap;overflow:hidden;'; d.textContent='-'.repeat(80); return d; }",
    "dashboardShellBackground": "function(el) { el.style.background='#001100'; }",
    "surfaceOverlay": "function(el) { var ov=document.createElement('div'); ov.style.cssText='position:absolute;inset:0;z-index:2;pointer-events:none;background:radial-gradient(ellipse at center, transparent 60%, rgba(0,17,0,0.6) 100%);'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(el,tick) { var container=document.createElement('div'); container.style.cssText='position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:1;'; for(var i=0;i<5;i++){ var span=document.createElement('span'); span.textContent='\\u2591'; span.style.cssText='position:absolute;font-family:VT323;font-size:16px;color:#33FF33;opacity:'+(0.08+0.06*Math.sin((tick+i*30)*0.02))+';'; span.style.left=(10+i*20)+'px'; span.style.top=(40+i*30)+'px'; container.appendChild(span); } el.appendChild(container); }",
  "shadcnTokens": {
    "--color-background": "#001100",
    "--color-popover": "#001100",
    "--color-foreground": "#33FF33",
    "--color-card-foreground": "#33FF33",
    "--color-popover-foreground": "#33FF33",
    "--color-card": "#001100",
    "--color-muted": "#001100",
    "--color-muted-foreground": "#1A7F1A",
    "--color-primary": "#33FF33",
    "--color-ring": "#33FF33",
    "--color-primary-foreground": "#001100",
    "--color-secondary": "#33FF33",
    "--color-accent": "#33FF33",
    "--color-secondary-foreground": "#001100",
    "--color-accent-foreground": "#001100",
    "--color-border": "#1A7F1A",
    "--color-input": "#1A7F1A",
    "--color-destructive": "#33FF33"
  },
  "shadcnTokensClassic": {
    "--background": "#001100",
    "--popover": "#001100",
    "--foreground": "#33FF33",
    "--card-foreground": "#33FF33",
    "--popover-foreground": "#33FF33",
    "--card": "#001100",
    "--muted": "#001100",
    "--muted-foreground": "#1A7F1A",
    "--primary": "#33FF33",
    "--ring": "#33FF33",
    "--primary-foreground": "#001100",
    "--secondary": "#33FF33",
    "--accent": "#33FF33",
    "--secondary-foreground": "#001100",
    "--accent-foreground": "#001100",
    "--border": "#1A7F1A",
    "--input": "#1A7F1A",
    "--destructive": "#33FF33"
  }
});
