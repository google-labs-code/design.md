registerSystem({
  "meta": {
    "name": "NASA Graphics Standards Manual (Worm Identity)",
    "tagline": "The definitive expression of institutional modernism in American aerospace — sterile, authoritative, precision-obsessed, with the worm logotype and at least 50% white space",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap"
  },
  "yamlTokens": {
    "name": "NASA Graphics Standards Manual (Worm Identity)",
    "colors": {
      "ok": "#003087",
      "warn": "#FF8C42",
      "err": "#DA291C",
      "delta-up": "#003087",
      "delta-down": "#DA291C",
      "delta-flat": "#999999"
    },
    "typography": {
      "display": {
        "fontFamily": "Inter",
        "fontSize": "64px",
        "fontWeight": 700,
        "lineHeight": 1.1,
        "letterSpacing": "0.2em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Inter",
        "fontSize": "48px",
        "fontWeight": 700,
        "lineHeight": 1,
        "letterSpacing": "0.1em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Inter",
        "fontSize": "32px",
        "fontWeight": 500,
        "lineHeight": 1.2,
        "letterSpacing": "0.05em"
      },
      "body": {
        "fontFamily": "Inter",
        "fontSize": "13px",
        "fontWeight": 400,
        "lineHeight": 1.5,
        "letterSpacing": "0em"
      },
      "label": {
        "fontFamily": "Inter",
        "fontSize": "11px",
        "fontWeight": 300,
        "lineHeight": 1.2,
        "letterSpacing": "0em",
        "textTransform": "lowercase"
      }
    },
    "rounded": {
      "default": "0px",
      "chip": "0px"
    },
    "spacing": {
      "component-internal": "16px",
      "section-internal": "32px",
      "page-edge-side": "40px",
      "page-edge-top": "48px",
      "page-edge-bottom": "32px",
      "between-components": "16px",
      "between-sections": "48px",
      "component-height-sm": "24px",
      "component-height-md": "40px",
      "component-height-lg": "56px",
      "icon-size": "20px",
      "avatar-size": "32px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "#000000",
        "textColor": "#FFFFFF",
        "padding": "8px 16px"
      },
      "button-primary-hover": {
        "backgroundColor": "#DA291C",
        "textColor": "#FFFFFF"
      },
      "button-secondary": {
        "backgroundColor": "transparent",
        "textColor": "#000000",
        "padding": "8px 16px"
      },
      "card": {
        "backgroundColor": "#FFFFFF",
        "padding": "16px"
      },
      "input": {
        "backgroundColor": "transparent",
        "textColor": "#000000"
      },
      "worm-logotype": {
        "textColor": "{colors.err}",
        "size": "proportional"
      }
    },
    "version": "alpha",
    "description": "The definitive expression of institutional modernism in American aerospace — sterile, authoritative, precision-obsessed, with the worm logotype, brutal simplicity, and at least 50% white space. Based on Danne & Blackburn's 1975 identity system.",
    "provenance": {
      "coverage_status": "complete",
      "identity_description": "The slug `nasa-graphics-standards-manual` refers to the *NASA Graphics Standards Manual*, a comprehensive visual identity system designed by the firm Danne & Blackburn (principals: Richard Danne and Bruce Blackburn) for the National Aeronautics and Space Administration of the United States. The manual was issued in 1976 and remained the governing identity standard until approximately 1992, when NA",
      "manual_enrichment_required": false,
      "imagery_count": 11,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "www.nasa.gov",
          "count": 4
        },
        {
          "host": "standardsmanual.com",
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
          "host": "www.underconsideration.com",
          "count": 1
        },
        {
          "host": "airandspace.si.edu",
          "count": 1
        },
        {
          "host": "www.archives.gov",
          "count": 1
        },
        {
          "host": "www.printmag.com",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://standardsmanual.com/",
          "host": "standardsmanual.com",
          "institution": "Standards Manual (publishers Jesse Reed and Hamish Smyth)",
          "confidence_original": "medium"
        },
        {
          "url": "https://en.wikipedia.org/wiki/NASA_insignia",
          "host": "en.wikipedia.org",
          "institution": null,
          "confidence_original": "high"
        },
        {
          "url": "https://commons.wikimedia.org/wiki/Category:NASA_logos",
          "host": "commons.wikimedia.org",
          "institution": "Wikimedia Commons",
          "confidence_original": "high"
        },
        {
          "url": "https://www.nasa.gov/",
          "host": "www.nasa.gov",
          "institution": "National Aeronautics and Space Administration",
          "confidence_original": "medium"
        },
        {
          "url": "https://www.nasa.gov/history/",
          "host": "www.nasa.gov",
          "institution": "NASA History Division",
          "confidence_original": "high"
        },
        {
          "url": "https://www.underconsideration.com/brandnew/archives/nasa_graphic_standards.php",
          "host": "www.underconsideration.com",
          "institution": "Brand New (UnderConsideration)",
          "confidence_original": "low"
        },
        {
          "url": "https://airandspace.si.edu/",
          "host": "airandspace.si.edu",
          "institution": "Smithsonian National Air and Space Museum",
          "confidence_original": "low"
        },
        {
          "url": "https://www.archives.gov/",
          "host": "www.archives.gov",
          "institution": "U.S. National Archives and Records Administration",
          "confidence_original": "low"
        },
        {
          "url": "https://www.printmag.com/",
          "host": "www.printmag.com",
          "institution": "Print Magazine",
          "confidence_original": "low"
        },
        {
          "url": "https://www.nasa.gov/glenn/",
          "host": "www.nasa.gov",
          "institution": "NASA Glenn Research Center",
          "confidence_original": "low"
        },
        {
          "url": "https://www.nasa.gov/general/the-worm-is-back/",
          "host": "www.nasa.gov",
          "institution": "National Aeronautics and Space Administration",
          "confidence_original": "medium"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Helvetica",
          "foundry": "Haas",
          "year": 1957,
          "google_fonts": "Inter",
          "attestation": "attested"
        },
        {
          "name": "nasa worm logotype",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "attested"
        }
      ],
      "flags": [
        "1_rate_limited_urls_pending_retry"
      ],
      "honest_gaps": [
        {
          "\"1. **Exact Pantone specifications for NASA Red and NASA Grey.** Widely cited in secondary sources but with inconsistent values (competing claims for the red). Resolution": "direct inspection of the manual's colour specification page, or verified high-resolution scan thereof.\""
        }
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#FFFFFF",
    "--on-bg": "#000000",
    "--primary": "#DA291C",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#003087",
    "--on-secondary": "#FFFFFF",
    "--surface": "#FFFFFF",
    "--on-bg-muted": "#929292",
    "--border": "#000000",
    "--error": "#DA291C",
    "--font-display": "Inter",
    "--font-body": "Inter",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "ok": "#003087",
    "warn": "#FF8C42",
    "err": "#DA291C",
    "delta-up": "#003087",
    "delta-down": "#DA291C",
    "delta-flat": "#999999",
    "deltaUp": "#003087",
    "deltaDown": "#DA291C",
    "deltaFlat": "#999999",
    "live": "#DA291C",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#929292",
    "chartFont": "Inter"
  },
  "elevation": {
    "default": "none",
    "hover": "none",
    "active": "none",
    "focus": "none",
    "flat": true
  },
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "paper",
    "params": {
      "default": {
        "clean": true
      },
      "optionalPrintRealism": {
        "paperTooth": {
          "technique": "data-URI PNG noise tile",
          "blend": "multiply",
          "opacity": 0.03
        },
        "inkGain": {
          "technique": "SVG feTurbulence",
          "filterId": "inkGain",
          "blend": "multiply",
          "opacity": 0.05
        },
        "halftone": {
          "technique": "radial-gradient repeating pattern",
          "lpi": "65-85",
          "blend": "overlay",
          "opacity": 0.15
        },
        "misregistration": {
          "technique": "CSS translate offset 0.1-0.5mm on red layer",
          "blend": "normal"
        }
      },
      "darkModeInheritance": "halftone inverts, ink gain and paper tooth omitted on dark backgrounds, misregistration unchanged"
    }
  },
  "globalFilter": "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><defs><filter id=\"inkGain\" x=\"-5%\" y=\"-5%\" width=\"110%\" height=\"110%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.35\" numOctaves=\"2\" result=\"noise\"/><feColorMatrix type=\"matrix\" values=\"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.05 0\" in=\"noise\" result=\"coloredNoise\"/><feComposite operator=\"in\" in=\"coloredNoise\" in2=\"SourceGraphic\" result=\"ink\"/><feBlend mode=\"multiply\" in=\"ink\" in2=\"SourceGraphic\"/></filter></defs></svg>",
  "globalBodyCss": "font-family: Inter, sans-serif; background-color: #FFFFFF; color: #000000; font-smoothing: antialiased; text-rendering: optimizeLegibility;",
  "globalCss": ".ds-layout-frame ::selection { background: rgba(218, 41, 28, 0.3); color: inherit; }\n.ds-layout-frame ::-webkit-scrollbar { width: 6px; }\n.ds-layout-frame ::-webkit-scrollbar-track { background: #F2F2F2; }\n.ds-layout-frame ::-webkit-scrollbar-thumb { background: #000000; }\n.ds-layout-frame ::-webkit-scrollbar-thumb:hover { background: #DA291C; }\n.ds-layout-frame * { border-radius: 0; box-shadow: none; }",
  "interactionModel": {
    "hover": {
      "delta": "color-shift",
      "duration": "0ms",
      "easing": "linear",
      "targetSelectors": [
        "button:not(:disabled)",
        ".ds-layout-frame a",
        ".ds-layout-frame .interactive"
      ]
    },
    "focus": {
      "style": "color-border",
      "outline": "2px solid var(--primary)",
      "outlineOffset": "1px"
    },
    "active": {
      "delta": "color-shift",
      "duration": "0ms",
      "easing": "linear"
    },
    "exemptAnimations": [
      "worm-logo-load",
      "horizontal-rule-draw",
      "data-point-reveal"
    ],
    "motionRules": "mechanical, linear, no bounce, no spring, maximum one moving element at a time"
  },
  "interactionStyles": ".ds-layout-frame button:not(:disabled), .ds-layout-frame a, .ds-layout-frame .interactive { transition-property: background-color, color, border-color; transition-duration: 0ms; transition-timing-function: linear; }\n.ds-layout-frame button:not(:disabled):hover, .ds-layout-frame .interactive:hover { background-color: var(--primary); color: var(--on-primary); }\n.ds-layout-frame button:not(:disabled):active { background-color: #003087; color: var(--on-secondary); }\n.ds-layout-frame a:hover { color: var(--primary); }\n.ds-layout-frame .interactive:focus-visible { outline: 2px solid var(--primary); outline-offset: 1px; }",
  "chartStyle": {
    "background": "transparent",
    "gridLines": {
      "horizontalOnly": true,
      "stroke": "#000000",
      "width": "1px"
    },
    "axisLabels": {
      "fontFamily": "Inter",
      "fontSize": "8pt",
      "fontWeight": 700,
      "color": "#B3B3B3",
      "textTransform": "uppercase"
    },
    "lineStroke": {
      "color": "#000000",
      "width": "1.5pt"
    },
    "barFill": {
      "default": "#000000",
      "accent": "#DA291C"
    },
    "chartSurfaceBackground": "#F2F2F2",
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#929292",
    "fontFamily": "Inter"
  },
  "dashboardStyle": {
    "layout": "rows of metric cells aligned to a 5/9/12 column grid; each cell is a separate card with bottom rule; signal bars sit above data tables; thin horizontal rules separate sections",
    "density": "extremely sparse — at least 50% white space; one metric per row on mobile, 3 per row on desktop",
    "panelTreatment": "flat white background, no elevation; each panel framed by thin black borders or bottom rules; no padding inside panels except component-internal (16px)",
    "dataVizStyle": "black lines on transparent background; horizontal grid lines only; axis labels in 8pt uppercase Inter; no fills except red accent bars; duotone photography permitted with halftone overlay",
    "signatureElement": "thin horizontal rule (1pt black) spans full width below header; worm logotype top left in red"
  },
  "landingStyle": {
    "heroApproach": "single object per page — large worm logotype offset top left, thin horizontal rule separating header from body; one strong color accent (red or blue) used on the logotype or a large panel; at least 50% white space",
    "scrollBehavior": "no parallax, no sticky elements; mechanical scroll with linear motion; horizontal rule draws on load (exempt animation)",
    "ctaStyle": "black button with 45° clipped corner, white uppercase label; hover transitions to red; placed flush left below the rule",
    "signatureMoment": "the worm logotype loads with a 300ms linear draw animation (stroke from left to right) on initial page load"
  },
  "spacing": {
    "componentInternal": "16px",
    "sectionInternal": "32px",
    "pageEdgeSides": "40px",
    "pageEdgeTop": "48px",
    "pageEdgeBottom": "32px",
    "betweenComponents": "16px",
    "betweenSections": "48px",
    "componentHeightSm": "24px",
    "componentHeightMd": "40px",
    "componentHeightLg": "56px",
    "iconSize": "20px",
    "avatarSize": "32px"
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
      "desc": "Black button with white uppercase label, 45° clipped top-right corner. Hover state transitions to red (#DA291C). Flat, no shadow, no roundness.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||'';this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+' ':'')+'brightness(1.12)'\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||''\" style=\"background-color: var(--bg); color: var(--on-bg); border: none; padding: 8px 16px; font-family: var(--font-display); font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 100%, 0 100%); cursor: pointer; transition: background-color 0ms linear; background-color: #000000; color: #FFFFFF;\" onmouseover=\"this.style.backgroundColor='#DA291C'\" onmouseout=\"this.style.backgroundColor='#000000'\">launch</button>",
      "label": "primary",
      "note": "Black button with white uppercase label, 45° clipped top-right corner. Hover state transitions to red (#DA291C). Flat, no shadow, no roundness."
    },
    {
      "name": "secondary",
      "desc": "Outlined button with transparent background, black border, same 45° clipped corner. Hover fills with red text and border.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||'';this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+' ':'')+'brightness(1.12)'\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||''\" style=\"background-color: transparent; color: var(--on-bg); border: 1px solid var(--border); padding: 8px 16px; font-family: var(--font-display); font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 100%, 0 100%); cursor: pointer; transition: background-color 0ms linear, color 0ms linear;\" onmouseover=\"this.style.borderColor='#DA291C'; this.style.color='#DA291C'\" onmouseout=\"this.style.borderColor='#000000'; this.style.color='#000000'\">abort</button>",
      "label": "secondary",
      "note": "Outlined button with transparent background, black border, same 45° clipped corner. Hover fills with red text and border."
    },
    {
      "name": "ghost",
      "desc": "Text-only button with bottom rule on hover. Minimal, no border or background initially.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||'';this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+' ':'')+'brightness(1.12)'\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||''\" style=\"background-color: transparent; color: var(--on-bg); border: none; padding: 4px 8px; font-family: var(--font-display); font-size: 11px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer; transition: border-bottom 0ms linear; border-bottom: 0px solid transparent;\" onmouseover=\"this.style.borderBottom='1px solid var(--border)'\" onmouseout=\"this.style.borderBottom='0px solid transparent'\">reset</button>",
      "label": "ghost",
      "note": "Text-only button with bottom rule on hover. Minimal, no border or background initially."
    }
  ],
  "cards": [
    {
      "name": "standard-card",
      "desc": "White card with thin black border, bottom rule inside, and padding. No shadow, no rounding.",
      "html": "<div style=\"background-color: var(--surface); color: var(--on-bg); border: 1px solid var(--border); padding: 16px; font-family: var(--font-body); font-size: 13px; line-height: 1.5;\"><div style=\"border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-bottom: 8px; font-family: var(--font-display); font-size: 11px; font-weight: 300; text-transform: lowercase; letter-spacing: 0em; color: #929292;\">flight data</div><div>Altitude: 408 km<br/>Velocity: 7.66 km/s</div></div>",
      "label": "standard-card",
      "note": "White card with thin black border, bottom rule inside, and padding. No shadow, no rounding."
    },
    {
      "name": "metric-card",
      "desc": "Transparent card with only a bottom rule, large value, and delta indicator. One metric per card.",
      "html": "<div style=\"background: transparent; border-bottom: 1px solid var(--border); padding: 8px 0; font-family: var(--font-body);\"><div style=\"font-family: var(--font-display); font-size: 24px; font-weight: 700; line-height: 1.2; letter-spacing: 0.05em; color: var(--on-bg);\">4,582</div><div style=\"font-size: 8pt; font-weight: 300; text-transform: lowercase; letter-spacing: 0em; color: #929292;\">orbital insertions</div><div style=\"font-size: 8pt; font-weight: 300; color: var(--secondary-col);\">+12%</div></div>",
      "label": "metric-card",
      "note": "Transparent card with only a bottom rule, large value, and delta indicator. One metric per card."
    }
  ],
  "forms": [
    {
      "name": "text-input",
      "desc": "Transparent input with only a bottom border rule. No rounding, no shadow.",
      "html": "<div style=\"display: inline-block; border-bottom: 1px solid var(--border); font-family: var(--font-body); font-size: 13px; width: auto;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" placeholder=\"enter designation\" style=\"background: transparent; border: none; outline: none; color: var(--on-bg); font-family: inherit; font-size: inherit; padding: 4px 0;\"/></div>",
      "label": "text-input",
      "stateLabel": "Transparent input with only a bottom border rule. No rounding, no shadow."
    },
    {
      "name": "select",
      "desc": "Custom dropdown mimicking a select with bottom rule and a downward arrow. Hard edges, no rounding.",
      "html": "<div style=\"display: inline-block; border-bottom: 1px solid var(--border); font-family: var(--font-body); font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; padding: 4px 0; position: relative; width: 200px;\"><span style=\"color: var(--on-bg);\">select module</span><span style=\"position: absolute; right: 0; top: 4px; color: var(--border);\">&#9660;</span><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0; cursor: pointer;\"><option>command module</option><option>lunar module</option><option>service module</option></select></div>",
      "label": "select",
      "stateLabel": "Custom dropdown mimicking a select with bottom rule and a downward arrow. Hard edges, no rounding."
    },
    {
      "name": "checkbox",
      "desc": "Square checkbox with red fill on checked. No rounding, no shadow.",
      "html": "<label style=\"display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-body); font-size: 13px; cursor: pointer;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"appearance: none; -webkit-appearance: none; width: 16px; height: 16px; border: 1px solid var(--border); background: transparent; cursor: pointer; position: relative;\"/><span style=\"text-transform: uppercase; font-size: 11px; letter-spacing: 0.1em; color: var(--on-bg);\">verify</span></label>",
      "label": "checkbox",
      "stateLabel": "Square checkbox with red fill on checked. No rounding, no shadow."
    }
  ],
  "extraComponents": [
    {
      "name": "worm-logotype",
      "desc": "The iconic NASA worm logotype: red (#DA291C), extreme letter spacing, all caps, smooth connected appearance styled with Inter.",
      "html": "<div style=\"font-family: var(--font-display); font-size: 48px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--error); line-height: 1;\">nasa</div>"
    },
    {
      "name": "signal-bar",
      "desc": "A thin horizontal rule (1pt black) with a colored fill segment representing signal strength. No rounding.",
      "html": "<div style=\"position: relative; width: 100%; height: 2px; background: var(--border); margin: 8px 0;\"><div style=\"position: absolute; left: 0; top: 0; height: 100%; width: 60%; background: var(--primary);\"></div></div>"
    },
    {
      "name": "status-cell",
      "desc": "A status indicator with left edge rule and label. Color changes per semantic: ok (blue), warn (gray), err (red).",
      "html": "<div style=\"display: flex; align-items: center; gap: 8px; font-family: var(--font-body); font-size: 11px; text-transform: lowercase; border-left: 2px solid var(--ok); padding-left: 8px;\"><span style=\"color: var(--ok);\">nominal</span></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — LAUNCH SEQUENCE</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — MISSION CONTROL</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — Tracking Station</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — All systems nominal. Telemetry indicates stable orbit insertion. Ground stations report clear signal.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — orbital parameters</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Rounded corners on any element — forbidden. Use 45° clip-paths or sharp edges only.",
      "avoid": {
        "html": "<button style=\"border-radius: 8px; background: #000; color: #fff;\">bad button</button>",
        "label": "Avoid"
      },
      "rule": "Rounded corners on any element — forbidden. Use 45° clip-paths or sharp edges only.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Red color applied to body text or thin rules — hero accent only on logotype or large graphic elements.",
      "avoid": {
        "html": "<p style=\"color: #DA291C;\">This is body text with red — not allowed.</p>",
        "label": "Avoid"
      },
      "rule": "Red color applied to body text or thin rules — hero accent only on logotype or large graphic elements.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Centered text outside of a grid context. All text must be flush left, ragged right.",
      "avoid": {
        "html": "<div style=\"text-align: center; font-family: Inter;\">center-aligned title</div>",
        "label": "Avoid"
      },
      "rule": "Centered text outside of a grid context. All text must be flush left, ragged right.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Justified text outside tabular data. Body text must be ragged right.",
      "avoid": {
        "html": "<p style=\"text-align: justify;\">This justified paragraph is not allowed for body copy.</p>",
        "label": "Avoid"
      },
      "rule": "Justified text outside tabular data. Body text must be ragged right.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "doAvoidStyle": {
    "forbiddenPatterns": [
      "Rounded corners — use 0px radius and clip-paths",
      "Drop shadows, box shadows, gradients, 3D transforms",
      "Red on body text or thin rules",
      "Justified body text",
      "Centered alignment outside grid",
      "Eased animations (bounce, spring) — only linear"
    ]
  },
  "effects": [],
  "motion": [],
  "colors": {
    "primary": "#DA291C",
    "secondary": "#003087",
    "neutral": "#000000",
    "background": "#FFFFFF",
    "muted": "#B3B3B3",
    "on-primary": "#FFFFFF",
    "on-secondary": "#FFFFFF",
    "error": "#DA291C"
  },
  "typography": {
    "typeface": "Inter",
    "modularScale": [
      "8pt",
      "10pt",
      "12pt",
      "14pt",
      "18pt",
      "24pt",
      "36pt",
      "48pt"
    ],
    "casing": "uppercase for display/headline/label, lowercase for captions",
    "tracking": "widest on display, wider on headline, wide on title",
    "alignment": "flush left, ragged right; justified only for tabular data"
  },
  "layouts": {
    "copy": {
      "heroKicker": "NASA GRAPHICS STANDARDS MANUAL 1975",
      "heroHeadline": "MISSION CONTROL TELEMETRY",
      "heroSub": "A real-time monitoring interface for orbital vehicle performance. Flush left. Ragged right. One object per page.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\\x27background:#000;color:#fff;border:none;padding:8px 16px;clip-path:polygon(4px 0,100% 0,100% calc(100% - 4px),calc(100% - 4px) 100%,0 100%,0 4px);font-family:Inter,sans-serif;text-transform:uppercase;letter-spacing:0.2em;font-size:13px;\\x27>INITIATE SEQUENCE</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\\x27background:transparent;color:#000;border:1px solid #000;padding:8px 16px;clip-path:polygon(4px 0,100% 0,100% calc(100% - 4px),calc(100% - 4px) 100%,0 100%,0 4px);font-family:Inter,sans-serif;text-transform:uppercase;letter-spacing:0.2em;font-size:13px;\\x27>ABORT</button>",
      "navLinks": [
        "GRID",
        "SIGNAL",
        "ORBIT",
        "COMMAND"
      ],
      "features": [
        {
          "title": "TELEMETRY STREAM",
          "desc": "Continuous data feed from vehicle sub-systems — pressure, temperature, voltage, and structural load. Every parameter validated against pre-launch limits.",
          "icon": "📡",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📡 TELEMETRY STREAM</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Continuous data feed from vehicle sub-systems — pressure, temperature, voltage, and structural load. Every parameter validated against pre-launch limits.</div></div>"
        },
        {
          "title": "THRUST VECTOR CONTROL",
          "desc": "Real-time gimbal angle and chamber pressure. Red accent indicates active gimbal lock or over-temperature.",
          "icon": "🚀",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🚀 THRUST VECTOR CONTROL</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Real-time gimbal angle and chamber pressure. Red accent indicates active gimbal lock or over-temperature.</div></div>"
        },
        {
          "title": "ORBIT INSERTION MONITOR",
          "desc": "Altitude, velocity, and inclination plotted against nominal insertion corridor. Blue fill for on-target, red for deviation.",
          "icon": "🛰️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🛰️ ORBIT INSERTION MONITOR</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Altitude, velocity, and inclination plotted against nominal insertion corridor. Blue fill for on-target, red for deviation.</div></div>"
        },
        {
          "title": "STAGE SEPARATION LOG",
          "desc": "Time-tagged events for booster jettison, fairing release, and payload deploy. Each event displayed as a single metric cell with status left rule.",
          "icon": "🔭",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔭 STAGE SEPARATION LOG</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Time-tagged events for booster jettison, fairing release, and payload deploy. Each event displayed as a single metric cell with status left rule.</div></div>"
        }
      ],
      "ctaStripHeadline": "READY FOR LAUNCH",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\\x27background:#DA291C;color:#fff;border:none;padding:8px 16px;clip-path:polygon(4px 0,100% 0,100% calc(100% - 4px),calc(100% - 4px) 100%,0 100%,0 4px);font-family:Inter,sans-serif;text-transform:uppercase;letter-spacing:0.2em;font-size:13px;\\x27>ENGAGE AUTO-SEQUENCE</button>",
      "sidebarBrand": "WORM",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "TELEMETRY",
          "active": true
        },
        {
          "icon": "◉",
          "label": "CONTROL",
          "active": false
        }
      ],
      "dashboardTitle": "MISSION CONTROL — ARTEMIS VII",
      "metrics": [
        {
          "label": "ALTITUDE",
          "value": "342 km",
          "delta": "+12%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "VELOCITY",
          "value": "7.82 km/s",
          "delta": "-0.3%",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "THRUST",
          "value": "1.12 MN",
          "delta": "+1.1%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "TEMPERATURE",
          "value": "22.4 °C",
          "delta": "0.0%",
          "dir": "flat",
          "direction": "flat"
        }
      ],
      "chartTitle": "THRUST PROFILE (MECO)",
      "panelATitle": "STAGE STATUS",
      "panelARows": [
        {
          "label": "S-1C",
          "value": "SEPARATED",
          "pct": 0
        },
        {
          "label": "S-II",
          "value": "NOMINAL",
          "pct": 0
        },
        {
          "label": "S-IVB",
          "value": "PRE-FIRE",
          "pct": 0
        },
        {
          "label": "PAYLOAD",
          "value": "STOWED",
          "pct": 0
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "COMMAND LINK",
      "panelBCells": [
        {
          "label": "UPLINK FREQ",
          "value": "2242.5 MHz",
          "state": "ok"
        },
        {
          "label": "DOWNLINK FREQ",
          "value": "2200.0 MHz",
          "state": "warn"
        },
        {
          "label": "BIT RATE",
          "value": "16 kbps",
          "state": "err"
        },
        {
          "label": "ENCODING",
          "value": "NRZ-L",
          "state": "ok"
        },
        {
          "label": "TRANSMIT POWER",
          "value": "20 W",
          "state": "warn"
        },
        {
          "label": "ANTENNA",
          "value": "OMNI",
          "state": "err"
        },
        {
          "label": "AZIMUTH",
          "value": "045°",
          "state": "ok"
        },
        {
          "label": "ELEVATION",
          "value": "12°",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "T+0",
        "T+20",
        "T+40",
        "T+60",
        "T+80",
        "T+100"
      ],
      "series": [
        {
          "data": [
            0,
            85,
            92,
            98,
            100,
            95,
            95,
            95,
            95,
            95,
            95,
            95
          ],
          "label": "BOOSTER",
          "axis": "left",
          "color": "#DA291C"
        },
        {
          "data": [
            0,
            15,
            24,
            30,
            35,
            38,
            38,
            38,
            38,
            38,
            38,
            38
          ],
          "label": "SUSTAINER",
          "axis": "right-1",
          "color": "#003087"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'display:flex;flex-direction:column;align-items:flex-start;justify-content:center;min-height:480px;padding:48px 40px;background:#FFFFFF;color:#000000;font-family:Inter,sans-serif;'; el.innerHTML = '<div style=\"font-family:Inter;font-size:10px;font-weight:300;text-transform:lowercase;color:#929292;margin-bottom:24px;letter-spacing:.12em;\">nasa graphics standards manual 1975 / worm identity</div><div style=\"font-family:Inter;font-size:48px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#DA291C;line-height:1;margin-bottom:16px;\">nasa</div><div style=\"border-bottom:1px solid #000000;width:100%;margin-bottom:32px;\"></div><div style=\"font-family:Inter;font-size:13px;font-weight:400;line-height:1.5;color:#000000;max-width:360px;text-align:left;\">Mission Control Telemetry Interface — a real-time monitoring system for orbital vehicle performance. Flush left. Ragged right. One object per page.</div><div style=\"margin-top:40px;\"><button style=\"background:#000000;color:#FFFFFF;border:none;padding:8px 16px;clip-path:polygon(4px 0,100% 0,100% calc(100% - 4px),calc(100% - 4px) 100%,0 100%,0 4px);font-family:Inter,sans-serif;text-transform:uppercase;letter-spacing:.2em;font-size:13px;cursor:pointer;\">initiate sequence</button></div>' }",
    "showcaseRender": "function(el) { el.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px;padding:48px 40px;background:#FFFFFF;'; el.innerHTML = '<div style=\"min-height:160px;padding:24px;border:1px solid #000000;background:#FFFFFF;color:#000000;font-family:Inter;display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:Inter;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#DA291C;\">📡 TELEMETRY STREAM</div><div style=\"font-size:12px;line-height:1.55;color:#929292;\">Continuous data feed from vehicle sub-systems — pressure, temperature, voltage, and structural load. Every parameter validated against pre-launch limits.</div></div><div style=\"min-height:160px;padding:24px;border:1px solid #000000;background:#FFFFFF;color:#000000;font-family:Inter;display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:Inter;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#DA291C;\">🚀 THRUST VECTOR CONTROL</div><div style=\"font-size:12px;line-height:1.55;color:#929292;\">Real-time gimbal angle and chamber pressure. Red accent indicates active gimbal lock or over-temperature.</div></div><div style=\"min-height:160px;padding:24px;border:1px solid #000000;background:#FFFFFF;color:#000000;font-family:Inter;display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:Inter;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#DA291C;\">🛰️ ORBIT INSERTION MONITOR</div><div style=\"font-size:12px;line-height:1.55;color:#929292;\">Altitude, velocity, and inclination plotted against nominal insertion corridor. Blue fill for on-target, red for deviation.</div></div><div style=\"min-height:160px;padding:24px;border:1px solid #000000;background:#FFFFFF;color:#000000;font-family:Inter;display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:Inter;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#DA291C;\">🔭 STAGE SEPARATION LOG</div><div style=\"font-size:12px;line-height:1.55;color:#929292;\">Time-tagged events for booster jettison, fairing release, and payload deploy. Each event displayed as a single metric cell with status left rule.</div></div>'; }",
    "panelCRender": "function(el) { el.style.cssText = 'padding:16px;background:#FFFFFF;color:#000000;font-family:Inter;'; el.innerHTML = '<div style=\"border-bottom:1px solid #000000;padding-bottom:8px;margin-bottom:16px;font-size:11px;font-weight:300;text-transform:lowercase;color:#929292;\">stage status</div><div style=\"display:flex;flex-direction:column;gap:8px;\"><div style=\"display:flex;justify-content:space-between;border-left:2px solid #003087;padding-left:8px;\"><span style=\"font-size:11px;font-weight:300;text-transform:lowercase;\">S-1C</span><span style=\"font-size:11px;font-weight:700;text-transform:uppercase;\">separated</span></div><div style=\"display:flex;justify-content:space-between;border-left:2px solid #003087;padding-left:8px;\"><span style=\"font-size:11px;font-weight:300;text-transform:lowercase;\">S-II</span><span style=\"font-size:11px;font-weight:700;text-transform:uppercase;\">nominal</span></div><div style=\"display:flex;justify-content:space-between;border-left:2px solid #DA291C;padding-left:8px;\"><span style=\"font-size:11px;font-weight:300;text-transform:lowercase;\">S-IVB</span><span style=\"font-size:11px;font-weight:700;text-transform:uppercase;color:#DA291C;\">pre-fire</span></div><div style=\"display:flex;justify-content:space-between;border-left:2px solid #003087;padding-left:8px;\"><span style=\"font-size:11px;font-weight:300;text-transform:lowercase;\">payload</span><span style=\"font-size:11px;font-weight:700;text-transform:uppercase;\">stowed</span></div></div>'; }",
    "heroBackground": "function(el) { el.style.background = '#FFFFFF'; }",
    "ctaBackground": "function(el) { el.style.background = '#000000'; }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'height:1px;background:#000000;width:100%;margin:0;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = '#F2F2F2'; }",
    "surfaceOverlay": "function(el) { var ov = document.createElement('div'); ov.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;opacity:0.03;background-image:radial-gradient(circle, #DA291C 1px, transparent 1px);background-size:4px 4px;'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(el, tick) { var intensity = (Math.sin((tick||0) * 0.01) * 0.5 + 0.5); el.style.cssText = 'position:absolute;inset:0;pointer-events:none;z-index:1;background-image:radial-gradient(circle, rgba(218,41,28,' + (intensity * 0.05) + ') 1px, transparent 1px);background-size:4px 4px;'; }",
  "shadcnTokens": {
    "--color-background": "#FFFFFF",
    "--color-popover": "#FFFFFF",
    "--color-foreground": "#000000",
    "--color-card-foreground": "#000000",
    "--color-popover-foreground": "#000000",
    "--color-card": "#FFFFFF",
    "--color-muted": "#FFFFFF",
    "--color-muted-foreground": "#929292",
    "--color-primary": "#DA291C",
    "--color-ring": "#DA291C",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#003087",
    "--color-accent": "#003087",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
    "--color-border": "#000000",
    "--color-input": "#000000",
    "--color-destructive": "#DA291C"
  },
  "shadcnTokensClassic": {
    "--background": "#FFFFFF",
    "--popover": "#FFFFFF",
    "--foreground": "#000000",
    "--card-foreground": "#000000",
    "--popover-foreground": "#000000",
    "--card": "#FFFFFF",
    "--muted": "#FFFFFF",
    "--muted-foreground": "#929292",
    "--primary": "#DA291C",
    "--ring": "#DA291C",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#003087",
    "--accent": "#003087",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#DA291C"
  }
});
