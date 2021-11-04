import { useState } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import LandingPage from "./components/LandingPage";
import "./App.css";

function App() {

  const [theme, setTheme] = useState({
    palette: {
      type: "light"
    }
  });

  const toggleDarkTheme = () => {
    let newPaletteType = theme.palette.type === "light" ? "dark" : "light";
    setTheme({
      palette: {
        type: newPaletteType
      }
    })
  };

  const muiTheme = createMuiTheme(theme);

  return (
    <MuiThemeProvider theme={muiTheme}>

    <div className="App">
      <LandingPage onToggleDark={toggleDarkTheme} status={theme.palette.type}/>
    </div>
    </MuiThemeProvider>

  );
}

export default App;
