import axios from "axios";

const axiosAPI = axios.create({
  baseURL: "http://localhost:4000/",
});

export default axiosAPI;
