registerSystem({
  "meta": {
    "name": "Braun 1960s Product Packaging — Functionalist UI",
    "tagline": "Functionalist digital interface language translating Braun's 1960s packaging rigor: flush-left neo-grotesque, sparse layout, spot colors, hairline rules, and pure silhouette imagery.",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Inter:ital,wght@0,100..900;1,100..900&display=swap"
  },
  "yamlTokens": {
    "name": "Braun 1960s Product Packaging — Functionalist UI",
    "colors": {
      "paper": "#F5F0E8"
    },
    "typography": {
      "display": {
        "fontFamily": "Archivo, sans-serif",
        "fontSize": "36px",
        "fontWeight": 700,
        "lineHeight": 1.1,
        "letterSpacing": "-0.02em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Archivo, sans-serif",
        "fontSize": "24px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.05em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Archivo, sans-serif",
        "fontSize": "18px",
        "fontWeight": 500,
        "lineHeight": 1.4,
        "letterSpacing": "0.05em"
      },
      "body": {
        "fontFamily": "Archivo, sans-serif",
        "fontSize": "12px",
        "fontWeight": 300,
        "lineHeight": 1.6,
        "letterSpacing": "0.05em"
      },
      "label": {
        "fontFamily": "Archivo, sans-serif",
        "fontSize": "12px",
        "fontWeight": 300,
        "lineHeight": 1,
        "letterSpacing": "0.1em",
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
      "component-internal": "24px",
      "section-internal": "32px",
      "page-edge-horizontal": "48px",
      "page-edge-vertical": "64px",
      "between-components": "24px",
      "between-sections": "48px",
      "component-height-sm": "32px",
      "component-height-md": "40px",
      "component-height-lg": "48px",
      "icon-size": "24px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "#E3000B",
        "textColor": "#FFFFFF",
        "rounded": "{rounded.button}",
        "padding": "8px 24px"
      },
      "button-primary-hover": {
        "backgroundColor": "#E3000B",
        "textColor": "#FFFFFF",
        "opacity": "0.8"
      },
      "button-secondary": {
        "backgroundColor": "transparent",
        "textColor": "#000000",
        "border": "1px solid #000000",
        "rounded": "{rounded.button}",
        "padding": "8px 24px"
      },
      "button-secondary-hover": {
        "backgroundColor": "#F5F0E8",
        "textColor": "#000000"
      },
      "card": {
        "backgroundColor": "#FFFFFF",
        "rounded": "{rounded.card}",
        "padding": "24px"
      },
      "input": {
        "backgroundColor": "transparent",
        "borderBottom": "1px solid #B0B0B0",
        "height": "40px",
        "padding": "8px 0"
      },
      "input-focus": {
        "borderBottom": "2px solid #E3000B"
      },
      "accent-block": {
        "backgroundColor": "#E3000B",
        "width": "48px",
        "height": "12px",
        "rounded": "0px",
        "textColor": "#FFFFFF",
        "typography": "{typography.label}"
      },
      "logo-sticker": {
        "backgroundColor": "#E3000B",
        "textColor": "#FFFFFF",
        "width": "32px",
        "height": "32px",
        "rounded": "9999px",
        "typography": "{typography.label}"
      }
    },
    "version": "alpha",
    "description": "A functionalist digital interface language translating 1960s Braun product packaging rigor. Uses flush-left neo-grotesque typography, sparse layout with 30-50% white space, spot colors (red ± gray), hairline rules, and pure silhouette imagery. No shadows, gradients, rounded corners, or ornament.",
    "provenance": {
      "coverage_status": "sparse",
      "identity_description": "The slug `braun--aesthetic-product-packaging-system-1960s` refers to the packaging and overall visual identity used by Braun GmbH for its consumer electronic and household products from roughly the early 1960s through the early 1970s, designed under the direction of Dieter Rams and his team (including Hans Gugelot, Dietrich Lubs, and others). This identity extends from product design into packagin",
      "manual_enrichment_required": false,
      "imagery_count": 3,
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
          "host": "www.design-museum.de",
          "count": 1
        },
        {
          "host": "de.wikipedia.org",
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
          "url": "https://www.design-museum.de/de/informationen.html",
          "host": "www.design-museum.de",
          "institution": "Vitra Design Museum, Weil am Rhein",
          "confidence_original": "low"
        },
        {
          "url": "https://de.wikipedia.org/wiki/Braun_(Elektroger%C3%A4te)",
          "host": "de.wikipedia.org",
          "institution": "Wikipedia (German)",
          "confidence_original": "high"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Akzidenz-Grotesk",
          "foundry": "Berthold",
          "year": 1898,
          "google_fonts": "Archivo",
          "attestation": "attested"
        },
        {
          "name": "Helvetica",
          "foundry": "Haas/Stempel",
          "year": 1957,
          "google_fonts": "Inter",
          "attestation": "attested"
        },
        {
          "name": "custom braun logotype",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "attested"
        }
      ],
      "flags": [
        "sparse_imagery",
        "2_robots_disallowed_urls"
      ],
      "honest_gaps": [
        {
          "\"1. **Colour**": "no certified hex, Pantone, or Munsell value for the red; no corporate colour standard published; no information on batch variance across factories.\""
        }
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#FFFFFF",
    "--on-bg": "#000000",
    "--primary": "#E3000B",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#A0A0A0",
    "--on-secondary": "#000000",
    "--surface": "#F5F0E8",
    "--on-bg-muted": "#5A5A5A",
    "--border": "#B0B0B0",
    "--error": "#CC0000",
    "--font-display": "'Archivo', sans-serif",
    "--font-body": "'Archivo', sans-serif",
    "--radius-default": "0",
    "--radius-card": "0",
    "--radius-btn": "0",
    "--radius-chip": "9999px"
  },
  "semanticColors": {
    "--text-primary": "#000000",
    "--text-secondary": "#5A5A5A",
    "--text-disabled": "#B0B0B0",
    "--bg-primary": "#FFFFFF",
    "--bg-secondary": "#F5F0E8",
    "--border-primary": "#B0B0B0",
    "--border-accent": "#E3000B",
    "warn": "#FF8C42",
    "ok": "#22C55E",
    "err": "#CC0000",
    "deltaUp": "#22C55E",
    "deltaDown": "#CC0000",
    "deltaFlat": "#5A5A5A",
    "live": "#E3000B",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#5A5A5A",
    "chartFont": "Space Grotesk"
  },
  "chartStyle": {
    "type": "line",
    "lineColor": "#000000",
    "lineWidth": "1px",
    "fill": "none",
    "grid": "hairline",
    "gridColor": "#B0B0B0",
    "gridOpacity": 0.3,
    "axisLabels": "label role",
    "labelColor": "#5A5A5A",
    "fontFamily": "'Archivo', sans-serif"
  },
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "paper",
    "substrate": "uncoated/coated matte white or warm paper",
    "texture": "feTurbulence grain overlay (baseFrequency 0.65-0.8, numOctaves 2-3, fractalNoise, mix-blend-mode overlay, opacity 0.03-0.05)",
    "colorCorrection": "none"
  },
  "globalFilter": null,
  "globalBodyCss": "background-color: #FFFFFF; font-family: 'Archivo', 'Inter', sans-serif; color: #000000; margin: 0; line-height: 1.6; text-rendering: optimizeLegibility; -webkit-font-smoothing: antialiased;",
  "globalCss": ".ds-layout-frame { background: #FFFFFF; font-family: var(--font-body); color: var(--on-bg); } .ds-layout-frame::before { content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='2' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)' opacity='0.04' mix-blend-mode='overlay' /%3E%3C/svg%3E\"); background-repeat: repeat; opacity: 1; mix-blend-mode: overlay; z-index: 0; } .ds-layout-frame a { text-decoration: none; color: inherit; }",
  "interactionModel": {
    "hover": {
      "description": "Color shift: border-color transitions to primary (#E3000B) on interactive elements; background shifts to surface-container (#F5F0E8) on buttons/cards."
    },
    "focus": {
      "description": "Color border: 2px bottom border in primary red for inputs; hairline underline for links."
    },
    "active": {
      "description": "Opacity dim: primary button opacity 0.80; secondary button gets surface-container fill."
    },
    "transition": {
      "duration": "150ms",
      "easing": "ease-out",
      "property": [
        "opacity",
        "border-color",
        "background-color"
      ]
    },
    "transformOnInteract": "none",
    "exemptAnimations": [
      "fade-in (300ms ease-out on page load)"
    ]
  },
  "interactionStyles": ".ds-layout-frame button, .ds-layout-frame a, .ds-layout-frame input, .ds-layout-frame textarea, .ds-layout-frame select, .ds-layout-frame [role=\"button\"] { transition: opacity 150ms ease-out, border-color 150ms ease-out, background-color 150ms ease-out; }",
  "spacing": {
    "component-internal": "24px",
    "section-internal": "32px",
    "page-edge-horizontal": "48px",
    "page-edge-vertical": "64px",
    "between-components": "24px",
    "between-sections": "48px",
    "component-height-sm": "32px",
    "component-height-md": "40px",
    "component-height-lg": "48px",
    "icon-size": "24px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "9999px"
  },
  "elevation": {
    "flat": "0",
    "base": "0",
    "overlay": "0 (no shadow)"
  },
  "dashboardStyle": {
    "layout": "6/4/2 column modular grid, flush-left alignment, 30-50% white space",
    "density": "sparse",
    "panelTreatment": "flat white panels with hairline borders, no shadows, no rounded corners",
    "dataVizStyle": "simple line charts with hairline grid, no fill, axis labels in label typography",
    "signatureElement": "red accent block (48x12px) in top-left corner of each panel"
  },
  "landingStyle": {
    "heroApproach": "flush-left display text with red accent block above headline; product silhouette in right columns (4-6); generous white space below",
    "scrollBehavior": "smooth fade-in (300ms ease-out) for sections as they enter viewport",
    "ctaStyle": "outlined secondary button (hairline border, transparent background, uppercase label)",
    "signatureMoment": "logo sticker appears on the product silhouette frame at page load with a 300ms fade-in"
  },
  "buttons": [
    {
      "name": "button-primary",
      "desc": "Solid red primary action button. No border-radius, uppercase label, flush-left text.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--primary); color: var(--on-primary); border: none; padding: 8px 24px; font-family: var(--font-display); font-size: 12px; font-weight: 300; letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer; transition: opacity 150ms ease-out;\" onmouseover=\"this.style.opacity='0.8'\" onmouseout=\"this.style.opacity='1'\">Primary Action</button>",
      "label": "button-primary",
      "note": "Solid red primary action button. No border-radius, uppercase label, flush-left text."
    },
    {
      "name": "button-secondary",
      "desc": "Outlined secondary button with hairline border. Transparent background, black text.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: transparent; color: var(--on-bg); border: 1px solid var(--on-bg); padding: 8px 24px; font-family: var(--font-display); font-size: 12px; font-weight: 300; letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer; transition: background-color 150ms ease-out, border-color 150ms ease-out;\" onmouseover=\"this.style.backgroundColor='var(--surface)'\" onmouseout=\"this.style.backgroundColor='transparent'\">Secondary Action</button>",
      "label": "button-secondary",
      "note": "Outlined secondary button with hairline border. Transparent background, black text."
    },
    {
      "name": "button-ghost",
      "desc": "Ghost button with no border or background. Only primary red text on hover.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: transparent; color: var(--primary); border: none; padding: 8px 24px; font-family: var(--font-display); font-size: 12px; font-weight: 300; letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer; transition: opacity 150ms ease-out;\" onmouseover=\"this.style.opacity=\\x270.8\\x27\" onmouseout=\"this.style.opacity=\\x271\\x27\">Ghost Action</button>",
      "label": "button-ghost",
      "note": "Ghost button with no border or background. Only primary red text on hover."
    }
  ],
  "cards": [
    {
      "name": "card-default",
      "desc": "Standard white card with hairline border, flush-left content. Uses product name and description.",
      "html": "<div style=\"background-color: var(--bg); padding: 24px; border: 1px solid var(--border); border-radius: var(--radius-card);\"><h3 style=\"font-family: var(--font-display); font-size: 18px; font-weight: 500; letter-spacing: 0.05em; margin: 0; text-transform: uppercase;\">Product Name</h3><p style=\"font-family: var(--font-body); font-size: 12px; font-weight: 300; line-height: 1.6; letter-spacing: 0.05em; margin: 8px 0 0; color: var(--on-bg-muted);\">Specification details here.</p></div>",
      "label": "card-default",
      "note": "Standard white card with hairline border, flush-left content. Uses product name and description."
    },
    {
      "name": "card-accent",
      "desc": "Product card with red accent block above headline and body text. Warm surface background.",
      "html": "<div style=\"background-color: var(--surface); padding: 24px; border: 1px solid var(--border); border-radius: var(--radius-card);\"><div style=\"width: 48px; height: 12px; background-color: var(--primary); margin-bottom: 16px;\"></div><h3 style=\"font-family: var(--font-display); font-size: 24px; font-weight: 700; letter-spacing: 0.05em; margin: 0; text-transform: uppercase;\">SK 4</h3><p style=\"font-family: var(--font-body); font-size: 12px; font-weight: 300; line-height: 1.6; letter-spacing: 0.05em; margin: 8px 0 0; color: var(--on-bg-muted);\">Radio-Phono Combination</p></div>",
      "label": "card-accent",
      "note": "Product card with red accent block above headline and body text. Warm surface background."
    }
  ],
  "forms": [
    {
      "name": "text-input",
      "desc": "Single-line text input with hairline bottom border. No background, focus changes border to primary red.",
      "html": "<div style=\"display: flex; flex-direction: column;\"><label style=\"font-family: var(--font-display); font-size: 12px; font-weight: 300; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 4px;\">Field Label</label><input type=\"text\" style=\"background-color: transparent; border: none; border-bottom: 1px solid var(--border); height: 40px; padding: 8px 0; font-family: var(--font-body); font-size: 12px; color: var(--on-bg); outline: none; transition: border-color 150ms ease-out;\" placeholder=\"Enter text\" onfocus=\"this.style.borderBottom='2px solid var(--primary)'\" onblur=\"this.style.borderBottom='1px solid var(--border)'\"/></div>",
      "label": "text-input",
      "stateLabel": "Single-line text input with hairline bottom border. No background, focus changes border to primary red."
    },
    {
      "name": "select-dropdown",
      "desc": "Custom select with hairline bottom border and arrow icon. No border-radius, flush-left options.",
      "html": "<div style=\"display: flex; flex-direction: column;\"><label style=\"font-family: var(--font-display); font-size: 12px; font-weight: 300; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 4px;\">Select Option</label><select style=\"background-color: transparent; border: none; border-bottom: 1px solid var(--border); height: 40px; padding: 8px 0; font-family: var(--font-body); font-size: 12px; color: var(--on-bg); outline: none; transition: border-color 150ms ease-out; -webkit-appearance: none; appearance: none; background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"10\" height=\"6\"><path d=\"M0 0l5 6 5-6z\" fill=\"%23000\"/></svg>'); background-repeat: no-repeat; background-position: right 8px center; padding-right: 24px;\" onfocus=\"this.style.borderBottom='2px solid var(--primary)'\" onblur=\"this.style.borderBottom='1px solid var(--border)'\"><option>Option 1</option><option>Option 2</option></select></div>",
      "label": "select-dropdown",
      "stateLabel": "Custom select with hairline bottom border and arrow icon. No border-radius, flush-left options."
    },
    {
      "name": "checkbox",
      "desc": "Square checkbox with hairline border. No rounded corners, red fill on check? But the source uses no fill? We'll use transparent background with black tick on check? For simplicity, we show unchecked state with hover border change.",
      "html": "<div style=\"display: flex; align-items: center; gap: 8px;\"><input type=\"checkbox\" style=\"width: 16px; height: 16px; border: 1px solid var(--border); background-color: transparent; -webkit-appearance: none; appearance: none; border-radius: 0; cursor: pointer; transition: border-color 150ms ease-out;\" onfocus=\"this.style.borderColor='var(--primary)'\" onblur=\"this.style.borderColor='var(--border)'\" /><label style=\"font-family: var(--font-body); font-size: 12px; font-weight: 300; letter-spacing: 0.05em; color: var(--on-bg);\">Label text</label></div>",
      "label": "checkbox",
      "stateLabel": "Square checkbox with hairline border. No rounded corners, red fill on check? But the source uses no fill? We'll use transparent background with black tick on check? For simplicity, we show unchecked state with hover border change."
    }
  ],
  "extraComponents": [
    {
      "name": "accent-block",
      "desc": "Small solid red rectangle used for brand name or badge. No padding.",
      "html": "<div style=\"width: 48px; height: 12px; background-color: var(--primary);\"></div>"
    },
    {
      "name": "product-silhouette-frame",
      "desc": "Hairline rectangle containing a pure silhouette (line art) of a product. High-contrast black shape.",
      "html": "<div style=\"border: 1px solid var(--border); width: 200px; height: 200px; display: flex; align-items: center; justify-content: center;\"><svg width=\"100\" height=\"150\" viewBox=\"0 0 100 150\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"20\" width=\"80\" height=\"110\" fill=\"var(--on-bg)\"/><rect x=\"20\" y=\"10\" width=\"60\" height=\"10\" fill=\"var(--on-bg)\"/></svg></div>"
    },
    {
      "name": "ruled-line",
      "desc": "Horizontal hairline rule for section separation. No decoration.",
      "html": "<hr style=\"border: none; border-top: 1px solid var(--border); margin: 24px 0;\" />"
    },
    {
      "name": "logo-sticker",
      "desc": "Small circle filled primary red with white text (e.g., 'B'). Used on corners or flaps.",
      "html": "<div style=\"width: 32px; height: 32px; border-radius: 9999px; background-color: var(--primary); display: flex; align-items: center; justify-content: center;\"><span style=\"font-family: var(--font-display); font-size: 10px; font-weight: 700; color: var(--on-primary); letter-spacing: 0.1em;\">B</span></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — BRAUN SK 4</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — RADIO-PHONO</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — Tischventilator</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — Specifications: 50W, 230V, 45dB</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — MADE IN GERMANY</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Avoid shadows and rounded corners anywhere in the UI.",
      "avoid": {
        "html": "<div style=\"box-shadow: 0 4px 6px rgba(0,0,0,0.1); border-radius: 8px; padding: 16px;\">This breaks the flat, functionalist aesthetic.</div>",
        "label": "Avoid"
      },
      "rule": "Avoid shadows and rounded corners anywhere in the UI.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:48px;height:12px;background:var(--primary);\"></div>"
      }
    },
    {
      "desc": "Avoid centered or justified text. All text must be flush-left ragged-right.",
      "avoid": {
        "html": "<div style=\"text-align: center; font-family: var(--font-display);\">Centered text violates the grid.</div>",
        "label": "Avoid"
      },
      "rule": "Avoid centered or justified text. All text must be flush-left ragged-right.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:100%;height:1px;background:var(--border);margin:24px 0;\"></div>"
      }
    },
    {
      "desc": "Avoid gradients and more than two colors on a single surface.",
      "avoid": {
        "html": "<div style=\"background: linear-gradient(to right, var(--primary), var(--surface)); color: var(--on-bg); padding: 16px;\">Gradients are prohibited.</div>",
        "label": "Avoid"
      },
      "rule": "Avoid gradients and more than two colors on a single surface.",
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
  "doAvoidStyle": "Do not use any shadows, gradients, rounded corners, centered/justified alignment, decorative illustration, perspective, or more than two spot colors (including black) on any single surface. No background color on section containers for grouping; use white space and hairline rules only.",
  "effects": [],
  "motion": [],
  "colors": {
    "--primary": "#E3000B",
    "--on-primary": "#FFFFFF",
    "--on-bg": "#000000",
    "--bg": "#FFFFFF",
    "--surface": "#F5F0E8",
    "--border": "#B0B0B0",
    "--on-bg-muted": "#5A5A5A",
    "--secondary": "#A0A0A0",
    "--on-secondary": "#000000"
  },
  "typography": {
    "display": {
      "fontFamily": "Archivo, sans-serif",
      "fontSize": "36px",
      "fontWeight": 700,
      "lineHeight": 1.1,
      "letterSpacing": "-0.02em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "Archivo, sans-serif",
      "fontSize": "24px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "0.05em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "Archivo, sans-serif",
      "fontSize": "18px",
      "fontWeight": 500,
      "lineHeight": 1.4,
      "letterSpacing": "0.05em"
    },
    "body": {
      "fontFamily": "Archivo, sans-serif",
      "fontSize": "12px",
      "fontWeight": 300,
      "lineHeight": 1.6,
      "letterSpacing": "0.05em"
    },
    "label": {
      "fontFamily": "Archivo, sans-serif",
      "fontSize": "12px",
      "fontWeight": 300,
      "lineHeight": 1,
      "letterSpacing": "0.1em",
      "textTransform": "uppercase"
    }
  },
  "layouts": {
    "copy": {
      "heroKicker": "BRAUN",
      "heroHeadline": "RT 20 TONBANDGERÄT",
      "heroSub": "COMPACT REEL-TO-REEL RECORDER. SOLID-STATE CIRCUITRY. 3 SPEEDS. MONO PLAYBACK.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#E3000B;color:#FFFFFF;border:none;padding:8px 24px;font-family:\\x27Archivo\\x27,sans-serif;font-size:12px;font-weight:300;letter-spacing:0.1em;text-transform:uppercase;cursor:pointer;transition:opacity 150ms ease-out;\">SPECIFICATION SHEET</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:transparent;color:#000000;border:1px solid #000000;padding:8px 24px;font-family:\\x27Archivo\\x27,sans-serif;font-size:12px;font-weight:300;letter-spacing:0.1em;text-transform:uppercase;cursor:pointer;transition:opacity 150ms ease-out;\">DIMENSIONS DRAWING</button>",
      "navLinks": [
        "PRODUCTS",
        "CIRCUIT DIAGRAM",
        "OPERATION",
        "ACCESSORIES"
      ],
      "features": [
        {
          "title": "SOLID STATE",
          "desc": "All-silicon transistor amplifier. No warm-up. Instant on.",
          "icon": "⬡",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⬡ SOLID STATE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">All-silicon transistor amplifier. No warm-up. Instant on.</div></div>"
        },
        {
          "title": "3 SPEEDS",
          "desc": "4.75 / 9.5 / 19 cm/s. Frequency response 40–20 000 Hz at 19 cm/s.",
          "icon": "⏺",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⏺ 3 SPEEDS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">4.75 / 9.5 / 19 cm/s. Frequency response 40–20 000 Hz at 19 cm/s.</div></div>"
        },
        {
          "title": "MONO TRACK",
          "desc": "Full-track recording. High output level. Low distortion.",
          "icon": "⏽",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⏽ MONO TRACK</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Full-track recording. High output level. Low distortion.</div></div>"
        },
        {
          "title": "COMPACT",
          "desc": "Width 260 mm. Height 120 mm. Depth 180 mm. Weight 2.8 kg.",
          "icon": "▯",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">▯ COMPACT</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Width 260 mm. Height 120 mm. Depth 180 mm. Weight 2.8 kg.</div></div>"
        }
      ],
      "ctaStripHeadline": "RT 20 • BERLIN DESIGN RATIO",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#E3000B;color:#FFFFFF;border:none;padding:8px 24px;font-family:\\x27Archivo\\x27,sans-serif;font-size:12px;font-weight:300;letter-spacing:0.1em;text-transform:uppercase;cursor:pointer;\">ORDER CATALOGUE</button>",
      "sidebarBrand": "BRAUN",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "RT 20",
          "active": true
        },
        {
          "icon": "◉",
          "label": "TG 60",
          "active": false
        }
      ],
      "dashboardTitle": "FACTORY OUTPUT — Q3 1965",
      "metrics": [
        {
          "label": "UNITS PRODUCED",
          "value": "12 840",
          "delta": "+6.2 %",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "QUALITY RATE",
          "value": "98.4 %",
          "delta": "+0.3 %",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "AVERAGE BENCH TIME",
          "value": "47 MIN",
          "delta": "-2 MIN",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "REJECT RATE",
          "value": "1.1 %",
          "delta": "-0.15 %",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "WEEKLY OUTPUT",
          "value": "1 320",
          "delta": "+4.1 %",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "AMPLIFIER DISTORTION VS. FREQUENCY",
      "panelATitle": "PERFORMANCE DATA",
      "panelARows": [
        {
          "label": "OUTPUT POWER",
          "value": "2 x 5 W RMS",
          "pct": 2
        },
        {
          "label": "TOTAL HARMONIC DISTORTION",
          "value": "<0.5 %",
          "pct": 0.5
        },
        {
          "label": "FREQUENCY RESPONSE",
          "value": "40–20 000 Hz",
          "pct": 40
        },
        {
          "label": "SIGNAL-TO-NOISE RATIO",
          "value": "60 dB",
          "pct": 60
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "MECHANICAL SPECIFICATIONS",
      "panelBCells": [
        {
          "label": "REEL SIZE",
          "value": "MAX 18 cm",
          "state": "ok"
        },
        {
          "label": "TAPE SPEEDS",
          "value": "4.75/9.5/19 cm/s",
          "state": "warn"
        },
        {
          "label": "WEIGHT",
          "value": "2.8 kg",
          "state": "err"
        },
        {
          "label": "DIMENSIONS",
          "value": "260 x 120 x 180 mm",
          "state": "ok"
        },
        {
          "label": "POWER CONSUMPTION",
          "value": "30 W",
          "state": "warn"
        },
        {
          "label": "OPERATING TEMP.",
          "value": "+5 to +40 °C",
          "state": "err"
        },
        {
          "label": "CASE MATERIAL",
          "value": "SHEET STEEL / ABS",
          "state": "ok"
        },
        {
          "label": "FINISH",
          "value": "MATTE GRAY / WARM WHITE",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "20 Hz",
        "100 Hz",
        "500 Hz",
        "1 kHz",
        "5 kHz",
        "10 kHz",
        "20 kHz"
      ],
      "series": [
        {
          "data": [
            0.8,
            0.4,
            0.2,
            0.15,
            0.3,
            0.6,
            1.2,
            1.2,
            1.2,
            1.2,
            1.2,
            1.2
          ],
          "label": "CHANNEL 1",
          "axis": "left",
          "color": "#E3000B"
        },
        {
          "data": [
            0.9,
            0.5,
            0.25,
            0.2,
            0.35,
            0.7,
            1.4,
            1.4,
            1.4,
            1.4,
            1.4,
            1.4
          ],
          "label": "CHANNEL 2",
          "axis": "right-1",
          "color": "#A0A0A0"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'min-height:100vh;background:#FFFFFF;padding:64px 48px;display:flex;flex-direction:column;justify-content:center;'; el.innerHTML = '<div style=\"width:48px;height:12px;background:var(--primary);margin-bottom:32px;\"></div><div style=\"font-family:var(--font-display);font-size:36px;font-weight:700;line-height:1.1;letter-spacing:-0.02em;text-transform:uppercase;color:var(--on-bg);margin-bottom:8px;\">RT 20 TONBANDGERÄT</div><div style=\"font-family:var(--font-body);font-size:12px;font-weight:300;line-height:1.6;letter-spacing:0.05em;color:var(--on-bg-muted);max-width:50%;margin-bottom:32px;\">COMPACT REEL-TO-REEL RECORDER. SOLID-STATE CIRCUITRY. 3 SPEEDS. MONO PLAYBACK.</div><div style=\"display:flex;gap:16px;\"><button style=\"background:#E3000B;color:#FFFFFF;border:none;padding:8px 24px;font-family:var(--font-display);font-size:12px;font-weight:300;letter-spacing:0.1em;text-transform:uppercase;cursor:pointer;transition:opacity 150ms ease-out;\">SPECIFICATION SHEET</button><button style=\"background:transparent;color:#000000;border:1px solid #000000;padding:8px 24px;font-family:var(--font-display);font-size:12px;font-weight:300;letter-spacing:0.1em;text-transform:uppercase;cursor:pointer;transition:opacity 150ms ease-out;\">DIMENSIONS DRAWING</button></div>'; }",
    "showcaseRender": "function(el) { el.style.cssText = 'padding:64px 48px;background:#FFFFFF;display:grid;grid-template-columns:repeat(4,1fr);gap:24px;'; el.innerHTML = '<div style=\"padding:24px;border:1px solid var(--border);background:var(--surface);display:flex;flex-direction:column;gap:16px;\"><div style=\"width:48px;height:12px;background:var(--primary);\"></div><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--on-bg);\">SOLID STATE</div><div style=\"font-family:var(--font-body);font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">All-silicon transistor amplifier. No warm-up. Instant on.</div></div><div style=\"padding:24px;border:1px solid var(--border);background:var(--surface);display:flex;flex-direction:column;gap:16px;\"><div style=\"width:48px;height:12px;background:var(--primary);\"></div><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--on-bg);\">3 SPEEDS</div><div style=\"font-family:var(--font-body);font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">4.75 / 9.5 / 19 cm/s. Frequency response 40–20 000 Hz at 19 cm/s.</div></div><div style=\"padding:24px;border:1px solid var(--border);background:var(--surface);display:flex;flex-direction:column;gap:16px;\"><div style=\"width:48px;height:12px;background:var(--primary);\"></div><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--on-bg);\">MONO TRACK</div><div style=\"font-family:var(--font-body);font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Full-track recording. High output level. Low distortion.</div></div><div style=\"padding:24px;border:1px solid var(--border);background:var(--surface);display:flex;flex-direction:column;gap:16px;\"><div style=\"width:48px;height:12px;background:var(--primary);\"></div><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--on-bg);\">COMPACT</div><div style=\"font-family:var(--font-body);font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Width 260 mm. Height 120 mm. Depth 180 mm. Weight 2.8 kg.</div></div>'; }",
    "panelCRender": "function(el) { el.style.cssText = 'padding:24px;background:#FFFFFF;border:1px solid var(--border);'; el.innerHTML = '<div style=\"width:48px;height:12px;background:var(--primary);margin-bottom:16px;\"></div><div style=\"font-family:var(--font-display);font-size:18px;font-weight:500;letter-spacing:0.05em;margin-bottom:16px;\">MECHANICAL SPECIFICATIONS</div><div style=\"display:flex;flex-direction:column;gap:0;\"><div style=\"display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border);\"><span style=\"font-family:var(--font-body);font-size:12px;font-weight:300;letter-spacing:0.05em;color:var(--on-bg-muted);\">REEL SIZE</span><span style=\"font-family:var(--font-body);font-size:12px;font-weight:300;letter-spacing:0.05em;color:var(--on-bg);\">MAX 18 cm</span></div><div style=\"display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border);\"><span style=\"font-family:var(--font-body);font-size:12px;font-weight:300;letter-spacing:0.05em;color:var(--on-bg-muted);\">TAPE SPEEDS</span><span style=\"font-family:var(--font-body);font-size:12px;font-weight:300;letter-spacing:0.05em;color:var(--on-bg);\">4.75/9.5/19 cm/s</span></div><div style=\"display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border);\"><span style=\"font-family:var(--font-body);font-size:12px;font-weight:300;letter-spacing:0.05em;color:var(--on-bg-muted);\">WEIGHT</span><span style=\"font-family:var(--font-body);font-size:12px;font-weight:300;letter-spacing:0.05em;color:var(--on-bg);\">2.8 kg</span></div><div style=\"display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border);\"><span style=\"font-family:var(--font-body);font-size:12px;font-weight:300;letter-spacing:0.05em;color:var(--on-bg-muted);\">DIMENSIONS</span><span style=\"font-family:var(--font-body);font-size:12px;font-weight:300;letter-spacing:0.05em;color:var(--on-bg);\">260 x 120 x 180 mm</span></div><div style=\"display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border);\"><span style=\"font-family:var(--font-body);font-size:12px;font-weight:300;letter-spacing:0.05em;color:var(--on-bg-muted);\">POWER CONSUMPTION</span><span style=\"font-family:var(--font-body);font-size:12px;font-weight:300;letter-spacing:0.05em;color:var(--on-bg);\">30 W</span></div><div style=\"display:flex;justify-content:space-between;padding:8px 0;border-bottom:none;\"><span style=\"font-family:var(--font-body);font-size:12px;font-weight:300;letter-spacing:0.05em;color:var(--on-bg-muted);\">CASE MATERIAL</span><span style=\"font-family:var(--font-body);font-size:12px;font-weight:300;letter-spacing:0.05em;color:var(--on-bg);\">SHEET STEEL / ABS</span></div></div>'; }",
    "heroBackground": "function(el) { el.style.background = '#FFFFFF'; }",
    "ctaBackground": "function(el) { el.style.background = '#F5F0E8'; }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'border:none;border-top:1px solid var(--border);margin:48px 0;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = '#F5F0E8'; }",
    "surfaceOverlay": "function(el) { var ov = document.createElement('div'); ov.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;background-image:url(\"data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'g\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.7\\' numOctaves=\\'2\\' /%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23g)\\' opacity=\\'0.04\\' mix-blend-mode=\\'overlay\\' /%3E%3C/svg%3E\");background-repeat:repeat;mix-blend-mode:overlay;opacity:0.04;'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(tick) { var d = document.createElement('div'); d.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:hidden;'; var line = document.createElement('div'); line.style.cssText = 'position:absolute;top:' + (20 + 10 * Math.sin(tick * 0.005)) + '%;left:0;width:100%;height:1px;background:#E3000B;opacity:' + (0.05 + 0.03 * Math.sin(tick * 0.01)) + ';'; d.appendChild(line); return d; }",
  "shadcnTokens": {
    "--color-background": "#FFFFFF",
    "--color-popover": "#FFFFFF",
    "--color-foreground": "#000000",
    "--color-card-foreground": "#000000",
    "--color-popover-foreground": "#000000",
    "--color-card": "#F5F0E8",
    "--color-muted": "#F5F0E8",
    "--color-muted-foreground": "#5A5A5A",
    "--color-primary": "#E3000B",
    "--color-ring": "#E3000B",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#A0A0A0",
    "--color-accent": "#A0A0A0",
    "--color-secondary-foreground": "#000000",
    "--color-accent-foreground": "#000000",
    "--color-border": "#B0B0B0",
    "--color-input": "#B0B0B0",
    "--color-destructive": "#CC0000"
  },
  "shadcnTokensClassic": {
    "--background": "#FFFFFF",
    "--popover": "#FFFFFF",
    "--foreground": "#000000",
    "--card-foreground": "#000000",
    "--popover-foreground": "#000000",
    "--card": "#F5F0E8",
    "--muted": "#F5F0E8",
    "--muted-foreground": "#5A5A5A",
    "--primary": "#E3000B",
    "--ring": "#E3000B",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#A0A0A0",
    "--accent": "#A0A0A0",
    "--secondary-foreground": "#000000",
    "--accent-foreground": "#000000",
    "--border": "#B0B0B0",
    "--input": "#B0B0B0",
    "--destructive": "#CC0000"
  }
});
