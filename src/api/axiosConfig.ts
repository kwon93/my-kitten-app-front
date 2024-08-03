import axios, { AxiosInstance } from 'axios';

const myKittenAxios: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
  timeoutErrorMessage: '네트워크 상태가 좋지 않다냥...',
  headers: {
    'Content-Type': 'application/json',
  },
});


myKittenAxios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return error;
  },
);

myKittenAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default myKittenAxios;
