import { NavLink } from "react-router-dom";

import { getActiveClassName } from "../../utils.js";
export function LeftSideMenu() {
  return (
    <>
      <div className="bg-blue-50 md:p-4 md:mr-12 md:mt-16 w-full md:w-auto fixed  left-0 md:top-0 bottom-0 p-0 flex md:flex-col flex-row justify-start items-center md:py-4 ">
        <ul className="flex md:flex-col flex-row font-normal md:text-md text-lg items-start justify-between w-full h-12 md:h-auto">
          <li className="md:my-6 md:mx-4">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                getActiveClassName(isActive, isPending)
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 inline"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <span className="hidden md:inline p-4">Home</span>
            </NavLink>
          </li>
          <li className="md:my-6 md:mx-4">
            <NavLink
              to="/explore"
              className={({ isActive, isPending }) =>
                getActiveClassName(isActive, isPending)
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 inline "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <span className="hidden md:inline p-4">Explore</span>
            </NavLink>
          </li>
          <li className="md:my-6 md:mx-4">
            <NavLink
              to="/playlists"
              className={({ isActive, isPending }) =>
                getActiveClassName(isActive, isPending)
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 inline"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                />
              </svg>
              <span className="hidden md:inline p-4">Playlists</span>
            </NavLink>
          </li>
          <li className="md:my-6 md:mx-4">
            <NavLink
              to="/watchlater"
              className={({ isActive, isPending }) =>
                getActiveClassName(isActive, isPending)
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 inline"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="hidden md:inline p-4">WatchLater</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
