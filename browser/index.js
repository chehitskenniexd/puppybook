'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AllPuppies from './AllPuppies';
import AllPuppiesContainer from './AllPuppiesContainer';
import { Provider } from 'react-redux';
import store from './store';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import { loadPuppiesFromServer } from './action-creators'

function onEnterPuppies(nextState) {
  store.dispatch(loadPuppiesFromServer());
}

ReactDOM.render(
  <Provider store={store}>
    <div className="container flexbox-container">
      <div className="jumbotron">
        <Router history={hashHistory}>
          <Route path="/">
            <Route path="puppies" component={AllPuppiesContainer} 
              onEnter={(nextState) => {store.dispatch(loadPuppiesFromServer())}} />
            <IndexRedirect to="puppies" />
          </Route>
        </Router>
      </div>
    </div>
  </Provider>,
  document.getElementById('app')
);
