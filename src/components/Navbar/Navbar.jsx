import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
      <div className="navbar bg-base-100 fixed z-10 font-work-sans ">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "font-bold text-customGreen border-2 border-green-500 px-2 py-1 rounded-md " : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/listedBooks"
              className={({ isActive }) =>
                isActive ? "font-bold text-customGreen border-2 border-green-500 px-2 py-1 rounded-md" : ""
              }
            >
              Listed Books
            </NavLink>
            <NavLink
              to="/pagesToRead"
              className={({ isActive }) =>
                isActive ? "font-bold text-customGreen border-2 border-green-500 px-2 py-1 rounded-md" : ""
              }
            >
              Pages To Read
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? "font-bold text-customGreen border-2 border-green-500 px-2 py-1 rounded-md" : ""
              }
            >
              Blogs
            </NavLink>
            <NavLink
              to="/contactUs"
              className={({ isActive }) =>
                isActive ? "font-bold text-customGreen border-2 border-green-500 px-2 py-1 rounded-md" : ""
              }
            >
              Contact Us
            </NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bookish Bliss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-5 flex justify-center items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "font-bold text-customGreen border-2 border-green-500 px-2 py-1 rounded-md " : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/listedBooks"
              className={({ isActive }) =>
                isActive ? "font-bold text-customGreen border-2 border-green-500 px-2 py-1 rounded-md" : ""
              }
            >
              Listed Books
            </NavLink>
            <NavLink
              to="/pagesToRead"
              className={({ isActive }) =>
                isActive ? "font-bold text-customGreen border-2 border-green-500 px-2 py-1 rounded-md" : ""
              }
            >
              Pages To Read
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? "font-bold text-customGreen border-2 border-green-500 px-2 py-1 rounded-md" : ""
              }
            >
              Blogs
            </NavLink>
            <NavLink
              to="/contactUs"
              className={({ isActive }) =>
                isActive ? "font-bold text-customGreen border-2 border-green-500 px-2 py-1 rounded-md" : ""
              }
            >
              Contact Us
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end space-x-5">
          <a className="btn bg-customGreen btn-sm md:btn-md lg:btn-md">Sign In</a>
          <a className="btn bg-sky-400 btn-sm md:btn-md lg:btn-md">Sign Up</a>
        </div>
      </div>
  );
};

export default Navbar;
