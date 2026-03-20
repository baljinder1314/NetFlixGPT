import { useEffect, useRef, useState } from "react";
import Header from "../header/Header";
import { loginValidation } from "../../utils/validationOfLogin";
import { supabase } from "../../utils/supabaseConfiguration";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../slices/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [signIn, setSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);

  const handleSignUp = () => {
    setSignIn((prev) => !prev);
    setErrorMsg(""); // reset error on toggle
  };

  const handleLoginBtn = async () => {
    const message = loginValidation(
      email.current.value,
      password.current.value,
    );

    if (message) {
      setErrorMsg(message);
      return;
    }

    setErrorMsg("");
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
      navigate("/browse");
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

      navigate("/browse");
    }
  };


  return (
    <div className="relative min-h-screen">
      <Header />

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/7ea4545e-42d3-4ebf-82fd-0e1984dc6375/web/IN-en-20260316-TRIFECTA-perspective_789c5633-3949-4708-8e6c-8ddfd22ed696_large.jpg')] bg-cover bg-center w-full h-full"></div>
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Form */}
      <div className="flex items-center justify-center min-h-screen px-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-md bg-black/80 rounded p-6 sm:p-10"
        >
          <h1 className="text-3xl font-semibold text-white mb-6">
            {signIn ? "Sign Up" : "Login"}
          </h1>

          {signIn && (
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-black/70 text-white px-4 py-3 rounded border border-gray-500 mb-4 focus:ring-2 focus:ring-red-600"
            />
          )}

          {/* Email */}
          <input
            ref={email}
            type="text"
            placeholder="Email"
            className={`w-full bg-black/70 text-white px-4 py-3 rounded border mb-4 focus:ring-2 focus:ring-red-600 ${
              errorMsg ? "border-red-500" : "border-gray-500"
            }`}
          />

          {/* Password */}
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className={`w-full bg-black/70 text-white px-4 py-3 rounded border mb-2 focus:ring-2 focus:ring-red-600 ${
              errorMsg ? "border-red-500" : "border-gray-500"
            }`}
          />

          {/* ❌ Error Message */}
          {errorMsg && (
            <p className="text-red-500 text-sm mb-4 font-semibold">
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            onClick={handleLoginBtn}
            className="w-full py-3 text-white bg-[#e50914] rounded font-semibold hover:bg-red-700 transition mt-8"
          >
            {signIn
              ? isLoading
                ? "Loading..."
                : "Sign Up"
              : isLoading
                ? `Loading...`
                : `Login`}
          </button>

          <div className="flex justify-between mt-4 text-sm text-gray-400">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>
            <p>Need Help?</p>
          </div>

          <div className="text-gray-400 mt-6 text-sm">
            <p>
              {signIn ? "Already Registered?" : "New to Netflix?"}
              <span
                className="text-white cursor-pointer ml-2"
                onClick={handleSignUp}
              >
                {signIn ? "Login" : "Sign Up"}
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
