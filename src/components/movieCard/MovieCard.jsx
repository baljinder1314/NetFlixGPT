import React from "react";
import { IMAGE_CDN_URL } from "../../utils/constentsForMovieApi";

function MovieCard({ image, title }) {
  return (
    <div className="w-40">
      <img className="w-full" src={IMAGE_CDN_URL + image} alt={`${title}`} />
    </div>
  );
}

export default MovieCard;
