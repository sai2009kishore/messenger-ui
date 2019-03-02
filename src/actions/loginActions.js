import axios from './axios';

export const serverStatus = (callback) => {
    axios.get('')
        .then(res => {
            if (res.data) {
                callback(res.data);
            }
        })
        .catch(error => {
            console.log(error);
        });
}

export const login = (data, callback, errorCallback) => {
    axios.post('/login', data)
        .then(res => {
            callback(res);
        })
        .catch(error => {
            errorCallback(error);
        });
}