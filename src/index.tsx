import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";

import App from "./App";
import "./style.scss";
import { theme } from "./theme";

const rootNode = document.getElementById("root") as HTMLDivElement;

const root = createRoot(rootNode);

root.render(
  <StrictMode>
    <ThemeProvider theme={{ ...theme, color: theme.color["light"] }}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
