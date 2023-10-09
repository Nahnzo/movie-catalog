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
        localStorage.setItem("myCollection", JSON.stringify(state.myCollection));
      }
    },
    removeMovieFromCollection(state, action) {
      // state.myCollection = state.myCollection.filter((item) => item.id !== action.payload.id);
      // const storedData = JSON.parse(localStorage.getItem("myCollection"));
      // if (storedData) {
      //   state.myCollection = storedData.filter((item) => item.id !== action.payload.id);
      // }

      // state.length--;
      const movieToRemove = state.myCollection.find((item) => item.id === action.payload.id);
      if (movieToRemove) {
        // Удаляем элемент из Redux-состояния
        state.myCollection = state.myCollection.filter((item) => item.id !== action.payload.id);

        // Удаляем элемент из localStorage
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
    },
    addRating(state, action) {
      const { movieId, rating } = action.payload;
      const movieIndex = state.myCollection.findIndex((item) => item.id === movieId);
      if (movieIndex !== -1) {
        state.myCollection[movieIndex].myRating = rating;
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

export const { addMovieToCollection, removeMovieFromCollection, clearAll, addRating, addReview } =
  myCollectionSlice.actions;
export default myCollectionSlice.reducer;
