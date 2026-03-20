import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./LoginSignUp/Login";
import Browse from "./browse/Browse";
import { supabase } from "../utils/supabaseConfiguration";
import { useEffect } from "react";
import { addUser, removeUser } from "../slices/userSlice";
import { useDispatch } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/browse",
    element: <Browse />,
  },
]);

const Body = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        dispatch(addUser(session.user));
      }
    });
  }, []);

  return <RouterProvider router={router} />;
};

export default Body;
