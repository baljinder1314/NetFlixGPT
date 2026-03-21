import { useSelector } from "react-redux";
import { lang } from "../../utils/constentsForMovieApi";

function GptSearchBar() {
  const langChange = useSelector((state) => state.lang.lang);
  return (
    <div className="flex justify-center items-center w-full px-4 pt-[12%] relative  ">
      <form className="w-full max-w-2xl flex bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200">
        {/* Input */}
        <input
          type="text"
          placeholder={lang[langChange].gptSearchPlacholder}
          className="grow px-4 py-3 outline-none text-gray-700"
        />

        {/* Button */}
        <button
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
