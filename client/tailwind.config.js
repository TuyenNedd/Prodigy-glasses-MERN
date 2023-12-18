// /** @type {import('tailwindcss').Config} */

// import withMT from "@material-tailwind/react/utils/withMT";
// import flowbitePlugin from "flowbite/plugin";

// export default withMT({
//   content: [
//     "./index.html",
//     "./src/**/*.{vue,js,ts,jsx,tsx}",
//     "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [flowbitePlugin],
// });
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        texture: "url('/images/background_texture_mobile.png')",
      },
      colors: {
        priCo: "var(--primaryColor)",
        christmasText: "#f4f0bb",
      },
    },
  },
  plugins: [],
};
