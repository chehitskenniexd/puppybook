import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { puppyReducer } from './reducer'
import createLogger from 'redux-logger';

export default createStore(
  puppyReducer,
  applyMiddleware(createLogger(), thunkMiddleware)
);
