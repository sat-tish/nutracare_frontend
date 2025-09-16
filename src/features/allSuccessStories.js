import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllSuccessStories = createAsyncThunk(
  "allSuccessStories/fetchAllSuccessStories",
  async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return await res.data;
  }
);

export const allSuccessStoriesSlice = createSlice({
  name: "allSuccessStories",
  initialState: {
    allSuccessStories: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllSuccessStories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllSuccessStories.fulfilled, (state, action) => {
        state.loading = false;
        state.allSuccessStories = action.payload;
      })
      .addCase(fetchAllSuccessStories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default allSuccessStoriesSlice.reducer;
