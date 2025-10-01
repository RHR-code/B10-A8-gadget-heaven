import { Heart, ShoppingCart } from "lucide-react";
import React from "react";
import { NavLink, useLocation } from "react-router";

const Navbar = () => {
  const navigation = useLocation();
  const location = navigation.pathname;
  console.log(navigation.pathname);
  return (
    <div className="max-w-[1600px] mx-auto px-5 ">
      <div
        className={`navbar  ${
          location === "/"
            ? "bg-[#9538E2] text-white mt-8 rounded-t-4xl px-15 pt-9 "
            : "bg-base-100 text-black"
        }`}
      >
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Statistics</a>
              </li>
              <li>
                <a>Dashboard</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "font-bold underline" : "font-semibold ]"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "font-bold  text-[#9538E2]" : "font-semibold ]"
                }
                to="/statistics"
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "font-bold  text-[#9538E2]" : "font-semibold ]"
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>

        {location === "/" ? (
          <div className="navbar-end">
            <button className="border bg-white p-2.5 rounded-full mr-4">
              <ShoppingCart stroke="black" />
            </button>
            <button className="border bg-white p-2.5 rounded-full">
              <Heart stroke="black" />
            </button>
          </div>
        ) : (
          <div className="navbar-end">
            <button className="border border-gray-300 p-2.5 rounded-full mr-4">
              <ShoppingCart />
            </button>
            <button className="border border-gray-300 p-2.5 rounded-full">
              <Heart />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
