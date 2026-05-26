registerSystem({
  "meta": {
    "name": "Jan Tschichold — New Typography",
    "tagline": "A rigorous functionalist design system inspired by Jan Tschichold's New Typography",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,400;0,700;0,900&display=swap"
  },
  "yamlTokens": {
    "name": "Jan Tschichold — New Typography",
    "colors": {
      "ok": "#000000",
      "warn": "#CC0000",
      "err": "#CC0000",
      "delta-up": "#000000",
      "delta-down": "#CC0000"
    },
    "typography": {
      "display": {
        "fontFamily": "Jost",
        "fontSize": "60px",
        "fontWeight": 900,
        "lineHeight": 1.25,
        "letterSpacing": "0.05em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Jost",
        "fontSize": "36px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Jost",
        "fontSize": "24px",
        "fontWeight": 700,
        "lineHeight": 1.375,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Jost",
        "fontSize": "16px",
        "fontWeight": 400,
        "lineHeight": 1.75,
        "letterSpacing": "0em"
      },
      "label": {
        "fontFamily": "Jost",
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
      "component-internal": "16px",
      "section-internal": "32px",
      "page-edge": "32px",
      "gap-component": "24px",
      "gap-section": "48px",
      "height-sm": "32px",
      "height-md": "40px",
      "height-lg": "48px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "{colors.ok}",
        "textColor": "#FFFFFF",
        "rounded": "{rounded.button}",
        "padding": "16px"
      },
      "button-primary-hover": {
        "backgroundColor": "#FFFFFF",
        "textColor": "{colors.ok}",
        "rounded": "{rounded.button}",
        "padding": "16px"
      },
      "button-secondary": {
        "backgroundColor": "transparent",
        "textColor": "{colors.ok}",
        "rounded": "{rounded.button}",
        "padding": "16px"
      },
      "card": {
        "backgroundColor": "#FFFFFF",
        "textColor": "{colors.ok}",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "input": {
        "backgroundColor": "transparent",
        "textColor": "{colors.ok}",
        "rounded": "{rounded.input}",
        "padding": "16px"
      },
      "input-focus": {
        "backgroundColor": "transparent",
        "textColor": "{colors.ok}",
        "rounded": "{rounded.input}",
        "padding": "16px"
      },
      "metric-cell": {
        "backgroundColor": "#FFFFFF",
        "textColor": "{colors.ok}",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "signal-bar": {
        "backgroundColor": "{colors.err}",
        "height": "4px"
      },
      "status-cell-ok": {
        "textColor": "{colors.ok}"
      },
      "status-cell-warn": {
        "textColor": "{colors.warn}"
      },
      "status-cell-err": {
        "backgroundColor": "{colors.err}",
        "textColor": "#FFFFFF",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "data-table-row": {
        "backgroundColor": "#FFFFFF",
        "textColor": "{colors.ok}"
      },
      "chart-surface": {
        "backgroundColor": "#FFFFFF"
      },
      "horizontal-rule": {
        "backgroundColor": "{colors.ok}",
        "height": "2px"
      },
      "geometric-arrow": {
        "backgroundColor": "{colors.err}",
        "width": "32px",
        "height": "32px"
      },
      "diagonal-band": {
        "backgroundColor": "{colors.err}",
        "width": "100%",
        "height": "40px"
      },
      "reversed-out-block": {
        "backgroundColor": "{colors.ok}",
        "textColor": "#FFFFFF",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "register-mark": {
        "width": "16px",
        "height": "16px"
      }
    },
    "version": "alpha",
    "description": "A constrained functionalist design system based on Jan Tschichold's New Typography: asymmetrical layouts, extreme typographic contrast, monochromatic palette with a single flat accent colour (red), matte surfaces, hard edges, and no ornament.",
    "provenance": {
      "coverage_status": "complete",
      "identity_description": "The slug `jan-tschichold` refers to Jan Tschichold (1902–1974), German typographer, book designer, calligrapher, and typeface designer. His career is divided into two influential phases: the radical modernist period (c. 1923–1933), in which he codified the principles of the New Typography through his poster work, book designs, and the manifesto *Die neue Typographie* (1928); and the later classica",
      "manual_enrichment_required": false,
      "imagery_count": 7,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "bauhaus-dessau.de",
          "count": 1
        },
        {
          "host": "collections.reading.ac.uk",
          "count": 1
        },
        {
          "host": "www.vam.ac.uk",
          "count": 1
        },
        {
          "host": "www.linotype.com",
          "count": 1
        },
        {
          "host": "en.wikipedia.org",
          "count": 1
        },
        {
          "host": "commons.wikimedia.org",
          "count": 1
        },
        {
          "host": "www.penguin.co.uk",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://bauhaus-dessau.de/",
          "host": "bauhaus-dessau.de",
          "institution": "Bauhaus Dessau Foundation",
          "confidence_original": "low"
        },
        {
          "url": "https://collections.reading.ac.uk/special-collections/",
          "host": "collections.reading.ac.uk",
          "institution": "University of Reading, Design Archives",
          "confidence_original": "medium"
        },
        {
          "url": "https://www.vam.ac.uk/",
          "host": "www.vam.ac.uk",
          "institution": "Victoria and Albert Museum, London",
          "confidence_original": "low"
        },
        {
          "url": "https://www.linotype.com/",
          "host": "www.linotype.com",
          "institution": "Linotype GmbH",
          "confidence_original": "low"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Jan_Tschichold",
          "host": "en.wikipedia.org",
          "institution": null,
          "confidence_original": "high"
        },
        {
          "url": "https://commons.wikimedia.org/wiki/Category:Jan_Tschichold",
          "host": "commons.wikimedia.org",
          "institution": null,
          "confidence_original": "high"
        },
        {
          "url": "https://www.penguin.co.uk/",
          "host": "www.penguin.co.uk",
          "institution": "Penguin Random House",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Akzidenz-Grotesk",
          "foundry": "Berthold",
          "year": 1896,
          "google_fonts": "Archivo",
          "attestation": "attested"
        },
        {
          "name": "Futura",
          "foundry": "Bauer",
          "year": 1927,
          "google_fonts": "Jost",
          "attestation": "attested"
        },
        {
          "name": "Sabon",
          "foundry": "Linotype / Monotype / Stempel",
          "year": 1967,
          "google_fonts": "EB Garamond",
          "attestation": "attested"
        },
        {
          "name": "Monotype Baskerville",
          "foundry": "Monotype",
          "year": 1923,
          "google_fonts": "Libre Baskerville",
          "attestation": "attested"
        },
        {
          "name": "Garamond (Monotype series 156)",
          "foundry": "Monotype",
          "year": null,
          "google_fonts": "EB Garamond",
          "attestation": "unknown"
        },
        {
          "name": "Custom lettering",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "attested"
        }
      ],
      "flags": {},
      "honest_gaps": [
        "1. **No attested hex/Pantone values for any colour.** Any colour given in this record is inferred or unverified."
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#FFFFFF",
    "--on-bg": "#000000",
    "--primary": "#000000",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#CC0000",
    "--on-secondary": "#FFFFFF",
    "--surface": "#FFFFFF",
    "--on-bg-muted": "#1A1A1A",
    "--border": "#000000",
    "--error": "#CC0000",
    "--font-display": "Jost",
    "--font-body": "Jost",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "ok": "#000000",
    "warn": "#CC0000",
    "err": "#CC0000",
    "deltaUp": "#000000",
    "deltaDown": "#CC0000",
    "deltaFlat": "#808080",
    "live": "#000000",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#1A1A1A",
    "chartFont": "Jost"
  },
  "chartStyle": {
    "backgroundColor": "#FFFFFF",
    "gridColor": "#000000",
    "gridWidth": "1px",
    "barFill": [
      "#CC0000",
      "#000000"
    ],
    "lineColor": "#000000",
    "lineWidth": "1.5px",
    "dotColor": "#CC0000",
    "dotRadius": "2px",
    "axisLabelFont": "Jost",
    "axisLabelSize": "12px",
    "axisLabelWeight": "700",
    "axisLabelTransform": "uppercase",
    "labelColor": "#1A1A1A",
    "fontFamily": "Jost"
  },
  "surfaceModel": "flat",
  "materialSimulation": {
    "model": "none",
    "params": {}
  },
  "interactionModel": {
    "hover": {
      "type": "color-shift",
      "description": "Black↔white or black↔red inversion on interactive elements"
    },
    "focus": {
      "style": "border-bottom: 2px solid #CC0000 or border: 2px solid #000000",
      "transition": "instantaneous"
    },
    "active": {
      "type": "color-shift",
      "description": "Inversion continues; primary button fills white with black text on press"
    }
  },
  "spacing": {
    "component-internal": "16px",
    "section-internal": "32px",
    "page-edge": "32px",
    "gap-component": "24px",
    "gap-section": "48px",
    "height-sm": "32px",
    "height-md": "40px",
    "height-lg": "48px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "0px"
  },
  "elevation": {
    "level0": "0",
    "level1": "0",
    "level2": "0",
    "overlay": "0",
    "shadow": "none"
  },
  "dashboardStyle": {
    "grid": {
      "columns": "4",
      "spacing": "24px"
    },
    "metricCell": {
      "backgroundColor": "#FFFFFF",
      "border": "1px solid #000000",
      "padding": "16px",
      "borderRadius": "0px"
    },
    "signalBar": {
      "trackColor": "#000000",
      "fillColor": "#CC0000",
      "height": "4px"
    },
    "statusCell": {
      "ok": {
        "textColor": "#000000",
        "backgroundColor": "transparent"
      },
      "warn": {
        "textColor": "#CC0000",
        "borderBottom": "2px solid #CC0000"
      },
      "err": {
        "backgroundColor": "#CC0000",
        "textColor": "#FFFFFF",
        "padding": "16px"
      }
    },
    "dataTable": {
      "header": {
        "font": "Jost",
        "size": "12px",
        "weight": "700",
        "letterSpacing": "0.1em",
        "textTransform": "uppercase",
        "color": "#000000"
      },
      "rowBorder": "1px solid #000000",
      "alternatingBackground": "#FFFFFF"
    },
    "chartSurface": {
      "backgroundColor": "#FFFFFF",
      "gridLine": "1px solid #000000",
      "barFill": [
        "#CC0000",
        "#000000"
      ],
      "lineColor": "#000000",
      "lineWidth": "1.5px",
      "dotColor": "#CC0000"
    }
  },
  "landingStyle": {
    "heroApproach": "Full-width flush-left headline (60px Jost black uppercase) with a single red geometric arrow as a visual accent. Below, a short body paragraph set at 16px flush-left, followed by a 2px black horizontal rule. A prominent primary button is placed on the left.",
    "scrollBehavior": "Completely static — no parallax, no sticky elements, no progressive reveals. Content blocks stack vertically with generous white space.",
    "ctaStyle": "Solid black primary button with white text, 0px radius, 16px padding. Hover inverts to white background with black text. Placed flush left, never centred.",
    "signatureMoment": "A full-width diagonal red band cutting across the hero section, combined with a reversed-out black block containing a key statistic or quote."
  },
  "globalFilter": null,
  "globalBodyCss": "font-family: 'Jost', sans-serif; background-color: #FFFFFF; color: #000000; margin: 0; padding: 0; line-height: 1.75; -webkit-font-smoothing: antialiased;",
  "globalCss": null,
  "interactionStyles": ".ds-layout-frame .button-primary:hover { background-color: var(--on-primary) !important; color: var(--primary) !important; } .ds-layout-frame .button-secondary:hover { background-color: var(--primary) !important; color: var(--on-primary) !important; } .ds-layout-frame *:focus-visible { outline: 2px solid var(--border); outline-offset: 2px; }",
  "buttons": [
    {
      "name": "Primary Button",
      "desc": "Solid black background with white uppercase text, 0px radius, 16px padding. Inverts on hover to white background with black text.",
      "html": "<button style=\"background-color:var(--primary);color:var(--on-primary);border:none;border-radius:0;padding:16px;font-family:var(--font-body);font-size:16px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;cursor:pointer;\" onmouseenter=\"this.style.backgroundColor='#FFFFFF';this.style.color='#000000';\" onmouseleave=\"this.style.backgroundColor='var(--primary)';this.style.color='var(--on-primary)';\">SUBMIT</button>",
      "label": "Primary Button",
      "note": "Solid black background with white uppercase text, 0px radius, 16px padding. Inverts on hover to white background with black text."
    },
    {
      "name": "Secondary Button",
      "desc": "Transparent background with black text and a 2px solid black border. 0px radius, 16px padding.",
      "html": "<button style=\"background-color:transparent;color:var(--primary);border:2px solid var(--primary);border-radius:0;padding:16px;font-family:var(--font-body);font-size:16px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;cursor:pointer;\" onmouseenter=\"this.style.backgroundColor='var(--primary)';this.style.color='var(--on-primary)';\" onmouseleave=\"this.style.backgroundColor='transparent';this.style.color='var(--primary)';\">CANCEL</button>",
      "label": "Secondary Button",
      "note": "Transparent background with black text and a 2px solid black border. 0px radius, 16px padding."
    },
    {
      "name": "Ghost Button",
      "desc": "No background or border, only black uppercase text. Minimal, direct.",
      "html": "<button style=\"background-color:transparent;color:var(--primary);border:none;border-radius:0;padding:16px;font-family:var(--font-body);font-size:16px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;cursor:pointer;\" onmouseenter=\"this.style.color='var(--secondary-col)';\" onmouseleave=\"this.style.color='var(--primary)';\">LEARN MORE</button>",
      "label": "Ghost Button",
      "note": "No background or border, only black uppercase text. Minimal, direct."
    }
  ],
  "cards": [
    {
      "name": "Standard Card",
      "desc": "White background, black text, 0px radius, 16px padding. Sharp, minimal card for content containment.",
      "html": "<div style=\"background-color: var(--surface); color: var(--on-bg); border-radius: var(--radius-card); padding: 16px; font-family: var(--font-body); font-size: 16px; line-height: 1.75;\">This is a standard card with no adornments.</div>",
      "label": "Standard Card",
      "note": "White background, black text, 0px radius, 16px padding. Sharp, minimal card for content containment."
    },
    {
      "name": "Accent Left Border Card",
      "desc": "White card with a thick red left border as the only accent. No rounding.",
      "html": "<div style=\"background-color: var(--surface); color: var(--on-bg); border-left: 8px solid var(--secondary-col); border-radius: var(--radius-card); padding: 16px; font-family: var(--font-body); font-size: 16px; line-height: 1.75;\">Accented with a red bar on the left.</div>",
      "label": "Accent Left Border Card",
      "note": "White card with a thick red left border as the only accent. No rounding."
    }
  ],
  "forms": [
    {
      "name": "Text Input",
      "desc": "Transparent background, black bottom border, 0px radius, 16px padding. Focus state adds a 2px red bottom border.",
      "html": "<div style=\"display:flex;flex-direction:column;gap:8px;\"><label style=\"font-family:var(--font-body);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:var(--on-bg);\">NAME</label><input style=\"background-color:transparent;color:var(--on-bg);border:none;border-bottom:2px solid var(--border);border-radius:0;padding:16px;font-family:var(--font-body);font-size:16px;outline:none;\" type=\"text\" placeholder=\"Your name\" onfocus=\"this.style.borderBottom='2px solid var(--secondary-col)'\" onblur=\"this.style.borderBottom='2px solid var(--border)'\" /></div>",
      "label": "Text Input",
      "stateLabel": "Transparent background, black bottom border, 0px radius, 16px padding. Focus state adds a 2px red bottom border."
    },
    {
      "name": "Select / Dropdown",
      "desc": "Transparent background, black bottom border, 0px radius. Custom arrow replaced by a simple right-pointing geometric arrow via CSS.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 8px;\"><label style=\"font-family: var(--font-body); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--on-bg);\">CATEGORY</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: transparent; color: var(--on-bg); border: none; border-bottom: 2px solid var(--border); border-radius: var(--radius-input); padding: 16px; font-family: var(--font-body); font-size: 16px; appearance: none; -webkit-appearance: none; -moz-appearance: none; background-image: url(\\x27data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\"><polygon points=\"0,0 12,0 6,12\" fill=\"%23000000\"/></svg>\\x27); background-repeat: no-repeat; background-position: right 16px center; padding-right: 40px;\"><option>Option 1</option><option>Option 2</option></select></div>",
      "label": "Select / Dropdown",
      "stateLabel": "Transparent background, black bottom border, 0px radius. Custom arrow replaced by a simple right-pointing geometric arrow via CSS."
    },
    {
      "name": "Checkbox / Toggle",
      "desc": "Custom square checkbox with black border and a red checkmark. No rounding.",
      "html": "<div style=\"display: flex; align-items: center; gap: 12px;\"><label style=\"position: relative; width: 20px; height: 20px; cursor: pointer;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"opacity: 0; position: absolute; width: 100%; height: 100%; cursor: pointer;\" /><span style=\"position: absolute; top: 0; left: 0; width: 20px; height: 20px; border: 2px solid var(--border); background-color: transparent;\"></span><span style=\"position: absolute; top: 0; left: 0; width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; color: var(--secondary-col); font-family: var(--font-body); font-size: 16px; line-height: 1; pointer-events: none; display: none;\">✓</span></label><span style=\"font-family: var(--font-body); font-size: 16px; color: var(--on-bg);\">Accept terms</span></div>",
      "label": "Checkbox / Toggle",
      "stateLabel": "Custom square checkbox with black border and a red checkmark. No rounding."
    }
  ],
  "extraComponents": [
    {
      "name": "Reversed-Out Block",
      "desc": "Solid black background with white text, 0px radius, 16px padding. Used for high-emphasis callouts.",
      "html": "<div style=\"background-color: var(--primary); color: var(--on-primary); border-radius: var(--radius-card); padding: 16px; font-family: var(--font-body); font-size: 16px; line-height: 1.75;\">This is a reversed-out block.</div>"
    },
    {
      "name": "Geometric Arrow",
      "desc": "A 32x32px flat red triangle pointing right. Used as a navigational indicator.",
      "html": "<div style=\"width: 0; height: 0; border-top: 16px solid transparent; border-bottom: 16px solid transparent; border-left: 32px solid var(--secondary-col);\"></div>"
    },
    {
      "name": "Diagonal Band",
      "desc": "A full-width red diagonal stripe, 40px height. Used as a bold structural divider.",
      "html": "<div style=\"width: 100%; height: 40px; background-color: var(--secondary-col); transform: rotate(-5deg); transform-origin: left center;\"></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — NEUE TYPOGRAPHIE</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — FUNKTIONALE GESTALTUNG</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — Asymmetrische Komposition</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — Die neue Typographie verzichtet auf Ornamente und setzt auf klare hierarchische Gliederung durch Schriftgrößen und -gewichte.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — LABEL — AKZIDENZ GROTESK</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Centered text or justified alignment — undermines the asymmetrical balance.",
      "avoid": {
        "html": "<div style=\"text-align: center; font-family: var(--font-body);\">Centered text is forbidden</div>",
        "label": "Avoid"
      },
      "rule": "Centered text or justified alignment — undermines the asymmetrical balance.",
      "do": {
        "label": "Do",
        "html": "<div style=\"min-height:40px;border:2px solid var(--primary);background:var(--bg);padding:16px;font-family:var(--font-body);font-size:14px;color:var(--on-bg);\">ASYMMETRICAL LAYOUT</div>"
      }
    },
    {
      "desc": "Rounded corners or drop shadows — violates the flat, sharp-edge principle.",
      "avoid": {
        "html": "<div style=\"border-radius: 8px; box-shadow: 2px 2px 4px rgba(0,0,0,0.2); padding: 16px; background-color: var(--surface);\">This has rounded corners and shadow</div>",
        "label": "Avoid"
      },
      "rule": "Rounded corners or drop shadows — violates the flat, sharp-edge principle.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Multiple accent colours — the palette is strictly black, white, and one flat red.",
      "avoid": {
        "html": "<div style=\"background-color: #3366CC; color: #FFFFFF; padding: 16px;\">Blue accent is not allowed</div>",
        "label": "Avoid"
      },
      "rule": "Multiple accent colours — the palette is strictly black, white, and one flat red.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Gradients or transparency — all surfaces are matte and solid.",
      "avoid": {
        "html": "<div style=\"background: linear-gradient(to right, var(--primary), var(--secondary-col)); padding: 16px; color: white;\">Gradients are forbidden</div>",
        "label": "Avoid"
      },
      "rule": "Gradients or transparency — all surfaces are matte and solid.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "doAvoidStyle": {
    "style": "No rounded corners, no shadows, no gradients, no multiple accent colours, no centred or justified text, no serif or script fonts."
  },
  "effects": [],
  "motion": [],
  "colors": {
    "ok": "#000000",
    "warn": "#CC0000",
    "err": "#CC0000",
    "delta-up": "#000000",
    "delta-down": "#CC0000"
  },
  "typography": {
    "display": {
      "fontFamily": "Jost",
      "fontSize": "60px",
      "fontWeight": 900,
      "lineHeight": 1.25,
      "letterSpacing": "0.05em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "Jost",
      "fontSize": "36px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "0.025em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "Jost",
      "fontSize": "24px",
      "fontWeight": 700,
      "lineHeight": 1.375,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "Jost",
      "fontSize": "16px",
      "fontWeight": 400,
      "lineHeight": 1.75,
      "letterSpacing": "0em"
    },
    "label": {
      "fontFamily": "Jost",
      "fontSize": "12px",
      "fontWeight": 700,
      "lineHeight": 1,
      "letterSpacing": "0.1em",
      "textTransform": "uppercase"
    }
  },
  "layouts": {
    "copy": {
      "heroKicker": "DIE NEUE TYPOGRAPHIE",
      "heroHeadline": "TSCHICHOLD SYSTEM",
      "heroSub": "A RIGOROUS FUNCTIONALIST DESIGN SYSTEM FOR MODERN TYPOGRAPHIC COMPOSITION",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">INSPECT PROOFS</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">VIEW SPECIMENS</button>",
      "navLinks": [
        "SCHRIFT",
        "SATZ",
        "DRUCK",
        "AKZIDENZ",
        "GROTESK"
      ],
      "features": [
        {
          "title": "ASYMMETRICAL GRID",
          "desc": "Flush-left composition with dynamic diagonal bands and geometric arrows.",
          "icon": "📐",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📐 ASYMMETRICAL GRID</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Flush-left composition with dynamic diagonal bands and geometric arrows.</div></div>"
        },
        {
          "title": "EXTREME CONTRAST",
          "desc": "Display sizes at 60px against 16px body text for functional hierarchy.",
          "icon": "🔤",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔤 EXTREME CONTRAST</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Display sizes at 60px against 16px body text for functional hierarchy.</div></div>"
        },
        {
          "title": "MONOCHROME PALETTE",
          "desc": "Black, white, and a single flat red accent. No gradients or shadows.",
          "icon": "⬛",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⬛ MONOCHROME PALETTE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Black, white, and a single flat red accent. No gradients or shadows.</div></div>"
        },
        {
          "title": "HARD EDGES",
          "desc": "All corners set to 0px. No ornament. Matte surfaces only.",
          "icon": "▬",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">▬ HARD EDGES</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">All corners set to 0px. No ornament. Matte surfaces only.</div></div>"
        }
      ],
      "ctaStripHeadline": "READY TO SET TYPE?",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">REQUEST ACCESS</button>",
      "sidebarBrand": "TSCHICHOLD",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "GLYPH BASE",
          "active": true
        },
        {
          "icon": "◉",
          "label": "KERN TABLE",
          "active": false
        },
        {
          "icon": "◉",
          "label": "LIGATURES",
          "active": false
        }
      ],
      "dashboardTitle": "COMPOSITION MONITOR",
      "metrics": [
        {
          "label": "GLYPH COUNT",
          "value": "2,816",
          "delta": "+4.2%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "KERN PAIRS",
          "value": "9,340",
          "delta": "+1.8%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "PROOFS QUEUED",
          "value": "38",
          "delta": "-11%",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "PRESS CYCLES",
          "value": "12",
          "delta": "0",
          "dir": "flat",
          "direction": "flat"
        }
      ],
      "chartTitle": "SPECIMEN REQUESTS — 7 DAY",
      "panelATitle": "LATEST PROOFS",
      "panelARows": [
        {
          "label": "FUTURA BOLD",
          "value": "APPROVED",
          "pct": 0
        },
        {
          "label": "AKZIDENZ REG",
          "value": "REVISE",
          "pct": 0
        },
        {
          "label": "JOST HAIRLINE",
          "value": "PENDING",
          "pct": 0
        },
        {
          "label": "SABON BOOK",
          "value": "APPROVED",
          "pct": 0
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "DESIGNERS ON DUTY",
      "panelBCells": [
        {
          "label": "JAN TSCHICHOLD",
          "value": "LEAD",
          "state": "ok"
        },
        {
          "label": "HERBERT BAYER",
          "value": "SETTER",
          "state": "warn"
        },
        {
          "label": "LASZLO MOHOLY-NAGY",
          "value": "PRESS",
          "state": "err"
        },
        {
          "label": "PAUL RENNER",
          "value": "KERNING",
          "state": "ok"
        },
        {
          "label": "ERIC GILL",
          "value": "LETTERING",
          "state": "warn"
        },
        {
          "label": "KURT SCHWITTERS",
          "value": "COLLAGE",
          "state": "err"
        },
        {
          "label": "EL LISSITZKY",
          "value": "GRID",
          "state": "ok"
        },
        {
          "label": "JOOST SCHMIDT",
          "value": "TYPE",
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
        "SAT",
        "SUN"
      ],
      "series": [
        {
          "data": [
            12,
            15,
            9,
            18,
            22,
            14,
            10,
            10,
            10,
            10,
            10,
            10
          ],
          "label": "GROTESK",
          "axis": "left",
          "color": "#000000"
        },
        {
          "data": [
            5,
            8,
            6,
            11,
            9,
            7,
            4,
            4,
            4,
            4,
            4,
            4
          ],
          "label": "AKZIDENZ",
          "axis": "right-1",
          "color": "#CC0000"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'min-height:400px;background:#FFFFFF;padding:48px 32px;display:flex;flex-direction:column;align-items:flex-start;'; el.innerHTML = '<div style=\"font-family:var(--font-display);font-size:60px;font-weight:900;line-height:1.25;letter-spacing:0.05em;text-transform:uppercase;color:var(--on-bg);margin-bottom:24px;\">DIE NEUE TYPOGRAPHIE</div><div style=\"width:64px;height:2px;background-color:var(--primary);margin-bottom:24px;\"></div><div style=\"font-family:var(--font-body);font-size:16px;line-height:1.75;color:var(--on-bg-muted);max-width:480px;margin-bottom:32px;\">Asymmetrical composition with extreme typographic contrast and a single flat accent colour. No ornament, no shadows, no gradients.</div><div style=\"width:0;height:0;border-top:12px solid transparent;border-bottom:12px solid transparent;border-left:24px solid var(--secondary-col);\"></div>'; }",
    "showcaseRender": "function(el) { el.style.cssText = 'display:flex;flex-wrap:wrap;gap:24px;justify-content:flex-start;padding:48px 32px;background:#FFFFFF;'; var cards = [ { title:'ASYMMETRICAL GRID', desc:'Flush-left composition with dynamic diagonal bands and geometric arrows.' }, { title:'EXTREME CONTRAST', desc:'Display sizes at 60px against 16px body text for functional hierarchy.' }, { title:'MONOCHROME PALETTE', desc:'Black, white, and a single flat red accent. No gradients or shadows.' } ]; for(var i=0;i<cards.length;i++){ var card=document.createElement('div'); card.style.cssText='width:220px;border:1px solid var(--border);padding:24px;display:flex;flex-direction:column;gap:16px;'; card.innerHTML='<div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:var(--primary);\">'+cards[i].title+'</div><div style=\"font-family:var(--font-body);font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">'+cards[i].desc+'</div>'; el.appendChild(card); } }",
    "panelCRender": "function(el) { el.style.cssText = 'padding:24px;background:#FFFFFF;border:1px solid var(--border);'; var list = [ { name:'JAN TSCHICHOLD', role:'LEAD', state:'ok' }, { name:'HERBERT BAYER', role:'SETTER', state:'warn' }, { name:'LASZLO MOHOLY-NAGY', role:'PRESS', state:'err' }, { name:'PAUL RENNER', role:'KERNING', state:'ok' } ]; var html = '<div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:var(--primary);margin-bottom:16px;\">DESIGNERS ON DUTY</div>'; for(var i=0;i<list.length;i++){ var stateColor = list[i].state === 'err' ? 'var(--secondary-col)' : list[i].state === 'warn' ? 'var(--secondary-col)' : 'var(--primary)'; html += '<div style=\"display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border);font-family:var(--font-body);font-size:12px;\"><span style=\"color:var(--on-bg);font-weight:700;text-transform:uppercase;\">'+list[i].name+'</span><span style=\"color:'+stateColor+';font-weight:400;\">'+list[i].role+'</span></div>'; } el.innerHTML = html; }",
    "heroBackground": "function(el) { el.style.background = '#FFFFFF'; }",
    "ctaBackground": "function(el) { el.style.background = '#FFFFFF'; }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText='height:4px;background-color:#000000;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = '#FFFFFF'; }",
    "surfaceOverlay": "function(el) { var reg = document.createElement('div'); reg.style.cssText = 'position:absolute;top:16px;right:16px;width:16px;height:16px;background:var(--secondary-col);z-index:2;pointer-events:none;'; el.appendChild(reg); }"
  },
  "ambientCanvas": "function(tick) { var d=document.createElement('div'); d.style.cssText='position:absolute;bottom:0;left:' + ((tick||0) % 300) + 'px;width:100px;height:4px;background:var(--primary);pointer-events:none;'; return d; }",
  "shadcnTokens": {
    "--color-background": "#FFFFFF",
    "--color-popover": "#FFFFFF",
    "--color-foreground": "#000000",
    "--color-card-foreground": "#000000",
    "--color-popover-foreground": "#000000",
    "--color-card": "#FFFFFF",
    "--color-muted": "#FFFFFF",
    "--color-muted-foreground": "#1A1A1A",
    "--color-primary": "#000000",
    "--color-ring": "#000000",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#CC0000",
    "--color-accent": "#CC0000",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
    "--color-border": "#000000",
    "--color-input": "#000000",
    "--color-destructive": "#CC0000"
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
    "--primary": "#000000",
    "--ring": "#000000",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#CC0000",
    "--accent": "#CC0000",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#CC0000"
  }
});
