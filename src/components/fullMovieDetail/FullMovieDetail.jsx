import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTION } from '../../utils/constentsForMovieApi';
import {
  fetchTrailerOfMovie,
  showMovieDetailCard,
} from '../../slices/fullMovieDetailSlice';

const FullMovieDetail = ({ movieDetailIs, movieTrailerDetail }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const searchMovieDetails = useSelector((state) => state.movie.searchMovies);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const fetchMovieDetail = async () => {
      try {
        const movieTrailer = await fetch(
          `https://api.themoviedb.org/3/movie/${movieDetailIs.id}/videos`,
          API_OPTION
        );

        const trailer = await movieTrailer.json();

        if (!isMounted) return;

        const results = trailer?.results || [];

        // ✅ fallback logic
        const trailerVideo =
          results.find((v) => v.type === 'Trailer') ||
          results.find((v) => v.type === 'Teaser') ||
          results[0] ||
          null;

        dispatch(fetchTrailerOfMovie(trailerVideo));
      } catch (err) {
        console.error(err);
        dispatch(fetchTrailerOfMovie(null));
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    !searchMovieDetails && fetchMovieDetail();

    return () => {
      isMounted = false;
      dispatch(fetchTrailerOfMovie(null));
    };
  }, [movieDetailIs.id, dispatch]);

  return (
    <div className="text-white fixed inset-0 z-10000 bg-black/70 flex items-center justify-center">
      {/* ❌ Close Button */}
      <div
        onClick={() => dispatch(showMovieDetailCard(false))}
        className="absolute top-10 right-10 text-5xl cursor-pointer hover:scale-110 transition"
      >
        ✕
      </div>

      {/* ✅ LOADING */}
      {loading && (
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          <p className="text-xl">Loading trailer...</p>
        </div>
      )}

      {/* ✅ TRAILER EXISTS */}
      {movieTrailerDetail?.key && !loading && (
        <iframe
          className="absolute w-9/12 h-9/12 top-20 rounded-lg shadow-lg"
          src={`https://www.youtube.com/embed/${movieTrailerDetail.key}?autoplay=1&controls=1&modestbranding=1&rel=0&iv_load_policy=3`}
          title="YouTube video player"
          allow="autoplay; encrypted-media"
          allowFullScreen
          onLoad={() => setLoading(false)}
        />
      )}

      {/* ❌ NO TRAILER */}
      {!loading && !movieTrailerDetail && (
        <div className="text-center">
          <p className="text-2xl font-semibold">Trailer not available 🎬</p>
          <p className="text-gray-400 mt-2">
            This movie doesn't have a trailer yet.
          </p>
        </div>
      )}
    </div>
  );
};

export default FullMovieDetail;
