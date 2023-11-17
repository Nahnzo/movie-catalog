import { createSlice } from "@reduxjs/toolkit";

export const WantToSeeSlice = createSlice({
  name: "WantToSee",
  initialState: {
    wantToSee: [],
    loading: false,
    error: null,
    length: 0,
  },
  reducers: {
    addMovie(state, action) {
      const isExist = state.wantToSee.find((item) => item.id === action.payload.id);
      if (!isExist) {
        state.wantToSee.push(action.payload);
        state.length++;
        localStorage.setItem("wantToSee", JSON.stringify(state.wantToSee));
      }
    },
    removeMovie(state, action) {
      const movieToRemove = state.wantToSee.find((item) => item.id === action.payload.id);
      if (movieToRemove) {
        state.wantToSee = state.wantToSee.filter((item) => item.id !== action.payload.id);
        const storedData = JSON.parse(localStorage.getItem("wantToSee"));
        if (storedData) {
          const updatedData = storedData.filter((item) => item.id !== action.payload.id);
          localStorage.setItem("wantToSee", JSON.stringify(updatedData));
        }
      }
      state.length--;
    },
    clearAll(state) {
      state.wantToSee = [];
      state.length = 0;
      localStorage.removeItem("wantToSee");
    },
  },
});

export const { actions: WantToSeeActions } = WantToSeeSlice;
export const { reducer: WantToSeeReducer } = WantToSeeSlice;
