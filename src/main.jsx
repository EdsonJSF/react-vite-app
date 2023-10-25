import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { App } from "./components/app";
import { CounterApp } from "./components/CounterApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <CounterApp value={10} /> */}
  </React.StrictMode>
);
