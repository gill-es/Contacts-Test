import { configureStore, combineReducers } from "@reduxjs/toolkit";
import ReduxThunk from "redux-thunk";

import contacts from "./../reducers/contacts";

const reducer = combineReducers({
  contacts,
  // contact,
});

const store = configureStore({
  reducer,
  middleware: [ReduxThunk],
});

export default store;
