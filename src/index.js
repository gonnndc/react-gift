import { StrictMode } from "react";
import ReactDOM from "react-dom";

import GifExpertApp from "./GifExpertApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <GifExpertApp />
  </StrictMode>,
  rootElement
);
