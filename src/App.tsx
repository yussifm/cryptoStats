import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import React from "react";

import "./App.css";
import { LoginForm } from "./Component/auth/login-form.component";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <LoginForm />
      </div>
    </ThemeProvider>
  );
}

export default App;
