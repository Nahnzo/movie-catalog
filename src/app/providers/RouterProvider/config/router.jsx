import App from "../../../App";
import { CollectionPage } from "pages/CollectionPage";
import { WantToSeePage } from "pages/WantToSeePage";
import { ReviewsPage } from "pages/ReviewsPage";
import { WhatToSee } from "pages/WhatToSee";
import { createBrowserRouter } from "react-router-dom";
import { routes } from "shared/lib/config/routes";
import { Suspense } from "react";
import WantToSeePageSkeleton from "pages/WantToSeePage/ui/WantToSeePage/WantToSeePageSkeleton";
import CollectionPageSkeleton from "pages/CollectionPage/ui/CollectionPage/CollectionPageSkeleton";
import ReviewsPageSkeleton from "../../../../pages/ReviewsPage/ui/ReviewsPageSkeleton";

export const router = createBrowserRouter([
  {
    path: routes.home,
    element: <App />,
  },
  {
    path: routes.collectionPage,
    element: (
      <Suspense fallback={<CollectionPageSkeleton />}>
        <CollectionPage />
      </Suspense>
    ),
  },
  ,
  {
    path: routes.whatToSeePage,
    element: <WhatToSee />,
  },
  {
    path: routes.wantToSeePage,
    element: (
      <Suspense fallback={<WantToSeePageSkeleton />}>
        <WantToSeePage />
      </Suspense>
    ),
  },
  {
    path: routes.reviewsPage,
    element: (
      <Suspense fallback={<ReviewsPageSkeleton />}>
        <ReviewsPage />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: <div style={{ textAlign: "center" }}>Такой страницы не существует</div>,
  },
]);
