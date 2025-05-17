// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-node-0kfj.onrender.com/api'
});

// 🔄 Interceptor de solicitud
api.interceptors.request.use(
  (config) => {
    // Ejemplo: activar loader global
    // store.commit('setLoading', true);
    return config;
  },
  (error) => Promise.reject(error)
);

// 🚨 Interceptor de respuesta
api.interceptors.response.use(
  (response) => {
    // Ejemplo: desactivar loader global
    // store.commit('setLoading', false);
    return response;
  },
  (error) => {
    console.error('❌ Error de API:', error.response?.data || error.message);
    alert(error.response?.data?.error || 'Ocurrió un error inesperado.');
    // store.commit('setLoading', false);
    return Promise.reject(error);
  }
);

export default api;
