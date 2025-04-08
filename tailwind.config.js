/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mid': { 'raw': '(min-width: 300px) and (max-width: 490px)' },
        'midt': { 'raw': '(min-width: 1024px) and (max-width: 1115px)' },
        'mm':'1200px',
      },
    },
  },
  plugins: [],
}

