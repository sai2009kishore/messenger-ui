import axios from 'axios';

const baseUrl = process.env.REACT_APP_MESSENGER_BACKEND_URL;

export const login = (data, callback) => {
    axios.get(baseUrl)
        .then(res => {
            if (res.data) {
                callback(res.data);
            }
        })
        .catch(error => {
            console.log(error);
        });
}
