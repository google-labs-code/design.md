registerSystem({
  "meta": {
    "name": "NYCTA Transit Graphics Standards Manual (1970)",
    "tagline": "Modernist wayfinding — Helvetica Medium, solid spot colors, and generous whitespace.",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap"
  },
  "yamlTokens": {
    "name": "NYCTA Transit Graphics Standards Manual (1970)",
    "colors": {
      "primary": "#000000",
      "on-primary": "#FFFFFF",
      "surface": "#FFFFFF",
      "on-surface": "#000000",
      "route-red": "#EE352E",
      "route-green": "#00933C",
      "route-blue": "#0039A6",
      "route-yellow": "#FCCC0A",
      "route-orange": "#FF6319",
      "route-purple": "#B933AD",
      "route-brown": "#996633",
      "route-gray": "#A7A9AC",
      "ok": "#00933C",
      "warn": "#FCCC0A",
      "err": "#EE352E",
      "delta-up": "#00933C",
      "delta-down": "#EE352E",
      "delta-flat": "#A7A9AC"
    },
    "typography": {
      "display": {
        "fontFamily": "Inter, Arimo, sans-serif",
        "fontSize": "60px",
        "fontWeight": 500,
        "lineHeight": 1.25,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Inter, Arimo, sans-serif",
        "fontSize": "36px",
        "fontWeight": 500,
        "lineHeight": 1.25,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Inter, Arimo, sans-serif",
        "fontSize": "24px",
        "fontWeight": 500,
        "lineHeight": 1.25,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Inter, Arimo, sans-serif",
        "fontSize": "16px",
        "fontWeight": 500,
        "lineHeight": 1.5,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "label": {
        "fontFamily": "Inter, Arimo, sans-serif",
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
      "chip": "0px",
      "full": "9999px"
    },
    "spacing": {
      "page-edge": "32px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "{colors.primary}",
        "textColor": "{colors.on-primary}",
        "rounded": "{rounded.default}",
        "padding": "8px"
      },
      "station-name-sign": {
        "backgroundColor": "{colors.primary}",
        "textColor": "{colors.on-primary}",
        "rounded": "{rounded.default}",
        "padding": "8px"
      },
      "input": {
        "backgroundColor": "{colors.surface}",
        "textColor": "{colors.on-surface}",
        "rounded": "{rounded.default}",
        "padding": "8px"
      },
      "route-bullet-local": {
        "backgroundColor": "{colors.route-red}",
        "textColor": "{colors.on-primary}",
        "size": "24px",
        "rounded": "{rounded.full}"
      }
    },
    "version": "alpha",
    "description": "A rigorous modernist wayfinding system based on Helvetica Medium, a restricted spot-color palette, and generous whitespace, designed by Massimo Vignelli and Bob Noorda for the New York City Transit Authority.",
    "provenance": {
      "coverage_status": "sparse",
      "identity_description": "",
      "manual_enrichment_required": false,
      "imagery_count": 3,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": null,
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "commons.wikimedia.org",
          "count": 1
        },
        {
          "host": "www.nytransitmuseum.org",
          "count": 1
        },
        {
          "host": "en.wikipedia.org",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://commons.wikimedia.org/wiki/Category:New_York_City_Subway_signs",
          "host": "commons.wikimedia.org",
          "institution": "Wikimedia Commons",
          "confidence_original": "medium"
        },
        {
          "url": "https://www.nytransitmuseum.org/",
          "host": "www.nytransitmuseum.org",
          "institution": "New York Transit Museum",
          "confidence_original": "medium"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Helvetica",
          "host": "en.wikipedia.org",
          "institution": null,
          "confidence_original": "high"
        }
      ],
      "typefaces_attested": {},
      "flags": [
        "sparse_imagery",
        "no_typography_extracted",
        "no_colour_extracted"
      ],
      "honest_gaps": {}
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#FFFFFF",
    "--on-bg": "#000000",
    "--primary": "#000000",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#0039A6",
    "--on-secondary": "#FFFFFF",
    "--surface": "#FFFFFF",
    "--on-bg-muted": "#1A1A1A",
    "--border": "#000000",
    "--error": "#EE352E",
    "--font-display": "Inter",
    "--font-body": "Inter",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "9999px"
  },
  "semanticColors": {
    "ok": "#00933C",
    "warn": "#FCCC0A",
    "err": "#EE352E",
    "delta-up": "#00933C",
    "delta-down": "#EE352E",
    "delta-flat": "#A7A9AC",
    "deltaUp": "#00933C",
    "deltaDown": "#EE352E",
    "deltaFlat": "#A7A9AC",
    "live": "#000000",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#1A1A1A",
    "chartFont": "Inter"
  },
  "elevation": {
    "default": "none",
    "cards": "none",
    "modals": "none"
  },
  "surfaceModel": "flat",
  "materialSimulation": {
    "model": "none"
  },
  "interactionModel": {
    "hover": {},
    "active": {},
    "focus": {}
  },
  "interactionStyles": ".ds-layout-frame *:focus { outline: 2px solid var(--border); outline-offset: 2px; } .ds-layout-frame * { transition: none !important; }",
  "chartStyle": {
    "color": [],
    "font": {},
    "grid": {},
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#1A1A1A",
    "fontFamily": "Inter"
  },
  "dashboardStyle": {
    "layout": "sparse grid with generous whitespace, left-aligned panels",
    "density": "low density, high whitespace (32px page edge, 16px between sections)",
    "panelTreatment": "flat white background, 2px solid black border, no radius, no shadow",
    "dataVizStyle": "solid spot colors for route lines, no gradients, no fills, no animations",
    "signatureElement": "station-name-sign (black background, white reversed type) as panel header"
  },
  "landingStyle": {
    "heroApproach": "full-screen black background with centered station-name-sign in white",
    "scrollBehavior": "instant, no transitions or animations",
    "ctaStyle": "primary button: black background, white text, uppercase, no hover effect",
    "signatureMoment": "the solitary station sign on black — one message, one background, one typeface"
  },
  "globalFilter": null,
  "globalBodyCss": "font-family: var(--font-body); background-color: var(--bg); color: var(--on-bg); margin: 0; padding: 32px; text-transform: uppercase;",
  "globalCss": ".ds-layout-frame { text-transform: uppercase; font-family: var(--font-body); } .ds-layout-frame *:focus { outline: 2px solid var(--border); outline-offset: 2px; }",
  "spacing": {
    "component-internal": "8px",
    "section-internal": "16px",
    "page-edge": "32px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "9999px"
  },
  "buttons": [
    {
      "name": "primary",
      "desc": "Solid black button with white uppercase Helvetica Medium text. Used for primary calls to action.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--primary); color: var(--on-primary); font-family: var(--font-body); font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.025em; border: none; padding: 8px 16px; border-radius: var(--radius-btn); cursor: default;\">SUBMIT</button>",
      "label": "primary",
      "note": "Solid black button with white uppercase Helvetica Medium text. Used for primary calls to action."
    },
    {
      "name": "secondary",
      "desc": "White button with black border and black text. Used for secondary actions.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--surface); color: var(--on-surface); font-family: var(--font-body); font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.025em; border: 2px solid var(--border); padding: 8px 16px; border-radius: var(--radius-btn); cursor: default;\">CANCEL</button>",
      "label": "secondary",
      "note": "White button with black border and black text. Used for secondary actions."
    },
    {
      "name": "ghost",
      "desc": "Text-only button without background or border. Used for subtle actions.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: transparent; color: var(--on-surface); font-family: var(--font-body); font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.025em; border: none; padding: 8px; border-radius: var(--radius-btn); cursor: default;\">DETAILS</button>",
      "label": "ghost",
      "note": "Text-only button without background or border. Used for subtle actions."
    }
  ],
  "cards": [
    {
      "name": "station-info-card",
      "desc": "Flat white card with black border containing station name and route bullet. No shadows, no radius.",
      "html": "<div style=\"background-color: var(--surface); border: 2px solid var(--border); padding: 16px; border-radius: var(--radius-card); display: flex; align-items: center; gap: 12px;\"><div style=\"width: 24px; height: 24px; border-radius: var(--radius-chip); background-color: var(--route-red); display: flex; align-items: center; justify-content: center; color: var(--on-primary); font-family: var(--font-body); font-size: 12px; font-weight: 500;\">1</div><span style=\"font-family: var(--font-body); font-size: 16px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.025em; color: var(--on-surface);\">42ND STREET</span></div>",
      "label": "station-info-card",
      "note": "Flat white card with black border containing station name and route bullet. No shadows, no radius."
    },
    {
      "name": "schedule-card",
      "desc": "Flat white card with black border showing a list of departure times. Left-aligned text.",
      "html": "<div style=\"background-color: var(--surface); border: 2px solid var(--border); padding: 16px; border-radius: var(--radius-card);\"><div style=\"font-family: var(--font-body); font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.025em; color: var(--on-surface); margin-bottom: 8px;\">TIMES SQUARE</div><div style=\"font-family: var(--font-body); font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.025em; color: var(--on-surface);\">NEXT TRAIN: 3 MIN</div></div>",
      "label": "schedule-card",
      "note": "Flat white card with black border showing a list of departure times. Left-aligned text."
    }
  ],
  "forms": [
    {
      "name": "text-input",
      "desc": "Simple text input with black border, white background, uppercase placeholder. No radius.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px;\"><label style=\"font-family: var(--font-body); font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.025em; color: var(--on-surface);\">STATION</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" placeholder=\"ENTER STATION\" style=\"background-color: var(--surface); color: var(--on-surface); font-family: var(--font-body); font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.025em; border: 2px solid var(--border); padding: 8px; border-radius: var(--radius-input); outline: none;\"></div>",
      "label": "text-input",
      "stateLabel": "Simple text input with black border, white background, uppercase placeholder. No radius."
    },
    {
      "name": "select",
      "desc": "Dropdown select with black border and uppercase options. Uses default browser arrow.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px;\"><label style=\"font-family: var(--font-body); font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.025em; color: var(--on-surface);\">ROUTE</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--surface); color: var(--on-surface); font-family: var(--font-body); font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.025em; border: 2px solid var(--border); padding: 8px; border-radius: var(--radius-input); appearance: auto; outline: none;\"><option>RED</option><option>GREEN</option><option>BLUE</option></select></div>",
      "label": "select",
      "stateLabel": "Dropdown select with black border and uppercase options. Uses default browser arrow."
    },
    {
      "name": "checkbox",
      "desc": "Square checkbox with black border. No custom styling beyond flat colors and uppercase label.",
      "html": "<div style=\"display: flex; align-items: center; gap: 8px;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"width: 16px; height: 16px; border: 2px solid var(--border); background-color: var(--surface); appearance: none; -webkit-appearance: none; cursor: default;\"><label style=\"font-family: var(--font-body); font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.025em; color: var(--on-surface);\">EXPRESS STOP</label></div>",
      "label": "checkbox",
      "stateLabel": "Square checkbox with black border. No custom styling beyond flat colors and uppercase label."
    }
  ],
  "extraComponents": [
    {
      "name": "station-name-sign",
      "desc": "Black background with reversed white type, centered, all caps. No border, no radius.",
      "html": "<div style=\"background-color: var(--primary); color: var(--on-primary); font-family: var(--font-display); font-size: 60px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.025em; text-align: center; padding: 8px 24px; border-radius: var(--radius-default); display: inline-block;\">42ND STREET</div>"
    },
    {
      "name": "route-bullet-local",
      "desc": "Solid circle with route color background and white letter. Used to designate local service.",
      "html": "<div style=\"width: 24px; height: 24px; border-radius: var(--radius-chip); background-color: var(--route-red); display: flex; align-items: center; justify-content: center; color: var(--on-primary); font-family: var(--font-body); font-size: 14px; font-weight: 500;\">1</div>"
    },
    {
      "name": "directional-arrow",
      "desc": "Thick, blunt arrow pointing right. Solid black, no decoration.",
      "html": "<svg width=\"40\" height=\"20\" viewBox=\"0 0 40 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0,8 L30,8 L30,4 L38,10 L30,16 L30,12 L0,12 Z\" fill=\"var(--primary)\"/></svg>"
    },
    {
      "name": "status-cell",
      "desc": "Metric display with label, value, and delta. All text, no background fill.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 2px;\"><span style=\"font-family: var(--font-body); font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.025em; color: var(--on-surface);\">NEXT TRAIN</span><span style=\"font-family: var(--font-body); font-size: 24px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.025em; color: var(--on-surface);\">3 MIN</span><span style=\"font-family: var(--font-body); font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.025em; color: var(--delta-up);\">+1 MIN</span></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:60px;font-weight:500;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — TIMES SQUARE</div><div style=\\\"font-family:var(--font-display);font-size:36px;font-weight:500;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — GRAND CENTRAL</div><div style=\\\"font-family:var(--font-body);font-size:24px;font-weight:500;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — 42ND STREET</div><div style=\\\"font-family:var(--font-body);font-size:16px;font-weight:500;line-height:1.5;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — NEXT TRAIN ARRIVES IN 3 MINUTES</div><div style=\\\"font-family:var(--font-body);font-size:14px;font-weight:500;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — EXPRESS STOP</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Do not use shadows or gradients. All surfaces must be flat and solid colors.",
      "avoid": {
        "html": "<div style=\"background: linear-gradient(to right, #000, #333); box-shadow: 0 4px 6px rgba(0,0,0,0.3); color: white; padding: 16px;\">BAD SIGN</div>",
        "label": "Avoid"
      },
      "rule": "Do not use shadows or gradients. All surfaces must be flat and solid colors.",
      "do": {
        "label": "Do",
        "html": "<div style=\"background:#000000;color:#FFFFFF;padding:16px;border:2px solid #000000;font-family:var(--font-body);font-weight:500;text-transform:uppercase;\">CORRECT SIGN</div>"
      }
    },
    {
      "desc": "Do not use lowercase or sentence case. All text must be uppercase.",
      "avoid": {
        "html": "<span style=\"font-family: var(--font-body); text-transform: none;\">Times Square</span>",
        "label": "Avoid"
      },
      "rule": "Do not use lowercase or sentence case. All text must be uppercase.",
      "do": {
        "label": "Do",
        "html": "<div style=\"background:#FFFFFF;color:#000000;border:2px solid #000000;padding:16px;font-family:var(--font-body);font-weight:500;text-transform:uppercase;\">TIMES SQUARE</div>"
      }
    },
    {
      "desc": "Do not justify text. Only left-aligned or centered is allowed.",
      "avoid": {
        "html": "<p style=\"font-family: var(--font-body); text-align: justify;\">This text is justified and creates uneven spacing.</p>",
        "label": "Avoid"
      },
      "rule": "Do not justify text. Only left-aligned or centered is allowed.",
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
      "heroKicker": "NYCTA TRANSIT GRAPHICS STANDARDS",
      "heroHeadline": "MAIN CONTROL INDICATOR",
      "heroSub": "REAL-TIME SYSTEM STATUS — ALL LINES",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">VIEW SCHEDULE</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">ROUTE MAP</button>",
      "navLinks": [
        "TIMETABLE",
        "LINE STATUS",
        "STATION ADHERENCE",
        "BULLETIN BOARD"
      ],
      "features": [
        {
          "title": "STATION ADHERENCE",
          "desc": "DEVIATION FROM SCHEDULE PER STATION — ALL CAPS",
          "icon": "🚉",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🚉 STATION ADHERENCE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">DEVIATION FROM SCHEDULE PER STATION — ALL CAPS</div></div>"
        },
        {
          "title": "SIGNAL BLOCK OCCUPANCY",
          "desc": "CURRENT TRACK CIRCUIT STATUS PER SECTOR",
          "icon": "🚦",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🚦 SIGNAL BLOCK OCCUPANCY</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">CURRENT TRACK CIRCUIT STATUS PER SECTOR</div></div>"
        },
        {
          "title": "ROUTE COLOR INTEGRITY",
          "desc": "SPOT-COLOR VERIFICATION — NO TINTS",
          "icon": "🎨",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🎨 ROUTE COLOR INTEGRITY</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">SPOT-COLOR VERIFICATION — NO TINTS</div></div>"
        },
        {
          "title": "DIRECTIONAL ARROW ALIGNMENT",
          "desc": "THICK BLUNT ARROWHEAD ORIENTATION CHECK",
          "icon": "➡️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">➡️ DIRECTIONAL ARROW ALIGNMENT</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">THICK BLUNT ARROWHEAD ORIENTATION CHECK</div></div>"
        }
      ],
      "ctaStripHeadline": "SYSTEM STATUS — ALL LINES",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">ALERT HISTORY</button>",
      "sidebarBrand": "NYCTA 1970",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "LINE MAP",
          "active": true
        },
        {
          "icon": "◉",
          "label": "STATION INDEX",
          "active": false
        }
      ],
      "dashboardTitle": "MAIN CONTROL — SYSTEM OVERVIEW",
      "metrics": [
        {
          "label": "ON-TIME",
          "value": "94.2%",
          "delta": "+2.1%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "DELAYED",
          "value": "12",
          "delta": "-3",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "STATIONS ACTIVE",
          "value": "472",
          "delta": "0",
          "dir": "flat",
          "direction": "flat"
        },
        {
          "label": "SIGNAL ALERTS",
          "value": "7",
          "delta": "+1",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "ADHERENCE BY LINE — LAST 24 HOURS",
      "panelATitle": "LINE STATUS SUMMARY",
      "panelARows": [
        {
          "label": "A LINE",
          "value": "ON SCHEDULE",
          "pct": 0
        },
        {
          "label": "B LINE",
          "value": "DELAYED 4 MIN",
          "pct": 4
        },
        {
          "label": "C LINE",
          "value": "ON SCHEDULE",
          "pct": 0
        },
        {
          "label": "D LINE",
          "value": "ON SCHEDULE",
          "pct": 0
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "STATION ADHERENCE — TOP 8",
      "panelBCells": [
        {
          "label": "TIMES SQ",
          "value": "+0.2 MIN",
          "state": "ok"
        },
        {
          "label": "GRAND CENTRAL",
          "value": "-1.1 MIN",
          "state": "warn"
        },
        {
          "label": "ATLANTIC AV",
          "value": "+0.0 MIN",
          "state": "err"
        },
        {
          "label": "34TH ST",
          "value": "+0.5 MIN",
          "state": "ok"
        },
        {
          "label": "BROADWAY JCT",
          "value": "-0.3 MIN",
          "state": "warn"
        },
        {
          "label": "CANAL ST",
          "value": "+1.2 MIN",
          "state": "err"
        },
        {
          "label": "FULTON ST",
          "value": "-0.7 MIN",
          "state": "ok"
        },
        {
          "label": "LEXINGTON AV",
          "value": "+0.1 MIN",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "00:00",
        "04:00",
        "08:00",
        "12:00",
        "16:00",
        "20:00"
      ],
      "series": [
        {
          "data": [
            95,
            92,
            88,
            91,
            93,
            96,
            96,
            96,
            96,
            96,
            96,
            96
          ],
          "label": "A LINE",
          "axis": "left",
          "color": "#000000"
        },
        {
          "data": [
            78,
            82,
            85,
            80,
            79,
            84,
            84,
            84,
            84,
            84,
            84,
            84
          ],
          "label": "B LINE",
          "axis": "right-1",
          "color": "#0039A6"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'min-height:100vh;background:#000000;display:flex;align-items:center;justify-content:center;'; el.innerHTML = '<div style=\"background:#000000;color:#FFFFFF;font-family:var(--font-display);font-size:60px;font-weight:500;text-transform:uppercase;letter-spacing:0.025em;text-align:center;padding:8px 24px;\">42ND STREET</div>'; }",
    "showcaseRender": "function(el) { el.innerHTML = '<div style=\"display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;padding:32px;\"><div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:500;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🚉 STATION ADHERENCE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">DEVIATION FROM SCHEDULE PER STATION — ALL CAPS</div></div><div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:500;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🚦 SIGNAL BLOCK OCCUPANCY</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">CURRENT TRACK CIRCUIT STATUS PER SECTOR</div></div><div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:500;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🎨 ROUTE COLOR INTEGRITY</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">SPOT-COLOR VERIFICATION — NO TINTS</div></div><div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:500;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">➡️ DIRECTIONAL ARROW ALIGNMENT</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">THICK BLUNT ARROWHEAD ORIENTATION CHECK</div></div></div>'; }",
    "panelCRender": "function(el) { el.innerHTML = '<div style=\"padding:32px;\"><div style=\"font-family:var(--font-display);font-size:18px;font-weight:500;text-transform:uppercase;letter-spacing:0.025em;color:var(--primary);margin-bottom:16px;\">ADHERENCE BY LINE — LAST 24 HOURS</div><svg viewBox=\"0 0 400 200\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;\"><text x=\"20\" y=\"190\" font-family=\"var(--font-body)\" font-size=\"12\" fill=\"#000\" text-anchor=\"end\" font-weight=\"500\">00:00</text><text x=\"100\" y=\"190\" font-family=\"var(--font-body)\" font-size=\"12\" fill=\"#000\" text-anchor=\"middle\" font-weight=\"500\">04:00</text><text x=\"180\" y=\"190\" font-family=\"var(--font-body)\" font-size=\"12\" fill=\"#000\" text-anchor=\"middle\" font-weight=\"500\">08:00</text><text x=\"260\" y=\"190\" font-family=\"var(--font-body)\" font-size=\"12\" fill=\"#000\" text-anchor=\"middle\" font-weight=\"500\">12:00</text><text x=\"340\" y=\"190\" font-family=\"var(--font-body)\" font-size=\"12\" fill=\"#000\" text-anchor=\"middle\" font-weight=\"500\">16:00</text><text x=\"380\" y=\"190\" font-family=\"var(--font-body)\" font-size=\"12\" fill=\"#000\" text-anchor=\"end\" font-weight=\"500\">20:00</text><polyline points=\"20,175 100,170 180,160 260,164 340,168 380,185\" fill=\"none\" stroke=\"#000000\" stroke-width=\"3\"/><polyline points=\"20,130 100,140 180,148 260,140 340,135 380,150\" fill=\"none\" stroke=\"#0039A6\" stroke-width=\"3\"/><rect x=\"220\" y=\"10\" width=\"12\" height=\"12\" fill=\"#000000\"/><text x=\"236\" y=\"22\" font-family=\"var(--font-body)\" font-size=\"12\" fill=\"#000\" font-weight=\"500\">A LINE</text><rect x=\"290\" y=\"10\" width=\"12\" height=\"12\" fill=\"#0039A6\"/><text x=\"306\" y=\"22\" font-family=\"var(--font-body)\" font-size=\"12\" fill=\"#000\" font-weight=\"500\">B LINE</text></svg></div>'; }",
    "heroBackground": "function(el) { el.style.background = '#000000'; }",
    "ctaBackground": "function(el) { el.style.background = '#FFFFFF'; }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'height:2px;background:#000000;margin:32px 0;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = '#FFFFFF'; }",
    "surfaceOverlay": "function(el) { var ov = document.createElement('div'); ov.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;opacity:0;'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(tick) { var c = document.createElement('canvas'); c.width = 300; c.height = 300; var ctx = c.getContext('2d'); ctx.fillStyle = 'var(--primary)'; ctx.fillRect(tick % 280, tick % 280, 20, 20); return c; }",
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
    "--color-secondary": "#0039A6",
    "--color-accent": "#0039A6",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
    "--color-border": "#000000",
    "--color-input": "#000000",
    "--color-destructive": "#EE352E"
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
    "--secondary": "#0039A6",
    "--accent": "#0039A6",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#EE352E"
  }
});
