registerSystem({
  "meta": {
    "name": "Art Deco",
    "tagline": "Geometric opulence and streamlined symmetry for digital interfaces",
    "mode": "dark",
    "fontImport": "https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700&family=Raleway:wght@400;600&display=swap"
  },
  "yamlTokens": {
    "name": "Art Deco",
    "colors": {
      "primary": "#D4AF37",
      "on-primary": "#0A0A0A",
      "primary-container": "#B8960C",
      "on-primary-container": "#F5F0E8",
      "secondary": "#C0C0C0",
      "on-secondary": "#0A0A0A",
      "secondary-container": "#8A8A8A",
      "on-secondary-container": "#1A1A1A",
      "neutral": "#0D0D0D",
      "on-surface": "#F5F0E8",
      "on-surface-variant": "#D4AF37",
      "error": "#9B111E",
      "on-error": "#FFFFFF",
      "error-container": "#7A0D16",
      "on-error-container": "#FFFFFF",
      "outline": "#D4AF37",
      "outline-variant": "#8A7334",
      "neutral-light": "#F5F0E8",
      "on-surface-light": "#0D0D0D",
      "on-surface-variant-light": "#8A7334",
      "outline-light": "#B8960C",
      "outline-variant-light": "#D4CAB8"
    },
    "typography": {
      "display": {
        "fontFamily": "Syne",
        "fontSize": "48px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.1em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Syne",
        "fontSize": "30px",
        "fontWeight": 700,
        "lineHeight": 1.375,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Syne",
        "fontSize": "20px",
        "fontWeight": 600,
        "lineHeight": 1.375,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Raleway",
        "fontSize": "16px",
        "fontWeight": 400,
        "lineHeight": 1.625,
        "letterSpacing": "0em"
      },
      "label": {
        "fontFamily": "Raleway",
        "fontSize": "12px",
        "fontWeight": 600,
        "lineHeight": 1,
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
      "page-edge": "32px",
      "gap-component": "16px",
      "gap-section": "32px",
      "height-sm": "32px",
      "height-md": "40px",
      "height-lg": "48px",
      "icon": "20px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "{colors.primary}",
        "textColor": "{colors.on-primary}",
        "rounded": "{rounded.button}",
        "padding": "8px"
      },
      "button-primary-hover": {
        "backgroundColor": "{colors.primary}",
        "textColor": "{colors.on-primary}",
        "rounded": "{rounded.button}",
        "padding": "8px"
      },
      "button-secondary": {
        "backgroundColor": "transparent",
        "textColor": "{colors.on-surface}",
        "rounded": "{rounded.button}",
        "padding": "8px"
      },
      "card": {
        "backgroundColor": "#2C2C2C",
        "textColor": "{colors.on-surface}",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "input": {
        "backgroundColor": "#050505",
        "textColor": "{colors.on-surface}",
        "rounded": "{rounded.input}",
        "padding": "8px"
      },
      "input-focus": {
        "backgroundColor": "#050505",
        "textColor": "{colors.on-surface}",
        "rounded": "{rounded.input}",
        "padding": "8px"
      },
      "stepped-panel": {
        "backgroundColor": "{colors.primary-container}",
        "rounded": "{rounded.default}",
        "padding": "24px"
      },
      "chevron-band": {
        "textColor": "{colors.primary}",
        "height": "16px"
      },
      "sunburst-medallion": {
        "backgroundColor": "{colors.primary}",
        "size": "120px"
      }
    },
    "version": "alpha",
    "description": "A design system channeling the geometric opulence and streamlined symmetry of the 1920s–1930s interwar period, combining hard edges, stepped silhouettes, and gilded restraint to simulate lacquered surfaces with foil-stamped metallic highlights on deep black grounds.",
    "provenance": {
      "coverage_status": "minimal",
      "identity_description": "",
      "manual_enrichment_required": true,
      "imagery_count": 1,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": null,
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
          "url": "https://en.wikipedia.org/wiki/Art_Deco",
          "host": "en.wikipedia.org",
          "institution": null,
          "confidence_original": "high"
        }
      ],
      "typefaces_attested": {},
      "flags": [
        "one_usable_url_only",
        "no_typography_extracted",
        "no_colour_extracted"
      ],
      "honest_gaps": {}
    }
  },
  "colorMode": "dark",
  "tokens": {
    "--bg": "#0D0D0D",
    "--on-bg": "#F5F0E8",
    "--primary": "#D4AF37",
    "--on-primary": "#0A0A0A",
    "--secondary-col": "#C0C0C0",
    "--on-secondary": "#0A0A0A",
    "--surface": "#2C2C2C",
    "--on-bg-muted": "#A0A0A0",
    "--border": "#D4AF37",
    "--error": "#9B111E",
    "--font-display": "'Syne', sans-serif",
    "--font-body": "'Raleway', sans-serif",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "primary": "#D4AF37",
    "on-primary": "#0A0A0A",
    "primary-container": "#B8960C",
    "on-primary-container": "#F5F0E8",
    "secondary": "#C0C0C0",
    "on-secondary": "#0A0A0A",
    "secondary-container": "#8A8A8A",
    "on-secondary-container": "#1A1A1A",
    "neutral": "#0D0D0D",
    "on-surface": "#F5F0E8",
    "on-surface-variant": "#D4AF37",
    "error": "#9B111E",
    "on-error": "#FFFFFF",
    "error-container": "#7A0D16",
    "on-error-container": "#FFFFFF",
    "outline": "#D4AF37",
    "outline-variant": "#8A7334",
    "surface": "#2C2C2C",
    "err": "#9B111E",
    "deltaFlat": "#0D0D0D",
    "warn": "#FF8C42",
    "ok": "#22C55E",
    "deltaUp": "#22C55E",
    "deltaDown": "#9B111E",
    "live": "#D4AF37",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#A0A0A0",
    "chartFont": "Space Grotesk"
  },
  "elevation": {
    "flat": "none",
    "raised": "4px 4px 0 rgba(0,0,0,0.8)",
    "hover": "6px 6px 0 rgba(0,0,0,0.8)",
    "modal": "8px 8px 0 rgba(0,0,0,0.8)",
    "zIndex": {
      "base": 0,
      "sticky": 20,
      "dropdown": 30,
      "overlay": 40,
      "modal": 50,
      "top": 60
    }
  },
  "surfaceModel": "shadow",
  "materialSimulation": {
    "model": "coated-card",
    "params": {
      "metallicGradient": true,
      "specularHighlight": true,
      "halftoneOverlay": true,
      "paperGrain": true,
      "shadowHard": true,
      "foilStamp": true
    }
  },
  "globalFilter": null,
  "globalBodyCss": "font-family: var(--font-body); background: var(--bg); color: var(--on-bg);",
  "globalCss": ".ds-layout-frame .primary-surface { background: linear-gradient(135deg, var(--primary) 0%, #c89e2f 50%, var(--primary) 100%); box-shadow: 4px 4px 0 rgba(0,0,0,0.8); } .ds-layout-frame .halftone-overlay::after { content: ''; position: absolute; inset: 0; background: radial-gradient(circle, rgba(0,0,0,0.12) 1px, transparent 1px); background-size: 4px 4px; opacity: 0.12; pointer-events: none; } .ds-layout-frame .foil-stamp { color: transparent; background: linear-gradient(135deg, var(--primary) 0%, #fff3d0 30%, var(--primary) 60%, #b8980c 100%); -webkit-background-clip: text; background-clip: text; text-shadow: 2px 2px 0 rgba(0,0,0,0.6); } .ds-layout-frame .card, .ds-layout-frame .panel, .ds-layout-frame .input { border: 1px solid var(--border); } .ds-layout-frame .stepped-panel { border: 2px solid var(--primary); box-shadow: 4px 4px 0 rgba(0,0,0,0.8); } .ds-layout-frame .chevron-band { background: repeating-linear-gradient(135deg, var(--primary) 0px, var(--primary) 2px, transparent 2px, transparent 8px); }",
  "interactionModel": {
    "hover": {
      "delta": "shadow-lift",
      "transitionDuration": "150ms",
      "easing": "ease-out"
    },
    "focus": {
      "style": "color-border",
      "outline": "2px dashed var(--primary)",
      "outlineOffset": "2px",
      "transitionDuration": "150ms"
    },
    "active": {
      "delta": "inset-shadow",
      "boxShadow": "inset 0 0 0 4px rgba(0,0,0,0.8)",
      "transitionDuration": "0ms"
    }
  },
  "interactionStyles": ".ds-layout-frame button:hover, .ds-layout-frame .card:hover, .ds-layout-frame .panel:hover { box-shadow: 6px 6px 0 rgba(0,0,0,0.8); transition: box-shadow 150ms ease-out; } .ds-layout-frame button:active, .ds-layout-frame .card:active, .ds-layout-frame .panel:active { box-shadow: inset 0 0 0 4px rgba(0,0,0,0.8); transition: box-shadow 0ms; } .ds-layout-frame *:focus { outline: 2px dashed var(--primary); outline-offset: 2px; transition: outline 150ms ease-out; }",
  "chartStyle": {
    "cell": {
      "backgroundColor": "#2C2C2C",
      "border": "1px solid #D4AF37",
      "borderOpacity": 0.3,
      "padding": "8px"
    },
    "dataLabel": {
      "fontFamily": "var(--font-body)",
      "fontSize": "12px",
      "fontWeight": 600,
      "letterSpacing": "0.05em",
      "textTransform": "uppercase",
      "color": "#D4AF37"
    },
    "dataValue": {
      "fontFamily": "var(--font-display)",
      "fontSize": "20px",
      "fontWeight": 400,
      "color": "#D4AF37",
      "textShadow": "2px 2px 0 rgba(0,0,0,0.4)"
    },
    "table": {
      "rowOdd": "#2C2C2C",
      "rowEven": "#1A1A1A",
      "gridColor": "#D4AF37",
      "gridOpacity": 0.2
    },
    "bar": {
      "fill": "linear-gradient(135deg, #D4AF37 0%, #C49A2A 100%)",
      "shadow": "2px 2px 0 rgba(0,0,0,0.3)",
      "rounded": "0px"
    },
    "statusOk": "#2E8B57",
    "statusWarn": "#D4AF37",
    "statusErr": "#9B111E",
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#A0A0A0",
    "fontFamily": "'Raleway', sans-serif"
  },
  "dashboardStyle": {
    "layout": "strictly symmetrical, centered vertical axis, mirrored panels",
    "density": "compact internal spacing inside generous page margins (32px)",
    "panelTreatment": "stepped-panels with metallic gold borders, hard offset shadows, repeating chevron bands at footer",
    "dataVizStyle": "gold bars with hard shadows, halftone overlay, border-radius 0px, sharp grid lines",
    "signatureElement": "a sunburst medallion at the top center of the dashboard"
  },
  "landingStyle": {
    "heroApproach": "stepped-panels with setback tiers, foil-stamped gold display text, hard offset shadow on title",
    "scrollBehavior": "linear-to-ease-out reveals, staggered stepped layers, no bounce or spring",
    "ctaStyle": "primary metallic gold button with hard shadow, all-caps label",
    "signatureMoment": "a sunburst medallion animation (ring rotation 8s linear infinite) at the crown of the page"
  },
  "spacing": {
    "component-internal": "8px",
    "section-internal": "24px",
    "page-edge": "32px",
    "gap-component": "16px",
    "gap-section": "32px",
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
  "buttons": [
    {
      "name": "primary",
      "desc": "Gold metallic primary button with hard offset shadow. Simulates brass or lacquer.",
      "html": "<button onmouseenter=\"this.dataset.guxBoxShadow=this.style.boxShadow||'';this.style.boxShadow='6px 6px 0 rgba(0,0,0,0.8)'\" onmouseleave=\"this.style.boxShadow=this.dataset.guxBoxShadow||'4px 4px 0 rgba(0,0,0,0.8)'\" style=\"background: linear-gradient(135deg, var(--primary) 0%, var(--primary) 50%, var(--primary) 100%); color: var(--on-primary); border: none; padding: 8px 24px; font-family: var(--font-display); font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; cursor: pointer; box-shadow: 4px 4px 0 rgba(0,0,0,0.8); transition: box-shadow 150ms ease-out, transform 150ms ease-out; border-radius: var(--radius-btn);\">Engage</button>",
      "label": "primary",
      "note": "Gold metallic primary button with hard offset shadow. Simulates brass or lacquer."
    },
    {
      "name": "secondary",
      "desc": "Outlined secondary button with gold border and transparent background.",
      "html": "<button onmouseenter=\"this.dataset.guxBoxShadow=this.style.boxShadow||'';this.style.boxShadow='6px 6px 0 rgba(0,0,0,0.8)'\" onmouseleave=\"this.style.boxShadow=this.dataset.guxBoxShadow||'4px 4px 0 rgba(0,0,0,0.8)'\" style=\"background: transparent; color: var(--on-bg); border: 2px solid var(--primary); padding: 8px 24px; font-family: var(--font-display); font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; cursor: pointer; box-shadow: 4px 4px 0 rgba(0,0,0,0.8); transition: box-shadow 150ms ease-out, background 150ms ease-out; border-radius: var(--radius-btn);\">Discover</button>",
      "label": "secondary",
      "note": "Outlined secondary button with gold border and transparent background."
    },
    {
      "name": "ghost",
      "desc": "Ghost button with gold text, no background or border.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; color: var(--primary); border: none; padding: 8px 24px; font-family: var(--font-display); font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; cursor: pointer; transition: color 150ms ease-out; border-radius: var(--radius-btn);\">Learn</button>",
      "label": "ghost",
      "note": "Ghost button with gold text, no background or border."
    }
  ],
  "cards": [
    {
      "name": "standard",
      "desc": "Deep black card with gold border, hard shadow, and metallic accent bar at bottom.",
      "html": "<div style=\"background: var(--surface); color: var(--on-bg); padding: 16px; border: 1px solid var(--primary); box-shadow: 4px 4px 0 rgba(0,0,0,0.8); border-radius: var(--radius-card); font-family: var(--font-body);\"><div style=\"border-bottom: 2px solid var(--primary); padding-bottom: 8px; margin-bottom: 12px;\"><h3 style=\"font-family: var(--font-display); text-transform: uppercase; letter-spacing: 0.05em; margin: 0;\">The Chrysler</h3></div><p style=\"margin: 0; font-size: 14px;\">A towering icon of art deco architecture, its spire clad in stainless steel.</p></div>",
      "label": "standard",
      "note": "Deep black card with gold border, hard shadow, and metallic accent bar at bottom."
    },
    {
      "name": "stepped",
      "desc": "Card with stepped setback top edge mimicking deco skyscraper tiers.",
      "html": "<div style=\"position: relative; background: var(--surface); color: var(--on-bg); padding: 16px; padding-top: 24px; box-shadow: 4px 4px 0 rgba(0,0,0,0.8); border-radius: var(--radius-card); border: 1px solid var(--primary); font-family: var(--font-body);\"><div style=\"position: absolute; top: -8px; left: 0; right: 0; height: 8px; background: linear-gradient(90deg, var(--primary) 0%, var(--primary) 50%, var(--primary) 100%);\"></div><div style=\"margin-top: 8px;\"><h3 style=\"font-family: var(--font-display); text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 8px 0;\">Sunburst</h3><p style=\"margin: 0; font-size: 14px;\">Radiant lines of golden light, a classic deco motif.</p></div></div>",
      "label": "stepped",
      "note": "Card with stepped setback top edge mimicking deco skyscraper tiers."
    }
  ],
  "forms": [
    {
      "name": "text-input",
      "desc": "Sharp-edged text input with gold border on dark background, hard shadow on focus.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px;\"><label style=\"font-family: var(--font-body); font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--primary);\">Name</label><input onfocus=\"this.dataset.guxBorder=this.style.border||'';this.dataset.guxBoxShadow=this.style.boxShadow||'';this.style.border='2px solid var(--secondary-col)';this.style.boxShadow='4px 4px 0 rgba(0,0,0,0.8)'\" onblur=\"this.style.border=this.dataset.guxBorder||'';this.style.boxShadow=this.dataset.guxBoxShadow||''\" type=\"text\" style=\"background: var(--on-bg-muted); color: var(--on-bg); border: 1px solid var(--border); padding: 8px; font-family: var(--font-body); font-size: 14px; border-radius: var(--radius-input); box-shadow: 2px 2px 0 rgba(0,0,0,0.6); transition: box-shadow 150ms ease-out, border-color 150ms ease-out;\"></div>",
      "label": "text-input",
      "stateLabel": "Sharp-edged text input with gold border on dark background, hard shadow on focus."
    },
    {
      "name": "select",
      "desc": "Dropdown with gold chevron, hard-edged and pristine.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px;\"><label style=\"font-family: var(--font-body); font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--primary);\">Style</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--on-bg-muted); color: var(--on-bg); border: 1px solid var(--border); padding: 8px; font-family: var(--font-body); font-size: 14px; border-radius: var(--radius-input); box-shadow: 2px 2px 0 rgba(0,0,0,0.6); appearance: none; background-image: url(\\x27data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"8\" viewBox=\"0 0 12 8\"><polygon points=\"6,8 0,0 12,0\" fill=\"%23D4AF37\"/></svg>\\x27); background-repeat: no-repeat; background-position: right 8px center; padding-right: 28px;\"><option>Gatsby</option><option>Zigzag</option><option>Fan</option></select></div>",
      "label": "select",
      "stateLabel": "Dropdown with gold chevron, hard-edged and pristine."
    },
    {
      "name": "checkbox",
      "desc": "Geometric checkbox with gold outline and golden checkmark.",
      "html": "<label style=\"display: flex; align-items: center; gap: 8px; font-family: var(--font-body); font-size: 14px; cursor: pointer;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"width: 16px; height: 16px; margin: 0; border: 2px solid var(--primary); background: transparent; appearance: none; border-radius: var(--radius-chip); cursor: pointer; position: relative;\"><span>Foil-stamped</span></label>",
      "label": "checkbox",
      "stateLabel": "Geometric checkbox with gold outline and golden checkmark."
    }
  ],
  "extraComponents": [
    {
      "name": "badge",
      "desc": "Metallic gold badge with hard shadow, sharp corners.",
      "html": "<span style=\"display: inline-block; background: linear-gradient(135deg, var(--primary) 0%, var(--primary) 50%, var(--primary) 100%); color: var(--on-primary); padding: 4px 12px; font-family: var(--font-display); font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; box-shadow: 2px 2px 0 rgba(0,0,0,0.8); border-radius: var(--radius-chip);\">NEW</span>"
    },
    {
      "name": "chevron-band",
      "desc": "Repeating chevron pattern as decorative band.",
      "html": "<div style=\"height: 16px; background: repeating-linear-gradient(90deg, var(--primary) 0px, var(--primary) 4px, transparent 4px, transparent 8px);\"><svg width=\"100%\" height=\"16\" style=\"display: block;\"><pattern id=\"chevron-6e49\" width=\"16\" height=\"16\" patternUnits=\"userSpaceOnUse\"><polyline points=\"0,8 8,0 16,8\" fill=\"none\" stroke=\"var(--primary)\" stroke-width=\"2\"/></pattern><rect width=\"100%\" height=\"16\" fill=\"url(#chevron-6e49)\"/></svg></div>"
    },
    {
      "name": "sunburst-medallion",
      "desc": "Circular gold medallion with radiating lines, classic deco ornament.",
      "html": "<div style=\"width: 120px; height: 120px; clip-path: polygon(50% 0%, 100% 29%, 100% 71%, 50% 100%, 0% 71%, 0% 29%); background: radial-gradient(circle at 50% 50%, var(--primary) 0%, var(--primary) 40%, var(--primary) 60%, var(--primary) 100%); box-shadow: 4px 4px 0 rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center;\"><div style=\"width: 80px; height: 80px; clip-path: polygon(50% 0%, 100% 29%, 100% 71%, 50% 100%, 0% 71%, 0% 29%); background: var(--neutral); display: flex; align-items: center; justify-content: center;\"><span style=\"font-family: var(--font-display); color: var(--primary); font-size: 24px; letter-spacing: 0.1em;\">✦</span></div></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — CHRYSLER</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — STREAMLINED MODERNE</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — Art Deco Revival</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — The style celebrated geometry, symmetry, and rich materials like gold and lacquer.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — Foil Stamp</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Never use rounded corners — they break the geometric precision of the style.",
      "avoid": {
        "html": "<button style=\"border-radius: 8px; background: #D4AF37; color: #0A0A0A; padding: 8px 16px; border: none;\">Rounded button</button>",
        "label": "Avoid"
      },
      "rule": "Never use rounded corners — they break the geometric precision of the style.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Avoid soft or blurred shadows — only hard offset shadows with no blur.",
      "avoid": {
        "html": "<div style=\"box-shadow: 0 4px 12px rgba(0,0,0,0.3); background: #2C2C2C; padding: 16px; border-radius: 0;\">Soft shadow card</div>",
        "label": "Avoid"
      },
      "rule": "Avoid soft or blurred shadows — only hard offset shadows with no blur.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Never use italics or slanted text — all lettering must be upright and geometric.",
      "avoid": {
        "html": "<p style=\"font-style: italic; color: #F5F0E8; font-family: Raleway;\">Italic body text is forbidden</p>",
        "label": "Avoid"
      },
      "rule": "Never use italics or slanted text — all lettering must be upright and geometric.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Avoid asymmetrical layouts — content must be strictly centered with mirrored halves.",
      "avoid": {
        "html": "<div style=\"display: flex; justify-content: flex-start;\"><div>Left-aligned</div><div>Right</div></div>",
        "label": "Avoid"
      },
      "rule": "Avoid asymmetrical layouts — content must be strictly centered with mirrored halves.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "effects": [],
  "motion": [],
  "colors": {
    "primary": "#D4AF37",
    "on-primary": "#0A0A0A",
    "primary-container": "#B8960C",
    "on-primary-container": "#F5F0E8",
    "secondary": "#C0C0C0",
    "on-secondary": "#0A0A0A",
    "secondary-container": "#8A8A8A",
    "on-secondary-container": "#1A1A1A",
    "neutral": "#0D0D0D",
    "on-surface": "#F5F0E8",
    "on-surface-variant": "#D4AF37",
    "error": "#9B111E",
    "on-error": "#FFFFFF",
    "error-container": "#7A0D16",
    "on-error-container": "#FFFFFF",
    "outline": "#D4AF37",
    "outline-variant": "#8A7334",
    "neutral-light": "#F5F0E8",
    "on-surface-light": "#0D0D0D",
    "on-surface-variant-light": "#8A7334",
    "outline-light": "#B8960C",
    "outline-variant-light": "#D4CAB8"
  },
  "typography": {
    "display": {
      "fontFamily": "var(--font-display)",
      "fontSize": "48px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "0.1em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "var(--font-display)",
      "fontSize": "30px",
      "fontWeight": 700,
      "lineHeight": 1.375,
      "letterSpacing": "0.025em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "var(--font-display)",
      "fontSize": "20px",
      "fontWeight": 600,
      "lineHeight": 1.375,
      "letterSpacing": "0.025em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "var(--font-body)",
      "fontSize": "16px",
      "fontWeight": 400,
      "lineHeight": 1.625,
      "letterSpacing": "0em"
    },
    "label": {
      "fontFamily": "var(--font-body)",
      "fontSize": "12px",
      "fontWeight": 600,
      "lineHeight": 1,
      "letterSpacing": "0.05em",
      "textTransform": "uppercase"
    }
  },
  "layouts": {
    "copy": {
      "heroKicker": "ART DECO REVIVAL",
      "heroHeadline": "GEOMETRIC OPULENCE / LACQUER & FOIL",
      "heroSub": "A digital surface system simulating brass inlay, stepped silhouettes, and gilded restraint — zero-radius, hard shadows, strict symmetry.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">VIEW THE SYSTEM</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">EXPLORE TOKENS</button>",
      "navLinks": [
        "GILT",
        "STEPPED",
        "SUNBURST",
        "CHEVRON",
        "LACQUER"
      ],
      "features": [
        {
          "title": "STEPPED PANEL",
          "desc": "Multi-tier setback sections with hard offset shadows and gold metallic gradient borders.",
          "icon": "📐",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📐 STEPPED PANEL</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Multi-tier setback sections with hard offset shadows and gold metallic gradient borders.</div></div>"
        },
        {
          "title": "SUNBURST MEDALLION",
          "desc": "Centered radial motif with rotating foil-stamped highlights — scale-reveal animation.",
          "icon": "✨",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">✨ SUNBURST MEDALLION</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Centered radial motif with rotating foil-stamped highlights — scale-reveal animation.</div></div>"
        },
        {
          "title": "CHEVRON BAND",
          "desc": "Repeating geometric ornament at card base — linear ease-out reveal with no blur.",
          "icon": "🔶",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔶 CHEVRON BAND</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Repeating geometric ornament at card base — linear ease-out reveal with no blur.</div></div>"
        },
        {
          "title": "FOIL-STAMPED TEXT",
          "desc": "Display headlines and primary labels with layered metallic gradient and specular highlight.",
          "icon": "✒️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">✒️ FOIL-STAMPED TEXT</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Display headlines and primary labels with layered metallic gradient and specular highlight.</div></div>"
        }
      ],
      "ctaStripHeadline": "COMMISSION YOUR LACQUERED SURFACE",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">REQUEST PRESS KIT</button>",
      "sidebarBrand": "ART DECO / GILT",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "TOKENS",
          "active": true
        },
        {
          "icon": "◉",
          "label": "COMPONENTS",
          "active": false
        },
        {
          "icon": "◉",
          "label": "LAYOUT",
          "active": false
        },
        {
          "icon": "◉",
          "label": "MOTION",
          "active": false
        }
      ],
      "dashboardTitle": "BRAND COMMAND CENTER",
      "metrics": [
        {
          "label": "SURFACE COUNT",
          "value": "48",
          "delta": "+6",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "GOLD METALLIC",
          "value": "92%",
          "delta": "+3%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "ZERO RADIUS",
          "value": "100%",
          "delta": "0%",
          "dir": "neutral",
          "direction": "neutral"
        },
        {
          "label": "HARD SHADOWS",
          "value": "64",
          "delta": "+12",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "STEPPED TIERS",
          "value": "8",
          "delta": "—",
          "dir": "neutral",
          "direction": "neutral"
        }
      ],
      "chartTitle": "METALLIC REFLECTANCE OVER TIME",
      "panelATitle": "LAYOUT COMPLIANCE",
      "panelARows": [
        {
          "label": "SYMMETRY AXIS",
          "value": "STRICT",
          "pct": 0
        },
        {
          "label": "MIRROR RATIO",
          "value": "1:1",
          "pct": 1
        },
        {
          "label": "CORNER RADIUS",
          "value": "0px",
          "pct": 0
        },
        {
          "label": "SHADOW TYPE",
          "value": "OFFSET",
          "pct": 0
        },
        {
          "label": "TRACKING",
          "value": "0.1em",
          "pct": 0.1
        }
      ],
      "panelBTitle": "SYMBOL REGISTRY",
      "panelBCells": [
        {
          "label": "CHEVRON",
          "value": "▽",
          "state": "ok"
        },
        {
          "label": "SUNBURST",
          "value": "✦",
          "state": "warn"
        },
        {
          "label": "STEPPED",
          "value": "▔",
          "state": "err"
        },
        {
          "label": "LACQUER",
          "value": "▨",
          "state": "ok"
        },
        {
          "label": "FOIL",
          "value": "⬣",
          "state": "warn"
        },
        {
          "label": "GILT",
          "value": "◈",
          "state": "err"
        },
        {
          "label": "BRASS",
          "value": "◆",
          "state": "ok"
        },
        {
          "label": "GEOMETRIC",
          "value": "◇",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "Q1",
        "Q2",
        "Q3",
        "Q4",
        "Q5",
        "Q6"
      ],
      "series": [
        {
          "data": [
            88,
            91,
            90,
            94,
            92,
            95,
            95,
            95,
            95,
            95,
            95,
            95
          ],
          "label": "GOLD REFLECTANCE",
          "axis": "left",
          "color": "#D4AF37"
        },
        {
          "data": [
            4,
            4,
            6,
            6,
            6,
            8,
            8,
            8,
            8,
            8,
            8,
            8
          ],
          "label": "HARD SHADOW DEPTH",
          "axis": "right-1",
          "color": "#C0C0C0"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText='display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:480px;background:#0D0D0D;padding:32px;'; el.innerHTML='<div style=\"width:120px;height:120px;border:2px solid var(--primary);border-radius:50%;display:flex;align-items:center;justify-content:center;background:radial-gradient(circle at 50% 50%, var(--primary) 0%, rgba(212,175,55,0) 70%);box-shadow:4px 4px 0 rgba(0,0,0,0.8);margin-bottom:24px;\"><span style=\"font-family:var(--font-display);color:var(--primary);font-size:40px;\">✦</span></div><div style=\"font-family:var(--font-display);font-size:48px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:transparent;background:linear-gradient(135deg, var(--primary) 0%, #fff3d0 30%, var(--primary) 60%, #b8980c 100%);-webkit-background-clip:text;background-clip:text;text-shadow:2px 2px 0 rgba(0,0,0,0.6);\">ART DECO</div><div style=\"font-family:var(--font-display);font-size:20px;letter-spacing:0.05em;text-transform:uppercase;color:var(--primary);margin-top:16px;border-top:2px solid var(--primary);padding-top:16px;\">GEOMETRIC OPULENCE</div>'; }",
    "showcaseRender": "function(el) { el.style.cssText='display:grid;grid-template-columns:1fr 1fr;gap:16px;padding:32px;background:var(--bg);'; el.innerHTML='<div style=\"padding:24px;border:1px solid var(--border);background:var(--surface);box-shadow:4px 4px 0 rgba(0,0,0,0.8);\"><div style=\"font-family:var(--font-display);text-transform:uppercase;letter-spacing:0.1em;color:var(--primary);font-size:13px;\">STEPPED PANEL</div><div style=\"font-family:var(--font-body);color:var(--on-bg-muted);font-size:12px;margin-top:8px;\">Multi-tier setback sections with hard offset shadows and gold metallic gradient borders.</div></div><div style=\"padding:24px;border:1px solid var(--border);background:var(--surface);box-shadow:4px 4px 0 rgba(0,0,0,0.8);\"><div style=\"font-family:var(--font-display);text-transform:uppercase;letter-spacing:0.1em;color:var(--primary);font-size:13px;\">SUNBURST MEDALLION</div><div style=\"font-family:var(--font-body);color:var(--on-bg-muted);font-size:12px;margin-top:8px;\">Centered radial motif with rotating foil-stamped highlights.</div></div><div style=\"padding:24px;border:1px solid var(--border);background:var(--surface);box-shadow:4px 4px 0 rgba(0,0,0,0.8);\"><div style=\"font-family:var(--font-display);text-transform:uppercase;letter-spacing:0.1em;color:var(--primary);font-size:13px;\">CHEVRON BAND</div><div style=\"font-family:var(--font-body);color:var(--on-bg-muted);font-size:12px;margin-top:8px;\">Repeating geometric ornament at card base.</div></div><div style=\"padding:24px;border:1px solid var(--border);background:var(--surface);box-shadow:4px 4px 0 rgba(0,0,0,0.8);\"><div style=\"font-family:var(--font-display);text-transform:uppercase;letter-spacing:0.1em;color:var(--primary);font-size:13px;\">FOIL-STAMPED TEXT</div><div style=\"font-family:var(--font-body);color:var(--on-bg-muted);font-size:12px;margin-top:8px;\">Layered metallic gradient and specular highlight.</div></div>'; }",
    "panelCRender": "function(el) { el.style.cssText='padding:24px;background:var(--surface);border:1px solid var(--primary);box-shadow:4px 4px 0 rgba(0,0,0,0.8);font-family:var(--font-body);'; el.innerHTML='<div style=\"font-family:var(--font-display);text-transform:uppercase;letter-spacing:0.05em;color:var(--primary);font-size:20px;margin-bottom:16px;\">SYMBOL REGISTRY</div><div style=\"display:grid;grid-template-columns:1fr 1fr;gap:8px;\"><div style=\"display:flex;justify-content:space-between;\"><span>CHEVRON</span><span style=\"color:var(--primary);\">▽</span></div><div style=\"display:flex;justify-content:space-between;\"><span>SUNBURST</span><span style=\"color:var(--primary);\">✦</span></div><div style=\"display:flex;justify-content:space-between;\"><span>STEPPED</span><span style=\"color:var(--primary);\">▔</span></div><div style=\"display:flex;justify-content:space-between;\"><span>LACQUER</span><span style=\"color:var(--primary);\">▨</span></div></div>'; }",
    "heroBackground": "function(el) { el.style.cssText='background: linear-gradient(135deg, #0D0D0D 0%, #1A1A1A 60%, #0D0D0D 100%); border-bottom: 2px solid var(--primary);'; }",
    "ctaBackground": "function(el) { el.style.cssText='background: linear-gradient(135deg, #0D0D0D 0%, #2C2C2C 100%); border-top: 2px solid var(--primary);'; }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText='height:4px;background:linear-gradient(90deg, var(--primary) 0%, var(--primary) 50%, transparent 50%, transparent 100%);background-size:20px 4px;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.cssText='background: #0D0D0D; border-top: 4px solid var(--primary);'; }",
    "surfaceOverlay": "function(el) { var ov=document.createElement('div'); ov.style.cssText='position:absolute;inset:0;z-index:2;pointer-events:none;background: radial-gradient(circle, rgba(0,0,0,0.12) 1px, transparent 1px); background-size: 4px 4px; opacity: 0.12;'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(el, tick) { var svgNs='http://www.w3.org/2000/svg'; var svg=document.createElementNS(svgNs,'svg'); svg.setAttribute('width','100%'); svg.setAttribute('height','100%'); svg.style.cssText='position:absolute;inset:0;pointer-events:none;'; var pattern=document.createElementNS(svgNs,'pattern'); pattern.setAttribute('id','decoPattern'); pattern.setAttribute('width','40'); pattern.setAttribute('height','40'); pattern.setAttribute('patternUnits','userSpaceOnUse'); var rect=document.createElementNS(svgNs,'rect'); rect.setAttribute('width','40'); rect.setAttribute('height','40'); rect.setAttribute('fill','var(--primary)'); var poly=document.createElementNS(svgNs,'polygon'); var angle=(tick%360)*Math.PI/180; var points=''; for(var i=0;i<8;i++){ var a=angle+i*Math.PI/4; var x=20+15*Math.cos(a); var y=20+15*Math.sin(a); points+=(i===0?'':' ')+x.toFixed(1)+','+y.toFixed(1); } poly.setAttribute('points',points); poly.setAttribute('fill','none'); poly.setAttribute('stroke','var(--primary)'); poly.setAttribute('stroke-width','2'); pattern.appendChild(rect); pattern.appendChild(poly); svg.appendChild(pattern); var bgRect=document.createElementNS(svgNs,'rect'); bgRect.setAttribute('width','100%'); bgRect.setAttribute('height','100%'); bgRect.setAttribute('fill','url(#decoPattern)'); svg.appendChild(bgRect); el.appendChild(svg); }",
  "shadcnTokens": {
    "--color-background": "#0D0D0D",
    "--color-popover": "#0D0D0D",
    "--color-foreground": "#F5F0E8",
    "--color-card-foreground": "#F5F0E8",
    "--color-popover-foreground": "#F5F0E8",
    "--color-card": "#2C2C2C",
    "--color-muted": "#2C2C2C",
    "--color-muted-foreground": "#A0A0A0",
    "--color-primary": "#D4AF37",
    "--color-ring": "#D4AF37",
    "--color-primary-foreground": "#0A0A0A",
    "--color-secondary": "#C0C0C0",
    "--color-accent": "#C0C0C0",
    "--color-secondary-foreground": "#0A0A0A",
    "--color-accent-foreground": "#0A0A0A",
    "--color-border": "#D4AF37",
    "--color-input": "#D4AF37",
    "--color-destructive": "#9B111E"
  },
  "shadcnTokensClassic": {
    "--background": "#0D0D0D",
    "--popover": "#0D0D0D",
    "--foreground": "#F5F0E8",
    "--card-foreground": "#F5F0E8",
    "--popover-foreground": "#F5F0E8",
    "--card": "#2C2C2C",
    "--muted": "#2C2C2C",
    "--muted-foreground": "#A0A0A0",
    "--primary": "#D4AF37",
    "--ring": "#D4AF37",
    "--primary-foreground": "#0A0A0A",
    "--secondary": "#C0C0C0",
    "--accent": "#C0C0C0",
    "--secondary-foreground": "#0A0A0A",
    "--accent-foreground": "#0A0A0A",
    "--border": "#D4AF37",
    "--input": "#D4AF37",
    "--destructive": "#9B111E"
  }
});
