import { useRef, useState } from 'react';
import Header from '../header/Header';
import { loginValidation } from '../../utils/validationOfLogin';
import { supabase } from '../../utils/supabaseConfiguration';
import { useDispatch } from 'react-redux';
import { addUser } from '../../slices/userSlice';
import { BG_IMAGE } from '../../utils/constentsForMovieApi';

const Login = () => {
  const dispatch = useDispatch();
  const [signIn, setSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const email = useRef(null);
  const password = useRef(null);

  const handleSignUp = () => {
    setSignIn((prev) => !prev);
    setErrorMsg(''); // reset error on toggle
  };

  const handleLoginBtn = async () => {
    const message = loginValidation(
      email.current.value,
      password.current.value
    );

    if (message) {
      setErrorMsg(message);
      return;
    }

    setErrorMsg('');
    setIsLoading(true);

    if (!signIn) {
      // ✅ LOGIN
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.current.value,
        password: password.current.value,
      });

      setIsLoading(false);

      if (error) {
        setErrorMsg(error.message);
        return;
      }

      // ✅ Store user in Redux
      dispatch(addUser(data.user));

      // ✅ Navigate only on success
    } else {
      // ✅ SIGN UP
      const { data, error } = await supabase.auth.signUp({
        email: email.current.value,
        password: password.current.value,
      });

      setIsLoading(false);

      if (error) {
        setErrorMsg(error.message);
        return;
      }

      // Optional: auto login after signup
      dispatch(addUser(data.user));
    }
  };

  return (
    <div className="relative min-h-screen">
      <Header />

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div
          style={{ backgroundImage: `url(${BG_IMAGE})` }}
          className="bg-cover bg-center w-full h-full"
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Form */}
      <div className="flex flex-col md:flex-row py-20 gap-10 items-center justify-center min-h-screen px-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-black/80 rounded p-4 sm:p-6 md:p-10"
        >
          <h1 className="text-2xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 sm:mb-6">
            {signIn ? 'Sign Up' : 'Login'}
          </h1>

          {signIn && (
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-black/70 text-white px-3 sm:px-4 py-2 sm:py-3 rounded border border-gray-500 mb-3 sm:mb-4 focus:ring-2 focus:ring-red-600 text-sm sm:text-base"
            />
          )}

          {/* Email */}
          <input
            ref={email}
            type="text"
            placeholder="Email"
            className={`w-full bg-black/70 text-white px-3 sm:px-4 py-2 sm:py-3 rounded border mb-3 sm:mb-4 focus:ring-2 focus:ring-red-600 text-sm sm:text-base ${
              errorMsg ? 'border-red-500' : 'border-gray-500'
            }`}
          />

          {/* Password */}
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className={`w-full bg-black/70 text-white px-3 sm:px-4 py-2 sm:py-3 rounded border mb-2 sm:mb-3 focus:ring-2 focus:ring-red-600 text-sm sm:text-base ${
              errorMsg ? 'border-red-500' : 'border-gray-500'
            }`}
          />

          {/* ❌ Error Message */}
          {errorMsg && (
            <p className="text-red-500 text-xs sm:text-sm mb-3 sm:mb-4 font-semibold">
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            onClick={handleLoginBtn}
            className="w-full py-2 sm:py-3 text-white bg-[#e50914] rounded font-semibold hover:bg-red-700 transition mt-6 sm:mt-8 text-sm sm:text-base"
          >
            {signIn
              ? isLoading
                ? 'Loading...'
                : 'Sign Up'
              : isLoading
                ? `Loading...`
                : `Login`}
          </button>

          <div className="flex justify-between mt-3 sm:mt-4 text-xs sm:text-sm text-gray-400 gap-2">
            <label className="flex items-center gap-2 whitespace-nowrap">
              <input type="checkbox" />
              Remember me
            </label>
            <p>Need Help?</p>
          </div>

          <div className="text-gray-400 mt-4 sm:mt-6 text-xs sm:text-sm">
            <p>
              {signIn ? 'Already Registered?' : 'New to Netflix?'}
              <span
                className="text-white cursor-pointer ml-2"
                onClick={handleSignUp}
              >
                {signIn ? 'Login' : 'Sign Up'}
              </span>
            </p>
          </div>
        </form>
        <div className=" max-w-sm bg-black/80 text-white p-6 rounded">
          <h2 className="text-xl font-semibold mb-3">Note</h2>

          <p className="text-sm mb-3">
            Due to server issues, you may face problems while Creating new
            Account in.
          </p>

          <p className="text-sm mb-3">
            You cannot create a new account. This website doesn't work without
            VPN if you are in India 🇮🇳
          </p>

          <p className="text-sm mb-4">Or use demo account:</p>

          <div className="bg-gray-800 p-3 rounded text-sm break-all">
            <p>
              <span className="text-gray-400">Email:</span>{' '}
              <span
                className="cursor-pointer"
                onClick={() =>
                  navigator.clipboard.writeText('simran@gmail.com')
                }
              >
                simran@gmail.com 📋
              </span>
            </p>

            <p className="mt-2">
              <span className="text-gray-400">Password:</span>{' '}
              <span
                className="cursor-pointer"
                onClick={() => navigator.clipboard.writeText('Simran@0099')}
              >
                Simran@0099 📋
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
