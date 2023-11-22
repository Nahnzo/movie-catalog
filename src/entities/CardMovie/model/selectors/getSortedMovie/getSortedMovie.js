export const getSortedMovie = (state) => state?.arrayReviews;
export const getExistingMovieForMyCollection = (state) => (movie) =>
  state?.myCollection.myCollection.some((item) => item.id === movie.id);
export const getExistingMovieForWanToSee = (state) => (movie) =>
  state?.wantToSee.wantToSee.some((item) => item.id === movie.id);
