import { USER_LOGIN } from '../constants/actionConstants';
import initialState from '../store/initialState';
import { decodeJsx } from '../utils/utilities';

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN:
            if (action.payload.data && action.payload.data) {
                let token = action.payload.data.token;
                return Object.assign({}, state, {
                    jwtToken: token,
                    userData: decodeJsx(token),
                });
            }
            else {
                return state;
            }
        default: return state;
    }
};

export default rootReducer;