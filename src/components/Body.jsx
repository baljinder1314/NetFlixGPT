import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./LoginSignUp/Login";
import Browse from "./browse/Browse";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/browse",
    element: <Browse />,
  },
]);

const Body = () => {
  return <RouterProvider router={router} />;
};

export default Body;
