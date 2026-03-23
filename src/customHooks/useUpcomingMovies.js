import { useDispatch, useSelector } from 'react-redux';
import { loading, notLoading } from '../slices/isLoading';
import { useEffect } from 'react';
import { API_OPTION } from '../utils/constentsForMovieApi';
import { addUpcomingMovie } from '../slices/movieSlice';

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const upcoming = useSelector((state) => state.movie.upcomingMovies);
  useEffect(() => {
    const fetchMoviesData = async () => {
      dispatch(loading());

      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/upcoming',
          API_OPTION
        );
        const data = await response.json();
        dispatch(addUpcomingMovie(data));
      } catch (error) {
        console.error('Fetch movies failed', error);
      } finally {
        dispatch(notLoading());
      }
    };
    !upcoming && fetchMoviesData();
  }, [dispatch]);
};

export default useUpcomingMovies;
