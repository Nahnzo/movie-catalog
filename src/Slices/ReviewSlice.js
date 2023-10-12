import { createSlice } from "@reduxjs/toolkit";

export const ReviewSlice = createSlice({
  name: "ReviewSlice",
  initialState: {
    movies: [],
    length: 0,
  },
  reducers: {
    addMovieToReview(state, action) {
      state.movies.push({ ...action.payload, myReviews: action.payload.myReviews || "" });
      localStorage.setItem("myReviews", JSON.stringify(state.movies));
      state.length++;
    },

    addReviews(state, action) {
      const { movieId, myReviews } = action.payload;
      const movieIndex = state.movies.findIndex((item) => item.id === movieId);
      if (movieIndex !== -1) {
        state.movies[movieIndex].myReviews = myReviews;
        localStorage.setItem("myReviews", JSON.stringify(state.movies));
      }
    },
    deleteAll(state) {
      state.movies = [];
      state.length = 0;
      localStorage.removeItem("myReviews");
    },
  },
});

export const { addMovieToReview, addReviews, deleteAll } = ReviewSlice.actions;
export default ReviewSlice.reducer;
