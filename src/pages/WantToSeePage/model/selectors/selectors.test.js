import configureStore from "redux-mock-store";
import { getFirstMovie, getMovieForWantToSee, getSortedMovie } from "./getMovies";

const mockStore = configureStore([]);

describe("getFirstMovie selector", () => {
  test("Должно вернуть первый фильм из коллекции wantToSee", () => {
    const movies = [
      { id: 1, title: "Movie 1" },
      { id: 2, title: "Movie 2" },
    ];
    const store = mockStore({ wantToSee: { wantToSee: movies } });
    const result = getFirstMovie(store.getState());

    expect(result).toEqual(movies[0]);
  });
});

describe("getMovieForWantToSee selector", () => {
  test("Должно вернуть список фильмов из wantToSee", () => {
    const movies = [
      { id: 1, title: "Movie 1" },
      { id: 2, title: "Movie 2" },
    ];
    const store = mockStore({ wantToSee: { wantToSee: movies } });
    const result = getMovieForWantToSee(store.getState());

    expect(result).toEqual(movies);
  });
});

describe("getSortedMovie selector", () => {
  test("Должно вернуть true для существующего фильма", () => {
    const movies = [
      { id: 1, title: "Movie 1" },
      { id: 2, title: "Movie 2" },
    ];
    const store = mockStore({ myCollection: { myCollection: movies } });
    const isMovieInCollection = getSortedMovie(store.getState())(1);

    expect(isMovieInCollection).toBe(true);
  });

  test("Должно вернуть false для отсутствующего фильма", () => {
    const movies = [
      { id: 1, title: "Movie 1" },
      { id: 2, title: "Movie 2" },
    ];
    const store = mockStore({ myCollection: { myCollection: movies } });
    const isMovieInCollection = getSortedMovie(store.getState())(3);

    expect(isMovieInCollection).toBe(false);
  });
});
