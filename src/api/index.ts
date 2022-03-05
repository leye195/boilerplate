import axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
} from 'axios';
import { sessionStore } from 'libs/utils';

const BASE_URL = '';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = sessionStore().getItem('AUTH_TOKEN');

  if (token) {
    (config.headers as AxiosRequestHeaders) = { token };
  }
  return config;
});

api.interceptors.response.use((response) => {
  return response;
});

export default api;
