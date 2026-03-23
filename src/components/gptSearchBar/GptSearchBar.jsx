import { useDispatch, useSelector } from 'react-redux';
import { API_OPTION, lang } from '../../utils/constentsForMovieApi';
import { useRef } from 'react';
import { addSearchMovies } from '../../slices/movieSlice';
import { loading, notLoading } from '../../slices/isLoading';

function GptSearchBar() {
  const langChange = useSelector((state) => state.lang.lang);
  const inputRef = useRef('');
  const dispatch = useDispatch();
  const loadingSpinner = useSelector((state) => state.load);

  const handleGptSearch = async () => {
    // dispatch(loading(true));
    const fetchMovie = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${inputRef.current.value}&include_adult=false&language=en-US&page=1`,
      API_OPTION
    );

    const resMovie = await fetchMovie.json();

    dispatch(addSearchMovies(resMovie));
    // dispatch(notLoading(false));
  };

  return (
    <div className="flex justify-center items-center w-full px-4 sm:px-6 md:px-8 pt-[15%] sm:pt-[12%] relative bg-black md:top-10 top-20">
      <form
        className="w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl flex sm:flex-row bg-white shadow-lg rounded-lg sm:rounded-xl overflow-hidden border border-gray-200 mb-10"
        onSubmit={(e) => e.preventDefault(e)}
      >
        {/* Input */}
        <input
          ref={inputRef}
          type="text"
          placeholder={lang[langChange].gptSearchPlacholder}
          className="grow px-3 sm:px-4 py-2 sm:py-3 outline-none text-sm sm:text-base text-gray-700"
        />

        {/* Button */}
        <div className="">
          {' '}
          <button
            onClick={handleGptSearch}
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 font-semibold transition text-sm sm:text-base"
          >
            {lang[langChange].search}
          </button>
        </div>
      </form>
    </div>
  );
}

export default GptSearchBar;
