import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import loadReducer from "../slices/isLoading";
import movieReducer from "../../src/slices/movieSlice";


const store = configureStore({
  reducer: {
    user: userReducer,
    load: loadReducer,
    movie: movieReducer,
  },
});

export default store;
