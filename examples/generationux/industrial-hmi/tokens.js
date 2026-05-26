registerSystem({
  "meta": {
    "name": "Industrial HMI",
    "tagline": "Factory floor control panel aesthetic for monitoring interfaces – dark, urgent, and unadorned",
    "mode": "dark",
    "fontImport": "https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;700&family=IBM+Plex+Mono:wght@400;600&display=swap"
  },
  "yamlTokens": {
    "name": "Industrial HMI",
    "colors": {
      "ok": "#00CC00",
      "warn": "#FFB000",
      "delta-up": "#00CC00",
      "delta-down": "#E03030",
      "delta-flat": "#888888"
    },
    "typography": {
      "display": {
        "fontFamily": "Barlow",
        "fontSize": "36px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Barlow",
        "fontSize": "30px",
        "fontWeight": 600,
        "lineHeight": 1.25,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Barlow",
        "fontSize": "24px",
        "fontWeight": 600,
        "lineHeight": 1.375,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "IBM Plex Mono",
        "fontSize": "14px",
        "fontWeight": 400,
        "lineHeight": 1.5,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "label": {
        "fontFamily": "IBM Plex Mono",
        "fontSize": "12px",
        "fontWeight": 400,
        "lineHeight": 1.25,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      }
    },
    "rounded": {
      "default": "0px",
      "card": "0px",
      "button": "0px",
      "input": "0px",
      "chip": "2px"
    },
    "spacing": {
      "component-internal": "12px",
      "section-internal": "16px",
      "page-edge": "48px",
      "gap-component": "16px",
      "gap-section": "24px",
      "height-sm": "40px",
      "height-md": "48px",
      "height-lg": "56px",
      "icon": "24px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "#0099FF",
        "textColor": "#FFFFFF",
        "rounded": "{rounded.button}",
        "padding": "12px",
        "height": "48px"
      },
      "button-destructive": {
        "backgroundColor": "#E03030",
        "textColor": "#FFFFFF",
        "rounded": "{rounded.button}",
        "padding": "12px",
        "height": "48px"
      },
      "indicator-led": {
        "width": "12px",
        "height": "12px",
        "rounded": "9999px",
        "backgroundColor": "{colors.ok}"
      },
      "alarm-banner": {
        "backgroundColor": "rgba(224,48,48,0.2)",
        "textColor": "#FFFFFF",
        "rounded": "{rounded.default}",
        "height": "56px",
        "padding": "12px"
      },
      "metric-cell": {
        "backgroundColor": "#1a1c20",
        "textColor": "#FFFFFF",
        "rounded": "{rounded.default}",
        "padding": "16px"
      },
      "button-warning": "{\"backgroundColor\":\"#FFB000\",\"textColor\":\"#000000\",\"rounded\":\"{rounded.button}\",\"padding\":\"12px\",\"height\":\"48px\"}"
    },
    "version": "alpha",
    "description": "Industrial control panel aesthetic for monitoring and control interfaces: dark near‑black canvas, high‑contrast signal colors, chunky borders, all‑caps monospaced type, CRT artifacts.",
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
          "host": "en.wikipedia.org",
          "count": 1
        },
        {
          "host": "www.siemens.com",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://en.wikipedia.org/wiki/SCADA",
          "host": "en.wikipedia.org",
          "institution": "Wikimedia Foundation",
          "confidence_original": "high"
        },
        {
          "url": "https://www.siemens.com/en-us/products/simatic-hmi/",
          "host": "www.siemens.com",
          "institution": "Siemens AG",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": {},
      "flags": [
        "few_usable_urls",
        "no_typography_extracted",
        "no_colour_extracted"
      ],
      "honest_gaps": {}
    }
  },
  "colorMode": "dark",
  "tokens": {
    "--bg": "#0a0a0a",
    "--on-bg": "#FFFFFF",
    "--primary": "#0099FF",
    "--on-primary": "#2d2d2d",
    "--secondary-col": "#FFB000",
    "--on-secondary": "#000000",
    "--surface": "#1a1c20",
    "--on-bg-muted": "#888888",
    "--border": "#555555",
    "--error": "#E03030",
    "--font-display": "Barlow",
    "--font-body": "IBM Plex Mono",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "2px"
  },
  "semanticColors": {
    "ok": "#00CC00",
    "warn": "#FFB000",
    "delta-up": "#00CC00",
    "delta-down": "#E03030",
    "delta-flat": "#888888",
    "deltaUp": "#00CC00",
    "deltaDown": "#E03030",
    "deltaFlat": "#888888",
    "err": "#E03030",
    "live": "#0099FF",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#888888",
    "chartFont": "IBM Plex Mono"
  },
  "elevation": {
    "model": "bevel",
    "stacking": {
      "base": 0,
      "alarm": 20,
      "overlay": 40
    },
    "bevel": {
      "highlight": "1px lighter top/left",
      "shadow": "1px darker bottom/right",
      "inset": "1px dark top/left, 1px light bottom/right on press"
    }
  },
  "surfaceModel": "bevel",
  "materialSimulation": {
    "model": "crt-screen",
    "scanlines": {
      "technique": "repeating-linear-gradient",
      "params": "1px black, 4px transparent",
      "opacity": "0.05",
      "blend": "overlay",
      "z-index": 1
    },
    "grain": {
      "technique": "SVG feTurbulence",
      "params": "baseFrequency 0.65, octaves 3",
      "opacity": "0.05",
      "blend": "screen",
      "z-index": 2
    },
    "glassReflection": {
      "technique": "CSS clip-path diagonal stripe",
      "opacity": "0.05-0.1",
      "color": "#FFFFFF",
      "z-index": 99,
      "below-modals": true
    }
  },
  "globalFilter": null,
  "globalBodyCss": "font-family: var(--font-body); background-color: var(--bg); color: var(--on-bg);",
  "globalCss": ".ds-layout-frame::before { content:''; position:fixed; inset:0; z-index:9999; pointer-events:none; background:repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.05) 1px, rgba(0,0,0,0.05) 4px); } .ds-layout-frame::after { content:''; position:fixed; inset:0; z-index:9999; pointer-events:none; mix-blend-mode:screen; opacity:0.05; background-image:url('data:image/svg+xml,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'2\\' height=\\'2\\'><rect width=\\'1\\' height=\\'1\\' fill=\\'%23FFF\\' opacity=\\'0.5\\'/><rect x=\\'1\\' y=\\'1\\' width=\\'1\\' height=\\'1\\' fill=\\'%23FFF\\' opacity=\\'0.5\\'/></svg>'); background-repeat:repeat; }",
  "interactionModel": {
    "hover": {
      "delta": "color-shift",
      "primary": "#0080CC",
      "destructive": "#B02626",
      "secondary": "#444444"
    },
    "active": {
      "insetHighlight": "1px dark top/left",
      "insetShadow": "1px light bottom/right",
      "contentShift": "1px down"
    },
    "focus": {
      "style": "color-border",
      "color": "#0099FF",
      "noGlow": true,
      "noRing": true
    },
    "transition": {
      "duration": "0ms",
      "easing": "none",
      "exempt": [
        "alarm-blink",
        "gauge-needle",
        "cursor-blink",
        "value-flash",
        "alarm-rollin"
      ]
    }
  },
  "interactionStyles": ".ds-layout-frame .btn-primary:hover { background-color: #0080CC; } .ds-layout-frame .btn-destructive:hover { background-color: #B02626; } .ds-layout-frame button:active { translate: 0 1px; box-shadow: inset 1px 1px 2px rgba(0,0,0,0.5), inset -1px -1px 2px rgba(255,255,255,0.1); } .ds-layout-frame button:focus-visible { outline: 2px solid var(--primary); outline-offset: 2px; box-shadow: none; }",
  "chartStyle": {
    "background": "#1a1c20",
    "lineColor": "#0099FF",
    "lineWidth": 2,
    "gridLines": "none",
    "tickColor": "#555555",
    "tickLength": "2px",
    "labelColor": "#888888",
    "labelFont": "IBM Plex Mono uppercase 12px",
    "interpolation": "step",
    "dataPoints": false,
    "gridColor": "rgba(128,128,128,0.18)",
    "fontFamily": "IBM Plex Mono"
  },
  "dashboardStyle": {
    "layout": "fixed 4‑6 column grid; top navigation bar (height 48px); left alarm panel (width 240px); central process display (2‑3 columns); right chart area (1‑2 columns)",
    "density": "high but with 16‑24px gaps between groups; 8px baseline grid; left‑aligned text",
    "panelTreatment": "1px lighter top/left border, 1px darker bottom/right border (bevel); no drop shadows; all panels have 0px border-radius",
    "dataVizStyle": "step chart with 2px solid blue (#0099FF) line on dark surface (#1a1c20); no grid lines; only small 2px tick marks; monospace labels",
    "signatureElement": "alarm banners that flash at 1Hz with a hard step animation; gauge needles that step discretely"
  },
  "landingStyle": {
    "heroApproach": "centered single‑panel with a large dial gauge and a status summary line",
    "scrollBehavior": "no scroll animations – instant jump to next section; page is typically a single static view",
    "ctaStyle": "primary blue button with bevel press effect (1px inset dark top/left, 1px light bottom/right on active)",
    "signatureMoment": "the dial gauge needle snaps to a new value on load, with no easing"
  },
  "spacing": {
    "component-internal": "12px",
    "section-internal": "16px",
    "page-edge": "48px",
    "gap-component": "16px",
    "gap-section": "24px",
    "height-sm": "40px",
    "height-md": "48px",
    "height-lg": "56px",
    "icon": "24px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "2px"
  },
  "buttons": [
    {
      "name": "button-primary",
      "desc": "Primary action button with solid blue fill, white uppercase monospaced text, and a bevel effect via 1px lighter border top/left and 1px darker border bottom/right.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"display:inline-flex;align-items:center;justify-content:center;height:48px;padding:0 12px;background:var(--primary);color:var(--on-primary);border:1px solid;border-color:var(--primary) var(--primary) var(--primary) var(--primary);font-family:var(--font-body);font-size:14px;font-weight:600;text-transform:uppercase;letter-spacing:0.025em;border-radius:var(--radius-btn);cursor:pointer;transition:none;\">ACTIVATE</button>",
      "label": "button-primary",
      "note": "Primary action button with solid blue fill, white uppercase monospaced text, and a bevel effect via 1px lighter border top/left and 1px darker border bottom/right."
    },
    {
      "name": "button-destructive",
      "desc": "Destructive action button with solid red fill, white text, bevel border mimicking a panic button.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"display:inline-flex;align-items:center;justify-content:center;height:48px;padding:0 12px;background:var(--error);color:#FFFFFF;border:1px solid;border-color:var(--primary) var(--primary) var(--primary) var(--primary);font-family:var(--font-body);font-size:14px;font-weight:600;text-transform:uppercase;letter-spacing:0.025em;border-radius:var(--radius-btn);cursor:pointer;transition:none;\">ESTOP</button>",
      "label": "button-destructive",
      "note": "Destructive action button with solid red fill, white text, bevel border mimicking a panic button."
    },
    {
      "name": "button-warning",
      "desc": "Warning/amber action button for secondary confirmations or resets.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"display:inline-flex;align-items:center;justify-content:center;height:48px;padding:0 12px;background:var(--secondary-col);color:#000000;border:1px solid;border-color:var(--primary) var(--primary) var(--primary) var(--primary);font-family:var(--font-body);font-size:14px;font-weight:600;text-transform:uppercase;letter-spacing:0.025em;border-radius:var(--radius-btn);cursor:pointer;transition:none;\">RESET</button>",
      "label": "button-warning",
      "note": "Warning/amber action button for secondary confirmations or resets."
    }
  ],
  "cards": [
    {
      "name": "metric-cell",
      "desc": "Data display card for a single metric value with label, using dark surface background and solid border.",
      "html": "<div style=\"background:var(--surface);padding:16px;border:1px solid var(--border);border-radius:var(--radius-card);font-family:var(--font-body);color:var(--on-bg);text-transform:uppercase;\"><div style=\"font-size:12px;color:var(--on-bg-muted);margin-bottom:8px;\">TEMP</div><div style=\"font-size:36px;font-weight:700;font-family:var(--font-display);letter-spacing:-0.025em;\">72.4°C</div></div>",
      "label": "metric-cell",
      "note": "Data display card for a single metric value with label, using dark surface background and solid border."
    },
    {
      "name": "alarm-card",
      "desc": "Status summary card with colored indicator for active alarms, mimicking a panel segment.",
      "html": "<div style=\"background:#1a1c20;padding:16px;border:1px solid var(--border);border-radius:var(--radius-card);font-family:var(--font-body);text-transform:uppercase;\"><div style=\"display:flex;align-items:center;gap:var(--gap-component);margin-bottom:12px;\"><span style=\"width:12px;height:12px;background:var(--error);border-radius:9999px;display:inline-block;\"></span><span style=\"color:var(--on-bg);font-size:14px;font-weight:600;\">3 ACTIVE ALARMS</span></div><div style=\"font-size:12px;color:var(--on-bg-muted);line-height:1.5;\">LINE 14 • VFD FAULT</div></div>",
      "label": "alarm-card",
      "note": "Status summary card with colored indicator for active alarms, mimicking a panel segment."
    }
  ],
  "forms": [
    {
      "name": "text-input",
      "desc": "Single-line text input with uppercase monospaced label and value, flat border, no rounded corners, focus state with blue border.",
      "html": "<div style=\"margin-bottom:16px;\"><label style=\"display:block;font-family:var(--font-body);font-size:12px;text-transform:uppercase;color:var(--on-bg-muted);margin-bottom:4px;\">SETPOINT</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" value=\"1500\" style=\"width:100%;height:40px;padding:0 8px;background:var(--surface);color:var(--on-bg);border:1px solid var(--border);border-radius:var(--radius-input);font-family:var(--font-body);font-size:14px;text-transform:uppercase;transition:none;outline:none;\" /></div>",
      "label": "text-input",
      "stateLabel": "Single-line text input with uppercase monospaced label and value, flat border, no rounded corners, focus state with blue border."
    },
    {
      "name": "select-dropdown",
      "desc": "Dropdown select with a down-arrow indicator, flat panel, monospaced items.",
      "html": "<div style=\"margin-bottom:16px;\"><label style=\"display:block;font-family:var(--font-body);font-size:12px;text-transform:uppercase;color:var(--on-bg-muted);margin-bottom:4px;\">MODE</label><div style=\"position:relative;\"><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"width:100%;height:40px;padding:0 8px;background:var(--surface);color:var(--on-bg);border:1px solid var(--border);border-radius:var(--radius-input);font-family:var(--font-body);font-size:14px;text-transform:uppercase;appearance:none;transition:none;outline:none;cursor:pointer;\"><option>AUTO</option><option>MANUAL</option><option>CALIBRATE</option></select><span style=\"position:absolute;right:8px;top:50%;transform:translateY(-50%);pointer-events:none;color:var(--on-bg-muted);font-size:12px;\">▼</span></div></div>",
      "label": "select-dropdown",
      "stateLabel": "Dropdown select with a down-arrow indicator, flat panel, monospaced items."
    },
    {
      "name": "toggle-switch",
      "desc": "Toggle switch for binary settings, with a sliding indicator and label. Uses solid fill with bevel effect.",
      "html": "<div style=\"display:flex;align-items:center;gap:12px;\"><label style=\"font-family:var(--font-body);font-size:14px;text-transform:uppercase;color:var(--on-bg);cursor:pointer;\">ENABLE</label><div style=\"position:relative;width:44px;height:24px;background:var(--surface);border:1px solid var(--border);border-radius:0;cursor:pointer;\"><div style=\"position:absolute;top:2px;left:2px;width:20px;height:20px;background:var(--primary);border:1px solid var(--primary);border-radius:0;transition:none;\"></div></div></div>",
      "label": "toggle-switch",
      "stateLabel": "Toggle switch for binary settings, with a sliding indicator and label. Uses solid fill with bevel effect."
    }
  ],
  "extraComponents": [
    {
      "name": "indicator-led",
      "desc": "Small circular indicator light, 12px, green for OK, can be recolored via background.",
      "html": "<span style=\"display:inline-block;width:12px;height:12px;background:var(--ok);border-radius:9999px;border:1px solid var(--primary);\"></span>"
    },
    {
      "name": "alarm-banner",
      "desc": "Flashing alarm banner that appears at the top of the screen, with error background and blinking border. Blink uses a step animation (500ms).",
      "html": "<div style=\"display:flex;align-items:center;height:56px;padding:0 12px;background:rgba(224,48,48,0.2);border:2px solid var(--error);border-radius:var(--radius-default);font-family:var(--font-body);font-size:14px;font-weight:600;text-transform:uppercase;color:#FFFFFF;animation:alarm-blink 1s step-end infinite;\">⚠️ CRITICAL – FLOW LOSS</div>"
    },
    {
      "name": "signal-bar",
      "desc": "Solid progress bar for channel strength or fill level. Track is dark, fill is a block of green (OK) or amber/red based on threshold.",
      "html": "<div style=\"height:4px;background:#1a1c20;border:0;width:100%;\"><div style=\"height:4px;width:67%;background:var(--ok);transition:none;\"></div></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — PROCESS RUNNING 94.7%</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — TANK LEVEL MONITOR</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — ALARM LOG – LINE 14</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — SETPOINT 1500 RPM • CURRENT 1487 RPM</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — STATUS: RUNNING</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Rounded corners and pill shapes – destroys the industrial panel feel. All corners must be 0px or ≤2px only for chips.",
      "avoid": {
        "html": "<button style=\"border-radius:9999px;padding:12px 24px;background:#0099FF;color:white;font-family:Helvetica;\">CLICK ME</button>",
        "label": "Avoid"
      },
      "rule": "Rounded corners and pill shapes – destroys the industrial panel feel. All corners must be 0px or ≤2px only for chips.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Lowercase or cursive text – all labels and data must be uppercase. Variable-width fonts also break the rigid grid.",
      "avoid": {
        "html": "<span style=\"font-family:'Comic Sans MS';text-transform:none;font-size:14px;color:white;\">Temperature is 72.4°C</span>",
        "label": "Avoid"
      },
      "rule": "Lowercase or cursive text – all labels and data must be uppercase. Variable-width fonts also break the rigid grid.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Gradients and drop shadows – the style uses hard, flat colors and bevel effects, not blurs or smooth transitions.",
      "avoid": {
        "html": "<div style=\"background:linear-gradient(135deg,#0099FF,#00CC00);color:white;padding:16px;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,0.5);font-family:'Arial';\">CAUTION</div>",
        "label": "Avoid"
      },
      "rule": "Gradients and drop shadows – the style uses hard, flat colors and bevel effects, not blurs or smooth transitions.",
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
  "doAvoidStyle": "See doAvoid list above",
  "effects": [],
  "motion": [],
  "colors": {
    "background": "#0a0a0a",
    "surface": "#1a1c20",
    "primary": "#0099FF",
    "secondary": "#FFB000",
    "error": "#E03030",
    "on-background": "#FFFFFF",
    "on-surface": "#FFFFFF",
    "on-surface-variant": "#888888",
    "border": "#555555",
    "ok": "#00CC00",
    "warn": "#FFB000",
    "delta-up": "#00CC00",
    "delta-down": "#E03030",
    "delta-flat": "#888888"
  },
  "typography": {
    "display": {
      "fontFamily": "Barlow",
      "fontSize": "36px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "Barlow",
      "fontSize": "30px",
      "fontWeight": 600,
      "lineHeight": 1.25,
      "letterSpacing": "0.025em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "Barlow",
      "fontSize": "24px",
      "fontWeight": 600,
      "lineHeight": 1.375,
      "letterSpacing": "0.025em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "IBM Plex Mono",
      "fontSize": "14px",
      "fontWeight": 400,
      "lineHeight": 1.5,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "label": {
      "fontFamily": "IBM Plex Mono",
      "fontSize": "12px",
      "fontWeight": 400,
      "lineHeight": 1.25,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    }
  },
  "layouts": {
    "copy": {
      "heroKicker": "REAL-TIME MONITORING",
      "heroHeadline": "LINE 3 CONTROL PANEL",
      "heroSub": "PLANT FLOOR STATUS | ZONE A | 2025-01-27 14:32:17",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#0099FF;color:#FFF;border:2px solid #0099FF;padding:12px 24px;font-family:\\x27IBM Plex Mono\\x27,monospace;font-size:14px;text-transform:uppercase;letter-spacing:0.025em;cursor:pointer;\">ACKNOWLEDGE ALARM</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#1a1c20;color:#FFF;border:2px solid #555;padding:12px 24px;font-family:\\x27IBM Plex Mono\\x27,monospace;font-size:14px;text-transform:uppercase;letter-spacing:0.025em;cursor:pointer;\">MANUAL OVERRIDE</button>",
      "navLinks": [
        "LINES",
        "ALARMS",
        "TRENDS",
        "CONTROLS"
      ],
      "features": [
        {
          "title": "CRITICAL ALARM",
          "desc": "HIGH-PRIORITY FAULT DETECTION WITH 1HZ FLASH BANNER",
          "icon": "🚨",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🚨 CRITICAL ALARM</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">HIGH-PRIORITY FAULT DETECTION WITH 1HZ FLASH BANNER</div></div>"
        },
        {
          "title": "PRESSURE GAUGE",
          "desc": "SEMI-CIRCLE DIAL WITH DISCRETE NEEDLE STEPS",
          "icon": "⚙️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⚙️ PRESSURE GAUGE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">SEMI-CIRCLE DIAL WITH DISCRETE NEEDLE STEPS</div></div>"
        },
        {
          "title": "TEMPERATURE TREND",
          "desc": "STEP CHART WITH BLUE TRACE AND AXIS TICK MARKS",
          "icon": "📊",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📊 TEMPERATURE TREND</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">STEP CHART WITH BLUE TRACE AND AXIS TICK MARKS</div></div>"
        },
        {
          "title": "MOTOR SPEED",
          "desc": "SIGNAL BAR WITH GREEN-AMBER-RED THRESHOLD FILL",
          "icon": "🔧",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔧 MOTOR SPEED</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">SIGNAL BAR WITH GREEN-AMBER-RED THRESHOLD FILL</div></div>"
        }
      ],
      "ctaStripHeadline": "PLANT STATUS OVERVIEW",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#1a1c20;color:#FFF;border:2px solid #555;padding:12px 24px;font-family:\\x27IBM Plex Mono\\x27,monospace;font-size:14px;text-transform:uppercase;letter-spacing:0.025em;cursor:pointer;\">INITIALIZE LOG</button>",
      "sidebarBrand": "SIMATIC RTU 3000",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "LINES",
          "active": true
        },
        {
          "icon": "◉",
          "label": "ALARMS",
          "active": false
        }
      ],
      "dashboardTitle": "LINE 3 CONTROL PANEL",
      "metrics": [
        {
          "label": "RUN TIME",
          "value": "47:23:15",
          "delta": "+00:02:34",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "CYCLE COUNT",
          "value": "12847",
          "delta": "+43",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "ALARM COUNT",
          "value": "3",
          "delta": "-1",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "LINE LOAD",
          "value": "87.4%",
          "delta": "+2.1%",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "LINE PRESSURE TREND",
      "panelATitle": "ACTIVE ALARMS",
      "panelARows": [
        {
          "label": "001 CRITICAL PRESSURE",
          "value": "ACTIVE",
          "pct": 0
        },
        {
          "label": "002 TEMP HIGH",
          "value": "ACTIVE",
          "pct": 0
        },
        {
          "label": "003 MOTOR FAULT",
          "value": "ACKED",
          "pct": 0
        },
        {
          "label": "004 VALVE STUCK",
          "value": "CLEARED",
          "pct": 0
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "METER READINGS",
      "panelBCells": [
        {
          "label": "FLOW RATE",
          "value": "42.3 L/MIN",
          "state": "ok"
        },
        {
          "label": "SPEED",
          "value": "1750 RPM",
          "state": "warn"
        },
        {
          "label": "VOLTAGE",
          "value": "480 V",
          "state": "err"
        },
        {
          "label": "CURRENT",
          "value": "12.7 A",
          "state": "ok"
        },
        {
          "label": "FREQUENCY",
          "value": "60.0 HZ",
          "state": "warn"
        },
        {
          "label": "LEVEL",
          "value": "73.2 %",
          "state": "err"
        },
        {
          "label": "PRESSURE",
          "value": "98.6 PSI",
          "state": "ok"
        },
        {
          "label": "TEMPERATURE",
          "value": "74.1 °C",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "00:00",
        "00:10",
        "00:20",
        "00:30",
        "00:40",
        "00:50"
      ],
      "series": [
        {
          "data": [
            95,
            97,
            102,
            101,
            99,
            96,
            96,
            96,
            96,
            96,
            96,
            96
          ],
          "label": "PRESSURE A",
          "axis": "left",
          "color": "#0099FF"
        },
        {
          "data": [
            88,
            90,
            94,
            92,
            89,
            87,
            87,
            87,
            87,
            87,
            87,
            87
          ],
          "label": "PRESSURE B",
          "axis": "right-1",
          "color": "#FFB000"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText='min-height:400px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#0a0a0a;padding:48px;'; el.innerHTML='<div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">REAL-TIME MONITORING</div><div style=\"font-family:var(--font-display);font-size:48px;font-weight:700;color:var(--on-bg);margin:24px 0;letter-spacing:-0.02em;\">LINE 3</div><div style=\"display:flex;gap:32px;\"><div style=\"text-align:center;\"><div style=\"font-family:var(--font-body);font-size:12px;color:var(--on-bg-muted);\">PRESSURE</div><div style=\"font-family:var(--font-display);font-size:36px;font-weight:700;color:var(--on-bg);\">87.4 PSI</div></div><div style=\"text-align:center;\"><div style=\"font-family:var(--font-body);font-size:12px;color:var(--on-bg-muted);\">TEMP</div><div style=\"font-family:var(--font-display);font-size:36px;font-weight:700;color:var(--on-bg);\">72.4°C</div></div></div><div style=\"margin-top:32px;padding:12px 24px;background:var(--primary);color:var(--on-primary);font-family:var(--font-body);font-size:14px;font-weight:600;text-transform:uppercase;letter-spacing:0.025em;\">ACKNOWLEDGE ALARM</div>'; }",
    "showcaseRender": "function(el) { el.style.cssText='display:flex;flex-wrap:wrap;gap:16px;padding:16px;background:var(--bg);'; el.innerHTML='<div style=\"flex:1 1 240px;min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🚨 CRITICAL ALARM</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">HIGH-PRIORITY FAULT DETECTION WITH 1HZ FLASH BANNER</div></div><div style=\"flex:1 1 240px;min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⚙️ PRESSURE GAUGE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">SEMI-CIRCLE DIAL WITH DISCRETE NEEDLE STEPS</div></div><div style=\"flex:1 1 240px;min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📊 TEMPERATURE TREND</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">STEP CHART WITH BLUE TRACE AND AXIS TICK MARKS</div></div><div style=\"flex:1 1 240px;min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔧 MOTOR SPEED</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">SIGNAL BAR WITH GREEN-AMBER-RED THRESHOLD FILL</div></div>'; }",
    "panelCRender": "function(el) { el.style.cssText='min-height:300px;background:var(--surface);border:1px solid var(--border);padding:16px;'; el.innerHTML='<div style=\"font-family:var(--font-body);font-size:12px;font-weight:700;text-transform:uppercase;color:var(--on-bg-muted);margin-bottom:8px;\">LINE PRESSURE TREND</div><svg width=\"100%\" height=\"200\" viewBox=\"0 0 600 200\"><rect width=\"600\" height=\"200\" fill=\"#1a1c20\"/><text x=\"10\" y=\"20\" font-family=\"var(--font-body)\" font-size=\"10\" fill=\"#888\">PRESS A</text><polyline points=\"10,160 110,140 210,100 310,110 410,140 510,160\" fill=\"none\" stroke=\"#0099FF\" stroke-width=\"2\"/><polyline points=\"10,180 110,170 210,150 310,160 410,170 510,180\" fill=\"none\" stroke=\"#FFB000\" stroke-width=\"2\"/><line x1=\"10\" y1=\"180\" x2=\"10\" y2=\"30\" stroke=\"#555\" stroke-width=\"1\"/><line x1=\"10\" y1=\"180\" x2=\"590\" y2=\"180\" stroke=\"#555\" stroke-width=\"1\"/></svg>'; }",
    "heroBackground": "function(el) { el.style.background='#0a0a0a'; }",
    "ctaBackground": "function(el) { el.style.background='#1a1c20'; }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText='height:1px;background:var(--border);margin:0;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background='#0a0a0a'; }",
    "surfaceOverlay": "function(el) { var scan=document.createElement('div'); scan.style.cssText='position:absolute;inset:0;z-index:1;pointer-events:none;background:repeating-linear-gradient(0deg,transparent,transparent 1px,rgba(0,0,0,0.05) 1px,rgba(0,0,0,0.05) 4px);'; el.appendChild(scan); var grain=document.createElement('div'); grain.style.cssText='position:absolute;inset:0;z-index:2;pointer-events:none;mix-blend-mode:screen;opacity:0.05;background-image:url(\"data:image/svg+xml,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'2\\' height=\\'2\\'><rect width=\\'1\\' height=\\'1\\' fill=\\'%23FFF\\' opacity=\\'0.5\\'/><rect x=\\'1\\' y=\\'1\\' width=\\'1\\' height=\\'1\\' fill=\\'%23FFF\\' opacity=\\'0.5\\'/></svg>\");background-repeat:repeat;'; el.appendChild(grain); }"
  },
  "shadcnTokens": {
    "--color-background": "#0a0a0a",
    "--color-popover": "#0a0a0a",
    "--color-foreground": "#FFFFFF",
    "--color-card-foreground": "#FFFFFF",
    "--color-popover-foreground": "#FFFFFF",
    "--color-card": "#1a1c20",
    "--color-muted": "#1a1c20",
    "--color-muted-foreground": "#888888",
    "--color-primary": "#0099FF",
    "--color-ring": "#0099FF",
    "--color-primary-foreground": "#2d2d2d",
    "--color-secondary": "#FFB000",
    "--color-accent": "#FFB000",
    "--color-secondary-foreground": "#000000",
    "--color-accent-foreground": "#000000",
    "--color-border": "#555555",
    "--color-input": "#555555",
    "--color-destructive": "#E03030"
  },
  "shadcnTokensClassic": {
    "--background": "#0a0a0a",
    "--popover": "#0a0a0a",
    "--foreground": "#FFFFFF",
    "--card-foreground": "#FFFFFF",
    "--popover-foreground": "#FFFFFF",
    "--card": "#1a1c20",
    "--muted": "#1a1c20",
    "--muted-foreground": "#888888",
    "--primary": "#0099FF",
    "--ring": "#0099FF",
    "--primary-foreground": "#2d2d2d",
    "--secondary": "#FFB000",
    "--accent": "#FFB000",
    "--secondary-foreground": "#000000",
    "--accent-foreground": "#000000",
    "--border": "#555555",
    "--input": "#555555",
    "--destructive": "#E03030"
  }
});
