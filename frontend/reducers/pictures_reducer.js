import {
    RECEIVE_ALL_PICTURES,
    RECEIVE_PICTURE,
    REMOVE_PICTURE,
  } from '../actions/picture_actions';
  import merge from 'lodash/merge';
  import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';

  const PicturesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
      case RECEIVE_ALL_PICTURES:
        return merge({}, action.pictures);
      case RECEIVE_PICTURE:
        return merge({}, oldState, {[action.picture.id]: action.picture});
      case REMOVE_PICTURE:
        let newState = merge({}, oldState);
        delete newState[action.pictureId];
        return newState;
      case RECEIVE_LIKE:
        return merge({}, oldState, {[action.picture.id]: action.picture});
      case REMOVE_LIKE:
        return merge({}, oldState, {[action.picture.id]: action.picture});
      default:
        return oldState;
    }
  };
  
  export default PicturesReducer;