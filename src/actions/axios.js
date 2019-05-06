import axios from 'axios';
import { getJwtToken } from '../utils/utilities';

let axiosNew = axios.create({
    baseURL: process.env.REACT_APP_MESSENGER_BACKEND_URL
});

axiosNew.interceptors.request.use(function (config) {
    let token = getJwtToken();
    console.log(token);
    if (token) {
        config.headers.Authorization = token;
    }
    return config;
});

export default axiosNew;