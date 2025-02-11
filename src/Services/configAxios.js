import axios from 'axios';


const api = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.response.use(
    (response) => response,  (error) => {
        if (error.response.status === 401) {
          // Token expirado ou inválido
          console.error('Unauthorized, logging out...');
          localStorage.removeItem('token');
          window.location.href = '/login'; // Redireciona para a página de login
        }
        return Promise.reject(error);
      }
);

export default api;