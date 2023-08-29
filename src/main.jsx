import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { ROUTES } from "./routes.js";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import MyCollection from "./components/MyCollection/MyCollection.jsx";
import WhatToSee from "./components/WhatToSee/WhatToSee.jsx";
import WantToSee from "./components/WantToSee/WantToSee.jsx";
import MyReviews from "./components/MyReviews/MyReviews.jsx";
import AboutFilm from "./components/AboutFilm/AboutFilm.jsx";

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <App />,
  },
  {
    path: ROUTES.myCollection,
    element: <MyCollection />,
  },
  {
    path: ROUTES.whatToSee,
    element: <WhatToSee />,
  },
  {
    path: ROUTES.wantToSee,
    element: <WantToSee />,
  },
  {
    path: ROUTES.myReviews,
    element: <MyReviews />,
  },
  {
    path: "/movie-catalog/film/:id",
    element: <AboutFilm />,
  },
  {
    path: "*",
    element: <div style={{ textAlign: "center" }}>Такой страницы не существует</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
