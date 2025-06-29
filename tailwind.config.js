// // tailwind.config.js
// // tailwind.config.js
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       keyframes: {
//         slideUp: {
//           '0%': { opacity: 0, transform: 'translateY(30px)' },
//           '100%': { opacity: 1, transform: 'translateY(0)' },
//         },
//       },
//       animation: {
//         slideUp: 'slideUp 0.8s ease-out forwards',
//         spinSlow: "spin 10s linear infinite",
//       },
//     },
//   },
//   plugins: [],
// }












module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
      rotateY360: "rotateY360 10s linear infinite",
        slideUp: "slideUp 0.8s ease-out forwards",
      },
      keyframes: {
         rotateY360: {
    "0%": { transform: "rotateY(0deg)" },
    "100%": { transform: "rotateY(360deg)" },
  },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
