registerSystem({
  "meta": {
    "name": "HyperCard Interface System (1987)",
    "tagline": "1-bit monochrome pixel-fidelity system from Apple's 1987 card-stack authoring environment",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap"
  },
  "yamlTokens": {
    "name": "HyperCard Interface System (1987)",
    "colors": {},
    "typography": {
      "display": {
        "fontFamily": "VT323",
        "fontSize": "20px",
        "fontWeight": 400,
        "lineHeight": 1.25,
        "letterSpacing": "0em",
        "textTransform": "normal-case"
      },
      "headline": {
        "fontFamily": "VT323",
        "fontSize": "16px",
        "fontWeight": 400,
        "lineHeight": 1.25,
        "letterSpacing": "0em",
        "textTransform": "normal-case"
      },
      "title": {
        "fontFamily": "VT323",
        "fontSize": "14px",
        "fontWeight": 400,
        "lineHeight": 1.25,
        "letterSpacing": "0em",
        "textTransform": "normal-case"
      },
      "body": {
        "fontFamily": "VT323",
        "fontSize": "12px",
        "fontWeight": 400,
        "lineHeight": 1.25,
        "letterSpacing": "0em",
        "textTransform": "normal-case"
      },
      "label": {
        "fontFamily": "Inter",
        "fontSize": "9px",
        "fontWeight": 400,
        "lineHeight": 1,
        "letterSpacing": "0em",
        "textTransform": "normal-case"
      }
    },
    "rounded": {
      "card": "0px",
      "button": "6px",
      "chip": "0px"
    },
    "spacing": {
      "component-internal": "4px",
      "section-internal": "16px",
      "gap-component": "8px",
      "gap-section": "16px",
      "icon": "16px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "#FFF",
        "textColor": "#000",
        "rounded": "{rounded.button}",
        "padding": "8px",
        "height": "32px"
      },
      "button-primary-hover": {
        "backgroundColor": "#FFF",
        "textColor": "#000",
        "rounded": "{rounded.button}",
        "padding": "8px",
        "height": "32px"
      },
      "card": {
        "backgroundColor": "#FFF",
        "rounded": "{rounded.card}",
        "padding": "8px"
      },
      "input": {
        "backgroundColor": "#FFF",
        "textColor": "#000",
        "rounded": "{rounded.card}",
        "padding": "4px",
        "height": "32px"
      },
      "input-focus": {
        "backgroundColor": "#FFF",
        "textColor": "#000",
        "rounded": "{rounded.card}",
        "padding": "4px",
        "height": "32px"
      },
      "checkbox": {
        "width": "10px",
        "height": "10px",
        "backgroundColor": "#FFF",
        "rounded": "{rounded.card}"
      }
    },
    "version": "alpha",
    "description": "A 1-bit monochrome pixel-fidelity system drawn from Apple's 1987 card-stack authoring environment, with orthographic geometry, bitmap typography, and hard 1-px offset shadows.",
    "provenance": {
      "coverage_status": "complete",
      "identity_description": "",
      "manual_enrichment_required": false,
      "imagery_count": 7,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": null,
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "en.wikipedia.org",
          "count": 3
        },
        {
          "host": "www.folklore.org",
          "count": 3
        },
        {
          "host": "www.computerhistory.org",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://en.wikipedia.org/wiki/HyperCard",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia / Wikimedia Commons",
          "confidence_original": "high"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Chicago_(typeface)",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia / Wikimedia Commons",
          "confidence_original": "high"
        },
        {
          "url": "https://www.folklore.org/ProjectView.py?project=HyperCard",
          "host": "www.folklore.org",
          "institution": "Folklore.org",
          "confidence_original": "medium"
        },
        {
          "url": "https://www.folklore.org/StoryView.py?story=HyperCard.txt",
          "host": "www.folklore.org",
          "institution": "Folklore.org",
          "confidence_original": "high"
        },
        {
          "url": "https://www.folklore.org/StoryView.py?story=HyperCard.txt",
          "host": "www.folklore.org",
          "institution": "Folklore.org",
          "confidence_original": "low"
        },
        {
          "url": "https://en.wikipedia.org/wiki/HyperCard",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia / Wikimedia Commons",
          "confidence_original": "medium"
        },
        {
          "url": "https://www.computerhistory.org/collections/catalog/102658804",
          "host": "www.computerhistory.org",
          "institution": "Computer History Museum",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": {},
      "flags": [
        "no_typography_extracted",
        "no_colour_extracted",
        "1_robots_disallowed_urls"
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
    "--secondary-col": "#FFFFFF",
    "--on-secondary": "#000000",
    "--surface": "#FFFFFF",
    "--on-bg-muted": "#1A1A1A",
    "--border": "#000000",
    "--error": "#000000",
    "--font-display": "Press Start 2P",
    "--font-body": "VT323",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "6px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "--success": "#000000",
    "--warning": "#000000",
    "--error": "#000000",
    "--info": "#000000",
    "warn": "#FF8C42",
    "ok": "#22C55E",
    "err": "#000000",
    "deltaUp": "#22C55E",
    "deltaDown": "#000000",
    "deltaFlat": "#1A1A1A",
    "live": "#000000",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#1A1A1A",
    "chartFont": "VT323"
  },
  "elevation": {
    "card": "1px 1px 0px 0px #000000",
    "modal": "1px 1px 0px 0px #000000",
    "floating": "1px 1px 0px 0px #000000",
    "buttonBevel": "no shadow — bevel only"
  },
  "surfaceModel": "flat",
  "materialSimulation": {
    "model": "none"
  },
  "globalFilter": null,
  "globalBodyCss": "background: var(--bg); color: var(--on-bg); font-family: var(--font-body), monospace; font-size: 12px; line-height: 1.25; margin: 0; padding: 0; image-rendering: pixelated; -webkit-font-smoothing: none; -moz-osx-font-smoothing: unset; text-rendering: optimizeSpeed;",
  "globalCss": ".ds-layout-frame {\n  box-sizing: border-box;\n  image-rendering: pixelated;\n}\n.ds-layout-frame img {\n  image-rendering: pixelated;\n}\n.ds-layout-frame button,\n.ds-layout-frame input,\n.ds-layout-frame select,\n.ds-layout-frame textarea {\n  font-family: inherit;\n}\n.ds-layout-frame button {\n  border: 1px solid var(--border);\n  border-top-color: #fff;\n  border-left-color: #fff;\n  border-bottom-color: #000;\n  border-right-color: #000;\n  border-radius: var(--radius-btn);\n  background: var(--surface);\n  color: var(--on-bg);\n  padding: 8px;\n  height: 32px;\n  cursor: pointer;\n  box-shadow: none;\n}\n.ds-layout-frame input {\n  border: 1px solid var(--border);\n  border-radius: var(--radius-card);\n  background: var(--surface);\n  color: var(--on-bg);\n  padding: 4px;\n  height: 32px;\n}",
  "interactionModel": {
    "hover": {
      "enabled": false,
      "description": "No hover state - HyperCard had no pointer tracking"
    },
    "focus": {
      "style": "1-px dotted var(--primary) outline",
      "offset": "-1px"
    },
    "active": {
      "style": "color and background inversion, bevel inversion (black top/left, white bottom/right)",
      "transition": "none"
    }
  },
  "interactionStyles": ".ds-layout-frame button:active {\n  background: var(--primary);\n  color: var(--on-primary);\n  border-top-color: #000;\n  border-left-color: #000;\n  border-bottom-color: #fff;\n  border-right-color: #fff;\n}\n.ds-layout-frame input:focus {\n  outline: 1px dotted var(--primary);\n  outline-offset: -1px;\n}\n.ds-layout-frame [disabled] {\n  opacity: 1;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAFklEQVQoU2NkYPj/n4EBBpA4iAEAAIANBQH/6P9eYAAAAABJRU5ErkJggg==\");\n  background-repeat: repeat;\n  pointer-events: none;\n  box-shadow: none;\n}",
  "chartStyle": {
    "barColor": "#000000",
    "backgroundColor": "#FFFFFF",
    "gridColor": "none",
    "axisColor": "#000000",
    "labelFontFamily": "VT323",
    "labelFontSize": "12px",
    "dataFontFamily": "VT323",
    "dataFontSize": "12px",
    "labelColor": "#1A1A1A",
    "fontFamily": "VT323"
  },
  "dashboardStyle": {
    "layout": "Card-stack metaphor with fixed 512×342 canvas, menu bar at top, main content area, message box at bottom. Navigation buttons left/right at bottom.",
    "density": "Sparse — 8-px grid gutters, generous white space around each control, max field width ~40 characters.",
    "panelTreatment": "Each panel is a card with 1-px black border and hard offset shadow. No overlapping windows, no stacking.",
    "dataVizStyle": "Monochrome bar charts using solid black fills, no grids. Progress bars: black stripe pattern on white background.",
    "signatureElement": "Hard 1-px offset shadow and inverse-video title bars."
  },
  "landingStyle": {
    "heroApproach": "Centered card at 512×342 px on white background, resembling a single HyperCard. Menu bar, title bar, body, and navigation row.",
    "scrollBehavior": "No scroll — content fits within the fixed canvas. Paging via left/right buttons (card navigation).",
    "ctaStyle": "Beveled primary button (white fill, black bevel) with press-state inversion. No hover.",
    "signatureMoment": "Inverse-video title bar animates (steps) on load — black bar with white text slides in from left."
  },
  "buttons": [
    {
      "name": "button-primary",
      "desc": "Primary action button with light bevel (white top/left, black bottom/right) and press-state inversion. Uses body font for legibility.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#FFF;color:#000;border:1px solid #000;border-radius:6px;padding:8px;height:32px;font-family:var(--font-body);font-size:12px;line-height:1.25;border-top:1px solid #FFF;border-left:1px solid #FFF;border-bottom:1px solid #000;border-right:1px solid #000;box-shadow:none;cursor:pointer;\">OK</button>",
      "label": "button-primary",
      "note": "Primary action button with light bevel (white top/left, black bottom/right) and press-state inversion. Uses body font for legibility."
    },
    {
      "name": "button-secondary",
      "desc": "Inverse primary button with black fill and white text; bevel and inversion follow same logic.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--primary); color: var(--on-primary); border: none; padding: 8px; height: 32px; font-family: var(--font-body); font-size: 12px; line-height: 1.25; border-radius: var(--radius-btn); border-top: 1px solid var(--bg); border-left: 1px solid var(--bg); border-bottom: 1px solid var(--border); border-right: 1px solid var(--border); box-shadow: none; cursor: pointer;\">Cancel</button>",
      "label": "button-secondary",
      "note": "Inverse primary button with black fill and white text; bevel and inversion follow same logic."
    },
    {
      "name": "button-disabled",
      "desc": "Disabled button with striped pattern overlay indicating inactivity. No hover or active interaction.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" disabled style=\"background: var(--bg); color: var(--on-bg-muted); border: none; padding: 8px; height: 32px; font-family: var(--font-body); font-size: 12px; line-height: 1.25; border-radius: var(--radius-btn); border: 1px solid var(--border); box-shadow: none; cursor: default; background-image: repeating-linear-gradient(45deg, var(--bg) 0px, var(--bg) 2px, var(--border) 2px, var(--border) 4px);\">Save</button>",
      "label": "button-disabled",
      "note": "Disabled button with striped pattern overlay indicating inactivity. No hover or active interaction."
    }
  ],
  "cards": [
    {
      "name": "card",
      "desc": "Standard card with 1-px black border, white fill, and hard 1-px offset drop shadow (bottom-right). No rounded corners. Sparse internal padding.",
      "html": "<div style=\"background: var(--bg); color: var(--on-bg); border: 1px solid var(--border); border-radius: var(--radius-card); padding: 8px; box-shadow: 1px 1px 0px 0px var(--border); font-family: var(--font-body); font-size: 12px; line-height: 1.25;\"><div style=\"padding: 4px 0;\">Card content area – 40 characters wide max</div></div>",
      "label": "card",
      "note": "Standard card with 1-px black border, white fill, and hard 1-px offset drop shadow (bottom-right). No rounded corners. Sparse internal padding."
    },
    {
      "name": "card-header",
      "desc": "Card with inverse-video title bar (black background, white text) and standard 1-px shadow. Beveled edge at top of title bar.",
      "html": "<div style=\"background: var(--bg); border: 1px solid var(--border); border-radius: var(--radius-card); box-shadow: 1px 1px 0px 0px var(--border); font-family: var(--font-body); font-size: 12px;\"><div style=\"background: var(--primary); color: var(--on-primary); padding: 4px 8px; border-bottom: 1px solid var(--border); font-family: var(--font-display); font-size: 14px; letter-spacing: 0.05em;\">Card Title</div><div style=\"padding: 8px; color: var(--on-bg);\">Body text with generous white space.</div></div>",
      "label": "card-header",
      "note": "Card with inverse-video title bar (black background, white text) and standard 1-px shadow. Beveled edge at top of title bar."
    }
  ],
  "forms": [
    {
      "name": "text-input",
      "desc": "Single-line text field with 1-px black border, white fill, no shadow. Placeholder text in body font. Focus style: 1-px dotted outline.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px; font-family: var(--font-body); font-size: 12px;\"><label style=\"font-family: var(--font-body); font-size: 9px; text-transform: uppercase; letter-spacing: 0.1em;\">Field Label</label><input type=\"text\" placeholder=\"Enter value\" style=\"background: var(--bg); color: var(--on-bg); border: 1px solid var(--border); border-radius: var(--radius-card); padding: 4px; height: 32px; font-family: var(--font-body); font-size: 12px; outline: none;\" onfocus=\"this.style.outline='1px dotted var(--border)'\" onblur=\"this.style.outline='none'\"/></div>",
      "label": "text-input",
      "stateLabel": "Single-line text field with 1-px black border, white fill, no shadow. Placeholder text in body font. Focus style: 1-px dotted outline."
    },
    {
      "name": "checkbox",
      "desc": "Small 10×10 square checkbox with 1-px black border. Unchecked: white fill, black border. Checked: filled black. Label to the right.",
      "html": "<label style=\"display: flex; align-items: center; gap: 4px; font-family: var(--font-body); font-size: 12px; cursor: pointer;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"width: 10px; height: 10px; margin: 0; border: 1px solid var(--border); background: var(--bg); appearance: none; -webkit-appearance: none;\" onclick=\"this.style.background=this.checked?\\x27var(--primary)\\x27:\\x27var(--bg)\\x27\"/>Option label</label>",
      "label": "checkbox",
      "stateLabel": "Small 10×10 square checkbox with 1-px black border. Unchecked: white fill, black border. Checked: filled black. Label to the right."
    },
    {
      "name": "radio-button",
      "desc": "Small circle radio button, 10px diameter, 1-px black border. Unchecked: white fill. Checked: solid black 3×3 dot at center.",
      "html": "<label style=\"display: flex; align-items: center; gap: 4px; font-family: var(--font-body); font-size: 12px; cursor: pointer;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"radio\" name=\"group\" style=\"width: 10px; height: 10px; margin: 0; border: 1px solid var(--border); border-radius: 50%; background: var(--bg); appearance: none; -webkit-appearance: none; display: inline-flex; align-items: center; justify-content: center;\" onclick=\"this.style.setProperty(\\x27--dot\\x27,\\x27var(--primary)\\x27);\" onchange=\"if(this.checked) this.style.background=\\x27radial-gradient(circle, var(--primary) 30%, var(--bg) 30%)\\x27; else this.style.background=\\x27var(--bg)\\x27\"/>Choice 1</label>",
      "label": "radio-button",
      "stateLabel": "Small circle radio button, 10px diameter, 1-px black border. Unchecked: white fill. Checked: solid black 3×3 dot at center."
    }
  ],
  "extraComponents": [
    {
      "name": "scroll-bar",
      "desc": "Vertical scroll bar with beveled track and thumb. Track has 1-px black border; thumb is 16px wide with light bevel. Uses 8-px grid.",
      "html": "<div style=\"width: 16px; height: 120px; background: var(--bg); border: 1px solid var(--border); border-radius: 0; display: flex; flex-direction: column; position: relative;\"><div style=\"height: 8px; background: var(--primary); border-bottom: 1px solid var(--border);\"></div><div style=\"flex: 1; position: relative;\"><div style=\"position: absolute; top: 24px; left: 0; right: 0; height: 32px; background: var(--bg); border: 1px solid var(--border); border-top: 1px solid var(--bg); border-left: 1px solid var(--bg); border-bottom: 1px solid var(--border); border-right: 1px solid var(--border);\"></div></div><div style=\"height: 8px; background: var(--primary); border-top: 1px solid var(--border);\"></div></div>"
    },
    {
      "name": "menu-bar",
      "desc": "Horizontal menu bar with items separated by vertical rules. Active item gets inverse-video background. Shadow on the bar.",
      "html": "<div style=\"display: flex; align-items: center; height: 24px; background: var(--bg); border: 1px solid var(--border); box-shadow: 1px 1px 0px 0px var(--border); padding: 0 4px; gap: 0; font-family: var(--font-body); font-size: 12px; cursor: default;\"><span style=\"padding: 0 8px;\">File</span><span style=\"padding: 0 8px; border-left: 1px solid var(--border);\">Edit</span><span style=\"padding: 0 8px; border-left: 1px solid var(--border);\">Go</span><span style=\"padding: 0 8px; border-left: 1px solid var(--border); background: var(--primary); color: var(--on-primary);\">Tools</span><span style=\"padding: 0 8px; border-left: 1px solid var(--border);\">Objects</span></div>"
    },
    {
      "name": "message-box",
      "desc": "Docked single-line input at bottom of card with » prompt. Used for HyperTalk commands.",
      "html": "<div style=\"display: flex; align-items: center; gap: 4px; background: var(--bg); border: 1px solid var(--border); padding: 2px 4px; height: 24px; font-family: var(--font-body); font-size: 12px;\"><span style=\"color: var(--on-bg);\">»</span><input type=\"text\" placeholder=\"Enter command\" style=\"flex: 1; background: transparent; color: var(--on-bg); border: none; outline: none; font-family: inherit; font-size: inherit;\"/></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — HyperCard Stack</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — Welcome to Your Card</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — Card Title Bar</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — This is the body text used for all content and field labels.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — 9pt label: field hints</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Gradients, anti-aliasing, and smooth curves break the 1-bit monochrome integrity. Avoid any fill that is not pure black or pure white.",
      "avoid": {
        "html": "<div style=\"background: linear-gradient(to right, #fff, #ccc); border: 1px solid #888; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.2); padding: 12px; font-family: 'Helvetica', sans-serif; color: #333;\">Smooth modern card</div>",
        "label": "Avoid"
      },
      "rule": "Gradients, anti-aliasing, and smooth curves break the 1-bit monochrome integrity. Avoid any fill that is not pure black or pure white.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:160px;height:100px;background:#fff;border:1px solid #000;box-shadow:1px 1px 0 0 #000;padding:8px;font-family:var(--font-body);font-size:12px;\">Card content with hard shadow</div>"
      }
    },
    {
      "desc": "Blurred drop shadows and opacity reduce pixel-sharpness. Use only hard 1-px offset shadows with no blur.",
      "avoid": {
        "html": "<div style=\"background: #fff; border: 1px solid #000; border-radius: 0; box-shadow: 0 4px 8px rgba(0,0,0,0.3); padding: 8px;\">Blurred shadow</div>",
        "label": "Avoid"
      },
      "rule": "Blurred drop shadows and opacity reduce pixel-sharpness. Use only hard 1-px offset shadows with no blur.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Hover-dependent states (underline, color change) are not part of HyperCard’s interaction model. Use only click/press inversion.",
      "avoid": {
        "html": "<button style=\"background: #fff; border: 1px solid #000; padding: 8px; cursor: pointer;\" onmouseover=\"this.style.background='#ddd'\">Hover button</button>",
        "label": "Avoid"
      },
      "rule": "Hover-dependent states (underline, color change) are not part of HyperCard’s interaction model. Use only click/press inversion.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Rounded corners beyond 6px (buttons only) and any curved card corners contradict the orthographic geometry. Cards must have 0px radius.",
      "avoid": {
        "html": "<div style=\"background: #fff; border: 1px solid #000; border-radius: 12px; padding: 8px;\">Card with rounded corners</div>",
        "label": "Avoid"
      },
      "rule": "Rounded corners beyond 6px (buttons only) and any curved card corners contradict the orthographic geometry. Cards must have 0px radius.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "doAvoidStyle": {
    "desc": "Do not use any color outside pure black (#000) or pure white (#FFF). No anti-aliasing, no smooth curves, no blur, no gradients, no hover effects, no rounded corners on cards, and no opacity.",
    "exemplar": "Every element must be a 1-bit pixel-aligned shape."
  },
  "effects": [],
  "motion": [],
  "colors": {
    "ink": "#000",
    "canvas": "#FFF",
    "accent": null,
    "semanticSuccess": "#000",
    "semanticWarning": "#000",
    "semanticError": "#000",
    "semanticInfo": "#000"
  },
  "typography": {
    "display": "Press Start 2P 20px",
    "headline": "Press Start 2P 16px",
    "title": "Press Start 2P 14px",
    "body": "VT323 12px",
    "label": "VT323 9px"
  },
  "radius": {
    "card": "0px",
    "button": "6px",
    "chip": "0px",
    "default": "0px"
  },
  "spacing": {
    "componentInternal": "4px",
    "sectionInternal": "16px",
    "gapComponent": "8px",
    "gapSection": "16px",
    "icon": "16px"
  },
  "layouts": {
    "copy": {
      "heroKicker": "HyperCard Interface System 1987",
      "heroHeadline": "Your Ideas, Stacked.",
      "heroSub": "Build card-based stacks with pixel-perfect 1-bit fidelity. No gradients. No anti-aliasing. Just pure black and white.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#FFF;color:#000;border:1px solid #000;border-radius:6px;padding:8px;font-family:\\x27VT323\\x27,monospace;font-size:14px;box-shadow:1px 1px 0 0 #000;border-top:1px solid #FFF;border-left:1px solid #FFF;border-bottom:1px solid #000;border-right:1px solid #000;\">New Stack</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#FFF;color:#000;border:1px solid #000;border-radius:6px;padding:8px;font-family:\\x27VT323\\x27,monospace;font-size:14px;border-top:1px solid #FFF;border-left:1px solid #FFF;border-bottom:1px solid #000;border-right:1px solid #000;\">Open Stack</button>",
      "navLinks": [
        "Home Card",
        "Backgrounds",
        "Scripts",
        "Find Card",
        "Recent Stacks"
      ],
      "features": [
        {
          "title": "Card Canvas",
          "desc": "Each card is a 512×342 pixel canvas. Drop fields, buttons, and art. Every element snaps to the 8-pixel grid.",
          "icon": "🃏",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🃏 Card Canvas</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Each card is a 512×342 pixel canvas. Drop fields, buttons, and art. Every element snaps to the 8-pixel grid.</div></div>"
        },
        {
          "title": "Scriptable Buttons",
          "desc": "Attach HyperTalk scripts to any button. Click to navigate, calculate, or animate with discrete steps.",
          "icon": "⚡",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⚡ Scriptable Buttons</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Attach HyperTalk scripts to any button. Click to navigate, calculate, or animate with discrete steps.</div></div>"
        },
        {
          "title": "Field Containers",
          "desc": "Text fields with fixed width (max 50 chars), hard borders, and inverse-video selection. No reflow.",
          "icon": "📄",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📄 Field Containers</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Text fields with fixed width (max 50 chars), hard borders, and inverse-video selection. No reflow.</div></div>"
        },
        {
          "title": "Stack Navigator",
          "desc": "Jump between cards using built-in navigation. Message box at bottom for fast search and Go To commands.",
          "icon": "🔍",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔍 Stack Navigator</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Jump between cards using built-in navigation. Message box at bottom for fast search and Go To commands.</div></div>"
        }
      ],
      "ctaStripHeadline": "Built for 1-bit workflows — no color, no noise, no distractions.",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#FFF;color:#000;border:1px solid #000;border-radius:6px;padding:8px;font-family:\\x27VT323\\x27,monospace;font-size:14px;border-top:1px solid #FFF;border-left:1px solid #FFF;border-bottom:1px solid #000;border-right:1px solid #000;\">Download Stack Template</button>",
      "sidebarBrand": "HyperNote Stack",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "All Cards",
          "active": true
        },
        {
          "icon": "◉",
          "label": "Recent",
          "active": false
        },
        {
          "icon": "◉",
          "label": "Scripts",
          "active": false
        }
      ],
      "dashboardTitle": "Stack Overview",
      "metrics": [
        {
          "label": "CARDS",
          "value": "47",
          "delta": "+3",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "BUTTONS",
          "value": "112",
          "delta": "+8",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "SCRIPTS",
          "value": "65",
          "delta": "+2",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "FIELDS",
          "value": "89",
          "delta": "+5",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "Cards Created per Week",
      "panelATitle": "Recent Cards",
      "panelARows": [
        {
          "label": "Meeting Notes",
          "value": "5 min ago",
          "pct": 5
        },
        {
          "label": "Project To-Do",
          "value": "12 min ago",
          "pct": 12
        },
        {
          "label": "Sprint Ideas",
          "value": "1 hour ago",
          "pct": 1
        },
        {
          "label": "Reference: API",
          "value": "2 hours ago",
          "pct": 2
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "Stack Info",
      "panelBCells": [
        {
          "label": "Stack Name",
          "value": "HyperNote",
          "state": "ok"
        },
        {
          "label": "Card Count",
          "value": "47",
          "state": "warn"
        },
        {
          "label": "Background Fields",
          "value": "2",
          "state": "err"
        },
        {
          "label": "Button Scripts",
          "value": "112",
          "state": "ok"
        },
        {
          "label": "Total Scripts",
          "value": "65",
          "state": "warn"
        },
        {
          "label": "Last Modified",
          "value": "2s ago",
          "state": "err"
        },
        {
          "label": "Lock Background",
          "value": "No",
          "state": "ok"
        },
        {
          "label": "Grid Size",
          "value": "8 px",
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
        "Sat",
        "Sun"
      ],
      "series": [
        {
          "data": [
            5,
            8,
            3,
            12,
            7,
            2,
            10,
            10,
            10,
            10,
            10,
            10
          ],
          "label": "Created",
          "axis": "left",
          "color": "#000000"
        },
        {
          "data": [
            3,
            6,
            4,
            9,
            5,
            1,
            8,
            8,
            8,
            8,
            8,
            8
          ],
          "label": "Edited",
          "axis": "right-1",
          "color": "#FFFFFF"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'background:#fff;display:flex;align-items:center;justify-content:center;min-height:342px;'; var card = document.createElement('div'); card.style.cssText = 'width:512px;max-width:100%;background:#fff;border:1px solid #000;box-shadow:1px 1px 0 0 #000;font-family:var(--font-body),monospace;font-size:12px;line-height:1.25;'; card.innerHTML = '<div style=\"display:flex;align-items:center;height:24px;background:#000;color:#fff;padding:0 8px;font-family:var(--font-display);font-size:12px;\"><span style=\"flex:1;\">HyperCard Stack</span><span>File Edit Go Tools</span></div><div style=\"padding:24px;text-align:center;\"><div style=\"font-family:var(--font-display);font-size:20px;margin-bottom:16px;\">Your Ideas, Stacked.</div><div style=\"margin-bottom:24px;max-width:320px;margin-left:auto;margin-right:auto;\">Build card-based stacks with pixel-perfect 1-bit fidelity. No gradients. No anti-aliasing.</div><div style=\"display:flex;gap:8px;justify-content:center;\"><button style=\"background:#fff;color:#000;border:1px solid #000;border-top:1px solid #fff;border-left:1px solid #fff;border-bottom:1px solid #000;border-right:1px solid #000;border-radius:6px;padding:8px;font-family:var(--font-body);font-size:12px;cursor:pointer;\">New Stack</button><button style=\"background:#fff;color:#000;border:1px solid #000;border-top:1px solid #fff;border-left:1px solid #fff;border-bottom:1px solid #000;border-right:1px solid #000;border-radius:6px;padding:8px;font-family:var(--font-body);font-size:12px;cursor:pointer;\">Open Stack</button></div></div><div style=\"display:flex;align-items:center;height:24px;border-top:1px solid #000;padding:0 8px;gap:16px;\"><span>◄</span><span>Home Card</span><span style=\"flex:1;\"></span><span>►</span></div>'; el.appendChild(card); }",
    "showcaseRender": "function(el) { el.style.cssText = 'display:grid;grid-template-columns:repeat(2,1fr);gap:16px;padding:16px;max-width:512px;margin:0 auto;'; var cards = ['🃏 Card Canvas','Each card is a 512×342 pixel canvas. Drop fields, buttons, and art. Every element snaps to the 8-pixel grid.','⚡ Scriptable Buttons','Attach HyperTalk scripts to any button. Click to navigate, calculate, or animate with discrete steps.','📄 Field Containers','Text fields with fixed width (max 50 chars), hard borders, and inverse-video selection. No reflow.','🔍 Stack Navigator','Jump between cards using built-in navigation. Message box at bottom for fast search and Go To commands.']; for(var i=0;i<cards.length;i+=2){ var card = document.createElement('div'); card.style.cssText = 'border:1px solid #000;box-shadow:1px 1px 0 0 #000;padding:16px;background:#fff;font-family:var(--font-body);font-size:12px;'; card.innerHTML = '<div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#000;margin-bottom:8px;\">'+cards[i]+'</div><div style=\"font-size:12px;line-height:1.55;\">'+cards[i+1]+'</div>'; el.appendChild(card); } }",
    "panelCRender": "function(el) { el.style.cssText = 'background:#fff;border:1px solid #000;box-shadow:1px 1px 0 0 #000;padding:16px;font-family:var(--font-body);font-size:12px;max-width:512px;margin:0 auto;'; el.innerHTML = '<div style=\"font-family:var(--font-display);font-size:14px;margin-bottom:12px;\">Stack Overview</div><div style=\"display:grid;grid-template-columns:repeat(2,1fr);gap:8px;\"><div><span style=\"font-size:9px;text-transform:uppercase;letter-spacing:.1em;\">CARDS</span><div style=\"font-size:20px;font-family:var(--font-display);\">47 <span style=\"font-size:12px;color:#000;\">+3</span></div></div><div><span style=\"font-size:9px;text-transform:uppercase;letter-spacing:.1em;\">BUTTONS</span><div style=\"font-size:20px;font-family:var(--font-display);\">112 <span style=\"font-size:12px;color:#000;\">+8</span></div></div><div><span style=\"font-size:9px;text-transform:uppercase;letter-spacing:.1em;\">SCRIPTS</span><div style=\"font-size:20px;font-family:var(--font-display);\">65 <span style=\"font-size:12px;color:#000;\">+2</span></div></div><div><span style=\"font-size:9px;text-transform:uppercase;letter-spacing:.1em;\">FIELDS</span><div style=\"font-size:20px;font-family:var(--font-display);\">89 <span style=\"font-size:12px;color:#000;\">+5</span></div></div></div>'; }",
    "heroBackground": "function(el) { el.style.background = '#FFF'; }",
    "ctaBackground": "function(el) { el.style.background = '#FFF'; }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'height:1px;background:#000;width:100%;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = '#FFF'; }",
    "surfaceOverlay": "function(el) { var ov = document.createElement('div'); ov.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(el,tick) { el.style.cssText = 'position:relative;overflow:hidden;'; var line = document.createElement('div'); line.style.cssText = 'position:absolute;left:0;width:100%;height:1px;background:#000;pointer-events:none;z-index:1;'; var top = (tick % 342); line.style.top = top + 'px'; el.appendChild(line); }",
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
    "--color-secondary": "#FFFFFF",
    "--color-accent": "#FFFFFF",
    "--color-secondary-foreground": "#000000",
    "--color-accent-foreground": "#000000",
    "--color-border": "#000000",
    "--color-input": "#000000",
    "--color-destructive": "#000000"
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
    "--secondary": "#FFFFFF",
    "--accent": "#FFFFFF",
    "--secondary-foreground": "#000000",
    "--accent-foreground": "#000000",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#000000"
  }
});
