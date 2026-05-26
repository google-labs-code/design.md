registerSystem({
  "meta": {
    "name": "Letterpress",
    "tagline": "A digital UI style translating the physical grit of movable type—deep impression, uneven ink spread, and tangible paper weight—into screen-based interaction.",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,700;1,400&family=Roboto+Slab:wght@400;700&display=swap"
  },
  "yamlTokens": {
    "name": "Letterpress",
    "colors": {
      "primary": "#1A1A1A",
      "on-primary": "#F5F0E6",
      "secondary": "#E34234",
      "on-secondary": "#F5F0E6",
      "surface": "#F5F0E6",
      "on-surface": "#1A1A1A",
      "surface-variant": "#EDE6D9",
      "outline": "#1A1A1A"
    },
    "typography": {
      "display": {
        "fontFamily": "Roboto Slab",
        "fontSize": "64px",
        "fontWeight": 700,
        "lineHeight": 1.1,
        "letterSpacing": "-0.01em"
      },
      "headline": {
        "fontFamily": "Roboto Slab",
        "fontSize": "48px",
        "fontWeight": 700,
        "lineHeight": 1.2,
        "letterSpacing": "0em"
      },
      "title": {
        "fontFamily": "Roboto Slab",
        "fontSize": "32px",
        "fontWeight": 700,
        "lineHeight": 1.3,
        "letterSpacing": "0em"
      },
      "body": {
        "fontFamily": "Crimson Text",
        "fontSize": "16px",
        "fontWeight": 400,
        "lineHeight": 1.6,
        "letterSpacing": "0em"
      },
      "label": {
        "fontFamily": "Crimson Text",
        "fontSize": "12px",
        "fontWeight": 400,
        "lineHeight": 1.4,
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
      "section-gap": "32px",
      "component-gap": "16px",
      "padding-internal": "24px",
      "padding-page-edge": "96px",
      "height-sm": "32px",
      "height-md": "48px",
      "height-lg": "56px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "{colors.primary}",
        "textColor": "{colors.on-primary}",
        "rounded": "{rounded.button}",
        "padding": "8px"
      },
      "button-primary-hover": {
        "backgroundColor": "#1A1A1A",
        "textColor": "#F5F0E6",
        "padding": "8px"
      },
      "card": {
        "backgroundColor": "{colors.surface-variant}",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "input": {
        "backgroundColor": "transparent",
        "rounded": "{rounded.input}",
        "padding": "8px"
      },
      "input-focus": {
        "backgroundColor": "transparent",
        "rounded": "{rounded.input}"
      },
      "ornamental-rule": {
        "backgroundColor": "{colors.primary}",
        "height": "4px"
      },
      "fleuron-badge": {
        "backgroundColor": "{colors.secondary}",
        "textColor": "{colors.on-secondary}",
        "rounded": "{rounded.chip}",
        "size": "24px"
      },
      "plate-mark": {
        "backgroundColor": "transparent",
        "rounded": "{rounded.default}"
      }
    },
    "version": "alpha",
    "description": "A digital UI style that translates the physical grit of movable type—deep impression, uneven ink spread, and tangible paper weight—into screen-based interaction. The emotional tone is warm, honest, and grounded, evoking 19th-century commercial printing with modern restraint.",
    "provenance": {
      "coverage_status": "complete",
      "identity_description": "The slug `letterpress` is ambiguous. Three of four providers (crof-deepseek-v4-pro-precision, crof-glm-5.1-precision, crof-kimi-k2.6-precision) interpret it as referring to the visual identity of the Kelmscott Press (1891–1898), the private press founded by William Morris, as the most thoroughly documented, influential letterpress identity. The fourth provider (zai) interprets the slug as refe",
      "manual_enrichment_required": false,
      "imagery_count": 6,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "www.bl.uk",
          "count": 1
        },
        {
          "host": "www.vam.ac.uk",
          "count": 1
        },
        {
          "host": "www.wmgallery.org.uk",
          "count": 1
        },
        {
          "host": "www.bodleian.ox.ac.uk",
          "count": 1
        },
        {
          "host": "en.wikipedia.org",
          "count": 1
        },
        {
          "host": "commons.wikimedia.org",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://www.bl.uk/stories",
          "host": "www.bl.uk",
          "institution": "British Library",
          "confidence_original": "low"
        },
        {
          "url": "https://www.vam.ac.uk/errors/404.html",
          "host": "www.vam.ac.uk",
          "institution": "Victoria and Albert Museum",
          "confidence_original": "low"
        },
        {
          "url": "https://www.wmgallery.org.uk/collection/",
          "host": "www.wmgallery.org.uk",
          "institution": "William Morris Gallery, Walthamstow",
          "confidence_original": "low"
        },
        {
          "url": "https://www.bodleian.ox.ac.uk/",
          "host": "www.bodleian.ox.ac.uk",
          "institution": "Bodleian Libraries, Oxford",
          "confidence_original": "low"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Kelmscott_Press",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia",
          "confidence_original": "high"
        },
        {
          "url": "https://commons.wikimedia.org/wiki/Category:Kelmscott_Press",
          "host": "commons.wikimedia.org",
          "institution": "Wikimedia Commons",
          "confidence_original": "high"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Golden Type",
          "foundry": "Edward Prince",
          "year": 1891,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "unknown"
        },
        {
          "name": "Troy Type",
          "foundry": null,
          "year": 1892,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "unknown"
        },
        {
          "name": "Chaucer Type",
          "foundry": null,
          "year": 1896,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "unknown"
        }
      ],
      "flags": {},
      "honest_gaps": [
        "1. **Colour specifications** — no attested hex, CIELAB, Pantone, or ink formula values. All hex approximations are [unverified]."
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#F5F0E6",
    "--on-bg": "#1A1A1A",
    "--primary": "#1A1A1A",
    "--on-primary": "#F5F0E6",
    "--secondary-col": "#E34234",
    "--on-secondary": "#F5F0E6",
    "--surface": "#EDE6D9",
    "--on-bg-muted": "#4A4A4A",
    "--border": "#1A1A1A",
    "--error": "#C62828",
    "--font-display": "Crimson Text",
    "--font-body": "Crimson Text",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "warn": "#FF8C42",
    "ok": "#22C55E",
    "err": "#C62828",
    "deltaUp": "#22C55E",
    "deltaDown": "#C62828",
    "deltaFlat": "#4A4A4A",
    "live": "#1A1A1A",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#4A4A4A",
    "chartFont": "Crimson Text"
  },
  "chartStyle": {
    "palette": [
      "#1A1A1A",
      "#E34234"
    ],
    "backgroundColor": "transparent",
    "grid": {
      "color": "transparent"
    },
    "series": {
      "line": {
        "stroke": "#1A1A1A",
        "strokeWidth": 2
      },
      "bar": {
        "fill": "#1A1A1A"
      },
      "label": {
        "fontFamily": "var(--font-body)",
        "fontSize": "12px",
        "textTransform": "uppercase",
        "letterSpacing": "0.05em"
      }
    },
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#4A4A4A",
    "fontFamily": "Crimson Text"
  },
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "paper",
    "params": {
      "substrate": "uncoated paper with visible grain and absorbency",
      "textureOverlay": {
        "technique": "SVG feTurbulence",
        "filterId": "letterpress-paper-grain",
        "blend": "multiply",
        "opacity": 0.2
      },
      "inkSpread": {
        "technique": "text-shadow blur",
        "blurRadius": "0.5px",
        "opacity": 0.15
      },
      "impressionShadow": {
        "technique": "box-shadow offset",
        "offset": "1px 1px",
        "blur": "0.5px",
        "opacity": 0.15,
        "color": "#1A1A1A",
        "hover": {
          "offset": "2px 2px",
          "blur": "1px",
          "opacity": 0.25
        },
        "active": {
          "offset": "-1px -1px",
          "blur": "0.5px",
          "opacity": 0.2
        }
      }
    }
  },
  "interactionModel": {
    "hover": {
      "shadow": "2px 2px 1px rgba(26,26,26,0.25)",
      "transition": "150ms ease-out"
    },
    "focus": {
      "outline": "1px solid var(--secondary-col)",
      "outlineOffset": "2px"
    },
    "active": {
      "shadow": "-1px -1px 0.5px rgba(26,26,26,0.2)",
      "transition": "150ms ease-out"
    }
  },
  "interactionStyles": ".ds-layout-frame button, .ds-layout-frame a, .ds-layout-frame .interactive { transition: box-shadow 150ms ease-out, text-shadow 150ms ease-out; box-shadow: 1px 1px 0.5px rgba(26,26,26,0.15); } .ds-layout-frame button:hover, .ds-layout-frame a:hover, .ds-layout-frame .interactive:hover { box-shadow: 2px 2px 1px rgba(26,26,26,0.25); } .ds-layout-frame button:active, .ds-layout-frame a:active, .ds-layout-frame .interactive:active { box-shadow: -1px -1px 0.5px rgba(26,26,26,0.2); } .ds-layout-frame button:focus, .ds-layout-frame a:focus, .ds-layout-frame .interactive:focus { outline: 1px solid var(--secondary-col); outline-offset: 2px; }",
  "globalFilter": "<svg xmlns=\"http://www.w3.org/2000/svg\"><defs><filter id=\"letterpress-paper-grain\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.72\" numOctaves=\"3\" result=\"noise\"/><feColorMatrix type=\"matrix\" values=\"0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0 0 0 1 0\" in=\"noise\" result=\"grayNoise\"/></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-body); background-color: var(--bg); color: var(--on-bg); margin: 0; filter: sepia(0.05) brightness(0.98) contrast(1.02);",
  "globalCss": ".ds-layout-frame { position: relative; } .ds-layout-frame::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 9999; mix-blend-mode: multiply; opacity: 0.2; background: transparent; filter: url(#letterpress-paper-grain); } .ds-layout-frame p, .ds-layout-frame h1, .ds-layout-frame h2, .ds-layout-frame h3, .ds-layout-frame h4, .ds-layout-frame h5, .ds-layout-frame h6, .ds-layout-frame label, .ds-layout-frame a, .ds-layout-frame span, .ds-layout-frame li { text-shadow: 0 0 0.5px var(--primary), 1px 1px 0.5px rgba(26,26,26,0.15); }",
  "spacing": {
    "sectionGap": "32px",
    "componentGap": "16px",
    "paddingInternal": "24px",
    "paddingPageEdge": "96px",
    "heightSm": "32px",
    "heightMd": "48px",
    "heightLg": "56px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "0px"
  },
  "elevation": {
    "impression": {
      "offset": "1px 1px",
      "blur": "0.5px",
      "color": "rgba(26,26,26,0.15)",
      "hover": {
        "offset": "2px 2px",
        "blur": "1px",
        "color": "rgba(26,26,26,0.25)"
      },
      "active": {
        "offset": "-1px -1px",
        "blur": "0.5px",
        "color": "rgba(26,26,26,0.2)"
      }
    },
    "stacking": "none (single plane)"
  },
  "dashboardStyle": {
    "layout": "Generous margins (24px minimum, 96px on desktop), low content density, left-aligned headings and table cells.",
    "density": "Low—adequate padding between rows and sections; no compact views.",
    "panelTreatment": "Cards use the 'Plate Mark Element' treatment (faint inset outline) with impression shadow; no rounded corners.",
    "dataVizStyle": "Charts use only primary (#1A1A1A) and secondary (#E34234) colours, no grid lines, minimal axis labels in uppercase label style.",
    "signatureElement": "Ornamental rules separate dashboard sections; a fleuron badge marks the active filter."
  },
  "landingStyle": {
    "heroApproach": "Full-width hero with large display headline in Arvo, left-aligned, with impression shadow. Spacious padding (96px sides, 48px top). Subtitle in Crimson Text italic.",
    "scrollBehavior": "Smooth with generous white space; sections separated by thick ornamental rules.",
    "ctaStyle": "Primary button (solid black) with uppercase label, impression shadow, set in display font.",
    "signatureMoment": "A large fleuron (❦) in vermilion at the bottom of the hero, acting as a printer's mark."
  },
  "buttons": [
    {
      "name": "Primary Button",
      "desc": "Solid ink-black button with impression shadow. Sharp corners, uppercase label in display type.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"button\" style=\"background-color: var(--primary); color: var(--on-primary); border: none; border-radius: var(--radius-btn); padding: 8px 24px; font-family: var(--font-display); font-size: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; cursor: pointer; box-shadow: 1px 1px 0.5px rgba(26,26,26,0.15);\">Set Type</button>",
      "label": "Primary Button",
      "note": "Solid ink-black button with impression shadow. Sharp corners, uppercase label in display type."
    },
    {
      "name": "Secondary Button",
      "desc": "Vermilion ink button, same treatment as primary but with secondary colour. Hover deepens shadow, active recesses.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"button\" style=\"background-color: var(--secondary-col); color: var(--on-secondary); border: none; border-radius: var(--radius-btn); padding: 8px 24px; font-family: var(--font-display); font-size: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; cursor: pointer; box-shadow: 1px 1px 0.5px rgba(227,66,52,0.2);\">Pull Proof</button>",
      "label": "Secondary Button",
      "note": "Vermilion ink button, same treatment as primary but with secondary colour. Hover deepens shadow, active recesses."
    },
    {
      "name": "Ghost Button",
      "desc": "Outlined button with transparent fill, ink border, and impression shadow on text label.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"button\" style=\"background-color: transparent; color: var(--primary); border: 1px solid var(--border); border-radius: var(--radius-btn); padding: 7px 23px; font-family: var(--font-display); font-size: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; cursor: pointer; box-shadow: 0 0 0 0 rgba(26,26,26,0);\">Compose</button>",
      "label": "Ghost Button",
      "note": "Outlined button with transparent fill, ink border, and impression shadow on text label."
    }
  ],
  "cards": [
    {
      "name": "Standard Card",
      "desc": "Panel in surface-variant paper tone with zero border-radius, impression shadow, and a subtle inset plate-mark outline.",
      "html": "<div style=\"background-color: var(--surface); border-radius: var(--radius-card); padding: var(--spacing-padding-internal); box-shadow: 1px 1px 0.5px rgba(26,26,26,0.15), inset 0 0 0 1px rgba(26,26,26,0.08); font-family: var(--font-body); color: var(--on-bg);\"><h3 style=\"font-family: var(--font-display); font-size: 24px; margin: 0 0 8px 0; text-shadow: 0.5px 0.5px 0.5px rgba(26,26,26,0.1);\">Furniture</h3><p style=\"margin: 0; line-height: 1.6;\">The spacing material used to fill blank areas—always generous.</p></div>",
      "label": "Standard Card",
      "note": "Panel in surface-variant paper tone with zero border-radius, impression shadow, and a subtle inset plate-mark outline."
    },
    {
      "name": "Card with Fleuron",
      "desc": "Same as standard card but with a printer's flower (fleuron) badge in the upper-right corner to add decorative ink weight.",
      "html": "<div style=\"background-color: var(--surface); border-radius: var(--radius-card); padding: var(--spacing-padding-internal); box-shadow: 1px 1px 0.5px rgba(26,26,26,0.15), inset 0 0 0 1px rgba(26,26,26,0.08); font-family: var(--font-body); color: var(--on-bg); position: relative;\"><span style=\"position: absolute; top: 8px; right: 8px; background-color: var(--secondary-col); color: var(--on-secondary); width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-size: 14px; font-family: var(--font-display);\">❦</span><h3 style=\"font-family: var(--font-display); font-size: 24px; margin: 0 0 8px 0; text-shadow: 0.5px 0.5px 0.5px rgba(26,26,26,0.1);\">Printer's Flower</h3><p style=\"margin: 0; line-height: 1.6;\">A decorative ornament cast as type.</p></div>",
      "label": "Card with Fleuron",
      "note": "Same as standard card but with a printer's flower (fleuron) badge in the upper-right corner to add decorative ink weight."
    }
  ],
  "forms": [
    {
      "name": "Text Input",
      "desc": "Single-line text field with transparent background, ink border, and impression shadow on focus.",
      "html": "<input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" placeholder=\"Set copy\" style=\"background-color: transparent; border: 1px solid var(--border); border-radius: var(--radius-input); padding: 8px 12px; font-family: var(--font-body); font-size: 16px; color: var(--on-bg); box-shadow: none; outline: none; width: 100%;\" />",
      "label": "Text Input",
      "stateLabel": "Single-line text field with transparent background, ink border, and impression shadow on focus."
    },
    {
      "name": "Select Dropdown",
      "desc": "Native select styled with transparent background, ink border, and uppercase label.",
      "html": "<select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: transparent; border: 1px solid var(--border); border-radius: var(--radius-input); padding: 8px 12px; font-family: var(--font-body); font-size: 16px; color: var(--on-bg); width: 100%; -webkit-appearance: none; appearance: none;\"><option>Choose typeface</option><option>Clarendon</option><option>Miller</option></select>",
      "label": "Select Dropdown",
      "stateLabel": "Native select styled with transparent background, ink border, and uppercase label."
    },
    {
      "name": "Checkbox",
      "desc": "Custom checkbox using secondary ink for checked state, with square shape and impression shadow.",
      "html": "<label style=\"font-family: var(--font-body); font-size: 16px; display: flex; align-items: center; gap: 8px; cursor: pointer;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"width: 18px; height: 18px; border: 1px solid var(--border); border-radius: 0; -webkit-appearance: none; appearance: none; background: transparent; cursor: pointer; position: relative; box-shadow: 0.5px 0.5px 0.5px rgba(26,26,26,0.1);\"> <span>Set in roman</span></label>",
      "label": "Checkbox",
      "stateLabel": "Custom checkbox using secondary ink for checked state, with square shape and impression shadow."
    }
  ],
  "extraComponents": [
    {
      "name": "Ornamental Rule",
      "desc": "Horizontal divider made of a thick black line with a centered fleuron character. Impression shadow on the rule.",
      "html": "<div style=\"display: flex; align-items: center; justify-content: center; margin: 32px 0;\"><div style=\"flex: 1; height: 4px; background-color: var(--primary); box-shadow: 1px 1px 0.5px rgba(26,26,26,0.15);\"></div><span style=\"background-color: var(--surface); padding: 0 16px; font-size: 24px; color: var(--primary); font-family: var(--font-display);\">❦</span><div style=\"flex: 1; height: 4px; background-color: var(--primary); box-shadow: 1px 1px 0.5px rgba(26,26,26,0.15);\"></div></div>"
    },
    {
      "name": "Fleuron Badge",
      "desc": "Small 24×24 square badge with secondary background, white fleuron character, and impression shadow.",
      "html": "<div style=\"display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; background-color: var(--secondary-col); color: var(--on-secondary); font-size: 14px; font-family: var(--font-display); box-shadow: 0.5px 0.5px 0.5px rgba(227,66,52,0.2);\">❦</div>"
    },
    {
      "name": "Plate Mark Element",
      "desc": "Faint rectangular outline simulating the impression of a printing plate. Used around content areas.",
      "html": "<div style=\"border: none; box-shadow: inset 0 0 0 1px rgba(26,26,26,0.12); padding: 24px; background-color: transparent; border-radius: 0;\"><p style=\"margin: 0; font-family: var(--font-body); color: var(--on-bg);\">In margin of plate</p></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — Kelmscott Press</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — The Ideal Book</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — A Note on Founding</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — Thus the printer must have a natural and cultivated sense of beauty. His work should be such that a blind man could feel the letterpress and know it was well set.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — IMPRINT · 1892</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Avoid rounded corners — they destroy the crisp physical edge of type. Every corner must be 0.",
      "avoid": {
        "html": "<button style=\"border-radius: 8px; background-color: #1A1A1A; color: white; padding: 8px 16px;\">Wrong</button>",
        "label": "Avoid"
      },
      "rule": "Avoid rounded corners — they destroy the crisp physical edge of type. Every corner must be 0.",
      "do": {
        "label": "Do",
        "html": "<div style=\"background:var(--bg); color:var(--primary); padding:16px; font-family:var(--font-body); box-shadow:1px 1px 0.5px rgba(26,26,26,0.15); border:none; border-radius:0; text-align:left;\">Set in metal type</div>"
      }
    },
    {
      "desc": "Never use pure white (#FFFFFF) or pure black (#000000). The paper must be warm (#F5F0E6) and the ink dense but not solid (#1A1A1A).",
      "avoid": {
        "html": "<div style=\"background-color: #FFFFFF; color: #000000; padding: 16px;\">Too clean</div>",
        "label": "Avoid"
      },
      "rule": "Never use pure white (#FFFFFF) or pure black (#000000). The paper must be warm (#F5F0E6) and the ink dense but not solid (#1A1A1A).",
      "do": {
        "label": "Do",
        "html": "<div style=\"background:#F5F0E6; color:#1A1A1A; padding:16px; font-family:var(--font-body); box-shadow:1px 1px 0.5px rgba(26,26,26,0.15); border:none; border-radius:0; text-align:left;\">Warm paper, dense ink</div>"
      }
    },
    {
      "desc": "Do not centre or justify body text. Always left-align with ragged right margins.",
      "avoid": {
        "html": "<p style=\"text-align: center; font-family: Crimson Text;\">This is wrong.</p>",
        "label": "Avoid"
      },
      "rule": "Do not centre or justify body text. Always left-align with ragged right margins.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Never use more than two ink colours plus paper tone. The palette is bone black and vermilion only.",
      "avoid": {
        "html": "<div style=\"background-color: #F5F0E6; color: #0077BE; padding: 16px;\">Blue ink not allowed</div>",
        "label": "Avoid"
      },
      "rule": "Never use more than two ink colours plus paper tone. The palette is bone black and vermilion only.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "doAvoidStyle": {
    "desc": "Do not apply rounded corners, gradient fills, semi-transparent overlays, pure white/black, centre-aligned text, or more than two colours. Keep all surfaces textured with paper grain (via SVG feTurbulence)."
  },
  "effects": [],
  "motion": [],
  "layouts": {
    "copy": {
      "heroKicker": "Letterpress Workspace",
      "heroHeadline": "The Art of Impression",
      "heroSub": "Manage your forme, track your stock, and proof every pull. A digital studio built for the tactile craft of movable type.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#1A1A1A;color:#F5F0E6;border:none;font-family:Crimson Text;font-size:12px;letter-spacing:0.05em;text-transform:uppercase;padding:8px 16px;box-shadow:1px 1px 0.5px rgba(26,26,26,0.15);\">Start Your Forme</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:transparent;color:#1A1A1A;border:2px solid #1A1A1A;font-family:Crimson Text;font-size:12px;letter-spacing:0.05em;text-transform:uppercase;padding:8px 16px;box-shadow:1px 1px 0.5px rgba(26,26,26,0.15);\">View Sample Sheets</button>",
      "navLinks": [
        "CHASE",
        "FURNITURE",
        "FORME",
        "PROOF",
        "STONES"
      ],
      "features": [
        {
          "title": "Type Case Inventory",
          "desc": "Track every sort—upper, lower, ligatures, and ornaments—with precise counts and reorder thresholds.",
          "icon": "📜",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📜 Type Case Inventory</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Track every sort—upper, lower, ligatures, and ornaments—with precise counts and reorder thresholds.</div></div>"
        },
        {
          "title": "Ink Mix Log",
          "desc": "Record pigment ratios, tack, and body. Each batch is linked to its proof for colour consistency.",
          "icon": "🖌️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🖌️ Ink Mix Log</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Record pigment ratios, tack, and body. Each batch is linked to its proof for colour consistency.</div></div>"
        },
        {
          "title": "Impression Simulator",
          "desc": "Preview your forme under adjustable packing, cylinder pressure, and paper grain orientation.",
          "icon": "🔍",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔍 Impression Simulator</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Preview your forme under adjustable packing, cylinder pressure, and paper grain orientation.</div></div>"
        },
        {
          "title": "Proof Approval Chain",
          "desc": "Route pulls through client review with digital annotations that preserve the impression shadow.",
          "icon": "✅",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">✅ Proof Approval Chain</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Route pulls through client review with digital annotations that preserve the impression shadow.</div></div>"
        }
      ],
      "ctaStripHeadline": "Set Up Your First Forme",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#1A1A1A;color:#F5F0E6;border:none;font-family:Crimson Text;font-size:12px;letter-spacing:0.05em;text-transform:uppercase;padding:8px 16px;box-shadow:1px 1px 0.5px rgba(26,26,26,0.15);\">Compose a New Job</button>",
      "sidebarBrand": "KELMSCOTT DIRECTOR",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "SHOP FLOOR",
          "active": true
        },
        {
          "icon": "◉",
          "label": "STOCK ROOM",
          "active": false
        }
      ],
      "dashboardTitle": "Press Dashboard",
      "metrics": [
        {
          "label": "JOBS SET",
          "value": "14",
          "delta": "+3",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "TYPE CASES",
          "value": "18",
          "delta": "0",
          "dir": "neutral",
          "direction": "neutral"
        },
        {
          "label": "SHEETS PRINTED",
          "value": "2,840",
          "delta": "+18%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "INKS IN STOCK",
          "value": "12",
          "delta": "-1",
          "dir": "down",
          "direction": "down"
        }
      ],
      "chartTitle": "Production per Press Run",
      "panelATitle": "Recent Proofs",
      "panelARows": [
        {
          "label": "P22 / Broadside No. 4",
          "value": "Approved",
          "pct": 0
        },
        {
          "label": "P21 / Chapbook Insert",
          "value": "In Review",
          "pct": 0
        },
        {
          "label": "P19 / Ornament Specimen",
          "value": "Needs Revision",
          "pct": 0
        },
        {
          "label": "P18 / Business Card Set",
          "value": "Ready for Print",
          "pct": 0
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "Type Case Details — Caslon No. 471",
      "panelBCells": [
        {
          "label": "UPPERCASE A–M",
          "value": "86 sorts",
          "state": "ok"
        },
        {
          "label": "UPPERCASE N–Z",
          "value": "73 sorts",
          "state": "warn"
        },
        {
          "label": "LOWERCASE A–M",
          "value": "212 sorts",
          "state": "err"
        },
        {
          "label": "LOWERCASE N–Z",
          "value": "187 sorts",
          "state": "ok"
        },
        {
          "label": "LIGATURES & LOGOS",
          "value": "24 sorts",
          "state": "warn"
        },
        {
          "label": "FIGURES & FRACTIONS",
          "value": "32 sorts",
          "state": "err"
        },
        {
          "label": "POINTS & SPACES",
          "value": "56 pieces",
          "state": "ok"
        },
        {
          "label": "FLEURONS & ORNAMENTS",
          "value": "18 pieces",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
      ],
      "series": [
        {
          "data": [
            320,
            410,
            380,
            290,
            510,
            340,
            340,
            340,
            340,
            340,
            340,
            340
          ],
          "label": "Sheets Pulled",
          "axis": "left",
          "color": "#1A1A1A"
        },
        {
          "data": [
            12,
            18,
            9,
            14,
            21,
            11,
            11,
            11,
            11,
            11,
            11,
            11
          ],
          "label": "Waste Sheets",
          "axis": "right-1",
          "color": "#E34234"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = \\x27min-height:480px; padding:96px 96px 48px; background:var(--bg); display:flex; flex-direction:column; justify-content:center; align-items:flex-start; text-align:left;\\x27; el.innerHTML = \\x27<div style=\"max-width:720px;\"><h1 style=\"font-family:var(--font-display); font-size:64px; font-weight:700; line-height:1.1; letter-spacing:-0.01em; color:var(--primary); margin:0 0 16px; text-shadow:1px 1px 0.5px rgba(26,26,26,0.15);\">The Art of Impression</h1><p style=\"font-family:var(--font-body); font-size:16px; line-height:1.6; color:var(--on-bg-muted); margin:0 0 32px; max-width:480px;\">Manage your forme, track your stock, and proof every pull. A digital studio built for the tactile craft of movable type.</p><div style=\"display:flex; gap:16px;\"><button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#1A1A1A;color:#F5F0E6;border:none;font-family:var(--font-display);font-size:12px;letter-spacing:0.05em;text-transform:uppercase;padding:8px 16px;box-shadow:1px 1px 0.5px rgba(26,26,26,0.15);\">Start Your Forme</button><button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:transparent;color:#1A1A1A;border:2px solid #1A1A1A;font-family:var(--font-display);font-size:12px;letter-spacing:0.05em;text-transform:uppercase;padding:8px 16px;box-shadow:1px 1px 0.5px rgba(26,26,26,0.15);\">View Sample Sheets</button></div><div style=\"margin-top:48px; font-size:36px; color:var(--secondary-col); font-family:var(--font-display);\">❦</div></div>\\x27; }",
    "showcaseRender": "function(el) { el.style.cssText = 'display:flex; flex-wrap:wrap; gap:16px; padding:48px 96px; background:var(--bg);'; var html = []; for(var i=0;i<4;i++){ html.push('<div style=\"flex:1 1 240px; min-width:200px;\">'+'<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📜 '+(i===0?'Type Case Inventory':i===1?'Ink Mix Log':i===2?'Impression Simulator':'Proof Approval Chain')+'</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">'+(i===0?'Track every sort—upper, lower, ligatures, and ornaments—with precise counts and reorder thresholds.':i===1?'Record pigment ratios, tack, and body. Each batch is linked to its proof for colour consistency.':i===2?'Preview your forme under adjustable packing, cylinder pressure, and paper grain orientation.':'Route pulls through client review with digital annotations that preserve the impression shadow.')+'</div></div></div>');} el.innerHTML = html.join(''); }",
    "panelCRender": "function(el) { el.style.cssText = 'padding:24px 96px; background:var(--bg);'; var cells = [ {label:'UPPERCASE A–M', value:'86 sorts', state:'ok'}, {label:'UPPERCASE N–Z', value:'73 sorts', state:'warn'}, {label:'LOWERCASE A–M', value:'212 sorts', state:'err'}, {label:'LOWERCASE N–Z', value:'187 sorts', state:'ok'}, {label:'LIGATURES & LOGOS', value:'24 sorts', state:'warn'}, {label:'FIGURES & FRACTIONS', value:'32 sorts', state:'err'}, {label:'POINTS & SPACES', value:'56 pieces', state:'ok'}, {label:'FLEURONS & ORNAMENTS', value:'18 pieces', state:'warn'} ]; var html = '<h3 style=\"font-family:var(--font-display); font-size:18px; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; color:var(--primary); margin:0 0 16px; text-shadow:0.5px 0.5px 0.5px rgba(26,26,26,0.1);\">Type Case Details — Caslon No. 471</h3>'; html += '<div style=\"display:table; width:100%; border-collapse:collapse;\">'; for(var i=0;i<cells.length;i++){ var c = cells[i]; var stateColor = (c.state==='ok') ? 'var(--primary)' : 'var(--secondary-col)'; var shadow = (c.state==='err') ? 'text-shadow:1px 1px 0.5px rgba(227,66,52,0.25);' : ''; html += '<div style=\"display:table-row;\"><div style=\"display:table-cell; padding:8px 12px; font-family:var(--font-body); font-size:12px; text-transform:uppercase; letter-spacing:0.05em; color:var(--on-bg-muted); border-bottom:1px solid var(--border);\">'+c.label+'</div><div style=\"display:table-cell; padding:8px 12px; font-family:var(--font-body); font-size:14px; font-weight:700; color:'+stateColor+'; border-bottom:1px solid var(--border); '+shadow+'\">'+c.value+'</div></div>'; } html += '</div>'; el.innerHTML = html; }",
    "heroBackground": "function(el) { el.style.background = 'var(--bg)'; }",
    "ctaBackground": "function(el) { el.style.background = 'var(--surface)'; }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText = 'height:4px; background:var(--primary); box-shadow:1px 1px 0.5px rgba(26,26,26,0.15); margin:32px 0;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = 'var(--bg)'; }",
    "surfaceOverlay": "function(el) { var ov = document.createElement('div'); ov.style.cssText = 'position:absolute; inset:0; pointer-events:none; box-shadow:inset 0 0 0 1px rgba(26,26,26,0.12); z-index:2;'; el.appendChild(ov); }"
  },
  "shadcnTokens": {
    "--color-background": "#F5F0E6",
    "--color-popover": "#F5F0E6",
    "--color-foreground": "#1A1A1A",
    "--color-card-foreground": "#1A1A1A",
    "--color-popover-foreground": "#1A1A1A",
    "--color-card": "#EDE6D9",
    "--color-muted": "#EDE6D9",
    "--color-muted-foreground": "#4A4A4A",
    "--color-primary": "#1A1A1A",
    "--color-ring": "#1A1A1A",
    "--color-primary-foreground": "#F5F0E6",
    "--color-secondary": "#E34234",
    "--color-accent": "#E34234",
    "--color-secondary-foreground": "#F5F0E6",
    "--color-accent-foreground": "#F5F0E6",
    "--color-border": "#1A1A1A",
    "--color-input": "#1A1A1A",
    "--color-destructive": "#C62828"
  },
  "shadcnTokensClassic": {
    "--background": "#F5F0E6",
    "--popover": "#F5F0E6",
    "--foreground": "#1A1A1A",
    "--card-foreground": "#1A1A1A",
    "--popover-foreground": "#1A1A1A",
    "--card": "#EDE6D9",
    "--muted": "#EDE6D9",
    "--muted-foreground": "#4A4A4A",
    "--primary": "#1A1A1A",
    "--ring": "#1A1A1A",
    "--primary-foreground": "#F5F0E6",
    "--secondary": "#E34234",
    "--accent": "#E34234",
    "--secondary-foreground": "#F5F0E6",
    "--accent-foreground": "#F5F0E6",
    "--border": "#1A1A1A",
    "--input": "#1A1A1A",
    "--destructive": "#C62828"
  }
});
