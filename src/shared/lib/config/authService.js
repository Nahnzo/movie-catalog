import { createAsyncThunk } from "@reduxjs/toolkit";
import { $api } from "../config/axiosConfig";
import { API_URL } from "../const/const";
import axios from "axios";

export const userLogin = createAsyncThunk("auth/login", async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await $api.post("/login", { email, password });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const userRegistration = createAsyncThunk(
  "auth/registration",
  async ({ email, password }, { rejectWithValue }) => {
    if (!email.trim() || !password.trim()) {
      return rejectWithValue("Заполните все поля");
    }
    try {
      const response = await $api.post("/registration", { email, password });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const userLogout = createAsyncThunk("auth/logout", async (_, { rejectWithValue }) => {
  try {
    await $api.post("/logout");
    return null;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const checkAuth = createAsyncThunk("check/Auth", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});
