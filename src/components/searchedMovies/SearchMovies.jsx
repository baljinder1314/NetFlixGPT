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
        className="card text-white flex flex-col "
        style={{ width: '15rem' }}
        onClick={() => console.log('kamono nhi hai no no !')}
      >
        <img
          className="card-img-top w-full"
          src={`${IMAGE_CDN_URL}${poster_path}`}
          alt={title}
          onError={(err) => {
            console.log(err.target.src);
            setIsHide(true);
          }}
        />
        <div className="card-body space-y-1">
          <h4 className="card-title text-xl font-semibold">{title}</h4>
          <h4 className="card-title text-xl font-semibold">
            Language: {original_language}
          </h4>

          <div className="container">
            <div className="row">
              <p className="text-base">Rating: {vote_average}</p>

              <div className="col-sm-8 metadata px-2">{release_date}</div>
            </div>
          </div>

          <p className="card-text">
            {' '}
            {overview.split(' ').slice(0, 10).join(' ')}
          </p>
        </div>
      </div>
    );
}

export default SearchMovies;
