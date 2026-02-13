/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#2563eb'
      },
      fontFamily: {
        sans: ['Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif']
      },
      boxShadow: {
        card: '0 2px 8px rgba(15, 23, 42, 0.06)'
      }
    }
  },
  plugins: []
};
