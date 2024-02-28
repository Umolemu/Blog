import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      flex: {
        1: "1",
        2: "2",
        4: "4",
        5: "5"
      }
    },
    screens: {
      'sm': {'max': '640px'},
      'smmin': {'min': '640px'},
      'lg': {'max': '1024px'},
      'lgmin': {'min': '1024px'},
      'md': {'max': '767px'},
      'mdmin': {'min': '767px'}
     },
  },
  plugins: [],
};
export default config;
