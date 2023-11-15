import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import usersReducer from "./UsersSlice";
import commentsReducer from "./CommentsSlice";
import excercisesReducer from "./ExcercisesSlice";
import downloadsReducer from "./DownloadsSlice";
import likesReducer from "./LikesSlice";
import viewsReducer from "./ViewsSlice";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  users: usersReducer,
  comments: commentsReducer,
  exercises: excercisesReducer,
  downloads: downloadsReducer,
  views: viewsReducer,
  likes: likesReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
export default store;
