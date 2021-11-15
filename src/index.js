import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme =  createTheme({
  palette: {
    primary: {
      main: '#b721ff',
    },
    secondary: {
      main: '#32edc1',
    },
    background: {
      default: '#161616',
      paper: '#3c3c3c',
    },
  },
  typography: {
    fontFamily: 'Noto Sans',
    fontWeightRegular: 400,
    fontWeightLight: 300,
    h1: {
      fontFamily: 'Montserrat',
      lineHeight: 1.38,
      fontSize: '4rem',
      fontWeight: 600,
      color: "#fff"
    },
    h2: {
      fontSize: '2rem',
      fontFamily: 'Montserrat',
    },
    h3: {
      fontSize: '1.5rem',
      fontFamily: 'Montserrat',
    },
    h4: {
      fontFamily: 'Noto Sans',
      fontSize: '1.2rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.2rem',
      fontWeight: 200,
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
