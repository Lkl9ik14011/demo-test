import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider } from "styled-components";
import Theme from "./common/Theme";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={Theme}>
        <ThemeProvider theme={Theme}>
          <Routes />
        </ThemeProvider>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
