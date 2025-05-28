/**  @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#E11D48",
        secondary: "#F43F5E",
        dark: "#0C0A0B",
        "dark-light": "#1E1A1D",
        neon: "#FF2D55"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 4px rgba(255, 45, 85, 0.3)' },
          '100%': { textShadow: '0 0 8px rgba(255, 45, 85, 0.6)' },
        }
      }
    },
  },
  plugins: [],
};
 