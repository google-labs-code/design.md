registerSystem({
  "meta": {
    "name": "Indian School Science Chart Series (1970s–1990s)",
    "tagline": "Hand-painted didactic precision for the digital age",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&family=Inter:wght@400;600;700&family=Tinos:wght@400;700&family=Courier+Prime:wght@400;700&display=swap"
  },
  "yamlTokens": {
    "name": "Indian School Science Chart Series (1970s–1990s)",
    "colors": {
      "primary": "#B34A3C",
      "on-primary": "#FFFFFF",
      "secondary": "#6B7C52",
      "on-secondary": "#FFFFFF",
      "tertiary": "#D4A34B",
      "on-tertiary": "#3B3B3B",
      "surface": "#F5ECD7",
      "on-surface": "#3B3B3B",
      "outline": "#3B3B3B",
      "outline-variant": "#B34A3C"
    },
    "typography": {
      "display": {
        "fontFamily": "Oswald",
        "fontSize": "36px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.05em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Oswald",
        "fontSize": "24px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Inter",
        "fontSize": "20px",
        "fontWeight": 600,
        "lineHeight": 1.375,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Tinos",
        "fontSize": "14px",
        "fontWeight": 400,
        "lineHeight": 1.625,
        "letterSpacing": "0em"
      },
      "label": {
        "fontFamily": "Courier Prime",
        "fontSize": "12px",
        "fontWeight": 400,
        "lineHeight": 1.375,
        "letterSpacing": "-0.025em"
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
      "section-internal": "24px",
      "page-edge": "32px",
      "gap-component": "16px",
      "gap-section": "32px",
      "height-sm": "32px",
      "height-md": "40px",
      "height-lg": "48px",
      "icon": "24px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "{colors.primary}",
        "textColor": "{colors.on-primary}",
        "rounded": "{rounded.button}",
        "padding": "8px"
      },
      "button-primary-hover": {
        "backgroundColor": "#942A1E",
        "textColor": "{colors.on-primary}",
        "padding": "8px"
      },
      "button-secondary": {
        "backgroundColor": "{colors.secondary}",
        "textColor": "{colors.on-secondary}",
        "rounded": "{rounded.button}",
        "padding": "8px"
      },
      "button-ghost": {
        "backgroundColor": "transparent",
        "textColor": "{colors.on-surface}",
        "rounded": "{rounded.button}",
        "padding": "8px"
      },
      "card": {
        "backgroundColor": "{colors.surface}",
        "rounded": "{rounded.card}",
        "padding": "24px"
      },
      "input": {
        "backgroundColor": "transparent",
        "textColor": "{colors.on-surface}",
        "rounded": "{rounded.input}",
        "padding": "4px"
      },
      "input-focus": {
        "textColor": "{colors.on-surface}",
        "rounded": "{rounded.input}",
        "padding": "4px"
      },
      "title-bar": {
        "backgroundColor": "{colors.primary}",
        "textColor": "{colors.on-primary}",
        "height": "48px",
        "padding": "16px"
      },
      "publisher-footer-strip": {
        "backgroundColor": "{colors.on-surface}",
        "textColor": "#F5ECD7",
        "height": "32px",
        "padding": "8px"
      },
      "metric-cell": {
        "backgroundColor": "{colors.surface}",
        "textColor": "{colors.on-surface}",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "leader-line-callout": {
        "backgroundColor": "{colors.tertiary}",
        "textColor": "{colors.on-tertiary}",
        "size": "24px"
      },
      "frame-border": {
        "rounded": "{rounded.default}",
        "padding": "0px"
      }
    },
    "version": "alpha",
    "description": "A digital interface language translating the hand-painted didactic precision of Indian school science charts from the 1970s–1990s. Flat unblended fills, thick black outlines, intentional misregistration, and paper grain evoke the nostalgic, instructive character of a dusty classroom wall chart.",
    "provenance": {
      "coverage_status": "minimal",
      "identity_description": "",
      "manual_enrichment_required": true,
      "imagery_count": 2,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": null,
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "ncert.nic.in",
          "count": 2
        }
      ],
      "imagery_urls": [
        {
          "url": "https://ncert.nic.in/",
          "host": "ncert.nic.in",
          "institution": "National Council of Educational Research and Training, New Delhi",
          "confidence_original": "high"
        },
        {
          "url": "https://ncert.nic.in/",
          "host": "ncert.nic.in",
          "institution": "NCERT",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": {},
      "flags": [
        "few_usable_urls",
        "no_typography_extracted",
        "no_colour_extracted",
        "1_robots_disallowed_urls"
      ],
      "honest_gaps": {}
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#F5ECD7",
    "--on-bg": "#3B3B3B",
    "--primary": "#B34A3C",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#6B7C52",
    "--on-secondary": "#FFFFFF",
    "--surface": "#F5ECD7",
    "--on-bg-muted": "#5A5A5A",
    "--border": "#3B3B3B",
    "--error": "#B34A3C",
    "--font-display": "Oswald",
    "--font-body": "Tinos",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "success": "#6B7C52",
    "warning": "#D4A34B",
    "error": "#B34A3C",
    "info": "#B34A3C",
    "err": "#B34A3C",
    "ok": "#6B7C52",
    "warn": "#D4A34B",
    "deltaUp": "#6B7C52",
    "deltaDown": "#B34A3C",
    "deltaFlat": "#5A5A5A",
    "live": "#B34A3C",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#5A5A5A",
    "chartFont": "Tinos"
  },
  "chartStyle": {
    "background": "#F5ECD7",
    "grid": {
      "stroke": "#3B3B3B",
      "strokeWidth": 1,
      "opacity": 0.25
    },
    "line": {
      "stroke": "#6B7C52",
      "strokeWidth": 2,
      "fill": "none"
    },
    "dot": {
      "fill": "#6B7C52",
      "stroke": "#3B3B3B",
      "strokeWidth": 1,
      "radius": 3
    },
    "bar": {
      "fill": "#6B7C52",
      "stroke": "none"
    },
    "axis": {
      "label": {
        "fontFamily": "var(--font-body)",
        "fontSize": "12px",
        "color": "#3B3B3B",
        "textTransform": "uppercase"
      }
    },
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#5A5A5A",
    "fontFamily": "Tinos"
  },
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "paper",
    "params": {
      "grainOpacity": 0.08,
      "inkFade": 0.06,
      "misregistrationShift": 0.5
    }
  },
  "globalFilter": "<svg><defs><filter id='paper-grain' x='0' y='0' width='100%' height='100%'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' result='noise'/><feColorMatrix type='matrix' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.08 0' in='noise' result='coloredNoise'/><feBlend in='SourceGraphic' in2='coloredNoise' mode='multiply'/></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-body, 'Tinos', serif); background: var(--bg, #F5ECD7); color: var(--on-bg, #3B3B3B); margin: 0; padding: 0;",
  "globalCss": ".ds-layout-frame { position: relative; border: 4px solid var(--border); outline: 2px solid var(--outline-variant); outline-offset: -6px; } .ds-layout-frame .title-bar { border-bottom: 4px solid var(--border); } .ds-layout-frame .publisher-footer-strip { border-top: 2px solid var(--border); } .ds-layout-frame .metric-cell { border: 4px solid var(--border); outline: 2px solid var(--outline-variant); outline-offset: -6px; } .ds-layout-frame .leader-line-callout { border: 2px solid var(--border); } .ds-layout-frame .interactive { border: 2px solid var(--border); transition: none; } .ds-layout-frame .interactive:hover { background-color: #942A1E; } .ds-layout-frame .interactive:active { transform: translate(0.5px, 0.5px); } .ds-layout-frame .interactive:focus { border-color: var(--outline-variant); }",
  "interactionModel": {
    "hover": {
      "type": "color-shift",
      "target": "background-color",
      "delta": "darker by 15% (approximate, #942A1E for primary)"
    },
    "active": {
      "type": "offset-shift",
      "dx": 0.5,
      "dy": 0.5,
      "randomDirection": true
    },
    "focus": {
      "type": "color-border",
      "color": "var(--outline-variant, #B34A3C)"
    }
  },
  "interactionStyles": ".ds-layout-frame .interactive { transition: none; } .ds-layout-frame .interactive:hover { background-color: #942A1E !important; } .ds-layout-frame .interactive:active { transform: translate(0.5px, 0.5px); } .ds-layout-frame .interactive:focus { border-color: var(--outline-variant) !important; }",
  "elevation": {
    "description": "No elevation; all components have no box-shadow, no z-depth, no surface layering."
  },
  "spacing": {
    "component-internal": "16px",
    "section-internal": "24px",
    "page-edge": "32px",
    "gap-component": "16px",
    "gap-section": "32px",
    "height-sm": "32px",
    "height-md": "40px",
    "height-lg": "48px",
    "icon": "24px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "0px"
  },
  "dashboardStyle": {
    "layout": "2x2 grid of chart panels",
    "density": "moderate, with generous white space around central diagrams and marginalia for callouts",
    "panelTreatment": "double-line border (outer black 4px, inner brick red 2px) with colored title bar and black footer strip",
    "dataVizStyle": "flat fills bounded by thick black outlines, no gradients, data represented with thick lines and dots",
    "signatureElement": "leader-line callouts (small mustard dot with number) pointing to diagram elements"
  },
  "landingStyle": {
    "heroApproach": "single wall-chart panel centered on cream background, framed by double-line border, with title bar and footer",
    "scrollBehavior": "static, no parallax or animations; content appears as a single didactic poster",
    "ctaStyle": "primary button (brick red fill) with thick outline and uppercase condensed text",
    "signatureMoment": "paper grain texture overlay and subtle sepia filter applied globally, evoking aged offset printing"
  },
  "buttons": [
    {
      "name": "Primary Button",
      "desc": "Solid brick red fill with thick black outline, uppercase Oswald text.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--primary); color: var(--on-primary); border: 2px solid var(--border); border-radius: var(--radius-btn); padding: 8px 16px; font-family: var(--font-display); font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;\">LABEL</button>",
      "label": "Primary Button",
      "note": "Solid brick red fill with thick black outline, uppercase Oswald text."
    },
    {
      "name": "Secondary Button",
      "desc": "Solid olive green fill with thick black outline, uppercase Oswald text.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--secondary-col); color: var(--on-secondary); border: 2px solid var(--border); border-radius: var(--radius-btn); padding: 8px 16px; font-family: var(--font-display); font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;\">LABEL</button>",
      "label": "Secondary Button",
      "note": "Solid olive green fill with thick black outline, uppercase Oswald text."
    },
    {
      "name": "Ghost Button",
      "desc": "Transparent fill with black outline, uppercase Oswald text, intended for less prominent actions.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: transparent; color: var(--on-bg); border: 2px solid var(--border); border-radius: var(--radius-btn); padding: 8px 16px; font-family: var(--font-display); font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;\">LABEL</button>",
      "label": "Ghost Button",
      "note": "Transparent fill with black outline, uppercase Oswald text, intended for less prominent actions."
    }
  ],
  "cards": [
    {
      "name": "Panel Card with Title Bar",
      "desc": "Full panel with warm cream background, double-line border (outer black, inner brick red), and a colored title bar at top containing white uppercase label.",
      "html": "<div style=\"background-color: var(--surface); border: 4px solid var(--border); box-shadow: inset 0 0 0 2px var(--primary); border-radius: var(--radius-card); padding: 0;\"><div style=\"background-color: var(--primary); color: var(--on-primary); font-family: var(--font-display); font-size: 18px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; padding: 8px 16px; border-bottom: 2px solid var(--border);\">TITLE</div><div style=\"padding: 24px; font-family: var(--font-body); font-size: 14px; color: var(--on-bg);\">Content area with diagram and leader lines.</div></div>",
      "label": "Panel Card with Title Bar",
      "note": "Full panel with warm cream background, double-line border (outer black, inner brick red), and a colored title bar at top containing white uppercase label."
    },
    {
      "name": "Content Card (Plain)",
      "desc": "Warm cream card with double-line border, no title bar. Used for metric displays or secondary content.",
      "html": "<div style=\"background-color: var(--surface); border: 4px solid var(--border); box-shadow: inset 0 0 0 2px var(--primary); border-radius: var(--radius-card); padding: 24px; font-family: var(--font-body); font-size: 14px; color: var(--on-bg);\">Content area with metric cells and bilingual labels.</div>",
      "label": "Content Card (Plain)",
      "note": "Warm cream card with double-line border, no title bar. Used for metric displays or secondary content."
    }
  ],
  "forms": [
    {
      "name": "Text Input",
      "desc": "Single-line input with transparent background, thick black border, uppercase placeholder, and serif text.",
      "html": "<div><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" placeholder=\"ENTER VALUE\" style=\"background-color: transparent; color: var(--on-bg); border: 2px solid var(--border); border-radius: var(--radius-input); padding: 4px 8px; font-family: var(--font-body); font-size: 14px; width: 100%; box-sizing: border-box; text-transform: uppercase;\" /></div>",
      "label": "Text Input",
      "stateLabel": "Single-line input with transparent background, thick black border, uppercase placeholder, and serif text."
    },
    {
      "name": "Select Dropdown",
      "desc": "Dropdown select with thick outline, uppercase label, and arrow indicator using SVG inline.",
      "html": "<div><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: transparent; color: var(--on-bg); border: 2px solid var(--border); border-radius: var(--radius-input); padding: 4px 8px; font-family: var(--font-body); font-size: 14px; width: 100%; box-sizing: border-box; text-transform: uppercase; appearance: none; -webkit-appearance: none; -moz-appearance: none; background-image: url(\"data:image/svg+xml,%3Csvg xmlns=\\x27http://www.w3.org/2000/svg\\x27 width=\\x2710\\x27 height=\\x276\\x27%3E%3Cpath d=\\x27M0 0l5 6 5-6z\\x27 fill=\\x27%233B3B3B\\x27/%3E%3C/svg%3E\"); background-repeat: no-repeat; background-position: right 8px center; background-size: 10px 6px;\"><option>OPTION ONE</option><option>OPTION TWO</option></select></div>",
      "label": "Select Dropdown",
      "stateLabel": "Dropdown select with thick outline, uppercase label, and arrow indicator using SVG inline."
    },
    {
      "name": "Checkbox",
      "desc": "Custom checkbox as a square with thick border, checked state shown with an X mark (inline SVG).",
      "html": "<div style=\"display: flex; align-items: center; gap: 8px;\"><div style=\"width: 18px; height: 18px; border: 2px solid var(--border); background-color: transparent; display: inline-flex; align-items: center; justify-content: center;\"><svg width=\"12\" height=\"12\" viewBox=\"0 0 12 12\"><polyline points=\"2,6 5,9 10,2\" fill=\"none\" stroke=\"var(--border)\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"miter\" /></svg></div><span style=\"font-family: var(--font-body); font-size: 14px; color: var(--on-bg); text-transform: uppercase;\">LABEL</span></div>",
      "label": "Checkbox",
      "stateLabel": "Custom checkbox as a square with thick border, checked state shown with an X mark (inline SVG)."
    }
  ],
  "extraComponents": [
    {
      "name": "Title Bar",
      "desc": "Standard full-width title bar used at top of chart panels. Brick red background, white uppercase condensed text, with double-line border below.",
      "html": "<div style=\"background-color: var(--primary); color: var(--on-primary); font-family: var(--font-display); font-size: 20px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; padding: 8px 16px; height: 48px; display: flex; align-items: center; border-bottom: 4px solid var(--border); box-shadow: inset 0 -2px 0 var(--primary);\">CHART TITLE</div>"
    },
    {
      "name": "Metric Cell",
      "desc": "Data display unit with a colored label strip at top, large serif value, optional delta. Double-line border.",
      "html": "<div style=\"background-color: var(--surface); border: 4px solid var(--border); box-shadow: inset 0 0 0 2px var(--primary); padding: 0;\"><div style=\"background-color: var(--secondary-col); color: var(--on-secondary); font-family: var(--font-display); font-size: 12px; font-weight: 700; text-transform: uppercase; padding: 4px 8px; height: 24px; display: flex; align-items: center; letter-spacing: 0.05em; border-bottom: 2px solid var(--border);\">METRIC</div><div style=\"padding: 16px;\"><div style=\"font-family: var(--font-body); font-size: 28px; font-weight: 700; color: var(--on-bg);\">1234</div><div style=\"font-family: var(--font-body); font-size: 12px; color: var(--primary); text-transform: uppercase;\">▲ +5.6%</div></div></div>"
    },
    {
      "name": "Leader-Line Callout",
      "desc": "Small numbered label used with a leader line pointing to a diagram element. Mustard yellow background with thick black outline, white/dark text.",
      "html": "<div style=\"display: inline-flex; align-items: center; gap: 4px;\"><div style=\"width: 24px; height: 24px; background-color: var(--tertiary); color: var(--on-tertiary); border: 2px solid var(--border); display: flex; align-items: center; justify-content: center; font-family: var(--font-body); font-size: 12px; font-weight: 700; line-height: 1;\">1</div><span style=\"font-family: var(--font-body); font-size: 12px; color: var(--on-bg); text-transform: uppercase;\">CATALOG</span></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — SOLAR SYSTEM</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — PLANT ANATOMY</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — WATER CYCLE</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — Evaporation, condensation, and precipitation form the continuous movement of water on Earth. Bilingual labels are placed side by side.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — FIGURE 1A: CROSS-SECTION OF LEAF</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Rounded corners on any UI element — clashes with the sharp didactic chart aesthetic.",
      "avoid": {
        "html": "<button style=\"border-radius: 8px; background-color: #B34A3C; color: white; padding: 8px 16px; font-family: Arial;\">ROUNDED BUTTON</button>",
        "label": "Avoid"
      },
      "rule": "Rounded corners on any UI element — clashes with the sharp didactic chart aesthetic.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Gradients, shadows, or glossy effects — these break the flat unblended ink-on-paper illusion.",
      "avoid": {
        "html": "<div style=\"background: linear-gradient(45deg, #B34A3C, #6B7C52); box-shadow: 2px 2px 10px rgba(0,0,0,0.3); padding: 24px; border-radius: 8px;\">GRADIENT CARD</div>",
        "label": "Avoid"
      },
      "rule": "Gradients, shadows, or glossy effects — these break the flat unblended ink-on-paper illusion.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Sentence-case or lowercase labels — they undercut the authoritative instructional tone of the charts.",
      "avoid": {
        "html": "<span style=\"font-family: Georgia; font-size: 14px;\">solar system diagram</span>",
        "label": "Avoid"
      },
      "rule": "Sentence-case or lowercase labels — they undercut the authoritative instructional tone of the charts.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Use of modern sans-serif fonts like Helvetica or Nunito — they lack the nostalgic offset-print character.",
      "avoid": {
        "html": "<div style=\"font-family: Helvetica, sans-serif; font-size: 16px; color: #333;\">Modern typeface</div>",
        "label": "Avoid"
      },
      "rule": "Use of modern sans-serif fonts like Helvetica or Nunito — they lack the nostalgic offset-print character.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "doAvoidStyle": "Avoid all rounded corners, gradients, drop shadows, modern sans-serif fonts, and non-uppercase labels. Do not use smooth curves or antialiasing effects that suggest digital perfection.",
  "effects": [],
  "motion": [],
  "colors": {
    "primary": "#B34A3C",
    "on-primary": "#FFFFFF",
    "secondary": "#6B7C52",
    "on-secondary": "#FFFFFF",
    "tertiary": "#D4A34B",
    "on-tertiary": "#3B3B3B",
    "surface": "#F5ECD7",
    "on-surface": "#3B3B3B",
    "outline": "#3B3B3B",
    "outline-variant": "#B34A3C"
  },
  "typography": {
    "display": {
      "fontFamily": "var(--font-display)",
      "fontSize": "36px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "0.05em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "var(--font-display)",
      "fontSize": "24px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "0.025em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "Inter",
      "fontSize": "20px",
      "fontWeight": 600,
      "lineHeight": 1.375,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "var(--font-body)",
      "fontSize": "14px",
      "fontWeight": 400,
      "lineHeight": 1.625,
      "letterSpacing": "0em"
    },
    "label": {
      "fontFamily": "Courier Prime",
      "fontSize": "12px",
      "fontWeight": 400,
      "lineHeight": 1.375,
      "letterSpacing": "-0.025em"
    }
  },
  "layouts": {
    "copy": {
      "heroKicker": "NCERT design system — alpha",
      "heroHeadline": "INDIAN SCHOOL SCIENCE CHART SERIES",
      "heroSub": "Hand-painted didactic precision for the digital age. Flat fills, thick outlines, bilingual labels, paper grain.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">EXPLORE THE CHART</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">READ THE MANUAL</button>",
      "navLinks": [
        "CHART INDEX",
        "DIAGRAM GALLERY",
        "CALL-OUT KEY",
        "LEGEND CONFIG",
        "PRINT PROOF"
      ],
      "features": [
        {
          "title": "THICK OUTLINES",
          "desc": "Every shape bounded by a bold black stroke — no gradient, no airbrush, pure offset lithography.",
          "icon": "✒️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">✒️ THICK OUTLINES</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Every shape bounded by a bold black stroke — no gradient, no airbrush, pure offset lithography.</div></div>"
        },
        {
          "title": "SPOT COLOR PALETTE",
          "desc": "Five muted hues on warm cream paper: brick red, olive, mustard, charcoal, and off-white.",
          "icon": "🎨",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🎨 SPOT COLOR PALETTE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Five muted hues on warm cream paper: brick red, olive, mustard, charcoal, and off-white.</div></div>"
        },
        {
          "title": "BILINGUAL LABELS",
          "desc": "English and Devanagari side by side with deliberate baseline misregistration — authentic classroom feel.",
          "icon": "📝",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📝 BILINGUAL LABELS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">English and Devanagari side by side with deliberate baseline misregistration — authentic classroom feel.</div></div>"
        },
        {
          "title": "LEADER LINES",
          "desc": "Numbered callouts with fine black lines terminating in small dots — just like the original wall charts.",
          "icon": "🔗",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔗 LEADER LINES</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Numbered callouts with fine black lines terminating in small dots — just like the original wall charts.</div></div>"
        }
      ],
      "ctaStripHeadline": "PRINT & DISPLAY A FULL-SIZE LITHOGRAPH",
      "ctaStripHtml": "<span class=\"publisher-footer-strip\">PUBLISHED BY NCERT — NEW DELHI · ALL RIGHTS RESERVED</span>",
      "sidebarBrand": "विज्ञान चार्ट · SCIENCE CHART SERIES",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "वनस्पति · BOTANY",
          "active": true
        },
        {
          "icon": "◉",
          "label": "प्राणी · ZOOLOGY",
          "active": false
        },
        {
          "icon": "◉",
          "label": "भौतिकी · PHYSICS",
          "active": false
        },
        {
          "icon": "◉",
          "label": "रसायन · CHEMISTRY",
          "active": false
        }
      ],
      "dashboardTitle": "MORPHOLOGY OF FLOWERING PLANTS — T. S. OF ANTHER",
      "metrics": [
        {
          "label": "TAPETUM TYPE",
          "value": "AMOEBOLD",
          "delta": "",
          "dir": "flat",
          "direction": "flat"
        },
        {
          "label": "POLLEN GRAIN COUNT",
          "value": "142",
          "delta": "+12%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "MICROSPORE MOTHER CELLS",
          "value": "64",
          "delta": "",
          "dir": "flat",
          "direction": "flat"
        },
        {
          "label": "ENDOTHECIAL THICKENING",
          "value": "PRESENT",
          "delta": "",
          "dir": "flat",
          "direction": "flat"
        }
      ],
      "chartTitle": "POLLEN VIABILITY OVER TIME (DAYS AFTER ANTHESIS)",
      "panelATitle": "ANTHER LOBE DIMENSIONS",
      "panelARows": [
        {
          "label": "LENGTH (MM)",
          "value": "3.2",
          "pct": 3.2
        },
        {
          "label": "WIDTH (MM)",
          "value": "1.1",
          "pct": 1.1
        },
        {
          "label": "LOCULE NUMBER",
          "value": "4",
          "pct": 4
        },
        {
          "label": "SEPTUM THICKNESS (MICRONS)",
          "value": "28",
          "pct": 28
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "SPOROPHYTIC TISSUE COMPOSITION",
      "panelBCells": [
        {
          "label": "EPIDERMIS",
          "value": "UNISERIATE",
          "state": "ok"
        },
        {
          "label": "ENDOTHECIUM",
          "value": "FIBROUS",
          "state": "warn"
        },
        {
          "label": "MIDDLE LAYER",
          "value": "2-3 CELLS",
          "state": "err"
        },
        {
          "label": "TAPETUM",
          "value": "AMOEBOLD",
          "state": "ok"
        },
        {
          "label": "MICROSPORANGIUM",
          "value": "BISPORIATE",
          "state": "warn"
        },
        {
          "label": "POLLEN TETRADS",
          "value": "TETRAHEDRAL",
          "state": "err"
        },
        {
          "label": "SPOROPOLLENIN",
          "value": "PRESENT",
          "state": "ok"
        },
        {
          "label": "GERM PORE",
          "value": "3-COLPERATE",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "DAY 0",
        "DAY 1",
        "DAY 2",
        "DAY 3",
        "DAY 4",
        "DAY 5"
      ],
      "series": [
        {
          "data": [
            98,
            94,
            85,
            72,
            54,
            31,
            31,
            31,
            31,
            31,
            31,
            31
          ],
          "label": "VIABILITY (%)",
          "axis": "left",
          "color": "#B34A3C"
        },
        {
          "data": [
            96,
            90,
            78,
            62,
            42,
            22,
            22,
            22,
            22,
            22,
            22,
            22
          ],
          "label": "GERMINATION (%)",
          "axis": "right-1",
          "color": "#6B7C52"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'min-height:100vh;display:flex;align-items:center;justify-content:center;padding:32px;'; var panel = document.createElement('div'); panel.style.cssText = 'max-width:800px;width:100%;background:var(--surface);border:4px solid var(--border);outline:2px solid var(--outline-variant);outline-offset:-6px;'; var titleBar = document.createElement('div'); titleBar.style.cssText = 'background:var(--primary);color:var(--on-primary);font-family:var(--font-display);font-size:20px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;padding:8px 16px;height:48px;display:flex;align-items:center;border-bottom:4px solid var(--border);'; titleBar.textContent = 'SCIENCE CHART SERIES — T.S. OF ANTHER'; panel.appendChild(titleBar); var content = document.createElement('div'); content.style.cssText = 'padding:24px;display:flex;flex-direction:column;gap:16px;font-family:var(--font-body);color:var(--on-bg);'; var diagram = document.createElement('div'); diagram.style.cssText = 'height:200px;background:var(--surface);border:2px solid var(--border);position:relative;overflow:hidden;'; var circle = document.createElement('div'); circle.style.cssText = 'width:100px;height:100px;border:3px solid var(--border);border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:var(--tertiary);'; diagram.appendChild(circle); var label = document.createElement('div'); label.style.cssText = 'position:absolute;bottom:8px;right:8px;font-family:var(--font-body);font-size:10px;text-transform:uppercase;color:var(--on-bg);'; label.textContent = 'FIG. 1: ANTHER LOBE'; diagram.appendChild(label); content.appendChild(diagram); var bilingual = document.createElement('div'); bilingual.style.cssText = 'display:flex;justify-content:space-between;font-family:var(--font-body);font-size:12px;text-transform:uppercase;line-height:1.5;'; bilingual.innerHTML = '<span>ENGLISH LABEL</span><span>हिंदी लेबल</span>'; content.appendChild(bilingual); var footer = document.createElement('div'); footer.style.cssText = 'background:var(--on-bg);color:var(--surface);padding:8px 16px;font-family:var(--font-body);font-size:10px;text-transform:uppercase;text-align:center;'; footer.textContent = 'PUBLISHED BY NCERT — NEW DELHI · ALL RIGHTS RESERVED'; panel.appendChild(footer); el.appendChild(panel); }",
    "showcaseRender": "function(el) { el.innerHTML = '<div style=\"display:grid;grid-template-columns:1fr 1fr;gap:16px;padding:32px;max-width:900px;margin:0 auto;\"><div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">✒️ THICK OUTLINES</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Every shape bounded by a bold black stroke — no gradient, no airbrush, pure offset lithography.</div></div><div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🎨 SPOT COLOR PALETTE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Five muted hues on warm cream paper: brick red, olive, mustard, charcoal, and off-white.</div></div><div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📝 BILINGUAL LABELS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">English and Devanagari side by side with deliberate baseline misregistration — authentic classroom feel.</div></div><div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔗 LEADER LINES</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Numbered callouts with fine black lines terminating in small dots — just like the original wall charts.</div></div></div>'; }",
    "panelCRender": "function(el) { el.innerHTML = '<div style=\"background:var(--surface);border:4px solid var(--border);outline:2px solid var(--outline-variant);outline-offset:-6px;\"><div style=\"background:var(--primary);color:var(--on-primary);font-family:var(--font-display);font-size:16px;font-weight:700;text-transform:uppercase;padding:8px 16px;height:40px;display:flex;align-items:center;border-bottom:4px solid var(--border);\">ANTHER LOBE DIMENSIONS</div><div style=\"padding:16px;\"><div style=\"display:flex;justify-content:space-between;padding:8px 0;border-bottom:2px solid var(--border);font-family:var(--font-body);font-size:12px;text-transform:uppercase;\"><span>LENGTH (MM)</span><span style=\"font-weight:700;\">3.2</span></div><div style=\"display:flex;justify-content:space-between;padding:8px 0;border-bottom:2px solid var(--border);font-family:var(--font-body);font-size:12px;text-transform:uppercase;\"><span>WIDTH (MM)</span><span style=\"font-weight:700;\">1.1</span></div><div style=\"display:flex;justify-content:space-between;padding:8px 0;border-bottom:2px solid var(--border);font-family:var(--font-body);font-size:12px;text-transform:uppercase;\"><span>LOCULE NUMBER</span><span style=\"font-weight:700;\">4</span></div><div style=\"display:flex;justify-content:space-between;padding:8px 0;border-bottom:2px solid var(--border);font-family:var(--font-body);font-size:12px;text-transform:uppercase;\"><span>SEPTUM THICKNESS (MICRONS)</span><span style=\"font-weight:700;\">28</span></div></div></div>'; }",
    "heroBackground": "function(el) { el.style.background = 'var(--bg)'; }",
    "ctaBackground": "function(el) { el.style.background = 'var(--on-bg)'; }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText='height:4px;background:var(--border);margin:0;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = 'var(--bg)'; }",
    "surfaceOverlay": "function(el) { var ov=document.createElement('div'); ov.style.cssText='position:absolute;inset:0;z-index:2;pointer-events:none;border:2px solid var(--border);opacity:0.15;transform:translate(1px,1px);'; el.appendChild(ov); }"
  },
  "shadcnTokens": {
    "--color-background": "#F5ECD7",
    "--color-popover": "#F5ECD7",
    "--color-foreground": "#3B3B3B",
    "--color-card-foreground": "#3B3B3B",
    "--color-popover-foreground": "#3B3B3B",
    "--color-card": "#F5ECD7",
    "--color-muted": "#F5ECD7",
    "--color-muted-foreground": "#5A5A5A",
    "--color-primary": "#B34A3C",
    "--color-ring": "#B34A3C",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#6B7C52",
    "--color-accent": "#6B7C52",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
    "--color-border": "#3B3B3B",
    "--color-input": "#3B3B3B",
    "--color-destructive": "#B34A3C"
  },
  "shadcnTokensClassic": {
    "--background": "#F5ECD7",
    "--popover": "#F5ECD7",
    "--foreground": "#3B3B3B",
    "--card-foreground": "#3B3B3B",
    "--popover-foreground": "#3B3B3B",
    "--card": "#F5ECD7",
    "--muted": "#F5ECD7",
    "--muted-foreground": "#5A5A5A",
    "--primary": "#B34A3C",
    "--ring": "#B34A3C",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#6B7C52",
    "--accent": "#6B7C52",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#3B3B3B",
    "--input": "#3B3B3B",
    "--destructive": "#B34A3C"
  }
});
