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
  }, [dispatch,navigate]);

  const handleToggelGpt = () => {
    dispatch(toggle());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute z-100  flex justify-between  w-full py-10 px-20">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
        className="w-32 relative "
      />
      {user && (
        <div className="flex gap-4 ">
          {toggleValue && (
            <select
              onChange={handleLanguageChange}
              className="text-white bg-black px-4 font-semibold rounded"
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
            className="text-xl py-1  px-8 font-semibold capitalize border-none rounded bg-white text-black hover:opacity-80 relative z-1000"
            onClick={handleToggelGpt}
          >
            {toggleValue ? 'Home' : 'GPT Search'}
          </button>
          <div
            onClick={handleSignOut}
            className="font-bold text-xl cursor-pointer relative z-10 text-white border px-10 py-2 rounded  bg-gray-500/30"
          >
            {data ? 'Sign Out...' : 'Sign Out'}
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
