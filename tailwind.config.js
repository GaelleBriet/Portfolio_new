/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        btnGradient: `linear-gradient(180deg, #1A1A1A, #131313)`,
        lightGradient: `
          radial-gradient(ellipse at top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 60%) no-repeat top center,
          radial-gradient(ellipse at bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 60%) no-repeat bottom center,
          linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(63, 100, 233, 0.3) 35%, rgba(151, 71, 255, 0.3) 45%, rgba(233, 63, 63, 0.3) 55%, rgba(255, 184, 0, 0.3) 65%, rgba(255, 255, 255, 1) 100%) no-repeat top center,
          linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 184, 0, 0.3) 35%, rgba(233, 63, 63, 0.3) 45%, rgba(151, 71, 255, 0.3) 55%, rgba(63, 100, 233, 0.3) 65%, rgba(255, 255, 255, 1) 100%) no-repeat bottom center,
          white
        `,
        darkGradient: `
          radial-gradient(ellipse at top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 60%) no-repeat top center,
          radial-gradient(ellipse at bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 60%) no-repeat bottom center,
          linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(63, 100, 233, 0.3) 35%, rgba(151, 71, 255, 0.3) 45%, rgba(233, 63, 63, 0.3) 55%, rgba(255, 184, 0, 0.3) 65%, rgba(0, 0, 0, 1) 100%) no-repeat top center,
          linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(255, 184, 0, 0.3) 35%, rgba(233, 63, 63, 0.3) 45%, rgba(151, 71, 255, 0.3) 55%, rgba(63, 100, 233, 0.3) 65%, rgba(0, 0, 0, 1) 100%) no-repeat bottom center,
          black
        `,
      },
      colors: {
        basic: {
          black: "#0D0D0D",
          white: "#FFFFFF",
          onyx: "#181818",
          darkGray: "#808080",
          mediumGray: "rgba(128, 128, 128, 0.5)",
          lightGray: "#C5C5C5",
          lightBlue: "rgba(63,100,234,0.43)",
          lightRed: "rgba(233,63,64,0.43)",
          lightYellow: "rgba(255,184,0,0.84)",
        },
        dark: {
          cardBorder: "#383737",
          white_10: "rgba(255,255,255,0.1)",
          white_25: "rgba(255,255,255,0.25)",
          black_50: "rgba(21,21,21,0.5)",
          bg_navbar: "rgba(24,24,29,0.6)",
          border_navbar: "rgba(39,38,44,0.38)",
        },
        light: {
          mainBG: "#fbfbfb",
          faintWhite: "#f3f3f3",
          cardBorder: "#EBEBEB",
          cardBG: "#F6F6F6",
          black_10: "rgba(21,21,21,0.1)",
          bg_navbar: "rgba(24,24,29,0.3)",
          border_navbar: "rgba(36,38,44,0.3)",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        script: ["Nanum Pen Script", "cursive"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        md2: "850px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [
    function ({ addBase, addUtilities, theme }) {
      addUtilities({
        ".nav-mini-light": {
          backgroundColor: "theme(colors.light.bg_navbar)",
          border: "1px solid",
          borderColor: "theme(colors.light.border_navbar)",
          borderRadius: "12px",
        },
        ".nav-mini-dark": {
          backgroundColor: "theme(colors.dark.bg_navbar)",
          border: "1px solid",
          borderColor: "theme(colors.dark.border_navbar)",
          borderRadius: "12px",
        },
        ".nav-web": {
          width: "1024px",
        },
        ".nav-light": {
          backgroundColor: "theme(colors.dark.white_25)",
          border: "1px solid",
          textColor: "theme(colors.basic.onyx)",
          borderColor: "theme(colors.light.border_navbar)",
          borderRadius: "12px",
        },
        ".nav-dark": {
          backgroundColor: "theme(colors.dark.bg_navbar)",
          border: "1px solid",
          borderColor: "theme(colors.dark.border_navbar)",
          borderRadius: "12px",
        },
      });
    },
  ],
};
