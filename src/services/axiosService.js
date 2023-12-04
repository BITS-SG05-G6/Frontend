import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api/',
  timeout: 1000,
  headers: {
    Accept: 'application/json',
  }
})

axiosInstance.interceptors.request.use(function(config) {
  config.headers.authorization = Cookies.get('token');
  return config;
})

