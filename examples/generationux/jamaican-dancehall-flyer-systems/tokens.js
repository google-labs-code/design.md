registerSystem({
  "meta": {
    "name": "Jamaican Dancehall Flyer System (Synthesis)",
    "tagline": "A digital interface language that translates the raw, hyper-saturated energy of 1990s Jamaican dancehall flyers into a maximalist collage of urgency and celebration.",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Barlow+Condensed:wght@100..900&display=swap"
  },
  "yamlTokens": {
    "name": "Jamaican Dancehall Flyer System (Synthesis)",
    "colors": {
      "on-primary": "#000000",
      "on-secondary": "#000000",
      "on-tertiary": "#000000",
      "neutral": "#000000",
      "surface": "#F5F5F0",
      "on-surface": "#000000",
      "surface-container": "#F5F5F0",
      "outline": "#000000",
      "accent-fluorescent": "#39FF14"
    },
    "typography": {
      "display": {
        "fontFamily": "Oswald",
        "fontSize": "60px",
        "fontWeight": 900,
        "lineHeight": 1,
        "letterSpacing": "-0.05em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Oswald",
        "fontSize": "36px",
        "fontWeight": 700,
        "lineHeight": 1,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Archivo Narrow",
        "fontSize": "24px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Courier Prime",
        "fontSize": "12px",
        "fontWeight": 400,
        "lineHeight": 1.5,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "label": {
        "fontFamily": "Courier Prime",
        "fontSize": "12px",
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
      "component-internal": "4px",
      "section-internal": "8px",
      "page-edge": "8px",
      "gap-component": "0px",
      "gap-section": "0px",
      "height-sm": "32px",
      "height-md": "40px",
      "height-lg": "64px",
      "icon": "24px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "#FFD700",
        "textColor": "{colors.on-primary}",
        "padding": "8px",
        "rounded": "{rounded.button}"
      },
      "button-primary-hover": {
        "backgroundColor": "#FFD700",
        "textColor": "{colors.on-primary}",
        "padding": "8px"
      },
      "badge-stamp": {
        "backgroundColor": "#00FFFF",
        "textColor": "{colors.on-secondary}",
        "padding": "4px",
        "rounded": "{rounded.chip}"
      },
      "photo-cutout": {
        "width": "64px",
        "height": "64px"
      }
    },
    "version": "alpha",
    "description": "A digital interface language that translates the raw, hyper-saturated energy of 1990s Jamaican dancehall flyers into a maximalist collage of urgency and celebration, defined by photocopy grain, spot color misregistration, and unapologetic density.",
    "provenance": {
      "coverage_status": "complete",
      "identity_description": "The subject identifier `jamaican-dancehall-flyer-systems` refers to a vernacular visual design tradition of promotional handbills and posters produced for dancehall music events in Jamaica (primarily Kingston) and its diaspora, spanning roughly the late 1970s to the early 2000s, with the most distinctive period conventionally placed between approximately 1980 and 2000. This is not a single institu",
      "manual_enrichment_required": false,
      "imagery_count": 10,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "en.wikipedia.org",
          "count": 3
        },
        {
          "host": "bethlesser.com",
          "count": 1
        },
        {
          "host": "souljazzrecords.co.uk",
          "count": 1
        },
        {
          "host": "www.nlj.gov.jm",
          "count": 1
        },
        {
          "host": "www.mona.uwi.edu",
          "count": 1
        },
        {
          "host": "www.vam.ac.uk",
          "count": 1
        },
        {
          "host": "www.nypl.org",
          "count": 1
        },
        {
          "host": "www.bl.uk",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://en.wikipedia.org/wiki/Impact_(typeface)",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia",
          "confidence_original": "high"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Dancehall",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia",
          "confidence_original": "high"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Sound_system_(Jamaican)",
          "host": "en.wikipedia.org",
          "institution": "Wikimedia Foundation",
          "confidence_original": "high"
        },
        {
          "url": "https://bethlesser.com/",
          "host": "bethlesser.com",
          "institution": "Beth Lesser (private archive)",
          "confidence_original": "low"
        },
        {
          "url": "https://souljazzrecords.co.uk/",
          "host": "souljazzrecords.co.uk",
          "institution": "Soul Jazz Records",
          "confidence_original": "low"
        },
        {
          "url": "https://www.nlj.gov.jm/",
          "host": "www.nlj.gov.jm",
          "institution": "National Library of Jamaica",
          "confidence_original": "low"
        },
        {
          "url": "https://www.mona.uwi.edu/",
          "host": "www.mona.uwi.edu",
          "institution": "University of the West Indies, Mona campus",
          "confidence_original": "low"
        },
        {
          "url": "https://www.vam.ac.uk/",
          "host": "www.vam.ac.uk",
          "institution": "Victoria and Albert Museum, London",
          "confidence_original": "low"
        },
        {
          "url": "https://www.nypl.org/locations/schomburg",
          "host": "www.nypl.org",
          "institution": "New York Public Library, Schomburg Center",
          "confidence_original": "low"
        },
        {
          "url": "https://www.bl.uk/",
          "host": "www.bl.uk",
          "institution": "British Library",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Impact",
          "foundry": "Stephenson Blake",
          "year": 1965,
          "google_fonts": "Oswald",
          "attestation": "conventional"
        },
        {
          "name": "Helvetica",
          "foundry": null,
          "year": null,
          "google_fonts": "Inter",
          "attestation": "unverified"
        },
        {
          "name": "Arial",
          "foundry": null,
          "year": null,
          "google_fonts": "Arimo",
          "attestation": "unverified"
        },
        {
          "name": "Futura",
          "foundry": null,
          "year": null,
          "google_fonts": "Jost",
          "attestation": "unverified"
        }
      ],
      "flags": {},
      "honest_gaps": [
        "1. **No formal specification of any kind ever existed.** The visual identity was never codified in a style guide, brand manual, colour specification, or typographic standard. Any reconstruction is retrospective from surviving artefacts."
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#F5F5F0",
    "--on-bg": "#000000",
    "--primary": "#FFD700",
    "--on-primary": "#000000",
    "--secondary-col": "#00FFFF",
    "--on-secondary": "#000000",
    "--surface": "#F5F5F0",
    "--on-bg-muted": "#1A1A1A",
    "--border": "#000000",
    "--error": "#FF0000",
    "--font-display": "Oswald",
    "--font-body": "Courier Prime",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "success": "#00FFFF",
    "warning": "#39FF14",
    "error": "#FF0000",
    "info": "#FF00FF",
    "err": "#FF0000",
    "ok": "#00FFFF",
    "warn": "#39FF14",
    "deltaUp": "#00FFFF",
    "deltaDown": "#FF0000",
    "deltaFlat": "#1A1A1A",
    "live": "#FFD700",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#1A1A1A",
    "chartFont": "Courier Prime"
  },
  "chartStyle": {
    "pattern": "star-motif",
    "description": "Numerical data shown as large Oswald numbers inside starbursts or cutout photos. No line charts. Status badges use spot colors (ok=cyan, warn=fluorescent green, error=red).",
    "colors": [
      "#FFD700",
      "#00FFFF",
      "#FF00FF",
      "#000000",
      "#39FF14"
    ],
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#1A1A1A",
    "fontFamily": "Courier Prime"
  },
  "surfaceModel": "flat",
  "materialSimulation": {
    "model": "paper",
    "params": {
      "grain": true,
      "halftone": true,
      "screenTint": true,
      "newsprint": true,
      "misregistration": true
    }
  },
  "interactionModel": {
    "hover": {
      "transform": "translate(1px, 1px) scale(1.05)",
      "transition": "100ms ease-out"
    },
    "focus": {
      "outline": "none",
      "boxShadow": "2px 2px 0 0 #FF00FF, -2px -2px 0 0 #00FFFF"
    },
    "active": {
      "transform": "scale(0.95)",
      "transition": "100ms ease-out"
    }
  },
  "spacing": {
    "component-internal": "4px",
    "section-internal": "8px",
    "page-edge": "8px",
    "gap-component": "0px",
    "gap-section": "0px",
    "height-sm": "32px",
    "height-md": "40px",
    "height-lg": "64px",
    "icon": "24px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "0px"
  },
  "elevation": {
    "model": "flat",
    "zIndex": {
      "base": 0,
      "starburst": 5,
      "cutoutPhoto": 10,
      "headline": 20,
      "infoBlock": 15,
      "overlay": 30
    },
    "shadows": "none",
    "textShadow": "2px 2px 0 var(--border)"
  },
  "dashboardStyle": {
    "layout": "Overlapping blocks with heavy black borders, no gaps. Each metric is a starburst or cutout photo. Data points arranged in a dense, left-weighted asymmetry.",
    "density": "Maximal. Every pixel is claimed by a stat, badge, or decorative element. Negative space is filled with rotated stamps or halftone patterns.",
    "panelTreatment": "Each panel is a distinct spot color block (yellow, cyan, magenta) with thick black outline. Panels overlap, sometimes with 4px offset to simulate misregistration.",
    "dataVizStyle": "Numeric values rendered as large Oswald numerals inside starbursts. Labels set in Courier Prime uppercase with zero leading. No tables; status shown as colored stamps (ok=cyan, warn=fluorescent green, error=red).",
    "signatureElement": "A continuous photocopy grain overlay applied across the entire dashboard, with a fixed-position 'BOOM!' stamp in the bottom right corner."
  },
  "landingStyle": {
    "heroApproach": "Single massive headline (Oswald 60px, black on yellow starburst) occupying top 60% of viewport. Headline text has inline drop shadow and zero leading. Behind it, a starburst clip-path filled with spot yellow extends beyond the text.",
    "scrollBehavior": "Scrolling reveals more overlapping blocks with no easing; sudden jump cuts between sections. Each section has a misregistration offset on load.",
    "ctaStyle": "Primary CTA is the 'PULL UP' button (yellow, heavy border) placed at the bottom of the hero, slightly skewed. No hover effects beyond a scaling bounce.",
    "signatureMoment": "On page load, a photocopy screen tint overlay fades in (mix-blend-mode multiply) across the entire composition, and the headline text-shadow flickers between 2px and 4px offset every few seconds."
  },
  "globalFilter": "<svg xmlns='http://www.w3.org/2000/svg' style='display:none'><defs><filter id='photocopy-grain' x='0' y='0' width='100%' height='100%'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' result='noise'/><feColorMatrix type='saturate' values='0' in='noise' result='grayNoise'/><feBlend in='SourceGraphic' in2='grayNoise' mode='multiply'/></filter><filter id='misregistration' x='-5%' y='-5%' width='110%' height='110%'><feOffset dx='1' dy='-1' in='SourceGraphic' result='offset1'/><feOffset dx='-1' dy='1' in='SourceGraphic' result='offset2'/><feBlend mode='screen' in='offset1' in2='offset2'/><feComposite in='SourceGraphic' operator='in'/></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-body), 'Courier Prime', monospace; background-color: var(--bg); color: var(--on-bg); background-image: linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)); background-blend-mode: multiply;",
  "globalCss": ".ds-layout-frame .screen-tint { pointer-events: none; mix-blend-mode: multiply; background-color: rgba(0,0,0,0.1); } .ds-layout-frame::before { content:''; position:absolute; inset:0; pointer-events:none; mix-blend-mode:multiply; background-color:rgba(0,0,0,0.1); z-index:999; }",
  "interactionStyles": ".ds-layout-frame .btn:active { transform: scale(0.95); transition: 0.1s ease-out; } .ds-layout-frame .btn:focus { outline: none; box-shadow: 2px 2px 0 0 #FF00FF, -2px -2px 0 0 #00FFFF; } .ds-layout-frame .photo:hover { transform: skewX(5deg); transition: 0.2s ease-out; } .ds-layout-frame .badge:hover { transform: rotate(5deg); transition: 0.1s ease-out; } .ds-layout-frame .btn:hover { transform: scale(1.05) translate(1px, 1px); transition: 0.1s ease-out; }",
  "buttons": [
    {
      "name": "Primary Button",
      "desc": "High-impact call-to-action with spot yellow fill, heavy black border, and inline drop shadow. Hover triggers a misregistration offset and slight scale bounce.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:var(--primary); color:var(--on-primary); border:4px solid var(--border); font-family:var(--font-display); font-size:24px; font-weight:700; text-transform:uppercase; line-height:1; padding:8px 16px; cursor:pointer; transition:transform 100ms ease-out, filter 100ms ease-out;\">PULL UP</button>",
      "label": "Primary Button",
      "note": "High-impact call-to-action with spot yellow fill, heavy black border, and inline drop shadow. Hover triggers a misregistration offset and slight scale bounce."
    },
    {
      "name": "Secondary Button",
      "desc": "Cyan spot fill with black text. Same heavy border and typographic treatment as primary. Hover adds a skew and rotation to simulate photocopy misregistration.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:var(--secondary-col); color:var(--on-secondary); border:4px solid var(--border); font-family:var(--font-display); font-size:24px; font-weight:700; text-transform:uppercase; line-height:1; padding:8px 16px; cursor:pointer; transition:transform 100ms ease-out;\">BOOM SHOT</button>",
      "label": "Secondary Button",
      "note": "Cyan spot fill with black text. Same heavy border and typographic treatment as primary. Hover adds a skew and rotation to simulate photocopy misregistration."
    },
    {
      "name": "Ghost / Outline Button",
      "desc": "Transparent fill with only the heavy black border. Fluorescent accent dot in corner. Activated state gets a misregistration shadow mimic.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:transparent; color:var(--on-bg); border:4px solid var(--border); font-family:var(--font-display); font-size:24px; font-weight:700; text-transform:uppercase; line-height:1; padding:8px 16px; cursor:pointer; position:relative; transition: background 100ms ease-out; box-shadow: 2px 2px 0 var(--accent-fluorescent);\">FIRE</button>",
      "label": "Ghost / Outline Button",
      "note": "Transparent fill with only the heavy black border. Fluorescent accent dot in corner. Activated state gets a misregistration shadow mimic."
    }
  ],
  "cards": [
    {
      "name": "Artist Photo Cutout Card",
      "desc": "Photograph with uneven, oblong border (cutout-photo clip path). Yellow background behind the cutout. Overlaid with a hand-drawn crown (unicode symbol). Border is heavy black dashed line.",
      "html": "<div style=\"width:160px; height:160px; background:var(--primary); border:4px dashed var(--border); padding:8px; display:flex; align-items:center; justify-content:center; font-family:var(--font-display); font-size:60px; color:var(--on-primary); line-height:1; clip-path:polygon(5% 0%, 95% 2%, 100% 10%, 98% 90%, 90% 100%, 2% 95%, 0% 10%);\">👑</div>",
      "label": "Artist Photo Cutout Card",
      "note": "Photograph with uneven, oblong border (cutout-photo clip path). Yellow background behind the cutout. Overlaid with a hand-drawn crown (unicode symbol). Border is heavy black dashed line."
    },
    {
      "name": "Sound System Info Card",
      "desc": "Overlapping text blocks with thick borders, no negative space. Contains event details stacked with zero leading. Background is surface color with a photocopy grain overlay (simulated via CSS gradient).",
      "html": "<div style=\"background:var(--surface); border:4px solid var(--border); padding:4px; font-family:var(--font-body); color:var(--on-surface); text-transform:uppercase; line-height:1; display:inline-block; background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px);\"><div style=\"border:2px solid var(--border); padding:4px; margin:0; font-family:var(--font-display); font-size:24px; line-height:1;\">KINGSTON<br>NIGHT</div><div style=\"border:2px solid var(--border); padding:4px; margin:0;\">FRIDAY 8PM<br>STREET 42</div><div style=\"border:2px solid var(--secondary-col); padding:4px; margin:0; color:var(--on-secondary);\">FREE SOUND</div></div>",
      "label": "Sound System Info Card",
      "note": "Overlapping text blocks with thick borders, no negative space. Contains event details stacked with zero leading. Background is surface color with a photocopy grain overlay (simulated via CSS gradient)."
    }
  ],
  "forms": [
    {
      "name": "Text Input",
      "desc": "Search / entry field with heavy border, no rounding, uppercase placeholder. Misregistration effect on focus: cyan and magenta shadows offset.",
      "html": "<input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" placeholder=\"ENTER RIDDIM\" style=\"background:var(--surface); color:var(--on-surface); border:4px solid var(--border); font-family:var(--font-body); font-size:12px; text-transform:uppercase; padding:8px; width:100%; outline:none; box-sizing:border-box; transition:box-shadow 100ms ease-out;\">",
      "label": "Text Input",
      "stateLabel": "Search / entry field with heavy border, no rounding, uppercase placeholder. Misregistration effect on focus: cyan and magenta shadows offset."
    },
    {
      "name": "Select / Dropdown",
      "desc": "Custom-styled select with heavy rules, no dropdown arrow; uses a thick border and uppercase label. The selected value has a fluorescent underline.",
      "html": "<select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:var(--surface); color:var(--on-surface); border:4px solid var(--border); font-family:var(--font-body); font-size:12px; text-transform:uppercase; padding:8px; width:100%; appearance:none; -webkit-appearance:none; box-sizing:border-box;\"><option>SELECT VENUE</option><option>CORNER STORE</option><option>DANCE HALL</option><option>RIVER BANK</option></select>",
      "label": "Select / Dropdown",
      "stateLabel": "Custom-styled select with heavy rules, no dropdown arrow; uses a thick border and uppercase label. The selected value has a fluorescent underline."
    },
    {
      "name": "Checkbox / Toggle",
      "desc": "Checkbox styled as a stamped block. Unchecked shows an empty square; checked shows a star (★) in cyan. Label is uppercase monospace.",
      "html": "<label style=\"display:flex; align-items:center; gap:4px; font-family:var(--font-body); font-size:12px; text-transform:uppercase; cursor:pointer;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"appearance:none; -webkit-appearance:none; width:24px; height:24px; border:4px solid var(--border); background:var(--surface); display:flex; align-items:center; justify-content:center; font-size:14px; line-height:1; color:var(--secondary-col);\"> <span>SUBBASS OK</span></label>",
      "label": "Checkbox / Toggle",
      "stateLabel": "Checkbox styled as a stamped block. Unchecked shows an empty square; checked shows a star (★) in cyan. Label is uppercase monospace."
    }
  ],
  "extraComponents": [
    {
      "name": "Badge Stamp",
      "desc": "Rotated stamp with dashed border, cyan background, uppercase Impact text. Used for pricing, promos, or location markers. Hover increases rotation angle.",
      "html": "<div style=\"background:var(--secondary-col); color:var(--on-secondary); border:2px dashed var(--border); padding:4px 8px; font-family:var(--font-display); font-size:18px; text-transform:uppercase; line-height:1; display:inline-block; transform:rotate(-10deg); cursor:default; transition:transform 200ms ease-out;\">$5 ENTRY</div>"
    },
    {
      "name": "Starburst (Decorative)",
      "desc": "Starburst clip-path shape filled with process yellow. Used behind headlines or as standalone callout. Contains single large character or word.",
      "html": "<div style=\"width:120px; height:120px; background:var(--primary); clip-path:polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%); display:flex; align-items:center; justify-content:center; font-family:var(--font-display); font-size:60px; color:var(--on-primary); line-height:1;\">★</div>"
    },
    {
      "name": "BOOM! Stamp",
      "desc": "Small rotated stamp in 6pt monospace, positioned absolutely in a corner. Simulates a hand-stamped urgency notice.",
      "html": "<div style=\"position:absolute; bottom:4px; right:4px; background:var(--primary); border:2px solid var(--border); padding:2px 4px; font-family:var(--font-body); font-size:6px; line-height:1; text-transform:uppercase; transform:rotate(90deg);\">BOOM!</div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — DANCEHALL NATION</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — SOUND SYSTEM CLASH</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — FRIDAY NIGHT RUFF</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — ALL RIDDIMS, ALL DANCE, ALL NIGHT</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — V.I.P. SECTION</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Avoid rounded corners anywhere. This system demands sharp, raw edges. Rounded buttons soften the danger.",
      "avoid": {
        "html": "<button style=\"border-radius:8px; background:#FFD700; color:#000; padding:8px 16px;\">WRONG</button>",
        "label": "Avoid"
      },
      "rule": "Avoid rounded corners anywhere. This system demands sharp, raw edges. Rounded buttons soften the danger.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Never use whitespace larger than 8px. Empty space kills the collage density. Fill with stamps or additional text.",
      "avoid": {
        "html": "<div style=\"padding:32px; background:#F5F5F0; border:1px solid #000;\"><span style=\"margin-bottom:24px;\">SPACED OUT</span></div>",
        "label": "Avoid"
      },
      "rule": "Never use whitespace larger than 8px. Empty space kills the collage density. Fill with stamps or additional text.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not use Helvetica or other clean sans-serifs. Only Oswald (Impact substitute) or Courier Prime (monospace).",
      "avoid": {
        "html": "<div style=\"font-family:Helvetica, Arial, sans-serif; font-size:24px;\">SMOOTH</div>",
        "label": "Avoid"
      },
      "rule": "Do not use Helvetica or other clean sans-serifs. Only Oswald (Impact substitute) or Courier Prime (monospace).",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not layer drop shadows or box shadows. Only flat design with text-shadow on headlines.",
      "avoid": {
        "html": "<div style=\"box-shadow: 4px 4px 10px rgba(0,0,0,0.5); padding:8px;\">SHADOWED</div>",
        "label": "Avoid"
      },
      "rule": "Do not layer drop shadows or box shadows. Only flat design with text-shadow on headlines.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "doAvoidStyle": {
    "description": "Any deviation from the flat, sharp, dense, saturated treatment defined in the tokens is forbidden. Do not introduce rounded corners, soft shadows, clean sans-serif fonts, or empty spaces larger than 8px."
  },
  "effects": [],
  "motion": [],
  "colors": {
    "on-primary": "#000000",
    "on-secondary": "#000000",
    "on-tertiary": "#000000",
    "neutral": "#000000",
    "surface": "#F5F5F0",
    "on-surface": "#000000",
    "surface-container": "#F5F5F0",
    "outline": "#000000",
    "accent-fluorescent": "#39FF14"
  },
  "typography": {
    "display": {
      "fontFamily": "Oswald",
      "fontSize": "60px",
      "fontWeight": 900,
      "lineHeight": 1,
      "letterSpacing": "-0.05em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "Oswald",
      "fontSize": "36px",
      "fontWeight": 700,
      "lineHeight": 1,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "Barlow Condensed",
      "fontSize": "24px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "Courier Prime",
      "fontSize": "12px",
      "fontWeight": 400,
      "lineHeight": 1.5,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "label": {
      "fontFamily": "Courier Prime",
      "fontSize": "12px",
      "fontWeight": 700,
      "lineHeight": 1,
      "letterSpacing": "0.05em",
      "textTransform": "uppercase"
    }
  },
  "layouts": {
    "copy": {
      "heroKicker": "DANCEHALL FLYER SYSTEM",
      "heroHeadline": "MIX IT RAW NO NEGATIVE SPACE",
      "heroSub": "BUILD YOUR SOUND SYSTEM’S NEXT FLYER WITH PHOTOCOPY GRAIN, MISREGISTRATION, AND 100% SATURATION. EVERY ELEMENT OVERLAPS — NO WHITESPACE WIDER THAN A CLOSED FIST.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\\x27background:#FFD700;border:2px solid #000;padding:8px;font-family:Oswald;font-size:24px;text-transform:uppercase;text-shadow:2px 2px 0 #000;\\x27>START YOUR FLYER</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\\x27background:#00FFFF;border:2px dashed #000;padding:8px;font-family:Courier Prime;font-size:12px;text-transform:uppercase;transform:rotate(-3deg);\\x27>VIEW CASES</button>",
      "navLinks": [
        "SOUND SYSTEM",
        "VENUE",
        "RIDDIM",
        "STUDIO",
        "CLASH"
      ],
      "features": [
        {
          "title": "STARBURST GENERATOR",
          "desc": "DROP A YELLOW OR CYAN STARBURST BEHIND ANY HEADLINE. CLIP‑PATH POLYGON BUILT IN. ZERO ROUNDING.",
          "icon": "💥",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">💥 STARBURST GENERATOR</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">DROP A YELLOW OR CYAN STARBURST BEHIND ANY HEADLINE. CLIP‑PATH POLYGON BUILT IN. ZERO ROUNDING.</div></div>"
        },
        {
          "title": "PHOTO CUTOUT TOOL",
          "desc": "TURN ARTIST SHOTS INTO UNEVEN OBLONG CUTOUTS WITH HEAVY BLACK BORDER. AUTO‑CROP AT 5% EDGE OFFSET.",
          "icon": "📸",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📸 PHOTO CUTOUT TOOL</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">TURN ARTIST SHOTS INTO UNEVEN OBLONG CUTOUTS WITH HEAVY BLACK BORDER. AUTO‑CROP AT 5% EDGE OFFSET.</div></div>"
        },
        {
          "title": "MISREGISTRATION ENGINE",
          "desc": "APPLY CYAN‑MAGENTA‑YELLOW OFFSETS TO ANY ELEMENT. HOVER FLICKS THE OFFSET BY 1PX. 100MS TRANSITION.",
          "icon": "🎨",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🎨 MISREGISTRATION ENGINE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">APPLY CYAN‑MAGENTA‑YELLOW OFFSETS TO ANY ELEMENT. HOVER FLICKS THE OFFSET BY 1PX. 100MS TRANSITION.</div></div>"
        },
        {
          "title": "BADGE STAMP LIBRARY",
          "desc": "UNLIMITED STAMPS: 'BOOM!' 'SELECTA' 'SWEETIE' 'VOLUME'. ROTATE UP TO 25°, SET IN 6PT MONOSPACE. NO CURVES.",
          "icon": "🖨️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🖨️ BADGE STAMP LIBRARY</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">UNLIMITED STAMPS: &#39;BOOM!&#39; &#39;SELECTA&#39; &#39;SWEETIE&#39; &#39;VOLUME&#39;. ROTATE UP TO 25°, SET IN 6PT MONOSPACE. NO CURVES.</div></div>"
        }
      ],
      "ctaStripHeadline": "NO WHITESPACE ALLOWED — FILL EVERY CORNER",
      "ctaStripHtml": "<div style='display:flex;gap:4px;font-family:Courier Prime;font-size:12px;text-transform:uppercase;background:#FF00FF;border:2px solid #000;padding:8px;'><span style='background:#39FF14;padding:2px 4px;'>00</span><span style='background:#FFD700;padding:2px 4px;'>DAYS TILL SOUND CLASH</span><span style='background:#00FFFF;padding:2px 4px;'>VOLUME 11</span></div>",
      "sidebarBrand": "RHYTHM STATION",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "MIXER",
          "active": true
        },
        {
          "icon": "◉",
          "label": "FLYER",
          "active": false
        },
        {
          "icon": "◉",
          "label": "STAMPS",
          "active": false
        }
      ],
      "dashboardTitle": "DANCEHALL CONTROL ROOM",
      "metrics": [
        {
          "label": "FLYERS IN ROTATION",
          "value": "822",
          "delta": "+155%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "ACTIVE SOUNDS",
          "value": "44",
          "delta": "+12%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "RIDDIM ON LOCK",
          "value": "17",
          "delta": "+33%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "WICKED SELECTIONS",
          "value": "512",
          "delta": "+200%",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "SELECTA PULSE / BASS LEVEL",
      "panelATitle": "NEXT CLASH LINEUP",
      "panelARows": [
        {
          "label": "JAH THUNDER",
          "value": "100% FIRE",
          "pct": 100
        },
        {
          "label": "BASS MONSTA",
          "value": "B2B SWEETIE",
          "pct": 2
        },
        {
          "label": "RANKIN’ RIDDIM",
          "value": "EXCLUSIVE SET",
          "pct": 0
        },
        {
          "label": "LADY VOLUME",
          "value": "TOASTER SHOWCASE",
          "pct": 0
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "STAMP COLLECTION",
      "panelBCells": [
        {
          "label": "BOOM!",
          "value": "ROTATE 90°",
          "state": "ok"
        },
        {
          "label": "SELECTA",
          "value": "6PT MONOSPACE",
          "state": "warn"
        },
        {
          "label": "SWEETIE",
          "value": "CYAN BADGE",
          "state": "err"
        },
        {
          "label": "VOLUME",
          "value": "YELLOW STAMP",
          "state": "ok"
        },
        {
          "label": "CLASH",
          "value": "DASHED BORDER",
          "state": "warn"
        },
        {
          "label": "RAW",
          "value": "MAGENTA FILL",
          "state": "err"
        },
        {
          "label": "PULSE",
          "value": "FLUORESCENT EDGE",
          "state": "ok"
        },
        {
          "label": "BASS",
          "value": "HEAVY OBLIQUE",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "MON NIGHT",
        "TUES RIDDIM",
        "WED CLASH",
        "THURS VIBE",
        "FRI SOUND",
        "SAT FIRE",
        "SUN SWEET"
      ],
      "series": [
        {
          "data": [
            88,
            91,
            77,
            102,
            115,
            130,
            99,
            99,
            99,
            99,
            99,
            99
          ],
          "label": "VOLUME",
          "axis": "left",
          "color": "#FFD700"
        },
        {
          "data": [
            65,
            72,
            80,
            95,
            110,
            140,
            120,
            120,
            120,
            120,
            120,
            120
          ],
          "label": "BASS",
          "axis": "right-1",
          "color": "#00FFFF"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'position:relative;width:100%;min-height:100vh;background:var(--bg);overflow:hidden;'; el.innerHTML = '<div style=\"position:absolute;top:0;left:0;width:100%;height:60%;clip-path:polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);background:var(--primary);\"></div><div style=\"position:absolute;bottom:0;left:0;width:100%;height:40%;background:var(--secondary-col);clip-path:polygon(5% 0%, 95% 2%, 100% 10%, 98% 90%, 90% 100%, 2% 95%, 0% 10%);\"></div><div style=\"position:absolute;top:20%;left:5%;font-family:var(--font-display);font-size:60px;line-height:1;text-shadow:2px 2px 0 var(--border);color:var(--on-primary);text-transform:uppercase;\">MIX IT RAW<br>NO NEGATIVE SPACE</div><div style=\"position:absolute;top:5%;right:5%;background:var(--secondary-col);border:2px dashed var(--border);padding:4px;font-family:var(--font-body);font-size:6px;transform:rotate(90deg);\">BOOM!</div>'; }",
    "showcaseRender": "function(el) { el.style.cssText = 'position:relative;width:100%;min-height:300px;overflow:hidden;padding:0;margin:0;'; el.innerHTML = '<div style=\"position:absolute;top:0;left:0;width:140px;height:140px;clip-path:polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);background:var(--primary);display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-size:30px;color:var(--on-primary);\">★</div><div style=\"position:absolute;top:15px;left:100px;width:200px;border:4px solid var(--border);background:var(--surface);padding:8px;font-family:var(--font-body);font-size:12px;text-transform:uppercase;transform:rotate(-3deg);\"><strong>STARBURST GENERATOR</strong><br>DROP YELLOW OR CYAN BEHIND HEADLINE</div><div style=\"position:absolute;top:130px;left:200px;width:180px;border:4px solid var(--border);background:var(--surface);padding:8px;font-family:var(--font-body);font-size:12px;transform:rotate(2deg);\"><strong>PHOTO CUTOUT TOOL</strong><br>TURN ARTIST SHOTS INTO OBLONG CUTOUTS</div><div style=\"position:absolute;top:250px;left:80px;width:220px;border:4px solid var(--border);background:var(--surface);padding:8px;font-family:var(--font-body);font-size:12px;transform:rotate(-1deg);\"><strong>MISREGISTRATION ENGINE</strong><br>OFFSET CYAN/MAGENTA/YELLOW BY 1PX</div><div style=\"position:absolute;bottom:5px;right:20px;width:140px;border:4px solid var(--border);background:var(--surface);padding:8px;font-family:var(--font-body);font-size:12px;transform:rotate(5deg);\"><strong>BADGE STAMP LIBRARY</strong><br>UNLIMITED STAMPS, 6PT MONOSPACE</div>'; }",
    "panelCRender": "function(el) { el.style.cssText = 'position:relative;width:100%;min-height:200px;background:var(--surface);border:4px solid var(--border);padding:0;overflow:hidden;'; el.innerHTML = '<div style=\"position:absolute;top:0;left:0;width:50%;height:50%;background:var(--secondary-col);border:2px dashed var(--border);display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-size:18px;transform:rotate(-5deg);\">BOOM!</div><div style=\"position:absolute;top:20px;right:10px;width:40%;border:4px solid var(--border);background:var(--primary);padding:4px;font-family:var(--font-body);font-size:12px;text-transform:uppercase;\">SELECTA</div><div style=\"position:absolute;bottom:10px;left:30%;border:2px solid var(--border);background:#FF00FF;padding:4px;font-family:var(--font-body);font-size:12px;text-transform:uppercase;transform:rotate(10deg);\">SWEETIE</div><div style=\"position:absolute;bottom:0;right:0;width:80px;border:4px solid var(--border);background:#39FF14;padding:4px;font-family:var(--font-body);font-size:12px;text-transform:uppercase;\">VOLUME</div>'; }",
    "heroBackground": "function(el) { el.style.background = 'var(--primary)'; var band = document.createElement('div'); band.style.cssText = 'position:absolute;inset:0;background:repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(0,0,0,0.05) 4px, rgba(0,0,0,0.05) 8px);pointer-events:none;'; el.appendChild(band); }",
    "ctaBackground": "function(el) { el.style.background = '#FF00FF'; var stamp = document.createElement('div'); stamp.style.cssText = 'position:absolute;inset:0;border:4px dashed var(--border);pointer-events:none;'; el.appendChild(stamp); }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'height:4px;background:var(--border);position:relative;'; var stamp = document.createElement('div'); stamp.style.cssText = 'position:absolute;top:-8px;left:10%;background:var(--secondary-col);border:2px solid var(--border);padding:2px 4px;font-family:var(--font-body);font-size:6px;transform:rotate(-5deg);'; stamp.textContent = '— BOOM —'; d.appendChild(stamp); return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = 'var(--bg)'; var grain = document.createElement('div'); grain.style.cssText = 'position:absolute;inset:0;background-image:repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px);pointer-events:none;'; el.appendChild(grain); }",
    "surfaceOverlay": "function(el) { var overlay = document.createElement('div'); overlay.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;mix-blend-mode:multiply;background-image:repeating-radial-gradient(circle, rgba(0,0,0,0.15) 1px, transparent 1px);background-size:4px 4px;'; el.appendChild(overlay); }"
  },
  "shadcnTokens": {
    "--color-background": "#F5F5F0",
    "--color-popover": "#F5F5F0",
    "--color-foreground": "#000000",
    "--color-card-foreground": "#000000",
    "--color-popover-foreground": "#000000",
    "--color-card": "#F5F5F0",
    "--color-muted": "#F5F5F0",
    "--color-muted-foreground": "#1A1A1A",
    "--color-primary": "#FFD700",
    "--color-ring": "#FFD700",
    "--color-primary-foreground": "#000000",
    "--color-secondary": "#00FFFF",
    "--color-accent": "#00FFFF",
    "--color-secondary-foreground": "#000000",
    "--color-accent-foreground": "#000000",
    "--color-border": "#000000",
    "--color-input": "#000000",
    "--color-destructive": "#FF0000"
  },
  "shadcnTokensClassic": {
    "--background": "#F5F5F0",
    "--popover": "#F5F5F0",
    "--foreground": "#000000",
    "--card-foreground": "#000000",
    "--popover-foreground": "#000000",
    "--card": "#F5F5F0",
    "--muted": "#F5F5F0",
    "--muted-foreground": "#1A1A1A",
    "--primary": "#FFD700",
    "--ring": "#FFD700",
    "--primary-foreground": "#000000",
    "--secondary": "#00FFFF",
    "--accent": "#00FFFF",
    "--secondary-foreground": "#000000",
    "--accent-foreground": "#000000",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#FF0000"
  }
});
