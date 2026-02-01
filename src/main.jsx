import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import InputSection from "./components/InputSection";
import OutputSection from "./components/OutputSection";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InputSection />
    <OutputSection />
  </StrictMode>,
);
