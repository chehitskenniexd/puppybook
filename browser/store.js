import { createStore, applyMiddleware } from 'redux';
import { puppyReducer } from './reducer'
import createLogger from 'redux-logger';

export const store = createStore(puppyReducer, applyMiddleware(createLogger()));