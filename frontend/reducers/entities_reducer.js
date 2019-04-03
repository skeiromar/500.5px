import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
// import BenchesReducer from './benches_reducer';
import picturesReducer from './pictures_reducer';
import commentsReducer from './comments_reducer';
import followsReducer from './follows_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    pictures: picturesReducer,
    comments: commentsReducer,
    follows: followsReducer,
});

export default entitiesReducer;