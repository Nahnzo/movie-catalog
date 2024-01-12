import { createSlice } from "@reduxjs/toolkit";
import { checkAuth, userLogin, userLogout, userRegistration } from "../../../../shared/lib/config/authService";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    isAuth: false,
    email: localStorage.getItem("userEmail") || null,
    isLoading: false,
    error: null,
    isActivated: false,
    id: null,
  },
  reducers: {
    handleIsAuthUser: (state, action) => {
      state.isAuth = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuth = true;
        state.isActivated = action.payload.user.isActivated;
        state.email = action.payload.user.email;
        state.id = action.payload.user.id;
        localStorage.setItem("token", action.payload.accessToken);
        localStorage.setItem("userEmail", action.payload.user.email);
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(userLogout.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userLogout.fulfilled, (state) => {
        state.isLoading = false;
        state.email = null;
        state.isAuth = false;
        state.id = null;
        localStorage.removeItem("token");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("WANT_TO_SEE");
        localStorage.removeItem("MY_COLLECTION");
      })
      .addCase(userLogout.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(userRegistration.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuth = true;
        state.email = action.payload.user.email;
        state.id = action.payload.user.id;
        localStorage.setItem("token", action.payload.accessToken);
        localStorage.setItem("userEmail", action.payload.user.email);
      })
      .addCase(userRegistration.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(checkAuth.fulfilled, (state, action) => {
        if (action.payload?.accessToken) {
          localStorage.setItem("token", action.payload.accessToken);
          localStorage.setItem("userEmail", action.payload.user.email);
          state.isActivated = action.payload.user.isActivated;
          state.isAuth = true;
          state.email = action.payload.user.email;
          state.id = action.payload.user.id;
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
        state.id = null;
      });
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
