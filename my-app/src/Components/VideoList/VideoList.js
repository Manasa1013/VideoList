import { VideoCard } from "../VideoCard/VideoCard";
import "./VideoList.css";
export function VideoList({ videos, noVideosText }) {
  return (
    <>
      <ul className="list-none p-0 m-0 video-container">
        {videos?.length === 0 ? (
          <p>{noVideosText}</p>
        ) : (
          videos?.map((video) => (
            <li className="" key={video?._id}>
              <VideoCard video={video} />
            </li>
          ))
        )}
      </ul>
    </>
  );
}
