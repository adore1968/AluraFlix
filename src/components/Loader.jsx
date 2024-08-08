import { FaSpinner } from "react-icons/fa";

function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <FaSpinner className="animate-spin text-sky-600 text-5xl" />
    </div>
  );
}

export default Loader;
