import { useDispatch, useSelector } from 'react-redux';
import { loading, notLoading } from '../slices/isLoading';
import { addNowPlayingMovie } from '../slices/movieSlice';
import { useEffect } from 'react';
import { API_OPTION } from '../utils/constentsForMovieApi';

const useFetchMovies = () => {
  const dispatch = useDispatch();

  const now_playing = useSelector((state) => state.movie.latestMovies);

  useEffect(() => {
    const fetchMoviesData = async () => {
      dispatch(loading());

      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/now_playing',
          API_OPTION
        );
        const data = await response.json();

        dispatch(addNowPlayingMovie(data));
      } catch (error) {
        console.error('Fetch movies failed', error);
      } finally {
        dispatch(notLoading());
      }
    };

    if (!now_playing) {
      fetchMoviesData();
    }
  }, [dispatch]);
};

export default useFetchMovies;
