import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { rootReducer } from './reducer'
import createLogger from 'redux-logger';

export default createStore(
  rootReducer,
  applyMiddleware(createLogger(), thunkMiddleware)
);
