import axios from "axios";

const BASE_URL = "";
const TIMEOUT = 30000;

const request = axios.create({
    baseURL: BASE_URL,
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
