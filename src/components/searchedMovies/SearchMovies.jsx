import './searchedMovies.css';
import { IMAGE_CDN_URL } from '../../utils/constentsForMovieApi';
import { useState } from 'react';
function SearchMovies({
  title,
  poster_path,
  overview,
  original_language,
  vote_average,
  release_date,
}) {
  const [isHide, setIsHide] = useState(false);

  if (!isHide)
    return (
      <div
        className="card text-white flex flex-col w-full sm:w-56 md:w-60 lg:w-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition hover:scale-105"
        onClick={() => console.log('kamono nhi hai no no !')}
      >
        <img
          className="card-img-top w-full h-auto rounded-t-lg"
          src={`${IMAGE_CDN_URL}${poster_path}`}
          alt={title}
          onError={(err) => {
            console.log(err.target.src);
            setIsHide(true);
          }}
        />
        <div className="card-body space-y-1 p-3 sm:p-4 bg-black/80 flex-grow">
          <h4 className="card-title text-sm sm:text-base md:text-lg font-semibold line-clamp-2">
            {title}
          </h4>
          <h4 className="card-title text-xs sm:text-sm md:text-base font-semibold">
            Language: {original_language}
          </h4>

          <div className="flex flex-col gap-1">
            <p className="text-xs sm:text-sm">Rating: {vote_average}</p>
            <p className="text-xs sm:text-sm">{release_date}</p>
          </div>

          <p className="card-text text-xs sm:text-sm line-clamp-3">
            {overview.split(' ').slice(0, 10).join(' ')}
          </p>
        </div>
      </div>
    );
}

export default SearchMovies;
