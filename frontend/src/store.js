import  thunk  from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index'

const initalState = {};

const middleware = [thunk];

const store = createStore(rootReducer, initalState, compose(applyMiddleware(...middleware), 
                          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

// console.log(store.getState(), "THE STORE")
export default store;