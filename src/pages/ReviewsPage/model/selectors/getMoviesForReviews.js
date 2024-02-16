import { createSelector } from "@reduxjs/toolkit";

export const getMoviesForReviews = (state) => state?.arrayReviews?.arrayReviews;

export const getFirsMovie = createSelector(getMoviesForReviews, (movies) => movies[movies.length - 1]);

export const getFilteredMovie = createSelector(getMoviesForReviews, (movies) =>
  movies.filter((item) => item.myReviews !== "Место для вашей рецензии" && item.myReviews !== "")
);

export const getMoviesFromCollections = (state) => state.myCollection.myCollection;
export const getAllMoviesFromWantToSee = (state) => state.wantToSee.wantToSee;
export const getAllMovies = createSelector(
  [getMoviesFromCollections, getAllMoviesFromWantToSee],
  (moviesFromCollections, moviesFromWantToSee) => {
    // Объединяем массивы
    const allMovies = [...moviesFromCollections, ...moviesFromWantToSee];

    // Создаем Map для хранения уникальных фильмов по их id
    const uniqueMoviesMap = new Map();
    allMovies.forEach((movie) => {
      uniqueMoviesMap.set(movie.id, movie);
    });

    // Преобразуем Map обратно в массив уникальных фильмов
    const uniqueMovies = Array.from(uniqueMoviesMap.values());

    return uniqueMovies;
  }
);
