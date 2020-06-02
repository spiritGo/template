import axios from "axios";
import { BASE_URL } from '../utils/config';

const TIMEOUT = 30000;
const request = axios.create({
    baseURL: process.env.NODE_ENV == 'development' ? '/api/' : BASE_URL,
    timeout: TIMEOUT
});

request.interceptors.request.use(
    config => {
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

request.interceptors.response.use(
    res => {
        return res;
    },
    err => {
        return Promise.reject(err);
    }
);

export default request;
