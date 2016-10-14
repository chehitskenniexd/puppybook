'use strict'

export const RECEIVE_PUPPIES = 'RECEIVE_PUPPIES';

export const receivePuppies = function (puppies) {
    return {
        type: RECEIVE_PUPPIES,
        receivedPuppies: puppies
    };
};


// if thunk receives a function that returns a function, it treats it as an async callback
export const loadPuppiesFromServer = function (puppies){
  function dispatch {
    fetch('api/puppies')
      .then(
        res => res.json()
      )
      .then(
        puppies => dispatch(receivePuppies(puppies))
      )
      .catch(
        (err) => console.error(err))
  }
}
