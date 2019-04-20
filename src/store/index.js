import createStore from './configureStore';
import initialState from './initialState';

let state = initialState;

const store = createStore(state);

export default store;