import { createTheme } from "@mui/material/styles";
import 'typeface-roboto';
import "@fontsource/bebas-neue"; // Defaults to weight 400


const theme = createTheme({
  typography: {
    h1: {
      fontSize: "4rem",
      fontFamily: "Bebas Neue",
      fontWeight: 400
    },
    h2: {
      fontSize: "2rem",
      fontFamily: "Bebas Neue",
    },
    h3: {
      fontSize: "1.5rem",
      fontFamily: "Bebas Neue",
    },
    body1: {
      fontSize: "1rem",
      fontFamily: "roboto"
    },
  },
});

export default theme;
