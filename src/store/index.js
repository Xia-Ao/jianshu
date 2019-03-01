import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer';
import reduxThunk from 'redux-thunk';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(reduxThunk),
  // other store enhancers if any
);
const store = createStore(reducer, enhancer);


export default store;