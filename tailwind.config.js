/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Violet — brand voice: headings, eyebrows, card tints/borders
        brand: {
          50: '#f8f5fc',
          100: '#f1e7fa',
          200: '#e3d0f4',
          300: '#cca7e9',
          400: '#ac74d8',
          500: '#8d47c2',
          600: '#6b21a8',
          700: '#57198a',
          800: '#4c1580',
          900: '#3a1163',
        },
        // Blue — trust & action: buttons, links, phone CTAs, form focus
        accent: {
          50: '#f2f6fe',
          100: '#e8eefd',
          200: '#c9d9fa',
          300: '#9ab6f5',
          400: '#5c85ec',
          500: '#2454d6',
          600: '#1e46bf',
          700: '#1b3fae',
          800: '#183487',
          900: '#162c69',
        },
        // Magenta — used sparingly for gradient flourishes only
        spark: {
          400: '#e07fe2',
          500: '#c81fcb',
          600: '#a817ab',
        },
        // Green — reserved for the CQC "Rated GOOD" signal only
        success: {
          50: '#e9f8f0',
          100: '#d3f1e1',
          500: '#158a56',
          600: '#127548',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-sora)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
