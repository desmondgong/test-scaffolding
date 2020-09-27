import { createStore, applyMiddleware, compose, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const storeFactory = (): Store =>
  createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default storeFactory;
