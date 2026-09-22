import axios from 'axios';

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

httpClient.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log(`Request: ${config.method.toUpperCase()} ${config.url}`);
    return config;
  }
);

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    switch (error.status) {
      case 401:
        console.log("Identifiants incorrects")
        break;
      case 403:
        console.log("Action interdite")
        break;
      default:
        console.log("Erreur lors de l'authentification")
    }
  }
)
