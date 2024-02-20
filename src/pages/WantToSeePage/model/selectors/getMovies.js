import { createSelector } from "@reduxjs/toolkit";

const getMovieForCollection = (state) => state?.myCollection?.myCollection;

export const getFirstMovie = (state) => state?.wantToSee?.wantToSee[0];

export const getMovieForWantToSee = (state) => state?.wantToSee?.wantToSee;

export const getSortedMovie = createSelector(getMovieForCollection, (movies) => (id) => {
  return movies?.some((item) => item.id === id);
});
