import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    latestMovies: null,
    movieTrailer: null,
    upcomingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    searchMovies: null,
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.latestMovies = action.payload.results;
    },
    addUpcomingMovie: (state, action) => {
      state.upcomingMovies = action.payload.results;
    },
    addPopularMovie: (state, action) => {
      state.popularMovies = action.payload.results;
    },
    addTopRatedMovie: (state, action) => {
      state.topRatedMovies = action.payload.results;
    },
    addSearchMovies: (state, action) => {
      state.searchMovies = action.payload.results;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
  },
});

export const {
  addNowPlayingMovie,
  addMovieTrailer,
  addUpcomingMovie,
  addPopularMovie,
  addTopRatedMovie,
  addSearchMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
