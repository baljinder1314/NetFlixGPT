import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../slices/userSlice";
import { useNavigate } from "react-router-dom";

function Header() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () => {
    dispatch(removeUser());
    navigate("/");
  };
  return (
    <div className="absolute z-10  flex justify-between  w-full py-10 px-20">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
        className="w-32"
      />
      {user && (
        <div
          onClick={handleSignOut}
          className="font-bold text-xl cursor-pointer"
        >
          Sign Out
        </div>
      )}
    </div>
  );
}

export default Header;
