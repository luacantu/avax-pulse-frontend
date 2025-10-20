/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        backdrop: '#0b0b0d',
        panel: '#0f1013',
        gridline: '#121212',
        accent: '#E84142',
        muted: '#a0a0a0',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      dropShadow: {
        glow: '0 0 25px rgba(232,65,66,.25)',
      },
    },
  },
  plugins: [],
};
