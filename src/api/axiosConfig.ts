import axios from 'axios';

const myKittenAxios = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000,
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
