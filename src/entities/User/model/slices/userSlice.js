import { createSlice } from "@reduxjs/toolkit";
import { checkAuth, userLogin, userLogout, userRegistration } from "../services/authService";

const userSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    email: localStorage.getItem("userEmail") || null,
    loading: false,
    error: null,
    isActivated: false,
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
        state.isActivated = action.payload.user.isActivated;
        state.email = action.payload.user.email;
        localStorage.setItem("token", action.payload.accessToken);
        localStorage.setItem("userEmail", action.payload.user.email);
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
        state.email = null;
        state.isAuth = false;
        localStorage.removeItem("token");
        localStorage.removeItem("userEmail");
      })
      .addCase(userLogout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(userRegistration.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuth = true;
        state.email = action.payload.user.email;
        localStorage.setItem("token", action.payload.accessToken);
        localStorage.setItem("userEmail", action.payload.user.email);
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
          localStorage.setItem("userEmail", action.payload.user.email);
          state.isActivated = action.payload.user.isActivated;
          state.isAuth = true;
          state.email = action.payload.user.email;
        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("userEmail");
          state.isAuth = false;
          state.email = null;
        }
      })
      .addCase(checkAuth.rejected, (state, action) => {
        localStorage.removeItem("token");
        localStorage.removeItem("userEmail");
        state.isAuth = false;
        state.email = null;
        state.isActivated = false;
      });
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
