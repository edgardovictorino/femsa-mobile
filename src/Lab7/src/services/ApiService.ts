import axios from 'axios';
import { getCredentials } from '../storage';

const getJWT = async () => {
  const token = await getCredentials();
  return token;
};

const api = axios.create({
  baseURL: 'https://example.com/api',
});

api.interceptors.request.use(
  async (config) => {
    const token = await getJWT();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
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
