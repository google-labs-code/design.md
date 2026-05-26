registerSystem({
  "meta": {
    "name": "1981 MTV On-Air Graphics System",
    "tagline": "Channels the raw, lo-fi punk energy of MTV's 1981 broadcast launch.",
    "mode": "dark",
    "fontImport": "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Permanent+Marker&display=swap"
  },
  "yamlTokens": {
    "name": "1981 MTV On-Air Graphics System",
    "colors": {
      "color": "#FFFFFF",
      "track": "#000000"
    },
    "typography": {
      "display": {
        "fontFamily": "Permanent Marker",
        "fontSize": "48px",
        "fontWeight": 900,
        "lineHeight": 1,
        "letterSpacing": "-0.05em",
        "textTransform": "normal-case"
      },
      "headline": {
        "fontFamily": "Permanent Marker",
        "fontSize": "36px",
        "fontWeight": 800,
        "lineHeight": 1.25,
        "letterSpacing": "-0.05em",
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
        "fontFamily": "Barlow Condensed",
        "fontSize": "18px",
        "fontWeight": 700,
        "lineHeight": 1.375,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "label": {
        "fontFamily": "Barlow Condensed",
        "fontSize": "14px",
        "fontWeight": 700,
        "lineHeight": 1.25,
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
      "component-internal": "8px",
      "section-internal": "16px",
      "gap-component": "8px",
      "gap-section": "16px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "#FF00FF",
        "textColor": "#FFFFFF",
        "rounded": "{rounded.default}",
        "padding": "8px",
        "height": "32px"
      },
      "button-primary-hover": "{\"backgroundColor\": \"#FF00FF\", \"textColor\": \"#FFFFFF\", \"filter\": \"brightness(1.3)\", \"transform\": \"scale(1.05)\", \"boxShadow\": \"0 0 16px #FF00FF\", \"transition\": \"all 83ms steps(1)\"}",
      "card": {
        "backgroundColor": "#000000",
        "textColor": "#FFFFFF",
        "rounded": "{rounded.default}",
        "padding": "16px"
      },
      "input": {
        "backgroundColor": "#000000",
        "textColor": "#FFFFFF",
        "rounded": "{rounded.default}",
        "padding": "8px",
        "onfocus": "this.style.borderColor='#00FFFF'; this.style.textShadow='2px 0 #FF00FF, -2px 0 #00FFFF'"
      },
      "input-focus": {
        "backgroundColor": "#000000",
        "textColor": "#FFFFFF",
        "rounded": "{rounded.default}"
      }
    },
    "version": "alpha",
    "description": "Channels the raw, lo-fi punk energy of MTV's 1981 broadcast launch. Embraces analog video artifacts, a rebellious tone, and a limited palette of high-saturation primaries on a black void.",
    "provenance": {
      "coverage_status": "minimal",
      "identity_description": "The slug `mtv-on-air-graphics-system-1981` refers to the original on‑air broadcast identity and graphics package used by MTV (Music Television) from its launch on 1 August 1981 through approximately the mid‑1980s. This system comprised animated station‑identification sequences, the graffiti‑inspired custom logotype (designed by Manhattan Design), a limited high‑contrast colour palette, lower‑third",
      "manual_enrichment_required": true,
      "imagery_count": 1,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "www.cooperhewitt.org",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://www.cooperhewitt.org/",
          "host": "www.cooperhewitt.org",
          "institution": "Cooper Hewitt, Smithsonian Design Museum",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": [
        {
          "name": "custom MTV wordmark lettering",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "attested"
        },
        {
          "name": "Helvetica Bold",
          "foundry": null,
          "year": null,
          "google_fonts": "Inter",
          "attestation": "conventional"
        },
        {
          "name": "Akzidenz-Grotesk",
          "foundry": null,
          "year": null,
          "google_fonts": "Archivo",
          "attestation": "unverified"
        },
        {
          "name": "Futura Bold/Heavy",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "attestation": "unverified"
        }
      ],
      "flags": [
        "one_usable_url_only",
        "1_rate_limited_urls_pending_retry"
      ],
      "honest_gaps": [
        "1. **No surviving official style guide** – all design decisions were ad‑hoc."
      ]
    }
  },
  "colorMode": "dark",
  "tokens": {
    "--bg": "#000000",
    "--on-bg": "#FFFFFF",
    "--primary": "#FF00FF",
    "--on-primary": "#000000",
    "--secondary-col": "#00FFFF",
    "--on-secondary": "#000000",
    "--surface": "#000000",
    "--on-bg-muted": "#888888",
    "--border": "#FFFFFF",
    "--error": "#FF0000",
    "--font-display": "Permanent Marker",
    "--font-body": "Barlow Condensed",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px",
    "--tertiary": "#FFFF00",
    "--success": "#00FF00"
  },
  "semanticColors": {
    "info": "#00FFFF",
    "success": "#00FF00",
    "warning": "#FFFF00",
    "error": "#FF0000",
    "err": "#FF0000",
    "ok": "#00FF00",
    "warn": "#FFFF00",
    "deltaUp": "#00FF00",
    "deltaDown": "#FF0000",
    "deltaFlat": "#888888",
    "live": "#FF00FF",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#888888",
    "chartFont": "Barlow Condensed"
  },
  "elevation": {
    "flat": {
      "offsetX": 2,
      "offsetY": 2,
      "blur": 0,
      "color": "#000000"
    },
    "none": {
      "offsetX": 0,
      "offsetY": 0,
      "blur": 0,
      "color": "transparent"
    }
  },
  "surfaceModel": "flat",
  "materialSimulation": {
    "model": "crt-screen",
    "params": {
      "scanlines": true,
      "staticNoise": true,
      "chromaticAberration": true,
      "vignette": true,
      "trackingNoise": true,
      "globalFilter": "brightness(1.2) contrast(1.4)",
      "compositingStack": [
        "background (#000000)",
        "content shapes",
        "glow trails / hard drop shadows",
        "chromatic aberration offsets",
        "VHS tracking noise (intermittent)",
        "CRT scanlines (overlay)",
        "VHS static noise (overlay)",
        "CRT vignette (radial gradient)"
      ]
    }
  },
  "globalFilter": "<svg style='position:absolute;width:0;height:0'><defs><filter id='crt-scanlines' x='0' y='0' width='100%' height='100%'><feColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.3 0' /><feBlend mode='multiply' in2='SourceGraphic' /></filter><filter id='vhs-static' x='0' y='0' width='100%' height='100%'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch' result='noise'/><feColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.15 0' in='noise' result='coloredNoise'/><feBlend mode='screen' in='SourceGraphic' in2='coloredNoise'/></filter><filter id='chromatic-aberration' x='-2' y='-2' width='104%' height='104%'><feOffset dx='-2' dy='0' in='SourceAlpha' result='redShift'/><feColorMatrix type='matrix' values='1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0' in='redShift' result='redChannel'/><feOffset dx='2' dy='0' in='SourceAlpha' result='blueShift'/><feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0' in='blueShift' result='blueChannel'/><feBlend mode='screen' in='redChannel' in2='blueChannel' result='chroma'/><feBlend mode='normal' in='SourceGraphic' in2='chroma'/></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-body), 'Barlow Condensed', sans-serif; background-color: var(--bg); color: var(--on-bg); -webkit-font-smoothing: none; -moz-osx-font-smoothing: unset; font-smoothing: none; image-rendering: pixelated; text-rendering: optimizeSpeed;",
  "globalCss": ".ds-layout-frame ::selection { background: rgba(255,0,255,0.3); color: #FFFFFF; } .ds-layout-frame ::-webkit-scrollbar { width: 6px; } .ds-layout-frame ::-webkit-scrollbar-track { background: #000000; } .ds-layout-frame ::-webkit-scrollbar-thumb { background: #FF00FF; } .ds-layout-frame .noise-frame-border { background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12'%3E%3Crect width='12' height='12' fill='%23000' /%3E%3Crect x='0' y='0' width='2' height='2' fill='%23fff' opacity='0.3' /%3E%3C/svg%3E\"); background-repeat: repeat; pointer-events: none; } .ds-layout-frame .diagonal-slash { background: linear-gradient(135deg, transparent 45%, #00FFFF 45%, #00FFFF 55%, transparent 55%); } .ds-layout-frame .misregistration-ghost { position: relative; } .ds-layout-frame .misregistration-ghost::after { content: attr(data-text); position: absolute; top: 2px; left: 2px; color: #FF00FF; opacity: 0.6; } .ds-layout-frame { filter: url(#crt-scanlines) url(#vhs-static); }",
  "interactionModel": {
    "hover": {
      "transform": "scale(1.05)",
      "transition": "transform 83ms steps(1)"
    },
    "focus": {
      "borderColor": "var(--secondary-col)",
      "boxShadow": "var(--secondary-col) 0 0 4px",
      "transform": "scale(1.02) translateX(2px)",
      "transition": "all 83ms steps(1)"
    },
    "active": {
      "transform": "translate(2px, 2px)",
      "boxShadow": "none",
      "transition": "0ms"
    }
  },
  "interactionStyles": ".ds-layout-frame { transition: transform 83ms steps(1), opacity 83ms steps(1); } .ds-layout-frame .strobe-element { animation: strobe 0.1667s steps(1) infinite; } .ds-layout-frame .logo-pop { animation: logo-pop 0.5s steps(1); } @keyframes strobe { 0%, 100% { opacity: 1; } 50% { opacity: 0; } } @keyframes logo-pop { 0% { transform: scale(1.2); } 100% { transform: scale(1); } } @keyframes vertical-hold-roll { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(20px); } } @keyframes static-drift { 0% { background-position: 0 0; } 100% { background-position: 1px 1px; } } .ds-layout-frame .vhs-tracking-noise { animation: vertical-hold-roll 8s linear infinite; } .ds-layout-frame .static-drift { animation: static-drift 2s linear infinite; }",
  "chartStyle": {
    "type": "bar",
    "barColors": [
      "var(--primary)",
      "var(--secondary-col)",
      "var(--error)"
    ],
    "background": "var(--bg)",
    "borderColor": "var(--border)",
    "borderWidth": 2,
    "fontFamily": "var(--font-body)",
    "fontColor": "var(--on-bg)",
    "labelTransform": "uppercase",
    "tooltip": false,
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#888888"
  },
  "dashboardStyle": {
    "layout": "lower-third-bumper",
    "density": "high with overlapping elements",
    "panelTreatment": "solid black panels with hot pink 4px borders",
    "dataVizStyle": "bar charts with neon cyan/magenta bars on black, 2px white border",
    "signatureElement": "strobe animation on active data points"
  },
  "landingStyle": {
    "heroApproach": "off-center logo with diagonal slash and misregistration ghost",
    "scrollBehavior": "none (static frame with intermittent vertical-hold-roll)",
    "ctaStyle": "hot pink button with 12fps strobe on hover",
    "signatureMoment": "logo morphs through video-synth shapes on load with chromatic aberration"
  },
  "buttons": [
    {
      "name": "button-primary",
      "desc": "Hot pink filled button with white text, 4px border, no radius. Triggers strobe on hover.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--primary); color: var(--on-primary); border: 4px solid var(--primary); font-family: var(--font-body); font-size: 14px; text-transform: uppercase; padding: 8px; height: 32px; border-radius: var(--radius-default); cursor: pointer; transition: transform 83ms steps(1);\">PLAY</button>",
      "label": "button-primary",
      "note": "Hot pink filled button with white text, 4px border, no radius. Triggers strobe on hover."
    },
    {
      "name": "button-secondary",
      "desc": "Cyan filled button with white text, 4px border, no radius.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--secondary-col); color: var(--on-bg); border: 4px solid var(--secondary-col); font-family: var(--font-body); font-size: 14px; text-transform: uppercase; padding: 8px; height: 32px; border-radius: var(--radius-default); cursor: pointer; transition: transform 83ms steps(1);\">STOP</button>",
      "label": "button-secondary",
      "note": "Cyan filled button with white text, 4px border, no radius."
    },
    {
      "name": "button-ghost",
      "desc": "Transparent button with hot pink border and text, no radius.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: transparent; color: var(--primary); border: 4px solid var(--primary); font-family: var(--font-body); font-size: 14px; text-transform: uppercase; padding: 8px; height: 32px; border-radius: var(--radius-default); cursor: pointer; transition: transform 83ms steps(1);\">PAUSE</button>",
      "label": "button-ghost",
      "note": "Transparent button with hot pink border and text, no radius."
    }
  ],
  "cards": [
    {
      "name": "card-default",
      "desc": "Black background card with hot pink border and white text. Contains a headline and body text.",
      "html": "<div style=\"background-color: var(--bg); color: var(--on-bg); border: 4px solid var(--primary); border-radius: var(--radius-default); padding: 16px; font-family: var(--font-body); text-transform: uppercase;\"><div style=\"font-family: var(--font-display); font-size: 24px; margin-bottom: 8px; text-shadow: 2px 0 var(--primary), -2px 0 var(--secondary-col);\">NOW PLAYING</div><div style=\"font-size: 18px; line-height: 1.375;\">THE CURE — A FOREST</div></div>",
      "label": "card-default",
      "note": "Black background card with hot pink border and white text. Contains a headline and body text."
    },
    {
      "name": "card-accent",
      "desc": "Hot pink background card with black text and white border.",
      "html": "<div style=\"background-color: var(--primary); color: var(--on-primary); border: 4px solid var(--border); border-radius: var(--radius-default); padding: 16px; font-family: var(--font-body); text-transform: uppercase;\"><div style=\"font-family: var(--font-display); font-size: 24px; margin-bottom: 8px; text-shadow: 2px 0 var(--secondary-col), -2px 0 var(--error);\">VIDEO COUNTDOWN</div><div style=\"font-size: 18px; line-height: 1.375;\">5:40 REMAINING</div></div>",
      "label": "card-accent",
      "note": "Hot pink background card with black text and white border."
    }
  ],
  "forms": [
    {
      "name": "text-input",
      "desc": "Black background text input with hot pink border and white placeholder text. On focus, border turns cyan.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px;\"><label style=\"font-family: var(--font-body); font-size: 14px; text-transform: uppercase; color: var(--on-bg); letter-spacing: 0.05em;\">SEARCH</label><input type=\"text\" placeholder=\"ARTIST OR SONG\" style=\"background-color: var(--bg); color: var(--on-bg); border: 4px solid var(--primary); border-radius: var(--radius-default); padding: 8px; font-family: var(--font-body); font-size: 18px; text-transform: uppercase; outline: none;\" onfocus=\"this.style.borderColor='var(--secondary-col)'; this.style.textShadow='2px 0 var(--primary), -2px 0 var(--secondary-col)'\" onblur=\"this.style.borderColor='var(--primary)'; this.style.textShadow='none'\"/></div>",
      "label": "text-input",
      "stateLabel": "Black background text input with hot pink border and white placeholder text. On focus, border turns cyan."
    },
    {
      "name": "select",
      "desc": "Black background select dropdown with hot pink border and white text. Arrow is hot pink.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px;\"><label style=\"font-family: var(--font-body); font-size: 14px; text-transform: uppercase; color: var(--on-bg); letter-spacing: 0.05em;\">GENRE</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--bg); color: var(--on-bg); border: 4px solid var(--primary); border-radius: var(--radius-default); padding: 8px; font-family: var(--font-body); font-size: 18px; text-transform: uppercase; appearance: none; background-image: linear-gradient(45deg, transparent 50%, var(--primary) 50%), linear-gradient(135deg, var(--primary) 50%, transparent 50%); background-position: calc(100% - 12px) calc(50% + 2px), calc(100% - 8px) calc(50% - 2px); background-size: 8px 8px, 8px 8px; background-repeat: no-repeat; padding-right: 32px;\"><option>NEW WAVE</option><option>PUNK</option><option>POP</option></select></div>",
      "label": "select",
      "stateLabel": "Black background select dropdown with hot pink border and white text. Arrow is hot pink."
    },
    {
      "name": "checkbox",
      "desc": "Hot pink border square with white checkmark. Label is uppercase.",
      "html": "<div style=\"display: flex; align-items: center; gap: 8px;\"><div style=\"width: 20px; height: 20px; border: 4px solid var(--primary); background-color: var(--bg); display: flex; align-items: center; justify-content: center;\"><span style=\"color: var(--on-bg); font-size: 14px; line-height: 1;\">✓</span></div><label style=\"font-family: var(--font-body); font-size: 18px; text-transform: uppercase; color: var(--on-bg);\">EXPLICIT LYRICS</label></div>",
      "label": "checkbox",
      "stateLabel": "Hot pink border square with white checkmark. Label is uppercase."
    }
  ],
  "extraComponents": [
    {
      "name": "lower-third-bumper",
      "desc": "Full-width hot pink bar with white text, top and bottom white borders. Displays artist and song separated by a vertical line.",
      "html": "<div style=\"width: 100%; height: 48px; background-color: var(--primary); color: var(--on-bg); border-top: 2px solid var(--border); border-bottom: 2px solid var(--border); display: flex; align-items: center; justify-content: space-between; padding: 0 16px; font-family: var(--font-body); font-size: 18px; text-transform: uppercase; letter-spacing: -0.025em;\"><span>THE CURE</span><span style=\"color: var(--on-bg); opacity: 0.5;\">|</span><span>A FOREST</span></div>"
    },
    {
      "name": "diagonal-slash",
      "desc": "Cyan diagonal stripe used as a divider or background accent.",
      "html": "<div style=\"width: 100%; height: 8px; background-color: var(--secondary-col); clip-path: polygon(0 100%, 100% 0, 100% 100%);\"></div>"
    },
    {
      "name": "misregistration-ghost",
      "desc": "Duplicate of an element offset by 4px in cyan at 60% opacity. Wraps a text block to create a ghosting effect.",
      "html": "<div style=\"position: relative;\"><div style=\"position: absolute; top: 4px; left: 4px; color: var(--secondary-col); opacity: 0.6; font-family: var(--font-body); font-size: 18px; text-transform: uppercase; pointer-events: none;\">MUSIC TELEVISION</div><div style=\"color: var(--on-bg); font-family: var(--font-body); font-size: 18px; text-transform: uppercase;\">MUSIC TELEVISION</div></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — MTV</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — BREAKING NEWS</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — VIDEO PREMIERE</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — THE CURE — A FOREST (LIVE)</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — 09:42 PM</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Never use rounded corners on interactive elements or cards. This system has zero border-radius.",
      "avoid": {
        "html": "<button style=\"background-color: var(--primary); color: var(--on-primary); border-radius: 8px; padding: 8px;\">SMOOTH BUTTON</button>",
        "label": "Avoid"
      },
      "rule": "Never use rounded corners on interactive elements or cards. This system has zero border-radius.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Avoid smooth gradients or anti-aliased edges. All fills are solid, edges are hard.",
      "avoid": {
        "html": "<div style=\"background: linear-gradient(to right, var(--primary), var(--secondary-col)); color: var(--on-bg); padding: 16px;\">GRADIENT CARD</div>",
        "label": "Avoid"
      },
      "rule": "Avoid smooth gradients or anti-aliased edges. All fills are solid, edges are hard.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not use lowercase text. All body, headline, and label text must be uppercase.",
      "avoid": {
        "html": "<div style=\"font-family: var(--font-body); font-size: 18px; text-transform: none; color: var(--on-bg);\">This is lowercase</div>",
        "label": "Avoid"
      },
      "rule": "Do not use lowercase text. All body, headline, and label text must be uppercase.",
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
  "effects": [],
  "motion": [],
  "colors": {
    "background": "#000000",
    "primary": "#FF00FF",
    "secondary": "#00FFFF",
    "tertiary": "#FFFF00",
    "error": "#FF0000",
    "success": "#00FF00",
    "neutral": "#FFFFFF",
    "on-primary": "#000000",
    "on-surface": "#FFFFFF"
  },
  "typography": {
    "display": {
      "fontFamily": "Permanent Marker",
      "fontSize": "48px",
      "fontWeight": 900,
      "lineHeight": 1,
      "letterSpacing": "-0.05em"
    },
    "headline": {
      "fontFamily": "Barlow Condensed",
      "fontSize": "36px",
      "fontWeight": 800,
      "lineHeight": 1.25,
      "letterSpacing": "-0.05em",
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
      "fontFamily": "Barlow Condensed",
      "fontSize": "18px",
      "fontWeight": 700,
      "lineHeight": 1.375,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "label": {
      "fontFamily": "Barlow Condensed",
      "fontSize": "14px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "0.05em",
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
    "component-internal": "8px",
    "section-internal": "16px",
    "gap-component": "8px",
    "gap-section": "16px"
  },
  "layouts": {
    "copy": {
      "heroKicker": "BROADCAST READY",
      "heroHeadline": "1981 MTV ON-AIR GRAPHICS SYSTEM",
      "heroSub": "RAW PUNK ENERGY. ANALOG ARTIFACTS. ZERO ROUNDED CORNERS.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">INITIALIZE STATION</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">VIEW STATIC</button>",
      "navLinks": [
        "SIGNAL",
        "CHROMA",
        "GHOST",
        "STATIC",
        "VHS"
      ],
      "features": [
        {
          "title": "PURE NEON PALETTE",
          "desc": "ONLY PRIMARY HEX VALUES: HOT PINK, CYAN, YELLOW, RED, GREEN, WHITE ON BLACK VOID.",
          "icon": "🟢",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🟢 PURE NEON PALETTE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">ONLY PRIMARY HEX VALUES: HOT PINK, CYAN, YELLOW, RED, GREEN, WHITE ON BLACK VOID.</div></div>"
        },
        {
          "title": "CRT SCANLINES",
          "desc": "OVERLAY PROVIDES AUTHENTIC ANALOG VIDEO ARTIFACTS. HARD DROP SHADOWS, NO BLUR.",
          "icon": "📺",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📺 CRT SCANLINES</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">OVERLAY PROVIDES AUTHENTIC ANALOG VIDEO ARTIFACTS. HARD DROP SHADOWS, NO BLUR.</div></div>"
        },
        {
          "title": "CHROMATIC ABERRATION",
          "desc": "TEXT-SHADOW WITH OFFSET CYAN AND MAGENTA GHOSTS. ALL TEXT UPPERCASE BOLD CONDENSED.",
          "icon": "🌀",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🌀 CHROMATIC ABERRATION</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">TEXT-SHADOW WITH OFFSET CYAN AND MAGENTA GHOSTS. ALL TEXT UPPERCASE BOLD CONDENSED.</div></div>"
        },
        {
          "title": "12FPS STEPPED MOTION",
          "desc": "NO SMOOTH TRANSITIONS. STROBE EFFECTS ON ACTIVE STATES. VHS TRACKING NOISE.",
          "icon": "⏺️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⏺️ 12FPS STEPPED MOTION</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">NO SMOOTH TRANSITIONS. STROBE EFFECTS ON ACTIVE STATES. VHS TRACKING NOISE.</div></div>"
        }
      ],
      "ctaStripHeadline": "CLAIM YOUR BROADCAST SLOT",
      "ctaStripHtml": "<div class=\"lower-third-bumper\">CHANNEL 1981 // LAUNCH SEQUENCE</div>",
      "sidebarBrand": "MTV GRAPHICS SYSTEM",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "STATION ID",
          "active": true
        },
        {
          "icon": "◉",
          "label": "LOWER THIRD",
          "active": false
        }
      ],
      "dashboardTitle": "ON-AIR CONTROL ROOM",
      "metrics": [
        {
          "label": "SIGNAL STRENGTH",
          "value": "87%",
          "delta": "+12%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "STATIC NOISE",
          "value": "42 KHZ",
          "delta": "-8%",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "PIXEL COUNT",
          "value": "256",
          "delta": "0",
          "dir": "neutral",
          "direction": "neutral"
        },
        {
          "label": "CHROMA BLEED",
          "value": "2PX",
          "delta": "+1PX",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "VIEWER RETENTION BY FRAME GLITCH",
      "panelATitle": "ACTIVE CHANNELS",
      "panelARows": [
        {
          "label": "MTV EAST",
          "value": "ON AIR",
          "pct": 0
        },
        {
          "label": "MTV WEST",
          "value": "STATIC",
          "pct": 0
        },
        {
          "label": "VH1",
          "value": "OFFLINE",
          "pct": 0
        },
        {
          "label": "COMEDY CENTRAL",
          "value": "GLITCHING",
          "pct": 0
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "NOISE PROFILE",
      "panelBCells": [
        {
          "label": "HORIZONTAL SYNC",
          "value": "OK",
          "state": "ok"
        },
        {
          "label": "VERTICAL HOLD",
          "value": "ROLLING",
          "state": "warn"
        },
        {
          "label": "COLOR BURST",
          "value": "DRIFT",
          "state": "err"
        },
        {
          "label": "SCAN SPEED",
          "value": "60 HZ",
          "state": "ok"
        },
        {
          "label": "STATIC DENSITY",
          "value": "0.8",
          "state": "warn"
        },
        {
          "label": "TRACKING ERROR",
          "value": "2 FRAMES",
          "state": "err"
        },
        {
          "label": "SIGNAL-TO-NOISE",
          "value": "12 DB",
          "state": "ok"
        },
        {
          "label": "VIGNETTE",
          "value": "ACTIVE",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "1:00",
        "1:30",
        "2:00",
        "2:30",
        "3:00",
        "3:30"
      ],
      "series": [
        {
          "data": [
            12,
            19,
            8,
            15,
            22,
            10,
            10,
            10,
            10,
            10,
            10,
            10
          ],
          "label": "GLITCH COUNT",
          "axis": "left",
          "color": "#FF00FF"
        },
        {
          "data": [
            5,
            15,
            20,
            10,
            12,
            18,
            18,
            18,
            18,
            18,
            18,
            18
          ],
          "label": "STATIC INTENSITY",
          "axis": "right-1",
          "color": "#00FFFF"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'min-height:400px;background:#000;overflow:hidden;position:relative;'; el.innerHTML = '<div style=\"position:absolute;top:10%;left:5%;width:60%;z-index:2;\"><div style=\"font-family:var(--font-display);font-size:72px;font-weight:900;color:var(--primary);text-shadow:4px 0 var(--primary),-2px 0 var(--secondary-col),0 0 8px var(--primary);line-height:1;letter-spacing:-0.05em;text-transform:normal-case;\">MTV</div><div style=\"position:absolute;top:2px;left:2px;color:var(--secondary-col);opacity:0.6;font-family:var(--font-display);font-size:72px;font-weight:900;pointer-events:none;text-shadow:2px 0 var(--primary),-2px 0 var(--secondary-col);\">MTV</div></div><div style=\"position:absolute;bottom:0;right:0;width:100%;height:12px;background:repeating-linear-gradient(45deg,transparent,transparent 4px,rgba(255,255,255,0.4) 4px,rgba(255,255,255,0.4) 8px);pointer-events:none;\"></div><div style=\"position:absolute;top:40%;left:70%;width:120px;height:80px;clip-path:polygon(0 0,100% 0,80% 100%,0% 100%);background:var(--secondary-col);opacity:0.5;\"></div>'; }",
    "showcaseRender": "function(el) { el.style.cssText = 'display:flex;flex-wrap:wrap;gap:16px;padding:16px;background:#000;'; var features = [{\"title\":\"PURE NEON PALETTE\",\"desc\":\"ONLY PRIMARY HEX VALUES: HOT PINK, CYAN, YELLOW, RED, GREEN, WHITE ON BLACK VOID.\",\"icon\":\"🟢\"},{\"title\":\"CRT SCANLINES\",\"desc\":\"OVERLAY PROVIDES AUTHENTIC ANALOG VIDEO ARTIFACTS. HARD DROP SHADOWS, NO BLUR.\",\"icon\":\"📺\"},{\"title\":\"CHROMATIC ABERRATION\",\"desc\":\"TEXT-SHADOW WITH OFFSET CYAN AND MAGENTA GHOSTS. ALL TEXT UPPERCASE BOLD CONDENSED.\",\"icon\":\"🌀\"},{\"title\":\"12FPS STEPPED MOTION\",\"desc\":\"NO SMOOTH TRANSITIONS. STROBE EFFECTS ON ACTIVE STATES. VHS TRACKING NOISE.\",\"icon\":\"⏺️\"}]; for (var i = 0; i < features.length; i++) { var card = document.createElement('div'); card.style.cssText = 'flex:1 1 200px;border:4px solid var(--primary);background:#000;padding:16px;color:var(--on-bg);font-family:var(--font-body);text-transform:uppercase;'; card.innerHTML = '<div style=\"font-family:var(--font-display);font-size:14px;font-weight:700;color:var(--primary);margin-bottom:8px;\">' + features[i].icon + ' ' + features[i].title + '</div><div style=\"font-size:12px;line-height:1.4;color:#fff;\">' + features[i].desc + '</div>'; el.appendChild(card); } }",
    "panelCRender": "function(el) { el.style.cssText = 'background:#000;border:4px solid var(--primary);padding:16px;font-family:var(--font-body);color:var(--on-bg);text-transform:uppercase;'; el.innerHTML = '<div style=\"font-family:var(--font-display);font-size:24px;color:var(--secondary-col);margin-bottom:16px;text-shadow:2px 0 var(--primary),-2px 0 var(--secondary-col);\">ON-AIR CONTROL ROOM</div><div style=\"display:grid;grid-template-columns:1fr auto;gap:8px;\"><span>SIGNAL STRENGTH</span><span style=\"color:var(--success);\">87%</span><span>STATIC NOISE</span><span style=\"color:var(--warn);\">42 KHZ</span><span>PIXEL COUNT</span><span style=\"color:var(--on-bg-muted);\">256</span><span>CHROMA BLEED</span><span style=\"color:var(--error);\">2PX</span></div>'; }",
    "heroBackground": "function(el) { el.style.background = '#000000'; }",
    "ctaBackground": "function(el) { el.style.background = '#000000'; }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'height:8px;background:var(--secondary-col);clip-path:polygon(0 0,100% 0,85% 100%,0% 100%);margin:0;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = '#000000'; }",
    "surfaceOverlay": "function(el) { var scanlines = document.createElement('div'); scanlines.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;background:repeating-linear-gradient(0deg,rgba(0,0,0,0.4) 0px,rgba(0,0,0,0.4) 2px,transparent 2px,transparent 4px);mix-blend-mode:overlay;'; el.appendChild(scanlines); var noise = document.createElement('div'); noise.style.cssText = 'position:absolute;inset:0;z-index:3;pointer-events:none;opacity:0.15;background-image:url(\"data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'4\\' height=\\'4\\'%3E%3Crect width=\\'4\\' height=\\'4\\' fill=\\'%23000\\'/%3E%3Crect x=\\'0\\' y=\\'0\\' width=\\'1\\' height=\\'1\\' fill=\\'%23fff\\' opacity=\\'0.2\\'/%3E%3C/svg%3E\");background-repeat:repeat;'; el.appendChild(noise); }"
  },
  "ambientCanvas": "function(el, tick) { el.style.cssText = 'position:absolute;inset:0;z-index:0;background-image:url(\"data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'64\\' height=\\'64\\'%3E%3Crect width=\\'64\\' height=\\'64\\' fill=\\'%23000\\'/%3E%3Crect x=\\'0\\' y=\\'0\\' width=\\'2\\' height=\\'2\\' fill=\\'%23fff\\' opacity=\\'0.08\\'/%3E%3C/svg%3E\");background-size:64px 64px;background-repeat:repeat;'; el.style.backgroundPosition = (tick * 0.2 % 64) + 'px ' + (tick * 0.3 % 64) + 'px'; }",
  "shadcnTokens": {
    "--color-background": "#000000",
    "--color-popover": "#000000",
    "--color-foreground": "#FFFFFF",
    "--color-card-foreground": "#FFFFFF",
    "--color-popover-foreground": "#FFFFFF",
    "--color-card": "#000000",
    "--color-muted": "#000000",
    "--color-muted-foreground": "#888888",
    "--color-primary": "#FF00FF",
    "--color-ring": "#FF00FF",
    "--color-primary-foreground": "#000000",
    "--color-secondary": "#00FFFF",
    "--color-accent": "#00FFFF",
    "--color-secondary-foreground": "#000000",
    "--color-accent-foreground": "#000000",
    "--color-border": "#FFFFFF",
    "--color-input": "#FFFFFF",
    "--color-destructive": "#FF0000"
  },
  "shadcnTokensClassic": {
    "--background": "#000000",
    "--popover": "#000000",
    "--foreground": "#FFFFFF",
    "--card-foreground": "#FFFFFF",
    "--popover-foreground": "#FFFFFF",
    "--card": "#000000",
    "--muted": "#000000",
    "--muted-foreground": "#888888",
    "--primary": "#FF00FF",
    "--ring": "#FF00FF",
    "--primary-foreground": "#000000",
    "--secondary": "#00FFFF",
    "--accent": "#00FFFF",
    "--secondary-foreground": "#000000",
    "--accent-foreground": "#000000",
    "--border": "#FFFFFF",
    "--input": "#FFFFFF",
    "--destructive": "#FF0000"
  }
});
