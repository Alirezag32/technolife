import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customBorderNavigationColor: "rgb(168, 132, 58)",
        footerBg: "rgb(20 39 64 )",
      },
      screens: {
        "max-xs": { max: "428px" },
        "max-sm": { max: "639px" },
        "max-md": { max: "768px" },
        "max-lg": { max: "1023px" },
        "max-xl": { max: "1120px" },

        "max-2xl": { max: "1535px" },
      },
      animation: {
        slideUp: "slideUp 0.3s ease-out forwards",
        slideDown: "slideDown 0.3s ease-out forwards",
      },
      keyframes: {
        slideUp: {
          "0%": { height: "auto", opacity: "1", visibility: "visible" },
          "100%": { height: "0", opacity: "0", visibility: "hidden" },
        },
        slideDown: {
          "0%": { height: "0", opacity: "0", visibility: "hidden" },
          "100%": { height: "auto", opacity: "1", visibility: "visible" },
        },
      },
    },
  },
  plugins: [],
};
export default config;



