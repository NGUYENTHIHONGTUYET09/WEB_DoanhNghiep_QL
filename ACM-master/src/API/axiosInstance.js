import axios from 'axios';
import { BASEURL } from '../../BaseUrl';  

const axiosInstance = axios.create({
  baseURL: BASEURL,
  timeout: 1000000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  config => {
    const token = sessionStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
