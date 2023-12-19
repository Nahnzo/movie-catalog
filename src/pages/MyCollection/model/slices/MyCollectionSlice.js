import { createSlice } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_MY_COLLECTION } from "shared/lib/const/const";

export const MyCollectionSlice = createSlice({
  name: "collectionSlice",
  initialState: {
    myCollection: [],
    length: 0,
    source: "myCollection",
  },
  reducers: {
    addAllInitialMovie(state, action) {
      state.myCollection = action.payload;
      state.length = action.payload.length;
    },
    addMovieToCollection(state, action) {
      const isExist = state.myCollection.find((item) => item.id === action.payload.id);
      if (!isExist) {
        state.myCollection.push(action.payload);
        state.length++;
        // localStorage.setItem(LOCAL_STORAGE_MY_COLLECTION, JSON.stringify(state.myCollection));
      }
    },
    removeMovieFromCollection(state, action) {
      const movieToRemove = state.myCollection.find((item) => item.id === action.payload.id);
      if (movieToRemove) {
        state.myCollection = state.myCollection.filter((item) => item.id !== action.payload.id);
        const storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_MY_COLLECTION));
        if (storedData) {
          const updatedData = storedData.filter((item) => item.id !== action.payload.id);
          // localStorage.setItem(LOCAL_STORAGE_MY_COLLECTION, JSON.stringify(updatedData));
        }
      }
      state.length--;
    },
    clearAll(state) {
      state.myCollection = [];
      state.length = 0;
      // localStorage.removeItem(LOCAL_STORAGE_MY_COLLECTION);
    },
    addRating(state, action) {
      const { movieId, rating } = action.payload;
      const movieIndex = state.myCollection.findIndex((item) => item.id === movieId);
      if (movieIndex !== -1) {
        state.myCollection[movieIndex].myRating = rating;
        localStorage.setItem(LOCAL_STORAGE_MY_COLLECTION, JSON.stringify(state.myCollection));
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
