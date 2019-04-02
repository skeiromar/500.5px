import {
    RECEIVE_ALL_PICTURES
  } from '../actions/picture_actions';

  const PictureIdsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
      case RECEIVE_ALL_PICTURES:
        return Object.keys(action.pictures);

      default:
        return oldState;
    }
  };
  
  export default PictureIdsReducer;