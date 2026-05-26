registerSystem({
  "meta": {
    "name": "Risograph",
    "tagline": "A tactile, lo-fi digital interface style simulating risograph printing — misregistration, halftone dots, and cream paper with spot colors.",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Bitter:wght@700&family=Jost:wght@700&family=Roboto+Slab:wght@700;900&display=swap"
  },
  "yamlTokens": {
    "name": "Risograph",
    "colors": {
      "primary": "#001F3F",
      "on-primary": "#F5F0E8",
      "secondary": "#FF69B4",
      "tertiary": "#FFD700",
      "surface": "#F5F0E8",
      "error": "#D32F2F"
    },
    "typography": {
      "display": {
        "fontFamily": "Roboto Slab",
        "fontSize": "48px",
        "fontWeight": 900,
        "lineHeight": 1,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Roboto Slab",
        "fontSize": "30px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Bitter",
        "fontSize": "20px",
        "fontWeight": 700,
        "lineHeight": 1.375,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Bitter",
        "fontSize": "18px",
        "fontWeight": 700,
        "lineHeight": 1.625,
        "letterSpacing": "0em"
      },
      "label": {
        "fontFamily": "Bitter",
        "fontSize": "14px",
        "fontWeight": 700,
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
      "component-internal": "16px",
      "section-internal": "32px",
      "page-edge": "32px",
      "gap-component": "24px",
      "gap-section": "48px",
      "height-sm": "40px",
      "height-md": "48px",
      "height-lg": "64px",
      "icon": "32px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "#001F3F",
        "textColor": "#F5F0E8",
        "rounded": "{rounded.button}",
        "padding": "16px"
      },
      "button-primary-hover": {
        "backgroundColor": "#001F3F",
        "textColor": "#FF69B4",
        "rounded": "{rounded.button}",
        "padding": "16px"
      },
      "card": {
        "backgroundColor": "#F5F0E8",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "input": {
        "backgroundColor": "transparent",
        "rounded": "{rounded.input}",
        "padding": "16px"
      },
      "input-focus": {
        "backgroundColor": "transparent",
        "textColor": "#FF69B4",
        "rounded": "{rounded.input}",
        "padding": "16px"
      },
      "registration-mark": {
        "size": "24px"
      }
    },
    "version": "alpha",
    "description": "A tactile, lo-fi digital interface style simulating risograph printing — misregistration, halftone dots, and cream paper with spot colors.",
    "provenance": {
      "coverage_status": "complete",
      "identity_description": "The slug `risograph` refers primarily to the visual identity associated with the Risograph — the brand of stencil duplicators (digital duplicators) manufactured by Riso Kagaku Corporation (Japan, founded 1946), and by extension the distinct aesthetic of the printing process itself. The identity encompasses the corporate logo and lockup, the characteristic machine design language (1980s–pre",
      "manual_enrichment_required": false,
      "imagery_count": 12,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "www.riso.co.uk",
          "count": 2
        },
        {
          "host": "www.riso.co.jp",
          "count": 2
        },
        {
          "host": "www.riso.com",
          "count": 1
        },
        {
          "host": "www.riso-studio.com",
          "count": 1
        },
        {
          "host": "collections.vam.ac.uk",
          "count": 1
        },
        {
          "host": "stencil.wiki",
          "count": 1
        },
        {
          "host": "www.risottino.com",
          "count": 1
        },
        {
          "host": "en.wikipedia.org",
          "count": 1
        },
        {
          "host": "www.vam.ac.uk",
          "count": 1
        },
        {
          "host": "3dactions.com",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://www.riso.co.uk/",
          "host": "www.riso.co.uk",
          "institution": "Riso Kagaku Corporation (UK site)",
          "confidence_original": "medium"
        },
        {
          "url": "https://www.riso.co.uk/wp-content/uploads/2025/02/inks.webp",
          "host": "www.riso.co.uk",
          "institution": "Riso UK",
          "confidence_original": "low"
        },
        {
          "url": "https://www.riso.com/index.html",
          "host": "www.riso.com",
          "institution": "Riso Kagaku Corporation",
          "confidence_original": "high"
        },
        {
          "url": "https://www.riso-studio.com/en/color-chart/",
          "host": "www.riso-studio.com",
          "institution": "Riso Studio (independent distributor)",
          "confidence_original": "low"
        },
        {
          "url": "https://collections.vam.ac.uk/item/O123456/",
          "host": "collections.vam.ac.uk",
          "institution": "Victoria and Albert Museum, London",
          "confidence_original": "low"
        },
        {
          "url": "https://stencil.wiki/wiki/Main_Page",
          "host": "stencil.wiki",
          "institution": "Stencil.Wiki (community)",
          "confidence_original": "high"
        },
        {
          "url": "https://www.risottino.com/",
          "host": "www.risottino.com",
          "institution": "Risottino Libri, Berlin",
          "confidence_original": "low"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Risograph",
          "host": "en.wikipedia.org",
          "institution": null,
          "confidence_original": "medium"
        },
        {
          "url": "https://www.riso.co.jp/index.html",
          "host": "www.riso.co.jp",
          "institution": "Riso Kagaku Corporation",
          "confidence_original": "low"
        },
        {
          "url": "https://www.vam.ac.uk/",
          "host": "www.vam.ac.uk",
          "institution": "Victoria and Albert Museum, London",
          "confidence_original": "low"
        },
        {
          "url": "https://www.riso.co.jp/english/index.html",
          "host": "www.riso.co.jp",
          "institution": "Riso Kagaku Corporation",
          "confidence_original": "medium"
        },
        {
          "url": "https://3dactions.com/",
          "host": "3dactions.com",
          "institution": "Print Differently",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Riso Kagaku logotype lettering",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "attested"
        },
        {
          "name": "Helvetica",
          "foundry": null,
          "year": null,
          "google_fonts": "Inter",
          "attestation": "inferred"
        }
      ],
      "flags": [
        "2_robots_disallowed_urls"
      ],
      "honest_gaps": [
        "1. **Hex values of Riso ink colours** — no verified primary source; all approximations based on unverified community swatches. CONTESTED for each colour."
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#F5F0E8",
    "--on-bg": "#001F3F",
    "--primary": "#001F3F",
    "--on-primary": "#F5F0E8",
    "--secondary-col": "#FF69B4",
    "--on-secondary": "#001F3F",
    "--surface": "#F5F0E8",
    "--on-bg-muted": "#2A4A6A",
    "--border": "#001F3F",
    "--error": "#D32F2F",
    "--font-display": "Roboto Slab",
    "--font-body": "Bitter",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "success": "#FFD700",
    "warning": "#FF69B4",
    "error": "#D32F2F",
    "info": "#001F3F",
    "on-success": "#001F3F",
    "on-warning": "#001F3F",
    "on-error": "#F5F0E8",
    "on-info": "#F5F0E8",
    "err": "#D32F2F",
    "ok": "#FFD700",
    "warn": "#FF69B4",
    "deltaUp": "#FFD700",
    "deltaDown": "#D32F2F",
    "deltaFlat": "#2A4A6A",
    "live": "#001F3F",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#2A4A6A",
    "chartFont": "Bitter"
  },
  "elevation": {
    "levels": [
      {
        "name": "flat",
        "shadow": "none",
        "style": ""
      },
      {
        "name": "raised",
        "shadow": "0 2px 4px rgba(0,0,0,.12)",
        "style": "box-shadow:0 2px 4px rgba(0,0,0,.12);"
      },
      {
        "name": "overlay",
        "shadow": "0 8px 24px rgba(0,0,0,.18)",
        "style": "box-shadow:0 8px 24px rgba(0,0,0,.18);"
      }
    ]
  },
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "paper"
  },
  "globalFilter": "<svg xmlns='http://www.w3.org/2000/svg'><defs><filter id='risograph-grain' x='0' y='0' width='100%' height='100%'><feTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' result='noise'/><feColorMatrix type='matrix' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.12 0' in='noise' result='colored'/><feBlend in='SourceGraphic' in2='colored' mode='multiply'/></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-body); background: var(--bg); color: var(--on-bg); margin: 0; padding: 0;",
  "globalCss": ".ds-layout-frame { background-color: var(--bg); color: var(--on-bg); font-family: var(--font-body); filter: url(#risograph-grain); } .ds-layout-frame .misregister { position: relative; } .ds-layout-frame .misregister::after { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; }",
  "interactionModel": {
    "hover": {
      "type": "color-shift",
      "effect": "increase misregistration offset by 0.5-1px, shift accent colour layer",
      "transition": "200ms steps(1)"
    },
    "active": {
      "type": "offset-shift",
      "effect": "scale(1.02) + blur(0.5px) to simulate ink spread",
      "transition": "200ms ease-out"
    },
    "focus": {
      "type": "color-border",
      "effect": "secondary offset line 2px below primary border in accent colour",
      "transition": "200ms"
    },
    "transition": {
      "duration": "200ms",
      "easing": "ease-out",
      "misregistrationEasing": "steps(1)"
    }
  },
  "interactionStyles": ".ds-layout-frame [data-interactive]:hover { transform: translate(1px, -1px); color: var(--secondary-col); transition: 200ms steps(1); } .ds-layout-frame [data-interactive]:active { transform: scale(1.02); filter: blur(0.5px); transition: 200ms ease-out; } .ds-layout-frame [data-interactive]:focus { box-shadow: 0 2px 0 var(--secondary-col); transition: 200ms; }",
  "chartStyle": {
    "bar": {
      "fill": "var(--primary)",
      "borderRadius": "0px",
      "halftoneMask": true
    },
    "background": "transparent",
    "grid": {
      "stroke": "var(--primary)",
      "strokeWidth": 1,
      "style": "solid"
    },
    "text": {
      "fontFamily": "var(--font-body)",
      "fontSize": "16px",
      "fontWeight": 700,
      "color": "var(--primary)",
      "textTransform": "uppercase"
    },
    "statusIndicators": {
      "ok": {
        "color": "var(--success)",
        "shape": "circle"
      },
      "warn": {
        "color": "var(--warning)",
        "shape": "circle"
      },
      "error": {
        "color": "var(--error)",
        "shape": "circle"
      }
    },
    "divider": {
      "type": "ink-splatter",
      "color": "var(--primary)"
    },
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#2A4A6A",
    "fontFamily": "Bitter"
  },
  "dashboardStyle": {
    "layout": "poster-like, asymmetric, 40-60% negative space",
    "density": "sparse",
    "panelTreatment": "misregistration card with halftone overlay",
    "dataVizStyle": "bar charts with halftone masks, circular status indicators, solid ink lines",
    "signatureElement": "registration mark in corner"
  },
  "landingStyle": {
    "heroApproach": "oversized display heading with misregistration offset in pink and navy",
    "scrollBehavior": "static, no parallax",
    "ctaStyle": "large primary button with halftone background",
    "signatureMoment": "grain texture reveals as page loads"
  },
  "buttons": [
    {
      "name": "primary",
      "desc": "Primary action button with navy background and cream text. On hover, the text shifts to pink and a misregistration offset is applied via text-shadow. The button has a halftone dot mask on the background for texture.",
      "html": "<button onmouseenter=\"this.style.color='var(--secondary-col)';this.style.textShadow='2px 2px 0 var(--secondary-col)';this.style.transform='translate(1px, -1px)';\" onmouseleave=\"this.style.color='var(--on-primary)';this.style.textShadow='none';this.style.transform='none';\" style=\"background-color: var(--primary); color: var(--on-primary); border: 2px solid var(--primary); border-radius: var(--radius-btn); padding: 16px; font-family: var(--font-body); font-size: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; cursor: pointer; transition: all 200ms steps(1); position: relative;\"><span style=\"position: relative; z-index: 1;\">Print</span></button>",
      "label": "primary",
      "note": "Primary action button with navy background and cream text. On hover, the text shifts to pink and a misregistration offset is applied via text-shadow. The button has a halftone dot mask on the background for texture."
    },
    {
      "name": "secondary",
      "desc": "Secondary button with transparent background, navy border, and navy text. On hover, the border and text shift to pink, mimicking a second pass offset.",
      "html": "<button onmouseenter=\"this.style.color='var(--secondary-col)';this.style.borderColor='var(--secondary-col)';this.style.textShadow='2px 2px 0 var(--secondary-col)';this.style.transform='translate(1px, -1px)';\" onmouseleave=\"this.style.color='var(--primary)';this.style.borderColor='var(--primary)';this.style.textShadow='none';this.style.transform='none';\" style=\"background-color: transparent; color: var(--primary); border: 3px solid var(--primary); border-radius: var(--radius-btn); padding: 16px; font-family: var(--font-body); font-size: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; cursor: pointer; transition: all 200ms steps(1);\">Register</button>",
      "label": "secondary",
      "note": "Secondary button with transparent background, navy border, and navy text. On hover, the border and text shift to pink, mimicking a second pass offset."
    },
    {
      "name": "ghost",
      "desc": "Ghost button with no background or border, only text with a dotted underline simulating misregistration. On hover, the underline becomes solid and offset.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: transparent; color: var(--primary); border: none; padding: 16px; font-family: var(--font-body); font-size: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; cursor: pointer; text-decoration: underline; text-decoration-style: dotted; text-underline-offset: 4px; transition: all 200ms steps(1);\">Expose</button>",
      "label": "ghost",
      "note": "Ghost button with no background or border, only text with a dotted underline simulating misregistration. On hover, the underline becomes solid and offset."
    }
  ],
  "cards": [
    {
      "name": "paper-card",
      "desc": "A card that mimics a piece of cream paper with a halftone overlay. The title is navy, bold uppercase. The body uses body typography. The card has a 1px registration line border (navy at 20% opacity via box-shadow).",
      "html": "<div style=\"background-color: var(--surface); border: none; border-radius: var(--radius-card); padding: 16px; box-shadow: 0 0 0 1px rgba(0, 31, 63, 0.2); position: relative; overflow: hidden;\"><div style=\"position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; background: radial-gradient(circle, rgba(0,31,63,0.1) 2px, transparent 2px); background-size: 6px 6px; opacity: 0.3;\"></div><h3 style=\"margin: 0 0 8px 0; font-family: var(--font-display); font-size: 20px; font-weight: 700; text-transform: uppercase; color: var(--primary);\">Edition</h3><p style=\"margin: 0; font-family: var(--font-body); font-size: 18px; font-weight: 700; line-height: 1.625; color: var(--primary);\">Limited run of 200 prints.</p></div>",
      "label": "paper-card",
      "note": "A card that mimics a piece of cream paper with a halftone overlay. The title is navy, bold uppercase. The body uses body typography. The card has a 1px registration line border (navy at 20% opacity via box-shadow)."
    },
    {
      "name": "misregistration-card",
      "desc": "A card that simulates two offset spot color layers. The base layer is navy, the offset layer is pink shifted 2px right and 1px down, with multiply blend. Text appears once on the offset layer.",
      "html": "<div style=\"position: relative; border-radius: var(--radius-card); padding: 16px; overflow: hidden;\"><div style=\"background-color: var(--primary); position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: var(--radius-card);\"></div><div style=\"background-color: var(--secondary-col); position: absolute; top: 1px; left: 2px; width: 100%; height: 100%; mix-blend-mode: multiply; border-radius: var(--radius-card);\"></div><div style=\"position: relative; z-index: 1;\"><h3 style=\"margin: 0 0 8px 0; font-family: var(--font-display); font-size: 20px; font-weight: 700; text-transform: uppercase; color: var(--on-primary); text-shadow: 2px 1px 0 var(--secondary-col);\">Offset</h3><p style=\"margin: 0; font-family: var(--font-body); font-size: 18px; font-weight: 700; line-height: 1.625; color: var(--on-primary); text-shadow: 2px 1px 0 var(--secondary-col);\">Two layers, one print.</p></div></div>",
      "label": "misregistration-card",
      "note": "A card that simulates two offset spot color layers. The base layer is navy, the offset layer is pink shifted 2px right and 1px down, with multiply blend. Text appears once on the offset layer."
    }
  ],
  "forms": [
    {
      "name": "text-input",
      "desc": "A text input with transparent background, navy border, and label above. On focus, the border shifts to pink with a 2px offset below (simulating a second pass). The input has a halftone dot background pattern at low opacity.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px;\"><label style=\"font-family: var(--font-body); font-size: 14px; font-weight: 700; text-transform: uppercase; color: var(--primary);\">Name</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: transparent; border: 2px solid var(--primary); border-radius: var(--radius-input); padding: 16px; font-family: var(--font-body); font-size: 18px; font-weight: 700; color: var(--primary); outline: none; transition: all 200ms steps(1);\" placeholder=\"Type here\" /></div>",
      "label": "text-input",
      "stateLabel": "A text input with transparent background, navy border, and label above. On focus, the border shifts to pink with a 2px offset below (simulating a second pass). The input has a halftone dot background pattern at low opacity."
    },
    {
      "name": "select",
      "desc": "A custom select dropdown with a navy border and a pink arrow. The dropdown options appear with a halftone background.",
      "html": "<div style=\"position: relative; display: inline-block; width: 100%;\"><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: transparent; border: 2px solid var(--primary); border-radius: var(--radius-input); padding: 16px; font-family: var(--font-body); font-size: 18px; font-weight: 700; color: var(--primary); width: 100%; appearance: none; -webkit-appearance: none; -moz-appearance: none; cursor: pointer;\"><option>Edition</option><option>Print</option></select><span style=\"position: absolute; top: 50%; right: 16px; transform: translateY(-50%); color: var(--secondary-col); pointer-events: none;\">▼</span></div>",
      "label": "select",
      "stateLabel": "A custom select dropdown with a navy border and a pink arrow. The dropdown options appear with a halftone background."
    },
    {
      "name": "checkbox",
      "desc": "A custom checkbox with a navy border and a pink checkmark. The indigo background appears on check with multiply blending. Label is navy uppercase.",
      "html": "<label style=\"display: flex; align-items: center; gap: 8px; font-family: var(--font-body); font-size: 14px; font-weight: 700; text-transform: uppercase; color: var(--primary); cursor: pointer;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"width: 24px; height: 24px; border: 2px solid var(--primary); background-color: transparent; appearance: none; -webkit-appearance: none; -moz-appearance: none; cursor: pointer; position: relative;\" /><span>Approve</span></label>",
      "label": "checkbox",
      "stateLabel": "A custom checkbox with a navy border and a pink checkmark. The indigo background appears on check with multiply blending. Label is navy uppercase."
    }
  ],
  "extraComponents": [
    {
      "name": "badge",
      "desc": "A small badge with navy background, cream text, and a misregistration offset created with a pink text-shadow. The badge has no rounded corners.",
      "html": "<span style=\"display: inline-block; background-color: var(--primary); color: var(--on-primary); padding: 4px 8px; font-family: var(--font-body); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; border-radius: 0; text-shadow: 1px 1px 0 var(--secondary-col);\">New</span>"
    },
    {
      "name": "tooltip",
      "desc": "A tooltip that appears below the trigger element on hover. It has a cream background, navy border, and a pink offset shadow. The text is navy.",
      "html": "<div style=\"position: relative; display: inline-block;\"><span style=\"font-family: var(--font-body); font-size: 14px; font-weight: 700; text-transform: uppercase; color: var(--primary); cursor: help; border-bottom: 2px dotted var(--primary);\">Info</span><div style=\"display: none; position: absolute; top: 100%; left: 0; margin-top: 4px; background-color: var(--surface); border: 1px solid var(--primary); padding: 8px; font-family: var(--font-body); font-size: 14px; font-weight: 700; color: var(--primary); white-space: nowrap; box-shadow: 2px 2px 0 var(--secondary-col);\">Details</div></div>"
    },
    {
      "name": "toast",
      "desc": "A notification toast with cream background, navy border, and a pink offset stripe on the left. The message is navy with a misregistration shadow.",
      "html": "<div style=\"display: flex; align-items: center; gap: 12px; background-color: var(--surface); border: 2px solid var(--primary); padding: 16px; border-left: 8px solid var(--secondary-col); font-family: var(--font-body); font-size: 16px; font-weight: 700; color: var(--primary); text-shadow: 1px 1px 0 var(--secondary-col); max-width: 400px;\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke=\"var(--secondary-col)\" stroke-width=\"2\"/><path d=\"M12 8v4M12 16h.01\" stroke=\"var(--secondary-col)\" stroke-width=\"2\" stroke-linecap=\"round\"/></svg><span>Print job completed.</span></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — RISORAMA</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — Ink & Paper</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — Limited Edition</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — This is a test of the risograph body typography. It should read clearly in bold on cream paper.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — PRINT COLOR</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Do not use smooth gradients or drop shadows. Risograph is flat, with no gradient blending.",
      "avoid": {
        "html": "<div style=\"background: linear-gradient(to right, #001F3F, #FF69B4); box-shadow: 0 4px 6px rgba(0,0,0,0.3); padding: 16px; color: white;\">Bad Gradient Card</div>",
        "label": "Avoid"
      },
      "rule": "Do not use smooth gradients or drop shadows. Risograph is flat, with no gradient blending.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not use pure black (#000) or more than three colors. The palette is limited to navy, pink, and gold on cream.",
      "avoid": {
        "html": "<div style=\"background-color: #000000; color: #ffffff; padding: 16px;\">Black Background</div>",
        "label": "Avoid"
      },
      "rule": "Do not use pure black (#000) or more than three colors. The palette is limited to navy, pink, and gold on cream.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not use rounded corners or smooth UI elements. All corners must be sharp (0px radius).",
      "avoid": {
        "html": "<button style=\"border-radius: 8px; background-color: #001F3F; color: #F5F0E8; padding: 16px;\">Rounded Button</button>",
        "label": "Avoid"
      },
      "rule": "Do not use rounded corners or smooth UI elements. All corners must be sharp (0px radius).",
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
  "doAvoidStyle": {
    "desc": "Avoid any visual that uses shadows, gradients, or pure black.",
    "avoid": "Smooth UI, rounded corners, drop shadows, gradient fills, more than 3 colors."
  },
  "effects": [
    {
      "name": "halftone-mask",
      "render": "function(el){ el.style.cssText='width:100%;height:100%;background:var(--surface);position:relative;display:flex;align-items:center;justify-content:center;'; var mask=document.createElement('div'); mask.style.cssText='width:100%;height:100%;position:absolute;inset:0;background:radial-gradient(circle,rgba(0,31,63,0.2) 2px,transparent 2px);background-size:6px 6px;pointer-events:none;'; el.appendChild(mask); var d=document.createElement('div'); d.style.cssText='width:56px;height:56px;background:var(--primary);position:relative;z-index:1;mix-blend-mode:multiply;'; el.appendChild(d); }"
    },
    {
      "name": "misregistration-offset",
      "render": "function(el){ el.style.cssText='width:100%;height:100%;background:var(--surface);position:relative;display:flex;align-items:center;justify-content:center;'; var d=document.createElement('div'); d.style.cssText='width:56px;height:56px;background:var(--primary);box-shadow:0 0 14px var(--primary);'; el.appendChild(d); }"
    },
    {
      "name": "grain-texture",
      "render": "function(el){ el.style.cssText='width:100%;height:100%;background:var(--surface);position:relative;display:flex;align-items:center;justify-content:center;'; var d=document.createElement('div'); d.style.cssText='width:56px;height:56px;background:var(--primary);box-shadow:0 0 14px var(--primary);'; el.appendChild(d); }"
    }
  ],
  "motion": [],
  "colors": {
    "primary": "#001F3F",
    "on-primary": "#F5F0E8",
    "secondary": "#FF69B4",
    "tertiary": "#FFD700",
    "surface": "#F5F0E8",
    "error": "#D32F2F",
    "success": "#FFD700",
    "warning": "#FF69B4"
  },
  "typography": {
    "display": {
      "fontFamily": "Roboto Slab",
      "fontSize": "48px",
      "fontWeight": 900,
      "lineHeight": 1,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "Bitter",
      "fontSize": "30px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "Bitter",
      "fontSize": "20px",
      "fontWeight": 700,
      "lineHeight": 1.375,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "Bitter",
      "fontSize": "18px",
      "fontWeight": 700,
      "lineHeight": 1.625,
      "letterSpacing": "0em"
    },
    "label": {
      "fontFamily": "Bitter",
      "fontSize": "14px",
      "fontWeight": 700,
      "lineHeight": 1,
      "letterSpacing": "0.05em",
      "textTransform": "uppercase"
    }
  },
  "radius": {
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
    "gap-component": "24px",
    "gap-section": "48px",
    "height-sm": "40px",
    "height-md": "48px",
    "height-lg": "64px",
    "icon": "32px"
  },
  "layouts": {
    "copy": {
      "heroKicker": "TACTILE PRINT. DIGITAL PROOF.",
      "heroHeadline": "SIMULATE YOUR RISO RUN",
      "heroSub": "Preview misregistration, halftone dot density, and spot color overlap before you print.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">START PROOF</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">EXPLORE COLORS</button>",
      "navLinks": [
        "LAYERS",
        "COLORS",
        "HALFTONE",
        "PROOF",
        "ORDER"
      ],
      "features": [
        {
          "title": "MISREGISTRATION SIMULATION",
          "desc": "Offset color layers by 0.5–3px to mimic real drum drift.",
          "icon": "🔀",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔀 MISREGISTRATION SIMULATION</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Offset color layers by 0.5–3px to mimic real drum drift.</div></div>"
        },
        {
          "title": "HALFTONE DOT MASK",
          "desc": "Apply 20–30 lpi radial dot patterns for tonal shading.",
          "icon": "🔘",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔘 HALFTONE DOT MASK</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Apply 20–30 lpi radial dot patterns for tonal shading.</div></div>"
        },
        {
          "title": "SPOT COLOR OVERLAY",
          "desc": "Mix up to 3 spot colors with multiply blend for new hues.",
          "icon": "🎨",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🎨 SPOT COLOR OVERLAY</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Mix up to 3 spot colors with multiply blend for new hues.</div></div>"
        },
        {
          "title": "PAPER GRAIN TEXTURE",
          "desc": "Cream substrate with static grain noise at 10–15% opacity.",
          "icon": "📄",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📄 PAPER GRAIN TEXTURE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Cream substrate with static grain noise at 10–15% opacity.</div></div>"
        }
      ],
      "ctaStripHeadline": "READY FOR A PROOF RUN?",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">SEND TO STENCIL</button>",
      "sidebarBrand": "RISO PROOF",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "COLOR DECK",
          "active": true
        },
        {
          "icon": "◉",
          "label": "LAYER STACK",
          "active": false
        },
        {
          "icon": "◉",
          "label": "MASTER SETUP",
          "active": false
        }
      ],
      "dashboardTitle": "PROOF SUITE",
      "metrics": [
        {
          "label": "DOT GAIN",
          "value": "12%",
          "delta": "+2%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "REGISTRATION OFFSET",
          "value": "1.8px",
          "delta": "-0.3px",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "INK COVERAGE",
          "value": "34%",
          "delta": "+5%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "PAGE COUNT",
          "value": "16",
          "delta": "0",
          "dir": "flat",
          "direction": "flat"
        }
      ],
      "chartTitle": "HALFTONE DENSITY",
      "panelATitle": "CURRENT LAYER",
      "panelARows": [
        {
          "label": "COLOR",
          "value": "FLUORESCENT PINK",
          "pct": 0
        },
        {
          "label": "ANGLE",
          "value": "45°",
          "pct": 45
        },
        {
          "label": "LPI",
          "value": "24",
          "pct": 24
        },
        {
          "label": "DOT SHAPE",
          "value": "ROUND",
          "pct": 0
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "SPOT COLOR INVENTORY",
      "panelBCells": [
        {
          "label": "NAVY",
          "value": "#001F3F",
          "state": "ok"
        },
        {
          "label": "PINK",
          "value": "#FF69B4",
          "state": "warn"
        },
        {
          "label": "GOLD",
          "value": "#FFD700",
          "state": "err"
        },
        {
          "label": "CREAM",
          "value": "#F5F0E8",
          "state": "ok"
        },
        {
          "label": "RED",
          "value": "#D32F2F",
          "state": "warn"
        },
        {
          "label": "CORAL",
          "value": "#FF7F50",
          "state": "err"
        },
        {
          "label": "MINT",
          "value": "#98FB98",
          "state": "ok"
        },
        {
          "label": "VIOLET",
          "value": "#EE82EE",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "PAPER-LEFT",
        "PAPER-CENTER",
        "PAPER-RIGHT",
        "DRUM-TOP",
        "DRUM-MID",
        "DRUM-BOTTOM"
      ],
      "series": [
        {
          "data": [
            22,
            34,
            28,
            45,
            52,
            38,
            38,
            38,
            38,
            38,
            38,
            38
          ],
          "label": "NAVY DENSITY",
          "axis": "left",
          "color": "#001F3F"
        },
        {
          "data": [
            18,
            29,
            24,
            41,
            48,
            33,
            33,
            33,
            33,
            33,
            33,
            33
          ],
          "label": "PINK DENSITY",
          "axis": "right-1",
          "color": "#FF69B4"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'min-height:480px;background:var(--bg);position:relative;display:flex;align-items:center;justify-content:center;padding:64px 32px;'; var wrapper = document.createElement('div'); wrapper.style.cssText = 'max-width:680px;width:100%;text-align:left;position:relative;'; var kicker = document.createElement('div'); kicker.style.cssText = 'font-family:var(--font-body);font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:var(--primary);margin-bottom:16px;'; kicker.textContent = 'TACTILE PRINT. DIGITAL PROOF.'; wrapper.appendChild(kicker); var headline = document.createElement('h1'); headline.style.cssText = 'font-family:var(--font-display);font-size:48px;font-weight:900;line-height:1;letter-spacing:-0.025em;text-transform:uppercase;color:var(--primary);margin:0 0 24px 0;text-shadow:2px 2px 0 var(--secondary-col);'; headline.textContent = 'SIMULATE YOUR RISO RUN'; wrapper.appendChild(headline); var sub = document.createElement('p'); sub.style.cssText = 'font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.625;color:var(--primary);margin:0 0 32px 0;']; sub.textContent = 'Preview misregistration, halftone dot density, and spot color overlap before you print.'; wrapper.appendChild(sub); var ctaWrap = document.createElement('div'); ctaWrap.style.cssText = 'display:flex;gap:16px;'; var cta1 = document.createElement('button'); cta1.style.cssText = 'background-color:var(--primary);color:var(--on-primary);border:2px solid var(--primary);border-radius:var(--radius-btn);padding:16px;font-family:var(--font-body);font-size:16px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;cursor:pointer;transition:all 200ms steps(1);position:relative;'; cta1.textContent = 'START PROOF'; cta1.onmouseenter = function(){ this.style.color = 'var(--secondary-col)'; this.style.textShadow = '2px 2px 0 var(--secondary-col)'; }; cta1.onmouseleave = function(){ this.style.color = 'var(--on-primary)'; this.style.textShadow = 'none'; }; ctaWrap.appendChild(cta1); var cta2 = document.createElement('button'); cta2.style.cssText = 'background-color:transparent;color:var(--primary);border:3px solid var(--primary);border-radius:var(--radius-btn);padding:16px;font-family:var(--font-body);font-size:16px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;cursor:pointer;transition:all 200ms steps(1);'; cta2.textContent = 'EXPLORE COLORS'; cta2.onmouseenter = function(){ this.style.color = 'var(--secondary-col)'; this.style.borderColor = 'var(--secondary-col)'; this.style.textShadow = '2px 2px 0 var(--secondary-col)'; }; cta2.onmouseleave = function(){ this.style.color = 'var(--primary)'; this.style.borderColor = 'var(--primary)'; this.style.textShadow = 'none'; }; ctaWrap.appendChild(cta2); wrapper.appendChild(ctaWrap); el.appendChild(wrapper); }",
    "showcaseRender": "function(el) { el.style.cssText = 'padding:48px 32px;background:var(--bg);'; var wrap = document.createElement('div'); wrap.style.cssText = 'max-width:960px;margin:0 auto;display:grid;grid-template-columns:repeat(2,1fr);gap:24px;'; var features = [ {title:'MISREGISTRATION SIMULATION',desc:'Offset color layers by 0.5–3px to mimic real drum drift.'}, {title:'HALFTONE DOT MASK',desc:'Apply 20–30 lpi radial dot patterns for tonal shading.'}, {title:'SPOT COLOR OVERLAY',desc:'Mix up to 3 spot colors with multiply blend for new hues.'}, {title:'PAPER GRAIN TEXTURE',desc:'Cream substrate with static grain noise at 10–15% opacity.'} ]; features.forEach(function(f){ var card = document.createElement('div'); card.style.cssText = 'min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;position:relative;overflow:hidden;'; var title = document.createElement('div'); title.style.cssText = 'font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);text-shadow:1px 1px 0 var(--secondary-col);'; title.textContent = f.title; card.appendChild(title); var desc = document.createElement('div'); desc.style.cssText = 'font-size:12px;line-height:1.55;color:var(--on-bg-muted);'; desc.textContent = f.desc; card.appendChild(desc); wrap.appendChild(card); }); el.appendChild(wrap); }",
    "panelCRender": "function(el) { el.style.cssText = 'padding:32px;background:var(--bg);border:1px solid var(--border);position:relative;overflow:hidden;'; var offsetBg = document.createElement('div'); offsetBg.style.cssText = 'position:absolute;top:2px;left:-2px;width:100%;height:100%;background:var(--secondary-col);mix-blend-mode:multiply;pointer-events:none;opacity:0.15;'; el.appendChild(offsetBg); var header = document.createElement('div'); header.style.cssText = 'font-family:var(--font-display);font-size:20px;font-weight:700;text-transform:uppercase;color:var(--primary);margin-bottom:16px;text-shadow:1px 1px 0 var(--secondary-col);'; header.textContent = 'PROOF SUITE'; el.appendChild(header); var metricsWrap = document.createElement('div'); metricsWrap.style.cssText = 'display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-bottom:24px;'; var metrics = [{label:'DOT GAIN',value:'12%',delta:'+2%',dir:'up'},{label:'REGISTRATION OFFSET',value:'1.8px',delta:'-0.3px',dir:'down'},{label:'INK COVERAGE',value:'34%',delta:'+5%',dir:'up'},{label:'PAGE COUNT',value:'16',delta:'0',dir:'flat'}]; metrics.forEach(function(m){ var box = document.createElement('div'); box.style.cssText = 'border:1px solid var(--border);padding:16px;background:var(--surface);'; var lab = document.createElement('div'); lab.style.cssText = 'font-family:var(--font-body);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:var(--on-bg-muted);margin-bottom:4px;'; lab.textContent = m.label; box.appendChild(lab); var val = document.createElement('div'); val.style.cssText = 'font-family:var(--font-display);font-size:24px;font-weight:900;color:var(--primary);'; val.textContent = m.value; box.appendChild(val); var del = document.createElement('div'); del.style.cssText = 'font-family:var(--font-body);font-size:14px;font-weight:700;color:' + (m.dir==='up'?'var(--success)':m.dir==='down'?'var(--error)':'var(--on-bg-muted)') + ';'; del.textContent = m.delta; box.appendChild(del); metricsWrap.appendChild(box); }); el.appendChild(metricsWrap); var chartTitle = document.createElement('div'); chartTitle.style.cssText = 'font-family:var(--font-display);font-size:16px;font-weight:700;text-transform:uppercase;color:var(--primary);margin-bottom:8px;text-shadow:1px 1px 0 var(--secondary-col);'; chartTitle.textContent = 'HALFTONE DENSITY'; el.appendChild(chartTitle); var chartPlaceholder = document.createElement('div'); chartPlaceholder.style.cssText = 'height:120px;background:var(--surface);border:1px solid var(--border);position:relative;overflow:hidden;'; var bar1 = document.createElement('div'); bar1.style.cssText = 'position:absolute;bottom:0;left:10%;width:30%;height:60%;background:var(--primary);'; chartPlaceholder.appendChild(bar1); var bar2 = document.createElement('div'); bar2.style.cssText = 'position:absolute;bottom:0;left:60%;width:30%;height:80%;background:var(--secondary-col);mix-blend-mode:multiply;'; chartPlaceholder.appendChild(bar2); el.appendChild(chartPlaceholder); }",
    "heroBackground": "function(el) { el.style.background = 'var(--bg)'; var grain = document.createElement('div'); grain.style.cssText = 'position:absolute;inset:0;pointer-events:none;opacity:0.12;mix-blend-mode:multiply;background-image:url(\"data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'noise\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.7\\' numOctaves=\\'3\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23noise)\\'-%3E%3C/rect%3E%3C/svg%3E\");background-size:200px 200px;'; el.appendChild(grain); }",
    "ctaBackground": "function(el) { el.style.background = 'var(--primary)'; var offset = document.createElement('div'); offset.style.cssText = 'position:absolute;inset:0;background:var(--secondary-col);mix-blend-mode:multiply;top:2px;left:2px;'; el.appendChild(offset); var halftone = document.createElement('div'); halftone.style.cssText = 'position:absolute;inset:0;pointer-events:none;background:radial-gradient(circle,rgba(255,255,255,0.08) 2px,transparent 2px);background-size:6px 6px;'; el.appendChild(halftone); }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'height:8px;background:var(--primary);position:relative;'; var offset = document.createElement('div'); offset.style.cssText = 'height:8px;background:var(--secondary-col);mix-blend-mode:multiply;position:absolute;top:1px;left:2px;width:100%;'; d.appendChild(offset); return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = 'var(--bg)'; var grain = document.createElement('div'); grain.style.cssText = 'position:absolute;inset:0;pointer-events:none;opacity:0.1;mix-blend-mode:multiply;background-image:url(\"data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'noise\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.75\\' numOctaves=\\'3\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23noise)\\'-%3E%3C/rect%3E%3C/svg%3E\");background-size:150px 150px;'; el.appendChild(grain); var regMark = document.createElement('div'); regMark.style.cssText = 'position:absolute;bottom:16px;right:16px;width:24px;height:24px;border:2px solid var(--primary);'; var inner = document.createElement('div'); inner.style.cssText = 'position:absolute;top:2px;left:2px;width:20px;height:20px;border:2px solid var(--secondary-col);mix-blend-mode:multiply;'; regMark.appendChild(inner); el.appendChild(regMark); }",
    "surfaceOverlay": "function(el) { var ov = document.createElement('div'); ov.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;background:radial-gradient(circle,rgba(0,31,63,0.06) 2px,transparent 2px);background-size:6px 6px;'; el.appendChild(ov); var grain2 = document.createElement('div'); grain2.style.cssText = 'position:absolute;inset:0;pointer-events:none;opacity:0.08;mix-blend-mode:multiply;background:repeating-conic-gradient(rgba(0,31,63,0.03) 0% 25%,transparent 0% 50%) 0 0 / 4px 4px;'; el.appendChild(grain2); }"
  },
  "ambientCanvas": "function(tick) { var canvas = document.createElement('div'); canvas.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:9999;overflow:hidden;opacity:0.08;'; var offset = (tick % 4) * 0.5; var layer1 = document.createElement('div'); layer1.style.cssText = 'position:absolute;top:'+(-offset)+'px;left:'+offset+'px;width:100%;height:100%;background:var(--primary);mix-blend-mode:multiply;'; var layer2 = document.createElement('div'); layer2.style.cssText = 'position:absolute;top:'+(offset)+'px;left:'+(-offset)+'px;width:100%;height:100%;background:var(--secondary-col);mix-blend-mode:multiply;'; canvas.appendChild(layer1); canvas.appendChild(layer2); return canvas; }",
  "shadcnTokens": {
    "--color-background": "#F5F0E8",
    "--color-popover": "#F5F0E8",
    "--color-foreground": "#001F3F",
    "--color-card-foreground": "#001F3F",
    "--color-popover-foreground": "#001F3F",
    "--color-card": "#F5F0E8",
    "--color-muted": "#F5F0E8",
    "--color-muted-foreground": "#2A4A6A",
    "--color-primary": "#001F3F",
    "--color-ring": "#001F3F",
    "--color-primary-foreground": "#F5F0E8",
    "--color-secondary": "#FF69B4",
    "--color-accent": "#FF69B4",
    "--color-secondary-foreground": "#001F3F",
    "--color-accent-foreground": "#001F3F",
    "--color-border": "#001F3F",
    "--color-input": "#001F3F",
    "--color-destructive": "#D32F2F"
  },
  "shadcnTokensClassic": {
    "--background": "#F5F0E8",
    "--popover": "#F5F0E8",
    "--foreground": "#001F3F",
    "--card-foreground": "#001F3F",
    "--popover-foreground": "#001F3F",
    "--card": "#F5F0E8",
    "--muted": "#F5F0E8",
    "--muted-foreground": "#2A4A6A",
    "--primary": "#001F3F",
    "--ring": "#001F3F",
    "--primary-foreground": "#F5F0E8",
    "--secondary": "#FF69B4",
    "--accent": "#FF69B4",
    "--secondary-foreground": "#001F3F",
    "--accent-foreground": "#001F3F",
    "--border": "#001F3F",
    "--input": "#001F3F",
    "--destructive": "#D32F2F"
  }
});
