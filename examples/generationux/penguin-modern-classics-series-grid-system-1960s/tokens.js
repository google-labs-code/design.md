registerSystem({
  "meta": {
    "name": "Penguin Modern Classics / Grid System 1960s",
    "tagline": "Spare, grid-based editorial UI language inspired by 1960s Penguin paperback covers",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap"
  },
  "yamlTokens": {
    "name": "Penguin Modern Classics / Grid System 1960s",
    "colors": {
      "background": "#FFFFFF",
      "on-background": "#000000"
    },
    "typography": {
      "headline": {
        "fontFamily": "Inter",
        "fontSize": "12px",
        "fontWeight": 400,
        "lineHeight": 1.25,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Inter",
        "fontSize": "14px",
        "fontWeight": 600,
        "lineHeight": 1.25,
        "letterSpacing": "0em",
        "textTransform": "none"
      },
      "label": {
        "fontFamily": "Inter",
        "fontSize": "12px",
        "fontWeight": 300,
        "lineHeight": 1.25,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      }
    },
    "rounded": {
      "default": "0px",
      "card": "2px",
      "button": "0px",
      "input": "0px"
    },
    "spacing": {
      "component-internal": "16px",
      "section-internal": "16px",
      "page-edge": "32px",
      "gap-component": "32px",
      "gap-section": "32px",
      "icon": "16px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "#FF6600",
        "textColor": "{colors.on-background}",
        "rounded": "{rounded.button}",
        "padding": "16px 32px",
        "typography": "Helvetica Regular 12px uppercase"
      },
      "button-primary-hover": {
        "backgroundColor": "#FF6600",
        "textColor": "{colors.on-background}",
        "padding": "16px 32px"
      },
      "button-secondary": {
        "backgroundColor": "{colors.background}",
        "textColor": "{colors.on-background}",
        "rounded": "{rounded.button}",
        "padding": "16px 32px",
        "typography": "Helvetica Regular 12px uppercase"
      },
      "card": {
        "backgroundColor": "{colors.background}",
        "rounded": "{rounded.card}",
        "padding": "16px",
        "textColor": "{colors.on-background}"
      },
      "input": {
        "backgroundColor": "{colors.background}",
        "textColor": "{colors.on-background}",
        "rounded": "{rounded.input}",
        "padding": "8px"
      },
      "accent-rectangle": {
        "backgroundColor": "#FF6600",
        "rounded": "0px",
        "height": "100%",
        "width": "100%"
      }
    },
    "version": "alpha",
    "description": "A spare, grid-based editorial UI language inspired by 1960s Penguin Modern Classics paperback covers, with white page, one solid accent rectangle, black typography, strict three-column grid, and optional offset-printing artifacts.",
    "provenance": {
      "coverage_status": "sparse",
      "identity_description": "The slug `penguin-modern-classics-series-grid-system-1960s` refers to the grid-based cover design system developed for the Penguin Modern Classics book series, introduced in 1961 and largely stabilised during the 1960s. This system, devised under art director Germano Facetti with initial grid contributions by designer Romek Marber (and subsequently adapted by others), imposed a consistent three‑ba",
      "manual_enrichment_required": false,
      "imagery_count": 4,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "www.vam.ac.uk",
          "count": 1
        },
        {
          "host": "collection.cooperhewitt.org",
          "count": 1
        },
        {
          "host": "www.penguin.co.uk",
          "count": 1
        },
        {
          "host": "en.wikipedia.org",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://www.vam.ac.uk/",
          "host": "www.vam.ac.uk",
          "institution": "Victoria and Albert Museum, London",
          "confidence_original": "low"
        },
        {
          "url": "https://collection.cooperhewitt.org/",
          "host": "collection.cooperhewitt.org",
          "institution": "Cooper Hewitt, Smithsonian Design Museum, New York",
          "confidence_original": "low"
        },
        {
          "url": "https://www.penguin.co.uk/",
          "host": "www.penguin.co.uk",
          "institution": "Penguin Random House UK website",
          "confidence_original": "low"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Penguin_Modern_Classics",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia",
          "confidence_original": "high"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Univers (Monotype cut)",
          "foundry": "Monotype",
          "year": null,
          "google_fonts": "Manrope",
          "attestation": "conventional"
        },
        {
          "name": "Gill Sans",
          "foundry": null,
          "year": null,
          "google_fonts": "Cabin",
          "attestation": "inferred"
        },
        {
          "name": "Univers",
          "foundry": null,
          "year": null,
          "google_fonts": "Manrope",
          "attestation": "attested"
        }
      ],
      "flags": [
        "sparse_imagery",
        "1_robots_disallowed_urls"
      ],
      "honest_gaps": [
        {
          "\"1. **Primary colour specifications": "** No verified hex or Pantone values for any of the bar colours. All existing colour data is inferred from aged printed copies. *Coordinates:* missing colour swatches per title.\""
        }
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#FFFFFF",
    "--on-bg": "#000000",
    "--primary": "#FF6600",
    "--on-primary": "#000000",
    "--secondary-col": "#C8102E",
    "--on-secondary": "#000000",
    "--surface": "#FFFFFF",
    "--on-bg-muted": "#1A1A1A",
    "--border": "#000000",
    "--error": "#C8102E",
    "--font-display": "Inter",
    "--font-body": "Inter",
    "--radius-default": "0px",
    "--radius-card": "2px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "background": "#FFFFFF",
    "onBackground": "#000000",
    "accentOrange": "#FF6600",
    "accentRed": "#C8102E",
    "accentBlue": "#0055A4",
    "accentBleed": null,
    "disabledOpacity": "40%",
    "warn": "#FF8C42",
    "ok": "#22C55E",
    "err": "#C8102E",
    "deltaUp": "#22C55E",
    "deltaDown": "#C8102E",
    "deltaFlat": "#1A1A1A",
    "live": "#FF6600",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#1A1A1A",
    "chartFont": "Inter"
  },
  "chartStyle": {
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#1A1A1A",
    "fontFamily": "Inter"
  },
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "paper",
    "params": {
      "grain": true,
      "bleed": true,
      "coating": "uncoated"
    }
  },
  "interactionModel": {
    "hover": {
      "textDecoration": "underline",
      "transition": "text-decoration 150ms ease-out"
    },
    "focus": {
      "outline": "2px solid var(--border)",
      "outlineOffset": "0"
    },
    "active": {
      "transform": "scale(0.97)",
      "transition": "transform 150ms ease-out"
    }
  },
  "spacing": null,
  "radius": null,
  "elevation": null,
  "dashboardStyle": {
    "layout": "Three-column modular grid (1fr 1fr 1fr) with 32px gap, all panels flush-left and edge-to-edge.",
    "density": "Low density, generous white space, minimal data elements.",
    "panelTreatment": "Flat, no elevation, white background, black border on selection, accent rectangle as a sidebar indicator.",
    "dataVizStyle": "Table-style charts with black borders, uppercase headers in accent blue or orange, no axis lines.",
    "signatureElement": "Single accent rectangle spanning one column vertically as a navigational marker."
  },
  "landingStyle": {
    "heroApproach": "Three-column grid with accent rectangle in left column (full height), author and title in middle/right columns, rule line separating metadata.",
    "scrollBehavior": "Instant scroll snap between sections, no parallax or animations.",
    "ctaStyle": "Solid accent orange button with black text, no rounding, left-aligned below title.",
    "signatureMoment": "Accent rectangle fills the left column, creating a bold vertical stripe against the white page."
  },
  "globalFilter": "<svg xmlns='http://www.w3.org/2000/svg'><defs><filter id='paper-grain' x='0' y='0' width='100%' height='100%'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' result='noise'/><feColorMatrix type='matrix' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.1 0' in='noise' result='coloredNoise'/><feBlend mode='multiply' in='SourceGraphic' in2='coloredNoise'/></filter><filter id='ink-bleed' x='-1%' y='-1%' width='102%' height='102%'><feOffset dx='0.4' dy='0.3' in='SourceAlpha' result='offset'/><feGaussianBlur stdDeviation='0.2' in='offset' result='blur'/><feBlend mode='normal' in='SourceGraphic' in2='blur'/></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-body); background: var(--bg); color: var(--on-bg); margin: 0; padding: 0;",
  "globalCss": ".ds-layout-frame { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 32px; padding: 32px; background: var(--bg); color: var(--on-bg); font-family: var(--font-body); } .ds-layout-frame hr { border: none; border-top: 1px solid var(--border); margin: 0; } .ds-layout-frame .accent-rectangle { background: var(--primary); height: 100%; width: 100%; border-radius: 0; } .ds-layout-frame .emblem { position: absolute; bottom: 8px; right: 8px; color: var(--on-bg); font-size: 10px; text-transform: uppercase; }",
  "interactionStyles": ".ds-layout-frame button, .ds-layout-frame a, .ds-layout-frame input, .ds-layout-frame select { transition: transform 150ms ease-out, outline 150ms ease-out, text-decoration 150ms ease-out; } .ds-layout-frame button:active, .ds-layout-frame a:active { transform: scale(0.97); } .ds-layout-frame *:focus { outline: 2px solid var(--border); outline-offset: 0; } .ds-layout-frame a:hover, .ds-layout-frame button:hover { text-decoration: underline; }",
  "buttons": [
    {
      "name": "Primary Button",
      "desc": "Solid accent orange background, black uppercase text, no rounding. Follows the one-color rule.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||'';this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+' ':'')+'brightness(1.12)';\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||'';\" style=\"background: #FF6600; color: #000000; padding: 16px 32px; font-family: var(--font-display); font-size: 12px; font-weight: 400; text-transform: uppercase; border: none; border-radius: 0px; cursor: pointer; display: inline-block;\">READ</button>",
      "label": "Primary Button",
      "note": "Solid accent orange background, black uppercase text, no rounding. Follows the one-color rule."
    },
    {
      "name": "Secondary Button",
      "desc": "White background with black border, black uppercase text. No fill to maintain white space.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||'';this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+' ':'')+'brightness(1.12)';\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||'';\" style=\"background: #FFFFFF; color: #000000; padding: 16px 32px; font-family: var(--font-display); font-size: 12px; font-weight: 400; text-transform: uppercase; border: 1px solid #000000; border-radius: 0px; cursor: pointer; display: inline-block;\">EXPLORE</button>",
      "label": "Secondary Button",
      "note": "White background with black border, black uppercase text. No fill to maintain white space."
    },
    {
      "name": "Ghost Button",
      "desc": "No background or border, only black uppercase text. Minimal interaction, like an editorial link.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; color: #000000; padding: 16px 32px; font-family: var(--font-display); font-size: 12px; font-weight: 400; text-transform: uppercase; border: none; border-radius: 0px; cursor: pointer; display: inline-block; text-decoration: underline;\">VIEW MORE</button>",
      "label": "Ghost Button",
      "note": "No background or border, only black uppercase text. Minimal interaction, like an editorial link."
    }
  ],
  "cards": [
    {
      "name": "Cover Card",
      "desc": "Full card mimicking a Penguin paperback cover: one accent rectangle on left (1 column), author and title stacked on right, separated by a horizontal rule.",
      "html": "<div style=\"display: grid; grid-template-columns: 1fr 2fr; gap: 32px; background: #FFFFFF; border-radius: 2px; padding: 32px;\"><div style=\"background: #FF6600; width: 100%; height: 100%; border-radius: 0px;\"></div><div><div style=\"font-family: var(--font-display); font-size: 12px; font-weight: 400; text-transform: uppercase; color: #000000; border-bottom: 1px solid #000000; padding-bottom: 8px; margin-bottom: 8px;\">GEORGE ORWELL</div><div style=\"font-family: var(--font-display); font-size: 14px; font-weight: 600; color: #000000;\">Nineteen Eighty-Four</div></div></div>",
      "label": "Cover Card",
      "note": "Full card mimicking a Penguin paperback cover: one accent rectangle on left (1 column), author and title stacked on right, separated by a horizontal rule."
    },
    {
      "name": "Content Card",
      "desc": "Simple white card with a 1px black border, containing a title and metadata. No accent, clean grid alignment.",
      "html": "<div style=\"background: #FFFFFF; border: 1px solid #000000; border-radius: 2px; padding: 16px;\"><div style=\"font-family: var(--font-display); font-size: 14px; font-weight: 600; color: #000000; margin-bottom: 8px;\">The Great Gatsby</div><div style=\"font-family: var(--font-display); font-size: 12px; font-weight: 300; text-transform: uppercase; color: #000000;\">F. SCOTT FITZGERALD • 1925</div></div>",
      "label": "Content Card",
      "note": "Simple white card with a 1px black border, containing a title and metadata. No accent, clean grid alignment."
    }
  ],
  "forms": [
    {
      "name": "Text Input",
      "desc": "White input with black border, no rounding, left-aligned placeholder in uppercase label style.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 8px;\"><label style=\"font-family: var(--font-display); font-size: 12px; font-weight: 300; text-transform: uppercase; color: #000000;\">SEARCH</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" placeholder=\"Enter keyword\" style=\"background: #FFFFFF; color: #000000; border: 1px solid #000000; border-radius: 0px; padding: 8px; font-family: var(--font-display); font-size: 14px; font-weight: 400; outline: none;\"></div>",
      "label": "Text Input",
      "stateLabel": "White input with black border, no rounding, left-aligned placeholder in uppercase label style."
    },
    {
      "name": "Select Dropdown",
      "desc": "Simple dropdown mimicking a rule line; uses black bottom border and left-aligned text.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 8px;\"><label style=\"font-family: var(--font-display); font-size: 12px; font-weight: 300; text-transform: uppercase; color: #000000;\">CATEGORY</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: #FFFFFF; color: #000000; border: none; border-bottom: 1px solid #000000; border-radius: 0px; padding: 8px; font-family: var(--font-display); font-size: 14px; font-weight: 400; appearance: none;\"><option>Fiction</option><option>Non-Fiction</option><option>Poetry</option></select></div>",
      "label": "Select Dropdown",
      "stateLabel": "Simple dropdown mimicking a rule line; uses black bottom border and left-aligned text."
    },
    {
      "name": "Checkbox",
      "desc": "Square black-bordered checkbox with a black check on white. No rounding, minimalist.",
      "html": "<div style=\"display: flex; align-items: center; gap: 8px;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"width: 16px; height: 16px; border: 1px solid #000000; border-radius: 0px; background: #FFFFFF; accent-color: #000000;\"><label style=\"font-family: var(--font-display); font-size: 12px; font-weight: 300; text-transform: uppercase; color: #000000;\">AGREE TO TERMS</label></div>",
      "label": "Checkbox",
      "stateLabel": "Square black-bordered checkbox with a black check on white. No rounding, minimalist."
    }
  ],
  "extraComponents": [
    {
      "name": "Accent Rectangle",
      "desc": "A solid fill div in one of the three accent colours. No text, no border, no rounding. Spans exactly one grid column.",
      "html": "<div style=\"background: #FF6600; width: 100%; height: 100%; border-radius: 0px;\"></div>"
    },
    {
      "name": "Rule Line",
      "desc": "A single horizontal rule, 1px solid black, used to separate author from title or sections.",
      "html": "<hr style=\"border: none; border-top: 1px solid #000000; margin: 8px 0;\">"
    },
    {
      "name": "Emblem",
      "desc": "A tiny black square representing the Penguin emblem, placed in the lower right corner.",
      "html": "<div style=\"width: 12px; height: 16px; background: #000000; border-radius: 0px; margin-left: auto; margin-top: 8px;\"></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — PENGUIN MODERN CLASSICS</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — AUTHOR NAME IN CAPS</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — The Great Gatsby</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — In my younger and more vulnerable years my father gave me some advice that I&#39;ve been turning over in my mind ever since.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — FICTION • 1925 • 180 PAGES</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Do not use more than one accent color in a single view, or place text over the accent rectangle.",
      "avoid": {
        "html": "<div style=\"background: #C8102E; padding: 16px;\"><span style=\"color: #FFFFFF;\">Text over accent</span></div>",
        "label": "Avoid"
      },
      "rule": "Do not use more than one accent color in a single view, or place text over the accent rectangle.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:100%;height:100%;background:#FF6600;border-radius:0;\"></div>"
      }
    },
    {
      "desc": "Do not center text or use justified alignment. All text must be flush left.",
      "avoid": {
        "html": "<div style=\"text-align: center; font-family: Inter;\">Centered Title</div>",
        "label": "Avoid"
      },
      "rule": "Do not center text or use justified alignment. All text must be flush left.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not apply shadows, gradients, or rounded corners on functional elements (buttons, inputs, accent rectangles).",
      "avoid": {
        "html": "<button style=\"background: #FF6600; border-radius: 8px; box-shadow: 2px 2px 4px rgba(0,0,0,0.2);\">READ</button>",
        "label": "Avoid"
      },
      "rule": "Do not apply shadows, gradients, or rounded corners on functional elements (buttons, inputs, accent rectangles).",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not break the three-column grid or add additional colors beyond white, black, and one accent.",
      "avoid": {
        "html": "<div style=\"display: flex; gap: 16px;\"><div style=\"background: #0055A4; width: 50px; height: 50px;\"></div><div style=\"background: #C8102E; width: 50px; height: 50px;\"></div></div>",
        "label": "Avoid"
      },
      "rule": "Do not break the three-column grid or add additional colors beyond white, black, and one accent.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "doAvoidStyle": null,
  "effects": null,
  "motion": null,
  "colors": null,
  "typography": null,
  "layouts": {
    "copy": {
      "heroKicker": "PENGUIN MODERN CLASSICS",
      "heroHeadline": "Marber Grid System",
      "heroSub": "A spare, three‑column editorial language for the page.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#000;color:#fff;padding:16px 32px;border:none;font:400 12px/1.25 Inter,sans-serif;text-transform:uppercase\">START PROOF</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#fff;color:#000;padding:16px 32px;border:1px solid #000;font:400 12px/1.25 Inter,sans-serif;text-transform:uppercase\">VIEW SPEC</button>",
      "navLinks": [
        "GRID",
        "RULES",
        "PLATES",
        "BINDING",
        "FOLIO"
      ],
      "features": [
        {
          "title": "Three-Column Grid",
          "desc": "Equal‑width columns with 32px gutters. All content snaps to modular boundaries.",
          "icon": "▦",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">▦ Three-Column Grid</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Equal‑width columns with 32px gutters. All content snaps to modular boundaries.</div></div>"
        },
        {
          "title": "Solid Accent",
          "desc": "Exactly one full‑fill rectangle per composition. No text, no border, no rounding.",
          "icon": "■",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">■ Solid Accent</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Exactly one full‑fill rectangle per composition. No text, no border, no rounding.</div></div>"
        },
        {
          "title": "Rule Line",
          "desc": "A single 1px black rule separates author from title. No other dividers permitted.",
          "icon": "─",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">─ Rule Line</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">A single 1px black rule separates author from title. No other dividers permitted.</div></div>"
        },
        {
          "title": "Emblem",
          "desc": "A tiny black mark placed in the lower‑right corner. The only allowed icon.",
          "icon": "◆",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">◆ Emblem</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">A tiny black mark placed in the lower‑right corner. The only allowed icon.</div></div>"
        }
      ],
      "ctaStripHeadline": "Build your series on the grid.",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#000;color:#fff;padding:16px 32px;border:none;font:400 12px/1.25 Inter,sans-serif;text-transform:uppercase\">BEGIN COLOPHON</button>",
      "sidebarBrand": "MARBER GRID",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "GRID",
          "active": true
        },
        {
          "icon": "◉",
          "label": "RULES",
          "active": false
        },
        {
          "icon": "◉",
          "label": "PLATES",
          "active": false
        },
        {
          "icon": "◉",
          "label": "BINDING",
          "active": false
        }
      ],
      "dashboardTitle": "SERIES DASHBOARD",
      "metrics": [
        {
          "label": "COVERS",
          "value": "142",
          "delta": "+8%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "PAGES",
          "value": "2,847",
          "delta": "+12%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "COLUMNS",
          "value": "3",
          "delta": "0%",
          "dir": "neutral",
          "direction": "neutral"
        },
        {
          "label": "RULES",
          "value": "89",
          "delta": "-3%",
          "dir": "down",
          "direction": "down"
        }
      ],
      "chartTitle": "SERIES OUTPUT",
      "panelATitle": "RECENT PROOFS",
      "panelARows": [
        {
          "label": "PROOF A3",
          "value": "Bleed: 3mm",
          "pct": 3
        },
        {
          "label": "COVER #12",
          "value": "Accent: Orange",
          "pct": 0
        },
        {
          "label": "TITLE PAGE",
          "value": "Grid: 3-col",
          "pct": 3
        },
        {
          "label": "COLOPHON",
          "value": "Emblem: bottom-right",
          "pct": 0
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "COLOUR SWATCHES",
      "panelBCells": [
        {
          "label": "Paper White",
          "value": "#FFFFFF",
          "state": "ok"
        },
        {
          "label": "Ink Black",
          "value": "#000000",
          "state": "warn"
        },
        {
          "label": "Accent Orange",
          "value": "#FF6600",
          "state": "err"
        },
        {
          "label": "Accent Red",
          "value": "#C8102E",
          "state": "ok"
        },
        {
          "label": "Accent Blue",
          "value": "#0055A4",
          "state": "warn"
        },
        {
          "label": "Rule Line",
          "value": "#000000",
          "state": "err"
        },
        {
          "label": "Emblem",
          "value": "#000000",
          "state": "ok"
        },
        {
          "label": "Grain Overlay",
          "value": "#000000 / 15%",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "ISSUE 1",
        "ISSUE 2",
        "ISSUE 3",
        "ISSUE 4",
        "ISSUE 5",
        "ISSUE 6"
      ],
      "series": [
        {
          "data": [
            24,
            28,
            30,
            26,
            32,
            29,
            29,
            29,
            29,
            29,
            29,
            29
          ],
          "label": "COVERS",
          "axis": "left",
          "color": "#FF6600"
        },
        {
          "data": [
            480,
            512,
            496,
            528,
            544,
            520,
            520,
            520,
            520,
            520,
            520,
            520
          ],
          "label": "PAGES",
          "axis": "right-1",
          "color": "#C8102E"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'display:grid;grid-template-columns:1fr 1fr 1fr;gap:32px;padding:32px;background:var(--bg);color:var(--on-bg);font-family:var(--font-body);min-height:400px;'; el.innerHTML = '<div style=\"background:var(--primary);width:100%;height:100%;border-radius:0;\"></div><div style=\"display:flex;flex-direction:column;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:12px;font-weight:400;text-transform:uppercase;border-bottom:1px solid var(--border);padding-bottom:8px;\">GEORGE ORWELL</div><div style=\"font-family:var(--font-display);font-size:14px;font-weight:600;\">Nineteen Eighty-Four</div><hr style=\"border:none;border-top:1px solid var(--border);margin:8px 0;\"></div><div style=\"display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-end;padding-bottom:16px;\"><div style=\"width:12px;height:16px;background:var(--on-bg);border-radius:0;\"></div></div>'; }",
    "showcaseRender": "function(el) { el.style.cssText = 'display:grid;grid-template-columns:1fr 1fr 1fr;gap:32px;padding:32px;background:var(--bg);'; var cards = [{\"title\":\"Three-Column Grid\",\"desc\":\"Equal‑width columns with 32px gutters. All content snaps to modular boundaries.\",\"icon\":\"▦\"},{\"title\":\"Solid Accent\",\"desc\":\"Exactly one full‑fill rectangle per composition. No text, no border, no rounding.\",\"icon\":\"■\"},{\"title\":\"Rule Line\",\"desc\":\"A single 1px black rule separates author from title. No other dividers permitted.\",\"icon\":\"─\"},{\"title\":\"Emblem\",\"desc\":\"A tiny black mark placed in the lower‑right corner. The only allowed icon.\",\"icon\":\"◆\"}]; var html = ''; for(var i=0;i<cards.length;i++){ html += '<div style=\"border:1px solid var(--border);padding:24px;background:var(--surface);display:flex;flex-direction:column;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">' + cards[i].icon + ' ' + cards[i].title + '</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">' + cards[i].desc + '</div></div>'; } el.innerHTML = html; }",
    "panelCRender": "function(el) { el.style.cssText = 'display:grid;grid-template-columns:repeat(4,1fr);gap:32px;padding:32px;background:var(--bg);'; var metrics = [{\"label\":\"COVERS\",\"value\":\"142\",\"delta\":\"+8%\",\"dir\":\"up\"},{\"label\":\"PAGES\",\"value\":\"2,847\",\"delta\":\"+12%\",\"dir\":\"up\"},{\"label\":\"COLUMNS\",\"value\":\"3\",\"delta\":\"0%\",\"dir\":\"neutral\"},{\"label\":\"RULES\",\"value\":\"89\",\"delta\":\"-3%\",\"dir\":\"down\"}]; var html = ''; for(var i=0;i<metrics.length;i++){ var m=metrics[i]; html += '<div style=\"text-align:left;\"><div style=\"font-family:var(--font-display);font-size:12px;font-weight:300;text-transform:uppercase;color:var(--on-bg-muted);letter-spacing:.05em;\">' + m.label + '</div><div style=\"font-family:var(--font-display);font-size:24px;font-weight:600;color:var(--on-bg);margin:4px 0;\">' + m.value + '</div><div style=\"font-family:var(--font-display);font-size:12px;font-weight:400;color:' + (m.dir==='up'?'var(--deltaUp)':m.dir==='down'?'var(--deltaDown)':'var(--deltaFlat)') + ';\">' + m.delta + '</div></div>'; } el.innerHTML = html; }",
    "heroBackground": "function(el) { el.style.background = 'var(--bg)'; }",
    "ctaBackground": "function(el) { el.style.background = 'var(--bg)'; }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'height:1px;background:var(--border);margin:32px 0;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = 'var(--bg)'; }",
    "surfaceOverlay": "function(el) { var ov = document.createElement('div'); ov.style.cssText = 'position:absolute;inset:0;pointer-events:none;z-index:2;opacity:0.12;background-image:url(\"data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'300\\' height=\\'300\\'%3E%3Cfilter id=\\'n\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.7\\' numOctaves=\\'3\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23n)\\' opacity=\\'0.5\\'/%3E%3C/svg%3E\");background-repeat:repeat;'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(el, tick) { var colors = ['#FF6600', '#C8102E', '#0055A4']; var idx = tick % colors.length; el.style.background = colors[idx]; el.style.width = '100%'; el.style.height = '100%'; el.style.position = 'absolute'; el.style.top = '0'; el.style.left = '0'; el.style.pointerEvents = 'none'; el.style.opacity = '0.15'; el.style.zIndex = '1'; }",
  "shadcnTokens": {
    "--color-background": "#FFFFFF",
    "--color-popover": "#FFFFFF",
    "--color-foreground": "#000000",
    "--color-card-foreground": "#000000",
    "--color-popover-foreground": "#000000",
    "--color-card": "#FFFFFF",
    "--color-muted": "#FFFFFF",
    "--color-muted-foreground": "#1A1A1A",
    "--color-primary": "#FF6600",
    "--color-ring": "#FF6600",
    "--color-primary-foreground": "#000000",
    "--color-secondary": "#C8102E",
    "--color-accent": "#C8102E",
    "--color-secondary-foreground": "#000000",
    "--color-accent-foreground": "#000000",
    "--color-border": "#000000",
    "--color-input": "#000000",
    "--color-destructive": "#C8102E"
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
    "--primary": "#FF6600",
    "--ring": "#FF6600",
    "--primary-foreground": "#000000",
    "--secondary": "#C8102E",
    "--accent": "#C8102E",
    "--secondary-foreground": "#000000",
    "--accent-foreground": "#000000",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#C8102E"
  }
});
