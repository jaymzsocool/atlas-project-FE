import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import RootReducer from './reducers';
import { createStore, applyMiddleware, compose  } from 'redux';
import createHistory from 'history/createBrowserHistory';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(RootReducer, composeEnhancers(applyMiddleware(thunk)));
const history = createHistory();

ReactDOM.render(<Router history= {history}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
