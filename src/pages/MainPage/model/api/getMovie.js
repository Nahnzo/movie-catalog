import { createAsyncThunk } from "@reduxjs/toolkit";

// API ограничивает limit
export const getMovie = createAsyncThunk("movie/getMovie", async ({ page, limit }) => {
  try {
    const data = await fetch(`https://api.kinopoisk.dev/v1/movie?limit=${limit}&offset=${(page - 1) * limit}`, {
      method: "GET",
      headers: {
        "X-API-KEY": "KNARZC7-GV6MBQC-QY96MPW-RYZFKX5",
      },
    });
    const response = await data.json();
    return response;
  } catch (error) {
    console.log("Error: ", error.message);
  }
});
