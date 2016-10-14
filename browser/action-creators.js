'use strict'

export const RECEIVE_PUPPIES = 'RECEIVE_PUPPIES';
export const SELECT_PUPPY = 'SELECT_PUPPY';

export const receivePuppies = function (puppies) {
    return {
        type: RECEIVE_PUPPIES,
        receivedPuppies: puppies
    };
};

// if thunk receives a function that returns a function, it treats it as an async callback
export const loadPuppiesFromServer = () =>
    dispatch =>
        fetch('api/puppies')
        .then(res => res.json())
        .then(puppies => dispatch(receivePuppies(puppies)))
        .catch(err => console.error(err));


export const receivePuppy = function (puppy) {
  return {
    type: SELECT_PUPPY,
    selectedPuppy: puppy
  }
}

export const loadSelectedPuppy = (puppyId) =>
  dispatch =>
    fetch(`api/puppies/${puppyId}`)
    .then(res => res.json())
    .then(puppy => dispatch(receivePuppy(puppy)))
    .catch(err => console.error(err));
