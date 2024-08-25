import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#E53170',
        'disabled-primary': '#8EC2F2',
        title: "#252B42",
        success: "#2DC071",
        'success-secondary': '#23856D',
        'text-color': '#737373',
        'main-text': '#252B42',
        muted: '#BDBDBD'
      },
      width: {
        500: '500px'
      }
    },
  },
  plugins: [],
};
export default config;
