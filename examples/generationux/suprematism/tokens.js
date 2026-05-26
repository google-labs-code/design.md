registerSystem({
  "meta": {
    "name": "Suprematism",
    "tagline": "Non-objective pure geometry on an infinite cream-white void",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Jost:wght@400;600;700&display=swap"
  },
  "yamlTokens": {
    "name": "Suprematism",
    "colors": {
      "primary": "#000000",
      "on-primary": "#FAF8F5",
      "secondary": "#D32F2F",
      "on-secondary": "#FFFFFF",
      "tertiary": "#1565C0",
      "on-tertiary": "#000000",
      "neutral": "#000000",
      "surface": "#FAF8F5",
      "on-surface": "#000000",
      "outline": "#000000",
      "error": "#D32F2F"
    },
    "typography": {
      "display": {
        "fontFamily": "Jost",
        "fontSize": "48px",
        "fontWeight": 700,
        "lineHeight": 1,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Jost",
        "fontSize": "30px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Jost",
        "fontSize": "20px",
        "fontWeight": 600,
        "lineHeight": 1.375,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Jost",
        "fontSize": "16px",
        "fontWeight": 400,
        "lineHeight": 1.625,
        "letterSpacing": "0em"
      },
      "label": {
        "fontFamily": "Jost",
        "fontSize": "14px",
        "fontWeight": 600,
        "lineHeight": 1.375,
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
      "gap-component": "32px",
      "gap-section": "48px",
      "height-sm": "32px",
      "height-md": "48px",
      "height-lg": "64px",
      "icon": "32px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "#000000",
        "textColor": "#FFFFFF",
        "rounded": "{rounded.button}",
        "padding": "16px"
      },
      "button-primary-hover": {
        "backgroundColor": "#D32F2F",
        "textColor": "#FFFFFF",
        "padding": "16px"
      },
      "card": {
        "backgroundColor": "#FAF8F5",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "input": {
        "backgroundColor": "#FAF8F5",
        "rounded": "{rounded.input}",
        "padding": "12px"
      },
      "black-square-anchor": {
        "backgroundColor": "#000000",
        "size": "128px"
      },
      "red-square-focal": {
        "backgroundColor": "#D50000",
        "size": "64px"
      }
    },
    "version": "alpha",
    "description": "A non-objective visual language of pure geometric essence — radically abstract, flat, and dynamic. Rooted in the Russian avant-garde, it rejects representation and decoration in favor of asymmetric diagonal tension on an infinite cream-white void.",
    "provenance": {
      "coverage_status": "sparse",
      "identity_description": "The slug `suprematism` refers to the early-20th-century Russian avant-garde art movement founded by Kazimir Malevich around 1915, first publicly exhibited at the *0.10* exhibition in Petrograd (December 1915–January 1916). Suprematism is a non‑objective visual language based on elementary geometric forms—primarily squares, circles, crosses, and lines—arranged in dynamic, often floating composition",
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
          "url": "https://en.wikipedia.org/wiki/Suprematism",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia",
          "confidence_original": "high"
        },
        {
          "url": "https://www.vam.ac.uk/errors/404.html",
          "host": "www.vam.ac.uk",
          "institution": "Victoria and Albert Museum, London",
          "confidence_original": "medium"
        },
        {
          "url": "https://www.getty.edu/research-institute/",
          "host": "www.getty.edu",
          "institution": "Getty Research Institute, Los Angeles",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": [
        {
          "name": "grotesque (sans-serif)",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "attestation": "unknown"
        },
        {
          "name": "slab-serif (Egyptienne)",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "attestation": "unknown"
        },
        {
          "name": "hand-drawn lettering (Beat the Whites with the Red Wedge)",
          "foundry": null,
          "year": 1920,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "unknown"
        },
        {
          "name": "hand-drawn lettering (About Two Squares)",
          "foundry": null,
          "year": 1922,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "unknown"
        },
        {
          "name": "hand-drawn lettering (exhibition signage)",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "unknown"
        }
      ],
      "flags": [
        "sparse_imagery"
      ],
      "honest_gaps": [
        {
          "\"1. **Colour — no standardised reference values**": "No Pantone, RAL, Munsell, or hex values are attested from primary sources. All colour specifications are either inferred from reproductions or based on unverified online sources. Resolution requires direct spectrophotometric measurement of original paintings.\""
        }
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#FAF8F5",
    "--on-bg": "#000000",
    "--primary": "#000000",
    "--on-primary": "#FAF8F5",
    "--secondary-col": "#D32F2F",
    "--on-secondary": "#FFFFFF",
    "--surface": "#FAF8F5",
    "--on-bg-muted": "#4A4A4A",
    "--border": "#000000",
    "--error": "#D32F2F",
    "--font-display": "Jost",
    "--font-body": "Jost",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px",
    "--yellow": "#FDD835"
  },
  "semanticColors": {
    "background": "#FAF8F5",
    "foreground": "#000000",
    "primary": "#000000",
    "primary-contrast": "#FAF8F5",
    "secondary": "#D32F2F",
    "secondary-contrast": "#FFFFFF",
    "tetriary": "#1565C0",
    "tetriary-contrast": "#000000",
    "outline": "#000000",
    "error": "#D32F2F",
    "muted": "#4A4A4A",
    "err": "#D32F2F",
    "warn": "#FF8C42",
    "ok": "#22C55E",
    "deltaUp": "#22C55E",
    "deltaDown": "#D32F2F",
    "deltaFlat": "#4A4A4A",
    "live": "#000000",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#4A4A4A",
    "chartFont": "Jost"
  },
  "chartStyle": {
    "global": {
      "fontFamily": "Jost",
      "backgroundColor": "#FAF8F5",
      "textColor": "#000000",
      "gridColor": "#000000",
      "gridOpacity": 0.2,
      "borderColor": "#000000",
      "borderWidth": 2,
      "tooltip": {
        "backgroundColor": "#FAF8F5",
        "textColor": "#000000",
        "borderColor": "#000000",
        "borderWidth": 1,
        "rounded": "0px"
      }
    },
    "series": {
      "default": {
        "type": "line",
        "lineWidth": 2,
        "lineColor": "#000000",
        "pointRadius": 4,
        "pointColor": "#000000",
        "fillOpacity": 0
      },
      "accent": {
        "type": "line",
        "lineWidth": 2,
        "lineColor": "#D32F2F",
        "pointColor": "#D32F2F"
      }
    },
    "axes": {
      "x": {
        "lineColor": "#000000",
        "lineWidth": 1,
        "labelColor": "#000000"
      },
      "y": {
        "lineColor": "#000000",
        "lineWidth": 1,
        "labelColor": "#000000"
      }
    },
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#4A4A4A",
    "fontFamily": "Jost"
  },
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "paper",
    "params": "{\"noiseType\":\"fractalNoise\",\"baseFrequency\":0.65,\"numOctaves\":3,\"opacity\":0.08,\"mixBlendMode\":\"overlay\"}"
  },
  "interactionModel": {
    "hover": {
      "effect": "none"
    },
    "focus": {
      "effect": "color-border",
      "borderColor": "var(--secondary-col)",
      "borderWidth": 2
    },
    "active": {
      "effect": "offset-shift",
      "shift": "translate(2px, 2px)"
    }
  },
  "spacing": {
    "component-internal": "16px",
    "section-internal": "32px",
    "page-edge": "32px",
    "gap-component": "32px",
    "gap-section": "48px",
    "height-sm": "32px",
    "height-md": "48px",
    "height-lg": "64px",
    "icon": "32px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "0px"
  },
  "elevation": {
    "type": "flat",
    "shadow": "none",
    "levels": {
      "0": {
        "shadow": "none"
      },
      "1": {
        "shadow": "none"
      },
      "2": {
        "shadow": "none"
      },
      "3": {
        "shadow": "none"
      }
    }
  },
  "dashboardStyle": {
    "layout": "single-column sparse",
    "density": "sparse (3–10 elements per view)",
    "panelTreatment": "Cream-white surface with black border, no rounding, no shadow. Panels are off-centre anchored with diagonal tension.",
    "dataVizStyle": "Line chart with black lines on cream, no fill, red accent line for secondary measure. Grid lines in black at 20% opacity. All text uppercase, Jost font.",
    "signatureElement": "A 64px black square or red square as a visual anchor in a corner, with a single metric label rotated at -5°."
  },
  "landingStyle": {
    "heroApproach": "Off-centre black square anchor (128px) at top-right, red square focal (64px) at bottom-left, with a single word uppercase headline rotated -15°.",
    "scrollBehavior": "No transitions, instant state changes (0ms). Elements appear as the user scrolls, but without animation easing — staccato display.",
    "ctaStyle": "Black button with white text, hard edges, placed along a diagonal axis relative to the hero square.",
    "signatureMoment": "A diagonal black line divider slicing the cream void, with the word 'SPACE' in all caps at a 30° tilt."
  },
  "globalFilter": null,
  "globalBodyCss": "font-family: var(--font-body); background: var(--bg); color: var(--on-bg); margin: 0;",
  "globalCss": "body::before { content: ''; position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; pointer-events: none; z-index: 9999; background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\"); background-size: cover; mix-blend-mode: overlay; opacity: 0.06; }",
  "interactionStyles": ".ds-layout-frame button:active, .ds-layout-frame a:active, .ds-layout-frame .clickable:active { transform: translate(2px, 2px); transition: transform 0ms step-start; } .ds-layout-frame button:focus, .ds-layout-frame a:focus, .ds-layout-frame .clickable:focus { outline: 2px solid var(--secondary-col); outline-offset: 2px; }",
  "buttons": [
    {
      "name": "primary",
      "desc": "Filled black square button with white uppercase text, hard edges, no rounding.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--primary); color: var(--on-primary); border: 2px solid var(--border); padding: var(--spacing-component-internal, 16px); font-family: var(--font-display); font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; border-radius: 0px; cursor: pointer; transition: none;\">ACTION</button>",
      "label": "primary",
      "note": "Filled black square button with white uppercase text, hard edges, no rounding."
    },
    {
      "name": "secondary",
      "desc": "Red filled button with white text, hard edges, same styling as primary.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--secondary-col); color: var(--on-secondary); border: 2px solid var(--border); padding: var(--spacing-component-internal, 16px); font-family: var(--font-display); font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; border-radius: 0px; cursor: pointer; transition: none;\">STRIKE</button>",
      "label": "secondary",
      "note": "Red filled button with white text, hard edges, same styling as primary."
    },
    {
      "name": "outline",
      "desc": "Outline button with black border and transparent fill, hard edges.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: transparent; color: var(--on-bg); border: 2px solid var(--border); padding: var(--spacing-component-internal, 16px); font-family: var(--font-display); font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; border-radius: 0px; cursor: pointer; transition: none;\">VOID</button>",
      "label": "outline",
      "note": "Outline button with black border and transparent fill, hard edges."
    }
  ],
  "cards": [
    {
      "name": "black-square-anchor card",
      "desc": "A card featuring the iconic black square anchor, off-centre on cream background with black border.",
      "html": "<div style=\"background-color: var(--surface); border: 2px solid var(--border); border-radius: 0px; padding: var(--spacing-component-internal, 16px); position: relative; min-height: 200px; display: flex; align-items: flex-start; justify-content: flex-end;\"><div style=\"width: 64px; height: 64px; background-color: var(--primary); border: 2px solid var(--border);\"></div><span style=\"font-family: var(--font-display); font-size: 12px; color: var(--on-surface); text-transform: uppercase; transform: rotate(-10deg); position: absolute; bottom: 16px; left: 16px;\">SUPREME</span></div>",
      "label": "black-square-anchor card",
      "note": "A card featuring the iconic black square anchor, off-centre on cream background with black border."
    },
    {
      "name": "red-focal card",
      "desc": "A card with a red focal square and minimalist text, hard edges, no shadows.",
      "html": "<div style=\"background-color: var(--surface); border: 2px solid var(--border); border-radius: 0px; padding: var(--spacing-component-internal, 16px); position: relative; min-height: 200px; display: flex; align-items: flex-end; justify-content: flex-start;\"><div style=\"width: 48px; height: 48px; background-color: var(--secondary-col); border: 2px solid var(--border);\"></div><span style=\"font-family: var(--font-display); font-size: 12px; color: var(--on-surface); text-transform: uppercase; position: absolute; top: 16px; right: 16px; transform: rotate(15deg);\">FOCUS</span></div>",
      "label": "red-focal card",
      "note": "A card with a red focal square and minimalist text, hard edges, no shadows."
    }
  ],
  "forms": [
    {
      "name": "text input",
      "desc": "Flat text input with no rounding, black border, cream background.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 8px;\"><label style=\"font-family: var(--font-body); font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--on-surface);\">INPUT</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" style=\"background-color: var(--surface); border: 2px solid var(--border); border-radius: 0px; padding: 12px; font-family: var(--font-body); font-size: 16px; color: var(--on-surface); outline: none; transition: none;\"></div>",
      "label": "text input",
      "stateLabel": "Flat text input with no rounding, black border, cream background."
    },
    {
      "name": "select dropdown",
      "desc": "Flat select element with black border, no rounding, uppercase label.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 8px;\"><label style=\"font-family: var(--font-body); font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--on-surface);\">CHOOSE</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--surface); border: 2px solid var(--border); border-radius: 0px; padding: 12px; font-family: var(--font-body); font-size: 16px; color: var(--on-surface); text-transform: uppercase; transition: none;\"><option>BLACK</option><option>RED</option><option>BLUE</option></select></div>",
      "label": "select dropdown",
      "stateLabel": "Flat select element with black border, no rounding, uppercase label."
    },
    {
      "name": "checkbox toggle",
      "desc": "Minimalist checkbox with black border, no decoration, hard edges.",
      "html": "<div style=\"display: flex; align-items: center; gap: 8px;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"width: 16px; height: 16px; border: 2px solid var(--border); background-color: var(--surface); border-radius: 0px; transition: none;\"><label style=\"font-family: var(--font-body); font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--on-surface);\">APPROVE</label></div>",
      "label": "checkbox toggle",
      "stateLabel": "Minimalist checkbox with black border, no decoration, hard edges."
    }
  ],
  "extraComponents": [
    {
      "name": "badge",
      "desc": "Small black badge with white uppercase text, hard edges.",
      "html": "<span style=\"display: inline-block; background-color: var(--primary); color: var(--on-primary); font-family: var(--font-display); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 8px; border: 2px solid var(--border); border-radius: 0px;\">NEW</span>"
    },
    {
      "name": "tooltip",
      "desc": "Black tooltip box with white text, positioned off-centre, no arrow.",
      "html": "<div style=\"display: inline-block; position: relative;\"><span style=\"font-family: var(--font-body);\">HOVER</span><div style=\"position: absolute; top: 100%; left: 20%; background-color: var(--primary); color: var(--on-primary); font-family: var(--font-display); font-size: 12px; text-transform: uppercase; padding: 8px; border: 2px solid var(--border); border-radius: 0px; white-space: nowrap;\">PURE FORM</div></div>"
    },
    {
      "name": "toast",
      "desc": "Red toast notification positioned at bottom-right, hard edges, no animation.",
      "html": "<div style=\"position: fixed; bottom: 32px; right: 32px; background-color: var(--secondary-col); color: var(--on-secondary); font-family: var(--font-display); font-size: 14px; font-weight: 700; text-transform: uppercase; padding: 16px; border: 2px solid var(--border); border-radius: 0px;\">COMPOSITION</div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — SUPREME</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — GEOMETRY</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — FORM</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — shape and void</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — ACTION</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Rounded corners are forbidden. All edges must be crisp and hard.",
      "avoid": {
        "html": "<button style=\"border-radius: 8px; background-color: var(--primary); color: var(--on-primary); padding: 16px;\">WRONG</button>",
        "label": "Avoid"
      },
      "rule": "Rounded corners are forbidden. All edges must be crisp and hard.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Shadows or drop shadows are forbidden. Only flat surfaces allowed.",
      "avoid": {
        "html": "<div style=\"background-color: var(--surface); box-shadow: 0 4px 6px rgba(0,0,0,0.1); padding: 16px;\">WRONG</div>",
        "label": "Avoid"
      },
      "rule": "Shadows or drop shadows are forbidden. Only flat surfaces allowed.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Gradients or any color modulation is forbidden. Colors must be flat and solid.",
      "avoid": {
        "html": "<div style=\"background: linear-gradient(90deg, var(--primary), var(--secondary-col)); padding: 16px;\">WRONG</div>",
        "label": "Avoid"
      },
      "rule": "Gradients or any color modulation is forbidden. Colors must be flat and solid.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Serif or script typefaces are forbidden. Only geometric sans-serif (Jost) allowed.",
      "avoid": {
        "html": "<p style=\"font-family: 'Times New Roman'; font-size: 16px;\">WRONG</p>",
        "label": "Avoid"
      },
      "rule": "Serif or script typefaces are forbidden. Only geometric sans-serif (Jost) allowed.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "doAvoidStyle": "No gradients, shadows, rounded corners, serif fonts, representational images, symmetrical layouts, centred alignments, more than 2 lines of text, or any curved edges. All elements must be hard-edged, flat, and geometrically pure.",
  "effects": [],
  "motion": [],
  "colors": {
    "primary": "#000000",
    "on-primary": "#FAF8F5",
    "secondary": "#D32F2F",
    "on-secondary": "#FFFFFF",
    "tertiary": "#1565C0",
    "on-tertiary": "#000000",
    "neutral": "#000000",
    "surface": "#FAF8F5",
    "on-surface": "#000000",
    "outline": "#000000",
    "error": "#D32F2F"
  },
  "typography": {
    "display": {
      "fontFamily": "Jost",
      "fontSize": "48px",
      "fontWeight": 700,
      "lineHeight": 1,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "Jost",
      "fontSize": "30px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "0.025em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "Jost",
      "fontSize": "20px",
      "fontWeight": 600,
      "lineHeight": 1.375,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "Jost",
      "fontSize": "16px",
      "fontWeight": 400,
      "lineHeight": 1.625,
      "letterSpacing": "0em"
    },
    "label": {
      "fontFamily": "Jost",
      "fontSize": "14px",
      "fontWeight": 600,
      "lineHeight": 1.375,
      "letterSpacing": "0.05em",
      "textTransform": "uppercase"
    }
  },
  "layouts": {
    "copy": {
      "heroKicker": "RADICAL ABSTRACTION",
      "heroHeadline": "COMPOSE THE VOID",
      "heroSub": "Non-objective geometry for the infinite plane",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#000;color:#FAF8F5;border:2px solid #000;padding:16px;font-family:Jost;text-transform:uppercase;font-weight:700;letter-spacing:0.05em;\">BEGIN COMPOSITION</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#FAF8F5;color:#000;border:2px solid #000;padding:16px;font-family:Jost;text-transform:uppercase;font-weight:700;letter-spacing:0.05em;\">EXPLORE PRIMITIVES</button>",
      "navLinks": [
        "ANCHOR",
        "FOCAL",
        "TENSION",
        "VOID"
      ],
      "features": [
        {
          "title": "BLACK SQUARE",
          "desc": "The foundational anchor. Place a single black square off-centre to command the void.",
          "icon": "⬛",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⬛ BLACK SQUARE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">The foundational anchor. Place a single black square off-centre to command the void.</div></div>"
        },
        {
          "title": "RED FOCAL",
          "desc": "A red square for dynamic tension. Small, precise, uncompromising.",
          "icon": "🔴",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔴 RED FOCAL</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">A red square for dynamic tension. Small, precise, uncompromising.</div></div>"
        },
        {
          "title": "DIAGONAL LINE",
          "desc": "Slice the plane. A hard edge at 15° to create direction and imbalance.",
          "icon": "➖",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">➖ DIAGONAL LINE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Slice the plane. A hard edge at 15° to create direction and imbalance.</div></div>"
        },
        {
          "title": "CROSS",
          "desc": "Intersection of horizontality and verticality. Bracing the void.",
          "icon": "❌",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">❌ CROSS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Intersection of horizontality and verticality. Bracing the void.</div></div>"
        }
      ],
      "ctaStripHeadline": "COMPOSE WITHOUT REPRESENTATION",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#D32F2F;color:#FAF8F5;border:2px solid #D32F2F;padding:16px;font-family:Jost;text-transform:uppercase;font-weight:700;letter-spacing:0.05em;\">START VOID</button>",
      "sidebarBrand": "SUPREME",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "COMPOSITIONS",
          "active": true
        },
        {
          "icon": "◉",
          "label": "STUDIO",
          "active": false
        }
      ],
      "dashboardTitle": "COMPOSITION METRICS",
      "metrics": [
        {
          "label": "ANCHOR OFFSET",
          "value": "128PX",
          "delta": "+8PX",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "FOCAL TENSION",
          "value": "15°",
          "delta": "-3°",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "VOID DOMINANCE",
          "value": "64%",
          "delta": "+2%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "LINE COUNT",
          "value": "3",
          "delta": "+1",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "COMPOSITIONAL BALANCE",
      "panelATitle": "ELEMENT INVENTORY",
      "panelARows": [
        {
          "label": "BLACK SQUARE",
          "value": "1",
          "pct": 1
        },
        {
          "label": "RED FOCAL",
          "value": "1",
          "pct": 1
        },
        {
          "label": "DIAGONAL LINE",
          "value": "2",
          "pct": 2
        },
        {
          "label": "CROSS",
          "value": "0",
          "pct": 0
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "TENSION MAP",
      "panelBCells": [
        {
          "label": "NODE 1",
          "value": "12°",
          "state": "ok"
        },
        {
          "label": "NODE 2",
          "value": "8°",
          "state": "warn"
        },
        {
          "label": "NODE 3",
          "value": "15°",
          "state": "err"
        },
        {
          "label": "NODE 4",
          "value": "22°",
          "state": "ok"
        },
        {
          "label": "NODE 5",
          "value": "5°",
          "state": "warn"
        },
        {
          "label": "NODE 6",
          "value": "18°",
          "state": "err"
        },
        {
          "label": "NODE 7",
          "value": "10°",
          "state": "ok"
        },
        {
          "label": "NODE 8",
          "value": "14°",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "FRAME 1",
        "FRAME 2",
        "FRAME 3",
        "FRAME 4",
        "FRAME 5",
        "FRAME 6"
      ],
      "series": [
        {
          "data": [
            120,
            128,
            135,
            130,
            125,
            132,
            132,
            132,
            132,
            132,
            132,
            132
          ],
          "label": "ANCHOR DISTANCE",
          "axis": "left",
          "color": "#000000"
        },
        {
          "data": [
            60,
            55,
            70,
            65,
            58,
            62,
            62,
            62,
            62,
            62,
            62,
            62
          ],
          "label": "FOCAL INTENSITY",
          "axis": "right-1",
          "color": "#D32F2F"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'background:#FAF8F5;min-height:80vh;width:100%;position:relative;overflow:hidden;'; el.innerHTML = '<div style=\"position:absolute;top:10%;right:12%;width:128px;height:128px;background:var(--primary);border:2px solid var(--border);transform:rotate(0deg);\"></div><div style=\"position:absolute;bottom:15%;left:8%;width:64px;height:64px;background:var(--secondary-col);border:2px solid var(--border);transform:rotate(0deg);\"></div><div style=\"position:absolute;top:40%;left:20%;font-family:var(--font-display);font-size:64px;font-weight:700;text-transform:uppercase;letter-spacing:-0.025em;color:var(--on-bg);transform:rotate(-15deg);white-space:nowrap;\">COMPOSE</div><div style=\"position:absolute;bottom:30%;right:30%;width:1px;height:200px;background:var(--border);transform:rotate(15deg);transform-origin:top center;\"></div>'; }",
    "showcaseRender": "function(el) { el.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:32px;padding:32px;background:var(--surface);border:2px solid var(--border);'; var items = ['BLACK SQUARE','RED FOCAL','DIAGONAL LINE','CROSS']; var descs = ['The foundational anchor. Place a single black square off-centre to command the void.','A red square for dynamic tension. Small, precise, uncompromising.','Slice the plane. A hard edge at 15° to create direction and imbalance.','Intersection of horizontality and verticality. Bracing the void.']; var html = ''; for (var i = 0; i < 4; i++) { var tilt = i % 2 === 0 ? -5 : 5; html += '<div style=\"border:2px solid var(--border);padding:16px;background:var(--surface);transform:rotate('+tilt+'deg);\"><div style=\"font-family:var(--font-display);font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:var(--on-bg);margin-bottom:8px;\">'+items[i]+'</div><div style=\"font-family:var(--font-body);font-size:12px;line-height:1.5;color:var(--on-bg-muted);\">'+descs[i]+'</div></div>'; } el.innerHTML = html; }",
    "panelCRender": "function(el) { el.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:24px;padding:32px;background:var(--surface);border:2px solid var(--border);position:relative;'; el.innerHTML = '<div style=\"position:absolute;top:8px;right:8px;width:32px;height:32px;background:var(--primary);border:2px solid var(--border);\"></div><div style=\"font-family:var(--font-display);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:var(--on-bg);grid-column:1/-1;transform:rotate(-3deg);\">COMPOSITION METRICS</div><div style=\"font-family:var(--font-body);font-size:14px;color:var(--on-bg);\"><strong style=\"font-weight:700;\">ANCHOR OFFSET</strong><br>128PX <span style=\"color:var(--ok);\">+8PX</span></div><div style=\"font-family:var(--font-body);font-size:14px;color:var(--on-bg);text-align:right;transform:rotate(2deg);\"><strong style=\"font-weight:700;\">FOCAL TENSION</strong><br>15° <span style=\"color:var(--err);\">-3°</span></div><div style=\"font-family:var(--font-body);font-size:14px;color:var(--on-bg);\"><strong style=\"font-weight:700;\">VOID DOMINANCE</strong><br>64% <span style=\"color:var(--ok);\">+2%</span></div><div style=\"font-family:var(--font-body);font-size:14px;color:var(--on-bg);text-align:right;transform:rotate(-1deg);\"><strong style=\"font-weight:700;\">LINE COUNT</strong><br>3 <span style=\"color:var(--ok);\">+1</span></div>'; }",
    "heroBackground": "function(el) { el.style.background = '#FAF8F5'; }",
    "ctaBackground": "function(el) { el.style.background = '#000000'; }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'height:48px;position:relative;overflow:hidden;'; var line = document.createElement('div'); line.style.cssText = 'position:absolute;top:50%;left:-10%;width:120%;height:2px;background:var(--primary);transform:rotate(-10deg);transform-origin:center;'; d.appendChild(line); return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = '#FAF8F5'; }",
    "surfaceOverlay": "function(el) { var child = document.createElement('div'); child.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;opacity:0.06;mix-blend-mode:multiply;background-image:url(\"data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100%25\\' height=\\'100%25\\'%3E%3Cfilter id=\\'n\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.9\\' numOctaves=\\'4\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23n)\\' opacity=\\'1\\'/%3E%3C/svg%3E\");background-size:cover;'; el.appendChild(child); }"
  },
  "ambientCanvas": "function(el, tick) { el.style.cssText = 'position:relative;overflow:hidden;background:var(--surface);border:2px solid var(--border);'; var child = el.querySelector('.gux-ambient-square') || document.createElement('div'); child.className = 'gux-ambient-square'; child.style.cssText = 'position:absolute;top:20%;left:20%;width:80px;height:80px;background:var(--primary);border:2px solid var(--border);transform:rotate(' + (tick * 0.5) + 'deg);transition:transform 0ms;'; el.appendChild(child); var child2 = el.querySelector('.gux-ambient-line') || document.createElement('div'); child2.className = 'gux-ambient-line'; child2.style.cssText = 'position:absolute;top:60%;right:10%;width:200px;height:2px;background:var(--secondary-col);transform:rotate(' + (10 + tick * 0.2) + 'deg);transform-origin:left center;'; el.appendChild(child2); return el; }",
  "components": "{\"button-primary\":{\"backgroundColor\":\"#000000\",\"textColor\":\"#FFFFFF\",\"rounded\":\"{rounded.button}\",\"padding\":\"16px\"},\"button-primary-hover\":{\"backgroundColor\":\"#D32F2F\",\"textColor\":\"#FFFFFF\",\"padding\":\"16px\"},\"card\":{\"backgroundColor\":\"#FAF8F5\",\"rounded\":\"{rounded.card}\",\"padding\":\"16px\"},\"input\":{\"backgroundColor\":\"#FAF8F5\",\"rounded\":\"{rounded.input}\",\"padding\":\"12px\"},\"black-square-anchor\":{\"backgroundColor\":\"#000000\",\"size\":\"128px\"},\"red-square-focal\":{\"backgroundColor\":\"#D50000\",\"size\":\"64px\"},\"diagonal-line-divider\":{\"height\":\"2px\",\"color\":\"#000000\",\"rotation\":\"-15deg\"},\"cross\":{\"size\":\"48px\",\"color\":\"#1565C0\",\"borderWidth\":\"4px\"}}",
  "shadcnTokens": {
    "--color-background": "#FAF8F5",
    "--color-popover": "#FAF8F5",
    "--color-foreground": "#000000",
    "--color-card-foreground": "#000000",
    "--color-popover-foreground": "#000000",
    "--color-card": "#FAF8F5",
    "--color-muted": "#FAF8F5",
    "--color-muted-foreground": "#4A4A4A",
    "--color-primary": "#000000",
    "--color-ring": "#000000",
    "--color-primary-foreground": "#FAF8F5",
    "--color-secondary": "#D32F2F",
    "--color-accent": "#D32F2F",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
    "--color-border": "#000000",
    "--color-input": "#000000",
    "--color-destructive": "#D32F2F"
  },
  "shadcnTokensClassic": {
    "--background": "#FAF8F5",
    "--popover": "#FAF8F5",
    "--foreground": "#000000",
    "--card-foreground": "#000000",
    "--popover-foreground": "#000000",
    "--card": "#FAF8F5",
    "--muted": "#FAF8F5",
    "--muted-foreground": "#4A4A4A",
    "--primary": "#000000",
    "--ring": "#000000",
    "--primary-foreground": "#FAF8F5",
    "--secondary": "#D32F2F",
    "--accent": "#D32F2F",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#D32F2F"
  }
});
