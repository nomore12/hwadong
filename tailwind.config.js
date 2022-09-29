/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      strokeWidth: {
        3: '3',
        4: '4',
      },
      spacing: {
        128: '32rem',
        720: '720px',
      },
      letterSpacing: {
        extraWidest: '.3em',
      },
      backgroundImage: {
        'background-logo': "url('src/components/assets/images/logo-2-1.png')",
      },
    },
  },
  plugins: [],
};
