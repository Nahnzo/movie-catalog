import { StoreProvider } from "./providers/index.js";
import { AppRouterProvider } from "./providers/index.js";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StoreProvider>
    <AppRouterProvider>
      <App />
    </AppRouterProvider>
  </StoreProvider>
);
