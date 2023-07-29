import { Link } from "react-router-dom";

import { useData } from "../../Contexts/DataContext";
import "./VideoCoverList.css";
export function VideoCoverList() {
  const { state } = useData();
  return (
    <>
      <div className="list-none p-0 m-0 video-cover-container">
        {state?.categories?.map((category) => (
          <li className="p-4" key={category?._id}>
            {category?.category}
            <VideoCoverCard videocover={category} />
          </li>
        ))}
      </div>
    </>
  );
}

export function VideoCoverCard(videocover) {
  return (
    <Link to={`/${videocover?._id}`}>
      <div className="flex flex-column p-4 rounded-md border-gray-100">
        <div className="w-200 h-200">
          <iframe
            width="200"
            height="100"
            src={videocover?.src}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
        <div className="flex flex-row p-1 m-1 pr-0 aspect-square">
          <Link to={videocover?.src}>
            <img
              src={videocover?.thumbnail}
              className="rounded-full bg-teal-400 w-10 h-10"
              alt={videocover ? videocover?.category : "Category"}
            />
          </Link>
        </div>
      </div>
    </Link>
  );
}
