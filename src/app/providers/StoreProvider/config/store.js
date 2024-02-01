import { configureStore } from "@reduxjs/toolkit";
import { ReviewReducer } from "pages/ReviewsPage/model/slices/ReviewSlice";
import { MovieReducer } from "pages/MainPage/model/slices/MovieSlice";
import { WantToSeeReducer } from "pages/WantToSeePage/model/slices/WantToSeeSlice";
import { MyCollectionReducer } from "pages/CollectionPage/model/slices/MyCollectionSlice";
import { localStorageMiddleware } from "./localStorageMiddleware";
import { userReducer } from "entities/User/model/slices/userSlice";

const rootReducers = {
  movie: MovieReducer,
  wantToSee: WantToSeeReducer,
  myCollection: MyCollectionReducer,
  arrayReviews: ReviewReducer,
  user: userReducer,
};

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});
