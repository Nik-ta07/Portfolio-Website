/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          light: '#F8F6FF',
          dark: '#1A1B1E',
        },
        primary: {
          light: '#B794F4',
          dark: '#6B46C1',
        },
        accent: {
          light: '#805AD5',
          dark: '#9F7AEA',
        },
        card: {
          light: '#FFFFFF',
          dark: '#2D1B69',
        },
        border: {
          light: '#E9D8FD',
          dark: '#4C1D95',
        },
        text: {
          light: '#2D1B69',
          dark: '#F3F4F6',
        },
        gray: {
          100: 'var(--gray-100)',
          200: 'var(--gray-200)',
          300: 'var(--gray-300)',
          400: 'var(--gray-400)',
          500: 'var(--gray-500)',
          600: 'var(--gray-600)',
          700: 'var(--gray-700)',
          800: 'var(--gray-800)',
          900: 'var(--gray-900)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      },
      opacity: {
        '50': '0.5',
      },
      backgroundColor: {
        'gray-800-50': 'rgba(31, 41, 55, 0.5)',
        'gray-700-50': 'rgba(55, 65, 81, 0.5)',
      },
      borderColor: {
        'gray-700-50': 'rgba(55, 65, 81, 0.5)',
      },
    },
  },
  plugins: [],
}

export default config;
