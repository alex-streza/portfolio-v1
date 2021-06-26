import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  borderRadius: "4px",
  boxShadow: "box-shadow: 2px 2px 12px rgba(103, 0, 238, 0.33);",

  typography: {
    font: "Poppins",
    fontSizes: {
      desktop: {},
      mobile: {},
    },
  },

  palette: {
    primary: "#6700EE",
    secondary: "#37DBFF",
    error: "#f34213",
    disabled: "#A7BED3",
  },
};

export { theme };
