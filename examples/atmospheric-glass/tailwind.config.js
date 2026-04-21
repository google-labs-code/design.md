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
        "surface": "#0b1326",
        "surface-dim": "#0b1326",
        "surface-bright": "#31394d",
        "surface-container-lowest": "#060e20",
        "surface-container-low": "#131b2e",
        "surface-container": "#171f33",
        "surface-container-high": "#222a3d",
        "surface-container-highest": "#2d3449",
        "on-surface": "#dae2fd",
        "on-surface-variant": "#c4c7c8",
        "inverse-surface": "#dae2fd",
        "inverse-on-surface": "#283044",
        "outline": "#8e9192",
        "outline-variant": "#444748",
        "surface-tint": "#c6c6c7",
        "primary": "#ffffff",
        "on-primary": "#2f3131",
        "primary-container": "#e2e2e2",
        "on-primary-container": "#636565",
        "inverse-primary": "#5d5f5f",
        "secondary": "#adc9eb",
        "on-secondary": "#14324e",
        "secondary-container": "#304b68",
        "on-secondary-container": "#9fbbdd",
        "tertiary": "#ffffff",
        "on-tertiary": "#620040",
        "tertiary-container": "#ffd8e7",
        "on-tertiary-container": "#ab3779",
        "error": "#ffb4ab",
        "on-error": "#690005",
        "error-container": "#93000a",
        "on-error-container": "#ffdad6",
        "primary-fixed": "#e2e2e2",
        "primary-fixed-dim": "#c6c6c7",
        "on-primary-fixed": "#1a1c1c",
        "on-primary-fixed-variant": "#454747",
        "secondary-fixed": "#d0e4ff",
        "secondary-fixed-dim": "#adc9eb",
        "on-secondary-fixed": "#001d35",
        "on-secondary-fixed-variant": "#2d4965",
        "tertiary-fixed": "#ffd8e7",
        "tertiary-fixed-dim": "#ffafd3",
        "on-tertiary-fixed": "#3d0026",
        "on-tertiary-fixed-variant": "#85145a",
        "background": "#0b1326",
        "on-background": "#dae2fd",
        "surface-variant": "#2d3449",
      },
      fontFamily: {
        "display-lg": ["Inter"],
        "headline-lg": ["Inter"],
        "headline-md": ["Inter"],
        "body-lg": ["Inter"],
        "body-md": ["Inter"],
        "label-sm": ["Inter"],
      },
      fontSize: {
        "display-lg": [
          "84px",
          {
            lineHeight: "90px",
            letterSpacing: "-0.04em",
            fontWeight: "700",
          },
        ],
        "headline-lg": [
          "32px",
          {
            lineHeight: "40px",
            letterSpacing: "-0.02em",
            fontWeight: "600",
          },
        ],
        "headline-md": [
          "24px",
          {
            lineHeight: "32px",
            fontWeight: "500",
          },
        ],
        "body-lg": [
          "18px",
          {
            lineHeight: "28px",
            fontWeight: "400",
          },
        ],
        "body-md": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "400",
          },
        ],
        "label-sm": [
          "12px",
          {
            lineHeight: "16px",
            letterSpacing: "0.05em",
            fontWeight: "600",
          },
        ],
      },
      borderRadius: {
        "sm": "0.25rem",
        "DEFAULT": "0.5rem",
        "md": "0.75rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "full": "9999px",
      },
      spacing: {
        "unit": "8px",
        "container-padding": "24px",
        "card-gap": "16px",
        "section-margin": "40px",
        "glass-padding": "20px",
      },
    },
  },
};
