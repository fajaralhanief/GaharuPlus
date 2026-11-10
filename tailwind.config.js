/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#09150E',
          900: '#112519',
          850: '#163222',
          800: '#1C3F2B',
          700: '#26543A',
          600: '#326E4C',
          500: '#428E63',
          200: '#CBE0D4',
          100: '#E4EFE8',
          50: '#F2F7F4',
        },
        oud: {
          900: '#23140C',
          800: '#341E13',
          700: '#4A2B1B',
          600: '#653C26',
          100: '#F5EDE8',
          50: '#FAF6F4',
        },
        amberGold: {
          700: '#9B6D12',
          600: '#B88216',
          500: '#D59B1E',
          400: '#E3B03E',
          300: '#EDC66C',
          200: '#F5DC9F',
          100: '#FAF1DC',
          50: '#FDFBF5',
        },
        linen: {
          50: '#FDFCF9',
          100: '#F8F6F0',
          200: '#EFECE0',
          300: '#E5DFD1',
        },
        charcoal: {
          900: '#171B18',
          800: '#262C27',
          700: '#3E4640',
          600: '#5A645D',
          500: '#7E8B82',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 25px 60px -15px rgba(17, 37, 25, 0.12)',
        'gold-glow': '0 0 35px -5px rgba(213, 155, 30, 0.25)',
        'forest-glow': '0 0 40px -5px rgba(27, 63, 43, 0.2)',
      }
    },
  },
  plugins: [],
};

