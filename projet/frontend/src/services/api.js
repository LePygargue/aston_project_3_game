// frontend/src/services/api.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // Mettez l'URL de votre backend ici
});

export default api;
