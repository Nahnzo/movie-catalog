import { createSlice } from "@reduxjs/toolkit";

export const ReviewSlice = createSlice({
  name: "ReviewSlice",
  initialState: {
    arrayReviews: [],
    length: 0,
  },
  reducers: {
    addAllInitialMovie(state, action) {
      state.arrayReviews = action.payload;
      state.length = action.payload.length;
    },
    addMovieToReview(state, action) {
      const isExist = state.arrayReviews.find((item) => item.id === action.payload.id);
      if (!isExist) {
        // state.arrayReviews.push({ ...action.payload, myReviews: action.payload.myReviews || "" });
        state.arrayReviews.push({
          ...action.payload,
          myReviews: action.payload.myReviews || "Место для вашей рецензии",
        });
        localStorage.setItem("myReviews", JSON.stringify(state.arrayReviews));
        state.length++;
      }
    },
    addReviews(state, action) {
      console.log(action.payload);
      const { movieId, myReviews } = action.payload;
      const movieIndex = state.arrayReviews.findIndex((item) => item.id === movieId);
      if (movieIndex !== -1) {
        state.arrayReviews[movieIndex].myReviews = myReviews;
        localStorage.setItem("myReviews", JSON.stringify(state.arrayReviews));
      }
    },

    deleteAll(state) {
      state.arrayReviews = [];
      state.length = 0;
      localStorage.removeItem("myReviews");
    },
  },
});

export const { actions: ReviewActions } = ReviewSlice;
export const { reducer: ReviewReducer } = ReviewSlice;
