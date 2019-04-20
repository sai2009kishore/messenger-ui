import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { routerMiddleware } from 'react-router-redux';
import { createHashHistory } from 'history';
import rootReducer from '../reducers/rootReducer';

export const history = createHashHistory();

const middleware = getMiddleware(process.env.NODE_ENV);

function getMiddleware(env) {
  let mw = [];
  switch(env) {
    case 'production': mw = [
      thunk,
      promise,
      routerMiddleware(history)
      ]; 
    break;
    default: mw = [
      thunk,
      promise,
      routerMiddleware(history),
    ];
  }
  return mw;
}

export default function configureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );
}
