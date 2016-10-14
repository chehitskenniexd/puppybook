import { createStore, applyMiddleware } from 'redux';
import { thunkMiddleware } from 'redux-thunk';
import { puppyReducer } from './reducer'
import createLogger from 'redux-logger';

export const store = createStore(
  puppyReducer,
  applyMiddleware(createLogger(), thunkMiddleware)
);
