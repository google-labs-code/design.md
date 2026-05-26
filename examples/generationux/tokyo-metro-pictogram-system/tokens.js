registerSystem({
  "meta": {
    "name": "Tokyo Metro Pictogram System",
    "tagline": "A public transit wayfinding language built from ultra-simplified geometric silhouettes on a restricted blue-and-white palette with one red accent.",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;900&display=swap"
  },
  "yamlTokens": {
    "name": "Tokyo Metro Pictogram System",
    "colors": {
      "primary": "#0073B1",
      "on-primary": "#FFFFFF",
      "neutral": "#1A1A1A",
      "error": "#DA291C",
      "on-error": "#FFFFFF"
    },
    "typography": {
      "display": {
        "fontFamily": "Nunito Sans",
        "fontSize": "36px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Nunito Sans",
        "fontSize": "24px",
        "fontWeight": 600,
        "lineHeight": 1.25,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Nunito Sans",
        "fontSize": "20px",
        "fontWeight": 600,
        "lineHeight": 1.375,
        "letterSpacing": "0em"
      },
      "body": {
        "fontFamily": "Nunito Sans",
        "fontSize": "16px",
        "fontWeight": 400,
        "lineHeight": 1.5,
        "letterSpacing": "0em"
      },
      "label": {
        "fontFamily": "Nunito Sans",
        "fontSize": "14px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      }
    },
    "rounded": {
      "default": "8px",
      "card": "8px",
      "button": "8px",
      "input": "0px",
      "chip": "9999px"
    },
    "spacing": {
      "component-internal": "8px",
      "between-components": "16px",
      "between-sections": "24px",
      "icon-standard": "48px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "{colors.primary}",
        "textColor": "{colors.on-primary}",
        "rounded": "{rounded.button}",
        "padding": "8px"
      },
      "button-primary-hover": {
        "backgroundColor": "{colors.primary}",
        "textColor": "{colors.on-primary}",
        "padding": "8px"
      },
      "button-secondary": {
        "backgroundColor": "#FFFFFF",
        "textColor": "{colors.primary}",
        "rounded": "{rounded.button}",
        "padding": "8px"
      },
      "card": {
        "backgroundColor": "#FFFFFF",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "input": {
        "backgroundColor": "#FFFFFF",
        "rounded": "{rounded.input}"
      },
      "prohibition-overlay": {
        "backgroundColor": "{colors.error}",
        "textColor": "{colors.on-error}",
        "size": "48px"
      },
      "directional-arrow": {
        "textColor": "{colors.on-primary}",
        "size": "48px"
      }
    },
    "version": "alpha",
    "description": "A public transit wayfinding language built from ultra-simplified geometric silhouettes on a restricted blue-and-white palette with one red accent. Flat, strokeless, solid-fill pictograms on rounded-square frames — calm, authoritative, and universally legible across language barriers.",
    "provenance": {
      "coverage_status": "sparse",
      "identity_description": "The slug `tokyo-metro-pictogram-system` refers to the consistent set of wayfinding pictograms used by Tokyo Metro (formerly Teito Rapid Transit Authority, TRTA) for station signage, line identification, and facility indication. This system was introduced gradually from the early 1970s and fully formalised by the mid-1970s, becoming a widely recognised example of Japanese transit pictogram design. ",
      "manual_enrichment_required": false,
      "imagery_count": 3,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "en.wikipedia.org",
          "count": 1
        },
        {
          "host": "www.mlit.go.jp",
          "count": 1
        },
        {
          "host": "www.jstor.org",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://en.wikipedia.org/wiki/Tokyo_Metro",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia (user-contributed)",
          "confidence_original": "high"
        },
        {
          "url": "https://www.mlit.go.jp/",
          "host": "www.mlit.go.jp",
          "institution": "Ministry of Land, Infrastructure, Transport and Tourism, Japan",
          "confidence_original": "low"
        },
        {
          "url": "https://www.jstor.org/",
          "host": "www.jstor.org",
          "institution": "JSTOR",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Helvetica Neue",
          "foundry": null,
          "year": null,
          "google_fonts": "Inter",
          "attestation": "unverified"
        },
        {
          "name": "Shogo (Shin Go)",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "attestation": "unverified"
        },
        {
          "name": "Helvetica Bold",
          "foundry": null,
          "year": null,
          "google_fonts": "Inter",
          "attestation": "unverified"
        },
        {
          "name": "Frutiger",
          "foundry": null,
          "year": null,
          "google_fonts": "Nunito Sans",
          "attestation": "unverified"
        }
      ],
      "flags": [
        "sparse_imagery",
        "1_robots_disallowed_urls"
      ],
      "honest_gaps": [
        {
          "\"1. **Colour": "Official colour references (Pantone/DIC/Toyo) for each line colour.** *Missing because no official style guide has been located.* *Resolution:* access to Tokyo Metro or TRTA internal design documents.\""
        }
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#FFFFFF",
    "--on-bg": "#1A1A1A",
    "--primary": "#00324D",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#1A1A1A",
    "--on-secondary": "#FFFFFF",
    "--surface": "#FFFFFF",
    "--on-bg-muted": "#333333",
    "--border": "#00324D",
    "--error": "#8B0000",
    "--font-display": "Nunito Sans",
    "--font-body": "Nunito Sans",
    "--radius-default": "8px",
    "--radius-card": "8px",
    "--radius-btn": "8px",
    "--radius-chip": "9999px"
  },
  "semanticColors": {
    "primary": "#00324D",
    "on-primary": "#FFFFFF",
    "neutral": "#1A1A1A",
    "error": "#8B0000",
    "on-error": "#FFFFFF",
    "surface": "#FFFFFF",
    "on-surface": "#1A1A1A",
    "outline": "#00324D",
    "err": "#8B0000",
    "deltaFlat": "#1A1A1A",
    "warn": "#FF8C42",
    "ok": "#22C55E",
    "deltaUp": "#22C55E",
    "deltaDown": "#8B0000",
    "live": "#00324D",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#333333",
    "chartFont": "Nunito Sans"
  },
  "chartStyle": {
    "defaultChart": "horizontal bar with blue fill, no grid, no axes.",
    "colors": [
      "var(--primary)",
      "var(--error)",
      "var(--on-primary)"
    ],
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#333333",
    "fontFamily": "Nunito Sans"
  },
  "surfaceModel": "flat",
  "materialSimulation": {
    "model": "none"
  },
  "interactionModel": {
    "hover": {
      "boxShadow": "none",
      "transform": "none"
    },
    "focus": {
      "outline": "none"
    },
    "active": {
      "boxShadow": "none",
      "transform": "none"
    }
  },
  "interactionStyles": ".ds-layout-frame * { transition: none !important; }",
  "spacing": {
    "component-internal": "8px",
    "between-components": "16px",
    "between-sections": "24px",
    "icon-standard": "48px"
  },
  "radius": {
    "default": "8px",
    "card": "8px",
    "button": "8px",
    "input": "0px",
    "chip": "9999px"
  },
  "elevation": {
    "box": "shadow-none",
    "icon": "shadow-none"
  },
  "dashboardStyle": {
    "layout": "Strict grid of 48px icon modules, centre-aligned, with uniform 25% gutters. Panels arranged in rows of 3-4.",
    "density": "Low density – each panel contains at most one pictogram and a label. Whitespace is structural.",
    "panelTreatment": "Flat white cards with blue outline (2px) and 8px border-radius. No elevation.",
    "dataVizStyle": "Simple bar charts using stacked horizontal rectangles in blue and white. No axis lines – only filled blocks.",
    "signatureElement": "A single large pictogram frame acting as the dashboard header, representing the current station or line."
  },
  "landingStyle": {
    "heroApproach": "Full-viewport blue field with a large white pictogram (e.g., a train or person) centred. Overlaid headline in uppercase Frutiger (Nunito Sans).",
    "scrollBehavior": "Hard-cut sections that snap into view with no transition. Each section is a flat colour block (blue or white).",
    "ctaStyle": "Primary button: solid blue, white uppercase text. Secondary: white with blue outline. No hover effects.",
    "signatureMoment": "A sequence of three pictograms fading in (hard cut, no tween) to illustrate wayfinding: entry → platform → train."
  },
  "globalFilter": "<svg xmlns='http://www.w3.org/2000/svg'><defs><filter id='pictogram-glow' x='-20%' y='-20%' width='140%' height='140%'><feGaussianBlur stdDeviation='4' result='blur'/><feComposite in='SourceGraphic' in2='blur' operator='over'/></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-body); background: var(--bg); color: var(--on-bg);",
  "globalCss": ".ds-layout-frame { box-sizing: border-box; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; } .ds-layout-frame a { color: var(--primary); text-decoration: none; }",
  "buttons": [
    {
      "name": "Primary Button",
      "desc": "Solid blue fill, white uppercase label. Directly references the pictogram field colour.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--primary); color: var(--on-primary); border: none; border-radius: var(--radius-btn); padding: 8px 16px; font-family: var(--font-display); font-size: 14px; font-weight: 700; line-height: 1.25; letter-spacing: 0.025em; text-transform: uppercase;\">Elevator</button>",
      "label": "Primary Button",
      "note": "Solid blue fill, white uppercase label. Directly references the pictogram field colour."
    },
    {
      "name": "Secondary Button",
      "desc": "White background with blue border and blue uppercase label. Mirror of the pictogram field inversion.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--surface); color: var(--primary); border: 2px solid var(--primary); border-radius: var(--radius-btn); padding: 6px 14px; font-family: var(--font-display); font-size: 14px; font-weight: 700; line-height: 1.25; letter-spacing: 0.025em; text-transform: uppercase;\">Stairs</button>",
      "label": "Secondary Button",
      "note": "White background with blue border and blue uppercase label. Mirror of the pictogram field inversion."
    },
    {
      "name": "Danger Button",
      "desc": "Red accent fill, white uppercase label. Used for prohibition or alert actions.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--error); color: var(--on-error); border: none; border-radius: var(--radius-btn); padding: 8px 16px; font-family: var(--font-display); font-size: 14px; font-weight: 700; line-height: 1.25; letter-spacing: 0.025em; text-transform: uppercase;\">禁止</button>",
      "label": "Danger Button",
      "note": "Red accent fill, white uppercase label. Used for prohibition or alert actions."
    }
  ],
  "cards": [
    {
      "name": "Pictogram Card",
      "desc": "Blue rounded-square card containing a white geometric pictogram placeholder. Mimics the core sign unit.",
      "html": "<div style=\"background-color: var(--primary); border-radius: var(--radius-card); width: 120px; height: 120px; display: flex; align-items: center; justify-content: center;\"><svg viewBox=\"0 0 48 48\" width=\"48\" height=\"48\" fill=\"var(--on-primary)\"><\!-- Simplified human figure: circle head, rectangle torso, stick limbs --><circle cx=\"24\" cy=\"12\" r=\"6\"/><rect x=\"20\" y=\"20\" width=\"8\" height=\"16\"/><rect x=\"12\" y=\"22\" width=\"8\" height=\"4\"/><rect x=\"28\" y=\"22\" width=\"8\" height=\"4\"/><rect x=\"20\" y=\"36\" width=\"4\" height=\"10\"/><rect x=\"24\" y=\"36\" width=\"4\" height=\"10\"/></svg></div>",
      "label": "Pictogram Card",
      "note": "Blue rounded-square card containing a white geometric pictogram placeholder. Mimics the core sign unit."
    },
    {
      "name": "Information Card",
      "desc": "White card with blue label and optional subtle border. For text-content panels in wayfinding layouts.",
      "html": "<div style=\"background-color: var(--surface); border-radius: var(--radius-card); padding: var(--spacing-component-internal); font-family: var(--font-body); color: var(--on-surface);\"><span style=\"font-family: var(--font-display); font-size: 14px; font-weight: 700; letter-spacing: 0.025em; text-transform: uppercase; color: var(--primary);\">Platform 1</span><p style=\"margin: 4px 0 0; font-size: 16px; line-height: 1.5;\">Towards Shinjuku – 2 min</p></div>",
      "label": "Information Card",
      "note": "White card with blue label and optional subtle border. For text-content panels in wayfinding layouts."
    }
  ],
  "forms": [
    {
      "name": "Text Input",
      "desc": "Square-cornered white input with no border style (flat). Placeholder text in neutral grey.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px;\"><label style=\"font-family: var(--font-display); font-size: 14px; font-weight: 700; letter-spacing: 0.025em; text-transform: uppercase; color: var(--primary);\">Destination</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" placeholder=\"e.g. Ueno\" style=\"background-color: var(--surface); border: 2px solid var(--primary); border-radius: var(--radius-input); padding: 8px; font-family: var(--font-body); font-size: 16px; color: var(--on-surface); outline: none;\"/></div>",
      "label": "Text Input",
      "stateLabel": "Square-cornered white input with no border style (flat). Placeholder text in neutral grey."
    },
    {
      "name": "Select Menu",
      "desc": "Dropdown styled as a flat white rectangle with blue arrow. No radius on corners.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px;\"><label style=\"font-family: var(--font-display); font-size: 14px; font-weight: 700; letter-spacing: 0.025em; text-transform: uppercase; color: var(--primary);\">Line</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--surface); border: 2px solid var(--primary); border-radius: var(--radius-input); padding: 8px; font-family: var(--font-body); font-size: 16px; color: var(--on-surface);\"><option>Ginza</option><option>Marunouchi</option><option>Hibiya</option></select></div>",
      "label": "Select Menu",
      "stateLabel": "Dropdown styled as a flat white rectangle with blue arrow. No radius on corners."
    },
    {
      "name": "Checkbox Toggle",
      "desc": "Square checkbox with sharp corners; checked state uses blue fill with white checkmark.",
      "html": "<label style=\"display: flex; align-items: center; gap: 8px; font-family: var(--font-body); font-size: 16px; color: var(--on-surface);\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" checked style=\"appearance: none; width: 20px; height: 20px; border: 2px solid var(--primary); border-radius: 0; background-color: var(--primary); display: flex; align-items: center; justify-content: center; color: var(--on-primary); font-size: 14px;\" /> <span>Wheelchair accessible</span></label>",
      "label": "Checkbox Toggle",
      "stateLabel": "Square checkbox with sharp corners; checked state uses blue fill with white checkmark."
    }
  ],
  "extraComponents": [
    {
      "name": "Pictogram Frame",
      "desc": "Blue rounded-square frame (48px) containing a white geometric icon. The fundamental unit of the system.",
      "html": "<div style=\"background-color: var(--primary); border-radius: 8px; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center;\"><svg viewBox=\"0 0 48 48\" width=\"32\" height=\"32\" fill=\"var(--on-primary)\"><rect x=\"20\" y=\"12\" width=\"8\" height=\"24\" rx=\"2\"/><circle cx=\"24\" cy=\"8\" r=\"4\"/></svg></div>"
    },
    {
      "name": "Prohibition Overlay",
      "desc": "Red circle with 45° diagonal slash. Overlaid on a pictogram to indicate forbidden action.",
      "html": "<div style=\"position: relative; width: 48px; height: 48px;\"><div style=\"background-color: var(--primary); border-radius: 8px; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;\"><svg viewBox=\"0 0 48 48\" width=\"32\" height=\"32\" fill=\"var(--on-primary)\"><circle cx=\"24\" cy=\"16\" r=\"6\"/><rect x=\"20\" y=\"24\" width=\"8\" height=\"16\"/></svg></div><div style=\"position: absolute; top: 0; left: 0; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center;\"><svg viewBox=\"0 0 48 48\" width=\"48\" height=\"48\"><circle cx=\"24\" cy=\"24\" r=\"22\" fill=\"var(--error)\" fill-opacity=\"0.9\"/><line x1=\"12\" y1=\"12\" x2=\"36\" y2=\"36\" stroke=\"var(--on-error)\" stroke-width=\"4\" stroke-linecap=\"round\"/></svg></div></div>"
    },
    {
      "name": "Directional Arrow",
      "desc": "Blue background with white arrow silhouette. Indicates movement or direction at 45° or 90°.",
      "html": "<div style=\"background-color: var(--primary); border-radius: 8px; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center;\"><svg viewBox=\"0 0 48 48\" width=\"32\" height=\"32\" fill=\"var(--on-primary)\"><polygon points=\"8,24 32,24 24,16 24,32\"/></svg></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — 出口 EXIT</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — 東京メトロ TOKYO METRO</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — Ginza Line – Platform 2</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — Next train in 2 minutes. Please stand behind the yellow line.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — 階段 STAIRS</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Do not use rounded corners on inputs – input field corners are sharp (0px) to contrast with the rounded pictogram frames.",
      "avoid": {
        "html": "<input style=\"background-color: white; border-radius: 8px; border: 2px solid blue;\" placeholder=\"Rounded input – wrong\">",
        "label": "Avoid"
      },
      "rule": "Do not use rounded corners on inputs – input field corners are sharp (0px) to contrast with the rounded pictogram frames.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not add shadows, gradients, or any elevation. The system is strictly flat – no depth cues.",
      "avoid": {
        "html": "<div style=\"background-color: #0073B1; box-shadow: 0 4px 6px rgba(0,0,0,0.3); border-radius: 8px; width: 48px; height: 48px;\"></div>",
        "label": "Avoid"
      },
      "rule": "Do not add shadows, gradients, or any elevation. The system is strictly flat – no depth cues.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not use curved lines or organic shapes in icons – stick to 45°/90° angles and straight lines.",
      "avoid": {
        "html": "<svg viewBox=\"0 0 48 48\" fill=\"white\"><path d=\"M24 12 C18 12,14 18,14 24 C14 30,18 36,24 36 C30 36,34 30,34 24 C34 18,30 12,24 12 Z\"/></svg>",
        "label": "Avoid"
      },
      "rule": "Do not use curved lines or organic shapes in icons – stick to 45°/90° angles and straight lines.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not use internal lines, strokes, or outlines. All pictogram elements must be solid filled with no border.",
      "avoid": {
        "html": "<svg viewBox=\"0 0 48 48\" stroke=\"white\" stroke-width=\"2\" fill=\"none\"><circle cx=\"24\" cy=\"24\" r=\"12\"/></svg>",
        "label": "Avoid"
      },
      "rule": "Do not use internal lines, strokes, or outlines. All pictogram elements must be solid filled with no border.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "doAvoidStyle": "Crucial: never introduce gradients, shadows, rounded input corners, curved lines, or internal strokes anywhere.",
  "effects": [],
  "motion": [],
  "colors": {
    "primary": "#00324D",
    "on-primary": "#FFFFFF",
    "neutral": "#1A1A1A",
    "error": "#8B0000",
    "on-error": "#FFFFFF",
    "surface": "#FFFFFF",
    "on-surface": "#1A1A1A"
  },
  "typography": {
    "display": {
      "fontFamily": "Nunito Sans",
      "fontSize": "36px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "0.025em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "Nunito Sans",
      "fontSize": "24px",
      "fontWeight": 600,
      "lineHeight": 1.25,
      "letterSpacing": "0.025em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "Nunito Sans",
      "fontSize": "20px",
      "fontWeight": 600,
      "lineHeight": 1.375,
      "letterSpacing": "0em"
    },
    "body": {
      "fontFamily": "Nunito Sans",
      "fontSize": "16px",
      "fontWeight": 400,
      "lineHeight": 1.5,
      "letterSpacing": "0em"
    },
    "label": {
      "fontFamily": "Nunito Sans",
      "fontSize": "14px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "0.025em",
      "textTransform": "uppercase"
    }
  },
  "layouts": {
    "copy": {
      "heroKicker": "TOKYO METRO PICTOGRAM SYSTEM",
      "heroHeadline": "UNIVERSAL WAYFINDING LANGUAGE",
      "heroSub": "Ultra-simplified geometric silhouettes on a blue-and-white palette. Calm, authoritative, and legible across all barriers.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">EXPLORE PICTOGRAMS</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">VIEW STATIONS</button>",
      "navLinks": [
        "PICTOGRAMS",
        "STATIONS",
        "LINES",
        "WAYFINDING",
        "DEPLOYMENT"
      ],
      "features": [
        {
          "title": "PICTOGRAM LIBRARY",
          "desc": "Every icon is a solid-fill silhouette on a rounded-square frame. No strokes, no internal lines — pure geometry at 45°/90°.",
          "icon": "🚇",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🚇 PICTOGRAM LIBRARY</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Every icon is a solid-fill silhouette on a rounded-square frame. No strokes, no internal lines — pure geometry at 45°/90°.</div></div>"
        },
        {
          "title": "STATION SIGN PACK",
          "desc": "Pre-configured sets for exits, transfers, facilities, and prohibitions. Each sign uses the strict blue-white-red palette.",
          "icon": "🚉",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🚉 STATION SIGN PACK</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Pre-configured sets for exits, transfers, facilities, and prohibitions. Each sign uses the strict blue-white-red palette.</div></div>"
        },
        {
          "title": "LINE INTEGRATION",
          "desc": "Assign pictograms to metro lines with automatic colour mapping. Consistent placement across rolling stock and platforms.",
          "icon": "🔵",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔵 LINE INTEGRATION</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Assign pictograms to metro lines with automatic colour mapping. Consistent placement across rolling stock and platforms.</div></div>"
        },
        {
          "title": "PROHIBITION OVERLAYS",
          "desc": "Red circle-slash overlays for no-entry, no-smoking, and restricted areas. Flat, opaque, and universally understood.",
          "icon": "🚫",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🚫 PROHIBITION OVERLAYS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Red circle-slash overlays for no-entry, no-smoking, and restricted areas. Flat, opaque, and universally understood.</div></div>"
        },
        {
          "title": "DIRECTIONAL ARROWS",
          "desc": "48px solid arrows for guidance. Hard 90° turns or straight paths. No bezier curves — only rigid transit logic.",
          "icon": "⬆️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⬆️ DIRECTIONAL ARROWS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">48px solid arrows for guidance. Hard 90° turns or straight paths. No bezier curves — only rigid transit logic.</div></div>"
        }
      ],
      "ctaStripHeadline": "BUILD YOUR STATION'S WAYFINDING SYSTEM",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--primary); color: var(--on-primary); border: none; border-radius: var(--radius-btn); padding: 8px 16px; font-family: var(--font-display); font-size: 14px; font-weight: 700; line-height: 1.25; letter-spacing: 0.025em; text-transform: uppercase;\">START CONFIGURING</button>",
      "sidebarBrand": "TOKYO METRO PICTOGRAM",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "PICTOGRAM ASSETS",
          "active": true
        },
        {
          "icon": "◉",
          "label": "DEPLOYMENT MAP",
          "active": false
        }
      ],
      "dashboardTitle": "PICTOGRAM DEPLOYMENT DASHBOARD",
      "metrics": [
        {
          "label": "STATIONS ACTIVE",
          "value": "142",
          "delta": "+3",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "PICTOGRAMS INSTALLED",
          "value": "1,284",
          "delta": "+48",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "LINES COVERED",
          "value": "9",
          "delta": "0",
          "dir": "neutral",
          "direction": "neutral"
        },
        {
          "label": "PROHIBITION OVERLAYS",
          "value": "67",
          "delta": "+2",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "EXIT SIGNS DEPLOYED",
          "value": "412",
          "delta": "+11",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "MONTHLY PICTOGRAM INSTALLATIONS",
      "panelATitle": "STATION PICTOGRAM INVENTORY",
      "panelARows": [
        {
          "label": "SHINJUKU",
          "value": "84",
          "pct": 84
        },
        {
          "label": "TOKYO",
          "value": "72",
          "pct": 72
        },
        {
          "label": "SHIBUYA",
          "value": "63",
          "pct": 63
        },
        {
          "label": "UENO",
          "value": "58",
          "pct": 58
        },
        {
          "label": "GINZA",
          "value": "51",
          "pct": 51
        }
      ],
      "panelBTitle": "PROHIBITION OVERLAY USAGE",
      "panelBCells": [
        {
          "label": "NO ENTRY",
          "value": "18",
          "state": "ok"
        },
        {
          "label": "NO SMOKING",
          "value": "22",
          "state": "warn"
        },
        {
          "label": "NO FOOD",
          "value": "9",
          "state": "err"
        },
        {
          "label": "NO RUNNING",
          "value": "7",
          "state": "ok"
        },
        {
          "label": "NO BICYCLES",
          "value": "5",
          "state": "warn"
        },
        {
          "label": "NO PHOTOGRAPHY",
          "value": "3",
          "state": "err"
        },
        {
          "label": "NO PETS",
          "value": "2",
          "state": "ok"
        },
        {
          "label": "NO LUGGAGE",
          "value": "1",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "GINZA LINE",
        "MARUNOUCHI LINE",
        "HIBIYA LINE",
        "TOZAI LINE",
        "CHIYODA LINE",
        "YURAKUCHO LINE",
        "HANZOMON LINE"
      ],
      "series": [
        {
          "data": [
            180,
            210,
            150,
            190,
            220,
            130,
            170,
            170,
            170,
            170,
            170,
            170
          ],
          "label": "INSTALLED",
          "axis": "left",
          "color": "#00324D"
        },
        {
          "data": [
            22,
            15,
            28,
            10,
            8,
            32,
            18,
            18,
            18,
            18,
            18,
            18
          ],
          "label": "PENDING",
          "axis": "right-1",
          "color": "#1A1A1A"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'background:var(--primary);min-height:480px;display:flex;align-items:center;justify-content:center;flex-direction:column;padding:24px;'; el.innerHTML = '<div style=\"background:var(--on-primary);border-radius:var(--radius-default);width:120px;height:120px;display:flex;align-items:center;justify-content:center;\"><svg viewBox=\"0 0 48 48\" width=\"64\" height=\"64\" fill=\"var(--primary)\"><circle cx=\"24\" cy=\"13\" r=\"7\"/><rect x=\"20\" y=\"22\" width=\"8\" height=\"16\"/><rect x=\"12\" y=\"24\" width=\"8\" height=\"4\"/><rect x=\"28\" y=\"24\" width=\"8\" height=\"4\"/><rect x=\"20\" y=\"38\" width=\"4\" height=\"8\"/><rect x=\"24\" y=\"38\" width=\"4\" height=\"8\"/></svg></div><div style=\"font-family:var(--font-display);font-size:36px;font-weight:700;line-height:1.25;letter-spacing:0.025em;text-transform:uppercase;color:var(--on-primary);margin-top:24px;text-align:center;\">TOKYO METRO</div><div style=\"font-family:var(--font-display);font-size:14px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--on-primary);margin-top:8px;opacity:0.7;\">PICTOGRAM SYSTEM</div>'; }",
    "showcaseRender": "function(el) { el.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:16px;padding:24px;'; el.innerHTML = '<div style=\"background:var(--primary);border-radius:var(--radius-default);width:100%;height:120px;display:flex;align-items:center;justify-content:center;\"><svg viewBox=\"0 0 48 48\" width=\"48\" height=\"48\" fill=\"var(--on-primary)\"><rect x=\"12\" y=\"12\" width=\"10\" height=\"24\"/><rect x=\"26\" y=\"12\" width=\"10\" height=\"24\"/><rect x=\"12\" y=\"28\" width=\"24\" height=\"8\"/></svg></div><div style=\"background:var(--primary);border-radius:var(--radius-default);width:100%;height:120px;display:flex;align-items:center;justify-content:center;\"><svg viewBox=\"0 0 48 48\" width=\"48\" height=\"48\" fill=\"var(--on-primary)\"><polygon points=\"8,24 40,24 28,12 28,36\"/></svg></div><div style=\"background:var(--primary);border-radius:var(--radius-default);width:100%;height:120px;display:flex;align-items:center;justify-content:center;\"><svg viewBox=\"0 0 48 48\" width=\"48\" height=\"48\" fill=\"var(--on-primary)\"><circle cx=\"24\" cy=\"24\" r=\"20\"/><rect x=\"20\" y=\"4\" width=\"8\" height=\"32\"/><rect x=\"8\" y=\"20\" width=\"32\" height=\"8\"/></svg></div>'; }",
    "panelCRender": "function(el) { el.style.cssText = 'padding:16px;'; el.innerHTML = '<div style=\"font-family:var(--font-display);font-size:14px;font-weight:700;letter-spacing:0.025em;text-transform:uppercase;color:var(--primary);margin-bottom:8px;\">STATION INVENTORY</div><div style=\"display:flex;flex-direction:column;gap:8px;\"><div style=\"display:flex;justify-content:space-between;font-family:var(--font-body);color:var(--on-bg);\"><span>SHINJUKU</span><span>84</span></div><div style=\"display:flex;justify-content:space-between;font-family:var(--font-body);color:var(--on-bg);\"><span>TOKYO</span><span>72</span></div><div style=\"display:flex;justify-content:space-between;font-family:var(--font-body);color:var(--on-bg);\"><span>SHIBUYA</span><span>63</span></div></div>'; }",
    "heroBackground": "function(el) { el.style.background = 'var(--primary)'; }",
    "ctaBackground": "function(el) { el.style.background = 'var(--primary)'; }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText='height:2px;background:var(--primary);'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = 'var(--surface)'; }",
    "surfaceOverlay": "function(el) { var ov = document.createElement('div'); ov.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(canvas, tick) { var ctx = canvas.getContext('2d'); var w = canvas.width; var h = canvas.height; ctx.clearRect(0,0,w,h); var primary = getComputedStyle(canvas.parentElement).getPropertyValue('--primary').trim(); if (primary) { ctx.fillStyle = primary; } else { ctx.fillStyle = '#00324D'; } var step = 16; var offset = (tick * 2) % step; for (var x = offset; x < w; x += step) { ctx.fillRect(x, 0, 2, h); } for (var y = offset; y < h; y += step) { ctx.fillRect(0, y, w, 2); } }",
  "shadcnTokens": {
    "--color-background": "#FFFFFF",
    "--color-popover": "#FFFFFF",
    "--color-foreground": "#1A1A1A",
    "--color-card-foreground": "#1A1A1A",
    "--color-popover-foreground": "#1A1A1A",
    "--color-card": "#FFFFFF",
    "--color-muted": "#FFFFFF",
    "--color-muted-foreground": "#333333",
    "--color-primary": "#00324D",
    "--color-ring": "#00324D",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#1A1A1A",
    "--color-accent": "#1A1A1A",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
    "--color-border": "#00324D",
    "--color-input": "#00324D",
    "--color-destructive": "#8B0000"
  },
  "shadcnTokensClassic": {
    "--background": "#FFFFFF",
    "--popover": "#FFFFFF",
    "--foreground": "#1A1A1A",
    "--card-foreground": "#1A1A1A",
    "--popover-foreground": "#1A1A1A",
    "--card": "#FFFFFF",
    "--muted": "#FFFFFF",
    "--muted-foreground": "#333333",
    "--primary": "#00324D",
    "--ring": "#00324D",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#1A1A1A",
    "--accent": "#1A1A1A",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#00324D",
    "--input": "#00324D",
    "--destructive": "#8B0000"
  }
});
