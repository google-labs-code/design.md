registerSystem({
  "meta": {
    "name": "De Stijl",
    "tagline": "A radical reduction of interface form to orthogonal lines, primary colour planes, and black‑and‑white fields.",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&display=swap"
  },
  "yamlTokens": {
    "name": "De Stijl",
    "colors": {
      "primary": "#FF0000",
      "secondary": "#0000FF",
      "tertiary": "#FFFF00",
      "surface": "#FFFFFF",
      "outline": "#000000",
      "neutral": "#888888"
    },
    "typography": {
      "display": {
        "fontFamily": "Jost",
        "fontSize": "48px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.05em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Jost",
        "fontSize": "36px",
        "fontWeight": 700,
        "lineHeight": 1.375,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Jost",
        "fontSize": "24px",
        "fontWeight": 600,
        "lineHeight": 1.5,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Jost",
        "fontSize": "16px",
        "fontWeight": 400,
        "lineHeight": 1.625,
        "letterSpacing": "0em",
        "textTransform": "lowercase"
      },
      "label": {
        "fontFamily": "Jost",
        "fontSize": "14px",
        "fontWeight": 500,
        "lineHeight": 1.25,
        "letterSpacing": "0.025em",
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
      "section-internal": "16px",
      "page-edge": "32px",
      "gap-component": "16px",
      "gap-section": "32px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "{colors.primary}",
        "textColor": "#FFFFFF",
        "rounded": "{rounded.button}",
        "padding": "8px"
      },
      "button-primary-hover": {
        "backgroundColor": "{colors.primary}",
        "textColor": "#FFFFFF",
        "rounded": "{rounded.button}",
        "padding": "8px"
      },
      "button-secondary": {
        "backgroundColor": "{colors.surface}",
        "textColor": "{colors.outline}",
        "rounded": "{rounded.button}",
        "padding": "8px"
      },
      "button-secondary-hover": {
        "backgroundColor": "{colors.outline}",
        "textColor": "{colors.surface}",
        "rounded": "{rounded.button}",
        "padding": "8px"
      },
      "card": {
        "backgroundColor": "{colors.surface}",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "input": {
        "backgroundColor": "{colors.surface}",
        "textColor": "{colors.outline}",
        "rounded": "{rounded.input}",
        "padding": "8px"
      },
      "input-focus": {
        "backgroundColor": "{colors.surface}",
        "textColor": "{colors.outline}",
        "rounded": "{rounded.input}",
        "padding": "8px"
      },
      "colour-plane": {
        "backgroundColor": "{colors.primary}"
      },
      "grid-divider": {
        "backgroundColor": "{colors.outline}"
      },
      "square-accent": {
        "backgroundColor": "{colors.outline}",
        "size": "24px"
      }
    },
    "version": "alpha",
    "description": "A radical reduction of interface form to orthogonal lines, primary colour planes, and black-and-white fields, rooted in the early 20th-century Dutch modernist movement. The system enforces absolute abstraction with only horizontal and vertical lines, pure primary colour rectangles at 100% opacity, and asymmetrically balanced compositions on a modular grid.",
    "provenance": {
      "coverage_status": "sparse",
      "identity_description": "This slug refers to De Stijl (Dutch for \\\"The Style\\\"), an art and design movement founded in the Netherlands in 1917 and active through the early 1930s. The movement’s visual identity—manifested in paintings, architecture, furniture, typography, and graphic design—is defined by a strict geometry of orthogonal lines, primary colours (red, blue, yellow) plus black, white, and grey, and a rejectio",
      "manual_enrichment_required": false,
      "imagery_count": 4,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "www.rietveldschroderhuis.nl",
          "count": 1
        },
        {
          "host": "www.moma.org",
          "count": 1
        },
        {
          "host": "en.wikipedia.org",
          "count": 1
        },
        {
          "host": "colourlex.com",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://www.rietveldschroderhuis.nl/en",
          "host": "www.rietveldschroderhuis.nl",
          "institution": "Rietveld Schröder House, Utrecht (Centraal Museum)",
          "confidence_original": "medium"
        },
        {
          "url": "https://www.moma.org/collection/works/82249",
          "host": "www.moma.org",
          "institution": "Museum of Modern Art, New York",
          "confidence_original": "low"
        },
        {
          "url": "https://en.wikipedia.org/wiki/De_Stijl",
          "host": "en.wikipedia.org",
          "institution": null,
          "confidence_original": "high"
        },
        {
          "url": "https://colourlex.com/",
          "host": "colourlex.com",
          "institution": "ColourLex (independent research database)",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Futura",
          "foundry": null,
          "year": 1927,
          "google_fonts": "Jost",
          "attestation": "attested"
        },
        {
          "name": "Akzidenz-Grotesk",
          "foundry": "Berthold",
          "year": 1896,
          "google_fonts": "Archivo",
          "attestation": "attested"
        },
        {
          "name": "custom De Stijl masthead lettering",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "attested"
        },
        {
          "name": "Dadaistische handlettering",
          "foundry": null,
          "year": 1923,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "unknown"
        }
      ],
      "flags": [
        "sparse_imagery",
        "1_robots_disallowed_urls"
      ],
      "honest_gaps": [
        "1. **Colour hex values** – all are `[inferred]` from reproductions; no published colorimetric measurements are cited."
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#FFFFFF",
    "--on-bg": "#000000",
    "--primary": "#FF0000",
    "--on-primary": "#151515",
    "--secondary-col": "#0000FF",
    "--on-secondary": "#FFFFFF",
    "--surface": "#FFFFFF",
    "--on-bg-muted": "#888888",
    "--border": "#000000",
    "--error": "#FF0000",
    "--font-display": "Jost",
    "--font-body": "Jost",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "info": "#0000FF",
    "success": "#0000FF",
    "warning": "#FFFF00",
    "danger": "#FF0000",
    "err": "#FF0000",
    "ok": "#0000FF",
    "warn": "#FFFF00",
    "deltaUp": "#0000FF",
    "deltaDown": "#FF0000",
    "deltaFlat": "#888888",
    "live": "#FF0000",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#888888",
    "chartFont": "Jost"
  },
  "chartStyle": {
    "type": "line and bar",
    "lineColor": "#0000FF",
    "lineWidth": 1.5,
    "fillOpacity": 1,
    "axisColor": "#000000",
    "axisWidth": 2,
    "labelStyle": "uppercase, text-xs, geometric sans",
    "gridColor": "#000000",
    "gridWidth": 1,
    "barFill": "solid primary colors (red, blue, yellow)",
    "dataPointShape": "none (rectangular markers only)",
    "background": "transparent (white canvas)",
    "labelColor": "#888888",
    "fontFamily": "Jost"
  },
  "surfaceModel": "flat",
  "materialSimulation": {
    "model": "none"
  },
  "interactionModel": {
    "hover": {
      "delta": "color-shift",
      "borderWidth": "2px to 4px",
      "borderColor": "#000000",
      "transitionDuration": "300ms",
      "transitionEasing": "linear",
      "fillShift": "optional"
    },
    "focus": {
      "style": "color-border",
      "borderWidth": "4px",
      "borderColor": "#000000",
      "noGlow": true,
      "noOffset": true
    },
    "active": {
      "delta": "color-shift",
      "fillColor": "#000000",
      "transitionDuration": "300ms",
      "transitionEasing": "linear"
    },
    "disabled": {
      "style": "gray fill (#888888) with white/gray text",
      "borderColor": "#888888"
    },
    "transitionDefault": {
      "duration": "300ms",
      "easing": "linear",
      "properties": [
        "border-width",
        "background-color",
        "color"
      ]
    }
  },
  "interactionStyles": ".ds-layout-frame button, .ds-layout-frame input, .ds-layout-frame a { transition: border-width 300ms linear, background-color 300ms linear, color 300ms linear; } .ds-layout-frame button:focus, .ds-layout-frame input:focus { outline: none; border-width: 4px; border-color: var(--border); } .ds-layout-frame button:hover { border-width: 4px; } .ds-layout-frame button:active { background-color: var(--border); color: var(--surface); } .ds-layout-frame button:disabled { background-color: var(--on-bg-muted); color: var(--surface); border-color: var(--on-bg-muted); }",
  "globalFilter": null,
  "globalBodyCss": "font-family: 'Jost', sans-serif; background-color: #FFFFFF; color: #000000; margin: 0; padding: 0; line-height: 1.625;",
  "globalCss": ".ds-layout-frame ::selection { background: rgba(255,0,0,0.3); } .ds-layout-frame a { color: var(--secondary-col); text-decoration: underline; }",
  "spacing": {
    "component-internal": "8px",
    "section-internal": "16px",
    "page-edge": "32px",
    "gap-component": "16px",
    "gap-section": "32px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "0px"
  },
  "elevation": {
    "none": {
      "shadow": "none",
      "elevation": 0,
      "blur": 0,
      "spread": 0
    },
    "sm": {
      "shadow": "none",
      "elevation": 0,
      "blur": 0,
      "spread": 0
    },
    "md": {
      "shadow": "none",
      "elevation": 0,
      "blur": 0,
      "spread": 0
    },
    "lg": {
      "shadow": "none",
      "elevation": 0,
      "blur": 0,
      "spread": 0
    }
  },
  "dashboardStyle": {
    "layout": "modular grid with 4 to 8 columns, asymmetric, flush left alignment",
    "density": "sparse; deliberate white space between rectangular fields",
    "panelTreatment": "white fill with thick black border, no shadow, zero radius",
    "dataVizStyle": "flat bar charts using solid primary colours (red, blue, yellow); line charts with pure blue lines on white background; axis lines are black and extend edge-to-edge",
    "signatureElement": "a square accent (24px black square) used as either a data point marker or a status indicator"
  },
  "landingStyle": {
    "heroApproach": "white canvas with 6–8 asymmetrically composed rectangular zones; a large red primary colour plane (~20% area) in the lower right, a vertical blue strip on the left, a yellow square near the upper right",
    "scrollBehavior": "elements slide in linearly from the edges (left, right, top) at 300ms, stopping abruptly with no easing",
    "ctaStyle": "solid red button with thick black border, all-caps text, flush left placement within a white rectangular zone",
    "signatureMoment": "a slow linear reveal of black orthogonal lines that divide the canvas into coloured planes, with a yellow square accent sliding in from the top right corner"
  },
  "buttons": [
    {
      "name": "button-primary",
      "desc": "Primary action button with solid red fill and thick black border. All-caps label, zero curvature.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--primary); color: var(--on-primary); border: 4px solid var(--border); border-radius: var(--radius-btn); padding: 8px; font-family: var(--font-display); font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.025em; cursor: pointer; transition: border-width 300ms linear, background-color 300ms linear;\">submit</button>",
      "label": "button-primary",
      "note": "Primary action button with solid red fill and thick black border. All-caps label, zero curvature."
    },
    {
      "name": "button-secondary",
      "desc": "Secondary action button with white fill and black text. Thick black border for equal visual weight.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--surface); color: var(--border); border: 4px solid var(--border); border-radius: var(--radius-btn); padding: 8px; font-family: var(--font-display); font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.025em; cursor: pointer; transition: border-width 300ms linear, background-color 300ms linear, color 300ms linear;\">cancel</button>",
      "label": "button-secondary",
      "note": "Secondary action button with white fill and black text. Thick black border for equal visual weight."
    },
    {
      "name": "button-tertiary",
      "desc": "Accent button using pure blue (secondary) to indicate an alternative action. Consistent flat treatment.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--secondary-col); color: var(--on-secondary); border: 4px solid var(--border); border-radius: var(--radius-btn); padding: 8px; font-family: var(--font-display); font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.025em; cursor: pointer; transition: border-width 300ms linear;\">learn more</button>",
      "label": "button-tertiary",
      "note": "Accent button using pure blue (secondary) to indicate an alternative action. Consistent flat treatment."
    }
  ],
  "cards": [
    {
      "name": "card-default",
      "desc": "Standard rectangular card with white surface and a sharp black outline. Contains a heading and body text flush left.",
      "html": "<div style=\"background-color: var(--surface); border: 4px solid var(--border); border-radius: var(--radius-card); padding: 16px; width: 280px; display: flex; flex-direction: column; gap: 8px;\"><span style=\"font-family: var(--font-display); font-weight: 700; font-size: 24px; text-transform: uppercase; line-height: 1.5; color: var(--on-bg);\">card title</span><span style=\"font-family: var(--font-body); font-weight: 400; font-size: 16px; text-transform: lowercase; line-height: 1.625; color: var(--on-bg);\">this is a sample card for the de stijl system. all lines are orthogonal.</span></div>",
      "label": "card-default",
      "note": "Standard rectangular card with white surface and a sharp black outline. Contains a heading and body text flush left."
    },
    {
      "name": "card-accent",
      "desc": "Card with a red primary colour plane occupying a vertical strip on the left, separated by a black line. Asymmetric composition.",
      "html": "<div style=\"display: flex; width: 320px; border: 4px solid var(--border); border-radius: var(--radius-card);\"><div style=\"background-color: var(--primary); width: 48px; min-height: 120px; border-right: 4px solid var(--border);\"></div><div style=\"background-color: var(--surface); padding: 16px; flex: 1; display: flex; flex-direction: column; gap: 8px;\"><span style=\"font-family: var(--font-display); font-weight: 700; font-size: 24px; text-transform: uppercase; color: var(--on-bg);\">accent card</span><span style=\"font-family: var(--font-body); font-weight: 400; font-size: 16px; text-transform: lowercase; color: var(--on-bg);\">a colour plane anchors this card asymmetrically.</span></div></div>",
      "label": "card-accent",
      "note": "Card with a red primary colour plane occupying a vertical strip on the left, separated by a black line. Asymmetric composition."
    }
  ],
  "forms": [
    {
      "name": "text-input",
      "desc": "Single-line text input with white background, black border, and placeholder text in uppercase label style.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 8px; width: 240px;\"><label style=\"font-family: var(--font-display); font-weight: 500; font-size: 14px; text-transform: uppercase; letter-spacing: 0.025em; color: var(--on-bg);\">name</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" placeholder=\"your name\" style=\"background-color: var(--surface); color: var(--border); border: 4px solid var(--border); border-radius: var(--radius-input); padding: 8px; font-family: var(--font-body); font-weight: 400; font-size: 16px; text-transform: lowercase; outline: none; transition: border-width 300ms linear;\" /></div>",
      "label": "text-input",
      "stateLabel": "Single-line text input with white background, black border, and placeholder text in uppercase label style."
    },
    {
      "name": "select",
      "desc": "Custom select built with a button and a square accent as dropdown indicator. Entirely orthogonal.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 8px; width: 240px;\"><label style=\"font-family: var(--font-display); font-weight: 500; font-size: 14px; text-transform: uppercase; letter-spacing: 0.025em; color: var(--on-bg);\">option</label><div style=\"display: flex; align-items: center; background-color: var(--surface); border: 4px solid var(--border); border-radius: var(--radius-input); padding: 8px; cursor: pointer;\"><span style=\"flex: 1; font-family: var(--font-body); font-weight: 400; font-size: 16px; text-transform: lowercase; color: var(--on-bg);\">select an item</span><div style=\"background-color: var(--border); width: 12px; height: 12px;\"></div></div></div>",
      "label": "select",
      "stateLabel": "Custom select built with a button and a square accent as dropdown indicator. Entirely orthogonal."
    },
    {
      "name": "checkbox",
      "desc": "Binary checkbox represented by a black square. When checked, the interior fills with solid red. Label is uppercase.",
      "html": "<div style=\"display: flex; align-items: center; gap: 12px;\"><div style=\"width: 20px; height: 20px; border: 4px solid var(--border); background-color: var(--surface); display: flex; align-items: center; justify-content: center;\"><div style=\"width: 8px; height: 8px; background-color: var(--primary);\"></div></div><span style=\"font-family: var(--font-display); font-weight: 500; font-size: 14px; text-transform: uppercase; letter-spacing: 0.025em; color: var(--on-bg);\">agree to terms</span></div>",
      "label": "checkbox",
      "stateLabel": "Binary checkbox represented by a black square. When checked, the interior fills with solid red. Label is uppercase."
    }
  ],
  "extraComponents": [
    {
      "name": "badge",
      "desc": "Small solid colour plane used as a badge or status indicator. Pure primary fill with white uppercase text.",
      "html": "<span style=\"display: inline-block; background-color: var(--primary); color: var(--on-primary); border: 4px solid var(--border); border-radius: var(--radius-chip); padding: 4px 8px; font-family: var(--font-display); font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;\">new</span>"
    },
    {
      "name": "tooltip",
      "desc": "Black rectangular tooltip with white text. No arrow, no shadow. Appears on hover via linear motion.",
      "html": "<div style=\"position: relative; display: inline-block;\"><span style=\"font-family: var(--font-body); font-weight: 400; font-size: 16px; text-transform: lowercase; color: var(--on-bg); cursor: pointer;\">hover me</span><div style=\"position: absolute; bottom: 100%; left: 0; background-color: var(--border); color: var(--surface); padding: 8px; font-family: var(--font-display); font-weight: 500; font-size: 14px; text-transform: uppercase; letter-spacing: 0.025em; white-space: nowrap; pointer-events: none;\">info text</div></div>"
    },
    {
      "name": "toast",
      "desc": "Notification toast using a blue primary colour plane with a black border. Dismissal triggers a slide-out animation.",
      "html": "<div style=\"display: flex; align-items: center; gap: 16px; background-color: var(--secondary-col); color: var(--on-secondary); border: 4px solid var(--border); border-radius: var(--radius-default); padding: 12px; width: 320px; font-family: var(--font-body); font-weight: 400; font-size: 16px; text-transform: lowercase;\"><span>action completed</span><div style=\"background-color: var(--border); width: 16px; height: 16px; cursor: pointer;\"></div></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — de stijl</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — interface system</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — section heading</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — this is the body text style, set in geometric sans-serif with strict lowercase for readability within the orthogonal grid.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — menu item</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Never use rounded corners or curves; every element must have a border-radius of 0px.",
      "avoid": {
        "html": "<div style=\"background-color: var(--surface); border: 4px solid var(--border); border-radius: 8px; padding: 16px;\">rounded corner card</div>",
        "label": "Avoid"
      },
      "rule": "Never use rounded corners or curves; every element must have a border-radius of 0px.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:120px;height:120px;background:var(--surface);border:4px solid var(--border);display:flex;align-items:center;justify-content:center;\"><div style=\"width:50px;height:50px;background:var(--primary);\"></div></div>"
      }
    },
    {
      "desc": "Never apply gradients, shadows, or transparency. All fills must be 100% opaque and flat.",
      "avoid": {
        "html": "<div style=\"background: linear-gradient(45deg, var(--primary), var(--secondary-col)); box-shadow: 2px 2px 4px rgba(0,0,0,0.5); padding: 16px; color: white;\">gradient card</div>",
        "label": "Avoid"
      },
      "rule": "Never apply gradients, shadows, or transparency. All fills must be 100% opaque and flat.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:80px;height:80px;background:var(--primary);border:2px solid var(--border);\"></div>"
      }
    },
    {
      "desc": "Never centre-align content. All text and blocks must be flush left or flush right, never centred.",
      "avoid": {
        "html": "<div style=\"text-align: center; width: 100%; padding: 16px; border: 4px solid var(--border);\"><span style=\"font-family: var(--font-display); font-weight: 700; text-transform: uppercase;\">centred text</span></div>",
        "label": "Avoid"
      },
      "rule": "Never centre-align content. All text and blocks must be flush left or flush right, never centred.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Never use representational icons, curves, or diagonals. Only rectangles, squares, and orthogonal lines.",
      "avoid": {
        "html": "<div style=\"border: 4px solid var(--border); padding: 8px; display: flex; align-items: center; gap: 8px;\"><span style=\"font-size: 24px;\">◀</span><span style=\"font-family: var(--font-body);\">circular arrow icon</span></div>",
        "label": "Avoid"
      },
      "rule": "Never use representational icons, curves, or diagonals. Only rectangles, squares, and orthogonal lines.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "doAvoidStyle": "no style guidelines to avoid; the system itself forbids curves, gradients, symmetry, and non-primary colours.",
  "effects": [],
  "motion": [],
  "colors": {
    "primary": "#FF0000",
    "secondary": "#0000FF",
    "tertiary": "#FFFF00",
    "surface": "#FFFFFF",
    "outline": "#000000",
    "neutral": "#888888"
  },
  "typography": {
    "display": {
      "fontFamily": "Jost",
      "fontSize": "48px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "0.05em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "Jost",
      "fontSize": "36px",
      "fontWeight": 700,
      "lineHeight": 1.375,
      "letterSpacing": "0.025em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "Jost",
      "fontSize": "24px",
      "fontWeight": 600,
      "lineHeight": 1.5,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "Jost",
      "fontSize": "16px",
      "fontWeight": 400,
      "lineHeight": 1.625,
      "letterSpacing": "0em",
      "textTransform": "lowercase"
    },
    "label": {
      "fontFamily": "Jost",
      "fontSize": "14px",
      "fontWeight": 500,
      "lineHeight": 1.25,
      "letterSpacing": "0.025em",
      "textTransform": "uppercase"
    }
  },
  "layouts": {
    "copy": {
      "heroKicker": "RED · BLUE · YELLOW · BLACK",
      "heroHeadline": "COMPOSE WITH PRIMARY FORCE",
      "heroSub": "place colour planes on a modular grid. no curves. no diagonals. only right angles.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">NEW COMPOSITION</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">LOAD GRID</button>",
      "navLinks": [
        "COMPOSITION",
        "PALETTE",
        "GRID",
        "EXPORT"
      ],
      "features": [
        {
          "title": "COLOUR PLANE",
          "desc": "solid red, blue, or yellow field at full opacity. edges touch only black lines or white gaps.",
          "icon": "▐",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">▐ COLOUR PLANE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">solid red, blue, or yellow field at full opacity. edges touch only black lines or white gaps.</div></div>"
        },
        {
          "title": "GRID DIVIDER",
          "desc": "edge-to-edge black horizontal or vertical line. no diagonals, no curves.",
          "icon": "▬",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">▬ GRID DIVIDER</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">edge-to-edge black horizontal or vertical line. no diagonals, no curves.</div></div>"
        },
        {
          "title": "SQUARE ACCENT",
          "desc": "small black square placed asymmetrically as a visual anchor.",
          "icon": "■",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">■ SQUARE ACCENT</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">small black square placed asymmetrically as a visual anchor.</div></div>"
        },
        {
          "title": "MODULAR GRID",
          "desc": "asymmetric column system with 2 to 8 fields. flush left alignment.",
          "icon": "▔",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">▔ MODULAR GRID</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">asymmetric column system with 2 to 8 fields. flush left alignment.</div></div>"
        }
      ],
      "ctaStripHeadline": "START YOUR COMPOSITION NOW",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">OPEN STUDIO</button>",
      "sidebarBrand": "DE STIJL",
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
      "dashboardTitle": "COMPOSITION STUDIO",
      "metrics": [
        {
          "label": "COMPOSITIONS",
          "value": "47",
          "delta": "+5",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "PLANES",
          "value": "128",
          "delta": "+12",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "DIVIDERS",
          "value": "96",
          "delta": "+3",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "ACCENTS",
          "value": "23",
          "delta": "+8",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "PLANE AREA DISTRIBUTION",
      "panelATitle": "RECENT COMPOSITIONS",
      "panelARows": [
        {
          "label": "CANVAS 4 — RED FIELD",
          "value": "32 UNITS",
          "pct": 32
        },
        {
          "label": "CANVAS 2 — YELLOW ACCENT",
          "value": "18 UNITS",
          "pct": 18
        },
        {
          "label": "CANVAS 7 — BLUE STRIP",
          "value": "24 UNITS",
          "pct": 24
        },
        {
          "label": "CANVAS 1 — PLUS LINE",
          "value": "45 UNITS",
          "pct": 45
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "GRID SECTIONS",
      "panelBCells": [
        {
          "label": "SECTION A1",
          "value": "RED",
          "state": "ok"
        },
        {
          "label": "SECTION A2",
          "value": "WHITE",
          "state": "warn"
        },
        {
          "label": "SECTION B1",
          "value": "BLUE",
          "state": "err"
        },
        {
          "label": "SECTION B2",
          "value": "WHITE",
          "state": "ok"
        },
        {
          "label": "SECTION C1",
          "value": "YELLOW",
          "state": "warn"
        },
        {
          "label": "SECTION C2",
          "value": "BLACK LINE",
          "state": "err"
        },
        {
          "label": "SECTION D1",
          "value": "WHITE",
          "state": "ok"
        },
        {
          "label": "SECTION D2",
          "value": "RED",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "CANVAS 1",
        "CANVAS 2",
        "CANVAS 3",
        "CANVAS 4",
        "CANVAS 5",
        "CANVAS 6"
      ],
      "series": [
        {
          "data": [
            32,
            28,
            40,
            35,
            38,
            30,
            30,
            30,
            30,
            30,
            30,
            30
          ],
          "label": "RED",
          "axis": "left",
          "color": "#FF0000"
        },
        {
          "data": [
            20,
            18,
            25,
            22,
            24,
            19,
            19,
            19,
            19,
            19,
            19,
            19
          ],
          "label": "BLUE",
          "axis": "right-1",
          "color": "#0000FF"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'position:relative;width:100%;min-height:420px;background:#FFFFFF;overflow:hidden;'; var red = document.createElement('div'); red.style.cssText = 'position:absolute;bottom:0;right:0;width:200px;height:160px;background:var(--primary);'; var blue = document.createElement('div'); blue.style.cssText = 'position:absolute;top:0;left:0;width:60px;height:100%;background:var(--secondary-col);'; var yellow = document.createElement('div'); yellow.style.cssText = 'position:absolute;top:20px;right:60px;width:80px;height:80px;background:var(--tertiary);'; var lineH = document.createElement('div'); lineH.style.cssText = 'position:absolute;top:200px;left:0;width:100%;height:4px;background:var(--border);'; var lineV = document.createElement('div'); lineV.style.cssText = 'position:absolute;left:180px;top:0;width:4px;height:100%;background:var(--border);'; el.appendChild(red); el.appendChild(blue); el.appendChild(yellow); el.appendChild(lineH); el.appendChild(lineV); }",
    "showcaseRender": "function(el) { el.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:16px;padding:16px;'; el.innerHTML = '<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">▐ COLOUR PLANE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">solid red, blue, or yellow field at full opacity. edges touch only black lines or white gaps.</div></div><div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">▬ GRID DIVIDER</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">edge-to-edge black horizontal or vertical line. no diagonals, no curves.</div></div><div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">■ SQUARE ACCENT</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">small black square placed asymmetrically as a visual anchor.</div></div><div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">▔ MODULAR GRID</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">asymmetric column system with 2 to 8 fields. flush left alignment.</div></div>'; }",
    "panelCRender": "function(el) { el.style.cssText = 'padding:16px;background:var(--surface);border:4px solid var(--border);'; el.innerHTML = '<div style=\"display:flex;gap:16px;flex-wrap:wrap;\"><div style=\"flex:1 1 100px;border:2px solid var(--border);padding:8px;\"><div style=\"font-family:var(--font-display);font-size:12px;font-weight:600;text-transform:uppercase;color:var(--primary);\">compositions</div><div style=\"font-family:var(--font-display);font-size:28px;font-weight:700;color:var(--on-bg);\">47</div><div style=\"font-family:var(--font-body);font-size:12px;color:var(--on-bg-muted);\">+5</div></div><div style=\"flex:1 1 100px;border:2px solid var(--border);padding:8px;\"><div style=\"font-family:var(--font-display);font-size:12px;font-weight:600;text-transform:uppercase;color:var(--secondary-col);\">planes</div><div style=\"font-family:var(--font-display);font-size:28px;font-weight:700;color:var(--on-bg);\">128</div><div style=\"font-family:var(--font-body);font-size:12px;color:var(--on-bg-muted);\">+12</div></div><div style=\"flex:1 1 100px;border:2px solid var(--border);padding:8px;\"><div style=\"font-family:var(--font-display);font-size:12px;font-weight:600;text-transform:uppercase;color:var(--tertiary);\">dividers</div><div style=\"font-family:var(--font-display);font-size:28px;font-weight:700;color:var(--on-bg);\">96</div><div style=\"font-family:var(--font-body);font-size:12px;color:var(--on-bg-muted);\">+3</div></div><div style=\"flex:1 1 100px;border:2px solid var(--border);padding:8px;\"><div style=\"font-family:var(--font-display);font-size:12px;font-weight:600;text-transform:uppercase;color:var(--border);\">accents</div><div style=\"font-family:var(--font-display);font-size:28px;font-weight:700;color:var(--on-bg);\">23</div><div style=\"font-family:var(--font-body);font-size:12px;color:var(--on-bg-muted);\">+8</div></div></div>'; }",
    "heroBackground": "function(el) { el.style.background = '#FFFFFF'; }",
    "ctaBackground": "function(el) { el.style.background = '#FFFFFF'; }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'height:8px;background:var(--primary);width:100%;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = '#FFFFFF'; }",
    "surfaceOverlay": "function(el) { var overlay = document.createElement('div'); overlay.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;border-left:4px solid var(--border);'; el.appendChild(overlay); }"
  },
  "ambientCanvas": "function(tick, ctx, width, height) { var x = (tick * 0.5) % width; ctx.fillStyle = '#FF0000'; ctx.fillRect(x, height * 0.3, 40, 40); ctx.strokeStyle = '#000000'; ctx.lineWidth = 4; ctx.strokeRect(0, 0, width, height); }",
  "shadcnTokens": {
    "--color-background": "#FFFFFF",
    "--color-popover": "#FFFFFF",
    "--color-foreground": "#000000",
    "--color-card-foreground": "#000000",
    "--color-popover-foreground": "#000000",
    "--color-card": "#FFFFFF",
    "--color-muted": "#FFFFFF",
    "--color-muted-foreground": "#888888",
    "--color-primary": "#FF0000",
    "--color-ring": "#FF0000",
    "--color-primary-foreground": "#151515",
    "--color-secondary": "#0000FF",
    "--color-accent": "#0000FF",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
    "--color-border": "#000000",
    "--color-input": "#000000",
    "--color-destructive": "#FF0000"
  },
  "shadcnTokensClassic": {
    "--background": "#FFFFFF",
    "--popover": "#FFFFFF",
    "--foreground": "#000000",
    "--card-foreground": "#000000",
    "--popover-foreground": "#000000",
    "--card": "#FFFFFF",
    "--muted": "#FFFFFF",
    "--muted-foreground": "#888888",
    "--primary": "#FF0000",
    "--ring": "#FF0000",
    "--primary-foreground": "#151515",
    "--secondary": "#0000FF",
    "--accent": "#0000FF",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#FF0000"
  }
});
