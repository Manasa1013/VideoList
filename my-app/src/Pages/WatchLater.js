import { LeftSideMenu, Navbar } from "../Components";
import { useData } from "../Contexts/DataContext";
import { VideoList } from "../Components";
export function WatchLater() {
  const {
    state: { watchLater },
  } = useData();
  return (
    <>
      <div className="grid-container">
        <Navbar />
        <aside className="aside-left">
          <LeftSideMenu />
        </aside>
        <main className="main">
          <h1 className="text-2xl font-bold text-blue-700">Watch Later</h1>
          <div className="md:ml-8">
            <VideoList
              videos={watchLater}
              noVideosText={"No videos added to Watch Later"}
            />
          </div>
        </main>
      </div>
    </>
  );
}
