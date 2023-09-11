import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { ROUTES } from "./routes.js";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import MyCollection from "./pages/MyCollection/MyCollection.jsx";
import WhatToSee from "./pages/WhatToSee/WhatToSee.jsx";
import WantToSee from "./pages/WantToSee/WantToSee.jsx";
import MyReviews from "./pages/MyReviews/MyReviews.jsx";
import AboutFilm from "./components/AboutFilm/AboutFilm.jsx";
import PersonDetail from "./components/PersonDetail/PersonDetail.jsx";

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
    path: "/movie-catalog/:type/:id",
    element: <AboutFilm />,
  },
  {
    path: "/movie-catalog/person/:id",
    element: <PersonDetail />,
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
