import { useDispatch } from 'react-redux';
import { loading, notLoading } from '../slices/isLoading';
import { addNowPlayingMovie } from '../slices/movieSlice';
import { useEffect } from 'react';
import { API_OPTION } from '../utils/constentsForMovieApi';

const useFetchMovies = () => {
  const dispatch = useDispatch();

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
    fetchMoviesData();
  }, [dispatch]);
};

export default useFetchMovies;
