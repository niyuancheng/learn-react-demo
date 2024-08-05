import axios from "axios";

const CancelToken = axios.CancelToken;
export const cancelSource = CancelToken.source();

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    cancelToken: cancelSource.token
})