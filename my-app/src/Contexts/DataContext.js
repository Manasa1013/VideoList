import { createContext, useContext, useReducer } from "react";

import { videos, categories } from "../Data/data";
import { DataReducer } from "../Reducers/DataReducer";

export const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export const initialState = {
  categories: categories,
  videos: videos,
  playlists: [],
  watchLater: [],
  searchText: "",
  filteredVideos: [...videos],
};

export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(DataReducer, initialState);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}
