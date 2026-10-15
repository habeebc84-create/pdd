/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1220',
        },
        primary: {
          blue: '#2563EB',
          cyan: '#22D3EE',
          teal: '#14B8A6',
        },
        background: {
          light: '#F8FAFC',
        },
        text: {
          main: '#0F172A',
          secondary: '#64748B',
        },
        border: {
          DEFAULT: '#E2E8F0',
        }
      },
    },
  },
  plugins: [],
}
