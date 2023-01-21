module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Open Sans",
      secondary: "Nunito",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "0",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
    extend: {
      colors: {
        bgprimary: "rgba(26, 188, 156)",
        primary: "rgba(44, 62, 80)",
        bgcolor: "#2c3e50",
        secondary: "#4B5D68",
        accent: {
          primary: "rgna(44, 62, 80)",
          primary_hover: "#9059DB",
          secondary: "#F063B8",
          secondary_hover: "#E350A9",
          tertiary: "#68C9BA",
        },
      },
      backgroundImage: {
        hero: "url('../src/assets/img/hero_bg.png')",
      },
      dropShadow: {
        primary: " 0px 5px 5px rgba(75, 93, 104, 0.1)",
      },
    },
  },
  plugins: [],
};
