import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "../features/postsSlice";
import usersSlice from "../features/usersSlice";

export const store = configureStore({
  reducer: {
    posts: postsSlice,
    users: usersSlice,
  },
});
