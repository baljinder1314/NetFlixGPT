import React from "react";
import MovieList from "../movieList/MovieList";
import { useSelector } from "react-redux";

function SecondContainer() {
  const movie = useSelector((state) => state.movie);
  if (movie.latestMovies === null) return;
  if (movie.upcomingMovies === null) return;
  if (movie.popularMovies === null) return;
  if (movie.topRatedMovies === null) return;
  const { latestMovies, upcomingMovies, popularMovies, topRatedMovies } = movie;

  return (
    <div className="bg-black">
      <div className="relative -top-60 z-100">
        <MovieList title={`Now Playing`} movie={latestMovies} />
        <MovieList title={`Popular`} movie={popularMovies} />
        <MovieList title={`Top Rated`}  movie={topRatedMovies}/>
        <MovieList title={`Upcoming `} movie={upcomingMovies} />
        {/* <MovieList title={`Romantic`} /> */}
      </div>
    </div>
  );
}

export default SecondContainer;
