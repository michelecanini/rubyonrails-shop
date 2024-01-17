import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 5000,
  headers: {
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('jwtToken');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    if (error.response && error.response.status === 401) {
      window.location.href = "/";
    }

    return Promise.reject(error);
  }
);

export { api };