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
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(7, 22, 40, 0.12), 0 0 1px 1px rgba(7, 22, 40, 0.05)',
        'luxury-hover': '0 30px 60px -12px rgba(7, 22, 40, 0.2), 0 0 1px 1px rgba(197, 155, 39, 0.25)',
        'gold-glow': '0 0 25px -5px rgba(197, 155, 39, 0.4), 0 8px 16px -4px rgba(197, 155, 39, 0.2)',
        'gold-sm': '0 2px 10px -2px rgba(197, 155, 39, 0.3)',
      },
      animation: {
        'shimmer': 'shimmer 2.5s infinite linear',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
