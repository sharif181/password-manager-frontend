import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken } from "../features/auth/authSlice";

const NavBar = () => {
  const { isLoggin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    dispatch(setToken());
    navigate("/");
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-neutral text-xl">
          PM
        </Link>
      </div>
      <div className="flex-none">
        {!isLoggin && (
          <Link to="/login" className="link link-primary">
            Login
          </Link>
        )}

        {isLoggin && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="profile"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/home" className="justify-between">
                  Dashboard
                </Link>
              </li>
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a onClick={handleLogout} className="justify-between">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
