/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Text"',
          '"SF Pro Display"',
          '"Inter"',
          "system-ui",
          "sans-serif",
        ],
        display: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Inter"',
          "system-ui",
          "sans-serif",
        ],
        mono: [
          '"SF Mono"',
          '"JetBrains Mono"',
          "ui-monospace",
          "monospace",
        ],
      },
      colors: {
        // Apple Full-Black Theme Tokens
        primary: {
          DEFAULT: "#0066cc",       // Action Blue
          focus: "#0071e3",         // Keyboard focus outline
          "on-dark": "#2997ff",     // Sky Link Blue on dark
        },
        ink: {
          DEFAULT: "#f5f5f7",       // High contrast white text
          "muted-80": "#d2d2d7",    // Secondary body text
          "muted-48": "#86868b",    // Fine-print & subtle labels
        },
        body: {
          DEFAULT: "#f5f5f7",
          "on-dark": "#ffffff",
          muted: "#a1a1a6",
        },
        hairline: {
          DEFAULT: "#26272b",       // Subtle dark divider
          dark: "#1c1d20",
          strong: "#38393f",
        },
        canvas: {
          DEFAULT: "#000000",       // Pure Space Black
          surface: "#090a0c",       // Deep black card surface
        },
        surface: {
          black: "#000000",
          "tile-1": "#121316",      // Elevation 1
          "tile-2": "#17181c",      // Elevation 2
          "tile-3": "#1e1f24",      // Elevation 3
        },
      },
      fontSize: {
        "hero-display": ["56px", { lineHeight: "1.07", letterSpacing: "-0.28px", fontWeight: "600" }],
        "display-lg": ["40px", { lineHeight: "1.10", letterSpacing: "0", fontWeight: "600" }],
        "display-md": ["34px", { lineHeight: "1.47", letterSpacing: "-0.374px", fontWeight: "600" }],
        "lead": ["28px", { lineHeight: "1.14", letterSpacing: "0.196px", fontWeight: "400" }],
        "lead-airy": ["24px", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "300" }],
        "tagline": ["21px", { lineHeight: "1.19", letterSpacing: "0.231px", fontWeight: "600" }],
        "body-strong": ["17px", { lineHeight: "1.24", letterSpacing: "-0.374px", fontWeight: "600" }],
        "body-apple": ["17px", { lineHeight: "1.47", letterSpacing: "-0.374px", fontWeight: "400" }],
        "dense-link": ["17px", { lineHeight: "2.41", letterSpacing: "0", fontWeight: "400" }],
        "caption-apple": ["14px", { lineHeight: "1.43", letterSpacing: "-0.224px", fontWeight: "400" }],
        "caption-strong": ["14px", { lineHeight: "1.29", letterSpacing: "-0.224px", fontWeight: "600" }],
        "button-large": ["18px", { lineHeight: "1.0", letterSpacing: "0", fontWeight: "300" }],
        "button-utility": ["14px", { lineHeight: "1.29", letterSpacing: "-0.224px", fontWeight: "400" }],
        "fine-print": ["12px", { lineHeight: "1.0", letterSpacing: "-0.12px", fontWeight: "400" }],
        "micro-legal": ["10px", { lineHeight: "1.3", letterSpacing: "-0.08px", fontWeight: "400" }],
        "nav-link": ["12px", { lineHeight: "1.0", letterSpacing: "-0.12px", fontWeight: "400" }],
      },
      borderRadius: {
        "apple-xs": "5px",
        "apple-sm": "8px",
        "apple-md": "11px",
        "apple-lg": "18px",
        "apple-pill": "9999px",
      },
      boxShadow: {
        "apple-product": "0 10px 40px 0 rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};
