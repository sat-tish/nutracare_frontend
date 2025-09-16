import { configureStore } from "@reduxjs/toolkit";
import allCenterReducer from "../features/allCentersSlice";
import allProfessionalsReducer from "../features/allProfessionalsSlice";
import allBlogsReducer from "../features/allBlogsSlice";
import alSuccessStoriesReducer from "../features/allSuccessStories";

export const store = configureStore({
  reducer: {
    allCenters: allCenterReducer,
    allProfessionals: allProfessionalsReducer,
    allBlogs: allBlogsReducer,
    allSuccessStories: alSuccessStoriesReducer,
  },
});
