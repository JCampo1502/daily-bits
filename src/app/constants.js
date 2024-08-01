import axios from "axios";

const baseUrl = "http://localhost:8000";

export const userAxiosInstance = axios.create({
    baseURL: `${baseUrl}/user`
})