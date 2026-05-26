registerSystem({
  "meta": {
    "name": "Guilloche",
    "tagline": "19th-century banknote engraving-inspired design system",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Playfair+Display&family=Cormorant+Garamond:wght@400&display=swap"
  },
  "yamlTokens": {
    "name": "Guilloche",
    "colors": {
      "ok": "#1A237E",
      "warn": "#8D6E63",
      "err": "#B71C1C",
      "delta-up": "#1A237E",
      "delta-down": "#B71C1C",
      "delta-flat": "#795548"
    },
    "typography": {
      "display": {
        "fontFamily": "Playfair Display",
        "fontSize": "48px",
        "fontWeight": 400,
        "lineHeight": 1.25,
        "letterSpacing": "0.15em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Playfair Display",
        "fontSize": "36px",
        "fontWeight": 400,
        "lineHeight": 1.25,
        "letterSpacing": "0.15em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Cormorant Garamond",
        "fontSize": "24px",
        "fontWeight": 400,
        "lineHeight": 1.25,
        "letterSpacing": "0.1em"
      },
      "body": {
        "fontFamily": "Cormorant Garamond",
        "fontSize": "16px",
        "fontWeight": 400,
        "lineHeight": 1.5,
        "letterSpacing": "0em"
      },
      "label": {
        "fontFamily": "Cormorant Garamond",
        "fontSize": "12px",
        "fontWeight": 400,
        "lineHeight": 1.5,
        "letterSpacing": "0.1em",
        "textTransform": "uppercase"
      }
    },
    "rounded": {
      "default": "0px",
      "card": "0px",
      "button": "0px",
      "input": "0px",
      "chip": "9999px"
    },
    "spacing": {
      "height-sm": "32px",
      "height-md": "40px",
      "height-lg": "48px",
      "icon": "24px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "{colors.ok}",
        "textColor": "#F5F0E8",
        "rounded": "{rounded.button}",
        "padding": "16px",
        "height": "{spacing.height-md}"
      },
      "button-primary-hover": {
        "backgroundColor": "{colors.ok}",
        "textColor": "#F5F0E8",
        "padding": "16px"
      },
      "card": {
        "backgroundColor": "#F5F0E8",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "input": {
        "backgroundColor": "#F5F0E8",
        "textColor": "{colors.ok}",
        "rounded": "{rounded.input}",
        "padding": "8px",
        "height": "{spacing.height-md}"
      },
      "input-focus": {
        "backgroundColor": "#F5F0E8",
        "textColor": "{colors.ok}",
        "rounded": "{rounded.input}",
        "padding": "8px"
      },
      "security-seal": {
        "backgroundColor": "transparent",
        "textColor": "{colors.ok}",
        "rounded": "{rounded.chip}",
        "size": "40px"
      },
      "microtext-strip": {
        "backgroundColor": "transparent",
        "textColor": "{colors.ok}",
        "height": "12px"
      }
    },
    "version": "alpha",
    "description": "An ornamental design language drawn from 19th-century banknote engraving and security printing, communicating precision and institutional craftsmanship through dense geometric line patterns in a severely limited duotone palette of deep archival ink on cream paper.",
    "provenance": {
      "coverage_status": "complete",
      "identity_description": "All four providers agree that `guilloche` (guilloché) refers to a class of decorative ornamental patterns – intricate, repetitive, interlacing curved lines – produced by mechanical engine‑turning (geometric lathe) or algorithmic generation, and used as security features on banknotes, passports, certificates; on watch dials; and in architectural ornament. The subject is not a single bounded visual ",
      "manual_enrichment_required": false,
      "imagery_count": 5,
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
          "host": "www.ecb.europa.eu",
          "count": 1
        },
        {
          "host": "patents.google.com",
          "count": 1
        },
        {
          "host": "commons.wikimedia.org",
          "count": 1
        },
        {
          "host": "www.securityprinting.org",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://en.wikipedia.org/wiki/Guilloch%C3%A9",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia",
          "confidence_original": "high"
        },
        {
          "url": "https://www.ecb.europa.eu/euro/banknotes/current/security/html/index.en.html",
          "host": "www.ecb.europa.eu",
          "institution": "European Central Bank",
          "confidence_original": "high"
        },
        {
          "url": "https://patents.google.com/patent/US320497A/",
          "host": "patents.google.com",
          "institution": "Google Patents / USPTO",
          "confidence_original": "high"
        },
        {
          "url": "https://commons.wikimedia.org/wiki/Category:Guilloch%C3%A9",
          "host": "commons.wikimedia.org",
          "institution": "Wikimedia Commons",
          "confidence_original": "high"
        },
        {
          "url": "https://www.securityprinting.org/",
          "host": "www.securityprinting.org",
          "institution": "International Association for Security Printing",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": {},
      "flags": [
        "no_typography_extracted"
      ],
      "honest_gaps": [
        "1. **No canonical guilloché pattern** – the subject is a class, not an instance. This record cannot supply a single definitive pattern; it describes the general rules."
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#F5F0E8",
    "--on-bg": "#1A237E",
    "--primary": "#1A237E",
    "--on-primary": "#F5F0E8",
    "--secondary-col": "#8D6E63",
    "--on-secondary": "#1A237E",
    "--surface": "#F5F0E8",
    "--on-bg-muted": "#1A1A1A",
    "--border": "#1A237E",
    "--error": "#B71C1C",
    "--font-display": "Playfair Display",
    "--font-body": "Cormorant Garamond",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "9999px",
    "--spacing-sm": "32px",
    "--spacing-md": "40px",
    "--spacing-lg": "48px",
    "--icon-size": "24px"
  },
  "semanticColors": {
    "ok": "#1A237E",
    "warn": "#8D6E63",
    "err": "#B71C1C",
    "delta-up": "#1A237E",
    "delta-down": "#B71C1C",
    "delta-flat": "#795548",
    "deltaUp": "#1A237E",
    "deltaDown": "#B71C1C",
    "deltaFlat": "#795548",
    "live": "#1A237E",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#1A1A1A",
    "chartFont": "Cormorant Garamond"
  },
  "chartStyle": {
    "background": "#F5F0E8",
    "gridColor": "rgba(26, 35, 126, 0.15)",
    "labelColor": "rgba(26, 35, 126, 0.5)",
    "lineColor": "#1A237E",
    "dotColor": "#1A237E",
    "dotRadius": 2,
    "lineWidth": 1,
    "textureOverlay": "paper-grain",
    "fontFamily": "Cormorant Garamond"
  },
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "paper",
    "params": {
      "grain": "SVG feTurbulence filter",
      "substrate": "cream laid paper",
      "texture": "fractal noise at 0.1 opacity multiply"
    }
  },
  "globalFilter": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0\" height=\"0\"><defs><filter id=\"paper-grain\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"2\" result=\"noise\"/><feColorMatrix type=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.1 0\" in=\"noise\" result=\"coloredNoise\"/></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-body); background: var(--bg); color: var(--on-bg); -webkit-font-smoothing: antialiased; text-rendering: auto;",
  "globalCss": ".ds-layout-frame { position: relative; } .ds-layout-frame::before { content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; mix-blend-mode: multiply; opacity: 0.1; z-index: 9999; filter: url(#paper-grain); } .ds-layout-frame .card, .ds-layout-frame .btn-primary, .ds-layout-frame .input { box-shadow: inset 0 0 0 1px var(--primary); background: var(--bg); } .ds-layout-frame .btn-primary:hover, .ds-layout-frame .card:hover, .ds-layout-frame .input:hover { border-color: var(--primary); } .ds-layout-frame .btn-primary:active, .ds-layout-frame .card:active, .ds-layout-frame .input:active { box-shadow: inset 0 1px 2px rgba(0,0,0,0.15); }",
  "interactionModel": {
    "hover": {
      "property": "border-color",
      "value": "full opacity primary",
      "duration": "150ms",
      "easing": "ease-out"
    },
    "focus": {
      "property": "border-color",
      "width": "2px",
      "style": "solid var(--primary)",
      "outline": "none"
    },
    "active": {
      "property": "box-shadow",
      "value": "inset shadow for engraved recess",
      "description": "simulates intaglio press depression"
    }
  },
  "interactionStyles": ".ds-layout-frame button, .ds-layout-frame a, .ds-layout-frame input, .ds-layout-frame select, .ds-layout-frame textarea { transition: border-color 150ms ease-out, box-shadow 150ms ease-out; } .ds-layout-frame button:hover, .ds-layout-frame a:hover, .ds-layout-frame input:hover, .ds-layout-frame select:hover, .ds-layout-frame textarea:hover { border-color: var(--primary); } .ds-layout-frame button:focus, .ds-layout-frame a:focus, .ds-layout-frame input:focus, .ds-layout-frame select:focus, .ds-layout-frame textarea:focus { border: 2px solid var(--primary); outline: none; } .ds-layout-frame button:active, .ds-layout-frame a:active, .ds-layout-frame input:active, .ds-layout-frame select:active, .ds-layout-frame textarea:active { box-shadow: inset 0 1px 2px rgba(0,0,0,0.15); }",
  "elevation": {
    "default": "none",
    "raised": "inset 0 0 0 1px var(--primary)",
    "overlay": "inset 0 2px 4px rgba(0,0,0,0.15)"
  },
  "dashboardStyle": {
    "layout": "Single centered column with ruled border bands separating header, content, and footer zones. Bilateral symmetry in metric rows.",
    "density": "High — dense, compact data cells with fine ruled lines. No whitespace gaps.",
    "panelTreatment": "Double-rule cartouche frame (2px outer, 1px inner with 4px gap) around each data panel. Paper grain background.",
    "dataVizStyle": "Faint engraved grid lines (1px, 15% opacity), 1px primary ink line charts, 2px dots. No glow. No drop shadow.",
    "signatureElement": "Central rosette medallion watermark behind the main chart area, serving as authenticity mark."
  },
  "landingStyle": {
    "heroApproach": "Central rosette medallion (5+ concentric rings) as hero focal point. Flanked by ruled border bands and symmetrical navigation.",
    "scrollBehavior": "Smooth scroll with line-draw-reveal animations for guilloche borders and microtext strips. No parallax.",
    "ctaStyle": "Primary engraved button centered below medallion, with secondary outline CTA to left and right for symmetry.",
    "signatureMoment": "On load, the rosette medallion performs a slow spin (10s linear) and microtext strips appear from the corners inward."
  },
  "buttons": [
    {
      "name": "Primary Engraved",
      "desc": "Solid ink fill with inset engraved shadow on active. No rounded corners, no drop shadow. Uses cream-on-navy contrast.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:var(--primary); color:var(--on-primary); border:1px solid var(--primary); padding:0 16px; height:var(--spacing-md); font-family:var(--font-display); font-size:12px; letter-spacing:0.1em; text-transform:uppercase; box-shadow:inset 0 0 0 0px transparent; transition:box-shadow 150ms ease-out;\">Secure Action</button>",
      "label": "Primary Engraved",
      "note": "Solid ink fill with inset engraved shadow on active. No rounded corners, no drop shadow. Uses cream-on-navy contrast."
    },
    {
      "name": "Secondary Outline",
      "desc": "Transparent fill with navy border, navy text. Hover adds a faint engraved interior border via inset shadow.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:transparent; color:var(--primary); border:1px solid var(--primary); padding:0 16px; height:var(--spacing-md); font-family:var(--font-display); font-size:12px; letter-spacing:0.1em; text-transform:uppercase; transition:box-shadow 150ms ease-out;\">Verify</button>",
      "label": "Secondary Outline",
      "note": "Transparent fill with navy border, navy text. Hover adds a faint engraved interior border via inset shadow."
    },
    {
      "name": "Ghost Microtext",
      "desc": "No border, no fill. Only ink text. Active state shows microtext underline pattern (simulated via border-bottom).",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:transparent; color:var(--primary); border:none; padding:0 4px; height:var(--spacing-sm); font-family:var(--font-body); font-size:12px; letter-spacing:0.1em; text-transform:uppercase; transition:border-bottom 150ms ease-out;\">Details</button>",
      "label": "Ghost Microtext",
      "note": "No border, no fill. Only ink text. Active state shows microtext underline pattern (simulated via border-bottom)."
    },
    {
      "name": "Error Annotation",
      "desc": "Uses error red for destructive action. Inset shadow on press.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:var(--error); color:var(--bg); border:1px solid var(--error); padding:0 16px; height:var(--spacing-md); font-family:var(--font-display); font-size:12px; letter-spacing:0.1em; text-transform:uppercase;\">Cancel</button>",
      "label": "Error Annotation",
      "note": "Uses error red for destructive action. Inset shadow on press."
    }
  ],
  "cards": [
    {
      "name": "Basic Ruled Card",
      "desc": "Cream background, double-rule border (outer 2px, inner 1px with 4px gap). Paper grain assumed via global overlay. No drop shadow.",
      "html": "<div style=\"background:var(--bg); border:2px solid var(--primary); padding:16px; position:relative;\"><div style=\"position:absolute; top:4px; left:4px; right:4px; bottom:4px; border:1px solid var(--primary); pointer-events:none;\"></div><h3 style=\"font-family:var(--font-display); font-size:16px; letter-spacing:0.15em; text-transform:uppercase; margin:0; color:var(--primary);\">Security Notice</h3><p style=\"font-family:var(--font-body); font-size:14px; color:var(--primary); margin:8px 0 0;\">This document is protected by guilloche latent image patterns.</p></div>",
      "label": "Basic Ruled Card",
      "note": "Cream background, double-rule border (outer 2px, inner 1px with 4px gap). Paper grain assumed via global overlay. No drop shadow."
    },
    {
      "name": "Medallion Card",
      "desc": "Card with central rosette medallion decoration (SVG inline), inset engraved border.",
      "html": "<div style=\"background:var(--bg); border:1px solid var(--primary); padding:16px; box-shadow:inset 0 0 0 1px var(--primary); position:relative;\"><svg viewBox=\"0 0 100 100\" style=\"position:absolute; top:8px; left:8px; width:24px; height:24px; opacity:0.3;\"><circle cx=\"50\" cy=\"50\" r=\"48\" fill=\"none\" stroke=\"var(--primary)\" stroke-width=\"0.5\"/><circle cx=\"50\" cy=\"50\" r=\"40\" fill=\"none\" stroke=\"var(--primary)\" stroke-width=\"0.3\"/><path d=\"M50,2 Q80,50 50,98 Q20,50 50,2\" fill=\"none\" stroke=\"var(--primary)\" stroke-width=\"0.3\"/></svg><div style=\"margin-left:32px;\"><h3 style=\"font-family:var(--font-display); font-size:16px; letter-spacing:0.15em; text-transform:uppercase; margin:0; color:var(--primary);\">Authenticity Seal</h3><p style=\"font-family:var(--font-body); font-size:14px; color:var(--primary); margin:4px 0 0;\">Microtext border present.</p></div></div>",
      "label": "Medallion Card",
      "note": "Card with central rosette medallion decoration (SVG inline), inset engraved border."
    }
  ],
  "forms": [
    {
      "name": "Text Input (Engraved)",
      "desc": "Cream background, no rounded corners, navy border, inset focus shadow. Placeholder in label style.",
      "html": "<div><label style=\"font-family:var(--font-body); font-size:12px; letter-spacing:0.1em; text-transform:uppercase; color:var(--primary); display:block; margin-bottom:4px;\">Serial Number</label><input onfocus=\"this.dataset.guxBorder=this.style.border||'';this.dataset.guxBoxShadow=this.style.boxShadow||'';this.style.border='2px solid var(--primary)';this.style.boxShadow='inset 0 0 0 1px var(--primary)'\" onblur=\"this.style.border=this.dataset.guxBorder||'';this.style.boxShadow=this.dataset.guxBoxShadow||''\" type=\"text\" placeholder=\"Enter code\" style=\"background:var(--bg); color:var(--primary); border:1px solid var(--primary); padding:8px; height:var(--spacing-md); font-family:var(--font-body); font-size:14px; box-sizing:border-box; width:100%; outline:none;\"/></div>",
      "label": "Text Input (Engraved)",
      "stateLabel": "Cream background, no rounded corners, navy border, inset focus shadow. Placeholder in label style."
    },
    {
      "name": "Select (Ruled)",
      "desc": "Custom select with ink border, zero radius. Arrow indicator as inline SVG chevron.",
      "html": "<div style=\"position:relative;\"><label style=\"font-family:var(--font-body); font-size:12px; letter-spacing:0.1em; text-transform:uppercase; color:var(--primary); display:block; margin-bottom:4px;\">Class</label><select onfocus=\"this.dataset.guxBorder=this.style.border||'';this.dataset.guxBoxShadow=this.style.boxShadow||'';this.style.border='2px solid var(--primary)';this.style.boxShadow='inset 0 0 0 1px var(--primary)'\" onblur=\"this.style.border=this.dataset.guxBorder||'';this.style.boxShadow=this.dataset.guxBoxShadow||''\" style=\"background:var(--bg); color:var(--primary); border:1px solid var(--primary); padding:8px; height:var(--spacing-md); font-family:var(--font-body); font-size:14px; appearance:none; width:100%; box-sizing:border-box;\"><option>A</option><option>B</option><option>C</option></select><span style=\"position:absolute; right:8px; top:50%; transform:translateY(-50%); pointer-events:none;\"><svg width=\"10\" height=\"6\" viewBox=\"0 0 10 6\" fill=\"none\" stroke=\"var(--primary)\" stroke-width=\"1.5\"><path d=\"M1 1l4 4 4-4\"/></svg></span></div>",
      "label": "Select (Ruled)",
      "stateLabel": "Custom select with ink border, zero radius. Arrow indicator as inline SVG chevron."
    },
    {
      "name": "Checkbox (Intaglio)",
      "desc": "Squared box with inset shadow when checked, no rounded corners.",
      "html": "<label style=\"display:flex; align-items:center; gap:8px; font-family:var(--font-body); font-size:14px; color:var(--primary); cursor:pointer;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||'';this.dataset.guxBoxShadow=this.style.boxShadow||'';this.style.border='2px solid var(--primary)';this.style.boxShadow='inset 0 0 0 1px var(--primary)'\" onblur=\"this.style.border=this.dataset.guxBorder||'';this.style.boxShadow=this.dataset.guxBoxShadow||''\" type=\"checkbox\" style=\"appearance:none; width:16px; height:16px; border:1px solid var(--primary); background:var(--bg); margin:0; cursor:pointer; flex-shrink:0; transition:box-shadow 150ms ease-out;\" checked/><span>Verified document</span></label>",
      "label": "Checkbox (Intaglio)",
      "stateLabel": "Squared box with inset shadow when checked, no rounded corners."
    },
    {
      "name": "Toggle (Ruled Rail)",
      "desc": "Two-position toggle using ruled track and engraved thumb.",
      "html": "<div><span style=\"font-family:var(--font-body); font-size:12px; letter-spacing:0.1em; text-transform:uppercase; color:var(--primary); display:block; margin-bottom:8px;\">Status</span><label style=\"display:inline-flex; align-items:center; gap:8px; cursor:pointer;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||'';this.dataset.guxBoxShadow=this.style.boxShadow||'';this.style.border='2px solid var(--primary)';this.style.boxShadow='inset 0 0 0 1px var(--primary)'\" onblur=\"this.style.border=this.dataset.guxBorder||'';this.style.boxShadow=this.dataset.guxBoxShadow||''\" type=\"checkbox\" style=\"appearance:none; width:36px; height:16px; border:1px solid var(--primary); background:var(--bg); position:relative; cursor:pointer;\"/><span style=\"font-family:var(--font-body); font-size:14px; color:var(--primary);\">Active</span></label></div>",
      "label": "Toggle (Ruled Rail)",
      "stateLabel": "Two-position toggle using ruled track and engraved thumb."
    }
  ],
  "extraComponents": [
    {
      "name": "Security Seal Badge",
      "desc": "Circular rosette badge (inspired by security-seal token). Transparent background, navy stroke, concentric rings.",
      "html": "<div style=\"display:inline-flex; align-items:center; justify-content:center; width:40px; height:40px; border-radius:var(--radius-chip); border:1px solid var(--primary); background:transparent;\"><svg viewBox=\"0 0 40 40\" width=\"24\" height=\"24\"><circle cx=\"20\" cy=\"20\" r=\"18\" fill=\"none\" stroke=\"var(--primary)\" stroke-width=\"0.5\"/><circle cx=\"20\" cy=\"20\" r=\"14\" fill=\"none\" stroke=\"var(--primary)\" stroke-width=\"0.3\"/><text x=\"20\" y=\"22\" font-family=\"var(--font-body)\" font-size=\"6\" fill=\"var(--primary)\" text-anchor=\"middle\" letter-spacing=\"2\">OK</text></svg></div>"
    },
    {
      "name": "Microtext Strip",
      "desc": "Horizontal strip of repeating micro text, used as authentication band.",
      "html": "<div style=\"height:12px; overflow:hidden; border-top:1px solid var(--primary); border-bottom:1px solid var(--primary); font-family:var(--font-body); font-size:8px; letter-spacing:0.2em; text-transform:uppercase; color:var(--primary); white-space:nowrap; line-height:12px;\">AUTHENTIC DOCUMENT * DO NOT COPY *</div>"
    },
    {
      "name": "Tooltip (Engraved Annotation)",
      "desc": "Small annotation box with inset shadow, no rounded corners.",
      "html": "<div style=\"background:var(--bg); border:1px solid var(--primary); padding:8px 12px; box-shadow:inset 0 0 0 1px var(--primary); font-family:var(--font-body); font-size:12px; color:var(--primary); position:absolute; top:100%; margin-top:4px; white-space:nowrap;\">Verify guilloche rosette</div>"
    },
    {
      "name": "Progress Bar (Ruled Track)",
      "desc": "Horizontal track with fill showing progress. Ruled lines, no rounding.",
      "html": "<div style=\"height:8px; border:1px solid var(--primary); background:var(--bg); position:relative;\"><div style=\"height:100%; width:60%; background:var(--primary);\"></div></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — BANKNOTE</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — SECURITY PRINTING</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — Engraved Lathe Patterns</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — Guilloche patterns are produced by mechanical engine-turning on geometric lathes, creating intricate, interlacing curved line designs that serve as anti-counterfeiting features.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — SERIAL NO. 000744</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Do not use drop shadows — they look like modern UI, not engraved paper. Use only inset shadows.",
      "avoid": {
        "html": "<div style=\"background:var(--bg); box-shadow:0 2px 4px rgba(0,0,0,0.2); padding:16px;\">Fake depth</div>",
        "label": "Avoid"
      },
      "rule": "Do not use drop shadows — they look like modern UI, not engraved paper. Use only inset shadows.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not use rounded corners on cards or buttons — they break the sharp, ruled banknote aesthetic.",
      "avoid": {
        "html": "<button style=\"background:var(--primary); color:var(--on-primary); border-radius:8px; padding:8px 16px;\">Rounded Button</button>",
        "label": "Avoid"
      },
      "rule": "Do not use rounded corners on cards or buttons — they break the sharp, ruled banknote aesthetic.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not use flat white (#FFFFFF) backgrounds — always use cream paper (#F5F0E8) with grain texture.",
      "avoid": {
        "html": "<div style=\"background:#ffffff; color:var(--primary); padding:16px;\">White surface</div>",
        "label": "Avoid"
      },
      "rule": "Do not use flat white (#FFFFFF) backgrounds — always use cream paper (#F5F0E8) with grain texture.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not introduce a third hue outside the duotone palette (cream + navy + only annotation accents).",
      "avoid": {
        "html": "<div style=\"background:var(--bg); border:2px solid #4CAF50; padding:16px;\">Green border</div>",
        "label": "Avoid"
      },
      "rule": "Do not introduce a third hue outside the duotone palette (cream + navy + only annotation accents).",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "doAvoidStyle": {
    "mixing": "Never combine drop shadows with engraved shadows. No overlapping shadows of different types.",
    "rounded": "Never apply border-radius to structural elements (cards, buttons, inputs). Only chips and seals use radius.",
    "color": "Never use a third hue beyond cream, navy, error red, warn umber, or flat graphite. No blues outside #1A237E family.",
    "texture": "Never present a surface without paper grain overlay. No clean digital backgrounds."
  },
  "effects": [],
  "motion": [],
  "colors": {
    "bg": "#F5F0E8",
    "onBg": "#1A237E",
    "primary": "#1A237E",
    "onPrimary": "#F5F0E8",
    "secondary": "#8D6E63",
    "onSecondary": "#1A237E",
    "surface": "#F5F0E8",
    "error": "#B71C1C",
    "border": "#1A237E"
  },
  "typography": {
    "display": {
      "fontFamily": "Playfair Display",
      "fontSize": "48px",
      "fontWeight": 400,
      "lineHeight": 1.25,
      "letterSpacing": "0.15em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "Playfair Display",
      "fontSize": "36px",
      "fontWeight": 400,
      "lineHeight": 1.25,
      "letterSpacing": "0.15em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "Cormorant Garamond",
      "fontSize": "24px",
      "fontWeight": 400,
      "lineHeight": 1.25,
      "letterSpacing": "0.1em"
    },
    "body": {
      "fontFamily": "Cormorant Garamond",
      "fontSize": "16px",
      "fontWeight": 400,
      "lineHeight": 1.5,
      "letterSpacing": "0em"
    },
    "label": {
      "fontFamily": "Cormorant Garamond",
      "fontSize": "12px",
      "fontWeight": 400,
      "lineHeight": 1.5,
      "letterSpacing": "0.1em",
      "textTransform": "uppercase"
    }
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "9999px"
  },
  "spacing": {
    "heightSm": "32px",
    "heightMd": "40px",
    "heightLg": "48px",
    "icon": "24px"
  },
  "layouts": {
    "copy": {
      "heroKicker": "BANKNOTE-GRADE SECURITY PRINTING",
      "heroHeadline": "EVERY LINE IS A SIGNATURE",
      "heroSub": "A platform for issuing and verifying tamper-evident certificates using mechanically engraved cryptographic guilloche patterns on digital paper.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">ISSUE CERTIFICATE</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">VERIFY DOCUMENT</button>",
      "navLinks": [
        "ISSUE",
        "VERIFY",
        "REGISTRY",
        "VAULT"
      ],
      "features": [
        {
          "title": "GUILLOCHE PATTERN ENGINE",
          "desc": "Generate infinite, non-repeating ornamental rosettes and medallions driven by cryptographic seed values. Each pattern is a unique, machine-verifiable fingerprint.",
          "icon": "🔐",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔐 GUILLOCHE PATTERN ENGINE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Generate infinite, non-repeating ornamental rosettes and medallions driven by cryptographic seed values. Each pattern is a unique, machine-verifiable fingerprint.</div></div>"
        },
        {
          "title": "INTAGLIO DIGITAL SEAL",
          "desc": "Apply a recessed engraved seal using inset box-shadows and fine ruled borders. The seal carries hidden microtext that authenticates the document under zoom.",
          "icon": "🖋️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🖋️ INTAGLIO DIGITAL SEAL</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Apply a recessed engraved seal using inset box-shadows and fine ruled borders. The seal carries hidden microtext that authenticates the document under zoom.</div></div>"
        },
        {
          "title": "MICROTEXT AUTHENTICATION",
          "desc": "Embed encrypted microtext within border bands and medallion rings. Reveal on hover or magnification to confirm the document's provenance.",
          "icon": "🔍",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔍 MICROTEXT AUTHENTICATION</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Embed encrypted microtext within border bands and medallion rings. Reveal on hover or magnification to confirm the document&#39;s provenance.</div></div>"
        },
        {
          "title": "TAMPER-EVIDENT CHAIN",
          "desc": "Every issuance is hashed into a public ledger. Any alteration to the guilloche pattern breaks the cryptographic seal and voids the certificate.",
          "icon": "📜",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📜 TAMPER-EVIDENT CHAIN</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Every issuance is hashed into a public ledger. Any alteration to the guilloche pattern breaks the cryptographic seal and voids the certificate.</div></div>"
        }
      ],
      "ctaStripHeadline": "READY TO SECURE YOUR DOCUMENTS?",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">START ENGRAVING</button>",
      "sidebarBrand": "GUILLOCHE",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "CERTIFICATES",
          "active": true
        },
        {
          "icon": "◉",
          "label": "ENGRAVING",
          "active": false
        }
      ],
      "dashboardTitle": "CERTIFICATE REGISTRY",
      "metrics": [
        {
          "label": "CERTIFICATES ISSUED",
          "value": "1,242",
          "delta": "+18%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "VERIFICATIONS TODAY",
          "value": "847",
          "delta": "+5%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "ACTIVE MEDALLIONS",
          "value": "96",
          "delta": "0%",
          "dir": "flat",
          "direction": "flat"
        },
        {
          "label": "SECURITY STATUS",
          "value": "AUTHENTIC",
          "delta": "—",
          "dir": "flat",
          "direction": "flat"
        }
      ],
      "chartTitle": "ENGRAVING THROUGHPUT",
      "panelATitle": "RECENT ISSUANCES",
      "panelARows": [
        {
          "label": "CERT-2025-042",
          "value": "VERIFIED",
          "pct": 0
        },
        {
          "label": "CERT-2025-043",
          "value": "PENDING",
          "pct": 0
        },
        {
          "label": "DOC-2025-001",
          "value": "EXPIRED",
          "pct": 0
        },
        {
          "label": "CERT-2025-044",
          "value": "VERIFIED",
          "pct": 0
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "MEDALLION REGISTRY",
      "panelBCells": [
        {
          "label": "ROSETTE Α",
          "value": "ACTIVE",
          "state": "ok"
        },
        {
          "label": "ROSETTE Β",
          "value": "ACTIVE",
          "state": "warn"
        },
        {
          "label": "SPIRAL I",
          "value": "RETIRED",
          "state": "err"
        },
        {
          "label": "SPIRAL II",
          "value": "ACTIVE",
          "state": "ok"
        },
        {
          "label": "MEDALLION Γ",
          "value": "PENDING",
          "state": "warn"
        },
        {
          "label": "MEDALLION Δ",
          "value": "ACTIVE",
          "state": "err"
        },
        {
          "label": "BORDER CLASSIC",
          "value": "ACTIVE",
          "state": "ok"
        },
        {
          "label": "BORDER GREEK KEY",
          "value": "ACTIVE",
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
            212,
            218,
            230,
            245,
            260,
            277,
            277,
            277,
            277,
            277,
            277,
            277
          ],
          "label": "ISSUANCES",
          "axis": "left",
          "color": "#1A237E"
        },
        {
          "data": [
            180,
            195,
            210,
            225,
            240,
            260,
            260,
            260,
            260,
            260,
            260,
            260
          ],
          "label": "VERIFICATIONS",
          "axis": "right-1",
          "color": "#8D6E63"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'min-height:400px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#F5F0E8;padding:48px 24px;'; var container = document.createElement('div'); container.style.cssText = 'display:flex;flex-direction:column;align-items:center;max-width:720px;width:100%;'; var medallion = document.createElement('div'); medallion.style.cssText = 'width:120px;height:120px;margin-bottom:32px;border:2px solid #1A237E;border-radius:50%;position:relative;'; var svg = document.createElementNS('http://www.w3.org/2000/svg','svg'); svg.setAttribute('viewBox','0 0 120 120'); svg.style.cssText = 'width:100%;height:100%;'; var g = document.createElementNS('http://www.w3.org/2000/svg','g'); var inner = ''; for(var i=0;i<8;i++){ var r = 10 + i*12; var stroke = i%2===0 ? '#1A237E' : '#1A237E'; var sw = i%2===0 ? 0.5 : 1; inner += '<circle cx=\"60\" cy=\"60\" r=\"'+r+'\" fill=\"none\" stroke=\"'+stroke+'\" stroke-width=\"'+sw+'\"/>'; } inner += '<circle cx=\"60\" cy=\"60\" r=\"4\" fill=\"#1A237E\"/>'; g.innerHTML = inner; svg.appendChild(g); medallion.appendChild(svg); container.appendChild(medallion); var kicker = document.createElement('div'); kicker.style.cssText = 'font-family:var(--font-display);font-size:12px;letter-spacing:0.15em;text-transform:uppercase;color:#1A237E;margin-bottom:8px;'; kicker.textContent = 'BANKNOTE-GRADE SECURITY PRINTING'; container.appendChild(kicker); var headline = document.createElement('div'); headline.style.cssText = 'font-family:var(--font-display);font-size:36px;letter-spacing:0.15em;text-transform:uppercase;color:#1A237E;text-align:center;margin-bottom:16px;'; headline.textContent = 'EVERY LINE IS A SIGNATURE'; container.appendChild(headline); var sub = document.createElement('div'); sub.style.cssText = 'font-family:var(--font-body);font-size:16px;line-height:1.5;color:#1A237E;text-align:center;max-width:600px;margin-bottom:32px;'; sub.textContent = 'A platform for issuing and verifying tamper-evident certificates using mechanically engraved cryptographic guilloche patterns on digital paper.'; container.appendChild(sub); var btnRow = document.createElement('div'); btnRow.style.cssText = 'display:flex;gap:16px;'; var btn1 = document.createElement('button'); btn1.style.cssText = 'background:#1A237E;color:#F5F0E8;border:1px solid #1A237E;padding:0 16px;height:40px;font-family:var(--font-display);font-size:12px;letter-spacing:0.1em;text-transform:uppercase;box-shadow:inset 0 0 0 0 transparent;transition:box-shadow 150ms ease-out;'; btn1.textContent = 'ISSUE CERTIFICATE'; btnRow.appendChild(btn1); var btn2 = document.createElement('button'); btn2.style.cssText = 'background:transparent;color:#1A237E;border:1px solid #1A237E;padding:0 16px;height:40px;font-family:var(--font-display);font-size:12px;letter-spacing:0.1em;text-transform:uppercase;transition:box-shadow 150ms ease-out;'; btn2.textContent = 'VERIFY DOCUMENT'; btnRow.appendChild(btn2); container.appendChild(btnRow); el.appendChild(container); }",
    "showcaseRender": "function(el) { el.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;padding:32px 0;background:#F5F0E8;'; var cards = [['GUILLOCHE PATTERN ENGINE','Generate infinite, non-repeating ornamental rosettes and medallions driven by cryptographic seed values.'],['INTAGLIO DIGITAL SEAL','Apply a recessed engraved seal using inset box-shadows and fine ruled borders.'],['MICROTEXT AUTHENTICATION','Embed encrypted microtext within border bands and medallion rings.'],['TAMPER-EVIDENT CHAIN','Every issuance is hashed into a public ledger.']) ; for(var i=0;i<cards.length;i++){ var card = document.createElement('div'); card.style.cssText = 'border:2px solid #1A237E;padding:24px;background:#F5F0E8;position:relative;'; var innerBorder = document.createElement('div'); innerBorder.style.cssText = 'position:absolute;top:4px;left:4px;right:4px;bottom:4px;border:1px solid #1A237E;pointer-events:none;'; card.appendChild(innerBorder); var title = document.createElement('h3'); title.style.cssText = 'font-family:var(--font-display);font-size:16px;letter-spacing:0.15em;text-transform:uppercase;color:#1A237E;margin:0 0 12px;'; title.textContent = cards[i][0]; card.appendChild(title); var desc = document.createElement('p'); desc.style.cssText = 'font-family:var(--font-body);font-size:14px;line-height:1.5;color:#1A237E;margin:0;'; desc.textContent = cards[i][1]; card.appendChild(desc); el.appendChild(card); } }",
    "panelCRender": "function(el) { el.style.cssText = 'background:#F5F0E8;border:2px solid #1A237E;padding:16px;position:relative;'; var innerBorder = document.createElement('div'); innerBorder.style.cssText = 'position:absolute;top:4px;left:4px;right:4px;bottom:4px;border:1px solid #1A237E;pointer-events:none;'; el.appendChild(innerBorder); var title = document.createElement('h2'); title.style.cssText = 'font-family:var(--font-display);font-size:18px;letter-spacing:0.15em;text-transform:uppercase;color:#1A237E;margin:0 0 16px;'; title.textContent = 'MEDALLION REGISTRY'; el.appendChild(title); var table = document.createElement('table'); table.style.cssText = 'width:100%;border-collapse:collapse;font-family:var(--font-body);font-size:12px;color:#1A237E;'; var rows = [['ROSETTE Α','ACTIVE','#1A237E'],['ROSETTE Β','ACTIVE','#8D6E63'],['SPIRAL I','RETIRED','#B71C1C'],['SPIRAL II','ACTIVE','#1A237E'],['MEDALLION Γ','PENDING','#8D6E63'],['MEDALLION Δ','ACTIVE','#B71C1C'],['BORDER CLASSIC','ACTIVE','#1A237E'],['BORDER GREEK KEY','ACTIVE','#8D6E63']]; for(var i=0;i<rows.length;i++){ var tr = document.createElement('tr'); tr.style.cssText = 'border-bottom:1px solid #1A237E;'; var td1 = document.createElement('td'); td1.style.cssText = 'padding:6px 4px;letter-spacing:0.1em;text-transform:uppercase;'; td1.textContent = rows[i][0]; tr.appendChild(td1); var td2 = document.createElement('td'); td2.style.cssText = 'padding:6px 4px;text-align:right;color:'+rows[i][2]+';font-weight:400;'; td2.textContent = rows[i][1]; tr.appendChild(td2); table.appendChild(tr); } el.appendChild(table); }",
    "heroBackground": "function(el) { el.style.background = 'repeating-linear-gradient(90deg, #1A237E 0px, #1A237E 1px, transparent 1px, transparent 8px), repeating-linear-gradient(0deg, #1A237E 0px, #1A237E 0.5px, transparent 0.5px, transparent 12px)'; el.style.opacity = '0.08'; el.style.pointerEvents = 'none'; }",
    "ctaBackground": "function(el) { el.style.background = 'repeating-linear-gradient(90deg, #1A237E 0px, #1A237E 1px, transparent 1px, transparent 10px), repeating-linear-gradient(0deg, #1A237E 0px, #1A237E 0.5px, transparent 0.5px, transparent 15px)'; el.style.opacity = '0.12'; el.style.pointerEvents = 'none'; }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'height:2px;background:#1A237E;margin:32px 0;position:relative;'; var inner = document.createElement('div'); inner.style.cssText = 'position:absolute;top:-3px;left:50%;transform:translateX(-50%);width:24px;height:8px;border-left:1px solid #1A237E;border-right:1px solid #1A237E;background:#F5F0E8;'; d.appendChild(inner); return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = '#F5F0E8'; el.style.backgroundImage = 'repeating-linear-gradient(0deg, transparent, transparent 24px, rgba(26,35,126,0.04) 24px, rgba(26,35,126,0.04) 25px)'; }",
    "surfaceOverlay": "function(el) { var ov = document.createElement('div'); ov.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;box-shadow:inset 0 0 0 1px #1A237E, inset 0 1px 2px rgba(26,35,126,0.15);'; el.appendChild(ov); }"
  },
  "shadcnTokens": {
    "--color-background": "#F5F0E8",
    "--color-popover": "#F5F0E8",
    "--color-foreground": "#1A237E",
    "--color-card-foreground": "#1A237E",
    "--color-popover-foreground": "#1A237E",
    "--color-card": "#F5F0E8",
    "--color-muted": "#F5F0E8",
    "--color-muted-foreground": "#1A1A1A",
    "--color-primary": "#1A237E",
    "--color-ring": "#1A237E",
    "--color-primary-foreground": "#F5F0E8",
    "--color-secondary": "#8D6E63",
    "--color-accent": "#8D6E63",
    "--color-secondary-foreground": "#1A237E",
    "--color-accent-foreground": "#1A237E",
    "--color-border": "#1A237E",
    "--color-input": "#1A237E",
    "--color-destructive": "#B71C1C"
  },
  "shadcnTokensClassic": {
    "--background": "#F5F0E8",
    "--popover": "#F5F0E8",
    "--foreground": "#1A237E",
    "--card-foreground": "#1A237E",
    "--popover-foreground": "#1A237E",
    "--card": "#F5F0E8",
    "--muted": "#F5F0E8",
    "--muted-foreground": "#1A1A1A",
    "--primary": "#1A237E",
    "--ring": "#1A237E",
    "--primary-foreground": "#F5F0E8",
    "--secondary": "#8D6E63",
    "--accent": "#8D6E63",
    "--secondary-foreground": "#1A237E",
    "--accent-foreground": "#1A237E",
    "--border": "#1A237E",
    "--input": "#1A237E",
    "--destructive": "#B71C1C"
  }
});
