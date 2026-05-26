registerSystem({
  "meta": {
    "name": "ANSI Z535",
    "tagline": "Industrial safety signage system for hazard communication",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap"
  },
  "yamlTokens": {
    "name": "ANSI Z535",
    "colors": {
      "white": "#FFFFFF",
      "black": "#000000",
      "warning-orange": "#FF6600",
      "caution-yellow": "#FFD100"
    },
    "typography": {
      "display": {
        "fontFamily": "Barlow",
        "fontSize": "60px",
        "fontWeight": 900,
        "lineHeight": 1.25,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Barlow",
        "fontSize": "30px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Barlow",
        "fontSize": "18px",
        "fontWeight": 400,
        "lineHeight": 1.5,
        "letterSpacing": "0em"
      },
      "label": {
        "fontFamily": "Barlow",
        "fontSize": "14px",
        "fontWeight": 400,
        "lineHeight": 1.25,
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
      "section-internal": "16px",
      "page-edge": "16px",
      "gap-component": "16px",
      "gap-section": "8px",
      "height-sm": "32px",
      "height-md": "48px",
      "height-lg": "80px",
      "icon": "48px"
    },
    "components": {
      "safety-sign": {
        "backgroundColor": "#FFFFFF",
        "textColor": "#000000",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "signal-word-panel-danger": {
        "backgroundColor": "#E60000",
        "textColor": "#FFFFFF",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "signal-word-panel-warning": {
        "backgroundColor": "#FF6600",
        "textColor": "#000000",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "signal-word-panel-caution": {
        "backgroundColor": "#FFD100",
        "textColor": "#000000",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "metric-cell": {
        "backgroundColor": "#FFFFFF",
        "textColor": "#000000",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "pictogram": {
        "textColor": "#000000",
        "size": "48px"
      }
    },
    "version": "alpha",
    "description": "Industrial safety signage system for hazard communication using strict signal-word–color pairings, high-contrast flat typography, and black pictograms on white backgrounds. Instant danger-level recognition through blunt, authoritative, purely utilitarian visual language.",
    "provenance": {
      "coverage_status": "sparse",
      "identity_description": "The slug `ansi-z535` refers to the American National Standards Institute (ANSI) Z535 series of standards for safety signs, safety colors, and markings. This is a prescriptive visual language defined by multiple parts: Z535.1 (colors), Z535.2 (environmental signs), Z535.3 (safety symbols), Z535.4 (product labels), Z535.5 (tags and barricade tapes), and Z535.6 (product safety information). The syste",
      "manual_enrichment_required": false,
      "imagery_count": 4,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "www.osha.gov",
          "count": 2
        },
        {
          "host": "en.wikipedia.org",
          "count": 1
        },
        {
          "host": "www.makeitelectric.org",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://en.wikipedia.org/wiki/ANSI_Z535",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia",
          "confidence_original": "high"
        },
        {
          "url": "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.145",
          "host": "www.osha.gov",
          "institution": "OSHA",
          "confidence_original": "high"
        },
        {
          "url": "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.144",
          "host": "www.osha.gov",
          "institution": "OSHA",
          "confidence_original": "high"
        },
        {
          "url": "https://www.makeitelectric.org/technologies/nema-standards/",
          "host": "www.makeitelectric.org",
          "institution": "NEMA",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Helvetica",
          "foundry": null,
          "year": null,
          "google_fonts": "Inter",
          "attestation": "conventional"
        },
        {
          "name": "Helvetica",
          "foundry": null,
          "year": null,
          "google_fonts": "Inter",
          "attestation": "conventional"
        },
        {
          "name": "Arial",
          "foundry": null,
          "year": null,
          "google_fonts": "Arimo",
          "attestation": "conventional"
        }
      ],
      "flags": [
        "sparse_imagery"
      ],
      "honest_gaps": [
        "1. Exact hex values for all safety colors (contested)."
      ]
    }
  },
  "colorMode": "light",
  "tokens": "--caution: #FFD100;--safety-green: #00A14A;",
  "semanticColors": {
    "ok": "#00A14A",
    "warn": "#FF6600",
    "err": "#E60000",
    "delta-up": "#00A14A",
    "delta-down": "#E60000",
    "delta-flat": "#000000",
    "deltaUp": "#00A14A",
    "deltaDown": "#E60000",
    "deltaFlat": "#000000",
    "live": "#E60000",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#1A1A1A",
    "chartFont": "Barlow"
  },
  "chartStyle": {
    "type": "none",
    "description": "No charts in this system; numeric data is displayed as metric values or status badges only.",
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#1A1A1A",
    "fontFamily": "Barlow"
  },
  "surfaceModel": "flat",
  "materialSimulation": {
    "model": "coated-card",
    "params": {}
  },
  "globalFilter": "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none;\">\n  <filter id=\"ds-noise\">\n    <feTurbulence type=\"fractalNoise\" baseFrequency=\"0.4\" numOctaves=\"2\" result=\"noise\"/>\n    <feColorMatrix type=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.05 0\" in=\"noise\" result=\"coloredNoise\"/>\n    <feBlend mode=\"multiply\" in=\"coloredNoise\" in2=\"SourceGraphic\"/>\n  </filter>\n</svg>",
  "globalBodyCss": "font-family: var(--font-body, Barlow); background: var(--bg, #FFFFFF); color: var(--on-bg, #000000); margin: 0; padding: 0;",
  "globalCss": ".ds-layout-frame, .ds-layout-frame * {\n  border-radius: 0 !important;\n  box-shadow: none !important;\n  text-shadow: none !important;\n  background-image: none !important;\n}\n.ds-layout-frame::after {\n  content: '';\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  background: transparent;\n  filter: url(#ds-noise);\n  z-index: 1;\n}",
  "interactionModel": {
    "hover": {
      "effect": "none"
    },
    "focus": {
      "outline": "2px dashed #000000",
      "outline-offset": "2px"
    },
    "active": {
      "effect": "none"
    }
  },
  "interactionStyles": ".ds-layout-frame *:focus { outline: 2px dashed #000000; outline-offset: 2px; }\n.ds-layout-frame * { transition: none; }\n.ds-layout-frame .strobe { animation: strobe 0.33s steps(1) infinite; }\n@keyframes strobe { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }",
  "spacing": {
    "component-internal": "16px",
    "section-internal": "16px",
    "page-edge": "16px",
    "gap-component": "16px",
    "gap-section": "8px",
    "height-sm": "32px",
    "height-md": "48px",
    "height-lg": "80px",
    "icon": "48px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "0px"
  },
  "elevation": {},
  "dashboardStyle": {
    "layout": "Metric cells and status badges in a dense grid, no charts.",
    "density": "High-density warnings with tight spacing (8px gaps).",
    "panelTreatment": "Solid flat panels with 4px black border, no shadows, no rounded corners.",
    "dataVizStyle": "None; all data as numeric values with delta indicators (green/red).",
    "signatureElement": "Signal word badge at the top of each dashboard card."
  },
  "landingStyle": {
    "heroApproach": "Single centered safety sign with signal word panel and message, full height viewport, white background.",
    "scrollBehavior": "Static, minimal scrolling; all content above fold.",
    "ctaStyle": "Outline button with 4px black border and uppercase text, no fill.",
    "signatureMoment": "DANGER signal word strobes at 3Hz steps(1) animation on page load."
  },
  "buttons": [
    {
      "name": "Primary Danger Button",
      "desc": "Solid red panel with white uppercase text, 4px black border, no radius. No hover effects.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--primary); color: var(--on-primary); border: 4px solid var(--border); border-radius: var(--radius-btn); font-family: var(--font-display); font-size: 18px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.025em; padding: 8px 16px; cursor: pointer;\">DANGER</button>",
      "label": "Primary Danger Button",
      "note": "Solid red panel with white uppercase text, 4px black border, no radius. No hover effects."
    },
    {
      "name": "Secondary Warning Button",
      "desc": "Solid orange panel with black uppercase text, 4px black border, no radius. No hover effects.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--secondary-col); color: var(--on-secondary); border: 4px solid var(--border); border-radius: var(--radius-btn); font-family: var(--font-display); font-size: 18px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.025em; padding: 8px 16px; cursor: pointer;\">WARNING</button>",
      "label": "Secondary Warning Button",
      "note": "Solid orange panel with black uppercase text, 4px black border, no radius. No hover effects."
    },
    {
      "name": "Outline Caution Button",
      "desc": "White background, black text, 4px black border. No fill. No hover effects.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--surface); color: var(--on-bg); border: 4px solid var(--border); border-radius: var(--radius-btn); font-family: var(--font-display); font-size: 18px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.025em; padding: 8px 16px; cursor: pointer;\">CAUTION</button>",
      "label": "Outline Caution Button",
      "note": "White background, black text, 4px black border. No fill. No hover effects."
    }
  ],
  "cards": [
    {
      "name": "Safety Sign Card",
      "desc": "Full sign representation: red signal word panel at top, white message panel below, 4px black border overall. No rounded corners, no shadows.",
      "html": "<div style=\"background: var(--surface); border: 4px solid var(--border); border-radius: var(--radius-card); width: 300px; font-family: var(--font-body);\"><div style=\"background: var(--primary); color: var(--on-primary); font-family: var(--font-display); font-size: 30px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.025em; padding: 8px 16px; text-align: center;\">DANGER</div><div style=\"padding: 16px; color: var(--on-bg); font-family: var(--font-body); font-size: 16px; line-height: 1.5;\">High voltage. Risk of electric shock. Do not open.</div></div>",
      "label": "Safety Sign Card",
      "note": "Full sign representation: red signal word panel at top, white message panel below, 4px black border overall. No rounded corners, no shadows."
    },
    {
      "name": "Metric Cell Card",
      "desc": "Black-bordered white card with label, value, and delta indicator. Used for dashboards.",
      "html": "<div style=\"background: var(--surface); border: 4px solid var(--border); border-radius: var(--radius-card); padding: 16px; width: 200px; font-family: var(--font-body);\"><div style=\"font-family: var(--font-body); font-size: 14px; font-weight: 400; text-transform: uppercase; letter-spacing: -0.025em; color: var(--on-bg);\">PRESSURE</div><div style=\"font-family: var(--font-display); font-size: 24px; font-weight: 700; text-transform: uppercase; color: var(--on-bg); margin: 4px 0;\">120 PSI</div><div style=\"font-family: var(--font-body); font-size: 14px; font-weight: 400; color: var(--ok);\">+5 PSI</div></div>",
      "label": "Metric Cell Card",
      "note": "Black-bordered white card with label, value, and delta indicator. Used for dashboards."
    }
  ],
  "forms": [
    {
      "name": "Text Input",
      "desc": "White input with 4px black border, no radius. Flat and utilitarian.",
      "html": "<div style=\"display: flex; flex-direction: column; max-width: 300px;\"><label style=\"font-family: var(--font-body); font-size: 14px; text-transform: uppercase; margin-bottom: 4px; color: var(--on-bg);\">INPUT LABEL</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" placeholder=\"Enter value\" style=\"background: var(--surface); border: 4px solid var(--border); border-radius: var(--radius-input); padding: 8px 16px; height: 48px; font-family: var(--font-body); font-size: 16px; color: var(--on-bg);\"/></div>",
      "label": "Text Input",
      "stateLabel": "White input with 4px black border, no radius. Flat and utilitarian."
    },
    {
      "name": "Select Dropdown",
      "desc": "Faux select with black border, dropdown arrow, no radius. Simulates industrial panel control.",
      "html": "<div style=\"display: flex; flex-direction: column; max-width: 300px;\"><label style=\"font-family: var(--font-body); font-size: 14px; text-transform: uppercase; margin-bottom: 4px; color: var(--on-bg);\">SELECT OPTION</label><div style=\"background: var(--surface); border: 4px solid var(--border); border-radius: var(--radius-input); padding: 8px 16px; height: 48px; font-family: var(--font-body); font-size: 16px; color: var(--on-bg); display: flex; align-items: center; justify-content: space-between; cursor: pointer;\" role=\"listbox\"><span>Option A</span><span style=\"border-left: 2px solid var(--border); padding-left: 8px; font-size: 12px;\">▼</span></div></div>",
      "label": "Select Dropdown",
      "stateLabel": "Faux select with black border, dropdown arrow, no radius. Simulates industrial panel control."
    },
    {
      "name": "Checkbox",
      "desc": "Square box with 4px black border, no radius. Label on right.",
      "html": "<div style=\"display: flex; align-items: center; gap: 8px;\"><div style=\"width: 24px; height: 24px; border: 4px solid var(--border); border-radius: var(--radius-chip); background: var(--surface);\"></div><label style=\"font-family: var(--font-body); font-size: 16px; color: var(--on-bg);\">Enable warning</label></div>",
      "label": "Checkbox",
      "stateLabel": "Square box with 4px black border, no radius. Label on right."
    }
  ],
  "extraComponents": [
    {
      "name": "Signal Word Badge",
      "desc": "Compact solid-color badge with uppercase signal word, no border. Used for status or severity labels.",
      "html": "<div style=\"background: var(--primary); color: var(--on-primary); font-family: var(--font-display); font-size: 14px; font-weight: 700; text-transform: uppercase; padding: 4px 8px; display: inline-block;\">DANGER</div>"
    },
    {
      "name": "Pictogram (Warning Triangle)",
      "desc": "Black silhouette inside a 2px black circle. No fill, no gradient. Represents standard safety symbol.",
      "html": "<div style=\"width: 48px; height: 48px; border: 2px solid var(--border); border-radius: 50%; display: flex; align-items: center; justify-content: center;\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"var(--on-bg)\"><path d=\"M12 2L2 22h20L12 2z\"/></svg></div>"
    },
    {
      "name": "Safety Green Badge",
      "desc": "Green background badge with white text. Used for safe status or compliance indicators.",
      "html": "<div style=\"background: var(--ok); color: var(--on-primary); font-family: var(--font-display); font-size: 14px; font-weight: 700; text-transform: uppercase; padding: 4px 8px; display: inline-block;\">SAFE</div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — DANGER</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — HIGH VOLTAGE</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — WARNING MESSAGE</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — This is a safety message.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — SEVERITY</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Rounded corners on any panel or button soften the authoritative visual language.",
      "avoid": {
        "html": "<div style=\"background: var(--primary); color: var(--on-primary); border-radius: 8px; padding: 16px; font-family: var(--font-display); font-size: 18px;\">DANGER</div>",
        "label": "Avoid"
      },
      "rule": "Rounded corners on any panel or button soften the authoritative visual language.",
      "do": {
        "label": "Do",
        "html": "<div style=\"background: var(--primary); color: var(--on-primary); border: 4px solid var(--border); padding: 16px; font-family: var(--font-display); font-size: 18px; text-transform: uppercase; letter-spacing: 0.025em;\">DANGER</div>"
      }
    },
    {
      "desc": "Gradients reduce contrast and legibility, violating the flat, solid-color mandate.",
      "avoid": {
        "html": "<div style=\"background: linear-gradient(to bottom, var(--primary), #AA0000); color: var(--on-primary); padding: 16px; font-family: var(--font-display); font-size: 18px;\">DANGER</div>",
        "label": "Avoid"
      },
      "rule": "Gradients reduce contrast and legibility, violating the flat, solid-color mandate.",
      "do": {
        "label": "Do",
        "html": "<div style=\"background: var(--primary); color: var(--on-primary); border: 4px solid var(--border); padding: 16px; font-family: var(--font-display); font-size: 18px; text-transform: uppercase; letter-spacing: 0.025em;\">DANGER</div>"
      }
    },
    {
      "desc": "Shadows add depth and break the matte, two-dimensional sign convention.",
      "avoid": {
        "html": "<div style=\"background: var(--surface); color: var(--on-bg); box-shadow: 2px 2px 4px rgba(0,0,0,0.5); padding: 16px; border: 1px solid var(--border);\">WARNING</div>",
        "label": "Avoid"
      },
      "rule": "Shadows add depth and break the matte, two-dimensional sign convention.",
      "do": {
        "label": "Do",
        "html": "<div style=\"background: var(--surface); color: var(--on-bg); border: 4px solid var(--border); padding: 16px; font-family: var(--font-display); font-size: 18px; text-transform: uppercase; letter-spacing: 0.025em;\">WARNING</div>"
      }
    },
    {
      "desc": "Script or decorative fonts undermine the industrial, no-nonsense tone.",
      "avoid": {
        "html": "<div style=\"font-family: 'Brush Script MT', cursive; color: var(--on-bg); font-size: 24px;\">Danger</div>",
        "label": "Avoid"
      },
      "rule": "Script or decorative fonts undermine the industrial, no-nonsense tone.",
      "do": {
        "label": "Do",
        "html": "<div style=\"background: var(--surface); color: var(--on-bg); border: 4px solid var(--border); padding: 16px; font-family: var(--font-display); font-size: 24px; text-transform: uppercase; letter-spacing: 0.025em;\">DANGER</div>"
      }
    }
  ],
  "layouts": {
    "copy": {
      "heroKicker": "ANSI Z535 COMPLIANT",
      "heroHeadline": "HAZARD COMMUNICATION SYSTEM",
      "heroSub": "Instant danger-level recognition through strict signal-word–color pairings. Flat, high-contrast, purely utilitarian.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">INSPECT SIGNS</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">VIEW STANDARDS</button>",
      "navLinks": [
        "DANGER",
        "WARNING",
        "CAUTION",
        "NOTICE",
        "EXIT"
      ],
      "features": [
        {
          "title": "SIGNAL WORD PANELS",
          "desc": "Full-width solid color panels with white or black reverse type. Danger red #E60000, Warning orange #FF6600, Caution yellow #FFD100.",
          "icon": "🛑",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🛑 SIGNAL WORD PANELS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Full-width solid color panels with white or black reverse type. Danger red #E60000, Warning orange #FF6600, Caution yellow #FFD100.</div></div>"
        },
        {
          "title": "PICTOGRAM LIBRARY",
          "desc": "Black silhouette inside black-stroke circle. No fill, no gradient. Standardized safety symbols.",
          "icon": "⬜",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⬜ PICTOGRAM LIBRARY</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Black silhouette inside black-stroke circle. No fill, no gradient. Standardized safety symbols.</div></div>"
        },
        {
          "title": "METRIC CELLS",
          "desc": "Flat white cards with black border-4. Label uppercase, value bold. Delta colors: green for safe, red for hazard.",
          "icon": "📊",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📊 METRIC CELLS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Flat white cards with black border-4. Label uppercase, value bold. Delta colors: green for safe, red for hazard.</div></div>"
        },
        {
          "title": "SIGN BORDERS",
          "desc": "4px solid black border around every sign. No shadows, no radius. Maintains authority and legibility.",
          "icon": "⬛",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⬛ SIGN BORDERS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">4px solid black border around every sign. No shadows, no radius. Maintains authority and legibility.</div></div>"
        },
        {
          "title": "SIGNAL WORD BADGES",
          "desc": "Compact badge with signal word and hazard color. For UI integration in dashboards and panels.",
          "icon": "🏷️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🏷️ SIGNAL WORD BADGES</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Compact badge with signal word and hazard color. For UI integration in dashboards and panels.</div></div>"
        }
      ],
      "ctaStripHeadline": "COMPLY WITH Z535.1–Z535.6",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">REQUEST AUDIT</button>",
      "sidebarBrand": "ANSI Z535",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "HAZARD LEVELS",
          "active": true
        },
        {
          "icon": "◉",
          "label": "PICTOGRAMS",
          "active": false
        },
        {
          "icon": "◉",
          "label": "METRICS",
          "active": false
        },
        {
          "icon": "◉",
          "label": "SIGN GENERATOR",
          "active": false
        }
      ],
      "dashboardTitle": "SAFETY SIGN COMPLIANCE DASHBOARD",
      "metrics": [
        {
          "label": "DANGER SIGNS ACTIVE",
          "value": "47",
          "delta": "+3",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "WARNING SIGNS ACTIVE",
          "value": "112",
          "delta": "-8",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "CAUTION SIGNS ACTIVE",
          "value": "89",
          "delta": "0",
          "dir": "flat",
          "direction": "flat"
        },
        {
          "label": "PICTOGRAMS IN USE",
          "value": "214",
          "delta": "+12",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "NON-COMPLIANT SIGNS",
          "value": "5",
          "delta": "-2",
          "dir": "down",
          "direction": "down"
        }
      ],
      "chartTitle": "HAZARD LEVELS OVER TIME (WEEKLY)",
      "panelATitle": "RECENT SIGN EDITS",
      "panelARows": [
        {
          "label": "AREA 12 – DANGER",
          "value": "UPDATED 09:42",
          "pct": 9
        },
        {
          "label": "PUMP ROOM – WARNING",
          "value": "UPDATED 08:15",
          "pct": 8
        },
        {
          "label": "EXIT PATH – CAUTION",
          "value": "UPDATED 07:30",
          "pct": 7
        },
        {
          "label": "LOADING DOCK – NOTICE",
          "value": "UPDATED 06:45",
          "pct": 6
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "SIGNAL WORD BADGE USAGE",
      "panelBCells": [
        {
          "label": "DANGER BADGE",
          "value": "23",
          "state": "ok"
        },
        {
          "label": "WARNING BADGE",
          "value": "67",
          "state": "warn"
        },
        {
          "label": "CAUTION BADGE",
          "value": "41",
          "state": "err"
        },
        {
          "label": "NOTICE BADGE",
          "value": "34",
          "state": "ok"
        },
        {
          "label": "EXIT BADGE",
          "value": "18",
          "state": "warn"
        },
        {
          "label": "SAFETY GREEN BADGE",
          "value": "12",
          "state": "err"
        },
        {
          "label": "FIRE BADGE",
          "value": "7",
          "state": "ok"
        },
        {
          "label": "EMERGENCY BADGE",
          "value": "9",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "W1",
        "W2",
        "W3",
        "W4",
        "W5",
        "W6"
      ],
      "series": [
        {
          "data": [
            12,
            14,
            11,
            15,
            13,
            16,
            16,
            16,
            16,
            16,
            16,
            16
          ],
          "label": "DANGER",
          "axis": "left",
          "color": "#E60000"
        },
        {
          "data": [
            28,
            25,
            30,
            27,
            26,
            29,
            29,
            29,
            29,
            29,
            29,
            29
          ],
          "label": "WARNING",
          "axis": "right-1",
          "color": "#FF6600"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'min-height:100vh;display:flex;align-items:center;justify-content:center;background:var(--bg);border:4px solid var(--border);margin:16px;'; el.innerHTML = '<div style=\"width:100%;max-width:500px;background:var(--surface);border:4px solid var(--border);font-family:var(--font-body);\"><div style=\"background:var(--primary);color:var(--on-primary);font-family:var(--font-display);font-size:36px;font-weight:900;text-transform:uppercase;letter-spacing:0.025em;padding:16px;text-align:center;\">DANGER</div><div style=\"display:flex;padding:16px;gap:16px;\"><div style=\"width:80px;height:80px;border:2px solid var(--border);border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;\"><svg width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" fill=\"var(--on-bg)\"><path d=\"M12 2L2 22h20L12 2z\"/></svg></div><div style=\"flex:1;font-size:16px;line-height:1.5;color:var(--on-bg);\">High voltage. Risk of electric shock. Do not open.</div></div></div>'; }",
    "showcaseRender": "function(el) { el.style.cssText = 'display:flex;flex-wrap:wrap;gap:16px;justify-content:center;padding:32px 16px;'; el.innerHTML = '<div style=\"width:280px;background:var(--surface);border:4px solid var(--border);font-family:var(--font-body);\"><div style=\"background:var(--primary);color:var(--on-primary);font-family:var(--font-display);font-size:18px;font-weight:900;text-transform:uppercase;letter-spacing:0.025em;padding:8px 16px;text-align:center;\">DANGER</div><div style=\"padding:16px;\"><div style=\"font-size:14px;font-weight:400;text-transform:uppercase;color:var(--on-bg);margin-bottom:4px;\">ARC FLASH</div><div style=\"font-size:12px;line-height:1.5;color:var(--on-bg-muted);\">Risk of arc flash. Wear proper PPE. Maintain distance.</div></div></div><div style=\"width:280px;background:var(--surface);border:4px solid var(--border);font-family:var(--font-body);\"><div style=\"background:var(--secondary-col);color:var(--on-secondary);font-family:var(--font-display);font-size:18px;font-weight:900;text-transform:uppercase;letter-spacing:0.025em;padding:8px 16px;text-align:center;\">WARNING</div><div style=\"padding:16px;\"><div style=\"font-size:14px;font-weight:400;text-transform:uppercase;color:var(--on-bg);margin-bottom:4px;\">HOT SURFACE</div><div style=\"font-size:12px;line-height:1.5;color:var(--on-bg-muted);\">Hot surface. Do not touch. Allow to cool before handling.</div></div></div><div style=\"width:280px;background:var(--surface);border:4px solid var(--border);font-family:var(--font-body);\"><div style=\"background:#FFD100;color:#000;font-family:var(--font-display);font-size:18px;font-weight:900;text-transform:uppercase;letter-spacing:0.025em;padding:8px 16px;text-align:center;\">CAUTION</div><div style=\"padding:16px;\"><div style=\"font-size:14px;font-weight:400;text-transform:uppercase;color:var(--on-bg);margin-bottom:4px;\">SLIP HAZARD</div><div style=\"font-size:12px;line-height:1.5;color:var(--on-bg-muted);\">Wet floor. Use caution when walking. Clean up spills immediately.</div></div></div>'; }",
    "panelCRender": "function(el) { el.style.cssText = 'padding:16px;background:var(--surface);border:4px solid var(--border);'; el.innerHTML = '<div style=\"font-family:var(--font-display);font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.025em;color:var(--on-bg);margin-bottom:12px;\">SIGNAL WORD BADGE USAGE</div><div style=\"display:grid;grid-template-columns:1fr 1fr;gap:8px;\"><div style=\"padding:8px;border:2px solid var(--border);display:flex;justify-content:space-between;font-family:var(--font-body);font-size:13px;\"><span style=\"text-transform:uppercase;color:var(--on-bg);\">DANGER BADGE</span><span style=\"font-weight:700;color:var(--ok);\">23</span></div><div style=\"padding:8px;border:2px solid var(--border);display:flex;justify-content:space-between;font-family:var(--font-body);font-size:13px;\"><span style=\"text-transform:uppercase;color:var(--on-bg);\">WARNING BADGE</span><span style=\"font-weight:700;color:var(--warn);\">67</span></div><div style=\"padding:8px;border:2px solid var(--border);display:flex;justify-content:space-between;font-family:var(--font-body);font-size:13px;\"><span style=\"text-transform:uppercase;color:var(--on-bg);\">CAUTION BADGE</span><span style=\"font-weight:700;color:var(--err);\">41</span></div><div style=\"padding:8px;border:2px solid var(--border);display:flex;justify-content:space-between;font-family:var(--font-body);font-size:13px;\"><span style=\"text-transform:uppercase;color:var(--on-bg);\">NOTICE BADGE</span><span style=\"font-weight:700;color:var(--ok);\">34</span></div></div>'; }",
    "heroBackground": "function(el) { el.style.background = 'var(--bg)'; }",
    "ctaBackground": "function(el) { el.style.background = 'var(--secondary-col)'; }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText='height:4px;background:var(--border);'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = 'var(--bg)'; }",
    "surfaceOverlay": "function(el) { var b=document.createElement('div'); b.style.cssText='position:absolute;top:0;left:0;width:100%;height:24px;background:var(--border);z-index:2;pointer-events:none;'; el.appendChild(b); }"
  },
  "ambientCanvas": "function(tick) { var d=document.createElement('div'); d.style.cssText='position:absolute;inset:0;pointer-events:none;background-image:url(\"data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'8\\' height=\\'8\\'%3E%3Cpath d=\\'M0 0L8 8ZM8 0L0 8\\' stroke=\\'%23000\\' stroke-width=\\'0.5\\'/%3E%3C/svg%3E\");opacity:'+(0.04+0.02*Math.sin(tick*0.1))+';'; return d; }",
  "shadcnTokens": {},
  "shadcnTokensClassic": {}
});
