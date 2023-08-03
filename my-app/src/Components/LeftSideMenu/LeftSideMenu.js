import { NavLink } from "react-router-dom";

import {
  getActiveClassName,
  homeIcon,
  exploreIcon,
  playlistIcon,
  watchLaterIcon,
} from "../../utils.js";
export function LeftSideMenu() {
  return (
    <>
      <div className="bg-blue-100 md:p-4  md:mt-16 w-full md:w-auto fixed  left-0 md:top-0 bottom-0 p-0 flex md:flex-col flex-row justify-start items-center md:py-4 md:z-10 z-20">
        <ul className="flex md:flex-col flex-row font-normal md:text-md text-lg items-center justify-between w-full h-16 md:h-auto">
          <li className="md:my-6 md:mx-4">
            <LinksToRoutes route={""} icon={homeIcon} text={"Home"} />
          </li>
          <li className="md:my-6 md:mx-4">
            <LinksToRoutes
              route={"explore"}
              icon={exploreIcon}
              text={"Explore"}
            />
          </li>
          <li className="md:my-6 md:mx-4">
            <LinksToRoutes
              route={"playlists"}
              icon={playlistIcon}
              text={"Playlists"}
            />
          </li>
          <li className="md:my-6 md:mx-4">
            <LinksToRoutes
              route={"watchlater"}
              icon={watchLaterIcon}
              text={"WatchLater"}
            />
          </li>
        </ul>
      </div>
    </>
  );
}

export function LinksToRoutes({ route, text, icon }) {
  return (
    <NavLink
      to={`/${route}`}
      className={({ isActive, isPending }) =>
        getActiveClassName(isActive, isPending)
      }
    >
      {icon}
      <span className="hidden md:inline p-4">{text}</span>
    </NavLink>
  );
}
