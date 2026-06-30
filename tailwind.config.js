/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0a0a0a',
        'bg-secondary': '#141414',
        'bg-card': '#1a1a1a',
        'accent': '#00d4ff',
        'accent-secondary': '#a855f7',
        'gold': '#fbbf24',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'Noto Sans SC', 'sans-serif'],
        'sans': ['Noto Sans SC', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}
