import { getFilmByName } from "./getFilmByName";

import { MovieActions } from "pages/MainPage/model/slices/MovieSlice";

const actions = {
  movie: MovieActions.setFilmBySearch,
};

export const setResultSearch = async (name, collectionType, dispatch, callback) => {
  try {
    if (collectionType) {
      const result = await getFilmByName(`${name}`);
      const action = actions[collectionType];
      dispatch(action(result));
    } else {
      callback(name);
    }
  } catch (error) {
    console.error("Error in setResultSearch:", error);
  }
};
