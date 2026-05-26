registerSystem({
  "meta": {
    "name": "Mac Classic",
    "tagline": "A nostalgic recreation of the 1984 Macintosh 128K interface — pure black on white bitmap rendering, fixed 512×342 pixel grid, Chicago bitmap typography, strict 1-bit logic with no anti-aliasing, gradients, or transparency.",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=VT323&display=swap"
  },
  "yamlTokens": {
    "name": "Mac Classic",
    "colors": {
      "neutral": "#FFFFFF",
      "on-neutral": "#000000",
      "primary": "#000000",
      "on-primary": "#FFFFFF",
      "surface-container": "#C0C0C0",
      "surface-container-high": "#808080"
    },
    "typography": {
      "display": {
        "fontFamily": "VT323",
        "fontSize": "12px",
        "fontWeight": 400,
        "lineHeight": 1.333,
        "letterSpacing": "0em"
      },
      "headline": {
        "fontFamily": "VT323",
        "fontSize": "12px",
        "fontWeight": 400,
        "lineHeight": 1.333,
        "letterSpacing": "0em"
      },
      "title": {
        "fontFamily": "VT323",
        "fontSize": "12px",
        "fontWeight": 400,
        "lineHeight": 1.333,
        "letterSpacing": "0em"
      },
      "body": {
        "fontFamily": "VT323",
        "fontSize": "12px",
        "fontWeight": 400,
        "lineHeight": 1.333,
        "letterSpacing": "0em"
      },
      "label": {
        "fontFamily": "VT323",
        "fontSize": "9px",
        "fontWeight": 400,
        "lineHeight": 1.333,
        "letterSpacing": "0em"
      }
    },
    "rounded": {
      "default": "4px",
      "card": "0px",
      "button": "2px",
      "input": "4px",
      "chip": "4px"
    },
    "spacing": {
      "component-internal": "2px",
      "section-internal": "4px",
      "page-edge": "8px",
      "between-components": "2px",
      "between-sections": "4px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "#FFFFFF",
        "textColor": "#000000",
        "rounded": "{rounded.button}",
        "padding": "2px",
        "height": "24px"
      },
      "button-primary-pressed": {
        "backgroundColor": "#000000",
        "textColor": "#FFFFFF",
        "rounded": "{rounded.button}",
        "padding": "2px",
        "height": "24px"
      },
      "card": {
        "backgroundColor": "#FFFFFF",
        "rounded": "0px",
        "padding": "4px"
      },
      "input": {
        "backgroundColor": "#FFFFFF",
        "textColor": "#000000",
        "rounded": "{rounded.input}",
        "padding": "2px",
        "height": "24px"
      },
      "input-focus": {
        "backgroundColor": "#FFFFFF",
        "textColor": "#000000",
        "rounded": "{rounded.input}",
        "padding": "2px",
        "height": "24px"
      },
      "menu-bar": {
        "backgroundColor": "#000000",
        "textColor": "#FFFFFF",
        "height": "22px",
        "padding": "2px"
      },
      "dialog": {
        "backgroundColor": "#FFFFFF",
        "textColor": "#000000",
        "rounded": "0px",
        "padding": "4px"
      }
    },
    "version": "alpha",
    "description": "A nostalgic recreation of the 1984 Macintosh 128K interface — pure black on white bitmap rendering, fixed 512×342 pixel grid, Chicago bitmap typography, strict 1-bit logic with no anti-aliasing, gradients, or transparency.",
    "provenance": {
      "coverage_status": "complete",
      "identity_description": "",
      "manual_enrichment_required": false,
      "imagery_count": 8,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": null,
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "en.wikipedia.org",
          "count": 4
        },
        {
          "host": "commons.wikimedia.org",
          "count": 1
        },
        {
          "host": "www.ifixit.com",
          "count": 1
        },
        {
          "host": "68kmla.org",
          "count": 1
        },
        {
          "host": "www.vintageapple.com",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://en.wikipedia.org/wiki/Macintosh_Classic",
          "host": "en.wikipedia.org",
          "institution": null,
          "confidence_original": "high"
        },
        {
          "url": "https://commons.wikimedia.org/wiki/Category:Macintosh_Classic",
          "host": "commons.wikimedia.org",
          "institution": "Wikimedia Commons",
          "confidence_original": "high"
        },
        {
          "url": "https://www.ifixit.com/Device/Macintosh_Classic",
          "host": "www.ifixit.com",
          "institution": "iFixit",
          "confidence_original": "high"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Apple_Garamond",
          "host": "en.wikipedia.org",
          "institution": null,
          "confidence_original": "high"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Happy_Mac",
          "host": "en.wikipedia.org",
          "institution": "Wikimedia Foundation",
          "confidence_original": "high"
        },
        {
          "url": "https://en.wikipedia.org/wiki/System_1",
          "host": "en.wikipedia.org",
          "institution": null,
          "confidence_original": "high"
        },
        {
          "url": "https://68kmla.org/bb/",
          "host": "68kmla.org",
          "institution": "68k Macintosh Liberation Army",
          "confidence_original": "low"
        },
        {
          "url": "https://www.vintageapple.com/",
          "host": "www.vintageapple.com",
          "institution": "Vintage Apple (fan collection)",
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
    "--bg": "#FFFFFF",
    "--on-bg": "#000000",
    "--primary": "#000000",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#000000",
    "--on-secondary": "#FFFFFF",
    "--surface": "#C0C0C0",
    "--on-bg-muted": "#4D4D4D",
    "--border": "#000000",
    "--error": "#000000",
    "--font-display": "VT323",
    "--font-body": "VT323",
    "--radius-default": "4px",
    "--radius-card": "0px",
    "--radius-btn": "4px",
    "--radius-chip": "4px"
  },
  "semanticColors": {
    "primary": "#000000",
    "secondary": "#000000",
    "success": "#000000",
    "warning": "#000000",
    "error": "#000000",
    "info": "#000000",
    "onPrimary": "#FFFFFF",
    "onSecondary": "#FFFFFF",
    "onSuccess": "#FFFFFF",
    "onWarning": "#FFFFFF",
    "onError": "#FFFFFF",
    "onInfo": "#FFFFFF",
    "err": "#000000",
    "ok": "#000000",
    "warn": "#000000",
    "deltaUp": "#000000",
    "deltaDown": "#000000",
    "deltaFlat": "#4D4D4D",
    "live": "#000000",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#4D4D4D",
    "chartFont": "VT323"
  },
  "chartStyle": {
    "lineColor": "#000000",
    "fillColor": "#FFFFFF",
    "gridColor": "#000000",
    "textColor": "#000000",
    "backgroundColor": "#FFFFFF",
    "labelColor": "#4D4D4D",
    "fontFamily": "VT323"
  },
  "surfaceModel": "flat",
  "materialSimulation": {
    "model": "crt-screen",
    "params": {}
  },
  "globalFilter": null,
  "globalBodyCss": "background-color: var(--bg); color: var(--on-bg); font-family: var(--font-body), monospace; font-size: 12px; image-rendering: pixelated; text-rendering: optimizeSpeed; -webkit-font-smoothing: none; -moz-osx-font-smoothing: unset;",
  "globalCss": ".ds-layout-frame img { image-rendering: pixelated; }",
  "interactionModel": {
    "hover": {
      "transition-duration": "0ms",
      "transition-timing-function": "step-start",
      "style": {}
    },
    "focus": {
      "transition-duration": "0ms",
      "transition-timing-function": "step-start",
      "style": {
        "outline": "1px dotted var(--border)",
        "outline-offset": "-1px"
      }
    },
    "active": {
      "transition-duration": "0ms",
      "transition-timing-function": "step-start",
      "style": {
        "background-color": "var(--primary)",
        "color": "var(--on-primary)"
      }
    }
  },
  "interactionStyles": ".ds-layout-frame * { transition: none !important; } .ds-layout-frame button:active, .ds-layout-frame a:active, .ds-layout-frame .pressable:active { background-color: var(--primary); color: var(--on-primary); } .ds-layout-frame button:focus, .ds-layout-frame input:focus, .ds-layout-frame .focusable:focus { outline: 1px dotted var(--border); outline-offset: -1px; }",
  "elevation": {
    "0": {
      "shadow": "none"
    },
    "10": {
      "shadow": "1px 1px 0px 0px #000000"
    },
    "20": {
      "shadow": "none"
    },
    "30": {
      "shadow": "1px 1px 0px 0px #000000"
    },
    "50": {
      "shadow": "none"
    }
  },
  "spacing": {
    "component-internal": "2px",
    "section-internal": "4px",
    "page-edge": "8px",
    "between-components": "2px",
    "between-sections": "4px"
  },
  "radius": {
    "default": "4px",
    "card": "0px",
    "button": "4px",
    "input": "4px",
    "chip": "4px"
  },
  "dashboardStyle": {
    "layout": "fixed",
    "density": "low",
    "panelTreatment": "windows with title bar, close/zoom boxes, size handle",
    "dataVizStyle": "none – only icons and text labels",
    "signatureElement": "Desktop icons on invisible grid with Trash in bottom-right corner"
  },
  "landingStyle": {
    "heroApproach": "Happy Mac boot screen (central smiling Mac icon) with optional 'Welcome to Macintosh' text below",
    "scrollBehavior": "none – no scroll, fixed 512x342 viewport",
    "ctaStyle": "Single large default button with bevel, black outline, white fill, text in Chicago",
    "signatureMoment": "The icon jitters or appears instantly with a 2-px offset animation on load (static in final)"
  },
  "buttons": [
    {
      "name": "button-primary",
      "desc": "Default raised button with 1px bevel highlight on top/left edges, black outline, white fill. Pressed state inverts.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--bg); color: var(--on-bg); border: 1px solid var(--border); border-top-color: var(--on-bg); border-left-color: var(--on-bg); border-bottom-color: var(--on-bg); border-right-color: var(--on-bg); padding: 2px; height: 24px; border-radius: var(--radius-btn); font-family: var(--font-body); font-size: 12px; cursor: pointer; transition: none; position: relative; box-shadow: 1px 1px 0 0 var(--border), -1px -1px 0 0 var(--bg);\">OK</button>",
      "label": "button-primary",
      "note": "Default raised button with 1px bevel highlight on top/left edges, black outline, white fill. Pressed state inverts."
    },
    {
      "name": "button-pressed",
      "desc": "Pressed/inverted button – black fill, white text, bevel reversed.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--on-bg); color: var(--bg); border: 1px solid var(--border); border-top-color: var(--bg); border-left-color: var(--bg); border-bottom-color: var(--on-bg); border-right-color: var(--on-bg); padding: 2px; height: 24px; border-radius: var(--radius-btn); font-family: var(--font-body); font-size: 12px; cursor: pointer; transition: none; box-shadow: -1px -1px 0 0 var(--border), 1px 1px 0 0 var(--on-bg);\">Cancel</button>",
      "label": "button-pressed",
      "note": "Pressed/inverted button – black fill, white text, bevel reversed."
    },
    {
      "name": "button-disabled",
      "desc": "Disabled button with dither pattern (gray fill) and no interactivity.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" disabled style=\"background-color: var(--surface); color: var(--on-bg); border: 1px solid var(--border); padding: 2px; height: 24px; border-radius: var(--radius-btn); font-family: var(--font-body); font-size: 12px; cursor: default; transition: none; pointer-events: none; background-image: repeating-linear-gradient(45deg, var(--surface) 0px 2px, var(--bg) 2px 4px);\">Save</button>",
      "label": "button-disabled",
      "note": "Disabled button with dither pattern (gray fill) and no interactivity."
    }
  ],
  "cards": [
    {
      "name": "window-card",
      "desc": "Classic Mac window with title bar, close box (filled square left), zoom box (empty square right), size handle bottom-right.",
      "html": "<div style=\"background-color: var(--bg); border: 1px solid var(--border); border-radius: var(--radius-card); width: 320px; font-family: var(--font-body); font-size: 12px;\"><div style=\"background-color: var(--on-bg); color: var(--bg); padding: 2px 4px; display: flex; align-items: center; gap: 4px;\"><div style=\"width: 10px; height: 10px; background-color: var(--bg); border: 1px solid var(--border);\"></div><span style=\"flex: 1;\">Untitled</span><div style=\"width: 10px; height: 10px; border: 1px solid var(--bg);\"></div></div><div style=\"padding: 4px;\">Content area with text and controls.</div><div style=\"height: 12px; background-color: var(--bg); border-top: 1px solid var(--border); display: flex; justify-content: flex-end;\"><div style=\"width: 12px; height: 12px; border: 1px solid var(--border); background-color: var(--bg);\"></div></div></div>",
      "label": "window-card",
      "note": "Classic Mac window with title bar, close box (filled square left), zoom box (empty square right), size handle bottom-right."
    },
    {
      "name": "dialog-card",
      "desc": "Simple dialog box with alert message and two buttons, no title bar chrome.",
      "html": "<div style=\"background-color: var(--bg); border: 1px solid var(--border); border-radius: var(--radius-card); width: 280px; padding: 8px; font-family: var(--font-body); font-size: 12px;\"><p style=\"margin: 0 0 8px 0;\">This disk is unreadable. Do you wish to initialize it?</p><div style=\"display: flex; justify-content: center; gap: 8px;\"><button style=\"background-color: var(--bg); color: var(--on-bg); border: 1px solid var(--border); padding: 2px 12px; border-radius: var(--radius-btn); font-family: var(--font-body); font-size: 12px; cursor: pointer;\">Erase</button><button style=\"background-color: var(--bg); color: var(--on-bg); border: 1px solid var(--border); padding: 2px 12px; border-radius: var(--radius-btn); font-family: var(--font-body); font-size: 12px; cursor: pointer;\">Eject</button></div></div>",
      "label": "dialog-card",
      "note": "Simple dialog box with alert message and two buttons, no title bar chrome."
    }
  ],
  "forms": [
    {
      "name": "text-input",
      "desc": "Text input with 1px black border and inset bevel.",
      "html": "<div style=\"font-family: var(--font-body); font-size: 12px;\"><label style=\"display: block; margin-bottom: 2px;\">Name:</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" value=\"Macintosh HD\" style=\"background-color: var(--bg); color: var(--on-bg); border: 1px solid var(--border); padding: 2px; height: 24px; border-radius: var(--radius-input, 4px); font-family: var(--font-body); font-size: 12px; box-shadow: inset 1px 1px 0 0 var(--border); width: 100%; box-sizing: border-box;\" /></div>",
      "label": "text-input",
      "stateLabel": "Text input with 1px black border and inset bevel."
    },
    {
      "name": "checkbox",
      "desc": "Classic Mac checkbox: 10px black square, checked has a black pixel checkmark.",
      "html": "<label style=\"font-family: var(--font-body); font-size: 12px; display: inline-flex; align-items: center; gap: 4px; cursor: pointer;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"appearance: none; width: 10px; height: 10px; border: 1px solid var(--border); background-color: var(--bg); margin: 0; cursor: pointer; position: relative;\" checked /><span>Show invisible files</span></label>",
      "label": "checkbox",
      "stateLabel": "Classic Mac checkbox: 10px black square, checked has a black pixel checkmark."
    },
    {
      "name": "radio-button",
      "desc": "Classic Mac radio button: square with dot when selected (bitmap style).",
      "html": "<label style=\"font-family: var(--font-body); font-size: 12px; display: inline-flex; align-items: center; gap: 4px; cursor: pointer;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"radio\" name=\"font\" style=\"appearance: none; width: 10px; height: 10px; border: 1px solid var(--border); background-color: var(--bg); margin: 0; cursor: pointer; position: relative;\" checked /><span>Chicago</span></label>",
      "label": "radio-button",
      "stateLabel": "Classic Mac radio button: square with dot when selected (bitmap style)."
    }
  ],
  "extraComponents": [
    {
      "name": "menu-bar",
      "desc": "Solid black menu bar across top with white text, Apple logo on left, menu titles.",
      "html": "<div style=\"background-color: var(--on-bg); color: var(--bg); height: 22px; padding: 2px 4px; font-family: var(--font-body); font-size: 12px; display: flex; align-items: center; gap: 8px;\"><span style=\"font-weight: bold;\"></span><span>Finder</span><span>File</span><span>Edit</span><span>View</span><span style=\"flex: 1;\"></span><span>Special</span></div>"
    },
    {
      "name": "progress-bar",
      "desc": "Indeterminate progress bar using dither pattern (alternating black/white pixels).",
      "html": "<div style=\"width: 200px; height: 12px; border: 1px solid var(--border); background-color: var(--bg);\"><div style=\"height: 100%; width: 40%; background-image: repeating-linear-gradient(45deg, var(--on-bg) 0px 2px, var(--bg) 2px 4px);\"></div></div>"
    },
    {
      "name": "pixel-icon-folder",
      "desc": "32×32 pixel folder icon: black outline, white fill, tab on top.",
      "html": "<div style=\"width: 32px; height: 32px; image-rendering: pixelated; position: relative;\"><div style=\"position: absolute; top: 0; left: 8px; width: 16px; height: 6px; background-color: var(--bg); border: 1px solid var(--border); border-bottom: none;\"></div><div style=\"position: absolute; top: 6px; left: 2px; width: 28px; height: 24px; background-color: var(--bg); border: 1px solid var(--border);\"></div></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — Macintosh Classic</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — System Software 1.0</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — Untitled Folder</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — Welcome to Macintosh. The desktop is ready.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — Finder</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Avoid any rounded corners on windows or dialogs; only buttons have 4px rounding. This example incorrectly rounds the window border.",
      "avoid": {
        "html": "<div style=\"border: 1px solid black; border-radius: 8px; padding: 8px;\">Wrong: rounded window</div>",
        "label": "Avoid"
      },
      "rule": "Avoid any rounded corners on windows or dialogs; only buttons have 4px rounding. This example incorrectly rounds the window border.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Never use anti-aliased text or font smoothing. This example uses `text-rendering: optimizeLegibility` which introduces sub-pixel rendering.",
      "avoid": {
        "html": "<p style=\"font-family: 'VT323'; text-rendering: optimizeLegibility;\">Anti-aliased text is forbidden</p>",
        "label": "Avoid"
      },
      "rule": "Never use anti-aliased text or font smoothing. This example uses `text-rendering: optimizeLegibility` which introduces sub-pixel rendering.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Avoid hover effects or transitions. Classic Mac has no hover states; only immediate press inversion. This example has a hover color change.",
      "avoid": {
        "html": "<button style=\"background-color: white; border: 1px solid black; transition: background-color 0.3s;\" onmouseover=\"this.style.backgroundColor='gray'\">Hover not allowed</button>",
        "label": "Avoid"
      },
      "rule": "Avoid hover effects or transitions. Classic Mac has no hover states; only immediate press inversion. This example has a hover color change.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not use any color other than black, white, or the specified grays (#C0C0C0, #808080). This example uses blue, which breaks the monochrome rule.",
      "avoid": {
        "html": "<div style=\"background-color: #0000FF; color: white;\">Blue is not part of the palette</div>",
        "label": "Avoid"
      },
      "rule": "Do not use any color other than black, white, or the specified grays (#C0C0C0, #808080). This example uses blue, which breaks the monochrome rule.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "layouts": {
    "copy": {
      "heroKicker": "SYSTEM 1.1",
      "heroHeadline": "Macintosh Classic",
      "heroSub": "PURE 1-BIT COMPUTING",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">BOOT DISK</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">RESET</button>",
      "navLinks": [
        "FINDER",
        "FILE",
        "EDIT",
        "VIEW",
        "SPECIAL"
      ],
      "features": [
        {
          "title": "DESKTOP ICONS",
          "desc": "32x32 pixel bitmaps on a fixed grid. No shadows. No anti-aliasing.",
          "icon": "💾",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">💾 DESKTOP ICONS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">32x32 pixel bitmaps on a fixed grid. No shadows. No anti-aliasing.</div></div>"
        },
        {
          "title": "MENU BAR",
          "desc": "Solid black bar with white Chicago 12px text. Apple logo at far left.",
          "icon": "🍎",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🍎 MENU BAR</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Solid black bar with white Chicago 12px text. Apple logo at far left.</div></div>"
        },
        {
          "title": "WINDOW CHROME",
          "desc": "1px black border, close box (filled square), zoom box (empty square), size handle.",
          "icon": "🪟",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🪟 WINDOW CHROME</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">1px black border, close box (filled square), zoom box (empty square), size handle.</div></div>"
        },
        {
          "title": "INSTANT STATE",
          "desc": "No hover. No transitions. Press inverts black to white instantly.",
          "icon": "⚡",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⚡ INSTANT STATE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">No hover. No transitions. Press inverts black to white instantly.</div></div>"
        }
      ],
      "ctaStripHeadline": "INSERT SYSTEM DISK",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">RESTART</button>",
      "sidebarBrand": "Mac Classic",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "ABOUT THIS MAC",
          "active": true
        },
        {
          "icon": "◉",
          "label": "SYSTEM INFO",
          "active": false
        }
      ],
      "dashboardTitle": "FINDER",
      "metrics": [
        {
          "label": "DISKS",
          "value": "1",
          "delta": "0",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "MEMORY",
          "value": "128K",
          "delta": "0%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "PROCESSES",
          "value": "3",
          "delta": "0",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "CLIPBOARD",
          "value": "EMPTY",
          "delta": "—",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "SYSTEM ACTIVITY",
      "panelATitle": "FOLDER CONTENTS",
      "panelARows": [
        {
          "label": "System Folder",
          "value": "254K",
          "pct": 100
        },
        {
          "label": "Finder",
          "value": "112K",
          "pct": 100
        },
        {
          "label": "Note Pad",
          "value": "8K",
          "pct": 8
        },
        {
          "label": "Scrapbook",
          "value": "16K",
          "pct": 16
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "DRIVE INFO",
      "panelBCells": [
        {
          "label": "TYPE",
          "value": "HD",
          "state": "ok"
        },
        {
          "label": "CAPACITY",
          "value": "20MB",
          "state": "warn"
        },
        {
          "label": "USED",
          "value": "8MB",
          "state": "err"
        },
        {
          "label": "FREE",
          "value": "12MB",
          "state": "ok"
        },
        {
          "label": "FORMAT",
          "value": "HFS",
          "state": "warn"
        },
        {
          "label": "INTERFACE",
          "value": "SCSI",
          "state": "err"
        },
        {
          "label": "SPEED",
          "value": "5400 RPM",
          "state": "ok"
        },
        {
          "label": "SERIAL",
          "value": "M0001",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "T0",
        "T1",
        "T2",
        "T3",
        "T4",
        "T5"
      ],
      "series": [
        {
          "data": [
            45,
            38,
            62,
            55,
            70,
            48,
            48,
            48,
            48,
            48,
            48,
            48
          ],
          "label": "CPU",
          "axis": "left",
          "color": "#000000"
        },
        {
          "data": [
            30,
            32,
            35,
            34,
            38,
            36,
            36,
            36,
            36,
            36,
            36,
            36
          ],
          "label": "MEM",
          "axis": "right-1",
          "color": "#000000"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'min-height:240px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:var(--bg);'; var inner = document.createElement('div'); inner.style.cssText = 'width:512px;max-width:100%;text-align:center;font-family:var(--font-display),monospace;font-size:12px;font-smooth:never;text-rendering:optimizeSpeed;image-rendering:pixelated;'; var icon = document.createElement('div'); icon.style.cssText = 'width:64px;height:64px;margin:0 auto 8px;background:var(--bg);border:1px solid var(--primary);position:relative;'; var eye1 = document.createElement('div'); eye1.style.cssText = 'position:absolute;top:16px;left:16px;width:4px;height:4px;background:var(--primary);'; var eye2 = document.createElement('div'); eye2.style.cssText = 'position:absolute;top:16px;right:16px;width:4px;height:4px;background:var(--primary);'; var mouth = document.createElement('div'); mouth.style.cssText = 'position:absolute;bottom:16px;left:12px;width:40px;height:2px;background:var(--primary);'; icon.appendChild(eye1); icon.appendChild(eye2); icon.appendChild(mouth); inner.appendChild(icon); var text = document.createElement('div'); text.style.cssText = 'color:var(--primary);font-size:12px;margin-top:8px;'; text.textContent = 'Welcome to Macintosh'; inner.appendChild(text); el.appendChild(inner); }",
    "showcaseRender": "function(el) { el.style.cssText = 'background:var(--bg);min-height:200px;padding:8px;position:relative;'; var folder = document.createElement('div'); folder.style.cssText = 'width:32px;height:32px;position:absolute;top:40px;left:40px;'; var tab = document.createElement('div'); tab.style.cssText = 'position:absolute;top:0;left:8px;width:16px;height:6px;background:var(--bg);border:1px solid var(--primary);border-bottom:none;'; var body = document.createElement('div'); body.style.cssText = 'position:absolute;top:6px;left:2px;width:28px;height:24px;background:var(--bg);border:1px solid var(--primary);'; folder.appendChild(tab); folder.appendChild(body); var label = document.createElement('div'); label.style.cssText = 'position:absolute;top:34px;left:4px;width:48px;text-align:center;font-family:var(--font-display);font-size:12px;color:var(--primary);'; label.textContent = 'Untitled'; folder.appendChild(label); el.appendChild(folder); var hd = document.createElement('div'); hd.style.cssText = 'width:32px;height:32px;position:absolute;top:40px;right:40px;background:var(--bg);border:1px solid var(--primary);'; var hdLabel = document.createElement('div'); hdLabel.style.cssText = 'position:absolute;top:34px;right:8px;width:48px;text-align:center;font-family:var(--font-display);font-size:12px;color:var(--primary);'; hdLabel.textContent = 'Macintosh HD'; hd.appendChild(hdLabel); el.appendChild(hd); var trash = document.createElement('div'); trash.style.cssText = 'width:32px;height:32px;position:absolute;bottom:16px;right:40px;background:var(--bg);border:1px solid var(--primary);'; el.appendChild(trash); var trashLabel = document.createElement('div'); trashLabel.style.cssText = 'position:absolute;bottom:0;right:20px;width:48px;text-align:center;font-family:var(--font-display);font-size:12px;color:var(--primary);'; trashLabel.textContent = 'Trash'; el.appendChild(trashLabel); }",
    "panelCRender": "function(el) { el.style.cssText = 'background:var(--bg);border:1px solid var(--primary);padding:4px;font-family:var(--font-display);font-size:12px;color:var(--primary);'; var title = document.createElement('div'); title.style.cssText = 'font-weight:bold;margin-bottom:4px;'; title.textContent = 'DRIVE INFO'; el.appendChild(title); var cells = [{label:'TYPE', value:'HD', state:'ok'},{label:'CAPACITY', value:'20MB', state:'warn'},{label:'USED', value:'8MB', state:'err'},{label:'FREE', value:'12MB', state:'ok'},{label:'FORMAT', value:'HFS', state:'warn'},{label:'INTERFACE', value:'SCSI', state:'err'},{label:'SPEED', value:'5400 RPM', state:'ok'},{label:'SERIAL', value:'M0001', state:'warn'}]; cells.forEach(function(c) { var row = document.createElement('div'); row.style.cssText = 'display:flex;justify-content:space-between;padding:1px 0;'; var label = document.createElement('span'); label.textContent = c.label+':'; var value = document.createElement('span'); value.textContent = c.value; row.appendChild(label); row.appendChild(value); el.appendChild(row); }); }",
    "heroBackground": "function(el) { el.style.background = 'var(--bg)'; }",
    "ctaBackground": "function(el) { el.style.background = 'var(--bg)'; }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText='height:1px;background:var(--primary);margin:0;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = 'var(--bg)'; }",
    "surfaceOverlay": "function(el) { var d = document.createElement('div'); d.style.cssText = 'position:absolute;inset:0;pointer-events:none;background:transparent;'; el.appendChild(d); }"
  },
  "ambientCanvas": "function(tick) { var d = document.createElement('div'); d.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9998;background-size:2px 2px;'; if (tick % 2 === 0) { d.style.backgroundImage = 'linear-gradient(45deg, var(--surface) 25%, var(--bg) 25% 50%, var(--surface) 50% 75%, var(--bg) 75%)'; } else { d.style.backgroundImage = 'linear-gradient(-45deg, var(--surface) 25%, var(--bg) 25% 50%, var(--surface) 50% 75%, var(--bg) 75%)'; } return d; }",
  "shadcnTokens": {
    "--color-background": "#FFFFFF",
    "--color-popover": "#FFFFFF",
    "--color-foreground": "#000000",
    "--color-card-foreground": "#000000",
    "--color-popover-foreground": "#000000",
    "--color-card": "#C0C0C0",
    "--color-muted": "#C0C0C0",
    "--color-muted-foreground": "#4D4D4D",
    "--color-primary": "#000000",
    "--color-ring": "#000000",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#000000",
    "--color-accent": "#000000",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
    "--color-border": "#000000",
    "--color-input": "#000000",
    "--color-destructive": "#000000"
  },
  "shadcnTokensClassic": {
    "--background": "#FFFFFF",
    "--popover": "#FFFFFF",
    "--foreground": "#000000",
    "--card-foreground": "#000000",
    "--popover-foreground": "#000000",
    "--card": "#C0C0C0",
    "--muted": "#C0C0C0",
    "--muted-foreground": "#4D4D4D",
    "--primary": "#000000",
    "--ring": "#000000",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#000000",
    "--accent": "#000000",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#000000"
  }
});
