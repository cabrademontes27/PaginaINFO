import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-node-0kfj.onrender.com/api'
});

// 🔄 Interceptor de solicitud (antes de que salga)
api.interceptors.request.use(
  (config) => {
    // Aquí podrías activar un loader global
    // Ej: store.commit('setLoading', true);
    return config;
  },
  (error) => {
    // Error al preparar la solicitud
    return Promise.reject(error);
  }
);

// 🚨 Interceptor de respuesta
api.interceptors.response.use(
  (response) => {
    // Desactivar loader si lo tuvieras
    // Ej: store.commit('setLoading', false);
    return response;
  },
  (error) => {
    // También puedes mostrar un mensaje global
    console.error('❌ Error de API:', error.response?.data || error.message);

    // Puedes personalizar el mensaje
    alert(error.response?.data?.error || 'Ocurrió un error inesperado.');

    // Desactivar loader si lo tuvieras
    // Ej: store.commit('setLoading', false);

    return Promise.reject(error); // sigue el flujo de errores
  }
);

export default api;
