import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./index.css";

const noto = "'Noto Sans', sans-serif";
const montserrat = "'Montserrat', sans-serif";

const theme = createTheme({
  palette: {
    primary: {
      main: "#b721ff",
      purpleLight: "#ee98fb",
      purpleDark: "#883997",
    },
    secondary: {
      main: "#32edc1",
    },
    background: {
      default: "#161616",
      paper: "#3c3c3c",
      light: "#666666",
    },
  },
  typography: {
    h1: {
      fontFamily: montserrat,
      lineHeight: 1.38,
      fontSize: "2rem",
      fontWeight: 500,
      color: "#fff",
      "@media (min-width:600px)": {
        fontSize: "2.25rem",
      },
      "@media (min-width:900px)": {
        fontSize: "2.5rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "2.75rem",
      },
      "@media (min-width:1500px)": {
        fontSize: "3rem",
      },
    },
    h2: {
      fontFamily: montserrat,
      lineHeight: 1.38,
      fontSize: "2rem",
      fontWeight: 700,
      color: "#fff",
      "@media (min-width:600px)": {
        fontSize: "2.25rem",
      },
      "@media (min-width:900px)": {
        fontSize: "2.5rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "2.75rem",
      },
      "@media (min-width:1500px)": {
        fontSize: "3rem",
      },
    },

    h4: {
      fontSize: "1.5rem",
      fontFamily: montserrat,
      color: "#fff",

      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:1500px)": {
        fontSize: "1.5rem",
        fontWeight: 500,

      },
    },
    h3: {
      fontSize: "1.2rem",
      fontWeight: 600,
      fontFamily: montserrat,
      color: "#fff",

      "@media (min-width:600px)": {
        fontSize: "1.45rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.70rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "1.95rem",
      },
      "@media (min-width:1500px)": {
        fontSize: "2.2rem",
      },
    },
    h5: {
      fontSize: "1.2rem",
      fontWeight: 200,
      color: "white",
      fontFamily: montserrat,

      "@media (min-width:600px)": {
        fontSize: "1.45rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.70rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "1.95rem",
      },
      "@media (min-width:1500px)": {
        fontSize: "2.20rem",
      },
    },
    h6: {
      fontSize: "0.9rem",
      fontWeight: 400,
      color: "#99999f",
      fontFamily: montserrat,

      "@media (min-width:600px)": {
        fontSize: "0.9rem",
      },
      "@media (min-width:900px)": {
        fontSize: "0.9rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "0.9rem",
      },
      "@media (min-width:1500px)": {
        fontSize: "0.9rem",
      },
    },
    body1: {
      fontFamily: noto,
      fontSize: "0.9rem",
      fontWeight: 500,
      color: "#99999f",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "1.2rem",
      },
      "@media (min-width:1500px)": {
        fontSize: "1.3rem",
      },
    },
    body2: {
      fontFamily: noto,
      fontSize: "0.9rem",
      fontWeight: 600,
      color: "#99999f",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "1.1rem",
      },
      "@media (min-width:1500px)": {
        fontSize: "1.rem",
      },
    },

  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
