import { createSlice } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_WANT_TO_SEE } from "shared/lib/const/const";

export const WantToSeeSlice = createSlice({
  name: "WantToSee",
  initialState: {
    wantToSee: [],
    length: 0,
    source: "wantToSee",
  },
  reducers: {
    addAllInitialMovie(state, action) {
      state.wantToSee = action.payload;
      state.length = action.payload.length;
    },
    addMovie(state, action) {
      const isExist = state.wantToSee.find((item) => item.id === action.payload.id);
      if (!isExist) {
        state.wantToSee.push(action.payload);
        state.length++;
        // localStorage.setItem(LOCAL_STORAGE_WANT_TO_SEE, JSON.stringify(state.wantToSee));
      }
    },
    removeMovie(state, action) {
      const movieToRemove = state.wantToSee.find((item) => item.id === action.payload.id);
      if (movieToRemove) {
        state.wantToSee = state.wantToSee.filter((item) => item.id !== action.payload.id);
        // const storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_WANT_TO_SEE));
        if (storedData) {
          const updatedData = storedData.filter((item) => item.id !== action.payload.id);
          // localStorage.setItem(LOCAL_STORAGE_WANT_TO_SEE, JSON.stringify(updatedData));
        }
      }
      state.length--;
    },
    clearAll(state) {
      state.wantToSee = [];
      state.length = 0;
      // localStorage.removeItem(LOCAL_STORAGE_WANT_TO_SEE);
    },
  },
});

export const { actions: WantToSeeActions } = WantToSeeSlice;
export const { reducer: WantToSeeReducer } = WantToSeeSlice;
