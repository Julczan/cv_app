import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App";
import DATA from "../initialInfo";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App initialInfo={DATA} />
  </StrictMode>,
);
