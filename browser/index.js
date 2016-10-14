'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AllPuppies from './AllPuppies';
import AllPuppiesContainer from './AllPuppiesContainer';
import SinglePuppy from './SinglePuppy';
import SinglePuppyContainer from './SinglePuppyContainer';
import { Provider } from 'react-redux';
import store from './store';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import { loadPuppiesFromServer, loadSelectedPuppy} from './action-creators';


function onEnterSinglePuppy(nextState) {
  store.dispatch(loadSelectedPuppy(nextState.params.puppyId));
}


ReactDOM.render(
  <Provider store={store}>
    <div className="container flexbox-container">
      <div className="jumbotron">
        <Router history={hashHistory}>
          <Route path="/">
            <Route path="puppies" component={AllPuppiesContainer}
              onEnter={(nextState) => {store.dispatch(loadPuppiesFromServer())}} />
            <Route path="puppies/:puppyId" component={SinglePuppyContainer} onEnter={onEnterSinglePuppy}/>
            <IndexRedirect to="puppies" />
          </Route>
        </Router>
      </div>
    </div>
  </Provider>,
  document.getElementById('app')
);
