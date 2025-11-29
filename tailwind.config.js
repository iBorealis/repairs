/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7ff',
          100: '#bae7ff',
          200: '#91d5ff',
          300: '#69c0ff',
          400: '#40a9ff',
          500: '#1890ff',
          600: '#096dd9',
          700: '#0050b3',
          800: '#003a8c',
          900: '#002766',
        },
        gaming: {
          50: '#ffe6f0',
          100: '#ffb3d1',
          200: '#ff80b3',
          300: '#ff4d94',
          400: '#ff1a75',
          500: '#e6005c',
          600: '#b30047',
          700: '#800033',
          800: '#4d001f',
          900: '#1a000a',
        },
        eco: {
          50: '#e6f9f0',
          100: '#b3f0d4',
          200: '#80e6b8',
          300: '#4ddd9c',
          400: '#1ad380',
          500: '#00ba66',
          600: '#009150',
          700: '#00683a',
          800: '#003f24',
          900: '#00160d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

