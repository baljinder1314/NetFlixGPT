import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';
import loadReducer from '../slices/isLoading';
import movieReducer from '../../src/slices/movieSlice';
import langReducer from '../slices/langSlice';
import gptReducer from '../slices/gptSlice';
import detailReducer from '../slices/fullMovieDetailSlice';
const store = configureStore({
  reducer: {
    user: userReducer,
    load: loadReducer,
    movie: movieReducer,
    gptSearch: gptReducer,
    lang: langReducer,
    fullMovieDetail: detailReducer,
  },
});

export default store;
