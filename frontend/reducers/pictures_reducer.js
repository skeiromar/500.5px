import {
    RECEIVE_ALL_PICTURES,
    RECEIVE_PICTURE,
    REMOVE_PICTURE,
  } from '../actions/picture_actions';
  import merge from 'lodash/merge';
  import { RECEIVE_PICTURE_LIKE, REMOVE_PICTURE_LIKE } from '../actions/like_actions';

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
      case RECEIVE_PICTURE_LIKE:
        let newerState = merge({}, oldState);
        let picture = newerState[action.like.pictureId];  
        
        picture.numLikes += 1;
        picture.ids.push(action.like.authorId);
        
        return newerState;

      case REMOVE_PICTURE_LIKE:
        let newestState = merge({}, oldState);
        // debugger
        let pic = newestState[action.like.pictureId];  
        
        pic.numLikes -= 1;
        pic.ids.filter(el => el !== action.like.authorId);
        
        return newestState;

      default:
        return oldState;
    }
  };
  
  export default PicturesReducer;