import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Standardize error handling here
    const message = error.response?.data?.message || error.message || "An unexpected error occurred";
    return Promise.reject({ ...error, message });
  }
);

export default apiClient;
