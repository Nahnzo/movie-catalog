import { createSlice } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_MY_COLLECTION } from "shared/lib/const/const";
import { userLogout } from "shared/lib/config/authService";
import { initialDataUser } from "shared/lib/config/getInitialDataUserSlice";

export const MyCollectionSlice = createSlice({
  name: "collectionSlice",
  initialState: {
    myCollection: JSON.parse(localStorage.getItem(LOCAL_STORAGE_MY_COLLECTION)) || [],
    length: 0,
    source: "myCollection",
  },
  reducers: {
    setMovieBySearch(state, action) {
      const isExist = state.myCollection.filter((item) => item.id === action.payload.id);
      state.myCollection = state.myCollection.filter((item) => item.id !== action.payload.id);
      state.myCollection.unshift(...isExist);
    },
    addAllInitialMovie(state, action) {
      state.myCollection = action.payload;
      state.length = action.payload.length;
    },
    addMovieToCollection(state, action) {
      const isExist = state.myCollection.find((item) => item.id === action.payload.id);
      if (!isExist) {
        state.myCollection.push({ ...action.payload, userRating: 0, userReview: "", userRating: 0 });
        state.length++;
        localStorage.setItem(LOCAL_STORAGE_MY_COLLECTION, JSON.stringify(state.myCollection));
      }
    },
    removeMovieFromCollection(state, action) {
      const movieToRemove = state.myCollection.find((item) => item.id === action.payload.id);
      if (movieToRemove) {
        state.myCollection = state.myCollection.filter((item) => item.id !== action.payload.id);
        const storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_MY_COLLECTION));
        if (storedData) {
          const updatedData = storedData.filter((item) => item.id !== action.payload.id);
          localStorage.setItem(LOCAL_STORAGE_MY_COLLECTION, JSON.stringify(updatedData));
        }
      }
      state.length--;
    },
    clearAll(state) {
      state.myCollection = [];
      state.length = 0;
      localStorage.removeItem(LOCAL_STORAGE_MY_COLLECTION);
    },
    addRating(state, action) {
      const { movieId, rating } = action.payload;
      const movieIndex = state.myCollection.findIndex((item) => item.id === movieId);
      if (movieIndex !== -1) {
        state.myCollection[movieIndex].userRating = rating;
        localStorage.setItem(LOCAL_STORAGE_MY_COLLECTION, JSON.stringify(state.myCollection));
      }
    },
    addReview(state, action) {
      const { movieId, myReview } = action.payload;
      const movieIndex = state.myCollection.findIndex((item) => item.id === movieId);
      if (movieIndex !== -1) {
        state.myCollection[movieIndex].myReview = myReview;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogout.fulfilled, (state) => {
      state.myCollection = [];
    });
    builder.addCase(initialDataUser.fulfilled, (state, action) => {
      const payload = action?.payload?.myCollection;
      if (!state.myCollection.length && payload) {
        state.myCollection = payload;
        localStorage.setItem("MY_COLLECTION", JSON.stringify(payload));
      }
    });
  },
});

export const { actions: MyCollectionActions } = MyCollectionSlice;
export const { reducer: MyCollectionReducer } = MyCollectionSlice;
