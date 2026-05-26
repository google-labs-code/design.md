registerSystem({
  "meta": {
    "name": "Paris Métro Enamel Sign System",
    "tagline": "White-on-blue enamel signage for digital wayfinding",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Arimo:wght@400;500;600;700&display=swap"
  },
  "yamlTokens": {
    "name": "Paris Métro Enamel Sign System",
    "colors": {},
    "typography": {
      "display": {
        "fontFamily": "Inter, Arimo, sans-serif",
        "fontSize": "36px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.05em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Inter, Arimo, sans-serif",
        "fontSize": "24px",
        "fontWeight": 600,
        "lineHeight": 1.375,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Inter, Arimo, sans-serif",
        "fontSize": "16px",
        "fontWeight": 500,
        "lineHeight": 1.375,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "label": {
        "fontFamily": "Inter, Arimo, sans-serif",
        "fontSize": "14px",
        "fontWeight": 400,
        "lineHeight": 1,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      }
    },
    "rounded": {
      "default": "12px",
      "card": "12px",
      "button": "12px",
      "input": "12px",
      "chip": "9999px"
    },
    "spacing": {
      "component-internal": "24px",
      "page-edge": "16px",
      "gap-component": "24px"
    },
    "components": {
      "sign-plaque": {
        "backgroundColor": "#1A4B8C",
        "textColor": "#FFFFFF",
        "rounded": "12px",
        "padding": "24px"
      },
      "line-marker": {
        "backgroundColor": "#FFFFFF",
        "textColor": "#1A4B8C",
        "size": "32px",
        "rounded": "9999px"
      },
      "directional-arrow": {
        "height": "20px",
        "width": "20px"
      },
      "exit-badge": {
        "backgroundColor": "#1A4B8C",
        "size": "20px"
      }
    },
    "version": "alpha",
    "description": "A digital UI component system that translates the iconic white-on-blue enamelled signage of the Paris Métro into a utilitarian, tactile component language — deep blue fields, white centered sans-serif text, rounded plaques, metal borders, and corner rivets.",
    "provenance": {
      "coverage_status": "sparse",
      "identity_description": "",
      "manual_enrichment_required": false,
      "imagery_count": 3,
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
          "host": "collections.vam.ac.uk",
          "count": 1
        },
        {
          "host": "typofonderie.com",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://commons.wikimedia.org/wiki/Category:Paris_Metro_station_signs",
          "host": "commons.wikimedia.org",
          "institution": "Wikimedia Commons",
          "confidence_original": "high"
        },
        {
          "url": "https://collections.vam.ac.uk/search/?q=Paris+metro+enamel+sign",
          "host": "collections.vam.ac.uk",
          "institution": "Victoria and Albert Museum, London",
          "confidence_original": "medium"
        },
        {
          "url": "https://typofonderie.com/fonts/parisine/",
          "host": "typofonderie.com",
          "institution": "Porchez Typofonderie",
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
    "--bg": "#F5F0EB",
    "--on-bg": "#2A2A2A",
    "--primary": "#1A4B8C",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#C41E3A",
    "--on-secondary": "#FFFFFF",
    "--surface": "#1A4B8C",
    "--on-bg-muted": "#666666",
    "--border": "#888888",
    "--error": "#B71C1C",
    "--font-display": "Inter, Arimo, sans-serif",
    "--font-body": "Inter, Arimo, sans-serif",
    "--radius-default": "12px",
    "--radius-card": "12px",
    "--radius-btn": "12px",
    "--radius-chip": "9999px"
  },
  "semanticColors": {
    "success": "#2E7D32",
    "warning": "#F57F17",
    "info": "#1565C0",
    "ok": "#2E7D32",
    "warn": "#F57F17",
    "err": "#B71C1C",
    "deltaUp": "#2E7D32",
    "deltaDown": "#B71C1C",
    "deltaFlat": "#666666",
    "live": "#1A4B8C",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#666666",
    "chartFont": "Space Grotesk"
  },
  "elevation": {
    "default": "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",
    "hover": "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
    "active": "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",
    "rivet": "inset 0 2px 4px 0 rgba(0,0,0,0.2)"
  },
  "surfaceModel": "shadow",
  "materialSimulation": {
    "model": "coated-card",
    "params": {
      "enamelReflection": "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, transparent 100%)",
      "grain": "url(#enamel-grain)",
      "grainOpacity": "0.1",
      "grainBlendMode": "overlay",
      "borderWidth": "2px",
      "borderColor": "#888888",
      "borderStyle": "solid",
      "rivetSize": "12px",
      "rivetShadow": "inset 0 2px 4px rgba(0,0,0,0.2), 0 1px 0 rgba(255,255,255,0.3)"
    }
  },
  "globalFilter": "<svg xmlns='http://www.w3.org/2000/svg' version='1.1' style='position:absolute;width:0;height:0;'><defs><filter id='enamel-grain' x='0' y='0' width='100%' height='100%'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' result='noise'/><feColorMatrix type='matrix' values='0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 0.1 0' in='noise' result='coloredNoise'/></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-body); background: var(--bg); color: var(--on-bg);",
  "globalCss": ".ds-layout-frame .sign-plaque {\n  background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, var(--primary) 100%);\n  border: 2px solid var(--border);\n  border-radius: var(--radius-card);\n  box-shadow: var(--elevation-default);\n  position: relative;\n  overflow: hidden;\n}\n.ds-layout-frame .sign-plaque::after {\n  content: '';\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  filter: url(#enamel-grain);\n  mix-blend-mode: overlay;\n  opacity: 0.1;\n  border-radius: inherit;\n}\n.ds-layout-frame .rivet {\n  width: 12px;\n  height: 12px;\n  background: var(--border);\n  border-radius: 50%;\n  box-shadow: var(--elevation-rivet);\n}",
  "interactionModel": {
    "hover": {
      "transform": "scale(1.02) brightness(1.05)",
      "transition": "200ms ease-out"
    },
    "focus": {
      "ringColor": "#FFFFFF",
      "ringWidth": "2px",
      "ringOffset": "2px",
      "shadow": "0 0 0 2px rgba(26,75,140,0.5)"
    },
    "active": {
      "transform": "scale(0.97)",
      "transition": "150ms ease"
    },
    "exemptAnimations": [
      "gloss-pulse (optional ambient)"
    ]
  },
  "interactionStyles": ".ds-layout-frame .sign-plaque,\n.ds-layout-frame .line-marker {\n  transition: transform 200ms ease-out, filter 200ms ease-out, box-shadow 200ms ease-out;\n}\n.ds-layout-frame .sign-plaque:hover,\n.ds-layout-frame .line-marker:hover {\n  transform: scale(1.02) brightness(1.05);\n}\n.ds-layout-frame .sign-plaque:active,\n.ds-layout-frame .line-marker:active {\n  transform: scale(0.97);\n  transition-duration: 150ms;\n}\n.ds-layout-frame .sign-plaque:focus-visible,\n.ds-layout-frame .line-marker:focus-visible {\n  outline: none;\n  box-shadow: 0 0 0 2px #FFFFFF, 0 0 0 4px rgba(26,75,140,0.5);\n}",
  "chartStyle": {
    "lineColor": "#1A4B8C",
    "pointColor": "#FFFFFF",
    "gridColor": "#888888",
    "backgroundColor": "#F5F0EB",
    "fontFamily": "Inter, Arimo, sans-serif",
    "textColor": "#2A2A2A",
    "accent": "#C41E3A",
    "labelColor": "#666666"
  },
  "dashboardStyle": {
    "layout": "single‑column centered layout with floating enamel plaque cards for each data widget",
    "density": "low — generous spacing between widgets, minimal text",
    "panelTreatment": "each panel is an enamel plaque with rivets and border, containing up to 2 lines of text",
    "dataVizStyle": "simplified — white strokes on blue background, no 3D charts",
    "signatureElement": "corner rivet decorative treatment on every panel"
  },
  "landingStyle": {
    "heroApproach": "a large enamel sign with the system name, centered on a concrete tile background",
    "scrollBehavior": "smooth scroll to reveal subsequent line marker icons as progress indicators",
    "ctaStyle": "an enamel button with brighten‑on‑hover effect",
    "signatureMoment": "when user scrolls, a directional arrow animates downward to indicate next section"
  },
  "buttons": [
    {
      "name": "Enamel Primary Button",
      "desc": "Deep blue background with white uppercase text, metal border, and subtle enamel reflection.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--primary); color: var(--on-primary); border: 2px solid var(--border); border-radius: var(--radius-default); padding: 12px 24px; font-family: var(--font-display); font-size: 14px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1); transition: transform 200ms ease-out, filter 200ms ease-out;\">SUBMIT</button>",
      "label": "Enamel Primary Button",
      "note": "Deep blue background with white uppercase text, metal border, and subtle enamel reflection."
    },
    {
      "name": "Line Marker Secondary Button",
      "desc": "White circle with blue number, used for line indicators or secondary actions.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--on-primary); color: var(--primary); border: 2px solid var(--primary); border-radius: 9999px; padding: 8px 16px; font-family: var(--font-display); font-size: 14px; font-weight: 700; text-transform: uppercase; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center;\">1</button>",
      "label": "Line Marker Secondary Button",
      "note": "White circle with blue number, used for line indicators or secondary actions."
    },
    {
      "name": "Ghost Enamel Button",
      "desc": "Transparent background with blue border and text for minimal actions.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; color: var(--primary); border: 2px solid var(--primary); border-radius: var(--radius-default); padding: 12px 24px; font-family: var(--font-display); font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.025em; transition: transform 200ms ease-out, filter 200ms ease-out;\">READ MORE</button>",
      "label": "Ghost Enamel Button",
      "note": "Transparent background with blue border and text for minimal actions."
    }
  ],
  "cards": [
    {
      "name": "Métro Sign Plaque Card",
      "desc": "A self-contained enamel sign with deep blue background, white text, metal border, corner rivets, and surface grain.",
      "html": "<div onmouseenter=\"this.style.transform='scale(1.02) brightness(1.05)';this.style.boxShadow='0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)'\" onmouseleave=\"this.style.transform='scale(1) brightness(1)';this.style.boxShadow='0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)'\" style=\"position: relative; width: 300px; padding: 32px; background: var(--primary); background-image: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, transparent 40%), url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%27 height=%27100%27%3E%3Cfilter id=%27noise%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.65%27 numOctaves=%273%27 /%3E%3C/filter%3E%3Crect width=%27100%27 height=%27100%27 filter=%27url(%23noise)%27 opacity=%270.12%27 mix-blend-mode=%27overlay%27 fill=%27%23888%27/%3E%3C/svg%3E'); border: 2px solid var(--border); border-radius: var(--radius-card); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1); text-align: center; font-family: var(--font-display); color: var(--on-primary); transition: transform 200ms ease-out, filter 200ms ease-out, box-shadow 200ms ease-out;\"><div style=\"position: absolute; top: 6px; left: 6px; width: 12px; height: 12px; background: var(--border); border-radius: 50%; box-shadow: inset 0 2px 4px rgba(0,0,0,0.2), 0 1px 0 rgba(255,255,255,0.3);\"></div><div style=\"position: absolute; top: 6px; right: 6px; width: 12px; height: 12px; background: var(--border); border-radius: 50%; box-shadow: inset 0 2px 4px rgba(0,0,0,0.2), 0 1px 0 rgba(255,255,255,0.3);\"></div><div style=\"position: absolute; bottom: 6px; left: 6px; width: 12px; height: 12px; background: var(--border); border-radius: 50%; box-shadow: inset 0 2px 4px rgba(0,0,0,0.2), 0 1px 0 rgba(255,255,255,0.3);\"></div><div style=\"position: absolute; bottom: 6px; right: 6px; width: 12px; height: 12px; background: var(--border); border-radius: 50%; box-shadow: inset 0 2px 4px rgba(0,0,0,0.2), 0 1px 0 rgba(255,255,255,0.3);\"></div><div style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 120px;\"><div style=\"font-size: 24px; font-weight: 700; letter-spacing: 0.05em; line-height: 1.25; margin-bottom: 8px;\">CHÂTELET</div><div style=\"font-size: 16px; font-weight: 500; letter-spacing: 0.025em;\">SORTIE</div></div></div>",
      "label": "Métro Sign Plaque Card",
      "note": "A self-contained enamel sign with deep blue background, white text, metal border, corner rivets, and surface grain."
    },
    {
      "name": "Métro Station Information Card",
      "desc": "A compact card combining line marker, station name, exit badge, and directional arrow, with a slight rotation for a mounted feel.",
      "html": "<div style=\"position: relative; width: 300px; padding: 24px; background: var(--primary); background-image: linear-gradient(to bottom, rgba(255,255,255,0.12) 0%, transparent 40%), url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%27 height=%27100%27%3E%3Cfilter id=%27noise%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.65%27 numOctaves=%273%27 /%3E%3C/filter%3E%3Crect width=%27100%27 height=%27100%27 filter=%27url(%23noise)%27 opacity=%270.12%27 mix-blend-mode=%27overlay%27 fill=%27%23888%27/%3E%3C/svg%3E'); border: 2px solid var(--border); border-radius: var(--radius-card); box-shadow: 0 8px 12px -4px rgba(0,0,0,0.15); transform: rotate(2deg); font-family: var(--font-display); color: var(--on-primary);\"><div style=\"position: absolute; top: 6px; left: 6px; width: 32px; height: 32px; background: var(--on-primary); border-radius: 50%; border: 2px solid var(--on-primary); display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--primary); font-size: 14px;\">1</div><div style=\"position: absolute; bottom: 8px; right: 8px; background: var(--on-primary); color: var(--primary); padding: 2px 8px; border-radius: 4px; font-size: 12px; text-transform: uppercase; font-weight: 600;\">SORTIE</div><div style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100px;\"><div style=\"font-size: 20px; font-weight: 700; letter-spacing: 0.05em; margin-bottom: 4px;\">OPÉRA</div><div style=\"font-size: 14px; font-weight: 400; letter-spacing: 0.025em;\">CORRESPONDANCE</div><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"margin-top: 12px;\"><path d=\"M12 5L6 13H18L12 5Z\" fill=\"var(--on-primary)\"/></svg></div></div>",
      "label": "Métro Station Information Card",
      "note": "A compact card combining line marker, station name, exit badge, and directional arrow, with a slight rotation for a mounted feel."
    }
  ],
  "forms": [
    {
      "name": "Enamel Text Input",
      "desc": "A text field styled as a small enamel plaque with blue background and white text.",
      "html": "<div style=\"display: inline-block; background: var(--primary); background-image: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, transparent 40%), url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%27 height=%27100%27%3E%3Cfilter id=%27noise%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.65%27 numOctaves=%273%27 /%3E%3C/filter%3E%3Crect width=%27100%27 height=%27100%27 filter=%27url(%23noise)%27 opacity=%270.12%27 mix-blend-mode=%27overlay%27 fill=%27%23888%27/%3E%3C/svg%3E'); border: 2px solid var(--border); border-radius: var(--radius-default); padding: 4px 12px; width: 200px;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||'';this.dataset.guxBoxShadow=this.style.boxShadow||'';this.style.border='2px solid var(--secondary-col)';this.style.boxShadow='0 0 8px var(--secondary-col)'\" onblur=\"this.style.border=this.dataset.guxBorder||'';this.style.boxShadow=this.dataset.guxBoxShadow||''\" type=\"text\" placeholder=\"STATION\" style=\"background: transparent; border: none; color: var(--on-primary); font-family: var(--font-display); font-size: 14px; text-transform: uppercase; letter-spacing: 0.025em; width: 100%; outline: none;\" /></div>",
      "label": "Enamel Text Input",
      "stateLabel": "A text field styled as a small enamel plaque with blue background and white text."
    },
    {
      "name": "Métro Line Selector",
      "desc": "A dropdown select with blue background and white text, styled as an enamel plaque.",
      "html": "<div style=\"position: relative; display: inline-block; background: var(--primary); background-image: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, transparent 40%), url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%27 height=%27100%27%3E%3Cfilter id=%27noise%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.65%27 numOctaves=%273%27 /%3E%3C/filter%3E%3Crect width=%27100%27 height=%27100%27 filter=%27url(%23noise)%27 opacity=%270.12%27 mix-blend-mode=%27overlay%27 fill=%27%23888%27/%3E%3C/svg%3E'); border: 2px solid var(--border); border-radius: var(--radius-default); padding: 4px 12px; width: 200px;\"><select onfocus=\"this.dataset.guxBorder=this.style.border||'';this.dataset.guxBoxShadow=this.style.boxShadow||'';this.style.border='2px solid var(--secondary-col)';this.style.boxShadow='0 0 8px var(--secondary-col)'\" onblur=\"this.style.border=this.dataset.guxBorder||'';this.style.boxShadow=this.dataset.guxBoxShadow||''\" style=\"background: transparent; border: none; color: var(--on-primary); font-family: var(--font-display); font-size: 14px; text-transform: uppercase; width: 100%; outline: none; -webkit-appearance: none; appearance: none; padding-right: 24px;\"><option value=\"\">SELECT LINE</option><option value=\"1\">LIGNE 1</option><option value=\"2\">LIGNE 2</option></select><span style=\"position: absolute; right: 12px; top: 50%; transform: translateY(-50%); color: var(--on-primary); pointer-events: none;\">▼</span></div>",
      "label": "Métro Line Selector",
      "stateLabel": "A dropdown select with blue background and white text, styled as an enamel plaque."
    },
    {
      "name": "Enamel Toggle Checkbox",
      "desc": "A custom checkbox styled as a small enamel plaque that toggles state.",
      "html": "<label style=\"display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-display); font-size: 14px; color: var(--on-primary);\"><input onfocus=\"this.dataset.guxBorder=this.style.border||'';this.dataset.guxBoxShadow=this.style.boxShadow||'';this.style.border='2px solid var(--secondary-col)';this.style.boxShadow='0 0 8px var(--secondary-col)'\" onblur=\"this.style.border=this.dataset.guxBorder||'';this.style.boxShadow=this.dataset.guxBoxShadow||''\" type=\"checkbox\" style=\"display: none;\"><span style=\"width: 20px; height: 20px; background: var(--primary); background-image: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, transparent 40%); border: 2px solid var(--border); border-radius: 4px; display: flex; align-items: center; justify-content: center; transition: background 200ms, border-color 200ms;\"><svg viewBox=\"0 0 20 20\" width=\"12\" height=\"12\" style=\"opacity: 0;\"><polyline points=\"4,10 8,14 16,6\" fill=\"none\" stroke=\"var(--on-primary)\" stroke-width=\"2\"/></svg></span> ACCEPT TERMS</label>",
      "label": "Enamel Toggle Checkbox",
      "stateLabel": "A custom checkbox styled as a small enamel plaque that toggles state."
    }
  ],
  "extraComponents": [
    {
      "name": "Exit Badge",
      "desc": "A small blue badge with white uppercase 'SORTIE' text.",
      "html": "<div style=\"background: var(--primary); color: var(--on-primary); padding: 2px 8px; border-radius: 4px; font-family: var(--font-display); font-size: 12px; text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em; display: inline-block;\">SORTIE</div>"
    },
    {
      "name": "Circular Line Marker",
      "desc": "A white circle with a blue number representing Metro line numbers.",
      "html": "<div style=\"width: 32px; height: 32px; background: var(--on-primary); border-radius: 50%; border: 2px solid var(--primary); display: flex; align-items: center; justify-content: center; font-family: var(--font-display); font-weight: 700; font-size: 14px; color: var(--primary);\">1</div>"
    },
    {
      "name": "Directional Arrow",
      "desc": "A simple white upward-pointing arrow for direction indication.",
      "html": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 4L4 12H16L10 4Z\" fill=\"var(--on-primary)\"/></svg>"
    },
    {
      "name": "Corner Rivet",
      "desc": "A metallic rivet used as a decorative element on enamel signs.",
      "html": "<div style=\"width: 12px; height: 12px; background: var(--border); border-radius: 50%; box-shadow: inset 0 2px 4px rgba(0,0,0,0.2), 0 1px 0 rgba(255,255,255,0.3); display: inline-block;\"></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — CHÂTELET</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — CORRESPONDANCE</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — LIGNE 1</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — DIRECTION LA DÉFENSE</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — 7</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Do not use serif fonts on any plaque or button.",
      "avoid": {
        "html": "<div style=\"background: #1A4B8C; color: white; font-family: 'Times New Roman', serif; text-align: center; padding: 24px; border-radius: 12px;\">STATION</div>",
        "label": "Avoid"
      },
      "rule": "Do not use serif fonts on any plaque or button.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not use italic or oblique text on sign components.",
      "avoid": {
        "html": "<span style=\"font-style: italic; color: #1A4B8C; font-family: Inter, sans-serif;\">EXIT</span>",
        "label": "Avoid"
      },
      "rule": "Do not use italic or oblique text on sign components.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not use bright saturated blue (e.g., #00BFFF) in place of the muted dusty cerulean.",
      "avoid": {
        "html": "<div style=\"background: #00BFFF; color: white; padding: 16px; border-radius: 12px; font-family: Inter, sans-serif; text-transform: uppercase;\">SORTIE</div>",
        "label": "Avoid"
      },
      "rule": "Do not use bright saturated blue (e.g., #00BFFF) in place of the muted dusty cerulean.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not omit the metal border and four corner rivets on primary plaque components.",
      "avoid": {
        "html": "<div style=\"background: #1A4B8C; color: white; padding: 24px; border-radius: 12px; font-family: Inter, sans-serif; text-align: center; text-transform: uppercase;\">STATION</div>",
        "label": "Avoid"
      },
      "rule": "Do not omit the metal border and four corner rivets on primary plaque components.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "doAvoidStyle": {
    "desc": "Avoid any design that deviates from the enamel sign system: no glassmorphism, no neumorphism, no gradients beyond the vertical reflection.",
    "avoid": {
      "html": "<div style=\"background: linear-gradient(135deg, #1A4B8C, #2E7DB5); border-radius: 20px; box-shadow: 0 8px 32px rgba(0,0,0,0.2); backdrop-filter: blur(8px); padding: 24px; color: white; font-family: Inter, sans-serif;\">STATION</div>"
    }
  },
  "effects": [],
  "motion": [],
  "colors": {
    "primary": "#1A4B8C",
    "onPrimary": "#FFFFFF",
    "secondary": "#C41E3A",
    "neutral": "#2A2A2A",
    "outline": "#888888",
    "background": "#F5F0EB",
    "error": "#B71C1C",
    "success": "#2E7D32",
    "warning": "#F57F17",
    "info": "#1565C0"
  },
  "typography": {
    "display": {
      "fontFamily": "Inter, Arimo, sans-serif",
      "fontSize": "36px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "0.05em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "Inter, Arimo, sans-serif",
      "fontSize": "24px",
      "fontWeight": 600,
      "lineHeight": 1.375,
      "letterSpacing": "0.025em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "Inter, Arimo, sans-serif",
      "fontSize": "16px",
      "fontWeight": 500,
      "lineHeight": 1.375,
      "letterSpacing": "0.025em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "Inter, Arimo, sans-serif",
      "fontSize": "14px",
      "fontWeight": 400,
      "lineHeight": 1.5,
      "letterSpacing": "0em",
      "textTransform": "none"
    },
    "label": {
      "fontFamily": "Inter, Arimo, sans-serif",
      "fontSize": "14px",
      "fontWeight": 400,
      "lineHeight": 1,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    }
  },
  "radius": {
    "default": "12px",
    "card": "12px",
    "button": "12px",
    "input": "12px",
    "chip": "9999px"
  },
  "spacing": {
    "component-internal": "24px",
    "page-edge": "16px",
    "gap-component": "24px"
  },
  "layouts": {
    "copy": {
      "heroKicker": "SIGNALISATION MÉTRO",
      "heroHeadline": "PARIS MÉTRO ENAMEL SIGN SYSTEM",
      "heroSub": "WHITE-ON-BLUE UTILITARIAN COMPONENTS FOR DIGITAL WAYFINDING",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">EXPLORE STATIONS</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">VIEW COMPONENTS</button>",
      "navLinks": [
        "STATIONS",
        "LIGNES",
        "SIGNAGE",
        "ATELIER"
      ],
      "features": [
        {
          "title": "ENAMEL PLAQUES",
          "desc": "DEEP BLUE ROUNDED FIELDS WITH METAL BORDERS AND CORNER RIVETS. OPTIMAL FOR STATION NAMES AND DIRECTIONS.",
          "icon": "🚇",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🚇 ENAMEL PLAQUES</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">DEEP BLUE ROUNDED FIELDS WITH METAL BORDERS AND CORNER RIVETS. OPTIMAL FOR STATION NAMES AND DIRECTIONS.</div></div>"
        },
        {
          "title": "LINE MARKERS",
          "desc": "CIRCULAR WHITE BADGES WITH LINE NUMBER. PLACED ADJACENT TO STATION NAMES FOR IMMEDIATE IDENTIFICATION.",
          "icon": "🔵",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔵 LINE MARKERS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">CIRCULAR WHITE BADGES WITH LINE NUMBER. PLACED ADJACENT TO STATION NAMES FOR IMMEDIATE IDENTIFICATION.</div></div>"
        },
        {
          "title": "DIRECTIONAL ARROWS",
          "desc": "STROKE-BASED UPPER VECTORS. NO SERIFS, NO FILL. CLEAR EXIT AND CORRESPONDANCE INDICATORS.",
          "icon": "➡️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">➡️ DIRECTIONAL ARROWS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">STROKE-BASED UPPER VECTORS. NO SERIFS, NO FILL. CLEAR EXIT AND CORRESPONDANCE INDICATORS.</div></div>"
        },
        {
          "title": "EXIT BADGES",
          "desc": "COMPACT SORTIE MARKERS ALIGNED BASELINE. SMALL ENOUGH TO SUPPLEMENT WITHOUT CLUTTER.",
          "icon": "🚪",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🚪 EXIT BADGES</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">COMPACT SORTIE MARKERS ALIGNED BASELINE. SMALL ENOUGH TO SUPPLEMENT WITHOUT CLUTTER.</div></div>"
        }
      ],
      "ctaStripHeadline": "BUILD YOUR MÉTRO INTERFACE",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">START PROTOTYPING</button>",
      "sidebarBrand": "MÉTRO SIGNAGE",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "PANEL",
          "active": true
        },
        {
          "icon": "◉",
          "label": "INVENTORY",
          "active": false
        }
      ],
      "dashboardTitle": "R É S E A U   S I G N A G E   P A N E L",
      "metrics": [
        {
          "label": "PLAQUES ACTIVES",
          "value": "842",
          "delta": "+24",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "STATIONS COUVERTES",
          "value": "183",
          "delta": "+3",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "MARQUEURS DE LIGNE",
          "value": "412",
          "delta": "+12",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "FLÈCHES DÉPLOYÉES",
          "value": "907",
          "delta": "-8",
          "dir": "down",
          "direction": "down"
        }
      ],
      "chartTitle": "DÉPLOIEMENT PAR LIGNE",
      "panelATitle": "SIGNAGE INVENTORY",
      "panelARows": [
        {
          "label": "STATION NAMES",
          "value": "342",
          "pct": 100
        },
        {
          "label": "DIRECTIONS (SORTIE)",
          "value": "215",
          "pct": 100
        },
        {
          "label": "CORRESPONDANCE",
          "value": "98",
          "pct": 98
        },
        {
          "label": "LINE MARKERS",
          "value": "412",
          "pct": 100
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "RECENT SIGN UPDATES",
      "panelBCells": [
        {
          "label": "LIGNE 1",
          "value": "CHÂTEAU DE VINCENNES – REPLAQUÉ",
          "state": "ok"
        },
        {
          "label": "LIGNE 4",
          "value": "MONTPARNASSE – SORTIE NORD",
          "state": "warn"
        },
        {
          "label": "LIGNE 7",
          "value": "OPÉRA – CORRESPONDANCE AJOUTÉE",
          "state": "err"
        },
        {
          "label": "LIGNE 9",
          "value": "STRASBOURG SAINT-DENIS – RÉPARÉ",
          "state": "ok"
        },
        {
          "label": "LIGNE 12",
          "value": "CONCORDE – NOUVEAU MARQUEUR",
          "state": "warn"
        },
        {
          "label": "LIGNE 2",
          "value": "PLACE CLICHY – FLÈCHE REMPLACÉE",
          "state": "err"
        },
        {
          "label": "LIGNE 3",
          "value": "SAINT-LAZARE – BADGE REMIS",
          "state": "ok"
        },
        {
          "label": "LIGNE 11",
          "value": "LA CHAPELLE – SORTIE SUD",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "LIGNE 1",
        "LIGNE 2",
        "LIGNE 3",
        "LIGNE 4",
        "LIGNE 5",
        "LIGNE 6"
      ],
      "series": [
        {
          "data": [
            12,
            8,
            15,
            10,
            7,
            13,
            13,
            13,
            13,
            13,
            13,
            13
          ],
          "label": "PLAQUES",
          "axis": "left",
          "color": "#1A4B8C"
        },
        {
          "data": [
            5,
            4,
            6,
            3,
            6,
            4,
            4,
            4,
            4,
            4,
            4,
            4
          ],
          "label": "MARQUEURS",
          "axis": "right-1",
          "color": "#C41E3A"
        }
      ]
    },
    "splashRender": "function(el) { el.innerHTML = '<div style=\"display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:400px;padding:48px 24px;\"><div style=\"position:relative;width:360px;padding:40px 32px;background:var(--primary);background-image:linear-gradient(to bottom,rgba(255,255,255,0.15) 0%,transparent 40%),url(data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%27 height=%27100%27%3E%3Cfilter id=%27noise%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.65%27 numOctaves=%273%27 /%3E%3C/filter%3E%3Crect width=%27100%27 height=%27100%27 filter=%27url(%23noise)%27 opacity=%270.12%27 mix-blend-mode=%27overlay%27 fill=%27%23888%27/%3E%3C/svg%3E);border:2px solid var(--border);border-radius:var(--radius-default);box-shadow:var(--elevation-default);text-align:center;\"><div style=\"position:absolute;top:8px;left:8px;width:12px;height:12px;background:var(--border);border-radius:50%;box-shadow:var(--elevation-rivet);\"></div><div style=\"position:absolute;top:8px;right:8px;width:12px;height:12px;background:var(--border);border-radius:50%;box-shadow:var(--elevation-rivet);\"></div><div style=\"position:absolute;bottom:8px;left:8px;width:12px;height:12px;background:var(--border);border-radius:50%;box-shadow:var(--elevation-rivet);\"></div><div style=\"position:absolute;bottom:8px;right:8px;width:12px;height:12px;background:var(--border);border-radius:50%;box-shadow:var(--elevation-rivet);\"></div><div style=\"display:flex;flex-direction:column;align-items:center;gap:12px;\"><div style=\"width:48px;height:48px;background:var(--on-primary);border-radius:50%;border:2px solid var(--on-primary);display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-weight:700;font-size:20px;color:var(--primary);line-height:1;\">M</div><div style=\"font-family:var(--font-display);font-size:28px;font-weight:700;letter-spacing:0.08em;line-height:1.15;color:var(--on-primary);text-transform:uppercase;\">PARIS MÉTRO</div><div style=\"font-family:var(--font-display);font-size:14px;font-weight:500;letter-spacing:0.05em;color:var(--on-primary);text-transform:uppercase;\">ENAMEL SIGN SYSTEM</div></div></div></div>'; }",
    "showcaseRender": "function(el) { el.innerHTML = '<div style=\"display:grid;grid-template-columns:repeat(2,1fr);gap:24px;padding:32px;\"><div style=\"position:relative;padding:24px;background:var(--primary);background-image:linear-gradient(to bottom,rgba(255,255,255,0.15) 0%,transparent 40%),url(data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%27 height=%27100%27%3E%3Cfilter id=%27noise%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.65%27 numOctaves=%273%27 /%3E%3C/filter%3E%3Crect width=%27100%27 height=%27100%27 filter=%27url(%23noise)%27 opacity=%270.12%27 mix-blend-mode=%27overlay%27 fill=%27%23888%27/%3E%3C/svg%3E);border:2px solid var(--border);border-radius:var(--radius-default);text-align:center;\"><div style=\"position:absolute;top:6px;left:6px;width:12px;height:12px;background:var(--border);border-radius:50%;box-shadow:var(--elevation-rivet);\"></div><div style=\"position:absolute;top:6px;right:6px;width:12px;height:12px;background:var(--border);border-radius:50%;box-shadow:var(--elevation-rivet);\"></div><div style=\"position:absolute;bottom:6px;left:6px;width:12px;height:12px;background:var(--border);border-radius:50%;box-shadow:var(--elevation-rivet);\"></div><div style=\"position:absolute;bottom:6px;right:6px;width:12px;height:12px;background:var(--border);border-radius:50%;box-shadow:var(--elevation-rivet);\"></div><div style=\"font-family:var(--font-display);font-size:18px;font-weight:700;letter-spacing:0.05em;color:var(--on-primary);text-transform:uppercase;\">CHÂTELET</div><div style=\"font-family:var(--font-display);font-size:12px;font-weight:500;letter-spacing:0.025em;color:var(--on-primary);text-transform:uppercase;margin-top:8px;\">LIGNE 1</div></div><div style=\"position:relative;padding:24px;background:var(--primary);background-image:linear-gradient(to bottom,rgba(255,255,255,0.15) 0%,transparent 40%),url(data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%27 height=%27100%27%3E%3Cfilter id=%27noise%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.65%27 numOctaves=%273%27 /%3E%3C/filter%3E%3Crect width=%27100%27 height=%27100%27 filter=%27url(%23noise)%27 opacity=%270.12%27 mix-blend-mode=%27overlay%27 fill=%27%23888%27/%3E%3C/svg%3E);border:2px solid var(--border);border-radius:var(--radius-default);text-align:center;\"><div style=\"position:absolute;top:6px;left:6px;width:12px;height:12px;background:var(--border);border-radius:50%;box-shadow:var(--elevation-rivet);\"></div><div style=\"position:absolute;top:6px;right:6px;width:12px;height:12px;background:var(--border);border-radius:50%;box-shadow:var(--elevation-rivet);\"></div><div style=\"position:absolute;bottom:6px;left:6px;width:12px;height:12px;background:var(--border);border-radius:50%;box-shadow:var(--elevation-rivet);\"></div><div style=\"position:absolute;bottom:6px;right:6px;width:12px;height:12px;background:var(--border);border-radius:50%;box-shadow:var(--elevation-rivet);\"></div><div style=\"font-family:var(--font-display);font-size:18px;font-weight:700;letter-spacing:0.05em;color:var(--on-primary);text-transform:uppercase;\">OPÉRA</div><div style=\"font-family:var(--font-display);font-size:12px;font-weight:500;letter-spacing:0.025em;color:var(--on-primary);text-transform:uppercase;margin-top:8px;\">SORTIE</div></div></div>'; }",
    "panelCRender": "function(el) { el.innerHTML = '<div style=\"position:relative;padding:32px;background:var(--primary);background-image:linear-gradient(to bottom,rgba(255,255,255,0.15) 0%,transparent 40%),url(data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%27 height=%27100%27%3E%3Cfilter id=%27noise%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.65%27 numOctaves=%273%27 /%3E%3C/filter%3E%3Crect width=%27100%27 height=%27100%27 filter=%27url(%23noise)%27 opacity=%270.12%27 mix-blend-mode=%27overlay%27 fill=%27%23888%27/%3E%3C/svg%3E);border:2px solid var(--border);border-radius:var(--radius-default);text-align:center;\"><div style=\"position:absolute;top:8px;left:8px;width:12px;height:12px;background:var(--border);border-radius:50%;box-shadow:var(--elevation-rivet);\"></div><div style=\"position:absolute;top:8px;right:8px;width:12px;height:12px;background:var(--border);border-radius:50%;box-shadow:var(--elevation-rivet);\"></div><div style=\"position:absolute;bottom:8px;left:8px;width:12px;height:12px;background:var(--border);border-radius:50%;box-shadow:var(--elevation-rivet);\"></div><div style=\"position:absolute;bottom:8px;right:8px;width:12px;height:12px;background:var(--border);border-radius:50%;box-shadow:var(--elevation-rivet);\"></div><div style=\"font-family:var(--font-display);font-size:12px;font-weight:500;letter-spacing:0.1em;color:var(--on-primary);text-transform:uppercase;margin-bottom:12px;\">PLAQUES ACTIVES</div><div style=\"font-family:var(--font-display);font-size:36px;font-weight:700;letter-spacing:0.02em;color:var(--on-primary);\">842</div><div style=\"font-family:var(--font-display);font-size:11px;font-weight:400;letter-spacing:0.05em;color:var(--on-primary);margin-top:8px;padding:4px 12px;background:rgba(255,255,255,0.1);border-radius:9999px;display:inline-block;\">+24</div></div>'; }",
    "heroBackground": "function(el) { el.style.background = '#F5F0EB'; el.style.backgroundImage = 'repeating-linear-gradient(0deg, transparent, transparent 40px, #E8E4DD 40px, #E8E4DD 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, #E8E4DD 40px, #E8E4DD 41px)'; }",
    "ctaBackground": "function(el) { el.style.background = 'var(--primary)'; el.style.backgroundImage = 'linear-gradient(to bottom, rgba(255,255,255,0.08) 0%, transparent 100%)'; }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'position:relative;height:16px;margin:24px 0;display:flex;align-items:center;justify-content:center;'; var line = document.createElement('div'); line.style.cssText = 'flex:1;height:2px;background:var(--border);'; d.appendChild(line); var r1 = document.createElement('div'); r1.style.cssText = 'width:12px;height:12px;background:var(--border);border-radius:50%;box-shadow:var(--elevation-rivet);position:absolute;left:0;top:50%;transform:translateY(-50%);'; d.appendChild(r1); var r2 = document.createElement('div'); r2.style.cssText = 'width:12px;height:12px;background:var(--border);border-radius:50%;box-shadow:var(--elevation-rivet);position:absolute;right:0;top:50%;transform:translateY(-50%);'; d.appendChild(r2); return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = '#F5F0EB'; el.style.backgroundImage = 'repeating-linear-gradient(0deg, transparent, transparent 20px, #E8E4DD 20px, #E8E4DD 21px), repeating-linear-gradient(90deg, transparent, transparent 20px, #E8E4DD 20px, #E8E4DD 21px)'; }",
    "surfaceOverlay": "function(el) { /* No global overlay per spec; leave empty */ }"
  },
  "ambientCanvas": "function(tick) { var d = document.createElement('div'); d.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:0;opacity:0.3;'; d.style.background = 'var(--primary)'; d.style.backgroundImage = 'repeating-linear-gradient(0deg, transparent, transparent ' + (20 + (tick % 5)) + 'px, rgba(255,255,255,0.05) ' + (20 + (tick % 5)) + 'px, rgba(255,255,255,0.05) ' + (21 + (tick % 5)) + 'px), repeating-linear-gradient(90deg, transparent, transparent ' + (20 + (tick % 5)) + 'px, rgba(255,255,255,0.05) ' + (20 + (tick % 5)) + 'px, rgba(255,255,255,0.05) ' + (21 + (tick % 5)) + 'px)'; return d; }",
  "shadcnTokens": {
    "--color-background": "#F5F0EB",
    "--color-popover": "#F5F0EB",
    "--color-foreground": "#2A2A2A",
    "--color-card-foreground": "#2A2A2A",
    "--color-popover-foreground": "#2A2A2A",
    "--color-card": "#1A4B8C",
    "--color-muted": "#1A4B8C",
    "--color-muted-foreground": "#666666",
    "--color-primary": "#1A4B8C",
    "--color-ring": "#1A4B8C",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#C41E3A",
    "--color-accent": "#C41E3A",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
    "--color-border": "#888888",
    "--color-input": "#888888",
    "--color-destructive": "#B71C1C"
  },
  "shadcnTokensClassic": {
    "--background": "#F5F0EB",
    "--popover": "#F5F0EB",
    "--foreground": "#2A2A2A",
    "--card-foreground": "#2A2A2A",
    "--popover-foreground": "#2A2A2A",
    "--card": "#1A4B8C",
    "--muted": "#1A4B8C",
    "--muted-foreground": "#666666",
    "--primary": "#1A4B8C",
    "--ring": "#1A4B8C",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#C41E3A",
    "--accent": "#C41E3A",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#888888",
    "--input": "#888888",
    "--destructive": "#B71C1C"
  }
});
