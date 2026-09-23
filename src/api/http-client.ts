import axios from 'axios';

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

httpClient.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token')
    if (token && config.url !== '/auth/login') {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }
);

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    switch (error.response?.status) {
      case 401:
        console.error("Identifiants incorrects")
        break;
      case 403:
        console.error("Action interdite")
        break;
    }
    return Promise.reject(error);
  }
)
