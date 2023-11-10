import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import usersReducer from "./UsersSlice";
import commentsReducer from "./CommentsSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    comments: commentsReducer,
  },
});

export default store;
