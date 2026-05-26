registerSystem({
  "meta": {
    "name": "Cereal Box",
    "tagline": "Hyper-optimistic mid-century American cereal box aesthetic translated to digital UI",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Bangers&family=Archivo+Narrow:ital,wght@0,400;0,700;1,400&display=swap"
  },
  "yamlTokens": {
    "name": "Cereal Box",
    "colors": {
      "primary": "#E31E24",
      "on-primary": "#FFFFFF",
      "secondary": "#0057B8",
      "on-secondary": "#FFFFFF",
      "tertiary": "#FFD100",
      "on-tertiary": "#000000",
      "neutral": "#FFFFFF",
      "on-surface": "#1A1A1A",
      "surface-container": "#F5F5F5",
      "outline": "#000000",
      "accent-purple": "#8E44AD",
      "accent-hotpink": "#E84393",
      "accent-lime": "#2ECC71"
    },
    "typography": {
      "display": {
        "fontFamily": "Bangers, Oswald, sans-serif",
        "fontSize": "60px",
        "fontWeight": 900,
        "lineHeight": 1,
        "letterSpacing": "-0.05em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Oswald, Bangers, sans-serif",
        "fontSize": "36px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Oswald, Bangers, Archivo Narrow, sans-serif",
        "fontSize": "24px",
        "fontWeight": 600,
        "lineHeight": 1.375,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Archivo Narrow, Inter, sans-serif",
        "fontSize": "14px",
        "fontWeight": 400,
        "lineHeight": 1.25,
        "letterSpacing": "0em",
        "textTransform": "none"
      },
      "label": {
        "fontFamily": "Archivo Narrow, Inter, sans-serif",
        "fontSize": "12px",
        "fontWeight": 700,
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
      "component-internal": "8px",
      "section-internal": "16px",
      "page-edge": "0px",
      "gap-component": "8px",
      "gap-section": "16px",
      "height-sm": "32px",
      "height-md": "48px",
      "height-lg": "64px",
      "icon": "24px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "{colors.primary}",
        "textColor": "{colors.on-primary}",
        "rounded": "{rounded.button}",
        "padding": "8px"
      },
      "button-secondary": {
        "backgroundColor": "{colors.neutral}",
        "textColor": "{colors.on-surface}",
        "rounded": "{rounded.button}",
        "padding": "8px"
      },
      "card": {
        "backgroundColor": "{colors.neutral}",
        "textColor": "{colors.on-surface}",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "input": {
        "backgroundColor": "{colors.neutral}",
        "textColor": "{colors.on-surface}",
        "rounded": "{rounded.input}",
        "padding": "8px"
      }
    },
    "version": "alpha",
    "description": "Hyper-optimistic mid-century American cereal box aesthetic translated to digital UI: maximal, flat, graphic, asymmetric, dense, with saturated primaries, a mascot making direct eye contact, hard offset shadows, and zero margins.",
    "provenance": {
      "coverage_status": "minimal",
      "identity_description": "The slug `cereal-box` is ambiguous and does not uniquely identify a specific designed object. Among the four successful provider outputs, only one—crof-deepseek-v4-pro-precision—anchored the record to a concrete, institutionally cited artefact: the Kellogg’s Corn Flakes box from the early 1960s, a canonical and widely reproduced example of the genre. The other three providers described a gener",
      "manual_enrichment_required": true,
      "imagery_count": 1,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "en.wikipedia.org",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://en.wikipedia.org/wiki/Kellogg%27s_Corn_Flakes",
          "host": "en.wikipedia.org",
          "institution": null,
          "confidence_original": "high"
        }
      ],
      "typefaces_attested": [
        {
          "name": "custom Kellogg's logotype script",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "attested"
        },
        {
          "name": "Clarendon Bold",
          "foundry": null,
          "year": null,
          "google_fonts": "Roboto Slab",
          "attestation": "unverified"
        },
        {
          "name": "Rockwell Bold",
          "foundry": null,
          "year": null,
          "google_fonts": "Roboto Slab",
          "attestation": "unverified"
        },
        {
          "name": "Franklin Gothic",
          "foundry": null,
          "year": null,
          "google_fonts": "Libre Franklin",
          "attestation": "unverified"
        },
        {
          "name": "Helvetica",
          "foundry": null,
          "year": null,
          "google_fonts": "Inter",
          "attestation": "inferred"
        },
        {
          "name": "Akzidenz-Grotesk",
          "foundry": null,
          "year": null,
          "google_fonts": "Archivo",
          "attestation": "inferred"
        }
      ],
      "flags": [
        "one_usable_url_only"
      ],
      "honest_gaps": {}
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#FFFFFF",
    "--on-bg": "#1A1A1A",
    "--primary": "#E31E24",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#0057B8",
    "--on-secondary": "#FFFFFF",
    "--surface": "#F5F5F5",
    "--on-bg-muted": "#4A4A4A",
    "--border": "#000000",
    "--error": "#E31E24",
    "--font-display": "Bangers",
    "--font-body": "Archivo Narrow",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "info": "#0057B8",
    "success": "#2ECC71",
    "warning": "#FFD100",
    "error": "#E31E24",
    "err": "#E31E24",
    "ok": "#2ECC71",
    "warn": "#FFD100",
    "deltaUp": "#2ECC71",
    "deltaDown": "#E31E24",
    "deltaFlat": "#4A4A4A",
    "live": "#E31E24",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#4A4A4A",
    "chartFont": "Archivo Narrow"
  },
  "chartStyle": {
    "type": "nutrition-facts-panel",
    "features": "tight multi-column table with thick black borders, uppercase label headers, alternating white/off-white rows, solid yellow bar fills with black outline, prize ribbon marker for highest value, paper grain and halftone overlay on header row, no rounded corners, no gradients",
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#4A4A4A",
    "fontFamily": "Archivo Narrow"
  },
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "coated-card",
    "params": {
      "grain": "SVG feTurbulence baseFrequency:0.65 numOctaves:3 type:fractalNoise, mix-blend-mode:overlay opacity-0.1 on full canvas via pseudo-element",
      "offset-halftone": "repeating-radial-gradient simulating CMYK rosettes, multiply opacity-0.2 applied via CSS background on selected surfaces (implementation left to component layer)",
      "misregistration": "pseudo-elements with cyan and magenta offsets at ±1px, multiply opacity-0.3 on brand name and headlines"
    }
  },
  "interactionModel": {
    "hover": {
      "scale": 1.1,
      "opacity": 0.8,
      "transition": "transform 200ms ease-out, opacity 100ms ease-out"
    },
    "focus": {
      "outline": "2px solid var(--primary)",
      "outline-offset": "0px",
      "border-radius": "0"
    },
    "active": {
      "opacity": 0.6,
      "filter": "drop-shadow(4px 4px 0px rgba(0,0,0,0.25))",
      "transition": "opacity 100ms ease-out, filter 100ms ease-out"
    }
  },
  "interactionStyles": ".ds-layout-frame button:hover,\n.ds-layout-frame .burst:hover,\n.ds-layout-frame .cta:hover {\n  transform: scale(1.1);\n  opacity: 0.8;\n  transition: transform 200ms ease-out, opacity 100ms ease-out;\n}\n.ds-layout-frame button:active,\n.ds-layout-frame .burst:active {\n  opacity: 0.6;\n  filter: drop-shadow(2px 2px 0px rgba(0,0,0,0.25));\n  transition: opacity 100ms ease-out, filter 100ms ease-out;\n}\n.ds-layout-frame a:focus-visible,\n.ds-layout-frame button:focus-visible {\n  outline: 2px solid var(--primary);\n  outline-offset: 0;\n  border-radius: 0;\n}\n.ds-layout-frame .mascot {\n  transition: transform 200ms ease-out;\n}\n.ds-layout-frame .mascot:hover {\n  transform: scale(1.05) translateY(-2px);\n}",
  "globalFilter": null,
  "globalBodyCss": "font-family: var(--font-body, Archivo); background-color: var(--bg, #FFFFFF); color: var(--on-bg, #1A1A1A); margin: 0; padding: 0;",
  "globalCss": ".ds-layout-frame { box-sizing: border-box; margin: 0; padding: 0; position: relative; overflow: hidden; } .ds-layout-frame::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; background: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.65' numOctaves='3' type='fractalNoise'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E\"); mix-blend-mode: overlay; opacity: 0.1; } .ds-layout-frame .mascot, .ds-layout-frame .brand-name, .ds-layout-frame .burst, .ds-layout-frame button { filter: drop-shadow(4px 4px 0px rgba(0,0,0,0.25)); } .ds-layout-frame .brand-name { position: relative; } .ds-layout-frame .brand-name::after { content: attr(data-text); position: absolute; top: 0; left: 0; color: #00FFFF; mix-blend-mode: multiply; opacity: 0.3; transform: translate(1px, 1px); pointer-events: none; } .ds-layout-frame .brand-name::before { content: attr(data-text); position: absolute; top: 0; left: 0; color: #FF00FF; mix-blend-mode: multiply; opacity: 0.3; transform: translate(-1px, -1px); pointer-events: none; } .ds-layout-frame * { box-sizing: border-box; } .ds-layout-frame .nutrition-panel, .ds-layout-frame .prize-badge { border: 2px solid var(--border); } .ds-layout-frame input, .ds-layout-frame textarea { border-radius: 0; border: 2px solid var(--border); background: var(--bg, #FFFFFF); } .ds-layout-frame input:focus { outline: 2px solid var(--primary); outline-offset: 0; }",
  "spacing": {
    "component-internal": "8px",
    "section-internal": "16px",
    "page-edge": "0px",
    "gap-component": "8px",
    "gap-section": "16px",
    "height-sm": "32px",
    "height-md": "48px",
    "height-lg": "64px",
    "icon": "24px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "0px"
  },
  "elevation": {
    "hard-offset-shadow": "4px 4px 0px rgba(0,0,0,0.25) on mascot, brand name, bursts, buttons, cards. No blur, no box-shadow fallback.",
    "cardboard-depth": "Simulated box thickness via 2px solid black outline + 2px inset shadow (for dieline views only).",
    "hierarchy": "Flat stacking — no z-index layers beyond chrome/nav overlays. All shadows are identical hard offset."
  },
  "dashboardStyle": {
    "layout": "Shelf display: Each panel simulates a box face (front, side, top) overlapping with zero margins. Panels are rotated slightly for a tossed-on-shelf feel.",
    "density": "Maximal — every panel is packed with product name, burst callouts, nutrition summary, mascot placeholder.",
    "panelTreatment": "Each panel uses hard offset shadow, thick black borders, paper grain overlay. No rounding.",
    "dataVizStyle": "Nutrition facts table as the primary chart — tight multi-column layout with thick borders and alternating row backgrounds.",
    "signatureElement": "Mascot character (face emoji placeholder) in one corner, making eye contact, with hard offset shadow."
  },
  "landingStyle": {
    "heroApproach": "Left‑aligned mascot (40% width) making direct eye contact; brand name curved across top in massive uppercase display with hard offset shadow; product bowl bottom right with matte-to-gloss highlight.",
    "scrollBehavior": "Sections snap with a wobble entrance animation. No smooth scroll — jerky transitions mimic flipping printed panels.",
    "ctaStyle": "Primary red button with black border and hard offset shadow, sitting inside a burst shape. Hover: scale(1.1) steps(2).",
    "signatureMoment": "On load, mascot bounces (3 frames steps(2)), brand name shimmers (horizontal misregistration shift 1px), and a burst callout pulses in from off‑screen."
  },
  "buttons": [
    {
      "name": "primary",
      "desc": "Saturated red button with hard offset shadow, uppercase display type. Hover: scale(1.1), opacity 0.8.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--primary); color: var(--on-primary); border: 2px solid var(--border); border-radius: var(--radius-btn); padding: 8px 16px; font-family: var(--font-display); font-weight: 900; text-transform: uppercase; letter-spacing: -0.05em; font-size: 18px; box-shadow: 4px 4px 0px rgba(0,0,0,0.25); cursor: pointer;\">GET YOURS!</button>",
      "label": "primary",
      "note": "Saturated red button with hard offset shadow, uppercase display type. Hover: scale(1.1), opacity 0.8."
    },
    {
      "name": "secondary",
      "desc": "White button with black border and hard offset shadow. Hover: scale(1.1), opacity 0.8.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--bg); color: var(--on-bg); border: 2px solid var(--border); border-radius: var(--radius-btn); padding: 8px 16px; font-family: var(--font-display); font-weight: 900; text-transform: uppercase; letter-spacing: -0.05em; font-size: 18px; box-shadow: 4px 4px 0px rgba(0,0,0,0.25); cursor: pointer;\">FREE TOY</button>",
      "label": "secondary",
      "note": "White button with black border and hard offset shadow. Hover: scale(1.1), opacity 0.8."
    },
    {
      "name": "blue-accent",
      "desc": "Blue button using secondary color, same treatment. Hover: scale(1.1), opacity 0.8.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--secondary-col); color: var(--on-secondary); border: 2px solid var(--border); border-radius: var(--radius-btn); padding: 8px 16px; font-family: var(--font-display); font-weight: 900; text-transform: uppercase; letter-spacing: -0.05em; font-size: 18px; box-shadow: 4px 4px 0px rgba(0,0,0,0.25); cursor: pointer;\">BUY NOW</button>",
      "label": "blue-accent",
      "note": "Blue button using secondary color, same treatment. Hover: scale(1.1), opacity 0.8."
    }
  ],
  "cards": [
    {
      "name": "product-card",
      "desc": "White card with black outline, hard offset shadow, compact layout. No rounding, maximal density.",
      "html": "<div style=\"background: var(--bg); color: var(--on-bg); border: 2px solid var(--border); border-radius: var(--radius-card); padding: 16px; box-shadow: 4px 4px 0px rgba(0,0,0,0.25); display: inline-block; max-width: 260px;\"><h3 style=\"font-family: var(--font-display); font-size: 24px; text-transform: uppercase; letter-spacing: -0.025em; margin: 0 0 8px 0;\">CRUNCH STARS</h3><p style=\"font-family: var(--font-body); font-size: 14px; line-height: 1.25; margin: 0;\">Now with extra marshmallow moons!</p><div style=\"margin-top: 12px; background: var(--primary); color: var(--on-primary); padding: 4px 8px; font-family: var(--font-display); font-size: 14px; text-transform: uppercase; display: inline-block; box-shadow: 4px 4px 0px rgba(0,0,0,0.25);\">Limited</div></div>",
      "label": "product-card",
      "note": "White card with black outline, hard offset shadow, compact layout. No rounding, maximal density."
    },
    {
      "name": "nutrition-card",
      "desc": "Tight multi‑row data card with alternating row backgrounds, thick black borders, no rounding.",
      "html": "<div style=\"background: var(--bg); color: var(--on-bg); border: 2px solid var(--border); border-radius: var(--radius-card); padding: 0; box-shadow: 4px 4px 0px rgba(0,0,0,0.25); display: inline-block; font-family: var(--font-body); font-size: 12px; text-transform: uppercase;\"><div style=\"border-bottom: 2px solid var(--border); padding: 8px; background: var(--surface); font-weight: 700; letter-spacing: 0.1em;\">NUTRITION PER SERVING</div><div style=\"display: flex; border-bottom: 1px solid var(--border); padding: 6px 8px;\"><span style=\"flex: 1;\">Calories</span><span style=\"font-weight: 700;\">120</span></div><div style=\"display: flex; border-bottom: 1px solid var(--border); padding: 6px 8px; background: var(--surface);\"><span style=\"flex: 1;\">Sugar</span><span style=\"font-weight: 700;\">18g</span></div><div style=\"display: flex; padding: 6px 8px;\"><span style=\"flex: 1;\">Vitamin C</span><span style=\"font-weight: 700;\">25%</span></div></div>",
      "label": "nutrition-card",
      "note": "Tight multi‑row data card with alternating row backgrounds, thick black borders, no rounding."
    }
  ],
  "forms": [
    {
      "name": "text-input",
      "desc": "Label above input, uppercase label typography, black border, no rounding, black placeholder text.",
      "html": "<div style=\"display: inline-block;\"><label style=\"font-family: var(--font-body); font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; font-size: 12px; display: block; margin-bottom: 4px;\">Your Name</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" placeholder=\"Enter name\" style=\"background: var(--bg); color: var(--on-bg); border: 2px solid var(--border); border-radius: var(--radius-input); padding: 8px; font-family: var(--font-body); font-size: 14px; width: 200px; box-sizing: border-box; outline: none;\" /></div>",
      "label": "text-input",
      "stateLabel": "Label above input, uppercase label typography, black border, no rounding, black placeholder text."
    },
    {
      "name": "select",
      "desc": "Custom select with black border, no rounding, uppercase label.",
      "html": "<div style=\"display: inline-block;\"><label style=\"font-family: var(--font-body); font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; font-size: 12px; display: block; margin-bottom: 4px;\">Flavor</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--bg); color: var(--on-bg); border: 2px solid var(--border); border-radius: var(--radius-input); padding: 8px; font-family: var(--font-body); font-size: 14px; width: 200px; box-sizing: border-box;\"><option>Original</option><option>Frosted</option><option>Choco</option></select></div>",
      "label": "select",
      "stateLabel": "Custom select with black border, no rounding, uppercase label."
    },
    {
      "name": "checkbox",
      "desc": "Rectangular checkbox with black border, no rounding, red fill on check (simulated with appearance).",
      "html": "<div><label style=\"font-family: var(--font-body); font-size: 14px; display: flex; align-items: center; gap: 6px;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"appearance: none; width: 20px; height: 20px; border: 2px solid var(--border); border-radius: 0; background: var(--bg); cursor: pointer;\" /> Add Prize Inside</label></div>",
      "label": "checkbox",
      "stateLabel": "Rectangular checkbox with black border, no rounding, red fill on check (simulated with appearance)."
    }
  ],
  "extraComponents": [
    {
      "name": "burst",
      "desc": "Jagged star clip‑path with red fill, white text, hard offset shadow. Used for callouts like 'NEW!' or 'FREE!'.",
      "html": "<div style=\"clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%); background: var(--primary); color: var(--on-primary); padding: 8px; font-family: var(--font-display); font-size: 14px; text-align: center; box-shadow: 4px 4px 0px rgba(0,0,0,0.25); display: inline-block; width: 80px; height: 80px; line-height: 80px; text-transform: uppercase;\">FREE</div>"
    },
    {
      "name": "prize-badge",
      "desc": "Small badge with red background, white text, and ribbon‑like feel. Used for 'Prize Inside' or 'Collect All!'.",
      "html": "<div style=\"background: var(--primary); color: var(--on-primary); border: 2px solid var(--border); padding: 4px 12px; font-family: var(--font-display); font-size: 14px; text-transform: uppercase; display: inline-block; box-shadow: 4px 4px 0px rgba(0,0,0,0.25); position: relative;\">PRIZE!</div>"
    },
    {
      "name": "serving-suggestion",
      "desc": "Inset square with black line‑art style (simulated with thin border), no shadow. Represents a product usage idea.",
      "html": "<div style=\"border: 2px solid var(--border); background: var(--bg); padding: 8px; display: inline-block; width: 60px; height: 60px; text-align: center; line-height: 60px; font-family: var(--font-body); font-size: 10px; text-transform: uppercase;\">BOWL</div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — CRUNCH TIME!</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — Marshmallow Moon</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — Now with Extra Sugar!</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — Every spoonful is loaded with vitamins and pure joy.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — USE BY: 2025</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Rounded corners on buttons or cards — destroys the sharp printed-box feel.",
      "avoid": {
        "html": "<button style=\"border-radius: 12px; background: #E31E24; color: white; border: 2px solid black; padding: 8px 16px;\">AVOID THIS</button>",
        "label": "Avoid"
      },
      "rule": "Rounded corners on buttons or cards — destroys the sharp printed-box feel.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Smooth digital shadow with blur — breaks the hard offset print illusion.",
      "avoid": {
        "html": "<div style=\"box-shadow: 0 4px 6px rgba(0,0,0,0.3); border: 2px solid black; padding: 16px;\">WRONG shadow</div>",
        "label": "Avoid"
      },
      "rule": "Smooth digital shadow with blur — breaks the hard offset print illusion.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Pastel or desaturated colors — must use saturated red, blue, yellow.",
      "avoid": {
        "html": "<div style=\"background: #FADBD8; color: #7B7D7D; border: 2px solid #ccc; padding: 16px;\">Too pale</div>",
        "label": "Avoid"
      },
      "rule": "Pastel or desaturated colors — must use saturated red, blue, yellow.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Empty margins or whitespace — every corner must be filled with graphics or text.",
      "avoid": {
        "html": "<div style=\"background: white; border: 2px solid black; padding: 40px; text-align: center;\">Empty space here</div>",
        "label": "Avoid"
      },
      "rule": "Empty margins or whitespace — every corner must be filled with graphics or text.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "effects": [],
  "motion": [],
  "colors": {
    "primary": "#E31E24",
    "on-primary": "#FFFFFF",
    "secondary": "#0057B8",
    "on-secondary": "#FFFFFF",
    "tertiary": "#FFD100",
    "on-tertiary": "#000000",
    "neutral": "#FFFFFF",
    "on-surface": "#1A1A1A",
    "surface-container": "#F5F5F5",
    "outline": "#000000",
    "accent-purple": "#8E44AD",
    "accent-hotpink": "#E84393",
    "accent-lime": "#2ECC71"
  },
  "typography": {
    "display": {
      "fontFamily": "Bangers",
      "fontSize": "60px",
      "fontWeight": 900,
      "lineHeight": 1,
      "letterSpacing": "-0.05em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "Bangers",
      "fontSize": "36px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "Bangers",
      "fontSize": "24px",
      "fontWeight": 600,
      "lineHeight": 1.375,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "Archivo Narrow",
      "fontSize": "14px",
      "fontWeight": 400,
      "lineHeight": 1.25,
      "letterSpacing": "0em",
      "textTransform": "none"
    },
    "label": {
      "fontFamily": "Archivo Narrow",
      "fontSize": "12px",
      "fontWeight": 700,
      "lineHeight": 1,
      "letterSpacing": "0.1em",
      "textTransform": "uppercase"
    }
  },
  "layouts": {
    "copy": {
      "heroKicker": "NEW! LIMITED EDITION",
      "heroHeadline": "CRUNCH-O'S BERRY BLAST",
      "heroSub": "Zero margins. Max flavor. Direct eye contact.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#E31E24;color:white;border:none;padding:8px 16px;font-family:Oswald;font-size:28px;text-transform:uppercase;cursor:pointer;\">GRAB A BOWL</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:white;color:#1A1A1A;border:2px solid black;padding:8px 16px;font-family:Oswald;font-size:20px;text-transform:uppercase;cursor:pointer;\">SEE FLAVORS</button>",
      "navLinks": [
        "BOXES",
        "MASCOTS",
        "BURSTS",
        "NUTRITION",
        "PRIZES"
      ],
      "features": [
        {
          "title": "MASCOT MAKER",
          "desc": "Customize your cereal mascot with direct eye contact, thick black outlines, and hard offset shadows.",
          "icon": "🦁",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🦁 MASCOT MAKER</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Customize your cereal mascot with direct eye contact, thick black outlines, and hard offset shadows.</div></div>"
        },
        {
          "title": "BURST ENGINE",
          "desc": "Generate jagged callout shapes with bold claims and uppercase Impact text.",
          "icon": "💥",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">💥 BURST ENGINE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Generate jagged callout shapes with bold claims and uppercase Impact text.</div></div>"
        },
        {
          "title": "NUTRITION PANEL",
          "desc": "Build FDA-compliant panels with thick borders, alternating rows, and prize ribbons.",
          "icon": "📋",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📋 NUTRITION PANEL</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Build FDA-compliant panels with thick borders, alternating rows, and prize ribbons.</div></div>"
        },
        {
          "title": "PRIZE BADGE",
          "desc": "Insert redeemable prize badges with vintage toy illustrations and scratch-off simulation.",
          "icon": "🎁",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🎁 PRIZE BADGE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Insert redeemable prize badges with vintage toy illustrations and scratch-off simulation.</div></div>"
        }
      ],
      "ctaStripHeadline": "YOUR PRIZE AWAITS! SCRATCH & WIN!",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#FFD100;color:#1A1A1A;border:2px solid black;padding:8px 24px;font-family:Oswald;font-size:24px;text-transform:uppercase;cursor:pointer;\">CLAIM NOW</button>",
      "sidebarBrand": "CRUNCH-O'S",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "BOXES",
          "active": true
        },
        {
          "icon": "◉",
          "label": "MASCOTS",
          "active": false
        },
        {
          "icon": "◉",
          "label": "CAMPAIGNS",
          "active": false
        }
      ],
      "dashboardTitle": "CRUNCH COMMAND CENTER",
      "metrics": [
        {
          "label": "BOWLS SERVED",
          "value": "2.4M",
          "delta": "+12%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "CRUNCH SCORE",
          "value": "94",
          "delta": "+3",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "MILK ABSORPTION",
          "value": "8.2s",
          "delta": "-0.3s",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "PRIZE REDEMPTIONS",
          "value": "18K",
          "delta": "+22%",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "CRUNCH HOUR SALES",
      "panelATitle": "TOP SELLING FLAVORS",
      "panelARows": [
        {
          "label": "CHOCO BLAST",
          "value": "34%",
          "pct": 34
        },
        {
          "label": "FROSTED SUGAR",
          "value": "28%",
          "pct": 28
        },
        {
          "label": "BERRY POP",
          "value": "22%",
          "pct": 22
        },
        {
          "label": "HONEY NUT",
          "value": "16%",
          "pct": 16
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "PRIZE REDEMPTION",
      "panelBCells": [
        {
          "label": "GLOW STICK",
          "value": "2,500",
          "state": "ok"
        },
        {
          "label": "TATTOO",
          "value": "1,200",
          "state": "warn"
        },
        {
          "label": "WHISTLE",
          "value": "3,000",
          "state": "err"
        },
        {
          "label": "STICKER",
          "value": "5,000",
          "state": "ok"
        },
        {
          "label": "RING",
          "value": "800",
          "state": "warn"
        },
        {
          "label": "TOY CAR",
          "value": "450",
          "state": "err"
        },
        {
          "label": "BALL",
          "value": "1,100",
          "state": "ok"
        },
        {
          "label": "COMIC",
          "value": "2,000",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "6AM",
        "8AM",
        "10AM",
        "12PM",
        "2PM",
        "4PM",
        "6PM"
      ],
      "series": [
        {
          "data": [
            50,
            120,
            200,
            180,
            140,
            160,
            220,
            220,
            220,
            220,
            220,
            220
          ],
          "label": "BOWLS",
          "axis": "left",
          "color": "#E31E24"
        },
        {
          "data": [
            30,
            80,
            150,
            140,
            110,
            130,
            180,
            180,
            180,
            180,
            180,
            180
          ],
          "label": "BOXES",
          "axis": "right-1",
          "color": "#0057B8"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'position:relative;width:100%;min-height:480px;background:var(--primary);overflow:hidden;padding:0;margin:0;box-sizing:border-box;'; el.innerHTML = '<div style=\\\"position:absolute;top:10px;left:10px;right:10px;font-family:var(--font-display);font-size:60px;font-weight:900;line-height:1;letter-spacing:-0.05em;text-transform:uppercase;color:var(--on-primary);filter:drop-shadow(4px 4px 0px rgba(0,0,0,0.25));z-index:2;\\\">CRUNCH-O\\\\'S</div><div style=\\\"position:absolute;bottom:20px;right:10px;width:120px;height:120px;clip-path:polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);background:var(--tertiary);filter:drop-shadow(4px 4px 0px rgba(0,0,0,0.25));display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-size:18px;color:var(--on-tertiary);text-transform:uppercase;font-weight:700;z-index:2;\\\">NEW!</div><div style=\\\"position:absolute;left:10px;bottom:60px;font-size:60px;filter:drop-shadow(4px 4px 0px rgba(0,0,0,0.25));z-index:2;\\\">🦁</div><div style=\\\"position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:80px;height:80px;border:2px solid var(--border);background:var(--bg);z-index:1;display:flex;align-items:center;justify-content:center;font-family:var(--font-body);font-size:10px;text-transform:uppercase;color:var(--on-bg);\\\">BOWL</div>'; }",
    "showcaseRender": "function(el) { el.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:0;padding:0;margin:0;background:var(--surface);'; el.innerHTML = '<div style=\\\"border:2px solid var(--border);background:var(--bg);padding:16px;box-shadow:4px 4px 0px rgba(0,0,0,0.25);font-family:var(--font-body);\\\"><div style=\\\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\\\">🦁 MASCOT MAKER</div><div style=\\\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);margin-top:8px;\\\">Customize your cereal mascot with direct eye contact, thick black outlines, and hard offset shadows.</div></div><div style=\\\"border:2px solid var(--border);background:var(--bg);padding:16px;box-shadow:4px 4px 0px rgba(0,0,0,0.25);font-family:var(--font-body);\\\"><div style=\\\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\\\">💥 BURST ENGINE</div><div style=\\\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);margin-top:8px;\\\">Generate jagged callout shapes with bold claims and uppercase text.</div></div><div style=\\\"border:2px solid var(--border);background:var(--bg);padding:16px;box-shadow:4px 4px 0px rgba(0,0,0,0.25);font-family:var(--font-body);\\\"><div style=\\\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\\\">📋 NUTRITION PANEL</div><div style=\\\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);margin-top:8px;\\\">Build FDA-compliant panels with thick borders, alternating rows, and prize ribbons.</div></div><div style=\\\"border:2px solid var(--border);background:var(--bg);padding:16px;box-shadow:4px 4px 0px rgba(0,0,0,0.25);font-family:var(--font-body);\\\"><div style=\\\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\\\">🎁 PRIZE BADGE</div><div style=\\\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);margin-top:8px;\\\">Insert redeemable prize badges with vintage toy illustrations and scratch-off simulation.</div></div>'; }",
    "panelCRender": "function(el) { el.style.cssText = 'border:2px solid var(--border);background:var(--bg);box-shadow:4px 4px 0px rgba(0,0,0,0.25);font-family:var(--font-body);font-size:12px;text-transform:uppercase;max-width:300px;'; el.innerHTML = '<div style=\\\"border-bottom:2px solid var(--border);padding:8px;background:var(--surface);font-weight:700;letter-spacing:0.1em;font-size:14px;font-family:var(--font-display);\\\">NUTRITION PER SERVING</div><div style=\\\"display:flex;border-bottom:1px solid var(--border);padding:6px 8px;\\\"><span style=\\\"flex:1;\\\">Calories</span><span style=\\\"font-weight:700;\\\">120</span></div><div style=\\\"display:flex;border-bottom:1px solid var(--border);padding:6px 8px;background:var(--surface);\\\"><span style=\\\"flex:1;\\\">Sugar</span><span style=\\\"font-weight:700;\\\">18g</span></div><div style=\\\"display:flex;border-bottom:1px solid var(--border);padding:6px 8px;\\\"><span style=\\\"flex:1;\\\">Vitamin C</span><span style=\\\"font-weight:700;\\\">25%</span></div><div style=\\\"display:flex;padding:6px 8px;background:var(--surface);\\\"><span style=\\\"flex:1;\\\">Prize Inside</span><span style=\\\"font-weight:700;color:var(--primary);\\\">YES</span></div>'; }",
    "heroBackground": "function(el) { el.style.background = 'var(--primary)'; }",
    "ctaBackground": "function(el) { el.style.background = 'var(--tertiary)'; }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText='height:8px;background:var(--secondary-col);border-top:2px solid var(--border);border-bottom:2px solid var(--border);'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = 'var(--surface)'; el.style.border = '2px solid var(--border)'; }",
    "surfaceOverlay": "function(el) { var ov=document.createElement('div'); ov.style.cssText='position:absolute;inset:0;pointer-events:none;z-index:2;mix-blend-mode:overlay;opacity:0.1;background:url(\\\"data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'100\\'%3E%3Cfilter id=\\'noise\\'%3E%3CfeTurbulence baseFrequency=\\'0.65\\' numOctaves=\\'3\\' type=\\'fractalNoise\\'/%3E%3C/filter%3E%3Crect width=\\'100\\' height=\\'100\\' filter=\\'url(%23noise)\\' opacity=\\'0.5\\'/%3E%3C/svg%3E\\\");'; el.appendChild(ov); var ov2=document.createElement('div'); ov2.style.cssText='position:absolute;inset:0;pointer-events:none;z-index:1;background:repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px);mix-blend-mode:multiply;opacity:0.2;'; el.appendChild(ov2); }"
  },
  "ambientCanvas": "function(t, tick) { var c = document.createElement('canvas'); c.width = 200; c.height = 200; var ctx = c.getContext('2d'); ctx.fillStyle = 'var(--primary)'; ctx.fillRect(0, 0, 200, 200); ctx.fillStyle = 'rgba(0,0,0,0.25)'; for (var i = 0; i < 5; i++) { var x = (i * 40 + tick * 2) % 200; var y = (i * 30 + tick * 3) % 200; ctx.beginPath(); ctx.arc(x, y, 8, 0, Math.PI * 2); ctx.fill(); } return c; }",
  "shadcnTokens": {
    "--color-background": "#FFFFFF",
    "--color-popover": "#FFFFFF",
    "--color-foreground": "#1A1A1A",
    "--color-card-foreground": "#1A1A1A",
    "--color-popover-foreground": "#1A1A1A",
    "--color-card": "#F5F5F5",
    "--color-muted": "#F5F5F5",
    "--color-muted-foreground": "#4A4A4A",
    "--color-primary": "#E31E24",
    "--color-ring": "#E31E24",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#0057B8",
    "--color-accent": "#0057B8",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
    "--color-border": "#000000",
    "--color-input": "#000000",
    "--color-destructive": "#E31E24"
  },
  "shadcnTokensClassic": {
    "--background": "#FFFFFF",
    "--popover": "#FFFFFF",
    "--foreground": "#1A1A1A",
    "--card-foreground": "#1A1A1A",
    "--popover-foreground": "#1A1A1A",
    "--card": "#F5F5F5",
    "--muted": "#F5F5F5",
    "--muted-foreground": "#4A4A4A",
    "--primary": "#E31E24",
    "--ring": "#E31E24",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#0057B8",
    "--accent": "#0057B8",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#E31E24"
  }
});
