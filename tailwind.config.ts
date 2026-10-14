import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            50: '#f0f5fa',
            100: '#e1ecf5',
            200: '#c2d8eb',
            300: '#94bde0',
            400: '#5e9bd1',
            500: '#387ec1',
            600: '#2565a5',
            700: '#1e5187',
            800: '#1b4570',
            900: '#0c2440', // Deep corporate navy
            950: '#071628',
          },
          gold: {
            50: '#fdfbf2',
            100: '#fbf6e2',
            200: '#f5ebc3',
            300: '#ecda9b',
            400: '#dfc26b',
            500: '#c59b27', // Signature brochure gold
            600: '#b0841f',
            700: '#8e651c',
            800: '#75511d',
            900: '#64441e',
            950: '#3a240c',
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
