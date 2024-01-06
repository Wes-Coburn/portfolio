/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      listStyleType: {
        square: 'square',
        roman: 'upper-roman',
        circle: 'circle',
      },
    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/forms')],
};
