import axios from "axios";

const DOMAIN = "localhost";
const API_BASE_URL = `http://${DOMAIN}/api`;

const api = axios.create({
  baseURL: `${API_BASE_URL}`,
  timeout: 10000,
  params: {},
});

export default api;
