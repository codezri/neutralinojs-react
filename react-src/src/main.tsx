import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// CSS normalization
import "./reset.css";
import "./index.css";

import { neuInit } from "./utils/neu.ts";

// Initialize Neutralinojs
neuInit();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
