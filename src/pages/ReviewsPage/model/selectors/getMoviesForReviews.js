import { createSelector } from "@reduxjs/toolkit";

export const getMoviesForReviews = (state) => state?.arrayReviews?.arrayReviews;

export const getFilteredMovie = createSelector(getMoviesForReviews, (movies) =>
  movies.filter((item) => item.myReviews !== "Место для вашей рецензии" && item.myReviews !== "")
);

export const getMoviesFromCollections = (state) => state.myCollection.myCollection;
export const getAllMoviesFromWantToSee = (state) => state.wantToSee.wantToSee;
export const getAllMovies = createSelector(
  [getMoviesFromCollections, getAllMoviesFromWantToSee],
  (moviesFromCollections, moviesFromWantToSee) => {
    const allMovies = [...moviesFromCollections, ...moviesFromWantToSee];

    const uniqueMoviesMap = new Map();
    allMovies.forEach((movie) => {
      uniqueMoviesMap.set(movie.id, movie);
    });

    const uniqueMovies = Array.from(uniqueMoviesMap.values());

    return uniqueMovies;
  }
);
