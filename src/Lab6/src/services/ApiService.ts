import axios, { AxiosRequestHeaders } from 'axios';
import { getCredentials } from '../storage';

const api = axios.create({
  baseURL: 'https://example.com/api',
});

api.interceptors.request.use(
  async (config) => {
    const token = await getCredentials();
    if (token) {
      config.headers = {
        ...(config.headers as AxiosRequestHeaders),
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }

    if (!config.url?.startsWith('https://')) {
      throw new Error('Only HTTPS requests are allowed.');
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
