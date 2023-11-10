import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "Users",
  initialState: {
    usersArray: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.value.usersArray = action.payload;
    },
  },
  extraReducers: {},
});

export default usersSlice.reducer;
