import axios from "axios";

export const baseApi = axios.create({
    baseURL: "http://localhost:3600/api"
});

baseApi.interceptors.request.use( config => {
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }
    return config;
})