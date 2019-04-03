import {RECEIVE_CURRENT_USER, RECEIVE_USER} from "../actions/session_actions";
import {merge} from 'lodash';
import { CREATE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';
import {RECEIVE_USER_PROFILE_PICTURE,  RECEIVE_USER_BACKGROUND_IMAGE} from '../actions/user_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, { [action.user.id]: action.user });
        case RECEIVE_USER:
            return merge({}, state, { [action.user.id]: action.user });
        case CREATE_FOLLOW: 
            let newState = merge({}, state);
            let follower_id = action.follow.follower_id;
            let followed_id = action.follow.followed_id;

            newState[follower_id].followedIds.push(followed_id);
            // newState[follower_id].followerIds.push(follower_id);

            return newState
        case REMOVE_FOLLOW: 
            let newerState = merge({}, state);
            let follower_id_1 = action.follow.follower_id;
            let followed_id_1 = action.follow.followed_id;

            let fIds = newerState[follower_id_1].followedIds;
            newerState[follower_id_1].followedIds = fIds.filter(el => el !== followed_id_1);

            // let f1_ids = newerState[follower_id_1].followerIds;
            // newerState[follower_id_1].followerIds = f1_ids.filter(el => el !== follower_id_1);

        
            return newerState

        case RECEIVE_USER_PROFILE_PICTURE:
            // debugger
            let profilePicState = merge({}, state);
            
            profilePicState[action.picture.id].pictureUrl = action.picture.pictureUrl; 

            return profilePicState;

        case RECEIVE_USER_BACKGROUND_IMAGE: 
            let backgroundImageState = merge({}, state);
            backgroundImageState[action.picture.id].backgroundImg = action.picture.backgroundImg; 

            return backgroundImageState;


        default:
            return state;
    }
};