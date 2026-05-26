registerSystem({
  "meta": {
    "name": "American Airlines / Vignelli Identity System",
    "tagline": "Corporate modernism for UI: red, navy, white, rectilinear.",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap"
  },
  "yamlTokens": {
    "name": "American Airlines / Vignelli Identity System (1967)",
    "colors": {
      "primary": "#E31E24",
      "on-primary": "#FFFFFF",
      "surface": "#FFFFFF",
      "on-surface": "#00205B",
      "secondary": "#00205B",
      "on-secondary": "#FFFFFF",
      "outline": "#00205B"
    },
    "typography": {
      "display": {
        "fontFamily": "Inter",
        "fontSize": "48px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Inter",
        "fontSize": "30px",
        "fontWeight": 500,
        "lineHeight": 1.375,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Inter",
        "fontSize": "20px",
        "fontWeight": 700,
        "lineHeight": 1.375,
        "letterSpacing": "0em",
        "textTransform": "none"
      },
      "body": {
        "fontFamily": "Inter",
        "fontSize": "16px",
        "fontWeight": 300,
        "lineHeight": 1.625,
        "letterSpacing": "0em",
        "textTransform": "none"
      },
      "label": {
        "fontFamily": "Inter",
        "fontSize": "12px",
        "fontWeight": 700,
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
        "backgroundColor": "#E31E24",
        "textColor": "#FFFFFF",
        "rounded": "{rounded.button}",
        "padding": "8px",
        "height": "40px"
      },
      "button-primary-hover": {
        "backgroundColor": "#FFFFFF",
        "textColor": "#E31E24",
        "padding": "8px",
        "height": "40px"
      },
      "button-secondary": {
        "backgroundColor": "#00205B",
        "textColor": "#FFFFFF",
        "rounded": "{rounded.button}",
        "padding": "8px",
        "height": "40px"
      },
      "button-secondary-hover": {
        "backgroundColor": "#FFFFFF",
        "textColor": "#00205B",
        "padding": "8px",
        "height": "40px"
      },
      "card": {
        "backgroundColor": "#FFFFFF",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "input": {
        "backgroundColor": "#FFFFFF",
        "textColor": "#00205B",
        "rounded": "{rounded.input}"
      },
      "input-focus": {
        "backgroundColor": "#FFFFFF",
        "textColor": "#00205B",
        "rounded": "{rounded.input}"
      },
      "boarding-pass": {
        "backgroundColor": "#FFFFFF",
        "rounded": "0px",
        "height": "40px",
        "padding": "16px"
      },
      "airport-code": {
        "textColor": "#E31E24"
      }
    },
    "version": "alpha",
    "description": "Codifies the rigorous corporate modernism of Massimo Vignelli’s 1967 identity for American Airlines as a disciplined UI framework. The emotional register is authoritative, clean, rational, and timeless—never playful or decorative.",
    "provenance": {
      "coverage_status": "minimal",
      "identity_description": "The slug `american-airlines--aesthetic-vignelli-identity-system-1967` refers to the comprehensive corporate visual identity system designed by Massimo Vignelli (with Unimark International) for American Airlines, introduced in 1967. The system encompassed aircraft livery, signage, printed collateral, uniforms, and all brand touchpoints, and is a canonical example of the International Typographic St",
      "manual_enrichment_required": true,
      "imagery_count": 2,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "www.cooperhewitt.org",
          "count": 2
        }
      ],
      "imagery_urls": [
        {
          "url": "https://www.cooperhewitt.org/",
          "host": "www.cooperhewitt.org",
          "institution": "Cooper Hewitt, Smithsonian Design Museum",
          "confidence_original": "low"
        },
        {
          "url": "https://www.cooperhewitt.org/",
          "host": "www.cooperhewitt.org",
          "institution": "Cooper Hewitt, Smithsonian Design Museum",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Helvetica Medium",
          "foundry": "Haas",
          "year": 1957,
          "google_fonts": "Inter",
          "attestation": "attested"
        },
        {
          "name": "Helvetica Regular",
          "foundry": "Haas",
          "year": 1957,
          "google_fonts": "Inter",
          "attestation": "inferred"
        },
        {
          "name": "custom AA logotype",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "attested"
        }
      ],
      "flags": [
        "few_usable_urls",
        "2_robots_disallowed_urls"
      ],
      "honest_gaps": [
        {
          "\"1. **Blue colour specification": "** Pantone and hex values are contested (see §2.secondary_colour gap).\""
        }
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#FFFFFF",
    "--on-bg": "#00205B",
    "--primary": "#E31E24",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#00205B",
    "--on-secondary": "#FFFFFF",
    "--surface": "#FFFFFF",
    "--on-bg-muted": "#333333",
    "--border": "#00205B",
    "--error": "#E31E24",
    "--font-display": "Inter",
    "--font-body": "Inter",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "primary": "#E31E24",
    "onPrimary": "#FFFFFF",
    "secondary": "#00205B",
    "onSecondary": "#FFFFFF",
    "surface": "#FFFFFF",
    "onSurface": "#00205B",
    "outline": "#00205B",
    "error": "#E31E24",
    "onBackground": "#00205B",
    "background": "#FFFFFF",
    "border": "#00205B",
    "textMuted": "#333333",
    "err": "#E31E24",
    "warn": "#E31E24",
    "ok": "#E31E24",
    "deltaUp": "#22C55E",
    "deltaDown": "#E31E24",
    "deltaFlat": "#333333",
    "live": "#E31E24",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#333333",
    "chartFont": "Inter"
  },
  "elevation": {
    "0": {
      "shadow": "none"
    }
  },
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "paper",
    "grain": true,
    "halftone": true,
    "inkGain": false
  },
  "globalFilter": "<svg xmlns='http://www.w3.org/2000/svg'><defs><filter id='noise-filter-ds' x='0%25' y='0%25' width='100%25' height='100%25'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/><feColorMatrix type='matrix' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.1 0'/></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-body); background: var(--bg); color: var(--on-bg); -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;",
  "globalCss": ".ds-layout-frame { font-family: var(--font-display); } .ds-layout-frame .paper-grain { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 9999; mix-blend-mode: multiply; opacity: 0.1; background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.45' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.15'/%3E%3C/svg%3E\"); } .ds-layout-frame .halftone { background-image: repeating-radial-gradient(circle at 2px 2px, rgba(0,0,0,0.12) 0px, transparent 1px); background-size: 4px 4px; } .ds-layout-frame hr { border: 0; border-top: 2px solid var(--border); margin: 2rem 0; } .ds-layout-frame button, .ds-layout-frame a, .ds-layout-frame input, .ds-layout-frame select { border-radius: var(--radius-default); } .ds-layout-frame .button-primary { background-color: var(--primary); color: var(--on-primary); } .ds-layout-frame .button-primary:hover { background-color: var(--on-primary); color: var(--primary); } .ds-layout-frame .button-secondary { background-color: var(--secondary-col); color: var(--on-secondary); } .ds-layout-frame .button-secondary:hover { background-color: var(--on-secondary); color: var(--secondary-col); } .ds-layout-frame :focus { outline: 2px solid var(--primary); outline-offset: 2px; }",
  "interactionModel": {
    "hover": {
      "selector": ":hover",
      "effect": "instant-color-inversion",
      "transition": "none"
    },
    "focus": {
      "selector": ":focus",
      "effect": "outline",
      "width": "2px",
      "color": "var(--primary)",
      "offset": "2px"
    },
    "active": {
      "effect": "none"
    }
  },
  "interactionStyles": ".ds-layout-frame button:hover, .ds-layout-frame a:hover, .ds-layout-frame .clickable:hover { background-color: var(--on-primary) !important; color: var(--primary) !important; transition: none; } .ds-layout-frame button:focus, .ds-layout-frame a:focus, .ds-layout-frame input:focus { outline: 2px solid var(--primary); outline-offset: 2px; } .ds-layout-frame button:active, .ds-layout-frame a:active { background-color: var(--primary); color: var(--on-primary); }",
  "chartStyle": {
    "backgroundColor": "var(--surface)",
    "textColor": "var(--on-surface)",
    "fontFamily": "var(--font-body)",
    "gridColor": "var(--border)",
    "gridWidth": 2,
    "borderRadius": 0,
    "labelTransform": "uppercase",
    "statusIndicator": "solid block in var(--primary)",
    "labelColor": "#333333"
  },
  "dashboardStyle": {
    "layout": "asymmetrical grid with 2–3 horizontal bands separated by 2px navy rules. Left-aligned content, wide negative space.",
    "density": "low",
    "panelTreatment": "white background, 2px navy border, zero radius. No shadows. Horizontal rules only.",
    "dataVizStyle": "solid fill bars in red or navy, no rounding, no grid lines except 2px baseline. Labels in Helvetica Bold uppercase.",
    "signatureElement": "Red eagle silhouette fixed top-left; airport code blocks in red; horizontal rules as separators."
  },
  "landingStyle": {
    "heroApproach": "Full-width band with red background, white Helvetica Bold uppercase headline, left-aligned. No image, no overlay.",
    "scrollBehavior": "Smooth but no animations. Content appears instantly as bands separated by navy rules.",
    "ctaStyle": "Primary red button with white text; hover state inverts to white with red text. No outline options on landing.",
    "signatureMoment": "Large airport code (e.g., 'ORD') in red Helvetica Bold at 72px, centered in navy band with white text below."
  },
  "buttons": [
    {
      "name": "primary",
      "desc": "Primary action button with instant color inversion on hover. Red fill, white text, zero radius.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--primary); color: var(--on-primary); border: 2px solid var(--primary); border-radius: var(--radius-btn); padding: 8px 16px; height: 40px; font-family: var(--font-display); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: -0.025em; line-height: 1; cursor: pointer;\">BOOK FLIGHT</button>",
      "label": "primary",
      "note": "Primary action button with instant color inversion on hover. Red fill, white text, zero radius."
    },
    {
      "name": "secondary",
      "desc": "Secondary action button with navy fill, white text, zero radius. Hover inverts to white fill with navy text.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--secondary-col); color: var(--on-secondary); border: 2px solid var(--secondary-col); border-radius: var(--radius-btn); padding: 8px 16px; height: 40px; font-family: var(--font-display); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: -0.025em; line-height: 1; cursor: pointer;\">CHECK IN</button>",
      "label": "secondary",
      "note": "Secondary action button with navy fill, white text, zero radius. Hover inverts to white fill with navy text."
    },
    {
      "name": "outline",
      "desc": "Outline button with no fill, navy border and text. Hover inverts to red fill with white text.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: transparent; color: var(--secondary-col); border: 2px solid var(--secondary-col); border-radius: var(--radius-btn); padding: 8px 16px; height: 40px; font-family: var(--font-display); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: -0.025em; line-height: 1; cursor: pointer;\">FLIGHT STATUS</button>",
      "label": "outline",
      "note": "Outline button with no fill, navy border and text. Hover inverts to red fill with white text."
    }
  ],
  "cards": [
    {
      "name": "basic-card",
      "desc": "A simple white card with a 2px navy border, zero radius. Used for information grouping.",
      "html": "<div style=\"background-color: var(--surface); border: 2px solid var(--border); border-radius: var(--radius-card); padding: 16px; font-family: var(--font-body); color: var(--on-surface);\"><h3 style=\"font-family: var(--font-display); font-size: 20px; font-weight: 700; margin: 0 0 8px;\">FLIGHT SUMMARY</h3><p style=\"margin: 0; font-weight: 300;\">Departure: 14:30 • Gate 12</p></div>",
      "label": "basic-card",
      "note": "A simple white card with a 2px navy border, zero radius. Used for information grouping."
    },
    {
      "name": "boarding-pass-card",
      "desc": "Simulated boarding pass with perforation separator (dashed rule) and airport code block. Zero radius.",
      "html": "<div style=\"background-color: var(--surface); border: 2px solid var(--border); border-radius: var(--radius-card); padding: 16px; width: 300px; font-family: var(--font-body);\"><div style=\"display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;\"><span style=\"font-family: var(--font-display); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: -0.025em; color: var(--on-surface);\">BOARDING PASS</span><span style=\"font-family: var(--font-display); font-size: 16px; font-weight: 700; color: var(--primary);\">JFK</span></div><div style=\"border-top: 2px dashed var(--border); margin: 12px 0; padding-top: 12px;\"><div style=\"display: flex; justify-content: space-between;\"><span style=\"font-weight: 300; font-size: 14px;\">FLIGHT AA 100</span><span style=\"font-weight: 300; font-size: 14px;\">GATE 7</span></div></div></div>",
      "label": "boarding-pass-card",
      "note": "Simulated boarding pass with perforation separator (dashed rule) and airport code block. Zero radius."
    }
  ],
  "forms": [
    {
      "name": "text-input",
      "desc": "Single-line text input with label. White background, navy border, zero radius.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px;\"><label style=\"font-family: var(--font-display); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: -0.025em; color: var(--on-surface);\">FLIGHT NUMBER</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" value=\"AA 100\" style=\"background-color: var(--surface); color: var(--on-surface); border: 2px solid var(--border); border-radius: var(--radius-input); padding: 8px; height: 40px; font-family: var(--font-body); font-size: 16px; font-weight: 300; outline: none; transition: none;\"></div>",
      "label": "text-input",
      "stateLabel": "Single-line text input with label. White background, navy border, zero radius."
    },
    {
      "name": "select-dropdown",
      "desc": "Select dropdown with custom arrow. Navy border, zero radius. No rounded corners.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px;\"><label style=\"font-family: var(--font-display); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: -0.025em; color: var(--on-surface);\">DESTINATION</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--surface); color: var(--on-surface); border: 2px solid var(--border); border-radius: var(--radius-input); padding: 8px; height: 40px; font-family: var(--font-body); font-size: 16px; font-weight: 300; appearance: none; -webkit-appearance: none; background-image: url(\\x27data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"8\" viewBox=\"0 0 12 8\"><path d=\"M1 1l5 5 5-5\" stroke=\"%2300205B\" stroke-width=\"2\" fill=\"none\"/></svg>\\x27); background-repeat: no-repeat; background-position: right 8px center; padding-right: 32px;\"><option>NEW YORK</option><option>LOS ANGELES</option><option>CHICAGO</option></select></div>",
      "label": "select-dropdown",
      "stateLabel": "Select dropdown with custom arrow. Navy border, zero radius. No rounded corners."
    },
    {
      "name": "checkbox",
      "desc": "Square checkbox with red fill on check, white checkmark. Zero radius. Labeled.",
      "html": "<div style=\"display: flex; align-items: center; gap: 8px;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" id=\"seat-8c28\" checked style=\"width: 20px; height: 20px; border: 2px solid var(--border); border-radius: 0px; background-color: var(--primary); color: var(--on-primary); accent-color: var(--primary); margin: 0;\"><label for=\"seat-8c28\" style=\"font-family: var(--font-body); font-size: 16px; font-weight: 300; color: var(--on-surface);\">Window seat preference</label></div>",
      "label": "checkbox",
      "stateLabel": "Square checkbox with red fill on check, white checkmark. Zero radius. Labeled."
    }
  ],
  "extraComponents": [
    {
      "name": "boarding-pass",
      "desc": "Full boarding pass component with three-letter airport code, flight info, separator. Zero radius, navy borders.",
      "html": "<div style=\"background-color: var(--surface); border: 2px solid var(--border); border-radius: var(--radius-card); padding: 16px; width: 320px; font-family: var(--font-body);\"><div style=\"display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;\"><span style=\"font-family: var(--font-display); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: -0.025em; color: var(--on-surface);\">BOARDING PASS</span><span style=\"font-family: var(--font-display); font-size: 24px; font-weight: 700; color: var(--primary);\">LAX</span></div><div style=\"display: flex; justify-content: space-between; font-size: 14px; font-weight: 300;\"><span>FLIGHT AA 234</span><span>GATE 15</span></div><div style=\"border-top: 2px dashed var(--border); margin: 12px 0; padding-top: 12px; font-size: 12px; font-weight: 300;\"><span>SEAT 22A • DEPART 16:45</span></div></div>"
    },
    {
      "name": "airport-code",
      "desc": "Three-letter airport code in red, Helvetica (Inter) Bold uppercase. Fixed width inline block.",
      "html": "<span style=\"font-family: var(--font-display); font-size: 20px; font-weight: 700; color: var(--primary); text-transform: uppercase; letter-spacing: -0.025em; margin: 0 4px;\">JFK</span>"
    },
    {
      "name": "horizontal-rule",
      "desc": "A horizontal rule as a 2px solid navy line, spanning full width. The only border element.",
      "html": "<div style=\"border-top: 2px solid var(--border); width: 100%; margin: 16px 0;\"></div>"
    },
    {
      "name": "eagle-icon",
      "desc": "Geometric eagle silhouette in solid red. Flat, no outlines or feather detail. Positioned top-left.",
      "html": "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\" style=\"fill: var(--primary); display: block;\"><polygon points=\"20,2 38,38 2,38 14,22 26,22\"/><polygon points=\"14,22 2,38 20,18\"/><polygon points=\"26,22 38,38 20,18\"/></svg>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — FLIGHT 17</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — NEW YORK TO LOS ANGELES</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — Boarding Pass Information</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — Gate changes will be announced 30 minutes before departure. Please proceed to gate 12B.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — GATE 12B</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Do not use rounded corners on any element. All geometry must be rectilinear.",
      "avoid": {
        "html": "<button style=\"background-color: var(--primary); color: var(--on-primary); border-radius: 8px; padding: 8px 16px; font-family: var(--font-display); font-size: 12px; font-weight: 700;\">ROUNDED BUTTON</button>",
        "label": "Avoid"
      },
      "rule": "Do not use rounded corners on any element. All geometry must be rectilinear.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not use shadows, drop shadows, or box shadows. All depth is flat.",
      "avoid": {
        "html": "<div style=\"background-color: var(--surface); border: 1px solid var(--border); box-shadow: 4px 4px 0 var(--secondary-col); padding: 16px;\">CARD WITH SHADOW</div>",
        "label": "Avoid"
      },
      "rule": "Do not use shadows, drop shadows, or box shadows. All depth is flat.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not use any color outside the three-color palette: red (#E31E24), navy (#00205B), white (#FFFFFF). No tints, gradients, or black.",
      "avoid": {
        "html": "<button style=\"background-color: #000000; color: #FFFFFF; border: 2px solid #888888; padding: 8px 16px;\">BLACK BUTTON</button>",
        "label": "Avoid"
      },
      "rule": "Do not use any color outside the three-color palette: red (#E31E24), navy (#00205B), white (#FFFFFF). No tints, gradients, or black.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not animate or transition. State changes must be instant (0ms).",
      "avoid": {
        "html": "<button style=\"background-color: var(--primary); color: var(--on-primary); transition: background-color 300ms ease; padding: 8px 16px;\">ANIMATED BUTTON</button>",
        "label": "Avoid"
      },
      "rule": "Do not animate or transition. State changes must be instant (0ms).",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "doAvoidStyle": {
    "desc": "Do not apply any rounding, shadows, gradients, or fourth colors. Do not use animations or transitions. Do not use non-Inter fonts.",
    "examples": [
      "Avoid rounded input fields",
      "Avoid box shadows on cards",
      "Avoid color blending or opacity",
      "Avoid cursive or serif fonts"
    ]
  },
  "effects": [],
  "motion": [],
  "colors": {
    "primary": "#E31E24",
    "onPrimary": "#FFFFFF",
    "secondary": "#00205B",
    "onSecondary": "#FFFFFF",
    "surface": "#FFFFFF",
    "onSurface": "#00205B",
    "outline": "#00205B"
  },
  "typography": {
    "display": {
      "fontFamily": "Inter",
      "fontSize": "48px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "Inter",
      "fontSize": "30px",
      "fontWeight": 500,
      "lineHeight": 1.375,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "Inter",
      "fontSize": "20px",
      "fontWeight": 700,
      "lineHeight": 1.375,
      "letterSpacing": "0em",
      "textTransform": "none"
    },
    "body": {
      "fontFamily": "Inter",
      "fontSize": "16px",
      "fontWeight": 300,
      "lineHeight": 1.625,
      "letterSpacing": "0em",
      "textTransform": "none"
    },
    "label": {
      "fontFamily": "Inter",
      "fontSize": "12px",
      "fontWeight": 700,
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
  "layouts": {
    "copy": {
      "heroKicker": "OPERATIONS CONTROL",
      "heroHeadline": "AMERICAN AIRLINES FLIGHT MANAGEMENT",
      "heroSub": "Real-time fleet monitoring and route optimization for the modern airline. Every decision grounded in precision.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color:#E31E24;color:#FFFFFF;border:none;padding:8px;height:40px;font-family:Inter;font-weight:700;text-transform:uppercase;letter-spacing:-0.025em;cursor:pointer;\">ACCESS CONTROL</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color:#00205B;color:#FFFFFF;border:none;padding:8px;height:40px;font-family:Inter;font-weight:700;text-transform:uppercase;letter-spacing:-0.025em;cursor:pointer;\">VIEW SCHEDULE</button>",
      "navLinks": [
        "FLIGHTS",
        "ROUTES",
        "FLEET",
        "CREW",
        "SCHEDULE"
      ],
      "features": [
        {
          "title": "ROUTE NETWORK",
          "desc": "Optimized flight paths across 350+ destinations with strict adherence to schedule.",
          "icon": "🗺️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🗺️ ROUTE NETWORK</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Optimized flight paths across 350+ destinations with strict adherence to schedule.</div></div>"
        },
        {
          "title": "FLEET STATUS",
          "desc": "Live telemetry from every aircraft in the fleet. Engine performance, fuel levels, and maintenance windows.",
          "icon": "🛩️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🛩️ FLEET STATUS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Live telemetry from every aircraft in the fleet. Engine performance, fuel levels, and maintenance windows.</div></div>"
        },
        {
          "title": "CREW LOGISTICS",
          "desc": "Automated crew pairing and duty-time tracking for regulatory compliance.",
          "icon": "🧑‍✈️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🧑‍✈️ CREW LOGISTICS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Automated crew pairing and duty-time tracking for regulatory compliance.</div></div>"
        },
        {
          "title": "GATE OPERATIONS",
          "desc": "Terminal occupancy, boarding progress, and turnaround sequencing.",
          "icon": "🛬",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🛬 GATE OPERATIONS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Terminal occupancy, boarding progress, and turnaround sequencing.</div></div>"
        }
      ],
      "ctaStripHeadline": "READY TO DEPART?",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color:#E31E24;color:#FFFFFF;border:none;padding:8px;height:40px;font-family:Inter;font-weight:700;text-transform:uppercase;letter-spacing:-0.025em;cursor:pointer;\">LAUNCH CONTROL</button>",
      "sidebarBrand": "AMERICAN AIRLINES",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "CONTROL",
          "active": true
        },
        {
          "icon": "◉",
          "label": "ROUTES",
          "active": false
        }
      ],
      "dashboardTitle": "FLIGHT OPERATIONS DASHBOARD",
      "metrics": [
        {
          "label": "ACTIVE FLIGHTS",
          "value": "1,247",
          "delta": "+3.2%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "ON-TIME RATE",
          "value": "89.1%",
          "delta": "-0.4%",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "DELAYED",
          "value": "134",
          "delta": "-2.1%",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "GATE OCCUPANCY",
          "value": "72%",
          "delta": "+1.8%",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "DEPARTURE ADHERENCE",
      "panelATitle": "UPCOMING DEPARTURES",
      "panelARows": [
        {
          "label": "AA 100",
          "value": "ON TIME",
          "pct": 0
        },
        {
          "label": "AA 204",
          "value": "DELAYED 15MIN",
          "pct": 15
        },
        {
          "label": "AA 317",
          "value": "BOARDING",
          "pct": 0
        },
        {
          "label": "AA 489",
          "value": "ON TIME",
          "pct": 0
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "GATE ASSIGNMENTS",
      "panelBCells": [
        {
          "label": "GATE B12",
          "value": "AA 100",
          "state": "ok"
        },
        {
          "label": "GATE C7",
          "value": "AA 204",
          "state": "warn"
        },
        {
          "label": "GATE A3",
          "value": "AA 317",
          "state": "err"
        },
        {
          "label": "GATE D9",
          "value": "AA 489",
          "state": "ok"
        },
        {
          "label": "GATE B4",
          "value": "AA 512",
          "state": "warn"
        },
        {
          "label": "GATE C22",
          "value": "AA 608",
          "state": "err"
        },
        {
          "label": "GATE A11",
          "value": "AA 722",
          "state": "ok"
        },
        {
          "label": "GATE D5",
          "value": "AA 815",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "0600",
        "0700",
        "0800",
        "0900",
        "1000",
        "1100"
      ],
      "series": [
        {
          "data": [
            42,
            38,
            45,
            50,
            47,
            52,
            52,
            52,
            52,
            52,
            52,
            52
          ],
          "label": "ON-TIME",
          "axis": "left",
          "color": "#E31E24"
        },
        {
          "data": [
            8,
            12,
            7,
            5,
            9,
            6,
            6,
            6,
            6,
            6,
            6,
            6
          ],
          "label": "DELAYED",
          "axis": "right-1",
          "color": "#00205B"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText='background:var(--primary);padding:64px 32px;min-height:240px;position:relative;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;'; el.innerHTML='<div style=\"position:absolute;top:16px;left:16px;\"><svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" style=\"fill:var(--on-primary);\"><polygon points=\"20,2 38,38 2,38 14,22 26,22\"/></svg></div><div style=\"max-width:800px;\"><div style=\"font-family:var(--font-display);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:-0.025em;color:var(--on-primary);\">OPERATIONS CONTROL</div><h1 style=\"font-family:var(--font-display);font-size:48px;font-weight:700;line-height:1.25;letter-spacing:-0.025em;text-transform:uppercase;color:var(--on-primary);margin:16px 0;\">AMERICAN AIRLINES FLIGHT MANAGEMENT</h1><p style=\"font-family:var(--font-body);font-size:16px;font-weight:300;color:var(--on-primary);max-width:600px;\">Real-time fleet monitoring and route optimization for the modern airline. Every decision grounded in precision.</p></div>'; }",
    "showcaseRender": "function(el) { el.style.cssText = 'padding:32px;background:var(--bg);'; el.innerHTML = '<div style=\"display:grid;grid-template-columns:repeat(3,1fr);gap:16px;\"><div style=\"border:2px solid var(--border);background:var(--surface);padding:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:var(--primary);margin-bottom:8px;\">ROUTE NETWORK</div><div style=\"font-family:var(--font-body);font-size:12px;font-weight:300;color:var(--on-bg-muted);\">Optimized flight paths across 350+ destinations.</div></div><div style=\"border:2px solid var(--border);background:var(--surface);padding:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:var(--primary);margin-bottom:8px;\">FLEET STATUS</div><div style=\"font-family:var(--font-body);font-size:12px;font-weight:300;color:var(--on-bg-muted);\">Live telemetry from every aircraft.</div></div><div style=\"border:2px solid var(--border);background:var(--surface);padding:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:var(--primary);margin-bottom:8px;\">CREW LOGISTICS</div><div style=\"font-family:var(--font-body);font-size:12px;font-weight:300;color:var(--on-bg-muted);\">Automated crew pairing and duty tracking.</div></div></div>'; }",
    "panelCRender": "function(el) { el.style.cssText = 'background:var(--surface);border:2px solid var(--border);padding:16px;font-family:var(--font-body);'; el.innerHTML = '<div style=\"border-bottom:2px solid var(--border);padding-bottom:8px;margin-bottom:16px;\"><div style=\"font-family:var(--font-display);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:-0.025em;color:var(--on-surface);\">UPCOMING DEPARTURES</div></div><div style=\"display:flex;flex-direction:column;gap:8px;\"><div style=\"display:flex;justify-content:space-between;font-size:14px;font-weight:300;\"><span>AA 100</span><span style=\"color:var(--primary);font-weight:700;\">ON TIME</span></div><div style=\"display:flex;justify-content:space-between;font-size:14px;font-weight:300;\"><span>AA 204</span><span style=\"color:var(--primary);font-weight:700;\">DELAYED 15</span></div><div style=\"display:flex;justify-content:space-between;font-size:14px;font-weight:300;\"><span>AA 317</span><span style=\"color:var(--primary);font-weight:700;\">BOARDING</span></div><div style=\"display:flex;justify-content:space-between;font-size:14px;font-weight:300;\"><span>AA 489</span><span style=\"color:var(--primary);font-weight:700;\">ON TIME</span></div></div>'; }",
    "heroBackground": "function(el) { el.style.background = 'var(--primary)'; }",
    "ctaBackground": "function(el) { el.style.background = 'var(--secondary-col)'; }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'height:2px;background:var(--border);margin:0;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = 'var(--surface)'; }",
    "surfaceOverlay": "function(el) { var ov = document.createElement('div'); ov.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;mix-blend-mode:multiply;opacity:0.1;background-image:url(\"data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'100\\'%3E%3Cfilter id=\\'n\\'%3E%3CfeTurbulence baseFrequency=\\'0.45\\' numOctaves=\\'3\\' stitchTiles=\\'stitch\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23n)\\' opacity=\\'0.15\\'/%3E%3C/svg%3E\");background-size:100px 100px;'; el.appendChild(ov); }"
  },
  "shadcnTokens": {
    "--color-background": "#FFFFFF",
    "--color-popover": "#FFFFFF",
    "--color-foreground": "#00205B",
    "--color-card-foreground": "#00205B",
    "--color-popover-foreground": "#00205B",
    "--color-card": "#FFFFFF",
    "--color-muted": "#FFFFFF",
    "--color-muted-foreground": "#333333",
    "--color-primary": "#E31E24",
    "--color-ring": "#E31E24",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#00205B",
    "--color-accent": "#00205B",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
    "--color-border": "#00205B",
    "--color-input": "#00205B",
    "--color-destructive": "#E31E24"
  },
  "shadcnTokensClassic": {
    "--background": "#FFFFFF",
    "--popover": "#FFFFFF",
    "--foreground": "#00205B",
    "--card-foreground": "#00205B",
    "--popover-foreground": "#00205B",
    "--card": "#FFFFFF",
    "--muted": "#FFFFFF",
    "--muted-foreground": "#333333",
    "--primary": "#E31E24",
    "--ring": "#E31E24",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#00205B",
    "--accent": "#00205B",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#00205B",
    "--input": "#00205B",
    "--destructive": "#E31E24"
  }
});
