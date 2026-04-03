import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#000000",
          white: "#FFFFFF",
          red: "#FF3B1D", 
          grey: {
            100: "#F5F5F7",
            800: "#1A1A1B",
            900: "#121212",
          }
        },
      },
      fontFamily: {
        heading: ["var(--font-bricolage)"],
        body: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
export default config;