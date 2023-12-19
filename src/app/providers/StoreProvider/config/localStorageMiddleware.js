import { LOCAL_STORAGE_MY_COLLECTION } from "shared/lib/const/const";
import { LOCAL_STORAGE_WANT_TO_SEE } from "shared/lib/const/const";
import { LOCAL_STORAGE_MY_REVIEWS } from "shared/lib/const/const";

export const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState();

  switch (action.type) {
    case "WantToSee/addMovie":
      localStorage.setItem(LOCAL_STORAGE_WANT_TO_SEE, JSON.stringify(state.wantToSee.wantToSee));
      break;
    case "WantToSee/clearAll":
      localStorage.setItem(LOCAL_STORAGE_WANT_TO_SEE, JSON.stringify([]));
      break;
    case "collectionSlice/addMovieToCollection":
    case "collectionSlice/removeMovieFromCollection":
      localStorage.setItem(LOCAL_STORAGE_MY_COLLECTION, JSON.stringify(state.myCollection.myCollection));
      break;
    case "collectionSlice/clearAll":
      localStorage.setItem(LOCAL_STORAGE_MY_COLLECTION, JSON.stringify([]));
      break;
    case "ReviewSlice/addMovieToReview":
    case "ReviewSlice/addReviews":
      localStorage.setItem(LOCAL_STORAGE_MY_REVIEWS, JSON.stringify(state.arrayReviews.arrayReviews));
      break;
    case "ReviewSlice/deleteAll":
      localStorage.setItem(LOCAL_STORAGE_MY_REVIEWS, JSON.stringify([]));
      break;
    default:
      break;
  }

  return result;
};
