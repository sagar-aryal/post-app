import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    name: "Sagar Aryal",
  },
  {
    id: "2",
    name: "Dave Gray",
  },
  {
    id: "3",
    name: "Pedro Tech",
  },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const getAllUsers = (state) => state.users;

export default userSlice.reducer;
