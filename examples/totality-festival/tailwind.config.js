// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface": "#121318",
        "surface-dim": "#121318",
        "surface-bright": "#38393f",
        "surface-container-lowest": "#0d0e13",
        "surface-container-low": "#1a1b21",
        "surface-container": "#1e1f25",
        "surface-container-high": "#292a2f",
        "surface-container-highest": "#34343a",
        "on-surface": "#e3e1e9",
        "on-surface-variant": "#d0c6ab",
        "inverse-surface": "#e3e1e9",
        "inverse-on-surface": "#2f3036",
        "outline": "#999077",
        "outline-variant": "#4d4732",
        "surface-tint": "#e9c400",
        "primary": "#fff6df",
        "on-primary": "#3a3000",
        "primary-container": "#ffd700",
        "on-primary-container": "#705e00",
        "inverse-primary": "#705d00",
        "secondary": "#bdf4ff",
        "on-secondary": "#00363d",
        "secondary-container": "#00e3fd",
        "on-secondary-container": "#00616d",
        "tertiary": "#fcf3ff",
        "on-tertiary": "#3b2754",
        "tertiary-container": "#e7d1ff",
        "on-tertiary-container": "#6b5586",
        "error": "#ffb4ab",
        "on-error": "#690005",
        "error-container": "#93000a",
        "on-error-container": "#ffdad6",
        "primary-fixed": "#ffe16d",
        "primary-fixed-dim": "#e9c400",
        "on-primary-fixed": "#221b00",
        "on-primary-fixed-variant": "#544600",
        "secondary-fixed": "#9cf0ff",
        "secondary-fixed-dim": "#00daf3",
        "on-secondary-fixed": "#001f24",
        "on-secondary-fixed-variant": "#004f58",
        "tertiary-fixed": "#eedbff",
        "tertiary-fixed-dim": "#d6bcf4",
        "on-tertiary-fixed": "#25113e",
        "on-tertiary-fixed-variant": "#523d6c",
        "background": "#121318",
        "on-background": "#e3e1e9",
        "surface-variant": "#34343a",
      },
      fontFamily: {
        "headline-xl": ["Space Grotesk"],
        "headline-lg": ["Space Grotesk"],
        "headline-md": ["Space Grotesk"],
        "body-lg": ["Inter"],
        "body-md": ["Inter"],
        "label-md": ["Space Grotesk"],
      },
      fontSize: {
        "headline-xl": [
          "72px",
          {
            lineHeight: "80px",
            letterSpacing: "-0.04em",
            fontWeight: "700",
          },
        ],
        "headline-lg": [
          "48px",
          {
            lineHeight: "56px",
            letterSpacing: "-0.02em",
            fontWeight: "600",
          },
        ],
        "headline-md": [
          "32px",
          {
            lineHeight: "40px",
            letterSpacing: "0em",
            fontWeight: "600",
          },
        ],
        "body-lg": [
          "18px",
          {
            lineHeight: "28px",
            letterSpacing: "0em",
            fontWeight: "400",
          },
        ],
        "body-md": [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "0em",
            fontWeight: "400",
          },
        ],
        "label-md": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0.1em",
            fontWeight: "500",
          },
        ],
      },
      borderRadius: {
        "sm": "0.125rem",
        "DEFAULT": "0.25rem",
        "md": "0.375rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px",
      },
      spacing: {
        "unit": "8px",
        "container-max": "1280px",
        "gutter": "24px",
        "margin-mobile": "16px",
        "margin-desktop": "64px",
      },
    },
  },
};
