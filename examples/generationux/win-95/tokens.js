registerSystem({
  "meta": {
    "name": "Win-95",
    "tagline": "Pixel-perfect nostalgia: beveled windows, hard shadows, and a web-safe palette.",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Arimo:wght@400;700&family=Courier+Prime:wght@400;700&display=swap"
  },
  "yamlTokens": {
    "name": "Win-95",
    "colors": {
      "primary": "#000080",
      "on-primary": "#FFFFFF",
      "primary-container": "#1084D0",
      "secondary": "#C0C0C0",
      "on-secondary": "#000000",
      "tertiary": "#008080",
      "on-tertiary": "#FFFFFF",
      "neutral": "#808080",
      "on-surface": "#000000",
      "on-surface-variant": "#404040",
      "surface-container": "#C0C0C0",
      "surface-container-high": "#FFFFFF",
      "surface-container-low": "#A0A0A0",
      "surface-container-highest": "#808080",
      "error": "#FF0000",
      "on-error": "#FFFFFF",
      "outline": "#808080",
      "inverse-surface": "#008080",
      "inverse-on-surface": "#FFFFFF",
      "start-button": "#00FF00",
      "magenta-mask": "#FF00FF",
      "accent-blue": "#0000AA",
      "accent-red": "#AA0000",
      "accent-yellow": "#AAAA00"
    },
    "typography": {
      "display": {
        "fontFamily": "Arimo",
        "fontSize": "11px",
        "fontWeight": 700,
        "lineHeight": 1,
        "letterSpacing": "0em",
        "textTransform": "none"
      },
      "headline": {
        "fontFamily": "Arimo",
        "fontSize": "11px",
        "fontWeight": 700,
        "lineHeight": 1,
        "letterSpacing": "0em",
        "textTransform": "none"
      },
      "title": {
        "fontFamily": "Arimo",
        "fontSize": "11px",
        "fontWeight": 700,
        "lineHeight": 1,
        "letterSpacing": "0em",
        "textTransform": "none"
      },
      "body": {
        "fontFamily": "Arimo",
        "fontSize": "11px",
        "fontWeight": 400,
        "lineHeight": 1,
        "letterSpacing": "0em"
      },
      "label": {
        "fontFamily": "Arimo",
        "fontSize": "11px",
        "fontWeight": 400,
        "lineHeight": 1,
        "letterSpacing": "0em"
      },
      "code": {
        "fontFamily": "Courier Prime",
        "fontSize": "11px",
        "fontWeight": 400,
        "lineHeight": 1,
        "letterSpacing": "0em"
      }
    },
    "rounded": {
      "default": "0px"
    },
    "spacing": {
      "component-internal": "8px",
      "section-internal": "12px",
      "page-edge": "16px",
      "gap-component": "8px",
      "gap-section": "12px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "{colors.secondary}",
        "textColor": "{colors.on-secondary}",
        "rounded": "{rounded.default}",
        "padding": "8px"
      },
      "button-primary-hover": {
        "backgroundColor": "{colors.secondary}",
        "textColor": "{colors.on-secondary}",
        "rounded": "{rounded.default}",
        "padding": "8px"
      },
      "input": {
        "backgroundColor": "{colors.surface-container-high}",
        "textColor": "{colors.on-surface}",
        "rounded": "{rounded.default}",
        "padding": "8px"
      },
      "input-focus": {
        "backgroundColor": "{colors.surface-container-high}",
        "textColor": "{colors.on-surface}",
        "rounded": "{rounded.default}",
        "padding": "8px"
      },
      "window": {
        "backgroundColor": "{colors.surface-container}",
        "textColor": "{colors.on-surface}",
        "rounded": "{rounded.default}",
        "padding": "12px"
      },
      "taskbar": {
        "backgroundColor": "{colors.secondary}",
        "textColor": "{colors.on-secondary}",
        "rounded": "{rounded.default}",
        "padding": "4px"
      },
      "start-button": {
        "backgroundColor": "{colors.start-button}",
        "textColor": "{colors.on-primary}",
        "rounded": "{rounded.default}",
        "padding": "4px"
      }
    },
    "version": "alpha",
    "description": "A pixel‑perfect, nostalgic recreation of the Windows 95 interface with a 256‑color web‑safe palette, beveled windows, hard drop shadows, and no anti‑aliasing.",
    "provenance": {
      "coverage_status": "sparse",
      "identity_description": "",
      "manual_enrichment_required": false,
      "imagery_count": 4,
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
          "host": "computerhistory.org",
          "count": 1
        },
        {
          "host": "www.adsoftheworld.com",
          "count": 1
        },
        {
          "host": "learn.microsoft.com",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://commons.wikimedia.org/wiki/Category:Windows_95_icons",
          "host": "commons.wikimedia.org",
          "institution": "Wikimedia Commons",
          "confidence_original": "medium"
        },
        {
          "url": "https://computerhistory.org/",
          "host": "computerhistory.org",
          "institution": "Computer History Museum, Mountain View",
          "confidence_original": "low"
        },
        {
          "url": "https://www.adsoftheworld.com/",
          "host": "www.adsoftheworld.com",
          "institution": "Ads of the World",
          "confidence_original": "low"
        },
        {
          "url": "https://learn.microsoft.com/en-us/typography/font-list/microsoft-sans-serif",
          "host": "learn.microsoft.com",
          "institution": "Microsoft",
          "confidence_original": "medium"
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
    "--bg": "#008080",
    "--on-bg": "#FFFFFF",
    "--primary": "#000080",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#C0C0C0",
    "--on-secondary": "#000000",
    "--surface": "#C0C0C0",
    "--on-bg-muted": "#cfcfcf",
    "--border": "#808080",
    "--error": "#FF0000",
    "--font-display": "Arimo",
    "--font-body": "Arimo",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "bg": "#008080",
    "on-bg": "#FFFFFF",
    "on-bg-muted": "#CCCCCC",
    "primary": "#000080",
    "on-primary": "#FFFFFF",
    "secondary": "#C0C0C0",
    "on-secondary": "#000000",
    "surface": "#C0C0C0",
    "surface-high": "#FFFFFF",
    "surface-low": "#A0A0A0",
    "surface-highest": "#808080",
    "border": "#808080",
    "error": "#FF0000",
    "success": "#00FF00",
    "warning": "#AAAA00",
    "err": "#FF0000",
    "ok": "#00FF00",
    "warn": "#AAAA00",
    "deltaUp": "#00FF00",
    "deltaDown": "#FF0000",
    "deltaFlat": "#cfcfcf",
    "live": "#000080",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#cfcfcf",
    "chartFont": "Arimo"
  },
  "chartStyle": {
    "background": "#FFFFFF",
    "axisColor": "#000000",
    "lineColor": "#000080",
    "gridColor": "#C0C0C0",
    "fontFamily": "Arimo",
    "fontSize": "11px",
    "antialias": false,
    "labelColor": "#cfcfcf"
  },
  "surfaceModel": "bevel",
  "materialSimulation": {
    "model": "crt-screen",
    "params": {
      "scanlines": true,
      "scanlinesOpacity": 0.15,
      "dither": false
    }
  },
  "interactionModel": {
    "hover": {
      "effect": "none",
      "duration": "0ms"
    },
    "focus": {
      "effect": "dotted-outline",
      "color": "#000000",
      "offset": "3px",
      "duration": "0ms"
    },
    "active": {
      "effect": "bevel-depress",
      "translateX": "1px",
      "translateY": "1px",
      "borderStyle": "inset",
      "duration": "0ms"
    }
  },
  "spacing": {
    "component-internal": "8px",
    "section-internal": "12px",
    "page-edge": "16px",
    "gap-component": "8px",
    "gap-section": "12px",
    "grid": 8
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "0px"
  },
  "elevation": {
    "none": "box-shadow: none;",
    "raised": "box-shadow: 2px 2px 0 #404040;",
    "sunken": "box-shadow: inset 1px 1px 0 #808080, inset -1px -1px 0 #FFFFFF;",
    "dialog": "box-shadow: 4px 4px 0 #404040;"
  },
  "dashboardStyle": {
    "layout": "Fixed 640x480 base, windows stack with z-index, taskbar pinned at bottom. No responsive breakpoints.",
    "density": "High. Minimal whitespace; controls and windows pack tightly to 8px grid.",
    "panelTreatment": "Raised bevel border with hard drop shadow. Title bar navy-to-light-blue gradient. Content area white or gray.",
    "dataVizStyle": "Flat bitmap charts with no anti-aliasing. Axis lines in black, grid in #C0C0C0, data series in primary colors.",
    "signatureElement": "Taskbar with Start button (green), window buttons, and clock (right-aligned)."
  },
  "landingStyle": {
    "heroApproach": "Teal desktop background with centered modal window containing branding and action buttons.",
    "scrollBehavior": "No smooth scrolling. Click arrows or page keys only.",
    "ctaStyle": "Raised bevel button, gray with black text, hard shadow. No hover state.",
    "signatureMoment": "Start menu slides up instantly with a green Start button and cascading program list."
  },
  "globalFilter": null,
  "globalBodyCss": "font-family: var(--font-body); background: var(--bg); color: var(--on-bg); margin: 0; padding: 0;",
  "globalCss": ".ds-layout-frame::after { content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; background: repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.15) 1px, rgba(0,0,0,0.15) 2px); z-index: 9999; } .ds-layout-frame * { -webkit-font-smoothing: none; font-smoothing: none; } .ds-layout-frame img { image-rendering: pixelated; } .ds-layout-frame text { text-rendering: optimizeSpeed; }",
  "interactionStyles": ".ds-layout-frame button:active { border-style: inset; transform: translate(1px, 1px); } .ds-layout-frame button:focus { outline: 1px dotted #000000; outline-offset: -3px; } .ds-layout-frame button:disabled { background-color: #A0A0A0; color: #808080; border: none; } .ds-layout-frame input:focus { caret-color: #000000; } .ds-layout-frame .progress { animation: progress-scroll 500ms linear infinite; background-repeat: repeat; } @keyframes progress-scroll { 0% { background-position: 0 0; } 100% { background-position: -16px 0; } } .ds-layout-frame .taskbar-flash { animation: flash 500ms step-end infinite; } @keyframes flash { 0% { background-color: #FF6600; } 50% { background-color: #FF6600; } 51% { background-color: #C0C0C0; } 100% { background-color: #C0C0C0; } } .ds-layout-frame .scrollbar { width: 16px; } .ds-layout-frame .scrollbar-track { background: #C0C0C0; } .ds-layout-frame .scrollbar-thumb { background: #C0C0C0; border: 1px solid #FFFFFF #808080 #808080 #FFFFFF; } .ds-layout-frame .scrollbar-button { background: #C0C0C0; border: 1px solid #FFFFFF #808080 #808080 #FFFFFF; width: 16px; height: 16px; }",
  "buttons": [
    {
      "name": "default",
      "desc": "Standard raised bevel button with hard drop shadow. No hover state.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:var(--secondary-col);color:var(--on-secondary);border:2px solid;border-color:var(--surface-high) var(--outline) var(--outline) var(--surface-high);box-shadow:2px 2px 0 var(--on-surface-variant);font-family:var(--font-display);font-size:11px;font-weight:400;line-height:1;padding:4px 16px;cursor:default;outline:none;\">OK</button>",
      "label": "default",
      "note": "Standard raised bevel button with hard drop shadow. No hover state."
    },
    {
      "name": "close",
      "desc": "Red close button with white X. Raised bevel.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:var(--error);color:var(--on-error);border:2px solid;border-color:var(--surface-high) var(--outline) var(--outline) var(--surface-high);box-shadow:2px 2px 0 var(--on-surface-variant);font-family:var(--font-display);font-size:11px;font-weight:700;line-height:1;padding:4px 8px;cursor:default;outline:none;\">✕</button>",
      "label": "close",
      "note": "Red close button with white X. Raised bevel."
    },
    {
      "name": "start",
      "desc": "Start button with green background and white bold text. Raised bevel.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:var(--success);color:var(--on-primary);border:2px solid;border-color:var(--surface-high) var(--outline) var(--outline) var(--surface-high);box-shadow:2px 2px 0 var(--on-surface-variant);font-family:var(--font-display);font-size:11px;font-weight:700;line-height:1;padding:4px 12px;cursor:default;outline:none;\">Start</button>",
      "label": "start",
      "note": "Start button with green background and white bold text. Raised bevel."
    },
    {
      "name": "disabled",
      "desc": "Disabled button with muted gray background and gray text. No bevel effect.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" disabled style=\"background:var(--surface-low);color:var(--outline);border:2px solid var(--surface-low);font-family:var(--font-display);font-size:11px;font-weight:400;line-height:1;padding:4px 16px;cursor:default;outline:none;\">Cancel</button>",
      "label": "disabled",
      "note": "Disabled button with muted gray background and gray text. No bevel effect."
    }
  ],
  "cards": [
    {
      "name": "Dialog window",
      "desc": "A standard window card with navy-to-light-blue title bar gradient, white content area, and hard drop shadow.",
      "html": "<div style=\"background:var(--secondary-col);border:2px solid;border-color:var(--surface-high) var(--outline) var(--outline) var(--surface-high);box-shadow:2px 2px 0 var(--on-surface-variant);font-family:var(--font-display);font-size:11px;\"><div style=\"background:linear-gradient(180deg,var(--primary),var(--primary-container));color:var(--on-primary);font-weight:700;line-height:1;padding:2px 4px;height:18px;\">Window Title</div><div style=\"background:var(--surface-high);color:var(--on-surface);padding:8px;\">Content area with beveled inset details.</div></div>",
      "label": "Dialog window",
      "note": "A standard window card with navy-to-light-blue title bar gradient, white content area, and hard drop shadow."
    },
    {
      "name": "Group box",
      "desc": "A sunken-framed card with a raised title label, common in property dialogs.",
      "html": "<div style=\"border:2px groove;border-color:var(--outline) var(--surface-high) var(--surface-high) var(--outline);background:var(--secondary-col);padding:12px 8px 8px 8px;position:relative;margin-top:8px;font-family:var(--font-display);font-size:11px;\"><span style=\"position:absolute;top:-8px;left:8px;background:var(--secondary-col);padding:0 4px;font-weight:700;color:var(--on-surface);\">Options</span><p style=\"color:var(--on-surface);margin:0;\">Radio buttons or checkboxes go here.</p></div>",
      "label": "Group box",
      "note": "A sunken-framed card with a raised title label, common in property dialogs."
    }
  ],
  "forms": [
    {
      "name": "Text input",
      "desc": "Sunken white input field with black text. Focus style via dotted outline.",
      "html": "<div style=\"display:inline-block;font-family:var(--font-body);font-size:11px;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" value=\"Sample\" style=\"background:var(--surface-high);color:var(--on-surface);border:2px inset;border-color:var(--outline) var(--surface-high) var(--surface-high) var(--outline);padding:2px 4px;font-family:var(--font-body);font-size:11px;outline:1px dotted transparent;\" /></div>",
      "label": "Text input",
      "stateLabel": "Sunken white input field with black text. Focus style via dotted outline."
    },
    {
      "name": "Dropdown / combobox",
      "desc": "A text field with a dropdown button on the right, raised bevel.",
      "html": "<div style=\"display:inline-flex;font-family:var(--font-body);font-size:11px;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" value=\"Item 1\" style=\"background:var(--surface-high);color:var(--on-surface);border:2px inset;border-color:var(--outline) var(--surface-high) var(--surface-high) var(--outline);padding:2px 4px;width:120px;font-family:var(--font-body);font-size:11px;outline:1px dotted transparent;\" /><button style=\"background:var(--secondary-col);color:var(--on-secondary);border:2px solid;border-color:var(--surface-high) var(--outline) var(--outline) var(--surface-high);padding:2px 6px;cursor:default;font-family:var(--font-body);font-size:11px;line-height:1;\">▼</button></div>",
      "label": "Dropdown / combobox",
      "stateLabel": "A text field with a dropdown button on the right, raised bevel."
    },
    {
      "name": "Checkbox",
      "desc": "Standard square checkbox with checkmark, sunken border and raised text.",
      "html": "<label style=\"display:inline-flex;align-items:center;font-family:var(--font-body);font-size:11px;color:var(--on-surface);cursor:default;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" checked style=\"appearance:none;width:13px;height:13px;background:var(--surface-high);border:2px inset;border-color:var(--outline) var(--surface-high) var(--surface-high) var(--outline);margin:0 4px 0 0;outline:1px dotted transparent;\" /><span style=\"font-weight:400;\">Enable option</span></label>",
      "label": "Checkbox",
      "stateLabel": "Standard square checkbox with checkmark, sunken border and raised text."
    }
  ],
  "extraComponents": [
    {
      "name": "Vertical scrollbar",
      "desc": "Standard 16px-wide scrollbar with raised arrow buttons and a sunken track.",
      "html": "<div style=\"display:inline-flex;flex-direction:column;width:16px;background:var(--secondary-col);border:2px solid;border-color:var(--surface-high) var(--outline) var(--outline) var(--surface-high);\"><button style=\"height:16px;background:var(--secondary-col);border:1px solid;border-color:var(--surface-high) var(--outline) var(--outline) var(--surface-high);padding:0;font-size:8px;line-height:1;color:var(--on-surface);cursor:default;font-family:var(--font-display);\">▲</button><div style=\"flex:1;background:var(--secondary-col);border:1px inset;border-color:var(--outline) var(--surface-high) var(--surface-high) var(--outline);margin:0 1px;\"><div style=\"height:32px;background:var(--secondary-col);border:1px solid;border-color:var(--surface-high) var(--outline) var(--outline) var(--surface-high);margin:2px;\"></div></div><button style=\"height:16px;background:var(--secondary-col);border:1px solid;border-color:var(--surface-high) var(--outline) var(--outline) var(--surface-high);padding:0;font-size:8px;line-height:1;color:var(--on-surface);cursor:default;font-family:var(--font-display);\">▼</button></div>"
    },
    {
      "name": "Progress bar",
      "desc": "Sunken track with animated block pattern. Use for determinate progress.",
      "html": "<div style=\"width:200px;height:16px;background:var(--surface-high);border:2px inset;border-color:var(--outline) var(--surface-high) var(--surface-high) var(--outline);overflow:hidden;\"><div style=\"height:100%;width:60%;background:var(--primary);background-image:repeating-linear-gradient(45deg,transparent,transparent 4px,var(--primary-container) 4px,var(--primary-container) 8px);\"></div></div>"
    },
    {
      "name": "Taskbar button",
      "desc": "Representation of a window button on the taskbar. Raised, truncated text, fixed height.",
      "html": "<div style=\"display:inline-block;height:22px;background:var(--secondary-col);border:2px solid;border-color:var(--surface-high) var(--outline) var(--outline) var(--surface-high);padding:0 8px;line-height:18px;font-family:var(--font-display);font-size:11px;color:var(--on-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:160px;\">Untitled - Notepad</div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — Display — sample</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — Headline — sample</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — Title — sample</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — Body — sample</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — Label — sample</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Do not use rounded corners. All UI primitives must have sharp 0px radius.",
      "avoid": {
        "html": "<button style=\"border-radius:8px;background:#C0C0C0;\">Bad Button</button>",
        "label": "Avoid"
      },
      "rule": "Do not use rounded corners. All UI primitives must have sharp 0px radius.",
      "do": {
        "label": "Do",
        "html": "<button style=\"background:#C0C0C0;border:2px solid;border-color:#fff #808080 #808080 #fff;box-shadow:2px 2px 0 #404040;font:11px Arimo;padding:4px 16px;\">OK</button>"
      }
    },
    {
      "desc": "Do not apply blur or soft shadows. Only hard drop shadows are allowed.",
      "avoid": {
        "html": "<div style=\"box-shadow:0 4px 6px rgba(0,0,0,0.3);background:#C0C0C0;\">Blurry Window</div>",
        "label": "Avoid"
      },
      "rule": "Do not apply blur or soft shadows. Only hard drop shadows are allowed.",
      "do": {
        "label": "Do",
        "html": "<div style=\"background:#C0C0C0;border:2px solid;border-color:#fff #808080 #808080 #fff;box-shadow:2px 2px 0 #404040;padding:8px;\">Window</div>"
      }
    },
    {
      "desc": "Do not use gradients outside the title bar. Keep surfaces flat.",
      "avoid": {
        "html": "<div style=\"background:linear-gradient(180deg,#000080,#FFFFFF);\">Gradient surface</div>",
        "label": "Avoid"
      },
      "rule": "Do not use gradients outside the title bar. Keep surfaces flat.",
      "do": {
        "label": "Do",
        "html": "<div style=\"background:#C0C0C0;border:2px solid;border-color:#fff #808080 #808080 #fff;padding:8px;\">Surface</div>"
      }
    },
    {
      "desc": "Do not add hover or transition effects. State changes are instant.",
      "avoid": {
        "html": "<button style=\"transition:background 0.3s;\" onmouseover=\"this.style.background='#FF0000'\">Hover button</button>",
        "label": "Avoid"
      },
      "rule": "Do not add hover or transition effects. State changes are instant.",
      "do": {
        "label": "Do",
        "html": "<button style=\"background:#C0C0C0;border:2px solid;border-color:#fff #808080 #808080 #fff;padding:4px 16px;\">Click</button>"
      }
    }
  ],
  "doAvoidStyle": {
    "html": "<style>\n/* Incorrect: rounded corners, blur, gradients, transitions */\n.avoid { border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.3); background: linear-gradient(180deg, #000080, #FFFFFF); transition: all 0.3s; }\n</style>"
  },
  "effects": [],
  "motion": [],
  "colors": {
    "--bg": "#008080",
    "--on-bg": "#FFFFFF",
    "--primary": "#000080",
    "--on-primary": "#FFFFFF",
    "--primary-container": "#1084D0",
    "--secondary-col": "#C0C0C0",
    "--on-secondary": "#000000",
    "--tertiary": "#008080",
    "--on-tertiary": "#FFFFFF",
    "--surface": "#C0C0C0",
    "--surface-high": "#FFFFFF",
    "--surface-low": "#A0A0A0",
    "--surface-highest": "#808080",
    "--outline": "#808080",
    "--on-surface": "#000000",
    "--on-surface-variant": "#404040",
    "--error": "#FF0000",
    "--on-error": "#FFFFFF",
    "--success": "#00FF00",
    "--warning": "#AAAA00",
    "--start-button": "#00FF00"
  },
  "typography": {
    "display": {
      "fontFamily": "Arimo",
      "fontSize": "11px",
      "fontWeight": 700,
      "lineHeight": 1,
      "letterSpacing": "0em",
      "textTransform": "none"
    },
    "headline": {
      "fontFamily": "Arimo",
      "fontSize": "11px",
      "fontWeight": 700,
      "lineHeight": 1,
      "letterSpacing": "0em",
      "textTransform": "none"
    },
    "title": {
      "fontFamily": "Arimo",
      "fontSize": "11px",
      "fontWeight": 700,
      "lineHeight": 1,
      "letterSpacing": "0em",
      "textTransform": "none"
    },
    "body": {
      "fontFamily": "Arimo",
      "fontSize": "11px",
      "fontWeight": 400,
      "lineHeight": 1,
      "letterSpacing": "0em"
    },
    "label": {
      "fontFamily": "Arimo",
      "fontSize": "11px",
      "fontWeight": 400,
      "lineHeight": 1,
      "letterSpacing": "0em"
    },
    "code": {
      "fontFamily": "Courier Prime",
      "fontSize": "11px",
      "fontWeight": 400,
      "lineHeight": 1,
      "letterSpacing": "0em"
    }
  },
  "layouts": {
    "copy": {
      "heroKicker": "PIXEL-PERFECT NOSTALGIA",
      "heroHeadline": "WELCOME TO WIN‑95 SYSTEM PANEL",
      "heroSub": "Monitor your machine like it's 1995. Beveled windows, hard drop shadows, 256‑color web‑safe palette. No anti‑aliasing, no easing, no regrets.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"width:96px;height:24px;background:#C0C0C0;color:#000;font-family:Arimo;font-size:11px;font-weight:700;padding:4px 8px;border:2px solid;border-color:#fff #808080 #808080 #fff;box-shadow:1px 1px 0 #404040;transform:translate(-1px,-1px);\">LAUNCH</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"width:96px;height:24px;background:#C0C0C0;color:#000;font-family:Arimo;font-size:11px;font-weight:400;padding:4px 8px;border:2px solid;border-color:#fff #808080 #808080 #fff;box-shadow:1px 1px 0 #404040;\">HELP</button>",
      "navLinks": [
        "DRIVES",
        "PROCESSES",
        "PERFORMANCE",
        "NETWORK",
        "TOOLS"
      ],
      "features": [
        {
          "title": "DRIVE SCANNER",
          "desc": "Inspect FAT32 volumes with pixel‑precise sector maps. No hidden sectors, no anti‑aliasing.",
          "icon": "💾",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">💾 DRIVE SCANNER</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Inspect FAT32 volumes with pixel‑precise sector maps. No hidden sectors, no anti‑aliasing.</div></div>"
        },
        {
          "title": "PROCESS TABLE",
          "desc": "List all 16‑bit and 32‑bit tasks. Solid gray rows, no hover effects, instant terminate.",
          "icon": "🖥️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🖥️ PROCESS TABLE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">List all 16‑bit and 32‑bit tasks. Solid gray rows, no hover effects, instant terminate.</div></div>"
        },
        {
          "title": "MEMORY VIEW",
          "desc": "Sunken input fields show raw addresses. Every byte counts in 256‑color fidelity.",
          "icon": "📟",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📟 MEMORY VIEW</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Sunken input fields show raw addresses. Every byte counts in 256‑color fidelity.</div></div>"
        },
        {
          "title": "CRT CALIBRATOR",
          "desc": "Adjust scanlines and dithering. Droplist with instant state changes – no transitions.",
          "icon": "🔧",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔧 CRT CALIBRATOR</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Adjust scanlines and dithering. Droplist with instant state changes – no transitions.</div></div>"
        }
      ],
      "ctaStripHeadline": "READY TO RETURN TO 1995?",
      "ctaStripHtml": "<div style=\"text-align:center;padding:8px;\"><button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#C0C0C0;color:#000;font-family:Arimo;font-size:11px;font-weight:700;padding:4px 8px;border:2px solid;border-color:#fff #808080 #808080 #fff;box-shadow:2px 2px 0 #404040;\">DOWNLOAD WIN‑95 SYSTEM PANEL</button></div>",
      "sidebarBrand": "WIN‑95",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "CONTROL",
          "active": true
        },
        {
          "icon": "◉",
          "label": "HELP",
          "active": false
        }
      ],
      "dashboardTitle": "SYSTEM PROPERTIES",
      "metrics": [
        {
          "label": "PROCESSOR",
          "value": "23%",
          "delta": "-5%",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "PHYSICAL MEM",
          "value": "64MB / 128MB",
          "delta": "+12%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "DISK C:",
          "value": "1.2GB / 2GB",
          "delta": "+3%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "UPTIME",
          "value": "2h15m",
          "delta": "+15m",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "PAGING FILE",
          "value": "32MB",
          "delta": "-",
          "dir": "neutral",
          "direction": "neutral"
        }
      ],
      "chartTitle": "CPU & MEMORY USAGE (LAST 30 MIN)",
      "panelATitle": "SYSTEM INFO",
      "panelARows": [
        {
          "label": "OPERATING SYSTEM",
          "value": "Windows 95 [4.00.950]",
          "pct": 95
        },
        {
          "label": "PROCESSOR",
          "value": "Intel Pentium 133MHz",
          "pct": 100
        },
        {
          "label": "VERSION",
          "value": "OEM Service Release 2.5",
          "pct": 2.5
        },
        {
          "label": "AVAILABLE MEMORY",
          "value": "64,512 KB",
          "pct": 64
        },
        {
          "label": "FREE DISK SPACE",
          "value": "876 MB",
          "pct": 100
        }
      ],
      "panelBTitle": "RUNNING PROCESSES",
      "panelBCells": [
        {
          "label": "EXPLORER.EXE",
          "value": "5,324K",
          "state": "ok"
        },
        {
          "label": "KERNEL32.DLL",
          "value": "2,048K",
          "state": "warn"
        },
        {
          "label": "TASKMAN.EXE",
          "value": "256K",
          "state": "err"
        },
        {
          "label": "SYSTRAY.EXE",
          "value": "512K",
          "state": "ok"
        },
        {
          "label": "MSGSRV32.EXE",
          "value": "768K",
          "state": "warn"
        },
        {
          "label": "SPOOL32.EXE",
          "value": "1,024K",
          "state": "err"
        },
        {
          "label": "MPREXE.EXE",
          "value": "640K",
          "state": "ok"
        },
        {
          "label": "INTERNAT.EXE",
          "value": "384K",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "9:00",
        "9:05",
        "9:10",
        "9:15",
        "9:20",
        "9:25",
        "9:30"
      ],
      "series": [
        {
          "data": [
            22,
            25,
            18,
            30,
            27,
            21,
            23,
            23,
            23,
            23,
            23,
            23
          ],
          "label": "CPU %",
          "axis": "left",
          "color": "#000080"
        },
        {
          "data": [
            48,
            50,
            52,
            55,
            58,
            60,
            64,
            64,
            64,
            64,
            64,
            64
          ],
          "label": "MEMORY MB",
          "axis": "right-1",
          "color": "#C0C0C0"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'min-height:240px;background:var(--bg);display:flex;align-items:center;justify-content:center;'; el.innerHTML = '<div style=\"background:var(--surface);border:2px solid;border-color:var(--surface-high) var(--outline) var(--outline) var(--surface-high);box-shadow:2px 2px 0 var(--on-surface-variant);font-family:var(--font-display);font-size:11px;width:400px;\"><div style=\"background:linear-gradient(180deg,var(--primary),var(--primary-container));color:var(--on-primary);font-weight:700;line-height:1;padding:2px 4px;height:18px;text-transform:none;\">SYSTEM PROPERTIES</div><div style=\"background:var(--surface-high);color:var(--on-surface);padding:12px;font-family:var(--font-body);font-size:11px;line-height:1;\"><div style=\"margin-bottom:8px;font-weight:700;font-family:var(--font-display);\">WELCOME TO WINDOWS 95</div><div style=\"margin-bottom:12px;\">Select a tool from the menu below.</div><div style=\"display:flex;gap:8px;\"><button style=\"background:var(--secondary-col);color:var(--on-secondary);border:2px solid;border-color:var(--surface-high) var(--outline) var(--outline) var(--surface-high);box-shadow:2px 2px 0 var(--on-surface-variant);font-family:var(--font-display);font-size:11px;font-weight:400;line-height:1;padding:4px 16px;cursor:default;\">START</button><button style=\"background:var(--secondary-col);color:var(--on-secondary);border:2px solid;border-color:var(--surface-high) var(--outline) var(--outline) var(--surface-high);box-shadow:2px 2px 0 var(--on-surface-variant);font-family:var(--font-display);font-size:11px;font-weight:400;line-height:1;padding:4px 16px;cursor:default;\">HELP</button></div></div></div>'; }",
    "showcaseRender": "function(el) { el.style.cssText = 'min-height:200px;background:var(--bg);padding:12px;font-family:var(--font-body);font-size:11px;'; el.innerHTML = '<div style=\"background:var(--surface);border:2px solid;border-color:var(--surface-high) var(--outline) var(--outline) var(--surface-high);box-shadow:2px 2px 0 var(--on-surface-variant);\"><div style=\"background:linear-gradient(180deg,var(--primary),var(--primary-container));color:var(--on-primary);font-weight:700;line-height:1;padding:2px 4px;height:18px;\">FEATURES</div><div style=\"padding:8px;display:flex;flex-wrap:wrap;gap:8px;background:var(--surface-high);\"><div style=\"background:var(--surface);border:1px solid;border-color:var(--outline);padding:8px;width:180px;\"><div style=\"font-weight:700;font-family:var(--font-display);margin-bottom:4px;\">DRIVE SCANNER</div><div>Inspect FAT32 volumes with pixel‑precise sector maps.</div></div><div style=\"background:var(--surface);border:1px solid;border-color:var(--outline);padding:8px;width:180px;\"><div style=\"font-weight:700;font-family:var(--font-display);margin-bottom:4px;\">PROCESS TABLE</div><div>List all 16‑bit and 32‑bit tasks.</div></div><div style=\"background:var(--surface);border:1px solid;border-color:var(--outline);padding:8px;width:180px;\"><div style=\"font-weight:700;font-family:var(--font-display);margin-bottom:4px;\">MEMORY VIEW</div><div>Sunken input fields show raw addresses.</div></div></div></div>'; }",
    "panelCRender": "function(el) { el.style.cssText = 'min-height:150px;background:var(--bg);padding:12px;font-family:var(--font-body);font-size:11px;'; el.innerHTML = '<div style=\"background:var(--surface);border:2px solid;border-color:var(--surface-high) var(--outline) var(--outline) var(--surface-high);box-shadow:2px 2px 0 var(--on-surface-variant);\"><div style=\"background:linear-gradient(180deg,var(--primary),var(--primary-container));color:var(--on-primary);font-weight:700;line-height:1;padding:2px 4px;height:18px;\">SYSTEM INFO</div><div style=\"padding:8px;background:var(--surface-high);color:var(--on-surface);\"><div style=\"display:flex;justify-content:space-between;border-bottom:1px solid var(--outline);padding:2px 0;\"><span>OS</span><span>Windows 95 [4.00.950]</span></div><div style=\"display:flex;justify-content:space-between;border-bottom:1px solid var(--outline);padding:2px 0;\"><span>PROCESSOR</span><span>Intel Pentium 133MHz</span></div><div style=\"display:flex;justify-content:space-between;border-bottom:1px solid var(--outline);padding:2px 0;\"><span>MEMORY</span><span>64,512 KB</span></div><div style=\"display:flex;justify-content:space-between;padding:2px 0;\"><span>DISK C:</span><span>876 MB FREE</span></div></div></div>'; }",
    "heroBackground": "function(el) { el.style.background = '#008080'; }",
    "ctaBackground": "function(el) { el.style.background = '#C0C0C0'; }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'height:2px;background:var(--outline);margin:0;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = '#008080'; }",
    "surfaceOverlay": "function(el) { var ov = document.createElement('div'); ov.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;background:transparent;'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(tick) { var c = document.createElement('div'); c.style.cssText = 'position:absolute;inset:0;z-index:0;pointer-events:none;'; var span = document.createElement('span'); span.style.cssText = 'position:absolute;bottom:4px;right:4px;font-family:var(--font-body);font-size:11px;color:var(--on-bg-muted);opacity:0.5;'; span.textContent = '256-COLOR PALETTE ACTIVE'; c.appendChild(span); return c; }",
  "shadcnTokens": {
    "--color-background": "#008080",
    "--color-popover": "#008080",
    "--color-foreground": "#FFFFFF",
    "--color-card-foreground": "#FFFFFF",
    "--color-popover-foreground": "#FFFFFF",
    "--color-card": "#C0C0C0",
    "--color-muted": "#C0C0C0",
    "--color-muted-foreground": "#cfcfcf",
    "--color-primary": "#000080",
    "--color-ring": "#000080",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#C0C0C0",
    "--color-accent": "#C0C0C0",
    "--color-secondary-foreground": "#000000",
    "--color-accent-foreground": "#000000",
    "--color-border": "#808080",
    "--color-input": "#808080",
    "--color-destructive": "#FF0000"
  },
  "shadcnTokensClassic": {
    "--background": "#008080",
    "--popover": "#008080",
    "--foreground": "#FFFFFF",
    "--card-foreground": "#FFFFFF",
    "--popover-foreground": "#FFFFFF",
    "--card": "#C0C0C0",
    "--muted": "#C0C0C0",
    "--muted-foreground": "#cfcfcf",
    "--primary": "#000080",
    "--ring": "#000080",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#C0C0C0",
    "--accent": "#C0C0C0",
    "--secondary-foreground": "#000000",
    "--accent-foreground": "#000000",
    "--border": "#808080",
    "--input": "#808080",
    "--destructive": "#FF0000"
  }
});
