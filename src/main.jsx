import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import StoreProvider from "./app/providers/StoreProvider/ui/StoreProvider.jsx";
import AppRouterProvider from "./app/providers/RouterProvider/ui/AppRouterProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StoreProvider>
    <AppRouterProvider>
      <App />
    </AppRouterProvider>
  </StoreProvider>
);
