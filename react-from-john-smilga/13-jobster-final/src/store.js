import { configureStore } from "@reduxjs/toolkit";
import userState from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    userState,
  },
});
