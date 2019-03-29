import * as FollowApiUtils from '../util/follow_api_utils';

export const CREATE_FOLLOW = "CREATE_FOLLOW";



const receive_follow = (follow) => ({
    type: CREATE_FOLLOW,
    follow
});




// const create_follow = follow => dipatch => 
// FollowApiUtils.followUser(follow)
// .then(follow => );