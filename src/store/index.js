import {createStore, applyMiddleware} from "redux";

import rootReducer from './../reducers/index'

import promiseMiddleware from 'redux-promise'

var store = createStore (rootReducer, applyMiddleware(promiseMiddleware));

//createstore (reducer, middleware);

export default store;
 