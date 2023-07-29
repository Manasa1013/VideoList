import { Link } from "react-router-dom";
import { useData } from "../../Contexts/DataContext";

export function VideoCard({ video }) {
  const {
    state: { categories },
  } = useData();
  const getCategoryImage = categories?.find(
    (category) => category.category === video?.category
  )?.thumbnail;
  return (
    <>
      <div className="relative p-4 flex flex-col gap-1 ">
        <Link to={`/${video?._id}`} className="">
          <div className="flex flex-col rounded-md border-gray-100 aspect-video w-56 h-48 max-w-full max-h-full ">
            <iframe
              width="250"
              height="200"
              src={video?.src}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={video?.title}
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
                {video?.title}
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
