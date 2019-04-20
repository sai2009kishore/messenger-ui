import jwt_decode from 'jwt-decode';

const jwtToken = 'jwt-token';
export function decodeJsx(token) {
    return jwt_decode(token);
}

export function getJwtToken() {
    return localStorage.getItem(jwtToken);
}

export function setJwtToken(token) {
    localStorage.setItem(jwtToken, token);
}

export function clearJwtToken() {
    localStorage.removeItem(jwtToken);
}