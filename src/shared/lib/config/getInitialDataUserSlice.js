import { createAsyncThunk } from "@reduxjs/toolkit";

export const initialDataUser = createAsyncThunk("initialData", async (userId) => {
  if (userId) {
    const response = await fetch(`http://localhost:5000/api/user/${userId}/movies`);
    const result = await response.json();

    return result;
  }
});
