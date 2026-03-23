import useFetchMovies from '../../customHooks/useFetchMovies';
import FirstContainer from '../firstContainer/FirstContainer';
import Header from '../header/Header';
import { useSelector } from 'react-redux';
import SecondContainer from '../secondContainer/SecondContainer';
import useUpcomingMovies from '../../customHooks/useUpcomingMovies';
import usePopularMovies from '../../customHooks/usePopularMovies';
import useTopRatedMovies from '../../customHooks/useTopRatedMovies';
import GptSearch from '../gptSearch/GptSearch';
import FullMovieDetail from '../fullMovieDetail/FullMovieDetail';

function Browse() {
  useFetchMovies();
  useUpcomingMovies();
  usePopularMovies();
  useTopRatedMovies();

  const load = useSelector((state) => state.load);
  const toggle = useSelector((state) => state.gptSearch.gptToggle);
  const showDetailedCard = useSelector(
    (state) => state.fullMovieDetail.showCard
  );

  const movieDetailIs = useSelector(
    (state) => state.fullMovieDetail.movieDetail
  );
  const movieTrailerDetail = useSelector(
    (state) => state.fullMovieDetail.trailerOfMovie
  );

  return (
    <>
      <Header />

      {toggle ? (
        <GptSearch />
      ) : (
        <>
          <FirstContainer />
          <SecondContainer />
        </>
      )}

      {/* ✅ CENTERED LOADER */}
      {load && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/60 z-[9999]">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-white text-lg">Loading...</p>
        </div>
      )}

      {/* ✅ MOVIE DETAIL MODAL */}
      {showDetailedCard && (
        <FullMovieDetail
          movieDetailIs={movieDetailIs}
          movieTrailerDetail={movieTrailerDetail}
        />
      )}
    </>
  );
}

export default Browse;