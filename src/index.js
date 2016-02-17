import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { App } from './containers/App';


import { combineReducers, createStore } from 'redux';
import * as reducers from './reducers/counter';

//combining reducers as the function name tells
const reducer = combineReducers(reducers);
//registering reducer functions to our store
let store = createStore(reducer);

render(
  //using provider will allow you to easily pass store
  //down to components that are in lower hierarchy.
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
