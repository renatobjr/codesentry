import axios from "axios";

const BASE_URL = process.env.VITE_API;

export const post = async (url, data) => {
  const response = await axios.post(`${BASE_URL}/${url}`, data);
  return response.data;
}

export const put = async (url, data) => {
  const response = await axios.put(`${BASE_URL}/${url}`, data);
  return response.data;
}

export const get = async (url, params) => {
  console.log(`${BASE_URL}/${url}`)
  const response = await axios.get(`${BASE_URL}/${url}`, { params });
  return response.data;
}

export default { post, get, put }