import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
// import BenchesReducer from './benches_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,

});

export default entitiesReducer;