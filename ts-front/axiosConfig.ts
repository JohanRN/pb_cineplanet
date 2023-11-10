import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer pk_test_LsRb12fdsvdew21'
    },
});
export default axiosInstance;
