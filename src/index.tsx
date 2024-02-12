import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import App from "./App";
import "./style.scss";
import { theme } from "./theme";
import { store } from "./_store";

const rootNode = document.getElementById("root") as HTMLDivElement;

const root = createRoot(rootNode);

root.render(
  <StrictMode>
    <ThemeProvider theme={{ ...theme, color: theme.color["light"] }}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
