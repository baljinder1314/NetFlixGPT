import useFetchMovies from '../../customHooks/useFetchMovies';
import FirstContainer from '../firstContainer/FirstContainer';
import Header from '../header/Header';
import { useSelector } from 'react-redux';
import SecondContainer from '../secondContainer/SecondContainer';
import useUpcomingMovies from '../../customHooks/useUpcomingMovies';
import usePopularMovies from '../../customHooks/usePopularMovies';
import useTopRatedMovies from '../../customHooks/useTopRatedMovies';
import GptSearch from '../gptSearch/GptSearch';

function Browse() {
  useFetchMovies();
  useUpcomingMovies();
  usePopularMovies();
  useTopRatedMovies();

  const load = useSelector((state) => state.load);
  const toggle = useSelector((state) => state.gptSearch.gptToggle);

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

      {load && (
        <div className="text-center text-4xl text-green-600 h-screen justify-center items-center">
          loading...
        </div>
      )}
    </>
  );
}

export default Browse;
