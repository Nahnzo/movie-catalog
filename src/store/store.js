import { configureStore } from "@reduxjs/toolkit";
import ReviewSlice from "../Slices/ReviewSlice";
import MovieSlice from "../Slices/MovieSlice";
import WantToSeeSlice from "../Slices/WantToSeeSlice";
import MyCollectionSlice from "../Slices/MyCollectionSlice";
export const store = configureStore({
  reducer: {
    movie: MovieSlice,
    wantToSee: WantToSeeSlice,
    myCollection: MyCollectionSlice,
    arrayReview: ReviewSlice,
  },
});
