registerSystem({
  "meta": {
    "name": "Paul Rand",
    "tagline": "Mid-century modernist geometric design language",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Jost:wght@400;700;900&display=swap"
  },
  "yamlTokens": {
    "name": "Paul Rand",
    "colors": {
      "primary": "#E31E24",
      "on-primary": "#FFFFFF",
      "secondary": "#003399",
      "on-secondary": "#FFFFFF",
      "tertiary": "#FFC72C",
      "on-tertiary": "#000000",
      "neutral": "#000000",
      "on-surface": "#000000",
      "surface": "#FFFFFF",
      "surface-container": "#F5F0E8",
      "outline": "#000000"
    },
    "typography": {
      "display": {
        "fontFamily": "Jost",
        "fontSize": "60px",
        "fontWeight": 900,
        "lineHeight": 1.25,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Jost",
        "fontSize": "36px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Jost",
        "fontSize": "24px",
        "fontWeight": 700,
        "lineHeight": 1.375,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Jost",
        "fontSize": "16px",
        "fontWeight": 700,
        "lineHeight": 1.625,
        "letterSpacing": "0em",
        "textTransform": "lowercase"
      },
      "label": {
        "fontFamily": "Jost",
        "fontSize": "14px",
        "fontWeight": 700,
        "lineHeight": 1,
        "letterSpacing": "0.025em",
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
      "component-internal": "16px",
      "section-internal": "32px",
      "page-edge": "32px",
      "gap-component": "16px",
      "gap-section": "48px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "#E31E24",
        "textColor": "#FFFFFF",
        "rounded": "{rounded.button}",
        "padding": "16px"
      },
      "button-primary-hover": {
        "backgroundColor": "#E31E24",
        "textColor": "#FFFFFF",
        "rounded": "{rounded.button}",
        "padding": "16px"
      },
      "button-secondary": {
        "backgroundColor": "#003399",
        "textColor": "#FFFFFF",
        "rounded": "{rounded.button}",
        "padding": "16px"
      },
      "card": {
        "backgroundColor": "#FFFFFF",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "card-warm": {
        "backgroundColor": "#F5F0E8",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "input": {
        "backgroundColor": "#FFFFFF",
        "textColor": "#000000",
        "rounded": "{rounded.input}",
        "padding": "16px"
      },
      "input-focus": {
        "backgroundColor": "#FFFFFF",
        "textColor": "#000000",
        "rounded": "{rounded.input}",
        "padding": "16px"
      },
      "geometric-face-avatar": {
        "backgroundColor": "#E31E24",
        "size": "48px"
      },
      "tooltip-triangle": {
        "backgroundColor": "#FFC72C",
        "size": "24px"
      }
    },
    "version": "alpha",
    "description": "A mid-century modernist design language marrying stringent geometric reduction with playful wit — flat spot-colors on matte paper, asymmetric compositions with 40% negative space, bold all-caps geometric sans-serif, and cut-paper collage textures.",
    "provenance": {
      "coverage_status": "sparse",
      "identity_description": "Paul Rand (1914–1996), American graphic designer, one of the most influential figures in 20th-century modernist design. This record captures his personal visual identity (letterhead, monogram, signature) and the defining corpus of his corporate logo work: IBM, UPS, ABC, Westinghouse, and others. The slug is unambiguous within design-historical discourse; the majority of providers adopt this broade",
      "manual_enrichment_required": false,
      "imagery_count": 3,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "collection.cooperhewitt.org",
          "count": 2
        },
        {
          "host": "en.wikipedia.org",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://en.wikipedia.org/wiki/Paul_Rand",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia",
          "confidence_original": "high"
        },
        {
          "url": "https://collection.cooperhewitt.org/search/?q=paul+rand",
          "host": "collection.cooperhewitt.org",
          "institution": "Cooper Hewitt, Smithsonian Design Museum",
          "confidence_original": "low"
        },
        {
          "url": "https://collection.cooperhewitt.org/objects/18746897",
          "host": "collection.cooperhewitt.org",
          "institution": "Cooper Hewitt",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": [
        {
          "name": "City Medium",
          "foundry": null,
          "year": 1930,
          "google_fonts": "Roboto Slab",
          "attestation": "attested"
        },
        {
          "name": "custom UPS logotype",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "attested"
        },
        {
          "name": "custom ABC logotype",
          "foundry": null,
          "year": 1962,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "conventional"
        },
        {
          "name": "custom PR monogram",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "attested"
        },
        {
          "name": "Bodoni Book",
          "foundry": null,
          "year": null,
          "google_fonts": "Playfair Display",
          "attestation": "attested"
        },
        {
          "name": "Futura",
          "foundry": null,
          "year": null,
          "google_fonts": "Jost",
          "attestation": "attested"
        },
        {
          "name": "Helvetica",
          "foundry": null,
          "year": null,
          "google_fonts": "Inter",
          "attestation": "attested"
        },
        {
          "name": "Helvetica",
          "foundry": null,
          "year": null,
          "google_fonts": "Inter",
          "attestation": "conventional"
        },
        {
          "name": "Univers",
          "foundry": null,
          "year": null,
          "google_fonts": "Manrope",
          "attestation": "conventional"
        }
      ],
      "flags": [
        "sparse_imagery"
      ],
      "honest_gaps": [
        {
          "\"1. **CONTESTED": "§2.primary_colour** — No verified hex/Pantone/CMYK for IBM blue.\""
        }
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#FFFFFF",
    "--on-bg": "#000000",
    "--primary": "#E31E24",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#003399",
    "--on-secondary": "#FFFFFF",
    "--surface": "#FFFFFF",
    "--on-bg-muted": "#1A1A1A",
    "--border": "#000000",
    "--error": "#E31E24",
    "--font-display": "Jost",
    "--font-body": "Jost",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "success": "#003399",
    "warning": "#FFC72C",
    "error": "#E31E24",
    "info": "#003399",
    "err": "#E31E24",
    "ok": "#003399",
    "warn": "#FFC72C",
    "deltaUp": "#003399",
    "deltaDown": "#E31E24",
    "deltaFlat": "#1A1A1A",
    "live": "#E31E24",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#1A1A1A",
    "chartFont": "Jost"
  },
  "elevation": {
    "flat": true,
    "cutPaperOffset": "4px"
  },
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "paper",
    "params": {
      "grainOpacity": 0.08,
      "paperType": "matte"
    }
  },
  "interactionModel": {
    "hover": {
      "transform": "scale(1.05)"
    },
    "active": {
      "transform": "scale(0.95)"
    },
    "focus": {
      "outline": "4px solid var(--border)",
      "outlineOffset": "2px"
    }
  },
  "interactionStyles": ".ds-layout-frame a, .ds-layout-frame button, .ds-layout-frame input, .ds-layout-frame select, .ds-layout-frame textarea, .ds-layout-frame .card { transition: transform 100ms linear, box-shadow 100ms linear, background-color 100ms linear, color 100ms linear, border 100ms linear, outline 100ms linear; } .ds-layout-frame button:hover { transform: scale(1.05); box-shadow: 4px 4px 0 0 var(--border); } .ds-layout-frame button:active { transform: scale(0.95); } .ds-layout-frame input:focus, .ds-layout-frame textarea:focus { outline: 4px solid var(--border); outline-offset: 2px; } .ds-layout-frame button:focus-visible, .ds-layout-frame a:focus-visible { outline: 4px solid var(--border); outline-offset: 2px; }",
  "chartStyle": {
    "type": "geometric-blocks",
    "barStyle": "solid fill with 4px black border",
    "labelStyle": "uppercase, bold, font-display, 14px",
    "valueStyle": "24px, display font, white on primary background, uppercase",
    "grid": "asymmetric",
    "background": "white with paper grain",
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#1A1A1A",
    "fontFamily": "Jost"
  },
  "dashboardStyle": {
    "layout": "asymmetric grid with large negative space, primary content left-aligned, secondary panel top-right",
    "density": "low — at least 40% empty space",
    "panelTreatment": "flat with thick black borders, cut-paper offset shadow on active panels",
    "dataVizStyle": "geometric bars with solid fill and black outline, no axis labels, only bold values in display font",
    "signatureElement": "a red circle (200px) offset to the upper right as a decorative anchor"
  },
  "landingStyle": {
    "heroApproach": "single bold headline (display font, 60px, uppercase) in lower-left, contrasting geometric shape in upper-right, 50% white space",
    "scrollBehavior": "snap-to-section with hard cut transitions, no parallax or fade",
    "ctaStyle": "primary red button with cut-paper shadow, placed asymmetrically below headline",
    "signatureMoment": "a collage of overlapping colored rectangles that assemble on load, with a visual pun (e.g., an eye icon made from a circle and dot)"
  },
  "globalFilter": "<svg xmlns='http://www.w3.org/2000/svg'><defs><filter id='rand-paper-grain' x='0' y='0' width='100%' height='100%'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/><feComponentTransfer><feFuncA type='linear' slope='0.08'/></feComponentTransfer></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-body); background: var(--bg); color: var(--on-bg); margin: 0; padding: 0; overflow-x: hidden;",
  "globalCss": ".ds-layout-frame .card, .ds-layout-frame button, .ds-layout-frame .cut-paper { box-shadow: 4px 4px 0 0 var(--border); border: 2px solid var(--border); border-radius: var(--radius-default); } .ds-layout-frame input, .ds-layout-frame textarea { border: 2px solid var(--border); background: var(--surface); color: var(--on-surface); border-radius: var(--radius-default); } .ds-layout-frame .geometric-face-avatar { border: 2px solid var(--border); } .ds-layout-frame *:focus { outline: 4px solid var(--border); outline-offset: 2px; }",
  "buttons": [
    {
      "name": "Primary Button",
      "desc": "Bold red button with cut-paper offset shadow, no rounded corners.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--primary); color: var(--on-primary); border: 4px solid var(--border); padding: 16px; font-family: var(--font-display); font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.025em; border-radius: var(--radius-btn); cursor: pointer; position: relative;\">\n  act now\n  <span style=\"position: absolute; top: 4px; left: 4px; width: 100%; height: 100%; background: var(--border); z-index: -1;\"></span>\n</button>",
      "label": "Primary Button",
      "note": "Bold red button with cut-paper offset shadow, no rounded corners."
    },
    {
      "name": "Secondary Button",
      "desc": "Blue button with hard offset shadow for depth.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--secondary-col); color: var(--on-secondary); border: 4px solid var(--border); padding: 16px; font-family: var(--font-display); font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.025em; border-radius: var(--radius-btn); cursor: pointer; position: relative;\">\n  learn more\n  <span style=\"position: absolute; top: 4px; left: 4px; width: 100%; height: 100%; background: var(--border); z-index: -1;\"></span>\n</button>",
      "label": "Secondary Button",
      "note": "Blue button with hard offset shadow for depth."
    },
    {
      "name": "Ghost Outline Button",
      "desc": "Transparent button with black outline, matching the flat aesthetic.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; color: var(--on-bg); border: 4px solid var(--border); padding: 16px; font-family: var(--font-display); font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.025em; border-radius: var(--radius-btn); cursor: pointer; position: relative;\">\n  cancel\n  <span style=\"position: absolute; top: 4px; left: 4px; width: 100%; height: 100%; background: var(--border); opacity: 0.15; z-index: -1;\"></span>\n</button>",
      "label": "Ghost Outline Button",
      "note": "Transparent button with black outline, matching the flat aesthetic."
    }
  ],
  "cards": [
    {
      "name": "White Card",
      "desc": "White card with hard black bounding box and cut-paper shadow, no radius.",
      "html": "<div style=\"background: var(--surface); border: 4px solid var(--border); padding: 24px; border-radius: var(--radius-card); position: relative; font-family: var(--font-body); color: var(--on-bg);\">\n  <span style=\"position: absolute; top: 8px; left: 8px; width: 100%; height: 100%; background: var(--border); z-index: -1;\"></span>\n  <p style=\"margin: 0; font-size: 16px; text-transform: lowercase;\">card content with offset shadow</p>\n</div>",
      "label": "White Card",
      "note": "White card with hard black bounding box and cut-paper shadow, no radius."
    },
    {
      "name": "Warm Card",
      "desc": "Warm surface-container card with cut-paper edge and contrasting black border.",
      "html": "<div style=\"background: var(--bg-muted); border: 4px solid var(--border); padding: 24px; border-radius: var(--radius-card); position: relative; font-family: var(--font-body); color: var(--on-bg);\">\n  <span style=\"position: absolute; top: 8px; left: 8px; width: 100%; height: 100%; background: var(--border); z-index: -1;\"></span>\n  <p style=\"margin: 0; font-size: 16px; text-transform: lowercase;\">warm card with collage shadow</p>\n</div>",
      "label": "Warm Card",
      "note": "Warm surface-container card with cut-paper edge and contrasting black border."
    }
  ],
  "forms": [
    {
      "name": "Text Input",
      "desc": "Flat input with black border, no radius, bold lowercase placeholder.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 8px;\">\n  <label style=\"font-family: var(--font-display); font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.025em;\">name</label>\n  <input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" placeholder=\"your name\" style=\"background: var(--surface); color: var(--on-bg); border: 4px solid var(--border); padding: 16px; font-family: var(--font-body); font-size: 16px; font-weight: 700; text-transform: lowercase; border-radius: var(--radius-input); outline: none;\">\n</div>",
      "label": "Text Input",
      "stateLabel": "Flat input with black border, no radius, bold lowercase placeholder."
    },
    {
      "name": "Select Dropdown",
      "desc": "Flat select element with custom arrow replaced by geometric triangle.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 8px;\">\n  <label style=\"font-family: var(--font-display); font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.025em;\">choose</label>\n  <div style=\"position: relative;\">\n    <select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--surface); color: var(--on-bg); border: 4px solid var(--border); padding: 16px; font-family: var(--font-body); font-size: 16px; font-weight: 700; text-transform: lowercase; border-radius: var(--radius-input); appearance: none; width: 100%;\">\n      <option>option one</option>\n      <option>option two</option>\n    </select>\n    <span style=\"position: absolute; top: 50%; right: 16px; transform: translateY(-50%); width: 0; height: 0; border-left: 8px solid transparent; border-right: 8px solid transparent; border-top: 12px solid var(--border); pointer-events: none;\"></span>\n  </div>\n</div>",
      "label": "Select Dropdown",
      "stateLabel": "Flat select element with custom arrow replaced by geometric triangle."
    },
    {
      "name": "Checkbox",
      "desc": "Square checkbox with red fill and bold black outline, no rounding.",
      "html": "<div style=\"display: flex; align-items: center; gap: 12px;\">\n  <input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" id=\"chk-4b82\" style=\"width: 24px; height: 24px; border: 4px solid var(--border); background: var(--surface); accent-color: var(--primary); border-radius: 0px;\">\n  <label for=\"chk-4b82\" style=\"font-family: var(--font-body); font-size: 16px; font-weight: 700; text-transform: lowercase;\">agree to terms</label>\n</div>",
      "label": "Checkbox",
      "stateLabel": "Square checkbox with red fill and bold black outline, no rounding."
    }
  ],
  "extraComponents": [
    {
      "name": "Geometric Face Avatar",
      "desc": "Minimal face constructed from geometric shapes: circle, semicircle, dots, using primary red and black.",
      "html": "<div style=\"width: 48px; height: 48px; background: var(--primary); border: 4px solid var(--border); position: relative; border-radius: 0;\">\n  <span style=\"position: absolute; top: 12px; left: 10px; width: 8px; height: 8px; background: var(--on-primary); border-radius: 50%;\"></span>\n  <span style=\"position: absolute; top: 12px; right: 10px; width: 8px; height: 8px; background: var(--on-primary); border-radius: 50%;\"></span>\n  <span style=\"position: absolute; bottom: 12px; left: 50%; transform: translateX(-50%); width: 16px; height: 8px; border-bottom: 4px solid var(--on-primary); border-radius: 0;\"></span>\n</div>"
    },
    {
      "name": "Cut-Paper Collage Element",
      "desc": "Overlapping rectangles in primary colors with offset black shadow, simulating cut paper.",
      "html": "<div style=\"position: relative; width: 120px; height: 80px;\">\n  <div style=\"position: absolute; top: 0; left: 0; width: 80px; height: 60px; background: var(--primary); border: 4px solid var(--border);\"></div>\n  <div style=\"position: absolute; top: 8px; left: 8px; width: 80px; height: 60px; background: var(--secondary-col); border: 4px solid var(--border); z-index: -1;\"></div>\n  <div style=\"position: absolute; top: 16px; left: 16px; width: 80px; height: 60px; background: var(--tertiary-col, #FFC72C); border: 4px solid var(--border); z-index: -2;\"></div>\n  <span style=\"position: absolute; top: 24px; left: 24px; width: 80px; height: 60px; background: var(--border); z-index: -3;\"></span>\n</div>"
    },
    {
      "name": "Tooltip Triangle",
      "desc": "Yellow triangle pointing up, used as a directional indicator.",
      "html": "<div style=\"width: 0; height: 0; border-left: 12px solid transparent; border-right: 12px solid transparent; border-bottom: 24px solid var(--tertiary-col, #FFC72C);\"></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — PAUL RAND</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — GEOMETRY IN DESIGN</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — IBM LOGO REDESIGN</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — modernist principles applied to brand identity</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — THE KERNING IS DELIBERATE</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Rounded corners on any element — contradicts the sharp geometric mandate.",
      "avoid": {
        "html": "<button style=\"background: var(--primary); color: var(--on-primary); border: 2px solid var(--border); border-radius: 8px; padding: 12px 24px;\">click</button>",
        "label": "Avoid"
      },
      "rule": "Rounded corners on any element — contradicts the sharp geometric mandate.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Gradient backgrounds or soft shadows — violates flat spot-color rule.",
      "avoid": {
        "html": "<div style=\"background: linear-gradient(135deg, var(--primary), var(--secondary-col)); border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); padding: 20px;\">card</div>",
        "label": "Avoid"
      },
      "rule": "Gradient backgrounds or soft shadows — violates flat spot-color rule.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Thin or mixed-case typography — must be bold and deliberate case.",
      "avoid": {
        "html": "<p style=\"font-family: var(--font-body); font-weight: 400; text-transform: none; font-size: 16px;\">this is wrong</p>",
        "label": "Avoid"
      },
      "rule": "Thin or mixed-case typography — must be bold and deliberate case.",
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
  "doAvoidStyle": {
    "desc": "Do not use symmetrical layouts, smooth animations, or any rounded corners.",
    "badPatterns": [
      "centered hero with equal sides",
      "soft hover effects",
      "pastel or desaturated colors",
      "3D transforms or perspective"
    ]
  },
  "effects": [],
  "motion": [],
  "colors": {
    "primary": "#E31E24",
    "on-primary": "#FFFFFF",
    "secondary": "#003399",
    "on-secondary": "#FFFFFF",
    "tertiary": "#FFC72C",
    "on-tertiary": "#000000",
    "neutral": "#000000",
    "on-surface": "#000000",
    "surface": "#FFFFFF",
    "surface-container": "#F5F0E8",
    "outline": "#000000"
  },
  "typography": {
    "display": {
      "fontFamily": "Jost",
      "fontSize": "60px",
      "fontWeight": 900,
      "lineHeight": 1.25,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "Jost",
      "fontSize": "36px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "Jost",
      "fontSize": "24px",
      "fontWeight": 700,
      "lineHeight": 1.375,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "Jost",
      "fontSize": "16px",
      "fontWeight": 700,
      "lineHeight": 1.625,
      "letterSpacing": "0em",
      "textTransform": "lowercase"
    },
    "label": {
      "fontFamily": "Jost",
      "fontSize": "14px",
      "fontWeight": 700,
      "lineHeight": 1,
      "letterSpacing": "0.025em",
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
    "component-internal": "16px",
    "section-internal": "32px",
    "page-edge": "32px",
    "gap-component": "16px",
    "gap-section": "48px"
  },
  "layouts": {
    "copy": {
      "heroKicker": "PRESS & PLAY",
      "heroHeadline": "BUILD YOUR MARK",
      "heroSub": "asymmetric monograms with cut-paper texture and offset shadows",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#E31E24;color:#FFF;border:2px solid #000;padding:16px;font-family:Jost;font-weight:700;text-transform:uppercase;font-size:16px;\">START SHAPING</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#003399;color:#FFF;border:2px solid #000;padding:16px;font-family:Jost;font-weight:700;text-transform:uppercase;font-size:16px;\">VIEW COLLECTION</button>",
      "navLinks": [
        "SHAPES",
        "PALETTE",
        "COLLAGE",
        "PRINTS"
      ],
      "features": [
        {
          "title": "GEOMETRIC FACE AVATAR",
          "desc": "assemble a playful identity from circles, squares, and triangles in primary red or blue",
          "icon": "🔴",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔴 GEOMETRIC FACE AVATAR</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">assemble a playful identity from circles, squares, and triangles in primary red or blue</div></div>"
        },
        {
          "title": "CUT-PAPER COLLAGE ELEMENT",
          "desc": "layer flat shapes with a hard offset shadow — black, no blur, shifted 4px down-right",
          "icon": "🔵",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔵 CUT-PAPER COLLAGE ELEMENT</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">layer flat shapes with a hard offset shadow — black, no blur, shifted 4px down-right</div></div>"
        },
        {
          "title": "SPOT COLOR MIXER",
          "desc": "restricted palette: primary red, secondary blue, tertiary yellow, and black outlines — no pastels or browns",
          "icon": "🟡",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🟡 SPOT COLOR MIXER</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">restricted palette: ibm red, ups brown, abc yellow, westinghouse blue — no pastels</div></div>"
        },
        {
          "title": "ASYMMETRIC ALIGNMENT",
          "desc": "anchor compositions diagonally with at least 40% negative white space",
          "icon": "⬛",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⬛ ASYMMETRIC ALIGNMENT</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">anchor compositions diagonally with at least 40% negative white space</div></div>"
        }
      ],
      "ctaStripHeadline": "READY TO CUT AND PASTE?",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||'';this.dataset.guxBoxShadow=this.style.boxShadow||'';this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+' ':'')+'brightness(1.12)';this.style.boxShadow='4px 4px 0 0 var(--border)'\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||'';this.style.boxShadow=this.dataset.guxBoxShadow||''\" style=\"background:#FFC72C;color:#000;border:4px solid #000;padding:16px;font-family:Jost;font-weight:700;text-transform:uppercase;font-size:16px;\">MAKE A MONOGRAM</button>",
      "sidebarBrand": "RAND KIT",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "LIBRARY",
          "active": true
        },
        {
          "icon": "◉",
          "label": "WORKSPACE",
          "active": false
        }
      ],
      "dashboardTitle": "ACTIVE PROJECT",
      "metrics": [
        {
          "label": "SHAPES LOCKED",
          "value": "12",
          "delta": "+3",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "COLORS USED",
          "value": "4",
          "delta": "0",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "COLLAGE LAYERS",
          "value": "6",
          "delta": "+2",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "OFFSET SHADOWS",
          "value": "5",
          "delta": "-1",
          "dir": "down",
          "direction": "down"
        }
      ],
      "chartTitle": "SHAPE FREQUENCY",
      "panelATitle": "CURRENT SELECTION",
      "panelARows": [
        {
          "label": "SHAPE TYPE",
          "value": "CIRCLE",
          "pct": 0
        },
        {
          "label": "COLOR",
          "value": "#E31E24",
          "pct": 31
        },
        {
          "label": "SIZE",
          "value": "200PX",
          "pct": 100
        },
        {
          "label": "SHADOW OFFSET",
          "value": "4PX",
          "pct": 4
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "ASSET LIBRARY",
      "panelBCells": [
        {
          "label": "IBM RED",
          "value": "CIRCLE",
          "state": "ok"
        },
        {
          "label": "UPS BROWN",
          "value": "SHIELD",
          "state": "warn"
        },
        {
          "label": "ABC YELLOW",
          "value": "ELLIPSE",
          "state": "err"
        },
        {
          "label": "WESTINGHOUSE BLUE",
          "value": "SQUARE",
          "state": "ok"
        },
        {
          "label": "CUSTOM MONOGRAM",
          "value": "OVERLAP",
          "state": "warn"
        },
        {
          "label": "GEOMETRIC FACE",
          "value": "AVATAR",
          "state": "err"
        },
        {
          "label": "TOOLTIP TRIANGLE",
          "value": "24PX",
          "state": "ok"
        },
        {
          "label": "CUT-PAPER EYE",
          "value": "PUN",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "CIRCLE",
        "SQUARE",
        "TRIANGLE",
        "RECTANGLE",
        "POLYGON",
        "ARC"
      ],
      "series": [
        {
          "data": [
            8,
            5,
            6,
            3,
            2,
            4,
            4,
            4,
            4,
            4,
            4,
            4
          ],
          "label": "USED",
          "axis": "left",
          "color": "#E31E24"
        },
        {
          "data": [
            12,
            10,
            8,
            6,
            5,
            7,
            7,
            7,
            7,
            7,
            7,
            7
          ],
          "label": "AVAILABLE",
          "axis": "right-1",
          "color": "#003399"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'min-height:100vh;background:#FFFFFF;position:relative;overflow:hidden;padding:48px;'; var headline = document.createElement('div'); headline.style.cssText = 'position:absolute;bottom:48px;left:48px;font-family:var(--font-display);font-size:60px;font-weight:900;text-transform:uppercase;letter-spacing:-0.025em;line-height:1.25;color:var(--on-bg);max-width:600px;'; headline.innerText = 'BUILD YOUR MARK'; el.appendChild(headline); var circle = document.createElement('div'); circle.style.cssText = 'position:absolute;top:48px;right:48px;width:200px;height:200px;background:var(--primary);border:4px solid var(--border);border-radius:50%;'; el.appendChild(circle); var sub = document.createElement('p'); sub.style.cssText = 'position:absolute;bottom:48px;left:48px;margin-top:120px;font-family:var(--font-body);font-size:16px;font-weight:700;text-transform:lowercase;color:var(--on-bg-muted);max-width:400px;'; sub.innerText = 'asymmetric monograms with cut-paper texture and offset shadows'; el.appendChild(sub); }",
    "showcaseRender": "function(el) { el.style.cssText = 'display:flex;flex-wrap:wrap;gap:24px;padding:48px;background:#FFFFFF;justify-content:flex-start;'; var features = ['SHAPES','PALETTE','COLLAGE','PRINTS']; var colors = ['var(--primary)','var(--secondary-col)','var(--tertiary-col)','var(--border)']; for (var i = 0; i < features.length; i++) { var card = document.createElement('div'); card.style.cssText = 'width:220px;border:4px solid var(--border);background:#FFFFFF;padding:24px;position:relative;'; var shadow = document.createElement('div'); shadow.style.cssText = 'position:absolute;top:8px;left:8px;width:100%;height:100%;background:var(--border);z-index:-1;'; card.appendChild(shadow); var icon = document.createElement('div'); icon.style.cssText = 'width:48px;height:48px;background:' + colors[i] + ';border:4px solid var(--border);margin-bottom:16px;'; card.appendChild(icon); var title = document.createElement('h3'); title.style.cssText = 'font-family:var(--font-display);font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.025em;color:var(--on-bg);margin:0 0 8px;'; title.innerText = features[i]; card.appendChild(title); var desc = document.createElement('p'); desc.style.cssText = 'font-family:var(--font-body);font-size:12px;font-weight:700;text-transform:lowercase;color:var(--on-bg-muted);margin:0;'; desc.innerText = 'explore ' + features[i].toLowerCase() + ' with geometric precision'; card.appendChild(desc); el.appendChild(card); } }",
    "panelCRender": "function(el) { el.style.cssText = 'background:#FFFFFF;border:4px solid var(--border);padding:16px;font-family:var(--font-body);'; var title = document.createElement('h4'); title.style.cssText = 'font-family:var(--font-display);font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.025em;color:var(--primary);margin:0 0 12px;'; title.innerText = 'ASSET LIBRARY'; el.appendChild(title); var items = ['IBM RED - CIRCLE','UPS BROWN - SHIELD','ABC YELLOW - ELLIPSE','WESTINGHOUSE BLUE - SQUARE']; for (var i = 0; i < items.length; i++) { var row = document.createElement('div'); row.style.cssText = 'border-bottom:2px solid var(--border);padding:8px 0;display:flex;justify-content:space-between;font-size:12px;text-transform:uppercase;'; row.innerText = items[i]; el.appendChild(row); } }",
    "heroBackground": "function(el) { el.style.background = '#FFFFFF'; }",
    "ctaBackground": "function(el) { el.style.background = '#F5F0E8'; }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'height:4px;background:var(--border);margin:48px 0;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = '#FFFFFF'; }",
    "surfaceOverlay": "function(el) { var grain = document.createElement('div'); grain.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;filter:url(#rand-paper-grain);mix-blend-mode:multiply;opacity:0.08;'; el.appendChild(grain); }"
  },
  "ambientCanvas": "function(tick) { var c = document.createElement('canvas'); c.width = 300; c.height = 300; c.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:0;pointer-events:none;'; var ctx = c.getContext('2d'); ctx.fillStyle = '#FFFFFF'; ctx.fillRect(0,0,300,300); var offset = (tick % 20) * 2; ctx.fillStyle = '#E31E24'; ctx.fillRect(40 + offset, 60, 120, 80); ctx.fillStyle = '#003399'; ctx.fillRect(80, 40, 80, 120); ctx.strokeStyle = '#000000'; ctx.lineWidth = 4; ctx.strokeRect(40 + offset, 60, 120, 80); ctx.strokeRect(80, 40, 80, 120); ctx.fillStyle = '#000000'; ctx.fillRect(44 + offset, 64, 112, 72); return c; }",
  "scrollRevealMode": "hard-cut",
  "shadcnTokens": {
    "--color-background": "#FFFFFF",
    "--color-popover": "#FFFFFF",
    "--color-foreground": "#000000",
    "--color-card-foreground": "#000000",
    "--color-popover-foreground": "#000000",
    "--color-card": "#FFFFFF",
    "--color-muted": "#FFFFFF",
    "--color-muted-foreground": "#1A1A1A",
    "--color-primary": "#E31E24",
    "--color-ring": "#E31E24",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#003399",
    "--color-accent": "#003399",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
    "--color-border": "#000000",
    "--color-input": "#000000",
    "--color-destructive": "#E31E24"
  },
  "shadcnTokensClassic": {
    "--background": "#FFFFFF",
    "--popover": "#FFFFFF",
    "--foreground": "#000000",
    "--card-foreground": "#000000",
    "--popover-foreground": "#000000",
    "--card": "#FFFFFF",
    "--muted": "#FFFFFF",
    "--muted-foreground": "#1A1A1A",
    "--primary": "#E31E24",
    "--ring": "#E31E24",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#003399",
    "--accent": "#003399",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#E31E24"
  }
});
