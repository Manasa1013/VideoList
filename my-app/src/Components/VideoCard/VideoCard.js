import { Link } from "react-router-dom";

import { useData } from "../../Contexts/DataContext";
import {
  getTrimmed,
  ADD_TO_WATCHLATER,
  REMOVE_FROM_WATCHLATER,
  addWatchLaterIcon,
  removeWatchLaterIcon,
} from "../../utils";

export function VideoCard({ video }) {
  const {
    state: { categories, watchLater },
    dispatch,
  } = useData();

  const isExistingInWatchLater = (id) =>
    watchLater?.find((watchLaterVideo) => watchLaterVideo._id === id);
  const getCategoryImage = categories?.find(
    (category) => category.category === video?.category
  )?.thumbnail;
  return (
    <>
      <div className="p-4 flex flex-col gap-1 relative">
        <div className="absolute top-4 right-4 p-2 text-blue-400 bg-gray-50 rounded-bl-2xl">
          <button
            className="p-0 m-0 border-none outline-none"
            onClick={() => {
              if (isExistingInWatchLater(video?._id))
                dispatch({ type: REMOVE_FROM_WATCHLATER, payload: video });
              else dispatch({ type: ADD_TO_WATCHLATER, payload: video });
            }}
          >
            {isExistingInWatchLater(video?._id)
              ? removeWatchLaterIcon
              : addWatchLaterIcon}
          </button>
        </div>
        <Link to={`/videos/${video?._id}`} className="">
          <div className="flex flex-col  rounded-md border-gray-100 aspect-square w-56 h-44 max-w-full max-h-full ">
            {/* <iframe
              width="250"
              height="200"
              src={video?.src}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={video?.title}
            /> */}

            <img
              src={video?.thumbnail}
              alt={video?.title}
              className="w-full h-full rounded-sm"
            />
          </div>
        </Link>
        <div className="flex flex-row gap-2">
          <div className="flex flex-row p-1 m-1 pr-0 aspect-square justify-start">
            <img
              src={getCategoryImage}
              className="rounded-full bg-blue-400 w-10 h-10"
              alt={video ? video?.creator : "Creator"}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <Link to={`/${video?._id}`} className="">
              <h4 className="text-sm leading-4 text-left font-medium text-blue-900 break-word w-40 h-auto max-w-full">
                {getTrimmed(video?.title, 6)}
              </h4>
            </Link>
            <p className="leading-1 text-sm font-small">
              <span className="px-2">{video?.views}</span> {" | "}
              <span className="px-2">{video?.creator}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
