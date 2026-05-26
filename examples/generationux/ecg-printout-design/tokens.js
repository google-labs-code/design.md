registerSystem({
  "meta": {
    "name": "ECG Printout",
    "tagline": "Monochrome grid paper with continuous trace and clinical annotation",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap"
  },
  "yamlTokens": {
    "name": "ECG Printout",
    "colors": {
      "primary": "#000000",
      "on-primary": "#FFFFFF",
      "surface-container": "#F5F0E0",
      "surface-container-lowest": "#FFFFFF",
      "outline": "#D0E5F0",
      "error": "#E53935",
      "on-error": "#FFFFFF",
      "tertiary": "#43A047",
      "on-surface": "#000000",
      "on-surface-variant": "#E0E0E0"
    },
    "typography": {
      "display": {
        "fontFamily": "IBM Plex Mono",
        "fontSize": "24px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "IBM Plex Mono",
        "fontSize": "16px",
        "fontWeight": 600,
        "lineHeight": 1.25,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "IBM Plex Mono",
        "fontSize": "14px",
        "fontWeight": 500,
        "lineHeight": 1.25,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "IBM Plex Mono",
        "fontSize": "12px",
        "fontWeight": 400,
        "lineHeight": 1.375,
        "letterSpacing": "0em",
        "textTransform": "none"
      },
      "label": {
        "fontFamily": "IBM Plex Mono",
        "fontSize": "10px",
        "fontWeight": 400,
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
      "component-internal": "4px",
      "section-internal": "8px",
      "page-edge": "8px",
      "gap-component": "4px",
      "gap-section": "16px",
      "height-sm": "32px",
      "height-md": "48px",
      "height-lg": "64px",
      "icon": "16px"
    },
    "components": {
      "metric-cell-label": {
        "textColor": "#87CEEB",
        "backgroundColor": "transparent",
        "rounded": "0px",
        "padding": "0px"
      },
      "metric-cell-value": {
        "textColor": "#000000",
        "backgroundColor": "transparent",
        "rounded": "0px",
        "padding": "0px"
      },
      "status-cell-ok": {
        "backgroundColor": "#43A047",
        "height": "12px",
        "width": "12px",
        "rounded": "0px"
      },
      "status-cell-err": {
        "backgroundColor": "#E53935",
        "height": "12px",
        "width": "12px",
        "rounded": "0px"
      },
      "data-table-row": {
        "backgroundColor": "transparent",
        "textColor": "#000000",
        "height": "20px",
        "padding": "0px"
      },
      "data-table-row-even": {
        "backgroundColor": "rgba(0,0,0,0.03)",
        "textColor": "#000000",
        "height": "20px",
        "padding": "0px"
      },
      "chart-surface": {
        "backgroundColor": "#FFFFFF",
        "rounded": "0px"
      }
    },
    "version": "alpha",
    "description": "Translates the cold precision of hospital chart recorders into a digital interface with a continuous wavy trace on monochrome grid paper, thermal paper simulation, and clinical monospaced annotation.",
    "provenance": {
      "coverage_status": "sparse",
      "identity_description": "This slug refers to the visual identity of a standard electrocardiogram (ECG) printout strip — the physical paper output from a clinical electrocardiograph machine. This is not the work of a specific designer or brand but a *de facto* technical-visual standard that evolved from Einthoven’s early 20th‑century string galvanometer traces through mid‑century standardization efforts by bodies such as t",
      "manual_enrichment_required": false,
      "imagery_count": 4,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "en.wikipedia.org",
          "count": 1
        },
        {
          "host": "commons.wikimedia.org",
          "count": 1
        },
        {
          "host": "patents.google.com",
          "count": 1
        },
        {
          "host": "www.gehealthcare.com",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://en.wikipedia.org/wiki/Electrocardiography",
          "host": "en.wikipedia.org",
          "institution": "Wikimedia Commons",
          "confidence_original": "medium"
        },
        {
          "url": "https://commons.wikimedia.org/wiki/Category:ECG_paper",
          "host": "commons.wikimedia.org",
          "institution": "Wikimedia Commons",
          "confidence_original": "high"
        },
        {
          "url": "https://patents.google.com/patent/US5578266A/en",
          "host": "patents.google.com",
          "institution": "Google Patents",
          "confidence_original": "high"
        },
        {
          "url": "https://www.gehealthcare.com/en-us",
          "host": "www.gehealthcare.com",
          "institution": "GE Healthcare",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Helvetica",
          "foundry": null,
          "year": null,
          "google_fonts": "Inter",
          "attestation": "conventional"
        },
        {
          "name": "Arial",
          "foundry": null,
          "year": null,
          "google_fonts": "Arimo",
          "attestation": "unknown"
        },
        {
          "name": "Lucida Console",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "attestation": "inferred"
        }
      ],
      "flags": [
        "sparse_imagery"
      ],
      "honest_gaps": [
        "1. **Grid colour exact chromatic specification** — not attested in any primary style guide; only visual approximations exist. Could be resolved by spectrometric measurement of a new/unaged ECG paper roll from a known manufacturer (e.g., GE, Nihon Kohden) and publication of the resulting Lab or sRGB value."
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#F5F0E0",
    "--on-bg": "#000000",
    "--primary": "#000000",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#43A047",
    "--on-secondary": "#000000",
    "--surface": "#F5F0E0",
    "--on-bg-muted": "#1A1A1A",
    "--border": "#D0E5F0",
    "--error": "#E53935",
    "--font-display": "'IBM Plex Mono', monospace",
    "--font-body": "'IBM Plex Mono', monospace",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "surface-container": "#F5F0E0",
    "surface-container-lowest": "#FFFFFF",
    "on-surface": "#000000",
    "on-surface-variant": "#E0E0E0",
    "outline": "#D0E5F0",
    "error": "#E53935",
    "on-error": "#FFFFFF",
    "tertiary": "#43A047",
    "ink": "#000000",
    "paper-white": "#FFFFFF",
    "grid-minor": "#D0E5F0",
    "grid-major": "#A9C2D9",
    "alarm": "#E53935",
    "normal-marker": "#43A047",
    "err": "#E53935",
    "warn": "#FF8C42",
    "ok": "#22C55E",
    "deltaUp": "#22C55E",
    "deltaDown": "#E53935",
    "deltaFlat": "#1A1A1A",
    "live": "#000000",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#1A1A1A",
    "chartFont": "Space Grotesk"
  },
  "chartStyle": {
    "type": "line",
    "lineColor": "var(--primary)",
    "lineWidth": 2,
    "gridColor": "var(--border)",
    "gridMajorColor": "var(--border)",
    "backgroundColor": "var(--surface)",
    "gridLineWidth": 1,
    "rounded": false,
    "antiAlias": false,
    "traceRendering": "crispEdges",
    "skipGaps": true,
    "calibrationPulse": "1mV square wave at left",
    "labelColor": "#1A1A1A",
    "fontFamily": "'IBM Plex Mono', monospace"
  },
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "paper",
    "grain": {
      "technique": "SVG feTurbulence",
      "parameters": {
        "baseFrequency": "0.7",
        "numOctaves": 2,
        "type": "fractalNoise"
      },
      "opacity": "8%",
      "blend": "overlay",
      "color": "monochrome"
    },
    "inkBleed": {
      "technique": "CSS blur",
      "radius": "0.3px",
      "opacity": "0.12",
      "surface": "trace line only",
      "peakIntensity": true
    },
    "paperYellowing": {
      "color": "#F5F0E0",
      "vignette": "radial-gradient(ellipse, transparent 70%, rgba(255,200,150,0.15) 100%)"
    },
    "foldLines": {
      "technique": "repeating-linear-gradient",
      "opacity": "0.1",
      "color": "#000000"
    },
    "gridMisregistration": {
      "translate": "0.5px",
      "rotation": "±0.05deg",
      "perStrip": true
    }
  },
  "interactionModel": {
    "hover": {
      "opacity": 0.8
    },
    "focus": {
      "outline": "none"
    },
    "active": {},
    "transition": "0ms",
    "exemptAnimations": [
      "trace-draw",
      "alarm-pulse"
    ]
  },
  "spacing": {
    "component-internal": "4px",
    "section-internal": "8px",
    "page-edge": "8px",
    "gap-component": "4px",
    "gap-section": "16px",
    "height-sm": "32px",
    "height-md": "48px",
    "height-lg": "64px",
    "icon": "16px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "0px"
  },
  "elevation": {
    "flat": true,
    "shadows": "none",
    "stackingContext": "none"
  },
  "dashboardStyle": {
    "layout": "strict horizontal strips separated by ruled lines, left-aligned lead labels, right-aligned measurements",
    "density": "compact, with 20px row heights and 4px gaps",
    "panelTreatment": "flat white paper surface with grid background, no elevation, no rounding",
    "dataVizStyle": "crisp black line traces on pale blue grid, no anti-aliasing, no gradients",
    "signatureElement": "continuous wavy trace with calibration pulse at start of each lead strip"
  },
  "landingStyle": {
    "heroApproach": "full-width trace animation as hero background, overlaid with monospaced title and heart rate display",
    "scrollBehavior": "stepped scroll sections that reveal additional lead strips or patient data cards",
    "ctaStyle": "flat black monospaced button with uppercase text, no rounding, no shadow",
    "signatureMoment": "the first trace line slowly draws from left to right on load, simulating ECG recording"
  },
  "globalFilter": "<svg xmlns='http://www.w3.org/2000/svg'><defs><filter id='ecg-grain' x='0' y='0' width='100%' height='100%'><feTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='2' result='noise'/><feColorMatrix type='saturate' values='0' in='noise' result='monoNoise'/><feComponentTransfer in='monoNoise' result='attenuatedNoise'><feFuncA type='linear' slope='0.08'/></feComponentTransfer><feBlend mode='overlay' in='SourceGraphic' in2='attenuatedNoise'/></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-body); background: #F5F0E0 radial-gradient(ellipse, transparent 70%, rgba(255,200,150,0.15) 100%); color: #000000; filter: sepia(0.1) contrast(0.95) brightness(0.98) url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='ecg-grain' x='0' y='0' width='100%25' height='100%25'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='2' result='noise'/%3E%3CfeColorMatrix type='saturate' values='0' in='noise' result='monoNoise'/%3E%3CfeComponentTransfer in='monoNoise' result='attenuatedNoise'%3E%3CfeFuncA type='linear' slope='0.08'/%3E%3C/feComponentTransfer%3E%3CfeBlend mode='overlay' in='SourceGraphic' in2='attenuatedNoise'/%3E%3C/filter%3E%3C/svg%3E#ecg-grain\");",
  "globalCss": null,
  "interactionStyles": ".ds-layout-frame .interactive:hover { opacity: 0.8; cursor: pointer; } .ds-layout-frame .interactive:active { opacity: 1; } .ds-layout-frame .interactive { transition: opacity 0ms; } .ds-layout-frame [data-state='disabled'] { opacity: 0.3; pointer-events: none; } .ds-layout-frame :focus { outline: none; } .ds-layout-frame .trace-draw { transition: none; } .ds-layout-frame .alarm-pulse { transition: none; }",
  "buttons": [
    {
      "name": "ECG Flat Button",
      "desc": "Primary action button with square corners, uppercase monospaced text, and solid ink-black background.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||'';this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+' ':'')+'brightness(1.12)';\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||''\" style=\"background: var(--primary); color: var(--on-primary); border: none; border-radius: var(--radius-btn); padding: 0 16px; height: var(--height-sm); font-family: var(--font-display); font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; cursor: pointer;\">START RECORD</button>",
      "label": "ECG Flat Button",
      "note": "Primary action button with square corners, uppercase monospaced text, and solid ink-black background."
    },
    {
      "name": "ECG Marker Button",
      "desc": "Secondary button using the green normal-marker color for confirmations or normal status actions.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||'';this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+' ':'')+'brightness(1.12)';\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||''\" style=\"background: var(--secondary-col); color: var(--on-secondary); border: none; border-radius: var(--radius-btn); padding: 0 16px; height: var(--height-sm); font-family: var(--font-display); font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; cursor: pointer;\">NORMAL</button>",
      "label": "ECG Marker Button",
      "note": "Secondary button using the green normal-marker color for confirmations or normal status actions."
    },
    {
      "name": "EGC Outline Button",
      "desc": "Outlined button for secondary actions, using border instead of fill to maintain the flat paper aesthetic.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||'';this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+' ':'')+'brightness(1.12)';\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||''\" style=\"background: transparent; color: var(--primary); border: 1px solid var(--border); border-radius: var(--radius-btn); padding: 0 16px; height: var(--height-sm); font-family: var(--font-display); font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; cursor: pointer;\">CANCEL</button>",
      "label": "EGC Outline Button",
      "note": "Outlined button for secondary actions, using border instead of fill to maintain the flat paper aesthetic."
    }
  ],
  "cards": [
    {
      "name": "Trace Strip Card",
      "desc": "A card simulating an ECG lead strip: pale grid background, a continuous black wavy trace, lead label at left, calibration pulse. Emulates thermal paper texture.",
      "html": "<div style=\"background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-card); padding: var(--section-internal); display: flex; flex-direction: column; gap: var(--gap-component); font-family: var(--font-body);\"><div style=\"display: flex; justify-content: space-between; align-items: center;\"><span style=\"font-family: var(--font-display); font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.025em; color: var(--primary);\">LEAD II</span><span style=\"font-family: var(--font-body); font-size: 10px; text-transform: uppercase; color: var(--on-bg-muted);\">25 MM/S</span></div><div style=\"height: 48px; background-image: repeating-linear-gradient(0deg, var(--border) 0px, var(--border) 1px, transparent 1px, transparent 4px), repeating-linear-gradient(90deg, var(--border) 0px, var(--border) 1px, transparent 1px, transparent 4px); background-size: 4px 4px; position: relative;\"><svg width=\"100%\" height=\"48\" viewBox=\"0 0 200 48\" preserveAspectRatio=\"none\" style=\"position: absolute; top: 0; left: 0;\"><path d=\"M0,24 L10,24 L15,10 L20,24 L30,24 L35,38 L40,24 L50,24 L55,10 L60,24 L70,24 L75,38 L80,24 L90,24 L95,10 L100,24 L110,24 L115,38 L120,24 L130,24 L135,10 L140,24 L150,24 L155,38 L160,24 L170,24 L175,10 L180,24 L190,24 L195,38 L200,24\" fill=\"none\" stroke=\"var(--primary)\" stroke-width=\"2\" stroke-linecap=\"square\" stroke-linejoin=\"miter\" /></svg></div><div style=\"display: flex; justify-content: center; gap: var(--gap-component);\"><span style=\"width: 12px; height: 12px; background: var(--secondary-col); border-radius: var(--radius-default); display: inline-block;\"></span><span style=\"font-family: var(--font-body); font-size: 10px; text-transform: uppercase; color: var(--primary);\">NORMAL</span></div></div>",
      "label": "Trace Strip Card",
      "note": "A card simulating an ECG lead strip: pale grid background, a continuous black wavy trace, lead label at left, calibration pulse. Emulates thermal paper texture."
    },
    {
      "name": "Patient Info Card",
      "desc": "Flat card displaying patient metrics in the typical ECG report style: label on left, value on right, no rounding.",
      "html": "<div style=\"background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-card); padding: var(--section-internal); font-family: var(--font-body); display: grid; grid-template-columns: auto 1fr; gap: var(--gap-component);\"><span style=\"font-family: var(--font-display); font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--border); font-weight: 400;\">PATIENT ID</span><span style=\"font-family: var(--font-body); font-size: 12px; color: var(--primary);\">ECG-2025-001</span><span style=\"font-family: var(--font-display); font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--border);\">DATE</span><span style=\"font-family: var(--font-body); font-size: 12px; color: var(--primary);\">12/02/2025</span><span style=\"font-family: var(--font-display); font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--border);\">HR</span><span style=\"font-family: var(--font-body); font-size: 12px; color: var(--primary);\">72 BPM</span><span style=\"font-family: var(--font-display); font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--border);\">QTc</span><span style=\"font-family: var(--font-body); font-size: 12px; color: var(--primary);\">420 MS</span></div>",
      "label": "Patient Info Card",
      "note": "Flat card displaying patient metrics in the typical ECG report style: label on left, value on right, no rounding."
    }
  ],
  "forms": [
    {
      "name": "ECG Text Input",
      "desc": "Monospaced uppercase text input with no rounding, bordered like a data cell.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 2px; font-family: var(--font-body);\"><label style=\"font-family: var(--font-display); font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--on-bg-muted);\">PATIENT NAME</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" value=\"DOE, JOHN\" style=\"background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-default); padding: 4px 8px; height: var(--height-sm); font-family: var(--font-body); font-size: 12px; color: var(--primary); text-transform: uppercase; letter-spacing: 0.025em; outline: none;\"></div>",
      "label": "ECG Text Input",
      "stateLabel": "Monospaced uppercase text input with no rounding, bordered like a data cell."
    },
    {
      "name": "ECG Select",
      "desc": "Dropdown select with squared corners and monospaced uppercase options.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 2px; font-family: var(--font-body);\"><label style=\"font-family: var(--font-display); font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--on-bg-muted);\">LEAD</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-default); padding: 4px 8px; height: var(--height-sm); font-family: var(--font-body); font-size: 12px; color: var(--primary); text-transform: uppercase; letter-spacing: 0.025em; outline: none; appearance: none;\"><option>LEAD I</option><option selected>LEAD II</option><option>LEAD III</option><option>AVR</option><option>AVL</option><option>AVF</option></select></div>",
      "label": "ECG Select",
      "stateLabel": "Dropdown select with squared corners and monospaced uppercase options."
    },
    {
      "name": "ECG Checkbox",
      "desc": "A squared checkbox simulating a paper fill-in square, using the alarm red for error or marker green for normal.",
      "html": "<div style=\"display: flex; align-items: center; gap: var(--gap-component); font-family: var(--font-body);\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"width: 16px; height: 16px; border: 1px solid var(--border); background: var(--surface); border-radius: var(--radius-default); accent-color: var(--primary);\"><label style=\"font-family: var(--font-display); font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--primary);\">ABNORMAL</label></div>",
      "label": "ECG Checkbox",
      "stateLabel": "A squared checkbox simulating a paper fill-in square, using the alarm red for error or marker green for normal."
    }
  ],
  "extraComponents": [
    {
      "name": "Calibration Pulse",
      "desc": "A 1mV square wave calibration marker typically placed at the start of an ECG strip to verify amplitude scaling.",
      "html": "<div style=\"display: flex; align-items: center; gap: 2px; height: 16px;\"><svg width=\"32\" height=\"16\" viewBox=\"0 0 32 16\" style=\"display: block;\"><rect x=\"0\" y=\"2\" width=\"2\" height=\"12\" fill=\"var(--primary)\"/><rect x=\"2\" y=\"2\" width=\"28\" height=\"12\" fill=\"transparent\" stroke=\"var(--primary)\" stroke-width=\"1\"/><rect x=\"30\" y=\"2\" width=\"2\" height=\"12\" fill=\"var(--primary)\"/></svg><span style=\"font-family: var(--font-body); font-size: 8px; text-transform: uppercase; color: var(--on-bg-muted); letter-spacing: 0.05em;\">1 MV</span></div>"
    },
    {
      "name": "Alarm Marker",
      "desc": "A red diamond-shaped marker used to indicate critical arrhythmia events on the trace.",
      "html": "<span style=\"display: inline-flex; align-items: center; gap: 2px;\"><svg width=\"12\" height=\"12\" viewBox=\"0 0 12 12\"><polygon points=\"6,0 12,6 6,12 0,6\" fill=\"var(--error)\" stroke=\"var(--primary)\" stroke-width=\"1\"/></svg><span style=\"font-family: var(--font-body); font-size: 8px; text-transform: uppercase; color: var(--error); letter-spacing: 0.05em;\">ALARM</span></span>"
    },
    {
      "name": "Electrode Symbol",
      "desc": "A simple square dot representing electrode placement on the body diagram, used in lead configuration diagrams.",
      "html": "<span style=\"display: inline-flex; align-items: center; gap: 4px;\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"><circle cx=\"8\" cy=\"8\" r=\"4\" fill=\"var(--primary)\"/><circle cx=\"8\" cy=\"8\" r=\"6\" fill=\"none\" stroke=\"var(--border)\" stroke-width=\"1\"/></svg><span style=\"font-family: var(--font-body); font-size: 8px; text-transform: uppercase; color: var(--primary); letter-spacing: 0.05em;\">RA</span></span>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — HR: 72 BPM</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — SINUS RHYTHM</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — LEAD II</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — 10 MM/MV</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — 25 MM/S</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Rounded corners on any element (buttons, cards, inputs) breaks the sharp rectilinear grid paper aesthetic.",
      "avoid": {
        "html": "<button style=\"border-radius: 8px; background: #000; color: #fff; padding: 8px 16px; font-family: Arial; text-transform: none;\">Start</button>",
        "label": "Avoid"
      },
      "rule": "Rounded corners on any element (buttons, cards, inputs) breaks the sharp rectilinear grid paper aesthetic.",
      "do": {
        "label": "Do",
        "html": "<div style=\"display:flex;align-items:center;gap:4px;height:48px;background-image:repeating-linear-gradient(0deg,#D0E5F0 0px,#D0E5F0 1px,transparent 1px,transparent 4px),repeating-linear-gradient(90deg,#D0E5F0 0px,#D0E5F0 1px,transparent 1px,transparent 4px);background-size:4px 4px;border:1px solid #D0E5F0;\"><span style=\"font-family:'IBM Plex Mono',monospace;font-size:10px;text-transform:uppercase;letter-spacing:0.05em;color:#000;margin-left:4px;\">LEAD II</span><svg width=\"100%\" height=\"48\" viewBox=\"0 0 100 48\" preserveAspectRatio=\"none\" style=\"flex:1;height:48px;\"><path d=\"M0,24 L5,24 L7,12 L10,24 L15,24 L18,36 L21,24 L25,24 L27,12 L30,24 L35,24 L38,36 L41,24 L45,24 L47,12 L50,24 L55,24 L58,36 L61,24 L65,24 L67,12 L70,24 L75,24 L78,36 L81,24 L85,24 L87,12 L90,24 L95,24 L98,36 L100,24\" fill=\"none\" stroke=\"#000\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"/></svg></div>"
      }
    },
    {
      "desc": "Using serif, decorative, or non-monospaced typefaces undermines the clinical technical character.",
      "avoid": {
        "html": "<p style=\"font-family: 'Times New Roman'; font-size: 14px; color: #000;\">Patient Name: John Doe</p>",
        "label": "Avoid"
      },
      "rule": "Using serif, decorative, or non-monospaced typefaces undermines the clinical technical character.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Gradients, box-shadows, and glossy effects contradict the flat paper depth model.",
      "avoid": {
        "html": "<div style=\"background: linear-gradient(135deg, #f5f0e0, #fff); box-shadow: 0 4px 6px rgba(0,0,0,0.1); border-radius: 4px; padding: 16px;\">Card content</div>",
        "label": "Avoid"
      },
      "rule": "Gradients, box-shadows, and glossy effects contradict the flat paper depth model.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Photographic icons or filled-shape icons replace the signal-based medical data presentation.",
      "avoid": {
        "html": "<img src=\"heart-icon.png\" alt=\"heart\" style=\"width: 24px; height: 24px;\">",
        "label": "Avoid"
      },
      "rule": "Photographic icons or filled-shape icons replace the signal-based medical data presentation.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "doAvoidStyle": {
    "desc": "General style anti-patterns for this system: avoid any rounding, gradients, shadows, serif fonts, color full images, and non-monospaced type.",
    "avoid": {
      "html": "<div style=\"border-radius: 12px; background: white; box-shadow: 0 2px 4px rgba(0,0,0,0.2); font-family: 'IBM Plex Mono', monospace; color: #333; padding: 8px;\">Rounded card with shadow</div>"
    }
  },
  "effects": [],
  "motion": [],
  "colors": {
    "primary": "#000000",
    "on-primary": "#FFFFFF",
    "surface-container": "#F5F0E0",
    "surface-container-lowest": "#FFFFFF",
    "outline": "#D0E5F0",
    "error": "#E53935",
    "on-error": "#FFFFFF",
    "tertiary": "#43A047",
    "on-surface": "#000000",
    "on-surface-variant": "#E0E0E0"
  },
  "typography": {
    "display": {
      "fontFamily": "IBM Plex Mono",
      "fontSize": "24px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "IBM Plex Mono",
      "fontSize": "16px",
      "fontWeight": 600,
      "lineHeight": 1.25,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "IBM Plex Mono",
      "fontSize": "14px",
      "fontWeight": 500,
      "lineHeight": 1.25,
      "letterSpacing": "0.025em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "IBM Plex Mono",
      "fontSize": "12px",
      "fontWeight": 400,
      "lineHeight": 1.375,
      "letterSpacing": "0em",
      "textTransform": "none"
    },
    "label": {
      "fontFamily": "IBM Plex Mono",
      "fontSize": "10px",
      "fontWeight": 400,
      "lineHeight": 1,
      "letterSpacing": "0.05em",
      "textTransform": "uppercase"
    }
  },
  "layouts": {
    "copy": {
      "heroKicker": "12-LEAD ACQUISITION",
      "heroHeadline": "RHYTHM TRACE v2.4",
      "heroSub": "Continuous waveform monitoring with calibrated grid and thermal paper rendering",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">START RECORDING</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">LOAD PREVIOUS STRIP</button>",
      "navLinks": [
        "LEADS",
        "STRIPS",
        "CALIBRATION",
        "ALARMS",
        "ARCHIVE"
      ],
      "features": [
        {
          "title": "CONTINUOUS TRACE",
          "desc": "Real-time waveform rendering at 25 mm/s with 1mV calibration pulse per lead",
          "icon": "📉",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📉 CONTINUOUS TRACE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Real-time waveform rendering at 25 mm/s with 1mV calibration pulse per lead</div></div>"
        },
        {
          "title": "ALARM NOTIFICATION",
          "desc": "Red diamond alarm markers on critical arrhythmia events, green normal markers",
          "icon": "🔴",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔴 ALARM NOTIFICATION</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Red diamond alarm markers on critical arrhythmia events, green normal markers</div></div>"
        },
        {
          "title": "LEAD MANAGEMENT",
          "desc": "12-lead selection, baseline correction, and electrode status indicators",
          "icon": "🔌",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔌 LEAD MANAGEMENT</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">12-lead selection, baseline correction, and electrode status indicators</div></div>"
        },
        {
          "title": "THERMAL PAPER SIMULATION",
          "desc": "Accurate paper grain, ink bleed at QRS peaks, and subtle sepia aging for authentic readout",
          "icon": "📄",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📄 THERMAL PAPER SIMULATION</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Accurate paper grain, ink bleed at QRS peaks, and subtle sepia aging for authentic readout</div></div>"
        }
      ],
      "ctaStripHeadline": "READY TO CAPTURE A FULL DIAGNOSTIC STRIP?",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">BEGIN 10-SECOND RECORDING</button>",
      "sidebarBrand": "ECG PRINTOUT",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "TRACE VIEW",
          "active": true
        },
        {
          "icon": "◉",
          "label": "STRIP LIBRARY",
          "active": false
        },
        {
          "icon": "◉",
          "label": "CALIBRATION",
          "active": false
        }
      ],
      "dashboardTitle": "LIVE 12-LEAD MONITOR",
      "metrics": [
        {
          "label": "HEART RATE",
          "value": "72 BPM",
          "delta": "+2 BPM",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "PR INTERVAL",
          "value": "160 MS",
          "delta": "—",
          "dir": "flat",
          "direction": "flat"
        },
        {
          "label": "QRS DURATION",
          "value": "100 MS",
          "delta": "—",
          "dir": "flat",
          "direction": "flat"
        },
        {
          "label": "QT INTERVAL",
          "value": "400 MS",
          "delta": "+10 MS",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "AXIS",
          "value": "60°",
          "delta": "—",
          "dir": "flat",
          "direction": "flat"
        }
      ],
      "chartTitle": "LEAD II — 10-SECOND STRIP",
      "panelATitle": "LEAD MEASUREMENTS",
      "panelARows": [
        {
          "label": "P WAVE",
          "value": "110 MS",
          "pct": 100
        },
        {
          "label": "PR SEGMENT",
          "value": "50 MS",
          "pct": 50
        },
        {
          "label": "ST SEGMENT",
          "value": "80 MS",
          "pct": 80
        },
        {
          "label": "T WAVE",
          "value": "200 MS",
          "pct": 100
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "ELECTRODE STATUS",
      "panelBCells": [
        {
          "label": "RA",
          "value": "OK",
          "state": "ok"
        },
        {
          "label": "LA",
          "value": "OK",
          "state": "warn"
        },
        {
          "label": "RL",
          "value": "OK",
          "state": "err"
        },
        {
          "label": "LL",
          "value": "OK",
          "state": "ok"
        },
        {
          "label": "V1",
          "value": "OK",
          "state": "warn"
        },
        {
          "label": "V2",
          "value": "OK",
          "state": "err"
        },
        {
          "label": "V3",
          "value": "OK",
          "state": "ok"
        },
        {
          "label": "V4",
          "value": "OK",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "0S",
        "1S",
        "2S",
        "3S",
        "4S",
        "5S"
      ],
      "series": [
        {
          "data": [
            0,
            0.2,
            0.5,
            0.3,
            0.1,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "label": "LEAD I",
          "axis": "left",
          "color": "#000000"
        },
        {
          "data": [
            0,
            0.1,
            0.4,
            0.2,
            0.05,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "label": "LEAD II",
          "axis": "right-1",
          "color": "#43A047"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText='background:#F5F0E0;padding:8px;box-sizing:border-box;'; el.innerHTML='<div style=\"display:flex;flex-direction:column;gap:4px;font-family:var(--font-display);\"><div style=\"font-size:10px;letter-spacing:0.12em;color:#87CEEB;text-transform:uppercase;\">12-LEAD ACQUISITION</div><div style=\"font-size:24px;font-weight:700;color:var(--primary);text-transform:uppercase;letter-spacing:-0.025em;\">RHYTHM TRACE v2.4</div><div style=\"font-size:12px;color:var(--on-bg-muted);font-family:var(--font-body);\">Continuous waveform monitoring with calibrated grid and thermal paper rendering</div></div>'; }",
    "showcaseRender": "function(el) { el.style.cssText='display:flex;flex-direction:column;gap:8px;padding:8px;background:var(--surface);border:1px solid var(--border);'; el.innerHTML='<div style=\"display:flex;flex-direction:column;gap:4px;\"><div style=\"display:flex;align-items:center;gap:4px;height:48px;background-image:repeating-linear-gradient(0deg,var(--border) 0px,var(--border) 1px,transparent 1px,transparent 4px),repeating-linear-gradient(90deg,var(--border) 0px,var(--border) 1px,transparent 1px,transparent 4px);background-size:4px 4px;\"><span style=\"font-family:var(--font-display);font-size:10px;text-transform:uppercase;letter-spacing:0.05em;color:var(--primary);margin-left:4px;\">LEAD I</span><svg width=\"100%\" height=\"48\" viewBox=\"0 0 100 48\" preserveAspectRatio=\"none\" style=\"flex:1;height:48px;\"><path d=\"M0,24 L5,24 L7,12 L10,24 L15,24 L18,36 L21,24 L25,24 L27,12 L30,24 L35,24 L38,36 L41,24 L45,24 L47,12 L50,24 L55,24 L58,36 L61,24 L65,24 L67,12 L70,24 L75,24 L78,36 L81,24 L85,24 L87,12 L90,24 L95,24 L98,36 L100,24\" fill=\"none\" stroke=\"var(--primary)\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"/></svg></div><div style=\"display:flex;align-items:center;gap:4px;height:48px;background-image:repeating-linear-gradient(0deg,var(--border) 0px,var(--border) 1px,transparent 1px,transparent 4px),repeating-linear-gradient(90deg,var(--border) 0px,var(--border) 1px,transparent 1px,transparent 4px);background-size:4px 4px;\"><span style=\"font-family:var(--font-display);font-size:10px;text-transform:uppercase;letter-spacing:0.05em;color:var(--primary);margin-left:4px;\">LEAD II</span><svg width=\"100%\" height=\"48\" viewBox=\"0 0 100 48\" preserveAspectRatio=\"none\" style=\"flex:1;height:48px;\"><path d=\"M0,24 L5,24 L7,36 L10,24 L15,24 L18,12 L21,24 L25,24 L27,36 L30,24 L35,24 L38,12 L41,24 L45,24 L47,36 L50,24 L55,24 L58,12 L61,24 L65,24 L67,36 L70,24 L75,24 L78,12 L81,24 L85,24 L87,36 L90,24 L95,24 L98,12 L100,24\" fill=\"none\" stroke=\"var(--primary)\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"/></svg></div></div>'; }",
    "panelCRender": "function(el) { el.style.cssText='padding:8px;background:var(--surface);border:1px solid var(--border);font-family:var(--font-display);'; el.innerHTML='<div style=\"display:flex;flex-direction:column;gap:4px;\"><div style=\"font-size:10px;letter-spacing:0.12em;color:var(--border);text-transform:uppercase;\">ALARM EVENTS</div><div style=\"display:flex;gap:8px;\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"><polygon points=\"8,0 16,8 8,16 0,8\" fill=\"var(--error)\" stroke=\"var(--primary)\" stroke-width=\"1\"/></svg><span style=\"font-size:10px;color:var(--error);text-transform:uppercase;\">VTACH</span></div><div style=\"display:flex;gap:8px;\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"><polygon points=\"8,0 16,8 8,16 0,8\" fill=\"var(--error)\" stroke=\"var(--primary)\" stroke-width=\"1\"/></svg><span style=\"font-size:10px;color:var(--error);text-transform:uppercase;\">FIB</span></div><div style=\"display:flex;gap:8px;margin-top:4px;\"><span style=\"width:12px;height:12px;background:var(--secondary-col);display:inline-block;\"></span><span style=\"font-size:10px;color:var(--secondary-col);text-transform:uppercase;\">NORMAL SINUS</span></div></div>'; }",
    "heroBackground": "function(el) { el.style.cssText='background-image:repeating-linear-gradient(0deg, var(--border) 0px, var(--border) 1px, transparent 1px, transparent 4px),repeating-linear-gradient(90deg, var(--border) 0px, var(--border) 1px, transparent 1px, transparent 4px),radial-gradient(ellipse at 50% 50%, transparent 70%, rgba(255,200,150,0.15) 100%);background-size:4px 4px,4px 4px,100% 100%;background-blend-mode:normal;'; }",
    "ctaBackground": "function(el) { el.style.cssText='background-image:repeating-linear-gradient(0deg, var(--border) 0px, var(--border) 1px, transparent 1px, transparent 4px),repeating-linear-gradient(90deg, var(--border) 0px, var(--border) 1px, transparent 1px, transparent 4px);background-size:4px 4px;background-color:var(--surface);'; }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText='height:1px;background:var(--border);margin:8px 0;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.cssText='background-image:repeating-linear-gradient(0deg, var(--border) 0px, var(--border) 1px, transparent 1px, transparent 4px),repeating-linear-gradient(90deg, var(--border) 0px, var(--border) 1px, transparent 1px, transparent 4px),radial-gradient(ellipse at 50% 50%, transparent 70%, rgba(255,200,150,0.12) 100%);background-size:4px 4px,4px 4px,100% 100%;background-blend-mode:normal;'; }",
    "surfaceOverlay": "function(el) { var ov=document.createElement('div'); ov.style.cssText='position:absolute;inset:0;z-index:2;pointer-events:none;opacity:0.08;background:url(\"data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 100 100%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.7%27 numOctaves=%272%27/%3E%3C/filter%3E%3Crect width=%27100%27 height=%27100%27 filter=%27url(%23n)%27 fill=%27none%27/%3E%3C/svg%3E\");background-size:100px 100px;'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(el, tick) { el.style.cssText='position:absolute;inset:0;overflow:hidden;pointer-events:none;'; var svg = document.createElementNS('http://www.w3.org/2000/svg','svg'); svg.setAttribute('width','100%'); svg.setAttribute('height','100%'); svg.setAttribute('viewBox','0 0 500 100'); svg.setAttribute('preserveAspectRatio','none'); var path = document.createElementNS('http://www.w3.org/2000/svg','path'); path.setAttribute('d','M0,50 L20,50 L30,10 L40,50 L50,50 L60,90 L70,50 L80,50 L90,10 L100,50 L110,50 L120,90 L130,50 L140,50 L150,10 L160,50 L170,50 L180,90 L190,50 L200,50 L210,10 L220,50 L230,50 L240,90 L250,50 L260,50 L270,10 L280,50 L290,50 L300,90 L310,50 L320,50 L330,10 L340,50 L350,50 L360,90 L370,50 L380,50 L390,10 L400,50 L410,50 L420,90 L430,50 L440,50 L450,10 L460,50 L470,50 L480,90 L490,50 L500,50'); path.setAttribute('fill','none'); path.setAttribute('stroke','var(--primary)'); path.setAttribute('stroke-width','2'); path.setAttribute('stroke-linecap','square'); path.setAttribute('stroke-linejoin','miter'); path.setAttribute('stroke-dasharray','1000'); path.setAttribute('stroke-dashoffset', (tick % 1000).toString()); svg.appendChild(path); el.appendChild(svg); }",
  "shadcnTokens": {
    "--color-background": "#F5F0E0",
    "--color-popover": "#F5F0E0",
    "--color-foreground": "#000000",
    "--color-card-foreground": "#000000",
    "--color-popover-foreground": "#000000",
    "--color-card": "#F5F0E0",
    "--color-muted": "#F5F0E0",
    "--color-muted-foreground": "#1A1A1A",
    "--color-primary": "#000000",
    "--color-ring": "#000000",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#43A047",
    "--color-accent": "#43A047",
    "--color-secondary-foreground": "#000000",
    "--color-accent-foreground": "#000000",
    "--color-border": "#D0E5F0",
    "--color-input": "#D0E5F0",
    "--color-destructive": "#E53935"
  },
  "shadcnTokensClassic": {
    "--background": "#F5F0E0",
    "--popover": "#F5F0E0",
    "--foreground": "#000000",
    "--card-foreground": "#000000",
    "--popover-foreground": "#000000",
    "--card": "#F5F0E0",
    "--muted": "#F5F0E0",
    "--muted-foreground": "#1A1A1A",
    "--primary": "#000000",
    "--ring": "#000000",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#43A047",
    "--accent": "#43A047",
    "--secondary-foreground": "#000000",
    "--accent-foreground": "#000000",
    "--border": "#D0E5F0",
    "--input": "#D0E5F0",
    "--destructive": "#E53935"
  }
});
