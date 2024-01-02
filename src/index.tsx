import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./style.scss";

const rootNode = document.getElementById("root") as HTMLDivElement;

const root = createRoot(rootNode);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
