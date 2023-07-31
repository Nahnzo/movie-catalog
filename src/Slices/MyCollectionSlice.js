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
        const newMovie = { ...action.payload, myRating: 0 };
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
  },
});

export const { addMovieToCollection, removeMovieFromCollection, clearAll } =
  myCollectionSlice.actions;
export default myCollectionSlice.reducer;
