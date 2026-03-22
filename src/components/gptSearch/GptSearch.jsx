import React from 'react';
import GptSearchBar from '../gptSearchBar/GptSearchBar';
import GptSearchMovies from '../gptSearchMovies/GptSearchMovies';

function GptSearch() {
  return (
    <div className="bg-black min-h-screen">
      <GptSearchBar />
      <GptSearchMovies />
      {/* <div className="bg-black w-full "> </div> */}
    </div>
  );
}

export default GptSearch;
