import React from "react";
import GptSearchBar from "../gptSearchBar/GptSearchBar";
import GptSearchMovies from "../gptSearchMovies/GptSearchMovies";
import { BG_IMAGE } from "../../utils/constentsForMovieApi";

function GptSearch() {
  return (
    <div>
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={BG_IMAGE}
          className=" bg-cover bg-center w-full h-full"
          alt=""
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      <GptSearchBar />
      <GptSearchMovies />
    </div>
  );
}

export default GptSearch;
