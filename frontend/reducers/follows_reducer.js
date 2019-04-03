import {merge} from 'lodash';
import { RECEIVE_FOLLOWERS, RECEIVE_FOLLOWED } from '../actions/user_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_FOLLOWERS:
            // debugger
            return merge({}, action.followers);

        case RECEIVE_FOLLOWED:
            return merge({}, action.followed);            

        default:
            return state;
    }
};