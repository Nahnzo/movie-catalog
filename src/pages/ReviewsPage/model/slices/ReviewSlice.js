import { createSlice } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_MY_REVIEWS } from "shared/lib/const/const";
import { userLogout } from "shared/lib/config/authService";
import { initialDataUser } from "shared/lib/config/getInitialDataUserSlice";

export const ReviewSlice = createSlice({
  name: "ReviewSlice",
  initialState: {
    arrayReviews: JSON.parse(localStorage.getItem(LOCAL_STORAGE_MY_REVIEWS)) || [],
    length: 0,
    source: "review",
  },
  reducers: {
    addAllInitialMovie(state, action) {
      state.arrayReviews = action.payload;
      state.length = action.payload.length;
    },
    addMovieToReview(state, action) {
      const isExist = state.arrayReviews.find((item) => item.id === action.payload.id);
      if (!isExist) {
        state.arrayReviews.push({ ...action.payload, userReview: "Место для вашей рецензии" });
        localStorage.setItem(LOCAL_STORAGE_MY_REVIEWS, JSON.stringify(state.arrayReviews));
        state.length++;
      }
    },
    addReviews(state, action) {
      const { movieId, userReview } = action.payload;
      if (userReview !== "") {
        const movieIndex = state.arrayReviews.findIndex((item) => item.id === movieId);
        if (movieIndex !== -1) {
          state.arrayReviews[movieIndex].userReview = userReview;
          localStorage.setItem(LOCAL_STORAGE_MY_REVIEWS, JSON.stringify(state.arrayReviews));
        }
      }
    },
    deleteAll(state) {
      state.arrayReviews = [];
      state.length = 0;
      localStorage.removeItem(LOCAL_STORAGE_MY_REVIEWS);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogout.fulfilled, (state) => {
      state.arrayReviews = [];
    });
    builder.addCase(initialDataUser.fulfilled, (state, action) => {
      const payload = action?.payload?.myReviews;
      if (!state.arrayReviews.length && payload) {
        state.arrayReviews = payload;
        localStorage.setItem("MY_REVIEWS", JSON.stringify(payload));
      }
    });
  },
});

export const { actions: ReviewActions } = ReviewSlice;
export const { reducer: ReviewReducer } = ReviewSlice;
