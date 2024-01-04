import { createSlice } from "@reduxjs/toolkit";
import { checkAuth, userLogin, userLogout, userRegistration } from "../services/authService";

const userSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    handleIsAuthUser: (state, action) => {
      state.isAuth = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuth = true;
        state.user = action.payload.user;
        localStorage.setItem("token", action.payload.accessToken);
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(userLogout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogout.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.isAuth = false;
        localStorage.removeItem("token");
      })
      .addCase(userLogout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(userRegistration.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuth = true;
        state.user = action.payload.user;
        localStorage.setItem("token", action.payload.accessToken);
      })
      .addCase(userRegistration.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(checkAuth.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        if (action.payload?.accessToken) {
          localStorage.setItem("token", action.payload.accessToken);
          state.isAuth = true;
          state.user = action.payload.user;
        } else {
          localStorage.removeItem("token");
          state.isAuth = false;
          state.user = null;
        }
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.isAuth = false;
        state.user = null;
        state.isAuth = false;
      });
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
