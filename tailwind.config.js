/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      strokeWidth: {
        3: '3',
        4: '4',
      },
    },
  },
  plugins: [],
};
