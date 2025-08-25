// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './src/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         adalineGreen: '#1a231b',
//         adalineCream: '#f3e9d2',
//       },
//       fontFamily: {
//         sans: ['Inter', 'sans-serif'],
//         serif: ['Playfair Display', 'serif'], // ✅ For Adaline logo
//       },
//       animation: {
//         scroll: 'scroll-logos 25s linear infinite',
//       },
//       keyframes: {
//         'scroll-logos': {
//           '0%': { transform: 'translateX(0%)' },
//           '100%': { transform: 'translateX(-50%)' },
//         },
//       },
//     },
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        scroll: 'scroll-logos 25s linear infinite',
      },
      keyframes: {
        'scroll-logos': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      colors: {
        adalineGreen: '#1a231b',
      },
    },
  },
  plugins: [],
};
