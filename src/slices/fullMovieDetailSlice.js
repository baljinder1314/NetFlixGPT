import { createSlice } from '@reduxjs/toolkit';

const fullMovieDetailSlice = createSlice({
  name: 'fullMovieDetail',
  initialState: {
    movieDetail: null,
    showCard: false,
    trailerOfMovie: null,
  },
  reducers: {
    showFullMovieDetail: (state, action) => {
      state.movieDetail = action.payload;
    },
    showMovieDetailCard: (state) => {
      state.showCard = !state.showCard;
    },
    fetchTrailerOfMovie: (state, action) => {
      state.trailerOfMovie = action.payload;
    },
  },
});

export const { showFullMovieDetail, showMovieDetailCard, fetchTrailerOfMovie } =
  fullMovieDetailSlice.actions;

export default fullMovieDetailSlice.reducer;
