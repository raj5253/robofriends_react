import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Card from "./Card";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
// import { robots } from "./Robots";
// import CardList from "./CardList";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
