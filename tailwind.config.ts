import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E53170',
        'high-text': '#571032',
        'high-bg': '#FCEEF5',
        'medium-text': '#B07289',
        'medium-bg': '#F8F2F4'
      },
      width: {
        500: '500px'
      }
    },
  },
  plugins: [],
};
export default config;
