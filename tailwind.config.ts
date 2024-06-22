import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      animation: {
        "fade-header": 'fadeIn 1s ease-in-out',
        "fade-header-mobile-fig": 'fadeIn-mobile-fig 1s ease-in-out',
        "fade-header-mobile-text": 'fadeIn-mobile-text 1s ease-in-out',
        "fade-nav": 'fadeInNav 1s ease-in-out',
      },

      keyframes: {
        fadeIn: {
					from: { opacity: '0', "padding-top": '100px' },
					to: { opacity: '1', "padding-top": '0' },
				},
        "fadeIn-mobile-fig": {
					from: { opacity: '0', "margin-top": '100px' },
					to: { opacity: '1', "margin-top": '10%' },
				},
        "fadeIn-mobile-text": {
					from: { opacity: '0', "padding-top": '100px' },
					to: { opacity: '1', "padding-top": '5rem' },
				},
        fadeInNav: {
					from: { opacity: '0', "margin-top": '-50px' },
					to: { opacity: '1', "margin-top": '0' },
				},
      },
    },
  },
  plugins: [],
};
export default config;
