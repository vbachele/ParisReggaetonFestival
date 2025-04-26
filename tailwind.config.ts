import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Righteous', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        righteous: ['Righteous', 'cursive'],
      },
      colors: {
        primary: {
          gold: '#f5c78e',
          goldLight: '#f5e6c3',
          goldDark: '#f0d4a3',
        },
        text: {
          primary: '#4323FC',
          secondary: '#000000',
        },
        background: {
          primary: '#f5c78e',
          secondary: '#ffffff',
          tertiary: '#f5f5f5',
        },
      },
    },
  },
  plugins: [],
};

export default config;
