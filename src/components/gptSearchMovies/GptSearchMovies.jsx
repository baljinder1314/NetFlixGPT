import SearchMovies from '../searchedMovies/SearchMovies';
import { useSelector } from 'react-redux';

function GptSearchMovies() {
  const movie = useSelector((state) => state.movie.searchMovies);
  if (!movie) return;

  return (
    <>
      <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-center py-6 sm:py-8 md:py-10 px-4">
        {movie.map((movie) => (
          <SearchMovies
            key={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            overview={movie.overview}
            original_language={movie.original_language}
            vote_average={movie.vote_average}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </>
  );
}

export default GptSearchMovies;
