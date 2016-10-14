import { createStore, applyMiddleware } from 'redux';
import { puppyReducer } from './reducer'
import createLogger from 'redux-logger';

puppyReducer.allPuppies = [
  { id: 1, name: 'Cody' },
  { id: 2, name: 'Ben' },
  { id: 3, name: 'Bubba' }
];



export const store = createStore(puppyReducer, applyMiddleware(createLogger()));
