import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProfessionals = createAsyncThunk(
  "allProfessionals/fetchAllProfessionals",
  async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return await res.data;
  }
);

export const allProfessionalsSlice = createSlice({
  name: "allProfessionals",
  initialState: {
    allProfessionals: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProfessionals.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllProfessionals.fulfilled, (state, action) => {
        state.loading = false;
        state.allProfessionals = action.payload;
      })
      .addCase(fetchAllProfessionals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default allProfessionalsSlice.reducer;
