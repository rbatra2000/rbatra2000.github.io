import { createTheme } from "@mui/material/styles";
import 'typeface-roboto';
import "@fontsource/poppins"; // Defaults to weight 400


const theme = createTheme({
  typography: {
    h1: {
      fontSize: "4rem",
      fontFamily: "Poppins",
      fontWeight: 600
    },
    h2: {
      fontSize: "1.5rem",
      fontFamily: "Poppins",
      fontWeight: 600
    },
    h3: {
      fontSize: "1rem",
      fontFamily: "Poppins",
      fontWeight: 600
    },
    body1: {
      fontSize: "1rem",
      fontFamily: "roboto"
    },
  },
});

export default theme;
