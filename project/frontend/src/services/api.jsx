// frontend/src/services/api.js

import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3500",
});

export const axiosPrivate = axios.create({
    baseURL: "http://localhost:3500",
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
});

export default api;
