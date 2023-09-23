import { createSlice } from "@reduxjs/toolkit";

export const ReviewSlice = createSlice({
  name: "ReviewSlice",
  initialState: {
    movies: [],
    length: 0,
  },
  reducers: {
    addMovieToReview(state, action) {
      state.movies.push({ ...action.payload, myReviews: "" });
      state.length++;
    },
    addReviews(state, action) {
      const { movieId, myReviews } = action.payload;
      const movieIndex = state.movies.findIndex((item) => item.id === movieId);
      if (movieIndex !== -1) {
        state.movies[movieIndex].myReviews = myReviews;
      }
    },
    deleteAll(state) {
      state.movies = [];
      state.length = 0;
    },
  },
});

export const { addMovieToReview, addReviews, deleteAll } = ReviewSlice.actions;
export default ReviewSlice.reducer;
