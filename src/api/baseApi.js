import axios from "axios";

export const baseApi = axios.create({
    baseURL: "http://localhost:3600/api"
})