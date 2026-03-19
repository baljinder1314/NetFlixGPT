import { useState } from "react";
import Header from "../header/Header";

const Login = () => {
  const [signIn, setSignIn] = useState(true);

  const handleSignUp = () => {
    setSignIn((prev) => !prev);
  };
  return (
    <div className="">
      <Header />

      <div className="backGroundImage  w-full absolute bg-black h-screen opacity-55 "></div>
      <div class="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/7ea4545e-42d3-4ebf-82fd-0e1984dc6375/web/IN-en-20260316-TRIFECTA-perspective_789c5633-3949-4708-8e6c-8ddfd22ed696_large.jpg')] bg-cover bg-center h-screen"></div>

      <div className="absolute top-30 borde flex justify-center w-full ">
        <form
          action="#"
          className="
        flex flex-col bg-black/70 border-4 px-15 py-15 w-[28%]"
        >
          <h1 className="text-4xl font-semibold text-white mb-5">
            {signIn ? "Sign Up" : "Login"}
          </h1>
          {signIn && (
            <input
              type="text"
              placeholder="Name"
              className="bg-black/70 text-white h-6 w-full px-8 py-6 rounded border border-gray-500 focus:outline-none mb-4  placeholder:text-[1.2rem]"
            />
          )}
          <input
            type="text"
            placeholder="Email"
            className="bg-black/70 text-white h-6 w-full px-8 py-6 rounded border border-gray-500 focus:outline-none mb-4  placeholder:text-[1.2rem]"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-black/70 text-white h-6 w-full px-8 py-6 rounded border border-gray-500 focus:outline-none mb-9 placeholder:text-[1.2rem] "
          />
          <button className="px-4 border-none py-3  text-white bg-[#e50914] rounded">
            {signIn ? "Sign Up" : "Login"}
          </button>
          <div className="flex justify-between my-2">
            <div className="flex gap-1">
              <input type="checkbox" />
              <p className="text-gray-500 font-semibold">Remember me</p>
            </div>
            <p className="text-gray-500 font-semibold">Need Helps</p>
          </div>
          <div className="text-gray-500 pt-13">
            <p className="capitalize text-[0.98rem] font-semibold mb-4.5 ">
              {signIn ? "Already Registered? " : " new to netflix?"}
              <span
                className="text-white font-semibold cursor-pointer ml-2"
                onClick={handleSignUp}
              >
                {signIn ? "Login" : "Sign Up"}
              </span>{" "}
            </p>
            <p className="text-[0.87rem] font-semibold">
              this page is protected by google reCAPTCHA to ensure you're not a
              bot.
              <span className="text-blue-700"> learn more</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
