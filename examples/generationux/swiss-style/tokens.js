registerSystem({
  "meta": {
    "name": "Swiss Style",
    "tagline": "The rationalist apotheosis of graphic design",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=Arimo:wght@400;700&display=swap"
  },
  "yamlTokens": {
    "name": "Swiss Style",
    "colors": {
      "primary": "#DA291C",
      "on-primary": "#FFFFFF",
      "secondary": "#000000",
      "surface-container-lowest": "#FFFFFF",
      "surface-container-low": "#F5F2E8",
      "on-surface": "#000000",
      "outline": "#000000",
      "error": "#C62828",
      "on-error": "#FFFFFF",
      "surface-container-lowest-dark": "#000000",
      "on-surface-dark": "#FFFFFF",
      "surface-container-low-dark": "#1A1A1A",
      "outline-dark": "#FFFFFF"
    },
    "typography": {
      "display": {
        "fontFamily": "Inter, Arimo, sans-serif",
        "fontSize": "60px",
        "fontWeight": 900,
        "lineHeight": 1.25,
        "letterSpacing": "0.05em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Inter, Arimo, sans-serif",
        "fontSize": "36px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Inter, Arimo, sans-serif",
        "fontSize": "20px",
        "fontWeight": 600,
        "lineHeight": 1.375,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Inter, Arimo, sans-serif",
        "fontSize": "14px",
        "fontWeight": 400,
        "lineHeight": 1.375,
        "letterSpacing": "0em",
        "textTransform": "normal-case"
      },
      "label": {
        "fontFamily": "Inter, Arimo, sans-serif",
        "fontSize": "12px",
        "fontWeight": 500,
        "lineHeight": 1.25,
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
      "height-sm": "32px",
      "height-md": "40px",
      "height-lg": "48px",
      "icon": "24px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "transparent",
        "textColor": "{colors.secondary}",
        "rounded": "{rounded.button}",
        "height": "40px"
      },
      "button-primary-hover": {
        "backgroundColor": "{colors.primary}",
        "textColor": "{colors.on-primary}",
        "rounded": "{rounded.button}",
        "height": "40px"
      },
      "card": {
        "backgroundColor": "{colors.surface-container-lowest}",
        "rounded": "{rounded.card}",
        "padding": "24px"
      },
      "input": {
        "backgroundColor": "transparent",
        "textColor": "{colors.on-surface}",
        "rounded": "{rounded.input}",
        "height": "40px",
        "padding": "8px"
      },
      "input-focus": {
        "backgroundColor": "transparent",
        "textColor": "{colors.on-surface}",
        "rounded": "{rounded.input}",
        "height": "40px"
      },
      "rule": {
        "backgroundColor": "{colors.primary}",
        "height": "4px",
        "width": "100%"
      },
      "accent-block": {
        "backgroundColor": "{colors.primary}",
        "size": "16px"
      }
    },
    "version": "alpha",
    "description": "Swiss Style is the rationalist apotheosis of graphic design — a formal language built on mathematical grids, extreme typographic contrast, and objective photography. It radiates clarity, rigor, and machine-like precision.",
    "provenance": {
      "coverage_status": "sparse",
      "identity_description": "The slug `swiss-style` most plausibly refers to the International Typographic Style (also known as the Swiss Style), a graphic design movement that emerged in Switzerland in the 1950s. Its core tenets are objectivity, clarity, grid-based composition, asymmetric layout, sans-serif typography, and the use of photography over illustration. This record treats the Swiss Style as a coherent visual i",
      "manual_enrichment_required": false,
      "imagery_count": 4,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "www.emuseum.ch",
          "count": 2
        },
        {
          "host": "collection.cooperhewitt.org",
          "count": 1
        },
        {
          "host": "en.wikipedia.org",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://collection.cooperhewitt.org/objects/18633987/",
          "host": "collection.cooperhewitt.org",
          "institution": "Cooper Hewitt, Smithsonian Design Museum",
          "confidence_original": "low"
        },
        {
          "url": "https://www.emuseum.ch/objects/12345",
          "host": "www.emuseum.ch",
          "institution": "Museum für Gestaltung Zürich",
          "confidence_original": "low"
        },
        {
          "url": "https://en.wikipedia.org/wiki/International_Typographic_Style",
          "host": "en.wikipedia.org",
          "institution": null,
          "confidence_original": "high"
        },
        {
          "url": "https://www.emuseum.ch/start",
          "host": "www.emuseum.ch",
          "institution": "Museum für Gestaltung Zürich",
          "confidence_original": "medium"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Akzidenz-Grotesk",
          "foundry": "Berthold",
          "year": 1898,
          "google_fonts": "Archivo",
          "attestation": "attested"
        },
        {
          "name": "Helvetica",
          "foundry": "Haas Type Foundry",
          "year": 1957,
          "google_fonts": "Inter",
          "attestation": "attested"
        },
        {
          "name": "Univers",
          "foundry": "Deberny & Peignot",
          "year": 1957,
          "google_fonts": "Manrope",
          "attestation": "attested"
        }
      ],
      "flags": [
        "sparse_imagery"
      ],
      "honest_gaps": [
        {
          "\"1. **Colour values**": "No verified hex/Pantone/RAL for any specific canonical artefact.\""
        }
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#FFFFFF",
    "--on-bg": "#000000",
    "--primary": "#DA291C",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#000000",
    "--on-secondary": "#FFFFFF",
    "--surface": "#FFFFFF",
    "--on-bg-muted": "#3D3D3D",
    "--border": "#000000",
    "--error": "#C62828",
    "--font-display": "Inter, Arimo, sans-serif",
    "--font-body": "Inter, Arimo, sans-serif",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "error": "#C62828",
    "on-error": "#FFFFFF",
    "primary": "#DA291C",
    "on-primary": "#FFFFFF",
    "secondary": "#000000",
    "on-secondary": "#FFFFFF",
    "err": "#C62828",
    "warn": "#FF8C42",
    "ok": "#22C55E",
    "deltaUp": "#22C55E",
    "deltaDown": "#C62828",
    "deltaFlat": "#3D3D3D",
    "live": "#DA291C",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#3D3D3D",
    "chartFont": "Space Grotesk"
  },
  "chartStyle": {
    "gridLines": "none",
    "colors": [
      "#000000",
      "#DA291C"
    ],
    "fontFamily": "Inter, Arimo, sans-serif",
    "backgroundColor": "#FFFFFF",
    "borderColor": "#000000",
    "axisStyle": "solid",
    "barStyle": "flat-solid",
    "lineStyle": "solid-thin",
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#3D3D3D"
  },
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "paper",
    "activated": true,
    "parameters": {
      "grain": {
        "technique": "svg feTurbulence",
        "baseFrequency": 0.65,
        "numOctaves": 3,
        "type": "fractalNoise",
        "opacity": 0.1,
        "mixBlendMode": "overlay",
        "color": "monochrome",
        "animation": "none"
      }
    }
  },
  "globalFilter": "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none;\"><defs><filter id=\"paper-grain\" x=\"0%\" y=\"0%\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" result=\"noise\"/><feColorMatrix type=\"matrix\" values=\"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.1 0\" in=\"noise\" result=\"coloredNoise\"/><feBlend mode=\"overlay\" in=\"SourceGraphic\" in2=\"coloredNoise\"/></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-body); background-color: var(--bg); color: var(--on-bg); margin: 0;",
  "globalCss": ".ds-layout-frame { background-color: var(--bg); color: var(--on-bg); font-family: var(--font-body); }\n.ds-layout-frame .grid-container { display: grid; grid-template-columns: repeat(6, 1fr); gap: var(--gap-component, 16px); }\n.ds-layout-frame .thick-rule { background-color: var(--primary); height: 4px; width: 100%; border: none; }\n.ds-layout-frame .accent-block { background-color: var(--primary); width: 16px; height: 16px; }\n.ds-layout-frame .colophon { position: absolute; bottom: 16px; right: 16px; font-size: 6pt; text-transform: uppercase; letter-spacing: 0.05em; color: var(--secondary-col); text-align: right; }\n.ds-layout-frame .nav-bar { display: flex; align-items: center; gap: 0; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 500; }\n.ds-layout-frame .nav-link { text-decoration: none; color: var(--secondary-col); padding: 8px 12px; border-bottom: 2px solid transparent; transition: border-bottom 150ms linear; }\n.ds-layout-frame .nav-link.active { border-bottom: 2px solid var(--primary); }\n.ds-layout-frame .nav-link:hover { border-bottom: 2px solid var(--primary); }\n.ds-layout-frame .nav-separator { display: inline-block; padding: 0 4px; color: var(--secondary-col); }\n.ds-layout-frame { filter: url('#paper-grain'); }",
  "interactionModel": {
    "hover": {
      "button": "{\"backgroundColor\":\"var(--primary)\",\"color\":\"var(--on-primary)\",\"transition\":\"background-color 150ms linear, color 150ms linear\"}",
      "navLink": {
        "borderBottom": "2px solid var(--primary)",
        "transition": "border-bottom 150ms linear"
      }
    },
    "focus": {
      "button": {
        "outline": "2px solid var(--primary)",
        "outlineOffset": "2px"
      },
      "input": {
        "borderBottom": "2px solid var(--primary)"
      }
    },
    "active": {
      "button": {
        "backgroundColor": "#B71C1C"
      }
    }
  },
  "interactionStyles": ".ds-layout-frame button:hover { background-color: var(--primary); color: var(--on-primary); transition: background-color 150ms linear, color 150ms linear; } .ds-layout-frame button:active { background-color: #B71C1C; } .ds-layout-frame button:focus { outline: 2px solid var(--primary); outline-offset: 2px; } .ds-layout-frame input:focus { border-bottom: 2px solid var(--primary); } .ds-layout-frame .nav-link:hover { border-bottom: 2px solid var(--primary); } .ds-layout-frame .nav-link.active { border-bottom: 2px solid var(--primary); }",
  "elevation": {
    "0": "0px",
    "1": "0px",
    "2": "0px",
    "3": "0px"
  },
  "spacing": {
    "component-internal": "16px",
    "section-internal": "24px",
    "page-edge": "32px",
    "gap-component": "16px",
    "gap-section": "32px",
    "height-sm": "32px",
    "height-md": "40px",
    "height-lg": "48px",
    "icon": "24px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "0px"
  },
  "dashboardStyle": {
    "layout": "Grid-based, 6 columns with 16px gaps. Asymmetric panel sizes.",
    "density": "Moderate; generous whitespace between panels (32px vertical gap).",
    "panelTreatment": "Flat white cards with 4px red accent bar at top. No borders, no shadows.",
    "dataVizStyle": "Monochromatic line charts with red accent for key data points. No fill, no gradient. Axes with thin solid lines.",
    "signatureElement": "Horizontal thick red rule separating header from panel content."
  },
  "landingStyle": {
    "heroApproach": "Full-width duotone background (black + red) with massive all-caps display type overlaid. Asymmetric layout with type pushed to left third; vertical red accent bar on left edge.",
    "scrollBehavior": "Linear smooth scroll with 150ms transition on sticky navigation. No parallax or fade effects.",
    "ctaStyle": "Flat button with red border on dark background. Hover fills red. Text: uppercase 12px.",
    "signatureMoment": "Upon load, a thick red rule animates in from left (width 0 to 100%). Followed by the colossal display headline. Duotone image fades in behind."
  },
  "buttons": [
    {
      "name": "Primary Button",
      "desc": "Flat, borderless button with red background on hover. Label in uppercase sans-serif. Aligns to 4px baseline grid.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"display:inline-flex;align-items:center;justify-content:center;height:40px;padding:0 24px;font-family:var(--font-display);font-size:12px;font-weight:500;letter-spacing:0.05em;text-transform:uppercase;color:var(--on-bg);background:transparent;border:2px solid var(--primary);cursor:pointer;transition:background 150ms linear, color 150ms linear;\">Label</button>",
      "label": "Primary Button",
      "note": "Flat, borderless button with red background on hover. Label in uppercase sans-serif. Aligns to 4px baseline grid."
    },
    {
      "name": "Secondary (Outline) Button",
      "desc": "Button with black border and transparent background. Hover fills black and inverts text.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"display:inline-flex;align-items:center;justify-content:center;height:40px;padding:0 24px;font-family:var(--font-display);font-size:12px;font-weight:500;letter-spacing:0.05em;text-transform:uppercase;color:var(--on-bg);background:transparent;border:2px solid var(--border);cursor:pointer;transition:background 150ms linear, color 150ms linear;\">Label</button>",
      "label": "Secondary (Outline) Button",
      "note": "Button with black border and transparent background. Hover fills black and inverts text."
    },
    {
      "name": "Ghost Button",
      "desc": "Minimal button with no border; uses text only. Hover adds underline.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"display:inline-flex;align-items:center;justify-content:center;height:40px;padding:0 8px;font-family:var(--font-display);font-size:12px;font-weight:500;letter-spacing:0.05em;text-transform:uppercase;color:var(--on-bg);background:transparent;border:none;cursor:pointer;text-decoration:none;transition:text-decoration 150ms linear;\">Label</button>",
      "label": "Ghost Button",
      "note": "Minimal button with no border; uses text only. Hover adds underline."
    }
  ],
  "cards": [
    {
      "name": "Standard Content Card",
      "desc": "White card with 4px red accent bar at top. No rounded corners, no shadow. Padding 24px.",
      "html": "<div style=\"background:var(--surface);border-top:4px solid var(--primary);padding:24px;\"><h3 style=\"font-family:var(--font-display);font-size:20px;font-weight:600;letter-spacing:0.025em;text-transform:uppercase;color:var(--on-bg);margin:0 0 8px;\">Headline</h3><p style=\"font-family:var(--font-body);font-size:14px;font-weight:400;line-height:1.375;color:var(--on-bg-muted);margin:0;\">Body text aligned left in grid.</p></div>",
      "label": "Standard Content Card",
      "note": "White card with 4px red accent bar at top. No rounded corners, no shadow. Padding 24px."
    },
    {
      "name": "Duotone Image Card",
      "desc": "Card containing a high-contrast duotone photograph (black + red) cropped to a rectangle. No border, no corner radius.",
      "html": "<div style=\"background:var(--surface);padding:0;\"><div style=\"position:relative;width:100%;height:200px;background:var(--border);overflow:hidden;\"><div style=\"position:absolute;inset:0;mix-blend-mode:multiply;background:linear-gradient(135deg, var(--on-bg) 30%, var(--primary) 100%);\"></div><div style=\"position:absolute;inset:0;background-image:url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"%23DA291C\" viewBox=\"0 0 100 100\"><rect width=\"100\" height=\"100\"/></svg>');background-size:cover;filter:grayscale(1) contrast(1.5);mix-blend-mode:luminosity;\"></div></div><div style=\"padding:24px;\"><h3 style=\"font-family:var(--font-display);font-size:20px;font-weight:600;letter-spacing:0.025em;text-transform:uppercase;color:var(--on-bg);margin:0 0 8px;\">Title</h3><p style=\"font-family:var(--font-body);font-size:14px;font-weight:400;line-height:1.375;color:var(--on-bg-muted);margin:0;\">Description</p></div></div>",
      "label": "Duotone Image Card",
      "note": "Card containing a high-contrast duotone photograph (black + red) cropped to a rectangle. No border, no corner radius."
    }
  ],
  "forms": [
    {
      "name": "Text Input",
      "desc": "Flat input with black bottom border. No rounded corners. Label above in uppercase.",
      "html": "<div style=\"display:flex;flex-direction:column;gap:8px;\"><label style=\"font-family:var(--font-display);font-size:12px;font-weight:500;letter-spacing:0.05em;text-transform:uppercase;color:var(--on-bg);\">Field Label</label><input type=\"text\" placeholder=\"\" style=\"height:40px;padding:8px;font-family:var(--font-body);font-size:14px;color:var(--on-bg);background:transparent;border:none;border-bottom:2px solid var(--border);outline:none;transition:border-color 150ms linear;\" onfocus=\"this.style.borderColor='var(--primary)'\" onblur=\"this.style.borderColor='var(--border)'\"></div>",
      "label": "Text Input",
      "stateLabel": "Flat input with black bottom border. No rounded corners. Label above in uppercase."
    },
    {
      "name": "Select (Dropdown)",
      "desc": "Dropdown styled as flat rectangle with no border radius. Uses custom arrow.",
      "html": "<div style=\"display:flex;flex-direction:column;gap:8px;\"><label style=\"font-family:var(--font-display);font-size:12px;font-weight:500;letter-spacing:0.05em;text-transform:uppercase;color:var(--on-bg);\">Option</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"height:40px;padding:8px;font-family:var(--font-body);font-size:14px;color:var(--on-bg);background:transparent;border:2px solid var(--border);border-radius:0;appearance:none;cursor:pointer;\"><option>Option 1</option><option>Option 2</option></select></div>",
      "label": "Select (Dropdown)",
      "stateLabel": "Dropdown styled as flat rectangle with no border radius. Uses custom arrow."
    },
    {
      "name": "Checkbox (Toggle)",
      "desc": "Binary toggle styled as a small rectangle with red fill when active. No rounded corners.",
      "html": "<label style=\"display:flex;align-items:center;gap:12px;font-family:var(--font-body);font-size:14px;cursor:pointer;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"width:16px;height:16px;border:2px solid var(--border);background:transparent;appearance:none;position:relative;cursor:pointer;\"><span style=\"font-size:14px;color:var(--on-bg);\">Toggle label</span></label>",
      "label": "Checkbox (Toggle)",
      "stateLabel": "Binary toggle styled as a small rectangle with red fill when active. No rounded corners."
    }
  ],
  "extraComponents": [
    {
      "name": "Thick Rule",
      "desc": "4px horizontal rule in primary red. Spans full width of grid column.",
      "html": "<hr style=\"border:none;border-top:4px solid var(--primary);margin:16px 0;width:100%;\">"
    },
    {
      "name": "Grid Spacer",
      "desc": "Empty div that enforces grid columns. Used to create asymmetrical negative space.",
      "html": "<div style=\"width:100%;height:1px;background:transparent;grid-column:span 2;\"></div>"
    },
    {
      "name": "Colophon",
      "desc": "6pt uppercase text block placed at bottom right of page. Contains publication credits.",
      "html": "<div style=\"position:absolute;bottom:32px;right:32px;font-family:var(--font-display);font-size:6px;font-weight:400;letter-spacing:0.05em;text-transform:uppercase;color:var(--on-bg-muted);text-align:right;\">Design: Swiss System · 2024</div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — RIGOROUS GRID</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — MODULAR HIERARCHY</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — OBJECTIVE COMMUNICATION</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — Swiss Style uses grotesque sans-serif in extreme size contrast. All type aligns to baseline grid.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — CAPTION · SCHWYZ 1964</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Centered compositions break the asymmetric grid discipline. Text must be left-aligned.",
      "avoid": {
        "html": "<div style=\"text-align:center;\"><h1 style=\"font-family:var(--font-display);\">Centered</h1><p style=\"font-family:var(--font-body);\">This breaks the grid.</p></div>",
        "label": "Avoid"
      },
      "rule": "Centered compositions break the asymmetric grid discipline. Text must be left-aligned.",
      "do": {
        "label": "Do",
        "html": "<div style=\"height:4px;width:100%;background:var(--primary);\"></div>"
      }
    },
    {
      "desc": "Rounded corners soften the rationalist character. All corners must be sharp (0px).",
      "avoid": {
        "html": "<button style=\"border-radius:8px;background:var(--primary);color:var(--on-primary);\">Rounded</button>",
        "label": "Avoid"
      },
      "rule": "Rounded corners soften the rationalist character. All corners must be sharp (0px).",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Drop shadows create false depth. Swiss Style is flat and shadowless.",
      "avoid": {
        "html": "<div style=\"box-shadow:2px 2px 8px rgba(0,0,0,0.2);padding:24px;background:var(--surface);\">Shadow</div>",
        "label": "Avoid"
      },
      "rule": "Drop shadows create false depth. Swiss Style is flat and shadowless.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Serif typefaces contradict the grotesque-only rule. Use sans-serif exclusively.",
      "avoid": {
        "html": "<p style=\"font-family:'Times New Roman', serif;\">Serif text</p>",
        "label": "Avoid"
      },
      "rule": "Serif typefaces contradict the grotesque-only rule. Use sans-serif exclusively.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "doAvoidStyle": {
    "desc": "Never use decorative illustrations, gradients, shadows, or centered alignment.",
    "avoid": {
      "html": "<img src=\"illustration.svg\" style=\"filter:drop-shadow(0 2px 4px black);\">"
    }
  },
  "effects": [],
  "motion": [],
  "colors": {
    "primary": "#DA291C",
    "on-primary": "#FFFFFF",
    "secondary": "#000000",
    "on-secondary": "#FFFFFF",
    "surface": "#FFFFFF",
    "on-surface": "#000000",
    "surface-dim": "#F5F2E8",
    "error": "#C62828",
    "on-error": "#FFFFFF",
    "outline": "#000000"
  },
  "typography": {
    "display": {
      "fontFamily": "var(--font-display)",
      "fontSize": "60px",
      "fontWeight": "900",
      "lineHeight": "1.25",
      "letterSpacing": "0.05em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "var(--font-display)",
      "fontSize": "36px",
      "fontWeight": "700",
      "lineHeight": "1.25",
      "letterSpacing": "0.025em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "var(--font-display)",
      "fontSize": "20px",
      "fontWeight": "600",
      "lineHeight": "1.375",
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "var(--font-body)",
      "fontSize": "14px",
      "fontWeight": "400",
      "lineHeight": "1.375",
      "letterSpacing": "0em",
      "textTransform": "none"
    },
    "label": {
      "fontFamily": "var(--font-display)",
      "fontSize": "12px",
      "fontWeight": "500",
      "lineHeight": "1.25",
      "letterSpacing": "0.05em",
      "textTransform": "uppercase"
    }
  },
  "layouts": {
    "copy": {
      "heroKicker": "INTERNATIONAL TYPOGRAPHIC STYLE",
      "heroHeadline": "GRID & RULE",
      "heroSub": "A rational system for layout, typography and photography",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:transparent;color:#000000;height:40px;border:2px solid #000000;padding:0 24px;font-family:Inter,Arimo,sans-serif;font-size:12px;font-weight:500;letter-spacing:0.05em;text-transform:uppercase;cursor:pointer;\">GENERATE GRID</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#000000;color:#FFFFFF;height:40px;border:2px solid #000000;padding:0 24px;font-family:Inter,Arimo,sans-serif;font-size:12px;font-weight:500;letter-spacing:0.05em;text-transform:uppercase;cursor:pointer;\">IMPORT SPECS</button>",
      "navLinks": [
        "GRID",
        "TYPE",
        "PHOTO",
        "COLOPHON"
      ],
      "features": [
        {
          "title": "MODULAR GRID",
          "desc": "Align every element to an invisible 6‑column raster. Asymmetric compositions balanced by mathematical discipline.",
          "icon": "⬛",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⬛ MODULAR GRID</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Align every element to an invisible 6‑column raster. Asymmetric compositions balanced by mathematical discipline.</div></div>"
        },
        {
          "title": "DUOTONE ENGINE",
          "desc": "Convert photography to black‑and‑red duotone. Preserve high contrast with minimal midtones.",
          "icon": "▲",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">▲ DUOTONE ENGINE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Convert photography to black‑and‑red duotone. Preserve high contrast with minimal midtones.</div></div>"
        },
        {
          "title": "TYPEOGRAPHIC SCALE",
          "desc": "Extreme contrast: massive all‑caps display headings paired with 8pt uppercase captions. Single grotesque family.",
          "icon": "●",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">● TYPEOGRAPHIC SCALE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Extreme contrast: massive all‑caps display headings paired with 8pt uppercase captions. Single grotesque family.</div></div>"
        },
        {
          "title": "ACCENT BLOCKS",
          "desc": "Structural red (#DA291C) elements: thick rules, small accent blocks, never decorative backgrounds.",
          "icon": "▬",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">▬ ACCENT BLOCKS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Structural red (#DA291C) elements: thick rules, small accent blocks, never decorative backgrounds.</div></div>"
        }
      ],
      "ctaStripHeadline": "BEGIN YOUR RATIONAL LAYOUT",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:transparent;color:#000000;height:48px;border:2px solid #DA291C;padding:0 32px;font-family:Inter,Arimo,sans-serif;font-size:14px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;cursor:pointer;\">ACTIVATE GRID</button>",
      "sidebarBrand": "ORTHO",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "RULES",
          "active": true
        },
        {
          "icon": "◉",
          "label": "TYPESETS",
          "active": false
        }
      ],
      "dashboardTitle": "GRID COMPOSER",
      "metrics": [
        {
          "label": "COLUMNS",
          "value": "12",
          "delta": "±0",
          "dir": "neutral",
          "direction": "neutral"
        },
        {
          "label": "ROWS",
          "value": "8",
          "delta": "+1",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "GUTTER",
          "value": "16PX",
          "delta": "−2PX",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "MARGIN",
          "value": "32PX",
          "delta": "±0",
          "dir": "neutral",
          "direction": "neutral"
        }
      ],
      "chartTitle": "LINE MEASURES",
      "panelATitle": "GLYPH METRICS",
      "panelARows": [
        {
          "label": "BASELINE",
          "value": "0",
          "pct": 0
        },
        {
          "label": "ASCENDER",
          "value": "+72",
          "pct": 72
        },
        {
          "label": "CAP HEIGHT",
          "value": "+64",
          "pct": 64
        },
        {
          "label": "X-HEIGHT",
          "value": "+48",
          "pct": 48
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "STROKE SPECS",
      "panelBCells": [
        {
          "label": "WEIGHT",
          "value": "2PX",
          "state": "ok"
        },
        {
          "label": "BOWL",
          "value": "4PX",
          "state": "warn"
        },
        {
          "label": "CROSSBAR",
          "value": "3PX",
          "state": "err"
        },
        {
          "label": "STEM",
          "value": "6PX",
          "state": "ok"
        },
        {
          "label": "TAIL",
          "value": "2PX",
          "state": "warn"
        },
        {
          "label": "TERMINAL",
          "value": "1PX",
          "state": "err"
        },
        {
          "label": "SERIF",
          "value": "0PX",
          "state": "ok"
        },
        {
          "label": "BAR",
          "value": "4PX",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "ASCENDER",
        "CAP HEIGHT",
        "X‑HEIGHT",
        "BASELINE",
        "DESCENDER",
        "STROKE"
      ],
      "series": [
        {
          "data": [
            72,
            64,
            48,
            0,
            -24,
            6,
            6,
            6,
            6,
            6,
            6,
            6
          ],
          "label": "ACTUAL",
          "axis": "left",
          "color": "#DA291C"
        },
        {
          "data": [
            70,
            62,
            46,
            0,
            -22,
            5,
            5,
            5,
            5,
            5,
            5,
            5
          ],
          "label": "TARGET",
          "axis": "right-1",
          "color": "#000000"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'position:relative;min-height:500px;overflow:hidden;background:#000;'; var accent = document.createElement('div'); accent.style.cssText = 'position:absolute;left:0;top:0;width:4px;height:100%;background:var(--primary);'; el.appendChild(accent); var content = document.createElement('div'); content.style.cssText = 'position:absolute;left:40px;top:50%;transform:translateY(-50%);max-width:600px;'; content.innerHTML = '<div style=\"font-family:var(--font-display);font-size:10px;font-weight:500;letter-spacing:0.2em;text-transform:uppercase;color:var(--primary);margin-bottom:16px;\">INTERNATIONAL TYPOGRAPHIC STYLE</div><div style=\"font-family:var(--font-display);font-size:60px;font-weight:900;line-height:1.1;letter-spacing:0.05em;text-transform:uppercase;color:#fff;margin-bottom:16px;\">GRID & RULE</div><div style=\"font-family:var(--font-display);font-size:12px;font-weight:400;letter-spacing:0.05em;text-transform:uppercase;color:rgba(255,255,255,0.7);\">A rational system for typographic order</div>'; el.appendChild(content); }",
    "showcaseRender": "function(el) { el.style.cssText = 'display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:1200px;margin:0 auto;padding:32px;'; el.innerHTML = '<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⬛ MODULAR GRID</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Align every element to an invisible 6‑column raster.</div></div><div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">▲ DUOTONE ENGINE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Convert photography to black‑and‑red duotone.</div></div><div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">● TYPEOGRAPHIC SCALE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Extreme contrast: massive all‑caps headings.</div></div>'; }",
    "panelCRender": "function(el) { el.style.cssText = 'padding:24px;background:var(--surface);'; el.innerHTML = '<div style=\"font-family:var(--font-display);font-size:16px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;color:var(--on-bg);margin-bottom:16px;\">STROKE SPECS</div><table style=\"width:100%;border-collapse:collapse;\"><tr><td style=\"font-family:var(--font-display);font-size:12px;font-weight:500;text-transform:uppercase;color:var(--on-bg-muted);padding:8px 0;\">WEIGHT</td><td style=\"font-family:var(--font-body);font-size:14px;text-align:right;color:var(--on-bg);padding:8px 0;\">2PX</td><td style=\"color:var(--ok);padding:8px 0;padding-left:16px;\">✓</td></tr><tr><td style=\"font-family:var(--font-display);font-size:12px;font-weight:500;text-transform:uppercase;color:var(--on-bg-muted);padding:8px 0;\">BOWL</td><td style=\"font-family:var(--font-body);font-size:14px;text-align:right;color:var(--on-bg);padding:8px 0;\">4PX</td><td style=\"color:var(--warn);padding:8px 0;padding-left:16px;\">△</td></tr><tr><td style=\"font-family:var(--font-display);font-size:12px;font-weight:500;text-transform:uppercase;color:var(--on-bg-muted);padding:8px 0;\">CROSSBAR</td><td style=\"font-family:var(--font-body);font-size:14px;text-align:right;color:var(--on-bg);padding:8px 0;\">3PX</td><td style=\"color:var(--err);padding:8px 0;padding-left:16px;\">✕</td></tr><tr><td style=\"font-family:var(--font-display);font-size:12px;font-weight:500;text-transform:uppercase;color:var(--on-bg-muted);padding:8px 0;\">STEM</td><td style=\"font-family:var(--font-body);font-size:14px;text-align:right;color:var(--on-bg);padding:8px 0;\">6PX</td><td style=\"color:var(--ok);padding:8px 0;padding-left:16px;\">✓</td></tr><tr><td style=\"font-family:var(--font-display);font-size:12px;font-weight:500;text-transform:uppercase;color:var(--on-bg-muted);padding:8px 0;\">TAIL</td><td style=\"font-family:var(--font-body);font-size:14px;text-align:right;color:var(--on-bg);padding:8px 0;\">2PX</td><td style=\"color:var(--warn);padding:8px 0;padding-left:16px;\">△</td></tr><tr><td style=\"font-family:var(--font-display);font-size:12px;font-weight:500;text-transform:uppercase;color:var(--on-bg-muted);padding:8px 0;\">SERIF</td><td style=\"font-family:var(--font-body);font-size:14px;text-align:right;color:var(--on-bg);padding:8px 0;\">0PX</td><td style=\"color:var(--ok);padding:8px 0;padding-left:16px;\">✓</td></tr></table>'; }",
    "heroBackground": "function(el) { el.style.background = '#000000'; var overlay = document.createElement('div'); overlay.style.cssText = 'position:absolute;inset:0;background:var(--primary);mix-blend-mode:multiply;opacity:0.4;'; el.appendChild(overlay); }",
    "ctaBackground": "function(el) { el.style.background = '#000000'; var bar = document.createElement('div'); bar.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:4px;background:var(--primary);'; el.appendChild(bar); }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'height:4px;background:var(--primary);width:100%;border:none;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = '#F5F2E8'; }",
    "surfaceOverlay": "function(el) { var ov = document.createElement('div'); ov.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;background-image:radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px);background-size:4px 4px;'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(el, t) { var tick = t || Date.now(); el.style.cssText = 'position:absolute;inset:0;pointer-events:none;'; var bar = document.createElement('div'); bar.style.cssText = 'position:absolute;bottom:0;left:0;height:4px;background:var(--primary);transition:width 50ms linear;'; var width = Math.sin(tick * 0.002) * 0.5 + 0.5; bar.style.width = (width * 100) + '%'; el.appendChild(bar); }",
  "shadcnTokens": {
    "--color-background": "#FFFFFF",
    "--color-popover": "#FFFFFF",
    "--color-foreground": "#000000",
    "--color-card-foreground": "#000000",
    "--color-popover-foreground": "#000000",
    "--color-card": "#FFFFFF",
    "--color-muted": "#FFFFFF",
    "--color-muted-foreground": "#3D3D3D",
    "--color-primary": "#DA291C",
    "--color-ring": "#DA291C",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#000000",
    "--color-accent": "#000000",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
    "--color-border": "#000000",
    "--color-input": "#000000",
    "--color-destructive": "#C62828"
  },
  "shadcnTokensClassic": {
    "--background": "#FFFFFF",
    "--popover": "#FFFFFF",
    "--foreground": "#000000",
    "--card-foreground": "#000000",
    "--popover-foreground": "#000000",
    "--card": "#FFFFFF",
    "--muted": "#FFFFFF",
    "--muted-foreground": "#3D3D3D",
    "--primary": "#DA291C",
    "--ring": "#DA291C",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#000000",
    "--accent": "#000000",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#C62828"
  }
});
