/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import {
  createVideoRequest,
  deleteVideoRequest,
  getCategoriasRequest,
  getDestacadosRequest,
  getVideoRequest,
  getVideosRequest,
  updateVideoRequest,
} from "../api/requests";
import { useNavigate } from "react-router-dom";

function AppProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [destacados, setDestacados] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  const getDestacados = async () => {
    try {
      const { status, data } = await getDestacadosRequest();
      if (status === 200) setDestacados(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategorias = async () => {
    try {
      const { status, data } = await getCategoriasRequest();
      if (status === 200) setCategorias(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getVideos = async () => {
    try {
      const { status, data } = await getVideosRequest();
      if (status === 200) setVideos(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDatos = async () => {
    await getDestacados();
    await getCategorias();
    await getVideos();
    setIsLoading(false);
  };

  useEffect(() => {
    getDatos();
  }, []);

  const filtrarVideos = (categoria) => {
    return videos.filter((v) => v.categoria === categoria);
  };

  const createVideo = async (values) => {
    try {
      const { status, data } = await createVideoRequest(values);
      if (status === 201) {
        setVideos([...videos, data]);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getVideo = async (id) => {
    try {
      const { status, data } = await getVideoRequest(id);
      if (status === 200) return data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateVideo = async (id, values) => {
    try {
      const { status, data } = await updateVideoRequest(id, values);
      if (status === 200) {
        setVideos(videos.map((v) => (v.id === id ? data : v)));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteVideo = async (id) => {
    try {
      const { status } = await deleteVideoRequest(id);
      if (status === 200) {
        setVideos(videos.filter((v) => v.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        destacados,
        categorias,
        videos,
        filtrarVideos,
        createVideo,
        deleteVideo,
        getVideo,
        updateVideo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
