import axios from "axios";

const API = axios.create({
  baseURL: "https://backend-u8b4.onrender.com"
});

export default API;