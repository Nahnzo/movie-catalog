import { createSlice } from "@reduxjs/toolkit";

export const ReviewSlice = createSlice({
  name: "ReviewSlice",
  initialState: {
    movies: [],
    length: 0,
  },
  reducers: {
    addMovieToReview(state, action) {
      console.log(action.payload);
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
  },
});

export const { addMovieToReview, addReviews } = ReviewSlice.actions;
export default ReviewSlice.reducer;
