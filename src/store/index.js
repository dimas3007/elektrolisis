import { configureStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import usersReducer from "./UsersSlice";
import commentsReducer from "./CommentsSlice";

const store = configureStore(
  {
    reducer: {
      users: usersReducer,
      comments: commentsReducer,
    },
  },
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
