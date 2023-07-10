import { createSlice } from "@reduxjs/toolkit";

export const WantToSee = createSlice({
  name: "WantToSee",
  initialState: {
    wantToSee: [],
    loading: false,
    error: null,
  },
  reducers: {
    addMovie(state, action) {
      state.wantToSee.push(action.payload);
    },
  },
});

export const { addMovie } = WantToSee.actions;
export default WantToSee.reducer;
