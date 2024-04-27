import { applyMiddleware, createStore } from 'redux'
import todoActionReducer from '../reducer/reducer';
import { thunk } from 'redux-thunk';

const store = createStore(todoActionReducer, applyMiddleware(thunk));

export default store;