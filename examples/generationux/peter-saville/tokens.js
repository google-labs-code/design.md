registerSystem({
  "meta": {
    "name": "Factory Precision",
    "tagline": "Cool, detached precision of Factory Records design",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
  },
  "yamlTokens": {
    "name": "Factory Precision",
    "colors": {
      "surface": "#F5F5F0",
      "surface-container": "#EDEDE8",
      "on-surface": "#000000",
      "outline": "#000000",
      "neutral": "#B5B5B5"
    },
    "typography": {
      "display": {
        "fontFamily": "Inter, Arimo, sans-serif",
        "fontSize": "48px",
        "fontWeight": 500,
        "lineHeight": 1.25,
        "letterSpacing": "0.2em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Inter, Arimo, sans-serif",
        "fontSize": "30px",
        "fontWeight": 500,
        "lineHeight": 1.25,
        "letterSpacing": "0.15em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Inter, Arimo, sans-serif",
        "fontSize": "20px",
        "fontWeight": 500,
        "lineHeight": 1.5,
        "letterSpacing": "0.1em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Inter, Arimo, sans-serif",
        "fontSize": "16px",
        "fontWeight": 500,
        "lineHeight": 1.625,
        "letterSpacing": "0.05em",
        "textTransform": "uppercase"
      },
      "label": {
        "fontFamily": "Inter, Arimo, sans-serif",
        "fontSize": "14px",
        "fontWeight": 500,
        "lineHeight": 1.25,
        "letterSpacing": "0.15em",
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
      "component-internal-padding": "32px",
      "section-internal-padding": "48px",
      "page-edge-margin": "32px",
      "between-components-gap": "32px",
      "between-sections-gap": "48px",
      "component-height-sm": "40px",
      "component-height-md": "48px",
      "component-height-lg": "64px",
      "icon-size": "24px",
      "avatar-size": "64px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "#CC1E2D",
        "textColor": "#FFFFFF",
        "rounded": "0px",
        "padding": "8px",
        "height": "48px"
      },
      "button-primary-hover": {
        "backgroundColor": "#CC1E2D",
        "textColor": "#FFFFFF",
        "rounded": "0px",
        "padding": "8px",
        "height": "48px"
      },
      "button-secondary": {
        "backgroundColor": "transparent",
        "textColor": "#000000",
        "rounded": "0px",
        "padding": "8px",
        "height": "48px"
      },
      "card": {
        "backgroundColor": "{colors.surface-container}",
        "rounded": "0px",
        "padding": "32px"
      },
      "input": {
        "backgroundColor": "{colors.surface}",
        "textColor": "{colors.on-surface}",
        "rounded": "0px",
        "padding": "8px"
      },
      "input-focus": {
        "backgroundColor": "{colors.surface}",
        "textColor": "{colors.on-surface}",
        "rounded": "0px"
      },
      "die-cut-circle": {
        "size": "64px",
        "backgroundColor": "{colors.surface-container}",
        "rounded": "9999px"
      }
    },
    "version": "alpha",
    "description": "This design system channels the cool, detached precision of Peter Saville's work for Factory Records — a visual language defined by architectural restraint, eerie emptiness, and the collision of high culture with industrial signifiers.",
    "provenance": {
      "coverage_status": "complete",
      "identity_description": "The slug `peter-saville` refers to Peter Saville (born 1955), the English graphic designer most famous for his record sleeve designs for the Manchester-based independent label Factory Records. This record catalogues the visual identity of his most iconic period: the sleeves and associated materials he produced between 1979 and the mid-1980s, which established a recognisable set of formal principle",
      "manual_enrichment_required": false,
      "imagery_count": 10,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "en.wikipedia.org",
          "count": 2
        },
        {
          "host": "www.vam.ac.uk",
          "count": 1
        },
        {
          "host": "www.moma.org",
          "count": 1
        },
        {
          "host": "www.goodreads.com",
          "count": 1
        },
        {
          "host": "www.collectorsweekly.com",
          "count": 1
        },
        {
          "host": "eyemagazine.com",
          "count": 1
        },
        {
          "host": "www.printmag.com",
          "count": 1
        },
        {
          "host": "www.artbook.com",
          "count": 1
        },
        {
          "host": "collections.vam.ac.uk",
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
          "url": "https://www.moma.org/",
          "host": "www.moma.org",
          "institution": "Museum of Modern Art, New York",
          "confidence_original": "low"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Peter_Saville_(graphic_designer)",
          "host": "en.wikipedia.org",
          "institution": null,
          "confidence_original": "high"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Factory_Records",
          "host": "en.wikipedia.org",
          "institution": null,
          "confidence_original": "high"
        },
        {
          "url": "https://www.goodreads.com/book/show/2330635.Peter_Saville",
          "host": "www.goodreads.com",
          "institution": null,
          "confidence_original": "low"
        },
        {
          "url": "https://www.collectorsweekly.com/",
          "host": "www.collectorsweekly.com",
          "institution": null,
          "confidence_original": "low"
        },
        {
          "url": "https://eyemagazine.com/",
          "host": "eyemagazine.com",
          "institution": "Eye Magazine",
          "confidence_original": "low"
        },
        {
          "url": "https://www.printmag.com/",
          "host": "www.printmag.com",
          "institution": "Print Magazine",
          "confidence_original": "low"
        },
        {
          "url": "https://www.artbook.com/",
          "host": "www.artbook.com",
          "institution": "Artbook / D.A.P.",
          "confidence_original": "low"
        },
        {
          "url": "https://collections.vam.ac.uk/search/?q=peter+Saville",
          "host": "collections.vam.ac.uk",
          "institution": "Victoria and Albert Museum",
          "confidence_original": "medium"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Helvetica",
          "foundry": null,
          "year": null,
          "google_fonts": "Inter",
          "attestation": "attested"
        },
        {
          "name": "Bodoni",
          "foundry": null,
          "year": null,
          "google_fonts": "Playfair Display",
          "attestation": "attested"
        },
        {
          "name": "Didot",
          "foundry": null,
          "year": null,
          "google_fonts": "Playfair Display",
          "attestation": "unknown"
        }
      ],
      "flags": {},
      "honest_gaps": [
        {
          "\"1. **Colour specifications": "** No official numeric values (hex, Pantone, CMYK) for any Factory Records sleeve colours. All colour references are inferred from reproductions. A spectrophotometric reading from original first-pressing sleeves would resolve this.\""
        }
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#F5F5F0",
    "--on-bg": "#000000",
    "--primary": "#CC1E2D",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#000000",
    "--on-secondary": "#000000",
    "--surface": "#F5F5F0",
    "--on-bg-muted": "#5A5A5A",
    "--border": "#000000",
    "--error": "#CC5511",
    "--font-display": "Inter",
    "--font-body": "Inter",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "primary": "#CC1E2D",
    "secondary": "#00A2E8",
    "error": "#CC5511",
    "neutral": "#B5B5B5",
    "surface": "#F5F5F0",
    "on-surface": "#000000",
    "outline": "#000000",
    "err": "#CC5511",
    "deltaFlat": "#B5B5B5",
    "warn": "#FF8C42",
    "ok": "#22C55E",
    "deltaUp": "#22C55E",
    "deltaDown": "#CC5511",
    "live": "#CC1E2D",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#5A5A5A",
    "chartFont": "Inter"
  },
  "chartStyle": {
    "type": "none",
    "rationale": "System does not support charts – high-density data contradicts the aesthetic",
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#5A5A5A",
    "fontFamily": "Inter"
  },
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "paper",
    "grain": {
      "technique": "SVG feTurbulence",
      "baseFrequency": "0.65–0.8",
      "numOctaves": 3,
      "type": "fractalNoise",
      "opacity": "0.15",
      "blend": "overlay",
      "darkModeOpacity": "0.10",
      "darkModeColor": "#303030"
    },
    "halftone": {
      "technique": "repeating radial-gradient or SVG pattern",
      "lpi": "50–65",
      "dotSize": "0.4–0.6mm",
      "opacity": "0.10–0.20",
      "blend": "multiply"
    },
    "misregistration": {
      "offset": "0.5–2px",
      "animation": "misregistration-drift"
    },
    "inkBleed": {
      "technique": "CSS text-shadow",
      "parameters": "0 0 2px rgba(0,0,0,0.3)",
      "applyTo": "display, headline"
    }
  },
  "interactionModel": {
    "hover": {
      "opacity": 0.8,
      "transition": "none",
      "misregistrationDrift": true
    },
    "focus": {
      "borderColor": "var(--primary)",
      "outline": "none"
    },
    "active": {},
    "transition": {
      "duration": "0ms",
      "easing": "none"
    }
  },
  "interactionStyles": ".ds-layout-frame * { transition: none !important; transition-duration: 0ms !important; transition-timing-function: steps(1) !important; } .ds-layout-frame *:hover { opacity: 0.8; } .ds-layout-frame *:focus { border-color: var(--primary); outline: none; }",
  "globalBodyCss": "-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; font-smoothing: antialiased; image-rendering: auto; text-rendering: auto; background-color: #F5F5F0; color: #000000;",
  "globalCss": "h1, h2, .display, .headline { text-shadow: 0 0 2px rgba(0,0,0,0.3); }",
  "elevation": {
    "base": 0,
    "raised": 0,
    "overlay": 0
  },
  "dashboardStyle": {
    "layout": "Not suitable for dashboards; only minimal data displays (track listings) allowed",
    "density": "≤20%",
    "panelTreatment": "flat, bordered, no elevation",
    "dataVizStyle": "none",
    "signatureElement": "barcode stripe divider"
  },
  "landingStyle": {
    "heroApproach": "1:1 square container, centered geometric shape, paper grain overlay, content in lower 20%",
    "scrollBehavior": "none (static composition preferred)",
    "ctaStyle": "primary red button, flush left or centered, all-caps",
    "signatureMoment": "die-cut circle revealing background layer"
  },
  "buttons": [
    {
      "name": "Button Primary",
      "desc": "Solid red accent button, all-caps wide tracking, zero radius.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--primary); color: var(--on-primary); border: 0; border-radius: var(--radius-btn); padding: 8px 32px; height: 48px; font-family: var(--font-display); font-size: 16px; font-weight: 500; letter-spacing: 0.15em; text-transform: uppercase; cursor: pointer; transition: none;\">FACTORY</button>",
      "label": "Button Primary",
      "note": "Solid red accent button, all-caps wide tracking, zero radius."
    },
    {
      "name": "Button Secondary",
      "desc": "Outlined button with black border, transparent fill, all-caps.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: transparent; color: var(--on-bg); border: 2px solid var(--border); border-radius: var(--radius-btn); padding: 8px 32px; height: 48px; font-family: var(--font-display); font-size: 16px; font-weight: 500; letter-spacing: 0.15em; text-transform: uppercase; cursor: pointer; transition: none;\">PRODUCT</button>",
      "label": "Button Secondary",
      "note": "Outlined button with black border, transparent fill, all-caps."
    },
    {
      "name": "Button Ghost",
      "desc": "No border, no background, only text. For minimal actions.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: transparent; color: var(--on-bg); border: 0; border-radius: var(--radius-btn); padding: 8px 32px; height: 48px; font-family: var(--font-display); font-size: 16px; font-weight: 500; letter-spacing: 0.15em; text-transform: uppercase; cursor: pointer; transition: none;\">CANCEL</button>",
      "label": "Button Ghost",
      "note": "No border, no background, only text. For minimal actions."
    }
  ],
  "cards": [
    {
      "name": "Card Default",
      "desc": "Flat container with paper surface, black border, zero radius. Content occupies ≤20% area.",
      "html": "<div style=\"background-color: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-card); padding: 32px; width: 100%; max-width: 400px; min-height: 400px; display: flex; flex-direction: column; justify-content: flex-end;\"><span style=\"font-family: var(--font-display); font-size: 14px; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase; color: var(--on-bg);\">RECORD NO. 001</span></div>",
      "label": "Card Default",
      "note": "Flat container with paper surface, black border, zero radius. Content occupies ≤20% area."
    },
    {
      "name": "Card Die-Cut",
      "desc": "Square card with a circular die-cut opening referencing Factory sleeve details.",
      "html": "<div style=\"background-color: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-card); padding: 32px; width: 100%; max-width: 400px; min-height: 400px; position: relative;\"><div style=\"position: absolute; top: 32px; left: 32px; width: 64px; height: 64px; border-radius: 50%; background-color: var(--primary);\"></div><div style=\"margin-top: 200px; font-family: var(--font-display); font-size: 14px; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase; color: var(--on-bg);\">DIE-CUT</div></div>",
      "label": "Card Die-Cut",
      "note": "Square card with a circular die-cut opening referencing Factory sleeve details."
    }
  ],
  "forms": [
    {
      "name": "Text Input",
      "desc": "Linear input field, black underline, all-caps label, no rounded corners.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 8px;\"><label style=\"font-family: var(--font-display); font-size: 14px; font-weight: 500; letter-spacing: 0.15em; text-transform: uppercase; color: var(--on-bg);\">INPUT</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" style=\"background-color: transparent; border: 0; border-bottom: 2px solid var(--border); border-radius: var(--radius-input); padding: 8px 0; font-family: var(--font-body); font-size: 16px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; color: var(--on-bg);\" placeholder=\"ENTER VALUE\" /></div>",
      "label": "Text Input",
      "stateLabel": "Linear input field, black underline, all-caps label, no rounded corners."
    },
    {
      "name": "Select Dropdown",
      "desc": "Custom select with minimal styling, black border, all-caps.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 8px;\"><label style=\"font-family: var(--font-display); font-size: 14px; font-weight: 500; letter-spacing: 0.15em; text-transform: uppercase; color: var(--on-bg);\">OPTION</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: transparent; border: 2px solid var(--border); border-radius: var(--radius-input); padding: 8px; font-family: var(--font-body); font-size: 16px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; color: var(--on-bg); appearance: none;\"><option>VARIANT A</option><option>VARIANT B</option><option>VARIANT C</option></select></div>",
      "label": "Select Dropdown",
      "stateLabel": "Custom select with minimal styling, black border, all-caps."
    },
    {
      "name": "Checkbox",
      "desc": "Square checkbox, no rounding, black outline, filled with primary when checked.",
      "html": "<div style=\"display: flex; align-items: center; gap: 12px;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"width: 20px; height: 20px; border: 2px solid var(--border); border-radius: 0; background-color: transparent; appearance: none; cursor: pointer;\" /><label style=\"font-family: var(--font-body); font-size: 16px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; color: var(--on-bg);\">ACCEPT TERMS</label></div>",
      "label": "Checkbox",
      "stateLabel": "Square checkbox, no rounding, black outline, filled with primary when checked."
    }
  ],
  "extraComponents": [
    {
      "name": "Die-Cut Circle",
      "desc": "Perfect circle with surface color, simulating a physical die-cut hole.",
      "html": "<div style=\"width: 64px; height: 64px; border-radius: 50%; background-color: var(--surface); border: 1px solid var(--border);\"></div>"
    },
    {
      "name": "Barcode Stripe Divider",
      "desc": "Thin vertical black stripes mimicking a barcode, used as a decorative divider.",
      "html": "<div style=\"display: flex; gap: 2px; height: 40px; align-items: stretch;\"><div style=\"width: 6px; background-color: var(--on-bg);\"></div><div style=\"width: 2px; background-color: var(--on-bg);\"></div><div style=\"width: 10px; background-color: var(--on-bg);\"></div><div style=\"width: 4px; background-color: var(--on-bg);\"></div><div style=\"width: 8px; background-color: var(--on-bg);\"></div></div>"
    },
    {
      "name": "Hazard Diagonal Band",
      "desc": "Diagonal black-yellow striped band (simplified to black only due to palette constraints).",
      "html": "<div style=\"width: 100%; height: 24px; background: repeating-linear-gradient(45deg, var(--on-bg), var(--on-bg) 8px, transparent 8px, transparent 16px);\"></div>"
    },
    {
      "name": "Misregistration Badge",
      "desc": "Small badge with a deliberately offset colored block to mimic print misregistration.",
      "html": "<div style=\"position: relative; width: 80px; height: 40px; overflow: hidden;\"><div style=\"position: absolute; top: 0; left: 2px; width: 100%; height: 100%; background-color: var(--primary); opacity: 0.8;\"></div><div style=\"position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 2px solid var(--on-bg); display: flex; align-items: center; justify-content: center;\"><span style=\"font-family: var(--font-display); font-size: 12px; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase; color: var(--on-bg);\">OFFSET</span></div></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — FACTORY RECORDS MANCHESTER</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — SUBLIME GEOMETRY</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — PRODUCT 001: DETAIL</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — NEGATIVE SPACE DOMINATES EIGHTY PERCENT OF COMPOSITION</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — BARCODE 5 0 2 4 0 0 0 0 1</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Do not use rounded corners or soft edges.",
      "avoid": {
        "html": "<button style=\"background-color: #CC1E2D; color: #FFFFFF; border-radius: 8px; padding: 12px 24px; font-family: Helvetica;\">BUTTON</button>",
        "label": "Avoid"
      },
      "rule": "Do not use rounded corners or soft edges.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not use shadows, gradients, or 3D effects.",
      "avoid": {
        "html": "<div style=\"background-color: #F5F5F0; box-shadow: 0 4px 6px rgba(0,0,0,0.1); padding: 20px;\"><p style=\"color: #666; font-family: Inter;\">BODY</p></div>",
        "label": "Avoid"
      },
      "rule": "Do not use shadows, gradients, or 3D effects.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not mix case or use multiple type colors within one composition.",
      "avoid": {
        "html": "<div style=\"background-color: #F5F5F0; padding: 20px;\"><h1 style=\"font-family: Inter; text-transform: none; color: #CC1E2D;\">Mixed Case Heading</h1><p style=\"font-family: Inter; color: #00A2E8;\">Secondary color body text</p></div>",
        "label": "Avoid"
      },
      "rule": "Do not mix case or use multiple type colors within one composition.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "rule": "Maintain the system binary: accent-structured specificity, never generic neutral UI.",
      "do": {
        "label": "System-specific cue",
        "html": "<div style=\"width:100px;height:100px;background:var(--primary);border:2px solid var(--border);\"></div>"
      },
      "avoid": {
        "label": "Generic soft card",
        "html": "<div style=\"width:110px;height:68px;background:#f4f4f4;border-radius:14px;box-shadow:0 8px 24px rgba(0,0,0,.12);\"></div>"
      }
    }
  ],
  "doAvoidStyle": {
    "desc": "Avoid any decorative elements that soften the industrial precision: no gradients, shadows, rounded corners, organic shapes, illustrations, pastels, or more than three colors per composition.",
    "rationale": "Maintains the cold, institutional detachment of Factory Records aesthetic."
  },
  "effects": [],
  "globalFilter": "<svg><defs><filter id='paper-grain'><feTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' result='noise'/><feColorMatrix type='matrix' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.15 0' in='noise' result='coloredNoise'/><feBlend mode='overlay' in='SourceGraphic' in2='coloredNoise'/></filter></defs></svg>",
  "layouts": {
    "copy": {
      "heroKicker": "MOONSHOT AI PRESENTS",
      "heroHeadline": "FACTORY PRECISION",
      "heroSub": "A SLEEVE COMPONENT LIBRARY FOR OFFSET PRINT",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">VIEW GRID</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">START SLEEVE</button>",
      "navLinks": [
        "GRID",
        "SLEEVE",
        "SIGNAL",
        "DRIFT"
      ],
      "features": [
        {
          "title": "DIE-CUT CIRCLE",
          "desc": "64px CIRCULAR CUT FROM CONTAINER SURFACE",
          "icon": "⭕",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⭕ DIE-CUT CIRCLE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">64px CIRCULAR CUT FROM CONTAINER SURFACE</div></div>"
        },
        {
          "title": "BARCODE STRIPE DIVIDER",
          "desc": "HORIZONTAL RULE OF VERTICAL STRIPES",
          "icon": "▮▮",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">▮▮ BARCODE STRIPE DIVIDER</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">HORIZONTAL RULE OF VERTICAL STRIPES</div></div>"
        },
        {
          "title": "HAZARD DIAGONAL BAND",
          "desc": "45° WARNING BAND FOR ACCENT LAYERS",
          "icon": "⚠️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⚠️ HAZARD DIAGONAL BAND</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">45° WARNING BAND FOR ACCENT LAYERS</div></div>"
        },
        {
          "title": "MISREGISTRATION BADGE",
          "desc": "DELIBERATE 1MM OFFSET FOR AUTHENTIC PRINT",
          "icon": "↔️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">↔️ MISREGISTRATION BADGE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">DELIBERATE 1MM OFFSET FOR AUTHENTIC PRINT</div></div>"
        }
      ],
      "ctaStripHeadline": "BUILD YOUR FIRST SLEEVE",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">COMPOSE</button>",
      "sidebarBrand": "FACTORY PRECISION",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "COMPOSITION",
          "active": true
        },
        {
          "icon": "◉",
          "label": "PALETTE",
          "active": false
        }
      ],
      "dashboardTitle": "SLEEVE SPECIFICATION",
      "metrics": [
        {
          "label": "SLEEVE WIDTH",
          "value": "312MM",
          "delta": "±0.0MM",
          "dir": "flat",
          "direction": "flat"
        },
        {
          "label": "SLEEVE HEIGHT",
          "value": "312MM",
          "delta": "±0.0MM",
          "dir": "flat",
          "direction": "flat"
        },
        {
          "label": "PAPER WEIGHT",
          "value": "350GSM",
          "delta": "STD",
          "dir": "flat",
          "direction": "flat"
        },
        {
          "label": "INK COVERAGE",
          "value": "18%",
          "delta": "-2%",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "REGISTRATION ERRORS",
          "value": "2",
          "delta": "±1",
          "dir": "flat",
          "direction": "flat"
        }
      ],
      "chartTitle": "INK DENSITY PROFILES",
      "panelATitle": "TRACK LIST",
      "panelARows": [
        {
          "label": "A1",
          "value": "3:42",
          "pct": 3
        },
        {
          "label": "A2",
          "value": "4:15",
          "pct": 4
        },
        {
          "label": "B1",
          "value": "5:01",
          "pct": 5
        },
        {
          "label": "B2",
          "value": "2:58",
          "pct": 2
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "CREDITS",
      "panelBCells": [
        {
          "label": "ART DIRECTION",
          "value": "PETER SAVILLE",
          "state": "ok"
        },
        {
          "label": "PHOTOGRAPHY",
          "value": "JULIET TEPPER",
          "state": "warn"
        },
        {
          "label": "TYPEFACE",
          "value": "INTER",
          "state": "err"
        },
        {
          "label": "PRINT PROCESS",
          "value": "OFFSET LITHO",
          "state": "ok"
        },
        {
          "label": "PAPER STOCK",
          "value": "MUNKEN PURE",
          "state": "warn"
        },
        {
          "label": "INK",
          "value": "PANTONE 485 C",
          "state": "err"
        },
        {
          "label": "CROP MARKS",
          "value": "3MM BLEED",
          "state": "ok"
        },
        {
          "label": "VARNISH",
          "value": "MATTE SEAL",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "A1",
        "A2",
        "A3",
        "B1",
        "B2",
        "B3"
      ],
      "series": [
        {
          "data": [
            12,
            8,
            15,
            10,
            6,
            14,
            14,
            14,
            14,
            14,
            14,
            14
          ],
          "label": "CYAN %",
          "axis": "left",
          "color": "#CC1E2D"
        },
        {
          "data": [
            5,
            3,
            7,
            4,
            2,
            6,
            6,
            6,
            6,
            6,
            6,
            6
          ],
          "label": "MAGENTA %",
          "axis": "right-1",
          "color": "#00A2E8"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-start;width:100%;max-width:600px;aspect-ratio:1/1;border:2px solid var(--border);background:var(--surface);padding:32px;margin:0 auto;'; var content = document.createElement('div'); content.style.cssText = 'width:100%;'; content.innerHTML = '<div style=\"font-family:var(--font-display);font-size:12px;font-weight:500;letter-spacing:0.15em;color:var(--border);margin-bottom:16px;\">FACTORY RECORDS PRESENTS</div><div style=\"font-family:var(--font-display);font-size:32px;font-weight:500;letter-spacing:0.2em;color:var(--border);line-height:1.2;\">FACTORY<br>PRECISION</div><div style=\"font-family:var(--font-body);font-size:14px;font-weight:500;letter-spacing:0.1em;color:var(--border);margin-top:24px;max-width:60%;\">SLEEVE COMPONENT LIBRARY</div>'; el.appendChild(content); }",
    "showcaseRender": "function(el) { el.style.cssText='display:grid;grid-template-columns:repeat(2,1fr);gap:32px;padding:32px;max-width:800px;margin:0 auto;'; var features = [{\"t\":\"DIE-CUT CIRCLE\",\"d\":\"64mm CIRCULAR CUT\"},{\"t\":\"BARCODE DIVIDER\",\"d\":\"HORIZONTAL STRIPE RULE\"},{\"t\":\"HAZARD BAND\",\"d\":\"45° WARNING STRIPE\"},{\"t\":\"REGISTRATION BADGE\",\"d\":\"DELIBERATE 1mm OFFSET\"}]; for(var i=0;i<features.length;i++){ var card=document.createElement('div'); card.style.cssText='border:1px solid var(--border);background:var(--surface);padding:24px;display:flex;flex-direction:column;gap:16px;'; var title=document.createElement('div'); title.style.cssText='font-family:var(--font-display);font-size:13px;font-weight:500;letter-spacing:0.1em;color:var(--primary);text-transform:uppercase;'; title.textContent=features[i].t; var desc=document.createElement('div'); desc.style.cssText='font-family:var(--font-body);font-size:12px;font-weight:500;letter-spacing:0.05em;color:var(--on-bg-muted);text-transform:uppercase;'; desc.textContent=features[i].d; card.appendChild(title); card.appendChild(desc); el.appendChild(card); } }",
    "panelCRender": "function(el) { el.style.cssText='border:1px solid var(--border);background:var(--surface);padding:32px;max-width:400px;'; var title=document.createElement('div'); title.style.cssText='font-family:var(--font-display);font-size:14px;font-weight:500;letter-spacing:0.15em;color:var(--primary);text-transform:uppercase;margin-bottom:24px;'; title.textContent='SLEEVE SPECIFICATION'; el.appendChild(title); var metrics=[{\"l\":\"SLEEVE WIDTH\",\"v\":\"312mm\"},{\"l\":\"SLEEVE HEIGHT\",\"v\":\"312mm\"},{\"l\":\"PAPER WEIGHT\",\"v\":\"350gsm\"},{\"l\":\"INK COVERAGE\",\"v\":\"18%\"}]; for(var j=0;j<metrics.length;j++){ var row=document.createElement('div'); row.style.cssText='display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border);'; var label=document.createElement('span'); label.style.cssText='font-family:var(--font-body);font-size:12px;font-weight:500;letter-spacing:0.1em;text-transform:uppercase;color:var(--on-bg);'; label.textContent=metrics[j].l; var value=document.createElement('span'); value.style.cssText='font-family:var(--font-body);font-size:12px;font-weight:500;letter-spacing:0.05em;text-transform:uppercase;color:var(--on-bg-muted);'; value.textContent=metrics[j].v; row.appendChild(label); row.appendChild(value); el.appendChild(row); } }",
    "heroBackground": "function(el) { el.style.background = 'var(--surface)'; }",
    "ctaBackground": "function(el) { el.style.background = 'var(--surface)'; }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText='display:flex;gap:2px;height:24px;align-items:stretch;margin:48px 0;'; var stripes=[6,2,10,4,8]; for(var i=0;i<stripes.length;i++){ var s=document.createElement('div'); s.style.cssText='width:'+stripes[i]+'px;background:var(--border);'; d.appendChild(s); } return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = 'var(--surface)'; }",
    "surfaceOverlay": "function(el) { var ov=document.createElement('div'); ov.style.cssText='position:absolute;inset:0;pointer-events:none;mix-blend-mode:multiply;opacity:0.15;background-image: repeating-radial-gradient(circle, rgba(0,0,0,0.1) 0.4mm, transparent 0.6mm); background-size: 1.2mm 1.2mm;'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(tick) { var d=document.createElement('div'); d.style.cssText='position:absolute;inset:0;pointer-events:none;overflow:hidden;'; var s=document.createElement('div'); s.style.cssText='position:absolute;top:50%;left:50%;width:100px;height:100px;border:2px solid var(--primary);opacity:0.3;'; s.style.marginLeft = (Math.sin(tick * 0.1) * 3) + 'px'; s.style.marginTop = (Math.cos(tick * 0.08) * 2) + 'px'; d.appendChild(s); return d; }",
  "shadcnTokens": {
    "--color-background": "#F5F5F0",
    "--color-popover": "#F5F5F0",
    "--color-foreground": "#000000",
    "--color-card-foreground": "#000000",
    "--color-popover-foreground": "#000000",
    "--color-card": "#F5F5F0",
    "--color-muted": "#F5F5F0",
    "--color-muted-foreground": "#5A5A5A",
    "--color-primary": "#CC1E2D",
    "--color-ring": "#CC1E2D",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#000000",
    "--color-accent": "#000000",
    "--color-secondary-foreground": "#000000",
    "--color-accent-foreground": "#000000",
    "--color-border": "#000000",
    "--color-input": "#000000",
    "--color-destructive": "#CC5511"
  },
  "shadcnTokensClassic": {
    "--background": "#F5F5F0",
    "--popover": "#F5F5F0",
    "--foreground": "#000000",
    "--card-foreground": "#000000",
    "--popover-foreground": "#000000",
    "--card": "#F5F5F0",
    "--muted": "#F5F5F0",
    "--muted-foreground": "#5A5A5A",
    "--primary": "#CC1E2D",
    "--ring": "#CC1E2D",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#000000",
    "--accent": "#000000",
    "--secondary-foreground": "#000000",
    "--accent-foreground": "#000000",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#CC5511"
  }
});
