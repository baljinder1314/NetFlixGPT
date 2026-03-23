import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../../slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../utils/supabaseConfiguration';
import { loading, notLoading } from '../../slices/isLoading';
import { toggle } from '../../slices/gptSlice';
import { SUPORTED_LANGUAGES } from '../../utils/constentsForMovieApi';
import { changeLanguage } from '../../slices/langSlice';

function Header() {
  const user = useSelector((state) => state.user);
  const data = useSelector((state) => state.load);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggleValue = useSelector((state) => state.gptSearch.gptToggle);

  const handleSignOut = async () => {
    dispatch(loading(true));
    await supabase.auth.signOut();
    dispatch(notLoading(false));
  };

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session?.user) {
          dispatch(addUser(session.user));
          navigate('/browse');
        } else {
          dispatch(removeUser());
          navigate('/');
        }
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, [dispatch, navigate]);

  const handleToggelGpt = () => {
    dispatch(toggle());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className={`absolute z-100  flex justify-between items-center w-full py-10 sm:py-6 md:py-10 px-4 sm:px-8 md:px-20  sm:gap-4 ${toggleValue && "flex-col"} md:flex-row gap-5`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
        className="w-24 sm:w-28 md:w-32 relative "
      />
      {user && (
        <div className="flex gap-2 sm:gap-3 md:gap-4 flex-wrap justify-end">
          {toggleValue && (
            <select
              onChange={handleLanguageChange}
              className="text-xs sm:text-sm md:text-base text-white bg-black px-2 sm:px-3 md:px-4 py-1 sm:py-2 font-semibold rounded"
            >
              {SUPORTED_LANGUAGES.map((lang) => (
                <option
                  key={lang.identifier}
                  className="px-2"
                  value={lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="text-[0.55rem] sm:text-sm md:text-lg lg:text-xl py-1 px-4 sm:px-6 md:px-8 font-semibold capitalize border-none rounded bg-white text-black hover:opacity-80 relative z-1000 whitespace-nowrap "
            onClick={handleToggelGpt}
          >
            {toggleValue ? 'Home' : 'GPT Search'}
          </button>
          <div
            onClick={handleSignOut}
            className="font-bold text-xs sm:text-sm md:text-lg lg:text-xl cursor-pointer relative z-10 text-white border px-3 sm:px-6 md:px-8 lg:px-10 py-1 sm:py-2 rounded bg-gray-500/30 whitespace-nowrap"
          >
            {data ? 'Sign Out...' : 'Sign Out'}
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
