
import * as UserApiutils from '../util/user_api_utils';

export const RECEIVE_USER_PROFILE_PICTURE = "RECEIVE_USER_PROFILE_PICTURE";
export const RECEIVE_USER_BACKGROUND_IMAGE = "RECEIVE_USER_BACKGROUND_IMAGE";
export const RECEIVE_FOLLOWERS = "RECEIVE_FOLLOWERS";
export const RECEIVE_FOLLOWED = "RECEIVE_FOLLOWED";


export const changeProfilePicture = picture => dispatch => {
  
    
  return UserApiutils
  .changeProfilePicture(picture)
  .then(picture => dispatch(receiveUserProfilePicture(picture)));

};

export const changeBackgroundImg = image => dispatch => {
  
    
    return UserApiutils
    .changeBackgroundImg(image)
    .then(picture => dispatch(receiveUserBackgroundImage(picture)));
  
};

export const fetchFollowers = id => dispatch => {
    return UserApiutils
    .fetchFollowers(id)
    .then(followers => dispatch(receiveUserFollowers(followers)));
};

export const fetchFollowed = id => dispatch => {
    return UserApiutils
    .fetchFollowed(id)
    .then(followed => dispatch(receiveUserFollowed(followed)));
};

// changeBackgroundImg
  
export const receiveUserFollowers = followers => ({
    type: RECEIVE_FOLLOWERS,
    followers
});

export const receiveUserFollowed = followed => ({
    type: RECEIVE_FOLLOWED,
    followed
});

export const receiveUserProfilePicture = (picture) => ({
    type: RECEIVE_USER_PROFILE_PICTURE,
    picture 
});

export const receiveUserBackgroundImage = (picture) => ({
    type: RECEIVE_USER_BACKGROUND_IMAGE,
    picture 
});

