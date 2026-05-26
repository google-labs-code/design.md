registerSystem({
  "meta": {
    "name": "Massimo Vignelli",
    "tagline": "Swiss Modernist typographic canon — rational authority through extreme restraint",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap"
  },
  "yamlTokens": {
    "name": "Massimo Vignelli",
    "colors": {
      "on-primary": "#FFFFFF",
      "on-secondary": "#FFFFFF",
      "tertiary": "#FFD100",
      "on-tertiary": "#000000",
      "surface": "#FFFFFF",
      "on-surface": "#000000",
      "outline": "#000000"
    },
    "typography": {
      "display": {
        "fontFamily": "Inter, Arimo, sans-serif",
        "fontSize": "48px",
        "fontWeight": 700,
        "lineHeight": 1,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Inter, Arimo, sans-serif",
        "fontSize": "30px",
        "fontWeight": 700,
        "lineHeight": 1,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Inter, Arimo, sans-serif",
        "fontSize": "24px",
        "fontWeight": 600,
        "lineHeight": 1.375,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Inter, Arimo, sans-serif",
        "fontSize": "16px",
        "fontWeight": 400,
        "lineHeight": 1.625,
        "letterSpacing": "0em"
      },
      "label": {
        "fontFamily": "Inter, Arimo, sans-serif",
        "fontSize": "12px",
        "fontWeight": 700,
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
      "component-internal": "8px",
      "section-internal": "24px",
      "page-edge": "24px",
      "gap-component": "16px",
      "gap-section": "48px",
      "height-sm": "32px",
      "height-md": "40px",
      "height-lg": "48px",
      "icon": "20px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "#C8102E",
        "textColor": "{colors.on-primary}",
        "rounded": "{rounded.button}",
        "padding": "8px 16px",
        "height": "40px"
      },
      "button-secondary": {
        "backgroundColor": "transparent",
        "textColor": "#C8102E",
        "rounded": "{rounded.button}",
        "padding": "8px 16px",
        "height": "40px"
      },
      "card": {
        "backgroundColor": "{colors.surface}",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "input": {
        "backgroundColor": "{colors.surface}",
        "rounded": "{rounded.input}",
        "padding": "8px"
      },
      "data-table-row": {
        "backgroundColor": "{colors.surface}",
        "height": "40px"
      },
      "metric-cell": {
        "backgroundColor": "#F5F5F5",
        "padding": "16px"
      },
      "signal-bar-track": {
        "backgroundColor": "transparent",
        "height": "12px"
      },
      "signal-bar-fill": {
        "backgroundColor": "#005BAA",
        "height": "12px"
      },
      "status-cell-ok": {
        "textColor": "#005BAA"
      },
      "status-cell-warn": {
        "textColor": "{colors.tertiary}"
      },
      "status-cell-err": {
        "textColor": "#C8102E"
      }
    },
    "version": "alpha",
    "description": "A direct translation of the Swiss Modernist typographic canon into a UI language, radiating rational authority through extreme restraint: geometric forms, a three-color palette, and a single sans-serif family bound to a modular grid.",
    "provenance": {
      "coverage_status": "sparse",
      "identity_description": "The slug `massimo-vignelli` refers to the Italian-born designer Massimo Vignelli (1931–2014) and, by extension, the visual identity system he developed for his own practice (both as partner at Unimark International and as co-founder of Vignelli Associates). This record captures the enduring visual language he employed across his graphic, environmental, and product design work — a modernist sys",
      "manual_enrichment_required": false,
      "imagery_count": 3,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "www.lars-mueller-publishers.com",
          "count": 1
        },
        {
          "host": "en.wikipedia.org",
          "count": 1
        },
        {
          "host": "www.cooperhewitt.org",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://www.lars-mueller-publishers.com/vignelli-canon",
          "host": "www.lars-mueller-publishers.com",
          "institution": "Lars Müller Publishers",
          "confidence_original": "low"
        },
        {
          "url": "https://en.wikipedia.org/wiki/American_Airlines",
          "host": "en.wikipedia.org",
          "institution": null,
          "confidence_original": "high"
        },
        {
          "url": "https://www.cooperhewitt.org/",
          "host": "www.cooperhewitt.org",
          "institution": "Cooper Hewitt",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Helvetica",
          "foundry": "Haas Type Foundry",
          "year": 1957,
          "google_fonts": "Inter",
          "attestation": "attested"
        },
        {
          "name": "Bodoni",
          "foundry": "Linotype/Stempel",
          "year": 1790,
          "google_fonts": "Playfair Display",
          "attestation": "unverified"
        },
        {
          "name": "Futura",
          "foundry": "Bauer",
          "year": 1927,
          "google_fonts": "Jost",
          "attestation": "attested"
        },
        {
          "name": "Times New Roman",
          "foundry": "Monotype",
          "year": 1932,
          "google_fonts": "Tinos",
          "attestation": "unknown"
        }
      ],
      "flags": [
        "sparse_imagery",
        "1_rate_limited_urls_pending_retry"
      ],
      "honest_gaps": [
        "1. **Colour hex codes for Vignelli’s six-colour palette** — unverified. No primary source provides RGB/hex values. Resolved by spectrophotometric reading of a primary artefact (e.g., a mint Stendig Calendar)."
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#FFFFFF",
    "--on-bg": "#000000",
    "--primary": "#C8102E",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#005BAA",
    "--on-secondary": "#FFFFFF",
    "--surface": "#FFFFFF",
    "--on-bg-muted": "#1A1A1A",
    "--border": "#000000",
    "--error": "#C8102E",
    "--font-display": "Inter, sans-serif",
    "--font-body": "Inter, sans-serif",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px",
    "--tertiary": "#FFD100",
    "--on-tertiary": "#000000"
  },
  "semanticColors": {
    "ok": "#005BAA",
    "warn": "#FFD100",
    "err": "#C8102E",
    "delta-up": "#005BAA",
    "delta-down": "#C8102E",
    "delta-flat": "#000000",
    "deltaUp": "#005BAA",
    "deltaDown": "#C8102E",
    "deltaFlat": "#000000",
    "live": "#C8102E",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#1A1A1A",
    "chartFont": "Space Grotesk"
  },
  "chartStyle": {
    "background": "#F5F5F5",
    "gridLines": "1px solid #000000",
    "axisLabels": {
      "fontFamily": "Inter, sans-serif",
      "fontWeight": 700,
      "fontSize": "12px",
      "textTransform": "uppercase",
      "letterSpacing": "0.05em",
      "color": "#000000"
    },
    "dataLine": {
      "stroke": "#005BAA",
      "strokeWidth": "1.5px",
      "fill": "none"
    },
    "dataPoints": {
      "fill": "#FFFFFF",
      "stroke": "#005BAA",
      "r": "3px"
    },
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#1A1A1A",
    "fontFamily": "Inter, sans-serif"
  },
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "paper",
    "filter": {
      "default": "none",
      "analog": "sepia(0.02) contrast(0.97)"
    },
    "halftone": {
      "enabled": "optional",
      "background": "repeating-conic-gradient(rgba(0,0,0,0.015) 0% 25%, transparent 0% 50%)",
      "backgroundSize": "2px 2px",
      "mixBlendMode": "multiply",
      "opacity": "0.15",
      "pointerEvents": "none",
      "position": "absolute",
      "zIndex": 9999
    }
  },
  "interactionModel": {
    "hover": {
      "background": "#005BAA",
      "color": "#FFFFFF"
    },
    "focus": {
      "border": "1px solid #C8102E"
    },
    "active": {
      "background": "#000000",
      "color": "#FFFFFF"
    }
  },
  "interactionStyles": ".ds-layout-frame button:hover { background-color: var(--secondary-col); color: var(--on-secondary); } .ds-layout-frame button:active { background-color: #000000; color: #FFFFFF; } .ds-layout-frame input:focus { border: 1px solid var(--primary); } .ds-layout-frame * { transition: all 100ms linear; }",
  "globalBodyCss": "font-family: Inter, sans-serif; background-color: #FFFFFF; color: #000000; -webkit-font-smoothing: antialiased; text-rendering: auto;",
  "globalCss": ".ds-layout-frame { --primary: #C8102E; --on-primary: #FFFFFF; --secondary-col: #005BAA; --on-secondary: #FFFFFF; --tertiary: #FFD100; --bg: #FFFFFF; --on-bg: #000000; --border: #000000; --elevation-none: none; } .ds-layout-frame ::selection { background: var(--primary); color: var(--on-primary); }",
  "spacing": {
    "component-internal": "8px",
    "section-internal": "24px",
    "page-edge": "24px",
    "gap-component": "16px",
    "gap-section": "48px",
    "height-sm": "32px",
    "height-md": "40px",
    "height-lg": "48px",
    "icon": "20px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "0px"
  },
  "elevation": {
    "none": "none"
  },
  "dashboardStyle": {
    "container": "padding: 24px; background: #FFFFFF;",
    "grid": "4-column modular grid; column gap: 16px;",
    "dataTable": "background: #F5F5F5; padding: 16px; border-bottom: 1px solid #000000;",
    "metricLabels": "font-family: Inter; font-weight: 700; font-size: 12px; text-transform: uppercase; color: #000000;",
    "metricValues": "font-family: Inter; font-weight: 700; font-size: 20px; color: #000000;",
    "statusIndicators": "text-only; ok blue, warn yellow, err red"
  },
  "landingStyle": {
    "sparsity": "single large headline in upper-left quadrant",
    "headline": "text-6xl, all-caps Inter bold, #000000 on white",
    "horizontalRule": "2px solid #C8102E, spans grid column width, below headline",
    "body": "Inter regular, text-base, leading-relaxed, left-aligned to first grid column",
    "margins": "48px page edge all around"
  },
  "globalFilter": null,
  "buttons": [
    {
      "name": "button-primary",
      "desc": "Solid red button with white text, 0 radius, uppercase label.",
      "html": "<button onmouseenter=\"this.style.backgroundColor='#005BAA';this.style.color='#FFFFFF'\" onmouseleave=\"this.style.backgroundColor='';this.style.color=''\" style=\"background-color: var(--primary); color: var(--on-primary); border: none; border-radius: var(--radius-btn); padding: 8px 16px; height: 40px; font-family: var(--font-body); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; cursor: pointer;\">ACTION</button>",
      "label": "button-primary",
      "note": "Solid red button with white text, 0 radius, uppercase label."
    },
    {
      "name": "button-secondary",
      "desc": "Outlined button with red text and border, transparent background.",
      "html": "<button onmouseenter=\"this.style.backgroundColor='#005BAA';this.style.color='#FFFFFF'\" onmouseleave=\"this.style.backgroundColor='transparent';this.style.color=''\" style=\"background-color: transparent; color: var(--primary); border: 2px solid var(--primary); border-radius: var(--radius-btn); padding: 8px 16px; height: 40px; font-family: var(--font-body); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; cursor: pointer;\">ACTION</button>",
      "label": "button-secondary",
      "note": "Outlined button with red text and border, transparent background."
    },
    {
      "name": "button-ghost",
      "desc": "Text-only button, no background or border.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: transparent; color: var(--on-bg); border: none; border-radius: var(--radius-btn); padding: 8px 16px; height: 40px; font-family: var(--font-body); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; cursor: pointer;\">ACTION</button>",
      "label": "button-ghost",
      "note": "Text-only button, no background or border."
    }
  ],
  "cards": [
    {
      "name": "card-default",
      "desc": "Standard card with white background and 0 radius, containing minimal content.",
      "html": "<div style=\"background-color: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-card); padding: 16px; width: 300px;\"><h3 style=\"font-family: var(--font-display); font-size: 24px; font-weight: 600; text-transform: uppercase; margin: 0;\">CARD TITLE</h3><p style=\"font-family: var(--font-body); font-size: 16px; margin: 8px 0 0;\">Body text content aligned left.</p></div>",
      "label": "card-default",
      "note": "Standard card with white background and 0 radius, containing minimal content."
    },
    {
      "name": "card-bordered",
      "desc": "Card with prominent black border and no background fill, emphasizing structure.",
      "html": "<div style=\"background-color: transparent; border: 2px solid var(--border); border-radius: var(--radius-card); padding: 16px; width: 300px;\"><h3 style=\"font-family: var(--font-display); font-size: 24px; font-weight: 600; text-transform: uppercase; margin: 0;\">STRUCTURE</h3><p style=\"font-family: var(--font-body); font-size: 16px; margin: 8px 0 0;\">Grid-anchored content.</p></div>",
      "label": "card-bordered",
      "note": "Card with prominent black border and no background fill, emphasizing structure."
    }
  ],
  "forms": [
    {
      "name": "input-text",
      "desc": "Text input with bold border and 0 radius, uppercase label.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px;\"><label style=\"font-family: var(--font-body); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--on-bg);\">LABEL</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" style=\"background-color: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-input); padding: 8px; font-family: var(--font-body); font-size: 16px; height: 40px;\" placeholder=\"Input text\" /></div>",
      "label": "input-text",
      "stateLabel": "Text input with bold border and 0 radius, uppercase label."
    },
    {
      "name": "select-dropdown",
      "desc": "Select dropdown with custom styling, no rounding.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px;\"><label style=\"font-family: var(--font-body); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;\">SELECT</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-input); padding: 8px; font-family: var(--font-body); font-size: 16px; height: 40px; width: 100%;\"><option>Option One</option><option>Option Two</option></select></div>",
      "label": "select-dropdown",
      "stateLabel": "Select dropdown with custom styling, no rounding."
    },
    {
      "name": "checkbox-toggle",
      "desc": "Square checkbox with no rounding, bold check style.",
      "html": "<div style=\"display: flex; align-items: center; gap: 8px;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" id=\"check1-e13b\" style=\"width: 20px; height: 20px; border: 2px solid var(--border); border-radius: 0; accent-color: var(--primary);\" /><label for=\"check1-e13b\" style=\"font-family: var(--font-body); font-size: 16px;\">Agree</label></div>",
      "label": "checkbox-toggle",
      "stateLabel": "Square checkbox with no rounding, bold check style."
    }
  ],
  "extraComponents": [
    {
      "name": "badge",
      "desc": "Small uppercase badge with bold text, used for status labels.",
      "html": "<span style=\"display: inline-block; background-color: var(--primary); color: var(--on-primary); padding: 2px 8px; font-family: var(--font-body); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; border-radius: 0;\">NEW</span>"
    },
    {
      "name": "tooltip",
      "desc": "Purely typographic tooltip, no arrow or shadow.",
      "html": "<div style=\"position: relative; display: inline-block;\"><span style=\"border-bottom: 1px dashed var(--border); cursor: help; font-family: var(--font-body); font-size: 16px;\">Hover me</span><div style=\"position: absolute; bottom: 125%; left: 50%; transform: translateX(-50%); background-color: #000000; color: #FFFFFF; padding: 4px 8px; font-size: 12px; white-space: nowrap; border-radius: 0; visibility: hidden;\">Tooltip text</div></div>"
    },
    {
      "name": "toast",
      "desc": "Temporary notification using solid red background, no rounding.",
      "html": "<div style=\"background-color: var(--primary); color: var(--on-primary); padding: 8px 16px; font-family: var(--font-body); font-size: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; max-width: 300px;\">Message sent</div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — TYPOGRAPHIC AUTHORITY</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — PRIMARY RED</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — MODULAR GRID</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — Every element snaps to the baseline grid. Asymmetry is achieved through positional variation.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — SECTION HEADER</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Rounded corners destroy the sharp, rational character.",
      "avoid": {
        "html": "<button style=\"background-color: #C8102E; color: white; border: none; border-radius: 8px; padding: 8px 16px;\">WRONG</button>",
        "label": "Avoid"
      },
      "rule": "Rounded corners destroy the sharp, rational character.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Drop shadows introduce depth that violates the flat plane.",
      "avoid": {
        "html": "<div style=\"background-color: white; border: 1px solid black; padding: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);\">SHADOW</div>",
        "label": "Avoid"
      },
      "rule": "Drop shadows introduce depth that violates the flat plane.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Centered alignment undermines the grid system.",
      "avoid": {
        "html": "<p style=\"text-align: center; font-family: Inter;\">Centered text</p>",
        "label": "Avoid"
      },
      "rule": "Centered alignment undermines the grid system.",
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
  "doAvoidStyle": "",
  "effects": [],
  "motion": [],
  "colors": {
    "on-primary": "#FFFFFF",
    "on-secondary": "#FFFFFF",
    "tertiary": "#FFD100",
    "on-tertiary": "#000000",
    "surface": "#FFFFFF",
    "on-surface": "#000000",
    "outline": "#000000"
  },
  "typography": {
    "display": {
      "fontFamily": "Inter, Arimo, sans-serif",
      "fontSize": "48px",
      "fontWeight": 700,
      "lineHeight": 1,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "Inter, Arimo, sans-serif",
      "fontSize": "30px",
      "fontWeight": 700,
      "lineHeight": 1,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "Inter, Arimo, sans-serif",
      "fontSize": "24px",
      "fontWeight": 600,
      "lineHeight": 1.375,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "Inter, Arimo, sans-serif",
      "fontSize": "16px",
      "fontWeight": 400,
      "lineHeight": 1.625,
      "letterSpacing": "0em"
    },
    "label": {
      "fontFamily": "Inter, Arimo, sans-serif",
      "fontSize": "12px",
      "fontWeight": 700,
      "lineHeight": 1.5,
      "letterSpacing": "0.05em",
      "textTransform": "uppercase"
    }
  },
  "layouts": {
    "copy": {
      "heroKicker": "DESIGN SYSTEM PREVIEW",
      "heroHeadline": "MASSIMO VIGNELLI",
      "heroSub": "SWISS MODERNIST TYPOGRAPHIC CANON — RATIONAL AUTHORITY THROUGH EXTREME RESTRAINT",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">ENTER GRID</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">VIEW CANON</button>",
      "navLinks": [
        "GRID",
        "SIGNAL",
        "MODULE",
        "TRACK",
        "NODE"
      ],
      "features": [
        {
          "title": "MODULAR GRID",
          "desc": "Every element snaps to column lines and baseline increments. Asymmetry from grid position, never arbitrary offset.",
          "icon": "🔲",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔲 MODULAR GRID</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Every element snaps to column lines and baseline increments. Asymmetry from grid position, never arbitrary offset.</div></div>"
        },
        {
          "title": "SPOT COLOR",
          "desc": "Functional color palette of red, blue, yellow, black, white. Each color carries a defined communicative role.",
          "icon": "🎨",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🎨 SPOT COLOR</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Functional color palette of red, blue, yellow, black, white. Each color carries a defined communicative role.</div></div>"
        },
        {
          "title": "TYPOGRAPHIC SCALE",
          "desc": "Single sans-serif family Inter, all-caps for headings and labels. Hierarchy by size and weight only.",
          "icon": "🔠",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔠 TYPOGRAPHIC SCALE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Single sans-serif family Inter, all-caps for headings and labels. Hierarchy by size and weight only.</div></div>"
        },
        {
          "title": "FLAT SURFACE",
          "desc": "No shadows, no gradients, no rounded corners. All elements sit on the same plane with sharp orthogonal edges.",
          "icon": "📐",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📐 FLAT SURFACE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">No shadows, no gradients, no rounded corners. All elements sit on the same plane with sharp orthogonal edges.</div></div>"
        }
      ],
      "ctaStripHeadline": "START BUILDING ON THE GRID",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">INITIALIZE</button>",
      "sidebarBrand": "GRID SIGNAL",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "GRID",
          "active": true
        },
        {
          "icon": "◉",
          "label": "SIGNAL",
          "active": false
        },
        {
          "icon": "◉",
          "label": "MODULE",
          "active": false
        },
        {
          "icon": "◉",
          "label": "TRACK",
          "active": false
        }
      ],
      "dashboardTitle": "GRID SIGNAL MONITOR",
      "metrics": [
        {
          "label": "GRID CONFORMITY",
          "value": "100.0%",
          "delta": "0.0%",
          "dir": "flat",
          "direction": "flat"
        },
        {
          "label": "COLOR ASSIGNMENT",
          "value": "4/5",
          "delta": "+1",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "TYPOGRAPHIC SCALE",
          "value": "5/5",
          "delta": "+0",
          "dir": "flat",
          "direction": "flat"
        },
        {
          "label": "MODULE UTILIZATION",
          "value": "72%",
          "delta": "−8%",
          "dir": "down",
          "direction": "down"
        }
      ],
      "chartTitle": "SIGNAL STRENGTH OVER TIME",
      "panelATitle": "RECENT SIGNALS",
      "panelARows": [
        {
          "label": "PRIMARY RED LEDGER",
          "value": "OK",
          "pct": 0
        },
        {
          "label": "SECONDARY BLUE MAP",
          "value": "WARN",
          "pct": 0
        },
        {
          "label": "TERTIARY YELLOW DIAGRAM",
          "value": "ERR",
          "pct": 0
        },
        {
          "label": "BLACK PLANE",
          "value": "OK",
          "pct": 0
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "MODULE INVENTORY",
      "panelBCells": [
        {
          "label": "GRID LINES",
          "value": "48",
          "state": "ok"
        },
        {
          "label": "COLUMNS",
          "value": "6",
          "state": "warn"
        },
        {
          "label": "ROW HEIGHT",
          "value": "12PX",
          "state": "err"
        },
        {
          "label": "GUTTER",
          "value": "16PX",
          "state": "ok"
        },
        {
          "label": "MARGIN",
          "value": "24PX",
          "state": "warn"
        },
        {
          "label": "MODULES",
          "value": "72",
          "state": "err"
        },
        {
          "label": "CELLS",
          "value": "432",
          "state": "ok"
        },
        {
          "label": "SCALE",
          "value": "1:1",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "MON",
        "TUE",
        "WED",
        "THU",
        "FRI",
        "SAT"
      ],
      "series": [
        {
          "data": [
            98,
            95,
            97,
            100,
            99,
            96,
            96,
            96,
            96,
            96,
            96,
            96
          ],
          "label": "BASELINE",
          "axis": "left",
          "color": "#C8102E"
        },
        {
          "data": [
            80,
            82,
            79,
            85,
            88,
            84,
            84,
            84,
            84,
            84,
            84,
            84
          ],
          "label": "COLUMN",
          "axis": "right-1",
          "color": "#005BAA"
        }
      ]
    },
    "splashRender": "function(el) { var c = document.createElement('div'); c.style.cssText = 'display:flex;flex-direction:column;justify-content:center;align-items:flex-start;min-height:360px;padding:48px;background:var(--bg);'; var h = document.createElement('h1'); h.style.cssText = 'font-family:var(--font-display);font-size:48px;font-weight:700;line-height:1;letter-spacing:-0.025em;text-transform:uppercase;color:var(--primary);margin:0;'; h.textContent = 'MASSIMO VIGNELLI'; var sub = document.createElement('p'); sub.style.cssText = 'font-family:var(--font-body);font-size:16px;font-weight:700;line-height:1.625;text-transform:uppercase;letter-spacing:0.05em;color:var(--on-bg);margin:16px 0 0;'; sub.textContent = 'SWISS MODERNIST TYPOGRAPHIC CANON'; var hr = document.createElement('div'); hr.style.cssText = 'width:120px;height:4px;background:var(--primary);margin-top:24px;'; c.appendChild(h); c.appendChild(sub); c.appendChild(hr); el.appendChild(c); }",
    "showcaseRender": "function(el) { el.innerHTML = '<div style=\"display:grid;grid-template-columns:repeat(2,1fr);gap:16px;padding:48px 48px 0;\">' + ['MODULAR GRID','SPOT COLOR','TYPOGRAPHIC SCALE','FLAT SURFACE'].map(function(t){return '<div style=\"border:1px solid var(--border);padding:24px;background:var(--surface);\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);margin-bottom:8px;\">' + t + '</div><div style=\"font-family:var(--font-body);font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Brief description here.</div></div>';}).join('') + '</div>'; }",
    "panelCRender": "function(el) { el.innerHTML = '<div style=\"padding:24px;border:1px solid var(--border);\"><div style=\"font-family:var(--font-display);font-size:18px;font-weight:700;text-transform:uppercase;color:var(--on-bg);margin-bottom:16px;\">RECENT SIGNALS</div><div style=\"display:flex;flex-direction:column;gap:8px;\">' + ['PRIMARY RED LEDGER','SECONDARY BLUE MAP','TERTIARY YELLOW DIAGRAM','BLACK PLANE'].map(function(l){return '<div style=\"display:flex;justify-content:space-between;font-family:var(--font-body);font-size:12px;font-weight:700;text-transform:uppercase;border-bottom:1px solid var(--border);padding:4px 0;\"><span>'+l+'</span><span style=\"color:var(--secondary-col);\">OK</span></div>';}).join('') + '</div></div>'; }",
    "heroBackground": "function(el) { el.style.background = '#C8102E'; el.style.zIndex = '0'; }",
    "ctaBackground": "function(el) { el.style.background = '#000000'; el.style.zIndex = '0'; }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'height:8px;background:var(--primary);'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = '#FFFFFF'; }",
    "surfaceOverlay": "function(el) { var o = document.createElement('div'); o.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;background-image:repeating-conic-gradient(rgba(0,0,0,0.02) 0% 25%, transparent 0% 50%);background-size:2px 2px;'; el.appendChild(o); }"
  },
  "ambientCanvas": "function(tick) { var d = document.createElement('div'); d.style.cssText = 'position:absolute;inset:0;pointer-events:none;opacity:0.03;background-image:repeating-linear-gradient(0deg,var(--primary),var(--primary)1px,transparent 1px,transparent 24px),repeating-linear-gradient(90deg,var(--primary),var(--primary)1px,transparent 1px,transparent 24px);background-size:24px 24px;background-position:0 '+((tick||0)%24)+'px, '+((tick||0)%24)+'px 0;'; return d; }",
  "shadcnTokens": {
    "--color-background": "#FFFFFF",
    "--color-popover": "#FFFFFF",
    "--color-foreground": "#000000",
    "--color-card-foreground": "#000000",
    "--color-popover-foreground": "#000000",
    "--color-card": "#FFFFFF",
    "--color-muted": "#FFFFFF",
    "--color-muted-foreground": "#1A1A1A",
    "--color-primary": "#C8102E",
    "--color-ring": "#C8102E",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#005BAA",
    "--color-accent": "#005BAA",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
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
    "--primary": "#C8102E",
    "--ring": "#C8102E",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#005BAA",
    "--accent": "#005BAA",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#C8102E"
  }
});
