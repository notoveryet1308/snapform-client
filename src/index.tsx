import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";
import "./style.scss";
import { theme } from "./theme";
import { store } from "./_store";

const rootNode = document.getElementById("root") as HTMLDivElement;

const root = createRoot(rootNode);

const queryClient = new QueryClient();

root.render(
  <StrictMode>
    <ThemeProvider theme={{ ...theme, color: theme.color["light"] }}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <App />
        </Provider>
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
);
