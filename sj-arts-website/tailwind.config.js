/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FFF8F2',
        primary: '#8B5E3C',
        secondary: '#D4AF37',
        darkText: '#2A2A2A',
        darkBg: '#1A1A1A',
        darkCard: '#252525',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 12px 35px rgba(42, 42, 42, 0.08)',
      },
    },
  },
  plugins: [],
}
