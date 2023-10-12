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
        localStorage.setItem("wantToSee", JSON.stringify(state.wantToSee));
      }
    },
    removeMovie(state, action) {
      state.wantToSee = state.wantToSee.filter((item) => item.id !== action.payload.id);
      state.length--;
      const storedData = JSON.parse(localStorage.getItem("myCollection"));
      const updatedData = storedData.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("wantToSee", JSON.stringify(updatedData));
    },
    clearAll(state) {
      state.wantToSee = [];
      state.length = 0;
      localStorage.removeItem("wantToSee");
    },
  },
});

export const { addMovie, removeMovie, clearAll } = WantToSee.actions;
export default WantToSee.reducer;
