import axios from "axios";

const API = axios.create({
  baseURL:
    import.meta.env.VITE_BACKEND_URL ||
    "https://faraham-backend.onrender.com/",
});

export const getProfileImage = () =>
  API.get("/api/upload/profile");

export const uploadProfileImage = (formData) =>
  API.post(
    "/api/upload",
    formData,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  );

export default API;