registerSystem({
  "meta": {
    "name": "Excel 97",
    "tagline": "Resurrects the late‑1990s Windows desktop paradigm: a beige‑box interface of raised 3D buttons, grey gradients, and the ghost of Clippy.",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
  },
  "yamlTokens": {
    "name": "Excel 97",
    "colors": {
      "Interface-Grey": "#C0C0C0",
      "Cell-White": "#FFFFFF",
      "Text-Black": "#000000",
      "Primary-Navy": "#000080",
      "Title-Bar-Blue": "#0000FF",
      "Highlight-Blue": "#0080FF",
      "White-Text": "#FFFFFF",
      "Hyperlink-Blue": "#0000FF",
      "Visited-Purple": "#800080",
      "Error-Yellow": "#FFFFE0",
      "Grid-Grey": "#C0C0C0",
      "Disabled-Grey": "#808080"
    },
    "typography": {
      "display": {
        "fontFamily": "Arimo",
        "fontSize": "24px",
        "fontWeight": 700,
        "lineHeight": 1,
        "letterSpacing": "0em",
        "textTransform": "normal-case"
      },
      "headline": {
        "fontFamily": "Arimo",
        "fontSize": "18px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0em",
        "textTransform": "normal-case"
      },
      "title": {
        "fontFamily": "Arimo",
        "fontSize": "14px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0em",
        "textTransform": "normal-case"
      },
      "body": {
        "fontFamily": "Arimo",
        "fontSize": "12px",
        "fontWeight": 400,
        "lineHeight": 1.5,
        "letterSpacing": "0em",
        "textTransform": "normal-case"
      },
      "label": {
        "fontFamily": "Arimo",
        "fontSize": "8px",
        "fontWeight": 400,
        "lineHeight": 1,
        "letterSpacing": "0em",
        "textTransform": "normal-case"
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
      "page-edge": "12px",
      "gap-component": "4px",
      "gap-section": "8px",
      "height-sm": "18px",
      "height-md": "22px",
      "height-lg": "28px",
      "icon": "16px"
    },
    "components": {
      "button": {
        "backgroundColor": "#C0C0C0",
        "rounded": "{rounded.button}",
        "padding": "4px",
        "height": "22px",
        "width": "22px"
      },
      "dialog-window": {
        "backgroundColor": "#C0C0C0",
        "rounded": "{rounded.card}",
        "padding": "8px"
      },
      "formula-bar-input": {
        "backgroundColor": "#FFFFFF",
        "textColor": "#000000",
        "rounded": "{rounded.input}",
        "padding": "4px",
        "height": "22px"
      },
      "metric-cell": {
        "backgroundColor": "#FFFFFF",
        "textColor": "#000000",
        "rounded": "0px",
        "padding": "2px",
        "height": "18px"
      },
      "chart-surface": {
        "backgroundColor": "#FFFFFF",
        "rounded": "0px",
        "padding": "8px"
      }
    },
    "version": "alpha",
    "description": "Resurrects the late‑1990s Windows desktop paradigm: a beige‑box interface of raised 3D buttons, grey gradients, and the ghost of Clippy. The core rendering philosophy is instant, binary, and physically simulated with beveled edges and pixel‑perfect bitmap rendering.",
    "provenance": {
      "coverage_status": "sparse",
      "identity_description": "The slug `excel-97` refers to the visual identity of Microsoft Excel 97, the spreadsheet application released as part of Microsoft Office 97 (version 8.0) in late 1996 (general availability January 1997). This identity includes the application’s primary logo (the green ‘X’ cross mark), the splash screen, iconography, toolbar design, and the broader Office 97 visual system (shared by Word, Powe",
      "manual_enrichment_required": false,
      "imagery_count": 4,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "iconarchive.com",
          "count": 1
        },
        {
          "host": "www.computerhistory.org",
          "count": 1
        },
        {
          "host": "web.archive.org",
          "count": 1
        },
        {
          "host": "www.iconarchive.com",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://iconarchive.com/show/microsoft-office-icons-by-microsoft.html",
          "host": "iconarchive.com",
          "institution": "IconArchive.com",
          "confidence_original": "low"
        },
        {
          "url": "https://www.computerhistory.org/collections/",
          "host": "www.computerhistory.org",
          "institution": "Computer History Museum, Mountain View, CA",
          "confidence_original": "low"
        },
        {
          "url": "https://web.archive.org/web/20080505055333/http://msdn.microsoft.com/en-us/library/ms997636.aspx",
          "host": "web.archive.org",
          "institution": "Microsoft via Internet Archive",
          "confidence_original": "low"
        },
        {
          "url": "https://www.iconarchive.com/show/microsoft-windows-95-icons-by-microsoft.html",
          "host": "www.iconarchive.com",
          "institution": "IconArchive.com",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Microsoft Excel 97 wordmark",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "conventional"
        },
        {
          "name": "Tahoma",
          "foundry": null,
          "year": 1994,
          "google_fonts": "Public Sans",
          "attestation": "attested"
        }
      ],
      "flags": [
        "sparse_imagery",
        "2_robots_disallowed_urls"
      ],
      "honest_gaps": [
        {
          "\"1. **Colour": "no verified hex or Pantone values.** Resolution: locate a Microsoft brand guide from the Office 97 era or sample a physical box using a spectrophotometer.\""
        }
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#C0C0C0",
    "--on-bg": "#000000",
    "--primary": "#000080",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#0000FF",
    "--on-secondary": "#FFFFFF",
    "--surface": "#C0C0C0",
    "--on-bg-muted": "#666666",
    "--border": "#808080",
    "--error": "#FF0000",
    "--font-display": "Public Sans",
    "--font-body": "Public Sans",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "success": "#00FF00",
    "warning": "#FFFFE0",
    "error": "#FF0000",
    "info": "#0080FF",
    "link": "#0000FF",
    "visited": "#800080",
    "err": "#FF0000",
    "ok": "#00FF00",
    "warn": "#FFFFE0",
    "deltaUp": "#00FF00",
    "deltaDown": "#FF0000",
    "deltaFlat": "#666666",
    "live": "#000080",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#666666",
    "chartFont": "Public Sans"
  },
  "elevation": {
    "model": "bevel",
    "stacking": {
      "base": 0,
      "toolbars": 10,
      "dialog": 40,
      "modal": 50,
      "popups": 60
    },
    "raised": {
      "borderTop": "#FFFFFF",
      "borderLeft": "#FFFFFF",
      "borderBottom": "#808080",
      "borderRight": "#808080",
      "borderWidth": "1px"
    },
    "sunken": {
      "borderTop": "#808080",
      "borderLeft": "#808080",
      "borderBottom": "#FFFFFF",
      "borderRight": "#FFFFFF",
      "borderWidth": "1px"
    }
  },
  "surfaceModel": "bevel",
  "materialSimulation": {
    "model": "crt-screen",
    "params": {
      "scanlines": {
        "technique": "repeating-linear-gradient",
        "color": "rgba(0,0,0,0.5)",
        "opacity": 0.2,
        "blendMode": "overlay",
        "height": "4px"
      },
      "ditherDisabled": {
        "technique": "repeating-conic-gradient",
        "color": "#808080",
        "opacity": 1,
        "size": "4px"
      },
      "barrelDistortion": {
        "optional": true,
        "filter": "contrast(1.1) brightness(0.9)"
      },
      "rendering": {
        "fontSmoothing": "none",
        "imageRendering": "pixelated",
        "textRendering": "optimizeSpeed"
      }
    }
  },
  "interactionModel": {
    "hover": {},
    "focus": {
      "outline": "1px dotted #000000",
      "outlineOffset": "1px"
    },
    "active": {
      "bevelDepress": true,
      "transform": "translate(1px, 1px)"
    },
    "transitionDuration": "0ms",
    "transitionEasing": "none",
    "exemptAnimations": [
      "marching-ants",
      "chart-build"
    ]
  },
  "interactionStyles": ".ds-layout-frame *:focus { outline: 1px dotted #000000; outline-offset: 1px; } .ds-layout-frame *:active { border-top-color: var(--border); border-left-color: var(--border); border-bottom-color: var(--on-primary); border-right-color: var(--on-primary); transform: translate(1px, 1px); } .ds-layout-frame *:disabled { background-image: repeating-conic-gradient(#808080 0% 25%, transparent 0% 50%); background-size: 4px 4px; } .ds-layout-frame button:active { border-style: solid; }",
  "globalFilter": "<svg style=\"display:none\"><defs><filter id=\"crtFilter\"><feColorMatrix type=\"matrix\" values=\"0.99 0 0 0 0 0 0.99 0 0 0 0 0 0.99 0 0 0 0 0 1 0\"/></filter></defs></svg>",
  "globalBodyCss": "background-color: var(--bg); color: var(--on-bg); font-family: var(--font-body), sans-serif; -webkit-font-smoothing: none; font-smooth: never; text-rendering: optimizeSpeed; image-rendering: pixelated; min-width: 800px; margin: 0; filter: url('#crtFilter');",
  "globalCss": ".ds-layout-frame { position: relative; image-rendering: pixelated; } .ds-layout-frame * { box-sizing: border-box; } .ds-layout-frame ::selection { background: #0080FF; color: #FFFFFF; } .ds-layout-frame::-webkit-scrollbar { width: 18px; height: 18px; } .ds-layout-frame::-webkit-scrollbar-track { background: var(--surface); border: 1px solid var(--border); } .ds-layout-frame::-webkit-scrollbar-thumb { background: var(--surface); border-top: 1px solid var(--on-primary); border-left: 1px solid var(--on-primary); border-bottom: 1px solid var(--border); border-right: 1px solid var(--border); } .ds-layout-frame::after { content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 9999; background: repeating-linear-gradient(rgba(0,0,0,0.5) 0 1px, transparent 1px 4px); mix-blend-mode: overlay; opacity: 0.2; }",
  "chartStyle": {
    "palette": [
      "#000000",
      "#FFFFFF",
      "#808080",
      "#C0C0C0",
      "#800000",
      "#FF0000",
      "#008000",
      "#00FF00",
      "#808000",
      "#FFFF00",
      "#000080",
      "#0000FF",
      "#800080",
      "#FF00FF",
      "#008080",
      "#00FFFF"
    ],
    "fill": "flat",
    "gradients": false,
    "gridLineColor": "#C0C0C0",
    "gridLineStyle": "dotted",
    "axisFont": "Public Sans",
    "axisFontSize": "8px",
    "axisColor": "#000000",
    "glow": false,
    "shadow": false,
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#666666",
    "fontFamily": "Public Sans"
  },
  "dashboardStyle": {
    "layout": "fixed-width (800px or 1024px), non-responsive, centered",
    "density": "high",
    "panelTreatment": "raised bevel borders on toolbars, sunken on status bar and input fields, thick raised border on main window",
    "dataVizStyle": "VGA 16-colour flat fills, no gradients, dotted gridlines, bitmap text at 8px axis labels",
    "signatureElement": "Blue gradient title bar with application name and window controls"
  },
  "landingStyle": {
    "heroApproach": "Centered dialog window (800×600) 'Microsoft Excel - Book1' with classic blue title bar, toolbars, formula bar, and a blank grid.",
    "scrollBehavior": "discrete per tick, no smooth scrolling",
    "ctaStyle": "Grey raised buttons with 16×16 pixel icons, no hover, instant press via border inversion",
    "signatureMoment": "Appearance of Clippy assistant upon first empty cell selection"
  },
  "spacing": {
    "component-internal": "4px",
    "section-internal": "8px",
    "page-edge": "12px",
    "gap-component": "4px",
    "gap-section": "8px",
    "height-sm": "18px",
    "height-md": "22px",
    "height-lg": "28px",
    "icon": "16px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "0px"
  },
  "buttons": [
    {
      "name": "Toolbar Button",
      "desc": "Standard Excel 97 toolbar button: 22×22px, grey raised bevel, no hover, instant press. Use with a 16×16 pixel icon.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"width:22px;height:22px;background:var(--bg);border:1px solid;border-top-color:#FFFFFF;border-left-color:#FFFFFF;border-bottom-color:var(--border);border-right-color:var(--border);padding:4px;cursor:pointer;font-family:var(--font-body);font-size:12px;color:var(--on-bg);display:inline-flex;align-items:center;justify-content:center;line-height:1;\">X</button>",
      "label": "Toolbar Button",
      "note": "Standard Excel 97 toolbar button: 22×22px, grey raised bevel, no hover, instant press. Use with a 16×16 pixel icon."
    },
    {
      "name": "Title Bar Button",
      "desc": "Excel 97 title bar minimize/maximize/close button with gradient background from Primary-Navy to Title-Bar-Blue. Pressed state inverts border and shifts icon.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"width:22px;height:22px;background:linear-gradient(to bottom,var(--primary),#0000FF);border:1px solid;border-top-color:#FFFFFF;border-left-color:#FFFFFF;border-bottom-color:var(--border);border-right-color:var(--border);padding:4px;cursor:pointer;font-family:var(--font-body);font-size:12px;color:var(--white-text);display:inline-flex;align-items:center;justify-content:center;line-height:1;\">X</button>",
      "label": "Title Bar Button",
      "note": "Excel 97 title bar minimize/maximize/close button with gradient background from Primary-Navy to Title-Bar-Blue. Pressed state inverts border and shifts icon."
    },
    {
      "name": "Disabled Button",
      "desc": "Toolbar button rendered in disabled state with dither overlay, grey border, and reduced contrast icon.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" disabled style=\"width:22px;height:22px;background:var(--bg);border:1px solid;border-top-color:#808080;border-left-color:#808080;border-bottom-color:#FFFFFF;border-right-color:#FFFFFF;padding:4px;cursor:default;font-family:var(--font-body);font-size:12px;color:var(--disabled-grey);display:inline-flex;align-items:center;justify-content:center;line-height:1;background-image:repeating-conic-gradient(#808080 0% 25%,transparent 0% 50%);background-size:4px 4px;\">X</button>",
      "label": "Disabled Button",
      "note": "Toolbar button rendered in disabled state with dither overlay, grey border, and reduced contrast icon."
    }
  ],
  "cards": [
    {
      "name": "Dialog Window",
      "desc": "Classic Excel 97 dialog window: grey background, raised 3D border, blue gradient title bar with white text. Interior uses sunken panels for form fields.",
      "html": "<div style=\"width:400px;background:var(--bg);border:2px solid;border-top-color:#FFFFFF;border-left-color:#FFFFFF;border-bottom-color:#808080;border-right-color:#808080;padding:0;font-family:var(--font-body);font-size:12px;color:var(--on-bg);\"><div style=\"background:linear-gradient(to bottom,var(--primary),#0000FF);color:var(--white-text);padding:4px 8px;font-size:14px;font-weight:700;line-height:1.25;\">Microsoft Excel - Book1</div><div style=\"padding:8px;background:var(--bg);\">Content area</div></div>",
      "label": "Dialog Window",
      "note": "Classic Excel 97 dialog window: grey background, raised 3D border, blue gradient title bar with white text. Interior uses sunken panels for form fields."
    },
    {
      "name": "Chart Surface",
      "desc": "Embedded chart area with white background, sunken border, and VGA 16-colour data series. No rounding, no shadows.",
      "html": "<div style=\"width:400px;height:300px;background:#FFFFFF;border:1px solid;border-top-color:#808080;border-left-color:#808080;border-bottom-color:#FFFFFF;border-right-color:#FFFFFF;padding:8px;font-family:var(--font-body);font-size:12px;color:var(--on-bg);display:flex;align-items:center;justify-content:center;\">Chart placeholder (VGA colours)</div>",
      "label": "Chart Surface",
      "note": "Embedded chart area with white background, sunken border, and VGA 16-colour data series. No rounding, no shadows."
    }
  ],
  "forms": [
    {
      "name": "Text Input (Formula Bar)",
      "desc": "Excel 97 formula bar input field: white background, sunken 3D border, 22px height, monospace-like font at 12px.",
      "html": "<div style=\"display:inline-flex;align-items:center;background:#FFFFFF;border:1px solid;border-top-color:#808080;border-left-color:#808080;border-bottom-color:#FFFFFF;border-right-color:#FFFFFF;height:22px;padding:4px;font-family:var(--font-body);font-size:12px;color:var(--text-black);width:300px;\">=SUM(A1:A10)</div>",
      "label": "Text Input (Formula Bar)",
      "stateLabel": "Excel 97 formula bar input field: white background, sunken 3D border, 22px height, monospace-like font at 12px."
    },
    {
      "name": "Dropdown / Combo Box",
      "desc": "Drop-down button with raised border and grey background, paired with a small triangular arrow indicator.",
      "html": "<div style=\"display:inline-flex;align-items:center;background:var(--bg);border:1px solid;border-top-color:#FFFFFF;border-left-color:#FFFFFF;border-bottom-color:#808080;border-right-color:#808080;height:22px;padding:4px 4px 4px 8px;font-family:var(--font-body);font-size:12px;color:var(--on-bg);width:200px;cursor:pointer;\">Option 1 <span style=\"margin-left:auto;border-left:1px solid #808080;padding-left:4px;\">▼</span></div>",
      "label": "Dropdown / Combo Box",
      "stateLabel": "Drop-down button with raised border and grey background, paired with a small triangular arrow indicator."
    },
    {
      "name": "Checkbox",
      "desc": "Old-style Windows checkbox: square with raised border, grey fill, and an X checkmark in navy.",
      "html": "<label style=\"display:inline-flex;align-items:center;gap:4px;font-family:var(--font-body);font-size:12px;color:var(--on-bg);cursor:pointer;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" checked style=\"width:13px;height:13px;margin:0;appearance:none;background:var(--bg);border:1px solid;border-top-color:#808080;border-left-color:#808080;border-bottom-color:#FFFFFF;border-right-color:#FFFFFF;display:flex;align-items:center;justify-content:center;color:var(--primary);font-size:10px;\">✓ Option</label>",
      "label": "Checkbox",
      "stateLabel": "Old-style Windows checkbox: square with raised border, grey fill, and an X checkmark in navy."
    }
  ],
  "extraComponents": [
    {
      "name": "Status Bar",
      "desc": "Sunken status bar panel at bottom of the window, divided into sections. Displays cell mode, calculation, and sheet info.",
      "html": "<div style=\"height:22px;background:var(--bg);border:1px solid;border-top-color:#808080;border-left-color:#808080;border-bottom-color:#FFFFFF;border-right-color:#FFFFFF;padding:2px 4px;font-family:var(--font-body);font-size:8px;color:var(--on-bg);display:flex;align-items:center;gap:12px;\"><span style=\"border-right:1px solid #808080;padding-right:4px;\">Ready</span><span>Sum=0</span></div>"
    },
    {
      "name": "Selection Marquee (Marching Ants)",
      "desc": "Animated dashed border around selected cell, cycling black/white to simulate marching ants. CSS animation at 300ms steps.",
      "html": "<div style=\"position:relative;width:80px;height:20px;background:#FFFFFF;border:2px dashed #000000;animation:ants 0.3s step-start infinite;font-family:var(--font-body);font-size:12px;color:var(--on-bg);padding:2px;\">Cell A1</div>"
    },
    {
      "name": "Scrollbar (Vertical)",
      "desc": "Classic Windows 95/98 vertical scrollbar: chunky thumb with raised 3D border, arrow buttons at ends.",
      "html": "<div style=\"width:18px;height:150px;background:var(--bg);border:1px solid;border-top-color:#FFFFFF;border-left-color:#FFFFFF;border-bottom-color:#808080;border-right-color:#808080;display:flex;flex-direction:column;\"><div style=\"height:18px;background:var(--bg);border:1px solid;border-top-color:#FFFFFF;border-left-color:#FFFFFF;border-bottom-color:#808080;border-right-color:#808080;display:flex;align-items:center;justify-content:center;font-size:10px;\">▲</div><div style=\"flex:1;min-height:0;\"><div style=\"height:40px;margin:2px;background:var(--bg);border:1px solid;border-top-color:#FFFFFF;border-left-color:#FFFFFF;border-bottom-color:#808080;border-right-color:#808080;\"></div></div><div style=\"height:18px;background:var(--bg);border:1px solid;border-top-color:#FFFFFF;border-left-color:#FFFFFF;border-bottom-color:#808080;border-right-color:#808080;display:flex;align-items:center;justify-content:center;font-size:10px;\">▼</div></div>"
    },
    {
      "name": "Fill Handle",
      "desc": "Small square (4x4) at bottom-right of selected cell, white with black border. Indicates draggable auto-fill extension.",
      "html": "<div style=\"width:4px;height:4px;background:#FFFFFF;border:1px solid #000000;display:inline-block;\"></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — Microsoft Excel</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — Chart Wizard</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — Formula Bar</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — =SUM(A1:A10) evaluates to 150.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — Ready    Calc: Num 0</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Do NOT use rounded corners anywhere — all radii must be 0px to maintain the pixel‑perfect bitmap look.",
      "avoid": {
        "html": "<button style=\"border-radius:8px; background:var(--bg); color:var(--on-bg);\">Rounded button</button>",
        "label": "Avoid"
      },
      "rule": "Do NOT use rounded corners anywhere — all radii must be 0px to maintain the pixel‑perfect bitmap look.",
      "do": {
        "label": "Do",
        "html": "<button style=\"width:22px;height:22px;background:var(--bg);border:1px solid;border-top-color:#FFFFFF;border-left-color:#FFFFFF;border-bottom-color:var(--border);border-right-color:var(--border);padding:4px;font-family:var(--font-body);font-size:12px;color:var(--on-bg);cursor:pointer;\">X</button>"
      }
    },
    {
      "desc": "Do NOT apply box-shadows or any modern elevation. Use only 1px bevel borders for depth.",
      "avoid": {
        "html": "<div style=\"box-shadow:0 4px 6px rgba(0,0,0,0.1); background:var(--bg); padding:8px;\">Shadow card</div>",
        "label": "Avoid"
      },
      "rule": "Do NOT apply box-shadows or any modern elevation. Use only 1px bevel borders for depth.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do NOT add hover effects, transitions, or opacity changes. State changes must be instant (0ms).",
      "avoid": {
        "html": "<button style=\"transition:all 0.2s; background:var(--bg); color:var(--on-bg);\">Hoverable</button>",
        "label": "Avoid"
      },
      "rule": "Do NOT add hover effects, transitions, or opacity changes. State changes must be instant (0ms).",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do NOT use anti-aliased fonts or smooth scrolling. Font-smoothing must be none, image-rendering pixelated.",
      "avoid": {
        "html": "<div style=\"font-smoothing:antialiased; image-rendering:auto;\">Smooth text</div>",
        "label": "Avoid"
      },
      "rule": "Do NOT use anti-aliased fonts or smooth scrolling. Font-smoothing must be none, image-rendering pixelated.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "doAvoidStyle": "border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.2); transition: all 0.2s ease; font-smoothing: antialiased;",
  "effects": [],
  "motion": [],
  "colors": {
    "Interface-Grey": "#C0C0C0",
    "Cell-White": "#FFFFFF",
    "Text-Black": "#000000",
    "Primary-Navy": "#000080",
    "Title-Bar-Blue": "#0000FF",
    "Highlight-Blue": "#0080FF",
    "White-Text": "#FFFFFF",
    "Hyperlink-Blue": "#0000FF",
    "Visited-Purple": "#800080",
    "Error-Yellow": "#FFFFE0",
    "Grid-Grey": "#C0C0C0",
    "Disabled-Grey": "#808080"
  },
  "typography": {
    "display": {
      "fontFamily": "Public Sans",
      "fontSize": "24px",
      "fontWeight": 700,
      "lineHeight": 1,
      "letterSpacing": "0em",
      "textTransform": "normal-case"
    },
    "headline": {
      "fontFamily": "Public Sans",
      "fontSize": "18px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "0em",
      "textTransform": "normal-case"
    },
    "title": {
      "fontFamily": "Public Sans",
      "fontSize": "14px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "0em",
      "textTransform": "normal-case"
    },
    "body": {
      "fontFamily": "Public Sans",
      "fontSize": "12px",
      "fontWeight": 400,
      "lineHeight": 1.5,
      "letterSpacing": "0em",
      "textTransform": "normal-case"
    },
    "label": {
      "fontFamily": "Public Sans",
      "fontSize": "8px",
      "fontWeight": 400,
      "lineHeight": 1,
      "letterSpacing": "0em",
      "textTransform": "normal-case"
    }
  },
  "layouts": {
    "copy": {
      "heroKicker": "Resurrects the late‑1990s Windows desktop paradigm",
      "heroHeadline": "Microsoft Excel 97",
      "heroSub": "Beige-box interface of raised 3D buttons, grey gradients, and the ghost of Clippy.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#C0C0C0;border:1px solid;border-top-color:#FFFFFF;border-left-color:#FFFFFF;border-bottom-color:#808080;border-right-color:#808080;padding:4px 8px;font-family:\\x27Public Sans\\x27,sans-serif;font-size:12px;cursor:pointer;\">OPEN BOOK1</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#C0C0C0;border:1px solid;border-top-color:#FFFFFF;border-left-color:#FFFFFF;border-bottom-color:#808080;border-right-color:#808080;padding:4px 8px;font-family:\\x27Public Sans\\x27,sans-serif;font-size:12px;cursor:pointer;\">NEW WORKBOOK</button>",
      "navLinks": [
        "FILE",
        "EDIT",
        "VIEW",
        "INSERT",
        "FORMAT"
      ],
      "features": [
        {
          "title": "AutoSum",
          "desc": "Instantly sum selected cells with a single click. No formula typing required.",
          "icon": "∑",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">∑ AutoSum</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Instantly sum selected cells with a single click. No formula typing required.</div></div>"
        },
        {
          "title": "Chart Wizard",
          "desc": "Create bar, line, pie, or area charts from your data in four easy steps.",
          "icon": "📊",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📊 Chart Wizard</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Create bar, line, pie, or area charts from your data in four easy steps.</div></div>"
        },
        {
          "title": "PivotTable",
          "desc": "Drag and drop fields to reorganize and summarize large datasets.",
          "icon": "🧮",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🧮 PivotTable</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Drag and drop fields to reorganize and summarize large datasets.</div></div>"
        },
        {
          "title": "Conditional Formatting",
          "desc": "Highlight cells that meet your criteria using colours, bars, or icons.",
          "icon": "🔍",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔍 Conditional Formatting</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Highlight cells that meet your criteria using colours, bars, or icons.</div></div>"
        }
      ],
      "ctaStripHeadline": "TRY THE NEW EXCEL 97 TODAY",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#C0C0C0;border:1px solid;border-top-color:#FFFFFF;border-left-color:#FFFFFF;border-bottom-color:#808080;border-right-color:#808080;padding:4px 12px;font-family:\\x27Public Sans\\x27,sans-serif;font-size:12px;cursor:pointer;\">FREE TRIAL</button>",
      "sidebarBrand": "EXCEL 97",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "WORKSHEET",
          "active": true
        },
        {
          "icon": "◉",
          "label": "CHART",
          "active": false
        },
        {
          "icon": "◉",
          "label": "MACRO",
          "active": false
        }
      ],
      "dashboardTitle": "MICROSOFT EXCEL - BOOK1",
      "metrics": [
        {
          "label": "SHEETS",
          "value": "3",
          "delta": "+1",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "ROWS",
          "value": "16384",
          "delta": "—",
          "dir": "neutral",
          "direction": "neutral"
        },
        {
          "label": "CELLS",
          "value": "17,179,869,184",
          "delta": "+2%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "FORMULAS",
          "value": "42",
          "delta": "+7",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "CHART OBJECTS",
          "value": "5",
          "delta": "—",
          "dir": "neutral",
          "direction": "neutral"
        }
      ],
      "chartTitle": "MONTHLY SALES (VGA PALETTE)",
      "panelATitle": "CELL PROPERTIES",
      "panelARows": [
        {
          "label": "Cell",
          "value": "A1",
          "pct": 1
        },
        {
          "label": "Value",
          "value": "123",
          "pct": 100
        },
        {
          "label": "Formula",
          "value": "=SUM(B1:B10)",
          "pct": 1
        },
        {
          "label": "Format",
          "value": "General",
          "pct": 0
        },
        {
          "label": "Font",
          "value": "Public Sans 10pt",
          "pct": 10
        }
      ],
      "panelBTitle": "DATA GRID",
      "panelBCells": [
        {
          "label": "A1",
          "value": "Product",
          "state": "ok"
        },
        {
          "label": "B1",
          "value": "Q1",
          "state": "warn"
        },
        {
          "label": "C1",
          "value": "Q2",
          "state": "err"
        },
        {
          "label": "D1",
          "value": "Q3",
          "state": "ok"
        },
        {
          "label": "E1",
          "value": "Q4",
          "state": "warn"
        },
        {
          "label": "F1",
          "value": "Total",
          "state": "err"
        },
        {
          "label": "G1",
          "value": "Avg",
          "state": "ok"
        },
        {
          "label": "H1",
          "value": "% Chg",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun"
      ],
      "series": [
        {
          "data": [
            120,
            180,
            150,
            200,
            170,
            210,
            210,
            210,
            210,
            210,
            210,
            210
          ],
          "label": "North",
          "axis": "left",
          "color": "#000080"
        },
        {
          "data": [
            80,
            100,
            90,
            130,
            110,
            140,
            140,
            140,
            140,
            140,
            140,
            140
          ],
          "label": "South",
          "axis": "right-1",
          "color": "#0000FF"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'width:500px;margin:auto;background:var(--bg);border:2px solid;border-top-color:#FFFFFF;border-left-color:#FFFFFF;border-bottom-color:#808080;border-right-color:#808080;font-family:var(--font-body);color:var(--on-bg);'; el.innerHTML = '<div style=\"background:linear-gradient(to bottom,var(--primary),#0000FF);color:var(--on-primary);padding:4px 8px;font-size:14px;font-weight:700;\">Microsoft Excel</div><div style=\"padding:24px;text-align:center;\"><div style=\"font-size:24px;font-weight:700;margin-bottom:8px;\">Microsoft Excel 97</div><div style=\"font-size:12px;\">Version 8.0</div><div style=\"font-size:8px;margin-top:16px;\">Copyright © 1996 Microsoft Corporation</div><div style=\"font-size:8px;margin-top:4px;\">All rights reserved.</div></div>'; }",
    "showcaseRender": "function(el) { var features = [{icon:'∑', title:'AutoSum', desc:'Instantly sum selected cells with a single click.'},{icon:'📊', title:'Chart Wizard', desc:'Create bar, line, pie, or area charts from your data.'},{icon:'🧮', title:'PivotTable', desc:'Drag and drop fields to reorganize large datasets.'},{icon:'🔍', title:'Conditional Formatting', desc:'Highlight cells that meet your criteria.'}]; var html = '<div style=\"display:flex;flex-wrap:wrap;gap:8px;padding:8px;\">'; for(var i=0;i<features.length;i++){ var f=features[i]; html += '<div style=\"width:200px;padding:16px;background:var(--bg);border:1px solid;border-top-color:#FFFFFF;border-left-color:#FFFFFF;border-bottom-color:#808080;border-right-color:#808080;font-family:var(--font-body);color:var(--on-bg);\">'; html += '<div style=\"font-size:13px;font-weight:700;text-transform:uppercase;color:var(--primary);margin-bottom:8px;\">'+f.icon+' '+f.title+'</div>'; html += '<div style=\"font-size:12px;line-height:1.5;\">'+f.desc+'</div>'; html += '</div>'; } html += '</div>'; el.innerHTML = html; }",
    "panelCRender": "function(el) { el.style.cssText = 'background:var(--bg);border:1px solid;border-top-color:#FFFFFF;border-left-color:#FFFFFF;border-bottom-color:#808080;border-right-color:#808080;padding:8px;font-family:var(--font-body);'; var html = '<div style=\"font-size:12px;font-weight:700;color:var(--primary);margin-bottom:8px;\">MONTHLY SALES (VGA PALETTE)</div>'; html += '<div style=\"display:flex;gap:2px;align-items:flex-end;height:120px;padding:4px;background:#FFFFFF;border:1px solid;border-top-color:#808080;border-left-color:#808080;border-bottom-color:#FFFFFF;border-right-color:#FFFFFF;\">'; var data = [120,180,150,200,170,210]; var max = Math.max.apply(null, data); var colors = ['#000080','#0000FF','#008080','#00FFFF','#800080','#FF00FF']; for(var i=0;i<data.length;i++){ var h = (data[i]/max)*100; html += '<div style=\"width:30px;height:'+h+'px;background:'+colors[i % colors.length]+';border:1px solid #000000;\"></div>'; } html += '</div>'; el.innerHTML = html; }",
    "heroBackground": "function(el) { el.style.background = '#C0C0C0'; }",
    "ctaBackground": "function(el) { el.style.background = 'linear-gradient(to bottom, #000080, #0000FF)'; }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'height:2px;border-top:1px solid #FFFFFF;border-bottom:1px solid #808080;background:var(--bg);'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = '#C0C0C0'; }",
    "surfaceOverlay": "function(el) { var ov = document.createElement('div'); ov.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;background:repeating-linear-gradient(rgba(0,0,0,0.5) 0 1px, transparent 1px 4px);mix-blend-mode:overlay;opacity:0.2;'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(tick) { var phase = Math.sin(tick / 50); var opacity = 0.1 + 0.1 * phase; return '<div style=\"position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(rgba(0,0,0,' + opacity + ') 0 1px, transparent 1px 4px);mix-blend-mode:overlay;\"></div>'; }",
  "shadcnTokens": {
    "--color-background": "#C0C0C0",
    "--color-popover": "#C0C0C0",
    "--color-foreground": "#000000",
    "--color-card-foreground": "#000000",
    "--color-popover-foreground": "#000000",
    "--color-card": "#C0C0C0",
    "--color-muted": "#C0C0C0",
    "--color-muted-foreground": "#666666",
    "--color-primary": "#000080",
    "--color-ring": "#000080",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#0000FF",
    "--color-accent": "#0000FF",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
    "--color-border": "#808080",
    "--color-input": "#808080",
    "--color-destructive": "#FF0000"
  },
  "shadcnTokensClassic": {
    "--background": "#C0C0C0",
    "--popover": "#C0C0C0",
    "--foreground": "#000000",
    "--card-foreground": "#000000",
    "--popover-foreground": "#000000",
    "--card": "#C0C0C0",
    "--muted": "#C0C0C0",
    "--muted-foreground": "#666666",
    "--primary": "#000080",
    "--ring": "#000080",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#0000FF",
    "--accent": "#0000FF",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#808080",
    "--input": "#808080",
    "--destructive": "#FF0000"
  }
});
