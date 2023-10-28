import { configureStore } from "@reduxjs/toolkit";

import ReviewSlice from "../../../../pages/MyReviews/model/slices/ReviewSlice";
import MovieSlice from "../../../../pages/FetchMovie/model/slices/MovieSlice";
import WantToSeeSlice from "../../../../pages/WantToSee/model/slices/WantToSeeSlice";
import MyCollectionSlice from "../../../../pages/MyCollection/model/slices/MyCollectionSlice";

const rootReducers = {
  movie: MovieSlice,
  wantToSee: WantToSeeSlice,
  myCollection: MyCollectionSlice,
  arrayReviews: ReviewSlice,
};

export const store = configureStore({
  reducer: rootReducers,
});
