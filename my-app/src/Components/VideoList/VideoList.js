import { useData } from "../../Contexts/DataContext";
import { VideoCard } from "../VideoCard/VideoCard";
import "./VideoList.css";
export function VideoList() {
  const {
    state: { filteredVideos },
  } = useData();
  return (
    <>
      <section className="">
        <ul className="list-none p-0 m-0 video-container">
          {filteredVideos?.map((video) => (
            <li className="" key={video?.id}>
              <VideoCard video={video} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
