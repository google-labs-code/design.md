// Copyright 2026 UIZZE contributors
//
// Derived from the UIZZE example DESIGN.md for Tailwind CSS v3.

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0a",
        secondary: "#3476d8",
        tertiary: "#f8c808",
        surface: "#ffffff",
        "surface-dim": "#f5f5f5",
        "surface-container-low": "#fafafa",
        "surface-container": "#f5f5f5",
        "surface-container-high": "#ededed",
        "surface-container-highest": "#e5e5e5",
        "on-surface": "#0a0a0a",
        "on-surface-variant": "#737373",
        outline: "#a3a3a3",
        "outline-variant": "#e5e5e5",
        background: "#ffffff",
        "on-background": "#0a0a0a",
        "secondary-container": "#eaf2ff",
        "on-secondary-container": "#173b72",
        "tertiary-container": "#fff7cc",
        "on-tertiary-container": "#5c4700",
        error: "#b91c1c",
        "on-error": "#ffffff",
        "error-container": "#fee2e2",
        "on-error-container": "#7f1d1d"
      },
      fontFamily: {
        "display-lg": ["Figtree"],
        "headline-lg": ["Figtree"],
        "headline-md": ["Figtree"],
        "body-lg": ["Figtree"],
        "body-md": ["Figtree"],
        "label-md": ["Geist Mono"]
      },
      fontSize: {
        "display-lg": ["64px", { lineHeight: "72px", letterSpacing: "-0.04em", fontWeight: "800" }],
        "headline-lg": ["36px", { lineHeight: "44px", letterSpacing: "-0.02em", fontWeight: "800" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "label-md": ["13px", { lineHeight: "20px", letterSpacing: "0.01em", fontWeight: "500" }]
      },
      borderRadius: {
        sm: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1.5rem",
        full: "9999px"
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "48px",
        section: "80px",
        container: "1200px"
      }
    }
  }
};
