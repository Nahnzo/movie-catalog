import { createSlice } from "@reduxjs/toolkit";
import { getMovie } from "../api/getMovie";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movie: [],
    loading: false,
    error: null,
  },
  reducers: {
    setFilmBySearch: (state, action) => {
      state.movie = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMovie.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMovie.fulfilled, (state, action) => {
      state.movie = action.payload;
      state.loading = false;
    });
    builder.addCase(getMovie.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { actions: MovieActions } = movieSlice;
export const { reducer: MovieReducer } = movieSlice;
