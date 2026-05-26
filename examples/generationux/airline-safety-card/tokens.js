registerSystem({
  "meta": {
    "name": "Airline Safety Card",
    "tagline": "Utilitarian, universally-readable design system based on mid-20th century airline safety instruction cards",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
  },
  "yamlTokens": {
    "name": "Airline Safety Card",
    "colors": {
      "ok": "#00A651",
      "warn": "#F3C300",
      "err": "#D52737",
      "delta-up": "#00A651",
      "delta-down": "#D52737",
      "delta-flat": "#8B9BB5"
    },
    "typography": {
      "display": {
        "fontFamily": "Inter, Arimo, sans-serif",
        "fontSize": "48px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.1em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Inter, Arimo, sans-serif",
        "fontSize": "24px",
        "fontWeight": 700,
        "lineHeight": 1.375,
        "letterSpacing": "0.05em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Inter, Arimo, sans-serif",
        "fontSize": "20px",
        "fontWeight": 700,
        "lineHeight": 1.375,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Inter, Arimo, sans-serif",
        "fontSize": "14px",
        "fontWeight": 400,
        "lineHeight": 1.625,
        "letterSpacing": "0.05em",
        "textTransform": "uppercase"
      },
      "label": {
        "fontFamily": "Inter, Arimo, sans-serif",
        "fontSize": "12px",
        "fontWeight": 400,
        "lineHeight": 1,
        "letterSpacing": "0.05em",
        "textTransform": "uppercase"
      }
    },
    "rounded": {
      "chip": "9999px"
    },
    "spacing": {
      "component-internal": "16px",
      "section-internal": "24px",
      "page-edge": "24px",
      "gap-component": "16px",
      "gap-section": "32px",
      "height-sm": "40px",
      "height-md": "48px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "#1A2744",
        "textColor": "#FFFFFF",
        "rounded": "0px",
        "padding": "16px"
      },
      "button-primary-hover": {
        "backgroundColor": "#1A2744",
        "textColor": "#FFFFFF",
        "padding": "16px"
      },
      "button-emergency": {
        "backgroundColor": "{colors.err}",
        "textColor": "#FFFFFF",
        "rounded": "0px",
        "padding": "16px"
      },
      "card": {
        "backgroundColor": "#F5F0E8",
        "rounded": "8px",
        "padding": "24px"
      },
      "step-number-badge": {
        "backgroundColor": "#1A2744",
        "textColor": "#FFFFFF",
        "size": "32px",
        "rounded": "{rounded.chip}"
      },
      "instruction-header-bar": {
        "backgroundColor": "#1A2744",
        "textColor": "#FFFFFF",
        "height": "40px"
      },
      "pictogram-cell": {
        "backgroundColor": "#F5F0E8",
        "size": "64px",
        "padding": "4px"
      }
    },
    "version": "alpha",
    "description": "A utilitarian, universally-readable design system based on mid-20th century airline safety instruction cards. Flat vector rendering with spot-color logic, grid-based layout, and sequential pictograms in an all-caps grotesque sans-serif.",
    "provenance": {
      "coverage_status": "minimal",
      "identity_description": "The slug `airline-safety-card` is ambiguous: it does not specify an airline, era, or jurisdiction. The most plausible interpretation is the generic airline safety instruction card mandated by aviation authorities, focusing on the period from the 1960s through the 1990s when these cards established a recognisable semiotic vocabulary. This record treats that generic class as the subject, with the un",
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
          "url": "https://en.wikipedia.org/wiki/Aircraft_safety_card",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia",
          "confidence_original": "high"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Helvetica (or Helvetica Neue)",
          "foundry": null,
          "year": null,
          "google_fonts": "Inter",
          "attestation": "conventional"
        },
        {
          "name": "Frutiger",
          "foundry": null,
          "year": null,
          "google_fonts": "Nunito Sans",
          "attestation": "conventional"
        },
        {
          "name": "Univers",
          "foundry": null,
          "year": null,
          "google_fonts": "Manrope",
          "attestation": "conventional"
        }
      ],
      "flags": [
        "one_usable_url_only",
        "2_robots_disallowed_urls"
      ],
      "honest_gaps": [
        {
          "\"1. **Colour": "** No hex, Pantone, or spectrophotometric values verified for any specific card. All hex approximations are [unverified] or [conventional]. The exact shade of red, yellow, and blue across carriers and decades is unknown.\""
        }
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#F5F0E8",
    "--on-bg": "#1A2744",
    "--primary": "#1A2744",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#D52737",
    "--on-secondary": "#FFFFFF",
    "--surface": "#F5F0E8",
    "--on-bg-muted": "#7c8ca6",
    "--border": "#1A2744",
    "--error": "#D52737",
    "--font-display": "Inter",
    "--font-body": "Inter",
    "--radius-default": "0px",
    "--radius-card": "8px",
    "--radius-btn": "0px",
    "--radius-chip": "9999px"
  },
  "semanticColors": {
    "ok": "#00A651",
    "warn": "#F3C300",
    "err": "#D52737",
    "delta-up": "#00A651",
    "delta-down": "#D52737",
    "delta-flat": "#8B9BB5",
    "deltaUp": "#00A651",
    "deltaDown": "#D52737",
    "deltaFlat": "#8B9BB5",
    "live": "#1A2744",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#7c8ca6",
    "chartFont": "Inter"
  },
  "elevation": {
    "flat": {
      "shadow": "none"
    }
  },
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "paper",
    "grain": {
      "type": "feTurbulence",
      "baseFrequency": 0.65,
      "numOctaves": 3,
      "blend": "overlay",
      "opacity": 0.05
    },
    "foldCrease": {
      "style": "dashed",
      "width": "1px",
      "color": "var(--border, #8B9BB5)",
      "opacity": 0.1
    },
    "inkMisregistration": {
      "offset": "1px",
      "colorPlate": "red"
    },
    "halftone": {
      "enabled": false
    }
  },
  "interactionModel": {
    "hover": {
      "opacity": 0.8
    },
    "active": {
      "opacity": 0.65
    },
    "focus": {
      "outline": "2px solid var(--error)",
      "outlineOffset": "2px"
    },
    "disabled": {
      "opacity": 0.5
    }
  },
  "globalFilter": "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><defs><filter id=\"paper-grain\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" result=\"noise\"/><feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.96 0 0 0 0 0.94 0 0 0 0 0.91 0 0 0 0.05 0\" in=\"noise\" result=\"coloredNoise\"/><feBlend mode=\"overlay\" in=\"SourceGraphic\" in2=\"coloredNoise\"/></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-body), Arimo, sans-serif; background: var(--bg); color: var(--on-bg); margin: 0; padding: 0;",
  "globalCss": ".ds-layout-frame { box-sizing: border-box; } .ds-layout-frame .fold-line-indicator { border-top: 1px dashed var(--border, #8B9BB5); opacity: 0.1; } .ds-layout-frame .pictogram-stroke { stroke: var(--primary); stroke-width: 2; fill: none; } .ds-layout-frame .prohibition-symbol .circle { fill: none; stroke: var(--error); stroke-width: 3; } .ds-layout-frame .prohibition-symbol .slash { stroke: var(--error); stroke-width: 3; } .ds-layout-frame .step-number-badge { background: var(--primary); color: var(--on-primary); border-radius: var(--radius-chip, 9999px); width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; font-weight: 700; } .ds-layout-frame .instruction-header-bar { background: var(--primary); color: var(--on-primary); height: 40px; display: flex; align-items: center; padding: 0 16px; text-transform: uppercase; letter-spacing: 0.1em; } .ds-layout-frame .pictogram-cell { background: var(--surface); width: 64px; height: 64px; padding: 4px; }",
  "interactionStyles": ".ds-layout-frame button:hover, .ds-layout-frame .card:hover { opacity: 0.8; } .ds-layout-frame button:active { opacity: 0.65; } .ds-layout-frame button:focus-visible { outline: 2px solid var(--error); outline-offset: 2px; } .ds-layout-frame [disabled] { opacity: 0.5; pointer-events: none; }",
  "chartStyle": {
    "background": "#F5F0E8",
    "gridLines": "1px solid #8B9BB5",
    "axisLabels": "Inter, sans-serif, 12px, uppercase, tracking-wider, color #1A2744",
    "lineFill": "#1A2744",
    "barFill": "#1A2744",
    "accentLine": "#00A651",
    "criticalLine": "#D52737",
    "deltaUp": "#00A651",
    "deltaDown": "#D52737",
    "deltaFlat": "#8B9BB5",
    "chartSurfaceTexture": "paper grain",
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#7c8ca6",
    "fontFamily": "Inter"
  },
  "dashboardStyle": {
    "layout": "Grid of square metric cells, 4 columns at ≥1024px, 3 columns at 768px, 2 columns at 375px. Cells are separated by fold-line dashed rules.",
    "density": "Compact – each cell is 64×64px with 4px gutters. Header bars are 40px tall.",
    "panelTreatment": "Flush card panels with navy border, cream fill, optional paper-grain simulation via feTurbulence. No elevation or shadow.",
    "dataVizStyle": "Spot-colour flat bar/line charts on cream surface. Bars in navy for nominal data, green for exit-path metrics, red for critical thresholds. No glow or transparency.",
    "signatureElement": "Exit map pictogram with directional arrows and solid green emergency lighting strips."
  },
  "landingStyle": {
    "heroApproach": "Single centred instructional card panel on a neutral background, mimicking the physical safety card laid flat.",
    "scrollBehavior": "None – the landing acts as a static poster. If longer content, sections are separated by fold-crease dashed rules.",
    "ctaStyle": "Prominent emergency red button placed at the bottom of the instruction card, with wide uppercase label.",
    "signatureMoment": "The fold-crease line is revealed as the user scrolls or transitions between sections, emphasising the printed card metaphor."
  },
  "buttons": [
    {
      "name": "Primary",
      "desc": "Solid navy button for primary actions. Uses full uppercase grotesque face with wide tracking.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||'';this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+' ':'')+'brightness(1.12)'\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||''\" style=\"background: var(--primary); color: var(--on-primary); border: none; padding: 16px; font-family: var(--font-display); font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; border-radius: var(--radius-btn);\">EMERGENCY EVAC</button>",
      "label": "Primary",
      "note": "Solid navy button for primary actions. Uses full uppercase grotesque face with wide tracking."
    },
    {
      "name": "Emergency",
      "desc": "Red button reserved for critical emergency actions. Same treatment as primary but with error color.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||'';this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+' ':'')+'brightness(1.12)'\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||''\" style=\"background: var(--error); color: var(--on-secondary); border: none; padding: 16px; font-family: var(--font-display); font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; border-radius: var(--radius-btn);\">PULL TAB</button>",
      "label": "Emergency",
      "note": "Red button reserved for critical emergency actions. Same treatment as primary but with error color."
    },
    {
      "name": "Outline",
      "desc": "Outline button for secondary selections. Uses transparent fill with solid navy border.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||'';this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+' ':'')+'brightness(1.12)'\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||''\" style=\"background: transparent; color: var(--primary); border: 2px solid var(--border); padding: 14px 16px; font-family: var(--font-display); font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; border-radius: var(--radius-btn);\">INSTRUCTION</button>",
      "label": "Outline",
      "note": "Outline button for secondary selections. Uses transparent fill with solid navy border."
    }
  ],
  "cards": [
    {
      "name": "Instruction Card",
      "desc": "Main card with navy header bar, 4-column pictogram grid, and a dashed fold line simulating the physical safety card.",
      "html": "<div style=\"background: var(--surface); border: 2px solid var(--border); border-radius: var(--radius-card); padding: 24px; position: relative;\"><div style=\"height: 40px; background: var(--primary); color: var(--on-primary); display: flex; align-items: center; padding: 0 16px; font-family: var(--font-display); font-size: 12px; letter-spacing: 0.1em;\">IN CASE OF EMERGENCY</div><div style=\"display: grid; grid-template-columns: repeat(4, 64px); gap: 4px; margin-top: 16px;\"><div style=\"width: 64px; height: 64px; background: var(--surface); border: 1px solid var(--border); position: relative;\"><span style=\"position: absolute; top: 2px; left: 2px; width: 32px; height: 32px; background: var(--primary); color: var(--on-primary); border-radius: var(--radius-chip); display: flex; align-items: center; justify-content: center; font-size: 14px;\">1</span></div><div style=\"width: 64px; height: 64px; background: var(--surface); border: 1px solid var(--border); position: relative;\"><span style=\"position: absolute; top: 2px; left: 2px; width: 32px; height: 32px; background: var(--primary); color: var(--on-primary); border-radius: var(--radius-chip); display: flex; align-items: center; justify-content: center; font-size: 14px;\">2</span></div><div style=\"width: 64px; height: 64px; background: var(--surface); border: 1px solid var(--border); position: relative;\"><span style=\"position: absolute; top: 2px; left: 2px; width: 32px; height: 32px; background: var(--primary); color: var(--on-primary); border-radius: var(--radius-chip); display: flex; align-items: center; justify-content: center; font-size: 14px;\">3</span></div><div style=\"width: 64px; height: 64px; background: var(--surface); border: 1px solid var(--border); position: relative;\"><span style=\"position: absolute; top: 2px; left: 2px; width: 32px; height: 32px; background: var(--primary); color: var(--on-primary); border-radius: var(--radius-chip); display: flex; align-items: center; justify-content: center; font-size: 14px;\">4</span></div></div><div style=\"position: absolute; left: 0; right: 0; top: 50%; height: 1px; border-top: 1px dashed #8B9BB5; opacity: 0.1;\"></div></div>",
      "label": "Instruction Card",
      "note": "Main card with navy header bar, 4-column pictogram grid, and a dashed fold line simulating the physical safety card."
    },
    {
      "name": "Metric Cell Card",
      "desc": "Compact card for displaying a single metric or status with a delta indicator. Flat solid fill with navy border.",
      "html": "<div style=\"background: var(--surface); border: 2px solid var(--border); padding: 16px; width: 120px;\"><span style=\"font-family: var(--font-body); font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; display: block;\">EXITS</span><span style=\"font-family: var(--font-display); font-size: 24px; font-weight: 700; display: block;\">4</span><span style=\"font-family: var(--font-body); font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;\">▲ 2</span></div>",
      "label": "Metric Cell Card",
      "note": "Compact card for displaying a single metric or status with a delta indicator. Flat solid fill with navy border."
    }
  ],
  "forms": [
    {
      "name": "Text Input",
      "desc": "Text input with uppercase label, solid navy border, cream fill, and grotesque upright styling.",
      "html": "<div style=\"margin-bottom: 16px;\"><label style=\"font-family: var(--font-body); font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;\">SEAT NUMBER</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" style=\"background: var(--surface); border: 2px solid var(--border); padding: 8px 12px; font-family: var(--font-body); font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--on-bg); border-radius: var(--radius-default);\"></div>",
      "label": "Text Input",
      "stateLabel": "Text input with uppercase label, solid navy border, cream fill, and grotesque upright styling."
    },
    {
      "name": "Select Dropdown",
      "desc": "Dropdown select with uppercase label, navy border, and uppercase option text.",
      "html": "<div style=\"margin-bottom: 16px;\"><label style=\"font-family: var(--font-body); font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;\">EXIT ROW</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--surface); border: 2px solid var(--border); padding: 8px 12px; font-family: var(--font-body); font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--on-bg); border-radius: var(--radius-default);\"><option value=\"\">YES</option><option value=\"\">NO</option></select></div>",
      "label": "Select Dropdown",
      "stateLabel": "Dropdown select with uppercase label, navy border, and uppercase option text."
    },
    {
      "name": "Checkbox",
      "desc": "Checkbox with uppercase label. Uses navy accent colour for checked state.",
      "html": "<div style=\"margin-bottom: 16px;\"><label style=\"font-family: var(--font-body); font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; display: flex; align-items: center;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"margin-right: 8px; accent-color: var(--primary);\">I HAVE READ THE CARD</label></div>",
      "label": "Checkbox",
      "stateLabel": "Checkbox with uppercase label. Uses navy accent colour for checked state."
    }
  ],
  "extraComponents": [
    {
      "name": "Step Number Badge",
      "desc": "Circular step badge in navy with white numeral, placed at the top-left of a pictogram cell.",
      "html": "<span style=\"display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px; background: var(--primary); color: var(--on-primary); border-radius: var(--radius-chip); font-family: var(--font-display); font-size: 14px; font-weight: 700;\">3</span>"
    },
    {
      "name": "Prohibition Symbol",
      "desc": "Red circle with diagonal slash indicating forbidden action. Used for error status cells.",
      "html": "<div style=\"width: 20px; height: 20px; border: 2px solid var(--error); border-radius: 50%; position: relative;\"><div style=\"position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(45deg); width: 16px; height: 2px; background: var(--error);\"></div></div>"
    },
    {
      "name": "Fold Line Indicator",
      "desc": "1px dashed rule in outline-variant colour to separate card sections, simulating a physical fold crease.",
      "html": "<div style=\"width: 100%; height: 1px; border-top: 1px dashed #8B9BB5; opacity: 0.1;\"></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — EVACUATION</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — OXYGEN MASKS</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — LIFE VEST</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — PULL TAB DOWN FIRMLY</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — FASTEN SEAT BELT</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Do not use lowercase text in instructional contexts – all caps must be maintained for legibility and consistency with the safety card vocabulary.",
      "avoid": {
        "html": "<p style=\"font-family: var(--font-body); font-size: 14px;\">Pull tab down firmly</p>",
        "label": "Avoid"
      },
      "rule": "Do not use lowercase text in instructional contexts – all caps must be maintained for legibility and consistency with the safety card vocabulary.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not apply gradients or drop shadows – all fills and strokes must be flat solid colours to preserve the printed card aesthetic.",
      "avoid": {
        "html": "<div style=\"background: linear-gradient(180deg, var(--primary), var(--surface)); padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.2);\" ></div>",
        "label": "Avoid"
      },
      "rule": "Do not apply gradients or drop shadows – all fills and strokes must be flat solid colours to preserve the printed card aesthetic.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not use rounded corners on buttons or form inputs – buttons should have zero border-radius to match the sharp die-cut appearance.",
      "avoid": {
        "html": "<button style=\"background: var(--primary); color: var(--on-primary); border: none; padding: 16px; border-radius: 8px;\">EMERGENCY</button>",
        "label": "Avoid"
      },
      "rule": "Do not use rounded corners on buttons or form inputs – buttons should have zero border-radius to match the sharp die-cut appearance.",
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
  "layouts": {
    "copy": {
      "heroKicker": "IN CASE OF EMERGENCY",
      "heroHeadline": "CABIN SAFETY DRILL",
      "heroSub": "REVIEW PROCEDURES FOR A SAFE FLIGHT",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">START DRILL</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">CARD INDEX</button>",
      "navLinks": [
        "EXITS",
        "EVACUATION",
        "OXYGEN",
        "LIFE VEST",
        "BRACE"
      ],
      "features": [
        {
          "title": "SEAT BELT",
          "desc": "FASTEN LOW AND TIGHT ACROSS LAP",
          "icon": "🔒",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔒 SEAT BELT</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">FASTEN LOW AND TIGHT ACROSS LAP</div></div>"
        },
        {
          "title": "OXYGEN MASK",
          "desc": "PULL DOWN. PLACE OVER NOSE AND MOUTH",
          "icon": "🫁",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🫁 OXYGEN MASK</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">PULL DOWN. PLACE OVER NOSE AND MOUTH</div></div>"
        },
        {
          "title": "LIFE VEST",
          "desc": "PLACE OVER HEAD. TIE AT WAIST. INFLATE UPON EXIT",
          "icon": "🦺",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🦺 LIFE VEST</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">PLACE OVER HEAD. TIE AT WAIST. INFLATE UPON EXIT</div></div>"
        },
        {
          "title": "EXIT ROW",
          "desc": "LOCATE NEAREST EXIT. FOLLOW FLOOR LIGHTS",
          "icon": "🚪",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🚪 EXIT ROW</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">LOCATE NEAREST EXIT. FOLLOW FLOOR LIGHTS</div></div>"
        }
      ],
      "ctaStripHeadline": "EVERY FLIGHT. EVERY SEAT. BE READY.",
      "ctaStripHtml": "<p>REVIEW YOUR SAFETY CARD BEFORE TAKEOFF</p><button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">DOWNLOAD CARD</button>",
      "sidebarBrand": "CARRIER SAFETY CARD",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "CABIN MAP",
          "active": true
        },
        {
          "icon": "◉",
          "label": "DRILL LOG",
          "active": false
        },
        {
          "icon": "◉",
          "label": "EQUIPMENT",
          "active": false
        },
        {
          "icon": "◉",
          "label": "COMPLIANCE",
          "active": false
        }
      ],
      "dashboardTitle": "EVACUATION STATUS",
      "metrics": [
        {
          "label": "SEAT BELTS LATCHED",
          "value": "142",
          "delta": "+4",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "EVACUATION TIME",
          "value": "00:42",
          "delta": "-8S",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "OXYGEN DEPLOYED",
          "value": "0",
          "delta": "0",
          "dir": "flat",
          "direction": "flat"
        },
        {
          "label": "EXIT PATH CLEAR",
          "value": "8/8",
          "delta": "+2",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "DRILL COMPLETION BY MONTH",
      "panelATitle": "DRILL COMPLETION",
      "panelARows": [
        {
          "label": "BRACE POSITION",
          "value": "PASS",
          "pct": 0
        },
        {
          "label": "MASK DONNING",
          "value": "PASS",
          "pct": 0
        },
        {
          "label": "VEST INFLATION",
          "value": "FAIL",
          "pct": 0
        },
        {
          "label": "EXIT OPENING",
          "value": "PASS",
          "pct": 0
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "CHECKLIST ITEMS",
      "panelBCells": [
        {
          "label": "SEAT BACK",
          "value": "UPRIGHT",
          "state": "ok"
        },
        {
          "label": "TRAY TABLE",
          "value": "STOWED",
          "state": "warn"
        },
        {
          "label": "WINDOW SHADE",
          "value": "OPEN",
          "state": "err"
        },
        {
          "label": "LAP BELT",
          "value": "SECURED",
          "state": "ok"
        },
        {
          "label": "BAGS",
          "value": "UNDER SEAT",
          "state": "warn"
        },
        {
          "label": "ELECTRONICS",
          "value": "OFF",
          "state": "err"
        },
        {
          "label": "ROW CARD",
          "value": "READ",
          "state": "ok"
        },
        {
          "label": "EXIT PATH",
          "value": "CLEAR",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN"
      ],
      "series": [
        {
          "data": [
            85,
            88,
            90,
            87,
            92,
            94,
            94,
            94,
            94,
            94,
            94,
            94
          ],
          "label": "PASS",
          "axis": "left",
          "color": "#1A2744"
        },
        {
          "data": [
            15,
            12,
            10,
            13,
            8,
            6,
            6,
            6,
            6,
            6,
            6,
            6
          ],
          "label": "FAIL",
          "axis": "right-1",
          "color": "#D52737"
        }
      ]
    },
    "splashRender": "function(el) { el.innerHTML = '<div style=\"background:var(--surface);border:2px solid var(--border);border-radius:8px;padding:24px;max-width:600px;margin:0 auto;position:relative;font-family:var(--font-display);text-transform:uppercase;letter-spacing:0.05em;\"><div style=\"background:var(--primary);color:var(--on-primary);padding:12px 16px;font-size:13px;letter-spacing:0.1em;\">IN CASE OF EMERGENCY</div><div style=\"display:grid;grid-template-columns:repeat(4,64px);gap:4px;margin-top:16px;justify-content:center;\"><div style=\"width:64px;height:64px;background:var(--surface);border:1px solid var(--border);position:relative;\"><span style=\"position:absolute;top:2px;left:2px;width:32px;height:32px;background:var(--primary);color:var(--on-primary);border-radius:9999px;display:flex;align-items:center;justify-content:center;font-size:14px;\">1</span></div><div style=\"width:64px;height:64px;background:var(--surface);border:1px solid var(--border);position:relative;\"><span style=\"position:absolute;top:2px;left:2px;width:32px;height:32px;background:var(--primary);color:var(--on-primary);border-radius:9999px;display:flex;align-items:center;justify-content:center;font-size:14px;\">2</span></div><div style=\"width:64px;height:64px;background:var(--surface);border:1px solid var(--border);position:relative;\"><span style=\"position:absolute;top:2px;left:2px;width:32px;height:32px;background:var(--primary);color:var(--on-primary);border-radius:9999px;display:flex;align-items:center;justify-content:center;font-size:14px;\">3</span></div><div style=\"width:64px;height:64px;background:var(--surface);border:1px solid var(--border);position:relative;\"><span style=\"position:absolute;top:2px;left:2px;width:32px;height:32px;background:var(--primary);color:var(--on-primary);border-radius:9999px;display:flex;align-items:center;justify-content:center;font-size:14px;\">4</span></div></div><div style=\"position:absolute;left:0;right:0;top:50%;height:1px;border-top:1px dashed var(--border);opacity:0.1;\"></div><div style=\"margin-top:24px;text-align:center;\"><button style=\"background:var(--error);color:#fff;border:none;padding:16px 24px;font-family:var(--font-display);font-size:14px;text-transform:uppercase;letter-spacing:0.05em;border-radius:0;\">START DRILL</button></div></div>'; }",
    "showcaseRender": "function(el) { el.innerHTML = '<div style=\"background:var(--surface);border:2px solid var(--border);padding:16px;display:flex;flex-direction:column;gap:8px;\"><div style=\"background:var(--primary);color:var(--on-primary);padding:8px 12px;font-family:var(--font-display);font-size:11px;letter-spacing:0.1em;\">EVACUATION DRILL</div><div style=\"display:flex;gap:4px;flex-wrap:wrap;\"><div style=\"width:48px;height:48px;background:var(--surface);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-size:10px;\">⬆️</div><div style=\"width:48px;height:48px;background:var(--surface);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-size:10px;\">🪢</div><div style=\"width:48px;height:48px;background:var(--surface);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-size:10px;\">😷</div></div></div>'; }",
    "panelCRender": "function(el) { el.innerHTML = '<div style=\"background:var(--surface);border:2px solid var(--border);padding:16px;\"><div style=\"display:flex;justify-content:space-between;margin-bottom:12px;\"><div><span style=\"font-family:var(--font-body);font-size:11px;text-transform:uppercase;letter-spacing:0.05em;\">SEAT BELTS</span><span style=\"font-family:var(--font-display);font-size:24px;font-weight:700;display:block;\">142</span><span style=\"font-family:var(--font-body);font-size:12px;color:var(--accent-green, #00A651);\">▲ +4</span></div><div><span style=\"font-family:var(--font-body);font-size:11px;text-transform:uppercase;letter-spacing:0.05em;\">EXIT PATH</span><span style=\"font-family:var(--font-display);font-size:24px;font-weight:700;display:block;\">8/8</span><span style=\"font-family:var(--font-body);font-size:12px;color:var(--accent-green, #00A651);\">▲ +2</span></div></div><div style=\"height:1px;border-top:1px dashed var(--border);opacity:0.1;margin:12px 0;\"></div><div style=\"display:grid;grid-template-columns:repeat(4,1fr);gap:4px;\"><div style=\"background:var(--surface);border:1px solid var(--border);padding:4px;text-align:center;font-family:var(--font-body);font-size:9px;text-transform:uppercase;\">SEAT BACK<br><span style=\"color:var(--accent-green, #00A651);\">UPRIGHT</span></div><div style=\"background:var(--surface);border:1px solid var(--border);padding:4px;text-align:center;font-family:var(--font-body);font-size:9px;text-transform:uppercase;\">TRAY<br><span style=\"color:var(--accent-yellow, #F3C300);\">STOWED</span></div><div style=\"background:var(--surface);border:1px solid var(--border);padding:4px;text-align:center;font-family:var(--font-body);font-size:9px;text-transform:uppercase;\">SHADE<br><span style=\"color:var(--error);\">OPEN</span></div><div style=\"background:var(--surface);border:1px solid var(--border);padding:4px;text-align:center;font-family:var(--font-body);font-size:9px;text-transform:uppercase;\">BELT<br><span style=\"color:var(--accent-green, #00A651);\">SECURED</span></div></div></div>'; }",
    "heroBackground": "function(el) { el.style.background = 'var(--bg)'; }",
    "ctaBackground": "function(el) { el.style.background = 'var(--surface)'; }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'height:1px;border-top:1px dashed var(--border);opacity:0.1;margin:0;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = 'var(--bg)'; }",
    "surfaceOverlay": "function(el) { var ov = document.createElement('div'); ov.style.cssText = 'position:absolute;inset:0;pointer-events:none;mix-blend-mode:overlay;opacity:0.05;filter:url(#paper-grain);'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(tick) { var seed = tick % 100; var color = '#1A2744'; var canvas = document.createElement('div'); canvas.style.cssText = 'position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:0.08;pointer-events:none;font-family:var(--font-display);font-size:12px;letter-spacing:0.3em;text-transform:uppercase;color:'+color+';'; canvas.textContent = 'SAFETY CARD ' + seed; return canvas; }",
  "ctaStripHtml": "<p>REVIEW YOUR SAFETY CARD BEFORE TAKEOFF</p><button onmouseenter=\"this.dataset.guxFilter=this.style.filter||'';this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+' ':'')+'brightness(1.12)'\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||''\">DOWNLOAD CARD</button>",
  "shadcnTokens": {
    "--color-background": "#F5F0E8",
    "--color-popover": "#F5F0E8",
    "--color-foreground": "#1A2744",
    "--color-card-foreground": "#1A2744",
    "--color-popover-foreground": "#1A2744",
    "--color-card": "#F5F0E8",
    "--color-muted": "#F5F0E8",
    "--color-muted-foreground": "#7c8ca6",
    "--color-primary": "#1A2744",
    "--color-ring": "#1A2744",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#D52737",
    "--color-accent": "#D52737",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
    "--color-border": "#1A2744",
    "--color-input": "#1A2744",
    "--color-destructive": "#D52737"
  },
  "shadcnTokensClassic": {
    "--background": "#F5F0E8",
    "--popover": "#F5F0E8",
    "--foreground": "#1A2744",
    "--card-foreground": "#1A2744",
    "--popover-foreground": "#1A2744",
    "--card": "#F5F0E8",
    "--muted": "#F5F0E8",
    "--muted-foreground": "#7c8ca6",
    "--primary": "#1A2744",
    "--ring": "#1A2744",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#D52737",
    "--accent": "#D52737",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#1A2744",
    "--input": "#1A2744",
    "--destructive": "#D52737"
  }
});
