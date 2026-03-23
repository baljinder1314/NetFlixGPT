import MovieCard from '../movieCard/MovieCard';

function MovieList({ title, movie }) {
  return (
    <>
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 text-white ">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl pb-3 sm:pb-4 md:pb-5 lg:pb-6 font-bold">
          {title}
        </h1>
        <div className="flex overflow-x-auto movieScrollBar pb-4">
          <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-5 scroll-smooth min-w-min">
            {movie?.map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                image={movie.poster_path}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieList;
