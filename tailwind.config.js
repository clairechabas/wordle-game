/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/*.{tsx,ts}", "./src/**/**/*.{tsx,ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
