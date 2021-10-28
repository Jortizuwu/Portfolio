module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#202023",
      secondary: "rgba(255, 255, 255, 0.08)",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      primary: "#202023",
      secondary: "rgba(255, 255, 255, 0.08)",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const extendUnderline = {
        ".underline": {
          textDecoration: "underline",
          "text-decoration-color": "red",
        },
      };
      addUtilities(extendUnderline);
    },
  ],
};
