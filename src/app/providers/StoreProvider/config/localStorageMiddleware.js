// localStorageMiddleware.js
import { LOCAL_STORAGE_WANT_TO_SEE } from "shared/lib/const/const";
import { wantToSeeActions } from "pages/WantToSee/model/slices/WantToSeeSlice";

export const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if (
    action.type === wantToSeeActions.addMovie.type ||
    action.type === wantToSeeActions.removeMovie.type ||
    action.type === wantToSeeActions.clearAll.type
  ) {
    const state = store.getState();
    localStorage.setItem(LOCAL_STORAGE_WANT_TO_SEE, JSON.stringify(state.wantToSee.movies));
  }
  return result;
};
