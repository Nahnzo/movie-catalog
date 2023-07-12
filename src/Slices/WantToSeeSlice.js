import { createSlice } from "@reduxjs/toolkit";

export const WantToSee = createSlice({
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
      }
    },
    removeMovie(state, action) {
      state.wantToSee = state.wantToSee.filter((item) => item.id !== action.payload.id);
      state.length--;
    },
  },
});

export const { addMovie, removeMovie } = WantToSee.actions;
export default WantToSee.reducer;
