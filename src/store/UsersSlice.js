import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "Users",
  initialState: {
    usersArray: {},
  },
  reducers: {
    addUser: (state, action) => {
      const { uid, email, displayName, phoneNumber, photoURL } = action.payload;
      const user = {
        uid,
        email,
        displayName,
        phoneNumber,
        photoURL,
      };

      state.usersArray = user;
    },
  },
  extraReducers: {},
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
