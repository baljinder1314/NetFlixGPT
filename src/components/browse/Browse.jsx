import useFetchMovies from "../../customHooks/useFetchMovies";
import FirstContainer from "../firstContainer/FirstContainer";
import Header from "../header/Header";
import { useSelector } from "react-redux";
import SecondContainer from "../secondContainer/SecondContainer";
import useUpcomingMovies from "../../customHooks/useUpcomingMovies";
import usePopularMovies from "../../customHooks/usePopularMovies";
import useTopRatedMovies from "../../customHooks/useTopRatedMovies";

function Browse() {
  useFetchMovies();
  useUpcomingMovies();
  usePopularMovies();
  useTopRatedMovies();

  const load = useSelector((state) => state.load);

  return (
    <>
      <Header />

      <FirstContainer />
      <SecondContainer />

      {load && (
        <div className="text-center text-4xl text-green-600">loading...</div>
      )}
    </>
  );
}

export default Browse;
