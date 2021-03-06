import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const storeFactory = () => createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default storeFactory;
