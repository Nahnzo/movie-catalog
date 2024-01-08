import { createSelector } from "@reduxjs/toolkit";
import getMovieForCollection from "../../../MyCollection/index";

export const getSortedMovie = createSelector(getMovieForCollection, (movies) => (id) => {
  return movies?.some((item) => item.id === id);
});
