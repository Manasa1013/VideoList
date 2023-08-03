import { useParams } from "react-router";
import { LeftSideMenu, Navbar, VideoList, SearchBar } from "../Components";
import { useData } from "../Contexts/DataContext";
import { SET_CATEGORY, SET_VIDEOS } from "../utils";
import { useEffect } from "react";
export function Explore() {
  const { category } = useParams();
  const {
    dispatch,
    state: { filteredVideos },
  } = useData();
  useEffect(() => {
    if (category) dispatch({ type: SET_CATEGORY, payload: category });
    else dispatch({ type: SET_VIDEOS });
  }, [category, dispatch]);
  return (
    <>
      <div className="two-column-container">
        <Navbar />
        <aside className="aside-left">
          <LeftSideMenu />
        </aside>
        <main className="main flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-blue-700">Explore</h1>

          <div className="md:ml-8">{!category && <SearchBar />}</div>

          <div className="md:ml-8">
            <VideoList
              videos={filteredVideos}
              noVideosText={"Try changing the keywords to show videos"}
            />
          </div>
        </main>
      </div>
    </>
  );
}
