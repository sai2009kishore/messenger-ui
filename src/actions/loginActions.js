import axios from './axios';
import { USER_LOGIN } from '../constants/actionConstants';

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

export function userLogin(data) {
    return {
        type: USER_LOGIN,
        payload: axios.post('/login', data),
    };
}

export function userLogout() {

}