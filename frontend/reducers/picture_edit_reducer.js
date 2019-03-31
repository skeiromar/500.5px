import { RECEIVE_EDIT_ERRORS, CLEAR_ERRORS} from '../actions/picture_actions';

export default (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_EDIT_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
};