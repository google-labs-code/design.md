registerSystem({
  "meta": {
    "name": "Morning-News Chyron",
    "tagline": "Broadcast lower-third overlay for urgent, authoritative morning news",
    "mode": "dark",
    "fontImport": "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;900&display=swap"
  },
  "yamlTokens": {
    "name": "Morning-News Chyron",
    "colors": {
      "primary": "#0A1F3F",
      "on-primary": "#FFFFFF",
      "secondary": "#E5B347",
      "on-secondary": "#0A1F3F"
    },
    "typography": {
      "display": {
        "fontFamily": "Montserrat",
        "fontSize": "36px",
        "fontWeight": 900,
        "lineHeight": 1.25,
        "letterSpacing": "-0.05em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Montserrat",
        "fontSize": "16px",
        "fontWeight": 600,
        "lineHeight": 1.375,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Montserrat",
        "fontSize": "14px",
        "fontWeight": 400,
        "lineHeight": 1.5,
        "letterSpacing": "0em",
        "textTransform": "lowercase"
      },
      "label": {
        "fontFamily": "Montserrat",
        "fontSize": "12px",
        "fontWeight": 700,
        "lineHeight": 1.5,
        "letterSpacing": "0.05em",
        "textTransform": "uppercase"
      }
    },
    "rounded": {
      "default": "0px"
    },
    "spacing": {
      "icon": "24px"
    },
    "components": {
      "chyron-bar": {
        "backgroundColor": "{colors.primary}",
        "textColor": "{colors.on-primary}",
        "rounded": "{rounded.default}",
        "padding": "24px",
        "height": "96px"
      },
      "headline-text": {
        "textColor": "#FFFFFF"
      },
      "live-pill": {
        "backgroundColor": "#FF0000",
        "textColor": "#FFFFFF",
        "rounded": "2px",
        "padding": "4px"
      },
      "station-bug": {
        "width": "64px",
        "height": "32px",
        "textColor": "#FFFFFF"
      },
      "ticker": {
        "backgroundColor": "#0A1F3F",
        "textColor": "#FFFFFF",
        "height": "32px"
      }
    },
    "version": "alpha",
    "description": "The Morning-News Chyron is a broadcast lower-third overlay that communicates urgency, authority, and instant legibility while balancing institutional trust with morning-show warmth.",
    "provenance": {
      "coverage_status": "complete",
      "identity_description": "",
      "manual_enrichment_required": false,
      "imagery_count": 18,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": null,
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "www.youtube.com",
          "count": 4
        },
        {
          "host": "en.wikipedia.org",
          "count": 2
        },
        {
          "host": "www.google.com",
          "count": 1
        },
        {
          "host": "www.paleycenter.org",
          "count": 1
        },
        {
          "host": "abcnews.com",
          "count": 1
        },
        {
          "host": "criticalcommons.org",
          "count": 1
        },
        {
          "host": "archive.org",
          "count": 1
        },
        {
          "host": "www.worldradiohistory.com",
          "count": 1
        },
        {
          "host": "www.cbs.com",
          "count": 1
        },
        {
          "host": "chyron.com",
          "count": 1
        },
        {
          "host": "www.nexttv.com",
          "count": 1
        },
        {
          "host": "www.museum.tv",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://www.google.com/search?tbm=isch&q=good+morning+america+1989+lower+third",
          "host": "www.google.com",
          "institution": "Google Image Search",
          "confidence_original": "low"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Good_Morning_America",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia",
          "confidence_original": "high"
        },
        {
          "url": "https://www.paleycenter.org/",
          "host": "www.paleycenter.org",
          "institution": "Paley Center for Media",
          "confidence_original": "low"
        },
        {
          "url": "https://abcnews.com/",
          "host": "abcnews.com",
          "institution": "ABC News / Disney",
          "confidence_original": "low"
        },
        {
          "url": "https://www.youtube.com/",
          "host": "www.youtube.com",
          "institution": "YouTube",
          "confidence_original": "low"
        },
        {
          "url": "https://criticalcommons.org/",
          "host": "criticalcommons.org",
          "institution": "Critical Commons (USC)",
          "confidence_original": "low"
        },
        {
          "url": "https://archive.org/",
          "host": "archive.org",
          "institution": "Internet Archive",
          "confidence_original": "low"
        },
        {
          "url": "https://www.worldradiohistory.com/index.htm",
          "host": "www.worldradiohistory.com",
          "institution": "American Radio History",
          "confidence_original": "low"
        },
        {
          "url": "https://www.youtube.com/",
          "host": "www.youtube.com",
          "institution": "YouTube",
          "confidence_original": "low"
        },
        {
          "url": "https://www.youtube.com/",
          "host": "www.youtube.com",
          "institution": null,
          "confidence_original": "low"
        },
        {
          "url": "https://www.cbs.com/",
          "host": "www.cbs.com",
          "institution": "CBS Corporation",
          "confidence_original": "low"
        },
        {
          "url": "https://chyron.com/",
          "host": "chyron.com",
          "institution": "ChyronHego",
          "confidence_original": "low"
        },
        {
          "url": "https://www.nexttv.com/",
          "host": "www.nexttv.com",
          "institution": "Future plc",
          "confidence_original": "low"
        },
        {
          "url": "https://www.museum.tv/",
          "host": "www.museum.tv",
          "institution": "Museum of Broadcast Communications",
          "confidence_original": "low"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Safe_area_(television)",
          "host": "en.wikipedia.org",
          "institution": null,
          "confidence_original": "high"
        },
        {
          "url": "https://www.artofthetitle.com/",
          "host": "www.artofthetitle.com",
          "institution": "Art of the Title",
          "confidence_original": "low"
        },
        {
          "url": "https://www.loc.gov/",
          "host": "www.loc.gov",
          "institution": "Library of Congress",
          "confidence_original": "low"
        },
        {
          "url": "https://www.youtube.com/",
          "host": "www.youtube.com",
          "institution": null,
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
  "colorMode": "dark",
  "tokens": {
    "--bg": "#34495E",
    "--on-bg": "#FFFFFF",
    "--primary": "#0A1F3F",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#E5B347",
    "--on-secondary": "#0A1F3F",
    "--surface": "#0A1F3F",
    "--on-bg-muted": "#9CA3AF",
    "--border": "#E5B347",
    "--error": "#FF0000",
    "--font-display": "Montserrat",
    "--font-body": "Montserrat",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "2px"
  },
  "semanticColors": {
    "ok": "#E5B347",
    "warn": "#FF6B6B",
    "err": "#FF0000",
    "info": "#3B82F6",
    "deltaUp": "#E5B347",
    "deltaDown": "#FF0000",
    "deltaFlat": "#9CA3AF",
    "live": "#0A1F3F",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#9CA3AF",
    "chartFont": "Montserrat"
  },
  "chartStyle": {
    "default": "minimal, no gridlines, gold axes, dark background",
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#9CA3AF",
    "fontFamily": "Montserrat"
  },
  "surfaceModel": "shadow",
  "materialSimulation": {
    "model": "crt-screen",
    "params": {
      "scanlineOpacity": 0.15,
      "chromaticAberrationOffset": "0.5px"
    }
  },
  "interactionModel": {
    "hover": {
      "filter": "brightness(1.12)",
      "boxShadow": "0 0 16px var(--primary)"
    },
    "focus": {
      "border": "2px solid var(--secondary-col)",
      "boxShadow": "0 0 8px var(--secondary-col)"
    },
    "active": {}
  },
  "spacing": {
    "component-internal": "24px",
    "section-internal": "8px",
    "page-edge": "5%",
    "icon": "24px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "btn": "0px",
    "chip": "2px"
  },
  "elevation": {
    "bar": "2px 2px 4px rgba(10,31,63,0.4), 2px 2px 8px rgba(10,31,63,0.25)",
    "none": "none"
  },
  "dashboardStyle": {
    "layout": "sidebar with content area",
    "density": "compact, informational",
    "panelTreatment": "dark navy panels with gold borders and scanline overlay",
    "dataVizStyle": "minimal, bold bars and tickers",
    "signatureElement": "live pill and ticker at bottom"
  },
  "landingStyle": {
    "heroApproach": "full-width video or image with chyron overlay lower-third",
    "scrollBehavior": "smooth, with chyron elements fading in",
    "ctaStyle": "gold outline button with uppercase text",
    "signatureMoment": "scanline overlay and chromatic aberration on headline"
  },
  "globalFilter": null,
  "globalBodyCss": "font-family:var(--font-body);background:var(--bg);color:var(--on-bg);margin:0;-webkit-font-smoothing:antialiased",
  "globalCss": ".ds-layout-frame .scanline-overlay{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.15) 2px,rgba(0,0,0,0.15) 4px);z-index:10}.ds-layout-frame .chyron-bar{box-shadow:2px 2px 4px rgba(10,31,63,0.4),2px 2px 8px rgba(10,31,63,0.25)}.ds-layout-frame .headline-text{-webkit-text-stroke:1px solid white;text-shadow:0.5px 0 0 rgba(255,0,0,0.5),-0.5px 0 0 rgba(0,0,255,0.5)}",
  "interactionStyles": null,
  "buttons": [
    {
      "name": "Primary Action Button",
      "desc": "Dark navy background, gold border, uppercase bold text with tight tracking.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--primary); color: var(--on-primary); border: 2px solid var(--border); font-family: var(--font-display); font-size: 14px; font-weight: 900; letter-spacing: -0.05em; text-transform: uppercase; padding: 12px 24px; box-shadow: var(--bar-shadow, 2px 2px 4px rgba(10,31,63,0.4)); cursor: default;\">BREAKING NEWS</button>",
      "label": "Primary Action Button",
      "note": "Dark navy background, gold border, uppercase bold text with tight tracking."
    },
    {
      "name": "Secondary Outline Button",
      "desc": "Transparent background, gold border, gold text, with subtle shadow.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; color: var(--secondary-col); border: 2px solid var(--secondary-col); font-family: var(--font-display); font-size: 14px; font-weight: 700; letter-spacing: -0.025em; text-transform: uppercase; padding: 10px 22px; box-shadow: 0 0 0 1px rgba(229,179,71,0.3); cursor: default;\">MORNING UPDATE</button>",
      "label": "Secondary Outline Button",
      "note": "Transparent background, gold border, gold text, with subtle shadow."
    },
    {
      "name": "Ghost Button",
      "desc": "No background, white text with 1px white stroke, no border.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; color: var(--on-primary); font-family: var(--font-display); font-size: 14px; font-weight: 600; letter-spacing: -0.05em; text-transform: uppercase; padding: 8px 16px; -webkit-text-stroke: 1px white; text-shadow: 0.5px 0 0 rgba(255,0,0,0.3), -0.5px 0 0 rgba(0,0,255,0.3); cursor: default;\">LIVE ALERT</button>",
      "label": "Ghost Button",
      "note": "No background, white text with 1px white stroke, no border."
    }
  ],
  "cards": [
    {
      "name": "Headline Card",
      "desc": "Dark navy background with gold divider, uppercase headline, scanline overlay.",
      "html": "<div style=\"background: var(--primary); color: var(--on-primary); padding: 16px 24px; border-left: 4px solid var(--border); position: relative; overflow: hidden; height: 96px;\"><div style=\"position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px); pointer-events: none;\"></div><span style=\"font-family: var(--font-display); font-size: 36px; font-weight: 900; letter-spacing: -0.05em; text-transform: uppercase; -webkit-text-stroke: 1px white; text-shadow: 0.5px 0 0 rgba(255,0,0,0.3), -0.5px 0 0 rgba(0,0,255,0.3); line-height: 1.25;\">URGENT</span><div style=\"width: 60px; height: 2px; background: var(--border); margin: 8px 0;\"></div><span style=\"font-family: var(--font-display); font-size: 16px; font-weight: 600; letter-spacing: -0.025em; text-transform: uppercase;\">MORNING BRIEF</span></div>",
      "label": "Headline Card",
      "note": "Dark navy background with gold divider, uppercase headline, scanline overlay."
    },
    {
      "name": "Ticker Card",
      "desc": "Full-width horizontal ticker with scrolling text, deep navy background.",
      "html": "<div style=\"background: var(--primary); color: var(--on-primary); height: 32px; overflow: hidden; display: flex; align-items: center; padding: 0 8px;\"><div style=\"display: flex; animation: scrollTicker 20s linear infinite;\"><span style=\"font-family: var(--font-body); font-size: 14px; white-space: nowrap; margin-right: 48px;\">BREAKING: CAPITOL HILL UPDATE • WEATHER ALERT • MARKET WATCH • TRAFFIC DELAYS</span><span style=\"font-family: var(--font-body); font-size: 14px; white-space: nowrap;\">BREAKING: CAPITOL HILL UPDATE • WEATHER ALERT • MARKET WATCH • TRAFFIC DELAYS</span></div></div>",
      "label": "Ticker Card",
      "note": "Full-width horizontal ticker with scrolling text, deep navy background."
    }
  ],
  "forms": [
    {
      "name": "Text Input",
      "desc": "Dark navy input, gold border on focus, placeholder text in uppercase with tight tracking.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px;\"><label style=\"font-family: var(--font-display); font-size: 12px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--secondary-col);\">HEADLINE</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" placeholder=\"ENTER STORY TITLE\" style=\"background: rgba(10,31,63,0.9); color: var(--on-primary); border: 1px solid var(--border); padding: 8px 12px; font-family: var(--font-display); font-size: 14px; font-weight: 400; letter-spacing: -0.025em; text-transform: uppercase; box-shadow: inset 0 2px 4px rgba(0,0,0,0.3); outline: none;\"></div>",
      "label": "Text Input",
      "stateLabel": "Dark navy input, gold border on focus, placeholder text in uppercase with tight tracking."
    },
    {
      "name": "Select/Dropdown",
      "desc": "Dark background with gold chevron, uppercase options.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px;\"><label style=\"font-family: var(--font-display); font-size: 12px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--secondary-col);\">CATEGORY</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--primary); color: var(--on-primary); border: 1px solid var(--border); padding: 8px 12px; font-family: var(--font-display); font-size: 14px; font-weight: 400; letter-spacing: -0.025em; text-transform: uppercase; appearance: none; background-image: url(\\x27data:image/svg+xml;utf8,<svg xmlns=\\\\x27http://www.w3.org/2000/svg\\\\x27 width=\\\\x2712\\\\x27 height=\\\\x2712\\\\x27 viewBox=\\\\x270 0 24 24\\\\x27 fill=\\\\x27none\\\\x27 stroke=\\\\x27%23E5B347\\\\x27 stroke-width=\\\\x272\\\\x27><polyline points=\\\\x276 9 12 15 18 9\\\\x27/></svg>\\x27); background-repeat: no-repeat; background-position: right 8px center; padding-right: 28px;\"><option>POLITICS</option><option>WEATHER</option><option>FINANCE</option></select></div>",
      "label": "Select/Dropdown",
      "stateLabel": "Dark background with gold chevron, uppercase options."
    },
    {
      "name": "Checkbox/Toggle",
      "desc": "Gold accent toggle with uppercase label, checkmark styled as broadcast icon.",
      "html": "<div style=\"display: flex; align-items: center; gap: 8px;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" id=\"live-53ce\" checked style=\"appearance: none; width: 16px; height: 16px; background: var(--primary); border: 2px solid var(--border); cursor: default; position: relative;\"><label for=\"live-53ce\" style=\"font-family: var(--font-display); font-size: 12px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--on-primary);\">LIVE OVERLAY</label></div>",
      "label": "Checkbox/Toggle",
      "stateLabel": "Gold accent toggle with uppercase label, checkmark styled as broadcast icon."
    }
  ],
  "extraComponents": [
    {
      "name": "Live Pill",
      "desc": "Red pill with white text, 2px border-radius, used to indicate live broadcast.",
      "html": "<span style=\"background: var(--error); color: var(--on-primary); border-radius: 2px; padding: 4px 8px; font-family: var(--font-display); font-size: 12px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; display: inline-flex; align-items: center; gap: 6px;\"><span style=\"width: 8px; height: 8px; background: var(--on-primary); border-radius: 50%; display: inline-block;\"></span>LIVE</span>"
    },
    {
      "name": "Station Bug",
      "desc": "Semi-transparent white text, 64x32 box, uppercase abbreviation.",
      "html": "<div style=\"width: 64px; height: 32px; background: rgba(255,255,255,0.15); display: flex; align-items: center; justify-content: center;\"><span style=\"font-family: var(--font-display); font-size: 16px; font-weight: 900; letter-spacing: -0.05em; text-transform: uppercase; color: rgba(255,255,255,0.8);\">ABC</span></div>"
    },
    {
      "name": "Scanline Overlay",
      "desc": "Repeating horizontal lines to simulate CRT scanlines, positioned absolutely over any component.",
      "html": "<div style=\"position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.12) 2px, rgba(0,0,0,0.12) 4px); pointer-events: none;\"></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — BREAKING NEWS</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — CAPITOL HILL UPDATE</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — MORNING BRIEFING</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — lawmakers return to session today with a packed agenda</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — LIVE · WASHINGTON DC</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Do NOT use serif or script fonts; the chyron requires a clean geometric sans-serif for legibility.",
      "avoid": {
        "html": "<span style=\"font-family: 'Times New Roman', serif; font-size: 24px; font-weight: 400; letter-spacing: 0; text-transform: none;\">Breaking News</span>",
        "label": "Avoid"
      },
      "rule": "Do NOT use serif or script fonts; the chyron requires a clean geometric sans-serif for legibility.",
      "do": {
        "label": "Do",
        "html": "<div style=\"background:var(--primary);border-left:3px solid var(--secondary-col);height:60px;width:240px;display:flex;align-items:center;padding-left:16px;\"><span style=\"font-family:var(--font-display);font-size:20px;font-weight:900;letter-spacing:-0.05em;text-transform:uppercase;color:var(--on-primary);\">BREAKING</span></div>"
      }
    },
    {
      "desc": "Do NOT center the bar or make it full-width; always left-align with 5% margin.",
      "avoid": {
        "html": "<div style=\"background: #0A1F3F; width: 100%; text-align: center; padding: 16px;\"><span style=\"color: white; font-family: sans-serif;\">CENTERED ALERT</span></div>",
        "label": "Avoid"
      },
      "rule": "Do NOT center the bar or make it full-width; always left-align with 5% margin.",
      "do": {
        "label": "Do",
        "html": "<div style=\"background:var(--primary);border-left:3px solid var(--secondary-col);height:60px;width:240px;display:flex;align-items:center;padding-left:16px;\"><span style=\"font-family:var(--font-display);font-size:20px;font-weight:900;letter-spacing:-0.05em;text-transform:uppercase;color:var(--on-primary);\">BREAKING</span></div>"
      }
    },
    {
      "desc": "Do NOT use pure black or pure white backgrounds; they clip against video.",
      "avoid": {
        "html": "<div style=\"background: #000000; color: #FFFFFF; padding: 8px;\"><span>PURE BLACK BAR</span></div>",
        "label": "Avoid"
      },
      "rule": "Do NOT use pure black or pure white backgrounds; they clip against video.",
      "do": {
        "label": "Do",
        "html": "<div style=\"background:var(--primary);border-left:3px solid var(--secondary-col);height:60px;width:240px;display:flex;align-items:center;padding-left:16px;\"><span style=\"font-family:var(--font-display);font-size:20px;font-weight:900;letter-spacing:-0.05em;text-transform:uppercase;color:var(--on-primary);\">BREAKING</span></div>"
      }
    },
    {
      "desc": "Do NOT use rounded corners (except the live pill); the chyron bar must be completely flat.",
      "avoid": {
        "html": "<div style=\"background: #0A1F3F; border-radius: 16px; padding: 16px;\"><span style=\"color: white;\">ROUNDED BAR</span></div>",
        "label": "Avoid"
      },
      "rule": "Do NOT use rounded corners (except the live pill); the chyron bar must be completely flat.",
      "do": {
        "label": "Do",
        "html": "<div style=\"background:var(--primary);border-left:3px solid var(--secondary-col);height:60px;width:240px;display:flex;align-items:center;padding-left:16px;\"><span style=\"font-family:var(--font-display);font-size:20px;font-weight:900;letter-spacing:-0.05em;text-transform:uppercase;color:var(--on-primary);\">BREAKING</span></div>"
      }
    }
  ],
  "doAvoidStyle": {
    "html": "<div style=\"background: white; color: black; font-family: serif; text-align: center; border-radius: 10px;\">Wrong aesthetic</div>"
  },
  "effects": [
    {
      "name": "Scanlines",
      "desc": "CRT scanline overlay applied as repeating horizontal lines with low opacity.",
      "render": "function(el){ el.style.cssText='width:100%;height:100%;background:var(--surface);position:relative;display:flex;align-items:center;justify-content:center;'; var d=document.createElement('div'); d.style.cssText='width:56px;height:56px;background:var(--primary);box-shadow:0 0 14px var(--primary);'; el.appendChild(d); }"
    },
    {
      "name": "Chromatic Aberration",
      "desc": "Text shadow with red and blue offset values of 0.5px to simulate broadcast video artifact.",
      "render": "function(el){ el.style.cssText='width:100%;height:100%;background:var(--surface);position:relative;display:flex;align-items:center;justify-content:center;'; var d=document.createElement('div'); d.style.cssText='width:56px;height:56px;background:var(--primary);box-shadow:0 0 14px var(--primary);'; el.appendChild(d); }"
    }
  ],
  "motion": [],
  "colors": {
    "primary": "#0A1F3F",
    "on-primary": "#FFFFFF",
    "secondary": "#E5B347",
    "on-secondary": "#0A1F3F",
    "accent": "#FF0000",
    "surface": "#0A1F3F"
  },
  "typography": {
    "display": {
      "fontFamily": "Montserrat",
      "fontSize": "36px",
      "fontWeight": 900,
      "lineHeight": 1.25,
      "letterSpacing": "-0.05em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "Montserrat",
      "fontSize": "16px",
      "fontWeight": 600,
      "lineHeight": 1.375,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "Montserrat",
      "fontSize": "14px",
      "fontWeight": 400,
      "lineHeight": 1.5,
      "letterSpacing": "0em",
      "textTransform": "lowercase"
    },
    "label": {
      "fontFamily": "Montserrat",
      "fontSize": "12px",
      "fontWeight": 700,
      "lineHeight": 1.5,
      "letterSpacing": "0.05em",
      "textTransform": "uppercase"
    }
  },
  "layouts": {
    "copy": {
      "heroKicker": "BROADCAST GRADE",
      "heroHeadline": "MORNING-NEWS CHYRON",
      "heroSub": "Urgent authority. Warmth at dawn. Built for the lower-third.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#E5B347;color:#0A1F3F;border:none;padding:12px 32px;font-family:Montserrat;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;font-size:14px;\">LAUNCH CHYRON</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:transparent;color:#FFFFFF;border:1px solid #E5B347;padding:12px 32px;font-family:Montserrat;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;font-size:14px;\">PREVIEW TICKER</button>",
      "navLinks": [
        "CHYRON",
        "TICKER",
        "LIVE",
        "STATIONS",
        "EFFECTS"
      ],
      "features": [
        {
          "title": "LOWER-THIRD COMPOSER",
          "desc": "Assemble chyrons with headline, live pill, station bug, and gold divider in seconds.",
          "icon": "📺",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📺 LOWER-THIRD COMPOSER</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Assemble chyrons with headline, live pill, station bug, and gold divider in seconds.</div></div>"
        },
        {
          "title": "AUTO-TICKER",
          "desc": "Scroll breaking headlines with infinite motion. Set speed and source.",
          "icon": "📜",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📜 AUTO-TICKER</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Scroll breaking headlines with infinite motion. Set speed and source.</div></div>"
        },
        {
          "title": "LIVE PILL ENGINE",
          "desc": "Animated red pill with 1:1 broadcast pulse. Sync to air.",
          "icon": "🔴",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔴 LIVE PILL ENGINE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Animated red pill with 1:1 broadcast pulse. Sync to air.</div></div>"
        },
        {
          "title": "SCANLINE FINISH",
          "desc": "CRT-era scanlines and chromatic aberration for authentic video-chain depth.",
          "icon": "📡",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📡 SCANLINE FINISH</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">CRT-era scanlines and chromatic aberration for authentic video-chain depth.</div></div>"
        },
        {
          "title": "STATION BUG LIBRARY",
          "desc": "Upload your station logo or use our semi-transparent presets.",
          "icon": "🏛️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🏛️ STATION BUG LIBRARY</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Upload your station logo or use our semi-transparent presets.</div></div>"
        }
      ],
      "ctaStripHeadline": "YOUR MORNING BROADCAST, ON AIR IN MINUTES",
      "ctaStripHtml": "<a href=\"#\" style=\"color:#E5B347;font-family:Montserrat;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;\">CLAIM YOUR CHYRON →</a>",
      "sidebarBrand": "AM NEWS CHYRON",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "COMPOSER",
          "active": true
        },
        {
          "icon": "◉",
          "label": "ASSETS",
          "active": false
        },
        {
          "icon": "◉",
          "label": "TIMELINE",
          "active": false
        }
      ],
      "dashboardTitle": "CHYRON CONTROL",
      "metrics": [
        {
          "label": "ACTIVE CHYRONS",
          "value": "04",
          "delta": "+1",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "TICKER SPEED",
          "value": "12s",
          "delta": "-2s",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "LIVE STATUS",
          "value": "ON AIR",
          "delta": "--",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "BUG SYNC",
          "value": "100%",
          "delta": "+5%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "FRAME LOCK",
          "value": "29.97",
          "delta": "0",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "CHYRON DEPLOYMENT FREQUENCY",
      "panelATitle": "RECENT CHYRONS",
      "panelARows": [
        {
          "label": "STORM WARNING",
          "value": "06:42 AM",
          "pct": 6
        },
        {
          "label": "TRAFFIC ALERT",
          "value": "07:15 AM",
          "pct": 7
        },
        {
          "label": "CEASE FIRE",
          "value": "08:00 AM",
          "pct": 8
        },
        {
          "label": "MARKET OPEN",
          "value": "09:30 AM",
          "pct": 9
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "TICKER QUEUE",
      "panelBCells": [
        {
          "label": "01",
          "value": "BREAKING: WEATHER ALERT",
          "state": "ok"
        },
        {
          "label": "02",
          "value": "TRAFFIC JAM ON I-95",
          "state": "warn"
        },
        {
          "label": "03",
          "value": "CEASE FIRE DEAL REACHED",
          "state": "err"
        },
        {
          "label": "04",
          "value": "MARKETS OPEN HIGHER",
          "state": "ok"
        },
        {
          "label": "05",
          "value": "HEAT WAVE CONTINUES",
          "state": "warn"
        },
        {
          "label": "06",
          "value": "WORLD CUP UPDATE",
          "state": "err"
        },
        {
          "label": "07",
          "value": "GOVERNOR SPEECH AT 9",
          "state": "ok"
        },
        {
          "label": "08",
          "value": "TECH STOCKS SURGE",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "0600",
        "0700",
        "0800",
        "0900",
        "1000",
        "1100"
      ],
      "series": [
        {
          "data": [
            8,
            12,
            15,
            10,
            6,
            4,
            4,
            4,
            4,
            4,
            4,
            4
          ],
          "label": "BREAKING",
          "axis": "left",
          "color": "#0A1F3F"
        },
        {
          "data": [
            3,
            5,
            7,
            9,
            11,
            13,
            13,
            13,
            13,
            13,
            13,
            13
          ],
          "label": "SCHEDULED",
          "axis": "right-1",
          "color": "#E5B347"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText='background:var(--primary);padding:24px;min-height:200px;position:relative;display:flex;flex-direction:column;'; el.innerHTML='<div style=\"position:absolute;top:0;left:0;width:100%;height:100%;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.12) 2px,rgba(0,0,0,0.12) 4px);pointer-events:none;z-index:2;\"></div><div style=\"display:flex;align-items:center;gap:12px;margin-left:5%;margin-top:auto;padding:24px 0;z-index:3;\"><span style=\"background:var(--error);color:var(--on-primary);border-radius:2px;padding:4px 8px;font-family:var(--font-display);font-size:12px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;display:inline-flex;align-items:center;gap:6px;\"><span style=\"width:8px;height:8px;background:var(--on-primary);border-radius:50%;display:inline-block;\"></span>LIVE</span><div style=\"width:2px;height:24px;background:var(--secondary-col);\"></div><span style=\"font-family:var(--font-display);font-size:36px;font-weight:900;letter-spacing:-0.05em;text-transform:uppercase;color:var(--on-primary);-webkit-text-stroke:1px white;text-shadow:0.5px 0 0 rgba(255,0,0,0.5),-0.5px 0 0 rgba(0,0,255,0.5);\">MORNING ALERT</span></div><div style=\"margin-left:5%;z-index:3;padding-bottom:16px;\"><div style=\"width:64px;height:32px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center;\"><span style=\"font-family:var(--font-display);font-size:16px;font-weight:900;letter-spacing:-0.05em;text-transform:uppercase;color:rgba(255,255,255,0.8);\">ABC</span></div></div>'; }",
    "showcaseRender": "function(el) { el.style.cssText='padding:24px;display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;'; el.innerHTML='<div style=\"padding:16px;border:1px solid var(--border);background:var(--surface);font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--on-bg);\"><span>📺 LOWER-THIRD COMPOSER</span><div style=\"font-size:12px;color:var(--on-bg-muted);margin-top:8px;\">Assemble chyrons with headline, live pill, station bug, and gold divider in seconds.</div></div><div style=\"padding:16px;border:1px solid var(--border);background:var(--surface);font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--on-bg);\"><span>📜 AUTO-TICKER</span><div style=\"font-size:12px;color:var(--on-bg-muted);margin-top:8px;\">Scroll breaking headlines with infinite motion. Set speed and source.</div></div><div style=\"padding:16px;border:1px solid var(--border);background:var(--surface);font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--on-bg);\"><span>🔴 LIVE PILL ENGINE</span><div style=\"font-size:12px;color:var(--on-bg-muted);margin-top:8px;\">Animated red pill with 1:1 broadcast pulse. Sync to air.</div></div><div style=\"padding:16px;border:1px solid var(--border);background:var(--surface);font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--on-bg);\"><span>📡 SCANLINE FINISH</span><div style=\"font-size:12px;color:var(--on-bg-muted);margin-top:8px;\">CRT-era scanlines and chromatic aberration for authentic video-chain depth.</div></div>'; }",
    "panelCRender": "function(el) { el.style.cssText='padding:16px;background:var(--surface);border:1px solid var(--border);'; el.innerHTML='<div style=\"font-family:var(--font-display);font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:var(--secondary-col);margin-bottom:12px;\">TICKER QUEUE</div>'+['BREAKING: WEATHER ALERT','TRAFFIC JAM ON I-95','CEASE FIRE DEAL REACHED','MARKETS OPEN HIGHER'].map(function(t,i){return '<div style=\"display:flex;align-items:center;gap:8px;padding:4px 0;border-bottom:1px solid rgba(229,179,71,0.3);\"><span style=\"width:16px;height:16px;border-radius:50%;background:'+(i===0?'var(--error)':i===1?'var(--warn, #FF6B6B)':'var(--ok, #E5B347)')+';display:inline-block;\"></span><span style=\"font-family:var(--font-body);font-size:13px;color:var(--on-bg);\">'+t+'</span></div>';}).join('')+'</div>'; }",
    "heroBackground": "function(el) { el.style.background='linear-gradient(135deg, #0A1F3F 0%, #1a3a5c 100%)'; }",
    "ctaBackground": "function(el) { el.style.background='linear-gradient(135deg, #E5B347 0%, #d4a13e 100%)'; }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText='height:2px;background:var(--secondary-col);margin:0 5%;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background='linear-gradient(180deg, #0A1F3F 0%, #162d4f 100%)'; }",
    "surfaceOverlay": "function(el) { var ov=document.createElement('div'); ov.style.cssText='position:absolute;inset:0;z-index:2;pointer-events:none;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.15) 2px,rgba(0,0,0,0.15) 4px);'; el.appendChild(ov); }"
  },
  "shadcnTokens": {
    "--color-background": "#34495E",
    "--color-popover": "#34495E",
    "--color-foreground": "#FFFFFF",
    "--color-card-foreground": "#FFFFFF",
    "--color-popover-foreground": "#FFFFFF",
    "--color-card": "#0A1F3F",
    "--color-muted": "#0A1F3F",
    "--color-muted-foreground": "#9CA3AF",
    "--color-primary": "#0A1F3F",
    "--color-ring": "#0A1F3F",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#E5B347",
    "--color-accent": "#E5B347",
    "--color-secondary-foreground": "#0A1F3F",
    "--color-accent-foreground": "#0A1F3F",
    "--color-border": "#E5B347",
    "--color-input": "#E5B347",
    "--color-destructive": "#FF0000"
  },
  "shadcnTokensClassic": {
    "--background": "#34495E",
    "--popover": "#34495E",
    "--foreground": "#FFFFFF",
    "--card-foreground": "#FFFFFF",
    "--popover-foreground": "#FFFFFF",
    "--card": "#0A1F3F",
    "--muted": "#0A1F3F",
    "--muted-foreground": "#9CA3AF",
    "--primary": "#0A1F3F",
    "--ring": "#0A1F3F",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#E5B347",
    "--accent": "#E5B347",
    "--secondary-foreground": "#0A1F3F",
    "--accent-foreground": "#0A1F3F",
    "--border": "#E5B347",
    "--input": "#E5B347",
    "--destructive": "#FF0000"
  }
});
