registerSystem({
  "meta": {
    "name": "Classic Macintosh (1987 HIG Aesthetic)",
    "tagline": "1-bit monochrome design system based on Apple's 1987 Human Interface Guidelines",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=VT323&display=swap"
  },
  "yamlTokens": {
    "name": "Classic Macintosh (1987 HIG Aesthetic)",
    "colors": {
      "primary": "#000000",
      "surface": "#FFFFFF",
      "on-primary": "#FFFFFF",
      "on-surface": "#000000",
      "outline": "#000000",
      "secondary": "#FFFFFF"
    },
    "typography": {
      "display": {
        "fontFamily": "VT323",
        "fontSize": "12px",
        "fontWeight": 400,
        "lineHeight": 1,
        "letterSpacing": "0em"
      },
      "headline": {
        "fontFamily": "VT323",
        "fontSize": "12px",
        "fontWeight": 400,
        "lineHeight": 1,
        "letterSpacing": "0em"
      },
      "title": {
        "fontFamily": "VT323",
        "fontSize": "12px",
        "fontWeight": 400,
        "lineHeight": 1,
        "letterSpacing": "0em"
      },
      "body": {
        "fontFamily": "VT323",
        "fontSize": "12px",
        "fontWeight": 400,
        "lineHeight": 1.25,
        "letterSpacing": "0em"
      },
      "label": {
        "fontFamily": "VT323",
        "fontSize": "9px",
        "fontWeight": 400,
        "lineHeight": 1,
        "letterSpacing": "0em"
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
      "page-edge": "8px",
      "gap-component": "4px",
      "gap-section": "8px",
      "height-sm": "16px",
      "height-md": "20px",
      "height-lg": "24px",
      "icon": "32px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "{colors.surface}",
        "textColor": "{colors.on-surface}",
        "rounded": "{rounded.button}",
        "padding": "4px",
        "height": "20px"
      },
      "button-primary-active": {
        "backgroundColor": "{colors.primary}",
        "textColor": "{colors.on-primary}",
        "rounded": "{rounded.button}",
        "padding": "4px",
        "height": "20px"
      },
      "window": {
        "backgroundColor": "{colors.surface}",
        "rounded": "{rounded.default}",
        "padding": "8px"
      },
      "menu-bar": {
        "backgroundColor": "{colors.surface}",
        "height": "20px"
      },
      "dialog": {
        "backgroundColor": "{colors.surface}",
        "rounded": "{rounded.default}",
        "padding": "8px"
      },
      "input": {
        "backgroundColor": "{colors.surface}",
        "rounded": "{rounded.input}",
        "height": "20px"
      },
      "checkbox": {
        "size": "12px"
      },
      "icon": {
        "size": "32px"
      }
    },
    "version": "alpha",
    "description": "A 1-bit monochrome design system based on Apple's 1987 Human Interface Guidelines. Pure black and white, Chicago bitmap font, pixel-perfect icons, and absolute clarity with no anti-aliasing or gradients.",
    "provenance": {
      "coverage_status": "sparse",
      "identity_description": "The slug `apple--aesthetic-macintosh-human-interface-guidelines-1987` refers to the book *Apple Human Interface Guidelines: The Apple Desktop Interface* (Addison-Wesley, 1987), which codified the visual and interactive language of the classic Macintosh operating environment (System 1–7). This document defined the canonical look of the Mac OS user interface — its window frames, menus, dialog boxes,",
      "manual_enrichment_required": false,
      "imagery_count": 4,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "archive.org",
          "count": 1
        },
        {
          "host": "developer.apple.com",
          "count": 1
        },
        {
          "host": "kare.com",
          "count": 1
        },
        {
          "host": "computerhistory.org",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://archive.org/",
          "host": "archive.org",
          "institution": "Internet Archive",
          "confidence_original": "low"
        },
        {
          "url": "https://developer.apple.com/library/archive/",
          "host": "developer.apple.com",
          "institution": "Apple Developer Archive",
          "confidence_original": "low"
        },
        {
          "url": "https://kare.com/",
          "host": "kare.com",
          "institution": "Susan Kare personal site",
          "confidence_original": "low"
        },
        {
          "url": "https://computerhistory.org/",
          "host": "computerhistory.org",
          "institution": "Computer History Museum",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Chicago",
          "foundry": "Apple",
          "year": 1984,
          "google_fonts": "VT323",
          "attestation": "attested"
        },
        {
          "name": "Geneva",
          "foundry": "Apple",
          "year": 1984,
          "google_fonts": "Inter",
          "attestation": "unknown"
        },
        {
          "name": "Monaco",
          "foundry": "Apple",
          "year": 1984,
          "google_fonts": "JetBrains Mono",
          "attestation": "unknown"
        },
        {
          "name": "Times",
          "foundry": "Linotype",
          "year": null,
          "google_fonts": "Tinos",
          "attestation": "unknown"
        },
        {
          "name": "Helvetica",
          "foundry": "Linotype",
          "year": null,
          "google_fonts": "Inter",
          "attestation": "unknown"
        },
        {
          "name": "Apple logo and Macintosh wordmark",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "unknown"
        }
      ],
      "flags": [
        "sparse_imagery",
        "1_robots_disallowed_urls"
      ],
      "honest_gaps": [
        "1. **Colour hex values** – no attested hex for interface greys or accent cyan; all present approximations are inferred."
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#FFFFFF",
    "--on-bg": "#000000",
    "--primary": "#000000",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#FFFFFF",
    "--on-secondary": "#000000",
    "--surface": "#FFFFFF",
    "--on-bg-muted": "#1a1a1a",
    "--border": "#000000",
    "--error": "#000000",
    "--font-display": "VT323",
    "--font-body": "VT323",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "primary": "#000000",
    "on-primary": "#FFFFFF",
    "secondary": "#FFFFFF",
    "on-secondary": "#000000",
    "surface": "#FFFFFF",
    "on-surface": "#000000",
    "error": "#000000",
    "outline": "#000000",
    "disabled": "dither-50 pattern (no solid hex)",
    "err": "#000000",
    "warn": "#000000",
    "ok": "#000000",
    "deltaUp": "#22C55E",
    "deltaDown": "#000000",
    "deltaFlat": "#1A1A1A",
    "live": "#000000",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#1A1A1A",
    "chartFont": "VT323"
  },
  "chartStyle": {
    "type": "monochrome",
    "lines": "1px solid #000000, stepped",
    "fills": "white, black, or dither-50 pattern",
    "grid": "1px dotted #000000",
    "font": "VT323 12px",
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#1A1A1A",
    "fontFamily": "VT323"
  },
  "surfaceModel": "flat",
  "materialSimulation": {
    "model": "crt-screen",
    "params": {
      "scanlines": true,
      "bloom": true,
      "dither": "repeating-conic-gradient checkerboard 2px"
    }
  },
  "globalFilter": "<svg><defs><filter id=\"crt-bloom\"><feGaussianBlur stdDeviation=\"0.5\" result=\"blur\"/><feMerge><feMergeNode in=\"blur\"/><feMergeNode in=\"SourceGraphic\"/></feMerge></filter></defs></svg>",
  "globalBodyCss": "font-family: VT323, monospace; background-color: var(--bg); color: var(--on-bg); image-rendering: pixelated; -webkit-font-smoothing: none; -moz-osx-font-smoothing: unset; text-rendering: optimizeSpeed; margin: 0;",
  "globalCss": ".ds-layout-frame { position: relative; } .ds-layout-frame.crt-scanlines::after { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.08) 1px, rgba(0,0,0,0.08) 2px); pointer-events: none; mix-blend-mode: multiply; } .ds-layout-frame .dither-50 { background: repeating-conic-gradient(#000 0% 25%, #fff 0% 50%) 0px 0px / 2px 2px; } .ds-layout-frame .disabled { background: repeating-conic-gradient(#000 0% 25%, #fff 0% 50%) 0px 0px / 2px 2px; }",
  "interactionModel": {
    "hover": {
      "type": "none"
    },
    "focus": {
      "type": "none",
      "outline": "none"
    },
    "active": {
      "type": "inversion",
      "background": "#000000",
      "color": "#FFFFFF"
    }
  },
  "interactionStyles": ".ds-layout-frame button:active, .ds-layout-frame .active { background-color: #000000 !important; color: #FFFFFF !important; } .ds-layout-frame input:focus { outline: none; } .ds-layout-frame button { cursor: default; } .ds-layout-frame .disabled { background: repeating-conic-gradient(#000 0% 25%, #fff 0% 50%) 0px 0px / 2px 2px; cursor: default; }",
  "spacing": {
    "component-internal": "4px",
    "section-internal": "8px",
    "page-edge": "8px",
    "gap-component": "4px",
    "gap-section": "8px",
    "height-sm": "16px",
    "height-md": "20px",
    "height-lg": "24px",
    "icon": "32px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "0px"
  },
  "elevation": {
    "flat": {
      "shadow": "none",
      "z-index": "auto"
    }
  },
  "dashboardStyle": {
    "layout": "Desktop with menu bar at top, windows in a flat stacking plane (no z-index shadows). Icons placed on a sparse grid (32px snap).",
    "density": "Sparse — generous white space, 8px margins, 4px component gaps.",
    "panelTreatment": "Window frames with title bar (active: black bar with white text; inactive: white bar with black text), close box (small square), size box (bottom-right). No toolbars or palettes.",
    "dataVizStyle": "None; classic Mac OS did not include charts. If needed, use monochrome lines (1px stepped) and dither fills.",
    "signatureElement": "Menu bar with Apple logo (), application name, and pull-down menus. Inversion on active selection."
  },
  "landingStyle": {
    "heroApproach": "Full-screen white desktop with a centered modal dialog or startup screen. Optionally display the 'Welcome to Macintosh' message with a happy Mac icon (32x32).",
    "scrollBehavior": "No scroll — the interface is designed for a fixed 512×342 canvas. Any overflow would be handled by window resizing or scrollbars within windows.",
    "ctaStyle": "Push buttons: white fill with black outline, 12px Chicago text. Active state inverts to black fill with white text. No hover.",
    "signatureMoment": "The iconic 'Welcome to Macintosh' splash screen with the smiling Macintosh icon and a 'Continue' push button."
  },
  "buttons": [
    {
      "name": "Default Push Button",
      "desc": "Standard push button with black border, white fill, and Chicago-style bitmap text. No rounded corners, no shadow.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--surface); color: var(--on-surface); border: 1px solid var(--border); border-radius: var(--radius-btn); padding: 4px 8px; font-family: var(--font-body); font-size: 12px; line-height: 1; text-align: center; cursor: pointer; image-rendering: pixelated;\">OK</button>",
      "label": "Default Push Button",
      "note": "Standard push button with black border, white fill, and Chicago-style bitmap text. No rounded corners, no shadow."
    },
    {
      "name": "Active Push Button",
      "desc": "Active or pressed state — colors invert to black background with white text. No animation, instant toggle.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--primary); color: var(--on-primary); border: 1px solid var(--border); border-radius: var(--radius-btn); padding: 4px 8px; font-family: var(--font-body); font-size: 12px; line-height: 1; text-align: center; cursor: pointer; image-rendering: pixelated;\">OK</button>",
      "label": "Active Push Button",
      "note": "Active or pressed state — colors invert to black background with white text. No animation, instant toggle."
    },
    {
      "name": "Disabled Push Button",
      "desc": "Disabled control rendered with a 50% black-and-white checkerboard dither pattern. No opacity or gray values used.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" disabled style=\"background-image: repeating-conic-gradient(#000 0 25%, #fff 0 50%); background-size: 2px 2px; border: 1px solid var(--border); border-radius: var(--radius-btn); padding: 4px 8px; font-family: var(--font-body); font-size: 12px; line-height: 1; color: var(--on-surface); cursor: not-allowed; image-rendering: pixelated;\">OK</button>",
      "label": "Disabled Push Button",
      "note": "Disabled control rendered with a 50% black-and-white checkerboard dither pattern. No opacity or gray values used."
    }
  ],
  "cards": [
    {
      "name": "Window Card",
      "desc": "A floating application window with title bar, close box (small square), and size box. No drop shadow, opaque white background.",
      "html": "<div style=\"background-color: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-card); padding: 0; width: 280px; image-rendering: pixelated;\"><div style=\"background-color: var(--surface); border-bottom: 2px solid var(--border); padding: 4px; display: flex; align-items: center; gap: 8px;\"><span style=\"width: 12px; height: 12px; border: 1px solid var(--border); background-color: var(--surface); display: inline-block;\"></span><span style=\"font-family: var(--font-display); font-size: 12px; line-height: 1; color: var(--on-surface); flex: 1; text-align: left;\">Untitled</span></div><div style=\"padding: 8px; font-family: var(--font-body); font-size: 12px; color: var(--on-surface); line-height: 1.25;\">Content area with sample text.</div></div>",
      "label": "Window Card",
      "note": "A floating application window with title bar, close box (small square), and size box. No drop shadow, opaque white background."
    },
    {
      "name": "Modal Dialog Card",
      "desc": "A centered modal dialog with OK/Cancel push buttons. Background is not dimmed (since no alpha); instead a 50% dither pattern is drawn behind the dialog.",
      "html": "<div style=\"background-color: var(--surface); border: 2px solid var(--border); border-radius: var(--radius-card); padding: 8px; width: 240px; image-rendering: pixelated; position: relative;\"><div style=\"font-family: var(--font-display); font-size: 12px; color: var(--on-surface); text-align: center; margin-bottom: 8px;\">Save changes?</div><div style=\"display: flex; gap: 8px; justify-content: center;\"><button style=\"background-color: var(--surface); color: var(--on-surface); border: 1px solid var(--border); border-radius: var(--radius-btn); padding: 4px 12px; font-family: var(--font-body); font-size: 12px; cursor: pointer;\">OK</button><button style=\"background-color: var(--surface); color: var(--on-surface); border: 1px solid var(--border); border-radius: var(--radius-btn); padding: 4px 12px; font-family: var(--font-body); font-size: 12px; cursor: pointer;\">Cancel</button></div></div>",
      "label": "Modal Dialog Card",
      "note": "A centered modal dialog with OK/Cancel push buttons. Background is not dimmed (since no alpha); instead a 50% dither pattern is drawn behind the dialog."
    }
  ],
  "forms": [
    {
      "name": "Text Input",
      "desc": "Single-line text field with black border, white fill. Focus state has no outline (focus is indicated by content only).",
      "html": "<div style=\"border: 1px solid var(--border); border-radius: var(--radius-input); background-color: var(--surface); padding: 2px 4px; width: 200px;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" value=\"\" placeholder=\"Type here\" style=\"border: none; background: transparent; font-family: var(--font-body); font-size: 12px; color: var(--on-surface); outline: none; width: 100%; padding: 0; margin: 0; image-rendering: pixelated;\"></div>",
      "label": "Text Input",
      "stateLabel": "Single-line text field with black border, white fill. Focus state has no outline (focus is indicated by content only)."
    },
    {
      "name": "Checkbox (Unchecked / Checked)",
      "desc": "Square checkbox, 12px × 12px. Unchecked: white fill with black border. Checked: black fill (inverted). No rounded corners, no animation.",
      "html": "<div><label style=\"font-family: var(--font-body); font-size: 12px; display: flex; align-items: center; gap: 4px; cursor: pointer;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"appearance: none; -webkit-appearance: none; width: 12px; height: 12px; border: 1px solid var(--border); background-color: var(--surface); margin: 0; cursor: pointer; position: relative;\" checked><span style=\"color: var(--on-surface);\">Option A</span></label><label style=\"font-family: var(--font-body); font-size: 12px; display: flex; align-items: center; gap: 4px; cursor: pointer;\"><input type=\"checkbox\" style=\"appearance: none; -webkit-appearance: none; width: 12px; height: 12px; border: 1px solid var(--border); background-color: var(--surface); margin: 0; cursor: pointer;\"><span style=\"color: var(--on-surface);\">Option B</span></label></div>",
      "label": "Checkbox (Unchecked / Checked)",
      "stateLabel": "Square checkbox, 12px × 12px. Unchecked: white fill with black border. Checked: black fill (inverted). No rounded corners, no animation."
    },
    {
      "name": "Radio Button (Unselected / Selected)",
      "desc": "Square radio buttons (since HIG uses square controls). Unselected: white fill, black border. Selected: black fill with white dot (simulated via inset).",
      "html": "<div><label style=\"font-family: var(--font-body); font-size: 12px; display: flex; align-items: center; gap: 4px; cursor: pointer;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"radio\" name=\"radio\" style=\"appearance: none; -webkit-appearance: none; width: 12px; height: 12px; border: 1px solid var(--border); background-color: var(--surface); margin: 0; cursor: pointer; position: relative;\" checked><span style=\"color: var(--on-surface);\">Choice 1</span></label><label style=\"font-family: var(--font-body); font-size: 12px; display: flex; align-items: center; gap: 4px; cursor: pointer;\"><input type=\"radio\" name=\"radio\" style=\"appearance: none; -webkit-appearance: none; width: 12px; height: 12px; border: 1px solid var(--border); background-color: var(--surface); margin: 0; cursor: pointer;\"><span style=\"color: var(--on-surface);\">Choice 2</span></label></div>",
      "label": "Radio Button (Unselected / Selected)",
      "stateLabel": "Square radio buttons (since HIG uses square controls). Unselected: white fill, black border. Selected: black fill with white dot (simulated via inset)."
    }
  ],
  "extraComponents": [
    {
      "name": "Menu Bar",
      "desc": "The horizontal menu bar at the top of the screen. White background, black text. Apple logo (optional) and menu titles. When active, menu title inverts.",
      "html": "<div style=\"background-color: var(--surface); border-bottom: 2px solid var(--border); padding: 2px 8px; display: flex; align-items: center; gap: 8px; height: 20px; font-family: var(--font-display); font-size: 12px; color: var(--on-surface); image-rendering: pixelated;\"><span style=\"width: 16px; height: 16px; border: 1px solid var(--border); display: inline-block; text-align: center; line-height: 16px;\"></span><span>File</span><span>Edit</span><span>View</span><span>Special</span></div>"
    },
    {
      "name": "Scrollbar (Vertical)",
      "desc": "Classic Macintosh styled scrollbar with track, thumb, and arrow buttons. Track uses 50% dither pattern. Thumb is white with black border.",
      "html": "<div style=\"width: 16px; height: 200px; border: 1px solid var(--border); background-image: repeating-conic-gradient(#000 0 25%, #fff 0 50%); background-size: 2px 2px; display: flex; flex-direction: column; image-rendering: pixelated;\"><div style=\"height: 16px; border-bottom: 1px solid var(--border); background-color: var(--surface); text-align: center; line-height: 16px; font-size: 12px; color: var(--on-surface);\">▲</div><div style=\"flex: 1; position: relative;\"><div style=\"position: absolute; top: 20px; left: 2px; width: 12px; height: 40px; border: 1px solid var(--border); background-color: var(--surface);\"></div></div><div style=\"height: 16px; border-top: 1px solid var(--border); background-color: var(--surface); text-align: center; line-height: 16px; font-size: 12px; color: var(--on-surface);\">▼</div></div>"
    },
    {
      "name": "Icon (32×32 Folder)",
      "desc": "A 32×32 pixel monochrome folder icon, drawn with black outlines and white fill. Minimal bitmap style.",
      "html": "<div style=\"width: 32px; height: 32px; border: 1px solid var(--border); background-color: var(--surface); position: relative; image-rendering: pixelated;\"><div style=\"position: absolute; top: 4px; left: 4px; width: 24px; height: 24px; border: 1px solid var(--border); background-color: var(--surface);\"></div><div style=\"position: absolute; top: 2px; left: 2px; width: 8px; height: 4px; border: 1px solid var(--border); background-color: var(--surface);\"></div><div style=\"position: absolute; top: 8px; left: 6px; width: 20px; height: 12px; border: 1px solid var(--border); background-color: var(--surface);\"></div></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — Welcome to Macintosh</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — File Edit View Special</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — System 6.0.8</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — This disk is unreadable by this Macintosh.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — Trash</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "DO NOT use any color other than black and white. No grays, no accent colors, no gradients.",
      "avoid": {
        "html": "<button style=\"background-color: #4A90D9; color: #FFFFFF; border-radius: 4px; padding: 8px 16px;\">Submit</button>",
        "label": "Avoid"
      },
      "rule": "DO NOT use any color other than black and white. No grays, no accent colors, no gradients.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "DO NOT apply rounded corners, drop shadows, or anti-aliasing to any element.",
      "avoid": {
        "html": "<div style=\"background-color: #FFFFFF; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.2); padding: 16px;\">Rounded card with shadow</div>",
        "label": "Avoid"
      },
      "rule": "DO NOT apply rounded corners, drop shadows, or anti-aliasing to any element.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "DO NOT use fonts other than Chicago (substitute VT323). No serif, sans-serif fallbacks, or system fonts.",
      "avoid": {
        "html": "<p style=\"font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px;\">This uses forbidden fonts.</p>",
        "label": "Avoid"
      },
      "rule": "DO NOT use fonts other than Chicago (substitute VT323). No serif, sans-serif fallbacks, or system fonts.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "DO NOT use hover states, transitions, or animations. Interaction is instantaneous clicks only.",
      "avoid": {
        "html": "<button style=\"background-color: #FFFFFF; transition: background-color 0.3s ease;\" onmouseover=\"this.style.backgroundColor='#EEEEEE'\">Hover me</button>",
        "label": "Avoid"
      },
      "rule": "DO NOT use hover states, transitions, or animations. Interaction is instantaneous clicks only.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "effects": [],
  "motion": [],
  "colors": {
    "primary": "#000000",
    "surface": "#FFFFFF",
    "on-primary": "#FFFFFF",
    "on-surface": "#000000",
    "outline": "#000000",
    "secondary": "#FFFFFF"
  },
  "typography": {
    "display": {
      "fontFamily": "VT323",
      "fontSize": "12px",
      "fontWeight": 400,
      "lineHeight": 1,
      "letterSpacing": "0em"
    },
    "headline": {
      "fontFamily": "VT323",
      "fontSize": "12px",
      "fontWeight": 400,
      "lineHeight": 1,
      "letterSpacing": "0em"
    },
    "title": {
      "fontFamily": "VT323",
      "fontSize": "12px",
      "fontWeight": 400,
      "lineHeight": 1,
      "letterSpacing": "0em"
    },
    "body": {
      "fontFamily": "VT323",
      "fontSize": "12px",
      "fontWeight": 400,
      "lineHeight": 1.25,
      "letterSpacing": "0em"
    },
    "label": {
      "fontFamily": "VT323",
      "fontSize": "9px",
      "fontWeight": 400,
      "lineHeight": 1,
      "letterSpacing": "0em"
    }
  },
  "layouts": {
    "copy": {
      "heroKicker": "Classic Macintosh 1987 HIG",
      "heroHeadline": "PixelFile 1.0",
      "heroSub": "A 1‑bit file manager for the monochrome desktop",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">Open</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">About</button>",
      "navLinks": [
        "⌘",
        "File",
        "Edit",
        "View",
        "Special"
      ],
      "features": [
        {
          "title": "Icon View",
          "desc": "Display files and folders as 32×32 pixel icons",
          "icon": "📁",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📁 Icon View</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Display files and folders as 32×32 pixel icons</div></div>"
        },
        {
          "title": "List View",
          "desc": "Sortable columns with name, size, kind, and date",
          "icon": "📄",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📄 List View</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Sortable columns with name, size, kind, and date</div></div>"
        },
        {
          "title": "Trash",
          "desc": "Drag items to trash; empty with a flicker animation",
          "icon": "🗑",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🗑 Trash</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Drag items to trash; empty with a flicker animation</div></div>"
        },
        {
          "title": "Disk Browser",
          "desc": "Browse mounted volumes and eject with a click",
          "icon": "💾",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">💾 Disk Browser</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Browse mounted volumes and eject with a click</div></div>"
        }
      ],
      "ctaStripHeadline": "Download PixelFile 1.0 for System 7",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">Get Disk Image</button>",
      "sidebarBrand": "PixelFile",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "About",
          "active": true
        },
        {
          "icon": "◉",
          "label": "Help",
          "active": false
        }
      ],
      "dashboardTitle": "Active Window",
      "metrics": [
        {
          "label": "Files",
          "value": "128",
          "delta": "+2",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "Folders",
          "value": "32",
          "delta": "-1",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "Disks",
          "value": "3",
          "delta": "0",
          "dir": "flat",
          "direction": "flat"
        },
        {
          "label": "Trash Items",
          "value": "5",
          "delta": "+1",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "Disk Usage by Volume",
      "panelATitle": "File Properties",
      "panelARows": [
        {
          "label": "Name",
          "value": "ReadMe.txt",
          "pct": 0
        },
        {
          "label": "Size",
          "value": "12 KB",
          "pct": 12
        },
        {
          "label": "Kind",
          "value": "Text Document",
          "pct": 0
        },
        {
          "label": "Modified",
          "value": "Today",
          "pct": 0
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "Clipboard Contents",
      "panelBCells": [
        {
          "label": "Type",
          "value": "PICT",
          "state": "ok"
        },
        {
          "label": "Width",
          "value": "320",
          "state": "warn"
        },
        {
          "label": "Height",
          "value": "240",
          "state": "err"
        },
        {
          "label": "Depth",
          "value": "1-bit",
          "state": "ok"
        },
        {
          "label": "Size",
          "value": "30 KB",
          "state": "warn"
        },
        {
          "label": "Origin",
          "value": "File",
          "state": "err"
        },
        {
          "label": "Name",
          "value": "Icon.pict",
          "state": "ok"
        },
        {
          "label": "Status",
          "value": "Ready",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "HD",
        "FD1",
        "FD2",
        "CD",
        "RAM",
        "Srv"
      ],
      "series": [
        {
          "data": [
            200,
            40,
            80,
            120,
            256,
            512,
            512,
            512,
            512,
            512,
            512,
            512
          ],
          "label": "Free Space",
          "axis": "left",
          "color": "#000000"
        },
        {
          "data": [
            800,
            760,
            720,
            680,
            0,
            512,
            512,
            512,
            512,
            512,
            512,
            512
          ],
          "label": "Used Space",
          "axis": "right-1",
          "color": "#FFFFFF"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:320px;background:var(--bg);image-rendering:pixelated;font-family:var(--font-display);color:var(--on-bg);text-align:center;'; var icon = document.createElement('div'); icon.style.cssText = 'width:32px;height:32px;border:1px solid var(--border);background:var(--surface);position:relative;margin-bottom:12px;'; var face = document.createElement('div'); face.style.cssText = 'position:absolute;top:8px;left:6px;width:4px;height:4px;background:var(--on-surface);box-shadow:12px 0 0 var(--on-surface);border-radius:0;'; icon.appendChild(face); var mouth = document.createElement('div'); mouth.style.cssText = 'position:absolute;top:20px;left:10px;width:12px;height:2px;background:var(--on-surface);'; icon.appendChild(mouth); el.appendChild(icon); var heading = document.createElement('div'); heading.style.cssText = 'font-family:var(--font-display);font-size:12px;line-height:1;margin-bottom:24px;'; heading.textContent = 'Welcome to Macintosh.'; el.appendChild(heading); var btn = document.createElement('button'); btn.style.cssText = 'background:var(--surface);color:var(--on-surface);border:1px solid var(--border);padding:4px 12px;font-family:var(--font-body);font-size:12px;cursor:pointer;image-rendering:pixelated;'; btn.textContent = 'Continue'; el.appendChild(btn); }",
    "showcaseRender": "function(el) { el.style.cssText = 'background:var(--bg);color:var(--on-bg);font-family:var(--font-body);font-size:12px;image-rendering:pixelated;'; var win = document.createElement('div'); win.style.cssText = 'border:1px solid var(--border);background:var(--surface);width:280px;margin:8px auto;'; var titleBar = document.createElement('div'); titleBar.style.cssText = 'background:var(--surface);border-bottom:2px solid var(--border);padding:4px 6px;display:flex;align-items:center;gap:6px;'; var closeBox = document.createElement('span'); closeBox.style.cssText = 'width:12px;height:12px;border:1px solid var(--border);display:inline-block;background:var(--surface);'; titleBar.appendChild(closeBox); var title = document.createElement('span'); title.style.cssText = 'font-family:var(--font-display);font-size:12px;line-height:1;color:var(--on-surface);flex:1;'; title.textContent = 'PixelFile 1.0'; titleBar.appendChild(title); win.appendChild(titleBar); var content = document.createElement('div'); content.style.cssText = 'padding:8px;'; var list = document.createElement('ul'); list.style.cssText = 'list-style:none;padding:0;margin:0;'; var items = ['Applications', 'System Folder', 'Documents', 'Trash']; for(var i=0;i<items.length;i++){ var li = document.createElement('li'); li.style.cssText = 'padding:2px 0;display:flex;align-items:center;gap:4px;'; var ic = document.createElement('span'); ic.style.cssText = 'width:16px;height:16px;border:1px solid var(--border);display:inline-block;background:var(--surface);'; li.appendChild(ic); var txt = document.createElement('span'); txt.textContent = items[i]; li.appendChild(txt); list.appendChild(li); } content.appendChild(list); win.appendChild(content); el.appendChild(win); }",
    "panelCRender": "function(el) { el.style.cssText = 'background:var(--bg);color:var(--on-bg);font-family:var(--font-body);font-size:12px;image-rendering:pixelated;border:1px solid var(--border);background:var(--surface);padding:0;width:200px;'; var titleBar = document.createElement('div'); titleBar.style.cssText = 'background:var(--surface);border-bottom:2px solid var(--border);padding:4px 6px;display:flex;align-items:center;gap:6px;'; var closeBox = document.createElement('span'); closeBox.style.cssText = 'width:12px;height:12px;border:1px solid var(--border);display:inline-block;background:var(--surface);'; titleBar.appendChild(closeBox); var title = document.createElement('span'); title.style.cssText = 'font-family:var(--font-display);font-size:12px;line-height:1;color:var(--on-surface);flex:1;'; title.textContent = 'Info'; titleBar.appendChild(title); el.appendChild(titleBar); var body = document.createElement('div'); body.style.cssText = 'padding:8px;'; var metric = function(label, value) { var row = document.createElement('div'); row.style.cssText = 'display:flex;justify-content:space-between;padding:2px 0;'; var l = document.createElement('span'); l.textContent = label; row.appendChild(l); var v = document.createElement('span'); v.textContent = value; row.appendChild(v); return row; }; body.appendChild(metric('Files:', '128')); body.appendChild(metric('Disks:', '3')); body.appendChild(metric('Trash:', '5')); el.appendChild(body); }",
    "heroBackground": "function(el) { el.style.background = '#fff'; }",
    "ctaBackground": "function(el) { el.style.background = '#fff'; }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'height:1px;background:var(--border);margin:0;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = '#fff'; }",
    "surfaceOverlay": "function(el) { var ov = document.createElement('div'); ov.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;background:repeating-conic-gradient(#000 0% 25%, #fff 0% 50%) 0px 0px / 2px 2px;image-rendering:pixelated;'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(tick, el) { el.style.cssText = 'position:absolute;inset:0;z-index:0;pointer-events:none;background:var(--bg);'; var scanline = document.createElement('div'); scanline.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;background:repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.06) 1px, rgba(0,0,0,0.06) 2px);mix-blend-mode:multiply;pointer-events:none;'; el.appendChild(scanline); var bloom = document.createElement('div'); bloom.style.cssText = 'position:absolute;inset:0;pointer-events:none;mix-blend-mode:screen;opacity:0.05;background:radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.3) 0%, transparent 70%);'; el.appendChild(bloom); }",
  "shadcnTokens": {
    "--color-background": "#FFFFFF",
    "--color-popover": "#FFFFFF",
    "--color-foreground": "#000000",
    "--color-card-foreground": "#000000",
    "--color-popover-foreground": "#000000",
    "--color-card": "#FFFFFF",
    "--color-muted": "#FFFFFF",
    "--color-muted-foreground": "#1a1a1a",
    "--color-primary": "#000000",
    "--color-ring": "#000000",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#FFFFFF",
    "--color-accent": "#FFFFFF",
    "--color-secondary-foreground": "#000000",
    "--color-accent-foreground": "#000000",
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
    "--card": "#FFFFFF",
    "--muted": "#FFFFFF",
    "--muted-foreground": "#1a1a1a",
    "--primary": "#000000",
    "--ring": "#000000",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#FFFFFF",
    "--accent": "#FFFFFF",
    "--secondary-foreground": "#000000",
    "--accent-foreground": "#000000",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#000000"
  }
});
