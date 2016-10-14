import { combineReducers } from 'redux';
import { RECEIVE_PUPPIES, receivePuppies } from './action-creators'

const initialState = {
  allPuppies: []
}

export function puppyReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_PUPPIES: {
      return Object.assign({},
        state, { allPuppies: action.receivedPuppies });
    }
    default: return state;
  }
}


// implementing combineReducers
// function combineReducers(object){
//   const nextState = {};
//   // object {foo: function (prevState, action) { return 1 }}
//   return function rootReducer(prevState, action){
//     for (var key in object){
//       nextState[key] = object[key](previousState, action)
//     }
//     return nextState;
//   }
// }
