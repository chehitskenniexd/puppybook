import {combineReducers} from 'redux';

const initialAllPuppies = [
  { id: 1, name: 'Cody' },
  { id: 2, name: 'Ben' },
  { id: 3, name: 'Bubba' }
];

const initialState = {
  allPuppies: initialAllPuppies
}

export function puppyReducer (state = initialState, action) {
  switch (action.type) {
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
