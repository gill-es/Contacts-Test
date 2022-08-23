import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";

import store from "./store";
import AppRouter from "./routes";
import theme from "./theme";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
