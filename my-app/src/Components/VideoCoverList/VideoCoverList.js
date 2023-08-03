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
            <VideoCoverCard videocover={category} />
          </li>
        ))}
      </div>
    </>
  );
}

export function VideoCoverCard({ videocover }) {
  return (
    <div>
      <Link to={`/explore/${videocover?.category}`}>
        <div className="flex flex-column p-4 rounded-md border-gray-100 aspect-square w-56 h-48">
          <img
            src={videocover?.thumbnail}
            className="object-cover"
            alt={videocover ? videocover?.category : "Category"}
          />
        </div>
      </Link>
      {videocover?.category && (
        <h4 className="text-md font-semibold text-blue-900">
          {videocover?.category}
        </h4>
      )}
    </div>
  );
}
