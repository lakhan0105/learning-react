import { configureStore } from "@reduxjs/toolkit";
import userState from "./features/user/userSlice";
import jobState from "./features/job/jobSlice";
import allJobsState from "./features/allJobs/allJobsSlice";

export const store = configureStore({
  reducer: {
    userState,
    jobState,
    allJobsState,
  },
});
