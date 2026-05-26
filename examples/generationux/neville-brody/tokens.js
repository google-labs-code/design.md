registerSystem({
  "meta": {
    "name": "Brodyan Noise Grid (Neville Brody Synthesis)",
    "tagline": "A raw, aggressive typographic system fusing punk zine anarchy with Swiss grid discipline.",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Jost:wght@400;700&display=swap"
  },
  "yamlTokens": {
    "name": "Brodyan Noise Grid (Neville Brody Synthesis)",
    "colors": {
      "primary": "#000000",
      "on-primary": "#FFFFFF",
      "surface": "#FFFFFF",
      "on-surface": "#000000",
      "outline": "#000000",
      "error": "#FF0000"
    },
    "typography": {
      "display": {
        "fontFamily": "Inter",
        "fontSize": "60px",
        "fontWeight": 900,
        "lineHeight": 1.25,
        "letterSpacing": "-0.05em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Inter",
        "fontSize": "36px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Inter",
        "fontSize": "24px",
        "fontWeight": 700,
        "lineHeight": 1.5,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Inter",
        "fontSize": "16px",
        "fontWeight": 400,
        "lineHeight": 1.625,
        "letterSpacing": "0em"
      },
      "label": {
        "fontFamily": "Jost",
        "fontSize": "14px",
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
      "section-internal": "0px",
      "page-edge": "0px",
      "gap-component": "0px",
      "gap-section": "0px",
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
        "padding": "16px",
        "height": "40px"
      },
      "button-primary-hover": {
        "backgroundColor": "{colors.error}",
        "textColor": "{colors.on-primary}",
        "rounded": "{rounded.button}",
        "padding": "16px",
        "height": "40px"
      },
      "button-secondary": {
        "backgroundColor": "{colors.surface}",
        "textColor": "{colors.on-surface}",
        "rounded": "{rounded.button}",
        "padding": "16px",
        "height": "40px"
      },
      "card": {
        "backgroundColor": "{colors.surface}",
        "textColor": "{colors.on-surface}",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "input": {
        "backgroundColor": "{colors.surface}",
        "textColor": "{colors.on-surface}",
        "rounded": "{rounded.input}",
        "padding": "8px",
        "height": "40px"
      },
      "input-focus": {
        "backgroundColor": "{colors.surface}",
        "textColor": "{colors.on-surface}",
        "rounded": "{rounded.input}",
        "padding": "8px",
        "height": "40px"
      },
      "stencil-stamp": {
        "backgroundColor": "{colors.error}",
        "textColor": "{colors.on-primary}",
        "size": "32px"
      },
      "geometric-accent-block": {
        "backgroundColor": "{colors.error}",
        "size": "32px"
      }
    },
    "version": "alpha",
    "description": "A raw, aggressive typographic system fusing punk zine anarchy with Swiss grid discipline, treating the digital canvas as a crowded poster of overlapping, colliding type and shapes with deliberate friction and visible print-production artifacts.",
    "provenance": {
      "coverage_status": "complete",
      "identity_description": "",
      "manual_enrichment_required": false,
      "imagery_count": 5,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": null,
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "www.vam.ac.uk",
          "count": 1
        },
        {
          "host": "lib.brown.edu",
          "count": 1
        },
        {
          "host": "www.stedelijk.nl",
          "count": 1
        },
        {
          "host": "en.wikipedia.org",
          "count": 1
        },
        {
          "host": "search.worldcat.org",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://www.vam.ac.uk/",
          "host": "www.vam.ac.uk",
          "institution": "Victoria and Albert Museum, London",
          "confidence_original": "low"
        },
        {
          "url": "https://lib.brown.edu/",
          "host": "lib.brown.edu",
          "institution": "Brown University Library, Rhode Island",
          "confidence_original": "low"
        },
        {
          "url": "https://www.stedelijk.nl/en",
          "host": "www.stedelijk.nl",
          "institution": "Stedelijk Museum, Amsterdam",
          "confidence_original": "low"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Neville_Brody",
          "host": "en.wikipedia.org",
          "institution": null,
          "confidence_original": "high"
        },
        {
          "url": "https://search.worldcat.org/",
          "host": "search.worldcat.org",
          "institution": "WorldCat",
          "confidence_original": "high"
        }
      ],
      "typefaces_attested": {},
      "flags": [
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
    "--secondary-col": "#FF0000",
    "--on-secondary": "#FFFFFF",
    "--surface": "#FFFFFF",
    "--on-bg-muted": "#1A1A1A",
    "--border": "#000000",
    "--error": "#FF0000",
    "--font-display": "'Inter', sans-serif",
    "--font-body": "'Inter', sans-serif",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "primary": "#000000",
    "secondary": "#FF0000",
    "error": "#FF0000",
    "surface": "#FFFFFF",
    "onPrimary": "#FFFFFF",
    "onSecondary": "#FFFFFF",
    "onSurface": "#000000",
    "onError": "#FFFFFF",
    "outline": "#000000",
    "err": "#FF0000",
    "warn": "#FF8C42",
    "ok": "#22C55E",
    "deltaUp": "#22C55E",
    "deltaDown": "#FF0000",
    "deltaFlat": "#1A1A1A",
    "live": "#000000",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#1A1A1A",
    "chartFont": "Space Grotesk"
  },
  "chartStyle": {
    "background": "transparent",
    "borderColor": "var(--border)",
    "borderWidth": "2px",
    "fontFamily": "var(--font-display)",
    "color": "var(--on-bg)",
    "gridColor": "var(--border)",
    "gridStyle": "solid",
    "halftoneOverlay": true,
    "textTransform": "uppercase",
    "letterSpacing": "0.05em",
    "labelColor": "#1A1A1A"
  },
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "paper",
    "params": {
      "texture": "photocopy grain",
      "artifacts": [
        "noise",
        "misregistration",
        "halftone"
      ]
    }
  },
  "interactionModel": {
    "hover": {
      "type": "offset-shift",
      "x": "1px",
      "y": "1px",
      "randomDirection": true
    },
    "focus": {
      "type": "color-border",
      "width": "2px",
      "color": "#FF0000",
      "style": "solid",
      "radius": "0"
    },
    "active": {
      "type": "scale-down",
      "scale": "0.97",
      "visualCompression": true
    },
    "transition": {
      "duration": "100ms",
      "easing": "steps(2)",
      "properties": [
        "opacity",
        "color",
        "transform"
      ]
    }
  },
  "spacing": {
    "component-internal": "4px",
    "section-internal": "0px",
    "page-edge": "0px",
    "gap-component": "0px",
    "gap-section": "0px",
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
  "elevation": {
    "base": {
      "zIndex": 0
    },
    "accent": {
      "zIndex": 10
    },
    "text": {
      "zIndex": 20
    },
    "image": {
      "zIndex": 30
    },
    "artifact": {
      "zIndex": 40
    }
  },
  "dashboardStyle": {
    "layout": "dense grid with overlapping panels; off-center hero metric dominates ~40% of frame; borders are 2px solid black; sections separated by heavy rules",
    "density": "high to very high; multiple layers of text and data points collide; minimal whitespace",
    "panelTreatment": "each panel has a 2px black border, zero radius, may be rotated slightly (1-2deg) or offset; background contains subtle photocopy noise texture",
    "dataVizStyle": "bar and line charts with 2px black stroke, red accent for key data points; halftone overlay on chart areas; axis labels in uppercase using display font with tight tracking",
    "signatureElement": "a red geometric accent block (32x32px) placed in the top-right corner of each dashboard; acts as a visual anchor"
  },
  "landingStyle": {
    "heroApproach": "dominating headline set in 60px/900 weight, off-center and partially cropped by the viewport edge; a red geometric block near the focal point adds tension; body text clustered at the bottom in small caps",
    "scrollBehavior": "no smooth scrolling; content jumps into place with step(2) transitions; elements may appear misaligned or cut off on load",
    "ctaStyle": "primary button in black with white text; hover shifts 1px red accent secondary; both use steps(2) easing; no soft animations",
    "signatureMoment": "a short, looped noise/grain animation on the hero area, combined with a red stencil stamp that briefly twitches when the page loads"
  },
  "globalFilter": "<svg xmlns='http://www.w3.org/2000/svg'><defs><filter id='brodyan-noise' x='0' y='0' width='100%' height='100%'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch' result='noise'/><feColorMatrix type='matrix' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.15 0' in='noise' result='coloredNoise'/><feComposite operator='in' in='coloredNoise' in2='SourceGraphic' result='final'/></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-body); background: var(--bg); color: var(--on-bg); -webkit-font-smoothing: antialiased; text-rendering: geometricPrecision;",
  "globalCss": ".ds-layout-frame, .ds-layout-frame * { box-sizing: border-box; margin: 0; padding: 0; } .ds-layout-frame { position: relative; } .ds-layout-frame::before { content: ''; position: fixed; inset: 0; pointer-events: none; filter: url(#brodyan-noise); opacity: 0.35; z-index: 9999; mix-blend-mode: multiply; }",
  "interactionStyles": ".ds-layout-frame .interactive, .ds-layout-frame button, .ds-layout-frame a, .ds-layout-frame input, .ds-layout-frame [tabindex] { transition: all 100ms steps(2); } .ds-layout-frame .interactive:hover, .ds-layout-frame button:hover, .ds-layout-frame a:hover { transform: translate(1px, -1px); } .ds-layout-frame .interactive:active, .ds-layout-frame button:active, .ds-layout-frame a:active { transform: scale(0.97); } .ds-layout-frame .interactive:focus, .ds-layout-frame button:focus, .ds-layout-frame a:focus, .ds-layout-frame input:focus { outline: 2px solid #FF0000; outline-offset: 0px; }",
  "buttons": [
    {
      "name": "primary-button",
      "desc": "Full-black background with white reversed-out text. Hover shifts 1px randomly; active scales to 0.97 with steps(2) transition.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color:var(--primary);color:var(--on-primary);border:2px solid var(--border);border-radius:var(--radius-btn);padding:16px;height:40px;font-family:var(--font-display);font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;cursor:pointer;transition:all 100ms steps(2);\" onmouseover=\"this.style.transform=\\x27translate(1px,-1px)\\x27\" onmouseout=\"this.style.transform=\\x27none\\x27\" onmousedown=\"this.style.transform=\\x27scale(0.97)\\x27\" onmouseup=\"this.style.transform=\\x27translate(1px,-1px)\\x27\">PRIMARY</button>",
      "label": "primary-button",
      "note": "Full-black background with white reversed-out text. Hover shifts 1px randomly; active scales to 0.97 with steps(2) transition."
    },
    {
      "name": "secondary-button",
      "desc": "White background with black text and black border. Mirrors primary in reverse; hover misregistration offset.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color:var(--bg);color:var(--on-bg);border:2px solid var(--border);border-radius:var(--radius-btn);padding:16px;height:40px;font-family:var(--font-display);font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;cursor:pointer;transition:all 100ms steps(2);\" onmouseover=\"this.style.transform=\\x27translate(-1px,1px)\\x27\" onmouseout=\"this.style.transform=\\x27none\\x27\" onmousedown=\"this.style.transform=\\x27scale(0.97)\\x27\" onmouseup=\"this.style.transform=\\x27translate(-1px,1px)\\x27\">SECONDARY</button>",
      "label": "secondary-button",
      "note": "White background with black text and black border. Mirrors primary in reverse; hover misregistration offset."
    },
    {
      "name": "outline-button",
      "desc": "Transparent background with thick black border, no fill. Hover fills with red accent (error). Active scale down.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color:transparent;color:var(--on-bg);border:2px solid var(--border);border-radius:var(--radius-btn);padding:16px;height:40px;font-family:var(--font-display);font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;cursor:pointer;transition:all 100ms steps(2);\" onmouseover=\"this.style.backgroundColor=\\x27var(--error)\\x27;this.style.color=\\x27var(--on-primary)\\x27;this.style.transform=\\x27translate(1px,1px)\\x27\" onmouseout=\"this.style.backgroundColor=\\x27transparent\\x27;this.style.color=\\x27var(--on-bg)\\x27;this.style.transform=\\x27none\\x27\" onmousedown=\"this.style.transform=\\x27scale(0.97)\\x27\" onmouseup=\"this.style.transform=\\x27translate(1px,1px)\\x27\">OUTLINE</button>",
      "label": "outline-button",
      "note": "Transparent background with thick black border, no fill. Hover fills with red accent (error). Active scale down."
    },
    {
      "name": "stencil-stamp-button",
      "desc": "Small red accent button mimicking a stencil stamp. 32px square, white text, no border.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color:var(--error);color:var(--on-primary);border:none;border-radius:var(--radius-btn);width:32px;height:32px;font-family:var(--font-display);font-size:12px;font-weight:900;text-transform:uppercase;letter-spacing:0.1em;cursor:pointer;transition:all 100ms steps(2);display:inline-flex;align-items:center;justify-content:center;\" onmouseover=\"this.style.transform=\\x27translate(1px,-1px)\\x27\" onmouseout=\"this.style.transform=\\x27none\\x27\">S</button>",
      "label": "stencil-stamp-button",
      "note": "Small red accent button mimicking a stencil stamp. 32px square, white text, no border."
    }
  ],
  "cards": [
    {
      "name": "paper-texture-card",
      "desc": "White card with simulated photocopy noise and ink bleed. Hard black border, no radius. Content overlaps with offset misregistration lines.",
      "html": "<div style=\"background-color:var(--bg);color:var(--on-bg);border:2px solid var(--border);border-radius:var(--radius-card);padding:16px;position:relative;overflow:hidden;font-family:var(--font-body);\"><div style=\"position:absolute;top:0;left:0;width:100%;height:100%;background-image:url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\"><filter id=\"n-bc9d\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(#n-bc9d)\" opacity=\"0.15\"/></svg>');pointer-events:none;\"></div><div style=\"position:relative;z-index:1;\"><div style=\"font-family:var(--font-display);font-size:24px;font-weight:700;text-transform:uppercase;letter-spacing:-0.025em;\">HEADLINE</div><div style=\"font-family:var(--font-body);font-size:14px;line-height:1.5;margin-top:8px;color:var(--on-bg-muted);\">Body text with photocopy noise overlay, ink bleed effect simulated via background pattern.</div></div><div style=\"position:absolute;bottom:8px;right:8px;width:24px;height:24px;background-color:var(--error);opacity:0.8;\"></div></div>",
      "label": "paper-texture-card",
      "note": "White card with simulated photocopy noise and ink bleed. Hard black border, no radius. Content overlaps with offset misregistration lines."
    },
    {
      "name": "overlap-collage-card",
      "desc": "Two overlapping text blocks with contrasting sizes, mimicking a cut-and-paste poster fragment. Includes a rotated red geometric accent block.",
      "html": "<div style=\"background-color:var(--bg);color:var(--on-bg);border:2px solid var(--border);border-radius:var(--radius-card);padding:0;position:relative;width:300px;height:200px;overflow:hidden;font-family:var(--font-body);\"><div style=\"position:absolute;top:20px;left:10px;font-family:var(--font-display);font-size:48px;font-weight:900;text-transform:uppercase;letter-spacing:-0.05em;line-height:1;color:var(--primary);mix-blend-mode:multiply;opacity:0.9;z-index:2;\">NOISE</div><div style=\"position:absolute;top:80px;right:10px;font-family:var(--font-display);font-size:36px;font-weight:700;text-transform:uppercase;letter-spacing:0.025em;color:var(--on-bg);transform:rotate(-5deg);z-index:3;background-color:var(--bg);padding:4px 8px;border:1px solid var(--border);\">GRID</div><div style=\"position:absolute;bottom:0;left:0;width:100%;height:32px;background-color:var(--error);z-index:1;\"></div><div style=\"position:absolute;top:140px;left:120px;width:32px;height:32px;background-color:var(--error);transform:rotate(45deg);z-index:4;\"></div></div>",
      "label": "overlap-collage-card",
      "note": "Two overlapping text blocks with contrasting sizes, mimicking a cut-and-paste poster fragment. Includes a rotated red geometric accent block."
    }
  ],
  "forms": [
    {
      "name": "text-input",
      "desc": "Single-line text input with zero border radius, thick black border, white background. Focus state switches border to red accent and no outline.",
      "html": "<div style=\"margin-bottom:12px;\"><label style=\"display:block;font-family:var(--font-display);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;color:var(--on-bg);\">INPUT LABEL</label><input type=\"text\" placeholder=\"enter text\" style=\"background-color:var(--bg);color:var(--on-bg);border:2px solid var(--border);border-radius:var(--radius-input);padding:8px;height:40px;width:100%;font-family:var(--font-body);font-size:16px;transition:all 100ms steps(2);box-sizing:border-box;\" onfocus=\"this.style.borderColor='var(--error)';this.style.outline='none'\" onblur=\"this.style.borderColor='var(--border)'\"></div>",
      "label": "text-input",
      "stateLabel": "Single-line text input with zero border radius, thick black border, white background. Focus state switches border to red accent and no outline."
    },
    {
      "name": "select-dropdown",
      "desc": "Custom select with upward/downward chevrons, hard edges, black border, red focus ring.",
      "html": "<div style=\"margin-bottom:12px;\"><label style=\"display:block;font-family:var(--font-display);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;color:var(--on-bg);\">SELECT</label><div style=\"position:relative;\"><select style=\"background-color:var(--bg);color:var(--on-bg);border:2px solid var(--border);border-radius:var(--radius-input);padding:8px;height:40px;width:100%;font-family:var(--font-body);font-size:16px;appearance:none;-webkit-appearance:none;cursor:pointer;transition:all 100ms steps(2);box-sizing:border-box;\" onfocus=\"this.style.borderColor='var(--error)';this.style.outline='none'\" onblur=\"this.style.borderColor='var(--border)'\"><option>Option 1</option><option>Option 2</option></select><div style=\"position:absolute;right:8px;top:50%;transform:translateY(-50%);pointer-events:none;color:var(--on-bg);font-size:12px;\">▼</div></div></div>",
      "label": "select-dropdown",
      "stateLabel": "Custom select with upward/downward chevrons, hard edges, black border, red focus ring."
    },
    {
      "name": "checkbox-toggle",
      "desc": "Square checkbox with thick border, no rounding. Checked state fills with black or red. Label has misregistration offset on hover.",
      "html": "<div style=\"margin-bottom:12px;display:flex;align-items:center;gap:8px;transition:all 100ms steps(2);\" onmouseover=\"this.style.transform='translate(1px,-1px)'\" onmouseout=\"this.style.transform='none'\"><input type=\"checkbox\" id=\"chk-7419\" style=\"background-color:var(--bg);border:2px solid var(--border);border-radius:0;width:20px;height:20px;appearance:none;-webkit-appearance:none;cursor:pointer;transition:all 100ms steps(2);flex-shrink:0;\" onchange=\"this.checked?this.style.backgroundColor='var(--primary)':this.style.backgroundColor='var(--bg)'\" onfocus=\"this.style.outline='2px solid var(--error)';this.style.outlineOffset='0'\"><label for=\"chk-7419\" style=\"font-family:var(--font-body);font-size:14px;text-transform:uppercase;letter-spacing:0.05em;color:var(--on-bg);cursor:pointer;\">AGREE TO NOISE</label></div>",
      "label": "checkbox-toggle",
      "stateLabel": "Square checkbox with thick border, no rounding. Checked state fills with black or red. Label has misregistration offset on hover."
    }
  ],
  "extraComponents": [
    {
      "name": "stencil-stamp-badge",
      "desc": "Small red square badge with white text, like a stencil stamp. Used to mark items or indicate status.",
      "html": "<div style=\"display:inline-flex;align-items:center;justify-content:center;background-color:var(--error);color:var(--on-primary);border:none;border-radius:var(--radius-chip);width:32px;height:32px;font-family:var(--font-display);font-size:12px;font-weight:900;text-transform:uppercase;letter-spacing:0.1em;cursor:default;\">A</div>"
    },
    {
      "name": "misregistration-tooltip",
      "desc": "Tooltip that appears with a 1-2px offset from its trigger, mimicking print misregistration. No shadow, hard border.",
      "html": "<div style=\"position:relative;display:inline-block;\"><span style=\"border-bottom:2px dotted var(--border);cursor:help;font-family:var(--font-body);\">hover me</span><div style=\"position:absolute;top:100%;left:50%;transform:translateX(-50%) translate(1px,-1px);background-color:var(--surface);color:var(--on-bg);border:2px solid var(--border);border-radius:0;padding:8px 12px;white-space:nowrap;z-index:100;font-family:var(--font-body);font-size:12px;text-transform:uppercase;letter-spacing:0.05em;pointer-events:none;\">MISREGISTERED</div></div>"
    },
    {
      "name": "red-accent-alert",
      "desc": "Full-width alert bar with red background and reversed-out white text. Looks like a urgent stamp or poster tear-off.",
      "html": "<div style=\"background-color:var(--error);color:var(--on-primary);padding:8px 16px;border:2px solid var(--border);border-radius:0;font-family:var(--font-display);font-size:16px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;display:flex;align-items:center;justify-content:space-between;\"><span>⚠ ALERT: NOISE OVERLOAD</span><span style=\"cursor:pointer;font-size:20px;line-height:1;\">×</span></div>"
    },
    {
      "name": "heavy-rule-divider",
      "desc": "Thick horizontal rule that separates sections. Combines black and red stripes mimicking a photocopied boundary.",
      "html": "<div style=\"width:100%;height:12px;display:flex;border-top:2px solid var(--border);border-bottom:2px solid var(--border);margin:8px 0;\"><div style=\"flex:1;background-color:var(--primary);\"></div><div style=\"flex:2;background-color:var(--error);\"></div><div style=\"flex:1;background-color:var(--primary);\"></div></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — NOISE GRID</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — REBEL PUNK POSTER</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — CUT AND PASTE</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — Photocopy noise overlays every letter. Ink bleeds at edges. Misregistration offsets create a raw, urgent feel.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — STEN-CIL STAMP</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Rounded corners – never soften edges; Brodyan forms must be hard and aggressive.",
      "avoid": {
        "html": "<button style=\"background-color:#000000;color:#FFFFFF;border-radius:8px;padding:16px;\">ROUNDED</button>",
        "label": "Avoid"
      },
      "rule": "Rounded corners – never soften edges; Brodyan forms must be hard and aggressive.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Gradients – only flat spot colors are permitted; gradients destroy the raw print aesthetic.",
      "avoid": {
        "html": "<div style=\"background:linear-gradient(to right, #000000, #FF0000);color:#FFFFFF;padding:16px;\">GRADIENT</div>",
        "label": "Avoid"
      },
      "rule": "Gradients – only flat spot colors are permitted; gradients destroy the raw print aesthetic.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Full-color palettes – strictly black, white, and red; any other color breaks the punk brand.",
      "avoid": {
        "html": "<button style=\"background-color:#00A0FF;color:#FFFFFF;border:none;\">COLORFUL</button>",
        "label": "Avoid"
      },
      "rule": "Full-color palettes – strictly black, white, and red; any other color breaks the punk brand.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Clean alignment – avoid perfect centering or smooth layouts; embrace collision and overlap.",
      "avoid": {
        "html": "<div style=\"display:flex;justify-content:center;align-items:center;height:200px;background:#FFFFFF;border:2px solid #000000;\"><span style=\"font-size:24px;\">PERFECTLY CENTERED</span></div>",
        "label": "Avoid"
      },
      "rule": "Clean alignment – avoid perfect centering or smooth layouts; embrace collision and overlap.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "doAvoidStyle": {
    "desc": "Never use rounded corners, gradients, soft shadows, smooth animations (ease-in-out), full-color images (only duotone/halftone), or perfect symmetry. Avoid any corporate polish that would contradict the raw punk zine feel.",
    "examples": [
      "All elements must have border-radius: 0",
      "All backgrounds must be flat: no linear/radial gradients",
      "No box-shadow or drop-shadow; use 2px solid borders for separation",
      "Transitions must use steps(2) easing, not smooth curves"
    ]
  },
  "effects": [
    {
      "name": "global-filter",
      "value": "contrast(1.08) brightness(1.03)",
      "desc": "Applied to entire page via CSS filter to simulate slightly harsh photocopy contrast.",
      "render": "function(el){ el.style.cssText='width:100%;height:100%;background:var(--surface);position:relative;display:flex;align-items:center;justify-content:center;'; var d=document.createElement('div'); d.style.cssText='width:56px;height:56px;background:var(--primary);box-shadow:0 0 14px var(--primary);'; el.appendChild(d); }"
    },
    {
      "name": "paper-texture",
      "value": "background-image: url('data:image/svg+xml,...')",
      "desc": "Subtle fractal noise overlay on surface elements to mimic paper grain and photocopy artifacts.",
      "render": "function(el){ el.style.cssText='width:100%;height:100%;background:var(--surface);position:relative;display:flex;align-items:center;justify-content:center;'; var d=document.createElement('div'); d.style.cssText='width:56px;height:56px;background:var(--primary);box-shadow:0 0 14px var(--primary);'; el.appendChild(d); }"
    }
  ],
  "motion": [],
  "colors": {
    "primary": "#000000",
    "on-primary": "#FFFFFF",
    "surface": "#FFFFFF",
    "on-surface": "#000000",
    "outline": "#000000",
    "error": "#FF0000"
  },
  "typography": {
    "display": {
      "fontFamily": "Inter",
      "fontSize": "60px",
      "fontWeight": 900,
      "lineHeight": 1.25,
      "letterSpacing": "-0.05em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "Inter",
      "fontSize": "36px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "Inter",
      "fontSize": "24px",
      "fontWeight": 700,
      "lineHeight": 1.5,
      "letterSpacing": "0.025em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "Inter",
      "fontSize": "16px",
      "fontWeight": 400,
      "lineHeight": 1.625,
      "letterSpacing": "0em"
    },
    "label": {
      "fontFamily": "Jost",
      "fontSize": "14px",
      "fontWeight": 400,
      "lineHeight": 1,
      "letterSpacing": "0.05em",
      "textTransform": "uppercase"
    }
  },
  "layouts": {
    "copy": {
      "heroKicker": "ALPHA // NOISE GRID RELEASE MANAGER",
      "heroHeadline": "BRODYAN // NOISE GRID",
      "heroSub": "MANAGE YOUR CATALOG WITH RAW TYPOGRAPHIC FORCE. OVERPRINT, CLIP, AND COLLIDE YOUR RELEASES.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#000000;color:#FFFFFF;padding:16px;height:40px;border:2px solid #000000;font-family:\\x27Inter\\x27,sans-serif;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;cursor:pointer;\">ENTER GRID</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#FFFFFF;color:#000000;padding:16px;height:40px;border:2px solid #000000;font-family:\\x27Inter\\x27,sans-serif;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;cursor:pointer;\">VIEW MANIFESTO</button>",
      "navLinks": [
        "CUTS",
        "PRESS",
        "SIGNAL",
        "OVERPRINT"
      ],
      "features": [
        {
          "title": "HALFTONE TRACKER",
          "desc": "Monitor your release runs with grainy photocopy precision. Each unit is a pressed signal in the noise.",
          "icon": "📀",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📀 HALFTONE TRACKER</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Monitor your release runs with grainy photocopy precision. Each unit is a pressed signal in the noise.</div></div>"
        },
        {
          "title": "INK BLEED SCHEDULER",
          "desc": "Schedule drops with deliberate misregistration. Your timeline is a collision of dates and cuts.",
          "icon": "⏱",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⏱ INK BLEED SCHEDULER</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Schedule drops with deliberate misregistration. Your timeline is a collision of dates and cuts.</div></div>"
        },
        {
          "title": "GEOMETRIC ACCENT BLOCK",
          "desc": "Highlight key releases with a saturated red block. No gradients, just raw accent.",
          "icon": "🔲",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔲 GEOMETRIC ACCENT BLOCK</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Highlight key releases with a saturated red block. No gradients, just raw accent.</div></div>"
        },
        {
          "title": "STENCIL STAMP",
          "desc": "Brand your catalog with a stenciled mark. Each stamp is a hard-edged identifier.",
          "icon": "✖️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">✖️ STENCIL STAMP</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Brand your catalog with a stenciled mark. Each stamp is a hard-edged identifier.</div></div>"
        }
      ],
      "ctaStripHeadline": "READY TO OVERPRINT YOUR CATALOG?",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#FF0000;color:#FFFFFF;padding:16px;height:40px;border:2px solid #000000;font-family:\\x27Inter\\x27,sans-serif;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;cursor:pointer;\">START GRID</button>",
      "sidebarBrand": "NOISE GRID // α",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "RELEASE GRID",
          "active": true
        },
        {
          "icon": "◉",
          "label": "CLIPBOARD",
          "active": false
        }
      ],
      "dashboardTitle": "BRODYAN // RELEASE GRID",
      "metrics": [
        {
          "label": "PRESSED",
          "value": "1,244",
          "delta": "+23%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "CUT",
          "value": "847",
          "delta": "-5%",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "SIGNAL",
          "value": "92.1",
          "delta": "+12%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "NOISE",
          "value": "31",
          "delta": "+8%",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "OVERPRINT FREQUENCY // LAST 6 CYCLES",
      "panelATitle": "TRACK LIST // CUTS",
      "panelARows": [
        {
          "label": "SHRED // B-SIDE",
          "value": "4:23",
          "pct": 4
        },
        {
          "label": "COLLISION // A-SIDE",
          "value": "3:47",
          "pct": 3
        },
        {
          "label": "INVERTED // RADIO EDIT",
          "value": "2:11",
          "pct": 2
        },
        {
          "label": "OVERPRINT // DUB",
          "value": "5:02",
          "pct": 5
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "CLIP BOARD // 8 STAMPS",
      "panelBCells": [
        {
          "label": "CUT 01",
          "value": "OK",
          "state": "ok"
        },
        {
          "label": "CUT 02",
          "value": "OK",
          "state": "warn"
        },
        {
          "label": "CUT 03",
          "value": "BLEED",
          "state": "err"
        },
        {
          "label": "CUT 04",
          "value": "OK",
          "state": "ok"
        },
        {
          "label": "CUT 05",
          "value": "MISREG",
          "state": "warn"
        },
        {
          "label": "CUT 06",
          "value": "OK",
          "state": "err"
        },
        {
          "label": "CUT 07",
          "value": "OK",
          "state": "ok"
        },
        {
          "label": "CUT 08",
          "value": "STAMP",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "CYCLE 01",
        "CYCLE 02",
        "CYCLE 03",
        "CYCLE 04",
        "CYCLE 05",
        "CYCLE 06"
      ],
      "series": [
        {
          "data": [
            43,
            52,
            48,
            61,
            55,
            59,
            59,
            59,
            59,
            59,
            59,
            59
          ],
          "label": "VINYL",
          "axis": "left",
          "color": "#000000"
        },
        {
          "data": [
            28,
            34,
            31,
            29,
            37,
            42,
            42,
            42,
            42,
            42,
            42,
            42
          ],
          "label": "DIGITAL",
          "axis": "right-1",
          "color": "#FF0000"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'position:relative;overflow:hidden;min-height:480px;background:var(--bg);color:var(--on-bg);'; var inner = document.createElement('div'); inner.style.cssText = 'position:absolute;top:40px;left:20px;font-family:var(--font-display);font-size:60px;font-weight:900;line-height:1.1;letter-spacing:-0.05em;text-transform:uppercase;color:var(--primary);mix-blend-mode:multiply;z-index:3;max-width:70%;'; inner.innerHTML = 'BRODYAN<br>//<br>NOISE GRID'; el.appendChild(inner); var sub = document.createElement('div'); sub.style.cssText = 'position:absolute;bottom:60px;right:-10px;font-family:var(--font-display);font-size:36px;font-weight:700;text-transform:uppercase;letter-spacing:-0.025em;color:var(--on-bg);transform:rotate(-7deg);z-index:3;background:var(--bg);padding:4px 12px;border:2px solid var(--border);'; sub.innerHTML = 'ALPHA // RELEASE MANAGER'; el.appendChild(sub); var redBlock = document.createElement('div'); redBlock.style.cssText = 'position:absolute;top:180px;right:40px;width:48px;height:48px;background:var(--error);transform:rotate(45deg);z-index:2;opacity:0.9;'; el.appendChild(redBlock); var noise = document.createElement('div'); noise.style.cssText = 'position:absolute;inset:0;pointer-events:none;z-index:1;background-image:url(\"data:image/svg+xml,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100%\\' height=\\'100%\\'><filter id=\\'n\\'><feTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.9\\' numOctaves=\\'4\\' stitchTiles=\\'stitch\\'/></filter><rect width=\\'100%\\' height=\\'100%\\' filter=\\'url(#n)\\' opacity=\\'0.15\\'/></svg>\");background-size:cover;'; el.appendChild(noise); }",
    "showcaseRender": "function(el) { el.style.cssText = 'position:relative;display:flex;flex-wrap:wrap;gap:0;padding:0;'; var features = [ { title:'HALFTONE TRACKER', desc:'Monitor your release runs with grainy photocopy precision.' }, { title:'INK BLEED SCHEDULER', desc:'Schedule drops with deliberate misregistration.' }, { title:'GEOMETRIC ACCENT', desc:'Highlight key releases with a saturated red block.' }, { title:'STENCIL STAMP', desc:'Brand your catalog with a stenciled mark.' } ]; for (var i=0;i<features.length;i++) { var card = document.createElement('div'); card.style.cssText = 'flex:1 1 45%;min-width:200px;min-height:160px;padding:24px;border:2px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);position:relative;overflow:hidden;' + (i%2===0?'transform:rotate(1deg);':'transform:rotate(-2deg);') + (i===1?'margin-top:-8px;margin-left:-4px;':''); var titleEl = document.createElement('div'); titleEl.style.cssText = 'font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:var(--primary);margin-bottom:8px;'; titleEl.textContent = features[i].title; card.appendChild(titleEl); var descEl = document.createElement('div'); descEl.style.cssText = 'font-size:12px;line-height:1.55;color:var(--on-bg-muted);'; descEl.textContent = features[i].desc; card.appendChild(descEl); var accent = document.createElement('div'); accent.style.cssText = 'position:absolute;bottom:8px;right:8px;width:24px;height:24px;background:var(--error);'; card.appendChild(accent); el.appendChild(card); } }",
    "panelCRender": "function(el) { el.style.cssText = 'font-family:var(--font-body);background:var(--surface);border:2px solid var(--border);padding:16px;'; var header = document.createElement('div'); header.style.cssText = 'font-family:var(--font-display);font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:var(--primary);margin-bottom:12px;border-bottom:2px solid var(--border);padding-bottom:8px;'; header.textContent = 'CLIP BOARD // 8 STAMPS'; el.appendChild(header); var grid = document.createElement('div'); grid.style.cssText = 'display:grid;grid-template-columns:repeat(2,1fr);gap:4px;'; var stamps = ['CUT 01','OK: ok','CUT 02','OK: warn','CUT 03','BLEED: err','CUT 04','OK: ok','CUT 05','MISREG: warn','CUT 06','OK: err','CUT 07','OK: ok','CUT 08','STAMP: warn']; for (var i=0;i<stamps.length;i+=2) { var row = document.createElement('div'); row.style.cssText = 'display:contents;'; var label = document.createElement('div'); label.style.cssText = 'font-family:var(--font-display);font-size:12px;text-transform:uppercase;letter-spacing:0.05em;padding:4px 8px;border:1px solid var(--border);background:var(--bg);'; label.textContent = stamps[i]; row.appendChild(label); var val = document.createElement('div'); var state = stamps[i+1].split(': ')[1]; var color = state==='ok'?'var(--primary)':state==='warn'?'var(--error)':'var(--error)'; val.style.cssText = 'font-family:var(--font-display);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;padding:4px 8px;border:1px solid var(--border);background:' + color + ';color:var(--on-primary);'; val.textContent = stamps[i+1].split(': ')[0]; row.appendChild(val); el.appendChild(row); } el.appendChild(grid); }",
    "heroBackground": "function(el) { el.style.background = 'var(--bg)'; var noise = document.createElement('div'); noise.style.cssText = 'position:absolute;inset:0;pointer-events:none;background-image:url(\"data:image/svg+xml,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100%\\' height=\\'100%\\'><filter id=\\'n\\'><feTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.65\\' numOctaves=\\'3\\' stitchTiles=\\'stitch\\'/></filter><rect width=\\'100%\\' height=\\'100%\\' filter=\\'url(#n)\\' opacity=\\'0.12\\'/></svg>\");background-size:cover;'; el.appendChild(noise); var accent = document.createElement('div'); accent.style.cssText = 'position:absolute;top:0;right:0;width:80px;height:80px;background:var(--error);opacity:0.2;'; el.appendChild(accent); }",
    "ctaBackground": "function(el) { el.style.background = 'var(--bg)'; var stripe = document.createElement('div'); stripe.style.cssText = 'position:absolute;bottom:0;left:0;width:100%;height:8px;background:var(--error);'; el.appendChild(stripe); var noise = document.createElement('div'); noise.style.cssText = 'position:absolute;inset:0;pointer-events:none;background-image:url(\"data:image/svg+xml,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100%\\' height=\\'100%\\'><filter id=\\'n\\'><feTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.7\\' numOctaves=\\'3\\' stitchTiles=\\'stitch\\'/></filter><rect width=\\'100%\\' height=\\'100%\\' filter=\\'url(#n)\\' opacity=\\'0.15\\'/></svg>\");background-size:cover;'; el.appendChild(noise); }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'width:100%;height:12px;display:flex;border-top:2px solid var(--border);border-bottom:2px solid var(--border);margin:0;'; var b1 = document.createElement('div'); b1.style.cssText = 'flex:1;background:var(--primary);'; var r = document.createElement('div'); r.style.cssText = 'flex:2;background:var(--error);'; var b2 = document.createElement('div'); b2.style.cssText = 'flex:1;background:var(--primary);'; d.appendChild(b1); d.appendChild(r); d.appendChild(b2); return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = 'var(--bg)'; var noise = document.createElement('div'); noise.style.cssText = 'position:absolute;inset:0;pointer-events:none;background-image:url(\"data:image/svg+xml,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100%\\' height=\\'100%\\'><filter id=\\'n\\'><feTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.65\\' numOctaves=\\'4\\' stitchTiles=\\'stitch\\'/></filter><rect width=\\'100%\\' height=\\'100%\\' filter=\\'url(#n)\\' opacity=\\'0.12\\'/></svg>\");background-size:cover;'; el.appendChild(noise); var gridLines = document.createElement('div'); gridLines.style.cssText = 'position:absolute;inset:0;pointer-events:none;background-image:repeating-linear-gradient(0deg,transparent,transparent 50px,rgba(0,0,0,0.03) 50px,rgba(0,0,0,0.03) 51px),repeating-linear-gradient(90deg,transparent,transparent 50px,rgba(0,0,0,0.03) 50px,rgba(0,0,0,0.03) 51px);'; el.appendChild(gridLines); }",
    "surfaceOverlay": "function(el) { var misreg = document.createElement('div'); misreg.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;opacity:0.4;'; misreg.innerHTML = '<div style=\"position:absolute;top:0;left:2px;width:1px;height:100%;background:rgba(255,0,0,0.3);\"></div><div style=\"position:absolute;top:1px;left:0;width:100%;height:1px;background:rgba(0,0,0,0.2);\"></div>'; el.appendChild(misreg); var noise = document.createElement('div'); noise.style.cssText = 'position:absolute;inset:0;z-index:1;pointer-events:none;background-image:url(\"data:image/svg+xml,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100%\\' height=\\'100%\\'><filter id=\\'n\\'><feTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.8\\' numOctaves=\\'3\\' stitchTiles=\\'stitch\\'/></filter><rect width=\\'100%\\' height=\\'100%\\' filter=\\'url(#n)\\' opacity=\\'0.1\\'/></svg>\");background-size:cover;'; el.appendChild(noise); }"
  },
  "ambientCanvas": "function(el) { var c = document.createElement('canvas'); c.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;'; el.appendChild(c); var ctx = c.getContext('2d'); var w = c.width = c.clientWidth; var h = c.height = c.clientHeight; var primary = getComputedStyle(document.documentElement).getPropertyValue('--primary') || '#000000'; var tick = 0; function draw() { ctx.clearRect(0,0,w,h); ctx.fillStyle = primary; for (var i=0;i<40;i++) { var x = (Math.sin(tick*0.01+i*2.1)*0.5+0.5)*w; var y = (Math.cos(tick*0.015+i*1.7)*0.5+0.5)*h; ctx.globalAlpha = 0.08 + Math.random()*0.08; ctx.fillRect(x,y,2,2); } ctx.fillStyle = 'rgba(255,0,0,0.15)'; for (var j=0;j<15;j++) { var x = (Math.sin(tick*0.02+j*1.3)*0.5+0.5)*w; var y = (Math.cos(tick*0.03+j*2.5)*0.5+0.5)*h; ctx.fillRect(x-1,y-1,4,4); } tick++; requestAnimationFrame(draw); } draw(); }",
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
    "--color-secondary": "#FF0000",
    "--color-accent": "#FF0000",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
    "--color-border": "#000000",
    "--color-input": "#000000",
    "--color-destructive": "#FF0000"
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
    "--secondary": "#FF0000",
    "--accent": "#FF0000",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#FF0000"
  }
});
