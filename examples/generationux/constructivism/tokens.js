registerSystem({
  "meta": {
    "name": "Constructivism",
    "tagline": "Revolutionary UI style with abstract geometry, diagonal dynamism, and a stark red-black-white palette.",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Anton:wght@400;700;800;900&display=swap"
  },
  "yamlTokens": {
    "name": "Constructivism",
    "colors": {
      "on-primary": "#FFFFFF",
      "secondary": "#000000",
      "on-secondary": "#FFFFFF",
      "neutral": "#FFFFFF",
      "on-surface": "#000000",
      "surface-container": "#F5F5F5",
      "outline": "#000000"
    },
    "typography": {
      "display": {
        "fontFamily": "Anton",
        "fontSize": "60px",
        "fontWeight": 900,
        "lineHeight": 1,
        "letterSpacing": "-0.05em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Anton",
        "fontSize": "36px",
        "fontWeight": 800,
        "lineHeight": 1.25,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Anton",
        "fontSize": "24px",
        "fontWeight": 700,
        "lineHeight": 1.375,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Anton",
        "fontSize": "16px",
        "fontWeight": 600,
        "lineHeight": 1.5,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "label": {
        "fontFamily": "Anton",
        "fontSize": "14px",
        "fontWeight": 700,
        "lineHeight": 1,
        "letterSpacing": "0.05em",
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
      "section-internal": "24px",
      "page-edge": "32px",
      "gap-component": "16px",
      "gap-section": "32px",
      "height-sm": "40px",
      "height-md": "48px",
      "height-lg": "64px",
      "icon": "24px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "#CC0000",
        "textColor": "{colors.on-primary}",
        "rounded": "{rounded.button}",
        "padding": "16px"
      },
      "button-primary-hover": {
        "backgroundColor": "#E60012",
        "textColor": "{colors.on-primary}",
        "rounded": "{rounded.button}",
        "padding": "16px"
      },
      "card": {
        "backgroundColor": "{colors.neutral}",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "input": {
        "backgroundColor": "{colors.neutral}",
        "rounded": "{rounded.input}",
        "padding": "8px"
      },
      "input-focus": {
        "backgroundColor": "{colors.neutral}",
        "rounded": "{rounded.input}",
        "padding": "8px"
      },
      "photomontage-panel": {
        "backgroundColor": "{colors.neutral}",
        "rounded": "{rounded.card}",
        "padding": "16px"
      }
    },
    "version": "alpha",
    "description": "A revolutionary UI style channeling early Soviet graphic design, defined by abstract geometry, diagonal dynamism, and industrial clarity with a stark red-black-white palette.",
    "provenance": {
      "coverage_status": "complete",
      "identity_description": "The slug `constructivism` refers to the Russian Constructivist movement — an avant‑garde art and design movement active approximately 1913–1935, primarily in Soviet Russia. Constructivism rejected autonomous “art for art’s sake” in favour of art as a practical tool for building a socialist society. Its visual language is characterised by geometric abstraction, a restricted palette (primarily red, ",
      "manual_enrichment_required": false,
      "imagery_count": 11,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "en.wikipedia.org",
          "count": 9
        },
        {
          "host": "www.vam.ac.uk",
          "count": 1
        },
        {
          "host": "www.getty.edu",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://en.wikipedia.org/wiki/Constructivism_(art)",
          "host": "en.wikipedia.org",
          "institution": "Wikimedia Foundation",
          "confidence_original": "high"
        },
        {
          "url": "https://en.wikipedia.org/wiki/El_Lissitzky",
          "host": "en.wikipedia.org",
          "institution": "Wikimedia Foundation",
          "confidence_original": "high"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Alexander_Rodchenko",
          "host": "en.wikipedia.org",
          "institution": "Wikimedia Foundation",
          "confidence_original": "high"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Stenberg_brothers",
          "host": "en.wikipedia.org",
          "institution": "Wikimedia Foundation",
          "confidence_original": "high"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Gustav_Klutsis",
          "host": "en.wikipedia.org",
          "institution": "Wikimedia Foundation",
          "confidence_original": "high"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Lyubov_Popova",
          "host": "en.wikipedia.org",
          "institution": "Wikimedia Foundation",
          "confidence_original": "high"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Varvara_Stepanova",
          "host": "en.wikipedia.org",
          "institution": "Wikimedia Foundation",
          "confidence_original": "high"
        },
        {
          "url": "https://www.vam.ac.uk/collections",
          "host": "www.vam.ac.uk",
          "institution": "Victoria and Albert Museum, London",
          "confidence_original": "low"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Proun",
          "host": "en.wikipedia.org",
          "institution": "Wikimedia Foundation",
          "confidence_original": "medium"
        },
        {
          "url": "https://www.getty.edu/research-institute/",
          "host": "www.getty.edu",
          "institution": "Getty Research Institute, Los Angeles",
          "confidence_original": "low"
        },
        {
          "url": "https://en.wikipedia.org/wiki/UNOVIS",
          "host": "en.wikipedia.org",
          "institution": "Wikimedia Foundation",
          "confidence_original": "high"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Erbar-Grotesk",
          "foundry": "Ludwig & Mayer",
          "year": 1926,
          "google_fonts": "Jost",
          "attestation": "attested"
        },
        {
          "name": "hand-drawn geometric sans-serif lettering",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "attested"
        },
        {
          "name": "Akzidenz-Grotesk",
          "foundry": null,
          "year": null,
          "google_fonts": "Archivo",
          "attestation": "conventional"
        }
      ],
      "flags": {},
      "honest_gaps": [
        {
          "\"1. **Colour specifications**": "No verified hex/Pantone/CMYK values for any constructivist colour. Red, blue, yellow hex approximations are contested among providers. Resolution requires spectrophotometric measurement of surviving prints.\""
        }
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#FFFFFF",
    "--on-bg": "#000000",
    "--primary": "#CC0000",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#000000",
    "--on-secondary": "#FFFFFF",
    "--surface": "#F5F5F5",
    "--on-bg-muted": "#1A1A1A",
    "--border": "#000000",
    "--error": "#CC0000",
    "--font-display": "Anton",
    "--font-body": "Anton",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px",
    "typography": "{\"display\":{\"fontFamily\":\"Paytone One\",\"fontSize\":\"60px\",\"fontWeight\":900,\"lineHeight\":1,\"letterSpacing\":\"-0.05em\",\"textTransform\":\"uppercase\"},\"headline\":{\"fontFamily\":\"Paytone One\",\"fontSize\":\"36px\",\"fontWeight\":800,\"lineHeight\":1.25,\"letterSpacing\":\"-0.025em\",\"textTransform\":\"uppercase\"},\"title\":{\"fontFamily\":\"Paytone One\",\"fontSize\":\"24px\",\"fontWeight\":700,\"lineHeight\":1.375,\"letterSpacing\":\"0.025em\",\"textTransform\":\"uppercase\"},\"body\":{\"fontFamily\":\"Paytone One\",\"fontSize\":\"16px\",\"fontWeight\":600,\"lineHeight\":1.5,\"letterSpacing\":\"0em\",\"textTransform\":\"uppercase\"},\"label\":{\"fontFamily\":\"Paytone One\",\"fontSize\":\"14px\",\"fontWeight\":700,\"lineHeight\":1,\"letterSpacing\":\"0.05em\",\"textTransform\":\"uppercase\"}}"
  },
  "semanticColors": {
    "primary": "#CC0000",
    "on-primary": "#FFFFFF",
    "secondary": "#000000",
    "on-secondary": "#FFFFFF",
    "neutral": "#FFFFFF",
    "on-surface": "#000000",
    "surface-container": "#F5F5F5",
    "outline": "#000000",
    "error": "#CC0000",
    "err": "#CC0000",
    "deltaFlat": "#FFFFFF",
    "warn": "#FF8C42",
    "ok": "#22C55E",
    "deltaUp": "#22C55E",
    "deltaDown": "#CC0000",
    "live": "#CC0000",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#1A1A1A",
    "chartFont": "Anton"
  },
  "elevation": {
    "levels": [
      {
        "name": "flat",
        "shadow": "none",
        "style": ""
      },
      {
        "name": "raised",
        "shadow": "none",
        "style": "box-shadow:0 2px 4px rgba(0,0,0,.12);"
      },
      {
        "name": "overlay",
        "shadow": "none",
        "style": "box-shadow:0 8px 24px rgba(0,0,0,.18);"
      }
    ]
  },
  "surfaceModel": "flat",
  "materialSimulation": {
    "model": "paper",
    "params": {
      "grain": {
        "filterId": "paper-grain",
        "blend": "overlay",
        "opacity": 0.12
      },
      "halftone": {
        "technique": "SVG filter via globalFilter",
        "filterId": "halftone-dot",
        "blend": "multiply",
        "lpi": "60–85",
        "opacity": 0.15
      },
      "misregistration": {
        "technique": "CSS transform duplicate offset",
        "offset": "2px",
        "color": "#CC0000"
      }
    }
  },
  "globalFilter": "<svg xmlns='http://www.w3.org/2000/svg' width='0' height='0'><defs><filter id='paper-grain' x='0' y='0' width='100%' height='100%'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' result='noise'/><feColorMatrix type='matrix' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.12 0' in='noise' result='coloredNoise'/><feBlend mode='overlay' in='SourceGraphic' in2='coloredNoise'/></filter><filter id='halftone-dot' x='0' y='0' width='100%' height='100%'><feColorMatrix type='matrix' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.85 0'/><feComponentTransfer><feFuncA type='table' tableValues='0 0.15 0.3 0.5 0.7 0.85 1'/></feComponentTransfer></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-body); background: var(--bg); color: var(--on-bg); line-height: 1.5; -webkit-font-smoothing: antialiased;",
  "globalCss": ".ds-layout-frame ::selection { background: rgba(204, 0, 0, 0.3); color: inherit; } .ds-layout-frame ::-webkit-scrollbar { width: 6px; } .ds-layout-frame ::-webkit-scrollbar-track { background: #000000; } .ds-layout-frame ::-webkit-scrollbar-thumb { background: #CC0000; } .ds-layout-frame ::-webkit-scrollbar-thumb:hover { background: #FFFFFF; } .ds-layout-frame hr { border: 2px solid var(--border); margin: 32px 0; } .ds-layout-frame blockquote { border-left: 4px solid var(--primary); margin: 24px 0; padding: 16px; } .ds-layout-frame a { color: var(--on-bg); text-decoration: underline; text-decoration-thickness: 2px; } .ds-layout-frame a:hover { color: var(--primary); }",
  "interactionStyles": ".ds-layout-frame button, .ds-layout-frame a { transition: all 150ms ease-out; } .ds-layout-frame button:hover, .ds-layout-frame a:hover { color: var(--primary); border-color: var(--primary); } .ds-layout-frame button:active, .ds-layout-frame a:active { opacity: 0.75; transform: translate(2px,2px); } .ds-layout-frame input:focus { border-width: 4px; border-color: var(--primary); outline: none; } .ds-layout-frame [data-clickable]:hover { cursor: pointer; }",
  "chartStyle": {
    "background": "#FFFFFF",
    "grid": "1px solid #000000",
    "line": {
      "stroke": "#CC0000",
      "strokeWidth": "2px",
      "fill": "none"
    },
    "dot": {
      "fill": "#CC0000",
      "r": "3px"
    },
    "axisLabels": {
      "fontFamily": "Anton",
      "fontSize": "12px",
      "fontWeight": 700,
      "uppercase": true,
      "color": "#000000"
    },
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#1A1A1A",
    "fontFamily": "Anton"
  },
  "dashboardStyle": {
    "layout": "asymmetric diagonal grid with elements placed along intersecting 30° and 45° axes",
    "density": "moderate to high, data blocks sized irregularly",
    "panelTreatment": "white fill with thick black border (4px), no rounding, no shadows; paper grain texture simulated via SVG filter",
    "dataVizStyle": "line charts with red strokes on white background, black grid lines, dot markers as red circles; all axis labels uppercase bold geometric sans",
    "signatureElement": "signal bars (progress bars) with red fill on black track, mimicking industrial gauges"
  },
  "landingStyle": {
    "heroApproach": "large red geometric block (trapezoid or rectangle) bleeding off the upper-left edge, paired with a rotated headline in the lower-right corner",
    "scrollBehavior": "hard cuts between sections; no smooth parallax or fade transitions; section separators are thick black lines at 45° diagonals",
    "ctaStyle": "red solid button with thick black border, placed at a diagonal angle, all-caps bold label",
    "signatureMoment": "a stencil cut-out circle in the upper-right area revealing a halftone pattern or photomontage behind the white surface"
  },
  "buttons": [
    {
      "name": "Primary Button",
      "desc": "Solid red button with white text, bold uppercase, no rounding. Primary call to action.",
      "html": "<button onmouseenter=\"this.style.filter='brightness(1.12)'\" onmouseleave=\"this.style.filter=''\" style=\"background:var(--primary);color:var(--on-primary);border:4px solid var(--border);border-radius:var(--radius-btn);padding:16px 32px;font-family:var(--font-display);font-size:16px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;cursor:pointer;\">ACT NOW</button>",
      "label": "Primary Button",
      "note": "Solid red button with white text, bold uppercase, no rounding. Primary call to action."
    },
    {
      "name": "Secondary Button",
      "desc": "Solid black button with white text, same structural treatment as primary.",
      "html": "<button onmouseenter=\"this.style.filter='brightness(1.12)'\" onmouseleave=\"this.style.filter=''\" style=\"background:var(--secondary);color:var(--on-secondary);border:4px solid var(--border);border-radius:var(--radius-btn);padding:16px 32px;font-family:var(--font-display);font-size:16px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;cursor:pointer;\">BUILD</button>",
      "label": "Secondary Button",
      "note": "Solid black button with white text, same structural treatment as primary."
    },
    {
      "name": "Outline Button",
      "desc": "Transparent background with thick black border and black text, for secondary actions.",
      "html": "<button onmouseenter=\"this.style.filter='brightness(1.12)'\" onmouseleave=\"this.style.filter=''\" style=\"background:transparent;color:var(--on-bg);border:4px solid var(--border);border-radius:var(--radius-btn);padding:16px 32px;font-family:var(--font-display);font-size:16px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;cursor:pointer;\">DISCOVER</button>",
      "label": "Outline Button",
      "note": "Transparent background with thick black border and black text, for secondary actions."
    }
  ],
  "cards": [
    {
      "name": "Standard Card",
      "desc": "White card with thick black border, no rounding, bold internal spacing. Used for content blocks.",
      "html": "<div style=\"background:var(--bg);color:var(--on-bg);border:4px solid var(--border);border-radius:var(--radius-card);padding:24px;font-family:var(--font-body);\"><h3 style=\"font-family:var(--font-display);font-size:24px;font-weight:700;margin:0 0 8px;\">HEADLINE</h3><p style=\"font-size:16px;line-height:1.5;margin:0;\">BODY TEXT IN CAPS. NO SOFTNESS.</p></div>",
      "label": "Standard Card",
      "note": "White card with thick black border, no rounding, bold internal spacing. Used for content blocks."
    },
    {
      "name": "Photomontage Panel",
      "desc": "Card with a grayscale photomontage placeholder and halftone simulated via CSS pattern, hard edges.",
      "html": "<div style=\"background:var(--bg);color:var(--on-bg);border:4px solid var(--border);border-radius:var(--radius-card);padding:0;position:relative;height:200px;overflow:hidden;\"><div style=\"background:repeating-radial-gradient(circle at 50% 50%, var(--border) 0%, var(--border) 1px, transparent 1px, transparent 3px);opacity:0.15;width:100%;height:100%;position:absolute;\"></div><div style=\"background:linear-gradient(45deg, var(--surface) 30%, var(--border) 100%);width:100%;height:100%;display:flex;align-items:flex-end;padding:16px;box-sizing:border-box;\"><span style=\"font-family:var(--font-display);font-size:16px;color:var(--on-bg);font-weight:700;text-transform:uppercase;\">PHOTOMONTAGE</span></div></div>",
      "label": "Photomontage Panel",
      "note": "Card with a grayscale photomontage placeholder and halftone simulated via CSS pattern, hard edges."
    }
  ],
  "forms": [
    {
      "name": "Text Input",
      "desc": "White input with thick black border, no rounding, all-caps placeholder.",
      "html": "<div style=\"margin-bottom:16px;\"><label style=\"display:block;font-family:var(--font-display);font-size:14px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;margin-bottom:8px;color:var(--on-bg);\">FIELD LABEL</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" placeholder=\"ENTER VALUE\" style=\"background:var(--bg);color:var(--on-bg);border:4px solid var(--border);border-radius:var(--radius-input);padding:12px;font-family:var(--font-body);font-size:16px;font-weight:700;text-transform:uppercase;width:100%;box-sizing:border-box;\"></div>",
      "label": "Text Input",
      "stateLabel": "White input with thick black border, no rounding, all-caps placeholder."
    },
    {
      "name": "Select / Dropdown",
      "desc": "Custom select element with black border, red dropdown arrow, no rounding.",
      "html": "<div style=\"margin-bottom:16px;\"><label style=\"display:block;font-family:var(--font-display);font-size:14px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;margin-bottom:8px;color:var(--on-bg);\">CHOOSE</label><div style=\"position:relative;\"><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:var(--bg);color:var(--on-bg);border:4px solid var(--border);border-radius:var(--radius-input);padding:12px;font-family:var(--font-body);font-size:16px;font-weight:700;text-transform:uppercase;width:100%;box-sizing:border-box;appearance:none;-webkit-appearance:none;padding-right:40px;\"><option>OPTION ONE</option><option>OPTION TWO</option></select><span style=\"position:absolute;right:12px;top:50%;transform:translateY(-50%);color:var(--primary);font-size:20px;pointer-events:none;\">▼</span></div></div>",
      "label": "Select / Dropdown",
      "stateLabel": "Custom select element with black border, red dropdown arrow, no rounding."
    },
    {
      "name": "Checkbox / Toggle",
      "desc": "Square checkbox with red fill when checked, black border, all-caps label.",
      "html": "<div style=\"margin-bottom:16px;\"><label style=\"display:flex;align-items:center;gap:12px;font-family:var(--font-display);font-size:14px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;color:var(--on-bg);cursor:pointer;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"width:24px;height:24px;border:4px solid var(--border);appearance:none;-webkit-appearance:none;background:var(--bg);cursor:pointer;position:relative;\" checked=\"checked\"><span style=\"position:absolute;top:2px;left:4px;color:var(--primary);font-size:18px;\">✓</span>AGREE</label></div>",
      "label": "Checkbox / Toggle",
      "stateLabel": "Square checkbox with red fill when checked, black border, all-caps label."
    }
  ],
  "extraComponents": [
    {
      "name": "Badge",
      "desc": "Small rectangular badge with red background, white text, bold caps.",
      "html": "<span style=\"display:inline-block;background:var(--primary);color:var(--on-primary);padding:4px 12px;font-family:var(--font-display);font-size:14px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;border:4px solid var(--border);border-radius:0px;\">NEW</span>"
    },
    {
      "name": "Tooltip",
      "desc": "Minimal tooltip with black background, white text, no arrow or softening.",
      "html": "<div style=\"position:relative;display:inline-block;\"><span style=\"font-family:var(--font-body);font-size:14px;font-weight:700;\">HOVER</span><div style=\"position:absolute;bottom:110%;left:50%;transform:translateX(-50%);background:var(--secondary);color:var(--on-secondary);padding:8px 12px;font-family:var(--font-display);font-size:12px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;white-space:nowrap;border:4px solid var(--border);border-radius:0;\">TOOLTIP TEXT</div></div>"
    },
    {
      "name": "Stencil Cut-out",
      "desc": "A circular cut-out window that reveals content beneath, using a CSS mask or outline. Simulated here with a bordered circle.",
      "html": "<div style=\"position:relative;width:120px;height:120px;\"><div style=\"width:100%;height:100%;background:var(--bg);border:6px solid var(--border);border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-size:14px;font-weight:700;text-transform:uppercase;color:var(--on-bg);\">CUT</div><div style=\"position:absolute;top:10px;left:10px;width:100px;height:100px;border-radius:50%;background:var(--primary);opacity:0.2;pointer-events:none;\"></div></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — CONSTRUCT</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — REVOLUTION</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — WORKERS UNITE</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — ART FOR THE MASSES, NOT FOR THE ELITE. FORM FOLLOWS FUNCTION.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — VOTE NOW</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Do not use centered layouts or horizontal/vertical grid systems. Constructivism demands asymmetric diagonal composition.",
      "avoid": {
        "html": "<div style=\"display:flex;justify-content:center;align-items:center;height:100vh;\"><p style=\"font-family:Paytone One;font-size:24px;text-transform:uppercase;\">CENTERED TEXT — WRONG</p></div>",
        "label": "Avoid"
      },
      "rule": "Do not use centered layouts or horizontal/vertical grid systems. Constructivism demands asymmetric diagonal composition.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Avoid any rounded corners, shadows, or gradients. All edges must be sharp and flat.",
      "avoid": {
        "html": "<button style=\"background:#CC0000;color:white;border-radius:8px;box-shadow:0 4px 6px rgba(0,0,0,0.3);padding:12px 24px;font-family:Arial;\">ROUNDED & SHADOW — WRONG</button>",
        "label": "Avoid"
      },
      "rule": "Avoid any rounded corners, shadows, or gradients. All edges must be sharp and flat.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not use lowercase, serif fonts, or decorative typefaces. Everything must be uppercase and geometric.",
      "avoid": {
        "html": "<p style=\"font-family:'Times New Roman';font-size:20px;color:#333;text-transform:none;\">This is not constructivist typography.</p>",
        "label": "Avoid"
      },
      "rule": "Do not use lowercase, serif fonts, or decorative typefaces. Everything must be uppercase and geometric.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not introduce colors outside the red-black-white palette. No green, blue, yellow accents.",
      "avoid": {
        "html": "<div style=\"background:#2196F3;color:white;padding:16px;\">BLUE IS FORBIDDEN</div>",
        "label": "Avoid"
      },
      "rule": "Do not introduce colors outside the red-black-white palette. No green, blue, yellow accents.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "doAvoidStyle": {
    "model": "flat, no depth, no rounding, no gradients, no shadows",
    "forbidden": "rounded corners, drop shadows, box shadows, linear or radial gradients, embossing, beveling, 3D transforms, perspective"
  },
  "effects": [],
  "motion": [],
  "colors": {
    "primary": "#CC0000",
    "onPrimary": "#FFFFFF",
    "secondary": "#000000",
    "onSecondary": "#FFFFFF",
    "neutral": "#FFFFFF",
    "onSurface": "#000000",
    "surfaceContainer": "#F5F5F5",
    "outline": "#000000",
    "error": "#CC0000"
  },
  "typography": {
    "display": {
      "fontFamily": "Anton",
      "fontSize": "60px",
      "fontWeight": 900,
      "lineHeight": 1,
      "letterSpacing": "-0.05em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "Anton",
      "fontSize": "36px",
      "fontWeight": 800,
      "lineHeight": 1.25,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "Anton",
      "fontSize": "24px",
      "fontWeight": 700,
      "lineHeight": 1.375,
      "letterSpacing": "0.025em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "Anton",
      "fontSize": "16px",
      "fontWeight": 600,
      "lineHeight": 1.5,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "label": {
      "fontFamily": "Anton",
      "fontSize": "14px",
      "fontWeight": 700,
      "lineHeight": 1,
      "letterSpacing": "0.05em",
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
    "componentInternal": "16px",
    "sectionInternal": "24px",
    "pageEdge": "32px",
    "gapComponent": "16px",
    "gapSection": "32px",
    "heightSm": "40px",
    "heightMd": "48px",
    "heightLg": "64px",
    "icon": "24px"
  },
  "interactionModel": {
    "hover": {
      "color": "var(--primary)",
      "borderColor": "var(--primary)",
      "textDecoration": "underline"
    },
    "focus": {
      "borderWidth": "4px",
      "borderColor": "var(--primary)",
      "outline": "none"
    },
    "active": {
      "opacity": "0.75",
      "transform": "translate(2px, 2px)"
    }
  },
  "layouts": {
    "copy": {
      "heroKicker": "REVOLUTIONARY DESIGN SYSTEM",
      "heroHeadline": "PROUN: BUILD THE NEW WORLD",
      "heroSub": "CONSTRUCTIVIST TOOLS FOR THE MASSES",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#CC0000;color:#FFFFFF;border:none;padding:16px;font-family:Anton;font-size:16px;font-weight:700;text-transform:uppercase;cursor:pointer;\">INITIALIZE</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#000000;color:#FFFFFF;border:none;padding:16px;font-family:Anton;font-size:16px;font-weight:700;text-transform:uppercase;cursor:pointer;\">VIEW MANIFESTO</button>",
      "navLinks": [
        "FACTORY",
        "CELLS",
        "PLANS",
        "ARCHIVE"
      ],
      "features": [
        {
          "title": "DIAGONAL GRID",
          "desc": "COMPOSE ALONG 30° & 45° AXES. NO RIGHT ANGLES.",
          "icon": "📐",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📐 DIAGONAL GRID</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">COMPOSE ALONG 30° & 45° AXES. NO RIGHT ANGLES.</div></div>"
        },
        {
          "title": "PHOTOMONTAGE ENGINE",
          "desc": "GENERATE HIGH-CONTRAST HALFTONE COMPOSITIONS.",
          "icon": "📸",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📸 PHOTOMONTAGE ENGINE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">GENERATE HIGH-CONTRAST HALFTONE COMPOSITIONS.</div></div>"
        },
        {
          "title": "RED-BLACK-WHITE PALETTE",
          "desc": "STRICT SPOT-COLOR DISCIPLINE. NO ADDITIONAL HUES.",
          "icon": "🎨",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🎨 RED-BLACK-WHITE PALETTE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">STRICT SPOT-COLOR DISCIPLINE. NO ADDITIONAL HUES.</div></div>"
        },
        {
          "title": "STENCIL CUT-OUTS",
          "desc": "REVEAL CONTENT THROUGH GEOMETRIC VOIDS.",
          "icon": "✂️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">✂️ STENCIL CUT-OUTS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">REVEAL CONTENT THROUGH GEOMETRIC VOIDS.</div></div>"
        }
      ],
      "ctaStripHeadline": "JOIN THE CONSTRUCTION BRIGADE",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#CC0000;color:#FFFFFF;border:none;padding:16px;font-family:Anton;font-size:16px;font-weight:700;text-transform:uppercase;cursor:pointer;\">ENLIST NOW</button>",
      "sidebarBrand": "PROUN v1.0",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "FACTORY FLOOR",
          "active": true
        },
        {
          "icon": "◉",
          "label": "MATERIALS STORE",
          "active": false
        }
      ],
      "dashboardTitle": "FACTORY COMMAND",
      "metrics": [
        {
          "label": "ACTIVE CELLS",
          "value": "47",
          "delta": "+12",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "PLANS APPROVED",
          "value": "132",
          "delta": "+8%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "MATERIAL DEFICIT",
          "value": "3",
          "delta": "-2",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "PROPAGANDA OUTPUT",
          "value": "89",
          "delta": "+23%",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "OUTPUT BY QUARTER",
      "panelATitle": "MATERIAL ALLOCATION",
      "panelARows": [
        {
          "label": "STEEL",
          "value": "2400 KG",
          "pct": 100
        },
        {
          "label": "CONCRETE",
          "value": "1500 KG",
          "pct": 100
        },
        {
          "label": "GLASS",
          "value": "800 KG",
          "pct": 100
        },
        {
          "label": "TIMBER",
          "value": "1200 KG",
          "pct": 100
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "CRITICAL NODES",
      "panelBCells": [
        {
          "label": "SECTOR A",
          "value": "OPERATIONAL",
          "state": "ok"
        },
        {
          "label": "SECTOR B",
          "value": "AT RISK",
          "state": "warn"
        },
        {
          "label": "SECTOR C",
          "value": "OPERATIONAL",
          "state": "err"
        },
        {
          "label": "SECTOR D",
          "value": "CLOSED",
          "state": "ok"
        },
        {
          "label": "SECTOR E",
          "value": "UNDER REPAIR",
          "state": "warn"
        },
        {
          "label": "SECTOR F",
          "value": "OPERATIONAL",
          "state": "err"
        },
        {
          "label": "SECTOR G",
          "value": "AT RISK",
          "state": "ok"
        },
        {
          "label": "SECTOR H",
          "value": "STANDBY",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN"
      ],
      "series": [
        {
          "data": [
            12,
            19,
            23,
            28,
            32,
            36,
            36,
            36,
            36,
            36,
            36,
            36
          ],
          "label": "PLANS",
          "axis": "left",
          "color": "#CC0000"
        },
        {
          "data": [
            8,
            14,
            18,
            22,
            27,
            31,
            31,
            31,
            31,
            31,
            31,
            31
          ],
          "label": "BUILDS",
          "axis": "right-1",
          "color": "#000000"
        }
      ]
    },
    "splashRender": "function(el) { el.innerHTML = '<div style=\"position:relative;overflow:hidden;min-height:400px;background:#FFFFFF;\"><div style=\"position:absolute;top:0;left:0;width:60%;height:100%;background:#CC0000;clip-path:polygon(0 0, 100% 0, 80% 100%, 0 100%);\"></div><div style=\"position:absolute;bottom:32px;right:32px;text-align:right;\"><div style=\"font-family:var(--font-display);font-size:60px;font-weight:900;line-height:1;letter-spacing:-0.05em;text-transform:uppercase;color:#000000;\">PROUN</div><div style=\"font-family:var(--font-display);font-size:36px;font-weight:800;line-height:1.25;letter-spacing:-0.025em;text-transform:uppercase;color:#CC0000;\">BUILD THE NEW</div></div></div>'; }",
    "showcaseRender": "function(el) { el.style.cssText = 'padding:32px;background:#FFFFFF;'; var html = '<div style=\"display:grid;grid-template-columns:repeat(2,1fr);gap:24px;\">'; var features = ['DIAGONAL GRID','PHOTOMONTAGE ENGINE','RED-BLACK-WHITE PALETTE','STENCIL CUT-OUTS']; var descs = ['COMPOSE ALONG 30° & 45° AXES. NO RIGHT ANGLES.','GENERATE HIGH-CONTRAST HALFTONE COMPOSITIONS.','STRICT SPOT-COLOR DISCIPLINE. NO ADDITIONAL HUES.','REVEAL CONTENT THROUGH GEOMETRIC VOIDS.']; for(var i=0;i<features.length;i++){ html += '<div style=\"border:4px solid #000000;padding:24px;background:#FFFFFF;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#CC0000;margin-bottom:8px;\">'+features[i]+'</div><div style=\"font-size:12px;line-height:1.55;color:#000000;\">'+descs[i]+'</div></div>'; } html += '</div>'; el.innerHTML = html; }",
    "panelCRender": "function(el) { el.style.cssText = 'padding:24px;background:#FFFFFF;border:4px solid #000000;'; el.innerHTML = '<div style=\"font-family:var(--font-display);font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#CC0000;margin-bottom:16px;\">MATERIAL ALLOCATION</div><div style=\"display:flex;flex-direction:column;gap:8px;\"><div style=\"display:flex;justify-content:space-between;font-size:12px;font-weight:700;\"><span>STEEL</span><span>2400 KG</span></div><div style=\"height:8px;background:#000000;width:100%;\"><div style=\"height:100%;width:100%;background:#CC0000;\"></div></div><div style=\"display:flex;justify-content:space-between;font-size:12px;font-weight:700;\"><span>CONCRETE</span><span>1500 KG</span></div><div style=\"height:8px;background:#000000;width:100%;\"><div style=\"height:100%;width:100%;background:#CC0000;\"></div></div><div style=\"display:flex;justify-content:space-between;font-size:12px;font-weight:700;\"><span>GLASS</span><span>800 KG</span></div><div style=\"height:8px;background:#000000;width:100%;\"><div style=\"height:100%;width:100%;background:#CC0000;\"></div></div></div>'; }",
    "heroBackground": "function(el) { var div = document.createElement('div'); div.style.cssText = 'position:absolute;inset:0;background:#CC0000;clip-path:polygon(0 0, 60% 0, 100% 100%, 0 100%);'; el.appendChild(div); }",
    "ctaBackground": "function(el) { el.style.background = '#000000'; var stripe = document.createElement('div'); stripe.style.cssText = 'position:absolute;top:0;right:0;width:40%;height:100%;background:#CC0000;clip-path:polygon(0 0, 100% 0, 100% 100%, 40% 100%);'; el.appendChild(stripe); }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'height:8px;background:#000000;margin:0;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = '#F5F5F5'; var grid = document.createElement('div'); grid.style.cssText = 'position:absolute;inset:0;opacity:0.05;background-image:linear-gradient(0deg, #000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px);background-size:40px 40px;'; el.appendChild(grid); }",
    "surfaceOverlay": "function(el) { var ov = document.createElement('div'); ov.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;background:repeating-linear-gradient(45deg, rgba(204,0,0,0.03) 0px, rgba(204,0,0,0.03) 4px, transparent 4px, transparent 8px);'; el.appendChild(ov); }"
  },
  "shadcnTokens": {
    "--color-background": "#FFFFFF",
    "--color-popover": "#FFFFFF",
    "--color-foreground": "#000000",
    "--color-card-foreground": "#000000",
    "--color-popover-foreground": "#000000",
    "--color-card": "#F5F5F5",
    "--color-muted": "#F5F5F5",
    "--color-muted-foreground": "#1A1A1A",
    "--color-primary": "#CC0000",
    "--color-ring": "#CC0000",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#000000",
    "--color-accent": "#000000",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
    "--color-border": "#000000",
    "--color-input": "#000000",
    "--color-destructive": "#CC0000"
  },
  "shadcnTokensClassic": {
    "--background": "#FFFFFF",
    "--popover": "#FFFFFF",
    "--foreground": "#000000",
    "--card-foreground": "#000000",
    "--popover-foreground": "#000000",
    "--card": "#F5F5F5",
    "--muted": "#F5F5F5",
    "--muted-foreground": "#1A1A1A",
    "--primary": "#CC0000",
    "--ring": "#CC0000",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#000000",
    "--accent": "#000000",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#CC0000"
  }
});
