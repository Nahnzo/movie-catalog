import App from "/src/App";
import { MyCollection } from "pages/MyCollection";
import { WantToSee } from "pages/WantToSee";
import { MyReviews } from "pages/MyReviews";
import { WhatToSee } from "pages/WhatToSee";
import { DetailsMoviePage } from "pages/DetailsMoviePage";
import { DetailsPersonPage } from "pages/DetailsPersonPage";
import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "shared/lib/config/routes";
import { Suspense } from "react";
import WantToSeeSkeleton from "pages/WantToSee/ui/WantToSee/WantToSeeSkeleton";

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <App />,
  },
  {
    path: ROUTES.myCollection,
    element: (
      <Suspense fallback={"Loading"}>
        <MyCollection />
      </Suspense>
    ),
  },
  ,
  {
    path: ROUTES.whatToSee,
    element: <WhatToSee />,
  },

  {
    path: ROUTES.wantToSee,
    element: (
      <Suspense fallback={<WantToSeeSkeleton />}>
        <WantToSee />
      </Suspense>
    ),
  },

  {
    path: ROUTES.myReviews,
    element: <MyReviews />,
  },
  {
    path: "/movie-catalog/:type/:id",
    element: <DetailsMoviePage />,
  },
  {
    path: "/movie-catalog/person/:id",
    element: <DetailsPersonPage />,
  },
  {
    path: "*",
    element: <div style={{ textAlign: "center" }}>Такой страницы не существует</div>,
  },
]);
