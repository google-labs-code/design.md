registerSystem({
  "meta": {
    "name": "ISO 7001 Public Information Symbols",
    "tagline": "The international standard for wayfinding pictograms — a visual language of stark, geometric silhouettes designed for instantaneous cross-cultural legibility.",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap"
  },
  "yamlTokens": {
    "name": "ISO 7001 Public Information Symbols",
    "colors": {
      "inverse-on-surface": "#FFFFFF",
      "primary": "#000000",
      "on-primary": "#FFFFFF",
      "surface": "#FFFFFF",
      "on-surface": "#000000",
      "inverse-surface": "#000000",
      "outline": "#000000"
    },
    "typography": {
      "display": {
        "fontFamily": "Inter",
        "fontSize": "30px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.05em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Inter",
        "fontSize": "30px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.05em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Inter",
        "fontSize": "20px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.05em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Inter",
        "fontSize": "16px",
        "fontWeight": 400,
        "lineHeight": 1.5,
        "letterSpacing": "0em"
      },
      "label": {
        "fontFamily": "Inter",
        "fontSize": "12px",
        "fontWeight": 700,
        "lineHeight": 1,
        "letterSpacing": "0.1em",
        "textTransform": "uppercase"
      }
    },
    "rounded": {
      "default": "0px"
    },
    "spacing": {
      "section-internal": "16px",
      "gap-component": "16px",
      "gap-section": "32px",
      "height-sm": "32px",
      "height-md": "48px"
    },
    "components": {
      "pictogram-symbol": {
        "backgroundColor": "{colors.surface}",
        "textColor": "{colors.primary}",
        "rounded": "{rounded.default}",
        "size": "48px"
      },
      "pictogram-symbol-dark": {
        "backgroundColor": "{colors.inverse-surface}",
        "textColor": "{colors.inverse-on-surface}",
        "rounded": "{rounded.default}",
        "size": "48px"
      },
      "directional-arrow": {
        "textColor": "{colors.primary}",
        "height": "48px"
      },
      "prohibition-overlay": {
        "backgroundColor": "#DA291C",
        "rounded": "{rounded.default}",
        "size": "48px"
      },
      "symbol-grid": {
        "backgroundColor": "{colors.surface}",
        "rounded": "{rounded.default}",
        "padding": "16px"
      },
      "wayfinding-label": {
        "textColor": "{colors.primary}",
        "backgroundColor": "{colors.surface}",
        "padding": "4px"
      }
    },
    "version": "alpha",
    "description": "The international standard for wayfinding pictograms — a visual language of stark, geometric silhouettes designed for instantaneous cross-cultural legibility. Rooted in postwar modernist design and the International Typographic Style, every symbol is a pure black-on-white silhouette reduced to its fewest identifying features with zero decoration.",
    "provenance": {
      "coverage_status": "sparse",
      "identity_description": "The slug `iso-7001-public-information-symbols` refers to the international standard ISO 7001, *Graphical symbols — Public information symbols*, first published by the International Organization for Standardization (ISO) in 1976 (initial edition: ISO 7001:1976). The standard was subsequently revised in 1990, 2007, 2017, and 2023. It defines a library of simplified pictograms intended for use in",
      "manual_enrichment_required": false,
      "imagery_count": 4,
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
          "host": "commons.wikimedia.org",
          "count": 1
        },
        {
          "host": "collection.cooperhewitt.org",
          "count": 1
        },
        {
          "host": "archive.org",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://en.wikipedia.org/wiki/ISO_7001",
          "host": "en.wikipedia.org",
          "institution": null,
          "confidence_original": "high"
        },
        {
          "url": "https://commons.wikimedia.org/wiki/Category:AIGA_symbol_signs",
          "host": "commons.wikimedia.org",
          "institution": "Wikimedia Commons",
          "confidence_original": "medium"
        },
        {
          "url": "https://collection.cooperhewitt.org/",
          "host": "collection.cooperhewitt.org",
          "institution": "Cooper Hewitt, Smithsonian Design Museum",
          "confidence_original": "low"
        },
        {
          "url": "https://archive.org/details/symbolsourcebook00drey",
          "host": "archive.org",
          "institution": "Internet Archive",
          "confidence_original": "high"
        }
      ],
      "typefaces_attested": {},
      "flags": [
        "sparse_imagery",
        "no_typography_extracted",
        "1_robots_disallowed_urls"
      ],
      "honest_gaps": [
        {
          "\"1. **Colour specifications": "** No official hex, Pantone, or RAL values for the conventional blue background. All provided values are [unverified] or [conventional].\""
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
    "--secondary-col": "#000000",
    "--on-secondary": "#FFFFFF",
    "--surface": "#FFFFFF",
    "--on-bg-muted": "#1A1A1A",
    "--border": "#000000",
    "--error": "#DA291C",
    "--font-display": "Inter",
    "--font-body": "Inter",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "warn": "#000000",
    "ok": "#000000",
    "err": "#DA291C",
    "deltaUp": "#000000",
    "deltaDown": "#DA291C",
    "deltaFlat": "#1A1A1A",
    "live": "#000000",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#1A1A1A",
    "chartFont": "Inter"
  },
  "elevation": {
    "none": {
      "boxShadow": "none"
    },
    "low": {
      "boxShadow": "none"
    },
    "medium": {
      "boxShadow": "none"
    },
    "high": {
      "boxShadow": "none"
    }
  },
  "surfaceModel": "flat",
  "materialSimulation": {
    "model": "none"
  },
  "interactionModel": {
    "hover": {},
    "focus": {},
    "active": {}
  },
  "interactionStyles": ".ds-layout-frame .arrow-pulse { animation: arrow-pulse 1s steps(1) infinite; } @keyframes arrow-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }",
  "chartStyle": {
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#1A1A1A",
    "fontFamily": "Inter"
  },
  "dashboardStyle": {
    "layout": "Fixed grid of pictogram tiles with all-caps labels below each tile.",
    "density": "Sparse — ample clear space around each symbol equal to stroke width.",
    "panelTreatment": "Flat white panels with black borders, no shadows or backgrounds.",
    "dataVizStyle": "Pictogram-based (e.g., stick-figure icons) instead of lines or bars. Pure black on white.",
    "signatureElement": "A large central pictogram with a pulsing directional arrow for live wayfinding."
  },
  "landingStyle": {
    "heroApproach": "Full-screen hero with a giant, simplified pictogram (e.g., an airport passenger) centred on white, with all-caps Helvetica call-to-action below.",
    "scrollBehavior": "Hard cut sections — no smooth scroll animations. Each section is a black-and-white panel.",
    "ctaStyle": "Solid black button with white all-caps text, no rounding, no shadow.",
    "signatureMoment": "A prohibition overlay appears on a pictogram when the user scrolls to a restricted area section."
  },
  "globalFilter": null,
  "globalBodyCss": "font-family: var(--font-display), 'Inter', sans-serif; background-color: var(--bg); color: var(--on-bg); margin: 0; padding: 0;",
  "globalCss": ".ds-layout-frame .arrow-pulse { animation: arrow-pulse 1s steps(1) infinite; } @keyframes arrow-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }",
  "buttons": [
    {
      "name": "Primary Button",
      "desc": "Solid black fill, white all-caps label, sharp corners. Represents a primary action in a wayfinding interface.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--primary); color: var(--on-primary); border: 1px solid var(--primary); font-family: var(--font-display); font-size: 16px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; padding: 8px 24px; border-radius: var(--radius-default); cursor: pointer;\">ENTER</button>",
      "label": "Primary Button",
      "note": "Solid black fill, white all-caps label, sharp corners. Represents a primary action in a wayfinding interface."
    },
    {
      "name": "Secondary Button",
      "desc": "White fill with black border and black text, all-caps. Used for less prominent actions.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--surface); color: var(--on-bg); border: 1px solid var(--border); font-family: var(--font-display); font-size: 16px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; padding: 8px 24px; border-radius: var(--radius-default); cursor: pointer;\">EXIT</button>",
      "label": "Secondary Button",
      "note": "White fill with black border and black text, all-caps. Used for less prominent actions."
    },
    {
      "name": "Ghost Button",
      "desc": "No background, black outline only. For contextual actions like a skip or cancel.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; color: var(--on-bg); border: 1px solid var(--border); font-family: var(--font-display); font-size: 16px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; padding: 8px 24px; border-radius: var(--radius-default); cursor: pointer;\">BACK</button>",
      "label": "Ghost Button",
      "note": "No background, black outline only. For contextual actions like a skip or cancel."
    }
  ],
  "cards": [
    {
      "name": "Pictogram Symbol Card",
      "desc": "A single pictogram symbol centred within a square field. No internal detail, pure silhouette.",
      "html": "<div style=\"background: var(--surface); border: 1px solid var(--border); width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; border-radius: var(--radius-default);\"><svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"12\" width=\"24\" height=\"24\" fill=\"var(--primary)\"/><circle cx=\"24\" cy=\"24\" r=\"10\" fill=\"var(--surface)\"/></svg></div>",
      "label": "Pictogram Symbol Card",
      "note": "A single pictogram symbol centred within a square field. No internal detail, pure silhouette."
    },
    {
      "name": "Symbol Grid Card",
      "desc": "A grid of four pictograms with all-caps labels below each. Represents a wayfinding panel.",
      "html": "<div style=\"background: var(--surface); border: 1px solid var(--border); padding: 16px; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; border-radius: var(--radius-default);\"><div style=\"text-align: center;\"><div style=\"background: var(--surface); border: 1px solid var(--border); width: 48px; height: 48px; margin: 0 auto; display: flex; align-items: center; justify-content: center;\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"var(--primary)\"><circle cx=\"12\" cy=\"12\" r=\"12\"/></svg></div><span style=\"font-family: var(--font-display); font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--on-bg); display: block; margin-top: 4px;\">EXIT</span></div><div style=\"text-align: center;\"><div style=\"background: var(--surface); border: 1px solid var(--border); width: 48px; height: 48px; margin: 0 auto; display: flex; align-items: center; justify-content: center;\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"var(--primary)\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\"/></svg></div><span style=\"font-family: var(--font-display); font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--on-bg); display: block; margin-top: 4px;\">STAIRS</span></div><div style=\"text-align: center;\"><div style=\"background: var(--surface); border: 1px solid var(--border); width: 48px; height: 48px; margin: 0 auto; display: flex; align-items: center; justify-content: center;\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"var(--primary)\"><path d=\"M12 2 L22 22 L2 22 Z\"/></svg></div><span style=\"font-family: var(--font-display); font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--on-bg); display: block; margin-top: 4px;\">WC</span></div><div style=\"text-align: center;\"><div style=\"background: var(--surface); border: 1px solid var(--border); width: 48px; height: 48px; margin: 0 auto; display: flex; align-items: center; justify-content: center;\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"var(--primary)\"><circle cx=\"12\" cy=\"8\" r=\"4\"/><rect x=\"8\" y=\"12\" width=\"8\" height=\"10\"/></svg></div><span style=\"font-family: var(--font-display); font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--on-bg); display: block; margin-top: 4px;\">ELEVATOR</span></div></div>",
      "label": "Symbol Grid Card",
      "note": "A grid of four pictograms with all-caps labels below each. Represents a wayfinding panel."
    }
  ],
  "forms": [
    {
      "name": "Text Input",
      "desc": "Basic single-line text input with black border and all-caps label. No rounding.",
      "html": "<div style=\"margin-bottom: 16px;\"><label style=\"font-family: var(--font-display); font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--on-bg); display: block; margin-bottom: 4px;\">DESTINATION</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" style=\"background: var(--surface); border: 1px solid var(--border); color: var(--on-bg); font-family: var(--font-body); font-size: 16px; padding: 8px; width: 100%; border-radius: var(--radius-default); box-sizing: border-box;\"></div>",
      "label": "Text Input",
      "stateLabel": "Basic single-line text input with black border and all-caps label. No rounding."
    },
    {
      "name": "Select/Dropdown",
      "desc": "Simple select with black border and all-caps label. Uses system arrow.",
      "html": "<div style=\"margin-bottom: 16px;\"><label style=\"font-family: var(--font-display); font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--on-bg); display: block; margin-bottom: 4px;\">FLOOR</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--surface); border: 1px solid var(--border); color: var(--on-bg); font-family: var(--font-body); font-size: 16px; padding: 8px; width: 100%; border-radius: var(--radius-default); box-sizing: border-box;\"><option>1</option><option>2</option><option>3</option></select></div>",
      "label": "Select/Dropdown",
      "stateLabel": "Simple select with black border and all-caps label. Uses system arrow."
    },
    {
      "name": "Checkbox",
      "desc": "Checkbox with black border and all-caps label. Checkmark uses SVG for strict silhouette.",
      "html": "<div style=\"margin-bottom: 16px;\"><label style=\"font-family: var(--font-display); font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--on-bg); display: flex; align-items: center; gap: 8px;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"appearance: none; width: 16px; height: 16px; border: 1px solid var(--border); border-radius: 0; background: var(--surface); cursor: pointer;\"><span>ACCESSIBLE</span></label></div>",
      "label": "Checkbox",
      "stateLabel": "Checkbox with black border and all-caps label. Checkmark uses SVG for strict silhouette."
    }
  ],
  "extraComponents": [
    {
      "name": "Directional Arrow",
      "desc": "A simple black arrow pointing left or right. Smooth pulse animation (50% to 100% opacity at 1Hz with step timing).",
      "html": "<div style=\"display: inline-block; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center;\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"var(--primary)\"><path d=\"M20 12 L4 12 M10 6 L4 12 L10 18\" stroke=\"var(--primary)\" stroke-width=\"2\" fill=\"none\"/></svg></div>"
    },
    {
      "name": "Prohibition Overlay",
      "desc": "A red circle with a 45° diagonal slash, overlaid on a solid black pictogram. Used for no-smoking, no-parking, etc.",
      "html": "<div style=\"position: relative; width: 48px; height: 48px;\"><div style=\"background: var(--primary); width: 48px; height: 48px;\"></div><div style=\"position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;\"><svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"24\" cy=\"24\" r=\"22\" stroke=\"var(--error)\" stroke-width=\"4\" fill=\"none\"/><line x1=\"10\" y1=\"10\" x2=\"38\" y2=\"38\" stroke=\"var(--error)\" stroke-width=\"4\"/></svg></div></div>"
    },
    {
      "name": "Wayfinding Label",
      "desc": "A minimal all-caps label placed below a pictogram. Black text on white background with tight padding.",
      "html": "<span style=\"font-family: var(--font-display); font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--on-bg); background: var(--surface); padding: 2px 4px; border: 1px solid var(--border); display: inline-block;\">EXIT</span>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — EXIT</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — WAYFINDING</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — TOILET</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — Follow the marked paths to your destination.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — STAIRS</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Use pure black-on-white silhouette with uniform stroke weight and no internal detail.",
      "rule": "Maximum figure-ground contrast with geometric simplification.",
      "do": {
        "label": "Do",
        "html": "<div style=\"background:#000000;width:48px;height:48px;display:flex;align-items:center;justify-content:center;\"><svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"#FFFFFF\"><circle cx=\"24\" cy=\"14\" r=\"8\"/><rect x=\"16\" y=\"22\" width=\"16\" height=\"24\"/></svg></div>"
      },
      "avoid": {
        "label": "Avoid",
        "html": "<div style=\"background:linear-gradient(to bottom,#000000,#333333);width:48px;height:48px;border-radius:50%;\"></div>"
      }
    },
    {
      "desc": "Keep corner style consistent across a set — all sharp or all rounded (radius = half stroke weight).",
      "rule": "Consistency in corner style signals a unified visual language.",
      "do": {
        "label": "Do",
        "html": "<div style=\"display:flex;gap:8px;\"><div style=\"background:#000000;width:24px;height:24px;border-radius:0;\"></div><div style=\"background:#000000;width:24px;height:24px;border-radius:0;\"></div></div>"
      },
      "avoid": {
        "label": "Avoid",
        "html": "<div style=\"display:flex;gap:8px;\"><div style=\"background:#000000;width:24px;height:24px;border-radius:0;\"></div><div style=\"background:#000000;width:24px;height:24px;border-radius:4px;\"></div></div>"
      }
    },
    {
      "desc": "Use geometric sans-serif all-caps (Inter) for labels, never serif or mixed case.",
      "rule": "Typography must be all-caps geometric sans.",
      "do": {
        "label": "Do",
        "html": "<span style=\"font-family:Inter;font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#000000;\">EXIT</span>"
      },
      "avoid": {
        "label": "Avoid",
        "html": "<span style=\"font-family:'Times New Roman';font-size:12px;font-weight:400;text-transform:none;\">Exit</span>"
      }
    },
    {
      "desc": "Place labels outside the symbol field, never inside.",
      "rule": "Text must not intrude on the silhouette.",
      "do": {
        "label": "Do",
        "html": "<div style=\"display:flex;flex-direction:column;align-items:center;\"><div style=\"background:#000000;width:48px;height:48px;\"></div><span style=\"font-family:Inter;font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#000000;margin-top:4px;\">TOILET</span></div>"
      },
      "avoid": {
        "label": "Avoid",
        "html": "<div style=\"background:#000000;width:48px;height:48px;display:flex;align-items:center;justify-content:center;color:#FFFFFF;font-family:sans-serif;font-size:10px;\">X</div>"
      }
    }
  ],
  "doAvoidStyle": "No decorative treatments: avoid shadows, gradients, transparency, rounded corners (unless consistent within set), serif or italic text, any colour outside black and white (except red prohibition).",
  "effects": [],
  "motion": [],
  "colors": {
    "primary": "#000000",
    "onPrimary": "#FFFFFF",
    "surface": "#FFFFFF",
    "onSurface": "#000000",
    "inverseSurface": "#000000",
    "inverseOnSurface": "#FFFFFF",
    "outline": "#000000",
    "error": "#DA291C"
  },
  "typography": {
    "display": {
      "fontFamily": "Inter",
      "fontSize": "30px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "0.05em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "Inter",
      "fontSize": "30px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "0.05em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "Inter",
      "fontSize": "20px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "0.05em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "Inter",
      "fontSize": "16px",
      "fontWeight": 400,
      "lineHeight": 1.5,
      "letterSpacing": "0em"
    },
    "label": {
      "fontFamily": "Inter",
      "fontSize": "12px",
      "fontWeight": 700,
      "lineHeight": 1,
      "letterSpacing": "0.1em",
      "textTransform": "uppercase"
    }
  },
  "radius": {
    "default": "0px"
  },
  "spacing": {
    "sectionInternal": "16px",
    "gapComponent": "16px",
    "gapSection": "32px",
    "heightSm": "32px",
    "heightMd": "48px"
  },
  "layouts": {
    "copy": {
      "heroKicker": "ISO 7001:2023",
      "heroHeadline": "CROSS‑CULTURAL LEGIBILITY",
      "heroSub": "A visual language of stark geometric silhouettes for instantaneous comprehension in public wayfinding.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">EXPLORE SYMBOL SET</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">VIEW STANDARD</button>",
      "navLinks": [
        "SYMBOLS",
        "GRID",
        "LEGIBILITY",
        "COMPLIANCE"
      ],
      "features": [
        {
          "title": "UNIFORM STROKE WEIGHT",
          "desc": "Every pictogram shares identical stroke thickness for visual consistency across the entire set.",
          "icon": "📏",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📏 UNIFORM STROKE WEIGHT</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Every pictogram shares identical stroke thickness for visual consistency across the entire set.</div></div>"
        },
        {
          "title": "BOOLEAN GEOMETRY",
          "desc": "Shapes constructed from rectangles, circles, and polygons on an integer grid — no bezier curves.",
          "icon": "🔲",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔲 BOOLEAN GEOMETRY</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Shapes constructed from rectangles, circles, and polygons on an integer grid — no bezier curves.</div></div>"
        },
        {
          "title": "MAXIMUM CONTRAST",
          "desc": "Pure black-on-white silhouette with zero internal detail, gradients, or transparency.",
          "icon": "⚫",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⚫ MAXIMUM CONTRAST</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Pure black-on-white silhouette with zero internal detail, gradients, or transparency.</div></div>"
        },
        {
          "title": "ALL-CAPS LABELS",
          "desc": "Geometric sans-serif labels positioned outside the symbol boundary for clear identification.",
          "icon": "🔤",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔤 ALL-CAPS LABELS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Geometric sans-serif labels positioned outside the symbol boundary for clear identification.</div></div>"
        }
      ],
      "ctaStripHeadline": "IMPLEMENT THE STANDARD",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">DOWNLOAD SYMBOL SET</button>",
      "sidebarBrand": "ISO 7001",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "SYMBOL LIBRARY",
          "active": true
        },
        {
          "icon": "◉",
          "label": "USAGE GUIDELINES",
          "active": false
        }
      ],
      "dashboardTitle": "SYMBOL COMPLIANCE AUDIT",
      "metrics": [
        {
          "label": "SYMBOLS",
          "value": "178",
          "delta": "+2",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "COVERAGE",
          "value": "94%",
          "delta": "+1.2%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "LEGIBILITY SCORE",
          "value": "9.8",
          "delta": "+0.3",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "CLEAR SPACE RATIO",
          "value": "2.4%",
          "delta": "0.0%",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "LEGIBILITY BY DISTANCE",
      "panelATitle": "STROKE WEIGHT UNIFORMITY",
      "panelARows": [
        {
          "label": "SET A",
          "value": "2.5%",
          "pct": 2.5
        },
        {
          "label": "SET B",
          "value": "2.5%",
          "pct": 2.5
        },
        {
          "label": "PROHIBITION",
          "value": "3.0%",
          "pct": 3
        },
        {
          "label": "ARROWS",
          "value": "2.5%",
          "pct": 2.5
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "CORNER STYLE COMPLIANCE",
      "panelBCells": [
        {
          "label": "ROUNDED",
          "value": "4",
          "state": "ok"
        },
        {
          "label": "SHARP",
          "value": "174",
          "state": "warn"
        },
        {
          "label": "MIXED",
          "value": "0",
          "state": "err"
        },
        {
          "label": "RADIUS CHECK",
          "value": "PASS",
          "state": "ok"
        },
        {
          "label": "THRESHOLD",
          "value": "0.5%",
          "state": "warn"
        },
        {
          "label": "TOLERANCE",
          "value": "±0.1%",
          "state": "err"
        },
        {
          "label": "STATUS",
          "value": "COMPLIANT",
          "state": "ok"
        },
        {
          "label": "NEXT AUDIT",
          "value": "Q3 2025",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "5m",
        "10m",
        "20m",
        "30m",
        "40m",
        "50m"
      ],
      "series": [
        {
          "data": [
            98,
            95,
            88,
            76,
            62,
            45,
            45,
            45,
            45,
            45,
            45,
            45
          ],
          "label": "RECOGNITION RATE",
          "axis": "left",
          "color": "#000000"
        },
        {
          "data": [
            0.8,
            1.2,
            1.8,
            2.5,
            3.3,
            4.1,
            4.1,
            4.1,
            4.1,
            4.1,
            4.1,
            4.1
          ],
          "label": "READING TIME (s)",
          "axis": "right-1",
          "color": "#000000"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;background:var(--bg);color:var(--on-bg);padding:32px;box-sizing:border-box;'; el.innerHTML = '<div style=\"max-width:480px;text-align:center;\"><svg width=\"240\" height=\"240\" viewBox=\"0 0 240 240\" fill=\"var(--primary)\" style=\"display:block;margin:0 auto 24px;\"><rect x=\"40\" y=\"40\" width=\"160\" height=\"160\" rx=\"0\" fill=\"var(--primary)\"/><circle cx=\"120\" cy=\"120\" r=\"60\" fill=\"var(--bg)\"/></svg><h1 style=\"font-family:var(--font-display);font-size:30px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;margin:0 0 8px;\">ISO 7001</h1><p style=\"font-family:var(--font-body);font-size:16px;line-height:1.5;margin:0 0 24px;color:var(--on-bg-muted);\">A visual language of stark geometric silhouettes for instantaneous comprehension in public wayfinding.</p><button style=\"background:var(--primary);color:var(--on-primary);border:1px solid var(--primary);font-family:var(--font-display);font-size:16px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;padding:8px 24px;border-radius:var(--radius-default);cursor:pointer;\">EXPLORE SYMBOL SET</button></div>'; }",
    "showcaseRender": "function(el) { el.style.cssText = 'padding:32px;background:var(--surface);color:var(--on-bg);display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:16px;'; el.innerHTML = '<div style=\"text-align:center;\"><div style=\"width:64px;height:64px;margin:0 auto 8px;background:var(--surface);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;\"><svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"var(--primary)\"><circle cx=\"24\" cy=\"14\" r=\"8\" /><rect x=\"16\" y=\"22\" width=\"16\" height=\"24\" /></svg></div><span style=\"font-family:var(--font-display);font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--on-bg);\">TOILET</span></div><div style=\"text-align:center;\"><div style=\"width:64px;height:64px;margin:0 auto 8px;background:var(--surface);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;\"><svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"var(--primary)\"><rect x=\"8\" y=\"8\" width=\"32\" height=\"32\" /></svg></div><span style=\"font-family:var(--font-display);font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--on-bg);\">EXIT</span></div><div style=\"text-align:center;\"><div style=\"width:64px;height:64px;margin:0 auto 8px;background:var(--surface);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;\"><svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"var(--primary)\"><path d=\"M24 8 L36 40 L12 40 Z\" /></svg></div><span style=\"font-family:var(--font-display);font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--on-bg);\">STAIRS</span></div><div style=\"text-align:center;\"><div style=\"width:64px;height:64px;margin:0 auto 8px;background:var(--surface);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;\"><svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"var(--primary)\"><circle cx=\"24\" cy=\"16\" r=\"6\" /><rect x=\"18\" y=\"22\" width=\"12\" height=\"18\" /><rect x=\"14\" y=\"28\" width=\"20\" height=\"4\" /></svg></div><span style=\"font-family:var(--font-display);font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--on-bg);\">ELEVATOR</span></div>'; }",
    "panelCRender": "function(el) { el.style.cssText = 'padding:24px;background:var(--surface);border:1px solid var(--border);color:var(--on-bg);display:flex;flex-direction:column;gap:16px;'; el.innerHTML = '<h3 style=\"font-family:var(--font-display);font-size:20px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;margin:0;\">LEGIBILITY BY DISTANCE</h3><div style=\"display:flex;justify-content:space-around;font-family:var(--font-body);font-size:12px;font-weight:700;text-transform:uppercase;\"><div>5m</div><div>10m</div><div>20m</div><div>30m</div><div>40m</div><div>50m</div></div><div style=\"display:flex;align-items:flex-end;height:120px;gap:8px;\"><div style=\"flex:1;background:var(--primary);height:98%;\"></div><div style=\"flex:1;background:var(--primary);height:95%;\"></div><div style=\"flex:1;background:var(--primary);height:88%;\"></div><div style=\"flex:1;background:var(--primary);height:76%;\"></div><div style=\"flex:1;background:var(--primary);height:62%;\"></div><div style=\"flex:1;background:var(--primary);height:45%;\"></div></div><span style=\"font-family:var(--font-body);font-size:10px;font-weight:400;color:var(--on-bg-muted);text-align:center;\">RECOGNITION RATE (%)</span>'; }",
    "heroBackground": "function(el) { el.style.background = '#FFFFFF'; }",
    "ctaBackground": "function(el) { el.style.background = '#FFFFFF'; }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText='height:2px;background:var(--primary);width:100%;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = '#FFFFFF'; }",
    "surfaceOverlay": "function(el) { var ov=document.createElement('div'); ov.style.cssText='position:absolute;inset:0;z-index:2;pointer-events:none;border:1px solid transparent;'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(canvas, tick) { var ctx = canvas.getContext('2d'); var w = canvas.width = canvas.parentElement.clientWidth; var h = canvas.height = canvas.parentElement.clientHeight; ctx.clearRect(0, 0, w, h); ctx.fillStyle = '#000000'; var phase = (tick % 1000) / 1000; var opacity = 0.5 + 0.5 * Math.sin(phase * Math.PI * 2); ctx.globalAlpha = opacity; var size = Math.min(w, h) * 0.1; ctx.beginPath(); ctx.arc(w/2, h/2, size, 0, Math.PI * 2); ctx.fill(); ctx.globalAlpha = 1; }",
  "shadcnTokens": {
    "--color-background": "#FFFFFF",
    "--color-popover": "#FFFFFF",
    "--color-foreground": "#000000",
    "--color-card-foreground": "#000000",
    "--color-popover-foreground": "#000000",
    "--color-card": "#FFFFFF",
    "--color-muted": "#FFFFFF",
    "--color-muted-foreground": "#1A1A1A",
    "--color-primary": "#000000",
    "--color-ring": "#000000",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#000000",
    "--color-accent": "#000000",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
    "--color-border": "#000000",
    "--color-input": "#000000",
    "--color-destructive": "#DA291C"
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
    "--primary": "#000000",
    "--ring": "#000000",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#000000",
    "--accent": "#000000",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#DA291C"
  }
});
