/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'mdh-blue': {
          light: '#B7E4F4',
          DEFAULT: '#87CEEB',
          dark: '#5EBAE2'
        },
        'mdh-yellow': {
          light: '#FFE14D',
          DEFAULT: '#FFD700',
          dark: '#E6C200'
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shine': 'shine 1.5s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        shine: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' }
        }
      }
    }
  },
  plugins: []
}
