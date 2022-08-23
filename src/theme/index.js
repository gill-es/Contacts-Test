import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6dccff",
      text: "#7D879C",
      contrastText: "#f90",
      error: ""
    },
    secondary: {
      main: "#7D879C",
      contrastText: "#FFF",
    },
  },
  typography: {
    allVariants: {
      fontFamily: `Open Sans,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`,
      textTransform: "none",
      fontSize: 14,
    },
  },
});

export default theme;
