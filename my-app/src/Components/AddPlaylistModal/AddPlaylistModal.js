import { useState } from "react";

import { ADD_PLAYLIST } from "../../utils";
import { useData } from "../../Contexts/DataContext";

export function AddPlaylistModal({ setOpenPlaylistModal }) {
  const [newPlaylist, setNewPlaylist] = useState({
    name: "",
    videos: [],
  });
  const { dispatch } = useData();
  return (
    <div className="modal-container fixed w-screen h-screen overflow-y-none inset-0 z-30 bg-gray-900/50 flex flex-col items-center justify-center">
      <div className="modal p-4 m-2 w-72 h-72 flex flex-col gap-2 bg-blue-50 rounded-lg">
        <div className="modal-header p-4">Add Playlist</div>
        <div className="modal-body">
          <input
            type="text"
            onChange={(e) => {
              setNewPlaylist((prev) => ({ ...prev, name: e.target.value }));
            }}
            placeholder="New Playlist"
            className="outline-blue-400 p-2 w-full rounded-md"
          />
        </div>
        <div className="modal-footer">
          <button
            className="py-3 px-2 m-1 rounded-md border-blue-600 text-white bg-blue-600/70 hover:bg-blue-600"
            onClick={() => {
              setOpenPlaylistModal((prev) => false);
              dispatch({ type: ADD_PLAYLIST, payload: newPlaylist });
            }}
          >
            Create New Playlist
          </button>
        </div>
      </div>
    </div>
  );
}
