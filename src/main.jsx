import { StoreProvider } from "./app/providers/index.js";
import { AppRouterProvider } from "./app/providers/index.js";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StoreProvider>
    <AppRouterProvider>
      <App />
    </AppRouterProvider>
  </StoreProvider>
);
