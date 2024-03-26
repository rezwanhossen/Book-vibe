import { NavLink } from "react-router-dom";

const Header = () => {
  const navBtn = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? " btn btn-outline btn-success " : " "
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/listedBook"
          className={({ isActive }) =>
            isActive ? " btn btn-outline btn-success " : " "
          }
        >
          Listed Books
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/readPags"
          className={({ isActive }) =>
            isActive ? " btn btn-outline btn-success " : " "
          }
        >
          Pages to Read
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive ? " btn btn-outline btn-success " : " "
          }
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? " btn btn-outline btn-success " : " "
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="  menu menu-sm dropdown-content mt-3 z-[1] p-2 gap-2 shadow bg-base-100 rounded-box w-52"
            >
              {navBtn}
            </ul>
          </div>
          <a className=" font-bold text-2xl">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1">{navBtn}</ul>
        </div>
        <div className="navbar-end gap-3">
          <a className="btn btn-success text-white text-xl ">Sign In</a>
          <a className="btn btn-accent text-white text-xl ">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
