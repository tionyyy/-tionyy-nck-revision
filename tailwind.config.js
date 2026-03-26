/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#22d3ee',
          purple: '#7c5bff',
          green: '#4ade80',
          pink: '#fb7185'
        }
      },
      boxShadow: {
        glow: '0 0 40px rgba(124,91,255,0.25), 0 0 60px rgba(34,211,238,0.2)'
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        fadeIn: 'fadeIn .4s ease forwards'
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(6px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};