registerSystem({
  "meta": {
    "name": "Xerox Star Workstation Interface (1981)",
    "tagline": "The first commercial graphical desktop — strict 1-bit monochrome bitmapped rendering with a literal desktop metaphor.",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap"
  },
  "yamlTokens": {
    "name": "Xerox Star Workstation Interface (1981)",
    "colors": {
      "primary": "#000000",
      "on-primary": "#FFFFFF",
      "surface": "#FFFFFF",
      "on-surface": "#000000",
      "outline": "#000000",
      "neutral": "#808080"
    },
    "typography": {
      "display": {
        "fontFamily": "Monospace",
        "fontSize": "16px",
        "fontWeight": 700,
        "lineHeight": 1,
        "letterSpacing": "0em"
      },
      "headline": {
        "fontFamily": "Monospace",
        "fontSize": "14px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0em"
      },
      "title": {
        "fontFamily": "Monospace",
        "fontSize": "14px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0em"
      },
      "body": {
        "fontFamily": "Monospace",
        "fontSize": "12px",
        "fontWeight": 400,
        "lineHeight": 1,
        "letterSpacing": "0em"
      },
      "label": {
        "fontFamily": "Monospace",
        "fontSize": "12px",
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
      "page-edge": "4px",
      "gap-component": "4px",
      "gap-section": "8px",
      "height-sm": "24px",
      "height-md": "32px",
      "height-lg": "40px",
      "icon": "16px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "{colors.surface}",
        "textColor": "{colors.on-surface}",
        "rounded": "0px",
        "padding": "4px",
        "height": "32px"
      },
      "button-primary-hover": {
        "backgroundColor": "{colors.primary}",
        "textColor": "{colors.on-primary}",
        "rounded": "0px",
        "padding": "4px",
        "height": "32px"
      },
      "card": {
        "backgroundColor": "{colors.surface}",
        "rounded": "0px",
        "padding": "8px"
      },
      "input": {
        "backgroundColor": "{colors.surface}",
        "textColor": "{colors.on-surface}",
        "rounded": "0px",
        "padding": "4px",
        "height": "32px"
      },
      "input-focus": {
        "backgroundColor": "{colors.surface}",
        "textColor": "{colors.on-surface}",
        "rounded": "0px",
        "padding": "4px",
        "height": "32px"
      },
      "window-titlebar": {
        "backgroundColor": "{colors.primary}",
        "textColor": "{colors.on-primary}",
        "height": "40px"
      },
      "desktop-icon": {
        "size": "24px",
        "textColor": "{colors.on-surface}"
      }
    },
    "version": "alpha",
    "description": "The first commercial graphical desktop — strict 1-bit monochrome bitmapped rendering with a literal desktop metaphor, blocky pixel-grid typography, squared window borders with inverted title bars, and total absence of gradients, shadows, or rounded corners.",
    "provenance": {
      "coverage_status": "sparse",
      "identity_description": "The slug `xerox-star-workstation-interface-1981` unambiguously refers to the graphical user interface of the Xerox 8010 Star Information System (Xerox Star), introduced commercially in 1981 by Xerox Corporation’s Office Systems Division. This interface is historically significant as the first commercial implementation of the desktop metaphor, including overlapping windows, icons, menus, and direct",
      "manual_enrichment_required": false,
      "imagery_count": 4,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "www.computerhistory.org",
          "count": 1
        },
        {
          "host": "en.wikipedia.org",
          "count": 1
        },
        {
          "host": "www.youtube.com",
          "count": 1
        },
        {
          "host": "staricons.blogspot.com",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://www.computerhistory.org/collections/catalog/102663320",
          "host": "www.computerhistory.org",
          "institution": "Computer History Museum, Mountain View, CA",
          "confidence_original": "low"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Xerox_Star",
          "host": "en.wikipedia.org",
          "institution": "Wikimedia Foundation",
          "confidence_original": "high"
        },
        {
          "url": "https://www.youtube.com/watch?v=o5fgY1Z5J5E",
          "host": "www.youtube.com",
          "institution": "YouTube (Computer History Museum channel)",
          "confidence_original": "low"
        },
        {
          "url": "https://staricons.blogspot.com/",
          "host": "staricons.blogspot.com",
          "institution": "Blogspot (individual archive)",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Xerox Star System Font",
          "foundry": null,
          "year": 1981,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "attested"
        }
      ],
      "flags": [
        "sparse_imagery"
      ],
      "honest_gaps": [
        {
          "\"1. **Colour": "** Exact CIE coordinates of P4/P39 phosphor; hex values for display white and black; casing colour Pantone or RAL.\""
        }
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#FFFFFF",
    "--on-bg": "#000000",
    "--primary": "#000000",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#808080",
    "--on-secondary": "#FFFFFF",
    "--surface": "#FFFFFF",
    "--on-bg-muted": "#808080",
    "--border": "#000000",
    "--error": "#000000",
    "--font-display": "Press Start 2P",
    "--font-body": "VT323",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "button-default-bg": "var(--surface)",
    "button-default-text": "var(--on-surface)",
    "button-default-border": "var(--border)",
    "button-active-bg": "var(--primary)",
    "button-active-text": "var(--on-primary)",
    "button-disabled-bg": "var(--surface)",
    "button-disabled-text": "var(--secondary-col)",
    "window-titlebar-bg": "var(--primary)",
    "window-titlebar-text": "var(--on-primary)",
    "window-content-bg": "var(--surface)",
    "window-border": "var(--border)",
    "scrollbar-track": "var(--surface)",
    "scrollbar-thumb": "var(--border)",
    "selection-bg": "var(--primary)",
    "selection-text": "var(--on-primary)",
    "warn": "#808080",
    "ok": "#000000",
    "err": "#000000",
    "deltaUp": "#000000",
    "deltaDown": "#808080",
    "deltaFlat": "#808080",
    "live": "#000000",
    "chartGrid": "#808080",
    "chartLabel": "#000000",
    "chartFont": "VT323"
  },
  "chartStyle": {
    "palette": [
      "#000000",
      "#FFFFFF",
      "#808080"
    ],
    "fontFamily": "VT323",
    "backgroundColor": "#FFFFFF",
    "gridColor": "#000000",
    "labelColor": "#000000",
    "chartGrid": "#808080"
  },
  "surfaceModel": "flat",
  "materialSimulation": {
    "model": "crt-screen",
    "params": {
      "optional": true,
      "variations": [
        "phosphor bloom",
        "scanlines",
        "pincushion vignette"
      ]
    }
  },
  "interactionModel": {
    "hover": {},
    "focus": {
      "outline": "1px solid var(--border)"
    },
    "active": {
      "backgroundColor": "var(--primary)",
      "color": "var(--on-primary)"
    }
  },
  "spacing": {
    "component-internal": "4px",
    "section-internal": "8px",
    "page-edge": "4px",
    "gap-component": "4px",
    "gap-section": "8px",
    "height-sm": "24px",
    "height-md": "32px",
    "height-lg": "40px",
    "icon": "16px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "0px"
  },
  "elevation": {
    "level-0": "none",
    "level-1": "none",
    "level-2": "none",
    "level-3": "none",
    "level-4": "none",
    "level-5": "none"
  },
  "dashboardStyle": {
    "layout": "single window centered, 4:3 aspect ratio, no taskbar",
    "density": "sparse with multiple overlapping windows that can become cluttered",
    "panelTreatment": "each panel is a separate window with inverted title bar, freely overlapping",
    "dataVizStyle": "monochrome pixel-art charts using only black, white, and optional gray, no anti-aliasing",
    "signatureElement": "inverted title bar with window control icons (close, resize) all pixel-aligned"
  },
  "landingStyle": {
    "heroApproach": "full-screen window showing a list of files and folders with desktop icons in a grid",
    "scrollBehavior": "no page scrolling; content scrolls within windows using internal scrollbars",
    "ctaStyle": "double-click on a file icon to open; all interactions are immediate with no transition",
    "signatureMoment": "user double-clicks a desktop icon, a new window opens instantly with a scanline reveal effect"
  },
  "globalFilter": null,
  "globalBodyCss": "* { font-smoothing: none; image-rendering: pixelated; text-rendering: optimizeSpeed; -webkit-font-smoothing: none; -moz-osx-font-smoothing: unset; } body { font-family: var(--font-body); background: var(--bg); color: var(--on-bg); margin: 0; padding: 0; }",
  "globalCss": ".ds-layout-frame { --transition-duration: 0ms; --transition-timing: steps(1); } .ds-layout-frame .cursor-blink { animation: blink 500ms steps(1) infinite; } .ds-layout-frame .window-open { animation: scanlineReveal 200ms steps(10) forwards; } @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } } @keyframes scanlineReveal { from { clip-path: inset(0 0 100% 0); } to { clip-path: inset(0); } }",
  "interactionStyles": ".ds-layout-frame *:not(.cursor-blink):not(.window-open) { transition-property: none; transition-duration: 0ms !important; transition-timing-function: step-start !important; transition-delay: 0ms !important; } .ds-layout-frame button:active, .ds-layout-frame [role=\"button\"]:active, .ds-layout-frame .opt-active { background-color: var(--primary) !important; color: var(--on-primary) !important; border-color: var(--primary) !important; } .ds-layout-frame input:focus { outline: 1px solid var(--border); } .ds-layout-frame ::selection { background: var(--primary); color: var(--on-primary); }",
  "buttons": [
    {
      "name": "Primary Button",
      "desc": "Default state: white fill, black 1px border, black text. Active/pressed: instant inversion to black fill, white text. No hover state. Disabled: gray border, gray text, white fill.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:var(--surface);color:var(--on-surface);border:1px solid var(--border);border-radius:var(--radius-btn);padding:4px 8px;height:32px;font-family:var(--font-body);font-size:12px;line-height:1;cursor:pointer;\">Primary</button>",
      "label": "Primary Button",
      "note": "Default state: white fill, black 1px border, black text. Active/pressed: instant inversion to black fill, white text. No hover state. Disabled: gray border, gray text, white fill."
    },
    {
      "name": "Secondary Button (Gray)",
      "desc": "Uses optional gray for border and text, white fill. Active state inverts to black/white. Disabled remains gray on white.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:var(--surface);color:var(--secondary-col);border:1px solid var(--secondary-col);border-radius:var(--radius-btn);padding:4px 8px;height:32px;font-family:var(--font-body);font-size:12px;line-height:1;cursor:pointer;\">Secondary</button>",
      "label": "Secondary Button (Gray)",
      "note": "Uses optional gray for border and text, white fill. Active state inverts to black/white. Disabled remains gray on white."
    },
    {
      "name": "Toolbar Button (Small)",
      "desc": "Compact button for title bar or toolbar, 24px height. Same visual rules as primary but smaller footprint.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:var(--surface);color:var(--on-surface);border:1px solid var(--border);border-radius:var(--radius-btn);padding:2px 4px;height:24px;font-family:var(--font-body);font-size:10px;line-height:1;cursor:pointer;\">Tool</button>",
      "label": "Toolbar Button (Small)",
      "note": "Compact button for title bar or toolbar, 24px height. Same visual rules as primary but smaller footprint."
    }
  ],
  "cards": [
    {
      "name": "Standard Content Card",
      "desc": "White fill, black 1px border, flat no elevation, internal padding 8px. May contain text or lists. No header bar.",
      "html": "<div style=\"background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-card);padding:8px;\"><p style=\"margin:0;font-family:var(--font-body);font-size:12px;color:var(--on-surface);\">File: Quarterly Report</p></div>",
      "label": "Standard Content Card",
      "note": "White fill, black 1px border, flat no elevation, internal padding 8px. May contain text or lists. No header bar."
    },
    {
      "name": "Inverted Highlight Card",
      "desc": "Black fill with white text for emphasis or active selection. Same border (black on black? Actually border is invisible, but we keep border black for consistency). Used sparingly.",
      "html": "<div style=\"background:var(--primary);color:var(--on-primary);border:1px solid var(--border);border-radius:var(--radius-card);padding:8px;\"><p style=\"margin:0;font-family:var(--font-body);font-size:12px;\">Selected Item</p></div>",
      "label": "Inverted Highlight Card",
      "note": "Black fill with white text for emphasis or active selection. Same border (black on black? Actually border is invisible, but we keep border black for consistency). Used sparingly."
    }
  ],
  "forms": [
    {
      "name": "Text Input",
      "desc": "Single-line input field. White fill, black 1px border, black text, cursor: text. Focus state: same style (no hover, no shadow).",
      "html": "<div style=\"display:flex;flex-direction:column;gap:4px;\"><label style=\"font-family:var(--font-body);font-size:12px;color:var(--on-surface);\">Name:</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" value=\"\" placeholder=\"Enter text\" style=\"background:var(--surface);color:var(--on-surface);border:1px solid var(--border);border-radius:var(--radius-input);padding:4px;height:32px;font-family:var(--font-body);font-size:12px;line-height:1;box-sizing:border-box;outline:none;\"></div>",
      "label": "Text Input",
      "stateLabel": "Single-line input field. White fill, black 1px border, black text, cursor: text. Focus state: same style."
    },
    {
      "name": "Select Dropdown",
      "desc": "Native select styled with monospace font, white fill, black border. Options are simple list.",
      "html": "<div style=\"display:flex;flex-direction:column;gap:4px;\"><label style=\"font-family:var(--font-body);font-size:12px;color:var(--on-surface);\">File Type:</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:var(--surface);color:var(--on-surface);border:1px solid var(--border);border-radius:var(--radius-input);padding:4px;height:32px;font-family:var(--font-body);font-size:12px;line-height:1;box-sizing:border-box;\"><option>Document</option><option>Spreadsheet</option><option>Diagram</option></select></div>",
      "label": "Select Dropdown",
      "stateLabel": "Native select styled with monospace font, white fill, black border."
    },
    {
      "name": "Checkbox",
      "desc": "8x8 pixel square, black 1px border, white bg. Checked state shows a black 'X' using a pseudo element. Label to the right.",
      "html": "<label style=\"display:flex;align-items:center;gap:4px;font-family:var(--font-body);font-size:12px;color:var(--on-surface);cursor:pointer;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"appearance:none;width:8px;height:8px;background:var(--surface);border:1px solid var(--border);margin:0;border-radius:0;display:inline-block;position:relative;\" checked> <span>Include header</span></label>",
      "label": "Checkbox",
      "stateLabel": "8x8 pixel square, black 1px border, white bg. Checked state shows a black 'X' using a pseudo element. Label to the right."
    }
  ],
  "extraComponents": [
    {
      "name": "Desktop Icon",
      "desc": "A 16x16 pixel icon (simulated with colored text) with a label below. Black text, no anti-aliasing. Represents an office object (folder, document).",
      "html": "<div style=\"display:flex;flex-direction:column;align-items:center;gap:2px;width:48px;cursor:pointer;\"><div style=\"width:16px;height:16px;background:var(--primary);display:flex;align-items:center;justify-content:center;font-size:10px;line-height:1;color:var(--on-primary);\">F</div><span style=\"font-family:var(--font-body);font-size:10px;color:var(--on-surface);text-align:center;line-height:1;\">Folder</span></div>"
    },
    {
      "name": "Vertical Scrollbar",
      "desc": "Narrow scrollbar track with a thumb. White track, black border, black thumb. No arrows (Xerox used single arrow? Not implementing here).",
      "html": "<div style=\"width:12px;height:120px;background:var(--surface);border:1px solid var(--border);display:flex;flex-direction:column;position:relative;\"><div style=\"width:100%;height:40px;background:var(--primary);position:absolute;top:20px;left:0;\"></div></div>"
    },
    {
      "name": "Context Menu",
      "desc": "A popup menu window with a list of commands. Black border, white fill, black text. Active item gets inverted (black fill, white text).",
      "html": "<div style=\"display:inline-block;background:var(--surface);border:1px solid var(--border);padding:0;min-width:120px;\"><ul style=\"list-style:none;margin:0;padding:0;\"><li style=\"padding:4px 8px;font-family:var(--font-body);font-size:12px;color:var(--on-surface);cursor:pointer;\">Open</li><li style=\"padding:4px 8px;font-family:var(--font-body);font-size:12px;color:var(--on-primary);background:var(--primary);cursor:pointer;\">Copy</li><li style=\"padding:4px 8px;font-family:var(--font-body);font-size:12px;color:var(--on-surface);cursor:pointer;\">Delete</li></ul></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — Xerox Star Workstation</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — Quarterly Report</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — File Manager</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — This is a sample of body text used for document content and labels.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — Folder: Projects</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "No rounded corners — all geometry must be 90° sharp corners.",
      "avoid": {
        "html": "<div style=\"background:white;border:1px solid black;border-radius:8px;padding:8px;\">Rounded card</div>",
        "label": "Avoid"
      },
      "rule": "No rounded corners — all geometry must be 90° sharp corners.",
      "do": {
        "label": "Do",
        "html": "<div style=\"background:white;border:1px solid black;padding:8px;\">Sharp cornered window</div>"
      }
    },
    {
      "desc": "No drop shadows — surfaces are flat and coplanar.",
      "avoid": {
        "html": "<div style=\"background:white;border:1px solid black;box-shadow:2px 2px 4px rgba(0,0,0,0.2);padding:8px;\">Window with shadow</div>",
        "label": "Avoid"
      },
      "rule": "No drop shadows — surfaces are flat and coplanar.",
      "do": {
        "label": "Do",
        "html": "<div style=\"background:white;border:1px solid black;padding:8px;\">Flat window</div>"
      }
    },
    {
      "desc": "No gradients or color transitions — strict 1-bit monochrome.",
      "avoid": {
        "html": "<button style=\"background:linear-gradient(to right, black, white);color:black;border:none;padding:4px 8px;\">Gradient button</button>",
        "label": "Avoid"
      },
      "rule": "No gradients or color transitions — strict 1-bit monochrome.",
      "do": {
        "label": "Do",
        "html": "<button style=\"background:white;color:black;border:1px solid black;padding:4px 8px;\">Solid button</button>"
      }
    },
    {
      "desc": "No hover effects — state changes only on click/press.",
      "avoid": {
        "html": "<button style=\"background:white;border:1px solid black;color:black;padding:4px 8px;\" onmouseenter=\"this.style.background='black';this.style.color='white';\" onmouseleave=\"this.style.background='white';this.style.color='black'\">Hover me</button>",
        "label": "Avoid"
      },
      "rule": "No hover effects — state changes only on click/press.",
      "do": {
        "label": "Do",
        "html": "<button style=\"background:white;color:black;border:1px solid black;padding:4px 8px;\">Static button (active via :active)</button>"
      }
    }
  ],
  "layouts": {
    "copy": {
      "heroKicker": "XEROX STAR WORKSTATION 1981",
      "heroHeadline": "THE DESKTOP THAT BEGAN IT ALL",
      "heroSub": "Strict monochrome pixel interface. No curves. No shadows. No wasted bits.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">START SESSION</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">ABOUT THE SYSTEM</button>",
      "navLinks": [
        "DOCUMENTS",
        "FOLDERS",
        "PRINT QUEUE",
        "SYSTEM",
        "HELP"
      ],
      "features": [
        {
          "title": "DOCUMENT EDITOR",
          "desc": "Create and edit text documents in a dedicated window. Pixel grid alignment, no formatting fluff.",
          "icon": "📄",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📄 DOCUMENT EDITOR</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Create and edit text documents in a dedicated window. Pixel grid alignment, no formatting fluff.</div></div>"
        },
        {
          "title": "FOLDER BROWSER",
          "desc": "Navigate hierarchical folders with icon and list views. Open multiple windows for side-by-side comparison.",
          "icon": "📁",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📁 FOLDER BROWSER</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Navigate hierarchical folders with icon and list views. Open multiple windows for side-by-side comparison.</div></div>"
        },
        {
          "title": "PRINT SPOOLER",
          "desc": "Queue documents for network printing. Monitor job status and cancel pending prints.",
          "icon": "🖨",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🖨 PRINT SPOOLER</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Queue documents for network printing. Monitor job status and cancel pending prints.</div></div>"
        },
        {
          "title": "FILE PROPERTIES",
          "desc": "Inspect file size, type, and creation date. Modify attributes via instant inversion selection.",
          "icon": "📋",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📋 FILE PROPERTIES</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Inspect file size, type, and creation date. Modify attributes via instant inversion selection.</div></div>"
        }
      ],
      "ctaStripHeadline": "EXPERIENCE THE ORIGINAL GRAPHICAL INTERFACE",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">LAUNCH STAR SYSTEM</button>",
      "sidebarBrand": "STAR SYSTEM",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "FILE INDEX",
          "active": true
        },
        {
          "icon": "◉",
          "label": "WORKSPACE",
          "active": false
        },
        {
          "icon": "◉",
          "label": "PRINTER",
          "active": false
        },
        {
          "icon": "◉",
          "label": "TOOLS",
          "active": false
        }
      ],
      "dashboardTitle": "SYSTEM STATUS",
      "metrics": [
        {
          "label": "DOCUMENTS",
          "value": "12",
          "delta": "+2",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "FOLDERS",
          "value": "5",
          "delta": "0",
          "dir": "flat",
          "direction": "flat"
        },
        {
          "label": "FILES QUEUED",
          "value": "3",
          "delta": "-1",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "DISK BLOCKS FREE",
          "value": "2048",
          "delta": "-16",
          "dir": "down",
          "direction": "down"
        }
      ],
      "chartTitle": "WINDOW ACTIVITY",
      "panelATitle": "SYSTEM RESOURCES",
      "panelARows": [
        {
          "label": "CPU LOAD",
          "value": "23%",
          "pct": 23
        },
        {
          "label": "MEMORY USED",
          "value": "384K",
          "pct": 100
        },
        {
          "label": "CLOCK SPEED",
          "value": "10 MHz",
          "pct": 10
        },
        {
          "label": "VERSION",
          "value": "2.1",
          "pct": 2.1
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "PERIPHERAL STATUS",
      "panelBCells": [
        {
          "label": "SCREEN",
          "value": "ON",
          "state": "ok"
        },
        {
          "label": "CURSOR",
          "value": "BLINK",
          "state": "warn"
        },
        {
          "label": "MOUSE",
          "value": "OK",
          "state": "err"
        },
        {
          "label": "KEYBOARD",
          "value": "OK",
          "state": "ok"
        },
        {
          "label": "POWER",
          "value": "GOOD",
          "state": "warn"
        },
        {
          "label": "NETWORK",
          "value": "LINK",
          "state": "err"
        },
        {
          "label": "PAPER",
          "value": "LOADED",
          "state": "ok"
        },
        {
          "label": "TONER",
          "value": "FULL",
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
            2,
            4,
            5,
            6,
            3,
            4,
            4,
            4,
            4,
            4,
            4,
            4
          ],
          "label": "OPEN WINDOWS",
          "axis": "left",
          "color": "#000000"
        },
        {
          "data": [
            8,
            12,
            14,
            15,
            9,
            11,
            11,
            11,
            11,
            11,
            11,
            11
          ],
          "label": "ICONS ACTIVE",
          "axis": "right-1",
          "color": "#808080"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'background:var(--surface);min-height:320px;display:flex;align-items:center;justify-content:center;font-family:var(--font-body);'; var win = document.createElement('div'); win.style.cssText = 'border:1px solid var(--border);background:var(--surface);width:480px;'; var titlebar = document.createElement('div'); titlebar.style.cssText = 'background:var(--primary);color:var(--on-primary);padding:8px;font-family:var(--font-display);font-size:14px;text-align:center;'; titlebar.textContent = 'XEROX STAR WORKSTATION'; win.appendChild(titlebar); var body = document.createElement('div'); body.style.cssText = 'padding:16px;display:flex;flex-wrap:wrap;gap:8px;justify-content:center;'; var icons = [['F','FOLDER'],['D','DOCUMENT'],['P','PRINTER'],['I','INBOX']]; for (var i=0; i<icons.length; i++) { var ic = document.createElement('div'); ic.style.cssText = 'display:flex;flex-direction:column;align-items:center;width:64px;cursor:pointer;'; var ico = document.createElement('div'); ico.style.cssText = 'width:16px;height:16px;background:var(--primary);color:var(--on-primary);display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-size:8px;'; ico.textContent = icons[i][0]; var lab = document.createElement('span'); lab.style.cssText = 'font-family:var(--font-body);font-size:10px;color:var(--on-surface);text-align:center;line-height:1;margin-top:4px;'; lab.textContent = icons[i][1]; ic.appendChild(ico); ic.appendChild(lab); body.appendChild(ic); } win.appendChild(body); el.appendChild(win); }",
    "showcaseRender": "function(el) { el.style.cssText = 'background:var(--surface);padding:16px;font-family:var(--font-body);'; var title = document.createElement('div'); title.style.cssText = 'background:var(--primary);color:var(--on-primary);padding:8px;font-family:var(--font-display);font-size:14px;text-align:center;margin-bottom:8px;'; title.textContent = 'SYSTEM FEATURES'; el.appendChild(title); var grid = document.createElement('div'); grid.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:8px;'; var features = [['📄','DOCUMENT EDITOR','Create and edit text documents in a dedicated window. Pixel grid alignment, no formatting fluff.'],['📁','FOLDER BROWSER','Navigate hierarchical folders with icon and list views. Open multiple windows for side-by-side comparison.'],['🖨','PRINT SPOOLER','Queue documents for network printing. Monitor job status and cancel pending prints.'],['📋','FILE PROPERTIES','Inspect file size, type, and creation date. Modify attributes via instant inversion selection.']]; for (var i=0; i<features.length; i++) { var card = document.createElement('div'); card.style.cssText = 'border:1px solid var(--border);padding:16px;display:flex;flex-direction:column;gap:8px;'; var head = document.createElement('div'); head.style.cssText = 'font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;color:var(--primary);'; head.textContent = features[i][0] + ' ' + features[i][1]; var desc = document.createElement('div'); desc.style.cssText = 'font-family:var(--font-body);font-size:12px;color:var(--on-bg-muted);line-height:1.4;'; desc.textContent = features[i][2]; card.appendChild(head); card.appendChild(desc); grid.appendChild(card); } el.appendChild(grid); }",
    "panelCRender": "function(el) { el.style.cssText = 'background:var(--surface);padding:8px;font-family:var(--font-body);'; var title = document.createElement('div'); title.style.cssText = 'background:var(--primary);color:var(--on-primary);padding:8px;font-family:var(--font-display);font-size:14px;text-align:center;'; title.textContent = 'SYSTEM RESOURCES'; el.appendChild(title); var rows = [['CPU LOAD','23%',23],['MEMORY USED','384K',100],['CLOCK SPEED','10 MHz',10],['VERSION','2.1',2.1]]; var list = document.createElement('div'); list.style.cssText = 'margin-top:8px;display:flex;flex-direction:column;gap:4px;'; for (var i=0; i<rows.length; i++) { var row = document.createElement('div'); row.style.cssText = 'display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--border);padding:4px 0;'; var lab = document.createElement('span'); lab.style.cssText = 'font-family:var(--font-body);font-size:12px;color:var(--on-surface);'; lab.textContent = rows[i][0]; var val = document.createElement('span'); val.style.cssText = 'font-family:var(--font-display);font-size:12px;color:var(--primary);'; val.textContent = rows[i][1]; row.appendChild(lab); row.appendChild(val); list.appendChild(row); } el.appendChild(list); }",
    "heroBackground": "function(el) { el.style.background = 'var(--surface)'; }",
    "ctaBackground": "function(el) { el.style.background = 'var(--surface)'; }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'height:8px;background:var(--primary);'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = 'var(--surface)'; }",
    "surfaceOverlay": "function(el) { var ov = document.createElement('div'); ov.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(canvas, tick) { var ctx = canvas.getContext('2d'); var w = canvas.width, h = canvas.height; ctx.clearRect(0, 0, w, h); var primary = '#000000'; ctx.fillStyle = primary; for (var y = (tick % 8); y < h; y += 16) { ctx.fillRect(0, y, w, 1); } }",
  "shadcnTokens": {
    "--color-background": "#FFFFFF",
    "--color-popover": "#FFFFFF",
    "--color-foreground": "#000000",
    "--color-card-foreground": "#000000",
    "--color-popover-foreground": "#000000",
    "--color-card": "#FFFFFF",
    "--color-muted": "#FFFFFF",
    "--color-muted-foreground": "#808080",
    "--color-primary": "#000000",
    "--color-ring": "#000000",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#808080",
    "--color-accent": "#808080",
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
    "--card": "#FFFFFF",
    "--muted": "#FFFFFF",
    "--muted-foreground": "#808080",
    "--primary": "#000000",
    "--ring": "#000000",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#808080",
    "--accent": "#808080",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#000000"
  }
});
