import { useEffect } from "react";
import { addMovieTrailer } from "../slices/movieSlice";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constentsForMovieApi";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();
  const fetchMovieTrailer = async () => {
    const movieTrailer = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos `,
      API_OPTION,
    );
    const resTailer = await movieTrailer.json();

    const filterData = resTailer.results.filter(
      (movie) => movie.type === "Trailer",
    );
    const trailer =
      filterData.length === 0 ? filterData[0] : resTailer.results[0];
    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    fetchMovieTrailer();
  }, []);
};

export default useMovieTrailer;
