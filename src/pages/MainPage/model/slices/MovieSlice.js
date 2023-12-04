import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// API ограничивает limit
export const getMovie = createAsyncThunk("movie/getMovie", async ({ page, limit }) => {
  try {
    const data = await fetch(
      `https://api.kinopoisk.dev/v1/movie?limit=${limit}&offset=${(page - 1) * limit}`,
      {
        method: "GET",
        headers: {
          "X-API-KEY": "KNARZC7-GV6MBQC-QY96MPW-RYZFKX5",
        },
      }
    );
    const response = await data.json();
    return response;
  } catch (error) {
    console.log("Error: ", error.message);
  }
});

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movie: [],
    loading: false,
    error: null,
  },
  reducers: {},
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
