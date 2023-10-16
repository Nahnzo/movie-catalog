import App from "../../../../App";
import MyCollection from "../../../../pages/MyCollection/MyCollection";
import WantToSee from "../../../../pages/WantToSee/WantToSee";
import MyReviews from "../../../../pages/MyReviews/MyReviews";
import WhatToSee from "../../../../pages/WhatToSee/WhatToSee";
import AboutFilm from "../../../../components/AboutFilm/AboutFilm";
import PersonDetail from "../../../../components/PersonDetail/PersonDetail";
import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../../../../routes";

export const router = createBrowserRouter([
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
