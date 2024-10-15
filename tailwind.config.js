export default {
    mode: "jit", // faster dev
    content: ["./src/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        margin: {
          marrow: "85rem",
        },
      },
    },
    plugins: [],
  };