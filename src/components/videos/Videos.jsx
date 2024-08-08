/* eslint-disable react/prop-types */
import { useApp } from "../../context/AppContext";
import Video from "./Video";

function Videos({ titulo }) {
  const { filtrarVideos } = useApp();
  const videosFiltrados = filtrarVideos(titulo);

  return (
    <div className="sm:grid-cols-2 md:grid-cols-3 grid grid-cols-1 gap-5">
      {videosFiltrados.map((video) => (
        <Video video={video} key={video.id} />
      ))}
    </div>
  );
}

export default Videos;
