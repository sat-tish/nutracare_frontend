import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllCenters = createAsyncThunk(
  "allCenters/fetchAllCenters",
  async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return await res.data;
  }
);

export const allCentersSlice = createSlice({
  name: "allCenters",
  initialState: {
    allCenters: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCenters.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllCenters.fulfilled, (state, action) => {
        state.loading = false;
        state.allCenters = action.payload;
      })
      .addCase(fetchAllCenters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default allCentersSlice.reducer;
