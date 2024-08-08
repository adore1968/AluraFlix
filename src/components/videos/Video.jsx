import { Link } from "react-router-dom";
import { useApp } from "../../context/AppContext";

/* eslint-disable react/prop-types */
function Video({ video }) {
  const { color, url, titulo, id } = video;
  const { deleteVideo } = useApp();

  return (
    <div style={{ boxShadow: `2px 2px 2px 1px rgb(${color})` }}>
      <iframe src={url} title={titulo} className="w-full"></iframe>
      <div className="flex justify-between gap-5 p-6">
        <button
          type="button"
          onClick={() => deleteVideo(id)}
          className="hover:bg-red-600 focus:outline-none focus:shadow-outline px-4 py-2 text-lg font-bold text-white transition-colors bg-red-500 rounded"
        >
          Delete
        </button>
        <Link
          to={`/actualizar-video/${id}`}
          className="hover:bg-green-600 focus:outline-none focus:shadow-outline px-4 py-2 text-lg font-bold text-white transition-colors bg-green-500 rounded"
        >
          Edit
        </Link>
      </div>
    </div>
  );
}

export default Video;
