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
    },
  },
});

export const { addMovieToReview } = ReviewSlice.actions;
export default ReviewSlice.reducer;
