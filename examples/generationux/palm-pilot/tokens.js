registerSystem({
  "meta": {
    "name": "Palm Pilot",
    "tagline": "Monochrome LCD interface inspired by late-1990s PDAs: utilitarian calm, pixel-perfect bitmap rendering, and strict green-gray grayscale.",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
  },
  "yamlTokens": {
    "name": "Palm Pilot",
    "colors": {
      "on-surface": "#000000",
      "inverse-surface": "#000000",
      "inverse-on-surface": "#FFFFFF",
      "thumb-hover": "#000000"
    },
    "typography": {
      "display": {
        "fontFamily": "JetBrains Mono, monospace",
        "fontSize": "24px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "JetBrains Mono, monospace",
        "fontSize": "20px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "JetBrains Mono, monospace",
        "fontSize": "16px",
        "fontWeight": 600,
        "lineHeight": 1,
        "letterSpacing": "0em"
      },
      "body": {
        "fontFamily": "JetBrains Mono, monospace",
        "fontSize": "14px",
        "fontWeight": 400,
        "lineHeight": 1.25,
        "letterSpacing": "0em"
      },
      "label": {
        "fontFamily": "JetBrains Mono, monospace",
        "fontSize": "12px",
        "fontWeight": 500,
        "lineHeight": 1,
        "letterSpacing": "-0.025em",
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
      "component-internal": "8px",
      "section-internal": "8px",
      "page-edge": "8px",
      "gap-component": "4px",
      "gap-section": "8px",
      "height-sm": "24px",
      "height-md": "32px",
      "height-lg": "40px",
      "icon": "20px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "#BAC0A8",
        "textColor": "#000000",
        "rounded": "{rounded.button}",
        "height": "32px",
        "padding": "8px"
      },
      "status-bar": {
        "backgroundColor": "{colors.inverse-surface}",
        "textColor": "{colors.inverse-on-surface}",
        "height": "12px"
      },
      "list-item": {
        "backgroundColor": "transparent",
        "textColor": "{colors.on-surface}",
        "height": "28px",
        "padding": "8px"
      },
      "scrollbar-thumb": {
        "backgroundColor": "{colors.thumb-hover}",
        "width": "8px",
        "height": "12px"
      },
      "metric-cell": {
        "backgroundColor": "#B4D0B4",
        "textColor": "{colors.on-surface}",
        "height": "32px",
        "padding": "8px",
        "rounded": "{rounded.default}"
      }
    },
    "version": "alpha",
    "description": "Monochrome LCD interface inspired by late-1990s PDAs: utilitarian calm, pixel-perfect bitmap rendering, and a strict green-gray grayscale palette. Every pixel serves data, not decoration.",
    "provenance": {
      "coverage_status": "minimal",
      "identity_description": "The slug `palm-pilot` refers to the original Palm Pilot personal digital assistant (PDA) line, first released by Palm Computing (a division of U.S. Robotics, later 3Com) in March 1996. The subject encompasses the hardware models (Pilot 1000, Pilot 5000, PalmPilot Personal, PalmPilot Professional, Palm III) and the attached visual identity: the device form factor, the Palm logo (a stylised palm tre",
      "manual_enrichment_required": true,
      "imagery_count": 2,
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
        }
      ],
      "imagery_urls": [
        {
          "url": "https://www.computerhistory.org/collections/catalog/102630777",
          "host": "www.computerhistory.org",
          "institution": "Computer History Museum, Mountain View, CA",
          "confidence_original": "low"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Palm_Pilot",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia",
          "confidence_original": "high"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Custom lettering – a condensed sans-serif with rounded terminals (e.g., ‘P’ with full closed bowl, ‘a’ with curved top)",
          "foundry": null,
          "year": 1996,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "inferred"
        },
        {
          "name": "Condensed sans-serif – possibly Helvetica Light or Univers 45; no verified match",
          "foundry": null,
          "year": 1996,
          "google_fonts": null,
          "attestation": "unverified"
        },
        {
          "name": "Proprietary bitmap font (9‑point, 12‑pixel cap height at 160 DPI) – sans-serif, low contrast, fixed‑width proportional character grids",
          "foundry": "Palm Computing",
          "year": 1996,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "attested"
        },
        {
          "name": "Condensed sans-serif – likely same or related to system font; not confirmed",
          "foundry": null,
          "year": 1996,
          "google_fonts": null,
          "attestation": "unverified"
        },
        {
          "name": "Univers (condensed)",
          "foundry": null,
          "year": 1996,
          "google_fonts": "Manrope",
          "attestation": "conventional"
        },
        {
          "name": "Helvetica (condensed)",
          "foundry": null,
          "year": 1996,
          "google_fonts": "Inter",
          "attestation": "conventional"
        }
      ],
      "flags": [
        "few_usable_urls",
        "1_robots_disallowed_urls"
      ],
      "honest_gaps": [
        "1. **Colour hex values** – No [attested] hex for case grey, power button green, screen backlight, or packaging blue. All approximations are [inferred] or [unverified]. Resolution requires spectrophotometry of a pristine unit or discovery of an internal colour standard document."
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#BAC0A8",
    "--on-bg": "#000000",
    "--primary": "#000000",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#404040",
    "--on-secondary": "#FFFFFF",
    "--surface": "#BAC0A8",
    "--on-bg-muted": "#1A1A1A",
    "--border": "#404040",
    "--error": "#000000",
    "--font-display": "Space Mono, monospace",
    "--font-body": "Space Mono, monospace",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "--status-bar-bg": "#000000",
    "--status-bar-text": "#FFFFFF",
    "--list-item-border": "#404040",
    "--button-bevel-light": "#BAC0A8",
    "--button-bevel-dark": "#404040",
    "--scrollbar-track": "#BAC0A8",
    "--scrollbar-thumb": "#000000",
    "--metric-cell-bg": "#B4D0B4",
    "--metric-cell-border": "#2E4A2E",
    "--data-table-odd": "#B4D0B4",
    "--data-table-even": "#2E4A2E",
    "--chart-grid": "#2E4A2E",
    "--chart-line": "#000000",
    "warn": "#FF8C42",
    "ok": "#22C55E",
    "err": "#000000",
    "deltaUp": "#22C55E",
    "deltaDown": "#000000",
    "deltaFlat": "#1A1A1A",
    "live": "#000000",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#1A1A1A",
    "chartFont": "Space Grotesk"
  },
  "elevation": {
    "model": "bevel",
    "bevel": {
      "light": "#BAC0A8",
      "dark": "#404040",
      "width": "1px"
    },
    "screenRecess": {
      "shadow": "inset 0 0 0 1px rgba(0,0,0,0.15)"
    }
  },
  "chartStyle": {
    "backgroundColor": "#B4D0B4",
    "gridStroke": "#2E4A2E",
    "gridStrokeDasharray": "2 2",
    "lineStroke": "#000000",
    "lineWidth": 1,
    "labelColor": "#000000",
    "labelFont": "Space Mono, monospace",
    "labelSize": "12px",
    "gridColor": "rgba(128,128,128,0.18)",
    "fontFamily": "Space Mono, monospace"
  },
  "dashboardStyle": {
    "layout": "single-column",
    "density": "sparse to moderate",
    "panelTreatment": "list stack with 8px gutters",
    "dataVizStyle": "monochrome line chart on metric-cell background",
    "signatureElement": "Graffiti zone and hardware button row"
  },
  "landingStyle": {
    "heroApproach": "centered modal dialog with thick border",
    "scrollBehavior": "instantaneous, no scrollbar styling (OS default)",
    "ctaStyle": "beveled primary button",
    "signatureMoment": "backlight flicker animation on load"
  },
  "surfaceModel": "bevel",
  "materialSimulation": {
    "model": "crt-screen",
    "params": {
      "pixelGrid": {
        "enabled": true,
        "type": "css-overlay",
        "color": "rgba(0,0,0,0.12)",
        "pitch": "2px"
      },
      "backlightGlow": {
        "enabled": true,
        "gradient": "radial-gradient(ellipse at center, rgba(198,224,180,0.3) 0%, rgba(107,122,96,0.1) 100%)",
        "position": "absolute",
        "pointerEvents": "none"
      },
      "dithering": {
        "patterns": [
          "checkerboard",
          "line",
          "stipple"
        ],
        "colors": [
          "#000000",
          "#BAC0A8"
        ]
      }
    }
  },
  "globalFilter": null,
  "globalBodyCss": "font-family: var(--font-body); background-color: var(--bg); color: var(--on-bg); image-rendering: pixelated; text-rendering: optimizeSpeed; -webkit-font-smoothing: none; font-smoothing: none;",
  "globalCss": ".ds-layout-frame::after { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 9999; background-image: repeating-linear-gradient(0deg, rgba(0,0,0,0.12) 0px, rgba(0,0,0,0.12) 1px, transparent 1px, transparent 2px); }",
  "interactionModel": {
    "hover": {
      "delta": "none"
    },
    "focus": {
      "outline": "none"
    },
    "active": {
      "delta": "inset-shadow",
      "shadow": "inset 0 0 0 1px rgba(0,0,0,0.3)"
    },
    "transition": {
      "duration": "0ms",
      "easing": "steps(1)"
    }
  },
  "interactionStyles": ".ds-layout-frame ::selection { background: #000000; color: #FFFFFF; } .ds-layout-frame button:active, .ds-layout-frame [role=\"button\"]:active { box-shadow: inset 0 0 0 1px rgba(0,0,0,0.3); } .ds-layout-frame * { -webkit-tap-highlight-color: transparent; }",
  "buttons": [
    {
      "name": "Primary Button",
      "desc": "Main action button with raised bevel effect.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:var(--primary);color:var(--on-primary);border:1px solid var(--primary);padding:10px 18px;font-family:var(--font-body);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;cursor:pointer;box-shadow:0 0 10px var(--primary);\">Primary Button</button>",
      "label": "Primary Button",
      "note": "Main action button with raised bevel effect."
    },
    {
      "name": "Secondary Button",
      "desc": "Outlined button for secondary actions.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:transparent; color:var(--on-bg); border:1px solid var(--border); height:32px; padding:0 8px; font-family:var(--font-body); font-size:12px; text-transform:uppercase; cursor:pointer; outline:none; border-radius:var(--radius-btn);\">CANCEL</button>",
      "label": "Secondary Button",
      "note": "Outlined button for secondary actions."
    },
    {
      "name": "Ghost Button",
      "desc": "Text-only button with no border, used for list items.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:transparent; color:var(--on-bg); border:none; height:28px; padding:0 8px; font-family:var(--font-body); font-size:12px; text-transform:uppercase; cursor:pointer; outline:none; width:100%; text-align:left;\">NEW NOTE</button>",
      "label": "Ghost Button",
      "note": "Text-only button with no border, used for list items."
    }
  ],
  "cards": [
    {
      "name": "Dialog Card",
      "desc": "Modal dialog box with thick border and centered content.",
      "html": "<div style=\"background:var(--bg); color:var(--on-bg); border:2px solid var(--border); padding:12px; max-width:240px; margin:0 auto; font-family:var(--font-body); font-size:14px; border-radius:var(--radius-card);\"><div style=\"margin-bottom:8px; font-weight:600;\">DELETE ITEM?</div><div style=\"margin-bottom:8px;\">Are you sure you want to delete this item?</div><div style=\"display:flex; gap:4px; justify-content:center;\"><button style=\"background:var(--button-bevel-light); color:var(--on-bg); border:1px solid var(--border); padding:0 8px; height:24px; font-family:var(--font-body); font-size:12px; text-transform:uppercase; cursor:pointer; border-radius:var(--radius-btn);\">YES</button><button style=\"background:transparent; color:var(--on-bg); border:1px solid var(--border); padding:0 8px; height:24px; font-family:var(--font-body); font-size:12px; text-transform:uppercase; cursor:pointer; border-radius:var(--radius-btn);\">NO</button></div></div>",
      "label": "Dialog Card",
      "note": "Modal dialog box with thick border and centered content."
    },
    {
      "name": "Metric Card",
      "desc": "A data cell with green-gray background and border.",
      "html": "<div style=\"background:var(--metric-cell-bg); color:var(--on-bg); border:1px solid var(--metric-cell-border); height:32px; padding:0 8px; display:flex; align-items:center; font-family:var(--font-body); font-size:14px; border-radius:var(--radius-default);\">BATTERY: 85%</div>",
      "label": "Metric Card",
      "note": "A data cell with green-gray background and border."
    }
  ],
  "forms": [
    {
      "name": "Text Input",
      "desc": "Single-line text entry field with monospace font.",
      "html": "<div style=\"display:flex; flex-direction:column; gap:4px;\"><label style=\"font-family:var(--font-body); font-size:12px; text-transform:uppercase;\">Name</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" style=\"background:var(--bg); color:var(--on-bg); border:1px solid var(--border); height:24px; padding:0 8px; font-family:var(--font-body); font-size:14px; outline:none; border-radius:var(--radius-default);\" value=\"John Doe\"></div>",
      "label": "Text Input",
      "stateLabel": "Single-line text entry field with monospace font."
    },
    {
      "name": "Select Dropdown",
      "desc": "Dropdown list with monochrome styling.",
      "html": "<div style=\"display:flex; flex-direction:column; gap:4px;\"><label style=\"font-family:var(--font-body); font-size:12px; text-transform:uppercase;\">Category</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:var(--bg); color:var(--on-bg); border:1px solid var(--border); height:24px; padding:0 8px; font-family:var(--font-body); font-size:14px; border-radius:var(--radius-default);\"><option>Personal</option><option>Work</option></select></div>",
      "label": "Select Dropdown",
      "stateLabel": "Dropdown list with monochrome styling."
    },
    {
      "name": "Checkbox",
      "desc": "Square checkbox with no rounded corners.",
      "html": "<div style=\"display:flex; align-items:center; gap:4px;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"appearance:none; -webkit-appearance:none; width:16px; height:16px; border:1px solid var(--border); background:var(--bg); cursor:pointer; margin:0; border-radius:0px; display:inline-flex; align-items:center; justify-content:center;\" checked><label style=\"font-family:var(--font-body); font-size:14px;\">Remember me</label></div>",
      "label": "Checkbox",
      "stateLabel": "Square checkbox with no rounded corners."
    }
  ],
  "extraComponents": [
    {
      "name": "Status Bar",
      "desc": "Top status bar with time and battery.",
      "html": "<div style=\"background:var(--status-bar-bg); color:var(--status-bar-text); height:12px; display:flex; align-items:center; justify-content:space-between; padding:0 8px; font-family:var(--font-body); font-size:10px; text-transform:uppercase; overflow:hidden;\"><span>12:00</span><span>100%</span></div>"
    },
    {
      "name": "Scrollbar",
      "desc": "Vertical scrollbar track and thumb.",
      "html": "<div style=\"width:8px; background:var(--scrollbar-track); display:flex; flex-direction:column; height:100px;\"><div style=\"background:var(--scrollbar-thumb); height:20px; width:8px; margin:4px 0; border-radius:0px;\"></div></div>"
    },
    {
      "name": "Graffiti Zone",
      "desc": "Bottom area for handwritten input separated by dashed line.",
      "html": "<div style=\"height:40px; background:var(--surface); border-top:1px dashed var(--border); display:flex; align-items:center; justify-content:center; font-family:var(--font-body); font-size:12px; text-transform:uppercase; color:var(--on-bg-muted);\">GRAFFITI</div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — PALM PILOT</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — MEMO PAD</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — TIME 12:00</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — Select item to open.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — CATEGORY</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Avoid using any color outside the monochrome green-gray palette.",
      "avoid": {
        "html": "<button style='background: linear-gradient(to right, red, yellow); color: blue; border-radius: 10px;'>Click</button>",
        "label": "Avoid"
      },
      "rule": "Avoid using any color outside the monochrome green-gray palette.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Avoid rounded corners on any component.",
      "avoid": {
        "html": "<div style='border-radius: 8px; background: white; padding: 16px;'>Round card</div>",
        "label": "Avoid"
      },
      "rule": "Avoid rounded corners on any component.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Avoid proportional typefaces and anti-aliased text; use monospace with font-smoothing disabled.",
      "avoid": {
        "html": "<p style='font-family: Helvetica; font-size: 14px; -webkit-font-smoothing: antialiased;'>Smooth text</p>",
        "label": "Avoid"
      },
      "rule": "Avoid proportional typefaces and anti-aliased text; use monospace with font-smoothing disabled.",
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
  "doAvoidStyle": "Avoid all color, rounded corners, smooth animations, overlapping windows, anti-aliased text, and proportional fonts.",
  "effects": [],
  "motion": [],
  "colors": {
    "on-surface": "#000000",
    "inverse-surface": "#000000",
    "inverse-on-surface": "#FFFFFF",
    "thumb-hover": "#000000"
  },
  "typography": {
    "display": {
      "fontFamily": "Space Mono, monospace",
      "fontSize": "24px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "Space Mono, monospace",
      "fontSize": "20px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "Space Mono, monospace",
      "fontSize": "16px",
      "fontWeight": 600,
      "lineHeight": 1,
      "letterSpacing": "0em"
    },
    "body": {
      "fontFamily": "Space Mono, monospace",
      "fontSize": "14px",
      "fontWeight": 400,
      "lineHeight": 1.25,
      "letterSpacing": "0em"
    },
    "label": {
      "fontFamily": "Space Mono, monospace",
      "fontSize": "12px",
      "fontWeight": 500,
      "lineHeight": 1,
      "letterSpacing": "-0.025em",
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
    "component-internal": "8px",
    "section-internal": "8px",
    "page-edge": "8px",
    "gap-component": "4px",
    "gap-section": "8px",
    "height-sm": "24px",
    "height-md": "32px",
    "height-lg": "40px",
    "icon": "20px"
  },
  "layouts": {
    "copy": {
      "heroKicker": "PALM PILOT OS",
      "heroHeadline": "MEMOPAD",
      "heroSub": "Record, tag, and retrieve every thought with zero friction.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">NEW MEMO</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">ARCHIVE SEARCH</button>",
      "navLinks": [
        "INDEX",
        "TAGS",
        "HOTSYNC",
        "BEAM"
      ],
      "features": [
        {
          "title": "QUICK CAPTURE",
          "desc": "Instantly record a memo using Graffiti handwriting. No menu. No delay.",
          "icon": "✍",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">✍ QUICK CAPTURE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Instantly record a memo using Graffiti handwriting. No menu. No delay.</div></div>"
        },
        {
          "title": "TAG SYSTEM",
          "desc": "Attach up to 3 tags per memo. Filter by tag with a single tap.",
          "icon": "🏷",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🏷 TAG SYSTEM</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Attach up to 3 tags per memo. Filter by tag with a single tap.</div></div>"
        },
        {
          "title": "BEAM TRANSFER",
          "desc": "Share memos to another Palm device via infrared. No cables needed.",
          "icon": "📡",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📡 BEAM TRANSFER</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Share memos to another Palm device via infrared. No cables needed.</div></div>"
        },
        {
          "title": "ARCHIVE",
          "desc": "Move old memos to archive. Keeps your index clean and fast.",
          "icon": "📦",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📦 ARCHIVE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Move old memos to archive. Keeps your index clean and fast.</div></div>"
        }
      ],
      "ctaStripHeadline": "START YOUR MEMO INDEX",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">HOTSYNC NOW</button>",
      "sidebarBrand": "MEMOPAD",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "QUICK REFERENCE",
          "active": true
        },
        {
          "icon": "◉",
          "label": "ABOUT",
          "active": false
        }
      ],
      "dashboardTitle": "INDEX",
      "metrics": [
        {
          "label": "ACTIVE",
          "value": "14",
          "delta": "+2",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "ARCHIVED",
          "value": "23",
          "delta": "+5",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "TAGGED",
          "value": "9",
          "delta": "-1",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "SYNCED",
          "value": "0",
          "delta": "0",
          "dir": "flat",
          "direction": "flat"
        }
      ],
      "chartTitle": "MEMO ACTIVITY",
      "panelATitle": "LAST ENTRIES",
      "panelARows": [
        {
          "label": "NOTE: Grocery List",
          "value": "14:32",
          "pct": 14
        },
        {
          "label": "NOTE: Meeting Notes",
          "value": "13:15",
          "pct": 13
        },
        {
          "label": "NOTE: Project Ideas",
          "value": "11:47",
          "pct": 11
        },
        {
          "label": "NOTE: Phone Number",
          "value": "10:03",
          "pct": 10
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "TAG FREQUENCY",
      "panelBCells": [
        {
          "label": "WORK",
          "value": "12",
          "state": "ok"
        },
        {
          "label": "PERSONAL",
          "value": "8",
          "state": "warn"
        },
        {
          "label": "IDEAS",
          "value": "6",
          "state": "err"
        },
        {
          "label": "SHOPPING",
          "value": "4",
          "state": "ok"
        },
        {
          "label": "TRAVEL",
          "value": "3",
          "state": "warn"
        },
        {
          "label": "HEALTH",
          "value": "2",
          "state": "err"
        },
        {
          "label": "FINANCE",
          "value": "2",
          "state": "ok"
        },
        {
          "label": "RECIPES",
          "value": "1",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "MON",
        "TUE",
        "WED",
        "THU",
        "FRI",
        "SAT",
        "SUN"
      ],
      "series": [
        {
          "data": [
            3,
            5,
            2,
            7,
            4,
            1,
            6,
            6,
            6,
            6,
            6,
            6
          ],
          "label": "ADDED",
          "axis": "left",
          "color": "#000000"
        },
        {
          "data": [
            1,
            2,
            0,
            3,
            1,
            0,
            2,
            2,
            2,
            2,
            2,
            2
          ],
          "label": "REVISED",
          "axis": "right-1",
          "color": "#404040"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText='display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:240px;padding:8px;background:var(--bg);color:var(--on-bg);font-family:var(--font-body);'; el.innerHTML='<div style=\"border:2px solid var(--border);padding:12px;max-width:240px;width:100%;background:var(--surface);\"><div style=\"background:var(--status-bar-bg);color:var(--status-bar-text);height:12px;display:flex;align-items:center;justify-content:space-between;padding:0 8px;font-size:10px;text-transform:uppercase;margin-bottom:8px;\"><span>12:00</span><span>100%</span></div><div style=\"font-family:var(--font-display);font-size:20px;font-weight:700;text-transform:uppercase;margin-bottom:8px;\">MEMOPAD</div><div style=\"margin-bottom:8px;font-size:14px;\">Select item to open.</div><div style=\"display:flex;gap:4px;justify-content:center;\"><button style=\"background:var(--button-bevel-light);color:var(--on-bg);border:1px solid var(--border);border-top-color:var(--button-bevel-light);border-left-color:var(--button-bevel-light);border-bottom-color:var(--button-bevel-dark);border-right-color:var(--button-bevel-dark);height:24px;padding:0 8px;font-family:var(--font-body);font-size:12px;text-transform:uppercase;cursor:pointer;\">NEW</button><button style=\"background:transparent;color:var(--on-bg);border:1px solid var(--border);height:24px;padding:0 8px;font-family:var(--font-body);font-size:12px;text-transform:uppercase;cursor:pointer;\">SEARCH</button></div></div>'; }",
    "showcaseRender": "function(el) { el.style.cssText='display:flex;flex-direction:column;gap:8px;padding:8px;font-family:var(--font-body);'; el.innerHTML='<div style=\"border:1px solid var(--border);padding:8px;background:var(--surface);\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;\">QUICK CAPTURE</div><div style=\"font-size:12px;margin-top:4px;\">Instantly record a memo using Graffiti handwriting.</div></div><div style=\"border:1px solid var(--border);padding:8px;background:var(--surface);\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;\">TAG SYSTEM</div><div style=\"font-size:12px;margin-top:4px;\">Attach up to 3 tags per memo.</div></div><div style=\"border:1px solid var(--border);padding:8px;background:var(--surface);\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;\">BEAM TRANSFER</div><div style=\"font-size:12px;margin-top:4px;\">Share memos via infrared.</div></div>'; }",
    "panelCRender": "function(el) { el.style.cssText='padding:8px;font-family:var(--font-body);background:var(--surface);border:1px solid var(--border);'; el.innerHTML='<div style=\"font-family:var(--font-display);font-size:14px;font-weight:700;text-transform:uppercase;margin-bottom:8px;\">TAG FREQUENCY</div><div style=\"display:flex;flex-direction:column;gap:4px;\"><div style=\"display:flex;justify-content:space-between;background:var(--metric-cell-bg);border:1px solid var(--metric-cell-border);height:24px;padding:0 8px;align-items:center;font-size:12px;\"><span>WORK</span><span>12</span></div><div style=\"display:flex;justify-content:space-between;background:var(--metric-cell-bg);border:1px solid var(--metric-cell-border);height:24px;padding:0 8px;align-items:center;font-size:12px;\"><span>PERSONAL</span><span>8</span></div><div style=\"display:flex;justify-content:space-between;background:var(--metric-cell-bg);border:1px solid var(--metric-cell-border);height:24px;padding:0 8px;align-items:center;font-size:12px;\"><span>IDEAS</span><span>6</span></div><div style=\"display:flex;justify-content:space-between;background:var(--metric-cell-bg);border:1px solid var(--metric-cell-border);height:24px;padding:0 8px;align-items:center;font-size:12px;\"><span>SHOPPING</span><span>4</span></div></div>'; }",
    "heroBackground": "function(el) { el.style.background='var(--bg)'; var glow=document.createElement('div'); glow.style.cssText='position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at center, rgba(198,224,180,0.3) 0%, rgba(107,122,96,0.1) 100%);'; el.appendChild(glow); }",
    "ctaBackground": "function(el) { el.style.background='var(--bg)'; var glow=document.createElement('div'); glow.style.cssText='position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at center, rgba(198,224,180,0.3) 0%, rgba(107,122,96,0.1) 100%);'; el.appendChild(glow); }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText='height:1px;background:var(--border);margin:8px 0;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background='var(--bg)'; }",
    "surfaceOverlay": "function(el) { var ov=document.createElement('div'); ov.style.cssText='position:absolute;inset:0;pointer-events:none;z-index:2;background:radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.05) 100%);'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(el,tick) { var c='var(--primary)'; el.style.cssText='position:absolute;inset:0;pointer-events:none;z-index:0;'; var grid=''; for(var i=0;i<5;i++) { for(var j=0;j<5;j++) { var visible=((i+j+tick)%3===0)?c:'transparent'; grid+='<div style=\"position:absolute;width:2px;height:2px;top:'+(i*10)+'px;left:'+(j*10)+'px;background:'+visible+';}\"></div>'; } } el.innerHTML=grid; }",
  "shadcnTokens": {
    "--color-background": "#BAC0A8",
    "--color-popover": "#BAC0A8",
    "--color-foreground": "#000000",
    "--color-card-foreground": "#000000",
    "--color-popover-foreground": "#000000",
    "--color-card": "#BAC0A8",
    "--color-muted": "#BAC0A8",
    "--color-muted-foreground": "#1A1A1A",
    "--color-primary": "#000000",
    "--color-ring": "#000000",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#404040",
    "--color-accent": "#404040",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
    "--color-border": "#404040",
    "--color-input": "#404040",
    "--color-destructive": "#000000"
  },
  "shadcnTokensClassic": {
    "--background": "#BAC0A8",
    "--popover": "#BAC0A8",
    "--foreground": "#000000",
    "--card-foreground": "#000000",
    "--popover-foreground": "#000000",
    "--card": "#BAC0A8",
    "--muted": "#BAC0A8",
    "--muted-foreground": "#1A1A1A",
    "--primary": "#000000",
    "--ring": "#000000",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#404040",
    "--accent": "#404040",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#404040",
    "--input": "#404040",
    "--destructive": "#000000"
  }
});
