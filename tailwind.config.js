/** @type {import('tailwindcss').Config} */
export default {
  // 1. THIS LINE FIXES THE WHITE TEXT ISSUE
  darkMode: 'class', 
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        accent: '#4f46e5',      // Indigo
        accentLight: '#e0e7ff', // Light Indigo
        ink: '#0f172a',         // Deep Slate
        paper: '#f8fafc',       // Slate-50
      }
    },
  },
  plugins: [],
}