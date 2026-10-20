import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaMoon, FaBars, FaXmark } from "react-icons/fa6";
import { IoGlobeOutline } from "react-icons/io5";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const styleLink = (isActive) => {
    return isActive
      ? "text-blue-600 border-b-2  border-blue-600 py-1"
      : "text-gray-600 hover:text-blue-600 transition-colors";
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <nav className="flex items-center justify-between w-[95%] mx-auto h-14">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <IoGlobeOutline className="text-2xl text-blue-600" />
          <h3 className="text-lg sm:text-xl font-bold">
            World <span className="text-blue-600">Atlas</span>
          </h3>
        </div>

        {/* Desktop links */}
        <ul className="hidden sm:flex items-center gap-8 font-medium">
          <li className="hover:text-blue-600 transition-colors cursor-pointer">
            <NavLink to="/" className={({ isActive }) => styleLink(isActive)}>
              Home
            </NavLink>
          </li>
          <li className="hover:text-blue-600 transition-colors cursor-pointer">
            <NavLink
              to="/about"
              className={({ isActive }) => styleLink(isActive)}
            >
              About
            </NavLink>
          </li>
          <li className="hover:text-blue-600 transition-colors cursor-pointer">
            <NavLink
              to="/countries"
              className={({ isActive }) => styleLink(isActive)}
            >
              Countries
            </NavLink>
          </li>
        </ul>

        {/* Right side: theme toggle + hamburger */}
        <div className="sm:hidden">
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            {open ? (
              <FaXmark className="text-lg" />
            ) : (
              <FaBars className="text-lg" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden bg-white shadow-md transition-all duration-300 ${
          open ? "max-h-60 border-t border-gray-200" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col w-[95%] mx-auto py-2 font-medium">
          <li
            className="py-3 hover:text-blue-600 transition-colors cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <NavLink to="/">Home</NavLink>
          </li>
          <li
            className="py-3 hover:text-blue-600 transition-colors cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <NavLink to="/about">About</NavLink>
          </li>
          <li
            className="py-3 hover:text-blue-600 transition-colors cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <NavLink to="/countries">Countries</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};
