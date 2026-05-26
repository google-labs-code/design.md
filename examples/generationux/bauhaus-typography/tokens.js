registerSystem({
  "meta": {
    "name": "Bauhaus Typography (Synthesis)",
    "tagline": "A geometric, asymmetrical UI system translating the machine‑age Bauhaus spirit",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Jost:wght@300;400;700;800&display=swap"
  },
  "yamlTokens": {
    "name": "Bauhaus Typography (Synthesis)",
    "colors": {
      "neutral": "#000000",
      "on-surface": "#FFFFFF",
      "surface": "#FFFFFF",
      "outline": "#000000"
    },
    "typography": {
      "display": {
        "fontFamily": "Jost, sans-serif",
        "fontSize": "48px",
        "fontWeight": 800,
        "lineHeight": 1.1,
        "letterSpacing": "-0.02em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Jost, sans-serif",
        "fontSize": "36px",
        "fontWeight": 700,
        "lineHeight": 1.1,
        "letterSpacing": "-0.02em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Jost, sans-serif",
        "fontSize": "24px",
        "fontWeight": 700,
        "lineHeight": 1.375,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Jost, sans-serif",
        "fontSize": "16px",
        "fontWeight": 300,
        "lineHeight": 1.625,
        "letterSpacing": "0.025em",
        "textTransform": "lowercase"
      },
      "label": {
        "fontFamily": "Jost, sans-serif",
        "fontSize": "12px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.1em",
        "textTransform": "uppercase"
      }
    },
    "rounded": {},
    "spacing": {},
    "components": {
      "button-primary": {
        "backgroundColor": "#E31E24",
        "textColor": "{colors.on-surface}",
        "rounded": "0px",
        "padding": "24px",
        "height": "48px"
      },
      "button-primary-hover": {
        "backgroundColor": "{colors.on-surface}",
        "textColor": "#E31E24",
        "rounded": "0px",
        "padding": "24px",
        "height": "48px"
      },
      "button-secondary": {
        "backgroundColor": "#000000",
        "textColor": "{colors.on-surface}",
        "rounded": "0px",
        "padding": "24px",
        "height": "48px"
      },
      "card": {
        "backgroundColor": "#FFFFFF",
        "textColor": "#000000",
        "rounded": "0px",
        "padding": "24px"
      },
      "rule-line": {
        "backgroundColor": "#000000",
        "height": "4px",
        "width": "100%"
      },
      "circle": {
        "backgroundColor": "#E31E24",
        "rounded": "9999px",
        "size": "96px"
      }
    },
    "version": "alpha",
    "description": "A geometric, asymmetrical UI system translating the machine‑age Bauhaus spirit: a single loud geometric sans‑serif, black‑white‑primary palette, solid fills, hard‑edge letterpress deboss, and simulated print‑surface authenticity.",
    "provenance": {
      "coverage_status": "complete",
      "identity_description": "The slug `bauhaus-typography` refers to the typographic principles, typefaces, lettering systems, and visual identity developed at and associated with the Staatliches Bauhaus (1919–1933) in Weimar, Dessau, and Berlin. The subject encompasses both custom designs (Herbert Bayer's Universal alphabet, Josef Albers' Kombinationsschrift, Joost Schmidt's Strichschrift) and commercial geometric sans-serif",
      "manual_enrichment_required": false,
      "imagery_count": 9,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "www.bauhaus.de",
          "count": 1
        },
        {
          "host": "harvardartmuseums.org",
          "count": 1
        },
        {
          "host": "www.vam.ac.uk",
          "count": 1
        },
        {
          "host": "en.wikipedia.org",
          "count": 1
        },
        {
          "host": "bauhaus-dessau.de",
          "count": 1
        },
        {
          "host": "commons.wikimedia.org",
          "count": 1
        },
        {
          "host": "www.getty.edu",
          "count": 1
        },
        {
          "host": "www.cooperhewitt.org",
          "count": 1
        },
        {
          "host": "bauhauskooperation.de",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://www.bauhaus.de/en/research/collection/",
          "host": "www.bauhaus.de",
          "institution": "Bauhaus-Archiv, Berlin",
          "confidence_original": "low"
        },
        {
          "url": "https://harvardartmuseums.org/collections",
          "host": "harvardartmuseums.org",
          "institution": "Harvard Art Museums, Busch-Reisinger Museum",
          "confidence_original": "low"
        },
        {
          "url": "https://www.vam.ac.uk/collections",
          "host": "www.vam.ac.uk",
          "institution": "Victoria and Albert Museum, London",
          "confidence_original": "low"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Bauhaus",
          "host": "en.wikipedia.org",
          "institution": null,
          "confidence_original": "medium"
        },
        {
          "url": "https://bauhaus-dessau.de/",
          "host": "bauhaus-dessau.de",
          "institution": "Bauhaus Dessau Foundation",
          "confidence_original": "low"
        },
        {
          "url": "https://commons.wikimedia.org/wiki/Category:Bauhaus",
          "host": "commons.wikimedia.org",
          "institution": "Wikimedia Commons",
          "confidence_original": "medium"
        },
        {
          "url": "https://www.getty.edu/research-institute/",
          "host": "www.getty.edu",
          "institution": "Getty Research Institute, Los Angeles",
          "confidence_original": "low"
        },
        {
          "url": "https://www.cooperhewitt.org/",
          "host": "www.cooperhewitt.org",
          "institution": "Cooper Hewitt, Smithsonian Design Museum",
          "confidence_original": "low"
        },
        {
          "url": "https://bauhauskooperation.de/",
          "host": "bauhauskooperation.de",
          "institution": "Bauhaus Verbund 2019",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Universal",
          "foundry": null,
          "year": 1925,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "attested"
        },
        {
          "name": "Futura",
          "foundry": null,
          "year": 1927,
          "google_fonts": "Jost",
          "attestation": "attested"
        },
        {
          "name": "Erbar",
          "foundry": null,
          "year": 1922,
          "google_fonts": "Jost",
          "attestation": "conventional"
        },
        {
          "name": "Kabel",
          "foundry": null,
          "year": 1927,
          "google_fonts": "Jost",
          "attestation": "conventional"
        },
        {
          "name": "Venus",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "attestation": "conventional"
        },
        {
          "name": "Akzidenz-Grotesk",
          "foundry": null,
          "year": null,
          "google_fonts": "Archivo",
          "attestation": "conventional"
        },
        {
          "name": "Kombinationsschrift",
          "foundry": null,
          "year": 1926,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "attested"
        },
        {
          "name": "Strichschrift",
          "foundry": null,
          "year": 1930,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "attested"
        }
      ],
      "flags": {},
      "honest_gaps": [
        {
          "\"The following gaps are unanimously acknowledged across all sources": ""
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
    "--secondary-col": "#0057B7",
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
    "primary": "#E31E24",
    "secondary": "#0057B7",
    "error": "#E31E24",
    "accent": "#FDD835",
    "err": "#E31E24",
    "warn": "#FF8C42",
    "ok": "#22C55E",
    "deltaUp": "#22C55E",
    "deltaDown": "#E31E24",
    "deltaFlat": "#1A1A1A",
    "live": "#E31E24",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#1A1A1A",
    "chartFont": "Jost"
  },
  "chartStyle": {
    "line": {
      "stroke": "#E31E24",
      "strokeWidth": 2
    },
    "bar": {
      "fill": "#E31E24",
      "stroke": "#000000"
    },
    "pie": {
      "colors": [
        "#E31E24",
        "#0057B7",
        "#FDD835",
        "#000000",
        "#FFFFFF"
      ],
      "stroke": "#000000"
    },
    "axis": {
      "stroke": "#000000",
      "font": "Jost"
    },
    "grid": {
      "stroke": "#000000",
      "strokeDasharray": "4"
    },
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#1A1A1A",
    "fontFamily": "Jost"
  },
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "paper",
    "params": {
      "grainOpacity": 0.08,
      "debossOffset": "2px",
      "debossColor": "#E31E24",
      "registrationSlip": "1px",
      "textureStrength": 0.65
    }
  },
  "interactionModel": {
    "hover": {
      "transform": "translate(2px, -2px)",
      "colorSwap": true,
      "transitionDuration": "0ms",
      "transitionEasing": "none"
    },
    "focus": {
      "outline": "2px solid var(--primary)",
      "transitionDuration": "0ms",
      "transitionEasing": "none"
    },
    "active": {
      "transform": "translate(2px, 2px)",
      "colorInvert": true,
      "transitionDuration": "0ms",
      "transitionEasing": "none"
    }
  },
  "interactionStyles": ".ds-layout-frame button, .ds-layout-frame a.button, .ds-layout-frame .btn { transition: none; } .ds-layout-frame button:hover, .ds-layout-frame a.button:hover, .ds-layout-frame .btn:hover { transform: translate(2px, -2px); background: var(--on-bg); color: var(--primary); border-color: var(--primary); } .ds-layout-frame button:active, .ds-layout-frame a.button:active, .ds-layout-frame .btn:active { transform: translate(2px, 2px); background: var(--primary); color: var(--on-primary); border-color: var(--primary); } .ds-layout-frame button:focus, .ds-layout-frame a.button:focus, .ds-layout-frame .btn:focus { outline: 2px solid var(--primary); outline-offset: 2px; }",
  "globalFilter": "<svg><defs><filter id=\"paper-grain\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" result=\"noise\"/><feColorMatrix type=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.08 0\" in=\"noise\" result=\"coloredNoise\"/><feBlend in=\"SourceGraphic\" in2=\"coloredNoise\" mode=\"multiply\"/></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-body); background: var(--bg); color: var(--on-bg); margin: 0; padding: 0;",
  "globalCss": ".ds-layout-frame { --tw: 4px; } .ds-layout-frame h1, .ds-layout-frame .display { text-shadow: 2px 2px 0 var(--primary); } .ds-layout-frame h2, .ds-layout-frame .headline { text-shadow: 1px 1px 0 var(--primary); } .ds-layout-frame .thick-rule { border-bottom: var(--tw) solid var(--border); margin: 24px 0; } .ds-layout-frame .geometric-shape { background: var(--primary); } .ds-layout-frame .reverse-out { background: var(--primary); color: var(--on-primary); } .ds-layout-frame .grid-break { margin-right: -40px; } .ds-layout-frame .card { border: var(--tw) solid var(--border); padding: 24px; } .ds-layout-frame .button { border: 2px solid var(--border); padding: 0 24px; height: 48px; line-height: 48px; text-transform: uppercase; font-weight: 700; }",
  "spacing": {
    "component-internal": "24px",
    "section-internal": "48px",
    "page-edge": "24px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "0px"
  },
  "elevation": {
    "flat": true,
    "levels": {
      "base": "0",
      "sticky": "10",
      "dropdown": "20",
      "overlay": "30",
      "modal": "40"
    },
    "shadow": "none"
  },
  "dashboardStyle": {
    "layout": "asymmetrical, left-anchored, modular grid with thick black rules separating panels",
    "density": "≥30% negative space, one geometric accent per view breaking the grid",
    "panelTreatment": "white cards with 4px black borders, debossed headings, no rounding",
    "dataVizStyle": "hard-edged bars and lines in primary red, black strokes, no fill gradients",
    "signatureElement": "a thick red rule or circle bleeding off the right edge of the dashboard"
  },
  "landingStyle": {
    "heroApproach": "white canvas with extra-bold black display headline, letterpress deboss, and a single primary red geometric shape bleeding off the bottom-right",
    "scrollBehavior": "static, no parallax; content sections separated by full-width thick black rules",
    "ctaStyle": "solid primary red button with white text and deboss; hover inverts colors with a 2px positional shift",
    "signatureMoment": "the primary red shape (circle or triangle) is placed asymmetrically and breaks the page edge by 10–20px"
  },
  "buttons": [
    {
      "name": "Primary Button",
      "desc": "Solid primary red button with white text. Hard-edge letterpress deboss effect (offset text-shadow).",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||'';this.dataset.guxBoxShadow=this.style.boxShadow||'';this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+' ':'')+'brightness(1.12)';\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||'';this.style.boxShadow=this.dataset.guxBoxShadow||''\" style=\"background:var(--primary);color:var(--on-primary);font-family:var(--font-display);font-weight:800;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;padding:24px;border:0;border-radius:0;cursor:pointer;text-shadow:2px 2px 0 rgba(0,0,0,0.3);height:48px;width:auto;display:inline-flex;align-items:center;justify-content:center;\">action</button>",
      "label": "Primary Button",
      "note": "Solid primary red button with white text. Hard-edge letterpress deboss effect (offset text-shadow)."
    },
    {
      "name": "Secondary Button",
      "desc": "Solid black button with white text, same deboss.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||'';this.dataset.guxBoxShadow=this.style.boxShadow||'';this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+' ':'')+'brightness(1.12)';\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||'';this.style.boxShadow=this.dataset.guxBoxShadow||''\" style=\"background:var(--on-bg);color:var(--bg);font-family:var(--font-display);font-weight:800;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;padding:24px;border:0;border-radius:0;cursor:pointer;text-shadow:2px 2px 0 rgba(0,0,0,0.3);height:48px;width:auto;display:inline-flex;align-items:center;justify-content:center;\">action</button>",
      "label": "Secondary Button",
      "note": "Solid black button with white text, same deboss."
    },
    {
      "name": "Outline Button",
      "desc": "White background with black border and primary text, no fill.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||'';this.dataset.guxBoxShadow=this.style.boxShadow||'';this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+' ':'')+'brightness(1.12)';\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||'';this.style.boxShadow=this.dataset.guxBoxShadow||''\" style=\"background:var(--bg);color:var(--primary);font-family:var(--font-display);font-weight:800;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;padding:24px;border:2px solid var(--border);border-radius:0;cursor:pointer;text-shadow:2px 2px 0 rgba(0,0,0,0.3);height:48px;width:auto;display:inline-flex;align-items:center;justify-content:center;\">action</button>",
      "label": "Outline Button",
      "note": "White background with black border and primary text, no fill."
    }
  ],
  "cards": [
    {
      "name": "Standard Card",
      "desc": "White card with 4px black border, debossed title, and a thick rule dividing headline and body.",
      "html": "<div style=\"background:var(--surface);border:4px solid var(--border);padding:24px;width:300px;font-family:var(--font-body);\"><h3 style=\"font-family:var(--font-display);font-weight:800;font-size:24px;text-transform:uppercase;letter-spacing:-0.02em;margin:0 0 12px 0;text-shadow:2px 2px 0 rgba(0,0,0,0.3);\">card title</h3><div style=\"width:100%;height:4px;background:var(--border);margin-bottom:12px;\"></div><p style=\"font-weight:300;font-size:16px;letter-spacing:0.025em;text-transform:lowercase;margin:0;\">body text for the card.</p></div>",
      "label": "Standard Card",
      "note": "White card with 4px black border, debossed title, and a thick rule dividing headline and body."
    },
    {
      "name": "Card with Geometric Overlay",
      "desc": "White card with a red circle breaking the right edge, asymmetrical.",
      "html": "<div style=\"background:var(--surface);border:4px solid var(--border);padding:24px;width:300px;position:relative;overflow:hidden;font-family:var(--font-body);\"><h3 style=\"font-family:var(--font-display);font-weight:800;font-size:24px;text-transform:uppercase;letter-spacing:-0.02em;margin:0 0 12px 0;text-shadow:2px 2px 0 rgba(0,0,0,0.3);\">card title</h3><p style=\"font-weight:300;font-size:16px;letter-spacing:0.025em;text-transform:lowercase;margin:0;\">body text with a geometric accent.</p><div style=\"position:absolute;top:-20px;right:-20px;width:96px;height:96px;background:var(--primary);border-radius:9999px;\"></div></div>",
      "label": "Card with Geometric Overlay",
      "note": "White card with a red circle breaking the right edge, asymmetrical."
    }
  ],
  "forms": [
    {
      "name": "Text Input",
      "desc": "Single-line text field with thick black border, uppercase label, and deboss effect on value.",
      "html": "<div style=\"font-family:var(--font-body);\"><label style=\"display:block;font-family:var(--font-display);font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:4px;\">name</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" placeholder=\"enter text\" style=\"background:var(--surface);border:2px solid var(--border);padding:8px 12px;font-family:var(--font-body);font-weight:300;font-size:16px;text-transform:lowercase;border-radius:0;color:var(--on-bg);text-shadow:1px 1px 0 rgba(0,0,0,0.15);width:250px;\"></div>",
      "label": "Text Input",
      "stateLabel": "Single-line text field with thick black border, uppercase label, and deboss effect on value."
    },
    {
      "name": "Select / Dropdown",
      "desc": "Custom select with thick border and uppercase label. Arrow is a geometric chevron.",
      "html": "<div style=\"font-family:var(--font-body);\"><label style=\"display:block;font-family:var(--font-display);font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:4px;\">option</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:var(--surface);border:2px solid var(--border);padding:8px 12px;font-family:var(--font-body);font-weight:300;font-size:16px;text-transform:lowercase;border-radius:0;color:var(--on-bg);width:250px;appearance:none;background-image:url(\\x27data:image/svg+xml;charset=UTF-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\"><polygon points=\"0,0 12,0 6,8\" fill=\"black\"/></svg>\\x27);background-repeat:no-repeat;background-position:right 8px center;\"><option>option one</option><option>option two</option></select></div>",
      "label": "Select / Dropdown",
      "stateLabel": "Custom select with thick border and uppercase label. Arrow is a geometric chevron."
    },
    {
      "name": "Checkbox / Toggle",
      "desc": "Square checkbox with primary fill when checked, deboss effect on label.",
      "html": "<div style=\"font-family:var(--font-body);display:flex;align-items:center;gap:8px;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" id=\"chk1-024a\" style=\"width:20px;height:20px;border:2px solid var(--border);border-radius:0;appearance:none;background:var(--surface);cursor:pointer;position:relative;\"><label for=\"chk1-024a\" style=\"font-family:var(--font-display);font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;text-shadow:1px 1px 0 rgba(0,0,0,0.15);cursor:pointer;\">agree</label></div>",
      "label": "Checkbox / Toggle",
      "stateLabel": "Square checkbox with primary fill when checked, deboss effect on label."
    }
  ],
  "extraComponents": [
    {
      "name": "Thick Rule",
      "desc": "Full-width black rule used as a structural divider.",
      "html": "<div style=\"width:100%;height:4px;background:var(--border);\"></div>"
    },
    {
      "name": "Geometric Shape Overlay",
      "desc": "A red circle used as a compositional anchor, deliberately breaking the grid.",
      "html": "<div style=\"width:96px;height:96px;background:var(--primary);border-radius:9999px;\"></div>"
    },
    {
      "name": "Reverse-Out Element",
      "desc": "White text on a primary red field, simulating a print cutout.",
      "html": "<div style=\"background:var(--primary);padding:12px 24px;display:inline-block;\"><span style=\"font-family:var(--font-display);font-weight:800;font-size:16px;text-transform:uppercase;letter-spacing:-0.02em;color:var(--on-primary);text-shadow:2px 2px 0 rgba(0,0,0,0.3);\">reverse out</span></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — BAUHAUS ENTWURF</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — TYPOGRAPHIE UND FORM</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — KONSTRUKTIVISTISCHE KOMPOSITION</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — geometrische formen in schwarz, weiss und rot.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — ANMERKUNG</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Center alignment as primary composition strategy – feels static, not constructivist.",
      "avoid": {
        "html": "<div style=\"text-align:center;width:100%;background:var(--bg);padding:24px;font-family:var(--font-display);\"><h1 style=\"font-weight:800;font-size:36px;text-transform:uppercase;margin:0;\">center</h1><p style=\"font-weight:300;font-size:16px;text-transform:lowercase;margin:12px 0;\">avoid symmetrical layouts.</p><button style=\"background:var(--primary);color:var(--on-primary);border:0;padding:12px 24px;font-weight:700;\">action</button></div>",
        "label": "Avoid"
      },
      "rule": "Center alignment as primary composition strategy – feels static, not constructivist.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Use of serif or decorative typefaces – breaks the geometric Bauhaus identity.",
      "avoid": {
        "html": "<div style=\"background:var(--bg);padding:24px;\"><h1 style=\"font-family:Georgia, serif;font-size:36px;font-weight:400;color:var(--on-bg);\">Serif is forbidden</h1><p style=\"font-family:'Times New Roman', serif;\">This uses serif typefaces.</p></div>",
        "label": "Avoid"
      },
      "rule": "Use of serif or decorative typefaces – breaks the geometric Bauhaus identity.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Soft shadows, gradients, or glossy effects – destroy the flat print aesthetic.",
      "avoid": {
        "html": "<div style=\"background:var(--bg);padding:24px;box-shadow:0 4px 12px rgba(0,0,0,0.3);border-radius:8px;\"><p style=\"font-family:var(--font-body);font-weight:300;font-size:16px;color:var(--on-bg);\">This has a soft shadow and rounded corners.</p></div>",
        "label": "Avoid"
      },
      "rule": "Soft shadows, gradients, or glossy effects – destroy the flat print aesthetic.",
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
  "layouts": {
    "copy": {
      "heroKicker": "BAUHAUS TYPE CONSTRUCT",
      "heroHeadline": "GEOMETRIC COMPOSITION ENGINE",
      "heroSub": "a tool for designing asymmetrical typographic layouts with machine-age precision",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">COMPOSE</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">EXPLORE GRID</button>",
      "navLinks": [
        "GRID",
        "TYPEFACE",
        "ANCHORS",
        "OUTPUT"
      ],
      "features": [
        {
          "title": "ASYMMETRIC GRID",
          "desc": "left-anchored composition with one element breaking the column rule",
          "icon": "⬛",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⬛ ASYMMETRIC GRID</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">left-anchored composition with one element breaking the column rule</div></div>"
        },
        {
          "title": "GEOMETRIC OVERLAYS",
          "desc": "circle, square, triangle as structural fills — hard edge, no blend",
          "icon": "●",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">● GEOMETRIC OVERLAYS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">circle, square, triangle as structural fills — hard edge, no blend</div></div>"
        },
        {
          "title": "LETTERPRESS DEBOSS",
          "desc": "hard offset impression on display type with 2px registration shift",
          "icon": "⊞",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⊞ LETTERPRESS DEBOSS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">hard offset impression on display type with 2px registration shift</div></div>"
        },
        {
          "title": "THICK RULE ANCHOR",
          "desc": "4px black rule as primary layout divider, overshooting right edge",
          "icon": "▬",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">▬ THICK RULE ANCHOR</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">4px black rule as primary layout divider, overshooting right edge</div></div>"
        }
      ],
      "ctaStripHeadline": "BUILD YOUR MACHINE-AGE COMPOSITION",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||'';this.dataset.guxBoxShadow=this.style.boxShadow||'';this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+' ':'')+'brightness(1.12)';\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||'';this.style.boxShadow=this.dataset.guxBoxShadow||''\">START CONSTRUCT</button>",
      "sidebarBrand": "TYPE CONSTRUCT",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "GRID",
          "active": true
        },
        {
          "icon": "◉",
          "label": "OUTPUT",
          "active": false
        }
      ],
      "dashboardTitle": "COMPOSITION DASHBOARD",
      "metrics": [
        {
          "label": "CHARACTERS",
          "value": "1,024",
          "delta": "+3.2%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "GRID TENSION",
          "value": "0.84",
          "delta": "-0.02",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "INK COVERAGE",
          "value": "38%",
          "delta": "+1.1%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "DEBOSS DEPTH",
          "value": "2PX",
          "delta": "0",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "TYPE WEIGHT SPECTRUM",
      "panelATitle": "COMPOSITION LOG",
      "panelARows": [
        {
          "label": "GRID ORIGIN",
          "value": "LEFT 24PX",
          "pct": 24
        },
        {
          "label": "BREAK ELEMENT",
          "value": "CIRCLE (X:320)",
          "pct": 100
        },
        {
          "label": "RULE OFFSET",
          "value": "32PX RIGHT",
          "pct": 32
        },
        {
          "label": "DEBOSS SHIFT",
          "value": "X:2 Y:2",
          "pct": 2
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "ACTIVE SHAPES",
      "panelBCells": [
        {
          "label": "SQUARE",
          "value": "#000000 96PX",
          "state": "ok"
        },
        {
          "label": "CIRCLE",
          "value": "#E31E24 64PX",
          "state": "warn"
        },
        {
          "label": "TRIANGLE",
          "value": "#0057B7 80PX",
          "state": "err"
        },
        {
          "label": "RULE",
          "value": "4PX #000000",
          "state": "ok"
        },
        {
          "label": "RECT",
          "value": "#FDD835 120X48",
          "state": "warn"
        },
        {
          "label": "DIAMOND",
          "value": "#000000 72PX",
          "state": "err"
        },
        {
          "label": "ARC",
          "value": "#E31E24 R:40",
          "state": "ok"
        },
        {
          "label": "CROSS",
          "value": "#FFFFFF 16PX",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "LIGHT 300",
        "REGULAR 400",
        "BOLD 700",
        "EXTRA BOLD 800",
        "KERN",
        "TRACK"
      ],
      "series": [
        {
          "data": [
            12,
            24,
            42,
            18,
            8,
            5,
            5,
            5,
            5,
            5,
            5,
            5
          ],
          "label": "COUNT",
          "axis": "left",
          "color": "#E31E24"
        },
        {
          "data": [
            4,
            8,
            12,
            6,
            3,
            2,
            2,
            2,
            2,
            2,
            2,
            2
          ],
          "label": "SPACE",
          "axis": "right-1",
          "color": "#0057B7"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText='position:relative;min-height:80vh;padding:48px;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;overflow:hidden;background:var(--surface);'; var h1=document.createElement('h1'); h1.style.cssText='font-family:var(--font-display);font-weight:800;font-size:48px;text-transform:uppercase;letter-spacing:-0.02em;margin:0 0 8px 0;color:var(--on-bg);text-shadow:2px 2px 0 var(--primary);'; h1.textContent='BAUHAUS TYPE CONSTRUCT'; el.appendChild(h1); var rule=document.createElement('div'); rule.style.cssText='width:80%;height:4px;background:var(--border);margin-bottom:24px;'; el.appendChild(rule); var sub=document.createElement('p'); sub.style.cssText='font-family:var(--font-body);font-weight:300;font-size:16px;text-transform:lowercase;letter-spacing:0.025em;margin:0 0 32px 0;color:var(--on-bg-muted);max-width:60%;'; sub.textContent='a tool for designing asymmetrical typographic layouts with machine-age precision'; el.appendChild(sub); var btn=document.createElement('button'); btn.style.cssText='background:var(--primary);color:var(--on-primary);font-family:var(--font-display);font-weight:800;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;padding:24px;border:0;cursor:pointer;text-shadow:2px 2px 0 rgba(0,0,0,0.3);height:48px;'; btn.textContent='COMPOSE'; el.appendChild(btn); var shape=document.createElement('div'); shape.style.cssText='position:absolute;bottom:-20px;right:-20px;width:96px;height:96px;background:var(--primary);border-radius:9999px;z-index:1;'; el.appendChild(shape); }",
    "showcaseRender": "function(el) { el.style.cssText='padding:48px;background:var(--surface);'; var inner='<div style=\"position:relative;overflow:hidden;\"><div style=\"display:flex;flex-wrap:wrap;gap:24px;align-items:stretch;\"><div style=\"flex:1 1 220px;min-height:180px;padding:24px;border:4px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);text-shadow:1px 1px 0 var(--primary);\">⬛ GRID</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">left-anchored composition with one element breaking the column rule</div></div><div style=\"flex:1 1 220px;min-height:180px;padding:24px;border:4px solid var(--border);background:var(--surface);\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);text-shadow:1px 1px 0 var(--primary);\">● SHAPES</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">circle, square, triangle as structural fills</div></div><div style=\"flex:1 1 220px;min-height:180px;padding:24px;border:4px solid var(--border);background:var(--surface);\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);text-shadow:1px 1px 0 var(--primary);\">⊞ DEBOSS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">hard offset impression on display type with 2px registration shift</div></div><div style=\"flex:1 1 220px;min-height:180px;padding:24px;border:4px solid var(--border);background:var(--surface);\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);text-shadow:1px 1px 0 var(--primary);\">▬ RULE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">4px black rule as primary layout divider, overshooting right edge</div></div></div></div>'; el.innerHTML=inner; }",
    "panelCRender": "function(el) { el.style.cssText='padding:24px;border:4px solid var(--border);background:var(--surface);font-family:var(--font-body);'; var h3=document.createElement('h3'); h3.style.cssText='font-family:var(--font-display);font-weight:800;font-size:24px;text-transform:uppercase;letter-spacing:-0.02em;margin:0 0 12px 0;color:var(--on-bg);text-shadow:2px 2px 0 var(--primary);'; h3.textContent='COMPOSITION LOG'; el.appendChild(h3); var rule=document.createElement('div'); rule.style.cssText='width:100%;height:4px;background:var(--border);margin-bottom:16px;'; el.appendChild(rule); var items=['GRID ORIGIN: LEFT 24PX','BREAK ELEMENT: CIRCLE (X:320)','RULE OFFSET: 32PX RIGHT','DEBOSS SHIFT: X:2 Y:2']; for(var i=0;i<items.length;i++){ var row=document.createElement('div'); row.style.cssText='display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border);font-size:12px;text-transform:uppercase;letter-spacing:0.05em;'; var parts=items[i].split(': '); row.innerHTML='<span style=\"font-weight:300;\">'+parts[0]+'</span><span style=\"font-weight:700;\">'+parts[1]+'</span>'; el.appendChild(row); } }",
    "heroBackground": "function(el) { el.style.background='#FFFFFF'; }",
    "ctaBackground": "function(el) { el.style.background='#E31E24'; }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText='width:100%;height:4px;background:var(--border);'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background='#FFFFFF'; }",
    "surfaceOverlay": "function(el) { el.style.cssText='position:absolute;inset:0;z-index:2;pointer-events:none;background-image:repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px),repeating-linear-gradient(-45deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px);'; }"
  },
  "ambientCanvas": "function(tick) { var c = document.createElement('canvas'); c.width = 200; c.height = 200; var ctx = c.getContext('2d'); ctx.fillStyle = '#FFFFFF'; ctx.fillRect(0,0,200,200); var angle = tick * 0.02; var x = 100 + 80 * Math.cos(angle); var y = 100 + 80 * Math.sin(angle); ctx.fillStyle = '#E31E24'; ctx.beginPath(); ctx.arc(x, y, 30, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#000000'; ctx.fillRect(80,80,40,40); ctx.strokeStyle = '#000000'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(40,40); ctx.lineTo(60,20); ctx.lineTo(80,40); ctx.closePath(); ctx.stroke(); return c; }",
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
    "--color-secondary": "#0057B7",
    "--color-accent": "#0057B7",
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
    "--secondary": "#0057B7",
    "--accent": "#0057B7",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#E31E24"
  }
});
