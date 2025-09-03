/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#FFFFFF',
        secondary: '#0000FF',
        background: '#FFFFFF',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      }
    },
  },
  plugins: [],
};