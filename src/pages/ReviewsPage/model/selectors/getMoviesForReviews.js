import { createSelector } from "@reduxjs/toolkit";

export const getMoviesForReviews = (state) => state?.arrayReviews?.arrayReviews;

export const getFirsMovie = createSelector(
  getMoviesForReviews,
  (movies) => movies[movies.length - 1]
);

export const getFilteredMovie = createSelector(getMoviesForReviews, (movies) =>
  movies.filter((item) => item.myReviews !== "Место для вашей рецензии" && item.myReviews !== "")
);
