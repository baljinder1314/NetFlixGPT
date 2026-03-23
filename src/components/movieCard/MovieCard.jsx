import React from 'react';
import { IMAGE_CDN_URL } from '../../utils/constentsForMovieApi';
import { useDispatch } from 'react-redux';
import {
  showFullMovieDetail,
  showMovieDetailCard,
} from '../../slices/fullMovieDetailSlice';

function MovieCard({ image, title, fullMovie }) {
  const dispatch = useDispatch();

  const hendleshowCard = () => {
    dispatch(showFullMovieDetail(fullMovie));
    dispatch(showMovieDetailCard(true));
  };
  return (
    <div
      className="w-28 sm:w-32 md:w-36 lg:w-40 cursor-pointer hover:scale-110 transition-transform duration-300 shrink-0"
      onClick={hendleshowCard}
    >
      <img
        className="w-full rounded-md hover:opacity-80 transition"
        src={IMAGE_CDN_URL + image}
        alt={`${title}`}
      />
    </div>
  );
}

export default MovieCard;
