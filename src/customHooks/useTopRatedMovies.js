import { useDispatch, useSelector } from 'react-redux';
import { loading, notLoading } from '../slices/isLoading';
import { useEffect } from 'react';
import { API_OPTION } from '../utils/constentsForMovieApi';
import { addTopRatedMovie } from '../slices/movieSlice';

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const top_rated = useSelector((state) => state.movie.topRatedMovies);

  useEffect(() => {
    const fetchMoviesData = async () => {
      dispatch(loading());

      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/top_rated',
          API_OPTION
        );
        const data = await response.json();
        dispatch(addTopRatedMovie(data));
      } catch (error) {
        console.error('Fetch movies failed', error);
      } finally {
        dispatch(notLoading());
      }
    };
    !top_rated && fetchMoviesData();
  }, [dispatch]);
};

export default useTopRatedMovies;
