import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import MainView from './Containers/MainView';
import PostView from './Containers/PostView';

const store = createStore(combineReducers({
    routing: routerReducer
}));

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
          <div>
            <Route exact path="/" component={MainView}/>
            <Route path="/post" component={PostView}/>
          </div>
        </Router>
    </Provider>
  , document.getElementById('react-app')
);