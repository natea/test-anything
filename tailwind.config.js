/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        progress: {
          '0%': { width: '0%' },
          '95%': { width: '100%' },
          '100%': { width: '100%' }
        },
        'fade-in-1': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '15%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in-2': {
          '0%, 25%': { opacity: '0', transform: 'translateY(10px)' },
          '40%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in-3': {
          '0%, 50%': { opacity: '0', transform: 'translateY(10px)' },
          '65%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in-4': {
          '0%, 75%': { opacity: '0', transform: 'translateY(10px)' },
          '90%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        progress: 'progress 15s forwards',
        'fade-in-1': 'fade-in-1 15s forwards',
        'fade-in-2': 'fade-in-2 15s forwards',
        'fade-in-3': 'fade-in-3 15s forwards',
        'fade-in-4': 'fade-in-4 15s forwards'
      }
    },
  },
  plugins: [],
} 