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
        "fade-header": 'fadeIn .5s ease-in-out',
      },

      keyframes: {
        fadeIn: {
					from: { opacity: '0', "padding-top": '50px' },
					to: { opacity: '1', "padding-top": '0' },
				},
      },
    },
  },
  plugins: [],
};
export default config;
