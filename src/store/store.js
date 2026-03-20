import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import loadReducer from "../slices/isLoading";
const store = configureStore({
  reducer: {
    user: userReducer,
    load: loadReducer,
  },
});

export default store;
