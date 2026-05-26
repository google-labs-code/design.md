registerSystem({
  "meta": {
    "name": "Kodak Aesthetic Film Box Packaging System 1960s",
    "tagline": "A digital interface inspired by 1960s Kodak film box packaging, featuring saturated flat colors, hard offset-print effects, geometric sans typography, and modular banded layouts.",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700;800;900&family=Inter:wght@300;400;600&display=swap"
  },
  "yamlTokens": {
    "name": "Kodak Aesthetic Film Box Packaging System 1960s",
    "colors": {
      "on-primary": "#000000",
      "on-secondary": "#FFFFFF",
      "surface": "#FFFFFF",
      "on-surface": "#000000",
      "outline": "#000000"
    },
    "typography": {
      "display": {
        "fontFamily": "Jost",
        "fontSize": "36px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.1em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Jost",
        "fontSize": "30px",
        "fontWeight": 600,
        "lineHeight": 1.25,
        "letterSpacing": "0.05em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Jost",
        "fontSize": "20px",
        "fontWeight": 500,
        "lineHeight": 1.375,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Inter",
        "fontSize": "14px",
        "fontWeight": 400,
        "lineHeight": 1.625,
        "letterSpacing": "0em",
        "textTransform": "none"
      },
      "label": {
        "fontFamily": "Inter",
        "fontSize": "12px",
        "fontWeight": 600,
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
      "chip": "9999px"
    },
    "spacing": {
      "component-internal": "16px",
      "section-internal": "24px",
      "page-edge": "24px",
      "gap-component": "16px",
      "gap-section": "24px",
      "height-sm": "32px",
      "height-md": "40px",
      "height-lg": "48px",
      "icon": "16px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "#FFD700",
        "textColor": "#000000",
        "rounded": "{rounded.button}",
        "padding": "8px",
        "height": "40px"
      },
      "button-primary-hover": {
        "backgroundColor": "#FFD700",
        "textColor": "#000000",
        "rounded": "0px",
        "padding": "8px",
        "height": "40px"
      },
      "button-secondary": {
        "backgroundColor": "#FFFFFF",
        "textColor": "#000000",
        "rounded": "0px",
        "padding": "8px",
        "height": "40px"
      },
      "card": {
        "backgroundColor": "#FFD700",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "input": {
        "backgroundColor": "#FFFFFF",
        "textColor": "#000000",
        "rounded": "0px",
        "padding": "8px",
        "height": "40px"
      },
      "input-focus": {
        "backgroundColor": "#FFFFFF",
        "textColor": "#000000",
        "rounded": "0px",
        "padding": "8px",
        "height": "40px"
      },
      "exposure-dot-indicator": {
        "size": "8px",
        "backgroundColor": "#000000",
        "rounded": "0px"
      }
    },
    "version": "alpha",
    "description": "A digital interface inspired by 1960s Kodak film box packaging, featuring saturated flat colors, hard offset-print effects, geometric sans typography, and modular banded layouts.",
    "provenance": {
      "coverage_status": "minimal",
      "identity_description": "The slug `kodak--aesthetic-film-box-packaging-system-1960s` refers to the cohesive visual identity of Kodak’s consumer and professional film packaging in the 1960s – primarily the yellow-and-red cardboard boxes, foil wraps, and plastic canisters that held roll films (e.g., Kodachrome, Ektachrome, Tri-X, Verichrome). This identity is centred on the iconic yellow field, the red Kodak logotype (a cus",
      "manual_enrichment_required": true,
      "imagery_count": 1,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "collection.sciencemuseumgroup.org.uk",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://collection.sciencemuseumgroup.org.uk/",
          "host": "collection.sciencemuseumgroup.org.uk",
          "institution": "Science Museum Group, UK",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Kodak logotype (custom script)",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "unknown"
        },
        {
          "name": "Akzidenz-Grotesk",
          "foundry": null,
          "year": null,
          "google_fonts": "Archivo",
          "attestation": "inferred"
        },
        {
          "name": "Akzidenz-Grotesk",
          "foundry": null,
          "year": null,
          "google_fonts": "Archivo",
          "attestation": "unknown"
        }
      ],
      "flags": [
        "one_usable_url_only",
        "1_rate_limited_urls_pending_retry",
        "2_robots_disallowed_urls"
      ],
      "honest_gaps": [
        "1. **No attested colour specification** (Pantone, Munsell, hex, or pigment formula) for Kodak Yellow or Kodak Red from any 1960s primary source."
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#FFFFFF",
    "--on-bg": "#000000",
    "--primary": "#FFD700",
    "--on-primary": "#000000",
    "--secondary-col": "#DA291C",
    "--on-secondary": "#FFFFFF",
    "--surface": "#FFFFFF",
    "--on-bg-muted": "#666666",
    "--border": "#000000",
    "--error": "#E31E24",
    "--font-display": "Jost",
    "--font-body": "Inter",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "9999px",
    "--secondary": "#DA291C"
  },
  "semanticColors": {
    "primary": "#FFD700",
    "on-primary": "#000000",
    "secondary": "#DA291C",
    "on-secondary": "#FFFFFF",
    "surface": "#FFFFFF",
    "on-surface": "#000000",
    "error": "#E31E24",
    "on-error": "#FFFFFF",
    "info": "#FFD700",
    "err": "#E31E24",
    "warn": "#FF8C42",
    "ok": "#22C55E",
    "deltaUp": "#22C55E",
    "deltaDown": "#E31E24",
    "deltaFlat": "#666666",
    "live": "#FFD700",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#666666",
    "chartFont": "Inter"
  },
  "elevation": {
    "sm": "none",
    "md": "none",
    "lg": "none"
  },
  "chartStyle": {
    "backgroundColor": "#FFFFFF",
    "textColor": "#000000",
    "gridColor": "#000000",
    "lineColor": "#DA291C",
    "barColor": "#FFD700",
    "donutchart": {
      "colors": [
        "#FFD700",
        "#DA291C",
        "#000000",
        "#FFFFFF"
      ]
    },
    "labelColor": "#666666",
    "fontFamily": "Inter"
  },
  "surfaceModel": "flat",
  "materialSimulation": {
    "model": "paper",
    "params": {
      "grain": true,
      "halftone": true,
      "misregistration": true
    }
  },
  "interactionModel": {
    "hover": {
      "effect": "color-border",
      "target": "border-color",
      "value": "#DA291C"
    },
    "active": {
      "effect": "opacity-scale",
      "opacity": 0.75,
      "scale": 0.97
    },
    "focus": {
      "effect": "border-color-width",
      "borderColor": "#DA291C",
      "borderWidth": "4px"
    },
    "transition": {
      "duration": "150ms",
      "easing": "ease-out"
    }
  },
  "spacing": {
    "component-internal": "16px",
    "section-internal": "24px",
    "page-edge": "24px",
    "gap-component": "16px",
    "gap-section": "24px",
    "height-sm": "32px",
    "height-md": "40px",
    "height-lg": "48px",
    "icon": "16px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "9999px"
  },
  "dashboardStyle": {
    "layout": "modular horizontal bands separated by thin horizontal rules",
    "density": "low density with generous whitespace",
    "panelTreatment": "flat panels with yellow or white background, black borders, no rounded corners",
    "dataVizStyle": "flat bar charts and dot-based indicators in primary and secondary colors",
    "signatureElement": "film strip perforation border at section edges"
  },
  "landingStyle": {
    "heroApproach": "full-bleed yellow background with a red horizontal stripe and black logotype in all caps",
    "scrollBehavior": "smooth scroll with fade-in animation on cards",
    "ctaStyle": "yellow button with black text and black border, no rounded corners",
    "signatureMoment": "appearance of perforation border between hero and content zone"
  },
  "globalFilter": "sepia(0.04) contrast(0.95)",
  "globalBodyCss": "font-family: var(--font-body); background: var(--bg); color: var(--on-bg); margin: 0; padding: 0; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;",
  "globalCss": ".ds-layout-frame::before { content: ''; position: fixed; inset: 0; pointer-events: none; z-index: 9999; opacity: 0.05; mix-blend-mode: multiply; background-image: url(\"data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27200%27 height=%27200%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.65%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E\"); background-repeat: repeat; background-size: 200px 200px; } .ds-layout-frame::after { content: ''; position: fixed; inset: 0; pointer-events: none; z-index: 9998; opacity: 0.03; mix-blend-mode: overlay; background: repeating-linear-gradient(45deg, var(--secondary-col) 0px, transparent 1px, transparent 3px); } .ds-layout-frame { transition: background-color 150ms ease-out, border-color 150ms ease-out, border-width 150ms ease-out, opacity 150ms ease-out; } .ds-layout-frame .film-card { animation: fadeIn 300ms ease-out; } @keyframes fadeIn { from { opacity: 0; filter: blur(4px); } to { opacity: 1; filter: blur(0); } }",
  "interactionStyles": ".ds-layout-frame button:hover { border-color: #DA291C; } .ds-layout-frame button:active { opacity: 0.75; transform: scale(0.97); } .ds-layout-frame input:focus { border-color: #DA291C; border-width: 4px; }",
  "buttons": [
    {
      "name": "Primary Button",
      "desc": "Yellow background with black text, flat and hard-edged, representing the primary action.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--primary); color: var(--on-primary); border: 2px solid var(--border); border-radius: var(--radius-btn); padding: 8px 16px; font-family: var(--font-body); font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; height: 40px; cursor: pointer; transition: all 150ms ease-out;\">SHOOT FILM</button>",
      "label": "Primary Button",
      "note": "Yellow background with black text, flat and hard-edged, representing the primary action."
    },
    {
      "name": "Secondary Button",
      "desc": "White background with black text and border, used for secondary actions.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--surface); color: var(--on-surface); border: 2px solid var(--border); border-radius: var(--radius-btn); padding: 8px 16px; font-family: var(--font-body); font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; height: 40px; cursor: pointer; transition: all 150ms ease-out;\">LOAD FILM</button>",
      "label": "Secondary Button",
      "note": "White background with black text and border, used for secondary actions."
    },
    {
      "name": "Ghost / Outline Button",
      "desc": "Transparent background with black text and border, for low-emphasis actions.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; color: var(--on-surface); border: 2px solid var(--border); border-radius: var(--radius-btn); padding: 8px 16px; font-family: var(--font-body); font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; height: 40px; cursor: pointer; transition: all 150ms ease-out;\">VIEW SPECS</button>",
      "label": "Ghost / Outline Button",
      "note": "Transparent background with black text and border, for low-emphasis actions."
    }
  ],
  "cards": [
    {
      "name": "Film Box Card",
      "desc": "Simulates a Kodak film box with yellow field, red stripe, black text, and exposure dot indicators. Encodes object properties via zone layout and perforation allusion.",
      "html": "<div style=\"background: var(--primary); border: 2px solid var(--border); border-radius: var(--radius-card); padding: 24px; position: relative;\"><div style=\"background: var(--secondary-col); height: 8px; margin: -24px -24px 16px -24px; border-bottom: 2px solid var(--border);\"></div><h3 style=\"font-family: var(--font-display); font-size: 20px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 8px 0; color: var(--on-primary);\">KODACHROME</h3><p style=\"font-family: var(--font-body); font-size: 14px; color: var(--on-primary); margin: 0;\">ASA 64 • 36 EXPOSURES</p><div style=\"display: flex; gap: 4px; margin-top: 16px;\"><div style=\"width: 8px; height: 8px; background: var(--on-primary);\"></div><div style=\"width: 8px; height: 8px; background: var(--on-primary);\"></div><div style=\"width: 8px; height: 8px; background: var(--on-primary);\"></div></div></div>",
      "label": "Film Box Card",
      "note": "Simulates a Kodak film box with yellow field, red stripe, black text, and exposure dot indicators. Encodes object properties via zone layout and perforation allusion."
    },
    {
      "name": "Information Card",
      "desc": "White card with black text, divided into brand and info zones by a thin horizontal rule.",
      "html": "<div style=\"background: var(--surface); border: 2px solid var(--border); border-radius: var(--radius-card); padding: 24px;\"><div style=\"font-family: var(--font-display); font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--on-surface); margin-bottom: 8px;\">PRODUCT INFO</div><hr style=\"border: none; border-top: 2px solid var(--border); margin: 0 0 16px 0;\"><p style=\"font-family: var(--font-body); font-size: 14px; color: var(--on-surface); margin: 0;\">Film type: Color reversal<br>Format: 35mm<br>Exposures: 36</p></div>",
      "label": "Information Card",
      "note": "White card with black text, divided into brand and info zones by a thin horizontal rule."
    }
  ],
  "forms": [
    {
      "name": "Text Input",
      "desc": "Flat input with black border, no rounded corners, using label typography.",
      "html": "<div style=\"margin-bottom: 16px;\"><label style=\"font-family: var(--font-body); font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px; color: var(--on-surface);\">FILM STOCK</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" placeholder=\"e.g., Tri-X\" style=\"background: var(--surface); border: 2px solid var(--border); border-radius: var(--radius-input); padding: 8px; font-family: var(--font-body); font-size: 14px; color: var(--on-surface); width: 100%; box-sizing: border-box; outline: none; transition: border-color 150ms ease-out;\"></div>",
      "label": "Text Input",
      "stateLabel": "Flat input with black border, no rounded corners, using label typography."
    },
    {
      "name": "Select / Dropdown",
      "desc": "Custom dropdown using a div, flat and hard-edged, with a down arrow indicator.",
      "html": "<div style=\"position: relative; margin-bottom: 16px;\"><label style=\"font-family: var(--font-body); font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px; color: var(--on-surface);\">ISO SPEED</label><div style=\"background: var(--surface); border: 2px solid var(--border); border-radius: var(--radius-input); padding: 8px; font-family: var(--font-body); font-size: 14px; color: var(--on-surface); cursor: pointer; display: flex; justify-content: space-between; align-items: center;\"><span>400</span><span style=\"display: inline-block; width: 0; height: 0; border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 6px solid var(--on-surface); margin-left: 8px;\"></span></div></div>",
      "label": "Select / Dropdown",
      "stateLabel": "Custom dropdown using a div, flat and hard-edged, with a down arrow indicator."
    },
    {
      "name": "Checkbox / Toggle",
      "desc": "Square checkbox with black border, no rounding, flat filled state.",
      "html": "<div style=\"margin-bottom: 16px; display: flex; align-items: center; gap: 8px;\"><div style=\"width: 20px; height: 20px; background: var(--surface); border: 2px solid var(--border); border-radius: 0px; display: flex; align-items: center; justify-content: center;\"><div style=\"width: 12px; height: 12px; background: var(--primary);\"></div></div><label style=\"font-family: var(--font-body); font-size: 14px; color: var(--on-surface);\">PUSH PROCESS</label></div>",
      "label": "Checkbox / Toggle",
      "stateLabel": "Square checkbox with black border, no rounding, flat filled state."
    }
  ],
  "extraComponents": [
    {
      "name": "ASA Pill Badge",
      "desc": "Fully rounded pill badge with black background and white uppercase text, used for film speed labels.",
      "html": "<div style=\"display: inline-block; background: var(--on-surface); color: var(--surface); border-radius: var(--radius-chip); padding: 2px 12px; font-family: var(--font-body); font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; line-height: 1.5;\">ASA 400</div>"
    },
    {
      "name": "Exposure Dot Indicator",
      "desc": "Small square black dots used in scales or to indicate exposures.",
      "html": "<div style=\"display: flex; gap: 4px;\"><div style=\"width: 8px; height: 8px; background: var(--on-surface);\"></div><div style=\"width: 8px; height: 8px; background: var(--on-surface);\"></div><div style=\"width: 8px; height: 8px; background: var(--on-surface);\"></div></div>"
    },
    {
      "name": "Film Strip Perforation Border",
      "desc": "Decorative repeating pattern of small rectangles suggesting film perforations, used at section edges.",
      "html": "<div style=\"height: 12px; background: repeating-linear-gradient(90deg, var(--border) 0px, var(--border) 4px, transparent 4px, transparent 8px); border: none; margin: 8px 0;\"></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — KODACHROME II</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — FILM PACKAGING</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — 36 EXPOSURES</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — For best results, store in cool, dry place. Process before expiration date.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — ASA 400 / 36 EXP</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Rounded corners and drop shadows dilute the hard-edge offset print aesthetic.",
      "avoid": {
        "html": "<div style=\"background: var(--primary); border-radius: 12px; box-shadow: 0 4px 8px rgba(0,0,0,0.2); padding: 16px; font-family: var(--font-body);\">Soft corners and shadow</div>",
        "label": "Avoid"
      },
      "rule": "Rounded corners and drop shadows dilute the hard-edge offset print aesthetic.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Serif typefaces and justified alignment break the geometric, left-aligned system.",
      "avoid": {
        "html": "<p style=\"font-family: Georgia; text-align: justify; color: var(--on-surface);\">This paragraph uses a serif font and justified alignment, which are forbidden.</p>",
        "label": "Avoid"
      },
      "rule": "Serif typefaces and justified alignment break the geometric, left-aligned system.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Negative letter-spacing compresses the type and contradicts the generous tracking of the source.",
      "avoid": {
        "html": "<h2 style=\"font-family: var(--font-display); letter-spacing: -0.05em; background: linear-gradient(to right, var(--primary), var(--secondary-col)); -webkit-background-clip: text; color: transparent;\">NEGATIVE TRACK</h2>",
        "label": "Avoid"
      },
      "rule": "Negative letter-spacing compresses the type and contradicts the generous tracking of the source.",
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
  "doAvoidStyle": "Any use of rounded corners, drop shadows, gradients, serif or script typefaces, justified text, negative tracking, or any visual effect that deviates from the flat, hard-edge, offset print look.",
  "effects": [],
  "motion": [],
  "colors": {
    "primary": "#FFD700",
    "secondary": "#DA291C",
    "surface": "#FFFFFF",
    "on-surface": "#000000",
    "error": "#E31E24",
    "on-primary": "#000000",
    "on-secondary": "#FFFFFF",
    "outline": "#000000"
  },
  "typography": {
    "display": {
      "fontFamily": "Jost",
      "fontSize": "36px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "0.1em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "Jost",
      "fontSize": "30px",
      "fontWeight": 600,
      "lineHeight": 1.25,
      "letterSpacing": "0.05em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "Jost",
      "fontSize": "20px",
      "fontWeight": 500,
      "lineHeight": 1.375,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "Inter",
      "fontSize": "14px",
      "fontWeight": 400,
      "lineHeight": 1.625,
      "letterSpacing": "0em",
      "textTransform": "none"
    },
    "label": {
      "fontFamily": "Inter",
      "fontSize": "12px",
      "fontWeight": 600,
      "lineHeight": 1.25,
      "letterSpacing": "0.05em",
      "textTransform": "uppercase"
    }
  },
  "layouts": {
    "copy": {
      "heroKicker": "ANALOG ARCHIVE",
      "heroHeadline": "MASTER YOUR FILM STOCKS",
      "heroSub": "Track exposures, development logs, and print parameters with the precision of a 1960s darkroom technician.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">LOAD NEW ROLL</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">EXPLORE ARCHIVE</button>",
      "navLinks": [
        "STOCKS",
        "EXPOSURES",
        "DEVELOPMENT",
        "PRINTS"
      ],
      "features": [
        {
          "title": "FILM BOX CARD",
          "desc": "Each film stock rendered as a classic Kodak-style card with full-bleed yellow field, ASA pill badge, and exposure dot indicators.",
          "icon": "🎞️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🎞️ FILM BOX CARD</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Each film stock rendered as a classic Kodak-style card with full-bleed yellow field, ASA pill badge, and exposure dot indicators.</div></div>"
        },
        {
          "title": "ASA PILL BADGE",
          "desc": "Quick-read film speed badges with hard rounded ends, using the same offset-print aesthetic as vintage boxes.",
          "icon": "🔴",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔴 ASA PILL BADGE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Quick-read film speed badges with hard rounded ends, using the same offset-print aesthetic as vintage boxes.</div></div>"
        },
        {
          "title": "HORIZONTAL RULE",
          "desc": "Thin red or black rule separates brand zone from data zone, just like original film packaging.",
          "icon": "➖",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">➖ HORIZONTAL RULE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Thin red or black rule separates brand zone from data zone, just like original film packaging.</div></div>"
        },
        {
          "title": "EXPOSURE DOT INDICATOR",
          "desc": "Small black squares in a row to represent exposure compensation or frame count — precise and minimalist.",
          "icon": "⚫",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⚫ EXPOSURE DOT INDICATOR</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Small black squares in a row to represent exposure compensation or frame count — precise and minimalist.</div></div>"
        },
        {
          "title": "FILM STRIP PERFORATION",
          "desc": "Decorative perforation border used as section separators, echoing the edges of 35mm film.",
          "icon": "▬",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">▬ FILM STRIP PERFORATION</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Decorative perforation border used as section separators, echoing the edges of 35mm film.</div></div>"
        }
      ],
      "ctaStripHeadline": "START YOUR ANALOG WORKFLOW",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">BEGIN ARCHIVE</button>",
      "sidebarBrand": "FILM STOCK / 1960",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "CATALOG",
          "active": true
        },
        {
          "icon": "◉",
          "label": "DARKROOM",
          "active": false
        }
      ],
      "dashboardTitle": "EXPOSURE LOG",
      "metrics": [
        {
          "label": "FILM STOCKS",
          "value": "12",
          "delta": "+2",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "EXPOSURES LOGGED",
          "value": "248",
          "delta": "+18",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "DEVELOPMENT RUNS",
          "value": "9",
          "delta": "-1",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "CONTACT SHEETS",
          "value": "36",
          "delta": "+5",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "ASA DISTRIBUTION",
      "panelATitle": "RECENT EXPOSURES",
      "panelARows": [
        {
          "label": "ROLL 024 – TRI-X 400",
          "value": "36 EXP",
          "pct": 36
        },
        {
          "label": "ROLL 025 – PORTRA 160",
          "value": "24 EXP",
          "pct": 24
        },
        {
          "label": "ROLL 026 – EKTACHROME 64",
          "value": "36 EXP",
          "pct": 36
        },
        {
          "label": "ROLL 027 – T-MAX 100",
          "value": "24 EXP",
          "pct": 24
        },
        {
          "label": "ROLL 028 – HP5+ 400",
          "pct": 50
        }
      ],
      "panelBTitle": "DEVELOPMENT BATCH",
      "panelBCells": [
        {
          "label": "BATCH ID",
          "value": "DV-2404",
          "state": "ok"
        },
        {
          "label": "FILM",
          "value": "TRI-X 400",
          "state": "warn"
        },
        {
          "label": "DEVELOPER",
          "value": "D-76 1:1",
          "state": "err"
        },
        {
          "label": "TIME",
          "value": "8:00 MIN",
          "state": "ok"
        },
        {
          "label": "TEMP",
          "value": "20°C",
          "state": "warn"
        },
        {
          "label": "AGITATION",
          "value": "5S / 30S",
          "state": "err"
        },
        {
          "label": "ASA RATING",
          "value": "400",
          "state": "ok"
        },
        {
          "label": "NOTES",
          "value": "PUSH +1 STOP",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "EI 100",
        "EI 200",
        "EI 400",
        "EI 800",
        "EI 1600",
        "EI 3200"
      ],
      "series": [
        {
          "data": [
            24,
            15,
            42,
            8,
            3,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ],
          "label": "ROLLS",
          "axis": "left",
          "color": "#FFD700"
        },
        {
          "data": [
            18,
            10,
            30,
            5,
            2,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "label": "PRINTS",
          "axis": "right-1",
          "color": "#DA291C"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText='min-height:400px;background:var(--primary);position:relative;overflow:hidden;'; el.innerHTML='<div style=\"background:var(--secondary-col);height:8px;margin:0;border-bottom:2px solid var(--border);\"></div><div style=\"padding:32px 24px;text-align:center;\"><h1 style=\"font-family:var(--font-display);font-size:36px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;margin:0 0 8px;color:var(--on-primary);\">KODAK FILM</h1><p style=\"font-family:var(--font-body);font-size:14px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:var(--on-primary);\">MASTER YOUR STOCKS</p><div style=\"display:flex;gap:4px;justify-content:center;margin-top:16px;\"><div style=\"width:8px;height:8px;background:var(--on-primary);\"></div><div style=\"width:8px;height:8px;background:var(--on-primary);\"></div><div style=\"width:8px;height:8px;background:var(--on-primary);\"></div></div></div><div style=\"height:12px;background:repeating-linear-gradient(90deg,var(--border) 0px,var(--border) 4px,transparent 4px,transparent 8px);margin-top:16px;\"></div>'; }",
    "showcaseRender": "function(el) { el.style.cssText='padding:24px;display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:16px;'; el.innerHTML='<div style=\"background:var(--primary);border:2px solid var(--border);padding:16px;\"><div style=\"background:var(--secondary-col);height:6px;margin:-16px -16px 12px -16px;border-bottom:2px solid var(--border);\"></div><h3 style=\"font-family:var(--font-display);font-size:18px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;margin:0 0 8px;color:var(--on-primary);\">KODACHROME</h3><p style=\"font-family:var(--font-body);font-size:12px;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;color:var(--on-primary);\">ASA 64 • 36 EXP</p><div style=\"display:flex;gap:4px;margin-top:12px;\"><div style=\"width:8px;height:8px;background:var(--on-primary);\"></div><div style=\"width:8px;height:8px;background:var(--on-primary);\"></div><div style=\"width:8px;height:8px;background:var(--on-primary);\"></div></div></div><div style=\"background:var(--primary);border:2px solid var(--border);padding:16px;\"><div style=\"background:var(--secondary-col);height:6px;margin:-16px -16px 12px -16px;border-bottom:2px solid var(--border);\"></div><h3 style=\"font-family:var(--font-display);font-size:18px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;margin:0 0 8px;color:var(--on-primary);\">TRI-X</h3><p style=\"font-family:var(--font-body);font-size:12px;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;color:var(--on-primary);\">ASA 400 • 36 EXP</p><div style=\"display:flex;gap:4px;margin-top:12px;\"><div style=\"width:8px;height:8px;background:var(--on-primary);\"></div><div style=\"width:8px;height:8px;background:var(--on-primary);\"></div><div style=\"width:8px;height:8px;background:var(--on-primary);\"></div></div></div>'; }",
    "panelCRender": "function(el) { el.style.cssText='padding:24px;background:var(--surface);border:2px solid var(--border);'; el.innerHTML='<div style=\"font-family:var(--font-display);font-size:16px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:16px;color:var(--on-surface);\">DEVELOPMENT BATCH</div><div style=\"display:grid;grid-template-columns:1fr 1fr;gap:8px;\"><div><span style=\"font-family:var(--font-body);font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:var(--on-surface);display:block;\">BATCH ID</span><span style=\"font-family:var(--font-body);font-size:14px;color:var(--on-surface);\">DV-2404</span></div><div><span style=\"font-family:var(--font-body);font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:var(--on-surface);display:block;\">FILM</span><span style=\"font-family:var(--font-body);font-size:14px;color:var(--on-surface);\">TRI-X 400</span></div><div><span style=\"font-family:var(--font-body);font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:var(--on-surface);display:block;\">DEVELOPER</span><span style=\"font-family:var(--font-body);font-size:14px;color:var(--on-surface);\">D-76 1:1</span></div><div><span style=\"font-family:var(--font-body);font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:var(--on-surface);display:block;\">TIME</span><span style=\"font-family:var(--font-body);font-size:14px;color:var(--on-surface);\">8:00 MIN</span></div></div><div style=\"display:flex;gap:4px;margin-top:16px;\"><div style=\"width:8px;height:8px;background:var(--on-surface);\"></div><div style=\"width:8px;height:8px;background:var(--on-surface);\"></div><div style=\"width:8px;height:8px;background:var(--on-surface);\"></div></div>'; }",
    "heroBackground": "function(el) { el.style.background = 'var(--primary)'; }",
    "ctaBackground": "function(el) { el.style.background = 'var(--primary)'; }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText='height:2px;background:var(--secondary-col);margin:24px 0;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = 'var(--bg)'; }",
    "surfaceOverlay": "function(el) { var g=document.createElement('div'); g.style.cssText='position:absolute;inset:0;z-index:2;pointer-events:none;opacity:0.08;mix-blend-mode:multiply;background-image:url(\"data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27200%27 height=%27200%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.65%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E\");background-repeat:repeat;background-size:200px 200px;'; el.appendChild(g); }"
  },
  "ambientCanvas": "function(container, tick) { var canvas = document.createElement('canvas'); canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;opacity:0.06;mix-blend-mode:multiply;'; container.appendChild(canvas); var ctx = canvas.getContext('2d'); var w = canvas.width = canvas.offsetWidth; var h = canvas.height = canvas.offsetHeight; var imageData = ctx.createImageData(w, h); var data = imageData.data; var primary = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim() || '#FFD700'; var r = parseInt(primary.slice(1,3),16); var g = parseInt(primary.slice(3,5),16); var b = parseInt(primary.slice(5,7),16); var seed = tick; for(var i=0; i<data.length; i+=4) { var noise = ((seed * 16807 + i) & 65535) / 65535; data[i] = r * noise; data[i+1] = g * noise; data[i+2] = b * noise; data[i+3] = 255 * noise; seed = (seed * 16807 + 1) & 0x7FFFFFFF; } ctx.putImageData(imageData, 0, 0); }",
  "shadcnTokens": {
    "--color-background": "#FFFFFF",
    "--color-popover": "#FFFFFF",
    "--color-foreground": "#000000",
    "--color-card-foreground": "#000000",
    "--color-popover-foreground": "#000000",
    "--color-card": "#FFFFFF",
    "--color-muted": "#FFFFFF",
    "--color-muted-foreground": "#666666",
    "--color-primary": "#FFD700",
    "--color-ring": "#FFD700",
    "--color-primary-foreground": "#000000",
    "--color-secondary": "#DA291C",
    "--color-accent": "#DA291C",
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
    "--muted-foreground": "#666666",
    "--primary": "#FFD700",
    "--ring": "#FFD700",
    "--primary-foreground": "#000000",
    "--secondary": "#DA291C",
    "--accent": "#DA291C",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#E31E24"
  }
});
