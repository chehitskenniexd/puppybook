import { combineReducers } from 'redux';
import { RECEIVE_PUPPIES, receivePuppies, SELECT_PUPPY } from './action-creators'


const initialState = {
  allPuppies: [],
  singlePuppy: {}
}

function allPuppiesReducer(state = [], action) {
  switch (action.type) {
    case RECEIVE_PUPPIES: return action.receivedPuppies;
    default: return state;
  }
}

function singlePuppyReducer(state = {}, action) {
  switch (action.type) {
    case SELECT_PUPPY: return action.selectedPuppy;
    default: return state;
  }
}

export const rootReducer = combineReducers({
  allPuppies: allPuppiesReducer,
  singlePuppy: singlePuppyReducer
})




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
