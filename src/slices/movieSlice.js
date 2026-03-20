import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    latestMovies: null,
    movieTrailer: null,
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.latestMovies = action.payload.results;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
  },
});

export const { addNowPlayingMovie, addMovieTrailer } = movieSlice.actions;

export default movieSlice.reducer;
