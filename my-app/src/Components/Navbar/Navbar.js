import { NavLink } from "react-router-dom";

import "./Navbar.css";
export function Navbar() {
  return (
    <>
      <nav className="sticky nav top-0 inset-x-0 w-full flex flex-row items-center gap-6 bg-white text-blue-700 text-lg md:text-md font-medium p-4 m-0 h-16 z-30">
        <header className="logo inline">
          <h1>VideoList</h1>
        </header>
        <ul className="list-none flex-row justify-evenly items-center text-md hidden md:flex">
          <li className="p-0">
            <NavLink to="/" className="p-2">
              Home
            </NavLink>
          </li>
          <li className="p-0">
            <NavLink to="/explore" className="p-2">
              Explore
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
