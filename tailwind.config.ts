import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: "450px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      '2xl': "1536px",
      'celular': '320px',
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkBackground: "var(--dark-background)",
        darkForeground: "var(--dark-foreground)",
      },
      textColor: {
        'gray': '#D4D4D4',
        'gray-dark': '#787878',
        'soft-gray': '#d1d5db',
      },
    },
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['27px', '32px'],
      xxl: ['45px', '55px'],
    }
  },
  plugins: [],
};
export default config;
