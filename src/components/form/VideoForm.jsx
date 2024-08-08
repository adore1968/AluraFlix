import { useFormik } from "formik";
import { useApp } from "../../context/AppContext";
import * as Yup from "yup";
import ErrorForm from "./ErrorForm";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../Loader";

const videoInitialState = {
  titulo: "",
  categoria: "",
  imagen: "",
  url: "",
  descripcion: "",
};

const videoSchema = Yup.object({
  titulo: Yup.string().required("Required"),
  categoria: Yup.string().required("Required"),
  url: Yup.string().url().required("Required"),
});
function VideoForm() {
  const { createVideo, getVideo, updateVideo } = useApp();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [video, setVideo] = useState(videoInitialState);

  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: video,
    enableReinitialize: true,
    validationSchema: videoSchema,
    onSubmit: async (values) => {
      if (id) {
        await updateVideo(id, values);
      } else {
        await createVideo(values);
      }
    },
  });

  const loadVideo = async () => {
    if (id) {
      const data = await getVideo(id);
      setVideo(data);
    }
  };

  useEffect(() => {
    loadVideo();
    setIsLoading(false);
    setVideo(videoInitialState);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-6 border rounded shadow-md">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label htmlFor="titulo" className="block mb-2 text-xl font-bold">
              Titulo
            </label>
            <input
              type="text"
              name="titulo"
              id="titulo"
              onChange={handleChange}
              value={values.titulo}
              placeholder="Ingrese el titulo..."
              className="focus:outline-none focus:shadow-outline w-full px-3 py-2 text-lg border rounded shadow"
            />
            {touched.titulo && errors.titulo && (
              <ErrorForm error={errors.titulo} />
            )}
          </div>

          <div>
            <label htmlFor="categoria" className="block mb-2 text-xl font-bold">
              Categoria
            </label>
            <select
              name="categoria"
              id="categoria"
              onChange={handleChange}
              value={values.categoria}
              className="focus:outline-none focus:shadow-outline w-full px-3 py-2 text-lg border rounded shadow"
            >
              <option value="">Seleccione la categoria</option>
              <option value="FrontEnd">FrontEnd</option>
              <option value="BackEnd">BackEnd</option>
              <option value="Innovacion y Gestion">Innovacion y Gestion</option>
            </select>
            {touched.categoria && errors.categoria && (
              <ErrorForm error={errors.categoria} />
            )}
          </div>

          <div>
            <label htmlFor="imagen" className="block mb-2 text-xl font-bold">
              Imagen
            </label>
            <input
              type="url"
              name="imagen"
              id="imagen"
              onChange={handleChange}
              value={values.imagen}
              placeholder="Ingrese el enlace de la imagen..."
              className="focus:outline-none focus:shadow-outline w-full px-3 py-2 text-lg border rounded shadow"
            />
            {touched.imagen && errors.imagen && (
              <ErrorForm error={errors.imagen} />
            )}
          </div>

          <div>
            <label htmlFor="url" className="block mb-2 text-xl font-bold">
              Video
            </label>
            <input
              type="url"
              name="url"
              id="url"
              onChange={handleChange}
              value={values.url}
              placeholder="Ingrese el enlace del video..."
              className="focus:outline-none focus:shadow-outline w-full px-3 py-2 text-lg border rounded shadow"
            />
            {touched.url && errors.url && <ErrorForm error={errors.url} />}
          </div>

          <div>
            <label
              htmlFor="descripcion"
              className="block mb-2 text-xl font-bold"
            >
              Descripcion
            </label>
            <textarea
              name="descripcion"
              id="descripcion"
              onChange={handleChange}
              value={values.descripcion}
              placeholder="Ingrese la descripcion..."
              className="focus:outline-none focus:shadow-outline w-full px-3 py-2 text-lg border rounded shadow resize-none"
            ></textarea>
            {touched.descripcion && errors.descripcion && (
              <ErrorForm error={errors.descripcion} />
            )}
          </div>

          <button
            type="submit"
            className={`focus:outline-none focus:shadow-outline px-4 py-2 text-xl font-bold text-white transition-colors rounded ${
              id
                ? "bg-green-500 hover:bg-green-600"
                : "bg-sky-500 hover:bg-blue-600"
            }`}
          >
            {id ? "Actualizar" : "Crear"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default VideoForm;
