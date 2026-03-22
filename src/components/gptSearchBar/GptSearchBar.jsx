import { useDispatch, useSelector } from 'react-redux';
import { API_OPTION, lang } from '../../utils/constentsForMovieApi';
import { useRef } from 'react';
import { addSearchMovies } from '../../slices/movieSlice';

function GptSearchBar() {
  const langChange = useSelector((state) => state.lang.lang);
  const inputRef = useRef('');
  const dispatch = useDispatch();

  const handleGptSearch = async () => {
    const fetchMovie = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${inputRef.current.value}&include_adult=false&language=en-US&page=1`,
      API_OPTION
    );

    const resMovie = await fetchMovie.json();

    dispatch(addSearchMovies(resMovie));
  };

  return (
    <div className="flex justify-center items-center w-full px-4 pt-[12%] relative bg-black  ">
      <form
        className="w-full max-w-2xl flex bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200"
        onSubmit={(e) => e.preventDefault(e)}
      >
        {/* Input */}
        <input
          ref={inputRef}
          type="text"
          placeholder={lang[langChange].gptSearchPlacholder}
          className="grow px-4 py-3 outline-none text-gray-700"
        />

        {/* Button */}
        <button
          onClick={handleGptSearch}
          type="submit"
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 font-semibold transition"
        >
          {lang[langChange].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
