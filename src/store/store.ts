import roorReducer from '../reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import rootSaga from '../saga/userSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    roorReducer,
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

