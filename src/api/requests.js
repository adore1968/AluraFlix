import axios from "./axios";

export const getDestacadosRequest = () => {
  return axios("/destacados");
};

export const getCategoriasRequest = () => {
  return axios("/categorias");
};

export const getVideosRequest = () => {
  return axios("/videos");
};

export const getVideoRequest = (id) => {
  return axios(`/videos/${id}`);
};

export const createVideoRequest = (values) => {
  return axios.post("/videos", values);
};

export const deleteVideoRequest = (id) => {
  return axios.delete(`/videos/${id}`);
};

export const updateVideoRequest = (id, values) => {
  return axios.put(`/videos/${id}`, values);
};
