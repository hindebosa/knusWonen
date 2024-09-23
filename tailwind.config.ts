import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        overlock: ["Overlock", "serif"],
      },
      colors: {
        text: {
          primary: "#39468C",
          secondary: "#fff",
          tertiary: " #39468C",
          blue: "#35BCE7",
          purple: "#39468C",
          grey: "#999999",
          orange: "#FF6B38",
          lightGrey: "#1E1E1E",
        },
        button: {
          primary: "#fff",
          secondary: "#fff",
        },
        section: {
          primary: "#9AA4D9",
          grey: "#E5E5E5",
        },
      },
    },
  },
  plugins: [],
};
export default config;
