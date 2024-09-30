import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.APP_URL,
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    const token = JSON.parse(sessionStorage.getItem('jwt_token'));
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response?.data) return Promise.reject(error.response?.data);
    else return error;
  }
);

export default instance;
