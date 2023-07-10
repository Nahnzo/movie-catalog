import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "../Slices/MovieSlice";
import WantToSeeSlice from "../Slices/WantToSeeSlice";
export const store = configureStore({
  reducer: {
    movie: MovieSlice,
    wantToSee: WantToSeeSlice,
  },
});
