import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "Users",
  initialState: {
    usersArray: [],
  },
  reducers: {},
  extraReducers: {},
});

export default usersSlice.reducer;
