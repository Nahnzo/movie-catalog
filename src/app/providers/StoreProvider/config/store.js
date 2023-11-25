import { configureStore } from "@reduxjs/toolkit";
import { ReviewReducer } from "pages/MyReviews/model/slices/ReviewSlice";
import { MovieReducer } from "pages/FetchMovie/model/slices/MovieSlice";
import { WantToSeeReducer } from "pages/WantToSee/model/slices/WantToSeeSlice";
import { MyCollectionReducer } from "pages/MyCollection/model/slices/MyCollectionSlice";

const rootReducers = {
  movie: MovieReducer,
  wantToSee: WantToSeeReducer,
  myCollection: MyCollectionReducer,
  arrayReviews: ReviewReducer,
};

export const store = configureStore({
  reducer: rootReducers,
});
