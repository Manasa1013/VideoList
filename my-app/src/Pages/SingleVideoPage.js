import { Link, useParams } from "react-router-dom";
import { LeftSideMenu, Navbar, SingleVideoCard } from "../Components";
import { useData } from "../Contexts/DataContext";
export function SingleVideoPage() {
  const { videoId } = useParams();
  const {
    state: { videos },
  } = useData();
  const videoToBeShown = videos?.find(
    (video) => video?._id === Number(videoId)
  );
  return (
    <>
      <div className="grid-container">
        <Navbar />
        <aside className="aside-left">
          <LeftSideMenu />
        </aside>
        <main className="main single-video-container">
          <div className="large-video-container w-full z-10 sticky md:static top-12">
            <SingleVideoCard video={videoToBeShown} />
          </div>
          <ul className="more-videos list-none p-0 m-0">
            {videos?.map((video) => (
              <li
                key={video?._id}
                className="flex flex-col justify-evenly items-center gap-2 p-2"
              >
                <Link to={`/${video?._id}`} className="">
                  <div className="flex flex-col  rounded-md border-gray-100 aspect-square w-48 h-32 max-w-full max-h-full ">
                    <img
                      src={video?.thumbnail}
                      alt={video?.title}
                      className="w-full h-full rounded-sm"
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </main>
        {/* <aside className="aside-right"></aside> */}
      </div>
    </>
  );
}
