import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// we use logger to keep track of the state of the app 
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';

// we export a function that creates out store with a few things. 
const configureStore = (preloadedState = {}) => (
    createStore(
        rootReducer,
        preloadedState,
        // Here is where we pass logger as well. 
        applyMiddleware(thunk, logger)
        
    )
);

export default configureStore;