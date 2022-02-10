import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import roorReducer from './reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import rootSaga from './saga/userSaga';
import 'bootstrap/dist/css/bootstrap.min.css';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  roorReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


