import * as FollowApiUtils from '../util/follow_api_utils';

export const CREATE_FOLLOW = "CREATE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";




export const createFollow = follow => dispatch => (
    FollowApiUtils.createFollow(follow)
    .then(() => {
        return dispatch(receiveFollow(follow));
    }
));

export const deleteFollow = follow => dispatch => (
    FollowApiUtils.deleteFollow(follow)
    .then(() => {
        return dispatch(removeFollow(follow));
    }
));

const receiveFollow = (follow) => ({
    type: CREATE_FOLLOW,
    follow
});

const removeFollow = (follow) => ({
    type: REMOVE_FOLLOW,
    follow
});



// const create_follow = follow => dipatch => 
// FollowApiUtils.followUser(follow)
// .then(follow => );