import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import userReducer from "./reducers/userReducer";

const stores = createStore(
  userReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default stores;
