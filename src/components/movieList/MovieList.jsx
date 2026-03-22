import MovieCard from '../movieCard/MovieCard';

function MovieList({ title, movie }) {
  return (
    <>
      <div className="px-8 text-white ">
        <h1 className="text-4xl pb-5 font-bold">{title}</h1>
        <div className="flex  overflow-x-auto movieScrollBar">
          <div className="flex gap-5 scroll-smooth">
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
