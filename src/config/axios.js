import axios from 'axios';
import { API_URL } from './config';

const axiosInstance = axios.create({
    baseURL: API_URL
});

// Debug log
console.log('Axios instance baseURL:', axiosInstance.defaults.baseURL);

export default axiosInstance; 