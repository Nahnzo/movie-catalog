import { createSlice } from "@reduxjs/toolkit";

export const MyCollectionSlice = createSlice({
  name: "collectionSLice",
  initialState: {
    myCollection: [],
    length: 0,
  },
  reducers: {
    addMovieToCollection(state, action) {
      const isExist = state.myCollection.find((item) => item.id === action.payload.id);
      if (!isExist) {
        state.myCollection.push(action.payload);
        state.length++;
        localStorage.setItem("myCollection", JSON.stringify(state.myCollection));
      }
    },
    removeMovieFromCollection(state, action) {
      const movieToRemove = state.myCollection.find((item) => item.id === action.payload.id);
      if (movieToRemove) {
        state.myCollection = state.myCollection.filter((item) => item.id !== action.payload.id);
        const storedData = JSON.parse(localStorage.getItem("myCollection"));
        if (storedData) {
          const updatedData = storedData.filter((item) => item.id !== action.payload.id);
          localStorage.setItem("myCollection", JSON.stringify(updatedData));
        }
      }
      state.length--;
    },
    clearAll(state) {
      state.myCollection = [];
      state.length = 0;
      localStorage.removeItem("myCollection");
    },
    addRating(state, action) {
      const { movieId, rating } = action.payload;
      const movieIndex = state.myCollection.findIndex((item) => item.id === movieId);
      if (movieIndex !== -1) {
        state.myCollection[movieIndex].myRating = rating;
        localStorage.setItem("myCollection", JSON.stringify(state.myCollection));
      }
    },
    addReview(state, action) {
      const { movieId, myReviews } = action.payload;
      const movieIndex = state.myCollection.findIndex((item) => item.id === movieId);
      if (movieIndex !== -1) {
        state.myCollection[movieIndex].myReviews = myReviews;
      }
    },
  },
});

export const { actions: MyCollectionActions } = MyCollectionSlice;
export const { reducer: MyCollectionReducer } = MyCollectionSlice;
