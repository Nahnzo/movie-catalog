import { createSlice } from "@reduxjs/toolkit";

export const myCollectionSlice = createSlice({
  name: "collectionSLice",
  initialState: {
    myCollection: [],
    length: 0,
  },
  reducers: {
    addMovieToCollection(state, action) {
      const isExist = state.myCollection.find((item) => item.id === action.payload.id);
      if (!isExist) {
        const newMovie = { ...action.payload, myRating: 0, myReviews: "" };
        state.myCollection.push(newMovie);
        state.length++;
      }
    },
    removeMovieFromCollection(state, action) {
      state.myCollection = state.myCollection.filter((item) => item.id !== action.payload.id);
      state.length--;
    },
    clearAll(state) {
      state.myCollection = [];
      state.length = 0;
    },
    addRating(state, action) {
      const { movieId, rating } = action.payload;
      const movieIndex = state.myCollection.findIndex((item) => item.id === movieId);
      if (movieIndex !== -1) {
        state.myCollection[movieIndex].myRating = rating;
      }
    },
  },
});

export const { addMovieToCollection, removeMovieFromCollection, clearAll, addRating } =
  myCollectionSlice.actions;
export default myCollectionSlice.reducer;
