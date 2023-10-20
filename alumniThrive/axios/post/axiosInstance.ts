import axios from 'axios';
import {storage} from '../../mmkv';
const axiosInstance = axios.create({
  baseURL: 'https://api.alumnithrive.com', // Replace with your API base URL
});

// Request interceptor
axiosInstance.interceptors.request.use(
  config => {
    // Modify the request config here (e.g., add headers, authentication tokens)
    const accessToken = 'sdds';

    // ** If token is present add it to request's Authorization Header
    if (accessToken) {
      if (config.headers) config.headers.token = accessToken;
    }
    return config;
  },
  error => {
    // Handle request errors here

    return Promise.reject(error);
  },
);

// Response interceptor
axiosInstance.interceptors.response.use(
  response => {
    // Modify the response data here (e.g., parse, transform)

    return response;
  },
  error => {
    // Handle response errors here

    console.log(error, 'sdds');
    return Promise.reject(error);
  },
);

export default axiosInstance;
