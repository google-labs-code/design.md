registerSystem({
  "meta": {
    "name": "Cockpit Instrument Panel",
    "tagline": "A functional, high-contrast design system for data-dense interfaces where readability under stress is paramount.",
    "mode": "dark",
    "fontImport": "https://fonts.googleapis.com/css2?family=VT323&family=Barlow+Condensed:wght@400;500;600;700&display=swap"
  },
  "yamlTokens": {
    "name": "Cockpit Instrument Panel",
    "colors": {
      "panel-background": "#0A0A0A",
      "panel-background-variant": "#1A1A1A",
      "text-primary": "#F0F0F0",
      "text-night": "#7FFF7F",
      "text-daylight-alt": "#F5E6A0",
      "accent-amber": "#FFCC00",
      "alert-red": "#FF3B30",
      "outline-day": "#808080",
      "outline-night": "#4A7A7A"
    },
    "typography": {
      "display": {
        "fontFamily": "VT323, monospace",
        "fontSize": "48px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.025em",
        "fontVariantNumeric": "tabular-nums"
      },
      "headline": {
        "fontFamily": "Barlow Condensed, sans-serif",
        "fontSize": "24px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Barlow Condensed, sans-serif",
        "fontSize": "18px",
        "fontWeight": 600,
        "lineHeight": 1.25,
        "letterSpacing": "-0.05em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Barlow Condensed, sans-serif",
        "fontSize": "14px",
        "fontWeight": 500,
        "lineHeight": 1.5,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "label": {
        "fontFamily": "Barlow Condensed, sans-serif",
        "fontSize": "12px",
        "fontWeight": 500,
        "lineHeight": 1,
        "letterSpacing": "-0.05em",
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
      "page-edge": "16px",
      "component-padding": "8px",
      "section-gap": "24px",
      "instrument-gap": "16px",
      "tight-gap": "8px",
      "component-height-sm": "32px",
      "component-height-md": "48px",
      "component-height-lg": "64px",
      "icon-size": "16px"
    },
    "components": {
      "button-default": {
        "backgroundColor": "{colors.panel-background}",
        "textColor": "{colors.text-primary}",
        "rounded": "{rounded.button}",
        "padding": "8px",
        "height": "32px"
      },
      "numeric-readout": {
        "backgroundColor": "{colors.panel-background-variant}",
        "textColor": "{colors.text-primary}",
        "rounded": "{rounded.default}",
        "padding": "8px",
        "height": "48px"
      },
      "warning-flag-critical": {
        "backgroundColor": "{colors.alert-red}",
        "textColor": "#000000",
        "rounded": "{rounded.default}",
        "padding": "4px"
      }
    },
    "version": "alpha",
    "description": "A functional, high-contrast design system inspired by postwar aircraft cockpits and modern glass cockpits. Monospaced green-on-black typography, geometric precision, and utilitarian minimalism define this style for data-dense interfaces where readability under stress is paramount.",
    "provenance": {
      "coverage_status": "minimal",
      "identity_description": "",
      "manual_enrichment_required": true,
      "imagery_count": 1,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": null,
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "quicksearch.dla.mil",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://quicksearch.dla.mil/qsDocDetails.aspx?ident_number=239843",
          "host": "quicksearch.dla.mil",
          "institution": "Defense Logistics Agency (DLA)",
          "confidence_original": "medium"
        }
      ],
      "typefaces_attested": {},
      "flags": [
        "one_usable_url_only",
        "no_typography_extracted",
        "no_colour_extracted",
        "1_rate_limited_urls_pending_retry",
        "1_robots_disallowed_urls"
      ],
      "honest_gaps": {}
    }
  },
  "colorMode": "dark",
  "tokens": {
    "--bg": "#0A0A0A",
    "--on-bg": "#F0F0F0",
    "--primary": "#FFCC00",
    "--on-primary": "#000000",
    "--secondary-col": "#7FFF7F",
    "--on-secondary": "#000000",
    "--surface": "#1A1A1A",
    "--on-bg-muted": "#808080",
    "--border": "#808080",
    "--error": "#FF3B30",
    "--font-display": "VT323, monospace",
    "--font-body": "Barlow Condensed, sans-serif",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "--success": "#7FFF7F",
    "--warning": "#FFCC00",
    "--error": "#FF3B30",
    "--info": "#F0F0F0",
    "warn": "#FF8C42",
    "ok": "#22C55E",
    "err": "#FF3B30",
    "deltaUp": "#22C55E",
    "deltaDown": "#FF3B30",
    "deltaFlat": "#808080",
    "live": "#FFCC00",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#808080",
    "chartFont": "Space Grotesk"
  },
  "elevation": {
    "flat": "none",
    "bevel-highlight": "0 1px 0 rgba(255, 255, 255, 0.15)",
    "bevel-shadow": "0 -1px 0 rgba(0, 0, 0, 0.5)",
    "pressed": "inset 0 1px 0 rgba(0, 0, 0, 0.5)",
    "modal": "0 0 0 0 rgba(0, 0, 0, 0)"
  },
  "surfaceModel": "bevel",
  "materialSimulation": {
    "model": "printed-plastic",
    "variants": {
      "grain": true,
      "glow": "halation",
      "bevel": "engraved"
    }
  },
  "globalFilter": null,
  "globalBodyCss": "font-family: var(--font-body); background: var(--bg); color: var(--on-bg);",
  "globalCss": ".ds-layout-frame ::selection { background: rgba(127,255,127,0.25); color: inherit; }\n.ds-layout-frame *::-webkit-scrollbar { width: 6px; }\n.ds-layout-frame *::-webkit-scrollbar-track { background: #0A0A0A; }\n.ds-layout-frame *::-webkit-scrollbar-thumb { background: #4A7A7A; }\n.ds-layout-frame *::-webkit-scrollbar-thumb:hover { background: #7FFF7F; }\n.ds-layout-frame .instrument { border: 1px solid var(--border); background: var(--surface); box-shadow: inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.5); }\n.ds-layout-frame .backlit { color: var(--text-night); text-shadow: 0 0 4px currentColor, 0 0 8px currentColor; }\n.ds-layout-frame .numeric-readout { animation: backlight-pulse 10s ease-in-out infinite; }\n@keyframes backlight-pulse { 0%, 100% { filter: brightness(1); } 50% { filter: brightness(0.998); } }",
  "interactionModel": {
    "hover": {
      "effect": "none",
      "transition": "0ms",
      "easing": "none"
    },
    "focus": {
      "effect": "glow-ring",
      "transition": "0ms",
      "easing": "none",
      "ringColor": "var(--primary)",
      "ringSize": "1px"
    },
    "active": {
      "effect": "bevel-depress",
      "transition": "0ms",
      "easing": "none"
    },
    "exempt": [
      "backlight-pulse"
    ]
  },
  "interactionStyles": ".ds-layout-frame .instrument:focus { outline: 1px solid var(--primary); box-shadow: 0 0 0 2px rgba(255,204,0,0.3); }\n.ds-layout-frame .instrument:active { transform: translateY(1px); box-shadow: inset 0 1px 0 rgba(0,0,0,0.5); }",
  "chartStyle": {
    "gauge": {
      "needleColor": "var(--on-bg)",
      "trackColor": "var(--surface)",
      "tickColor": "var(--border)",
      "arcColor": "var(--border)"
    },
    "reticle": {
      "lineColor": "var(--on-bg)",
      "centerDotColor": "var(--primary)"
    },
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#808080",
    "fontFamily": "Barlow Condensed, sans-serif"
  },
  "dashboardStyle": {
    "layout": "Fixed grid with instruments arranged in 2x2, 2x3, or 3x1 configurations. Responsive: stacks to single-column at 375px, reverts to multi-column at 768px.",
    "density": "High — instruments are tightly packed with 16px gaps between them and 8px internal padding.",
    "panelTreatment": "Matte black plastic panel (var(--bg)) with engraved 1px borders (var(--border)). Subtle bevel highlights (var(--bevel-highlight), var(--bevel-shadow)). Film grain overlay applied via CSS pseudo-element.",
    "dataVizStyle": "Monospaced digital readouts with halation glow for numeric values. Analog dial gauges with tick marks and needles for continuous data. Green/amber/red color coding for status.",
    "signatureElement": "Monospaced green-on-black readouts with a soft halation glow that pulses gently (10s loop) to simulate backlight drift."
  },
  "landingStyle": {
    "heroApproach": "Full-screen instrument panel background with large monospaced headline (e.g., 'SYSTEM ONLINE') using the display font. Subtle film grain overlay and ambient backlight pulse.",
    "scrollBehavior": "Sections reveal with instant, mechanical snap — no parallax or fade-in animations. Instruments slide in horizontally from off-screen edges with 0ms transition.",
    "ctaStyle": "Amber primary button (var(--primary)) with black text, styled as a cockpit switch. No hover effects. Active state shows a pressed bevel (inset shadow).",
    "signatureMoment": "As the hero loads, a brief overlay shows a simulated boot sequence with green terminal text that flickers, then resolves to the main interface — evoking a wake-up sequence of an instrument panel."
  },
  "buttons": [
    {
      "name": "arming-switch",
      "desc": "Primary action button with amber backlight, used for critical arm/disarm functions.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style='background: var(--primary); color: var(--on-primary); border: none; font-family: var(--font-body); font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: -0.05em; padding: 8px; height: 32px; border-radius: var(--radius-btn); cursor: pointer; box-shadow: var(--bevel-highlight), var(--bevel-shadow);'>ARM</button>",
      "label": "arming-switch",
      "note": "Primary action button with amber backlight, used for critical arm/disarm functions."
    },
    {
      "name": "mode-select",
      "desc": "Secondary button with outline border, used for mode selection without strong emphasis.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style='background: transparent; color: var(--on-bg); border: 1px solid var(--border); font-family: var(--font-body); font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: -0.05em; padding: 8px; height: 32px; border-radius: var(--radius-btn); cursor: pointer; box-shadow: none;'>NAV</button>",
      "label": "mode-select",
      "note": "Secondary button with outline border, used for mode selection without strong emphasis."
    },
    {
      "name": "data-reset",
      "desc": "Ghost button with secondary green text, used for resetting non-critical data.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style='background: transparent; color: var(--secondary-col); border: none; font-family: var(--font-body); font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: -0.05em; padding: 8px; height: 32px; border-radius: var(--radius-btn); cursor: pointer;'>RESET</button>",
      "label": "data-reset",
      "note": "Ghost button with secondary green text, used for resetting non-critical data."
    }
  ],
  "cards": [
    {
      "name": "digital-readout-card",
      "desc": "Instrument card with a monospaced numeric readout and a label. Uses panel background variant and engraved border.",
      "html": "<div style='background: var(--surface); border: 1px solid var(--border); padding: 8px; border-radius: var(--radius-card); display: flex; flex-direction: column; gap: 4px; box-shadow: var(--bevel-highlight), var(--bevel-shadow);'><span style='font-family: var(--font-body); font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: -0.05em; color: var(--on-bg-muted); line-height: 1;'>SPEED</span><span style='font-family: var(--font-display); font-size: 48px; font-weight: 700; color: var(--on-bg); line-height: 1.25; letter-spacing: 0.025em; font-variant-numeric: tabular-nums; text-shadow: 0 0 4px var(--secondary-col), 0 0 8px var(--secondary-col);'>042</span></div>",
      "label": "digital-readout-card",
      "note": "Instrument card with a monospaced numeric readout and a label. Uses panel background variant and engraved border."
    },
    {
      "name": "analog-dial-card",
      "desc": "Instrument card containing a simple dial gauge with a needle. Mimics an analog altimeter with tick marks.",
      "html": "<div style='background: var(--bg); border: 1px solid var(--border); padding: 8px; border-radius: var(--radius-card); display: flex; flex-direction: column; align-items: center; gap: 4px; box-shadow: var(--bevel-highlight), var(--bevel-shadow);'><span style='font-family: var(--font-body); font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: -0.05em; color: var(--on-bg-muted); line-height: 1;'>ALT</span><svg width='100' height='100' viewBox='0 0 100 100'><circle cx='50' cy='50' r='45' fill='none' stroke='var(--border)' stroke-width='1'/><line x1='50' y1='50' x2='50' y2='10' stroke='var(--chart-gauge-needle)' stroke-width='2' stroke-linecap='round'/><circle cx='50' cy='50' r='3' fill='var(--chart-gauge-center)'/></svg></div>",
      "label": "analog-dial-card",
      "note": "Instrument card containing a simple dial gauge with a needle. Mimics an analog altimeter with tick marks."
    }
  ],
  "forms": [
    {
      "name": "text-input",
      "desc": "Single-line text input for entering waypoints or parameters. Uses monospaced font and engraved border.",
      "html": "<div style=\\x27display: flex; flex-direction: column; gap: 4px;\\x27><label style=\\x27font-family: var(--font-body); font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: -0.05em; color: var(--on-bg-muted); line-height: 1;\\x27>WAYPOINT</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\\x27text\\x27 value=\\x27N45° W122°\\x27 readonly style=\\x27background: var(--bg); color: var(--on-bg); font-family: var(--font-display); font-size: 24px; font-weight: 700; border: 1px solid var(--border); padding: 8px; height: 48px; outline: none; text-shadow: 0 0 4px var(--secondary-col);\\x27 /></div>",
      "label": "text-input",
      "stateLabel": "Single-line text input for entering waypoints or parameters. Uses monospaced font and engraved border."
    },
    {
      "name": "select-dropdown",
      "desc": "Select dropdown for choosing altitude mode or instrument configuration.",
      "html": "<div style=\\x27display: flex; flex-direction: column; gap: 4px;\\x27><label style=\\x27font-family: var(--font-body); font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: -0.05em; color: var(--on-bg-muted); line-height: 1;\\x27>ALTITUDE MODE</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\\x27background: var(--bg); color: var(--on-bg); font-family: var(--font-body); font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: -0.025em; border: 1px solid var(--border); padding: 8px; height: 48px; appearance: none; border-radius: 0;\\x27><option value=\\x27baro\\x27>BARO</option><option value=\\x27radar\\x27>RADAR</option></select></div>",
      "label": "select-dropdown",
      "stateLabel": "Select dropdown for choosing altitude mode or instrument configuration."
    },
    {
      "name": "toggle-switch",
      "desc": "Toggle switch for night mode or system activation. Styled as a binary illuminated indicator.",
      "html": "<div style='display: flex; align-items: center; gap: 8px;'><label style='font-family: var(--font-body); font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: -0.05em; color: var(--on-bg-muted); line-height: 1;'>NIGHT MODE</label><div style='position: relative; width: 32px; height: 16px; background: var(--bg); border: 1px solid var(--border); cursor: pointer;'><div style='width: 12px; height: 12px; background: var(--secondary-col); position: absolute; top: 1px; left: 1px; transition: left 0ms; left: 18px;'></div></div></div>",
      "label": "toggle-switch",
      "stateLabel": "Toggle switch for night mode or system activation. Styled as a binary illuminated indicator."
    }
  ],
  "extraComponents": [
    {
      "name": "numeric-readout",
      "desc": "Monospaced numeric display with halation glow, used for instant-read values like altitude or heading.",
      "html": "<div style='background: var(--surface); border: 1px solid var(--border); padding: 8px; height: 48px; display: flex; align-items: center; font-family: var(--font-display); font-size: 48px; font-weight: 700; color: var(--on-bg); letter-spacing: 0.025em; font-variant-numeric: tabular-nums; text-shadow: 0 0 4px var(--secondary-col), 0 0 8px var(--secondary-col); line-height: 1;'>350</div>"
    },
    {
      "name": "warning-flag",
      "desc": "Critical warning indicator with red background and black text, used for system failures or alerts.",
      "html": "<div style='background: var(--error); color: #000000; padding: 4px; font-family: var(--font-body); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: -0.05em; line-height: 1; text-align: center; border: none;'>ENG FAIL</div>"
    },
    {
      "name": "crosshair-reticle",
      "desc": "Geometric crosshair indicator used for targeting or aligning sensor data.",
      "html": "<div style='display: flex; align-items: center; justify-content: center; width: 32px; height: 32px;'><svg width='32' height='32' viewBox='0 0 32 32'><circle cx='16' cy='16' r='14' fill='none' stroke='var(--on-bg)' stroke-width='1'/><line x1='16' y1='2' x2='16' y2='30' stroke='var(--on-bg)' stroke-width='1'/><line x1='2' y1='16' x2='30' y2='16' stroke='var(--on-bg)' stroke-width='1'/><circle cx='16' cy='16' r='2' fill='var(--primary)'/></svg></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — SPEED 042 KN</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — ALTITUDE 35,000</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — HEADING: 180°</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — ENGINE STATUS — NORMAL</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — RPM  TRQ  OIL</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Do not use rounded corners on any component — they break the utilitarian cockpit aesthetic.",
      "avoid": {
        "html": "<button style='background: var(--primary); color: var(--on-primary); border: none; border-radius: 8px; padding: 8px;'>ROUND CORNER</button>",
        "label": "Avoid"
      },
      "rule": "Do not use rounded corners on any component — they break the utilitarian cockpit aesthetic.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not apply decorative gradients or drop shadows to containers — only functional halation for text is allowed.",
      "avoid": {
        "html": "<div style='background: linear-gradient(45deg, var(--surface), var(--bg)); box-shadow: 0 4px 6px rgba(0,0,0,0.5); padding: 8px;'>GRADIENT BOX</div>",
        "label": "Avoid"
      },
      "rule": "Do not apply decorative gradients or drop shadows to containers — only functional halation for text is allowed.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not use hover effects that change color, scale, or opacity — the interface must feel instant and mechanical.",
      "avoid": {
        "html": "<button style='background: var(--primary); color: var(--on-primary); border: none; padding: 8px; transition: opacity 0.3s;' onmouseover='this.style.opacity=0.8' onmouseout='this.style.opacity=1'>HOVER FADE</button>",
        "label": "Avoid"
      },
      "rule": "Do not use hover effects that change color, scale, or opacity — the interface must feel instant and mechanical.",
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
  "doAvoidStyle": [
    {
      "desc": "Never use organic shapes or freehand curves; everything must be geometric and grid-aligned.",
      "avoidStyle": "Freehand curves, blobs, swirls"
    },
    {
      "desc": "Never apply soft shadows or excessive blur — only sharp text shadows for halation are permitted.",
      "avoidStyle": "Box shadow with blur, filter: blur()"
    }
  ],
  "effects": [],
  "motion": [],
  "colors": {
    "panel-background": "#0A0A0A",
    "panel-background-variant": "#1A1A1A",
    "text-primary": "#F0F0F0",
    "text-night": "#7FFF7F",
    "text-daylight-alt": "#F5E6A0",
    "accent-amber": "#FFCC00",
    "alert-red": "#FF3B30",
    "outline-day": "#808080",
    "outline-night": "#4A7A7A"
  },
  "typography": {
    "display": {
      "fontFamily": "VT323, monospace",
      "fontSize": "48px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "0.025em",
      "fontVariantNumeric": "tabular-nums"
    },
    "headline": {
      "fontFamily": "Barlow Condensed, sans-serif",
      "fontSize": "24px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "Barlow Condensed, sans-serif",
      "fontSize": "18px",
      "fontWeight": 600,
      "lineHeight": 1.25,
      "letterSpacing": "-0.05em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "Barlow Condensed, sans-serif",
      "fontSize": "14px",
      "fontWeight": 500,
      "lineHeight": 1.5,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "label": {
      "fontFamily": "Barlow Condensed, sans-serif",
      "fontSize": "12px",
      "fontWeight": 500,
      "lineHeight": 1,
      "letterSpacing": "-0.05em",
      "textTransform": "uppercase"
    }
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "0px"
  },
  "spacing": {
    "page-edge": "16px",
    "component-padding": "8px",
    "section-gap": "24px",
    "instrument-gap": "16px",
    "tight-gap": "8px",
    "component-height-sm": "32px",
    "component-height-md": "48px",
    "component-height-lg": "64px",
    "icon-size": "16px"
  },
  "layouts": {
    "copy": {
      "heroKicker": "SYSTEM CHECK v1.0",
      "heroHeadline": "COCKPIT INSTRUMENT PANEL",
      "heroSub": "HIGH-CONTRAST UTILITARIAN INTERFACE FOR OPERATIONAL READINESS UNDER STRESS",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">INITIALIZE</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">CALIBRATE</button>",
      "navLinks": [
        "FLT DIR",
        "NAV",
        "ENG",
        "COMMS",
        "SYS"
      ],
      "features": [
        {
          "title": "NUMERIC READOUT",
          "desc": "MONOSPACED LCD-STYLE DISPLAY WITH HALATION GLOW FOR TIME-CRITICAL DATA",
          "icon": "📟",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📟 NUMERIC READOUT</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">MONOSPACED LCD-STYLE DISPLAY WITH HALATION GLOW FOR TIME-CRITICAL DATA</div></div>"
        },
        {
          "title": "WARNING FLAG",
          "desc": "CRITICAL ALERT PANEL WITH RED BACKGROUND AND FLASHING TEXT INDICATOR",
          "icon": "🚨",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🚨 WARNING FLAG</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">CRITICAL ALERT PANEL WITH RED BACKGROUND AND FLASHING TEXT INDICATOR</div></div>"
        },
        {
          "title": "DIAL GAUGE",
          "desc": "ANALOG METER WITH NEEDLE, TICK MARKS, AND BACKLIT ARC FOR REAL-TIME METRICS",
          "icon": "📊",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📊 DIAL GAUGE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">ANALOG METER WITH NEEDLE, TICK MARKS, AND BACKLIT ARC FOR REAL-TIME METRICS</div></div>"
        },
        {
          "title": "CROSSHAIR RETICLE",
          "desc": "PRECISION TARGETING OVERLAY WITH FINE LINES AND CENTER DOT FOR ALIGNMENT",
          "icon": "🎯",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🎯 CROSSHAIR RETICLE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">PRECISION TARGETING OVERLAY WITH FINE LINES AND CENTER DOT FOR ALIGNMENT</div></div>"
        }
      ],
      "ctaStripHeadline": "READY FOR DEPLOYMENT",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">LAUNCH INTERFACE</button>",
      "sidebarBrand": "CIP",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "INSTRUMENTS",
          "active": true
        },
        {
          "icon": "◉",
          "label": "SYSTEMS",
          "active": false
        }
      ],
      "dashboardTitle": "FLIGHT DECK MONITOR",
      "metrics": [
        {
          "label": "ALTITUDE",
          "value": "35,000 FT",
          "delta": "+1,200",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "AIRSPEED",
          "value": "485 KTS",
          "delta": "-20",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "HEADING",
          "value": "270°",
          "delta": "0",
          "dir": "steady",
          "direction": "steady"
        },
        {
          "label": "FUEL",
          "value": "63%",
          "delta": "-2%",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "ENG TEMP",
          "value": "845°C",
          "delta": "+15°C",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "INSTRUMENT DATA STREAM",
      "panelATitle": "ENGINE MONITOR",
      "panelARows": [
        {
          "label": "N1",
          "value": "92.4%",
          "pct": 92.4
        },
        {
          "label": "N2",
          "value": "88.1%",
          "pct": 88.1
        },
        {
          "label": "FF",
          "value": "1,450 PPH",
          "pct": 1
        },
        {
          "label": "OIL PRESS",
          "value": "65 PSI",
          "pct": 65
        },
        {
          "label": "OIL TEMP",
          "value": "120°C",
          "pct": 100
        }
      ],
      "panelBTitle": "NAVIGATION DATA",
      "panelBCells": [
        {
          "label": "LAT",
          "value": "N37°37'12\"",
          "state": "ok"
        },
        {
          "label": "LON",
          "value": "W122°22'30\"",
          "state": "warn"
        },
        {
          "label": "GS",
          "value": "475 KTS",
          "state": "err"
        },
        {
          "label": "TRK",
          "value": "270°",
          "state": "ok"
        },
        {
          "label": "WIND",
          "value": "240°/35",
          "state": "warn"
        },
        {
          "label": "VAR",
          "value": "14°E",
          "state": "err"
        },
        {
          "label": "MACH",
          "value": "0.78",
          "state": "ok"
        },
        {
          "label": "TAS",
          "value": "510 KTS",
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
            8200,
            8300,
            8450,
            8400,
            8350,
            8500,
            8500,
            8500,
            8500,
            8500,
            8500,
            8500
          ],
          "label": "ENG 1 RPM",
          "axis": "left",
          "color": "#FFCC00"
        },
        {
          "data": [
            8100,
            8150,
            8200,
            8250,
            8300,
            8400,
            8400,
            8400,
            8400,
            8400,
            8400,
            8400
          ],
          "label": "ENG 2 RPM",
          "axis": "right-1",
          "color": "#7FFF7F"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;background:var(--bg);position:relative;overflow:hidden;'; el.innerHTML = '<div style=\"position:absolute;inset:0;background:radial-gradient(ellipse at 50% 80%, rgba(127,255,127,0.04) 0%, transparent 60%);pointer-events:none;\"></div><div style=\"z-index:1;text-align:center;padding:var(--spacing-page-edge, 16px);\"><div style=\"font-family:var(--font-body);font-size:12px;color:var(--primary);letter-spacing:0.12em;text-transform:uppercase;margin-bottom:8px;\">SYSTEM CHECK v1.0</div><h1 style=\"font-family:var(--font-display);font-size:64px;font-weight:700;color:var(--on-bg);line-height:1.1;text-shadow:0 0 6px var(--secondary-col),0 0 12px var(--secondary-col);margin:0 0 16px;letter-spacing:0.025em;\">COCKPIT INSTRUMENT PANEL</h1><p style=\"font-family:var(--font-body);font-size:14px;font-weight:500;color:var(--on-bg-muted);text-transform:uppercase;letter-spacing:-0.025em;max-width:600px;line-height:1.5;margin:0 0 32px;\">HIGH-CONTRAST UTILITARIAN INTERFACE FOR OPERATIONAL READINESS UNDER STRESS</p><div style=\"display:flex;gap:16px;justify-content:center;\"><button style=\"background:var(--primary);color:var(--on-primary);border:none;font-family:var(--font-body);font-size:14px;font-weight:600;text-transform:uppercase;letter-spacing:-0.05em;padding:8px 16px;height:32px;cursor:pointer;box-shadow:var(--bevel-highlight),var(--bevel-shadow);\">INITIALIZE</button><button style=\"background:transparent;color:var(--on-bg);border:1px solid var(--border);font-family:var(--font-body);font-size:14px;font-weight:600;text-transform:uppercase;letter-spacing:-0.05em;padding:8px 16px;height:32px;cursor:pointer;\">CALIBRATE</button></div></div>'; }",
    "showcaseRender": "function(el) { el.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;padding:24px;background:var(--bg);'; var features = ['NUMERIC READOUT','WARNING FLAG','DIAL GAUGE','CROSSHAIR RETICLE']; var descs = ['MONOSPACED LCD-STYLE DISPLAY WITH HALATION GLOW','CRITICAL ALERT PANEL WITH RED BACKGROUND AND FLASHING TEXT','ANALOG METER WITH NEEDLE, TICK MARKS, AND BACKLIT ARC','PRECISION TARGETING OVERLAY WITH FINE LINES AND CENTER DOT']; var icons = ['📟','🚨','📊','🎯']; for(var i=0;i<features.length;i++){ var card=document.createElement('div'); card.style.cssText='border:1px solid var(--border);background:var(--surface);padding:16px;display:flex;flex-direction:column;gap:12px;'; card.innerHTML='<div style=\"font-family:var(--font-body);font-size:12px;color:var(--primary);letter-spacing:0.1em;text-transform:uppercase;\">'+icons[i]+' '+features[i]+'</div><div style=\"font-family:var(--font-body);font-size:11px;color:var(--on-bg-muted);line-height:1.5;\">'+descs[i]+'</div>'; el.appendChild(card); } }",
    "panelCRender": "function(el) { el.style.cssText = 'padding:16px;border:1px solid var(--border);background:var(--bg);'; el.innerHTML = '<div style=\"font-family:var(--font-body);font-size:12px;color:var(--primary);letter-spacing:0.12em;margin-bottom:12px;\">FLIGHT DECK MONITOR — METRICS</div><div style=\"display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:8px;\"><div style=\"border:1px solid var(--border);background:var(--surface);padding:8px;text-align:center;\"><div style=\"font-family:var(--font-body);font-size:10px;color:var(--on-bg-muted);letter-spacing:0.05em;\">ALTITUDE</div><div style=\"font-family:var(--font-display);font-size:24px;font-weight:700;color:var(--on-bg);text-shadow:0 0 4px var(--secondary-col);\">35,000 FT</div><div style=\"font-size:10px;color:var(--success);\">▲ +1,200</div></div><div style=\"border:1px solid var(--border);background:var(--surface);padding:8px;text-align:center;\"><div style=\"font-family:var(--font-body);font-size:10px;color:var(--on-bg-muted);letter-spacing:0.05em;\">AIRSPEED</div><div style=\"font-family:var(--font-display);font-size:24px;font-weight:700;color:var(--on-bg);text-shadow:0 0 4px var(--secondary-col);\">485 KTS</div><div style=\"font-size:10px;color:var(--error);\">▼ -20</div></div><div style=\"border:1px solid var(--border);background:var(--surface);padding:8px;text-align:center;\"><div style=\"font-family:var(--font-body);font-size:10px;color:var(--on-bg-muted);letter-spacing:0.05em;\">HEADING</div><div style=\"font-family:var(--font-display);font-size:24px;font-weight:700;color:var(--on-bg);text-shadow:0 0 4px var(--secondary-col);\">270°</div><div style=\"font-size:10px;color:var(--primary);\">• 0</div></div><div style=\"border:1px solid var(--border);background:var(--surface);padding:8px;text-align:center;\"><div style=\"font-family:var(--font-body);font-size:10px;color:var(--on-bg-muted);letter-spacing:0.05em;\">FUEL</div><div style=\"font-family:var(--font-display);font-size:24px;font-weight:700;color:var(--on-bg);text-shadow:0 0 4px var(--secondary-col);\">63%</div><div style=\"font-size:10px;color:var(--error);\">▼ -2%</div></div><div style=\"border:1px solid var(--border);background:var(--surface);padding:8px;text-align:center;\"><div style=\"font-family:var(--font-body);font-size:10px;color:var(--on-bg-muted);letter-spacing:0.05em;\">ENG TEMP</div><div style=\"font-family:var(--font-display);font-size:24px;font-weight:700;color:var(--on-bg);text-shadow:0 0 4px var(--secondary-col);\">845°C</div><div style=\"font-size:10px;color:var(--success);\">▲ +15°C</div></div></div>'; }",
    "heroBackground": "function(el) { el.style.background = 'var(--bg)'; el.style.backgroundImage = 'radial-gradient(ellipse at 50% 80%, rgba(127,255,127,0.06) 0%, transparent 60%)'; }",
    "ctaBackground": "function(el) { el.style.background = 'var(--bg)'; el.style.backgroundImage = 'linear-gradient(180deg, var(--surface) 0%, var(--bg) 100%)'; el.style.borderTop = '1px solid var(--border)'; el.style.borderBottom = '1px solid var(--border)'; }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText='height:1px;background:var(--border);margin:24px 0;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = 'var(--bg)'; el.style.backgroundImage = 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(128,128,128,0.02) 2px, rgba(128,128,128,0.02) 4px)'; }",
    "surfaceOverlay": "function(el) { var grain=document.createElement('div'); grain.style.cssText='position:absolute;inset:0;z-index:2;pointer-events:none;background-image:url(\"data:image/svg+xml,%3Csvg viewBox=\\'0 0 256 256\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'grain\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.65\\' numOctaves=\\'3\\' stitchTiles=\\'stitch\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23grain)\\' opacity=\\'0.05\\'/%3E%3C/svg%3E\");background-repeat:repeat;background-size:256px 256px;opacity:0.5;'; el.appendChild(grain); }"
  },
  "ambientCanvas": "function(container,tick) { var canvas=document.createElement('canvas'); canvas.style.cssText='position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:3;opacity:0.15;'; canvas.width=container.offsetWidth||100; canvas.height=container.offsetHeight||100; var ctx=canvas.getContext('2d'); var w=canvas.width, h=canvas.height; for(var i=0;i<60;i++){ var x=Math.random()*w; var y=Math.random()*h; var r=Math.random()*1.5; var alpha=Math.random()*0.3; ctx.beginPath(); ctx.arc(x,y,r,0,2*Math.PI); ctx.fillStyle='rgba(127,255,127,'+alpha+')'; ctx.fill(); } return canvas; }",
  "shadcnTokens": {
    "--color-background": "#0A0A0A",
    "--color-popover": "#0A0A0A",
    "--color-foreground": "#F0F0F0",
    "--color-card-foreground": "#F0F0F0",
    "--color-popover-foreground": "#F0F0F0",
    "--color-card": "#1A1A1A",
    "--color-muted": "#1A1A1A",
    "--color-muted-foreground": "#808080",
    "--color-primary": "#FFCC00",
    "--color-ring": "#FFCC00",
    "--color-primary-foreground": "#000000",
    "--color-secondary": "#7FFF7F",
    "--color-accent": "#7FFF7F",
    "--color-secondary-foreground": "#000000",
    "--color-accent-foreground": "#000000",
    "--color-border": "#808080",
    "--color-input": "#808080",
    "--color-destructive": "#FF3B30"
  },
  "shadcnTokensClassic": {
    "--background": "#0A0A0A",
    "--popover": "#0A0A0A",
    "--foreground": "#F0F0F0",
    "--card-foreground": "#F0F0F0",
    "--popover-foreground": "#F0F0F0",
    "--card": "#1A1A1A",
    "--muted": "#1A1A1A",
    "--muted-foreground": "#808080",
    "--primary": "#FFCC00",
    "--ring": "#FFCC00",
    "--primary-foreground": "#000000",
    "--secondary": "#7FFF7F",
    "--accent": "#7FFF7F",
    "--secondary-foreground": "#000000",
    "--accent-foreground": "#000000",
    "--border": "#808080",
    "--input": "#808080",
    "--destructive": "#FF3B30"
  }
});
