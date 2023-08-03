import { useState } from "react";
import { LeftSideMenu, Navbar, AddPlaylistModal } from "../Components";
import { closeIcon, plusIcon, REMOVE_PLAYLIST } from "../utils";
import { useData } from "../Contexts/DataContext";

export function Playlists() {
  const [openPlaylistModal, setOpenPlaylistModal] = useState(false);
  const {
    state: { playlists },
  } = useData();
  return (
    <>
      <div className="two-column-container">
        <Navbar />
        <aside className="aside-left">
          <LeftSideMenu />
        </aside>
        <main className="main flex flex-col gap-2">
          <h1 className="text-xl text-blue-800 font-bold">My Playlists</h1>
          <PlaylistsContainer playlists={playlists} />
          <PlusIconContainer setOpenPlaylistModal={setOpenPlaylistModal} />
          {openPlaylistModal && (
            <AddPlaylistModal setOpenPlaylistModal={setOpenPlaylistModal} />
          )}
        </main>
      </div>
    </>
  );
}

export function PlusIconContainer({ setOpenPlaylistModal }) {
  return (
    <div className="w-56 h-48 rounded-md border-transparent flex flex-row items-center justify-center">
      <button
        className="p=0 m-0 border-none"
        onClick={() => {
          setOpenPlaylistModal((prev) => !prev);
        }}
      >
        {plusIcon}
      </button>
    </div>
  );
}

export function PlaylistsContainer({ playlists }) {
  const { dispatch } = useData();
  return (
    <ul className="list-none flex flex-col  justify-center gap-2">
      {playlists?.map((playlist) => (
        <>
          <button
            className="flex inline justify-end p-0 m-0 border-none"
            onClick={() => {
              dispatch({ type: REMOVE_PLAYLIST, payload: playlist });
            }}
          >
            {closeIcon}
          </button>

          <li
            className="w-56 h-48 bg-blue-200/50 rounded-md flex flex-col items-center justify-center"
            key={playlist.name}
          >
            {playlist?.name}
          </li>
        </>
      ))}
    </ul>
  );
}
