import { createSlice } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_WANT_TO_SEE } from "shared/lib/const/const";
import { userLogout } from "shared/lib/config/authService";
import { initialDataUser } from "shared/lib/config/getInitialDataUserSlice";

export const WantToSeeSlice = createSlice({
  name: "WantToSee",
  initialState: {
    wantToSee: JSON.parse(localStorage.getItem(LOCAL_STORAGE_WANT_TO_SEE)) || [],
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
      }
    },
    removeMovie(state, action) {
      const { id } = action.payload;
      const updatedWantToSee = state.wantToSee.filter((item) => item.id !== id);
      state.wantToSee = updatedWantToSee;
      state.length = updatedWantToSee.length;
    },
    clearAll(state) {
      state.wantToSee = [];
      state.length = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogout.fulfilled, (state) => {
      state.wantToSee = [];
    });
    builder.addCase(initialDataUser.fulfilled, (state, action) => {
      const payload = action.payload.wantToSee;
      if (!state.wantToSee.length && payload) {
        state.wantToSee = payload;
        localStorage.setItem("WANT_TO_SEE", JSON.stringify(payload));
      }
    });
  },
});

export const { actions: WantToSeeActions } = WantToSeeSlice;
export const { reducer: WantToSeeReducer } = WantToSeeSlice;
