import { RouterProvider } from "react-router-dom";
import { router } from "../config/router";

const AppRouterProvider = ({ children }) => {
  return <RouterProvider router={router}>{children}</RouterProvider>;
};

export default AppRouterProvider;
