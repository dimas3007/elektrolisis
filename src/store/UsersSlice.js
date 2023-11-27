import app from "../config/firebase";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// fetch Users
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const users = await app.auth().listUsers();
  return users;
});

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
    deleteUser: (state, action) => {
      state.usersArray = {};
    },
  },
  extraReducers: {},
});

export const { addUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
