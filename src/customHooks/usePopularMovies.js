import { useDispatch } from "react-redux";
import { loading, notLoading } from "../slices/isLoading";
import { useEffect } from "react";
import { API_OPTION } from "../utils/constentsForMovieApi";
import { addPopularMovie } from "../slices/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const fetchMoviesData = async () => {
    dispatch(loading());

    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular",
        API_OPTION,
      );
      const data = await response.json();
      dispatch(addPopularMovie(data));
    } catch (error) {
      console.error("Fetch movies failed", error);
    } finally {
      dispatch(notLoading());
    }
  };

  useEffect(() => {
    fetchMoviesData();
  }, []);
};

export default usePopularMovies;
