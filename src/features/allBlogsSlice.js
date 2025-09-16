import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllBlogs = createAsyncThunk(
  "allBlogs/fetchAllBlogs",
  async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return await res.data;
  }
);

export const allBlogsSlice = createSlice({
  name: "allBlogs",
  initialState: {
    allBlogs: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBlogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.allBlogs = action.payload;
      })
      .addCase(fetchAllBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default allBlogsSlice.reducer;
