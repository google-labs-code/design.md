registerSystem({
  "meta": {
    "name": "IBM Aesthetic Corporate Identity Manual 1970 (Paul Rand)",
    "tagline": "Authoritative, grid-aligned corporate UI in blue, black, and white.",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
  },
  "yamlTokens": {
    "name": "IBM Aesthetic Corporate Identity Manual 1970 (Paul Rand)",
    "colors": {
      "primary": "#0066CC",
      "on-primary": "#FFFFFF",
      "surface": "#FFFFFF",
      "on-surface": "#000000",
      "outline": "#000000",
      "error": "#000000"
    },
    "typography": {
      "display": {
        "fontFamily": "Inter",
        "fontSize": "48px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Inter",
        "fontSize": "24px",
        "fontWeight": 700,
        "lineHeight": 1.375,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Inter",
        "fontSize": "20px",
        "fontWeight": 400,
        "lineHeight": 1.5,
        "letterSpacing": "-0.025em",
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
        "fontWeight": 400,
        "lineHeight": 1.5,
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
      "section-internal": "32px",
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
        "backgroundColor": "#0066CC",
        "textColor": "#FFFFFF",
        "rounded": "0px",
        "padding": "8px",
        "height": "32px"
      },
      "button-primary-hover": {
        "backgroundColor": "#FFFFFF",
        "textColor": "#0066CC",
        "rounded": "0px",
        "padding": "8px",
        "height": "32px"
      },
      "card": {
        "backgroundColor": "#FFFFFF",
        "rounded": "0px",
        "padding": "16px"
      },
      "input": {
        "backgroundColor": "#FFFFFF",
        "rounded": "0px",
        "padding": "8px",
        "height": "32px"
      },
      "metric-cell": {
        "backgroundColor": "#FFFFFF",
        "rounded": "0px",
        "padding": "16px"
      },
      "eight-stripe-logotype": {
        "width": "24px",
        "height": "24px"
      }
    },
    "version": "alpha",
    "description": "A rigorous, monolithic vocabulary from Paul Rand's 1970 corporate identity manual — authoritative, grid-aligned, Helvetica uppercase, limited to blue/black/white.",
    "provenance": {
      "coverage_status": "complete",
      "identity_description": "The slug `ibm--aesthetic-corporate-identity-manual-1970-paul-rand` refers to the IBM Corporate Identity Manual (often called the IBM Design Guide) created by designer Paul Rand, codifying the visual identity system for International Business Machines Corporation. The exact date of this manual is debated among sources: the slug states 1970, but the most frequently cited iteration in secondary liter",
      "manual_enrichment_required": false,
      "imagery_count": 5,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "books.google.com",
          "count": 1
        },
        {
          "host": "www.cooperhewitt.org",
          "count": 1
        },
        {
          "host": "en.wikipedia.org",
          "count": 1
        },
        {
          "host": "www.ibm.com",
          "count": 1
        },
        {
          "host": "www.pantone.com",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://books.google.com/?hl=en",
          "host": "books.google.com",
          "institution": "Google Books / Yale University Press",
          "confidence_original": "low"
        },
        {
          "url": "https://www.cooperhewitt.org/",
          "host": "www.cooperhewitt.org",
          "institution": "Cooper Hewitt",
          "confidence_original": "low"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Paul_Rand",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia",
          "confidence_original": "high"
        },
        {
          "url": "https://www.ibm.com/design/language/color/",
          "host": "www.ibm.com",
          "institution": "IBM Design",
          "confidence_original": "low"
        },
        {
          "url": "https://www.pantone.com/color-finder/293-C",
          "host": "www.pantone.com",
          "institution": "Pantone LLC",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Helvetica",
          "foundry": "Haas Type Foundry",
          "year": 1957,
          "google_fonts": "Inter",
          "attestation": "conventional"
        },
        {
          "name": "custom IBM striped logotype lettering",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "attested"
        }
      ],
      "flags": {},
      "honest_gaps": [
        {
          "\"1. **Date of manual": "** The slug says 1970; the most reliably documented version is 1972. Existence of a 1970‑only manual is unconfirmed.\""
        }
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#FFFFFF",
    "--on-bg": "#000000",
    "--primary": "#0066CC",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#000000",
    "--on-secondary": "#FFFFFF",
    "--surface": "#FFFFFF",
    "--on-bg-muted": "#1A1A1A",
    "--border": "#000000",
    "--error": "#000000",
    "--font-display": "Inter",
    "--font-body": "Inter",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "info": "#0066CC",
    "success": "#0066CC",
    "warning": "#000000",
    "error": "#000000",
    "muted": "#1A1A1A",
    "err": "#000000",
    "ok": "#0066CC",
    "warn": "#000000",
    "deltaUp": "#0066CC",
    "deltaDown": "#000000",
    "deltaFlat": "#1A1A1A",
    "live": "#0066CC",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#000000",
    "chartFont": "Inter"
  },
  "elevation": {
    "none": "0 0 0 0 transparent",
    "sm": "none",
    "md": "none",
    "lg": "none"
  },
  "surfaceModel": "flat",
  "materialSimulation": {
    "model": "paper"
  },
  "globalFilter": null,
  "globalBodyCss": "font-family: var(--font-body); background: var(--bg); color: var(--on-bg); padding: 32px; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; margin: 0;",
  "globalCss": ".ds-layout-frame ::selection { background: rgba(0, 51, 102, 0.1); color: inherit; } .ds-layout-frame * { box-shadow: none !important; }",
  "interactionModel": {
    "hover": {
      "type": "color-swap",
      "description": "On hover, interactive elements swap background and text colors between primary blue (#0066CC) and white (#FFFFFF).",
      "transitionDuration": "0ms",
      "transitionEasing": "none"
    },
    "focus": {
      "type": "blue-border",
      "description": "Focus indicator is a 2px solid outline in darker blue (#003399).",
      "transitionDuration": "0ms"
    },
    "active": {
      "type": "none",
      "description": "No active state change beyond default styling."
    }
  },
  "interactionStyles": ".ds-layout-frame a, .ds-layout-frame button, .ds-layout-frame [role='button'] { transition: none; } .ds-layout-frame a:hover, .ds-layout-frame button:hover, .ds-layout-frame [role='button']:hover { background-color: #FFFFFF; color: #0066CC; } .ds-layout-frame a:focus, .ds-layout-frame button:focus, .ds-layout-frame [role='button']:focus { outline: 2px solid #003399; outline-offset: 2px; }",
  "chartStyle": {
    "line": {
      "stroke": "#0066CC",
      "strokeWidth": "1.5px",
      "marker": "none",
      "fill": "none"
    },
    "bar": {
      "fill": "#0066CC",
      "stroke": "#000000",
      "strokeWidth": "1px"
    },
    "grid": {
      "display": "optional",
      "stroke": "#000000",
      "strokeWidth": "1px"
    },
    "axis": {
      "fontFamily": "Inter",
      "fontSize": "12px",
      "color": "#0066CC"
    },
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#000000",
    "fontFamily": "Inter"
  },
  "dashboardStyle": {
    "layout": "4-column modular grid with visible blue column guides (1px, opacity 0.25)",
    "density": "generous white space, 32px page-edge margins, 16px component gaps",
    "panelTreatment": "cards with 1px blue border, white background, no shadow or rounding",
    "dataVizStyle": "monochrome line and bar charts with blue and black, no fills or markers",
    "signatureElement": "eight-stripe logotype in top-left corner, 24x24px"
  },
  "landingStyle": {
    "heroApproach": "horizontal stripe pattern (eight stripes) as background, left-aligned headline in uppercase blue over white",
    "scrollBehavior": "instant transitions, no parallax or fade",
    "ctaStyle": "solid blue button with hover swap to white/blue outline",
    "signatureMoment": "eight-stripe logotype animates in with linear build over 2s on load"
  },
  "spacing": {
    "component-internal": "16px",
    "section-internal": "32px",
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
  "buttons": [
    {
      "name": "button-primary",
      "desc": "Primary call-to-action with blue fill and white text. Hover swaps to white fill with blue text.",
      "html": "<button onmouseenter=\"this.style.backgroundColor='#FFFFFF'; this.style.color='#0066CC'; this.style.border='1px solid #0066CC';\" onmouseleave=\"this.style.backgroundColor='#0066CC'; this.style.color='#FFFFFF'; this.style.border='none';\" style=\"background-color: var(--primary); color: var(--on-primary); border: none; border-radius: var(--radius-btn); padding: 8px; height: 32px; font-family: var(--font-display); font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; cursor: pointer;\">SUBMIT</button>",
      "label": "button-primary",
      "note": "Primary call-to-action with blue fill and white text. Hover swaps to white fill with blue text."
    },
    {
      "name": "button-secondary",
      "desc": "Secondary action with black fill and white text. Hover swaps to white fill with black text.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--on-surface); color: var(--surface); border: none; border-radius: var(--radius-btn); padding: 8px; height: 32px; font-family: var(--font-display); font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; cursor: pointer;\">CANCEL</button>",
      "label": "button-secondary",
      "note": "Secondary action with black fill and white text. Hover swaps to white fill with black text."
    },
    {
      "name": "button-outline",
      "desc": "Outline variant with white fill, black border, and black text. Hover fills black with white text.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--surface); color: var(--on-surface); border: 1px solid var(--border); border-radius: var(--radius-btn); padding: 8px; height: 32px; font-family: var(--font-display); font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; cursor: pointer;\">LEARN MORE</button>",
      "label": "button-outline",
      "note": "Outline variant with white fill, black border, and black text. Hover fills black with white text."
    }
  ],
  "cards": [
    {
      "name": "card",
      "desc": "Standard card with white fill, blue border, no radius. Internal padding 16px.",
      "html": "<div style=\"background-color: var(--surface); border: 1px solid var(--primary); border-radius: var(--radius-card); padding: 16px;\"><p style=\"font-family: var(--font-body); font-size: 14px; color: var(--on-surface); margin: 0;\">Card content here. All text is left-aligned, uppercase for labels.</p></div>",
      "label": "card",
      "note": "Standard card with white fill, blue border, no radius. Internal padding 16px."
    },
    {
      "name": "card-inverted",
      "desc": "Inverted card with blue fill, white text, no border. Used for emphasis.",
      "html": "<div style=\"background-color: var(--primary); border: none; border-radius: var(--radius-card); padding: 16px;\"><p style=\"font-family: var(--font-body); font-size: 14px; color: var(--on-primary); margin: 0;\">EMPHASIZED CONTENT</p></div>",
      "label": "card-inverted",
      "note": "Inverted card with blue fill, white text, no border. Used for emphasis."
    }
  ],
  "forms": [
    {
      "name": "text-input",
      "desc": "Text input with white background, blue border, no rounding. 32px height.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px;\"><label style=\"font-family: var(--font-display); font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--on-surface);\">INPUT LABEL</label><input onfocus=\"this.style.border='2px solid var(--secondary-col)'\" onblur=\"this.style.border='1px solid var(--primary)'\" type=\"text\" style=\"background-color: var(--surface); border: 1px solid var(--primary); border-radius: var(--radius-input); padding: 8px; height: 32px; font-family: var(--font-body); font-size: 14px; color: var(--on-surface); box-sizing: border-box;\"></div>",
      "label": "text-input",
      "stateLabel": "Text input with white background, blue border, no rounding. 32px height."
    },
    {
      "name": "select-dropdown",
      "desc": "Custom select with blue border and geometric dropdown indicator (chevron made of borders).",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px;\"><label style=\"font-family: var(--font-display); font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--on-surface);\">SELECT OPTION</label><div style=\"position: relative; width: 200px;\"><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"appearance: none; background-color: var(--surface); border: 1px solid var(--primary); border-radius: var(--radius-input); padding: 8px 32px 8px 8px; height: 32px; font-family: var(--font-body); font-size: 14px; color: var(--on-surface); width: 100%; box-sizing: border-box;\"><option>OPTION A</option><option>OPTION B</option></select><div style=\"position: absolute; right: 8px; top: 50%; transform: translateY(-50%); width: 0; height: 0; border-left: 5px solid transparent; border-right: 5px solid transparent; border-top: 5px solid var(--on-surface); pointer-events: none;\"></div></div></div>",
      "label": "select-dropdown",
      "stateLabel": "Custom select with blue border and geometric dropdown indicator (chevron made of borders)."
    },
    {
      "name": "checkbox",
      "desc": "Geometric checkbox: square with black border. Checked state fills blue with a white rectangle (check).",
      "html": "<label style=\"display: flex; align-items: center; gap: 8px; font-family: var(--font-body); font-size: 14px; color: var(--on-surface); cursor: pointer;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"appearance: none; width: 24px; height: 24px; border: 2px solid var(--border); border-radius: 0; background-color: var(--surface); cursor: pointer; position: relative;\" checked><span style=\"text-transform: uppercase;\">ACCEPT TERMS</span></label>",
      "label": "checkbox",
      "stateLabel": "Geometric checkbox: square with black border. Checked state fills blue with a white rectangle (check)."
    }
  ],
  "extraComponents": [
    {
      "name": "badge",
      "desc": "Small badge with blue fill, white uppercase text.",
      "html": "<span style=\"display: inline-block; background-color: var(--primary); color: var(--on-primary); padding: 2px 8px; font-family: var(--font-display); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;\">NEW</span>"
    },
    {
      "name": "tooltip",
      "desc": "Tooltip with black fill, white text, no rounding.",
      "html": "<div style=\"position: relative; display: inline-block;\"><span style=\"border-bottom: 1px dotted var(--on-surface); cursor: help; font-family: var(--font-body);\">INFO</span><div style=\"position: absolute; bottom: 100%; left: 0; background-color: var(--on-surface); color: var(--surface); padding: 4px 8px; white-space: nowrap; font-family: var(--font-body); font-size: 12px; text-transform: uppercase;\">TOOLTIP TEXT</div></div>"
    },
    {
      "name": "toast",
      "desc": "Notification toast with white background, blue border, black text.",
      "html": "<div style=\"display: flex; align-items: center; gap: 8px; background-color: var(--surface); border: 1px solid var(--primary); border-radius: 0; padding: 12px 16px; font-family: var(--font-body); font-size: 14px; color: var(--on-surface);\"><span style=\"font-size: 20px; font-weight: 700; color: var(--primary);\">!</span><span>MESSAGE SENT SUCCESSFULLY</span></div>"
    },
    {
      "name": "eight-stripe-logotype",
      "desc": "The IBM eight-stripe logotype as a 24x24 geometric motif. Eight horizontal stripes of equal height.",
      "html": "<div style=\"width: 24px; height: 24px; display: flex; flex-direction: column;\"><div style=\"flex: 1; background-color: var(--on-surface);\"></div><div style=\"flex: 1; background-color: var(--surface);\"></div><div style=\"flex: 1; background-color: var(--on-surface);\"></div><div style=\"flex: 1; background-color: var(--surface);\"></div><div style=\"flex: 1; background-color: var(--on-surface);\"></div><div style=\"flex: 1; background-color: var(--surface);\"></div><div style=\"flex: 1; background-color: var(--on-surface);\"></div><div style=\"flex: 1; background-color: var(--surface);\"></div></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — IBM AESTHETIC CORPORATE IDENTITY MANUAL 1970</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — PAUL RAND DESIGN SYSTEM</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — EIGHT-STRIPE LOGOTYPE</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — This is the body text style used for paragraphs and descriptions. It is set in sentence case with no transformation.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — UPPERCASE LABEL TEXT</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Do not use rounded corners on any element. All corners must be sharp right angles.",
      "avoid": {
        "html": "<button style=\"background-color: #0066CC; color: white; border: none; border-radius: 8px; padding: 8px; height: 32px;\">ROUNDED BUTTON</button>",
        "label": "Avoid"
      },
      "rule": "Do not use rounded corners on any element. All corners must be sharp right angles.",
      "do": {
        "label": "Do",
        "html": "<div style=\"background-color: var(--surface); border: 1px solid var(--primary); padding: 16px; font-family: var(--font-body); font-size: 14px; color: var(--on-surface);\">CORRECT IBM CARD</div>"
      }
    },
    {
      "desc": "Do not use gradients, drop shadows, or any transparency. Colors must be solid.",
      "avoid": {
        "html": "<div style=\"background: linear-gradient(to right, #0066CC, #0033AA); box-shadow: 0 4px 6px rgba(0,0,0,0.3); padding: 16px; color: white;\">GRADIENT AND SHADOW CARD</div>",
        "label": "Avoid"
      },
      "rule": "Do not use gradients, drop shadows, or any transparency. Colors must be solid.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not use mixed case or italic text. All uppercase for display/headline/label, sentence case for body only.",
      "avoid": {
        "html": "<h1 style=\"font-family: Inter; font-size: 24px; font-style: italic;\">Wrong Case Heading</h1>",
        "label": "Avoid"
      },
      "rule": "Do not use mixed case or italic text. All uppercase for display/headline/label, sentence case for body only.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not use figurative icons or organic shapes. Use only geometric forms.",
      "avoid": {
        "html": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"#0066CC\"/><path d=\"M12 6v6l4 2\" stroke=\"white\" fill=\"none\"/></svg>",
        "label": "Avoid"
      },
      "rule": "Do not use figurative icons or organic shapes. Use only geometric forms.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "doAvoidStyle": {
    "desc": "This design system strictly forbids rounded corners, gradients, shadows, transparency, figurative icons, mixed-case, italic, and script. All elements must be flat, angular, and respect the three-color palette.",
    "avoid": {
      "html": "<\!-- See doAvoid array for concrete examples -->"
    }
  },
  "effects": [],
  "motion": [],
  "colors": {
    "primary": "#0066CC",
    "on-primary": "#FFFFFF",
    "surface": "#FFFFFF",
    "on-surface": "#000000",
    "outline": "#000000",
    "error": "#000000"
  },
  "typography": {
    "display": {
      "fontFamily": "Inter",
      "fontSize": "48px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "Inter",
      "fontSize": "24px",
      "fontWeight": 700,
      "lineHeight": 1.375,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "Inter",
      "fontSize": "20px",
      "fontWeight": 400,
      "lineHeight": 1.5,
      "letterSpacing": "-0.025em",
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
      "fontWeight": 400,
      "lineHeight": 1.5,
      "letterSpacing": "0.05em",
      "textTransform": "uppercase"
    }
  },
  "layouts": {
    "copy": {
      "heroKicker": "IBM CORPORATE IDENTITY MANUAL 1970",
      "heroHeadline": "GRID SYSTEM / DESIGN LANGUAGE",
      "heroSub": "A rigorous modular vocabulary for corporate communication in blue, black, and white.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">EXPLORE THE GRID</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">VIEW MANUAL</button>",
      "navLinks": [
        "GRID",
        "NODES",
        "METRICS",
        "SYSTEMS"
      ],
      "features": [
        {
          "title": "MODULAR GRID",
          "desc": "Every element aligns to an invisible five-column grid with visible blue column guides.",
          "icon": "■",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">■ MODULAR GRID</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Every element aligns to an invisible five-column grid with visible blue column guides.</div></div>"
        },
        {
          "title": "COLOR DISCIPLINE",
          "desc": "Strict palette: IBM blue, black, and white. No tints, gradients, or shadows.",
          "icon": "●",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">● COLOR DISCIPLINE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Strict palette: IBM blue, black, and white. No tints, gradients, or shadows.</div></div>"
        },
        {
          "title": "UPPERCASE TYPOGRAPHY",
          "desc": "All text set in Helvetica uppercase. No italic, script, or mixed case.",
          "icon": "▲",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">▲ UPPERCASE TYPOGRAPHY</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">All text set in Helvetica uppercase. No italic, script, or mixed case.</div></div>"
        },
        {
          "title": "GEOMETRIC ICONS",
          "desc": "Only bars, circles, squares, and half-circles. No figurative or organic shapes.",
          "icon": "◆",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">◆ GEOMETRIC ICONS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Only bars, circles, squares, and half-circles. No figurative or organic shapes.</div></div>"
        }
      ],
      "ctaStripHeadline": "REQUEST THE MANUAL",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">ORDER PRINT COPY</button>",
      "sidebarBrand": "IBM 1970",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "GRID LAYOUT",
          "active": true
        },
        {
          "icon": "◉",
          "label": "COLOR",
          "active": false
        },
        {
          "icon": "◉",
          "label": "TYPOGRAPHY",
          "active": false
        },
        {
          "icon": "◉",
          "label": "COMPONENTS",
          "active": false
        }
      ],
      "dashboardTitle": "SYSTEM GRID OVERVIEW",
      "metrics": [
        {
          "label": "NODES ACTIVE",
          "value": "128",
          "delta": "+4",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "GRID LOAD",
          "value": "82%",
          "delta": "-3%",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "DATA THROUGHPUT",
          "value": "2.4 GB/s",
          "delta": "+0.3",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "ALERTS",
          "value": "3",
          "delta": "-1",
          "dir": "down",
          "direction": "down"
        }
      ],
      "chartTitle": "GRID UTILIZATION BY HOUR",
      "panelATitle": "ACTIVE PROCESSES",
      "panelARows": [
        {
          "label": "MAINFRAME A",
          "value": "87%",
          "pct": 87
        },
        {
          "label": "MAINFRAME B",
          "value": "92%",
          "pct": 92
        },
        {
          "label": "STORAGE",
          "value": "74%",
          "pct": 74
        },
        {
          "label": "NETWORK",
          "value": "63%",
          "pct": 63
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "NODE HEALTH",
      "panelBCells": [
        {
          "label": "NODE-01",
          "value": "OK",
          "state": "ok"
        },
        {
          "label": "NODE-02",
          "value": "OK",
          "state": "warn"
        },
        {
          "label": "NODE-03",
          "value": "WARN",
          "state": "err"
        },
        {
          "label": "NODE-04",
          "value": "OK",
          "state": "ok"
        },
        {
          "label": "NODE-05",
          "value": "OK",
          "state": "warn"
        },
        {
          "label": "NODE-06",
          "value": "WARN",
          "state": "err"
        },
        {
          "label": "NODE-07",
          "value": "OK",
          "state": "ok"
        },
        {
          "label": "NODE-08",
          "value": "OK",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00"
      ],
      "series": [
        {
          "data": [
            45,
            52,
            48,
            61,
            55,
            58,
            58,
            58,
            58,
            58,
            58,
            58
          ],
          "label": "BANDWIDTH",
          "axis": "left",
          "color": "#0066CC"
        },
        {
          "data": [
            12,
            15,
            13,
            11,
            14,
            16,
            16,
            16,
            16,
            16,
            16,
            16
          ],
          "label": "LATENCY",
          "axis": "right-1",
          "color": "#000000"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'padding: 32px; background: #FFFFFF; min-height: 400px; display: flex; flex-direction: column; align-items: flex-start; justify-content: flex-start;'; var logo = document.createElement('div'); logo.style.cssText = 'width:24px; height:24px; display:flex; flex-direction:column; margin-bottom:32px;'; for (var i=0; i<8; i++) { var stripe = document.createElement('div'); stripe.style.cssText = 'flex:1; background-color: ' + (i%2===0 ? '#000000' : '#FFFFFF') + ';'; logo.appendChild(stripe); } el.appendChild(logo); var headline = document.createElement('h1'); headline.style.cssText = 'font-family: var(--font-display); font-size: 48px; font-weight: 700; color: var(--primary); text-transform: uppercase; letter-spacing: 0; margin: 0 0 16px 0;'; headline.textContent = 'IBM CORPORATE IDENTITY MANUAL 1970'; el.appendChild(headline); var sub = document.createElement('p'); sub.style.cssText = 'font-family: var(--font-body); font-size: 16px; font-weight: 400; color: var(--on-surface); margin: 0 0 32px 0; max-width: 600px;'; sub.textContent = 'A rigorous modular vocabulary for corporate communication in blue, black, and white.'; el.appendChild(sub); var btn = document.createElement('button'); btn.style.cssText = 'background-color: var(--primary); color: var(--on-primary); border: none; border-radius: 0; padding: 8px 16px; height: 32px; font-family: var(--font-display); font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; cursor: pointer;'; btn.textContent = 'EXPLORE THE GRID'; el.appendChild(btn); }",
    "showcaseRender": "function(el) { el.style.cssText = 'padding: 32px; background: #FFFFFF; display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;'; var features = [ {title: 'MODULAR GRID', desc: 'Every element aligns to an invisible five-column grid with visible blue column guides.'}, {title: 'COLOR DISCIPLINE', desc: 'Strict palette: IBM blue, black, and white. No tints, gradients, or shadows.'}, {title: 'UPPERCASE TYPOGRAPHY', desc: 'All text set in Helvetica uppercase. No italic, script, or mixed case.'}, {title: 'GEOMETRIC ICONS', desc: 'Only bars, circles, squares, and half-circles. No figurative or organic shapes.'} ]; for (var i = 0; i < features.length; i++) { var card = document.createElement('div'); card.style.cssText = 'border: 1px solid var(--primary); padding: 24px; background: var(--surface);'; var title = document.createElement('div'); title.style.cssText = 'font-family: var(--font-display); font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--primary); margin-bottom: 8px;'; title.textContent = features[i].title; card.appendChild(title); var desc = document.createElement('div'); desc.style.cssText = 'font-family: var(--font-body); font-size: 12px; line-height: 1.55; color: var(--on-surface);'; desc.textContent = features[i].desc; card.appendChild(desc); el.appendChild(card); } }",
    "panelCRender": "function(el) { el.style.cssText = 'padding: 16px; background: #FFFFFF; display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;'; var cells = [ {label: 'NODE-01', value: 'OK', state: 'ok'}, {label: 'NODE-02', value: 'OK', state: 'warn'}, {label: 'NODE-03', value: 'WARN', state: 'err'}, {label: 'NODE-04', value: 'OK', state: 'ok'}, {label: 'NODE-05', value: 'OK', state: 'warn'}, {label: 'NODE-06', value: 'WARN', state: 'err'}, {label: 'NODE-07', value: 'OK', state: 'ok'}, {label: 'NODE-08', value: 'OK', state: 'warn'} ]; for (var i = 0; i < cells.length; i++) { var cell = document.createElement('div'); cell.style.cssText = 'border: 1px solid var(--primary); padding: 16px; background: var(--surface); display: flex; flex-direction: column; align-items: flex-start;'; var label = document.createElement('div'); label.style.cssText = 'font-family: var(--font-display); font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--on-surface); margin-bottom: 8px;'; label.textContent = cells[i].label; cell.appendChild(label); var value = document.createElement('div'); value.style.cssText = 'font-family: var(--font-display); font-size: 24px; font-weight: 700; color: ' + (cells[i].state === 'ok' ? '#0066CC' : '#000000') + ';'; value.textContent = cells[i].value; cell.appendChild(value); el.appendChild(cell); } }",
    "heroBackground": "function(el) { el.style.background = 'repeating-linear-gradient(to bottom, #000000 0%, #000000 12.5%, #FFFFFF 12.5%, #FFFFFF 25%)'; }",
    "ctaBackground": "function(el) { el.style.background = '#0066CC'; }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'height: 8px; background: #000000;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = '#FFFFFF'; }",
    "surfaceOverlay": "function(el) { var grid = document.createElement('div'); grid.style.cssText = 'position:absolute;inset:0;background-image: linear-gradient(90deg, #0066CC 1px, transparent 1px); background-size: 20% 100%; opacity: 0.25; pointer-events: none;'; el.appendChild(grid); }"
  },
  "ambientCanvas": "function(el, tick) { var w = el.offsetWidth || 400; var h = el.offsetHeight || 300; var canvas = document.createElement('canvas'); canvas.width = w; canvas.height = h; canvas.style.cssText = 'width:100%;height:100%;'; var ctx = canvas.getContext('2d'); var primary = '#0066CC'; var stripeHeight = h / 8; var offset = (tick * 0.1) % stripeHeight; for (var i = 0; i < 8; i++) { ctx.fillStyle = i % 2 === 0 ? primary : '#FFFFFF'; ctx.fillRect(0, i * stripeHeight + offset, w, stripeHeight); } el.appendChild(canvas); }",
  "shadcnTokens": {
    "--color-background": "#FFFFFF",
    "--color-popover": "#FFFFFF",
    "--color-foreground": "#000000",
    "--color-card-foreground": "#000000",
    "--color-popover-foreground": "#000000",
    "--color-card": "#FFFFFF",
    "--color-muted": "#FFFFFF",
    "--color-muted-foreground": "#1A1A1A",
    "--color-primary": "#0066CC",
    "--color-ring": "#0066CC",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#000000",
    "--color-accent": "#000000",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
    "--color-border": "#000000",
    "--color-input": "#000000",
    "--color-destructive": "#000000"
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
    "--primary": "#0066CC",
    "--ring": "#0066CC",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#000000",
    "--accent": "#000000",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#000000"
  }
});
