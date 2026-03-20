import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../slices/userSlice";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../utils/supabaseConfiguration";
import { loading, notLoading } from "../../slices/isLoading";

function Header() {
  const user = useSelector((state) => state.user);
  const data = useSelector((state) => state.load);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
          navigate("/browse");
        } else {
          dispatch(removeUser());
          navigate("/");
        }
      },
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);
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
          {data ? "Sign Out..." : "Sign Out"}
        </div>
      )}
    </div>
  );
}

export default Header;
