import React from "react";
import { render } from "react-dom";
import App from "./App";
import { registerSW } from "virtual:pwa-register";

import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  box-sizing:  border-box;
}
`;

render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

registerSW();
