registerSystem({
  "meta": {
    "name": "Amiga Workbench 1.3",
    "tagline": "Pixel-precise retro GUI from the late 1980s",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=VT323&display=swap"
  },
  "yamlTokens": {
    "name": "Amiga Workbench 1.3",
    "colors": {
      "primary": "#0055AA",
      "on-primary": "#FFFFFF",
      "surface": "#FFFFFF",
      "on-surface": "#000000",
      "secondary": "#FF8800",
      "on-secondary": "#000000",
      "outline": "#000000",
      "outline-variant": "#808080"
    },
    "typography": {
      "display": {
        "fontFamily": "VT323, monospace",
        "fontSize": "12px",
        "fontWeight": 400,
        "lineHeight": 1,
        "letterSpacing": "0em",
        "textTransform": "none"
      },
      "headline": {
        "fontFamily": "VT323, monospace",
        "fontSize": "12px",
        "fontWeight": 400,
        "lineHeight": 1,
        "letterSpacing": "0em",
        "textTransform": "none"
      },
      "title": {
        "fontFamily": "VT323, monospace",
        "fontSize": "12px",
        "fontWeight": 400,
        "lineHeight": 1,
        "letterSpacing": "0em",
        "textTransform": "none"
      },
      "body": {
        "fontFamily": "VT323, monospace",
        "fontSize": "12px",
        "fontWeight": 400,
        "lineHeight": 1,
        "letterSpacing": "0em",
        "textTransform": "none"
      },
      "label": {
        "fontFamily": "VT323, monospace",
        "fontSize": "12px",
        "fontWeight": 400,
        "lineHeight": 1,
        "letterSpacing": "0em",
        "textTransform": "none"
      }
    },
    "rounded": {
      "default": "0px",
      "card": "0px",
      "button": "0px",
      "input": "0px"
    },
    "spacing": {
      "component-internal": "4px",
      "section-internal": "8px",
      "page-edge": "8px",
      "gap-component": "8px",
      "gap-section": "12px",
      "height-sm": "16px",
      "height-md": "24px",
      "height-lg": "32px",
      "icon": "32px"
    },
    "components": {
      "button": {
        "backgroundColor": "#FFFFFF",
        "textColor": "#000000",
        "rounded": "{rounded.button}",
        "padding": "4px",
        "height": "16px"
      },
      "button-active": {
        "backgroundColor": "#FFFFFF",
        "textColor": "#000000",
        "rounded": "{rounded.button}",
        "padding": "4px"
      },
      "window": {
        "backgroundColor": "#FFFFFF",
        "rounded": "{rounded.default}",
        "padding": "8px"
      },
      "menu-bar": {
        "backgroundColor": "#0055AA",
        "textColor": "#FFFFFF",
        "padding": "4px",
        "height": "14px"
      },
      "icon": {
        "width": "32px",
        "height": "32px"
      },
      "input": {
        "backgroundColor": "#FFFFFF",
        "textColor": "#000000",
        "rounded": "{rounded.input}",
        "padding": "4px"
      },
      "status-bar": {
        "backgroundColor": "#FF8800",
        "textColor": "#000000",
        "height": "8px"
      },
      "metric-cell": {
        "backgroundColor": "#0055AA",
        "textColor": "#FFFFFF",
        "padding": "4px"
      },
      "signal-bar-track": {
        "backgroundColor": "#808080",
        "height": "4px"
      },
      "signal-bar-fill": {
        "backgroundColor": "#FFFFFF",
        "height": "4px"
      }
    },
    "version": "alpha",
    "description": "A pixel-precise, chunky GUI language reproducing the Commodore Amiga Workbench 1.3 interface from the late 1980s, built around hard edges, a strict 4-colour palette, monospaced bitmap typography, and no anti-aliasing or gradients.",
    "provenance": {
      "coverage_status": "minimal",
      "identity_description": "",
      "manual_enrichment_required": true,
      "imagery_count": 2,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": null,
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "archive.org",
          "count": 1
        },
        {
          "host": "www.commodore.ca",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://archive.org/details/amiga-hardware-reference-manual-3rd-edition",
          "host": "archive.org",
          "institution": "Internet Archive",
          "confidence_original": "medium"
        },
        {
          "url": "https://www.commodore.ca/",
          "host": "www.commodore.ca",
          "institution": "Commodore.ca (fan archive)",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": {},
      "flags": [
        "few_usable_urls",
        "no_typography_extracted",
        "no_colour_extracted"
      ],
      "honest_gaps": {}
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#0055AA",
    "--on-bg": "#FFFFFF",
    "--primary": "#0055AA",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#FF8800",
    "--on-secondary": "#000000",
    "--surface": "#FFFFFF",
    "--on-bg-muted": "#a7a7a7",
    "--border": "#000000",
    "--error": "#000000",
    "--font-display": "VT323, monospace",
    "--font-body": "VT323, monospace",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "primary": "#0055AA",
    "secondary": "#FF8800",
    "error": "#000000",
    "err": "#000000",
    "warn": "#FF8C42",
    "ok": "#22C55E",
    "deltaUp": "#22C55E",
    "deltaDown": "#000000",
    "deltaFlat": "#e6eef7",
    "live": "#0055AA",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#e6eef7",
    "chartFont": "Space Grotesk"
  },
  "chartStyle": {
    "background": "#0055AA",
    "gridLineColor": "#FFFFFF",
    "gridLineWidth": "1px",
    "axisLabelFont": "var(--font-display)",
    "axisLabelColor": "#FFFFFF",
    "lineColor": "#FFFFFF",
    "lineWidth": "1px",
    "dotColor": "#FFFFFF",
    "dotRadius": "2px",
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#e6eef7",
    "fontFamily": "VT323, monospace"
  },
  "surfaceModel": "bevel",
  "materialSimulation": {
    "model": "crt-screen",
    "params": {
      "scanlines": true,
      "vignette": true
    }
  },
  "interactionModel": {
    "hover": {
      "state": "none",
      "pointer": "default"
    },
    "focus": {
      "outline": "none"
    },
    "active": {
      "transform": "translate(1px, 1px)",
      "transition": "0ms",
      "transitionTimingFunction": "steps(1)"
    }
  },
  "spacing": {
    "component-internal": "4px",
    "section-internal": "8px",
    "page-edge": "8px",
    "gap-component": "8px",
    "gap-section": "12px",
    "height-sm": "16px",
    "height-md": "24px",
    "height-lg": "32px",
    "icon": "32px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px"
  },
  "elevation": {
    "0": "none",
    "1": "2px 2px 0 0 #000000",
    "2": "none"
  },
  "dashboardStyle": {
    "layout": "grid-based with metric cells, signal bars, and bordered windows",
    "density": "compact (8px gaps, 4px internal padding)",
    "panelTreatment": "beveled raised panels (1px white top/left, 1px black bottom/right)",
    "dataVizStyle": "pixel-precise line and bar charts with 1px strokes, no antialiasing",
    "signatureElement": "orange status bar at bottom with black monospace status text"
  },
  "landingStyle": {
    "heroApproach": "centered active window with checkerboard title bar on a blue grid backdrop (8px repeating lines)",
    "scrollBehavior": "none (static, non-scrollable screen)",
    "ctaStyle": "raised white button with bevel, no hover state",
    "signatureMoment": "disk icon with 2px black drop shadow appearing on boot"
  },
  "globalFilter": null,
  "globalBodyCss": "background-color: var(--bg); font-family: var(--font-display); color: var(--on-bg); image-rendering: pixelated; text-rendering: optimizeSpeed; -webkit-font-smoothing: none; -moz-osx-font-smoothing: unset; margin: 0;",
  "globalCss": ".ds-layout-frame .scanlines::after { content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: repeating-linear-gradient(transparent 0 1px, rgba(0,0,0,0.15) 1px 2px); pointer-events: none; z-index: 9999; mix-blend-mode: multiply; opacity: 0.75; } .ds-layout-frame .vignette::after { content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(ellipse at center, transparent 70%, rgba(0,0,0,0.2) 100%); pointer-events: none; z-index: 9999; }",
  "interactionStyles": ".ds-layout-frame .button:active { transform: translate(1px, 1px); transition: none; } .ds-layout-frame .button:active .bevel { border-color: var(--on-surface) var(--on-primary) var(--on-primary) var(--on-surface); }",
  "buttons": [
    {
      "name": "Default Button",
      "desc": "Standard raised bevel button with 1px white top/left and 1px black bottom/right. White fill, black monospace text.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--surface); color: var(--on-surface); font-family: var(--font-display); font-size: 12px; font-weight: 400; line-height: 1; padding: 2px 8px; height: 16px; border: none; border-top: 1px solid var(--on-primary); border-left: 1px solid var(--on-primary); border-bottom: 1px solid var(--outline); border-right: 1px solid var(--outline); border-radius: var(--radius-btn); cursor: default; image-rendering: pixelated;\">OK</button>",
      "label": "Default Button",
      "note": "Standard raised bevel button with 1px white top/left and 1px black bottom/right. White fill, black monospace text."
    },
    {
      "name": "Active Button",
      "desc": "Depressed bevel (reversed borders) with 1px down/right shift. Simulates pressed state.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--surface); color: var(--on-surface); font-family: var(--font-display); font-size: 12px; font-weight: 400; line-height: 1; padding: 2px 8px; height: 16px; border: none; border-top: 1px solid var(--outline); border-left: 1px solid var(--outline); border-bottom: 1px solid var(--on-primary); border-right: 1px solid var(--on-primary); border-radius: var(--radius-btn); cursor: default; transform: translate(1px, 1px); image-rendering: pixelated;\">OK</button>",
      "label": "Active Button",
      "note": "Depressed bevel (reversed borders) with 1px down/right shift. Simulates pressed state."
    },
    {
      "name": "Disabled Button",
      "desc": "Inactive button with grey fill (#808080) and no bevel. Non-interactive.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" disabled style=\"background-color: var(--outline-variant); color: var(--on-surface); font-family: var(--font-display); font-size: 12px; font-weight: 400; line-height: 1; padding: 2px 8px; height: 16px; border: 1px solid var(--outline-variant); border-radius: var(--radius-btn); cursor: default; image-rendering: pixelated;\">OK</button>",
      "label": "Disabled Button",
      "note": "Inactive button with grey fill (#808080) and no bevel. Non-interactive."
    }
  ],
  "cards": [
    {
      "name": "Window Card",
      "desc": "Active window card with 2×2 checkerboard title bar (blue/white) and white body. Outer border 2px solid black, inner bevel 1px white top/left and black bottom/right.",
      "html": "<div style=\"background-color: var(--surface); color: var(--on-surface); font-family: var(--font-display); font-size: 12px; font-weight: 400; line-height: 1; border: 2px solid var(--outline); border-radius: var(--radius-default); width: 240px; image-rendering: pixelated;\"><div style=\"height: 14px; border-bottom: 1px solid var(--outline); background-image: repeating-conic-gradient(var(--primary) 0deg 90deg, var(--on-primary) 90deg 180deg); background-size: 4px 4px; background-position: 0 0; display: flex; align-items: center; justify-content: center; color: var(--on-primary); font-size: 12px; text-transform: none;\">Untitled</div><div style=\"padding: 4px; border-top: 1px solid var(--on-primary); border-left: 1px solid var(--on-primary); border-bottom: 1px solid var(--outline); border-right: 1px solid var(--outline); margin: -1px;\">Content area</div></div>",
      "label": "Window Card",
      "note": "Active window card with 2×2 checkerboard title bar (blue/white) and white body. Outer border 2px solid black, inner bevel 1px white top/left and black bottom/right."
    },
    {
      "name": "Dialog Card",
      "desc": "Simple dialog with grey borders and orange status bottom. No checkerboard – used for inactive or system messages.",
      "html": "<div style=\"background-color: var(--surface); color: var(--on-surface); font-family: var(--font-display); font-size: 12px; font-weight: 400; line-height: 1; border: 2px solid var(--outline); border-radius: var(--radius-default); width: 200px; image-rendering: pixelated;\"><div style=\"padding: 8px; border-top: 1px solid var(--on-primary); border-left: 1px solid var(--on-primary); border-bottom: 1px solid var(--outline); border-right: 1px solid var(--outline);\">Are you sure?</div><div style=\"height: 8px; background-color: var(--secondary); border-top: 1px solid var(--outline); color: var(--on-secondary); font-size: 8px; padding: 0 4px; display: flex; align-items: center;\">Status</div></div>",
      "label": "Dialog Card",
      "note": "Simple dialog with grey borders and orange status bottom. No checkerboard – used for inactive or system messages."
    }
  ],
  "forms": [
    {
      "name": "Text Input",
      "desc": "Simple text input with white background and 1px solid black border. No rounded corners, no focus ring.",
      "html": "<div style=\"background-color: var(--surface); border: 1px solid var(--outline); border-radius: var(--radius-input); padding: 2px 4px; display: inline-block;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" placeholder=\"Type...\" style=\"background: none; border: none; font-family: var(--font-display); font-size: 12px; color: var(--on-surface); width: 120px; padding: 0; outline: none; image-rendering: pixelated;\"></div>",
      "label": "Text Input",
      "stateLabel": "Simple text input with white background and 1px solid black border. No rounded corners, no focus ring."
    },
    {
      "name": "Cycle Gadget (Dropdown)",
      "desc": "A selection gadget with white fill, black border, and an orange arrow. Lists options when clicked.",
      "html": "<div style=\"background-color: var(--surface); border: 1px solid var(--outline); border-radius: var(--radius-input); padding: 2px 4px; display: inline-flex; align-items: center; font-family: var(--font-display); font-size: 12px; color: var(--on-surface); image-rendering: pixelated;\"><span style=\"flex:1;\">Option 1</span><span style=\"border-left: 1px solid var(--outline); padding-left: 4px; margin-left: 4px; color: var(--secondary);\">▼</span></div>",
      "label": "Cycle Gadget (Dropdown)",
      "stateLabel": "A selection gadget with white fill, black border, and an orange arrow. Lists options when clicked."
    },
    {
      "name": "Checkbox",
      "desc": "A square checkbox with 1px solid border. Checked state shows a black 'x' in the centre.",
      "html": "<div style=\"display: inline-flex; align-items: center; gap: 4px; font-family: var(--font-display); font-size: 12px; color: var(--on-surface); image-rendering: pixelated;\"><span style=\"display: inline-block; width: 12px; height: 12px; border: 1px solid var(--outline); background-color: var(--surface); text-align: center; line-height: 12px;\">x</span><label>Enable</label></div>",
      "label": "Checkbox",
      "stateLabel": "A square checkbox with 1px solid border. Checked state shows a black 'x' in the centre."
    }
  ],
  "extraComponents": [
    {
      "name": "Menu Bar",
      "desc": "Top-level menu bar with blue background and white monospace text. Items are separated by vertical bars.",
      "html": "<div style=\"background-color: var(--primary); color: var(--on-primary); font-family: var(--font-display); font-size: 12px; font-weight: 400; line-height: 1; padding: 2px 8px; height: 14px; display: flex; align-items: center; gap: 8px; image-rendering: pixelated;\"><span>Project</span><span style=\"color: var(--outline);\">|</span><span>Disk</span><span style=\"color: var(--outline);\">|</span><span>Tools</span><span style=\"color: var(--outline);\">|</span><span>Windows</span></div>"
    },
    {
      "name": "Disk Icon",
      "desc": "32x32 icon with 1px black outline, white fill, blue highlight on top half. 2px solid black drop shadow offset right/down.",
      "html": "<div style=\"width: 34px; height: 34px; position: relative; image-rendering: pixelated;\"><div style=\"position: absolute; top: 2px; left: 2px; width: 32px; height: 32px; background-color: var(--outline); z-index: -1;\"></div><div style=\"width: 32px; height: 32px; border: 1px solid var(--outline); background-color: var(--surface); display: flex; align-items: flex-start; justify-content: flex-start; font-size: 0;\"><span style=\"display: block; width: 100%; height: 50%; background-color: #0055AA;\"></span></div><span style=\"position: absolute; bottom: 2px; left: 8px; font-family: var(--font-display); font-size: 8px; color: var(--on-surface);\">df0:</span></div>"
    },
    {
      "name": "Status Bar",
      "desc": "Orange status bar at bottom of window. Shows state indicators in black monospace text.",
      "html": "<div style=\"background-color: var(--secondary); color: var(--on-secondary); font-family: var(--font-display); font-size: 12px; font-weight: 400; line-height: 1; height: 8px; padding: 0 4px; display: flex; align-items: center; image-rendering: pixelated;\"><span>READY</span></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — Workbench 1.3</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — Window Title</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — Project: Untitled</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — Insert disk in drive df0:</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — df0:</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Do not use rounded corners.",
      "avoid": {
        "html": "<div style=\"background-color: var(--surface); border: 1px solid var(--outline); border-radius: 8px; padding: 4px;\">Rounded box – WRONG</div>",
        "label": "Avoid"
      },
      "rule": "Do not use rounded corners. Elements must have sharp 90° angles.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:100px;height:20px;background:var(--primary);border:1px solid var(--outline);color:var(--on-primary);font-family:var(--font-display);font-size:12px;display:flex;align-items:center;justify-content:center;\">OK</div>"
      }
    },
    {
      "desc": "Do not use gradients or smooth color transitions.",
      "avoid": {
        "html": "<div style=\"background: linear-gradient(to right, var(--primary), var(--secondary)); border: 1px solid var(--outline); padding: 4px;\">Gradient – WRONG</div>",
        "label": "Avoid"
      },
      "rule": "Do not use gradients or smooth color transitions. All fills are flat.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:100px;height:20px;background:var(--primary);border:1px solid var(--outline);color:var(--on-primary);font-family:var(--font-display);font-size:12px;display:flex;align-items:center;justify-content:center;\">OK</div>"
      }
    },
    {
      "desc": "Do not introduce hover states.",
      "avoid": {
        "html": "<button style=\"background-color: var(--surface); border: 1px solid var(--outline); padding: 4px; font-family: var(--font-display);\">Hover me (bad)</button>",
        "label": "Avoid"
      },
      "rule": "Do not introduce hover states; buttons do not change on mouseover.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:100px;height:20px;background:var(--primary);border:1px solid var(--outline);color:var(--on-primary);font-family:var(--font-display);font-size:12px;display:flex;align-items:center;justify-content:center;\">OK</div>"
      }
    },
    {
      "desc": "Do not use anti-aliasing or opacity to create soft edges.",
      "avoid": {
        "html": "<div style=\"background-color: rgba(0,85,170,0.8); border: 1px solid var(--outline); padding: 4px;\">Semi-transparent – WRONG</div>",
        "label": "Avoid"
      },
      "rule": "Do not use anti-aliasing or opacity to create soft edges. All edges are 1px solid.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:100px;height:20px;background:var(--primary);border:1px solid var(--outline);color:var(--on-primary);font-family:var(--font-display);font-size:12px;display:flex;align-items:center;justify-content:center;\">OK</div>"
      }
    }
  ],
  "effects": [],
  "motion": [],
  "colors": {
    "primary": "#0055AA",
    "on-primary": "#FFFFFF",
    "surface": "#FFFFFF",
    "on-surface": "#000000",
    "secondary": "#FF8800",
    "on-secondary": "#000000",
    "outline": "#000000",
    "outline-variant": "#808080"
  },
  "typography": {
    "display": {
      "fontFamily": "VT323, monospace",
      "fontSize": "12px",
      "fontWeight": 400,
      "lineHeight": 1,
      "letterSpacing": "0em",
      "textTransform": "none"
    },
    "headline": {
      "fontFamily": "VT323, monospace",
      "fontSize": "12px",
      "fontWeight": 400,
      "lineHeight": 1,
      "letterSpacing": "0em",
      "textTransform": "none"
    },
    "title": {
      "fontFamily": "VT323, monospace",
      "fontSize": "12px",
      "fontWeight": 400,
      "lineHeight": 1,
      "letterSpacing": "0em",
      "textTransform": "none"
    },
    "body": {
      "fontFamily": "VT323, monospace",
      "fontSize": "12px",
      "fontWeight": 400,
      "lineHeight": 1,
      "letterSpacing": "0em",
      "textTransform": "none"
    },
    "label": {
      "fontFamily": "VT323, monospace",
      "fontSize": "12px",
      "fontWeight": 400,
      "lineHeight": 1,
      "letterSpacing": "0em",
      "textTransform": "none"
    }
  },
  "layouts": {
    "copy": {
      "heroKicker": "AMIGA WORKBENCH 1.3",
      "heroHeadline": "SYSTEM MONITOR",
      "heroSub": "CHUNKY PIXEL INTERFACE — 4-COLOUR PALETTE — NO ANTI-ALIASING",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">SCAN DISK</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">VIEW LOGS</button>",
      "navLinks": [
        "DISK",
        "MEMORY",
        "CPU",
        "PALETTE"
      ],
      "features": [
        {
          "title": "DISK MAP",
          "desc": "SECTOR-LEVEL VISUALISATION OF DISK BLOCKS IN REAL TIME.",
          "icon": "💾",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">💾 DISK MAP</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">SECTOR-LEVEL VISUALISATION OF DISK BLOCKS IN REAL TIME.</div></div>"
        },
        {
          "title": "MEMORY BARS",
          "desc": "MONOCHROME SIGNAL BARS SHOWING CHIP AND FAST RAM USAGE.",
          "icon": "🧠",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🧠 MEMORY BARS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">MONOCHROME SIGNAL BARS SHOWING CHIP AND FAST RAM USAGE.</div></div>"
        },
        {
          "title": "CPU TICKER",
          "desc": "STEPPED CYCLE COUNTER FOR MOTOROLA 68000 INSTRUCTIONS.",
          "icon": "⚙️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⚙️ CPU TICKER</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">STEPPED CYCLE COUNTER FOR MOTOROLA 68000 INSTRUCTIONS.</div></div>"
        },
        {
          "title": "PALETTE GRID",
          "desc": "HARD-EDGE SWATCHES OF ALL 4 COLOURS WITH HEX CODES.",
          "icon": "🎨",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🎨 PALETTE GRID</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">HARD-EDGE SWATCHES OF ALL 4 COLOURS WITH HEX CODES.</div></div>"
        }
      ],
      "ctaStripHeadline": "MONITOR YOUR AMIGA IN REAL TIME",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">LAUNCH WORKBENCH</button>",
      "sidebarBrand": "AMIGA WB 1.3",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "MONITOR",
          "active": true
        },
        {
          "icon": "◉",
          "label": "CONFIG",
          "active": false
        }
      ],
      "dashboardTitle": "SYSTEM DASHBOARD",
      "metrics": [
        {
          "label": "DISK FREE",
          "value": "847K",
          "delta": "+12K",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "MEM USED",
          "value": "256K",
          "delta": "-8K",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "CPU LOAD",
          "value": "34%",
          "delta": "+5%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "PALETTE SLOTS",
          "value": "4/4",
          "delta": "0",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "CPU CYCLE",
      "panelATitle": "ACTIVE WINDOWS",
      "panelARows": [
        {
          "label": "SHELL",
          "value": "3",
          "pct": 3
        },
        {
          "label": "DISK INFO",
          "value": "1",
          "pct": 1
        },
        {
          "label": "PREF",
          "value": "0",
          "pct": 0
        },
        {
          "label": "CLI",
          "value": "2",
          "pct": 2
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "GADGETS",
      "panelBCells": [
        {
          "label": "CLOSE",
          "value": "ON",
          "state": "ok"
        },
        {
          "label": "ZOOM",
          "value": "ON",
          "state": "warn"
        },
        {
          "label": "DEPTH",
          "value": "OFF",
          "state": "err"
        },
        {
          "label": "MENU",
          "value": "ON",
          "state": "ok"
        },
        {
          "label": "SCROLL",
          "value": "ON",
          "state": "warn"
        },
        {
          "label": "RESIZE",
          "value": "OFF",
          "state": "err"
        },
        {
          "label": "DRAG",
          "value": "ON",
          "state": "ok"
        },
        {
          "label": "SELECT",
          "value": "ON",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "TICK0",
        "TICK1",
        "TICK2",
        "TICK3",
        "TICK4",
        "TICK5"
      ],
      "series": [
        {
          "data": [
            120,
            135,
            110,
            140,
            130,
            125,
            125,
            125,
            125,
            125,
            125,
            125
          ],
          "label": "USER",
          "axis": "left",
          "color": "#0055AA"
        },
        {
          "data": [
            40,
            35,
            45,
            30,
            50,
            42,
            42,
            42,
            42,
            42,
            42,
            42
          ],
          "label": "SYSTEM",
          "axis": "right-1",
          "color": "#FF8800"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'min-height:240px;background:#0055AA;display:flex;align-items:center;justify-content:center;padding:8px;'; el.innerHTML = '<div style=\"border:2px solid #000;background:#fff;padding:8px;font-family:var(--font-display);font-size:12px;color:#000;text-align:center;\"><div style=\"font-weight:bold;\">AMIGA WORKBENCH 1.3</div><div style=\"margin-top:4px;\">SYSTEM MONITOR</div><div style=\"margin-top:8px;border-top:1px solid #000;padding-top:4px;font-size:10px;\">SCAN DISK</div></div>'; }",
    "showcaseRender": "function(el) { el.style.cssText = 'display:grid;grid-template-columns:repeat(2,1fr);gap:8px;padding:8px;'; var features = [{title:'DISK MAP',desc:'SECTOR-LEVEL VISUALISATION OF DISK BLOCKS IN REAL TIME.'},{title:'MEMORY BARS',desc:'MONOCHROME SIGNAL BARS SHOWING CHIP AND FAST RAM USAGE.'},{title:'CPU TICKER',desc:'STEPPED CYCLE COUNTER FOR MOTOROLA 68000 INSTRUCTIONS.'},{title:'PALETTE GRID',desc:'HARD-EDGE SWATCHES OF ALL 4 COLOURS WITH HEX CODES.'}]; for (var i=0;i<features.length;i++){ var f=features[i]; var card=document.createElement('div'); card.style.cssText='border:2px solid #000;background:#fff;padding:4px;'; card.innerHTML='<div style=\"font-family:var(--font-display);font-size:12px;color:#000;border-bottom:1px solid #000;padding-bottom:2px;margin-bottom:2px;\">'+f.title+'</div><div style=\"font-family:var(--font-display);font-size:10px;color:#000;\">'+f.desc+'</div>'; el.appendChild(card); } }",
    "panelCRender": "function(el) { el.style.cssText = 'border:2px solid #000;background:#fff;padding:4px;'; var title=document.createElement('div'); title.style.cssText='font-family:var(--font-display);font-size:12px;color:#000;border-bottom:1px solid #000;padding-bottom:2px;margin-bottom:4px;'; title.textContent='GADGETS'; el.appendChild(title); var cells=[{label:'CLOSE',value:'ON'},{label:'ZOOM',value:'ON'},{label:'DEPTH',value:'OFF'},{label:'MENU',value:'ON'},{label:'SCROLL',value:'ON'},{label:'RESIZE',value:'OFF'},{label:'DRAG',value:'ON'},{label:'SELECT',value:'ON'}]; for (var i=0;i<cells.length;i++){ var row=document.createElement('div'); row.style.cssText='display:flex;justify-content:space-between;font-family:var(--font-display);font-size:10px;color:#000;padding:1px 0;'; row.innerHTML='<span>'+cells[i].label+'</span><span>'+cells[i].value+'</span>'; el.appendChild(row); } }",
    "heroBackground": "function(el) { el.style.background = '#0055AA'; var grid = document.createElement('div'); grid.style.cssText = 'position:absolute;inset:0;background-image:repeating-linear-gradient(0deg,transparent,transparent 8px,rgba(0,0,0,0.1) 8px,rgba(0,0,0,0.1) 8px),repeating-linear-gradient(90deg,transparent,transparent 8px,rgba(0,0,0,0.1) 8px,rgba(0,0,0,0.1) 8px);z-index:1;pointer-events:none;'; el.appendChild(grid); }",
    "ctaBackground": "function(el) { el.style.background = '#FF8800'; }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'height:4px;background:var(--primary);'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = '#0055AA'; }",
    "surfaceOverlay": "function(el) { var bevel = document.createElement('div'); bevel.style.cssText = 'position:absolute;inset:0;border-top:1px solid #fff;border-left:1px solid #fff;border-bottom:1px solid #000;border-right:1px solid #000;pointer-events:none;z-index:2;'; el.appendChild(bevel); }"
  },
  "ambientCanvas": "function(el, tick) { var c = document.createElement('canvas'); c.style.position = 'absolute'; c.style.inset = '0'; c.style.pointerEvents = 'none'; c.style.zIndex = '9999'; var w = window.innerWidth; var h = window.innerHeight; c.width = w; c.height = h; var ctx = c.getContext('2d'); ctx.globalCompositeOperation = 'multiply'; var y; for (y = 0; y < h; y += 2) { ctx.fillStyle = 'rgba(0,0,0,' + (0.05 + 0.02 * Math.sin(tick * 0.5 + y * 0.01)) + ')'; ctx.fillRect(0, y, w, 1); } var i; for (i = 0; i < 10; i++) { ctx.fillStyle = 'rgba(0,85,170,0.2)'; ctx.fillRect((tick * 2 + i * 37) % w, (tick * 3 + i * 53) % h, 1, 1); } el.appendChild(c); return c; }",
  "shadcnTokens": {
    "--color-background": "#0055AA",
    "--color-popover": "#0055AA",
    "--color-foreground": "#FFFFFF",
    "--color-card-foreground": "#FFFFFF",
    "--color-popover-foreground": "#FFFFFF",
    "--color-card": "#FFFFFF",
    "--color-muted": "#FFFFFF",
    "--color-muted-foreground": "#a7a7a7",
    "--color-primary": "#0055AA",
    "--color-ring": "#0055AA",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#FF8800",
    "--color-accent": "#FF8800",
    "--color-secondary-foreground": "#000000",
    "--color-accent-foreground": "#000000",
    "--color-border": "#000000",
    "--color-input": "#000000",
    "--color-destructive": "#000000"
  },
  "shadcnTokensClassic": {
    "--background": "#0055AA",
    "--popover": "#0055AA",
    "--foreground": "#FFFFFF",
    "--card-foreground": "#FFFFFF",
    "--popover-foreground": "#FFFFFF",
    "--card": "#FFFFFF",
    "--muted": "#FFFFFF",
    "--muted-foreground": "#a7a7a7",
    "--primary": "#0055AA",
    "--ring": "#0055AA",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#FF8800",
    "--accent": "#FF8800",
    "--secondary-foreground": "#000000",
    "--accent-foreground": "#000000",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#000000"
  }
});
