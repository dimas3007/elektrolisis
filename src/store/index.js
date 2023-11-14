import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import usersReducer from "./UsersSlice";
import commentsReducer from "./CommentsSlice";
import excercisesReducer from "./ExcercisesSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    comments: commentsReducer,
    exercises: excercisesReducer,
  },
});

export default store;
