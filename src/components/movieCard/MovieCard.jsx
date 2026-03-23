import React from 'react';
import { IMAGE_CDN_URL } from '../../utils/constentsForMovieApi';

function MovieCard({ image, title }) {
  return (
    <div className="w-28 sm:w-32 md:w-36 lg:w-40 cursor-pointer hover:scale-110 transition-transform duration-300 flex-shrink-0">
      <img
        className="w-full rounded-md hover:opacity-80 transition"
        src={IMAGE_CDN_URL + image}
        alt={`${title}`}
      />
    </div>
  );
}

export default MovieCard;
